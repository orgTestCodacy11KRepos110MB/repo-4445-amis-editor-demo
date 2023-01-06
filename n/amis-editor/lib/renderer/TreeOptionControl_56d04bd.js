amis.define("6692eaa",(function(e,t,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("849c8c1"),l=e("cc4bbf0"),o=e("af1cc81"),i=e("5850c09"),d=e("855772d"),u=e("80b514b"),s=e("3c006bc"),c=e("167c905"),p=e("8ba532b"),b=e("fb32b1a");function f(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var h=f(l),g=f(o),m=f(i),v=f(d),_=f(u),y=f(s),O={label:"",value:""},C=function(e){function t(t){var a=e.call(this,t)||this;Object.defineProperty(a,"sortables",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(a,"drag",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(a,"internalProps",{enumerable:!0,configurable:!0,writable:!0,value:["checked","editing"]});var n=t.data||{},r=n.source,l=n.labelField,o=n.valueField,i=n.showIconField,d=n.iconField;return a.state={options:a.transformOptions(t),api:r,labelField:l,valueField:o,iconField:i?d:void 0,source:r?"api":"custom",modalVisible:!1},a.sortables=[],a}return r.__extends(t,e),Object.defineProperty(t.prototype,"transformOptions",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=e.data.options;return t&&t.length?t:[r.__assign({},O)]}}),Object.defineProperty(t.prototype,"pretreatOptions",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this;return Array.isArray(e)?e.map((function(e){return e.children&&e.children.length&&(e.children=t.pretreatOptions(e.children)),e.value=null==e.value||""===e.value?e.label:e.value,e})):[]}}),Object.defineProperty(t.prototype,"onChange",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.state.source,t=this.props.onBulkChange,a={source:void 0,options:void 0,labelField:void 0,valueField:void 0,iconField:void 0};if("custom"===e){var n=this.state.options.concat();a.options=this.pretreatOptions(n)}if("api"===e||"apicenter"===e){var r=this.state,l=r.api,o=r.labelField,i=r.valueField,d=r.iconField;a.source=l,a.labelField=o,a.valueField=i,a.iconField=d}t&&t(a)}}),Object.defineProperty(t.prototype,"handleSourceChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.setState({source:e},this.onChange)}}),Object.defineProperty(t.prototype,"renderHeader",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e,t=this,a=this.props,n=a.render,l=a.label,o=a.labelRemark,i=a.useMobileUI,d=a.env,u=a.popOverContainer,s=a.hasApiCenter,c=null===(e=null==d?void 0:d.theme)||void 0===e?void 0:e.classPrefix,p=this.state.source,f=r.__spreadArray([{label:b.i18n("01820262aa9ad5b130f8f5b86bfd2968"),value:"custom"},{label:b.i18n("f99603414a616bdee85de0e6e3938b65"),value:"api"}],s?[{label:b.i18n("e6ff6a97bf600c02942db3126a7077b8"),value:"apicenter"}]:[],!0).map((function(e){return r.__assign(r.__assign({},e),{onClick:function(){return t.handleSourceChange(e.value)}})}));return h.default.createElement("header",{className:"ae-TreeOptionControl-header"},h.default.createElement("label",{className:g.default("".concat(c,"Form-label"))},l||"",o?n("label-remark",{type:"remark",icon:o.icon||"warning-mark",tooltip:o,className:g.default("Form-lableRemark",null==o?void 0:o.className),useMobileUI:i,container:u||(d&&d.getModalContainer?d.getModalContainer:void 0)}):null),h.default.createElement("div",null,n("validation-control-addBtn",{type:"dropdown-button",level:"link",size:"sm",label:"${selected}",align:"right",closeOnClick:!0,closeOnOutside:!0,buttons:f},{popOverContainer:null,data:{selected:f.find((function(e){return e.value===p})).label}})))}}),Object.defineProperty(t.prototype,"handleEditLabelOrValue",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,a){var n=this,r=m.default(this.state.options),l=this.getNodePath(t).path;_.default(r,"".concat(l,".").concat(a),e),this.setState({options:r},(function(){return n.rereshBindDrag()}))}}),Object.defineProperty(t.prototype,"handleDelete",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var a,n=this,r=m.default(this.state.options);if(1!==r.length){if(1===e.split("-").length)r.splice(t,1);else{var l=this.getNodePath(e).parentPath,o=v.default(r,l,{});null===(a=null==o?void 0:o.children)||void 0===a||a.splice(t,1),(null==o?void 0:o.children.length)||delete o.children,_.default(r,l,o)}this.setState({options:r},(function(){return n.rereshBindDrag()}))}else c.toast.warning(b.i18n("355c54009e364bf4396be424fba10e0f"),{closeButton:!0})}}),Object.defineProperty(t.prototype,"getNodePath",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=e.split("-");if(1===t.length)return{path:t,parentPath:""};var a="[".concat(t.join("].children["),"]");return t=t.slice(0,t.length-1),{path:a,parentPath:"[".concat(t.join("].children["),"]")}}}),Object.defineProperty(t.prototype,"addOption",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t,a=this,n=m.default(this.state.options),l=e.split("-");if(1===l.length)n.splice(+l[0]+1,0,r.__assign({},O));else{var o=l[l.length-1],i=this.getNodePath(e).parentPath,d=v.default(n,i,{});null===(t=d.children)||void 0===t||t.splice(+o+1,0,r.__assign({},O)),_.default(n,i,d)}this.setState({options:n},(function(){return a.rereshBindDrag()}))}}),Object.defineProperty(t.prototype,"addChildOption",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this;if(e.split("-").length>=6)c.toast.warning(b.i18n("9046ad86a1a47f16e954f2ec38fb680a"),{closeButton:!0});else{var a=m.default(this.state.options),n=this.getNodePath(e).path,l=v.default(a,n)||[];l.children?l.children.push(r.__assign({},O)):l.children=[r.__assign({},O)],_.default(a,n,l),this.setState({options:a},(function(){return t.rereshBindDrag()}))}}}),Object.defineProperty(t.prototype,"hideModal",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.setState({modalVisible:!1}),e||this.setState({options:this.transformOptions(this.props)})}}),Object.defineProperty(t.prototype,"renderOptions",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,a){var n=this,r=this.props.render,l=a.join("-");if(e.children&&e.children.length){var o=m.default(e);return delete o.children,h.default.createElement("div",{className:g.default("ae-TreeOptionControlItem-parent"),key:"parent".concat(l).concat(t).concat(e.label)},this.renderOptions(o,t,a),h.default.createElement("div",{className:g.default("ae-TreeOptionControlItem-son"),key:"son".concat(l).concat(t).concat(e.label),"data-level":l},e.children.map((function(e,t){return n.renderOptions(e,t,a.concat(t))}))))}return h.default.createElement("div",{className:"ae-TreeOptionControlItem",key:"child".concat(l).concat(t).concat(e.label),"data-path":l},h.default.createElement("a",{className:"ae-TreeOptionControlItem-dragBar"},h.default.createElement(c.Icon,{icon:"drag-bar",className:"icon"})),h.default.createElement(c.InputBox,{className:"ae-TreeOptionControlItem-input-label",value:e.label,placeholder:"选项名称",clearable:!1,onBlur:function(e){n.handleEditLabelOrValue(e.target.value,l,"label")}}),h.default.createElement(c.InputBox,{className:"ae-TreeOptionControlItem-input-value",value:e.value,placeholder:"选项值",clearable:!1,onBlur:function(e){n.handleEditLabelOrValue(e.target.value,l,"value")}}),h.default.createElement("div",{className:"ae-TreeOptionControlItem-btns"},r("dropdown",{type:"dropdown-button",className:"ae-TreeOptionControlItem-dropdown fa-sm",btnClassName:"px-2",icon:"add",hideCaret:!0,closeOnClick:!0,trigger:"hover",align:"right",menuClassName:"ae-TreeOptionControlItem-ulmenu",buttons:[{type:"button",className:"ae-OptionControlItem-action",label:b.i18n("e8755fb1e985a5d26df0fce1f0b7b0f8"),onClick:function(){n.addOption(l)}},{type:"button",className:"ae-OptionControlItem-action",label:b.i18n("bbcbe681f9225f8adf3663f563a9f294"),onClick:function(){n.addChildOption(l)}}]},{popOverContainer:null}),h.default.createElement(c.Button,{size:"sm",onClick:function(){n.handleDelete(l,t)}},h.default.createElement(c.Icon,{className:"icon",icon:"delete-bold-btn"}))))}}),Object.defineProperty(t.prototype,"dragRef",{enumerable:!1,configurable:!0,writable:!0,value:function(e){!this.drag&&e?(this.drag=e,this.initDragging()):this.drag&&!e&&this.destroyDragging(!0)}}),Object.defineProperty(t.prototype,"rereshBindDrag",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.drag&&(this.destroyDragging(),this.initDragging())}}),Object.defineProperty(t.prototype,"initDragging",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e,t=this,a=new y.default(this.drag,{group:"TreeOptionControlGroup",animation:150,handle:".ae-TreeOptionControlItem-dragBar",ghostClass:"ae-TreeOptionControlItem-dragging",onEnd:function(e){var a,n=m.default(t.state.options),r=e.oldIndex,l=e.newIndex;a=[n[r],n[l]],n[l]=a[0],n[r]=a[1],t.setState({options:n},(function(){return t.rereshBindDrag()}))},onMove:function(e){var t=e.from,a=e.to;return t.dataset.level===a.dataset.level}});this.sortables.push(a);var n=null===(e=this.drag)||void 0===e?void 0:e.querySelectorAll(".ae-TreeOptionControlItem-son");n&&Array.from(n).forEach((function(e){var a=new y.default(e,{group:"TreeOptionControlGroup",animation:150,handle:".ae-TreeOptionControlItem-dragBar",ghostClass:"ae-TreeOptionControlItem-dragging",onEnd:function(e){var a,n=e.item,r=e.oldIndex,l=e.newIndex,o=m.default(t.state.options),i=n.dataset.path;if(i){var d=t.getNodePath(i).parentPath,u=v.default(o,"".concat(d,".children"))||[];u&&(a=[u[l],u[r]],u[r]=a[0],u[l]=a[1],_.default(o,"".concat(d,".children"),u),t.setState({options:o}))}},onMove:function(e){var t=e.from,a=e.to;return t.dataset.level===a.dataset.level}});t.sortables.push(a)}))}}),Object.defineProperty(t.prototype,"destroyDragging",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.sortables.forEach((function(e){null==e||e.destroy()})),this.sortables=[],e&&(this.drag=null)}}),Object.defineProperty(t.prototype,"renderModal",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,t=this.state,a=t.modalVisible,n=t.options;return h.default.createElement(c.Modal,{className:"ae-TreeOptionControl-Modal",show:a,onHide:function(){e.hideModal()}},h.default.createElement(c.Modal.Header,{onClose:function(){e.hideModal()}},"选项管理"),h.default.createElement(c.Modal.Body,null,h.default.createElement("div",{className:"ae-TreeOptionControl-content",ref:this.dragRef},n.map((function(t,a){return e.renderOptions(t,a,[a])})))),h.default.createElement(c.Modal.Footer,null,h.default.createElement(c.Button,{onClick:function(){e.hideModal()}},"取消"),h.default.createElement(c.Button,{level:"primary",onClick:function(){e.onChange(),e.hideModal(!0)}},"确认")))}}),Object.defineProperty(t.prototype,"handleAPIChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.setState({api:e},this.onChange)}}),Object.defineProperty(t.prototype,"handleLableFieldChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.setState({labelField:e},this.onChange)}}),Object.defineProperty(t.prototype,"handleValueFieldChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.setState({valueField:e},this.onChange)}}),Object.defineProperty(t.prototype,"handleIconFieldChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.setState({iconField:e},this.onChange)}}),Object.defineProperty(t.prototype,"renderApiPanel",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props,t=e.render,a=e.showIconField,n=void 0!==a&&a,r=this.state,l=r.source,o=r.api,i=r.labelField,d=r.valueField,u=r.iconField;return"custom"===l?null:t("api",p.getSchemaTpl("apiControl",{label:b.i18n("54ea89b497ec3bb319c68844dfa3687f"),name:"source",className:"ae-ExtendMore",visibleOn:"data.autoComplete !== false",value:o,onChange:this.handleAPIChange,sourceType:l,footer:[{label:p.tipedLabel(b.i18n("7e9c83e86beb612377a94e6e8d1fc644"),b.i18n("26ff46d82166741297ce666b2792af85")),type:"input-text",name:"labelField",value:i,placeholder:b.i18n("6d4ce0631f37676a887c9599691fabec"),onChange:this.handleLableFieldChange},{label:b.i18n("2e01f5f5889e33d003bec7857cd38445"),type:"input-text",name:"valueField",value:d,placeholder:b.i18n("959c27193eb0a41d01f4b53dcc4b9245"),onChange:this.handleValueFieldChange},{type:"input-text",label:b.i18n("1cd9e1bb335cb0643d9e310dd4edd830"),name:"iconField",value:u,placeholder:b.i18n("152b66069787294e53cfc176a189c81f"),visible:n,onChange:this.handleIconFieldChange}]}))}}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,t=this.state.source,a=this.props.className;return h.default.createElement("div",{className:g.default("ae-TreeOptionControl",a)},this.renderHeader(),"custom"===t?h.default.createElement("div",{className:"ae-TreeOptionControl-wrapper"},h.default.createElement("div",null,h.default.createElement(c.Button,{block:!0,onClick:function(){e.setState({modalVisible:!0})}},"选项管理"),this.renderModal())):null,this.renderApiPanel())}}),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[String]),r.__metadata("design:returntype",void 0)],t.prototype,"handleSourceChange",null),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[String,Number]),r.__metadata("design:returntype",void 0)],t.prototype,"handleDelete",null),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[String]),r.__metadata("design:returntype",void 0)],t.prototype,"getNodePath",null),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[String]),r.__metadata("design:returntype",void 0)],t.prototype,"addOption",null),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[String]),r.__metadata("design:returntype",void 0)],t.prototype,"addChildOption",null),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[Boolean]),r.__metadata("design:returntype",void 0)],t.prototype,"hideModal",null),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[Object,Number,Array]),r.__metadata("design:returntype",Object)],t.prototype,"renderOptions",null),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[Object]),r.__metadata("design:returntype",void 0)],t.prototype,"dragRef",null),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[Boolean]),r.__metadata("design:returntype",void 0)],t.prototype,"destroyDragging",null),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[]),r.__metadata("design:returntype",void 0)],t.prototype,"renderModal",null),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[Object]),r.__metadata("design:returntype",void 0)],t.prototype,"handleAPIChange",null),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[String]),r.__metadata("design:returntype",void 0)],t.prototype,"handleLableFieldChange",null),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[String,Object]),r.__metadata("design:returntype",void 0)],t.prototype,"handleValueFieldChange",null),r.__decorate([p.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[String]),r.__metadata("design:returntype",void 0)],t.prototype,"handleIconFieldChange",null),t}(h.default.Component);!function(e){function t(){return null!==e&&e.apply(this,arguments)||this}r.__extends(t,e),t=r.__decorate([c.FormItem({type:"ae-treeOptionControl",renderLabel:!1})],t)}(C),t.default=C}));