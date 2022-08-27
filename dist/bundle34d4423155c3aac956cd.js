(()=>{"use strict";var e={144:(e,r,n)=>{n.d(r,{Z:()=>C});var t=n(81),a=n.n(t),o=n(645),c=n.n(o),i=n(667),s=n.n(i),d=new URL(n(679),n.b),l=new URL(n(456),n.b),u=new URL(n(533),n.b),g=new URL(n(316),n.b),f=new URL(n(484),n.b),b=new URL(n(543),n.b),p=c()(a()),h=s()(d),y=s()(l),w=s()(u),m=s()(g),v=s()(f),x=s()(b);p.push([e.id,"body{margin:0}.wrapper{background-image:url("+h+");background-position:50%;background-repeat:no-repeat;background-size:cover;display:flex;gap:20px;height:100vh;justify-content:space-between;width:100vw}.ancients-container{display:flex;flex-direction:column;flex-wrap:wrap;gap:10px;min-width:40%;padding:20px}.ancient-card{background-position:50%;background-repeat:no-repeat;background-size:contain;box-sizing:border-box;cursor:pointer;height:260px;width:200px}.ancient-card:hover{box-shadow:0 1px 4px #c031ad,-23px 0 20px -23px rgba(192,49,173,.8),23px 0 20px -23px rgba(192,49,173,.8),0 0 40px rgba(192,49,173,.1) inset}.ancient-card.active{border:1px solid #c031ad}.ancient-card:first-child{background-image:url("+y+")}.ancient-card:nth-child(2){background-image:url("+w+")}.ancient-card:nth-child(3){background-image:url("+m+")}.ancient-card:nth-child(4){background-image:url("+v+")}.difficulty-container{display:flex;flex-direction:column;gap:20px;height:100vh;justify-content:center}.difficulty{border:1px solid #fff;box-sizing:border-box;color:#fff;cursor:pointer;padding:5px;text-align:center}.difficulty.active{border:1px solid #c031ad}.deck-container{align-items:center;display:flex;flex-direction:column;gap:20px;justify-content:center;min-width:30%}.deck-container .shuffle-button{border:1px solid #fff;box-sizing:border-box;color:#fff;cursor:pointer;padding:5px}.difficulty:hover,.shuffle-button:hover{border:1px solid #c031ad;box-shadow:0 1px 4px #c031ad,-23px 0 20px -23px rgba(192,49,173,.8),23px 0 20px -23px rgba(192,49,173,.8),0 0 40px rgba(192,49,173,.1) inset}.current-state{display:flex;align-items:center;flex-direction:column;gap:10px;min-height:30%}.deck,.last-card{background-size:cover;height:190px;width:130px}.deck{background:url("+x+")}.deck:hover{box-shadow:0 1px 4px #c031ad,-23px 0 20px -23px rgba(192,49,173,.8),23px 0 20px -23px rgba(192,49,173,.8),0 0 40px rgba(192,49,173,.1) inset}.stage-container{align-items:center;display:flex;flex-direction:column;gap:5px}.stage-text.active{color:#c031ad}.stage-text{color:#fff}.dots-container{align-items:center;display:flex;gap:20px;justify-content:center}.dot{align-items:center;border-radius:50%;display:flex;height:30px;justify-content:center;width:30px}.dot.green{background-color:green}.dot.brown{background-color:brown}.dot.blue{background-color:blue}",""]);const C=p},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);t&&c[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),r.push(l))}},r}},667:e=>{e.exports=function(e,r){return r||(r={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),r.hash&&(e+=r.hash),/["'() \t\n]|(%20)/.test(e)||r.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],d=t.base?s[0]+t.base:s[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var g=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==g)r[g].references++,r[g].updater(f);else{var b=a(f,t);t.byIndex=i,r.splice(i,0,{identifier:u,updater:b,references:1})}c.push(u)}return c}function a(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,a){var o=t(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);r[i].references--}for(var s=t(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}o=s}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,a&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},456:(e,r,n)=>{e.exports=n.p+"assets/Azathoth.png"},533:(e,r,n)=>{e.exports=n.p+"assets/Cthulthu.png"},316:(e,r,n)=>{e.exports=n.p+"assets/IogSothoth.png"},484:(e,r,n)=>{e.exports=n.p+"assets/ShubNiggurath.png"},679:(e,r,n)=>{e.exports=n.p+"assets/home.png"},543:(e,r,n)=>{e.exports=n.p+"assets/mythicCardBackground.png"}},r={};function n(t){var a=r[t];if(void 0!==a)return a.exports;var o=r[t]={id:t,exports:{}};return e[t](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var r=n.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=[{id:"azathoth",name:"azathoth",firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:2,blueCards:0,brownCards:4}},{id:"cthulhu",name:"cthulhu",firstStage:{greenCards:0,blueCards:2,brownCards:2},secondStage:{greenCards:1,blueCards:0,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"iogSothoth",name:"iogSothoth",firstStage:{greenCards:0,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"shubNiggurath",name:"shubNiggurath",firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:3,blueCards:1,brownCards:2},thirdStage:{greenCards:2,blueCards:0,brownCards:4}}],r=[{id:"easy",name:"очень легкий"},{id:"easy",name:"легкий"},{id:"normal",name:"средний"},{id:"hard",name:"сложный"},{id:"hard",name:"очень сложный"}],t=[{id:"green1",cardFace:"./assets/green/green1.png",difficulty:"easy",color:"green"},{id:"green2",cardFace:"./assets/green/green2.png",difficulty:"hard",color:"green"},{id:"green3",cardFace:"./assets/green/green3.png",difficulty:"hard",color:"green"},{id:"green4",cardFace:"./assets/green/green4.png",difficulty:"hard",color:"green"},{id:"green5",cardFace:"./assets/green/green5.png",difficulty:"hard",color:"green"},{id:"green6",cardFace:"./assets/green/green6.png",difficulty:"hard",color:"green"},{id:"green7",cardFace:"./assets/green/green7.png",difficulty:"normal",color:"green"},{id:"green8",cardFace:"./assets/green/green8.png",difficulty:"normal",color:"green"},{id:"green9",cardFace:"./assets/green/green9.png",difficulty:"normal",color:"green"},{id:"green10",cardFace:"./assets/green/green10.png",difficulty:"normal",color:"green"},{id:"green11",cardFace:"./assets/green/green11.png",difficulty:"normal",color:"green"},{id:"green12",cardFace:"./assets/green/green12.png",difficulty:"easy",color:"green"},{id:"green13",cardFace:"./assets/green/green13.png",difficulty:"normal",color:"green"},{id:"green14",cardFace:"./assets/green/green14.png",difficulty:"normal",color:"green"},{id:"green15",cardFace:"./assets/green/green15.png",difficulty:"normal",color:"green"},{id:"green16",cardFace:"./assets/green/green16.png",difficulty:"easy",color:"green"},{id:"green17",cardFace:"./assets/green/green17.png",difficulty:"easy",color:"green"},{id:"green18",cardFace:"./assets/green/green18.png",difficulty:"easy",color:"green"}],a=[{id:"brown1",cardFace:"./assets/brown/brown1.png",difficulty:"normal",color:"brown"},{id:"brown2",cardFace:"./assets/brown/brown2.png",difficulty:"normal",color:"brown"},{id:"brown3",cardFace:"./assets/brown/brown3.png",difficulty:"normal",color:"brown"},{id:"brown4",cardFace:"./assets/brown/brown4.png",difficulty:"normal",color:"brown"},{id:"brown5",cardFace:"./assets/brown/brown5.png",difficulty:"normal",color:"brown"},{id:"brown6",cardFace:"./assets/brown/brown6.png",difficulty:"hard",color:"brown"},{id:"brown7",cardFace:"./assets/brown/brown7.png",difficulty:"hard",color:"brown"},{id:"brown8",cardFace:"./assets/brown/brown8.png",difficulty:"hard",color:"brown"},{id:"brown9",cardFace:"./assets/brown/brown9.png",difficulty:"hard",color:"brown"},{id:"brown10",cardFace:"./assets/brown/brown10.png",difficulty:"hard",color:"brown"},{id:"brown11",cardFace:"./assets/brown/brown11.png",difficulty:"easy",color:"brown"},{id:"brown12",cardFace:"./assets/brown/brown12.png",difficulty:"easy",color:"brown"},{id:"brown13",cardFace:"./assets/brown/brown13.png",difficulty:"easy",color:"brown"},{id:"brown14",cardFace:"./assets/brown/brown14.png",difficulty:"easy",color:"brown"},{id:"brown15",cardFace:"./assets/brown/brown15.png",difficulty:"normal",color:"brown"},{id:"brown16",cardFace:"./assets/brown/brown16.png",difficulty:"normal",color:"brown"},{id:"brown17",cardFace:"./assets/brown/brown17.png",difficulty:"normal",color:"brown"},{id:"brown18",cardFace:"./assets/brown/brown18.png",difficulty:"normal",color:"brown"},{id:"brown19",cardFace:"./assets/brown/brown19.png",difficulty:"normal",color:"brown"},{id:"brown20",cardFace:"./assets/brown/brown20.png",difficulty:"normal",color:"brown"},{id:"brown21",cardFace:"./assets/brown/brown21.png",difficulty:"easy",color:"brown"}],o=[{id:"blue1",cardFace:"./assets/blue/blue1.png",difficulty:"hard",color:"blue"},{id:"blue2",cardFace:"./assets/blue/blue2.png",difficulty:"hard",color:"blue"},{id:"blue3",cardFace:"./assets/blue/blue3.png",difficulty:"easy",color:"blue"},{id:"blue4",cardFace:"./assets/blue/blue4.png",difficulty:"easy",color:"blue"},{id:"blue5",cardFace:"./assets/blue/blue5.png",difficulty:"easy",color:"blue"},{id:"blue6",cardFace:"./assets/blue/blue6.png",difficulty:"hard",color:"blue"},{id:"blue7",cardFace:"./assets/blue/blue7.png",difficulty:"normal",color:"blue"},{id:"blue8",cardFace:"./assets/blue/blue8.png",difficulty:"hard",color:"blue"},{id:"blue9",cardFace:".assets//blue/blue9.png",difficulty:"normal",color:"blue"},{id:"blue10",cardFace:"./assets/blue/blue10.png",difficulty:"easy",color:"blue"},{id:"blue11",cardFace:"./assets/blue/blue11.png",difficulty:"normal",color:"blue"},{id:"blue12",cardFace:"./assets/blue/blue12.png",difficulty:"normal",color:"blue"}];var c=n(379),i=n.n(c),s=n(795),d=n.n(s),l=n(569),u=n.n(l),g=n(565),f=n.n(g),b=n(216),p=n.n(b),h=n(589),y=n.n(h),w=n(144),m={};m.styleTagTransform=y(),m.setAttributes=f(),m.insert=u().bind(null,"head"),m.domAPI=d(),m.insertStyleElement=p(),i()(w.Z,m),w.Z&&w.Z.locals&&w.Z.locals;const v=document.querySelector(".deck-container");let x,C,S,F="",k="",L=0,M=0,T=0,$=[],q=[];function j(){e.map((e=>{e.id==F&&(L=e.firstStage.blueCards+e.secondStage.blueCards+e.thirdStage.blueCards,M=e.firstStage.greenCards+e.secondStage.greenCards+e.thirdStage.greenCards,T=e.firstStage.brownCards+e.secondStage.brownCards+e.thirdStage.brownCards,q.green=[e.firstStage.greenCards,e.secondStage.greenCards,e.thirdStage.greenCards],q.brown=[e.firstStage.brownCards,e.secondStage.brownCards,e.thirdStage.brownCards],q.blue=[e.firstStage.blueCards,e.secondStage.blueCards,e.thirdStage.blueCards])}))}function E(e,r){let n=[];for(let t=0;t<e;t++)n.push(r.shift());return n}function H(e,r){let n=r.filter((e=>"normal"===e.difficulty)),t=(0,a=n.length-1,Math.round(Math.random()*(a-0)+0));var a;e.includes(n[t])||e.push(n[t])}function N(e){return e.sort((()=>Math.random()-.5))}function z(e,r){document.querySelector(`.${e} .${r}`).innerHTML-=1}window.onload=function(){!function(){const e=document.querySelector(".ancients-container");e.onclick=function(n){v.innerHTML="",F=n.target.id,j(),[...e.childNodes].map((e=>{void 0!==e.classList&&e.classList.contains("active")&&e.classList.remove("active")})),n.target.classList.add("active"),function(){const e=document.querySelector(".difficulty-container");e.innerHTML="",r.map((r=>{let n=document.createElement("div");n.classList.add("difficulty"),n.innerHTML=r.name,e.appendChild(n)}))}()}}(),function(){const e=document.querySelector(".difficulty-container");x=[],C=[],S=[],e.onclick=function(r){k=r.target.innerHTML,$=[],[...e.childNodes].map((e=>{e.classList.contains("active")&&e.classList.remove("active")})),r.target.classList.add("active"),function(){v.innerHTML="";let e=document.createElement("span");e.classList.add("shuffle-button"),e.innerHTML="Замешать колоду",v.appendChild(e),function(){const e=document.querySelector(".shuffle-button");e.onclick=function(r){!function(e,r,n){let t=E(q.green[0],e).concat(E(q.brown[0],r),E(q.blue[0],n)),a=E(q.green[1],e).concat(E(q.brown[1],r),E(q.blue[1],n)),o=E(q.green[2],e).concat(E(q.brown[2],r),E(q.blue[2],n));$.push(t),$.push(a),$.push(o)}(x,C,S),e.style.display="none",v.innerHTML=`\n     <div class='current-state'>\n       <div class='stage-container stage1'>\n         <span class='stage-text'>Первая стадия</span>\n         <div class='dots-container'>\n             <div class=' dot green'> ${q.green[0]}</div>\n             <div class=' dot brown'> ${q.brown[0]}</div>\n             <div class=' dot blue'> ${q.blue[0]}</div>\n         </div>  \n       </div>\n       <div class='stage-container stage2'>\n         <span class='stage-text'>Вторая стадия</span>\n         <div class='dots-container'>\n         <div class=' dot green'> ${q.green[1]}</div>\n         <div class=' dot brown'> ${q.brown[1]}</div>\n         <div class=' dot blue'> ${q.blue[1]}</div>\n         </div>  \n      </div> \n     <div class='stage-container stage3'>\n         <span class='stage-text'>Третья стадия</span>\n         <div class='dots-container'>\n         <div class=' dot green'> ${q.green[2]}</div>\n         <div class=' dot brown'> ${q.brown[2]}</div>\n         <div class=' dot blue'> ${q.blue[2]}</div>\n         </div>  \n     </div>\n     <div class='deck'></div>  \n     <div class='last-card'></div>  \n     </div>\n            \n     `,document.querySelector(".deck").onclick=function(e){!function(){let e;const r=document.querySelector(".last-card"),n=document.querySelector(".deck");if($[0].length>0)e=N($[0]).shift(),console.log("stage1",e.id,e.difficulty),document.querySelector(".stage1 .stage-text").classList.add("active"),z("stage1",e.color);else if($[1].length>0)e=N($[1]).shift(),console.log("stage2",e.id,e.difficulty),document.querySelector(".stage1 .stage-text").classList.remove("active"),document.querySelector(".stage2 .stage-text").classList.add("active"),z("stage2",e.color);else{if(!($[2].length>0))return void(n.style.opacity=0);e=N($[2]).shift(),console.log("stage3",e.id,e.difficulty),document.querySelector(".stage2 .stage-text").classList.remove("active"),document.querySelector(".stage3 .stage-text").classList.add("active"),z("stage3",e.color)}r.style.backgroundImage=`url(${e.cardFace})`}()}}}()}(),function(){if(console.log(k),"средний"===k&&(x=t.slice(0),S=o.slice(0),C=a.slice(0)),"легкий"===k&&(x=t.filter((e=>"hard"!=e.difficulty)),S=o.filter((e=>"hard"!=e.difficulty)),C=a.filter((e=>"hard"!=e.difficulty))),"очень легкий"===k){for(x=t.filter((e=>"easy"==e.difficulty)),S=o.filter((e=>"easy"==e.difficulty)),C=a.filter((e=>"easy"==e.difficulty));x.length<M;)H(x,t);for(;C.length<T;)H(C,a);for(;S.length<L;)H(S,o)}if("сложный"===k&&(x=t.filter((e=>"easy"!==e.difficulty)),S=o.filter((e=>"easy"!==e.difficulty)),C=a.filter((e=>"easy"!==e.difficulty))),"очень сложный"===k){for(x=t.filter((e=>"hard"==e.difficulty)),S=o.filter((e=>"hard"==e.difficulty)),C=a.filter((e=>"hard"==e.difficulty));x.length<M;)H(x,t);for(;C.length<T;)H(C,a);for(;S.length<L;)H(S,o)}}()}}()}})()})();