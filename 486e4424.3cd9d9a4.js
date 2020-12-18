(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{141:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||s[m]||c;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(141)),o={id:"prepare-environment",title:"\u51c6\u5907\u73af\u5883",sidebar_label:"\u51c6\u5907\u73af\u5883",original_id:"prepare-environment"},i={unversionedId:"prepare-environment",id:"version-0.2.0/prepare-environment",isDocsHomePage:!1,title:"\u51c6\u5907\u73af\u5883",description:"\u5728 Linux \u4e0a\u6784\u5efa Crystal MD \u4e4b\u524d\uff0c\u8bf7\u5728\u4f60\u7684\u7cfb\u7edf\u4e2d\u5b89\u88c5\u4ee5\u4e0b\u6784\u5efa\u5de5\u5177\uff1a",source:"@site/versioned_docs/version-0.2.0/prepare-environment.md",slug:"/prepare-environment",permalink:"/MDoc/docs/0.2.0/prepare-environment",editUrl:"https://github.com/misa-md/MDoc/blob/master/versioned_docs/version-0.2.0/prepare-environment.md",version:"0.2.0",lastUpdatedBy:"genshen",lastUpdatedAt:1599997839,sidebar_label:"\u51c6\u5907\u73af\u5883",sidebar:"version-0.2.0/docs",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/MDoc/docs/0.2.0/getting-started"},next:{title:"\u83b7\u53d6\u6e90\u4ee3\u7801",permalink:"/MDoc/docs/0.2.0/get-source-code"}},p=[{value:"CMake",id:"cmake",children:[]},{value:"c++\u7f16\u8bd1\u5668",id:"c\u7f16\u8bd1\u5668",children:[]},{value:"MPI\u73af\u5883",id:"mpi\u73af\u5883",children:[]}],l={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5728 Linux \u4e0a\u6784\u5efa Crystal MD \u4e4b\u524d\uff0c\u8bf7\u5728\u4f60\u7684\u7cfb\u7edf\u4e2d\u5b89\u88c5\u4ee5\u4e0b\u6784\u5efa\u5de5\u5177\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"http://cmake.org"}),"CMake"),", 3.6\u53ca\u4ee5\u4e0a\u7248\u672c;"),Object(c.b)("li",{parentName:"ul"},"\u652f\u6301C++11\u7279\u6027\u7684C++\u7f16\u8bd1\u5668;"),Object(c.b)("li",{parentName:"ul"},"MPI\u73af\u5883;")),Object(c.b)("h2",{id:"cmake"},"CMake"),Object(c.b)("p",null,"\u5982\u679c\u4f60\u7684\u7cfb\u7edf\u4e2d\u672a\u5b89\u88c5CMake\u6784\u5efa\u5de5\u5177\uff0c\u8bf7\u6309\u7167",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://cmake.org/"}),"\u76f8\u5173\u6587\u6863"),"\u8fdb\u884c\u4e0b\u8f7d\u5b89\u88c5\u3002"),Object(c.b)("h2",{id:"c\u7f16\u8bd1\u5668"},"c++\u7f16\u8bd1\u5668"),Object(c.b)("p",null,"\u4e3a\u4e86\u7f16\u8bd1Crystal MD\u7a0b\u5e8f\uff0c\u8981\u6c42\u4f60\u7684\u7cfb\u7edf\u4e0a\u8981\u5df2\u7ecf\u5b89\u88c5\u4e86\u76f8\u5173\u7684C++\u7f16\u8bd1\u5668\u3002\n\u5404\u7c7b\u7f16\u8bd1\u5668\u5bf9c++11\u7279\u6027\u7684\u652f\u6301\u60c5\u51b5\u53ef\u53c2\u8003",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"http://zh.cppreference.com/w/cpp/compiler_support#cpp11%7D"}),"\u76f8\u5173\u6587\u6863"),"\u3002"),Object(c.b)("p",null,"\u6211\u4eec\u6d4b\u8bd5\u8fc7\u4ee5\u4e0b\u7f16\u8bd1\u5668\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"GUN g++ 4.8\u53ca\u4ee5\u540e\u7248\u672c"),Object(c.b)("li",{parentName:"ul"},"LLVM Clang++ 3.3\u53ca\u4ee5\u4e0a\u7248\u672c"),Object(c.b)("li",{parentName:"ul"},"Intel icc 2017")),Object(c.b)("h2",{id:"mpi\u73af\u5883"},"MPI\u73af\u5883"),Object(c.b)("p",null,"\u8981\u6c42\u4f60\u7684\u7cfb\u7edf\u4e2d\u5b89\u88c5\u4e86\u652f\u6301MPI 2.0\u53ca\u4ee5\u540e\u6807\u51c6\u7684MPI\u73af\u5883\u3002"))}u.isMDXComponent=!0}}]);