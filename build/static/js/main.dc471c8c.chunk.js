(this["webpackJsonptodo-app-redux"]=this["webpackJsonptodo-app-redux"]||[]).push([[0],{131:function(e,t,a){},202:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a(31),r=a.n(i),n=a(46),o=Object(n.b)({name:"filters",initialState:{search:"",status:"All",priorities:[]},reducers:{searchFilterChange:function(e,t){e.search=t.payload},searchFilterByStatus:function(e,t){e.status=t.payload},priorityFilter:function(e,t){e.priorities=t.payload}}}),l=Object(n.b)({name:"todoList",initialState:[],reducers:{addTodo:function(e,t){e.push(t.payload)},toggleTodo:function(e,t){var a=e.find((function(e){return e.id===t.payload}));console.log(a),a&&(a.completed=!a.currentTodo)}}}),s=Object(n.a)({reducer:{filters:o.reducer,todoList:l.reducer}}),d=a(43),u=a(206),j=a(205),b=(a(131),a(4)),h=a(211),p=a(214),O=a(207),x=a(208),g=a(213),f=a(118),m=a(2),y=a(212),v=a(8),w={High:"red",Medium:"blue",Low:"gray"};function S(e){var t=e.name,a=e.prioriry,i=e.completed,r=e.id,n=Object(d.b)(),o=Object(c.useState)(i),s=Object(b.a)(o,2),u=s[0],j=s[1];return Object(v.jsxs)(h.a,{justify:"space-between",style:Object(m.a)({marginBottom:3},u?{opacity:.5,textDecoration:"line-through"}:{}),children:[Object(v.jsx)(y.a,{checked:u,onChange:function(){console.log("ok"),j(!u),n(l.actions.toggleTodo(r))},children:t}),Object(v.jsx)(g.a,{color:w[a],style:{margin:0},children:a})]})}var C=a(64),T=Object(C.a)((function(e){return e.todoList}),(function(e){return e.filters.status}),(function(e){return e.filters.search}),(function(e){return e.filters.priorities}),(function(e,t,a,c){return e.filter((function(e){return"All"===t?c.length?e.name.includes(a)&&c.includes(e.priority):e.name.includes(a):e.name.includes(a)&&("Completed"===t?e.completed:!e.completed)&&(!c.length||c.includes(e.priority))}))})),L=a(210);function B(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)("Medium"),n=Object(b.a)(r,2),o=n[0],s=n[1],u=Object(d.c)(T),j=Object(d.b)();return Object(v.jsxs)(h.a,{style:{height:"calc(100% - 40px)"},children:[Object(v.jsx)(p.a,{span:24,children:Object(v.jsxs)(O.a.Group,{style:{display:"flex"},compact:!0,children:[Object(v.jsx)(O.a,{value:a,onChange:function(e){i(e.target.value)}}),Object(v.jsxs)(x.a,{defaultValue:"Medium",value:o,onChange:function(e){s(e)},children:[Object(v.jsx)(x.a.Option,{value:"High",label:"High",children:Object(v.jsx)(g.a,{color:"red",children:"High"})}),Object(v.jsx)(x.a.Option,{value:"Medium",label:"Medium",children:Object(v.jsx)(g.a,{color:"blue",children:"Medium"})}),Object(v.jsx)(x.a.Option,{value:"Low",label:"Low",children:Object(v.jsx)(g.a,{color:"gray",children:"Low"})})]}),Object(v.jsx)(f.a,{type:"primary",onClick:function(){i(""),j(l.actions.addTodo({id:Object(L.a)(),name:a,priority:o,completed:!1}))},children:"Add"})]})}),Object(v.jsx)(p.a,{span:24,style:{height:"calc(100% - 40px)",overflowY:"auto"},children:u.map((function(e){return Object(v.jsx)(S,{id:e.id,name:e.name,prioriry:e.priority,completed:e.completed},e.id)}))})]})}var M=a(209),F=O.a.Search;function k(){var e=Object(d.b)(),t=Object(c.useState)(""),a=Object(b.a)(t,2),i=a[0],r=a[1],n=Object(c.useState)("All"),l=Object(b.a)(n,2),s=l[0],j=l[1],O=Object(c.useState)([]),f=Object(b.a)(O,2),m=f[0],y=f[1];return Object(v.jsxs)(h.a,{justify:"center",children:[Object(v.jsxs)(p.a,{span:24,children:[Object(v.jsx)(u.a.Paragraph,{style:{fontWeight:"bold",marginBottom:3,marginTop:10},children:"Search"}),Object(v.jsx)(F,{value:i,placeholder:"input search text",onChange:function(t){r(t.target.value),e(o.actions.searchFilterChange(t.target.value))}})]}),Object(v.jsxs)(p.a,{sm:24,children:[Object(v.jsx)(u.a.Paragraph,{style:{fontWeight:"bold",marginBottom:3,marginTop:10},children:"Filter By Status"}),Object(v.jsxs)(M.a.Group,{value:s,onChange:function(t){j(t.target.value),console.log("filterStatus",s),e(o.actions.searchFilterByStatus(t.target.value))},children:[Object(v.jsx)(M.a,{value:"All",children:"All"}),Object(v.jsx)(M.a,{value:"Completed",children:"Completed"}),Object(v.jsx)(M.a,{value:"Todo",children:"To do"})]})]}),Object(v.jsxs)(p.a,{sm:24,children:[Object(v.jsx)(u.a.Paragraph,{style:{fontWeight:"bold",marginBottom:3,marginTop:10},children:"Filter By Priority"}),Object(v.jsxs)(x.a,{value:m,onChange:function(t){y(t),e(o.actions.priorityFilter(t))},mode:"multiple",allowClear:!0,placeholder:"Please select",style:{width:"100%"},children:[Object(v.jsx)(x.a.Option,{value:"High",label:"High",children:Object(v.jsx)(g.a,{color:"red",children:"High"})}),Object(v.jsx)(x.a.Option,{value:"Medium",label:"Medium",children:Object(v.jsx)(g.a,{color:"blue",children:"Medium"})}),Object(v.jsx)(x.a.Option,{value:"Low",label:"Low",children:Object(v.jsx)(g.a,{color:"gray",children:"Low"})})]})]})]})}var A=u.a.Title;var H=function(){return Object(v.jsxs)("div",{style:{width:500,margin:"0 auto",display:"flex",flexDirection:"column",backgroundColor:"white",padding:20,boxShadow:"0 0 10px 4px #bfbfbf",borderRadius:5,height:"90vh"},children:[Object(v.jsx)(A,{style:{textAlign:"center",color:"#ba8fff",fontSize:"20px"},children:"Today Tasks"}),Object(v.jsx)(k,{}),Object(v.jsx)(j.a,{}),Object(v.jsx)(B,{})]})};r.a.render(Object(v.jsx)(d.a,{store:s,children:Object(v.jsx)(H,{})}),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.dc471c8c.chunk.js.map