(self.webpackChunk=self.webpackChunk||[]).push([[1530],{88e3:(e,n,t)=>{t.d(n,{o:()=>s});var i=t(29511),o=t(46104);const l=async()=>{var e;return null===(e=await(0,i.O)().bgRpc.api.checkAuthPermissions())||void 0===e||e},r=async()=>{var e;return null===(e=await(0,i.O)().bgRpc.api.requestAuthPermissions())||void 0===e||e};function s({checkPermissions:e=l,requestPermissions:n=r}={}){return(0,o.z)({checkPermissions:e,requestPermissions:n})}},27990:(e,n,t)=>{t.r(n),t.d(n,{UnifiedFunnelLoginReminderPopup:()=>c,UnifiedFunnelLoginReminderPopupView:()=>p});var i=t(5872),o=t(88326),l=t(62111),r=t(27378),s=t(19106),a=t(24606),u=t(88e3),m=t(90055);const c=({continueWithFacebook:e,continueWithEmail:n,continueWithGoogle:t,openSigninPage:i,...o})=>{r.useEffect((()=>{s.J.loginReminderPopupShow(),(0,l.T)().loginReminderPopupShow()}),[]);const{bindSignIn:a,...m}=(0,u.o)(),c={onSignIn:a(i),onContinueWithFacebook:a(e),onContinueWithGoogle:a(t),onContinueWithEmail:a(n)};return r.createElement(p,{...m,...c,...o})},p=({isFlipped:e,needPermissions:n,requestingPermissions:t,onRequestPermissions:l,remove:s,onContinueWithEmail:u,onSignIn:c})=>r.createElement("div",{className:(0,i.cs)(m.unifiedFunnel,e&&m.isFlipped,e&&m.flipped)},r.createElement(o.M,{clickHandler:s},r.createElement("button",{className:m.close})),r.createElement("div",{className:(0,i.cs)(m.popupFooter,e&&m.isFlipped)},"▲"),n?r.createElement(r.Fragment,null,r.createElement("h1",null,"Chrome requires your permission to let Grammarly sign you in"),r.createElement("p",null,"Please follow your browser′s prompts to  allow Grammarly to  read grammarly.com site data."),r.createElement("div",null,r.createElement(a.z,{kind:"success",onClick:l,className:m.mainButton},"Allow ",r.createElement(a.g,null,"and continue to sign in"))),r.createElement("p",{className:m.footer},t?r.createElement(r.Fragment,null,"We are requesting your browser to grant permission."):r.createElement(r.Fragment,null,"Next, your browser will ask you to grant permission."))):r.createElement(r.Fragment,null,r.createElement("h1",null,"You’re missing out on key Grammarly features!"),r.createElement("h2",null,"Sign up to:"),r.createElement("ul",null,r.createElement("li",null,"Get Grammarly for Google Docs Beta"),r.createElement("li",null,"Toggle Grammarly for any website"),r.createElement("li",null,"Start your personalized dictionary")),r.createElement(a.z,{kind:"success",onClick:u,className:m.mainButton},"Sign up"),r.createElement("footer",{className:m.login},"Already have an account? ",r.createElement(o.M,{clickHandler:c},r.createElement("span",{className:m.link},"Log in")))))},46104:(e,n,t)=>{t.d(n,{z:()=>o});var i=t(27378);function o({checkPermissions:e,requestPermissions:n}){const[t,o]=(0,i.useState)(),l=Boolean(t),[r,s]=(0,i.useState)(!1);return{needPermissions:l,requestingPermissions:r,bindSignIn:n=>()=>{l||r||e().then((e=>{e?(o(void 0),n()):o((e=>n))}))},onRequestPermissions:()=>{r||(s(!0),n().then((e=>{s(!1),e&&(o(void 0),null==t||t())})))}}}},90055:e=>{e.exports={unifiedFunnel:"pT8bW",showWrapper:"cu2Gm",flipped:"v6iOt",mainButton:"SBntp",login:"VgcNS",link:"SenZ5",popupFooter:"yjHHz",isFlipped:"B8MAr",close:"w4VV6",auth_button:"X7TsH"}}}]);