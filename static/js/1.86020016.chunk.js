(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[1],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){"use strict";var n=c(17),a=c(5),s=c.n(a),i=c(19),r=(c(113),c(1));const o=["txt","png","jpg"];t.a=({rel:e,target:t,children:c,secondary:a,className:l,href:d,as:j,...u})=>{const m=o.includes(null===d||void 0===d?void 0:d.split(".").pop()),h=(null===d||void 0===d?void 0:d.includes("://"))||"#"===(null===d||void 0===d?void 0:d[0])||m,b=e||h?"noreferrer noopener":void 0,p=t||h?"_blank":void 0,_=j||h?"a":n.b;return Object(r.jsx)(_,{className:s()("link",l,{"link--secondary":a}),rel:b,href:h?d:void 0,to:h?void 0:d,target:p,onMouseUp:i.a,...u,children:c})}},104:function(e,t,c){"use strict";var n=c(102),a=(c(114),c(1));t.a=()=>Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsx)("span",{className:"footer__date",children:`\xa9 2019-${(new Date).getFullYear()} `}),Object(a.jsx)(n.a,{secondary:!0,className:"footer__link",href:"/humans.txt",target:"_self",children:"Saurabh Londhe"})]})},107:function(e,t,c){},111:function(e,t,c){"use strict";async function n({src:e,srcSet:t,sizes:c}){return new Promise(((n,a)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");const a=new Image;e&&(a.src=e),t&&(a.srcset=t),c&&(a.sizes=c);const s=()=>{a.removeEventListener("load",s);const e=a.currentSrc;n(e)};a.addEventListener("load",s)}catch(s){a(`Error loading ${t}: ${s}`)}}))}async function a(e){const t=e.split(", ").map((e=>{const[t,c]=e.split(" ");return{src:t,image:function(e=1,t=1){const c=document.createElement("canvas"),n=c.getContext("2d");c.width=e,c.height=t,n.fillStyle="rgba(0, 0, 0, 0)",n.fillRect(0,0,e,t);const a=c.toDataURL("image/png","");return c.remove(),a}(Number(c.replace("w",""))),width:c}})),c=t.map((({image:e,width:t})=>`${e} ${t}`)).join(", "),a=await n({srcSet:c});return t.find((e=>e.image===a)).src}c.d(t,"a",(function(){return n})),c.d(t,"b",(function(){return a}))},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){"use strict";var n=c(0),a=c(5),s=c.n(a),i=c(14),r=c(28),o=c(18),l=c(93),d=c(27),j=c(96),u=c(11),m=c(3),h=c(111),b=c(30),p=c(29),_=(c(122),c(1));const f=({onLoad:e,loaded:t,inViewport:c,srcSet:a,placeholder:b,delay:f,src:v,alt:g,play:O=!0,reveal:x,...N})=>{const w=Object(i.h)(),[y,S]=Object(n.useState)(!0),[k,$]=Object(n.useState)(!w),[E,L]=Object(n.useState)(!1),[R,M]=Object(n.useState)(!1),[z,F]=Object(n.useState)(!1),[D,P]=Object(n.useState)(),[C,I]=Object(n.useState)(),V=Object(n.useRef)(),B=Object(n.useRef)(),H=null===v||void 0===v?void 0:v.endsWith(".mp4"),J=v||(null===a||void 0===a?void 0:a.split(" ")[0]),U=!j.a&&c;Object(n.useEffect)((()=>{const e=()=>{S(!1)},t=V.current;return null===t||void 0===t||t.addEventListener("transitionend",e),()=>{null===t||void 0===t||t.removeEventListener("transitionend",e)}}),[]),Object(n.useEffect)((()=>{H&&a?(async()=>{const e=await Object(h.b)(a);I(e)})():H&&I(v)}),[H,v,a]),Object(n.useEffect)((()=>{if(null===V||void 0===V?void 0:V.current){const{width:e,height:t}=V.current;P({width:e,height:t})}}),[]),Object(n.useEffect)((()=>{B.current&&C&&(O&&c?!c||w||j.a||($(!0),B.current.play()):($(!1),B.current.pause()))}),[c,O,w,C]);const W=e=>{e.preventDefault(),B.current.paused?($(!0),B.current.play()):($(!1),B.current.pause())},A=()=>{L(!0),M(!0)},G=()=>{L(!0),F(!0)};return Object(_.jsxs)("div",{className:s()("image__element-wrapper",{"image__element-wrapper--reveal":x,"image__element-wrapper--in-viewport":c}),onMouseOver:H?A:void 0,onFocus:H?A:void 0,onMouseOut:H?()=>M(!1):void 0,onBlur:H?()=>M(!1):void 0,style:{"--delay":Object(m.c)(f+1e3)},role:"presentation",children:[H&&Object(_.jsxs)(n.Fragment,{children:[Object(_.jsx)("video",{muted:!0,loop:!0,playsInline:!0,className:s()("image__element",{"image__element--loaded":t}),autoPlay:!w,onLoadStart:e,"aria-label":g,ref:B,...N,children:Object(_.jsx)("source",{src:v,type:"video/mp4"})}),Object(_.jsx)(l.a,{in:R||z,onExit:d.b,onExited:()=>L(!1),timeout:{enter:0,exit:Object(m.b)(u.b.base.durationS)},children:e=>Object(_.jsx)(p.a,{visible:E,children:Object(_.jsxs)(r.a,{className:s()("image__button",`image__button--${e}`),onFocus:G,onBlur:()=>F(!1),onClick:W,children:[Object(_.jsx)(o.a,{icon:k?"pause":"play"}),k?"Pause":"Play"]})})})]}),!H&&Object(_.jsx)("img",{className:s()("image__element",{"image__element--loaded":t}),onLoad:e,decoding:"async",src:U?J:void 0,srcSet:U?a:void 0,width:null===D||void 0===D?void 0:D.width,height:null===D||void 0===D?void 0:D.height,alt:g,...N}),y&&Object(_.jsx)("img",{"aria-hidden":!0,className:s()("image__placeholder",{"image__placeholder--loaded":t}),style:{"--delay":Object(m.c)(f)},ref:V,src:b,onLoad:e=>{const{width:t,height:c}=e.target;P({width:t,height:c})},width:null===D||void 0===D?void 0:D.width,height:null===D||void 0===D?void 0:D.height,decoding:"async",alt:"",role:"presentation"})]})};t.a=({className:e,style:t,reveal:c,delay:a=0,raised:r,src:o,...l})=>{var d,j;(null===(d=o)||void 0===d?void 0:d.default)&&(o=o.default);const[u,h]=Object(n.useState)(!1),{themeId:p}=Object(b.c)(),v=Object(n.useRef)(),g=Object(i.d)(v,c||!(null===(j=o)||void 0===j?void 0:j.endsWith(".mp4"))),O=Object(n.useCallback)((()=>{h(!0)}),[]);return Object(_.jsx)("div",{className:s()("image",e,`image--${p}`,{"image--in-viewport":g,"image--reveal":c,"image--raised":r}),style:{...t,"--delay":Object(m.c)(a)},ref:v,children:Object(_.jsx)(f,{delay:a,onLoad:O,loaded:u,inViewport:g,reveal:c,src:o,...l})})}},122:function(e,t,c){},123:function(e,t,c){"use strict";c.d(t,"c",(function(){return b})),c.d(t,"b",(function(){return p})),c.d(t,"e",(function(){return _})),c.d(t,"a",(function(){return f})),c.d(t,"d",(function(){return v})),c.d(t,"g",(function(){return g})),c.d(t,"h",(function(){return O})),c.d(t,"i",(function(){return x})),c.d(t,"j",(function(){return N})),c.d(t,"f",(function(){return w}));var n=c(0),a=c(5),s=c.n(a),i=c(115),r=c(28),o=c(14),l=c(96),d=c(97),j=c(3),u=c(98),m=c(99),h=(c(139),c(1));function b({title:e,description:t,linkLabel:c="Visit website",url:n,roles:a,className:i}){return Object(h.jsx)(d.a,{className:s()("project__header",i),children:Object(h.jsxs)("div",{className:"project__header-content",style:{"--initDelay":Object(j.c)(300)},children:[Object(h.jsxs)("div",{className:"project__details",children:[Object(h.jsx)(u.a,{className:s()("project__title",{"project__title--entered":!l.a}),level:2,as:"h1",children:e}),Object(h.jsx)(m.a,{className:s()("project__description",{"project__description--entered":!l.a}),size:"xl",children:t}),!!n&&Object(h.jsx)(r.a,{secondary:!0,iconHoverShift:!0,className:s()("project__link-button",{"project__link-button--entered":!l.a}),icon:"chevronRight",href:n,children:c})]}),!!(null===a||void 0===a?void 0:a.length)&&Object(h.jsx)("ul",{className:"project__meta",children:null===a||void 0===a?void 0:a.map(((e,t)=>Object(h.jsx)("li",{className:s()("project__meta-item",{"project__meta-item--entered":!l.a}),style:{"--delay":Object(j.c)(600+140*t)},children:Object(h.jsx)(m.a,{secondary:!0,as:"span",children:e})},e)))})]})})}const p=({className:e,...t})=>Object(h.jsx)("article",{className:s()("project",e),...t}),_=Object(n.forwardRef)((({className:e,light:t,first:c,fullHeight:n,backgroundOverlayOpacity:a=.9,backgroundElement:i,children:r,...o},l)=>Object(h.jsxs)("section",{className:s()("project__section",e,{"project__section--light":t,"project__section--full-height":n}),ref:l,...o,children:[!!i&&Object(h.jsx)("div",{className:"project__section-background",style:{"--opacity":a},children:i}),Object(h.jsx)(d.a,{className:s()("project__section-inner",{"project__section-inner--first":c}),children:r})]}))),f=({opacity:e=.7,className:t,entered:c,...n})=>{const a=Object(o.g)(.6);return Object(h.jsxs)("div",{className:s()("project__background-image",t,{"project__background-image--entered":c}),children:[Object(h.jsx)("div",{className:"project__background-image-element",style:{"--offset":Object(j.d)(a)},children:Object(h.jsx)(i.a,{alt:"",role:"presentation",...n})}),Object(h.jsx)("div",{className:"project__background-scrim",style:{"--opacity":e}})]})},v=({className:e,...t})=>Object(h.jsx)("div",{className:s()("project__image",e),children:Object(h.jsx)(i.a,{reveal:!0,delay:300,...t})}),g=({className:e,width:t="l",...c})=>Object(h.jsx)("div",{className:s()("project__section-content",`project__section-content--width-${t}`,e),...c}),O=({className:e,level:t=3,as:c="h2",...n})=>Object(h.jsx)(u.a,{className:s()("project__section-heading",e),as:c,level:t,align:"auto",...n}),x=({className:e,...t})=>Object(h.jsx)(m.a,{className:s()("project__section-text",e),size:"l",...t}),N=({center:e,stretch:t,justify:c="center",width:n="m",noMargin:a,className:i,centerMobile:r,...o})=>Object(h.jsx)("div",{className:s()("project__text-row",`project__text-row--justify-${c}`,`project__text-row--width-${n}`,i,{"project__text-row--center":e,"project__text-row--stretch":t,"project__text-row--center-mobile":r,"project__text-row--no-margin":a}),...o}),w=({className:e,alternate:t,centered:c,...n})=>Object(h.jsx)(g,{className:s()("project__section-columns",{"project__section-columns--alternate":t,"project__section-columns--centered":c}),...n})},139:function(e,t,c){},96:function(e,t,c){"use strict";const n="ReactSnap"===navigator.userAgent;t.a=n},97:function(e,t,c){"use strict";var n=c(0),a=c(5),s=c.n(a),i=(c(107),c(1));const r=Object(n.forwardRef)((({as:e="div",children:t,className:c,...n},a)=>Object(i.jsx)(e,{className:s()("section",c),ref:a,...n,children:t})));t.a=r},98:function(e,t,c){"use strict";var n=c(0),a=c(5),s=c.n(a),i=c(34),r=c.p+"static/media/gotham-bold.73ce573b.woff2",o=(c(100),c(1));t.a=({children:e,level:t=1,as:c,align:a="auto",weight:l="medium",className:d,...j})=>{const u=Math.min(Math.max(t,0),4),m=c||`h${Math.max(u,1)}`;return Object(o.jsxs)(n.Fragment,{children:["bold"===l&&Object(o.jsxs)(i.a,{children:[Object(o.jsx)("link",{rel:"preload",href:r,as:"font",crossorigin:""}),Object(o.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${r}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(o.jsx)(m,{className:s()(d,"heading",`heading--align-${a}`,`heading--level-${u}`,`heading--weight-${l}`),...j,children:e})]})}},99:function(e,t,c){"use strict";var n=c(5),a=c.n(n),s=(c(101),c(1));t.a=({children:e,size:t="m",as:c="p",align:n="auto",weight:i="auto",secondary:r,className:o,...l})=>Object(s.jsx)(c,{className:a()(o,"text",`text--align-${n}`,`text--size-${t}`,`text--weight-${i}`,{"text--secondary":r}),...l,children:e})}}]);
//# sourceMappingURL=1.86020016.chunk.js.map