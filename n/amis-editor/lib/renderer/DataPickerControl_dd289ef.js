amis.define("b60c600",(function(e,t,a,n){"use strict";var r=e("849c8c1"),i=e("167c905"),o=e("cc4bbf0"),l=e("8ba532b");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=s(o),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),Object.defineProperty(t.prototype,"handleConfirm",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.props.onChange(e)}}),Object.defineProperty(t.prototype,"handlePickerOpen",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e;return r.__awaiter(this,void 0,void 0,(function(){var t,a,n,i;return r.__generator(this,(function(o){switch(o.label){case 0:return t=this.props,a=t.manager,n=t.node,(i=null!==(e=this.props.variables)&&void 0!==e?e:this.props.data.variables)?[3,2]:[4,a.getContextSchemas(n.info.id)];case 1:o.sent(),i=a.dataSchema.getDataPropsAsOptions(),o.label=2;case 2:return[2,{variables:i.map((function(e){return r.__assign(r.__assign({},e),{selectMode:"tree"})})),variableMode:"tabs"}]}}))}))}}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props;e.classnames;var t=e.value,a=e.onChange,n=e.disabled;return e.manager,e.node,c.default.createElement(i.FormulaPicker,{onPickerOpen:this.handlePickerOpen,evalMode:!1,onConfirm:this.handleConfirm,value:t,onChange:function(){},header:""},(function(e){var r=e.onClick;return c.default.createElement(i.InputBox,{className:"ae-InputVariable",clearable:!1,value:t,onChange:a,disabled:n},c.default.createElement("span",{onClick:r},c.default.createElement(i.Icon,{icon:"info",className:"icon"})))}))}}),r.__decorate([l.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[String]),r.__metadata("design:returntype",void 0)],t.prototype,"handleConfirm",null),r.__decorate([l.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[]),r.__metadata("design:returntype",Promise)],t.prototype,"handlePickerOpen",null),t}(c.default.Component);!function(e){function t(){return null!==e&&e.apply(this,arguments)||this}r.__extends(t,e),t=r.__decorate([i.FormItem({type:"ae-DataPickerControl",renderLabel:!1})],t)}(u)}));