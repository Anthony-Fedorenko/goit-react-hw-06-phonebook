(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={list:"ContactList_list__28FSm",item:"ContactList_item__qIKLC",button:"ContactList_button__NbNDK"}},15:function(t,e,n){t.exports={input:"Filter_input__UJm7t",label:"Filter_label__1-kji"}},17:function(t,e,n){t.exports={section:"Section_section__2d-nt"}},26:function(t,e,n){},27:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(10),o=n.n(r),i=(n(26),n(27),n(17)),s=n.n(i),u=n(1),l=function(t){var e=t.children;return Object(u.jsxs)("section",{className:s.a.section,children:[" ",e]})},b=n(16),j=n(6),d=n.n(j),m=n(5),f=n(3),O=n(40),h={addContact:Object(f.b)("contacts/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(O.a)(),name:e,number:n}}})),deleteContact:Object(f.b)("contacts/delete"),changeFilter:Object(f.b)("contacts/changeFilter")};var p=Object(m.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e){return t(h.addContact(e))}}}))((function(t){var e=t.onSubmit,n=t.contacts,c=Object(a.useState)(""),r=Object(b.a)(c,2),o=r[0],i=r[1],s=Object(a.useState)(""),l=Object(b.a)(s,2),j=l[0],m=l[1],f=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":i(a);break;case"number":m(a);break;default:return}},O=function(){i(""),m("")};return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a={name:o,number:j};n.find((function(t){return o.toLowerCase()===t.name.toLowerCase()}))?alert("".concat(o," is already in contacts")):e(a),O()},className:d.a.form,children:[Object(u.jsxs)("label",{className:d.a.label,children:[" Name",Object(u.jsx)("input",{className:d.a.input,onChange:f,value:o,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(u.jsxs)("label",{className:d.a.label,children:[" Number",Object(u.jsx)("input",{className:d.a.input,onChange:f,value:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(u.jsx)("button",{type:"Submit",className:d.a.button,children:"Add"})]})})),_=n(15),x=n.n(_),C=Object(m.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(h.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(u.jsx)("label",{className:x.a.label,children:Object(u.jsx)("input",{type:"text",value:e,onChange:n,className:x.a.input})})})),v=n(12),g=n.n(v),N=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},k=Object(m.b)((function(t){var e=t.contacts,n=e.filter,a=e.items;return{contacts:N(a,n)}}),(function(t){return{onDelete:function(e){return t(h.deleteContact(e))}}}))((function(t){var e=t.contacts,n=t.onDelete;return Object(u.jsx)("ul",{className:g.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(u.jsxs)("li",{className:g.a.item,children:[a,": ",c,Object(u.jsx)("button",{onClick:function(){return n(e)},type:"button",className:g.a.button,children:"DELETE"})]},e)}))})}));var y,F=function(){return Object(u.jsxs)(l,{children:[Object(u.jsx)("h1",{children:"Phonebook"}),Object(u.jsx)(p,{}),Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(C,{}),Object(u.jsx)(k,{})]})},w=n(19),L=n(9),S=n(20),z=n.n(S),A=n(4),D=n(21),E=n.n(D),J=n(7),q=n(2),K=Object(f.c)([],(y={},Object(J.a)(y,h.addContact,(function(t,e){return[].concat(Object(L.a)(t),[e.payload])})),Object(J.a)(y,h.deleteContact,(function(t,e){return Object(L.a)(t.filter((function(t){return t.id!==e.payload})))})),y)),Z=Object(f.c)("",Object(J.a)({},h.changeFilter,(function(t,e){return e.payload}))),B=Object(q.b)({items:K,filter:Z}),I=[].concat(Object(L.a)(Object(f.d)({serializableCheck:{ignoredActions:[A.a,A.f,A.b,A.c,A.d,A.e]}})),[z.a]),M={key:"contacts",storage:E.a,blacklist:["filter"]},T=Object(f.a)({reducer:{contacts:Object(A.g)(M,B)},middleware:I,devtools:!1}),Y={store:T,persistor:Object(A.h)(T)};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m.a,{store:Y.store,children:Object(u.jsx)(w.a,{loading:null,persistor:Y.persistor,children:Object(u.jsx)(F,{})})})}),document.getElementById("root"))},6:function(t,e,n){t.exports={form:"ContactForm_form__1mjYk",label:"ContactForm_label__3YNzf",input:"ContactForm_input__2ihXK",button:"ContactForm_button__3Nzli"}}},[[38,1,2]]]);
//# sourceMappingURL=main.1cdf8ebe.chunk.js.map