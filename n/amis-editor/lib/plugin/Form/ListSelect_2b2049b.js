amis.define("8169899",(function(e,a,t,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("849c8c1"),l=e("8ba532b"),r=e("668181b"),b=e("fb32b1a"),c=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"list-select"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/ListControlSchema.json"}),Object.defineProperty(a,"order",{enumerable:!0,configurable:!0,writable:!0,value:-430}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("d22dfe420e4b00e000b93f94db3c856e")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-ellipsis-h"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"list-select-plugin"}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("2c05e451a6f2b2fe1cf55f7afb8c8423")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/form/list-select"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[b.i18n("55b45c73ae417c4dead67905b1550e85")]}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"list-select",label:b.i18n("3712972d84adf48acbd6ad24b4d75ad0"),name:"list",options:[{label:b.i18n("05f87b331e1c97691776d93a6598373f"),value:"A"},{label:b.i18n("f38c0a46797523b11051e35ec0f82a42"),value:"B"}]}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"form",className:"text-left",mode:"horizontal",wrapWithPanel:!1,body:[n.__assign(n.__assign({},a.scaffold),{value:"A"})]}}),Object.defineProperty(a,"notRenderFormZone",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("d22dfe420e4b00e000b93f94db3c856e")}),Object.defineProperty(a,"events",{enumerable:!0,configurable:!0,writable:!0,value:[{eventName:"change",eventLabel:b.i18n("755955372bcc0c7ebf161a656bc389b3"),description:b.i18n("2fc76872efce1eabd3b74a3e4fd5b976"),dataSchema:[{type:"object",properties:{"event.data.value":{type:"string",title:b.i18n("528609917710d813a55e5a6cecf1e458")}}}]}]}),Object.defineProperty(a,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[{actionType:"clear",actionLabel:b.i18n("288f0c404c4e546aa3683ff5054e85e2"),description:b.i18n("c374a44713fa5ff5da2565beb398c7d3")},{actionType:"reset",actionLabel:b.i18n("4b9c3271dc2f299dc3aeffb369187513"),description:b.i18n("8db57ba01ffb9bf29c1656de5f0208f5")},{actionType:"reload",actionLabel:b.i18n("64ca9bab920a2983bcf270320d850d00"),description:b.i18n("9ef5597ac0b4da662bcd967da37eceb4")},{actionType:"setValue",actionLabel:b.i18n("8f40db3b25528063f1b6a59602a05cd5"),description:b.i18n("0310aa5a05fe07147d8b7ef20616f659")}]}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return r.formItemControl({common:{replace:!0,body:[l.getSchemaTpl("layout:originPosition",{value:"left-top"}),l.getSchemaTpl("formItemName",{required:!0}),l.getSchemaTpl("label"),l.getSchemaTpl("multiple"),l.getSchemaTpl("extractValue"),l.getSchemaTpl("valueFormula",{rendererSchema:null==e?void 0:e.schema,mode:"vertical",useSelectMode:!0,visibleOn:"this.options && this.options.length > 0"})]},option:{body:[l.getSchemaTpl("optionControlV2",{description:b.i18n("6f6fa31a91b516b28ebee7a86a9b13e2")})]},status:{}},e)}}),a}return n.__extends(a,e),a}(l.BasePlugin);l.registerEditorPlugin(c),a.ListControlPlugin=c}));