(function(e){function t(t){for(var o,u,a=t[0],l=t[1],i=t[2],d=0,b=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&b.push(r[u][0]),r[u]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);s&&s(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},c=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vueprep/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var s=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d0a":function(e,t,n){},"3f1a":function(e,t,n){"use strict";n("c854")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=(n("b0c0"),n("cf05")),c=n.n(r),u=Object(o["i"])("home"),a=Object(o["i"])("todos"),l=Object(o["i"])("createTodo"),i=Object(o["i"])("test"),s=Object(o["i"])("changeName"),d=Object(o["i"])("counter"),b=Object(o["i"])("input"),f=Object(o["i"])("users"),p=Object(o["g"])("img",{alt:"Vue logo",src:c.a},null,-1);function j(e,t,n,r,c,j){var h=Object(o["B"])("router-link"),O=Object(o["B"])("router-view");return Object(o["u"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("nav",null,[Object(o["j"])(h,{to:"/"},{default:Object(o["K"])((function(){return[u]})),_:1}),Object(o["j"])(h,{to:"/todos"},{default:Object(o["K"])((function(){return[a]})),_:1}),Object(o["j"])(h,{to:"/createTodo"},{default:Object(o["K"])((function(){return[l]})),_:1}),Object(o["j"])(h,{to:"/createTodo/test"},{default:Object(o["K"])((function(){return[i]})),_:1}),Object(o["j"])(h,{to:"/changeName"},{default:Object(o["K"])((function(){return[s]})),_:1}),Object(o["j"])(h,{to:"/counter"},{default:Object(o["K"])((function(){return[d]})),_:1}),Object(o["j"])(h,{to:"/input"},{default:Object(o["K"])((function(){return[b]})),_:1}),Object(o["j"])(h,{to:"/users"},{default:Object(o["K"])((function(){return[f]})),_:1})]),(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(j.users,(function(e){return Object(o["u"])(),Object(o["f"])("div",{key:e.id},Object(o["D"])(e.name),1)})),128)),p,Object(o["j"])(O)],64)}var h={name:"App",watch:{"$store.state.todos":{deep:!0,handler:function(){localStorage.setItem("todos",JSON.stringify(this.$store.state.todos))}}},methods:{},computed:{users:function(){return this.$store.getters.sortedUsers}},created:function(){this.$store.dispatch("getUsers")}},O=(n("3f1a"),n("6b0d")),m=n.n(O);const v=m()(h,[["render",j]]);var g=v;function y(e,t,n,r,c,u){return Object(o["u"])(),Object(o["f"])("h1",null,"Home pages")}var k={name:"Home"};const w=m()(k,[["render",y]]);var x=w,C=Object(o["g"])("br",null,null,-1),_=Object(o["g"])("br",null,null,-1),U=["onClick"],D=Object(o["g"])("br",null,null,-1),T=Object(o["g"])("br",null,null,-1),B=["onClick"],V=Object(o["g"])("hr",null,null,-1);function I(e,t,n,r,c,u){return Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(u.todos,(function(e,t){var n=e.id,r=e.body,c=e.title,a=e.createdAt,l=e.completed;return Object(o["u"])(),Object(o["f"])("div",{key:n,style:Object(o["q"])({textDecoration:l?"line-through":"none"})},[C,Object(o["g"])("p",null,Object(o["D"])(t),1),Object(o["g"])("h3",null,Object(o["D"])(c)+" - Completed: "+Object(o["D"])(l),1),Object(o["g"])("p",null,Object(o["D"])(r),1),Object(o["g"])("span",null,"Created at: "+Object(o["D"])(new Date(a)),1),_,Object(o["g"])("button",{onClick:function(e){return u.markAsCompleted(n)},class:"btn"}," Mark as "+Object(o["D"])(l?"in-progress":"completed"),9,U),D,T,Object(o["g"])("button",{onClick:function(e){return u.deleteTodos(n)},class:"btn"},"Delete",8,B),V],4)})),128)}var N={name:"About",methods:{deleteTodos:function(e){this.$store.dispatch("deleteTodos",e)},markAsCompleted:function(e){this.$store.dispatch("toggleCompleted",e)}},computed:{todos:function(){return this.$store.state.todos}}};const S=m()(N,[["render",I]]);var L=S,A=Object(o["g"])("button",{class:"btn",type:"submit"},"Save todo",-1),$=Object(o["g"])("br",null,null,-1),F=Object(o["g"])("br",null,null,-1),M=Object(o["g"])("br",null,null,-1);function K(e,t,n,r,c,u){var a=Object(o["B"])("router-view");return Object(o["u"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("form",{onSubmit:t[2]||(t[2]=Object(o["M"])((function(){return u.createTodo&&u.createTodo.apply(u,arguments)}),["prevent"]))},[A,$,F,Object(o["L"])(Object(o["g"])("input",{type:"text",name:"title","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.title=e}),placeholder:"Title"},null,512),[[o["I"],c.title,void 0,{trim:!0}]]),M,Object(o["L"])(Object(o["g"])("input",{type:"text",name:"body","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.body=e}),placeholder:"Body"},null,512),[[o["I"],c.body,void 0,{trim:!0}]])],32),Object(o["j"])(a)],64)}var P={name:"CreateTodoForm",data:function(){return{title:"",body:""}},methods:{onSubmitSuccess:function(){this.$router.push("/todos")},createTodo:function(){this.$store.dispatch("createTodo",{title:this.title,body:this.body}),this.onSubmitSuccess(),this.title="",this.body=""}}};const H=m()(P,[["render",K]]);var R=H,E={class:"hello"},q=Object(o["h"])('<p data-v-7f71fc71> For a guide and recipes on how to configure / customize this project,<br data-v-7f71fc71> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-7f71fc71>vue-cli documentation</a>. </p><h3 data-v-7f71fc71>Installed CLI Plugins</h3><ul data-v-7f71fc71><li data-v-7f71fc71><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-7f71fc71>babel</a></li><li data-v-7f71fc71><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-7f71fc71>eslint</a></li></ul><h3 data-v-7f71fc71>Essential Links</h3><ul data-v-7f71fc71><li data-v-7f71fc71><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-7f71fc71>Core Docs</a></li><li data-v-7f71fc71><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-7f71fc71>Forum</a></li><li data-v-7f71fc71><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-7f71fc71>Community Chat</a></li><li data-v-7f71fc71><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-7f71fc71>Twitter</a></li><li data-v-7f71fc71><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-7f71fc71>News</a></li></ul><h3 data-v-7f71fc71>Ecosystem</h3><ul data-v-7f71fc71><li data-v-7f71fc71><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-7f71fc71>vue-router</a></li><li data-v-7f71fc71><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-7f71fc71>vuex</a></li><li data-v-7f71fc71><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-7f71fc71>vue-devtools</a></li><li data-v-7f71fc71><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-7f71fc71>vue-loader</a></li><li data-v-7f71fc71><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-7f71fc71>awesome-vue</a></li></ul>',7),G=[q];function J(e,t,n,r,c,u){return Object(o["u"])(),Object(o["f"])("div",E,G)}var z={name:"HelloWorld"};n("5a8e");const W=m()(z,[["render",J],["__scopeId","data-v-7f71fc71"]]);var Q=W,X=Object(o["g"])("br",null,null,-1),Y=Object(o["g"])("br",null,null,-1);function Z(e,t,n,r,c,u){var a=Object(o["B"])("Button");return Object(o["u"])(),Object(o["f"])(o["a"],null,[Object(o["g"])("h1",null,"hello world from "+Object(o["D"])(c.name),1),Object(o["g"])("div",null,[Object(o["g"])("button",{class:"btn",onClick:t[0]||(t[0]=function(){return u.changeName&&u.changeName.apply(u,arguments)})},"change name")]),X,Object(o["g"])("button",{onClick:t[1]||(t[1]=function(){return u.changeVisibilityButton&&u.changeVisibilityButton.apply(u,arguments)}),class:"btn"},"Toggle"),Object(o["g"])("div",null,[Y,c.isVisible?(Object(o["u"])(),Object(o["d"])(a,{key:0,text:"conditional button",onButtonClick:u.changeName},null,8,["onButtonClick"])):Object(o["e"])("",!0)])],64)}function ee(e,t,n,r,c,u){return Object(o["u"])(),Object(o["f"])("button",{class:Object(o["p"])("btn"),id:"test",onClick:t[0]||(t[0]=function(e){return u.onClickHandler()})},Object(o["D"])(n.text),1)}var te={name:"Button",emits:["button-click"],props:{text:{type:String,required:!0},onClick:{type:Function,required:!1}},methods:{onClickHandler:function(){this.$emit("button-click")}},beforeUnmount:function(){var e=document.getElementById("test");console.log("beforeDestroy",e)},unmounted:function(){var e=document.getElementById("test");console.log("Destroy",e)}};const ne=m()(te,[["render",ee]]);var oe=ne,re={name:"ChangeName",components:{Button:oe},data:function(){return{name:"Orest",isVisible:!1}},methods:{changeName:function(){this.name=Math.floor(1e3*Math.random())},changeVisibilityButton:function(){this.isVisible=!this.isVisible}}};const ce=m()(re,[["render",Z]]);var ue=ce,ae=Object(o["g"])("br",null,null,-1),le={key:0},ie={key:1},se={key:2},de={key:3};function be(e,t,n,r,c,u){return Object(o["u"])(),Object(o["f"])(o["a"],null,[ae,Object(o["g"])("button",{class:"btn",onClick:t[0]||(t[0]=function(){return u.inc&&u.inc.apply(u,arguments)})},"counter inc"),Object(o["g"])("h1",null,Object(o["D"])(c.counter),1),1===c.counter?(Object(o["u"])(),Object(o["f"])("h3",le,"it's one")):2===c.counter?(Object(o["u"])(),Object(o["f"])("h3",ie,"it's two")):c.counter>=3?(Object(o["u"])(),Object(o["f"])("h3",se,"oh shiiissshhh there are too many")):(Object(o["u"])(),Object(o["f"])("h3",de,"oh shiiissshhh where your's numbers")),Object(o["g"])("button",{class:"btn",onClick:t[1]||(t[1]=function(){return u.dec&&u.dec.apply(u,arguments)})},"counter dec")],64)}var fe={name:"Counter",data:function(){return{counter:0}},methods:{inc:function(){this.counter++},dec:function(){this.counter--}}};const pe=m()(fe,[["render",be]]);var je=pe,he=Object(o["g"])("br",null,null,-1),Oe=Object(o["g"])("br",null,null,-1),me=Object(o["g"])("option",{value:"null"},null,-1),ve=Object(o["g"])("option",{value:"1"},"1",-1),ge=Object(o["g"])("option",{value:"2"},"2",-1),ye=Object(o["g"])("option",{value:"3"},"3",-1),ke=[me,ve,ge,ye],we=Object(o["g"])("br",null,null,-1);function xe(e,t,n,r,c,u){return Object(o["u"])(),Object(o["f"])("div",null,[Object(o["g"])("h1",null,Object(o["D"])(c.inpVal)+" "+Object(o["D"])(c.checkBox)+" "+Object(o["D"])(c.select)+" "+Object(o["D"])(c.radio),1),Object(o["L"])(Object(o["g"])("input",{type:"text",placeholder:"Enter your value","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.inpVal=e})},null,512),[[o["I"],c.inpVal,void 0,{trim:!0}]]),he,Object(o["L"])(Object(o["g"])("input",{type:"checkbox","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.checkBox=e})},null,512),[[o["F"],c.checkBox]]),Oe,Object(o["L"])(Object(o["g"])("select",{id:"select","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.select=e})},ke,512),[[o["H"],c.select]]),we,Object(o["L"])(Object(o["g"])("input",{type:"radio",name:"1",value:"one","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.radio=e})},null,512),[[o["G"],c.radio]]),Object(o["L"])(Object(o["g"])("input",{type:"radio",name:"1",value:"two","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.radio=e})},null,512),[[o["G"],c.radio]]),Object(o["L"])(Object(o["g"])("input",{type:"radio",name:"1",value:"three","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.radio=e})},null,512),[[o["G"],c.radio]])])}var Ce={name:"Input",data:function(){return{inpVal:"",checkBox:!1,select:null,radio:null}}};const _e=m()(Ce,[["render",xe]]);var Ue=_e,De={key:0};function Te(e,t,n,r,c,u){var a=Object(o["B"])("UserItem");return Object(o["u"])(),Object(o["f"])(o["a"],null,[c.usersIsLoading?Object(o["e"])("",!0):(Object(o["u"])(),Object(o["f"])("h1",De,"LOADING.....")),(Object(o["u"])(!0),Object(o["f"])(o["a"],null,Object(o["A"])(c.users,(function(e){return Object(o["u"])(),Object(o["d"])(a,{key:e.id,u:e},null,8,["u"])})),128))],64)}var Be=n("1da1");n("96cf"),n("d3b7");function Ve(e,t,n,r,c,u){return Object(o["u"])(),Object(o["f"])("h3",null,Object(o["D"])(u.buildFullName),1)}n("99af");var Ie={name:"UserItem",props:{u:{type:Object,required:!0}},methods:{},computed:{buildFullName:function(){return"Name : ".concat(this.u.name," | Surname: ").concat(this.u.username)}}};const Ne=m()(Ie,[["render",Ve]]);var Se=Ne,Le={name:"Users",data:function(){return{users:[],usersIsLoading:!1,linkUser:"https://jsonplaceholder.typicode.com/users"}},methods:{setUsers:function(e){this.users=e},fetchUsers:function(){var e=this;return Object(Be["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.linkUser);case 2:return n=t.sent,e.usersIsLoading=!0,t.next=6,n.json();case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(Be["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchUsers();case 2:n=t.sent,e.setUsers(n);case 4:case"end":return t.stop()}}),t)})))()},components:{UserItem:Se}};const Ae=m()(Le,[["render",Te]]);var $e=Ae;function Fe(e,t,n,r,c,u){return Object(o["u"])(),Object(o["f"])("h1",null,"Not Found")}var Me={name:"NotFound"};const Ke=m()(Me,[["render",Fe]]);var Pe=Ke,He=n("6c02"),Re=[{path:"/",component:x},{path:"/todos",component:L,props:!0},{path:"/createTodo",component:R,props:!0,children:[{path:"/createTodo/test",component:Q}]},{path:"/changeName",component:ue},{path:"/counter",component:je},{path:"/input",component:Ue},{path:"/users",component:$e},{path:"/:catchAll(.*)",component:Pe}],Ee=He["a"]({history:He["b"](),routes:Re}),qe=n("2909"),Ge=(n("4de4"),n("7db0"),n("4e82"),n("5502")),Je=Object(Ge["a"])({state:function(){var e;return{todos:null!==(e=JSON.parse(localStorage.getItem("todos")))&&void 0!==e?e:[],users:[]}},mutations:{createTodo:function(e,t){e.todos.push(t)},deleteTodo:function(e,t){e.todos=e.todos.filter((function(e){return e.id!==t}))},toggleCompleted:function(e,t){var n=e.todos.find((function(e){return e.id===t}));n.completed=!n.completed},setUsers:function(e,t){e.users=t}},actions:{toggleCompleted:function(e,t){e.commit("toggleCompleted",t)},deleteTodos:function(e,t){e.commit("deleteTodo",t)},createTodo:function(e,t){var n=t.title,o=t.body,r={title:n,body:o,id:Date.now()+Math.random(),createdAt:new Date,completed:!1};e.commit("createTodo",r)},getUsers:function(e){return Object(Be["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return n=t.sent,t.next=5,n.json();case 5:o=t.sent,e.commit("setUsers",o);case 7:case"end":return t.stop()}}),t)})))()}},getters:{sortedUsers:function(e){var t=Object(qe["a"])(e.users);return t.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}))}}});Object(o["c"])(g).use(Je).use(Ee).mount("#app")},"5a8e":function(e,t,n){"use strict";n("1d0a")},c854:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.ac123069.js.map