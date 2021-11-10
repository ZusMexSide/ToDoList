(this.webpackJsonpToDoList=this.webpackJsonpToDoList||[]).push([[0],[,,,,,,,,,,,,,function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(1),c=o.n(n),r=o(5),a=o.n(r),s=(o(13),o(7)),l=o(2);var i=o(0),u=c.a.createContext();function d(e){var t=function(e,t){var o=c.a.useState(!1),n=Object(l.a)(o,2),r=n[0],a=n[1],s=c.a.useState(!0),i=Object(l.a)(s,2),u=i[0],d=i[1],j=c.a.useState(t),m=Object(l.a)(j,2),b=m[0],f=m[1];return c.a.useEffect((function(){setTimeout((function(){try{var o,n=localStorage.getItem(e);n?o=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),o=t),f(o),d(!1)}catch(r){a(r)}}),3e3)}),[]),{item:b,saveItem:function(t){try{localStorage.setItem(e,JSON.stringify(t)),f(t)}catch(r){a(r)}},loading:u,error:r}}("TODOS_V1",[]),o=t.item,n=t.saveItem,r=t.loading,a=t.error,d=c.a.useState(""),j=Object(l.a)(d,2),m=j[0],b=j[1],f=c.a.useState(!1),x=Object(l.a)(f,2),O=x[0],p=x[1],h=o.filter((function(e){return e.completed})).length,v=o.length,T=[];T=!m.length>=1?o:o.filter((function(e){var t=e.text.toLowerCase(),o=m.toLowerCase();return t.includes(o)}));return Object(i.jsx)(u.Provider,{value:{loading:r,error:a,totalTodos:v,completedTodos:h,searchValue:m,setSearchValue:b,searchedTodos:T,addToDo:function(e){var t=Object(s.a)(o);t.push({completed:!1,text:e}),n(t)},completeTodo:function(e,t){var c=o.findIndex((function(t){return t.text===e})),r=Object(s.a)(o);r[c].completed=!t,n(r)},deleteTodo:function(e){var t=o.findIndex((function(t){return t.text===e})),c=Object(s.a)(o);c.splice(t,1),n(c)},openModal:O,setOpenModal:p},children:e.children})}o(15);function j(){var e=c.a.useContext(u),t=e.totalTodos,o=e.completedTodos;return Object(i.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",o," de ",t," TODOs \ud83d\ude04"]})}o(16);function m(){var e=c.a.useContext(u),t=e.searchValue,o=e.setSearchValue;return Object(i.jsx)("input",{className:"search",placeholder:"Buscar ... \ud83d\udd0e",value:t,onChange:function(e){console.log(e.target.value),o(e.target.value)}})}o(17);function b(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{className:"container",children:e.children})})}var f=o(4),x=(o(18),{open:function(){return"+"},close:function(){return Object(i.jsx)(f.b,{size:".8em",color:"#fff"})}});function O(e){return Object(i.jsx)("button",{className:"button",onClick:function(){e.setOpenModal((function(e){return!e}))},children:x[e.optionIcon]()})}o(19);var p={check:function(e){return Object(i.jsx)(f.a,{className:"Icon Icon--check",color:e})},delete:function(e){return Object(i.jsx)(f.c,{className:"Icon Icon--check",color:e})}};function h(e){var t=e.type,o=e.color,n=e.onClick;return Object(i.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:n,children:p[t](o)})}function v(e){var t=e.completed,o=e.onComplete;return Object(i.jsx)(h,{type:"check",color:t?"#1cedae":"#fff",onClick:o})}function T(e){var t=e.onDelete;return Object(i.jsx)(h,{type:"delete",color:"#fff",onClick:t})}o(20);function g(e){return Object(i.jsxs)("li",{className:"toDoItem ".concat(e.completed&&"toDoItem--completed"),children:[Object(i.jsx)(v,{completed:e.completed,onComplete:e.onComplete}),Object(i.jsx)("p",{className:"toDoItem__text ".concat(e.completed&&"toDoItem__text--completed"),children:e.text}),Object(i.jsx)(T,{onDelete:e.onDelete})]})}o(21);function D(e){var t=e.children;return a.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}o(22);function C(){var e=c.a.useState(""),t=Object(l.a)(e,2),o=t[0],n=t[1],r=c.a.useContext(u),a=r.addToDo,s=r.setOpenModal;return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(o),s(!1)},children:[Object(i.jsx)("label",{children:"Escribe tu nuevo ToDo"}),Object(i.jsx)("textarea",{autofocus:!0,placeholder:"Cortar cebolla para el almuerzo",value:o,onChange:function(e){n(e.target.value)}}),Object(i.jsxs)("div",{className:"ToDoForm__buttonContainer",children:[Object(i.jsx)("button",{className:"ToDoForm__button ToDoForm__button--cancel",type:"button",onClick:function(){s(!1)},children:"Cancelar"}),Object(i.jsx)("button",{className:"ToDoForm__button ToDoForm__button--submit",type:"submit",children:"A\xf1adir"})]})]})}o(23);function N(){return Object(i.jsx)("div",{className:"container-error",children:Object(i.jsx)("p",{className:"container-error__text",children:"Ha ocurrido un error"})})}o(24);function _(){return Object(i.jsxs)("div",{className:"LoadingToDo-container",children:[Object(i.jsx)("span",{className:"LoadingToDo__completeIcon"}),Object(i.jsx)("p",{className:"LoadingToDo__text",children:"Cargando ToDos..."}),Object(i.jsx)("span",{className:"LoadingToDo__deleteIcon"})]})}o(25);function I(){return Object(i.jsx)("div",{className:"container-empty",children:Object(i.jsxs)("p",{className:"container-empty__text",children:["Nada por aqui..",Object(i.jsx)("br",{}),"Crea tu primer ToDo"]})})}function S(){var e=c.a.useContext(u),t=e.error,o=e.loading,n=e.searchedTodos,r=e.completeTodo,a=e.deleteTodo,s=e.openModal,l=e.setOpenModal;return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(m,{}),Object(i.jsxs)(b,{children:[t&&Object(i.jsx)(N,{error:t}),!t&&o&&new Array(5).fill(null).map((function(e,t){return Object(i.jsx)(_,{},t)})),!o&&!n.length&&Object(i.jsx)(I,{}),n.map((function(e){return Object(i.jsx)(g,{text:e.text,completed:e.completed,onComplete:function(){return r(e.text,e.completed)},onDelete:function(){return a(e.text)}},e.text)}))]}),s&&Object(i.jsx)(D,{children:Object(i.jsx)(C,{})}),Object(i.jsx)(O,{openModal:s,setOpenModal:l,optionIcon:s?"close":"open"})]})}var y=function(){return Object(i.jsx)(d,{children:Object(i.jsx)(S,{})})};a.a.render(Object(i.jsx)(y,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.cf627967.chunk.js.map