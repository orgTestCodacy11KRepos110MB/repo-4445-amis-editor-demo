amis.define("1a6a1aa",(function(e,a,t,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("849c8c1"),i=e("a2d3c6a"),c=e("8ba532b"),r=e("bdc8375"),b=e("8beedab"),d=e("fb32b1a"),o=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"diff-editor"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/DiffEditorControlSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:d.i18n("bac53d3c739f7fb3327704efd5b40eee")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-columns"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"diff-editor-plugin"}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:"左右两边的代码做对比，支持的语言包括：".concat(i.availableLanguages.slice(0,10).join("，"),"等等")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/form/diff-editor"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[d.i18n("55b45c73ae417c4dead67905b1550e85")]}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"diff-editor",label:d.i18n("0517b74cbe247a903faf40991a5a335f"),name:"diff"}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"form",className:"text-left",mode:"horizontal",wrapWithPanel:!1,body:[n.__assign(n.__assign({},a.scaffold),{value:"Hello World\nLine 1\nNew line\nBla Bla",diffValue:"Hello World\nLine 2"})]}}),Object.defineProperty(a,"events",{enumerable:!0,configurable:!0,writable:!0,value:[{eventName:"change",eventLabel:d.i18n("cadf0e302ddbc6fdbf005aed670b5e3e"),description:d.i18n("6006074bdabc639b86f42aa18876e33a"),dataSchema:[{type:"object",properties:{"event.data.value":{type:"string",title:d.i18n("efa3ddc1e26ed5d8cf7d9855cc7bd42e")}}}]},{eventName:"focus",eventLabel:d.i18n("ab0710b367acefa1d6a78e2338291e86"),description:d.i18n("42f04184315801c372989820106cc4ee"),dataSchema:[{type:"object",properties:{"event.data.value":{type:"string",title:d.i18n("efa3ddc1e26ed5d8cf7d9855cc7bd42e")}}}]},{eventName:"blur",eventLabel:d.i18n("fc96a5f1b79cb734afe08e401b6ba5e7"),description:d.i18n("58ec44a580ba7cdcdf65985f5c44940c"),dataSchema:[{type:"object",properties:{"event.data.value":{type:"string",title:d.i18n("efa3ddc1e26ed5d8cf7d9855cc7bd42e")}}}]}]}),Object.defineProperty(a,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[{actionType:"clear",actionLabel:d.i18n("288f0c404c4e546aa3683ff5054e85e2"),description:d.i18n("c374a44713fa5ff5da2565beb398c7d3")},{actionType:"reset",actionLabel:d.i18n("4b9c3271dc2f299dc3aeffb369187513"),description:d.i18n("8db57ba01ffb9bf29c1656de5f0208f5")},{actionType:"focus",actionLabel:d.i18n("ab0710b367acefa1d6a78e2338291e86"),description:d.i18n("b42cb49fc7c4ec140697e6d78c39e585")},{actionType:"setValue",actionLabel:d.i18n("8f40db3b25528063f1b6a59602a05cd5"),description:d.i18n("0310aa5a05fe07147d8b7ef20616f659")}]}),Object.defineProperty(a,"notRenderFormZone",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:d.i18n("bac53d3c739f7fb3327704efd5b40eee")}),Object.defineProperty(a,"panelJustify",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return c.getSchemaTpl("tabs",[{title:d.i18n("24d67862f87f439db7ca957aecb77cce"),body:c.getSchemaTpl("collapseGroup",[{title:d.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[c.getSchemaTpl("layout:originPosition",{value:"left-top"}),c.getSchemaTpl("formItemName",{required:!0}),c.getSchemaTpl("label"),{label:d.i18n("295bb704f5205801d57d672780b94117"),name:"language",type:"select",value:"javascript",searchable:!0,options:i.availableLanguages.concat()},c.getSchemaTpl("valueFormula",{rendererSchema:{type:"textarea",value:null==e?void 0:e.schema.diffValue},label:d.i18n("2a69150aa382f6a309c03a96145d4266"),name:"diffValue",mode:"vertical"}),c.getSchemaTpl("valueFormula",{rendererSchema:{type:"textarea",value:null==e?void 0:e.schema.value},label:d.i18n("a71e655ab56c9962742f72623f67ca76"),mode:"vertical"}),c.getSchemaTpl("labelRemark"),c.getSchemaTpl("remark"),c.getSchemaTpl("description"),c.getSchemaTpl("autoFillApi")]},c.getSchemaTpl("status",{isFormItem:!0,unsupportStatic:!0}),c.getSchemaTpl("validation",{tag:r.ValidatorTag.All})])},{title:d.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:c.getSchemaTpl("collapseGroup",[c.getSchemaTpl("style:formItem",{renderer:e.info.renderer,schema:[{name:"size",type:"select",pipeIn:c.defaultValue(""),pipeOut:c.undefinedPipeOut,label:d.i18n("b3b97a293baac13db6367aba5539a09c"),options:[{label:d.i18n("18c63459a2c069022c7790430f761214"),value:""},{label:d.i18n("aed1dfbc31703955e64806b799b67645"),value:"md"},{label:d.i18n("ab18e30c0dc4093ceeda8961fac3d1f4"),value:"lg"},{label:d.i18n("3386da5f56fac758ed0f18e024ecb943"),value:"xl"},{label:d.i18n("949934d97c42801151673a51d3adc421"),value:"xxl"}]}]}),c.getSchemaTpl("style:classNames",{unsupportStatic:!0})])},{title:d.i18n("10b2761db5a8e089049df39675abc550"),className:"p-none",body:[c.getSchemaTpl("eventControl",n.__assign({name:"onEvent"},b.getEventControlConfig(a.manager,e)))]}])}}),a}return n.__extends(a,e),Object.defineProperty(a.prototype,"filterProps",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return e.disabled=!0,e}}),a}(c.BasePlugin);c.registerEditorPlugin(o),a.DiffEditorControlPlugin=o}));