(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{128:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,f=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return t?a.a.createElement(f,i(i({ref:n},s),{},{components:t})):a.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(128)),c={id:"configure",title:"\u914d\u7f6e\u6587\u4ef6",sidebar_label:"\u914d\u7f6e\u6587\u4ef6"},i={unversionedId:"configure",id:"configure",isDocsHomePage:!1,title:"\u914d\u7f6e\u6587\u4ef6",description:"MISA-MD \u4ece v0.4.0 \u5f00\u59cb\uff0c\u4f7f\u7528 yaml \u683c\u5f0f\u5f00\u59cb\u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\u7684\u683c\u5f0f\uff08v0.2.0 \u548c v0.3.x \u4f7f\u7528 toml \u683c\u5f0f)\u3002",source:"@site/docs/configure.md",slug:"/configure",permalink:"/MDoc/docs/next/configure",editUrl:"https://git.hpcer.dev/HPCer/CrystalMD/MDoc/blob/master/docs/docs/configure.md",version:"current",lastUpdatedBy:"genshen",lastUpdatedAt:1600001156,sidebar_label:"\u914d\u7f6e\u6587\u4ef6",sidebar:"docs",previous:{title:"\u8fd0\u884c  MISA-MD",permalink:"/MDoc/docs/next/run-md"},next:{title:"\u5229\u7528 MISA-MD \u8fdb\u884c\u7ea7\u8054\u78b0\u649e\u6a21\u62df",permalink:"/MDoc/docs/next/model-cascade-collision"}},l=[{value:"1.\u793a\u4f8b",id:"1\u793a\u4f8b",children:[]},{value:"2.\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6",id:"2\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MISA-MD \u4ece v0.4.0 \u5f00\u59cb\uff0c\u4f7f\u7528 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://yaml.org"}),"yaml")," \u683c\u5f0f\u5f00\u59cb\u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\u7684\u683c\u5f0f\uff08v0.2.0 \u548c v0.3.x \u4f7f\u7528 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/toml-lang/toml"}),"toml")," \u683c\u5f0f)\u3002"),Object(o.b)("h2",{id:"1\u793a\u4f8b"},"1.\u793a\u4f8b"),Object(o.b)("p",null,"\u4ee5\u4e0b\u5c55\u793a\u4e86 MISA-MD \u914d\u7f6e\u6587\u4ef6\u7684\u90e8\u5206\u793a\u4f8b\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# <a href=\'https://yaml.org\'>yaml</a> configure file for MISA-MD application,\n# writen by <a href=\'mailto:genshenchu@gmail.com\'>genshen</a>"\n\ntitle: "MISA-MD Configure File"\nversion: "0.4.0"\ncontributors:\n  original_author: "BaiHe"\n  original_author_email: "baihe_ustb@163.com"\n  developers: ["BaiHe<baihe_ustb@163.com>", "ChuGenshen<genshenchu@gmail.com>"]\n  organization: "USTB"\n\nsimulation:\n  phasespace: [50, 50, 50]\n  cutoff_radius_factor: 1.96125\n  lattice_const: 2.85532\n  def_timesteps_length: 0.001\n\npotential:\n  type: "setfl"\n  file_path: "FeCuNi.eam.alloy"\n\ncreation:\n  create_phase: true\n  create_seed: 466953\n  create_t_set: 600\n  alloy:\n    create_seed: 1024\n    ratio:\n      Fe: 97\n      Cu: 2\n      Ni: 1\n\noutput:\n  dump:\n    atoms_dump_mode: "copy"\n    atoms_dump_file_path: "misa_mdl.{}.out" \n    origin_dump_path: "misa_mdl.origin.out"\n    atoms_dump_interval: 10\n    by_frame: true\n  thermo:\n    interval: 0\n  logs:\n    logs_mode: "console"\n    logs_filename: ""\n\nstages:\n  - name: rescale\n    step_length: 0.001\n    steps: 4\n    rescale:\n      t: 600\n      every_steps: 2\n\n  - name: collision\n    step_length: 0.0001\n    steps: 8\n    set_v:\n      collision_step: 2\n      lat: [2, 2, 2, 0]\n      energy: 6.8\n      direction: [1.0, 1.0, 1.0]\n\n  - name: run\n    step_length: 0.001\n    steps: 6\n')),Object(o.b)("h2",{id:"2\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6"},"2.\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6"),Object(o.b)("p",null,"\u4f60\u53ef\u4ee5\u5728\u8fd0\u884c MISA-MD \u7a0b\u5e8f\u65f6\uff0c\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u7a0b\u5e8f\u80fd\u591f\u8bfb\u53d6\u914d\u7f6e\u6587\u4ef6\uff0c\u4ee5\u8fdb\u884c\u540e\u7eed\u6a21\u62df\uff0c\u4f8b\u5982\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mpirun -n 4 /path/of/misamd  -c /path/of/config.yaml\n")),Object(o.b)("p",null,"\u6216\u8005\uff1a"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"mpirun -n 4 /path/of/misamd  --conf=/path/of/config.yaml\n")))}p.isMDXComponent=!0}}]);