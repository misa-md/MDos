(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{141:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),O=r,m=u["".concat(b,".").concat(O)]||u[O]||d[O]||c;return n?a.a.createElement(m,l(l({ref:t},o),{},{components:n})):a.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var o=2;o<c;o++)b[o]=n[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(141)),b={id:"compiling",title:"\u7f16\u8bd1\u6784\u5efa",sidebar_label:"\u7f16\u8bd1\u6784\u5efa"},l={unversionedId:"compiling",id:"compiling",isDocsHomePage:!1,title:"\u7f16\u8bd1\u6784\u5efa",description:"MISA-MD\u4f7f\u7528CMake\u5de5\u5177\u8fdb\u884c\u7f16\u8bd1\u6784\u5efa\uff0c\u5982\u679c\u4f60\u4e0d\u719f\u6089CMake\uff0c\u53ef\u4ee5\u53c2\u8003CMake\u7684\u76f8\u5173\u6587\u6863\u3002",source:"@site/docs/compiling.md",slug:"/compiling",permalink:"/MDoc/docs/compiling",editUrl:"https://github.com/misa-md/MDoc/blob/master/docs/compiling.md",version:"current",lastUpdatedBy:"genshen",lastUpdatedAt:1600001156,sidebar_label:"\u7f16\u8bd1\u6784\u5efa",sidebar:"docs",previous:{title:"\u83b7\u53d6\u6e90\u4ee3\u7801",permalink:"/MDoc/docs/get-source-code"},next:{title:"\u51c6\u5907\u52bf\u8868\u6587\u4ef6",permalink:"/MDoc/docs/potential-file"}},i=[{value:"1.\u4f7f\u7528CMake\u5de5\u5177\u7f16\u8bd1",id:"1\u4f7f\u7528cmake\u5de5\u5177\u7f16\u8bd1",children:[]},{value:"2.\u6784\u5efa\u9009\u9879",id:"2\u6784\u5efa\u9009\u9879",children:[]}],o={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"MISA-MD\u4f7f\u7528CMake\u5de5\u5177\u8fdb\u884c\u7f16\u8bd1\u6784\u5efa\uff0c\u5982\u679c\u4f60\u4e0d\u719f\u6089CMake\uff0c\u53ef\u4ee5\u53c2\u8003CMake\u7684\u76f8\u5173\u6587\u6863\u3002\n\u5728\u6b63\u5f0f\u8fdb\u884c\u6784\u5efa\u4e4b\u524d\uff0c\u786e\u4fdd\u4f60\u7684\u7cfb\u7edf\u5df2\u7ecf\u5b89\u88c5\u5e76\u914d\u7f6e\u4e86CMake\u5de5\u5177\u3001\u76f8\u7b26\u7248\u672c\u7684c++\u7f16\u8bd1\u5668\u3001MPI\u73af\u5883\u7b49\uff0c\n\u4e14\u786e\u4fdd\u5df2\u7ecf\u6b63\u786e\u914d\u7f6e\u4e86\u73af\u5883\u76f8\u5173\u53d8\u91cf(\u5982",Object(c.b)("strong",{parentName:"p"},"CC")," ",Object(c.b)("strong",{parentName:"p"},"CXX"),"\u73af\u5883\u53d8\u91cf)\u3002"),Object(c.b)("h2",{id:"1\u4f7f\u7528cmake\u5de5\u5177\u7f16\u8bd1"},"1.\u4f7f\u7528CMake\u5de5\u5177\u7f16\u8bd1"),Object(c.b)("p",null,"\u6211\u4eec\u5f3a\u70c8\u63a8\u8350\u4f7f\u7528CMake\u5916\u90e8\u6784\u5efa(out-of-source build)\u65b9\u5f0f\u8fdb\u884c\u6784\u5efa\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd $MD_PATH\ncmake -B./build -H./\ncmake --build ./build -j 4  # build using 4 processors.\n")),Object(c.b)("p",null,"\u6267\u884c\u4ee5\u4e0a\u6b65\u9aa4\u540e\uff0c\u7f16\u8bd1\u5b8c\u6210\u7684\u53ef\u6267\u884c MISA-MD \u7a0b\u5e8f\u4f1a\u653e\u5728",Object(c.b)("inlineCode",{parentName:"p"},"$MD_PATH/build/bin"),"\u76ee\u5f55\u3002"),Object(c.b)("h2",{id:"2\u6784\u5efa\u9009\u9879"},"2.\u6784\u5efa\u9009\u9879"),Object(c.b)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5c06\u7f16\u8bd1\u5b8c\u6210\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u5b89\u88c5\u5230\u6307\u5b9a\u76ee\u5f55\uff0c\u53ef\u4ee5\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u6784\u5efa,\u5e76\u5b89\u88c5\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd $MD_PATH\ncmake -B./build -H./ -DCMAKE_INSTALL_PREFIX=/your/desirable/path/\ncmake --build ./build -j 4\ncmake --build ./build --target install # install\n")),Object(c.b)("p",null,"\u5728\u6267\u884ccmake\u547d\u4ee4\u7684\u65f6\u5019\uff0c\u9664\u4e86\u53ef\u4ee5\u6307\u5b9a",Object(c.b)("inlineCode",{parentName:"p"},"CMAKE_INSTALL_PREFIX"),"\u7b49CMake\u6784\u5efa\u5de5\u5177\u5185\u7f6e\u7684\u53c2\u6570\u5916\uff0c\u8fd8\u53ef\u4ee5\u6307\u5b9a\u4ee5\u4e0b\u53c2\u6570\uff1a"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u53d6\u503c"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TEST_ENABLE_FLAG"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ON/OFF"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"ON"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u662f\u5426\u6784\u5efatest (\u5355\u5143\u6d4b\u8bd5)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"MD_RAND"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"LCG/MT/STC/xoshiro/LEGACY"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"MT"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u968f\u673a\u6570\u751f\u6210\u5668")))),Object(c.b)("p",null,"\u6ce8: Debug \u6a21\u5f0f\u4e0b\uff0c\u4f7f\u7528\u7684\u662frand()\u51fd\u6570\u751f\u6210\u968f\u673a\u6570\u3002"),Object(c.b)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u4e0d\u5e0c\u671b\u6784\u5efa\u5355\u5143\u6d4b\u8bd5tests\u76ee\u5f55\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u7684\u547d\u4ee4\u8fdb\u884c\u6784\u5efa\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"cd $MD_PATH\ncmake -B./build -H./ -DTEST_ENABLE_FLAG=OFF -DTOOLS_BUILD_ENABLE_FLAG=OFF\ncmake --build ./build -j 4\n")))}p.isMDXComponent=!0}}]);