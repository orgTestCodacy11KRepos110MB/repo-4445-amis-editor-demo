amis.define("abaef1e",(function(e,a,t,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("849c8c1"),n=e("167c905"),l=e("cc4bbf0"),b=e("8ba532b"),c=e("fb32b1a");function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=o(l),f=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"list"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/ListSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:c.i18n("3712972d84adf48acbd6ad24b4d75ad0")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:c.i18n("9f556fb46ecef854282d17e631578b1c")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/list"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[c.i18n("027446c2f9070b0f5b16a18208bf5fc7")]}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-list"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"list-plugin"}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"list",listItem:{body:[{type:"tpl",tpl:c.i18n("3bb4d608c6bee2b7b6d788417cde04e3")}],actions:[{icon:"fa fa-eye",type:"button"}]}}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:r.__assign(r.__assign({},a.scaffold),{items:[{a:1,b:2},{a:3,b:4},{a:5,b:6}]})}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:c.i18n("3712972d84adf48acbd6ad24b4d75ad0")}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var t="crud"===e.schema.type;return b.getSchemaTpl("tabs",[{title:c.i18n("22b777e6fcb613b8ba83ced9594cd07e"),body:[b.getSchemaTpl("layout:originPosition",{value:"left-top"}),{children:d.default.createElement(n.Button,{level:"danger",size:"sm",block:!0,onClick:a.editDetail.bind(a,e.id)},"配置成员详情")},{type:"divider"},b.getSchemaTpl("title"),t?null:{name:"source",type:"input-text",label:c.i18n("c11322c9cc43ce3c004cf03f5ac0acd0"),pipeIn:b.defaultValue("${items}"),description:c.i18n("7ea26d0cb93e59339daf6a1ac68624f3")},{name:"placeholder",pipeIn:b.defaultValue(c.i18n("1ac0e1626be43287983fe3e5559320eb")),type:"input-text",label:c.i18n("35ba83e053cef95e55dfffde279822b5")}]},{title:c.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:[b.getSchemaTpl("switch",{name:"showHeader",label:c.i18n("e18d033cc4baab3ebb329f6b29eb3cef"),pipeIn:b.defaultValue(!0)}),b.getSchemaTpl("switch",{name:"showFooter",label:c.i18n("412593f58b9d062a43cbe2ce38f4dc65"),pipeIn:b.defaultValue(!0)}),b.getSchemaTpl("className",{label:c.i18n("4434b33a8731a73613ba5fa1eb984efb")}),b.getSchemaTpl("className",{name:"listClassName",label:c.i18n("4e53bfe03e30bb3eae63d90d1f7f2a1c")}),b.getSchemaTpl("className",{name:"headerClassName",label:c.i18n("e494f1aa112068688ca863db7f39a0b5")}),b.getSchemaTpl("className",{name:"footerClassName",label:c.i18n("d267231d2d8b60e267acc7d7d9955ae2")})]},{title:c.i18n("33bf801796fd255b5f6147e33146669b"),body:[b.getSchemaTpl("ref"),b.getSchemaTpl("visible")]}])}}),a}return r.__extends(a,e),Object.defineProperty(a.prototype,"filterProps",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(e.isSlot)return e.value=[e.data],e;var a=r.__assign(r.__assign({},e.defaultData),e.data),t=Array.isArray(e.value)?e.value:"string"==typeof e.source?n.resolveVariable(e.source,a):n.resolveVariable("items",a);if(!Array.isArray(t)||!t.length){var i=this.buildMockData();e.value=b.repeatArray(i,1).map((function(e,a){return r.__assign(r.__assign({},e),{id:a+1})}))}var l=e.$schema,c=r.__rest(e,["$schema"]);return r.__assign(r.__assign({},b.JSONPipeOut(c)),{$schema:l})}}),Object.defineProperty(a.prototype,"buildMockData",{enumerable:!1,configurable:!0,writable:!0,value:function(){return{id:666,title:c.i18n("6cb01692eea2fa7066d20fe2b6ccaea3"),description:c.i18n("6cb01692eea2fa7066d20fe2b6ccaea3"),a:c.i18n("6cb01692eea2fa7066d20fe2b6ccaea3"),b:c.i18n("6cb01692eea2fa7066d20fe2b6ccaea3")}}}),Object.defineProperty(a.prototype,"editDetail",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var a=this.manager,t=a.store,i=t.getNodeById(e),n=t.getValueOf(e);i&&n&&this.manager.openSubEditor({title:c.i18n("84c04f1e9ce6a6a228228dd3fb96b99e"),value:r.__assign({},n.listItem),slot:{type:"list",listItem:"$$"},onChange:function(e){e=r.__assign(r.__assign({},n),{listItem:e}),a.panelChangeValue(e,b.diff(n,e))},data:{items:[this.buildMockData()]}})}}),Object.defineProperty(a.prototype,"buildEditorToolbar",{enumerable:!1,configurable:!0,writable:!0,value:function(e,a){var t=e.id,i=e.info,r=e.schema;("list"===i.renderer.name||"crud"===i.renderer.name&&"list"===r.mode)&&a.push({icon:"fa fa-expand",order:100,tooltip:c.i18n("39a6853b109ae98f1aabca90283d7edc"),onClick:this.editDetail.bind(this,t)})}}),Object.defineProperty(a.prototype,"buildEditorContextMenu",{enumerable:!1,configurable:!0,writable:!0,value:function(e,a){var t=e.id,i=e.schema;e.region;var r=e.info;e.selections.length||(null==r?void 0:r.plugin)!==this||("list"===r.renderer.name||"crud"===r.renderer.name&&"list"===i.mode)&&a.push("|",{label:c.i18n("84c04f1e9ce6a6a228228dd3fb96b99e"),onSelect:this.editDetail.bind(this,t)})}}),Object.defineProperty(a.prototype,"getRendererInfo",{enumerable:!1,configurable:!0,writable:!0,value:function(a){var t,i=this,n=a.renderer,l=a.schema;return l.$$id||"crud"!==(null===(t=l.$$editor)||void 0===t?void 0:t.renderer.name)||"list"!==n.name?e.prototype.getRendererInfo.call(this,a):r.__assign(r.__assign({},{id:l.$$editor.id}),{name:i.name,regions:i.regions,patchContainers:i.patchContainers,vRendererConfig:i.vRendererConfig,wrapperProps:i.wrapperProps,wrapperResolve:i.wrapperResolve,filterProps:i.filterProps,$schema:i.$schema,renderRenderer:i.renderRenderer})}}),a}(b.BasePlugin);b.registerEditorPlugin(f),a.ListPlugin=f}));