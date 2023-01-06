amis.define("355c25d",(function(e,a,n,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=e("849c8c1"),i=e("8ba532b"),c=e("bdc8375"),r=e("8beedab"),b=e("fb32b1a"),o=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"input-number"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/NumberControlSchema.json"}),Object.defineProperty(a,"order",{enumerable:!0,configurable:!0,writable:!0,value:-410}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("1e65b8181e9a40e76b86e2c261cafbe0")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-sort-numeric-asc"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"input-number-plugin"}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("c45782c425bfc31824af8129bd6e0282")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/form/input-number"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[b.i18n("55b45c73ae417c4dead67905b1550e85")]}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"input-number",label:b.i18n("55d4790c5d819cd0462cbe89561b0dd4"),name:"number",keyboard:!0}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"form",className:"text-left",mode:"horizontal",wrapWithPanel:!1,body:[t.__assign(t.__assign({},a.scaffold),{value:88})]}}),Object.defineProperty(a,"notRenderFormZone",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("1e65b8181e9a40e76b86e2c261cafbe0")}),Object.defineProperty(a,"panelJustify",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"events",{enumerable:!0,configurable:!0,writable:!0,value:[{eventName:"change",eventLabel:b.i18n("755955372bcc0c7ebf161a656bc389b3"),description:b.i18n("b2a5322c8dbc0d8343315cafbd39b7ce"),dataSchema:[{type:"object",properties:{"event.data.value":{type:"string",title:b.i18n("acc945d0c8449dce7dc1441f466ec413")}}}]},{eventName:"focus",eventLabel:b.i18n("ab0710b367acefa1d6a78e2338291e86"),description:b.i18n("5f914e36c49db618d06981df7b3c4d81"),dataSchema:[{type:"object",properties:{"event.data.value":{type:"string",title:b.i18n("e52c2701b682679d6c670a8578cfa382")}}}]},{eventName:"blur",eventLabel:b.i18n("fc96a5f1b79cb734afe08e401b6ba5e7"),description:b.i18n("efdd0d8923130f281b54506eef2121cf"),dataSchema:[{type:"object",properties:{"event.data.value":{type:"string",title:b.i18n("e52c2701b682679d6c670a8578cfa382")}}}]}]}),Object.defineProperty(a,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[{actionType:"clear",actionLabel:b.i18n("288f0c404c4e546aa3683ff5054e85e2"),description:b.i18n("0849471829a565a8af6b70a46346e574")},{actionType:"reset",actionLabel:b.i18n("4b9c3271dc2f299dc3aeffb369187513"),description:b.i18n("770fe9e7899cd310b035ef50a39ab2ae")},{actionType:"setValue",actionLabel:b.i18n("8f40db3b25528063f1b6a59602a05cd5"),description:b.i18n("0310aa5a05fe07147d8b7ef20616f659")}]}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return i.getSchemaTpl("tabs",[{title:b.i18n("24d67862f87f439db7ca957aecb77cce"),body:i.getSchemaTpl("collapseGroup",[{title:b.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[i.getSchemaTpl("layout:originPosition",{value:"left-top"}),i.getSchemaTpl("formItemName",{required:!0}),i.getSchemaTpl("label"),{type:"switch",label:i.tipedLabel(b.i18n("32f13c9db34f638c2c5cf2bf19326ebf"),b.i18n("8572d14f815d840bd9e940cd8ee4e380")),name:"keyboard",value:!0,inputClassName:"is-inline"},i.getSchemaTpl("kilobitSeparator"),i.getSchemaTpl("valueFormula",{rendererSchema:null==e?void 0:e.schema,valueType:"number"}),i.getSchemaTpl("valueFormula",{name:"min",rendererSchema:t.__assign(t.__assign({},null==e?void 0:e.schema),{value:null==e?void 0:e.schema.min}),needDeleteProps:["min"],label:b.i18n("c322edb884724d04842fc35f4d29a24e"),valueType:"number"}),i.getSchemaTpl("valueFormula",{name:"max",rendererSchema:t.__assign(t.__assign({},null==e?void 0:e.schema),{value:null==e?void 0:e.schema.max}),needDeleteProps:["max"],label:b.i18n("5da893141114a59da868052b3a17a79a"),valueType:"number"}),{type:"input-number",name:"step",label:b.i18n("d26404c10871481ab6bbb4837a34ae95"),min:0,value:1},{type:"input-number",name:"precision",label:i.tipedLabel(b.i18n("e284e64008fd8b066da04bca335d032a"),b.i18n("b317cbf67c94f986fc44cf4cbc2280c6")),min:1,max:100},i.getSchemaTpl("prefix"),i.getSchemaTpl("suffix"),i.getSchemaTpl("unitOptions"),i.getSchemaTpl("labelRemark"),i.getSchemaTpl("remark"),i.getSchemaTpl("placeholder"),i.getSchemaTpl("description"),i.getSchemaTpl("autoFillApi")]},i.getSchemaTpl("status",{isFormItem:!0}),i.getSchemaTpl("validation",{tag:c.ValidatorTag.MultiSelect})],t.__assign(t.__assign({},null==e?void 0:e.schema),{configTitle:"props"}))},{title:b.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:[i.getSchemaTpl("collapseGroup",[i.getSchemaTpl("style:formItem",{renderer:e.info.renderer,schema:[{label:b.i18n("8c80ed1f85135cc9153d0b7406ac5b38"),name:"displayMode",type:"select",pipeIn:i.defaultValue("base"),options:[{label:b.i18n("0a8c852e27763a18ce5b72a87ba8b5ba"),value:"base"},{label:b.i18n("de93563a076f72b3e919870c9dad9935"),value:"enhance"}]}]}),i.getSchemaTpl("style:classNames")],t.__assign(t.__assign({},null==e?void 0:e.schema),{configTitle:"style"}))]},{title:b.i18n("10b2761db5a8e089049df39675abc550"),className:"p-none",body:[i.getSchemaTpl("eventControl",t.__assign({name:"onEvent"},r.getEventControlConfig(a.manager,e)))]}])}}),a}return t.__extends(a,e),a}(i.BasePlugin);i.registerEditorPlugin(o),a.NumberControlPlugin=o}));