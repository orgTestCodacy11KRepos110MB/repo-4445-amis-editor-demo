amis.define("30ed0ed",(function(e,a,i,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=e("849c8c1"),n=e("8ba532b"),b=e("fb32b1a"),r=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"tooltip-wrapper"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/TooltipWrapperSchema.json"}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("dd438f6fb09d6223fd95df16383f0f44")}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:b.i18n("33813749a95477897085e2435acc16b6")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/tooltip"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[b.i18n("22c799040acdb2601b437ed5449de076")]}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-comment-alt"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"tooltip-wrapper-plugin"}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"tooltip-wrapper",tooltip:b.i18n("9b14c9051067bef2dd9a15683201dd18"),body:[{type:"tpl",tpl:b.i18n("2d711b09bd0db0ad240cc83b30dd8014")}],enterable:!0,showArrow:!0,offset:[0,0]}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:t.__assign(t.__assign({},a.scaffold),{className:"p-1 mr-3 border-2 border-solid border-indigo-400"})}),Object.defineProperty(a,"regions",{enumerable:!0,configurable:!0,writable:!0,value:[{key:"body",label:b.i18n("132a78bdf68d6d17bde00aa807bbf032")}]}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:a.name}),Object.defineProperty(a,"panelJustify",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return[n.getSchemaTpl("tabs",[{title:b.i18n("24d67862f87f439db7ca957aecb77cce"),className:"p-none",body:[n.getSchemaTpl("collapseGroup",[{title:b.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[n.getSchemaTpl("layout:originPosition",{value:"left-top"}),n.getSchemaTpl("title",{label:b.i18n("dc19704991f1476fa4dcbb80c50bedd6")}),n.getSchemaTpl("tooltip"),{name:"trigger",type:"select",label:n.tipedLabel(b.i18n("159dbc2fafd57b9d3652f16659b1b519"),b.i18n("ab97cef55407efa11f79211e17cb2b4b")),multiple:!0,value:["hover"],pipeIn:function(e){return Array.isArray(e)?e.join(","):[]},pipeOut:function(e){return e&&e.length?e.split(","):void 0},options:[{label:b.i18n("728c7cdfa431821d291b5108394ec65a"),value:"hover"},{label:b.i18n("4363c17ebb346b646af55bd8c8075915"),value:"click"}]},{type:"button-group-select",name:"placement",label:b.i18n("d586324c6d6b45cb78a4172d836dab3e"),size:"sm",className:"ae-buttonGroupSelect--justify",options:[{label:b.i18n("af767b7e4ae069d54f9ea839858d4c6d"),value:"top"},{label:b.i18n("3850a186c3235bc646d4c2f79cebac36"),value:"bottom"},{label:b.i18n("d2aff1417831aa621c16cd5b95306b4b"),value:"left"},{label:b.i18n("4d9c32c23df5d234e629c922c58d8e12"),value:"right"}],pipeIn:n.defaultValue("top")},{type:"button-group-select",name:"tooltipTheme",label:b.i18n("b47707f0e916e3e3f4ba885bc2cf2c11"),size:"sm",className:"ae-buttonGroupSelect--justify",options:[{label:b.i18n("a32b3b848eee6929634dfc9a9d8bcdb1"),value:"light",icon:"far fa-sun"},{label:b.i18n("adb7e5312abdb9a44297e48d63815fa3"),value:"dark",icon:"far fa-moon"}],pipeIn:n.defaultValue("light")},{name:"inline",label:b.i18n("0de826c66ae3fe8043e9a39b35616ee6"),type:"switch",mode:"row",inputClassName:"inline-flex justify-between flex-row-reverse"},{name:"rootClose",visibleOn:'~this.trigger.indexOf("click")',label:b.i18n("4583d3453c31cd3ff068c1358d8e7f1c"),type:"switch",mode:"row",inputClassName:"inline-flex justify-between flex-row-reverse"}]},{title:b.i18n("dfac151de712ab0b3618072c8a7f0a0f"),body:[{name:"wrapperComponent",label:b.i18n("a823cfa70cfa46c788e1eedae043f6e5"),type:"input-text",options:["article","aside","code","div","footer","header","p","section"],validations:{isAlphanumeric:!0,matchRegexp:"/^(?!.*script).*$/"},validationErrors:{isAlpha:b.i18n("f7d64e5e79994c3c8853f2608d7b2d25"),matchRegexp:b.i18n("f7d64e5e79994c3c8853f2608d7b2d25")},validateOnChange:!1},{type:"input-group",label:n.tipedLabel(b.i18n("8e290c31bc0b4f76edbd58c3575b8420"),b.i18n("03c87fc8d49f865f0c2895d9ef3fe352")),body:[{type:"input-number",name:"offset",suffix:"px",pipeIn:function(e){return Array.isArray(e)&&e[0]||0},pipeOut:function(e,a,i){var l;return[e,(null===(l=i.offset)||void 0===l?void 0:l[1])||0]}},{type:"input-number",name:"offset",suffix:"px",pipeIn:function(e){return Array.isArray(e)&&e[1]||0},pipeOut:function(e,a,i){var l;return[(null===(l=i.offset)||void 0===l?void 0:l[0])||0,e]}}]},{type:"switch",label:n.tipedLabel(b.i18n("4e3e1e12e701890f4461808cc8f9d407"),b.i18n("9d6246f57f6924410b0c68f2172420f9")),name:"enterable",inputClassName:"is-inline"},{type:"switch",label:n.tipedLabel(b.i18n("90919000a708f8d66b7591e21b8e33f1"),b.i18n("ed81f127f3b2aaff73a4f4dd5968fdcb")),name:"showArrow",inputClassName:"is-inline"},{label:b.i18n("b60e5222037939812dabb7da9979c27d"),type:"input-number",min:0,step:100,name:"mouseEnterDelay",suffix:"ms",pipeIn:n.defaultValue(0)},{label:b.i18n("82bb338503938f2da52e91f7244a34a2"),type:"input-number",min:0,step:100,name:"mouseLeaveDelay",suffix:"ms",pipeIn:n.defaultValue(0)}]}])]},{title:b.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),className:"p-none",body:n.getSchemaTpl("collapseGroup",t.__spreadArray(t.__spreadArray([],n.getSchemaTpl("style:common"),!0),[{title:b.i18n("4434b33a8731a73613ba5fa1eb984efb"),body:[n.getSchemaTpl("className",{label:b.i18n("d55c726c99995e106ba5f3bb2b791a86")}),n.getSchemaTpl("className",{label:b.i18n("0ce2605d7eed6782adb6bc62ffae2335"),name:"tooltipClassName"})]}],!1))}])]}}),a}return t.__extends(a,e),a}(n.BasePlugin);n.registerEditorPlugin(r),a.TooltipWrapperPlugin=r}));