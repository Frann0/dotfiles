(self.webpackChunk=self.webpackChunk||[]).push([[6413],{51897:(e,t,s)=>{var i=s(25682),o="chrome-extension://__MSG_@@extension_id__/",r="moz-extension://__MSG_@@extension_id__/",n="safari-web-extension://__MSG_@@extension_id__/",l=self.GR_RESOURCE_ROOT||o,a=self.GR_RESOURCE_ROOT||r,c=self.GR_RESOURCE_ROOT||n;e.exports={__css:i.toString().replace(new RegExp(o,"g"),l).replace(new RegExp(r,"g"),a).replace(new RegExp(n,"g"),c),...i.locals}},1417:(e,t,s)=>{s.r(t),s.d(t,{AutocompleteFeature:()=>_e});var i=s(49708),o=s(83401),r=s(41398),n=s(16118),l=s(85985),a=s(77176),c=s(75420),d=s(74850),h=s(65451),u=s(38983),g=s(44253);class m{constructor(e,t,s,h,p,f){this._mode=e,this._textField=t,this._textObserver=s,this._caretService=h,this._service=p,this._log=d.Y.create(m.name),this._competingSuggestion=u.h.create(null),this._subs=[this._service.suggestionBehavior.subscribe((e=>{var t,s;if(this._mode.get()===g.mv.disabled)return;const i=this._caretService.getCaretPos();if(null===i)return this._competingSuggestion.set(null);const o=null===(t=this._textObserver.getCurrentTextMap().getFragmentAtOrBeforeOffset(i))||void 0===t?void 0:t.node.parentElement;if(!o)return this._log.error(`Failed to find a parent element of the text node at position ${i}`);const r=o.querySelector('span[contenteditable="false"]'),n=null===(s=null==r?void 0:r.querySelector("span"))||void 0===s?void 0:s.innerText,l=e&&this._modelProxy.model.getAlertById(e.alertId);if(e&&!l)return this._log.error(`Failed to find ${e.alertSource} alert #${e.alertId} for display`);if(!r||!n)return(null==l?void 0:l.source)===g.w.external&&l.state===g.PU.preferred&&this._modelProxy.model.updateAlertState(l.id,{state:g.PU.initial}),this._competingSuggestion.set(null);this._competingSuggestion.set(n);const a=this._modelProxy.checkForDuplicateAlert(i,n);(null==l?void 0:l.source)===g.w.external?(r.style.display="initial",a&&a.id===l.id||this._modelProxy.updateAlertCompletion(l.id,i,n),l.state!==g.PU.suggested&&this._modelProxy.model.updateAlertState(l.id,{state:g.PU.suggested,suggestion:n})):(r.style.display="none",a||this._mode.get()===g.mv.enabledSolitary||this._modelProxy.addAlert(i,n,this._mode.get()===g.mv.benchmarking||!this._caretService.isEligible(i)||this._textBeforeCompletionIsSalutation(i,n)))})),this._service.suggestionBehavior.pipe((0,r.M)(this._competingSuggestion),(0,n.G)(),(0,l.h)((([e,t])=>{var s,i;return(null===(s=e[0])||void 0===s?void 0:s.alertSource)===g.w.external&&(null===(i=t[0])||void 0===i?void 0:i.alertSource)!==g.w.external})),(0,a.U)((([e,t])=>e))).subscribe((([e,t])=>{if(null===t)return this._log.warn("Can't update alert state to ignored - suggestion text is equal to null");const s=this._modelProxy.model.getAlertById(e.alertId);(null==s?void 0:s.state)===g.PU.suggested&&this._modelProxy.model.updateAlertState(s.id,{state:g.PU.ignored,suggestion:t})})),(this._textField.ownerDocument?(0,i.R)(this._textField.ownerDocument,"keydown",{capture:!0}):o.C).pipe((0,r.M)(this._service.suggestionBehavior)).subscribe((([e,t])=>{const s=this._competingSuggestion.get();if(this._mode.get()===g.mv.disabled||!s)return;const i=!(e.keyCode!==c.VD.Tab&&e.keyCode!==c.VD.RightArrow||e.altKey||e.ctrlKey||e.shiftKey||e.metaKey);!i&&e.keyCode!==c.VD.Escape||t&&t.alertSource===g.w.external?i&&(null==t?void 0:t.alertSource)===g.w.external?this._modelProxy.model.updateAlertState(t.alertId,{state:g.PU.applied,suggestion:s}):e.keyCode===c.VD.Escape&&(null==t?void 0:t.alertSource)===g.w.external&&this._modelProxy.model.updateAlertState(t.alertId,{state:g.PU.discarded,suggestion:s}):(e.preventDefault(),e.stopPropagation())}))],this._modelProxy=new _(this._textObserver,f)}_textBeforeCompletionIsSalutation(e,t){const s=this._textObserver.getCurrentTextMap().getPlainText().slice(0,e)+t;return void 0!==["Hi","Hey","Hello","Dear"].find((e=>s.startsWith(e)))}dispose(){this._subs.forEach((e=>e.unsubscribe()))}}class _{constructor(e,t){this._textObserver=e,this.model=t,this._log=d.Y.create(_.name)}checkForDuplicateAlert(e,t){const s=this._textObserver.getCurrentTextMap().getPlainText();for(const i of this.model.getAll())if(i.source===g.w.external&&i.transformRange.end<=e&&i.transformRange.end+i.longestCompletion>e){const o=s.slice(i.transformRange.end,e)+t;if(i.completions.some((e=>e.text===o)))return i}return null}updateAlertCompletion(e,t,s){const i=this.model.getAlertById(e);if(!i||i.source!==g.w.external||i.state===g.PU.initial){const t=i?`has unsuitable alert source ${i.source} or state ${i.state}`:"does not exist";return this._log.error(`Can't update alert #${e} - ${t}`)}const o=this._textObserver.getCurrentTextMap().getPlainText().slice(i.transformRange.end,t);if(o.length!==t-i.transformRange.end)return this._log.error(`Request to change alert #${e} and actual text are out of sync`);const r={id:g.iH.getNextCompletionId(),text:o+s,patternName:"unknown",confidenceCurve:[[0,0],[t-i.transformRange.end,1]]};this.model.updateAlert({...i,completions:[r,...i.completions],completion:r})}addAlert(e,t,s=!1){const i=this._textObserver.getCurrentTextMap().getPlainText(),o=Math.max(0,e-5),r=i.slice(o,e),n={start:o,end:e};if(!s&&t.length<5)return;const l={text:r+t,patternName:"unknown",textBegin:n.start,prefixBegin:n.start,prefixEnd:n.end,textEnd:n.end+t.length,confidence:1,confidenceCurve:{}};g.iH.create({threshold:1,completions:[l]},g.w.external,h._.createWithRandomId("gmail"),null,s?0:3).forEach((e=>this.model.addAlert(e)))}}var p=s(24209),f=s(93508);class v{constructor(e,t,s,n){this._mode=e,this._textField=t,this._textObserver=s,this._caretService=n,this._suggestionSelector="span.suggestedCompletion",this._styleElement=this._textField.ownerDocument.createElement("style"),this._hasCompetingSuggestion=this._textObserver.contentChanges.async.pipe((0,a.U)((e=>{if(this._mode.get()===g.mv.disabled)return!1;if(null===this._caretService.getCaretPos())return!1;const t=this._textField.querySelector(this._suggestionSelector);return t&&"none"!==t.style.display&&(t.style.display="none",t.textContent=""),!!t})),(0,f.O)(!1)),this._subs=[this._mode.subscribe((e=>{this._styleElement.innerHTML=e===g.mv.disabled?"":`${this._suggestionSelector}{display: none !important;}`})),(this._textField.ownerDocument?(0,p.T)((0,i.R)(this._textField.ownerDocument,"keyup",{capture:!0}),(0,i.R)(this._textField.ownerDocument,"keydown",{capture:!0})):o.C).pipe((0,r.M)(this._mode,this._hasCompetingSuggestion)).subscribe((([e,t,s])=>{if(t===g.mv.disabled||!s)return;(!(e.keyCode!==c.VD.Tab&&e.keyCode!==c.VD.RightArrow||e.altKey||e.ctrlKey||e.shiftKey||e.metaKey)||e.keyCode===c.VD.Escape)&&(e.preventDefault(),e.stopPropagation())}))],this._textField.ownerDocument.head.appendChild(this._styleElement)}dispose(){this._subs.forEach((e=>e.unsubscribe())),this._styleElement.remove()}}var x=s(32952),b=s(28043);class y{constructor(e,t,s){this._mode=e,this._disableFeature=t,this._openFeedbackForm=s,this._hovered=new x.xQ,this.onHover=e=>this._hovered.next(e),this._dismissed=new x.xQ,this.onDismiss=e=>this._dismissed.next(e),this.cardHovered=this._hovered.pipe((0,f.O)(!1),(0,b.x)()),this.cardDismissed=this._dismissed.pipe((0,b.x)()),this.isDisabled=this._mode.view((e=>e===g.mv.disabled)),this.onDisable=()=>{this._disableFeature()},this.onFeedback=(e,t)=>{this._openFeedbackForm(e,t),this.onDismiss(null)}}}var w=s(27378),P=s(2844),S=s(14325),C=s(37985);class E{constructor(e,t,s){this._textField=e,this._controller=t,this._hoverProvider=s,this.view=(0,P.aj)(this._hoverProvider.hoveredBehavior,this._hoverProvider.anchorRect,this._controller.isDisabled).pipe((0,a.U)((([e,t,s])=>e&&t?w.createElement(S.W,{anchorRect:t,anchorMargin:{bottom:5,top:5},onHover:this._controller.onHover,onClickAway:this._controller.onDismiss,partName:"autocomplete-card",fieldOwnerDoc:this._textField.ownerDocument||void 0,style:{minWidth:"initial"}},s?w.createElement(A,null):w.createElement(F,{onDisable:this._controller.onDisable,onFeedback:()=>this._controller.onFeedback(e.alertId,e.text)})):null)))}}const F=e=>w.createElement("div",{className:C.menu},w.createElement("div",{className:C.item,onClick:e.onFeedback},"Feedback"),w.createElement("div",{className:C.item,onClick:e.onDisable},"Disable")),A=()=>w.createElement("div",{className:C.disable},w.createElement("div",{className:C.heading},"Phrasal predictions disabled."),w.createElement("div",{className:C.text},"To re-enable go to Grammarly menu in the browser toolbar."));class U{constructor(e,t){this._textObserver=e,this._selectionService=t,this._log=d.Y.create(U.name)}_getCaretPos(){const e=this._selectionService.getCurrentSelection();return e&&e.start===e.end?e.start:null}_isEligible(e){const t=this._textObserver.getCurrentTextMap().getPlainText();if(e<0||e>t.length)return this._log.warn(`Received unexpected value for caret position {${e}}`),!1;const s=/^[ \t]*/g,i=t.slice(e).replace(s,"");if(!i)return!0;if("\n"!==i[0])return!1;const o=i.slice(1).replace(s,"");return!o||"\n"===o[0]}getCaretPos(){return this._getCaretPos()}isEligible(e){return this._isEligible(e)}getCaretPosIfEligible(){const e=this._getCaretPos();return e&&this._isEligible(e)?e:null}}var R=s(16105);class k{constructor(e,t,s,i,o,r,n){this._mode=e,this._textObserver=t,this._alertProcessor=s,this._rpcClient=i,this._caretService=o,this._model=r,this._clientPhrasalCompletionsEnabled=n,this._uidPrefix=h._.createWithRandomId("autocomplete"),this._nextRevision=0,this._subs=[this._textObserver.contentChanges.async.subscribe((async({changes:e,newText:t})=>{if(!g.mv.nativeEnabled(this._mode.get())||!this._rpcClient.hasValue)return;if(1!==e.length||!R.q.isIns(e[0]))return;const s=this._caretService.getCaretPosIfEligible();if(null===s)return;this._nextRevision+=1,this._alertProcessor.registerRemoteRevision(h.Q.create(this._uidPrefix,this._nextRevision));const i=t.slice(0,s),o=await this._rpcClient.get().autocomplete(i);if(o){const{threshold:e,...t}=o;g.iH.create({completions:[{...t,confidenceCurve:{}}],threshold:e},g.w.client,this._uidPrefix,this._nextRevision).forEach((e=>this._model.addAlert(e)))}if(this._clientPhrasalCompletionsEnabled()){const e=await this._rpcClient.get().autocompletePhrase(i);if(e){const{threshold:t,...s}=e;g.iH.create({completions:[{...s,confidenceCurve:{}}],threshold:t},g.w.client,this._uidPrefix,this._nextRevision).forEach((e=>this._model.addAlert(e)))}}}))]}dispose(){this._subs.forEach((e=>e.unsubscribe()))}}var O,D=s(40151),N=s(95300),T=s(24755),I=s(95343),B=s(62337),$=s(92783),H=s(86400);!function(e){e.isNative=function(e){return g.w.isNative(e.alertSource)}}(O||(O={}));class M{constructor(e,t,s,o,r,n,c){this._mode=e,this._textField=t,this._textObserver=s,this._geometryLayout=o,this._geometryProvider=r,this._caretService=n,this._model=c,this._log=d.Y.create(M.name),this.suggestionBehavior=(0,p.T)(this._textObserver.contentChanges.async,this._textField.ownerDocument?(0,i.R)(this._textField.ownerDocument,"selectionchange"):D.E,this._model.changes.pipe((0,l.h)((e=>e.addedAlerts.length>0||e.updatedAlerts.some((e=>e.state===g.PU.discarded)))))).pipe((0,a.U)((e=>{var t,s,i;if(this._mode.get()===g.mv.disabled)return null;const o=this._caretService.getCaretPos();if(null===o)return null;const r=this._textObserver.getCurrentTextMap(),n=r.getPlainText().slice(0,o),l=this._getCompletion(o,n);if(!l)return null;const[a,c,d]=l;if(a.source===g.w.external)return a.state===g.PU.initial&&this._model.updateAlertState(a.id,{state:g.PU.preferred,completion:c}),{alertId:a.id,alertSource:a.source};if(!this._caretService.isEligible(o))return null;const h=null===(t=r.getFragmentAtOrBeforeOffset(o))||void 0===t?void 0:t.node.parentElement;if(!h)return this._log.error(`Failed to find a parent element of the text node at position ${o}`),null;const u={start:o-1,end:o},m=this._geometryProvider.create(u,r),_=Boolean(m)&&this._geometryProvider.getClientRects(m),p=_&&this._geometryLayout.getApproximateConversionContext(),f=_&&p&&Array.from(_).map((e=>B.UL.setPosition(p.clientToRelative(e),e)));if(!_||!f||!f[0])return this._log.error(`Failed to get bounding rectangle for the caret at position ${o}`),null;const v=_[0],x=f[0];if((0,$.pZ)()&&(0,H.FD)(n[u.start])&&0===x.width){const e=4,t=n.slice(0,-1).indexOf(n[u.start]);let s=e;if(-1!==t){const e=this._geometryProvider.create({start:t,end:t+1},r),i=this._geometryProvider.getClientRects(e);i&&i.length&&i[0].width&&(s=i[0].width)}[x,v].forEach((e=>e.width=s))}const b=null===(i=null===(s=h.ownerDocument)||void 0===s?void 0:s.defaultView)||void 0===i?void 0:i.getComputedStyle(h);return b?((a.state===g.PU.initial||a.state===g.PU.ignored&&a.completion.text!==c.text)&&this._model.updateAlertState(a.id,{state:g.PU.preferred,completion:c}),{alertId:a.id,alertSource:a.source,clientRect:v,offsetRect:x,text:c.text.slice(d),styles:{font:b.font,fontFamily:b.fontFamily,fontStyle:b.fontStyle,fontVariant:b.fontVariant,fontWeight:b.fontWeight,fontStretch:b.fontStretch,fontKerning:b.fontKerning,fontSize:b.fontSize,fontSizeAdjust:b.fontSizeAdjust,lineHeight:b.lineHeight,letterSpacing:b.letterSpacing,wordSpacing:b.wordSpacing,textTransform:b.textTransform}}):(this._log.error(`Failed to get computed styles for the text node at position ${o}`),null)})),(0,T.O)(new N.X(null)),(0,I.x)())}_getCompletion(e,t){const s=[];for(const t of this._model.getAll()){const i=t.state===g.PU.initial?t.transformRange.end+t.longestCompletion:t.transformRange.end+t.completion.text.length;if(t.state===g.PU.applied&&i===e)return null;const o=t.transformRange.end<=e&&i>e;if(o&&t.state===g.PU.discarded)return null;o&&s.push(t)}const i=(e,t,s)=>{const i=t.filter((e=>e.text.startsWith(s)&&e.text.length>s.length)).map((e=>[e,g.iH.getConfidenceAt(e,s.length)])).filter((t=>t[1]>=e));return i.length>0?i.reduce(((e,t)=>t[1]>e[1]?t:e)):null},o=e=>{const t=e.completion.text.slice(e.completionPosition+1),[s]=t.split(" ");return e.transformRange.end+e.completionPosition+1+s.length},r=[];for(const n of s){const s=t.slice(n.transformRange.end),l=s.length;if(n.state===g.PU.preferred||n.state===g.PU.suggested||n.state===g.PU.applied||n.state===g.PU.ignored&&o(n)>=e){const e=i(n.threshold,[n.completion],s);return e?[n,e[0],l]:null}{const e=i(n.threshold,n.completions,s);e&&r.push([n,e[0],e[1],l])}}if(0===r.length)return null;const n=r.filter((([e,t])=>e.source===g.w.default||e.source===g.w.client&&t.patternName.includes("Sentence"))),l=(n.length>0?n:r).reduce(((e,t)=>t[2]>e[2]?t:e));return l[1].text.slice(l[3]).length<4?null:[l[0],l[1],l[3]]}}class L{constructor(e,t,s,o,a,h,u,m=(e.ownerDocument?(0,i.R)(e.ownerDocument,"keydown",{capture:!0}):D.E)){this._selectionService=t,this._replacementService=s,this._model=o,this._service=a,this._showOnboardingHint=h,this._onOnboardingHintShown=u,this._keyDown=m,this._log=d.Y.create(L.name),this._subs=[this._keyDown.pipe((0,r.M)(this._service.suggestionBehavior),(0,l.h)((e=>null!==e[1]&&O.isNative(e[1])))).subscribe((([e,t])=>{e.keyCode!==c.VD.Tab&&e.keyCode!==c.VD.RightArrow||e.altKey||e.ctrlKey||e.shiftKey||e.metaKey?e.keyCode===c.VD.Escape&&this._handleRejectEvent(e,t):this._handleAcceptEvent(e,t)})),this._service.suggestionBehavior.pipe((0,l.h)((e=>null===e||O.isNative(e))),(0,n.G)(),(0,l.h)((e=>!!e[0]!=!!e[1]))).subscribe((e=>{const t=e[0]||e[1],s=!e[1],i=this._model.getAlertById(t.alertId);if(!i){const e=s?"was shown moments ago":"should be shown";return this._log.warn(`Failed to find alert #${t.alertId} that ${e}`)}s&&i.state===g.PU.suggested?this._model.updateAlertState(i.id,{state:g.PU.ignored,suggestion:t.text}):s||i.state===g.PU.suggested||this._model.updateAlertState(i.id,{state:g.PU.suggested,suggestion:t.text})})),...this._showOnboardingHint.get()?[this._model.alertStateUpdate.pipe((0,l.h)((e=>g.w.isNative(e.alert.source)&&e.alert.state===g.PU.suggested)),(0,r.M)(this._showOnboardingHint)).subscribe((([e,t])=>t&&this._onOnboardingHintShown()))]:[]]}async _handleAcceptEvent(e,t){e.stopPropagation(),e.preventDefault();const s=this._selectionService.getCurrentSelection();if(!s)return this._log.error(`Failed to perform a replacement for alert ${t.alertId} - selection service didn't find TextRange`);this._model.updateAlertState(t.alertId,{state:g.PU.applied,suggestion:t.text})||this._log.error(`Failed to update #${t.alertId} with {${g.PU.applied}} state, still trying to apply suggestion`);try{await this._replacementService.performReplacement(s,t.text,!1)}catch(e){return this._log.error(`Failed to perform a replacement for alert ${t.alertId}`,e)}}_handleRejectEvent(e,t){this._model.updateAlertState(t.alertId,{state:g.PU.discarded,suggestion:t.text})||this._log.error(`Failed to update #${t.alertId} with {${g.PU.discarded}} state`),e.stopPropagation(),e.preventDefault()}dispose(){this._subs.forEach((e=>e.unsubscribe()))}}var V=s(66310);class G{constructor(e,t,s,o=(e.ownerDocument?(0,i.R)(e.ownerDocument,"keydown",{capture:!0}):D.E)){this._textField=e,this._autocompleteModel=t,this._gnar=s,this._keyDown=o,this._log=d.Y.create(G.name),this.model=u.h.create(null),this.close=e=>{this.model.set(null),this._gnar.autocompleteFeedbackFormCloseButtonClick(e)},this.submit=(e,t,s)=>{const i=this.model.get();if(!i)return this._log.error("Failed to submit form feedback - empty state");const{alertId:o,suggestion:r}=i;this._autocompleteModel.updateAlertState(o,{state:g.PU.discarded,suggestion:r,reason:e}),this.model.set(null),this._gnar.autocompleteFeedbackFormSubmitButtonClick(o,e,t,s)},this._subs=[this.model.pipe((0,V.w)((e=>e?this._keyDown:D.E))).subscribe((e=>e.stopPropagation()))]}open(e,t){const s=this._autocompleteModel.getAlertById(e);if(!s||!g.iH.isInteractive(s)){const t=s?`has improper state {${s.state}}`:"not found";return this._log.error(`Failed to open feedback form for alert #${e} - ${t}`)}const i=s.completion.text;if(!i.endsWith(t))return this._log.error(`Failed to open feedback form for alert #${e} - found inconsistency between completion {${i}} and suggestion {${t}} texts`);const o=i.slice(1,-t.length),r=s.context+o;this.model.set({alertId:e,suggestion:t,context:r}),this._textField.blur()}dispose(){this._subs.forEach((e=>e.unsubscribe()))}}var W=s(22679),j=s(54118),z=s(49468),K=s(12187),Y=s(29382);class q{constructor(e){this._controller=e,this.view=this._controller.model.view((e=>e&&w.createElement(X,{onSumbit:this._controller.submit,onClose:this._controller.close,contextText:e.context,suggestionText:e.suggestion})))}}const Q=[["NOT_RELEVANT","Not relevant in the context of the email"],["WRONG_TONE","Not matching my style or tone"],["INCORRECT","Factually incorrect"],["WRONG_GRAMMAR","Wrong grammar or spelling"],["OFFENSIVE","Offensive or inappropriate"],["OTHER","Other"]];const X=e=>{const[t,s]=w.useState(null),[i,o]=w.useState(null);return w.createElement(z.o,{className:Y.container,style:{zIndex:W.oJ}},w.createElement("div",{className:Y.box},w.createElement("div",{className:Y.close,onClick:()=>e.onClose("topRight")}),w.createElement("div",{className:Y.form},w.createElement("div",{className:Y.heading},"Feedback"),w.createElement("div",{className:Y.explanation},"Select an issue from the list below to submit feedback."),w.createElement("div",{className:Y.section},w.createElement("div",{className:Y.subheading},"Recent suggestion"),w.createElement("div",{className:Y.subject},w.createElement("span",null,"“",e.contextText),w.createElement("span",{className:Y.suggestion},e.suggestionText,"”"))),w.createElement("div",{className:Y.section},w.createElement("div",{className:Y.subheading},"Issue"),w.createElement("div",{className:Y.optionGroup},Q.map((([e,i])=>w.createElement("div",{key:e,...(0,K.Sh)(Y.option,t===e&&Y.checked),onClick:()=>s(e)},i))))),w.createElement(j.z,{onChange:e=>o(e),ariaLabel:"Tell us a bit more...",placeholder:"Tell us a bit more...",className:Y.textfield})),w.createElement("div",{className:Y.footer},w.createElement("div",{...(0,K.Sh)(Y.button,Y.secondary),onClick:()=>e.onClose("footer")},"Cancel"),w.createElement("div",{...(0,K.Sh)(Y.button,Y.primary,!t&&Y.disable),onClick:()=>{return t&&e.onSumbit(t,(s=t,Q.filter((e=>e[0]===s))[0][1]),null!=i?i:void 0);var s}},"Submit"))))};var J=s(76974),Z=s(17343),ee=s(2834),te=s(78674);class se{constructor(e,t,s,o,r){this._textField=e,this._textFieldLayout=t,this._cardController=s,this._suggestionController=o,this._suggestionBehavior=r,this._offByScrollChange=(0,p.T)(this._textFieldLayout.scroll.changes,this._textField.ownerDocument?(0,i.R)(this._textField.ownerDocument,"scroll"):D.E).pipe((0,Z.h)(null)),this._hoverDelayMs=200,this._hovered=(0,p.T)(this._offByScrollChange,this._cardController.cardDismissed).pipe((0,f.O)(null),(0,V.w)((e=>(0,P.aj)(this._suggestionController.rawHoveredSuggestion.pipe((0,ee.b)((e=>e&&this.anchorRect.set(e))),(0,a.U)((e=>!!e))),this._cardController.cardHovered).pipe((0,a.U)((([e,t])=>e||t)),(0,b.x)(),(0,te.b)(this._hoverDelayMs),(0,b.x)(),(0,f.O)(!1))))),this.anchorRect=u.h.create(null),this.hoveredBehavior=this._suggestionBehavior.pipe((0,l.h)((e=>null===e||O.isNative(e))),(0,b.x)(((e,t)=>e&&t?e.alertId===t.alertId&&e.text===t.text:e===t)),(0,V.w)((e=>null===e?(0,J.of)(null):this._hovered.pipe((0,a.U)((t=>t?{alertId:e.alertId,text:e.text}:null))))),(0,T.O)(new N.X(null)),(0,I.x)())}}var ie=s(38194),oe=s(24448),re=s(88921);class ne{constructor(e){this._alertProcessor=e,this._log=d.Y.create(ne.name),this._alertsBufferLimit=40,this._alertsBuffer=new oe.P(this._alertsBufferLimit),this._alertStateUpdateSubject=new x.xQ,this.alertStateUpdate=this._alertStateUpdateSubject.asObservable(),this.changes=this._alertProcessor.alerts.changes.pipe((0,l.h)((e=>[e.addedAlerts,e.removedAlerts.map((e=>e.alert)),e.updatedAlerts].some((e=>e.some((e=>re.S.isAutocompleteAlert(e))))))),(0,a.U)((e=>({addedAlerts:e.addedAlerts.filter(re.S.isAutocompleteAlert),updatedAlerts:e.updatedAlerts.filter(re.S.isAutocompleteAlert),removedAlerts:e.removedAlerts.filter((e=>re.S.isAutocompleteAlert(e.alert)))}))),(0,ie.B)()),this._subs=[this.changes.subscribe((e=>{e.removedAlerts.forEach((e=>{this._alertsBuffer.delete(e.id)||this._log.warn(`Failed to delete autocomplete alert #${e.id} from the circular buffer on alert removal`,e.reason)}))}))]}_addAlert(e){const t=this._alertsBuffer.enqueue(e.id);return t&&this._alertProcessor.removeAlert(t),this._alertProcessor.addAlert(e)}addAlert(e){return this._addAlert(e)}updateAlert(e){this._alertsBuffer.delete(e.id)||this._log.warn(`Failed to delete autocomplete alert #${e.id} from the circular buffer while updating it, alert may not exist`),this._addAlert(e)}updateAlertState(e,t){const s=this._alertProcessor.alerts.getAlertById(e);if(!s||s._tag!==re.b.autocomplete){const t=s?`has unexpected alert type {${s._tag}}`:"doesn't exist";return this._log.error(`Can't update alert #${e} - ${t}`),!1}if([[g.PU.initial,g.PU.preferred],[g.PU.preferred,g.PU.initial],[g.PU.preferred,g.PU.suggested],[g.PU.suggested,g.PU.ignored],[g.PU.ignored,g.PU.suggested],[g.PU.ignored,g.PU.preferred],[g.PU.ignored,g.PU.discarded],[g.PU.suggested,g.PU.applied],[g.PU.suggested,g.PU.discarded],[g.PU.applied,g.PU.suggested]].some((([e,i])=>e===s.state&&i===t.state))){if(this._alertsBuffer.delete(s.id)||this._log.warn(`Failed to delete autocomplete alert #${s.id} from the circular buffer while updating its state`),t.state===g.PU.initial||t.state===g.PU.preferred)this._addAlert({...s,...t});else if(t.state===g.PU.suggested||t.state===g.PU.ignored||t.state===g.PU.applied){const{suggestion:e,...i}=t;if(!("completion"in s)||!s.completion.text.endsWith(e)){const t="completion"in s?`completion text {${s.completion.text}} and suggestion {${e}} mismatch`:"completion field does not exist";return this._log.error(`Can't update alert #${s.id} - ${t}`),!1}const o={...s,...i,completionPosition:s.completion.text.length-e.length};this._addAlert(o),this._alertStateUpdateSubject.next({alert:o,suggestion:e})}else if(t.state===g.PU.discarded){const{suggestion:e,reason:i,...o}=t,r={...s,...o};this._addAlert(r),this._alertStateUpdateSubject.next({alert:r,suggestion:e,reason:i})}}else{if(s.state!==t.state)return this._log.warn(`Ran into inconsistent state changes while updating alert #${s.id} with state {${s.state}} to state {${t.state}}`),!1;this._log.warn(`Tried to update alert #${s.id} with the current alert state {${t.state}}`)}return!0}getAlertById(e){const t=this._alertProcessor.alerts.getAlertById(e);return t&&re.S.isAutocompleteAlert(t)?t:null}*getAll(){for(const e of this._alertProcessor.alerts.getAll())re.S.isAutocompleteAlert(e)&&(yield e)}dispose(){this._subs.forEach((e=>e.unsubscribe()))}}var le=s(90361);class ae{constructor(e,t,s,i){this._mode=e,this._model=t,this._gnar=s,this._onAutocompleteFeedback=i,this._log=d.Y.create(ae.name),this._reporterId=le.iy.create(),this._subs=[this._model.alertStateUpdate.pipe((0,l.h)((e=>g.w.isNative(e.alert.source)))).subscribe((({alert:e,suggestion:t,...s})=>{const i=this._properties(e,t);switch(e.state){case g.PU.applied:return this._onAutocompleteFeedback(this._createFeedback("COMPLETION_ACCEPTED",e,t)),e.source===g.w.default?this._gnar.autocompleteSherlockSuggestionAccepted(...i):this._gnar.autocompleteWatsonSuggestionAccepted(...i);case g.PU.discarded:return this._onAutocompleteFeedback({...this._createFeedback("COMPLETION_REJECTED",e,t),...s}),e.source===g.w.default?this._gnar.autocompleteSherlockSuggestionRejected(...i):this._gnar.autocompleteWatsonSuggestionRejected(...i);case g.PU.suggested:return this._onAutocompleteFeedback(this._createFeedback("COMPLETION_SHOWN",e,t)),e.source===g.w.default?this._gnar.autocompleteSherlockSuggestionShown(...i):this._gnar.autocompleteWatsonSuggestionShown(...i);case g.PU.ignored:return this._onAutocompleteFeedback(this._createFeedback("COMPLETION_IGNORED",e,t)),e.source===g.w.default?this._gnar.autocompleteSherlockSuggestionIgnored(...i):this._gnar.autocompleteWatsonSuggestionIgnored(...i);default:(0,le.vE)(e)}})),this._model.alertStateUpdate.pipe((0,l.h)((e=>e.alert.source===g.w.external))).subscribe((({alert:e,suggestion:t})=>{switch(e.state){case g.PU.applied:return this._gnar.autocompleteLestradeSuggestionAccepted(...this._properties(e,t));case g.PU.discarded:return this._gnar.autocompleteLestradeSuggestionRejected(...this._properties(e,t));case g.PU.suggested:return this._gnar.autocompleteLestradeSuggestionShown(...this._properties(e,t));case g.PU.ignored:return this._gnar.autocompleteLestradeSuggestionIgnored(...this._properties(e,t));default:(0,le.vE)(e)}}))]}_createFeedback(e,t,s){if(!g.w.isNative(t.source)){const e=`Unexpected alert source ${t.source}`;throw this._log.error(e),new Error(e)}const i=t.transformText+t.completion.text.slice(0,1),o=t.completion.text.slice(1);return o.endsWith(s)||this._log.error(`Completion text {${t.completion.text}} and suggestion {${s}} mismatch, still trying to build a feedback for alert #${t.id}`),{type:e,alertId:t.completion.id.toString(),begin:t.transformRange.start,end:t.transformRange.end+1+o.length,context:i,before:o.slice(0,-s.length),after:s,text:t.context,pname:t.completion.patternName}}_properties(e,t){const[s,...i]=t.split(" "),[o]=(e.transformText+e.completion.text).slice(0,-t.length).split(" ").reverse(),r=i.filter((e=>0!==e.length)).length+s.length/Math.max(s.length+o.length,1);return[this._reporterId,this._mode.get()===g.mv.enabledSolitary||this._mode.get()===g.mv.benchmarking?"solitary":"mixed",e.completion.patternName,`${this._reporterId.slice(0,8)}-${e.completion.id}`,t.length,r]}dispose(){this._subs.forEach((e=>e.unsubscribe()))}}class ce{constructor(e,t){this._textField=e,this._mouseData=t,this._suggestionElement=u.h.create(null),this.onSuggestionTextRefUpdate=e=>this._suggestionElement.set(e),this.rawHoveredSuggestion=this._mouseData.pipe((0,r.M)(this._suggestionElement),(0,a.U)((([{client:e},t])=>{if(t&&e&&this._onTopOfElement(e)){const s=Array.from(t.getClientRects()).map((e=>B.Pf.create(e)));return s.find((t=>B.UL.contains(e,t)))||null}return null})))}_onTopOfElement(e){const{ownerDocument:t}=this._textField,s=t&&t.elementFromPoint(e.left,e.top);return this._textField.contains(s)}}var de=s(5739),he=s(59070);class ue{constructor(e,t,s,i,o){this._controller=e,this._textFieldLayout=t,this._hoverProvider=s,this._suggestionBehavior=i,this._showOnboardingHint=o,this._isHovered=this._hoverProvider.hoveredBehavior.pipe((0,a.U)((e=>!!e))),this.view=this._suggestionBehavior.pipe((0,f.O)(null),(0,r.M)(this._showOnboardingHint),(0,a.U)((([e,t])=>e&&O.isNative(e)?w.createElement(ge,{key:"autocomplete-suggestion",spec:e,rect:this._textFieldLayout.rect.getCurrent(),tabHint:t,isHovered:this._isHovered,onTextRefUpdate:this._controller.onSuggestionTextRefUpdate}):null)))}}const ge=({spec:e,rect:t,tabHint:s,isHovered:i,onTextRefUpdate:o})=>{const r=e.offsetRect.left+e.offsetRect.width,n=e.styles.lineHeight,l=n.endsWith("px")?parseFloat(n):null,c=l&&l<e.offsetRect.height?l:"normal";return w.createElement("div",{className:he.container,style:{top:e.offsetRect.top,width:t.size.width,...e.styles,lineHeight:c}},w.createElement("div",{className:he.offset,style:{width:r}},"|"),w.createElement("span",{className:he.completion,"data-grammarly-part":"completion",style:{lineHeight:c}},w.createElement(de.F.span,{...(0,K.Sh)(he.text,i.pipe((0,a.U)((e=>e&&he.hovered)))),mount:o},e.text),w.createElement("span",{className:s?he.tab:he.logo},"|")))};var me;!function(e){e.gmail="mail.google.com",e.yahoo="mail.yahoo.com",e.outlook="^outlook.(live|office|office365).com$"}(me||(me={}));class _e{constructor(e,t,s,i,o,r,n,l,a,c,d,h,u,g,_,p,f,x){this._domain=e,this._mode=t,this._showOnboardingHint=s,this._textField=i,this._gnar=o,this._textObserver=r,this._mouseData=n,this._textFieldLayout=l,this._geometryLayout=a,this._geometryProvider=c,this._alertProcessor=d,this._selectionService=h,this._replacementService=u,this._rpcClient=g,this._disableAutocomplete=_,this._onAutocompleteFeedback=p,this._onOnboardingHintShown=f,this._clientPhrasalCompletionsEnabled=x,this._caretService=new U(this._textObserver,this._selectionService),this._model=new ne(this._alertProcessor),this._service=new M(this._mode,this._textField,this._textObserver,this._geometryLayout,this._geometryProvider,this._caretService,this._model),this._controller=new L(this._textField,this._selectionService,this._replacementService,this._model,this._service,this._showOnboardingHint,this._onOnboardingHintShown),this._formController=new G(this._textField,this._model,this._gnar),this._cardController=new y(this._mode,(()=>{this._disableAutocomplete(),this._gnar.autocompleteFeatureToggleClick("inline","off")}),((e,t)=>{this._formController.open(e,t),this._gnar.autocompleteFeedbackButtonClick()})),this._suggestionController=new ce(this._textField,this._mouseData),this._hoverProvider=new se(this._textField,this._textFieldLayout,this._cardController,this._suggestionController,this._service.suggestionBehavior),this._disposables=[new k(this._mode,this._textObserver,this._alertProcessor,this._rpcClient,this._caretService,this._model,this._clientPhrasalCompletionsEnabled),new ae(this._mode,this._model,this._gnar,this._onAutocompleteFeedback),...this._domain===me.gmail?[new m(this._mode,this._textField,this._textObserver,this._caretService,this._service,this._model)]:[],...null!==this._domain.match(me.outlook)?[new v(this._mode,this._textField,this._textObserver,this._caretService)]:[]],this.formView=new q(this._formController),this.suggestionView=new ue(this._suggestionController,this._textFieldLayout,this._hoverProvider,this._service.suggestionBehavior,this._showOnboardingHint),this.cardView=new E(this._textField,this._cardController,this._hoverProvider)}onAutocompleteMessage(e,t,s){g.mv.nativeEnabled(this._mode.get())&&!this._clientPhrasalCompletionsEnabled()&&g.iH.create(e,g.w.default,s,t).forEach((e=>this._model.addAlert(e)))}initRpcClient(){this._rpcClient.get()}dispose(){this._disposables.forEach((e=>e.dispose())),this._model.dispose(),this._controller.dispose(),this._formController.dispose()}}},54118:(e,t,s)=>{s.d(t,{z:()=>c});var i=s(27378),o=s(31542);const r=({children:e,style:t,dataGrammarlyPart:s="ui-kit-iframe",...r})=>{const[n,l]=i.useState(null),a=i.useCallback((e=>{var t,s;let i=null;"contentDocument"in e.target&&(i=null!==(s=null===(t=e.target.contentDocument)||void 0===t?void 0:t.body)&&void 0!==s?s:null),l(i),i&&(i.style.margin="0",i.style.height="100vh")}),[]);return i.createElement("iframe",{...r,style:{border:"none",...t},onLoad:a,srcDoc:"<html><body></body></html>","data-grammarly-part":s},n&&(0,o.createPortal)(e,n))};var n=s(68370),l=s(51897),a=s.n(l);const c=({placeholder:e,onChange:t,ariaLabel:s,className:o})=>{const[l,c]=i.useState("");return i.useEffect((()=>{t(l)}),[l]),i.createElement(r,{dataGrammarlyPart:"ui-kit-textbox",className:o,style:{width:"100%",height:"100%"}},i.createElement(n.b,null,a().__css),i.createElement("div",{role:"textbox",className:a().textBox,contentEditable:!0,onInput:e=>c(e.target.innerText),"data-placeholder":e,"aria-placeholder":e,"aria-label":s}))}},25682:(e,t,s)=>{var i=s(54933),o=s(93476)(i);o.push([e.id,"._z3YOv-textBox{font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#0e101a;font-size:14px;line-height:21px;font-feature-settings:'ss03' on;background:#f9faff;border:1px solid #e7e9f5;box-sizing:border-box;border-radius:4px;padding:10px 8px;overflow-y:auto;cursor:text;width:100%;height:100%;}._z3YOv-textBox:empty:before{font-feature-settings:'ss03' on;font-family:Inter,sans-serif;font-style:normal;font-weight:normal;color:#6d758d;font-size:14px;line-height:21px;content:attr(data-placeholder)}",""]),o.locals={textBox:"_z3YOv-textBox"},e.exports=o},93476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",i=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),i&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),i&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var n={};if(i)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(n[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&n[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),s&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=s):d[2]=s),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},54933:e=>{e.exports=function(e){return e[1]}},37985:e=>{e.exports={card:"X0R0o",menu:"PVaIB",disable:"FCO94",item:"EfFpP",heading:"YQ0dJ",text:"yVoPk"}},29382:e=>{e.exports={container:"lUF9V",box:"SODR1",close:"PeKu0",form:"DqhDT",heading:"euoDw",subheading:"NPgD4",explanation:"onNOx",section:"uFYpG",subject:"QU_Yq",suggestion:"onRow",optionGroup:"N6Xyq",option:"jrYFW",checked:"DXa0M",textfield:"_w7gI",footer:"RGjl8",button:"ZEcZy",primary:"UGRLr",disabled:"ks3Tq",secondary:"ciPzI"}},59070:e=>{e.exports={container:"cfYKl",offset:"NHkUd",completion:"_2p6F",text:"giG7o",hovered:"fassR",tab:"PT7dB",logo:"Ce3bq"}}}]);