(this["webpackJsonprecipe-bot"]=this["webpackJsonprecipe-bot"]||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),s=a(5),i=a.n(s),u=a(3),o=a(16),m=a(17),d=a(2),b=(a(25),function(e){var t=e.title,a=e.image,l=e.time,c=e.calories,s=e.protiens,i=e.carbs,u=e.fats,o=e.ingredientsArray,m=e.instructionsArray,b=Object(n.useState)(!1),p=Object(d.a)(b,2),E=p[0],f=p[1],h=Object(n.useState)(!1),g=Object(d.a)(h,2),v=g[0],y=g[1];return r.a.createElement("div",{className:"recipe-card"},r.a.createElement("div",{className:"recipe-grid"},r.a.createElement("div",{className:"col-1"},r.a.createElement("h3",{className:"title"},t),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:"".concat(a),alt:"food",className:"img"})),r.a.createElement("div",{className:"col-2"},r.a.createElement("br",null)," ",r.a.createElement("br",null),"Ready In: ",l," minutes",r.a.createElement("br",null)," ",r.a.createElement("br",null),"Nutrional Information",r.a.createElement("br",null),r.a.createElement("br",null),"Calories: ",Math.round(c)," cal",r.a.createElement("br",null),"Protiens: ",Math.round(s)," g",r.a.createElement("br",null),"Carbs: ",Math.round(i)," g",r.a.createElement("br",null),"Fats: ",Math.round(u)," g",r.a.createElement("br",null)," ",r.a.createElement("br",null)),r.a.createElement("div",{className:"col-3"},r.a.createElement("button",{className:"btn",onClick:function(){y(!v)}},"Show Ingredients"),r.a.createElement("br",null),r.a.createElement("br",null),v?"Ingredients":null,r.a.createElement("br",null),r.a.createElement("br",null),v?o:null),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{className:"btn",onClick:function(){f(!E)}},"Show Instructions"),r.a.createElement("br",null),r.a.createElement("br",null),E?"Instructions":null,r.a.createElement("br",null),r.a.createElement("br",null),E?m:null)))}),p=(a(26),function(e){var t=e.values;if(!t)return null;var a=t.map((function(e){return r.a.createElement(b,{key:e.id,id:e.id,title:e.title,image:e.image,time:e.readyInMinutes,calories:e.nutrition.nutrients[0].amount,protiens:e.nutrition.nutrients[8].amount,carbs:e.nutrition.nutrients[3].amount,fats:e.nutrition.nutrients[1].amount,ingredientsArray:e.nutrition.ingredients.map((function(e,t){return r.a.createElement("p",{key:t},e.name)})),instructionsArray:e.analyzedInstructions[0].steps.length>1?e.analyzedInstructions[0].steps.map((function(e,t){return r.a.createElement("p",{key:t},e.step)})):"Sorry no instructions available :("})}));return r.a.createElement("div",{className:"list"},a)}),E=(a(27),a(18)),f=a.n(E);a(44).config();var h=function(){var e="da81a683d6344f9db17aabcc8434ff97",t=Object(n.useState)([]),a=Object(d.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(""),b=Object(d.a)(s,2),E=b[0],h=b[1],g=Object(n.useState)({searchValue:"",slideValue:1}),v=Object(d.a)(g,2),y=v[0],N=v[1];function j(){return(j=Object(m.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f()({method:"get",url:"https://api.spoonacular.com/recipes/complexSearch?query=".concat(a.searchValue,"&number=").concat(a.slideValue,"&instructionsRequired=true&addRecipeNutrition=true&apiKey=").concat(e)});case 3:(n=t.sent).data.results&&0!==n.data.results.length?c(n.data.results):h(r.a.createElement("p",{className:"notFoundMessage"},"Sorry no food item found ! Try something else :)")),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}var O=function(e){N(Object(o.a)({},y,Object(u.a)({},e.target.name,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"inputContainer"},r.a.createElement("p",{className:"head"},"Recipe Bot"),r.a.createElement("input",{type:"text",name:"searchValue",className:"search",placeholder:"Enter the food name",onChange:O,required:!0}),r.a.createElement("p",{className:"sliderhead"},"Select number of recipes [1 to 20]"),r.a.createElement("input",{type:"range",name:"slideValue",className:"slider",min:"1",max:"20",onChange:O}),r.a.createElement("button",{className:"btn",onClick:function(){return function(e){return j.apply(this,arguments)}(y)}},"Find me Recipes"),r.a.createElement("a",{href:"https://spoonacular.com/food-api\r ",target:"_blank",rel:"noopener noreferrer",className:"attribution"},"Powered by Spoonacular API")),r.a.createElement("div",{className:"outputContainer"},E,r.a.createElement(p,{values:l})))};c.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.51c992d9.chunk.js.map