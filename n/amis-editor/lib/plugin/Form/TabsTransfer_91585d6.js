amis.define("8ddd964",(function(e,a,l,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var b=e("849c8c1"),t=e("cc4bbf0"),i=e("8ba532b"),c=e("8beedab"),r=e("fb32b1a");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=d(t),o=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"tabs-transfer"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/TransferControlSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("617a63f1b19b5aad029f973479bac917")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-th-list"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"tabs-transfer-plugin"}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("4f26f1edebcdeea90f6e4247a501dbaf")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/form/transfer"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[r.i18n("55b45c73ae417c4dead67905b1550e85")]}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{label:r.i18n("617a63f1b19b5aad029f973479bac917"),type:"tabs-transfer",name:"a",sortable:!0,searchable:!0,options:[{label:r.i18n("ab5dea29793d933fa7b5487a7309df6a"),selectMode:"tree",children:[{label:r.i18n("71f8043aefd52572b172e7d1fbd5af57"),children:[{label:r.i18n("fda93c79275b812a6c1c189fbebf8b08"),value:"zhugeliang"}]},{label:r.i18n("573cb0d34bd1cdc7b368c59db9b7bb7d"),children:[{label:r.i18n("e37a86d1a1dbed0cd53c95582977f075"),value:"caocao"},{label:r.i18n("ccddd2de691ff2d56b651877f72d90ed"),value:"zhongwuyan"}]},{label:r.i18n("c0db8e7b42528eeae96310c6629e53b3"),children:[{label:r.i18n("293040fc607f40caf6d6e16042012182"),value:"libai"},{label:r.i18n("b5256ec780343c4e20e397b43cab96a9"),value:"hanxin"},{label:r.i18n("49dcf9f88e7b7b8ca7448631021d7d12"),value:"yunzhongjun"}]}]},{label:r.i18n("1fd02a90c38333badc226309fea6fecb"),selectMode:"chained",children:[{label:r.i18n("71f8043aefd52572b172e7d1fbd5af57"),children:[{label:r.i18n("fda93c79275b812a6c1c189fbebf8b08"),value:"zhugeliang2"}]},{label:r.i18n("573cb0d34bd1cdc7b368c59db9b7bb7d"),children:[{label:r.i18n("e37a86d1a1dbed0cd53c95582977f075"),value:"caocao2"},{label:r.i18n("ccddd2de691ff2d56b651877f72d90ed"),value:"zhongwuyan2"}]},{label:r.i18n("c0db8e7b42528eeae96310c6629e53b3"),children:[{label:r.i18n("293040fc607f40caf6d6e16042012182"),value:"libai2"},{label:r.i18n("b5256ec780343c4e20e397b43cab96a9"),value:"hanxin2"},{label:r.i18n("49dcf9f88e7b7b8ca7448631021d7d12"),value:"yunzhongjun2"}]}]}]}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"form",className:"text-left",mode:"horizontal",wrapWithPanel:!1,body:[b.__assign({},a.scaffold)]}}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:r.i18n("617a63f1b19b5aad029f973479bac917")}),Object.defineProperty(a,"events",{enumerable:!0,configurable:!0,writable:!0,value:[{eventName:"change",eventLabel:r.i18n("755955372bcc0c7ebf161a656bc389b3"),description:r.i18n("2fc76872efce1eabd3b74a3e4fd5b976"),dataSchema:[{type:"object",properties:{"event.data.value":{type:"string",title:r.i18n("528609917710d813a55e5a6cecf1e458")},"event.data.items":{type:"array",title:r.i18n("cf965b232227a0e9d14f4f7e31b01c62")}}}]},{eventName:"tab-change",eventLabel:r.i18n("e1112a529dc969a03bbbb409905ff2ec"),description:r.i18n("d202bc660c4d2eeb58e194b6320bd235"),dataSchema:[{type:"object",properties:{"event.data.key":{type:"string",title:r.i18n("9e7a97a3d043f566f2435329e01e09f9")}}}]}]}),Object.defineProperty(a,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[{actionType:"clear",actionLabel:r.i18n("288f0c404c4e546aa3683ff5054e85e2"),description:r.i18n("91208131116f2823993daf99f15e1325")},{actionType:"reset",actionLabel:r.i18n("4b9c3271dc2f299dc3aeffb369187513"),description:r.i18n("dda222620b789d07c2c5c279475caaf1")},{actionType:"changeTabKey",actionLabel:r.i18n("2ac24a383a1faae33f81772b757b2817"),description:r.i18n("91f894b900f593c848e5b21f2b414b05"),descDetail:function(e){return f.default.createElement("div",null,f.default.createElement("span",{className:"variable-right"},null==e?void 0:e.__rendererLabel),"修改选中tab")}},{actionType:"setValue",actionLabel:r.i18n("8f40db3b25528063f1b6a59602a05cd5"),description:r.i18n("0310aa5a05fe07147d8b7ef20616f659")}]}),Object.defineProperty(a,"notRenderFormZone",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelJustify",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelDefinitions",{enumerable:!0,configurable:!0,writable:!0,value:{options:{label:r.i18n("25ae4ca8d4b8a67b273066a97a516327"),name:"options",type:"combo",multiple:!0,multiLine:!0,draggable:!0,mode:"normal",addButtonText:r.i18n("65d76d0590aa6e05d61fe8db4c6a11ca"),scaffold:{label:"",value:""},items:[{type:"group",body:[i.getSchemaTpl("label",{label:!1,placeholder:r.i18n("d7ec2d3fea4756bc1642e0f10c180cf5"),required:!0}),{type:"input-text",name:"value",placeholder:r.i18n("fe7509e0ed085b86f07e3e9975cc5b3d"),unique:!0}]},{$ref:"options",label:r.i18n("72453d792655604f1fab821146133d7d"),name:"children",addButtonText:r.i18n("210da23d108e85b2f0bbfa85846cb792")}]}}}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return e.info.renderer,i.getSchemaTpl("tabs",[{title:r.i18n("24d67862f87f439db7ca957aecb77cce"),body:i.getSchemaTpl("collapseGroup",[{title:r.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[i.getSchemaTpl("layout:originPosition",{value:"left-top"}),i.getSchemaTpl("formItemName",{required:!0}),i.getSchemaTpl("label"),i.getSchemaTpl("searchable"),i.getSchemaTpl("api",{label:r.i18n("791959f9b90734dce08da79f4ac27a41"),name:"searchApi"}),{label:r.i18n("6eaeb8ccaa8473e2b985095be2bf3cd1"),name:"searchResultMode",type:"select",mode:"normal",options:[{label:r.i18n("6541f1702af367c41a3127ed8511eb50"),value:"list"},{label:r.i18n("d58ba4b5e94680fcb08300e176502fb8"),value:"table"},{label:r.i18n("406573cea6af9b0c6462295108e1f5c0"),value:"tree"},{label:r.i18n("6c5358b981a475da2a83e95e4170647a"),value:"chained"}]},i.getSchemaTpl("sortable"),{label:r.i18n("0911a348aaf24601e633e318ccb8aace"),name:"selectTitle",type:"input-text",inputClassName:"is-inline "},{label:r.i18n("84a76ba52297727f6bb47d8a1cc74094"),name:"resultTitle",type:"input-text",inputClassName:"is-inline "}]},{title:r.i18n("ea15ae2b7fba76c83eec6d0986d15197"),body:[{$ref:"options",name:"options"},i.getSchemaTpl("source"),i.getSchemaTpl("loadingConfig",{visibleOn:"this.source || !this.options"},{context:e}),i.getSchemaTpl("joinValues"),i.getSchemaTpl("delimiter"),i.getSchemaTpl("extractValue"),i.getSchemaTpl("autoFillApi",{visibleOn:"!this.autoFill || this.autoFill.scene && this.autoFill.action"}),i.getSchemaTpl("autoFill",{visibleOn:"!this.autoFill || !this.autoFill.scene && !this.autoFill.action"})]},{title:r.i18n("dfac151de712ab0b3618072c8a7f0a0f"),body:[i.getSchemaTpl("virtualThreshold"),i.getSchemaTpl("virtualItemHeight")]},i.getSchemaTpl("status",{isFormItem:!0})])},{title:r.i18n("10b2761db5a8e089049df39675abc550"),className:"p-none",body:[i.getSchemaTpl("eventControl",b.__assign({name:"onEvent"},c.getEventControlConfig(a.manager,e)))]}])}}),a}return b.__extends(a,e),a}(i.BasePlugin);i.registerEditorPlugin(o),a.TabsTransferPlugin=o}));