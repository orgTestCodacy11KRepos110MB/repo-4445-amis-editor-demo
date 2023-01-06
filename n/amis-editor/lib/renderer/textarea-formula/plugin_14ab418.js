amis.define("4bd06fd",(function(e,t,r,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("2b4d884");var o=function(){function e(e,t,r,i){Object.defineProperty(this,"editor",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"cm",{enumerable:!0,configurable:!0,writable:!0,value:t}),Object.defineProperty(this,"getProps",{enumerable:!0,configurable:!0,writable:!0,value:r}),Object.defineProperty(this,"onExpressionClick",{enumerable:!0,configurable:!0,writable:!0,value:i});var n=this.getProps().value;n&&(this.autoMark(),this.focus(n))}return Object.defineProperty(e.prototype,"autoMark",{enumerable:!1,configurable:!0,writable:!0,value:function(){for(var e=this.editor,t=e.lineCount(),r=0;r<t;r++)for(var i=e.getLine(r),n=this.computedBracesPosition(i),o=0;o<n.length;o++){var a=n[o].begin,l=n[o].end,c=i.slice(a,l);this.markExpression({line:r,ch:a-2},{line:r,ch:l+1},c)}}}),Object.defineProperty(e.prototype,"getExpressionBrace",{enumerable:!1,configurable:!0,writable:!0,value:function(e){for(var t=this.editor,r=t.lineCount(),i=0;i<r;i++)for(var n=t.getLine(i),o=this.computedBracesPosition(n),a=0;a<o.length;a++){var l=o[a].begin,c=o[a].end;if(e===n.slice(l,c))return[{line:i,ch:l-2},{line:i,ch:c+1}]}}}),Object.defineProperty(e.prototype,"computedBracesPosition",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var t=[];return null==e||e.replace(/\$\{/g,(function(r,i){if(r)for(var n=e.slice(i+r.length).split(""),o=["${"],a=0;a<n.length;a++){var l=n[a];if("$"===l&&"{"===n[a+1]?o.push("${"):"}"===l&&o.pop(),0===o.length){t.push({begin:i+2,end:a+i+2});break}}return""})),t}}),Object.defineProperty(e.prototype,"checkStrIsInBraces",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var r=e[0],i=e[1],n=!1;if(t.length)for(var o=0;o<t.length;o++){var a=t[o];if(r>=a.begin&&i<=a.end){n=!0;break}}return n}}),Object.defineProperty(e.prototype,"insertBraces",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){var r=this.editor.getValue(),i=this.computedBracesPosition(r);this.checkStrIsInBraces([e.ch,t.ch],i)||(this.editor.setCursor({line:e.line,ch:e.ch}),this.editor.replaceSelection("${"),this.editor.setCursor({line:t.line,ch:t.ch+2}),this.editor.replaceSelection("}"))}}),Object.defineProperty(e.prototype,"insertContent",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,r){if(r){var i=r[0],n=r[1];"expression"===t?(this.editor.replaceRange(e,i,n),this.autoMark()):"string"==typeof e&&this.editor.replaceRange(e,i,n)}else"expression"===t?(this.editor.replaceSelection(e),this.autoMark()):"string"==typeof e&&this.editor.replaceSelection(e),this.editor.focus()}}),Object.defineProperty(e.prototype,"markExpression",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t,r,i){var o=this;void 0===r&&(r=""),void 0===i&&(i="cm-expression");var a=document.createElement("span");a.className=i;var l=document.createElement("span");l.className="".concat(i,"-text"),l.innerText=r,l.setAttribute("data-expression",r),l.onclick=function(){var e=o.getExpressionBrace(r);o.onExpressionClick(r,e)};var c=this.getProps().variables,s=n.FormulaEditor.highlightValue(r,c)||{html:r},u=document.createElement("div");u.innerHTML=s.html,u.classList.add("expression-popover");var p=document.createElement("div");p.classList.add("expression-popover-arrow"),u.appendChild(p),a.appendChild(l),a.appendChild(u),this.editor.markText(e,t,{atomic:!0,replacedWith:a})}}),Object.defineProperty(e.prototype,"focus",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.editor.setCursor({line:0,ch:(null==e?void 0:e.length)||0})}}),Object.defineProperty(e.prototype,"dispose",{enumerable:!1,configurable:!0,writable:!0,value:function(){}}),Object.defineProperty(e.prototype,"validate",{enumerable:!1,configurable:!0,writable:!0,value:function(){}}),e}();t.FormulaPlugin=o,t.editorFactory=function(e,t,r){return t(e,{value:r.value||"",autofocus:!1,lineWrapping:!0})}}));