(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[4259,9358],{8552:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});const a={inserted:function(t,e){var i;if(!1===(null==e?void 0:e.value))return;const a=null==t||null===(i=t.value)||void 0===i?void 0:i.length;t.select(),(a||0===a)&&(t.setSelectionRange(a,a),t.scrollLeft=t.scrollWidth)}}},11007:(t,e,i)=>{(t.exports=i(23645)(!1)).push([t.id,"\n/* stylelint-disable */\n.input-wrapper[data-v-9bc99a20] { position: relative;\n}\n.input-wrapper > input[data-v-9bc99a20] { margin-bottom: 0;\n}\n.input-wrapper.show-count > input[data-v-9bc99a20] { padding-right: 3rem;\n}\n.input-wrapper .remaining-characters[data-v-9bc99a20] { margin-right: -1px; position: absolute; top: 0; right: var(--form-element-padding); bottom: 0; display: flex; align-items: center; color: var(--color-light); font-size: 0.8125rem; user-select: none;\n}\n.input-wrapper.hide-count .remaining-characters[data-v-9bc99a20] { display: none;\n}\n.input-wrapper.close-to-limit .remaining-characters[data-v-9bc99a20] { color: var(--color-form-warning);\n}\n.input-wrapper.over-limit .remaining-characters[data-v-9bc99a20] { color: var(--color-form-error);\n}\n.input-wrapper.has-button-below[data-v-9bc99a20]  { margin-bottom: var(--form-element-margin-small);\n}\n[data-v-9bc99a20] .select-wrapper { width: 100%;\n}\n.input-description[data-v-9bc99a20] { margin: 0.25rem 0 -4px; opacity: 0.7; font-size: 0.8125rem;\n}\n.input-description[data-v-9bc99a20] a { padding: 2px; opacity: 0.65;\n}\n\n\n",""])},88154:(t,e,i)=>{(t.exports=i(23645)(!1)).push([t.id,"\n/* stylelint-disable */\n.switch-click[data-v-bfbe4314] { width: 100%; display: flex; align-items: center; justify-content: space-between; cursor: pointer;\n}\n\t/* .switch-click:hover { opacity: 0.8; transition-duration: 0s; } */\n\n\t/* Changing for dropdown sliders */\n\t/* .switch { --switch-bg: rgba(255,255,255,.25); height: 20px; width: 33px; position: relative; display: inline-block; background: var(--switch-bg); border-radius: 50px; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.0); transition: all 0.1s ease; } \n\t\t\t.switch:before { height: 14px; width: 14px; margin: 2px 1px; position: absolute; top: 1px; left: 2px; z-index: 2; background: rgba(255,255,255,1); border-radius: 100%; box-shadow: 0 0 0 1px rgba(0,0,0,0.0); content: ''; transition: all 0.2s ease; }\n\t\t\t\t.switch.on:before { background: white; transform: translateX(13px); }\n\t\t*/\n.switch[data-v-bfbe4314] { --switch-bg: var(--color-stop-3); height: 17px; width: 28px; margin-top: -1px; margin-bottom: -1px; margin-left: 15px; position: relative; right: -2px; display: inline-block; background: var(--switch-bg); border-radius: 50px; box-shadow: inset 0 0 0 1px rgba(0,0,0,0.0); transition: all 0.1s ease;\n}\n.switch.on[data-v-bfbe4314] { --switch-bg: #7edc74;\n}\n.switch[data-v-bfbe4314]:before { --size: 11px; height: var(--size); width: var(--size); margin: 2px 1px; position: absolute; top: 1px; left: 3px; z-index: 2; background: rgba(255,255,255,1); border-radius: var(--size); box-shadow: 0 0 0 1px rgba(0,0,0,0.0); content: ''; transition: all 0.2s ease;\n}\n.switch.on[data-v-bfbe4314]:before { background: white; transform: translateX(10px);\n}\n.switch-label[data-v-bfbe4314] {\n}\n",""])},21713:(t,e,i)=>{(t.exports=i(23645)(!1)).push([t.id,"\n/* stylelint-disable */\n.flex-wrapper[data-v-5e1b34fe] { margin-bottom: var(--form-element-margin-small); display: flex; align-items: center;\n}\n.flex-wrapper.align-baseline[data-v-5e1b34fe] { align-items: baseline;\n}\n.flex-wrapper.beside-form-label[data-v-5e1b34fe] { margin-bottom: var(--form-label-bottom-margin);\n}\n.flex-wrapper.beside-form-label > label[data-v-5e1b34fe] { margin-bottom: 0;\n}\n.tooltip-wrapper[data-v-5e1b34fe] { --notch-width: 10px; --notch-position: 14px; --tooltip-bg: hsl(var(--color-hue), 12%, 55%); position: relative;\n}\n.tooltip-icon[data-v-5e1b34fe] { height: 16px; margin: -10px auto -10px 0; padding: 10px; display: block; opacity: 0.35; box-sizing: content-box; cursor: default; fill: var(--color-label);\n}\n.tooltip[data-v-5e1b34fe] { width: max-content; padding: 10px 14px; position: absolute; top: calc(100% + 12px); left: 0; z-index: 10; background-color: var(--tooltip-bg); border-radius: var(--border-radius); box-shadow: 0 3px 9px rgba(0,0,0,0.14); color: #fff; font-size: 0.8125rem; line-height: 1.3; pointer-events: none;\n}\n.tooltip .notch[data-v-5e1b34fe] { height: var(--notch-width); width: var(--notch-width); position: absolute; top: -3px; left: var(--notch-position); display: inline-block; background: var(--tooltip-bg); content: ''; transform: rotate(45deg);\n}\n.tooltip.open-to-left[data-v-5e1b34fe] { left: auto;\n}\n.tooltip.position-right[data-v-5e1b34fe] { top: -50%; left: 100%;\n}\n.tooltip.position-right .notch[data-v-5e1b34fe] { top: 11px; left: -4px;\n}\n.tooltip.position-left[data-v-5e1b34fe] { top: -50%; right: 100%; left: auto;\n}\n.tooltip.position-left .notch[data-v-5e1b34fe] { top: 11px; right: -4px; left: auto;\n}\n.tooltip.position-top[data-v-5e1b34fe] { top: auto; bottom: calc(100% + 12px);\n}\n.tooltip.position-top .notch[data-v-5e1b34fe] { top: auto; bottom: -3px; left: var(--notch-position);\n}\n.open-to-left[data-v-5e1b34fe] { right: 0; left: auto;\n}\n.open-to-left .notch[data-v-5e1b34fe] { right: var(--notch-position); left: auto;\n}\n\n",""])},44259:(t,e,i)=>{"use strict";i.d(e,{Z:()=>c});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"form-row",class:[t.access(t.field.class,t.activeItem),t.warning?"warning":""]},[("input"===t.field.type||"select"===t.field.type)&&t.field.label&&t.access(t.field.tooltip,t.activeItem)?e("tooltip",{attrs:{"beside-form-label":!0}},[e("label",{attrs:{slot:"input",for:t.field.property},slot:"input"},[t._v(t._s(t.field.label))]),t._v(" "),e("span",{attrs:{slot:"tip-text"},slot:"tip-text"},[t._v(t._s(t.access(t.field.tooltip,t.activeItem)))])]):"input"!==t.field.type&&"select"!==t.field.type||!t.field.label?t._e():e("label",{attrs:{for:t.field.property}},[t._v(t._s(t.field.label)),t.access(t.field.optionalLabel,t.activeItem)?e("span",{staticClass:"optional"},[t._v("Optional")]):t._e()]),t._v(" "),"input"===t.field.type?e("div",{staticClass:"input-wrapper",class:[t.inputWrapperClass,t.field.wrapperClass],attrs:{"data-test":t.field.dataTest+"-input-wrapper"}},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.editProps[t.field.property],expression:"editProps[field.property]",modifiers:{trim:!0}},{name:"soft-focus",rawName:"v-soft-focus",value:t.autoFocus,expression:"autoFocus"}],ref:"element",attrs:{placeholder:t.field.placeholder,name:t.field.property,disabled:t.activeItem.disableEdit||t.access(t.field.disabled,t.activeItem),"data-test":t.field.dataTest+"-input",type:"text",autocapitalize:t.field.autoCapitalize?"on":"off",autocorrect:!1===t.field.autoCorrect?"off":"on",autocomplete:"off"},domProps:{value:t.editProps[t.field.property]},on:{keyup:t.clearWarnings,input:function(e){e.target.composing||t.$set(t.editProps,t.field.property,e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.field.validate&&t.field.validate.maxLength?e("div",{staticClass:"remaining-characters",attrs:{"data-test":t.field.dataTest+"-remaining-characters"}},[t._v(t._s(t.remainingCharacters))]):t._e()]):"toggle"===t.field.type?e("toggle",{ref:"element",staticClass:"in-form",attrs:{name:t.field.property,label:t.field.label,tip:t.field.tip,"data-test":t.field.dataTest+"-input"},model:{value:t.editProps[t.field.property],callback:function(e){t.$set(t.editProps,t.field.property,e)},expression:"editProps[field.property]"}}):"select"===t.field.type?e("div",{staticClass:"select-wrapper"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.editProps[t.field.property],expression:"editProps[field.property]"}],ref:"element",attrs:{name:t.field.property,disabled:t.activeItem.disableEdit||t.access(t.field.disabled,t.activeItem),"data-test":t.field.dataTest+"-input"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.editProps,t.field.property,e.target.multiple?i:i[0])}}},t._l(t.computedSelectOptions,(function(i,a){return e("option",{key:a,attrs:{disabled:i.disabled},domProps:{value:i.value,selected:i.selected}},[t._v("\n\t\t\t\t"+t._s(i.label)+"\n\t\t\t")])})),0)]):e(t.field.type,{ref:"element",tag:"component",attrs:{field:t.field,"field-warnings":t.fieldWarnings,"view-manager":t.viewManager,"component-field-warnings":t.componentFieldWarnings,"disable-input":t.activeItem.disableEdit},on:{input:t.clearWarnings},model:{value:t.editProps[t.field.property],callback:function(e){t.$set(t.editProps,t.field.property,e)},expression:"editProps[field.property]"}}),t._v(" "),t.field.subText?e("div",{staticClass:"input-description",domProps:{innerHTML:t._s(t.field.subText)}}):t._e()],1)};a._withStripped=!0;var o=i(59358),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex-wrapper",class:{"beside-form-label":t.besideFormLabel,"u--no-margin-bottom":t.noMarginBottom,"align-baseline":t.alignAtBaseline}},[t._t("input"),t._v(" "),t.$slots["tip-text"]?e("div",{ref:"tooltip-wrapper",staticClass:"tooltip-wrapper"},[e("inline-svg",{staticClass:"tooltip-icon",attrs:{src:i(51261)},on:{mouseenter:t.mouseEnter,mouseleave:t.mouseLeave}}),t._v(" "),e("transition",{attrs:{name:"fade",duration:"75"}},[t.open?e("div",{staticClass:"tooltip",class:[t.computedPosition,{"open-to-left":t.openToLeft}],style:{"max-width":t.tooltipWidth+"px"}},[t._t("tip-text"),t._v(" "),e("div",{staticClass:"notch"})],2):t._e()])],1):t._e()],2)};n._withStripped=!0;var s=i(92729);const r={name:"Tooltip",unreactive:()=>({hoverDurationToActivate:200,defaultMaxWidth:300,minWidth:150}),props:{besideFormLabel:{type:Boolean,default:!1},position:{type:String,default:s.Rx.BOTTOM},noMarginBottom:{type:Boolean,default:!1},alignAtBaseline:{type:Boolean,default:!1}},data(){return{open:!1,tooltipWidth:this.defaultMaxWidth,positionOverride:null,openToLeft:!1}},computed:{computedPosition(){return this.positionOverride||this.position}},methods:{mouseEnter(){this.hoverTimeout=setTimeout((()=>{const t=this.$refs["tooltip-wrapper"],e=t.closest(".tooltip-container");if(e){const i=t.getBoundingClientRect(),a=e.getBoundingClientRect(),o=i.left-a.left,n=a.right-i.right,r=this.position===s.Rx.LEFT?o:n,l=this.position===s.Rx.LEFT?n:o,p=this.defaultMaxWidth>r,d=this.minWidth>r&&l>r;p&&!d?this.tooltipWidth=r:d&&(this.tooltipWidth=Math.min(l,this.defaultMaxWidth),this.position===s.Rx.RIGHT?this.positionOverride=s.Rx.LEFT:this.openToLeft=!0)}this.open=!0}),this.hoverDurationToActivate)},mouseLeave(){this.hoverTimeout&&clearTimeout(this.hoverTimeout),this.open=!1,this.positionOverride=null,this.openToLeft=!1,this.tooltipWidth=this.defaultMaxWidth}}};i(57214);var l=i(51900);const p=(0,l.Z)(r,n,[],!1,null,"5e1b34fe",null).exports,d={name:"EditField",directives:{SoftFocus:i(8552).Z},components:{Tooltip:p,Toggle:o.Z},props:{autoFocus:{type:Boolean,default:!1},viewManager:{type:Object,required:!0},field:{type:Object,required:!0},fieldWarnings:{type:Array,default:()=>[]},componentFieldWarnings:{type:Array,default:()=>[]}},computed:{warning(){return this.fieldWarnings.includes(this.field.property)},editProps(){return this.viewManager.editProps},activeItem(){return this.viewManager.activeItem},computedSelectOptions(){return this.access(this.field.options)},remainingCharacters(){if(this.field.validate&&this.field.validate.maxLength&&"string"==typeof this.editProps[this.field.property])return this.field.validate.maxLength-this.editProps[this.field.property].length},inputWrapperClass(){if(this.field.validate&&this.field.validate.maxLength)return this.remainingCharacters<0?"show-count over-limit":this.remainingCharacters<.6*this.field.validate.maxLength?"show-count close-to-limit":this.remainingCharacters>.8*this.field.validate.maxLength?"hide-count":"show-count"}},watch:{warning(t){if(t){let t=document.activeElement;if(t.classList&&t.classList.contains("error"))return;this.focus()}}},methods:{focus(){this.$refs.element&&this.$refs.element.focus&&this.$refs.element.focus()},blur(){this.$refs.element&&this.$refs.element.blur&&this.$refs.element.blur()},clearWarnings(){this.$emit("clear-warnings")},access:m.utils.access}};i(65030);const c=(0,l.Z)(d,a,[],!1,null,"9bc99a20",null).exports},59358:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"switch-click",attrs:{"data-test":t.dataTest},on:{click:t.toggle}},[t.label?e("span",{staticClass:"switch-label"},[t._v(t._s(t.label))]):t._e(),t._v(" "),e("div",{staticClass:"switch",class:{on:t.value}})])};a._withStripped=!0;const o={name:"Toggle",props:{value:{type:Boolean,default:!1},label:{type:String,default:""},dataTest:{type:String,default:""}},methods:{toggle(t){t.preventDefault(),this.$emit("input",!this.value)}}};i(49491);const n=(0,i(51900).Z)(o,a,[],!1,null,"bfbe4314",null).exports},65030:(t,e,i)=>{var a=i(11007);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,i(45346).Z)("e4eda7a2",a,!1,{ssrId:!0})},49491:(t,e,i)=>{var a=i(88154);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,i(45346).Z)("61b1e1a6",a,!1,{ssrId:!0})},57214:(t,e,i)=>{var a=i(21713);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[t.id,a,""]]),a.locals&&(t.exports=a.locals),(0,i(45346).Z)("2d3ca8ce",a,!1,{ssrId:!0})}}]);