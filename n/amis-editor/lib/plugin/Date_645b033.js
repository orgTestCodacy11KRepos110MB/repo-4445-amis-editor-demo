amis.define("68a0db0",(function(e,a,t,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=e("849c8c1"),i=e("8ba532b"),r=e("fb32b1a"),b=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"date"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/DateSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("356b1959a9da95997b4de31415d9d74e")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("2bc6d101e5701a70f2fb9e0b67581594")}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[r.i18n("027446c2f9070b0f5b16a18208bf5fc7")]}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-calendar"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"date-plugin"}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"date",value:Math.round(Date.now()/1e3)}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:l.__assign(l.__assign({},a.scaffold),{format:"YYYY-MM-DD",value:Math.round(Date.now()/1e3)})}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("356b1959a9da95997b4de31415d9d74e")}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return[i.getSchemaTpl("tabs",[{title:r.i18n("22b777e6fcb613b8ba83ced9594cd07e"),body:[i.getSchemaTpl("layout:originPosition",{value:"left-top"}),{type:"input-date",name:"value",label:r.i18n("a2344febfc246ddc7281f62217ba42c0")},{type:"input-text",name:"format",label:r.i18n("84ff80a2dc4717cc01acd486040a6763"),description:r.i18n("6eea1b15be458a6999c9259aa2280a70"),pipeIn:i.defaultValue("YYYY-MM-DD")},{type:"input-text",name:"valueFormat",label:r.i18n("a7032449ae8761aea61cc30e32d3be10"),description:r.i18n("6eea1b15be458a6999c9259aa2280a70"),pipeIn:i.defaultValue("X")},{name:"placeholder",type:"input-text",pipeIn:i.defaultValue("-"),label:r.i18n("4c1cff4d8c05daa6ed9352a241ee628c")}]},{title:r.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:[i.getSchemaTpl("className")]},{title:r.i18n("33bf801796fd255b5f6147e33146669b"),body:[i.getSchemaTpl("ref"),i.getSchemaTpl("visible")]}])]}}),a}return l.__extends(a,e),a}(i.BasePlugin);i.registerEditorPlugin(b),a.DatePlugin=b}));