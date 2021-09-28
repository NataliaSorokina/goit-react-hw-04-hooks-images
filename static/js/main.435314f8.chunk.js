(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{37:function(e,n,t){},83:function(e,n,t){"use strict";t.r(n);var a,r=t(0),o=t.n(r),i=t(9),c=t.n(i),s=(t(36),t(37),t(7)),p=t.n(s),l=t(15),u=t(11),d=t(24),g=t(25),h=t(30),b=t(28),x=t(6),f=(t(39),t(3)),m=t(4),j=m.a.div(a||(a=Object(f.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),v=t(12),y=t.n(v),O=t(2),w=t.n(O);y.a.defaults.baseURL="https://pixabay.com/api/",y.a.defaults.params={key:"22624965-297697bc75a5089bebc4e5f11",image_type:"photo",orientation:"horizontal"};var k=function(){var e=Object(u.a)(p.a.mark((function e(n,t,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("",{params:{q:n,page:t,per_page:a}}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}();k.propTypes={searchQuery:w.a.array,page:w.a.number,per_page:w.a.number};var S,C,I,F,T,z,L=t(29),E=m.a.header(S||(S=Object(f.a)(["\n  display: flex;\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  justify-content: center;\n  align-items: center;\n  min-height: 60px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  color: #fff;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),M=m.a.form(C||(C=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  &:hover {\n    opacity: 1;\n  }\n"]))),_=m.a.button(I||(I=Object(f.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),P=m.a.span(F||(F=Object(f.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),Q=m.a.input(T||(T=Object(f.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),D=t(1);function U(e){var n=e.onFormSubmit,t=Object(r.useState)(""),a=Object(L.a)(t,2),o=a[0],i=a[1];return Object(D.jsx)(E,{children:Object(D.jsxs)(M,{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(n(o),i("")):x.b.error("Enter search query!")},children:[Object(D.jsx)(_,{type:"submit",children:Object(D.jsx)(P,{children:"Search"})}),Object(D.jsx)(Q,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){i(e.currentTarget.value.toLowerCase())}})]})})}var q,B,R=m.a.ul(z||(z=Object(f.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),H=m.a.li(q||(q=Object(f.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),J=m.a.img(B||(B=Object(f.a)(["\n  width: 100%;\n  height: 190px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"])));var A=function(e){var n=e.onSelect,t=e.image,a=t.webformatURL,r=t.tags;return Object(D.jsx)(H,{onClick:n,children:Object(D.jsx)(J,{src:a,alt:r})})};var W,G=function(e){var n=e.images,t=e.onSelect;return Object(D.jsx)(R,{children:n.map((function(e,n){return Object(D.jsx)(A,{image:e,onSelect:function(){return t(e)}},n)}))})},K=m.a.button(W||(W=Object(f.a)(["\n  display: block;\n  min-width: 180px;\n  margin: 5px auto;\n  padding: 8px 16px;\n  border: 0;\n  border-radius: 5px;\n  cursor: pointer;\n  color: #fff;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 24px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"])));var N,V=function(e){var n=e.onClick;return Object(D.jsx)(K,{type:"button",onClick:n,children:"Load more"})},X=t(27),Y=t.n(X),Z=m.a.div(N||(N=Object(f.a)(["\n  position: fixed;\n  top: 97%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"])));var $,ee,ne=function(){return Object(D.jsx)(Z,{children:Object(D.jsx)(Y.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3})})},te=m.a.div($||($=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),ae=m.a.div(ee||(ee=Object(f.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"])));function re(e){var n=e.onClose,t=e.fullImage;Object(r.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}));var a=function(e){"Escape"===e.code&&n()};return Object(D.jsx)(te,{onClick:function(e){e.currentTarget===e.target&&n()},children:Object(D.jsx)(ae,{children:Object(D.jsx)("img",{src:t.largeImageURL,alt:t.tags})})})}te.propTypes={fullImage:w.a.object,onClose:w.a.func};var oe=function(e){Object(h.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(d.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={searchQuery:"",page:1,per_page:12,totalImages:0,images:[],searchStatus:"idle",largeImage:"",showModal:!1},e.handleFormSubmit=function(n){e.setState({searchQuery:n,page:1,images:[]})},e.handlePageIncrement=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleModalToggle=function(n){e.setState((function(e){var t=e.showModal;return{largeImage:t?"":n,showModal:!t}}))},e.handleScroll=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(g.a)(t,[{key:"componentDidUpdate",value:function(){var e=Object(u.a)(p.a.mark((function e(n,t){var a,r,o,i,c,s,u,d=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.state,r=a.searchQuery,o=a.page,i=a.per_page,!(t.searchQuery!==r||t.page!==o)){e.next=22;break}return e.prev=3,this.setState({searchStatus:"pending"}),e.next=7,k(r,o,i);case 7:if(c=e.sent,s=c.hits,u=c.totalHits,0!==s.length){e.next=12;break}return x.b.error("Sorry, there are no images matching your search query '".concat(r,"'. Please try again.")),e.abrupt("return");case 12:s.length>0&&1===o&&Object(x.b)("".concat(u," images found.")),u<o*i&&Object(x.b)("Sorry, but you have reached the end of search results."),this.setState((function(e){return{searchStatus:"resolved",images:[].concat(Object(l.a)(e.images),Object(l.a)(s)),totalImages:u}}),(function(){d.handleScroll()})),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(3),this.setState({searchStatus:"rejected"}),x.b.error("Error. We are sorry, but something went wrong."),console.log(e.t0);case 22:case"end":return e.stop()}}),e,this,[[3,17]])})));return function(n,t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.images,t=e.searchStatus,a=e.per_page,r=e.totalImages,o=e.showModal,i=e.largeImage,c=r>a&&"pending"!==t;return Object(D.jsxs)(j,{children:[Object(D.jsx)(U,{onFormSubmit:this.handleFormSubmit}),"pending"===t&&Object(D.jsx)(ne,{}),n.length>0&&Object(D.jsx)(G,{images:n,onSelect:this.handleModalToggle}),c&&Object(D.jsx)(V,{onClick:this.handlePageIncrement}),o&&Object(D.jsx)(re,{fullImage:i,onClose:this.handleModalToggle}),Object(D.jsx)(x.a,{autoClose:3e3})]})}}]),t}(o.a.Component),ie=oe,ce=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,84)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),o(e),i(e)}))};c.a.render(Object(D.jsx)(o.a.StrictMode,{children:Object(D.jsx)(ie,{})}),document.getElementById("root")),ce()}},[[83,1,2]]]);
//# sourceMappingURL=main.435314f8.chunk.js.map