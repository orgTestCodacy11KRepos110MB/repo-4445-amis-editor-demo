amis.define("c695543",(function(e,t,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=e("849c8c1"),o=e("cc4bbf0"),i=e("3c5b02d"),r=e("af1cc81"),u=e("531b2d0"),d=e("a2c664a"),s=e("3c006bc"),c=e("167c905"),p=e("195b00e"),b=e("8ba532b"),f=e("fb32b1a");function h(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var m=h(o),g=h(r),v=h(u),y=h(d),_=h(s),C=function(e){function t(t){var a=e.call(this,t)||this;Object.defineProperty(a,"sortable",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(a,"drag",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(a,"target",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(a,"$comp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(a,"internalProps",{enumerable:!0,configurable:!0,writable:!0,value:["checked","editing"]});var n="custom";if(t.data.hasOwnProperty("source")&&t.data.source){var l=t.data.source;n=("string"==typeof l?l:"object"==typeof l&&l.url||"").indexOf("api://")?"api":"apicenter"}return a.state={options:a.transformOptions(t),api:t.data.source,labelField:t.data.labelField,valueField:t.data.valueField,source:n},a}return l.__extends(t,e),Object.defineProperty(t.prototype,"getOptionValueType",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return"string"==typeof e?"text":"boolean"==typeof e?"boolean":"number"==typeof e?"number":"text"}}),Object.defineProperty(t.prototype,"normalizeOptionValue",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){if("text"===t)return String(e);if("number"===t){var a=Number(e);return isNaN(a)?0:a}return"boolean"===t?!(!e||"false"===e):""}}),Object.defineProperty(t.prototype,"transformOptionValue",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return null==e?"":"string"==typeof e?e:JSON.stringify(e)}}),Object.defineProperty(t.prototype,"transformOptions",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=e.data,a=e.value,n=t.value,l=p.value2array(n,t).map((function(e){var a;return e[null!==(a=null==t?void 0:t.valueField)&&void 0!==a?a:"value"]}));return Array.isArray(a)?a.map((function(e){var a;return{label:e.label,value:e.label===e.value?null:e.value,checked:!!~l.indexOf(e[null!==(a=null==t?void 0:t.valueField)&&void 0!==a?a:"value"])}})):[]}}),Object.defineProperty(t.prototype,"normalizeValue",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e,t=this,a=this.props,n=a.data,l=void 0===n?{}:n,o=a.multiple,i=l.joinValues,r=void 0===i||i,u=l.extractValue,d=l.multiple,s=l.delimiter,c=l.valueField,p=this.state.options.filter((function(e){return e.checked})).map((function(e){return y.default(e,t.internalProps)}));return p.length?(d||o?(e=p,r?e=p.map((function(e){return e[c||"value"]||e[c||"label"]})).join(s||","):u&&(e=p.map((function(e){return e[c||"value"]||e[c||"label"]})))):(e=p[0],(r||u)&&(e=e[c||"value"]||e[c||"label"])),e):""}}),Object.defineProperty(t.prototype,"onChange",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.state.source,t=this.props.onBulkChange,a=this.normalizeValue(),n={source:void 0,options:void 0,labelField:void 0,valueField:void 0};if("custom"===e){var l=this.state.options;n.options=l.map((function(e){return{label:e.label,value:null==e.value||""===e.value?e.label:e.value}})),n.value=a||void 0}if("api"===e||"apicenter"===e){var o=this.state,i=o.api,r=o.labelField,u=o.valueField;n.source=i,n.labelField=r,n.valueField=u}t&&t(n)}}),Object.defineProperty(t.prototype,"targetRef",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.target=e?i.findDOMNode(e):null}}),Object.defineProperty(t.prototype,"dragRef",{enumerable:!1,configurable:!0,writable:!0,value:function(e){!this.drag&&e?this.initDragging():this.drag&&!e&&this.destroyDragging(),this.drag=e}}),Object.defineProperty(t.prototype,"initDragging",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,t=i.findDOMNode(this);this.sortable=new _.default(t.querySelector(".ae-OptionControl-content"),{group:"OptionControlGroup",animation:150,handle:".ae-OptionControlItem-dragBar",ghostClass:"ae-OptionControlItem--dragging",onEnd:function(t){if(t.newIndex!==t.oldIndex){var a=t.to;t.newIndex<t.oldIndex&&t.oldIndex<a.childNodes.length-1?a.insertBefore(t.item,a.childNodes[t.oldIndex+1]):t.oldIndex<a.childNodes.length-1?a.insertBefore(t.item,a.childNodes[t.oldIndex]):a.appendChild(t.item);var n=e.state.options.concat();n[t.oldIndex]=n.splice(t.newIndex,1,n[t.oldIndex])[0],e.setState({options:n},(function(){return e.onChange()}))}}})}}),Object.defineProperty(t.prototype,"destroyDragging",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.sortable&&this.sortable.destroy()}}),Object.defineProperty(t.prototype,"scroll2Bottom",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e,t;this.drag&&(null===(t=null===(e=this.drag)||void 0===e?void 0:e.lastElementChild)||void 0===t||t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}))}}),Object.defineProperty(t.prototype,"handleSourceChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.setState({source:e},this.onChange)}}),Object.defineProperty(t.prototype,"handleDelete",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this,a=this.state.options.concat();a.splice(e,1),this.setState({options:a},(function(){return t.onChange()}))}}),Object.defineProperty(t.prototype,"handleToggleDefaultValue",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,a){var n,o,i,r=this,u=this.state.options.concat();(null===(o=null===(n=this.props)||void 0===n?void 0:n.data)||void 0===o?void 0:o.multiple)||(null===(i=this.props)||void 0===i?void 0:i.multiple)?u.splice(e,1,l.__assign(l.__assign({},u[e]),{checked:t})):u=u.map((function(a,n){return l.__assign(l.__assign({},a),{checked:n===e&&t})})),this.setState({options:u},(function(){return r.onChange()}))}}),Object.defineProperty(t.prototype,"toggleEdit",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this.state.options;t[e].editing=!t[e].editing,this.setState({options:t})}}),Object.defineProperty(t.prototype,"handleEditLabel",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var a=this,n=this.state.options.concat();n.splice(e,1,l.__assign(l.__assign({},n[e]),{label:t})),this.setState({options:n},(function(){return a.onChange()}))}}),Object.defineProperty(t.prototype,"handleAdd",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,t=this.state.options;t.push({label:"",value:null,checked:!1}),this.setState({options:t},(function(){e.onChange()}))}}),Object.defineProperty(t.prototype,"handleValueTypeChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var a=this,n=this.state.options.concat();n[e].value=this.normalizeOptionValue(n[e].value,t),this.setState({options:n},(function(){return a.onChange()}))}}),Object.defineProperty(t.prototype,"handleValueChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var a=this,n=this.state.options.concat(),l=this.getOptionValueType(n[e].value);n[e].value=this.normalizeOptionValue(t,l),this.setState({options:n},(function(){return a.onChange()}))}}),Object.defineProperty(t.prototype,"handleBatchAdd",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var a=this,n=this.state.options.concat(),o=e.batchOption.split("\n").map((function(e){var t=e.trim();if(~t.indexOf(" ")){var a=t.split(" "),n=a[0],l=a[1];return{label:n.trim(),value:l.trim(),checked:!1}}return{label:t,value:t,checked:!1}})),i=v.default(l.__spreadArray(l.__spreadArray([],n,!0),o,!0),"value");this.setState({options:i},(function(){return a.onChange()}))}}),Object.defineProperty(t.prototype,"renderHeader",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e,t=this,a=this.props,n=a.render,o=a.label,i=a.labelRemark,r=a.useMobileUI,u=a.env,d=a.popOverContainer,s=a.hasApiCenter,c=null===(e=null==u?void 0:u.theme)||void 0===e?void 0:e.classPrefix,p=this.state.source,b=l.__spreadArray([{label:f.i18n("01820262aa9ad5b130f8f5b86bfd2968"),value:"custom"},{label:f.i18n("f99603414a616bdee85de0e6e3938b65"),value:"api"}],s?[{label:f.i18n("e6ff6a97bf600c02942db3126a7077b8"),value:"apicenter"}]:[],!0).map((function(e){return l.__assign(l.__assign({},e),{onClick:function(){return t.handleSourceChange(e.value)}})}));return m.default.createElement("header",{className:"ae-OptionControl-header"},m.default.createElement("label",{className:g.default("".concat(c,"Form-label"))},o||"",i?n("label-remark",{type:"remark",icon:i.icon||"warning-mark",tooltip:i,className:g.default("Form-lableRemark",null==i?void 0:i.className),useMobileUI:r,container:d||(u&&u.getModalContainer?u.getModalContainer:void 0)}):null),m.default.createElement("div",null,n("validation-control-addBtn",{type:"dropdown-button",level:"link",size:"sm",label:"${selected}",align:"right",closeOnClick:!0,closeOnOutside:!0,buttons:b},{popOverContainer:null,data:{selected:b.find((function(e){return e.value===p})).label}})))}}),Object.defineProperty(t.prototype,"renderOption",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this,a=e.checked,n=e.index,l=e.editing,o=e.multipleProps,i=e.closeDefaultCheck,r=this.props.render,u=this.props.data,d=!0===(null==u?void 0:u.multiple)||o,s=this.transformOptionValue(e.label),p=this.transformOptionValue(e.value),b=this.getOptionValueType(e.value),h=l?m.default.createElement("div",{className:"ae-OptionControlItem-extendMore"},r("option",{type:"container",className:"ae-ExtendMore right mb-2",body:[{type:"button",className:"ae-OptionControlItem-closeBtn",label:"×",level:"link",onClick:function(){return t.toggleEdit(n)}},{type:"input-text",placeholder:f.i18n("b4fdf79b8f54856b072ec3874b830d1f"),label:f.i18n("97d07614380da93d257f9fbf81aa56fb"),mode:"horizontal",value:s,labelClassName:"ae-OptionControlItem-EditLabel",valueClassName:"ae-OptionControlItem-EditValue",onChange:function(e){return t.handleEditLabel(n,e)}},{type:"input-group",name:"input-group",label:f.i18n("fe7509e0ed085b86f07e3e9975cc5b3d"),labelClassName:"ae-OptionControlItem-EditLabel",valueClassName:"ae-OptionControlItem-EditValue",mode:"horizontal",body:[{type:"select",name:"valueType",value:b,options:[{label:f.i18n("97d07614380da93d257f9fbf81aa56fb"),value:"text"},{label:f.i18n("55d4790c5d819cd0462cbe89561b0dd4"),value:"number"},{label:f.i18n("97b0b6499334ed889b372513290a2a52"),value:"boolean"}],checkAll:!1,onChange:function(e){return t.handleValueTypeChange(n,e)}},{type:"input-text",placeholder:f.i18n("f4ab507e2fa2d2bd66bcdeafd9fef797"),name:"value",value:p,visibleOn:"this.optionValueType !== 'boolean'",onChange:function(e){return t.handleValueChange(n,e)}},{type:"input-text",placeholder:f.i18n("f4ab507e2fa2d2bd66bcdeafd9fef797"),name:"value",value:p,visibleOn:"this.optionValueType === 'boolean'",onChange:function(e){return t.handleValueChange(n,e)},options:[{label:"true",value:!0},{label:"false",value:!1}]}]}]})):null,g=[{type:"button",className:"ae-OptionControlItem-action",label:f.i18n("95b351c86267f3aedf89520959bce689"),onClick:function(){return t.toggleEdit(n)}},{type:"button",className:"ae-OptionControlItem-action",label:f.i18n("2f4aaddde33c9b93c36fd2503f3d122b"),onClick:function(){return t.handleDelete(n)}}];return i||d||!a||g.unshift({type:"button",className:"ae-OptionControlItem-action",label:f.i18n("aafda9e8f6b7b613680677c513edb7a6"),onClick:function(){return t.handleToggleDefaultValue(n,!1)}}),m.default.createElement("li",{className:"ae-OptionControlItem",key:n},m.default.createElement("div",{className:"ae-OptionControlItem-Main"},m.default.createElement("a",{className:"ae-OptionControlItem-dragBar"},m.default.createElement(c.Icon,{icon:"drag-bar",className:"icon"})),!this.props.closeDefaultCheck&&!0!==this.props.data.defaultCheckAll&&m.default.createElement("span",{className:"inline-flex","data-tooltip":"默认选中此项"},m.default.createElement(c.Checkbox,{className:"ae-OptionControlItem-checkbox",checked:a,type:d?"checkbox":"radio",onChange:function(e,a){return t.handleToggleDefaultValue(n,e,a)}})),m.default.createElement(c.InputBox,{className:"ae-OptionControlItem-input",value:s,placeholder:"请输入文本/值",clearable:!1,onChange:function(e){return t.handleEditLabel(n,e)}}),r("dropdown",{type:"dropdown-button",className:"ae-OptionControlItem-dropdown",btnClassName:"px-2",icon:"fa fa-ellipsis-h",hideCaret:!0,closeOnClick:!0,align:"right",menuClassName:"ae-OptionControlItem-ulmenu",buttons:g},{popOverContainer:null})),h)}}),Object.defineProperty(t.prototype,"buildBatchAddSchema",{enumerable:!1,configurable:!0,writable:!0,value:function(){return{type:"action",actionType:"dialog",label:f.i18n("22de6ef85ed60ec54dbdc1d8583e5104"),dialog:{title:f.i18n("421252e16c6cb544fe9ce0be94a190e0"),headerClassName:"font-bold",closeOnEsc:!0,closeOnOutside:!1,showCloseButton:!0,body:[{type:"alert",level:"warning",body:[{type:"tpl",tpl:f.i18n("c130bd5b55edefdaf8923269e9a52439")}],showIcon:!0,className:"mb-2.5"},{type:"form",wrapWithPanel:!1,mode:"normal",wrapperComponent:"div",resetAfterSubmit:!0,autoFocus:!0,preventEnterSubmit:!0,horizontal:{left:0,right:12},body:[{name:"batchOption",type:"textarea",label:"",placeholder:f.i18n("1e2f96a69fbef8caa8823a3067ebbdc7"),trimContents:!0,minRows:10,maxRows:50,required:!0}]}]}}}}),Object.defineProperty(t.prototype,"handleAPIChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.setState({api:e},this.onChange)}}),Object.defineProperty(t.prototype,"handleLableFieldChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.setState({labelField:e},this.onChange)}}),Object.defineProperty(t.prototype,"handleValueFieldChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.setState({valueField:e},this.onChange)}}),Object.defineProperty(t.prototype,"renderApiPanel",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props.render,t=this.state,a=t.source,n=t.api,l=t.labelField,o=t.valueField;return"custom"===a?null:e("api",b.getSchemaTpl("apiControl",{label:f.i18n("54ea89b497ec3bb319c68844dfa3687f"),name:"source",mode:"normal",className:"ae-ExtendMore",visibleOn:"data.autoComplete !== false",value:n,onChange:this.handleAPIChange,sourceType:a,footer:[{label:b.tipedLabel(f.i18n("7e9c83e86beb612377a94e6e8d1fc644"),f.i18n("26ff46d82166741297ce666b2792af85")),type:"input-text",name:"labelField",value:l,placeholder:f.i18n("6d4ce0631f37676a887c9599691fabec"),onChange:this.handleLableFieldChange},{label:f.i18n("2e01f5f5889e33d003bec7857cd38445"),type:"input-text",name:"valueField",value:o,placeholder:f.i18n("959c27193eb0a41d01f4b53dcc4b9245"),onChange:this.handleValueFieldChange}]}))}}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,t=this.state,a=t.options,n=t.source,o=this.props,i=o.render,r=o.className,u=o.multiple;return m.default.createElement("div",{className:g.default("ae-OptionControl",r)},this.renderHeader(),"custom"===n?m.default.createElement("div",{className:"ae-OptionControl-wrapper"},Array.isArray(a)&&a.length?m.default.createElement("ul",{className:"ae-OptionControl-content",ref:this.dragRef},a.map((function(t,a){return e.renderOption(l.__assign(l.__assign({},t),{index:a,multipleProps:u}))}))):m.default.createElement("div",{className:"ae-OptionControl-placeholder"},"无选项"),m.default.createElement("div",{className:"ae-OptionControl-footer"},m.default.createElement(c.Button,{level:"enhance",onClick:this.handleAdd,ref:this.targetRef},"添加选项"),i("inner",this.buildBatchAddSchema(),{onSubmit:this.handleBatchAdd}))):null,this.renderApiPanel())}}),l.__decorate([b.autobind,l.__metadata("design:type",Function),l.__metadata("design:paramtypes",[Object]),l.__metadata("design:returntype",void 0)],t.prototype,"targetRef",null),l.__decorate([b.autobind,l.__metadata("design:type",Function),l.__metadata("design:paramtypes",[Object]),l.__metadata("design:returntype",void 0)],t.prototype,"dragRef",null),l.__decorate([b.autobind,l.__metadata("design:type",Function),l.__metadata("design:paramtypes",[String]),l.__metadata("design:returntype",void 0)],t.prototype,"handleSourceChange",null),l.__decorate([b.autobind,l.__metadata("design:type",Function),l.__metadata("design:paramtypes",[Number,String]),l.__metadata("design:returntype",void 0)],t.prototype,"handleEditLabel",null),l.__decorate([b.autobind,l.__metadata("design:type",Function),l.__metadata("design:paramtypes",[]),l.__metadata("design:returntype",void 0)],t.prototype,"handleAdd",null),l.__decorate([b.autobind,l.__metadata("design:type",Function),l.__metadata("design:paramtypes",[Object,Object]),l.__metadata("design:returntype",void 0)],t.prototype,"handleBatchAdd",null),l.__decorate([b.autobind,l.__metadata("design:type",Function),l.__metadata("design:paramtypes",[Object]),l.__metadata("design:returntype",void 0)],t.prototype,"handleAPIChange",null),l.__decorate([b.autobind,l.__metadata("design:type",Function),l.__metadata("design:paramtypes",[String]),l.__metadata("design:returntype",void 0)],t.prototype,"handleLableFieldChange",null),l.__decorate([b.autobind,l.__metadata("design:type",Function),l.__metadata("design:paramtypes",[String]),l.__metadata("design:returntype",void 0)],t.prototype,"handleValueFieldChange",null),t}(m.default.Component);!function(e){function t(){return null!==e&&e.apply(this,arguments)||this}l.__extends(t,e),t=l.__decorate([c.FormItem({type:"ae-optionControl",renderLabel:!1})],t)}(C),t.default=C}));