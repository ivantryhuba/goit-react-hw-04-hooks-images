(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{30:function(e,n,t){},74:function(e,n,t){"use strict";t.r(n);var a,o,r,i,c,s,p,l,d,h,g,u,b,x=t(0),m=t.n(x),f=t(6),j=t.n(f),O=(t(30),t(13)),v=t(7),y=t(8),w=t(10),k=t(9),C=(t(31),t(11)),S=t(22),M=t.n(S),I=function(e){var n=e.searchQuery,t=e.page,a=void 0===t?1:t;return M.a.get("https://pixabay.com/api/?key=21947643-3ad5511e98ce1ab16d6eede2a&q=".concat(n,"&image_type=photo&page=").concat(a,"&per_page=12&orientation=horizontal")).then((function(e){return e.data.hits}))},L=t(2),Q=t(3),z=Q.a.header(a||(a=Object(L.a)(["\n    top: 0;\n    left: 0;\n    position: sticky;\n    z-index: 1100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 64px;\n    padding-right: 24px;\n    padding-left: 24px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    color: #fff;\n    background-color: #3f51b5;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n        0px 4px 5px 0px rgba(0, 0, 0, 0.14),\n        0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),F=Q.a.form(o||(o=Object(L.a)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n"]))),B=Q.a.button(r||(r=Object(L.a)(["\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n\n    &:hover {\n        opacity: 1;\n    }\n"]))),U=Q.a.span(i||(i=Object(L.a)(["\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n"]))),D=Q.a.input(c||(c=Object(L.a)(["\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n\n    &::placeholder {\n        font: inherit;\n        font-size: 18px;\n    }\n"]))),E=t(1),P=function(e){Object(w.a)(t,e);var n=Object(k.a)(t);function t(){var e;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={searchQuery:""},e.handleInputValue=function(n){var t=n.currentTarget.value;e.setState({searchQuery:t.toLowerCase()})},e.handleSubmit=function(n){n.preventDefault(),""!==e.state.searchQuery.trim()&&(e.props.onSubmit(e.state.searchQuery),e.resetForm())},e.resetForm=function(){e.setState({searchQuery:""})},e}return Object(y.a)(t,[{key:"render",value:function(){return Object(E.jsx)(z,{children:Object(E.jsxs)(F,{onSubmit:this.handleSubmit,children:[Object(E.jsx)(B,{type:"submit",children:Object(E.jsx)(U,{children:"Search"})}),Object(E.jsx)(D,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.handleInputValue})]})})}}]),t}(m.a.Component),H=t(24),R=t.n(H),A=Q.a.div(s||(s=Object(L.a)(["\n    margin-left: auto;\n    margin-right: auto;\n"]))),K=function(){return Object(E.jsx)(A,{children:Object(E.jsx)(R.a,{type:"Bars",color:"#00BFFF",height:200,width:200})})},T=Q.a.li(p||(p=Object(L.a)(["\n    border-radius: 2px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n        0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n        0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),q=Q.a.img(l||(l=Object(L.a)(["\n    width: 100%;\n    height: 260px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n        transform: scale(1.03);\n        cursor: zoom-in;\n    }\n"]))),J=function(e){var n=e.imageUrl,t=e.tags,a=e.largeImageURL,o=e.openModal;return Object(E.jsx)(T,{children:Object(E.jsx)(q,{src:n,alt:t,onClick:function(){return o(a)}})})},V=Q.a.ul(d||(d=Object(L.a)(["\n    display: grid;\n    max-width: calc(100vw - 48px);\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    grid-gap: 16px;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n"]))),W=function(e){var n=e.images,t=e.openModal;return Object(E.jsx)(V,{children:n.map((function(e){var n=e.id,a=e.webformatURL,o=e.largeImageURL,r=e.tags;return Object(E.jsx)(J,{imageUrl:a,tags:r,largeImageURL:o,openModal:t},n)}))})},_=Q.a.button(h||(h=Object(L.a)(["\n    padding: 8px 16px;\n    border-radius: 2px;\n    background-color: #3f51b5;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    text-align: center;\n    display: inline-block;\n    color: #fff;\n    border: 0;\n    text-decoration: none;\n    cursor: pointer;\n    font-family: inherit;\n    font-size: 18px;\n    line-height: 24px;\n    font-style: normal;\n    font-weight: 500;\n    min-width: 180px;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n    &:hover,\n    &:focus {\n        background-color: #303f9f;\n    }\n"]))),G=function(e){var n=e.onClick;return Object(E.jsx)(_,{type:"button",onClick:n,children:"Load more"})},N=Q.a.div(g||(g=Object(L.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 1200;\n"]))),X=Q.a.div(u||(u=Object(L.a)(["\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n"]))),Y=document.querySelector("#modal-root"),Z=function(e){Object(w.a)(t,e);var n=Object(k.a)(t);function t(){var e;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).handleKeyDown=function(n){"Escape"===n.code&&e.props.onClose()},e.handleBackdropClick=function(n){n.currentTarget===n.target&&e.props.onClose()},e}return Object(y.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.children,n=this.handleBackdropClick;return Object(f.createPortal)(Object(E.jsx)(N,{onClick:n,children:Object(E.jsx)(X,{children:e})}),Y)}}]),t}(m.a.Component),$=Q.a.div(b||(b=Object(L.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-gap: 16px;\n    padding-bottom: 24px;\n"]))),ee=function(e){Object(w.a)(t,e);var n=Object(k.a)(t);function t(){var e;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={page:1,images:[],searchQuery:"",showModal:!1,largeImage:"",isLoading:!1,error:null},e.handleFormSubmit=function(n){e.setState({searchQuery:n.trim(),page:1,images:[],isLoading:!0,error:null})},e.fetchImages=function(){var n=e.state,t=n.page,a={searchQuery:n.searchQuery,page:t};e.setState({isLoading:!0}),I(a).then((function(n){e.setState((function(e){return{page:e.page+1,images:[].concat(Object(O.a)(e.images),Object(O.a)(n)),isLoading:!1}})),n.length>0&&C.b.success("We have a picture for you!",{position:"bottom-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),0===n.length&&C.b.info("Picture is not found",{position:"bottom-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(n){e.setState({error:n}),C.b.error("Error!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))},e.openModal=function(n){e.setState({showModal:!0,largeImage:n})},e.toggleModal=function(){e.setState({largeImage:"",showModal:!1})},e}return Object(y.a)(t,[{key:"componentDidUpdate",value:function(e,n){n.searchQuery!==this.state.searchQuery&&this.fetchImages(),n.page!==this.state.page&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,n=e.images,t=e.showModal,a=e.largeImage,o=e.isLoading;return Object(E.jsxs)($,{children:[Object(E.jsx)(P,{onSubmit:this.handleFormSubmit}),Object(E.jsxs)(E.Fragment,{children:[!0===o&&Object(E.jsx)(K,{}),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(W,{images:n,openModal:this.openModal}),n.length>0&&Object(E.jsx)(G,{onClick:this.fetchImages})]})]}),t&&Object(E.jsx)(Z,{onClose:this.toggleModal,children:Object(E.jsx)("img",{src:a,alt:""})}),Object(E.jsx)(C.a,{})]})}}]),t}(m.a.Component);j.a.render(Object(E.jsx)(m.a.StrictMode,{children:Object(E.jsx)(ee,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.0d6457bf.chunk.js.map