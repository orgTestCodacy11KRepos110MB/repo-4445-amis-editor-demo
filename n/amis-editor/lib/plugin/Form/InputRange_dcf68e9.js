amis.define("62b4db2",(function(e,a,n,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=e("849c8c1"),i=e("8ba532b"),b=e("bdc8375"),r=e("8beedab"),c=e("fb32b1a"),d=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"input-range"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/RangeControlSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:c.i18n("6036c91d6b0b6d1a2468684e597d9f70")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-sliders"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"input-range-plugin"}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:c.i18n("4c65f10eacbfaf580236b5cbe2de68de")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/form/input-range"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[c.i18n("55b45c73ae417c4dead67905b1550e85")]}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"input-range",label:c.i18n("6036c91d6b0b6d1a2468684e597d9f70"),name:"range"}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"form",className:"text-left",mode:"horizontal",wrapWithPanel:!1,body:[l.__assign({},a.scaffold)]}}),Object.defineProperty(a,"notRenderFormZone",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"events",{enumerable:!0,configurable:!0,writable:!0,value:[{eventName:"change",eventLabel:c.i18n("755955372bcc0c7ebf161a656bc389b3"),description:c.i18n("0a6a4aee139530801791c556e7177a7f"),dataSchema:[{type:"object",properties:{"event.data.value":{type:"string",title:c.i18n("e52c2701b682679d6c670a8578cfa382")}}}]},{eventName:"focus",eventLabel:c.i18n("ab0710b367acefa1d6a78e2338291e86"),description:c.i18n("f34b1a3e26aadb6f60c546dbe9c62232"),dataSchema:[{type:"object",properties:{"event.data.value":{type:"string",title:c.i18n("404625f170839b2a24d7ab65304c2fe7")}}}]},{eventName:"blur",eventLabel:c.i18n("fc96a5f1b79cb734afe08e401b6ba5e7"),description:c.i18n("7c9ec5db3bf23f367c1a905d356aab5c"),dataSchema:[{type:"object",properties:{"event.data.value":{type:"string",title:c.i18n("404625f170839b2a24d7ab65304c2fe7")}}}]}]}),Object.defineProperty(a,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[{actionType:"clear",actionLabel:c.i18n("288f0c404c4e546aa3683ff5054e85e2"),description:c.i18n("1659f1112dd649ec55390fe7c8e3b1d0")},{actionType:"reset",actionLabel:c.i18n("4b9c3271dc2f299dc3aeffb369187513"),description:c.i18n("8db57ba01ffb9bf29c1656de5f0208f5")},{actionType:"setValue",actionLabel:c.i18n("8f40db3b25528063f1b6a59602a05cd5"),description:c.i18n("0310aa5a05fe07147d8b7ef20616f659")}]}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:c.i18n("6036c91d6b0b6d1a2468684e597d9f70")}),Object.defineProperty(a,"panelJustify",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return i.getSchemaTpl("tabs",[{title:c.i18n("24d67862f87f439db7ca957aecb77cce"),body:i.getSchemaTpl("collapseGroup",[{title:c.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[i.getSchemaTpl("layout:originPosition",{value:"left-top"}),i.getSchemaTpl("formItemName",{required:!0}),i.getSchemaTpl("label",{label:"Label"}),{label:c.i18n("7220e4d5f9f65e4fadee5183f2e0c54d"),name:"multiple",type:"select",value:!1,options:[{label:c.i18n("9ec172e2cdff6146d623087d567c8574"),value:!1},{label:c.i18n("753a8c54d3944e252be1af928b8e7afd"),value:!0}]},i.getSchemaTpl("valueFormula",{name:"value",rendererSchema:l.__assign(l.__assign({},null==e?void 0:e.schema),{type:"input-number"}),valueType:"number",visibleOn:"!data.multiple",pipeIn:i.defaultValue(0)}),i.getSchemaTpl("valueFormula",{name:"min",rendererSchema:l.__assign(l.__assign({},null==e?void 0:e.schema),{type:"input-number"}),pipeIn:i.defaultValue(0),needDeleteProps:["min"],label:c.i18n("c322edb884724d04842fc35f4d29a24e"),valueType:"number"}),i.getSchemaTpl("valueFormula",{name:"max",rendererSchema:l.__assign(l.__assign({},null==e?void 0:e.schema),{type:"input-number"}),pipeIn:i.defaultValue(100),needDeleteProps:["max"],label:c.i18n("5da893141114a59da868052b3a17a79a"),valueType:"number"}),{label:c.i18n("225f3ed00750ae78ad1e6ea42c8f5087"),type:"input-group",name:"value",visibleOn:"data.multiple",className:"inputGroup-addOn-no-border",body:[{type:"input-number",validations:"isNumeric",name:"value.min",value:0},{type:"html",html:"-",className:"inputGroup-split-line"},{type:"input-number",validations:"isNumeric",name:"value.max",value:100}]},{label:c.i18n("d26404c10871481ab6bbb4837a34ae95"),name:"step",type:"input-number",value:1,pipeOut:function(e){return e||1}},i.getSchemaTpl("unit"),i.getSchemaTpl("switch",{name:"tooltipVisible",label:c.i18n("e48d95a94e49b81b12a0113a5c253d8f"),value:void 0,pipeOut:function(e){return!!e&&void 0},pipeIn:function(e){return void 0===e||!0===e}}),{type:"container",className:"ae-ExtendMore mb-2",visibleOn:"data.tooltipVisible === undefined",body:[{type:"select",name:"tooltipPlacement",label:c.i18n("a465db53b8c98f42caa15ca5662f9c90"),value:"auto",options:[{label:c.i18n("3aed2c11e95a9c0ea1d853d4aee72e8c"),value:"auto"},{label:c.i18n("af767b7e4ae069d54f9ea839858d4c6d"),value:"top"},{label:c.i18n("3850a186c3235bc646d4c2f79cebac36"),value:"bottom"},{label:c.i18n("d2aff1417831aa621c16cd5b95306b4b"),value:"left"},{label:c.i18n("4d9c32c23df5d234e629c922c58d8e12"),value:"right"}]}]},i.getSchemaTpl("switch",{name:"showInput",label:c.i18n("1d1a0bd85740653320d80f0d6e0918e7"),value:!1}),i.getSchemaTpl("switch",{name:"clearable",label:c.i18n("d22aa5f57ff8679ee7b7d473ef31417d"),value:!1,visibleOn:"!!data.showInput"}),i.getSchemaTpl("autoFillApi")]},{title:c.i18n("15628d1d85aee23c229c528a70419414"),body:[{type:"ae-partsControl",mode:"normal"},{type:"ae-marksControl",mode:"normal",name:"marks"}]},i.getSchemaTpl("status",{isFormItem:!0}),i.getSchemaTpl("validation",{tag:b.ValidatorTag.MultiSelect})])},{title:c.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:[i.getSchemaTpl("collapseGroup",[i.getSchemaTpl("style:formItem",{renderer:e.info.renderer}),i.getSchemaTpl("style:classNames")])]},{title:c.i18n("10b2761db5a8e089049df39675abc550"),className:"p-none",body:[i.getSchemaTpl("eventControl",l.__assign({name:"onEvent"},r.getEventControlConfig(a.manager,e)))]}])}}),a}return l.__extends(a,e),a}(i.BasePlugin);i.registerEditorPlugin(d),a.RangeControlPlugin=d}));