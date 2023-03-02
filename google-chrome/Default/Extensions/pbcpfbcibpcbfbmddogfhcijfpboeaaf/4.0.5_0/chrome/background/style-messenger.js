import{STYLES_KEY_PREFIX}from"../../constants.js";import{handleRuntimeError,logger,safeGetTab,safeUrl}from"../helpers.js";import{stylesService}from"../feathers.js";import{getOptions}from"./options-messenger.js";import{setIconState,setStyleErrorIcon}from"./icon-state-handler.js";import{injectContentScripts}from"./install-handler.js";const getCachedStyles=async(t,l)=>Promise.allSettled([chrome.storage.local.get(STYLES_KEY_PREFIX+"_"+t),chrome.storage.local.get(STYLES_KEY_PREFIX+"_"+l)]).then(([e,a])=>{return{localStyle:e.value[STYLES_KEY_PREFIX+"_"+t]||null,globalStyle:a.value[STYLES_KEY_PREFIX+"_"+l]||null}}),applyStylesToTab=async a=>{var e=a["url"];if(logger.log("debug","applying styles to tab",e),safeUrl(e))try{await injectContentScripts(a.id);var[t,l]=formatUrlKeys(e),{localStyle:s,globalStyle:o}=await getCachedStyles(t,l),r=(logger.log("debug","cached styles",{localStyle:s,globalStyle:o}),{type:"apply-styles",items:[]});s?r.items.push({method:"inject",type:"local",payload:JSON.parse(s)}):r.items.push({method:"remove",type:"local"}),o?r.items.push({method:"inject",type:"global",payload:JSON.parse(o)}):r.items.push({method:"remove",type:"global"}),r.items.length&&(logger.log("debug","applying styles",r),chrome.tabs.sendMessage(a.id,r).catch(e=>logger.log("warn","sendMessage",e.message)))}catch(e){logger.log("error","applyStylesToTab","Failed to apply styles to tab:",a.url,e.message)}else logger.log("notice","applyStylesToTab","url not safe",e)},removeStyles=async()=>{var e,a=[];for(e in chrome.storage.local.get())e.match(""+STYLES_KEY_PREFIX)&&a.push(e);chrome.storage.local.remove(a),chrome.tabs.query({},function(e){for(var a of e)chrome.tabs.sendMessage(a.id,{type:"apply-styles",items:[{method:"remove",type:"local"}]}).catch(e=>logger.log("warn","sendMessage",e.message)),chrome.tabs.sendMessage(a.id,{type:"apply-styles",items:[{method:"remove",type:"global"}]}).catch(e=>logger.log("warn","sendMessage",e.message))})},applyStylesToUrl=t=>{chrome.tabs.query({},e=>{for(var a of e)formatUrlKeys(a.url).includes(t)&&applyStylesToTab(a)})},urlHasStyles=async e=>{var[e,a]=formatUrlKeys(e),{localStyle:e,globalStyle:a}=await getCachedStyles(e,a),e=e?JSON.parse(e):null,a=a?JSON.parse(a):null;return e?.active&&e?.val?.length||a?.active&&a?.val?.length},preloadStyles=async(a=1)=>{logger.log("debug","preloading styles","page "+a);return findAllStyles(100,100*(a-1)).then(async e=>{if((logger.log("debug","preloading styles found for page",a,e),0<e.total)&&(await addStylesToCache(e.data),e.skip+e.limit<e.total))return preloadStyles(++a)})},initStyleMessenger=async()=>{stylesService.on("created",async(e,a)=>{await addStylesToCache([a])}).on("patched",async(e,a)=>{await addStylesToCache([a])}).on("removed",async(e,a)=>{await removeStylesFromCache([a])})},styleStorageHandler=(t,e)=>{if("local"===e)for(var l in t)if(l.match(""+STYLES_KEY_PREFIX)){logger.log("debug","style cache updated");let e,a;try{e=JSON.parse(t[l].oldValue)}catch(e){}try{a=JSON.parse(t[l].newValue)}catch(e){}logger.log("debug","cache compare",a,e),a!=e&&(logger.log("debug","style cache update is new"),applyStylesToUrl(a?.key||e?.key),setIconState())}},stylesTabsOnUpdatedHandler=async(e,a)=>{(e.url||e.status)&&applyStylesToTab(a)},stylesTabsOnActivatedHandler=async({tabId:e})=>{e=await safeGetTab(e);applyStylesToTab(e)},stylesMessageHandler=async(e,a,t)=>{var l,s=await getOptions();return"pageLoaded"===e.type?([a,l]=formatUrlKeys(a.url),{localStyle:a,globalStyle:l}=await getCachedStyles(a,l),t({isDisabled:s?.disabled||!1,localStyle:!!a&&JSON.parse(a),globalStyle:!!l&&JSON.parse(l)}),!0):"clearCache"===e.type&&(await syncStyles(),t({success:!0}),!0)},applyAllStyles=(e={})=>{chrome.tabs.query(e,e=>{for(var a of e)applyStylesToTab(a)})},hideStyles=async()=>{var e;for(e of await chrome.tabs.query({}))chrome.tabs.sendMessage(e.id,{type:"apply-styles",items:[{method:"hideStyles"}]}).catch(e=>logger.log("warn","sendMessage",e.message))},showStyles=async()=>{var e;for(e of await chrome.tabs.query({}))chrome.tabs.sendMessage(e.id,{type:"apply-styles",items:[{method:"showStyles"}]}).catch(e=>logger.log("warn","sendMessage",e.message))};function formatUrlKeys(a){try{var e=new URL(a);return[e.href,e.hostname]}catch(e){throw new Error(`Failed to build url keys (${a}): `+e.message)}}async function addStylesToCache(e){for(var a of e)await chrome.storage.local.set({[STYLES_KEY_PREFIX+"_"+a.key]:JSON.stringify(a)})}async function removeStylesFromCache(e){e=e.map(e=>STYLES_KEY_PREFIX+"_"+e);return chrome.storage.local.remove(e)}const syncStyles=async(e=!0)=>(await removeStyles(),await preloadStyles(),e?applyAllStyles({active:!0,lastFocusedWindow:!0}):applyAllStyles());function findAllStyles(e,a){return stylesService.find({query:{active:!0,$limit:e,$skip:a,$sort:{createdAt:1}}})}export{initStyleMessenger,stylesMessageHandler,styleStorageHandler,stylesTabsOnActivatedHandler,stylesTabsOnUpdatedHandler,urlHasStyles,showStyles,hideStyles,preloadStyles,applyAllStyles,syncStyles};