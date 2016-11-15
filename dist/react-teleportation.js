!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("styled-components"),require("lodash"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","styled-components","lodash","react-dom"],t):"object"==typeof exports?exports["react-teleportation"]=t(require("react"),require("styled-components"),require("lodash"),require("react-dom")):e["react-teleportation"]=t(e.react,e["styled-components"],e.lodash,e["react-dom"])}(this,function(e,t,n,o){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var a=n(5);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var u=n(7);Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})});var d=n(8);Object.keys(d).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}})});var l=n(2),c=o(l),p=n(9),f=o(p),s=n(6),h={position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:10},g=function b(){var e=this;r(this,b),this.i=(0,s.uniqueId)("teleport"),this.m=document.body.appendChild(document.createElement("m")),this.M=function(){return c["default"].createElement("x",{style:h},c["default"].cloneElement(e.el,{clear:e.clear}))},this.init=function(t){e.el=t,e._render()},this.clear=function(){(0,s.defer)(f["default"].unmountComponentAtNode,e.m)},this._render=function(){f["default"].render(c["default"].createElement(e.M,null),e.m)}};t["default"]=new g},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Modal=void 0;var r=n(2),i=o(r),a=n(3),u={div:{width:500,height:300,background:"white",margin:"20vh auto",boxSizing:"border-box",padding:"20px",fontFamily:"Noto, Roboto, sans-serif"}},d=t.Modal=function(e){var t=e.children,n=e.clear,o="modal",r=function(e){e.target.id===o&&n()};return i["default"].createElement(a.Background,{opacity:.1,id:o,onClick:r},i["default"].createElement("div",{style:u.div},t))};d.propTypes={children:i["default"].PropTypes.node,clear:i["default"].PropTypes.func}},function(t,n){t.exports=e},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.Img=t.Background=void 0;var i=r(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, ",");\n"],["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, ",");\n"]),a=r(["\n  position: absolute;\n  left: 20%;\n  top: 15%;\n  width: 60%;\n"],["\n  position: absolute;\n  left: 20%;\n  top: 15%;\n  width: 60%;\n"]),u=n(4),d=o(u);t.Background=d["default"].div(i,function(e){return e.opacity}),t.Img=d["default"].img(a)},function(e,n){e.exports=t},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0}),t.Alert=void 0;var i=r(["\n  display: table;\n  max-width: 400px;\n  min-width: 350px;\n  margin: 25vh auto;\n  background-color: white;\n  padding-bottom: 8px;\n  box-shadow:  0 5px 20px rgba(0,0,0,0.1);\n  &:hover {\n    box-shadow:  0 5px 20px rgba(0,0,0,0.15);\n  }\n"],["\n  display: table;\n  max-width: 400px;\n  min-width: 350px;\n  margin: 25vh auto;\n  background-color: white;\n  padding-bottom: 8px;\n  box-shadow:  0 5px 20px rgba(0,0,0,0.1);\n  &:hover {\n    box-shadow:  0 5px 20px rgba(0,0,0,0.15);\n  }\n"]),a=r(["\n  font-size: 20px;\n  font-weight: 600;\n  padding: 24px 24px 0;\n  margin: 0;\n  font-family: ",";\n"],["\n  font-size: 20px;\n  font-weight: 600;\n  padding: 24px 24px 0;\n  margin: 0;\n  font-family: ",";\n"]),u=r(["\n  font-size: 14px;\n  padding: 24px;\n  margin: 0;\n  font-family: ",";\n"],["\n  font-size: 14px;\n  padding: 24px;\n  margin: 0;\n  font-family: ",";\n"]),d=r(["\n  background-color: transparent;\n  cursor: pointer;\n  color: #2196F3;\n  font-size: 14px;\n  height: 45px;\n  box-sizing: border-box;\n  font-weight: 500;\n  padding: 12px 10px;\n  float: right;\n  text-transform: uppercase;\n  outline: none;\n  border: none;\n  user-select: none;\n  &:hover {\n    background-color: #eee;\n  }\n"],["\n  background-color: transparent;\n  cursor: pointer;\n  color: #2196F3;\n  font-size: 14px;\n  height: 45px;\n  box-sizing: border-box;\n  font-weight: 500;\n  padding: 12px 10px;\n  float: right;\n  text-transform: uppercase;\n  outline: none;\n  border: none;\n  user-select: none;\n  &:hover {\n    background-color: #eee;\n  }\n"]),l=n(2),c=o(l),p=n(6),f=n(4),s=o(f),h=n(3),g="Noto, Roboto, sans-serif",b=s["default"].div(i),x=s["default"].h1(a,g),y=s["default"].p(u,g),m=s["default"].button(d),v=t.Alert=function(e){var t=e.title,n=e.description,o=e.right,r=e.left;return c["default"].createElement(h.Background,{opacity:.1},c["default"].createElement(b,null,c["default"].createElement(x,null,(0,p.capitalize)(t)),c["default"].createElement(y,null,(0,p.capitalize)(n)),c["default"].createElement("footer",{style:{padding:8}},c["default"].createElement(m,{onClick:o.action},o.title),c["default"].createElement(m,{onClick:r.action},r.title))))};v.propTypes={title:c["default"].PropTypes.string.isRequired,description:c["default"].PropTypes.string.isRequired,right:c["default"].PropTypes.shape({title:c["default"].PropTypes.string.isRequired,action:c["default"].PropTypes.func.isRequired}),left:c["default"].PropTypes.shape({title:c["default"].PropTypes.string.isRequired,action:c["default"].PropTypes.func.isRequired})}},function(e,t){e.exports=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Lightbox=void 0;var r=n(2),i=o(r),a=n(3),u=t.Lightbox=function(e){var t=e.clear,n=e.url,o="lightbox",r=function(e){e.target.id===o&&t()};return i["default"].createElement(a.Background,{opacity:.9,onClick:r,id:o},i["default"].createElement(a.Img,{src:n,alt:o}))};u.propTypes={children:i["default"].PropTypes.node},u.propTypes={clear:i["default"].PropTypes.func,url:i["default"].PropTypes.string}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Tutorial=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},d=n(2),l=o(d),c=n(3),p={modal:{position:"fixed",width:200,height:70,background:"white",padding:20,boxSizing:"border-box",fontFamily:"sans-serif"},arrow:{background:"white",width:12,height:12,position:"absolute",top:-6,transform:"rotate(45deg)"}},f=t.Tutorial=function(e){function t(){var e,n,o,a;r(this,t);for(var d=arguments.length,f=Array(d),s=0;s<d;s++)f[s]=arguments[s];return n=o=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),o.state={id:"tutorial",index:0,text:"",position:{top:0,left:0}},o.id="tutorial",o.next=function(){var e=o.state.index,t=e<o.props.children.length;if(t){var n=o.props.children[o.state.index].id,r=document.getElementById(n),i=r.getBoundingClientRect(),a=i.top,u=i.left,d=i.height,l={top:a+d+12,left:u},c=o.props.children[e].text;o.setState({position:l,text:c,index:o.state.index+1})}else o.props.clear()},o.componentDidMount=o.next,o.render=function(){return l["default"].createElement(c.Background,{opacity:.1,id:o.id,onClick:o.next},l["default"].createElement("div",{style:u({},p.modal,o.state.position)},l["default"].createElement("div",{style:p.arrow}),o.state.text))},a=n,i(o,a)}return a(t,e),t}(l["default"].Component);f.propTypes={clear:l["default"].PropTypes.func,on:l["default"].PropTypes.string,children:l["default"].PropTypes.arrayOf(l["default"].PropTypes.shape({id:l["default"].PropTypes.string,text:l["default"].PropTypes.string}))}},function(e,t){e.exports=o}])});