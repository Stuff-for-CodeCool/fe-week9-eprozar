(this.webpackJsonpeprozar=this.webpackJsonpeprozar||[]).push([[0],{1441:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(13),a=(n(19),n(14)),i=n(3),s=n(2),o=n.n(s),l=["0","1","10","100","1000","1001","1002","1003","1004","1005","1006","1008","1009","101","1010","1011","1012","1013","1014","1015","1016","1018","1019","102","1020","1021","1022","1023","1024","1025","1026","1027","1028","1029","103","1031","1032","1033","1035","1036","1037","1038","1039","104","1040","1041","1042","1043","1044","1045","1047","1048","1049","1050","1051","1052","1053","1054","1055","1056","1057","1058","1059","106","1060","1061","1062","1063","1064","1065","1066","1067","1068","1069","107","1070","1071","1072","1073","1074","1075","1076","1077","1078","1079","108","1080","1081","1082","1083","1084","109","11","110","111","112","113","114","115","116"].map((function(e){return{id:o.a.random.uuid(),name:o.a.commerce.productName(),price:o.a.commerce.price(10,400,2,"$"),shortDescription:o.a.lorem.sentence(),description:o.a.lorem.sentences(),image:"https://picsum.photos/id/".concat(e,"/500/500/"),category:Array(Math.floor(3*Math.random())+1).fill().map((function(){return o.a.commerce.department()})).filter((function(e,t,n){return!n.slice(0,t).includes(e)})).sort((function(e,t){return e>t?1:-1})),discount:Math.floor(35*Math.random())/100,discountDate:o.a.date.soon(2)}})).sort((function(e,t){return e.id<t.id?-1:1})),u=function(){var e=localStorage.getItem("eprozar-products");return e?JSON.parse(e):(localStorage.setItem("eprozar-products",JSON.stringify(l)),l)}(),d=n(0),j=function(e){var t=e.productCount;return Object(d.jsx)("header",{children:Object(d.jsxs)("nav",{children:[Object(d.jsx)("h1",{children:Object(d.jsx)("a",{href:"/",id:"logo",children:"eProzar"})}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/",children:"Products"})}),Object(d.jsxs)("li",{children:[Object(d.jsx)("a",{href:"/",children:"Shopping cart"}),t>0?Object(d.jsx)("span",{children:t}):null]})]})]})})},h=function(e){var t=e.handleFilterInput,n=e.category,c=e.categories,r=e.handleFilterSelect,a=e.handleNumber,i=e.reset;return Object(d.jsx)("section",{className:"filter",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("input",{type:"text",placeholder:"Product name",onChange:function(e){e.preventDefault(),t(e.target.value)}}),Object(d.jsxs)("select",{value:n,onChange:function(e){e.preventDefault(),r(e.target.value)},children:[Object(d.jsx)("option",{value:"",children:"Select a category"}),c.length?c.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)})):null]}),Object(d.jsx)("input",{type:"number",min:"0",step:"10",placeholder:"Price under...",onChange:function(e){e.preventDefault(),a(e.target.value)}}),Object(d.jsx)("button",{className:"btn",onClick:i,children:"Reset all filters"})]})})},p=function(e){var t,n=e.product,c=e.handlePurchase,r=new Date(n.discountDate).toLocaleString("en-us",{month:"short",day:"numeric"}),a=Math.floor(100*function(e,t){return Math.floor(100*e*(1-t))/100}((t=n.price,parseFloat(t.slice(1),10)),n.discount))/100;return Object(d.jsx)("section",{className:"promotion",children:Object(d.jsxs)("div",{className:"container shadow",style:{backgroundImage:"url(".concat(n.image,")")},children:[Object(d.jsx)("h2",{children:"Don't miss today's hot deal!"}),Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("h3",{children:n.name}),Object(d.jsx)("p",{children:n.shortDescription}),Object(d.jsx)("p",{className:"old-price",children:n.price}),Object(d.jsxs)("p",{children:[Object(d.jsxs)("strong",{children:["$",a]})," only on"," ",Object(d.jsx)("strong",{children:r})]}),Object(d.jsx)("button",{"data-id":n.id,className:"btn shadow",onClick:function(e){e.preventDefault(),c(e.target.dataset.id)},children:"Buy now"})]})]})})},b=function(e){var t=e.product,n=e.shoppingCart,r=e.handlePurchase,a=e.handleFilterSelect,i=function(e){e.preventDefault(),a(e.target.dataset.id)};return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card-image",children:Object(d.jsx)("img",{src:t.image,alt:t.name})}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h3",{children:t.name}),Object(d.jsx)("small",{children:t.category.map((function(e,t){return Object(d.jsxs)(c.Fragment,{children:[Object(d.jsx)("a",{"data-id":e,onClick:i,href:"/",children:e})," "]},t)}))}),Object(d.jsx)("p",{children:t.description}),Object(d.jsx)("strong",{children:t.price}),Object(d.jsx)("button",{className:"btn shadow","data-id":t.id,onClick:function(e){e.preventDefault(),r(e.target.dataset.id)},children:n.includes(t.id)?"Remove from cart":"Add to cart"})]})]})},f=function(e,t,n){if(e)return Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:"btn",onClick:t,children:n})})},m=function(e){var t,n=e.products,c=e.index,r=e.shoppingCart,a=e.handlePurchase,i=e.handleProductNavigation,s=e.handleFilterSelect,o=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=[],c=0;c<e.length;c+=t){var r=e.slice(c,c+t);n.push(r)}return n}(n),l=c>0,u=c<o.length-1,j=function(e){e.preventDefault(),i(e.target.dataset.page)};return Object(d.jsx)("section",{className:"products",children:Object(d.jsxs)("div",{className:"container",children:[(null===(t=o[c])||void 0===t?void 0:t.length)?o[c].map((function(e){return Object(d.jsx)(b,{product:e,shoppingCart:r,handlePurchase:a,handleFilterSelect:s},e.id)})):Object(d.jsx)("p",{className:"error",children:"No products match your query."}),l||u?Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[f(l,(function(e){e.preventDefault(),i(c-1)}),"Previous"),o.map((function(e,t){return Object(d.jsx)("li",{children:Object(d.jsx)("button",{className:t===c?"btn active":"btn","data-page":t,onClick:j,children:t+1})},t)})),f(u,(function(e){e.preventDefault(),i(c+1)}),"Next")]})}):null]})})},O=function(){return Object(d.jsx)("footer",{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("p",{children:["We bring you ",Object(d.jsx)("strong",{children:"only the best products"})," that can be randomly generated!"]}),Object(d.jsxs)("p",{children:["All the content has been generated using"," ",Object(d.jsx)("a",{href:"https://marak.github.io/faker.js/",children:"faker.js"})," with images from ",Object(d.jsx)("a",{href:"https://picsum.photos/",children:"Lorem Picsum"})]})]})})},x=function(e){return e.sort((function(e,t){return e.id>t.id?-1:1}))},g=function(){var e=u.sort((function(e,t){return Math.random()>.5?1:-1}))[0],t=Object(c.useState)(x(u)),n=Object(i.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),b=l[0],f=l[1],g=Object(c.useState)(0),v=Object(i.a)(g,2),y=v[0],N=v[1],S=Object(c.useState)([]),C=Object(i.a)(S,2),D=C[0],P=C[1],k=Object(c.useState)(0),F=Object(i.a)(k,2),w=(F[0],F[1]),M=function(e){s(e.length?u.filter((function(t){return t.category.includes(e)})):x(u)),N(0),f(e),w(0),document.querySelector("section.filter input[type=text]").value=""},I=function(e){P(D.includes(e)?D.filter((function(t){return t!==e})):[].concat(Object(a.a)(D),[e]))},z=u.map((function(e){return e.category})).reduce((function(e,t){return e.concat(t)}),[]).filter((function(e,t,n){return!n.slice(0,t).includes(e)})).sort();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{productCount:D.length}),Object(d.jsx)(h,{handleFilterInput:function(e){s(e.length?u.filter((function(t){return t.category.concat(t.name).map((function(e){return e.toLowerCase()})).join(" ").includes(e)})):x(u)),N(0),f(""),w(0)},category:b,categories:z,handleFilterSelect:M,handleNumber:function(e){s(e>0?u.filter((function(t){return parseFloat(t.price.slice(1))<=e})):x(u)),N(0),f(0)},reset:function(e){e.preventDefault(),s(u),f(""),N(0),w(0),document.querySelector("section.filter input[type=text]").value=""}}),Object(d.jsx)(p,{product:e,handlePurchase:I}),Object(d.jsx)(m,{products:r,index:y,shoppingCart:D,handlePurchase:I,handleProductNavigation:function(e){e<0&&(e=0),e>=Math.floor(r/6)&&(e=Math.floor(r/6)-1),N(e)},handleFilterSelect:M}),Object(d.jsx)(O,{})]})};Object(r.render)(Object(d.jsx)(g,{}),document.getElementById("root"))},19:function(e,t,n){}},[[1441,1,2]]]);
//# sourceMappingURL=main.1781873b.chunk.js.map