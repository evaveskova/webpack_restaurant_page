!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(e.i,r,a),r.locals?r.locals:{});e.exports=i},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i={};function c(e,n,t){for(var o=0;o<n.length;o++){var r={css:n[o][1],media:n[o][2],sourceMap:n[o][3]};i[e][o]?i[e][o](r):i[e].push(h(r,t))}}function l(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,s=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function d(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=s(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function h(e,n){var t,o,r;if(n.singleton){var a=m++;t=p||(p=l(n)),o=d.bind(null,t,a,!1),r=d.bind(null,t,a,!0)}else t=l(n),o=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r()),e=t.base?e+t.base:e,n=n||[],i[e]||(i[e]=[]),c(e,n,t),function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){i[e]||(i[e]=[]),c(e,n,t);for(var o=n.length;o<i[e].length;o++)i[e][o]();i[e].length=n.length,0===i[e].length&&delete i[e]}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,'body {\n  background-color: #0F0F0F;\n  color: #F2F2F2;\n}\n\n#content {\n  display: block;\n  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;\n  text-align: center;\n  width: 100%;\n}\n\n#nav {\n  display: inline-flex;\n  width: 100%;\n  padding: 30px;\n}\n\n#nav a {\n  background-color: #0F0F0F;\n  border: 0px;\n  color: #F2F2F2;\n  padding: 23px;\n  font-size: 30px;\n  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;\n}\n\n#nav a:hover {\n  background-color: red;\n}\n\nh1 {\npadding-right: 100px;\n}\n\nimg {\n  position: relative;\n  width: 50%;\n  object-fit: contain;\n  overflow: hidden;\n  top: 0;\n  bottom: 0;\n  float: left;\n}\n\np {\n  text-align: center;\n  float: right;\n  width: 45%;\n  font-size: 24px;\n  margin-top: 100px;\n  padding-right: 40px;\n}\n',""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([r]).join("\n")}var i,c,l;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&r[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},function(e,n,t){"use strict";t.r(n);t(0);var o=function(){let e=document.createElement("img");e.src="../src/assets/food_plate.jpg";let n=document.getElementById("content");n.innerHTML="",n.appendChild(e);let t=document.createElement("p");t.textContent="Do you like food? Great! Because we have lots of it.\n  That's because we're a restaurant, and restaurants serve food.\n  We've been around since 1202, starting out as a small pub that serves\n  sheep's intenstines, to a renowed, 5-star establishment with\n  delightful, overpriced, tiny food. Enjoy!",document.getElementById("content").appendChild(t),console.log("home")};let r=document.createElement("h1");r.textContent="The World's Greatest Restaurant",document.getElementById("nav").appendChild(r);let a=document.createElement("a");a.textContent="Home",document.getElementById("nav").appendChild(a),a.addEventListener("click",()=>{o()});let i=document.createElement("a");i.textContent="Menu",document.getElementById("nav").appendChild(i);let c=document.createElement("a");c.textContent="Contact Us",document.getElementById("nav").appendChild(c),o()}]);