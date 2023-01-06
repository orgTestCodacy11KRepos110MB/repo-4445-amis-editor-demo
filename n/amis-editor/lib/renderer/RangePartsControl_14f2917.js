amis.define("e5c2959",(function(e,t,a,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=e("849c8c1"),o=e("cc4bbf0"),i=e("af1cc81"),l=e("167c905"),s=e("8ba532b"),u=e("fb32b1a");function c(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=c(o),p=c(i),m="NO_BLOCK",b="AVERAGE",f="STEPS",h="CUSTOM",y="PARKS",_="CUSTOM",g=[{label:u.i18n("5b4ffa2eadaf629b833b37a3e8742b2c"),value:m},{label:u.i18n("3569877e498155b59ef5299870c43f80"),value:b},{label:u.i18n("15e1fdd9d5cc4dc595fba0eee0719cba"),value:f},{label:u.i18n("f1d4ff50f3828f9b73412e7d94e6dd6e"),value:h}],v=[{label:u.i18n("56d37871117270ce5d157a8de90dacd6"),value:y},{label:u.i18n("f1d4ff50f3828f9b73412e7d94e6dd6e"),value:_}],C=function(e,t){return Array.isArray(e)?h:e>1?b:t?f:m},O=function(e){function t(t){var a=e.call(this,t)||this,n=t.data,r=n.parts,o=void 0===r?1:r,i=n.showSteps;return a.state={options:a.transformOptionValue(C(o),o),source:C(o,i),parts:o},a}return r.__extends(t,e),Object.defineProperty(t.prototype,"transformOptionValue",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){return e===h&&Array.isArray(t)?t.map((function(e){return{number:Number(e)}})):[]}}),Object.defineProperty(t.prototype,"onChange",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.state,t=e.source,a=e.parts,n=e.options,r=this.props.onBulkChange,o={parts:a,showSteps:!1};switch(t){case m:o.parts=1;break;case b:o.parts=a;break;case f:o.parts=1,o.showSteps=!0;break;case h:o.parts=[],n&&n.length&&n.forEach((function(e){o.parts.push(e.number)}))}r&&r(o)}}),Object.defineProperty(t.prototype,"handleSourceChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.setState({source:e},this.onChange)}}),Object.defineProperty(t.prototype,"handleOptionsChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){void 0===e&&(e=[]),this.setState({options:e},this.onChange)}}),Object.defineProperty(t.prototype,"renderHeader",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e,t=this.props,a=t.env,n=t.render,r=this.state.source,o=null===(e=null==a?void 0:a.theme)||void 0===e?void 0:e.classPrefix;return d.default.createElement("div",{className:p.default("".concat(o,"Form-item"),"".concat(o,"Form-item--horizontal"),"".concat(o,"Form-item--horizontal-justify"))},d.default.createElement("label",{className:p.default("".concat(o,"Form-label"),"".concat(o,"Form-itemColumn--4"))},"分块"),d.default.createElement("div",{className:p.default("".concat(o,"Form-value"))},n("header",{type:"select",name:"optionSourceList",options:g,value:r,onChange:this.handleSourceChange})))}}),Object.defineProperty(t.prototype,"renderContent",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=this,a=this.props,n=a.classPrefix,r=a.render,o=this.state,i=o.parts,c=o.options;return e===b?d.default.createElement("div",{className:p.default("ae-ExtendMore","".concat(n,"Form-item"),"".concat(n,"Form-item--horizontal"),"".concat(n,"Form-item--horizontal-justify"))},d.default.createElement("label",{className:p.default("".concat(n,"Form-label"),"".concat(n,"Form-itemColumn--4"))},"块数"),d.default.createElement("div",{className:p.default("".concat(n,"Form-value"))},d.default.createElement(l.NumberInput,{value:i,onChange:this.handlePartsChange}))):e===h?d.default.createElement("div",{className:"ae-OptionControl-wrapper"},r("content",s.getSchemaTpl("combo-container",{type:"combo",label:!1,name:"texts",items:[{type:"input-number",name:"number",require:!0}],draggable:!1,multiple:!0,value:c,onChange:function(e){return t.setState({options:e},t.onChange)},addButtonText:u.i18n("1c8737ec7da60e12207c9eb04ccabcd4")}))):d.default.createElement(d.default.Fragment,null)}}),Object.defineProperty(t.prototype,"handlePartsChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.setState({parts:e},this.onChange)}}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props.className,t=this.state.source;return d.default.createElement("div",{className:p.default("ae-OptionControl",e)},this.renderHeader(),this.renderContent(t))}}),r.__decorate([s.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[String,Object]),r.__metadata("design:returntype",void 0)],t.prototype,"transformOptionValue",null),r.__decorate([s.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[String]),r.__metadata("design:returntype",void 0)],t.prototype,"handleSourceChange",null),r.__decorate([s.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[Array]),r.__metadata("design:returntype",void 0)],t.prototype,"handleOptionsChange",null),r.__decorate([s.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[Number]),r.__metadata("design:returntype",void 0)],t.prototype,"handlePartsChange",null),t}(d.default.Component),S=function(e){function t(t){var a=e.call(this,t)||this,n=t.data.marks,r=void 0===n?{}:n;return a.state={options:a.transformOptionValue(r),source:Object.keys(r).length?_:y},a}return r.__extends(t,e),Object.defineProperty(t.prototype,"componentDidUpdate",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=e.data,a=t.parts,n=t.unit,r=t.max,o=t.min,i=t.showSteps,l=this.props.data,s=l.parts,u=l.unit,c=l.max,d=l.min,p=l.showSteps,m=this.state.source;a===s&&n===u&&r===c&&o===d&&i===p||m===y&&this.onSynchronismParts()}}),Object.defineProperty(t.prototype,"transformOptionValue",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return Object.keys(e).map((function(t){return{number:+t,label:e[t]}}))}}),Object.defineProperty(t.prototype,"onChange",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.state.options,t=this.props.onChange,a={};e&&e.length&&e.forEach((function(e){a[e.number]=e.label||e.number})),t&&t(a)}}),Object.defineProperty(t.prototype,"onSynchronismParts",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this.props.data,t=e.parts,a=e.max,n=e.min,r=e.step,o=void 0===r?1:r,i=e.unit,l=void 0===i?"":i,s=e.showSteps,u=[];switch(C(t,s)){case b:for(var c=(a-n)/t,d=0;d<=t;d++)u.push({number:d*c+n,label:d*c+n+l});break;case f:var p=(a-n)/o;for(d=0;d<=p;d++)u.push({number:d*o+n,label:d*o+n+l});break;case h:Array.isArray(t)&&t.forEach((function(e){(e||0===e)&&u.push({number:e,label:e+l})}))}this.setState({options:u},this.onChange)}}),Object.defineProperty(t.prototype,"handleSourceChange",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.setState({source:e}),e===y&&this.onSynchronismParts()}}),Object.defineProperty(t.prototype,"renderHeader",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e,t=this.props,a=t.env,n=t.render,r=this.state.source,o=null===(e=null==a?void 0:a.theme)||void 0===e?void 0:e.classPrefix;return d.default.createElement("div",{className:p.default("".concat(o,"Form-item"),"".concat(o,"Form-item--horizontal"),"".concat(o,"Form-item--horizontal-justify"))},d.default.createElement("label",{className:p.default("".concat(o,"Form-label"),"".concat(o,"Form-itemColumn--4"))},"下标"),d.default.createElement("div",{className:p.default("".concat(o,"Form-value"))},n("header",{type:"select",name:"optionSourceList",options:v,value:r,onChange:this.handleSourceChange})))}}),Object.defineProperty(t.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this,t=this.props,a=t.className,n=t.render,r=this.state,o=r.source,i=r.options;return d.default.createElement("div",{className:p.default("ae-OptionControl",a)},this.renderHeader(),o===_&&n("inner",s.getSchemaTpl("combo-container",{type:"combo",label:!1,name:"texts",draggable:!1,multiple:!0,items:[{type:"input-number",name:"number",required:!0},{type:"input-text",name:"label",required:!0}],addButtonText:u.i18n("662d8b49913650f543c024d4d02009a2"),value:i,onChange:function(t){e.setState({options:t},e.onChange)}})))}}),r.__decorate([s.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[Object]),r.__metadata("design:returntype",void 0)],t.prototype,"transformOptionValue",null),r.__decorate([s.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[]),r.__metadata("design:returntype",void 0)],t.prototype,"onChange",null),r.__decorate([s.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[]),r.__metadata("design:returntype",void 0)],t.prototype,"onSynchronismParts",null),r.__decorate([s.autobind,r.__metadata("design:type",Function),r.__metadata("design:paramtypes",[Object]),r.__metadata("design:returntype",void 0)],t.prototype,"handleSourceChange",null),t}(d.default.Component);!function(e){function t(){return null!==e&&e.apply(this,arguments)||this}r.__extends(t,e),t=r.__decorate([l.FormItem({type:"ae-partsControl",renderLabel:!1})],t)}(O),function(e){function t(){return null!==e&&e.apply(this,arguments)||this}r.__extends(t,e),t=r.__decorate([l.FormItem({type:"ae-marksControl",renderLabel:!1})],t)}(S),t.MarksControl=S,t.PartsControl=O}));