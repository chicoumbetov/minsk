(this.webpackJsonpminsk=this.webpackJsonpminsk||[]).push([[0],{110:function(n,e,t){},111:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/media/1.e942c8a1.jpg"},112:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/media/6.5e38332b.png"},161:function(n,e,t){},162:function(n,e,t){},163:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(2),i=t.n(c),a=t(29),o=t.n(a),s=(t(110),t(9)),l=t(104),d=t(10),j=t(11),u=t(13),b=t(12),x=t(78),f=i.a.createContext(),h=function(n){Object(u.a)(c,n);var e=Object(b.a)(c);function c(){var n;Object(d.a)(this,c);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))).state={products:[{_id:"1",title:"Nike Shoes 01",src:t(111).default,description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["red","black","crimson","teal"],count:1},{_id:"2",title:"Nike Shoes 02",src:t(80).default,description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["red","crimson","teal"],count:1},{_id:"3",title:"Nike Shoes 03",src:t(81).default,description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["lightblue","white","crimson","teal"],count:1},{_id:"4",title:"Nike Shoes 04",src:t(80).default,description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["orange","black","crimson","teal"],count:1},{_id:"5",title:"Nike Shoes 05",src:t(82).default,description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["orange","black","crimson","teal"],count:1},{_id:"6",title:"Nike Shoes 06",src:t(112).default,description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["orange","black","crimson","teal"],count:1},{_id:"7",title:"Nike Shoes 07",src:t(81).default,description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["orange","black","crimson","teal"],count:1},{_id:"8",title:"Nike Shoes 08",src:t(82).default,description:"Description of shoes",content:"Content of shoes",price:150,price2:120,colors:["orange","black","crimson","teal"],count:1}],cart:[],total:0},n.addCart=function(e){var t=n.state,r=t.products,c=t.cart,i=c.every((function(n){return n._id!==e}));if(console.log(i),i){var a=r.filter((function(n){return n._id===e}));console.log(a),n.setState({cart:[].concat(Object(x.a)(c),Object(x.a)(a))})}else alert("The product has been added to cart")},n.reduction=function(e){var t=n.state.cart;t.forEach((function(n){n._id===e&&(1===n.count?n.count=1:n.count-=1)})),n.setState({cart:t}),n.getTotal()},n.increase=function(e){var t=n.state.cart;t.forEach((function(n){n._id===e&&(n.count+=1)})),n.setState({cart:t}),n.getTotal()},n.removeProduct=function(e){if(window.confirm("Do you want to delete this product?")){var t=n.state.cart;t.forEach((function(n,r){n._id===e&&t.splice(r,1)})),n.setState({cart:t}),n.getTotal()}},n.getTotal=function(){var e=n.state.cart.reduce((function(n,e){return n+e.price2*e.count}),0);n.setState({total:e})},n}return Object(j.a)(c,[{key:"componentDidUpdate",value:function(){localStorage.setItem("dataCart",JSON.stringify(this.state.cart)),localStorage.setItem("dataTotal",JSON.stringify(this.state.total))}},{key:"componentDidMount",value:function(){var n=JSON.parse(localStorage.getItem("dataCart"));null!==n&&this.setState({cart:n});var e=JSON.parse(localStorage.getItem("dataTotal"));null!==e&&this.setState({total:e})}},{key:"render",value:function(){var n=this.state,e=n.products,t=n.cart,c=n.total,i=this.addCart,a=this.reduction,o=this.increase,s=this.removeProduct,l=this.getTotal;return Object(r.jsx)(f.Provider,{value:{products:e,addCart:i,cart:t,reduction:a,increase:o,removeProduct:s,total:c,getTotal:l},children:this.props.children})}}]),c}(c.Component),p=(t(83),t.p+"static/media/video1.a2703484.mp4"),m=t(4),O=t(5),g=t(74);function v(){var n=Object(m.a)(["\n    margin-left: 8px;\n    font-size: 20px;\n"]);return v=function(){return n},n}function y(){var n=Object(m.a)(["\n    margin-left: 8px;\n    font-size: 20px;\n"]);return y=function(){return n},n}function N(){var n=Object(m.a)(["\n    margin-top: 32px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    justify-content: flex-start;\n    border-radius: 50px;\n    width: 50%;\n    white-space: nowrap;\n    padding: 10px 22px;\n    \n    font-size: 16px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n\n    background: #01bf71;\n    color: #010606;\n    \n    text-decoration: none;\n\n    &:hover {\n        transition: all 0.2s ease-in-out;\n        background: #fff;\n    }\n"]);return N=function(){return n},n}function k(){var n=Object(m.a)(["\n    margin-top: 24px;\n    color: #fff;\n    font-size: 24px;\n    text-align: center;\n    max-width: 600px;\n\n    @media screen and (max-width: 768px) {\n        font-size: 24px;\n    }\n\n    @media screen and (max-width: 480px) {\n        font-size: 18px;\n    }\n"]);return k=function(){return n},n}function w(){var n=Object(m.a)(["\n    color: #fff;\n    font-size: 48px;\n    text-align: center;\n\n    @media screen and (max-width: 768px) {\n        font-size: 40px;\n    }\n\n    @media screen and (max-width: 480px) {\n        font-size: 32px;\n    }\n"]);return w=function(){return n},n}function C(){var n=Object(m.a)(["\n    z-index: 3;\n    max-width: 1200px;\n    position: absolute;\n    padding: 8px 24px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]);return C=function(){return n},n}function z(){var n=Object(m.a)(["\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n    object-fit: cover;\n    background: #232a34\n"]);return z=function(){return n},n}function _(){var n=Object(m.a)(["\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n"]);return _=function(){return n},n}function S(){var n=Object(m.a)(["\n    background: #0c0c0c;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 0 30px;\n    height: 500px;\n    position: relative;\n    z-index: 1;\n\n    :before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        background: linear-gradient(\n            180deg, \n            rgba(0,0,0,0,2) 0%,\n            rgba(0,0,0,0.6) 100%), \n        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);\n        z-index: 2;\n    }\n"]);return S=function(){return n},n}var T=O.a.div(S()),F=O.a.div(_()),L=O.a.video(z()),E=O.a.div(C()),D=O.a.h1(w()),q=O.a.p(k()),M=(O.a.div(N()),Object(O.a)(g.a)(y()),Object(O.a)(g.b)(v()),function(){return Object(r.jsxs)(T,{id:"home",children:[Object(r.jsx)(F,{children:Object(r.jsx)(L,{autoPlay:!0,loop:!0,muted:!0,src:p,type:"video1/mp4"})}),Object(r.jsxs)(E,{children:[Object(r.jsx)(D,{children:"\u0411\u043e\u043b\u044c\u0448\u043e\u0439 \u0432\u044b\u0431\u043e\u0440 \u043a\u043e\u043c\u0444\u043e\u0440\u0442\u043d\u043e\u0439 \u043e\u0431\u0443\u0432\u0438 \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0441\u043b\u0443\u0447\u0430\u0439"}),Object(r.jsx)(q,{children:"\u0412 \u041d\u0410\u0428\u0415\u041c \u041e\u041d\u041b\u0410\u0419\u041d \u041c\u0410\u0413\u0410\u0417\u0418\u041d\u0415"})]})]})}),A=t(35),P=t(23);function I(){var n=Object(m.a)(["\n    color: #fff;\n    font-size: 24px;\n"]);return I=function(){return n},n}function J(){var n=Object(m.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 240px;\n"]);return J=function(){return n},n}function R(){var n=Object(m.a)(["\n    color: #fff;\n    margin-bottom: 16px;\n    display: flex;\n    justify-content: center;\n"]);return R=function(){return n},n}function $(){var n=Object(m.a)(["\n    color: #fff;\n    justify-self: start;\n    cursor: pointer;\n    text-decoration: none;\n    font-size: 1.5rem;\n    display: flex;\n    align-items: center;\n    margin-bottom: 16px;\n    font-weight: bold;\n\n    &:hover {\n        color: #01bf71;\n        transition: 0.3s ease-out;\n    }\n"]);return $=function(){return n},n}function Y(){var n=Object(m.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    max-width: 1100px;\n    margin: 40px auto 0 auto;\n\n    @media screen and (max-width: 820px) {\n        flex-direction: column;\n    }\n"]);return Y=function(){return n},n}function B(){var n=Object(m.a)(["\n    max-width: 1000px;\n    width: 100%\n"]);return B=function(){return n},n}function U(){var n=Object(m.a)(["\n    color: #fff;\n    text-decoration: none;\n    margin-bottom: 0.5rem;\n    font-size: 14px;\n\n    &:hover {\n        color: #01bf71;\n        transition: 0.3s ease-out;\n    }\n"]);return U=function(){return n},n}function W(){var n=Object(m.a)(["\n    font-size: 14px;\n    margin-bottom: 16px;\n"]);return W=function(){return n},n}function Z(){var n=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    margin: 16px;\n    text-align: left;\n    width: 160px;\n    box-sizing: border-box;\n    color: #fff;\n\n    @media screen and (max-width: 420px) {\n        margin: 0;\n        padding: 10px;\n        width: 100%;\n    }\n"]);return Z=function(){return n},n}function G(){var n=Object(m.a)(["\n    display: flex;\n\n    @media screen and (max-width: 820px) {\n        flex-direction: column;\n    }\n"]);return G=function(){return n},n}function H(){var n=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n\n    @media screen and (max-width: 820px) {\n        padding-top: 32px;\n    }\n"]);return H=function(){return n},n}function K(){var n=Object(m.a)(["\n    padding: 0px 10px 10px 10px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    max-width: 1100px;\n    margin: 0 auto;\n"]);return K=function(){return n},n}function X(){var n=Object(m.a)(["\n    background-color: #101522;\n    margin-top: 60px;\n"]);return X=function(){return n},n}var Q=O.a.footer(X()),V=O.a.div(K()),nn=O.a.div(H()),en=O.a.div(G()),tn=O.a.div(Z()),rn=O.a.h1(W()),cn=Object(O.a)(s.b)(U()),an=O.a.section(B()),on=O.a.div(Y()),sn=Object(O.a)(s.b)($()),ln=O.a.small(R()),dn=O.a.div(J()),jn=O.a.a(I()),un=t(36),bn=function(){return Object(r.jsx)(Q,{children:Object(r.jsxs)(V,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(sn,{to:"/",onClick:function(){A.animateScroll.scrollToTop()},children:Object(r.jsx)(un.a,{})})}),Object(r.jsxs)(nn,{children:[Object(r.jsxs)(en,{children:[Object(r.jsxs)(tn,{children:[Object(r.jsx)(rn,{children:"\u041e \u043d\u0430\u0441"}),Object(r.jsx)(cn,{to:"/",children:"\u041e \u043d\u0430\u0441"})]}),Object(r.jsxs)(tn,{children:[Object(r.jsx)(rn,{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(r.jsx)(cn,{to:"/",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(r.jsx)(cn,{to:"/",children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"}),Object(r.jsx)(cn,{to:"/",children:"\u0421\u043f\u043e\u043d\u0441\u043e\u0440\u0441\u0442\u0432\u043e"})]})]}),Object(r.jsx)(en,{children:Object(r.jsxs)(tn,{children:[Object(r.jsx)(rn,{children:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"}),Object(r.jsx)(cn,{to:"/",children:"Instagram"}),Object(r.jsx)(cn,{to:"/",children:"Facebook"}),Object(r.jsx)(cn,{to:"/",children:"Youtube"})]})})]}),Object(r.jsx)(an,{children:Object(r.jsxs)(on,{children:[Object(r.jsxs)(ln,{children:["\u24d2 ",(new Date).getFullYear()," All rights reserved."]}),Object(r.jsxs)(dn,{children:[Object(r.jsx)(jn,{href:"/",target:"_blank","area-labels":"Facebook",children:Object(r.jsx)(P.b,{})}),Object(r.jsx)(jn,{href:"/",target:"_blank","area-labels":"Instagram",children:Object(r.jsx)(P.c,{})}),Object(r.jsx)(jn,{href:"/",target:"_blank","area-labels":"Youtube",children:Object(r.jsx)(P.g,{})}),Object(r.jsx)(jn,{href:"/",target:"_blank","area-labels":"Telegram",children:Object(r.jsx)(P.e,{})}),Object(r.jsx)(jn,{href:"/",target:"_blank","area-labels":"Linkedin",children:Object(r.jsx)(P.d,{})})]})]})})]})})},xn=function(n){Object(u.a)(t,n);var e=Object(b.a)(t);function t(){return Object(d.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var n=this,e=this.context.products,t=this.context.cart;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"news",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"}),Object(r.jsx)("div",{id:"product",children:e.map((function(e){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)(s.b,{to:"/product/".concat(e._id),children:Object(r.jsx)("img",{src:e.src,alt:""})}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h3",{children:Object(r.jsx)(s.b,{to:"/product/".concat(e._id),children:e.title})}),Object(r.jsx)("div",{className:"pricelinethrough",children:Object(r.jsxs)("span",{children:[e.price," \u0440\u0443\u0431 "]})}),Object(r.jsxs)("p",{children:[e.price2," \u0440\u0443\u0431 "]}),Object(r.jsx)("button",{onClick:function(){return n.context.addCart(e._id)},cart:t.length,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]},e._id)}))})]})}}]),t}(c.Component);xn.contextType=f;var fn=function(n){Object(u.a)(t,n);var e=Object(b.a)(t);function t(){return Object(d.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var n=this,e=this.context.products,t=this.context.cart;return Object(r.jsxs)("div",{children:[Object(r.jsx)(M,{}),Object(r.jsx)("h1",{className:"news",children:"\u041d\u043e\u0432\u0438\u043d\u043a\u0438"}),Object(r.jsx)("div",{id:"product",children:e.map((function(e){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsxs)(s.b,{to:"/product/".concat(e._id),className:"first",children:[Object(r.jsx)("img",{src:e.src,alt:"shoe"}),Object(r.jsx)("span",{className:"discount",class:"overlay",children:"-15%"})]}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h3",{children:Object(r.jsx)(s.b,{to:"/product/".concat(e._id),children:e.title})}),Object(r.jsx)("div",{className:"pricelinethrough",children:Object(r.jsxs)("span",{children:[e.price," \u0440\u0443\u0431 "]})}),Object(r.jsxs)("p",{children:[e.price2," \u0440\u0443\u0431 "]}),Object(r.jsx)("div",{className:"products-button",children:Object(r.jsx)("button",{onClick:function(){return n.context.addCart(e._id)},cart:t.length,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})})]})]},e._id)}))}),Object(r.jsx)(xn,{}),Object(r.jsx)(bn,{})]})}}]),t}(c.Component);fn.contextType=f;t(64);var hn=function(n){Object(u.a)(t,n);var e=Object(b.a)(t);function t(){return Object(d.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var n=this.props.colors;return Object(r.jsx)("div",{children:n.map((function(n,e){return Object(r.jsx)("button",{className:"buttonstyle",style:{background:n}},e)}))})}}]),t}(c.Component),pn=function(n){Object(u.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(d.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(n=e.call.apply(e,[this].concat(c))).state={product:[]},n.getProduct=function(){if(n.props.match.params.id){var e=n.context.products.filter((function(e){return e._id===n.props.match.params.id}));console.log(e),n.setState({product:e})}},n}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.getProduct()}},{key:"render",value:function(){console.log(this.props.match.params.id),console.log(this.context.products);var n=this.state.product,e=this.context.addCart;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"wholeblock",children:n.map((function(n){return Object(r.jsxs)("div",{className:"details",children:[Object(r.jsx)("img",{src:n.src,alt:""}),Object(r.jsxs)("div",{className:"box",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("h2",{children:n.title}),Object(r.jsxs)("span",{className:"linethrough",children:["$",n.price]}),Object(r.jsxs)("span",{children:["$",n.price2]})]}),Object(r.jsx)(hn,{colors:n.colors}),Object(r.jsx)("p",{children:n.description}),Object(r.jsx)("p",{children:n.content}),Object(r.jsx)(s.b,{to:"/cart",className:"cart",onClick:function(){return e(n._id)},children:"Add to cart"})]})]},n._id)}))})})}}]),t}(c.Component);pn.contextType=f;var mn=t(165),On=t(166),gn=t(167),vn=t(168),yn=t(169),Nn=t(170),kn=t(20),wn=function(n){return n&&n.length},Cn=function(n){return function(e){return!e||e.length<=n}},zn=function(n){return function(e){return e&&e.length>=n}},_n=function(n){return!isNaN(Number(n))},Sn=function(n){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n)},Tn=function(n){Object(u.a)(t,n);var e=Object(b.a)(t);function t(){return Object(d.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)(mn.a,{children:[Object(r.jsx)(On.a,{children:Object(r.jsx)(s.b,{to:"/home",children:"Home"})}),Object(r.jsx)(On.a,{active:!0,children:"Contact Us"}),Object(r.jsxs)("div",{className:"col-12",children:[Object(r.jsx)("h3",{children:"Contact Us"}),Object(r.jsx)("hr",{})]})]})}),Object(r.jsxs)("div",{className:"row row-content",children:[Object(r.jsx)("div",{className:"col-12",children:Object(r.jsx)("h3",{children:"Location Information"})}),Object(r.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(r.jsx)("h5",{children:"Our Address"}),Object(r.jsxs)("address",{children:["121, Clear Water Bay Road",Object(r.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(r.jsx)("br",{}),"FRANCE",Object(r.jsx)("br",{}),Object(r.jsx)("i",{className:"fa fa-phone"}),": +33 07 66 198985",Object(r.jsx)("br",{}),Object(r.jsx)("i",{className:"fa fa-fax"}),": +123456789",Object(r.jsx)("br",{}),Object(r.jsx)("i",{className:"fa fa-envelope"}),": ",Object(r.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(r.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(r.jsx)("h5",{children:"Map of our Location"})}),Object(r.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(r.jsxs)("div",{className:"btn-group",role:"group",children:[Object(r.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel: +77073156879",children:[Object(r.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(r.jsxs)("a",{role:"button",className:"btn btn-info",href:"skype: chingiz",children:[Object(r.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(r.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(r.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(r.jsxs)("div",{className:"row row-content",children:[Object(r.jsx)("div",{className:"col-12",children:Object(r.jsx)("h3",{children:"Send us Your Feedback"})}),Object(r.jsx)("div",{className:"col-12 col-md-9",children:Object(r.jsxs)(kn.Form,{model:"feedback",children:[Object(r.jsxs)(gn.a,{className:"form-group",children:[Object(r.jsx)(vn.a,{htmlFor:".firstname",md:2,children:"First Name"}),Object(r.jsxs)(yn.a,{md:10,children:[Object(r.jsx)(kn.Control.text,{model:".firstname",id:"firstname",name:"firstname",placeholder:"First name",className:"form-control",validators:{required:wn,minLength:zn(3),maxLength:Cn(15)}}),Object(r.jsx)(kn.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(r.jsxs)(gn.a,{className:"form-group",children:[Object(r.jsx)(vn.a,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(r.jsxs)(yn.a,{md:10,children:[Object(r.jsx)(kn.Control.text,{model:".lastname",id:"lastname",name:"lastname",placeholder:"Last name",className:"form-control",validators:{required:wn,minLength:zn(3),maxLength:Cn(15)}}),Object(r.jsx)(kn.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(r.jsxs)(gn.a,{className:"form-group",children:[Object(r.jsx)(vn.a,{htmlFor:"telnum",md:2,children:"Contact Tel."}),Object(r.jsxs)(yn.a,{md:10,children:[Object(r.jsx)(kn.Control.text,{model:".telnum",id:"telnum",name:"telnum",placeholder:"Tel. Num",className:"form-control",validators:{required:wn,minLength:zn(3),maxLength:Cn(15),isNumber:_n}}),Object(r.jsx)(kn.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required",minLength:"Must be greater than 2 numbers",maxLength:"Must be 15 numbers or less",isNumber:"Must be a number"}})]})]}),Object(r.jsxs)(gn.a,{className:"form-group",children:[Object(r.jsx)(vn.a,{htmlFor:"email",md:2,children:"Email"}),Object(r.jsxs)(yn.a,{md:10,children:[Object(r.jsx)(kn.Control.text,{model:".email",id:"email",name:"email",placeholder:"Email",className:"form-control",validators:{required:wn,validEmail:Sn}}),Object(r.jsx)(kn.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required",validEmail:"Invalid Email Address"}})]})]}),Object(r.jsxs)(gn.a,{className:"form-group",children:[Object(r.jsx)(yn.a,{md:{size:6,offset:2},children:Object(r.jsx)("div",{className:"form-check",children:Object(r.jsxs)(vn.a,{check:!0,children:[Object(r.jsx)(kn.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(r.jsx)("strong",{children:" May we contact you?"})]})})}),Object(r.jsx)(yn.a,{md:{size:3,offset:1},children:Object(r.jsxs)(kn.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(r.jsx)("option",{children:"Tel."}),Object(r.jsx)("option",{children:"Email"})]})})]}),Object(r.jsxs)(gn.a,{className:"form-group",children:[Object(r.jsx)(vn.a,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(r.jsx)(yn.a,{md:10,children:Object(r.jsx)(kn.Control.textarea,{model:".message",id:"message",name:"message",rows:"12",className:"form-control"})})]}),Object(r.jsx)(gn.a,{className:"form-group",children:Object(r.jsx)(yn.a,{md:{size:10,offset:2},children:Object(r.jsx)(Nn.a,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),t}(c.Component),Fn=t(14),Ln=(t(161),function(n){Object(u.a)(t,n);var e=Object(b.a)(t);function t(){return Object(d.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"componentDidMount",value:function(){this.context.getTotal()}},{key:"render",value:function(){var n=this.context,e=n.cart,t=n.increase,c=n.reduction,i=n.removeProduct,a=n.total;return 0===e.length?Object(r.jsx)("h2",{style:{textAlign:"center"},children:"No Product"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"wholeblock",children:e.map((function(n){return Object(r.jsxs)("div",{className:"details",children:[Object(r.jsx)("div",{className:"delete-detail",children:Object(r.jsx)("div",{className:"delete",onClick:function(){return i(n._id)},children:"X"})}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:n.src,alt:""})}),Object(r.jsxs)("div",{className:"box",children:[Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("h2",{children:n.title}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{className:"linethrough",children:["$",n.price*n.count]}),Object(r.jsxs)("span",{children:["$",n.price2*n.count]})]})]}),Object(r.jsx)(hn,{colors:n.colors}),Object(r.jsx)("p",{children:n.description}),Object(r.jsx)("p",{children:n.content}),Object(r.jsxs)("div",{className:"amount",children:[Object(r.jsx)("button",{className:"count",onClick:function(){return c(n._id)},children:" - "}),Object(r.jsx)("span",{children:n.count}),Object(r.jsx)("button",{className:"count",onClick:function(){return t(n._id)},children:" + "})]})]})]},n._id)}))}),Object(r.jsx)("div",{className:"total-block",children:Object(r.jsxs)("div",{className:"total",children:[Object(r.jsx)(s.b,{to:"/payment",children:"Payment"}),Object(r.jsxs)("h3",{children:["Total: $ ",a]})]})})]})}}]),t}(c.Component));function En(){var n=Object(m.a)(["\n    width: 100%;\n    padding: 11px 40%;\n    color: #fff;\n    font-size: 15px;\n    font-weight: 600;\n    border: none;\n    border-radius: 100px 100px 100px 100px;\n    cursor: pointer;\n    transition: all, 240ms ease-in-out;\n    background: rgb(241, 196, 15);\n    background: linear-gradient(\n        58deg,\n        rgba(241, 196, 15, 1) 20%,\n        rgba(243, 172, 18, 1) 100%\n    )\n\n    &:hover {\n        filter: brightness(1.03);\n    }\n\n"]);return En=function(){return n},n}function Dn(){var n=Object(m.a)(["\n    width: 100%;\n    height: 42px;\n    outline: none;\n    border: 1px solid rgba(15, 15, 15, 0.28);\n    \n    padding: 0px 10px;\n    margin-top: 5px;\n    transition: all 200ms ease-in-out;\n    font-size: 13px;\n\n    &::placeholder {\n        color: rgba(200, 200, 200, 1);\n    }\n\n    &:not(:last-ot-type) {\n        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4)\n    }\n\n    &:focus {\n        outline: none;\n        border-bottom: 2px solid rgba(241, 196, 15);\n    }\n"]);return Dn=function(){return n},n}function qn(){var n=Object(m.a)(["\n    font-size: 12px;\n    color: rgb(241, 196, 15);\n    font-weight: 500;\n    text-decoration: none;\n"]);return qn=function(){return n},n}function Mn(){var n=Object(m.a)(["\n    font-size: 12px;\n    color: rgba(200, 200, 22000, 0.8);\n    font-weight: 500;\n    text-decoration: none;\n"]);return Mn=function(){return n},n}function An(){var n=Object(m.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n"]);return An=function(){return n},n}function Pn(){var n=Object(m.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 10px;\n"]);return Pn=function(){return n},n}Ln.contextType=f;var In=O.a.div(Pn()),Jn=O.a.form(An()),Rn=O.a.a(Mn()),$n=O.a.a(qn()),Yn=O.a.input(Dn()),Bn=O.a.button(En());function Un(){var n=Object(m.a)(["\n    margin-top: 10px;\n    margin-bottom: 10px;\n"]);return Un=function(){return n},n}var Wn=O.a.div(Un()),Zn=function(n){Object(u.a)(t,n);var e=Object(b.a)(t);function t(){return Object(d.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(r.jsxs)(In,{children:[Object(r.jsxs)(Jn,{children:[Object(r.jsx)(Yn,{type:"email",placeholder:"Email \u0430\u0434\u0440\u0435\u0441"}),Object(r.jsx)(Yn,{type:"tel",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),Object(r.jsx)(Yn,{type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(r.jsx)(Wn,{direction:"vertical",margin:5}),Object(r.jsx)(Rn,{href:"#",children:"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"}),Object(r.jsx)(Wn,{direction:"vertical",margin:"l.6em"}),Object(r.jsx)(Bn,{type:"submit",children:"Signin"}),Object(r.jsx)(Wn,{direction:"vertical",margin:"lem"}),Object(r.jsxs)(Rn,{href:"#",children:["\u041d\u0435\u0442\u0443 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430? ",Object(r.jsx)($n,{href:"#",children:"Signup"})]})]})}}]),t}(c.Component);function Gn(){var n=Object(m.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0 1.8em;\n"]);return Gn=function(){return n},n}function Hn(){var n=Object(m.a)(["\n        color: #fff;\n        font-weight: 500;\n        font-size: 11px;\n        z-index: 10;\n        margin: 0;\n        margin-top: 7px;\n"]);return Hn=function(){return n},n}function Kn(){var n=Object(m.a)(["\n        font-size: 25px;\n        line-weight: 600;\n        line-height: 1.24;\n        color: #fff;\n        z-index: 10;\n        margin: 0;\n"]);return Kn=function(){return n},n}function Xn(){var n=Object(m.a)(["\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        padding-top: 50px;\n"]);return Xn=function(){return n},n}function Qn(){var n=Object(m.a)(["\n    width: 160%;\n    height: 550px;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    border-radius: 50%;\n    transform: rotate(60deg);\n    top: -290px;\n    left: -70px;\n    background: rgb(241, 196, 15);\n    background: linear-gradient(\n        58deg,\n        rgba(241, 196, 15, 1) 20%,\n        rgba(243, 172, 18, 1) 100%\n    )\n"]);return Qn=function(){return n},n}function Vn(){var n=Object(m.a)(["\n    width: 100%;\n    height: 250px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    padding: 0 1.8em;\n    padding-bottom: 2cm;\n"]);return Vn=function(){return n},n}function ne(){var n=Object(m.a)(["\n    width: 280px;\n    min-height: 550px;\n    display: flex;\n    flex-direction: column;\n    border-radius: 19px;\n    background-color: #fff;\n    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);\n    position: relative;\n    overflow: hidden;\n"]);return ne=function(){return n},n}function ee(){var n=Object(m.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    margin-top: 30px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]);return ee=function(){return n},n}var te=O.a.div(ee()),re=O.a.div(ne()),ce=O.a.div(Vn()),ie=O.a.div(Qn()),ae=O.a.div(Xn()),oe=O.a.h2(Kn()),se=O.a.h5(Hn()),le=O.a.div(Gn()),de=function(n){Object(u.a)(t,n);var e=Object(b.a)(t);function t(){return Object(d.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(r.jsx)(te,{children:Object(r.jsxs)(re,{children:[Object(r.jsxs)(ce,{children:[Object(r.jsx)(ie,{}),Object(r.jsxs)(ae,{children:[Object(r.jsx)(oe,{children:"Welcome"}),Object(r.jsx)(oe,{children:"Back"}),Object(r.jsx)(se,{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"})]})]}),Object(r.jsx)(le,{children:Object(r.jsx)(Zn,{})})]})})}}]),t}(c.Component),je=function(n){Object(u.a)(t,n);var e=Object(b.a)(t);function t(){return Object(d.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h2",{style:{textAlign:"center"},children:"Payment Component"})})}}]),t}(c.Component),ue=function(n){Object(u.a)(t,n);var e=Object(b.a)(t);function t(){return Object(d.a)(this,t),e.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(r.jsxs)("section",{children:[Object(r.jsx)(Fn.a,{path:"/",component:fn,exact:!0}),Object(r.jsx)(Fn.a,{path:"/product",component:fn,exact:!0}),Object(r.jsx)(Fn.a,{path:"/product/:id",component:pn,exact:!0}),Object(r.jsx)(Fn.a,{path:"/contact",component:Tn,exact:!0}),Object(r.jsx)(Fn.a,{path:"/cart",component:Ln,exact:!0}),Object(r.jsx)(Fn.a,{path:"/login",component:de,exact:!0}),Object(r.jsx)(Fn.a,{path:"/payment",component:je,exact:!0})]})}}]),t}(c.Component),be=t(57);function xe(){var n=Object(m.a)(["\n    color: #fff;\n    height: 30px;\n    display: flex;\n    align: right;\n    cursor: pointer;\n    font-size: 25px;\n    transition: all 0.2s ease-in-out;\n\n    &:hover {\n        transition: all 0.2s ease-in-out;\n    }\n"]);return xe=function(){return n},n}function fe(){var n=Object(m.a)(["\n    outline: none;\n    margin-left: 20px;\n    border: none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n\n    &:hover {\n        transition: all 0.2s ease-in-out;\n    }\n"]);return fe=function(){return n},n}function he(){var n=Object(m.a)(["\n    display: flex;\n    height: 50px;\n    margin-right: 20px;\n    margin-top: 5px;\n    align-items: center;\n\n    @media screen and (max-width: 760px) {\n        display: none;\n    }\n"]);return he=function(){return n},n}function pe(){var n=Object(m.a)(["\n    color: #fff;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    padding: 0 1rem;\n    height: 100%;\n    font-style: initial;\n    cursor: pointer;\n\n    &.active {\n        border-bottom: 3px solid #01bf71;\n    }\n"]);return pe=function(){return n},n}function me(){var n=Object(m.a)(["\n    height: 80px;\n"]);return me=function(){return n},n}function Oe(){var n=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    list-style: none;\n    text-align: center;\n    \n\n    @media screen and (max-width: 760px) {\n        display: none;\n}\n"]);return Oe=function(){return n},n}function ge(){var n=Object(m.a)(["\n    display: none;\n\n    @media screen and (max-width: 760px) {\n        display: block;\n        position: absolute;\n        top: 0;\n        right: 0;\n        transform: translate(-100%, 60%);\n        font-size: 1.8rem;\n        cursor: pointer;\n        color: #fff;\n    }\n"]);return ge=function(){return n},n}function ve(){var n=Object(m.a)(["\n    color: #fff;\n    height: 60px;\n    width: 320px;\n    justify-self: flex-start;\n    cursor: pointer;\n    font-size: 1.5rem;\n    display: flex;\n    \n    margin-left: 0px;\n    margin-top: 20px;\n    font-weight: bold;\n    text-decoration: none;\n"]);return ve=function(){return n},n}function ye(){var n=Object(m.a)(["\n    display: flex;\n/*  justify-content: space-between; */\n    height: 80px;\n    z-index: 1;\n    width: 100%;\n    padding: 0 24px;\n    \n"]);return ye=function(){return n},n}function Ne(){var n=Object(m.a)(["\n    background: #000;\n    height: 80px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1rem;\n    position: sticky;\n    top: 0;\n    z-index: 10;\n\n\n    @media screen and (max-width: 960px) {\n        transition: 0.8s all ease\n    }\n"]);return Ne=function(){return n},n}var ke=O.a.nav(Ne()),we=O.a.div(ye()),Ce=Object(O.a)(s.b)(ve()),ze=O.a.div(ge()),_e=O.a.ul(Oe()),Se=O.a.li(me()),Te=Object(O.a)(A.Link)(pe()),Fe=O.a.nav(he()),Le=Object(O.a)(s.b)(fe()),Ee=O.a.li(xe()),De=t.p+"static/media/runner-logo.98e38e02.JPG",qe=(t(162),function(n){var e=n.toggle;n.cart;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(ke,{children:[Object(r.jsxs)(we,{children:[Object(r.jsx)(Ce,{to:"/",children:Object(r.jsx)("img",{src:De,className:"logo-image",alt:"logo"})}),Object(r.jsx)(ze,{onClick:e,children:Object(r.jsx)(P.a,{})}),Object(r.jsxs)(_e,{children:[Object(r.jsx)(Se,{children:Object(r.jsx)(Te,{to:"tovary",children:"\u0442\u043e\u0432\u0430\u0440\u044b"})}),Object(r.jsx)(Se,{children:Object(r.jsx)(Te,{to:"o-nas",children:"\u043e \u043d\u0430\u0441"})}),Object(r.jsx)(Se,{children:Object(r.jsx)(Te,{to:"/contact",children:"\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})]}),Object(r.jsxs)(Fe,{children:[Object(r.jsx)(Le,{to:"/cart",children:Object(r.jsx)(Ee,{children:Object(r.jsx)(be.a,{})})}),Object(r.jsxs)(Le,{to:"/login",children:[Object(r.jsx)("span",{className:"login-quantity"}),Object(r.jsx)(Ee,{children:Object(r.jsx)(un.b,{})})]})]})]})})});function Me(){var n=Object(m.a)(["\nposition: absolute;\ntop: 22px;\nright: 28px;\nbackground: crimson;\nfont-size: 10px;\ncolor: white;\npadding: 3px 5px;\nborder-radius: 50%;\nz-index: -1;\ndisplay: flex;\njustify-content: center;\n"]);return Me=function(){return n},n}function Ae(){var n=Object(m.a)(["\n    color: #fff;\n    height: 30px;\n    display: flex;\n    align: right;\n    cursor: pointer;\n    font-size: 25px;\n    transition: all 0.2s ease-in-out;\n\n    &:hover {\n        color: #01bf71;\n        transition: all 0.2s ease-in-out;\n    }\n"]);return Ae=function(){return n},n}function Pe(){var n=Object(m.a)(["\n    \n    outline: none;\n    margin-left: 20px;\n    border: none;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration: none;\n\n    &:hover {\n        transition: all 0.2s ease-in-out;\n    }\n"]);return Pe=function(){return n},n}function Ie(){var n=Object(m.a)(["\n    display: flex;\n    justify-content: center;\n"]);return Ie=function(){return n},n}function Je(){var n=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 1.5rem;\n    text-decoration: none;\n    list-style: none;\n    transition: 0.2s ease-in-out;\n    text-decoration: none;\n    color: #fff;\n    cursor: pointer;\n    \n    &:hover {\n        color: #01bf71;\n        transitions: 0.2s ease-in-out;\n    }\n"]);return Je=function(){return n},n}function Re(){var n=Object(m.a)(["\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(6, 80px);\n    text-align: center;\n\n    @media screen and (max-width: 480px) {\n        grid-template-rows: repeat(6, 60px);\n    }\n"]);return Re=function(){return n},n}function $e(){var n=Object(m.a)(["\ncolor: #fff;\n"]);return $e=function(){return n},n}function Ye(){var n=Object(m.a)(["\n    position: absolute;\n    top: 1.2rem;\n    right: 1.5rem;\n    background: transparent;\n    font-sez: 2rem;\n    cursor: pointer;\n    outline: none;\n"]);return Ye=function(){return n},n}function Be(){var n=Object(m.a)(["\n    color #fff;\n"]);return Be=function(){return n},n}function Ue(){var n=Object(m.a)(["\nposition: fixed;\nz-index: 999;\nwidth: 100%;\nheight: 100%;\nbackground: #0d0d0d;\ndisplay: grid;\nalign-items: center;\ntop: 0;\nleft: 0;\ntransition: 0.3s ease-in-out;\n\nopacity: ","; /*if isOpen is true then visible 100%, if false then it is not visible*/\ntop: ",";\n"]);return Ue=function(){return n},n}var We=O.a.aside(Ue(),(function(n){return n.isOpen?"100%":"0"}),(function(n){return n.isOpen?"0":"-100%"})),Ze=Object(O.a)(P.f)(Be()),Ge=O.a.div(Ye()),He=O.a.div($e()),Ke=O.a.ul(Re()),Xe=Object(O.a)(A.Link)(Je()),Qe=O.a.div(Ie()),Ve=Object(O.a)(s.b)(Pe()),nt=O.a.div(Ae()),et=(O.a.span(Me()),function(n){var e=n.toggle,t=n.isOpen;n.cart;return Object(r.jsxs)(We,{isOpen:t,onClick:e,children:[Object(r.jsx)(Ge,{onClick:e,children:Object(r.jsx)(Ze,{})}),Object(r.jsxs)(He,{children:[Object(r.jsxs)(Ke,{children:[Object(r.jsx)(Xe,{to:"tovary",onClick:e,children:"\u0442\u043e\u0432\u0430\u0440\u044b"}),Object(r.jsx)(Xe,{to:"o-nas",onClick:e,children:"\u043e \u043d\u0430\u0441"}),Object(r.jsx)(Xe,{to:"/contact",onClick:e,children:"\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})]}),Object(r.jsxs)(Qe,{children:[Object(r.jsx)(Ve,{to:"/cart",children:Object(r.jsx)(nt,{children:Object(r.jsx)(be.a,{})})}),Object(r.jsx)(Ve,{to:"/login",children:Object(r.jsx)(nt,{children:Object(r.jsx)(un.b,{})})})]})]})]})}),tt=function(){var n=Object(c.useState)(!1),e=Object(l.a)(n,2),t=e[0],i=e[1],a=Object(c.useContext)(f).cart,o=function(){i(!t)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(et,{isOpen:t,toggle:o,cart:a}),Object(r.jsx)(qe,{toggle:o,cart:a}),Object(r.jsx)(ue,{})]})};var rt=function(){return Object(r.jsx)(h,{children:Object(r.jsx)("div",{className:"app",children:Object(r.jsx)(s.a,{children:Object(r.jsx)(tt,{})})})})};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(rt,{})}),document.getElementById("root"))},64:function(n,e,t){},80:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/media/4.6dd1e973.png"},81:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/media/3.f03c436a.png"},82:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/media/5.94118f39.png"},83:function(n,e,t){}},[[163,1,2]]]);
//# sourceMappingURL=main.983db7b0.chunk.js.map