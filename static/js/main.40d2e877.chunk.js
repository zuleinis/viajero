(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(20),s=a.n(r),i=(a(29),a(30),a(31),a.p+"static/media/logo.04e491a1.png"),l=a(2);var o=function(e){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{className:"logo",src:i,alt:"Logo"})}),Object(l.jsx)("div",{})]})};a(33);var u=function(e){return Object(l.jsxs)("div",{className:"footer",children:["Software Engineering Summit 2021 Challenge by Capital One",Object(l.jsx)("br",{}),"Created by Zuleinis Ramos"]})},j=a(19),d=a.n(j),h=a(21),b=a(10),p=(a(35),a(60)),g=a(64),O=a(67),m=a(68),x=a(62),f=a(65),v=a(66),y=a(63),N=Object(p.a)({table:{maxHeight:700,width:1e3},paper:{marginTop:100,display:"flex",justifyContent:"center",alignItems:"center",width:1e3,margin:75,boxShadow:"0 0 5px 5px rgba(1, 22, 39, .1)",background:"rgba(253, 255, 252, .9)"},header:{background:"#496da1",fontSize:"15px",fontFamily:"Segoe UI",fontWeight:"bold",color:"white"}});var S=function(e){var t=N();return Object(l.jsx)(x.a,{className:t.paper,component:y.a,children:Object(l.jsx)("div",{className:t.table,children:Object(l.jsxs)(g.a,{stickyHeader:!0,"aria-label":"flights table",children:[Object(l.jsx)(f.a,{children:Object(l.jsxs)(v.a,{children:[Object(l.jsx)(m.a,{className:t.header,children:"Flight"}),Object(l.jsx)(m.a,{className:t.header,align:"right",children:"Price"}),Object(l.jsx)(m.a,{className:t.header,align:"right",children:"Departure Date (yyyy-mm-dd)"}),Object(l.jsx)(m.a,{className:t.header,align:"right",children:"Carrier ID"})]})}),Object(l.jsx)(O.a,{children:e.quotes.map((function(e){return Object(l.jsxs)(v.a,{children:[Object(l.jsx)(m.a,{component:"th",scope:"row",children:e.QuoteId}),Object(l.jsx)(m.a,{className:t.price,align:"right",children:e.MinPrice}),Object(l.jsx)(m.a,{align:"right",children:e.OutboundLeg.DepartureDate}),Object(l.jsx)(m.a,{align:"right",children:e.OutboundLeg.CarrierIds})]},e.QuoteId)}))})]})})})};var I=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(b.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(""),j=Object(b.a)(u,2),p=j[0],g=j[1],O=Object(n.useState)(""),m=Object(b.a)(O,2),x=m[0],f=m[1],v=Object(n.useState)(""),y=Object(b.a)(v,2),N=y[0],I=y[1],C=Object(n.useState)(!1),F=Object(b.a)(C,2),k=F[0],w=F[1],D=N+"/en-US/"+i+"/"+p+"/"+x;return Object(l.jsxs)("div",{className:"flights",children:[Object(l.jsxs)("form",{onSubmit:function(e){function t(){return(t=Object(h.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"x-rapidapi-key":"77d6e6582fmsh182374a4e32e3eep181d8djsn1133a8fa64cb","x-rapidapi-host":"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",useQueryString:!0}},e.next=3,fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/"+D,t);case 3:return a=e.sent,e.next=6,a.json();case 6:a=e.sent,console.log(a.Quotes),c(a.Quotes);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}(),w(!0)},children:[Object(l.jsx)("label",{className:"font",htmlFor:"destinationInput",children:"Find flights to"}),Object(l.jsx)("input",{className:"input",placeholder:"E.g. SJU",id:"destinationInput",value:i,onChange:function(e){return o(e.target.value)},required:!0}),Object(l.jsx)("label",{className:"font",htmlFor:"originInput",children:"from"}),Object(l.jsx)("input",{className:"input",placeholder:"E.g. JFK",id:"originInput",value:p,onChange:function(e){return g(e.target.value)},required:!0}),Object(l.jsx)("label",{className:"font",htmlFor:"dateInput",children:"on"}),Object(l.jsx)("input",{className:"input",placeholder:"YYYY-MM-DD",id:"dateInput",value:x,onChange:function(e){return f(e.target.value)},required:!0}),Object(l.jsx)("label",{className:"font",htmlFor:"currencyInput",children:"in"}),Object(l.jsx)("input",{className:"input",placeholder:"E.g. USD",id:"currencyInput",value:N,onChange:function(e){return I(e.target.value)},required:!0}),Object(l.jsx)("button",{className:"search",children:"Search"})]}),k?Object(l.jsx)(S,{quotes:a}):Object(l.jsx)(l.Fragment,{})]})};var C=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(I,{}),Object(l.jsx)(u,{})]})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root")),F()}},[[40,1,2]]]);
//# sourceMappingURL=main.40d2e877.chunk.js.map