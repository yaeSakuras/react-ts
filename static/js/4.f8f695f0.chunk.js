(this["webpackJsonpreact-ts"]=this["webpackJsonpreact-ts"]||[]).push([[4],{242:function(t,n,e){"use strict";e.r(n);var r=e(28),o=e(29),u=e(30),c=e(33),i=e(31),a=e(34),f=e(0),l=e.n(f),s=function(t){function n(){var t,e;Object(o.a)(this,n);for(var r=arguments.length,u=new Array(r),a=0;a<r;a++)u[a]=arguments[a];return(e=Object(c.a)(this,(t=Object(i.a)(n)).call.apply(t,[this].concat(u)))).state={count:0,prevCount:-1},e.setCount=function(){e.setState({count:e.state.count+1})},e}return Object(a.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("button",{onClick:this.setCount},"Child Counter")),"Child: count is ",this.state.count)}}],[{key:"getDerivedStateFromProps",value:function(t,n){return t.number!==n.prevCount?{count:t.number,prevCount:t.number}:null}}]),n}(f.Component);n.default=function(){var t=Object(f.useState)(0),n=Object(r.a)(t,2),e=n[0],o=n[1];return l.a.createElement("div",null,l.a.createElement("button",{onClick:function(){return o(e+1)}},"Counter"),l.a.createElement(s,{number:e}))}},28:function(t,n,e){"use strict";function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],r=!0,o=!1,u=void 0;try{for(var c,i=t[Symbol.iterator]();!(r=(c=i.next()).done)&&(e.push(c.value),!n||e.length!==n);r=!0);}catch(a){o=!0,u=a}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return e}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}e.d(n,"a",(function(){return r}))},29:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},30:function(t,n,e){"use strict";function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}e.d(n,"a",(function(){return o}))},31:function(t,n,e){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return r}))},33:function(t,n,e){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"===typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}function u(t,n){return!n||"object"!==o(n)&&"function"!==typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}e.d(n,"a",(function(){return u}))},34:function(t,n,e){"use strict";function r(t,n){return(r=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&r(t,n)}e.d(n,"a",(function(){return o}))}}]);
//# sourceMappingURL=4.f8f695f0.chunk.js.map