(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{43:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return G}));var a=n(0),c=n(40),r=n.n(c),l=n(41),o=n.n(l),i=n(12),s=n(48),u=n.n(s),m=n(42),b=n.n(m),f=function(e,t,n,a){return new(n||(n=Promise))((function(c,r){function l(e){try{i(a.next(e))}catch(e){r(e)}}function o(e){try{i(a.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}i((a=a.apply(e,t||[])).next())}))},d=u.a,p=function(){var e=Object(a.useState)({name:"",url:""}),t=e[0],n=e[1],c=null;return Object(a.useEffect)((function(){f(void 0,void 0,void 0,b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/public/mock/slognList.json",{});case 3:return t=e.sent,e.abrupt("return",t.json());case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))).then((function(e){n(e[0]),c=setInterval((function(){var t=Math.floor(Math.random()*e.length);n(e[t])}),2e3)}))}),[]),Object(i.b)((function(){clearInterval(c)})),Object(a.createElement)(r.a,{className:"slogn-main",style:d["slogn-main"]},Object(a.createElement)(r.a,null,t.name))},y=n(50);function g(e){var t=0;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)))return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var j=n.n(y).a;function v(e){var t=j.__cache||(j.__cache={}),n=function e(){var t=[],n=arguments[0],a=Object.prototype.toString.call(n).slice(8,-1).toLowerCase();if("string"===a)(n=n.trim())&&t.push(n);else if("array"===a)n.forEach((function(n){(n=e(n).trim())&&t.push(n)}));else if("object"===a)for(var c in n)(c=c.trim())&&n.hasOwnProperty(c)&&n[c]&&t.push(c);return t.join(" ").trim()}(e),a=n.split(/\s+/),c=t[n];return c||(c={},1===a.length?c=j[a[0].trim()]:a.forEach((function(e){c=Object.assign(c,j[e.trim()])})),t[n]=c),c}var O=[{min:0,max:8,name:"未开始",style:"unbegin",disabled:!0},{min:8,max:18,name:"马上抽奖",style:"ongoing",disabled:!1},{min:18,max:24,name:"已结束",style:"over",disabled:!0}],w=function(e){for(var t,n,c=(new Date).getHours(),l=g(O);!(n=l()).done;){var o=n.value;if(c>=o.min&&c<o.max){t=o;break}}return Object(a.createElement)(r.a,{onClick:t.disabled?function(){}:e.onClick,className:"lucky-button-container",style:j["lucky-button-container"]},Object(a.createElement)(r.a,{className:"lucky-button "+t.style,style:v("lucky-button "+t.style)},t.name))},E=function(e,t,n,a){return new(n||(n=Promise))((function(c,r){function l(e){try{i(a.next(e))}catch(e){r(e)}}function o(e){try{i(a.throw(e))}catch(e){r(e)}}function i(e){var t;e.done?c(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,o)}i((a=a.apply(e,t||[])).next())}))},k=Object(a.createContext)(null),N={title:"未中奖",image:"/public/img/draw_lucky_prize.png",desc:"谢谢您的参与",closeTxt:"知道了",isLucky:!1},z=n(51),x=n.n(z).a,_={uri:"../../public/img/draw_pointer.png"},M={uri:"../../public/img/draw_wheel.png"},S=4e3,C=8,P="ease-in-out",A=[],L=function(){var e=Object(a.useState)([]),t=e[0],n=e[1],c=Object(a.useState)(!1),l=c[0],i=c[1],s=Object(a.useState)(0),u=s[0],m=s[1],f=Object(a.useContext)(k),d=f.setShowModal,p=f.setModalProps;Object(a.useEffect)((function(){E(void 0,void 0,void 0,b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/public/mock/wheelPrizeList.json",{});case 3:return t=e.sent,e.abrupt("return",t.json());case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))).then((function(e){console.log(e);var t=function(e){var t=360/e.length;return e.map((function(e,n){e.style={transform:"rotate("+-n*t+"deg)"},A.push(n*t)})),e}(e);n(t)}))}),[]);var y={transition:"transform "+S+"ms "+P,transform:"rotate("+u+"deg)"};return Object(a.createElement)(r.a,{className:"wheel-main",style:x["wheel-main"]},Object(a.createElement)(o.a,{source:_,className:"wheel-pointer",style:x["wheel-pointer"]}),Object(a.createElement)(r.a,{className:"wheel-bg",style:Object.assign({},x["wheel-bg"],y)},Object(a.createElement)(o.a,{source:M,resizeMode:"contain",className:"wheel-img",style:x["wheel-img"]}),Object(a.createElement)(r.a,{className:"prize-list",style:x["prize-list"]},t.map((function(e){return Object(a.createElement)(r.a,{key:e.id,className:"prize-item",style:Object.assign({},x["prize-item"],e.style)},Object(a.createElement)(r.a,{className:"prize-desc",style:x["prize-desc"]},e.name),Object(a.createElement)(o.a,{className:"prize-img",resizeMode:"contain",source:{uri:e.icon},style:x["prize-img"]}))})))),Object(a.createElement)(w,{onClick:function(){var e,n,a=(e=t.length-1,void 0===n&&(n=0),Math.floor(Math.random()*(e-n+1)+n)),c=t[a];if(!l){i(!0),c.isPrize?p({title:"中奖啦",image:"/public/img/draw_lucky_prize.png",desc:"恭喜您获得"+c.name,closeTxt:"点击继续",isLucky:!0}):p(N);var r=u+360*C+A[a]-u%360;console.log(r),m(r),setTimeout((function(){d(!0),i(!1)}),S)}}}))},I=n(52),T=n.n(I).a,J=function(e){console.log(e);var t=e.title,n=e.desc,c=e.image,l=e.closeTxt,i=e.isLucky,s=Object(a.useContext)(k).setShowModal,u=function(){console.log("close"),s(!1)};return Object(a.createElement)(r.a,{className:"lucky-modal",style:T["lucky-modal"]},Object(a.createElement)(r.a,{className:"modal-container",style:T["modal-container"]},Object(a.createElement)(r.a,{className:"modal-cancel",onClick:function(){u()},style:T["modal-cancel"]},Object(a.createElement)(o.a,{style:{width:82,height:100},resizeMode:"contain",source:{uri:"/public/img/draw_modal_cancel.png"}})),Object(a.createElement)(r.a,{className:"modal-title-container",style:T["modal-title-container"]},Object(a.createElement)(r.a,{className:"modal-title",style:T["modal-title"]},t),Object(a.createElement)(r.a,{className:"modal-desc",style:T["modal-desc"]},n)),i?Object(a.createElement)(o.a,{resizeMode:"contain",className:"modal-prize-image",source:{uri:c},style:T["modal-prize-image"]}):null,Object(a.createElement)(r.a,{className:"modal-btn",onClick:function(){u()},style:T["modal-btn"]},l)),i?Object(a.createElement)(o.a,{resizeMode:"contain",className:"modal-prize-bg",source:{uri:"/public/img/draw_money_fly.png"},style:T["modal-prize-bg"]}):null,Object(a.createElement)(r.a,{className:"modal-mask",style:T["modal-mask"]}))},D=n(43),H=n.n(D),U=n(53),$=n.n(U);var q=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var a in n)e[a]=Object.assign(e[a]||{},n[a])}return e}(H.a,$.a),B={uri:"/public/img/draw_title.png"},F={uri:"/public/img/draw_bg_bottom.png"};function G(e){var t=Object(a.useState)(!1),n=t[0],c=t[1],l=Object(a.useState)(N),i=l[0],s=l[1],u=e.history;return Object(a.createElement)(k.Provider,{value:{setShowModal:c,setModalProps:s}},Object(a.createElement)(r.a,{className:"home",style:q.home},Object(a.createElement)(r.a,{className:"prize-list-link",onClick:function(){return u.push("/prize")},style:q["prize-list-link"]},"奖品"),Object(a.createElement)(o.a,{className:"lucky-title",resizeMode:"cover",source:B,style:q["lucky-title"]}),Object(a.createElement)(r.a,{className:"lucky-main",style:q["lucky-main"]},Object(a.createElement)(p,null),Object(a.createElement)(L,null)),n?Object(a.createElement)(J,i):null,Object(a.createElement)(o.a,{className:"lucky-bottom-bg",source:F,style:q["lucky-bottom-bg"]})))}}}]);