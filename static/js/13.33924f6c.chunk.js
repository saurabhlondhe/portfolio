(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[13],{188:function(e,t,r){},222:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(5),o=r.n(c),i=r(126),s=r(125),u=r(186),a=r(187),d=r(144),f=r(15),b=r(138),l=r(3),j=r(37),p=r(145),w=(r(188),r(1));u.a.init();t.default=({className:e,delay:t,...r})=>{const{rgbBackgroundLight:c,themeId:u}=Object(j.c)(),O=Object(n.useRef)(),h=Object(n.useRef)(),g=Object(n.useRef)(),m=Object(n.useRef)(),v=Object(n.useRef)(),y=Object(n.useRef)(),E=Object(f.h)(),x=Object(f.d)(O);return Object(n.useEffect)((()=>{const{clientWidth:e,clientHeight:t}=O.current;g.current=new i.Cb({antialias:!1,canvas:h.current,powerPreference:"high-performance"}),g.current.setSize(e,t),g.current.setPixelRatio(2),g.current.toneMapping=i.a,g.current.outputEncoding=i.Db,m.current=new i.Y(45,e/t,.5,2.25),m.current.position.z=.8,v.current=new i.jb,v.current.fog=new i.p(16777215,0,2.25);const r=new a.a;r.setDecoderPath("/draco");const n=new d.a;return n.setDRACOLoader(r),n.load(p.a,(e=>{e.scene.position.y=-1.6,v.current.add(e.scene),g.current.render(v.current,m.current)})),()=>{Object(b.b)(v.current),Object(b.a)(g.current)}}),[]),Object(n.useEffect)((()=>{const e=new i.b(16777215,"dark"===u?.1:.2),t=new i.hb(16777215,6,10,10);t.position.set(4.5,-1.3,-3),t.lookAt(0,0,0);const r=new i.hb(16777215,6,15,15);return r.position.set(-10,.7,-10),r.lookAt(0,0,0),y.current=[e,t,r],y.current.forEach((e=>v.current.add(e))),v.current.background=new i.i(...Object(l.f)(c)),v.current.fog.color=new i.i(...Object(l.f)(c)),v.current.fog.far=10,()=>{Object(b.c)(y.current)}}),[u,c]),Object(n.useEffect)((()=>{let e,t;const r=r=>{const{rotation:n}=v.current,{innerWidth:c,innerHeight:o}=window,i=(r.clientX-c/2)/c,u=(r.clientY-o/2)/o;t||(t=Object(s.d)({x:n.x,y:n.y},(({x:e,y:t})=>{n.set(e,t,n.z),g.current.render(v.current,m.current)}))),e=Object(s.c)({from:t.get(),to:{x:u/2,y:i/2},stiffness:40,damping:40,velocity:t.getVelocity(),restSpeed:1e-5,mass:1.4}).start(t)};return x&&!E&&window.addEventListener("mousemove",r),function(){var t;window.removeEventListener("mousemove",r),null===(t=e)||void 0===t||t.stop()}}),[x,E]),Object(n.useEffect)((()=>{const e=()=>{const{clientWidth:e,clientHeight:t}=O.current;g.current.setSize(e,t),m.current.aspect=e/t,m.current.updateProjectionMatrix(),g.current.render(v.current,m.current)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}}),[]),Object(w.jsx)("div",{className:o()("portrait",`portrait--${u}`,e),ref:O,style:{"--delay":t},role:"img","aria-label":"A 3D portrait of myself.",...r,children:Object(w.jsx)("canvas",{"aria-hidden":!0,className:"portrait__canvas",ref:h})})}}}]);
//# sourceMappingURL=13.33924f6c.chunk.js.map