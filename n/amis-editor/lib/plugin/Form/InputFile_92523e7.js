amis.define("e4786d1",(function(e,a,t,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("849c8c1"),n=e("8ba532b"),b=e("bdc8375"),c=e("8beedab"),d=e("fb32b1a"),o=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"input-file"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/FileControlSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:d.i18n("481e034e6026969aae4ce7ce7c8a7b6f")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-upload"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"input-file-plugin"}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:d.i18n("ec1f230a0181d79b37967a455b1f3515")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/form/input-file"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[d.i18n("55b45c73ae417c4dead67905b1550e85")]}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"input-file",label:d.i18n("481e034e6026969aae4ce7ce7c8a7b6f"),autoUpload:!0,proxy:!0,uploadType:"fileReceptor",name:"file",receiver:{url:"object-upload://default",method:"post"}}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"form",className:"text-left",wrapWithPanel:!1,mode:"horizontal",body:[i.__assign({},a.scaffold)]}}),Object.defineProperty(a,"notRenderFormZone",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"events",{enumerable:!0,configurable:!0,writable:!0,value:[{eventName:"change",eventLabel:d.i18n("755955372bcc0c7ebf161a656bc389b3"),description:d.i18n("8dccb3d6633a85edb21fa52599211654"),dataSchema:[{type:"object",properties:{"event.data.file":{type:"object",title:d.i18n("5560230c43dd8d8c2b4a62d829f152b3")}}}]},{eventName:"remove",eventLabel:d.i18n("7dcb3fb3ccc93369798d4b6950e96058"),description:d.i18n("03d585240162dad662a0a6b5d90a4692"),dataSchema:[{type:"object",properties:{"event.data.item":{type:"object",title:d.i18n("6775136a73e41c1b2cb4ab025773e326")}}}]},{eventName:"success",eventLabel:d.i18n("a7699ba73144aad544eb9ac49f82749d"),description:d.i18n("e309c24c2b07e5970208a82388f1d88e"),dataSchema:[{type:"object",properties:{"event.data.item":{type:"object",title:d.i18n("a27518f50ea00aaacb2c4e52f113eeb1")}}}]},{eventName:"fail",eventLabel:d.i18n("54e5de428ca9d59119d4624706215a4d"),description:d.i18n("4855bc3f3d06b9cf58d14b61839c5a51"),dataSchema:[{type:"object",properties:{"event.data.item":{type:"object",title:d.i18n("5560230c43dd8d8c2b4a62d829f152b3")},"event.data.error":{type:"object",title:d.i18n("236dc056d6800bf423df47520637c52d")}}}]}]}),Object.defineProperty(a,"actions",{enumerable:!0,configurable:!0,writable:!0,value:[{actionType:"clear",actionLabel:d.i18n("36d40a48f3da92af9fe55ee77cfae46f"),description:d.i18n("18843505278637e44a29e7e1f39e0b06")}]}),Object.defineProperty(a,"panelJustify",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return n.getSchemaTpl("tabs",[{title:d.i18n("24d67862f87f439db7ca957aecb77cce"),body:n.getSchemaTpl("collapseGroup",[{title:d.i18n("4092ed98e9035652d4c9ca9441701ed7"),body:[n.getSchemaTpl("layout:originPosition",{value:"left-top"}),n.getSchemaTpl("formItemName",{required:!0}),n.getSchemaTpl("label"),n.getSchemaTpl("btnLabel"),n.getSchemaTpl("multiple",{replace:!0,body:[{name:"maxLength",label:d.i18n("0ec0e6e04b9e918939ac8e0daf407b75"),type:"input-number"}]}),{type:"input-group",name:"maxSize",label:d.i18n("0a9dced8856958fbd05508d1218f8090"),body:[{type:"input-number",name:"maxSize"},{type:"tpl",addOnclassName:"border-0 bg-none",tpl:"B"}]},n.getSchemaTpl("uploadType",{options:[{label:d.i18n("d28879b6a8a4ddb62bf6f2ab59303df7"),value:"asForm"},{label:d.i18n("1e4dc4d5f4a3a95ddc349147d4d8cd39"),value:"fileReceptor"},{label:d.i18n("74cef1162781310e1503d2dc463a76fc"),value:"bos"}],pipeIn:function(e,a){return e||"fileReceptor"},pipeOut:function(e,a){return e||"fileReceptor"},onChange:function(e,a,t,l){if("asForm"===e){l.setValueByName("autoUpload",!0);var i=l.getValueByName("formType")||"asBlob";l.setValueByName(i,!0)}else l.setValueByName("asBase64",!1),l.setValueByName("asBlob",!1)}}),{name:"formType",type:"select",tiled:!0,visibleOn:'data.uploadType === "asForm"',value:"asBlob",label:n.tipedLabel(d.i18n("7c6722203327e8173be987f36fadf610"),d.i18n("fde1ab2f504097f3f717acbb653b4f09")),options:[{label:"Base64",value:"asBase64"},{label:d.i18n("6168fb08fe64663a502a132c5589b73d"),value:"asBlob"}],onChange:function(e,a,t,l){l.setValueByName("asBase64","asBase64"===e),l.setValueByName("asBlob","asBlob"===e)}},n.getSchemaTpl("bos",{visibleOn:'data.uploadType === "bos"'}),n.getSchemaTpl("proxy",{value:!0,visibleOn:'data.uploadType !== "asForm" || !data.uploadType'}),n.getSchemaTpl("switch",{name:"autoUpload",label:d.i18n("7245fe895fa1cfc42b5217a3de314565"),value:!0,visibleOn:'data.uploadType !== "asForm"'}),n.getSchemaTpl("switch",{name:"useChunk",label:d.i18n("cf9e4c80962e712eaa55551cccff317e"),value:!1,pipeIn:function(e,a){return!!e},visibleOn:'data.uploadType !== "asForm"'}),{type:"container",className:"ae-ExtendMore mb-3",visibleOn:'data.uploadType !== "asForm" && data.useChunk === true',body:[{type:"input-group",name:"chunkSize",label:d.i18n("454dbf9b835af8627d4dfff2903298b7"),body:[{type:"input-number",name:"chunkSize"},{type:"tpl",addOnclassName:"border-0 bg-none",tpl:"B"}]},{type:"Container",visibleOn:'data.uploadType == "fileReceptor" && data.useChunk != false',body:[n.getSchemaTpl("apiControl",{mode:"row",name:"startChunkApi",label:n.tipedLabel(d.i18n("2af0c8b5999a1d243ec5fe503da20026"),d.i18n("5548252bd28fc1d217d13a9e5771ecb0")),value:"/api/upload/startChunk"}),n.getSchemaTpl("apiControl",{mode:"row",name:"chunkApi",label:n.tipedLabel(d.i18n("d7832abe5b9ce8e41537b4964fd7cf70"),d.i18n("14008d63c109cc0d0c4ba305671800d2")),value:"/api/upload/chunk"}),n.getSchemaTpl("apiControl",{mode:"row",name:"finishChunkApi",label:n.tipedLabel(d.i18n("70c935fa7ae03aeb1ff87b878e16841f"),d.i18n("c88aaeddb5aa95c7627d84df33929e3f")),value:"/api/upload/finishChunk"})]}]},n.getSchemaTpl("apiControl",{name:"receiver",label:n.tipedLabel(d.i18n("1e4dc4d5f4a3a95ddc349147d4d8cd39"),d.i18n("258d9e27231b06769dd584a3365545ba")),className:"inputFile-apiControl",renderLabel:!0,value:"/api/upload/file",__isUpload:!0,visibleOn:'data.uploadType === "fileReceptor" && !data.useChunk'}),{type:"input-text",value:"",name:"accept",label:n.tipedLabel(d.i18n("28b988ce6ae6dd62d24bcb8a52119179"),d.i18n("f0a37d6f810c73a2f936f33035d99056"))},n.getSchemaTpl("fileUrl",{name:"templateUrl",label:n.tipedLabel(d.i18n("58892b7a6a785706712761d5aebb4639"),d.i18n("af4b910df15b00ba7fb5163558389cfe"))}),n.getSchemaTpl("switch",{name:"drag",label:d.i18n("26d384ebe61b6ffe0e64310331f9e998"),value:!1}),n.getSchemaTpl("remark"),n.getSchemaTpl("labelRemark"),n.getSchemaTpl("description"),n.getSchemaTpl("autoFillApi",{visibleOn:"!this.autoFill || this.autoFill.scene && this.autoFill.action"}),n.getSchemaTpl("autoFill",{visibleOn:"!this.autoFill || !this.autoFill.scene && !this.autoFill.action"})]},n.getSchemaTpl("status",{isFormItem:!0,unsupportStatic:!0}),n.getSchemaTpl("validation",{tag:b.ValidatorTag.File})])},{title:d.i18n("afcde2611bdd13c1e65b4fb6a2f13425"),body:n.getSchemaTpl("collapseGroup",[n.getSchemaTpl("style:formItem",{renderer:e.info.renderer}),n.getSchemaTpl("style:classNames",{unsupportStatic:!0,schema:[n.getSchemaTpl("className",{name:"descriptionClassName",label:d.i18n("3bdd08adab6ea90b9164b20a0e4151ac")}),n.getSchemaTpl("className",{name:"btnClassName",label:d.i18n("644d03767c8148de6651cc6b00b0173f")}),n.getSchemaTpl("className",{name:"btnUploadClassName",label:d.i18n("d1b06a828d05b0ff72328d50b16a8443")})]})])},{title:d.i18n("10b2761db5a8e089049df39675abc550"),className:"p-none",body:[n.getSchemaTpl("eventControl",i.__assign({name:"onEvent"},c.getEventControlConfig(a.manager,e)))]}])}}),a}return i.__extends(a,e),a}(n.BasePlugin);n.registerEditorPlugin(o),a.FileControlPlugin=o}));