(globalThis.webpackChunkmomentum=globalThis.webpackChunkmomentum||[]).push([[9285,5584],{61706:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});let s={};const a={bind(t,e){e.hasOwnProperty("value")&&!e.value||(t.dataset.resizeSensorId=Math.random().toString(36).substring(7),s[t.dataset.resizeSensorId]=new ResizeSensor(t,e.value))},unbind(t){s[t.dataset.resizeSensorId]&&s[t.dataset.resizeSensorId].detach(),delete s[t.dataset.resizeSensorId]}}},8552:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});const s={inserted:function(t,e){var i;if(!1===(null==e?void 0:e.value))return;const s=null==t||null===(i=t.value)||void 0===i?void 0:i.length;t.select(),(s||0===s)&&(t.setSelectionRange(s,s),t.scrollLeft=t.scrollWidth)}}},42223:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});const s={data:()=>({componentsMounted:{}}),unreactive:()=>({uid:m.utils.shortId()}),beforeCreate(){const t=this.$options.components;Object.keys(t).forEach((e=>{const i=t[e];"function"==typeof i&&(t[e]=function(){this.$set(this.componentsMounted,e,!1);const t=`${e}:${this.uid}:mounted`,s=()=>this.componentsMounted[e]=!0;return this.$e.$once(t,s),i(arguments).then((i=>{const a=i.default;return a&&a.doNotWaitForMount&&(this.$delete(this.componentsMounted,e),this.$e.$off(t,s)),i}))}.bind(this))}))},mounted(){if(Object.keys(this.componentsMounted).length){const t=this.$watch("componentsMounted",(e=>{Object.values(e).every((t=>t))&&(this.onAllComponentsMounted(),t())}),{deep:!0,immediate:!0})}else this.onAllComponentsMounted()},methods:{getContextUid(){return this.$vnode&&this.$vnode.context&&this.$vnode.context.uid||""},onAllComponentsMounted(){this.widgetId?m.widgetManager.appReady(this.widgetId):this.$e.$emit(`${this.$options.name}:${this.getContextUid()}:mounted`)}}}},80706:(t,e,i)=>{(t.exports=i(23645)(!1)).push([t.id,"\n/* stylelint-disable */\n.label-wrapper[data-v-803f4028] { display: flex; gap: 10px; align-items: center;\n}\n.loading-icon[data-v-803f4028] { height: 10px; width: 10px;\n}\n",""])},17445:(t,e,i)=>{(t.exports=i(23645)(!1)).push([t.id,"\n/* stylelint-disable */\n.resize-wrapper.tr-height[data-v-2dd72ad0] { transition: height var(--duration) ease;\n}\n.resize-wrapper.tr-width[data-v-2dd72ad0] { display: flex; justify-content: center; transition: width var(--duration) ease;\n}\n.resize-wrapper.tr-height.tr-width[data-v-2dd72ad0] { transition: height var(--duration) ease, width var(--duration) ease;\n}\n.resize-wrapper.hide-overflow[data-v-2dd72ad0] { overflow: hidden;\n}\n.resize-wrapper.tr-width > div[data-v-2dd72ad0] { width: fit-content;\n}\n[data-v-2dd72ad0] .smooth-height-fade-enter-active { transition: opacity var(--transition-duration) cubic-bezier(.85,-0.18,.66,.66);\n}\n[data-v-2dd72ad0] .smooth-height-fade-leave-active { position: absolute !important; top: 0; right: 0; left: 0; transition: opacity var(--transition-duration) cubic-bezier(.33,.13,.33,1.26);\n}\n[data-v-2dd72ad0] .smooth-height-fade-enter,[data-v-2dd72ad0] .smooth-height-fade-leave-to { opacity: 0;\n}\n[data-v-2dd72ad0] .smooth-width-fade-enter-active { transition: opacity var(--transition-duration) cubic-bezier(.85,-0.18,.66,.66);\n}\n[data-v-2dd72ad0] .smooth-width-fade-leave-active { position: absolute; top: 0; left: 50%; transform: translateX(-50%); transition: opacity var(--transition-duration) cubic-bezier(.33,.13,.33,1.26);\n}\n[data-v-2dd72ad0] .smooth-width-fade-enter,[data-v-2dd72ad0] .smooth-width-fade-leave-to { opacity: 0;\n}\n[data-v-2dd72ad0] .smooth-height-slide-left-enter-active,[data-v-2dd72ad0] .smooth-height-slide-left-leave-active,[data-v-2dd72ad0] .smooth-height-slide-right-enter-active,[data-v-2dd72ad0] .smooth-height-slide-right-leave-active { transition: transform 300ms ease;\n}\n[data-v-2dd72ad0] .smooth-height-slide-left-leave-active,[data-v-2dd72ad0] .smooth-height-slide-right-leave-active { position: absolute; top: 0; right: 0; left: 0;\n}\n[data-v-2dd72ad0] .smooth-height-slide-left-leave-to,[data-v-2dd72ad0] .smooth-height-slide-right-enter { transform: translateX(-100%);\n}\n[data-v-2dd72ad0] .smooth-height-slide-left-enter,[data-v-2dd72ad0] .smooth-height-slide-right-leave-to { transform: translateX(100%);\n}\n",""])},96939:(t,e,i)=>{(t.exports=i(23645)(!1)).push([t.id,"\n/* stylelint-disable */\n.typeahead[data-v-4cbf0649] { width: 100%; background-color: transparent;\n}\n.input-wrapper[data-v-4cbf0649] { display: flex;\n}\n.input-wrapper input[data-v-4cbf0649] { flex-grow: 1;\n}\n.typeahead .dropdown-list[data-v-4cbf0649] { padding: 0; display: block; background: var(--color-accent-highlight); border-radius: 0 0 var(--border-radius) var(--border-radius); box-shadow: none;\n}\n.typeahead ul[data-v-4cbf0649] { padding: 6px 0;\n}\n.typeahead li[data-v-4cbf0649] { max-width: none; padding: 4px 9px; opacity: 0.8; font-size: 0.875rem;\n}\n.typeahead .result[data-v-4cbf0649] { cursor: pointer;\n}\n.typeahead .result[data-v-4cbf0649]:hover { background: var(--hover-bg);\n}\n.typeahead .no-results[data-v-4cbf0649], .typeahead .searching[data-v-4cbf0649] { opacity: 0.6;\n}\n",""])},49285:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"label-wrapper"},[e("label",[t._v("Location")]),t._v(" "),t.loadingTimezone?e("div",{staticClass:"loading-icon",attrs:{"data-test":"loading-timezone"}}):t._e()]),t._v(" "),e("location-typeahead",{class:{pulse:t.warning},attrs:{"before-fetch-results":t.interceptUtcSearch,value:t.transformedValue,type:"timezone"},on:{input:t.getTimezone}})],1)};s._withStripped=!0;var a=i(25584);const n=i(92729).$x.map((({name:t,id:e})=>{const i=t.includes("-"),s=t.substring(3),a=s.replace(":",""),[n,o]=s.substring(1).split(":");return{name:t,shortName:t,offset:(60*n+o)*(i?-1:1),searchable:a,timeZoneId:e}})),o={name:"TimezoneTypeahead",components:{LocationTypeahead:a.default},props:{value:{type:Object,required:!0},componentFieldWarnings:{type:Array,default:()=>[]}},data:()=>({warning:!1,loadingTimezone:!1}),computed:{transformedValue(){return{name:this.value.timeZoneName,...this.value}}},watch:{componentFieldWarnings(t){t.includes("timeZoneId")&&(this.warning=!0),setTimeout((()=>this.warning=!1),1e3)}},methods:{async getTimezone({shortName:t,name:e,latitude:i,longitude:s,offset:a=0,timeZoneId:n=""}={}){if(this.$emit("input",{shortName:t,timeZoneName:e,offset:a,timeZoneId:n}),void 0===arguments[0].timeZoneId){this.loadingTimezone=!0;try{const{data:{name:a,offset:n}}=await this.$xhr.get(`/timezones:search?latitude=${i}&longitude=${s}`);this.$emit("input",{shortName:t,name,offset:n,timeZoneId:a,timeZoneName:e})}catch(t){console.error(t)}finally{this.loadingTimezone=!1}}},interceptUtcSearch(t){const e=t.toLowerCase().trim();if(e.includes("utc")||e.includes("gmt")){var i;const t=(null===(i=e.replace(":","").match(/(\d|-|\+)+/))||void 0===i?void 0:i[0])||"",s=m.utils.fuzzyFilter(t,n,"searchable");if(s.length)return s}}}};i(87373);const r=(0,i(51900).Z)(o,s,[],!1,null,"803f4028",null).exports},25584:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var s=function(){var t=this;return(0,t._self._c)("typeahead",{attrs:{value:t.inputValue,results:t.results,loading:t.loading,"no-results":t.noResults,type:t.type,placeholder:"Type a location"},on:{input:t.fetchResults,select:t.onSelect}},[t._t("default")],2)};s._withStripped=!0;var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"typeahead",class:{searching:t.resultsVisible}},[e("div",{staticClass:"input-wrapper"},[e("input",{directives:[{name:"soft-focus",rawName:"v-soft-focus"}],staticClass:"input",attrs:{type:"text",placeholder:t.placeholder,spellcheck:"false",autocomplete:"off","data-test":t.type+"-input"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)},focus:function(t){return t.target.select()}}}),t._v(" "),t._t("default")],2),t._v(" "),t.resultsVisible?e("smooth-reflow",{staticClass:"dropdown-list",attrs:{nested:!0,"hide-overflow":!0}},[e("ul",{attrs:{"data-test":"typeahead-dropdown"}},[e("li",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"searching"},[t._v("Searching...")]),t._v(" "),t._l(t.results,(function(i,s){return e("li",{key:s,staticClass:"result",attrs:{"data-test":t.type+"-result"},on:{click:function(e){return t.$emit("select",i)}}},[e("span",{staticClass:"name"},[t._v(t._s(i.name))])])})),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.noResults,expression:"noResults"}],staticClass:"no-results",attrs:{"data-test":"not-found"}},[t._v("No "+t._s(t.type)+"s found.")])],2)]):t._e()],1)};a._withStripped=!0;var n=i(8552);const o={name:"Typeahead",components:{SmoothReflow:i(97755).default},directives:{softFocus:n.Z},props:{value:{type:String,default:""},type:{type:String,default:""},results:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},placeholder:{type:String,required:!0},noResults:{type:Boolean,default:!1}},computed:{resultsVisible(){return this.results.length||this.loading||this.noResults}}};i(70547);var r=i(51900);const d=(0,r.Z)(o,a,[],!1,null,"4cbf0649",null).exports;var l=i(9669),h=i.n(l);const u={name:"LocationTypeahead",components:{Typeahead:d},props:{value:{type:Object,default:()=>({})},type:{type:String,default:"location"},beforeFetchResults:{type:Function,default:null}},data:()=>({results:[],inputValue:"",loading:!1,noResults:!1}),created(){this.value.name&&(this.inputValue=this.value.name)},methods:{async fetchResults(t){if(this.inputValue=t,t.length>2){var e;this.noResults=!1;const i=null===(e=this.beforeFetchResults)||void 0===e?void 0:e.call(this,t);if(i)this.results=i;else{this.loading=!0,this.cancelTokenSource&&this.cancelTokenSource.cancel(),this.cancelTokenSource=h().CancelToken.source();try{const{data:e}=await this.$xhr.get("/locations:search?input="+t,{cancelToken:this.cancelTokenSource.token});this.loading=!1,this.results=e,this.results.length||(this.noResults=!0)}catch(t){if(h().isCancel(t))return;console.error(t),this.loading=!1}}}else this.cancelTokenSource&&this.cancelTokenSource.cancel(),this.results=[],this.noResults=!1,this.loading=!1},onSelect(t){this.results=[],this.noResults=!1,this.$emit("input",t),this.inputValue=t.name}}},c=(0,r.Z)(u,s,[],!1,null,null,null).exports},97755:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>r});var s=function(){var t=this,e=t._self._c;return e("div",{ref:"wrapper",staticClass:"resize-wrapper",class:{"tr-height":t.height,"tr-width":t.width,"hide-overflow":t.hideOverflow&&(t.resizing||t.transitionActive)},style:{"--duration":t.resizeDuration+"ms","--transition-duration":(null===t.transitionDuration?t.duration:t.transitionDuration)+"ms",height:t.wrapperHeight,width:t.wrapperWidth},attrs:{"data-smooth-reflow-id":t.id,"data-test":"smooth-reflow","data-test-transitioning":t.resizing||t.transitionActive}},[t.transitionGroup?e("transition-group",t._g(t._b({directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.handleResize,expression:"handleResize"}],attrs:{tag:"div"}},"transition-group",t.transitionProps,!1),t.transitionHooks),[t._t("default")],2):e("div",{directives:[{name:"resize-sensor",rawName:"v-resize-sensor",value:t.handleResize,expression:"handleResize"}]},[e("transition",t._g(t._b({},"transition",t.transitionProps,!1),t.transitionHooks),[t._t("default")],2)],1)],1)};s._withStripped=!0;var a=i(61706),n=i(42223);const o={name:"SmoothReflow",directives:{ResizeSensor:a.Z},mixins:[n.Z],props:{height:{type:Boolean,default:!0},width:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},duration:{type:Number,default:500},transitionDuration:{type:Number,default:null},nested:{type:Boolean,default:!1},hideOverflow:{type:Boolean,default:!1},transition:{type:String,default:"smooth-height-fade"},transitionGroup:{type:Boolean,default:!1}},data:()=>({id:Math.random().toString(36).substring(7),wrapperHeightPx:null,wrapperWidthPx:null,auto:!0,resizing:!1,transitionActive:!1,ancestors:[]}),computed:{transitionProps(){return{name:this.transition,duration:null===this.transitionDuration?this.duration:this.transitionDuration}},wrapperHeight(){return!this.height||this.disabled||this.auto?"auto":this.wrapperHeightPx+"px"},wrapperWidth(){return this.width?this.disabled||this.auto?"auto":this.wrapperWidthPx+"px":""},resizeDuration(){return null===this.transitionDuration?this.duration:this.transitionActive?this.transitionDuration:this.duration}},created(){this.transitionHooks={beforeEnter:this.beforeEnter,enter:this.enter,afterEnter:this.afterEnter,enterCancelled:this.enterCancelled,beforeLeave:this.beforeLeave,leave:this.leave,afterLeave:this.afterLeave,leaveCancelled:this.leaveCancelled},this.$e.$on("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$on("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},mounted(){this.nested?(this.$nextTick(this.findSmoothReflowAncestors),setTimeout((()=>{this.auto=!1,this.setExplicitDimensions()}),500)):(this.auto=!1,this.setExplicitDimensions())},destroyed(){this.$e.$off("pauseSmoothReflow:"+this.id,this.pauseSmoothReflow),this.$e.$off("resumeSmoothReflow:"+this.id,this.resumeSmoothReflow)},methods:{async handleResize(t){this.auto||this.height&&!this.width&&this.wrapperHeightPx===t.height||!this.height&&this.width&&this.wrapperWidthPx===t.width||this.height&&this.width&&this.wrapperHeightPx===t.height&&this.wrapperWidthPx===t.width||(this.resizing=!0,clearTimeout(this.timeout),this.nested&&this.ancestors.length&&(this.ancestors.forEach((t=>this.$e.$emit("pauseSmoothReflow:"+t))),await this.$nextTick()),this.height&&(this.wrapperHeightPx=t.height),this.width&&(this.wrapperWidthPx=t.width),this.timeout=setTimeout((()=>{this.nested&&this.ancestors.length&&this.ancestors.forEach((t=>this.$e.$emit("resumeSmoothReflow:"+t))),this.resizing=!1,this.$emit("afterResize")}),this.duration))},findSmoothReflowAncestors(){let t,e=!0;for(;e;)t=(t&&t.parentElement||this.$el.parentElement).closest("[data-smooth-reflow-id]"),t?this.ancestors.push(t.getAttribute("data-smooth-reflow-id")):e=!1},pauseSmoothReflow(){this.auto=!0},resumeSmoothReflow(){this.auto=!1,this.setExplicitDimensions()},setExplicitDimensions(){this.$refs.wrapper&&(this.height&&(this.wrapperHeightPx=this.$refs.wrapper.clientHeight),this.width&&(this.wrapperWidthPx=this.$refs.wrapper.clientWidth))},beforeEnter(t){this.transitionActive=!0,this.$emit("beforeEnter",t)},enter(t){this.$emit("enter",t)},afterEnter(t){this.transitionActive=!1,this.$emit("afterEnter",t)},enterCancelled(t){this.$emit("afterEnter",t)},beforeLeave(t){this.transitionActive=!0,this.$emit("beforeLeave",t)},leave(t){this.$emit("leave",t)},afterLeave(t){this.transitionActive=!1,this.$emit("afterLeave",t)},leaveCancelled(t){this.$emit("leaveCancelled",t)}}};i(93479);const r=(0,i(51900).Z)(o,s,[],!1,null,"2dd72ad0",null).exports},87373:(t,e,i)=>{var s=i(80706);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,i(45346).Z)("f35a954c",s,!1,{ssrId:!0})},93479:(t,e,i)=>{var s=i(17445);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,i(45346).Z)("7cd11664",s,!1,{ssrId:!0})},70547:(t,e,i)=>{var s=i(96939);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals),(0,i(45346).Z)("c8991d78",s,!1,{ssrId:!0})}}]);