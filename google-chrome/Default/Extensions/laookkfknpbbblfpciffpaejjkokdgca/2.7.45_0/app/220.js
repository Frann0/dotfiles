(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[220],{90977:(t,e,i)=>{(t.exports=i(23645)(!1)).push([t.id,"\n/* stylelint-disable */\n.modal-component[data-v-0a539754] { --modal-padding: 40px;\n}\n.fade-slide-down-enter-active[data-v-0a539754], .fade-slide-down-leave-active[data-v-0a539754] { transition: all 0.5s ease-out;\n}\n.fade-slide-down-enter[data-v-0a539754], .fade-slide-down-leave-to[data-v-0a539754] { opacity: 0; transform: translateY(0px);\n}\n.fade-slide-up-enter-active[data-v-0a539754], .fade-slide-up-leave-active[data-v-0a539754] { transition: all 0.5s ease-out;\n}\n.fade-slide-up-enter[data-v-0a539754], .fade-slide-up-leave-to[data-v-0a539754] { opacity: 0; transform: translateY(0px);\n}\n[data-v-0a539754] .opt-out { margin-bottom: 0px; opacity: 0.45; font-size: 0.8125rem; line-height: 1.4;\n}\n[data-v-0a539754] .opt-out-button { margin-left: -3px; padding: 3px; cursor: pointer; text-decoration: underline; white-space: nowrap;\n}\n[data-v-0a539754] .opt-out-button:hover { opacity: 0.75;\n}\n",""])},24542:(t,e,i)=>{(t.exports=i(23645)(!1)).push([t.id,"\n/* stylelint-disable */\n.popup[data-v-6f20ca0f] { width: 390px; position: fixed; z-index: 100; overflow: visible;\n}\n.popup.popup-pulse[data-v-6f20ca0f]:before { --size: 26px; position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: -1; opacity: 0; animation: 1.8s popup-pulse-6f20ca0f infinite forwards; border-radius: 20px; box-shadow: inset 0 0 var(--size) calc(var(--size)*0.5) white, 0 0 var(--size) calc(var(--size)*0.5) white; content: '';\n}\n@keyframes popup-pulse-6f20ca0f {\n0% { opacity: 0.6; transform: scale(1);\n}\n\t\t\t/*0.1% { opacity: 0.6; }*/\n100% { opacity: 0; transform: scale(1.15);\n}\n}\n.app[data-v-6f20ca0f] { --app-padding: 26px; position: relative;\n}\n.popup-header[data-v-6f20ca0f] { padding-right: 20px; display: flex; align-items: flex-start; justify-content: space-between;\n}\n.popup-title[data-v-6f20ca0f] { margin: 0 0 8px;\n}\n.popup-hide[data-v-6f20ca0f] { margin: 8px; padding: 13px; position: absolute; top: 0; right: 0; z-index: 1; display: flex; align-items: center; justify-content: center;\n}\n.popup-hide .icon[data-v-6f20ca0f] { fill: var(--color-text);\n}\n.popup-body[data-v-6f20ca0f] { padding-right: 20px; font-size: 0.9375rem; line-height: 1.5;\n}\n.popup-footer[data-v-6f20ca0f] { margin: 14px 0 -1px; display: flex; align-items: center;\n}\n.button-primary[data-v-6f20ca0f] { margin-right: 15px;\n}\n.button-secondary[data-v-6f20ca0f] { padding: 0 10px; align-self: stretch; display: flex; align-items: center; opacity: 0.7; cursor: pointer; font-size: 14px; font-weight: 500;\n}\n.button-secondary[data-v-6f20ca0f]:hover { opacity: 0.85;\n}\n.button-secondary[data-v-6f20ca0f]:hover:active { opacity: 0.7;\n}\n",""])},83401:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTIuOTgyIDIxMi45ODIiPjxwYXRoIGQ9Ik0xMzEuODA0IDEwNi40OTFsNzUuOTM2LTc1LjkzNmM2Ljk5LTYuOTkgNi45OS0xOC4zMjMgMC0yNS4zMTItNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiAwTDEwNi40OTEgODEuMTggMzAuNTU0IDUuMjQyYy02Ljk5LTYuOTktMTguMzIyLTYuOTktMjUuMzEyIDAtNi45ODkgNi45OS02Ljk4OSAxOC4zMjMgMCAyNS4zMTJsNzUuOTM3IDc1LjkzNi03NS45MzcgNzUuOTM3Yy02Ljk4OSA2Ljk5LTYuOTg5IDE4LjMyMyAwIDI1LjMxMiA2Ljk5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDBsNzUuOTM3LTc1LjkzNyA3NS45MzcgNzUuOTM3YzYuOTg5IDYuOTkgMTguMzIyIDYuOTkgMjUuMzEyIDAgNi45OS02Ljk5IDYuOTktMTguMzIyIDAtMjUuMzEybC03NS45MzYtNzUuOTM2eiIgLz48L3N2Zz4K"},90220:(t,e,i)=>{"use strict";i.d(e,{R:()=>S,Z:()=>f});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal-base",attrs:{"data-test":"modal-base"}},[e("transition",{attrs:{name:t.transitionName,duration:t.transitionDuration},on:{"after-leave":function(e){t.transitionDuration=null}}},[t.stepActive?e(t.activeStep.component||"Popup",t._b({tag:"component",staticClass:"modal-component",attrs:{"force-active-sub-step-index":t.forceActiveSubStepIndex,plans:t.plans,"plans-error":t.plansError,sales:t.sales,"active-sub-step-index":t.activeSubStepIndex},on:{dismiss:t.dismissModal,stepComplete:t.handleStepCompletion,subStepComplete:t.handleSubStepCompletion,goToSubStep:t.goToSubStep,upgrade:t.showUpgrade,skipOnboarding:t.skipOnboarding,targetElementMissing:t.handleElementMissingError,saveStepProgress:t.saveStepProgress}},"component",t.activeStep,!1)):t._e()],1),t._v(" "),t.activeStep&&t.activeStep.customCss?e("style",{tag:"component",domProps:{innerHTML:t._s(t.activeStep.customCss)}}):t._e(),t._v(" "),t.activeSubStep&&t.activeSubStep.customCss?e("style",{tag:"component",domProps:{innerHTML:t._s(t.activeSubStep.customCss)}}):t._e()],1)};a._withStripped=!0;var s=i(35746),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup nipple",class:[t.nippleClass,t.pulseAnimation?"popup-pulse":""],style:t.popupStyles,attrs:{"data-test":"popup","data-test-id":t.id}},[e("div",{staticClass:"app"},[e("header",{staticClass:"popup-header"},[e("h3",{staticClass:"popup-title"},[t._v(t._s(t.headerText))]),t._v(" "),e("div",{staticClass:"popup-hide icon-wrapper icon-wrapper-close u--mobile-show-bg",on:{click:t.close}},[e("inline-svg",{staticClass:"icon icon-cancel",attrs:{src:i(83401)}})],1)]),t._v(" "),e("div",{staticClass:"popup-body",domProps:{textContent:t._s(t.bodyText)}}),t._v(" "),e("div",{staticClass:"popup-footer"},[[t.hideNext?t._e():e("button",{staticClass:"button button-primary next",attrs:{"data-test":"next"},on:{click:t.completeStep}},[t._v(t._s(t.nextButtonText))]),t._v(" "),t.hideSkip?t._e():e("span",{staticClass:"opt-out"},[t._v("\n\t\t\t\t\tSeen these already? "),e("span",{staticClass:"opt-out-button",on:{click:t.skipOnboarding}},[t._v("Skip")])])],t._v(" "),[t.ctaCallback?e("span",{staticClass:"button button-primary",class:t.ctaClasses,on:{click:t.clickCta}},[t._v(t._s(t.ctaText))]):t._e(),t._v(" "),t.secondaryCallback?e("span",{staticClass:"button-secondary",class:t.secondaryClasses,on:{click:t.clickSecondary}},[t._v(t._s(t.secondaryText))]):t._e()]],2)])])};o._withStripped=!0;const n={name:"Popup",customNipplePositionId:"customNipplePosition",props:{id:{type:String,required:!0},targetElementSelector:{type:String,required:!0},elementReadyEvent:{type:String,default:""},position:{type:String,default:"top-right"},headerText:{type:String,default:""},bodyText:{type:String,default:""},ctaText:{type:String,default:"Learn more…"},ctaCallback:{type:Function,default:null},ctaClasses:{type:String,default:""},secondaryText:{type:String,default:""},secondaryCallback:{type:Function,default:null},secondaryClasses:{type:String,default:""},hideCallback:{type:Function,default:null},nextButtonText:{type:String,default:"Next"},windowEdgePadding:{type:Number,default:7},targetDistance:{type:Number,default:0},pulseAnimation:{type:Boolean,default:!0},hideSkip:{type:Boolean,default:!1},hideNext:{type:Boolean,default:!1}},data:()=>({nippleClass:"",popupStyles:{}}),mounted(){this.$e.listenTo(m,"globalEvent:window:resize devPanelToggled",this.handleResize);const t=this.getTargetElement();t?this.setPosition(t):this.elementReadyEvent&&m.on(this.elementReadyEvent,this.setPosition)},destroyed(){this.$e.stopListening(m,"globalEvent:window:resize",this.handleResize)},methods:{calculatePosition(t,e){try{const i=()=>m>h-l-this.windowEdgePadding?`${Math.round(h-m-this.windowEdgePadding)}px`:"",a=()=>h-v<l+this.windowEdgePadding?`${Math.round(h-v-this.windowEdgePadding)}px`:"",s=t=>t<this.windowEdgePadding?this.windowEdgePadding-t:0,o=t=>`${t}: ${u-d}px`;let n={},p="",r=t.getBoundingClientRect(),l=350,d=0,c=6,u=33,h=window.innerWidth,S=(r.right-r.left)/2+r.left,m=S-u-c,v=h-S-u-c,g=r.bottom+this.targetDistance,f=window.innerHeight-r.top+this.targetDistance;switch(e){case"top-left":d=s(v),d&&(p=o("right")),n={left:"auto",right:`${v+d}px`,bottom:`${f}px`,"max-width":a()};break;case"top-right":d=s(m),d&&(p=o("left")),n={left:`${m+d}px`,top:"auto",bottom:`${f}px`,"max-width":i()};break;case"bottom-left":d=s(v),d&&(p=o("right")),n={left:"auto",right:`${v+d}px`,top:`${g}px`,"max-width":a()};break;case"bottom-right":d=s(m),d&&(p=o("left")),n={left:`${m+d}px`,top:`${g}px`,"max-width":i()}}return{popupCss:n,nipplePositionOverride:p}}catch(t){return this.$emit("targetElementMissing"),{}}},getNippleClass(){switch(this.position){case"top-left":return"nipple-bottom-right";case"top-right":return"nipple-bottom-left";case"bottom-left":return"nipple-top-right";case"bottom-right":return"nipple-top-left"}},setPosition(t=this.getTargetElement()){let e=this.calculatePosition(t,this.position);this.popupStyles=e.popupCss,this.nippleClass=this.getNippleClass(),e.nipplePositionOverride?this.createStyleElement(this.$options.customNipplePositionId,`.popup[class*=nipple]:after { ${e.nipplePositionOverride} !important; }`):this.removeStyleElement(this.$options.customNipplePositionId)},handleResize(t){!0===t?this.$nextTick(this.setPosition):(clearTimeout(this.timeout),this.timeout=setTimeout(this.setPosition,1e3))},clickCta(){this.ctaCallback&&this.ctaCallback()},clickSecondary(){this.secondaryCallback&&this.secondaryCallback()},completeStep(){this.$emit("stepComplete")},skipOnboarding(){this.$emit("skipOnboarding")},close(){this.hideCallback&&this.hideCallback(),this.$emit("dismiss")},createStyleElement(t,e){let i=document.createElement("style"),a=document.createTextNode(e);i.setAttribute("id",t),i.setAttribute("type","text/css"),i.appendChild(a),document.head.appendChild(i)},removeStyleElement(t){let e=document.head.querySelector(`#${t}`);e&&e.parentNode.removeChild(e)},getTargetElement(){return document.querySelector(this.targetElementSelector)}}};i(99454);var p=i(51900);const r=(0,p.Z)(n,o,[],!1,null,"6f20ca0f",null).exports;var l=i(92729),d=i(99100),c=i(65238),u=i(61899),h=i(81405);const S="modal:showOnNextPageLoad",v=new h.ZP({feature:"onboarding"}),g={name:"ModalManager",components:{Popup:r},data:()=>({activeStep:{},forceActiveSubStepIndex:null,activeSubStepIndex:0,plans:{},plansError:!1,sales:{},transitionDuration:null}),unreactive:()=>({allocatedDefinitions:{}}),computed:{transitionName(){return this.activeStep.transitionName||(["top-right","top-left"].includes(this.activeStep.position)?"fade-slide-up":"fade-slide-down")},activeSubStep(){return this.activeStep&&this.activeStep.subSteps&&this.activeStep.subSteps[this.activeSubStepIndex]||null},activeStepIsOnboarding(){return this.allocatedDefinitions&&Object.keys(this.allocatedDefinitions).includes(this.activeStep.id)},activeStepIsForced(){var t;return!(null===(t=this.activeStep)||void 0===t||!t.forcedActive)},stepActive(){return!!Object.keys(this.activeStep).length}},watch:{activeStep(t,e){var i;t!==e&&(null===(i=t.onShow)||void 0===i||i.call(t),this.activeStepIsOnboarding&&v.capture("onboarding step show",{name:t.name.toLowerCase()})),null!=t&&t.getPlanInfo&&!Object.keys(this.plans).length&&this.getPlanInfo().then((({plans:t={},sales:e={}}={})=>{this.plans=t,this.sales=e||{}})).catch((t=>{this.plansError=!0,console.error(t)}))}},created(){m.modals={stepsEnum:c.os,definitions:d.U},m.on("modal:forceStep",this.forceStep),m.on("modal:close",this.dismissModal),m.on("modal:showUpgrade",this.showUpgrade),m.once("modal:loadOnboarding",this.loadOnboarding),m.trigger("modalManager:created"),this.checkModalOnLoad()},destroyed(){m.off("onboarding:initiate",this.initiateOnboardingStep),m.off("modal:forceStep",this.forceStep),m.off("modal:close",this.dismissModal),m.off("modal:showUpgrade",this.showUpgrade),m.off("modal:loadOnboarding",this.loadOnboarding),delete m.modals},methods:{async loadOnboarding(){const t=()=>m.trigger("onboarding:stepsAnalyzed",{onboardingSkipped:!0});try{if(localStorage.getItem("onboarding:skip"))return t();if(this.allocatedDefinitions=(0,u.CW)(),this.stepActive)return;await s.Z.refresh({mode:"cache"});let[e,i]=await this.getActiveStep();if(!e)return t();if(await s.Z.refresh({mode:"server"}),[e,i]=await this.getActiveStep(),!e)return t();m.introductionActive?(m.once("onboarding:initiate",this.initiateOnboardingStep.bind(this,e,i)),m.trigger("onboarding:stepsAnalyzed",{keepAppsHidden:this.activeStep.hideOtherApps})):this.initiateOnboardingStep(e,i)}catch(e){console.error(e),t()}},updateStepActiveProperties(t,{deactivate:e,activeSubStepIndex:i,forced:a}={}){e?(this.$delete(t,"activeSubStepIndex"),this.$delete(t,"active"),this.$delete(t,"forcedActive")):(t.active||this.$set(t,"active",!0),t.subSteps&&this.$set(t,"activeSubStepIndex",i),a&&this.$set(t,"forcedActive",!0))},async forceStep(t,e,{completeCurrentStep:i}={}){this.stepActive&&(i?await this.handleStepCompletion():this.dismissModal()),this.$nextTick((()=>{void 0!==e?this.activeSubStepIndex=e:void 0!==t.firstSubStep&&(this.activeSubStepIndex=t.firstSubStep()),this.activeStep=t,this.updateStepActiveProperties(this.activeStep,{activeSubStepIndex:this.activeSubStepIndex,forced:!0})}))},async getActiveStep(){for(let e in this.allocatedDefinitions){if(!this.allocatedDefinitions.hasOwnProperty(e))continue;let i=this.allocatedDefinitions[e],a=s.Z.getStep(i);var t;if((!a||!["complete","dismissed","legacy"].includes(a.status))&&await this.userMeetsDateRestrictions(i)&&this.checkShouldActivate(i))return[i,(null==a||null===(t=a.data)||void 0===t?void 0:t.activeSubStepIndex)||0]}return[]},async userMeetsDateRestrictions(t){let e=localStorage.getItem("user:createTime");if(!e)return!1;let i=!0;if(t.plusSubscriptionTimeGate){let e=localStorage.getItem("user:firstSubscriptionStart");if(!e)try{const t=await this.$xhr.get("user/profile?details=1");e=null==t?void 0:t.data.subscriptionSummary.firstSubscriptionStart,e&&localStorage.setItem("user:firstSubscriptionStart",e)}catch(t){console.error(t)}i=new Date(e)>new Date(t.plusSubscriptionTimeGate)}return i&&new Date(e)>new Date(t.userCreatedTimeGate||m.constants.defaultOnboardingStepUserCreatedTimeGate)},checkShouldActivate:t=>!t.shouldActivate||t.shouldActivate(),handleSubStepCompletion(t){var e,i;const a="modal:subStepCompletionIntercepted";if(!0===t&&this.$e.off(a),this.activeSubStep.interceptNextStep&&!0!==t)return this.$e.off(a),this.$e.on(a,this.handleSubStepCompletion.bind(this,!0)),void this.$e.trigger("modal:interceptSubStepCompletion");null===(e=(i=this.activeStep).onSubStepComplete)||void 0===e||e.call(i,{activeSubStep:this.activeSubStep}),this.activeStepIsOnboarding&&v.capture("onboarding sub-step complete",{step:this.activeStep.name.toLowerCase(),sub_step:this.activeSubStep.name.toLowerCase()}),this.activeStep.subSteps&&this.activeSubStepIndex<this.activeStep.subSteps.length-1?(this.activeSubStepIndex++,this.updateStepActiveProperties(this.activeStep,{activeSubStepIndex:this.activeSubStepIndex}),this.activeStepIsForced||this.saveStepProgress(this.activeStep,this.activeSubStepIndex)):this.handleStepCompletion()},async handleStepCompletion({dismissed:t,reallocate:e}={}){var i,a,s,o;const n=()=>{m.models.notificationManager.displayPendingMessages(),this.activeStep={},this.activeSubStepIndex=0};t?null===(i=(a=this.activeStep).onDismiss)||void 0===i||i.call(a,{activeSubStep:this.activeSubStep}):null===(s=(o=this.activeStep).onComplete)||void 0===s||s.call(o),this.activeStepIsOnboarding&&v.capture("onboarding step "+(t?"dismiss":"complete"),{name:this.activeStep.name.toLowerCase()});const p=this.activeStepIsForced;if(p||await this.saveStepProgress(this.activeStep,this.activeSubStepIndex,t?"dismissed":"complete"),this.updateStepActiveProperties(this.activeStep,{deactivate:!0}),e)this.allocatedDefinitions=(0,u.CW)();else if(p)return n();const[r,l]=await this.getActiveStep();if(!r||!this.activeStep)return n();this.activeSubStepIndex=0,"function"==typeof this.activeStep.component&&(await r.component(),r.key&&r.key===this.activeStep.key&&(this.transitionDuration=0)),this.initiateOnboardingStep(r,l)},async saveStepProgress(t,e,i="active"){let a=s.Z.getStep(t);if(a){a.copyProperties(),a.editProps.status=i,a.editProps.data||(a.editProps.data={}),a.editProps.data.activeSubStepIndex=e;try{await s.Z.update(a),a.commitChanges()}catch(t){console.error(t),a.revertChanges()}}else{a=new s.Z.Model,a.updateData({name:t.id,status:i,data:{activeSubStepIndex:e}});try{await s.Z.add(a)}catch(t){console.error(t)}}t.alsoCompletesSteps&&["complete","dismissed"].includes(i)&&await Promise.all(t.alsoCompletesSteps.map((t=>{const e=d.U[t],a=s.Z.getStep(e);return a&&["complete","dismissed"].includes(a.status)?Promise.resolve():this.saveStepProgress(e,void 0,i)})))},initiateOnboardingStep(t,e){t&&(this.activeStep=t,this.activeSubStepIndex=e,this.updateStepActiveProperties(this.activeStep,{activeSubStepIndex:this.activeSubStepIndex}))},dismissModal(){this.handleStepCompletion({dismissed:!0})},skipOnboarding(){localStorage.setItem("onboarding:skip",!0),this.dismissModal()},goToSubStep(t){this.activeSubStepIndex=t,this.updateStepActiveProperties(this.activeStep,{activeSubStepIndex:this.activeSubStepIndex})},showUpgrade(){var t,e;null===(t=(e=this.activeStep).onUpgradeClick)||void 0===t||t.call(e),m.utils.useAppleAppPayment()&&m.isLoggedIn()?m.utils.openAppleUpgrade():this.forceStep(d.U[c.os.UPGRADE],void 0,{completeCurrentStep:!0})},handleElementMissingError(){this.$set(this.activeStep,"error",!0)},getPlanInfo(){return this.$xhr.get("account/plans",{timeout:8e3}).then((({data:t})=>{if(!t)throw new Error("no data for plans");return localStorage.getItem("sale:force")&&m.utils.isDev()&&(t.personal.sales={yearly:l.om}),t.personal}))},checkModalOnLoad(){const t=localStorage.getObject(S);t&&(this.forceStep(d.U[c.os[t.step]],t.subStepIndex),localStorage.removeItem(S))}}};i(30362);const f=(0,p.Z)(g,a,[],!1,null,"0a539754",null).exports},30362:(t,e,i)=>{var a=i(90977);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,i(45346).Z)("0490ca9a",a,!1,{ssrId:!0})},99454:(t,e,i)=>{var a=i(24542);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,i(45346).Z)("1111497a",a,!1,{ssrId:!0})}}]);