(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function z_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lm={exports:{}},Gl={},Dm={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo=Symbol.for("react.element"),B_=Symbol.for("react.portal"),V_=Symbol.for("react.fragment"),H_=Symbol.for("react.strict_mode"),G_=Symbol.for("react.profiler"),W_=Symbol.for("react.provider"),X_=Symbol.for("react.context"),j_=Symbol.for("react.forward_ref"),Y_=Symbol.for("react.suspense"),q_=Symbol.for("react.memo"),$_=Symbol.for("react.lazy"),fd=Symbol.iterator;function K_(t){return t===null||typeof t!="object"?null:(t=fd&&t[fd]||t["@@iterator"],typeof t=="function"?t:null)}var Im={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nm=Object.assign,Um={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Im}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Om(){}Om.prototype=Vs.prototype;function qf(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Im}var $f=qf.prototype=new Om;$f.constructor=qf;Nm($f,Vs.prototype);$f.isPureReactComponent=!0;var hd=Array.isArray,Fm=Object.prototype.hasOwnProperty,Kf={current:null},km={key:!0,ref:!0,__self:!0,__source:!0};function zm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Fm.call(e,i)&&!km.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Yo,type:t,key:s,ref:o,props:r,_owner:Kf.current}}function Z_(t,e){return{$$typeof:Yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yo}function J_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dd=/\/+/g;function pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?J_(""+t.key):e.toString(36)}function ja(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Yo:case B_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+pu(o,0):i,hd(r)?(n="",t!=null&&(n=t.replace(dd,"$&/")+"/"),ja(r,e,n,"",function(u){return u})):r!=null&&(Zf(r)&&(r=Z_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(dd,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+pu(s,a);o+=ja(s,e,n,l,r)}else if(l=K_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+pu(s,a++),o+=ja(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ia(t,e,n){if(t==null)return t;var i=[],r=0;return ja(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Q_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Ya={transition:null},ev={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Ya,ReactCurrentOwner:Kf};function Bm(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:ia,forEach:function(t,e,n){ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ia(t,function(){e++}),e},toArray:function(t){return ia(t,function(e){return e})||[]},only:function(t){if(!Zf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Vs;Xe.Fragment=V_;Xe.Profiler=G_;Xe.PureComponent=qf;Xe.StrictMode=H_;Xe.Suspense=Y_;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev;Xe.act=Bm;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Nm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Fm.call(e,l)&&!km.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Yo,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:X_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:W_,_context:t},t.Consumer=t};Xe.createElement=zm;Xe.createFactory=function(t){var e=zm.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:j_,render:t}};Xe.isValidElement=Zf;Xe.lazy=function(t){return{$$typeof:$_,_payload:{_status:-1,_result:t},_init:Q_}};Xe.memo=function(t,e){return{$$typeof:q_,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Ya.transition;Ya.transition={};try{t()}finally{Ya.transition=e}};Xe.unstable_act=Bm;Xe.useCallback=function(t,e){return qt.current.useCallback(t,e)};Xe.useContext=function(t){return qt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return qt.current.useEffect(t,e)};Xe.useId=function(){return qt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return qt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Xe.useRef=function(t){return qt.current.useRef(t)};Xe.useState=function(t){return qt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return qt.current.useTransition()};Xe.version="18.3.1";Dm.exports=Xe;var lt=Dm.exports;const tv=z_(lt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv=lt,iv=Symbol.for("react.element"),rv=Symbol.for("react.fragment"),sv=Object.prototype.hasOwnProperty,ov=nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,av={key:!0,ref:!0,__self:!0,__source:!0};function Vm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)sv.call(e,i)&&!av.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:iv,type:t,key:s,ref:o,props:r,_owner:ov.current}}Gl.Fragment=rv;Gl.jsx=Vm;Gl.jsxs=Vm;Lm.exports=Gl;var _t=Lm.exports,Hm={exports:{}},mn={},Gm={exports:{}},Wm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,J){var se=L.length;L.push(J);e:for(;0<se;){var pe=se-1>>>1,we=L[pe];if(0<r(we,J))L[pe]=J,L[se]=we,se=pe;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var J=L[0],se=L.pop();if(se!==J){L[0]=se;e:for(var pe=0,we=L.length,Be=we>>>1;pe<Be;){var O=2*(pe+1)-1,N=L[O],b=O+1,w=L[b];if(0>r(N,se))b<we&&0>r(w,N)?(L[pe]=w,L[b]=se,pe=b):(L[pe]=N,L[O]=se,pe=O);else if(b<we&&0>r(w,se))L[pe]=w,L[b]=se,pe=b;else break e}}return J}function r(L,J){var se=L.sortIndex-J.sortIndex;return se!==0?se:L.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,c=null,h=3,p=!1,_=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var J=n(u);J!==null;){if(J.callback===null)i(u);else if(J.startTime<=L)i(u),J.sortIndex=J.expirationTime,e(l,J);else break;J=n(u)}}function x(L){if(y=!1,m(L),!_)if(n(l)!==null)_=!0,ee(U);else{var J=n(u);J!==null&&$(x,J.startTime-L)}}function U(L,J){_=!1,y&&(y=!1,d(I),I=-1),p=!0;var se=h;try{for(m(J),c=n(l);c!==null&&(!(c.expirationTime>J)||L&&!F());){var pe=c.callback;if(typeof pe=="function"){c.callback=null,h=c.priorityLevel;var we=pe(c.expirationTime<=J);J=t.unstable_now(),typeof we=="function"?c.callback=we:c===n(l)&&i(l),m(J)}else i(l);c=n(l)}if(c!==null)var Be=!0;else{var O=n(u);O!==null&&$(x,O.startTime-J),Be=!1}return Be}finally{c=null,h=se,p=!1}}var A=!1,C=null,I=-1,E=5,M=-1;function F(){return!(t.unstable_now()-M<E)}function G(){if(C!==null){var L=t.unstable_now();M=L;var J=!0;try{J=C(!0,L)}finally{J?j():(A=!1,C=null)}}else A=!1}var j;if(typeof v=="function")j=function(){v(G)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,re=Q.port2;Q.port1.onmessage=G,j=function(){re.postMessage(null)}}else j=function(){g(G,0)};function ee(L){C=L,A||(A=!0,j())}function $(L,J){I=g(function(){L(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,ee(U))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var J=3;break;default:J=h}var se=h;h=J;try{return L()}finally{h=se}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,J){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var se=h;h=L;try{return J()}finally{h=se}},t.unstable_scheduleCallback=function(L,J,se){var pe=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?pe+se:pe):se=pe,L){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=se+we,L={id:f++,callback:J,priorityLevel:L,startTime:se,expirationTime:we,sortIndex:-1},se>pe?(L.sortIndex=se,e(u,L),n(l)===null&&L===n(u)&&(y?(d(I),I=-1):y=!0,$(x,se-pe))):(L.sortIndex=we,e(l,L),_||p||(_=!0,ee(U))),L},t.unstable_shouldYield=F,t.unstable_wrapCallback=function(L){var J=h;return function(){var se=h;h=J;try{return L.apply(this,arguments)}finally{h=se}}}})(Wm);Gm.exports=Wm;var lv=Gm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv=lt,pn=lv;function ge(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xm=new Set,Ao={};function Ur(t,e){Ps(t,e),Ps(t+"Capture",e)}function Ps(t,e){for(Ao[t]=e,t=0;t<e.length;t++)Xm.add(e[t])}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=Object.prototype.hasOwnProperty,cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pd={},md={};function fv(t){return vc.call(md,t)?!0:vc.call(pd,t)?!1:cv.test(t)?md[t]=!0:(pd[t]=!0,!1)}function hv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dv(t,e,n,i){if(e===null||typeof e>"u"||hv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jf=/[\-:]([a-z])/g;function Qf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jf,Qf);Ft[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jf,Qf);Ft[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jf,Qf);Ft[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function eh(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dv(e,n,r,i)&&(n=null),i||r===null?fv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mi=uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ra=Symbol.for("react.element"),is=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),th=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),jm=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),nh=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),Sc=Symbol.for("react.suspense_list"),ih=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),qm=Symbol.for("react.offscreen"),gd=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=gd&&t[gd]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,mu;function ao(t){if(mu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mu=e&&e[1]||""}return`
`+mu+t}var gu=!1;function _u(t,e){if(!t||gu)return"";gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function pv(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=_u(t.type,!1),t;case 11:return t=_u(t.type.render,!1),t;case 1:return t=_u(t.type,!0),t;default:return""}}function Mc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case is:return"Portal";case yc:return"Profiler";case th:return"StrictMode";case xc:return"Suspense";case Sc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ym:return(t.displayName||"Context")+".Consumer";case jm:return(t._context.displayName||"Context")+".Provider";case nh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ih:return e=t.displayName||null,e!==null?e:Mc(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return Mc(t(e))}catch{}}return null}function mv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mc(e);case 8:return e===th?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $m(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gv(t){var e=$m(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sa(t){t._valueTracker||(t._valueTracker=gv(t))}function Km(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=$m(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ec(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function _d(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zm(t,e){e=e.checked,e!=null&&eh(t,"checked",e,!1)}function Tc(t,e){Zm(t,e);var n=Ki(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wc(t,e.type,n):e.hasOwnProperty("defaultValue")&&wc(t,e.type,Ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wc(t,e,n){(e!=="number"||hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ki(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ac(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ge(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ge(92));if(lo(n)){if(1<n.length)throw Error(ge(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ki(n)}}function Jm(t,e){var n=Ki(e.value),i=Ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function xd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Qm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Qm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oa,eg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oa=oa||document.createElement("div"),oa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_v=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){_v.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function tg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=tg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var vv=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rc(t,e){if(e){if(vv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ge(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ge(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ge(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ge(62))}}function Pc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bc=null;function rh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Lc=null,ys=null,xs=null;function Sd(t){if(t=Ko(t)){if(typeof Lc!="function")throw Error(ge(280));var e=t.stateNode;e&&(e=ql(e),Lc(t.stateNode,t.type,e))}}function ig(t){ys?xs?xs.push(t):xs=[t]:ys=t}function rg(){if(ys){var t=ys,e=xs;if(xs=ys=null,Sd(t),e)for(t=0;t<e.length;t++)Sd(e[t])}}function sg(t,e){return t(e)}function og(){}var vu=!1;function ag(t,e,n){if(vu)return t(e,n);vu=!0;try{return sg(t,e,n)}finally{vu=!1,(ys!==null||xs!==null)&&(og(),rg())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var i=ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ge(231,e,typeof n));return n}var Dc=!1;if(gi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Dc=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Dc=!1}function yv(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var po=!1,dl=null,pl=!1,Ic=null,xv={onError:function(t){po=!0,dl=t}};function Sv(t,e,n,i,r,s,o,a,l){po=!1,dl=null,yv.apply(xv,arguments)}function Mv(t,e,n,i,r,s,o,a,l){if(Sv.apply(this,arguments),po){if(po){var u=dl;po=!1,dl=null}else throw Error(ge(198));pl||(pl=!0,Ic=u)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Md(t){if(Or(t)!==t)throw Error(ge(188))}function Ev(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(ge(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Md(r),t;if(s===i)return Md(r),e;s=s.sibling}throw Error(ge(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ge(189))}}if(n.alternate!==i)throw Error(ge(190))}if(n.tag!==3)throw Error(ge(188));return n.stateNode.current===n?t:e}function ug(t){return t=Ev(t),t!==null?cg(t):null}function cg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=cg(t);if(e!==null)return e;t=t.sibling}return null}var fg=pn.unstable_scheduleCallback,Ed=pn.unstable_cancelCallback,Tv=pn.unstable_shouldYield,wv=pn.unstable_requestPaint,vt=pn.unstable_now,Av=pn.unstable_getCurrentPriorityLevel,sh=pn.unstable_ImmediatePriority,hg=pn.unstable_UserBlockingPriority,ml=pn.unstable_NormalPriority,Cv=pn.unstable_LowPriority,dg=pn.unstable_IdlePriority,Wl=null,$n=null;function Rv(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:Lv,Pv=Math.log,bv=Math.LN2;function Lv(t){return t>>>=0,t===0?32:31-(Pv(t)/bv|0)|0}var aa=64,la=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function gl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=uo(a):(s&=o,s!==0&&(i=uo(s)))}else o=n&~r,o!==0?i=uo(o):s!==0&&(i=uo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function Dv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Iv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Dv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Nc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pg(){var t=aa;return aa<<=1,!(aa&4194240)&&(aa=64),t}function yu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function Nv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function mg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var gg,ah,_g,vg,yg,Uc=!1,ua=[],Bi=null,Vi=null,Hi=null,Po=new Map,bo=new Map,Ui=[],Uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Td(t,e){switch(t){case"focusin":case"focusout":Bi=null;break;case"dragenter":case"dragleave":Vi=null;break;case"mouseover":case"mouseout":Hi=null;break;case"pointerover":case"pointerout":Po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(e.pointerId)}}function $s(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ko(e),e!==null&&ah(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ov(t,e,n,i,r){switch(e){case"focusin":return Bi=$s(Bi,t,e,n,i,r),!0;case"dragenter":return Vi=$s(Vi,t,e,n,i,r),!0;case"mouseover":return Hi=$s(Hi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Po.set(s,$s(Po.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,bo.set(s,$s(bo.get(s)||null,t,e,n,i,r)),!0}return!1}function xg(t){var e=_r(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=lg(n),e!==null){t.blockedOn=e,yg(t.priority,function(){_g(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Oc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);bc=i,n.target.dispatchEvent(i),bc=null}else return e=Ko(n),e!==null&&ah(e),t.blockedOn=n,!1;e.shift()}return!0}function wd(t,e,n){qa(t)&&n.delete(e)}function Fv(){Uc=!1,Bi!==null&&qa(Bi)&&(Bi=null),Vi!==null&&qa(Vi)&&(Vi=null),Hi!==null&&qa(Hi)&&(Hi=null),Po.forEach(wd),bo.forEach(wd)}function Ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Uc||(Uc=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,Fv)))}function Lo(t){function e(r){return Ks(r,t)}if(0<ua.length){Ks(ua[0],t);for(var n=1;n<ua.length;n++){var i=ua[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Bi!==null&&Ks(Bi,t),Vi!==null&&Ks(Vi,t),Hi!==null&&Ks(Hi,t),Po.forEach(e),bo.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)xg(n),n.blockedOn===null&&Ui.shift()}var Ss=Mi.ReactCurrentBatchConfig,_l=!0;function kv(t,e,n,i){var r=et,s=Ss.transition;Ss.transition=null;try{et=1,lh(t,e,n,i)}finally{et=r,Ss.transition=s}}function zv(t,e,n,i){var r=et,s=Ss.transition;Ss.transition=null;try{et=4,lh(t,e,n,i)}finally{et=r,Ss.transition=s}}function lh(t,e,n,i){if(_l){var r=Oc(t,e,n,i);if(r===null)Pu(t,e,i,vl,n),Td(t,i);else if(Ov(r,t,e,n,i))i.stopPropagation();else if(Td(t,i),e&4&&-1<Uv.indexOf(t)){for(;r!==null;){var s=Ko(r);if(s!==null&&gg(s),s=Oc(t,e,n,i),s===null&&Pu(t,e,i,vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Pu(t,e,i,null,n)}}var vl=null;function Oc(t,e,n,i){if(vl=null,t=rh(i),t=_r(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function Sg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Av()){case sh:return 1;case hg:return 4;case ml:case Cv:return 16;case dg:return 536870912;default:return 16}default:return 16}}var ki=null,uh=null,$a=null;function Mg(){if($a)return $a;var t,e=uh,n=e.length,i,r="value"in ki?ki.value:ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return $a=r.slice(t,1<i?1-i:void 0)}function Ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ca(){return!0}function Ad(){return!1}function gn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ca:Ad,this.isPropagationStopped=Ad,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ch=gn(Hs),$o=ht({},Hs,{view:0,detail:0}),Bv=gn($o),xu,Su,Zs,Xl=ht({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(xu=t.screenX-Zs.screenX,Su=t.screenY-Zs.screenY):Su=xu=0,Zs=t),xu)},movementY:function(t){return"movementY"in t?t.movementY:Su}}),Cd=gn(Xl),Vv=ht({},Xl,{dataTransfer:0}),Hv=gn(Vv),Gv=ht({},$o,{relatedTarget:0}),Mu=gn(Gv),Wv=ht({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=gn(Wv),jv=ht({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yv=gn(jv),qv=ht({},Hs,{data:0}),Rd=gn(qv),$v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Zv[t])?!!e[t]:!1}function fh(){return Jv}var Qv=ht({},$o,{key:function(t){if(t.key){var e=$v[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fh,charCode:function(t){return t.type==="keypress"?Ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ey=gn(Qv),ty=ht({},Xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pd=gn(ty),ny=ht({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fh}),iy=gn(ny),ry=ht({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=gn(ry),oy=ht({},Xl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ay=gn(oy),ly=[9,13,27,32],hh=gi&&"CompositionEvent"in window,mo=null;gi&&"documentMode"in document&&(mo=document.documentMode);var uy=gi&&"TextEvent"in window&&!mo,Eg=gi&&(!hh||mo&&8<mo&&11>=mo),bd=" ",Ld=!1;function Tg(t,e){switch(t){case"keyup":return ly.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function cy(t,e){switch(t){case"compositionend":return wg(e);case"keypress":return e.which!==32?null:(Ld=!0,bd);case"textInput":return t=e.data,t===bd&&Ld?null:t;default:return null}}function fy(t,e){if(ss)return t==="compositionend"||!hh&&Tg(t,e)?(t=Mg(),$a=uh=ki=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Eg&&e.locale!=="ko"?null:e.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hy[t.type]:e==="textarea"}function Ag(t,e,n,i){ig(i),e=yl(e,"onChange"),0<e.length&&(n=new ch("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var go=null,Do=null;function dy(t){Fg(t,0)}function jl(t){var e=ls(t);if(Km(e))return t}function py(t,e){if(t==="change")return e}var Cg=!1;if(gi){var Eu;if(gi){var Tu="oninput"in document;if(!Tu){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),Tu=typeof Id.oninput=="function"}Eu=Tu}else Eu=!1;Cg=Eu&&(!document.documentMode||9<document.documentMode)}function Nd(){go&&(go.detachEvent("onpropertychange",Rg),Do=go=null)}function Rg(t){if(t.propertyName==="value"&&jl(Do)){var e=[];Ag(e,Do,t,rh(t)),ag(dy,e)}}function my(t,e,n){t==="focusin"?(Nd(),go=e,Do=n,go.attachEvent("onpropertychange",Rg)):t==="focusout"&&Nd()}function gy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Do)}function _y(t,e){if(t==="click")return jl(e)}function vy(t,e){if(t==="input"||t==="change")return jl(e)}function yy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:yy;function Io(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vc.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function Ud(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Od(t,e){var n=Ud(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ud(n)}}function Pg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Pg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function bg(){for(var t=window,e=hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hl(t.document)}return e}function dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xy(t){var e=bg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Pg(n.ownerDocument.documentElement,n)){if(i!==null&&dh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Od(n,s);var o=Od(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Sy=gi&&"documentMode"in document&&11>=document.documentMode,os=null,Fc=null,_o=null,kc=!1;function Fd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kc||os==null||os!==hl(i)||(i=os,"selectionStart"in i&&dh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),_o&&Io(_o,i)||(_o=i,i=yl(Fc,"onSelect"),0<i.length&&(e=new ch("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:fa("Animation","AnimationEnd"),animationiteration:fa("Animation","AnimationIteration"),animationstart:fa("Animation","AnimationStart"),transitionend:fa("Transition","TransitionEnd")},wu={},Lg={};gi&&(Lg=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function Yl(t){if(wu[t])return wu[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Lg)return wu[t]=e[n];return t}var Dg=Yl("animationend"),Ig=Yl("animationiteration"),Ng=Yl("animationstart"),Ug=Yl("transitionend"),Og=new Map,kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,e){Og.set(t,e),Ur(e,[t])}for(var Au=0;Au<kd.length;Au++){var Cu=kd[Au],My=Cu.toLowerCase(),Ey=Cu[0].toUpperCase()+Cu.slice(1);Qi(My,"on"+Ey)}Qi(Dg,"onAnimationEnd");Qi(Ig,"onAnimationIteration");Qi(Ng,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(Ug,"onTransitionEnd");Ps("onMouseEnter",["mouseout","mouseover"]);Ps("onMouseLeave",["mouseout","mouseover"]);Ps("onPointerEnter",["pointerout","pointerover"]);Ps("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ty=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function zd(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Mv(i,e,void 0,t),t.currentTarget=null}function Fg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;zd(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;zd(r,a,u),s=l}}}if(pl)throw t=Ic,pl=!1,Ic=null,t}function it(t,e){var n=e[Gc];n===void 0&&(n=e[Gc]=new Set);var i=t+"__bubble";n.has(i)||(kg(e,t,2,!1),n.add(i))}function Ru(t,e,n){var i=0;e&&(i|=4),kg(n,t,i,e)}var ha="_reactListening"+Math.random().toString(36).slice(2);function No(t){if(!t[ha]){t[ha]=!0,Xm.forEach(function(n){n!=="selectionchange"&&(Ty.has(n)||Ru(n,!1,t),Ru(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ha]||(e[ha]=!0,Ru("selectionchange",!1,e))}}function kg(t,e,n,i){switch(Sg(e)){case 1:var r=kv;break;case 4:r=zv;break;default:r=lh}n=r.bind(null,e,n,t),r=void 0,!Dc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Pu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=_r(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}ag(function(){var u=s,f=rh(n),c=[];e:{var h=Og.get(t);if(h!==void 0){var p=ch,_=t;switch(t){case"keypress":if(Ka(n)===0)break e;case"keydown":case"keyup":p=ey;break;case"focusin":_="focus",p=Mu;break;case"focusout":_="blur",p=Mu;break;case"beforeblur":case"afterblur":p=Mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Hv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=iy;break;case Dg:case Ig:case Ng:p=Xv;break;case Ug:p=sy;break;case"scroll":p=Bv;break;case"wheel":p=ay;break;case"copy":case"cut":case"paste":p=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Pd}var y=(e&4)!==0,g=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var v=u,m;v!==null;){m=v;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,d!==null&&(x=Ro(v,d),x!=null&&y.push(Uo(v,x,m)))),g)break;v=v.return}0<y.length&&(h=new p(h,_,null,n,f),c.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==bc&&(_=n.relatedTarget||n.fromElement)&&(_r(_)||_[_i]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?_r(_):null,_!==null&&(g=Or(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=Cd,x="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Pd,x="onPointerLeave",d="onPointerEnter",v="pointer"),g=p==null?h:ls(p),m=_==null?h:ls(_),h=new y(x,v+"leave",p,n,f),h.target=g,h.relatedTarget=m,x=null,_r(f)===u&&(y=new y(d,v+"enter",_,n,f),y.target=m,y.relatedTarget=g,x=y),g=x,p&&_)t:{for(y=p,d=_,v=0,m=y;m;m=zr(m))v++;for(m=0,x=d;x;x=zr(x))m++;for(;0<v-m;)y=zr(y),v--;for(;0<m-v;)d=zr(d),m--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=zr(y),d=zr(d)}y=null}else y=null;p!==null&&Bd(c,h,p,y,!1),_!==null&&g!==null&&Bd(c,g,_,y,!0)}}e:{if(h=u?ls(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var U=py;else if(Dd(h))if(Cg)U=vy;else{U=gy;var A=my}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(U=_y);if(U&&(U=U(t,u))){Ag(c,U,n,f);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&wc(h,"number",h.value)}switch(A=u?ls(u):window,t){case"focusin":(Dd(A)||A.contentEditable==="true")&&(os=A,Fc=u,_o=null);break;case"focusout":_o=Fc=os=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,Fd(c,n,f);break;case"selectionchange":if(Sy)break;case"keydown":case"keyup":Fd(c,n,f)}var C;if(hh)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ss?Tg(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Eg&&n.locale!=="ko"&&(ss||I!=="onCompositionStart"?I==="onCompositionEnd"&&ss&&(C=Mg()):(ki=f,uh="value"in ki?ki.value:ki.textContent,ss=!0)),A=yl(u,I),0<A.length&&(I=new Rd(I,t,null,n,f),c.push({event:I,listeners:A}),C?I.data=C:(C=wg(n),C!==null&&(I.data=C)))),(C=uy?cy(t,n):fy(t,n))&&(u=yl(u,"onBeforeInput"),0<u.length&&(f=new Rd("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=C))}Fg(c,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ro(t,n),s!=null&&i.unshift(Uo(t,s,r)),s=Ro(t,e),s!=null&&i.push(Uo(t,s,r))),t=t.return}return i}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Bd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ro(n,s),l!=null&&o.unshift(Uo(n,l,a))):r||(l=Ro(n,s),l!=null&&o.push(Uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wy=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function Vd(t){return(typeof t=="string"?t:""+t).replace(wy,`
`).replace(Ay,"")}function da(t,e,n){if(e=Vd(e),Vd(t)!==e&&n)throw Error(ge(425))}function xl(){}var zc=null,Bc=null;function Vc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hc=typeof setTimeout=="function"?setTimeout:void 0,Cy=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,Ry=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(t){return Hd.resolve(null).then(t).catch(Py)}:Hc;function Py(t){setTimeout(function(){throw t})}function bu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Lo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Lo(e)}function Gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Gs,Oo="__reactProps$"+Gs,_i="__reactContainer$"+Gs,Gc="__reactEvents$"+Gs,by="__reactListeners$"+Gs,Ly="__reactHandles$"+Gs;function _r(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_i]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Gd(t);t!==null;){if(n=t[Yn])return n;t=Gd(t)}return e}t=n,n=t.parentNode}return null}function Ko(t){return t=t[Yn]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ge(33))}function ql(t){return t[Oo]||null}var Wc=[],us=-1;function er(t){return{current:t}}function st(t){0>us||(t.current=Wc[us],Wc[us]=null,us--)}function nt(t,e){us++,Wc[us]=t.current,t.current=e}var Zi={},Wt=er(Zi),tn=er(!1),Ar=Zi;function bs(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function Sl(){st(tn),st(Wt)}function Wd(t,e,n){if(Wt.current!==Zi)throw Error(ge(168));nt(Wt,e),nt(tn,n)}function zg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ge(108,mv(t)||"Unknown",r));return ht({},n,i)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Ar=Wt.current,nt(Wt,t),nt(tn,tn.current),!0}function Xd(t,e,n){var i=t.stateNode;if(!i)throw Error(ge(169));n?(t=zg(t,e,Ar),i.__reactInternalMemoizedMergedChildContext=t,st(tn),st(Wt),nt(Wt,t)):st(tn),nt(tn,n)}var ui=null,$l=!1,Lu=!1;function Bg(t){ui===null?ui=[t]:ui.push(t)}function Dy(t){$l=!0,Bg(t)}function tr(){if(!Lu&&ui!==null){Lu=!0;var t=0,e=et;try{var n=ui;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ui=null,$l=!1}catch(r){throw ui!==null&&(ui=ui.slice(t+1)),fg(sh,tr),r}finally{et=e,Lu=!1}}return null}var cs=[],fs=0,El=null,Tl=0,yn=[],xn=0,Cr=null,fi=1,hi="";function hr(t,e){cs[fs++]=Tl,cs[fs++]=El,El=t,Tl=e}function Vg(t,e,n){yn[xn++]=fi,yn[xn++]=hi,yn[xn++]=Cr,Cr=t;var i=fi;t=hi;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,fi=1<<32-Bn(e)+r|n<<r|i,hi=s+t}else fi=1<<s|n<<r|i,hi=t}function ph(t){t.return!==null&&(hr(t,1),Vg(t,1,0))}function mh(t){for(;t===El;)El=cs[--fs],cs[fs]=null,Tl=cs[--fs],cs[fs]=null;for(;t===Cr;)Cr=yn[--xn],yn[xn]=null,hi=yn[--xn],yn[xn]=null,fi=yn[--xn],yn[xn]=null}var dn=null,hn=null,ot=!1,On=null;function Hg(t,e){var n=Mn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function jd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,hn=Gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Cr!==null?{id:fi,overflow:hi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Mn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,hn=null,!0):!1;default:return!1}}function Xc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jc(t){if(ot){var e=hn;if(e){var n=e;if(!jd(t,e)){if(Xc(t))throw Error(ge(418));e=Gi(n.nextSibling);var i=dn;e&&jd(t,e)?Hg(i,n):(t.flags=t.flags&-4097|2,ot=!1,dn=t)}}else{if(Xc(t))throw Error(ge(418));t.flags=t.flags&-4097|2,ot=!1,dn=t}}}function Yd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function pa(t){if(t!==dn)return!1;if(!ot)return Yd(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vc(t.type,t.memoizedProps)),e&&(e=hn)){if(Xc(t))throw Gg(),Error(ge(418));for(;e;)Hg(t,e),e=Gi(e.nextSibling)}if(Yd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ge(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=dn?Gi(t.stateNode.nextSibling):null;return!0}function Gg(){for(var t=hn;t;)t=Gi(t.nextSibling)}function Ls(){hn=dn=null,ot=!1}function gh(t){On===null?On=[t]:On.push(t)}var Iy=Mi.ReactCurrentBatchConfig;function Js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ge(309));var i=n.stateNode}if(!i)throw Error(ge(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ge(284));if(!n._owner)throw Error(ge(290,t))}return t}function ma(t,e){throw t=Object.prototype.toString.call(e),Error(ge(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qd(t){var e=t._init;return e(t._payload)}function Wg(t){function e(d,v){if(t){var m=d.deletions;m===null?(d.deletions=[v],d.flags|=16):m.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Yi(d,v),d.index=0,d.sibling=null,d}function s(d,v,m){return d.index=m,t?(m=d.alternate,m!==null?(m=m.index,m<v?(d.flags|=2,v):m):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,m,x){return v===null||v.tag!==6?(v=ku(m,d.mode,x),v.return=d,v):(v=r(v,m),v.return=d,v)}function l(d,v,m,x){var U=m.type;return U===rs?f(d,v,m.props.children,x,m.key):v!==null&&(v.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Di&&qd(U)===v.type)?(x=r(v,m.props),x.ref=Js(d,v,m),x.return=d,x):(x=il(m.type,m.key,m.props,null,d.mode,x),x.ref=Js(d,v,m),x.return=d,x)}function u(d,v,m,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==m.containerInfo||v.stateNode.implementation!==m.implementation?(v=zu(m,d.mode,x),v.return=d,v):(v=r(v,m.children||[]),v.return=d,v)}function f(d,v,m,x,U){return v===null||v.tag!==7?(v=Tr(m,d.mode,x,U),v.return=d,v):(v=r(v,m),v.return=d,v)}function c(d,v,m){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ku(""+v,d.mode,m),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ra:return m=il(v.type,v.key,v.props,null,d.mode,m),m.ref=Js(d,null,v),m.return=d,m;case is:return v=zu(v,d.mode,m),v.return=d,v;case Di:var x=v._init;return c(d,x(v._payload),m)}if(lo(v)||Ys(v))return v=Tr(v,d.mode,m,null),v.return=d,v;ma(d,v)}return null}function h(d,v,m,x){var U=v!==null?v.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return U!==null?null:a(d,v,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ra:return m.key===U?l(d,v,m,x):null;case is:return m.key===U?u(d,v,m,x):null;case Di:return U=m._init,h(d,v,U(m._payload),x)}if(lo(m)||Ys(m))return U!==null?null:f(d,v,m,x,null);ma(d,m)}return null}function p(d,v,m,x,U){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(m)||null,a(v,d,""+x,U);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ra:return d=d.get(x.key===null?m:x.key)||null,l(v,d,x,U);case is:return d=d.get(x.key===null?m:x.key)||null,u(v,d,x,U);case Di:var A=x._init;return p(d,v,m,A(x._payload),U)}if(lo(x)||Ys(x))return d=d.get(m)||null,f(v,d,x,U,null);ma(v,x)}return null}function _(d,v,m,x){for(var U=null,A=null,C=v,I=v=0,E=null;C!==null&&I<m.length;I++){C.index>I?(E=C,C=null):E=C.sibling;var M=h(d,C,m[I],x);if(M===null){C===null&&(C=E);break}t&&C&&M.alternate===null&&e(d,C),v=s(M,v,I),A===null?U=M:A.sibling=M,A=M,C=E}if(I===m.length)return n(d,C),ot&&hr(d,I),U;if(C===null){for(;I<m.length;I++)C=c(d,m[I],x),C!==null&&(v=s(C,v,I),A===null?U=C:A.sibling=C,A=C);return ot&&hr(d,I),U}for(C=i(d,C);I<m.length;I++)E=p(C,d,I,m[I],x),E!==null&&(t&&E.alternate!==null&&C.delete(E.key===null?I:E.key),v=s(E,v,I),A===null?U=E:A.sibling=E,A=E);return t&&C.forEach(function(F){return e(d,F)}),ot&&hr(d,I),U}function y(d,v,m,x){var U=Ys(m);if(typeof U!="function")throw Error(ge(150));if(m=U.call(m),m==null)throw Error(ge(151));for(var A=U=null,C=v,I=v=0,E=null,M=m.next();C!==null&&!M.done;I++,M=m.next()){C.index>I?(E=C,C=null):E=C.sibling;var F=h(d,C,M.value,x);if(F===null){C===null&&(C=E);break}t&&C&&F.alternate===null&&e(d,C),v=s(F,v,I),A===null?U=F:A.sibling=F,A=F,C=E}if(M.done)return n(d,C),ot&&hr(d,I),U;if(C===null){for(;!M.done;I++,M=m.next())M=c(d,M.value,x),M!==null&&(v=s(M,v,I),A===null?U=M:A.sibling=M,A=M);return ot&&hr(d,I),U}for(C=i(d,C);!M.done;I++,M=m.next())M=p(C,d,I,M.value,x),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?I:M.key),v=s(M,v,I),A===null?U=M:A.sibling=M,A=M);return t&&C.forEach(function(G){return e(d,G)}),ot&&hr(d,I),U}function g(d,v,m,x){if(typeof m=="object"&&m!==null&&m.type===rs&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ra:e:{for(var U=m.key,A=v;A!==null;){if(A.key===U){if(U=m.type,U===rs){if(A.tag===7){n(d,A.sibling),v=r(A,m.props.children),v.return=d,d=v;break e}}else if(A.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Di&&qd(U)===A.type){n(d,A.sibling),v=r(A,m.props),v.ref=Js(d,A,m),v.return=d,d=v;break e}n(d,A);break}else e(d,A);A=A.sibling}m.type===rs?(v=Tr(m.props.children,d.mode,x,m.key),v.return=d,d=v):(x=il(m.type,m.key,m.props,null,d.mode,x),x.ref=Js(d,v,m),x.return=d,d=x)}return o(d);case is:e:{for(A=m.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===m.containerInfo&&v.stateNode.implementation===m.implementation){n(d,v.sibling),v=r(v,m.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=zu(m,d.mode,x),v.return=d,d=v}return o(d);case Di:return A=m._init,g(d,v,A(m._payload),x)}if(lo(m))return _(d,v,m,x);if(Ys(m))return y(d,v,m,x);ma(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,m),v.return=d,d=v):(n(d,v),v=ku(m,d.mode,x),v.return=d,d=v),o(d)):n(d,v)}return g}var Ds=Wg(!0),Xg=Wg(!1),wl=er(null),Al=null,hs=null,_h=null;function vh(){_h=hs=Al=null}function yh(t){var e=wl.current;st(wl),t._currentValue=e}function Yc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ms(t,e){Al=t,_h=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qt=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(_h!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(Al===null)throw Error(ge(308));hs=t,Al.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var vr=null;function xh(t){vr===null?vr=[t]:vr.push(t)}function jg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,xh(e)):(n.next=r.next,r.next=n),e.interleaved=n,vi(t,i)}function vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function Sh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,vi(t,n)}return r=i.interleaved,r===null?(e.next=e,xh(i)):(e.next=r.next,r.next=e),i.interleaved=e,vi(t,n)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}function $d(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cl(t,e,n,i){var r=t.updateQueue;Ii=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var c=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){c=_.call(p,c,h);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(p,c,h):_,h==null)break e;c=ht({},c,h);break e;case 2:Ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=c):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=c),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pr|=o,t.lanes=o,t.memoizedState=c}}function Kd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ge(191,r));r.call(i)}}}var Zo={},Kn=er(Zo),Fo=er(Zo),ko=er(Zo);function yr(t){if(t===Zo)throw Error(ge(174));return t}function Mh(t,e){switch(nt(ko,e),nt(Fo,t),nt(Kn,Zo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cc(e,t)}st(Kn),nt(Kn,e)}function Is(){st(Kn),st(Fo),st(ko)}function qg(t){yr(ko.current);var e=yr(Kn.current),n=Cc(e,t.type);e!==n&&(nt(Fo,t),nt(Kn,n))}function Eh(t){Fo.current===t&&(st(Kn),st(Fo))}var ut=er(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Du=[];function Th(){for(var t=0;t<Du.length;t++)Du[t]._workInProgressVersionPrimary=null;Du.length=0}var Ja=Mi.ReactCurrentDispatcher,Iu=Mi.ReactCurrentBatchConfig,Rr=0,ft=null,Tt=null,bt=null,Pl=!1,vo=!1,zo=0,Ny=0;function kt(){throw Error(ge(321))}function wh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function Ah(t,e,n,i,r,s){if(Rr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ja.current=t===null||t.memoizedState===null?ky:zy,t=n(i,r),vo){s=0;do{if(vo=!1,zo=0,25<=s)throw Error(ge(301));s+=1,bt=Tt=null,e.updateQueue=null,Ja.current=By,t=n(i,r)}while(vo)}if(Ja.current=bl,e=Tt!==null&&Tt.next!==null,Rr=0,bt=Tt=ft=null,Pl=!1,e)throw Error(ge(300));return t}function Ch(){var t=zo!==0;return zo=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ft.memoizedState=bt=t:bt=bt.next=t,bt}function Cn(){if(Tt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=bt===null?ft.memoizedState:bt.next;if(e!==null)bt=e,Tt=t;else{if(t===null)throw Error(ge(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},bt===null?ft.memoizedState=bt=t:bt=bt.next=t}return bt}function Bo(t,e){return typeof e=="function"?e(t):e}function Nu(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Rr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=i):l=l.next=c,ft.lanes|=f,Pr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Hn(i,e.memoizedState)||(Qt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Pr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uu(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Hn(s,e.memoizedState)||(Qt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function $g(){}function Kg(t,e){var n=ft,i=Cn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,Qt=!0),i=i.queue,Rh(Qg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||bt!==null&&bt.memoizedState.tag&1){if(n.flags|=2048,Vo(9,Jg.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(ge(349));Rr&30||Zg(n,e,r)}return r}function Zg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jg(t,e,n,i){e.value=n,e.getSnapshot=i,e0(e)&&t0(t)}function Qg(t,e,n){return n(function(){e0(e)&&t0(t)})}function e0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function t0(t){var e=vi(t,1);e!==null&&Vn(e,t,1,-1)}function Zd(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:t},e.queue=t,t=t.dispatch=Fy.bind(null,ft,t),[e.memoizedState,t]}function Vo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function n0(){return Cn().memoizedState}function Qa(t,e,n,i){var r=Xn();ft.flags|=t,r.memoizedState=Vo(1|e,n,void 0,i===void 0?null:i)}function Kl(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&wh(i,o.deps)){r.memoizedState=Vo(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Vo(1|e,n,s,i)}function Jd(t,e){return Qa(8390656,8,t,e)}function Rh(t,e){return Kl(2048,8,t,e)}function i0(t,e){return Kl(4,2,t,e)}function r0(t,e){return Kl(4,4,t,e)}function s0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function o0(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4,4,s0.bind(null,e,t),n)}function Ph(){}function a0(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function l0(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function u0(t,e,n){return Rr&21?(Hn(n,e)||(n=pg(),ft.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=n)}function Uy(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Iu.transition;Iu.transition={};try{t(!1),e()}finally{et=n,Iu.transition=i}}function c0(){return Cn().memoizedState}function Oy(t,e,n){var i=ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},f0(t))h0(e,n);else if(n=jg(t,e,n,i),n!==null){var r=Yt();Vn(n,t,i,r),d0(n,e,i)}}function Fy(t,e,n){var i=ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(f0(t))h0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Hn(a,o)){var l=e.interleaved;l===null?(r.next=r,xh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=jg(t,e,r,i),n!==null&&(r=Yt(),Vn(n,t,i,r),d0(n,e,i))}}function f0(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function h0(t,e){vo=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function d0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,oh(t,n)}}var bl={readContext:An,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useInsertionEffect:kt,useLayoutEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useMutableSource:kt,useSyncExternalStore:kt,useId:kt,unstable_isNewReconciler:!1},ky={readContext:An,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:Jd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4194308,4,s0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qa(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Oy.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:Zd,useDebugValue:Ph,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=Zd(!1),e=t[0];return t=Uy.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Xn();if(ot){if(n===void 0)throw Error(ge(407));n=n()}else{if(n=e(),Lt===null)throw Error(ge(349));Rr&30||Zg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Jd(Qg.bind(null,i,s,t),[t]),i.flags|=2048,Vo(9,Jg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Lt.identifierPrefix;if(ot){var n=hi,i=fi;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ny++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zy={readContext:An,useCallback:a0,useContext:An,useEffect:Rh,useImperativeHandle:o0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:Nu,useRef:n0,useState:function(){return Nu(Bo)},useDebugValue:Ph,useDeferredValue:function(t){var e=Cn();return u0(e,Tt.memoizedState,t)},useTransition:function(){var t=Nu(Bo)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Kg,useId:c0,unstable_isNewReconciler:!1},By={readContext:An,useCallback:a0,useContext:An,useEffect:Rh,useImperativeHandle:o0,useInsertionEffect:i0,useLayoutEffect:r0,useMemo:l0,useReducer:Uu,useRef:n0,useState:function(){return Uu(Bo)},useDebugValue:Ph,useDeferredValue:function(t){var e=Cn();return Tt===null?e.memoizedState=t:u0(e,Tt.memoizedState,t)},useTransition:function(){var t=Uu(Bo)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:$g,useSyncExternalStore:Kg,useId:c0,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=ji(t),s=mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Vn(e,t,r,i),Za(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=ji(t),s=mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Vn(e,t,r,i),Za(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=ji(t),r=mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Wi(t,r,i),e!==null&&(Vn(e,t,i,n),Za(e,t,i))}};function Qd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Io(n,i)||!Io(r,s):!0}function p0(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=nn(e)?Ar:Wt.current,i=e.contextTypes,s=(i=i!=null)?bs(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ep(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function $c(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Sh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=nn(e)?Ar:Wt.current,r.context=bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zl.enqueueReplaceState(r,r.state,null),Cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",i=e;do n+=pv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Vy=typeof WeakMap=="function"?WeakMap:Map;function m0(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Dl||(Dl=!0,af=i),Kc(t,e)},n}function g0(t,e,n){n=mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Kc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kc(t,e),typeof i!="function"&&(Xi===null?Xi=new Set([this]):Xi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function tp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Vy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=tx.bind(null,t,e,n),e.then(t,t))}function np(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ip(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,Wi(n,e,1))),n.lanes|=1),t)}var Hy=Mi.ReactCurrentOwner,Qt=!1;function jt(t,e,n,i){e.child=t===null?Xg(e,null,n,i):Ds(e,t.child,n,i)}function rp(t,e,n,i,r){n=n.render;var s=e.ref;return Ms(e,r),i=Ah(t,e,n,i,s,r),n=Ch(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(ot&&n&&ph(e),e.flags|=1,jt(t,e,i,r),e.child)}function sp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Fh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_0(t,e,s,i,r)):(t=il(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Io,n(o,i)&&t.ref===e.ref)return yi(t,e,r)}return e.flags|=1,t=Yi(s,i),t.ref=e.ref,t.return=e,e.child=t}function _0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Io(s,i)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,yi(t,e,r)}return Zc(t,e,n,i,r)}function v0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(ps,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(ps,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(ps,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(ps,fn),fn|=i;return jt(t,e,r,n),e.child}function y0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zc(t,e,n,i,r){var s=nn(n)?Ar:Wt.current;return s=bs(e,s),Ms(e,r),n=Ah(t,e,n,i,s,r),i=Ch(),t!==null&&!Qt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(ot&&i&&ph(e),e.flags|=1,jt(t,e,n,r),e.child)}function op(t,e,n,i,r){if(nn(n)){var s=!0;Ml(e)}else s=!1;if(Ms(e,r),e.stateNode===null)el(t,e),p0(e,n,i),$c(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=An(u):(u=nn(n)?Ar:Wt.current,u=bs(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&ep(e,o,i,u),Ii=!1;var h=e.memoizedState;o.state=h,Cl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||tn.current||Ii?(typeof f=="function"&&(qc(e,n,f,i),l=e.memoizedState),(a=Ii||Qd(e,n,a,i,h,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Yg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:In(e.type,a),o.props=u,c=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=nn(n)?Ar:Wt.current,l=bs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||h!==l)&&ep(e,o,i,l),Ii=!1,h=e.memoizedState,o.state=h,Cl(e,i,o,r);var _=e.memoizedState;a!==c||h!==_||tn.current||Ii?(typeof p=="function"&&(qc(e,n,p,i),_=e.memoizedState),(u=Ii||Qd(e,n,u,i,h,_,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Jc(t,e,n,i,s,r)}function Jc(t,e,n,i,r,s){y0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Xd(e,n,!1),yi(t,e,s);i=e.stateNode,Hy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ds(e,t.child,null,s),e.child=Ds(e,null,a,s)):jt(t,e,a,s),e.memoizedState=i.state,r&&Xd(e,n,!0),e.child}function x0(t){var e=t.stateNode;e.pendingContext?Wd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Wd(t,e.context,!1),Mh(t,e.containerInfo)}function ap(t,e,n,i,r){return Ls(),gh(r),e.flags|=256,jt(t,e,n,i),e.child}var Qc={dehydrated:null,treeContext:null,retryLane:0};function ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function S0(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ut,r&1),t===null)return jc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=eu(o,i,0,null),t=Tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ef(n),e.memoizedState=Qc,t):bh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Gy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Yi(a,s):(s=Tr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ef(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Qc,i}return s=t.child,t=s.sibling,i=Yi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function bh(t,e){return e=eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ga(t,e,n,i){return i!==null&&gh(i),Ds(e,t.child,null,n),t=bh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Gy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ou(Error(ge(422))),ga(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=eu({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ds(e,t.child,null,o),e.child.memoizedState=ef(o),e.memoizedState=Qc,s);if(!(e.mode&1))return ga(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ge(419)),i=Ou(s,i,void 0),ga(t,e,o,i)}if(a=(o&t.childLanes)!==0,Qt||a){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,vi(t,r),Vn(i,t,r,-1))}return Oh(),i=Ou(Error(ge(421))),ga(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=nx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Gi(r.nextSibling),dn=e,ot=!0,On=null,t!==null&&(yn[xn++]=fi,yn[xn++]=hi,yn[xn++]=Cr,fi=t.id,hi=t.overflow,Cr=e),e=bh(e,i.children),e.flags|=4096,e)}function lp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yc(t.return,e,n)}function Fu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function M0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&lp(t,n,e);else if(t.tag===19)lp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fu(e,!0,n,null,s);break;case"together":Fu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ge(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Wy(t,e,n){switch(e.tag){case 3:x0(e),Ls();break;case 5:qg(e);break;case 1:nn(e.type)&&Ml(e);break;case 4:Mh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?S0(t,e,n):(nt(ut,ut.current&1),t=yi(t,e,n),t!==null?t.sibling:null);nt(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return M0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,v0(t,e,n)}return yi(t,e,n)}var E0,tf,T0,w0;E0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tf=function(){};T0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(Kn.current);var s=null;switch(n){case"input":r=Ec(t,r),i=Ec(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=Ac(t,r),i=Ac(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}Rc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ao.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ao.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};w0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Qs(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Xy(t,e,n){var i=e.pendingProps;switch(mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return nn(e.type)&&Sl(),zt(e),null;case 3:return i=e.stateNode,Is(),st(tn),st(Wt),Th(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(cf(On),On=null))),tf(t,e),zt(e),null;case 5:Eh(e);var r=yr(ko.current);if(n=e.type,t!==null&&e.stateNode!=null)T0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ge(166));return zt(e),null}if(t=yr(Kn.current),pa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[Oo]=s,t=(e.mode&1)!==0,n){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<co.length;r++)it(co[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":_d(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":yd(i,s),it("invalid",i)}Rc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&da(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&da(i.textContent,a,t),r=["children",""+a]):Ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(n){case"input":sa(i),vd(i,s,!0);break;case"textarea":sa(i),xd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Qm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Yn]=e,t[Oo]=i,E0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pc(n,i),n){case"dialog":it("cancel",t),it("close",t),r=i;break;case"iframe":case"object":case"embed":it("load",t),r=i;break;case"video":case"audio":for(r=0;r<co.length;r++)it(co[r],t);r=i;break;case"source":it("error",t),r=i;break;case"img":case"image":case"link":it("error",t),it("load",t),r=i;break;case"details":it("toggle",t),r=i;break;case"input":_d(t,i),r=Ec(t,i),it("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),it("invalid",t);break;case"textarea":yd(t,i),r=Ac(t,i),it("invalid",t);break;default:r=i}Rc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ng(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&eg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Co(t,l):typeof l=="number"&&Co(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",t):l!=null&&eh(t,s,l,o))}switch(n){case"input":sa(t),vd(t,i,!1);break;case"textarea":sa(t),xd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ki(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)w0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ge(166));if(n=yr(ko.current),yr(Kn.current),pa(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:da(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return zt(e),null;case 13:if(st(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&hn!==null&&e.mode&1&&!(e.flags&128))Gg(),Ls(),e.flags|=98560,s=!1;else if(s=pa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ge(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ge(317));s[Yn]=e}else Ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else On!==null&&(cf(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?At===0&&(At=3):Oh())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Is(),tf(t,e),t===null&&No(e.stateNode.containerInfo),zt(e),null;case 10:return yh(e.type._context),zt(e),null;case 17:return nn(e.type)&&Sl(),zt(e),null;case 19:if(st(ut),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Qs(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rl(t),o!==null){for(e.flags|=128,Qs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>Us&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ot)return zt(e),null}else 2*vt()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,i=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ut.current,nt(ut,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Uh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(ge(156,e.tag))}function jy(t,e){switch(mh(e),e.tag){case 1:return nn(e.type)&&Sl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),st(tn),st(Wt),Th(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eh(e),null;case 13:if(st(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ge(340));Ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return st(ut),null;case 4:return Is(),null;case 10:return yh(e.type._context),null;case 22:case 23:return Uh(),null;case 24:return null;default:return null}}var _a=!1,Ht=!1,Yy=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function ds(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function nf(t,e,n){try{n()}catch(i){mt(t,e,i)}}var up=!1;function qy(t,e){if(zc=_l,t=bg(),dh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,c=t,h=null;t:for(;;){for(var p;c!==n||r!==0&&c.nodeType!==3||(a=o+r),c!==s||i!==0&&c.nodeType!==3||(l=o+i),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)h=c,c=p;for(;;){if(c===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(p=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bc={focusedElem:t,selectionRange:n},_l=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){e=Ce;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,g=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:In(e.type,y),g);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ge(163))}}catch(x){mt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}return _=up,up=!1,_}function yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&nf(e,n,s)}r=r.next}while(r!==i)}}function Jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function A0(t){var e=t.alternate;e!==null&&(t.alternate=null,A0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Oo],delete e[Gc],delete e[by],delete e[Ly])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C0(t){return t.tag===5||t.tag===3||t.tag===4}function cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}function of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}var Nt=null,Nn=!1;function wi(t,e,n){for(n=n.child;n!==null;)R0(t,e,n),n=n.sibling}function R0(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:Ht||ds(n,e);case 6:var i=Nt,r=Nn;Nt=null,wi(t,e,n),Nt=i,Nn=r,Nt!==null&&(Nn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Nn?(t=Nt,n=n.stateNode,t.nodeType===8?bu(t.parentNode,n):t.nodeType===1&&bu(t,n),Lo(t)):bu(Nt,n.stateNode));break;case 4:i=Nt,r=Nn,Nt=n.stateNode.containerInfo,Nn=!0,wi(t,e,n),Nt=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&nf(n,e,o),r=r.next}while(r!==i)}wi(t,e,n);break;case 1:if(!Ht&&(ds(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}wi(t,e,n);break;case 21:wi(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,wi(t,e,n),Ht=i):wi(t,e,n);break;default:wi(t,e,n)}}function fp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Yy),e.forEach(function(i){var r=ix.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,Nn=!1;break e;case 3:Nt=a.stateNode.containerInfo,Nn=!0;break e;case 4:Nt=a.stateNode.containerInfo,Nn=!0;break e}a=a.return}if(Nt===null)throw Error(ge(160));R0(s,o,r),Nt=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)P0(e,t),e=e.sibling}function P0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Wn(t),i&4){try{yo(3,t,t.return),Jl(3,t)}catch(y){mt(t,t.return,y)}try{yo(5,t,t.return)}catch(y){mt(t,t.return,y)}}break;case 1:Pn(e,t),Wn(t),i&512&&n!==null&&ds(n,n.return);break;case 5:if(Pn(e,t),Wn(t),i&512&&n!==null&&ds(n,n.return),t.flags&32){var r=t.stateNode;try{Co(r,"")}catch(y){mt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zm(r,s),Pc(a,o);var u=Pc(a,s);for(o=0;o<l.length;o+=2){var f=l[o],c=l[o+1];f==="style"?ng(r,c):f==="dangerouslySetInnerHTML"?eg(r,c):f==="children"?Co(r,c):eh(r,f,c,u)}switch(a){case"input":Tc(r,s);break;case"textarea":Jm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?vs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?vs(r,!!s.multiple,s.defaultValue,!0):vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Oo]=s}catch(y){mt(t,t.return,y)}}break;case 6:if(Pn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ge(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){mt(t,t.return,y)}}break;case 3:if(Pn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(y){mt(t,t.return,y)}break;case 4:Pn(e,t),Wn(t);break;case 13:Pn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ih=vt())),i&4&&fp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(u=Ht)||f,Pn(e,t),Ht=u):Pn(e,t),Wn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Ce=t,f=t.child;f!==null;){for(c=Ce=f;Ce!==null;){switch(h=Ce,p=h.child,h.tag){case 0:case 11:case 14:case 15:yo(4,h,h.return);break;case 1:ds(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){mt(i,n,y)}}break;case 5:ds(h,h.return);break;case 22:if(h.memoizedState!==null){dp(c);continue}}p!==null?(p.return=h,Ce=p):dp(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{r=c.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=tg("display",o))}catch(y){mt(t,t.return,y)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){mt(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Pn(e,t),Wn(t),i&4&&fp(t);break;case 21:break;default:Pn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C0(n)){var i=n;break e}n=n.return}throw Error(ge(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Co(r,""),i.flags&=-33);var s=cp(t);of(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=cp(t);sf(t,a,o);break;default:throw Error(ge(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $y(t,e,n){Ce=t,b0(t)}function b0(t,e,n){for(var i=(t.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||_a;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=_a;var u=Ht;if(_a=o,(Ht=l)&&!u)for(Ce=r;Ce!==null;)o=Ce,l=o.child,o.tag===22&&o.memoizedState!==null?pp(r):l!==null?(l.return=o,Ce=l):pp(r);for(;s!==null;)Ce=s,b0(s),s=s.sibling;Ce=r,_a=a,Ht=u}hp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):hp(t)}}function hp(t){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||Jl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Lo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ge(163))}Ht||e.flags&512&&rf(e)}catch(h){mt(e,e.return,h)}}if(e===t){Ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function dp(t){for(;Ce!==null;){var e=Ce;if(e===t){Ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function pp(t){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jl(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{rf(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{rf(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){Ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ce=a;break}Ce=e.return}}var Ky=Math.ceil,Ll=Mi.ReactCurrentDispatcher,Lh=Mi.ReactCurrentOwner,Tn=Mi.ReactCurrentBatchConfig,Ye=0,Lt=null,Mt=null,Ot=0,fn=0,ps=er(0),At=0,Ho=null,Pr=0,Ql=0,Dh=0,xo=null,Jt=null,Ih=0,Us=1/0,li=null,Dl=!1,af=null,Xi=null,va=!1,zi=null,Il=0,So=0,lf=null,tl=-1,nl=0;function Yt(){return Ye&6?vt():tl!==-1?tl:tl=vt()}function ji(t){return t.mode&1?Ye&2&&Ot!==0?Ot&-Ot:Iy.transition!==null?(nl===0&&(nl=pg()),nl):(t=et,t!==0||(t=window.event,t=t===void 0?16:Sg(t.type)),t):1}function Vn(t,e,n,i){if(50<So)throw So=0,lf=null,Error(ge(185));qo(t,n,i),(!(Ye&2)||t!==Lt)&&(t===Lt&&(!(Ye&2)&&(Ql|=n),At===4&&Oi(t,Ot)),rn(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Us=vt()+500,$l&&tr()))}function rn(t,e){var n=t.callbackNode;Iv(t,e);var i=gl(t,t===Lt?Ot:0);if(i===0)n!==null&&Ed(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ed(n),e===1)t.tag===0?Dy(mp.bind(null,t)):Bg(mp.bind(null,t)),Ry(function(){!(Ye&6)&&tr()}),n=null;else{switch(mg(i)){case 1:n=sh;break;case 4:n=hg;break;case 16:n=ml;break;case 536870912:n=dg;break;default:n=ml}n=k0(n,L0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function L0(t,e){if(tl=-1,nl=0,Ye&6)throw Error(ge(327));var n=t.callbackNode;if(Es()&&t.callbackNode!==n)return null;var i=gl(t,t===Lt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Nl(t,i);else{e=i;var r=Ye;Ye|=2;var s=I0();(Lt!==t||Ot!==e)&&(li=null,Us=vt()+500,Er(t,e));do try{Qy();break}catch(a){D0(t,a)}while(!0);vh(),Ll.current=s,Ye=r,Mt!==null?e=0:(Lt=null,Ot=0,e=At)}if(e!==0){if(e===2&&(r=Nc(t),r!==0&&(i=r,e=uf(t,r))),e===1)throw n=Ho,Er(t,0),Oi(t,i),rn(t,vt()),n;if(e===6)Oi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Zy(r)&&(e=Nl(t,i),e===2&&(s=Nc(t),s!==0&&(i=s,e=uf(t,s))),e===1))throw n=Ho,Er(t,0),Oi(t,i),rn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ge(345));case 2:dr(t,Jt,li);break;case 3:if(Oi(t,i),(i&130023424)===i&&(e=Ih+500-vt(),10<e)){if(gl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Hc(dr.bind(null,t,Jt,li),e);break}dr(t,Jt,li);break;case 4:if(Oi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Bn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ky(i/1960))-i,10<i){t.timeoutHandle=Hc(dr.bind(null,t,Jt,li),i);break}dr(t,Jt,li);break;case 5:dr(t,Jt,li);break;default:throw Error(ge(329))}}}return rn(t,vt()),t.callbackNode===n?L0.bind(null,t):null}function uf(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(Er(t,e).flags|=256),t=Nl(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&cf(e)),t}function cf(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function Zy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Oi(t,e){for(e&=~Dh,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function mp(t){if(Ye&6)throw Error(ge(327));Es();var e=gl(t,0);if(!(e&1))return rn(t,vt()),null;var n=Nl(t,e);if(t.tag!==0&&n===2){var i=Nc(t);i!==0&&(e=i,n=uf(t,i))}if(n===1)throw n=Ho,Er(t,0),Oi(t,e),rn(t,vt()),n;if(n===6)throw Error(ge(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,Jt,li),rn(t,vt()),null}function Nh(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Us=vt()+500,$l&&tr())}}function br(t){zi!==null&&zi.tag===0&&!(Ye&6)&&Es();var e=Ye;Ye|=1;var n=Tn.transition,i=et;try{if(Tn.transition=null,et=1,t)return t()}finally{et=i,Tn.transition=n,Ye=e,!(Ye&6)&&tr()}}function Uh(){fn=ps.current,st(ps)}function Er(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Cy(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(mh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Sl();break;case 3:Is(),st(tn),st(Wt),Th();break;case 5:Eh(i);break;case 4:Is();break;case 13:st(ut);break;case 19:st(ut);break;case 10:yh(i.type._context);break;case 22:case 23:Uh()}n=n.return}if(Lt=t,Mt=t=Yi(t.current,null),Ot=fn=e,At=0,Ho=null,Dh=Ql=Pr=0,Jt=xo=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}vr=null}return t}function D0(t,e){do{var n=Mt;try{if(vh(),Ja.current=bl,Pl){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pl=!1}if(Rr=0,bt=Tt=ft=null,vo=!1,zo=0,Lh.current=null,n===null||n.return===null){At=1,Ho=e,Mt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ot,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=np(o);if(p!==null){p.flags&=-257,ip(p,o,a,s,e),p.mode&1&&tp(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){tp(s,u,e),Oh();break e}l=Error(ge(426))}}else if(ot&&a.mode&1){var g=np(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),ip(g,o,a,s,e),gh(Ns(l,a));break e}}s=l=Ns(l,a),At!==4&&(At=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=m0(s,l,e);$d(s,d);break e;case 1:a=l;var v=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Xi===null||!Xi.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=g0(s,a,e);$d(s,x);break e}}s=s.return}while(s!==null)}U0(n)}catch(U){e=U,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function I0(){var t=Ll.current;return Ll.current=bl,t===null?bl:t}function Oh(){(At===0||At===3||At===2)&&(At=4),Lt===null||!(Pr&268435455)&&!(Ql&268435455)||Oi(Lt,Ot)}function Nl(t,e){var n=Ye;Ye|=2;var i=I0();(Lt!==t||Ot!==e)&&(li=null,Er(t,e));do try{Jy();break}catch(r){D0(t,r)}while(!0);if(vh(),Ye=n,Ll.current=i,Mt!==null)throw Error(ge(261));return Lt=null,Ot=0,At}function Jy(){for(;Mt!==null;)N0(Mt)}function Qy(){for(;Mt!==null&&!Tv();)N0(Mt)}function N0(t){var e=F0(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?U0(t):Mt=e,Lh.current=null}function U0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=jy(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Mt=null;return}}else if(n=Xy(n,e,fn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);At===0&&(At=5)}function dr(t,e,n){var i=et,r=Tn.transition;try{Tn.transition=null,et=1,ex(t,e,n,i)}finally{Tn.transition=r,et=i}return null}function ex(t,e,n,i){do Es();while(zi!==null);if(Ye&6)throw Error(ge(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ge(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Nv(t,s),t===Lt&&(Mt=Lt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||va||(va=!0,k0(ml,function(){return Es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=et;et=1;var a=Ye;Ye|=4,Lh.current=null,qy(t,n),P0(n,t),xy(Bc),_l=!!zc,Bc=zc=null,t.current=n,$y(n),wv(),Ye=a,et=o,Tn.transition=s}else t.current=n;if(va&&(va=!1,zi=t,Il=r),s=t.pendingLanes,s===0&&(Xi=null),Rv(n.stateNode),rn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Dl)throw Dl=!1,t=af,af=null,t;return Il&1&&t.tag!==0&&Es(),s=t.pendingLanes,s&1?t===lf?So++:(So=0,lf=t):So=0,tr(),null}function Es(){if(zi!==null){var t=mg(Il),e=Tn.transition,n=et;try{if(Tn.transition=null,et=16>t?16:t,zi===null)var i=!1;else{if(t=zi,zi=null,Il=0,Ye&6)throw Error(ge(331));var r=Ye;for(Ye|=4,Ce=t.current;Ce!==null;){var s=Ce,o=s.child;if(Ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ce=u;Ce!==null;){var f=Ce;switch(f.tag){case 0:case 11:case 15:yo(8,f,s)}var c=f.child;if(c!==null)c.return=f,Ce=c;else for(;Ce!==null;){f=Ce;var h=f.sibling,p=f.return;if(A0(f),f===u){Ce=null;break}if(h!==null){h.return=p,Ce=h;break}Ce=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ce=o;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ce=d;break e}Ce=s.return}}var v=t.current;for(Ce=v;Ce!==null;){o=Ce;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,Ce=m;else e:for(o=v;Ce!==null;){if(a=Ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jl(9,a)}}catch(U){mt(a,a.return,U)}if(a===o){Ce=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Ce=x;break e}Ce=a.return}}if(Ye=r,tr(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Wl,t)}catch{}i=!0}return i}finally{et=n,Tn.transition=e}}return!1}function gp(t,e,n){e=Ns(n,e),e=m0(t,e,1),t=Wi(t,e,1),e=Yt(),t!==null&&(qo(t,1,e),rn(t,e))}function mt(t,e,n){if(t.tag===3)gp(t,t,n);else for(;e!==null;){if(e.tag===3){gp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Xi===null||!Xi.has(i))){t=Ns(n,t),t=g0(e,t,1),e=Wi(e,t,1),t=Yt(),e!==null&&(qo(e,1,t),rn(e,t));break}}e=e.return}}function tx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ot&n)===n&&(At===4||At===3&&(Ot&130023424)===Ot&&500>vt()-Ih?Er(t,0):Dh|=n),rn(t,e)}function O0(t,e){e===0&&(t.mode&1?(e=la,la<<=1,!(la&130023424)&&(la=4194304)):e=1);var n=Yt();t=vi(t,e),t!==null&&(qo(t,e,n),rn(t,n))}function nx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),O0(t,n)}function ix(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ge(314))}i!==null&&i.delete(e),O0(t,n)}var F0;F0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)Qt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qt=!1,Wy(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,ot&&e.flags&1048576&&Vg(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;el(t,e),t=e.pendingProps;var r=bs(e,Wt.current);Ms(e,n),r=Ah(null,e,i,t,r,n);var s=Ch();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,Ml(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Sh(e),r.updater=Zl,e.stateNode=r,r._reactInternals=e,$c(e,i,t,n),e=Jc(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&ph(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(el(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=sx(i),t=In(i,t),r){case 0:e=Zc(null,e,i,t,n);break e;case 1:e=op(null,e,i,t,n);break e;case 11:e=rp(null,e,i,t,n);break e;case 14:e=sp(null,e,i,In(i.type,t),n);break e}throw Error(ge(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Zc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),op(t,e,i,r,n);case 3:e:{if(x0(e),t===null)throw Error(ge(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Yg(t,e),Cl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ns(Error(ge(423)),e),e=ap(t,e,i,n,r);break e}else if(i!==r){r=Ns(Error(ge(424)),e),e=ap(t,e,i,n,r);break e}else for(hn=Gi(e.stateNode.containerInfo.firstChild),dn=e,ot=!0,On=null,n=Xg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ls(),i===r){e=yi(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return qg(e),t===null&&jc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Vc(i,r)?o=null:s!==null&&Vc(i,s)&&(e.flags|=32),y0(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&jc(e),null;case 13:return S0(t,e,n);case 4:return Mh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ds(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),rp(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(wl,i._currentValue),i._currentValue=o,s!==null)if(Hn(s.value,o)){if(s.children===r.children&&!tn.current){e=yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=mi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ge(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ms(e,n),r=An(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),sp(t,e,i,r,n);case 15:return _0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),el(t,e),e.tag=1,nn(i)?(t=!0,Ml(e)):t=!1,Ms(e,n),p0(e,i,r),$c(e,i,r,n),Jc(null,e,i,!0,t,n);case 19:return M0(t,e,n);case 22:return v0(t,e,n)}throw Error(ge(156,e.tag))};function k0(t,e){return fg(t,e)}function rx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(t,e,n,i){return new rx(t,e,n,i)}function Fh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sx(t){if(typeof t=="function")return Fh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nh)return 11;if(t===ih)return 14}return 2}function Yi(t,e){var n=t.alternate;return n===null?(n=Mn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function il(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Fh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rs:return Tr(n.children,r,s,e);case th:o=8,r|=8;break;case yc:return t=Mn(12,n,e,r|2),t.elementType=yc,t.lanes=s,t;case xc:return t=Mn(13,n,e,r),t.elementType=xc,t.lanes=s,t;case Sc:return t=Mn(19,n,e,r),t.elementType=Sc,t.lanes=s,t;case qm:return eu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jm:o=10;break e;case Ym:o=9;break e;case nh:o=11;break e;case ih:o=14;break e;case Di:o=16,i=null;break e}throw Error(ge(130,t==null?t:typeof t,""))}return e=Mn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Tr(t,e,n,i){return t=Mn(7,t,i,e),t.lanes=n,t}function eu(t,e,n,i){return t=Mn(22,t,i,e),t.elementType=qm,t.lanes=n,t.stateNode={isHidden:!1},t}function ku(t,e,n){return t=Mn(6,t,null,e),t.lanes=n,t}function zu(t,e,n){return e=Mn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ox(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yu(0),this.expirationTimes=yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kh(t,e,n,i,r,s,o,a,l){return t=new ox(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Mn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sh(s),t}function ax(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:is,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function z0(t){if(!t)return Zi;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(ge(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ge(171))}if(t.tag===1){var n=t.type;if(nn(n))return zg(t,n,e)}return e}function B0(t,e,n,i,r,s,o,a,l){return t=kh(n,i,!0,t,r,s,o,a,l),t.context=z0(null),n=t.current,i=Yt(),r=ji(n),s=mi(i,r),s.callback=e??null,Wi(n,s,r),t.current.lanes=r,qo(t,r,i),rn(t,i),t}function tu(t,e,n,i){var r=e.current,s=Yt(),o=ji(r);return n=z0(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Wi(r,e,o),t!==null&&(Vn(t,r,o,s),Za(t,r,o)),o}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _p(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zh(t,e){_p(t,e),(t=t.alternate)&&_p(t,e)}function lx(){return null}var V0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bh(t){this._internalRoot=t}nu.prototype.render=Bh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ge(409));tu(t,e,null,null)};nu.prototype.unmount=Bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){tu(null,t,null,null)}),e[_i]=null}};function nu(t){this._internalRoot=t}nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=vg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&xg(t)}};function Vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function iu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function ux(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ul(o);s.call(u)}}var o=B0(e,i,t,0,null,!1,!1,"",vp);return t._reactRootContainer=o,t[_i]=o.current,No(t.nodeType===8?t.parentNode:t),br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ul(l);a.call(u)}}var l=kh(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=l,t[_i]=l.current,No(t.nodeType===8?t.parentNode:t),br(function(){tu(e,l,n,i)}),l}function ru(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ul(o);a.call(l)}}tu(e,o,t,r)}else o=ux(n,e,t,r,i);return Ul(o)}gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&(oh(e,n|1),rn(e,vt()),!(Ye&6)&&(Us=vt()+500,tr()))}break;case 13:br(function(){var i=vi(t,1);if(i!==null){var r=Yt();Vn(i,t,1,r)}}),zh(t,1)}};ah=function(t){if(t.tag===13){var e=vi(t,134217728);if(e!==null){var n=Yt();Vn(e,t,134217728,n)}zh(t,134217728)}};_g=function(t){if(t.tag===13){var e=ji(t),n=vi(t,e);if(n!==null){var i=Yt();Vn(n,t,e,i)}zh(t,e)}};vg=function(){return et};yg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Lc=function(t,e,n){switch(e){case"input":if(Tc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ql(i);if(!r)throw Error(ge(90));Km(i),Tc(i,r)}}}break;case"textarea":Jm(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};sg=Nh;og=br;var cx={usingClientEntryPoint:!1,Events:[Ko,ls,ql,ig,rg,Nh]},eo={findFiberByHostInstance:_r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fx={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ug(t),t===null?null:t.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{Wl=ya.inject(fx),$n=ya}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cx;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vh(e))throw Error(ge(200));return ax(t,e,null,n)};mn.createRoot=function(t,e){if(!Vh(t))throw Error(ge(299));var n=!1,i="",r=V0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kh(t,1,!1,null,null,n,!1,i,r),t[_i]=e.current,No(t.nodeType===8?t.parentNode:t),new Bh(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ge(188)):(t=Object.keys(t).join(","),Error(ge(268,t)));return t=ug(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return br(t)};mn.hydrate=function(t,e,n){if(!iu(e))throw Error(ge(200));return ru(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!Vh(t))throw Error(ge(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=V0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=B0(e,null,t,1,n??null,r,!1,s,o),t[_i]=e.current,No(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nu(e)};mn.render=function(t,e,n){if(!iu(e))throw Error(ge(200));return ru(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!iu(t))throw Error(ge(40));return t._reactRootContainer?(br(function(){ru(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1};mn.unstable_batchedUpdates=Nh;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!iu(n))throw Error(ge(200));if(t==null||t._reactInternals===void 0)throw Error(ge(38));return ru(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function H0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(H0)}catch(t){console.error(t)}}H0(),Hm.exports=mn;var hx=Hm.exports,G0,yp=hx;G0=yp.createRoot,yp.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hh="168",Ts={ROTATE:0,DOLLY:1,PAN:2},ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dx=0,xp=1,px=2,W0=1,X0=2,ai=3,xi=0,sn=1,ci=2,qi=0,ws=1,Sp=2,Mp=3,Ep=4,mx=5,mr=100,gx=101,_x=102,vx=103,yx=104,xx=200,Sx=201,Mx=202,Ex=203,ff=204,hf=205,Tx=206,wx=207,Ax=208,Cx=209,Rx=210,Px=211,bx=212,Lx=213,Dx=214,Ix=0,Nx=1,Ux=2,Ol=3,Ox=4,Fx=5,kx=6,zx=7,j0=0,Bx=1,Vx=2,$i=0,Hx=1,Gx=2,Wx=3,Xx=4,jx=5,Yx=6,qx=7,Y0=300,Os=301,Fs=302,df=303,pf=304,su=306,mf=1e3,xr=1001,gf=1002,En=1003,$x=1004,xa=1005,Fn=1006,Bu=1007,Sr=1008,Si=1009,q0=1010,$0=1011,Go=1012,Gh=1013,Lr=1014,di=1015,Jo=1016,Wh=1017,Xh=1018,ks=1020,K0=35902,Z0=1021,J0=1022,kn=1023,Q0=1024,e_=1025,As=1026,zs=1027,t_=1028,jh=1029,n_=1030,Yh=1031,qh=1033,rl=33776,sl=33777,ol=33778,al=33779,_f=35840,vf=35841,yf=35842,xf=35843,Sf=36196,Mf=37492,Ef=37496,Tf=37808,wf=37809,Af=37810,Cf=37811,Rf=37812,Pf=37813,bf=37814,Lf=37815,Df=37816,If=37817,Nf=37818,Uf=37819,Of=37820,Ff=37821,ll=36492,kf=36494,zf=36495,i_=36283,Bf=36284,Vf=36285,Hf=36286,Kx=3200,Zx=3201,r_=0,Jx=1,Fi="",Un="srgb",nr="srgb-linear",$h="display-p3",ou="display-p3-linear",Fl="linear",rt="srgb",kl="rec709",zl="p3",Br=7680,Tp=519,Qx=512,eS=513,tS=514,s_=515,nS=516,iS=517,rS=518,sS=519,wp=35044,Ap="300 es",pi=2e3,Bl=2001;class Fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ul=Math.PI/180,Gf=180/Math.PI;function Ws(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ut(t,e,n){return Math.max(e,Math.min(n,t))}function oS(t,e){return(t%e+e)%e}function Vu(t,e,n){return(1-n)*t+n*e}function to(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Kt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const aS={DEG2RAD:ul};class ue{constructor(e=0,n=0){ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,o,a,l,u){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],c=i[7],h=i[2],p=i[5],_=i[8],y=r[0],g=r[3],d=r[6],v=r[1],m=r[4],x=r[7],U=r[2],A=r[5],C=r[8];return s[0]=o*y+a*v+l*U,s[3]=o*g+a*m+l*A,s[6]=o*d+a*x+l*C,s[1]=u*y+f*v+c*U,s[4]=u*g+f*m+c*A,s[7]=u*d+f*x+c*C,s[2]=h*y+p*v+_*U,s[5]=h*g+p*m+_*A,s[8]=h*d+p*x+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=f*o-a*u,h=a*l-f*s,p=u*s-o*l,_=n*c+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=c*y,e[1]=(r*u-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Hu.makeScale(e,n)),this}rotate(e){return this.premultiply(Hu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hu=new ze;function o_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function lS(){const t=Vl("canvas");return t.style.display="block",t}const Cp={};function Mo(t){t in Cp||(Cp[t]=!0,console.warn(t))}function uS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Rp=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pp=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),no={[nr]:{transfer:Fl,primaries:kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Un]:{transfer:rt,primaries:kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ou]:{transfer:Fl,primaries:zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Pp),fromReference:t=>t.applyMatrix3(Rp)},[$h]:{transfer:rt,primaries:zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Pp),fromReference:t=>t.applyMatrix3(Rp).convertLinearToSRGB()}},cS=new Set([nr,ou]),Qe={enabled:!0,_workingColorSpace:nr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!cS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=no[e].toReference,r=no[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return no[t].primaries},getTransfer:function(t){return t===Fi?Fl:no[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(no[e].luminanceCoefficients)}};function Cs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Vr;class fS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=Vl("canvas")),Vr.width=e.width,Vr.height=e.height;const i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Cs(n[i]/255)*255):n[i]=Cs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hS=0;class a_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wu(r[o].image)):s.push(Wu(r[o]))}else s=Wu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Wu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?fS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dS=0;class on extends Fr{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=xr,r=xr,s=Fn,o=Sr,a=kn,l=Si,u=on.DEFAULT_ANISOTROPY,f=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Ws(),this.name="",this.source=new a_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mf:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mf:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Y0;on.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,n=0,i=0,r=1){wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],c=l[8],h=l[1],p=l[5],_=l[9],y=l[2],g=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(c-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(c+y)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(u+1)/2,x=(p+1)/2,U=(d+1)/2,A=(f+h)/4,C=(c+y)/4,I=(_+g)/4;return m>x&&m>U?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=A/i,s=C/i):x>U?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=I/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=C/s,r=I/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-_)*(g-_)+(c-y)*(c-y)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(c-y)/v,this.z=(h-f)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pS extends Fr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new on(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new a_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends pS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class l_ extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mS extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],c=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=c;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(c!==y||l!==h||u!==p||f!==_){let g=1-a;const d=l*h+u*p+f*_+c*y,v=d>=0?1:-1,m=1-d*d;if(m>Number.EPSILON){const U=Math.sqrt(m),A=Math.atan2(U,d*v);g=Math.sin(g*A)/U,a=Math.sin(a*A)/U}const x=a*v;if(l=l*g+h*x,u=u*g+p*x,f=f*g+_*x,c=c*g+y*x,g===1-a){const U=1/Math.sqrt(l*l+u*u+f*f+c*c);l*=U,u*=U,f*=U,c*=U}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=c}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],c=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+f*c+l*p-u*h,e[n+1]=l*_+f*h+u*c-a*p,e[n+2]=u*_+f*p+a*h-l*c,e[n+3]=f*_-a*c-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),c=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*f*c+u*p*_,this._y=u*p*c-h*f*_,this._z=u*f*_+h*p*c,this._w=u*f*c-h*p*_;break;case"YXZ":this._x=h*f*c+u*p*_,this._y=u*p*c-h*f*_,this._z=u*f*_-h*p*c,this._w=u*f*c+h*p*_;break;case"ZXY":this._x=h*f*c-u*p*_,this._y=u*p*c+h*f*_,this._z=u*f*_+h*p*c,this._w=u*f*c-h*p*_;break;case"ZYX":this._x=h*f*c-u*p*_,this._y=u*p*c+h*f*_,this._z=u*f*_-h*p*c,this._w=u*f*c+h*p*_;break;case"YZX":this._x=h*f*c+u*p*_,this._y=u*p*c+h*f*_,this._z=u*f*_-h*p*c,this._w=u*f*c-h*p*_;break;case"XZY":this._x=h*f*c-u*p*_,this._y=u*p*c-h*f*_,this._z=u*f*_+h*p*c,this._w=u*f*c+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],c=n[10],h=i+a+c;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>c){const p=2*Math.sqrt(1+i-a-c);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>c){const p=2*Math.sqrt(1+a-i-c);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+c-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),c=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*c+this._w*h,this._x=i*c+this._x*h,this._y=r*c+this._y*h,this._z=s*c+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),c=2*(s*i-o*n);return this.x=n+l*u+o*c-a*f,this.y=i+l*f+a*u-s*c,this.z=r+l*c+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xu.copy(this).projectOnVector(e),this.sub(Xu)}reflect(e){return this.sub(Xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xu=new B,bp=new Ir;class Qo{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(s,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sa.copy(i.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Ma.subVectors(this.max,io),Hr.subVectors(e.a,io),Gr.subVectors(e.b,io),Wr.subVectors(e.c,io),Ai.subVectors(Gr,Hr),Ci.subVectors(Wr,Gr),rr.subVectors(Hr,Wr);let n=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-rr.z,rr.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,rr.z,0,-rr.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-rr.y,rr.x,0];return!ju(n,Hr,Gr,Wr,Ma)||(n=[1,0,0,0,1,0,0,0,1],!ju(n,Hr,Gr,Wr,Ma))?!1:(Ea.crossVectors(Ai,Ci),n=[Ea.x,Ea.y,Ea.z],ju(n,Hr,Gr,Wr,Ma))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new B,new B,new B,new B,new B,new B,new B,new B],bn=new B,Sa=new Qo,Hr=new B,Gr=new B,Wr=new B,Ai=new B,Ci=new B,rr=new B,io=new B,Ma=new B,Ea=new B,sr=new B;function ju(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){sr.fromArray(t,s);const a=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),u=n.dot(sr),f=i.dot(sr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const gS=new Qo,ro=new B,Yu=new B;class Kh{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const n=ro.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ro,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(Yu)),this.expandByPoint(ro.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new B,qu=new B,Ta=new B,Ri=new B,$u=new B,wa=new B,Ku=new B;class u_{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){qu.copy(e).add(n).multiplyScalar(.5),Ta.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub(qu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ta),a=Ri.dot(this.direction),l=-Ri.dot(Ta),u=Ri.lengthSq(),f=Math.abs(1-o*o);let c,h,p,_;if(f>0)if(c=o*l-a,h=o*a-l,_=s*f,c>=0)if(h>=-_)if(h<=_){const y=1/f;c*=y,h*=y,p=c*(c+o*h+2*a)+h*(o*c+h+2*l)+u}else h=s,c=Math.max(0,-(o*h+a)),p=-c*c+h*(h+2*l)+u;else h=-s,c=Math.max(0,-(o*h+a)),p=-c*c+h*(h+2*l)+u;else h<=-_?(c=Math.max(0,-(-o*s+a)),h=c>0?-s:Math.min(Math.max(-s,-l),s),p=-c*c+h*(h+2*l)+u):h<=_?(c=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(c=Math.max(0,-(o*s+a)),h=c>0?s:Math.min(Math.max(-s,-l),s),p=-c*c+h*(h+2*l)+u);else h=o>0?-s:s,c=Math.max(0,-(o*h+a)),p=-c*c+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(qu).addScaledVector(Ta,h),p}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,c=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),c>=0?(a=(e.min.z-h.z)*c,l=(e.max.z-h.z)*c):(a=(e.max.z-h.z)*c,l=(e.min.z-h.z)*c),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){$u.subVectors(n,e),wa.subVectors(i,e),Ku.crossVectors($u,wa);let o=this.direction.dot(Ku),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(wa.crossVectors(Ri,wa));if(l<0)return null;const u=a*this.direction.dot($u.cross(Ri));if(u<0||l+u>o)return null;const f=-a*Ri.dot(Ku);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,u,f,c,h,p,_,y,g){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,c,h,p,_,y,g)}set(e,n,i,r,s,o,a,l,u,f,c,h,p,_,y,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=f,d[10]=c,d[14]=h,d[3]=p,d[7]=_,d[11]=y,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*c,_=a*f,y=a*c;n[0]=l*f,n[4]=-l*c,n[8]=u,n[1]=p+_*u,n[5]=h-y*u,n[9]=-a*l,n[2]=y-h*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*c,_=u*f,y=u*c;n[0]=h+y*a,n[4]=_*a-p,n[8]=o*u,n[1]=o*c,n[5]=o*f,n[9]=-a,n[2]=p*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*c,_=u*f,y=u*c;n[0]=h-y*a,n[4]=-o*c,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*c,_=a*f,y=a*c;n[0]=l*f,n[4]=_*u-p,n[8]=h*u+y,n[1]=l*c,n[5]=y*u+h,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*f,n[4]=y-h*c,n[8]=_*c+p,n[1]=c,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*c+_,n[10]=h-y*c}else if(e.order==="XZY"){const h=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*f,n[4]=-c,n[8]=u*f,n[1]=h*c+y,n[5]=o*f,n[9]=p*c-_,n[2]=_*c-p,n[6]=a*f,n[10]=y*c+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_S,e,vS)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Pi.crossVectors(i,un),Pi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Pi.crossVectors(i,un)),Pi.normalize(),Aa.crossVectors(un,Pi),r[0]=Pi.x,r[4]=Aa.x,r[8]=un.x,r[1]=Pi.y,r[5]=Aa.y,r[9]=un.y,r[2]=Pi.z,r[6]=Aa.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],c=i[5],h=i[9],p=i[13],_=i[2],y=i[6],g=i[10],d=i[14],v=i[3],m=i[7],x=i[11],U=i[15],A=r[0],C=r[4],I=r[8],E=r[12],M=r[1],F=r[5],G=r[9],j=r[13],Q=r[2],re=r[6],ee=r[10],$=r[14],L=r[3],J=r[7],se=r[11],pe=r[15];return s[0]=o*A+a*M+l*Q+u*L,s[4]=o*C+a*F+l*re+u*J,s[8]=o*I+a*G+l*ee+u*se,s[12]=o*E+a*j+l*$+u*pe,s[1]=f*A+c*M+h*Q+p*L,s[5]=f*C+c*F+h*re+p*J,s[9]=f*I+c*G+h*ee+p*se,s[13]=f*E+c*j+h*$+p*pe,s[2]=_*A+y*M+g*Q+d*L,s[6]=_*C+y*F+g*re+d*J,s[10]=_*I+y*G+g*ee+d*se,s[14]=_*E+y*j+g*$+d*pe,s[3]=v*A+m*M+x*Q+U*L,s[7]=v*C+m*F+x*re+U*J,s[11]=v*I+m*G+x*ee+U*se,s[15]=v*E+m*j+x*$+U*pe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],c=e[6],h=e[10],p=e[14],_=e[3],y=e[7],g=e[11],d=e[15];return _*(+s*l*c-r*u*c-s*a*h+i*u*h+r*a*p-i*l*p)+y*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*f-s*l*f)+g*(+n*u*c-n*a*p-s*o*c+i*o*p+s*a*f-i*u*f)+d*(-r*a*f-n*l*c+n*a*h+r*o*c-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=e[9],h=e[10],p=e[11],_=e[12],y=e[13],g=e[14],d=e[15],v=c*g*u-y*h*u+y*l*p-a*g*p-c*l*d+a*h*d,m=_*h*u-f*g*u-_*l*p+o*g*p+f*l*d-o*h*d,x=f*y*u-_*c*u+_*a*p-o*y*p-f*a*d+o*c*d,U=_*c*l-f*y*l-_*a*h+o*y*h+f*a*g-o*c*g,A=n*v+i*m+r*x+s*U;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(y*h*s-c*g*s-y*r*p+i*g*p+c*r*d-i*h*d)*C,e[2]=(a*g*s-y*l*s+y*r*u-i*g*u-a*r*d+i*l*d)*C,e[3]=(c*l*s-a*h*s-c*r*u+i*h*u+a*r*p-i*l*p)*C,e[4]=m*C,e[5]=(f*g*s-_*h*s+_*r*p-n*g*p-f*r*d+n*h*d)*C,e[6]=(_*l*s-o*g*s-_*r*u+n*g*u+o*r*d-n*l*d)*C,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*p+n*l*p)*C,e[8]=x*C,e[9]=(_*c*s-f*y*s-_*i*p+n*y*p+f*i*d-n*c*d)*C,e[10]=(o*y*s-_*a*s+_*i*u-n*y*u-o*i*d+n*a*d)*C,e[11]=(f*a*s-o*c*s-f*i*u+n*c*u+o*i*p-n*a*p)*C,e[12]=U*C,e[13]=(f*y*r-_*c*r+_*i*h-n*y*h-f*i*g+n*c*g)*C,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*g-n*a*g)*C,e[15]=(o*c*r-f*a*r+f*i*l-n*c*l-o*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,c=a+a,h=s*u,p=s*f,_=s*c,y=o*f,g=o*c,d=a*c,v=l*u,m=l*f,x=l*c,U=i.x,A=i.y,C=i.z;return r[0]=(1-(y+d))*U,r[1]=(p+x)*U,r[2]=(_-m)*U,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(h+d))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(_+m)*C,r[9]=(g-v)*C,r[10]=(1-(h+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),a=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const u=1/s,f=1/o,c=1/a;return Ln.elements[0]*=u,Ln.elements[1]*=u,Ln.elements[2]*=u,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=c,Ln.elements[9]*=c,Ln.elements[10]*=c,n.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=pi){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),c=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(a===pi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Bl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=pi){const l=this.elements,u=1/(n-e),f=1/(i-r),c=1/(o-s),h=(n+e)*u,p=(i+r)*f;let _,y;if(a===pi)_=(o+s)*c,y=-2*c;else if(a===Bl)_=s*c,y=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new B,Ln=new gt,_S=new B(0,0,0),vS=new B(1,1,1),Pi=new B,Aa=new B,un=new B,Lp=new gt,Dp=new Ir;class Jn{constructor(e=0,n=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],c=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-c,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Lp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Dp.setFromEuler(this),this.setFromQuaternion(Dp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class c_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yS=0;const Ip=new B,jr=new Ir,ii=new gt,Ca=new B,so=new B,xS=new B,SS=new Ir,Np=new B(1,0,0),Up=new B(0,1,0),Op=new B(0,0,1),Fp={type:"added"},MS={type:"removed"},Yr={type:"childadded",child:null},Zu={type:"childremoved",child:null};class Gt extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new B,n=new Jn,i=new Ir,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new ze}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new c_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Np,e)}rotateY(e){return this.rotateOnAxis(Up,e)}rotateZ(e){return this.rotateOnAxis(Op,e)}translateOnAxis(e,n){return Ip.copy(e).applyQuaternion(this.quaternion),this.position.add(Ip.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Np,e)}translateY(e){return this.translateOnAxis(Up,e)}translateZ(e){return this.translateOnAxis(Op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ca.copy(e):Ca.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(so,Ca,this.up):ii.lookAt(Ca,so,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(ii),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fp),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(MS),Zu.child=e,this.dispatchEvent(Zu),Zu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fp),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,xS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,SS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const c=l[u];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),c=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),c.length>0&&(i.shapes=c),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new B(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new B,ri=new B,Ju=new B,si=new B,qr=new B,$r=new B,kp=new B,Qu=new B,ec=new B,tc=new B;class qn{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ri.subVectors(i,n),Ju.subVectors(e,n);const o=Dn.dot(Dn),a=Dn.dot(ri),l=Dn.dot(Ju),u=ri.dot(ri),f=ri.dot(Ju),c=o*u-a*a;if(c===0)return s.set(0,0,0),null;const h=1/c,p=(u*l-a*f)*h,_=(o*f-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ri.subVectors(e,n),Dn.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Dn.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,i),$r.subVectors(s,i),Qu.subVectors(e,i);const l=qr.dot(Qu),u=$r.dot(Qu);if(l<=0&&u<=0)return n.copy(i);ec.subVectors(e,r);const f=qr.dot(ec),c=$r.dot(ec);if(f>=0&&c<=f)return n.copy(r);const h=l*c-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(qr,o);tc.subVectors(e,s);const p=qr.dot(tc),_=$r.dot(tc);if(_>=0&&p<=_)return n.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector($r,a);const g=f*_-p*c;if(g<=0&&c-f>=0&&p-_>=0)return kp.subVectors(s,r),a=(c-f)/(c-f+(p-_)),n.copy(r).addScaledVector(kp,a);const d=1/(g+y+h);return o=y*d,a=h*d,n.copy(i).addScaledVector(qr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const f_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function nc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=oS(e,1),n=Ut(n,0,1),i=Ut(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=nc(o,s,e+1/3),this.g=nc(o,s,e),this.b=nc(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=f_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}copyLinearToSRGB(e){return this.r=Gu(e.r),this.g=Gu(e.g),this.b=Gu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Qe.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Ut(Vt.r*255,0,255))*65536+Math.round(Ut(Vt.g*255,0,255))*256+Math.round(Ut(Vt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=f<=.5?c/(o+a):c/(2-o-a),o){case i:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-i)/c+2;break;case s:l=(i-r)/c+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Un){Qe.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(Ra);const i=Vu(bi.h,Ra.h,n),r=Vu(bi.s,Ra.s,n),s=Vu(bi.l,Ra.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new qe;qe.NAMES=f_;let ES=0;class ea extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=ws,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ff,this.blendDst=hf,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ol,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ff&&(i.blendSrc=this.blendSrc),this.blendDst!==hf&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ol&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class h_ extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=j0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new B,Pa=new ue;class Zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Mo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Pa.fromBufferAttribute(this,n),Pa.applyMatrix3(e),this.setXY(n,Pa.x,Pa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=to(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=to(n,this.array)),n}setX(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=to(n,this.array)),n}setY(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=to(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=to(n,this.array)),n}setW(e,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Kt(n,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wp&&(e.usage=this.usage),e}}class d_ extends Zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class p_ extends Zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wn extends Zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let TS=0;const vn=new gt,ic=new Gt,Kr=new B,cn=new Qo,oo=new Qo,Pt=new B;class Ei extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o_(e)?p_:d_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return ic.lookAt(e),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new wn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(cn.min,oo.min),cn.expandByPoint(Pt),Pt.addVectors(cn.max,oo.max),cn.expandByPoint(Pt)):(cn.expandByPoint(oo.min),cn.expandByPoint(oo.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Pt.fromBufferAttribute(a,u),l&&(Kr.fromBufferAttribute(e,u),Pt.add(Kr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new B,l[I]=new B;const u=new B,f=new B,c=new B,h=new ue,p=new ue,_=new ue,y=new B,g=new B;function d(I,E,M){u.fromBufferAttribute(i,I),f.fromBufferAttribute(i,E),c.fromBufferAttribute(i,M),h.fromBufferAttribute(s,I),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,M),f.sub(u),c.sub(u),p.sub(h),_.sub(h);const F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(c,-p.y).multiplyScalar(F),g.copy(c).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(F),a[I].add(y),a[E].add(y),a[M].add(y),l[I].add(g),l[E].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let I=0,E=v.length;I<E;++I){const M=v[I],F=M.start,G=M.count;for(let j=F,Q=F+G;j<Q;j+=3)d(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const m=new B,x=new B,U=new B,A=new B;function C(I){U.fromBufferAttribute(r,I),A.copy(U);const E=a[I];m.copy(E),m.sub(U.multiplyScalar(U.dot(E))).normalize(),x.crossVectors(A,E);const F=x.dot(l[I])<0?-1:1;o.setXYZW(I,m.x,m.y,m.z,F)}for(let I=0,E=v.length;I<E;++I){const M=v[I],F=M.start,G=M.count;for(let j=F,Q=F+G;j<Q;j+=3)C(e.getX(j+0)),C(e.getX(j+1)),C(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,f=new B,c=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),a.add(f),l.add(f),u.add(f),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,c=a.normalized,h=new u.constructor(l.length*f);let p=0,_=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let d=0;d<f;d++)h[_++]=u[p++]}return new Zn(h,f,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ei,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,c=u.length;f<c;f++){const h=u[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let c=0,h=u.length;c<h;c++){const p=u[c];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],c=s[u];for(let h=0,p=c.length;h<p;h++)f.push(c[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zp=new gt,or=new u_,ba=new Kh,Bp=new B,Zr=new B,Jr=new B,Qr=new B,rc=new B,La=new B,Da=new ue,Ia=new ue,Na=new ue,Vp=new B,Hp=new B,Gp=new B,Ua=new B,Oa=new B;class zn extends Gt{constructor(e=new Ei,n=new h_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){La.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],c=s[l];f!==0&&(rc.fromBufferAttribute(c,e),o?La.addScaledVector(rc,f):La.addScaledVector(rc.sub(n),f))}n.add(La)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(ba.containsPoint(or.origin)===!1&&(or.intersectSphere(ba,Bp)===null||or.origin.distanceToSquared(Bp)>(e.far-e.near)**2))&&(zp.copy(s).invert(),or.copy(e.ray).applyMatrix4(zp),!(i.boundingBox!==null&&or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,or)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,c=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const g=h[_],d=o[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,U=m;x<U;x+=3){const A=a.getX(x),C=a.getX(x+1),I=a.getX(x+2);r=Fa(this,d,e,i,u,f,c,A,C,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=_,d=y;g<d;g+=3){const v=a.getX(g),m=a.getX(g+1),x=a.getX(g+2);r=Fa(this,o,e,i,u,f,c,v,m,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const g=h[_],d=o[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,U=m;x<U;x+=3){const A=x,C=x+1,I=x+2;r=Fa(this,d,e,i,u,f,c,A,C,I),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=_,d=y;g<d;g+=3){const v=g,m=g+1,x=g+2;r=Fa(this,o,e,i,u,f,c,v,m,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function wS(t,e,n,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xi,a),l===null)return null;Oa.copy(a),Oa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Oa);return u<n.near||u>n.far?null:{distance:u,point:Oa.clone(),object:t}}function Fa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Zr),t.getVertexPosition(l,Jr),t.getVertexPosition(u,Qr);const f=wS(t,e,n,i,Zr,Jr,Qr,Ua);if(f){r&&(Da.fromBufferAttribute(r,a),Ia.fromBufferAttribute(r,l),Na.fromBufferAttribute(r,u),f.uv=qn.getInterpolation(Ua,Zr,Jr,Qr,Da,Ia,Na,new ue)),s&&(Da.fromBufferAttribute(s,a),Ia.fromBufferAttribute(s,l),Na.fromBufferAttribute(s,u),f.uv1=qn.getInterpolation(Ua,Zr,Jr,Qr,Da,Ia,Na,new ue)),o&&(Vp.fromBufferAttribute(o,a),Hp.fromBufferAttribute(o,l),Gp.fromBufferAttribute(o,u),f.normal=qn.getInterpolation(Ua,Zr,Jr,Qr,Vp,Hp,Gp,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const c={a,b:l,c:u,normal:new B,materialIndex:0};qn.getNormal(Zr,Jr,Qr,c.normal),f.face=c}return f}class Xs extends Ei{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],c=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wn(u,3)),this.setAttribute("normal",new wn(f,3)),this.setAttribute("uv",new wn(c,2));function _(y,g,d,v,m,x,U,A,C,I,E){const M=x/C,F=U/I,G=x/2,j=U/2,Q=A/2,re=C+1,ee=I+1;let $=0,L=0;const J=new B;for(let se=0;se<ee;se++){const pe=se*F-j;for(let we=0;we<re;we++){const Be=we*M-G;J[y]=Be*v,J[g]=pe*m,J[d]=Q,u.push(J.x,J.y,J.z),J[y]=0,J[g]=0,J[d]=A>0?1:-1,f.push(J.x,J.y,J.z),c.push(we/C),c.push(1-se/I),$+=1}}for(let se=0;se<I;se++)for(let pe=0;pe<C;pe++){const we=h+pe+re*se,Be=h+pe+re*(se+1),O=h+(pe+1)+re*(se+1),N=h+(pe+1)+re*se;l.push(we,Be,N),l.push(Be,O,N),L+=6}a.addGroup(p,L,E),p+=L,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Bs(t[n]);for(const r in i)e[r]=i[r]}return e}function AS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function m_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const CS={clone:Bs,merge:Xt};var RS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RS,this.fragmentShader=PS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=AS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class g_ extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new B,Wp=new ue,Xp=new ue;class Sn extends g_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gf*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,n){return this.getViewBounds(e,Wp,Xp),n.subVectors(Xp,Wp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ul*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const es=-90,ts=1;class bS extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(es,ts,e,n);r.layers=this.layers,this.add(r);const s=new Sn(es,ts,e,n);s.layers=this.layers,this.add(s);const o=new Sn(es,ts,e,n);o.layers=this.layers,this.add(o);const a=new Sn(es,ts,e,n);a.layers=this.layers,this.add(a);const l=new Sn(es,ts,e,n);l.layers=this.layers,this.add(l);const u=new Sn(es,ts,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,c=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(c,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class __ extends on{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Os,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LS extends Dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new __(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xs(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:Bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:qi});s.uniforms.tEquirect.value=n;const o=new zn(r,s),a=n.minFilter;return n.minFilter===Sr&&(n.minFilter=Fn),new bS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const sc=new B,DS=new B,IS=new ze;class Ni{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=sc.subVectors(i,n).cross(DS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(sc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||IS.getNormalMatrix(e),r=this.coplanarPoint(sc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Kh,ka=new B;class Zh{constructor(e=new Ni,n=new Ni,i=new Ni,r=new Ni,s=new Ni,o=new Ni){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],c=r[6],h=r[7],p=r[8],_=r[9],y=r[10],g=r[11],d=r[12],v=r[13],m=r[14],x=r[15];if(i[0].setComponents(l-s,h-u,g-p,x-d).normalize(),i[1].setComponents(l+s,h+u,g+p,x+d).normalize(),i[2].setComponents(l+o,h+f,g+_,x+v).normalize(),i[3].setComponents(l-o,h-f,g-_,x-v).normalize(),i[4].setComponents(l-a,h-c,g-y,x-m).normalize(),n===pi)i[5].setComponents(l+a,h+c,g+y,x+m).normalize();else if(n===Bl)i[5].setComponents(a,c,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ka.x=r.normal.x>0?e.max.x:e.min.x,ka.y=r.normal.y>0?e.max.y:e.min.y,ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function v_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function NS(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,c=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,f),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:c}}function i(a,l,u){const f=l.array,c=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,a),c.count===-1&&h.length===0&&t.bufferSubData(u,0,f),h.length!==0){for(let p=0,_=h.length;p<_;p++){const y=h[p];t.bufferSubData(u,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}c.count!==-1&&(t.bufferSubData(u,c.offset*f.BYTES_PER_ELEMENT,f,c.offset,c.count),c.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class au extends Ei{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,c=e/a,h=n/l,p=[],_=[],y=[],g=[];for(let d=0;d<f;d++){const v=d*h-o;for(let m=0;m<u;m++){const x=m*c-s;_.push(x,-v,0),y.push(0,0,1),g.push(m/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const m=v+u*d,x=v+u*(d+1),U=v+1+u*(d+1),A=v+1+u*d;p.push(m,x,A),p.push(x,U,A)}this.setIndex(p),this.setAttribute("position",new wn(_,3)),this.setAttribute("normal",new wn(y,3)),this.setAttribute("uv",new wn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.width,e.height,e.widthSegments,e.heightSegments)}}var US=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OS=`#ifdef USE_ALPHAHASH
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
#endif`,FS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VS=`#ifdef USE_AOMAP
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
#endif`,HS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GS=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,WS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qS=`#ifdef USE_IRIDESCENCE
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
#endif`,$S=`#ifdef USE_BUMPMAP
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
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rM=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,sM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oM=`vec3 transformedNormal = objectNormal;
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
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fM="gl_FragColor = linearToOutputTexel( gl_FragColor );",hM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dM=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,SM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MM=`#ifdef USE_GRADIENTMAP
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
}`,EM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AM=`uniform bool receiveShadow;
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
#endif`,CM=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,RM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,IM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NM=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WM=`#if defined( USE_POINTS_UV )
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
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
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
#endif`,ZM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i1=`#ifdef USE_NORMALMAP
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
#endif`,r1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,c1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,d1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,y1=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,x1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S1=`#ifdef USE_SKINNING
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
#endif`,M1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,E1=`#ifdef USE_SKINNING
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
#endif`,T1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R1=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P1=`#ifdef USE_TRANSMISSION
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`#include <common>
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
}`,V1=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H1=`#define DISTANCE
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
}`,G1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`uniform float scale;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,q1=`#include <common>
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
}`,$1=`uniform vec3 diffuse;
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
}`,K1=`#define LAMBERT
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
}`,Z1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,J1=`#define MATCAP
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
}`,Q1=`#define MATCAP
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
}`,eE=`#define NORMAL
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
}`,tE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nE=`#define PHONG
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
}`,iE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,rE=`#define STANDARD
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
}`,sE=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,oE=`#define TOON
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
}`,aE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,lE=`uniform float size;
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
}`,uE=`uniform vec3 diffuse;
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
}`,cE=`#include <common>
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
}`,fE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,hE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,dE=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:US,alphahash_pars_fragment:OS,alphamap_fragment:FS,alphamap_pars_fragment:kS,alphatest_fragment:zS,alphatest_pars_fragment:BS,aomap_fragment:VS,aomap_pars_fragment:HS,batching_pars_vertex:GS,batching_vertex:WS,begin_vertex:XS,beginnormal_vertex:jS,bsdfs:YS,iridescence_fragment:qS,bumpmap_pars_fragment:$S,clipping_planes_fragment:KS,clipping_planes_pars_fragment:ZS,clipping_planes_pars_vertex:JS,clipping_planes_vertex:QS,color_fragment:eM,color_pars_fragment:tM,color_pars_vertex:nM,color_vertex:iM,common:rM,cube_uv_reflection_fragment:sM,defaultnormal_vertex:oM,displacementmap_pars_vertex:aM,displacementmap_vertex:lM,emissivemap_fragment:uM,emissivemap_pars_fragment:cM,colorspace_fragment:fM,colorspace_pars_fragment:hM,envmap_fragment:dM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:gM,envmap_physical_pars_fragment:CM,envmap_vertex:_M,fog_vertex:vM,fog_pars_vertex:yM,fog_fragment:xM,fog_pars_fragment:SM,gradientmap_pars_fragment:MM,lightmap_pars_fragment:EM,lights_lambert_fragment:TM,lights_lambert_pars_fragment:wM,lights_pars_begin:AM,lights_toon_fragment:RM,lights_toon_pars_fragment:PM,lights_phong_fragment:bM,lights_phong_pars_fragment:LM,lights_physical_fragment:DM,lights_physical_pars_fragment:IM,lights_fragment_begin:NM,lights_fragment_maps:UM,lights_fragment_end:OM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:kM,logdepthbuf_pars_vertex:zM,logdepthbuf_vertex:BM,map_fragment:VM,map_pars_fragment:HM,map_particle_fragment:GM,map_particle_pars_fragment:WM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:jM,morphinstance_vertex:YM,morphcolor_vertex:qM,morphnormal_vertex:$M,morphtarget_pars_vertex:KM,morphtarget_vertex:ZM,normal_fragment_begin:JM,normal_fragment_maps:QM,normal_pars_fragment:e1,normal_pars_vertex:t1,normal_vertex:n1,normalmap_pars_fragment:i1,clearcoat_normal_fragment_begin:r1,clearcoat_normal_fragment_maps:s1,clearcoat_pars_fragment:o1,iridescence_pars_fragment:a1,opaque_fragment:l1,packing:u1,premultiplied_alpha_fragment:c1,project_vertex:f1,dithering_fragment:h1,dithering_pars_fragment:d1,roughnessmap_fragment:p1,roughnessmap_pars_fragment:m1,shadowmap_pars_fragment:g1,shadowmap_pars_vertex:_1,shadowmap_vertex:v1,shadowmask_pars_fragment:y1,skinbase_vertex:x1,skinning_pars_vertex:S1,skinning_vertex:M1,skinnormal_vertex:E1,specularmap_fragment:T1,specularmap_pars_fragment:w1,tonemapping_fragment:A1,tonemapping_pars_fragment:C1,transmission_fragment:R1,transmission_pars_fragment:P1,uv_pars_fragment:b1,uv_pars_vertex:L1,uv_vertex:D1,worldpos_vertex:I1,background_vert:N1,background_frag:U1,backgroundCube_vert:O1,backgroundCube_frag:F1,cube_vert:k1,cube_frag:z1,depth_vert:B1,depth_frag:V1,distanceRGBA_vert:H1,distanceRGBA_frag:G1,equirect_vert:W1,equirect_frag:X1,linedashed_vert:j1,linedashed_frag:Y1,meshbasic_vert:q1,meshbasic_frag:$1,meshlambert_vert:K1,meshlambert_frag:Z1,meshmatcap_vert:J1,meshmatcap_frag:Q1,meshnormal_vert:eE,meshnormal_frag:tE,meshphong_vert:nE,meshphong_frag:iE,meshphysical_vert:rE,meshphysical_frag:sE,meshtoon_vert:oE,meshtoon_frag:aE,points_vert:lE,points_frag:uE,shadow_vert:cE,shadow_frag:fE,sprite_vert:hE,sprite_frag:dE},Me={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},jn={basic:{uniforms:Xt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Xt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new qe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Xt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Xt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Xt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Xt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Xt([Me.points,Me.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Xt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Xt([Me.common,Me.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Xt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Xt([Me.sprite,Me.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Xt([Me.common,Me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Xt([Me.lights,Me.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};jn.physical={uniforms:Xt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const za={r:0,b:0,g:0},lr=new Jn,pE=new gt;function mE(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,f,c=null,h=0,p=null;function _(v){let m=v.isScene===!0?v.background:null;return m&&m.isTexture&&(m=(v.backgroundBlurriness>0?n:e).get(m)),m}function y(v){let m=!1;const x=_(v);x===null?d(a,l):x&&x.isColor&&(d(x,1),m=!0);const U=t.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,m){const x=_(m);x&&(x.isCubeTexture||x.mapping===su)?(f===void 0&&(f=new zn(new Xs(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Bs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(U,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),lr.copy(m.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(pE.makeRotationFromEuler(lr)),f.material.toneMapped=Qe.getTransfer(x.colorSpace)!==rt,(c!==x||h!==x.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,c=x,h=x.version,p=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new zn(new au(2,2),new Ji({name:"BackgroundMaterial",uniforms:Bs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(x.colorSpace)!==rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||h!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,c=x,h=x.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,m){v.getRGB(za,m_(t)),i.buffers.color.setClear(za.r,za.g,za.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(v,m=1){a.set(v),l=m,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:y,addToRenderList:g}}function gE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,F,G,j,Q){let re=!1;const ee=c(j,G,F);s!==ee&&(s=ee,u(s.object)),re=p(M,j,G,Q),re&&_(M,j,G,Q),Q!==null&&e.update(Q,t.ELEMENT_ARRAY_BUFFER),(re||o)&&(o=!1,x(M,F,G,j),Q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function f(M){return t.deleteVertexArray(M)}function c(M,F,G){const j=G.wireframe===!0;let Q=i[M.id];Q===void 0&&(Q={},i[M.id]=Q);let re=Q[F.id];re===void 0&&(re={},Q[F.id]=re);let ee=re[j];return ee===void 0&&(ee=h(l()),re[j]=ee),ee}function h(M){const F=[],G=[],j=[];for(let Q=0;Q<n;Q++)F[Q]=0,G[Q]=0,j[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:G,attributeDivisors:j,object:M,attributes:{},index:null}}function p(M,F,G,j){const Q=s.attributes,re=F.attributes;let ee=0;const $=G.getAttributes();for(const L in $)if($[L].location>=0){const se=Q[L];let pe=re[L];if(pe===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),se===void 0||se.attribute!==pe||pe&&se.data!==pe.data)return!0;ee++}return s.attributesNum!==ee||s.index!==j}function _(M,F,G,j){const Q={},re=F.attributes;let ee=0;const $=G.getAttributes();for(const L in $)if($[L].location>=0){let se=re[L];se===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(se=M.instanceColor));const pe={};pe.attribute=se,se&&se.data&&(pe.data=se.data),Q[L]=pe,ee++}s.attributes=Q,s.attributesNum=ee,s.index=j}function y(){const M=s.newAttributes;for(let F=0,G=M.length;F<G;F++)M[F]=0}function g(M){d(M,0)}function d(M,F){const G=s.newAttributes,j=s.enabledAttributes,Q=s.attributeDivisors;G[M]=1,j[M]===0&&(t.enableVertexAttribArray(M),j[M]=1),Q[M]!==F&&(t.vertexAttribDivisor(M,F),Q[M]=F)}function v(){const M=s.newAttributes,F=s.enabledAttributes;for(let G=0,j=F.length;G<j;G++)F[G]!==M[G]&&(t.disableVertexAttribArray(G),F[G]=0)}function m(M,F,G,j,Q,re,ee){ee===!0?t.vertexAttribIPointer(M,F,G,Q,re):t.vertexAttribPointer(M,F,G,j,Q,re)}function x(M,F,G,j){y();const Q=j.attributes,re=G.getAttributes(),ee=F.defaultAttributeValues;for(const $ in re){const L=re[$];if(L.location>=0){let J=Q[$];if(J===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const se=J.normalized,pe=J.itemSize,we=e.get(J);if(we===void 0)continue;const Be=we.buffer,O=we.type,N=we.bytesPerElement,b=O===t.INT||O===t.UNSIGNED_INT||J.gpuType===Gh;if(J.isInterleavedBufferAttribute){const w=J.data,K=w.stride,le=J.offset;if(w.isInstancedInterleavedBuffer){for(let Y=0;Y<L.locationSize;Y++)d(L.location+Y,w.meshPerAttribute);M.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=w.meshPerAttribute*w.count)}else for(let Y=0;Y<L.locationSize;Y++)g(L.location+Y);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Y=0;Y<L.locationSize;Y++)m(L.location+Y,pe/L.locationSize,O,se,K*N,(le+pe/L.locationSize*Y)*N,b)}else{if(J.isInstancedBufferAttribute){for(let w=0;w<L.locationSize;w++)d(L.location+w,J.meshPerAttribute);M.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let w=0;w<L.locationSize;w++)g(L.location+w);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let w=0;w<L.locationSize;w++)m(L.location+w,pe/L.locationSize,O,se,pe*N,pe/L.locationSize*w*N,b)}}else if(ee!==void 0){const se=ee[$];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(L.location,se);break;case 3:t.vertexAttrib3fv(L.location,se);break;case 4:t.vertexAttrib4fv(L.location,se);break;default:t.vertexAttrib1fv(L.location,se)}}}}v()}function U(){I();for(const M in i){const F=i[M];for(const G in F){const j=F[G];for(const Q in j)f(j[Q].object),delete j[Q];delete F[G]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const F=i[M.id];for(const G in F){const j=F[G];for(const Q in j)f(j[Q].object),delete j[Q];delete F[G]}delete i[M.id]}function C(M){for(const F in i){const G=i[F];if(G[M.id]===void 0)continue;const j=G[M.id];for(const Q in j)f(j[Q].object),delete j[Q];delete G[M.id]}}function I(){E(),o=!0,s!==r&&(s=r,u(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function _E(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,c){c!==0&&(t.drawArraysInstanced(i,u,f,c),n.update(f,i,c))}function a(u,f,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,c);let p=0;for(let _=0;_<c;_++)p+=f[_];n.update(p,i,1)}function l(u,f,c,h){if(c===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],f[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,c);let _=0;for(let y=0;y<c;y++)_+=f[y];for(let y=0;y<h.length;y++)n.update(_,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==kn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Si&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==di&&!C)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const c=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,U=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:m,vertexTextures:x,maxSamples:U}}function yE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ni,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,h){const p=c.length!==0||h||i!==0||r;return r=h,i=c.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,h){n=f(c,h,0)},this.setState=function(c,h,p){const _=c.clippingPlanes,y=c.clipIntersection,g=c.clipShadows,d=t.get(c);if(!r||_===null||_.length===0||s&&!g)s?f(null):u();else{const v=s?0:i,m=v*4;let x=d.clippingState||null;l.value=x,x=f(_,h,m,p);for(let U=0;U!==m;++U)x[U]=n[U];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(c,h,p,_){const y=c!==null?c.length:0;let g=null;if(y!==0){if(g=l.value,_!==!0||g===null){const d=p+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<d)&&(g=new Float32Array(d));for(let m=0,x=p;m!==y;++m,x+=4)o.copy(c[m]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function xE(t){let e=new WeakMap;function n(o,a){return a===df?o.mapping=Os:a===pf&&(o.mapping=Fs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===df||a===pf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new LS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class y_ extends g_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const gs=4,jp=[.125,.215,.35,.446,.526,.582],gr=20,oc=new y_,Yp=new qe;let ac=null,lc=0,uc=0,cc=!1;const pr=(1+Math.sqrt(5))/2,ns=1/pr,qp=[new B(-pr,ns,0),new B(pr,ns,0),new B(-ns,0,pr),new B(ns,0,pr),new B(0,pr,-ns),new B(0,pr,ns),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class $p{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ac,lc,uc),this._renderer.xr.enabled=cc,e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ac=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Jo,format:kn,colorSpace:nr,depthBuffer:!1},r=Kp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SE(s)),this._blurMaterial=ME(s,e,n)}return r}_compileMaterial(e){const n=new zn(this._lodPlanes[0],e);this._renderer.compile(n,oc)}_sceneToCubeUV(e,n,i,r){const a=new Sn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,c=f.autoClear,h=f.toneMapping;f.getClearColor(Yp),f.toneMapping=$i,f.autoClear=!1;const p=new h_({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),_=new zn(new Xs,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(Yp),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const m=this._cubeSize;Ba(r,v*m,d>2?m:0,m,m),f.setRenderTarget(r),y&&f.render(_,a),f.render(e,a)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=c,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Os||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ba(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,oc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qp[(r-s-1)%qp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,c=new zn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gr-1),y=s/_,g=isFinite(s)?1+Math.floor(f*y):gr;g>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${gr}`);const d=[];let v=0;for(let C=0;C<gr;++C){const I=C/y,E=Math.exp(-I*I/2);d.push(E),C===0?v+=E:C<g&&(v+=2*E)}for(let C=0;C<d.length;C++)d[C]=d[C]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:m}=this;h.dTheta.value=_,h.mipInt.value=m-i;const x=this._sizeLods[r],U=3*x*(r>m-gs?r-m+gs:0),A=4*(this._cubeSize-x);Ba(n,U,A,3*x,2*x),l.setRenderTarget(n),l.render(c,oc)}}function SE(t){const e=[],n=[],i=[];let r=t;const s=t-gs+1+jp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-gs?l=jp[o-t+gs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,c=1+u,h=[f,f,c,f,c,c,f,f,c,c,f,c],p=6,_=6,y=3,g=2,d=1,v=new Float32Array(y*_*p),m=new Float32Array(g*_*p),x=new Float32Array(d*_*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,I=A>2?0:-1,E=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];v.set(E,y*_*A),m.set(h,g*_*A);const M=[A,A,A,A,A,A];x.set(M,d*_*A)}const U=new Ei;U.setAttribute("position",new Zn(v,y)),U.setAttribute("uv",new Zn(m,g)),U.setAttribute("faceIndex",new Zn(x,d)),e.push(U),r>gs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Kp(t,e,n){const i=new Dr(t,e,n);return i.texture.mapping=su,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ba(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ME(t,e,n){const i=new Float32Array(gr),r=new B(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Zp(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Jp(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Jh(){return`

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
	`}function EE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===df||l===pf,f=l===Os||l===Fs;if(u||f){let c=e.get(a);const h=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new $p(t)),c=u?n.fromEquirectangular(a,c):n.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),c.texture;if(c!==void 0)return c.texture;{const p=a.image;return u&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new $p(t)),c=u?n.fromEquirectangular(a):n.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),a.addEventListener("dispose",s),c.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function TE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Mo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function wE(t,e,n,i){const r={},s=new WeakMap;function o(c){const h=c.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let g=0,d=y.length;g<d;g++)e.remove(y[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(c,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(c){const h=c.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=c.morphAttributes;for(const _ in p){const y=p[_];for(let g=0,d=y.length;g<d;g++)e.update(y[g],t.ARRAY_BUFFER)}}function u(c){const h=[],p=c.index,_=c.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let m=0,x=v.length;m<x;m+=3){const U=v[m+0],A=v[m+1],C=v[m+2];h.push(U,A,A,C,C,U)}}else if(_!==void 0){const v=_.array;y=_.version;for(let m=0,x=v.length/3-1;m<x;m+=3){const U=m+0,A=m+1,C=m+2;h.push(U,A,A,C,C,U)}}else return;const g=new(o_(h)?p_:d_)(h,1);g.version=y;const d=s.get(c);d&&e.remove(d),s.set(c,g)}function f(c){const h=s.get(c);if(h){const p=c.index;p!==null&&h.version<p.version&&u(c)}else u(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:f}}function AE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function u(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*o,_),n.update(p,i,_))}function f(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let d=0;d<_;d++)g+=p[d];n.update(g,i,1)}function c(h,p,_,y){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],y[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,_);let d=0;for(let v=0;v<_;v++)d+=p[v];for(let v=0;v<y.length;v++)n.update(d,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=c}function CE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RE(t,e,n){const i=new WeakMap,r=new wt;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==c){let M=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],m=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),g===!0&&(x=3);let U=a.attributes.position.count*x,A=1;U>e.maxTextureSize&&(A=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const C=new Float32Array(U*A*4*c),I=new l_(C,U,A,c);I.type=di,I.needsUpdate=!0;const E=x*4;for(let F=0;F<c;F++){const G=d[F],j=v[F],Q=m[F],re=U*A*4*F;for(let ee=0;ee<G.count;ee++){const $=ee*E;_===!0&&(r.fromBufferAttribute(G,ee),C[re+$+0]=r.x,C[re+$+1]=r.y,C[re+$+2]=r.z,C[re+$+3]=0),y===!0&&(r.fromBufferAttribute(j,ee),C[re+$+4]=r.x,C[re+$+5]=r.y,C[re+$+6]=r.z,C[re+$+7]=0),g===!0&&(r.fromBufferAttribute(Q,ee),C[re+$+8]=r.x,C[re+$+9]=r.y,C[re+$+10]=r.z,C[re+$+11]=Q.itemSize===4?r.w:1)}}h={count:c,texture:I,size:new ue(U,A)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let g=0;g<u.length;g++)_+=u[g];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function PE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,c=e.get(l,f);if(r.get(c)!==u&&(e.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return c}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class x_ extends on{constructor(e,n,i,r,s,o,a,l,u,f=As){if(f!==As&&f!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===As&&(i=Lr),i===void 0&&f===zs&&(i=ks),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const S_=new on,Qp=new x_(1,1),M_=new l_,E_=new mS,T_=new __,em=[],tm=[],nm=new Float32Array(16),im=new Float32Array(9),rm=new Float32Array(4);function js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=em[r];if(s===void 0&&(s=new Float32Array(r),em[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lu(t,e){let n=tm[e];n===void 0&&(n=new Int32Array(e),tm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function NE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;rm.set(i),t.uniformMatrix2fv(this.addr,!1,rm),Rt(n,i)}}function UE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;im.set(i),t.uniformMatrix3fv(this.addr,!1,im),Rt(n,i)}}function OE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;nm.set(i),t.uniformMatrix4fv(this.addr,!1,nm),Rt(n,i)}}function FE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function kE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function VE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function GE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function XE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Qp.compareFunction=s_,s=Qp):s=S_,n.setTexture2D(e||s,r)}function jE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||E_,r)}function YE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||T_,r)}function qE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||M_,r)}function $E(t){switch(t){case 5126:return bE;case 35664:return LE;case 35665:return DE;case 35666:return IE;case 35674:return NE;case 35675:return UE;case 35676:return OE;case 5124:case 35670:return FE;case 35667:case 35671:return kE;case 35668:case 35672:return zE;case 35669:case 35673:return BE;case 5125:return VE;case 36294:return HE;case 36295:return GE;case 36296:return WE;case 35678:case 36198:case 36298:case 36306:case 35682:return XE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return YE;case 36289:case 36303:case 36311:case 36292:return qE}}function KE(t,e){t.uniform1fv(this.addr,e)}function ZE(t,e){const n=js(e,this.size,2);t.uniform2fv(this.addr,n)}function JE(t,e){const n=js(e,this.size,3);t.uniform3fv(this.addr,n)}function QE(t,e){const n=js(e,this.size,4);t.uniform4fv(this.addr,n)}function eT(t,e){const n=js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tT(t,e){const n=js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nT(t,e){const n=js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iT(t,e){t.uniform1iv(this.addr,e)}function rT(t,e){t.uniform2iv(this.addr,e)}function sT(t,e){t.uniform3iv(this.addr,e)}function oT(t,e){t.uniform4iv(this.addr,e)}function aT(t,e){t.uniform1uiv(this.addr,e)}function lT(t,e){t.uniform2uiv(this.addr,e)}function uT(t,e){t.uniform3uiv(this.addr,e)}function cT(t,e){t.uniform4uiv(this.addr,e)}function fT(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||S_,s[o])}function hT(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||E_,s[o])}function dT(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||T_,s[o])}function pT(t,e,n){const i=this.cache,r=e.length,s=lu(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||M_,s[o])}function mT(t){switch(t){case 5126:return KE;case 35664:return ZE;case 35665:return JE;case 35666:return QE;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return rT;case 35668:case 35672:return sT;case 35669:case 35673:return oT;case 5125:return aT;case 36294:return lT;case 36295:return uT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return pT}}class gT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$E(n.type)}}class _T{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mT(n.type)}}class vT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function sm(t,e){t.seq.push(e),t.map[e.id]=e}function yT(t,e,n){const i=t.name,r=i.length;for(fc.lastIndex=0;;){const s=fc.exec(i),o=fc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){sm(n,u===void 0?new gT(a,t,e):new _T(a,t,e));break}else{let c=n.map[a];c===void 0&&(c=new vT(a),sm(n,c)),n=c}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);yT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function om(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xT=37297;let ST=0;function MT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function ET(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===zl&&n===kl?i="LinearDisplayP3ToLinearSRGB":e===kl&&n===zl&&(i="LinearSRGBToLinearDisplayP3"),t){case nr:case ou:return[i,"LinearTransferOETF"];case Un:case $h:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function am(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+MT(t.getShaderSource(e),o)}else return r}function TT(t,e){const n=ET(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function wT(t,e){let n;switch(e){case Hx:n="Linear";break;case Gx:n="Reinhard";break;case Wx:n="Cineon";break;case Xx:n="ACESFilmic";break;case Yx:n="AgX";break;case qx:n="Neutral";break;case jx:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Va=new B;function AT(){Qe.getLuminanceCoefficients(Va);const t=Va.x.toFixed(4),e=Va.y.toFixed(4),n=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function RT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function PT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function fo(t){return t!==""}function lm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function um(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wf(t){return t.replace(bT,DT)}const LT=new Map;function DT(t,e){let n=He[e];if(n===void 0){const i=LT.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wf(n)}const IT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(t){return t.replace(IT,NT)}function NT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===W0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===X0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function OT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Os:case Fs:e="ENVMAP_TYPE_CUBE";break;case su:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function kT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case j0:e="ENVMAP_BLENDING_MULTIPLY";break;case Bx:e="ENVMAP_BLENDING_MIX";break;case Vx:e="ENVMAP_BLENDING_ADD";break}return e}function zT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function BT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=UT(n),u=OT(n),f=FT(n),c=kT(n),h=zT(n),p=CT(n),_=RT(s),y=r.createProgram();let g,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fo).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fo).join(`
`),d.length>0&&(d+=`
`)):(g=[fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),d=[fm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+c:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?He.tonemapping_pars_fragment:"",n.toneMapping!==$i?wT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,TT("linearToOutputTexel",n.outputColorSpace),AT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fo).join(`
`)),o=Wf(o),o=lm(o,n),o=um(o,n),a=Wf(a),a=lm(a,n),a=um(a,n),o=cm(o),a=cm(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const m=v+g+o,x=v+d+a,U=om(r,r.VERTEX_SHADER,m),A=om(r,r.FRAGMENT_SHADER,x);r.attachShader(y,U),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(F){if(t.debug.checkShaderErrors){const G=r.getProgramInfoLog(y).trim(),j=r.getShaderInfoLog(U).trim(),Q=r.getShaderInfoLog(A).trim();let re=!0,ee=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(re=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,U,A);else{const $=am(r,U,"vertex"),L=am(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+G+`
`+$+`
`+L)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(j===""||Q==="")&&(ee=!1);ee&&(F.diagnostics={runnable:re,programLog:G,vertexShader:{log:j,prefix:g},fragmentShader:{log:Q,prefix:d}})}r.deleteShader(U),r.deleteShader(A),I=new cl(r,y),E=PT(r,y)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,xT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ST++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=A,this}let VT=0;class HT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new GT(e),n.set(e,i)),i}}class GT{constructor(e){this.id=VT++,this.code=e,this.usedTimes=0}}function WT(t,e,n,i,r,s,o){const a=new c_,l=new HT,u=new Set,f=[],c=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return u.add(E),E===0?"uv":`uv${E}`}function g(E,M,F,G,j){const Q=G.fog,re=j.geometry,ee=E.isMeshStandardMaterial?G.environment:null,$=(E.isMeshStandardMaterial?n:e).get(E.envMap||ee),L=$&&$.mapping===su?$.image.height:null,J=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const se=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,pe=se!==void 0?se.length:0;let we=0;re.morphAttributes.position!==void 0&&(we=1),re.morphAttributes.normal!==void 0&&(we=2),re.morphAttributes.color!==void 0&&(we=3);let Be,O,N,b;if(J){const $e=jn[J];Be=$e.vertexShader,O=$e.fragmentShader}else Be=E.vertexShader,O=E.fragmentShader,l.update(E),N=l.getVertexShaderID(E),b=l.getFragmentShaderID(E);const w=t.getRenderTarget(),K=j.isInstancedMesh===!0,le=j.isBatchedMesh===!0,Y=!!E.map,me=!!E.matcap,T=!!$,te=!!E.aoMap,z=!!E.lightMap,Z=!!E.bumpMap,W=!!E.normalMap,he=!!E.displacementMap,k=!!E.emissiveMap,D=!!E.metalnessMap,P=!!E.roughnessMap,S=E.anisotropy>0,q=E.clearcoat>0,ae=E.dispersion>0,oe=E.iridescence>0,ce=E.sheen>0,Le=E.transmission>0,Se=S&&!!E.anisotropyMap,Ee=q&&!!E.clearcoatMap,Fe=q&&!!E.clearcoatNormalMap,_e=q&&!!E.clearcoatRoughnessMap,Te=oe&&!!E.iridescenceMap,We=oe&&!!E.iridescenceThicknessMap,Ne=ce&&!!E.sheenColorMap,Re=ce&&!!E.sheenRoughnessMap,Ve=!!E.specularMap,Ge=!!E.specularColorMap,at=!!E.specularIntensityMap,V=Le&&!!E.transmissionMap,ve=Le&&!!E.thicknessMap,fe=!!E.gradientMap,de=!!E.alphaMap,xe=E.alphaTest>0,Ue=!!E.alphaHash,je=!!E.extensions;let yt=$i;E.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(yt=t.toneMapping);const Dt={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:Be,fragmentShader:O,defines:E.defines,customVertexShaderID:N,customFragmentShaderID:b,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:le,batchingColor:le&&j._colorsTexture!==null,instancing:K,instancingColor:K&&j.instanceColor!==null,instancingMorph:K&&j.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:w===null?t.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:nr,alphaToCoverage:!!E.alphaToCoverage,map:Y,matcap:me,envMap:T,envMapMode:T&&$.mapping,envMapCubeUVHeight:L,aoMap:te,lightMap:z,bumpMap:Z,normalMap:W,displacementMap:h&&he,emissiveMap:k,normalMapObjectSpace:W&&E.normalMapType===Jx,normalMapTangentSpace:W&&E.normalMapType===r_,metalnessMap:D,roughnessMap:P,anisotropy:S,anisotropyMap:Se,clearcoat:q,clearcoatMap:Ee,clearcoatNormalMap:Fe,clearcoatRoughnessMap:_e,dispersion:ae,iridescence:oe,iridescenceMap:Te,iridescenceThicknessMap:We,sheen:ce,sheenColorMap:Ne,sheenRoughnessMap:Re,specularMap:Ve,specularColorMap:Ge,specularIntensityMap:at,transmission:Le,transmissionMap:V,thicknessMap:ve,gradientMap:fe,opaque:E.transparent===!1&&E.blending===ws&&E.alphaToCoverage===!1,alphaMap:de,alphaTest:xe,alphaHash:Ue,combine:E.combine,mapUv:Y&&y(E.map.channel),aoMapUv:te&&y(E.aoMap.channel),lightMapUv:z&&y(E.lightMap.channel),bumpMapUv:Z&&y(E.bumpMap.channel),normalMapUv:W&&y(E.normalMap.channel),displacementMapUv:he&&y(E.displacementMap.channel),emissiveMapUv:k&&y(E.emissiveMap.channel),metalnessMapUv:D&&y(E.metalnessMap.channel),roughnessMapUv:P&&y(E.roughnessMap.channel),anisotropyMapUv:Se&&y(E.anisotropyMap.channel),clearcoatMapUv:Ee&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:We&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:Re&&y(E.sheenRoughnessMap.channel),specularMapUv:Ve&&y(E.specularMap.channel),specularColorMapUv:Ge&&y(E.specularColorMap.channel),specularIntensityMapUv:at&&y(E.specularIntensityMap.channel),transmissionMapUv:V&&y(E.transmissionMap.channel),thicknessMapUv:ve&&y(E.thicknessMap.channel),alphaMapUv:de&&y(E.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(W||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!re.attributes.uv&&(Y||de),fog:!!Q,useFog:E.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:j.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:we,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:Y&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ci,flipSided:E.side===sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:je&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&E.extensions.multiDraw===!0||le)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Dt.vertexUv1s=u.has(1),Dt.vertexUv2s=u.has(2),Dt.vertexUv3s=u.has(3),u.clear(),Dt}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)M.push(F),M.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(v(M,E),m(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function m(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),E.push(a.mask)}function x(E){const M=_[E.type];let F;if(M){const G=jn[M];F=CS.clone(G.uniforms)}else F=E.uniforms;return F}function U(E,M){let F;for(let G=0,j=f.length;G<j;G++){const Q=f[G];if(Q.cacheKey===M){F=Q,++F.usedTimes;break}}return F===void 0&&(F=new BT(t,M,E,s),f.push(F)),F}function A(E){if(--E.usedTimes===0){const M=f.indexOf(E);f[M]=f[f.length-1],f.pop(),E.destroy()}}function C(E){l.remove(E)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:x,acquireProgram:U,releaseProgram:A,releaseShaderCache:C,programs:f,dispose:I}}function XT(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function jT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(c,h,p,_,y,g){let d=t[e];return d===void 0?(d={id:c.id,object:c,geometry:h,material:p,groupOrder:_,renderOrder:c.renderOrder,z:y,group:g},t[e]=d):(d.id=c.id,d.object=c,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=c.renderOrder,d.z=y,d.group=g),e++,d}function a(c,h,p,_,y,g){const d=o(c,h,p,_,y,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(c,h,p,_,y,g){const d=o(c,h,p,_,y,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(c,h){n.length>1&&n.sort(c||jT),i.length>1&&i.sort(h||hm),r.length>1&&r.sort(h||hm)}function f(){for(let c=e,h=t.length;c<h;c++){const p=t[c];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function YT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new dm,t.set(i,[o])):r>=s.length?(o=new dm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function qT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new qe};break;case"SpotLight":n={position:new B,direction:new B,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function $T(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let KT=0;function ZT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function JT(t){const e=new qT,n=$T(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new B);const r=new B,s=new gt,o=new gt;function a(u){let f=0,c=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,y=0,g=0,d=0,v=0,m=0,x=0,U=0,A=0,C=0;u.sort(ZT);for(let E=0,M=u.length;E<M;E++){const F=u[E],G=F.color,j=F.intensity,Q=F.distance,re=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=G.r*j,c+=G.g*j,h+=G.b*j;else if(F.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(F.sh.coefficients[ee],j);C++}else if(F.isDirectionalLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,L=n.get(F);L.shadowIntensity=$.intensity,L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=F.shadow.matrix,v++}i.directional[p]=ee,p++}else if(F.isSpotLight){const ee=e.get(F);ee.position.setFromMatrixPosition(F.matrixWorld),ee.color.copy(G).multiplyScalar(j),ee.distance=Q,ee.coneCos=Math.cos(F.angle),ee.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ee.decay=F.decay,i.spot[y]=ee;const $=F.shadow;if(F.map&&(i.spotLightMap[U]=F.map,U++,$.updateMatrices(F),F.castShadow&&A++),i.spotLightMatrix[y]=$.matrix,F.castShadow){const L=n.get(F);L.shadowIntensity=$.intensity,L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=re,x++}y++}else if(F.isRectAreaLight){const ee=e.get(F);ee.color.copy(G).multiplyScalar(j),ee.halfWidth.set(F.width*.5,0,0),ee.halfHeight.set(0,F.height*.5,0),i.rectArea[g]=ee,g++}else if(F.isPointLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),ee.distance=F.distance,ee.decay=F.decay,F.castShadow){const $=F.shadow,L=n.get(F);L.shadowIntensity=$.intensity,L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,L.shadowCameraNear=$.camera.near,L.shadowCameraFar=$.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=re,i.pointShadowMatrix[_]=F.shadow.matrix,m++}i.point[_]=ee,_++}else if(F.isHemisphereLight){const ee=e.get(F);ee.skyColor.copy(F.color).multiplyScalar(j),ee.groundColor.copy(F.groundColor).multiplyScalar(j),i.hemi[d]=ee,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=c,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==p||I.pointLength!==_||I.spotLength!==y||I.rectAreaLength!==g||I.hemiLength!==d||I.numDirectionalShadows!==v||I.numPointShadows!==m||I.numSpotShadows!==x||I.numSpotMaps!==U||I.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=m,i.spotLightMatrix.length=x+U-A,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,I.directionalLength=p,I.pointLength=_,I.spotLength=y,I.rectAreaLength=g,I.hemiLength=d,I.numDirectionalShadows=v,I.numPointShadows=m,I.numSpotShadows=x,I.numSpotMaps=U,I.numLightProbes=C,i.version=KT++)}function l(u,f){let c=0,h=0,p=0,_=0,y=0;const g=f.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const m=u[d];if(m.isDirectionalLight){const x=i.directional[c];x.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),c++}else if(m.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),p++}else if(m.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(m.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(m.width*.5,0,0),x.halfHeight.set(0,m.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(m.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(m.matrixWorld),x.position.applyMatrix4(g),h++}else if(m.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(m.matrixWorld),x.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function pm(t){const e=new JT(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function QT(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new pm(t),e.set(r,[a])):s>=o.length?(a=new pm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class ew extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tw extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rw(t,e,n){let i=new Zh;const r=new ue,s=new ue,o=new wt,a=new ew({depthPacking:Zx}),l=new tw,u={},f=n.maxTextureSize,c={[xi]:sn,[sn]:xi,[ci]:ci},h=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:nw,fragmentShader:iw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ei;_.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new zn(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W0;let d=this.type;this.render=function(A,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),G=t.state;G.setBlending(qi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const j=d!==ai&&this.type===ai,Q=d===ai&&this.type!==ai;for(let re=0,ee=A.length;re<ee;re++){const $=A[re],L=$.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const J=L.getFrameExtents();if(r.multiply(J),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/J.x),r.x=s.x*J.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/J.y),r.y=s.y*J.y,L.mapSize.y=s.y)),L.map===null||j===!0||Q===!0){const pe=this.type!==ai?{minFilter:En,magFilter:En}:{};L.map!==null&&L.map.dispose(),L.map=new Dr(r.x,r.y,pe),L.map.texture.name=$.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const se=L.getViewportCount();for(let pe=0;pe<se;pe++){const we=L.getViewport(pe);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),G.viewport(o),L.updateMatrices($,pe),i=L.getFrustum(),x(C,I,L.camera,$,this.type)}L.isPointLightShadow!==!0&&this.type===ai&&v(L,I),L.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(E,M,F)};function v(A,C){const I=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,I,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,I,p,y,null)}function m(A,C,I,E){let M=null;const F=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)M=F;else if(M=I.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=M.uuid,j=C.uuid;let Q=u[G];Q===void 0&&(Q={},u[G]=Q);let re=Q[j];re===void 0&&(re=M.clone(),Q[j]=re,C.addEventListener("dispose",U)),M=re}if(M.visible=C.visible,M.wireframe=C.wireframe,E===ai?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:c[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=t.properties.get(M);G.light=I}return M}function x(A,C,I,E,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===ai)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const j=e.update(A),Q=A.material;if(Array.isArray(Q)){const re=j.groups;for(let ee=0,$=re.length;ee<$;ee++){const L=re[ee],J=Q[L.materialIndex];if(J&&J.visible){const se=m(A,J,E,M);A.onBeforeShadow(t,A,C,I,j,se,L),t.renderBufferDirect(I,null,j,se,A,L),A.onAfterShadow(t,A,C,I,j,se,L)}}}else if(Q.visible){const re=m(A,Q,E,M);A.onBeforeShadow(t,A,C,I,j,re,null),t.renderBufferDirect(I,null,j,re,A,null),A.onAfterShadow(t,A,C,I,j,re,null)}}const G=A.children;for(let j=0,Q=G.length;j<Q;j++)x(G[j],C,I,E,M)}function U(A){A.target.removeEventListener("dispose",U);for(const I in u){const E=u[I],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function sw(t){function e(){let V=!1;const ve=new wt;let fe=null;const de=new wt(0,0,0,0);return{setMask:function(xe){fe!==xe&&!V&&(t.colorMask(xe,xe,xe,xe),fe=xe)},setLocked:function(xe){V=xe},setClear:function(xe,Ue,je,yt,Dt){Dt===!0&&(xe*=yt,Ue*=yt,je*=yt),ve.set(xe,Ue,je,yt),de.equals(ve)===!1&&(t.clearColor(xe,Ue,je,yt),de.copy(ve))},reset:function(){V=!1,fe=null,de.set(-1,0,0,0)}}}function n(){let V=!1,ve=null,fe=null,de=null;return{setTest:function(xe){xe?b(t.DEPTH_TEST):w(t.DEPTH_TEST)},setMask:function(xe){ve!==xe&&!V&&(t.depthMask(xe),ve=xe)},setFunc:function(xe){if(fe!==xe){switch(xe){case Ix:t.depthFunc(t.NEVER);break;case Nx:t.depthFunc(t.ALWAYS);break;case Ux:t.depthFunc(t.LESS);break;case Ol:t.depthFunc(t.LEQUAL);break;case Ox:t.depthFunc(t.EQUAL);break;case Fx:t.depthFunc(t.GEQUAL);break;case kx:t.depthFunc(t.GREATER);break;case zx:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=xe}},setLocked:function(xe){V=xe},setClear:function(xe){de!==xe&&(t.clearDepth(xe),de=xe)},reset:function(){V=!1,ve=null,fe=null,de=null}}}function i(){let V=!1,ve=null,fe=null,de=null,xe=null,Ue=null,je=null,yt=null,Dt=null;return{setTest:function($e){V||($e?b(t.STENCIL_TEST):w(t.STENCIL_TEST))},setMask:function($e){ve!==$e&&!V&&(t.stencilMask($e),ve=$e)},setFunc:function($e,ei,Gn){(fe!==$e||de!==ei||xe!==Gn)&&(t.stencilFunc($e,ei,Gn),fe=$e,de=ei,xe=Gn)},setOp:function($e,ei,Gn){(Ue!==$e||je!==ei||yt!==Gn)&&(t.stencilOp($e,ei,Gn),Ue=$e,je=ei,yt=Gn)},setLocked:function($e){V=$e},setClear:function($e){Dt!==$e&&(t.clearStencil($e),Dt=$e)},reset:function(){V=!1,ve=null,fe=null,de=null,xe=null,Ue=null,je=null,yt=null,Dt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},c=new WeakMap,h=[],p=null,_=!1,y=null,g=null,d=null,v=null,m=null,x=null,U=null,A=new qe(0,0,0),C=0,I=!1,E=null,M=null,F=null,G=null,j=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,ee=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec($)[1]),re=ee>=1):$.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),re=ee>=2);let L=null,J={};const se=t.getParameter(t.SCISSOR_BOX),pe=t.getParameter(t.VIEWPORT),we=new wt().fromArray(se),Be=new wt().fromArray(pe);function O(V,ve,fe,de){const xe=new Uint8Array(4),Ue=t.createTexture();t.bindTexture(V,Ue),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<fe;je++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(ve,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ve+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return Ue}const N={};N[t.TEXTURE_2D]=O(t.TEXTURE_2D,t.TEXTURE_2D,1),N[t.TEXTURE_CUBE_MAP]=O(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[t.TEXTURE_2D_ARRAY]=O(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),N[t.TEXTURE_3D]=O(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),b(t.DEPTH_TEST),s.setFunc(Ol),Z(!1),W(xp),b(t.CULL_FACE),te(qi);function b(V){u[V]!==!0&&(t.enable(V),u[V]=!0)}function w(V){u[V]!==!1&&(t.disable(V),u[V]=!1)}function K(V,ve){return f[V]!==ve?(t.bindFramebuffer(V,ve),f[V]=ve,V===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ve),V===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ve),!0):!1}function le(V,ve){let fe=h,de=!1;if(V){fe=c.get(ve),fe===void 0&&(fe=[],c.set(ve,fe));const xe=V.textures;if(fe.length!==xe.length||fe[0]!==t.COLOR_ATTACHMENT0){for(let Ue=0,je=xe.length;Ue<je;Ue++)fe[Ue]=t.COLOR_ATTACHMENT0+Ue;fe.length=xe.length,de=!0}}else fe[0]!==t.BACK&&(fe[0]=t.BACK,de=!0);de&&t.drawBuffers(fe)}function Y(V){return p!==V?(t.useProgram(V),p=V,!0):!1}const me={[mr]:t.FUNC_ADD,[gx]:t.FUNC_SUBTRACT,[_x]:t.FUNC_REVERSE_SUBTRACT};me[vx]=t.MIN,me[yx]=t.MAX;const T={[xx]:t.ZERO,[Sx]:t.ONE,[Mx]:t.SRC_COLOR,[ff]:t.SRC_ALPHA,[Rx]:t.SRC_ALPHA_SATURATE,[Ax]:t.DST_COLOR,[Tx]:t.DST_ALPHA,[Ex]:t.ONE_MINUS_SRC_COLOR,[hf]:t.ONE_MINUS_SRC_ALPHA,[Cx]:t.ONE_MINUS_DST_COLOR,[wx]:t.ONE_MINUS_DST_ALPHA,[Px]:t.CONSTANT_COLOR,[bx]:t.ONE_MINUS_CONSTANT_COLOR,[Lx]:t.CONSTANT_ALPHA,[Dx]:t.ONE_MINUS_CONSTANT_ALPHA};function te(V,ve,fe,de,xe,Ue,je,yt,Dt,$e){if(V===qi){_===!0&&(w(t.BLEND),_=!1);return}if(_===!1&&(b(t.BLEND),_=!0),V!==mx){if(V!==y||$e!==I){if((g!==mr||m!==mr)&&(t.blendEquation(t.FUNC_ADD),g=mr,m=mr),$e)switch(V){case ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sp:t.blendFunc(t.ONE,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Sp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ep:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}d=null,v=null,x=null,U=null,A.set(0,0,0),C=0,y=V,I=$e}return}xe=xe||ve,Ue=Ue||fe,je=je||de,(ve!==g||xe!==m)&&(t.blendEquationSeparate(me[ve],me[xe]),g=ve,m=xe),(fe!==d||de!==v||Ue!==x||je!==U)&&(t.blendFuncSeparate(T[fe],T[de],T[Ue],T[je]),d=fe,v=de,x=Ue,U=je),(yt.equals(A)===!1||Dt!==C)&&(t.blendColor(yt.r,yt.g,yt.b,Dt),A.copy(yt),C=Dt),y=V,I=!1}function z(V,ve){V.side===ci?w(t.CULL_FACE):b(t.CULL_FACE);let fe=V.side===sn;ve&&(fe=!fe),Z(fe),V.blending===ws&&V.transparent===!1?te(qi):te(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),r.setMask(V.colorWrite);const de=V.stencilWrite;o.setTest(de),de&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),k(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?b(t.SAMPLE_ALPHA_TO_COVERAGE):w(t.SAMPLE_ALPHA_TO_COVERAGE)}function Z(V){E!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),E=V)}function W(V){V!==dx?(b(t.CULL_FACE),V!==M&&(V===xp?t.cullFace(t.BACK):V===px?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):w(t.CULL_FACE),M=V}function he(V){V!==F&&(re&&t.lineWidth(V),F=V)}function k(V,ve,fe){V?(b(t.POLYGON_OFFSET_FILL),(G!==ve||j!==fe)&&(t.polygonOffset(ve,fe),G=ve,j=fe)):w(t.POLYGON_OFFSET_FILL)}function D(V){V?b(t.SCISSOR_TEST):w(t.SCISSOR_TEST)}function P(V){V===void 0&&(V=t.TEXTURE0+Q-1),L!==V&&(t.activeTexture(V),L=V)}function S(V,ve,fe){fe===void 0&&(L===null?fe=t.TEXTURE0+Q-1:fe=L);let de=J[fe];de===void 0&&(de={type:void 0,texture:void 0},J[fe]=de),(de.type!==V||de.texture!==ve)&&(L!==fe&&(t.activeTexture(fe),L=fe),t.bindTexture(V,ve||N[V]),de.type=V,de.texture=ve)}function q(){const V=J[L];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ce(){try{t.texSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Le(){try{t.texSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ee(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{t.texStorage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{t.texImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ne(V){we.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),we.copy(V))}function Re(V){Be.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),Be.copy(V))}function Ve(V,ve){let fe=l.get(ve);fe===void 0&&(fe=new WeakMap,l.set(ve,fe));let de=fe.get(V);de===void 0&&(de=t.getUniformBlockIndex(ve,V.name),fe.set(V,de))}function Ge(V,ve){const de=l.get(ve).get(V);a.get(ve)!==de&&(t.uniformBlockBinding(ve,de,V.__bindingPointIndex),a.set(ve,de))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,J={},f={},c=new WeakMap,h=[],p=null,_=!1,y=null,g=null,d=null,v=null,m=null,x=null,U=null,A=new qe(0,0,0),C=0,I=!1,E=null,M=null,F=null,G=null,j=null,we.set(0,0,t.canvas.width,t.canvas.height),Be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:b,disable:w,bindFramebuffer:K,drawBuffers:le,useProgram:Y,setBlending:te,setMaterial:z,setFlipSided:Z,setCullFace:W,setLineWidth:he,setPolygonOffset:k,setScissorTest:D,activeTexture:P,bindTexture:S,unbindTexture:q,compressedTexImage2D:ae,compressedTexImage3D:oe,texImage2D:Te,texImage3D:We,updateUBOMapping:Ve,uniformBlockBinding:Ge,texStorage2D:Fe,texStorage3D:_e,texSubImage2D:ce,texSubImage3D:Le,compressedTexSubImage2D:Se,compressedTexSubImage3D:Ee,scissor:Ne,viewport:Re,reset:at}}function mm(t,e,n,i){const r=ow(i);switch(n){case Z0:return t*e;case Q0:return t*e;case e_:return t*e*2;case t_:return t*e/r.components*r.byteLength;case jh:return t*e/r.components*r.byteLength;case n_:return t*e*2/r.components*r.byteLength;case Yh:return t*e*2/r.components*r.byteLength;case J0:return t*e*3/r.components*r.byteLength;case kn:return t*e*4/r.components*r.byteLength;case qh:return t*e*4/r.components*r.byteLength;case rl:case sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ol:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vf:case xf:return Math.max(t,16)*Math.max(e,8)/4;case _f:case yf:return Math.max(t,8)*Math.max(e,8)/2;case Sf:case Mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Af:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case bf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Df:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case If:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Uf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Of:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ff:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ll:case kf:case zf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case i_:case Bf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vf:case Hf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ow(t){switch(t){case Si:case q0:return{byteLength:1,components:1};case Go:case $0:case Jo:return{byteLength:2,components:1};case Wh:case Xh:return{byteLength:2,components:4};case Lr:case Gh:case di:return{byteLength:4,components:1};case K0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function aw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ue,f=new WeakMap;let c;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,S){return p?new OffscreenCanvas(P,S):Vl("canvas")}function y(P,S,q){let ae=1;const oe=D(P);if((oe.width>q||oe.height>q)&&(ae=q/Math.max(oe.width,oe.height)),ae<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ce=Math.floor(ae*oe.width),Le=Math.floor(ae*oe.height);c===void 0&&(c=_(ce,Le));const Se=S?_(ce,Le):c;return Se.width=ce,Se.height=Le,Se.getContext("2d").drawImage(P,0,0,ce,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ce+"x"+Le+")."),Se}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function g(P){return P.generateMipmaps&&P.minFilter!==En&&P.minFilter!==Fn}function d(P){t.generateMipmap(P)}function v(P,S,q,ae,oe=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce=S;if(S===t.RED&&(q===t.FLOAT&&(ce=t.R32F),q===t.HALF_FLOAT&&(ce=t.R16F),q===t.UNSIGNED_BYTE&&(ce=t.R8)),S===t.RED_INTEGER&&(q===t.UNSIGNED_BYTE&&(ce=t.R8UI),q===t.UNSIGNED_SHORT&&(ce=t.R16UI),q===t.UNSIGNED_INT&&(ce=t.R32UI),q===t.BYTE&&(ce=t.R8I),q===t.SHORT&&(ce=t.R16I),q===t.INT&&(ce=t.R32I)),S===t.RG&&(q===t.FLOAT&&(ce=t.RG32F),q===t.HALF_FLOAT&&(ce=t.RG16F),q===t.UNSIGNED_BYTE&&(ce=t.RG8)),S===t.RG_INTEGER&&(q===t.UNSIGNED_BYTE&&(ce=t.RG8UI),q===t.UNSIGNED_SHORT&&(ce=t.RG16UI),q===t.UNSIGNED_INT&&(ce=t.RG32UI),q===t.BYTE&&(ce=t.RG8I),q===t.SHORT&&(ce=t.RG16I),q===t.INT&&(ce=t.RG32I)),S===t.RGB&&q===t.UNSIGNED_INT_5_9_9_9_REV&&(ce=t.RGB9_E5),S===t.RGBA){const Le=oe?Fl:Qe.getTransfer(ae);q===t.FLOAT&&(ce=t.RGBA32F),q===t.HALF_FLOAT&&(ce=t.RGBA16F),q===t.UNSIGNED_BYTE&&(ce=Le===rt?t.SRGB8_ALPHA8:t.RGBA8),q===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),q===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)}return(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function m(P,S){let q;return P?S===null||S===Lr||S===ks?q=t.DEPTH24_STENCIL8:S===di?q=t.DEPTH32F_STENCIL8:S===Go&&(q=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Lr||S===ks?q=t.DEPTH_COMPONENT24:S===di?q=t.DEPTH_COMPONENT32F:S===Go&&(q=t.DEPTH_COMPONENT16),q}function x(P,S){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==En&&P.minFilter!==Fn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function U(P){const S=P.target;S.removeEventListener("dispose",U),C(S),S.isVideoTexture&&f.delete(S)}function A(P){const S=P.target;S.removeEventListener("dispose",A),E(S)}function C(P){const S=i.get(P);if(S.__webglInit===void 0)return;const q=P.source,ae=h.get(q);if(ae){const oe=ae[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&I(P),Object.keys(ae).length===0&&h.delete(q)}i.remove(P)}function I(P){const S=i.get(P);t.deleteTexture(S.__webglTexture);const q=P.source,ae=h.get(q);delete ae[S.__cacheKey],o.memory.textures--}function E(P){const S=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(S.__webglFramebuffer[ae]))for(let oe=0;oe<S.__webglFramebuffer[ae].length;oe++)t.deleteFramebuffer(S.__webglFramebuffer[ae][oe]);else t.deleteFramebuffer(S.__webglFramebuffer[ae]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[ae])}else{if(Array.isArray(S.__webglFramebuffer))for(let ae=0;ae<S.__webglFramebuffer.length;ae++)t.deleteFramebuffer(S.__webglFramebuffer[ae]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ae=0;ae<S.__webglColorRenderbuffer.length;ae++)S.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[ae]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const q=P.textures;for(let ae=0,oe=q.length;ae<oe;ae++){const ce=i.get(q[ae]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),o.memory.textures--),i.remove(q[ae])}i.remove(P)}let M=0;function F(){M=0}function G(){const P=M;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),M+=1,P}function j(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function Q(P,S){const q=i.get(P);if(P.isVideoTexture&&he(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){const ae=P.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(q,P,S);return}}n.bindTexture(t.TEXTURE_2D,q.__webglTexture,t.TEXTURE0+S)}function re(P,S){const q=i.get(P);if(P.version>0&&q.__version!==P.version){Be(q,P,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,q.__webglTexture,t.TEXTURE0+S)}function ee(P,S){const q=i.get(P);if(P.version>0&&q.__version!==P.version){Be(q,P,S);return}n.bindTexture(t.TEXTURE_3D,q.__webglTexture,t.TEXTURE0+S)}function $(P,S){const q=i.get(P);if(P.version>0&&q.__version!==P.version){O(q,P,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture,t.TEXTURE0+S)}const L={[mf]:t.REPEAT,[xr]:t.CLAMP_TO_EDGE,[gf]:t.MIRRORED_REPEAT},J={[En]:t.NEAREST,[$x]:t.NEAREST_MIPMAP_NEAREST,[xa]:t.NEAREST_MIPMAP_LINEAR,[Fn]:t.LINEAR,[Bu]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},se={[Qx]:t.NEVER,[sS]:t.ALWAYS,[eS]:t.LESS,[s_]:t.LEQUAL,[tS]:t.EQUAL,[rS]:t.GEQUAL,[nS]:t.GREATER,[iS]:t.NOTEQUAL};function pe(P,S){if(S.type===di&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Fn||S.magFilter===Bu||S.magFilter===xa||S.magFilter===Sr||S.minFilter===Fn||S.minFilter===Bu||S.minFilter===xa||S.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,L[S.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,L[S.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,L[S.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,J[S.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,J[S.minFilter]),S.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===En||S.minFilter!==xa&&S.minFilter!==Sr||S.type===di&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function we(P,S){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",U));const ae=S.source;let oe=h.get(ae);oe===void 0&&(oe={},h.set(ae,oe));const ce=j(S);if(ce!==P.__cacheKey){oe[ce]===void 0&&(oe[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,q=!0),oe[ce].usedTimes++;const Le=oe[P.__cacheKey];Le!==void 0&&(oe[P.__cacheKey].usedTimes--,Le.usedTimes===0&&I(S)),P.__cacheKey=ce,P.__webglTexture=oe[ce].texture}return q}function Be(P,S,q){let ae=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ae=t.TEXTURE_3D);const oe=we(P,S),ce=S.source;n.bindTexture(ae,P.__webglTexture,t.TEXTURE0+q);const Le=i.get(ce);if(ce.version!==Le.__version||oe===!0){n.activeTexture(t.TEXTURE0+q);const Se=Qe.getPrimaries(Qe.workingColorSpace),Ee=S.colorSpace===Fi?null:Qe.getPrimaries(S.colorSpace),Fe=S.colorSpace===Fi||Se===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let _e=y(S.image,!1,r.maxTextureSize);_e=k(S,_e);const Te=s.convert(S.format,S.colorSpace),We=s.convert(S.type);let Ne=v(S.internalFormat,Te,We,S.colorSpace,S.isVideoTexture);pe(ae,S);let Re;const Ve=S.mipmaps,Ge=S.isVideoTexture!==!0,at=Le.__version===void 0||oe===!0,V=ce.dataReady,ve=x(S,_e);if(S.isDepthTexture)Ne=m(S.format===zs,S.type),at&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,Ne,_e.width,_e.height):n.texImage2D(t.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Te,We,null));else if(S.isDataTexture)if(Ve.length>0){Ge&&at&&n.texStorage2D(t.TEXTURE_2D,ve,Ne,Ve[0].width,Ve[0].height);for(let fe=0,de=Ve.length;fe<de;fe++)Re=Ve[fe],Ge?V&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Re.width,Re.height,Te,We,Re.data):n.texImage2D(t.TEXTURE_2D,fe,Ne,Re.width,Re.height,0,Te,We,Re.data);S.generateMipmaps=!1}else Ge?(at&&n.texStorage2D(t.TEXTURE_2D,ve,Ne,_e.width,_e.height),V&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e.width,_e.height,Te,We,_e.data)):n.texImage2D(t.TEXTURE_2D,0,Ne,_e.width,_e.height,0,Te,We,_e.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ge&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Ne,Ve[0].width,Ve[0].height,_e.depth);for(let fe=0,de=Ve.length;fe<de;fe++)if(Re=Ve[fe],S.format!==kn)if(Te!==null)if(Ge){if(V)if(S.layerUpdates.size>0){const xe=mm(Re.width,Re.height,S.format,S.type);for(const Ue of S.layerUpdates){const je=Re.data.subarray(Ue*xe/Re.data.BYTES_PER_ELEMENT,(Ue+1)*xe/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,Ue,Re.width,Re.height,1,Te,je,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Re.width,Re.height,_e.depth,Te,Re.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,Ne,Re.width,Re.height,_e.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?V&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,Re.width,Re.height,_e.depth,Te,We,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,Ne,Re.width,Re.height,_e.depth,0,Te,We,Re.data)}else{Ge&&at&&n.texStorage2D(t.TEXTURE_2D,ve,Ne,Ve[0].width,Ve[0].height);for(let fe=0,de=Ve.length;fe<de;fe++)Re=Ve[fe],S.format!==kn?Te!==null?Ge?V&&n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,Re.width,Re.height,Te,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,Ne,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?V&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Re.width,Re.height,Te,We,Re.data):n.texImage2D(t.TEXTURE_2D,fe,Ne,Re.width,Re.height,0,Te,We,Re.data)}else if(S.isDataArrayTexture)if(Ge){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Ne,_e.width,_e.height,_e.depth),V)if(S.layerUpdates.size>0){const fe=mm(_e.width,_e.height,S.format,S.type);for(const de of S.layerUpdates){const xe=_e.data.subarray(de*fe/_e.data.BYTES_PER_ELEMENT,(de+1)*fe/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,_e.width,_e.height,1,Te,We,xe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Te,We,_e.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,_e.width,_e.height,_e.depth,0,Te,We,_e.data);else if(S.isData3DTexture)Ge?(at&&n.texStorage3D(t.TEXTURE_3D,ve,Ne,_e.width,_e.height,_e.depth),V&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Te,We,_e.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,_e.width,_e.height,_e.depth,0,Te,We,_e.data);else if(S.isFramebufferTexture){if(at)if(Ge)n.texStorage2D(t.TEXTURE_2D,ve,Ne,_e.width,_e.height);else{let fe=_e.width,de=_e.height;for(let xe=0;xe<ve;xe++)n.texImage2D(t.TEXTURE_2D,xe,Ne,fe,de,0,Te,We,null),fe>>=1,de>>=1}}else if(Ve.length>0){if(Ge&&at){const fe=D(Ve[0]);n.texStorage2D(t.TEXTURE_2D,ve,Ne,fe.width,fe.height)}for(let fe=0,de=Ve.length;fe<de;fe++)Re=Ve[fe],Ge?V&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Te,We,Re):n.texImage2D(t.TEXTURE_2D,fe,Ne,Te,We,Re);S.generateMipmaps=!1}else if(Ge){if(at){const fe=D(_e);n.texStorage2D(t.TEXTURE_2D,ve,Ne,fe.width,fe.height)}V&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,We,_e)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Te,We,_e);g(S)&&d(ae),Le.__version=ce.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function O(P,S,q){if(S.image.length!==6)return;const ae=we(P,S),oe=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+q);const ce=i.get(oe);if(oe.version!==ce.__version||ae===!0){n.activeTexture(t.TEXTURE0+q);const Le=Qe.getPrimaries(Qe.workingColorSpace),Se=S.colorSpace===Fi?null:Qe.getPrimaries(S.colorSpace),Ee=S.colorSpace===Fi||Le===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Fe=S.isCompressedTexture||S.image[0].isCompressedTexture,_e=S.image[0]&&S.image[0].isDataTexture,Te=[];for(let de=0;de<6;de++)!Fe&&!_e?Te[de]=y(S.image[de],!0,r.maxCubemapSize):Te[de]=_e?S.image[de].image:S.image[de],Te[de]=k(S,Te[de]);const We=Te[0],Ne=s.convert(S.format,S.colorSpace),Re=s.convert(S.type),Ve=v(S.internalFormat,Ne,Re,S.colorSpace),Ge=S.isVideoTexture!==!0,at=ce.__version===void 0||ae===!0,V=oe.dataReady;let ve=x(S,We);pe(t.TEXTURE_CUBE_MAP,S);let fe;if(Fe){Ge&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ve,We.width,We.height);for(let de=0;de<6;de++){fe=Te[de].mipmaps;for(let xe=0;xe<fe.length;xe++){const Ue=fe[xe];S.format!==kn?Ne!==null?Ge?V&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe,0,0,Ue.width,Ue.height,Ne,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe,Ve,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe,0,0,Ue.width,Ue.height,Ne,Re,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe,Ve,Ue.width,Ue.height,0,Ne,Re,Ue.data)}}}else{if(fe=S.mipmaps,Ge&&at){fe.length>0&&ve++;const de=D(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,Ve,de.width,de.height)}for(let de=0;de<6;de++)if(_e){Ge?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Te[de].width,Te[de].height,Ne,Re,Te[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ve,Te[de].width,Te[de].height,0,Ne,Re,Te[de].data);for(let xe=0;xe<fe.length;xe++){const je=fe[xe].image[de].image;Ge?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe+1,0,0,je.width,je.height,Ne,Re,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe+1,Ve,je.width,je.height,0,Ne,Re,je.data)}}else{Ge?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ne,Re,Te[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Ve,Ne,Re,Te[de]);for(let xe=0;xe<fe.length;xe++){const Ue=fe[xe];Ge?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe+1,0,0,Ne,Re,Ue.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe+1,Ve,Ne,Re,Ue.image[de])}}}g(S)&&d(t.TEXTURE_CUBE_MAP),ce.__version=oe.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function N(P,S,q,ae,oe,ce){const Le=s.convert(q.format,q.colorSpace),Se=s.convert(q.type),Ee=v(q.internalFormat,Le,Se,q.colorSpace);if(!i.get(S).__hasExternalTextures){const _e=Math.max(1,S.width>>ce),Te=Math.max(1,S.height>>ce);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ce,Ee,_e,Te,S.depth,0,Le,Se,null):n.texImage2D(oe,ce,Ee,_e,Te,0,Le,Se,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),W(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,oe,i.get(q).__webglTexture,0,Z(S)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,oe,i.get(q).__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function b(P,S,q){if(t.bindRenderbuffer(t.RENDERBUFFER,P),S.depthBuffer){const ae=S.depthTexture,oe=ae&&ae.isDepthTexture?ae.type:null,ce=m(S.stencilBuffer,oe),Le=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=Z(S);W(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,ce,S.width,S.height):q?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,ce,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ce,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Le,t.RENDERBUFFER,P)}else{const ae=S.textures;for(let oe=0;oe<ae.length;oe++){const ce=ae[oe],Le=s.convert(ce.format,ce.colorSpace),Se=s.convert(ce.type),Ee=v(ce.internalFormat,Le,Se,ce.colorSpace),Fe=Z(S);q&&W(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,Ee,S.width,S.height):W(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,Ee,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function w(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const ae=i.get(S.depthTexture).__webglTexture,oe=Z(S);if(S.depthTexture.format===As)W(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(S.depthTexture.format===zs)W(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function K(P){const S=i.get(P),q=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const ae=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ae){const oe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ae.removeEventListener("dispose",oe)};ae.addEventListener("dispose",oe),S.__depthDisposeCallback=oe}S.__boundDepthTexture=ae}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");w(S.__webglFramebuffer,P)}else if(q){S.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[ae]),S.__webglDepthbuffer[ae]===void 0)S.__webglDepthbuffer[ae]=t.createRenderbuffer(),b(S.__webglDepthbuffer[ae],P,!1);else{const oe=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer[ae];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,ce)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),b(S.__webglDepthbuffer,P,!1);else{const ae=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,oe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(P,S,q){const ae=i.get(P);S!==void 0&&N(ae.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),q!==void 0&&K(P)}function Y(P){const S=P.texture,q=i.get(P),ae=i.get(S);P.addEventListener("dispose",A);const oe=P.textures,ce=P.isWebGLCubeRenderTarget===!0,Le=oe.length>1;if(Le||(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=S.version,o.memory.textures++),ce){q.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[Se]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)q.__webglFramebuffer[Se][Ee]=t.createFramebuffer()}else q.__webglFramebuffer[Se]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let Se=0;Se<S.mipmaps.length;Se++)q.__webglFramebuffer[Se]=t.createFramebuffer()}else q.__webglFramebuffer=t.createFramebuffer();if(Le)for(let Se=0,Ee=oe.length;Se<Ee;Se++){const Fe=i.get(oe[Se]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&W(P)===!1){q.__webglMultisampledFramebuffer=t.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Se=0;Se<oe.length;Se++){const Ee=oe[Se];q.__webglColorRenderbuffer[Se]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,q.__webglColorRenderbuffer[Se]);const Fe=s.convert(Ee.format,Ee.colorSpace),_e=s.convert(Ee.type),Te=v(Ee.internalFormat,Fe,_e,Ee.colorSpace,P.isXRRenderTarget===!0),We=Z(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Te,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,q.__webglColorRenderbuffer[Se])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=t.createRenderbuffer(),b(q.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),pe(t.TEXTURE_CUBE_MAP,S);for(let Se=0;Se<6;Se++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)N(q.__webglFramebuffer[Se][Ee],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ee);else N(q.__webglFramebuffer[Se],P,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);g(S)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Le){for(let Se=0,Ee=oe.length;Se<Ee;Se++){const Fe=oe[Se],_e=i.get(Fe);n.bindTexture(t.TEXTURE_2D,_e.__webglTexture),pe(t.TEXTURE_2D,Fe),N(q.__webglFramebuffer,P,Fe,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,0),g(Fe)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let Se=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Se=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,ae.__webglTexture),pe(Se,S),S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)N(q.__webglFramebuffer[Ee],P,S,t.COLOR_ATTACHMENT0,Se,Ee);else N(q.__webglFramebuffer,P,S,t.COLOR_ATTACHMENT0,Se,0);g(S)&&d(Se),n.unbindTexture()}P.depthBuffer&&K(P)}function me(P){const S=P.textures;for(let q=0,ae=S.length;q<ae;q++){const oe=S[q];if(g(oe)){const ce=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Le=i.get(oe).__webglTexture;n.bindTexture(ce,Le),d(ce),n.unbindTexture()}}}const T=[],te=[];function z(P){if(P.samples>0){if(W(P)===!1){const S=P.textures,q=P.width,ae=P.height;let oe=t.COLOR_BUFFER_BIT;const ce=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Le=i.get(P),Se=S.length>1;if(Se)for(let Ee=0;Ee<S.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ee=0;Ee<S.length;Ee++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),Se){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ee]);const Fe=i.get(S[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,q,ae,0,0,q,ae,oe,t.NEAREST),l===!0&&(T.length=0,te.length=0,T.push(t.COLOR_ATTACHMENT0+Ee),P.depthBuffer&&P.resolveDepthBuffer===!1&&(T.push(ce),te.push(ce),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,te)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,T))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Se)for(let Ee=0;Ee<S.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,Le.__webglColorRenderbuffer[Ee]);const Fe=i.get(S[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Z(P){return Math.min(r.maxSamples,P.samples)}function W(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function he(P){const S=o.render.frame;f.get(P)!==S&&(f.set(P,S),P.update())}function k(P,S){const q=P.colorSpace,ae=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==nr&&q!==Fi&&(Qe.getTransfer(q)===rt?(ae!==kn||oe!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),S}function D(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=Q,this.setTexture2DArray=re,this.setTexture3D=ee,this.setTextureCube=$,this.rebindTextures=le,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=N,this.useMultisampledRTT=W}function lw(t,e){function n(i,r=Fi){let s;const o=Qe.getTransfer(r);if(i===Si)return t.UNSIGNED_BYTE;if(i===Wh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Xh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===K0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===q0)return t.BYTE;if(i===$0)return t.SHORT;if(i===Go)return t.UNSIGNED_SHORT;if(i===Gh)return t.INT;if(i===Lr)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Jo)return t.HALF_FLOAT;if(i===Z0)return t.ALPHA;if(i===J0)return t.RGB;if(i===kn)return t.RGBA;if(i===Q0)return t.LUMINANCE;if(i===e_)return t.LUMINANCE_ALPHA;if(i===As)return t.DEPTH_COMPONENT;if(i===zs)return t.DEPTH_STENCIL;if(i===t_)return t.RED;if(i===jh)return t.RED_INTEGER;if(i===n_)return t.RG;if(i===Yh)return t.RG_INTEGER;if(i===qh)return t.RGBA_INTEGER;if(i===rl||i===sl||i===ol||i===al)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_f||i===vf||i===yf||i===xf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_f)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sf||i===Mf||i===Ef)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sf||i===Mf)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ef)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Tf||i===wf||i===Af||i===Cf||i===Rf||i===Pf||i===bf||i===Lf||i===Df||i===If||i===Nf||i===Uf||i===Of||i===Ff)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Tf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Af)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Cf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Df)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===If)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uf)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Of)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ff)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ll||i===kf||i===zf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ll)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===i_||i===Bf||i===Vf||i===Hf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ll)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ks?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class uw extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Mr extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cw={type:"move"};class hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),d=this._getHandJoint(u,y);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],h=f.position.distanceTo(c.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const fw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hw=`
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

}`;class dw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new on,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ji({vertexShader:fw,fragmentShader:hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new zn(new au(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pw extends Fr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,c=null,h=null,p=null,_=null;const y=new dw,g=n.getContextAttributes();let d=null,v=null;const m=[],x=[],U=new ue;let A=null;const C=new Sn;C.layers.enable(1),C.viewport=new wt;const I=new Sn;I.layers.enable(2),I.viewport=new wt;const E=[C,I],M=new uw;M.layers.enable(1),M.layers.enable(2);let F=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let N=m[O];return N===void 0&&(N=new hc,m[O]=N),N.getTargetRaySpace()},this.getControllerGrip=function(O){let N=m[O];return N===void 0&&(N=new hc,m[O]=N),N.getGripSpace()},this.getHand=function(O){let N=m[O];return N===void 0&&(N=new hc,m[O]=N),N.getHandSpace()};function j(O){const N=x.indexOf(O.inputSource);if(N===-1)return;const b=m[N];b!==void 0&&(b.update(O.inputSource,O.frame,u||o),b.dispatchEvent({type:O.type,data:O.inputSource}))}function Q(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",re);for(let O=0;O<m.length;O++){const N=x[O];N!==null&&(x[O]=null,m[O].disconnect(N))}F=null,G=null,y.reset(),e.setRenderTarget(d),p=null,h=null,c=null,r=null,v=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(O){u=O},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return c},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",re),g.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const N={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,N),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Dr(p.framebufferWidth,p.framebufferHeight,{format:kn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let N=null,b=null,w=null;g.depth&&(w=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,N=g.stencil?zs:As,b=g.stencil?ks:Lr);const K={colorFormat:n.RGBA8,depthFormat:w,scaleFactor:s};c=new XRWebGLBinding(r,n),h=c.createProjectionLayer(K),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Dr(h.textureWidth,h.textureHeight,{format:kn,type:Si,depthTexture:new x_(h.textureWidth,h.textureHeight,b,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function re(O){for(let N=0;N<O.removed.length;N++){const b=O.removed[N],w=x.indexOf(b);w>=0&&(x[w]=null,m[w].disconnect(b))}for(let N=0;N<O.added.length;N++){const b=O.added[N];let w=x.indexOf(b);if(w===-1){for(let le=0;le<m.length;le++)if(le>=x.length){x.push(b),w=le;break}else if(x[le]===null){x[le]=b,w=le;break}if(w===-1)break}const K=m[w];K&&K.connect(b)}}const ee=new B,$=new B;function L(O,N,b){ee.setFromMatrixPosition(N.matrixWorld),$.setFromMatrixPosition(b.matrixWorld);const w=ee.distanceTo($),K=N.projectionMatrix.elements,le=b.projectionMatrix.elements,Y=K[14]/(K[10]-1),me=K[14]/(K[10]+1),T=(K[9]+1)/K[5],te=(K[9]-1)/K[5],z=(K[8]-1)/K[0],Z=(le[8]+1)/le[0],W=Y*z,he=Y*Z,k=w/(-z+Z),D=k*-z;if(N.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(D),O.translateZ(k),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),K[10]===-1)O.projectionMatrix.copy(N.projectionMatrix),O.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{const P=Y+k,S=me+k,q=W-D,ae=he+(w-D),oe=T*me/S*P,ce=te*me/S*P;O.projectionMatrix.makePerspective(q,ae,oe,ce,P,S),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function J(O,N){N===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(N.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let N=O.near,b=O.far;y.texture!==null&&(y.depthNear>0&&(N=y.depthNear),y.depthFar>0&&(b=y.depthFar)),M.near=I.near=C.near=N,M.far=I.far=C.far=b,(F!==M.near||G!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),F=M.near,G=M.far);const w=O.parent,K=M.cameras;J(M,w);for(let le=0;le<K.length;le++)J(K[le],w);K.length===2?L(M,C,I):M.projectionMatrix.copy(C.projectionMatrix),se(O,M,w)};function se(O,N,b){b===null?O.matrix.copy(N.matrixWorld):(O.matrix.copy(b.matrixWorld),O.matrix.invert(),O.matrix.multiply(N.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(N.projectionMatrix),O.projectionMatrixInverse.copy(N.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Gf*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(O){l=O,h!==null&&(h.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let pe=null;function we(O,N){if(f=N.getViewerPose(u||o),_=N,f!==null){const b=f.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let w=!1;b.length!==M.cameras.length&&(M.cameras.length=0,w=!0);for(let le=0;le<b.length;le++){const Y=b[le];let me=null;if(p!==null)me=p.getViewport(Y);else{const te=c.getViewSubImage(h,Y);me=te.viewport,le===0&&(e.setRenderTargetTextures(v,te.colorTexture,h.ignoreDepthValues?void 0:te.depthStencilTexture),e.setRenderTarget(v))}let T=E[le];T===void 0&&(T=new Sn,T.layers.enable(le),T.viewport=new wt,E[le]=T),T.matrix.fromArray(Y.transform.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale),T.projectionMatrix.fromArray(Y.projectionMatrix),T.projectionMatrixInverse.copy(T.projectionMatrix).invert(),T.viewport.set(me.x,me.y,me.width,me.height),le===0&&(M.matrix.copy(T.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),w===!0&&M.cameras.push(T)}const K=r.enabledFeatures;if(K&&K.includes("depth-sensing")){const le=c.getDepthInformation(b[0]);le&&le.isValid&&le.texture&&y.init(e,le,r.renderState)}}for(let b=0;b<m.length;b++){const w=x[b],K=m[b];w!==null&&K!==void 0&&K.update(w,N,u||o)}pe&&pe(O,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),_=null}const Be=new v_;Be.setAnimationLoop(we),this.setAnimationLoop=function(O){pe=O},this.dispose=function(){}}}const ur=new Jn,mw=new gt;function gw(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,m_(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,v,m,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),c(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,x)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),y(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,v,m):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===sn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===sn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const v=e.get(d),m=v.envMap,x=v.envMapRotation;m&&(g.envMap.value=m,ur.copy(x),ur.x*=-1,ur.y*=-1,ur.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),g.envMapRotation.value.setFromMatrix4(mw.makeRotationFromEuler(ur)),g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,v,m){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*v,g.scale.value=m*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function c(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,v){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function y(g,d){const v=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _w(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,m){const x=m.program;i.uniformBlockBinding(v,x)}function u(v,m){let x=r[v.id];x===void 0&&(_(v),x=f(v),r[v.id]=x,v.addEventListener("dispose",g));const U=m.program;i.updateUBOMapping(v,U);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function f(v){const m=c();v.__bindingPointIndex=m;const x=t.createBuffer(),U=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,U,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,x),x}function c(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const m=r[v.id],x=v.uniforms,U=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let A=0,C=x.length;A<C;A++){const I=Array.isArray(x[A])?x[A]:[x[A]];for(let E=0,M=I.length;E<M;E++){const F=I[E];if(p(F,A,E,U)===!0){const G=F.__offset,j=Array.isArray(F.value)?F.value:[F.value];let Q=0;for(let re=0;re<j.length;re++){const ee=j[re],$=y(ee);typeof ee=="number"||typeof ee=="boolean"?(F.__data[0]=ee,t.bufferSubData(t.UNIFORM_BUFFER,G+Q,F.__data)):ee.isMatrix3?(F.__data[0]=ee.elements[0],F.__data[1]=ee.elements[1],F.__data[2]=ee.elements[2],F.__data[3]=0,F.__data[4]=ee.elements[3],F.__data[5]=ee.elements[4],F.__data[6]=ee.elements[5],F.__data[7]=0,F.__data[8]=ee.elements[6],F.__data[9]=ee.elements[7],F.__data[10]=ee.elements[8],F.__data[11]=0):(ee.toArray(F.__data,Q),Q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,G,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,m,x,U){const A=v.value,C=m+"_"+x;if(U[C]===void 0)return typeof A=="number"||typeof A=="boolean"?U[C]=A:U[C]=A.clone(),!0;{const I=U[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return U[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function _(v){const m=v.uniforms;let x=0;const U=16;for(let C=0,I=m.length;C<I;C++){const E=Array.isArray(m[C])?m[C]:[m[C]];for(let M=0,F=E.length;M<F;M++){const G=E[M],j=Array.isArray(G.value)?G.value:[G.value];for(let Q=0,re=j.length;Q<re;Q++){const ee=j[Q],$=y(ee),L=x%U,J=L%$.boundary,se=L+J;x+=J,se!==0&&U-se<$.storage&&(x+=U-se),G.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=x,x+=$.storage}}}const A=x%U;return A>0&&(x+=U-A),v.__size=x,v.__cache={},this}function y(v){const m={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(m.boundary=4,m.storage=4):v.isVector2?(m.boundary=8,m.storage=8):v.isVector3||v.isColor?(m.boundary=16,m.storage=12):v.isVector4?(m.boundary=16,m.storage=16):v.isMatrix3?(m.boundary=48,m.storage=48):v.isMatrix4?(m.boundary=64,m.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),m}function g(v){const m=v.target;m.removeEventListener("dispose",g);const x=o.indexOf(m.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class vw{constructor(e={}){const{canvas:n=lS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,g=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=$i,this.toneMappingExposure=1;const m=this;let x=!1,U=0,A=0,C=null,I=-1,E=null;const M=new wt,F=new wt;let G=null;const j=new qe(0);let Q=0,re=n.width,ee=n.height,$=1,L=null,J=null;const se=new wt(0,0,re,ee),pe=new wt(0,0,re,ee);let we=!1;const Be=new Zh;let O=!1,N=!1;const b=new gt,w=new B,K=new wt,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function me(){return C===null?$:1}let T=i;function te(R,H){return n.getContext(R,H)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:c};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Hh}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",xe,!1),T===null){const H="webgl2";if(T=te(H,R),T===null)throw te(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let z,Z,W,he,k,D,P,S,q,ae,oe,ce,Le,Se,Ee,Fe,_e,Te,We,Ne,Re,Ve,Ge,at;function V(){z=new TE(T),z.init(),Ve=new lw(T,z),Z=new vE(T,z,e,Ve),W=new sw(T),he=new CE(T),k=new XT,D=new aw(T,z,W,k,Z,Ve,he),P=new xE(m),S=new EE(m),q=new NS(T),Ge=new gE(T,q),ae=new wE(T,q,he,Ge),oe=new PE(T,ae,q,he),We=new RE(T,Z,D),Fe=new yE(k),ce=new WT(m,P,S,z,Z,Ge,Fe),Le=new gw(m,k),Se=new YT,Ee=new QT(z),Te=new mE(m,P,S,W,oe,h,l),_e=new rw(m,oe,Z),at=new _w(T,he,Z,W),Ne=new _E(T,z,he),Re=new AE(T,z,he),he.programs=ce.programs,m.capabilities=Z,m.extensions=z,m.properties=k,m.renderLists=Se,m.shadowMap=_e,m.state=W,m.info=he}V();const ve=new pw(m,T);this.xr=ve,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const R=z.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=z.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(R){R!==void 0&&($=R,this.setSize(re,ee,!1))},this.getSize=function(R){return R.set(re,ee)},this.setSize=function(R,H,ne=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=R,ee=H,n.width=Math.floor(R*$),n.height=Math.floor(H*$),ne===!0&&(n.style.width=R+"px",n.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(re*$,ee*$).floor()},this.setDrawingBufferSize=function(R,H,ne){re=R,ee=H,$=ne,n.width=Math.floor(R*ne),n.height=Math.floor(H*ne),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,H,ne,ie){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,H,ne,ie),W.viewport(M.copy(se).multiplyScalar($).round())},this.getScissor=function(R){return R.copy(pe)},this.setScissor=function(R,H,ne,ie){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,H,ne,ie),W.scissor(F.copy(pe).multiplyScalar($).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(R){W.setScissorTest(we=R)},this.setOpaqueSort=function(R){L=R},this.setTransparentSort=function(R){J=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(R=!0,H=!0,ne=!0){let ie=0;if(R){let X=!1;if(C!==null){const ye=C.texture.format;X=ye===qh||ye===Yh||ye===jh}if(X){const ye=C.texture.type,Ae=ye===Si||ye===Lr||ye===Go||ye===ks||ye===Wh||ye===Xh,Pe=Te.getClearColor(),be=Te.getClearAlpha(),Oe=Pe.r,ke=Pe.g,De=Pe.b;Ae?(p[0]=Oe,p[1]=ke,p[2]=De,p[3]=be,T.clearBufferuiv(T.COLOR,0,p)):(_[0]=Oe,_[1]=ke,_[2]=De,_[3]=be,T.clearBufferiv(T.COLOR,0,_))}else ie|=T.COLOR_BUFFER_BIT}H&&(ie|=T.DEPTH_BUFFER_BIT),ne&&(ie|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),Se.dispose(),Ee.dispose(),k.dispose(),P.dispose(),S.dispose(),oe.dispose(),Ge.dispose(),at.dispose(),ce.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Gn),ve.removeEventListener("sessionend",rd),ir.stop()};function fe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const R=he.autoReset,H=_e.enabled,ne=_e.autoUpdate,ie=_e.needsUpdate,X=_e.type;V(),he.autoReset=R,_e.enabled=H,_e.autoUpdate=ne,_e.needsUpdate=ie,_e.type=X}function xe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ue(R){const H=R.target;H.removeEventListener("dispose",Ue),je(H)}function je(R){yt(R),k.remove(R)}function yt(R){const H=k.get(R).programs;H!==void 0&&(H.forEach(function(ne){ce.releaseProgram(ne)}),R.isShaderMaterial&&ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,ne,ie,X,ye){H===null&&(H=le);const Ae=X.isMesh&&X.matrixWorld.determinant()<0,Pe=U_(R,H,ne,ie,X);W.setMaterial(ie,Ae);let be=ne.index,Oe=1;if(ie.wireframe===!0){if(be=ae.getWireframeAttribute(ne),be===void 0)return;Oe=2}const ke=ne.drawRange,De=ne.attributes.position;let Ke=ke.start*Oe,dt=(ke.start+ke.count)*Oe;ye!==null&&(Ke=Math.max(Ke,ye.start*Oe),dt=Math.min(dt,(ye.start+ye.count)*Oe)),be!==null?(Ke=Math.max(Ke,0),dt=Math.min(dt,be.count)):De!=null&&(Ke=Math.max(Ke,0),dt=Math.min(dt,De.count));const pt=dt-Ke;if(pt<0||pt===1/0)return;Ge.setup(X,ie,Pe,ne,be);let an,Ze=Ne;if(be!==null&&(an=q.get(be),Ze=Re,Ze.setIndex(an)),X.isMesh)ie.wireframe===!0?(W.setLineWidth(ie.wireframeLinewidth*me()),Ze.setMode(T.LINES)):Ze.setMode(T.TRIANGLES);else if(X.isLine){let Ie=ie.linewidth;Ie===void 0&&(Ie=1),W.setLineWidth(Ie*me()),X.isLineSegments?Ze.setMode(T.LINES):X.isLineLoop?Ze.setMode(T.LINE_LOOP):Ze.setMode(T.LINE_STRIP)}else X.isPoints?Ze.setMode(T.POINTS):X.isSprite&&Ze.setMode(T.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Ze.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))Ze.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ie=X._multiDrawStarts,It=X._multiDrawCounts,Je=X._multiDrawCount,Rn=be?q.get(be).bytesPerElement:1,kr=k.get(ie).currentProgram.getUniforms();for(let ln=0;ln<Je;ln++)kr.setValue(T,"_gl_DrawID",ln),Ze.render(Ie[ln]/Rn,It[ln])}else if(X.isInstancedMesh)Ze.renderInstances(Ke,pt,X.count);else if(ne.isInstancedBufferGeometry){const Ie=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,It=Math.min(ne.instanceCount,Ie);Ze.renderInstances(Ke,pt,It)}else Ze.render(Ke,pt)};function Dt(R,H,ne){R.transparent===!0&&R.side===ci&&R.forceSinglePass===!1?(R.side=sn,R.needsUpdate=!0,na(R,H,ne),R.side=xi,R.needsUpdate=!0,na(R,H,ne),R.side=ci):na(R,H,ne)}this.compile=function(R,H,ne=null){ne===null&&(ne=R),g=Ee.get(ne),g.init(H),v.push(g),ne.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),R!==ne&&R.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const ie=new Set;return R.traverse(function(X){const ye=X.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Pe=ye[Ae];Dt(Pe,ne,X),ie.add(Pe)}else Dt(ye,ne,X),ie.add(ye)}),v.pop(),g=null,ie},this.compileAsync=function(R,H,ne=null){const ie=this.compile(R,H,ne);return new Promise(X=>{function ye(){if(ie.forEach(function(Ae){k.get(Ae).currentProgram.isReady()&&ie.delete(Ae)}),ie.size===0){X(R);return}setTimeout(ye,10)}z.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let $e=null;function ei(R){$e&&$e(R)}function Gn(){ir.stop()}function rd(){ir.start()}const ir=new v_;ir.setAnimationLoop(ei),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(R){$e=R,ve.setAnimationLoop(R),R===null?ir.stop():ir.start()},ve.addEventListener("sessionstart",Gn),ve.addEventListener("sessionend",rd),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(H),H=ve.getCamera()),R.isScene===!0&&R.onBeforeRender(m,R,H,C),g=Ee.get(R,v.length),g.init(H),v.push(g),b.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Be.setFromProjectionMatrix(b),N=this.localClippingEnabled,O=Fe.init(this.clippingPlanes,N),y=Se.get(R,d.length),y.init(),d.push(y),ve.enabled===!0&&ve.isPresenting===!0){const ye=m.xr.getDepthSensingMesh();ye!==null&&cu(ye,H,-1/0,m.sortObjects)}cu(R,H,0,m.sortObjects),y.finish(),m.sortObjects===!0&&y.sort(L,J),Y=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Y&&Te.addToRenderList(y,R),this.info.render.frame++,O===!0&&Fe.beginShadows();const ne=g.state.shadowsArray;_e.render(ne,R,H),O===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=y.opaque,X=y.transmissive;if(g.setupLights(),H.isArrayCamera){const ye=H.cameras;if(X.length>0)for(let Ae=0,Pe=ye.length;Ae<Pe;Ae++){const be=ye[Ae];od(ie,X,R,be)}Y&&Te.render(R);for(let Ae=0,Pe=ye.length;Ae<Pe;Ae++){const be=ye[Ae];sd(y,R,be,be.viewport)}}else X.length>0&&od(ie,X,R,H),Y&&Te.render(R),sd(y,R,H);C!==null&&(D.updateMultisampleRenderTarget(C),D.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(m,R,H),Ge.resetDefaultState(),I=-1,E=null,v.pop(),v.length>0?(g=v[v.length-1],O===!0&&Fe.setGlobalState(m.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function cu(R,H,ne,ie){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Be.intersectsSprite(R)){ie&&K.setFromMatrixPosition(R.matrixWorld).applyMatrix4(b);const Ae=oe.update(R),Pe=R.material;Pe.visible&&y.push(R,Ae,Pe,ne,K.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Be.intersectsObject(R))){const Ae=oe.update(R),Pe=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),K.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),K.copy(Ae.boundingSphere.center)),K.applyMatrix4(R.matrixWorld).applyMatrix4(b)),Array.isArray(Pe)){const be=Ae.groups;for(let Oe=0,ke=be.length;Oe<ke;Oe++){const De=be[Oe],Ke=Pe[De.materialIndex];Ke&&Ke.visible&&y.push(R,Ae,Ke,ne,K.z,De)}}else Pe.visible&&y.push(R,Ae,Pe,ne,K.z,null)}}const ye=R.children;for(let Ae=0,Pe=ye.length;Ae<Pe;Ae++)cu(ye[Ae],H,ne,ie)}function sd(R,H,ne,ie){const X=R.opaque,ye=R.transmissive,Ae=R.transparent;g.setupLightsView(ne),O===!0&&Fe.setGlobalState(m.clippingPlanes,ne),ie&&W.viewport(M.copy(ie)),X.length>0&&ta(X,H,ne),ye.length>0&&ta(ye,H,ne),Ae.length>0&&ta(Ae,H,ne),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function od(R,H,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ie.id]===void 0&&(g.state.transmissionRenderTarget[ie.id]=new Dr(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?Jo:Si,minFilter:Sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ye=g.state.transmissionRenderTarget[ie.id],Ae=ie.viewport||M;ye.setSize(Ae.z,Ae.w);const Pe=m.getRenderTarget();m.setRenderTarget(ye),m.getClearColor(j),Q=m.getClearAlpha(),Q<1&&m.setClearColor(16777215,.5),m.clear(),Y&&Te.render(ne);const be=m.toneMapping;m.toneMapping=$i;const Oe=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),g.setupLightsView(ie),O===!0&&Fe.setGlobalState(m.clippingPlanes,ie),ta(R,ne,ie),D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye),z.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let De=0,Ke=H.length;De<Ke;De++){const dt=H[De],pt=dt.object,an=dt.geometry,Ze=dt.material,Ie=dt.group;if(Ze.side===ci&&pt.layers.test(ie.layers)){const It=Ze.side;Ze.side=sn,Ze.needsUpdate=!0,ad(pt,ne,ie,an,Ze,Ie),Ze.side=It,Ze.needsUpdate=!0,ke=!0}}ke===!0&&(D.updateMultisampleRenderTarget(ye),D.updateRenderTargetMipmap(ye))}m.setRenderTarget(Pe),m.setClearColor(j,Q),Oe!==void 0&&(ie.viewport=Oe),m.toneMapping=be}function ta(R,H,ne){const ie=H.isScene===!0?H.overrideMaterial:null;for(let X=0,ye=R.length;X<ye;X++){const Ae=R[X],Pe=Ae.object,be=Ae.geometry,Oe=ie===null?Ae.material:ie,ke=Ae.group;Pe.layers.test(ne.layers)&&ad(Pe,H,ne,be,Oe,ke)}}function ad(R,H,ne,ie,X,ye){R.onBeforeRender(m,H,ne,ie,X,ye),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),X.onBeforeRender(m,H,ne,ie,R,ye),X.transparent===!0&&X.side===ci&&X.forceSinglePass===!1?(X.side=sn,X.needsUpdate=!0,m.renderBufferDirect(ne,H,ie,X,R,ye),X.side=xi,X.needsUpdate=!0,m.renderBufferDirect(ne,H,ie,X,R,ye),X.side=ci):m.renderBufferDirect(ne,H,ie,X,R,ye),R.onAfterRender(m,H,ne,ie,X,ye)}function na(R,H,ne){H.isScene!==!0&&(H=le);const ie=k.get(R),X=g.state.lights,ye=g.state.shadowsArray,Ae=X.state.version,Pe=ce.getParameters(R,X.state,ye,H,ne),be=ce.getProgramCacheKey(Pe);let Oe=ie.programs;ie.environment=R.isMeshStandardMaterial?H.environment:null,ie.fog=H.fog,ie.envMap=(R.isMeshStandardMaterial?S:P).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,Oe===void 0&&(R.addEventListener("dispose",Ue),Oe=new Map,ie.programs=Oe);let ke=Oe.get(be);if(ke!==void 0){if(ie.currentProgram===ke&&ie.lightsStateVersion===Ae)return ud(R,Pe),ke}else Pe.uniforms=ce.getUniforms(R),R.onBeforeCompile(Pe,m),ke=ce.acquireProgram(Pe,be),Oe.set(be,ke),ie.uniforms=Pe.uniforms;const De=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(De.clippingPlanes=Fe.uniform),ud(R,Pe),ie.needsLights=F_(R),ie.lightsStateVersion=Ae,ie.needsLights&&(De.ambientLightColor.value=X.state.ambient,De.lightProbe.value=X.state.probe,De.directionalLights.value=X.state.directional,De.directionalLightShadows.value=X.state.directionalShadow,De.spotLights.value=X.state.spot,De.spotLightShadows.value=X.state.spotShadow,De.rectAreaLights.value=X.state.rectArea,De.ltc_1.value=X.state.rectAreaLTC1,De.ltc_2.value=X.state.rectAreaLTC2,De.pointLights.value=X.state.point,De.pointLightShadows.value=X.state.pointShadow,De.hemisphereLights.value=X.state.hemi,De.directionalShadowMap.value=X.state.directionalShadowMap,De.directionalShadowMatrix.value=X.state.directionalShadowMatrix,De.spotShadowMap.value=X.state.spotShadowMap,De.spotLightMatrix.value=X.state.spotLightMatrix,De.spotLightMap.value=X.state.spotLightMap,De.pointShadowMap.value=X.state.pointShadowMap,De.pointShadowMatrix.value=X.state.pointShadowMatrix),ie.currentProgram=ke,ie.uniformsList=null,ke}function ld(R){if(R.uniformsList===null){const H=R.currentProgram.getUniforms();R.uniformsList=cl.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function ud(R,H){const ne=k.get(R);ne.outputColorSpace=H.outputColorSpace,ne.batching=H.batching,ne.batchingColor=H.batchingColor,ne.instancing=H.instancing,ne.instancingColor=H.instancingColor,ne.instancingMorph=H.instancingMorph,ne.skinning=H.skinning,ne.morphTargets=H.morphTargets,ne.morphNormals=H.morphNormals,ne.morphColors=H.morphColors,ne.morphTargetsCount=H.morphTargetsCount,ne.numClippingPlanes=H.numClippingPlanes,ne.numIntersection=H.numClipIntersection,ne.vertexAlphas=H.vertexAlphas,ne.vertexTangents=H.vertexTangents,ne.toneMapping=H.toneMapping}function U_(R,H,ne,ie,X){H.isScene!==!0&&(H=le),D.resetTextureUnits();const ye=H.fog,Ae=ie.isMeshStandardMaterial?H.environment:null,Pe=C===null?m.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:nr,be=(ie.isMeshStandardMaterial?S:P).get(ie.envMap||Ae),Oe=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ke=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),De=!!ne.morphAttributes.position,Ke=!!ne.morphAttributes.normal,dt=!!ne.morphAttributes.color;let pt=$i;ie.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(pt=m.toneMapping);const an=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ze=an!==void 0?an.length:0,Ie=k.get(ie),It=g.state.lights;if(O===!0&&(N===!0||R!==E)){const _n=R===E&&ie.id===I;Fe.setState(ie,R,_n)}let Je=!1;ie.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==It.state.version||Ie.outputColorSpace!==Pe||X.isBatchedMesh&&Ie.batching===!1||!X.isBatchedMesh&&Ie.batching===!0||X.isBatchedMesh&&Ie.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ie.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ie.instancing===!1||!X.isInstancedMesh&&Ie.instancing===!0||X.isSkinnedMesh&&Ie.skinning===!1||!X.isSkinnedMesh&&Ie.skinning===!0||X.isInstancedMesh&&Ie.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ie.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ie.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ie.instancingMorph===!1&&X.morphTexture!==null||Ie.envMap!==be||ie.fog===!0&&Ie.fog!==ye||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Fe.numPlanes||Ie.numIntersection!==Fe.numIntersection)||Ie.vertexAlphas!==Oe||Ie.vertexTangents!==ke||Ie.morphTargets!==De||Ie.morphNormals!==Ke||Ie.morphColors!==dt||Ie.toneMapping!==pt||Ie.morphTargetsCount!==Ze)&&(Je=!0):(Je=!0,Ie.__version=ie.version);let Rn=Ie.currentProgram;Je===!0&&(Rn=na(ie,H,X));let kr=!1,ln=!1,fu=!1;const xt=Rn.getUniforms(),Ti=Ie.uniforms;if(W.useProgram(Rn.program)&&(kr=!0,ln=!0,fu=!0),ie.id!==I&&(I=ie.id,ln=!0),kr||E!==R){xt.setValue(T,"projectionMatrix",R.projectionMatrix),xt.setValue(T,"viewMatrix",R.matrixWorldInverse);const _n=xt.map.cameraPosition;_n!==void 0&&_n.setValue(T,w.setFromMatrixPosition(R.matrixWorld)),Z.logarithmicDepthBuffer&&xt.setValue(T,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&xt.setValue(T,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,ln=!0,fu=!0)}if(X.isSkinnedMesh){xt.setOptional(T,X,"bindMatrix"),xt.setOptional(T,X,"bindMatrixInverse");const _n=X.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),xt.setValue(T,"boneTexture",_n.boneTexture,D))}X.isBatchedMesh&&(xt.setOptional(T,X,"batchingTexture"),xt.setValue(T,"batchingTexture",X._matricesTexture,D),xt.setOptional(T,X,"batchingIdTexture"),xt.setValue(T,"batchingIdTexture",X._indirectTexture,D),xt.setOptional(T,X,"batchingColorTexture"),X._colorsTexture!==null&&xt.setValue(T,"batchingColorTexture",X._colorsTexture,D));const hu=ne.morphAttributes;if((hu.position!==void 0||hu.normal!==void 0||hu.color!==void 0)&&We.update(X,ne,Rn),(ln||Ie.receiveShadow!==X.receiveShadow)&&(Ie.receiveShadow=X.receiveShadow,xt.setValue(T,"receiveShadow",X.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Ti.envMap.value=be,Ti.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&H.environment!==null&&(Ti.envMapIntensity.value=H.environmentIntensity),ln&&(xt.setValue(T,"toneMappingExposure",m.toneMappingExposure),Ie.needsLights&&O_(Ti,fu),ye&&ie.fog===!0&&Le.refreshFogUniforms(Ti,ye),Le.refreshMaterialUniforms(Ti,ie,$,ee,g.state.transmissionRenderTarget[R.id]),cl.upload(T,ld(Ie),Ti,D)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(cl.upload(T,ld(Ie),Ti,D),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&xt.setValue(T,"center",X.center),xt.setValue(T,"modelViewMatrix",X.modelViewMatrix),xt.setValue(T,"normalMatrix",X.normalMatrix),xt.setValue(T,"modelMatrix",X.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const _n=ie.uniformsGroups;for(let du=0,k_=_n.length;du<k_;du++){const cd=_n[du];at.update(cd,Rn),at.bind(cd,Rn)}}return Rn}function O_(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function F_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,H,ne){k.get(R.texture).__webglTexture=H,k.get(R.depthTexture).__webglTexture=ne;const ie=k.get(R);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,H){const ne=k.get(R);ne.__webglFramebuffer=H,ne.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,ne=0){C=R,U=H,A=ne;let ie=!0,X=null,ye=!1,Ae=!1;if(R){const be=k.get(R);if(be.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(T.FRAMEBUFFER,null),ie=!1;else if(be.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(be.__hasExternalTextures)D.rebindTextures(R,k.get(R.texture).__webglTexture,k.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const De=R.depthTexture;if(be.__boundDepthTexture!==De){if(De!==null&&k.has(De)&&(R.width!==De.image.width||R.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ae=!0);const ke=k.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[H])?X=ke[H][ne]:X=ke[H],ye=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?X=k.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?X=ke[ne]:X=ke,M.copy(R.viewport),F.copy(R.scissor),G=R.scissorTest}else M.copy(se).multiplyScalar($).floor(),F.copy(pe).multiplyScalar($).floor(),G=we;if(W.bindFramebuffer(T.FRAMEBUFFER,X)&&ie&&W.drawBuffers(R,X),W.viewport(M),W.scissor(F),W.setScissorTest(G),ye){const be=k.get(R.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+H,be.__webglTexture,ne)}else if(Ae){const be=k.get(R.texture),Oe=H||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,be.__webglTexture,ne||0,Oe)}I=-1},this.readRenderTargetPixels=function(R,H,ne,ie,X,ye,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=k.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){W.bindFramebuffer(T.FRAMEBUFFER,Pe);try{const be=R.texture,Oe=be.format,ke=be.type;if(!Z.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-ie&&ne>=0&&ne<=R.height-X&&T.readPixels(H,ne,ie,X,Ve.convert(Oe),Ve.convert(ke),ye)}finally{const be=C!==null?k.get(C).__webglFramebuffer:null;W.bindFramebuffer(T.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(R,H,ne,ie,X,ye,Ae){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=k.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){W.bindFramebuffer(T.FRAMEBUFFER,Pe);try{const be=R.texture,Oe=be.format,ke=be.type;if(!Z.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=R.width-ie&&ne>=0&&ne<=R.height-X){const De=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,De),T.bufferData(T.PIXEL_PACK_BUFFER,ye.byteLength,T.STREAM_READ),T.readPixels(H,ne,ie,X,Ve.convert(Oe),Ve.convert(ke),0),T.flush();const Ke=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await uS(T,Ke,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,De),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,ye)}finally{T.deleteBuffer(De),T.deleteSync(Ke)}return ye}}finally{const be=C!==null?k.get(C).__webglFramebuffer:null;W.bindFramebuffer(T.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(R,H=null,ne=0){R.isTexture!==!0&&(Mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,R=arguments[1]);const ie=Math.pow(2,-ne),X=Math.floor(R.image.width*ie),ye=Math.floor(R.image.height*ie),Ae=H!==null?H.x:0,Pe=H!==null?H.y:0;D.setTexture2D(R,0),T.copyTexSubImage2D(T.TEXTURE_2D,ne,0,0,Ae,Pe,X,ye),W.unbindTexture()},this.copyTextureToTexture=function(R,H,ne=null,ie=null,X=0){R.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,R=arguments[1],H=arguments[2],X=arguments[3]||0,ne=null);let ye,Ae,Pe,be,Oe,ke;ne!==null?(ye=ne.max.x-ne.min.x,Ae=ne.max.y-ne.min.y,Pe=ne.min.x,be=ne.min.y):(ye=R.image.width,Ae=R.image.height,Pe=0,be=0),ie!==null?(Oe=ie.x,ke=ie.y):(Oe=0,ke=0);const De=Ve.convert(H.format),Ke=Ve.convert(H.type);D.setTexture2D(H,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);const dt=T.getParameter(T.UNPACK_ROW_LENGTH),pt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),an=T.getParameter(T.UNPACK_SKIP_PIXELS),Ze=T.getParameter(T.UNPACK_SKIP_ROWS),Ie=T.getParameter(T.UNPACK_SKIP_IMAGES),It=R.isCompressedTexture?R.mipmaps[X]:R.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,It.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,It.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Pe),T.pixelStorei(T.UNPACK_SKIP_ROWS,be),R.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,X,Oe,ke,ye,Ae,De,Ke,It.data):R.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,X,Oe,ke,It.width,It.height,De,It.data):T.texSubImage2D(T.TEXTURE_2D,X,Oe,ke,ye,Ae,De,Ke,It),T.pixelStorei(T.UNPACK_ROW_LENGTH,dt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,pt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,an),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ze),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ie),X===0&&H.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),W.unbindTexture()},this.copyTextureToTexture3D=function(R,H,ne=null,ie=null,X=0){R.isTexture!==!0&&(Mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,R=arguments[2],H=arguments[3],X=arguments[4]||0);let ye,Ae,Pe,be,Oe,ke,De,Ke,dt;const pt=R.isCompressedTexture?R.mipmaps[X]:R.image;ne!==null?(ye=ne.max.x-ne.min.x,Ae=ne.max.y-ne.min.y,Pe=ne.max.z-ne.min.z,be=ne.min.x,Oe=ne.min.y,ke=ne.min.z):(ye=pt.width,Ae=pt.height,Pe=pt.depth,be=0,Oe=0,ke=0),ie!==null?(De=ie.x,Ke=ie.y,dt=ie.z):(De=0,Ke=0,dt=0);const an=Ve.convert(H.format),Ze=Ve.convert(H.type);let Ie;if(H.isData3DTexture)D.setTexture3D(H,0),Ie=T.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)D.setTexture2DArray(H,0),Ie=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,H.unpackAlignment);const It=T.getParameter(T.UNPACK_ROW_LENGTH),Je=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Rn=T.getParameter(T.UNPACK_SKIP_PIXELS),kr=T.getParameter(T.UNPACK_SKIP_ROWS),ln=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,pt.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,pt.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,be),T.pixelStorei(T.UNPACK_SKIP_ROWS,Oe),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ke),R.isDataTexture||R.isData3DTexture?T.texSubImage3D(Ie,X,De,Ke,dt,ye,Ae,Pe,an,Ze,pt.data):H.isCompressedArrayTexture?T.compressedTexSubImage3D(Ie,X,De,Ke,dt,ye,Ae,Pe,an,pt.data):T.texSubImage3D(Ie,X,De,Ke,dt,ye,Ae,Pe,an,Ze,pt),T.pixelStorei(T.UNPACK_ROW_LENGTH,It),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Je),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Rn),T.pixelStorei(T.UNPACK_SKIP_ROWS,kr),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ln),X===0&&H.generateMipmaps&&T.generateMipmap(Ie),W.unbindTexture()},this.initRenderTarget=function(R){k.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),W.unbindTexture()},this.resetState=function(){U=0,A=0,C=null,W.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===$h?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===ou?"display-p3":"srgb"}}class yw extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Qn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],h=i[r+1]-f,p=(o-f)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ue:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new B,r=[],s=[],o=[],a=new B,l=new gt;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new B)}s[0]=new B,o[0]=new B;let u=Number.MAX_VALUE;const f=Math.abs(r[0].x),c=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=u&&(u=f,i.set(1,0,0)),c<=u&&(u=c,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Ut(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ut(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Qh extends Qn{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ue){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),c=Math.sin(this.aRotation),h=l-this.aX,p=u-this.aY;l=h*f-p*c+this.aX,u=h*c+p*f+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class xw extends Qh{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ed(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,f,c){let h=(o-s)/u-(a-s)/(u+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+c)+(l-a)/c;h*=f,p*=f,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Ha=new B,dc=new ed,pc=new ed,mc=new ed;class Sw extends Qn{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new B){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,f;this.closed||a>0?u=r[(a-1)%s]:(Ha.subVectors(r[0],r[1]).add(r[0]),u=Ha);const c=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Ha.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Ha),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(c),p),y=Math.pow(c.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(f),p);y<1e-4&&(y=1),_<1e-4&&(_=y),g<1e-4&&(g=y),dc.initNonuniformCatmullRom(u.x,c.x,h.x,f.x,_,y,g),pc.initNonuniformCatmullRom(u.y,c.y,h.y,f.y,_,y,g),mc.initNonuniformCatmullRom(u.z,c.z,h.z,f.z,_,y,g)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(u.x,c.x,h.x,f.x,this.tension),pc.initCatmullRom(u.y,c.y,h.y,f.y,this.tension),mc.initCatmullRom(u.z,c.z,h.z,f.z,this.tension));return i.set(dc.calc(l),pc.calc(l),mc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function gm(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function Mw(t,e){const n=1-t;return n*n*e}function Ew(t,e){return 2*(1-t)*t*e}function Tw(t,e){return t*t*e}function Eo(t,e,n,i){return Mw(t,e)+Ew(t,n)+Tw(t,i)}function ww(t,e){const n=1-t;return n*n*n*e}function Aw(t,e){const n=1-t;return 3*n*n*t*e}function Cw(t,e){return 3*(1-t)*t*t*e}function Rw(t,e){return t*t*t*e}function To(t,e,n,i,r){return ww(t,e)+Aw(t,n)+Cw(t,i)+Rw(t,r)}class w_ extends Qn{constructor(e=new ue,n=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ue){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(To(e,r.x,s.x,o.x,a.x),To(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pw extends Qn{constructor(e=new B,n=new B,i=new B,r=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(To(e,r.x,s.x,o.x,a.x),To(e,r.y,s.y,o.y,a.y),To(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class A_ extends Qn{constructor(e=new ue,n=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ue){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ue){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bw extends Qn{constructor(e=new B,n=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new B){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new B){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C_ extends Qn{constructor(e=new ue,n=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ue){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Eo(e,r.x,s.x,o.x),Eo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lw extends Qn{constructor(e=new B,n=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new B){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Eo(e,r.x,s.x,o.x),Eo(e,r.y,s.y,o.y),Eo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class R_ extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ue){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],f=r[o>r.length-2?r.length-1:o+1],c=r[o>r.length-3?r.length-1:o+2];return i.set(gm(a,l.x,u.x,f.x,c.x),gm(a,l.y,u.y,f.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ue().fromArray(r))}return this}}var Xf=Object.freeze({__proto__:null,ArcCurve:xw,CatmullRomCurve3:Sw,CubicBezierCurve:w_,CubicBezierCurve3:Pw,EllipseCurve:Qh,LineCurve:A_,LineCurve3:bw,QuadraticBezierCurve:C_,QuadraticBezierCurve3:Lw,SplineCurve:R_});class Dw extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const f=l[u];i&&i.equals(f)||(n.push(f),i=f)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Xf[r.type]().fromJSON(r))}return this}}class Rs extends Dw{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new A_(this.currentPoint.clone(),new ue(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new C_(this.currentPoint.clone(),new ue(e,n),new ue(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new w_(this.currentPoint.clone(),new ue(e,n),new ue(i,r),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new R_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+u,n+f,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new Qh(e,n,i,r,s,o,a,l);if(this.curves.length>0){const c=u.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(u);const f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wo extends Rs{constructor(e){super(e),this.uuid=Ws(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Rs().fromJSON(r))}return this}}const Iw={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=P_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,f,c,h,p;if(i&&(s=kw(t,e,s,n)),t.length>80*n){a=u=t[0],l=f=t[1];for(let _=n;_<r;_+=n)c=t[_],h=t[_+1],c<a&&(a=c),h<l&&(l=h),c>u&&(u=c),h>f&&(f=h);p=Math.max(u-a,f-l),p=p!==0?32767/p:0}return Wo(s,o,n,a,l,p,0),o}};function P_(t,e,n,i,r){let s,o;if(r===$w(t,e,n,i)>0)for(s=e;s<n;s+=i)o=_m(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=_m(s,t[s],t[s+1],o);return o&&uu(o,o.next)&&(jo(o),o=o.next),o}function Nr(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(uu(n,n.next)||ct(n.prev,n,n.next)===0)){if(jo(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Wo(t,e,n,i,r,s,o){if(!t)return;!o&&s&&Gw(t,i,r,s);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,s?Uw(t,i,r,s):Nw(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),jo(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=Ow(Nr(t),e,n),Wo(t,e,n,i,r,s,2)):o===2&&Fw(t,e,n,i,r,s):Wo(Nr(t),e,n,i,r,s,1);break}}}function Nw(t){const e=t.prev,n=t,i=t.next;if(ct(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,f=r<s?r<o?r:o:s<o?s:o,c=a<l?a<u?a:u:l<u?l:u,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let _=i.next;for(;_!==e;){if(_.x>=f&&_.x<=h&&_.y>=c&&_.y<=p&&_s(r,a,s,l,o,u,_.x,_.y)&&ct(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Uw(t,e,n,i){const r=t.prev,s=t,o=t.next;if(ct(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,f=r.y,c=s.y,h=o.y,p=a<l?a<u?a:u:l<u?l:u,_=f<c?f<h?f:h:c<h?c:h,y=a>l?a>u?a:u:l>u?l:u,g=f>c?f>h?f:h:c>h?c:h,d=jf(p,_,e,n,i),v=jf(y,g,e,n,i);let m=t.prevZ,x=t.nextZ;for(;m&&m.z>=d&&x&&x.z<=v;){if(m.x>=p&&m.x<=y&&m.y>=_&&m.y<=g&&m!==r&&m!==o&&_s(a,f,l,c,u,h,m.x,m.y)&&ct(m.prev,m,m.next)>=0||(m=m.prevZ,x.x>=p&&x.x<=y&&x.y>=_&&x.y<=g&&x!==r&&x!==o&&_s(a,f,l,c,u,h,x.x,x.y)&&ct(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;m&&m.z>=d;){if(m.x>=p&&m.x<=y&&m.y>=_&&m.y<=g&&m!==r&&m!==o&&_s(a,f,l,c,u,h,m.x,m.y)&&ct(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=y&&x.y>=_&&x.y<=g&&x!==r&&x!==o&&_s(a,f,l,c,u,h,x.x,x.y)&&ct(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ow(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!uu(r,s)&&b_(r,i,i.next,s)&&Xo(r,s)&&Xo(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),jo(i),jo(i.next),i=t=s),i=i.next}while(i!==t);return Nr(i)}function Fw(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&jw(o,a)){let l=L_(o,a);o=Nr(o,o.next),l=Nr(l,l.next),Wo(o,e,n,i,r,s,0),Wo(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function kw(t,e,n,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=P_(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(Xw(u));for(r.sort(zw),s=0;s<r.length;s++)n=Bw(r[s],n);return n}function zw(t,e){return t.x-e.x}function Bw(t,e){const n=Vw(t,e);if(!n)return e;const i=L_(n,t);return Nr(i,i.next),Nr(n,n.next)}function Vw(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let f=1/0,c;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&_s(o<u?s:i,o,l,u,o<u?i:s,o,n.x,n.y)&&(c=Math.abs(o-n.y)/(s-n.x),Xo(n,t)&&(c<f||c===f&&(n.x>r.x||n.x===r.x&&Hw(r,n)))&&(r=n,f=c)),n=n.next;while(n!==a);return r}function Hw(t,e){return ct(t.prev,t,e.prev)<0&&ct(e.next,t,t.next)<0}function Gw(t,e,n,i){let r=t;do r.z===0&&(r.z=jf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,Ww(r)}function Ww(t){let e,n,i,r,s,o,a,l,u=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,u*=2}while(o>1);return t}function jf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function Xw(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function _s(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function jw(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Yw(t,e)&&(Xo(t,e)&&Xo(e,t)&&qw(t,e)&&(ct(t.prev,t,e.prev)||ct(t,e.prev,e))||uu(t,e)&&ct(t.prev,t,t.next)>0&&ct(e.prev,e,e.next)>0)}function ct(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function uu(t,e){return t.x===e.x&&t.y===e.y}function b_(t,e,n,i){const r=Wa(ct(t,e,n)),s=Wa(ct(t,e,i)),o=Wa(ct(n,i,t)),a=Wa(ct(n,i,e));return!!(r!==s&&o!==a||r===0&&Ga(t,n,e)||s===0&&Ga(t,i,e)||o===0&&Ga(n,t,i)||a===0&&Ga(n,e,i))}function Ga(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Wa(t){return t>0?1:t<0?-1:0}function Yw(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&b_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Xo(t,e){return ct(t.prev,t,t.next)<0?ct(t,e,t.next)>=0&&ct(t,t.prev,e)>=0:ct(t,e,t.prev)<0||ct(t,t.next,e)<0}function qw(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function L_(t,e){const n=new Yf(t.i,t.x,t.y),i=new Yf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function _m(t,e,n,i){const r=new Yf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function jo(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Yf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $w(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class wr{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return wr.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];vm(e),ym(i,e);let o=e.length;n.forEach(vm);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,ym(i,n[l]);const a=Iw.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function vm(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function ym(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class td extends Ei{constructor(e=new wo([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new wn(r,3)),this.setAttribute("uv",new wn(s,2)),this.computeVertexNormals();function o(a){const l=[],u=n.curveSegments!==void 0?n.curveSegments:12,f=n.steps!==void 0?n.steps:1,c=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,_=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:Kw;let m,x=!1,U,A,C,I;d&&(m=d.getSpacedPoints(f),x=!0,h=!1,U=d.computeFrenetFrames(f,!1),A=new B,C=new B,I=new B),h||(g=0,p=0,_=0,y=0);const E=a.extractPoints(u);let M=E.shape;const F=E.holes;if(!wr.isClockWise(M)){M=M.reverse();for(let T=0,te=F.length;T<te;T++){const z=F[T];wr.isClockWise(z)&&(F[T]=z.reverse())}}const j=wr.triangulateShape(M,F),Q=M;for(let T=0,te=F.length;T<te;T++){const z=F[T];M=M.concat(z)}function re(T,te,z){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),T.clone().addScaledVector(te,z)}const ee=M.length,$=j.length;function L(T,te,z){let Z,W,he;const k=T.x-te.x,D=T.y-te.y,P=z.x-T.x,S=z.y-T.y,q=k*k+D*D,ae=k*S-D*P;if(Math.abs(ae)>Number.EPSILON){const oe=Math.sqrt(q),ce=Math.sqrt(P*P+S*S),Le=te.x-D/oe,Se=te.y+k/oe,Ee=z.x-S/ce,Fe=z.y+P/ce,_e=((Ee-Le)*S-(Fe-Se)*P)/(k*S-D*P);Z=Le+k*_e-T.x,W=Se+D*_e-T.y;const Te=Z*Z+W*W;if(Te<=2)return new ue(Z,W);he=Math.sqrt(Te/2)}else{let oe=!1;k>Number.EPSILON?P>Number.EPSILON&&(oe=!0):k<-Number.EPSILON?P<-Number.EPSILON&&(oe=!0):Math.sign(D)===Math.sign(S)&&(oe=!0),oe?(Z=-D,W=k,he=Math.sqrt(q)):(Z=k,W=D,he=Math.sqrt(q/2))}return new ue(Z/he,W/he)}const J=[];for(let T=0,te=Q.length,z=te-1,Z=T+1;T<te;T++,z++,Z++)z===te&&(z=0),Z===te&&(Z=0),J[T]=L(Q[T],Q[z],Q[Z]);const se=[];let pe,we=J.concat();for(let T=0,te=F.length;T<te;T++){const z=F[T];pe=[];for(let Z=0,W=z.length,he=W-1,k=Z+1;Z<W;Z++,he++,k++)he===W&&(he=0),k===W&&(k=0),pe[Z]=L(z[Z],z[he],z[k]);se.push(pe),we=we.concat(pe)}for(let T=0;T<g;T++){const te=T/g,z=p*Math.cos(te*Math.PI/2),Z=_*Math.sin(te*Math.PI/2)+y;for(let W=0,he=Q.length;W<he;W++){const k=re(Q[W],J[W],Z);w(k.x,k.y,-z)}for(let W=0,he=F.length;W<he;W++){const k=F[W];pe=se[W];for(let D=0,P=k.length;D<P;D++){const S=re(k[D],pe[D],Z);w(S.x,S.y,-z)}}}const Be=_+y;for(let T=0;T<ee;T++){const te=h?re(M[T],we[T],Be):M[T];x?(C.copy(U.normals[0]).multiplyScalar(te.x),A.copy(U.binormals[0]).multiplyScalar(te.y),I.copy(m[0]).add(C).add(A),w(I.x,I.y,I.z)):w(te.x,te.y,0)}for(let T=1;T<=f;T++)for(let te=0;te<ee;te++){const z=h?re(M[te],we[te],Be):M[te];x?(C.copy(U.normals[T]).multiplyScalar(z.x),A.copy(U.binormals[T]).multiplyScalar(z.y),I.copy(m[T]).add(C).add(A),w(I.x,I.y,I.z)):w(z.x,z.y,c/f*T)}for(let T=g-1;T>=0;T--){const te=T/g,z=p*Math.cos(te*Math.PI/2),Z=_*Math.sin(te*Math.PI/2)+y;for(let W=0,he=Q.length;W<he;W++){const k=re(Q[W],J[W],Z);w(k.x,k.y,c+z)}for(let W=0,he=F.length;W<he;W++){const k=F[W];pe=se[W];for(let D=0,P=k.length;D<P;D++){const S=re(k[D],pe[D],Z);x?w(S.x,S.y+m[f-1].y,m[f-1].x+z):w(S.x,S.y,c+z)}}}O(),N();function O(){const T=r.length/3;if(h){let te=0,z=ee*te;for(let Z=0;Z<$;Z++){const W=j[Z];K(W[2]+z,W[1]+z,W[0]+z)}te=f+g*2,z=ee*te;for(let Z=0;Z<$;Z++){const W=j[Z];K(W[0]+z,W[1]+z,W[2]+z)}}else{for(let te=0;te<$;te++){const z=j[te];K(z[2],z[1],z[0])}for(let te=0;te<$;te++){const z=j[te];K(z[0]+ee*f,z[1]+ee*f,z[2]+ee*f)}}i.addGroup(T,r.length/3-T,0)}function N(){const T=r.length/3;let te=0;b(Q,te),te+=Q.length;for(let z=0,Z=F.length;z<Z;z++){const W=F[z];b(W,te),te+=W.length}i.addGroup(T,r.length/3-T,1)}function b(T,te){let z=T.length;for(;--z>=0;){const Z=z;let W=z-1;W<0&&(W=T.length-1);for(let he=0,k=f+g*2;he<k;he++){const D=ee*he,P=ee*(he+1),S=te+Z+D,q=te+W+D,ae=te+W+P,oe=te+Z+P;le(S,q,ae,oe)}}}function w(T,te,z){l.push(T),l.push(te),l.push(z)}function K(T,te,z){Y(T),Y(te),Y(z);const Z=r.length/3,W=v.generateTopUV(i,r,Z-3,Z-2,Z-1);me(W[0]),me(W[1]),me(W[2])}function le(T,te,z,Z){Y(T),Y(te),Y(Z),Y(te),Y(z),Y(Z);const W=r.length/3,he=v.generateSideWallUV(i,r,W-6,W-3,W-2,W-1);me(he[0]),me(he[1]),me(he[3]),me(he[1]),me(he[2]),me(he[3])}function Y(T){r.push(l[T*3+0]),r.push(l[T*3+1]),r.push(l[T*3+2])}function me(T){s.push(T.x),s.push(T.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return Zw(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Xf[r.type]().fromJSON(r)),new td(i,e.options)}}const Kw={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],f=e[r*3+1];return[new ue(s,o),new ue(a,l),new ue(u,f)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],u=e[i*3],f=e[i*3+1],c=e[i*3+2],h=e[r*3],p=e[r*3+1],_=e[r*3+2],y=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(a-f)<Math.abs(o-u)?[new ue(o,1-l),new ue(u,1-c),new ue(h,1-_),new ue(y,1-d)]:[new ue(a,1-l),new ue(f,1-c),new ue(p,1-_),new ue(g,1-d)]}};function Zw(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class xm extends ea{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=r_,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Sm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Jw{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,c){return u.push(f,c),this},this.removeHandler=function(f){const c=u.indexOf(f);return c!==-1&&u.splice(c,2),this},this.getHandler=function(f){for(let c=0,h=u.length;c<h;c+=2){const p=u[c],_=u[c+1];if(p.global&&(p.lastIndex=0),p.test(f))return _}return null}}}const Qw=new Jw;class nd{constructor(e){this.manager=e!==void 0?e:Qw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}nd.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class eA extends Error{constructor(e,n){super(e),this.response=n}}class tA extends nd{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Sm.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(oi[e]!==void 0){oi[e].push({onLoad:n,onProgress:i,onError:r});return}oi[e]=[],oi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=oi[e],c=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=h?parseInt(h):0,_=p!==0;let y=0;const g=new ReadableStream({start(d){v();function v(){c.read().then(({done:m,value:x})=>{if(m)d.close();else{y+=x.byteLength;const U=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let A=0,C=f.length;A<C;A++){const I=f[A];I.onProgress&&I.onProgress(U)}d.enqueue(x),v()}},m=>{d.error(m)})}}});return new Response(g)}else throw new eA(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return u.json();default:if(a===void 0)return u.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),h=c&&c[1]?c[1].toLowerCase():void 0,p=new TextDecoder(h);return u.arrayBuffer().then(_=>p.decode(_))}}}).then(u=>{Sm.add(e,u);const f=oi[e];delete oi[e];for(let c=0,h=f.length;c<h;c++){const p=f[c];p.onLoad&&p.onLoad(u)}}).catch(u=>{const f=oi[e];if(f===void 0)throw this.manager.itemError(e),u;delete oi[e];for(let c=0,h=f.length;c<h;c++){const p=f[c];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class D_ extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const gc=new gt,Mm=new B,Em=new B;class nA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zh,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Mm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mm),Em.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Em),n.updateMatrixWorld(),gc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iA extends nA{constructor(){super(new y_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tm extends D_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new iA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rA extends D_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class wm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ut(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Am=new ue;class sA{constructor(e=new ue(1/0,1/0),n=new ue(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Am.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Am).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class cr{constructor(){this.type="ShapePath",this.color=new qe,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new Rs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(d){const v=[];for(let m=0,x=d.length;m<x;m++){const U=d[m],A=new wo;A.curves=U.curves,v.push(A)}return v}function i(d,v){const m=v.length;let x=!1;for(let U=m-1,A=0;A<m;U=A++){let C=v[U],I=v[A],E=I.x-C.x,M=I.y-C.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(C=v[A],E=-E,I=v[U],M=-M),d.y<C.y||d.y>I.y)continue;if(d.y===C.y){if(d.x===C.x)return!0}else{const F=M*(d.x-C.x)-E*(d.y-C.y);if(F===0)return!0;if(F<0)continue;x=!x}}else{if(d.y!==C.y)continue;if(I.x<=d.x&&d.x<=C.x||C.x<=d.x&&d.x<=I.x)return!0}}return x}const r=wr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const u=[];if(s.length===1)return a=s[0],l=new wo,l.curves=a.curves,u.push(l),u;let f=!r(s[0].getPoints());f=e?!f:f;const c=[],h=[];let p=[],_=0,y;h[_]=void 0,p[_]=[];for(let d=0,v=s.length;d<v;d++)a=s[d],y=a.getPoints(),o=r(y),o=e?!o:o,o?(!f&&h[_]&&_++,h[_]={s:new wo,p:y},h[_].s.curves=a.curves,f&&_++,p[_]=[]):p[_].push({h:a,p:y[0]});if(!h[0])return n(s);if(h.length>1){let d=!1,v=0;for(let m=0,x=h.length;m<x;m++)c[m]=[];for(let m=0,x=h.length;m<x;m++){const U=p[m];for(let A=0;A<U.length;A++){const C=U[A];let I=!0;for(let E=0;E<h.length;E++)i(C.p,h[E].p)&&(m!==E&&v++,I?(I=!1,c[E].push(C)):d=!0);I&&c[m].push(C)}}v>0&&d===!1&&(p=c)}let g;for(let d=0,v=h.length;d<v;d++){l=h[d].s,u.push(l),g=p[d];for(let m=0,x=g.length;m<x;m++)l.holes.push(g[m].h)}return u}}class oA extends Fr{constructor(e,n){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hh);const aA=Un;class Hl extends nd{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,n,i,r){const s=this,o=new tA(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){const n=this;function i(O,N){if(O.nodeType!==1)return;const b=x(O);let w=!1,K=null;switch(O.nodeName){case"svg":N=_(O,N);break;case"style":s(O);break;case"g":N=_(O,N);break;case"path":N=_(O,N),O.hasAttribute("d")&&(K=r(O));break;case"rect":N=_(O,N),K=l(O);break;case"polygon":N=_(O,N),K=u(O);break;case"polyline":N=_(O,N),K=f(O);break;case"circle":N=_(O,N),K=c(O);break;case"ellipse":N=_(O,N),K=h(O);break;case"line":N=_(O,N),K=p(O);break;case"defs":w=!0;break;case"use":N=_(O,N);const me=(O.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),T=O.viewportElement.getElementById(me);T?i(T,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+me);break}K&&(N.fill!==void 0&&N.fill!=="none"&&K.color.setStyle(N.fill,aA),A(K,pe),G.push(K),K.userData={node:O,style:N});const le=O.childNodes;for(let Y=0;Y<le.length;Y++){const me=le[Y];w&&me.nodeName!=="style"&&me.nodeName!=="defs"||i(me,N)}b&&(Q.pop(),Q.length>0?pe.copy(Q[Q.length-1]):pe.identity())}function r(O){const N=new cr,b=new ue,w=new ue,K=new ue;let le=!0,Y=!1;const me=O.getAttribute("d");if(me===""||me==="none")return null;const T=me.match(/[a-df-z][^a-df-z]*/ig);for(let te=0,z=T.length;te<z;te++){const Z=T[te],W=Z.charAt(0),he=Z.slice(1).trim();le===!0&&(Y=!0,le=!1);let k;switch(W){case"M":k=g(he);for(let D=0,P=k.length;D<P;D+=2)b.x=k[D+0],b.y=k[D+1],w.x=b.x,w.y=b.y,D===0?N.moveTo(b.x,b.y):N.lineTo(b.x,b.y),D===0&&K.copy(b);break;case"H":k=g(he);for(let D=0,P=k.length;D<P;D++)b.x=k[D],w.x=b.x,w.y=b.y,N.lineTo(b.x,b.y),D===0&&Y===!0&&K.copy(b);break;case"V":k=g(he);for(let D=0,P=k.length;D<P;D++)b.y=k[D],w.x=b.x,w.y=b.y,N.lineTo(b.x,b.y),D===0&&Y===!0&&K.copy(b);break;case"L":k=g(he);for(let D=0,P=k.length;D<P;D+=2)b.x=k[D+0],b.y=k[D+1],w.x=b.x,w.y=b.y,N.lineTo(b.x,b.y),D===0&&Y===!0&&K.copy(b);break;case"C":k=g(he);for(let D=0,P=k.length;D<P;D+=6)N.bezierCurveTo(k[D+0],k[D+1],k[D+2],k[D+3],k[D+4],k[D+5]),w.x=k[D+2],w.y=k[D+3],b.x=k[D+4],b.y=k[D+5],D===0&&Y===!0&&K.copy(b);break;case"S":k=g(he);for(let D=0,P=k.length;D<P;D+=4)N.bezierCurveTo(y(b.x,w.x),y(b.y,w.y),k[D+0],k[D+1],k[D+2],k[D+3]),w.x=k[D+0],w.y=k[D+1],b.x=k[D+2],b.y=k[D+3],D===0&&Y===!0&&K.copy(b);break;case"Q":k=g(he);for(let D=0,P=k.length;D<P;D+=4)N.quadraticCurveTo(k[D+0],k[D+1],k[D+2],k[D+3]),w.x=k[D+0],w.y=k[D+1],b.x=k[D+2],b.y=k[D+3],D===0&&Y===!0&&K.copy(b);break;case"T":k=g(he);for(let D=0,P=k.length;D<P;D+=2){const S=y(b.x,w.x),q=y(b.y,w.y);N.quadraticCurveTo(S,q,k[D+0],k[D+1]),w.x=S,w.y=q,b.x=k[D+0],b.y=k[D+1],D===0&&Y===!0&&K.copy(b)}break;case"A":k=g(he,[3,4],7);for(let D=0,P=k.length;D<P;D+=7){if(k[D+5]==b.x&&k[D+6]==b.y)continue;const S=b.clone();b.x=k[D+5],b.y=k[D+6],w.x=b.x,w.y=b.y,o(N,k[D],k[D+1],k[D+2],k[D+3],k[D+4],S,b),D===0&&Y===!0&&K.copy(b)}break;case"m":k=g(he);for(let D=0,P=k.length;D<P;D+=2)b.x+=k[D+0],b.y+=k[D+1],w.x=b.x,w.y=b.y,D===0?N.moveTo(b.x,b.y):N.lineTo(b.x,b.y),D===0&&K.copy(b);break;case"h":k=g(he);for(let D=0,P=k.length;D<P;D++)b.x+=k[D],w.x=b.x,w.y=b.y,N.lineTo(b.x,b.y),D===0&&Y===!0&&K.copy(b);break;case"v":k=g(he);for(let D=0,P=k.length;D<P;D++)b.y+=k[D],w.x=b.x,w.y=b.y,N.lineTo(b.x,b.y),D===0&&Y===!0&&K.copy(b);break;case"l":k=g(he);for(let D=0,P=k.length;D<P;D+=2)b.x+=k[D+0],b.y+=k[D+1],w.x=b.x,w.y=b.y,N.lineTo(b.x,b.y),D===0&&Y===!0&&K.copy(b);break;case"c":k=g(he);for(let D=0,P=k.length;D<P;D+=6)N.bezierCurveTo(b.x+k[D+0],b.y+k[D+1],b.x+k[D+2],b.y+k[D+3],b.x+k[D+4],b.y+k[D+5]),w.x=b.x+k[D+2],w.y=b.y+k[D+3],b.x+=k[D+4],b.y+=k[D+5],D===0&&Y===!0&&K.copy(b);break;case"s":k=g(he);for(let D=0,P=k.length;D<P;D+=4)N.bezierCurveTo(y(b.x,w.x),y(b.y,w.y),b.x+k[D+0],b.y+k[D+1],b.x+k[D+2],b.y+k[D+3]),w.x=b.x+k[D+0],w.y=b.y+k[D+1],b.x+=k[D+2],b.y+=k[D+3],D===0&&Y===!0&&K.copy(b);break;case"q":k=g(he);for(let D=0,P=k.length;D<P;D+=4)N.quadraticCurveTo(b.x+k[D+0],b.y+k[D+1],b.x+k[D+2],b.y+k[D+3]),w.x=b.x+k[D+0],w.y=b.y+k[D+1],b.x+=k[D+2],b.y+=k[D+3],D===0&&Y===!0&&K.copy(b);break;case"t":k=g(he);for(let D=0,P=k.length;D<P;D+=2){const S=y(b.x,w.x),q=y(b.y,w.y);N.quadraticCurveTo(S,q,b.x+k[D+0],b.y+k[D+1]),w.x=S,w.y=q,b.x=b.x+k[D+0],b.y=b.y+k[D+1],D===0&&Y===!0&&K.copy(b)}break;case"a":k=g(he,[3,4],7);for(let D=0,P=k.length;D<P;D+=7){if(k[D+5]==0&&k[D+6]==0)continue;const S=b.clone();b.x+=k[D+5],b.y+=k[D+6],w.x=b.x,w.y=b.y,o(N,k[D],k[D+1],k[D+2],k[D+3],k[D+4],S,b),D===0&&Y===!0&&K.copy(b)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(b.copy(K),N.currentPath.currentPoint.copy(b),le=!0);break;default:console.warn(Z)}Y=!1}return N}function s(O){if(!(!O.sheet||!O.sheet.cssRules||!O.sheet.cssRules.length))for(let N=0;N<O.sheet.cssRules.length;N++){const b=O.sheet.cssRules[N];if(b.type!==1)continue;const w=b.selectorText.split(/,/gm).filter(Boolean).map(K=>K.trim());for(let K=0;K<w.length;K++){const le=Object.fromEntries(Object.entries(b.style).filter(([,Y])=>Y!==""));j[w[K]]=Object.assign(j[w[K]]||{},le)}}}function o(O,N,b,w,K,le,Y,me){if(N==0||b==0){O.lineTo(me.x,me.y);return}w=w*Math.PI/180,N=Math.abs(N),b=Math.abs(b);const T=(Y.x-me.x)/2,te=(Y.y-me.y)/2,z=Math.cos(w)*T+Math.sin(w)*te,Z=-Math.sin(w)*T+Math.cos(w)*te;let W=N*N,he=b*b;const k=z*z,D=Z*Z,P=k/W+D/he;if(P>1){const _e=Math.sqrt(P);N=_e*N,b=_e*b,W=N*N,he=b*b}const S=W*D+he*k,q=(W*he-S)/S;let ae=Math.sqrt(Math.max(0,q));K===le&&(ae=-ae);const oe=ae*N*Z/b,ce=-ae*b*z/N,Le=Math.cos(w)*oe-Math.sin(w)*ce+(Y.x+me.x)/2,Se=Math.sin(w)*oe+Math.cos(w)*ce+(Y.y+me.y)/2,Ee=a(1,0,(z-oe)/N,(Z-ce)/b),Fe=a((z-oe)/N,(Z-ce)/b,(-z-oe)/N,(-Z-ce)/b)%(Math.PI*2);O.currentPath.absellipse(Le,Se,N,b,Ee,Ee+Fe,le===0,w)}function a(O,N,b,w){const K=O*b+N*w,le=Math.sqrt(O*O+N*N)*Math.sqrt(b*b+w*w);let Y=Math.acos(Math.max(-1,Math.min(1,K/le)));return O*w-N*b<0&&(Y=-Y),Y}function l(O){const N=m(O.getAttribute("x")||0),b=m(O.getAttribute("y")||0),w=m(O.getAttribute("rx")||O.getAttribute("ry")||0),K=m(O.getAttribute("ry")||O.getAttribute("rx")||0),le=m(O.getAttribute("width")),Y=m(O.getAttribute("height")),me=1-.551915024494,T=new cr;return T.moveTo(N+w,b),T.lineTo(N+le-w,b),(w!==0||K!==0)&&T.bezierCurveTo(N+le-w*me,b,N+le,b+K*me,N+le,b+K),T.lineTo(N+le,b+Y-K),(w!==0||K!==0)&&T.bezierCurveTo(N+le,b+Y-K*me,N+le-w*me,b+Y,N+le-w,b+Y),T.lineTo(N+w,b+Y),(w!==0||K!==0)&&T.bezierCurveTo(N+w*me,b+Y,N,b+Y-K*me,N,b+Y-K),T.lineTo(N,b+K),(w!==0||K!==0)&&T.bezierCurveTo(N,b+K*me,N+w*me,b,N+w,b),T}function u(O){function N(le,Y,me){const T=m(Y),te=m(me);K===0?w.moveTo(T,te):w.lineTo(T,te),K++}const b=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new cr;let K=0;return O.getAttribute("points").replace(b,N),w.currentPath.autoClose=!0,w}function f(O){function N(le,Y,me){const T=m(Y),te=m(me);K===0?w.moveTo(T,te):w.lineTo(T,te),K++}const b=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new cr;let K=0;return O.getAttribute("points").replace(b,N),w.currentPath.autoClose=!1,w}function c(O){const N=m(O.getAttribute("cx")||0),b=m(O.getAttribute("cy")||0),w=m(O.getAttribute("r")||0),K=new Rs;K.absarc(N,b,w,0,Math.PI*2);const le=new cr;return le.subPaths.push(K),le}function h(O){const N=m(O.getAttribute("cx")||0),b=m(O.getAttribute("cy")||0),w=m(O.getAttribute("rx")||0),K=m(O.getAttribute("ry")||0),le=new Rs;le.absellipse(N,b,w,K,0,Math.PI*2);const Y=new cr;return Y.subPaths.push(le),Y}function p(O){const N=m(O.getAttribute("x1")||0),b=m(O.getAttribute("y1")||0),w=m(O.getAttribute("x2")||0),K=m(O.getAttribute("y2")||0),le=new cr;return le.moveTo(N,b),le.lineTo(w,K),le.currentPath.autoClose=!1,le}function _(O,N){N=Object.assign({},N);let b={};if(O.hasAttribute("class")){const Y=O.getAttribute("class").split(/\s/).filter(Boolean).map(me=>me.trim());for(let me=0;me<Y.length;me++)b=Object.assign(b,j["."+Y[me]])}O.hasAttribute("id")&&(b=Object.assign(b,j["#"+O.getAttribute("id")]));function w(Y,me,T){T===void 0&&(T=function(z){return z.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),z}),O.hasAttribute(Y)&&(N[me]=T(O.getAttribute(Y))),b[Y]&&(N[me]=T(b[Y])),O.style&&O.style[Y]!==""&&(N[me]=T(O.style[Y]))}function K(Y){return Math.max(0,Math.min(1,m(Y)))}function le(Y){return Math.max(0,m(Y))}return w("fill","fill"),w("fill-opacity","fillOpacity",K),w("fill-rule","fillRule"),w("opacity","opacity",K),w("stroke","stroke"),w("stroke-opacity","strokeOpacity",K),w("stroke-width","strokeWidth",le),w("stroke-linejoin","strokeLineJoin"),w("stroke-linecap","strokeLineCap"),w("stroke-miterlimit","strokeMiterLimit",le),w("visibility","visibility"),N}function y(O,N){return O-(N-O)}function g(O,N,b){if(typeof O!="string")throw new TypeError("Invalid input: "+typeof O);const w={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},K=0,le=1,Y=2,me=3;let T=K,te=!0,z="",Z="";const W=[];function he(S,q,ae){const oe=new SyntaxError('Unexpected character "'+S+'" at index '+q+".");throw oe.partial=ae,oe}function k(){z!==""&&(Z===""?W.push(Number(z)):W.push(Number(z)*Math.pow(10,Number(Z)))),z="",Z=""}let D;const P=O.length;for(let S=0;S<P;S++){if(D=O[S],Array.isArray(N)&&N.includes(W.length%b)&&w.FLAGS.test(D)){T=le,z=D,k();continue}if(T===K){if(w.WHITESPACE.test(D))continue;if(w.DIGIT.test(D)||w.SIGN.test(D)){T=le,z=D;continue}if(w.POINT.test(D)){T=Y,z=D;continue}w.COMMA.test(D)&&(te&&he(D,S,W),te=!0)}if(T===le){if(w.DIGIT.test(D)){z+=D;continue}if(w.POINT.test(D)){z+=D,T=Y;continue}if(w.EXP.test(D)){T=me;continue}w.SIGN.test(D)&&z.length===1&&w.SIGN.test(z[0])&&he(D,S,W)}if(T===Y){if(w.DIGIT.test(D)){z+=D;continue}if(w.EXP.test(D)){T=me;continue}w.POINT.test(D)&&z[z.length-1]==="."&&he(D,S,W)}if(T===me){if(w.DIGIT.test(D)){Z+=D;continue}if(w.SIGN.test(D)){if(Z===""){Z+=D;continue}Z.length===1&&w.SIGN.test(Z)&&he(D,S,W)}}w.WHITESPACE.test(D)?(k(),T=K,te=!1):w.COMMA.test(D)?(k(),T=K,te=!0):w.SIGN.test(D)?(k(),T=le,z=D):w.POINT.test(D)?(k(),T=Y,z=D):he(D,S,W)}return k(),W}const d=["mm","cm","in","pt","pc","px"],v={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function m(O){let N="px";if(typeof O=="string"||O instanceof String)for(let w=0,K=d.length;w<K;w++){const le=d[w];if(O.endsWith(le)){N=le,O=O.substring(0,O.length-le.length);break}}let b;return N==="px"&&n.defaultUnit!=="px"?b=v.in[n.defaultUnit]/n.defaultDPI:(b=v[N][n.defaultUnit],b<0&&(b=v[N].in*n.defaultDPI)),b*parseFloat(O)}function x(O){if(!(O.hasAttribute("transform")||O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))))return null;const N=U(O);return Q.length>0&&N.premultiply(Q[Q.length-1]),pe.copy(N),Q.push(N),N}function U(O){const N=new ze,b=re;if(O.nodeName==="use"&&(O.hasAttribute("x")||O.hasAttribute("y"))){const w=m(O.getAttribute("x")),K=m(O.getAttribute("y"));N.translate(w,K)}if(O.hasAttribute("transform")){const w=O.getAttribute("transform").split(")");for(let K=w.length-1;K>=0;K--){const le=w[K].trim();if(le==="")continue;const Y=le.indexOf("("),me=le.length;if(Y>0&&Y<me){const T=le.slice(0,Y),te=g(le.slice(Y+1));switch(b.identity(),T){case"translate":if(te.length>=1){const z=te[0];let Z=0;te.length>=2&&(Z=te[1]),b.translate(z,Z)}break;case"rotate":if(te.length>=1){let z=0,Z=0,W=0;z=te[0]*Math.PI/180,te.length>=3&&(Z=te[1],W=te[2]),ee.makeTranslation(-Z,-W),$.makeRotation(z),L.multiplyMatrices($,ee),ee.makeTranslation(Z,W),b.multiplyMatrices(ee,L)}break;case"scale":if(te.length>=1){const z=te[0];let Z=z;te.length>=2&&(Z=te[1]),b.scale(z,Z)}break;case"skewX":te.length===1&&b.set(1,Math.tan(te[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":te.length===1&&b.set(1,0,0,Math.tan(te[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":te.length===6&&b.set(te[0],te[2],te[4],te[1],te[3],te[5],0,0,1);break}}N.premultiply(b)}}return N}function A(O,N){function b(Y){se.set(Y.x,Y.y,1).applyMatrix3(N),Y.set(se.x,se.y)}function w(Y){const me=Y.xRadius,T=Y.yRadius,te=Math.cos(Y.aRotation),z=Math.sin(Y.aRotation),Z=new B(me*te,me*z,0),W=new B(-T*z,T*te,0),he=Z.applyMatrix3(N),k=W.applyMatrix3(N),D=re.set(he.x,k.x,0,he.y,k.y,0,0,0,1),P=ee.copy(D).invert(),ae=$.copy(P).transpose().multiply(P).elements,oe=F(ae[0],ae[1],ae[4]),ce=Math.sqrt(oe.rt1),Le=Math.sqrt(oe.rt2);if(Y.xRadius=1/ce,Y.yRadius=1/Le,Y.aRotation=Math.atan2(oe.sn,oe.cs),!((Y.aEndAngle-Y.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const Ee=ee.set(ce,0,0,0,Le,0,0,0,1),Fe=$.set(oe.cs,oe.sn,0,-oe.sn,oe.cs,0,0,0,1),_e=Ee.multiply(Fe).multiply(D),Te=We=>{const{x:Ne,y:Re}=new B(Math.cos(We),Math.sin(We),0).applyMatrix3(_e);return Math.atan2(Re,Ne)};Y.aStartAngle=Te(Y.aStartAngle),Y.aEndAngle=Te(Y.aEndAngle),C(N)&&(Y.aClockwise=!Y.aClockwise)}}function K(Y){const me=E(N),T=M(N);Y.xRadius*=me,Y.yRadius*=T;const te=me>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);Y.aRotation+=te,C(N)&&(Y.aStartAngle*=-1,Y.aEndAngle*=-1,Y.aClockwise=!Y.aClockwise)}const le=O.subPaths;for(let Y=0,me=le.length;Y<me;Y++){const te=le[Y].curves;for(let z=0;z<te.length;z++){const Z=te[z];Z.isLineCurve?(b(Z.v1),b(Z.v2)):Z.isCubicBezierCurve?(b(Z.v0),b(Z.v1),b(Z.v2),b(Z.v3)):Z.isQuadraticBezierCurve?(b(Z.v0),b(Z.v1),b(Z.v2)):Z.isEllipseCurve&&(J.set(Z.aX,Z.aY),b(J),Z.aX=J.x,Z.aY=J.y,I(N)?w(Z):K(Z))}}}function C(O){const N=O.elements;return N[0]*N[4]-N[1]*N[3]<0}function I(O){const N=O.elements,b=N[0]*N[3]+N[1]*N[4];if(b===0)return!1;const w=E(O),K=M(O);return Math.abs(b/(w*K))>Number.EPSILON}function E(O){const N=O.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function M(O){const N=O.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function F(O,N,b){let w,K,le,Y,me;const T=O+b,te=O-b,z=Math.sqrt(te*te+4*N*N);return T>0?(w=.5*(T+z),me=1/w,K=O*me*b-N*me*N):T<0?K=.5*(T-z):(w=.5*z,K=-.5*z),te>0?le=te+z:le=te-z,Math.abs(le)>2*Math.abs(N)?(me=-2*N/le,Y=1/Math.sqrt(1+me*me),le=me*Y):Math.abs(N)===0?(le=1,Y=0):(me=-.5*le/N,le=1/Math.sqrt(1+me*me),Y=me*le),te>0&&(me=le,le=-Y,Y=me),{rt1:w,rt2:K,cs:le,sn:Y}}const G=[],j={},Q=[],re=new ze,ee=new ze,$=new ze,L=new ze,J=new ue,se=new B,pe=new ze,we=new DOMParser().parseFromString(e,"image/svg+xml");return i(we.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:G,xml:we.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(y,g,d,v){const m=y.x,x=g.x,U=d.x,A=v.x,C=y.y,I=g.y,E=d.y,M=v.y,F=(A-U)*(C-E)-(M-E)*(m-U),G=(x-m)*(C-E)-(I-C)*(m-U),j=(M-E)*(x-m)-(A-U)*(I-C),Q=F/j,re=G/j;if(j===0&&F!==0||Q<=0||Q>=1||re<0||re>1)return null;if(F===0&&j===0){for(let ee=0;ee<2;ee++)if(o(ee===0?d:v,y,g),r.loc==i.ORIGIN){const $=ee===0?d:v;return{x:$.x,y:$.y,t:r.t}}else if(r.loc==i.BETWEEN){const $=+(m+r.t*(x-m)).toPrecision(10),L=+(C+r.t*(I-C)).toPrecision(10);return{x:$,y:L,t:r.t}}return null}else{for(let L=0;L<2;L++)if(o(L===0?d:v,y,g),r.loc==i.ORIGIN){const J=L===0?d:v;return{x:J.x,y:J.y,t:r.t}}const ee=+(m+Q*(x-m)).toPrecision(10),$=+(C+Q*(I-C)).toPrecision(10);return{x:ee,y:$,t:Q}}}function o(y,g,d){const v=d.x-g.x,m=d.y-g.y,x=y.x-g.x,U=y.y-g.y,A=v*U-x*m;if(y.x===g.x&&y.y===g.y){r.loc=i.ORIGIN,r.t=0;return}if(y.x===d.x&&y.y===d.y){r.loc=i.DESTINATION,r.t=1;return}if(A<-Number.EPSILON){r.loc=i.LEFT;return}if(A>Number.EPSILON){r.loc=i.RIGHT;return}if(v*x<0||m*U<0){r.loc=i.BEHIND;return}if(Math.sqrt(v*v+m*m)<Math.sqrt(x*x+U*U)){r.loc=i.BEYOND;return}let C;v!==0?C=x/v:C=U/m,r.loc=i.BETWEEN,r.t=C}function a(y,g){const d=[],v=[];for(let m=1;m<y.length;m++){const x=y[m-1],U=y[m];for(let A=1;A<g.length;A++){const C=g[A-1],I=g[A],E=s(x,U,C,I);E!==null&&d.find(M=>M.t<=E.t+Number.EPSILON&&M.t>=E.t-Number.EPSILON)===void 0&&(d.push(E),v.push(new ue(E.x,E.y)))}}return v}function l(y,g,d){const v=new ue;g.getCenter(v);const m=[];return d.forEach(x=>{x.boundingBox.containsPoint(v)&&a(y,x.points).forEach(A=>{m.push({identifier:x.identifier,isCW:x.isCW,point:A})})}),m.sort((x,U)=>x.point.x-U.point.x),m}function u(y,g,d,v,m){(m==null||m==="")&&(m="nonzero");const x=new ue;y.boundingBox.getCenter(x);const U=[new ue(d,x.y),new ue(v,x.y)],A=l(U,y.boundingBox,g);A.sort((G,j)=>G.point.x-j.point.x);const C=[],I=[];A.forEach(G=>{G.identifier===y.identifier?C.push(G):I.push(G)});const E=C[0].point.x,M=[];let F=0;for(;F<I.length&&I[F].point.x<E;)M.length>0&&M[M.length-1]===I[F].identifier?M.pop():M.push(I[F].identifier),F++;if(M.push(y.identifier),m==="evenodd"){const G=M.length%2===0,j=M[M.length-2];return{identifier:y.identifier,isHole:G,for:j}}else if(m==="nonzero"){let G=!0,j=null,Q=null;for(let re=0;re<M.length;re++){const ee=M[re];G?(Q=g[ee].isCW,G=!1,j=ee):Q!==g[ee].isCW&&(Q=g[ee].isCW,G=!0)}return{identifier:y.identifier,isHole:G,for:j}}else console.warn('fill-rule: "'+m+'" is currently not implemented.')}let f=999999999,c=-999999999,h=e.subPaths.map(y=>{const g=y.getPoints();let d=-999999999,v=999999999,m=-999999999,x=999999999;for(let U=0;U<g.length;U++){const A=g[U];A.y>d&&(d=A.y),A.y<v&&(v=A.y),A.x>m&&(m=A.x),A.x<x&&(x=A.x)}return c<=m&&(c=m+1),f>=x&&(f=x-1),{curves:y.curves,points:g,isCW:wr.isClockWise(g),identifier:-1,boundingBox:new sA(new ue(x,v),new ue(m,d))}});h=h.filter(y=>y.points.length>1);for(let y=0;y<h.length;y++)h[y].identifier=y;const p=h.map(y=>u(y,h,f,c,e.userData?e.userData.style.fillRule:void 0)),_=[];return h.forEach(y=>{if(!p[y.identifier].isHole){const d=new wo;d.curves=y.curves,p.filter(m=>m.isHole&&m.for===y.identifier).forEach(m=>{const x=h[m.identifier],U=new Rs;U.curves=x.curves,d.holes.push(U)}),_.push(d)}}),_}static getStrokeStyle(e,n,i,r,s){return e=e!==void 0?e:1,n=n!==void 0?n:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:n,strokeWidth:e,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,n,i,r){const s=[],o=[],a=[];if(Hl.pointsToStrokeWithBuffers(e,n,i,r,s,o,a)===0)return null;const l=new Ei;return l.setAttribute("position",new wn(s,3)),l.setAttribute("normal",new wn(o,3)),l.setAttribute("uv",new wn(a,2)),l}static pointsToStrokeWithBuffers(e,n,i,r,s,o,a,l){const u=new ue,f=new ue,c=new ue,h=new ue,p=new ue,_=new ue,y=new ue,g=new ue,d=new ue,v=new ue,m=new ue,x=new ue,U=new ue,A=new ue,C=new ue,I=new ue,E=new ue;i=i!==void 0?i:12,r=r!==void 0?r:.001,l=l!==void 0?l:0,e=te(e);const M=e.length;if(M<2)return 0;const F=e[0].equals(e[M-1]);let G,j=e[0],Q;const re=n.strokeWidth/2,ee=1/(M-1);let $=0,L,J,se,pe,we=!1,Be=0,O=l*3,N=l*2;b(e[0],e[1],u).multiplyScalar(re),g.copy(e[0]).sub(u),d.copy(e[0]).add(u),v.copy(g),m.copy(d);for(let z=1;z<M;z++){G=e[z],z===M-1?F?Q=e[1]:Q=void 0:Q=e[z+1];const Z=u;if(b(j,G,Z),c.copy(Z).multiplyScalar(re),x.copy(G).sub(c),U.copy(G).add(c),L=$+ee,J=!1,Q!==void 0){b(G,Q,f),c.copy(f).multiplyScalar(re),A.copy(G).sub(c),C.copy(G).add(c),se=!0,c.subVectors(Q,j),Z.dot(c)<0&&(se=!1),z===1&&(we=se),c.subVectors(Q,G),c.normalize();const W=Math.abs(Z.dot(c));if(W>Number.EPSILON){const he=re/W;c.multiplyScalar(-he),h.subVectors(G,j),p.copy(h).setLength(he).add(c),I.copy(p).negate();const k=p.length(),D=h.length();h.divideScalar(D),_.subVectors(Q,G);const P=_.length();switch(_.divideScalar(P),h.dot(I)<D&&_.dot(I)<P&&(J=!0),E.copy(p).add(G),I.add(G),pe=!1,J?se?(C.copy(I),U.copy(I)):(A.copy(I),x.copy(I)):le(),n.strokeLineJoin){case"bevel":Y(se,J,L);break;case"round":me(se,J),se?K(G,x,A,L,0):K(G,C,U,L,1);break;case"miter":case"miter-clip":default:const S=re*n.strokeMiterLimit/k;if(S<1)if(n.strokeLineJoin!=="miter-clip"){Y(se,J,L);break}else me(se,J),se?(_.subVectors(E,x).multiplyScalar(S).add(x),y.subVectors(E,A).multiplyScalar(S).add(A),w(x,L,0),w(_,L,0),w(G,L,.5),w(G,L,.5),w(_,L,0),w(y,L,0),w(G,L,.5),w(y,L,0),w(A,L,0)):(_.subVectors(E,U).multiplyScalar(S).add(U),y.subVectors(E,C).multiplyScalar(S).add(C),w(U,L,1),w(_,L,1),w(G,L,.5),w(G,L,.5),w(_,L,1),w(y,L,1),w(G,L,.5),w(y,L,1),w(C,L,1));else J?(se?(w(d,$,1),w(g,$,0),w(E,L,0),w(d,$,1),w(E,L,0),w(I,L,1)):(w(d,$,1),w(g,$,0),w(E,L,1),w(g,$,0),w(I,L,0),w(E,L,1)),se?A.copy(E):C.copy(E)):se?(w(x,L,0),w(E,L,0),w(G,L,.5),w(G,L,.5),w(E,L,0),w(A,L,0)):(w(U,L,1),w(E,L,1),w(G,L,.5),w(G,L,.5),w(E,L,1),w(C,L,1)),pe=!0;break}}else le()}else le();!F&&z===M-1&&T(e[0],v,m,se,!0,$),$=L,j=G,g.copy(A),d.copy(C)}if(!F)T(G,x,U,se,!1,L);else if(J&&s){let z=E,Z=I;we!==se&&(z=I,Z=E),se?(pe||we)&&(Z.toArray(s,0*3),Z.toArray(s,3*3),pe&&z.toArray(s,1*3)):(pe||!we)&&(Z.toArray(s,1*3),Z.toArray(s,3*3),pe&&z.toArray(s,0*3))}return Be;function b(z,Z,W){return W.subVectors(Z,z),W.set(-W.y,W.x).normalize()}function w(z,Z,W){s&&(s[O]=z.x,s[O+1]=z.y,s[O+2]=0,o&&(o[O]=0,o[O+1]=0,o[O+2]=1),O+=3,a&&(a[N]=Z,a[N+1]=W,N+=2)),Be+=3}function K(z,Z,W,he,k){u.copy(Z).sub(z).normalize(),f.copy(W).sub(z).normalize();let D=Math.PI;const P=u.dot(f);Math.abs(P)<1&&(D=Math.abs(Math.acos(P))),D/=i,c.copy(Z);for(let S=0,q=i-1;S<q;S++)h.copy(c).rotateAround(z,D),w(c,he,k),w(h,he,k),w(z,he,.5),c.copy(h);w(h,he,k),w(W,he,k),w(z,he,.5)}function le(){w(d,$,1),w(g,$,0),w(x,L,0),w(d,$,1),w(x,L,0),w(U,L,1)}function Y(z,Z,W){Z?z?(w(d,$,1),w(g,$,0),w(x,L,0),w(d,$,1),w(x,L,0),w(I,L,1),w(x,W,0),w(A,W,0),w(I,W,.5)):(w(d,$,1),w(g,$,0),w(U,L,1),w(g,$,0),w(I,L,0),w(U,L,1),w(U,W,1),w(I,W,0),w(C,W,1)):z?(w(x,W,0),w(A,W,0),w(G,W,.5)):(w(U,W,1),w(C,W,0),w(G,W,.5))}function me(z,Z){Z&&(z?(w(d,$,1),w(g,$,0),w(x,L,0),w(d,$,1),w(x,L,0),w(I,L,1),w(x,$,0),w(G,L,.5),w(I,L,1),w(G,L,.5),w(A,$,0),w(I,L,1)):(w(d,$,1),w(g,$,0),w(U,L,1),w(g,$,0),w(I,L,0),w(U,L,1),w(U,$,1),w(I,L,0),w(G,L,.5),w(G,L,.5),w(I,L,0),w(C,$,1)))}function T(z,Z,W,he,k,D){switch(n.strokeLineCap){case"round":k?K(z,W,Z,D,.5):K(z,Z,W,D,.5);break;case"square":if(k)u.subVectors(Z,z),f.set(u.y,-u.x),c.addVectors(u,f).add(z),h.subVectors(f,u).add(z),he?(c.toArray(s,1*3),h.toArray(s,0*3),h.toArray(s,3*3)):(c.toArray(s,1*3),a[3*2+1]===1?h.toArray(s,3*3):c.toArray(s,3*3),h.toArray(s,0*3));else{u.subVectors(W,z),f.set(u.y,-u.x),c.addVectors(u,f).add(z),h.subVectors(f,u).add(z);const P=s.length;he?(c.toArray(s,P-1*3),h.toArray(s,P-2*3),h.toArray(s,P-4*3)):(h.toArray(s,P-2*3),c.toArray(s,P-1*3),h.toArray(s,P-4*3))}break}}function te(z){let Z=!1;for(let he=1,k=z.length-1;he<k;he++)if(z[he].distanceTo(z[he+1])<r){Z=!0;break}if(!Z)return z;const W=[];W.push(z[0]);for(let he=1,k=z.length-1;he<k;he++)z[he].distanceTo(z[he+1])>=r&&W.push(z[he]);return W.push(z[z.length-1]),W}}}const Cm={type:"change"},id={type:"start"},I_={type:"end"},Xa=new u_,Rm=new Ni,lA=Math.cos(70*aS.DEG2RAD),Et=new B,Zt=2*Math.PI,tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_c=1e-6;class uA extends oA{constructor(e,n=null){super(e,n),this.state=tt.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:ms.ROTATE,TWO:ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Ir,this._lastTargetPosition=new B,this._quat=new Ir().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wm,this._sphericalDelta=new wm,this._scale=1,this._panOffset=new B,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new B,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fA.bind(this),this._onPointerDown=cA.bind(this),this._onPointerUp=hA.bind(this),this._onContextMenu=yA.bind(this),this._onMouseWheel=mA.bind(this),this._onKeyDown=gA.bind(this),this._onTouchStart=_A.bind(this),this._onTouchMove=vA.bind(this),this._onMouseDown=dA.bind(this),this._onMouseMove=pA.bind(this),this._interceptControlDown=xA.bind(this),this._interceptControlUp=SA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Cm),this.update(),this.state=tt.NONE}update(e=null){const n=this.object.position;Et.copy(n).sub(this.target),Et.applyQuaternion(this._quat),this._spherical.setFromVector3(Et),this.autoRotate&&this.state===tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Zt:i>Math.PI&&(i-=Zt),r<-Math.PI?r+=Zt:r>Math.PI&&(r-=Zt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Et.setFromSpherical(this._spherical),Et.applyQuaternion(this._quatInverse),n.copy(this.target).add(Et),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Et.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new B(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=Et.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Xa.origin.copy(this.object.position),Xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xa.direction))<lA?this.object.lookAt(this.target):(Rm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xa.intersectPlane(Rm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>_c||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_c||this._lastTargetPosition.distanceToSquared(this.target)>_c?(this.dispatchEvent(Cm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Zt/60*this.autoRotateSpeed*e:Zt/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Et.setFromMatrixColumn(n,0),Et.multiplyScalar(-e),this._panOffset.add(Et)}_panUp(e,n){this.screenSpacePanning===!0?Et.setFromMatrixColumn(n,1):(Et.setFromMatrixColumn(n,0),Et.crossVectors(this.object.up,Et)),Et.multiplyScalar(e),this._panOffset.add(Et)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Et.copy(r).sub(this.target);let s=Et.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/n.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Zt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Zt*this._rotateDelta.x/n.clientHeight),this._rotateUp(Zt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ue,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function cA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function fA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function hA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(I_),this.state=tt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function dA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=tt.DOLLY;break;case Ts.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=tt.ROTATE}break;case Ts.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=tt.PAN}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(id)}function pA(t){switch(this.state){case tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function mA(t){this.enabled===!1||this.enableZoom===!1||this.state!==tt.NONE||(t.preventDefault(),this.dispatchEvent(id),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(I_))}function gA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function _A(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=tt.TOUCH_ROTATE;break;case ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=tt.TOUCH_PAN;break;default:this.state=tt.NONE}break;case 2:switch(this.touches.TWO){case ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=tt.TOUCH_DOLLY_PAN;break;case ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=tt.TOUCH_DOLLY_ROTATE;break;default:this.state=tt.NONE}break;default:this.state=tt.NONE}this.state!==tt.NONE&&this.dispatchEvent(id)}function vA(t){switch(this._trackPointer(t),this.state){case tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=tt.NONE}}function yA(t){this.enabled!==!1&&t.preventDefault()}function xA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const MA=({svg:t,smoothness:e=.5,color:n="#4f46e5"})=>{const i=lt.useRef(null);return lt.useEffect(()=>{if(!i.current)return;const r=new yw,s=new Sn(45,window.innerWidth/window.innerHeight,1,1e3);s.position.set(0,0,600),s.lookAt(0,0,0);const o=new vw({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(window.devicePixelRatio),o.setClearColor(0,0),o.shadowMap.enabled=!0,o.shadowMap.type=X0,i.current.innerHTML="",i.current.appendChild(o.domElement);const a=new uA(s,o.domElement);a.enableDamping=!0,a.dampingFactor=.05,r.add(s);const l=new rA(16777215,1.2);r.add(l);const u=new Tm(16777215,1.5);u.position.set(0,0,1),s.add(u);const f=new Tm(16777215,2);f.position.set(200,400,300),f.castShadow=!0,f.shadow.mapSize.width=2048,f.shadow.mapSize.height=2048,f.shadow.camera.near=100,f.shadow.camera.far=2e3,f.shadow.camera.left=-500,f.shadow.camera.right=500,f.shadow.camera.top=500,f.shadow.camera.bottom=-500,f.shadow.bias=-.001,r.add(f);const c=new Mr;try{const m=new Hl().parse(t).paths,x=new Mr;let U=1/0,A=-1/0,C=1/0,I=-1/0;m.forEach((F,G)=>{const j=new xm({color:F.color,roughness:.5,metalness:.15,side:xi});Hl.createShapes(F).forEach(re=>{const $={depth:G<4?80:110,bevelEnabled:!0,bevelThickness:e*5,bevelSize:e*5,bevelSegments:4,curveSegments:12},L=new td(re,$);L.computeBoundingBox(),L.boundingBox&&(U=Math.min(U,L.boundingBox.min.x),A=Math.max(A,L.boundingBox.max.x),C=Math.min(C,L.boundingBox.min.y),I=Math.max(I,L.boundingBox.max.y));const J=new zn(L,j);J.position.z=G*2,J.castShadow=!0,J.receiveShadow=!0,x.add(J)})});const E={x:(U+A)/2,y:(C+I)/2};x.children.forEach(F=>{F.position.x-=E.x,F.position.y-=E.y}),x.position.z=-(e*5);const M=x.clone();M.rotation.y=Math.PI,M.position.z=e*5,c.add(x),c.add(M)}catch(d){console.error("Failed to parse SVG:",d);const v=new Xs(30,30,30),m=new xm({color:n});c.add(new zn(v,m))}const h=new Mr;h.add(c),h.scale.set(0,0,0);const p=new B(.18,-.18,.18);r.add(h);let _;const y=()=>{_=requestAnimationFrame(y),h&&(h.rotation.y+=.001,h.scale.lerp(p,.04)),a.update(),o.render(r,s)};y();const g=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",g),()=>{window.removeEventListener("resize",g),cancelAnimationFrame(_),i.current&&i.current.removeChild(o.domElement),o.dispose()}},[t,e,n]),_t.jsx("div",{ref:i,className:"w-full h-full cursor-grab active:cursor-grabbing"})},EA=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 2084 2084" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(0.637041,0,0,0.63055,1041.666667,1041.666667)">
        <g transform="matrix(1,0,0,1,-1618.1875,-1618.1875)">
            <g transform="matrix(4.166667,0,0,4.166667,0,0)">
                <path d="M776.73,549.23L549.23,776.73L227.5,776.73L0,549.23L0,227.5L227.5,0L549.23,0L776.73,227.5L776.73,549.23Z" style="fill:rgb(255,0,0);fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(4.166667,0,0,4.166667,0,0)">
                <path d="M714.62,523.51L523.51,714.62L253.22,714.62L62.11,523.51L62.11,253.22L253.22,62.11L523.51,62.11L714.62,253.22L714.62,523.51Z" style="fill:white;fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(4.166667,0,0,4.166667,0,0)">
                <path d="M701.97,518.26L518.26,701.97L258.46,701.97L74.76,518.26L74.76,258.46L258.46,74.76L518.26,74.76L701.97,258.46L701.97,518.26Z" style="fill:rgb(255,0,0);fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(4.166667,0,0,4.166667,0,0)">
                <path d="M688.4,512.64L512.64,688.4L264.09,688.4L88.33,512.64L88.33,264.09L264.09,88.33L512.64,88.33L688.4,264.09L688.4,512.64Z" style="fill:rgb(255,255,0);fill-rule:nonzero;"/>
            </g>
            <g transform="matrix(4.166667,0,0,4.166667,0,0)">
                <path d="M179.89,340.16L150.55,340.16C150.11,340.27 149.63,340.32 149.08,340.32L145,340.32C143.15,340.43 141.47,340.78 139.95,341.38C138.43,341.98 137.67,343.09 137.67,344.72C137.67,346.24 138.1,347.62 138.97,348.87C139.84,350.12 140.82,351.28 141.9,352.37C142.12,352.7 142.36,353 142.63,353.27C142.9,353.54 143.14,353.78 143.36,354L167.65,380.69C171.78,385.36 175.56,390.18 178.98,395.17C182.4,400.16 184.11,405.97 184.11,412.58C184.11,414.21 183.97,415.92 183.7,417.71C183.43,419.5 182.97,421.37 182.31,423.32C180.57,428.31 177.12,432.87 171.96,436.99C166.8,441.11 158.89,443.17 148.24,443.17L107.65,443.17L99.5,413.18L136.66,413.18C138.51,413.07 140.19,412.72 141.71,412.13C143.23,411.53 143.99,410.43 143.99,408.8C143.99,407.29 143.55,405.91 142.69,404.66C141.82,403.42 140.84,402.25 139.76,401.17C139.54,400.85 139.3,400.55 139.03,400.28C138.76,400.01 138.51,399.77 138.3,399.55L114.67,372.78C110.65,368.24 106.93,363.48 103.5,358.5C100.07,353.52 98.37,347.74 98.37,341.14C98.37,339.5 98.51,337.78 98.78,335.98C99.05,334.18 99.51,332.29 100.17,330.33C101.91,325.3 105.36,320.69 110.52,316.48C115.68,312.27 123.59,310.17 134.24,310.17L171.73,310.01L179.88,340.17L179.89,340.16Z" style="fill:rgb(57,83,164);fill-rule:nonzero;"/>
                <path d="M320.56,443.17L285.68,443.17L285.68,362.65L285.35,362.65L258.45,398.51L232.21,362.65L231.88,362.65L231.88,443.17L197,443.17L197,310L230.09,310L258.45,349.12L287.46,310L320.55,310L320.55,443.17L320.56,443.17Z" style="fill:rgb(57,83,164);fill-rule:nonzero;"/>
                <path d="M444.93,443.17L410.05,443.17L410.05,400.95L371.91,400.95C372.02,408.56 373.32,415.92 375.82,423.04C378.32,430.16 381.47,436.87 385.27,443.17L356.91,461.92C350.5,452.25 345.44,441.76 341.75,430.44C338.05,419.13 336.21,407.59 336.21,395.84C336.21,394.54 336.24,393.2 336.29,391.84C336.34,390.48 336.42,389.15 336.53,387.84C337.29,377.51 339.57,367.44 343.38,357.65C347.18,347.86 352.78,339.26 360.17,331.87C369.52,322.51 379.62,316.53 390.49,313.92C401.36,311.31 413.04,310 425.53,310L442.65,309.84L450.8,340L423.42,340C410.27,340.11 400.54,342.2 394.24,346.28C387.94,350.36 383.32,354.84 380.39,359.73C379.3,361.69 378.35,363.67 377.54,365.68C376.73,367.69 375.99,369.51 375.34,371.14L410.06,371.14L410.06,344.08L444.94,344.08L444.94,443.18L444.93,443.17Z" style="fill:rgb(57,83,164);fill-rule:nonzero;"/>
                <path d="M533.76,310C546.8,310.11 556.28,312.89 562.2,318.35C568.12,323.81 571.84,329.87 573.37,336.53C573.59,337.84 573.78,339.21 573.94,340.62C574.1,342.04 574.18,343.4 574.18,344.71C574.18,354.37 571.35,362.56 565.7,369.28C560.05,376.01 553.37,381.81 545.65,386.69C550.76,396.89 556.6,406.71 563.17,416.15C569.74,425.59 576.78,434.59 584.28,443.16L555.1,463.37C544.34,451.2 534.78,438.09 526.41,424.04C518.04,409.99 510.54,395.54 503.92,380.67C505.55,379.37 507.56,377.91 509.95,376.28C512.34,374.65 514.78,372.92 517.28,371.07C521.62,367.82 525.62,364.26 529.26,360.41C532.9,356.56 534.72,352.63 534.72,348.61C534.72,345.46 533.6,343.34 531.38,342.25C529.15,341.17 526.73,340.57 524.13,340.46C523.26,340.35 522.42,340.3 521.6,340.3L517.93,340.3L461.37,340.14L469.52,309.98L533.74,309.98L533.76,310ZM502.79,443.17L467.91,443.17L467.91,344.23L502.79,344.23L502.79,443.17Z" style="fill:rgb(57,83,164);fill-rule:nonzero;"/>
                <path d="M682.59,339.99L645.42,339.99L645.42,443.17L610.54,443.17L610.54,339.99L573.38,339.99L581.53,310L674.44,310L682.59,339.99Z" style="fill:rgb(57,83,164);fill-rule:nonzero;"/>
            </g>
        </g>
    </g>
</svg>`,fr=["blueprint","plasma","bubbles","drops","dotted","aurora","constellation","hexgrid","waves","swarm"],fl=1e4,N_=3e3,TA=fl+N_,en=[44,4,216,28];function wA(t,e,n,i,r,s){t.fillStyle=s?"#0d1018":"#f6f3ed",t.fillRect(0,0,i,r);const o=t.createRadialGradient(i/2,r/2,0,i/2,r/2,Math.max(i,r)*.65);s?(o.addColorStop(0,"rgba(30,40,80,0.18)"),o.addColorStop(1,"rgba(0,0,0,0.25)")):(o.addColorStop(0,"rgba(255,250,200,0.18)"),o.addColorStop(1,"rgba(200,215,255,0.08)")),t.fillStyle=o,t.fillRect(0,0,i,r);const a=30,l=150;t.strokeStyle=s?"rgba(180,140,40,0.22)":"rgba(190,140,30,0.22)",t.lineWidth=.5,t.beginPath();for(let c=0;c<=i;c+=a)t.moveTo(c,0),t.lineTo(c,r);for(let c=0;c<=r;c+=a)t.moveTo(0,c),t.lineTo(i,c);t.stroke(),t.strokeStyle=s?"rgba(80,140,255,0.32)":"rgba(70,120,255,0.30)",t.lineWidth=1,t.beginPath();for(let c=0;c<=i;c+=l)t.moveTo(c,0),t.lineTo(c,r);for(let c=0;c<=r;c+=l)t.moveTo(0,c),t.lineTo(i,c);t.stroke(),t.strokeStyle=s?"rgba(255,80,80,0.60)":"rgba(220,45,45,0.50)",t.lineWidth=1;for(let c=l;c<=i;c+=l)for(let h=l;h<=r;h+=l)t.beginPath(),t.moveTo(c-8,h),t.lineTo(c+8,h),t.moveTo(c,h-8),t.lineTo(c,h+8),t.stroke(),t.beginPath(),t.arc(c,h,3,0,Math.PI*2),t.stroke();const u=e*5e-5%1*r,f=t.createLinearGradient(0,u-50,0,u+50);if(f.addColorStop(0,"transparent"),f.addColorStop(.5,`rgba(255,190,30,${s?.38:.22})`),f.addColorStop(1,"transparent"),t.fillStyle=f,t.fillRect(0,u-50,i,100),n.x>=0){const c=Math.round(n.x/a)*a,h=Math.round(n.y/a)*a,p=.5+.5*Math.sin(e*.004);t.shadowBlur=s?20:14,t.shadowColor=s?"rgba(255,160,40,0.9)":"rgba(255,130,60,0.85)",t.strokeStyle=`rgba(255,120,40,${p})`,t.lineWidth=1.5,t.beginPath(),t.arc(c,h,18+8*Math.sin(e*.003),0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(c-14,h),t.lineTo(c+14,h),t.moveTo(c,h-14),t.lineTo(c,h+14),t.stroke();for(let _=60;_<=180;_+=60)t.strokeStyle=`rgba(80,140,255,${(1-_/200)*.3*p*(s?1.5:1)})`,t.beginPath(),t.arc(n.x,n.y,_,0,Math.PI*2),t.stroke();t.shadowBlur=0}}function AA(t,e,n,i,r,s){t.fillStyle=s?"#0a0812":"#f4f2ef",t.fillRect(0,0,i,r);const o=e*4e-4,a=[{x:i*(.5+.38*Math.sin(o*.7)),y:r*(.5+.38*Math.cos(o*.5)),r:i*.52,hue:44},{x:i*(.5+.32*Math.cos(o*.4)),y:r*(.5+.38*Math.sin(o*.6)),r:i*.46,hue:4},{x:i*(.5+.3*Math.sin(o*.9+1)),y:r*(.5+.28*Math.cos(o*.7+2)),r:i*.4,hue:216},{x:i*(.5+.2*Math.cos(o*1.1)),y:r*(.5+.32*Math.sin(o*.8+1)),r:i*.34,hue:28}];n.x>=0&&a.push({x:n.x,y:n.y,r:260,hue:44});const l=s?88:82,u=s?60:52,f=s?.65:.55;for(const c of a){const h=t.createRadialGradient(c.x,c.y,0,c.x,c.y,c.r);h.addColorStop(0,`hsla(${c.hue},${l}%,${u}%,${f})`),h.addColorStop(.5,`hsla(${c.hue},${l-10}%,${u+8}%,${f*.45})`),h.addColorStop(1,"transparent"),t.fillStyle=h,t.fillRect(0,0,i,r)}if(n.x>=0){const c=t.createRadialGradient(n.x,n.y,0,n.x,n.y,100);c.addColorStop(0,s?"rgba(255,255,255,0.45)":"rgba(255,255,255,0.55)"),c.addColorStop(1,"transparent"),t.fillStyle=c,t.fillRect(0,0,i,r)}}function CA(t,e,n=22){return Array.from({length:n},(i,r)=>({x:Math.random()*t,y:Math.random()*e,r:40+Math.random()*90,speed:.18+Math.random()*.32,opacity:.32+Math.random()*.28,hue:en[r%en.length]}))}function RA(t,e,n,i,r,s,o){t.fillStyle=o?"#080c16":"#eff2f8",t.fillRect(0,0,i,r);const a=t.createRadialGradient(i/2,r/2,0,i/2,r/2,Math.max(i,r)*.55);o?(a.addColorStop(0,"rgba(20,30,60,0.22)"),a.addColorStop(1,"rgba(0,0,0,0.15)")):(a.addColorStop(0,"rgba(255,255,255,0.28)"),a.addColorStop(1,"rgba(210,220,250,0.06)")),t.fillStyle=a,t.fillRect(0,0,i,r);const l=e*8e-4,u=o?90:85,f=o?62:52;for(const c of s){if(c.y-=c.speed,c.x+=Math.sin(l+c.r*.04)*.45,n.x>=0){const h=c.x-n.x,p=c.y-n.y,_=Math.sqrt(h*h+p*p);if(_<180&&_>0){const y=(180-_)/180;c.x+=h/_*y*2.5,c.y+=p/_*y*2.5}}c.y<-c.r*2&&(c.y=r+c.r,c.x=Math.random()*i),c.x<-c.r&&(c.x=i+c.r),c.x>i+c.r&&(c.x=-c.r),t.beginPath(),t.arc(c.x,c.y,c.r,0,Math.PI*2),t.fillStyle=`hsla(${c.hue},${u}%,${f}%,${c.opacity})`,t.fill(),t.strokeStyle=`hsla(${c.hue},${u-20}%,${f-8}%,${c.opacity*.55})`,t.lineWidth=1.5,t.stroke()}}function Pm(t,e){return{x:t,y:e,age:0,maxAge:100+Math.random()*70,hue:en[Math.floor(Math.random()*en.length)]}}function PA(t,e,n,i,r,s,o,a){t.fillStyle=a?"#060810":"#f0f4f8",t.fillRect(0,0,i,r);const l=t.createRadialGradient(i/2,r/2,0,i/2,r/2,Math.max(i,r)*.65);a?(l.addColorStop(0,"rgba(10,15,35,0.22)"),l.addColorStop(1,"rgba(0,0,0,0.18)")):(l.addColorStop(0,"rgba(255,255,255,0.28)"),l.addColorStop(1,"rgba(195,215,250,0.06)")),t.fillStyle=l,t.fillRect(0,0,i,r),o%45===0&&s.push(Pm(Math.random()*i,Math.random()*r)),n.x>=0&&o%14===0&&s.push(Pm(n.x+(Math.random()-.5)*24,n.y+(Math.random()-.5)*24));const u=a?88:80,f=a?65:52;for(let c=s.length-1;c>=0;c--){const h=s[c];if(h.age++,h.age>=h.maxAge){s.splice(c,1);continue}const p=h.age/h.maxAge;for(let _=0;_<3;_++){const y=Math.max(0,p-_*.14);y<=0||(t.beginPath(),t.arc(h.x,h.y,y*90,0,Math.PI*2),t.strokeStyle=`hsla(${h.hue},${u}%,${f}%,${(1-y)*.65*(1-_*.28)})`,t.lineWidth=1.5-_*.4,t.stroke())}p<.18&&(t.beginPath(),t.arc(h.x,h.y,2.5,0,Math.PI*2),t.fillStyle=`hsla(${h.hue},${u}%,${f}%,${(1-p/.18)*.9})`,t.fill())}}function bA(t,e,n,i,r,s){t.fillStyle=s?"#0a0a0a":"#f5f5f5",t.fillRect(0,0,i,r);const o=26,a=e*.001,l=Math.ceil(i/o)+1,u=Math.ceil(r/o)+1,f=s?88:85,c=s?65:52;for(let h=0;h<u;h++)for(let p=0;p<l;p++){const _=p*o,y=h*o,g=Math.sin(p*.32+a*2)*Math.cos(h*.28+a*1.6);let d=1.8+g*1.4,v=(s?.45:.36)+g*.22;if(n.x>=0){const x=_-n.x,U=y-n.y,A=Math.max(0,1-Math.sqrt(x*x+U*U)/130);d+=A*5,v+=A*.65}const m=en[(p+h)%en.length];t.beginPath(),t.arc(_,y,Math.max(.4,d),0,Math.PI*2),t.fillStyle=`hsla(${m},${f}%,${c}%,${Math.min(1,v)})`,t.fill()}}function LA(t,e,n,i,r,s){t.fillStyle=s?"#060a12":"#f0f4ef",t.fillRect(0,0,i,r);const o=e*5e-4,a=[{hue:44,sat:s?90:82,lit:s?62:52,y0:.25,amp:.12,freq:2.4,speed:.7,bw:.22},{hue:4,sat:s?88:80,lit:s?65:50,y0:.5,amp:.1,freq:3.1,speed:.5,bw:.18},{hue:216,sat:s?92:85,lit:s?60:48,y0:.7,amp:.14,freq:1.8,speed:.9,bw:.2},{hue:28,sat:s?85:75,lit:s?68:54,y0:.38,amp:.08,freq:4.2,speed:.4,bw:.14}];for(const l of a){const u=r*l.y0+Math.sin(o*l.speed)*r*l.amp,f=r*l.bw*.5;t.save(),t.beginPath(),t.moveTo(0,u-f+Math.sin(o*l.speed*1.4)*r*.04);for(let h=0;h<=i;h+=4)t.lineTo(h,u-f+Math.sin(h*.008*l.freq+o*l.speed*1.4)*r*.04);for(let h=i;h>=0;h-=4)t.lineTo(h,u+f+Math.sin(h*.008*l.freq+o*l.speed*1.4+Math.PI)*r*.04);t.closePath(),t.clip();const c=t.createLinearGradient(0,u-f,0,u+f);c.addColorStop(0,"transparent"),c.addColorStop(.5,`hsla(${l.hue},${l.sat}%,${l.lit}%,${s?.72:.5})`),c.addColorStop(1,"transparent"),t.fillStyle=c,t.fillRect(0,0,i,r),t.restore()}if(n.x>=0){const l=t.createRadialGradient(n.x,n.y,0,n.x,n.y,140);l.addColorStop(0,s?"rgba(255,255,255,0.30)":"rgba(255,255,255,0.52)"),l.addColorStop(.5,s?"rgba(255,210,60,0.14)":"rgba(255,210,60,0.18)"),l.addColorStop(1,"transparent"),t.fillStyle=l,t.fillRect(0,0,i,r)}}function DA(t,e,n=80){return Array.from({length:n},(i,r)=>({x:Math.random()*t,y:Math.random()*e,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,hue:en[r%en.length]}))}function IA(t,e,n,i,r,s,o){t.fillStyle=o?"#080b14":"#f2f4f8",t.fillRect(0,0,i,r);const a=o?90:82,l=o?65:50;for(const f of s)f.x+=f.vx,f.y+=f.vy,(f.x<0||f.x>i)&&(f.vx*=-1),(f.y<0||f.y>r)&&(f.vy*=-1);for(let f=0;f<s.length;f++)for(let c=f+1;c<s.length;c++){const h=s[f].x-s[c].x,p=s[f].y-s[c].y,_=Math.sqrt(h*h+p*p);_<130&&(t.strokeStyle=`hsla(${s[f].hue},${a}%,${l}%,${(1-_/130)*(o?.32:.2)})`,t.lineWidth=.7,t.beginPath(),t.moveTo(s[f].x,s[f].y),t.lineTo(s[c].x,s[c].y),t.stroke())}const u=[];if(n.x>=0){for(const f of s){const c=f.x-n.x,h=f.y-n.y;Math.sqrt(c*c+h*h)<160&&u.push(f)}for(const f of u)t.strokeStyle=`hsla(${f.hue},${a}%,${l}%,0.48)`,t.lineWidth=.8,t.beginPath(),t.moveTo(f.x,f.y),t.lineTo(n.x,n.y),t.stroke()}for(const f of s){const c=u.includes(f),h=c?3.5:2,p=c?.95:o?.65:.55;o&&c&&(t.shadowBlur=8,t.shadowColor=`hsla(${f.hue},90%,65%,0.8)`),t.beginPath(),t.arc(f.x,f.y,h,0,Math.PI*2),t.fillStyle=`hsla(${f.hue},${a}%,${l}%,${p})`,t.fill(),t.shadowBlur=0}}function NA(t,e,n,i,r,s){t.fillStyle=s?"#0a0d14":"#f4f2f0",t.fillRect(0,0,i,r);const o=e*.001,a=36,l=a*1.5,u=a*Math.sqrt(3),f=Math.ceil(i/l)+3,c=Math.ceil(r/u)+3,h=s?88:82,p=s?15:92;for(let _=-1;_<f;_++)for(let y=-1;y<c;y++){const g=(_%2+2)%2===1,d=_*l,v=y*u+(g?u*.5:0),m=.5+.5*Math.sin(_*.4+y*.35+o*2);let x=0;if(n.x>=0){const I=d-n.x,E=v-n.y;x=Math.max(0,1-Math.sqrt(I*I+E*E)/200)}const U=en[((_*3+y*2)%en.length+en.length)%en.length],A=p+m*(s?42:-42)+x*(s?16:-12),C=s?.16+m*.34+x*.46:.1+m*.28+x*.38;t.beginPath();for(let I=0;I<6;I++){const E=I*Math.PI/3,M=d+a*Math.cos(E),F=v+a*Math.sin(E);I===0?t.moveTo(M,F):t.lineTo(M,F)}t.closePath(),t.fillStyle=`hsla(${U},${h}%,${Math.max(0,Math.min(100,A))}%,${Math.min(1,C)})`,t.fill(),t.strokeStyle=`hsla(${U},${h}%,${s?50:40}%,${s?.08+x*.28:.06+x*.22})`,t.lineWidth=.8,t.stroke()}}function UA(t,e,n,i,r,s){t.fillStyle=s?"#080c12":"#f2f4f0",t.fillRect(0,0,i,r);const o=e*6e-4,a=[{hue:44,freq:.008,amp:.1,phase:0,speed:1,oy:.2},{hue:4,freq:.006,amp:.12,phase:1.5,speed:.8,oy:.38},{hue:216,freq:.01,amp:.09,phase:3,speed:1.2,oy:.55},{hue:28,freq:.007,amp:.11,phase:.8,speed:.6,oy:.7},{hue:44,freq:.012,amp:.07,phase:2.2,speed:1.5,oy:.85}];for(const l of a){const u=r*l.oy,f=r*.09;t.save(),t.beginPath(),t.moveTo(0,u+Math.sin(o*l.speed+l.phase)*r*l.amp);for(let h=0;h<=i;h+=3){let p=Math.sin(h*l.freq+o*l.speed+l.phase)*r*l.amp;if(n.x>=0){const _=Math.sqrt((h-n.x)**2+(u-n.y)**2);p+=Math.max(0,1-_/200)*42*Math.sin((h-n.x)*.05)}t.lineTo(h,u+p)}for(let h=i;h>=0;h-=3){let p=Math.sin(h*l.freq+o*l.speed+l.phase)*r*l.amp;if(n.x>=0){const _=Math.sqrt((h-n.x)**2+(u-n.y)**2);p+=Math.max(0,1-_/200)*42*Math.sin((h-n.x)*.05)}t.lineTo(h,u+p+f)}t.closePath(),t.clip();const c=t.createLinearGradient(0,u-f*.5,0,u+f*1.5);c.addColorStop(0,"transparent"),c.addColorStop(.5,`hsla(${l.hue},${s?90:82}%,${s?62:52}%,${s?.68:.5})`),c.addColorStop(1,"transparent"),t.fillStyle=c,t.fillRect(0,0,i,r),t.restore()}}function OA(t,e,n=120){return Array.from({length:n},(i,r)=>({x:Math.random()*t,y:Math.random()*e,vx:(Math.random()-.5)*2,vy:(Math.random()-.5)*2,hue:en[r%en.length]}))}function FA(t,e,n,i,r,s,o){t.fillStyle=o?"#060810":"#f0f2f5",t.fillRect(0,0,i,r);const a=e*.001,l=[{x:i/2+Math.cos(a*.7)*i*.28,y:r/2+Math.sin(a*.5)*r*.28},{x:i/2+Math.cos(a*.4+2)*i*.22,y:r/2+Math.sin(a*.6+1)*r*.22}],u=o?90:85,f=o?65:52;for(const c of s){let h=0,p=0;for(const y of l){const g=y.x-c.x,d=y.y-c.y,v=Math.sqrt(g*g+d*d)+1;h+=g/v*Math.min(v*.005,.8),p+=d/v*Math.min(v*.005,.8)}if(n.x>=0){const y=c.x-n.x,g=c.y-n.y,d=Math.sqrt(y*y+g*g)+1;d<140&&(h+=y/d*(140-d)*.04,p+=g/d*(140-d)*.04)}c.vx=c.vx*.92+h,c.vy=c.vy*.92+p;const _=Math.sqrt(c.vx*c.vx+c.vy*c.vy);_>3.5&&(c.vx=c.vx/_*3.5,c.vy=c.vy/_*3.5),c.x+=c.vx,c.y+=c.vy,c.x<0&&(c.x=i),c.x>i&&(c.x=0),c.y<0&&(c.y=r),c.y>r&&(c.y=0),t.beginPath(),t.arc(c.x,c.y,o?2.2:2,0,Math.PI*2),t.fillStyle=`hsla(${c.hue},${u}%,${f}%,${o?.72:.6})`,t.fill()}for(const c of l){const h=t.createRadialGradient(c.x,c.y,0,c.x,c.y,60);h.addColorStop(0,o?"rgba(255,255,255,0.10)":"rgba(255,255,255,0.25)"),h.addColorStop(1,"transparent"),t.fillStyle=h,t.fillRect(0,0,i,r)}}function bm(t,e,n,i,r,s,o,a,l,u,f,c){switch(e){case"blueprint":wA(t,n,i,r,s,c);break;case"plasma":AA(t,n,i,r,s,c);break;case"bubbles":RA(t,n,i,r,s,o,c);break;case"drops":PA(t,n,i,r,s,a,l,c);break;case"dotted":bA(t,n,i,r,s,c);break;case"aurora":LA(t,n,i,r,s,c);break;case"constellation":IA(t,n,i,r,s,u,c);break;case"hexgrid":NA(t,n,i,r,s,c);break;case"waves":UA(t,n,i,r,s,c);break;case"swarm":FA(t,n,i,r,s,f,c);break}}const kA={blueprint:"Blueprint",plasma:"Plasma",bubbles:"Bubbles",drops:"Drops",dotted:"Dotted",aurora:"Aurora",constellation:"Stars",hexgrid:"Hex",waves:"Waves",swarm:"Swarm"},zA=()=>{const t=lt.useRef(null),e=lt.useRef({x:-9999,y:-9999}),n=lt.useRef([]),i=lt.useRef([]),r=lt.useRef([]),s=lt.useRef([]),o=lt.useRef(0),a=lt.useRef(0),l=lt.useRef(0),u=lt.useRef(-1),f=lt.useRef(!1),c=lt.useRef(!1),h=lt.useRef(fr[0]),[p,_]=lt.useState(fr[0]),[y,g]=lt.useState(!1),[d,v]=lt.useState(!1),m=()=>{l.current=(l.current+1)%fr.length,u.current=-1},x=()=>{const I=!f.current;f.current=I,I||(u.current=-1),g(I)},U=()=>{const I=!c.current;c.current=I,v(I)};lt.useEffect(()=>{const I=t.current;if(!I)return;const E=I.getContext("2d");if(!E)return;const M=document.createElement("canvas"),F=document.createElement("canvas"),G=M.getContext("2d"),j=F.getContext("2d"),Q=()=>{const L=window.innerWidth,J=window.innerHeight;I.width=L,I.height=J,M.width=L,M.height=J,F.width=L,F.height=J,n.current.length===0&&(n.current=CA(L,J)),r.current.length===0&&(r.current=DA(L,J)),s.current.length===0&&(s.current=OA(L,J))};Q(),window.addEventListener("resize",Q);const re=L=>{e.current={x:L.clientX,y:L.clientY}},ee=()=>{e.current={x:-9999,y:-9999}};window.addEventListener("mousemove",re),document.documentElement.addEventListener("mouseleave",ee);const $=L=>{u.current<0&&(u.current=L);let J=L-u.current;const se=I.width,pe=I.height,we=e.current,Be=a.current++,O=c.current;f.current?J=Math.min(J,fl):J>=TA&&(l.current=(l.current+1)%fr.length,u.current=L,J=0);const N=fr[l.current],b=fr[(l.current+1)%fr.length];N!==h.current&&(h.current=N,_(N));let w=0;if(J>fl){const K=(J-fl)/N_;w=Math.min(1,K*K*(3-2*K))}bm(G,N,L,we,se,pe,n.current,i.current,Be,r.current,s.current,O),w>0&&bm(j,b,L,we,se,pe,n.current,i.current,Be,r.current,s.current,O),E.clearRect(0,0,se,pe),E.globalAlpha=1-w,E.drawImage(M,0,0),w>0&&(E.globalAlpha=w,E.drawImage(F,0,0)),E.globalAlpha=1,o.current=requestAnimationFrame($)};return o.current=requestAnimationFrame($),()=>{cancelAnimationFrame(o.current),window.removeEventListener("resize",Q),window.removeEventListener("mousemove",re),document.documentElement.removeEventListener("mouseleave",ee)}},[]);const A={background:"none",border:"none",padding:"0 3px",cursor:"pointer",fontSize:10,lineHeight:1,display:"flex",alignItems:"center"},C={width:1,height:12,margin:"0 2px",display:"inline-block",background:d?"rgba(180,180,200,0.22)":"rgba(180,180,180,0.32)"};return _t.jsxs("div",{style:{position:"absolute",inset:0},children:[_t.jsx("canvas",{ref:t,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0}}),_t.jsxs("div",{style:{position:"absolute",top:8,right:8,zIndex:10,display:"flex",alignItems:"center",background:d?"rgba(18,18,26,0.80)":"rgba(255,255,255,0.65)",backdropFilter:"blur(5px)",border:d?"1px solid rgba(80,90,130,0.38)":"1px solid rgba(200,185,165,0.28)",borderRadius:12,padding:"1px 2px",fontFamily:"system-ui,sans-serif",boxShadow:"0 1px 4px rgba(0,0,0,0.10)",userSelect:"none"},children:[_t.jsx("button",{onClick:U,title:d?"Light mode":"Dark mode",style:{...A,color:d?"#ffd060":"#666",fontSize:11,paddingRight:4},children:d?"☀":"🌙"}),_t.jsx("span",{style:C}),_t.jsx("button",{onClick:m,title:"Next background",style:{...A,color:d?"#aab":"#aaa"},children:"↻"}),_t.jsx("span",{style:{padding:"0 3px",color:d?"#99a":"#888",fontSize:10,letterSpacing:"0.01em"},children:kA[p]}),_t.jsx("button",{onClick:x,title:y?"Resume cycling":"Pin background",style:{...A,color:y?"#d05040":d?"#556":"#ccc",fontSize:9},children:y?"●":"○"})]})]})};class BA extends tv.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?_t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh",background:"#fefce8",color:"#0f172a"},children:_t.jsxs("div",{style:{padding:"2rem",background:"#fee2e2",border:"1px solid #fca5a5",borderRadius:"0.5rem",maxWidth:"32rem",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)"},children:[_t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"bold",marginBottom:"0.5rem",color:"#b91c1c"},children:"Application Error"}),_t.jsx("p",{style:{color:"#334155",marginBottom:"1rem"},children:"The renderer encountered an issue. Try reloading the preview."}),_t.jsx("p",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#ef4444",wordBreak:"break-word"},children:(e=this.state.error)==null?void 0:e.toString()})]})}):this.props.children}}function VA(){return _t.jsx(BA,{children:_t.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[_t.jsx(zA,{}),_t.jsx("div",{style:{position:"relative",zIndex:1,width:"100%",height:"100%"},children:_t.jsx(MA,{svg:EA,smoothness:.6,color:"#4f46e5"})})]})})}G0(document.getElementById("root")).render(_t.jsx(lt.StrictMode,{children:_t.jsx(VA,{})}));
