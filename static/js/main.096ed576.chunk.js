(this.webpackJsonpreactproject=this.webpackJsonpreactproject||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},32:function(e,t,n){e.exports=n(52)},37:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),l=n.n(r),s=(n(37),n(28)),c=n(10),i=n(18),u=n(19),h=n(29),m=n(27);n(13),n(14);var f=[];function g(e,t,n){return f=[],function e(t,n,a){var o;t.length>1&&(o=function(e,t,n){var a,o=[],r=e[Math.floor((n+t)/2)],l=t,s=n;a=e.indexOf(r);for(;l<=s;){for(o=[l,s],f.push(o),f.push(o),f.push(a);e[l]<r;)l++,o=[l,s],f.push(o),f.push(o),f.push(a);for(;e[s]>r;)s--,o=[l,s],f.push(o),f.push(o),f.push(a);var c=[];l<=s&&(d(e,l,s),c=[l,s,1],l++,s--),f.push(c),f.push(a)}return l}(t,n,a),n<o-1&&e(t,n,o-1),o<a&&e(t,o,a));return t}(e,t,n),f}function d(e,t,n){var a=e[t];e[t]=e[n],e[n]=a}function p(e){var t=[];if(e.length<=1)return e;var n=e.slice();return function e(t,n,a,o,r){if(n===a)return;var l=Math.floor((n+a)/2);e(o,n,l,t,r),e(o,l+1,a,t,r),function(e,t,n,a,o,r){var l=t,s=t,c=n+1;for(;s<=n&&c<=a;)r.push([s,c]),r.push([s,c]),o[s]<=o[c]?(r.push([l,o[s],1]),e[l++]=o[s++]):(r.push([l,o[c],1]),e[l++]=o[c++]);for(;s<=n;)r.push([s,s]),r.push([s,s]),r.push([l,o[s],1]),e[l++]=o[s++];for(;c<=a;)r.push([c,c]),r.push([c,c]),r.push([l,o[c],1]),e[l++]=o[c++]}(t,n,l,a,o,r)}(e,0,e.length-1,n,t),t}var v=n(63),y=n(20),b=n(7),k=n.n(b),C=100,E=Math.floor(1/C*1e3),S="transparent",N=!1,x=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={array:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.generateArray(C)}},{key:"generateArray",value:function(e){var t=0;t=e<=50?100:1.5*e;for(var n=[],a=0;a<e;a++)n.push(Math.floor(Math.random()*(t-20+1)+20));this.setState({array:n})}},{key:"setColour",value:function(){var e,t=document.getElementsByClassName("bar"),n=Object(c.a)(t);try{for(n.s();!(e=n.n()).done;){e.value.style.backgroundColor="pink"}}catch(a){n.e(a)}finally{n.f()}}},{key:"disableComponents",value:function(e){var t=document.getElementsByClassName("action"),n=document.getElementById("Algs");N=!0,n.disabled=!0;var a,o=Object(c.a)(t);try{for(o.s();!(a=o.n()).done;){a.value.disabled=!0}}catch(r){o.e(r)}finally{o.f()}console.log("disabled"),setTimeout((function(){console.log("enabling"),n.disabled=!1,N=!1;var e,a=Object(c.a)(t);try{for(a.s();!(e=a.n()).done;){e.value.disabled=!1}}catch(r){a.e(r)}finally{a.f()}}),e)}},{key:"bubbleSort",value:function(){var e=Math.floor(1/(2*C)*1e3),t=function(e){for(var t=[],n=1;n<e.length;n++)for(var a=0;a<n;a++){var o=[n,a],r=[];if(e[n]<e[a]){r=[n,a];var l=e[n];e[n]=e[a],e[a]=l}t.push(o),t.push(o),t.push(r)}return t}(this.state.array);this.disableComponents(t.length*e);for(var n=function(n){var a=document.getElementsByClassName("bar");if(n%3!==2){var o=a[t[n][0]],r=a[t[n][1]];n%3===0?setTimeout((function(){o.style.backgroundColor="red",r.style.backgroundColor="red"}),n*e):setTimeout((function(){o.style.backgroundColor="pink",r.style.backgroundColor="pink"}),n*e)}else 0!==t[n].length&&setTimeout((function(){var e=a[t[n][0]],o=a[t[n][1]],r=e.style.height;e.style.height="".concat(o.style.height),e.textContent="".concat(o.style.height).replace("px",""),o.style.height="".concat(r),o.textContent="".concat(r).replace("px","")}),n*e);n===t.length-1&&setTimeout((function(){for(var t=function(t){setTimeout((function(){a[t].style.backgroundColor="lime"}),t*e)},n=0;n<a.length;n++)t(n)}),e*t.length)},a=0;a<t.length;a++)n(a)}},{key:"quickSort",value:function(){var e=0,t=Math.floor(1/(2*C)*1e3),n=g(this.state.array,0,this.state.array.length-1);this.disableComponents(n.length*t);for(var a=function(a){var o=document.getElementsByClassName("bar");2===n[a].length&&(++e%2!==0?setTimeout((function(){var e=o[n[a][0]],t=o[n[a][1]];e.style.backgroundColor="red",t.style.backgroundColor="red"}),a*t):setTimeout((function(){var e=o[n[a][0]],t=o[n[a][1]];e.style.backgroundColor="pink",t.style.backgroundColor="pink"}),a*t)),3===n[a].length&&setTimeout((function(){var e=o[n[a][0]],t=o[n[a][1]],r=e.style.height;e.style.height="".concat(t.style.height),e.textContent="".concat(t.style.height).replace("px",""),t.style.height="".concat(r),t.textContent="".concat(r).replace("px","")}),a*t),a===n.length-1&&setTimeout((function(){for(var e=function(e){setTimeout((function(){o[e].style.backgroundColor="lime"}),e*t)},n=0;n<o.length;n++)e(n)}),t*n.length)},o=0;o<n.length;o++)a(o)}},{key:"mergeSort",value:function(){var e=p(this.state.array),t=Math.floor(1/(2*C)*1e3),n=0;this.disableComponents(e.length*t);for(var a=function(a){var o=document.getElementsByClassName("bar");if(0===e.length)return"continue";3!==e[a].length?++n%2!==0?setTimeout((function(){var t=o[e[a][0]],n=o[e[a][1]];t.style.backgroundColor="red",n.style.backgroundColor="red"}),a*t):setTimeout((function(){var t=o[e[a][0]],n=o[e[a][1]];t.style.backgroundColor="pink",n.style.backgroundColor="pink"}),a*t):setTimeout((function(){var t=o[e[a][0]],n=e[a][1];t.style.height="".concat(n,"px"),t.textContent="".concat(n).replace("px","")}),a*t),a===e.length-1&&setTimeout((function(){for(var e=function(e){setTimeout((function(){o[e].style.backgroundColor="lime"}),e*t)},n=0;n<o.length;n++)e(n)}),t*e.length)},o=0;o<e.length;o++)a(o)}},{key:"render",value:function(){var e=this,t=this.state.array;return o.a.createElement("div",null,o.a.createElement(y.a,null,o.a.createElement("title",null,"Sorting Visualizer")),o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{className:"action",onClick:function(){e.setColour(),e.generateArray(C)}},"generate array"),o.a.createElement("button",{className:"action",onClick:function(){var t=document.getElementById("Algs");switch(t.options[t.selectedIndex].value){case"Bubble Sort":e.setColour(),e.bubbleSort();break;case"Quick Sort":e.setColour(),e.quickSort();break;case"Merge Sort":e.setColour(),e.mergeSort();break;default:alert("select a different algorithm")}}},"visualize sorting"),o.a.createElement("div",{className:"slider"},o.a.createElement("div",{className:"sliderText"},"Number of array elements/sorting speed:"),o.a.createElement(v.a,{min:3,step:1,max:450,disabled:N,onChange:function(t,n){!0!==N&&(S=n<=30?"black":"transparent",E=(C=n)<20?70:Math.floor(1/C*1e3),e.generateArray(C),e.setColour())},defaultValue:100,valueLabelDisplay:"auto","aria-labelledby":"non-linear-slider"}))),o.a.createElement("div",{className:"selector"},o.a.createElement("p",null,"Choose an Algorithm:"),o.a.createElement("select",{id:"Algs",onChange:function(){e.generateArray(C),e.setColour()}},o.a.createElement("option",{value:"Bubble Sort"},"Bubble Sort"),o.a.createElement("option",{value:"Quick Sort"},"Quick Sort"),o.a.createElement("option",{value:"Merge Sort"},"Merge Sort"))),o.a.createElement("div",{className:"container"},t.map((function(e,t){return o.a.createElement("div",{className:"bar",key:t,style:{height:"".concat(e,"px"),width:"".concat(E,"px"),color:"".concat(S),backgroundColor:"".concat("pink")}},e)}))))}}]),n}(o.a.Component),T={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};k.a.setAppElement("#root");var M=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],r=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement(k.a,{isOpen:n,onRequestClose:function(){return r(!1)},style:T},o.a.createElement("h2",{className:"modalheader"},"Welcome to My Sorting Visualizer!"),o.a.createElement("p",{className:"modalheader"},"Select a sorting algorithm and array size from the drop down menu and slider at the top of the page.",o.a.createElement("br",null)," Click generate array to generate new array elements or the visualize button to visualize sorting!"),o.a.createElement("div",{className:"modalheader"},o.a.createElement("button",{className:"action",onClick:function(){return r(!1)}},"Click To Close Instructions"))),o.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.096ed576.chunk.js.map