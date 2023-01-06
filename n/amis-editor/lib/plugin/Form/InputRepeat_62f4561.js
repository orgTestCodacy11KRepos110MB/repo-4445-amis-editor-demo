amis.define("ea05000",(function(e,a,l,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("849c8c1"),r=e("8ba532b"),i=e("fb32b1a"),b=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"input-repeat"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/RepeatControlSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:i.i18n("d38056d1c6aa9456f4b6b2c20aab06a2")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-repeat"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"input-repeat-plugin"}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:i.i18n("b3389af540d99fe9e51fb2995dbd6dff")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/form/input-repeat"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[i.i18n("55b45c73ae417c4dead67905b1550e85")]}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"input-repeat",label:i.i18n("2d842318fbd931286be387aaf5b2a7c3"),name:"repeat"}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"form",className:"text-left",mode:"horizontal",wrapWithPanel:!1,body:[n.__assign({},a.scaffold)]}}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:i.i18n("2d842318fbd931286be387aaf5b2a7c3")}),Object.defineProperty(a,"panelBody",{enumerable:!0,configurable:!0,writable:!0,value:[r.getSchemaTpl("layout:originPosition",{value:"left-top"}),r.getSchemaTpl("switchDefaultValue"),{type:"input-text",name:"value",label:i.i18n("225f3ed00750ae78ad1e6ea42c8f5087"),visibleOn:'typeof this.value !== "undefined"'},{name:"options",type:"select",label:i.i18n("a2d92b5adb07a4bf8a45e55643bc39f8"),options:"secondly,minutely,hourly,daily,weekdays,weekly,monthly,yearly".split(","),value:"hourly,daily,weekly,monthly",multiple:!0}]}),a}return n.__extends(a,e),a}(r.BasePlugin);r.registerEditorPlugin(b),a.RepeatControlPlugin=b}));