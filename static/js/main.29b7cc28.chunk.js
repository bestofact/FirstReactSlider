(this["webpackJsonpproduct-slider"]=this["webpackJsonpproduct-slider"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),c=n(6),a=n.n(c),o=(n(12),n(2)),s=(n(13),n(14),n(7)),u=(n(15),n(1));var i=function(e){var t=e.productInfo,n=e.boxTransform,l=e.globalCartList,r=e.setGlobalCartList;return Object(u.jsxs)("div",{className:"ProductBox",style:{transform:n},children:[Object(u.jsx)("img",{className:"ProductImageBox",src:t.url,alt:"Product Is Not Visible"}),Object(u.jsx)("span",{className:"ProductTitle",children:t.title}),Object(u.jsx)("button",{className:"AddToCartButton",onClick:function(){console.log(l),r([].concat(Object(s.a)(l),[t]))},children:"Sepete Ekle"})]})};var d,b,g,m,j,f,p,h,C,x,O,E,v,I,L,y,w,S,N,P,k=function(e){var t=e.productsInCart,n=e.setProductsInCart,l=r.a.useState([0,1,2,3,4]),c=Object(o.a)(l,2),a=c[0],s=c[1],d=r.a.useState(0),b=Object(o.a)(d,2),g=b[0],m=b[1],j=r.a.useState("rotateY(180deg) scaleX(-1)"),f=Object(o.a)(j,2),p=f[0],h=f[1];function C(){h("rotateY(180deg) scaleX(-1)"===p?"rotateY(0deg) scaleX(1)":"rotateY(180deg) scaleX(-1)")}return r.a.useEffect((function(){fetch("https://jsonplaceholder.typicode.com/photos").then((function(e){return e.json()})).then((function(e){return s(e.slice(0,50))}))}),[]),Object(u.jsxs)("div",{className:"Slider",children:[Object(u.jsx)("button",{className:"ChangeButton",onClick:function(){g>=5&&(C(),m(g-5))},disabled:0===g,children:"\xab"}),Object(u.jsx)(i,{productInfo:a[g],boxTransform:p,globalCartList:t,setGlobalCartList:n}),Object(u.jsx)(i,{productInfo:a[g+1],boxTransform:p,globalCartList:t,setGlobalCartList:n}),Object(u.jsx)(i,{productInfo:a[g+2],boxTransform:p,globalCartList:t,setGlobalCartList:n}),Object(u.jsx)(i,{productInfo:a[g+3],boxTransform:p,globalCartList:t,setGlobalCartList:n}),Object(u.jsx)(i,{productInfo:a[g+4],boxTransform:p,globalCartList:t,setGlobalCartList:n}),Object(u.jsx)("button",{className:"ChangeButton",onClick:function(){g+5<a.length&&(C(),m(g+5))},disabled:g+5===a.length,children:"\xbb"})]})},M=(n(17),["title","titleId"]);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function z(e,t){var n=e.title,r=e.titleId,c=B(e,M);return l.createElement("svg",T({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 511.999 511.999",style:{enableBackground:"new 0 0 511.999 511.999"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},c),n?l.createElement("title",{id:r},n):null,d||(d=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M214.685,402.828c-24.829,0-45.029,20.2-45.029,45.029c0,24.829,20.2,45.029,45.029,45.029s45.029-20.2,45.029-45.029 C259.713,423.028,239.513,402.828,214.685,402.828z M214.685,467.742c-10.966,0-19.887-8.922-19.887-19.887 c0-10.966,8.922-19.887,19.887-19.887s19.887,8.922,19.887,19.887C234.572,458.822,225.65,467.742,214.685,467.742z"})))),b||(b=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M372.63,402.828c-24.829,0-45.029,20.2-45.029,45.029c0,24.829,20.2,45.029,45.029,45.029s45.029-20.2,45.029-45.029 C417.658,423.028,397.458,402.828,372.63,402.828z M372.63,467.742c-10.966,0-19.887-8.922-19.887-19.887 c0-10.966,8.922-19.887,19.887-19.887c10.966,0,19.887,8.922,19.887,19.887C392.517,458.822,383.595,467.742,372.63,467.742z"})))),g||(g=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M383.716,165.755H203.567c-6.943,0-12.571,5.628-12.571,12.571c0,6.943,5.629,12.571,12.571,12.571h180.149 c6.943,0,12.571-5.628,12.571-12.571C396.287,171.382,390.659,165.755,383.716,165.755z"})))),m||(m=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M373.911,231.035H213.373c-6.943,0-12.571,5.628-12.571,12.571s5.628,12.571,12.571,12.571h160.537 c6.943,0,12.571-5.628,12.571-12.571C386.481,236.664,380.853,231.035,373.911,231.035z"})))),j||(j=l.createElement("g",null,l.createElement("g",null,l.createElement("path",{d:"M506.341,109.744c-4.794-5.884-11.898-9.258-19.489-9.258H95.278L87.37,62.097c-1.651-8.008-7.113-14.732-14.614-17.989 l-55.177-23.95c-6.37-2.767-13.773,0.156-16.536,6.524c-2.766,6.37,0.157,13.774,6.524,16.537L62.745,67.17l60.826,295.261 c2.396,11.628,12.752,20.068,24.625,20.068h301.166c6.943,0,12.571-5.628,12.571-12.571c0-6.943-5.628-12.571-12.571-12.571 H148.197l-7.399-35.916H451.69c11.872,0,22.229-8.44,24.624-20.068l35.163-170.675 C513.008,123.266,511.136,115.627,506.341,109.744z M451.69,296.301H135.619l-35.161-170.674l386.393,0.001L451.69,296.301z"})))),f||(f=l.createElement("g",null)),p||(p=l.createElement("g",null)),h||(h=l.createElement("g",null)),C||(C=l.createElement("g",null)),x||(x=l.createElement("g",null)),O||(O=l.createElement("g",null)),E||(E=l.createElement("g",null)),v||(v=l.createElement("g",null)),I||(I=l.createElement("g",null)),L||(L=l.createElement("g",null)),y||(y=l.createElement("g",null)),w||(w=l.createElement("g",null)),S||(S=l.createElement("g",null)),N||(N=l.createElement("g",null)),P||(P=l.createElement("g",null)))}var G=l.forwardRef(z);n.p;var H=function(e){var t=e.inCartCount;return Object(u.jsxs)("div",{className:"ShoppingCartContainer",children:[Object(u.jsx)(G,{className:"CartSVG"}),Object(u.jsx)("div",{className:"InCartCount",children:Object(u.jsx)("span",{children:t})})]})};var X=function(){var e=r.a.useState([]),t=Object(o.a)(e,2),n=t[0],l=t[1];return Object(u.jsxs)("div",{className:"MainContainer",children:[Object(u.jsx)(k,{productsInCart:n,setProductsInCart:l}),Object(u.jsx)(H,{inCartCount:n.length})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,l=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),l(e),r(e),c(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(X,{})}),document.getElementById("root")),F()}],[[18,1,2]]]);
//# sourceMappingURL=main.29b7cc28.chunk.js.map