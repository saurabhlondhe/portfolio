(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[12],{158:function(n,e,t){},189:function(n,e,t){"use strict";t.r(e);var r=t(0),c=t(5),i=t.n(c),o=t(120),g=t(110),a=t(93),f=t(30),v=t(14),s=t(27),u=t(3),l=t(125),d=(t(158),t(1));e.default=n=>{const e=Object(f.c)(),{rgbBackground:t,themeId:c,colorWhite:m}=e,p=Object(r.useRef)(),x=Object(r.useRef)(),y=Object(r.useRef)(),z=Object(r.useRef)(),_=Object(r.useRef)(),P=Object(r.useRef)(),b=Object(r.useRef)(),h=Object(r.useRef)(),w=Object(r.useRef)(),j=Object(r.useRef)(),O=Object(r.useRef)(),R=Object(r.useRef)(),S=Object(v.h)(),L=Object(v.d)(p),E=Object(v.l)();return Object(r.useEffect)((()=>{const{innerWidth:n,innerHeight:e}=window;return x.current=new o.pb(.8,.5),y.current=new o.tb({canvas:p.current,antialias:!1,powerPreference:"high-performance"}),y.current.setSize(n,e),y.current.setPixelRatio(1),y.current.outputEncoding=o.ub,z.current=new o.S(54,n/e,.1,100),z.current.position.z=52,_.current=new o.bb,h.current=new o.I,h.current.onBeforeCompile=n=>{b.current=o.ob.merge([o.nb.ambient,o.nb.lights,n.uniforms,{time:{type:"f",value:0}}]),n.uniforms=b.current,n.vertexShader="\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\nfloat turbulence(vec3 p) {\n  float w = 100.0;\n  float t = -.5;\n  for (float f = 1.0 ; f <= 10.0 ; f++) {\n    float power = pow(2.0, f);\n    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);\n  }\n  return t;\n}\n\n// START\nuniform float time;\nvarying vec2 vUv;\nvarying vec3 vNormal;\nvarying float noise;\n\nvarying vec3 vViewPosition;\n\nvoid main() {\n  #include <beginnormal_vertex>\n  #include <defaultnormal_vertex>\n  #include <begin_vertex>\n  #include <project_vertex>\n  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\n    vNormal = normalize(transformedNormal);\n  #endif\n\n  vViewPosition = - mvPosition.xyz;\n\n  vUv = uv;\n\n  noise = turbulence(0.01 * position + normal + time * 0.8);\n  vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);\n  gl_Position = projectionMatrix * modelViewMatrix * vec4((position + normal) + displacement, 1.0);\n}\n",n.fragmentShader="\n#define PHONG\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform float time;\nvarying vec2 vUv;\nvarying vec3 newPosition;\nvarying float noise;\n\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <envmap_physical_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n  #include <clipping_planes_fragment>\n\n  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 1.0);\n  vec3 finalColors = vec3(color.b * 1.5, color.r, color.r);\n  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 1.0);\n  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n  vec3 totalEmissiveRadiance = emissive;\n\n  #include <logdepthbuf_fragment>\n  #include <map_fragment>\n  #include <color_fragment>\n  #include <alphamap_fragment>\n  #include <alphatest_fragment>\n  #include <specularmap_fragment>\n  #include <normal_fragment_begin>\n  #include <normal_fragment_maps>\n  #include <emissivemap_fragment>\n  #include <lights_phong_fragment>\n  #include <lights_fragment_begin>\n  #include <lights_fragment_maps>\n  #include <lights_fragment_end>\n  #include <aomap_fragment>\n\n  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n  #include <envmap_fragment>\n  #include <premultiplied_alpha_fragment>\n  #include <tonemapping_fragment>\n  #include <encodings_fragment>\n  #include <fog_fragment>\n\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n}\n"},w.current=new o.gb(32,128,128),j.current=new o.F(w.current,h.current),_.current.add(j.current),()=>{Object(l.b)(_.current),Object(l.a)(y.current)}}),[]),Object(r.useEffect)((()=>{const n=new o.i(m,.6),e=new o.a(m,"light"===c?.8:.1);return n.position.set(100,100,200),P.current=[n,e],_.current.background=new o.h(...Object(u.f)(t)),P.current.forEach((n=>_.current.add(n))),()=>{Object(l.c)(P.current)}}),[t,m,c]),Object(r.useEffect)((()=>{const{width:n,height:e}=E,t=1.3*e;y.current.setSize(n,t),z.current.aspect=n/t,z.current.updateProjectionMatrix(),S&&y.current.render(_.current,z.current),n<=u.a.mobile?(j.current.position.x=14,j.current.position.y=10):n<=u.a.tablet?(j.current.position.x=18,j.current.position.y=14):(j.current.position.x=22,j.current.position.y=16)}),[S,E]),Object(r.useEffect)((()=>{const n=n=>{const{rotation:e}=j.current,t=n.clientX/window.innerWidth,r=n.clientY/window.innerHeight;R.current||(R.current=Object(g.d)(e.toArray(),(n=>{e.set(n[0],n[1],j.current.rotation.z)}))),O.current=Object(g.c)({from:R.current.get(),to:[r/2,t/2],stiffness:30,damping:20,velocity:R.current.getVelocity(),mass:2,restSpeed:1e-4}).start(R.current)};return!S&&L&&window.addEventListener("mousemove",n),()=>{var e;window.removeEventListener("mousemove",n),null===(e=O.current)||void 0===e||e.stop()}}),[L,S]),Object(r.useEffect)((()=>(!S&&L?y.current.setAnimationLoop((n=>{void 0!==b.current&&(b.current.time.value=n/2e4),j.current.rotation.z=n/25e3,y.current.render(_.current,z.current)})):y.current.render(_.current,z.current),()=>{y.current.setAnimationLoop(null)})),[L,S]),Object(d.jsx)(a.a,{appear:!0,in:!0,onEnter:s.b,timeout:3e3,children:e=>Object(d.jsx)("canvas",{"aria-hidden":!0,className:i()("displacement-sphere",`displacement-sphere--${e}`),ref:p,...n})})}}}]);
//# sourceMappingURL=12.d052f74e.chunk.js.map