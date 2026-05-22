export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Log env vars (masked) so we can confirm they're present
  console.log('ENV CHECK:', {
    hasKey:   !!process.env.AIRTABLE_API_KEY,
    keyStart: process.env.AIRTABLE_API_KEY?.slice(0, 6) || 'MISSING',
    hasBase:  !!process.env.AIRTABLE_BASE,
    base:     process.env.AIRTABLE_BASE || 'MISSING',
    hasTable: !!process.env.AIRTABLE_TABLE,
    table:    process.env.AIRTABLE_TABLE || 'MISSING',
  });

  const {
    walletAddress,
    privyUserId,
    twitterHandle,
    twitterName,
    otherHandles,
    email,
    accessCode,
    referral,
    submittedAt,
  } = req.body;

  const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/${encodeURIComponent(process.env.AIRTABLE_TABLE)}`;
  console.log('Posting to Airtable URL:', url);

  const airtablePayload = {
    fields: {
      'Wallet Address': walletAddress || '',
      'Privy User ID':  privyUserId   || '',
      'Twitter Handle': twitterHandle || '',
      'Twitter Display Name': twitterName || '',
      'Other Handles':  otherHandles  || '',
      'Email':          email         || '',
      'Access Code':    accessCode    || '',
      'Referral':       referral      || '',
      'Submitted At':   submittedAt   || new Date().toISOString(),
    },
  };

  try {
    const airtableRes = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtablePayload),
    });

    const responseText = await airtableRes.text();
    console.log('Airtable status:', airtableRes.status);
    console.log('Airtable response:', responseText);

    if (!airtableRes.ok) {
      return res.status(airtableRes.status).json({
        error: responseText,
      });
    }

    return res.status(200).json(JSON.parse(responseText));

  } catch (error) {
    console.error('Caught error:', error.message);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}