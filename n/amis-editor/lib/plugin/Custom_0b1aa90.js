amis.define("d03cfb8",(function(e,n,t,l){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("849c8c1"),r=e("8ba532b"),i=e("fb32b1a"),o=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(n,"rendererName",{enumerable:!0,configurable:!0,writable:!0,value:"custom"}),Object.defineProperty(n,"$schema",{enumerable:!0,configurable:!0,writable:!0,value:"/schemas/CustomSchema.json"}),Object.defineProperty(n,"name",{enumerable:!0,configurable:!0,writable:!0,value:i.i18n("473d2078518479669823205110842376")}),Object.defineProperty(n,"isBaseComponent",{enumerable:!0,configurable:!0,writable:!0,value:!0}),Object.defineProperty(n,"description",{enumerable:!0,configurable:!0,writable:!0,value:i.i18n("8b9c77fa4e646b9cb270f833252e511b")}),Object.defineProperty(n,"tags",{enumerable:!0,configurable:!0,writable:!0,value:[i.i18n("997c7a5d34f6fc628893f509d0df32e0")]}),Object.defineProperty(n,"icon",{enumerable:!0,configurable:!0,writable:!0,value:"fa fa-gears"}),Object.defineProperty(n,"pluginIcon",{enumerable:!0,configurable:!0,writable:!0,value:"custom-plugin"}),Object.defineProperty(n,"docLink",{enumerable:!0,configurable:!0,writable:!0,value:"/amis/zh-CN/components/custom"}),Object.defineProperty(n,"scaffold",{enumerable:!0,configurable:!0,writable:!0,value:{type:"custom",html:"<div><h2>hello, world!</h2></div>",onMount:"\n      const button = document.createElement('button');\n      button.innerText = '点击修改姓名';\n      button.onclick = event => {\n        event.preventDefault();\n      };\n      dom.appendChild(button);"}}),Object.defineProperty(n,"previewSchema",{enumerable:!0,configurable:!0,writable:!0,value:a.__assign({},n.scaffold)}),Object.defineProperty(n,"panelTitle",{enumerable:!0,configurable:!0,writable:!0,value:i.i18n("473d2078518479669823205110842376")}),Object.defineProperty(n,"panelBody",{enumerable:!0,configurable:!0,writable:!0,value:[r.getSchemaTpl("layout:originPosition",{value:"left-top"}),r.getSchemaTpl("fieldSet",{title:i.i18n("0b13dc6251002bf556263fb3e4675b11"),body:[{label:i.i18n("0b13dc6251002bf556263fb3e4675b11"),name:"html",type:"editor",allowFullscreen:!0}]}),r.getSchemaTpl("fieldSet",{title:"onMount",body:[{name:"onMount",type:"editor",allowFullscreen:!0,size:"xxl",label:i.i18n("d6b917c76b92aa9b92b6bebdcab993f3"),options:{lineNumbers:"off",glyphMargin:!1,lineDecorationsWidth:0,lineNumbersMinChars:0}}]}),r.getSchemaTpl("fieldSet",{title:"onUpdate",body:[{name:"onUpdate",type:"editor",allowFullscreen:!0,size:"xxl",label:i.i18n("e64739dd24bb0bfcb6f6e1ee2cce5413")}]}),r.getSchemaTpl("fieldSet",{title:"onUnmount",body:[{name:"onUnmount",type:"editor",allowFullscreen:!0,size:"xxl",label:i.i18n("0601b7aa5b53cbc3616e24719bcd2aaa")}]})]}),n}return a.__extends(n,e),Object.defineProperty(n.prototype,"buildSubRenderers",{enumerable:!1,configurable:!0,writable:!0,value:function(n,t){var l=e.prototype.buildSubRenderers.apply(this,arguments);return l.scaffold.onMount="\n        const button = document.createElement('button');\n        button.innerText = '点击修改姓名ddd';\n        button.onclick = event => {\n          onChange('new name');\n          event.preventDefault();\n        };\n        dom.appendChild(button);",l}}),n}(r.BasePlugin);r.registerEditorPlugin(o),n.CustomPlugin=o}));