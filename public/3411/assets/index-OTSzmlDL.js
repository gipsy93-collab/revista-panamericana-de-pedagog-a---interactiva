(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Pv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var td={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function yS(){if(T0)return No;T0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var m in l)m!=="key"&&(c[m]=l[m])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var A0;function ES(){return A0||(A0=1,td.exports=yS()),td.exports}var p=ES(),nd={exports:{}},ot={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function bS(){if(R0)return ot;R0=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),v=Symbol.iterator;function E(P){return P===null||typeof P!="object"?null:(P=v&&P[v]||P["@@iterator"],typeof P=="function"?P:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function M(P,Y,_e){this.props=P,this.context=Y,this.refs=y,this.updater=_e||T}M.prototype.isReactComponent={},M.prototype.setState=function(P,Y){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Y,"setState")},M.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function N(){}N.prototype=M.prototype;function F(P,Y,_e){this.props=P,this.context=Y,this.refs=y,this.updater=_e||T}var U=F.prototype=new N;U.constructor=F,w(U,M.prototype),U.isPureReactComponent=!0;var j=Array.isArray;function H(){}var z={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function D(P,Y,_e){var Re=_e.ref;return{$$typeof:o,type:P,key:Y,ref:Re!==void 0?Re:null,props:_e}}function me(P,Y){return D(P.type,Y,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function ee(P){var Y={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(_e){return Y[_e]})}var se=/\/+/g;function ce(P,Y){return typeof P=="object"&&P!==null&&P.key!=null?ee(""+P.key):Y.toString(36)}function $(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(H,H):(P.status="pending",P.then(function(Y){P.status==="pending"&&(P.status="fulfilled",P.value=Y)},function(Y){P.status==="pending"&&(P.status="rejected",P.reason=Y)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function O(P,Y,_e,Re,Fe){var ne=typeof P;(ne==="undefined"||ne==="boolean")&&(P=null);var xe=!1;if(P===null)xe=!0;else switch(ne){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(P.$$typeof){case o:case t:xe=!0;break;case x:return xe=P._init,O(xe(P._payload),Y,_e,Re,Fe)}}if(xe)return Fe=Fe(P),xe=Re===""?"."+ce(P,0):Re,j(Fe)?(_e="",xe!=null&&(_e=xe.replace(se,"$&/")+"/"),O(Fe,Y,_e,"",function(Qe){return Qe})):Fe!=null&&(G(Fe)&&(Fe=me(Fe,_e+(Fe.key==null||P&&P.key===Fe.key?"":(""+Fe.key).replace(se,"$&/")+"/")+xe)),Y.push(Fe)),1;xe=0;var Te=Re===""?".":Re+":";if(j(P))for(var Xe=0;Xe<P.length;Xe++)Re=P[Xe],ne=Te+ce(Re,Xe),xe+=O(Re,Y,_e,ne,Fe);else if(Xe=E(P),typeof Xe=="function")for(P=Xe.call(P),Xe=0;!(Re=P.next()).done;)Re=Re.value,ne=Te+ce(Re,Xe++),xe+=O(Re,Y,_e,ne,Fe);else if(ne==="object"){if(typeof P.then=="function")return O($(P),Y,_e,Re,Fe);throw Y=String(P),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return xe}function I(P,Y,_e){if(P==null)return P;var Re=[],Fe=0;return O(P,Re,"","",function(ne){return Y.call(_e,ne,Fe++)}),Re}function le(P){if(P._status===-1){var Y=P._result;Y=Y(),Y.then(function(_e){(P._status===0||P._status===-1)&&(P._status=1,P._result=_e)},function(_e){(P._status===0||P._status===-1)&&(P._status=2,P._result=_e)}),P._status===-1&&(P._status=0,P._result=Y)}if(P._status===1)return P._result.default;throw P._result}var he=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},be={map:I,forEach:function(P,Y,_e){I(P,function(){Y.apply(this,arguments)},_e)},count:function(P){var Y=0;return I(P,function(){Y++}),Y},toArray:function(P){return I(P,function(Y){return Y})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return ot.Activity=S,ot.Children=be,ot.Component=M,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=F,ot.StrictMode=s,ot.Suspense=g,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ot.__COMPILER_RUNTIME={__proto__:null,c:function(P){return z.H.useMemoCache(P)}},ot.cache=function(P){return function(){return P.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(P,Y,_e){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Re=w({},P.props),Fe=P.key;if(Y!=null)for(ne in Y.key!==void 0&&(Fe=""+Y.key),Y)!A.call(Y,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Y.ref===void 0||(Re[ne]=Y[ne]);var ne=arguments.length-2;if(ne===1)Re.children=_e;else if(1<ne){for(var xe=Array(ne),Te=0;Te<ne;Te++)xe[Te]=arguments[Te+2];Re.children=xe}return D(P.type,Fe,Re)},ot.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},ot.createElement=function(P,Y,_e){var Re,Fe={},ne=null;if(Y!=null)for(Re in Y.key!==void 0&&(ne=""+Y.key),Y)A.call(Y,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Fe[Re]=Y[Re]);var xe=arguments.length-2;if(xe===1)Fe.children=_e;else if(1<xe){for(var Te=Array(xe),Xe=0;Xe<xe;Xe++)Te[Xe]=arguments[Xe+2];Fe.children=Te}if(P&&P.defaultProps)for(Re in xe=P.defaultProps,xe)Fe[Re]===void 0&&(Fe[Re]=xe[Re]);return D(P,ne,Fe)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(P){return{$$typeof:m,render:P}},ot.isValidElement=G,ot.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:le}},ot.memo=function(P,Y){return{$$typeof:h,type:P,compare:Y===void 0?null:Y}},ot.startTransition=function(P){var Y=z.T,_e={};z.T=_e;try{var Re=P(),Fe=z.S;Fe!==null&&Fe(_e,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(H,he)}catch(ne){he(ne)}finally{Y!==null&&_e.types!==null&&(Y.types=_e.types),z.T=Y}},ot.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ot.use=function(P){return z.H.use(P)},ot.useActionState=function(P,Y,_e){return z.H.useActionState(P,Y,_e)},ot.useCallback=function(P,Y){return z.H.useCallback(P,Y)},ot.useContext=function(P){return z.H.useContext(P)},ot.useDebugValue=function(){},ot.useDeferredValue=function(P,Y){return z.H.useDeferredValue(P,Y)},ot.useEffect=function(P,Y){return z.H.useEffect(P,Y)},ot.useEffectEvent=function(P){return z.H.useEffectEvent(P)},ot.useId=function(){return z.H.useId()},ot.useImperativeHandle=function(P,Y,_e){return z.H.useImperativeHandle(P,Y,_e)},ot.useInsertionEffect=function(P,Y){return z.H.useInsertionEffect(P,Y)},ot.useLayoutEffect=function(P,Y){return z.H.useLayoutEffect(P,Y)},ot.useMemo=function(P,Y){return z.H.useMemo(P,Y)},ot.useOptimistic=function(P,Y){return z.H.useOptimistic(P,Y)},ot.useReducer=function(P,Y,_e){return z.H.useReducer(P,Y,_e)},ot.useRef=function(P){return z.H.useRef(P)},ot.useState=function(P){return z.H.useState(P)},ot.useSyncExternalStore=function(P,Y,_e){return z.H.useSyncExternalStore(P,Y,_e)},ot.useTransition=function(){return z.H.useTransition()},ot.version="19.2.4",ot}var C0;function Ph(){return C0||(C0=1,nd.exports=bS()),nd.exports}var Ve=Ph();const TS=Pv(Ve);var id={exports:{}},Do={},ad={exports:{}},sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function AS(){return w0||(w0=1,(function(o){function t(O,I){var le=O.length;O.push(I);e:for(;0<le;){var he=le-1>>>1,be=O[he];if(0<l(be,I))O[he]=I,O[le]=be,le=he;else break e}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var I=O[0],le=O.pop();if(le!==I){O[0]=le;e:for(var he=0,be=O.length,P=be>>>1;he<P;){var Y=2*(he+1)-1,_e=O[Y],Re=Y+1,Fe=O[Re];if(0>l(_e,le))Re<be&&0>l(Fe,_e)?(O[he]=Fe,O[Re]=le,he=Re):(O[he]=_e,O[Y]=le,he=Y);else if(Re<be&&0>l(Fe,le))O[he]=Fe,O[Re]=le,he=Re;else break e}}return I}function l(O,I){var le=O.sortIndex-I.sortIndex;return le!==0?le:O.id-I.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,m=d.now();o.unstable_now=function(){return d.now()-m}}var g=[],h=[],x=1,S=null,v=3,E=!1,T=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function U(O){for(var I=i(h);I!==null;){if(I.callback===null)s(h);else if(I.startTime<=O)s(h),I.sortIndex=I.expirationTime,t(g,I);else break;I=i(h)}}function j(O){if(w=!1,U(O),!T)if(i(g)!==null)T=!0,H||(H=!0,ee());else{var I=i(h);I!==null&&$(j,I.startTime-O)}}var H=!1,z=-1,A=5,D=-1;function me(){return y?!0:!(o.unstable_now()-D<A)}function G(){if(y=!1,H){var O=o.unstable_now();D=O;var I=!0;try{e:{T=!1,w&&(w=!1,N(z),z=-1),E=!0;var le=v;try{t:{for(U(O),S=i(g);S!==null&&!(S.expirationTime>O&&me());){var he=S.callback;if(typeof he=="function"){S.callback=null,v=S.priorityLevel;var be=he(S.expirationTime<=O);if(O=o.unstable_now(),typeof be=="function"){S.callback=be,U(O),I=!0;break t}S===i(g)&&s(g),U(O)}else s(g);S=i(g)}if(S!==null)I=!0;else{var P=i(h);P!==null&&$(j,P.startTime-O),I=!1}}break e}finally{S=null,v=le,E=!1}I=void 0}}finally{I?ee():H=!1}}}var ee;if(typeof F=="function")ee=function(){F(G)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,ce=se.port2;se.port1.onmessage=G,ee=function(){ce.postMessage(null)}}else ee=function(){M(G,0)};function $(O,I){z=M(function(){O(o.unstable_now())},I)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(O){switch(v){case 1:case 2:case 3:var I=3;break;default:I=v}var le=v;v=I;try{return O()}finally{v=le}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,I){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var le=v;v=O;try{return I()}finally{v=le}},o.unstable_scheduleCallback=function(O,I,le){var he=o.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?he+le:he):le=he,O){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=le+be,O={id:x++,callback:I,priorityLevel:O,startTime:le,expirationTime:be,sortIndex:-1},le>he?(O.sortIndex=le,t(h,O),i(g)===null&&O===i(h)&&(w?(N(z),z=-1):w=!0,$(j,le-he))):(O.sortIndex=be,t(g,O),T||E||(T=!0,H||(H=!0,ee()))),O},o.unstable_shouldYield=me,o.unstable_wrapCallback=function(O){var I=v;return function(){var le=v;v=I;try{return O.apply(this,arguments)}finally{v=le}}}})(sd)),sd}var N0;function RS(){return N0||(N0=1,ad.exports=AS()),ad.exports}var rd={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0;function CS(){if(D0)return Tn;D0=1;var o=Ph();function t(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,h,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:g,containerInfo:h,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(g,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(g,h,null,x)},Tn.flushSync=function(g){var h=d.T,x=s.p;try{if(d.T=null,s.p=2,g)return g()}finally{d.T=h,s.p=x,s.d.f()}},Tn.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(g,h))},Tn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Tn.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var x=h.as,S=m(x,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:v,fetchPriority:E}):x==="script"&&s.d.X(g,{crossOrigin:S,integrity:v,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Tn.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=m(h.as,h.crossOrigin);s.d.M(g,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(g)},Tn.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,S=m(x,h.crossOrigin);s.d.L(g,x,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Tn.preloadModule=function(g,h){if(typeof g=="string")if(h){var x=m(h.as,h.crossOrigin);s.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(g)},Tn.requestFormReset=function(g){s.d.r(g)},Tn.unstable_batchedUpdates=function(g,h){return g(h)},Tn.useFormState=function(g,h,x){return d.H.useFormState(g,h,x)},Tn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Tn.version="19.2.4",Tn}var U0;function wS(){if(U0)return rd.exports;U0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),rd.exports=CS(),rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0;function NS(){if(L0)return Do;L0=1;var o=RS(),t=Ph(),i=wS();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return g(u),e;if(f===r)return g(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,r=f;break}if(R===r){_=!0,r=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,r=u;break}if(R===r){_=!0,r=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,v=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),F=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),me=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var se=Symbol.for("react.client.reference");function ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case j:return"Suspense";case H:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case F:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ce(e.type)||"Memo";case A:n=e._payload,e=e._init;try{return ce(e(n))}catch{}}return null}var $=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},he=[],be=-1;function P(e){return{current:e}}function Y(e){0>be||(e.current=he[be],he[be]=null,be--)}function _e(e,n){be++,he[be]=e.current,e.current=n}var Re=P(null),Fe=P(null),ne=P(null),xe=P(null);function Te(e,n){switch(_e(ne,n),_e(Fe,e),_e(Re,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Yg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Yg(n),e=Zg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(Re),_e(Re,e)}function Xe(){Y(Re),Y(Fe),Y(ne)}function Qe(e){e.memoizedState!==null&&_e(xe,e);var n=Re.current,a=Zg(n,e.type);n!==a&&(_e(Fe,e),_e(Re,a))}function et(e){Fe.current===e&&(Y(Re),Y(Fe)),xe.current===e&&(Y(xe),Ao._currentValue=le)}var Qt,_t;function mt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+_t}var Nt=!1;function lt(e,n){if(!e||Nt)return"";Nt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(oe){var ae=oe}Reflect.construct(e,[],ve)}else{try{ve.call()}catch(oe){ae=oe}e.call(ve.prototype)}}else{try{throw Error()}catch(oe){ae=oe}(ve=e())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(oe){if(oe&&ae&&typeof oe.stack=="string")return[oe.stack,ae.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var B=_.split(`
`),J=R.split(`
`);for(u=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(r===B.length||u===J.length)for(r=B.length-1,u=J.length-1;1<=r&&0<=u&&B[r]!==J[u];)u--;for(;1<=r&&0<=u;r--,u--)if(B[r]!==J[u]){if(r!==1||u!==1)do if(r--,u--,0>u||B[r]!==J[u]){var de=`
`+B[r].replace(" at new "," at ");return e.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",e.displayName)),de}while(1<=r&&0<=u);break}}}finally{Nt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?mt(a):""}function Kt(e,n){switch(e.tag){case 26:case 27:case 5:return mt(e.type);case 16:return mt("Lazy");case 13:return e.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return lt(e.type,!1);case 11:return lt(e.type.render,!1);case 1:return lt(e.type,!0);case 31:return mt("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=Kt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var qt=Object.prototype.hasOwnProperty,Et=o.unstable_scheduleCallback,Ut=o.unstable_cancelCallback,We=o.unstable_shouldYield,L=o.unstable_requestPaint,b=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,Se=o.unstable_UserBlockingPriority,fe=o.unstable_NormalPriority,ke=o.unstable_LowPriority,we=o.unstable_IdlePriority,Ke=o.log,tt=o.unstable_setDisableYieldValue,Ee=null,Me=null;function Oe(e){if(typeof Ke=="function"&&tt(e),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(Ee,e)}catch{}}var Le=Math.clz32?Math.clz32:q,Pe=Math.log,ut=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Pe(e)/ut|0)|0}var Ce=256,Ae=262144,ze=4194304;function ye(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ue(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=ye(r):(_&=R,_!==0?u=ye(_):a||(a=R&~e,a!==0&&(u=ye(a))))):(R=r&~f,R!==0?u=ye(R):_!==0?u=ye(_):a||(a=r&~e,a!==0&&(u=ye(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Be(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(){var e=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),e}function bt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vi(e,n,a,r,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,B=e.expirationTimes,J=e.hiddenUpdates;for(a=_&~a;0<a;){var de=31-Le(a),ve=1<<de;R[de]=0,B[de]=-1;var ae=J[de];if(ae!==null)for(J[de]=null,de=0;de<ae.length;de++){var oe=ae[de];oe!==null&&(oe.lane&=-536870913)}a&=~ve}r!==0&&Hr(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function Hr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Le(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ls(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Le(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Zo(e,n){var a=n&-n;return a=(a&42)!==0?1:Os(a),(a&(e.suspendedLanes|n))!==0?0:a}function Os(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ps(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ni(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:_0(e.type))}function zs(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var _i=Math.random().toString(36).slice(2),sn="__reactFiber$"+_i,hn="__reactProps$"+_i,ji="__reactContainer$"+_i,Ma="__reactEvents$"+_i,Ko="__reactListeners$"+_i,Qo="__reactHandles$"+_i,Jo="__reactResources$"+_i,is="__reactMarker$"+_i;function Gr(e){delete e[sn],delete e[hn],delete e[Ma],delete e[Ko],delete e[Qo]}function ya(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ji]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=n0(e);e!==null;){if(a=e[sn])return a;e=n0(e)}return n}e=a,a=e.parentNode}return null}function Ea(e){if(e=e[sn]||e[ji]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function as(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function C(e){var n=e[Jo];return n||(n=e[Jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function k(e){e[is]=!0}var re=new Set,te={};function K(e,n){Ne(e,n),Ne(e+"Capture",n)}function Ne(e,n){for(te[e]=n,e=0;e<n.length;e++)re.add(n[e])}var Ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),De={},qe={};function Ze(e){return qt.call(qe,e)?!0:qt.call(De,e)?!1:Ie.test(e)?qe[e]=!0:(De[e]=!0,!1)}function nt(e,n,a){if(Ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function rt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function He(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function At(e){if(!e._valueTracker){var n=Wt(e)?"checked":"value";e._valueTracker=Yt(e,n,""+e[n])}}function pn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Wt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nn=/[\n"\\]/g;function st(e){return e.replace(Nn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(e,n,a,r,u,f,_,R){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ft(n)):e.value!==""+ft(n)&&(e.value=""+ft(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?xi(e,_,ft(n)):a!=null?xi(e,_,ft(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+ft(R):e.removeAttribute("name")}function kn(e,n,a,r,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){At(e);return}a=a!=null?""+ft(a):"",n=n!=null?""+ft(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),At(e)}function xi(e,n,a){n==="number"&&je(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function qn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ft(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Lt(e,n,a){if(n!=null&&(n=""+ft(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ft(a):""}function rn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if($(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ft(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),At(e)}function Un(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var on=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Si(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||on.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Xi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Si(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Si(e,f,n[f])}function Fs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var __=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),x_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(e){return x_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ki(){}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Is=null,Bs=null;function Wh(e){var n=Ea(e);if(n&&(e=n.stateNode)){var a=e[hn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Dn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[hn]||null;if(!u)throw Error(s(90));Dn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&pn(r)}break e;case"textarea":Lt(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&qn(e,!!a.multiple,n,!1)}}}var $c=!1;function Yh(e,n,a){if($c)return e(n,a);$c=!0;try{var r=e(n);return r}finally{if($c=!1,(Is!==null||Bs!==null)&&(Hl(),Is&&(n=Is,e=Bs,Bs=Is=null,Wh(n),e)))for(n=0;n<e.length;n++)Wh(e[n])}}function Vr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[hn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eu=!1;if(qi)try{var jr={};Object.defineProperty(jr,"passive",{get:function(){eu=!0}}),window.addEventListener("test",jr,jr),window.removeEventListener("test",jr,jr)}catch{eu=!1}var ba=null,tu=null,el=null;function Zh(){if(el)return el;var e,n=tu,a=n.length,r,u="value"in ba?ba.value:ba.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return el=u.slice(e,1<r?1-r:void 0)}function tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function Kh(){return!1}function Fn(e){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nl:Kh,this.isPropagationStopped=Kh,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=Fn(ss),Xr=S({},ss,{view:0,detail:0}),S_=Fn(Xr),nu,iu,kr,al=S({},Xr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(nu=e.screenX-kr.screenX,iu=e.screenY-kr.screenY):iu=nu=0,kr=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),Qh=Fn(al),M_=S({},al,{dataTransfer:0}),y_=Fn(M_),E_=S({},Xr,{relatedTarget:0}),au=Fn(E_),b_=S({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),T_=Fn(b_),A_=S({},ss,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R_=Fn(A_),C_=S({},ss,{data:0}),Jh=Fn(C_),w_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=D_[e])?!!n[e]:!1}function su(){return U_}var L_=S({},Xr,{key:function(e){if(e.key){var n=w_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),O_=Fn(L_),P_=S({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=Fn(P_),z_=S({},Xr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),F_=Fn(z_),I_=S({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),B_=Fn(I_),H_=S({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),G_=Fn(H_),V_=S({},ss,{newState:0,oldState:0}),j_=Fn(V_),X_=[9,13,27,32],ru=qi&&"CompositionEvent"in window,qr=null;qi&&"documentMode"in document&&(qr=document.documentMode);var k_=qi&&"TextEvent"in window&&!qr,ep=qi&&(!ru||qr&&8<qr&&11>=qr),tp=" ",np=!1;function ip(e,n){switch(e){case"keyup":return X_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ap(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hs=!1;function q_(e,n){switch(e){case"compositionend":return ap(n);case"keypress":return n.which!==32?null:(np=!0,tp);case"textInput":return e=n.data,e===tp&&np?null:e;default:return null}}function W_(e,n){if(Hs)return e==="compositionend"||!ru&&ip(e,n)?(e=Zh(),el=tu=ba=null,Hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ep&&n.locale!=="ko"?null:n.data;default:return null}}var Y_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Y_[e.type]:n==="textarea"}function rp(e,n,a,r){Is?Bs?Bs.push(r):Bs=[r]:Is=r,n=Wl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Wr=null,Yr=null;function Z_(e){Vg(e,0)}function sl(e){var n=as(e);if(pn(n))return e}function op(e,n){if(e==="change")return n}var lp=!1;if(qi){var ou;if(qi){var lu="oninput"in document;if(!lu){var cp=document.createElement("div");cp.setAttribute("oninput","return;"),lu=typeof cp.oninput=="function"}ou=lu}else ou=!1;lp=ou&&(!document.documentMode||9<document.documentMode)}function up(){Wr&&(Wr.detachEvent("onpropertychange",fp),Yr=Wr=null)}function fp(e){if(e.propertyName==="value"&&sl(Yr)){var n=[];rp(n,Yr,e,Jc(e)),Yh(Z_,n)}}function K_(e,n,a){e==="focusin"?(up(),Wr=n,Yr=a,Wr.attachEvent("onpropertychange",fp)):e==="focusout"&&up()}function Q_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl(Yr)}function J_(e,n){if(e==="click")return sl(n)}function $_(e,n){if(e==="input"||e==="change")return sl(n)}function ex(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:ex;function Zr(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!qt.call(n,u)||!Wn(e[u],n[u]))return!1}return!0}function dp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hp(e,n){var a=dp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dp(a)}}function pp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?pp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function mp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=je(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=je(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var tx=qi&&"documentMode"in document&&11>=document.documentMode,Gs=null,uu=null,Kr=null,fu=!1;function gp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||Gs==null||Gs!==je(r)||(r=Gs,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Zr(Kr,r)||(Kr=r,r=Wl(uu,"onSelect"),0<r.length&&(n=new il("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Gs)))}function rs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Vs={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},du={},vp={};qi&&(vp=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function os(e){if(du[e])return du[e];if(!Vs[e])return e;var n=Vs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in vp)return du[e]=n[a];return e}var _p=os("animationend"),xp=os("animationiteration"),Sp=os("animationstart"),nx=os("transitionrun"),ix=os("transitionstart"),ax=os("transitioncancel"),Mp=os("transitionend"),yp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function Mi(e,n){yp.set(e,n),K(n,[e])}var rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],js=0,pu=0;function ol(){for(var e=js,n=pu=js=0;n<e;){var a=ai[n];ai[n++]=null;var r=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Ep(a,u,f)}}function ll(e,n,a,r){ai[js++]=e,ai[js++]=n,ai[js++]=a,ai[js++]=r,pu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function mu(e,n,a,r){return ll(e,n,a,r),cl(e)}function ls(e,n){return ll(e,null,null,n),cl(e)}function Ep(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Le(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function cl(e){if(50<xo)throw xo=0,Tf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xs={};function sx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,r){return new sx(e,n,a,r)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ul(e,n,a,r,u,f){var _=0;if(r=e,typeof e=="function")gu(e)&&(_=1);else if(typeof e=="string")_=uS(e,a,Re.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Yn(31,a,n,u),e.elementType=D,e.lanes=f,e;case w:return cs(a.children,u,f,n);case y:_=8,u|=24;break;case M:return e=Yn(12,a,n,u|2),e.elementType=M,e.lanes=f,e;case j:return e=Yn(13,a,n,u),e.elementType=j,e.lanes=f,e;case H:return e=Yn(19,a,n,u),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:_=10;break e;case N:_=9;break e;case U:_=11;break e;case z:_=14;break e;case A:_=16,r=null;break e}_=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Yn(_,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function cs(e,n,a,r){return e=Yn(7,e,r,n),e.lanes=a,e}function vu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function Tp(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function _u(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ap=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=Ap.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Ap.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var ks=[],qs=0,fl=null,Qr=0,ri=[],oi=0,Ta=null,Di=1,Ui="";function Yi(e,n){ks[qs++]=Qr,ks[qs++]=fl,fl=e,Qr=n}function Rp(e,n,a){ri[oi++]=Di,ri[oi++]=Ui,ri[oi++]=Ta,Ta=e;var r=Di;e=Ui;var u=32-Le(r)-1;r&=~(1<<u),a+=1;var f=32-Le(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Di=1<<32-Le(n)+u|a<<u|r,Ui=f+e}else Di=1<<f|a<<u|r,Ui=e}function xu(e){e.return!==null&&(Yi(e,1),Rp(e,1,0))}function Su(e){for(;e===fl;)fl=ks[--qs],ks[qs]=null,Qr=ks[--qs],ks[qs]=null;for(;e===Ta;)Ta=ri[--oi],ri[oi]=null,Ui=ri[--oi],ri[oi]=null,Di=ri[--oi],ri[oi]=null}function Cp(e,n){ri[oi++]=Di,ri[oi++]=Ui,ri[oi++]=Ta,Di=n.id,Ui=n.overflow,Ta=e}var Sn=null,Xt=null,Mt=!1,Aa=null,li=!1,Mu=Error(s(519));function Ra(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jr(si(n,e)),Mu}function wp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[sn]=e,n[hn]=r,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)vt(Mo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),kn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),rn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||qg(n.textContent,a)?(r.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),r.onScroll!=null&&vt("scroll",n),r.onScrollEnd!=null&&vt("scrollend",n),r.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ra(e,!0)}function Np(e){for(Sn=e.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Sn=Sn.return}}function Ws(e){if(e!==Sn)return!1;if(!Mt)return Np(e),Mt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hf(e.type,e.memoizedProps)),a=!a),a&&Xt&&Ra(e),Np(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xt=t0(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Xt=t0(e)}else n===27?(n=Xt,Ga(e.type)?(e=kf,kf=null,Xt=e):Xt=n):Xt=Sn?ui(e.stateNode.nextSibling):null;return!0}function us(){Xt=Sn=null,Mt=!1}function yu(){var e=Aa;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),Aa=null),e}function Jr(e){Aa===null?Aa=[e]:Aa.push(e)}var Eu=P(null),fs=null,Zi=null;function Ca(e,n,a){_e(Eu,n._currentValue),n._currentValue=a}function Ki(e){e._currentValue=Eu.current,Y(Eu)}function bu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Tu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),bu(f.return,a,e),r||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),bu(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ys(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;Wn(u.pendingProps.value,_.value)||(e!==null?e.push(R):e=[R])}}else if(u===xe.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ao):e=[Ao])}u=u.return}e!==null&&Tu(n,e,a,r),n.flags|=262144}function dl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ds(e){fs=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return Dp(fs,e)}function hl(e,n){return fs===null&&ds(e),Dp(e,n)}function Dp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Zi===null){if(e===null)throw Error(s(308));Zi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Zi=Zi.next=n;return a}var rx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ox=o.unstable_scheduleCallback,lx=o.unstable_NormalPriority,ln={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new rx,data:new Map,refCount:0}}function $r(e){e.refCount--,e.refCount===0&&ox(lx,function(){e.controller.abort()})}var eo=null,Ru=0,Zs=0,Ks=null;function cx(e,n){if(eo===null){var a=eo=[];Ru=0,Zs=Df(),Ks={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ru++,n.then(Up,Up),n}function Up(){if(--Ru===0&&eo!==null){Ks!==null&&(Ks.status="fulfilled");var e=eo;eo=null,Zs=0,Ks=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function ux(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Lp=O.S;O.S=function(e,n){gg=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&cx(e,n),Lp!==null&&Lp(e,n)};var hs=P(null);function Cu(){var e=hs.current;return e!==null?e:jt.pooledCache}function pl(e,n){n===null?_e(hs,hs.current):_e(hs,n.pool)}function Op(){var e=Cu();return e===null?null:{parent:ln._currentValue,pool:e}}var Qs=Error(s(460)),wu=Error(s(474)),ml=Error(s(542)),gl={then:function(){}};function Pp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ip(e),e;default:if(typeof n.status=="string")n.then(ki,ki);else{if(e=jt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ip(e),e}throw ms=n,Qs}}function ps(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ms=a,Qs):a}}var ms=null;function Fp(){if(ms===null)throw Error(s(459));var e=ms;return ms=null,e}function Ip(e){if(e===Qs||e===ml)throw Error(s(483))}var Js=null,to=0;function vl(e){var n=to;return to+=1,Js===null&&(Js=[]),zp(Js,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function _l(e,n){throw n.$$typeof===v?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bp(e){function n(Z,X){if(e){var Q=Z.deletions;Q===null?(Z.deletions=[X],Z.flags|=16):Q.push(X)}}function a(Z,X){if(!e)return null;for(;X!==null;)n(Z,X),X=X.sibling;return null}function r(Z){for(var X=new Map;Z!==null;)Z.key!==null?X.set(Z.key,Z):X.set(Z.index,Z),Z=Z.sibling;return X}function u(Z,X){return Z=Wi(Z,X),Z.index=0,Z.sibling=null,Z}function f(Z,X,Q){return Z.index=Q,e?(Q=Z.alternate,Q!==null?(Q=Q.index,Q<X?(Z.flags|=67108866,X):Q):(Z.flags|=67108866,X)):(Z.flags|=1048576,X)}function _(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,X,Q,ge){return X===null||X.tag!==6?(X=vu(Q,Z.mode,ge),X.return=Z,X):(X=u(X,Q),X.return=Z,X)}function B(Z,X,Q,ge){var Je=Q.type;return Je===w?de(Z,X,Q.props.children,ge,Q.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===A&&ps(Je)===X.type)?(X=u(X,Q.props),no(X,Q),X.return=Z,X):(X=ul(Q.type,Q.key,Q.props,null,Z.mode,ge),no(X,Q),X.return=Z,X)}function J(Z,X,Q,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=_u(Q,Z.mode,ge),X.return=Z,X):(X=u(X,Q.children||[]),X.return=Z,X)}function de(Z,X,Q,ge,Je){return X===null||X.tag!==7?(X=cs(Q,Z.mode,ge,Je),X.return=Z,X):(X=u(X,Q),X.return=Z,X)}function ve(Z,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=vu(""+X,Z.mode,Q),X.return=Z,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return Q=ul(X.type,X.key,X.props,null,Z.mode,Q),no(Q,X),Q.return=Z,Q;case T:return X=_u(X,Z.mode,Q),X.return=Z,X;case A:return X=ps(X),ve(Z,X,Q)}if($(X)||ee(X))return X=cs(X,Z.mode,Q,null),X.return=Z,X;if(typeof X.then=="function")return ve(Z,vl(X),Q);if(X.$$typeof===F)return ve(Z,hl(Z,X),Q);_l(Z,X)}return null}function ae(Z,X,Q,ge){var Je=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Je!==null?null:R(Z,X,""+Q,ge);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:return Q.key===Je?B(Z,X,Q,ge):null;case T:return Q.key===Je?J(Z,X,Q,ge):null;case A:return Q=ps(Q),ae(Z,X,Q,ge)}if($(Q)||ee(Q))return Je!==null?null:de(Z,X,Q,ge,null);if(typeof Q.then=="function")return ae(Z,X,vl(Q),ge);if(Q.$$typeof===F)return ae(Z,X,hl(Z,Q),ge);_l(Z,Q)}return null}function oe(Z,X,Q,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Z=Z.get(Q)||null,R(X,Z,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case E:return Z=Z.get(ge.key===null?Q:ge.key)||null,B(X,Z,ge,Je);case T:return Z=Z.get(ge.key===null?Q:ge.key)||null,J(X,Z,ge,Je);case A:return ge=ps(ge),oe(Z,X,Q,ge,Je)}if($(ge)||ee(ge))return Z=Z.get(Q)||null,de(X,Z,ge,Je,null);if(typeof ge.then=="function")return oe(Z,X,Q,vl(ge),Je);if(ge.$$typeof===F)return oe(Z,X,Q,hl(X,ge),Je);_l(X,ge)}return null}function Ge(Z,X,Q,ge){for(var Je=null,Rt=null,Ye=X,dt=X=0,St=null;Ye!==null&&dt<Q.length;dt++){Ye.index>dt?(St=Ye,Ye=null):St=Ye.sibling;var Ct=ae(Z,Ye,Q[dt],ge);if(Ct===null){Ye===null&&(Ye=St);break}e&&Ye&&Ct.alternate===null&&n(Z,Ye),X=f(Ct,X,dt),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct,Ye=St}if(dt===Q.length)return a(Z,Ye),Mt&&Yi(Z,dt),Je;if(Ye===null){for(;dt<Q.length;dt++)Ye=ve(Z,Q[dt],ge),Ye!==null&&(X=f(Ye,X,dt),Rt===null?Je=Ye:Rt.sibling=Ye,Rt=Ye);return Mt&&Yi(Z,dt),Je}for(Ye=r(Ye);dt<Q.length;dt++)St=oe(Ye,Z,dt,Q[dt],ge),St!==null&&(e&&St.alternate!==null&&Ye.delete(St.key===null?dt:St.key),X=f(St,X,dt),Rt===null?Je=St:Rt.sibling=St,Rt=St);return e&&Ye.forEach(function(qa){return n(Z,qa)}),Mt&&Yi(Z,dt),Je}function $e(Z,X,Q,ge){if(Q==null)throw Error(s(151));for(var Je=null,Rt=null,Ye=X,dt=X=0,St=null,Ct=Q.next();Ye!==null&&!Ct.done;dt++,Ct=Q.next()){Ye.index>dt?(St=Ye,Ye=null):St=Ye.sibling;var qa=ae(Z,Ye,Ct.value,ge);if(qa===null){Ye===null&&(Ye=St);break}e&&Ye&&qa.alternate===null&&n(Z,Ye),X=f(qa,X,dt),Rt===null?Je=qa:Rt.sibling=qa,Rt=qa,Ye=St}if(Ct.done)return a(Z,Ye),Mt&&Yi(Z,dt),Je;if(Ye===null){for(;!Ct.done;dt++,Ct=Q.next())Ct=ve(Z,Ct.value,ge),Ct!==null&&(X=f(Ct,X,dt),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct);return Mt&&Yi(Z,dt),Je}for(Ye=r(Ye);!Ct.done;dt++,Ct=Q.next())Ct=oe(Ye,Z,dt,Ct.value,ge),Ct!==null&&(e&&Ct.alternate!==null&&Ye.delete(Ct.key===null?dt:Ct.key),X=f(Ct,X,dt),Rt===null?Je=Ct:Rt.sibling=Ct,Rt=Ct);return e&&Ye.forEach(function(MS){return n(Z,MS)}),Mt&&Yi(Z,dt),Je}function Gt(Z,X,Q,ge){if(typeof Q=="object"&&Q!==null&&Q.type===w&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case E:e:{for(var Je=Q.key;X!==null;){if(X.key===Je){if(Je=Q.type,Je===w){if(X.tag===7){a(Z,X.sibling),ge=u(X,Q.props.children),ge.return=Z,Z=ge;break e}}else if(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===A&&ps(Je)===X.type){a(Z,X.sibling),ge=u(X,Q.props),no(ge,Q),ge.return=Z,Z=ge;break e}a(Z,X);break}else n(Z,X);X=X.sibling}Q.type===w?(ge=cs(Q.props.children,Z.mode,ge,Q.key),ge.return=Z,Z=ge):(ge=ul(Q.type,Q.key,Q.props,null,Z.mode,ge),no(ge,Q),ge.return=Z,Z=ge)}return _(Z);case T:e:{for(Je=Q.key;X!==null;){if(X.key===Je)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(Z,X.sibling),ge=u(X,Q.children||[]),ge.return=Z,Z=ge;break e}else{a(Z,X);break}else n(Z,X);X=X.sibling}ge=_u(Q,Z.mode,ge),ge.return=Z,Z=ge}return _(Z);case A:return Q=ps(Q),Gt(Z,X,Q,ge)}if($(Q))return Ge(Z,X,Q,ge);if(ee(Q)){if(Je=ee(Q),typeof Je!="function")throw Error(s(150));return Q=Je.call(Q),$e(Z,X,Q,ge)}if(typeof Q.then=="function")return Gt(Z,X,vl(Q),ge);if(Q.$$typeof===F)return Gt(Z,X,hl(Z,Q),ge);_l(Z,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(Z,X.sibling),ge=u(X,Q),ge.return=Z,Z=ge):(a(Z,X),ge=vu(Q,Z.mode,ge),ge.return=Z,Z=ge),_(Z)):a(Z,X)}return function(Z,X,Q,ge){try{to=0;var Je=Gt(Z,X,Q,ge);return Js=null,Je}catch(Ye){if(Ye===Qs||Ye===ml)throw Ye;var Rt=Yn(29,Ye,null,Z.mode);return Rt.lanes=ge,Rt.return=Z,Rt}finally{}}}var gs=Bp(!0),Hp=Bp(!1),wa=!1;function Nu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Dt&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=cl(e),Ep(e,null,a),n}return ll(e,r,n,a),cl(e)}function io(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ls(e,a)}}function Uu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lu=!1;function ao(){if(Lu){var e=Ks;if(e!==null)throw e}}function so(e,n,a,r){Lu=!1;var u=e.updateQueue;wa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,J=B.next;B.next=null,_===null?f=J:_.next=J,_=B;var de=e.alternate;de!==null&&(de=de.updateQueue,R=de.lastBaseUpdate,R!==_&&(R===null?de.firstBaseUpdate=J:R.next=J,de.lastBaseUpdate=B))}if(f!==null){var ve=u.baseState;_=0,de=J=B=null,R=f;do{var ae=R.lane&-536870913,oe=ae!==R.lane;if(oe?(xt&ae)===ae:(r&ae)===ae){ae!==0&&ae===Zs&&(Lu=!0),de!==null&&(de=de.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ge=e,$e=R;ae=n;var Gt=a;switch($e.tag){case 1:if(Ge=$e.payload,typeof Ge=="function"){ve=Ge.call(Gt,ve,ae);break e}ve=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=$e.payload,ae=typeof Ge=="function"?Ge.call(Gt,ve,ae):Ge,ae==null)break e;ve=S({},ve,ae);break e;case 2:wa=!0}}ae=R.callback,ae!==null&&(e.flags|=64,oe&&(e.flags|=8192),oe=u.callbacks,oe===null?u.callbacks=[ae]:oe.push(ae))}else oe={lane:ae,tag:R.tag,payload:R.payload,callback:R.callback,next:null},de===null?(J=de=oe,B=ve):de=de.next=oe,_|=ae;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;oe=R,R=oe.next,oe.next=null,u.lastBaseUpdate=oe,u.shared.pending=null}}while(!0);de===null&&(B=ve),u.baseState=B,u.firstBaseUpdate=J,u.lastBaseUpdate=de,f===null&&(u.shared.lanes=0),za|=_,e.lanes=_,e.memoizedState=ve}}function Gp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Vp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Gp(a[e],n)}var $s=P(null),xl=P(0);function jp(e,n){e=sa,_e(xl,e),_e($s,n),sa=e|n.baseLanes}function Ou(){_e(xl,sa),_e($s,$s.current)}function Pu(){sa=xl.current,Y($s),Y(xl)}var Zn=P(null),ci=null;function Ua(e){var n=e.alternate;_e(tn,tn.current&1),_e(Zn,e),ci===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(ci=e)}function zu(e){_e(tn,tn.current),_e(Zn,e),ci===null&&(ci=e)}function Xp(e){e.tag===22?(_e(tn,tn.current),_e(Zn,e),ci===null&&(ci=e)):La()}function La(){_e(tn,tn.current),_e(Zn,Zn.current)}function Kn(e){Y(Zn),ci===e&&(ci=null),Y(tn)}var tn=P(0);function Sl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,ct=null,Bt=null,cn=null,Ml=!1,er=!1,vs=!1,yl=0,ro=0,tr=null,fx=0;function Jt(){throw Error(s(321))}function Fu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Iu(e,n,a,r,u,f){return Qi=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Rm:$u,vs=!1,f=a(r,u),vs=!1,er&&(f=qp(n,a,r,u)),kp(e),f}function kp(e){O.H=co;var n=Bt!==null&&Bt.next!==null;if(Qi=0,cn=Bt=ct=null,Ml=!1,ro=0,tr=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&dl(e)&&(un=!0))}function qp(e,n,a,r){ct=e;var u=0;do{if(er&&(tr=null),ro=0,er=!1,25<=u)throw Error(s(301));if(u+=1,cn=Bt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Cm,f=n(a,r)}while(er);return f}function dx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?oo(n):n,e=e.useState()[0],(Bt!==null?Bt.memoizedState:null)!==e&&(ct.flags|=1024),n}function Bu(){var e=yl!==0;return yl=0,e}function Hu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Gu(e){if(Ml){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ml=!1}Qi=0,cn=Bt=ct=null,er=!1,ro=yl=0,tr=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ct.memoizedState=cn=e:cn=cn.next=e,cn}function nn(){if(Bt===null){var e=ct.alternate;e=e!==null?e.memoizedState:null}else e=Bt.next;var n=cn===null?ct.memoizedState:cn.next;if(n!==null)cn=n,Bt=e;else{if(e===null)throw ct.alternate===null?Error(s(467)):Error(s(310));Bt=e,e={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},cn===null?ct.memoizedState=cn=e:cn=cn.next=e}return cn}function El(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var n=ro;return ro+=1,tr===null&&(tr=[]),e=zp(tr,e,n),n=ct,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Rm:$u),e}function bl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===F)return Mn(e)}throw Error(s(438,String(e)))}function Vu(e){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ct.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=El(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=me;return n.index++,a}function Ji(e,n){return typeof n=="function"?n(e):n}function Tl(e){var n=nn();return ju(n,Bt,e)}function ju(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=_=null,B=null,J=n,de=!1;do{var ve=J.lane&-536870913;if(ve!==J.lane?(xt&ve)===ve:(Qi&ve)===ve){var ae=J.revertLane;if(ae===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ve===Zs&&(de=!0);else if((Qi&ae)===ae){J=J.next,ae===Zs&&(de=!0);continue}else ve={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(R=B=ve,_=f):B=B.next=ve,ct.lanes|=ae,za|=ae;ve=J.action,vs&&a(f,ve),f=J.hasEagerState?J.eagerState:a(f,ve)}else ae={lane:ve,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(R=B=ae,_=f):B=B.next=ae,ct.lanes|=ve,za|=ve;J=J.next}while(J!==null&&J!==n);if(B===null?_=f:B.next=R,!Wn(f,e.memoizedState)&&(un=!0,de&&(a=Ks,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=B,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Xu(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);Wn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Wp(e,n,a){var r=ct,u=nn(),f=Mt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Wn((Bt||u).memoizedState,a);if(_&&(u.memoizedState=a,un=!0),u=u.queue,Wu(Kp.bind(null,r,u,e),[e]),u.getSnapshot!==n||_||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,nr(9,{destroy:void 0},Zp.bind(null,r,u,a,n),null),jt===null)throw Error(s(349));f||(Qi&127)!==0||Yp(r,n,a)}return a}function Yp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=El(),ct.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Zp(e,n,a,r){n.value=a,n.getSnapshot=r,Qp(n)&&Jp(e)}function Kp(e,n,a){return a(function(){Qp(n)&&Jp(e)})}function Qp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Jp(e){var n=ls(e,2);n!==null&&Vn(n,e,2)}function ku(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),vs){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},n}function $p(e,n,a,r){return e.baseState=a,ju(e,Bt,typeof r=="function"?r:Ji)}function hx(e,n,a,r,u){if(Cl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,em(n,f)):(f.next=a.next,n.pending=a.next=f)}}function em(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var R=a(u,r),B=O.S;B!==null&&B(_,R),tm(e,n,R)}catch(J){qu(e,n,J)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(u,r),tm(e,n,f)}catch(J){qu(e,n,J)}}function tm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){nm(e,n,r)},function(r){return qu(e,n,r)}):nm(e,n,a)}function nm(e,n,a){n.status="fulfilled",n.value=a,im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,em(e,a)))}function qu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,im(n),n=n.next;while(n!==r)}e.action=null}function im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function am(e,n){return n}function sm(e,n){if(Mt){var a=jt.formState;if(a!==null){e:{var r=ct;if(Mt){if(Xt){t:{for(var u=Xt,f=li;u.nodeType!==8;){if(!f){u=null;break t}if(u=ui(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Xt=ui(u.nextSibling),r=u.data==="F!";break e}}Ra(r)}r=!1}r&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:am,lastRenderedState:n},a.queue=r,a=bm.bind(null,ct,r),r.dispatch=a,r=ku(!1),f=Ju.bind(null,ct,!1,r.queue),r=Ln(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=hx.bind(null,ct,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function rm(e){var n=nn();return om(n,Bt,e)}function om(e,n,a){if(n=ju(e,n,am)[0],e=Tl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=oo(n)}catch(_){throw _===Qs?ml:_}else r=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,nr(9,{destroy:void 0},px.bind(null,u,a),null)),[r,f,e]}function px(e,n){e.action=n}function lm(e){var n=nn(),a=Bt;if(a!==null)return om(n,a,e);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function nr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ct.updateQueue,n===null&&(n=El(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function cm(){return nn().memoizedState}function Al(e,n,a,r){var u=Ln();ct.flags|=e,u.memoizedState=nr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Rl(e,n,a,r){var u=nn();r=r===void 0?null:r;var f=u.memoizedState.inst;Bt!==null&&r!==null&&Fu(r,Bt.memoizedState.deps)?u.memoizedState=nr(n,f,a,r):(ct.flags|=e,u.memoizedState=nr(1|n,f,a,r))}function um(e,n){Al(8390656,8,e,n)}function Wu(e,n){Rl(2048,8,e,n)}function mx(e){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=El(),ct.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function fm(e){var n=nn().memoizedState;return mx({ref:n,nextImpl:e}),function(){if((Dt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function dm(e,n){return Rl(4,2,e,n)}function hm(e,n){return Rl(4,4,e,n)}function pm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function mm(e,n,a){a=a!=null?a.concat([e]):null,Rl(4,4,pm.bind(null,n,e),a)}function Yu(){}function gm(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Fu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function vm(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Fu(n,r[1]))return r[0];if(r=e(),vs){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[r,n],r}function Zu(e,n,a){return a===void 0||(Qi&1073741824)!==0&&(xt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=_g(),ct.lanes|=e,za|=e,a)}function _m(e,n,a,r){return Wn(a,n)?a:$s.current!==null?(e=Zu(e,a,r),Wn(e,n)||(un=!0),e):(Qi&42)===0||(Qi&1073741824)!==0&&(xt&261930)===0?(un=!0,e.memoizedState=a):(e=_g(),ct.lanes|=e,za|=e,n)}function xm(e,n,a,r,u){var f=I.p;I.p=f!==0&&8>f?f:8;var _=O.T,R={};O.T=R,Ju(e,!1,n,a);try{var B=u(),J=O.S;if(J!==null&&J(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var de=ux(B,r);lo(e,n,de,$n(e))}else lo(e,n,r,$n(e))}catch(ve){lo(e,n,{then:function(){},status:"rejected",reason:ve},$n())}finally{I.p=f,_!==null&&R.types!==null&&(_.types=R.types),O.T=_}}function gx(){}function Ku(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Sm(e).queue;xm(e,u,n,le,a===null?gx:function(){return Mm(e),a(r)})}function Sm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:le},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Mm(e){var n=Sm(e);n.next===null&&(n=e.alternate.memoizedState),lo(e,n.next.queue,{},$n())}function Qu(){return Mn(Ao)}function ym(){return nn().memoizedState}function Em(){return nn().memoizedState}function vx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=Na(a);var r=Da(n,e,a);r!==null&&(Vn(r,n,a),io(r,n,a)),n={cache:Au()},e.payload=n;return}n=n.return}}function _x(e,n,a){var r=$n();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Cl(e)?Tm(n,a):(a=mu(e,n,a,r),a!==null&&(Vn(a,e,r),Am(a,n,r)))}function bm(e,n,a){var r=$n();lo(e,n,a,r)}function lo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cl(e))Tm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,Wn(R,_))return ll(e,n,u,0),jt===null&&ol(),!1}catch{}finally{}if(a=mu(e,n,u,r),a!==null)return Vn(a,e,r),Am(a,n,r),!0}return!1}function Ju(e,n,a,r){if(r={lane:2,revertLane:Df(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Cl(e)){if(n)throw Error(s(479))}else n=mu(e,a,r,2),n!==null&&Vn(n,e,2)}function Cl(e){var n=e.alternate;return e===ct||n!==null&&n===ct}function Tm(e,n){er=Ml=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Am(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ls(e,a)}}var co={readContext:Mn,use:bl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};co.useEffectEvent=Jt;var Rm={readContext:Mn,use:bl,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:um,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Al(4194308,4,pm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Al(4194308,4,e,n)},useInsertionEffect:function(e,n){Al(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var r=e();if(vs){Oe(!0);try{e()}finally{Oe(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Ln();if(a!==void 0){var u=a(n);if(vs){Oe(!0);try{a(n)}finally{Oe(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=_x.bind(null,ct,e),[r.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=ku(e);var n=e.queue,a=bm.bind(null,ct,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Yu,useDeferredValue:function(e,n){var a=Ln();return Zu(a,e,n)},useTransition:function(){var e=ku(!1);return e=xm.bind(null,ct,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ct,u=Ln();if(Mt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),jt===null)throw Error(s(349));(xt&127)!==0||Yp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,um(Kp.bind(null,r,f,e),[e]),r.flags|=2048,nr(9,{destroy:void 0},Zp.bind(null,r,f,a,n),null),a},useId:function(){var e=Ln(),n=jt.identifierPrefix;if(Mt){var a=Ui,r=Di;a=(r&~(1<<32-Le(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=fx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Qu,useFormState:sm,useActionState:sm,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,ct,!0,a),a.dispatch=n,[e,n]},useMemoCache:Vu,useCacheRefresh:function(){return Ln().memoizedState=vx.bind(null,ct)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Dt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:Mn,use:bl,useCallback:gm,useContext:Mn,useEffect:Wu,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:vm,useReducer:Tl,useRef:cm,useState:function(){return Tl(Ji)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=nn();return _m(a,Bt.memoizedState,e,n)},useTransition:function(){var e=Tl(Ji)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Wp,useId:ym,useHostTransitionStatus:Qu,useFormState:rm,useActionState:rm,useOptimistic:function(e,n){var a=nn();return $p(a,Bt,e,n)},useMemoCache:Vu,useCacheRefresh:Em};$u.useEffectEvent=fm;var Cm={readContext:Mn,use:bl,useCallback:gm,useContext:Mn,useEffect:Wu,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:hm,useMemo:vm,useReducer:Xu,useRef:cm,useState:function(){return Xu(Ji)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=nn();return Bt===null?Zu(a,e,n):_m(a,Bt.memoizedState,e,n)},useTransition:function(){var e=Xu(Ji)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:oo(e),n]},useSyncExternalStore:Wp,useId:ym,useHostTransitionStatus:Qu,useFormState:lm,useActionState:lm,useOptimistic:function(e,n){var a=nn();return Bt!==null?$p(a,Bt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:Em};Cm.useEffectEvent=fm;function ef(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var tf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=$n(),u=Na(r);u.payload=n,a!=null&&(u.callback=a),n=Da(e,u,r),n!==null&&(Vn(n,e,r),io(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=$n(),u=Na(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Da(e,u,r),n!==null&&(Vn(n,e,r),io(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),r=Na(a);r.tag=2,n!=null&&(r.callback=n),n=Da(e,r,a),n!==null&&(Vn(n,e,a),io(n,e,a))}};function wm(e,n,a,r,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!Zr(a,r)||!Zr(u,f):!0}function Nm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&tf.enqueueReplaceState(n,n.state,null)}function _s(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Dm(e){rl(e)}function Um(e){console.error(e)}function Lm(e){rl(e)}function wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Om(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(e,n)},a}function Pm(e){return e=Na(e),e.tag=3,e}function zm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Om(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Om(n,a,r),typeof u!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function xx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ys(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Gl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Cf(e,r,u)),!1;case 22:return a.flags|=65536,r===gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Cf(e,r,u)),!1}throw Error(s(435,a.tag))}return Cf(e,r,u),Gl(),!1}if(Mt)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Mu&&(e=Error(s(422),{cause:r}),Jr(si(e,a)))):(r!==Mu&&(n=Error(s(423),{cause:r}),Jr(si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=si(r,a),u=nf(e.stateNode,r,u),Uu(e,u),$t!==4&&($t=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),_o===null?_o=[f]:_o.push(f),$t!==4&&($t=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=nf(a.stateNode,r,e),Uu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fa===null||!Fa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Pm(u),zm(u,e,a,r),Uu(a,u),!1}a=a.return}while(a!==null);return!1}var af=Error(s(461)),un=!1;function yn(e,n,a,r){n.child=e===null?Hp(n,null,a,r):gs(n,e.child,a,r)}function Fm(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var R in r)R!=="ref"&&(_[R]=r[R])}else _=r;return ds(n),r=Iu(e,n,a,_,f,u),R=Bu(),e!==null&&!un?(Hu(e,n,u),$i(e,n,u)):(Mt&&R&&xu(n),n.flags|=1,yn(e,n,r,u),n.child)}function Im(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bm(e,n,f,r,u)):(e=ul(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!df(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zr,a(_,r)&&e.ref===n.ref)return $i(e,n,u)}return n.flags|=1,e=Wi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Bm(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Zr(f,r)&&e.ref===n.ref)if(un=!1,n.pendingProps=r=f,df(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,$i(e,n,u)}return sf(e,n,a,r,u)}function Hm(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Gm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&pl(n,f!==null?f.cachePool:null),f!==null?jp(n,f):Ou(),Xp(n);else return r=n.lanes=536870912,Gm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(pl(n,f.cachePool),jp(n,f),La(),n.memoizedState=null):(e!==null&&pl(n,null),Ou(),La());return yn(e,n,u,a),n.child}function uo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gm(e,n,a,r,u){var f=Cu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&pl(n,null),Ou(),Xp(n),e!==null&&Ys(e,n,r,!0),n.childLanes=u,null}function Nl(e,n){return n=Ul({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Vm(e,n,a){return gs(n,e.child,null,a),e=Nl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function Sx(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Mt){if(r.mode==="hidden")return e=Nl(n,r),n.lanes=536870912,uo(null,e);if(zu(n),(e=Xt)?(e=e0(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Tp(e),a.return=n,n.child=a,Sn=n,Xt=null)):e=null,e===null)throw Ra(n);return n.lanes=536870912,null}return Nl(n,r)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(zu(n),u)if(n.flags&256)n.flags&=-257,n=Vm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Ys(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(r=jt,r!==null&&(_=Zo(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ls(e,_),Vn(r,e,_),af;Gl(),n=Vm(e,n,a)}else e=f.treeContext,Xt=ui(_.nextSibling),Sn=n,Mt=!0,Aa=null,li=!1,e!==null&&Cp(n,e),n=Nl(n,r),n.flags|=4096;return n}return e=Wi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sf(e,n,a,r,u){return ds(n),a=Iu(e,n,a,r,void 0,u),r=Bu(),e!==null&&!un?(Hu(e,n,u),$i(e,n,u)):(Mt&&r&&xu(n),n.flags|=1,yn(e,n,a,u),n.child)}function jm(e,n,a,r,u,f){return ds(n),n.updateQueue=null,a=qp(n,r,a,u),kp(e),r=Bu(),e!==null&&!un?(Hu(e,n,f),$i(e,n,f)):(Mt&&r&&xu(n),n.flags|=1,yn(e,n,a,f),n.child)}function Xm(e,n,a,r,u){if(ds(n),n.stateNode===null){var f=Xs,_=a.contextType;typeof _=="object"&&_!==null&&(f=Mn(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=tf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Nu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Mn(_):Xs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(ef(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&tf.enqueueReplaceState(f,f.state,null),so(n,r,f,u),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,B=_s(a,R);f.props=B;var J=f.context,de=a.contextType;_=Xs,typeof de=="object"&&de!==null&&(_=Mn(de));var ve=a.getDerivedStateFromProps;de=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||J!==_)&&Nm(n,f,r,_),wa=!1;var ae=n.memoizedState;f.state=ae,so(n,r,f,u),ao(),J=n.memoizedState,R||ae!==J||wa?(typeof ve=="function"&&(ef(n,a,ve,r),J=n.memoizedState),(B=wa||wm(n,a,B,r,ae,J,_))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=_,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Du(e,n),_=n.memoizedProps,de=_s(a,_),f.props=de,ve=n.pendingProps,ae=f.context,J=a.contextType,B=Xs,typeof J=="object"&&J!==null&&(B=Mn(J)),R=a.getDerivedStateFromProps,(J=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==ve||ae!==B)&&Nm(n,f,r,B),wa=!1,ae=n.memoizedState,f.state=ae,so(n,r,f,u),ao();var oe=n.memoizedState;_!==ve||ae!==oe||wa||e!==null&&e.dependencies!==null&&dl(e.dependencies)?(typeof R=="function"&&(ef(n,a,R,r),oe=n.memoizedState),(de=wa||wm(n,a,de,r,ae,oe,B)||e!==null&&e.dependencies!==null&&dl(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,oe,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,oe,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=oe),f.props=r,f.state=oe,f.context=B,r=de):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&ae===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&ae===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Dl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=gs(n,e.child,null,u),n.child=gs(n,null,a,u)):yn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=$i(e,n,u),e}function km(e,n,a,r){return us(),n.flags|=256,yn(e,n,a,r),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:Op()}}function lf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function qm(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Mt){if(u?Ua(n):La(),(e=Xt)?(e=e0(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Tp(e),a.return=n,n.child=a,Sn=n,Xt=null)):e=null,e===null)throw Ra(n);return Xf(e)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(La(),u=n.mode,R=Ul({mode:"hidden",children:R},u),r=cs(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=of(a),r.childLanes=lf(e,_,a),n.memoizedState=rf,uo(null,r)):(Ua(n),cf(n,R))}var B=e.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(f)n.flags&256?(Ua(n),n.flags&=-257,n=uf(e,n,a)):n.memoizedState!==null?(La(),n.child=e.child,n.flags|=128,n=null):(La(),R=r.fallback,u=n.mode,r=Ul({mode:"visible",children:r.children},u),R=cs(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,gs(n,e.child,null,a),r=n.child,r.memoizedState=of(a),r.childLanes=lf(e,_,a),n.memoizedState=rf,n=uo(null,r));else if(Ua(n),Xf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var J=_.dgst;_=J,r=Error(s(419)),r.stack="",r.digest=_,Jr({value:r,source:null,stack:null}),n=uf(e,n,a)}else if(un||Ys(e,n,a,!1),_=(a&e.childLanes)!==0,un||_){if(_=jt,_!==null&&(r=Zo(_,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,ls(e,r),Vn(_,e,r),af;jf(R)||Gl(),n=uf(e,n,a)}else jf(R)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Xt=ui(R.nextSibling),Sn=n,Mt=!0,Aa=null,li=!1,e!==null&&Cp(n,e),n=cf(n,r.children),n.flags|=4096);return n}return u?(La(),R=r.fallback,u=n.mode,B=e.child,J=B.sibling,r=Wi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,J!==null?R=Wi(J,R):(R=cs(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,uo(null,r),r=n.child,R=e.child.memoizedState,R===null?R=of(a):(u=R.cachePool,u!==null?(B=ln._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Op(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=lf(e,_,a),n.memoizedState=rf,uo(e.child,r)):(Ua(n),a=e.child,e=a.sibling,a=Wi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function cf(e,n){return n=Ul({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ul(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function uf(e,n,a){return gs(n,e.child,null,a),e=cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Wm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),bu(e.return,n,a)}function ff(e,n,a,r,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function Ym(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=tn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,_e(tn,_),yn(e,n,r,a),r=Mt?Qr:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wm(e,a,n);else if(e.tag===19)Wm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Sl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ff(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Sl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}ff(n,!0,a,null,f,r);break;case"together":ff(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function $i(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ys(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Wi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Wi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function df(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&dl(e)))}function Mx(e,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Ca(n,ln,e.memoizedState.cache),us();break;case 27:case 5:Qe(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?qm(e,n,a):(Ua(n),e=$i(e,n,a),e!==null?e.sibling:null);Ua(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ys(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Ym(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(tn,tn.current),r)break;return null;case 22:return n.lanes=0,Hm(e,n,a,n.pendingProps);case 24:Ca(n,ln,e.memoizedState.cache)}return $i(e,n,a)}function Zm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!df(e,a)&&(n.flags&128)===0)return un=!1,Mx(e,n,a);un=(e.flags&131072)!==0}else un=!1,Mt&&(n.flags&1048576)!==0&&Rp(n,Qr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=ps(n.elementType),n.type=e,typeof e=="function")gu(e)?(r=_s(e,r),n.tag=1,n=Xm(null,n,e,r,a)):(n.tag=0,n=sf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=Fm(null,n,e,r,a);break e}else if(u===z){n.tag=14,n=Im(null,n,e,r,a);break e}}throw n=ce(e)||e,Error(s(306,n,""))}}return n;case 0:return sf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=_s(r,n.pendingProps),Xm(e,n,r,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Du(e,n),so(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Ca(n,ln,r),r!==f.cache&&Tu(n,[ln],a,!0),ao(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=km(e,n,r,a);break e}else if(r!==u){u=si(Error(s(424)),n),Jr(u),n=km(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Xt=ui(e.firstChild),Sn=n,Mt=!0,Aa=null,li=!0,a=Hp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(us(),r===u){n=$i(e,n,a);break e}yn(e,n,r,a)}n=n.child}return n;case 26:return Dl(e,n),e===null?(a=r0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,e=n.pendingProps,r=Yl(ne.current).createElement(a),r[sn]=n,r[hn]=e,En(r,a,e),k(r),n.stateNode=r):n.memoizedState=r0(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qe(n),e===null&&Mt&&(r=n.stateNode=i0(n.type,n.pendingProps,ne.current),Sn=n,li=!0,u=Xt,Ga(n.type)?(kf=u,Xt=ui(r.firstChild)):Xt=u),yn(e,n,n.pendingProps.children,a),Dl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Mt&&((u=r=Xt)&&(r=Qx(r,n.type,n.pendingProps,li),r!==null?(n.stateNode=r,Sn=n,Xt=ui(r.firstChild),li=!1,u=!0):u=!1),u||Ra(n)),Qe(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,r=f.children,Hf(u,f)?r=null:_!==null&&Hf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Iu(e,n,dx,null,null,a),Ao._currentValue=u),Dl(e,n),yn(e,n,r,a),n.child;case 6:return e===null&&Mt&&((e=a=Xt)&&(a=Jx(a,n.pendingProps,li),a!==null?(n.stateNode=a,Sn=n,Xt=null,e=!0):e=!1),e||Ra(n)),null;case 13:return qm(e,n,a);case 4:return Te(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=gs(n,null,r,a):yn(e,n,r,a),n.child;case 11:return Fm(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ca(n,n.type,r.value),yn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ds(n),u=Mn(u),r=r(u),n.flags|=1,yn(e,n,r,a),n.child;case 14:return Im(e,n,n.type,n.pendingProps,a);case 15:return Bm(e,n,n.type,n.pendingProps,a);case 19:return Ym(e,n,a);case 31:return Sx(e,n,a);case 22:return Hm(e,n,a,n.pendingProps);case 24:return ds(n),r=Mn(ln),e===null?(u=Cu(),u===null&&(u=jt,f=Au(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Nu(n),Ca(n,ln,u)):((e.lanes&a)!==0&&(Du(e,n),so(n,null,null,a),ao()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,ln,r)):(r=f.cache,Ca(n,ln,r),r!==u.cache&&Tu(n,[ln],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ea(e){e.flags|=4}function hf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(yg())e.flags|=8192;else throw ms=gl,wu}else e.flags&=-16777217}function Km(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!f0(n))if(yg())e.flags|=8192;else throw ms=gl,wu}function Ll(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pt():536870912,e.lanes|=n,rr|=n)}function fo(e,n){if(!Mt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function kt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function yx(e,n,a){var r=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(n),null;case 1:return kt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ki(ln),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ws(n)?ea(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yu())),kt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ea(n),f!==null?(kt(n),Km(n,f)):(kt(n),hf(n,u,null,r,a))):f?f!==e.memoizedState?(ea(n),kt(n),Km(n,f)):(kt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ea(n),kt(n),hf(n,u,e,r,a)),null;case 27:if(et(n),a=ne.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return kt(n),null}e=Re.current,Ws(n)?wp(n):(e=i0(u,r,a),n.stateNode=e,ea(n))}return kt(n),null;case 5:if(et(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ea(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return kt(n),null}if(f=Re.current,Ws(n))wp(n);else{var _=Yl(ne.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[sn]=n,f[hn]=r;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(En(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ea(n)}}return kt(n),hf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ea(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ne.current,Ws(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Sn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||qg(e.nodeValue,a)),e||Ra(n,!0)}else e=Yl(e).createTextNode(r),e[sn]=n,n.stateNode=e}return kt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Ws(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[sn]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;kt(n),e=!1}else a=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return kt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ws(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[sn]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;kt(n),u=!1}else u=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),kt(n),null);case 4:return Xe(),e===null&&Pf(n.stateNode.containerInfo),kt(n),null;case 10:return Ki(n.type),kt(n),null;case 19:if(Y(tn),r=n.memoizedState,r===null)return kt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)fo(r,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Sl(e),f!==null){for(n.flags|=128,fo(r,!1),e=f.updateQueue,n.updateQueue=e,Ll(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)bp(a,e),a=a.sibling;return _e(tn,tn.current&1|2),Mt&&Yi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&b()>Il&&(n.flags|=128,u=!0,fo(r,!1),n.lanes=4194304)}else{if(!u)if(e=Sl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ll(n,e),fo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Mt)return kt(n),null}else 2*b()-r.renderingStartTime>Il&&a!==536870912&&(n.flags|=128,u=!0,fo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=b(),e.sibling=null,a=tn.current,_e(tn,u?a&1|2:a&1),Mt&&Yi(n,r.treeForkCount),e):(kt(n),null);case 22:case 23:return Kn(n),Pu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(kt(n),n.subtreeFlags&6&&(n.flags|=8192)):kt(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Y(hs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ki(ln),kt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ex(e,n){switch(Su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ki(ln),Xe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(tn),null;case 4:return Xe(),null;case 10:return Ki(n.type),null;case 22:case 23:return Kn(n),Pu(),e!==null&&Y(hs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ki(ln),null;case 25:return null;default:return null}}function Qm(e,n){switch(Su(n),n.tag){case 3:Ki(ln),Xe();break;case 26:case 27:case 5:et(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:Y(tn);break;case 10:Ki(n.type);break;case 22:case 23:Kn(n),Pu(),e!==null&&Y(hs);break;case 24:Ki(ln)}}function ho(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(R){Ft(n,n.return,R)}}function Oa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var _=r.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var B=a,J=R;try{J()}catch(de){Ft(u,B,de)}}}r=r.next}while(r!==f)}}catch(de){Ft(n,n.return,de)}}function Jm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Vp(n,a)}catch(r){Ft(e,e.return,r)}}}function $m(e,n,a){a.props=_s(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ft(e,n,r)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Ft(e,n,u)}}function Li(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ft(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(e,n,u)}else a.current=null}function eg(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ft(e,e.return,u)}}function pf(e,n,a){try{var r=e.stateNode;kx(r,e.type,a,n),r[hn]=n}catch(u){Ft(e,e.return,u)}}function tg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function mf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(r!==4&&(r===27&&Ga(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(gf(e,n,a),e=e.sibling;e!==null;)gf(e,n,a),e=e.sibling}function Ol(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ol(e,n,a),e=e.sibling;e!==null;)Ol(e,n,a),e=e.sibling}function ng(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);En(n,r,a),n[sn]=e,n[hn]=a}catch(f){Ft(e,e.return,f)}}var ta=!1,fn=!1,vf=!1,ig=typeof WeakSet=="function"?WeakSet:Set,_n=null;function bx(e,n){if(e=e.containerInfo,If=tc,e=mp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,B=-1,J=0,de=0,ve=e,ae=null;t:for(;;){for(var oe;ve!==a||u!==0&&ve.nodeType!==3||(R=_+u),ve!==f||r!==0&&ve.nodeType!==3||(B=_+r),ve.nodeType===3&&(_+=ve.nodeValue.length),(oe=ve.firstChild)!==null;)ae=ve,ve=oe;for(;;){if(ve===e)break t;if(ae===a&&++J===u&&(R=_),ae===f&&++de===r&&(B=_),(oe=ve.nextSibling)!==null)break;ve=ae,ae=ve.parentNode}ve=oe}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:e,selectionRange:a},tc=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ge=_s(a.type,u);e=r.getSnapshotBeforeUpdate(Ge,f),r.__reactInternalSnapshotBeforeUpdate=e}catch($e){Ft(a,a.return,$e)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function ag(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),r&4&&ho(5,a);break;case 1:if(ia(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Ft(a,a.return,_)}else{var u=_s(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Ft(a,a.return,_)}}r&64&&Jm(a),r&512&&po(a,a.return);break;case 3:if(ia(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vp(e,n)}catch(_){Ft(a,a.return,_)}}break;case 27:n===null&&r&4&&ng(a);case 26:case 5:ia(e,a),n===null&&r&4&&eg(a),r&512&&po(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),r&4&&og(e,a);break;case 13:ia(e,a),r&4&&lg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Lx.bind(null,a),$x(e,a))));break;case 22:if(r=a.memoizedState!==null||ta,!r){n=n!==null&&n.memoizedState!==null||fn,u=ta;var f=fn;ta=r,(fn=n)&&!f?aa(e,a,(a.subtreeFlags&8772)!==0):ia(e,a),ta=u,fn=f}break;case 30:break;default:ia(e,a)}}function sg(e){var n=e.alternate;n!==null&&(e.alternate=null,sg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Gr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Zt=null,In=!1;function na(e,n,a){for(a=a.child;a!==null;)rg(e,n,a),a=a.sibling}function rg(e,n,a){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(Ee,a)}catch{}switch(a.tag){case 26:fn||Li(a,n),na(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Li(a,n);var r=Zt,u=In;Ga(a.type)&&(Zt=a.stateNode,In=!1),na(e,n,a),Eo(a.stateNode),Zt=r,In=u;break;case 5:fn||Li(a,n);case 6:if(r=Zt,u=In,Zt=null,na(e,n,a),Zt=r,In=u,Zt!==null)if(In)try{(Zt.nodeType===9?Zt.body:Zt.nodeName==="HTML"?Zt.ownerDocument.body:Zt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Zt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Zt!==null&&(In?(e=Zt,Jg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pr(e)):Jg(Zt,a.stateNode));break;case 4:r=Zt,u=In,Zt=a.stateNode.containerInfo,In=!0,na(e,n,a),Zt=r,In=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),fn||Oa(4,a,n),na(e,n,a);break;case 1:fn||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&$m(a,n,r)),na(e,n,a);break;case 21:na(e,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,na(e,n,a),fn=r;break;default:na(e,n,a)}}function og(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pr(e)}catch(a){Ft(n,n.return,a)}}}function lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pr(e)}catch(a){Ft(n,n.return,a)}}function Tx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ig),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ig),n;default:throw Error(s(435,e.tag))}}function Pl(e,n){var a=Tx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Ox.bind(null,e,r);r.then(u,u)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if(Ga(R.type)){Zt=R.stateNode,In=!1;break e}break;case 5:Zt=R.stateNode,In=!1;break e;case 3:case 4:Zt=R.stateNode.containerInfo,In=!0;break e}R=R.return}if(Zt===null)throw Error(s(160));rg(f,_,u),Zt=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)cg(n,e),n=n.sibling}var yi=null;function cg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),Hn(e),r&4&&(Oa(3,e,e.return),ho(3,e),Oa(5,e,e.return));break;case 1:Bn(n,e),Hn(e),r&512&&(fn||a===null||Li(a,a.return)),r&64&&ta&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=yi;if(Bn(n,e),Hn(e),r&512&&(fn||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[is]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),En(f,r,a),f[sn]=e,k(f),r=f;break e;case"link":var _=c0("link","href",u).get(r+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(r),En(f,r,a),u.head.appendChild(f);break;case"meta":if(_=c0("meta","content",u).get(r+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(r),En(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=e,k(f),r=f}e.stateNode=r}else u0(u,e.type,e.stateNode);else e.stateNode=l0(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?u0(u,e.type,e.stateNode):l0(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),Hn(e),r&512&&(fn||a===null||Li(a,a.return)),a!==null&&r&4&&pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),Hn(e),r&512&&(fn||a===null||Li(a,a.return)),e.flags&32){u=e.stateNode;try{Un(u,"")}catch(Ge){Ft(e,e.return,Ge)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,pf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(vf=!0);break;case 6:if(Bn(n,e),Hn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ge){Ft(e,e.return,Ge)}}break;case 3:if(Ql=null,u=yi,yi=Zl(n.containerInfo),Bn(n,e),yi=u,Hn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(Ge){Ft(e,e.return,Ge)}vf&&(vf=!1,ug(e));break;case 4:r=yi,yi=Zl(e.stateNode.containerInfo),Bn(n,e),Hn(e),yi=r;break;case 12:Bn(n,e),Hn(e);break;case 31:Bn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 13:Bn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Fl=b()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=ta,de=fn;if(ta=J||u,fn=de||B,Bn(n,e),fn=de,ta=J,Hn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ta||fn||xs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=B.stateNode;var ve=B.memoizedProps.style,ae=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;R.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(Ge){Ft(B,B.return,Ge)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Ge){Ft(B,B.return,Ge)}}}else if(n.tag===18){if(a===null){B=n;try{var oe=B.stateNode;u?$g(oe,!0):$g(B.stateNode,!1)}catch(Ge){Ft(B,B.return,Ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Pl(e,a))));break;case 19:Bn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Pl(e,r)));break;case 30:break;case 21:break;default:Bn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(tg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=mf(e);Ol(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Un(_,""),a.flags&=-33);var R=mf(e);Ol(e,R,_);break;case 3:case 4:var B=a.stateNode.containerInfo,J=mf(e);gf(e,J,B);break;default:throw Error(s(161))}}catch(de){Ft(e,e.return,de)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ug(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ug(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ag(e,n.alternate,n),n=n.sibling}function xs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),xs(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&$m(n,n.return,a),xs(n);break;case 27:Eo(n.stateNode);case 26:case 5:Li(n,n.return),xs(n);break;case 22:n.memoizedState===null&&xs(n);break;case 30:xs(n);break;default:xs(n)}e=e.sibling}}function aa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:aa(u,f,a),ho(4,f);break;case 1:if(aa(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Ft(r,r.return,J)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Gp(B[u],R)}catch(J){Ft(r,r.return,J)}}a&&_&64&&Jm(f),po(f,f.return);break;case 27:ng(f);case 26:case 5:aa(u,f,a),a&&r===null&&_&4&&eg(f),po(f,f.return);break;case 12:aa(u,f,a);break;case 31:aa(u,f,a),a&&_&4&&og(u,f);break;case 13:aa(u,f,a),a&&_&4&&lg(u,f);break;case 22:f.memoizedState===null&&aa(u,f,a),po(f,f.return);break;case 30:break;default:aa(u,f,a)}n=n.sibling}}function _f(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&$r(a))}function xf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e))}function Ei(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)fg(e,n,a,r),n=n.sibling}function fg(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,r),u&2048&&ho(9,n);break;case 1:Ei(e,n,a,r);break;case 3:Ei(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&$r(e)));break;case 12:if(u&2048){Ei(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ft(n,n.return,B)}}else Ei(e,n,a,r);break;case 31:Ei(e,n,a,r);break;case 13:Ei(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(e,n,a,r):mo(e,n):f._visibility&2?Ei(e,n,a,r):(f._visibility|=2,ir(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&_f(_,n);break;case 24:Ei(e,n,a,r),u&2048&&xf(n.alternate,n);break;default:Ei(e,n,a,r)}}function ir(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,R=a,B=r,J=_.flags;switch(_.tag){case 0:case 11:case 15:ir(f,_,R,B,u),ho(8,_);break;case 23:break;case 22:var de=_.stateNode;_.memoizedState!==null?de._visibility&2?ir(f,_,R,B,u):mo(f,_):(de._visibility|=2,ir(f,_,R,B,u)),u&&J&2048&&_f(_.alternate,_);break;case 24:ir(f,_,R,B,u),u&&J&2048&&xf(_.alternate,_);break;default:ir(f,_,R,B,u)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:mo(a,r),u&2048&&_f(r.alternate,r);break;case 24:mo(a,r),u&2048&&xf(r.alternate,r);break;default:mo(a,r)}n=n.sibling}}var go=8192;function ar(e,n,a){if(e.subtreeFlags&go)for(e=e.child;e!==null;)dg(e,n,a),e=e.sibling}function dg(e,n,a){switch(e.tag){case 26:ar(e,n,a),e.flags&go&&e.memoizedState!==null&&fS(a,yi,e.memoizedState,e.memoizedProps);break;case 5:ar(e,n,a);break;case 3:case 4:var r=yi;yi=Zl(e.stateNode.containerInfo),ar(e,n,a),yi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=go,go=16777216,ar(e,n,a),go=r):ar(e,n,a));break;default:ar(e,n,a)}}function hg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,mg(r,e)}hg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)pg(e),e=e.sibling}function pg(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,zl(e)):vo(e);break;default:vo(e)}}function zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,mg(r,e)}hg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}e=e.sibling}}function mg(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:$r(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else e:for(a=e;_n!==null;){r=_n;var u=r.sibling,f=r.return;if(sg(r),r===a){_n=null;break e}if(u!==null){u.return=f,_n=u;break e}_n=f}}}var Ax={getCacheForType:function(e){var n=Mn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(ln).controller.signal}},Rx=typeof WeakMap=="function"?WeakMap:Map,Dt=0,jt=null,gt=null,xt=0,zt=0,Qn=null,Pa=!1,sr=!1,Sf=!1,sa=0,$t=0,za=0,Ss=0,Mf=0,Jn=0,rr=0,_o=null,Gn=null,yf=!1,Fl=0,gg=0,Il=1/0,Bl=null,Fa=null,mn=0,Ia=null,or=null,ra=0,Ef=0,bf=null,vg=null,xo=0,Tf=null;function $n(){return(Dt&2)!==0&&xt!==0?xt&-xt:O.T!==null?Df():Ni()}function _g(){if(Jn===0)if((xt&536870912)===0||Mt){var e=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function Vn(e,n,a){(e===jt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&(lr(e,0),Ba(e,xt,Jn,!1)),wn(e,a),((Dt&2)===0||e!==jt)&&(e===jt&&((Dt&2)===0&&(Ss|=a),$t===4&&Ba(e,xt,Jn,!1)),Oi(e))}function xg(e,n,a){if((Dt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Be(e,n),u=r?Nx(e,n):Rf(e,n,!0),f=r;do{if(u===0){sr&&!r&&Ba(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Cx(a)){u=Rf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=e;u=_o;var B=R.current.memoizedState.isDehydrated;if(B&&(lr(R,_).flags|=256),_=Rf(R,_,!1),_!==2){if(Sf&&!B){R.errorRecoveryDisabledLanes|=f,Ss|=f,u=4;break e}f=Gn,Gn=u,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){lr(e,0),Ba(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ba(r,n,Jn,!Pa);break e;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Fl+300-b(),10<u)){if(Ba(r,n,Jn,!Pa),ue(r,0,!0)!==0)break e;ra=n,r.timeoutHandle=Kg(Sg.bind(null,r,a,Gn,Bl,yf,n,Jn,Ss,rr,Pa,f,"Throttled",-0,0),u);break e}Sg(r,a,Gn,Bl,yf,n,Jn,Ss,rr,Pa,f,null,-0,0)}}break}while(!0);Oi(e)}function Sg(e,n,a,r,u,f,_,R,B,J,de,ve,ae,oe){if(e.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},dg(n,f,ve);var Ge=(f&62914560)===f?Fl-b():(f&4194048)===f?gg-b():0;if(Ge=dS(ve,Ge),Ge!==null){ra=f,e.cancelPendingCommit=Ge(Cg.bind(null,e,n,f,a,r,u,_,R,B,de,ve,null,ae,oe)),Ba(e,f,_,!J);return}}Cg(e,n,f,a,r,u,_,R,B)}function Cx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Wn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(e,n,a,r){n&=~Mf,n&=~Ss,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Le(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&Hr(e,a,n)}function Hl(){return(Dt&6)===0?(So(0),!1):!0}function Af(){if(gt!==null){if(zt===0)var e=gt.return;else e=gt,Zi=fs=null,Gu(e),Js=null,to=0,e=gt;for(;e!==null;)Qm(e.alternate,e),e=e.return;gt=null}}function lr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Yx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ra=0,Af(),jt=e,gt=a=Wi(e.current,null),xt=n,zt=0,Qn=null,Pa=!1,sr=Be(e,n),Sf=!1,rr=Jn=Mf=Ss=za=$t=0,Gn=_o=null,yf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Le(r),f=1<<u;n|=e[u],r&=~f}return sa=n,ol(),a}function Mg(e,n){ct=null,O.H=co,n===Qs||n===ml?(n=Fp(),zt=3):n===wu?(n=Fp(),zt=4):zt=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,gt===null&&($t=1,wl(e,si(n,e.current)))}function yg(){var e=Zn.current;return e===null?!0:(xt&4194048)===xt?ci===null:(xt&62914560)===xt||(xt&536870912)!==0?e===ci:!1}function Eg(){var e=O.H;return O.H=co,e===null?co:e}function bg(){var e=O.A;return O.A=Ax,e}function Gl(){$t=4,Pa||(xt&4194048)!==xt&&Zn.current!==null||(sr=!0),(za&134217727)===0&&(Ss&134217727)===0||jt===null||Ba(jt,xt,Jn,!1)}function Rf(e,n,a){var r=Dt;Dt|=2;var u=Eg(),f=bg();(jt!==e||xt!==n)&&(Bl=null,lr(e,n)),n=!1;var _=$t;e:do try{if(zt!==0&&gt!==null){var R=gt,B=Qn;switch(zt){case 8:Af(),_=6;break e;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var J=zt;if(zt=0,Qn=null,cr(e,R,B,J),a&&sr){_=0;break e}break;default:J=zt,zt=0,Qn=null,cr(e,R,B,J)}}wx(),_=$t;break}catch(de){Mg(e,de)}while(!0);return n&&e.shellSuspendCounter++,Zi=fs=null,Dt=r,O.H=u,O.A=f,gt===null&&(jt=null,xt=0,ol()),_}function wx(){for(;gt!==null;)Tg(gt)}function Nx(e,n){var a=Dt;Dt|=2;var r=Eg(),u=bg();jt!==e||xt!==n?(Bl=null,Il=b()+500,lr(e,n)):sr=Be(e,n);e:do try{if(zt!==0&&gt!==null){n=gt;var f=Qn;t:switch(zt){case 1:zt=0,Qn=null,cr(e,n,f,1);break;case 2:case 9:if(Pp(f)){zt=0,Qn=null,Ag(n);break}n=function(){zt!==2&&zt!==9||jt!==e||(zt=7),Oi(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Pp(f)?(zt=0,Qn=null,Ag(n)):(zt=0,Qn=null,cr(e,n,f,7));break;case 5:var _=null;switch(gt.tag){case 26:_=gt.memoizedState;case 5:case 27:var R=gt;if(_?f0(_):R.stateNode.complete){zt=0,Qn=null;var B=R.sibling;if(B!==null)gt=B;else{var J=R.return;J!==null?(gt=J,Vl(J)):gt=null}break t}}zt=0,Qn=null,cr(e,n,f,5);break;case 6:zt=0,Qn=null,cr(e,n,f,6);break;case 8:Af(),$t=6;break e;default:throw Error(s(462))}}Dx();break}catch(de){Mg(e,de)}while(!0);return Zi=fs=null,O.H=r,O.A=u,Dt=a,gt!==null?0:(jt=null,xt=0,ol(),$t)}function Dx(){for(;gt!==null&&!We();)Tg(gt)}function Tg(e){var n=Zm(e.alternate,e,sa);e.memoizedProps=e.pendingProps,n===null?Vl(e):gt=n}function Ag(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=jm(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=jm(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:Gu(n);default:Qm(a,n),n=gt=bp(n,sa),n=Zm(a,n,sa)}e.memoizedProps=e.pendingProps,n===null?Vl(e):gt=n}function cr(e,n,a,r){Zi=fs=null,Gu(n),Js=null,to=0;var u=n.return;try{if(xx(e,u,n,a,xt)){$t=1,wl(e,si(a,e.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;$t=1,wl(e,si(a,e.current)),gt=null;return}n.flags&32768?(Mt||r===1?e=!0:sr||(xt&536870912)!==0?e=!1:(Pa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Zn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Rg(n,e)):Vl(n)}function Vl(e){var n=e;do{if((n.flags&32768)!==0){Rg(n,Pa);return}e=n.return;var a=yx(n.alternate,n,sa);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);$t===0&&($t=5)}function Rg(e,n){do{var a=Ex(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);$t=6,gt=null}function Cg(e,n,a,r,u,f,_,R,B){e.cancelPendingCommit=null;do jl();while(mn!==0);if((Dt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=pu,vi(e,a,f,_,R,B),e===jt&&(gt=jt=null,xt=0),or=n,Ia=e,ra=a,Ef=f,bf=u,vg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Px(fe,function(){return Lg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,u=I.p,I.p=2,_=Dt,Dt|=4;try{bx(e,n,a)}finally{Dt=_,I.p=u,O.T=r}}mn=1,wg(),Ng(),Dg()}}function wg(){if(mn===1){mn=0;var e=Ia,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=I.p;I.p=2;var u=Dt;Dt|=4;try{cg(n,e);var f=Bf,_=mp(e.containerInfo),R=f.focusedElem,B=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&pp(R.ownerDocument.documentElement,R)){if(B!==null&&cu(R)){var J=B.start,de=B.end;if(de===void 0&&(de=J),"selectionStart"in R)R.selectionStart=J,R.selectionEnd=Math.min(de,R.value.length);else{var ve=R.ownerDocument||document,ae=ve&&ve.defaultView||window;if(ae.getSelection){var oe=ae.getSelection(),Ge=R.textContent.length,$e=Math.min(B.start,Ge),Gt=B.end===void 0?$e:Math.min(B.end,Ge);!oe.extend&&$e>Gt&&(_=Gt,Gt=$e,$e=_);var Z=hp(R,$e),X=hp(R,Gt);if(Z&&X&&(oe.rangeCount!==1||oe.anchorNode!==Z.node||oe.anchorOffset!==Z.offset||oe.focusNode!==X.node||oe.focusOffset!==X.offset)){var Q=ve.createRange();Q.setStart(Z.node,Z.offset),oe.removeAllRanges(),$e>Gt?(oe.addRange(Q),oe.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),oe.addRange(Q))}}}}for(ve=[],oe=R;oe=oe.parentNode;)oe.nodeType===1&&ve.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ve.length;R++){var ge=ve[R];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}tc=!!If,Bf=If=null}finally{Dt=u,I.p=r,O.T=a}}e.current=n,mn=2}}function Ng(){if(mn===2){mn=0;var e=Ia,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=I.p;I.p=2;var u=Dt;Dt|=4;try{ag(e,n.alternate,n)}finally{Dt=u,I.p=r,O.T=a}}mn=3}}function Dg(){if(mn===4||mn===3){mn=0,L();var e=Ia,n=or,a=ra,r=vg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,or=Ia=null,Ug(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Fa=null),Ps(a),n=n.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(Ee,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,u=I.p,I.p=2,O.T=null;try{for(var f=e.onRecoverableError,_=0;_<r.length;_++){var R=r[_];f(R.value,{componentStack:R.stack})}}finally{O.T=n,I.p=u}}(ra&3)!==0&&jl(),Oi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Tf?xo++:(xo=0,Tf=e):xo=0,So(0)}}function Ug(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,$r(n)))}function jl(){return wg(),Ng(),Dg(),Lg()}function Lg(){if(mn!==5)return!1;var e=Ia,n=Ef;Ef=0;var a=Ps(ra),r=O.T,u=I.p;try{I.p=32>a?32:a,O.T=null,a=bf,bf=null;var f=Ia,_=ra;if(mn=0,or=Ia=null,ra=0,(Dt&6)!==0)throw Error(s(331));var R=Dt;if(Dt|=4,pg(f.current),fg(f,f.current,_,a),Dt=R,So(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(Ee,f)}catch{}return!0}finally{I.p=u,O.T=r,Ug(e,n)}}function Og(e,n,a){n=si(a,n),n=nf(e.stateNode,n,2),e=Da(e,n,2),e!==null&&(wn(e,2),Oi(e))}function Ft(e,n,a){if(e.tag===3)Og(e,e,a);else for(;n!==null;){if(n.tag===3){Og(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Fa===null||!Fa.has(r))){e=si(a,e),a=Pm(2),r=Da(n,a,2),r!==null&&(zm(a,r,n,e),wn(r,2),Oi(r));break}}n=n.return}}function Cf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Rx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Sf=!0,u.add(a),e=Ux.bind(null,e,n,a),n.then(e,e))}function Ux(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,jt===e&&(xt&a)===a&&($t===4||$t===3&&(xt&62914560)===xt&&300>b()-Fl?(Dt&2)===0&&lr(e,0):Mf|=a,rr===xt&&(rr=0)),Oi(e)}function Pg(e,n){n===0&&(n=Pt()),e=ls(e,n),e!==null&&(wn(e,n),Oi(e))}function Lx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Pg(e,a)}function Ox(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Pg(e,a)}function Px(e,n){return Et(e,n)}var Xl=null,ur=null,wf=!1,kl=!1,Nf=!1,Ha=0;function Oi(e){e!==ur&&e.next===null&&(ur===null?Xl=ur=e:ur=ur.next=e),kl=!0,wf||(wf=!0,Fx())}function So(e,n){if(!Nf&&kl){Nf=!0;do for(var a=!1,r=Xl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Le(42|e)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Bg(r,f))}else f=xt,f=ue(r,r===jt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Be(r,f)||(a=!0,Bg(r,f));r=r.next}while(a);Nf=!1}}function zx(){zg()}function zg(){kl=wf=!1;var e=0;Ha!==0&&Wx()&&(e=Ha);for(var n=b(),a=null,r=Xl;r!==null;){var u=r.next,f=Fg(r,n);f===0?(r.next=null,a===null?Xl=u:a.next=u,u===null&&(ur=a)):(a=r,(e!==0||(f&3)!==0)&&(kl=!0)),r=u}mn!==0&&mn!==5||So(e),Ha!==0&&(Ha=0)}function Fg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-Le(f),R=1<<_,B=u[_];B===-1?((R&a)===0||(R&r)!==0)&&(u[_]=it(R,n)):B<=n&&(e.expiredLanes|=R),f&=~R}if(n=jt,a=xt,a=ue(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ut(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Be(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ut(r),Ps(a)){case 2:case 8:a=Se;break;case 32:a=fe;break;case 268435456:a=we;break;default:a=fe}return r=Ig.bind(null,e),a=Et(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ut(r),e.callbackPriority=2,e.callbackNode=null,2}function Ig(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var r=xt;return r=ue(e,e===jt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(xg(e,r,n),Fg(e,b()),e.callbackNode!=null&&e.callbackNode===a?Ig.bind(null,e):null)}function Bg(e,n){if(jl())return null;xg(e,n,!0)}function Fx(){Zx(function(){(Dt&6)!==0?Et(pe,zx):zg()})}function Df(){if(Ha===0){var e=Zs;e===0&&(e=Ce,Ce<<=1,(Ce&261888)===0&&(Ce=256)),Ha=e}return Ha}function Hg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$o(""+e)}function Gg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Ix(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Hg((u[hn]||null).action),_=r.submitter;_&&(n=(n=_[hn]||null)?Hg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new il("action","action",null,r,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ha!==0){var B=_?Gg(u,_):new FormData(u);Ku(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=_?Gg(u,_):new FormData(u),Ku(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Uf=0;Uf<hu.length;Uf++){var Lf=hu[Uf],Bx=Lf.toLowerCase(),Hx=Lf[0].toUpperCase()+Lf.slice(1);Mi(Bx,"on"+Hx)}Mi(_p,"onAnimationEnd"),Mi(xp,"onAnimationIteration"),Mi(Sp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(nx,"onTransitionRun"),Mi(ix,"onTransitionStart"),Mi(ax,"onTransitionCancel"),Mi(Mp,"onTransitionEnd"),Ne("onMouseEnter",["mouseout","mouseover"]),Ne("onMouseLeave",["mouseout","mouseover"]),Ne("onPointerEnter",["pointerout","pointerover"]),Ne("onPointerLeave",["pointerout","pointerover"]),K("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),K("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),K("onBeforeInput",["compositionend","keypress","textInput","paste"]),K("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),K("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function Vg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var R=r[_],B=R.instance,J=R.currentTarget;if(R=R.listener,B!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=J;try{f(u)}catch(de){rl(de)}u.currentTarget=null,f=B}else for(_=0;_<r.length;_++){if(R=r[_],B=R.instance,J=R.currentTarget,R=R.listener,B!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=J;try{f(u)}catch(de){rl(de)}u.currentTarget=null,f=B}}}}function vt(e,n){var a=n[Ma];a===void 0&&(a=n[Ma]=new Set);var r=e+"__bubble";a.has(r)||(jg(n,e,2,!1),a.add(r))}function Of(e,n,a){var r=0;n&&(r|=4),jg(a,e,r,n)}var ql="_reactListening"+Math.random().toString(36).slice(2);function Pf(e){if(!e[ql]){e[ql]=!0,re.forEach(function(a){a!=="selectionchange"&&(Gx.has(a)||Of(a,!1,e),Of(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ql]||(n[ql]=!0,Of("selectionchange",!1,n))}}function jg(e,n,a,r){switch(_0(n)){case 2:var u=mS;break;case 8:u=gS;break;default:u=Kf}a=u.bind(null,n,a,e),u=void 0,!eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function zf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var R=r.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=r.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=ya(R),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){r=f=_;continue e}R=R.parentNode}}r=r.return}Yh(function(){var J=f,de=Jc(a),ve=[];e:{var ae=yp.get(e);if(ae!==void 0){var oe=il,Ge=e;switch(e){case"keypress":if(tl(a)===0)break e;case"keydown":case"keyup":oe=O_;break;case"focusin":Ge="focus",oe=au;break;case"focusout":Ge="blur",oe=au;break;case"beforeblur":case"afterblur":oe=au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=F_;break;case _p:case xp:case Sp:oe=T_;break;case Mp:oe=B_;break;case"scroll":case"scrollend":oe=S_;break;case"wheel":oe=G_;break;case"copy":case"cut":case"paste":oe=R_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=$h;break;case"toggle":case"beforetoggle":oe=j_}var $e=(n&4)!==0,Gt=!$e&&(e==="scroll"||e==="scrollend"),Z=$e?ae!==null?ae+"Capture":null:ae;$e=[];for(var X=J,Q;X!==null;){var ge=X;if(Q=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||Q===null||Z===null||(ge=Vr(X,Z),ge!=null&&$e.push(yo(X,ge,Q))),Gt)break;X=X.return}0<$e.length&&(ae=new oe(ae,Ge,null,a,de),ve.push({event:ae,listeners:$e}))}}if((n&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",oe=e==="mouseout"||e==="pointerout",ae&&a!==Qc&&(Ge=a.relatedTarget||a.fromElement)&&(ya(Ge)||Ge[ji]))break e;if((oe||ae)&&(ae=de.window===de?de:(ae=de.ownerDocument)?ae.defaultView||ae.parentWindow:window,oe?(Ge=a.relatedTarget||a.toElement,oe=J,Ge=Ge?ya(Ge):null,Ge!==null&&(Gt=c(Ge),$e=Ge.tag,Ge!==Gt||$e!==5&&$e!==27&&$e!==6)&&(Ge=null)):(oe=null,Ge=J),oe!==Ge)){if($e=Qh,ge="onMouseLeave",Z="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&($e=$h,ge="onPointerLeave",Z="onPointerEnter",X="pointer"),Gt=oe==null?ae:as(oe),Q=Ge==null?ae:as(Ge),ae=new $e(ge,X+"leave",oe,a,de),ae.target=Gt,ae.relatedTarget=Q,ge=null,ya(de)===J&&($e=new $e(Z,X+"enter",Ge,a,de),$e.target=Q,$e.relatedTarget=Gt,ge=$e),Gt=ge,oe&&Ge)t:{for($e=Vx,Z=oe,X=Ge,Q=0,ge=Z;ge;ge=$e(ge))Q++;ge=0;for(var Je=X;Je;Je=$e(Je))ge++;for(;0<Q-ge;)Z=$e(Z),Q--;for(;0<ge-Q;)X=$e(X),ge--;for(;Q--;){if(Z===X||X!==null&&Z===X.alternate){$e=Z;break t}Z=$e(Z),X=$e(X)}$e=null}else $e=null;oe!==null&&Xg(ve,ae,oe,$e,!1),Ge!==null&&Gt!==null&&Xg(ve,Gt,Ge,$e,!0)}}e:{if(ae=J?as(J):window,oe=ae.nodeName&&ae.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ae.type==="file")var Rt=op;else if(sp(ae))if(lp)Rt=$_;else{Rt=Q_;var Ye=K_}else oe=ae.nodeName,!oe||oe.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?J&&Fs(J.elementType)&&(Rt=op):Rt=J_;if(Rt&&(Rt=Rt(e,J))){rp(ve,Rt,a,de);break e}Ye&&Ye(e,ae,J),e==="focusout"&&J&&ae.type==="number"&&J.memoizedProps.value!=null&&xi(ae,"number",ae.value)}switch(Ye=J?as(J):window,e){case"focusin":(sp(Ye)||Ye.contentEditable==="true")&&(Gs=Ye,uu=J,Kr=null);break;case"focusout":Kr=uu=Gs=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,gp(ve,a,de);break;case"selectionchange":if(tx)break;case"keydown":case"keyup":gp(ve,a,de)}var dt;if(ru)e:{switch(e){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Hs?ip(e,a)&&(St="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(ep&&a.locale!=="ko"&&(Hs||St!=="onCompositionStart"?St==="onCompositionEnd"&&Hs&&(dt=Zh()):(ba=de,tu="value"in ba?ba.value:ba.textContent,Hs=!0)),Ye=Wl(J,St),0<Ye.length&&(St=new Jh(St,e,null,a,de),ve.push({event:St,listeners:Ye}),dt?St.data=dt:(dt=ap(a),dt!==null&&(St.data=dt)))),(dt=k_?q_(e,a):W_(e,a))&&(St=Wl(J,"onBeforeInput"),0<St.length&&(Ye=new Jh("onBeforeInput","beforeinput",null,a,de),ve.push({event:Ye,listeners:St}),Ye.data=dt)),Ix(ve,e,J,a,de)}Vg(ve,n)})}function yo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Wl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Vr(e,a),u!=null&&r.unshift(yo(e,u,f)),u=Vr(e,n),u!=null&&r.push(yo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function Vx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xg(e,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var R=a,B=R.alternate,J=R.stateNode;if(R=R.tag,B!==null&&B===r)break;R!==5&&R!==26&&R!==27||J===null||(B=J,u?(J=Vr(a,f),J!=null&&_.unshift(yo(a,J,B))):u||(J=Vr(a,f),J!=null&&_.push(yo(a,J,B)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var jx=/\r\n?/g,Xx=/\u0000|\uFFFD/g;function kg(e){return(typeof e=="string"?e:""+e).replace(jx,`
`).replace(Xx,"")}function qg(e,n){return n=kg(n),kg(e)===n}function Ht(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Un(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Un(e,""+r);break;case"className":rt(e,"class",r);break;case"tabIndex":rt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":rt(e,a,r);break;case"style":Xi(e,r,f);break;case"data":if(n!=="object"){rt(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=$o(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ht(e,n,"name",u.name,u,null),Ht(e,n,"formEncType",u.formEncType,u,null),Ht(e,n,"formMethod",u.formMethod,u,null),Ht(e,n,"formTarget",u.formTarget,u,null)):(Ht(e,n,"encType",u.encType,u,null),Ht(e,n,"method",u.method,u,null),Ht(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=$o(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ki);break;case"onScroll":r!=null&&vt("scroll",e);break;case"onScrollEnd":r!=null&&vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=$o(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":vt("beforetoggle",e),vt("toggle",e),nt(e,"popover",r);break;case"xlinkActuate":He(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":He(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":He(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":He(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":He(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":He(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":He(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":He(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":He(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":nt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=__.get(a)||a,nt(e,a,r))}}function Ff(e,n,a,r,u,f){switch(a){case"style":Xi(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Un(e,r):(typeof r=="number"||typeof r=="bigint")&&Un(e,""+r);break;case"onScroll":r!=null&&vt("scroll",e);break;case"onScrollEnd":r!=null&&vt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!te.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):nt(e,a,r)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",e),vt("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(e,n,f,_,a,null)}}u&&Ht(e,n,"srcSet",a.srcSet,a,null),r&&Ht(e,n,"src",a.src,a,null);return;case"input":vt("invalid",e);var R=f=_=u=null,B=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var de=a[r];if(de!=null)switch(r){case"name":u=de;break;case"type":_=de;break;case"checked":B=de;break;case"defaultChecked":J=de;break;case"value":f=de;break;case"defaultValue":R=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Ht(e,n,r,de,a,null)}}kn(e,f,R,B,J,_,u,!1);return;case"select":vt("invalid",e),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":r=R;default:Ht(e,n,u,R,a,null)}n=f,a=_,e.multiple=!!r,n!=null?qn(e,!!r,n,!1):a!=null&&qn(e,!!r,a,!0);return;case"textarea":vt("invalid",e),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ht(e,n,_,R,a,null)}rn(e,r,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ht(e,n,B,r,a,null)}return;case"dialog":vt("beforetoggle",e),vt("toggle",e),vt("cancel",e),vt("close",e);break;case"iframe":case"object":vt("load",e);break;case"video":case"audio":for(r=0;r<Mo.length;r++)vt(Mo[r],e);break;case"image":vt("error",e),vt("load",e);break;case"details":vt("toggle",e);break;case"embed":case"source":case"link":vt("error",e),vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ht(e,n,J,r,a,null)}return;default:if(Fs(n)){for(de in a)a.hasOwnProperty(de)&&(r=a[de],r!==void 0&&Ff(e,n,de,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Ht(e,n,R,r,a,null))}function kx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,B=null,J=null,de=null;for(oe in a){var ve=a[oe];if(a.hasOwnProperty(oe)&&ve!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":B=ve;default:r.hasOwnProperty(oe)||Ht(e,n,oe,null,r,ve)}}for(var ae in r){var oe=r[ae];if(ve=a[ae],r.hasOwnProperty(ae)&&(oe!=null||ve!=null))switch(ae){case"type":f=oe;break;case"name":u=oe;break;case"checked":J=oe;break;case"defaultChecked":de=oe;break;case"value":_=oe;break;case"defaultValue":R=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:oe!==ve&&Ht(e,n,ae,oe,r,ve)}}Dn(e,_,R,B,J,de,f,u);return;case"select":oe=_=R=ae=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":oe=B;default:r.hasOwnProperty(f)||Ht(e,n,f,null,r,B)}for(u in r)if(f=r[u],B=a[u],r.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":ae=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==B&&Ht(e,n,u,f,r,B)}n=R,a=_,r=oe,ae!=null?qn(e,!!a,ae,!1):!!r!=!!a&&(n!=null?qn(e,!!a,n,!0):qn(e,!!a,a?[]:"",!1));return;case"textarea":oe=ae=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ht(e,n,R,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":ae=u;break;case"defaultValue":oe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ht(e,n,_,u,r,f)}Lt(e,ae,oe);return;case"option":for(var Ge in a)if(ae=a[Ge],a.hasOwnProperty(Ge)&&ae!=null&&!r.hasOwnProperty(Ge))switch(Ge){case"selected":e.selected=!1;break;default:Ht(e,n,Ge,null,r,ae)}for(B in r)if(ae=r[B],oe=a[B],r.hasOwnProperty(B)&&ae!==oe&&(ae!=null||oe!=null))switch(B){case"selected":e.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Ht(e,n,B,ae,r,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)ae=a[$e],a.hasOwnProperty($e)&&ae!=null&&!r.hasOwnProperty($e)&&Ht(e,n,$e,null,r,ae);for(J in r)if(ae=r[J],oe=a[J],r.hasOwnProperty(J)&&ae!==oe&&(ae!=null||oe!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(s(137,n));break;default:Ht(e,n,J,ae,r,oe)}return;default:if(Fs(n)){for(var Gt in a)ae=a[Gt],a.hasOwnProperty(Gt)&&ae!==void 0&&!r.hasOwnProperty(Gt)&&Ff(e,n,Gt,void 0,r,ae);for(de in r)ae=r[de],oe=a[de],!r.hasOwnProperty(de)||ae===oe||ae===void 0&&oe===void 0||Ff(e,n,de,ae,r,oe);return}}for(var Z in a)ae=a[Z],a.hasOwnProperty(Z)&&ae!=null&&!r.hasOwnProperty(Z)&&Ht(e,n,Z,null,r,ae);for(ve in r)ae=r[ve],oe=a[ve],!r.hasOwnProperty(ve)||ae===oe||ae==null&&oe==null||Ht(e,n,ve,ae,r,oe)}function Wg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&Wg(_)){for(_=0,R=u.responseEnd,r+=1;r<a.length;r++){var B=a[r],J=B.startTime;if(J>R)break;var de=B.transferSize,ve=B.initiatorType;de&&Wg(ve)&&(B=B.responseEnd,_+=de*(B<R?1:(R-J)/(B-J)))}if(--r,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var If=null,Bf=null;function Yl(e){return e.nodeType===9?e:e.ownerDocument}function Yg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function Wx(){var e=window.event;return e&&e.type==="popstate"?e===Gf?!1:(Gf=e,!0):(Gf=null,!1)}var Kg=typeof setTimeout=="function"?setTimeout:void 0,Yx=typeof clearTimeout=="function"?clearTimeout:void 0,Qg=typeof Promise=="function"?Promise:void 0,Zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Qg<"u"?function(e){return Qg.resolve(null).then(e).catch(Kx)}:Kg;function Kx(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function Jg(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),pr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Eo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[is]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Eo(e.ownerDocument.body);a=u}while(a);pr(n)}function $g(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Vf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),Gr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Qx(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[is])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function Jx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function e0(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function jf(e){return e.data==="$?"||e.data==="$~"}function Xf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $x(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var kf=null;function t0(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function n0(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function i0(e,n,a){switch(n=Yl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Gr(e)}var fi=new Map,a0=new Set;function Zl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var oa=I.d;I.d={f:eS,r:tS,D:nS,C:iS,L:aS,m:sS,X:oS,S:rS,M:lS};function eS(){var e=oa.f(),n=Hl();return e||n}function tS(e){var n=Ea(e);n!==null&&n.tag===5&&n.type==="form"?Mm(n):oa.r(e)}var fr=typeof document>"u"?null:document;function s0(e,n,a){var r=fr;if(r&&typeof n=="string"&&n){var u=st(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),a0.has(u)||(a0.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),En(n,"link",e),k(n),r.head.appendChild(n)))}}function nS(e){oa.D(e),s0("dns-prefetch",e,null)}function iS(e,n){oa.C(e,n),s0("preconnect",e,n)}function aS(e,n,a){oa.L(e,n,a);var r=fr;if(r&&e&&n){var u='link[rel="preload"][as="'+st(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+st(a.imageSizes)+'"]')):u+='[href="'+st(e)+'"]';var f=u;switch(n){case"style":f=dr(e);break;case"script":f=hr(e)}fi.has(f)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(bo(f))||n==="script"&&r.querySelector(To(f))||(n=r.createElement("link"),En(n,"link",e),k(n),r.head.appendChild(n)))}}function sS(e,n){oa.m(e,n);var a=fr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+st(r)+'"][href="'+st(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=hr(e)}if(!fi.has(f)&&(e=S({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(f)))return}r=a.createElement("link"),En(r,"link",e),k(r),a.head.appendChild(r)}}}function rS(e,n,a){oa.S(e,n,a);var r=fr;if(r&&e){var u=C(r).hoistableStyles,f=dr(e);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=r.querySelector(bo(f)))R.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&qf(e,a);var B=_=r.createElement("link");k(B),En(B,"link",e),B._p=new Promise(function(J,de){B.onload=J,B.onerror=de}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Kl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function oS(e,n){oa.X(e,n);var a=fr;if(a&&e){var r=C(a).hoistableScripts,u=hr(e),f=r.get(u);f||(f=a.querySelector(To(u)),f||(e=S({src:e,async:!0},n),(n=fi.get(u))&&Wf(e,n),f=a.createElement("script"),k(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function lS(e,n){oa.M(e,n);var a=fr;if(a&&e){var r=C(a).hoistableScripts,u=hr(e),f=r.get(u);f||(f=a.querySelector(To(u)),f||(e=S({src:e,async:!0,type:"module"},n),(n=fi.get(u))&&Wf(e,n),f=a.createElement("script"),k(f),En(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function r0(e,n,a,r){var u=(u=ne.current)?Zl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=dr(a.href),a=C(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=dr(a.href);var f=C(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(bo(e)))&&!f._p&&(_.instance=f,_.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||cS(u,e,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hr(a),a=C(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function dr(e){return'href="'+st(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function o0(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function cS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),En(n,"link",a),k(n),e.head.appendChild(n))}function hr(e){return'[src="'+st(e)+'"]'}function To(e){return"script[async]"+e}function l0(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+st(a.href)+'"]');if(r)return n.instance=r,k(r),r;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),k(r),En(r,"style",u),Kl(r,a.precedence,e),n.instance=r;case"stylesheet":u=dr(a.href);var f=e.querySelector(bo(u));if(f)return n.state.loading|=4,n.instance=f,k(f),f;r=o0(a),(u=fi.get(u))&&qf(r,u),f=(e.ownerDocument||e).createElement("link"),k(f);var _=f;return _._p=new Promise(function(R,B){_.onload=R,_.onerror=B}),En(f,"link",r),n.state.loading|=4,Kl(f,a.precedence,e),n.instance=f;case"script":return f=hr(a.src),(u=e.querySelector(To(f)))?(n.instance=u,k(u),u):(r=a,(u=fi.get(f))&&(r=S({},a),Wf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),k(u),En(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Kl(r,a.precedence,e));return n.instance}function Kl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var R=r[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Ql=null;function c0(e,n,a){if(Ql===null){var r=new Map,u=Ql=new Map;u.set(a,r)}else u=Ql,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[is]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var R=r.get(_);R?R.push(f):r.set(_,[f])}}return r}function u0(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function uS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function f0(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=dr(r.href),f=n.querySelector(bo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,k(f);return}f=n.ownerDocument||n,r=o0(r),(u=fi.get(u))&&qf(r,u),f=f.createElement("link"),k(f);var _=f;_._p=new Promise(function(R,B){_.onload=R,_.onerror=B}),En(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Yf=0;function dS(e,n){return e.stylesheets&&e.count===0&&ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Yf===0&&(Yf=62500*qx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ec(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Yf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $l=null;function ec(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$l=new Map,n.forEach(hS,e),$l=null,Jl.call(e))}function hS(e,n){if(!(n.state.loading&4)){var a=$l.get(e);if(a)var r=a.get(null);else{a=new Map,$l.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=Jl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ao={$$typeof:F,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function pS(e,n,a,r,u,f,_,R,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bt(0),this.hiddenUpdates=bt(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function d0(e,n,a,r,u,f,_,R,B,J,de,ve){return e=new pS(e,n,a,_,B,J,de,ve,R),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=Au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Nu(f),e}function h0(e){return e?(e=Xs,e):Xs}function p0(e,n,a,r,u,f){u=h0(u),r.context===null?r.context=u:r.pendingContext=u,r=Na(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Da(e,r,n),a!==null&&(Vn(a,e,n),io(a,e,n))}function m0(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Zf(e,n){m0(e,n),(e=e.alternate)&&m0(e,n)}function g0(e){if(e.tag===13||e.tag===31){var n=ls(e,67108864);n!==null&&Vn(n,e,67108864),Zf(e,67108864)}}function v0(e){if(e.tag===13||e.tag===31){var n=$n();n=Os(n);var a=ls(e,n);a!==null&&Vn(a,e,n),Zf(e,n)}}var tc=!0;function mS(e,n,a,r){var u=O.T;O.T=null;var f=I.p;try{I.p=2,Kf(e,n,a,r)}finally{I.p=f,O.T=u}}function gS(e,n,a,r){var u=O.T;O.T=null;var f=I.p;try{I.p=8,Kf(e,n,a,r)}finally{I.p=f,O.T=u}}function Kf(e,n,a,r){if(tc){var u=Qf(r);if(u===null)zf(e,n,r,nc,a),x0(e,r);else if(_S(u,e,n,a,r))r.stopPropagation();else if(x0(e,r),n&4&&-1<vS.indexOf(e)){for(;u!==null;){var f=Ea(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=ye(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var B=1<<31-Le(_);R.entanglements[1]|=B,_&=~B}Oi(f),(Dt&6)===0&&(Il=b()+500,So(0))}}break;case 31:case 13:R=ls(f,2),R!==null&&Vn(R,f,2),Hl(),Zf(f,2)}if(f=Qf(r),f===null&&zf(e,n,r,nc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else zf(e,n,r,null,a)}}function Qf(e){return e=Jc(e),Jf(e)}var nc=null;function Jf(e){if(nc=null,e=ya(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=m(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return nc=e,null}function _0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case pe:return 2;case Se:return 8;case fe:case ke:return 32;case we:return 268435456;default:return 32}default:return 32}}var $f=!1,Va=null,ja=null,Xa=null,Ro=new Map,Co=new Map,ka=[],vS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x0(e,n){switch(e){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(n.pointerId)}}function wo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ea(n),n!==null&&g0(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function _S(e,n,a,r,u){switch(n){case"focusin":return Va=wo(Va,e,n,a,r,u),!0;case"dragenter":return ja=wo(ja,e,n,a,r,u),!0;case"mouseover":return Xa=wo(Xa,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Ro.set(f,wo(Ro.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Co.set(f,wo(Co.get(f)||null,e,n,a,r,u)),!0}return!1}function S0(e){var n=ya(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,zs(e.priority,function(){v0(a)});return}}else if(n===31){if(n=m(a),n!==null){e.blockedOn=n,zs(e.priority,function(){v0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ic(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Qc=r,a.target.dispatchEvent(r),Qc=null}else return n=Ea(a),n!==null&&g0(n),e.blockedOn=a,!1;n.shift()}return!0}function M0(e,n,a){ic(e)&&a.delete(n)}function xS(){$f=!1,Va!==null&&ic(Va)&&(Va=null),ja!==null&&ic(ja)&&(ja=null),Xa!==null&&ic(Xa)&&(Xa=null),Ro.forEach(M0),Co.forEach(M0)}function ac(e,n){e.blockedOn===n&&(e.blockedOn=null,$f||($f=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,xS)))}var sc=null;function y0(e){sc!==e&&(sc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){sc===e&&(sc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Jf(r||a)===null)continue;break}var f=Ea(a);f!==null&&(e.splice(n,3),n-=3,Ku(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function pr(e){function n(B){return ac(B,e)}Va!==null&&ac(Va,e),ja!==null&&ac(ja,e),Xa!==null&&ac(Xa,e),Ro.forEach(n),Co.forEach(n);for(var a=0;a<ka.length;a++){var r=ka[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)S0(a),a.blockedOn===null&&ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[hn]||null;if(typeof f=="function")_||y0(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[hn]||null)R=_.formAction;else if(Jf(u)!==null)continue}else R=_.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),y0(a)}}}function E0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ed(e){this._internalRoot=e}rc.prototype.render=ed.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=$n();p0(a,r,e,n,null,null)},rc.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;p0(e.current,2,null,e,null,null),Hl(),n[ji]=null}};function rc(e){this._internalRoot=e}rc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ni();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,e),a===0&&S0(e)}};var b0=t.version;if(b0!=="19.2.4")throw Error(s(527,b0,"19.2.4"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var SS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{Ee=oc.inject(SS),Me=oc}catch{}}return Do.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Dm,f=Um,_=Lm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=d0(e,1,!1,null,null,a,r,null,u,f,_,E0),e[ji]=n.current,Pf(e),new ed(n)},Do.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Dm,_=Um,R=Lm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=d0(e,1,!0,n,a??null,r,u,B,f,_,R,E0),n.context=h0(null),a=n.current,r=$n(),r=Os(r),u=Na(r),u.callback=null,Da(a,u,r),a=r,n.current.lanes=a,wn(n,a),Oi(n),e[ji]=n.current,Pf(e),new rc(n)},Do.version="19.2.4",Do}var O0;function DS(){if(O0)return id.exports;O0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),id.exports=NS(),id.exports}var US=DS();const LS=Pv(US);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zh="183",OS=0,P0=1,PS=2,Pc=1,zS=2,Ho=3,ns=0,Xn=1,ha=2,ma=0,wr=1,Gd=2,z0=3,F0=4,FS=5,Cs=100,IS=101,BS=102,HS=103,GS=104,VS=200,jS=201,XS=202,kS=203,Vd=204,jd=205,qS=206,WS=207,YS=208,ZS=209,KS=210,QS=211,JS=212,$S=213,eM=214,Xd=0,kd=1,qd=2,Dr=3,Wd=4,Yd=5,Zd=6,Kd=7,zv=0,tM=1,nM=2,Hi=0,Fv=1,Iv=2,Bv=3,Hv=4,Gv=5,Vv=6,jv=7,Xv=300,Us=301,Ur=302,od=303,ld=304,Wc=306,Qd=1e3,pa=1001,Jd=1002,bn=1003,iM=1004,lc=1005,Cn=1006,cd=1007,Ns=1008,mi=1009,kv=1010,qv=1011,Vo=1012,Fh=1013,Vi=1014,Ii=1015,va=1016,Ih=1017,Bh=1018,jo=1020,Wv=35902,Yv=35899,Zv=1021,Kv=1022,Ci=1023,_a=1026,Ds=1027,Qv=1028,Hh=1029,Lr=1030,Gh=1031,Vh=1033,zc=33776,Fc=33777,Ic=33778,Bc=33779,$d=35840,eh=35841,th=35842,nh=35843,ih=36196,ah=37492,sh=37496,rh=37488,oh=37489,lh=37490,ch=37491,uh=37808,fh=37809,dh=37810,hh=37811,ph=37812,mh=37813,gh=37814,vh=37815,_h=37816,xh=37817,Sh=37818,Mh=37819,yh=37820,Eh=37821,bh=36492,Th=36494,Ah=36495,Rh=36283,Ch=36284,wh=36285,Nh=36286,aM=3200,sM=0,rM=1,$a="",hi="srgb",Or="srgb-linear",Gc="linear",It="srgb",mr=7680,I0=519,oM=512,lM=513,cM=514,jh=515,uM=516,fM=517,Xh=518,dM=519,B0=35044,H0="300 es",Bi=2e3,Vc=2001;function hM(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function jc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function pM(){const o=jc("canvas");return o.style.display="block",o}const G0={};function V0(...o){const t="THREE."+o.shift();console.log(t,...o)}function Jv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function at(...o){o=Jv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function wt(...o){o=Jv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function Xc(...o){const t=o.join(" ");t in G0||(G0[t]=!0,at(...o))}function mM(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const gM={[Xd]:kd,[qd]:Zd,[Wd]:Kd,[Dr]:Yd,[kd]:Xd,[Zd]:qd,[Kd]:Wd,[Yd]:Dr};class zr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=Math.PI/180,Dh=180/Math.PI;function ko(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(An[o&255]+An[o>>8&255]+An[o>>16&255]+An[o>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[i&63|128]+An[i>>8&255]+"-"+An[i>>16&255]+An[i>>24&255]+An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]).toLowerCase()}function yt(o,t,i){return Math.max(t,Math.min(i,o))}function vM(o,t){return(o%t+t)%t}function fd(o,t,i){return(1-i)*o+i*t}function Uo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(t=0,i=0){Vt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(yt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,m){let g=s[l+0],h=s[l+1],x=s[l+2],S=s[l+3],v=c[d+0],E=c[d+1],T=c[d+2],w=c[d+3];if(S!==w||g!==v||h!==E||x!==T){let y=g*v+h*E+x*T+S*w;y<0&&(v=-v,E=-E,T=-T,w=-w,y=-y);let M=1-m;if(y<.9995){const N=Math.acos(y),F=Math.sin(N);M=Math.sin(M*N)/F,m=Math.sin(m*N)/F,g=g*M+v*m,h=h*M+E*m,x=x*M+T*m,S=S*M+w*m}else{g=g*M+v*m,h=h*M+E*m,x=x*M+T*m,S=S*M+w*m;const N=1/Math.sqrt(g*g+h*h+x*x+S*S);g*=N,h*=N,x*=N,S*=N}}t[i]=g,t[i+1]=h,t[i+2]=x,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,c,d){const m=s[l],g=s[l+1],h=s[l+2],x=s[l+3],S=c[d],v=c[d+1],E=c[d+2],T=c[d+3];return t[i]=m*T+x*S+g*E-h*v,t[i+1]=g*T+x*v+h*S-m*E,t[i+2]=h*T+x*E+m*v-g*S,t[i+3]=x*T-m*S-g*v-h*E,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,m=Math.cos,g=Math.sin,h=m(s/2),x=m(l/2),S=m(c/2),v=g(s/2),E=g(l/2),T=g(c/2);switch(d){case"XYZ":this._x=v*x*S+h*E*T,this._y=h*E*S-v*x*T,this._z=h*x*T+v*E*S,this._w=h*x*S-v*E*T;break;case"YXZ":this._x=v*x*S+h*E*T,this._y=h*E*S-v*x*T,this._z=h*x*T-v*E*S,this._w=h*x*S+v*E*T;break;case"ZXY":this._x=v*x*S-h*E*T,this._y=h*E*S+v*x*T,this._z=h*x*T+v*E*S,this._w=h*x*S-v*E*T;break;case"ZYX":this._x=v*x*S-h*E*T,this._y=h*E*S+v*x*T,this._z=h*x*T-v*E*S,this._w=h*x*S+v*E*T;break;case"YZX":this._x=v*x*S+h*E*T,this._y=h*E*S+v*x*T,this._z=h*x*T-v*E*S,this._w=h*x*S-v*E*T;break;case"XZY":this._x=v*x*S-h*E*T,this._y=h*E*S-v*x*T,this._z=h*x*T+v*E*S,this._w=h*x*S+v*E*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],m=i[5],g=i[9],h=i[2],x=i[6],S=i[10],v=s+m+S;if(v>0){const E=.5/Math.sqrt(v+1);this._w=.25/E,this._x=(x-g)*E,this._y=(c-h)*E,this._z=(d-l)*E}else if(s>m&&s>S){const E=2*Math.sqrt(1+s-m-S);this._w=(x-g)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+h)/E}else if(m>S){const E=2*Math.sqrt(1+m-s-S);this._w=(c-h)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(g+x)/E}else{const E=2*Math.sqrt(1+S-s-m);this._w=(d-l)/E,this._x=(c+h)/E,this._y=(g+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yt(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,m=i._x,g=i._y,h=i._z,x=i._w;return this._x=s*x+d*m+l*h-c*g,this._y=l*x+d*g+c*m-s*h,this._z=c*x+d*h+s*g-l*m,this._w=d*x-s*m-l*g-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,m=this.dot(t);m<0&&(s=-s,l=-l,c=-c,d=-d,m=-m);let g=1-i;if(m<.9995){const h=Math.acos(m),x=Math.sin(h);g=Math.sin(g*h)/x,i=Math.sin(i*h)/x,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(t=0,i=0,s=0){ie.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(j0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(j0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,m=t.z,g=t.w,h=2*(d*l-m*s),x=2*(m*i-c*l),S=2*(c*s-d*i);return this.x=i+g*h+d*S-m*x,this.y=s+g*x+m*h-c*S,this.z=l+g*S+c*x-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,m=i.y,g=i.z;return this.x=l*g-c*m,this.y=c*d-s*g,this.z=s*m-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return dd.copy(this).projectOnVector(t),this.sub(dd)}reflect(t){return this.sub(dd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(yt(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dd=new ie,j0=new Fr;class ht{constructor(t,i,s,l,c,d,m,g,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,m,g,h)}set(t,i,s,l,c,d,m,g,h){const x=this.elements;return x[0]=t,x[1]=l,x[2]=m,x[3]=i,x[4]=c,x[5]=g,x[6]=s,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],m=s[3],g=s[6],h=s[1],x=s[4],S=s[7],v=s[2],E=s[5],T=s[8],w=l[0],y=l[3],M=l[6],N=l[1],F=l[4],U=l[7],j=l[2],H=l[5],z=l[8];return c[0]=d*w+m*N+g*j,c[3]=d*y+m*F+g*H,c[6]=d*M+m*U+g*z,c[1]=h*w+x*N+S*j,c[4]=h*y+x*F+S*H,c[7]=h*M+x*U+S*z,c[2]=v*w+E*N+T*j,c[5]=v*y+E*F+T*H,c[8]=v*M+E*U+T*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],m=t[5],g=t[6],h=t[7],x=t[8];return i*d*x-i*m*h-s*c*x+s*m*g+l*c*h-l*d*g}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],m=t[5],g=t[6],h=t[7],x=t[8],S=x*d-m*h,v=m*g-x*c,E=h*c-d*g,T=i*S+s*v+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=S*w,t[1]=(l*h-x*s)*w,t[2]=(m*s-l*d)*w,t[3]=v*w,t[4]=(x*i-l*g)*w,t[5]=(l*c-m*i)*w,t[6]=E*w,t[7]=(s*g-h*i)*w,t[8]=(d*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,m){const g=Math.cos(c),h=Math.sin(c);return this.set(s*g,s*h,-s*(g*d+h*m)+d+t,-l*h,l*g,-l*(-h*d+g*m)+m+i,0,0,1),this}scale(t,i){return this.premultiply(hd.makeScale(t,i)),this}rotate(t){return this.premultiply(hd.makeRotation(-t)),this}translate(t,i){return this.premultiply(hd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hd=new ht,X0=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),k0=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _M(){const o={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===It&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===It&&(l.r=Nr(l.r),l.g=Nr(l.g),l.b=Nr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?Gc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Xc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Xc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Or]:{primaries:t,whitePoint:s,transfer:Gc,toXYZ:X0,fromXYZ:k0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:t,whitePoint:s,transfer:It,toXYZ:X0,fromXYZ:k0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),o}const Tt=_M();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Nr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gr;class xM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{gr===void 0&&(gr=jc("canvas")),gr.width=t.width,gr.height=t.height;const l=gr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=jc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ga(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ga(i[s]/255)*255):i[s]=ga(i[s]);return{data:i,width:t.width,height:t.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let SM=0;class kh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=ko(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,m=l.length;d<m;d++)l[d].isDataTexture?c.push(pd(l[d].image)):c.push(pd(l[d]))}else c=pd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function pd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?xM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let MM=0;const md=new ie;class Pn extends zr{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=pa,l=pa,c=Cn,d=Ns,m=Ci,g=mi,h=Pn.DEFAULT_ANISOTROPY,x=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=ko(),this.name="",this.source=new kh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=m,this.internalFormat=null,this.type=g,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(md).x}get height(){return this.source.getSize(md).y}get depth(){return this.source.getSize(md).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qd:t.x=t.x-Math.floor(t.x);break;case pa:t.x=t.x<0?0:1;break;case Jd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qd:t.y=t.y-Math.floor(t.y);break;case pa:t.y=t.y<0?0:1;break;case Jd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Xv;Pn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const g=t.elements,h=g[0],x=g[4],S=g[8],v=g[1],E=g[5],T=g[9],w=g[2],y=g[6],M=g[10];if(Math.abs(x-v)<.01&&Math.abs(S-w)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+v)<.1&&Math.abs(S+w)<.1&&Math.abs(T+y)<.1&&Math.abs(h+E+M-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(h+1)/2,U=(E+1)/2,j=(M+1)/2,H=(x+v)/4,z=(S+w)/4,A=(T+y)/4;return F>U&&F>j?F<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(F),l=H/s,c=z/s):U>j?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=H/l,c=A/l):j<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(j),s=z/c,l=A/c),this.set(s,l,c,i),this}let N=Math.sqrt((y-T)*(y-T)+(S-w)*(S-w)+(v-x)*(v-x));return Math.abs(N)<.001&&(N=1),this.x=(y-T)/N,this.y=(S-w)/N,this.z=(v-x)/N,this.w=Math.acos((h+E+M-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this.w=yt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this.w=yt(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(yt(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yM extends zr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Pn(l),d=s.count;for(let m=0;m<d;m++)this.textures[m]=c.clone(),this.textures[m].isRenderTargetTexture=!0,this.textures[m].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new kh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends yM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class $v extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=bn,this.minFilter=bn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class EM extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=bn,this.minFilter=bn,this.wrapR=pa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(t,i,s,l,c,d,m,g,h,x,S,v,E,T,w,y){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,m,g,h,x,S,v,E,T,w,y)}set(t,i,s,l,c,d,m,g,h,x,S,v,E,T,w,y){const M=this.elements;return M[0]=t,M[4]=i,M[8]=s,M[12]=l,M[1]=c,M[5]=d,M[9]=m,M[13]=g,M[2]=h,M[6]=x,M[10]=S,M[14]=v,M[3]=E,M[7]=T,M[11]=w,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/vr.setFromMatrixColumn(t,0).length(),c=1/vr.setFromMatrixColumn(t,1).length(),d=1/vr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),m=Math.sin(s),g=Math.cos(l),h=Math.sin(l),x=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const v=d*x,E=d*S,T=m*x,w=m*S;i[0]=g*x,i[4]=-g*S,i[8]=h,i[1]=E+T*h,i[5]=v-w*h,i[9]=-m*g,i[2]=w-v*h,i[6]=T+E*h,i[10]=d*g}else if(t.order==="YXZ"){const v=g*x,E=g*S,T=h*x,w=h*S;i[0]=v+w*m,i[4]=T*m-E,i[8]=d*h,i[1]=d*S,i[5]=d*x,i[9]=-m,i[2]=E*m-T,i[6]=w+v*m,i[10]=d*g}else if(t.order==="ZXY"){const v=g*x,E=g*S,T=h*x,w=h*S;i[0]=v-w*m,i[4]=-d*S,i[8]=T+E*m,i[1]=E+T*m,i[5]=d*x,i[9]=w-v*m,i[2]=-d*h,i[6]=m,i[10]=d*g}else if(t.order==="ZYX"){const v=d*x,E=d*S,T=m*x,w=m*S;i[0]=g*x,i[4]=T*h-E,i[8]=v*h+w,i[1]=g*S,i[5]=w*h+v,i[9]=E*h-T,i[2]=-h,i[6]=m*g,i[10]=d*g}else if(t.order==="YZX"){const v=d*g,E=d*h,T=m*g,w=m*h;i[0]=g*x,i[4]=w-v*S,i[8]=T*S+E,i[1]=S,i[5]=d*x,i[9]=-m*x,i[2]=-h*x,i[6]=E*S+T,i[10]=v-w*S}else if(t.order==="XZY"){const v=d*g,E=d*h,T=m*g,w=m*h;i[0]=g*x,i[4]=-S,i[8]=h*x,i[1]=v*S+w,i[5]=d*x,i[9]=E*S-T,i[2]=T*S-E,i[6]=m*x,i[10]=w*S+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bM,t,TM)}lookAt(t,i,s){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Wa.crossVectors(s,ei),Wa.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Wa.crossVectors(s,ei)),Wa.normalize(),cc.crossVectors(ei,Wa),l[0]=Wa.x,l[4]=cc.x,l[8]=ei.x,l[1]=Wa.y,l[5]=cc.y,l[9]=ei.y,l[2]=Wa.z,l[6]=cc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],m=s[4],g=s[8],h=s[12],x=s[1],S=s[5],v=s[9],E=s[13],T=s[2],w=s[6],y=s[10],M=s[14],N=s[3],F=s[7],U=s[11],j=s[15],H=l[0],z=l[4],A=l[8],D=l[12],me=l[1],G=l[5],ee=l[9],se=l[13],ce=l[2],$=l[6],O=l[10],I=l[14],le=l[3],he=l[7],be=l[11],P=l[15];return c[0]=d*H+m*me+g*ce+h*le,c[4]=d*z+m*G+g*$+h*he,c[8]=d*A+m*ee+g*O+h*be,c[12]=d*D+m*se+g*I+h*P,c[1]=x*H+S*me+v*ce+E*le,c[5]=x*z+S*G+v*$+E*he,c[9]=x*A+S*ee+v*O+E*be,c[13]=x*D+S*se+v*I+E*P,c[2]=T*H+w*me+y*ce+M*le,c[6]=T*z+w*G+y*$+M*he,c[10]=T*A+w*ee+y*O+M*be,c[14]=T*D+w*se+y*I+M*P,c[3]=N*H+F*me+U*ce+j*le,c[7]=N*z+F*G+U*$+j*he,c[11]=N*A+F*ee+U*O+j*be,c[15]=N*D+F*se+U*I+j*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],m=t[5],g=t[9],h=t[13],x=t[2],S=t[6],v=t[10],E=t[14],T=t[3],w=t[7],y=t[11],M=t[15],N=g*E-h*v,F=m*E-h*S,U=m*v-g*S,j=d*E-h*x,H=d*v-g*x,z=d*S-m*x;return i*(w*N-y*F+M*U)-s*(T*N-y*j+M*H)+l*(T*F-w*j+M*z)-c*(T*U-w*H+y*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],m=t[5],g=t[6],h=t[7],x=t[8],S=t[9],v=t[10],E=t[11],T=t[12],w=t[13],y=t[14],M=t[15],N=i*m-s*d,F=i*g-l*d,U=i*h-c*d,j=s*g-l*m,H=s*h-c*m,z=l*h-c*g,A=x*w-S*T,D=x*y-v*T,me=x*M-E*T,G=S*y-v*w,ee=S*M-E*w,se=v*M-E*y,ce=N*se-F*ee+U*G+j*me-H*D+z*A;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/ce;return t[0]=(m*se-g*ee+h*G)*$,t[1]=(l*ee-s*se-c*G)*$,t[2]=(w*z-y*H+M*j)*$,t[3]=(v*H-S*z-E*j)*$,t[4]=(g*me-d*se-h*D)*$,t[5]=(i*se-l*me+c*D)*$,t[6]=(y*U-T*z-M*F)*$,t[7]=(x*z-v*U+E*F)*$,t[8]=(d*ee-m*me+h*A)*$,t[9]=(s*me-i*ee-c*A)*$,t[10]=(T*H-w*U+M*N)*$,t[11]=(S*U-x*H-E*N)*$,t[12]=(m*D-d*G-g*A)*$,t[13]=(i*G-s*D+l*A)*$,t[14]=(w*F-T*j-y*N)*$,t[15]=(x*j-S*F+v*N)*$,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,m=t.y,g=t.z,h=c*d,x=c*m;return this.set(h*d+s,h*m-l*g,h*g+l*m,0,h*m+l*g,x*m+s,x*g-l*d,0,h*g-l*m,x*g+l*d,c*g*g+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,m=i._z,g=i._w,h=c+c,x=d+d,S=m+m,v=c*h,E=c*x,T=c*S,w=d*x,y=d*S,M=m*S,N=g*h,F=g*x,U=g*S,j=s.x,H=s.y,z=s.z;return l[0]=(1-(w+M))*j,l[1]=(E+U)*j,l[2]=(T-F)*j,l[3]=0,l[4]=(E-U)*H,l[5]=(1-(v+M))*H,l[6]=(y+N)*H,l[7]=0,l[8]=(T+F)*z,l[9]=(y-N)*z,l[10]=(1-(v+w))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=vr.set(l[0],l[1],l[2]).length();const m=vr.set(l[4],l[5],l[6]).length(),g=vr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),bi.copy(this);const h=1/d,x=1/m,S=1/g;return bi.elements[0]*=h,bi.elements[1]*=h,bi.elements[2]*=h,bi.elements[4]*=x,bi.elements[5]*=x,bi.elements[6]*=x,bi.elements[8]*=S,bi.elements[9]*=S,bi.elements[10]*=S,i.setFromRotationMatrix(bi),s.x=d,s.y=m,s.z=g,this}makePerspective(t,i,s,l,c,d,m=Bi,g=!1){const h=this.elements,x=2*c/(i-t),S=2*c/(s-l),v=(i+t)/(i-t),E=(s+l)/(s-l);let T,w;if(g)T=c/(d-c),w=d*c/(d-c);else if(m===Bi)T=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(m===Vc)T=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+m);return h[0]=x,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=S,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,d,m=Bi,g=!1){const h=this.elements,x=2/(i-t),S=2/(s-l),v=-(i+t)/(i-t),E=-(s+l)/(s-l);let T,w;if(g)T=1/(d-c),w=d/(d-c);else if(m===Bi)T=-2/(d-c),w=-(d+c)/(d-c);else if(m===Vc)T=-1/(d-c),w=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+m);return h[0]=x,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=S,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=T,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const vr=new ie,bi=new en,bM=new ie(0,0,0),TM=new ie(1,1,1),Wa=new ie,cc=new ie,ei=new ie,q0=new en,W0=new Fr;class xa{constructor(t=0,i=0,s=0,l=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],m=l[8],g=l[1],h=l[5],x=l[9],S=l[2],v=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(m,E),this._z=Math.atan2(g,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-yt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(v,E),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(m,E));break;case"XZY":this._z=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(m,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return q0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(q0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return W0.setFromEuler(this),this.setFromQuaternion(W0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class e_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let AM=0;const Y0=new ie,_r=new Fr,la=new en,uc=new ie,Lo=new ie,RM=new ie,CM=new Fr,Z0=new ie(1,0,0),K0=new ie(0,1,0),Q0=new ie(0,0,1),J0={type:"added"},wM={type:"removed"},xr={type:"childadded",child:null},gd={type:"childremoved",child:null};class zn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const t=new ie,i=new xa,s=new Fr,l=new ie(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ht}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return _r.setFromAxisAngle(t,i),this.quaternion.multiply(_r),this}rotateOnWorldAxis(t,i){return _r.setFromAxisAngle(t,i),this.quaternion.premultiply(_r),this}rotateX(t){return this.rotateOnAxis(Z0,t)}rotateY(t){return this.rotateOnAxis(K0,t)}rotateZ(t){return this.rotateOnAxis(Q0,t)}translateOnAxis(t,i){return Y0.copy(t).applyQuaternion(this.quaternion),this.position.add(Y0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Z0,t)}translateY(t){return this.translateOnAxis(K0,t)}translateZ(t){return this.translateOnAxis(Q0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?uc.copy(t):uc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Lo,uc,this.up):la.lookAt(uc,Lo,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),_r.setFromRotationMatrix(la),this.quaternion.premultiply(_r.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(J0),xr.child=t,this.dispatchEvent(xr),xr.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(wM),gd.child=t,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),la.multiply(t.parent.matrixWorld)),t.applyMatrix4(la),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(J0),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,t,RM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,CM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(m=>({...m,boundingBox:m.boundingBox?m.boundingBox.toJSON():void 0,boundingSphere:m.boundingSphere?m.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(m=>({...m})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(m,g){return m[g.uuid]===void 0&&(m[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const m=this.geometry.parameters;if(m!==void 0&&m.shapes!==void 0){const g=m.shapes;if(Array.isArray(g))for(let h=0,x=g.length;h<x;h++){const S=g[h];c(t.shapes,S)}else c(t.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const m=[];for(let g=0,h=this.material.length;g<h;g++)m.push(c(t.materials,this.material[g]));l.material=m}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let m=0;m<this.children.length;m++)l.children.push(this.children[m].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let m=0;m<this.animations.length;m++){const g=this.animations[m];l.animations.push(c(t.animations,g))}}if(i){const m=d(t.geometries),g=d(t.materials),h=d(t.textures),x=d(t.images),S=d(t.shapes),v=d(t.skeletons),E=d(t.animations),T=d(t.nodes);m.length>0&&(s.geometries=m),g.length>0&&(s.materials=g),h.length>0&&(s.textures=h),x.length>0&&(s.images=x),S.length>0&&(s.shapes=S),v.length>0&&(s.skeletons=v),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(m){const g=[];for(const h in m){const x=m[h];delete x.metadata,g.push(x)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}zn.DEFAULT_UP=new ie(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fc extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const NM={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const m=this._targetRay,g=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),M=this._getHandJoint(h,w);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const x=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],v=x.position.distanceTo(S.position),E=.02,T=.005;h.inputState.pinching&&v>E+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&v<=E-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1));m!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,this.dispatchEvent(NM)))}return m!==null&&(m.visible=l!==null),g!==null&&(g.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new fc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const t_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ya={h:0,s:0,l:0},dc={h:0,s:0,l:0};function _d(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ot{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Tt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Tt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Tt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Tt.workingColorSpace){if(t=vM(t,1),i=yt(i,0,1),s=yt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=_d(d,c,t+1/3),this.g=_d(d,c,t),this.b=_d(d,c,t-1/3)}return Tt.colorSpaceToWorking(this,l),this}setStyle(t,i=hi){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],m=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(m))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=hi){const s=t_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hi){return Tt.workingToColorSpace(Rn.copy(this),t),Math.round(yt(Rn.r*255,0,255))*65536+Math.round(yt(Rn.g*255,0,255))*256+Math.round(yt(Rn.b*255,0,255))}getHexString(t=hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Tt.workingColorSpace){Tt.workingToColorSpace(Rn.copy(this),i);const s=Rn.r,l=Rn.g,c=Rn.b,d=Math.max(s,l,c),m=Math.min(s,l,c);let g,h;const x=(m+d)/2;if(m===d)g=0,h=0;else{const S=d-m;switch(h=x<=.5?S/(d+m):S/(2-d-m),d){case s:g=(l-c)/S+(l<c?6:0);break;case l:g=(c-s)/S+2;break;case c:g=(s-l)/S+4;break}g/=6}return t.h=g,t.s=h,t.l=x,t}getRGB(t,i=Tt.workingColorSpace){return Tt.workingToColorSpace(Rn.copy(this),i),t.r=Rn.r,t.g=Rn.g,t.b=Rn.b,t}getStyle(t=hi){Tt.workingToColorSpace(Rn.copy(this),t);const i=Rn.r,s=Rn.g,l=Rn.b;return t!==hi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ya),this.setHSL(Ya.h+t,Ya.s+i,Ya.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ya),t.getHSL(dc);const s=fd(Ya.h,dc.h,i),l=fd(Ya.s,dc.s,i),c=fd(Ya.l,dc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ot;Ot.NAMES=t_;class DM extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xa,this.environmentIntensity=1,this.environmentRotation=new xa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ti=new ie,ca=new ie,xd=new ie,ua=new ie,Sr=new ie,Mr=new ie,$0=new ie,Sd=new ie,Md=new ie,yd=new ie,Ed=new an,bd=new an,Td=new an;class Ri{constructor(t=new ie,i=new ie,s=new ie){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ti.subVectors(l,i),ca.subVectors(s,i),xd.subVectors(t,i);const d=Ti.dot(Ti),m=Ti.dot(ca),g=Ti.dot(xd),h=ca.dot(ca),x=ca.dot(xd),S=d*h-m*m;if(S===0)return c.set(0,0,0),null;const v=1/S,E=(h*g-m*x)*v,T=(d*x-m*g)*v;return c.set(1-E-T,T,E)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(t,i,s,l,c,d,m,g){return this.getBarycoord(t,i,s,l,ua)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,ua.x),g.addScaledVector(d,ua.y),g.addScaledVector(m,ua.z),g)}static getInterpolatedAttribute(t,i,s,l,c,d){return Ed.setScalar(0),bd.setScalar(0),Td.setScalar(0),Ed.fromBufferAttribute(t,i),bd.fromBufferAttribute(t,s),Td.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Ed,c.x),d.addScaledVector(bd,c.y),d.addScaledVector(Td,c.z),d}static isFrontFacing(t,i,s,l){return Ti.subVectors(s,i),ca.subVectors(t,i),Ti.cross(ca).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Ti.cross(ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ri.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ri.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,m;Sr.subVectors(l,s),Mr.subVectors(c,s),Sd.subVectors(t,s);const g=Sr.dot(Sd),h=Mr.dot(Sd);if(g<=0&&h<=0)return i.copy(s);Md.subVectors(t,l);const x=Sr.dot(Md),S=Mr.dot(Md);if(x>=0&&S<=x)return i.copy(l);const v=g*S-x*h;if(v<=0&&g>=0&&x<=0)return d=g/(g-x),i.copy(s).addScaledVector(Sr,d);yd.subVectors(t,c);const E=Sr.dot(yd),T=Mr.dot(yd);if(T>=0&&E<=T)return i.copy(c);const w=E*h-g*T;if(w<=0&&h>=0&&T<=0)return m=h/(h-T),i.copy(s).addScaledVector(Mr,m);const y=x*T-E*S;if(y<=0&&S-x>=0&&E-T>=0)return $0.subVectors(c,l),m=(S-x)/(S-x+(E-T)),i.copy(l).addScaledVector($0,m);const M=1/(y+w+v);return d=w*M,m=v*M,i.copy(s).addScaledVector(Sr,d).addScaledVector(Mr,m)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class qo{constructor(t=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,m=c.count;d<m;d++)t.isMesh===!0?t.getVertexPosition(d,Ai):Ai.fromBufferAttribute(c,d),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),hc.copy(s.boundingBox)),hc.applyMatrix4(t.matrixWorld),this.union(hc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oo),pc.subVectors(this.max,Oo),yr.subVectors(t.a,Oo),Er.subVectors(t.b,Oo),br.subVectors(t.c,Oo),Za.subVectors(Er,yr),Ka.subVectors(br,Er),Ms.subVectors(yr,br);let i=[0,-Za.z,Za.y,0,-Ka.z,Ka.y,0,-Ms.z,Ms.y,Za.z,0,-Za.x,Ka.z,0,-Ka.x,Ms.z,0,-Ms.x,-Za.y,Za.x,0,-Ka.y,Ka.x,0,-Ms.y,Ms.x,0];return!Ad(i,yr,Er,br,pc)||(i=[1,0,0,0,1,0,0,0,1],!Ad(i,yr,Er,br,pc))?!1:(mc.crossVectors(Za,Ka),i=[mc.x,mc.y,mc.z],Ad(i,yr,Er,br,pc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fa=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Ai=new ie,hc=new qo,yr=new ie,Er=new ie,br=new ie,Za=new ie,Ka=new ie,Ms=new ie,Oo=new ie,pc=new ie,mc=new ie,ys=new ie;function Ad(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){ys.fromArray(o,c);const m=l.x*Math.abs(ys.x)+l.y*Math.abs(ys.y)+l.z*Math.abs(ys.z),g=t.dot(ys),h=i.dot(ys),x=s.dot(ys);if(Math.max(-Math.max(g,h,x),Math.min(g,h,x))>m)return!1}return!0}const dn=new ie,gc=new Vt;let UM=0;class ni{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=B0,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(t),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Uo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Uo(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Uo(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Uo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Uo(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==B0&&(t.usage=this.usage),t}}class n_ extends ni{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class i_ extends ni{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class gi extends ni{constructor(t,i,s){super(new Float32Array(t),i,s)}}const LM=new qo,Po=new ie,Rd=new ie;class Wo{constructor(t=new ie,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):LM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);const i=Po.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Po,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(Rd)),this.expandByPoint(Po.copy(t.center).sub(Rd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let OM=0;const di=new en,Cd=new zn,Tr=new ie,ti=new qo,zo=new qo,xn=new ie;class ii extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hM(t)?i_:n_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,i,s){return di.makeTranslation(t,i,s),this.applyMatrix4(di),this}scale(t,i,s){return di.makeScale(t,i,s),this.applyMatrix4(di),this}lookAt(t){return Cd.lookAt(t),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new gi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(t){const s=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const m=i[c];zo.setFromBufferAttribute(m),this.morphTargetsRelative?(xn.addVectors(ti.min,zo.min),ti.expandByPoint(xn),xn.addVectors(ti.max,zo.max),ti.expandByPoint(xn)):(ti.expandByPoint(zo.min),ti.expandByPoint(zo.max))}ti.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)xn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(xn));if(i)for(let c=0,d=i.length;c<d;c++){const m=i[c],g=this.morphTargetsRelative;for(let h=0,x=m.count;h<x;h++)xn.fromBufferAttribute(m,h),g&&(Tr.fromBufferAttribute(t,h),xn.add(Tr)),l=Math.max(l,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),m=[],g=[];for(let A=0;A<s.count;A++)m[A]=new ie,g[A]=new ie;const h=new ie,x=new ie,S=new ie,v=new Vt,E=new Vt,T=new Vt,w=new ie,y=new ie;function M(A,D,me){h.fromBufferAttribute(s,A),x.fromBufferAttribute(s,D),S.fromBufferAttribute(s,me),v.fromBufferAttribute(c,A),E.fromBufferAttribute(c,D),T.fromBufferAttribute(c,me),x.sub(h),S.sub(h),E.sub(v),T.sub(v);const G=1/(E.x*T.y-T.x*E.y);isFinite(G)&&(w.copy(x).multiplyScalar(T.y).addScaledVector(S,-E.y).multiplyScalar(G),y.copy(S).multiplyScalar(E.x).addScaledVector(x,-T.x).multiplyScalar(G),m[A].add(w),m[D].add(w),m[me].add(w),g[A].add(y),g[D].add(y),g[me].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let A=0,D=N.length;A<D;++A){const me=N[A],G=me.start,ee=me.count;for(let se=G,ce=G+ee;se<ce;se+=3)M(t.getX(se+0),t.getX(se+1),t.getX(se+2))}const F=new ie,U=new ie,j=new ie,H=new ie;function z(A){j.fromBufferAttribute(l,A),H.copy(j);const D=m[A];F.copy(D),F.sub(j.multiplyScalar(j.dot(D))).normalize(),U.crossVectors(H,D);const G=U.dot(g[A])<0?-1:1;d.setXYZW(A,F.x,F.y,F.z,G)}for(let A=0,D=N.length;A<D;++A){const me=N[A],G=me.start,ee=me.count;for(let se=G,ce=G+ee;se<ce;se+=3)z(t.getX(se+0)),z(t.getX(se+1)),z(t.getX(se+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ni(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,E=s.count;v<E;v++)s.setXYZ(v,0,0,0);const l=new ie,c=new ie,d=new ie,m=new ie,g=new ie,h=new ie,x=new ie,S=new ie;if(t)for(let v=0,E=t.count;v<E;v+=3){const T=t.getX(v+0),w=t.getX(v+1),y=t.getX(v+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),x.subVectors(d,c),S.subVectors(l,c),x.cross(S),m.fromBufferAttribute(s,T),g.fromBufferAttribute(s,w),h.fromBufferAttribute(s,y),m.add(x),g.add(x),h.add(x),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(w,g.x,g.y,g.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,E=i.count;v<E;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),x.subVectors(d,c),S.subVectors(l,c),x.cross(S),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)xn.fromBufferAttribute(t,i),xn.normalize(),t.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function t(m,g){const h=m.array,x=m.itemSize,S=m.normalized,v=new h.constructor(g.length*x);let E=0,T=0;for(let w=0,y=g.length;w<y;w++){m.isInterleavedBufferAttribute?E=g[w]*m.data.stride+m.offset:E=g[w]*x;for(let M=0;M<x;M++)v[T++]=h[E++]}return new ni(v,x,S)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ii,s=this.index.array,l=this.attributes;for(const m in l){const g=l[m],h=t(g,s);i.setAttribute(m,h)}const c=this.morphAttributes;for(const m in c){const g=[],h=c[m];for(let x=0,S=h.length;x<S;x++){const v=h[x],E=t(v,s);g.push(E)}i.morphAttributes[m]=g}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let m=0,g=d.length;m<g;m++){const h=d[m];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const h in g)g[h]!==void 0&&(t[h]=g[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const h=s[g];t.data.attributes[g]=h.toJSON(t.data)}const l={};let c=!1;for(const g in this.morphAttributes){const h=this.morphAttributes[g],x=[];for(let S=0,v=h.length;S<v;S++){const E=h[S];x.push(E.toJSON(t.data))}x.length>0&&(l[g]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const m=this.boundingSphere;return m!==null&&(t.data.boundingSphere=m.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=t.morphAttributes;for(const h in c){const x=[],S=c[h];for(let v=0,E=S.length;v<E;v++)x.push(S[v].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,x=d.length;h<x;h++){const S=d[h];this.addGroup(S.start,S.count,S.materialIndex)}const m=t.boundingBox;m!==null&&(this.boundingBox=m.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let PM=0;class Ir extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=wr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vd,this.blendDst=jd,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=I0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(s.blending=this.blending),this.side!==ns&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Vd&&(s.blendSrc=this.blendSrc),this.blendDst!==jd&&(s.blendDst=this.blendDst),this.blendEquation!==Cs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==I0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const m in c){const g=c[m];delete g.metadata,d.push(g)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const da=new ie,wd=new ie,vc=new ie,Qa=new ie,Nd=new ie,_c=new ie,Dd=new ie;class qh{constructor(t=new ie,i=new ie(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,da)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=da.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(da.copy(this.origin).addScaledVector(this.direction,i),da.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){wd.copy(t).add(i).multiplyScalar(.5),vc.copy(i).sub(t).normalize(),Qa.copy(this.origin).sub(wd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(vc),m=Qa.dot(this.direction),g=-Qa.dot(vc),h=Qa.lengthSq(),x=Math.abs(1-d*d);let S,v,E,T;if(x>0)if(S=d*g-m,v=d*m-g,T=c*x,S>=0)if(v>=-T)if(v<=T){const w=1/x;S*=w,v*=w,E=S*(S+d*v+2*m)+v*(d*S+v+2*g)+h}else v=c,S=Math.max(0,-(d*v+m)),E=-S*S+v*(v+2*g)+h;else v=-c,S=Math.max(0,-(d*v+m)),E=-S*S+v*(v+2*g)+h;else v<=-T?(S=Math.max(0,-(-d*c+m)),v=S>0?-c:Math.min(Math.max(-c,-g),c),E=-S*S+v*(v+2*g)+h):v<=T?(S=0,v=Math.min(Math.max(-c,-g),c),E=v*(v+2*g)+h):(S=Math.max(0,-(d*c+m)),v=S>0?c:Math.min(Math.max(-c,-g),c),E=-S*S+v*(v+2*g)+h);else v=d>0?-c:c,S=Math.max(0,-(d*v+m)),E=-S*S+v*(v+2*g)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(wd).addScaledVector(vc,v),E}intersectSphere(t,i){da.subVectors(t.center,this.origin);const s=da.dot(this.direction),l=da.dot(da)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),m=s-d,g=s+d;return g<0?null:m<0?this.at(g,i):this.at(m,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,m,g;const h=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,v=this.origin;return h>=0?(s=(t.min.x-v.x)*h,l=(t.max.x-v.x)*h):(s=(t.max.x-v.x)*h,l=(t.min.x-v.x)*h),x>=0?(c=(t.min.y-v.y)*x,d=(t.max.y-v.y)*x):(c=(t.max.y-v.y)*x,d=(t.min.y-v.y)*x),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),S>=0?(m=(t.min.z-v.z)*S,g=(t.max.z-v.z)*S):(m=(t.max.z-v.z)*S,g=(t.min.z-v.z)*S),s>g||m>l)||((m>s||s!==s)&&(s=m),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,da)!==null}intersectTriangle(t,i,s,l,c){Nd.subVectors(i,t),_c.subVectors(s,t),Dd.crossVectors(Nd,_c);let d=this.direction.dot(Dd),m;if(d>0){if(l)return null;m=1}else if(d<0)m=-1,d=-d;else return null;Qa.subVectors(this.origin,t);const g=m*this.direction.dot(_c.crossVectors(Qa,_c));if(g<0)return null;const h=m*this.direction.dot(Nd.cross(Qa));if(h<0||g+h>d)return null;const x=-m*Qa.dot(Dd);return x<0?null:this.at(x/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class a_ extends Ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xa,this.combine=zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ev=new en,Es=new qh,xc=new Wo,tv=new ie,Sc=new ie,Mc=new ie,yc=new ie,Ud=new ie,Ec=new ie,nv=new ie,bc=new ie;class Sa extends zn{constructor(t=new ii,i=new a_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const m=this.morphTargetInfluences;if(c&&m){Ec.set(0,0,0);for(let g=0,h=c.length;g<h;g++){const x=m[g],S=c[g];x!==0&&(Ud.fromBufferAttribute(S,t),d?Ec.addScaledVector(Ud,x):Ec.addScaledVector(Ud.sub(i),x))}i.add(Ec)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),xc.copy(s.boundingSphere),xc.applyMatrix4(c),Es.copy(t.ray).recast(t.near),!(xc.containsPoint(Es.origin)===!1&&(Es.intersectSphere(xc,tv)===null||Es.origin.distanceToSquared(tv)>(t.far-t.near)**2))&&(ev.copy(c).invert(),Es.copy(t.ray).applyMatrix4(ev),!(s.boundingBox!==null&&Es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Es)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,m=c.index,g=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,S=c.attributes.normal,v=c.groups,E=c.drawRange;if(m!==null)if(Array.isArray(d))for(let T=0,w=v.length;T<w;T++){const y=v[T],M=d[y.materialIndex],N=Math.max(y.start,E.start),F=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let U=N,j=F;U<j;U+=3){const H=m.getX(U),z=m.getX(U+1),A=m.getX(U+2);l=Tc(this,M,t,s,h,x,S,H,z,A),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),w=Math.min(m.count,E.start+E.count);for(let y=T,M=w;y<M;y+=3){const N=m.getX(y),F=m.getX(y+1),U=m.getX(y+2);l=Tc(this,d,t,s,h,x,S,N,F,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(d))for(let T=0,w=v.length;T<w;T++){const y=v[T],M=d[y.materialIndex],N=Math.max(y.start,E.start),F=Math.min(g.count,Math.min(y.start+y.count,E.start+E.count));for(let U=N,j=F;U<j;U+=3){const H=U,z=U+1,A=U+2;l=Tc(this,M,t,s,h,x,S,H,z,A),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),w=Math.min(g.count,E.start+E.count);for(let y=T,M=w;y<M;y+=3){const N=y,F=y+1,U=y+2;l=Tc(this,d,t,s,h,x,S,N,F,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function zM(o,t,i,s,l,c,d,m){let g;if(t.side===Xn?g=s.intersectTriangle(d,c,l,!0,m):g=s.intersectTriangle(l,c,d,t.side===ns,m),g===null)return null;bc.copy(m),bc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(bc);return h<i.near||h>i.far?null:{distance:h,point:bc.clone(),object:o}}function Tc(o,t,i,s,l,c,d,m,g,h){o.getVertexPosition(m,Sc),o.getVertexPosition(g,Mc),o.getVertexPosition(h,yc);const x=zM(o,t,i,s,Sc,Mc,yc,nv);if(x){const S=new ie;Ri.getBarycoord(nv,Sc,Mc,yc,S),l&&(x.uv=Ri.getInterpolatedAttribute(l,m,g,h,S,new Vt)),c&&(x.uv1=Ri.getInterpolatedAttribute(c,m,g,h,S,new Vt)),d&&(x.normal=Ri.getInterpolatedAttribute(d,m,g,h,S,new ie),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:m,b:g,c:h,normal:new ie,materialIndex:0};Ri.getNormal(Sc,Mc,yc,v.normal),x.face=v,x.barycoord=S}return x}class FM extends Pn{constructor(t=null,i=1,s=1,l,c,d,m,g,h=bn,x=bn,S,v){super(null,d,m,g,h,x,l,c,S,v),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ld=new ie,IM=new ie,BM=new ht;class Rs{constructor(t=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Ld.subVectors(s,i).cross(IM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Ld),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||BM.getNormalMatrix(t),l=this.coplanarPoint(Ld).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Wo,HM=new Vt(.5,.5),Ac=new ie;class s_{constructor(t=new Rs,i=new Rs,s=new Rs,l=new Rs,c=new Rs,d=new Rs){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const m=this.planes;return m[0].copy(t),m[1].copy(i),m[2].copy(s),m[3].copy(l),m[4].copy(c),m[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Bi,s=!1){const l=this.planes,c=t.elements,d=c[0],m=c[1],g=c[2],h=c[3],x=c[4],S=c[5],v=c[6],E=c[7],T=c[8],w=c[9],y=c[10],M=c[11],N=c[12],F=c[13],U=c[14],j=c[15];if(l[0].setComponents(h-d,E-x,M-T,j-N).normalize(),l[1].setComponents(h+d,E+x,M+T,j+N).normalize(),l[2].setComponents(h+m,E+S,M+w,j+F).normalize(),l[3].setComponents(h-m,E-S,M-w,j-F).normalize(),s)l[4].setComponents(g,v,y,U).normalize(),l[5].setComponents(h-g,E-v,M-y,j-U).normalize();else if(l[4].setComponents(h-g,E-v,M-y,j-U).normalize(),i===Bi)l[5].setComponents(h+g,E+v,M+y,j+U).normalize();else if(i===Vc)l[5].setComponents(g,v,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),bs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);const i=HM.distanceTo(t.center);return bs.radius=.7071067811865476+i,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ac.x=l.normal.x>0?t.max.x:t.min.x,Ac.y=l.normal.y>0?t.max.y:t.min.y,Ac.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class r_ extends Ir{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const kc=new ie,qc=new ie,iv=new en,Fo=new qh,Rc=new Wo,Od=new ie,av=new ie;class GM extends zn{constructor(t=new ii,i=new r_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)kc.fromBufferAttribute(i,l-1),qc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=kc.distanceTo(qc);t.setAttribute("lineDistance",new gi(s,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=c,t.ray.intersectsSphere(Rc)===!1)return;iv.copy(l).invert(),Fo.copy(t.ray).applyMatrix4(iv);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=m*m,h=this.isLineSegments?2:1,x=s.index,v=s.attributes.position;if(x!==null){const E=Math.max(0,d.start),T=Math.min(x.count,d.start+d.count);for(let w=E,y=T-1;w<y;w+=h){const M=x.getX(w),N=x.getX(w+1),F=Cc(this,t,Fo,g,M,N,w);F&&i.push(F)}if(this.isLineLoop){const w=x.getX(T-1),y=x.getX(E),M=Cc(this,t,Fo,g,w,y,T-1);M&&i.push(M)}}else{const E=Math.max(0,d.start),T=Math.min(v.count,d.start+d.count);for(let w=E,y=T-1;w<y;w+=h){const M=Cc(this,t,Fo,g,w,w+1,w);M&&i.push(M)}if(this.isLineLoop){const w=Cc(this,t,Fo,g,T-1,E,T-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function Cc(o,t,i,s,l,c,d){const m=o.geometry.attributes.position;if(kc.fromBufferAttribute(m,l),qc.fromBufferAttribute(m,c),i.distanceSqToSegment(kc,qc,Od,av)>s)return;Od.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(Od);if(!(h<t.near||h>t.far))return{distance:h,point:av.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const sv=new ie,rv=new ie;class VM extends GM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)sv.fromBufferAttribute(i,l),rv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+sv.distanceTo(rv);t.setAttribute("lineDistance",new gi(s,1))}else at("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jM extends Ir{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ov=new en,Uh=new qh,wc=new Wo,Nc=new ie;class XM extends zn{constructor(t=new ii,i=new jM){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),wc.copy(s.boundingSphere),wc.applyMatrix4(l),wc.radius+=c,t.ray.intersectsSphere(wc)===!1)return;ov.copy(l).invert(),Uh.copy(t.ray).applyMatrix4(ov);const m=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=m*m,h=s.index,S=s.attributes.position;if(h!==null){const v=Math.max(0,d.start),E=Math.min(h.count,d.start+d.count);for(let T=v,w=E;T<w;T++){const y=h.getX(T);Nc.fromBufferAttribute(S,y),lv(Nc,y,g,l,t,i,this)}}else{const v=Math.max(0,d.start),E=Math.min(S.count,d.start+d.count);for(let T=v,w=E;T<w;T++)Nc.fromBufferAttribute(S,T),lv(Nc,T,g,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const m=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[m]=c}}}}}function lv(o,t,i,s,l,c,d){const m=Uh.distanceSqToPoint(o);if(m<i){const g=new ie;Uh.closestPointToPoint(o,g),g.applyMatrix4(s);const h=l.ray.origin.distanceTo(g);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(m),point:g,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class o_ extends Pn{constructor(t=[],i=Us,s,l,c,d,m,g,h,x){super(t,i,s,l,c,d,m,g,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xo extends Pn{constructor(t,i,s=Vi,l,c,d,m=bn,g=bn,h,x=_a,S=1){if(x!==_a&&x!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:S};super(v,l,c,d,m,g,x,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new kh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class kM extends Xo{constructor(t,i=Vi,s=Us,l,c,d=bn,m=bn,g,h=_a){const x={width:t,height:t,depth:1},S=[x,x,x,x,x,x];super(t,t,i,s,l,c,d,m,g,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class l_ extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yo extends ii{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const m=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const g=[],h=[],x=[],S=[];let v=0,E=0;T("z","y","x",-1,-1,s,i,t,d,c,0),T("z","y","x",1,-1,s,i,-t,d,c,1),T("x","z","y",1,1,t,s,i,l,d,2),T("x","z","y",1,-1,t,s,-i,l,d,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new gi(h,3)),this.setAttribute("normal",new gi(x,3)),this.setAttribute("uv",new gi(S,2));function T(w,y,M,N,F,U,j,H,z,A,D){const me=U/z,G=j/A,ee=U/2,se=j/2,ce=H/2,$=z+1,O=A+1;let I=0,le=0;const he=new ie;for(let be=0;be<O;be++){const P=be*G-se;for(let Y=0;Y<$;Y++){const _e=Y*me-ee;he[w]=_e*N,he[y]=P*F,he[M]=ce,h.push(he.x,he.y,he.z),he[w]=0,he[y]=0,he[M]=H>0?1:-1,x.push(he.x,he.y,he.z),S.push(Y/z),S.push(1-be/A),I+=1}}for(let be=0;be<A;be++)for(let P=0;P<z;P++){const Y=v+P+$*be,_e=v+P+$*(be+1),Re=v+(P+1)+$*(be+1),Fe=v+(P+1)+$*be;g.push(Y,_e,Fe),g.push(_e,Re,Fe),le+=6}m.addGroup(E,le,D),E+=le,v+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Yc extends ii{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,m=Math.floor(s),g=Math.floor(l),h=m+1,x=g+1,S=t/m,v=i/g,E=[],T=[],w=[],y=[];for(let M=0;M<x;M++){const N=M*v-d;for(let F=0;F<h;F++){const U=F*S-c;T.push(U,-N,0),w.push(0,0,1),y.push(F/m),y.push(1-M/g)}}for(let M=0;M<g;M++)for(let N=0;N<m;N++){const F=N+h*M,U=N+h*(M+1),j=N+1+h*(M+1),H=N+1+h*M;E.push(F,U,H),E.push(U,j,H)}this.setIndex(E),this.setAttribute("position",new gi(T,3)),this.setAttribute("normal",new gi(w,3)),this.setAttribute("uv",new gi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.width,t.height,t.widthSegments,t.heightSegments)}}function Pr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function On(o){const t={};for(let i=0;i<o.length;i++){const s=Pr(o[i]);for(const l in s)t[l]=s[l]}return t}function qM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function c_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Tt.workingColorSpace}const WM={clone:Pr,merge:On};var YM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YM,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=qM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class KM extends wi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class QM extends Ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class JM extends Ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Dc=new ie,Uc=new Fr,Pi=new ie;class u_ extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Dc,Uc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Uc,Pi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Dc,Uc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dc,Uc,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new ie,cv=new Vt,uv=new Vt;class pi extends u_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ud*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z)}getViewSize(t,i){return this.getViewBounds(t,cv,uv),i.subVectors(uv,cv)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ud*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const g=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/g,i-=d.offsetY*s/h,l*=d.width/g,s*=d.height/h}const m=this.filmOffset;m!==0&&(c+=t*m/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class f_ extends u_{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,m=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,m-=x*this.view.offsetY,g=m-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,m,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ar=-90,Rr=1;class $M extends zn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Ar,Rr,t,i);l.layers=this.layers,this.add(l);const c=new pi(Ar,Rr,t,i);c.layers=this.layers,this.add(c);const d=new pi(Ar,Rr,t,i);d.layers=this.layers,this.add(d);const m=new pi(Ar,Rr,t,i);m.layers=this.layers,this.add(m);const g=new pi(Ar,Rr,t,i);g.layers=this.layers,this.add(g);const h=new pi(Ar,Rr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,m,g]=i;for(const h of i)this.remove(h);if(t===Bi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),m.up.set(0,1,0),m.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Vc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),m.up.set(0,-1,0),m.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,m,g,h,x]=this.children,S=t.getRenderTarget(),v=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(S,v,E),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class ey extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function fv(o,t,i,s){const l=ty(s);switch(i){case Zv:return o*t;case Qv:return o*t/l.components*l.byteLength;case Hh:return o*t/l.components*l.byteLength;case Lr:return o*t*2/l.components*l.byteLength;case Gh:return o*t*2/l.components*l.byteLength;case Kv:return o*t*3/l.components*l.byteLength;case Ci:return o*t*4/l.components*l.byteLength;case Vh:return o*t*4/l.components*l.byteLength;case zc:case Fc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ic:case Bc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case eh:case nh:return Math.max(o,16)*Math.max(t,8)/4;case $d:case th:return Math.max(o,8)*Math.max(t,8)/2;case ih:case ah:case rh:case oh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case sh:case lh:case ch:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case uh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case dh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case hh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case ph:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case mh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case gh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case vh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case _h:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case xh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Sh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Mh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case yh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Eh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case bh:case Th:case Ah:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Rh:case Ch:return Math.ceil(o/4)*Math.ceil(t/4)*8;case wh:case Nh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ty(o){switch(o){case mi:case kv:return{byteLength:1,components:1};case Vo:case qv:case va:return{byteLength:2,components:1};case Ih:case Bh:return{byteLength:2,components:4};case Vi:case Fh:case Ii:return{byteLength:4,components:1};case Wv:case Yv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function d_(){let o=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function ny(o){const t=new WeakMap;function i(m,g){const h=m.array,x=m.usage,S=h.byteLength,v=o.createBuffer();o.bindBuffer(g,v),o.bufferData(g,h,x),m.onUploadCallback();let E;if(h instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=o.HALF_FLOAT;else if(h instanceof Uint16Array)m.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=o.SHORT;else if(h instanceof Uint32Array)E=o.UNSIGNED_INT;else if(h instanceof Int32Array)E=o.INT;else if(h instanceof Int8Array)E=o.BYTE;else if(h instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:m.version,size:S}}function s(m,g,h){const x=g.array,S=g.updateRanges;if(o.bindBuffer(h,m),S.length===0)o.bufferSubData(h,0,x);else{S.sort((E,T)=>E.start-T.start);let v=0;for(let E=1;E<S.length;E++){const T=S[v],w=S[E];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++v,S[v]=w)}S.length=v+1;for(let E=0,T=S.length;E<T;E++){const w=S[E];o.bufferSubData(h,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(m){return m.isInterleavedBufferAttribute&&(m=m.data),t.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=t.get(m);g&&(o.deleteBuffer(g.buffer),t.delete(m))}function d(m,g){if(m.isInterleavedBufferAttribute&&(m=m.data),m.isGLBufferAttribute){const x=t.get(m);(!x||x.version<m.version)&&t.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}const h=t.get(m);if(h===void 0)t.set(m,i(m,g));else if(h.version<m.version){if(h.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,m,g),h.version=m.version}}return{get:l,remove:c,update:d}}var iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ly=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,py=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,my=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ey=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,by=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ty=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ay=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ly="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Py=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ky=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ME=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,CE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,UE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,BE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,HE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,GE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,VE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,YE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ib=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ub=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Eb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ub=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ob=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:iy,alphahash_pars_fragment:ay,alphamap_fragment:sy,alphamap_pars_fragment:ry,alphatest_fragment:oy,alphatest_pars_fragment:ly,aomap_fragment:cy,aomap_pars_fragment:uy,batching_pars_vertex:fy,batching_vertex:dy,begin_vertex:hy,beginnormal_vertex:py,bsdfs:my,iridescence_fragment:gy,bumpmap_pars_fragment:vy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:My,color_fragment:yy,color_pars_fragment:Ey,color_pars_vertex:by,color_vertex:Ty,common:Ay,cube_uv_reflection_fragment:Ry,defaultnormal_vertex:Cy,displacementmap_pars_vertex:wy,displacementmap_vertex:Ny,emissivemap_fragment:Dy,emissivemap_pars_fragment:Uy,colorspace_fragment:Ly,colorspace_pars_fragment:Oy,envmap_fragment:Py,envmap_common_pars_fragment:zy,envmap_pars_fragment:Fy,envmap_pars_vertex:Iy,envmap_physical_pars_fragment:Zy,envmap_vertex:By,fog_vertex:Hy,fog_pars_vertex:Gy,fog_fragment:Vy,fog_pars_fragment:jy,gradientmap_pars_fragment:Xy,lightmap_pars_fragment:ky,lights_lambert_fragment:qy,lights_lambert_pars_fragment:Wy,lights_pars_begin:Yy,lights_toon_fragment:Ky,lights_toon_pars_fragment:Qy,lights_phong_fragment:Jy,lights_phong_pars_fragment:$y,lights_physical_fragment:eE,lights_physical_pars_fragment:tE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:aE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:rE,logdepthbuf_pars_vertex:oE,logdepthbuf_vertex:lE,map_fragment:cE,map_pars_fragment:uE,map_particle_fragment:fE,map_particle_pars_fragment:dE,metalnessmap_fragment:hE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:gE,morphnormal_vertex:vE,morphtarget_pars_vertex:_E,morphtarget_vertex:xE,normal_fragment_begin:SE,normal_fragment_maps:ME,normal_pars_fragment:yE,normal_pars_vertex:EE,normal_vertex:bE,normalmap_pars_fragment:TE,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:CE,iridescence_pars_fragment:wE,opaque_fragment:NE,packing:DE,premultiplied_alpha_fragment:UE,project_vertex:LE,dithering_fragment:OE,dithering_pars_fragment:PE,roughnessmap_fragment:zE,roughnessmap_pars_fragment:FE,shadowmap_pars_fragment:IE,shadowmap_pars_vertex:BE,shadowmap_vertex:HE,shadowmask_pars_fragment:GE,skinbase_vertex:VE,skinning_pars_vertex:jE,skinning_vertex:XE,skinnormal_vertex:kE,specularmap_fragment:qE,specularmap_pars_fragment:WE,tonemapping_fragment:YE,tonemapping_pars_fragment:ZE,transmission_fragment:KE,transmission_pars_fragment:QE,uv_pars_fragment:JE,uv_pars_vertex:$E,uv_vertex:eb,worldpos_vertex:tb,background_vert:nb,background_frag:ib,backgroundCube_vert:ab,backgroundCube_frag:sb,cube_vert:rb,cube_frag:ob,depth_vert:lb,depth_frag:cb,distance_vert:ub,distance_frag:fb,equirect_vert:db,equirect_frag:hb,linedashed_vert:pb,linedashed_frag:mb,meshbasic_vert:gb,meshbasic_frag:vb,meshlambert_vert:_b,meshlambert_frag:xb,meshmatcap_vert:Sb,meshmatcap_frag:Mb,meshnormal_vert:yb,meshnormal_frag:Eb,meshphong_vert:bb,meshphong_frag:Tb,meshphysical_vert:Ab,meshphysical_frag:Rb,meshtoon_vert:Cb,meshtoon_frag:wb,points_vert:Nb,points_frag:Db,shadow_vert:Ub,shadow_frag:Lb,sprite_vert:Ob,sprite_frag:Pb},Ue={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Fi={basic:{uniforms:On([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:On([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:On([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:On([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:On([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ot(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:On([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:On([Ue.points,Ue.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:On([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:On([Ue.common,Ue.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:On([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:On([Ue.sprite,Ue.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:On([Ue.common,Ue.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:On([Ue.lights,Ue.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Fi.physical={uniforms:On([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Lc={r:0,b:0,g:0},Ts=new xa,zb=new en;function Fb(o,t,i,s,l,c){const d=new Ot(0);let m=l===!0?0:1,g,h,x=null,S=0,v=null;function E(N){let F=N.isScene===!0?N.background:null;if(F&&F.isTexture){const U=N.backgroundBlurriness>0;F=t.get(F,U)}return F}function T(N){let F=!1;const U=E(N);U===null?y(d,m):U&&U.isColor&&(y(U,1),F=!0);const j=o.xr.getEnvironmentBlendMode();j==="additive"?i.buffers.color.setClear(0,0,0,1,c):j==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(N,F){const U=E(F);U&&(U.isCubeTexture||U.mapping===Wc)?(h===void 0&&(h=new Sa(new Yo(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Pr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(j,H,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ts.copy(F.backgroundRotation),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),h.material.uniforms.envMap.value=U,h.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zb.makeRotationFromEuler(Ts)),h.material.toneMapped=Tt.getTransfer(U.colorSpace)!==It,(x!==U||S!==U.version||v!==o.toneMapping)&&(h.material.needsUpdate=!0,x=U,S=U.version,v=o.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):U&&U.isTexture&&(g===void 0&&(g=new Sa(new Yc(2,2),new wi({name:"BackgroundMaterial",uniforms:Pr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=U,g.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,g.material.toneMapped=Tt.getTransfer(U.colorSpace)!==It,U.matrixAutoUpdate===!0&&U.updateMatrix(),g.material.uniforms.uvTransform.value.copy(U.matrix),(x!==U||S!==U.version||v!==o.toneMapping)&&(g.material.needsUpdate=!0,x=U,S=U.version,v=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function y(N,F){N.getRGB(Lc,c_(o)),i.buffers.color.setClear(Lc.r,Lc.g,Lc.b,F,c)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,F=1){d.set(N),m=F,y(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,y(d,m)},render:T,addToRenderList:w,dispose:M}}function Ib(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,d=!1;function m(G,ee,se,ce,$){let O=!1;const I=S(G,ce,se,ee);c!==I&&(c=I,h(c.object)),O=E(G,ce,se,$),O&&T(G,ce,se,$),$!==null&&t.update($,o.ELEMENT_ARRAY_BUFFER),(O||d)&&(d=!1,U(G,ee,se,ce),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function g(){return o.createVertexArray()}function h(G){return o.bindVertexArray(G)}function x(G){return o.deleteVertexArray(G)}function S(G,ee,se,ce){const $=ce.wireframe===!0;let O=s[ee.id];O===void 0&&(O={},s[ee.id]=O);const I=G.isInstancedMesh===!0?G.id:0;let le=O[I];le===void 0&&(le={},O[I]=le);let he=le[se.id];he===void 0&&(he={},le[se.id]=he);let be=he[$];return be===void 0&&(be=v(g()),he[$]=be),be}function v(G){const ee=[],se=[],ce=[];for(let $=0;$<i;$++)ee[$]=0,se[$]=0,ce[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:se,attributeDivisors:ce,object:G,attributes:{},index:null}}function E(G,ee,se,ce){const $=c.attributes,O=ee.attributes;let I=0;const le=se.getAttributes();for(const he in le)if(le[he].location>=0){const P=$[he];let Y=O[he];if(Y===void 0&&(he==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),he==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),P===void 0||P.attribute!==Y||Y&&P.data!==Y.data)return!0;I++}return c.attributesNum!==I||c.index!==ce}function T(G,ee,se,ce){const $={},O=ee.attributes;let I=0;const le=se.getAttributes();for(const he in le)if(le[he].location>=0){let P=O[he];P===void 0&&(he==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),he==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const Y={};Y.attribute=P,P&&P.data&&(Y.data=P.data),$[he]=Y,I++}c.attributes=$,c.attributesNum=I,c.index=ce}function w(){const G=c.newAttributes;for(let ee=0,se=G.length;ee<se;ee++)G[ee]=0}function y(G){M(G,0)}function M(G,ee){const se=c.newAttributes,ce=c.enabledAttributes,$=c.attributeDivisors;se[G]=1,ce[G]===0&&(o.enableVertexAttribArray(G),ce[G]=1),$[G]!==ee&&(o.vertexAttribDivisor(G,ee),$[G]=ee)}function N(){const G=c.newAttributes,ee=c.enabledAttributes;for(let se=0,ce=ee.length;se<ce;se++)ee[se]!==G[se]&&(o.disableVertexAttribArray(se),ee[se]=0)}function F(G,ee,se,ce,$,O,I){I===!0?o.vertexAttribIPointer(G,ee,se,$,O):o.vertexAttribPointer(G,ee,se,ce,$,O)}function U(G,ee,se,ce){w();const $=ce.attributes,O=se.getAttributes(),I=ee.defaultAttributeValues;for(const le in O){const he=O[le];if(he.location>=0){let be=$[le];if(be===void 0&&(le==="instanceMatrix"&&G.instanceMatrix&&(be=G.instanceMatrix),le==="instanceColor"&&G.instanceColor&&(be=G.instanceColor)),be!==void 0){const P=be.normalized,Y=be.itemSize,_e=t.get(be);if(_e===void 0)continue;const Re=_e.buffer,Fe=_e.type,ne=_e.bytesPerElement,xe=Fe===o.INT||Fe===o.UNSIGNED_INT||be.gpuType===Fh;if(be.isInterleavedBufferAttribute){const Te=be.data,Xe=Te.stride,Qe=be.offset;if(Te.isInstancedInterleavedBuffer){for(let et=0;et<he.locationSize;et++)M(he.location+et,Te.meshPerAttribute);G.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let et=0;et<he.locationSize;et++)y(he.location+et);o.bindBuffer(o.ARRAY_BUFFER,Re);for(let et=0;et<he.locationSize;et++)F(he.location+et,Y/he.locationSize,Fe,P,Xe*ne,(Qe+Y/he.locationSize*et)*ne,xe)}else{if(be.isInstancedBufferAttribute){for(let Te=0;Te<he.locationSize;Te++)M(he.location+Te,be.meshPerAttribute);G.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Te=0;Te<he.locationSize;Te++)y(he.location+Te);o.bindBuffer(o.ARRAY_BUFFER,Re);for(let Te=0;Te<he.locationSize;Te++)F(he.location+Te,Y/he.locationSize,Fe,P,Y*ne,Y/he.locationSize*Te*ne,xe)}}else if(I!==void 0){const P=I[le];if(P!==void 0)switch(P.length){case 2:o.vertexAttrib2fv(he.location,P);break;case 3:o.vertexAttrib3fv(he.location,P);break;case 4:o.vertexAttrib4fv(he.location,P);break;default:o.vertexAttrib1fv(he.location,P)}}}}N()}function j(){D();for(const G in s){const ee=s[G];for(const se in ee){const ce=ee[se];for(const $ in ce){const O=ce[$];for(const I in O)x(O[I].object),delete O[I];delete ce[$]}}delete s[G]}}function H(G){if(s[G.id]===void 0)return;const ee=s[G.id];for(const se in ee){const ce=ee[se];for(const $ in ce){const O=ce[$];for(const I in O)x(O[I].object),delete O[I];delete ce[$]}}delete s[G.id]}function z(G){for(const ee in s){const se=s[ee];for(const ce in se){const $=se[ce];if($[G.id]===void 0)continue;const O=$[G.id];for(const I in O)x(O[I].object),delete O[I];delete $[G.id]}}}function A(G){for(const ee in s){const se=s[ee],ce=G.isInstancedMesh===!0?G.id:0,$=se[ce];if($!==void 0){for(const O in $){const I=$[O];for(const le in I)x(I[le].object),delete I[le];delete $[O]}delete se[ce],Object.keys(se).length===0&&delete s[ee]}}}function D(){me(),d=!0,c!==l&&(c=l,h(c.object))}function me(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:m,reset:D,resetDefaultState:me,dispose:j,releaseStatesOfGeometry:H,releaseStatesOfObject:A,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:y,disableUnusedAttributes:N}}function Bb(o,t,i){let s;function l(h){s=h}function c(h,x){o.drawArrays(s,h,x),i.update(x,s,1)}function d(h,x,S){S!==0&&(o.drawArraysInstanced(s,h,x,S),i.update(x,s,S))}function m(h,x,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,x,0,S);let E=0;for(let T=0;T<S;T++)E+=x[T];i.update(E,s,1)}function g(h,x,S,v){if(S===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<h.length;T++)d(h[T],x[T],v[T]);else{E.multiDrawArraysInstancedWEBGL(s,h,0,x,0,v,0,S);let T=0;for(let w=0;w<S;w++)T+=x[w]*v[w];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function Hb(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Ci&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function m(z){const A=z===va&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==mi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ii&&!A)}function g(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=g(h);x!==h&&(at("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const S=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),M=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),F=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),j=o.getParameter(o.MAX_SAMPLES),H=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:d,textureTypeReadable:m,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:v,maxTextures:E,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:N,maxVaryings:F,maxFragmentUniforms:U,maxSamples:j,samples:H}}function Gb(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Rs,m=new ht,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(S,v){const E=S.length!==0||v||s!==0||l;return l=v,s=S.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,v){i=x(S,v,0)},this.setState=function(S,v,E){const T=S.clippingPlanes,w=S.clipIntersection,y=S.clipShadows,M=o.get(S);if(!l||T===null||T.length===0||c&&!y)c?x(null):h();else{const N=c?0:s,F=N*4;let U=M.clippingState||null;g.value=U,U=x(T,v,F,E);for(let j=0;j!==F;++j)U[j]=i[j];M.clippingState=U,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function h(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(S,v,E,T){const w=S!==null?S.length:0;let y=null;if(w!==0){if(y=g.value,T!==!0||y===null){const M=E+w*4,N=v.matrixWorldInverse;m.getNormalMatrix(N),(y===null||y.length<M)&&(y=new Float32Array(M));for(let F=0,U=E;F!==w;++F,U+=4)d.copy(S[F]).applyMatrix4(N,m),d.normal.toArray(y,U),y[U+3]=d.constant}g.value=y,g.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}const es=4,dv=[.125,.215,.35,.446,.526,.582],ws=20,Vb=256,Io=new f_,hv=new Ot;let Pd=null,zd=0,Fd=0,Id=!1;const jb=new ie;class pv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:m=jb}=c;Pd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(t,s,l,g,m),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pd,zd,Fd),this._renderer.xr.enabled=Id,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Us||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pd=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:va,format:Ci,colorSpace:Or,depthBuffer:!1},l=mv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xb(c)),this._blurMaterial=qb(c,t,i),this._ggxMaterial=kb(c,t,i)}return l}_compileMaterial(t){const i=new Sa(new ii,t);this._renderer.compile(i,Io)}_sceneToCubeUV(t,i,s,l,c){const g=new pi(90,1,i,s),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,v=S.autoClear,E=S.toneMapping;S.getClearColor(hv),S.toneMapping=Hi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sa(new Yo,new a_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let M=!1;const N=t.background;N?N.isColor&&(y.color.copy(N),t.background=null,M=!0):(y.color.copy(hv),M=!0);for(let F=0;F<6;F++){const U=F%3;U===0?(g.up.set(0,h[F],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+x[F],c.y,c.z)):U===1?(g.up.set(0,0,h[F]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+x[F],c.z)):(g.up.set(0,h[F],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+x[F]));const j=this._cubeSize;Cr(l,U*j,F>2?j:0,j,j),S.setRenderTarget(l),M&&S.render(w,g),S.render(t,g)}S.toneMapping=E,S.autoClear=v,t.background=N}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Us||t.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=vv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const m=c.uniforms;m.envMap.value=t;const g=this._cubeSize;Cr(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(d,Io)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,m=this._lodMeshes[s];m.material=d;const g=d.uniforms,h=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-x*x),v=0+h*1.25,E=S*v,{_lodMax:T}=this,w=this._sizeLods[s],y=3*w*(s>T-es?s-T+es:0),M=4*(this._cubeSize-w);g.envMap.value=t.texture,g.roughness.value=E,g.mipInt.value=T-i,Cr(c,y,M,3*w,2*w),l.setRenderTarget(c),l.render(m,Io),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=T-s,Cr(t,y,M,3*w,2*w),l.setRenderTarget(t),l.render(m,Io)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,m){const g=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[l];S.material=h;const v=h.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*ws-1),w=c/T,y=isFinite(c)?1+Math.floor(x*w):ws;y>ws&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ws}`);const M=[];let N=0;for(let z=0;z<ws;++z){const A=z/w,D=Math.exp(-A*A/2);M.push(D),z===0?N+=D:z<y&&(N+=2*D)}for(let z=0;z<M.length;z++)M[z]=M[z]/N;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=M,v.latitudinal.value=d==="latitudinal",m&&(v.poleAxis.value=m);const{_lodMax:F}=this;v.dTheta.value=T,v.mipInt.value=F-s;const U=this._sizeLods[l],j=3*U*(l>F-es?l-F+es:0),H=4*(this._cubeSize-U);Cr(i,j,H,3*U,2*U),g.setRenderTarget(i),g.render(S,Io)}}function Xb(o){const t=[],i=[],s=[];let l=o;const c=o-es+1+dv.length;for(let d=0;d<c;d++){const m=Math.pow(2,l);t.push(m);let g=1/m;d>o-es?g=dv[d-o+es-1]:d===0&&(g=0),i.push(g);const h=1/(m-2),x=-h,S=1+h,v=[x,x,S,x,S,S,x,x,S,S,x,S],E=6,T=6,w=3,y=2,M=1,N=new Float32Array(w*T*E),F=new Float32Array(y*T*E),U=new Float32Array(M*T*E);for(let H=0;H<E;H++){const z=H%3*2/3-1,A=H>2?0:-1,D=[z,A,0,z+2/3,A,0,z+2/3,A+1,0,z,A,0,z+2/3,A+1,0,z,A+1,0];N.set(D,w*T*H),F.set(v,y*T*H);const me=[H,H,H,H,H,H];U.set(me,M*T*H)}const j=new ii;j.setAttribute("position",new ni(N,w)),j.setAttribute("uv",new ni(F,y)),j.setAttribute("faceIndex",new ni(U,M)),s.push(new Sa(j,null)),l>es&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function mv(o,t,i){const s=new Gi(o,t,i);return s.texture.mapping=Wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function kb(o,t,i){return new wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function qb(o,t,i){const s=new Float32Array(ws),l=new ie(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function gv(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function vv(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class h_ extends Gi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new o_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Yo(5,5,5),c=new wi({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:ma});c.uniforms.tEquirect.value=i;const d=new Sa(l,c),m=i.minFilter;return i.minFilter===Ns&&(i.minFilter=Cn),new $M(1,10,this).update(t,d),i.minFilter=m,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function Wb(o){let t=new WeakMap,i=new WeakMap,s=null;function l(v,E=!1){return v==null?null:E?d(v):c(v)}function c(v){if(v&&v.isTexture){const E=v.mapping;if(E===od||E===ld)if(t.has(v)){const T=t.get(v).texture;return m(T,v.mapping)}else{const T=v.image;if(T&&T.height>0){const w=new h_(T.height);return w.fromEquirectangularTexture(o,v),t.set(v,w),v.addEventListener("dispose",h),m(w.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture){const E=v.mapping,T=E===od||E===ld,w=E===Us||E===Ur;if(T||w){let y=i.get(v);const M=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return s===null&&(s=new pv(o)),y=T?s.fromEquirectangular(v,y):s.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),y.texture;if(y!==void 0)return y.texture;{const N=v.image;return T&&N&&N.height>0||w&&N&&g(N)?(s===null&&(s=new pv(o)),y=T?s.fromEquirectangular(v):s.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,i.set(v,y),v.addEventListener("dispose",x),y.texture):null}}}return v}function m(v,E){return E===od?v.mapping=Us:E===ld&&(v.mapping=Ur),v}function g(v){let E=0;const T=6;for(let w=0;w<T;w++)v[w]!==void 0&&E++;return E===T}function h(v){const E=v.target;E.removeEventListener("dispose",h);const T=t.get(E);T!==void 0&&(t.delete(E),T.dispose())}function x(v){const E=v.target;E.removeEventListener("dispose",x);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function S(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function Yb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Xc("WebGLRenderer: "+s+" extension not supported."),l}}}function Zb(o,t,i,s){const l={},c=new WeakMap;function d(S){const v=S.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",d),delete l[v.id];const E=c.get(v);E&&(t.remove(E),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function m(S,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function g(S){const v=S.attributes;for(const E in v)t.update(v[E],o.ARRAY_BUFFER)}function h(S){const v=[],E=S.index,T=S.attributes.position;let w=0;if(T===void 0)return;if(E!==null){const N=E.array;w=E.version;for(let F=0,U=N.length;F<U;F+=3){const j=N[F+0],H=N[F+1],z=N[F+2];v.push(j,H,H,z,z,j)}}else{const N=T.array;w=T.version;for(let F=0,U=N.length/3-1;F<U;F+=3){const j=F+0,H=F+1,z=F+2;v.push(j,H,H,z,z,j)}}const y=new(T.count>=65535?i_:n_)(v,1);y.version=w;const M=c.get(S);M&&t.remove(M),c.set(S,y)}function x(S){const v=c.get(S);if(v){const E=S.index;E!==null&&v.version<E.version&&h(S)}else h(S);return c.get(S)}return{get:m,update:g,getWireframeAttribute:x}}function Kb(o,t,i){let s;function l(v){s=v}let c,d;function m(v){c=v.type,d=v.bytesPerElement}function g(v,E){o.drawElements(s,E,c,v*d),i.update(E,s,1)}function h(v,E,T){T!==0&&(o.drawElementsInstanced(s,E,c,v*d,T),i.update(E,s,T))}function x(v,E,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,v,0,T);let y=0;for(let M=0;M<T;M++)y+=E[M];i.update(y,s,1)}function S(v,E,T,w){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<v.length;M++)h(v[M]/d,E[M],w[M]);else{y.multiDrawElementsInstancedWEBGL(s,E,0,c,v,0,w,0,T);let M=0;for(let N=0;N<T;N++)M+=E[N]*w[N];i.update(M,s,1)}}this.setMode=l,this.setIndex=m,this.render=g,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=S}function Qb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,m){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=m*(c/3);break;case o.LINES:i.lines+=m*(c/2);break;case o.LINE_STRIP:i.lines+=m*(c-1);break;case o.LINE_LOOP:i.lines+=m*c;break;case o.POINTS:i.points+=m*c;break;default:wt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Jb(o,t,i){const s=new WeakMap,l=new an;function c(d,m,g){const h=d.morphTargetInfluences,x=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,S=x!==void 0?x.length:0;let v=s.get(m);if(v===void 0||v.count!==S){let me=function(){A.dispose(),s.delete(m),m.removeEventListener("dispose",me)};var E=me;v!==void 0&&v.texture.dispose();const T=m.morphAttributes.position!==void 0,w=m.morphAttributes.normal!==void 0,y=m.morphAttributes.color!==void 0,M=m.morphAttributes.position||[],N=m.morphAttributes.normal||[],F=m.morphAttributes.color||[];let U=0;T===!0&&(U=1),w===!0&&(U=2),y===!0&&(U=3);let j=m.attributes.position.count*U,H=1;j>t.maxTextureSize&&(H=Math.ceil(j/t.maxTextureSize),j=t.maxTextureSize);const z=new Float32Array(j*H*4*S),A=new $v(z,j,H,S);A.type=Ii,A.needsUpdate=!0;const D=U*4;for(let G=0;G<S;G++){const ee=M[G],se=N[G],ce=F[G],$=j*H*4*G;for(let O=0;O<ee.count;O++){const I=O*D;T===!0&&(l.fromBufferAttribute(ee,O),z[$+I+0]=l.x,z[$+I+1]=l.y,z[$+I+2]=l.z,z[$+I+3]=0),w===!0&&(l.fromBufferAttribute(se,O),z[$+I+4]=l.x,z[$+I+5]=l.y,z[$+I+6]=l.z,z[$+I+7]=0),y===!0&&(l.fromBufferAttribute(ce,O),z[$+I+8]=l.x,z[$+I+9]=l.y,z[$+I+10]=l.z,z[$+I+11]=ce.itemSize===4?l.w:1)}}v={count:S,texture:A,size:new Vt(j,H)},s.set(m,v),m.addEventListener("dispose",me)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<h.length;y++)T+=h[y];const w=m.morphTargetsRelative?1:1-T;g.getUniforms().setValue(o,"morphTargetBaseInfluence",w),g.getUniforms().setValue(o,"morphTargetInfluences",h)}g.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function $b(o,t,i,s,l){let c=new WeakMap;function d(h){const x=l.render.frame,S=h.geometry,v=t.get(h,S);if(c.get(v)!==x&&(t.update(v),c.set(v,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",g)===!1&&h.addEventListener("dispose",g),c.get(h)!==x&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const E=h.skeleton;c.get(E)!==x&&(E.update(),c.set(E,x))}return v}function m(){c=new WeakMap}function g(h){const x=h.target;x.removeEventListener("dispose",g),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:m}}const eT={[Fv]:"LINEAR_TONE_MAPPING",[Iv]:"REINHARD_TONE_MAPPING",[Bv]:"CINEON_TONE_MAPPING",[Hv]:"ACES_FILMIC_TONE_MAPPING",[Vv]:"AGX_TONE_MAPPING",[jv]:"NEUTRAL_TONE_MAPPING",[Gv]:"CUSTOM_TONE_MAPPING"};function tT(o,t,i,s,l){const c=new Gi(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),d=new Gi(t,i,{type:va,depthBuffer:!1,stencilBuffer:!1}),m=new ii;m.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new gi([0,2,0,0,2,0],2));const g=new KM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Sa(m,g),x=new f_(-1,1,1,-1,0,1);let S=null,v=null,E=!1,T,w=null,y=[],M=!1;this.setSize=function(N,F){c.setSize(N,F),d.setSize(N,F);for(let U=0;U<y.length;U++){const j=y[U];j.setSize&&j.setSize(N,F)}},this.setEffects=function(N){y=N,M=y.length>0&&y[0].isRenderPass===!0;const F=c.width,U=c.height;for(let j=0;j<y.length;j++){const H=y[j];H.setSize&&H.setSize(F,U)}},this.begin=function(N,F){if(E||N.toneMapping===Hi&&y.length===0)return!1;if(w=F,F!==null){const U=F.width,j=F.height;(c.width!==U||c.height!==j)&&this.setSize(U,j)}return M===!1&&N.setRenderTarget(c),T=N.toneMapping,N.toneMapping=Hi,!0},this.hasRenderPass=function(){return M},this.end=function(N,F){N.toneMapping=T,E=!0;let U=c,j=d;for(let H=0;H<y.length;H++){const z=y[H];if(z.enabled!==!1&&(z.render(N,j,U,F),z.needsSwap!==!1)){const A=U;U=j,j=A}}if(S!==N.outputColorSpace||v!==N.toneMapping){S=N.outputColorSpace,v=N.toneMapping,g.defines={},Tt.getTransfer(S)===It&&(g.defines.SRGB_TRANSFER="");const H=eT[v];H&&(g.defines[H]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=U.texture,N.setRenderTarget(w),N.render(h,x),w=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),d.dispose(),m.dispose(),g.dispose()}}const p_=new Pn,Lh=new Xo(1,1),m_=new $v,g_=new EM,v_=new o_,_v=[],xv=[],Sv=new Float32Array(16),Mv=new Float32Array(9),yv=new Float32Array(4);function Br(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=_v[l];if(c===void 0&&(c=new Float32Array(l),_v[l]=c),t!==0){s.toArray(c,0);for(let d=1,m=0;d!==t;++d)m+=i,o[d].toArray(c,m)}return c}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function vn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Kc(o,t){let i=xv[t];i===void 0&&(i=new Int32Array(t),xv[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function nT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function iT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),vn(i,t)}}function aT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),vn(i,t)}}function sT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),vn(i,t)}}function rT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;yv.set(s),o.uniformMatrix2fv(this.addr,!1,yv),vn(i,s)}}function oT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;Mv.set(s),o.uniformMatrix3fv(this.addr,!1,Mv),vn(i,s)}}function lT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(gn(i,s))return;Sv.set(s),o.uniformMatrix4fv(this.addr,!1,Sv),vn(i,s)}}function cT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function uT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),vn(i,t)}}function fT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),vn(i,t)}}function dT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),vn(i,t)}}function hT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function pT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),vn(i,t)}}function mT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),vn(i,t)}}function gT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),vn(i,t)}}function vT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Lh.compareFunction=i.isReversedDepthBuffer()?Xh:jh,c=Lh):c=p_,i.setTexture2D(t||c,l)}function _T(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||g_,l)}function xT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||v_,l)}function ST(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||m_,l)}function MT(o){switch(o){case 5126:return nT;case 35664:return iT;case 35665:return aT;case 35666:return sT;case 35674:return rT;case 35675:return oT;case 35676:return lT;case 5124:case 35670:return cT;case 35667:case 35671:return uT;case 35668:case 35672:return fT;case 35669:case 35673:return dT;case 5125:return hT;case 36294:return pT;case 36295:return mT;case 36296:return gT;case 35678:case 36198:case 36298:case 36306:case 35682:return vT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return ST}}function yT(o,t){o.uniform1fv(this.addr,t)}function ET(o,t){const i=Br(t,this.size,2);o.uniform2fv(this.addr,i)}function bT(o,t){const i=Br(t,this.size,3);o.uniform3fv(this.addr,i)}function TT(o,t){const i=Br(t,this.size,4);o.uniform4fv(this.addr,i)}function AT(o,t){const i=Br(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function RT(o,t){const i=Br(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function CT(o,t){const i=Br(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function wT(o,t){o.uniform1iv(this.addr,t)}function NT(o,t){o.uniform2iv(this.addr,t)}function DT(o,t){o.uniform3iv(this.addr,t)}function UT(o,t){o.uniform4iv(this.addr,t)}function LT(o,t){o.uniform1uiv(this.addr,t)}function OT(o,t){o.uniform2uiv(this.addr,t)}function PT(o,t){o.uniform3uiv(this.addr,t)}function zT(o,t){o.uniform4uiv(this.addr,t)}function FT(o,t,i){const s=this.cache,l=t.length,c=Kc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Lh:d=p_;for(let m=0;m!==l;++m)i.setTexture2D(t[m]||d,c[m])}function IT(o,t,i){const s=this.cache,l=t.length,c=Kc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||g_,c[d])}function BT(o,t,i){const s=this.cache,l=t.length,c=Kc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||v_,c[d])}function HT(o,t,i){const s=this.cache,l=t.length,c=Kc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||m_,c[d])}function GT(o){switch(o){case 5126:return yT;case 35664:return ET;case 35665:return bT;case 35666:return TT;case 35674:return AT;case 35675:return RT;case 35676:return CT;case 5124:case 35670:return wT;case 35667:case 35671:return NT;case 35668:case 35672:return DT;case 35669:case 35673:return UT;case 5125:return LT;case 36294:return OT;case 36295:return PT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return HT}}class VT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=MT(i.type)}}class jT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=GT(i.type)}}class XT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const m=l[c];m.setValue(t,i[m.id],s)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function Ev(o,t){o.seq.push(t),o.map[t.id]=t}function kT(o,t,i){const s=o.name,l=s.length;for(Bd.lastIndex=0;;){const c=Bd.exec(s),d=Bd.lastIndex;let m=c[1];const g=c[2]==="]",h=c[3];if(g&&(m=m|0),h===void 0||h==="["&&d+2===l){Ev(i,h===void 0?new VT(m,o,t):new jT(m,o,t));break}else{let S=i.map[m];S===void 0&&(S=new XT(m),Ev(i,S)),i=S}}}class Hc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const m=t.getActiveUniform(i,d),g=t.getUniformLocation(i,m.name);kT(m,g,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const m=i[c],g=s[m.id];g.needsUpdate!==!1&&m.setValue(t,g.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function bv(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const qT=37297;let WT=0;function YT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const m=d+1;s.push(`${m===t?">":" "} ${m}: ${i[d]}`)}return s.join(`
`)}const Tv=new ht;function ZT(o){Tt._getMatrix(Tv,Tt.workingColorSpace,o);const t=`mat3( ${Tv.elements.map(i=>i.toFixed(4))} )`;switch(Tt.getTransfer(o)){case Gc:return[t,"LinearTransferOETF"];case It:return[t,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Av(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const m=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+YT(o.getShaderSource(t),m)}else return c}function KT(o,t){const i=ZT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const QT={[Fv]:"Linear",[Iv]:"Reinhard",[Bv]:"Cineon",[Hv]:"ACESFilmic",[Vv]:"AgX",[jv]:"Neutral",[Gv]:"Custom"};function JT(o,t){const i=QT[t];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new ie;function $T(){Tt.getLuminanceCoefficients(Oc);const o=Oc.x.toFixed(4),t=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Go).join(`
`)}function t1(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function n1(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let m=1;c.type===o.FLOAT_MAT2&&(m=2),c.type===o.FLOAT_MAT3&&(m=3),c.type===o.FLOAT_MAT4&&(m=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:m}}return i}function Go(o){return o!==""}function Rv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const i1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(o){return o.replace(i1,s1)}const a1=new Map;function s1(o,t){let i=pt[t];if(i===void 0){const s=a1.get(t);if(s!==void 0)i=pt[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Oh(i)}const r1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wv(o){return o.replace(r1,o1)}function o1(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Nv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const l1={[Pc]:"SHADOWMAP_TYPE_PCF",[Ho]:"SHADOWMAP_TYPE_VSM"};function c1(o){return l1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const u1={[Us]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE",[Wc]:"ENVMAP_TYPE_CUBE_UV"};function f1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":u1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const d1={[Ur]:"ENVMAP_MODE_REFRACTION"};function h1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":d1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const p1={[zv]:"ENVMAP_BLENDING_MULTIPLY",[tM]:"ENVMAP_BLENDING_MIX",[nM]:"ENVMAP_BLENDING_ADD"};function m1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":p1[o.combine]||"ENVMAP_BLENDING_NONE"}function g1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function v1(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,m=i.fragmentShader;const g=c1(i),h=f1(i),x=h1(i),S=m1(i),v=g1(i),E=e1(i),T=t1(c),w=l.createProgram();let y,M,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Go).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Go).join(`
`),M.length>0&&(M+=`
`)):(y=[Nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Go).join(`
`),M=[Nv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+S:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Hi?"#define TONE_MAPPING":"",i.toneMapping!==Hi?pt.tonemapping_pars_fragment:"",i.toneMapping!==Hi?JT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,KT("linearToOutputTexel",i.outputColorSpace),$T(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Go).join(`
`)),d=Oh(d),d=Rv(d,i),d=Cv(d,i),m=Oh(m),m=Rv(m,i),m=Cv(m,i),d=wv(d),m=wv(m),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",i.glslVersion===H0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===H0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const F=N+y+d,U=N+M+m,j=bv(l,l.VERTEX_SHADER,F),H=bv(l,l.FRAGMENT_SHADER,U);l.attachShader(w,j),l.attachShader(w,H),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(G){if(o.debug.checkShaderErrors){const ee=l.getProgramInfoLog(w)||"",se=l.getShaderInfoLog(j)||"",ce=l.getShaderInfoLog(H)||"",$=ee.trim(),O=se.trim(),I=ce.trim();let le=!0,he=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(le=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,j,H);else{const be=Av(l,j,"vertex"),P=Av(l,H,"fragment");wt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+be+`
`+P)}else $!==""?at("WebGLProgram: Program Info Log:",$):(O===""||I==="")&&(he=!1);he&&(G.diagnostics={runnable:le,programLog:$,vertexShader:{log:O,prefix:y},fragmentShader:{log:I,prefix:M}})}l.deleteShader(j),l.deleteShader(H),A=new Hc(l,w),D=n1(l,w)}let A;this.getUniforms=function(){return A===void 0&&z(this),A};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let me=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return me===!1&&(me=l.getProgramParameter(w,qT)),me},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=WT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=j,this.fragmentShader=H,this}let _1=0;class x1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new S1(t),i.set(t,s)),s}}class S1{constructor(t){this.id=_1++,this.code=t,this.usedTimes=0}}function M1(o,t,i,s,l,c){const d=new e_,m=new x1,g=new Set,h=[],x=new Map,S=s.logarithmicDepthBuffer;let v=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return g.add(A),A===0?"uv":`uv${A}`}function w(A,D,me,G,ee){const se=G.fog,ce=ee.geometry,$=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,O=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,I=t.get(A.envMap||$,O),le=I&&I.mapping===Wc?I.image.height:null,he=E[A.type];A.precision!==null&&(v=s.getMaxPrecision(A.precision),v!==A.precision&&at("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const be=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,P=be!==void 0?be.length:0;let Y=0;ce.morphAttributes.position!==void 0&&(Y=1),ce.morphAttributes.normal!==void 0&&(Y=2),ce.morphAttributes.color!==void 0&&(Y=3);let _e,Re,Fe,ne;if(he){const bt=Fi[he];_e=bt.vertexShader,Re=bt.fragmentShader}else _e=A.vertexShader,Re=A.fragmentShader,m.update(A),Fe=m.getVertexShaderID(A),ne=m.getFragmentShaderID(A);const xe=o.getRenderTarget(),Te=o.state.buffers.depth.getReversed(),Xe=ee.isInstancedMesh===!0,Qe=ee.isBatchedMesh===!0,et=!!A.map,Qt=!!A.matcap,_t=!!I,mt=!!A.aoMap,Nt=!!A.lightMap,lt=!!A.bumpMap,Kt=!!A.normalMap,V=!!A.displacementMap,qt=!!A.emissiveMap,Et=!!A.metalnessMap,Ut=!!A.roughnessMap,We=A.anisotropy>0,L=A.clearcoat>0,b=A.dispersion>0,W=A.iridescence>0,pe=A.sheen>0,Se=A.transmission>0,fe=We&&!!A.anisotropyMap,ke=L&&!!A.clearcoatMap,we=L&&!!A.clearcoatNormalMap,Ke=L&&!!A.clearcoatRoughnessMap,tt=W&&!!A.iridescenceMap,Ee=W&&!!A.iridescenceThicknessMap,Me=pe&&!!A.sheenColorMap,Oe=pe&&!!A.sheenRoughnessMap,Le=!!A.specularMap,Pe=!!A.specularColorMap,ut=!!A.specularIntensityMap,q=Se&&!!A.transmissionMap,Ce=Se&&!!A.thicknessMap,Ae=!!A.gradientMap,ze=!!A.alphaMap,ye=A.alphaTest>0,ue=!!A.alphaHash,Be=!!A.extensions;let it=Hi;A.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(it=o.toneMapping);const Pt={shaderID:he,shaderType:A.type,shaderName:A.name,vertexShader:_e,fragmentShader:Re,defines:A.defines,customVertexShaderID:Fe,customFragmentShaderID:ne,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:Qe,batchingColor:Qe&&ee._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&ee.instanceColor!==null,instancingMorph:Xe&&ee.morphTexture!==null,outputColorSpace:xe===null?o.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Or,alphaToCoverage:!!A.alphaToCoverage,map:et,matcap:Qt,envMap:_t,envMapMode:_t&&I.mapping,envMapCubeUVHeight:le,aoMap:mt,lightMap:Nt,bumpMap:lt,normalMap:Kt,displacementMap:V,emissiveMap:qt,normalMapObjectSpace:Kt&&A.normalMapType===rM,normalMapTangentSpace:Kt&&A.normalMapType===sM,metalnessMap:Et,roughnessMap:Ut,anisotropy:We,anisotropyMap:fe,clearcoat:L,clearcoatMap:ke,clearcoatNormalMap:we,clearcoatRoughnessMap:Ke,dispersion:b,iridescence:W,iridescenceMap:tt,iridescenceThicknessMap:Ee,sheen:pe,sheenColorMap:Me,sheenRoughnessMap:Oe,specularMap:Le,specularColorMap:Pe,specularIntensityMap:ut,transmission:Se,transmissionMap:q,thicknessMap:Ce,gradientMap:Ae,opaque:A.transparent===!1&&A.blending===wr&&A.alphaToCoverage===!1,alphaMap:ze,alphaTest:ye,alphaHash:ue,combine:A.combine,mapUv:et&&T(A.map.channel),aoMapUv:mt&&T(A.aoMap.channel),lightMapUv:Nt&&T(A.lightMap.channel),bumpMapUv:lt&&T(A.bumpMap.channel),normalMapUv:Kt&&T(A.normalMap.channel),displacementMapUv:V&&T(A.displacementMap.channel),emissiveMapUv:qt&&T(A.emissiveMap.channel),metalnessMapUv:Et&&T(A.metalnessMap.channel),roughnessMapUv:Ut&&T(A.roughnessMap.channel),anisotropyMapUv:fe&&T(A.anisotropyMap.channel),clearcoatMapUv:ke&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:we&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(A.sheenRoughnessMap.channel),specularMapUv:Le&&T(A.specularMap.channel),specularColorMapUv:Pe&&T(A.specularColorMap.channel),specularIntensityMapUv:ut&&T(A.specularIntensityMap.channel),transmissionMapUv:q&&T(A.transmissionMap.channel),thicknessMapUv:Ce&&T(A.thicknessMap.channel),alphaMapUv:ze&&T(A.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(Kt||We),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ce.attributes.uv&&(et||ze),fog:!!se,useFog:A.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ce.attributes.normal===void 0&&Kt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Te,skinning:ee.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:Y,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&me.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:et&&A.map.isVideoTexture===!0&&Tt.getTransfer(A.map.colorSpace)===It,decodeVideoTextureEmissive:qt&&A.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(A.emissiveMap.colorSpace)===It,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ha,flipSided:A.side===Xn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Be&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&A.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pt.vertexUv1s=g.has(1),Pt.vertexUv2s=g.has(2),Pt.vertexUv3s=g.has(3),g.clear(),Pt}function y(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const me in A.defines)D.push(me),D.push(A.defines[me]);return A.isRawShaderMaterial===!1&&(M(D,A),N(D,A),D.push(o.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function M(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function N(A,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),A.push(d.mask)}function F(A){const D=E[A.type];let me;if(D){const G=Fi[D];me=WM.clone(G.uniforms)}else me=A.uniforms;return me}function U(A,D){let me=x.get(D);return me!==void 0?++me.usedTimes:(me=new v1(o,D,A,l),h.push(me),x.set(D,me)),me}function j(A){if(--A.usedTimes===0){const D=h.indexOf(A);h[D]=h[h.length-1],h.pop(),x.delete(A.cacheKey),A.destroy()}}function H(A){m.remove(A)}function z(){m.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:F,acquireProgram:U,releaseProgram:j,releaseShaderCache:H,programs:h,dispose:z}}function y1(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let m=o.get(d);return m===void 0&&(m={},o.set(d,m)),m}function s(d){o.delete(d)}function l(d,m,g){o.get(d)[m]=g}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function E1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function Dv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Uv(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(v){let E=0;return v.isInstancedMesh&&(E+=2),v.isSkinnedMesh&&(E+=1),E}function m(v,E,T,w,y,M){let N=o[t];return N===void 0?(N={id:v.id,object:v,geometry:E,material:T,materialVariant:d(v),groupOrder:w,renderOrder:v.renderOrder,z:y,group:M},o[t]=N):(N.id=v.id,N.object=v,N.geometry=E,N.material=T,N.materialVariant=d(v),N.groupOrder=w,N.renderOrder=v.renderOrder,N.z=y,N.group=M),t++,N}function g(v,E,T,w,y,M){const N=m(v,E,T,w,y,M);T.transmission>0?s.push(N):T.transparent===!0?l.push(N):i.push(N)}function h(v,E,T,w,y,M){const N=m(v,E,T,w,y,M);T.transmission>0?s.unshift(N):T.transparent===!0?l.unshift(N):i.unshift(N)}function x(v,E){i.length>1&&i.sort(v||E1),s.length>1&&s.sort(E||Dv),l.length>1&&l.sort(E||Dv)}function S(){for(let v=t,E=o.length;v<E;v++){const T=o[v];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:h,finish:S,sort:x}}function b1(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new Uv,o.set(s,[d])):l>=c.length?(d=new Uv,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function T1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ie,color:new Ot};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":i={color:new Ot,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return o[t.id]=i,i}}}function A1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let R1=0;function C1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function w1(o){const t=new T1,i=A1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ie);const l=new ie,c=new en,d=new en;function m(h){let x=0,S=0,v=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let E=0,T=0,w=0,y=0,M=0,N=0,F=0,U=0,j=0,H=0,z=0;h.sort(C1);for(let D=0,me=h.length;D<me;D++){const G=h[D],ee=G.color,se=G.intensity,ce=G.distance;let $=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Lr?$=G.shadow.map.texture:$=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=ee.r*se,S+=ee.g*se,v+=ee.b*se;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],se);z++}else if(G.isDirectionalLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const I=G.shadow,le=i.get(G);le.shadowIntensity=I.intensity,le.shadowBias=I.bias,le.shadowNormalBias=I.normalBias,le.shadowRadius=I.radius,le.shadowMapSize=I.mapSize,s.directionalShadow[E]=le,s.directionalShadowMap[E]=$,s.directionalShadowMatrix[E]=G.shadow.matrix,N++}s.directional[E]=O,E++}else if(G.isSpotLight){const O=t.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(ee).multiplyScalar(se),O.distance=ce,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[w]=O;const I=G.shadow;if(G.map&&(s.spotLightMap[j]=G.map,j++,I.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[w]=I.matrix,G.castShadow){const le=i.get(G);le.shadowIntensity=I.intensity,le.shadowBias=I.bias,le.shadowNormalBias=I.normalBias,le.shadowRadius=I.radius,le.shadowMapSize=I.mapSize,s.spotShadow[w]=le,s.spotShadowMap[w]=$,U++}w++}else if(G.isRectAreaLight){const O=t.get(G);O.color.copy(ee).multiplyScalar(se),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=O,y++}else if(G.isPointLight){const O=t.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const I=G.shadow,le=i.get(G);le.shadowIntensity=I.intensity,le.shadowBias=I.bias,le.shadowNormalBias=I.normalBias,le.shadowRadius=I.radius,le.shadowMapSize=I.mapSize,le.shadowCameraNear=I.camera.near,le.shadowCameraFar=I.camera.far,s.pointShadow[T]=le,s.pointShadowMap[T]=$,s.pointShadowMatrix[T]=G.shadow.matrix,F++}s.point[T]=O,T++}else if(G.isHemisphereLight){const O=t.get(G);O.skyColor.copy(G.color).multiplyScalar(se),O.groundColor.copy(G.groundColor).multiplyScalar(se),s.hemi[M]=O,M++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ue.LTC_FLOAT_1,s.rectAreaLTC2=Ue.LTC_FLOAT_2):(s.rectAreaLTC1=Ue.LTC_HALF_1,s.rectAreaLTC2=Ue.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=S,s.ambient[2]=v;const A=s.hash;(A.directionalLength!==E||A.pointLength!==T||A.spotLength!==w||A.rectAreaLength!==y||A.hemiLength!==M||A.numDirectionalShadows!==N||A.numPointShadows!==F||A.numSpotShadows!==U||A.numSpotMaps!==j||A.numLightProbes!==z)&&(s.directional.length=E,s.spot.length=w,s.rectArea.length=y,s.point.length=T,s.hemi.length=M,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=U+j-H,s.spotLightMap.length=j,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=z,A.directionalLength=E,A.pointLength=T,A.spotLength=w,A.rectAreaLength=y,A.hemiLength=M,A.numDirectionalShadows=N,A.numPointShadows=F,A.numSpotShadows=U,A.numSpotMaps=j,A.numLightProbes=z,s.version=R1++)}function g(h,x){let S=0,v=0,E=0,T=0,w=0;const y=x.matrixWorldInverse;for(let M=0,N=h.length;M<N;M++){const F=h[M];if(F.isDirectionalLight){const U=s.directional[S];U.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),S++}else if(F.isSpotLight){const U=s.spot[E];U.position.setFromMatrixPosition(F.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(F.matrixWorld),l.setFromMatrixPosition(F.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),E++}else if(F.isRectAreaLight){const U=s.rectArea[T];U.position.setFromMatrixPosition(F.matrixWorld),U.position.applyMatrix4(y),d.identity(),c.copy(F.matrixWorld),c.premultiply(y),d.extractRotation(c),U.halfWidth.set(F.width*.5,0,0),U.halfHeight.set(0,F.height*.5,0),U.halfWidth.applyMatrix4(d),U.halfHeight.applyMatrix4(d),T++}else if(F.isPointLight){const U=s.point[v];U.position.setFromMatrixPosition(F.matrixWorld),U.position.applyMatrix4(y),v++}else if(F.isHemisphereLight){const U=s.hemi[w];U.direction.setFromMatrixPosition(F.matrixWorld),U.direction.transformDirection(y),w++}}}return{setup:m,setupView:g,state:s}}function Lv(o){const t=new w1(o),i=[],s=[];function l(x){h.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function d(x){s.push(x)}function m(){t.setup(i)}function g(x){t.setupView(i,x)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:m,setupLightsView:g,pushLight:c,pushShadow:d}}function N1(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let m;return d===void 0?(m=new Lv(o),t.set(l,[m])):c>=d.length?(m=new Lv(o),d.push(m)):m=d[c],m}function s(){t=new WeakMap}return{get:i,dispose:s}}const D1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,L1=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],O1=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],Ov=new en,Bo=new ie,Hd=new ie;function P1(o,t,i){let s=new s_;const l=new Vt,c=new Vt,d=new an,m=new QM,g=new JM,h={},x=i.maxTextureSize,S={[ns]:Xn,[Xn]:ns,[ha]:ha},v=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:D1,fragmentShader:U1}),E=v.clone();E.defines.HORIZONTAL_PASS=1;const T=new ii;T.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Sa(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pc;let M=this.type;this.render=function(H,z,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;this.type===zS&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pc);const D=o.getRenderTarget(),me=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),ee=o.state;ee.setBlending(ma),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const se=M!==this.type;se&&z.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach($=>$.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,$=H.length;ce<$;ce++){const O=H[ce],I=O.shadow;if(I===void 0){at("WebGLShadowMap:",O,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const le=I.getFrameExtents();l.multiply(le),c.copy(I.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/le.x),l.x=c.x*le.x,I.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/le.y),l.y=c.y*le.y,I.mapSize.y=c.y));const he=o.state.buffers.depth.getReversed();if(I.camera._reversedDepth=he,I.map===null||se===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Ho){if(O.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Gi(l.x,l.y,{format:Lr,type:va,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),I.map.texture.name=O.name+".shadowMap",I.map.depthTexture=new Xo(l.x,l.y,Ii),I.map.depthTexture.name=O.name+".shadowMapDepth",I.map.depthTexture.format=_a,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=bn,I.map.depthTexture.magFilter=bn}else O.isPointLight?(I.map=new h_(l.x),I.map.depthTexture=new kM(l.x,Vi)):(I.map=new Gi(l.x,l.y),I.map.depthTexture=new Xo(l.x,l.y,Vi)),I.map.depthTexture.name=O.name+".shadowMap",I.map.depthTexture.format=_a,this.type===Pc?(I.map.depthTexture.compareFunction=he?Xh:jh,I.map.depthTexture.minFilter=Cn,I.map.depthTexture.magFilter=Cn):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=bn,I.map.depthTexture.magFilter=bn);I.camera.updateProjectionMatrix()}const be=I.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<be;P++){if(I.map.isWebGLCubeRenderTarget)o.setRenderTarget(I.map,P),o.clear();else{P===0&&(o.setRenderTarget(I.map),o.clear());const Y=I.getViewport(P);d.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),ee.viewport(d)}if(O.isPointLight){const Y=I.camera,_e=I.matrix,Re=O.distance||Y.far;Re!==Y.far&&(Y.far=Re,Y.updateProjectionMatrix()),Bo.setFromMatrixPosition(O.matrixWorld),Y.position.copy(Bo),Hd.copy(Y.position),Hd.add(L1[P]),Y.up.copy(O1[P]),Y.lookAt(Hd),Y.updateMatrixWorld(),_e.makeTranslation(-Bo.x,-Bo.y,-Bo.z),Ov.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Ov,Y.coordinateSystem,Y.reversedDepth)}else I.updateMatrices(O);s=I.getFrustum(),U(z,A,I.camera,O,this.type)}I.isPointLightShadow!==!0&&this.type===Ho&&N(I,A),I.needsUpdate=!1}M=this.type,y.needsUpdate=!1,o.setRenderTarget(D,me,G)};function N(H,z){const A=t.update(w);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,E.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,E.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Gi(l.x,l.y,{format:Lr,type:va})),v.uniforms.shadow_pass.value=H.map.depthTexture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(z,null,A,v,w,null),E.uniforms.shadow_pass.value=H.mapPass.texture,E.uniforms.resolution.value=H.mapSize,E.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(z,null,A,E,w,null)}function F(H,z,A,D){let me=null;const G=A.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)me=G;else if(me=A.isPointLight===!0?g:m,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ee=me.uuid,se=z.uuid;let ce=h[ee];ce===void 0&&(ce={},h[ee]=ce);let $=ce[se];$===void 0&&($=me.clone(),ce[se]=$,z.addEventListener("dispose",j)),me=$}if(me.visible=z.visible,me.wireframe=z.wireframe,D===Ho?me.side=z.shadowSide!==null?z.shadowSide:z.side:me.side=z.shadowSide!==null?z.shadowSide:S[z.side],me.alphaMap=z.alphaMap,me.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,me.map=z.map,me.clipShadows=z.clipShadows,me.clippingPlanes=z.clippingPlanes,me.clipIntersection=z.clipIntersection,me.displacementMap=z.displacementMap,me.displacementScale=z.displacementScale,me.displacementBias=z.displacementBias,me.wireframeLinewidth=z.wireframeLinewidth,me.linewidth=z.linewidth,A.isPointLight===!0&&me.isMeshDistanceMaterial===!0){const ee=o.properties.get(me);ee.light=A}return me}function U(H,z,A,D,me){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&me===Ho)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,H.matrixWorld);const se=t.update(H),ce=H.material;if(Array.isArray(ce)){const $=se.groups;for(let O=0,I=$.length;O<I;O++){const le=$[O],he=ce[le.materialIndex];if(he&&he.visible){const be=F(H,he,D,me);H.onBeforeShadow(o,H,z,A,se,be,le),o.renderBufferDirect(A,null,se,be,H,le),H.onAfterShadow(o,H,z,A,se,be,le)}}}else if(ce.visible){const $=F(H,ce,D,me);H.onBeforeShadow(o,H,z,A,se,$,null),o.renderBufferDirect(A,null,se,$,H,null),H.onAfterShadow(o,H,z,A,se,$,null)}}const ee=H.children;for(let se=0,ce=ee.length;se<ce;se++)U(ee[se],z,A,D,me)}function j(H){H.target.removeEventListener("dispose",j);for(const A in h){const D=h[A],me=H.target.uuid;me in D&&(D[me].dispose(),delete D[me])}}}function z1(o,t){function i(){let q=!1;const Ce=new an;let Ae=null;const ze=new an(0,0,0,0);return{setMask:function(ye){Ae!==ye&&!q&&(o.colorMask(ye,ye,ye,ye),Ae=ye)},setLocked:function(ye){q=ye},setClear:function(ye,ue,Be,it,Pt){Pt===!0&&(ye*=it,ue*=it,Be*=it),Ce.set(ye,ue,Be,it),ze.equals(Ce)===!1&&(o.clearColor(ye,ue,Be,it),ze.copy(Ce))},reset:function(){q=!1,Ae=null,ze.set(-1,0,0,0)}}}function s(){let q=!1,Ce=!1,Ae=null,ze=null,ye=null;return{setReversed:function(ue){if(Ce!==ue){const Be=t.get("EXT_clip_control");ue?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Ce=ue;const it=ye;ye=null,this.setClear(it)}},getReversed:function(){return Ce},setTest:function(ue){ue?xe(o.DEPTH_TEST):Te(o.DEPTH_TEST)},setMask:function(ue){Ae!==ue&&!q&&(o.depthMask(ue),Ae=ue)},setFunc:function(ue){if(Ce&&(ue=gM[ue]),ze!==ue){switch(ue){case Xd:o.depthFunc(o.NEVER);break;case kd:o.depthFunc(o.ALWAYS);break;case qd:o.depthFunc(o.LESS);break;case Dr:o.depthFunc(o.LEQUAL);break;case Wd:o.depthFunc(o.EQUAL);break;case Yd:o.depthFunc(o.GEQUAL);break;case Zd:o.depthFunc(o.GREATER);break;case Kd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ze=ue}},setLocked:function(ue){q=ue},setClear:function(ue){ye!==ue&&(ye=ue,Ce&&(ue=1-ue),o.clearDepth(ue))},reset:function(){q=!1,Ae=null,ze=null,ye=null,Ce=!1}}}function l(){let q=!1,Ce=null,Ae=null,ze=null,ye=null,ue=null,Be=null,it=null,Pt=null;return{setTest:function(bt){q||(bt?xe(o.STENCIL_TEST):Te(o.STENCIL_TEST))},setMask:function(bt){Ce!==bt&&!q&&(o.stencilMask(bt),Ce=bt)},setFunc:function(bt,wn,vi){(Ae!==bt||ze!==wn||ye!==vi)&&(o.stencilFunc(bt,wn,vi),Ae=bt,ze=wn,ye=vi)},setOp:function(bt,wn,vi){(ue!==bt||Be!==wn||it!==vi)&&(o.stencilOp(bt,wn,vi),ue=bt,Be=wn,it=vi)},setLocked:function(bt){q=bt},setClear:function(bt){Pt!==bt&&(o.clearStencil(bt),Pt=bt)},reset:function(){q=!1,Ce=null,Ae=null,ze=null,ye=null,ue=null,Be=null,it=null,Pt=null}}}const c=new i,d=new s,m=new l,g=new WeakMap,h=new WeakMap;let x={},S={},v=new WeakMap,E=[],T=null,w=!1,y=null,M=null,N=null,F=null,U=null,j=null,H=null,z=new Ot(0,0,0),A=0,D=!1,me=null,G=null,ee=null,se=null,ce=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,I=0;const le=o.getParameter(o.VERSION);le.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(le)[1]),O=I>=1):le.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),O=I>=2);let he=null,be={};const P=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),_e=new an().fromArray(P),Re=new an().fromArray(Y);function Fe(q,Ce,Ae,ze){const ye=new Uint8Array(4),ue=o.createTexture();o.bindTexture(q,ue),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Be=0;Be<Ae;Be++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ce,0,o.RGBA,1,1,ze,0,o.RGBA,o.UNSIGNED_BYTE,ye):o.texImage2D(Ce+Be,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ye);return ue}const ne={};ne[o.TEXTURE_2D]=Fe(o.TEXTURE_2D,o.TEXTURE_2D,1),ne[o.TEXTURE_CUBE_MAP]=Fe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[o.TEXTURE_2D_ARRAY]=Fe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ne[o.TEXTURE_3D]=Fe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),m.setClear(0),xe(o.DEPTH_TEST),d.setFunc(Dr),lt(!1),Kt(P0),xe(o.CULL_FACE),mt(ma);function xe(q){x[q]!==!0&&(o.enable(q),x[q]=!0)}function Te(q){x[q]!==!1&&(o.disable(q),x[q]=!1)}function Xe(q,Ce){return S[q]!==Ce?(o.bindFramebuffer(q,Ce),S[q]=Ce,q===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Ce),q===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(q,Ce){let Ae=E,ze=!1;if(q){Ae=v.get(Ce),Ae===void 0&&(Ae=[],v.set(Ce,Ae));const ye=q.textures;if(Ae.length!==ye.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let ue=0,Be=ye.length;ue<Be;ue++)Ae[ue]=o.COLOR_ATTACHMENT0+ue;Ae.length=ye.length,ze=!0}}else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,ze=!0);ze&&o.drawBuffers(Ae)}function et(q){return T!==q?(o.useProgram(q),T=q,!0):!1}const Qt={[Cs]:o.FUNC_ADD,[IS]:o.FUNC_SUBTRACT,[BS]:o.FUNC_REVERSE_SUBTRACT};Qt[HS]=o.MIN,Qt[GS]=o.MAX;const _t={[VS]:o.ZERO,[jS]:o.ONE,[XS]:o.SRC_COLOR,[Vd]:o.SRC_ALPHA,[KS]:o.SRC_ALPHA_SATURATE,[YS]:o.DST_COLOR,[qS]:o.DST_ALPHA,[kS]:o.ONE_MINUS_SRC_COLOR,[jd]:o.ONE_MINUS_SRC_ALPHA,[ZS]:o.ONE_MINUS_DST_COLOR,[WS]:o.ONE_MINUS_DST_ALPHA,[QS]:o.CONSTANT_COLOR,[JS]:o.ONE_MINUS_CONSTANT_COLOR,[$S]:o.CONSTANT_ALPHA,[eM]:o.ONE_MINUS_CONSTANT_ALPHA};function mt(q,Ce,Ae,ze,ye,ue,Be,it,Pt,bt){if(q===ma){w===!0&&(Te(o.BLEND),w=!1);return}if(w===!1&&(xe(o.BLEND),w=!0),q!==FS){if(q!==y||bt!==D){if((M!==Cs||U!==Cs)&&(o.blendEquation(o.FUNC_ADD),M=Cs,U=Cs),bt)switch(q){case wr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gd:o.blendFunc(o.ONE,o.ONE);break;case z0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case F0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:wt("WebGLState: Invalid blending: ",q);break}else switch(q){case wr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case z0:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case F0:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",q);break}N=null,F=null,j=null,H=null,z.set(0,0,0),A=0,y=q,D=bt}return}ye=ye||Ce,ue=ue||Ae,Be=Be||ze,(Ce!==M||ye!==U)&&(o.blendEquationSeparate(Qt[Ce],Qt[ye]),M=Ce,U=ye),(Ae!==N||ze!==F||ue!==j||Be!==H)&&(o.blendFuncSeparate(_t[Ae],_t[ze],_t[ue],_t[Be]),N=Ae,F=ze,j=ue,H=Be),(it.equals(z)===!1||Pt!==A)&&(o.blendColor(it.r,it.g,it.b,Pt),z.copy(it),A=Pt),y=q,D=!1}function Nt(q,Ce){q.side===ha?Te(o.CULL_FACE):xe(o.CULL_FACE);let Ae=q.side===Xn;Ce&&(Ae=!Ae),lt(Ae),q.blending===wr&&q.transparent===!1?mt(ma):mt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),d.setFunc(q.depthFunc),d.setTest(q.depthTest),d.setMask(q.depthWrite),c.setMask(q.colorWrite);const ze=q.stencilWrite;m.setTest(ze),ze&&(m.setMask(q.stencilWriteMask),m.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),m.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),qt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?xe(o.SAMPLE_ALPHA_TO_COVERAGE):Te(o.SAMPLE_ALPHA_TO_COVERAGE)}function lt(q){me!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),me=q)}function Kt(q){q!==OS?(xe(o.CULL_FACE),q!==G&&(q===P0?o.cullFace(o.BACK):q===PS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Te(o.CULL_FACE),G=q}function V(q){q!==ee&&(O&&o.lineWidth(q),ee=q)}function qt(q,Ce,Ae){q?(xe(o.POLYGON_OFFSET_FILL),(se!==Ce||ce!==Ae)&&(se=Ce,ce=Ae,d.getReversed()&&(Ce=-Ce),o.polygonOffset(Ce,Ae))):Te(o.POLYGON_OFFSET_FILL)}function Et(q){q?xe(o.SCISSOR_TEST):Te(o.SCISSOR_TEST)}function Ut(q){q===void 0&&(q=o.TEXTURE0+$-1),he!==q&&(o.activeTexture(q),he=q)}function We(q,Ce,Ae){Ae===void 0&&(he===null?Ae=o.TEXTURE0+$-1:Ae=he);let ze=be[Ae];ze===void 0&&(ze={type:void 0,texture:void 0},be[Ae]=ze),(ze.type!==q||ze.texture!==Ce)&&(he!==Ae&&(o.activeTexture(Ae),he=Ae),o.bindTexture(q,Ce||ne[q]),ze.type=q,ze.texture=Ce)}function L(){const q=be[he];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function pe(){try{o.texSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Se(){try{o.texSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function fe(){try{o.compressedTexSubImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function ke(){try{o.compressedTexSubImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function we(){try{o.texStorage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Ke(){try{o.texStorage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function tt(){try{o.texImage2D(...arguments)}catch(q){wt("WebGLState:",q)}}function Ee(){try{o.texImage3D(...arguments)}catch(q){wt("WebGLState:",q)}}function Me(q){_e.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),_e.copy(q))}function Oe(q){Re.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),Re.copy(q))}function Le(q,Ce){let Ae=h.get(Ce);Ae===void 0&&(Ae=new WeakMap,h.set(Ce,Ae));let ze=Ae.get(q);ze===void 0&&(ze=o.getUniformBlockIndex(Ce,q.name),Ae.set(q,ze))}function Pe(q,Ce){const ze=h.get(Ce).get(q);g.get(Ce)!==ze&&(o.uniformBlockBinding(Ce,ze,q.__bindingPointIndex),g.set(Ce,ze))}function ut(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},he=null,be={},S={},v=new WeakMap,E=[],T=null,w=!1,y=null,M=null,N=null,F=null,U=null,j=null,H=null,z=new Ot(0,0,0),A=0,D=!1,me=null,G=null,ee=null,se=null,ce=null,_e.set(0,0,o.canvas.width,o.canvas.height),Re.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),m.reset()}return{buffers:{color:c,depth:d,stencil:m},enable:xe,disable:Te,bindFramebuffer:Xe,drawBuffers:Qe,useProgram:et,setBlending:mt,setMaterial:Nt,setFlipSided:lt,setCullFace:Kt,setLineWidth:V,setPolygonOffset:qt,setScissorTest:Et,activeTexture:Ut,bindTexture:We,unbindTexture:L,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:tt,texImage3D:Ee,updateUBOMapping:Le,uniformBlockBinding:Pe,texStorage2D:we,texStorage3D:Ke,texSubImage2D:pe,texSubImage3D:Se,compressedTexSubImage2D:fe,compressedTexSubImage3D:ke,scissor:Me,viewport:Oe,reset:ut}}function F1(o,t,i,s,l,c,d){const m=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Vt,x=new WeakMap;let S;const v=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,b){return E?new OffscreenCanvas(L,b):jc("canvas")}function w(L,b,W){let pe=1;const Se=We(L);if((Se.width>W||Se.height>W)&&(pe=W/Math.max(Se.width,Se.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(pe*Se.width),ke=Math.floor(pe*Se.height);S===void 0&&(S=T(fe,ke));const we=b?T(fe,ke):S;return we.width=fe,we.height=ke,we.getContext("2d").drawImage(L,0,0,fe,ke),at("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+fe+"x"+ke+")."),we}else return"data"in L&&at("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),L;return L}function y(L){return L.generateMipmaps}function M(L){o.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function F(L,b,W,pe,Se=!1){if(L!==null){if(o[L]!==void 0)return o[L];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=b;if(b===o.RED&&(W===o.FLOAT&&(fe=o.R32F),W===o.HALF_FLOAT&&(fe=o.R16F),W===o.UNSIGNED_BYTE&&(fe=o.R8)),b===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(fe=o.R8UI),W===o.UNSIGNED_SHORT&&(fe=o.R16UI),W===o.UNSIGNED_INT&&(fe=o.R32UI),W===o.BYTE&&(fe=o.R8I),W===o.SHORT&&(fe=o.R16I),W===o.INT&&(fe=o.R32I)),b===o.RG&&(W===o.FLOAT&&(fe=o.RG32F),W===o.HALF_FLOAT&&(fe=o.RG16F),W===o.UNSIGNED_BYTE&&(fe=o.RG8)),b===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(fe=o.RG8UI),W===o.UNSIGNED_SHORT&&(fe=o.RG16UI),W===o.UNSIGNED_INT&&(fe=o.RG32UI),W===o.BYTE&&(fe=o.RG8I),W===o.SHORT&&(fe=o.RG16I),W===o.INT&&(fe=o.RG32I)),b===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),W===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),W===o.UNSIGNED_INT&&(fe=o.RGB32UI),W===o.BYTE&&(fe=o.RGB8I),W===o.SHORT&&(fe=o.RGB16I),W===o.INT&&(fe=o.RGB32I)),b===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),W===o.UNSIGNED_INT&&(fe=o.RGBA32UI),W===o.BYTE&&(fe=o.RGBA8I),W===o.SHORT&&(fe=o.RGBA16I),W===o.INT&&(fe=o.RGBA32I)),b===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(fe=o.R11F_G11F_B10F)),b===o.RGBA){const ke=Se?Gc:Tt.getTransfer(pe);W===o.FLOAT&&(fe=o.RGBA32F),W===o.HALF_FLOAT&&(fe=o.RGBA16F),W===o.UNSIGNED_BYTE&&(fe=ke===It?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),fe}function U(L,b){let W;return L?b===null||b===Vi||b===jo?W=o.DEPTH24_STENCIL8:b===Ii?W=o.DEPTH32F_STENCIL8:b===Vo&&(W=o.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Vi||b===jo?W=o.DEPTH_COMPONENT24:b===Ii?W=o.DEPTH_COMPONENT32F:b===Vo&&(W=o.DEPTH_COMPONENT16),W}function j(L,b){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==bn&&L.minFilter!==Cn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function H(L){const b=L.target;b.removeEventListener("dispose",H),A(b),b.isVideoTexture&&x.delete(b)}function z(L){const b=L.target;b.removeEventListener("dispose",z),me(b)}function A(L){const b=s.get(L);if(b.__webglInit===void 0)return;const W=L.source,pe=v.get(W);if(pe){const Se=pe[b.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&D(L),Object.keys(pe).length===0&&v.delete(W)}s.remove(L)}function D(L){const b=s.get(L);o.deleteTexture(b.__webglTexture);const W=L.source,pe=v.get(W);delete pe[b.__cacheKey],d.memory.textures--}function me(L){const b=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let Se=0;Se<b.__webglFramebuffer[pe].length;Se++)o.deleteFramebuffer(b.__webglFramebuffer[pe][Se]);else o.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)o.deleteFramebuffer(b.__webglFramebuffer[pe]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=L.textures;for(let pe=0,Se=W.length;pe<Se;pe++){const fe=s.get(W[pe]);fe.__webglTexture&&(o.deleteTexture(fe.__webglTexture),d.memory.textures--),s.remove(W[pe])}s.remove(L)}let G=0;function ee(){G=0}function se(){const L=G;return L>=l.maxTextures&&at("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function ce(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function $(L,b){const W=s.get(L);if(L.isVideoTexture&&Et(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const pe=L.image;if(pe===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(W,L,b);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+b)}function O(L,b){const W=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){ne(W,L,b);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+b)}function I(L,b){const W=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){ne(W,L,b);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+b)}function le(L,b){const W=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){xe(W,L,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+b)}const he={[Qd]:o.REPEAT,[pa]:o.CLAMP_TO_EDGE,[Jd]:o.MIRRORED_REPEAT},be={[bn]:o.NEAREST,[iM]:o.NEAREST_MIPMAP_NEAREST,[lc]:o.NEAREST_MIPMAP_LINEAR,[Cn]:o.LINEAR,[cd]:o.LINEAR_MIPMAP_NEAREST,[Ns]:o.LINEAR_MIPMAP_LINEAR},P={[oM]:o.NEVER,[dM]:o.ALWAYS,[lM]:o.LESS,[jh]:o.LEQUAL,[cM]:o.EQUAL,[Xh]:o.GEQUAL,[uM]:o.GREATER,[fM]:o.NOTEQUAL};function Y(L,b){if(b.type===Ii&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Cn||b.magFilter===cd||b.magFilter===lc||b.magFilter===Ns||b.minFilter===Cn||b.minFilter===cd||b.minFilter===lc||b.minFilter===Ns)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,he[b.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,he[b.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,he[b.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,be[b.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,be[b.minFilter]),b.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,P[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bn||b.minFilter!==lc&&b.minFilter!==Ns||b.type===Ii&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function _e(L,b){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",H));const pe=b.source;let Se=v.get(pe);Se===void 0&&(Se={},v.set(pe,Se));const fe=ce(b);if(fe!==L.__cacheKey){Se[fe]===void 0&&(Se[fe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,W=!0),Se[fe].usedTimes++;const ke=Se[L.__cacheKey];ke!==void 0&&(Se[L.__cacheKey].usedTimes--,ke.usedTimes===0&&D(b)),L.__cacheKey=fe,L.__webglTexture=Se[fe].texture}return W}function Re(L,b,W){return Math.floor(Math.floor(L/W)/b)}function Fe(L,b,W,pe){const fe=L.updateRanges;if(fe.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,W,pe,b.data);else{fe.sort((Ee,Me)=>Ee.start-Me.start);let ke=0;for(let Ee=1;Ee<fe.length;Ee++){const Me=fe[ke],Oe=fe[Ee],Le=Me.start+Me.count,Pe=Re(Oe.start,b.width,4),ut=Re(Me.start,b.width,4);Oe.start<=Le+1&&Pe===ut&&Re(Oe.start+Oe.count-1,b.width,4)===Pe?Me.count=Math.max(Me.count,Oe.start+Oe.count-Me.start):(++ke,fe[ke]=Oe)}fe.length=ke+1;const we=o.getParameter(o.UNPACK_ROW_LENGTH),Ke=o.getParameter(o.UNPACK_SKIP_PIXELS),tt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Ee=0,Me=fe.length;Ee<Me;Ee++){const Oe=fe[Ee],Le=Math.floor(Oe.start/4),Pe=Math.ceil(Oe.count/4),ut=Le%b.width,q=Math.floor(Le/b.width),Ce=Pe,Ae=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ut),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,ut,q,Ce,Ae,W,pe,b.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,we),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ke),o.pixelStorei(o.UNPACK_SKIP_ROWS,tt)}}function ne(L,b,W){let pe=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=o.TEXTURE_3D);const Se=_e(L,b),fe=b.source;i.bindTexture(pe,L.__webglTexture,o.TEXTURE0+W);const ke=s.get(fe);if(fe.version!==ke.__version||Se===!0){i.activeTexture(o.TEXTURE0+W);const we=Tt.getPrimaries(Tt.workingColorSpace),Ke=b.colorSpace===$a?null:Tt.getPrimaries(b.colorSpace),tt=b.colorSpace===$a||we===Ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Ee=w(b.image,!1,l.maxTextureSize);Ee=Ut(b,Ee);const Me=c.convert(b.format,b.colorSpace),Oe=c.convert(b.type);let Le=F(b.internalFormat,Me,Oe,b.colorSpace,b.isVideoTexture);Y(pe,b);let Pe;const ut=b.mipmaps,q=b.isVideoTexture!==!0,Ce=ke.__version===void 0||Se===!0,Ae=fe.dataReady,ze=j(b,Ee);if(b.isDepthTexture)Le=U(b.format===Ds,b.type),Ce&&(q?i.texStorage2D(o.TEXTURE_2D,1,Le,Ee.width,Ee.height):i.texImage2D(o.TEXTURE_2D,0,Le,Ee.width,Ee.height,0,Me,Oe,null));else if(b.isDataTexture)if(ut.length>0){q&&Ce&&i.texStorage2D(o.TEXTURE_2D,ze,Le,ut[0].width,ut[0].height);for(let ye=0,ue=ut.length;ye<ue;ye++)Pe=ut[ye],q?Ae&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,Me,Oe,Pe.data):i.texImage2D(o.TEXTURE_2D,ye,Le,Pe.width,Pe.height,0,Me,Oe,Pe.data);b.generateMipmaps=!1}else q?(Ce&&i.texStorage2D(o.TEXTURE_2D,ze,Le,Ee.width,Ee.height),Ae&&Fe(b,Ee,Me,Oe)):i.texImage2D(o.TEXTURE_2D,0,Le,Ee.width,Ee.height,0,Me,Oe,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){q&&Ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Le,ut[0].width,ut[0].height,Ee.depth);for(let ye=0,ue=ut.length;ye<ue;ye++)if(Pe=ut[ye],b.format!==Ci)if(Me!==null)if(q){if(Ae)if(b.layerUpdates.size>0){const Be=fv(Pe.width,Pe.height,b.format,b.type);for(const it of b.layerUpdates){const Pt=Pe.data.subarray(it*Be/Pe.data.BYTES_PER_ELEMENT,(it+1)*Be/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,it,Pe.width,Pe.height,1,Me,Pt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Pe.width,Pe.height,Ee.depth,Me,Pe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ye,Le,Pe.width,Pe.height,Ee.depth,0,Pe.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Ae&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Pe.width,Pe.height,Ee.depth,Me,Oe,Pe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ye,Le,Pe.width,Pe.height,Ee.depth,0,Me,Oe,Pe.data)}else{q&&Ce&&i.texStorage2D(o.TEXTURE_2D,ze,Le,ut[0].width,ut[0].height);for(let ye=0,ue=ut.length;ye<ue;ye++)Pe=ut[ye],b.format!==Ci?Me!==null?q?Ae&&i.compressedTexSubImage2D(o.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,Me,Pe.data):i.compressedTexImage2D(o.TEXTURE_2D,ye,Le,Pe.width,Pe.height,0,Pe.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Ae&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,Me,Oe,Pe.data):i.texImage2D(o.TEXTURE_2D,ye,Le,Pe.width,Pe.height,0,Me,Oe,Pe.data)}else if(b.isDataArrayTexture)if(q){if(Ce&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ze,Le,Ee.width,Ee.height,Ee.depth),Ae)if(b.layerUpdates.size>0){const ye=fv(Ee.width,Ee.height,b.format,b.type);for(const ue of b.layerUpdates){const Be=Ee.data.subarray(ue*ye/Ee.data.BYTES_PER_ELEMENT,(ue+1)*ye/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ue,Ee.width,Ee.height,1,Me,Oe,Be)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Me,Oe,Ee.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Le,Ee.width,Ee.height,Ee.depth,0,Me,Oe,Ee.data);else if(b.isData3DTexture)q?(Ce&&i.texStorage3D(o.TEXTURE_3D,ze,Le,Ee.width,Ee.height,Ee.depth),Ae&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Me,Oe,Ee.data)):i.texImage3D(o.TEXTURE_3D,0,Le,Ee.width,Ee.height,Ee.depth,0,Me,Oe,Ee.data);else if(b.isFramebufferTexture){if(Ce)if(q)i.texStorage2D(o.TEXTURE_2D,ze,Le,Ee.width,Ee.height);else{let ye=Ee.width,ue=Ee.height;for(let Be=0;Be<ze;Be++)i.texImage2D(o.TEXTURE_2D,Be,Le,ye,ue,0,Me,Oe,null),ye>>=1,ue>>=1}}else if(ut.length>0){if(q&&Ce){const ye=We(ut[0]);i.texStorage2D(o.TEXTURE_2D,ze,Le,ye.width,ye.height)}for(let ye=0,ue=ut.length;ye<ue;ye++)Pe=ut[ye],q?Ae&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Me,Oe,Pe):i.texImage2D(o.TEXTURE_2D,ye,Le,Me,Oe,Pe);b.generateMipmaps=!1}else if(q){if(Ce){const ye=We(Ee);i.texStorage2D(o.TEXTURE_2D,ze,Le,ye.width,ye.height)}Ae&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Me,Oe,Ee)}else i.texImage2D(o.TEXTURE_2D,0,Le,Me,Oe,Ee);y(b)&&M(pe),ke.__version=fe.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function xe(L,b,W){if(b.image.length!==6)return;const pe=_e(L,b),Se=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+W);const fe=s.get(Se);if(Se.version!==fe.__version||pe===!0){i.activeTexture(o.TEXTURE0+W);const ke=Tt.getPrimaries(Tt.workingColorSpace),we=b.colorSpace===$a?null:Tt.getPrimaries(b.colorSpace),Ke=b.colorSpace===$a||ke===we?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const tt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let ue=0;ue<6;ue++)!tt&&!Ee?Me[ue]=w(b.image[ue],!0,l.maxCubemapSize):Me[ue]=Ee?b.image[ue].image:b.image[ue],Me[ue]=Ut(b,Me[ue]);const Oe=Me[0],Le=c.convert(b.format,b.colorSpace),Pe=c.convert(b.type),ut=F(b.internalFormat,Le,Pe,b.colorSpace),q=b.isVideoTexture!==!0,Ce=fe.__version===void 0||pe===!0,Ae=Se.dataReady;let ze=j(b,Oe);Y(o.TEXTURE_CUBE_MAP,b);let ye;if(tt){q&&Ce&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,ut,Oe.width,Oe.height);for(let ue=0;ue<6;ue++){ye=Me[ue].mipmaps;for(let Be=0;Be<ye.length;Be++){const it=ye[Be];b.format!==Ci?Le!==null?q?Ae&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,0,0,it.width,it.height,Le,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,ut,it.width,it.height,0,it.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,0,0,it.width,it.height,Le,Pe,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,ut,it.width,it.height,0,Le,Pe,it.data)}}}else{if(ye=b.mipmaps,q&&Ce){ye.length>0&&ze++;const ue=We(Me[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ze,ut,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Ee){q?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Me[ue].width,Me[ue].height,Le,Pe,Me[ue].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ut,Me[ue].width,Me[ue].height,0,Le,Pe,Me[ue].data);for(let Be=0;Be<ye.length;Be++){const Pt=ye[Be].image[ue].image;q?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,0,0,Pt.width,Pt.height,Le,Pe,Pt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,ut,Pt.width,Pt.height,0,Le,Pe,Pt.data)}}else{q?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Le,Pe,Me[ue]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,ut,Le,Pe,Me[ue]);for(let Be=0;Be<ye.length;Be++){const it=ye[Be];q?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,0,0,Le,Pe,it.image[ue]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,ut,Le,Pe,it.image[ue])}}}y(b)&&M(o.TEXTURE_CUBE_MAP),fe.__version=Se.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Te(L,b,W,pe,Se,fe){const ke=c.convert(W.format,W.colorSpace),we=c.convert(W.type),Ke=F(W.internalFormat,ke,we,W.colorSpace),tt=s.get(b),Ee=s.get(W);if(Ee.__renderTarget=b,!tt.__hasExternalTextures){const Me=Math.max(1,b.width>>fe),Oe=Math.max(1,b.height>>fe);Se===o.TEXTURE_3D||Se===o.TEXTURE_2D_ARRAY?i.texImage3D(Se,fe,Ke,Me,Oe,b.depth,0,ke,we,null):i.texImage2D(Se,fe,Ke,Me,Oe,0,ke,we,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),qt(b)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,Se,Ee.__webglTexture,0,V(b)):(Se===o.TEXTURE_2D||Se>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,Se,Ee.__webglTexture,fe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xe(L,b,W){if(o.bindRenderbuffer(o.RENDERBUFFER,L),b.depthBuffer){const pe=b.depthTexture,Se=pe&&pe.isDepthTexture?pe.type:null,fe=U(b.stencilBuffer,Se),ke=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;qt(b)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(b),fe,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(b),fe,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,fe,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ke,o.RENDERBUFFER,L)}else{const pe=b.textures;for(let Se=0;Se<pe.length;Se++){const fe=pe[Se],ke=c.convert(fe.format,fe.colorSpace),we=c.convert(fe.type),Ke=F(fe.internalFormat,ke,we,fe.colorSpace);qt(b)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(b),Ke,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(b),Ke,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Ke,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Qe(L,b,W){const pe=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=s.get(b.depthTexture);if(Se.__renderTarget=b,(!Se.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pe){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,b.depthTexture.addEventListener("dispose",H)),Se.__webglTexture===void 0){Se.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Se.__webglTexture),Y(o.TEXTURE_CUBE_MAP,b.depthTexture);const tt=c.convert(b.depthTexture.format),Ee=c.convert(b.depthTexture.type);let Me;b.depthTexture.format===_a?Me=o.DEPTH_COMPONENT24:b.depthTexture.format===Ds&&(Me=o.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Me,b.width,b.height,0,tt,Ee,null)}}else $(b.depthTexture,0);const fe=Se.__webglTexture,ke=V(b),we=pe?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Ke=b.depthTexture.format===Ds?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===_a)qt(b)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ke,we,fe,0,ke):o.framebufferTexture2D(o.FRAMEBUFFER,Ke,we,fe,0);else if(b.depthTexture.format===Ds)qt(b)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ke,we,fe,0,ke):o.framebufferTexture2D(o.FRAMEBUFFER,Ke,we,fe,0);else throw new Error("Unknown depthTexture format")}function et(L){const b=s.get(L),W=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const Se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",Se)};pe.addEventListener("dispose",Se),b.__depthDisposeCallback=Se}b.__boundDepthTexture=pe}if(L.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let pe=0;pe<6;pe++)Qe(b.__webglFramebuffer[pe],L,pe);else{const pe=L.texture.mipmaps;pe&&pe.length>0?Qe(b.__webglFramebuffer[0],L,0):Qe(b.__webglFramebuffer,L,0)}else if(W){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=o.createRenderbuffer(),Xe(b.__webglDepthbuffer[pe],L,!1);else{const Se=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,fe)}}else{const pe=L.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Xe(b.__webglDepthbuffer,L,!1);else{const Se=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,fe)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Qt(L,b,W){const pe=s.get(L);b!==void 0&&Te(pe.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&et(L)}function _t(L){const b=L.texture,W=s.get(L),pe=s.get(b);L.addEventListener("dispose",z);const Se=L.textures,fe=L.isWebGLCubeRenderTarget===!0,ke=Se.length>1;if(ke||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=b.version,d.memory.textures++),fe){W.__webglFramebuffer=[];for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[we]=[];for(let Ke=0;Ke<b.mipmaps.length;Ke++)W.__webglFramebuffer[we][Ke]=o.createFramebuffer()}else W.__webglFramebuffer[we]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)W.__webglFramebuffer[we]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(ke)for(let we=0,Ke=Se.length;we<Ke;we++){const tt=s.get(Se[we]);tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&qt(L)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let we=0;we<Se.length;we++){const Ke=Se[we];W.__webglColorRenderbuffer[we]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[we]);const tt=c.convert(Ke.format,Ke.colorSpace),Ee=c.convert(Ke.type),Me=F(Ke.internalFormat,tt,Ee,Ke.colorSpace,L.isXRRenderTarget===!0),Oe=V(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Oe,Me,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+we,o.RENDERBUFFER,W.__webglColorRenderbuffer[we])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Xe(W.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(fe){i.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),Y(o.TEXTURE_CUBE_MAP,b);for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ke=0;Ke<b.mipmaps.length;Ke++)Te(W.__webglFramebuffer[we][Ke],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ke);else Te(W.__webglFramebuffer[we],L,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(b)&&M(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ke){for(let we=0,Ke=Se.length;we<Ke;we++){const tt=Se[we],Ee=s.get(tt);let Me=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Me=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Me,Ee.__webglTexture),Y(Me,tt),Te(W.__webglFramebuffer,L,tt,o.COLOR_ATTACHMENT0+we,Me,0),y(tt)&&M(Me)}i.unbindTexture()}else{let we=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(we=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(we,pe.__webglTexture),Y(we,b),b.mipmaps&&b.mipmaps.length>0)for(let Ke=0;Ke<b.mipmaps.length;Ke++)Te(W.__webglFramebuffer[Ke],L,b,o.COLOR_ATTACHMENT0,we,Ke);else Te(W.__webglFramebuffer,L,b,o.COLOR_ATTACHMENT0,we,0);y(b)&&M(we),i.unbindTexture()}L.depthBuffer&&et(L)}function mt(L){const b=L.textures;for(let W=0,pe=b.length;W<pe;W++){const Se=b[W];if(y(Se)){const fe=N(L),ke=s.get(Se).__webglTexture;i.bindTexture(fe,ke),M(fe),i.unbindTexture()}}}const Nt=[],lt=[];function Kt(L){if(L.samples>0){if(qt(L)===!1){const b=L.textures,W=L.width,pe=L.height;let Se=o.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ke=s.get(L),we=b.length>1;if(we)for(let tt=0;tt<b.length;tt++)i.bindFramebuffer(o.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const Ke=L.texture.mipmaps;Ke&&Ke.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let tt=0;tt<b.length;tt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Se|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Se|=o.STENCIL_BUFFER_BIT)),we){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ke.__webglColorRenderbuffer[tt]);const Ee=s.get(b[tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ee,0)}o.blitFramebuffer(0,0,W,pe,0,0,W,pe,Se,o.NEAREST),g===!0&&(Nt.length=0,lt.length=0,Nt.push(o.COLOR_ATTACHMENT0+tt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Nt.push(fe),lt.push(fe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,lt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Nt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),we)for(let tt=0;tt<b.length;tt++){i.bindFramebuffer(o.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.RENDERBUFFER,ke.__webglColorRenderbuffer[tt]);const Ee=s.get(b[tt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,ke.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+tt,o.TEXTURE_2D,Ee,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&g){const b=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function V(L){return Math.min(l.maxSamples,L.samples)}function qt(L){const b=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(L){const b=d.render.frame;x.get(L)!==b&&(x.set(L,b),L.update())}function Ut(L,b){const W=L.colorSpace,pe=L.format,Se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Or&&W!==$a&&(Tt.getTransfer(W)===It?(pe!==Ci||Se!==mi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",W)),b}function We(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=se,this.resetTextureUnits=ee,this.setTexture2D=$,this.setTexture2DArray=O,this.setTexture3D=I,this.setTextureCube=le,this.rebindTextures=Qt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function I1(o,t){function i(s,l=$a){let c;const d=Tt.getTransfer(l);if(s===mi)return o.UNSIGNED_BYTE;if(s===Ih)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Bh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Wv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Yv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===kv)return o.BYTE;if(s===qv)return o.SHORT;if(s===Vo)return o.UNSIGNED_SHORT;if(s===Fh)return o.INT;if(s===Vi)return o.UNSIGNED_INT;if(s===Ii)return o.FLOAT;if(s===va)return o.HALF_FLOAT;if(s===Zv)return o.ALPHA;if(s===Kv)return o.RGB;if(s===Ci)return o.RGBA;if(s===_a)return o.DEPTH_COMPONENT;if(s===Ds)return o.DEPTH_STENCIL;if(s===Qv)return o.RED;if(s===Hh)return o.RED_INTEGER;if(s===Lr)return o.RG;if(s===Gh)return o.RG_INTEGER;if(s===Vh)return o.RGBA_INTEGER;if(s===zc||s===Fc||s===Ic||s===Bc)if(d===It)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===eh||s===th||s===nh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===$d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===eh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===th)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ih||s===ah||s===sh||s===rh||s===oh||s===lh||s===ch)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ih||s===ah)return d===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===sh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===rh)return c.COMPRESSED_R11_EAC;if(s===oh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===lh)return c.COMPRESSED_RG11_EAC;if(s===ch)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===gh||s===vh||s===_h||s===xh||s===Sh||s===Mh||s===yh||s===Eh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===uh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ph)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===_h)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===yh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Eh)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bh||s===Th||s===Ah)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===bh)return d===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Th)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ah)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Rh||s===Ch||s===wh||s===Nh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Rh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ch)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Nh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===jo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const B1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class G1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new l_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new wi({vertexShader:B1,fragmentShader:H1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Sa(new Yc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class V1 extends zr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,m="local-floor",g=1,h=null,x=null,S=null,v=null,E=null,T=null;const w=typeof XRWebGLBinding<"u",y=new G1,M={},N=i.getContextAttributes();let F=null,U=null;const j=[],H=[],z=new Vt;let A=null;const D=new pi;D.viewport=new an;const me=new pi;me.viewport=new an;const G=[D,me],ee=new ey;let se=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let xe=j[ne];return xe===void 0&&(xe=new vd,j[ne]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ne){let xe=j[ne];return xe===void 0&&(xe=new vd,j[ne]=xe),xe.getGripSpace()},this.getHand=function(ne){let xe=j[ne];return xe===void 0&&(xe=new vd,j[ne]=xe),xe.getHandSpace()};function $(ne){const xe=H.indexOf(ne.inputSource);if(xe===-1)return;const Te=j[xe];Te!==void 0&&(Te.update(ne.inputSource,ne.frame,h||d),Te.dispatchEvent({type:ne.type,data:ne.inputSource}))}function O(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",I);for(let ne=0;ne<j.length;ne++){const xe=H[ne];xe!==null&&(H[ne]=null,j[ne].disconnect(xe))}se=null,ce=null,y.reset();for(const ne in M)delete M[ne];t.setRenderTarget(F),E=null,v=null,S=null,l=null,U=null,Fe.stop(),s.isPresenting=!1,t.setPixelRatio(A),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){m=ne,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ne){h=ne},this.getBaseLayer=function(){return v!==null?v:E},this.getBinding=function(){return S===null&&w&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(F=t.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",O),l.addEventListener("inputsourceschange",I),N.xrCompatible!==!0&&await i.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Xe=null,Qe=null;N.depth&&(Qe=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=N.stencil?Ds:_a,Xe=N.stencil?jo:Vi);const et={colorFormat:i.RGBA8,depthFormat:Qe,scaleFactor:c};S=this.getBinding(),v=S.createProjectionLayer(et),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),U=new Gi(v.textureWidth,v.textureHeight,{format:Ci,type:mi,depthTexture:new Xo(v.textureWidth,v.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Te={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:E}),t.setPixelRatio(1),t.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new Gi(E.framebufferWidth,E.framebufferHeight,{format:Ci,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(g),h=null,d=await l.requestReferenceSpace(m),Fe.setContext(l),Fe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function I(ne){for(let xe=0;xe<ne.removed.length;xe++){const Te=ne.removed[xe],Xe=H.indexOf(Te);Xe>=0&&(H[Xe]=null,j[Xe].disconnect(Te))}for(let xe=0;xe<ne.added.length;xe++){const Te=ne.added[xe];let Xe=H.indexOf(Te);if(Xe===-1){for(let et=0;et<j.length;et++)if(et>=H.length){H.push(Te),Xe=et;break}else if(H[et]===null){H[et]=Te,Xe=et;break}if(Xe===-1)break}const Qe=j[Xe];Qe&&Qe.connect(Te)}}const le=new ie,he=new ie;function be(ne,xe,Te){le.setFromMatrixPosition(xe.matrixWorld),he.setFromMatrixPosition(Te.matrixWorld);const Xe=le.distanceTo(he),Qe=xe.projectionMatrix.elements,et=Te.projectionMatrix.elements,Qt=Qe[14]/(Qe[10]-1),_t=Qe[14]/(Qe[10]+1),mt=(Qe[9]+1)/Qe[5],Nt=(Qe[9]-1)/Qe[5],lt=(Qe[8]-1)/Qe[0],Kt=(et[8]+1)/et[0],V=Qt*lt,qt=Qt*Kt,Et=Xe/(-lt+Kt),Ut=Et*-lt;if(xe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ut),ne.translateZ(Et),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Qe[10]===-1)ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const We=Qt+Et,L=_t+Et,b=V-Ut,W=qt+(Xe-Ut),pe=mt*_t/L*We,Se=Nt*_t/L*We;ne.projectionMatrix.makePerspective(b,W,pe,Se,We,L),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function P(ne,xe){xe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(xe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let xe=ne.near,Te=ne.far;y.texture!==null&&(y.depthNear>0&&(xe=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),ee.near=me.near=D.near=xe,ee.far=me.far=D.far=Te,(se!==ee.near||ce!==ee.far)&&(l.updateRenderState({depthNear:ee.near,depthFar:ee.far}),se=ee.near,ce=ee.far),ee.layers.mask=ne.layers.mask|6,D.layers.mask=ee.layers.mask&-5,me.layers.mask=ee.layers.mask&-3;const Xe=ne.parent,Qe=ee.cameras;P(ee,Xe);for(let et=0;et<Qe.length;et++)P(Qe[et],Xe);Qe.length===2?be(ee,D,me):ee.projectionMatrix.copy(D.projectionMatrix),Y(ne,ee,Xe)};function Y(ne,xe,Te){Te===null?ne.matrix.copy(xe.matrixWorld):(ne.matrix.copy(Te.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(xe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Dh*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(v===null&&E===null))return g},this.setFoveation=function(ne){g=ne,v!==null&&(v.fixedFoveation=ne),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ee)},this.getCameraTexture=function(ne){return M[ne]};let _e=null;function Re(ne,xe){if(x=xe.getViewerPose(h||d),T=xe,x!==null){const Te=x.views;E!==null&&(t.setRenderTargetFramebuffer(U,E.framebuffer),t.setRenderTarget(U));let Xe=!1;Te.length!==ee.cameras.length&&(ee.cameras.length=0,Xe=!0);for(let _t=0;_t<Te.length;_t++){const mt=Te[_t];let Nt=null;if(E!==null)Nt=E.getViewport(mt);else{const Kt=S.getViewSubImage(v,mt);Nt=Kt.viewport,_t===0&&(t.setRenderTargetTextures(U,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(U))}let lt=G[_t];lt===void 0&&(lt=new pi,lt.layers.enable(_t),lt.viewport=new an,G[_t]=lt),lt.matrix.fromArray(mt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(mt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),_t===0&&(ee.matrix.copy(lt.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Xe===!0&&ee.cameras.push(lt)}const Qe=l.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){S=s.getBinding();const _t=S.getDepthInformation(Te[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,l.renderState)}if(Qe&&Qe.includes("camera-access")&&w){t.state.unbindTexture(),S=s.getBinding();for(let _t=0;_t<Te.length;_t++){const mt=Te[_t].camera;if(mt){let Nt=M[mt];Nt||(Nt=new l_,M[mt]=Nt);const lt=S.getCameraImage(mt);Nt.sourceTexture=lt}}}}for(let Te=0;Te<j.length;Te++){const Xe=H[Te],Qe=j[Te];Xe!==null&&Qe!==void 0&&Qe.update(Xe,xe,h||d)}_e&&_e(ne,xe),xe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xe}),T=null}const Fe=new d_;Fe.setAnimationLoop(Re),this.setAnimationLoop=function(ne){_e=ne},this.dispose=function(){}}}const As=new xa,j1=new en;function X1(o,t){function i(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function s(y,M){M.color.getRGB(y.fogColor.value,c_(o)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function l(y,M,N,F,U){M.isMeshBasicMaterial?c(y,M):M.isMeshLambertMaterial?(c(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(y,M),S(y,M)):M.isMeshPhongMaterial?(c(y,M),x(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(y,M),v(y,M),M.isMeshPhysicalMaterial&&E(y,M,U)):M.isMeshMatcapMaterial?(c(y,M),T(y,M)):M.isMeshDepthMaterial?c(y,M):M.isMeshDistanceMaterial?(c(y,M),w(y,M)):M.isMeshNormalMaterial?c(y,M):M.isLineBasicMaterial?(d(y,M),M.isLineDashedMaterial&&m(y,M)):M.isPointsMaterial?g(y,M,N,F):M.isSpriteMaterial?h(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,i(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===Xn&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,i(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===Xn&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,i(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,i(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,i(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const N=t.get(M),F=N.envMap,U=N.envMapRotation;F&&(y.envMap.value=F,As.copy(U),As.x*=-1,As.y*=-1,As.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),y.envMapRotation.value.setFromMatrix4(j1.makeRotationFromEuler(As)),y.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,i(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,i(M.aoMap,y.aoMapTransform))}function d(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform))}function m(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function g(y,M,N,F){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*N,y.scale.value=F*.5,M.map&&(y.map.value=M.map,i(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function h(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,i(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,i(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function x(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function S(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function v(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,i(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,i(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function E(y,M,N){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,i(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,i(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,i(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,i(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,i(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Xn&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,i(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,i(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,i(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,i(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,i(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,i(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,i(M.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,M){M.matcap&&(y.matcap.value=M.matcap)}function w(y,M){const N=t.get(M).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function k1(o,t,i,s){let l={},c={},d=[];const m=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function g(N,F){const U=F.program;s.uniformBlockBinding(N,U)}function h(N,F){let U=l[N.id];U===void 0&&(T(N),U=x(N),l[N.id]=U,N.addEventListener("dispose",y));const j=F.program;s.updateUBOMapping(N,j);const H=t.render.frame;c[N.id]!==H&&(v(N),c[N.id]=H)}function x(N){const F=S();N.__bindingPointIndex=F;const U=o.createBuffer(),j=N.__size,H=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,j,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,F,U),U}function S(){for(let N=0;N<m;N++)if(d.indexOf(N)===-1)return d.push(N),N;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const F=l[N.id],U=N.uniforms,j=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,F);for(let H=0,z=U.length;H<z;H++){const A=Array.isArray(U[H])?U[H]:[U[H]];for(let D=0,me=A.length;D<me;D++){const G=A[D];if(E(G,H,D,j)===!0){const ee=G.__offset,se=Array.isArray(G.value)?G.value:[G.value];let ce=0;for(let $=0;$<se.length;$++){const O=se[$],I=w(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,ee+ce,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,ce),ce+=I.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ee,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(N,F,U,j){const H=N.value,z=F+"_"+U;if(j[z]===void 0)return typeof H=="number"||typeof H=="boolean"?j[z]=H:j[z]=H.clone(),!0;{const A=j[z];if(typeof H=="number"||typeof H=="boolean"){if(A!==H)return j[z]=H,!0}else if(A.equals(H)===!1)return A.copy(H),!0}return!1}function T(N){const F=N.uniforms;let U=0;const j=16;for(let z=0,A=F.length;z<A;z++){const D=Array.isArray(F[z])?F[z]:[F[z]];for(let me=0,G=D.length;me<G;me++){const ee=D[me],se=Array.isArray(ee.value)?ee.value:[ee.value];for(let ce=0,$=se.length;ce<$;ce++){const O=se[ce],I=w(O),le=U%j,he=le%I.boundary,be=le+he;U+=he,be!==0&&j-be<I.storage&&(U+=j-be),ee.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=U,U+=I.storage}}}const H=U%j;return H>0&&(U+=j-H),N.__size=U,N.__cache={},this}function w(N){const F={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(F.boundary=4,F.storage=4):N.isVector2?(F.boundary=8,F.storage=8):N.isVector3||N.isColor?(F.boundary=16,F.storage=12):N.isVector4?(F.boundary=16,F.storage=16):N.isMatrix3?(F.boundary=48,F.storage=48):N.isMatrix4?(F.boundary=64,F.storage=64):N.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",N),F}function y(N){const F=N.target;F.removeEventListener("dispose",y);const U=d.indexOf(F.__bindingPointIndex);d.splice(U,1),o.deleteBuffer(l[F.id]),delete l[F.id],delete c[F.id]}function M(){for(const N in l)o.deleteBuffer(l[N]);d=[],l={},c={}}return{bind:g,update:h,dispose:M}}const q1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function W1(){return zi===null&&(zi=new FM(q1,16,16,Lr,va),zi.name="DFG_LUT",zi.minFilter=Cn,zi.magFilter=Cn,zi.wrapS=pa,zi.wrapT=pa,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class Y1{constructor(t={}){const{canvas:i=pM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:m=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:v=!1,outputBufferType:E=mi}=t;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const w=E,y=new Set([Vh,Gh,Hh]),M=new Set([mi,Vi,Vo,jo,Ih,Bh]),N=new Uint32Array(4),F=new Int32Array(4);let U=null,j=null;const H=[],z=[];let A=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let me=!1;this._outputColorSpace=hi;let G=0,ee=0,se=null,ce=-1,$=null;const O=new an,I=new an;let le=null;const he=new Ot(0);let be=0,P=i.width,Y=i.height,_e=1,Re=null,Fe=null;const ne=new an(0,0,P,Y),xe=new an(0,0,P,Y);let Te=!1;const Xe=new s_;let Qe=!1,et=!1;const Qt=new en,_t=new ie,mt=new an,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Kt(){return se===null?_e:1}let V=s;function qt(C,k){return i.getContext(C,k)}try{const C={alpha:!0,depth:l,stencil:c,antialias:m,premultipliedAlpha:g,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zh}`),i.addEventListener("webglcontextlost",Be,!1),i.addEventListener("webglcontextrestored",it,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),V===null){const k="webgl2";if(V=qt(k,C),V===null)throw qt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw wt("WebGLRenderer: "+C.message),C}let Et,Ut,We,L,b,W,pe,Se,fe,ke,we,Ke,tt,Ee,Me,Oe,Le,Pe,ut,q,Ce,Ae,ze;function ye(){Et=new Yb(V),Et.init(),Ce=new I1(V,Et),Ut=new Hb(V,Et,t,Ce),We=new z1(V,Et),Ut.reversedDepthBuffer&&v&&We.buffers.depth.setReversed(!0),L=new Qb(V),b=new y1,W=new F1(V,Et,We,b,Ut,Ce,L),pe=new Wb(D),Se=new ny(V),Ae=new Ib(V,Se),fe=new Zb(V,Se,L,Ae),ke=new $b(V,fe,Se,Ae,L),Pe=new Jb(V,Ut,W),Me=new Gb(b),we=new M1(D,pe,Et,Ut,Ae,Me),Ke=new X1(D,b),tt=new b1,Ee=new N1(Et),Le=new Fb(D,pe,We,ke,T,g),Oe=new P1(D,ke,Ut),ze=new k1(V,L,Ut,We),ut=new Bb(V,Et,L),q=new Kb(V,Et,L),L.programs=we.programs,D.capabilities=Ut,D.extensions=Et,D.properties=b,D.renderLists=tt,D.shadowMap=Oe,D.state=We,D.info=L}ye(),w!==mi&&(A=new tT(w,i.width,i.height,l,c));const ue=new V1(D,V);this.xr=ue,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Et.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Et.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(C){C!==void 0&&(_e=C,this.setSize(P,Y,!1))},this.getSize=function(C){return C.set(P,Y)},this.setSize=function(C,k,re=!0){if(ue.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,Y=k,i.width=Math.floor(C*_e),i.height=Math.floor(k*_e),re===!0&&(i.style.width=C+"px",i.style.height=k+"px"),A!==null&&A.setSize(i.width,i.height),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(P*_e,Y*_e).floor()},this.setDrawingBufferSize=function(C,k,re){P=C,Y=k,_e=re,i.width=Math.floor(C*re),i.height=Math.floor(k*re),this.setViewport(0,0,C,k)},this.setEffects=function(C){if(w===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let k=0;k<C.length;k++)if(C[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(ne)},this.setViewport=function(C,k,re,te){C.isVector4?ne.set(C.x,C.y,C.z,C.w):ne.set(C,k,re,te),We.viewport(O.copy(ne).multiplyScalar(_e).round())},this.getScissor=function(C){return C.copy(xe)},this.setScissor=function(C,k,re,te){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,k,re,te),We.scissor(I.copy(xe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(C){We.setScissorTest(Te=C)},this.setOpaqueSort=function(C){Re=C},this.setTransparentSort=function(C){Fe=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(C=!0,k=!0,re=!0){let te=0;if(C){let K=!1;if(se!==null){const Ne=se.texture.format;K=y.has(Ne)}if(K){const Ne=se.texture.type,Ie=M.has(Ne),De=Le.getClearColor(),qe=Le.getClearAlpha(),Ze=De.r,nt=De.g,rt=De.b;Ie?(N[0]=Ze,N[1]=nt,N[2]=rt,N[3]=qe,V.clearBufferuiv(V.COLOR,0,N)):(F[0]=Ze,F[1]=nt,F[2]=rt,F[3]=qe,V.clearBufferiv(V.COLOR,0,F))}else te|=V.COLOR_BUFFER_BIT}k&&(te|=V.DEPTH_BUFFER_BIT),re&&(te|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&V.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Be,!1),i.removeEventListener("webglcontextrestored",it,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),Le.dispose(),tt.dispose(),Ee.dispose(),b.dispose(),pe.dispose(),ke.dispose(),Ae.dispose(),ze.dispose(),we.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Os),ue.removeEventListener("sessionend",Ps),Ni.stop()};function Be(C){C.preventDefault(),V0("WebGLRenderer: Context Lost."),me=!0}function it(){V0("WebGLRenderer: Context Restored."),me=!1;const C=L.autoReset,k=Oe.enabled,re=Oe.autoUpdate,te=Oe.needsUpdate,K=Oe.type;ye(),L.autoReset=C,Oe.enabled=k,Oe.autoUpdate=re,Oe.needsUpdate=te,Oe.type=K}function Pt(C){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function bt(C){const k=C.target;k.removeEventListener("dispose",bt),wn(k)}function wn(C){vi(C),b.remove(C)}function vi(C){const k=b.get(C).programs;k!==void 0&&(k.forEach(function(re){we.releaseProgram(re)}),C.isShaderMaterial&&we.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,re,te,K,Ne){k===null&&(k=Nt);const Ie=K.isMesh&&K.matrixWorld.determinant()<0,De=Jo(C,k,re,te,K);We.setMaterial(te,Ie);let qe=re.index,Ze=1;if(te.wireframe===!0){if(qe=fe.getWireframeAttribute(re),qe===void 0)return;Ze=2}const nt=re.drawRange,rt=re.attributes.position;let He=nt.start*Ze,ft=(nt.start+nt.count)*Ze;Ne!==null&&(He=Math.max(He,Ne.start*Ze),ft=Math.min(ft,(Ne.start+Ne.count)*Ze)),qe!==null?(He=Math.max(He,0),ft=Math.min(ft,qe.count)):rt!=null&&(He=Math.max(He,0),ft=Math.min(ft,rt.count));const Wt=ft-He;if(Wt<0||Wt===1/0)return;Ae.setup(K,te,De,re,qe);let Yt,At=ut;if(qe!==null&&(Yt=Se.get(qe),At=q,At.setIndex(Yt)),K.isMesh)te.wireframe===!0?(We.setLineWidth(te.wireframeLinewidth*Kt()),At.setMode(V.LINES)):At.setMode(V.TRIANGLES);else if(K.isLine){let pn=te.linewidth;pn===void 0&&(pn=1),We.setLineWidth(pn*Kt()),K.isLineSegments?At.setMode(V.LINES):K.isLineLoop?At.setMode(V.LINE_LOOP):At.setMode(V.LINE_STRIP)}else K.isPoints?At.setMode(V.POINTS):K.isSprite&&At.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Xc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))At.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const pn=K._multiDrawStarts,je=K._multiDrawCounts,Nn=K._multiDrawCount,st=qe?Se.get(qe).bytesPerElement:1,Dn=b.get(te).currentProgram.getUniforms();for(let kn=0;kn<Nn;kn++)Dn.setValue(V,"_gl_DrawID",kn),At.render(pn[kn]/st,je[kn])}else if(K.isInstancedMesh)At.renderInstances(He,Wt,K.count);else if(re.isInstancedBufferGeometry){const pn=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,je=Math.min(re.instanceCount,pn);At.renderInstances(He,Wt,je)}else At.render(He,Wt)};function Hr(C,k,re){C.transparent===!0&&C.side===ha&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,Ma(C,k,re),C.side=ns,C.needsUpdate=!0,Ma(C,k,re),C.side=ha):Ma(C,k,re)}this.compile=function(C,k,re=null){re===null&&(re=C),j=Ee.get(re),j.init(k),z.push(j),re.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(j.pushLight(K),K.castShadow&&j.pushShadow(K))}),C!==re&&C.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(j.pushLight(K),K.castShadow&&j.pushShadow(K))}),j.setupLights();const te=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ne=K.material;if(Ne)if(Array.isArray(Ne))for(let Ie=0;Ie<Ne.length;Ie++){const De=Ne[Ie];Hr(De,re,K),te.add(De)}else Hr(Ne,re,K),te.add(Ne)}),j=z.pop(),te},this.compileAsync=function(C,k,re=null){const te=this.compile(C,k,re);return new Promise(K=>{function Ne(){if(te.forEach(function(Ie){b.get(Ie).currentProgram.isReady()&&te.delete(Ie)}),te.size===0){K(C);return}setTimeout(Ne,10)}Et.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Ls=null;function Zo(C){Ls&&Ls(C)}function Os(){Ni.stop()}function Ps(){Ni.start()}const Ni=new d_;Ni.setAnimationLoop(Zo),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(C){Ls=C,ue.setAnimationLoop(C),C===null?Ni.stop():Ni.start()},ue.addEventListener("sessionstart",Os),ue.addEventListener("sessionend",Ps),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(me===!0)return;const re=ue.enabled===!0&&ue.isPresenting===!0,te=A!==null&&(se===null||re)&&A.begin(D,se);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(k),k=ue.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,k,se),j=Ee.get(C,z.length),j.init(k),z.push(j),Qt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Xe.setFromProjectionMatrix(Qt,Bi,k.reversedDepth),et=this.localClippingEnabled,Qe=Me.init(this.clippingPlanes,et),U=tt.get(C,H.length),U.init(),H.push(U),ue.enabled===!0&&ue.isPresenting===!0){const Ie=D.xr.getDepthSensingMesh();Ie!==null&&zs(Ie,k,-1/0,D.sortObjects)}zs(C,k,0,D.sortObjects),U.finish(),D.sortObjects===!0&&U.sort(Re,Fe),lt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,lt&&Le.addToRenderList(U,C),this.info.render.frame++,Qe===!0&&Me.beginShadows();const K=j.state.shadowsArray;if(Oe.render(K,C,k),Qe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&A.hasRenderPass())===!1){const Ie=U.opaque,De=U.transmissive;if(j.setupLights(),k.isArrayCamera){const qe=k.cameras;if(De.length>0)for(let Ze=0,nt=qe.length;Ze<nt;Ze++){const rt=qe[Ze];sn(Ie,De,C,rt)}lt&&Le.render(C);for(let Ze=0,nt=qe.length;Ze<nt;Ze++){const rt=qe[Ze];_i(U,C,rt,rt.viewport)}}else De.length>0&&sn(Ie,De,C,k),lt&&Le.render(C),_i(U,C,k)}se!==null&&ee===0&&(W.updateMultisampleRenderTarget(se),W.updateRenderTargetMipmap(se)),te&&A.end(D),C.isScene===!0&&C.onAfterRender(D,C,k),Ae.resetDefaultState(),ce=-1,$=null,z.pop(),z.length>0?(j=z[z.length-1],Qe===!0&&Me.setGlobalState(D.clippingPlanes,j.state.camera)):j=null,H.pop(),H.length>0?U=H[H.length-1]:U=null};function zs(C,k,re,te){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)re=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)j.pushLight(C),C.castShadow&&j.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Xe.intersectsSprite(C)){te&&mt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Qt);const Ie=ke.update(C),De=C.material;De.visible&&U.push(C,Ie,De,re,mt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Xe.intersectsObject(C))){const Ie=ke.update(C),De=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),mt.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),mt.copy(Ie.boundingSphere.center)),mt.applyMatrix4(C.matrixWorld).applyMatrix4(Qt)),Array.isArray(De)){const qe=Ie.groups;for(let Ze=0,nt=qe.length;Ze<nt;Ze++){const rt=qe[Ze],He=De[rt.materialIndex];He&&He.visible&&U.push(C,Ie,He,re,mt.z,rt)}}else De.visible&&U.push(C,Ie,De,re,mt.z,null)}}const Ne=C.children;for(let Ie=0,De=Ne.length;Ie<De;Ie++)zs(Ne[Ie],k,re,te)}function _i(C,k,re,te){const{opaque:K,transmissive:Ne,transparent:Ie}=C;j.setupLightsView(re),Qe===!0&&Me.setGlobalState(D.clippingPlanes,re),te&&We.viewport(O.copy(te)),K.length>0&&hn(K,k,re),Ne.length>0&&hn(Ne,k,re),Ie.length>0&&hn(Ie,k,re),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function sn(C,k,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[te.id]===void 0){const He=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");j.state.transmissionRenderTarget[te.id]=new Gi(1,1,{generateMipmaps:!0,type:He?va:mi,minFilter:Ns,samples:Math.max(4,Ut.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ne=j.state.transmissionRenderTarget[te.id],Ie=te.viewport||O;Ne.setSize(Ie.z*D.transmissionResolutionScale,Ie.w*D.transmissionResolutionScale);const De=D.getRenderTarget(),qe=D.getActiveCubeFace(),Ze=D.getActiveMipmapLevel();D.setRenderTarget(Ne),D.getClearColor(he),be=D.getClearAlpha(),be<1&&D.setClearColor(16777215,.5),D.clear(),lt&&Le.render(re);const nt=D.toneMapping;D.toneMapping=Hi;const rt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),j.setupLightsView(te),Qe===!0&&Me.setGlobalState(D.clippingPlanes,te),hn(C,re,te),W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne),Et.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let ft=0,Wt=k.length;ft<Wt;ft++){const Yt=k[ft],{object:At,geometry:pn,material:je,group:Nn}=Yt;if(je.side===ha&&At.layers.test(te.layers)){const st=je.side;je.side=Xn,je.needsUpdate=!0,ji(At,re,te,pn,je,Nn),je.side=st,je.needsUpdate=!0,He=!0}}He===!0&&(W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne))}D.setRenderTarget(De,qe,Ze),D.setClearColor(he,be),rt!==void 0&&(te.viewport=rt),D.toneMapping=nt}function hn(C,k,re){const te=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Ne=C.length;K<Ne;K++){const Ie=C[K],{object:De,geometry:qe,group:Ze}=Ie;let nt=Ie.material;nt.allowOverride===!0&&te!==null&&(nt=te),De.layers.test(re.layers)&&ji(De,k,re,qe,nt,Ze)}}function ji(C,k,re,te,K,Ne){C.onBeforeRender(D,k,re,te,K,Ne),C.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(D,k,re,te,C,Ne),K.transparent===!0&&K.side===ha&&K.forceSinglePass===!1?(K.side=Xn,K.needsUpdate=!0,D.renderBufferDirect(re,k,te,K,C,Ne),K.side=ns,K.needsUpdate=!0,D.renderBufferDirect(re,k,te,K,C,Ne),K.side=ha):D.renderBufferDirect(re,k,te,K,C,Ne),C.onAfterRender(D,k,re,te,K,Ne)}function Ma(C,k,re){k.isScene!==!0&&(k=Nt);const te=b.get(C),K=j.state.lights,Ne=j.state.shadowsArray,Ie=K.state.version,De=we.getParameters(C,K.state,Ne,k,re),qe=we.getProgramCacheKey(De);let Ze=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?k.environment:null,te.fog=k.fog;const nt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=pe.get(C.envMap||te.environment,nt),te.envMapRotation=te.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",bt),Ze=new Map,te.programs=Ze);let rt=Ze.get(qe);if(rt!==void 0){if(te.currentProgram===rt&&te.lightsStateVersion===Ie)return Qo(C,De),rt}else De.uniforms=we.getUniforms(C),C.onBeforeCompile(De,D),rt=we.acquireProgram(De,qe),Ze.set(qe,rt),te.uniforms=De.uniforms;const He=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=Me.uniform),Qo(C,De),te.needsLights=Gr(C),te.lightsStateVersion=Ie,te.needsLights&&(He.ambientLightColor.value=K.state.ambient,He.lightProbe.value=K.state.probe,He.directionalLights.value=K.state.directional,He.directionalLightShadows.value=K.state.directionalShadow,He.spotLights.value=K.state.spot,He.spotLightShadows.value=K.state.spotShadow,He.rectAreaLights.value=K.state.rectArea,He.ltc_1.value=K.state.rectAreaLTC1,He.ltc_2.value=K.state.rectAreaLTC2,He.pointLights.value=K.state.point,He.pointLightShadows.value=K.state.pointShadow,He.hemisphereLights.value=K.state.hemi,He.directionalShadowMatrix.value=K.state.directionalShadowMatrix,He.spotLightMatrix.value=K.state.spotLightMatrix,He.spotLightMap.value=K.state.spotLightMap,He.pointShadowMatrix.value=K.state.pointShadowMatrix),te.currentProgram=rt,te.uniformsList=null,rt}function Ko(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=Hc.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Qo(C,k){const re=b.get(C);re.outputColorSpace=k.outputColorSpace,re.batching=k.batching,re.batchingColor=k.batchingColor,re.instancing=k.instancing,re.instancingColor=k.instancingColor,re.instancingMorph=k.instancingMorph,re.skinning=k.skinning,re.morphTargets=k.morphTargets,re.morphNormals=k.morphNormals,re.morphColors=k.morphColors,re.morphTargetsCount=k.morphTargetsCount,re.numClippingPlanes=k.numClippingPlanes,re.numIntersection=k.numClipIntersection,re.vertexAlphas=k.vertexAlphas,re.vertexTangents=k.vertexTangents,re.toneMapping=k.toneMapping}function Jo(C,k,re,te,K){k.isScene!==!0&&(k=Nt),W.resetTextureUnits();const Ne=k.fog,Ie=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?k.environment:null,De=se===null?D.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Or,qe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ze=pe.get(te.envMap||Ie,qe),nt=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,rt=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),He=!!re.morphAttributes.position,ft=!!re.morphAttributes.normal,Wt=!!re.morphAttributes.color;let Yt=Hi;te.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Yt=D.toneMapping);const At=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,pn=At!==void 0?At.length:0,je=b.get(te),Nn=j.state.lights;if(Qe===!0&&(et===!0||C!==$)){const on=C===$&&te.id===ce;Me.setState(te,C,on)}let st=!1;te.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Nn.state.version||je.outputColorSpace!==De||K.isBatchedMesh&&je.batching===!1||!K.isBatchedMesh&&je.batching===!0||K.isBatchedMesh&&je.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&je.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||K.isInstancedMesh&&je.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&je.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&je.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&je.instancingMorph===!1&&K.morphTexture!==null||je.envMap!==Ze||te.fog===!0&&je.fog!==Ne||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Me.numPlanes||je.numIntersection!==Me.numIntersection)||je.vertexAlphas!==nt||je.vertexTangents!==rt||je.morphTargets!==He||je.morphNormals!==ft||je.morphColors!==Wt||je.toneMapping!==Yt||je.morphTargetsCount!==pn)&&(st=!0):(st=!0,je.__version=te.version);let Dn=je.currentProgram;st===!0&&(Dn=Ma(te,k,K));let kn=!1,xi=!1,qn=!1;const Lt=Dn.getUniforms(),rn=je.uniforms;if(We.useProgram(Dn.program)&&(kn=!0,xi=!0,qn=!0),te.id!==ce&&(ce=te.id,xi=!0),kn||$!==C){We.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Lt.setValue(V,"projectionMatrix",C.projectionMatrix),Lt.setValue(V,"viewMatrix",C.matrixWorldInverse);const Si=Lt.map.cameraPosition;Si!==void 0&&Si.setValue(V,_t.setFromMatrixPosition(C.matrixWorld)),Ut.logarithmicDepthBuffer&&Lt.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Lt.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),$!==C&&($=C,xi=!0,qn=!0)}if(je.needsLights&&(Nn.state.directionalShadowMap.length>0&&Lt.setValue(V,"directionalShadowMap",Nn.state.directionalShadowMap,W),Nn.state.spotShadowMap.length>0&&Lt.setValue(V,"spotShadowMap",Nn.state.spotShadowMap,W),Nn.state.pointShadowMap.length>0&&Lt.setValue(V,"pointShadowMap",Nn.state.pointShadowMap,W)),K.isSkinnedMesh){Lt.setOptional(V,K,"bindMatrix"),Lt.setOptional(V,K,"bindMatrixInverse");const on=K.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Lt.setValue(V,"boneTexture",on.boneTexture,W))}K.isBatchedMesh&&(Lt.setOptional(V,K,"batchingTexture"),Lt.setValue(V,"batchingTexture",K._matricesTexture,W),Lt.setOptional(V,K,"batchingIdTexture"),Lt.setValue(V,"batchingIdTexture",K._indirectTexture,W),Lt.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&Lt.setValue(V,"batchingColorTexture",K._colorsTexture,W));const Un=re.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Pe.update(K,re,Dn),(xi||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,Lt.setValue(V,"receiveShadow",K.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&k.environment!==null&&(rn.envMapIntensity.value=k.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=W1()),xi&&(Lt.setValue(V,"toneMappingExposure",D.toneMappingExposure),je.needsLights&&is(rn,qn),Ne&&te.fog===!0&&Ke.refreshFogUniforms(rn,Ne),Ke.refreshMaterialUniforms(rn,te,_e,Y,j.state.transmissionRenderTarget[C.id]),Hc.upload(V,Ko(je),rn,W)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Hc.upload(V,Ko(je),rn,W),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Lt.setValue(V,"center",K.center),Lt.setValue(V,"modelViewMatrix",K.modelViewMatrix),Lt.setValue(V,"normalMatrix",K.normalMatrix),Lt.setValue(V,"modelMatrix",K.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const on=te.uniformsGroups;for(let Si=0,Xi=on.length;Si<Xi;Si++){const Fs=on[Si];ze.update(Fs,Dn),ze.bind(Fs,Dn)}}return Dn}function is(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function Gr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(C,k,re){const te=b.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),b.get(C.texture).__webglTexture=k,b.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,k){const re=b.get(C);re.__webglFramebuffer=k,re.__useDefaultFramebuffer=k===void 0};const ya=V.createFramebuffer();this.setRenderTarget=function(C,k=0,re=0){se=C,G=k,ee=re;let te=null,K=!1,Ne=!1;if(C){const De=b.get(C);if(De.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(V.FRAMEBUFFER,De.__webglFramebuffer),O.copy(C.viewport),I.copy(C.scissor),le=C.scissorTest,We.viewport(O),We.scissor(I),We.setScissorTest(le),ce=-1;return}else if(De.__webglFramebuffer===void 0)W.setupRenderTarget(C);else if(De.__hasExternalTextures)W.rebindTextures(C,b.get(C.texture).__webglTexture,b.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const nt=C.depthTexture;if(De.__boundDepthTexture!==nt){if(nt!==null&&b.has(nt)&&(C.width!==nt.image.width||C.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(C)}}const qe=C.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const Ze=b.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[k])?te=Ze[k][re]:te=Ze[k],K=!0):C.samples>0&&W.useMultisampledRTT(C)===!1?te=b.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?te=Ze[re]:te=Ze,O.copy(C.viewport),I.copy(C.scissor),le=C.scissorTest}else O.copy(ne).multiplyScalar(_e).floor(),I.copy(xe).multiplyScalar(_e).floor(),le=Te;if(re!==0&&(te=ya),We.bindFramebuffer(V.FRAMEBUFFER,te)&&We.drawBuffers(C,te),We.viewport(O),We.scissor(I),We.setScissorTest(le),K){const De=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+k,De.__webglTexture,re)}else if(Ne){const De=k;for(let qe=0;qe<C.textures.length;qe++){const Ze=b.get(C.textures[qe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+qe,Ze.__webglTexture,re,De)}}else if(C!==null&&re!==0){const De=b.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,De.__webglTexture,re)}ce=-1},this.readRenderTargetPixels=function(C,k,re,te,K,Ne,Ie,De=0){if(!(C&&C.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(qe=qe[Ie]),qe){We.bindFramebuffer(V.FRAMEBUFFER,qe);try{const Ze=C.textures[De],nt=Ze.format,rt=Ze.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De),!Ut.textureFormatReadable(nt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(rt)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-te&&re>=0&&re<=C.height-K&&V.readPixels(k,re,te,K,Ce.convert(nt),Ce.convert(rt),Ne)}finally{const Ze=se!==null?b.get(se).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(C,k,re,te,K,Ne,Ie,De=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=b.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(qe=qe[Ie]),qe)if(k>=0&&k<=C.width-te&&re>=0&&re<=C.height-K){We.bindFramebuffer(V.FRAMEBUFFER,qe);const Ze=C.textures[De],nt=Ze.format,rt=Ze.type;if(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+De),!Ut.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,He),V.bufferData(V.PIXEL_PACK_BUFFER,Ne.byteLength,V.STREAM_READ),V.readPixels(k,re,te,K,Ce.convert(nt),Ce.convert(rt),0);const ft=se!==null?b.get(se).__webglFramebuffer:null;We.bindFramebuffer(V.FRAMEBUFFER,ft);const Wt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await mM(V,Wt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,He),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ne),V.deleteBuffer(He),V.deleteSync(Wt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,k=null,re=0){const te=Math.pow(2,-re),K=Math.floor(C.image.width*te),Ne=Math.floor(C.image.height*te),Ie=k!==null?k.x:0,De=k!==null?k.y:0;W.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,re,0,0,Ie,De,K,Ne),We.unbindTexture()};const Ea=V.createFramebuffer(),as=V.createFramebuffer();this.copyTextureToTexture=function(C,k,re=null,te=null,K=0,Ne=0){let Ie,De,qe,Ze,nt,rt,He,ft,Wt;const Yt=C.isCompressedTexture?C.mipmaps[Ne]:C.image;if(re!==null)Ie=re.max.x-re.min.x,De=re.max.y-re.min.y,qe=re.isBox3?re.max.z-re.min.z:1,Ze=re.min.x,nt=re.min.y,rt=re.isBox3?re.min.z:0;else{const rn=Math.pow(2,-K);Ie=Math.floor(Yt.width*rn),De=Math.floor(Yt.height*rn),C.isDataArrayTexture?qe=Yt.depth:C.isData3DTexture?qe=Math.floor(Yt.depth*rn):qe=1,Ze=0,nt=0,rt=0}te!==null?(He=te.x,ft=te.y,Wt=te.z):(He=0,ft=0,Wt=0);const At=Ce.convert(k.format),pn=Ce.convert(k.type);let je;k.isData3DTexture?(W.setTexture3D(k,0),je=V.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(W.setTexture2DArray(k,0),je=V.TEXTURE_2D_ARRAY):(W.setTexture2D(k,0),je=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment);const Nn=V.getParameter(V.UNPACK_ROW_LENGTH),st=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Dn=V.getParameter(V.UNPACK_SKIP_PIXELS),kn=V.getParameter(V.UNPACK_SKIP_ROWS),xi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Yt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Yt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ze),V.pixelStorei(V.UNPACK_SKIP_ROWS,nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,rt);const qn=C.isDataArrayTexture||C.isData3DTexture,Lt=k.isDataArrayTexture||k.isData3DTexture;if(C.isDepthTexture){const rn=b.get(C),Un=b.get(k),on=b.get(rn.__renderTarget),Si=b.get(Un.__renderTarget);We.bindFramebuffer(V.READ_FRAMEBUFFER,on.__webglFramebuffer),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Xi=0;Xi<qe;Xi++)qn&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(C).__webglTexture,K,rt+Xi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,b.get(k).__webglTexture,Ne,Wt+Xi)),V.blitFramebuffer(Ze,nt,Ie,De,He,ft,Ie,De,V.DEPTH_BUFFER_BIT,V.NEAREST);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||b.has(C)){const rn=b.get(C),Un=b.get(k);We.bindFramebuffer(V.READ_FRAMEBUFFER,Ea),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,as);for(let on=0;on<qe;on++)qn?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,rn.__webglTexture,K,rt+on):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,rn.__webglTexture,K),Lt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Un.__webglTexture,Ne,Wt+on):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Un.__webglTexture,Ne),K!==0?V.blitFramebuffer(Ze,nt,Ie,De,He,ft,Ie,De,V.COLOR_BUFFER_BIT,V.NEAREST):Lt?V.copyTexSubImage3D(je,Ne,He,ft,Wt+on,Ze,nt,Ie,De):V.copyTexSubImage2D(je,Ne,He,ft,Ze,nt,Ie,De);We.bindFramebuffer(V.READ_FRAMEBUFFER,null),We.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Lt?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(je,Ne,He,ft,Wt,Ie,De,qe,At,pn,Yt.data):k.isCompressedArrayTexture?V.compressedTexSubImage3D(je,Ne,He,ft,Wt,Ie,De,qe,At,Yt.data):V.texSubImage3D(je,Ne,He,ft,Wt,Ie,De,qe,At,pn,Yt):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ne,He,ft,Ie,De,At,pn,Yt.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ne,He,ft,Yt.width,Yt.height,At,Yt.data):V.texSubImage2D(V.TEXTURE_2D,Ne,He,ft,Ie,De,At,pn,Yt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Nn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,st),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Dn),V.pixelStorei(V.UNPACK_SKIP_ROWS,kn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,xi),Ne===0&&k.generateMipmaps&&V.generateMipmap(je),We.unbindTexture()},this.initRenderTarget=function(C){b.get(C).__webglFramebuffer===void 0&&W.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?W.setTextureCube(C,0):C.isData3DTexture?W.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?W.setTexture2DArray(C,0):W.setTexture2D(C,0),We.unbindTexture()},this.resetState=function(){G=0,ee=0,se=null,We.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Tt._getUnpackColorSpace()}}function Z1(){const o=Ve.useRef(null),t=Ve.useRef({x:0,y:0,targetX:0,targetY:0}),i=Ve.useRef(null),s=Ve.useRef(null);return Ve.useEffect(()=>{if(!o.current)return;const l=new DM;s.current=l;const c=new pi(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.z=30;const d=new Y1({canvas:o.current,alpha:!0,antialias:!0});d.setSize(window.innerWidth,window.innerHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,2));const m=800,g=new ii,h=new Float32Array(m*3),x=new Float32Array(m*3),S=new Float32Array(m);for(let z=0;z<m;z++){h[z*3]=(Math.random()-.5)*80,h[z*3+1]=(Math.random()-.5)*80,h[z*3+2]=(Math.random()-.5)*80;const A=Math.random();A<.33?(x[z*3]=0,x[z*3+1]=.83,x[z*3+2]=1):A<.66?(x[z*3]=.48,x[z*3+1]=.18,x[z*3+2]=.97):(x[z*3]=1,x[z*3+1]=.3,x[z*3+2]=.42),S[z]=Math.random()*.15+.05}g.setAttribute("position",new ni(h,3)),g.setAttribute("color",new ni(x,3)),g.setAttribute("size",new ni(S,1));const v=`
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,E=`
      varying vec3 vColor;
      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
        gl_FragColor = vec4(vColor, alpha * 0.6);
      }
    `,T=new wi({vertexShader:v,fragmentShader:E,vertexColors:!0,transparent:!0,blending:Gd,depthWrite:!1}),w=new XM(g,T);l.add(w);const y=new ii,M=[];for(let z=0;z<100;z++){const A=Math.floor(Math.random()*m),D=Math.floor(Math.random()*m);M.push(h[A*3],h[A*3+1],h[A*3+2],h[D*3],h[D*3+1],h[D*3+2])}y.setAttribute("position",new gi(M,3));const N=new r_({color:54527,transparent:!0,opacity:.05}),F=new VM(y,N);l.add(F);const U=z=>{t.current.targetX=z.clientX/window.innerWidth*2-1,t.current.targetY=z.clientY/window.innerHeight*2-1},j=()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)},H=()=>{i.current=requestAnimationFrame(H),t.current.x+=(t.current.targetX-t.current.x)*.05,t.current.y+=(t.current.targetY-t.current.y)*.05,w.rotation.y+=5e-4,w.rotation.x+=3e-4,c.position.x=t.current.x*3,c.position.y=-t.current.y*3,c.lookAt(l.position);const z=w.geometry.attributes.position.array;for(let A=0;A<z.length;A+=3)z[A+1]+=Math.sin(Date.now()*.001+A)*.005;w.geometry.attributes.position.needsUpdate=!0,d.render(l,c)};return window.addEventListener("resize",j),document.addEventListener("mousemove",U),H(),()=>{window.removeEventListener("resize",j),document.removeEventListener("mousemove",U),i.current&&cancelAnimationFrame(i.current),d.dispose(),g.dispose(),T.dispose(),y.dispose(),N.dispose()}},[]),p.jsx("canvas",{ref:o,id:"canvas3d"})}function K1({progress:o}){return p.jsx("div",{className:"progress-bar",style:{width:`${o}%`}})}function Q1({activeSection:o,totalSections:t,onDotClick:i}){return p.jsx("div",{className:"nav-dots",children:Array.from({length:t},(s,l)=>p.jsx("div",{className:`nav-dot ${o===l?"active":""}`,"data-section":l,onClick:()=>i(l)},l))})}function J1({score:o,isVisible:t}){return p.jsxs("div",{className:`score-display ${t?"show":""}`,children:["🏆 ",p.jsx("span",{className:"score-value",children:o})," XP"]})}function $1({unlockedAchievements:o}){const t=[{id:"ach-explore",icon:"🔍",label:"Explorador"},{id:"ach-discover",icon:"💡",label:"Descubridor"},{id:"ach-analyst",icon:"📊",label:"Analista"},{id:"ach-expert",icon:"🎓",label:"Experto"}];return p.jsx("div",{className:"achievement-bar",children:t.map(i=>p.jsxs("div",{className:`achievement ${o.has(i.id)?"unlocked":""}`,id:i.id,children:[p.jsx("span",{className:"achievement-icon",children:i.icon}),p.jsx("span",{children:i.label})]},i.id))})}function eA({onStart:o,isVisible:t}){const i=Ve.useRef(null);return Ve.useEffect(()=>{if(!i.current)return;const s=i.current;s.innerHTML="";for(let l=0;l<50;l++){const c=document.createElement("div");c.className="intro-particle",c.style.left=`${Math.random()*100}%`,c.style.animationDelay=`${Math.random()*8}s`,c.style.animationDuration=`${6+Math.random()*4}s`,s.appendChild(c)}return()=>{s.innerHTML=""}},[]),p.jsxs("div",{className:`intro-screen ${t?"":"hidden"}`,children:[p.jsx("div",{className:"intro-particles",ref:i}),p.jsx("div",{className:"intro-title",children:"La Paradoja Digital"}),p.jsx("div",{className:"intro-subtitle",children:'"Mantenerse en la escuela: desafiliación en un bachillerato tecnológico"'}),p.jsx("div",{className:"intro-sub",children:"Una experiencia interactiva sobre deserción escolar en bachilleratos tecnológicos"}),p.jsx("button",{className:"start-btn",onClick:o,children:"Comenzar la Experiencia"})]})}function tA({onScrollDown:o}){const t=Ve.useRef(null);return Ve.useEffect(()=>{t.current&&setTimeout(()=>{t.current.classList.add("visible")},100)},[]),p.jsx("section",{id:"sec-0",className:"hero-full",children:p.jsxs("div",{className:"hero-content",ref:t,children:[p.jsx("div",{className:"hero-pretitle",children:"Experiencia Interactiva"}),p.jsx("h1",{className:"hero-title",children:"La Paradoja Digital"}),p.jsx("div",{className:"hero-subtitle",children:'"Mantenerse en la escuela: desafiliación en un bachillerato tecnológico"'}),p.jsxs("div",{className:"hero-meta",children:[p.jsx("span",{className:"hero-author",children:"Jiménez-Moreno & Feria-Juárez (2026)"}),p.jsx("span",{className:"hero-institution",children:"CETis 74, Ensenada, Baja California"}),p.jsx("span",{className:"hero-doi",children:"DOI: 10.21555/rpp.3411"})]}),p.jsxs("div",{className:"hero-hook",children:[p.jsx("p",{children:"¿Qué pasa cuando el recurso que debería ayudar a estudiar se convierte en predictor de abandono?"}),p.jsxs("p",{className:"hero-question",children:["Descubre por qué los estudiantes ",p.jsx("strong",{children:"SIN computadora"})," tienen ",p.jsx("strong",{children:"2.5 veces más probabilidad"})," de mantenerse en la escuela."]})]}),p.jsxs("button",{className:"hero-cta",onClick:o,children:[p.jsx("span",{children:"Comenzar el recorrido académico"}),p.jsx("span",{className:"cta-arrow",children:"↓"})]}),p.jsx("div",{className:"scroll-hint",children:p.jsx("span",{children:"Una experiencia de storylearning sobre deserción escolar"})})]})})}function ts({target:o,duration:t=2e3,suffix:i=""}){const[s,l]=Ve.useState(0),[c,d]=Ve.useState(!1),m=Ve.useRef(null);Ve.useEffect(()=>{const x=m.current;if(!x||c)return;const S=new IntersectionObserver(([v])=>{if(v.isIntersecting&&!c){d(!0);const E=o%1!==0,T=performance.now(),w=y=>{const M=y-T,N=Math.min(M/t,1),U=(1-Math.pow(1-N,3))*o;l(E?U.toFixed(1):Math.floor(U)),N<1&&requestAnimationFrame(w)};requestAnimationFrame(w)}},{threshold:.2});return S.observe(x),()=>S.disconnect()},[o,t,c]);const h=o%1!==0?parseFloat(s).toFixed(1):s;return p.jsxs("span",{ref:m,children:[h,i]})}function nA(){const o=Ve.useRef(null),t=Ve.useRef([]);return Ve.useEffect(()=>{const i=new IntersectionObserver(s=>{s.forEach(l=>{l.isIntersecting&&l.target.classList.add("visible")})},{threshold:.2});return o.current&&i.observe(o.current),t.current.forEach(s=>{s&&i.observe(s)}),()=>i.disconnect()},[]),p.jsx("section",{id:"sec-1",children:p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"glass-card",ref:o,children:[p.jsx("span",{className:"badge badge-blue",children:"Introducción"}),p.jsx("h2",{className:"section-title",children:"El Problema de la Deserción"}),p.jsxs("div",{className:"content-blocks",children:[p.jsxs("div",{className:"content-block",children:[p.jsx("h3",{children:"📚 Contexto: Educación Media Superior en México"}),p.jsxs("p",{children:["La ",p.jsx("strong",{children:"Educación Media Superior (EMS)"})," en México tiene más de ",p.jsx("strong",{children:"30 subsistemas"}),", lo que la convierte en uno de los niveles más heterogéneos del sistema educativo. Desde 2012 es obligatoria, pero enfrenta una crisis silenciosa: la ",p.jsx("strong",{children:"deserción escolar"}),', también llamada "desafiliación" por MEJOREDU (2024).']}),p.jsxs("p",{children:["No es exclusivo de México: en ",p.jsx("strong",{children:"Latinoamérica"}),", el primer año de EMS concentra la mayor parte del abandono escolar (Díaz-Barajas y Ruiz-Olvera, 2018; Román, 2013)."]})]}),p.jsxs("div",{className:"highlight-box",children:[p.jsx("span",{className:"highlight-icon",children:"⚠️"}),p.jsxs("div",{children:[p.jsx("strong",{children:"Impacto más allá de las estadísticas:"})," La deserción implica la imposibilidad de cumplir con el derecho a la educación y limita las oportunidades de desarrollo de las nuevas generaciones."]})]}),p.jsxs("div",{className:"content-block",children:[p.jsx("h3",{children:"🎯 Pregunta de Investigación"}),p.jsx("blockquote",{className:"research-question",children:'"¿Qué variables personales, académicas y de capital digital predicen la permanencia de los estudiantes entre el primer y segundo semestre de bachillerato tecnológico?"'})]}),p.jsxs("div",{className:"content-block",children:[p.jsx("h3",{children:"📍 El Contexto Específico"}),p.jsxs("p",{children:["Este estudio se realizó en el ",p.jsx("strong",{children:"CETis 74 (Centro de Estudios Tecnológicos industriales y de servicios) de Ensenada, Baja California"}),", con una cohorte de ",p.jsx("strong",{children:"500 estudiantes"})," que iniciaron en agosto de 2023."]})]})]})]}),p.jsxs("div",{className:"stats-context",children:[p.jsx("h3",{className:"stats-title",children:"La Cohorte 2023-2025 en números"}),p.jsxs("div",{className:"stat-grid",children:[p.jsxs("div",{className:"stat-card",ref:i=>t.current[0]=i,children:[p.jsx("div",{className:"stat-number",children:p.jsx(ts,{target:500,suffix:""})}),p.jsxs("div",{className:"stat-label",children:["Estudiantes de primer ingreso",p.jsx("br",{}),"CETis 74, Ensenada"]})]}),p.jsxs("div",{className:"stat-card",ref:i=>t.current[1]=i,children:[p.jsx("div",{className:"stat-number",children:p.jsx(ts,{target:28,suffix:"%"})}),p.jsxs("div",{className:"stat-label",children:["Tasa de deserción",p.jsx("br",{}),"entre 1° y 2° semestre"]})]}),p.jsxs("div",{className:"stat-card",ref:i=>t.current[2]=i,children:[p.jsx("div",{className:"stat-number",children:p.jsx(ts,{target:141,suffix:""})}),p.jsxs("div",{className:"stat-label",children:["Estudiantes que causaron baja",p.jsx("br",{}),"de 500 inscritos"]})]}),p.jsxs("div",{className:"stat-card",ref:i=>t.current[3]=i,children:[p.jsx("div",{className:"stat-number",children:p.jsx(ts,{target:71.8,suffix:"%"})}),p.jsxs("div",{className:"stat-label",children:["Permanencia",p.jsx("br",{}),"359 estudiantes vigentes"]})]})]})]})]})})}function iA(){const o=Ve.useRef(null),[t,i]=Ve.useState(0);Ve.useEffect(()=>{const l=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")})},{threshold:.2});return o.current&&l.observe(o.current),()=>l.disconnect()},[]);const s=[{id:"causas",icon:"🔍",title:"Causas de la Deserción en EMS",content:p.jsxs(p.Fragment,{children:[p.jsx("p",{children:"Según Guzmán-Ventura y Moctezuma-Franco (2022), la deserción se entrelaza con múltiples factores:"}),p.jsxs("ul",{className:"theory-list",children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Contexto social y familiar:"})," Apoyo o presión del entorno"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Problemáticas psicológicas:"})," Salud mental, adaptación"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Falta de orientación vocacional:"})," Elección de carrera no alineada"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Problemas económicos:"})," Necesidad de trabajar"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Aspectos de rendimiento escolar:"})," Historial académico previo"]})]})]})},{id:"critica",icon:"💬",title:'Crítica al Concepto de "Abandono"',content:p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:["Guzmán-Ventura y Moctezuma-Franco (2023) cuestionan el término ",p.jsx("strong",{children:'"abandono"'}),":"]}),p.jsx("div",{className:"quote-box",children:'"El término carga la responsabilidad exclusivamente al estudiante, como si fuera una decisión individual sin contexto."'}),p.jsxs("p",{children:["Proponen pensar en ",p.jsx("strong",{children:"responsabilidades compartidas"})," entre:"]}),p.jsxs("div",{className:"responsibility-grid",children:[p.jsx("div",{className:"resp-item",children:"👤 Estudiante"}),p.jsx("div",{className:"resp-item",children:"🏫 Escuela"}),p.jsx("div",{className:"resp-item",children:"🏛️ Sistema"})]})]})},{id:"politicas",icon:"📋",title:"Políticas Educativas",content:p.jsxs(p.Fragment,{children:[p.jsx("p",{children:"El estudio contextualiza sus hallazgos frente a políticas públicas:"}),p.jsxs("ul",{className:"theory-list",children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Programa Beca Universal Benito Juárez:"}),p.jsx("span",{className:"note",children:"Apoyo económico para retención"})]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Extra edad:"}),p.jsx("span",{className:"note",children:"Factor de gestión escolar"})]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Prácticas docentes:"}),p.jsx("span",{className:"note",children:"Román (2013) destaca su importancia"})]})]}),p.jsxs("div",{className:"insight-box",children:[p.jsx("strong",{children:"Insight:"})," Las políticas asumen que más recursos = más retención. Pero... ¿qué pasa cuando los recursos no se usan como se espera?"]})]})},{id:"digital",icon:"💻",title:"Capital Digital Post-Pandemia",content:p.jsxs(p.Fragment,{children:[p.jsx("p",{children:"Peniche-Cetzal y Ramón-Mac (2023) destacan la relevancia de la infraestructura tecnológica para el éxito académico post-COVID-19."}),p.jsxs("div",{className:"paradox-preview",children:[p.jsx("div",{className:"paradox-title",children:"🎭 La Paradoja que Este Estudio Descubrió:"}),p.jsxs("p",{children:["Mientras la literatura asume que el capital digital ",p.jsx("em",{children:"facilita"})," el estudio, este estudio encontró que ",p.jsx("strong",{children:"tener computadora predice DESERCIÓN"}),"."]}),p.jsx("p",{className:"paradox-question",children:"¿Por qué los estudiantes SIN computadora tienen 2.5 veces más probabilidad de quedarse?"})]})]})}];return p.jsx("section",{id:"sec-2",children:p.jsx("div",{className:"container",children:p.jsxs("div",{className:"glass-card",ref:o,children:[p.jsx("span",{className:"badge badge-purple",children:"Marco Teórico"}),p.jsx("h2",{className:"section-title",children:"¿Qué Dice la Literatura?"}),p.jsx("p",{className:"section-intro",children:"El estudio se fundamenta en múltiples perspectivas. Explora cada una para entender el contexto teórico antes de ver los resultados."}),p.jsxs("div",{className:"theory-tabs",children:[p.jsx("div",{className:"tabs-nav",children:s.map((l,c)=>p.jsxs("button",{className:`tab-btn ${t===c?"active":""}`,onClick:()=>i(c),children:[p.jsx("span",{className:"tab-icon",children:l.icon}),p.jsx("span",{className:"tab-text",children:l.title})]},l.id))}),p.jsx("div",{className:"tab-content",children:p.jsxs("div",{className:"theory-card",children:[p.jsxs("div",{className:"theory-header",children:[p.jsx("span",{className:"theory-icon",children:s[t].icon}),p.jsx("h3",{children:s[t].title})]}),p.jsx("div",{className:"theory-body",children:s[t].content})]})})]})]})})})}function aA(){const o=Ve.useRef(null),[t,i]=Ve.useState(null);Ve.useEffect(()=>{const l=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")})},{threshold:.2});return o.current&&l.observe(o.current),()=>l.disconnect()},[]);const s=[{id:"tipo",number:"01",title:"Tipo de Estudio",content:p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:[p.jsx("strong",{children:"Enfoque:"})," Cuantitativo transversal no experimental"]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Técnica:"})," Regresión logística no paramétrica (método forward condicional)"]}),p.jsxs("div",{className:"method-note",children:[p.jsx("strong",{children:"¿Por qué regresión logística?"})," Las variables son mayoritariamente nominales y ordinales, lo que hace inadecuado el uso de regresión lineal. La regresión logística permite predecir probabilidades cuando la variable dependiente es binaria (1=vigente, 0=baja)."]})]})},{id:"muestra",number:"02",title:"Participantes",content:p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"sample-stats",children:[p.jsxs("div",{className:"sample-stat",children:[p.jsx("span",{className:"sample-number",children:"500"}),p.jsxs("span",{className:"sample-label",children:["Estudiantes totales",p.jsx("br",{}),"(universo completo)"]})]}),p.jsxs("div",{className:"sample-stat",children:[p.jsx("span",{className:"sample-number",children:"431"}),p.jsxs("span",{className:"sample-label",children:["Para análisis de",p.jsx("br",{}),"antecedentes escolares*"]})]})]}),p.jsxs("p",{style:{marginTop:"15px"},children:[p.jsx("strong",{children:"Perfil:"})," Estudiantes de primer ingreso a bachillerato tecnológico que iniciaron en agosto 2023."]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Distribución por sexo:"})," 232 hombres (46.4%) • 268 mujeres (53%)"]}),p.jsx("p",{className:"method-note-small",children:"*Para Categoría 2 se omitieron 69 casos (13.8%) por falta de información sobre tipo de secundaria."})]})},{id:"variables",number:"03",title:"Variables del Estudio",content:p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"variables-grid",children:[p.jsxs("div",{className:"variable-card",children:[p.jsx("div",{className:"var-cat",children:"Personales"}),p.jsx("div",{className:"var-item",children:"Sexo (hombre/mujer)"})]}),p.jsxs("div",{className:"variable-card",children:[p.jsx("div",{className:"var-cat",children:"Antecedentes Escolares"}),p.jsx("div",{className:"var-item",children:"Promedio de egreso de secundaria (0-10)"}),p.jsx("div",{className:"var-item",children:"Tipo de secundaria (Telesecundaria, Técnica, General)"})]}),p.jsxs("div",{className:"variable-card",children:[p.jsx("div",{className:"var-cat",children:"Capital Digital"}),p.jsx("div",{className:"var-item",children:"Internet en casa"}),p.jsx("div",{className:"var-item",children:"Computadora en casa"}),p.jsx("div",{className:"var-item",children:"Tablet en casa"}),p.jsx("div",{className:"var-item",children:"Smartphone"})]})]}),p.jsxs("div",{className:"variable-dependiente",children:[p.jsx("strong",{children:"Variable Dependiente:"})," Mantenerse inscrito entre primer y segundo semestre (1=vigente, 0=baja)"]})]})},{id:"procedimiento",number:"04",title:"Procedimiento",content:p.jsx(p.Fragment,{children:p.jsxs("ol",{className:"procedure-list",children:[p.jsxs("li",{children:[p.jsx("strong",{children:"Selección de cohorte:"})," Estudiantes que iniciaron en agosto 2023"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Recolección de datos:"})," Bases de datos de la Coordinación de Servicios Escolares del CETis 74"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Seguimiento:"})," Hasta el segundo semestre (conclusión del primer ciclo)"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Análisis por categorías:"})," Tres regresiones logísticas independientes"]})]})})},{id:"analisis",number:"05",title:"Análisis de Datos",content:p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:[p.jsx("strong",{children:"Software:"})," SPSS versión 21"]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Técnica:"})," Regresión logística con método forward condicional"]}),p.jsxs("div",{className:"metrics-box",children:[p.jsx("h4",{children:"📊 Métricas de Ajuste Utilizadas"}),p.jsxs("ul",{children:[p.jsxs("li",{children:[p.jsx("strong",{children:"R² de Nagelkerke:"})," Varianza explicada por el modelo"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Prueba de Hosmer y Lemeshow:"})," Bondad de ajuste del modelo"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Odds Ratio [Exp(B)]:"})," Cambio en probabilidades"]}),p.jsxs("li",{children:[p.jsx("strong",{children:"Valores p:"})," Significancia estadística"]})]})]})]})}];return p.jsx("section",{id:"sec-3",children:p.jsx("div",{className:"container",children:p.jsxs("div",{className:"glass-card",ref:o,children:[p.jsx("span",{className:"badge badge-blue",children:"Metodología"}),p.jsx("h2",{className:"section-title",children:"¿Cómo se Hizo el Estudio?"}),p.jsx("p",{className:"section-intro",children:"Entender el método es clave para interpretar los resultados. Despliega cada paso para conocer los detalles del diseño de investigación."}),p.jsx("div",{className:"method-accordion",children:s.map(l=>p.jsxs("div",{className:`method-step ${t===l.id?"expanded":""}`,children:[p.jsxs("button",{className:"step-header",onClick:()=>i(t===l.id?null:l.id),children:[p.jsx("span",{className:"step-number",children:l.number}),p.jsx("span",{className:"step-title-text",children:l.title}),p.jsx("span",{className:"step-toggle",children:t===l.id?"−":"+"})]}),t===l.id&&p.jsx("div",{className:"step-content",children:l.content})]},l.id))})]})})})}function sA(){const o=Ve.useRef(null),t=Ve.useRef([]);return Ve.useEffect(()=>{const i=new IntersectionObserver(s=>{s.forEach(l=>{l.isIntersecting&&l.target.classList.add("visible")})},{threshold:.2});return o.current&&i.observe(o.current),t.current.forEach(s=>{s&&i.observe(s)}),()=>i.disconnect()},[]),p.jsx("section",{id:"sec-4",children:p.jsx("div",{className:"container",children:p.jsxs("div",{className:"glass-card",ref:o,children:[p.jsx("span",{className:"badge badge-red",children:"Resultados • Categoría 1"}),p.jsx("h2",{className:"section-title",children:"Variables Personales: ¿Influye el Sexo?"}),p.jsxs("div",{className:"result-header",children:[p.jsx("div",{className:"result-verdict",children:p.jsx("span",{className:"verdict-badge significativo",children:"Significativo pero débil"})}),p.jsx("p",{className:"result-summary",children:"El sexo es predictor estadísticamente significativo de la permanencia, pero explica muy poco del fenómeno (solo 3.1% de la varianza)."})]}),p.jsxs("div",{className:"stats-comparison",children:[p.jsx("h3",{className:"comparison-title",children:"La Disproporción de Género"}),p.jsxs("div",{className:"comparison-grid",children:[p.jsxs("div",{className:"comparison-card hombres",ref:i=>t.current[0]=i,children:[p.jsx("div",{className:"comp-icon",children:"♂️"}),p.jsx("div",{className:"comp-label",children:"Hombres"}),p.jsxs("div",{className:"comp-stat",children:[p.jsx("span",{className:"comp-number",children:p.jsx(ts,{target:58.16,suffix:"%"})}),p.jsx("span",{className:"comp-desc",children:"de las bajas"})]}),p.jsx("div",{className:"comp-detail",children:"(82 de 141 estudiantes)"}),p.jsxs("div",{className:"comp-context",children:["Pero solo representan el ",p.jsx("strong",{children:"46.4%"})," de la matrícula"]})]}),p.jsxs("div",{className:"comparison-card mujeres",ref:i=>t.current[1]=i,children:[p.jsx("div",{className:"comp-icon",children:"♀️"}),p.jsx("div",{className:"comp-label",children:"Mujeres"}),p.jsxs("div",{className:"comp-stat",children:[p.jsx("span",{className:"comp-number",children:p.jsx(ts,{target:41.84,suffix:"%"})}),p.jsx("span",{className:"comp-desc",children:"de las bajas"})]}),p.jsx("div",{className:"comp-detail",children:"(59 de 141 estudiantes)"}),p.jsxs("div",{className:"comp-context",children:["Representan el ",p.jsx("strong",{children:"53%"})," de la matrícula"]})]})]})]}),p.jsxs("div",{className:"statistical-data",children:[p.jsx("h3",{children:"📊 Datos Estadísticos del Modelo"}),p.jsxs("div",{className:"stat-table",children:[p.jsxs("div",{className:"stat-row header",children:[p.jsx("span",{children:"Métrica"}),p.jsx("span",{children:"Valor"}),p.jsx("span",{children:"Interpretación"})]}),p.jsxs("div",{className:"stat-row",children:[p.jsx("span",{children:"Exp(B)"}),p.jsx("span",{className:"value",children:"0.516"}),p.jsx("span",{children:"Ser hombre reduce las probabilidades de permanecer"})]}),p.jsxs("div",{className:"stat-row",children:[p.jsx("span",{children:"p-valor"}),p.jsx("span",{className:"value highlight",children:".001"}),p.jsx("span",{children:"Significativo estadísticamente"})]}),p.jsxs("div",{className:"stat-row",children:[p.jsx("span",{children:"R² Nagelkerke"}),p.jsx("span",{className:"value",children:"3.1%"}),p.jsx("span",{children:"Bajo poder explicativo"})]})]})]}),p.jsxs("div",{className:"interpretation-box",children:[p.jsx("h4",{children:"💡 Interpretación"}),p.jsxs("p",{children:["Aunque los hombres abandonan en mayor proporción (58.16% de las bajas vs. 46.4% de la matrícula), el sexo como variable ",p.jsx("strong",{children:"explica muy poco"})," del fenómeno (R² = 3.1%). Esto sugiere que hay ",p.jsx("strong",{children:"factores intermedios no medidos"}),":"]}),p.jsxs("ul",{children:[p.jsx("li",{children:"Expectativas laborales tempranas"}),p.jsx("li",{children:"Presión económica familiar"}),p.jsx("li",{children:"Cultura escolar masculina"}),p.jsx("li",{children:"Dinámicas de género en el entorno"})]})]})]})})})}function rA(){const o=Ve.useRef(null),t=Ve.useRef([]);return Ve.useEffect(()=>{const i=new IntersectionObserver(s=>{s.forEach(l=>{l.isIntersecting&&l.target.classList.add("visible")})},{threshold:.2});return o.current&&i.observe(o.current),t.current.forEach(s=>{s&&i.observe(s)}),()=>i.disconnect()},[]),p.jsx("section",{id:"sec-5",children:p.jsx("div",{className:"container",children:p.jsxs("div",{className:"glass-card",ref:o,children:[p.jsx("span",{className:"badge badge-red",children:"Resultados • Categoría 2"}),p.jsx("h2",{className:"section-title",children:"Antecedentes Escolares: ¿El Pasado Importa?"}),p.jsxs("div",{className:"result-header",children:[p.jsx("div",{className:"result-verdict",children:p.jsx("span",{className:"verdict-badge mixto",children:"Resultados Mixtos"})}),p.jsxs("p",{className:"result-summary",children:["El promedio de secundaria es el ",p.jsx("strong",{children:"predictor más fuerte"})," del estudio. Sin embargo, el tipo de secundaria ",p.jsx("strong",{children:"no resultó significativo"}),"."]})]}),p.jsxs("div",{className:"result-highlight-box promedio",children:[p.jsxs("div",{className:"highlight-header",children:[p.jsx("span",{className:"highlight-icon",children:"📊"}),p.jsx("h3",{children:"El Promedio: El Mejor Predictor"})]}),p.jsxs("div",{className:"highlight-stat",ref:i=>t.current[0]=i,children:[p.jsx("span",{className:"big-number",children:"2.04×"}),p.jsx("span",{className:"big-desc",children:"más probabilidad de permanecer por cada punto adicional en el promedio"})]}),p.jsxs("div",{className:"stat-table compact",children:[p.jsxs("div",{className:"stat-row",children:[p.jsx("span",{children:"Exp(B)"}),p.jsx("span",{className:"value highlight",children:"2.042"}),p.jsxs("span",{children:["p ","<"," .001"]})]}),p.jsxs("div",{className:"stat-row",children:[p.jsx("span",{children:"R² Nagelkerke"}),p.jsx("span",{className:"value highlight",children:"8.9%"}),p.jsx("span",{children:"Mayor poder explicativo del estudio"})]})]}),p.jsx("div",{className:"interpretation-highlight",children:p.jsxs("p",{children:[p.jsx("strong",{children:"¿Qué significa esto?"})," Un estudiante con promedio 9 en secundaria tiene el doble de probabilidad de permanecer que uno con promedio 8. El desempeño previo es el mejor indicador de éxito futuro."]})})]}),p.jsxs("div",{className:"result-highlight-box tipo-escuela",children:[p.jsxs("div",{className:"highlight-header",children:[p.jsx("span",{className:"highlight-icon",children:"🏫"}),p.jsx("h3",{children:"El Tipo de Secundaria: No Importa de Dónde Vienes"})]}),p.jsxs("div",{className:"tipo-grid",children:[p.jsxs("div",{className:"tipo-item no-significativo",ref:i=>t.current[1]=i,children:[p.jsx("span",{className:"tipo-nombre",children:"Telesecundaria"}),p.jsx("span",{className:"tipo-p",children:"p = .231"}),p.jsx("span",{className:"tipo-status",children:"❌ No significativo"})]}),p.jsxs("div",{className:"tipo-item no-significativo",ref:i=>t.current[2]=i,children:[p.jsx("span",{className:"tipo-nombre",children:"Secundaria Técnica"}),p.jsx("span",{className:"tipo-p",children:"p = .731"}),p.jsx("span",{className:"tipo-status",children:"❌ No significativo"})]}),p.jsxs("div",{className:"tipo-item no-significativo",ref:i=>t.current[3]=i,children:[p.jsx("span",{className:"tipo-nombre",children:"Secundaria General"}),p.jsx("span",{className:"tipo-p",children:"p = .125"}),p.jsx("span",{className:"tipo-status",children:"❌ No significativo"})]})]}),p.jsx("div",{className:"interpretation-highlight",children:p.jsxs("p",{children:[p.jsx("strong",{children:"Conclusión:"})," Ningún tipo de secundaria predijo la permanencia. El método forward condicional ",p.jsx("strong",{children:"excluyó estas variables del modelo"}),". Lo que importa no es la etiqueta institucional, sino ",p.jsx("strong",{children:"cómo llegaste"}),"."]})})]}),p.jsxs("div",{className:"validation-box",children:[p.jsx("h4",{children:"✅ Validación del Modelo"}),p.jsxs("p",{children:[p.jsx("strong",{children:"Prueba de Hosmer y Lemeshow:"})," χ² = 7.732, p = .460"]}),p.jsxs("p",{className:"validation-note",children:["Un valor p no significativo indica ",p.jsx("strong",{children:"buen ajuste del modelo"}),"(los datos observados se ajustan bien a los predichos)."]})]}),p.jsxs("div",{className:"muestra-nota",children:[p.jsx("span",{className:"nota-icon",children:"📋"}),p.jsxs("p",{children:[p.jsx("strong",{children:"Nota metodológica:"})," Para esta categoría se trabajó con n=431 (se omitieron 69 casos por falta de información sobre tipo de secundaria)."]})]})]})})})}function oA(){const o=Ve.useRef(null),t=Ve.useRef([]);return Ve.useEffect(()=>{const i=new IntersectionObserver(s=>{s.forEach(l=>{l.isIntersecting&&l.target.classList.add("visible")})},{threshold:.2});return o.current&&i.observe(o.current),t.current.forEach(s=>{s&&i.observe(s)}),()=>i.disconnect()},[]),p.jsx("section",{id:"sec-6",children:p.jsx("div",{className:"container",children:p.jsxs("div",{className:"glass-card paradox-highlight",ref:o,children:[p.jsx("span",{className:"badge badge-purple",children:"Resultados • Categoría 3"}),p.jsx("h2",{className:"section-title",children:"🎭 La Paradoja del Capital Digital"}),p.jsxs("div",{className:"paradox-banner",children:[p.jsx("div",{className:"paradox-icon",children:"💻"}),p.jsxs("div",{className:"paradox-statement",children:[p.jsxs("p",{className:"paradox-lead",children:["Tener computadora en casa predice ",p.jsx("span",{className:"destacado-rojo",children:"DESERCIÓN"}),", no permanencia."]}),p.jsxs("p",{className:"paradox-sub",children:["Los estudiantes ",p.jsx("strong",{children:"SIN computadora"})," tienen"," ",p.jsx("span",{className:"destacado-verde",children:"2.5 veces más probabilidad"})," de mantenerse inscritos."]})]})]}),p.jsxs("div",{className:"paradox-stats",children:[p.jsxs("div",{className:"paradox-stat-card sin-compu",ref:i=>t.current[0]=i,children:[p.jsx("div",{className:"stat-label-top",children:"Sin computadora"}),p.jsx("div",{className:"stat-big",children:p.jsx(ts,{target:68.79,suffix:"%"})}),p.jsx("div",{className:"stat-detail",children:"de los que desertaron (97/141)"}),p.jsx("div",{className:"stat-insight",children:"✅ Mayor permanencia"})]}),p.jsx("div",{className:"paradox-vs",children:"VS"}),p.jsxs("div",{className:"paradox-stat-card con-internet",ref:i=>t.current[1]=i,children:[p.jsx("div",{className:"stat-label-top",children:"Con Internet (no significativo)"}),p.jsx("div",{className:"stat-big",children:p.jsx(ts,{target:85.82,suffix:"%"})}),p.jsx("div",{className:"stat-detail",children:"de los que desertaron lo tenían (121/141)"}),p.jsx("div",{className:"stat-insight",children:"⚠️ No predice permanencia"})]})]}),p.jsxs("div",{className:"statistical-data",children:[p.jsx("h3",{children:"📊 Estadísticos del Modelo"}),p.jsxs("div",{className:"stat-table",children:[p.jsxs("div",{className:"stat-row header",children:[p.jsx("span",{children:"Métrica"}),p.jsx("span",{children:"Valor"}),p.jsx("span",{children:"Significado"})]}),p.jsxs("div",{className:"stat-row destacado",children:[p.jsx("span",{children:"Exp(B)"}),p.jsx("span",{className:"value alert",children:"0.399"}),p.jsx("span",{children:'Cada unidad de "tener computadora" reduce la probabilidad de permanecer'})]}),p.jsxs("div",{className:"stat-row",children:[p.jsx("span",{children:"p-valor"}),p.jsxs("span",{className:"value highlight",children:["<"," .001"]}),p.jsx("span",{children:"Altamente significativo"})]}),p.jsxs("div",{className:"stat-row",children:[p.jsx("span",{children:"R² Nagelkerke"}),p.jsx("span",{className:"value",children:"5.7%"}),p.jsx("span",{children:"Segundo mayor poder explicativo del estudio"})]})]})]}),p.jsxs("div",{className:"variables-no-incluidas",children:[p.jsx("h4",{children:"🚫 Variables de Capital Digital No Incluidas en el Modelo Final"}),p.jsxs("div",{className:"no-incluidas-grid",children:[p.jsxs("div",{className:"no-item",children:[p.jsx("span",{className:"no-icon",children:"📶"}),p.jsx("span",{children:"Internet"}),p.jsx("span",{className:"no-razon",children:"No significativo"})]}),p.jsxs("div",{className:"no-item",children:[p.jsx("span",{className:"no-icon",children:"📱"}),p.jsx("span",{children:"Tablet"}),p.jsx("span",{className:"no-razon",children:"No significativo"})]}),p.jsxs("div",{className:"no-item",children:[p.jsx("span",{className:"no-icon",children:"📲"}),p.jsx("span",{children:"Smartphone"}),p.jsx("span",{className:"no-razon",children:"No significativo"})]})]}),p.jsxs("p",{className:"no-explicacion",children:["El método ",p.jsx("em",{children:"forward condicional"})," solo incluye variables que mejoran significativamente el modelo. Solo la computadora cumplió este criterio."]})]}),p.jsxs("div",{className:"interpretation-box warning",children:[p.jsx("h4",{children:"⚠️ Interpretación Crítica"}),p.jsxs("p",{children:["Este hallazgo ",p.jsx("strong",{children:"contradice las políticas educativas"})," como las Becas Benito Juárez y programas de dotación tecnológica, que asumen que más recursos = más retención."]}),p.jsx("p",{children:p.jsx("strong",{children:"Posibles explicaciones:"})}),p.jsxs("ul",{children:[p.jsxs("li",{children:["🎮 ",p.jsx("strong",{children:"Uso diferencial:"})," ¿La computadora se usa más para distracción que para estudio?"]}),p.jsxs("li",{children:["💼 ",p.jsx("strong",{children:"Trabajo:"})," ¿Quienes tienen computadora trabajan más horas fuera de la escuela?"]}),p.jsxs("li",{children:["🔍 ",p.jsx("strong",{children:"Búsqueda de empleo:"})," ¿El acceso a internet facilita encontrar trabajo informal?"]}),p.jsxs("li",{children:["📚 ",p.jsx("strong",{children:"Uso efectivo:"}),' ¿Se diferencia entre "tener" y "usar para aprender"?']})]})]}),p.jsxs("div",{className:"cita-autores",children:[p.jsx("blockquote",{children:'"El hecho de tener computadora en casa resulta ser la variable de mayor impacto [...] respecto a aquellas relacionadas con elementos tecnológicos disponibles en casa."'}),p.jsx("cite",{children:"— Jiménez-Moreno & Feria-Juárez (2026), p. 15"})]})]})})})}function lA(){const o=Ve.useRef(null),[t,i]=Ve.useState(null);Ve.useEffect(()=>{const l=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")})},{threshold:.2});return o.current&&l.observe(o.current),()=>l.disconnect()},[]);const s=[{id:"limitaciones",icon:"📉",title:"1. Limitaciones del Modelo",color:"blue",content:p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:["El estudio reconoce explícitamente que las variables analizadas permiten solo un",p.jsx("strong",{children:' "análisis somero"'}),". Con un máximo del ",p.jsx("strong",{children:"8.9% de varianza explicada"}),", el ",p.jsx("strong",{children:"91.1%"})," de los factores que determinan la deserción no están en este modelo."]}),p.jsxs("div",{className:"varianza-visual",children:[p.jsx("div",{className:"var-bar explicada",style:{width:"8.9%"},children:p.jsx("span",{children:"8.9% explicado"})}),p.jsx("div",{className:"var-bar no-explicada",style:{width:"91.1%"},children:p.jsx("span",{children:"91.1% no explicado"})})]}),p.jsx("p",{className:"limitation-note",children:"Esto no invalida el estudio, pero limita su capacidad predictiva y generalizadora."})]})},{id:"paradoja",icon:"🎭",title:"2. La Paradoja del Capital Digital",color:"purple",content:p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:["El hallazgo de que tener computadora predice deserción ",p.jsx("strong",{children:"contradice la premisa"})," de políticas como las Becas Benito Juárez y programas de dotación tecnológica, que asumen que:"]}),p.jsx("div",{className:"premisa-box",children:p.jsxs("div",{className:"premisa-flecha",children:[p.jsx("span",{children:"+ Recursos tecnológicos"}),p.jsx("span",{className:"flecha",children:"→"}),p.jsx("span",{children:"+ Retención escolar"})]})}),p.jsxs("p",{children:[p.jsx("strong",{children:"La realidad:"})," Correlación negativa. Más recursos ≠ Más permanencia."]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Revisión necesaria:"})," La posesión de dispositivos ≠ éxito académico. Falta medir el ",p.jsx("strong",{children:"USO efectivo"})," de la tecnología."]})]})},{id:"acumulacion",icon:"📚",title:"3. La Acumulación Histórica",color:"green",content:p.jsxs(p.Fragment,{children:[p.jsxs("p",{children:["El promedio de secundaria como mejor predictor apoya la ",p.jsx("strong",{children:"tesis de Román (2013)"}),":"]}),p.jsx("blockquote",{className:"discussion-quote",children:'"La deserción se construye a lo largo de la trayectoria escolar, no es un evento aislado."'}),p.jsxs("p",{children:["Esto implica que las intervenciones deben ser ",p.jsx("strong",{children:"precoces"})," y no esperar al nivel medio superior."]})]})},{id:"relaciones",icon:"🔗",title:"4. Relación con Otros Estudios",color:"orange",content:p.jsx(p.Fragment,{children:p.jsxs("div",{className:"estudio-comparison",children:[p.jsxs("div",{className:"estudio-item coincide",children:[p.jsx("span",{className:"estudio-authors",children:"Díaz y Ruiz (2018)"}),p.jsx("span",{className:"estudio-finding",children:"Coincide: el sexo no es determinante para deserción"})]}),p.jsxs("div",{className:"estudio-item coincide",children:[p.jsx("span",{className:"estudio-authors",children:"Román (2013)"}),p.jsx("span",{className:"estudio-finding",children:"Coincide: deserción acumulada históricamente"})]}),p.jsxs("div",{className:"estudio-item coincide",children:[p.jsx("span",{className:"estudio-authors",children:"Guzmán y Moctezuma (2023)"}),p.jsx("span",{className:"estudio-finding",children:"Coincide: necesidad de analizar clima escolar"})]}),p.jsxs("div",{className:"estudio-item diverge",children:[p.jsx("span",{className:"estudio-authors",children:"Peniche-Cetzal y Ramón-Mac (2023)"}),p.jsx("span",{className:"estudio-finding",children:"Diverge: capital digital no resultó protector aquí"})]})]})})},{id:"implicaciones",icon:"🎯",title:"5. Implicaciones Prácticas",color:"red",content:p.jsxs(p.Fragment,{children:[p.jsx("h4",{children:"Para el CETis 74:"}),p.jsxs("ul",{className:"implications-list",children:[p.jsx("li",{children:"Ampliar recopilación de información (contexto socioeconómico, dinámicas escolares)"}),p.jsx("li",{children:"Realizar estudios cualitativos para comprender razones del abandono"}),p.jsx("li",{children:"Desarrollar mecanismos de prevención e intervención específicos"})]}),p.jsx("h4",{children:"Para la Política Educativa:"}),p.jsxs("ul",{className:"implications-list",children:[p.jsx("li",{children:"Revisar supuestos de programas de dotación tecnológica"}),p.jsx("li",{children:"Complementar capital digital con análisis de clima escolar"}),p.jsx("li",{children:"Considerar que el primer semestre es crítico para retención"})]})]})}];return p.jsx("section",{id:"sec-7",children:p.jsx("div",{className:"container",children:p.jsxs("div",{className:"glass-card",ref:o,children:[p.jsx("span",{className:"badge badge-purple",children:"Discusión"}),p.jsx("h2",{className:"section-title",children:"¿Qué Significan Estos Hallazgos?"}),p.jsx("p",{className:"section-intro",children:"Los autores organizan la discusión en cinco ejes fundamentales. Expande cada uno para explorar las implicaciones de los resultados."}),p.jsx("div",{className:"discussion-accordion",children:s.map(l=>p.jsxs("div",{className:`discussion-item ${t===l.id?"expanded":""} ${l.color}`,children:[p.jsxs("button",{className:"discussion-header",onClick:()=>i(t===l.id?null:l.id),children:[p.jsx("span",{className:"discussion-icon",children:l.icon}),p.jsx("span",{className:"discussion-title-text",children:l.title}),p.jsx("span",{className:"discussion-toggle",children:t===l.id?"−":"+"})]}),t===l.id&&p.jsx("div",{className:"discussion-content",children:l.content})]},l.id))}),p.jsxs("div",{className:"limitaciones-box",children:[p.jsx("h3",{children:"⚠️ Limitaciones del Estudio"}),p.jsxs("div",{className:"limitaciones-grid",children:[p.jsxs("div",{className:"limitacion-item",children:[p.jsx("span",{className:"lim-num",children:"1"}),p.jsxs("p",{children:[p.jsx("strong",{children:"Variables no medidas:"})," Ingreso familiar, trabajo juvenil, clima escolar, calidad docente, salud mental, violencia en el entorno."]})]}),p.jsxs("div",{className:"limitacion-item",children:[p.jsx("span",{className:"lim-num",children:"2"}),p.jsxs("p",{children:[p.jsx("strong",{children:"Nivel de medición:"})," Falta de variables de razón o intervalo que permitieran modelos más robustos."]})]}),p.jsxs("div",{className:"limitacion-item",children:[p.jsx("span",{className:"lim-num",children:"3"}),p.jsxs("p",{children:[p.jsx("strong",{children:"Alcance temporal:"})," Solo mide entre primer y segundo semestre; no sigue hasta graduación."]})]}),p.jsxs("div",{className:"limitacion-item",children:[p.jsx("span",{className:"lim-num",children:"4"}),p.jsxs("p",{children:[p.jsx("strong",{children:"Contexto específico:"})," Resultados de una sola escuela; limitada generalización."]})]})]})]})]})})})}function cA({id:o,question:t,options:i,correctIndex:s,explanation:l,questionNumber:c,isAnswered:d,onAnswer:m}){const[g,h]=Ve.useState(null),[x,S]=Ve.useState(!1),[v,E]=Ve.useState(!1),T=w=>{if(d)return;h(w);const y=w===s;E(y),S(!0),m(o,y)};return p.jsxs("div",{className:"quiz-container",id:o,children:[p.jsxs("div",{className:"quiz-header",children:[p.jsxs("span",{className:"quiz-number",children:["Pregunta ",c]}),d&&p.jsx("span",{className:`quiz-status ${v?"correct":"wrong"}`,children:v?"✓ Correcto":"✗ Incorrecto"})]}),p.jsx("div",{className:"quiz-question",children:t}),p.jsx("div",{className:"quiz-options",children:i.map((w,y)=>p.jsxs("div",{className:`quiz-option 
              ${d&&y===s?"correct":""} 
              ${d&&g===y&&y!==s?"wrong":""} 
              ${d?"disabled":""}`,onClick:()=>T(y),children:[p.jsxs("span",{className:"option-letter",children:[String.fromCharCode(97+y),")"]}),p.jsx("span",{className:"option-text",children:w.substring(3)})]},y))}),x&&p.jsxs("div",{className:`quiz-feedback show ${v?"correct-fb":"wrong-fb"}`,children:[p.jsx("div",{className:"feedback-icon",children:v?"✅":"❌"}),p.jsxs("div",{className:"feedback-content",children:[p.jsx("div",{className:"feedback-title",children:v?"¡Correcto!":"No es correcto"}),p.jsx("div",{className:"feedback-explanation",children:l})]})]})]})}function uA({onAnswer:o,isAnswered:t}){const i=Ve.useRef(null);Ve.useEffect(()=>{const l=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting&&d.target.classList.add("visible")})},{threshold:.2});return i.current&&l.observe(i.current),()=>l.disconnect()},[]);const s=[{id:"quiz1",question:"📊 ¿Cuál fue el predictor más fuerte de la permanencia escolar en el estudio?",options:["a) Tener computadora en casa","b) El sexo del estudiante","c) El promedio de secundaria","d) El tipo de secundaria (técnica, general, telesecundaria)"],correctIndex:2,explanation:"El promedio de secundaria fue el predictor más fuerte con Exp(B) = 2.042, p < .001 y R² = 8.9%. Cada punto adicional duplica las probabilidades de permanecer."},{id:"quiz2",question:"🎭 ¿Qué encontró el estudio sobre el capital digital (tener computadora)?",options:["a) Los estudiantes CON computadora se mantienen más en la escuela","b) Tener computadora no tiene relación con la deserción","c) Los estudiantes SIN computadora tienen 2.5 veces más probabilidad de permanecer","d) Solo importa si hay internet, no la computadora"],correctIndex:2,explanation:"¡La paradoja! Tener computadora predice DESERCIÓN (Exp(B) = 0.399). Los estudiantes sin computadora tienen 2.5 veces (1/0.399) más probabilidad de mantenerse inscritos."},{id:"quiz3",question:"🏫 ¿Qué pasó con el tipo de secundaria (técnica, general, telesecundaria)?",options:["a) Las telesecundarias tuvieron mayor deserción","b) Las secundarias técnicas predijeron mejor permanencia","c) El tipo de secundaria NO resultó significativo en ningún caso","d) Fue el segundo predictor más importante después del promedio"],correctIndex:2,explanation:"Ningún tipo de secundaria predijo la permanencia (p > .05 en todos los casos). El método forward condicional excluyó estas variables del modelo."},{id:"quiz4",question:"📉 ¿Cuánto explican las variables del estudio sobre la deserción?",options:["a) El 91.1% de la varianza","b) Solo el 8.9% como máximo (promedio de secundaria)","c) Aproximadamente el 50%","d) No se puede determinar con los datos del estudio"],correctIndex:1,explanation:"Las variables explican muy poco. El máximo fue 8.9% con el promedio de secundaria. El 91.1% de los factores que determinan la deserción NO están en este modelo."},{id:"quiz5",question:"♂️ Sobre la brecha de género, ¿qué encontró el estudio?",options:["a) El sexo no tuvo ningún efecto en la deserción","b) Las mujeres abandonaron en mayor proporción que los hombres","c) Los hombres representan 58.16% de las bajas aunque son solo 46.4% de la matrícula","d) El sexo fue el predictor más importante del estudio"],correctIndex:2,explanation:"Los hombres tienen mayor proporción de bajas (58.16%) que su representación en matrícula (46.4%). Sin embargo, el sexo explica poco (R² = 3.1%) y hay factores intermedios no medidos."}];return p.jsx("section",{id:"sec-8",children:p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"glass-card",ref:i,children:[p.jsx("span",{className:"badge badge-red",children:"Evaluación de Aprendizaje"}),p.jsx("h2",{className:"section-title",children:"¿Cuánto Aprendiste?"}),p.jsx("p",{className:"section-intro",children:"Pon a prueba tu comprensión del estudio con estas preguntas. Cada respuesta incluye una explicación para reforzar el aprendizaje."})]}),p.jsx("div",{className:"quiz-progress",children:p.jsxs("span",{className:"quiz-counter",children:[Object.keys(t).filter(l=>t(l)).length," / ",s.length," respondidas"]})}),s.map((l,c)=>p.jsx(cA,{id:l.id,question:l.question,options:l.options,correctIndex:l.correctIndex,explanation:l.explanation,questionNumber:c+1,isAnswered:t(l.id),onAnswer:o},l.id))]})})}function fA(){const o=Ve.useRef(null),t=Ve.useRef([]);Ve.useEffect(()=>{const s=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")})},{threshold:.2});return o.current&&s.observe(o.current),t.current.forEach(l=>{l&&s.observe(l)}),()=>s.disconnect()},[]);const i=[{icon:"❓",title:"¿Por qué los que tienen computadora se van más?",hipotesis:["¿Trabajan más horas fuera de la escuela?","¿Usan la tecnología para distracción (videojuegos, redes sociales)?","¿El acceso a internet facilita la búsqueda de empleo informal?","¿Tienen más oportunidades laborales que los incentivan a dejar la escuela?"]},{icon:"📉",title:"¿Qué mide realmente el promedio de secundaria?",reflexion:"No es solo conocimiento académico. Mide:",items:["Disciplina y constancia","Apoyo familiar","Motivación intrínseca","Hábitos de estudio","Acumulación histórica de ventajas o desventajas"]},{icon:"♂️",title:"¿Por qué los hombres abandonan más si el sexo explica tan poco?",factores:["Expectativas laborales tempranas (presión por trabajar)","Presión económica familiar","Cultura escolar masculina","Dinámicas de género no medidas en el estudio"]},{icon:"🔮",title:"¿Qué pasa con el otro 91.1% de varianza?",variablesFaltantes:["Ingreso familiar","Trabajo juvenil","Clima escolar","Calidad docente","Salud mental","Violencia en el entorno","Expectativas familiares"]}];return p.jsx("section",{id:"sec-10",children:p.jsx("div",{className:"container",children:p.jsxs("div",{className:"glass-card",ref:o,children:[p.jsx("span",{className:"badge badge-purple",children:"Más Allá de los Datos"}),p.jsx("h2",{className:"section-title",children:"Preguntas que Quedan Abiertas"}),p.jsx("p",{className:"section-intro",children:"Un buen estudio no cierra puertas, las abre. El 91.1% de la varianza no explicada nos invita a seguir investigando. Estas son las preguntas que los autores dejan para futura investigación:"}),p.jsx("div",{className:"preguntas-list",children:i.map((s,l)=>p.jsxs("div",{className:"pregunta-item",ref:c=>t.current[l]=c,children:[p.jsx("div",{className:"pregunta-icon",children:s.icon}),p.jsxs("div",{className:"pregunta-content",children:[p.jsx("h3",{children:s.title}),s.hipotesis&&p.jsx("ul",{className:"hipotesis-list",children:s.hipotesis.map((c,d)=>p.jsx("li",{children:c},d))}),s.reflexion&&p.jsxs(p.Fragment,{children:[p.jsx("p",{className:"reflexion-text",children:s.reflexion}),p.jsx("ul",{className:"items-list",children:s.items.map((c,d)=>p.jsx("li",{children:c},d))})]}),s.factores&&p.jsx("ul",{className:"factores-list",children:s.factores.map((c,d)=>p.jsx("li",{children:c},d))}),s.variablesFaltantes&&p.jsxs(p.Fragment,{children:[p.jsx("p",{className:"variables-intro",children:"Variables que este estudio no midió pero que podrían explicar la deserción:"}),p.jsx("div",{className:"variables-grid",children:s.variablesFaltantes.map((c,d)=>p.jsx("span",{className:"variable-tag",children:c},d))})]})]})]},l))}),p.jsxs("div",{className:"honestidad-box",children:[p.jsx("h4",{children:"🎓 Honestidad Metodológica"}),p.jsx("p",{children:'Los autores son explícitos sobre las limitaciones: falta de profundidad cualitativa, ausencia de variables socioeconómicas, no medición de factores institucionales, muestra de conveniencia (una sola escuela), y el posible "efecto COVID" en la cohorte 2023.'}),p.jsx("p",{children:"Esta transparencia no debilita el estudio; lo fortalece. Reconocer lo que no sabemos es el primer paso para investigar mejor."})]})]})})})}function dA({trigger:o}){return Ve.useEffect(()=>{if(!o)return;const t=["#00d4ff","#7b2ff7","#ff4d6a","#00c864","#ffd700"];for(let i=0;i<60;i++){const s=document.createElement("div");s.className="confetti-piece",s.style.left=`${Math.random()*100}vw`,s.style.top="-10px",s.style.backgroundColor=t[Math.floor(Math.random()*t.length)],s.style.borderRadius=Math.random()>.5?"50%":"0",s.style.width=`${6+Math.random()*8}px`,s.style.height=`${6+Math.random()*8}px`,document.body.appendChild(s);const l=2e3+Math.random()*2e3;s.animate([{transform:"translateY(0) rotate(0deg)",opacity:1},{transform:`translateY(100vh) rotate(${360+Math.random()*720}deg)`,opacity:0}],{duration:l,easing:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"}),setTimeout(()=>s.remove(),l)}},[o]),null}function hA({showConfetti:o,onRestart:t,onShare:i}){const s=Ve.useRef(null),l=Ve.useRef([]),c=Ve.useRef(null);Ve.useEffect(()=>{const x=new IntersectionObserver(S=>{S.forEach(v=>{v.isIntersecting&&(v.target.classList.add("visible"),v.target===c.current&&l.current.forEach(E=>{E&&(E.style.width=E.dataset.width+"%")}))})},{threshold:.2});return s.current&&x.observe(s.current),c.current&&x.observe(c.current),()=>x.disconnect()},[]);const d=[{label:"Promedio de secundaria",value:"8.9%",width:89,color:"accent",desc:"Mejor predictor"},{label:"Tener computadora",value:"5.7%",width:57,color:"purple",desc:"Paradoja del capital digital"},{label:"Sexo",value:"3.1%",width:31,color:"red",desc:"Significativo pero débil"},{label:"Varianza NO explicada",value:"91.1%",width:91,color:"red",desc:"Factores no medidos"}],m=[{num:"1",text:'"Las variables seleccionadas [...] permiten únicamente un análisis somero de la situación."'},{num:"2",text:'"El promedio obtenido en el nivel educativo previo (Secundaria) parece tener un amplio poder explicativo."'},{num:"3",text:'"El hecho de tener computadora en casa resulta ser la variable de mayor impacto [...] respecto a aquellas relacionadas con elementos tecnológicos."'},{num:"4",text:'"Se reafirman las tesis relacionadas con la baja influencia del sexo de los jóvenes."'}],g=[{para:"Para Futura Investigación",items:["Incorporar variables socioeconómicas (ingreso, trabajo juvenil)","Analizar el clima escolar y prácticas docentes","Realizar estudios cualitativos sobre razones del abandono","Explorar dinámicas sociales del plantel"]},{para:"Para la Práctica",items:["Robustecer recopilación de información en control escolar","Implementar acciones preventivas precisas en primer semestre","Revisar programas de dotación tecnológica","Desarrollar mecanismos de acompañamiento integral"]}],h=()=>{i('🎓 Completé "La Paradoja Digital" y aprendí que tener computadora predice deserción escolar. Un estudio que cuestiona nuestras intuiciones sobre tecnología y educación. ¿Sabías que el 91.1% de los factores de deserción aún son desconocidos?')};return p.jsxs("section",{id:"sec-9",children:[p.jsx(dA,{trigger:o}),p.jsxs("div",{className:"container",children:[p.jsxs("div",{className:"glass-card",ref:s,children:[p.jsx("span",{className:"badge badge-blue",children:"Conclusiones"}),p.jsx("h2",{className:"section-title",children:"Lo que Nos Enseña Este Estudio"}),p.jsxs("div",{className:"conclusion-principal",children:[p.jsx("blockquote",{className:"main-conclusion",children:'"Se concluye la necesidad de incrementar la comprensión del problema con el análisis del clima escolar, así como políticas educativas, con el fin de disminuir la incidencia de esta problemática."'}),p.jsx("cite",{children:"— Jiménez-Moreno & Feria-Juárez (2026)"})]}),p.jsxs("div",{className:"poder-predictivo",children:[p.jsx("h3",{children:"📊 Poder Predictivo de las Variables"}),p.jsx("p",{className:"chart-intro",children:"El estudio logra identificar variables predictivas, pero estas explican menos del 9% del fenómeno:"}),p.jsx("div",{className:"bar-chart",ref:c,children:d.map((x,S)=>p.jsxs("div",{className:"bar-item",children:[p.jsxs("div",{className:"bar-info",children:[p.jsx("div",{className:"bar-label-main",children:x.label}),p.jsx("div",{className:"bar-desc",children:x.desc})]}),p.jsx("div",{className:"bar-value",children:x.value}),p.jsx("div",{className:"bar-track",children:p.jsx("div",{className:`bar-fill ${x.color}`,"data-width":x.width,ref:v=>l.current[S]=v,style:{width:"0%"}})})]},S))})]}),p.jsxs("div",{className:"conclusiones-autores",children:[p.jsx("h3",{children:"📝 Conclusiones Textuales de los Autores"}),p.jsx("div",{className:"conclusiones-list",children:m.map(x=>p.jsxs("div",{className:"conclusion-item",children:[p.jsx("span",{className:"conclusion-num",children:x.num}),p.jsx("p",{children:x.text})]},x.num))})]}),p.jsxs("div",{className:"recomendaciones-section",children:[p.jsx("h3",{children:"💡 Recomendaciones"}),p.jsx("div",{className:"recomendaciones-grid",children:g.map((x,S)=>p.jsxs("div",{className:"recomendacion-card",children:[p.jsx("h4",{children:x.para}),p.jsx("ul",{children:x.items.map((v,E)=>p.jsx("li",{children:v},E))})]},S))})]})]}),p.jsxs("div",{className:"final-cta",children:[p.jsx("h2",{children:"La tecnología no es la respuesta mágica"}),p.jsx("p",{children:"Este estudio nos invita a repensar las políticas educativas. El capital digital sin contexto, sin acompañamiento y sin comprender las dinámicas reales de los estudiantes, puede no ser suficiente. La investigación honesta nos muestra que hay más preguntas que respuestas, y eso es un buen punto de partida."}),p.jsxs("div",{className:"share-grid",children:[p.jsx("button",{className:"share-btn",onClick:h,children:"📤 Compartir"}),p.jsx("button",{className:"share-btn",onClick:()=>window.open("https://doi.org/10.21555/rpp.3411","_blank"),children:"📄 Leer Artículo Original"}),p.jsx("button",{className:"share-btn",onClick:t,children:"🔄 Repetir Experiencia"})]})]})]})]})}function pA(){const[o,t]=Ve.useState(0),[i,s]=Ve.useState(0);return Ve.useEffect(()=>{const c=()=>{const d=window.scrollY,m=document.documentElement.scrollHeight-window.innerHeight,g=m>0?d/m*100:0;t(g),document.querySelectorAll("section").forEach((x,S)=>{const v=x.getBoundingClientRect();v.top<window.innerHeight*.5&&v.bottom>window.innerHeight*.5&&s(S)})};return window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]),{progress:o,activeSection:i,scrollToSection:c=>{const d=document.getElementById(`sec-${c}`);d&&d.scrollIntoView({behavior:"smooth"})}}}function mA(){const[o,t]=Ve.useState(new Set),i=Ve.useCallback(l=>{t(c=>{if(c.has(l))return c;const d=new Set(c);d.add(l);const m=document.createElement("div");return m.style.cssText=`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1001;
        padding: 15px 30px;
        background: rgba(10, 10, 15, 0.95);
        border: 1px solid var(--accent);
        border-radius: 50px;
        color: var(--accent);
        font-weight: 700;
        font-size: 1.1rem;
        animation: fadeInOut 2s ease forwards;
      `,m.textContent="🏆 ¡Logro desbloqueado!",document.body.appendChild(m),setTimeout(()=>m.remove(),2e3),d})},[]),s=Ve.useCallback(l=>o.has(l),[o]);return{unlockedAchievements:o,unlockAchievement:i,isUnlocked:s}}function gA(){const[o,t]=Ve.useState(!0),[i,s]=Ve.useState(!1),{progress:l,activeSection:c,scrollToSection:d}=pA(),{unlockedAchievements:m,unlockAchievement:g}=mA(),[h,x]=Ve.useState(0),[S,v]=Ve.useState(new Set),E=11,T=Ve.useCallback(()=>{t(!1),setTimeout(()=>g("ach-explore"),2e3)},[g]);Ve.useEffect(()=>{if(!o){const U=window.scrollY;U>1e3&&g("ach-discover"),U>5e3&&g("ach-analyst")}},[l,o,g]);const w=Ve.useCallback((U,j)=>{v(H=>{if(H.has(U))return H;const z=new Set(H);return z.add(U),j&&x(A=>A+1),z.size===5&&setTimeout(()=>{(j?h+1:h)>=3&&(g("ach-expert"),s(!0))},500),z})},[h,g]),y=Ve.useCallback(U=>S.has(U),[S]),M=Ve.useCallback(()=>{window.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>window.location.reload(),500)},[]),N=Ve.useCallback(U=>{navigator.share?navigator.share({text:U}):navigator.clipboard.writeText(U).then(()=>{alert("¡Texto copiado al portapapeles!")})},[]),F=Ve.useCallback(()=>{d(1)},[d]);return p.jsxs(p.Fragment,{children:[p.jsx(eA,{onStart:T,isVisible:o}),!o&&p.jsxs(p.Fragment,{children:[p.jsx(Z1,{}),p.jsx(K1,{progress:l}),p.jsx(Q1,{activeSection:c,totalSections:E,onDotClick:d}),p.jsx(J1,{score:h*20,isVisible:!0}),p.jsx($1,{unlockedAchievements:m}),p.jsxs("div",{className:"content",children:[p.jsx(tA,{onScrollDown:F}),p.jsx(nA,{}),p.jsx(iA,{}),p.jsx(aA,{}),p.jsx(sA,{}),p.jsx(rA,{}),p.jsx(oA,{}),p.jsx(lA,{}),p.jsx(uA,{onAnswer:w,isAnswered:y}),p.jsx(fA,{}),p.jsx(hA,{showConfetti:i,onRestart:M,onShare:N})]})]})]})}LS.createRoot(document.getElementById("root")).render(p.jsx(TS.StrictMode,{children:p.jsx(gA,{})}));
