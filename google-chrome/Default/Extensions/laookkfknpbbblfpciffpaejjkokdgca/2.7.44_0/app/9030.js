(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[9030,3778],{40063:(t,e,a)=>{"use strict";a.d(e,{Z:()=>i});let n={};const i={bind:function(t,e){let a,i;t.dataset.justBoundClickOutsideHandler=!0,setTimeout((()=>{t.dataset.justBoundClickOutsideHandler=!1}),100);const o=t=>{i=!1,(t=>t&&t.clientX>window.innerWidth)(t)?i=!0:a=t.target},s=n=>{i||(e.modifiers.bubble||!t.contains(a)&&!t.contains(n.target)&&t!==a&&t!==n.target&&"true"!==t.dataset.justBoundClickOutsideHandler)&&e.value(n)};t.dataset.clickOutsideMouseupHandlerId=Math.random().toString(36).substring(7),t.dataset.clickOutsideMousedownHandlerId=Math.random().toString(36).substring(7),n[t.dataset.clickOutsideMouseupHandlerId]=s,n[t.dataset.clickOutsideMousedownHandlerId]=o,document.addEventListener("mouseup",s),document.addEventListener("mousedown",o)},unbind:function(t){document.removeEventListener("mouseup",n[t.dataset.clickOutsideMouseupHandlerId]),document.removeEventListener("mousedown",n[t.dataset.clickOutsideMousedownHandlerId]),delete n[t.dataset.clickOutsideMouseupHandlerId],delete n[t.dataset.clickOutsideMousedownHandlerId],delete t.dataset.clickOutsideMouseupHandlerId,delete t.dataset.clickOutsideMousedownHandlerId,delete t.dataset.justBoundClickOutsideHandler}}},3862:(t,e,a)=>{(t.exports=a(23645)(!1)).push([t.id,"\n.container[data-v-729f2abc] { --icon-padding: 11px; margin-right: 20px; position: relative; z-index: 1; display: flex; align-items: center;\n}\n[data-v-729f2abc] .icon { --icon-size: 24px; padding: var(--icon-padding); box-sizing: content-box; cursor: pointer; vertical-align: top;\n}\n.icon-toggle[data-v-729f2abc] { --icon-size: 22px; --icon-padding: 12px;\n}\n.dash-icon-wrapper[data-v-729f2abc] { padding: 0; vertical-align: top;\n}\n.dash-icon-wrapper[data-v-729f2abc]:after { --icon-wrapper-size: 46px;\n}\n.dash-icon[data-v-729f2abc] { opacity: 0;\n}\n.dash-icon[data-v-729f2abc]:hover { opacity: 1;\n}\n\n\t/* Ensure the negative side margin matches the nav-item first/last child padding */\n.nav[data-v-729f2abc] { margin: 0 -2px; position: absolute; top: 0; right: 0; background: var(--color-bg); border-radius: 100px;\n}\n.open-to-right .nav[data-v-729f2abc] { right: auto; left: 0;\n}\n.open-enter-active[data-v-729f2abc], .open-leave-active[data-v-729f2abc] { transition: opacity 0.1s ease;\n}\n.open-enter[data-v-729f2abc], .open-leave-to[data-v-729f2abc] { opacity: 0;\n}\n@media screen and (max-width: 450px) {\n.container[data-v-729f2abc] { --icon-size: 22px;\n}\n.icon[data-v-729f2abc] { padding-right: 10px;\n}\n}\n",""])},57033:(t,e,a)=>{(t.exports=a(23645)(!1)).push([t.id,"\n.nav[data-v-7e40b9ae] { display: flex;\n}\n.nav-item[data-v-7e40b9ae] { position: relative; display: flex; align-items: center;\n}\n.nav-item .icon[data-v-7e40b9ae] { padding: var(--icon-padding) calc(var(--icon-padding) - 4px); opacity: 0.5;\n}\n.nav-item:first-child .icon[data-v-7e40b9ae] { padding-left: calc(var(--icon-padding) + 2px);\n}\n.nav-item:last-child .icon[data-v-7e40b9ae] { padding-right: calc(var(--icon-padding) + 2px);\n}\n.nav-item:hover .icon[data-v-7e40b9ae] { opacity: 0.8;\n}\n.nav-item:hover:active .icon[data-v-7e40b9ae], .nav-item.active .icon[data-v-7e40b9ae] { opacity: 1 !important;\n}\n.nav-title[data-v-7e40b9ae] { display: none;\n}\n.tooltip[data-v-7e40b9ae] { padding: 3px 5px; position: absolute; top: calc(100% + 2px); left: 50%; z-index: 1; display: none; background: hsla(0deg 0% 15% / 95%); border-radius: 4px; color: white; font-size: 0.8125rem; transform: translateX(-50%); white-space: nowrap;\n}\n.nav-item:hover .tooltip[data-v-7e40b9ae] { display: block;\n}\n.tooltip .badge[data-v-7e40b9ae] { background: rgba(255 255 255 / 20%); color: white;\n}\n\n\t/* Mobile */\n.toast .nav[data-v-7e40b9ae] { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-column-gap: 10px;\n}\n.toast .nav-item[data-v-7e40b9ae] { padding: 7px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 6px; box-shadow: inset 0 0 0 1.5px var(--border-color); font-size: 12px;\n}\n.toast .nav-icon[data-v-7e40b9ae] { --size: 22px; height: var(--size); width: var(--size); margin: 3px 0; opacity: 0.5; border-radius: 4px;\n}\n.toast .nav-title[data-v-7e40b9ae] { margin: 1px 0 -1px; display: block; opacity: 0.7; line-height: 1.2;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n.toast .tooltip[data-v-7e40b9ae] { display: none;\n}\n.toast .nav-item.active[data-v-7e40b9ae], .toast .nav-item[data-v-7e40b9ae]:active { background: var(--border-color); box-shadow: none;\n}\n.toast .nav-item.active .nav-icon[data-v-7e40b9ae], .toast .nav-item.active .nav-title[data-v-7e40b9ae] { opacity: 1;\n}\n\n",""])},92989:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PHBhdGggZD0iTTMuODc5IDEzLjg3OUEzIDMgMCAxMDguMTIgMTguMTJMMy44OCAxMy44OHpNMTguMTIgOC4xMkEzIDMgMCAxMDEzLjg4IDMuODhMMTguMTIgOC4xMnptLTEwIDUuNzU4QTMgMyAwIDEwMy44OCAxOC4xMkw4LjEyIDEzLjg4ek0xMy44OCAyOC4xMmEzIDMgMCAxMDQuMjQyLTQuMjQyTDEzLjg4IDI4LjEyek01MyAyN2EzIDMgMCAxMDYgMGgtNnptMy0xMWgzYTMgMyAwIDAwLTMtM3Yzek02IDEzYTMgMyAwIDEwMCA2di02em0yLjEyMSA1LjEyMWwxMC0xMEwxMy44OCAzLjg4bC0xMCAxMEw4LjEyIDE4LjEyem0tNC4yNDIgMGwxMCAxMCA0LjI0Mi00LjI0Mi0xMC0xMEwzLjg4IDE4LjEyek01OSAyN1YxNmgtNnYxMWg2em0tMy0xNEg2djZoNTB2LTZ6TTYwLjEyMSA1MC4xMjFhMyAzIDAgMTAtNC4yNDItNC4yNDJsNC4yNDIgNC4yNDJ6TTQ1Ljg4IDU1Ljg4YTMgMyAwIDEwNC4yNDIgNC4yNDJMNDUuODggNTUuODh6bTEwLTUuNzU4YTMgMyAwIDEwNC4yNDItNC4yNDJMNTUuODggNTAuMTJ6TTUwLjEyIDM1Ljg4YTMgMyAwIDEwLTQuMjQyIDQuMjQybDQuMjQyLTQuMjQyek0xMSAzN2EzIDMgMCAxMC02IDBoNnpNOCA0OEg1YTMgMyAwIDAwMyAzdi0zem01MCAzYTMgMyAwIDEwMC02djZ6bS0yLjEyMS01LjEyMWwtMTAgMTAgNC4yNDIgNC4yNDIgMTAtMTAtNC4yNDItNC4yNDJ6bTQuMjQyIDBsLTEwLTEwLTQuMjQyIDQuMjQyIDEwIDEwIDQuMjQyLTQuMjQyek01IDM3djExaDZWMzdINXptMyAxNGg1MHYtNkg4djZ6Ii8+PC9zdmc+"},9030:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>c});var n=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],staticClass:"container",class:{"open-to-right":t.openToRight},attrs:{"data-test":`${t.region}-nav`}},[e("div",{staticClass:"icon-wrapper dash-icon-wrapper",attrs:{"data-test":"open","data-ob":`${t.region}-nav`},on:{click:t.openNav}},[e("inline-svg",{staticClass:"dash-icon icon icon-toggle",attrs:{src:a(92989)},on:{loaded:t.onSvgLoad}})],1),t._v(" "),e("transition",{attrs:{name:"open"}},[t.open?e("quick-nav-options-list",t._b({ref:"options",on:{iconsLoaded:t.onOptionsIconsLoad,"switch-to":t.switchTo}},"quick-nav-options-list",t.$props,!1)):t._e()],1)],1)};n._withStripped=!0;var i=a(42223),o=a(40063),s=a(3778);const d={name:"QuickNav",directives:{ClickOutside:o.Z},components:{QuickNavOptionsList:s.default},mixins:[i.Z],props:{active:{type:String,default:""},options:{type:Object,default:()=>{}},region:{type:String,default:""}},data:()=>({open:!1,openToRight:!1,dropdownActive:!1}),created(){this.$e.listenTo(m,"globalEvent:esc",this.close)},destroyed(){this.$e.stopListening(m,"globalEvent:esc",this.close)},methods:{onSvgLoad(){m.trigger(this.region+"Nav:loaded")},openNav(){this.openToRight=!1,this.open=!0},switchTo(t){this.$emit("switch-to",t),this.close()},close(){this.open&&(this.open=!1)},onOptionsIconsLoad(){this.$refs.options.$el.getBoundingClientRect().left<0&&(this.openToRight=!0)}}};a(52910);const c=(0,a(51900).Z)(d,n,[],!1,null,"729f2abc",null).exports},3778:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>s});var n=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"nav"},t._l(t.options,(function(a,n){return e("div",{key:n,staticClass:"nav-item",class:{active:t.active===n},attrs:{"data-test":n+"-opt"},on:{click:function(e){return t.switchTo(n)}}},[e("inline-svg",{class:"nav-icon icon icon-"+n,attrs:{src:a.icon},on:{loaded:function(e){return t.onLoad(n)}}}),t._v(" "),e("div",{staticClass:"nav-title"},[t._v(t._s(a.name))]),t._v(" "),e("span",{staticClass:"tooltip"},[t._v(t._s(a.name))])],1)})),0)};n._withStripped=!0;var i=a(81405);const o={name:"QuickNavOptionsList",unreactive:()=>({iconsLoaded:0}),props:{options:{type:Object,default:()=>{}},active:{type:String,default:""},region:{type:String,default:""}},methods:{switchTo(t){const e=this.options[t].upsell;!this.$plus&&e&&m.cmd("modal.open",e,{eventSource:`${this.region} nav`}),this.$emit("switch-to",t);const a=this.options[t].feature||t,n=this.options[t].eventName||a;i.ZP.capture(n+" activate",{feature:a})},onLoad(){this.iconsLoaded++,this.iconsLoaded===Object.keys(this.options).length&&this.$emit("iconsLoaded")}}};a(90585);const s=(0,a(51900).Z)(o,n,[],!1,null,"7e40b9ae",null).exports},52910:(t,e,a)=>{var n=a(3862);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,a(45346).Z)("aaa3ea48",n,!1,{ssrId:!0})},90585:(t,e,a)=>{var n=a(57033);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,a(45346).Z)("2ebf751b",n,!1,{ssrId:!0})}}]);