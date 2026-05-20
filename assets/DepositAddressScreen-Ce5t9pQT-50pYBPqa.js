import{Cn as e,Lo as t,Mn as n,Pi as r,Vi as i,Vo as a,an as o,ei as s,ki as c,ti as l,zo as u}from"./index-mAOZwWWo.js";import{t as d}from"./createLucideIcon-Bf2XoYZc.js";import{t as f}from"./check-DEioC7mn.js";import{n as p,t as m}from"./poll-B_TitGtW-BKra5b9Y.js";import{t as h}from"./hourglass-BvVlBgoj.js";import{t as g}from"./triangle-alert-B5luNV_2.js";import{c as _}from"./ModalHeader-YJ2uCOoj-Cf1qo8O6.js";import{t as v}from"./ScreenLayout-CDMN0cjt-MEte9f6y.js";import{t as y}from"./CopyableText-D2t3Xzed-CFwUegiU.js";import{n as ee,t as te}from"./QrCode-CfqC5IYU-Cb0e6YkL.js";import{r as b}from"./styles-DVyDvTdj-B0eTfcJQ.js";var x={path:`/api/v1/onramp/deposit_addresses/quote`,method:`POST`},ne={path:`/api/v1/onramp/deposit_addresses/orders/:order_id`,method:`GET`},re={path:`/api/v1/onramp/deposit_addresses/:deposit_address_id/next_order`,method:`GET`},S={path:`/api/v1/onramp/deposit_addresses/deposit_config`,method:`GET`},ie=d(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),C=d(`qr-code`,[[`rect`,{width:`5`,height:`5`,x:`3`,y:`3`,rx:`1`,key:`1tu5fj`}],[`rect`,{width:`5`,height:`5`,x:`16`,y:`3`,rx:`1`,key:`1v8r4q`}],[`rect`,{width:`5`,height:`5`,x:`3`,y:`16`,rx:`1`,key:`1x03jg`}],[`path`,{d:`M21 16h-3a2 2 0 0 0-2 2v3`,key:`177gqh`}],[`path`,{d:`M21 21v.01`,key:`ents32`}],[`path`,{d:`M12 7v3a2 2 0 0 1-2 2H7`,key:`8crl2c`}],[`path`,{d:`M3 12h.01`,key:`nlz23k`}],[`path`,{d:`M12 3h.01`,key:`n36tog`}],[`path`,{d:`M12 16v.01`,key:`133mhm`}],[`path`,{d:`M16 12h1`,key:`1slzba`}],[`path`,{d:`M21 12v.01`,key:`1lwtk9`}],[`path`,{d:`M12 21v-1`,key:`1880an`}]]),w=d(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),ae=d(`undo-2`,[[`path`,{d:`M9 14 4 9l5-5`,key:`102s5s`}],[`path`,{d:`M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11`,key:`f3b9sd`}]]),T=a(u(),1),E=t(),D=c((()=>null)),O=e=>{D.getState()!==null&&D.setState(e)};s(),ee();var oe=class extends T.Component{static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){this.props.onError(e)}componentDidUpdate(e){e.resetKey!==this.props.resetKey&&this.state.hasError&&this.setState({hasError:!1})}render(){return this.state.hasError?null:this.props.children}constructor(...e){super(...e),this.state={hasError:!1}}},k=new Set([`eip155:11155111`,`eip155:84532`,`eip155:421614`,`eip155:11155420`,`eip155:80002`]);function A(e){return k.has(e)}function j(e,t){let n=function(e){if(e.startsWith(`solana:`))return`solana`;if(e.startsWith(`bip122:`))return`bitcoin-segwit`;if(e.startsWith(`eip155:`))return`ethereum`;throw Error(`Unsupported CAIP-2 namespace: ${e.split(`:`)[0]}`)}(e);return t.find((e=>e.type===`wallet`&&e.chainType===n&&e.address))?.address}function se(e,t,n){let r=Number(e);return!Number.isFinite(r)||r===0?`1 ${t} ≈ ${e} ${n}`:r>=.01?`1 ${t} ≈ ${M(r)} ${n}`:`${M(1/r)} ${t} ≈ 1 ${n}`}function M(e){return e>=1e3?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:0}).format(Math.round(e)):e>=100?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:1}).format(e):e>=1?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:2}).format(e):new Intl.NumberFormat(`en-US`,{maximumFractionDigits:4}).format(e)}function N(e,t){let n=Number(e);if(!Number.isFinite(n)||n===0)return e;let r=t==null?n:n/10**t;return r>=1e3?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:2}).format(r):r>=1?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:4}).format(r):r>=1e-4?new Intl.NumberFormat(`en-US`,{maximumFractionDigits:6}).format(r):new Intl.NumberFormat(`en-US`,{maximumSignificantDigits:4}).format(r)}function P(e,t){for(let n of t)if(n.chains.some((t=>t.address.toLowerCase()===e.toLowerCase())))return n.symbol.toUpperCase();return e}function F(e,t){for(let n of Object.values(t))if(n.caip2===e)return n.displayName;return e}function ce(e,t,n){let r=Number(e);if(!Number.isFinite(r)||r===0)return e;let i=t<=6?2:t<=9?4:6,a=10**i,o=Math.ceil(r/10**t*a)/a,s=new Intl.NumberFormat(`en-US`,{minimumFractionDigits:i,maximumFractionDigits:i}).format(o);return n?`${s} ${n}`:s}function I(){let e=D(),{closePrivyModal:t,privy:n}=i(),r=e?.params??null,a=!!e&&A(e.params.destinationChain),o=e?.config??{status:`loading`},s=(0,T.useCallback)((e=>{O({modalState:e})}),[]),c=(0,T.useCallback)((async()=>{if(r){O({config:{status:`loading`}});try{let e=await n.fetchPrivyRoute(S,{query:{destination_chain_id:r.destinationChain}});O({config:{status:`ready`,data:{currencies:e.currencies,chains:e.chains}}})}catch(e){throw O({config:{status:`error`,error:e instanceof Error?e:Error(`Failed to load deposit config`)}}),e}}}),[r,n]),l=(0,T.useCallback)((()=>{if(!e)return;let{modalState:n}=e;n.step===`complete`?e.onComplete():n.step===`failed`?e.onError(Error(`DEPOSIT_FAILED`)):n.step===`error`?e.onError(Error(n.error)):n.step===`refunded`?e.onError(Error(`DEPOSIT_REFUNDED`)):e.onError(Error(`USER_EXITED`)),t({shouldCallAuthOnSuccess:!1})}),[e,t]);return{modalState:e?.modalState??{step:`intro`},setModalState:s,config:o,retryConfig:c,params:r,isTestnet:a,close:l}}var L=360;function R(e,t){switch(e.status){case`completed`:return t({step:`complete`,order:e});case`refunded`:return t({step:`refunded`,order:e});case`failed`:return t({step:`failed`,order:e});case`executing`:return t({step:`processing`,order:e});default:return e.status,t({step:`processing`,order:e})}}function le({depositAddressId:e,enabled:t,quoteCreatedAt:n}){let{privy:r}=i(),{setModalState:a}=I();(0,T.useEffect)((()=>{if(!e)return;let t=new AbortController;return m({operation:async()=>(await r.fetchPrivyRoute(re,{params:{deposit_address_id:e},query:{after:n}})).order??void 0,until:e=>e!==void 0,delay:5e3,interval:5e3,attempts:L,signal:t.signal}).then((e=>{t.signal.aborted||(e.status===`success`&&e.result?R(e.result,a):e.status===`max_attempts`&&a({step:`error`,error:`TIMEOUT_WAITING_FOR_NEXT_ORDER`}))})),()=>{t.abort()}}),[t,e,r,n,a])}var ue=({sourceAmount:e,sourceSymbol:t,sourceChainName:n,destinationAmount:r,destSymbol:i,destChainName:a,isTestnet:o,onClose:s})=>(0,E.jsx)(v,{icon:f,iconVariant:`success`,title:`Transfer complete`,subtitle:r?`Received ${N(e)} ${t} on ${n} and converted it to ${N(r)} ${i} on ${a}. Funds are available to use.`:`Your ${t} has been received and is now available in your wallet.`,showClose:!0,onClose:s,primaryCta:{label:`Done`,onClick:s},footerText:o?`Testnet`:void 0,watermark:!1});function de(){let{modalState:e,isTestnet:t,close:n,config:r}=I();if(e.step!==`complete`)throw Error(`UNEXPECTED_STATE`);let{order:i}=e,{sourceSymbol:a,sourceChainName:o,destSymbol:s,destChainName:c}=(0,T.useMemo)((()=>{let e=r.status===`ready`?r.data.currencies:[],t=r.status===`ready`?r.data.chains:{};return{sourceSymbol:P(i.source_currency,e),sourceChainName:F(i.source_chain,t),destSymbol:P(i.destination_currency,e),destChainName:F(i.destination_chain,t)}}),[i,r]);return(0,E.jsx)(ue,{sourceAmount:i.source_amount,sourceSymbol:a,sourceChainName:o,destinationAmount:i.destination_amount,destSymbol:s,destChainName:c,isTestnet:t,onClose:n})}var fe=e.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: var(--privy-color-foreground-3);
  margin: 0.25rem 0 0;
`,z=e.img`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  object-fit: cover;
  flex-shrink: 0;
`,B=e.img`
  width: 2rem;
  height: 2rem;
  border-radius: var(--privy-border-radius-full);
  object-fit: cover;
  flex-shrink: 0;
`,V=e.span`
  font-weight: 500;
`,pe=e.span`
  font-size: 0.875rem;
  color: var(--privy-color-foreground-3);
  margin-left: auto;
`,H=e.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  min-height: 2.25rem;
  border-radius: 6.25rem;
  border: none;
  background-color: var(--privy-color-background-2);

  input {
    flex: 1;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 0.875rem;
    line-height: 1.25rem;
    background: transparent;
    color: var(--privy-color-foreground);

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &::placeholder {
      color: var(--privy-color-foreground-3);
    }
  }
`,U=e.button`
  && {
    position: relative;
    width: 100%;
    display: flex;
    gap: 0.75rem;
    align-items: center;
    padding: 0.625rem 0.75rem;
    min-height: 3.5rem;
    border: 1px solid
      ${e=>e.$selected?`var(--privy-color-icon-interactive)`:`var(--privy-color-foreground-4)`};
    border-radius: var(--privy-border-radius-md);
    background-color: ${e=>e.$selected?`var(--privy-color-info-bg)`:`transparent`};
    color: var(--privy-color-foreground);
    font-size: 0.875rem;
    line-height: 1.5rem;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    transition:
      background-color 200ms ease,
      border-color 200ms ease;

    &:hover {
      background-color: var(--privy-color-background-2);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,W=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 3rem 0;
`,me=e.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0;
`,G=e.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`,K=e.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${e=>e.$status===`done`?`var(--privy-color-success-light, #DCFCE7)`:`var(--privy-color-background-2)`};
`,q=e.div`
  width: 2px;
  height: 1rem;
  background-color: var(--privy-color-background-2);
  margin-left: 0.6875rem;
`,J=e.span`
  font-size: 0.875rem;
  color: var(--privy-color-foreground);
`,he=e.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--privy-border-radius-md);
  background-color: var(--privy-color-background-2);
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-foreground-3);
`,Y=e.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8125rem;
  line-height: 1.25rem;
`,X=e.span`
  color: var(--privy-color-foreground);
  font-weight: 400;
`,Z=e.span`
  color: var(--privy-color-foreground);
  font-weight: 500;
  text-align: right;
  max-width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Q=e(o)`
  && {
    margin-left: auto;
    height: 1.5rem;
    width: 1.5rem;
    border-width: 2px;
    flex-shrink: 0;
  }
`;function ge(){let{modalState:e,setModalState:t,config:n,retryConfig:r,isTestnet:i,close:a}=I();if(e.step!==`error`)throw Error(`UNEXPECTED_STATE`);let{error:o}=e,{title:s,subtitle:c,detail:l,iconVariant:u}=(e=>{switch(e){case`NO_REFUND_WALLET`:return{title:`Wallet not found`,subtitle:`Link a compatible wallet to use as your refund address.`,detail:`No compatible wallet was found to use as a refund address for this chain.`,iconVariant:`warning`};case`AMOUNT_TOO_LOW`:return{title:`Amount too low`,subtitle:`The deposit amount is below the minimum for this route.`,detail:`Try a larger amount or a different token.`,iconVariant:`warning`};case`INSUFFICIENT_LIQUIDITY`:return{title:`Insufficient liquidity`,subtitle:`There isn't enough liquidity for this route right now.`,detail:`Try a smaller amount or a different network.`,iconVariant:`warning`};case`UNSUPPORTED_CHAIN`:case`UNSUPPORTED_CURRENCY`:case`UNSUPPORTED_ROUTE`:case`ROUTE_UNAVAILABLE`:return{title:`Route not available`,subtitle:`This deposit route isn't available right now. Try a different token or network.`,iconVariant:`warning`};case`SANCTIONED_WALLET_ADDRESS`:return{title:`Address restricted`,subtitle:`This address cannot be used for deposits due to compliance restrictions.`,iconVariant:`warning`};case`TIMEOUT_WAITING_FOR_NEXT_ORDER`:case`TIMEOUT_ORDER_COMPLETION`:return{title:`Taking longer than expected`,subtitle:`Your funds are safe. The deposit is still being processed — check back later.`,iconVariant:`subtle`};default:return{title:`Something went wrong`,subtitle:`We couldn't complete your request. Please try again.`,iconVariant:`subtle`}}})(o),[d,f]=(0,T.useState)(!1);return(0,E.jsx)(v,{icon:g,iconVariant:u,title:s,subtitle:c,showClose:!0,onClose:a,primaryCta:{label:`Try again`,onClick:async()=>{if(n.status!==`ready`){f(!0);try{await r(),t({step:`token`})}catch{f(!1)}}else t({step:`token`})},loading:d},footerText:i?`Testnet`:void 0,watermark:!0,children:l?(0,E.jsxs)(he,{children:[(0,E.jsx)(g,{size:16,color:`var(--privy-color-foreground-3)`,style:{flexShrink:0,marginTop:2}}),(0,E.jsx)(`span`,{children:l})]}):null})}function _e(){let{modalState:e,isTestnet:t,close:n}=I();if(e.step!==`failed`)throw Error(`UNEXPECTED_STATE`);let{order:r}=e;return(0,E.jsx)(v,{icon:g,iconVariant:`error`,title:`Transfer failed`,subtitle:`Something went wrong processing your transfer.`,showClose:!0,onClose:n,primaryCta:{label:`Done`,onClick:n},secondaryCta:{label:`Learn about manual recovery`,onClick:()=>window.open(`https://docs.privy.io`,`_blank`,`noopener,noreferrer`)},footerText:t?`Testnet`:void 0,watermark:!0,children:(0,E.jsxs)(ve,{href:r.tracking_url,target:`_blank`,rel:`noopener noreferrer`,children:[`Reference: `,r.provider_request_id]})})}var ve=e.a`
  text-align: center;
  font-size: 0.75rem;
  opacity: 0.7;
  text-decoration: underline;
  cursor: pointer;
  color: var(--privy-color-foreground-3);
`;function ye(){let{isTestnet:e,close:t,setModalState:n,config:r}=I(),[i,a]=(0,T.useState)(!1);return(0,T.useEffect)((()=>{i&&(r.status===`ready`&&n({step:`token`}),r.status===`error`&&n({step:`error`,error:`ROUTE_UNAVAILABLE`}))}),[i,r.status,n]),(0,E.jsx)(v,{icon:C,iconVariant:`subtle`,title:`Add funds`,subtitle:`Top up your account by sending crypto from any wallet. Conversion and routing handled by Relay.`,showClose:!0,onClose:t,primaryCta:{label:`Continue`,onClick:()=>a(!0),loading:i&&r.status===`loading`,loadingText:null},footerText:e?`Testnet`:void 0,watermark:!0})}function be(){let{modalState:e,setModalState:t,isTestnet:n,close:a}=I(),[o,s]=(0,T.useState)(``),[c,l]=(0,T.useState)(-1);if(e.step!==`network`)throw Error(`UNEXPECTED_STATE`);let{availableChains:u}=e,d=(0,T.useMemo)((()=>o?u.filter((e=>e.displayName.toLowerCase().includes(o.toLowerCase()))):u),[u,o]),{confirm:f,isCreating:p}=function(e){let t=D(),{privy:n}=i(),{user:a}=r(),{params:o,setModalState:s}=I(),[c,l]=(0,T.useState)(!1);return{confirm:(0,T.useCallback)((async e=>{if(!e||!o)return;let r=e.caip2,i=o.refundAddress??j(r,a?.linkedAccounts??[]);if(!i)return void s({step:`error`,error:`NO_REFUND_WALLET`});let c=t?.modalState;if(c&&c.step===`network`){l(!0);try{let t=await n.fetchPrivyRoute(x,{body:{source_chain:r,source_currency:e.currencyAddress,destination_chain:o.destinationChain,destination_currency:o.destinationCurrency,destination_address:o.destinationAddress,refund_address:i,...o.slippageBps==null?{}:{slippage_bps:o.slippageBps}}});s({step:`address`,selectedCurrency:c.selectedCurrency,selectedChain:e,quote:t})}catch(e){s({step:`error`,error:(e instanceof Error?e:Error(String(e))).message})}finally{l(!1)}}}),[e,o,a,t,n,s]),isCreating:c}}(d);return(0,E.jsxs)(v,{title:`Select network`,showBack:!0,onBack:()=>t({step:`token`}),showClose:!0,onClose:a,footerText:n?`Testnet`:void 0,watermark:!0,children:[(0,E.jsxs)(H,{children:[(0,E.jsx)(w,{size:16,color:`var(--privy-color-foreground-3)`}),(0,E.jsx)(`input`,{value:o,onChange:e=>s(e.target.value),placeholder:`Search networks...`})]}),(0,E.jsx)(b,{style:{marginTop:`1rem`,height:`22rem`},$colorScheme:`light`,children:d.map(((e,t)=>(0,E.jsxs)(U,{$selected:c===t,onClick:()=>{l(t),f(e)},children:[(0,E.jsx)(B,{src:e.iconUrl,alt:e.displayName}),(0,E.jsx)(V,{children:e.displayName}),p&&t===c&&(0,E.jsx)(Q,{})]},e.chainId)))})]})}var xe=({trackingUrl:e,isTestnet:t,onClose:n})=>(0,E.jsx)(v,{icon:h,iconVariant:`subtle`,title:`Transfer in progress`,subtitle:`Your deposit was received and the transfer is now processing.`,showClose:!0,onClose:n,secondaryCta:{label:`View on block explorer ↗`,onClick:()=>window.open(e,`_blank`,`noopener,noreferrer`)},footerText:t?`Testnet`:void 0,watermark:!1,children:(0,E.jsxs)(me,{children:[(0,E.jsxs)(G,{children:[(0,E.jsx)(K,{$status:`done`,children:(0,E.jsx)(f,{size:14,color:`var(--privy-color-icon-success)`,strokeWidth:2})}),(0,E.jsx)(J,{children:`Deposit received`})]}),(0,E.jsx)(q,{}),(0,E.jsxs)(G,{children:[(0,E.jsx)(K,{$status:`active`,children:(0,E.jsx)(Se,{})}),(0,E.jsx)(J,{children:`Bridging`})]}),(0,E.jsx)(q,{}),(0,E.jsxs)(G,{children:[(0,E.jsx)(K,{$status:`pending`}),(0,E.jsx)(J,{children:`Funds arrived`})]})]})}),Se=e.span`
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid var(--privy-color-foreground-3);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;function Ce(){let{modalState:e,isTestnet:t,close:n}=I();if(e.step!==`processing`)throw Error(`UNEXPECTED_STATE`);let{order:r}=e;return function({orderId:e,enabled:t}){let{privy:n}=i(),{setModalState:r}=I();(0,T.useEffect)((()=>{let t=new AbortController;return m({operation:async()=>await n.fetchPrivyRoute(ne,{params:{order_id:e}}),until:e=>e.status!==`executing`,delay:5e3,interval:5e3,attempts:L,signal:t.signal}).then((e=>{t.signal.aborted||(e.status===`success`?R(e.result,r):e.status===`max_attempts`&&r({step:`error`,error:`TIMEOUT_ORDER_COMPLETION`}))})),()=>{t.abort()}}),[t,e,n,r])}({orderId:r.id,enabled:!0}),(0,E.jsx)(xe,{trackingUrl:r.tracking_url,isTestnet:t,onClose:n})}function we(){let{modalState:e,isTestnet:t,close:n}=I();if(e.step!==`refunded`)throw Error(`UNEXPECTED_STATE`);let{order:r}=e;return(0,E.jsx)(v,{icon:ae,iconVariant:`subtle`,title:`Transfer refunded`,subtitle:`Your transfer was received, but the swap couldn't be completed. A refund has been started automatically.`,showClose:!0,onClose:n,primaryCta:{label:`Done`,onClick:n},secondaryCta:{label:`View transaction details`,onClick:()=>window.open(r.tracking_url,`_blank`,`noopener,noreferrer`)},footerText:t?`Testnet`:void 0,watermark:!0})}function Te(){let{isTestnet:e,close:t,setModalState:n,config:a}=I(),{confirm:s,currencies:c,searchTerm:l,setSearchTerm:u,isSearching:d,isCreating:f}=function(){let{config:e,params:t,setModalState:n}=I(),{privy:a}=i(),{user:o}=r(),[s,c]=(0,T.useState)(``),[l,u]=(0,T.useState)(null),[d,f]=(0,T.useState)(!1),p=(0,T.useRef)(null),m=e.status===`ready`?e.data.currencies:[];(0,T.useEffect)((()=>s&&t?(p.current&&clearTimeout(p.current),p.current=setTimeout((async()=>{f(!0);try{u((await a.fetchPrivyRoute(S,{query:{destination_chain_id:t.destinationChain,term:s}})).currencies)}catch{u(null)}finally{f(!1)}}),300),()=>{p.current&&clearTimeout(p.current)}):(u(null),void f(!1))),[s,t,a]);let h=s?l??m.filter((e=>e.symbol.toLowerCase().includes(s.toLowerCase())||e.name.toLowerCase().includes(s.toLowerCase()))):m,[g,_]=(0,T.useState)(!1);return{confirm:(0,T.useCallback)((async r=>{if(e.status!==`ready`||!r)return;let i=r.chains.map((t=>{let n=e.data.chains[t.chainId];return n?{chainId:t.chainId,caip2:n.caip2,displayName:n.displayName,iconUrl:n.iconUrl,vmType:n.vmType,currencyAddress:t.address,currencyDecimals:t.decimals}:null})).filter((e=>e!==null));if(i.length!==1)n({step:`network`,selectedCurrency:r,availableChains:i});else{let e=i[0],s=t?.refundAddress??j(e.caip2,o?.linkedAccounts??[]);if(!s)return void n({step:`error`,error:`NO_REFUND_WALLET`});_(!0);try{n({step:`address`,selectedCurrency:r,selectedChain:e,quote:await a.fetchPrivyRoute(x,{body:{source_chain:e.caip2,source_currency:e.currencyAddress,destination_chain:t.destinationChain,destination_currency:t.destinationCurrency,destination_address:t.destinationAddress,refund_address:s,...t.slippageBps==null?{}:{slippage_bps:t.slippageBps}}})})}catch(e){n({step:`error`,error:(e instanceof Error?e:Error(String(e))).message})}finally{_(!1)}}}),[e,t,o,a,n]),currencies:h,searchTerm:s,setSearchTerm:c,isSearching:d,isCreating:g}}(),[p,m]=(0,T.useState)(-1);return(0,E.jsx)(v,{title:`Select token`,showBack:!0,onBack:()=>n({step:`intro`}),showClose:!0,onClose:t,footerText:e?`Testnet`:void 0,watermark:!0,children:a.status===`error`?(0,E.jsx)(W,{children:(0,E.jsx)(fe,{children:`Failed to load tokens`})}):a.status===`loading`?(0,E.jsx)(W,{children:(0,E.jsx)(o,{})}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(H,{children:[(0,E.jsx)(w,{size:16,color:`var(--privy-color-foreground-3)`}),(0,E.jsx)(`input`,{value:l,onChange:e=>u(e.target.value),placeholder:`Search tokens...`})]}),d?(0,E.jsx)(W,{children:(0,E.jsx)(o,{})}):(0,E.jsx)(b,{style:{marginTop:`1rem`,height:`22rem`},$colorScheme:`light`,children:c.map(((e,t)=>(0,E.jsxs)(U,{$selected:p===t,onClick:()=>{m(t),s(e)},children:[(0,E.jsx)(z,{src:e.logoURI,alt:e.symbol}),(0,E.jsx)(V,{children:e.name}),f&&t===p?(0,E.jsx)(Q,{}):(0,E.jsx)(pe,{children:e.symbol})]},e.symbol)))})]})})}function Ee({address:e}){let[t,n]=(0,T.useState)(!1);return(0,E.jsx)(E.Fragment,{children:t?(0,E.jsx)(De,{onClick:()=>n(!1),style:{marginTop:`1.5rem`},children:(0,E.jsx)(te,{url:e,size:312,hideLogo:!0})}):(0,E.jsxs)(Oe,{title:`Click to copy address`,style:{marginTop:`1.5rem`},children:[(0,E.jsxs)(ke,{children:[(0,E.jsx)(Ae,{children:`Deposit address`}),(0,E.jsx)(je,{children:e})]}),(0,E.jsx)(Me,{children:(0,E.jsx)(Ne,{type:`button`,onClick:e=>{e.stopPropagation(),n(!0)},children:(0,E.jsx)(C,{size:16,color:`var(--privy-color-icon-muted)`})})})]})})}var De=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`,Oe=e.div`
  display: flex;
  border-radius: var(--privy-border-radius-md);
  background: var(--privy-color-background-clicked, #f1f2f9);
  padding: 1rem;
  cursor: pointer;
  gap: 0.5rem;
`,ke=e.div`
  flex: 1;
  min-width: 0;
  text-align: left;
`,Ae=e.div`
  font-size: 0.75rem;
  color: var(--privy-color-icon-muted);
  line-height: 1rem;
  margin-bottom: 0.25rem;
`,je=e.div`
  word-break: break-all;
  font-size: 0.875rem;
  font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
  font-weight: 500;
  line-height: 1.375rem;
  color: var(--privy-color-foreground);
`,Me=e.div`
  width: 1.5rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding-top: 0.25rem;
`,Ne=e.button`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border-radius: var(--privy-border-radius-xs);

    &:hover {
      background: var(--privy-color-background);
    }

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`;function Pe({quote:e,selectedCurrency:t,selectedChain:n,destinationSymbol:r}){let[i,a]=(0,T.useState)(!1),o=t.symbol.toUpperCase(),s=n.displayName;return(0,E.jsxs)($,{children:[(0,E.jsxs)(Fe,{onClick:()=>a(!i),children:[(0,E.jsxs)(Ie,{children:[t.logoURI&&(0,E.jsx)(z,{src:t.logoURI,alt:o,style:{width:`2rem`,height:`2rem`}}),n.iconUrl&&(0,E.jsx)(Le,{src:n.iconUrl,alt:s})]}),(0,E.jsxs)(Re,{children:[(0,E.jsx)(ze,{children:`You send`}),(0,E.jsxs)(Be,{children:[o,` on `,s]})]}),(0,E.jsx)(Ve,{children:(0,E.jsx)(i?ie:p,{size:16})})]}),i&&(0,E.jsxs)(He,{children:[e.indicative_rate&&(0,E.jsxs)(Y,{children:[(0,E.jsx)(X,{children:`Conversion rate`}),(0,E.jsx)(Z,{children:se(e.indicative_rate,o,r.toUpperCase())})]}),(0,E.jsxs)(Y,{children:[(0,E.jsx)(X,{children:`Max slippage`}),(0,E.jsxs)(Z,{children:[(e.slippage_bps/100).toFixed(1),`%`]})]}),e.minimum_amount&&n&&(0,E.jsxs)(Y,{children:[(0,E.jsx)(X,{children:`Min amount`}),(0,E.jsx)(Z,{children:ce(e.minimum_amount,n.currencyDecimals,t.symbol)})]}),(0,E.jsxs)(Y,{children:[(0,E.jsx)(X,{children:`Refund address`}),(0,E.jsx)(Z,{children:(0,E.jsx)(y,{value:e.refund_address,iconOnly:!0,iconSize:11,children:l(e.refund_address,4,4)})})]})]}),(0,E.jsxs)(Ue,{children:[(0,E.jsx)(g,{size:16,color:`var(--privy-color-icon-muted)`,style:{flexShrink:0}}),(0,E.jsxs)(We,{children:[`Only send `,(0,E.jsx)(`strong`,{children:o}),` on `,(0,E.jsx)(`strong`,{children:s}),`. Other assets may be lost.`]})]})]})}var $=e.div`
  border-radius: var(--privy-border-radius-md);
  border: 1px solid var(--privy-color-foreground-4);
  overflow: hidden;
`,Fe=e.button`
  && {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--privy-color-foreground);
    outline: none;
    box-shadow: none;

    &:focus,
    &:focus-visible {
      outline: none;
      box-shadow: none;
    }
  }
`,Ie=e.span`
  position: relative;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`,Le=e(B)`
  && {
    position: absolute;
    top: -0.125rem;
    right: -0.25rem;
    width: 0.75rem;
    height: 0.75rem;
    box-sizing: content-box;
    border: 1.5px solid #fff;
  }
`,Re=e.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,ze=e.span`
  font-size: 0.75rem;
  color: var(--privy-color-foreground-3);
  line-height: 1rem;
`,Be=e.span`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`,Ve=e.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-clicked, #f1f2f9);
  color: var(--privy-color-foreground-3);
`,He=e.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0.75rem;

  & > * {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--privy-color-foreground-4);
  }

  & > *:last-child {
    border-bottom: none;
  }
`,Ue=e.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0.75rem 0.75rem;
  padding: 0.625rem 0.75rem;
  border-radius: var(--privy-border-radius-sm);
  background: #f8f9fc;
`,We=e.span`
  font-size: 0.8125rem;
  line-height: 1.25rem;
  color: var(--privy-color-icon-muted);
  text-align: left;
`;function Ge(){let{modalState:e,setModalState:t,close:n,config:r,params:i}=I();if(e.step!==`address`)throw Error(`UNEXPECTED_STATE`);let{quote:a,selectedCurrency:o,selectedChain:s}=e,[c,l]=(0,T.useState)(!1);le({depositAddressId:a.id,enabled:!0,quoteCreatedAt:a.created_at});let u=(0,T.useMemo)((()=>{let e=r.status===`ready`?r.data.chains:{};return o.chains.map((t=>{let n=e[t.chainId];return n?{...n,currencyAddress:t.address,currencyDecimals:t.decimals}:null})).filter((e=>e!==null))}),[o,r]),d=(0,T.useMemo)((()=>{let e=i?.destinationCurrency??``;return e?P(e,r.status===`ready`?r.data.currencies:[]):``}),[i?.destinationCurrency,r]);return(0,E.jsxs)(v,{title:`Send ${o?.symbol?.toUpperCase()??`funds`}${s?` on ${s.displayName}`:``}`,subtitle:`Send funds to the address below. Conversion and routing handled by Relay.`,showBack:!0,onBack:()=>t({step:`network`,selectedCurrency:o,availableChains:u}),showClose:!0,onClose:n,watermark:!1,children:[(0,E.jsx)(Pe,{quote:a,selectedCurrency:o,selectedChain:s,destinationSymbol:d}),(0,E.jsx)(Ee,{address:a.deposit_address}),(0,E.jsx)(_,{style:{marginTop:`1rem`,marginBottom:`0.5rem`},onClick:()=>{navigator.clipboard.writeText(a.deposit_address).then((()=>{l(!0),setTimeout((()=>l(!1)),2e3)}))},children:c?`Copied!`:`Copy address`})]})}function Ke(){let{modalState:e,setModalState:t}=I();return(0,E.jsx)(oe,{onError:e=>t({step:`error`,error:e.message||`UNEXPECTED_STATE`}),resetKey:e.step,children:(0,E.jsx)(qe,{})})}function qe(){let{modalState:e}=I();switch(e.step){case`intro`:return(0,E.jsx)(ye,{});case`token`:return(0,E.jsx)(Te,{});case`network`:return(0,E.jsx)(be,{});case`address`:return(0,E.jsx)(Ge,{});case`processing`:return(0,E.jsx)(Ce,{});case`complete`:return(0,E.jsx)(de,{});case`refunded`:return(0,E.jsx)(we,{});case`failed`:return(0,E.jsx)(_e,{});case`error`:return(0,E.jsx)(ge,{});default:return null}}var Je={component:()=>{let{onUserCloseViaDialogOrKeybindRef:e}=n(),t=D(),{close:r,config:i}=I();return(0,T.useEffect)((()=>{e.current=r}),[e,r]),(0,T.useEffect)((()=>{if(i.status===`ready`){for(let e of i.data.currencies)new Image().src=e.logoURI;for(let e of Object.values(i.data.chains))new Image().src=e.iconUrl}}),[i]),t?(0,E.jsx)(Ke,{}):null}};export{Je as default};