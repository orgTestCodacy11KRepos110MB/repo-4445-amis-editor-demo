amis.define("0858018",(function(e,a,t,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("849c8c1"),l=e("8ba532b"),c=e("bdc8375"),r=e("8beedab"),b=e("fb32b1a"),o=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"radios"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/RadiosControlSchema.json"}),Object.defineProperty(a,"order",{enumerable:!0,configurable:!0,writable:!0,value:-460}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("9913107b19cb6012250134ff91377430")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-dot-circle-o"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"radios-plugin"}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("b7a4abc1e4e975c9df5bb9d9cf4823ba")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/form/radios"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[b.i18n("55b45c73ae417c4dead67905b1550e85")]}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"radios",label:b.i18n("9913107b19cb6012250134ff91377430"),name:"radios",options:[{label:b.i18n("05f87b331e1c97691776d93a6598373f"),value:"A"},{label:b.i18n("f38c0a46797523b11051e35ec0f82a42"),value:"B"}]}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"form",className:"text-left",mode:"horizontal",wrapWithPanel:!1,body:[i.__assign(i.__assign({},a.scaffold),{value:"A"})]}}),Object.defineProperty(a,"notRenderFormZone",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("9913107b19cb6012250134ff91377430")}),Object.defineProperty(a,"events",{enumerable:!0,configurable:!0,writable:!0,value:[{eventName:"change",eventLabel:b.i18n("755955372bcc0c7ebf161a656bc389b3"),description:b.i18n("2fc76872efce1eabd3b74a3e4fd5b976"),dataSchema:[{type:"object",properties:{"event.data.value":{type:"string",title:b.i18n("528609917710d813a55e5a6cecf1e458")},"event.data.selectedItems":{type:"object",title:b.i18n("029e280e119b028bffc51424d909c07d")},"event.data.items":{type:"array",title:b.i18n("cf965b232227a0e9d14f4f7e31b01c62")}}}]}]}),Object.defineProperty(a,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[{actionType:"clear",actionLabel:b.i18n("288f0c404c4e546aa3683ff5054e85e2"),description:b.i18n("c374a44713fa5ff5da2565beb398c7d3")},{actionType:"reset",actionLabel:b.i18n("4b9c3271dc2f299dc3aeffb369187513"),description:b.i18n("8db57ba01ffb9bf29c1656de5f0208f5")},{actionType:"reload",actionLabel:b.i18n("64ca9bab920a2983bcf270320d850d00"),description:b.i18n("9ef5597ac0b4da662bcd967da37eceb4")},{actionType:"setValue",actionLabel:b.i18n("8f40db3b25528063f1b6a59602a05cd5"),description:b.i18n("0310aa5a05fe07147d8b7ef20616f659")}]}),Object.defineProperty(a,"panelJustify",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return l.getSchemaTpl("tabs",[{title:b.i18n("24d67862f87f439db7ca957aecb77cce"),body:l.getSchemaTpl("collapseGroup",[{title:b.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[l.getSchemaTpl("layout:originPosition",{value:"left-top"}),l.getSchemaTpl("formItemName",{required:!0}),l.getSchemaTpl("label"),l.getSchemaTpl("valueFormula",{rendererSchema:null==e?void 0:e.schema,useSelectMode:!0,visibleOn:"this.options && this.options.length > 0 && this.selectFirst !== true"}),l.getSchemaTpl("labelRemark"),l.getSchemaTpl("remark"),l.getSchemaTpl("autoFillApi")]},{title:b.i18n("ea15ae2b7fba76c83eec6d0986d15197"),body:[l.getSchemaTpl("optionControlV2"),l.getSchemaTpl("switch",{label:b.i18n("1e890599eec94efccec337cd474f7f1b"),name:"selectFirst",horizontal:{justify:!0,left:5},visibleOn:"!this.options"})]},l.getSchemaTpl("status",{isFormItem:!0}),l.getSchemaTpl("validation",{tag:c.ValidatorTag.MultiSelect})])},{title:b.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:[l.getSchemaTpl("collapseGroup",[l.getSchemaTpl("style:formItem",{renderer:e.info.renderer,schema:[l.getSchemaTpl("switch",{label:b.i18n("46110787e4774b81418b274e9b06127e"),name:"inline",hiddenOn:'data.mode === "inline"',pipeIn:l.defaultValue(!0)}),{label:b.i18n("83a00680e0872e2a35496be7e12c1309"),name:"columnsCount",hiddenOn:'data.mode === "inline" || data.inline !== false',type:"input-range",min:1,max:6,pipeIn:l.defaultValue(1)}]}),l.getSchemaTpl("style:classNames",{schema:[l.getSchemaTpl("className",{label:b.i18n("c30264927c3c170efd2e7763becf12fc"),name:"itemClassName"})]})])]},{title:b.i18n("10b2761db5a8e089049df39675abc550"),className:"p-none",body:[l.getSchemaTpl("eventControl",i.__assign({name:"onEvent"},r.getEventControlConfig(a.manager,e)))]}])}}),a}return i.__extends(a,e),a}(l.BasePlugin);l.registerEditorPlugin(o),a.RadiosControlPlugin=o}));