amis.define("6293fbf",(function(e,a,n,b){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=e("849c8c1"),i=e("8ba532b"),t=e("8beedab"),l=e("fb32b1a"),c=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"page"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/PageSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:l.i18n("59ceff465ad16932d8972191ad815dfb")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/page"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:l.i18n("22c799040acdb2601b437ed5449de076")}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-desktop"}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"page",regions:["body"],body:[{type:"tpl",tpl:l.i18n("2d711b09bd0db0ad240cc83b30dd8014")}]}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"page",className:"text-left b-a",asideClassName:"w-xs",title:l.i18n("32c65d8d7431e76029678ec7bb73a5ab"),subTitle:l.i18n("72cf373be86a38b29f6d2f15900b0da1"),aside:l.i18n("54002bbf7eb3da8346dd4be61d642bca"),body:l.i18n("2d711b09bd0db0ad240cc83b30dd8014")}}),Object.defineProperty(a,"events",{enumerable:!0,configurable:!0,writable:!0,value:[{eventName:"init",eventLabel:l.i18n("2cb472ff9cad0c89a033c53996b52053"),description:l.i18n("76ddcc0ad85aa4be6875b73244a64faf"),dataSchema:[{type:"object",properties:{"event.data":{type:"object",title:l.i18n("584e4b6108e132be92c9de09d7bbed72")}}}]},{eventName:"inited",eventLabel:l.i18n("9328b90ded33d16a873db5c0dbd815b8"),description:l.i18n("f3b97bd71a77cca1e9288089a537cf3b"),dataSchema:[{type:"object",properties:{"event.data":{type:"object",title:l.i18n("9787088794f42c7e476cf7580f81447e")}}}]},{eventName:"pullRefresh",eventLabel:l.i18n("5d758dc5e33ba0122c256d80c1572e88"),description:l.i18n("d6fdfa4f989be6586a7a29ea85522f24")}]}),Object.defineProperty(a,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[{actionType:"reload",actionLabel:l.i18n("64ca9bab920a2983bcf270320d850d00"),description:l.i18n("9ef5597ac0b4da662bcd967da37eceb4")},{actionType:"setValue",actionLabel:l.i18n("67b6bec14c39be3f2602271e2fe3bcde"),description:l.i18n("0310aa5a05fe07147d8b7ef20616f659")}]}),Object.defineProperty(a,"regions",{enumerable:!0,configurable:!0,writable:!0,value:[{key:"toolbar",label:l.i18n("012f602372cd2dbd639cd966c63e1f90"),preferTag:l.i18n("56e6db657d4775698984f883b71cb379")},{key:"aside",label:l.i18n("54002bbf7eb3da8346dd4be61d642bca"),placeholder:l.i18n("4f9fa9ee5b0604d97da73e77fdbc281e")},{key:"body",label:l.i18n("132a78bdf68d6d17bde00aa807bbf032"),placeholder:l.i18n("40fd4b2a194b2b1284a7f7f738b69640")}]}),Object.defineProperty(a,"wrapper",{enumerable:!0,configurable:!0,writable:!0,value:i.ContainerWrapper}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:l.i18n("59ceff465ad16932d8972191ad815dfb")}),Object.defineProperty(a,"panelJustify",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return[i.getSchemaTpl("tabs",[{title:l.i18n("24d67862f87f439db7ca957aecb77cce"),body:[i.getSchemaTpl("collapseGroup",[{title:l.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[{type:"checkboxes",name:"regions",label:l.i18n("0e82bfaaec104a9f0eeb14820b42e7c8"),pipeIn:function(e){return Array.isArray(e)?e:["body","toolbar","aside","header"]},pipeOut:function(e){return Array.isArray(e)&&e.length?e:["body","toolbar","aside","header"]},joinValues:!1,extractValue:!0,inline:!1,options:[{label:l.i18n("132a78bdf68d6d17bde00aa807bbf032"),value:"body"},{label:l.i18n("391555a3772260743f19278f01adf75e"),value:"header"},{label:l.i18n("012f602372cd2dbd639cd966c63e1f90"),value:"toolbar"},{label:l.i18n("54002bbf7eb3da8346dd4be61d642bca"),value:"aside"}]},i.getSchemaTpl("pageTitle"),i.getSchemaTpl("pageSubTitle"),i.getSchemaTpl("remark",{label:l.i18n("3ba265c6b63bde0319822afd6b9a649d"),hiddenOn:'data.regions && !data.regions.includes("header") || !data.title'}),{type:"ae-Switch-More",name:"asideResizor",mode:"normal",label:l.i18n("e7f2f04f7c2b2e9e07b69767ea28d6ab"),hiddenOn:'data.regions && !data.regions.includes("aside")',value:!1,hiddenOnDefault:!0,formType:"extend",form:{body:[{type:"input-number",label:l.i18n("a2b62974f4d7564bb68b570116f25a10"),min:0,name:"asideMinWidth",pipeIn:i.defaultValue(160),pipeOut:function(e){return e||0}},{type:"input-number",label:l.i18n("99b57d8c9244ff9a695fcd519b4e2e57"),min:0,name:"asideMaxWidth",pipeIn:i.defaultValue(350),pipeOut:function(e){return e||0}}]}},{type:"switch",label:i.tipedLabel(l.i18n("28d602809bd1dc6b47ceb38cb54f32de"),l.i18n("36bded76593f98fab62453c7430b2918")),name:"asideSticky",inputClassName:"is-inline",pipeIn:i.defaultValue(!0),hiddenOn:'data.regions && !data.regions.includes("aside")'}]},{title:l.i18n("0d83078816aa273f2941c9b55ec82bf3"),body:[i.getSchemaTpl("combo-container",{type:"input-kv",mode:"normal",name:"data",label:l.i18n("c70638412c6cffd150117ae403dea939")}),i.getSchemaTpl("apiControl",{name:"initApi",mode:"row",labelClassName:"none",label:i.tipedLabel(l.i18n("b4bc91701b86fe8543d649e97daea602"),l.i18n("4143d7418de740e8bc26ef4b27c63534"))})]},,{title:l.i18n("c95e748d5811faae5c52bdc07bee51a0"),body:[{type:"combo",name:"pullRefresh",mode:"normal",noBorder:!0,items:[{type:"ae-Switch-More",mode:"normal",label:l.i18n("5d758dc5e33ba0122c256d80c1572e88"),name:"disabled",formType:"extend",value:!0,trueValue:!1,falseValue:!0,autoFocus:!1,form:{body:[{name:"pullingText",label:i.tipedLabel(l.i18n("04f767eaa571383ea271432bee6deedf"),l.i18n("e24bc5fd094c7c272725c6340d8aeb8e")),type:"input-text"},{name:"loosingText",label:i.tipedLabel(l.i18n("0b3eef4f8a8061baa22416dc1e5dad03"),l.i18n("717b23399e04873441478fef1cc16d43")),type:"input-text"}]}}]}]}])]},{title:l.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),className:"p-none",body:[i.getSchemaTpl("collapseGroup",d.__spreadArray(d.__spreadArray([],i.getSchemaTpl("style:common",["layout"]),!0),[i.getSchemaTpl("style:classNames",{isFormItem:!1,schema:[i.getSchemaTpl("className",{name:"headerClassName",label:l.i18n("c949729cd1a1e425595c1a297649c7c6")}),i.getSchemaTpl("className",{name:"bodyClassName",label:l.i18n("132a78bdf68d6d17bde00aa807bbf032")}),i.getSchemaTpl("className",{name:"asideClassName",label:l.i18n("54002bbf7eb3da8346dd4be61d642bca")}),i.getSchemaTpl("className",{name:"toolbarClassName",label:l.i18n("012f602372cd2dbd639cd966c63e1f90")})]})],!1))]},{title:l.i18n("10b2761db5a8e089049df39675abc550"),className:"p-none",body:[i.getSchemaTpl("eventControl",d.__assign({name:"onEvent"},t.getEventControlConfig(a.manager,e)))]}])]}}),a}return d.__extends(a,e),Object.defineProperty(a.prototype,"rendererBeforeDispatchEvent",{enumerable:!1,configurable:!0,writable:!0,value:function(e,a,n){if("init"===a){var b=this.manager.dataSchema.getScope("".concat(e.id,"-").concat(e.type)),t=d.__assign({$id:"pageInitData"},i.jsonToJsonSchema(n));null==b||b.removeSchema(t.$id),null==b||b.addSchema(t)}if("inited"===a){b=this.manager.dataSchema.getScope("".concat(e.id,"-").concat(e.type)),t=d.__assign({$id:"pageInitedData"},i.jsonToJsonSchema(n));null==b||b.removeSchema(t.$id),null==b||b.addSchema(t)}}}),a}(i.BasePlugin);i.registerEditorPlugin(c),a.PagePlugin=c}));