(function(t){function e(e){for(var o,a,u=e[0],r=e[1],c=e[2],p=0,d=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);s&&s(e);while(d.length)d.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],o=!0,u=1;u<n.length;u++){var r=n[u];0!==i[r]&&(o=!1)}o&&(l.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},l=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],r=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=r;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),i=n.n(o);i.a},"054a":function(t,e,n){},1598:function(t,e,n){},1721:function(t,e,n){},"462f":function(t,e,n){"use strict";var o=n("1598"),i=n.n(o);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Poll")],1)},l=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Poll"},[n("b-container",[n("poll-title",{on:{keyupEnter:t.focusOnNextInput},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("poll-option-input",{on:{keyupEnter:t.addOption},model:{value:t.newOptionText,callback:function(e){t.newOptionText=e},expression:"newOptionText"}}),n("b-row",{attrs:{"align-h":"center",id:"slack-message-container"}},[n("b-col",{attrs:{cols:"6"}},[n("poll-info",{attrs:{title:t.title},on:{typeChanged:function(e){return t.typeChanged(e)}}},[n("slack-section",[n("ul",{attrs:{id:"options-list"}},t._l(t.options,(function(e){return n("li",{key:e.id,staticClass:"option-lsit-item"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"option.value"}],staticClass:"option-input-element",attrs:{type:"text"},domProps:{value:e.value},on:{input:function(n){n.target.composing||t.$set(e,"value",n.target.value)}}}),n("a",{staticClass:"option-remove-element",on:{click:function(n){return t.removeOption(e)}}},[t._v("❌")])])})),0)])],1)],1)],1),n("poll-command-text-area",{model:{value:t.command,callback:function(e){t.command=e},expression:"command"}}),n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"3"}},[n("a",{class:t.successfulCopy?"text-success":"",on:{click:t.copyToClipboard}},[t._v(" "+t._s(t.successfulCopy?"Copied!":"Copy")+" ")])])],1)],1)],1)},u=[],r=(n("c975"),n("d81d"),n("a434"),n("99af"),n("a15b9"),n("498a2"),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.title=t.title||"Awesome Poll",t.options=t.options||[],t.multiple=t.multiple||!1,t.options.length<=0)return null;var e='"'.concat(t.title,'"'),n=t.options.map((function(t){return'"'.concat(t,'"')})).join(" "),o=t.multiple?"-m":"",i="/poll ".concat(e," ").concat(n," ").concat(o).trim();return i}),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"poll-title"}},[n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"12",md:"6"}},[n("input",{attrs:{id:"title-input",type:"text",placeholder:"Here goes your poll title",autocomplete:"off"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("keyupEnter")}}})])],1)],1)},s=[],p={name:"PollTitle",props:["value"],mounted:function(){document.getElementById("title-input").focus()}},d=p,f=(n("afec"),n("2877")),m=Object(f["a"])(d,c,s,!1,null,null,null),v=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"poll-info"}},[n("div",{attrs:{id:"bot-avatar"}}),n("div",{attrs:{id:"bot-message"}},[n("h4",{attrs:{id:"bot-name"}},[t._v("Yellow Poll")]),n("slack-section",[n("div",{attrs:{id:"info-group"}},[n("h4",{attrs:{id:"poll-title"}},[t._v(t._s(t.title))]),n("div",[t._v("By: You")]),n("div",[t._v(" Mode: "),n("a",{attrs:{id:"poll-type"},on:{click:t.togglePollType}},[t._v(t._s(t.multiple?"Multiple":"Single"))])])])]),n("div",{attrs:{id:"options-slot"}},[t._t("default")],2)],1)])},y=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slack-section"},[n("div",{staticClass:"separator"}),n("div",{staticClass:"slack-slot"},[t._t("default")],2)])},g=[],x={name:"SlackSection"},O=x,_=(n("a801"),Object(f["a"])(O,b,g,!1,null,null,null)),k=_.exports,C={name:"PollInfo",components:{SlackSection:k},props:["title"],methods:{togglePollType:function(){this.multiple=!this.multiple,this.$emit("typeChanged",this.multiple),this.$emit("updated")}},data:function(){return{multiple:!1}}},P=C,w=(n("fc17"),Object(f["a"])(P,h,y,!1,null,null,null)),S=w.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{attrs:{"align-h":"center",id:"poll-option-input"}},[n("b-col",{attrs:{cols:"12",md:"6"}},[n("input",{attrs:{type:"text",placeholder:"Add an amazing option",id:"add-option-input"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("keyupEnter")}}})])],1)},T=[],$={name:"PollOptioninput",props:["value"]},E=$,I=(n("e7c0"),Object(f["a"])(E,j,T,!1,null,null,null)),M=I.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"poll-command-text-area"}},[n("b-row",{attrs:{"align-h":"center"}},[n("b-col",{attrs:{cols:"12",md:"6"}},[n("span",{attrs:{id:"instructions"}},[t._v("Copy-pasta your command into slack :^)")]),n("textarea",{attrs:{id:"command-input"},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])],1)],1)},A=[],J={name:"PollCommandTextArea",props:["value"]},B=J,Y=(n("e46b"),Object(f["a"])(B,N,A,!1,null,null,null)),q=Y.exports,z={name:"Poll",components:{PollTitle:v,PollInfo:S,PollOptionInput:M,PollCommandTextArea:q,SlackSection:k},mounted:function(){this.title=localStorage.getItem("title"),this.options=localStorage.getItem("options")?JSON.parse(localStorage.getItem("options")):[]},methods:{addOption:function(){var t=1;this.options.length>0&&(t=this.options[0].id++),this.options.push({id:t,value:this.newOptionText}),this.newOptionText=""},focusOnNextInput:function(){document.getElementById("add-option-input").focus()},removeOption:function(t){this.options.splice(this.options.indexOf(t),1)},copyToClipboard:function(){var t=document.querySelector("#command-input");t.select();try{document.execCommand("copy"),this.successfulCopy=!0}catch(e){alert("Oops!")}},typeChanged:function(t){this.multiple=t,this.updateCommand()},updateCommand:function(){this.command=r({title:this.title,options:this.options.map((function(t){return t.value})),multiple:this.multiple})}},watch:{command:function(){this.successfulCopy=!1},options:function(t){localStorage.setItem("options",JSON.stringify(t))},title:function(t){localStorage.setItem("title",t)}},data:function(){return{title:"",newOptionText:"",options:[],multiple:!1,command:"",successfulCopy:!1}},updated:function(){this.updateCommand()}},H=z,D=(n("462f"),Object(f["a"])(H,a,u,!1,null,"84377a1e",null)),F=D.exports,G=(n("f9e3"),n("2dd8"),{name:"app",components:{Poll:F}}),K=G,L=(n("034f"),Object(f["a"])(K,i,l,!1,null,null,null)),Q=L.exports,R=n("5f5b"),U=n("498a"),V=n("dbbe");o["default"].config.productionTip=!1,o["default"].use(R["a"]),o["default"].use(U["a"]),o["default"].use(V["a"]),new o["default"]({render:function(t){return t(Q)}}).$mount("#app")},"7d31":function(t,e,n){},"85ec":function(t,e,n){},a229:function(t,e,n){},a801:function(t,e,n){"use strict";var o=n("1721"),i=n.n(o);i.a},afec:function(t,e,n){"use strict";var o=n("054a"),i=n.n(o);i.a},e46b:function(t,e,n){"use strict";var o=n("f0c9"),i=n.n(o);i.a},e7c0:function(t,e,n){"use strict";var o=n("7d31"),i=n.n(o);i.a},f0c9:function(t,e,n){},fc17:function(t,e,n){"use strict";var o=n("a229"),i=n.n(o);i.a}});
//# sourceMappingURL=app.e190478b.js.map