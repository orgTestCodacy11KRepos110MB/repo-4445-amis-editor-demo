amis.define("6525619",(function(e,a,l,t){"use strict";var n=e("849c8c1"),i=e("8ba532b"),c=e("668181b"),b=e("3ce129c"),d=e("520d1e1"),p=e("c48a205"),s=e("238be83"),o=e("fb32b1a");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=r(b),u=r(d);i.setSchemaTpl("switch",{type:"switch",mode:"horizontal",horizontal:{justify:!0,left:8},inputClassName:"is-inline "}),i.setSchemaTpl("divider",{type:"divider",className:"mx-0"}),i.setSchemaTpl("withUnit",(function(e){return{type:"input-group",name:e.name,label:e.label,body:[e.control,{type:"tpl",addOnclassName:"border-0 bg-none",tpl:e.unit}]}})),i.setSchemaTpl("formItemName",{label:o.i18n("d314558953b3c76adb7e131aaec8bd86"),name:"name",type:"ae-DataBindingControl",onBindingChange:function(e,a){var l;a((null===(l=e.resolveEditSchema)||void 0===l?void 0:l.call(e))||{label:e.label})}}),i.setSchemaTpl("formItemMode",(function(e){return{label:o.i18n("5aefca559c5a41d10078e21e6d616825"),name:"mode",type:"select",pipeIn:i.defaultValue(""),options:[{label:o.i18n("2dd25b8c21efbfee4a198787810d65d8"),value:"inline"},{label:o.i18n("4cde06e6162ed66720e3133cb83bc059"),value:"horizontal"},{label:o.i18n("75ac842f8e77305846f1d776f97dfaf8"),value:"normal"},(null==e?void 0:e.isForm)?null:{label:o.i18n("2dde3029c4170a1c8e961a90766e0194"),value:""}].filter((function(e){return e})),pipeOut:function(e){return e||void 0}}})),i.setSchemaTpl("formItemInline",{type:"switch",label:o.i18n("66670400b1f3e4b6c94cff171d441585"),name:"inline",visibleOn:'data.mode != "inline"',pipeIn:i.defaultValue(!1)}),i.setSchemaTpl("formItemSize",{name:"size",label:o.i18n("21a1d138166d5d92276d126cf1d6ecac"),type:"select",pipeIn:i.defaultValue("full"),options:[{label:o.i18n("23ecf42cada8bf2715792d718544d107"),value:"xs"},{label:o.i18n("391b8fa9c747a1799353ab856e666ad5"),value:"sm"},{label:o.i18n("aed1dfbc31703955e64806b799b67645"),value:"md"},{label:o.i18n("ab18e30c0dc4093ceeda8961fac3d1f4"),value:"lg"},{label:o.i18n("4a12e9b9fc5443e5e9999b5a7c56c19a"),value:"full"}]}),i.setSchemaTpl("minLength",{name:"minLength",type:"input-number",label:o.i18n("e9cbda74a1ffc06228fca68e4d16c4dd")}),i.setSchemaTpl("maxLength",{name:"maxLength",type:"input-number",label:o.i18n("3baaa61e619e32fc36eff14839b1a63f")}),i.setSchemaTpl("label",{label:o.i18n("32c65d8d7431e76029678ec7bb73a5ab"),name:"label",type:"input-text",pipeIn:function(e){return!1===e?"":e}}),i.setSchemaTpl("btnLabel",{type:"input-text",name:"btnLabel",label:o.i18n("cf6e87cb9edfa398ccfc3db377e34ca4"),value:o.i18n("481e034e6026969aae4ce7ce7c8a7b6f")}),i.setSchemaTpl("labelHide",(function(){return i.getSchemaTpl("switch",{name:"label",label:i.tipedLabel(o.i18n("4e9ce9dfe13d97031d228fc5ae229f0d"),o.i18n("e2773277c7765d4590f7128423c58cee")),pipeIn:function(e){return!1===e},pipeOut:function(e){return!0!==e&&""},visibleOn:'this.__props__ && this.__props__.formMode === "horizontal" || data.mode === "horizontal" || data.label === false'})})),i.setSchemaTpl("placeholder",{label:o.i18n("940b12c19fcf7aced0cdd164edc9acbc"),name:"placeholder",type:"input-text",placeholder:o.i18n("cc572c07586f4ea0c5b9b1060eb777f2")}),i.setSchemaTpl("startPlaceholder",{type:"input-text",name:"startPlaceholder",label:o.i18n("2f92fc7bf6ef3dd57c514d0797fe2f1e"),pipeIn:i.defaultValue(o.i18n("592c59589144ddc68d05d528da17dcdc"))}),i.setSchemaTpl("endPlaceholder",{type:"input-text",name:"endPlaceholder",label:o.i18n("a04c4894d83323d187f65cc357fa646e"),pipeIn:i.defaultValue(o.i18n("f782779e8b5d709462c8e71e0d9019f2"))}),i.setSchemaTpl("tabs",(function(e){return{type:"tabs",tabsMode:"line",className:"editor-prop-config-tabs",linksClassName:"editor-prop-config-tabs-links aa",contentClassName:"no-border editor-prop-config-tabs-cont hoverShowScrollBar",tabs:e.filter((function(e){return e})).map((function(e){var a,l=n.__assign(n.__assign({},e),{body:Array.isArray(e.body)?f.default(e.body):[e.body]});return"collapse-group"===(null===(a=l.body[0])||void 0===a?void 0:a.type)&&(l.className=(l.className||"")+" p-none"),l}))}})),i.setSchemaTpl("collapse",(function(e){return{type:"wrapper",className:"editor-prop-config-collapse",body:e.filter((function(e){return e})).map((function(e){return n.__assign(n.__assign({type:"collapse",headingClassName:"editor-prop-config-head",bodyClassName:"editor-prop-config-body"},e),{body:f.default(e.body)})}))}})),i.setSchemaTpl("fieldSet",(function(e){return n.__assign(n.__assign({collapsable:!0,collapsed:!1},e),{type:"fieldset",title:e.title,body:f.default(e.body.filter((function(e){return e})))})})),i.setSchemaTpl("collapseGroup",(function(e){var a=e.filter((function(e){return e&&Array.isArray(null==e?void 0:e.body)&&(null==e?void 0:e.body.length)>0})).map((function(e){return n.__assign(n.__assign({type:"collapse",collapsed:!1,headingClassName:"ae-formItemControl-header",bodyClassName:"ae-formItemControl-body"},e),{key:e.title,body:f.default(e.body)})}));return{type:"collapse-group",activeKey:a.map((function(e){return e.title})),expandIconPosition:"right",expandIcon:{type:"icon",icon:"chevron-right"},className:"ae-formItemControl ae-styleControl",body:a}})),i.setSchemaTpl("clearable",{type:"switch",label:o.i18n("09bbfb387dce6201df1ccef2aab161a6"),name:"clearable",inputClassName:"is-inline"}),i.setSchemaTpl("hint",{label:o.i18n("8528426e54902956723f322bdbbcfafc"),type:"input-text",name:"hint",description:o.i18n("dc5dbe7a1b1ff5cae22ffbb636bc6380")}),i.setSchemaTpl("remark",c.remarkTpl({name:"remark",label:o.i18n("ff255db9b108589abd5c649e2a02e3f1"),labelRemark:o.i18n("9e783b34207fe24bc488136faba65442")})),i.setSchemaTpl("labelRemark",c.remarkTpl({name:"labelRemark",label:o.i18n("3ba265c6b63bde0319822afd6b9a649d"),labelRemark:o.i18n("7ad83bbe4646a0011ece7fd338d1e189")})),i.setSchemaTpl("valueFormula",(function(e){var a=e||{},l=a.rendererSchema,t=a.useSelectMode,i=a.mode,c=a.visibleOn,b=a.label,d=a.name,p=a.rendererWrapper,r=a.needDeleteProps,f=a.valueType,u=a.header,m=a.placeholder,h=a.DateTimeType,y=a.variables,v=a.requiredDataPropsVariables,T=a.variableMode,S=n.__rest(a,["rendererSchema","useSelectMode","mode","visibleOn","label","name","rendererWrapper","needDeleteProps","valueType","header","placeholder","DateTimeType","variables","requiredDataPropsVariables","variableMode"]),g=l;return t&&g&&g.options&&(g=n.__assign(n.__assign({},g),{type:"select"})),{type:"group",mode:"vertical"===i?"vertical":"horizontal",visibleOn:c,body:[n.__assign({type:"ae-formulaControl",label:null!=b?b:o.i18n("225f3ed00750ae78ad1e6ea42c8f5087"),name:d||"value",rendererWrapper:p,needDeleteProps:r,valueType:f,header:u,placeholder:m,rendererSchema:g,variables:y,requiredDataPropsVariables:v,variableMode:T,DateTimeType:null!=h?h:s.FormulaDateType.NotDate},S)]}})),i.setSchemaTpl("inputType",{label:o.i18n("b3e55578af5dd473bab62641bb2f5f8e"),name:"type",type:"select",creatable:!1,options:[{label:o.i18n("97d07614380da93d257f9fbf81aa56fb"),value:"input-text"},{label:o.i18n("a8105204604a0b11e916f3879aae3b0b"),value:"input-password"},{label:o.i18n("3bc5e602b2d4c7fffe79258e2ac6952e"),value:"input-email"},{label:"URL",value:"input-url"}]}),i.setSchemaTpl("selectDateType",{label:o.i18n("16084784a0f126b501e96994c792d411"),name:"type",type:"select",creatable:!1,options:[{label:o.i18n("4ff1e74e43a3586339251494117185ad"),value:"input-date"},{label:o.i18n("0c3bf4fce50589b1073baf15f8a00d36"),value:"input-datetime"},{label:o.i18n("19fcb9eb2594059036dfede5f4ec53e8"),value:"input-time"},{label:o.i18n("8190915888889ed18be44ea0351d0448"),value:"input-month"},{label:o.i18n("a483bccf85587055ab31314ad1d2f82a"),value:"input-quarter"},{label:o.i18n("8f30e9f8678c24496921bebae6ca2ac6"),value:"input-year"}]}),i.setSchemaTpl("selectDateRangeType",{label:o.i18n("16084784a0f126b501e96994c792d411"),name:"type",type:"select",creatable:!1,options:[{label:o.i18n("4ff1e74e43a3586339251494117185ad"),value:"input-date-range"},{label:o.i18n("0c3bf4fce50589b1073baf15f8a00d36"),value:"input-datetime-range"},{label:o.i18n("19fcb9eb2594059036dfede5f4ec53e8"),value:"input-time-range"},{label:o.i18n("8190915888889ed18be44ea0351d0448"),value:"input-month-range"},{label:o.i18n("a483bccf85587055ab31314ad1d2f82a"),value:"input-quarter-range"},{label:o.i18n("8f30e9f8678c24496921bebae6ca2ac6"),value:"input-year-range"}]}),i.setSchemaTpl("optionsMenuTpl",(function(e){var a=e.manager,l=n.__rest(e,["manager"]);return n.__assign({type:"ae-textareaFormulaControl",mode:"normal",label:i.tipedLabel(o.i18n("1ca87f0171481e27d94e81b477150b7d"),o.i18n("d6ecb32a380c91887a9346653c2427e9")),name:"menuTpl",variables:function(e){var l=a.store.valueWithoutHiddenProps,t=[];if(l.labelField&&t.push({label:o.i18n("7e9c83e86beb612377a94e6e8d1fc644"),value:l.labelField,tag:typeof l.labelField}),l.valueField&&t.push({label:o.i18n("2e01f5f5889e33d003bec7857cd38445"),value:l.valueField,tag:typeof l.valueField}),l.options){var i=u.default.reduce(l.options,(function(e,a){return n.__assign(n.__assign({},e),a)}),{});null==i||delete i.$$id,i=u.default.omit(i,u.default.map(t,(function(e){return null==e?void 0:e.label})));var c=u.default.map(u.default.keys(i),(function(e){return{label:"label"===e?o.i18n("891ec6336d4243714c25eecb2f8f774a"):"value"===e?o.i18n("684a0d1aeca4e9acff89221b57826d4d"):e,value:e,tag:typeof i[e]}}));t.push.apply(t,c)}return[{label:o.i18n("fb7ea2b05ca7328ee16a562d90c2eb96"),children:t}]},requiredDataPropsVariables:!0},l)})),i.setSchemaTpl("menuTpl",{type:"ae-textareaFormulaControl",mode:"normal",label:i.tipedLabel(o.i18n("59cf15fe6b8d659c9bd2f86143534a06"),o.i18n("d6ecb32a380c91887a9346653c2427e9")),name:"menuTpl"}),i.setSchemaTpl("expression",{type:"input-text",description:o.i18n("b18ec08df2e47313bcc93430e7a25fd3")}),i.setSchemaTpl("icon",{label:o.i18n("5ef69f62dc668c1a3e68b51c50a2530a"),type:"icon-select",name:"icon",placeholder:o.i18n("b7dee01f2d085d90c47bcb8b490d9055"),clearable:!0,description:""}),i.setSchemaTpl("size",{label:o.i18n("b3b97a293baac13db6367aba5539a09c"),type:"button-group-select",name:"size",clearable:!0,options:[{label:o.i18n("23ecf42cada8bf2715792d718544d107"),value:"xs"},{label:o.i18n("391b8fa9c747a1799353ab856e666ad5"),value:"sm"},{label:o.i18n("aed1dfbc31703955e64806b799b67645"),value:"md"},{label:o.i18n("ab18e30c0dc4093ceeda8961fac3d1f4"),value:"lg"}]}),i.setSchemaTpl("name",{label:i.tipedLabel(o.i18n("689fad203a167d542c12bdc46f27e921"),o.i18n("6c1e18fd4cb57288a9f43603d5167292")),name:"name",type:"input-text",placeholder:o.i18n("ae344073ea6ca9ce742899cdf6d3e106")}),i.setSchemaTpl("reload",{name:"reload",asFormItem:!0,component:p.InputComponentName,label:i.tipedLabel(o.i18n("fa9a0a79f29fef72e3060ea1af93c305"),o.i18n("1a1ff1e1149a0cd1b39c0b231a334d04")),placeholder:o.i18n("4fe2f10c6d5bedac03f40a4362e4f69b"),mode:"horizontal",horizontal:{left:4,justify:!0}}),i.setSchemaTpl("className",(function(e){return n.__assign(n.__assign({type:"ae-classname",name:"className"},e||{}),{label:i.tipedLabel((null==e?void 0:e.label)||o.i18n("4434b33a8731a73613ba5fa1eb984efb"),o.i18n("7080fa6e0ca1d7e24f6f8cac05077a3a"))})})),i.setSchemaTpl("combo-container",(function(e){var a,l;if(i.isObject(e)){var t=void 0,c=void 0;return["input-kv","combo"].includes(e.type)&&(t="ae-Combo-items "+(null!==(a=e.itemsWrapperClassName)&&void 0!==a?a:""),c="ae-Combo-item "+(null!==(l=e.itemClassName)&&void 0!==l?l:"")),n.__assign(n.__assign(n.__assign({},e),t?{itemsWrapperClassName:t}:{}),c?{itemClassName:c}:{})}return e})),i.setSchemaTpl("texts",i.getSchemaTpl("combo-container",{type:"combo",label:o.i18n("3bdd08adab6ea90b9164b20a0e4151ac"),mode:"normal",name:"texts",items:[{placeholder:"Key",type:"input-number",unique:!0,name:"key",columnClassName:"w-xs flex-none",min:0,step:1,max:10,precision:0},{placeholder:o.i18n("1a10cd6599219eafb615b34234cfc0b5"),type:"input-text",name:"value"}]})),i.setSchemaTpl("unitOptions",i.getSchemaTpl("combo-container",{type:"combo",label:o.i18n("7915dcc78c28ed3cda8fc949a86e4806"),mode:"normal",name:"unitOptions",flat:!0,items:[{placeholder:o.i18n("7915dcc78c28ed3cda8fc949a86e4806"),type:"input-text",name:"text"}],draggable:!1,multiple:!0,pipeIn:function(e){return i.isObject(e)?e.map((function(e){return e.value})):Array.isArray(e)?e:[]},pipeOut:function(e){if(e.length)return e}})),i.setSchemaTpl("status",(function(e){return{title:o.i18n("3fea7ca76cdece641436d7ab0d02ab1b"),body:[i.getSchemaTpl("newVisible"),i.getSchemaTpl("hidden"),!(null==e?void 0:e.unsupportStatic)&&(null==e?void 0:e.isFormItem)?i.getSchemaTpl("static"):null,(null==e?void 0:e.readonly)?i.getSchemaTpl("readonly"):null,(null==e?void 0:e.disabled)||(null==e?void 0:e.isFormItem)?i.getSchemaTpl("disabled"):null,(null==e?void 0:e.isFormItem)?i.getSchemaTpl("clearValueOnHidden"):null].filter(Boolean)}})),i.setSchemaTpl("autoFill",{type:"input-kv",name:"autoFill",label:i.tipedLabel(o.i18n("3bce1a6217990c8dc087d254f1fe754a"),o.i18n("f01553e415ca33cc89d0bca84023f4b5"))}),i.setSchemaTpl("autoFillApi",{type:"input-kv",name:"autoFill",label:i.tipedLabel(o.i18n("89bc2a21c778b36d09c8d795aac8260e"),o.i18n("666352a09304cba42de24312f509c3b4"))}),i.setSchemaTpl("required",{type:"switch",name:"required",label:o.i18n("04d815a5d4b803d6bb956d2da5a82688"),mode:"horizontal",horizontal:{justify:!0,left:8},inputClassName:"is-inline "}),i.setSchemaTpl("description",{name:"description",type:"textarea",label:i.tipedLabel(o.i18n("3bdd08adab6ea90b9164b20a0e4151ac"),o.i18n("a1b6281dc554ac84a3e6062f812fe50d")),maxRows:2,pipeIn:function(e,a){return e||a.desc||""}}),i.setSchemaTpl("disabled",{type:"ae-StatusControl",label:o.i18n("710ad08b11419332713360d2750cd707"),mode:"normal",name:"disabled",expressionName:"disabledOn"}),i.setSchemaTpl("readonly",{type:"ae-StatusControl",label:o.i18n("85541bd9f7f39a6e6d9d26cbe09cbdd4"),mode:"normal",name:"readOnly",expressionName:"readOnlyOn"}),i.setSchemaTpl("visible",{type:"ae-StatusControl",label:o.i18n("4d681c4aa93c8d005ec2ca2370618d6e"),mode:"normal",name:"visible",expressionName:"visibleOn"}),i.setSchemaTpl("static",{type:"ae-StatusControl",label:o.i18n("04f5f12c49c2a6fdc43da049591328ad"),mode:"normal",name:"static",expressionName:"staticOn"}),i.setSchemaTpl("newVisible",{type:"ae-StatusControl",label:o.i18n("4d681c4aa93c8d005ec2ca2370618d6e"),mode:"normal",name:"visible",expressionName:"visibleOn",visibleOn:"data.visible || data.visible === false || data.visibleOn !== undefined"}),i.setSchemaTpl("hidden",{type:"ae-StatusControl",label:o.i18n("dce5379cb978a8259ecfca8f08f00817"),mode:"normal",name:"hidden",expressionName:"hiddenOn"}),i.setSchemaTpl("maximum",{type:"input-number",label:o.i18n("5da893141114a59da868052b3a17a79a")}),i.setSchemaTpl("minimum",{type:"input-number",label:o.i18n("c322edb884724d04842fc35f4d29a24e")}),i.setSchemaTpl("switchDefaultValue",{type:"switch",label:o.i18n("5d0595edc3d14aec24efef85534e4314"),name:"value",pipeIn:function(e){return void 0!==e},pipeOut:function(e,a,l){return e?"":void 0},labelRemark:{trigger:["hover","focus"],setting:!0,title:"",content:o.i18n("495333d64fc1efafd6c40bc9a3929fee")}}),i.setSchemaTpl("numberSwitchDefaultValue",{type:"switch",label:i.tipedLabel(o.i18n("5d0595edc3d14aec24efef85534e4314"),o.i18n("495333d64fc1efafd6c40bc9a3929fee")),name:"value",pipeIn:function(e){return void 0!==e},pipeOut:function(e,a,l){return e?"":void 0}}),i.setSchemaTpl("kilobitSeparator",{type:"switch",label:o.i18n("530c4483c7e52dc409509b755eabee11"),name:"kilobitSeparator",inputClassName:"is-inline"}),i.setSchemaTpl("imageUrl",{type:"input-text",label:o.i18n("20def7942674282277c3714ed7ea6ce0")}),i.setSchemaTpl("backgroundImageUrl",{type:"input-text",label:o.i18n("090dbd614a66a56a5eadec87f59ea15c")}),i.setSchemaTpl("audioUrl",{type:"input-text",label:o.i18n("f8f176147db276063e7ec15f076e39e0"),name:"src",description:o.i18n("91d3cd46d6b6919749e56056d5acc9bc")}),i.setSchemaTpl("fileUrl",{type:"input-text",label:o.i18n("2a0c4740f156a9536049f4610da25400")}),i.setSchemaTpl("markdownBody",{name:"value",type:"editor",language:"markdown",size:"xxl",label:o.i18n("4fa2ae7d726dc395cfea70ff3d7256d2"),options:{lineNumbers:"off"}}),i.setSchemaTpl("richText",{label:o.i18n("e2591e971f4c28db7c80a5f546084a1d"),type:"input-rich-text",buttons:["paragraphFormat","quote","textColor","backgroundColor","|","bold","italic","underline","strikeThrough","|","formatOL","formatUL","align","|","insertLink","insertImage","insertTable","|","undo","redo","fullscreen"],name:"html",description:o.i18n("0861915dbac25ccb573b3bb72ffeebd7"),size:"lg"}),i.setSchemaTpl("showCounter",{type:"switch",label:o.i18n("52f43ce846b2bf73f86195cf196fe578"),name:"showCounter",inputClassName:"is-inline"}),i.setSchemaTpl("borderMode",{name:"borderMode",label:o.i18n("961534b4ea37e4e88aada736b299d063"),type:"button-group-select",inputClassName:"is-inline",horizontal:{left:2,justify:!0},options:[{label:o.i18n("b9245d69d2d82b0081ced47a18c27f41"),value:"full"},{label:o.i18n("8f9b1b7e38cd2ed16f22807417ab3573"),value:"half"},{label:o.i18n("7fc7940b4f7f58b49c71bf9e237b633e"),value:"none"}],pipeIn:i.defaultValue("full")}),i.setSchemaTpl("searchable",(function(){return i.getSchemaTpl("switch",{label:o.i18n("dbdae74eb12668e2b9568b013bf27d45"),name:"searchable"})})),i.setSchemaTpl("sortable",{type:"switch",label:o.i18n("b4521626a48dcb61001fc563d2433ed3"),name:"sortable"}),i.setSchemaTpl("onlyLeaf",{type:"switch",label:i.tipedLabel(o.i18n("6fdccea6068e0698c565acd92052a86e"),o.i18n("a80c61384a8459ef7bfb5082a2b54b5f")),horizontal:{left:5,justify:!0},name:"onlyLeaf",value:!1,inputClassName:"is-inline"}),i.setSchemaTpl("clearValueOnHidden",(function(){return i.getSchemaTpl("switch",{type:"switch",horizontal:{left:8,justify:!0},label:i.tipedLabel(o.i18n("71758057056e7f31d73e3f3ac8860b4f"),o.i18n("ce641d8297471a5d65c46cdfb023097c")),name:"clearValueOnHidden"})})),i.setSchemaTpl("utc",{type:"switch",label:i.tipedLabel(o.i18n("3e719b87b9ee71d4613caefbf2fd1074"),o.i18n("d52e57147787797ae0153d43bf8be298")),name:"utc",inputClassName:"is-inline"}),i.setSchemaTpl("embed",{type:"switch",label:o.i18n("339b9ebd91070de050b4bfe483aa4474"),name:"embed"}),i.setSchemaTpl("buttonLevel",{label:o.i18n("ac3880323853de9adc4f66bc06d438ff"),type:"select",name:"level",options:[{label:o.i18n("18c63459a2c069022c7790430f761214"),value:"default",level:"default"},{label:o.i18n("bfe68d5844f8e54602760e18f45954f7"),value:"link",level:"link"},{label:o.i18n("fbae87bcc352f6933541fb77a07418ed"),value:"primary",level:"primary"},{label:o.i18n("49a79f4047b81186c069ed1c9c151c66"),value:"light",level:"light"},{label:o.i18n("41e8e8b9935c9ee4e88b06643a2d5b81"),value:"dark",level:"dark"},{label:o.i18n("02d9819ddaaaeb1b7b22b12608c7e5ca"),value:"info",level:"info"},{label:o.i18n("330363dfc524cff2488f2ebde0500896"),value:"success",level:"success"},{label:o.i18n("900c70fa5f7dbc014e6f762d5e0e885c"),value:"warning",level:"warning"},{label:o.i18n("e2e27a87257599f83c817c43e724b6aa"),value:"danger",level:"danger"},{label:o.i18n("bde770827b9137ddb3eb676878af9709"),value:"secondary",level:"secondary"},{label:o.i18n("3d7443aeba7c8eaf1cbb42ad5232fa10"),value:"enhance",level:"enhance"}],pipeIn:i.defaultValue("default")}),i.setSchemaTpl("uploadType",{label:o.i18n("b1ea078db7298ea7872d894283378507"),name:"uploadType",type:"select",value:"fileReceptor",options:[{label:o.i18n("1e4dc4d5f4a3a95ddc349147d4d8cd39"),value:"fileReceptor"},{label:o.i18n("74cef1162781310e1503d2dc463a76fc"),value:"bos"}]}),i.setSchemaTpl("bos",{label:o.i18n("38fbc7fb70b4399d7e4050d3cbcdf229"),type:"select",name:"bos",value:"default",options:[{label:o.i18n("e5d59ccec2caa64ca83b7cc740645928"),value:"default"}]}),i.setSchemaTpl("badge",{label:o.i18n("b8c467fce096a649583c0bc9d9281a5c"),name:"badge",type:"ae-badge"}),i.setSchemaTpl("formulaControl",(function(e){return void 0===e&&(e={}),n.__assign({type:"ae-formulaControl"},e)})),i.setSchemaTpl("dateShortCutControl",(function(e){return void 0===e&&(e={}),n.__assign({type:"ae-DateShortCutControl"},e)})),i.setSchemaTpl("eventControl",(function(e){return void 0===e&&(e={}),n.__assign({type:"ae-eventControl",mode:"normal"},e)})),i.setSchemaTpl("data",{type:"input-kv",name:"data",label:o.i18n("c70638412c6cffd150117ae403dea939")}),i.setSchemaTpl("app-page",{type:"nested-select",label:o.i18n("a4895ee2e87d1c47b734dbcf1a535aeb"),name:"link",mode:"horizontal",size:"lg",required:!0,options:[]}),i.setSchemaTpl("app-page-args",{type:"combo",name:"params",label:o.i18n("0b72392143e4038e98128cb0f6f679b3"),multiple:!0,removable:!0,addable:!0,strictMode:!1,canAccessSuperData:!0,size:"lg",mode:"horizontal",items:[{name:"key",type:"input-text",placeholder:o.i18n("c068b579db3bf0a553bd0af4f81cc14f"),source:"${__pageInputSchema}",labelField:"label",valueField:"value",required:!0},{name:"val",type:"ae-formulaControl",variables:"${variables}",placeholder:o.i18n("bfed4943c5f487de1b63a82f7230cce2")}]}),i.setSchemaTpl("iconLink",(function(e){var a=e.name,l=e.visibleOn,t=e.label;return i.getSchemaTpl("icon",{name:a,visibleOn:l,label:null!=t?t:o.i18n("5ef69f62dc668c1a3e68b51c50a2530a"),placeholder:o.i18n("b7dee01f2d085d90c47bcb8b490d9055"),clearable:!0,description:""})})),i.setSchemaTpl("virtualThreshold",{name:"virtualThreshold",type:"input-number",min:1,step:1,precision:0,label:i.tipedLabel(o.i18n("03bfb834c8a5fef58d885e448a4e13b4"),o.i18n("50437e080edc71ab624c93d419472919")),pipeOut:function(e){return e||void 0}}),i.setSchemaTpl("virtualItemHeight",{name:"itemHeight",type:"input-number",min:1,step:1,precision:0,label:i.tipedLabel(o.i18n("02b9880e1d2df8a07e90e9878080c739"),o.i18n("a3f66655c3d2bcfecc6afba0e4424460")),pipeOut:function(e){return e||void 0}}),i.setSchemaTpl("pageTitle",{label:o.i18n("8d6b5924f187048cfa28d6c21fa6d2d6"),name:"title",type:"input-text"}),i.setSchemaTpl("pageSubTitle",{label:o.i18n("72cf373be86a38b29f6d2f15900b0da1"),name:"subTitle",type:"textarea"}),i.setSchemaTpl("textareaDefaultValue",{type:"ae-textareaFormulaControl",label:o.i18n("225f3ed00750ae78ad1e6ea42c8f5087"),name:"value",mode:"normal"}),i.setSchemaTpl("prefix",{type:"input-text",name:"prefix",label:i.tipedLabel(o.i18n("4c9bb42608b11278a5d9a2471b74eb40"),o.i18n("925d31bb30d63576600299475a910c33"))}),i.setSchemaTpl("suffix",{type:"input-text",name:"suffix",label:i.tipedLabel(o.i18n("242d641eab57223af01fb29940a096ed"),o.i18n("42677544e2cbee28f7e7df216e685543"))}),i.setSchemaTpl("unit",{type:"input-text",name:"unit",label:o.i18n("f2996845b6bf0a07fe26f74f35e42ebe"),value:""}),i.setSchemaTpl("optionsTip",{type:"input-text",name:"optionsTip",label:o.i18n("9888468550779b1777260b8fafe6abc2"),value:o.i18n("a2cbb42e488dffe644bdb87c26afbc07")}),i.setSchemaTpl("remark",{name:"remark",label:o.i18n("02d9819ddaaaeb1b7b22b12608c7e5ca"),type:"input-text",description:o.i18n("45882ddedb42c1a38462949750bc8a84")}),i.setSchemaTpl("title",{type:"input-text",name:"title",label:o.i18n("32c65d8d7431e76029678ec7bb73a5ab")}),i.setSchemaTpl("caption",{type:"input-text",name:"caption",label:o.i18n("32c65d8d7431e76029678ec7bb73a5ab")}),i.setSchemaTpl("imageCaption",{type:"input-text",name:"imageCaption",label:o.i18n("098c3d959911b48b4d912cb85ccc4942")}),i.setSchemaTpl("inputBody",{type:"input-text",name:"body",label:i.tipedLabel(o.i18n("2d711b09bd0db0ad240cc83b30dd8014"),o.i18n("5d809212900f3bc3ba122fe93638394d"))}),i.setSchemaTpl("stepSubTitle",{type:"input-text",name:"subTitle",label:!1,placeholder:o.i18n("72cf373be86a38b29f6d2f15900b0da1")}),i.setSchemaTpl("stepDescription",{type:"input-text",name:"description",label:!1,placeholder:o.i18n("3bdd08adab6ea90b9164b20a0e4151ac")}),i.setSchemaTpl("taskNameLabel",{type:"input-text",name:"taskNameLabel",pipeIn:i.defaultValue(o.i18n("78caf7115c5140f8913c581920239f22")),label:o.i18n("24e3562a3262e80c3119f22b8f447f64")}),i.setSchemaTpl("operationLabel",{type:"input-text",name:"operationLabel",pipeIn:i.defaultValue(o.i18n("2b6bc0f293f5ca01b006206c2535ccbc")),label:o.i18n("cb8e07cea4df337bb6dcb8362b5f7e02")}),i.setSchemaTpl("statusLabel",{type:"input-text",name:"statusLabel",pipeIn:i.defaultValue(o.i18n("3fea7ca76cdece641436d7ab0d02ab1b")),label:o.i18n("f2acd3adcc0a0d73b318c83a29a4d2a9")}),i.setSchemaTpl("remarkLabel",{type:"input-text",name:"remarkLabel",pipeIn:i.defaultValue(o.i18n("8a4cf07caf84c91a87e8ff3c48a944b9")),label:o.i18n("0cbbb89050458c2bcf0ca98c19dc8864")}),i.setSchemaTpl("inputArrayItem",{type:"input-text",placeholder:o.i18n("d7ec2d3fea4756bc1642e0f10c180cf5")}),i.setSchemaTpl("actionPrevLabel",{type:"input-text",name:"actionPrevLabel",label:o.i18n("0f04a65952b58cbbc5ca6cba868c3bec"),pipeIn:i.defaultValue(o.i18n("eeb6908870e058bc23d52c1e405a054e"))}),i.setSchemaTpl("actionNextLabel",{type:"input-text",name:"actionNextLabel",label:o.i18n("e54827ae56fcb690d879b9cdd29f0ac7"),pipeIn:i.defaultValue(o.i18n("38ce27d84639f3a6e07c00b3b4995c0e"))}),i.setSchemaTpl("actionNextSaveLabel",{type:"input-text",name:"actionNextSaveLabel",label:o.i18n("abb7ba84b95c6c90341ac9c883fbc85b"),pipeIn:i.defaultValue(o.i18n("bed196af058f458def957031f88abd09"))}),i.setSchemaTpl("actionFinishLabel",{type:"input-text",name:"actionFinishLabel",label:o.i18n("81b522590d543401ad15ae8a9155361d"),pipeIn:i.defaultValue(o.i18n("769d88e425e03120b83ee4ed6b9d588e"))}),i.setSchemaTpl("imgCaption",{type:"textarea",name:"caption",label:o.i18n("098c3d959911b48b4d912cb85ccc4942")}),i.setSchemaTpl("taskRemark",{type:"textarea",name:"remark",label:o.i18n("1d35dcbf191e36dcc6c15f71277d72ed")}),i.setSchemaTpl("tooltip",{type:"textarea",name:"tooltip",label:o.i18n("6f2b01db04cbf7e460b5c6f4e37a5e76")}),i.setSchemaTpl("anchorTitle",{type:"input-text",name:"title",required:!0,placeholder:o.i18n("8cfd149e7d73ebae6a797d21728292ff")}),i.setSchemaTpl("avatarText",{label:o.i18n("ca746b1ff10193a3ce20878dec04a733"),name:"text",type:"input-text",pipeOut:function(e){return""===e?void 0:e},visibleOn:'data.showtype === "text"'}),i.setSchemaTpl("cardTitle",{name:"header.title",type:"input-text",label:o.i18n("32c65d8d7431e76029678ec7bb73a5ab"),description:o.i18n("00a1f644f34b9ee43adf82cb3449158c")}),i.setSchemaTpl("cardSubTitle",{name:"header.subTitle",type:"input-text",label:o.i18n("72cf373be86a38b29f6d2f15900b0da1"),description:o.i18n("00a1f644f34b9ee43adf82cb3449158c")}),i.setSchemaTpl("cardsPlaceholder",{name:"placeholder",value:o.i18n("21efd88b67a39834582ad99aabb9dc60"),type:"input-text",label:o.i18n("35ba83e053cef95e55dfffde279822b5")}),i.setSchemaTpl("cardDesc",{name:"header.desc",type:"textarea",label:o.i18n("3bdd08adab6ea90b9164b20a0e4151ac"),description:o.i18n("00a1f644f34b9ee43adf82cb3449158c")}),i.setSchemaTpl("imageTitle",{type:"input-text",label:o.i18n("c6c7456d446d62a906c2809b6ba19ce1"),name:"title",visibleOn:'this.type == "image"'}),i.setSchemaTpl("imageDesc",{type:"textarea",label:o.i18n("098c3d959911b48b4d912cb85ccc4942"),name:"description",visibleOn:'this.type == "image"'}),i.setSchemaTpl("fetchSuccess",{label:o.i18n("fb24383a41f23196349548b5d0cb98ce"),type:"input-text",name:"fetchSuccess"}),i.setSchemaTpl("fetchFailed",{label:o.i18n("62e3e15c8fb9038f2780329bc26e8bab"),type:"input-text",name:"fetchFailed"}),i.setSchemaTpl("saveOrderSuccess",{label:o.i18n("c62a1b7f314be10aead10475e7543f6a"),type:"input-text",name:"saveOrderSuccess"}),i.setSchemaTpl("saveOrderFailed",{label:o.i18n("c8035507b7a576d43e9f227c91c7a7b5"),type:"input-text",name:"saveOrderFailed"}),i.setSchemaTpl("quickSaveSuccess",{label:o.i18n("7cb0932b806559be232d2a69453224e7"),type:"input-text",name:"quickSaveSuccess"}),i.setSchemaTpl("quickSaveFailed",{label:o.i18n("fd79a193a487b8c9d5a302d0d88c1c2c"),type:"input-text",name:"quickSaveFailed"}),i.setSchemaTpl("saveSuccess",{label:o.i18n("b66ef8966dad62d377bc5310d8b88e7f"),name:"saveSuccess",type:"input-text"}),i.setSchemaTpl("saveFailed",{label:o.i18n("cf538bbe1fb431f9e2668da4d84cfadf"),name:"saveFailed",type:"input-text"}),i.setSchemaTpl("validateFailed",{label:o.i18n("6509e435d66db2a105b2444b1d3d0db1"),name:"validateFailed",type:"input-text"}),i.setSchemaTpl("tablePlaceholder",{name:"placeholder",pipeIn:i.defaultValue(o.i18n("21efd88b67a39834582ad99aabb9dc60")),type:"input-text",label:o.i18n("35ba83e053cef95e55dfffde279822b5")}),i.setSchemaTpl("collapseHeader",(function(e){var a,l;return{name:"header",label:o.i18n("32c65d8d7431e76029678ec7bb73a5ab"),type:"input-text",pipeIn:i.defaultValue((null===(a=null==e?void 0:e.schema)||void 0===a?void 0:a.title)||(null===(l=null==e?void 0:e.schema)||void 0===l?void 0:l.header)||""),onChange:function(e,a,l,t){t.setValueByName("header",e),t.setValueByName("title",void 0)}}})),i.setSchemaTpl("collapseOpenHeader",{name:"collapseHeader",label:i.tipedLabel(o.i18n("81d2b9f20fb2083c75a5b052b84e897a"),o.i18n("7349194c139069b32889101768aa7428")),type:"input-text"}),i.setSchemaTpl("matrixColumnLabel",{type:"input-text",name:"label",placeholder:o.i18n("39886861ea5d8b526e0ac5ecc78d110c")}),i.setSchemaTpl("matrixRowLabel",{type:"input-text",name:"label",placeholder:o.i18n("854af3c2cd9c275ac70fc5121ea4fb2e")}),i.setSchemaTpl("matrixRowTitle",{name:"rowLabel",label:o.i18n("34ad26bd1fb448c7f2384252d856c02b"),type:"input-text"}),i.setSchemaTpl("submitText",{name:"submitText",label:o.i18n("60ad7d0d170b973ab9cdb0b23e636704"),type:"input-text"}),i.setSchemaTpl("tpl:btnLabel",{type:"tpl",tpl:'<span class="label label-success">${label}</span>',columnClassName:"p-t-xs"}),i.setSchemaTpl("option",{type:"input-text",name:"option",label:o.i18n("f411d0f1f925d9b48d8c1d451bd809b1")})}));