import{r as s,P as e,j as t}from"./index-K_8xjhhP.js";import{a as l,c as a}from"./index-DZ2c6SvW.js";import{a as i}from"./theme-B79pi0wz.js";import{P as c}from"./index-BB06Y6d2.js";import{b as r,a as n}from"./url-C_mbKHcu.js";const o="profile__ZC4Y2",d="profile-info__vdqlM",f="profile-info-avatar__214cc",m="profile-content-tabs__PzsDS",u="profile-content-tab-item__VbNRi",x="active__TFvfY",v="activeBg__Nvr-Z",j="profile-content-tab-active-bg__6S25D",h="profile-content__WOAFe",p="profile-content-list__CL4Gs",_=()=>{const{userInfo:_}=i(),N=s.useRef(null),b=s.useRef(0),[y,L]=s.useState(e.Post),P=s=>{N.current&&(N.current.style.transform=`translateX(${s}px)`)},k=s.useCallback(((s,e)=>{const t=s.target;if(L(e),N.current){const s=document.querySelector(`.${x}`);s&&(P(s.offsetLeft),N.current.style.display="block",P(t.offsetLeft))}document.querySelectorAll(`.${u}`).forEach((s=>{s.classList.remove(v)})),clearTimeout(b.current),b.current=setTimeout((()=>{N.current&&(N.current.style.display="none"),t.classList.add(v)}),300)}),[]);s.useEffect((()=>{const s=document.querySelector(`.${x}`);s&&(s.classList.add(v),P(s.offsetLeft))}),[]);const C=s.useCallback((async()=>(await r.post(n.getPostList)).data.data),[]);return t.jsxs("div",{className:o,children:[t.jsxs("div",{className:d,children:[t.jsx("div",{className:`${f}`,children:t.jsx(l,{size:"100%",src:null==_?void 0:_.avatar})}),t.jsxs("div",{className:"flex flex-col py-4",children:[t.jsx("div",{className:"text-xl font-bold",children:null==_?void 0:_.name}),t.jsxs("div",{className:"mt-4",children:[t.jsxs("span",{children:[t.jsx("span",{children:null==_?void 0:_.fanCount}),t.jsx("span",{className:"ml-2",children:"粉丝"})]}),t.jsxs("span",{className:"ml-4",children:[t.jsx("span",{children:null==_?void 0:_.followCount}),t.jsx("span",{className:"ml-2",children:"关注"})]})]})]})]}),t.jsxs("div",{className:m,children:[t.jsx("div",{ref:N,className:j}),t.jsx("div",{className:a({[u]:!0,[x]:y===e.Post}),onClick:s=>k(s,e.Post),children:"笔记"}),t.jsx("div",{className:a({[u]:!0,[x]:y===e.Like}),onClick:s=>k(s,e.Like),children:"喜欢"})]}),t.jsxs("div",{className:h,children:[t.jsx("div",{className:p,style:{visibility:y===e.Post?"visible":"hidden"},children:t.jsx(c,{fetchPostList:C,refreshButton:!1})}),t.jsx("div",{className:p,style:{visibility:y===e.Like?"visible":"hidden"},children:t.jsx(c,{fetchPostList:C,refreshButton:!1})})]})]})};export{_ as default};
