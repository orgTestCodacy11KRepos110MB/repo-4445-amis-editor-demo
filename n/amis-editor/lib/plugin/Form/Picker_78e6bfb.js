amis.define("e4ce392",(function(e,a,t,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=e("849c8c1"),n=e("cc4bbf0"),c=e("167c905"),r=e("8ba532b"),b=e("8beedab"),o=e("fb32b1a");function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=d(n),f=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(a,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"picker"}),Object.defineProperty(a,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/PickerControlSchema.json"}),Object.defineProperty(a,"name",{enumerable:!0,configurable:!0,writable:!0,value:o.i18n("8fcbfdc1a9403f6339d81911473806da")}),Object.defineProperty(a,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(a,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-window-restore"}),Object.defineProperty(a,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"picker-plugin"}),Object.defineProperty(a,"description",{enumerable:!0,configurable:!0,writable:!0,value:o.i18n("8f650b58c8421edecfb380d6f60ef40e")}),Object.defineProperty(a,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/form/picker"}),Object.defineProperty(a,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[o.i18n("55b45c73ae417c4dead67905b1550e85")]}),Object.defineProperty(a,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"picker",label:o.i18n("8fcbfdc1a9403f6339d81911473806da"),name:"picker",options:[{label:o.i18n("05f87b331e1c97691776d93a6598373f"),value:"A"},{label:o.i18n("f38c0a46797523b11051e35ec0f82a42"),value:"B"}]}}),Object.defineProperty(a,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:{type:"form",className:"text-left",mode:"horizontal",wrapWithPanel:!1,body:[l.__assign({},a.scaffold)]}}),Object.defineProperty(a,"events",{enumerable:!0,configurable:!0,writable:!0,value:[{eventName:"change",eventLabel:o.i18n("755955372bcc0c7ebf161a656bc389b3"),description:o.i18n("c75fde0e2d329ce62f55cb1a207181ae"),dataSchema:[{type:"object",properties:{"event.data.value":{type:"string",title:o.i18n("528609917710d813a55e5a6cecf1e458")},"event.data.selectedItems":{type:"string",title:o.i18n("54d621d5bd588bea4e896de52147a229")}}}]},{eventName:"itemclick",eventLabel:o.i18n("4ea280a2e54969de1d1b9bbd5b708e63"),description:o.i18n("f05520432bb87ced419a1da818c6cc9d"),dataSchema:[{type:"object",properties:{"event.data.item":{type:"object",title:o.i18n("91f7b7fdf9b91073ca3519260f7a62d7")}}}]}]}),Object.defineProperty(a,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:o.i18n("8fcbfdc1a9403f6339d81911473806da")}),Object.defineProperty(a,"panelBodyCreator",{enumerable:!0,configurable:!0,writable:!0,value:function(e){return r.getSchemaTpl("tabs",[{title:o.i18n("24d67862f87f439db7ca957aecb77cce"),body:[r.getSchemaTpl("layout:originPosition",{value:"left-top"}),r.getSchemaTpl("switch",{name:"embed",label:o.i18n("dc0c50a5c9832b393df34835111c34a3")}),r.getSchemaTpl("switchDefaultValue"),{type:"input-text",name:"value",label:o.i18n("225f3ed00750ae78ad1e6ea42c8f5087"),visibleOn:'typeof this.value !== "undefined"'},r.getSchemaTpl("fieldSet",{title:o.i18n("ea15ae2b7fba76c83eec6d0986d15197"),body:[r.getSchemaTpl("options"),r.getSchemaTpl("api",{name:"source",label:o.i18n("1395eba8d9efe27aa1ecd1a45e3e5dcd")}),{children:u.default.createElement(c.Button,{size:"sm",level:"danger",className:"m-b",onClick:a.editDetail.bind(a,e.id),block:!0},"配置选框详情")},{label:"labelTpl",type:"textarea",name:"labelTpl",labelRemark:o.i18n("d64b585847f015eaa1443a3a03562350"),description:o.i18n("0861915dbac25ccb573b3bb72ffeebd7")},{type:"button-group-select",name:"modalMode",label:o.i18n("c2c23b4fc7f695c58e947ad413f2c5d8"),value:"dialog",size:"xs",options:[{label:o.i18n("ab3aec075a09d055b2a28c8b61925ee0"),value:"dialog"},{label:o.i18n("33e6c41fed95c25e3b426d596d504579"),value:"drawer"}]},r.getSchemaTpl("multiple"),r.getSchemaTpl("joinValues"),r.getSchemaTpl("delimiter"),r.getSchemaTpl("extractValue"),r.getSchemaTpl("autoFillApi",{visibleOn:"!this.autoFill || this.autoFill.scene && this.autoFill.action"}),r.getSchemaTpl("autoFill",{visibleOn:"!this.autoFill || !this.autoFill.scene && !this.autoFill.action"})]})]},{title:o.i18n("10b2761db5a8e089049df39675abc550"),className:"p-none",body:[r.getSchemaTpl("eventControl",l.__assign({name:"onEvent"},b.getEventControlConfig(a.manager,e)))]}])}}),a}return l.__extends(a,e),Object.defineProperty(a.prototype,"buildEditorToolbar",{enumerable:!1,configurable:!0,writable:!0,value:function(e,a){var t=e.id;e.info.renderer.name===this.rendererName&&a.push({icon:"fa fa-expand",order:100,tooltip:o.i18n("1ac065ed64b81380384a0b371d5b404f"),onClick:this.editDetail.bind(this,t)})}}),Object.defineProperty(a.prototype,"buildEditorContextMenu",{enumerable:!1,configurable:!0,writable:!0,value:function(e,a){var t=e.id;e.schema,e.region,e.info.renderer.name===this.rendererName&&a.push("|",{label:o.i18n("1ac065ed64b81380384a0b371d5b404f"),onSelect:this.editDetail.bind(this,t)})}}),Object.defineProperty(a.prototype,"editDetail",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var a=this.manager,t=a.store,i=t.getNodeById(e),n=t.getValueOf(e);if(i&&n){var c=i.getComponent(),b=l.__assign(l.__assign({type:"crud",mode:"list"},n.pickerSchema||{listItem:{title:"${label}"}}),{api:n.source,pickerMode:!0,multiple:n.multiple});this.manager.openSubEditor({title:o.i18n("1ac065ed64b81380384a0b371d5b404f"),value:b,data:{options:c.props.options},onChange:function(e){delete(e=l.__assign(l.__assign({},n),{pickerSchema:l.__assign({},e),source:e.api})).pickerSchema.api,delete e.pickerSchema.type,delete e.pickerSchema.pickerMode,delete e.pickerSchema.multiple,a.panelChangeValue(e,r.diff(n,e))}})}}}),a}(r.BasePlugin);r.registerEditorPlugin(f),a.PickerControlPlugin=f}));