amis.define("e6fbe55",(function(e,a,t,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=e("849c8c1"),i=e("8ba532b"),c=e("8beedab"),r=e("fb32b1a");i.setSchemaTpl("tpl:content",{label:r.i18n("edb5acdc9ee5e75fbc238ab4a0300eaf"),type:"ae-textareaFormulaControl",mode:"normal",visibleOn:"data.wrapperComponent !== undefined",pipeIn:function(e,a){return e||a&&a.html},name:"tpl"}),i.setSchemaTpl("tpl:rich-text",{label:r.i18n("2d711b09bd0db0ad240cc83b30dd8014"),type:"input-rich-text",mode:"normal",buttons:["paragraphFormat","quote","textColor","backgroundColor","|","bold","italic","underline","strikeThrough","|","formatOL","formatUL","align","|","insertLink","insertImage","insertTable","|","undo","redo","fullscreen"],minRows:5,language:"html",visibleOn:"data.wrapperComponent === undefined",pipeIn:function(e,a){return e||a&&a.html},name:"tpl"}),i.setSchemaTpl("tpl:wrapperComponent",{name:"wrapperComponent",type:"select",pipeIn:function(e){return void 0===e?"rich-text":e},pipeOut:function(e){return"rich-text"===e?void 0:e},label:r.i18n("b1f824deef0d11e1fe3b73167a902e31"),options:[{label:r.i18n("74cfa7e77be335e8e5489a00ef099cb9"),value:""},{label:r.i18n("d482086f653d92fa8f1011d39738dba3"),value:"p"},{label:r.i18n("ae27115431c46fa374ac28200304f341"),value:"h1"},{label:r.i18n("de86106d6632da3fafb946f85ba91324"),value:"h2"},{label:r.i18n("27f2c5c60f373a4380ec107ad8895f0e"),value:"h3"},{label:r.i18n("c961174771e843ac4046b2b21c49424b"),value:"h4"},{label:r.i18n("a791de104833c917f801c1976b9af960"),value:"h5"},{label:r.i18n("de2687f9a16fea3654be84c74137b805"),value:"h6"},{label:r.i18n("e2591e971f4c28db7c80a5f546084a1d"),value:"rich-text"}],onChange:function(e,a,t,n){(void 0===e||void 0===a)&&n.setValueByName("tpl","")}});var b=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"tpl"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/TplSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("ca746b1ff10193a3ce20878dec04a733")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-file-o"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"plain-plugin"}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("65862c97143c6c5479e0c623093a25d6")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/tpl"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[r.i18n("027446c2f9070b0f5b16a18208bf5fc7")]}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"tpl",tpl:r.i18n("38accbc34901ee6fd7bd7cd9f92f0a2a")}}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"tpl",tpl:r.i18n("590e147e49735ebbfc51ae2175c36eb0"),inline:!0,wrapperComponent:""}}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("ca746b1ff10193a3ce20878dec04a733")}),Object.defineProperty(a,"panelJustify",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"events",{enumerable:!0,configurable:!0,writable:!0,value:[{eventName:"click",eventLabel:r.i18n("4363c17ebb346b646af55bd8c8075915"),description:r.i18n("7af5e3ef39ff71d39fe3f645c8079124"),dataSchema:[{type:"object",properties:{nativeEvent:{type:"object",title:r.i18n("64561733c68085af3d09315c1d4d7ed6")}}}]},{eventName:"mouseenter",eventLabel:r.i18n("f6d767f39ba3bf955077a3c0ce81e581"),description:r.i18n("bcdd89d453da0dc0622a2f3189728357"),dataSchema:[{type:"object",properties:{nativeEvent:{type:"object",title:r.i18n("64561733c68085af3d09315c1d4d7ed6")}}}]},{eventName:"mouseleave",eventLabel:r.i18n("e272b0b8c7fedc670a87075514d9b49f"),description:r.i18n("727309bc724ff237c5e2cdf7a90cf28e"),dataSchema:[{type:"object",properties:{nativeEvent:{type:"object",title:r.i18n("64561733c68085af3d09315c1d4d7ed6")}}}]}]}),Object.defineProperty(a,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var t=/\/cell\/field\/tpl$/.test(e.path);return i.getSchemaTpl("tabs",[{title:r.i18n("24d67862f87f439db7ca957aecb77cce"),body:i.getSchemaTpl("collapseGroup",[{title:r.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[i.getSchemaTpl("layout:originPosition",{value:"left-top"}),t?null:i.getSchemaTpl("tpl:wrapperComponent"),i.getSchemaTpl("switch",{label:i.tipedLabel(r.i18n("2fb0853874c2cc8cc42f0c7520af662a"),r.i18n("47ae015d04dda362d066e4f9ac09d647")),name:"inline",pipeIn:i.defaultValue(!0),hiddenOn:'data.wrapperComponent !== ""'}),i.getSchemaTpl("tpl:content"),i.getSchemaTpl("tpl:rich-text")]},i.getSchemaTpl("status")])},{title:r.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:i.getSchemaTpl("collapseGroup",l.__spreadArray(l.__spreadArray([],i.getSchemaTpl("style:common",["layout"]),!0),[i.getSchemaTpl("style:classNames",{isFormItem:!1})],!1))},{title:r.i18n("10b2761db5a8e089049df39675abc550"),className:"p-none",body:[i.getSchemaTpl("eventControl",l.__assign({name:"onEvent"},c.getEventControlConfig(a.manager,e)))]}])}}),Object.defineProperty(a,"popOverBody",{enumerable:!0,configurable:!0,writable:!0,value:[i.getSchemaTpl("tpl:content"),i.getSchemaTpl("tpl:rich-text"),i.getSchemaTpl("tpl:wrapperComponent")]}),a}return l.__extends(a,e),a}(i.BasePlugin);i.registerEditorPlugin(b),a.TplPlugin=b}));