(this["webpackJsonprock-paper-scissors"]=this["webpackJsonprock-paper-scissors"]||[]).push([[0],[,,,,,function(e,t,r){e.exports=r(13)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),s=r.n(n),c=r(3),a=r.n(c),o=r(1),i=r(4),u=(r(10),function(e){var t=Object(n.useState)(null),r=Object(i.a)(t,2),c=r[0],a=r[1],o=e.rps;return Object(n.useEffect)((function(){switch(o){case"rock":return a("\ud83d\udc4a");case"scissors":return a("\u270c");case"paper":return a("\u270b");default:return}}),[]),s.a.createElement("div",Object.assign({},e,{className:"rpsButton"}),c)}),l=function(e,t){if("rock"===e){if("rock"===t)return"tie";if("paper"===t)return"lose";if("scissors"===t)return"win"}if("paper"===e){if("rock"===t)return"win";if("paper"===t)return"tie";if("scissors"===t)return"lose"}if("scissors"===e){if("rock"===t)return"lose";if("paper"===t)return"win";if("scissors"===t)return"tie"}},f=(r(11),function(e){var t=e.comp_rps,r=e.rps,n=function(e){switch(e){case"rock":return"\ud83d\udc4a";case"scissors":return"\u270c";case"paper":return"\u270b";default:return}};return s.a.createElement("div",{className:"results-container"},s.a.createElement("div",{className:"rps computer-rps"},n(e.comp_rps)),s.a.createElement("div",{className:"result-emoji"},function(){switch(l(r,t)){case"win":return"\u2714 You Win!";case"lose":return"\u274c You Lose!";case"tie":return"\ud83e\udd37 Its a tie!";default:return""}}()),s.a.createElement("div",{className:"rps player-rps"},n(e.rps)))});r(12);var p=function(){var e=Object(n.useRef)(!0),t=Object(n.useState)(null),r=Object(o.a)(t,2),c=r[0],a=r[1],i=Object(n.useState)(null),p=Object(o.a)(i,2),m=p[0],v=p[1],b=Object(n.useState)(0),d=Object(o.a)(b,2),E=d[0],k=d[1],w=Object(n.useState)(!1),h=Object(o.a)(w,2),j=h[0],O=h[1];Object(n.useEffect)((function(){if(!j){switch(Math.floor(3*Math.random())){case 0:v("rock");break;case 1:v("paper");break;case 2:v("scissors")}a(null)}}),[j]);var g=function(e){var t=e.target.attributes.getNamedItem("rps").value;a(t),O(!0)};Object(n.useEffect)((function(){if(e.current)e.current=!1;else{var t=l(c,m);console.log(c,m),"win"===t&&k((function(e){return e+1}))}}),[c,m]),Object(n.useEffect)((function(){var e=setTimeout((function(){O(!1)}),2900);return function(){return clearTimeout(e)}}),[j]);var N=j?s.a.createElement(f,{comp_rps:m,rps:c}):null;return s.a.createElement("div",{className:"container"},N,s.a.createElement("h1",{className:"wins"},"Wins: ",E),s.a.createElement("div",{className:"buttons-container"},s.a.createElement("div",null,s.a.createElement(u,{onClick:g,rps:"rock"})),s.a.createElement("div",null,s.a.createElement(u,{onClick:g,rps:"paper"}),s.a.createElement(u,{onClick:g,rps:"scissors"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.f5fccd5f.chunk.js.map