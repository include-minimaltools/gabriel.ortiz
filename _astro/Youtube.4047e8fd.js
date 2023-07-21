import{r as t}from"./index.ed373d49.js";/* empty css                                  *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var f=function(){return f=Object.assign||function(r){for(var l,a=1,o=arguments.length;a<o;a++){l=arguments[a];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(r[n]=l[n])}return r},f.apply(this,arguments)};function T(e){var r=t.useState(!1),l=r[0],a=r[1],o=t.useState(!1),n=o[0],i=o[1],s=encodeURIComponent(e.id),_=typeof e.playlistCoverId=="string"?encodeURIComponent(e.playlistCoverId):null,u=e.title,d=e.poster||"hqdefault",v="&"+e.params||"",y=e.muted?"&mute=1":"",E=e.announce||"Watch",p=e.webp?"webp":"jpg",h=e.webp?"vi_webp":"vi",w=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+h+"/"+_+"/"+d+"."+p:"https://i.ytimg.com/"+h+"/"+s+"/"+d+"."+p),c=e.noCookie?"https://www.youtube-nocookie.com":"https://www.youtube.com";c=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var I=e.playlist?c+"/embed/videoseries?autoplay=1"+y+"&list="+s+v:c+"/embed/"+s+"?autoplay=1&state=1"+y+v,k=e.activatedClass||"lyt-activated",C=e.adNetwork||!1,x=e.aspectHeight||9,O=e.aspectWidth||16,R=e.iframeClass||"",j=e.playerClass||"lty-playbtn",S=e.wrapperClass||"yt-lite",N=e.onIframeAdded||function(){},P=e.rel?"prefetch":"preload",F=function(){l||a(!0)},U=function(){n||i(!0)};return t.useEffect(function(){n&&N()},[n]),t.createElement(t.Fragment,null,t.createElement("link",{rel:P,href:w,as:"image"}),t.createElement(t.Fragment,null,l&&t.createElement(t.Fragment,null,t.createElement("link",{rel:"preconnect",href:c}),t.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),C&&t.createElement(t.Fragment,null,t.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),t.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),t.createElement("article",{onPointerOver:F,onClick:U,className:S+" "+(n?k:""),"data-title":u,style:f({backgroundImage:"url("+w+")"},{"--aspect-ratio":x/O*100+"%"})},t.createElement("button",{type:"button",className:j,"aria-label":E+" "+u}),n&&t.createElement("iframe",{className:R,title:u,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:I})))}var b={exports:{}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W=t,L=Symbol.for("react.element"),A=Symbol.for("react.fragment"),Y=Object.prototype.hasOwnProperty,q=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B={key:!0,ref:!0,__self:!0,__source:!0};function g(e,r,l){var a,o={},n=null,i=null;l!==void 0&&(n=""+l),r.key!==void 0&&(n=""+r.key),r.ref!==void 0&&(i=r.ref);for(a in r)Y.call(r,a)&&!B.hasOwnProperty(a)&&(o[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps,r)o[a]===void 0&&(o[a]=r[a]);return{$$typeof:L,type:e,key:n,ref:i,props:o,_owner:q.current}}m.Fragment=A;m.jsx=g;m.jsxs=g;b.exports=m;var D=b.exports;const J=({id:e,title:r,...l})=>D.jsx(T,{id:e,title:r,...l});export{J as default};
