(this.webpackJsonpcocktailsdb=this.webpackJsonpcocktailsdb||[]).push([[0],{36:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),r=c.n(n),a=c(28),i=c.n(a),l=(c(36),c(5)),o=c(2),j=c(10),d=c.n(j),u=c(13),b=c(11),m=c(14),x=c.n(m),h=r.a.createContext(),O=function(e){var t=e.children,c=Object(n.useState)(""),r=Object(b.a)(c,2),a=r[0],i=r[1],l=Object(n.useState)(!1),o=Object(b.a)(l,2),j=o[0],m=o[1],O=Object(n.useState)([]),p=Object(b.a)(O,2),f=p[0],g=p[1],v=Object(n.useState)(null),N=Object(b.a)(v,2),w=N[0],k=N[1],I=Object(n.useState)(null),y=Object(b.a)(I,2),D=y[0],S=y[1],C=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,x.a.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a");case 3:t=e.sent,c=t.data,g(c.drinks),m(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,x.a.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?",{params:{s:a}});case 3:t=e.sent,(c=t.data).drinks?g(c.drinks):g([]),m(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,x.a.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(w));case 3:t=e.sent,c=t.data,S(c.drinks[0]),m(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){C()}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){0===a.length?C():T()}),700);return function(){clearTimeout(e)}}),[a]),Object(n.useEffect)((function(){w&&E()}),[w]),Object(s.jsx)(h.Provider,{value:{loading:j,list:f,searchTerm:a,setSearchTerm:i,selectedID:w,setSelectedID:k,selectedDetails:D},children:t})},p=function(){return Object(n.useContext)(h)},f=function(){var e=p(),t=e.searchTerm,c=e.setSearchTerm;return Object(s.jsxs)("div",{className:"card w-75 mx-auto p-3 bg-light mb-5",children:[Object(s.jsx)("span",{className:"fw-bold mb-1",children:"Search Cocktails:"}),Object(s.jsx)("input",{type:"text",className:"form-control",value:t,onChange:function(e){return c(e.target.value)}})]})},g=c(30),v=function(){return Object(s.jsx)("div",{className:"d-flex py-5 w-100 justify-content-center align-items-center",children:Object(s.jsx)("div",{className:"spinner-border text-success",style:{width:"3rem",height:"3rem"}})})},N=function(e){var t=p().setSelectedID,c=e.strDrinkThumb,n=e.idDrink,r=e.strAlcoholic,a=e.strGlass,i=e.strDrink;return Object(s.jsxs)("div",{className:"card bg-light my-3",children:[Object(s.jsx)("img",{src:c+"/preview",className:"card-img-top",alt:i}),Object(s.jsxs)("div",{className:"card-body text-start p-3",children:[Object(s.jsx)("h5",{className:"card-title fw-bolder text-success",children:i}),Object(s.jsx)("small",{children:a}),Object(s.jsx)("br",{}),Object(s.jsx)("small",{className:"text-muted",children:r}),Object(s.jsx)("br",{}),Object(s.jsx)(l.b,{to:"/cocktail/".concat(n),className:"btn btn-sm btn-outline-success mt-2 d-block mx-auto py-0",onClick:function(){return t(n)},children:"More Details"})]})]})},w=function(){var e=p(),t=e.loading,c=e.list;return t?Object(s.jsx)(v,{}):0===c.length?Object(s.jsx)("div",{className:"container text-center",children:Object(s.jsx)("h3",{className:"text-danger text-capitalize",children:"no cocktails matched your search criteria"})}):Object(s.jsxs)("div",{className:"container px-5 text-center",children:[Object(s.jsx)("h3",{className:"text-success",children:"Cocktails List"}),Object(s.jsx)("small",{children:"Search more than Hundreds of DRINKS !"}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"row",children:c.map((function(e){return Object(s.jsx)("div",{className:"col-sm-6 col-md-4 col-lg-3",children:Object(s.jsx)(N,Object(g.a)({},e))},e.idDrink)}))})]})},k=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)(f,{}),Object(s.jsx)(w,{})]})},I=function(){return Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsx)("h1",{children:"About Us"}),Object(s.jsx)("p",{className:"w-50 mx-auto mt-5",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem repellendus dolorum nulla? Enim a deserunt id laudantium iure, doloribus quia delectus ratione corporis nisi in, optio porro dignissimos eum."})]})},y=function(){return Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsx)("h1",{children:"Contact Us"}),Object(s.jsx)("p",{className:"w-50 mx-auto mt-5",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem repellendus dolorum nulla? Enim a deserunt id laudantium iure, doloribus quia delectus ratione corporis nisi in, optio porro dignissimos eum."})]})},D=function(){return Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsxs)("h3",{children:["oops!",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"There is no such page..."]}),Object(s.jsx)(l.b,{to:"/",className:"btn btn-outline-success mt-5",children:"See Home Page"})]})},S=function(e){var t=p(),c=t.loading,r=t.selectedDetails,a=t.setSelectedID,i=t.selectedID;if(Object(n.useEffect)((function(){i||a(e.match.params.id)}),[]),c)return Object(s.jsx)(v,{});if(!r)return Object(s.jsx)(v,{});var o=r.strDrinkThumb,j=r.strAlcoholic,d=r.strGlass,u=r.strDrink,b=r.strCategory,m=r.strInstructions,x=[r.strIngredient1,r.strIngredient2,r.strIngredient3,r.strIngredient4,r.strIngredient5,r.strIngredient6,r.strIngredient7,r.strIngredient8,r.strIngredient9];return Object(s.jsxs)("div",{className:"container px-5",children:[Object(s.jsx)("div",{className:"card bg-light",children:Object(s.jsxs)("div",{className:"row g-0",children:[Object(s.jsx)("div",{className:"col-md-4",children:Object(s.jsx)("img",{src:o,alt:u,className:"w-100"})}),Object(s.jsx)("div",{className:"col-md-8",children:Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("h3",{className:"card-title text-uppercase text-success",children:u}),Object(s.jsx)("small",{className:"bg-success text-white px-2 rounded me-3",children:"Alcohol :"}),Object(s.jsx)("small",{children:j}),Object(s.jsx)("br",{}),Object(s.jsx)("small",{className:"bg-success text-white px-2 rounded me-3",children:"Glass Type :"}),Object(s.jsx)("small",{children:d}),Object(s.jsx)("br",{}),Object(s.jsx)("small",{className:"bg-success text-white px-2 rounded me-3",children:"Category :"}),Object(s.jsx)("small",{children:b}),Object(s.jsx)("br",{}),Object(s.jsx)("small",{className:"bg-success text-white px-2 rounded me-3",children:"Ingredients :"}),Object(s.jsx)("small",{children:x.map((function(e,t){return e&&Object(s.jsxs)("span",{children:[" ",e," /"]},t)}))}),Object(s.jsx)("br",{}),Object(s.jsx)("small",{className:"bg-success text-white px-2 rounded me-3",children:"Instructions :"}),Object(s.jsx)("small",{children:m})]})})]})}),Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)(l.b,{className:"btn btn-outline-success mt-5 px-5",to:"/",children:"Go Home Page"})})]})},C=function(){return Object(s.jsx)("nav",{className:"text-white bg-success shadow mb-5",children:Object(s.jsx)("div",{className:"container px-3",children:Object(s.jsxs)("div",{className:"d-flex align-items-center py-2",children:[Object(s.jsx)(l.b,{className:"text-decoration-none text-warning fw-bolder fs-4",to:"/",children:"CocktailsDB"}),Object(s.jsxs)("div",{className:"d-flex ms-auto",children:[Object(s.jsx)(l.b,{className:"text-decoration-none text-white mx-2 d-none d-sm-block",to:"/",children:"Home"}),Object(s.jsx)(l.b,{className:"text-decoration-none text-white mx-2",to:"/contact",children:"Contact"}),Object(s.jsx)(l.b,{className:"text-decoration-none text-white mx-2",to:"/about",children:"About"})]})]})})})},T=function(){return Object(s.jsxs)(l.a,{basename:"/",children:[Object(s.jsx)(C,{}),Object(s.jsxs)(o.c,{children:[Object(s.jsx)(o.a,{exact:!0,path:"/",component:k}),Object(s.jsx)(o.a,{exact:!0,path:"/about",component:I}),Object(s.jsx)(o.a,{exact:!0,path:"/contact",component:y}),Object(s.jsx)(o.a,{exact:!0,path:"/cocktail/:id",component:S}),Object(s.jsx)(o.a,{exact:!0,path:"*",component:D})]})]})};i.a.render(Object(s.jsx)(O,{children:Object(s.jsx)(T,{})}),document.querySelector("#root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.e18b4002.chunk.js.map