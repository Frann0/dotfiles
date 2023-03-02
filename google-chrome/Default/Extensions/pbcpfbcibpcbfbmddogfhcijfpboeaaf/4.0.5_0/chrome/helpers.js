const asyncMessageListener=t=>(handleRuntimeError(),(...e)=>(t(...e),!0)),handleRuntimeError=()=>{var e=chrome.runtime.lastError;if(e)throw new Error(e)};let lastScript={};const executeScriptOnce=async(r,o)=>(await Promise.resolve().then(()=>lastScript[r]),lastScript[r]=Promise.resolve().then(async()=>{var e=o["target"],[{result:t}]=await chrome.scripting.executeScript({target:e,func:e=>window[e],args:[r]});return handleRuntimeError(),t||(await chrome.scripting.executeScript(o),handleRuntimeError(),await chrome.scripting.executeScript({target:e,func:e=>{window[e]=!0},args:[r]}),handleRuntimeError()),!0}),lastScript[r]),safeGetTab=async e=>{try{logger.log("debug","safeGetTab","getting tab",e);var t=await chrome.tabs.get(parseInt(e));return handleRuntimeError(),logger.log("debug","safeGetTab","got tab",t),t}catch(e){logger.log("warn","safeGetTab",e.message)}return{}},safeUrl=e=>e?.length&&!e.match("chrome://")&&!e.match("analytics.google.com")&&!e.match("chrome.google.com")&&!e.match("chrome-extension://");class Logger{constructor(e={mode:"error"}){console.log(`%c





                 .-------------------
               .-++++++++++++++++++++.
             .-++++++++++++++++++++++.
            .------------------++++++.
                               ++++++.
                               ++++++.
                   ::::::      ++++++.
                  .++++++      ++++++.
                  .++++++      ++++++.
                  .+++++-      +++++=
                  .+++-.       +++=.
                  .+-.         +=.
                   .           .





                                                  `,"color: #7F79D3;"),this.modes={emerg:0,alert:1,crit:2,error:3,warn:4,notice:5,info:6,debug:7},this.colors=["#C200A8","#A600FF","#FF0000","#EB6A00","#E7EB00","#28DD03","#0077B3","#6D8297"],this.setMode(e.mode)}setMode(e){Object.keys(this.modes).includes(e)&&(this.mode=this.modes[e])}log(t="info",...r){if(this.modes[t]<=this.mode){var[,o,s,,]=(new Error).stack.split("\n").pop().split("at ")[1].split(":"),o=o.split("/").pop();let e="log";7===this.modes[t]?e="debug":6===this.modes[t]?e="info":this.modes[t]<=5&&4<=this.modes[t]?e="warn":this.modes[t]<4&&(e="error"),console[e]("%c"+t,`color: ${this.colors[this.modes[t]]}; font-weight: bold;`,o+":"+s,...r)}}}const logger=new Logger;export{asyncMessageListener,executeScriptOnce,handleRuntimeError,safeGetTab,safeUrl,logger};