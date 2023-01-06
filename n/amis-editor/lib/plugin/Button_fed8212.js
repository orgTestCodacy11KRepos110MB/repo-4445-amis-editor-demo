amis.define("5457bf7",(function(e,a,t,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=e("849c8c1"),b=e("8ba532b"),i=e("668181b"),r=e("8beedab"),c=e("fb32b1a"),d=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"button"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/ActionSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:c.i18n("fa966345577ba81af19408f203db968f")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:c.i18n("89de611b2d759a1802542b5d3a06829f")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/button"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[c.i18n("fa966345577ba81af19408f203db968f")]}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-square"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"button-plugin"}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:l.__assign({type:"button",label:c.i18n("fa966345577ba81af19408f203db968f")},i.BUTTON_DEFAULT_ACTION)}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"button",label:c.i18n("fa966345577ba81af19408f203db968f")}}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:c.i18n("fa966345577ba81af19408f203db968f")}),Object.defineProperty(a,"events",{enumerable:!0,configurable:!0,writable:!0,value:[{eventName:"click",eventLabel:c.i18n("4363c17ebb346b646af55bd8c8075915"),description:c.i18n("7af5e3ef39ff71d39fe3f645c8079124"),defaultShow:!0,dataSchema:[{type:"object",properties:{nativeEvent:{type:"object",title:c.i18n("64561733c68085af3d09315c1d4d7ed6")}}}]},{eventName:"mouseenter",eventLabel:c.i18n("f6d767f39ba3bf955077a3c0ce81e581"),description:c.i18n("bcdd89d453da0dc0622a2f3189728357"),dataSchema:[{type:"object",properties:{nativeEvent:{type:"object",title:c.i18n("64561733c68085af3d09315c1d4d7ed6")}}}]},{eventName:"mouseleave",eventLabel:c.i18n("e272b0b8c7fedc670a87075514d9b49f"),description:c.i18n("727309bc724ff237c5e2cdf7a90cf28e"),dataSchema:[{type:"object",properties:{nativeEvent:{type:"object",title:c.i18n("64561733c68085af3d09315c1d4d7ed6")}}}]}]}),Object.defineProperty(a,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(a,"panelJustify",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){var t=/(?:\/|^)dialog\/.+$/.test(e.path),n=/(?:\/|^)drawer\/.+$/.test(e.path),i=/^button-group\/.+$/.test(e.path);return b.getSchemaTpl("tabs",[{title:c.i18n("24d67862f87f439db7ca957aecb77cce"),body:b.getSchemaTpl("collapseGroup",[{title:c.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[b.getSchemaTpl("layout:originPosition",{value:"left-top"}),b.getSchemaTpl("label",{label:c.i18n("d7ec2d3fea4756bc1642e0f10c180cf5")}),{label:c.i18n("226b0912184333c81babf2f1894ec0c1"),type:"button-group-select",name:"type",size:"sm",visibleOn:'type === "submit" || type === "reset" ',options:[{label:c.i18n("fa966345577ba81af19408f203db968f"),value:"button"},{label:c.i18n("939d5345ad4345dbaabe14798f6ac0f1"),value:"submit"},{label:c.i18n("4b9c3271dc2f299dc3aeffb369187513"),value:"reset"}]},b.getSchemaTpl("switch",{name:"close",label:c.i18n("5e64227f46b221001e3b151d72fa6412"),clearValueOnHidden:!0,labelRemark:"指定此次操作完后关闭当前 ".concat(t?"dialog":"drawer"),hidden:!t&&!n,pipeIn:b.defaultValue(!1)}),{type:"ae-switch-more",mode:"normal",formType:"extend",label:b.tipedLabel(c.i18n("1e7196ce05260faa55e5b7ea5a1667c2"),c.i18n("f3dc08e3617d1e19cf8135be4412a80b")),form:{body:[{type:"ae-textareaFormulaControl",label:c.i18n("0d0c6ff7b65e62eba3ddd523e2976389"),mode:"normal",name:"confirmText"}]}},{type:"ae-switch-more",formType:"extend",mode:"normal",label:c.i18n("7e9646e2db5ce66dc2b4b922ece483ba"),hidden:i,form:{body:[{type:"ae-textareaFormulaControl",name:"tooltip",mode:"normal",label:b.tipedLabel(c.i18n("5daaffe964aee9d884e0a681b2818a17"),c.i18n("faa29265819714253843e23437b9193e"))},{type:"ae-textareaFormulaControl",name:"disabledTip",mode:"normal",label:b.tipedLabel(c.i18n("fb37b983a93aabdcdbbd59ae48c519fb"),c.i18n("f855f46ce6146aa17a9ed423da16bfa2")),clearValueOnHidden:!0,visibleOn:'data.tooltipTrigger !== "focus"'},{type:"button-group-select",name:"tooltipTrigger",label:c.i18n("159dbc2fafd57b9d3652f16659b1b519"),size:"sm",options:[{label:c.i18n("d420160a9e04c481e55a9686ab158caa"),value:"hover"},{label:c.i18n("d6763cb7640bed39caa058f156007a86"),value:"focus"}],pipeIn:b.defaultValue("hover")},{type:"button-group-select",name:"tooltipPlacement",label:c.i18n("d586324c6d6b45cb78a4172d836dab3e"),size:"sm",options:[{label:c.i18n("af767b7e4ae069d54f9ea839858d4c6d"),value:"top"},{label:c.i18n("4d9c32c23df5d234e629c922c58d8e12"),value:"right"},{label:c.i18n("3850a186c3235bc646d4c2f79cebac36"),value:"bottom"},{label:c.i18n("d2aff1417831aa621c16cd5b95306b4b"),value:"left"}],pipeIn:b.defaultValue("bottom")}]}},b.getSchemaTpl("icon",{label:c.i18n("c182ad6b97f0909596a523b1f04c28d2")}),b.getSchemaTpl("icon",{name:"rightIcon",label:c.i18n("ad7e6f016bc1d9a9bbc6e18224d73247")})]},b.getSchemaTpl("status",{disabled:!0})])},{title:c.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:b.getSchemaTpl("collapseGroup",[{title:c.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[b.getSchemaTpl("buttonLevel",{label:c.i18n("39003734d1d700d5bd97bf1e7a2fcf73"),name:"level",hidden:i}),b.getSchemaTpl("buttonLevel",{label:c.i18n("c12ba7b658a9fccf0815f3951bc759b6"),name:"activeLevel",hidden:i,visibleOn:"data.active"}),b.getSchemaTpl("switch",{name:"block",label:c.i18n("6aa6b9e2dca63d27dc74eb155020271d"),hidden:i}),b.getSchemaTpl("size",{label:c.i18n("c8339fd2a85af4ba66084d28df808de4"),hidden:i})]},b.getSchemaTpl("style:classNames",{isFormItem:!1,schema:[b.getSchemaTpl("className",{name:"iconClassName",label:c.i18n("c182ad6b97f0909596a523b1f04c28d2"),visibleOn:"this.icon"}),b.getSchemaTpl("className",{name:"rightIconClassName",label:c.i18n("ad7e6f016bc1d9a9bbc6e18224d73247"),visibleOn:"this.rightIcon"})]})])},{title:c.i18n("10b2761db5a8e089049df39675abc550"),className:"p-none",body:e.schema.actionType||["submit","reset"].includes(e.schema.type)?[b.getSchemaTpl("eventControl",l.__assign({name:"onEvent"},r.getEventControlConfig(a.manager,e))),r.getOldActionSchema(a.manager,e)]:[b.getSchemaTpl("eventControl",l.__assign({name:"onEvent"},r.getEventControlConfig(a.manager,e)))]}])}}),a}return l.__extends(a,e),Object.defineProperty(a.prototype,"filterProps",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return e.disabled=!1,e}}),Object.defineProperty(a.prototype,"getRendererInfo",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var a=e.renderer,t=e.schema,n=this;if(t.$$id&&n.name&&n.rendererName&&n.rendererName===a.name)return{name:t.label?t.label:n.name,regions:n.regions,patchContainers:n.patchContainers,vRendererConfig:n.vRendererConfig,wrapperProps:n.wrapperProps,wrapperResolve:n.wrapperResolve,filterProps:n.filterProps,$schema:n.$schema,renderRenderer:n.renderRenderer}}}),a}(b.BasePlugin);b.registerEditorPlugin(d),a.ButtonPlugin=d}));