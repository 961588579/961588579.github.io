import{R as e}from"./index-K_8xjhhP.js";const t=e=>{let t;const n=new Set,r=(e,r)=>{const s="function"==typeof e?e(t):e;if(!Object.is(s,t)){const e=t;t=(null!=r?r:"object"!=typeof s||null===s)?s:Object.assign({},t,s),n.forEach((n=>n(t,e)))}},s=()=>t,o={setState:r,getState:s,getInitialState:()=>a,subscribe:e=>(n.add(e),()=>n.delete(e))},a=t=e(r,s,o);return o},n=e=>e;const r=r=>{const s=(e=>e?t(e):t)(r),o=t=>function(t,r=n){const s=e.useSyncExternalStore(t.subscribe,(()=>r(t.getState())),(()=>r(t.getInitialState())));return e.useDebugValue(s),s}(s,t);return Object.assign(o,s),o},s=e=>e?r(e):r,o=s((e=>({userInfo:null,setUserInfo:t=>e((()=>({userInfo:t})))})));function a(e,t){let n;try{n=e()}catch(r){return}return{getItem:e=>{var t;const r=e=>null===e?null:JSON.parse(e,void 0),s=null!=(t=n.getItem(e))?t:null;return s instanceof Promise?s.then(r):r(s)},setItem:(e,t)=>n.setItem(e,JSON.stringify(t,void 0)),removeItem:e=>n.removeItem(e)}}const i=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then:e=>i(e)(n),catch(e){return this}}}catch(n){return{then(e){return this},catch:e=>i(e)(n)}}},l=(e,t)=>(n,r,s)=>{let o={storage:a((()=>localStorage)),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1;const u=new Set,c=new Set;let m=o.storage;if(!m)return e(((...e)=>{n(...e)}),r,s);const g=()=>{const e=o.partialize({...r()});return m.setItem(o.name,{state:e,version:o.version})},h=s.setState;s.setState=(e,t)=>{h(e,t),g()};const d=e(((...e)=>{n(...e),g()}),r,s);let f;s.getInitialState=()=>d;const v=()=>{var e,t;if(!m)return;l=!1,u.forEach((e=>{var t;return e(null!=(t=r())?t:d)}));const s=(null==(t=o.onRehydrateStorage)?void 0:t.call(o,null!=(e=r())?e:d))||void 0;return i(m.getItem.bind(m))(o.name).then((e=>{if(e){if("number"!=typeof e.version||e.version===o.version)return[!1,e.state];if(o.migrate)return[!0,o.migrate(e.state,e.version)]}return[!1,void 0]})).then((e=>{var t;const[s,a]=e;if(f=o.merge(a,null!=(t=r())?t:d),n(f,!0),s)return g()})).then((()=>{null==s||s(f,void 0),f=r(),l=!0,c.forEach((e=>e(f)))})).catch((e=>{null==s||s(void 0,e)}))};return s.persist={setOptions:e=>{o={...o,...e},e.storage&&(m=e.storage)},clearStorage:()=>{null==m||m.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>v(),hasHydrated:()=>l,onHydrate:e=>(u.add(e),()=>{u.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},o.skipHydration||v(),f||d},u=s()(l((e=>({theme:"light",toggleTheme:()=>e((e=>({theme:"light"===e.theme?"dark":"light"})))})),{name:"theme"}));export{o as a,u};