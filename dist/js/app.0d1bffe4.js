(function(t){function e(e){for(var i,r,a=e[0],l=e[1],s=e[2],b=0,d=[];b<a.length;b++)r=a[b],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},c={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/NotesApp/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var s=0;s<a.length;s++)e(a[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0041":function(t,e,n){},"042b":function(t,e,n){},"0f8f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADSElEQVR4nO2bSWgUQRSGv3YlRgQFNe4LGAmeFATRgzIRRAQTcDuJHvQiHgMGxQ0H8WLcQT26ENCbJxEXFDwIGqPgbm5qUDEuEBCVjBS8gUcxW09PLzXpHwrC1KSq/q+rp6pev4ZUqVKlqkwzgOXA6pjKKqAFGEnE2gj0ArmElC/AEaAxCvMnE2C4WDEXZUqY5nerzn4C+4A1Md4CpmwHnqpx3QO8MMw3AgPSySdgDsnRaOCagtAWRiftqoNNJE8T1QW6GkYHndL4ENBAMnVDxtgTRuNZafwPydUlGeP7MBrPpgBIZ0DOsVtgguwUZw23W2AAuA/8UyuXWboPB9ktZh0CUKq8AGbXK4CbyugP2bZvA/YAj1SduUUm1RuALmWwD5hv1Y+wvtNdTwC6rGl+t8Rm7bra0M11HYAHnFDG/6q/bxeBsFR9Z4fLADzraG7u62bgVhkI41T9flcBeJb5d8BMqWsoA6FF1ZnjvXMAPOBUEfNUAOGo+nyJawA84HQZ86UgbFWbo4d+O8/GDMA2/1aCsqVkQ8iXX8AilwB4wBmf5jWEJ+p/B4FMNYPIxgSgmiuvtUHGnDffWu1AsjEACHLla2o+DgC2+Tdxmo8aQCHz0+M0HyUAY/5s0sxHBSCx5qMAYMyfV+ZfAdN8Pq/MH4Z+V7vUxQXAmD+nzL8OcOWdC4t7NTbvHIALauAvgaYqp/2gxPucAtCqzH8NaD7j4pOh49bUPRjw1945AL0FTmoHAix1TgGYLIFJ0+YV4IOCYBIvKp32uApgizK8ElgAfCwBoZJNjlMALiozY+WzZgvCXp87PKcA9El75mkOVtCyX0G4XGbaOwlgnjLYUaA+Y8X4K43kOANgpzK2WGL1JuPrGPBY/TjmfB5snAHQLW0NSXTW3srq4KXJ+1lWYbvOAPhcxLBp+4FsiFYAo3y26wQAT1Jb8zPguTzcXAeMD9i2EwCQNd8kM06ltnIGQFhKAZDOAEK7BTqHe6psm1quNpM8maSn7+p0WXM1At+kg36/+TUha4zK/TFlfVgd7bJ2aSbFZG3ML0yYPJ9nalx3wnpholgYK0mlRwItoavdeuYedzFb60NyqIpUTQl4bW6hJEGmSpUqFbXQf03JoDvOYdxXAAAAAElFTkSuQmCC"},3654:function(t,e,n){"use strict";n("b74a")},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var i=n("7a23"),c=n("6c02");function o(t,e,n,c,o,r){var a=Object(i["v"])("Form"),l=Object(i["v"])("List");return Object(i["q"])(),Object(i["d"])(i["a"],null,[Object(i["h"])(a,{onOnSubmit:r.handleSubmit},null,8,["onOnSubmit"]),Object(i["h"])(l,{onOnRemove:r.handleRemove,items:o.notes},null,8,["onOnRemove","items"])],64)}n("a434");var r={class:"notes-form-wrapper"},a=Object(i["h"])("button",{class:"btn btnPrimary",type:"submit"},"Добавить заметку",-1);function l(t,e,n,c,o,l){var s=Object(i["v"])("TagsList");return Object(i["q"])(),Object(i["d"])("div",r,[Object(i["h"])("form",{class:"notes-form",onSubmit:e[3]||(e[3]=Object(i["E"])((function(){return l.onSubmit&&l.onSubmit.apply(l,arguments)}),["prevent"]))},[Object(i["C"])(Object(i["h"])("input",{required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.value=t}),placeholder:"type your note",onKeydown:e[2]||(e[2]=Object(i["D"])((function(){return l.onSubmit&&l.onSubmit.apply(l,arguments)}),["enter"]))},null,544),[[i["z"],o.value]]),Object(i["h"])(s,{items:o.tags,onOnItemClick:l.handleTagClick,isActive:o.activeTag},null,8,["items","onOnItemClick","isActive"]),a],32)])}var s={class:"tags-list"};function u(t,e,n,c,o,r){return Object(i["q"])(),Object(i["d"])("div",s,[(Object(i["q"])(!0),Object(i["d"])(i["a"],null,Object(i["u"])(n.items,(function(e){return Object(i["q"])(),Object(i["d"])("div",{class:["tag-item",{isPreview:n.isPreview,isActive:e===n.isActive}],key:e,onClick:function(n){return t.$emit("onItemClick",e)}},[Object(i["h"])("span",null,Object(i["x"])(e),1)],10,["onClick"])})),128))])}var b={props:{items:{type:Array,required:!0},isPreview:{type:Boolean,default:!1},isActive:{type:String,default:null}}};n("6654");b.render=u;var d=b,O={components:{TagsList:d},data:function(){return{value:"",tags:["дом","работа","спорт","шоппинг","хобби","финансы"],activeTag:null}},methods:{onSubmit:function(){var t=this.value,e=this.activeTag;this.$emit("onSubmit",t,e),console.log(t,e),this.value="",this.activeTag=null},handleTagClick:function(t){this.activeTag=t===this.activeTag?null:t}}};n("3654");O.render=l;var v=O,p=n("0f8f"),A=n.n(p),j=n("c9ee"),f=n.n(j),g={class:"notes-list"},h={class:"note-header"},m={key:0},y={class:"note-actions"},k=Object(i["h"])("img",{src:A.a,alt:"edit"},null,-1),C=Object(i["h"])("img",{src:f.a,alt:"save"},null,-1),q={class:"note-footer"};function E(t,e,n,c,o,r){var a=Object(i["v"])("TagsList");return Object(i["q"])(),Object(i["d"])("div",g,[(Object(i["q"])(!0),Object(i["d"])(i["a"],null,Object(i["u"])(n.items,(function(e,n){return Object(i["q"])(),Object(i["d"])("div",{class:"note-item",key:n},[Object(i["h"])("div",h,[e.isEditing?Object(i["C"])((Object(i["q"])(),Object(i["d"])("input",{key:1,class:{"editing-input":e.isEditing},type:"text","onUpdate:modelValue":function(t){return e.title=t},onKeyup:Object(i["D"])((function(t){return r.saveChanges(n)}),["enter"])},null,42,["onUpdate:modelValue","onKeyup"])),[[i["z"],e.title]]):(Object(i["q"])(),Object(i["d"])("p",m,Object(i["x"])(e.title),1)),Object(i["h"])("div",y,[e.isEditing?(Object(i["q"])(),Object(i["d"])("button",{key:1,style:{cursor:"pointer"},onClick:function(t){return r.saveChanges(n)}},[C],8,["onClick"])):(Object(i["q"])(),Object(i["d"])("button",{key:0,style:{cursor:"pointer"},onClick:function(t){return r.toggleEditing(n)}},[k],8,["onClick"]))]),Object(i["h"])("p",{style:{cursor:"pointer"},onClick:function(e){return t.$emit("onRemove",n)}}," ✕ ",8,["onClick"])]),Object(i["h"])("div",q,[e.tags&&e.tags.length>0?(Object(i["q"])(),Object(i["d"])(a,{key:0,isPreview:"",items:e.tags},null,8,["items"])):Object(i["e"])("",!0)])])})),128))])}var w={components:{TagsList:d},props:{items:{type:Array,required:!0}},methods:{toggleEditing:function(t){this.items[t].isEditing=!this.items[t].isEditing},saveChanges:function(t){this.toggleEditing(t)}}};n("b01a");w.render=E;var x=w,S={components:{Form:v,List:x},data:function(){return{notes:[{title:"анжуманя",tags:["спорт"]},{title:"прес качат",tags:["спорт"]},{title:"бегит",tags:[]}]}},mounted:function(){this.getNodes()},watch:{notes:{handler:function(t){localStorage.setItem("notes",JSON.stringify(t))},deep:!0}},methods:{getNodes:function(){var t=localStorage.getItem("notes");t&&(this.notes=JSON.parse(t))},handleSubmit:function(t,e){var n={title:t,tags:e?[e]:[]};this.notes.push(n)},handleRemove:function(t){this.notes.splice(t,1)},editNote:function(t){this.editingInput.index=t,this.editingInput.value=this.notes[t]},onEdit:function(t){this.editedNote.value=this.notes.splice(t,1,this.editingInput.value),this.editingInput.index=null,this.editingInput.value=""}}};S.render=o;var T=S,M={class:"md-body"},B=Object(i["f"])('<h1>В этом приложении:</h1><ul><li>Полная настройка шаблона на Vue CLI</li><li>Установка и настройка Vue-router для Vue.js 3</li><li>Динамическая перерисовка без перезагрузки страницы</li><li>Динамичный навбар и ссылки</li><li>Обработка несуществующих роутов</li><li>Хеши и моды для роутера</li><li>Настройка общего конфига</li></ul><h2>И мелочи:</h2><ul><li>Полное настройка для переиспользования шаблона</li><li>Универсальный компонент списка и форм</li><li>Универсальный компонент Тегов для будущих проектов</li></ul><p> Сделано на курсе <a href="https://tocode.ru/courses/vuejs-3-s-nulya-do-rezultata/">Vue.js 3 c нуля до результата</a></p>',5);function U(t,e){return Object(i["q"])(),Object(i["d"])("div",M,[B])}const I={};I.render=U;var P=I,N={class:"title"};function Y(t,e){return Object(i["q"])(),Object(i["d"])("h1",N,"404 Not Found")}const F={};F.render=Y;var W=F,D=Object(c["b"])(),L=Object(c["a"])({history:D,routes:[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:P},{path:"/:CatchAll(.*)",name:"404",component:W}]}),R=L,V={class:"wrapper"},X={class:"wrapper-content"},G={class:"container"};function H(t,e,n,c,o,r){var a=Object(i["v"])("Header"),l=Object(i["v"])("router-view"),s=Object(i["v"])("Footer");return Object(i["q"])(),Object(i["d"])("div",V,[Object(i["h"])(a),Object(i["h"])("div",X,[Object(i["h"])("div",G,[Object(i["h"])(l)])]),Object(i["h"])(s)])}var K={class:"navbar"},Q={class:"container"},z={class:"navbar-content"},Z={class:"navbar-list"};function J(t,e,n,c,o,r){var a=Object(i["v"])("router-link");return Object(i["q"])(),Object(i["d"])("header",null,[Object(i["h"])("div",K,[Object(i["h"])("div",Q,[Object(i["h"])("div",z,[Object(i["h"])(a,{class:"navbar-logo",to:"/"},{default:Object(i["B"])((function(){return[Object(i["g"])(Object(i["x"])(o.title),1)]})),_:1}),Object(i["h"])("ul",Z,[(Object(i["q"])(!0),Object(i["d"])(i["a"],null,Object(i["u"])(o.links,(function(t){return Object(i["q"])(),Object(i["d"])("li",{class:"navbar-item",key:t.alias},[Object(i["h"])(a,{class:"navbar-link",to:t.url},{default:Object(i["B"])((function(){return[Object(i["g"])(Object(i["x"])(t.title),1)]})),_:2},1032,["to"])])})),128))])])])])])}var _={dev:!0},$=(_.dev,{title:"Notes"}),tt=[{title:"Home",alias:"home",url:"/"},{title:"About",alias:"about",url:"/about"}],et={data:function(){return{title:$.title,links:tt}}};et.render=J;var nt=et,it={class:"footer"},ct={class:"container"},ot={class:"navbar-list"},rt=Object(i["h"])("ul",{class:"navbar-list",style:{"margin-top":"14px"}},[Object(i["h"])("li",{class:"navbar-item",style:{opacity:"0.6","font-size":"14px"}},[Object(i["h"])("a",{href:"https://tocode.ru/courses/vuejs-3-s-nulya-do-rezultata/",class:"navbar-link"},'Сделано на курсе "Vue.js 3 c нуля до результата"')])],-1);function at(t,e,n,c,o,r){var a=Object(i["v"])("router-link");return Object(i["q"])(),Object(i["d"])("footer",it,[Object(i["h"])("div",ct,[Object(i["h"])("ul",ot,[(Object(i["q"])(!0),Object(i["d"])(i["a"],null,Object(i["u"])(o.links,(function(t){return Object(i["q"])(),Object(i["d"])("li",{class:"navbar-item",key:t.alias},[Object(i["h"])(a,{class:"navbar-link",to:t.url},{default:Object(i["B"])((function(){return[Object(i["g"])(Object(i["x"])(t.title),1)]})),_:2},1032,["to"])])})),128))]),rt])])}var lt={data:function(){return{links:tt}}};lt.render=at;var st=lt,ut={components:{Header:nt,Footer:st}};ut.render=H;var bt=ut,dt=(n("c1c3"),Object(i["c"])(bt));dt.use(R),dt.mount("#app")},6654:function(t,e,n){"use strict";n("0041")},b01a:function(t,e,n){"use strict";n("042b")},b74a:function(t,e,n){},c1c3:function(t,e,n){},c9ee:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABOklEQVR4nO2YTQ6CMBBGvxUeB9fK9fDnKLpz4wEk3kTc6BkcQ1ISbMACnQ5F5yVNICXTvsxQyACKogwlAbAHcAdAE42D2YcXuwkFqDFOvjKlCbTqmK8XCgGZ8eSQcW1UQiQF8DDXZwALn2Bj511crRIqOmIvfTMTWqTtfeiKnfpkRkqkLRa1xB4tE5vIaJkYRex35ogZi9Qy1fwLMxcZtH5Mp1bUIoUlcZmryDdIUqT+F1uDl8zEvXnur/eD24465xq5lEhiZOrMcI0qE3mPfyo2kakhFYkM0oxEBnGeWqG6LKU5ERMJEYkuy0ZCxNVl8WHdyMzY/fV+MPR3hrjWVxEmSDNioaXFBGlpWWhpMUFaWv9SWuS454a41v9ZkdmWVulowE0pkvVs4ok04CSaeEEbcJJNPEVR8MkbwHgv+NHRPiUAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.0d1bffe4.js.map