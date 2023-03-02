(self.webpackChunk=self.webpackChunk||[]).push([[8391],{41145:(e,t,n)=>{n.r(t),n.d(t,{OnboardingDialog:()=>I});var i=n(44577),o=n(26273),s=n(37896),r=n(27378),a=n(41263),l=n(11861),c=n(34283),d=n(68383),h=n(38983),p=n(5872),m=n(75668),g=n(62111),u=n(19106),k=n(88326),v=n(1620),C=n(12187),w=n(53945),b=n.n(w);const E=e=>r.createElement(k.M,{clickHandler:e.clickHandler},r.createElement("button",{...(0,C.Sh)(b().buttonPrimary,e.className)},e.children)),y=e=>r.createElement(k.M,{clickHandler:e.clickHandler},r.createElement("button",{...(0,C.Sh)(b().buttonTertiary,e.className)},e.children)),_=e=>r.createElement(k.M,{dataGrammarlyPart:"btnCloseOnboarding",clickHandler:e.clickHandler},r.createElement(v.P,{color:"white"}));var f=n(15486),S=n.n(f);const x=({isActive:e})=>r.createElement("div",{...(0,C.Sh)(S().progressDot,e&&S().active)}),N=({stepIndex:e,totalSteps:t})=>r.createElement("div",{className:S().progressDotsContainer},[...Array(t).keys()].map((t=>r.createElement(x,{key:t,isActive:t===e}))),`${e+1}/${t}`),T=({title:e,skipText:t,nextText:n,index:i,totalSteps:o,onSkipClick:s,onNextClick:a})=>r.createElement("div",{className:S().newContent},r.createElement("h3",{className:S().newHeader},e),r.createElement("div",{className:S().buttonRow},r.createElement(N,{stepIndex:i,totalSteps:o}),r.createElement("div",null,t&&r.createElement(y,{className:S().buttonMinWidth,clickHandler:s},t),r.createElement(E,{className:S().buttonMinWidth,clickHandler:a},n)))),A=({steps:e,onCloseClick:t,onFinishClick:n,onNextClick:i,onShow:o,onSkipClick:s})=>{const[a,l]=r.useState(0),c=a>=e.length-1;r.useEffect((()=>{o()}),[]);return r.createElement("div",{...(0,C.Sh)(S().onboardingTour)},r.createElement("div",{className:S().close},r.createElement(_,{clickHandler:()=>t()})),e.map(((t,n)=>!!t.video&&n<=a+1&&r.createElement("video",{key:t.id,...(0,C.Sh)(S().newVideo,n===a&&S().show),autoPlay:!0,loop:a<e.length-1,muted:!0,height:720,width:392,preload:"auto",poster:t.poster},r.createElement("source",{type:"video/mp4",src:t.video})))),r.createElement(T,{title:e[a].title,skipText:c?"":"Skip tutorial",nextText:c?"Finish":"Next",index:a,totalSteps:e.length,onSkipClick:()=>{s(a),l(e.length-1)},onNextClick:c?n:()=>{i(a),l((e=>e+1))}}))};var D;!function(e){e.inlineSuggestions="inlineSuggestions",e.clickToAccept="clickToAccept",e.happyWriting="happyWriting"}(D||(D={}));const H=m.Rd().appConfig.url.assets.onboardingTour,R=[{id:D.inlineSuggestions,title:"To view inline suggestions, hover over the underlined text. Click the suggestion to accept it.",poster:H.inlineSuggestionsPreviewImage,video:H.inlineSuggestionsAnimation},{id:D.clickToAccept,title:"Grammarly keeps count of all your suggestions. To review them, click the number. Click the suggestion to accept it.",video:H.clickToAcceptAnimation},{id:D.happyWriting,title:"All right, you’re ready to go. Happy writing!",video:H.happyWritingAnimation}],W=({onClose:e})=>r.createElement(A,{steps:R,onCloseClick:()=>{u.J.onboardingOverlayCloseButtonClick("dialog"),e()},onShow:()=>{u.J.onboardingOverlayShow(),(0,g.T)().onboardingTutorialShow()},onNextClick:e=>{u.J.onboardingOnboardingStepOverlayShow(R[e+1].id)},onSkipClick:e=>{u.J.onboardingSkipButtonClick("onboardingTour",R[e].id)},onFinishClick:()=>{u.J.onboardingOverlayLetsWriteButtonClick("end-step"),e()}});var O=n(92783),P=n(33163);class J extends r.Component{constructor(){super(...arguments),this._containerRef=null,this.state={hide:!1},this.onClose=e=>{e&&e.stopPropagation(),this.setState({hide:!0}),this._containerRef&&this._containerRef.addEventListener("animationend",(()=>this.props.onClose()))},this.setOnboardingRef=e=>{e&&!this._containerRef?(this._containerRef=e,this._containerRef.addEventListener("click",this.preventClick)):!e&&this._containerRef&&(this._containerRef.removeEventListener("click",this.preventClick),this._containerRef=null)},this.preventClick=e=>{e.stopPropagation(),e.stopImmediatePropagation()}}componentDidMount(){this._sub=this.props.shouldClose.subscribe((e=>{e&&this.onClose()}))}componentWillUnmount(){var e;null===(e=this._sub)||void 0===e||e.unsubscribe()}render(){const e=(0,p.cs)({[P.onboardingDialog]:!0,[P.hide]:this.state.hide,[P.windows]:(0,O.ED)()}),t=(0,p.cs)({[P.content]:!0,[P.newContent]:!0});return r.createElement("div",{ref:this.setOnboardingRef,className:e,"data-grammarly-part":"onboarding"},r.createElement("div",{className:t},r.createElement("div",{className:(0,p.cs)({[P.viewContainer]:!0,[P.experiment]:!0})},r.createElement(W,{onClose:this.onClose}))))}}class I extends((0,s.qH)(i.u)){constructor({doc:e}){super(),this.view=null,this.shouldClose=h.h.create(!1),this.onKey=e=>{(0,s.rw)(e)===s.DG&&this.view&&this.shouldClose.set(!0)},this.onClose=()=>{this.emit("hide"),this.remove()},this.component=()=>(r.useEffect((()=>((0,o.o)(this.doc.defaultView,"keydown",this.onKey,!1),()=>(0,o.E)(this.doc.defaultView,"keydown",this.onKey,!1))),[]),r.createElement(a.L,{chunkName:"onboardingDialog"},r.createElement(J,{onClose:this.onClose,shouldClose:this.shouldClose}))),this.doc=e,this.createView()}createView(){if(!this.view){const e=this.component;this.view=l.V.get({monitorAs:"onboarding"}).inject(c.EM.fromDocument(this.doc,"grammarly-onboarding"),c.zs.appendChild(this.doc.documentElement),d.G7.showWhenLoaded(r.createElement(e,null)))}}remove(){this.view&&(this.view.dispose(),this.view=null)}}},53945:e=>{e.exports={buttonPrimary:"GEQXE",buttonTertiary:"GlCUL"}},15486:e=>{e.exports={onboardingTour:"QxTji",close:"wANJy",video:"snJSq",show:"SpJfM",content:"fyyhj",header:"AbJ4U",text:"fC07E",footer:"ej2Q4",stepIndicator:"JBITr",white:"esQWz",newContent:"KnbK_",buttonRow:"wdInL",newVideo:"PcgZU",progressDotsContainer:"HNoF0",progressDot:"tUjkt",active:"Urkd9",newHeader:"onc2E",buttonMinWidth:"IIhOS"}},33163:e=>{e.exports={onboardingDialog:"C34_r",gr__onboarding_dialog_appear:"e5a0d",viewContainer:"m_w3l",view:"U4cvA",windows:"Qrrya",footer:"hQpsA",hide:"KZPo0",gr__onboarding_dialog_disappear:"VqUeC",content:"Dy2NW",gr__centered_onboarding_dialog_content_disappear:"EWOkF",gr__centered_onboarding_dialog_content_appear:"NKUJu",oldContent:"rkDPB",newContent:"vXNfQ",experiment:"lTA8O"}}}]);