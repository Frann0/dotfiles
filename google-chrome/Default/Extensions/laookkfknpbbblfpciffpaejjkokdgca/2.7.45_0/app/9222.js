(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[9222,2511,4541],{99437:(t,e,a)=>{"use strict";a.d(e,{Z:()=>M});var s=a(20144),i=a(88026),o=a(51726),n=a.n(o),r=a(34952),c=a(7838),d=a(81452);let u={};const l={bind:function(t,e){m.utils.isTouchDevice()&&(t.dataset.justBoundMobileClickHandler=!0,setTimeout((()=>{t.dataset.justBoundMobileClickHandler=!1}),100),t.dataset.mobileClickHandlerId=Math.random().toString(36).substring(7),u[t.dataset.mobileClickHandlerId]=e.value,t.addEventListener("click",e.value))},unbind:function(t){m.utils.isTouchDevice()&&(t.removeEventListener("click",u[t.dataset.mobileClickHandlerId]),delete u[t.dataset.mobileClickHandlerId],delete t.dataset.mobileClickHandlerId,delete t.dataset.justBoundMobileClickHandler)}};var p=a(28692);s.ZP.use(i.Z,{name:"unreactive"}),s.ZP.use(n()),s.ZP.use(r.InlineSvgPlugin),s.ZP.use(p.og),s.ZP.prototype.$xhr=d.Z,s.ZP.prototype.$e=c.Z,s.ZP.directive("mobile-click",l),new s.ZP({bb:()=>({conditionalFeatures:m.conditionalFeatures,teamInfo:m.models.teamInfo,date:m.models.date,balance:m.models.balanceMode})}),s.ZP.mixin({unreactive:()=>({$touch:m.utils.isTouchDevice()}),computed:{$mobile:()=>m.reactive.windowDimensions.width<=450,$plus:()=>m.conditionalFeatures.featureEnabled("plus"),$team:()=>m.conditionalFeatures.featureEnabled("team"),$admin:()=>m.models.teamInfo&&m.models.teamInfo.get("team")&&m.models.teamInfo.get("team").userIsAdmin}});const M=s.ZP},9222:(t,e,a)=>{"use strict";a.r(e);var s=a(99437),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"app-container photo-info",on:{mouseenter:t.admireOnHover,mouseleave:t.stopAdmire}},[e("transition",{attrs:{name:"fade",mode:"out-in"},on:{enter:t.onEnter}},[e("div",{directives:[{name:"mobile-click",rawName:"v-mobile-click",value:t.toggleToastMenu.bind(null,!0),expression:"toggleToastMenu.bind(null, true)"}],key:t.background.id,staticClass:"app-dash",class:{"show-hover":t.background.unsplash||t.admiring,"add-shadow":t.admiring,"show-anyway":t.admiring,"hotkey-hover":t.admiring}},[e("div",{staticClass:"title"},[t._v(t._s(t.background.title||"Untitled"))]),t._v(" "),e("div",{staticClass:"source"},[t.background.source?e("span",{staticClass:"source-link",attrs:{"data-url":t.background.url},on:{click:t.clickSource}},[t._v(t._s(t.background.source))]):t._e(),t._v(" "),t.$touch?t._e():e("span",{on:{mouseenter:t.stopAdmire}},t._l(t.controls,(function(a,s){return e("span",{key:s,class:t.access(a.class),attrs:{title:t.access(a.tooltip)||t.access(a.label)},on:{mouseenter:function(e){return t.access(a.hover)},click:a.action}},[e("inline-svg",{staticClass:"icon",class:a.iconClass,attrs:{src:t.access(a.icon)}}),t._v(" "),t.access(a.showLabel)?e("span",[t._v(t._s(t.access(a.label)))]):t._e()],1)})),0)])])]),t._v(" "),t.$touch?e("toast-menu",{attrs:{active:t.toastMenuActive,"section-title":"Photo Actions"},on:{toggle:t.toggleToastMenu},scopedSlots:t._u([t.background.title||t.background.source?{key:"header",fn:function(){return[e("div",{staticClass:"toast-title"},[t._v(t._s(t.background.title))]),t._v(" "),t.background.source?e("div",{staticClass:"toast-source",attrs:{"data-url":t.background.url},on:{click:t.clickSource}},[t._v(t._s(t.background.source))]):t._e()]},proxy:!0}:null],null,!0)},[t._v(" "),t._l(t.controls,(function(a,s){return e("dropdown-option",{key:s,class:t.access(a.class),nativeOn:{click:function(t){return a.action.apply(null,arguments)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("inline-svg",{staticClass:"icon",class:t.access(a.iconClass),attrs:{src:a.icon}})]},proxy:!0}],null,!0)},[t._v("\n\t\t\t"+t._s(t.access(a.label))+"\n\t\t")])}))],2):t._e()],1)};i._withStripped=!0;var o=a(22511),n=a(84541);function r(){const t=m.models.backgroundManager.getActiveItem();return t?{id:t.get("_id")||t.get("id"),title:t.get("title"),source:t.get("source"),fav:t.get("is_favorite"),url:t.get("sourceUrl"),unsplash:t.get("sourceUrl")&&t.get("sourceUrl").includes("unsplash"),destination:t.get("destination_name"),custom:!!t.get("isCustom")}:{}}const c=new(a(81405).ZP)({feature:"photos"}),d={name:"BackgroundInfo",components:{DropdownOption:n.default,ToastMenu:o.default},data:()=>({toastMenuActive:!1,background:r(),skipping:!1,admireTimeoutId:null,admiring:!1}),computed:{controls(){return{favorite:{icon:a(56624),label:()=>this.background.fav?"Unfavorite":"Favorite",action:()=>this.toggleFavorite(),class:()=>["favorite",{active:this.background.fav,control:!this.$touch}],iconClass:"icon-heart"},skip:{icon:a(53957),label:"Skip",action:()=>this.skipBackground(),class:()=>["skip",{active:this.skipping,control:!this.$touch}],iconClass:"icon-skip"}}}},created(){this.$e.listenTo(m.models.activeBackground,"background:successfullyLoaded",this.setActiveBackground),this.$e.listenTo(m,"photoDetailsChanged",this.updatePhotoDetails),this.$e.listenTo(m,"backgroundInfo:admire:start",this.admire),this.$e.listenTo(m,"backgroundInfo:admire:stop",this.stopAdmire),this.$e.listenTo(m,"globalEvent:windowBlur",this.stopAdmire)},mounted(){m.widgetManager.appReady("background-info")},destroyed(){this.$e.stopListening(m.models.activeBackground,"background:successfullyLoaded",this.setActiveBackground),this.$e.stopListening(m,"photoDetailsChanged",this.updatePhotoDetails),this.$e.stopListening(m,"backgroundInfo:admire:start",this.admire),this.$e.stopListening(m,"backgroundInfo:admire:stop",this.stopAdmire),this.$e.stopListening(m,"globalEvent:windowBlur",this.stopAdmire)},methods:{setActiveBackground(){this.background=r()},updatePhotoDetails(t){t.id&&t.id===this.background.id&&(t.title&&""!==t.title&&(this.background.title=t.title),t.source&&""!==t.source&&(this.background.source=t.source))},toggleFavorite(){this.background.fav=!this.background.fav,m.models.backgroundManager.toggleFavorite(this.background.fav),c.capture("photo "+(this.background.fav?"fav":"unfav"),{custom:this.background.custom})},skipBackground(){if(!this.$plus)return m.cmd("modal.open","UPSELL_PHOTOS",{eventSource:"dash"}),void this.stopAdmire();this.skipping||(this.skipping=!0,m.models.backgroundManager.skipItem().finally((()=>{this.skipping=!1})),c.capture("photo skip",{is_paid_event:!0,custom:this.background.custom}))},clickSource(){this.background.url&&(this.captureAndHandleCustomLocation("photo source click"),window.open(this.background.url))},admire(){if(document.getElementsByClassName("apps")[0].classList.contains("hide-apps"))return;this.admiring=!0,m.widgetManager.hideApps({exemptionSelectors:".apps .photo-info"});const t=document.getElementsByClassName("background-overlay")[0];t.classList.add("slow"),t.classList.remove("show"),c.capture("photo admire",{custom:this.background.custom})},admireOnHover(){this.$touch||document.getElementsByClassName("apps")[0].classList.contains("hide-apps")||(this.clearAdmireTimeout(),this.admireTimeoutId=setTimeout(this.admire,4e3),this.captureAndHandleCustomLocation("photo hover"))},stopAdmire(){if(this.clearAdmireTimeout(),!this.admiring)return;this.admiring=!1,m.widgetManager.showApps();const t=document.getElementsByClassName("background-overlay")[0];t.classList.remove("slow"),t.classList.add("show")},clearAdmireTimeout(){clearTimeout(this.admireTimeoutId)},onEnter(){m.widgetManager.setBottomSideWidth()},toggleToastMenu(t=!this.toastMenuActive){this.toastMenuActive=t},access:m.utils.access,captureAndHandleCustomLocation(t){const e={custom:this.background.custom,photo_location:this.background.custom?"custom":this.background.title.toLowerCase(),location:"dash"};c.capture(t,e)}}};a(56997);const u=(0,a(51900).Z)(d,i,[],!1,null,"264aadce",null).exports,l=document.querySelector(".region.bottom-left"),p=document.createElement("div");l.appendChild(p),new s.Z({render:t=>t(u)}).$mount(p)},62067:(t,e,a)=>{(t.exports=a(23645)(!1)).push([t.id,"\n/* stylelint-disable */\n.photo-info[data-v-264aadce] { min-width: 0; flex: 0 1 auto;\n}\n.photo-info .app-dash[data-v-264aadce] { height: 60px; display: flex; justify-content: center; transition: all 0s var(--a-curve), opacity 1s var(--a-curve), transform 1s var(--a-curve);\n}\n.photo-info .app-dash[data-v-264aadce]:before { opacity: 0; content: ''; transition: opacity 1s var(--a-curve);\n}\n.photo-info.add-shadow[data-v-264aadce]:before { left: -40px; opacity: 0.3;\n}\n.title[data-v-264aadce], .source[data-v-264aadce] { width: max-content; transition: all 0.3s ease;\n}\n.title[data-v-264aadce] { --hover-offset: -2px; padding: 5px 0; display: inline;\n}\n.has-button > .title[data-v-264aadce] { --hover-offset: -6px !important;\n}\n.app-dash .title[data-v-264aadce] { opacity: 0.8; font-size: 0.8125rem;\n}\nbody:not(.touch) .app-dash .title[data-v-264aadce] { transform: translateZ(0) translateY(10px);\n}\nbody:not(.touch) .photo-info .app-dash:hover .title[data-v-264aadce], .photo-info .app-dash.show-hover .title[data-v-264aadce] { transform: none;\n}\n.hotkey-hover .title[data-v-264aadce] { transition-duration: 1s;\n}\n.source[data-v-264aadce] { --show-hover-transition: opacity 0.1s var(--a-curve); display: flex; align-items: center; font-size: 0.6875rem;\n}\n.app-dash .source[data-v-264aadce] { opacity: 0; transform: translateZ(0) translateY(-13px);\n}\n.touch .app-dash:not(.show-hover) .source[data-v-264aadce] { display: none;\n}\n.app-dash:hover .source[data-v-264aadce], .app-dash.show-hover .source[data-v-264aadce], .app-dash.pseudo-hover .source[data-v-264aadce] { opacity: 1; transform: translateZ(0) translateY(-2px);\n}\n.hotkey-hover .source[data-v-264aadce] { transition-duration: 0.8s;\n}\n.source-link[data-v-264aadce] { margin: -3px; margin-right: 0px; padding: 3px; opacity: 0.7; cursor: pointer; line-height: 20px; transition: all 0.2s var(--a-curve); vertical-align: top;\n}\n.source-link[data-v-264aadce]:hover { opacity: 0.9 !important;\n}\n.touch .source-link[data-v-264aadce] { pointer-events: none;\n}\n.control[data-v-264aadce] { --size: 16px; height: var(--size); width: var(--size); margin: -2px 0; padding: 2px 1px; position: relative; display: inline-flex; align-items: center; justify-content: center; opacity: 0.7; box-sizing: content-box; cursor: pointer; transition: var(--show-hover-transition);\n}\n.control[data-v-264aadce]:hover, .control.active[data-v-264aadce] { opacity: 1;\n}\n.control .icon[data-v-264aadce] { --icon-size: 14px; height: var(--icon-size); width: var(--icon-size);\n}\n.app-dash.show-hover .control[data-v-264aadce] { opacity: 0;\n}\n.app-dash.show-hover:hover .control[data-v-264aadce] { opacity: 0.7;\n}\n.app-dash.show-hover .control[data-v-264aadce]:hover { opacity: 1;\n}\n\n\n/* Mobile */\n@media screen and (max-width: 450px) {\n.title[data-v-264aadce], .source[data-v-264aadce] { width: auto;\n}\n.title[data-v-264aadce], .source-link[data-v-264aadce] { overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\n}\n.title[data-v-264aadce] { height: auto; font-size: 0.75rem; font-style: italic; line-height: 1.2;\n}\n}\n",""])},65497:(t,e,a)=>{(t.exports=a(23645)(!1)).push([t.id,"\n/* stylelint-disable */\n.toast-hide[data-v-576ee086] { opacity: 0;\n}\n.toast-visible .icon[data-v-576ee086] { opacity: 0.8;\n}\n.toast-container[data-v-576ee086] { height: 0; width: 100%; position: fixed; right: 0; bottom: 0; left: 0; z-index: 100; color: var(--color-text); overflow: visible;\n}\n.toast[data-v-576ee086] { --toast-padding: calc(var(--app-padding) - 3px); max-width: none !important; margin: 0 !important; padding: 0; position: absolute; top: auto; right: 0 !important; bottom: 0 !important; left: 0 !important; z-index: 2; background-color: var(--color-bg); border-radius: var(--border-radius) var(--border-radius) 0 0;\n}\n.toast-header[data-v-576ee086] { padding: var(--toast-padding) var(--toast-padding) calc(var(--toast-padding) - 3px); text-align: left;\n}\n[data-v-576ee086] .toast-title { line-height: 1.25;\n}\n[data-v-576ee086] .toast-source { margin-top: 4px; opacity: 0.7; font-size: 0.75rem; font-weight: 600;\n}\n.toast-list[data-v-576ee086] li { max-width: 100% !important;\n}\n.header-line[data-v-576ee086] { margin: 0 0 -4px !important;\n}\n.section-title[data-v-576ee086] { margin: var(--toast-padding); margin-bottom: 5px; opacity: 0.95; font-size: 12px; font-weight: 700; line-height: 1.2; text-align: left; text-transform: uppercase;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n[data-v-576ee086] .toast .line { height: 1px; margin: 3px var(--toast-padding); background: var(--border-color);\n}\n[data-v-576ee086] .dropdown-list-item { padding-right: var(--toast-padding); padding-left: var(--toast-padding);\n}\n.button-close[data-v-576ee086] { margin: var(--toast-padding); margin-top: calc(var(--toast-padding) - 8px); padding: 6px; padding-bottom: 5px; display: block; background: var(--border-color-low) !important; color: var(--color-text) !important; font-size: 12px; line-height: 1.2; text-align: center;\n} /* remove line-height when .focus-row { line-height: 120%; } is removed */\n.button-close[data-v-576ee086]:active { background: var(--border-color) !important;\n}\n.button-label[data-v-576ee086] { opacity: 0.8;\n}\n.toast-overlay[data-v-576ee086] { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1; background: hsla(0 0% 0% / 50%);\n}\n.slide-up-enter-active[data-v-576ee086], .slide-up-leave-active[data-v-576ee086] { transition: all 0.2s ease;\n}\n.slide-up-enter[data-v-576ee086], .slide-up-leave-to[data-v-576ee086]  { transform: translateY(100%);\n}\n",""])},23645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a=function(t,e){var a,s=t[1]||"",i=t[3];if(!i)return s;if(e&&"function"==typeof btoa){var o=(a=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),n=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[s].concat(n).concat([o]).join("\n")}return[s].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+a+"}":a})).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(s[o]=!0)}for(i=0;i<t.length;i++){var n=t[i];null!=n[0]&&s[n[0]]||(a&&!n[2]?n[2]=a:a&&(n[2]="("+n[2]+") and ("+a+")"),e.push(n))}},e}},56624:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBmaWxsPSIjZmZmIj4KPHBhdGggY2xhc3M9Im91dGxpbmUiIGQ9Ik00Mi45LDMzMi45YzQuNS03My44LDI5LjgtMTM1LjEsNzYtMTgzLjhoMS45bDEuOS0xLjlDMTc5LjIsOTguNCwyNDMuMSw3NCwzMTQuMyw3NHMxMzIuNSwyMi41LDE4My44LDY3LjQKCWMyMC41LTE4LDQyLTMyLjQsNjQuNS00My4zbDEuOS0xLjloMS45QzYwMi40LDgxLjQsNjM5LjksNzQsNjc5LjEsNzRjNTYuNS0xLjMsMTA4LjEsMTIuNSwxNTUsNDEuNAoJYzQ2LjgsMjguOSw4Mi4xLDY4LjcsMTA1LjksMTE5LjN2MS45bDEuOSwzLjhjMTkuMiw2OCwyMi41LDEzMi44LDkuNiwxOTQuNGMtMTIuOCw2MS42LTM4LjUsMTE3LjctNzcsMTY4LjQKCWMtMzkuOCw1Ni41LTkxLjgsMTExLjYtMTU1LjksMTY1LjVjMCwxLjMtMC42LDEuOS0xLjksMS45Yy0zMS40LDI4LjktNjUuOCw1Ny43LTEwMyw4Ni42Yy0yMS44LDE2LTQwLjcsMjkuMi01Ni44LDM5LjUKCWMtMjEuMiwxNC44LTM4LjgsMjIuMS01Mi45LDIyLjFsLTUuOCwxLjlsLTQuOC0xLjljLTE4LTEuOS0zNi45LTExLjItNTYuOC0yNy45Yy02LjQtMy44LTEzLjItOS0yMC4yLTE1LjRzLTEyLjItMTAuNi0xNS40LTEyLjUKCUgzOTlDMjQxLjIsNzQyLjYsMTM1LjksNjMzLjUsODMuMyw1MzZ2LTEuOUM1MS45LDQ3My44LDM4LjQsNDA2LjcsNDIuOSwzMzIuOXogTTEyNC43LDM0Mi42Yy0zLjgsNTUuMiw2LjcsMTA3LjIsMzEuOCwxNTUuOQoJYzQ3LjUsODYuNiwxNDQuNywxODYuMSwyOTEuNiwyOTguNGgxLjljMy44LDMuOCw5LjYsOSwxNy4zLDE1LjRjNy43LDYuNCwxMy44LDEwLjksMTguMywxMy41YzUuMSwzLjgsOS45LDcuMSwxNC40LDkuNgoJYzUuMS0xLjMsOS42LTMuMiwxMy41LTUuOGMxNC4xLTksMzAuNS0yMC45LDQ5LjEtMzUuNmMzNy4yLTI3LjYsNzAuOS01NS44LDEwMS4xLTg0LjdjNjAuMy01MS4zLDEwOC44LTEwMywxNDUuMy0xNTUKCWM2OC43LTkxLjEsODcuMy0xODYuNyw1NS44LTI4Ni44Yy0xNy4zLTM2LjYtNDIuMy02NC44LTc1LjEtODQuN2MtMzIuNy0xOS45LTY5LTI5LjItMTA4LjgtMjcuOWMtMjcuNiwwLTU1LjIsNS41LTgyLjgsMTYuNAoJYy0yNSwxNC4xLTQ2LjgsMzIuNC02NS40LDU0LjlMNTAyLDI2Ny41bC0zMy43LTQxLjRjLTMzLjQtNDEuNy03OC42LTY1LjEtMTM1LjctNzAuM3MtMTA4LjgsMTEuOS0xNTUsNTEKCUMxNDYuMiwyNDIuMiwxMjguNSwyODcuNCwxMjQuNywzNDIuNnoiLz4KPHBhdGggY2xhc3M9ImZpbGwiIGQ9Ik00MS43LDMzMi45YzQuNS03My44LDI5LjktMTM1LjEsNzYtMTgzLjhoMS45bDEuOS0xLjlDMTc4LjEsOTguNCwyNDEuOSw3NCwzMTMuMSw3NAoJYzcxLjIsMCwxMzIuNSwyMi41LDE4My44LDY3LjRjMTkuNC0xNy4zLDQxLjEtMzEuOCw2NC41LTQzLjNsMS45LTEuOWgxLjlDNjAxLDgxLjUsNjM5LjMsNzQsNjc3LjksNzRjNTYuNS0xLjMsMTA4LjEsMTIuNSwxNTUsNDEuNAoJYzQ2LjksMjguOSw4Mi4yLDY4LjcsMTA1LjksMTE5LjN2MS45bDEuOSwzLjhjMTkuMiw2OCwyMi41LDEzMi44LDkuNiwxOTQuNGMtMTIuOCw2MS42LTM4LjUsMTE3LjctNzcsMTY4LjQKCWMtMzkuNyw1Ni41LTkxLjcsMTExLjctMTU1LjksMTY1LjVjMC4xLDEtMC42LDEuOC0xLjUsMS45Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMzEuNSwyOC45LTY1LjgsNTcuNy0xMDMsODYuNgoJYy0yMS44LDE2LjEtNDAuNywyOS4yLTU2LjgsMzkuNWMtMjEuMiwxNC43LTM4LjgsMjIuMS01Mi45LDIyLjFsLTUuOCwxLjlsLTQuOC0xLjljLTE4LTEuOS0zNi45LTExLjMtNTYuOC0yNy45CgljLTcuMi00LjQtMTQtOS42LTIwLjItMTUuNGMtNy02LjQtMTIuMi0xMC42LTE1LjQtMTIuNWgtMS45QzI0MCw3NDIuNywxMzQuNyw2MzMuNiw4Mi4xLDUzNnYtMS45QzUwLjcsNDczLjcsMzcuMiw0MDYuNyw0MS43LDMzMi45Cgl6Ii8+Cjwvc3ZnPgo="},53957:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjQ5LjA1IDEzMi4xMiI+Cgk8Y2lyY2xlIGN4PSIxMTUuNSIgY3k9IjEwOC42MiIgcj0iMjMiIC8+Cgk8cGF0aCBkPSJNMjkxLjUsMjgxQTIyLjUsMjIuNSwwLDEsMSwyNjksMzAzLjUsMjIuNTIsMjIuNTIsMCwwLDEsMjkxLjUsMjgxbTAtMUEyMy41LDIzLjUsMCwxLDAsMzE1LDMwMy41LDIzLjUsMjMuNSwwLDAsMCwyOTEuNSwyODBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc2IC0xOTQuODgpIj48L3BhdGg+Cgk8cGF0aCBjbGFzcz0iYXJyb3ciIGQ9Ik0zOTksMjU3LjVhMTM1LjE4LDEzNS4xOCwwLDAsMC00MS4xNi00Mi4xN2MtMjIuNy0xNC43NC00OS4zOC0yMS45Mi03NS4xNS0yMC4yYTEwOC43MSwxMDguNzEsMCwwLDAtNjUuMTYsMjdjLTE5LjkxLDE3LjUtMzMuNzYsNDEuNzktNDEuMTgsNzIuMTlhMTMuNTIsMTMuNTIsMCwwLDAsOS45MiwxNi4zMiwxMy42NiwxMy42NiwwLDAsMCwzLjIxLjM4LDEzLjUxLDEzLjUxLDAsMCwwLDEzLjExLTEwLjNjNi4wNy0yNC45MiwxNy4xLTQ0LjU0LDMyLjc2LTU4LjMxYTgyLDgyLDAsMCwxLDQ5LjEzLTIwLjMyYzIwLTEuMzMsNDAuODEsNC4zMiw1OC42NSwxNS45QTEwOC4wNywxMDguMDcsMCwwLDEsMzc0LDI2OC41MWwtMzAsMTMuMiw3Mi40Myw0MC4zNiw4LjYtNzZaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc2IC0xOTQuODgpIj48L3BhdGg+Cjwvc3ZnPgo="},84541:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var s=function(){var t=this,e=t._self._c;return e("li",{staticClass:"dropdown-list-item",class:{"has-description":t.description},attrs:{"data-test":"drop-down-wrapper"}},[e("div",{staticClass:"dropdown-list-label-wrapper",attrs:{"data-test":"drop-down-wrapper"}},[t.icon||t.$slots.icon?e("span",{staticClass:"dropdown-list-icon-wrapper"},[t._t("icon",(function(){return[t._v(t._s(t.icon))]}))],2):t._e(),t._v(" "),e("span",{staticClass:"dropdown-list-label",attrs:{"data-test":"name"}},[t._t("default"),t._t("name",(function(){return[t._v(t._s(t.name))]}))],2),t.isPlus&&!t.$plus?e("span",{staticClass:"badge badge-plus",attrs:{"data-test":"beta"}},[t._v("Plus")]):t._e()]),t._v(" "),t.description||t.$slots.description?e("div",{staticClass:"dropdown-list-description",attrs:{"data-test":"description"}},[t._t("description",(function(){return[t._v(t._s(t.description))]}))],2):t._e()])};s._withStripped=!0;const i={name:"DropdownOption",doNotWaitForMount:!0,props:{icon:{type:String,default:""},name:{type:String,default:""},isPlus:{type:Boolean,default:!1},description:{type:String,default:""}}},o=(0,a(51900).Z)(i,s,[],!1,null,null,null).exports},22511:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>o});var s=function(){var t=this,e=t._self._c;return e("div",[t._t("moreToggle"),t._v(" "),e("div",{staticClass:"toast-container"},[e("transition",{attrs:{name:"slide-up",appear:""}},[t.active?e("div",{ref:"toast",staticClass:"toast more-toast",attrs:{"data-test":"toast"}},[t.hasHeader()?e("div",{staticClass:"toast-header"},[t._t("header")],2):t._e(),t._v(" "),t.hasHeader()?e("div",{staticClass:"line header-line"}):t._e(),t._v(" "),t.sectionTitle?e("div",{staticClass:"section-title"},[t._v(t._s(t.sectionTitle))]):t._e(),t._v(" "),e("ul",{staticClass:"toast-list",class:{"toast-hide":t.$slots.upsell},attrs:{"data-test":"toast-options"}},[t._t("default")],2),t._v(" "),e("div",{staticClass:"button button-close",on:{click:t.hide}},[e("span",{staticClass:"button-label"},[t._v("Close")])])]):t._e()]),t._v(" "),e("transition",{attrs:{name:"fade",duration:"150"}},[t.active?e("div",{staticClass:"toast-overlay",on:{click:function(e){return e.stopPropagation(),t.hide.apply(null,arguments)}}}):t._e()])],1)],2)};s._withStripped=!0;const i={doNotWaitForMount:!0,name:"ToastMenu",props:{dataOb:{type:String,default:""},active:{type:Boolean,default:!0},sectionTitle:{type:String,default:""}},methods:{hide(t){this.active&&(this.$touch&&t.stopPropagation(),this.$emit("toggle",!1))},hasHeader(){return!!this.$slots.header}}};a(27073);const o=(0,a(51900).Z)(i,s,[],!1,null,"576ee086",null).exports},51900:(t,e,a)=>{"use strict";function s(t,e,a,s,i,o,n,r){var c,d="function"==typeof t?t.options:t;if(e&&(d.render=e,d.staticRenderFns=a,d._compiled=!0),s&&(d.functional=!0),o&&(d._scopeId="data-v-"+o),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=c):i&&(c=r?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(d.functional){d._injectStyles=c;var u=d.render;d.render=function(t,e){return c.call(e),u(t,e)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:d}}a.d(e,{Z:()=>s})},56997:(t,e,a)=>{var s=a(62067);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,a(45346).Z)("4a6c5c5d",s,!1,{ssrId:!0})},27073:(t,e,a)=>{var s=a(65497);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,a(45346).Z)("07a5a9c6",s,!1,{ssrId:!0})},45346:(t,e,a)=>{"use strict";function s(t,e){for(var a=[],s={},i=0;i<e.length;i++){var o=e[i],n=o[0],r={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};s[n]?s[n].parts.push(r):a.push(s[n]={id:n,parts:[r]})}return a}a.d(e,{Z:()=>h});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},n=i&&(document.head||document.getElementsByTagName("head")[0]),r=null,c=0,d=!1,u=function(){},l=null,p="data-vue-ssr-id",M="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,a,i){d=a,l=i||{};var n=s(t,e);return g(n),function(e){for(var a=[],i=0;i<n.length;i++){var r=n[i];(c=o[r.id]).refs--,a.push(c)}for(e?g(n=s(t,e)):n=[],i=0;i<a.length;i++){var c;if(0===(c=a[i]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete o[c.id]}}}}function g(t){for(var e=0;e<t.length;e++){var a=t[e],s=o[a.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](a.parts[i]);for(;i<a.parts.length;i++)s.parts.push(L(a.parts[i]));s.parts.length>a.parts.length&&(s.parts.length=a.parts.length)}else{var n=[];for(i=0;i<a.parts.length;i++)n.push(L(a.parts[i]));o[a.id]={id:a.id,refs:1,parts:n}}}}function v(){var t=document.createElement("style");return t.type="text/css",n.appendChild(t),t}function L(t){var e,a,s=document.querySelector("style["+p+'~="'+t.id+'"]');if(s){if(d)return u;s.parentNode.removeChild(s)}if(M){var i=c++;s=r||(r=v()),e=j.bind(null,s,i,!1),a=j.bind(null,s,i,!0)}else s=v(),e=y.bind(null,s),a=function(){s.parentNode.removeChild(s)};return e(t),function(s){if(s){if(s.css===t.css&&s.media===t.media&&s.sourceMap===t.sourceMap)return;e(t=s)}else a()}}var m,w=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function j(t,e,a,s){var i=a?"":s.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),n=t.childNodes;n[e]&&t.removeChild(n[e]),n.length?t.insertBefore(o,n[e]):t.appendChild(o)}}function y(t,e){var a=e.css,s=e.media,i=e.sourceMap;if(s&&t.setAttribute("media",s),l.ssrId&&t.setAttribute(p,e.id),i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}}}]);