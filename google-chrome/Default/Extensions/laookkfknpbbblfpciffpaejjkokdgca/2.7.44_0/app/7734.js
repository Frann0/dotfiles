"use strict";(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[7734],{99437:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(20144),l=n(88026),i=n(51726),o=n.n(i),d=n(34952),s=n(7838),u=n(81452);let c={};const r={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileClickHandler=!1}),100),e.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),c[e.dataset.mobileClickHandlerId]=t.value,e.addEventListener("click",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",c[e.dataset.mobileClickHandlerId]),delete c[e.dataset.mobileClickHandlerId],delete e.dataset.mobileClickHandlerId,delete e.dataset.justBoundMobileClickHandler)}};var b=n(28692);a.ZP.use(l.Z,{name:"unreactive"}),a.ZP.use(o()),a.ZP.use(d.InlineSvgPlugin),a.ZP.use(b.og),a.ZP.prototype.$xhr=u.Z,a.ZP.prototype.$e=s.Z,a.ZP.directive("mobile-click",r),new a.ZP({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode})}),a.ZP.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$mobile:()=>m.reactive.windowDimensions.width<=450,$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin}});const v=a.ZP},37734:(e,t,n)=>{n.r(t);var a=n(99437),l=n(7838);const i=()=>Promise.all([n.e(698),n.e(3064),n.e(1899),n.e(2849),n.e(8874),n.e(8687),n.e(1814),n.e(6204)]).then(n.bind(n,39879));localStorage.getItem("dev-panel:open")?d():l.Z.listenToOnce(m,"globalEvent:key:backtick",d);const o=localStorage.getObject("dev-panel:pinned-step");function d(){m.utils.loadModuleDefault(i).then((e=>{let t=document.createElement("div");t.setAttribute("id","dev-panel"),document.body.prepend(t),document.body.classList.add("showing-dev-panel"),new a.Z({render:t=>t(e)}).$mount("#dev-panel")}))}o&&m.utils.loadModuleDefault((()=>Promise.all([n.e(3064),n.e(1899),n.e(312)]).then(n.bind(n,55774)))).then((e=>{e.setPinnedStepActiveOnDashLoad(o)}))}}]);