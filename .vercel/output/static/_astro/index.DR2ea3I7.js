import{g as _}from"./index.CqrSl2Gl.js";var f={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v;function S(){if(v)return u;v=1;var p=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function t(e,r,n){var a=null;if(n!==void 0&&(a=""+n),r.key!==void 0&&(a=""+r.key),"key"in r){n={};for(var l in r)l!=="key"&&(n[l]=r[l])}else n=r;return r=n.ref,{$$typeof:p,type:e,key:a,ref:r!==void 0?r:null,props:n}}return u.Fragment=s,u.jsx=t,u.jsxs=t,u}var m;function g(){return m||(m=1,f.exports=S()),f.exports}var w=g();let o=[],i=0;const c=4;let q=p=>{let s=[],t={get(){return t.lc||t.listen(()=>{})(),t.value},lc:0,listen(e){return t.lc=s.push(e),()=>{for(let n=i+c;n<o.length;)o[n]===e?o.splice(n,c):n+=c;let r=s.indexOf(e);~r&&(s.splice(r,1),--t.lc||t.off())}},notify(e,r){let n=!o.length;for(let a of s)o.push(a,t.value,e,r);if(n){for(i=0;i<o.length;i+=c)o[i](o[i+1],o[i+2],o[i+3]);o.length=0}},off(){},set(e){let r=t.value;r!==e&&(t.value=e,t.notify(r))},subscribe(e){let r=t.listen(e);return e(t.value),r},value:p};return t};const A=q({show:!1,type:"info",message:""});var h={exports:{}},y,x;function k(){if(x)return y;x=1;var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return y=p,y}var T,d;function O(){if(d)return T;d=1;var p=k();function s(){}function t(){}return t.resetWarningCache=s,T=function(){function e(a,l,b,C,I,P){if(P!==p){var R=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw R.name="Invariant Violation",R}}e.isRequired=e;function r(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:t,resetWarningCache:s};return n.PropTypes=n,n},T}var E;function j(){return E||(E=1,h.exports=O()()),h.exports}var F=j();const J=_(F);export{J as P,w as j,A as p};
