amis.define("841c73f",(function(e,a,n,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("849c8c1");e("a5149e9");var i=e("af1cc81"),o=e("c406116"),l=e("a2c664a"),d=e("cc4bbf0"),c=e("167c905"),u=e("8ba532b"),g=e("fb32b1a");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=s(i),b=s(o),v=s(l),k=s(d),m=function(e){var a,n=d.useState(0),t=n[0],i=n[1],o=e.noImage,l=e.render,c=o?["pure","gradient","noset"]:["pure","gradient","image","noset"];function s(a){return function(n){var t,i,o,l,d=null!==n&&"object"==typeof n?"object"==typeof n.target?n.target.value:n.value:n,c=e.value,u=e.onChange,g=r.__assign(r.__assign({},c),((t={})[a]=d,t));if("alpha"===a&&(g.backgroundColor=null===(i=g.backgroundColor)||void 0===i?void 0:i.replace(/,\s(1|0){1}.?[0-9]*\)$/g,", ".concat(n/100,")"))),"backgroundPosition"===a&&(g.backgroundPosition=n.target.getAttribute("data-pos")),"backgroundSize"===a){var s=null!=d?d:"",f=s.split(" ");f.length>1?(g.backgroundSize=f[0],g.backgroundRepeat=f[1]):(g.backgroundSize=s,g.backgroundRepeat="no-repeat")}if("angle"===a){var k=-1!==(m=null!==(o=g.backgroundImage)&&void 0!==o?o:"").indexOf("linear-gradient")?m:"linear-gradient(180deg, transparent, transparent)";g.backgroundImage=k.replace(/linear-gradient\(\d{1,3}/g,"linear-gradient(".concat(d))}if("gradientPrev"===a||"gradientNext"===a){var m,p=(k=-1!==(m=null!==(l=g.backgroundImage)&&void 0!==l?l:"").indexOf("linear-gradient")?m:"linear-gradient(180deg, transparent, transparent)").split(", "),_=p.length;if("gradientPrev"===a)if(3===_)p[1]=d;else if(5===_||6===_){for(var h=0,C=0,x=0;x<_;x++)-1!==p[x].indexOf("rgb")&&(h=x),-1!==p[x].indexOf(")")&&0===C&&(C=x);C===_-1?p.splice(1,1,d):p.splice(h,C+1,d)}else if(_>=7)for(x=0;x<_;x++){if(-1!==p[x].indexOf(")")){p.splice(1,x,d);break}}if("gradientNext"===a)if(3===_)p[2]=d+")";else if(5===_||6===_){for(h=0,C=0,x=0;x<_;x++)-1!==p[x].indexOf("rgb")&&(h=x),-1!==p[x].indexOf(")")&&0===C&&(C=x);C===_-1?p.splice(h,C+1,d+")"):p.splice(-1,1,d+")")}else if(_>=7){var I=0;for(x=0;x<_;x++){if(-1!==p[x].indexOf("rgb")&&2===++I){p.splice(x,_-x+1,d);break}}}g.backgroundImage=p.join(", "),g=b.default(g,"backgroundImage")}"alpha"!==a&&"backgroundColor"!==a||(g=b.default(g,"backgroundColor")),"backgroundImage"!==a&&"backgroundPosition"!==a&&"backgroundSize"!==a||(g=/linear-gradient/g.test(null==g?void 0:g.backgroundImage)?b.default(g,"backgroundPosition","backgroundSize","backgroundRepeat"):b.default(g,"backgroundImage","backgroundPosition","backgroundSize","backgroundRepeat")),u(r.__assign(r.__assign({},v.default(c,["backgroundColor","backgroundImage","backgroundPosition","backgroundSize","backgroundRepeat","angle","gradientNext","gradientPrev"])),g))}}function m(a){var n,t=null===(n=e.value)||void 0===n?void 0:n.backgroundImage,r="",i="";if(/linear-gradient/g.test(t)){var o=t.split(", "),l=o.length;if(3===l)r=o[1],i=o[2].slice(0,-1);else if(5===l||6===l)for(var d=0,c=0,u=0;u<l;u++)-1!==o[u].indexOf("rgb")&&(d=u),-1!==o[u].indexOf(")")&&0===c&&(c=u,u!==l-1?(r=o.slice(d,u+1).join(", "),i=o.slice(u+1).join("").slice(0,-1)):(r=o.slice(1,d).join(""),i=o.slice(d,l-1).join(", ")));else if(l>=7){var g=0,s=0,f=0,b=0;for(u=0;u<l;u++)-1!==o[u].indexOf("rgb")&&(0===g?g=u:0===f&&(f=u)),-1!==o[u].indexOf(")")&&(0===s?s=u:0===b&&(b=u));r=o.slice(g,s+1).join(", "),i=o.slice(f,b).join(", ")}t.split("")}var v="prev"===a?r:i;return"transparent"===v?"":v}function p(a,n){var t;"noset"===n&&(t=e.value,(0,e.onChange)(r.__assign(r.__assign({},t),{backgroundSize:"",backgroundPosition:"",backgroundColor:"",backgroundImage:""}))),i(a)}function _(a,n){var t,i,o=e.value,l=e.onChange,d={};if("backgroundColor"===a)d=r.__assign(r.__assign({},v.default(o,["backgroundImage","backgroundPosition","backgroundSize","backgroundRepeat","angle"])),((t={})[a]=n,t));else if("angle"===a){n=n||0;var c=null==o?void 0:o.backgroundImage,u=null==c?void 0:c.replace(/(\d{1,})?deg/,"".concat(n,"deg"));d=r.__assign(r.__assign({},o),{backgroundImage:u})}else d=r.__assign(r.__assign({},o),((i={})[a]=n,i));l(d)}var h=c[t];return d.useEffect((function(){var a;(null==(a=e.value)?void 0:a.backgroundColor)||(null==a?void 0:a.alpha)?i(0):(null==a?void 0:a.backgroundImage)?/linear-gradient/g.test(a.backgroundImage)?i(1):i(2):(null==a?void 0:a.backgroundPosition)||(null==a?void 0:a.backgroundSize)?i(2):i(c.length-1)}),[]),k.default.createElement("div",{className:"ae-Background"},k.default.createElement("div",{className:"ae-Background_tabs"},k.default.createElement("ul",{className:"ae-Background_tabs-nav"},c.map((function(e,a){return k.default.createElement("li",{key:a,className:f.default(e,{active:t===a}),onClick:function(){return p(a,e)}})}))),k.default.createElement("div",{className:"ae-Background_tabs-content"},"pure"===h&&k.default.createElement("div",{className:"ae-Background_setting"},l("backgroundColor",{type:"input-color",label:g.i18n("2f97db95d75280bfedc5afa72d2c717d"),format:"rgba",mode:"normal",value:null===(a=e.value)||void 0===a?void 0:a.backgroundColor},{onChange:function(e){return _("backgroundColor",e)}})),"gradient"===h&&k.default.createElement("div",{className:"ae-Background_setting"},k.default.createElement("div",{className:"ae-Background_setting-item"},k.default.createElement("div",{className:"ae-Background_setting-item_color"},l("prev",{type:"input-color",label:g.i18n("7241f67ee4fa8e0adb5d602b5f9516df"),clearable:!1,placeholder:g.i18n("9f1b854df133912bb46203e84f0594ee"),inputClassName:"ae-Background-colorpicker",value:m("prev")},{onChange:s("gradientPrev")})),k.default.createElement("div",{className:"ae-Background_setting-item_pic"}),k.default.createElement("div",{className:"ae-Background_setting-item_color"},l("next",{type:"input-color",label:g.i18n("8ea65e3d4e52c871d1c58b1926380ab0"),clearable:!1,placeholder:g.i18n("0c46a7f77a7247a9cc6d6e995c0ea8cb"),inputClassName:"ae-Background-colorpicker",value:m("next")},{onChange:s("gradientNext")}))),k.default.createElement("div",{className:"ae-Background_setting-item"},l("gradient",{type:"input-number",label:g.i18n("c7706039e8ad85969df13ce3458d199a"),mode:"row",step:10,min:0,max:360,value:function(){var a,n=null===(a=e.value)||void 0===a?void 0:a.backgroundImage,t=180,r=/linear-gradient\((\d{1,3})/.exec(String(n||""));return r&&(t=+r[1]),+t}(),description:g.i18n("f4882cbf65b232af449d7289354b9a16")},{onChange:function(e){return _("angle",e)}}))),"image"===h&&k.default.createElement("div",{className:"ae-Background_setting"},l("image",{type:"group",mode:"horizontal",body:[u.getSchemaTpl("backgroundImageUrl",{name:"backgroundImage",placeholder:g.i18n("5b9ea77bb6ce2d6c82e97b120d757201"),fixedSize:!0,value:function(){var a,n,t=null===(n=null===(a=e.data)||void 0===a?void 0:a.style)||void 0===n?void 0:n.backgroundImage;return/linear-gradient/g.test(t)?"":t}(),onChange:s("backgroundImage"),fixedSizeClassName:"ae-Background-upload",accept:".jpg,.png,.svg,.gif",crop:!0,columnRatio:6,horizontal:{left:4,right:8}}),{type:"",label:g.i18n("61a87a021904dc65995e99d4c476cb21"),name:"backgroundPosition",asFormItem:!0,columnRatio:6,horizontal:{left:4,right:8},children:function(){return k.default.createElement("ul",{className:"ae-Background_setting—pos"},["0 0","50% 0","100% 0","0 50%","50% 50%","100% 50%","0 100%","50% 100%","100% 100%"].map((function(a){var n;return k.default.createElement("li",{key:a,"data-pos":a,className:f.default("ae-Background_setting—pos_item",{active:a===(null===(n=e.value)||void 0===n?void 0:n.backgroundPosition)}),onClick:s("backgroundPosition")})})))}}]}),l("size",{type:"select",label:g.i18n("737391648d1216a1f84ac9ff52da5aa2"),name:"backgroundSize",mode:"horizontal",placeholder:g.i18n("737391648d1216a1f84ac9ff52da5aa2"),value:function(){var a,n,t=null===(a=e.value)||void 0===a?void 0:a.backgroundSize,r=null===(n=e.value)||void 0===n?void 0:n.backgroundRepeat,i=t||"";return"auto"===t&&r&&(i=t+" "+r),i}(),options:[{label:g.i18n("0f1fd39145bad43e18f81337e0144c8c"),value:"cover"},{label:g.i18n("e0d76824dfe5e09c7068b44f605266d2"),value:"contain"},{label:g.i18n("e39d3b7a3600d9327221a637f910fc0b"),value:"100%"},{label:g.i18n("e1ff2c83c09f2dc6cc74ae02ab6b8222"),value:"auto repeat"},{label:g.i18n("7ddd9dbf373f760acfd63778469b5c4b"),value:"auto repeat-x"},{label:g.i18n("4ab931e0f709f9b493e660156925a113"),value:"auto repeat-y"},{label:g.i18n("21f3929a4484e6e992af64ec1dd3a576"),value:"auto no-repeat"}]},{onChange:function(e){return _("backgroundSize",e)}})),"noset"===h&&k.default.createElement("div",{className:"ae-Background_setting noset"}))))};!function(e){function a(){return null!==e&&e.apply(this,arguments)||this}r.__extends(a,e),Object.defineProperty(a.prototype,"render",{enumerable:!1,configurable:!0,writable:!0,value:function(){return k.default.createElement(m,r.__assign({},this.props))}}),a=r.__decorate([c.FormItem({type:"style-background"})],a)}(k.default.Component),a.default=m}));