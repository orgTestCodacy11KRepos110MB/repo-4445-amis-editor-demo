amis.define("c062098",(function(e,a,n,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=e("849c8c1"),r=e("8ba532b"),i=e("3ce129c"),b=e("fb32b1a");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=c(i),u=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"json"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/JsonSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("5acc93183b7fe3816a845aca52baeff2")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("5a4b81442789f3b2e7b665bd430eeabf")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/json"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[b.i18n("027446c2f9070b0f5b16a18208bf5fc7")]}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-code"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"json-view-plugin"}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"json"}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:l.__assign(l.__assign({},a.scaffold),{name:"json",value:{a:1,b:{c:2}}})}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:"JSON"}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var a=/\/field\/\w+$/.test(e.path);return[r.getSchemaTpl("tabs",[{title:b.i18n("22b777e6fcb613b8ba83ced9594cd07e"),body:f.default([a?{type:"tpl",inline:!1,className:"text-info text-sm",tpl:b.i18n("37b12f2666b9e4e37f33eb5e83533d5e")}:null,r.getSchemaTpl("layout:originPosition",{value:"left-top"}),{name:"levelExpand",type:"input-number",label:b.i18n("f891291cbfaec7ba3754520e2a5227d8"),pipeIn:r.defaultValue(1)}])},{title:b.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:f.default([r.getSchemaTpl("className")])},{title:b.i18n("33bf801796fd255b5f6147e33146669b"),body:f.default([r.getSchemaTpl("ref"),r.getSchemaTpl("visible")])}])]}}),a}return l.__extends(a,e),a}(r.BasePlugin);r.registerEditorPlugin(u),a.JsonPlugin=u}));