(this.webpackJsonptesting2=this.webpackJsonptesting2||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),r=c(5),s=c(1),i=c(6),o=c(8),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(o.a)(e),[t.payload]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(i.a)(Object(i.a)({},e),{},{done:!e.done}):e}));default:return e}},d=c(0),u=function(){return JSON.parse(localStorage.getItem("state"))||[]},j=function(){var e=Object(s.useReducer)(l,[],u),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(""),i=Object(r.a)(a,2),o=i[0],j=i[1];Object(s.useEffect)((function(){localStorage.setItem("state",JSON.stringify(c))}),[c]);var b={id:(new Date).getTime(),desc:o,done:!1};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Aplicacion Testing"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-7",children:Object(d.jsx)("ul",{className:"list-group list-group-flush",children:c.map((function(e,t){return Object(d.jsxs)("li",{className:"list-group-item",children:[Object(d.jsxs)("p",{className:"".concat(e.done&&"complete"),onClick:function(){return t=e.id,void n({type:"toggle",payload:t});var t},children:[t+1,". ",e.desc]}),Object(d.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e.id,void n({type:"delete",payload:t});var t},children:"Delete"})]},e.id)}))})}),Object(d.jsxs)("div",{className:"col-5",children:[Object(d.jsx)("h4",{children:"Agregar To do"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({type:"add",payload:b}),j("")},children:[Object(d.jsx)("input",{className:"form-control",onChange:function(e){j(e.target.value)},value:o}),Object(d.jsx)("button",{className:"btn btn-outline-primary mt-1 col-12",children:"Add"})]})]})]})]})};c(14);a.a.render(Object(d.jsx)(j,{}),document.querySelector("#root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e2bf8eae.chunk.js.map