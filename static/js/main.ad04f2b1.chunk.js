(this.webpackJsonpminsk=this.webpackJsonpminsk||[]).push([[0],{107:function(e,n,t){},156:function(e,n,t){},157:function(e,n,t){},158:function(e,n,t){},159:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(2),i=t.n(r),a=t(29),o=t.n(a),s=(t(107),t(9)),l=t(101),d=t(12),j=t(13),u=t(15),b=t(14),h=t(78),x=i.a.createContext(),f=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(d.a)(this,t);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={products:[{_id:"1",title:"Nike Shoes 01",src:"./images/shoes/1/1.jpg",description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["red","black","crimson","teal"],count:1},{_id:"2",title:"Nike Shoes 02",src:"./images/shoes/4/4.png",description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["red","crimson","teal"],count:1},{_id:"3",title:"Nike Shoes 03",src:"./images/shoes/3/3.png",description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["lightblue","white","crimson","teal"],count:1},{_id:"4",title:"Nike Shoes 04",src:"./images/shoes/4/4.png",description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["orange","black","crimson","teal"],count:1},{_id:"5",title:"Nike Shoes 05",src:"./images/shoes/5/5.png",description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["orange","black","crimson","teal"],count:1},{_id:"6",title:"Nike Shoes 06",src:"./images/shoes/6/6.png",description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["orange","black","crimson","teal"],count:1},{_id:"7",title:"Nike Shoes 07",src:"./images/shoes/3/3.png",description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["orange","black","crimson","teal"],count:1},{_id:"8",title:"Nike Shoes 08",src:"./images/shoes/5/5.png",description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["orange","black","crimson","teal"],count:1}],cart:[],total:0},e.addCart=function(n){var t=e.state,c=t.products,r=t.cart,i=r.every((function(e){return e._id!==n}));if(console.log(i),i){var a=c.filter((function(e){return e._id===n}));console.log(a),e.setState({cart:[].concat(Object(h.a)(r),Object(h.a)(a))})}else alert("The product has been added to cart")},e.reduction=function(n){var t=e.state.cart;t.forEach((function(e){e._id===n&&(1===e.count?e.count=1:e.count-=1)})),e.setState({cart:t}),e.getTotal()},e.increase=function(n){var t=e.state.cart;t.forEach((function(e){e._id===n&&(e.count+=1)})),e.setState({cart:t}),e.getTotal()},e.removeProduct=function(n){if(window.confirm("Do you want to delete this product?")){var t=e.state.cart;t.forEach((function(e,c){e._id===n&&t.splice(c,1)})),e.setState({cart:t}),e.getTotal()}},e.getTotal=function(){var n=e.state.cart.reduce((function(e,n){return e+n.price2*n.count}),0);e.setState({total:n})},e}return Object(j.a)(t,[{key:"componentDidUpdate",value:function(){localStorage.setItem("dataCart",JSON.stringify(this.state.cart)),localStorage.setItem("dataTotal",JSON.stringify(this.state.total))}},{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("dataCart"));null!==e&&this.setState({cart:e});var n=JSON.parse(localStorage.getItem("dataTotal"));null!==n&&this.setState({total:n})}},{key:"render",value:function(){var e=this.state,n=e.products,t=e.cart,r=e.total,i=this.addCart,a=this.reduction,o=this.increase,s=this.removeProduct,l=this.getTotal;return Object(c.jsx)(x.Provider,{value:{products:n,addCart:i,cart:t,reduction:a,increase:o,removeProduct:s,total:r,getTotal:l},children:this.props.children})}}]),t}(r.Component),p=(t(80),t.p+"static/media/video1.a2703484.mp4"),m=t(4),O=t(5),g=t(74);function v(){var e=Object(m.a)(["\n    margin-left: 8px;\n    font-size: 20px;\n"]);return v=function(){return e},e}function y(){var e=Object(m.a)(["\n    margin-left: 8px;\n    font-size: 20px;\n"]);return y=function(){return e},e}function N(){var e=Object(m.a)(["\n    margin-top: 32px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    justify-content: flex-start;\n    border-radius: 50px;\n    width: 50%;\n    white-space: nowrap;\n    padding: 10px 22px;\n    \n    font-size: 16px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n\n    background: #01bf71;\n    color: #010606;\n    \n    text-decoration: none;\n\n    &:hover {\n        transition: all 0.2s ease-in-out;\n        background: #fff;\n    }\n"]);return N=function(){return e},e}function k(){var e=Object(m.a)(["\n    margin-top: 24px;\n    color: #fff;\n    font-size: 24px;\n    text-align: center;\n    max-width: 600px;\n\n    @media screen and (max-width: 768px) {\n        font-size: 24px;\n    }\n\n    @media screen and (max-width: 480px) {\n        font-size: 18px;\n    }\n"]);return k=function(){return e},e}function w(){var e=Object(m.a)(["\n    color: #fff;\n    font-size: 48px;\n    text-align: center;\n\n    @media screen and (max-width: 768px) {\n        font-size: 40px;\n    }\n\n    @media screen and (max-width: 480px) {\n        font-size: 32px;\n    }\n"]);return w=function(){return e},e}function C(){var e=Object(m.a)(["\n    z-index: 3;\n    max-width: 1200px;\n    position: absolute;\n    padding: 8px 24px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);return C=function(){return e},e}function _(){var e=Object(m.a)(["\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n    object-fit: cover;\n    background: #232a34\n"]);return _=function(){return e},e}function z(){var e=Object(m.a)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n"]);return z=function(){return e},e}function S(){var e=Object(m.a)(["\n    background: #0c0c0c;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 30px;\n    height: 500px;\n    position: relative;\n    z-index: 1;\n\n    :before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: linear-gradient(\n            180deg, \n            rgba(0,0,0,0,2) 0%,\n            rgba(0,0,0,0.6) 100%), \n        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);\n        z-index: 2;\n    }\n"]);return S=function(){return e},e}var T=O.a.div(S()),F=O.a.div(z()),L=O.a.video(_()),E=O.a.div(C()),D=O.a.h1(w()),q=O.a.p(k()),M=(O.a.div(N()),Object(O.a)(g.a)(y()),Object(O.a)(g.b)(v()),function(){return Object(c.jsxs)(T,{id:"home",children:[Object(c.jsx)(F,{children:Object(c.jsx)(L,{autoPlay:!0,loop:!0,muted:!0,src:p,type:"video1/mp4"})}),Object(c.jsxs)(E,{children:[Object(c.jsx)(D,{children:"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0432\u044b\u0431\u043e\u0440 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0439 \u043e\u0431\u0443\u0432\u0438 \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0441\u043b\u0443\u0447\u0430\u0439"}),Object(c.jsx)(q,{children:"\u0412 \u041d\u0410\u0428\u0415\u041c \u041e\u041d\u041b\u0410\u0419\u041d \u041c\u0410\u0413\u0410\u0417\u0418\u041d\u0415"})]})]})}),A=t(35),P=t(23);function I(){var e=Object(m.a)(["\n    color: #fff;\n    font-size: 24px;\n"]);return I=function(){return e},e}function J(){var e=Object(m.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 240px;\n"]);return J=function(){return e},e}function R(){var e=Object(m.a)(["\n    color: #fff;\n    margin-bottom: 16px;\n    display: flex;\n    justify-content: center;\n"]);return R=function(){return e},e}function $(){var e=Object(m.a)(["\n    color: #fff;\n    justify-self: start;\n    cursor: pointer;\n    text-decoration: none;\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    margin-bottom: 16px;\n    font-weight: bold;\n\n    &:hover {\n        color: #01bf71;\n        transition: 0.3s ease-out;\n    }\n"]);return $=function(){return e},e}function Y(){var e=Object(m.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-width: 1100px;\n    margin: 40px auto 0 auto;\n\n    @media screen and (max-width: 820px) {\n        flex-direction: column;\n    }\n"]);return Y=function(){return e},e}function B(){var e=Object(m.a)(["\n    max-width: 1000px;\n    width: 100%\n"]);return B=function(){return e},e}function U(){var e=Object(m.a)(["\n    color: #fff;\n    text-decoration: none;\n    margin-bottom: 0.5rem;\n    font-size: 14px;\n\n    &:hover {\n        color: #01bf71;\n        transition: 0.3s ease-out;\n    }\n"]);return U=function(){return e},e}function Z(){var e=Object(m.a)(["\n    font-size: 14px;\n    margin-bottom: 16px;\n"]);return Z=function(){return e},e}function W(){var e=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    margin: 16px;\n    text-align: left;\n    width: 160px;\n    box-sizing: border-box;\n    color: #fff;\n\n    @media screen and (max-width: 420px) {\n        margin: 0;\n        padding: 10px;\n        width: 100%;\n    }\n"]);return W=function(){return e},e}function G(){var e=Object(m.a)(["\n    display: flex;\n\n    @media screen and (max-width: 820px) {\n        flex-direction: column;\n    }\n"]);return G=function(){return e},e}function H(){var e=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n\n    @media screen and (max-width: 820px) {\n        padding-top: 32px;\n    }\n"]);return H=function(){return e},e}function K(){var e=Object(m.a)(["\n    padding: 0px 10px 10px 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-width: 1100px;\n    margin: 0 auto;\n"]);return K=function(){return e},e}function X(){var e=Object(m.a)(["\n    background-color: #101522;\n    margin-top: 60px;\n"]);return X=function(){return e},e}var Q=O.a.footer(X()),V=O.a.div(K()),ee=O.a.div(H()),ne=O.a.div(G()),te=O.a.div(W()),ce=O.a.h1(Z()),re=Object(O.a)(s.b)(U()),ie=O.a.section(B()),ae=O.a.div(Y()),oe=Object(O.a)(s.b)($()),se=O.a.small(R()),le=O.a.div(J()),de=O.a.a(I()),je=t(36),ue=function(){return Object(c.jsx)(Q,{children:Object(c.jsxs)(V,{children:[Object(c.jsx)("div",{children:Object(c.jsx)(oe,{to:"/",onClick:function(){A.animateScroll.scrollToTop()},children:Object(c.jsx)(je.a,{})})}),Object(c.jsxs)(ee,{children:[Object(c.jsxs)(ne,{children:[Object(c.jsxs)(te,{children:[Object(c.jsx)(ce,{children:"\u041e \u043d\u0430\u0441"}),Object(c.jsx)(re,{to:"/",children:"\u041e \u043d\u0430\u0441"})]}),Object(c.jsxs)(te,{children:[Object(c.jsx)(ce,{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(c.jsx)(re,{to:"/",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(c.jsx)(re,{to:"/",children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"}),Object(c.jsx)(re,{to:"/",children:"\u0421\u043f\u043e\u043d\u0441\u043e\u0440\u0441\u0442\u0432\u043e"})]})]}),Object(c.jsx)(ne,{children:Object(c.jsxs)(te,{children:[Object(c.jsx)(ce,{children:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"}),Object(c.jsx)(re,{to:"/",children:"Instagram"}),Object(c.jsx)(re,{to:"/",children:"Facebook"}),Object(c.jsx)(re,{to:"/",children:"Youtube"})]})})]}),Object(c.jsx)(ie,{children:Object(c.jsxs)(ae,{children:[Object(c.jsxs)(se,{children:["\u24d2 ",(new Date).getFullYear()," All rights reserved."]}),Object(c.jsxs)(le,{children:[Object(c.jsx)(de,{href:"/",target:"_blank","area-labels":"Facebook",children:Object(c.jsx)(P.b,{})}),Object(c.jsx)(de,{href:"/",target:"_blank","area-labels":"Instagram",children:Object(c.jsx)(P.c,{})}),Object(c.jsx)(de,{href:"/",target:"_blank","area-labels":"Youtube",children:Object(c.jsx)(P.g,{})}),Object(c.jsx)(de,{href:"/",target:"_blank","area-labels":"Telegram",children:Object(c.jsx)(P.e,{})}),Object(c.jsx)(de,{href:"/",target:"_blank","area-labels":"Linkedin",children:Object(c.jsx)(P.d,{})})]})]})})]})})},be=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var e=this,n=this.context.products,t=this.context.cart;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"news",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"}),Object(c.jsx)("div",{id:"product",children:n.map((function(n){return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)(s.b,{to:"/product/".concat(n._id),children:Object(c.jsx)("img",{src:n.src,alt:""})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h3",{children:Object(c.jsx)(s.b,{to:"/product/".concat(n._id),children:n.title})}),Object(c.jsx)("div",{className:"pricelinethrough",children:Object(c.jsxs)("span",{children:[n.price," \u0440\u0443\u0431 "]})}),Object(c.jsxs)("p",{children:[n.price2," \u0440\u0443\u0431 "]}),Object(c.jsx)("button",{onClick:function(){return e.context.addCart(n._id)},cart:t.length,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]},n._id)}))})]})}}]),t}(r.Component);be.contextType=x;var he=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var e=this,n=this.context.products,t=this.context.cart;return Object(c.jsxs)("div",{children:[Object(c.jsx)(M,{}),Object(c.jsx)("h1",{className:"news",children:"\u041d\u043e\u0432\u0438\u043d\u043a\u0438"}),Object(c.jsx)("div",{id:"product",children:n.map((function(n){return Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"discount",children:Object(c.jsx)("span",{children:"-15%"})}),Object(c.jsx)(s.b,{to:"/product/".concat(n._id),children:Object(c.jsx)("img",{src:n.src,alt:""})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h3",{children:Object(c.jsx)(s.b,{to:"/product/".concat(n._id),children:n.title})}),Object(c.jsx)("div",{className:"pricelinethrough",children:Object(c.jsxs)("span",{children:[n.price," \u0440\u0443\u0431 "]})}),Object(c.jsxs)("p",{children:[n.price2," \u0440\u0443\u0431 "]}),Object(c.jsx)("div",{className:"products-button",children:Object(c.jsx)("button",{onClick:function(){return e.context.addCart(n._id)},cart:t.length,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})})]})]},n._id)}))}),Object(c.jsx)(be,{}),Object(c.jsx)(ue,{})]})}}]),t}(r.Component);he.contextType=x;t(64);var xe=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var e=this.props.colors;return Object(c.jsx)("div",{children:e.map((function(e,n){return Object(c.jsx)("button",{className:"buttonstyle",style:{background:e}},n)}))})}}]),t}(r.Component),fe=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(){var e;Object(d.a)(this,t);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={product:[]},e.getProduct=function(){if(e.props.match.params.id){var n=e.context.products.filter((function(n){return n._id===e.props.match.params.id}));console.log(n),e.setState({product:n})}},e}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.getProduct()}},{key:"render",value:function(){console.log(this.props.match.params.id),console.log(this.context.products);var e=this.state.product,n=this.context.addCart;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"wholeblock",children:e.map((function(e){return Object(c.jsxs)("div",{className:"details",children:[Object(c.jsx)("img",{src:e.src,alt:""}),Object(c.jsxs)("div",{className:"box",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:e.title}),Object(c.jsxs)("span",{className:"linethrough",children:["$",e.price]}),Object(c.jsxs)("span",{children:["$",e.price2]})]}),Object(c.jsx)(xe,{colors:e.colors}),Object(c.jsx)("p",{children:e.description}),Object(c.jsx)("p",{children:e.content}),Object(c.jsx)(s.b,{to:"/cart",className:"cart",onClick:function(){return n(e._id)},children:"Add to cart"})]})]},e._id)}))})})}}]),t}(r.Component);fe.contextType=x;var pe=t(161),me=t(162),Oe=t(163),ge=t(164),ve=t(165),ye=t(166),Ne=t(20),ke=function(e){return e&&e.length},we=function(e){return function(n){return!n||n.length<=e}},Ce=function(e){return function(n){return n&&n.length>=e}},_e=function(e){return!isNaN(Number(e))},ze=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},Se=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)(pe.a,{children:[Object(c.jsx)(me.a,{children:Object(c.jsx)(s.b,{to:"/home",children:"Home"})}),Object(c.jsx)(me.a,{active:!0,children:"Contact Us"}),Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("h3",{children:"Contact Us"}),Object(c.jsx)("hr",{})]})]})}),Object(c.jsxs)("div",{className:"row row-content",children:[Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("h3",{children:"Location Information"})}),Object(c.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(c.jsx)("h5",{children:"Our Address"}),Object(c.jsxs)("address",{children:["121, Clear Water Bay Road",Object(c.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(c.jsx)("br",{}),"FRANCE",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-phone"}),": +33 07 66 198985",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-fax"}),": +123456789",Object(c.jsx)("br",{}),Object(c.jsx)("i",{className:"fa fa-envelope"}),": ",Object(c.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(c.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(c.jsx)("h5",{children:"Map of our Location"})}),Object(c.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(c.jsxs)("div",{className:"btn-group",role:"group",children:[Object(c.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel: +77073156879",children:[Object(c.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(c.jsxs)("a",{role:"button",className:"btn btn-info",href:"skype: chingiz",children:[Object(c.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(c.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(c.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(c.jsxs)("div",{className:"row row-content",children:[Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("h3",{children:"Send us Your Feedback"})}),Object(c.jsx)("div",{className:"col-12 col-md-9",children:Object(c.jsxs)(Ne.Form,{model:"feedback",children:[Object(c.jsxs)(Oe.a,{className:"form-group",children:[Object(c.jsx)(ge.a,{htmlFor:".firstname",md:2,children:"First Name"}),Object(c.jsxs)(ve.a,{md:10,children:[Object(c.jsx)(Ne.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First name",className:"form-control",validators:{required:ke,minLength:Ce(3),maxLength:we(15)}}),Object(c.jsx)(Ne.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(c.jsxs)(Oe.a,{className:"form-group",children:[Object(c.jsx)(ge.a,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(c.jsxs)(ve.a,{md:10,children:[Object(c.jsx)(Ne.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last name",className:"form-control",validators:{required:ke,minLength:Ce(3),maxLength:we(15)}}),Object(c.jsx)(Ne.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(c.jsxs)(Oe.a,{className:"form-group",children:[Object(c.jsx)(ge.a,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(c.jsxs)(ve.a,{md:10,children:[Object(c.jsx)(Ne.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Num",className:"form-control",validators:{required:ke,minLength:Ce(3),maxLength:we(15),isNumber:_e}}),Object(c.jsx)(Ne.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(c.jsxs)(Oe.a,{className:"form-group",children:[Object(c.jsx)(ge.a,{htmlFor:"email",md:2,children:"Email"}),Object(c.jsxs)(ve.a,{md:10,children:[Object(c.jsx)(Ne.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:ke,validEmail:ze}}),Object(c.jsx)(Ne.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(c.jsxs)(Oe.a,{className:"form-group",children:[Object(c.jsx)(ve.a,{md:{size:6,offset:2},children:Object(c.jsx)("div",{className:"form-check",children:Object(c.jsxs)(ge.a,{check:!0,children:[Object(c.jsx)(Ne.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(c.jsx)("strong",{children:" May we contact you?"})]})})}),Object(c.jsx)(ve.a,{md:{size:3,offset:1},children:Object(c.jsxs)(Ne.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(c.jsx)("option",{children:"Tel."}),Object(c.jsx)("option",{children:"Email"})]})})]}),Object(c.jsxs)(Oe.a,{className:"form-group",children:[Object(c.jsx)(ge.a,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(c.jsx)(ve.a,{md:10,children:Object(c.jsx)(Ne.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(c.jsx)(Oe.a,{className:"form-group",children:Object(c.jsx)(ve.a,{md:{size:10,offset:2},children:Object(c.jsx)(ye.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),t}(r.Component),Te=t(10),Fe=(t(156),function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.context.getTotal()}},{key:"render",value:function(){var e=this.context,n=e.cart,t=e.increase,r=e.reduction,i=e.removeProduct,a=e.total;return 0===n.length?Object(c.jsx)("h2",{style:{textAlign:"center"},children:"No Product"}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"wholeblock",children:n.map((function(e){return Object(c.jsxs)("div",{className:"details",children:[Object(c.jsx)("div",{className:"delete-detail",children:Object(c.jsx)("div",{className:"delete",onClick:function(){return i(e._id)},children:"X"})}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:e.src,alt:""})}),Object(c.jsxs)("div",{className:"box",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("h2",{children:e.title}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("span",{className:"linethrough",children:["$",e.price*e.count]}),Object(c.jsxs)("span",{children:["$",e.price2*e.count]})]})]}),Object(c.jsx)(xe,{colors:e.colors}),Object(c.jsx)("p",{children:e.description}),Object(c.jsx)("p",{children:e.content}),Object(c.jsxs)("div",{className:"amount",children:[Object(c.jsx)("button",{className:"count",onClick:function(){return r(e._id)},children:" - "}),Object(c.jsx)("span",{children:e.count}),Object(c.jsx)("button",{className:"count",onClick:function(){return t(e._id)},children:" + "})]})]})]},e._id)}))}),Object(c.jsx)("div",{className:"total-block",children:Object(c.jsxs)("div",{className:"total",children:[Object(c.jsx)(s.b,{to:"/payment",children:"Payment"}),Object(c.jsxs)("h3",{children:["Total: $ ",a]})]})})]})}}]),t}(r.Component));Fe.contextType=x;t(157);var Le=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{children:"Login"})})}}]),t}(r.Component),Ee=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h2",{style:{textAlign:"center"},children:"Payment Component"})})}}]),t}(r.Component),De=function(e){Object(u.a)(t,e);var n=Object(b.a)(t);function t(){return Object(d.a)(this,t),n.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(c.jsxs)("section",{children:[Object(c.jsx)(Te.a,{path:"/",component:he,exact:!0}),Object(c.jsx)(Te.a,{path:"/product",component:he,exact:!0}),Object(c.jsx)(Te.a,{path:"/product/:id",component:fe,exact:!0}),Object(c.jsx)(Te.a,{path:"/contact",component:Se,exact:!0}),Object(c.jsx)(Te.a,{path:"/cart",component:Fe,exact:!0}),Object(c.jsx)(Te.a,{path:"/login",component:Le,exact:!0}),Object(c.jsx)(Te.a,{path:"/payment",component:Ee,exact:!0})]})}}]),t}(r.Component),qe=t(57);function Me(){var e=Object(m.a)(["\n    color: #fff;\n    height: 30px;\n    display: flex;\n    align: right;\n    cursor: pointer;\n    font-size: 25px;\n    transition: all 0.2s ease-in-out;\n\n    &:hover {\n        transition: all 0.2s ease-in-out;\n    }\n"]);return Me=function(){return e},e}function Ae(){var e=Object(m.a)(["\n    outline: none;\n    margin-left: 20px;\n    border: none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n\n    &:hover {\n        transition: all 0.2s ease-in-out;\n    }\n"]);return Ae=function(){return e},e}function Pe(){var e=Object(m.a)(["\n    display: flex;\n    height: 50px;\n    margin-right: 20px;\n    margin-top: 5px;\n    align-items: center;\n\n    @media screen and (max-width: 760px) {\n        display: none;\n    }\n"]);return Pe=function(){return e},e}function Ie(){var e=Object(m.a)(["\n    color: #fff;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    padding: 0 1rem;\n    height: 100%;\n    font-style: initial;\n    cursor: pointer;\n\n    &.active {\n        border-bottom: 3px solid #01bf71;\n    }\n"]);return Ie=function(){return e},e}function Je(){var e=Object(m.a)(["\n    height: 80px;\n"]);return Je=function(){return e},e}function Re(){var e=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    list-style: none;\n    text-align: center;\n    \n\n    @media screen and (max-width: 760px) {\n        display: none;\n}\n"]);return Re=function(){return e},e}function $e(){var e=Object(m.a)(["\n    display: none;\n\n    @media screen and (max-width: 760px) {\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(-100%, 60%);\n        font-size: 1.8rem;\n        cursor: pointer;\n        color: #fff;\n    }\n"]);return $e=function(){return e},e}function Ye(){var e=Object(m.a)(["\n    color: #fff;\n    height: 60px;\n    width: 320px;\n    justify-self: flex-start;\n    cursor: pointer;\n    font-size: 1.5rem;\n    display: flex;\n    \n    margin-left: 0px;\n    margin-top: 20px;\n    font-weight: bold;\n    text-decoration: none;\n"]);return Ye=function(){return e},e}function Be(){var e=Object(m.a)(["\n    display: flex;\n/*  justify-content: space-between; */\n    height: 80px;\n    z-index: 1;\n    width: 100%;\n    padding: 0 24px;\n    \n"]);return Be=function(){return e},e}function Ue(){var e=Object(m.a)(["\n    background: #000;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n\n\n    @media screen and (max-width: 960px) {\n        transition: 0.8s all ease\n    }\n"]);return Ue=function(){return e},e}var Ze=O.a.nav(Ue()),We=O.a.div(Be()),Ge=Object(O.a)(s.b)(Ye()),He=O.a.div($e()),Ke=O.a.ul(Re()),Xe=O.a.li(Je()),Qe=Object(O.a)(A.Link)(Ie()),Ve=O.a.nav(Pe()),en=Object(O.a)(s.b)(Ae()),nn=O.a.li(Me()),tn=t.p+"static/media/runner-logo.98e38e02.JPG",cn=(t(158),function(e){var n=e.toggle;e.cart;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(Ze,{children:[Object(c.jsxs)(We,{children:[Object(c.jsx)(Ge,{to:"/",children:Object(c.jsx)("img",{src:tn,className:"logo-image",alt:"logo"})}),Object(c.jsx)(He,{onClick:n,children:Object(c.jsx)(P.a,{})}),Object(c.jsxs)(Ke,{children:[Object(c.jsx)(Xe,{children:Object(c.jsx)(Qe,{to:"tovary",children:"\u0442\u043e\u0432\u0430\u0440\u044b"})}),Object(c.jsx)(Xe,{children:Object(c.jsx)(Qe,{to:"o-nas",children:"\u043e \u043d\u0430\u0441"})}),Object(c.jsx)(Xe,{children:Object(c.jsx)(Qe,{to:"/contact",children:"\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})]}),Object(c.jsxs)(Ve,{children:[Object(c.jsx)(en,{to:"/cart",children:Object(c.jsx)(nn,{children:Object(c.jsx)(qe.a,{})})}),Object(c.jsxs)(en,{to:"/login",children:[Object(c.jsx)("span",{className:"login-quantity"}),Object(c.jsx)(nn,{children:Object(c.jsx)(je.b,{})})]})]})]})})});function rn(){var e=Object(m.a)(["\nposition: absolute;\ntop: 22px;\nright: 28px;\nbackground: crimson;\nfont-size: 10px;\ncolor: white;\npadding: 3px 5px;\nborder-radius: 50%;\nz-index: -1;\ndisplay: flex;\njustify-content: center;\n"]);return rn=function(){return e},e}function an(){var e=Object(m.a)(["\n    color: #fff;\n    height: 30px;\n    display: flex;\n    align: right;\n    cursor: pointer;\n    font-size: 25px;\n    transition: all 0.2s ease-in-out;\n\n    &:hover {\n        color: #01bf71;\n        transition: all 0.2s ease-in-out;\n    }\n"]);return an=function(){return e},e}function on(){var e=Object(m.a)(["\n    \n    outline: none;\n    margin-left: 20px;\n    border: none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n\n    &:hover {\n        transition: all 0.2s ease-in-out;\n    }\n"]);return on=function(){return e},e}function sn(){var e=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n"]);return sn=function(){return e},e}function ln(){var e=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-decoration: none;\n    list-style: none;\n    transition: 0.2s ease-in-out;\n    text-decoration: none;\n    color: #fff;\n    cursor: pointer;\n    \n    &:hover {\n        color: #01bf71;\n        transitions: 0.2s ease-in-out;\n    }\n"]);return ln=function(){return e},e}function dn(){var e=Object(m.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 80px);\n    text-align: center;\n\n    @media screen and (max-width: 480px) {\n        grid-template-rows: repeat(6, 60px);\n    }\n"]);return dn=function(){return e},e}function jn(){var e=Object(m.a)(["\ncolor: #fff;\n"]);return jn=function(){return e},e}function un(){var e=Object(m.a)(["\n    position: absolute;\n    top: 1.2rem;\n    right: 1.5rem;\n    background: transparent;\n    font-sez: 2rem;\n    cursor: pointer;\n    outline: none;\n"]);return un=function(){return e},e}function bn(){var e=Object(m.a)(["\n    color #fff;\n"]);return bn=function(){return e},e}function hn(){var e=Object(m.a)(["\nposition: fixed;\nz-index: 999;\nwidth: 100%;\nheight: 100%;\nbackground: #0d0d0d;\ndisplay: grid;\nalign-items: center;\ntop: 0;\nleft: 0;\ntransition: 0.3s ease-in-out;\n\nopacity: ","; /*if isOpen is true then visible 100%, if false then it is not visible*/\ntop: ",";\n"]);return hn=function(){return e},e}var xn=O.a.aside(hn(),(function(e){return e.isOpen?"100%":"0"}),(function(e){return e.isOpen?"0":"-100%"})),fn=Object(O.a)(P.f)(bn()),pn=O.a.div(un()),mn=O.a.div(jn()),On=O.a.ul(dn()),gn=Object(O.a)(A.Link)(ln()),vn=O.a.div(sn()),yn=Object(O.a)(s.b)(on()),Nn=O.a.div(an()),kn=(O.a.span(rn()),function(e){var n=e.toggle,t=e.isOpen;e.cart;return Object(c.jsxs)(xn,{isOpen:t,onClick:n,children:[Object(c.jsx)(pn,{onClick:n,children:Object(c.jsx)(fn,{})}),Object(c.jsxs)(mn,{children:[Object(c.jsxs)(On,{children:[Object(c.jsx)(gn,{to:"tovary",onClick:n,children:"\u0442\u043e\u0432\u0430\u0440\u044b"}),Object(c.jsx)(gn,{to:"o-nas",onClick:n,children:"\u043e \u043d\u0430\u0441"}),Object(c.jsx)(gn,{to:"/contact",onClick:n,children:"\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]}),Object(c.jsxs)(vn,{children:[Object(c.jsx)(yn,{to:"/cart",children:Object(c.jsx)(Nn,{children:Object(c.jsx)(qe.a,{})})}),Object(c.jsx)(yn,{to:"/login",children:Object(c.jsx)(Nn,{children:Object(c.jsx)(je.b,{})})})]})]})]})}),wn=function(){var e=Object(r.useState)(!1),n=Object(l.a)(e,2),t=n[0],i=n[1],a=Object(r.useContext)(x).cart,o=function(){i(!t)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(kn,{isOpen:t,toggle:o,cart:a}),Object(c.jsx)(cn,{toggle:o,cart:a}),Object(c.jsx)(De,{})]})};var Cn=function(){return Object(c.jsx)(f,{children:Object(c.jsx)("div",{className:"app",children:Object(c.jsx)(s.a,{children:Object(c.jsx)(wn,{})})})})};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(Cn,{})}),document.getElementById("root"))},64:function(e,n,t){},80:function(e,n,t){}},[[159,1,2]]]);
//# sourceMappingURL=main.ad04f2b1.chunk.js.map