import { usePrivy } from '@privy-io/react-auth';
import { useState } from 'react';
import './index.css';

const AIRTABLE_PAT = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE = import.meta.env.VITE_AIRTABLE_BASE;
const AIRTABLE_TABLE = import.meta.env.VITE_AIRTABLE_TABLE;

export default function App() {
  const {
    ready,          // true once Privy has initialised
    authenticated,  // true if the user has completed login
    user,           // the full user object with linkedAccounts
    login,          // opens Privy's login modal
    linkTwitter,    // links Twitter to an existing session
    connectWallet,  // connects a wallet to an existing session
  } = usePrivy();

  const [tab, setTab]           = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError]       = useState(null);

  // Form fields (plain text — filled alongside Privy auth)
  const [handles,  setHandles]  = useState('');
  const [email,    setEmail]    = useState('');
  const [code,     setCode]     = useState('');
  const [referral, setReferral] = useState('');

  // Pull linked accounts out of the Privy user object
  const wallet  = user?.linkedAccounts?.find(a => a.type === 'wallet');
  const twitter = user?.linkedAccounts?.find(a => a.type === 'twitter_oauth');

  // Progress score
  const score = Math.min(
    (wallet  ? 50 : 0) +
    (twitter ? 25 : 0) +
    (email.trim()    ? 15 : 0) +
    (referral.trim() ? 10 : 0),
    100
  );

  const progressLabel =
    score === 0  ? 'Getting started'       :
    score < 40   ? 'Connecting accounts...' :
    score < 75   ? 'Profile building...'   :
    score < 100  ? 'Almost complete'       : 'Ready to submit';

  async function handleWallet() {
    if (!authenticated) {
      await login();       // first-time: opens login modal
    } else {
      await connectWallet(); // already logged in: add a wallet
    }
  }

  async function handleTwitter() {
    if (!authenticated) {
      await login();
    } else {
      await linkTwitter();
    }
  }

  async function handleSubmit() {
    setSubmitting(true);
    setError(null);

    const fields = {
      'Wallet Address':  wallet?.address       || '',
      'Privy User ID':   user?.id              || '',
      'Twitter Handle':  twitter?.username ? '@' + twitter.username : '',
      'Twitter Name':    twitter?.name         || '',
      'Other Handles':   handles,
      'Email':           email,
      'Access Code':     code,
      'Referral':        referral,
      'Submitted At':    new Date().toISOString(),
    };

    try {
      const res = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE}/${encodeURIComponent(AIRTABLE_TABLE)}`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_PAT}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fields }),
        }
      );

      if (!res.ok) {
        const e = await res.json().catch(() => ({}));
        throw new Error(e?.error?.message || `Error ${res.status}`);
      }

      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  }

  // Don't render until Privy is ready (avoids flash of wrong state)
  if (!ready) return null;

  return (
    <>
      {/* Success modal */}
      {submitted && (
        <div className="modal-overlay open">
          <div className="modal-box">
            <div className="modal-check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="modal-title">You're on the list</div>
            <div className="modal-sub">
              Thanks for applying. We'll reach out with access details
              as we open up spots on Monad Mainnet.
            </div>
            <button className="modal-close" onClick={() => setSubmitted(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Notification banner */}
      <div className="notif-banner">
        <span className="notif-icon">🌀</span>
        Whitelist is now open · Gated launch on Monad Mainnet
      </div>

      {/* Header */}
      <header className="app-header">
        <a href="/" className="app-logo">
         <div className="logo-mark">
  <img src="https://drake.exchange/assets/icon_website_logo_v4_l-298e1892.svg" alt="Drake" />
</div>
          <span className="logo-name">Drake</span>
        </a>
        <nav className="header-links">
          <a href="https://drake.exchange/trade" className="header-link">Trade</a>
          <a href="https://drake.exchange/earn" className="header-link">Earn</a>
          <a href="https://drake.exchange/portfolio" className="header-link">Portfolio</a>
          <a href="https://drake.exchange/leaderboard" className="header-link">Leaderboard</a>
        </nav>
        <button className="header-cta" onClick={login}>
          {authenticated ? 'Connected' : 'Connect Wallet'}
        </button>
      </header>

      {/* Page body */}
      <div className="page-body">
        <div className="page-eyebrow">
          <span className="eyebrow-badge">
            <span className="eyebrow-dot" />
            Gated Launch · Monad Mainnet
          </span>
        </div>
        <h1 className="page-title">Request Access</h1>
        <p className="page-sub">
          The People's Perp DEX. High speed, fully onchain.
          Access is gated during our initial launch phase.
        </p>

        <div className="form-card">
          {/* Tab nav */}
          <div className="tab-nav">
            {['Access', 'Confirm'].map((label, i) => (
              <button
                key={i}
                className={`tab-btn${tab === i ? ' active' : ''}${tab > i ? ' done' : ''}`}
                onClick={() => setTab(i)}
              >
                <span className="tab-step">{tab > i ? '' : i + 1}</span>
                {label}
              </button>
            ))}
          </div>

          {/* Tab 0: Access */}
          {tab === 0 && (
            <div className="tab-panel active">
              <div className="section-label">Your accounts</div>

              <div className="field">
                <label className="field-label">
                  Wallet <span className="opt">Required</span>
                </label>
                <button
                  className={`connect-btn${wallet ? ' connected' : ''}`}
                  onClick={handleWallet}
                  disabled={!ready}
                >
                  <span className="cb-left">
                    <span className="cb-icon">&#x1F4B3;</span>
                    <span>
                      <div className="cb-label">
                        {wallet
                          ? wallet.address.slice(0,6) + '...' + wallet.address.slice(-4)
                          : 'Connect Wallet'}
                      </div>
                      <div className="cb-sub">
                        {wallet ? 'Wallet connected' : 'MetaMask, WalletConnect & more'}
                      </div>
                    </span>
                  </span>
                  <span className="cb-badge">
                    {wallet ? '✓ Connected' : 'Connect'}
                  </span>
                </button>
              </div>

              <div className="field">
                <label className="field-label">
                  Twitter / X <span className="opt">Optional · Recommended</span>
                </label>
                <button
                  className={`connect-btn${twitter ? ' connected' : ''}`}
                  onClick={handleTwitter}
                  disabled={!ready}
                >
                  <span className="cb-left">
                    <span className="cb-icon">&#x1D54F;</span>
                    <span>
                      <div className="cb-label">
                        {twitter ? '@' + twitter.username : 'Connect Twitter'}
                      </div>
                      <div className="cb-sub">
                        {twitter ? 'Account verified' : 'Verify your @handle'}
                      </div>
                    </span>
                  </span>
                  <span className="cb-badge">
                    {twitter ? '✓ Connected' : 'Connect'}
                  </span>
                </button>
              </div>

              <div className="divider" />
              <div className="section-label">Additional info</div>

              <div className="field">
                <label className="field-label">
                  Other handles <span className="opt">Optional</span>
                </label>
                <input className="field-input" type="text"
                  placeholder="Discord / Telegram / Farcaster @handle"
                  value={handles} onChange={e => setHandles(e.target.value)} />
              </div>

              <div className="field">
                <label className="field-label">
                  Email <span className="opt">Optional</span>
                </label>
                <input className="field-input" type="email"
                  placeholder="Notify me when access opens"
                  value={email} onChange={e => setEmail(e.target.value)} />
              </div>

              <div className="field">
                <label className="field-label">
                  Access code <span className="opt">Optional</span>
                </label>
                <input className="field-input" type="text"
                  placeholder="Referral or access code"
                  value={code} onChange={e => setCode(e.target.value)} />
              </div>
            </div>
          )}

          {/* Tab 1: Confirm */}
          {tab === 1 && (
            <div className="tab-panel active">
              <div className="confirm-info">
                <span className="confirm-info-icon">&#x2139;&#xFE0F;</span>
                <p>
                  Access is reviewed manually.{' '}
                  <strong>Connecting your wallet is required.</strong>{' '}
                  Adding your Twitter improves your chances.
                </p>
              </div>
              <div className="section-label">One more thing</div>
              <div className="field">
                <label className="field-label">
                  Nominate someone <span className="opt">Optional</span>
                </label>
                <input className="field-input" type="text"
                  placeholder="@twitter handle"
                  value={referral} onChange={e => setReferral(e.target.value)} />
                <div className="field-hint">
                  Know someone who should be on Drake?
                </div>
              </div>
              {error && (
                <p style={{ color: 'red', fontSize: 13, marginTop: 8 }}>{error}</p>
              )}
            </div>
          )}

          {/* Progress */}
          <div className="progress-wrap" style={{ marginTop: 16 }}>
            <div className="progress-row">
              <span className="progress-label">{progressLabel}</span>
              <span className="progress-pct">{score}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: score + '%' }} />
            </div>
          </div>

          {/* Nav */}
          <div className="form-nav">
            <span className="nav-meta">Step {tab + 1} of 2</span>
            <div className="nav-btns">
              {tab > 0 && (
                <button className="nav-back" onClick={() => setTab(tab - 1)}>
                  Back
                </button>
              )}
              {tab === 0 && (
                <button className="nav-next" onClick={() => setTab(1)}>
                  Continue →
                </button>
              )}
              {tab === 1 && (
                <button
                  className="nav-next"
                  style={{ background: 'var(--green)' }}
                  onClick={handleSubmit}
                  disabled={submitting || !wallet}
                >
                  {submitting ? 'Submitting...' : 'Request Access →'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="app-footer">
        <span className="footer-copy">© Drake Exchange 2026</span>
        <nav className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Docs</a>
          <a href="#">Discord</a>
          <a href="#">Twitter</a>
        </nav>
      </footer>
    </>
  );
}