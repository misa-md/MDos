(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{113:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||l;return a?r.a.createElement(m,o(o({ref:t},p),{},{components:a})):r.a.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),l=(a(0),a(113)),i={id:"configure-terms",title:"\u914d\u7f6e\u9879\u8bf4\u660e",sidebar_label:"\u914d\u7f6e\u9879\u8bf4\u660e"},o={unversionedId:"configure-terms",id:"configure-terms",isDocsHomePage:!1,title:"\u914d\u7f6e\u9879\u8bf4\u660e",description:"\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b\u89c1$MD_PATH/example/config.yaml, \u5176\u4e2d\u914d\u7f6e\u6587\u4ef6\u7684\u5404\u4e2a\u5b57\u6bb5\u5982\u4e0b\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u4f60\u7684\u9700\u6c42\u4fee\u6539\u5404\u9009\u9879\u7684\u503c\u3002",source:"@site/docs/configure-terms.md",slug:"/configure-terms",permalink:"/MDoc/docs/next/configure-terms",editUrl:"https://git.hpcer.dev/HPCer/CrystalMD/MDoc/blob/master/docs/docs/configure-terms.md",version:"current",lastUpdatedBy:"genshen",lastUpdatedAt:1599997839,sidebar_label:"\u914d\u7f6e\u9879\u8bf4\u660e",sidebar:"docs",previous:{title:"\u914d\u7f6e\u6587\u4ef6",permalink:"/MDoc/docs/next/configure"},next:{title:"md-tools \u5de5\u5177",permalink:"/MDoc/docs/next/md-tools"}},c=[{value:"\u57fa\u672c\u914d\u7f6e",id:"\u57fa\u672c\u914d\u7f6e",children:[{value:"simulation",id:"simulation",children:[]},{value:"simulation.phasespace",id:"simulationphasespace",children:[]},{value:"simulation.lattice_const",id:"simulationlattice_const",children:[]},{value:"simulation.cutoff_radius_factor",id:"simulationcutoff_radius_factor",children:[]},{value:"simulation.def_timesteps_length",id:"simulationdef_timesteps_length",children:[]},{value:"creation",id:"creation",children:[]},{value:"creation.create_phase",id:"creationcreate_phase",children:[]},{value:"creation.create_seed",id:"creationcreate_seed",children:[]},{value:"creation.alloy",id:"creationalloy",children:[]},{value:"creation.alloy.create_seed",id:"creationalloycreate_seed",children:[]},{value:"creation.alloy.ratio",id:"creationalloyratio",children:[]},{value:"creation.alloy.ratio.Fe",id:"creationalloyratiofe",children:[]},{value:"creation.alloy.ratio.Cu",id:"creationalloyratiocu",children:[]},{value:"creation.alloy.ratio.Ni",id:"creationalloyrationi",children:[]},{value:"potential",id:"potential",children:[]},{value:"potential.type",id:"potentialtype",children:[]},{value:"potential.file_path",id:"potentialfile_path",children:[]},{value:"output",id:"output",children:[]},{value:"output.dump.atoms_dump_mode",id:"outputdumpatoms_dump_mode",children:[]},{value:"output.dump.atoms_dump_file_path",id:"outputdumpatoms_dump_file_path",children:[]},{value:"output.dump.origin_dump_path",id:"outputdumporigin_dump_path",children:[]},{value:"output.dump.atoms_dump_interval",id:"outputdumpatoms_dump_interval",children:[]},{value:"output.dump.by_frame",id:"outputdumpby_frame",children:[]},{value:"output.thermo",id:"outputthermo",children:[]},{value:"output.thermo.interval",id:"outputthermointerval",children:[]},{value:"output.logs",id:"outputlogs",children:[]},{value:"output.logs.logs_mode",id:"outputlogslogs_mode",children:[]},{value:"output.logs.logs_filename",id:"outputlogslogs_filename",children:[]}]},{value:"STAGES",id:"stages",children:[{value:"stage.name",id:"stagename",children:[]},{value:"stage.steps",id:"stagesteps",children:[]},{value:"stage.step_length",id:"stagestep_length",children:[]},{value:"stage.rescale",id:"stagerescale",children:[]},{value:"stage.rescale.t",id:"stagerescalet",children:[]},{value:"stage.rescale.every_steps",id:"stagerescaleevery_steps",children:[]},{value:"stage.setv",id:"stagesetv",children:[]},{value:"stage.setv.collision_step",id:"stagesetvcollision_step",children:[]},{value:"stage.setv.lat",id:"stagesetvlat",children:[]},{value:"stage.setv.energy",id:"stagesetvenergy",children:[]},{value:"stage.setv.direction",id:"stagesetvdirection",children:[]}]}],p={rightToc:c};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u914d\u7f6e\u6587\u4ef6\u7684\u793a\u4f8b\u89c1",Object(l.b)("inlineCode",{parentName:"p"},"$MD_PATH/example/config.yaml"),", \u5176\u4e2d\u914d\u7f6e\u6587\u4ef6\u7684\u5404\u4e2a\u5b57\u6bb5\u5982\u4e0b\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u4f60\u7684\u9700\u6c42\u4fee\u6539\u5404\u9009\u9879\u7684\u503c\u3002"),Object(l.b)("h2",{id:"\u57fa\u672c\u914d\u7f6e"},"\u57fa\u672c\u914d\u7f6e"),Object(l.b)("p",null,"\u57fa\u672c\u914d\u7f6e\u6307\u5b9a\u6a21\u62df\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u5982\u7a7a\u95f4\u4fe1\u606f(\u6676\u683c\u70b9\u6570\u3001\u622a\u65ad\u534a\u5f84\u7b49)\uff0c\u4f53\u7cfb\u521b\u5efa\u7b49\u914d\u7f6e\u3002"),Object(l.b)("h3",{id:"simulation"},"simulation"),Object(l.b)("p",null,"\u8bf4\u660e\uff1a\u6307\u5b9a\u6a21\u62df\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u5982box\u5927\u5c0f\u3001\u622a\u65ad\u534a\u5f84\u7b49;"),Object(l.b)("h3",{id:"simulationphasespace"},"simulation.phasespace"),Object(l.b)("p",null,"\u7c7b\u578b: Integer \u6570\u7ec4, \u957f\u5ea6: 3;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u6a21\u62df\u76d2\u5b50\u5927\u5c0f\uff0c\u5206\u522b\u4e3ax\u3001y\u3001z\u4e09\u4e2a\u7ef4\u5ea6\u4e0a\u7684\u5c3a\u5bf8\uff1b\u5355\u4f4d\u4e3a\u6676\u683c\u5e38\u6570;"),Object(l.b)("h3",{id:"simulationlattice_const"},"simulation.lattice_const"),Object(l.b)("p",null,"\u7c7b\u578b: Float;",Object(l.b)("br",{parentName:"p"}),"\n","\u5355\u4f4d: \u57c3, \xc5;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e: \u6676\u683c\u5e38\u6570;"),Object(l.b)("h3",{id:"simulationcutoff_radius_factor"},"simulation.cutoff_radius_factor"),Object(l.b)("p",null,"\u7c7b\u578b: Float;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e: \u622a\u65ad\u534a\u5f84\u7cfb\u6570; \u622a\u65ad\u534a\u5f84\u7cfb\u6570\u4e58\u4ee5\u6676\u683c\u5e38\u6570\u7b49\u4e8e\u5b9e\u9645\u7684\u622a\u65ad\u534a\u5f84\u957f\u5ea6;"),Object(l.b)("h3",{id:"simulationdef_timesteps_length"},"simulation.def_timesteps_length"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aFloat;",Object(l.b)("br",{parentName:"p"}),"\n","\u5355\u4f4d\uff1a\u76ae\u79d2, ps;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u6a21\u62df\u4e2d\u9ed8\u8ba4\u7684\u6bcf\u4e00\u4e2a\u65f6\u95f4\u6b65\u957f\u5ea6;  "),Object(l.b)("h3",{id:"creation"},"creation"),Object(l.b)("p",null,"\u8bf4\u660e\uff1a\u6307\u5b9a\u6a21\u62df\u521d\u59cb\u5316\u65f6\u521b\u5efa\u6a21\u62df\u4f53\u7cfb\u7684\u76f8\u5173\u53c2\u6570;"),Object(l.b)("h3",{id:"creationcreate_phase"},"creation.create_phase"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aBoolean;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1atrue\u8868\u793a\u7a0b\u5e8f\u521d\u59cb\u5316\u65f6\uff0c\u6309\u7167\u7ed9\u5b9a\u53c2\u6570(\u5982\u6e29\u5ea6)\u968f\u673a\u521b\u5efa\u539f\u5b50\uff1bfalse\u8868\u793a\u8bfb\u5165\u5df2\u6709\u7684\u539f\u5b50\u4fe1\u606f\u4ee5\u521b\u5efa\u539f\u5b50;  "),Object(l.b)("h3",{id:"creationcreate_seed"},"creation.create_seed"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aInteger;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u521b\u5efa\u539f\u5b50\u4fe1\u606f\u7684\u968f\u673a\u6570\u79cd\u5b50\uff1b\u4ec5 ",Object(l.b)("inlineCode",{parentName:"p"},"creation.create_phase")," \u4e3a true \u65f6\u6709\u6548;  "),Object(l.b)("h3",{id:"creationalloy"},"creation.alloy"),Object(l.b)("p",null,"\u8bf4\u660e\uff1a\u5408\u91d1\u5143\u7d20\u7684\u76f8\u5173\u914d\u7f6e; \u8be5\u90e8\u5206\u4ec5 ",Object(l.b)("inlineCode",{parentName:"p"},"creation.create_phase")," \u4e3a true \u65f6\u6709\u6548;  "),Object(l.b)("h3",{id:"creationalloycreate_seed"},"creation.alloy.create_seed"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aInteger;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u521b\u5efa\u539f\u5b50\u65f6\uff0c\u968f\u673a\u751f\u6210\u4e0d\u540c\u79cd\u7c7b\u5408\u91d1\u539f\u5b50\u7684\u968f\u673a\u6570\u79cd\u5b50;  "),Object(l.b)("h3",{id:"creationalloyratio"},"creation.alloy.ratio"),Object(l.b)("p",null,"\u8bf4\u660e\uff1a\u521b\u5efa\u539f\u5b50\u65f6\uff0c\u6307\u5b9a\u968f\u673a\u751f\u6210\u7684\u5404\u7c7b\u5408\u91d1\u539f\u5b50\u6bd4\u4f8b\uff0c\u4f8b\u5982\u5404\u7c7b\u5408\u91d1\u7684\u6bd4\u4f8bFe:Cu:Ni = 97:2:1;"),Object(l.b)("h3",{id:"creationalloyratiofe"},"creation.alloy.ratio.Fe"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aInteger;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u521b\u5efa\u5408\u91d1\u65f6\uff0c\u5408\u91d1\u4e2dFe\u5143\u7d20\u7684\u6bd4\u4f8b;  "),Object(l.b)("h3",{id:"creationalloyratiocu"},"creation.alloy.ratio.Cu"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aInteger;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u521b\u5efa\u5408\u91d1\u65f6\uff0c\u5408\u91d1\u4e2dCu\u5143\u7d20\u7684\u6bd4\u4f8b;  "),Object(l.b)("h3",{id:"creationalloyrationi"},"creation.alloy.ratio.Ni"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aInteger;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u521b\u5efa\u5408\u91d1\u65f6\uff0c\u5408\u91d1\u4e2dNi\u5143\u7d20\u7684\u6bd4\u4f8b;  "),Object(l.b)("h3",{id:"potential"},"potential"),Object(l.b)("p",null,"\u8bf4\u660e\uff1a\u52bf\u51fd\u6570\u6587\u4ef6\u76f8\u5173\u53c2\u6570;  "),Object(l.b)("h3",{id:"potentialtype"},"potential.type"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aString",Object(l.b)("br",{parentName:"p"}),"\n",'\u8bf4\u660e\uff1a\u52bf\u51fd\u6570\u6587\u4ef6\u683c\u5f0f, \u53d6\u503c"setfl"\u6216\u8005"funcfl"\uff0c\u76ee\u524d\u4ec5\u652f\u6301 setfl \u683c\u5f0f;  '),Object(l.b)("h3",{id:"potentialfile_path"},"potential.file_path"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aString",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u52bf\u51fd\u6570\u6587\u4ef6\u8def\u5f84;  "),Object(l.b)("h3",{id:"output"},"output"),Object(l.b)("p",null,"\u8bf4\u660e\uff1a\u8f93\u51fa\u76f8\u5173\u914d\u7f6e;"),Object(l.b)("h3",{id:"outputdumpatoms_dump_mode"},"output.dump.atoms_dump_mode"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aString",Object(l.b)("br",{parentName:"p"}),"\n",'\u8bf4\u660e\uff1a\u8f93\u51fa\u6a21\u5f0f\uff0c\u53d6\u503c\u4e3a"copy"\u6216\u8005"direct"\uff1bcopy\u6a21\u5f0f\u8f93\u51fa\u4e00\u4e2a\u6587\u4ef6\uff0c\u4e8c\u8fdb\u5236\u683c\u5f0f;',Object(l.b)("br",{parentName:"p"}),"\n","direct\u6a21\u5f0f\u8f93\u51fa\u591a\u4e2a\u6587\u672c\u6587\u4ef6(\u6bcf\u4e2a\u8fdb\u7a0b\u4e0e\u6bcf\u4e00\u4e2a\u9700\u8981\u8f93\u51fa\u7684\u65f6\u95f4\u6b65\u90fd\u5bf9\u5e94\u4e00\u4e2a\u6587\u4ef6)\uff0c\u4e00\u822c\u7528\u4e8e\u7a0b\u5e8f\u8c03\u8bd5;"),Object(l.b)("h3",{id:"outputdumpatoms_dump_file_path"},"output.dump.atoms_dump_file_path"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aString",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1acopy\u6a21\u5f0f\u4e0b\uff0c\u8f93\u51fa\u4e8c\u8fdb\u5236\u6587\u4ef6\u8def\u5f84;\n\u5982\u679c\u8bbe\u7f6e\u4e86\u6309\u5e27\u8f93\u51fa(",Object(l.b)("inlineCode",{parentName:"p"},"output.by_frame"),"\u4e3atrue), \u5219\u6587\u4ef6\u8def\u5f84\u4e2d\u9700\u8981\u6709\u4e00\u4e2a\u5927\u62ec\u53f7(\u5982",Object(l.b)("inlineCode",{parentName:"p"},"crystal_mdl.{}.out"),"),\u7a0b\u5e8f\u8f93\u51fa\u65f6\u4f1a\u5c06\u5927\u62ec\u53f7\u66ff\u6362\u4e3a\u5f53\u524d\u65f6\u95f4\u6b65\u6570.  "),Object(l.b)("h3",{id:"outputdumporigin_dump_path"},"output.dump.origin_dump_path"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aString",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1acopy\u6a21\u5f0f\u4e0b\uff0c\u8f93\u51fa\u7ea7\u8054\u78b0\u649e\u524d\u4e00\u4e2a\u65f6\u95f4\u6b65\u7684\u4f53\u7cfb\u7c92\u5b50\uff0c\u8be5\u9009\u9879\u6307\u5b9a\u8f93\u51fa\u7684\u6587\u4ef6\u8def\u5f84; \u82e5\u8be5\u9879\u4e3a\u7a7a\uff0c\u5219\u4e0d\u8f93\u51fa;"),Object(l.b)("h3",{id:"outputdumpatoms_dump_interval"},"output.dump.atoms_dump_interval"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aInteger",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u6307\u5b9a\u6bcf\u9694\u4e00\u5b9a\u65f6\u95f4\u6b65\uff0c\u8f93\u51fa\u4e00\u6b21\u7cfb\u7edf\u4e2d\u7684\u6240\u6709\u539f\u5b50\u4fe1\u606f;  "),Object(l.b)("h3",{id:"outputdumpby_frame"},"output.dump.by_frame"),Object(l.b)("p",null,"\u7c7b\u578b: Boolean",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e: \u6bcf\u9694",Object(l.b)("inlineCode",{parentName:"p"},"output.atoms_dump_interval"),"\u9879\u6307\u5b9a\u5230\u65f6\u95f4\u6b65\u6570\u4e3a\u4e00\u5e27.\u6309\u5e27\u8f93\u51fa\u9009\u9879\u6253\u5f00\u65f6,\u7a0b\u5e8f\u4f1a\u6bcf\u4e00\u5e27\u751f\u6210\u4e00\u4e2a\u6587\u4ef6\u5e76\u6807\u8bb0\u8f93\u51fa\u65f6\u7684\u65f6\u95f4\u6b65."),Object(l.b)("h3",{id:"outputthermo"},"output.thermo"),Object(l.b)("p",null,"\u8bf4\u660e\uff1a\u70ed\u529b\u5b66\u4fe1\u606f\u7684\u8f93\u51fa\u76f8\u5173\u914d\u7f6e;"),Object(l.b)("h3",{id:"outputthermointerval"},"output.thermo.interval"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aInteger",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u6307\u5b9a\u6bcf\u9694\u4e00\u5b9a\u65f6\u95f4\u6b65\u8f93\u51fa\u7cfb\u7edf\u7684\u70ed\u529b\u5b66\u4fe1\u606f\uff0c\u5305\u62ec\u4f53\u7cfb\u6e29\u5ea6\u3001\u80fd\u91cf\u7b49; "),Object(l.b)("h3",{id:"outputlogs"},"output.logs"),Object(l.b)("p",null,"\u8bf4\u660e\uff1a\u7a0b\u5e8f\u65e5\u5fd7, \u53ef\u4ee5\u9009\u62e9\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa\u6216\u8005\u6587\u4ef6."),Object(l.b)("h3",{id:"outputlogslogs_mode"},"output.logs.logs_mode"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aString",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u65e5\u5fd7\u8f93\u51fa\u6a21\u5f0f,\u53ef\u4ee5\u4e3a",Object(l.b)("inlineCode",{parentName:"p"},"console"),"(\u8f93\u51fa\u5230\u6807\u51c6\u8f93\u51fa)\u6216\u8005",Object(l.b)("inlineCode",{parentName:"p"},"file"),"(\u8f93\u51fa\u5230\u6587\u4ef6)."),Object(l.b)("h3",{id:"outputlogslogs_filename"},"output.logs.logs_filename"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aString",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u5982\u679c\u65e5\u5fd7\u8f93\u51fa\u6a21\u5f0f\u4e3afile, \u6539\u9009\u9879\u6307\u5b9a\u6587\u4ef6\u8def\u5f84."),Object(l.b)("h2",{id:"stages"},"STAGES"),Object(l.b)("p",null,"stage\u5141\u8bb8\u4e00\u4e2a\u6a21\u62df\u6d41\u7a0b\u53ef\u4ee5\u5206\u4e3a\u82e5\u5e72\u4e2astages\uff0c\u501f\u9274\u81ea gitlab-ci \u548c github action\u3002\u6bcf\u4e2a stage \u4e2d\u4f9d\u636e\u8be5stage\u7684\u914d\u7f6e\u53c2\u6570\u6267\u884c\u82e5\u5e72\u65f6\u95f4\u6b65\u3002",Object(l.b)("br",{parentName:"p"}),"\n","\u76ee\u524d stage \u4e2d\u53ef\u4ee5\u914d\u7f6e\u65f6\u95f4\u6b65\u3001\u65f6\u95f4\u6b65\u957f\u7b49\u53c2\u6570\u4ee5\u53carescale\u3001PKA\u7ea7\u8054\u78b0\u649e\u7b49\u64cd\u4f5c\u3002"),Object(l.b)("h3",{id:"stagename"},"[stage]",".name"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aString",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1astage \u540d\u79f0;"),Object(l.b)("h3",{id:"stagesteps"},"[stage]",".steps"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aInteger",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u8be5 stage \u6267\u884c\u7684\u6a21\u62df\u65f6\u95f4\u6b65\u6570;"),Object(l.b)("h3",{id:"stagestep_length"},"[stage]",".step_length"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aFloat",Object(l.b)("br",{parentName:"p"}),"\n","\u5355\u4f4d\uff1a\u76ae\u79d2, ps;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u8be5 stage \u6267\u884c\u7684\u6a21\u62df\u6240\u4f7f\u7528\u7684\u65f6\u95f4\u6b65\u957f\uff0c\u5982\u6b65\u6307\u5b9a\u5219\u4f7f\u7528\u9ed8\u8ba4\u65f6\u95f4\u6b65\u957f(\u7531",Object(l.b)("inlineCode",{parentName:"p"},"simulation.def_timesteps_length"),"\u6307\u5b9a);"),Object(l.b)("h3",{id:"stagerescale"},"[stage]",".rescale"),Object(l.b)("p",null,"\u8bf4\u660e\uff1a\u6bcf\u9694\u4e00\u5b9a\u65f6\u95f4\u6b65\u8fdb\u884c\u4e00\u6b21rescale\uff0c\u5c06\u4f53\u7cfb\u6e29\u5ea6\u91cd\u65b0\u8bbe\u7f6e\u4e3a\u7ed9\u5b9a\u7684\u6e29\u5ea6; \u8be5\u9009\u9879\u6307\u5b9arescale \u7684\u76f8\u5173\u53c2\u6570;  "),Object(l.b)("h3",{id:"stagerescalet"},"[stage]",".rescale.t"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aFloat;",Object(l.b)("br",{parentName:"p"}),"\n","\u5355\u4f4d\uff1a\u5f00, K;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u6bcf\u6b21rescale\u65f6\uff0c\u91cd\u65b0\u8bbe\u7f6e\u7684\u4f53\u7cfb\u6e29\u5ea6;"),Object(l.b)("h3",{id:"stagerescaleevery_steps"},"[stage]",".rescale.every_steps"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aInteger",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u6267\u884c rescale \u64cd\u4f5c\u7684\u65f6\u95f4\u6b65\u95f4\u9694; "),Object(l.b)("h3",{id:"stagesetv"},"[stage]",".setv"),Object(l.b)("p",null,"\u8bf4\u660e\uff1a\u7ea7\u8054\u78b0\u649e\u7684\u76f8\u5173\u53c2\u6570;  "),Object(l.b)("h3",{id:"stagesetvcollision_step"},"[stage]",".setv.collision_step"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aInteger;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u6307\u5b9a\u7ea7\u8054\u78b0\u649e\u5f00\u59cb\u7684\u65f6\u95f4\u6b65\uff0c\u8be5\u65f6\u95f4\u6b65\u65f6\u76f8\u5bf9\u4e8e\u8be5stage\u7684\uff0c\u800c\u975e\u5168\u5c40\u65f6\u95f4\u6b65;  "),Object(l.b)("h3",{id:"stagesetvlat"},"[stage]",".setv.lat"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aInteger \u6570\u7ec4\uff0c\u957f\u5ea6: 4;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u7ea7\u8054\u78b0\u649ePKA\u539f\u5b50\u4f4d\u7f6e\uff0c\u6570\u7ec4\u7b2c4\u9879\u4e3a\u504f\u79fb\u503c\uff0c\u4e00\u822c\u8bbe\u4e3a0;  "),Object(l.b)("h3",{id:"stagesetvenergy"},"[stage]",".setv.energy"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aFloat",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u7528\u4e8e\u8bbe\u7f6e\u7ea7\u8054\u78b0\u649ePKA\u539f\u5b50\u80fd\u91cf\uff0c\u5355\u4f4deV\uff0c\u76f4\u63a5\u53e0\u52a0\u5230\u5bf9\u5e94\u539f\u5b50\u7684\u901f\u5ea6\u4e0a; "),Object(l.b)("h3",{id:"stagesetvdirection"},"[stage]",".setv.direction"),Object(l.b)("p",null,"\u7c7b\u578b\uff1aInteger \u6570\u7ec4\uff0c\u957f\u5ea6: 3;",Object(l.b)("br",{parentName:"p"}),"\n","\u8bf4\u660e\uff1a\u7528\u4e8e\u8bbe\u7f6ePKA\u80fd\u91cf\u5bf9\u5e94\u7684\u901f\u5ea6\u5728\u4e09\u4e2a\u7ef4\u5ea6(x,y,z)\u7684\u5206\u91cf\uff0c\u6216\u8005\u8bf4\u662fPKA\u5165\u5c04\u65b9\u5411; "))}b.isMDXComponent=!0}}]);