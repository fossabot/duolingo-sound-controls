!function(){"use strict";const e=()=>{},t=Array.isArray,n=e=>"object"==typeof e&&!!e&&!t(e),r=e=>`__duo-toolbox__-${e}`,o="success",s=r("action_request"),a=r("action_result"),i=r("ui_event_notification"),c=r("background_event_notification"),u=async e=>new Promise(((t,n)=>{if("undefined"==typeof chrome)return browser.runtime.sendMessage(e);chrome.runtime.sendMessage(e,(e=>{chrome.runtime.lastError?n(chrome.runtime.lastError):t(e)}))})),d=["get_current_profile","update_current_profile"],m=["current_profile_changed"],l=document.createElement("script");l.src=chrome.runtime.getURL("src/observer.js"),l.type="text/javascript",(document.head||document.documentElement).appendChild(l),((r,d,m)=>{const l=t(r)?e=>r.indexOf(e)>=0:()=>!0,p=((e,r)=>{var o;const s=t(r)?e=>r.indexOf(e)>=0:()=>!0,a=t=>{const r=n(t.data)?t.data:t;return r&&c===r.type&&s(r.event)&&e(r.event,r.value)};return"undefined"!=typeof chrome&&null!==(o=chrome.runtime)&&void 0!==o&&o.onMessage?(chrome.runtime.onMessage.addListener(a),()=>chrome.runtime.onMessage.removeListener(a)):(window.addEventListener("message",a),()=>window.removeEventListener("message",a))})(((e,t)=>{window.postMessage({type:c,event:e,value:t},"*")}),m),f=t=>{if(t.source===window&&n(t.data))if(s===t.data.type){const e=t.data.action||null;l(e)&&u(t.data).then((e=>{if(!n(e)||o!==e.type)throw new Error;return e.value})).then((n=>{t.source.postMessage({type:a,action:e,result:o,value:n},"*")})).catch((n=>{t.source.postMessage({type:a,action:e,result:"failure",error:n},"*")}))}else if(i===t.data.type){const n=t.data.event||null;d.indexOf(n)>=0&&u(t.data).then(e).catch(e)}};window.addEventListener("message",f)})(d,[],m)}();
