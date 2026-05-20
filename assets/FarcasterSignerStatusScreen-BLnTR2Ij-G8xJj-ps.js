import{Cn as e,Di as t,Lo as n,Mn as r,Vi as i,Vo as a,an as o,ei as s,wi as c,zo as l}from"./index-CzahqMJ2.js";import{t as u}from"./ScreenLayout-CDMN0cjt-0XYzL1Gu.js";import{n as d,t as f}from"./QrCode-CfqC5IYU-BNTGB2uS.js";import{t as p}from"./farcaster-DPlSjvF5-BlSyCiIZ.js";import{t as m}from"./OpenLink-DZHy38vr-7_ByhPRH.js";import{t as h}from"./CopyToClipboard-DSTf_eKU-BImBiZ-p.js";var g=n(),_=a(l(),1),v=a(s(),1);d();var y=`#8a63d2`,b=({appName:e,loading:t,success:n,errorMessage:r,connectUri:i,onBack:a,onClose:s,onOpenFarcaster:c})=>(0,g.jsx)(u,v.isMobile||t?v.isIOS?{title:r?r.message:`Add a signer to Farcaster`,subtitle:r?r.detail:`This will allow ${e} to add casts, likes, follows, and more on your behalf.`,icon:p,iconVariant:`loading`,iconLoadingStatus:{success:n,fail:!!r},primaryCta:i&&c?{label:`Open Farcaster app`,onClick:c}:void 0,onBack:a,onClose:s,watermark:!0}:{title:r?r.message:`Requesting signer from Farcaster`,subtitle:r?r.detail:`This should only take a moment`,icon:p,iconVariant:`loading`,iconLoadingStatus:{success:n,fail:!!r},onBack:a,onClose:s,watermark:!0,children:i&&v.isMobile&&(0,g.jsx)(x,{children:(0,g.jsx)(m,{text:`Take me to Farcaster`,url:i,color:y})})}:{title:`Add a signer to Farcaster`,subtitle:`This will allow ${e} to add casts, likes, follows, and more on your behalf.`,onBack:a,onClose:s,watermark:!0,children:(0,g.jsxs)(S,{children:[(0,g.jsx)(C,{children:i?(0,g.jsx)(f,{url:i,size:275,squareLogoElement:p}):(0,g.jsx)(E,{children:(0,g.jsx)(o,{})})}),(0,g.jsxs)(w,{children:[(0,g.jsx)(T,{children:`Or copy this link and paste it into a phone browser to open the Farcaster app.`}),i&&(0,g.jsx)(h,{text:i,itemName:`link`,color:y})]})]})}),x=e.div`
  margin-top: 24px;
`,S=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,C=e.div`
  padding: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 275px;
`,w=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`,T=e.div`
  font-size: 0.875rem;
  text-align: center;
  color: var(--privy-color-foreground-2);
`,E=e.div`
  position: relative;
  width: 82px;
  height: 82px;
`,D={component:()=>{let{lastScreen:e,navigateBack:n,data:a}=r(),o=t(),{requestFarcasterSignerStatus:s,closePrivyModal:l}=i(),[u,d]=(0,_.useState)(void 0),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),v=(0,_.useRef)([]),y=a?.farcasterSigner;(0,_.useEffect)((()=>{let e=Date.now(),t=setInterval((async()=>{if(!y?.public_key)return clearInterval(t),void d({retryable:!0,message:`Connect failed`,detail:`Something went wrong. Please try again.`});y.status===`approved`&&(clearInterval(t),p(!1),h(!0),v.current.push(setTimeout((()=>l({shouldCallAuthOnSuccess:!1,isSuccess:!0})),1400)));let n=await s(y?.public_key),r=Date.now()-e;n.status===`approved`?(clearInterval(t),p(!1),h(!0),v.current.push(setTimeout((()=>l({shouldCallAuthOnSuccess:!1,isSuccess:!0})),c))):r>3e5?(clearInterval(t),d({retryable:!0,message:`Connect failed`,detail:`The request timed out. Try again.`})):n.status===`revoked`&&(clearInterval(t),d({retryable:!0,message:`Request rejected`,detail:`The request was rejected. Please try again.`}))}),2e3);return()=>{clearInterval(t),v.current.forEach((e=>clearTimeout(e)))}}),[]);let x=y?.status===`pending_approval`?y.signer_approval_url:void 0;return(0,g.jsx)(b,{appName:o.name,loading:f,success:m,errorMessage:u,connectUri:x,onBack:e?n:void 0,onClose:l,onOpenFarcaster:()=>{x&&(window.location.href=x)}})}};export{D as FarcasterSignerStatusScreen,D as default,b as FarcasterSignerStatusView};