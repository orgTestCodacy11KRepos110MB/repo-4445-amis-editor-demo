amis.define("7a5d282",(function(e,a,r,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=e("849c8c1"),i=e("8ba532b"),n=e("fb32b1a"),c=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"iframe"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/IFrameSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:"iFrame"}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:n.i18n("713315591970d7c8b49d1c732fe54fde")}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[n.i18n("22c799040acdb2601b437ed5449de076")]}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-window-maximize"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"iframe-plugin"}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"iframe",src:"//www.baidu.com"}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"tpl",tpl:"iFrame"}}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:"iFrame"}),Object.defineProperty(a,"panelJustify",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return i.getSchemaTpl("tabs",[{title:n.i18n("24d67862f87f439db7ca957aecb77cce"),body:i.getSchemaTpl("collapseGroup",[{title:n.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[i.getSchemaTpl("layout:originPosition",{value:"left-top"}),{type:"ae-textareaFormulaControl",name:"src",mode:"normal",label:n.i18n("8f1c078c6d42759e6ccb1a9bf35f1629")}]},i.getSchemaTpl("status")])},{title:n.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:[i.getSchemaTpl("collapseGroup",t.__spreadArray([{title:n.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[i.getSchemaTpl("style:widthHeight",{widthSchema:{label:i.tipedLabel(n.i18n("c28479019e24e0e4745f4948e9e97ee7"),n.i18n("51ad722113289f70b6d77c78ddf0c64a")),pipeIn:i.defaultValue("100%")},heightSchema:{label:i.tipedLabel(n.i18n("c1df04eec5fa0857bc0df2d68d8e953c"),n.i18n("c78d9b9ab9db5951eb5526e8a46677d9")),pipeIn:i.defaultValue("100%")}})]},i.getSchemaTpl("style:classNames",{isFormItem:!1})],i.getSchemaTpl("style:common",[],"border"),!0))]}])}}),a}return t.__extends(a,e),Object.defineProperty(a.prototype,"renderRenderer",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return this.renderPlaceholder("IFrame 页面（".concat(e.src,"）"),e.key,e.style)}}),a}(i.BasePlugin);i.registerEditorPlugin(c),a.IFramePlugin=c}));