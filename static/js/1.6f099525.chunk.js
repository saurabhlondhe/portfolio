(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[1],{114:function(e,t,c){"use strict";var n=c(0),a=c(5),s=c.n(a),i=(c(123),c(1));const r=Object(n.forwardRef)((({as:e="div",children:t,className:c,...n},a)=>Object(i.jsx)(e,{className:s()("section",c),ref:a,...n,children:t})));t.a=r},115:function(e,t,c){"use strict";var n=c(0),a=c(5),s=c.n(a),i=c(33),r=c.p+"static/media/gotham-bold.73ce573b.woff2",o=(c(117),c(1));t.a=({children:e,level:t=1,as:c,align:a="auto",weight:l="medium",className:d,...j})=>{const u=Math.min(Math.max(t,0),4),h=c||`h${Math.max(u,1)}`;return Object(o.jsxs)(n.Fragment,{children:["bold"===l&&Object(o.jsxs)(i.a,{children:[Object(o.jsx)("link",{rel:"preload",href:r,as:"font",crossorigin:""}),Object(o.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${r}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(o.jsx)(h,{className:s()(d,"heading",`heading--align-${a}`,`heading--level-${u}`,`heading--weight-${l}`),...j,children:e})]})}},116:function(e,t,c){"use strict";var n=c(5),a=c.n(n),s=(c(118),c(1));t.a=({children:e,size:t="m",as:c="p",align:n="auto",weight:i="auto",secondary:r,className:o,...l})=>Object(s.jsx)(c,{className:a()(o,"text",`text--align-${n}`,`text--size-${t}`,`text--weight-${i}`,{"text--secondary":r}),...l,children:e})},117:function(e,t,c){},118:function(e,t,c){},121:function(e,t,c){"use strict";var n=c(18),a=c(5),s=c.n(a),i=c(22),r=(c(131),c(1));const o=["txt","png","jpg"];t.a=({rel:e,target:t,children:c,secondary:a,className:l,href:d,as:j,...u})=>{const h=o.includes(null===d||void 0===d?void 0:d.split(".").pop()),m=(null===d||void 0===d?void 0:d.includes("://"))||"#"===(null===d||void 0===d?void 0:d[0])||h,b=e||m?"noreferrer noopener":void 0,p=t||m?"_blank":void 0,_=j||m?"a":n.b;return Object(r.jsx)(_,{className:s()("link",l,{"link--secondary":a}),rel:b,href:m?d:void 0,to:m?void 0:d,target:p,onMouseUp:i.a,...u,children:c})}},123:function(e,t,c){},124:function(e,t,c){"use strict";var n=c(121),a=(c(132),c(1));t.a=()=>Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsx)("span",{className:"footer__date",children:`\xa9 2019-${(new Date).getFullYear()} `}),Object(a.jsx)(n.a,{secondary:!0,className:"footer__link",href:"/humans.txt",target:"_self",children:"Saurabh Londhe"})]})},128:function(e,t,c){"use strict";async function n({src:e,srcSet:t,sizes:c}){return new Promise(((n,a)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");const a=new Image;e&&(a.src=e),t&&(a.srcset=t),c&&(a.sizes=c);const s=()=>{a.removeEventListener("load",s);const e=a.currentSrc;n(e)};a.addEventListener("load",s)}catch(s){a(`Error loading ${t}: ${s}`)}}))}async function a(e){const t=e.split(", ").map((e=>{const[t,c]=e.split(" ");return{src:t,image:function(e=1,t=1){const c=document.createElement("canvas"),n=c.getContext("2d");c.width=e,c.height=t,n.fillStyle="rgba(0, 0, 0, 0)",n.fillRect(0,0,e,t);const a=c.toDataURL("image/png","");return c.remove(),a}(Number(c.replace("w",""))),width:c}})),c=t.map((({image:e,width:t})=>`${e} ${t}`)).join(", "),a=await n({srcSet:c});return t.find((e=>e.image===a)).src}c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return a}))},131:function(e,t,c){},132:function(e,t,c){},135:function(e,t,c){"use strict";var n=c(0),a=c(5),s=c.n(a),i=c(15),r=c(36),o=c(19),l=c(112),d=c(32),j=c(44),u=c(11),h=c(3),m=c(128),b=c(37),p=c(35),_=(c(140),c(1));const f=({onLoad:e,loaded:t,inViewport:c,srcSet:a,placeholder:b,delay:f,src:v,alt:g,play:O=!0,reveal:x,...w})=>{const y=Object(i.h)(),[N,k]=Object(n.useState)(!0),[S,$]=Object(n.useState)(!y),[E,L]=Object(n.useState)(!1),[M,R]=Object(n.useState)(!1),[z,F]=Object(n.useState)(!1),[D,P]=Object(n.useState)(),[C,I]=Object(n.useState)(),V=Object(n.useRef)(),B=Object(n.useRef)(),H=null===v||void 0===v?void 0:v.endsWith(".mp4"),J=v||(null===a||void 0===a?void 0:a.split(" ")[0]),U=!j.a&&c;Object(n.useEffect)((()=>{const e=()=>{k(!1)},t=V.current;return null===t||void 0===t||t.addEventListener("transitionend",e),()=>{null===t||void 0===t||t.removeEventListener("transitionend",e)}}),[]),Object(n.useEffect)((()=>{H&&a?(async()=>{const e=await Object(m.b)(a);I(e)})():H&&I(v)}),[H,v,a]),Object(n.useEffect)((()=>{if(null===V||void 0===V?void 0:V.current){const{width:e,height:t}=V.current;P({width:e,height:t})}}),[]),Object(n.useEffect)((()=>{B.current&&C&&(O&&c?!c||y||j.a||($(!0),B.current.play()):($(!1),B.current.pause()))}),[c,O,y,C]);const W=e=>{e.preventDefault(),B.current.paused?($(!0),B.current.play()):($(!1),B.current.pause())},G=()=>{L(!0),R(!0)},Y=()=>{L(!0),F(!0)};return Object(_.jsxs)("div",{className:s()("image__element-wrapper",{"image__element-wrapper--reveal":x,"image__element-wrapper--in-viewport":c}),onMouseOver:H?G:void 0,onFocus:H?G:void 0,onMouseOut:H?()=>R(!1):void 0,onBlur:H?()=>R(!1):void 0,style:{"--delay":Object(h.c)(f+1e3)},role:"presentation",children:[H&&Object(_.jsxs)(n.Fragment,{children:[Object(_.jsx)("video",{muted:!0,loop:!0,playsInline:!0,className:s()("image__element",{"image__element--loaded":t}),autoPlay:!y,onLoadStart:e,"aria-label":g,ref:B,...w,children:Object(_.jsx)("source",{src:v,type:"video/mp4"})}),Object(_.jsx)(l.a,{in:M||z,onExit:d.b,onExited:()=>L(!1),timeout:{enter:0,exit:Object(h.b)(u.b.base.durationS)},children:e=>Object(_.jsx)(p.a,{visible:E,children:Object(_.jsxs)(r.a,{className:s()("image__button",`image__button--${e}`),onFocus:Y,onBlur:()=>F(!1),onClick:W,children:[Object(_.jsx)(o.a,{icon:S?"pause":"play"}),S?"Pause":"Play"]})})})]}),!H&&Object(_.jsx)("img",{className:s()("image__element",{"image__element--loaded":t}),onLoad:e,decoding:"async",src:U?J:void 0,srcSet:U?a:void 0,width:null===D||void 0===D?void 0:D.width,height:null===D||void 0===D?void 0:D.height,alt:g,...w}),N&&Object(_.jsx)("img",{"aria-hidden":!0,className:s()("image__placeholder",{"image__placeholder--loaded":t}),style:{"--delay":Object(h.c)(f)},ref:V,src:b,onLoad:e=>{const{width:t,height:c}=e.target;P({width:t,height:c})},width:null===D||void 0===D?void 0:D.width,height:null===D||void 0===D?void 0:D.height,decoding:"async",alt:"",role:"presentation"})]})};t.a=({className:e,style:t,reveal:c,delay:a=0,raised:r,src:o,...l})=>{var d,j;(null===(d=o)||void 0===d?void 0:d.default)&&(o=o.default);const[u,m]=Object(n.useState)(!1),{themeId:p}=Object(b.c)(),v=Object(n.useRef)(),g=Object(i.d)(v,c||!(null===(j=o)||void 0===j?void 0:j.endsWith(".mp4"))),O=Object(n.useCallback)((()=>{m(!0)}),[]);return Object(_.jsx)("div",{className:s()("image",e,`image--${p}`,{"image--in-viewport":g,"image--reveal":c,"image--raised":r}),style:{...t,"--delay":Object(h.c)(a)},ref:v,children:Object(_.jsx)(f,{delay:a,onLoad:O,loaded:u,inViewport:g,reveal:c,src:o,...l})})}},140:function(e,t,c){},148:function(e,t,c){"use strict";c.d(t,"c",(function(){return b})),c.d(t,"b",(function(){return p})),c.d(t,"e",(function(){return _})),c.d(t,"a",(function(){return f})),c.d(t,"d",(function(){return v})),c.d(t,"f",(function(){return g})),c.d(t,"g",(function(){return O})),c.d(t,"h",(function(){return x})),c.d(t,"i",(function(){return w}));var n=c(0),a=c(5),s=c.n(a),i=c(135),r=c(36),o=c(15),l=c(44),d=c(114),j=c(3),u=c(115),h=c(116),m=(c(166),c(1));function b({title:e,description:t,linkLabel:c="Visit website",url:n,roles:a,className:i}){return Object(m.jsx)(d.a,{className:s()("project__header",i),children:Object(m.jsxs)("div",{className:"project__header-content",style:{"--initDelay":Object(j.c)(300)},children:[Object(m.jsxs)("div",{className:"project__details",children:[Object(m.jsx)(u.a,{className:s()("project__title",{"project__title--entered":!l.a}),level:2,as:"h1",children:e}),Object(m.jsx)(h.a,{className:s()("project__description",{"project__description--entered":!l.a}),size:"xl",children:t}),!!n&&Object(m.jsx)(r.a,{secondary:!0,iconHoverShift:!0,className:s()("project__link-button",{"project__link-button--entered":!l.a}),icon:"chevronRight",href:n,children:c})]}),!!(null===a||void 0===a?void 0:a.length)&&Object(m.jsx)("ul",{className:"project__meta",children:null===a||void 0===a?void 0:a.map(((e,t)=>Object(m.jsx)("li",{className:s()("project__meta-item",{"project__meta-item--entered":!l.a}),style:{"--delay":Object(j.c)(600+140*t)},children:Object(m.jsx)(h.a,{secondary:!0,as:"span",children:e})},e)))})]})})}const p=({className:e,...t})=>Object(m.jsx)("article",{className:s()("project",e),...t}),_=Object(n.forwardRef)((({className:e,light:t,first:c,fullHeight:n,backgroundOverlayOpacity:a=.9,backgroundElement:i,children:r,...o},l)=>Object(m.jsxs)("section",{className:s()("project__section",e,{"project__section--light":t,"project__section--full-height":n}),ref:l,...o,children:[!!i&&Object(m.jsx)("div",{className:"project__section-background",style:{"--opacity":a},children:i}),Object(m.jsx)(d.a,{className:s()("project__section-inner",{"project__section-inner--first":c}),children:r})]}))),f=({opacity:e=.7,className:t,entered:c,...n})=>{const a=Object(o.g)(.6);return Object(m.jsxs)("div",{className:s()("project__background-image",t,{"project__background-image--entered":c}),children:[Object(m.jsx)("div",{className:"project__background-image-element",style:{"--offset":Object(j.d)(a)},children:Object(m.jsx)(i.a,{alt:"",role:"presentation",...n})}),Object(m.jsx)("div",{className:"project__background-scrim",style:{"--opacity":e}})]})},v=({className:e,...t})=>Object(m.jsx)("div",{className:s()("project__image",e),children:Object(m.jsx)(i.a,{reveal:!0,delay:300,...t})}),g=({className:e,width:t="l",...c})=>Object(m.jsx)("div",{className:s()("project__section-content",`project__section-content--width-${t}`,e),...c}),O=({className:e,level:t=3,as:c="h2",...n})=>Object(m.jsx)(u.a,{className:s()("project__section-heading",e),as:c,level:t,align:"auto",...n}),x=({className:e,...t})=>Object(m.jsx)(h.a,{className:s()("project__section-text",e),size:"l",...t}),w=({center:e,stretch:t,justify:c="center",width:n="m",noMargin:a,className:i,centerMobile:r,...o})=>Object(m.jsx)("div",{className:s()("project__text-row",`project__text-row--justify-${c}`,`project__text-row--width-${n}`,i,{"project__text-row--center":e,"project__text-row--stretch":t,"project__text-row--center-mobile":r,"project__text-row--no-margin":a}),...o})},166:function(e,t,c){}}]);
//# sourceMappingURL=1.6f099525.chunk.js.map