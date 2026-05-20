import{Ai as e,Cn as t,F as n,Gi as r,Lo as i,Mn as a,Pi as o,Sn as s,Vi as c,Vo as l,ei as u,zo as d}from"./index-mAOZwWWo.js";import{c as f}from"./ModalHeader-YJ2uCOoj-Cf1qo8O6.js";import{t as p}from"./Screen-z_fZcmzX-C6brt3jB.js";import{a as m,d as h,n as g,o as _,s as v}from"./shared-kjdhNY6K-GoCPY_8s.js";import{t as y}from"./ShieldCheckIcon-CFWzt7AN.js";import{a as b}from"./Layouts-BlFm53ED-Bi_Daxb2.js";var x=i(),S=l(d(),1);u();var C={component:()=>{let[t,i]=(0,S.useState)(!0),{authenticated:s,user:l}=o(),{walletProxy:u,closePrivyModal:d,createAnalyticsEvent:f,client:C}=c(),{navigate:D,data:O,onUserCloseViaDialogOrKeybindRef:k}=a(),[A,j]=(0,S.useState)(void 0),[M,N]=(0,S.useState)(``),[P,F]=(0,S.useState)(!1),{entropyId:I,entropyIdVerifier:L,onCompleteNavigateTo:R,onSuccess:z,onFailure:B}=O.recoverWallet,V=(e=`User exited before their wallet could be recovered`)=>{d({shouldCallAuthOnSuccess:!1}),B(typeof e==`string`?new r(e):e)};return k.current=V,(0,S.useEffect)((()=>{if(!s)return V(`User must be authenticated and have a Privy wallet before it can be recovered`)}),[s]),(0,x.jsxs)(p,{children:[(0,x.jsx)(p.Header,{icon:y,title:`Enter your password`,subtitle:`Please provision your account on this new device. To continue, enter your recovery password.`,showClose:!0,onClose:V}),(0,x.jsx)(p.Body,{children:(0,x.jsx)(w,{children:(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(m,{children:[(0,x.jsx)(_,{type:t?`password`:`text`,onChange:e=>(e=>{e&&j(e)})(e.target.value),disabled:P,style:{paddingRight:`2.3rem`}}),(0,x.jsx)(h,{style:{right:`0.75rem`},children:t?(0,x.jsx)(g,{onClick:()=>i(!1)}):(0,x.jsx)(v,{onClick:()=>i(!0)})})]}),!!M&&(0,x.jsx)(T,{children:M})]})})}),(0,x.jsxs)(p.Footer,{children:[(0,x.jsx)(p.HelpText,{children:(0,x.jsxs)(b,{children:[(0,x.jsx)(`h4`,{children:`Why is this necessary?`}),(0,x.jsx)(`p`,{children:`You previously set a password for this wallet. This helps ensure only you can access it`})]})}),(0,x.jsx)(p.Actions,{children:(0,x.jsx)(E,{loading:P||!u,disabled:!A,onClick:async()=>{F(!0);let t=await C.getAccessToken(),r=e(l,I);if(!t||!r||A===null)return V(`User must be authenticated and have a Privy wallet before it can be recovered`);try{f({eventName:`embedded_wallet_recovery_started`,payload:{walletAddress:r.address}}),await u?.recover({accessToken:t,entropyId:I,entropyIdVerifier:L,recoveryPassword:A}),N(``),R?D(R):d({shouldCallAuthOnSuccess:!1}),z?.(r),f({eventName:`embedded_wallet_recovery_completed`,payload:{walletAddress:r.address}})}catch(e){n(e)?N(`Invalid recovery password, please try again.`):N(`An error has occurred, please try again.`)}finally{F(!1)}},$hideAnimations:!I&&P,children:`Recover your account`})}),(0,x.jsx)(p.Watermark,{})]})]})}},w=t.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,T=t.div`
  line-height: 20px;
  height: 20px;
  font-size: 13px;
  color: var(--privy-color-error);
  text-align: left;
  margin-top: 0.5rem;
`,E=t(f)`
  ${({$hideAnimations:e})=>e&&s`
      && {
        // Remove animations because the recoverWallet task on the iframe partially
        // blocks the renderer, so the animation stutters and doesn't look good
        transition: none;
      }
    `}
`;export{C as PasswordRecoveryScreen,C as default};