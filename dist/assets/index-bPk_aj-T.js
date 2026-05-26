(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Cv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Mm={exports:{}},Ol={},Em={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Go=Symbol.for("react.element"),Rv=Symbol.for("react.portal"),bv=Symbol.for("react.fragment"),Pv=Symbol.for("react.strict_mode"),Lv=Symbol.for("react.profiler"),Iv=Symbol.for("react.provider"),Dv=Symbol.for("react.context"),Nv=Symbol.for("react.forward_ref"),Uv=Symbol.for("react.suspense"),Fv=Symbol.for("react.memo"),Ov=Symbol.for("react.lazy"),rd=Symbol.iterator;function kv(t){return t===null||typeof t!="object"?null:(t=rd&&t[rd]||t["@@iterator"],typeof t=="function"?t:null)}var wm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tm=Object.assign,Am={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||wm}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cm(){}Cm.prototype=Fs.prototype;function Hf(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||wm}var Gf=Hf.prototype=new Cm;Gf.constructor=Hf;Tm(Gf,Fs.prototype);Gf.isPureReactComponent=!0;var sd=Array.isArray,Rm=Object.prototype.hasOwnProperty,Wf={current:null},bm={key:!0,ref:!0,__self:!0,__source:!0};function Pm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Rm.call(e,i)&&!bm.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Go,type:t,key:s,ref:o,props:r,_owner:Wf.current}}function zv(t,e){return{$$typeof:Go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Go}function Bv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var od=/\/+/g;function lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bv(""+t.key):e.toString(36)}function Ha(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Go:case Rv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+lu(o,0):i,sd(r)?(n="",t!=null&&(n=t.replace(od,"$&/")+"/"),Ha(r,e,n,"",function(u){return u})):r!=null&&(Xf(r)&&(r=zv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(od,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",sd(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+lu(s,a);o+=Ha(s,e,n,l,r)}else if(l=kv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+lu(s,a++),o+=Ha(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ea(t,e,n){if(t==null)return t;var i=[],r=0;return Ha(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Vv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Ga={transition:null},Hv={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Ga,ReactCurrentOwner:Wf};function Lm(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:ea,forEach:function(t,e,n){ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ea(t,function(){e++}),e},toArray:function(t){return ea(t,function(e){return e})||[]},only:function(t){if(!Xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Fs;$e.Fragment=bv;$e.Profiler=Lv;$e.PureComponent=Hf;$e.StrictMode=Pv;$e.Suspense=Uv;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv;$e.act=Lm;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Tm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Rm.call(e,l)&&!bm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Go,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:Dv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Iv,_context:t},t.Consumer=t};$e.createElement=Pm;$e.createFactory=function(t){var e=Pm.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:Nv,render:t}};$e.isValidElement=Xf;$e.lazy=function(t){return{$$typeof:Ov,_payload:{_status:-1,_result:t},_init:Vv}};$e.memo=function(t,e){return{$$typeof:Fv,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Ga.transition;Ga.transition={};try{t()}finally{Ga.transition=e}};$e.unstable_act=Lm;$e.useCallback=function(t,e){return qt.current.useCallback(t,e)};$e.useContext=function(t){return qt.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};$e.useEffect=function(t,e){return qt.current.useEffect(t,e)};$e.useId=function(){return qt.current.useId()};$e.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return qt.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};$e.useRef=function(t){return qt.current.useRef(t)};$e.useState=function(t){return qt.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return qt.current.useTransition()};$e.version="18.3.1";Em.exports=$e;var Ge=Em.exports;const Gv=Cv(Ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv=Ge,Xv=Symbol.for("react.element"),qv=Symbol.for("react.fragment"),$v=Object.prototype.hasOwnProperty,jv=Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yv={key:!0,ref:!0,__self:!0,__source:!0};function Im(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)$v.call(e,i)&&!Yv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Xv,type:t,key:s,ref:o,props:r,_owner:jv.current}}Ol.Fragment=qv;Ol.jsx=Im;Ol.jsxs=Im;Mm.exports=Ol;var Ie=Mm.exports,Dm={exports:{}},hn={},Nm={exports:{}},Um={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,re){var se=L.length;L.push(re);e:for(;0<se;){var fe=se-1>>>1,ge=L[fe];if(0<r(ge,re))L[fe]=re,L[se]=ge,se=fe;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var re=L[0],se=L.pop();if(se!==re){L[0]=se;e:for(var fe=0,ge=L.length,be=ge>>>1;fe<be;){var U=2*(fe+1)-1,N=L[U],b=U+1,E=L[b];if(0>r(N,se))b<ge&&0>r(E,N)?(L[fe]=E,L[b]=se,fe=b):(L[fe]=N,L[U]=se,fe=U);else if(b<ge&&0>r(E,se))L[fe]=E,L[b]=se,fe=b;else break e}}return re}function r(L,re){var se=L.sortIndex-re.sortIndex;return se!==0?se:L.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,c=null,h=3,p=!1,v=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var re=n(u);re!==null;){if(re.callback===null)i(u);else if(re.startTime<=L)i(u),re.sortIndex=re.expirationTime,e(l,re);else break;re=n(u)}}function y(L){if(x=!1,m(L),!v)if(n(l)!==null)v=!0,te(D);else{var re=n(u);re!==null&&J(y,re.startTime-L)}}function D(L,re){v=!1,x&&(x=!1,d(F),F=-1),p=!0;var se=h;try{for(m(re),c=n(l);c!==null&&(!(c.expirationTime>re)||L&&!O());){var fe=c.callback;if(typeof fe=="function"){c.callback=null,h=c.priorityLevel;var ge=fe(c.expirationTime<=re);re=t.unstable_now(),typeof ge=="function"?c.callback=ge:c===n(l)&&i(l),m(re)}else i(l);c=n(l)}if(c!==null)var be=!0;else{var U=n(u);U!==null&&J(y,U.startTime-re),be=!1}return be}finally{c=null,h=se,p=!1}}var C=!1,A=null,F=-1,T=5,S=-1;function O(){return!(t.unstable_now()-S<T)}function H(){if(A!==null){var L=t.unstable_now();S=L;var re=!0;try{re=A(!0,L)}finally{re?q():(C=!1,A=null)}}else C=!1}var q;if(typeof _=="function")q=function(){_(H)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,oe=ee.port2;ee.port1.onmessage=H,q=function(){oe.postMessage(null)}}else q=function(){g(H,0)};function te(L){A=L,C||(C=!0,q())}function J(L,re){F=g(function(){L(t.unstable_now())},re)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,te(D))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var re=3;break;default:re=h}var se=h;h=re;try{return L()}finally{h=se}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,re){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var se=h;h=L;try{return re()}finally{h=se}},t.unstable_scheduleCallback=function(L,re,se){var fe=t.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?fe+se:fe):se=fe,L){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=se+ge,L={id:f++,callback:re,priorityLevel:L,startTime:se,expirationTime:ge,sortIndex:-1},se>fe?(L.sortIndex=se,e(u,L),n(l)===null&&L===n(u)&&(x?(d(F),F=-1):x=!0,J(y,se-fe))):(L.sortIndex=ge,e(l,L),v||p||(v=!0,te(D))),L},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(L){var re=h;return function(){var se=h;h=re;try{return L.apply(this,arguments)}finally{h=se}}}})(Um);Nm.exports=Um;var Kv=Nm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv=Ge,fn=Kv;function ve(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fm=new Set,Mo={};function Dr(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(Mo[t]=e,t=0;t<e.length;t++)Fm.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hc=Object.prototype.hasOwnProperty,Jv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ad={},ld={};function Qv(t){return hc.call(ld,t)?!0:hc.call(ad,t)?!1:Jv.test(t)?ld[t]=!0:(ad[t]=!0,!1)}function e_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t_(t,e,n,i){if(e===null||typeof e>"u"||e_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var qf=/[\-:]([a-z])/g;function $f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(qf,$f);Nt[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(qf,$f);Nt[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(qf,$f);Nt[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function jf(t,e,n,i){var r=Nt.hasOwnProperty(e)?Nt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t_(e,n,r,i)&&(n=null),i||r===null?Qv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),Yf=Symbol.for("react.strict_mode"),dc=Symbol.for("react.profiler"),Om=Symbol.for("react.provider"),km=Symbol.for("react.context"),Kf=Symbol.for("react.forward_ref"),pc=Symbol.for("react.suspense"),mc=Symbol.for("react.suspense_list"),Zf=Symbol.for("react.memo"),Li=Symbol.for("react.lazy"),zm=Symbol.for("react.offscreen"),ud=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=ud&&t[ud]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,uu;function io(t){if(uu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uu=e&&e[1]||""}return`
`+uu+t}var cu=!1;function fu(t,e){if(!t||cu)return"";cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function n_(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=fu(t.type,!1),t;case 11:return t=fu(t.type.render,!1),t;case 1:return t=fu(t.type,!0),t;default:return""}}function gc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case dc:return"Profiler";case Yf:return"StrictMode";case pc:return"Suspense";case mc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case km:return(t.displayName||"Context")+".Consumer";case Om:return(t._context.displayName||"Context")+".Provider";case Kf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zf:return e=t.displayName||null,e!==null?e:gc(t.type)||"Memo";case Li:e=t._payload,t=t._init;try{return gc(t(e))}catch{}}return null}function i_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gc(e);case 8:return e===Yf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function r_(t){var e=Bm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function na(t){t._valueTracker||(t._valueTracker=r_(t))}function Vm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Bm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vc(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cd(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Hm(t,e){e=e.checked,e!=null&&jf(t,"checked",e,!1)}function _c(t,e){Hm(t,e);var n=ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xc(t,e.type,n):e.hasOwnProperty("defaultValue")&&xc(t,e.type,ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xc(t,e,n){(e!=="number"||ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ve(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ve(92));if(ro(n)){if(1<n.length)throw Error(ve(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ji(n)}}function Gm(t,e){var n=ji(e.value),i=ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function dd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Wm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Wm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ia,Xm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s_=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(t){s_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),lo[e]=lo[t]})});function qm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||lo.hasOwnProperty(t)&&lo[t]?(""+e).trim():e+"px"}function $m(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=qm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var o_=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mc(t,e){if(e){if(o_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ve(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ve(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ve(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ve(62))}}function Ec(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wc=null;function Jf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tc=null,ms=null,gs=null;function pd(t){if(t=qo(t)){if(typeof Tc!="function")throw Error(ve(280));var e=t.stateNode;e&&(e=Hl(e),Tc(t.stateNode,t.type,e))}}function jm(t){ms?gs?gs.push(t):gs=[t]:ms=t}function Ym(){if(ms){var t=ms,e=gs;if(gs=ms=null,pd(t),e)for(t=0;t<e.length;t++)pd(e[t])}}function Km(t,e){return t(e)}function Zm(){}var hu=!1;function Jm(t,e,n){if(hu)return t(e,n);hu=!0;try{return Km(t,e,n)}finally{hu=!1,(ms!==null||gs!==null)&&(Zm(),Ym())}}function wo(t,e){var n=t.stateNode;if(n===null)return null;var i=Hl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ve(231,e,typeof n));return n}var Ac=!1;if(mi)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{Ac=!1}function a_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var uo=!1,al=null,ll=!1,Cc=null,l_={onError:function(t){uo=!0,al=t}};function u_(t,e,n,i,r,s,o,a,l){uo=!1,al=null,a_.apply(l_,arguments)}function c_(t,e,n,i,r,s,o,a,l){if(u_.apply(this,arguments),uo){if(uo){var u=al;uo=!1,al=null}else throw Error(ve(198));ll||(ll=!0,Cc=u)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function md(t){if(Nr(t)!==t)throw Error(ve(188))}function f_(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(ve(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return md(r),t;if(s===i)return md(r),e;s=s.sibling}throw Error(ve(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ve(189))}}if(n.alternate!==i)throw Error(ve(190))}if(n.tag!==3)throw Error(ve(188));return n.stateNode.current===n?t:e}function eg(t){return t=f_(t),t!==null?tg(t):null}function tg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tg(t);if(e!==null)return e;t=t.sibling}return null}var ng=fn.unstable_scheduleCallback,gd=fn.unstable_cancelCallback,h_=fn.unstable_shouldYield,d_=fn.unstable_requestPaint,vt=fn.unstable_now,p_=fn.unstable_getCurrentPriorityLevel,Qf=fn.unstable_ImmediatePriority,ig=fn.unstable_UserBlockingPriority,ul=fn.unstable_NormalPriority,m_=fn.unstable_LowPriority,rg=fn.unstable_IdlePriority,kl=null,jn=null;function g_(t){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:x_,v_=Math.log,__=Math.LN2;function x_(t){return t>>>=0,t===0?32:31-(v_(t)/__|0)|0}var ra=64,sa=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=so(a):(s&=o,s!==0&&(i=so(s)))}else o=n&~r,o!==0?i=so(o):s!==0&&(i=so(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function y_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=y_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Rc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sg(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function M_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function eh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function og(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ag,th,lg,ug,cg,bc=!1,oa=[],ki=null,zi=null,Bi=null,To=new Map,Ao=new Map,Di=[],E_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vd(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":To.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(e.pointerId)}}function Xs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=qo(e),e!==null&&th(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function w_(t,e,n,i,r){switch(e){case"focusin":return ki=Xs(ki,t,e,n,i,r),!0;case"dragenter":return zi=Xs(zi,t,e,n,i,r),!0;case"mouseover":return Bi=Xs(Bi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return To.set(s,Xs(To.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ao.set(s,Xs(Ao.get(s)||null,t,e,n,i,r)),!0}return!1}function fg(t){var e=gr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qm(n),e!==null){t.blockedOn=e,cg(t.priority,function(){lg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);wc=i,n.target.dispatchEvent(i),wc=null}else return e=qo(n),e!==null&&th(e),t.blockedOn=n,!1;e.shift()}return!0}function _d(t,e,n){Wa(t)&&n.delete(e)}function T_(){bc=!1,ki!==null&&Wa(ki)&&(ki=null),zi!==null&&Wa(zi)&&(zi=null),Bi!==null&&Wa(Bi)&&(Bi=null),To.forEach(_d),Ao.forEach(_d)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,bc||(bc=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,T_)))}function Co(t){function e(r){return qs(r,t)}if(0<oa.length){qs(oa[0],t);for(var n=1;n<oa.length;n++){var i=oa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&qs(ki,t),zi!==null&&qs(zi,t),Bi!==null&&qs(Bi,t),To.forEach(e),Ao.forEach(e),n=0;n<Di.length;n++)i=Di[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Di.length&&(n=Di[0],n.blockedOn===null);)fg(n),n.blockedOn===null&&Di.shift()}var vs=Si.ReactCurrentBatchConfig,fl=!0;function A_(t,e,n,i){var r=nt,s=vs.transition;vs.transition=null;try{nt=1,nh(t,e,n,i)}finally{nt=r,vs.transition=s}}function C_(t,e,n,i){var r=nt,s=vs.transition;vs.transition=null;try{nt=4,nh(t,e,n,i)}finally{nt=r,vs.transition=s}}function nh(t,e,n,i){if(fl){var r=Pc(t,e,n,i);if(r===null)Eu(t,e,i,hl,n),vd(t,i);else if(w_(r,t,e,n,i))i.stopPropagation();else if(vd(t,i),e&4&&-1<E_.indexOf(t)){for(;r!==null;){var s=qo(r);if(s!==null&&ag(s),s=Pc(t,e,n,i),s===null&&Eu(t,e,i,hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Eu(t,e,i,null,n)}}var hl=null;function Pc(t,e,n,i){if(hl=null,t=Jf(i),t=gr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hl=t,null}function hg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p_()){case Qf:return 1;case ig:return 4;case ul:case m_:return 16;case rg:return 536870912;default:return 16}default:return 16}}var Fi=null,ih=null,Xa=null;function dg(){if(Xa)return Xa;var t,e=ih,n=e.length,i,r="value"in Fi?Fi.value:Fi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Xa=r.slice(t,1<i?1-i:void 0)}function qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function aa(){return!0}function xd(){return!1}function dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?aa:xd,this.isPropagationStopped=xd,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rh=dn(Os),Xo=ht({},Os,{view:0,detail:0}),R_=dn(Xo),pu,mu,$s,zl=ht({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(pu=t.screenX-$s.screenX,mu=t.screenY-$s.screenY):mu=pu=0,$s=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),yd=dn(zl),b_=ht({},zl,{dataTransfer:0}),P_=dn(b_),L_=ht({},Xo,{relatedTarget:0}),gu=dn(L_),I_=ht({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),D_=dn(I_),N_=ht({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U_=dn(N_),F_=ht({},Os,{data:0}),Sd=dn(F_),O_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=z_[t])?!!e[t]:!1}function sh(){return B_}var V_=ht({},Xo,{key:function(t){if(t.key){var e=O_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sh,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H_=dn(V_),G_=ht({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=dn(G_),W_=ht({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sh}),X_=dn(W_),q_=ht({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),$_=dn(q_),j_=ht({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y_=dn(j_),K_=[9,13,27,32],oh=mi&&"CompositionEvent"in window,co=null;mi&&"documentMode"in document&&(co=document.documentMode);var Z_=mi&&"TextEvent"in window&&!co,pg=mi&&(!oh||co&&8<co&&11>=co),Ed=" ",wd=!1;function mg(t,e){switch(t){case"keyup":return K_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function J_(t,e){switch(t){case"compositionend":return gg(e);case"keypress":return e.which!==32?null:(wd=!0,Ed);case"textInput":return t=e.data,t===Ed&&wd?null:t;default:return null}}function Q_(t,e){if(ns)return t==="compositionend"||!oh&&mg(t,e)?(t=dg(),Xa=ih=Fi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pg&&e.locale!=="ko"?null:e.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ex[t.type]:e==="textarea"}function vg(t,e,n,i){jm(i),e=dl(e,"onChange"),0<e.length&&(n=new rh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fo=null,Ro=null;function tx(t){Rg(t,0)}function Bl(t){var e=ss(t);if(Vm(e))return t}function nx(t,e){if(t==="change")return e}var _g=!1;if(mi){var vu;if(mi){var _u="oninput"in document;if(!_u){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),_u=typeof Ad.oninput=="function"}vu=_u}else vu=!1;_g=vu&&(!document.documentMode||9<document.documentMode)}function Cd(){fo&&(fo.detachEvent("onpropertychange",xg),Ro=fo=null)}function xg(t){if(t.propertyName==="value"&&Bl(Ro)){var e=[];vg(e,Ro,t,Jf(t)),Jm(tx,e)}}function ix(t,e,n){t==="focusin"?(Cd(),fo=e,Ro=n,fo.attachEvent("onpropertychange",xg)):t==="focusout"&&Cd()}function rx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bl(Ro)}function sx(t,e){if(t==="click")return Bl(e)}function ox(t,e){if(t==="input"||t==="change")return Bl(e)}function ax(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:ax;function bo(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!hc.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Rd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bd(t,e){var n=Rd(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rd(n)}}function yg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sg(){for(var t=window,e=ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ol(t.document)}return e}function ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lx(t){var e=Sg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yg(n.ownerDocument.documentElement,n)){if(i!==null&&ah(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=bd(n,s);var o=bd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ux=mi&&"documentMode"in document&&11>=document.documentMode,is=null,Lc=null,ho=null,Ic=!1;function Pd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ic||is==null||is!==ol(i)||(i=is,"selectionStart"in i&&ah(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ho&&bo(ho,i)||(ho=i,i=dl(Lc,"onSelect"),0<i.length&&(e=new rh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function la(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},xu={},Mg={};mi&&(Mg=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Vl(t){if(xu[t])return xu[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Mg)return xu[t]=e[n];return t}var Eg=Vl("animationend"),wg=Vl("animationiteration"),Tg=Vl("animationstart"),Ag=Vl("transitionend"),Cg=new Map,Ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zi(t,e){Cg.set(t,e),Dr(e,[t])}for(var yu=0;yu<Ld.length;yu++){var Su=Ld[yu],cx=Su.toLowerCase(),fx=Su[0].toUpperCase()+Su.slice(1);Zi(cx,"on"+fx)}Zi(Eg,"onAnimationEnd");Zi(wg,"onAnimationIteration");Zi(Tg,"onAnimationStart");Zi("dblclick","onDoubleClick");Zi("focusin","onFocus");Zi("focusout","onBlur");Zi(Ag,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Id(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,c_(i,e,void 0,t),t.currentTarget=null}function Rg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Id(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Id(r,a,u),s=l}}}if(ll)throw t=Cc,ll=!1,Cc=null,t}function rt(t,e){var n=e[Oc];n===void 0&&(n=e[Oc]=new Set);var i=t+"__bubble";n.has(i)||(bg(e,t,2,!1),n.add(i))}function Mu(t,e,n){var i=0;e&&(i|=4),bg(n,t,i,e)}var ua="_reactListening"+Math.random().toString(36).slice(2);function Po(t){if(!t[ua]){t[ua]=!0,Fm.forEach(function(n){n!=="selectionchange"&&(hx.has(n)||Mu(n,!1,t),Mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ua]||(e[ua]=!0,Mu("selectionchange",!1,e))}}function bg(t,e,n,i){switch(hg(e)){case 1:var r=A_;break;case 4:r=C_;break;default:r=nh}n=r.bind(null,e,n,t),r=void 0,!Ac||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Eu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=gr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Jm(function(){var u=s,f=Jf(n),c=[];e:{var h=Cg.get(t);if(h!==void 0){var p=rh,v=t;switch(t){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":p=H_;break;case"focusin":v="focus",p=gu;break;case"focusout":v="blur",p=gu;break;case"beforeblur":case"afterblur":p=gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=P_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=X_;break;case Eg:case wg:case Tg:p=D_;break;case Ag:p=$_;break;case"scroll":p=R_;break;case"wheel":p=Y_;break;case"copy":case"cut":case"paste":p=U_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Md}var x=(e&4)!==0,g=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var _=u,m;_!==null;){m=_;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,d!==null&&(y=wo(_,d),y!=null&&x.push(Lo(_,y,m)))),g)break;_=_.return}0<x.length&&(h=new p(h,v,null,n,f),c.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==wc&&(v=n.relatedTarget||n.fromElement)&&(gr(v)||v[gi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?gr(v):null,v!==null&&(g=Nr(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(x=yd,y="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=Md,y="onPointerLeave",d="onPointerEnter",_="pointer"),g=p==null?h:ss(p),m=v==null?h:ss(v),h=new x(y,_+"leave",p,n,f),h.target=g,h.relatedTarget=m,y=null,gr(f)===u&&(x=new x(d,_+"enter",v,n,f),x.target=m,x.relatedTarget=g,y=x),g=y,p&&v)t:{for(x=p,d=v,_=0,m=x;m;m=Fr(m))_++;for(m=0,y=d;y;y=Fr(y))m++;for(;0<_-m;)x=Fr(x),_--;for(;0<m-_;)d=Fr(d),m--;for(;_--;){if(x===d||d!==null&&x===d.alternate)break t;x=Fr(x),d=Fr(d)}x=null}else x=null;p!==null&&Dd(c,h,p,x,!1),v!==null&&g!==null&&Dd(c,g,v,x,!0)}}e:{if(h=u?ss(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var D=nx;else if(Td(h))if(_g)D=ox;else{D=rx;var C=ix}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(D=sx);if(D&&(D=D(t,u))){vg(c,D,n,f);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&xc(h,"number",h.value)}switch(C=u?ss(u):window,t){case"focusin":(Td(C)||C.contentEditable==="true")&&(is=C,Lc=u,ho=null);break;case"focusout":ho=Lc=is=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,Pd(c,n,f);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":Pd(c,n,f)}var A;if(oh)e:{switch(t){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else ns?mg(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(pg&&n.locale!=="ko"&&(ns||F!=="onCompositionStart"?F==="onCompositionEnd"&&ns&&(A=dg()):(Fi=f,ih="value"in Fi?Fi.value:Fi.textContent,ns=!0)),C=dl(u,F),0<C.length&&(F=new Sd(F,t,null,n,f),c.push({event:F,listeners:C}),A?F.data=A:(A=gg(n),A!==null&&(F.data=A)))),(A=Z_?J_(t,n):Q_(t,n))&&(u=dl(u,"onBeforeInput"),0<u.length&&(f=new Sd("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=A))}Rg(c,e)})}function Lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function dl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=wo(t,n),s!=null&&i.unshift(Lo(t,s,r)),s=wo(t,e),s!=null&&i.push(Lo(t,s,r))),t=t.return}return i}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dd(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=wo(n,s),l!=null&&o.unshift(Lo(n,l,a))):r||(l=wo(n,s),l!=null&&o.push(Lo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dx=/\r\n?/g,px=/\u0000|\uFFFD/g;function Nd(t){return(typeof t=="string"?t:""+t).replace(dx,`
`).replace(px,"")}function ca(t,e,n){if(e=Nd(e),Nd(t)!==e&&n)throw Error(ve(425))}function pl(){}var Dc=null,Nc=null;function Uc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,mx=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,gx=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(t){return Ud.resolve(null).then(t).catch(vx)}:Fc;function vx(t){setTimeout(function(){throw t})}function wu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Co(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Co(e)}function Vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),qn="__reactFiber$"+ks,Io="__reactProps$"+ks,gi="__reactContainer$"+ks,Oc="__reactEvents$"+ks,_x="__reactListeners$"+ks,xx="__reactHandles$"+ks;function gr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fd(t);t!==null;){if(n=t[qn])return n;t=Fd(t)}return e}t=n,n=t.parentNode}return null}function qo(t){return t=t[qn]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ve(33))}function Hl(t){return t[Io]||null}var kc=[],os=-1;function Ji(t){return{current:t}}function ot(t){0>os||(t.current=kc[os],kc[os]=null,os--)}function it(t,e){os++,kc[os]=t.current,t.current=e}var Yi={},Ht=Ji(Yi),Jt=Ji(!1),Tr=Yi;function Ts(t,e){var n=t.type.contextTypes;if(!n)return Yi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Qt(t){return t=t.childContextTypes,t!=null}function ml(){ot(Jt),ot(Ht)}function Od(t,e,n){if(Ht.current!==Yi)throw Error(ve(168));it(Ht,e),it(Jt,n)}function Pg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ve(108,i_(t)||"Unknown",r));return ht({},n,i)}function gl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yi,Tr=Ht.current,it(Ht,t),it(Jt,Jt.current),!0}function kd(t,e,n){var i=t.stateNode;if(!i)throw Error(ve(169));n?(t=Pg(t,e,Tr),i.__reactInternalMemoizedMergedChildContext=t,ot(Jt),ot(Ht),it(Ht,t)):ot(Jt),it(Jt,n)}var li=null,Gl=!1,Tu=!1;function Lg(t){li===null?li=[t]:li.push(t)}function yx(t){Gl=!0,Lg(t)}function Qi(){if(!Tu&&li!==null){Tu=!0;var t=0,e=nt;try{var n=li;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,Gl=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),ng(Qf,Qi),r}finally{nt=e,Tu=!1}}return null}var as=[],ls=0,vl=null,_l=0,vn=[],_n=0,Ar=null,ci=1,fi="";function cr(t,e){as[ls++]=_l,as[ls++]=vl,vl=t,_l=e}function Ig(t,e,n){vn[_n++]=ci,vn[_n++]=fi,vn[_n++]=Ar,Ar=t;var i=ci;t=fi;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ci=1<<32-zn(e)+r|n<<r|i,fi=s+t}else ci=1<<s|n<<r|i,fi=t}function lh(t){t.return!==null&&(cr(t,1),Ig(t,1,0))}function uh(t){for(;t===vl;)vl=as[--ls],as[ls]=null,_l=as[--ls],as[ls]=null;for(;t===Ar;)Ar=vn[--_n],vn[_n]=null,fi=vn[--_n],vn[_n]=null,ci=vn[--_n],vn[_n]=null}var cn=null,un=null,at=!1,Nn=null;function Dg(t,e){var n=yn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,cn=t,un=Vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,cn=t,un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:ci,overflow:fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,cn=t,un=null,!0):!1;default:return!1}}function zc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bc(t){if(at){var e=un;if(e){var n=e;if(!zd(t,e)){if(zc(t))throw Error(ve(418));e=Vi(n.nextSibling);var i=cn;e&&zd(t,e)?Dg(i,n):(t.flags=t.flags&-4097|2,at=!1,cn=t)}}else{if(zc(t))throw Error(ve(418));t.flags=t.flags&-4097|2,at=!1,cn=t}}}function Bd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;cn=t}function fa(t){if(t!==cn)return!1;if(!at)return Bd(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uc(t.type,t.memoizedProps)),e&&(e=un)){if(zc(t))throw Ng(),Error(ve(418));for(;e;)Dg(t,e),e=Vi(e.nextSibling)}if(Bd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ve(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){un=Vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}un=null}}else un=cn?Vi(t.stateNode.nextSibling):null;return!0}function Ng(){for(var t=un;t;)t=Vi(t.nextSibling)}function As(){un=cn=null,at=!1}function ch(t){Nn===null?Nn=[t]:Nn.push(t)}var Sx=Si.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ve(309));var i=n.stateNode}if(!i)throw Error(ve(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ve(284));if(!n._owner)throw Error(ve(290,t))}return t}function ha(t,e){throw t=Object.prototype.toString.call(e),Error(ve(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vd(t){var e=t._init;return e(t._payload)}function Ug(t){function e(d,_){if(t){var m=d.deletions;m===null?(d.deletions=[_],d.flags|=16):m.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=Xi(d,_),d.index=0,d.sibling=null,d}function s(d,_,m){return d.index=m,t?(m=d.alternate,m!==null?(m=m.index,m<_?(d.flags|=2,_):m):(d.flags|=2,_)):(d.flags|=1048576,_)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,_,m,y){return _===null||_.tag!==6?(_=Iu(m,d.mode,y),_.return=d,_):(_=r(_,m),_.return=d,_)}function l(d,_,m,y){var D=m.type;return D===ts?f(d,_,m.props.children,y,m.key):_!==null&&(_.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Li&&Vd(D)===_.type)?(y=r(_,m.props),y.ref=js(d,_,m),y.return=d,y):(y=Qa(m.type,m.key,m.props,null,d.mode,y),y.ref=js(d,_,m),y.return=d,y)}function u(d,_,m,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==m.containerInfo||_.stateNode.implementation!==m.implementation?(_=Du(m,d.mode,y),_.return=d,_):(_=r(_,m.children||[]),_.return=d,_)}function f(d,_,m,y,D){return _===null||_.tag!==7?(_=Er(m,d.mode,y,D),_.return=d,_):(_=r(_,m),_.return=d,_)}function c(d,_,m){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Iu(""+_,d.mode,m),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ta:return m=Qa(_.type,_.key,_.props,null,d.mode,m),m.ref=js(d,null,_),m.return=d,m;case es:return _=Du(_,d.mode,m),_.return=d,_;case Li:var y=_._init;return c(d,y(_._payload),m)}if(ro(_)||Gs(_))return _=Er(_,d.mode,m,null),_.return=d,_;ha(d,_)}return null}function h(d,_,m,y){var D=_!==null?_.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return D!==null?null:a(d,_,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ta:return m.key===D?l(d,_,m,y):null;case es:return m.key===D?u(d,_,m,y):null;case Li:return D=m._init,h(d,_,D(m._payload),y)}if(ro(m)||Gs(m))return D!==null?null:f(d,_,m,y,null);ha(d,m)}return null}function p(d,_,m,y,D){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(m)||null,a(_,d,""+y,D);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ta:return d=d.get(y.key===null?m:y.key)||null,l(_,d,y,D);case es:return d=d.get(y.key===null?m:y.key)||null,u(_,d,y,D);case Li:var C=y._init;return p(d,_,m,C(y._payload),D)}if(ro(y)||Gs(y))return d=d.get(m)||null,f(_,d,y,D,null);ha(_,y)}return null}function v(d,_,m,y){for(var D=null,C=null,A=_,F=_=0,T=null;A!==null&&F<m.length;F++){A.index>F?(T=A,A=null):T=A.sibling;var S=h(d,A,m[F],y);if(S===null){A===null&&(A=T);break}t&&A&&S.alternate===null&&e(d,A),_=s(S,_,F),C===null?D=S:C.sibling=S,C=S,A=T}if(F===m.length)return n(d,A),at&&cr(d,F),D;if(A===null){for(;F<m.length;F++)A=c(d,m[F],y),A!==null&&(_=s(A,_,F),C===null?D=A:C.sibling=A,C=A);return at&&cr(d,F),D}for(A=i(d,A);F<m.length;F++)T=p(A,d,F,m[F],y),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?F:T.key),_=s(T,_,F),C===null?D=T:C.sibling=T,C=T);return t&&A.forEach(function(O){return e(d,O)}),at&&cr(d,F),D}function x(d,_,m,y){var D=Gs(m);if(typeof D!="function")throw Error(ve(150));if(m=D.call(m),m==null)throw Error(ve(151));for(var C=D=null,A=_,F=_=0,T=null,S=m.next();A!==null&&!S.done;F++,S=m.next()){A.index>F?(T=A,A=null):T=A.sibling;var O=h(d,A,S.value,y);if(O===null){A===null&&(A=T);break}t&&A&&O.alternate===null&&e(d,A),_=s(O,_,F),C===null?D=O:C.sibling=O,C=O,A=T}if(S.done)return n(d,A),at&&cr(d,F),D;if(A===null){for(;!S.done;F++,S=m.next())S=c(d,S.value,y),S!==null&&(_=s(S,_,F),C===null?D=S:C.sibling=S,C=S);return at&&cr(d,F),D}for(A=i(d,A);!S.done;F++,S=m.next())S=p(A,d,F,S.value,y),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?F:S.key),_=s(S,_,F),C===null?D=S:C.sibling=S,C=S);return t&&A.forEach(function(H){return e(d,H)}),at&&cr(d,F),D}function g(d,_,m,y){if(typeof m=="object"&&m!==null&&m.type===ts&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ta:e:{for(var D=m.key,C=_;C!==null;){if(C.key===D){if(D=m.type,D===ts){if(C.tag===7){n(d,C.sibling),_=r(C,m.props.children),_.return=d,d=_;break e}}else if(C.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Li&&Vd(D)===C.type){n(d,C.sibling),_=r(C,m.props),_.ref=js(d,C,m),_.return=d,d=_;break e}n(d,C);break}else e(d,C);C=C.sibling}m.type===ts?(_=Er(m.props.children,d.mode,y,m.key),_.return=d,d=_):(y=Qa(m.type,m.key,m.props,null,d.mode,y),y.ref=js(d,_,m),y.return=d,d=y)}return o(d);case es:e:{for(C=m.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===m.containerInfo&&_.stateNode.implementation===m.implementation){n(d,_.sibling),_=r(_,m.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Du(m,d.mode,y),_.return=d,d=_}return o(d);case Li:return C=m._init,g(d,_,C(m._payload),y)}if(ro(m))return v(d,_,m,y);if(Gs(m))return x(d,_,m,y);ha(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,m),_.return=d,d=_):(n(d,_),_=Iu(m,d.mode,y),_.return=d,d=_),o(d)):n(d,_)}return g}var Cs=Ug(!0),Fg=Ug(!1),xl=Ji(null),yl=null,us=null,fh=null;function hh(){fh=us=yl=null}function dh(t){var e=xl.current;ot(xl),t._currentValue=e}function Vc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){yl=t,fh=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Kt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(fh!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(yl===null)throw Error(ve(308));us=t,yl.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var vr=null;function ph(t){vr===null?vr=[t]:vr.push(t)}function Og(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ph(e)):(n.next=r.next,r.next=n),e.interleaved=n,vi(t,i)}function vi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ii=!1;function mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,vi(t,n)}return r=i.interleaved,r===null?(e.next=e,ph(i)):(e.next=r.next,r.next=e),i.interleaved=e,vi(t,n)}function $a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,eh(t,n)}}function Hd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sl(t,e,n,i){var r=t.updateQueue;Ii=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var c=r.baseState;o=0,f=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,x=a;switch(h=e,p=n,x.tag){case 1:if(v=x.payload,typeof v=="function"){c=v.call(p,c,h);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,h=typeof v=="function"?v.call(p,c,h):v,h==null)break e;c=ht({},c,h);break e;case 2:Ii=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=c):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=c),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Rr|=o,t.lanes=o,t.memoizedState=c}}function Gd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ve(191,r));r.call(i)}}}var $o={},Yn=Ji($o),Do=Ji($o),No=Ji($o);function _r(t){if(t===$o)throw Error(ve(174));return t}function gh(t,e){switch(it(No,e),it(Do,t),it(Yn,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Sc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Sc(e,t)}ot(Yn),it(Yn,e)}function Rs(){ot(Yn),ot(Do),ot(No)}function zg(t){_r(No.current);var e=_r(Yn.current),n=Sc(e,t.type);e!==n&&(it(Do,t),it(Yn,n))}function vh(t){Do.current===t&&(ot(Yn),ot(Do))}var ut=Ji(0);function Ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Au=[];function _h(){for(var t=0;t<Au.length;t++)Au[t]._workInProgressVersionPrimary=null;Au.length=0}var ja=Si.ReactCurrentDispatcher,Cu=Si.ReactCurrentBatchConfig,Cr=0,ft=null,Mt=null,Rt=null,El=!1,po=!1,Uo=0,Mx=0;function Ut(){throw Error(ve(321))}function xh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function yh(t,e,n,i,r,s){if(Cr=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ja.current=t===null||t.memoizedState===null?Ax:Cx,t=n(i,r),po){s=0;do{if(po=!1,Uo=0,25<=s)throw Error(ve(301));s+=1,Rt=Mt=null,e.updateQueue=null,ja.current=Rx,t=n(i,r)}while(po)}if(ja.current=wl,e=Mt!==null&&Mt.next!==null,Cr=0,Rt=Mt=ft=null,El=!1,e)throw Error(ve(300));return t}function Sh(){var t=Uo!==0;return Uo=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?ft.memoizedState=Rt=t:Rt=Rt.next=t,Rt}function Tn(){if(Mt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Rt===null?ft.memoizedState:Rt.next;if(e!==null)Rt=e,Mt=t;else{if(t===null)throw Error(ve(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Rt===null?ft.memoizedState=Rt=t:Rt=Rt.next=t}return Rt}function Fo(t,e){return typeof e=="function"?e(t):e}function Ru(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=Mt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((Cr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=i):l=l.next=c,ft.lanes|=f,Rr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Vn(i,e.memoizedState)||(Kt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Rr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function bu(t){var e=Tn(),n=e.queue;if(n===null)throw Error(ve(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Vn(s,e.memoizedState)||(Kt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Bg(){}function Vg(t,e){var n=ft,i=Tn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,Kt=!0),i=i.queue,Mh(Wg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Rt!==null&&Rt.memoizedState.tag&1){if(n.flags|=2048,Oo(9,Gg.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(ve(349));Cr&30||Hg(n,e,r)}return r}function Hg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gg(t,e,n,i){e.value=n,e.getSnapshot=i,Xg(e)&&qg(t)}function Wg(t,e,n){return n(function(){Xg(e)&&qg(t)})}function Xg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function qg(t){var e=vi(t,1);e!==null&&Bn(e,t,1,-1)}function Wd(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=Tx.bind(null,ft,t),[e.memoizedState,t]}function Oo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function $g(){return Tn().memoizedState}function Ya(t,e,n,i){var r=Wn();ft.flags|=t,r.memoizedState=Oo(1|e,n,void 0,i===void 0?null:i)}function Wl(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(Mt!==null){var o=Mt.memoizedState;if(s=o.destroy,i!==null&&xh(i,o.deps)){r.memoizedState=Oo(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Oo(1|e,n,s,i)}function Xd(t,e){return Ya(8390656,8,t,e)}function Mh(t,e){return Wl(2048,8,t,e)}function jg(t,e){return Wl(4,2,t,e)}function Yg(t,e){return Wl(4,4,t,e)}function Kg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zg(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,Kg.bind(null,e,t),n)}function Eh(){}function Jg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Qg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function e0(t,e,n){return Cr&21?(Vn(n,e)||(n=sg(),ft.lanes|=n,Rr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Kt=!0),t.memoizedState=n)}function Ex(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Cu.transition;Cu.transition={};try{t(!1),e()}finally{nt=n,Cu.transition=i}}function t0(){return Tn().memoizedState}function wx(t,e,n){var i=Wi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},n0(t))i0(e,n);else if(n=Og(t,e,n,i),n!==null){var r=Xt();Bn(n,t,i,r),r0(n,e,i)}}function Tx(t,e,n){var i=Wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(n0(t))i0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Vn(a,o)){var l=e.interleaved;l===null?(r.next=r,ph(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Og(t,e,r,i),n!==null&&(r=Xt(),Bn(n,t,i,r),r0(n,e,i))}}function n0(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function i0(t,e){po=El=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function r0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,eh(t,n)}}var wl={readContext:wn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},Ax={readContext:wn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:Xd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ya(4194308,4,Kg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ya(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ya(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=wx.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Wd,useDebugValue:Eh,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Wd(!1),e=t[0];return t=Ex.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Wn();if(at){if(n===void 0)throw Error(ve(407));n=n()}else{if(n=e(),bt===null)throw Error(ve(349));Cr&30||Hg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Xd(Wg.bind(null,i,s,t),[t]),i.flags|=2048,Oo(9,Gg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=bt.identifierPrefix;if(at){var n=fi,i=ci;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Mx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Cx={readContext:wn,useCallback:Jg,useContext:wn,useEffect:Mh,useImperativeHandle:Zg,useInsertionEffect:jg,useLayoutEffect:Yg,useMemo:Qg,useReducer:Ru,useRef:$g,useState:function(){return Ru(Fo)},useDebugValue:Eh,useDeferredValue:function(t){var e=Tn();return e0(e,Mt.memoizedState,t)},useTransition:function(){var t=Ru(Fo)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Bg,useSyncExternalStore:Vg,useId:t0,unstable_isNewReconciler:!1},Rx={readContext:wn,useCallback:Jg,useContext:wn,useEffect:Mh,useImperativeHandle:Zg,useInsertionEffect:jg,useLayoutEffect:Yg,useMemo:Qg,useReducer:bu,useRef:$g,useState:function(){return bu(Fo)},useDebugValue:Eh,useDeferredValue:function(t){var e=Tn();return Mt===null?e.memoizedState=t:e0(e,Mt.memoizedState,t)},useTransition:function(){var t=bu(Fo)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Bg,useSyncExternalStore:Vg,useId:t0,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Wi(t),s=pi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Bn(e,t,r,i),$a(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Wi(t),s=pi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Bn(e,t,r,i),$a(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Wi(t),r=pi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(Bn(e,t,i,n),$a(e,t,i))}};function qd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!bo(n,i)||!bo(r,s):!0}function s0(t,e,n){var i=!1,r=Yi,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(r=Qt(e)?Tr:Ht.current,i=e.contextTypes,s=(i=i!=null)?Ts(t,r):Yi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function $d(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Xl.enqueueReplaceState(e,e.state,null)}function Gc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},mh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=wn(s):(s=Qt(e)?Tr:Ht.current,r.context=Ts(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Xl.enqueueReplaceState(r,r.state,null),Sl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e){try{var n="",i=e;do n+=n_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var bx=typeof WeakMap=="function"?WeakMap:Map;function o0(t,e,n){n=pi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Al||(Al=!0,ef=i),Wc(t,e)},n}function a0(t,e,n){n=pi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Wc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wc(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jd(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new bx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Gx.bind(null,t,e,n),e.then(t,t))}function Yd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pi(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var Px=Si.ReactCurrentOwner,Kt=!1;function Wt(t,e,n,i){e.child=t===null?Fg(e,null,n,i):Cs(e,t.child,n,i)}function Zd(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=yh(t,e,n,i,s,r),n=Sh(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(at&&n&&lh(e),e.flags|=1,Wt(t,e,i,r),e.child)}function Jd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Lh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,l0(t,e,s,i,r)):(t=Qa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:bo,n(o,i)&&t.ref===e.ref)return _i(t,e,r)}return e.flags|=1,t=Xi(s,i),t.ref=e.ref,t.return=e,e.child=t}function l0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(bo(s,i)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Kt=!0);else return e.lanes=t.lanes,_i(t,e,r)}return Xc(t,e,n,i,r)}function u0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(fs,ln),ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(fs,ln),ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(fs,ln),ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(fs,ln),ln|=i;return Wt(t,e,r,n),e.child}function c0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xc(t,e,n,i,r){var s=Qt(n)?Tr:Ht.current;return s=Ts(e,s),_s(e,r),n=yh(t,e,n,i,s,r),i=Sh(),t!==null&&!Kt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,_i(t,e,r)):(at&&i&&lh(e),e.flags|=1,Wt(t,e,n,r),e.child)}function Qd(t,e,n,i,r){if(Qt(n)){var s=!0;gl(e)}else s=!1;if(_s(e,r),e.stateNode===null)Ka(t,e),s0(e,n,i),Gc(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wn(u):(u=Qt(n)?Tr:Ht.current,u=Ts(e,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&$d(e,o,i,u),Ii=!1;var h=e.memoizedState;o.state=h,Sl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||Jt.current||Ii?(typeof f=="function"&&(Hc(e,n,f,i),l=e.memoizedState),(a=Ii||qd(e,n,a,i,h,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,kg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ln(e.type,a),o.props=u,c=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=Qt(n)?Tr:Ht.current,l=Ts(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||h!==l)&&$d(e,o,i,l),Ii=!1,h=e.memoizedState,o.state=h,Sl(e,i,o,r);var v=e.memoizedState;a!==c||h!==v||Jt.current||Ii?(typeof p=="function"&&(Hc(e,n,p,i),v=e.memoizedState),(u=Ii||qd(e,n,u,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return qc(t,e,n,i,s,r)}function qc(t,e,n,i,r,s){c0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&kd(e,n,!1),_i(t,e,s);i=e.stateNode,Px.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Cs(e,t.child,null,s),e.child=Cs(e,null,a,s)):Wt(t,e,a,s),e.memoizedState=i.state,r&&kd(e,n,!0),e.child}function f0(t){var e=t.stateNode;e.pendingContext?Od(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Od(t,e.context,!1),gh(t,e.containerInfo)}function ep(t,e,n,i,r){return As(),ch(r),e.flags|=256,Wt(t,e,n,i),e.child}var $c={dehydrated:null,treeContext:null,retryLane:0};function jc(t){return{baseLanes:t,cachePool:null,transitions:null}}function h0(t,e,n){var i=e.pendingProps,r=ut.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(ut,r&1),t===null)return Bc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jl(o,i,0,null),t=Er(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jc(n),e.memoizedState=$c,t):wh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Lx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Xi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Xi(a,s):(s=Er(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?jc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$c,i}return s=t.child,t=s.sibling,i=Xi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wh(t,e){return e=jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function da(t,e,n,i){return i!==null&&ch(i),Cs(e,t.child,null,n),t=wh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Lx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Pu(Error(ve(422))),da(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=jl({mode:"visible",children:i.children},r,0,null),s=Er(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Cs(e,t.child,null,o),e.child.memoizedState=jc(o),e.memoizedState=$c,s);if(!(e.mode&1))return da(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ve(419)),i=Pu(s,i,void 0),da(t,e,o,i)}if(a=(o&t.childLanes)!==0,Kt||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,vi(t,r),Bn(i,t,r,-1))}return Ph(),i=Pu(Error(ve(421))),da(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Wx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,un=Vi(r.nextSibling),cn=e,at=!0,Nn=null,t!==null&&(vn[_n++]=ci,vn[_n++]=fi,vn[_n++]=Ar,ci=t.id,fi=t.overflow,Ar=e),e=wh(e,i.children),e.flags|=4096,e)}function tp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vc(t.return,e,n)}function Lu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function d0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wt(t,e,i.children,n),i=ut.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tp(t,n,e);else if(t.tag===19)tp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(ut,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lu(e,!0,n,null,s);break;case"together":Lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ka(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function _i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Rr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ve(153));if(e.child!==null){for(t=e.child,n=Xi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ix(t,e,n){switch(e.tag){case 3:f0(e),As();break;case 5:zg(e);break;case 1:Qt(e.type)&&gl(e);break;case 4:gh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(xl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ut,ut.current&1),e.flags|=128,null):n&e.child.childLanes?h0(t,e,n):(it(ut,ut.current&1),t=_i(t,e,n),t!==null?t.sibling:null);it(ut,ut.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return d0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ut,ut.current),i)break;return null;case 22:case 23:return e.lanes=0,u0(t,e,n)}return _i(t,e,n)}var p0,Yc,m0,g0;p0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yc=function(){};m0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_r(Yn.current);var s=null;switch(n){case"input":r=vc(t,r),i=vc(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=yc(t,r),i=yc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=pl)}Mc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&rt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};g0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Dx(t,e,n){var i=e.pendingProps;switch(uh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return Qt(e.type)&&ml(),Ft(e),null;case 3:return i=e.stateNode,Rs(),ot(Jt),ot(Ht),_h(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(fa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Nn!==null&&(rf(Nn),Nn=null))),Yc(t,e),Ft(e),null;case 5:vh(e);var r=_r(No.current);if(n=e.type,t!==null&&e.stateNode!=null)m0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ve(166));return Ft(e),null}if(t=_r(Yn.current),fa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[Io]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<oo.length;r++)rt(oo[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":cd(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":hd(i,s),rt("invalid",i)}Mc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ca(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ca(i.textContent,a,t),r=["children",""+a]):Mo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":na(i),fd(i,s,!0);break;case"textarea":na(i),dd(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=pl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Wm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[qn]=e,t[Io]=i,p0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ec(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<oo.length;r++)rt(oo[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":cd(t,i),r=vc(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),rt("invalid",t);break;case"textarea":hd(t,i),r=yc(t,i),rt("invalid",t);break;default:r=i}Mc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?$m(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Eo(t,l):typeof l=="number"&&Eo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&jf(t,s,l,o))}switch(n){case"input":na(t),fd(t,i,!1);break;case"textarea":na(t),dd(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=pl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)g0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ve(166));if(n=_r(No.current),_r(Yn.current),fa(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=cn,t!==null))switch(t.tag){case 3:ca(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ca(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return Ft(e),null;case 13:if(ot(ut),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&un!==null&&e.mode&1&&!(e.flags&128))Ng(),As(),e.flags|=98560,s=!1;else if(s=fa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ve(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ve(317));s[qn]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Nn!==null&&(rf(Nn),Nn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ut.current&1?wt===0&&(wt=3):Ph())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return Rs(),Yc(t,e),t===null&&Po(e.stateNode.containerInfo),Ft(e),null;case 10:return dh(e.type._context),Ft(e),null;case 17:return Qt(e.type)&&ml(),Ft(e),null;case 19:if(ot(ut),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ys(s,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ml(t),o!==null){for(e.flags|=128,Ys(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(ut,ut.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>Ps&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ml(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Ft(e),null}else 2*vt()-s.renderingStartTime>Ps&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ut.current,it(ut,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ln&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(ve(156,e.tag))}function Nx(t,e){switch(uh(e),e.tag){case 1:return Qt(e.type)&&ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(),ot(Jt),ot(Ht),_h(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vh(e),null;case 13:if(ot(ut),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ve(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(ut),null;case 4:return Rs(),null;case 10:return dh(e.type._context),null;case 22:case 23:return bh(),null;case 24:return null;default:return null}}var pa=!1,zt=!1,Ux=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Kc(t,e,n){try{n()}catch(i){mt(t,e,i)}}var np=!1;function Fx(t,e){if(Dc=fl,t=Sg(),ah(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,c=t,h=null;t:for(;;){for(var p;c!==n||r!==0&&c.nodeType!==3||(a=o+r),c!==s||i!==0&&c.nodeType!==3||(l=o+i),c.nodeType===3&&(o+=c.nodeValue.length),(p=c.firstChild)!==null;)h=c,c=p;for(;;){if(c===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++f===i&&(l=o),(p=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nc={focusedElem:t,selectionRange:n},fl=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){e=Ce;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,g=v.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:Ln(e.type,x),g);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ve(163))}}catch(y){mt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}return v=np,np=!1,v}function mo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Kc(e,n,s)}r=r.next}while(r!==i)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Zc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function v0(t){var e=t.alternate;e!==null&&(t.alternate=null,v0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Io],delete e[Oc],delete e[_x],delete e[xx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _0(t){return t.tag===5||t.tag===3||t.tag===4}function ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pl));else if(i!==4&&(t=t.child,t!==null))for(Jc(t,e,n),t=t.sibling;t!==null;)Jc(t,e,n),t=t.sibling}function Qc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qc(t,e,n),t=t.sibling;t!==null;)Qc(t,e,n),t=t.sibling}var It=null,In=!1;function wi(t,e,n){for(n=n.child;n!==null;)x0(t,e,n),n=n.sibling}function x0(t,e,n){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:zt||cs(n,e);case 6:var i=It,r=In;It=null,wi(t,e,n),It=i,In=r,It!==null&&(In?(t=It,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):It.removeChild(n.stateNode));break;case 18:It!==null&&(In?(t=It,n=n.stateNode,t.nodeType===8?wu(t.parentNode,n):t.nodeType===1&&wu(t,n),Co(t)):wu(It,n.stateNode));break;case 4:i=It,r=In,It=n.stateNode.containerInfo,In=!0,wi(t,e,n),It=i,In=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kc(n,e,o),r=r.next}while(r!==i)}wi(t,e,n);break;case 1:if(!zt&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}wi(t,e,n);break;case 21:wi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,wi(t,e,n),zt=i):wi(t,e,n);break;default:wi(t,e,n)}}function rp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ux),e.forEach(function(i){var r=Xx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:It=a.stateNode,In=!1;break e;case 3:It=a.stateNode.containerInfo,In=!0;break e;case 4:It=a.stateNode.containerInfo,In=!0;break e}a=a.return}if(It===null)throw Error(ve(160));x0(s,o,r),It=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)y0(e,t),e=e.sibling}function y0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Gn(t),i&4){try{mo(3,t,t.return),ql(3,t)}catch(x){mt(t,t.return,x)}try{mo(5,t,t.return)}catch(x){mt(t,t.return,x)}}break;case 1:Cn(e,t),Gn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(Cn(e,t),Gn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{Eo(r,"")}catch(x){mt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Hm(r,s),Ec(a,o);var u=Ec(a,s);for(o=0;o<l.length;o+=2){var f=l[o],c=l[o+1];f==="style"?$m(r,c):f==="dangerouslySetInnerHTML"?Xm(r,c):f==="children"?Eo(r,c):jf(r,f,c,u)}switch(a){case"input":_c(r,s);break;case"textarea":Gm(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ps(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ps(r,!!s.multiple,s.defaultValue,!0):ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Io]=s}catch(x){mt(t,t.return,x)}}break;case 6:if(Cn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(ve(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){mt(t,t.return,x)}}break;case 3:if(Cn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Co(e.containerInfo)}catch(x){mt(t,t.return,x)}break;case 4:Cn(e,t),Gn(t);break;case 13:Cn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ch=vt())),i&4&&rp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||f,Cn(e,t),zt=u):Cn(e,t),Gn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Ce=t,f=t.child;f!==null;){for(c=Ce=f;Ce!==null;){switch(h=Ce,p=h.child,h.tag){case 0:case 11:case 14:case 15:mo(4,h,h.return);break;case 1:cs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){mt(i,n,x)}}break;case 5:cs(h,h.return);break;case 22:if(h.memoizedState!==null){op(c);continue}}p!==null?(p.return=h,Ce=p):op(c)}f=f.sibling}e:for(f=null,c=t;;){if(c.tag===5){if(f===null){f=c;try{r=c.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qm("display",o))}catch(x){mt(t,t.return,x)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(x){mt(t,t.return,x)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Cn(e,t),Gn(t),i&4&&rp(t);break;case 21:break;default:Cn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_0(n)){var i=n;break e}n=n.return}throw Error(ve(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Eo(r,""),i.flags&=-33);var s=ip(t);Qc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ip(t);Jc(t,a,o);break;default:throw Error(ve(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ox(t,e,n){Ce=t,S0(t)}function S0(t,e,n){for(var i=(t.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||zt;a=pa;var u=zt;if(pa=o,(zt=l)&&!u)for(Ce=r;Ce!==null;)o=Ce,l=o.child,o.tag===22&&o.memoizedState!==null?ap(r):l!==null?(l.return=o,Ce=l):ap(r);for(;s!==null;)Ce=s,S0(s),s=s.sibling;Ce=r,pa=a,zt=u}sp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):sp(t)}}function sp(t){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gd(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gd(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&Co(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ve(163))}zt||e.flags&512&&Zc(e)}catch(h){mt(e,e.return,h)}}if(e===t){Ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function op(t){for(;Ce!==null;){var e=Ce;if(e===t){Ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function ap(t){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{Zc(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{Zc(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){Ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ce=a;break}Ce=e.return}}var kx=Math.ceil,Tl=Si.ReactCurrentDispatcher,Th=Si.ReactCurrentOwner,Mn=Si.ReactCurrentBatchConfig,Ye=0,bt=null,St=null,Dt=0,ln=0,fs=Ji(0),wt=0,ko=null,Rr=0,$l=0,Ah=0,go=null,Yt=null,Ch=0,Ps=1/0,ai=null,Al=!1,ef=null,Gi=null,ma=!1,Oi=null,Cl=0,vo=0,tf=null,Za=-1,Ja=0;function Xt(){return Ye&6?vt():Za!==-1?Za:Za=vt()}function Wi(t){return t.mode&1?Ye&2&&Dt!==0?Dt&-Dt:Sx.transition!==null?(Ja===0&&(Ja=sg()),Ja):(t=nt,t!==0||(t=window.event,t=t===void 0?16:hg(t.type)),t):1}function Bn(t,e,n,i){if(50<vo)throw vo=0,tf=null,Error(ve(185));Wo(t,n,i),(!(Ye&2)||t!==bt)&&(t===bt&&(!(Ye&2)&&($l|=n),wt===4&&Ni(t,Dt)),en(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Ps=vt()+500,Gl&&Qi()))}function en(t,e){var n=t.callbackNode;S_(t,e);var i=cl(t,t===bt?Dt:0);if(i===0)n!==null&&gd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gd(n),e===1)t.tag===0?yx(lp.bind(null,t)):Lg(lp.bind(null,t)),gx(function(){!(Ye&6)&&Qi()}),n=null;else{switch(og(i)){case 1:n=Qf;break;case 4:n=ig;break;case 16:n=ul;break;case 536870912:n=rg;break;default:n=ul}n=b0(n,M0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function M0(t,e){if(Za=-1,Ja=0,Ye&6)throw Error(ve(327));var n=t.callbackNode;if(xs()&&t.callbackNode!==n)return null;var i=cl(t,t===bt?Dt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Rl(t,i);else{e=i;var r=Ye;Ye|=2;var s=w0();(bt!==t||Dt!==e)&&(ai=null,Ps=vt()+500,Mr(t,e));do try{Vx();break}catch(a){E0(t,a)}while(!0);hh(),Tl.current=s,Ye=r,St!==null?e=0:(bt=null,Dt=0,e=wt)}if(e!==0){if(e===2&&(r=Rc(t),r!==0&&(i=r,e=nf(t,r))),e===1)throw n=ko,Mr(t,0),Ni(t,i),en(t,vt()),n;if(e===6)Ni(t,i);else{if(r=t.current.alternate,!(i&30)&&!zx(r)&&(e=Rl(t,i),e===2&&(s=Rc(t),s!==0&&(i=s,e=nf(t,s))),e===1))throw n=ko,Mr(t,0),Ni(t,i),en(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ve(345));case 2:fr(t,Yt,ai);break;case 3:if(Ni(t,i),(i&130023424)===i&&(e=Ch+500-vt(),10<e)){if(cl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Fc(fr.bind(null,t,Yt,ai),e);break}fr(t,Yt,ai);break;case 4:if(Ni(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*kx(i/1960))-i,10<i){t.timeoutHandle=Fc(fr.bind(null,t,Yt,ai),i);break}fr(t,Yt,ai);break;case 5:fr(t,Yt,ai);break;default:throw Error(ve(329))}}}return en(t,vt()),t.callbackNode===n?M0.bind(null,t):null}function nf(t,e){var n=go;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=Rl(t,e),t!==2&&(e=Yt,Yt=n,e!==null&&rf(e)),t}function rf(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function zx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ni(t,e){for(e&=~Ah,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function lp(t){if(Ye&6)throw Error(ve(327));xs();var e=cl(t,0);if(!(e&1))return en(t,vt()),null;var n=Rl(t,e);if(t.tag!==0&&n===2){var i=Rc(t);i!==0&&(e=i,n=nf(t,i))}if(n===1)throw n=ko,Mr(t,0),Ni(t,e),en(t,vt()),n;if(n===6)throw Error(ve(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fr(t,Yt,ai),en(t,vt()),null}function Rh(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Ps=vt()+500,Gl&&Qi())}}function br(t){Oi!==null&&Oi.tag===0&&!(Ye&6)&&xs();var e=Ye;Ye|=1;var n=Mn.transition,i=nt;try{if(Mn.transition=null,nt=1,t)return t()}finally{nt=i,Mn.transition=n,Ye=e,!(Ye&6)&&Qi()}}function bh(){ln=fs.current,ot(fs)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(uh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ml();break;case 3:Rs(),ot(Jt),ot(Ht),_h();break;case 5:vh(i);break;case 4:Rs();break;case 13:ot(ut);break;case 19:ot(ut);break;case 10:dh(i.type._context);break;case 22:case 23:bh()}n=n.return}if(bt=t,St=t=Xi(t.current,null),Dt=ln=e,wt=0,ko=null,Ah=$l=Rr=0,Yt=go=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}vr=null}return t}function E0(t,e){do{var n=St;try{if(hh(),ja.current=wl,El){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}El=!1}if(Cr=0,Rt=Mt=ft=null,po=!1,Uo=0,Th.current=null,n===null||n.return===null){wt=1,ko=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Yd(o);if(p!==null){p.flags&=-257,Kd(p,o,a,s,e),p.mode&1&&jd(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){jd(s,u,e),Ph();break e}l=Error(ve(426))}}else if(at&&a.mode&1){var g=Yd(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Kd(g,o,a,s,e),ch(bs(l,a));break e}}s=l=bs(l,a),wt!==4&&(wt=2),go===null?go=[s]:go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=o0(s,l,e);Hd(s,d);break e;case 1:a=l;var _=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Gi===null||!Gi.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=a0(s,a,e);Hd(s,y);break e}}s=s.return}while(s!==null)}A0(n)}catch(D){e=D,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function w0(){var t=Tl.current;return Tl.current=wl,t===null?wl:t}function Ph(){(wt===0||wt===3||wt===2)&&(wt=4),bt===null||!(Rr&268435455)&&!($l&268435455)||Ni(bt,Dt)}function Rl(t,e){var n=Ye;Ye|=2;var i=w0();(bt!==t||Dt!==e)&&(ai=null,Mr(t,e));do try{Bx();break}catch(r){E0(t,r)}while(!0);if(hh(),Ye=n,Tl.current=i,St!==null)throw Error(ve(261));return bt=null,Dt=0,wt}function Bx(){for(;St!==null;)T0(St)}function Vx(){for(;St!==null&&!h_();)T0(St)}function T0(t){var e=R0(t.alternate,t,ln);t.memoizedProps=t.pendingProps,e===null?A0(t):St=e,Th.current=null}function A0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Nx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,St=null;return}}else if(n=Dx(n,e,ln),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);wt===0&&(wt=5)}function fr(t,e,n){var i=nt,r=Mn.transition;try{Mn.transition=null,nt=1,Hx(t,e,n,i)}finally{Mn.transition=r,nt=i}return null}function Hx(t,e,n,i){do xs();while(Oi!==null);if(Ye&6)throw Error(ve(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ve(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(M_(t,s),t===bt&&(St=bt=null,Dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ma||(ma=!0,b0(ul,function(){return xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var o=nt;nt=1;var a=Ye;Ye|=4,Th.current=null,Fx(t,n),y0(n,t),lx(Nc),fl=!!Dc,Nc=Dc=null,t.current=n,Ox(n),d_(),Ye=a,nt=o,Mn.transition=s}else t.current=n;if(ma&&(ma=!1,Oi=t,Cl=r),s=t.pendingLanes,s===0&&(Gi=null),g_(n.stateNode),en(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Al)throw Al=!1,t=ef,ef=null,t;return Cl&1&&t.tag!==0&&xs(),s=t.pendingLanes,s&1?t===tf?vo++:(vo=0,tf=t):vo=0,Qi(),null}function xs(){if(Oi!==null){var t=og(Cl),e=Mn.transition,n=nt;try{if(Mn.transition=null,nt=16>t?16:t,Oi===null)var i=!1;else{if(t=Oi,Oi=null,Cl=0,Ye&6)throw Error(ve(331));var r=Ye;for(Ye|=4,Ce=t.current;Ce!==null;){var s=Ce,o=s.child;if(Ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Ce=u;Ce!==null;){var f=Ce;switch(f.tag){case 0:case 11:case 15:mo(8,f,s)}var c=f.child;if(c!==null)c.return=f,Ce=c;else for(;Ce!==null;){f=Ce;var h=f.sibling,p=f.return;if(v0(f),f===u){Ce=null;break}if(h!==null){h.return=p,Ce=h;break}Ce=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}Ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ce=o;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ce=d;break e}Ce=s.return}}var _=t.current;for(Ce=_;Ce!==null;){o=Ce;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,Ce=m;else e:for(o=_;Ce!==null;){if(a=Ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ql(9,a)}}catch(D){mt(a,a.return,D)}if(a===o){Ce=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ce=y;break e}Ce=a.return}}if(Ye=r,Qi(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(kl,t)}catch{}i=!0}return i}finally{nt=n,Mn.transition=e}}return!1}function up(t,e,n){e=bs(n,e),e=o0(t,e,1),t=Hi(t,e,1),e=Xt(),t!==null&&(Wo(t,1,e),en(t,e))}function mt(t,e,n){if(t.tag===3)up(t,t,n);else for(;e!==null;){if(e.tag===3){up(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=bs(n,t),t=a0(e,t,1),e=Hi(e,t,1),t=Xt(),e!==null&&(Wo(e,1,t),en(e,t));break}}e=e.return}}function Gx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Dt&n)===n&&(wt===4||wt===3&&(Dt&130023424)===Dt&&500>vt()-Ch?Mr(t,0):Ah|=n),en(t,e)}function C0(t,e){e===0&&(t.mode&1?(e=sa,sa<<=1,!(sa&130023424)&&(sa=4194304)):e=1);var n=Xt();t=vi(t,e),t!==null&&(Wo(t,e,n),en(t,n))}function Wx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),C0(t,n)}function Xx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ve(314))}i!==null&&i.delete(e),C0(t,n)}var R0;R0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Jt.current)Kt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Kt=!1,Ix(t,e,n);Kt=!!(t.flags&131072)}else Kt=!1,at&&e.flags&1048576&&Ig(e,_l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ka(t,e),t=e.pendingProps;var r=Ts(e,Ht.current);_s(e,n),r=yh(null,e,i,t,r,n);var s=Sh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qt(i)?(s=!0,gl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,mh(e),r.updater=Xl,e.stateNode=r,r._reactInternals=e,Gc(e,i,t,n),e=qc(null,e,i,!0,s,n)):(e.tag=0,at&&s&&lh(e),Wt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ka(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$x(i),t=Ln(i,t),r){case 0:e=Xc(null,e,i,t,n);break e;case 1:e=Qd(null,e,i,t,n);break e;case 11:e=Zd(null,e,i,t,n);break e;case 14:e=Jd(null,e,i,Ln(i.type,t),n);break e}throw Error(ve(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Xc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Qd(t,e,i,r,n);case 3:e:{if(f0(e),t===null)throw Error(ve(387));i=e.pendingProps,s=e.memoizedState,r=s.element,kg(t,e),Sl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bs(Error(ve(423)),e),e=ep(t,e,i,n,r);break e}else if(i!==r){r=bs(Error(ve(424)),e),e=ep(t,e,i,n,r);break e}else for(un=Vi(e.stateNode.containerInfo.firstChild),cn=e,at=!0,Nn=null,n=Fg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),i===r){e=_i(t,e,n);break e}Wt(t,e,i,n)}e=e.child}return e;case 5:return zg(e),t===null&&Bc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Uc(i,r)?o=null:s!==null&&Uc(i,s)&&(e.flags|=32),c0(t,e),Wt(t,e,o,n),e.child;case 6:return t===null&&Bc(e),null;case 13:return h0(t,e,n);case 4:return gh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Cs(e,null,i,n):Wt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Zd(t,e,i,r,n);case 7:return Wt(t,e,e.pendingProps,n),e.child;case 8:return Wt(t,e,e.pendingProps.children,n),e.child;case 12:return Wt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(xl,i._currentValue),i._currentValue=o,s!==null)if(Vn(s.value,o)){if(s.children===r.children&&!Jt.current){e=_i(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=pi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ve(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=wn(r),i=i(r),e.flags|=1,Wt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),Jd(t,e,i,r,n);case 15:return l0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Ka(t,e),e.tag=1,Qt(i)?(t=!0,gl(e)):t=!1,_s(e,n),s0(e,i,r),Gc(e,i,r,n),qc(null,e,i,!0,t,n);case 19:return d0(t,e,n);case 22:return u0(t,e,n)}throw Error(ve(156,e.tag))};function b0(t,e){return ng(t,e)}function qx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,e,n,i){return new qx(t,e,n,i)}function Lh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $x(t){if(typeof t=="function")return Lh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kf)return 11;if(t===Zf)return 14}return 2}function Xi(t,e){var n=t.alternate;return n===null?(n=yn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Qa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Lh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return Er(n.children,r,s,e);case Yf:o=8,r|=8;break;case dc:return t=yn(12,n,e,r|2),t.elementType=dc,t.lanes=s,t;case pc:return t=yn(13,n,e,r),t.elementType=pc,t.lanes=s,t;case mc:return t=yn(19,n,e,r),t.elementType=mc,t.lanes=s,t;case zm:return jl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Om:o=10;break e;case km:o=9;break e;case Kf:o=11;break e;case Zf:o=14;break e;case Li:o=16,i=null;break e}throw Error(ve(130,t==null?t:typeof t,""))}return e=yn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Er(t,e,n,i){return t=yn(7,t,i,e),t.lanes=n,t}function jl(t,e,n,i){return t=yn(22,t,i,e),t.elementType=zm,t.lanes=n,t.stateNode={isHidden:!1},t}function Iu(t,e,n){return t=yn(6,t,null,e),t.lanes=n,t}function Du(t,e,n){return e=yn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function jx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=du(0),this.expirationTimes=du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ih(t,e,n,i,r,s,o,a,l){return t=new jx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mh(s),t}function Yx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function P0(t){if(!t)return Yi;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(ve(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ve(171))}if(t.tag===1){var n=t.type;if(Qt(n))return Pg(t,n,e)}return e}function L0(t,e,n,i,r,s,o,a,l){return t=Ih(n,i,!0,t,r,s,o,a,l),t.context=P0(null),n=t.current,i=Xt(),r=Wi(n),s=pi(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,Wo(t,r,i),en(t,i),t}function Yl(t,e,n,i){var r=e.current,s=Xt(),o=Wi(r);return n=P0(n),e.context===null?e.context=n:e.pendingContext=n,e=pi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,o),t!==null&&(Bn(t,r,o,s),$a(t,r,o)),o}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dh(t,e){cp(t,e),(t=t.alternate)&&cp(t,e)}function Kx(){return null}var I0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nh(t){this._internalRoot=t}Kl.prototype.render=Nh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ve(409));Yl(t,e,null,null)};Kl.prototype.unmount=Nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){Yl(null,t,null,null)}),e[gi]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=ug();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Di.length&&e!==0&&e<Di[n].priority;n++);Di.splice(n,0,t),n===0&&fg(t)}};function Uh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fp(){}function Zx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=bl(o);s.call(u)}}var o=L0(e,i,t,0,null,!1,!1,"",fp);return t._reactRootContainer=o,t[gi]=o.current,Po(t.nodeType===8?t.parentNode:t),br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=bl(l);a.call(u)}}var l=Ih(t,0,!1,null,null,!1,!1,"",fp);return t._reactRootContainer=l,t[gi]=l.current,Po(t.nodeType===8?t.parentNode:t),br(function(){Yl(e,l,n,i)}),l}function Jl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=bl(o);a.call(l)}}Yl(e,o,t,r)}else o=Zx(n,e,t,r,i);return bl(o)}ag=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(eh(e,n|1),en(e,vt()),!(Ye&6)&&(Ps=vt()+500,Qi()))}break;case 13:br(function(){var i=vi(t,1);if(i!==null){var r=Xt();Bn(i,t,1,r)}}),Dh(t,1)}};th=function(t){if(t.tag===13){var e=vi(t,134217728);if(e!==null){var n=Xt();Bn(e,t,134217728,n)}Dh(t,134217728)}};lg=function(t){if(t.tag===13){var e=Wi(t),n=vi(t,e);if(n!==null){var i=Xt();Bn(n,t,e,i)}Dh(t,e)}};ug=function(){return nt};cg=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Tc=function(t,e,n){switch(e){case"input":if(_c(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Hl(i);if(!r)throw Error(ve(90));Vm(i),_c(i,r)}}}break;case"textarea":Gm(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};Km=Rh;Zm=br;var Jx={usingClientEntryPoint:!1,Events:[qo,ss,Hl,jm,Ym,Rh]},Ks={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qx={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=eg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||Kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{kl=ga.inject(Qx),jn=ga}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jx;hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uh(e))throw Error(ve(200));return Yx(t,e,null,n)};hn.createRoot=function(t,e){if(!Uh(t))throw Error(ve(299));var n=!1,i="",r=I0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ih(t,1,!1,null,null,n,!1,i,r),t[gi]=e.current,Po(t.nodeType===8?t.parentNode:t),new Nh(e)};hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ve(188)):(t=Object.keys(t).join(","),Error(ve(268,t)));return t=eg(e),t=t===null?null:t.stateNode,t};hn.flushSync=function(t){return br(t)};hn.hydrate=function(t,e,n){if(!Zl(e))throw Error(ve(200));return Jl(null,t,e,!0,n)};hn.hydrateRoot=function(t,e,n){if(!Uh(t))throw Error(ve(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=I0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=L0(e,null,t,1,n??null,r,!1,s,o),t[gi]=e.current,Po(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Kl(e)};hn.render=function(t,e,n){if(!Zl(e))throw Error(ve(200));return Jl(null,t,e,!1,n)};hn.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(ve(40));return t._reactRootContainer?(br(function(){Jl(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1};hn.unstable_batchedUpdates=Rh;hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zl(n))throw Error(ve(200));if(t==null||t._reactInternals===void 0)throw Error(ve(38));return Jl(t,e,n,!1,i)};hn.version="18.3.1-next-f1338f8080-20240426";function D0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D0)}catch(t){console.error(t)}}D0(),Dm.exports=hn;var ey=Dm.exports,N0,hp=ey;N0=hp.createRoot,hp.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="168",ty=0,dp=1,ny=2,U0=1,F0=2,oi=3,xi=0,tn=1,ui=2,qi=0,ys=1,pp=2,mp=3,gp=4,iy=5,pr=100,ry=101,sy=102,oy=103,ay=104,ly=200,uy=201,cy=202,fy=203,sf=204,of=205,hy=206,dy=207,py=208,my=209,gy=210,vy=211,_y=212,xy=213,yy=214,Sy=0,My=1,Ey=2,Pl=3,wy=4,Ty=5,Ay=6,Cy=7,O0=0,Ry=1,by=2,$i=0,Py=1,Ly=2,Iy=3,Dy=4,Ny=5,Uy=6,Fy=7,k0=300,Ls=301,Is=302,af=303,lf=304,Ql=306,uf=1e3,xr=1001,cf=1002,Sn=1003,Oy=1004,va=1005,Fn=1006,Nu=1007,yr=1008,yi=1009,z0=1010,B0=1011,zo=1012,Oh=1013,Pr=1014,hi=1015,jo=1016,kh=1017,zh=1018,Ds=1020,V0=35902,H0=1021,G0=1022,On=1023,W0=1024,X0=1025,Ss=1026,Ns=1027,q0=1028,Bh=1029,$0=1030,Vh=1031,Hh=1033,el=33776,tl=33777,nl=33778,il=33779,ff=35840,hf=35841,df=35842,pf=35843,mf=36196,gf=37492,vf=37496,_f=37808,xf=37809,yf=37810,Sf=37811,Mf=37812,Ef=37813,wf=37814,Tf=37815,Af=37816,Cf=37817,Rf=37818,bf=37819,Pf=37820,Lf=37821,rl=36492,If=36494,Df=36495,j0=36283,Nf=36284,Uf=36285,Ff=36286,ky=3200,zy=3201,Y0=0,By=1,Ui="",Dn="srgb",er="srgb-linear",Gh="display-p3",eu="display-p3-linear",Ll="linear",st="srgb",Il="rec709",Dl="p3",Or=7680,vp=519,Vy=512,Hy=513,Gy=514,K0=515,Wy=516,Xy=517,qy=518,$y=519,_p=35044,xp="300 es",di=2e3,Nl=2001;class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,Of=180/Math.PI;function Bs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Bt(t,e,n){return Math.max(e,Math.min(n,t))}function jy(t,e){return(t%e+e)%e}function Fu(t,e,n){return(1-n)*t+n*e}function Zs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function jt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class me{constructor(e=0,n=0){me.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,o,a,l,u){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],c=i[7],h=i[2],p=i[5],v=i[8],x=r[0],g=r[3],d=r[6],_=r[1],m=r[4],y=r[7],D=r[2],C=r[5],A=r[8];return s[0]=o*x+a*_+l*D,s[3]=o*g+a*m+l*C,s[6]=o*d+a*y+l*A,s[1]=u*x+f*_+c*D,s[4]=u*g+f*m+c*C,s[7]=u*d+f*y+c*A,s[2]=h*x+p*_+v*D,s[5]=h*g+p*m+v*C,s[8]=h*d+p*y+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=f*o-a*u,h=a*l-f*s,p=u*s-o*l,v=n*c+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=c*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ou.makeScale(e,n)),this}rotate(e){return this.premultiply(Ou.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ou=new Ve;function Z0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ul(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Yy(){const t=Ul("canvas");return t.style.display="block",t}const yp={};function _o(t){t in yp||(yp[t]=!0,console.warn(t))}function Ky(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Sp=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mp=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[er]:{transfer:Ll,primaries:Il,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Dn]:{transfer:st,primaries:Il,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[eu]:{transfer:Ll,primaries:Dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Mp),fromReference:t=>t.applyMatrix3(Sp)},[Gh]:{transfer:st,primaries:Dl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Mp),fromReference:t=>t.applyMatrix3(Sp).convertLinearToSRGB()}},Zy=new Set([er,eu]),tt={enabled:!0,_workingColorSpace:er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Zy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Js[e].toReference,r=Js[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Js[t].primaries},getTransfer:function(t){return t===Ui?Ll:Js[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Js[e].luminanceCoefficients)}};function Ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ku(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let kr;class Jy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=Ul("canvas")),kr.width=e.width,kr.height=e.height;const i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ms(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ms(n[i]/255)*255):n[i]=Ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qy=0;class J0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zu(r[o].image)):s.push(zu(r[o]))}else s=zu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function zu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Jy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eS=0;class nn extends zs{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=xr,r=xr,s=Fn,o=yr,a=On,l=yi,u=nn.DEFAULT_ANISOTROPY,f=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Bs(),this.name="",this.source=new J0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case uf:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case uf:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=k0;nn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],c=l[8],h=l[1],p=l[5],v=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(c-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(c+x)<.1&&Math.abs(v+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(u+1)/2,y=(p+1)/2,D=(d+1)/2,C=(f+h)/4,A=(c+x)/4,F=(v+g)/4;return m>y&&m>D?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=C/i,s=A/i):y>D?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=F/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=A/s,r=F/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-v)*(g-v)+(c-x)*(c-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(g-v)/_,this.y=(c-x)/_,this.z=(h-f)/_,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tS extends zs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new nn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new J0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lr extends tS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Q0 extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nS extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],c=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=c;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=x;return}if(c!==x||l!==h||u!==p||f!==v){let g=1-a;const d=l*h+u*p+f*v+c*x,_=d>=0?1:-1,m=1-d*d;if(m>Number.EPSILON){const D=Math.sqrt(m),C=Math.atan2(D,d*_);g=Math.sin(g*C)/D,a=Math.sin(a*C)/D}const y=a*_;if(l=l*g+h*y,u=u*g+p*y,f=f*g+v*y,c=c*g+x*y,g===1-a){const D=1/Math.sqrt(l*l+u*u+f*f+c*c);l*=D,u*=D,f*=D,c*=D}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=c}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],c=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+f*c+l*p-u*h,e[n+1]=l*v+f*h+u*c-a*p,e[n+2]=u*v+f*p+a*h-l*c,e[n+3]=f*v-a*c-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),c=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*f*c+u*p*v,this._y=u*p*c-h*f*v,this._z=u*f*v+h*p*c,this._w=u*f*c-h*p*v;break;case"YXZ":this._x=h*f*c+u*p*v,this._y=u*p*c-h*f*v,this._z=u*f*v-h*p*c,this._w=u*f*c+h*p*v;break;case"ZXY":this._x=h*f*c-u*p*v,this._y=u*p*c+h*f*v,this._z=u*f*v+h*p*c,this._w=u*f*c-h*p*v;break;case"ZYX":this._x=h*f*c-u*p*v,this._y=u*p*c+h*f*v,this._z=u*f*v-h*p*c,this._w=u*f*c+h*p*v;break;case"YZX":this._x=h*f*c+u*p*v,this._y=u*p*c+h*f*v,this._z=u*f*v-h*p*c,this._w=u*f*c-h*p*v;break;case"XZY":this._x=h*f*c-u*p*v,this._y=u*p*c-h*f*v,this._z=u*f*v+h*p*c,this._w=u*f*c+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],c=n[10],h=i+a+c;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>c){const p=2*Math.sqrt(1+i-a-c);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>c){const p=2*Math.sqrt(1+a-i-c);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+c-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),c=Math.sin((1-n)*f)/u,h=Math.sin(n*f)/u;return this._w=o*c+this._w*h,this._x=i*c+this._x*h,this._y=r*c+this._y*h,this._z=s*c+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,n=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ep.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ep.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),f=2*(a*n-s*r),c=2*(s*i-o*n);return this.x=n+l*u+o*c-a*f,this.y=i+l*f+a*u-s*c,this.z=r+l*c+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bu=new $,Ep=new Yo;class Ko{constructor(e=new $(1/0,1/0,1/0),n=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(s,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),xa.subVectors(this.max,Qs),zr.subVectors(e.a,Qs),Br.subVectors(e.b,Qs),Vr.subVectors(e.c,Qs),Ti.subVectors(Br,zr),Ai.subVectors(Vr,Br),nr.subVectors(zr,Vr);let n=[0,-Ti.z,Ti.y,0,-Ai.z,Ai.y,0,-nr.z,nr.y,Ti.z,0,-Ti.x,Ai.z,0,-Ai.x,nr.z,0,-nr.x,-Ti.y,Ti.x,0,-Ai.y,Ai.x,0,-nr.y,nr.x,0];return!Vu(n,zr,Br,Vr,xa)||(n=[1,0,0,0,1,0,0,0,1],!Vu(n,zr,Br,Vr,xa))?!1:(ya.crossVectors(Ti,Ai),n=[ya.x,ya.y,ya.z],Vu(n,zr,Br,Vr,xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ei=[new $,new $,new $,new $,new $,new $,new $,new $],Rn=new $,_a=new Ko,zr=new $,Br=new $,Vr=new $,Ti=new $,Ai=new $,nr=new $,Qs=new $,xa=new $,ya=new $,ir=new $;function Vu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ir.fromArray(t,s);const a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),u=n.dot(ir),f=i.dot(ir);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const iS=new Ko,eo=new $,Hu=new $;class Wh{constructor(e=new $,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):iS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const n=eo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(eo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Hu)),this.expandByPoint(eo.copy(e.center).sub(Hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new $,Gu=new $,Sa=new $,Ci=new $,Wu=new $,Ma=new $,Xu=new $;class rS{constructor(e=new $,n=new $(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,n),ti.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Gu.copy(e).add(n).multiplyScalar(.5),Sa.copy(n).sub(e).normalize(),Ci.copy(this.origin).sub(Gu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Sa),a=Ci.dot(this.direction),l=-Ci.dot(Sa),u=Ci.lengthSq(),f=Math.abs(1-o*o);let c,h,p,v;if(f>0)if(c=o*l-a,h=o*a-l,v=s*f,c>=0)if(h>=-v)if(h<=v){const x=1/f;c*=x,h*=x,p=c*(c+o*h+2*a)+h*(o*c+h+2*l)+u}else h=s,c=Math.max(0,-(o*h+a)),p=-c*c+h*(h+2*l)+u;else h=-s,c=Math.max(0,-(o*h+a)),p=-c*c+h*(h+2*l)+u;else h<=-v?(c=Math.max(0,-(-o*s+a)),h=c>0?-s:Math.min(Math.max(-s,-l),s),p=-c*c+h*(h+2*l)+u):h<=v?(c=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(c=Math.max(0,-(o*s+a)),h=c>0?s:Math.min(Math.max(-s,-l),s),p=-c*c+h*(h+2*l)+u);else h=o>0?-s:s,c=Math.max(0,-(o*h+a)),p=-c*c+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(Gu).addScaledVector(Sa,h),p}intersectSphere(e,n){ti.subVectors(e.center,this.origin);const i=ti.dot(this.direction),r=ti.dot(ti)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,c=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),c>=0?(a=(e.min.z-h.z)*c,l=(e.max.z-h.z)*c):(a=(e.max.z-h.z)*c,l=(e.min.z-h.z)*c),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,n,i,r,s){Wu.subVectors(n,e),Ma.subVectors(i,e),Xu.crossVectors(Wu,Ma);let o=this.direction.dot(Xu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);const l=a*this.direction.dot(Ma.crossVectors(Ci,Ma));if(l<0)return null;const u=a*this.direction.dot(Wu.cross(Ci));if(u<0||l+u>o)return null;const f=-a*Ci.dot(Xu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,i,r,s,o,a,l,u,f,c,h,p,v,x,g){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,c,h,p,v,x,g)}set(e,n,i,r,s,o,a,l,u,f,c,h,p,v,x,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=f,d[10]=c,d[14]=h,d[3]=p,d[7]=v,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),o=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),c=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*c,v=a*f,x=a*c;n[0]=l*f,n[4]=-l*c,n[8]=u,n[1]=p+v*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*c,v=u*f,x=u*c;n[0]=h+x*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*c,n[5]=o*f,n[9]=-a,n[2]=p*a-v,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*c,v=u*f,x=u*c;n[0]=h-x*a,n[4]=-o*c,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*c,v=a*f,x=a*c;n[0]=l*f,n[4]=v*u-p,n[8]=h*u+x,n[1]=l*c,n[5]=x*u+h,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=x-h*c,n[8]=v*c+p,n[1]=c,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*c+v,n[10]=h-x*c}else if(e.order==="XZY"){const h=o*l,p=o*u,v=a*l,x=a*u;n[0]=l*f,n[4]=-c,n[8]=u*f,n[1]=h*c+x,n[5]=o*f,n[9]=p*c-v,n[2]=v*c-p,n[6]=a*f,n[10]=x*c+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sS,e,oS)}lookAt(e,n,i){const r=this.elements;return on.subVectors(e,n),on.lengthSq()===0&&(on.z=1),on.normalize(),Ri.crossVectors(i,on),Ri.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Ri.crossVectors(i,on)),Ri.normalize(),Ea.crossVectors(on,Ri),r[0]=Ri.x,r[4]=Ea.x,r[8]=on.x,r[1]=Ri.y,r[5]=Ea.y,r[9]=on.y,r[2]=Ri.z,r[6]=Ea.z,r[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],c=i[5],h=i[9],p=i[13],v=i[2],x=i[6],g=i[10],d=i[14],_=i[3],m=i[7],y=i[11],D=i[15],C=r[0],A=r[4],F=r[8],T=r[12],S=r[1],O=r[5],H=r[9],q=r[13],ee=r[2],oe=r[6],te=r[10],J=r[14],L=r[3],re=r[7],se=r[11],fe=r[15];return s[0]=o*C+a*S+l*ee+u*L,s[4]=o*A+a*O+l*oe+u*re,s[8]=o*F+a*H+l*te+u*se,s[12]=o*T+a*q+l*J+u*fe,s[1]=f*C+c*S+h*ee+p*L,s[5]=f*A+c*O+h*oe+p*re,s[9]=f*F+c*H+h*te+p*se,s[13]=f*T+c*q+h*J+p*fe,s[2]=v*C+x*S+g*ee+d*L,s[6]=v*A+x*O+g*oe+d*re,s[10]=v*F+x*H+g*te+d*se,s[14]=v*T+x*q+g*J+d*fe,s[3]=_*C+m*S+y*ee+D*L,s[7]=_*A+m*O+y*oe+D*re,s[11]=_*F+m*H+y*te+D*se,s[15]=_*T+m*q+y*J+D*fe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],c=e[6],h=e[10],p=e[14],v=e[3],x=e[7],g=e[11],d=e[15];return v*(+s*l*c-r*u*c-s*a*h+i*u*h+r*a*p-i*l*p)+x*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*f-s*l*f)+g*(+n*u*c-n*a*p-s*o*c+i*o*p+s*a*f-i*u*f)+d*(-r*a*f-n*l*c+n*a*h+r*o*c-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],c=e[9],h=e[10],p=e[11],v=e[12],x=e[13],g=e[14],d=e[15],_=c*g*u-x*h*u+x*l*p-a*g*p-c*l*d+a*h*d,m=v*h*u-f*g*u-v*l*p+o*g*p+f*l*d-o*h*d,y=f*x*u-v*c*u+v*a*p-o*x*p-f*a*d+o*c*d,D=v*c*l-f*x*l-v*a*h+o*x*h+f*a*g-o*c*g,C=n*_+i*m+r*y+s*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=_*A,e[1]=(x*h*s-c*g*s-x*r*p+i*g*p+c*r*d-i*h*d)*A,e[2]=(a*g*s-x*l*s+x*r*u-i*g*u-a*r*d+i*l*d)*A,e[3]=(c*l*s-a*h*s-c*r*u+i*h*u+a*r*p-i*l*p)*A,e[4]=m*A,e[5]=(f*g*s-v*h*s+v*r*p-n*g*p-f*r*d+n*h*d)*A,e[6]=(v*l*s-o*g*s-v*r*u+n*g*u+o*r*d-n*l*d)*A,e[7]=(o*h*s-f*l*s+f*r*u-n*h*u-o*r*p+n*l*p)*A,e[8]=y*A,e[9]=(v*c*s-f*x*s-v*i*p+n*x*p+f*i*d-n*c*d)*A,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*d+n*a*d)*A,e[11]=(f*a*s-o*c*s-f*i*u+n*c*u+o*i*p-n*a*p)*A,e[12]=D*A,e[13]=(f*x*r-v*c*r+v*i*h-n*x*h-f*i*g+n*c*g)*A,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*g-n*a*g)*A,e[15]=(o*c*r-f*a*r+f*i*l-n*c*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,c=a+a,h=s*u,p=s*f,v=s*c,x=o*f,g=o*c,d=a*c,_=l*u,m=l*f,y=l*c,D=i.x,C=i.y,A=i.z;return r[0]=(1-(x+d))*D,r[1]=(p+y)*D,r[2]=(v-m)*D,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(h+d))*C,r[6]=(g+_)*C,r[7]=0,r[8]=(v+m)*A,r[9]=(g-_)*A,r[10]=(1-(h+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const o=Hr.set(r[4],r[5],r[6]).length(),a=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const u=1/s,f=1/o,c=1/a;return bn.elements[0]*=u,bn.elements[1]*=u,bn.elements[2]*=u,bn.elements[4]*=f,bn.elements[5]*=f,bn.elements[6]*=f,bn.elements[8]*=c,bn.elements[9]*=c,bn.elements[10]*=c,n.setFromRotationMatrix(bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=di){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),c=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===di)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Nl)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=di){const l=this.elements,u=1/(n-e),f=1/(i-r),c=1/(o-s),h=(n+e)*u,p=(i+r)*f;let v,x;if(a===di)v=(o+s)*c,x=-2*c;else if(a===Nl)v=s*c,x=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new $,bn=new gt,sS=new $(0,0,0),oS=new $(1,1,1),Ri=new $,Ea=new $,on=new $,wp=new gt,Tp=new Yo;class Zn{constructor(e=0,n=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],c=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-c,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tp.setFromEuler(this),this.setFromQuaternion(Tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aS=0;const Ap=new $,Gr=new Yo,ni=new gt,wa=new $,to=new $,lS=new $,uS=new Yo,Cp=new $(1,0,0),Rp=new $(0,1,0),bp=new $(0,0,1),Pp={type:"added"},cS={type:"removed"},Wr={type:"childadded",child:null},qu={type:"childremoved",child:null};class Vt extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aS++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new $,n=new Zn,i=new Yo,r=new $(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ve}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,n){return Gr.setFromAxisAngle(e,n),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(Cp,e)}rotateY(e){return this.rotateOnAxis(Rp,e)}rotateZ(e){return this.rotateOnAxis(bp,e)}translateOnAxis(e,n){return Ap.copy(e).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cp,e)}translateY(e){return this.translateOnAxis(Rp,e)}translateZ(e){return this.translateOnAxis(bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wa.copy(e):wa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(to,wa,this.up):ni.lookAt(wa,to,this.up),this.quaternion.setFromRotationMatrix(ni),r&&(ni.extractRotation(r.matrixWorld),Gr.setFromRotationMatrix(ni),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pp),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cS),qu.child=e,this.dispatchEvent(qu),qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pp),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,lS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,uS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const c=l[u];s(e.shapes,c)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),c=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),c.length>0&&(i.shapes=c),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new $(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new $,ii=new $,$u=new $,ri=new $,Xr=new $,qr=new $,Lp=new $,ju=new $,Yu=new $,Ku=new $;class $n{constructor(e=new $,n=new $,i=new $){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ii.subVectors(i,n),$u.subVectors(e,n);const o=Pn.dot(Pn),a=Pn.dot(ii),l=Pn.dot($u),u=ii.dot(ii),f=ii.dot($u),c=o*u-a*a;if(c===0)return s.set(0,0,0),null;const h=1/c,p=(u*l-a*f)*h,v=(o*f-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ii.subVectors(e,n),Pn.cross(ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Pn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Xr.subVectors(r,i),qr.subVectors(s,i),ju.subVectors(e,i);const l=Xr.dot(ju),u=qr.dot(ju);if(l<=0&&u<=0)return n.copy(i);Yu.subVectors(e,r);const f=Xr.dot(Yu),c=qr.dot(Yu);if(f>=0&&c<=f)return n.copy(r);const h=l*c-f*u;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Xr,o);Ku.subVectors(e,s);const p=Xr.dot(Ku),v=qr.dot(Ku);if(v>=0&&p<=v)return n.copy(s);const x=p*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(qr,a);const g=f*v-p*c;if(g<=0&&c-f>=0&&p-v>=0)return Lp.subVectors(s,r),a=(c-f)/(c-f+(p-v)),n.copy(r).addScaledVector(Lp,a);const d=1/(g+x+h);return o=x*d,a=h*d,n.copy(i).addScaledVector(Xr,o).addScaledVector(qr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Zu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=jy(e,1),n=Bt(n,0,1),i=Bt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Zu(o,s,e+1/3),this.g=Zu(o,s,e),this.b=Zu(o,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=Dn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Dn){const i=tv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=ku(e.r),this.g=ku(e.g),this.b=ku(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return tt.fromWorkingColorSpace(kt.copy(this),e),Math.round(Bt(kt.r*255,0,255))*65536+Math.round(Bt(kt.g*255,0,255))*256+Math.round(Bt(kt.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const c=o-a;switch(u=f<=.5?c/(o+a):c/(2-o-a),o){case i:l=(r-s)/c+(r<s?6:0);break;case r:l=(s-i)/c+2;break;case s:l=(i-r)/c+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Dn){tt.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==Dn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(Ta);const i=Fu(bi.h,Ta.h,n),r=Fu(bi.s,Ta.s,n),s=Fu(bi.l,Ta.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new Ke;Ke.NAMES=tv;let fS=0;class Zo extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=ys,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=of,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sf&&(i.blendSrc=this.blendSrc),this.blendDst!==of&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nv extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=O0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new $,Aa=new me;class Kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=_p,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _o("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Aa.fromBufferAttribute(this,n),Aa.applyMatrix3(e),this.setXY(n,Aa.x,Aa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Zs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zs(n,this.array)),n}setX(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zs(n,this.array)),n}setY(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zs(n,this.array)),n}setW(e,n){return this.normalized&&(n=jt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=jt(n,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_p&&(e.usage=this.usage),e}}class iv extends Kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class rv extends Kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class En extends Kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let hS=0;const mn=new gt,Ju=new Vt,$r=new $,an=new Ko,no=new Ko,Ct=new $;class Mi extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z0(e)?rv:iv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,n,i){return mn.makeTranslation(e,n,i),this.applyMatrix4(mn),this}scale(e,n,i){return mn.makeScale(e,n,i),this.applyMatrix4(mn),this}lookAt(e){return Ju.lookAt(e),Ju.updateMatrix(),this.applyMatrix4(Ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new En(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];no.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(an.min,no.min),an.expandByPoint(Ct),Ct.addVectors(an.max,no.max),an.expandByPoint(Ct)):(an.expandByPoint(no.min),an.expandByPoint(no.max))}an.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Ct.fromBufferAttribute(a,u),l&&($r.fromBufferAttribute(e,u),Ct.add($r)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new $,l[F]=new $;const u=new $,f=new $,c=new $,h=new me,p=new me,v=new me,x=new $,g=new $;function d(F,T,S){u.fromBufferAttribute(i,F),f.fromBufferAttribute(i,T),c.fromBufferAttribute(i,S),h.fromBufferAttribute(s,F),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,S),f.sub(u),c.sub(u),p.sub(h),v.sub(h);const O=1/(p.x*v.y-v.x*p.y);isFinite(O)&&(x.copy(f).multiplyScalar(v.y).addScaledVector(c,-p.y).multiplyScalar(O),g.copy(c).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(O),a[F].add(x),a[T].add(x),a[S].add(x),l[F].add(g),l[T].add(g),l[S].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let F=0,T=_.length;F<T;++F){const S=_[F],O=S.start,H=S.count;for(let q=O,ee=O+H;q<ee;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const m=new $,y=new $,D=new $,C=new $;function A(F){D.fromBufferAttribute(r,F),C.copy(D);const T=a[F];m.copy(T),m.sub(D.multiplyScalar(D.dot(T))).normalize(),y.crossVectors(C,T);const O=y.dot(l[F])<0?-1:1;o.setXYZW(F,m.x,m.y,m.z,O)}for(let F=0,T=_.length;F<T;++F){const S=_[F],O=S.start,H=S.count;for(let q=O,ee=O+H;q<ee;q+=3)A(e.getX(q+0)),A(e.getX(q+1)),A(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,u=new $,f=new $,c=new $;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,g),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,g),a.add(f),l.add(f),u.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),c.subVectors(r,s),f.cross(c),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,c=a.normalized,h=new u.constructor(l.length*f);let p=0,v=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let d=0;d<f;d++)h[v++]=u[p++]}return new Kn(h,f,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,c=u.length;f<c;f++){const h=u[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let c=0,h=u.length;c<h;c++){const p=u[c];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],c=s[u];for(let h=0,p=c.length;h<p;h++)f.push(c[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const c=o[u];this.addGroup(c.start,c.count,c.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ip=new gt,rr=new rS,Ca=new Wh,Dp=new $,jr=new $,Yr=new $,Kr=new $,Qu=new $,Ra=new $,ba=new me,Pa=new me,La=new me,Np=new $,Up=new $,Fp=new $,Ia=new $,Da=new $;class kn extends Vt{constructor(e=new Mi,n=new nv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ra.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],c=s[l];f!==0&&(Qu.fromBufferAttribute(c,e),o?Ra.addScaledVector(Qu,f):Ra.addScaledVector(Qu.sub(n),f))}n.add(Ra)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(Ca.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Ca,Dp)===null||rr.origin.distanceToSquared(Dp)>(e.far-e.near)**2))&&(Ip.copy(s).invert(),rr.copy(e.ray).applyMatrix4(Ip),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,c=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const g=h[v],d=o[g.materialIndex],_=Math.max(g.start,p.start),m=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=_,D=m;y<D;y+=3){const C=a.getX(y),A=a.getX(y+1),F=a.getX(y+2);r=Na(this,d,e,i,u,f,c,C,A,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let g=v,d=x;g<d;g+=3){const _=a.getX(g),m=a.getX(g+1),y=a.getX(g+2);r=Na(this,o,e,i,u,f,c,_,m,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=h.length;v<x;v++){const g=h[v],d=o[g.materialIndex],_=Math.max(g.start,p.start),m=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=_,D=m;y<D;y+=3){const C=y,A=y+1,F=y+2;r=Na(this,d,e,i,u,f,c,C,A,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=v,d=x;g<d;g+=3){const _=g,m=g+1,y=g+2;r=Na(this,o,e,i,u,f,c,_,m,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function dS(t,e,n,i,r,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xi,a),l===null)return null;Da.copy(a),Da.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Da);return u<n.near||u>n.far?null:{distance:u,point:Da.clone(),object:t}}function Na(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,jr),t.getVertexPosition(l,Yr),t.getVertexPosition(u,Kr);const f=dS(t,e,n,i,jr,Yr,Kr,Ia);if(f){r&&(ba.fromBufferAttribute(r,a),Pa.fromBufferAttribute(r,l),La.fromBufferAttribute(r,u),f.uv=$n.getInterpolation(Ia,jr,Yr,Kr,ba,Pa,La,new me)),s&&(ba.fromBufferAttribute(s,a),Pa.fromBufferAttribute(s,l),La.fromBufferAttribute(s,u),f.uv1=$n.getInterpolation(Ia,jr,Yr,Kr,ba,Pa,La,new me)),o&&(Np.fromBufferAttribute(o,a),Up.fromBufferAttribute(o,l),Fp.fromBufferAttribute(o,u),f.normal=$n.getInterpolation(Ia,jr,Yr,Kr,Np,Up,Fp,new $),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const c={a,b:l,c:u,normal:new $,materialIndex:0};$n.getNormal(jr,Yr,Kr,c.normal),f.face=c}return f}class Vs extends Mi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],c=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new En(u,3)),this.setAttribute("normal",new En(f,3)),this.setAttribute("uv",new En(c,2));function v(x,g,d,_,m,y,D,C,A,F,T){const S=y/A,O=D/F,H=y/2,q=D/2,ee=C/2,oe=A+1,te=F+1;let J=0,L=0;const re=new $;for(let se=0;se<te;se++){const fe=se*O-q;for(let ge=0;ge<oe;ge++){const be=ge*S-H;re[x]=be*_,re[g]=fe*m,re[d]=ee,u.push(re.x,re.y,re.z),re[x]=0,re[g]=0,re[d]=C>0?1:-1,f.push(re.x,re.y,re.z),c.push(ge/A),c.push(1-se/F),J+=1}}for(let se=0;se<F;se++)for(let fe=0;fe<A;fe++){const ge=h+fe+oe*se,be=h+fe+oe*(se+1),U=h+(fe+1)+oe*(se+1),N=h+(fe+1)+oe*se;l.push(ge,be,N),l.push(be,U,N),L+=6}a.addGroup(p,L,T),p+=L,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function pS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function sv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const mS={clone:Us,merge:Gt};var gS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gS,this.fragmentShader=vS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=pS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ov extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new $,Op=new me,kp=new me;class xn extends ov{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Of*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Of*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,n){return this.getViewBounds(e,Op,kp),n.subVectors(kp,Op)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Uu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zr=-90,Jr=1;class _S extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new xn(Zr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new xn(Zr,Jr,e,n);s.layers=this.layers,this.add(s);const o=new xn(Zr,Jr,e,n);o.layers=this.layers,this.add(o);const a=new xn(Zr,Jr,e,n);a.layers=this.layers,this.add(a);const l=new xn(Zr,Jr,e,n);l.layers=this.layers,this.add(l);const u=new xn(Zr,Jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,f]=this.children,c=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(c,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class av extends nn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ls,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xS extends Lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new av(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Fn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Vs(5,5,5),s=new Ki({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:qi});s.uniforms.tEquirect.value=n;const o=new kn(r,s),a=n.minFilter;return n.minFilter===yr&&(n.minFilter=Fn),new _S(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ec=new $,yS=new $,SS=new Ve;class hr{constructor(e=new $(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ec.subVectors(i,n).cross(yS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ec),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||SS.getNormalMatrix(e),r=this.coplanarPoint(ec).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Wh,Ua=new $;class Xh{constructor(e=new hr,n=new hr,i=new hr,r=new hr,s=new hr,o=new hr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],c=r[6],h=r[7],p=r[8],v=r[9],x=r[10],g=r[11],d=r[12],_=r[13],m=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,g-p,y-d).normalize(),i[1].setComponents(l+s,h+u,g+p,y+d).normalize(),i[2].setComponents(l+o,h+f,g+v,y+_).normalize(),i[3].setComponents(l-o,h-f,g-v,y-_).normalize(),i[4].setComponents(l-a,h-c,g-x,y-m).normalize(),n===di)i[5].setComponents(l+a,h+c,g+x,y+m).normalize();else if(n===Nl)i[5].setComponents(a,c,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ua.x=r.normal.x>0?e.max.x:e.min.x,Ua.y=r.normal.y>0?e.max.y:e.min.y,Ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function MS(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,c=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,f),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:c}}function i(a,l,u){const f=l.array,c=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,a),c.count===-1&&h.length===0&&t.bufferSubData(u,0,f),h.length!==0){for(let p=0,v=h.length;p<v;p++){const x=h[p];t.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}c.count!==-1&&(t.bufferSubData(u,c.offset*f.BYTES_PER_ELEMENT,f,c.offset,c.count),c.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class tu extends Mi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,c=e/a,h=n/l,p=[],v=[],x=[],g=[];for(let d=0;d<f;d++){const _=d*h-o;for(let m=0;m<u;m++){const y=m*c-s;v.push(y,-_,0),x.push(0,0,1),g.push(m/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const m=_+u*d,y=_+u*(d+1),D=_+1+u*(d+1),C=_+1+u*d;p.push(m,y,C),p.push(y,D,C)}this.setIndex(p),this.setAttribute("position",new En(v,3)),this.setAttribute("normal",new En(x,3)),this.setAttribute("uv",new En(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.width,e.height,e.widthSegments,e.heightSegments)}}var ES=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wS=`#ifdef USE_ALPHAHASH
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
#endif`,TS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bS=`#ifdef USE_AOMAP
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
#endif`,PS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LS=`#ifdef USE_BATCHING
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
#endif`,IS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,US=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FS=`#ifdef USE_IRIDESCENCE
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
#endif`,OS=`#ifdef USE_BUMPMAP
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
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qS=`#define PI 3.141592653589793
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
} // validated`,$S=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jS=`vec3 transformedNormal = objectNormal;
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
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QS="gl_FragColor = linearToOutputTexel( gl_FragColor );",eM=`
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
}`,tM=`#ifdef USE_ENVMAP
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
#endif`,nM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
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
#endif`,oM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cM=`#ifdef USE_GRADIENTMAP
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
}`,fM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pM=`uniform bool receiveShadow;
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
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_M=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yM=`PhysicalMaterial material;
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
#endif`,SM=`struct PhysicalMaterial {
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
}`,MM=`
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
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
#endif`,wM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IM=`#if defined( USE_POINTS_UV )
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
#endif`,DM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kM=`#ifdef USE_MORPHTARGETS
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
#endif`,zM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XM=`#ifdef USE_NORMALMAP
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
#endif`,qM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,JM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a1=`float getShadowMask() {
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
}`,l1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u1=`#ifdef USE_SKINNING
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
#endif`,c1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,f1=`#ifdef USE_SKINNING
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
#endif`,h1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g1=`#ifdef USE_TRANSMISSION
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
#endif`,v1=`#ifdef USE_TRANSMISSION
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E1=`uniform sampler2D t2D;
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`#include <common>
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
}`,b1=`#if DEPTH_PACKING == 3200
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
}`,P1=`#define DISTANCE
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
}`,L1=`#define DISTANCE
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`uniform float scale;
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
}`,U1=`uniform vec3 diffuse;
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
}`,F1=`#include <common>
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
}`,O1=`uniform vec3 diffuse;
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
}`,k1=`#define LAMBERT
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
}`,z1=`#define LAMBERT
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
}`,B1=`#define MATCAP
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
}`,V1=`#define MATCAP
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
}`,H1=`#define NORMAL
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
}`,G1=`#define NORMAL
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
}`,W1=`#define PHONG
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
}`,X1=`#define PHONG
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
}`,q1=`#define STANDARD
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
}`,$1=`#define STANDARD
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
}`,j1=`#define TOON
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
}`,Y1=`#define TOON
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
}`,K1=`uniform float size;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,J1=`#include <common>
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
}`,Q1=`uniform vec3 color;
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
}`,eE=`uniform float rotation;
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
}`,tE=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:ES,alphahash_pars_fragment:wS,alphamap_fragment:TS,alphamap_pars_fragment:AS,alphatest_fragment:CS,alphatest_pars_fragment:RS,aomap_fragment:bS,aomap_pars_fragment:PS,batching_pars_vertex:LS,batching_vertex:IS,begin_vertex:DS,beginnormal_vertex:NS,bsdfs:US,iridescence_fragment:FS,bumpmap_pars_fragment:OS,clipping_planes_fragment:kS,clipping_planes_pars_fragment:zS,clipping_planes_pars_vertex:BS,clipping_planes_vertex:VS,color_fragment:HS,color_pars_fragment:GS,color_pars_vertex:WS,color_vertex:XS,common:qS,cube_uv_reflection_fragment:$S,defaultnormal_vertex:jS,displacementmap_pars_vertex:YS,displacementmap_vertex:KS,emissivemap_fragment:ZS,emissivemap_pars_fragment:JS,colorspace_fragment:QS,colorspace_pars_fragment:eM,envmap_fragment:tM,envmap_common_pars_fragment:nM,envmap_pars_fragment:iM,envmap_pars_vertex:rM,envmap_physical_pars_fragment:mM,envmap_vertex:sM,fog_vertex:oM,fog_pars_vertex:aM,fog_fragment:lM,fog_pars_fragment:uM,gradientmap_pars_fragment:cM,lightmap_pars_fragment:fM,lights_lambert_fragment:hM,lights_lambert_pars_fragment:dM,lights_pars_begin:pM,lights_toon_fragment:gM,lights_toon_pars_fragment:vM,lights_phong_fragment:_M,lights_phong_pars_fragment:xM,lights_physical_fragment:yM,lights_physical_pars_fragment:SM,lights_fragment_begin:MM,lights_fragment_maps:EM,lights_fragment_end:wM,logdepthbuf_fragment:TM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:CM,logdepthbuf_vertex:RM,map_fragment:bM,map_pars_fragment:PM,map_particle_fragment:LM,map_particle_pars_fragment:IM,metalnessmap_fragment:DM,metalnessmap_pars_fragment:NM,morphinstance_vertex:UM,morphcolor_vertex:FM,morphnormal_vertex:OM,morphtarget_pars_vertex:kM,morphtarget_vertex:zM,normal_fragment_begin:BM,normal_fragment_maps:VM,normal_pars_fragment:HM,normal_pars_vertex:GM,normal_vertex:WM,normalmap_pars_fragment:XM,clearcoat_normal_fragment_begin:qM,clearcoat_normal_fragment_maps:$M,clearcoat_pars_fragment:jM,iridescence_pars_fragment:YM,opaque_fragment:KM,packing:ZM,premultiplied_alpha_fragment:JM,project_vertex:QM,dithering_fragment:e1,dithering_pars_fragment:t1,roughnessmap_fragment:n1,roughnessmap_pars_fragment:i1,shadowmap_pars_fragment:r1,shadowmap_pars_vertex:s1,shadowmap_vertex:o1,shadowmask_pars_fragment:a1,skinbase_vertex:l1,skinning_pars_vertex:u1,skinning_vertex:c1,skinnormal_vertex:f1,specularmap_fragment:h1,specularmap_pars_fragment:d1,tonemapping_fragment:p1,tonemapping_pars_fragment:m1,transmission_fragment:g1,transmission_pars_fragment:v1,uv_pars_fragment:_1,uv_pars_vertex:x1,uv_vertex:y1,worldpos_vertex:S1,background_vert:M1,background_frag:E1,backgroundCube_vert:w1,backgroundCube_frag:T1,cube_vert:A1,cube_frag:C1,depth_vert:R1,depth_frag:b1,distanceRGBA_vert:P1,distanceRGBA_frag:L1,equirect_vert:I1,equirect_frag:D1,linedashed_vert:N1,linedashed_frag:U1,meshbasic_vert:F1,meshbasic_frag:O1,meshlambert_vert:k1,meshlambert_frag:z1,meshmatcap_vert:B1,meshmatcap_frag:V1,meshnormal_vert:H1,meshnormal_frag:G1,meshphong_vert:W1,meshphong_frag:X1,meshphysical_vert:q1,meshphysical_frag:$1,meshtoon_vert:j1,meshtoon_frag:Y1,points_vert:K1,points_frag:Z1,shadow_vert:J1,shadow_frag:Q1,sprite_vert:eE,sprite_frag:tE},Ee={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Xn={basic:{uniforms:Gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Gt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Gt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Gt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Gt([Ee.points,Ee.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Gt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Gt([Ee.common,Ee.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Gt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Gt([Ee.sprite,Ee.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Gt([Ee.common,Ee.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Gt([Ee.lights,Ee.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Xn.physical={uniforms:Gt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Fa={r:0,b:0,g:0},or=new Zn,nE=new gt;function iE(t,e,n,i,r,s,o){const a=new Ke(0);let l=s===!0?0:1,u,f,c=null,h=0,p=null;function v(_){let m=_.isScene===!0?_.background:null;return m&&m.isTexture&&(m=(_.backgroundBlurriness>0?n:e).get(m)),m}function x(_){let m=!1;const y=v(_);y===null?d(a,l):y&&y.isColor&&(d(y,1),m=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,m){const y=v(m);y&&(y.isCubeTexture||y.mapping===Ql)?(f===void 0&&(f=new kn(new Vs(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Us(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),or.copy(m.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(nE.makeRotationFromEuler(or)),f.material.toneMapped=tt.getTransfer(y.colorSpace)!==st,(c!==y||h!==y.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,c=y,h=y.version,p=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new kn(new tu(2,2),new Ki({name:"BackgroundMaterial",uniforms:Us(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=tt.getTransfer(y.colorSpace)!==st,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,c=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function d(_,m){_.getRGB(Fa,sv(t)),i.buffers.color.setClear(Fa.r,Fa.g,Fa.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(_,m=1){a.set(_),l=m,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:x,addToRenderList:g}}function rE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,O,H,q,ee){let oe=!1;const te=c(q,H,O);s!==te&&(s=te,u(s.object)),oe=p(S,q,H,ee),oe&&v(S,q,H,ee),ee!==null&&e.update(ee,t.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,y(S,O,H,q),ee!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function f(S){return t.deleteVertexArray(S)}function c(S,O,H){const q=H.wireframe===!0;let ee=i[S.id];ee===void 0&&(ee={},i[S.id]=ee);let oe=ee[O.id];oe===void 0&&(oe={},ee[O.id]=oe);let te=oe[q];return te===void 0&&(te=h(l()),oe[q]=te),te}function h(S){const O=[],H=[],q=[];for(let ee=0;ee<n;ee++)O[ee]=0,H[ee]=0,q[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:q,object:S,attributes:{},index:null}}function p(S,O,H,q){const ee=s.attributes,oe=O.attributes;let te=0;const J=H.getAttributes();for(const L in J)if(J[L].location>=0){const se=ee[L];let fe=oe[L];if(fe===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(fe=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(fe=S.instanceColor)),se===void 0||se.attribute!==fe||fe&&se.data!==fe.data)return!0;te++}return s.attributesNum!==te||s.index!==q}function v(S,O,H,q){const ee={},oe=O.attributes;let te=0;const J=H.getAttributes();for(const L in J)if(J[L].location>=0){let se=oe[L];se===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(se=S.instanceColor));const fe={};fe.attribute=se,se&&se.data&&(fe.data=se.data),ee[L]=fe,te++}s.attributes=ee,s.attributesNum=te,s.index=q}function x(){const S=s.newAttributes;for(let O=0,H=S.length;O<H;O++)S[O]=0}function g(S){d(S,0)}function d(S,O){const H=s.newAttributes,q=s.enabledAttributes,ee=s.attributeDivisors;H[S]=1,q[S]===0&&(t.enableVertexAttribArray(S),q[S]=1),ee[S]!==O&&(t.vertexAttribDivisor(S,O),ee[S]=O)}function _(){const S=s.newAttributes,O=s.enabledAttributes;for(let H=0,q=O.length;H<q;H++)O[H]!==S[H]&&(t.disableVertexAttribArray(H),O[H]=0)}function m(S,O,H,q,ee,oe,te){te===!0?t.vertexAttribIPointer(S,O,H,ee,oe):t.vertexAttribPointer(S,O,H,q,ee,oe)}function y(S,O,H,q){x();const ee=q.attributes,oe=H.getAttributes(),te=O.defaultAttributeValues;for(const J in oe){const L=oe[J];if(L.location>=0){let re=ee[J];if(re===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),re!==void 0){const se=re.normalized,fe=re.itemSize,ge=e.get(re);if(ge===void 0)continue;const be=ge.buffer,U=ge.type,N=ge.bytesPerElement,b=U===t.INT||U===t.UNSIGNED_INT||re.gpuType===Oh;if(re.isInterleavedBufferAttribute){const E=re.data,K=E.stride,W=re.offset;if(E.isInstancedInterleavedBuffer){for(let B=0;B<L.locationSize;B++)d(L.location+B,E.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=E.meshPerAttribute*E.count)}else for(let B=0;B<L.locationSize;B++)g(L.location+B);t.bindBuffer(t.ARRAY_BUFFER,be);for(let B=0;B<L.locationSize;B++)m(L.location+B,fe/L.locationSize,U,se,K*N,(W+fe/L.locationSize*B)*N,b)}else{if(re.isInstancedBufferAttribute){for(let E=0;E<L.locationSize;E++)d(L.location+E,re.meshPerAttribute);S.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let E=0;E<L.locationSize;E++)g(L.location+E);t.bindBuffer(t.ARRAY_BUFFER,be);for(let E=0;E<L.locationSize;E++)m(L.location+E,fe/L.locationSize,U,se,fe*N,fe/L.locationSize*E*N,b)}}else if(te!==void 0){const se=te[J];if(se!==void 0)switch(se.length){case 2:t.vertexAttrib2fv(L.location,se);break;case 3:t.vertexAttrib3fv(L.location,se);break;case 4:t.vertexAttrib4fv(L.location,se);break;default:t.vertexAttrib1fv(L.location,se)}}}}_()}function D(){F();for(const S in i){const O=i[S];for(const H in O){const q=O[H];for(const ee in q)f(q[ee].object),delete q[ee];delete O[H]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const O=i[S.id];for(const H in O){const q=O[H];for(const ee in q)f(q[ee].object),delete q[ee];delete O[H]}delete i[S.id]}function A(S){for(const O in i){const H=i[O];if(H[S.id]===void 0)continue;const q=H[S.id];for(const ee in q)f(q[ee].object),delete q[ee];delete H[S.id]}}function F(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:_}}function sE(t,e,n){let i;function r(u){i=u}function s(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function o(u,f,c){c!==0&&(t.drawArraysInstanced(i,u,f,c),n.update(f,i,c))}function a(u,f,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,c);let p=0;for(let v=0;v<c;v++)p+=f[v];n.update(p,i,1)}function l(u,f,c,h){if(c===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],f[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,c);let v=0;for(let x=0;x<c;x++)v+=f[x];for(let x=0;x<h.length;x++)n.update(v,i,h[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==On&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const A=C===jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==yi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==hi&&!A)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const c=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,D=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:d,maxVaryings:_,maxFragmentUniforms:m,vertexTextures:y,maxSamples:D}}function aE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new hr,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,h){const p=c.length!==0||h||i!==0||r;return r=h,i=c.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,h){n=f(c,h,0)},this.setState=function(c,h,p){const v=c.clippingPlanes,x=c.clipIntersection,g=c.clipShadows,d=t.get(c);if(!r||v===null||v.length===0||s&&!g)s?f(null):u();else{const _=s?0:i,m=_*4;let y=d.clippingState||null;l.value=y,y=f(v,h,m,p);for(let D=0;D!==m;++D)y[D]=n[D];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(c,h,p,v){const x=c!==null?c.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const d=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<d)&&(g=new Float32Array(d));for(let m=0,y=p;m!==x;++m,y+=4)o.copy(c[m]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function lE(t){let e=new WeakMap;function n(o,a){return a===af?o.mapping=Ls:a===lf&&(o.mapping=Is),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===af||a===lf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new xS(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class uv extends ov{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const hs=4,zp=[.125,.215,.35,.446,.526,.582],mr=20,tc=new uv,Bp=new Ke;let nc=null,ic=0,rc=0,sc=!1;const dr=(1+Math.sqrt(5))/2,Qr=1/dr,Vp=[new $(-dr,Qr,0),new $(dr,Qr,0),new $(-Qr,0,dr),new $(Qr,0,dr),new $(0,dr,-Qr),new $(0,dr,Qr),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class Hp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nc,ic,rc),this._renderer.xr.enabled=sc,e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ls||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nc=this._renderer.getRenderTarget(),ic=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),sc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:jo,format:On,colorSpace:er,depthBuffer:!1},r=Gp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uE(s)),this._blurMaterial=cE(s,e,n)}return r}_compileMaterial(e){const n=new kn(this._lodPlanes[0],e);this._renderer.compile(n,tc)}_sceneToCubeUV(e,n,i,r){const a=new xn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,c=f.autoClear,h=f.toneMapping;f.getClearColor(Bp),f.toneMapping=$i,f.autoClear=!1;const p=new nv({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),v=new kn(new Vs,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(Bp),x=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const m=this._cubeSize;Oa(r,_*m,d>2?m:0,m,m),f.setRenderTarget(r),x&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=c,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ls||e.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Oa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,tc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vp[(r-s-1)%Vp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,c=new kn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*mr-1),x=s/v,g=isFinite(s)?1+Math.floor(f*x):mr;g>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${mr}`);const d=[];let _=0;for(let A=0;A<mr;++A){const F=A/x,T=Math.exp(-F*F/2);d.push(T),A===0?_+=T:A<g&&(_+=2*T)}for(let A=0;A<d.length;A++)d[A]=d[A]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:m}=this;h.dTheta.value=v,h.mipInt.value=m-i;const y=this._sizeLods[r],D=3*y*(r>m-hs?r-m+hs:0),C=4*(this._cubeSize-y);Oa(n,D,C,3*y,2*y),l.setRenderTarget(n),l.render(c,tc)}}function uE(t){const e=[],n=[],i=[];let r=t;const s=t-hs+1+zp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-hs?l=zp[o-t+hs-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,c=1+u,h=[f,f,c,f,c,c,f,f,c,c,f,c],p=6,v=6,x=3,g=2,d=1,_=new Float32Array(x*v*p),m=new Float32Array(g*v*p),y=new Float32Array(d*v*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,F=C>2?0:-1,T=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];_.set(T,x*v*C),m.set(h,g*v*C);const S=[C,C,C,C,C,C];y.set(S,d*v*C)}const D=new Mi;D.setAttribute("position",new Kn(_,x)),D.setAttribute("uv",new Kn(m,g)),D.setAttribute("faceIndex",new Kn(y,d)),e.push(D),r>hs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Gp(t,e,n){const i=new Lr(t,e,n);return i.texture.mapping=Ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cE(t,e,n){const i=new Float32Array(mr),r=new $(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qh(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Wp(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Xp(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function qh(){return`

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
	`}function fE(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===af||l===lf,f=l===Ls||l===Is;if(u||f){let c=e.get(a);const h=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Hp(t)),c=u?n.fromEquirectangular(a,c):n.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),c.texture;if(c!==void 0)return c.texture;{const p=a.image;return u&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new Hp(t)),c=u?n.fromEquirectangular(a):n.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,e.set(a,c),a.addEventListener("dispose",s),c.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&_o("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dE(t,e,n,i){const r={},s=new WeakMap;function o(c){const h=c.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const x=h.morphAttributes[v];for(let g=0,d=x.length;g<d;g++)e.remove(x[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(c,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(c){const h=c.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=c.morphAttributes;for(const v in p){const x=p[v];for(let g=0,d=x.length;g<d;g++)e.update(x[g],t.ARRAY_BUFFER)}}function u(c){const h=[],p=c.index,v=c.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let m=0,y=_.length;m<y;m+=3){const D=_[m+0],C=_[m+1],A=_[m+2];h.push(D,C,C,A,A,D)}}else if(v!==void 0){const _=v.array;x=v.version;for(let m=0,y=_.length/3-1;m<y;m+=3){const D=m+0,C=m+1,A=m+2;h.push(D,C,C,A,A,D)}}else return;const g=new(Z0(h)?rv:iv)(h,1);g.version=x;const d=s.get(c);d&&e.remove(d),s.set(c,g)}function f(c){const h=s.get(c);if(h){const p=c.index;p!==null&&h.version<p.version&&u(c)}else u(c);return s.get(c)}return{get:a,update:l,getWireframeAttribute:f}}function pE(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function u(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*o,v),n.update(p,i,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let g=0;for(let d=0;d<v;d++)g+=p[d];n.update(g,i,1)}function c(h,p,v,x){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,v);let d=0;for(let _=0;_<v;_++)d+=p[_];for(let _=0;_<x.length;_++)n.update(d,i,x[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=c}function mE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gE(t,e,n){const i=new WeakMap,r=new Et;function s(o,a,l){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==c){let S=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],m=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let D=a.attributes.position.count*y,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const A=new Float32Array(D*C*4*c),F=new Q0(A,D,C,c);F.type=hi,F.needsUpdate=!0;const T=y*4;for(let O=0;O<c;O++){const H=d[O],q=_[O],ee=m[O],oe=D*C*4*O;for(let te=0;te<H.count;te++){const J=te*T;v===!0&&(r.fromBufferAttribute(H,te),A[oe+J+0]=r.x,A[oe+J+1]=r.y,A[oe+J+2]=r.z,A[oe+J+3]=0),x===!0&&(r.fromBufferAttribute(q,te),A[oe+J+4]=r.x,A[oe+J+5]=r.y,A[oe+J+6]=r.z,A[oe+J+7]=0),g===!0&&(r.fromBufferAttribute(ee,te),A[oe+J+8]=r.x,A[oe+J+9]=r.y,A[oe+J+10]=r.z,A[oe+J+11]=ee.itemSize===4?r.w:1)}}h={count:c,texture:F,size:new me(D,C)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let g=0;g<u.length;g++)v+=u[g];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function vE(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,c=e.get(l,f);if(r.get(c)!==u&&(e.update(c),r.set(c,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return c}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class cv extends nn{constructor(e,n,i,r,s,o,a,l,u,f=Ss){if(f!==Ss&&f!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ss&&(i=Pr),i===void 0&&f===Ns&&(i=Ds),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const fv=new nn,qp=new cv(1,1),hv=new Q0,dv=new nS,pv=new av,$p=[],jp=[],Yp=new Float32Array(16),Kp=new Float32Array(9),Zp=new Float32Array(4);function Hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=$p[r];if(s===void 0&&(s=new Float32Array(r),$p[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function nu(t,e){let n=jp[e];n===void 0&&(n=new Int32Array(e),jp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function _E(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function yE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function SE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function ME(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Zp.set(i),t.uniformMatrix2fv(this.addr,!1,Zp),At(n,i)}}function EE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Kp.set(i),t.uniformMatrix3fv(this.addr,!1,Kp),At(n,i)}}function wE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Yp.set(i),t.uniformMatrix4fv(this.addr,!1,Yp),At(n,i)}}function TE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function CE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function RE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function bE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function PE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function DE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(qp.compareFunction=K0,s=qp):s=fv,n.setTexture2D(e||s,r)}function NE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||dv,r)}function UE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||pv,r)}function FE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hv,r)}function OE(t){switch(t){case 5126:return _E;case 35664:return xE;case 35665:return yE;case 35666:return SE;case 35674:return ME;case 35675:return EE;case 35676:return wE;case 5124:case 35670:return TE;case 35667:case 35671:return AE;case 35668:case 35672:return CE;case 35669:case 35673:return RE;case 5125:return bE;case 36294:return PE;case 36295:return LE;case 36296:return IE;case 35678:case 36198:case 36298:case 36306:case 35682:return DE;case 35679:case 36299:case 36307:return NE;case 35680:case 36300:case 36308:case 36293:return UE;case 36289:case 36303:case 36311:case 36292:return FE}}function kE(t,e){t.uniform1fv(this.addr,e)}function zE(t,e){const n=Hs(e,this.size,2);t.uniform2fv(this.addr,n)}function BE(t,e){const n=Hs(e,this.size,3);t.uniform3fv(this.addr,n)}function VE(t,e){const n=Hs(e,this.size,4);t.uniform4fv(this.addr,n)}function HE(t,e){const n=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function GE(t,e){const n=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function WE(t,e){const n=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function XE(t,e){t.uniform1iv(this.addr,e)}function qE(t,e){t.uniform2iv(this.addr,e)}function $E(t,e){t.uniform3iv(this.addr,e)}function jE(t,e){t.uniform4iv(this.addr,e)}function YE(t,e){t.uniform1uiv(this.addr,e)}function KE(t,e){t.uniform2uiv(this.addr,e)}function ZE(t,e){t.uniform3uiv(this.addr,e)}function JE(t,e){t.uniform4uiv(this.addr,e)}function QE(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||fv,s[o])}function ew(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||dv,s[o])}function tw(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||pv,s[o])}function nw(t,e,n){const i=this.cache,r=e.length,s=nu(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||hv,s[o])}function iw(t){switch(t){case 5126:return kE;case 35664:return zE;case 35665:return BE;case 35666:return VE;case 35674:return HE;case 35675:return GE;case 35676:return WE;case 5124:case 35670:return XE;case 35667:case 35671:return qE;case 35668:case 35672:return $E;case 35669:case 35673:return jE;case 5125:return YE;case 36294:return KE;case 36295:return ZE;case 36296:return JE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return nw}}class rw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=OE(n.type)}}class sw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=iw(n.type)}}class ow{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const oc=/(\w+)(\])?(\[|\.)?/g;function Jp(t,e){t.seq.push(e),t.map[e.id]=e}function aw(t,e,n){const i=t.name,r=i.length;for(oc.lastIndex=0;;){const s=oc.exec(i),o=oc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Jp(n,u===void 0?new rw(a,t,e):new sw(a,t,e));break}else{let c=n.map[a];c===void 0&&(c=new ow(a),Jp(n,c)),n=c}}}class sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);aw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Qp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const lw=37297;let uw=0;function cw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function fw(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Dl&&n===Il?i="LinearDisplayP3ToLinearSRGB":e===Il&&n===Dl&&(i="LinearSRGBToLinearDisplayP3"),t){case er:case eu:return[i,"LinearTransferOETF"];case Dn:case Gh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+cw(t.getShaderSource(e),o)}else return r}function hw(t,e){const n=fw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function dw(t,e){let n;switch(e){case Py:n="Linear";break;case Ly:n="Reinhard";break;case Iy:n="Cineon";break;case Dy:n="ACESFilmic";break;case Uy:n="AgX";break;case Fy:n="Neutral";break;case Ny:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ka=new $;function pw(){tt.getLuminanceCoefficients(ka);const t=ka.x.toFixed(4),e=ka.y.toFixed(4),n=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function gw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ao(t){return t!==""}function tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function kf(t){return t.replace(_w,yw)}const xw=new Map;function yw(t,e){let n=We[e];if(n===void 0){const i=xw.get(e);if(i!==void 0)n=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kf(n)}const Sw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(t){return t.replace(Sw,Mw)}function Mw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Ew(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===U0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===F0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function ww(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ls:case Is:e="ENVMAP_TYPE_CUBE";break;case Ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function Aw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case O0:e="ENVMAP_BLENDING_MULTIPLY";break;case Ry:e="ENVMAP_BLENDING_MIX";break;case by:e="ENVMAP_BLENDING_ADD";break}return e}function Cw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Rw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Ew(n),u=ww(n),f=Tw(n),c=Aw(n),h=Cw(n),p=mw(n),v=gw(s),x=r.createProgram();let g,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ao).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ao).join(`
`),d.length>0&&(d+=`
`)):(g=[rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),d=[rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+c:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==$i?"#define TONE_MAPPING":"",n.toneMapping!==$i?We.tonemapping_pars_fragment:"",n.toneMapping!==$i?dw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,hw("linearToOutputTexel",n.outputColorSpace),pw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ao).join(`
`)),o=kf(o),o=tm(o,n),o=nm(o,n),a=kf(a),a=tm(a,n),a=nm(a,n),o=im(o),a=im(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const m=_+g+o,y=_+d+a,D=Qp(r,r.VERTEX_SHADER,m),C=Qp(r,r.FRAGMENT_SHADER,y);r.attachShader(x,D),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(O){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),q=r.getShaderInfoLog(D).trim(),ee=r.getShaderInfoLog(C).trim();let oe=!0,te=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(oe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,D,C);else{const J=em(r,D,"vertex"),L=em(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+H+`
`+J+`
`+L)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(q===""||ee==="")&&(te=!1);te&&(O.diagnostics={runnable:oe,programLog:H,vertexShader:{log:q,prefix:g},fragmentShader:{log:ee,prefix:d}})}r.deleteShader(D),r.deleteShader(C),F=new sl(r,x),T=vw(r,x)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,lw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=C,this}let bw=0;class Pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Lw(e),n.set(e,i)),i}}class Lw{constructor(e){this.id=bw++,this.code=e,this.usedTimes=0}}function Iw(t,e,n,i,r,s,o){const a=new ev,l=new Pw,u=new Set,f=[],c=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function g(T,S,O,H,q){const ee=H.fog,oe=q.geometry,te=T.isMeshStandardMaterial?H.environment:null,J=(T.isMeshStandardMaterial?n:e).get(T.envMap||te),L=J&&J.mapping===Ql?J.image.height:null,re=v[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const se=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,fe=se!==void 0?se.length:0;let ge=0;oe.morphAttributes.position!==void 0&&(ge=1),oe.morphAttributes.normal!==void 0&&(ge=2),oe.morphAttributes.color!==void 0&&(ge=3);let be,U,N,b;if(re){const Ze=Xn[re];be=Ze.vertexShader,U=Ze.fragmentShader}else be=T.vertexShader,U=T.fragmentShader,l.update(T),N=l.getVertexShaderID(T),b=l.getFragmentShaderID(T);const E=t.getRenderTarget(),K=q.isInstancedMesh===!0,W=q.isBatchedMesh===!0,B=!!T.map,de=!!T.matcap,w=!!J,Z=!!T.aoMap,z=!!T.lightMap,Q=!!T.bumpMap,X=!!T.normalMap,ce=!!T.displacementMap,k=!!T.emissiveMap,I=!!T.metalnessMap,P=!!T.roughnessMap,M=T.anisotropy>0,Y=T.clearcoat>0,le=T.dispersion>0,ae=T.iridescence>0,ue=T.sheen>0,De=T.transmission>0,Me=M&&!!T.anisotropyMap,we=Y&&!!T.clearcoatMap,ze=Y&&!!T.clearcoatNormalMap,_e=Y&&!!T.clearcoatRoughnessMap,Te=ae&&!!T.iridescenceMap,qe=ae&&!!T.iridescenceThicknessMap,Fe=ue&&!!T.sheenColorMap,Re=ue&&!!T.sheenRoughnessMap,He=!!T.specularMap,Xe=!!T.specularColorMap,lt=!!T.specularIntensityMap,V=De&&!!T.transmissionMap,xe=De&&!!T.thicknessMap,he=!!T.gradientMap,pe=!!T.alphaMap,Se=T.alphaTest>0,Oe=!!T.alphaHash,je=!!T.extensions;let _t=$i;T.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Pt={shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:be,fragmentShader:U,defines:T.defines,customVertexShaderID:N,customFragmentShaderID:b,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:W,batchingColor:W&&q._colorsTexture!==null,instancing:K,instancingColor:K&&q.instanceColor!==null,instancingMorph:K&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:E===null?t.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:er,alphaToCoverage:!!T.alphaToCoverage,map:B,matcap:de,envMap:w,envMapMode:w&&J.mapping,envMapCubeUVHeight:L,aoMap:Z,lightMap:z,bumpMap:Q,normalMap:X,displacementMap:h&&ce,emissiveMap:k,normalMapObjectSpace:X&&T.normalMapType===By,normalMapTangentSpace:X&&T.normalMapType===Y0,metalnessMap:I,roughnessMap:P,anisotropy:M,anisotropyMap:Me,clearcoat:Y,clearcoatMap:we,clearcoatNormalMap:ze,clearcoatRoughnessMap:_e,dispersion:le,iridescence:ae,iridescenceMap:Te,iridescenceThicknessMap:qe,sheen:ue,sheenColorMap:Fe,sheenRoughnessMap:Re,specularMap:He,specularColorMap:Xe,specularIntensityMap:lt,transmission:De,transmissionMap:V,thicknessMap:xe,gradientMap:he,opaque:T.transparent===!1&&T.blending===ys&&T.alphaToCoverage===!1,alphaMap:pe,alphaTest:Se,alphaHash:Oe,combine:T.combine,mapUv:B&&x(T.map.channel),aoMapUv:Z&&x(T.aoMap.channel),lightMapUv:z&&x(T.lightMap.channel),bumpMapUv:Q&&x(T.bumpMap.channel),normalMapUv:X&&x(T.normalMap.channel),displacementMapUv:ce&&x(T.displacementMap.channel),emissiveMapUv:k&&x(T.emissiveMap.channel),metalnessMapUv:I&&x(T.metalnessMap.channel),roughnessMapUv:P&&x(T.roughnessMap.channel),anisotropyMapUv:Me&&x(T.anisotropyMap.channel),clearcoatMapUv:we&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:ze&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Re&&x(T.sheenRoughnessMap.channel),specularMapUv:He&&x(T.specularMap.channel),specularColorMapUv:Xe&&x(T.specularColorMap.channel),specularIntensityMapUv:lt&&x(T.specularIntensityMap.channel),transmissionMapUv:V&&x(T.transmissionMap.channel),thicknessMapUv:xe&&x(T.thicknessMap.channel),alphaMapUv:pe&&x(T.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(X||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!oe.attributes.uv&&(B||pe),fog:!!ee,useFog:T.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:q.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ge,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:B&&T.map.isVideoTexture===!0&&tt.getTransfer(T.map.colorSpace)===st,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ui,flipSided:T.side===tn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:je&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&T.extensions.multiDraw===!0||W)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pt.vertexUv1s=u.has(1),Pt.vertexUv2s=u.has(2),Pt.vertexUv3s=u.has(3),u.clear(),Pt}function d(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const O in T.defines)S.push(O),S.push(T.defines[O]);return T.isRawShaderMaterial===!1&&(_(S,T),m(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function _(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function m(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),T.push(a.mask)}function y(T){const S=v[T.type];let O;if(S){const H=Xn[S];O=mS.clone(H.uniforms)}else O=T.uniforms;return O}function D(T,S){let O;for(let H=0,q=f.length;H<q;H++){const ee=f[H];if(ee.cacheKey===S){O=ee,++O.usedTimes;break}}return O===void 0&&(O=new Rw(t,S,T,s),f.push(O)),O}function C(T){if(--T.usedTimes===0){const S=f.indexOf(T);f[S]=f[f.length-1],f.pop(),T.destroy()}}function A(T){l.remove(T)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:D,releaseProgram:C,releaseShaderCache:A,programs:f,dispose:F}}function Dw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Nw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function sm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function om(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(c,h,p,v,x,g){let d=t[e];return d===void 0?(d={id:c.id,object:c,geometry:h,material:p,groupOrder:v,renderOrder:c.renderOrder,z:x,group:g},t[e]=d):(d.id=c.id,d.object=c,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=c.renderOrder,d.z=x,d.group=g),e++,d}function a(c,h,p,v,x,g){const d=o(c,h,p,v,x,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(c,h,p,v,x,g){const d=o(c,h,p,v,x,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(c,h){n.length>1&&n.sort(c||Nw),i.length>1&&i.sort(h||sm),r.length>1&&r.sort(h||sm)}function f(){for(let c=e,h=t.length;c<h;c++){const p=t[c];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function Uw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new om,t.set(i,[o])):r>=s.length?(o=new om,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Fw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new $,color:new Ke};break;case"SpotLight":n={position:new $,direction:new $,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new $,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new $,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new $,halfWidth:new $,halfHeight:new $};break}return t[e.id]=n,n}}}function Ow(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let kw=0;function zw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Bw(t){const e=new Fw,n=Ow(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new $);const r=new $,s=new gt,o=new gt;function a(u){let f=0,c=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,x=0,g=0,d=0,_=0,m=0,y=0,D=0,C=0,A=0;u.sort(zw);for(let T=0,S=u.length;T<S;T++){const O=u[T],H=O.color,q=O.intensity,ee=O.distance,oe=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)f+=H.r*q,c+=H.g*q,h+=H.b*q;else if(O.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(O.sh.coefficients[te],q);A++}else if(O.isDirectionalLight){const te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const J=O.shadow,L=n.get(O);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=O.shadow.matrix,_++}i.directional[p]=te,p++}else if(O.isSpotLight){const te=e.get(O);te.position.setFromMatrixPosition(O.matrixWorld),te.color.copy(H).multiplyScalar(q),te.distance=ee,te.coneCos=Math.cos(O.angle),te.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),te.decay=O.decay,i.spot[x]=te;const J=O.shadow;if(O.map&&(i.spotLightMap[D]=O.map,D++,J.updateMatrices(O),O.castShadow&&C++),i.spotLightMatrix[x]=J.matrix,O.castShadow){const L=n.get(O);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=oe,y++}x++}else if(O.isRectAreaLight){const te=e.get(O);te.color.copy(H).multiplyScalar(q),te.halfWidth.set(O.width*.5,0,0),te.halfHeight.set(0,O.height*.5,0),i.rectArea[g]=te,g++}else if(O.isPointLight){const te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),te.distance=O.distance,te.decay=O.decay,O.castShadow){const J=O.shadow,L=n.get(O);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,L.shadowCameraNear=J.camera.near,L.shadowCameraFar=J.camera.far,i.pointShadow[v]=L,i.pointShadowMap[v]=oe,i.pointShadowMatrix[v]=O.shadow.matrix,m++}i.point[v]=te,v++}else if(O.isHemisphereLight){const te=e.get(O);te.skyColor.copy(O.color).multiplyScalar(q),te.groundColor.copy(O.groundColor).multiplyScalar(q),i.hemi[d]=te,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=c,i.ambient[2]=h;const F=i.hash;(F.directionalLength!==p||F.pointLength!==v||F.spotLength!==x||F.rectAreaLength!==g||F.hemiLength!==d||F.numDirectionalShadows!==_||F.numPointShadows!==m||F.numSpotShadows!==y||F.numSpotMaps!==D||F.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=m,i.spotLightMatrix.length=y+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,F.directionalLength=p,F.pointLength=v,F.spotLength=x,F.rectAreaLength=g,F.hemiLength=d,F.numDirectionalShadows=_,F.numPointShadows=m,F.numSpotShadows=y,F.numSpotMaps=D,F.numLightProbes=A,i.version=kw++)}function l(u,f){let c=0,h=0,p=0,v=0,x=0;const g=f.matrixWorldInverse;for(let d=0,_=u.length;d<_;d++){const m=u[d];if(m.isDirectionalLight){const y=i.directional[c];y.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),c++}else if(m.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(m.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(m.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(m.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(m.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(m.width*.5,0,0),y.halfHeight.set(0,m.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(m.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(m.matrixWorld),y.position.applyMatrix4(g),h++}else if(m.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(m.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function am(t){const e=new Bw(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Vw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new am(t),e.set(r,[a])):s>=o.length?(a=new am(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Hw extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ky,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gw extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ww=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xw=`uniform sampler2D shadow_pass;
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
}`;function qw(t,e,n){let i=new Xh;const r=new me,s=new me,o=new Et,a=new Hw({depthPacking:zy}),l=new Gw,u={},f=n.maxTextureSize,c={[xi]:tn,[tn]:xi,[ui]:ui},h=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Ww,fragmentShader:Xw}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Mi;v.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new kn(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U0;let d=this.type;this.render=function(C,A,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),H=t.state;H.setBlending(qi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const q=d!==oi&&this.type===oi,ee=d===oi&&this.type!==oi;for(let oe=0,te=C.length;oe<te;oe++){const J=C[oe],L=J.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const re=L.getFrameExtents();if(r.multiply(re),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/re.x),r.x=s.x*re.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/re.y),r.y=s.y*re.y,L.mapSize.y=s.y)),L.map===null||q===!0||ee===!0){const fe=this.type!==oi?{minFilter:Sn,magFilter:Sn}:{};L.map!==null&&L.map.dispose(),L.map=new Lr(r.x,r.y,fe),L.map.texture.name=J.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const se=L.getViewportCount();for(let fe=0;fe<se;fe++){const ge=L.getViewport(fe);o.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),H.viewport(o),L.updateMatrices(J,fe),i=L.getFrustum(),y(A,F,L.camera,J,this.type)}L.isPointLightShadow!==!0&&this.type===oi&&_(L,F),L.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(T,S,O)};function _(C,A){const F=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Lr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,F,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,F,p,x,null)}function m(C,A,F,T){let S=null;const O=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)S=O;else if(S=F.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=S.uuid,q=A.uuid;let ee=u[H];ee===void 0&&(ee={},u[H]=ee);let oe=ee[q];oe===void 0&&(oe=S.clone(),ee[q]=oe,A.addEventListener("dispose",D)),S=oe}if(S.visible=A.visible,S.wireframe=A.wireframe,T===oi?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:c[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=F}return S}function y(C,A,F,T,S){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===oi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const q=e.update(C),ee=C.material;if(Array.isArray(ee)){const oe=q.groups;for(let te=0,J=oe.length;te<J;te++){const L=oe[te],re=ee[L.materialIndex];if(re&&re.visible){const se=m(C,re,T,S);C.onBeforeShadow(t,C,A,F,q,se,L),t.renderBufferDirect(F,null,q,se,C,L),C.onAfterShadow(t,C,A,F,q,se,L)}}}else if(ee.visible){const oe=m(C,ee,T,S);C.onBeforeShadow(t,C,A,F,q,oe,null),t.renderBufferDirect(F,null,q,oe,C,null),C.onAfterShadow(t,C,A,F,q,oe,null)}}const H=C.children;for(let q=0,ee=H.length;q<ee;q++)y(H[q],A,F,T,S)}function D(C){C.target.removeEventListener("dispose",D);for(const F in u){const T=u[F],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function $w(t){function e(){let V=!1;const xe=new Et;let he=null;const pe=new Et(0,0,0,0);return{setMask:function(Se){he!==Se&&!V&&(t.colorMask(Se,Se,Se,Se),he=Se)},setLocked:function(Se){V=Se},setClear:function(Se,Oe,je,_t,Pt){Pt===!0&&(Se*=_t,Oe*=_t,je*=_t),xe.set(Se,Oe,je,_t),pe.equals(xe)===!1&&(t.clearColor(Se,Oe,je,_t),pe.copy(xe))},reset:function(){V=!1,he=null,pe.set(-1,0,0,0)}}}function n(){let V=!1,xe=null,he=null,pe=null;return{setTest:function(Se){Se?b(t.DEPTH_TEST):E(t.DEPTH_TEST)},setMask:function(Se){xe!==Se&&!V&&(t.depthMask(Se),xe=Se)},setFunc:function(Se){if(he!==Se){switch(Se){case Sy:t.depthFunc(t.NEVER);break;case My:t.depthFunc(t.ALWAYS);break;case Ey:t.depthFunc(t.LESS);break;case Pl:t.depthFunc(t.LEQUAL);break;case wy:t.depthFunc(t.EQUAL);break;case Ty:t.depthFunc(t.GEQUAL);break;case Ay:t.depthFunc(t.GREATER);break;case Cy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=Se}},setLocked:function(Se){V=Se},setClear:function(Se){pe!==Se&&(t.clearDepth(Se),pe=Se)},reset:function(){V=!1,xe=null,he=null,pe=null}}}function i(){let V=!1,xe=null,he=null,pe=null,Se=null,Oe=null,je=null,_t=null,Pt=null;return{setTest:function(Ze){V||(Ze?b(t.STENCIL_TEST):E(t.STENCIL_TEST))},setMask:function(Ze){xe!==Ze&&!V&&(t.stencilMask(Ze),xe=Ze)},setFunc:function(Ze,Qn,Hn){(he!==Ze||pe!==Qn||Se!==Hn)&&(t.stencilFunc(Ze,Qn,Hn),he=Ze,pe=Qn,Se=Hn)},setOp:function(Ze,Qn,Hn){(Oe!==Ze||je!==Qn||_t!==Hn)&&(t.stencilOp(Ze,Qn,Hn),Oe=Ze,je=Qn,_t=Hn)},setLocked:function(Ze){V=Ze},setClear:function(Ze){Pt!==Ze&&(t.clearStencil(Ze),Pt=Ze)},reset:function(){V=!1,xe=null,he=null,pe=null,Se=null,Oe=null,je=null,_t=null,Pt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},f={},c=new WeakMap,h=[],p=null,v=!1,x=null,g=null,d=null,_=null,m=null,y=null,D=null,C=new Ke(0,0,0),A=0,F=!1,T=null,S=null,O=null,H=null,q=null;const ee=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,te=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(J)[1]),oe=te>=1):J.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),oe=te>=2);let L=null,re={};const se=t.getParameter(t.SCISSOR_BOX),fe=t.getParameter(t.VIEWPORT),ge=new Et().fromArray(se),be=new Et().fromArray(fe);function U(V,xe,he,pe){const Se=new Uint8Array(4),Oe=t.createTexture();t.bindTexture(V,Oe),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<he;je++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(xe+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return Oe}const N={};N[t.TEXTURE_2D]=U(t.TEXTURE_2D,t.TEXTURE_2D,1),N[t.TEXTURE_CUBE_MAP]=U(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[t.TEXTURE_2D_ARRAY]=U(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),N[t.TEXTURE_3D]=U(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),b(t.DEPTH_TEST),s.setFunc(Pl),Q(!1),X(dp),b(t.CULL_FACE),Z(qi);function b(V){u[V]!==!0&&(t.enable(V),u[V]=!0)}function E(V){u[V]!==!1&&(t.disable(V),u[V]=!1)}function K(V,xe){return f[V]!==xe?(t.bindFramebuffer(V,xe),f[V]=xe,V===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=xe),V===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function W(V,xe){let he=h,pe=!1;if(V){he=c.get(xe),he===void 0&&(he=[],c.set(xe,he));const Se=V.textures;if(he.length!==Se.length||he[0]!==t.COLOR_ATTACHMENT0){for(let Oe=0,je=Se.length;Oe<je;Oe++)he[Oe]=t.COLOR_ATTACHMENT0+Oe;he.length=Se.length,pe=!0}}else he[0]!==t.BACK&&(he[0]=t.BACK,pe=!0);pe&&t.drawBuffers(he)}function B(V){return p!==V?(t.useProgram(V),p=V,!0):!1}const de={[pr]:t.FUNC_ADD,[ry]:t.FUNC_SUBTRACT,[sy]:t.FUNC_REVERSE_SUBTRACT};de[oy]=t.MIN,de[ay]=t.MAX;const w={[ly]:t.ZERO,[uy]:t.ONE,[cy]:t.SRC_COLOR,[sf]:t.SRC_ALPHA,[gy]:t.SRC_ALPHA_SATURATE,[py]:t.DST_COLOR,[hy]:t.DST_ALPHA,[fy]:t.ONE_MINUS_SRC_COLOR,[of]:t.ONE_MINUS_SRC_ALPHA,[my]:t.ONE_MINUS_DST_COLOR,[dy]:t.ONE_MINUS_DST_ALPHA,[vy]:t.CONSTANT_COLOR,[_y]:t.ONE_MINUS_CONSTANT_COLOR,[xy]:t.CONSTANT_ALPHA,[yy]:t.ONE_MINUS_CONSTANT_ALPHA};function Z(V,xe,he,pe,Se,Oe,je,_t,Pt,Ze){if(V===qi){v===!0&&(E(t.BLEND),v=!1);return}if(v===!1&&(b(t.BLEND),v=!0),V!==iy){if(V!==x||Ze!==F){if((g!==pr||m!==pr)&&(t.blendEquation(t.FUNC_ADD),g=pr,m=pr),Ze)switch(V){case ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pp:t.blendFunc(t.ONE,t.ONE);break;case mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case mp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}d=null,_=null,y=null,D=null,C.set(0,0,0),A=0,x=V,F=Ze}return}Se=Se||xe,Oe=Oe||he,je=je||pe,(xe!==g||Se!==m)&&(t.blendEquationSeparate(de[xe],de[Se]),g=xe,m=Se),(he!==d||pe!==_||Oe!==y||je!==D)&&(t.blendFuncSeparate(w[he],w[pe],w[Oe],w[je]),d=he,_=pe,y=Oe,D=je),(_t.equals(C)===!1||Pt!==A)&&(t.blendColor(_t.r,_t.g,_t.b,Pt),C.copy(_t),A=Pt),x=V,F=!1}function z(V,xe){V.side===ui?E(t.CULL_FACE):b(t.CULL_FACE);let he=V.side===tn;xe&&(he=!he),Q(he),V.blending===ys&&V.transparent===!1?Z(qi):Z(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),r.setMask(V.colorWrite);const pe=V.stencilWrite;o.setTest(pe),pe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),k(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?b(t.SAMPLE_ALPHA_TO_COVERAGE):E(t.SAMPLE_ALPHA_TO_COVERAGE)}function Q(V){T!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),T=V)}function X(V){V!==ty?(b(t.CULL_FACE),V!==S&&(V===dp?t.cullFace(t.BACK):V===ny?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):E(t.CULL_FACE),S=V}function ce(V){V!==O&&(oe&&t.lineWidth(V),O=V)}function k(V,xe,he){V?(b(t.POLYGON_OFFSET_FILL),(H!==xe||q!==he)&&(t.polygonOffset(xe,he),H=xe,q=he)):E(t.POLYGON_OFFSET_FILL)}function I(V){V?b(t.SCISSOR_TEST):E(t.SCISSOR_TEST)}function P(V){V===void 0&&(V=t.TEXTURE0+ee-1),L!==V&&(t.activeTexture(V),L=V)}function M(V,xe,he){he===void 0&&(L===null?he=t.TEXTURE0+ee-1:he=L);let pe=re[he];pe===void 0&&(pe={type:void 0,texture:void 0},re[he]=pe),(pe.type!==V||pe.texture!==xe)&&(L!==he&&(t.activeTexture(he),L=he),t.bindTexture(V,xe||N[V]),pe.type=V,pe.texture=xe)}function Y(){const V=re[L];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function le(){try{t.compressedTexImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ae(){try{t.compressedTexImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{t.texSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function De(){try{t.texSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function we(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{t.texStorage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _e(){try{t.texStorage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{t.texImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(V){ge.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),ge.copy(V))}function Re(V){be.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),be.copy(V))}function He(V,xe){let he=l.get(xe);he===void 0&&(he=new WeakMap,l.set(xe,he));let pe=he.get(V);pe===void 0&&(pe=t.getUniformBlockIndex(xe,V.name),he.set(V,pe))}function Xe(V,xe){const pe=l.get(xe).get(V);a.get(xe)!==pe&&(t.uniformBlockBinding(xe,pe,V.__bindingPointIndex),a.set(xe,pe))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,re={},f={},c=new WeakMap,h=[],p=null,v=!1,x=null,g=null,d=null,_=null,m=null,y=null,D=null,C=new Ke(0,0,0),A=0,F=!1,T=null,S=null,O=null,H=null,q=null,ge.set(0,0,t.canvas.width,t.canvas.height),be.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:b,disable:E,bindFramebuffer:K,drawBuffers:W,useProgram:B,setBlending:Z,setMaterial:z,setFlipSided:Q,setCullFace:X,setLineWidth:ce,setPolygonOffset:k,setScissorTest:I,activeTexture:P,bindTexture:M,unbindTexture:Y,compressedTexImage2D:le,compressedTexImage3D:ae,texImage2D:Te,texImage3D:qe,updateUBOMapping:He,uniformBlockBinding:Xe,texStorage2D:ze,texStorage3D:_e,texSubImage2D:ue,texSubImage3D:De,compressedTexSubImage2D:Me,compressedTexSubImage3D:we,scissor:Fe,viewport:Re,reset:lt}}function lm(t,e,n,i){const r=jw(i);switch(n){case H0:return t*e;case W0:return t*e;case X0:return t*e*2;case q0:return t*e/r.components*r.byteLength;case Bh:return t*e/r.components*r.byteLength;case $0:return t*e*2/r.components*r.byteLength;case Vh:return t*e*2/r.components*r.byteLength;case G0:return t*e*3/r.components*r.byteLength;case On:return t*e*4/r.components*r.byteLength;case Hh:return t*e*4/r.components*r.byteLength;case el:case tl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nl:case il:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hf:case pf:return Math.max(t,16)*Math.max(e,8)/4;case ff:case df:return Math.max(t,8)*Math.max(e,8)/2;case mf:case gf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _f:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case yf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Sf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case wf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Af:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case bf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Pf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case rl:case If:case Df:return Math.ceil(t/4)*Math.ceil(e/4)*16;case j0:case Nf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Uf:case Ff:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function jw(t){switch(t){case yi:case z0:return{byteLength:1,components:1};case zo:case B0:case jo:return{byteLength:2,components:1};case kh:case zh:return{byteLength:2,components:4};case Pr:case Oh:case hi:return{byteLength:4,components:1};case V0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function Yw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new me,f=new WeakMap;let c;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,M){return p?new OffscreenCanvas(P,M):Ul("canvas")}function x(P,M,Y){let le=1;const ae=I(P);if((ae.width>Y||ae.height>Y)&&(le=Y/Math.max(ae.width,ae.height)),le<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(le*ae.width),De=Math.floor(le*ae.height);c===void 0&&(c=v(ue,De));const Me=M?v(ue,De):c;return Me.width=ue,Me.height=De,Me.getContext("2d").drawImage(P,0,0,ue,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ue+"x"+De+")."),Me}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function g(P){return P.generateMipmaps&&P.minFilter!==Sn&&P.minFilter!==Fn}function d(P){t.generateMipmap(P)}function _(P,M,Y,le,ae=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=M;if(M===t.RED&&(Y===t.FLOAT&&(ue=t.R32F),Y===t.HALF_FLOAT&&(ue=t.R16F),Y===t.UNSIGNED_BYTE&&(ue=t.R8)),M===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(ue=t.R8UI),Y===t.UNSIGNED_SHORT&&(ue=t.R16UI),Y===t.UNSIGNED_INT&&(ue=t.R32UI),Y===t.BYTE&&(ue=t.R8I),Y===t.SHORT&&(ue=t.R16I),Y===t.INT&&(ue=t.R32I)),M===t.RG&&(Y===t.FLOAT&&(ue=t.RG32F),Y===t.HALF_FLOAT&&(ue=t.RG16F),Y===t.UNSIGNED_BYTE&&(ue=t.RG8)),M===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(ue=t.RG8UI),Y===t.UNSIGNED_SHORT&&(ue=t.RG16UI),Y===t.UNSIGNED_INT&&(ue=t.RG32UI),Y===t.BYTE&&(ue=t.RG8I),Y===t.SHORT&&(ue=t.RG16I),Y===t.INT&&(ue=t.RG32I)),M===t.RGB&&Y===t.UNSIGNED_INT_5_9_9_9_REV&&(ue=t.RGB9_E5),M===t.RGBA){const De=ae?Ll:tt.getTransfer(le);Y===t.FLOAT&&(ue=t.RGBA32F),Y===t.HALF_FLOAT&&(ue=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(ue=De===st?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(ue=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(ue=t.RGB5_A1)}return(ue===t.R16F||ue===t.R32F||ue===t.RG16F||ue===t.RG32F||ue===t.RGBA16F||ue===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function m(P,M){let Y;return P?M===null||M===Pr||M===Ds?Y=t.DEPTH24_STENCIL8:M===hi?Y=t.DEPTH32F_STENCIL8:M===zo&&(Y=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Pr||M===Ds?Y=t.DEPTH_COMPONENT24:M===hi?Y=t.DEPTH_COMPONENT32F:M===zo&&(Y=t.DEPTH_COMPONENT16),Y}function y(P,M){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Sn&&P.minFilter!==Fn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function D(P){const M=P.target;M.removeEventListener("dispose",D),A(M),M.isVideoTexture&&f.delete(M)}function C(P){const M=P.target;M.removeEventListener("dispose",C),T(M)}function A(P){const M=i.get(P);if(M.__webglInit===void 0)return;const Y=P.source,le=h.get(Y);if(le){const ae=le[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&F(P),Object.keys(le).length===0&&h.delete(Y)}i.remove(P)}function F(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const Y=P.source,le=h.get(Y);delete le[M.__cacheKey],o.memory.textures--}function T(P){const M=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(M.__webglFramebuffer[le]))for(let ae=0;ae<M.__webglFramebuffer[le].length;ae++)t.deleteFramebuffer(M.__webglFramebuffer[le][ae]);else t.deleteFramebuffer(M.__webglFramebuffer[le]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[le])}else{if(Array.isArray(M.__webglFramebuffer))for(let le=0;le<M.__webglFramebuffer.length;le++)t.deleteFramebuffer(M.__webglFramebuffer[le]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let le=0;le<M.__webglColorRenderbuffer.length;le++)M.__webglColorRenderbuffer[le]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[le]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Y=P.textures;for(let le=0,ae=Y.length;le<ae;le++){const ue=i.get(Y[le]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(Y[le])}i.remove(P)}let S=0;function O(){S=0}function H(){const P=S;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),S+=1,P}function q(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function ee(P,M){const Y=i.get(P);if(P.isVideoTexture&&ce(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{be(Y,P,M);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+M)}function oe(P,M){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){be(Y,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+M)}function te(P,M){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){be(Y,P,M);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+M)}function J(P,M){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){U(Y,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+M)}const L={[uf]:t.REPEAT,[xr]:t.CLAMP_TO_EDGE,[cf]:t.MIRRORED_REPEAT},re={[Sn]:t.NEAREST,[Oy]:t.NEAREST_MIPMAP_NEAREST,[va]:t.NEAREST_MIPMAP_LINEAR,[Fn]:t.LINEAR,[Nu]:t.LINEAR_MIPMAP_NEAREST,[yr]:t.LINEAR_MIPMAP_LINEAR},se={[Vy]:t.NEVER,[$y]:t.ALWAYS,[Hy]:t.LESS,[K0]:t.LEQUAL,[Gy]:t.EQUAL,[qy]:t.GEQUAL,[Wy]:t.GREATER,[Xy]:t.NOTEQUAL};function fe(P,M){if(M.type===hi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Fn||M.magFilter===Nu||M.magFilter===va||M.magFilter===yr||M.minFilter===Fn||M.minFilter===Nu||M.minFilter===va||M.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,L[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,re[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Sn||M.minFilter!==va&&M.minFilter!==yr||M.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ge(P,M){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",D));const le=M.source;let ae=h.get(le);ae===void 0&&(ae={},h.set(le,ae));const ue=q(M);if(ue!==P.__cacheKey){ae[ue]===void 0&&(ae[ue]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ae[ue].usedTimes++;const De=ae[P.__cacheKey];De!==void 0&&(ae[P.__cacheKey].usedTimes--,De.usedTimes===0&&F(M)),P.__cacheKey=ue,P.__webglTexture=ae[ue].texture}return Y}function be(P,M,Y){let le=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=t.TEXTURE_3D);const ae=ge(P,M),ue=M.source;n.bindTexture(le,P.__webglTexture,t.TEXTURE0+Y);const De=i.get(ue);if(ue.version!==De.__version||ae===!0){n.activeTexture(t.TEXTURE0+Y);const Me=tt.getPrimaries(tt.workingColorSpace),we=M.colorSpace===Ui?null:tt.getPrimaries(M.colorSpace),ze=M.colorSpace===Ui||Me===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let _e=x(M.image,!1,r.maxTextureSize);_e=k(M,_e);const Te=s.convert(M.format,M.colorSpace),qe=s.convert(M.type);let Fe=_(M.internalFormat,Te,qe,M.colorSpace,M.isVideoTexture);fe(le,M);let Re;const He=M.mipmaps,Xe=M.isVideoTexture!==!0,lt=De.__version===void 0||ae===!0,V=ue.dataReady,xe=y(M,_e);if(M.isDepthTexture)Fe=m(M.format===Ns,M.type),lt&&(Xe?n.texStorage2D(t.TEXTURE_2D,1,Fe,_e.width,_e.height):n.texImage2D(t.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Te,qe,null));else if(M.isDataTexture)if(He.length>0){Xe&&lt&&n.texStorage2D(t.TEXTURE_2D,xe,Fe,He[0].width,He[0].height);for(let he=0,pe=He.length;he<pe;he++)Re=He[he],Xe?V&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Re.width,Re.height,Te,qe,Re.data):n.texImage2D(t.TEXTURE_2D,he,Fe,Re.width,Re.height,0,Te,qe,Re.data);M.generateMipmaps=!1}else Xe?(lt&&n.texStorage2D(t.TEXTURE_2D,xe,Fe,_e.width,_e.height),V&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e.width,_e.height,Te,qe,_e.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Te,qe,_e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Fe,He[0].width,He[0].height,_e.depth);for(let he=0,pe=He.length;he<pe;he++)if(Re=He[he],M.format!==On)if(Te!==null)if(Xe){if(V)if(M.layerUpdates.size>0){const Se=lm(Re.width,Re.height,M.format,M.type);for(const Oe of M.layerUpdates){const je=Re.data.subarray(Oe*Se/Re.data.BYTES_PER_ELEMENT,(Oe+1)*Se/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,Oe,Re.width,Re.height,1,Te,je,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Re.width,Re.height,_e.depth,Te,Re.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,Fe,Re.width,Re.height,_e.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?V&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,Re.width,Re.height,_e.depth,Te,qe,Re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,Fe,Re.width,Re.height,_e.depth,0,Te,qe,Re.data)}else{Xe&&lt&&n.texStorage2D(t.TEXTURE_2D,xe,Fe,He[0].width,He[0].height);for(let he=0,pe=He.length;he<pe;he++)Re=He[he],M.format!==On?Te!==null?Xe?V&&n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,Re.width,Re.height,Te,Re.data):n.compressedTexImage2D(t.TEXTURE_2D,he,Fe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?V&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Re.width,Re.height,Te,qe,Re.data):n.texImage2D(t.TEXTURE_2D,he,Fe,Re.width,Re.height,0,Te,qe,Re.data)}else if(M.isDataArrayTexture)if(Xe){if(lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Fe,_e.width,_e.height,_e.depth),V)if(M.layerUpdates.size>0){const he=lm(_e.width,_e.height,M.format,M.type);for(const pe of M.layerUpdates){const Se=_e.data.subarray(pe*he/_e.data.BYTES_PER_ELEMENT,(pe+1)*he/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,_e.width,_e.height,1,Te,qe,Se)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Te,qe,_e.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,_e.width,_e.height,_e.depth,0,Te,qe,_e.data);else if(M.isData3DTexture)Xe?(lt&&n.texStorage3D(t.TEXTURE_3D,xe,Fe,_e.width,_e.height,_e.depth),V&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Te,qe,_e.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,_e.width,_e.height,_e.depth,0,Te,qe,_e.data);else if(M.isFramebufferTexture){if(lt)if(Xe)n.texStorage2D(t.TEXTURE_2D,xe,Fe,_e.width,_e.height);else{let he=_e.width,pe=_e.height;for(let Se=0;Se<xe;Se++)n.texImage2D(t.TEXTURE_2D,Se,Fe,he,pe,0,Te,qe,null),he>>=1,pe>>=1}}else if(He.length>0){if(Xe&&lt){const he=I(He[0]);n.texStorage2D(t.TEXTURE_2D,xe,Fe,he.width,he.height)}for(let he=0,pe=He.length;he<pe;he++)Re=He[he],Xe?V&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,Te,qe,Re):n.texImage2D(t.TEXTURE_2D,he,Fe,Te,qe,Re);M.generateMipmaps=!1}else if(Xe){if(lt){const he=I(_e);n.texStorage2D(t.TEXTURE_2D,xe,Fe,he.width,he.height)}V&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,qe,_e)}else n.texImage2D(t.TEXTURE_2D,0,Fe,Te,qe,_e);g(M)&&d(le),De.__version=ue.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function U(P,M,Y){if(M.image.length!==6)return;const le=ge(P,M),ae=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+Y);const ue=i.get(ae);if(ae.version!==ue.__version||le===!0){n.activeTexture(t.TEXTURE0+Y);const De=tt.getPrimaries(tt.workingColorSpace),Me=M.colorSpace===Ui?null:tt.getPrimaries(M.colorSpace),we=M.colorSpace===Ui||De===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ze=M.isCompressedTexture||M.image[0].isCompressedTexture,_e=M.image[0]&&M.image[0].isDataTexture,Te=[];for(let pe=0;pe<6;pe++)!ze&&!_e?Te[pe]=x(M.image[pe],!0,r.maxCubemapSize):Te[pe]=_e?M.image[pe].image:M.image[pe],Te[pe]=k(M,Te[pe]);const qe=Te[0],Fe=s.convert(M.format,M.colorSpace),Re=s.convert(M.type),He=_(M.internalFormat,Fe,Re,M.colorSpace),Xe=M.isVideoTexture!==!0,lt=ue.__version===void 0||le===!0,V=ae.dataReady;let xe=y(M,qe);fe(t.TEXTURE_CUBE_MAP,M);let he;if(ze){Xe&&lt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,He,qe.width,qe.height);for(let pe=0;pe<6;pe++){he=Te[pe].mipmaps;for(let Se=0;Se<he.length;Se++){const Oe=he[Se];M.format!==On?Fe!==null?Xe?V&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,0,0,Oe.width,Oe.height,Fe,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,He,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,0,0,Oe.width,Oe.height,Fe,Re,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se,He,Oe.width,Oe.height,0,Fe,Re,Oe.data)}}}else{if(he=M.mipmaps,Xe&&lt){he.length>0&&xe++;const pe=I(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,He,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(_e){Xe?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Te[pe].width,Te[pe].height,Fe,Re,Te[pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,He,Te[pe].width,Te[pe].height,0,Fe,Re,Te[pe].data);for(let Se=0;Se<he.length;Se++){const je=he[Se].image[pe].image;Xe?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,0,0,je.width,je.height,Fe,Re,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,He,je.width,je.height,0,Fe,Re,je.data)}}else{Xe?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe,Re,Te[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,He,Fe,Re,Te[pe]);for(let Se=0;Se<he.length;Se++){const Oe=he[Se];Xe?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,0,0,Fe,Re,Oe.image[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se+1,He,Fe,Re,Oe.image[pe])}}}g(M)&&d(t.TEXTURE_CUBE_MAP),ue.__version=ae.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function N(P,M,Y,le,ae,ue){const De=s.convert(Y.format,Y.colorSpace),Me=s.convert(Y.type),we=_(Y.internalFormat,De,Me,Y.colorSpace);if(!i.get(M).__hasExternalTextures){const _e=Math.max(1,M.width>>ue),Te=Math.max(1,M.height>>ue);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,ue,we,_e,Te,M.depth,0,De,Me,null):n.texImage2D(ae,ue,we,_e,Te,0,De,Me,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),X(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,ae,i.get(Y).__webglTexture,0,Q(M)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,ae,i.get(Y).__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function b(P,M,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const le=M.depthTexture,ae=le&&le.isDepthTexture?le.type:null,ue=m(M.stencilBuffer,ae),De=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=Q(M);X(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Me,ue,M.width,M.height):Y?t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,ue,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ue,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,De,t.RENDERBUFFER,P)}else{const le=M.textures;for(let ae=0;ae<le.length;ae++){const ue=le[ae],De=s.convert(ue.format,ue.colorSpace),Me=s.convert(ue.type),we=_(ue.internalFormat,De,Me,ue.colorSpace),ze=Q(M);Y&&X(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,we,M.width,M.height):X(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze,we,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,we,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function E(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee(M.depthTexture,0);const le=i.get(M.depthTexture).__webglTexture,ae=Q(M);if(M.depthTexture.format===Ss)X(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(M.depthTexture.format===Ns)X(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function K(P){const M=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const le=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),le){const ae=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,le.removeEventListener("dispose",ae)};le.addEventListener("dispose",ae),M.__depthDisposeCallback=ae}M.__boundDepthTexture=le}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");E(M.__webglFramebuffer,P)}else if(Y){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]===void 0)M.__webglDepthbuffer[le]=t.createRenderbuffer(),b(M.__webglDepthbuffer[le],P,!1);else{const ae=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=M.__webglDepthbuffer[le];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,ue)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),b(M.__webglDepthbuffer,P,!1);else{const le=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,ae)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function W(P,M,Y){const le=i.get(P);M!==void 0&&N(le.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&K(P)}function B(P){const M=P.texture,Y=i.get(P),le=i.get(M);P.addEventListener("dispose",C);const ae=P.textures,ue=P.isWebGLCubeRenderTarget===!0,De=ae.length>1;if(De||(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=M.version,o.memory.textures++),ue){Y.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[Me]=[];for(let we=0;we<M.mipmaps.length;we++)Y.__webglFramebuffer[Me][we]=t.createFramebuffer()}else Y.__webglFramebuffer[Me]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Me=0;Me<M.mipmaps.length;Me++)Y.__webglFramebuffer[Me]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(De)for(let Me=0,we=ae.length;Me<we;Me++){const ze=i.get(ae[Me]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&X(P)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Me=0;Me<ae.length;Me++){const we=ae[Me];Y.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[Me]);const ze=s.convert(we.format,we.colorSpace),_e=s.convert(we.type),Te=_(we.internalFormat,ze,_e,we.colorSpace,P.isXRRenderTarget===!0),qe=Q(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,Te,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,Y.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),b(Y.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),fe(t.TEXTURE_CUBE_MAP,M);for(let Me=0;Me<6;Me++)if(M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)N(Y.__webglFramebuffer[Me][we],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,we);else N(Y.__webglFramebuffer[Me],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);g(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(De){for(let Me=0,we=ae.length;Me<we;Me++){const ze=ae[Me],_e=i.get(ze);n.bindTexture(t.TEXTURE_2D,_e.__webglTexture),fe(t.TEXTURE_2D,ze),N(Y.__webglFramebuffer,P,ze,t.COLOR_ATTACHMENT0+Me,t.TEXTURE_2D,0),g(ze)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let Me=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Me=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Me,le.__webglTexture),fe(Me,M),M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)N(Y.__webglFramebuffer[we],P,M,t.COLOR_ATTACHMENT0,Me,we);else N(Y.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,Me,0);g(M)&&d(Me),n.unbindTexture()}P.depthBuffer&&K(P)}function de(P){const M=P.textures;for(let Y=0,le=M.length;Y<le;Y++){const ae=M[Y];if(g(ae)){const ue=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,De=i.get(ae).__webglTexture;n.bindTexture(ue,De),d(ue),n.unbindTexture()}}}const w=[],Z=[];function z(P){if(P.samples>0){if(X(P)===!1){const M=P.textures,Y=P.width,le=P.height;let ae=t.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,De=i.get(P),Me=M.length>1;if(Me)for(let we=0;we<M.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let we=0;we<M.length;we++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),Me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,De.__webglColorRenderbuffer[we]);const ze=i.get(M[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,Y,le,0,0,Y,le,ae,t.NEAREST),l===!0&&(w.length=0,Z.length=0,w.push(t.COLOR_ATTACHMENT0+we),P.depthBuffer&&P.resolveDepthBuffer===!1&&(w.push(ue),Z.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,w))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let we=0;we<M.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,De.__webglColorRenderbuffer[we]);const ze=i.get(M[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,De.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Q(P){return Math.min(r.maxSamples,P.samples)}function X(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ce(P){const M=o.render.frame;f.get(P)!==M&&(f.set(P,M),P.update())}function k(P,M){const Y=P.colorSpace,le=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==er&&Y!==Ui&&(tt.getTransfer(Y)===st?(le!==On||ae!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function I(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=ee,this.setTexture2DArray=oe,this.setTexture3D=te,this.setTextureCube=J,this.rebindTextures=W,this.setupRenderTarget=B,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=N,this.useMultisampledRTT=X}function Kw(t,e){function n(i,r=Ui){let s;const o=tt.getTransfer(r);if(i===yi)return t.UNSIGNED_BYTE;if(i===kh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===V0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===z0)return t.BYTE;if(i===B0)return t.SHORT;if(i===zo)return t.UNSIGNED_SHORT;if(i===Oh)return t.INT;if(i===Pr)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===jo)return t.HALF_FLOAT;if(i===H0)return t.ALPHA;if(i===G0)return t.RGB;if(i===On)return t.RGBA;if(i===W0)return t.LUMINANCE;if(i===X0)return t.LUMINANCE_ALPHA;if(i===Ss)return t.DEPTH_COMPONENT;if(i===Ns)return t.DEPTH_STENCIL;if(i===q0)return t.RED;if(i===Bh)return t.RED_INTEGER;if(i===$0)return t.RG;if(i===Vh)return t.RG_INTEGER;if(i===Hh)return t.RGBA_INTEGER;if(i===el||i===tl||i===nl||i===il)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===el)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===el)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===il)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ff||i===hf||i===df||i===pf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ff)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===df)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mf||i===gf||i===vf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===mf||i===gf)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===vf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_f||i===xf||i===yf||i===Sf||i===Mf||i===Ef||i===wf||i===Tf||i===Af||i===Cf||i===Rf||i===bf||i===Pf||i===Lf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_f)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ef)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Af)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===If||i===Df)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===rl)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===If)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Df)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===j0||i===Nf||i===Uf||i===Ff)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ff)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ds?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Zw extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sr extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jw={type:"move"};class ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),d=this._getHandJoint(u,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const f=u.joints["index-finger-tip"],c=u.joints["thumb-tip"],h=f.position.distanceTo(c.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Sr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Qw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eT=`
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

}`;class tT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new nn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ki({vertexShader:Qw,fragmentShader:eT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kn(new tu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nT extends zs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,c=null,h=null,p=null,v=null;const x=new tT,g=n.getContextAttributes();let d=null,_=null;const m=[],y=[],D=new me;let C=null;const A=new xn;A.layers.enable(1),A.viewport=new Et;const F=new xn;F.layers.enable(2),F.viewport=new Et;const T=[A,F],S=new Zw;S.layers.enable(1),S.layers.enable(2);let O=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let N=m[U];return N===void 0&&(N=new ac,m[U]=N),N.getTargetRaySpace()},this.getControllerGrip=function(U){let N=m[U];return N===void 0&&(N=new ac,m[U]=N),N.getGripSpace()},this.getHand=function(U){let N=m[U];return N===void 0&&(N=new ac,m[U]=N),N.getHandSpace()};function q(U){const N=y.indexOf(U.inputSource);if(N===-1)return;const b=m[N];b!==void 0&&(b.update(U.inputSource,U.frame,u||o),b.dispatchEvent({type:U.type,data:U.inputSource}))}function ee(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",oe);for(let U=0;U<m.length;U++){const N=y[U];N!==null&&(y[U]=null,m[U].disconnect(N))}O=null,H=null,x.reset(),e.setRenderTarget(d),p=null,h=null,c=null,r=null,_=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return c},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",oe),g.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const N={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,N),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Lr(p.framebufferWidth,p.framebufferHeight,{format:On,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let N=null,b=null,E=null;g.depth&&(E=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,N=g.stencil?Ns:Ss,b=g.stencil?Ds:Pr);const K={colorFormat:n.RGBA8,depthFormat:E,scaleFactor:s};c=new XRWebGLBinding(r,n),h=c.createProjectionLayer(K),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Lr(h.textureWidth,h.textureHeight,{format:On,type:yi,depthTexture:new cv(h.textureWidth,h.textureHeight,b,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),be.setContext(r),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function oe(U){for(let N=0;N<U.removed.length;N++){const b=U.removed[N],E=y.indexOf(b);E>=0&&(y[E]=null,m[E].disconnect(b))}for(let N=0;N<U.added.length;N++){const b=U.added[N];let E=y.indexOf(b);if(E===-1){for(let W=0;W<m.length;W++)if(W>=y.length){y.push(b),E=W;break}else if(y[W]===null){y[W]=b,E=W;break}if(E===-1)break}const K=m[E];K&&K.connect(b)}}const te=new $,J=new $;function L(U,N,b){te.setFromMatrixPosition(N.matrixWorld),J.setFromMatrixPosition(b.matrixWorld);const E=te.distanceTo(J),K=N.projectionMatrix.elements,W=b.projectionMatrix.elements,B=K[14]/(K[10]-1),de=K[14]/(K[10]+1),w=(K[9]+1)/K[5],Z=(K[9]-1)/K[5],z=(K[8]-1)/K[0],Q=(W[8]+1)/W[0],X=B*z,ce=B*Q,k=E/(-z+Q),I=k*-z;if(N.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(I),U.translateZ(k),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert(),K[10]===-1)U.projectionMatrix.copy(N.projectionMatrix),U.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{const P=B+k,M=de+k,Y=X-I,le=ce+(E-I),ae=w*de/M*P,ue=Z*de/M*P;U.projectionMatrix.makePerspective(Y,le,ae,ue,P,M),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}}function re(U,N){N===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(N.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;let N=U.near,b=U.far;x.texture!==null&&(x.depthNear>0&&(N=x.depthNear),x.depthFar>0&&(b=x.depthFar)),S.near=F.near=A.near=N,S.far=F.far=A.far=b,(O!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),O=S.near,H=S.far);const E=U.parent,K=S.cameras;re(S,E);for(let W=0;W<K.length;W++)re(K[W],E);K.length===2?L(S,A,F):S.projectionMatrix.copy(A.projectionMatrix),se(U,S,E)};function se(U,N,b){b===null?U.matrix.copy(N.matrixWorld):(U.matrix.copy(b.matrixWorld),U.matrix.invert(),U.matrix.multiply(N.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(N.projectionMatrix),U.projectionMatrixInverse.copy(N.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=Of*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(U){l=U,h!==null&&(h.fixedFoveation=U),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=U)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let fe=null;function ge(U,N){if(f=N.getViewerPose(u||o),v=N,f!==null){const b=f.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let E=!1;b.length!==S.cameras.length&&(S.cameras.length=0,E=!0);for(let W=0;W<b.length;W++){const B=b[W];let de=null;if(p!==null)de=p.getViewport(B);else{const Z=c.getViewSubImage(h,B);de=Z.viewport,W===0&&(e.setRenderTargetTextures(_,Z.colorTexture,h.ignoreDepthValues?void 0:Z.depthStencilTexture),e.setRenderTarget(_))}let w=T[W];w===void 0&&(w=new xn,w.layers.enable(W),w.viewport=new Et,T[W]=w),w.matrix.fromArray(B.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(B.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(de.x,de.y,de.width,de.height),W===0&&(S.matrix.copy(w.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),E===!0&&S.cameras.push(w)}const K=r.enabledFeatures;if(K&&K.includes("depth-sensing")){const W=c.getDepthInformation(b[0]);W&&W.isValid&&W.texture&&x.init(e,W,r.renderState)}}for(let b=0;b<m.length;b++){const E=y[b],K=m[b];E!==null&&K!==void 0&&K.update(E,N,u||o)}fe&&fe(U,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),v=null}const be=new lv;be.setAnimationLoop(ge),this.setAnimationLoop=function(U){fe=U},this.dispose=function(){}}}const ar=new Zn,iT=new gt;function rT(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,sv(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,_,m,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),c(g,d)):d.isMeshPhongMaterial?(s(g,d),f(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),x(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,_,m):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===tn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===tn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const _=e.get(d),m=_.envMap,y=_.envMapRotation;m&&(g.envMap.value=m,ar.copy(y),ar.x*=-1,ar.y*=-1,ar.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),g.envMapRotation.value.setFromMatrix4(iT.makeRotationFromEuler(ar)),g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,_,m){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*_,g.scale.value=m*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function f(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function c(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,_){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){const _=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,m){const y=m.program;i.uniformBlockBinding(_,y)}function u(_,m){let y=r[_.id];y===void 0&&(v(_),y=f(_),r[_.id]=y,_.addEventListener("dispose",g));const D=m.program;i.updateUBOMapping(_,D);const C=e.render.frame;s[_.id]!==C&&(h(_),s[_.id]=C)}function f(_){const m=c();_.__bindingPointIndex=m;const y=t.createBuffer(),D=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,D,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,y),y}function c(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const m=r[_.id],y=_.uniforms,D=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let C=0,A=y.length;C<A;C++){const F=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,S=F.length;T<S;T++){const O=F[T];if(p(O,C,T,D)===!0){const H=O.__offset,q=Array.isArray(O.value)?O.value:[O.value];let ee=0;for(let oe=0;oe<q.length;oe++){const te=q[oe],J=x(te);typeof te=="number"||typeof te=="boolean"?(O.__data[0]=te,t.bufferSubData(t.UNIFORM_BUFFER,H+ee,O.__data)):te.isMatrix3?(O.__data[0]=te.elements[0],O.__data[1]=te.elements[1],O.__data[2]=te.elements[2],O.__data[3]=0,O.__data[4]=te.elements[3],O.__data[5]=te.elements[4],O.__data[6]=te.elements[5],O.__data[7]=0,O.__data[8]=te.elements[6],O.__data[9]=te.elements[7],O.__data[10]=te.elements[8],O.__data[11]=0):(te.toArray(O.__data,ee),ee+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,O.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,m,y,D){const C=_.value,A=m+"_"+y;if(D[A]===void 0)return typeof C=="number"||typeof C=="boolean"?D[A]=C:D[A]=C.clone(),!0;{const F=D[A];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return D[A]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function v(_){const m=_.uniforms;let y=0;const D=16;for(let A=0,F=m.length;A<F;A++){const T=Array.isArray(m[A])?m[A]:[m[A]];for(let S=0,O=T.length;S<O;S++){const H=T[S],q=Array.isArray(H.value)?H.value:[H.value];for(let ee=0,oe=q.length;ee<oe;ee++){const te=q[ee],J=x(te),L=y%D,re=L%J.boundary,se=L+re;y+=re,se!==0&&D-se<J.storage&&(y+=D-se),H.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=J.storage}}}const C=y%D;return C>0&&(y+=D-C),_.__size=y,_.__cache={},this}function x(_){const m={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(m.boundary=4,m.storage=4):_.isVector2?(m.boundary=8,m.storage=8):_.isVector3||_.isColor?(m.boundary=16,m.storage=12):_.isVector4?(m.boundary=16,m.storage=16):_.isMatrix3?(m.boundary=48,m.storage=48):_.isMatrix4?(m.boundary=64,m.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),m}function g(_){const m=_.target;m.removeEventListener("dispose",g);const y=o.indexOf(m.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class oT{constructor(e={}){const{canvas:n=Yy(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:c=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,g=null;const d=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=$i,this.toneMappingExposure=1;const m=this;let y=!1,D=0,C=0,A=null,F=-1,T=null;const S=new Et,O=new Et;let H=null;const q=new Ke(0);let ee=0,oe=n.width,te=n.height,J=1,L=null,re=null;const se=new Et(0,0,oe,te),fe=new Et(0,0,oe,te);let ge=!1;const be=new Xh;let U=!1,N=!1;const b=new gt,E=new $,K=new Et,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let B=!1;function de(){return A===null?J:1}let w=i;function Z(R,G){return n.getContext(R,G)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:c};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fh}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",pe,!1),n.addEventListener("webglcontextcreationerror",Se,!1),w===null){const G="webgl2";if(w=Z(G,R),w===null)throw Z(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let z,Q,X,ce,k,I,P,M,Y,le,ae,ue,De,Me,we,ze,_e,Te,qe,Fe,Re,He,Xe,lt;function V(){z=new hE(w),z.init(),He=new Kw(w,z),Q=new oE(w,z,e,He),X=new $w(w),ce=new mE(w),k=new Dw,I=new Yw(w,z,X,k,Q,He,ce),P=new lE(m),M=new fE(m),Y=new MS(w),Xe=new rE(w,Y),le=new dE(w,Y,ce,Xe),ae=new vE(w,le,Y,ce),qe=new gE(w,Q,I),ze=new aE(k),ue=new Iw(m,P,M,z,Q,Xe,ze),De=new rT(m,k),Me=new Uw,we=new Vw(z),Te=new iE(m,P,M,X,ae,h,l),_e=new qw(m,ae,Q),lt=new sT(w,ce,Q,X),Fe=new sE(w,z,ce),Re=new pE(w,z,ce),ce.programs=ue.programs,m.capabilities=Q,m.extensions=z,m.properties=k,m.renderLists=Me,m.shadowMap=_e,m.state=X,m.info=ce}V();const xe=new nT(m,w);this.xr=xe,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const R=z.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=z.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(R){R!==void 0&&(J=R,this.setSize(oe,te,!1))},this.getSize=function(R){return R.set(oe,te)},this.setSize=function(R,G,ne=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=R,te=G,n.width=Math.floor(R*J),n.height=Math.floor(G*J),ne===!0&&(n.style.width=R+"px",n.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(oe*J,te*J).floor()},this.setDrawingBufferSize=function(R,G,ne){oe=R,te=G,J=ne,n.width=Math.floor(R*ne),n.height=Math.floor(G*ne),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,G,ne,ie){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,G,ne,ie),X.viewport(S.copy(se).multiplyScalar(J).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,G,ne,ie){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,G,ne,ie),X.scissor(O.copy(fe).multiplyScalar(J).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){X.setScissorTest(ge=R)},this.setOpaqueSort=function(R){L=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(R=!0,G=!0,ne=!0){let ie=0;if(R){let j=!1;if(A!==null){const ye=A.texture.format;j=ye===Hh||ye===Vh||ye===Bh}if(j){const ye=A.texture.type,Ae=ye===yi||ye===Pr||ye===zo||ye===Ds||ye===kh||ye===zh,Pe=Te.getClearColor(),Le=Te.getClearAlpha(),ke=Pe.r,Be=Pe.g,Ne=Pe.b;Ae?(p[0]=ke,p[1]=Be,p[2]=Ne,p[3]=Le,w.clearBufferuiv(w.COLOR,0,p)):(v[0]=ke,v[1]=Be,v[2]=Ne,v[3]=Le,w.clearBufferiv(w.COLOR,0,v))}else ie|=w.COLOR_BUFFER_BIT}G&&(ie|=w.DEPTH_BUFFER_BIT),ne&&(ie|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",pe,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),Me.dispose(),we.dispose(),k.dispose(),P.dispose(),M.dispose(),ae.dispose(),Xe.dispose(),lt.dispose(),ue.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Hn),xe.removeEventListener("sessionend",Zh),tr.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=ce.autoReset,G=_e.enabled,ne=_e.autoUpdate,ie=_e.needsUpdate,j=_e.type;V(),ce.autoReset=R,_e.enabled=G,_e.autoUpdate=ne,_e.needsUpdate=ie,_e.type=j}function Se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Oe(R){const G=R.target;G.removeEventListener("dispose",Oe),je(G)}function je(R){_t(R),k.remove(R)}function _t(R){const G=k.get(R).programs;G!==void 0&&(G.forEach(function(ne){ue.releaseProgram(ne)}),R.isShaderMaterial&&ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,ne,ie,j,ye){G===null&&(G=W);const Ae=j.isMesh&&j.matrixWorld.determinant()<0,Pe=Ev(R,G,ne,ie,j);X.setMaterial(ie,Ae);let Le=ne.index,ke=1;if(ie.wireframe===!0){if(Le=le.getWireframeAttribute(ne),Le===void 0)return;ke=2}const Be=ne.drawRange,Ne=ne.attributes.position;let Je=Be.start*ke,dt=(Be.start+Be.count)*ke;ye!==null&&(Je=Math.max(Je,ye.start*ke),dt=Math.min(dt,(ye.start+ye.count)*ke)),Le!==null?(Je=Math.max(Je,0),dt=Math.min(dt,Le.count)):Ne!=null&&(Je=Math.max(Je,0),dt=Math.min(dt,Ne.count));const pt=dt-Je;if(pt<0||pt===1/0)return;Xe.setup(j,ie,Pe,ne,Le);let rn,Qe=Fe;if(Le!==null&&(rn=Y.get(Le),Qe=Re,Qe.setIndex(rn)),j.isMesh)ie.wireframe===!0?(X.setLineWidth(ie.wireframeLinewidth*de()),Qe.setMode(w.LINES)):Qe.setMode(w.TRIANGLES);else if(j.isLine){let Ue=ie.linewidth;Ue===void 0&&(Ue=1),X.setLineWidth(Ue*de()),j.isLineSegments?Qe.setMode(w.LINES):j.isLineLoop?Qe.setMode(w.LINE_LOOP):Qe.setMode(w.LINE_STRIP)}else j.isPoints?Qe.setMode(w.POINTS):j.isSprite&&Qe.setMode(w.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Qe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))Qe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ue=j._multiDrawStarts,Lt=j._multiDrawCounts,et=j._multiDrawCount,An=Le?Y.get(Le).bytesPerElement:1,Ur=k.get(ie).currentProgram.getUniforms();for(let sn=0;sn<et;sn++)Ur.setValue(w,"_gl_DrawID",sn),Qe.render(Ue[sn]/An,Lt[sn])}else if(j.isInstancedMesh)Qe.renderInstances(Je,pt,j.count);else if(ne.isInstancedBufferGeometry){const Ue=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Lt=Math.min(ne.instanceCount,Ue);Qe.renderInstances(Je,pt,Lt)}else Qe.render(Je,pt)};function Pt(R,G,ne){R.transparent===!0&&R.side===ui&&R.forceSinglePass===!1?(R.side=tn,R.needsUpdate=!0,Qo(R,G,ne),R.side=xi,R.needsUpdate=!0,Qo(R,G,ne),R.side=ui):Qo(R,G,ne)}this.compile=function(R,G,ne=null){ne===null&&(ne=R),g=we.get(ne),g.init(G),_.push(g),ne.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),R!==ne&&R.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const ie=new Set;return R.traverse(function(j){const ye=j.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Pe=ye[Ae];Pt(Pe,ne,j),ie.add(Pe)}else Pt(ye,ne,j),ie.add(ye)}),_.pop(),g=null,ie},this.compileAsync=function(R,G,ne=null){const ie=this.compile(R,G,ne);return new Promise(j=>{function ye(){if(ie.forEach(function(Ae){k.get(Ae).currentProgram.isReady()&&ie.delete(Ae)}),ie.size===0){j(R);return}setTimeout(ye,10)}z.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Ze=null;function Qn(R){Ze&&Ze(R)}function Hn(){tr.stop()}function Zh(){tr.start()}const tr=new lv;tr.setAnimationLoop(Qn),typeof self<"u"&&tr.setContext(self),this.setAnimationLoop=function(R){Ze=R,xe.setAnimationLoop(R),R===null?tr.stop():tr.start()},xe.addEventListener("sessionstart",Hn),xe.addEventListener("sessionend",Zh),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(G),G=xe.getCamera()),R.isScene===!0&&R.onBeforeRender(m,R,G,A),g=we.get(R,_.length),g.init(G),_.push(g),b.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),be.setFromProjectionMatrix(b),N=this.localClippingEnabled,U=ze.init(this.clippingPlanes,N),x=Me.get(R,d.length),x.init(),d.push(x),xe.enabled===!0&&xe.isPresenting===!0){const ye=m.xr.getDepthSensingMesh();ye!==null&&ru(ye,G,-1/0,m.sortObjects)}ru(R,G,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(L,re),B=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,B&&Te.addToRenderList(x,R),this.info.render.frame++,U===!0&&ze.beginShadows();const ne=g.state.shadowsArray;_e.render(ne,R,G),U===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=x.opaque,j=x.transmissive;if(g.setupLights(),G.isArrayCamera){const ye=G.cameras;if(j.length>0)for(let Ae=0,Pe=ye.length;Ae<Pe;Ae++){const Le=ye[Ae];Qh(ie,j,R,Le)}B&&Te.render(R);for(let Ae=0,Pe=ye.length;Ae<Pe;Ae++){const Le=ye[Ae];Jh(x,R,Le,Le.viewport)}}else j.length>0&&Qh(ie,j,R,G),B&&Te.render(R),Jh(x,R,G);A!==null&&(I.updateMultisampleRenderTarget(A),I.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(m,R,G),Xe.resetDefaultState(),F=-1,T=null,_.pop(),_.length>0?(g=_[_.length-1],U===!0&&ze.setGlobalState(m.clippingPlanes,g.state.camera)):g=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function ru(R,G,ne,ie){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||be.intersectsSprite(R)){ie&&K.setFromMatrixPosition(R.matrixWorld).applyMatrix4(b);const Ae=ae.update(R),Pe=R.material;Pe.visible&&x.push(R,Ae,Pe,ne,K.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||be.intersectsObject(R))){const Ae=ae.update(R),Pe=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),K.copy(R.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),K.copy(Ae.boundingSphere.center)),K.applyMatrix4(R.matrixWorld).applyMatrix4(b)),Array.isArray(Pe)){const Le=Ae.groups;for(let ke=0,Be=Le.length;ke<Be;ke++){const Ne=Le[ke],Je=Pe[Ne.materialIndex];Je&&Je.visible&&x.push(R,Ae,Je,ne,K.z,Ne)}}else Pe.visible&&x.push(R,Ae,Pe,ne,K.z,null)}}const ye=R.children;for(let Ae=0,Pe=ye.length;Ae<Pe;Ae++)ru(ye[Ae],G,ne,ie)}function Jh(R,G,ne,ie){const j=R.opaque,ye=R.transmissive,Ae=R.transparent;g.setupLightsView(ne),U===!0&&ze.setGlobalState(m.clippingPlanes,ne),ie&&X.viewport(S.copy(ie)),j.length>0&&Jo(j,G,ne),ye.length>0&&Jo(ye,G,ne),Ae.length>0&&Jo(Ae,G,ne),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Qh(R,G,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ie.id]===void 0&&(g.state.transmissionRenderTarget[ie.id]=new Lr(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?jo:yi,minFilter:yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ye=g.state.transmissionRenderTarget[ie.id],Ae=ie.viewport||S;ye.setSize(Ae.z,Ae.w);const Pe=m.getRenderTarget();m.setRenderTarget(ye),m.getClearColor(q),ee=m.getClearAlpha(),ee<1&&m.setClearColor(16777215,.5),m.clear(),B&&Te.render(ne);const Le=m.toneMapping;m.toneMapping=$i;const ke=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),g.setupLightsView(ie),U===!0&&ze.setGlobalState(m.clippingPlanes,ie),Jo(R,ne,ie),I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye),z.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ne=0,Je=G.length;Ne<Je;Ne++){const dt=G[Ne],pt=dt.object,rn=dt.geometry,Qe=dt.material,Ue=dt.group;if(Qe.side===ui&&pt.layers.test(ie.layers)){const Lt=Qe.side;Qe.side=tn,Qe.needsUpdate=!0,ed(pt,ne,ie,rn,Qe,Ue),Qe.side=Lt,Qe.needsUpdate=!0,Be=!0}}Be===!0&&(I.updateMultisampleRenderTarget(ye),I.updateRenderTargetMipmap(ye))}m.setRenderTarget(Pe),m.setClearColor(q,ee),ke!==void 0&&(ie.viewport=ke),m.toneMapping=Le}function Jo(R,G,ne){const ie=G.isScene===!0?G.overrideMaterial:null;for(let j=0,ye=R.length;j<ye;j++){const Ae=R[j],Pe=Ae.object,Le=Ae.geometry,ke=ie===null?Ae.material:ie,Be=Ae.group;Pe.layers.test(ne.layers)&&ed(Pe,G,ne,Le,ke,Be)}}function ed(R,G,ne,ie,j,ye){R.onBeforeRender(m,G,ne,ie,j,ye),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(m,G,ne,ie,R,ye),j.transparent===!0&&j.side===ui&&j.forceSinglePass===!1?(j.side=tn,j.needsUpdate=!0,m.renderBufferDirect(ne,G,ie,j,R,ye),j.side=xi,j.needsUpdate=!0,m.renderBufferDirect(ne,G,ie,j,R,ye),j.side=ui):m.renderBufferDirect(ne,G,ie,j,R,ye),R.onAfterRender(m,G,ne,ie,j,ye)}function Qo(R,G,ne){G.isScene!==!0&&(G=W);const ie=k.get(R),j=g.state.lights,ye=g.state.shadowsArray,Ae=j.state.version,Pe=ue.getParameters(R,j.state,ye,G,ne),Le=ue.getProgramCacheKey(Pe);let ke=ie.programs;ie.environment=R.isMeshStandardMaterial?G.environment:null,ie.fog=G.fog,ie.envMap=(R.isMeshStandardMaterial?M:P).get(R.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,ke===void 0&&(R.addEventListener("dispose",Oe),ke=new Map,ie.programs=ke);let Be=ke.get(Le);if(Be!==void 0){if(ie.currentProgram===Be&&ie.lightsStateVersion===Ae)return nd(R,Pe),Be}else Pe.uniforms=ue.getUniforms(R),R.onBeforeCompile(Pe,m),Be=ue.acquireProgram(Pe,Le),ke.set(Le,Be),ie.uniforms=Pe.uniforms;const Ne=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ne.clippingPlanes=ze.uniform),nd(R,Pe),ie.needsLights=Tv(R),ie.lightsStateVersion=Ae,ie.needsLights&&(Ne.ambientLightColor.value=j.state.ambient,Ne.lightProbe.value=j.state.probe,Ne.directionalLights.value=j.state.directional,Ne.directionalLightShadows.value=j.state.directionalShadow,Ne.spotLights.value=j.state.spot,Ne.spotLightShadows.value=j.state.spotShadow,Ne.rectAreaLights.value=j.state.rectArea,Ne.ltc_1.value=j.state.rectAreaLTC1,Ne.ltc_2.value=j.state.rectAreaLTC2,Ne.pointLights.value=j.state.point,Ne.pointLightShadows.value=j.state.pointShadow,Ne.hemisphereLights.value=j.state.hemi,Ne.directionalShadowMap.value=j.state.directionalShadowMap,Ne.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ne.spotShadowMap.value=j.state.spotShadowMap,Ne.spotLightMatrix.value=j.state.spotLightMatrix,Ne.spotLightMap.value=j.state.spotLightMap,Ne.pointShadowMap.value=j.state.pointShadowMap,Ne.pointShadowMatrix.value=j.state.pointShadowMatrix),ie.currentProgram=Be,ie.uniformsList=null,Be}function td(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=sl.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function nd(R,G){const ne=k.get(R);ne.outputColorSpace=G.outputColorSpace,ne.batching=G.batching,ne.batchingColor=G.batchingColor,ne.instancing=G.instancing,ne.instancingColor=G.instancingColor,ne.instancingMorph=G.instancingMorph,ne.skinning=G.skinning,ne.morphTargets=G.morphTargets,ne.morphNormals=G.morphNormals,ne.morphColors=G.morphColors,ne.morphTargetsCount=G.morphTargetsCount,ne.numClippingPlanes=G.numClippingPlanes,ne.numIntersection=G.numClipIntersection,ne.vertexAlphas=G.vertexAlphas,ne.vertexTangents=G.vertexTangents,ne.toneMapping=G.toneMapping}function Ev(R,G,ne,ie,j){G.isScene!==!0&&(G=W),I.resetTextureUnits();const ye=G.fog,Ae=ie.isMeshStandardMaterial?G.environment:null,Pe=A===null?m.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:er,Le=(ie.isMeshStandardMaterial?M:P).get(ie.envMap||Ae),ke=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Be=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ne=!!ne.morphAttributes.position,Je=!!ne.morphAttributes.normal,dt=!!ne.morphAttributes.color;let pt=$i;ie.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pt=m.toneMapping);const rn=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Qe=rn!==void 0?rn.length:0,Ue=k.get(ie),Lt=g.state.lights;if(U===!0&&(N===!0||R!==T)){const pn=R===T&&ie.id===F;ze.setState(ie,R,pn)}let et=!1;ie.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Lt.state.version||Ue.outputColorSpace!==Pe||j.isBatchedMesh&&Ue.batching===!1||!j.isBatchedMesh&&Ue.batching===!0||j.isBatchedMesh&&Ue.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ue.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ue.instancing===!1||!j.isInstancedMesh&&Ue.instancing===!0||j.isSkinnedMesh&&Ue.skinning===!1||!j.isSkinnedMesh&&Ue.skinning===!0||j.isInstancedMesh&&Ue.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ue.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ue.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ue.instancingMorph===!1&&j.morphTexture!==null||Ue.envMap!==Le||ie.fog===!0&&Ue.fog!==ye||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ze.numPlanes||Ue.numIntersection!==ze.numIntersection)||Ue.vertexAlphas!==ke||Ue.vertexTangents!==Be||Ue.morphTargets!==Ne||Ue.morphNormals!==Je||Ue.morphColors!==dt||Ue.toneMapping!==pt||Ue.morphTargetsCount!==Qe)&&(et=!0):(et=!0,Ue.__version=ie.version);let An=Ue.currentProgram;et===!0&&(An=Qo(ie,G,j));let Ur=!1,sn=!1,su=!1;const xt=An.getUniforms(),Ei=Ue.uniforms;if(X.useProgram(An.program)&&(Ur=!0,sn=!0,su=!0),ie.id!==F&&(F=ie.id,sn=!0),Ur||T!==R){xt.setValue(w,"projectionMatrix",R.projectionMatrix),xt.setValue(w,"viewMatrix",R.matrixWorldInverse);const pn=xt.map.cameraPosition;pn!==void 0&&pn.setValue(w,E.setFromMatrixPosition(R.matrixWorld)),Q.logarithmicDepthBuffer&&xt.setValue(w,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&xt.setValue(w,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,sn=!0,su=!0)}if(j.isSkinnedMesh){xt.setOptional(w,j,"bindMatrix"),xt.setOptional(w,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),xt.setValue(w,"boneTexture",pn.boneTexture,I))}j.isBatchedMesh&&(xt.setOptional(w,j,"batchingTexture"),xt.setValue(w,"batchingTexture",j._matricesTexture,I),xt.setOptional(w,j,"batchingIdTexture"),xt.setValue(w,"batchingIdTexture",j._indirectTexture,I),xt.setOptional(w,j,"batchingColorTexture"),j._colorsTexture!==null&&xt.setValue(w,"batchingColorTexture",j._colorsTexture,I));const ou=ne.morphAttributes;if((ou.position!==void 0||ou.normal!==void 0||ou.color!==void 0)&&qe.update(j,ne,An),(sn||Ue.receiveShadow!==j.receiveShadow)&&(Ue.receiveShadow=j.receiveShadow,xt.setValue(w,"receiveShadow",j.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Ei.envMap.value=Le,Ei.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&G.environment!==null&&(Ei.envMapIntensity.value=G.environmentIntensity),sn&&(xt.setValue(w,"toneMappingExposure",m.toneMappingExposure),Ue.needsLights&&wv(Ei,su),ye&&ie.fog===!0&&De.refreshFogUniforms(Ei,ye),De.refreshMaterialUniforms(Ei,ie,J,te,g.state.transmissionRenderTarget[R.id]),sl.upload(w,td(Ue),Ei,I)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(sl.upload(w,td(Ue),Ei,I),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&xt.setValue(w,"center",j.center),xt.setValue(w,"modelViewMatrix",j.modelViewMatrix),xt.setValue(w,"normalMatrix",j.normalMatrix),xt.setValue(w,"modelMatrix",j.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const pn=ie.uniformsGroups;for(let au=0,Av=pn.length;au<Av;au++){const id=pn[au];lt.update(id,An),lt.bind(id,An)}}return An}function wv(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Tv(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,G,ne){k.get(R.texture).__webglTexture=G,k.get(R.depthTexture).__webglTexture=ne;const ie=k.get(R);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const ne=k.get(R);ne.__webglFramebuffer=G,ne.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,ne=0){A=R,D=G,C=ne;let ie=!0,j=null,ye=!1,Ae=!1;if(R){const Le=k.get(R);if(Le.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(w.FRAMEBUFFER,null),ie=!1;else if(Le.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Le.__hasExternalTextures)I.rebindTextures(R,k.get(R.texture).__webglTexture,k.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ne=R.depthTexture;if(Le.__boundDepthTexture!==Ne){if(Ne!==null&&k.has(Ne)&&(R.width!==Ne.image.width||R.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const ke=R.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ae=!0);const Be=k.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Be[G])?j=Be[G][ne]:j=Be[G],ye=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?j=k.get(R).__webglMultisampledFramebuffer:Array.isArray(Be)?j=Be[ne]:j=Be,S.copy(R.viewport),O.copy(R.scissor),H=R.scissorTest}else S.copy(se).multiplyScalar(J).floor(),O.copy(fe).multiplyScalar(J).floor(),H=ge;if(X.bindFramebuffer(w.FRAMEBUFFER,j)&&ie&&X.drawBuffers(R,j),X.viewport(S),X.scissor(O),X.setScissorTest(H),ye){const Le=k.get(R.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+G,Le.__webglTexture,ne)}else if(Ae){const Le=k.get(R.texture),ke=G||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Le.__webglTexture,ne||0,ke)}F=-1},this.readRenderTargetPixels=function(R,G,ne,ie,j,ye,Ae){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=k.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){X.bindFramebuffer(w.FRAMEBUFFER,Pe);try{const Le=R.texture,ke=Le.format,Be=Le.type;if(!Q.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-ie&&ne>=0&&ne<=R.height-j&&w.readPixels(G,ne,ie,j,He.convert(ke),He.convert(Be),ye)}finally{const Le=A!==null?k.get(A).__webglFramebuffer:null;X.bindFramebuffer(w.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(R,G,ne,ie,j,ye,Ae){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=k.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){X.bindFramebuffer(w.FRAMEBUFFER,Pe);try{const Le=R.texture,ke=Le.format,Be=Le.type;if(!Q.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-ie&&ne>=0&&ne<=R.height-j){const Ne=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ne),w.bufferData(w.PIXEL_PACK_BUFFER,ye.byteLength,w.STREAM_READ),w.readPixels(G,ne,ie,j,He.convert(ke),He.convert(Be),0),w.flush();const Je=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await Ky(w,Je,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,Ne),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ye)}finally{w.deleteBuffer(Ne),w.deleteSync(Je)}return ye}}finally{const Le=A!==null?k.get(A).__webglFramebuffer:null;X.bindFramebuffer(w.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(R,G=null,ne=0){R.isTexture!==!0&&(_o("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);const ie=Math.pow(2,-ne),j=Math.floor(R.image.width*ie),ye=Math.floor(R.image.height*ie),Ae=G!==null?G.x:0,Pe=G!==null?G.y:0;I.setTexture2D(R,0),w.copyTexSubImage2D(w.TEXTURE_2D,ne,0,0,Ae,Pe,j,ye),X.unbindTexture()},this.copyTextureToTexture=function(R,G,ne=null,ie=null,j=0){R.isTexture!==!0&&(_o("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,R=arguments[1],G=arguments[2],j=arguments[3]||0,ne=null);let ye,Ae,Pe,Le,ke,Be;ne!==null?(ye=ne.max.x-ne.min.x,Ae=ne.max.y-ne.min.y,Pe=ne.min.x,Le=ne.min.y):(ye=R.image.width,Ae=R.image.height,Pe=0,Le=0),ie!==null?(ke=ie.x,Be=ie.y):(ke=0,Be=0);const Ne=He.convert(G.format),Je=He.convert(G.type);I.setTexture2D(G,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,G.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,G.unpackAlignment);const dt=w.getParameter(w.UNPACK_ROW_LENGTH),pt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),rn=w.getParameter(w.UNPACK_SKIP_PIXELS),Qe=w.getParameter(w.UNPACK_SKIP_ROWS),Ue=w.getParameter(w.UNPACK_SKIP_IMAGES),Lt=R.isCompressedTexture?R.mipmaps[j]:R.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Lt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Lt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Pe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Le),R.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,j,ke,Be,ye,Ae,Ne,Je,Lt.data):R.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,j,ke,Be,Lt.width,Lt.height,Ne,Lt.data):w.texSubImage2D(w.TEXTURE_2D,j,ke,Be,ye,Ae,Ne,Je,Lt),w.pixelStorei(w.UNPACK_ROW_LENGTH,dt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,pt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,rn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Qe),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ue),j===0&&G.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(R,G,ne=null,ie=null,j=0){R.isTexture!==!0&&(_o("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,R=arguments[2],G=arguments[3],j=arguments[4]||0);let ye,Ae,Pe,Le,ke,Be,Ne,Je,dt;const pt=R.isCompressedTexture?R.mipmaps[j]:R.image;ne!==null?(ye=ne.max.x-ne.min.x,Ae=ne.max.y-ne.min.y,Pe=ne.max.z-ne.min.z,Le=ne.min.x,ke=ne.min.y,Be=ne.min.z):(ye=pt.width,Ae=pt.height,Pe=pt.depth,Le=0,ke=0,Be=0),ie!==null?(Ne=ie.x,Je=ie.y,dt=ie.z):(Ne=0,Je=0,dt=0);const rn=He.convert(G.format),Qe=He.convert(G.type);let Ue;if(G.isData3DTexture)I.setTexture3D(G,0),Ue=w.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)I.setTexture2DArray(G,0),Ue=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,G.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,G.unpackAlignment);const Lt=w.getParameter(w.UNPACK_ROW_LENGTH),et=w.getParameter(w.UNPACK_IMAGE_HEIGHT),An=w.getParameter(w.UNPACK_SKIP_PIXELS),Ur=w.getParameter(w.UNPACK_SKIP_ROWS),sn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,pt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,pt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Le),w.pixelStorei(w.UNPACK_SKIP_ROWS,ke),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Be),R.isDataTexture||R.isData3DTexture?w.texSubImage3D(Ue,j,Ne,Je,dt,ye,Ae,Pe,rn,Qe,pt.data):G.isCompressedArrayTexture?w.compressedTexSubImage3D(Ue,j,Ne,Je,dt,ye,Ae,Pe,rn,pt.data):w.texSubImage3D(Ue,j,Ne,Je,dt,ye,Ae,Pe,rn,Qe,pt),w.pixelStorei(w.UNPACK_ROW_LENGTH,Lt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,et),w.pixelStorei(w.UNPACK_SKIP_PIXELS,An),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ur),w.pixelStorei(w.UNPACK_SKIP_IMAGES,sn),j===0&&G.generateMipmaps&&w.generateMipmap(Ue),X.unbindTexture()},this.initRenderTarget=function(R){k.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),X.unbindTexture()},this.resetState=function(){D=0,C=0,A=null,X.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Gh?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===eu?"display-p3":"srgb"}}class aT extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],h=i[r+1]-f,p=(o-f)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new me:new $);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new $,r=[],s=[],o=[],a=new $,l=new gt;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new $)}s[0]=new $,o[0]=new $;let u=Number.MAX_VALUE;const f=Math.abs(r[0].x),c=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=u&&(u=f,i.set(1,0,0)),c<=u&&(u=c,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Bt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Bt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $h extends Jn{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new me){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),c=Math.sin(this.aRotation),h=l-this.aX,p=u-this.aY;l=h*f-p*c+this.aX,u=h*c+p*f+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class lT extends $h{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function jh(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,f,c){let h=(o-s)/u-(a-s)/(u+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+c)+(l-a)/c;h*=f,p*=f,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const za=new $,lc=new jh,uc=new jh,cc=new jh;class uT extends Jn{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new $){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,f;this.closed||a>0?u=r[(a-1)%s]:(za.subVectors(r[0],r[1]).add(r[0]),u=za);const c=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(za.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=za),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(u.distanceToSquared(c),p),x=Math.pow(c.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(f),p);x<1e-4&&(x=1),v<1e-4&&(v=x),g<1e-4&&(g=x),lc.initNonuniformCatmullRom(u.x,c.x,h.x,f.x,v,x,g),uc.initNonuniformCatmullRom(u.y,c.y,h.y,f.y,v,x,g),cc.initNonuniformCatmullRom(u.z,c.z,h.z,f.z,v,x,g)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(u.x,c.x,h.x,f.x,this.tension),uc.initCatmullRom(u.y,c.y,h.y,f.y,this.tension),cc.initCatmullRom(u.z,c.z,h.z,f.z,this.tension));return i.set(lc.calc(l),uc.calc(l),cc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new $().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function um(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function cT(t,e){const n=1-t;return n*n*e}function fT(t,e){return 2*(1-t)*t*e}function hT(t,e){return t*t*e}function xo(t,e,n,i){return cT(t,e)+fT(t,n)+hT(t,i)}function dT(t,e){const n=1-t;return n*n*n*e}function pT(t,e){const n=1-t;return 3*n*n*t*e}function mT(t,e){return 3*(1-t)*t*t*e}function gT(t,e){return t*t*t*e}function yo(t,e,n,i,r){return dT(t,e)+pT(t,n)+mT(t,i)+gT(t,r)}class mv extends Jn{constructor(e=new me,n=new me,i=new me,r=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new me){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(yo(e,r.x,s.x,o.x,a.x),yo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vT extends Jn{constructor(e=new $,n=new $,i=new $,r=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new $){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(yo(e,r.x,s.x,o.x,a.x),yo(e,r.y,s.y,o.y,a.y),yo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gv extends Jn{constructor(e=new me,n=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new me){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new me){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _T extends Jn{constructor(e=new $,n=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new $){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new $){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vv extends Jn{constructor(e=new me,n=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new me){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(xo(e,r.x,s.x,o.x),xo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xT extends Jn{constructor(e=new $,n=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new $){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(xo(e,r.x,s.x,o.x),xo(e,r.y,s.y,o.y),xo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _v extends Jn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new me){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],f=r[o>r.length-2?r.length-1:o+1],c=r[o>r.length-3?r.length-1:o+2];return i.set(um(a,l.x,u.x,f.x,c.x),um(a,l.y,u.y,f.y,c.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new me().fromArray(r))}return this}}var zf=Object.freeze({__proto__:null,ArcCurve:lT,CatmullRomCurve3:uT,CubicBezierCurve:mv,CubicBezierCurve3:vT,EllipseCurve:$h,LineCurve:gv,LineCurve3:_T,QuadraticBezierCurve:vv,QuadraticBezierCurve3:xT,SplineCurve:_v});class yT extends Jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const f=l[u];i&&i.equals(f)||(n.push(f),i=f)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new zf[r.type]().fromJSON(r))}return this}}class Es extends yT{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new gv(this.currentPoint.clone(),new me(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new vv(this.currentPoint.clone(),new me(e,n),new me(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new mv(this.currentPoint.clone(),new me(e,n),new me(i,r),new me(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new _v(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+u,n+f,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new $h(e,n,i,r,s,o,a,l);if(this.curves.length>0){const c=u.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(u);const f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class So extends Es{constructor(e){super(e),this.uuid=Bs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Es().fromJSON(r))}return this}}const ST={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=xv(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,f,c,h,p;if(i&&(s=AT(t,e,s,n)),t.length>80*n){a=u=t[0],l=f=t[1];for(let v=n;v<r;v+=n)c=t[v],h=t[v+1],c<a&&(a=c),h<l&&(l=h),c>u&&(u=c),h>f&&(f=h);p=Math.max(u-a,f-l),p=p!==0?32767/p:0}return Bo(s,o,n,a,l,p,0),o}};function xv(t,e,n,i,r){let s,o;if(r===OT(t,e,n,i)>0)for(s=e;s<n;s+=i)o=cm(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=cm(s,t[s],t[s+1],o);return o&&iu(o,o.next)&&(Ho(o),o=o.next),o}function Ir(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(iu(n,n.next)||ct(n.prev,n,n.next)===0)){if(Ho(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Bo(t,e,n,i,r,s,o){if(!t)return;!o&&s&&LT(t,i,r,s);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,s?ET(t,i,r,s):MT(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),Ho(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=wT(Ir(t),e,n),Bo(t,e,n,i,r,s,2)):o===2&&TT(t,e,n,i,r,s):Bo(Ir(t),e,n,i,r,s,1);break}}}function MT(t){const e=t.prev,n=t,i=t.next;if(ct(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,f=r<s?r<o?r:o:s<o?s:o,c=a<l?a<u?a:u:l<u?l:u,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let v=i.next;for(;v!==e;){if(v.x>=f&&v.x<=h&&v.y>=c&&v.y<=p&&ds(r,a,s,l,o,u,v.x,v.y)&&ct(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function ET(t,e,n,i){const r=t.prev,s=t,o=t.next;if(ct(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,f=r.y,c=s.y,h=o.y,p=a<l?a<u?a:u:l<u?l:u,v=f<c?f<h?f:h:c<h?c:h,x=a>l?a>u?a:u:l>u?l:u,g=f>c?f>h?f:h:c>h?c:h,d=Bf(p,v,e,n,i),_=Bf(x,g,e,n,i);let m=t.prevZ,y=t.nextZ;for(;m&&m.z>=d&&y&&y.z<=_;){if(m.x>=p&&m.x<=x&&m.y>=v&&m.y<=g&&m!==r&&m!==o&&ds(a,f,l,c,u,h,m.x,m.y)&&ct(m.prev,m,m.next)>=0||(m=m.prevZ,y.x>=p&&y.x<=x&&y.y>=v&&y.y<=g&&y!==r&&y!==o&&ds(a,f,l,c,u,h,y.x,y.y)&&ct(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;m&&m.z>=d;){if(m.x>=p&&m.x<=x&&m.y>=v&&m.y<=g&&m!==r&&m!==o&&ds(a,f,l,c,u,h,m.x,m.y)&&ct(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=x&&y.y>=v&&y.y<=g&&y!==r&&y!==o&&ds(a,f,l,c,u,h,y.x,y.y)&&ct(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function wT(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!iu(r,s)&&yv(r,i,i.next,s)&&Vo(r,s)&&Vo(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Ho(i),Ho(i.next),i=t=s),i=i.next}while(i!==t);return Ir(i)}function TT(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&NT(o,a)){let l=Sv(o,a);o=Ir(o,o.next),l=Ir(l,l.next),Bo(o,e,n,i,r,s,0),Bo(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function AT(t,e,n,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=xv(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(DT(u));for(r.sort(CT),s=0;s<r.length;s++)n=RT(r[s],n);return n}function CT(t,e){return t.x-e.x}function RT(t,e){const n=bT(t,e);if(!n)return e;const i=Sv(n,t);return Ir(i,i.next),Ir(n,n.next)}function bT(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let f=1/0,c;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&ds(o<u?s:i,o,l,u,o<u?i:s,o,n.x,n.y)&&(c=Math.abs(o-n.y)/(s-n.x),Vo(n,t)&&(c<f||c===f&&(n.x>r.x||n.x===r.x&&PT(r,n)))&&(r=n,f=c)),n=n.next;while(n!==a);return r}function PT(t,e){return ct(t.prev,t,e.prev)<0&&ct(e.next,t,t.next)<0}function LT(t,e,n,i){let r=t;do r.z===0&&(r.z=Bf(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,IT(r)}function IT(t){let e,n,i,r,s,o,a,l,u=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,u*=2}while(o>1);return t}function Bf(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function DT(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function ds(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function NT(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!UT(t,e)&&(Vo(t,e)&&Vo(e,t)&&FT(t,e)&&(ct(t.prev,t,e.prev)||ct(t,e.prev,e))||iu(t,e)&&ct(t.prev,t,t.next)>0&&ct(e.prev,e,e.next)>0)}function ct(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function iu(t,e){return t.x===e.x&&t.y===e.y}function yv(t,e,n,i){const r=Va(ct(t,e,n)),s=Va(ct(t,e,i)),o=Va(ct(n,i,t)),a=Va(ct(n,i,e));return!!(r!==s&&o!==a||r===0&&Ba(t,n,e)||s===0&&Ba(t,i,e)||o===0&&Ba(n,t,i)||a===0&&Ba(n,e,i))}function Ba(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Va(t){return t>0?1:t<0?-1:0}function UT(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&yv(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Vo(t,e){return ct(t.prev,t,t.next)<0?ct(t,e,t.next)>=0&&ct(t,t.prev,e)>=0:ct(t,e,t.prev)<0||ct(t,t.next,e)<0}function FT(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function Sv(t,e){const n=new Vf(t.i,t.x,t.y),i=new Vf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function cm(t,e,n,i){const r=new Vf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ho(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Vf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function OT(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class wr{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return wr.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];fm(e),hm(i,e);let o=e.length;n.forEach(fm);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,hm(i,n[l]);const a=ST.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function fm(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function hm(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Yh extends Mi{constructor(e=new So([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new En(r,3)),this.setAttribute("uv",new En(s,2)),this.computeVertexNormals();function o(a){const l=[],u=n.curveSegments!==void 0?n.curveSegments:12,f=n.steps!==void 0?n.steps:1,c=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,v=n.bevelSize!==void 0?n.bevelSize:p-.1,x=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,_=n.UVGenerator!==void 0?n.UVGenerator:kT;let m,y=!1,D,C,A,F;d&&(m=d.getSpacedPoints(f),y=!0,h=!1,D=d.computeFrenetFrames(f,!1),C=new $,A=new $,F=new $),h||(g=0,p=0,v=0,x=0);const T=a.extractPoints(u);let S=T.shape;const O=T.holes;if(!wr.isClockWise(S)){S=S.reverse();for(let w=0,Z=O.length;w<Z;w++){const z=O[w];wr.isClockWise(z)&&(O[w]=z.reverse())}}const q=wr.triangulateShape(S,O),ee=S;for(let w=0,Z=O.length;w<Z;w++){const z=O[w];S=S.concat(z)}function oe(w,Z,z){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),w.clone().addScaledVector(Z,z)}const te=S.length,J=q.length;function L(w,Z,z){let Q,X,ce;const k=w.x-Z.x,I=w.y-Z.y,P=z.x-w.x,M=z.y-w.y,Y=k*k+I*I,le=k*M-I*P;if(Math.abs(le)>Number.EPSILON){const ae=Math.sqrt(Y),ue=Math.sqrt(P*P+M*M),De=Z.x-I/ae,Me=Z.y+k/ae,we=z.x-M/ue,ze=z.y+P/ue,_e=((we-De)*M-(ze-Me)*P)/(k*M-I*P);Q=De+k*_e-w.x,X=Me+I*_e-w.y;const Te=Q*Q+X*X;if(Te<=2)return new me(Q,X);ce=Math.sqrt(Te/2)}else{let ae=!1;k>Number.EPSILON?P>Number.EPSILON&&(ae=!0):k<-Number.EPSILON?P<-Number.EPSILON&&(ae=!0):Math.sign(I)===Math.sign(M)&&(ae=!0),ae?(Q=-I,X=k,ce=Math.sqrt(Y)):(Q=k,X=I,ce=Math.sqrt(Y/2))}return new me(Q/ce,X/ce)}const re=[];for(let w=0,Z=ee.length,z=Z-1,Q=w+1;w<Z;w++,z++,Q++)z===Z&&(z=0),Q===Z&&(Q=0),re[w]=L(ee[w],ee[z],ee[Q]);const se=[];let fe,ge=re.concat();for(let w=0,Z=O.length;w<Z;w++){const z=O[w];fe=[];for(let Q=0,X=z.length,ce=X-1,k=Q+1;Q<X;Q++,ce++,k++)ce===X&&(ce=0),k===X&&(k=0),fe[Q]=L(z[Q],z[ce],z[k]);se.push(fe),ge=ge.concat(fe)}for(let w=0;w<g;w++){const Z=w/g,z=p*Math.cos(Z*Math.PI/2),Q=v*Math.sin(Z*Math.PI/2)+x;for(let X=0,ce=ee.length;X<ce;X++){const k=oe(ee[X],re[X],Q);E(k.x,k.y,-z)}for(let X=0,ce=O.length;X<ce;X++){const k=O[X];fe=se[X];for(let I=0,P=k.length;I<P;I++){const M=oe(k[I],fe[I],Q);E(M.x,M.y,-z)}}}const be=v+x;for(let w=0;w<te;w++){const Z=h?oe(S[w],ge[w],be):S[w];y?(A.copy(D.normals[0]).multiplyScalar(Z.x),C.copy(D.binormals[0]).multiplyScalar(Z.y),F.copy(m[0]).add(A).add(C),E(F.x,F.y,F.z)):E(Z.x,Z.y,0)}for(let w=1;w<=f;w++)for(let Z=0;Z<te;Z++){const z=h?oe(S[Z],ge[Z],be):S[Z];y?(A.copy(D.normals[w]).multiplyScalar(z.x),C.copy(D.binormals[w]).multiplyScalar(z.y),F.copy(m[w]).add(A).add(C),E(F.x,F.y,F.z)):E(z.x,z.y,c/f*w)}for(let w=g-1;w>=0;w--){const Z=w/g,z=p*Math.cos(Z*Math.PI/2),Q=v*Math.sin(Z*Math.PI/2)+x;for(let X=0,ce=ee.length;X<ce;X++){const k=oe(ee[X],re[X],Q);E(k.x,k.y,c+z)}for(let X=0,ce=O.length;X<ce;X++){const k=O[X];fe=se[X];for(let I=0,P=k.length;I<P;I++){const M=oe(k[I],fe[I],Q);y?E(M.x,M.y+m[f-1].y,m[f-1].x+z):E(M.x,M.y,c+z)}}}U(),N();function U(){const w=r.length/3;if(h){let Z=0,z=te*Z;for(let Q=0;Q<J;Q++){const X=q[Q];K(X[2]+z,X[1]+z,X[0]+z)}Z=f+g*2,z=te*Z;for(let Q=0;Q<J;Q++){const X=q[Q];K(X[0]+z,X[1]+z,X[2]+z)}}else{for(let Z=0;Z<J;Z++){const z=q[Z];K(z[2],z[1],z[0])}for(let Z=0;Z<J;Z++){const z=q[Z];K(z[0]+te*f,z[1]+te*f,z[2]+te*f)}}i.addGroup(w,r.length/3-w,0)}function N(){const w=r.length/3;let Z=0;b(ee,Z),Z+=ee.length;for(let z=0,Q=O.length;z<Q;z++){const X=O[z];b(X,Z),Z+=X.length}i.addGroup(w,r.length/3-w,1)}function b(w,Z){let z=w.length;for(;--z>=0;){const Q=z;let X=z-1;X<0&&(X=w.length-1);for(let ce=0,k=f+g*2;ce<k;ce++){const I=te*ce,P=te*(ce+1),M=Z+Q+I,Y=Z+X+I,le=Z+X+P,ae=Z+Q+P;W(M,Y,le,ae)}}}function E(w,Z,z){l.push(w),l.push(Z),l.push(z)}function K(w,Z,z){B(w),B(Z),B(z);const Q=r.length/3,X=_.generateTopUV(i,r,Q-3,Q-2,Q-1);de(X[0]),de(X[1]),de(X[2])}function W(w,Z,z,Q){B(w),B(Z),B(Q),B(Z),B(z),B(Q);const X=r.length/3,ce=_.generateSideWallUV(i,r,X-6,X-3,X-2,X-1);de(ce[0]),de(ce[1]),de(ce[3]),de(ce[1]),de(ce[2]),de(ce[3])}function B(w){r.push(l[w*3+0]),r.push(l[w*3+1]),r.push(l[w*3+2])}function de(w){s.push(w.x),s.push(w.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return zT(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new zf[r.type]().fromJSON(r)),new Yh(i,e.options)}}const kT={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],f=e[r*3+1];return[new me(s,o),new me(a,l),new me(u,f)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],u=e[i*3],f=e[i*3+1],c=e[i*3+2],h=e[r*3],p=e[r*3+1],v=e[r*3+2],x=e[s*3],g=e[s*3+1],d=e[s*3+2];return Math.abs(a-f)<Math.abs(o-u)?[new me(o,1-l),new me(u,1-c),new me(h,1-v),new me(x,1-d)]:[new me(a,1-l),new me(f,1-c),new me(p,1-v),new me(g,1-d)]}};function zT(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class dm extends Zo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Y0,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const pm={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class BT{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,c){return u.push(f,c),this},this.removeHandler=function(f){const c=u.indexOf(f);return c!==-1&&u.splice(c,2),this},this.getHandler=function(f){for(let c=0,h=u.length;c<h;c+=2){const p=u[c],v=u[c+1];if(p.global&&(p.lastIndex=0),p.test(f))return v}return null}}}const VT=new BT;class Kh{constructor(e){this.manager=e!==void 0?e:VT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kh.DEFAULT_MATERIAL_NAME="__DEFAULT";const si={};class HT extends Error{constructor(e,n){super(e),this.response=n}}class GT extends Kh{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=pm.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(si[e]!==void 0){si[e].push({onLoad:n,onProgress:i,onError:r});return}si[e]=[],si[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=si[e],c=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=h?parseInt(h):0,v=p!==0;let x=0;const g=new ReadableStream({start(d){_();function _(){c.read().then(({done:m,value:y})=>{if(m)d.close();else{x+=y.byteLength;const D=new ProgressEvent("progress",{lengthComputable:v,loaded:x,total:p});for(let C=0,A=f.length;C<A;C++){const F=f[C];F.onProgress&&F.onProgress(D)}d.enqueue(y),_()}},m=>{d.error(m)})}}});return new Response(g)}else throw new HT(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return u.json();default:if(a===void 0)return u.text();{const c=/charset="?([^;"\s]*)"?/i.exec(a),h=c&&c[1]?c[1].toLowerCase():void 0,p=new TextDecoder(h);return u.arrayBuffer().then(v=>p.decode(v))}}}).then(u=>{pm.add(e,u);const f=si[e];delete si[e];for(let c=0,h=f.length;c<h;c++){const p=f[c];p.onLoad&&p.onLoad(u)}}).catch(u=>{const f=si[e];if(f===void 0)throw this.manager.itemError(e),u;delete si[e];for(let c=0,h=f.length;c<h;c++){const p=f[c];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Mv extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const fc=new gt,mm=new $,gm=new $;class WT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xh,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;mm.setFromMatrixPosition(e.matrixWorld),n.position.copy(mm),gm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(gm),n.updateMatrixWorld(),fc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class XT extends WT{constructor(){super(new uv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vm extends Mv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new XT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class qT extends Mv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const _m=new me;class $T{constructor(e=new me(1/0,1/0),n=new me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=_m.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_m).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class lr{constructor(){this.type="ShapePath",this.color=new Ke,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new Es,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(d){const _=[];for(let m=0,y=d.length;m<y;m++){const D=d[m],C=new So;C.curves=D.curves,_.push(C)}return _}function i(d,_){const m=_.length;let y=!1;for(let D=m-1,C=0;C<m;D=C++){let A=_[D],F=_[C],T=F.x-A.x,S=F.y-A.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(A=_[C],T=-T,F=_[D],S=-S),d.y<A.y||d.y>F.y)continue;if(d.y===A.y){if(d.x===A.x)return!0}else{const O=S*(d.x-A.x)-T*(d.y-A.y);if(O===0)return!0;if(O<0)continue;y=!y}}else{if(d.y!==A.y)continue;if(F.x<=d.x&&d.x<=A.x||A.x<=d.x&&d.x<=F.x)return!0}}return y}const r=wr.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const u=[];if(s.length===1)return a=s[0],l=new So,l.curves=a.curves,u.push(l),u;let f=!r(s[0].getPoints());f=e?!f:f;const c=[],h=[];let p=[],v=0,x;h[v]=void 0,p[v]=[];for(let d=0,_=s.length;d<_;d++)a=s[d],x=a.getPoints(),o=r(x),o=e?!o:o,o?(!f&&h[v]&&v++,h[v]={s:new So,p:x},h[v].s.curves=a.curves,f&&v++,p[v]=[]):p[v].push({h:a,p:x[0]});if(!h[0])return n(s);if(h.length>1){let d=!1,_=0;for(let m=0,y=h.length;m<y;m++)c[m]=[];for(let m=0,y=h.length;m<y;m++){const D=p[m];for(let C=0;C<D.length;C++){const A=D[C];let F=!0;for(let T=0;T<h.length;T++)i(A.p,h[T].p)&&(m!==T&&_++,F?(F=!1,c[T].push(A)):d=!0);F&&c[m].push(A)}}_>0&&d===!1&&(p=c)}let g;for(let d=0,_=h.length;d<_;d++){l=h[d].s,u.push(l),g=p[d];for(let m=0,y=g.length;m<y;m++)l.holes.push(g[m].h)}return u}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);const jT=Dn;class Fl extends Kh{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,n,i,r){const s=this,o=new GT(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{n(s.parse(a))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},i,r)}parse(e){const n=this;function i(U,N){if(U.nodeType!==1)return;const b=y(U);let E=!1,K=null;switch(U.nodeName){case"svg":N=v(U,N);break;case"style":s(U);break;case"g":N=v(U,N);break;case"path":N=v(U,N),U.hasAttribute("d")&&(K=r(U));break;case"rect":N=v(U,N),K=l(U);break;case"polygon":N=v(U,N),K=u(U);break;case"polyline":N=v(U,N),K=f(U);break;case"circle":N=v(U,N),K=c(U);break;case"ellipse":N=v(U,N),K=h(U);break;case"line":N=v(U,N),K=p(U);break;case"defs":E=!0;break;case"use":N=v(U,N);const de=(U.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),w=U.viewportElement.getElementById(de);w?i(w,N):console.warn("SVGLoader: 'use node' references non-existent node id: "+de);break}K&&(N.fill!==void 0&&N.fill!=="none"&&K.color.setStyle(N.fill,jT),C(K,fe),H.push(K),K.userData={node:U,style:N});const W=U.childNodes;for(let B=0;B<W.length;B++){const de=W[B];E&&de.nodeName!=="style"&&de.nodeName!=="defs"||i(de,N)}b&&(ee.pop(),ee.length>0?fe.copy(ee[ee.length-1]):fe.identity())}function r(U){const N=new lr,b=new me,E=new me,K=new me;let W=!0,B=!1;const de=U.getAttribute("d");if(de===""||de==="none")return null;const w=de.match(/[a-df-z][^a-df-z]*/ig);for(let Z=0,z=w.length;Z<z;Z++){const Q=w[Z],X=Q.charAt(0),ce=Q.slice(1).trim();W===!0&&(B=!0,W=!1);let k;switch(X){case"M":k=g(ce);for(let I=0,P=k.length;I<P;I+=2)b.x=k[I+0],b.y=k[I+1],E.x=b.x,E.y=b.y,I===0?N.moveTo(b.x,b.y):N.lineTo(b.x,b.y),I===0&&K.copy(b);break;case"H":k=g(ce);for(let I=0,P=k.length;I<P;I++)b.x=k[I],E.x=b.x,E.y=b.y,N.lineTo(b.x,b.y),I===0&&B===!0&&K.copy(b);break;case"V":k=g(ce);for(let I=0,P=k.length;I<P;I++)b.y=k[I],E.x=b.x,E.y=b.y,N.lineTo(b.x,b.y),I===0&&B===!0&&K.copy(b);break;case"L":k=g(ce);for(let I=0,P=k.length;I<P;I+=2)b.x=k[I+0],b.y=k[I+1],E.x=b.x,E.y=b.y,N.lineTo(b.x,b.y),I===0&&B===!0&&K.copy(b);break;case"C":k=g(ce);for(let I=0,P=k.length;I<P;I+=6)N.bezierCurveTo(k[I+0],k[I+1],k[I+2],k[I+3],k[I+4],k[I+5]),E.x=k[I+2],E.y=k[I+3],b.x=k[I+4],b.y=k[I+5],I===0&&B===!0&&K.copy(b);break;case"S":k=g(ce);for(let I=0,P=k.length;I<P;I+=4)N.bezierCurveTo(x(b.x,E.x),x(b.y,E.y),k[I+0],k[I+1],k[I+2],k[I+3]),E.x=k[I+0],E.y=k[I+1],b.x=k[I+2],b.y=k[I+3],I===0&&B===!0&&K.copy(b);break;case"Q":k=g(ce);for(let I=0,P=k.length;I<P;I+=4)N.quadraticCurveTo(k[I+0],k[I+1],k[I+2],k[I+3]),E.x=k[I+0],E.y=k[I+1],b.x=k[I+2],b.y=k[I+3],I===0&&B===!0&&K.copy(b);break;case"T":k=g(ce);for(let I=0,P=k.length;I<P;I+=2){const M=x(b.x,E.x),Y=x(b.y,E.y);N.quadraticCurveTo(M,Y,k[I+0],k[I+1]),E.x=M,E.y=Y,b.x=k[I+0],b.y=k[I+1],I===0&&B===!0&&K.copy(b)}break;case"A":k=g(ce,[3,4],7);for(let I=0,P=k.length;I<P;I+=7){if(k[I+5]==b.x&&k[I+6]==b.y)continue;const M=b.clone();b.x=k[I+5],b.y=k[I+6],E.x=b.x,E.y=b.y,o(N,k[I],k[I+1],k[I+2],k[I+3],k[I+4],M,b),I===0&&B===!0&&K.copy(b)}break;case"m":k=g(ce);for(let I=0,P=k.length;I<P;I+=2)b.x+=k[I+0],b.y+=k[I+1],E.x=b.x,E.y=b.y,I===0?N.moveTo(b.x,b.y):N.lineTo(b.x,b.y),I===0&&K.copy(b);break;case"h":k=g(ce);for(let I=0,P=k.length;I<P;I++)b.x+=k[I],E.x=b.x,E.y=b.y,N.lineTo(b.x,b.y),I===0&&B===!0&&K.copy(b);break;case"v":k=g(ce);for(let I=0,P=k.length;I<P;I++)b.y+=k[I],E.x=b.x,E.y=b.y,N.lineTo(b.x,b.y),I===0&&B===!0&&K.copy(b);break;case"l":k=g(ce);for(let I=0,P=k.length;I<P;I+=2)b.x+=k[I+0],b.y+=k[I+1],E.x=b.x,E.y=b.y,N.lineTo(b.x,b.y),I===0&&B===!0&&K.copy(b);break;case"c":k=g(ce);for(let I=0,P=k.length;I<P;I+=6)N.bezierCurveTo(b.x+k[I+0],b.y+k[I+1],b.x+k[I+2],b.y+k[I+3],b.x+k[I+4],b.y+k[I+5]),E.x=b.x+k[I+2],E.y=b.y+k[I+3],b.x+=k[I+4],b.y+=k[I+5],I===0&&B===!0&&K.copy(b);break;case"s":k=g(ce);for(let I=0,P=k.length;I<P;I+=4)N.bezierCurveTo(x(b.x,E.x),x(b.y,E.y),b.x+k[I+0],b.y+k[I+1],b.x+k[I+2],b.y+k[I+3]),E.x=b.x+k[I+0],E.y=b.y+k[I+1],b.x+=k[I+2],b.y+=k[I+3],I===0&&B===!0&&K.copy(b);break;case"q":k=g(ce);for(let I=0,P=k.length;I<P;I+=4)N.quadraticCurveTo(b.x+k[I+0],b.y+k[I+1],b.x+k[I+2],b.y+k[I+3]),E.x=b.x+k[I+0],E.y=b.y+k[I+1],b.x+=k[I+2],b.y+=k[I+3],I===0&&B===!0&&K.copy(b);break;case"t":k=g(ce);for(let I=0,P=k.length;I<P;I+=2){const M=x(b.x,E.x),Y=x(b.y,E.y);N.quadraticCurveTo(M,Y,b.x+k[I+0],b.y+k[I+1]),E.x=M,E.y=Y,b.x=b.x+k[I+0],b.y=b.y+k[I+1],I===0&&B===!0&&K.copy(b)}break;case"a":k=g(ce,[3,4],7);for(let I=0,P=k.length;I<P;I+=7){if(k[I+5]==0&&k[I+6]==0)continue;const M=b.clone();b.x+=k[I+5],b.y+=k[I+6],E.x=b.x,E.y=b.y,o(N,k[I],k[I+1],k[I+2],k[I+3],k[I+4],M,b),I===0&&B===!0&&K.copy(b)}break;case"Z":case"z":N.currentPath.autoClose=!0,N.currentPath.curves.length>0&&(b.copy(K),N.currentPath.currentPoint.copy(b),W=!0);break;default:console.warn(Q)}B=!1}return N}function s(U){if(!(!U.sheet||!U.sheet.cssRules||!U.sheet.cssRules.length))for(let N=0;N<U.sheet.cssRules.length;N++){const b=U.sheet.cssRules[N];if(b.type!==1)continue;const E=b.selectorText.split(/,/gm).filter(Boolean).map(K=>K.trim());for(let K=0;K<E.length;K++){const W=Object.fromEntries(Object.entries(b.style).filter(([,B])=>B!==""));q[E[K]]=Object.assign(q[E[K]]||{},W)}}}function o(U,N,b,E,K,W,B,de){if(N==0||b==0){U.lineTo(de.x,de.y);return}E=E*Math.PI/180,N=Math.abs(N),b=Math.abs(b);const w=(B.x-de.x)/2,Z=(B.y-de.y)/2,z=Math.cos(E)*w+Math.sin(E)*Z,Q=-Math.sin(E)*w+Math.cos(E)*Z;let X=N*N,ce=b*b;const k=z*z,I=Q*Q,P=k/X+I/ce;if(P>1){const _e=Math.sqrt(P);N=_e*N,b=_e*b,X=N*N,ce=b*b}const M=X*I+ce*k,Y=(X*ce-M)/M;let le=Math.sqrt(Math.max(0,Y));K===W&&(le=-le);const ae=le*N*Q/b,ue=-le*b*z/N,De=Math.cos(E)*ae-Math.sin(E)*ue+(B.x+de.x)/2,Me=Math.sin(E)*ae+Math.cos(E)*ue+(B.y+de.y)/2,we=a(1,0,(z-ae)/N,(Q-ue)/b),ze=a((z-ae)/N,(Q-ue)/b,(-z-ae)/N,(-Q-ue)/b)%(Math.PI*2);U.currentPath.absellipse(De,Me,N,b,we,we+ze,W===0,E)}function a(U,N,b,E){const K=U*b+N*E,W=Math.sqrt(U*U+N*N)*Math.sqrt(b*b+E*E);let B=Math.acos(Math.max(-1,Math.min(1,K/W)));return U*E-N*b<0&&(B=-B),B}function l(U){const N=m(U.getAttribute("x")||0),b=m(U.getAttribute("y")||0),E=m(U.getAttribute("rx")||U.getAttribute("ry")||0),K=m(U.getAttribute("ry")||U.getAttribute("rx")||0),W=m(U.getAttribute("width")),B=m(U.getAttribute("height")),de=1-.551915024494,w=new lr;return w.moveTo(N+E,b),w.lineTo(N+W-E,b),(E!==0||K!==0)&&w.bezierCurveTo(N+W-E*de,b,N+W,b+K*de,N+W,b+K),w.lineTo(N+W,b+B-K),(E!==0||K!==0)&&w.bezierCurveTo(N+W,b+B-K*de,N+W-E*de,b+B,N+W-E,b+B),w.lineTo(N+E,b+B),(E!==0||K!==0)&&w.bezierCurveTo(N+E*de,b+B,N,b+B-K*de,N,b+B-K),w.lineTo(N,b+K),(E!==0||K!==0)&&w.bezierCurveTo(N,b+K*de,N+E*de,b,N+E,b),w}function u(U){function N(W,B,de){const w=m(B),Z=m(de);K===0?E.moveTo(w,Z):E.lineTo(w,Z),K++}const b=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,E=new lr;let K=0;return U.getAttribute("points").replace(b,N),E.currentPath.autoClose=!0,E}function f(U){function N(W,B,de){const w=m(B),Z=m(de);K===0?E.moveTo(w,Z):E.lineTo(w,Z),K++}const b=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,E=new lr;let K=0;return U.getAttribute("points").replace(b,N),E.currentPath.autoClose=!1,E}function c(U){const N=m(U.getAttribute("cx")||0),b=m(U.getAttribute("cy")||0),E=m(U.getAttribute("r")||0),K=new Es;K.absarc(N,b,E,0,Math.PI*2);const W=new lr;return W.subPaths.push(K),W}function h(U){const N=m(U.getAttribute("cx")||0),b=m(U.getAttribute("cy")||0),E=m(U.getAttribute("rx")||0),K=m(U.getAttribute("ry")||0),W=new Es;W.absellipse(N,b,E,K,0,Math.PI*2);const B=new lr;return B.subPaths.push(W),B}function p(U){const N=m(U.getAttribute("x1")||0),b=m(U.getAttribute("y1")||0),E=m(U.getAttribute("x2")||0),K=m(U.getAttribute("y2")||0),W=new lr;return W.moveTo(N,b),W.lineTo(E,K),W.currentPath.autoClose=!1,W}function v(U,N){N=Object.assign({},N);let b={};if(U.hasAttribute("class")){const B=U.getAttribute("class").split(/\s/).filter(Boolean).map(de=>de.trim());for(let de=0;de<B.length;de++)b=Object.assign(b,q["."+B[de]])}U.hasAttribute("id")&&(b=Object.assign(b,q["#"+U.getAttribute("id")]));function E(B,de,w){w===void 0&&(w=function(z){return z.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),z}),U.hasAttribute(B)&&(N[de]=w(U.getAttribute(B))),b[B]&&(N[de]=w(b[B])),U.style&&U.style[B]!==""&&(N[de]=w(U.style[B]))}function K(B){return Math.max(0,Math.min(1,m(B)))}function W(B){return Math.max(0,m(B))}return E("fill","fill"),E("fill-opacity","fillOpacity",K),E("fill-rule","fillRule"),E("opacity","opacity",K),E("stroke","stroke"),E("stroke-opacity","strokeOpacity",K),E("stroke-width","strokeWidth",W),E("stroke-linejoin","strokeLineJoin"),E("stroke-linecap","strokeLineCap"),E("stroke-miterlimit","strokeMiterLimit",W),E("visibility","visibility"),N}function x(U,N){return U-(N-U)}function g(U,N,b){if(typeof U!="string")throw new TypeError("Invalid input: "+typeof U);const E={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},K=0,W=1,B=2,de=3;let w=K,Z=!0,z="",Q="";const X=[];function ce(M,Y,le){const ae=new SyntaxError('Unexpected character "'+M+'" at index '+Y+".");throw ae.partial=le,ae}function k(){z!==""&&(Q===""?X.push(Number(z)):X.push(Number(z)*Math.pow(10,Number(Q)))),z="",Q=""}let I;const P=U.length;for(let M=0;M<P;M++){if(I=U[M],Array.isArray(N)&&N.includes(X.length%b)&&E.FLAGS.test(I)){w=W,z=I,k();continue}if(w===K){if(E.WHITESPACE.test(I))continue;if(E.DIGIT.test(I)||E.SIGN.test(I)){w=W,z=I;continue}if(E.POINT.test(I)){w=B,z=I;continue}E.COMMA.test(I)&&(Z&&ce(I,M,X),Z=!0)}if(w===W){if(E.DIGIT.test(I)){z+=I;continue}if(E.POINT.test(I)){z+=I,w=B;continue}if(E.EXP.test(I)){w=de;continue}E.SIGN.test(I)&&z.length===1&&E.SIGN.test(z[0])&&ce(I,M,X)}if(w===B){if(E.DIGIT.test(I)){z+=I;continue}if(E.EXP.test(I)){w=de;continue}E.POINT.test(I)&&z[z.length-1]==="."&&ce(I,M,X)}if(w===de){if(E.DIGIT.test(I)){Q+=I;continue}if(E.SIGN.test(I)){if(Q===""){Q+=I;continue}Q.length===1&&E.SIGN.test(Q)&&ce(I,M,X)}}E.WHITESPACE.test(I)?(k(),w=K,Z=!1):E.COMMA.test(I)?(k(),w=K,Z=!0):E.SIGN.test(I)?(k(),w=W,z=I):E.POINT.test(I)?(k(),w=B,z=I):ce(I,M,X)}return k(),X}const d=["mm","cm","in","pt","pc","px"],_={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function m(U){let N="px";if(typeof U=="string"||U instanceof String)for(let E=0,K=d.length;E<K;E++){const W=d[E];if(U.endsWith(W)){N=W,U=U.substring(0,U.length-W.length);break}}let b;return N==="px"&&n.defaultUnit!=="px"?b=_.in[n.defaultUnit]/n.defaultDPI:(b=_[N][n.defaultUnit],b<0&&(b=_[N].in*n.defaultDPI)),b*parseFloat(U)}function y(U){if(!(U.hasAttribute("transform")||U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))))return null;const N=D(U);return ee.length>0&&N.premultiply(ee[ee.length-1]),fe.copy(N),ee.push(N),N}function D(U){const N=new Ve,b=oe;if(U.nodeName==="use"&&(U.hasAttribute("x")||U.hasAttribute("y"))){const E=m(U.getAttribute("x")),K=m(U.getAttribute("y"));N.translate(E,K)}if(U.hasAttribute("transform")){const E=U.getAttribute("transform").split(")");for(let K=E.length-1;K>=0;K--){const W=E[K].trim();if(W==="")continue;const B=W.indexOf("("),de=W.length;if(B>0&&B<de){const w=W.slice(0,B),Z=g(W.slice(B+1));switch(b.identity(),w){case"translate":if(Z.length>=1){const z=Z[0];let Q=0;Z.length>=2&&(Q=Z[1]),b.translate(z,Q)}break;case"rotate":if(Z.length>=1){let z=0,Q=0,X=0;z=Z[0]*Math.PI/180,Z.length>=3&&(Q=Z[1],X=Z[2]),te.makeTranslation(-Q,-X),J.makeRotation(z),L.multiplyMatrices(J,te),te.makeTranslation(Q,X),b.multiplyMatrices(te,L)}break;case"scale":if(Z.length>=1){const z=Z[0];let Q=z;Z.length>=2&&(Q=Z[1]),b.scale(z,Q)}break;case"skewX":Z.length===1&&b.set(1,Math.tan(Z[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":Z.length===1&&b.set(1,0,0,Math.tan(Z[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":Z.length===6&&b.set(Z[0],Z[2],Z[4],Z[1],Z[3],Z[5],0,0,1);break}}N.premultiply(b)}}return N}function C(U,N){function b(B){se.set(B.x,B.y,1).applyMatrix3(N),B.set(se.x,se.y)}function E(B){const de=B.xRadius,w=B.yRadius,Z=Math.cos(B.aRotation),z=Math.sin(B.aRotation),Q=new $(de*Z,de*z,0),X=new $(-w*z,w*Z,0),ce=Q.applyMatrix3(N),k=X.applyMatrix3(N),I=oe.set(ce.x,k.x,0,ce.y,k.y,0,0,0,1),P=te.copy(I).invert(),le=J.copy(P).transpose().multiply(P).elements,ae=O(le[0],le[1],le[4]),ue=Math.sqrt(ae.rt1),De=Math.sqrt(ae.rt2);if(B.xRadius=1/ue,B.yRadius=1/De,B.aRotation=Math.atan2(ae.sn,ae.cs),!((B.aEndAngle-B.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const we=te.set(ue,0,0,0,De,0,0,0,1),ze=J.set(ae.cs,ae.sn,0,-ae.sn,ae.cs,0,0,0,1),_e=we.multiply(ze).multiply(I),Te=qe=>{const{x:Fe,y:Re}=new $(Math.cos(qe),Math.sin(qe),0).applyMatrix3(_e);return Math.atan2(Re,Fe)};B.aStartAngle=Te(B.aStartAngle),B.aEndAngle=Te(B.aEndAngle),A(N)&&(B.aClockwise=!B.aClockwise)}}function K(B){const de=T(N),w=S(N);B.xRadius*=de,B.yRadius*=w;const Z=de>Number.EPSILON?Math.atan2(N.elements[1],N.elements[0]):Math.atan2(-N.elements[3],N.elements[4]);B.aRotation+=Z,A(N)&&(B.aStartAngle*=-1,B.aEndAngle*=-1,B.aClockwise=!B.aClockwise)}const W=U.subPaths;for(let B=0,de=W.length;B<de;B++){const Z=W[B].curves;for(let z=0;z<Z.length;z++){const Q=Z[z];Q.isLineCurve?(b(Q.v1),b(Q.v2)):Q.isCubicBezierCurve?(b(Q.v0),b(Q.v1),b(Q.v2),b(Q.v3)):Q.isQuadraticBezierCurve?(b(Q.v0),b(Q.v1),b(Q.v2)):Q.isEllipseCurve&&(re.set(Q.aX,Q.aY),b(re),Q.aX=re.x,Q.aY=re.y,F(N)?E(Q):K(Q))}}}function A(U){const N=U.elements;return N[0]*N[4]-N[1]*N[3]<0}function F(U){const N=U.elements,b=N[0]*N[3]+N[1]*N[4];if(b===0)return!1;const E=T(U),K=S(U);return Math.abs(b/(E*K))>Number.EPSILON}function T(U){const N=U.elements;return Math.sqrt(N[0]*N[0]+N[1]*N[1])}function S(U){const N=U.elements;return Math.sqrt(N[3]*N[3]+N[4]*N[4])}function O(U,N,b){let E,K,W,B,de;const w=U+b,Z=U-b,z=Math.sqrt(Z*Z+4*N*N);return w>0?(E=.5*(w+z),de=1/E,K=U*de*b-N*de*N):w<0?K=.5*(w-z):(E=.5*z,K=-.5*z),Z>0?W=Z+z:W=Z-z,Math.abs(W)>2*Math.abs(N)?(de=-2*N/W,B=1/Math.sqrt(1+de*de),W=de*B):Math.abs(N)===0?(W=1,B=0):(de=-.5*W/N,W=1/Math.sqrt(1+de*de),B=de*W),Z>0&&(de=W,W=-B,B=de),{rt1:E,rt2:K,cs:W,sn:B}}const H=[],q={},ee=[],oe=new Ve,te=new Ve,J=new Ve,L=new Ve,re=new me,se=new $,fe=new Ve,ge=new DOMParser().parseFromString(e,"image/svg+xml");return i(ge.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:H,xml:ge.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(x,g,d,_){const m=x.x,y=g.x,D=d.x,C=_.x,A=x.y,F=g.y,T=d.y,S=_.y,O=(C-D)*(A-T)-(S-T)*(m-D),H=(y-m)*(A-T)-(F-A)*(m-D),q=(S-T)*(y-m)-(C-D)*(F-A),ee=O/q,oe=H/q;if(q===0&&O!==0||ee<=0||ee>=1||oe<0||oe>1)return null;if(O===0&&q===0){for(let te=0;te<2;te++)if(o(te===0?d:_,x,g),r.loc==i.ORIGIN){const J=te===0?d:_;return{x:J.x,y:J.y,t:r.t}}else if(r.loc==i.BETWEEN){const J=+(m+r.t*(y-m)).toPrecision(10),L=+(A+r.t*(F-A)).toPrecision(10);return{x:J,y:L,t:r.t}}return null}else{for(let L=0;L<2;L++)if(o(L===0?d:_,x,g),r.loc==i.ORIGIN){const re=L===0?d:_;return{x:re.x,y:re.y,t:r.t}}const te=+(m+ee*(y-m)).toPrecision(10),J=+(A+ee*(F-A)).toPrecision(10);return{x:te,y:J,t:ee}}}function o(x,g,d){const _=d.x-g.x,m=d.y-g.y,y=x.x-g.x,D=x.y-g.y,C=_*D-y*m;if(x.x===g.x&&x.y===g.y){r.loc=i.ORIGIN,r.t=0;return}if(x.x===d.x&&x.y===d.y){r.loc=i.DESTINATION,r.t=1;return}if(C<-Number.EPSILON){r.loc=i.LEFT;return}if(C>Number.EPSILON){r.loc=i.RIGHT;return}if(_*y<0||m*D<0){r.loc=i.BEHIND;return}if(Math.sqrt(_*_+m*m)<Math.sqrt(y*y+D*D)){r.loc=i.BEYOND;return}let A;_!==0?A=y/_:A=D/m,r.loc=i.BETWEEN,r.t=A}function a(x,g){const d=[],_=[];for(let m=1;m<x.length;m++){const y=x[m-1],D=x[m];for(let C=1;C<g.length;C++){const A=g[C-1],F=g[C],T=s(y,D,A,F);T!==null&&d.find(S=>S.t<=T.t+Number.EPSILON&&S.t>=T.t-Number.EPSILON)===void 0&&(d.push(T),_.push(new me(T.x,T.y)))}}return _}function l(x,g,d){const _=new me;g.getCenter(_);const m=[];return d.forEach(y=>{y.boundingBox.containsPoint(_)&&a(x,y.points).forEach(C=>{m.push({identifier:y.identifier,isCW:y.isCW,point:C})})}),m.sort((y,D)=>y.point.x-D.point.x),m}function u(x,g,d,_,m){(m==null||m==="")&&(m="nonzero");const y=new me;x.boundingBox.getCenter(y);const D=[new me(d,y.y),new me(_,y.y)],C=l(D,x.boundingBox,g);C.sort((H,q)=>H.point.x-q.point.x);const A=[],F=[];C.forEach(H=>{H.identifier===x.identifier?A.push(H):F.push(H)});const T=A[0].point.x,S=[];let O=0;for(;O<F.length&&F[O].point.x<T;)S.length>0&&S[S.length-1]===F[O].identifier?S.pop():S.push(F[O].identifier),O++;if(S.push(x.identifier),m==="evenodd"){const H=S.length%2===0,q=S[S.length-2];return{identifier:x.identifier,isHole:H,for:q}}else if(m==="nonzero"){let H=!0,q=null,ee=null;for(let oe=0;oe<S.length;oe++){const te=S[oe];H?(ee=g[te].isCW,H=!1,q=te):ee!==g[te].isCW&&(ee=g[te].isCW,H=!0)}return{identifier:x.identifier,isHole:H,for:q}}else console.warn('fill-rule: "'+m+'" is currently not implemented.')}let f=999999999,c=-999999999,h=e.subPaths.map(x=>{const g=x.getPoints();let d=-999999999,_=999999999,m=-999999999,y=999999999;for(let D=0;D<g.length;D++){const C=g[D];C.y>d&&(d=C.y),C.y<_&&(_=C.y),C.x>m&&(m=C.x),C.x<y&&(y=C.x)}return c<=m&&(c=m+1),f>=y&&(f=y-1),{curves:x.curves,points:g,isCW:wr.isClockWise(g),identifier:-1,boundingBox:new $T(new me(y,_),new me(m,d))}});h=h.filter(x=>x.points.length>1);for(let x=0;x<h.length;x++)h[x].identifier=x;const p=h.map(x=>u(x,h,f,c,e.userData?e.userData.style.fillRule:void 0)),v=[];return h.forEach(x=>{if(!p[x.identifier].isHole){const d=new So;d.curves=x.curves,p.filter(m=>m.isHole&&m.for===x.identifier).forEach(m=>{const y=h[m.identifier],D=new Es;D.curves=y.curves,d.holes.push(D)}),v.push(d)}}),v}static getStrokeStyle(e,n,i,r,s){return e=e!==void 0?e:1,n=n!==void 0?n:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:n,strokeWidth:e,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,n,i,r){const s=[],o=[],a=[];if(Fl.pointsToStrokeWithBuffers(e,n,i,r,s,o,a)===0)return null;const l=new Mi;return l.setAttribute("position",new En(s,3)),l.setAttribute("normal",new En(o,3)),l.setAttribute("uv",new En(a,2)),l}static pointsToStrokeWithBuffers(e,n,i,r,s,o,a,l){const u=new me,f=new me,c=new me,h=new me,p=new me,v=new me,x=new me,g=new me,d=new me,_=new me,m=new me,y=new me,D=new me,C=new me,A=new me,F=new me,T=new me;i=i!==void 0?i:12,r=r!==void 0?r:.001,l=l!==void 0?l:0,e=Z(e);const S=e.length;if(S<2)return 0;const O=e[0].equals(e[S-1]);let H,q=e[0],ee;const oe=n.strokeWidth/2,te=1/(S-1);let J=0,L,re,se,fe,ge=!1,be=0,U=l*3,N=l*2;b(e[0],e[1],u).multiplyScalar(oe),g.copy(e[0]).sub(u),d.copy(e[0]).add(u),_.copy(g),m.copy(d);for(let z=1;z<S;z++){H=e[z],z===S-1?O?ee=e[1]:ee=void 0:ee=e[z+1];const Q=u;if(b(q,H,Q),c.copy(Q).multiplyScalar(oe),y.copy(H).sub(c),D.copy(H).add(c),L=J+te,re=!1,ee!==void 0){b(H,ee,f),c.copy(f).multiplyScalar(oe),C.copy(H).sub(c),A.copy(H).add(c),se=!0,c.subVectors(ee,q),Q.dot(c)<0&&(se=!1),z===1&&(ge=se),c.subVectors(ee,H),c.normalize();const X=Math.abs(Q.dot(c));if(X>Number.EPSILON){const ce=oe/X;c.multiplyScalar(-ce),h.subVectors(H,q),p.copy(h).setLength(ce).add(c),F.copy(p).negate();const k=p.length(),I=h.length();h.divideScalar(I),v.subVectors(ee,H);const P=v.length();switch(v.divideScalar(P),h.dot(F)<I&&v.dot(F)<P&&(re=!0),T.copy(p).add(H),F.add(H),fe=!1,re?se?(A.copy(F),D.copy(F)):(C.copy(F),y.copy(F)):W(),n.strokeLineJoin){case"bevel":B(se,re,L);break;case"round":de(se,re),se?K(H,y,C,L,0):K(H,A,D,L,1);break;case"miter":case"miter-clip":default:const M=oe*n.strokeMiterLimit/k;if(M<1)if(n.strokeLineJoin!=="miter-clip"){B(se,re,L);break}else de(se,re),se?(v.subVectors(T,y).multiplyScalar(M).add(y),x.subVectors(T,C).multiplyScalar(M).add(C),E(y,L,0),E(v,L,0),E(H,L,.5),E(H,L,.5),E(v,L,0),E(x,L,0),E(H,L,.5),E(x,L,0),E(C,L,0)):(v.subVectors(T,D).multiplyScalar(M).add(D),x.subVectors(T,A).multiplyScalar(M).add(A),E(D,L,1),E(v,L,1),E(H,L,.5),E(H,L,.5),E(v,L,1),E(x,L,1),E(H,L,.5),E(x,L,1),E(A,L,1));else re?(se?(E(d,J,1),E(g,J,0),E(T,L,0),E(d,J,1),E(T,L,0),E(F,L,1)):(E(d,J,1),E(g,J,0),E(T,L,1),E(g,J,0),E(F,L,0),E(T,L,1)),se?C.copy(T):A.copy(T)):se?(E(y,L,0),E(T,L,0),E(H,L,.5),E(H,L,.5),E(T,L,0),E(C,L,0)):(E(D,L,1),E(T,L,1),E(H,L,.5),E(H,L,.5),E(T,L,1),E(A,L,1)),fe=!0;break}}else W()}else W();!O&&z===S-1&&w(e[0],_,m,se,!0,J),J=L,q=H,g.copy(C),d.copy(A)}if(!O)w(H,y,D,se,!1,L);else if(re&&s){let z=T,Q=F;ge!==se&&(z=F,Q=T),se?(fe||ge)&&(Q.toArray(s,0*3),Q.toArray(s,3*3),fe&&z.toArray(s,1*3)):(fe||!ge)&&(Q.toArray(s,1*3),Q.toArray(s,3*3),fe&&z.toArray(s,0*3))}return be;function b(z,Q,X){return X.subVectors(Q,z),X.set(-X.y,X.x).normalize()}function E(z,Q,X){s&&(s[U]=z.x,s[U+1]=z.y,s[U+2]=0,o&&(o[U]=0,o[U+1]=0,o[U+2]=1),U+=3,a&&(a[N]=Q,a[N+1]=X,N+=2)),be+=3}function K(z,Q,X,ce,k){u.copy(Q).sub(z).normalize(),f.copy(X).sub(z).normalize();let I=Math.PI;const P=u.dot(f);Math.abs(P)<1&&(I=Math.abs(Math.acos(P))),I/=i,c.copy(Q);for(let M=0,Y=i-1;M<Y;M++)h.copy(c).rotateAround(z,I),E(c,ce,k),E(h,ce,k),E(z,ce,.5),c.copy(h);E(h,ce,k),E(X,ce,k),E(z,ce,.5)}function W(){E(d,J,1),E(g,J,0),E(y,L,0),E(d,J,1),E(y,L,0),E(D,L,1)}function B(z,Q,X){Q?z?(E(d,J,1),E(g,J,0),E(y,L,0),E(d,J,1),E(y,L,0),E(F,L,1),E(y,X,0),E(C,X,0),E(F,X,.5)):(E(d,J,1),E(g,J,0),E(D,L,1),E(g,J,0),E(F,L,0),E(D,L,1),E(D,X,1),E(F,X,0),E(A,X,1)):z?(E(y,X,0),E(C,X,0),E(H,X,.5)):(E(D,X,1),E(A,X,0),E(H,X,.5))}function de(z,Q){Q&&(z?(E(d,J,1),E(g,J,0),E(y,L,0),E(d,J,1),E(y,L,0),E(F,L,1),E(y,J,0),E(H,L,.5),E(F,L,1),E(H,L,.5),E(C,J,0),E(F,L,1)):(E(d,J,1),E(g,J,0),E(D,L,1),E(g,J,0),E(F,L,0),E(D,L,1),E(D,J,1),E(F,L,0),E(H,L,.5),E(H,L,.5),E(F,L,0),E(A,J,1)))}function w(z,Q,X,ce,k,I){switch(n.strokeLineCap){case"round":k?K(z,X,Q,I,.5):K(z,Q,X,I,.5);break;case"square":if(k)u.subVectors(Q,z),f.set(u.y,-u.x),c.addVectors(u,f).add(z),h.subVectors(f,u).add(z),ce?(c.toArray(s,1*3),h.toArray(s,0*3),h.toArray(s,3*3)):(c.toArray(s,1*3),a[3*2+1]===1?h.toArray(s,3*3):c.toArray(s,3*3),h.toArray(s,0*3));else{u.subVectors(X,z),f.set(u.y,-u.x),c.addVectors(u,f).add(z),h.subVectors(f,u).add(z);const P=s.length;ce?(c.toArray(s,P-1*3),h.toArray(s,P-2*3),h.toArray(s,P-4*3)):(h.toArray(s,P-2*3),c.toArray(s,P-1*3),h.toArray(s,P-4*3))}break}}function Z(z){let Q=!1;for(let ce=1,k=z.length-1;ce<k;ce++)if(z[ce].distanceTo(z[ce+1])<r){Q=!0;break}if(!Q)return z;const X=[];X.push(z[0]);for(let ce=1,k=z.length-1;ce<k;ce++)z[ce].distanceTo(z[ce+1])>=r&&X.push(z[ce]);return X.push(z[z.length-1]),X}}}const YT=({svg:t,smoothness:e=.5,color:n="#4f46e5"})=>{const i=Ge.useRef(null);return Ge.useEffect(()=>{if(!i.current)return;const r=new aT,s=new xn(45,window.innerWidth/window.innerHeight,1,1e3);s.position.set(0,0,600),s.lookAt(0,0,0);const o=new oT({antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(window.devicePixelRatio),o.setClearColor(0,0),o.shadowMap.enabled=!0,o.shadowMap.type=F0,i.current.innerHTML="",i.current.appendChild(o.domElement);let a=!1,l=0,u=0,f=!1,c=0,h=0;const p=o.domElement;p.style.cursor="grab";const v=S=>{a=!0,f=!1,l=S.clientX,u=S.clientY,p.setPointerCapture(S.pointerId),p.style.cursor="grabbing"},x=S=>{a&&(D.rotation.y+=(S.clientX-l)*.008,D.rotation.x+=(S.clientY-u)*.008,l=S.clientX,u=S.clientY)},g=()=>{a&&(a=!1,p.style.cursor="grab",f=!0,c=0,h=Math.round(D.rotation.y/Math.PI)*Math.PI)};p.addEventListener("pointerdown",v),p.addEventListener("pointermove",x),p.addEventListener("pointerup",g),p.addEventListener("pointercancel",g),r.add(s);const d=new qT(16777215,1.2);r.add(d);const _=new vm(16777215,1.5);_.position.set(0,0,1),s.add(_);const m=new vm(16777215,2);m.position.set(200,400,300),m.castShadow=!0,m.shadow.mapSize.width=2048,m.shadow.mapSize.height=2048,m.shadow.camera.near=100,m.shadow.camera.far=2e3,m.shadow.camera.left=-500,m.shadow.camera.right=500,m.shadow.camera.top=500,m.shadow.camera.bottom=-500,m.shadow.bias=-.001,r.add(m);const y=new Sr;try{const H=new Fl().parse(t).paths,q=new Sr;let ee=1/0,oe=-1/0,te=1/0,J=-1/0;H.forEach((se,fe)=>{const ge=new dm({color:se.color,roughness:.5,metalness:.15,side:xi});Fl.createShapes(se).forEach(U=>{const b={depth:fe<4?80:110,bevelEnabled:!0,bevelThickness:e*5,bevelSize:e*5,bevelSegments:4,curveSegments:12},E=new Yh(U,b);E.computeBoundingBox(),E.boundingBox&&(ee=Math.min(ee,E.boundingBox.min.x),oe=Math.max(oe,E.boundingBox.max.x),te=Math.min(te,E.boundingBox.min.y),J=Math.max(J,E.boundingBox.max.y));const K=new kn(E,ge);K.position.z=fe*2,K.castShadow=!0,K.receiveShadow=!0,q.add(K)})});const L={x:(ee+oe)/2,y:(te+J)/2};q.children.forEach(se=>{se.position.x-=L.x,se.position.y-=L.y}),q.position.z=-(e*5);const re=q.clone();re.rotation.y=Math.PI,re.position.z=e*5,y.add(q),y.add(re)}catch(S){console.error("Failed to parse SVG:",S);const O=new Vs(30,30,30),H=new dm({color:n});y.add(new kn(O,H))}const D=new Sr;D.add(y),D.scale.set(0,0,0);const C=new $(.18,-.18,.18);r.add(D);let A;const F=()=>{if(A=requestAnimationFrame(F),D&&(D.scale.lerp(C,.04),!a))if(f){const S=c-D.rotation.x,O=h-D.rotation.y;D.rotation.x+=S*.03,D.rotation.y+=O*.03,Math.abs(S)<5e-4&&Math.abs(O)<5e-4&&(D.rotation.x=c,D.rotation.y=h,f=!1)}else D.rotation.y+=.001;o.render(r,s)};F();const T=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T),cancelAnimationFrame(A),p.removeEventListener("pointerdown",v),p.removeEventListener("pointermove",x),p.removeEventListener("pointerup",g),p.removeEventListener("pointercancel",g),i.current&&i.current.removeChild(o.domElement),o.dispose()}},[t,e,n]),Ie.jsx("div",{ref:i,className:"w-full h-full cursor-grab active:cursor-grabbing"})},KT=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
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
</svg>`,ur=["videobg","blueprint","plasma","bubbles","drops","dotted","aurora","constellation","hexgrid","waves","swarm"],ZT=1e4,xm=3e3,Zt=[44,4,216,28];function JT(t,e,n,i,r,s){t.fillStyle=s?"#0d1018":"#f6f3ed",t.fillRect(0,0,i,r);const o=t.createRadialGradient(i/2,r/2,0,i/2,r/2,Math.max(i,r)*.65);s?(o.addColorStop(0,"rgba(30,40,80,0.18)"),o.addColorStop(1,"rgba(0,0,0,0.25)")):(o.addColorStop(0,"rgba(255,250,200,0.18)"),o.addColorStop(1,"rgba(200,215,255,0.08)")),t.fillStyle=o,t.fillRect(0,0,i,r);const a=30,l=150;t.strokeStyle=s?"rgba(180,140,40,0.22)":"rgba(190,140,30,0.22)",t.lineWidth=.5,t.beginPath();for(let c=0;c<=i;c+=a)t.moveTo(c,0),t.lineTo(c,r);for(let c=0;c<=r;c+=a)t.moveTo(0,c),t.lineTo(i,c);t.stroke(),t.strokeStyle=s?"rgba(80,140,255,0.32)":"rgba(70,120,255,0.30)",t.lineWidth=1,t.beginPath();for(let c=0;c<=i;c+=l)t.moveTo(c,0),t.lineTo(c,r);for(let c=0;c<=r;c+=l)t.moveTo(0,c),t.lineTo(i,c);t.stroke(),t.strokeStyle=s?"rgba(255,80,80,0.60)":"rgba(220,45,45,0.50)",t.lineWidth=1;for(let c=l;c<=i;c+=l)for(let h=l;h<=r;h+=l)t.beginPath(),t.moveTo(c-8,h),t.lineTo(c+8,h),t.moveTo(c,h-8),t.lineTo(c,h+8),t.stroke(),t.beginPath(),t.arc(c,h,3,0,Math.PI*2),t.stroke();const u=e*5e-5%1*r,f=t.createLinearGradient(0,u-50,0,u+50);if(f.addColorStop(0,"transparent"),f.addColorStop(.5,`rgba(255,190,30,${s?.38:.22})`),f.addColorStop(1,"transparent"),t.fillStyle=f,t.fillRect(0,u-50,i,100),n.x>=0){const c=Math.round(n.x/a)*a,h=Math.round(n.y/a)*a,p=.5+.5*Math.sin(e*.004);t.shadowBlur=s?20:14,t.shadowColor=s?"rgba(255,160,40,0.9)":"rgba(255,130,60,0.85)",t.strokeStyle=`rgba(255,120,40,${p})`,t.lineWidth=1.5,t.beginPath(),t.arc(c,h,18+8*Math.sin(e*.003),0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(c-14,h),t.lineTo(c+14,h),t.moveTo(c,h-14),t.lineTo(c,h+14),t.stroke();for(let v=60;v<=180;v+=60)t.strokeStyle=`rgba(80,140,255,${(1-v/200)*.3*p*(s?1.5:1)})`,t.beginPath(),t.arc(n.x,n.y,v,0,Math.PI*2),t.stroke();t.shadowBlur=0}}function QT(t,e,n,i,r,s){t.fillStyle=s?"#0a0812":"#f4f2ef",t.fillRect(0,0,i,r);const o=e*4e-4,a=[{x:i*(.5+.38*Math.sin(o*.7)),y:r*(.5+.38*Math.cos(o*.5)),r:i*.52,hue:44},{x:i*(.5+.32*Math.cos(o*.4)),y:r*(.5+.38*Math.sin(o*.6)),r:i*.46,hue:4},{x:i*(.5+.3*Math.sin(o*.9+1)),y:r*(.5+.28*Math.cos(o*.7+2)),r:i*.4,hue:216},{x:i*(.5+.2*Math.cos(o*1.1)),y:r*(.5+.32*Math.sin(o*.8+1)),r:i*.34,hue:28}];n.x>=0&&a.push({x:n.x,y:n.y,r:260,hue:44});const l=s?88:82,u=s?60:52,f=s?.65:.55;for(const c of a){const h=t.createRadialGradient(c.x,c.y,0,c.x,c.y,c.r);h.addColorStop(0,`hsla(${c.hue},${l}%,${u}%,${f})`),h.addColorStop(.5,`hsla(${c.hue},${l-10}%,${u+8}%,${f*.45})`),h.addColorStop(1,"transparent"),t.fillStyle=h,t.fillRect(0,0,i,r)}if(n.x>=0){const c=t.createRadialGradient(n.x,n.y,0,n.x,n.y,100);c.addColorStop(0,s?"rgba(255,255,255,0.45)":"rgba(255,255,255,0.55)"),c.addColorStop(1,"transparent"),t.fillStyle=c,t.fillRect(0,0,i,r)}}function eA(t,e,n=22){return Array.from({length:n},(i,r)=>({x:Math.random()*t,y:Math.random()*e,r:40+Math.random()*90,speed:.18+Math.random()*.32,opacity:.32+Math.random()*.28,hue:Zt[r%Zt.length]}))}function tA(t,e,n,i,r,s,o){t.fillStyle=o?"#080c16":"#eff2f8",t.fillRect(0,0,i,r);const a=t.createRadialGradient(i/2,r/2,0,i/2,r/2,Math.max(i,r)*.55);o?(a.addColorStop(0,"rgba(20,30,60,0.22)"),a.addColorStop(1,"rgba(0,0,0,0.15)")):(a.addColorStop(0,"rgba(255,255,255,0.28)"),a.addColorStop(1,"rgba(210,220,250,0.06)")),t.fillStyle=a,t.fillRect(0,0,i,r);const l=e*8e-4,u=o?90:85,f=o?62:52;for(const c of s){if(c.y-=c.speed,c.x+=Math.sin(l+c.r*.04)*.45,n.x>=0){const h=c.x-n.x,p=c.y-n.y,v=Math.sqrt(h*h+p*p);if(v<180&&v>0){const x=(180-v)/180;c.x+=h/v*x*2.5,c.y+=p/v*x*2.5}}c.y<-c.r*2&&(c.y=r+c.r,c.x=Math.random()*i),c.x<-c.r&&(c.x=i+c.r),c.x>i+c.r&&(c.x=-c.r),t.beginPath(),t.arc(c.x,c.y,c.r,0,Math.PI*2),t.fillStyle=`hsla(${c.hue},${u}%,${f}%,${c.opacity})`,t.fill(),t.strokeStyle=`hsla(${c.hue},${u-20}%,${f-8}%,${c.opacity*.55})`,t.lineWidth=1.5,t.stroke()}}function ym(t,e){return{x:t,y:e,age:0,maxAge:100+Math.random()*70,hue:Zt[Math.floor(Math.random()*Zt.length)]}}function nA(t,e,n,i,r,s,o,a){t.fillStyle=a?"#060810":"#f0f4f8",t.fillRect(0,0,i,r);const l=t.createRadialGradient(i/2,r/2,0,i/2,r/2,Math.max(i,r)*.65);a?(l.addColorStop(0,"rgba(10,15,35,0.22)"),l.addColorStop(1,"rgba(0,0,0,0.18)")):(l.addColorStop(0,"rgba(255,255,255,0.28)"),l.addColorStop(1,"rgba(195,215,250,0.06)")),t.fillStyle=l,t.fillRect(0,0,i,r),o%45===0&&s.push(ym(Math.random()*i,Math.random()*r)),n.x>=0&&o%14===0&&s.push(ym(n.x+(Math.random()-.5)*24,n.y+(Math.random()-.5)*24));const u=a?88:80,f=a?65:52;for(let c=s.length-1;c>=0;c--){const h=s[c];if(h.age++,h.age>=h.maxAge){s.splice(c,1);continue}const p=h.age/h.maxAge;for(let v=0;v<3;v++){const x=Math.max(0,p-v*.14);x<=0||(t.beginPath(),t.arc(h.x,h.y,x*90,0,Math.PI*2),t.strokeStyle=`hsla(${h.hue},${u}%,${f}%,${(1-x)*.65*(1-v*.28)})`,t.lineWidth=1.5-v*.4,t.stroke())}p<.18&&(t.beginPath(),t.arc(h.x,h.y,2.5,0,Math.PI*2),t.fillStyle=`hsla(${h.hue},${u}%,${f}%,${(1-p/.18)*.9})`,t.fill())}}function iA(t,e,n,i,r,s){t.fillStyle=s?"#0a0a0a":"#f5f5f5",t.fillRect(0,0,i,r);const o=26,a=e*.001,l=Math.ceil(i/o)+1,u=Math.ceil(r/o)+1,f=s?88:85,c=s?65:52;for(let h=0;h<u;h++)for(let p=0;p<l;p++){const v=p*o,x=h*o,g=Math.sin(p*.32+a*2)*Math.cos(h*.28+a*1.6);let d=1.8+g*1.4,_=(s?.45:.36)+g*.22;if(n.x>=0){const y=v-n.x,D=x-n.y,C=Math.max(0,1-Math.sqrt(y*y+D*D)/130);d+=C*5,_+=C*.65}const m=Zt[(p+h)%Zt.length];t.beginPath(),t.arc(v,x,Math.max(.4,d),0,Math.PI*2),t.fillStyle=`hsla(${m},${f}%,${c}%,${Math.min(1,_)})`,t.fill()}}function rA(t,e,n,i,r,s){t.fillStyle=s?"#060a12":"#f0f4ef",t.fillRect(0,0,i,r);const o=e*5e-4,a=[{hue:44,sat:s?90:82,lit:s?62:52,y0:.25,amp:.12,freq:2.4,speed:.7,bw:.22},{hue:4,sat:s?88:80,lit:s?65:50,y0:.5,amp:.1,freq:3.1,speed:.5,bw:.18},{hue:216,sat:s?92:85,lit:s?60:48,y0:.7,amp:.14,freq:1.8,speed:.9,bw:.2},{hue:28,sat:s?85:75,lit:s?68:54,y0:.38,amp:.08,freq:4.2,speed:.4,bw:.14}];for(const l of a){const u=r*l.y0+Math.sin(o*l.speed)*r*l.amp,f=r*l.bw*.5;t.save(),t.beginPath(),t.moveTo(0,u-f+Math.sin(o*l.speed*1.4)*r*.04);for(let h=0;h<=i;h+=4)t.lineTo(h,u-f+Math.sin(h*.008*l.freq+o*l.speed*1.4)*r*.04);for(let h=i;h>=0;h-=4)t.lineTo(h,u+f+Math.sin(h*.008*l.freq+o*l.speed*1.4+Math.PI)*r*.04);t.closePath(),t.clip();const c=t.createLinearGradient(0,u-f,0,u+f);c.addColorStop(0,"transparent"),c.addColorStop(.5,`hsla(${l.hue},${l.sat}%,${l.lit}%,${s?.72:.5})`),c.addColorStop(1,"transparent"),t.fillStyle=c,t.fillRect(0,0,i,r),t.restore()}if(n.x>=0){const l=t.createRadialGradient(n.x,n.y,0,n.x,n.y,140);l.addColorStop(0,s?"rgba(255,255,255,0.30)":"rgba(255,255,255,0.52)"),l.addColorStop(.5,s?"rgba(255,210,60,0.14)":"rgba(255,210,60,0.18)"),l.addColorStop(1,"transparent"),t.fillStyle=l,t.fillRect(0,0,i,r)}}function sA(t,e,n=80){return Array.from({length:n},(i,r)=>({x:Math.random()*t,y:Math.random()*e,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,hue:Zt[r%Zt.length]}))}function oA(t,e,n,i,r,s,o){t.fillStyle=o?"#080b14":"#f2f4f8",t.fillRect(0,0,i,r);const a=o?90:82,l=o?65:50;for(const f of s)f.x+=f.vx,f.y+=f.vy,(f.x<0||f.x>i)&&(f.vx*=-1),(f.y<0||f.y>r)&&(f.vy*=-1);for(let f=0;f<s.length;f++)for(let c=f+1;c<s.length;c++){const h=s[f].x-s[c].x,p=s[f].y-s[c].y,v=Math.sqrt(h*h+p*p);v<130&&(t.strokeStyle=`hsla(${s[f].hue},${a}%,${l}%,${(1-v/130)*(o?.32:.2)})`,t.lineWidth=.7,t.beginPath(),t.moveTo(s[f].x,s[f].y),t.lineTo(s[c].x,s[c].y),t.stroke())}const u=[];if(n.x>=0){for(const f of s){const c=f.x-n.x,h=f.y-n.y;Math.sqrt(c*c+h*h)<160&&u.push(f)}for(const f of u)t.strokeStyle=`hsla(${f.hue},${a}%,${l}%,0.48)`,t.lineWidth=.8,t.beginPath(),t.moveTo(f.x,f.y),t.lineTo(n.x,n.y),t.stroke()}for(const f of s){const c=u.includes(f),h=c?3.5:2,p=c?.95:o?.65:.55;o&&c&&(t.shadowBlur=8,t.shadowColor=`hsla(${f.hue},90%,65%,0.8)`),t.beginPath(),t.arc(f.x,f.y,h,0,Math.PI*2),t.fillStyle=`hsla(${f.hue},${a}%,${l}%,${p})`,t.fill(),t.shadowBlur=0}}function aA(t,e,n,i,r,s){t.fillStyle=s?"#0a0d14":"#f4f2f0",t.fillRect(0,0,i,r);const o=e*.001,a=36,l=a*1.5,u=a*Math.sqrt(3),f=Math.ceil(i/l)+3,c=Math.ceil(r/u)+3,h=s?88:82,p=s?15:92;for(let v=-1;v<f;v++)for(let x=-1;x<c;x++){const g=(v%2+2)%2===1,d=v*l,_=x*u+(g?u*.5:0),m=.5+.5*Math.sin(v*.4+x*.35+o*2);let y=0;if(n.x>=0){const F=d-n.x,T=_-n.y;y=Math.max(0,1-Math.sqrt(F*F+T*T)/200)}const D=Zt[((v*3+x*2)%Zt.length+Zt.length)%Zt.length],C=p+m*(s?42:-42)+y*(s?16:-12),A=s?.16+m*.34+y*.46:.1+m*.28+y*.38;t.beginPath();for(let F=0;F<6;F++){const T=F*Math.PI/3,S=d+a*Math.cos(T),O=_+a*Math.sin(T);F===0?t.moveTo(S,O):t.lineTo(S,O)}t.closePath(),t.fillStyle=`hsla(${D},${h}%,${Math.max(0,Math.min(100,C))}%,${Math.min(1,A)})`,t.fill(),t.strokeStyle=`hsla(${D},${h}%,${s?50:40}%,${s?.08+y*.28:.06+y*.22})`,t.lineWidth=.8,t.stroke()}}function lA(t,e,n,i,r,s){t.fillStyle=s?"#080c12":"#f2f4f0",t.fillRect(0,0,i,r);const o=e*6e-4,a=[{hue:44,freq:.008,amp:.1,phase:0,speed:1,oy:.2},{hue:4,freq:.006,amp:.12,phase:1.5,speed:.8,oy:.38},{hue:216,freq:.01,amp:.09,phase:3,speed:1.2,oy:.55},{hue:28,freq:.007,amp:.11,phase:.8,speed:.6,oy:.7},{hue:44,freq:.012,amp:.07,phase:2.2,speed:1.5,oy:.85}];for(const l of a){const u=r*l.oy,f=r*.09;t.save(),t.beginPath(),t.moveTo(0,u+Math.sin(o*l.speed+l.phase)*r*l.amp);for(let h=0;h<=i;h+=3){let p=Math.sin(h*l.freq+o*l.speed+l.phase)*r*l.amp;if(n.x>=0){const v=Math.sqrt((h-n.x)**2+(u-n.y)**2);p+=Math.max(0,1-v/200)*42*Math.sin((h-n.x)*.05)}t.lineTo(h,u+p)}for(let h=i;h>=0;h-=3){let p=Math.sin(h*l.freq+o*l.speed+l.phase)*r*l.amp;if(n.x>=0){const v=Math.sqrt((h-n.x)**2+(u-n.y)**2);p+=Math.max(0,1-v/200)*42*Math.sin((h-n.x)*.05)}t.lineTo(h,u+p+f)}t.closePath(),t.clip();const c=t.createLinearGradient(0,u-f*.5,0,u+f*1.5);c.addColorStop(0,"transparent"),c.addColorStop(.5,`hsla(${l.hue},${s?90:82}%,${s?62:52}%,${s?.68:.5})`),c.addColorStop(1,"transparent"),t.fillStyle=c,t.fillRect(0,0,i,r),t.restore()}}function uA(t,e,n=120){return Array.from({length:n},(i,r)=>({x:Math.random()*t,y:Math.random()*e,vx:(Math.random()-.5)*2,vy:(Math.random()-.5)*2,hue:Zt[r%Zt.length]}))}function cA(t,e,n,i,r,s,o){t.fillStyle=o?"#060810":"#f0f2f5",t.fillRect(0,0,i,r);const a=e*.001,l=[{x:i/2+Math.cos(a*.7)*i*.28,y:r/2+Math.sin(a*.5)*r*.28},{x:i/2+Math.cos(a*.4+2)*i*.22,y:r/2+Math.sin(a*.6+1)*r*.22}],u=o?90:85,f=o?65:52;for(const c of s){let h=0,p=0;for(const x of l){const g=x.x-c.x,d=x.y-c.y,_=Math.sqrt(g*g+d*d)+1;h+=g/_*Math.min(_*.005,.8),p+=d/_*Math.min(_*.005,.8)}if(n.x>=0){const x=c.x-n.x,g=c.y-n.y,d=Math.sqrt(x*x+g*g)+1;d<140&&(h+=x/d*(140-d)*.04,p+=g/d*(140-d)*.04)}c.vx=c.vx*.92+h,c.vy=c.vy*.92+p;const v=Math.sqrt(c.vx*c.vx+c.vy*c.vy);v>3.5&&(c.vx=c.vx/v*3.5,c.vy=c.vy/v*3.5),c.x+=c.vx,c.y+=c.vy,c.x<0&&(c.x=i),c.x>i&&(c.x=0),c.y<0&&(c.y=r),c.y>r&&(c.y=0),t.beginPath(),t.arc(c.x,c.y,o?2.2:2,0,Math.PI*2),t.fillStyle=`hsla(${c.hue},${u}%,${f}%,${o?.72:.6})`,t.fill()}for(const c of l){const h=t.createRadialGradient(c.x,c.y,0,c.x,c.y,60);h.addColorStop(0,o?"rgba(255,255,255,0.10)":"rgba(255,255,255,0.25)"),h.addColorStop(1,"transparent"),t.fillStyle=h,t.fillRect(0,0,i,r)}}function fA(t,e,n,i,r){if(t.fillStyle=r?"#050505":"#111",t.fillRect(0,0,e,n),!i||i.readyState<2)return;const s=i.videoWidth,o=i.videoHeight;if(!s||!o)return;const a=Math.max(e/s,n/o),l=s*a,u=o*a,f=(e-l)/2,c=(n-u)/2;t.drawImage(i,f,c,l,u),t.fillStyle=r?"rgba(0,0,0,0.45)":"rgba(0,0,0,0.30)",t.fillRect(0,0,e,n)}function Sm(t,e,n,i,r,s,o,a,l,u,f,c,h){switch(e){case"videobg":fA(t,r,s,h,c);break;case"blueprint":JT(t,n,i,r,s,c);break;case"plasma":QT(t,n,i,r,s,c);break;case"bubbles":tA(t,n,i,r,s,o,c);break;case"drops":nA(t,n,i,r,s,a,l,c);break;case"dotted":iA(t,n,i,r,s,c);break;case"aurora":rA(t,n,i,r,s,c);break;case"constellation":oA(t,n,i,r,s,u,c);break;case"hexgrid":aA(t,n,i,r,s,c);break;case"waves":lA(t,n,i,r,s,c);break;case"swarm":cA(t,n,i,r,s,f,c);break}}function gn(t,e){try{const n=localStorage.getItem("smdl_"+t);return n!==null?JSON.parse(n):e}catch{return e}}function Un(t,e){try{localStorage.setItem("smdl_"+t,JSON.stringify(e))}catch{}}const hA={videobg:"Video",blueprint:"Blueprint",plasma:"Plasma",bubbles:"Bubbles",drops:"Drops",dotted:"Dotted",aurora:"Aurora",constellation:"Stars",hexgrid:"Hex",waves:"Waves",swarm:"Swarm"},dA=()=>{const t=Ge.useRef(null),e=Ge.useRef(null),n=Ge.useRef({x:-9999,y:-9999}),i=Ge.useRef([]),r=Ge.useRef([]),s=Ge.useRef([]),o=Ge.useRef([]),a=Ge.useRef(0),l=Ge.useRef(0),u=Ge.useRef(0),f=Ge.useRef(-1),c=Ge.useRef(gn("locked",!1)),h=Ge.useRef(gn("dark",!1)),p=Ge.useRef(gn("holdMs",ZT)),v=Ge.useRef(ur[0]),[x,g]=Ge.useState(ur[0]),[d,_]=Ge.useState(()=>gn("locked",!1)),[m,y]=Ge.useState(()=>gn("dark",!1)),[D,C]=Ge.useState(!1),[A,F]=Ge.useState(()=>gn("intervalPreset","custom")),[T,S]=Ge.useState(()=>gn("customMin","0.167")),O=()=>{u.current=(u.current+1)%ur.length,f.current=-1},H=()=>{const ge=!c.current;c.current=ge,ge||(f.current=-1),_(ge),Un("locked",ge)},q=()=>{const ge=!h.current;h.current=ge,y(ge),Un("dark",ge),window.dispatchEvent(new CustomEvent("smdl_darkchange"))};Ge.useEffect(()=>{const ge=e.current;ge&&(ge.muted=!0,ge.play().catch(()=>{}));const be=t.current;if(!be)return;const U=be.getContext("2d");if(!U)return;const N=document.createElement("canvas"),b=document.createElement("canvas"),E=N.getContext("2d"),K=b.getContext("2d"),W=()=>{const Z=window.innerWidth,z=window.innerHeight;be.width=Z,be.height=z,N.width=Z,N.height=z,b.width=Z,b.height=z,i.current.length===0&&(i.current=eA(Z,z)),s.current.length===0&&(s.current=sA(Z,z)),o.current.length===0&&(o.current=uA(Z,z))};W(),window.addEventListener("resize",W);const B=Z=>{n.current={x:Z.clientX,y:Z.clientY}},de=()=>{n.current={x:-9999,y:-9999}};window.addEventListener("mousemove",B),document.documentElement.addEventListener("mouseleave",de);const w=Z=>{f.current<0&&(f.current=Z);let z=Z-f.current;const Q=be.width,X=be.height,ce=n.current,k=l.current++,I=h.current;c.current?z=Math.min(z,p.current):z>=p.current+xm&&(u.current=(u.current+1)%ur.length,f.current=Z,z=0);const P=ur[u.current],M=ur[(u.current+1)%ur.length];P!==v.current&&(v.current=P,g(P));let Y=0;if(z>p.current){const ae=(z-p.current)/xm;Y=Math.min(1,ae*ae*(3-2*ae))}const le=e.current;Sm(E,P,Z,ce,Q,X,i.current,r.current,k,s.current,o.current,I,le),Y>0&&Sm(K,M,Z,ce,Q,X,i.current,r.current,k,s.current,o.current,I,le),U.clearRect(0,0,Q,X),U.globalAlpha=1-Y,U.drawImage(N,0,0),Y>0&&(U.globalAlpha=Y,U.drawImage(b,0,0)),U.globalAlpha=1,a.current=requestAnimationFrame(w)};return a.current=requestAnimationFrame(w),()=>{cancelAnimationFrame(a.current),window.removeEventListener("resize",W),window.removeEventListener("mousemove",B),document.documentElement.removeEventListener("mouseleave",de)}},[]);const ee={background:"none",border:"none",padding:"0 3px",cursor:"pointer",fontSize:10,lineHeight:1,display:"flex",alignItems:"center"},oe={width:1,height:12,margin:"0 2px",display:"inline-block",background:m?"rgba(180,180,200,0.22)":"rgba(180,180,180,0.32)"},te=m?"rgba(18,18,26,0.80)":"rgba(255,255,255,0.65)",J=m?"1px solid rgba(80,90,130,0.38)":"1px solid rgba(200,185,165,0.28)",L=m?"rgba(14,14,22,0.96)":"rgba(255,255,255,0.96)",re=m?"#99a":"#888",se=(ge,be)=>{p.current=ge,F(be),f.current=-1,Un("holdMs",ge),Un("intervalPreset",be)},fe=(ge,be,U)=>Ie.jsx("button",{onClick:()=>se(U,be),style:{background:A===be?m?"rgba(100,120,200,0.35)":"rgba(80,80,200,0.12)":"none",border:A===be?m?"1px solid rgba(120,140,230,0.5)":"1px solid rgba(80,80,200,0.25)":"1px solid transparent",borderRadius:6,padding:"2px 7px",cursor:"pointer",color:m?"#ccd":"#445",fontSize:10,fontFamily:"system-ui,sans-serif"},children:ge},be);return Ie.jsxs("div",{style:{position:"absolute",inset:0},children:[Ie.jsx("video",{ref:e,src:"/smartdriving3dlogo/videobg.mp4",muted:!0,loop:!0,playsInline:!0,style:{position:"absolute",width:0,height:0,opacity:0,pointerEvents:"none"}}),Ie.jsx("canvas",{ref:t,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0}}),Ie.jsxs("div",{style:{position:"absolute",top:8,right:8,zIndex:10,display:"flex",flexDirection:"column",alignItems:"flex-end",gap:4,fontFamily:"system-ui,sans-serif",userSelect:"none"},children:[Ie.jsxs("div",{style:{display:"flex",alignItems:"center",background:te,backdropFilter:"blur(5px)",border:J,borderRadius:12,padding:"1px 2px",boxShadow:"0 1px 4px rgba(0,0,0,0.10)"},children:[Ie.jsx("button",{onClick:q,title:m?"Light mode":"Dark mode",style:{...ee,color:m?"#ffd060":"#666",fontSize:11,paddingRight:4},children:m?"☀":"🌙"}),Ie.jsx("span",{style:oe}),Ie.jsx("button",{onClick:O,title:"Next background",style:{...ee,color:m?"#aab":"#aaa"},children:"↻"}),Ie.jsx("span",{style:{padding:"0 3px",color:re,fontSize:10,letterSpacing:"0.01em"},children:hA[x]}),Ie.jsx("button",{onClick:H,title:d?"Resume cycling":"Pin background",style:{...ee,color:d?"#d05040":m?"#556":"#ccc",fontSize:9},children:d?"●":"○"}),Ie.jsx("span",{style:oe}),Ie.jsx("button",{onClick:()=>C(ge=>!ge),title:"Interval settings",style:{...ee,color:D?m?"#aac":"#558":m?"#556":"#bbb",fontSize:10},children:"⚙"})]}),D&&Ie.jsxs("div",{style:{background:L,backdropFilter:"blur(8px)",border:J,borderRadius:10,padding:"8px 10px",boxShadow:"0 2px 8px rgba(0,0,0,0.14)",minWidth:200},children:[Ie.jsx("div",{style:{color:re,fontSize:9,letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:6},children:"Interval"}),Ie.jsxs("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:[fe("1 min","1",6e4),fe("5 min","5",3e5),fe("10 min","10",6e5),fe("Custom","custom",p.current)]}),A==="custom"&&Ie.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,marginTop:7},children:[Ie.jsx("input",{type:"number",min:"0.1",step:"0.1",value:T,onChange:ge=>{const be=ge.target.value;S(be);const U=Math.max(100,Math.round(parseFloat(be)*6e4));isNaN(U)||(p.current=U,f.current=-1,Un("holdMs",U),Un("customMin",be))},style:{width:60,background:"none",border:m?"1px solid rgba(120,140,230,0.35)":"1px solid rgba(100,100,180,0.25)",borderRadius:5,padding:"2px 5px",color:m?"#ccd":"#334",fontSize:10,fontFamily:"system-ui,sans-serif",outline:"none"}}),Ie.jsx("span",{style:{color:re,fontSize:10},children:"min"})]})]})]})]})},pA=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],mA=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],gA=()=>{const[t,e]=Ge.useState(()=>new Date),[n,i]=Ge.useState(()=>gn("clockPosC",{x:0,y:0})),[r,s]=Ge.useState(()=>gn("clockSize",14)),[o,a]=Ge.useState(()=>gn("dark",!1)),[l,u]=Ge.useState(()=>gn("clock24h",!0)),[f,c]=Ge.useState(!1),[h,p]=Ge.useState(!1),v=Ge.useRef(n),x=Ge.useRef(r),g=Ge.useRef(null),d=Ge.useRef(null);Ge.useEffect(()=>{const W=setInterval(()=>e(new Date),1e3);return()=>clearInterval(W)},[]),Ge.useEffect(()=>{const W=()=>a(gn("dark",!1));return window.addEventListener("smdl_darkchange",W),()=>window.removeEventListener("smdl_darkchange",W)},[]);const _=W=>{W.button===0&&(W.ctrlKey?(g.current={sx:W.clientX,sy:W.clientY,ox:v.current.x,oy:v.current.y},W.currentTarget.setPointerCapture(W.pointerId),W.currentTarget.style.cursor="grabbing"):W.shiftKey&&(d.current={sy:W.clientY,os:x.current},W.currentTarget.setPointerCapture(W.pointerId),W.currentTarget.style.cursor="ns-resize"))},m=W=>{if(g.current){const B={x:Math.max(-(window.innerWidth/2-180),Math.min(window.innerWidth/2-180,g.current.ox+W.clientX-g.current.sx)),y:Math.max(-(window.innerHeight/2-80),Math.min(window.innerHeight/2-80,g.current.oy+W.clientY-g.current.sy))};v.current=B,i(B),Un("clockPosC",B)}else if(d.current){const B=Math.max(10,Math.min(72,d.current.os+(W.clientY-d.current.sy)*.3));x.current=B,s(B),Un("clockSize",B)}},y=W=>{g.current=null,d.current=null,W.currentTarget.style.cursor="default"},D=W=>{W.stopPropagation(),d.current={sy:W.clientY,os:x.current},W.currentTarget.setPointerCapture(W.pointerId),p(!0)},C=W=>{if(!d.current)return;const B=Math.max(10,Math.min(72,d.current.os+(W.clientY-d.current.sy)*.3));x.current=B,s(B),Un("clockSize",B)},A=W=>{d.current=null,p(!1)},F=W=>{W.stopPropagation(),g.current={sx:W.clientX,sy:W.clientY,ox:v.current.x,oy:v.current.y},W.currentTarget.setPointerCapture(W.pointerId),W.currentTarget.style.cursor="grabbing",p(!0)},T=W=>{if(!g.current)return;const B={x:Math.max(-(window.innerWidth/2-180),Math.min(window.innerWidth/2-180,g.current.ox+W.clientX-g.current.sx)),y:Math.max(-(window.innerHeight/2-80),Math.min(window.innerHeight/2-80,g.current.oy+W.clientY-g.current.sy))};v.current=B,i(B),Un("clockPosC",B)},S=W=>{g.current=null,W.currentTarget.style.cursor="grab",p(!1)},O=()=>{const W=!l;u(W),Un("clock24h",W)},H=t.getHours(),q=l?H:H%12||12,ee=String(q).padStart(2,"0"),oe=String(t.getMinutes()).padStart(2,"0"),te=String(t.getSeconds()).padStart(2,"0"),J=H<12?"AM":"PM",L=r,re=o?"rgba(8,6,18,0.16)":"rgba(255,255,255,0.11)",se=o?"1px solid rgba(255,255,255,0.13)":"1px solid rgba(255,255,255,0.68)",fe=o?"rgba(18,14,36,0.78)":"rgba(255,255,255,0.68)",ge="#22223a",be="0 0 18px rgba(255,255,255,0.70), 0 0 6px rgba(255,255,255,0.32)",U="0 0 8px rgba(255,255,255,0.55), 0 0 3px rgba(255,255,255,0.25)",N=o?"#b0b8cc":"#6b7a90",b="#f0a060",E=o?"rgba(255,255,255,0.12)":"rgba(0,0,0,0.10)",K=o?"rgba(255,255,255,0.14)":"rgba(255,255,255,0.62)";return Ie.jsxs("div",{title:"Ctrl+drag: move  •  Shift+drag: resize",onPointerDown:_,onPointerMove:m,onPointerUp:y,onContextMenu:W=>W.preventDefault(),onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),style:{position:"fixed",left:`calc(50% + ${n.x}px)`,top:`calc(50% + ${n.y}px)`,transform:"translate(-50%,-50%)",zIndex:20,background:re,backdropFilter:"blur(64px) saturate(3.2)",border:se,borderRadius:L*1.7,padding:`${L*1}px ${L*1.6}px ${L*1.4}px`,cursor:"default",userSelect:"none",boxShadow:o?"0 8px 48px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.06)":"0 6px 40px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",fontFamily:"'Montserrat',system-ui,sans-serif",minWidth:L*20},children:[Ie.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:L*.9},children:Ie.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:L*.5,background:fe,borderRadius:L*1.3,backdropFilter:"blur(20px) saturate(1.8)",padding:`${L*.3}px ${L*.9}px`,border:o?"1px solid rgba(255,255,255,0.12)":"1px solid rgba(255,255,255,0.60)",boxShadow:o?"0 2px 10px rgba(0,0,0,0.50)":"0 2px 10px rgba(0,0,0,0.08)",fontSize:L*.75,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",color:N},children:[Ie.jsxs("svg",{width:L*.9,height:L*.9,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",children:[Ie.jsx("rect",{x:"1.5",y:"3",width:"13",height:"11.5",rx:"2"}),Ie.jsx("path",{d:"M5 1.5v3M11 1.5v3M1.5 7h13"})]}),pA[t.getDay()],Ie.jsx("span",{style:{opacity:.3},children:" · "}),String(t.getDate()).padStart(2,"0"),Ie.jsx("span",{style:{opacity:.3},children:" · "}),mA[t.getMonth()],Ie.jsx("span",{style:{opacity:.3},children:" · "}),t.getFullYear()]})}),Ie.jsxs("div",{style:{display:"flex",alignItems:"center",gap:L*.7},children:[Ie.jsxs("div",{style:{display:"flex",alignItems:"center",gap:L*.55},children:[Ie.jsx("span",{style:{fontSize:L*4.2,fontWeight:700,color:ge,lineHeight:1,letterSpacing:"-0.03em",textShadow:be},children:ee}),Ie.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:L*.44,paddingBottom:L*.15},children:[Ie.jsx("span",{style:{width:L*.54,height:L*.54,borderRadius:"50%",background:b,display:"block"}}),Ie.jsx("span",{style:{width:L*.54,height:L*.54,borderRadius:"50%",background:b,display:"block"}})]}),Ie.jsx("span",{style:{fontSize:L*4.2,fontWeight:700,color:ge,lineHeight:1,letterSpacing:"-0.03em",textShadow:be},children:oe})]}),Ie.jsx("div",{style:{width:1,alignSelf:"stretch",background:E,margin:`${L*.4}px 0`,flexShrink:0}}),Ie.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",gap:L*.18},children:[Ie.jsx("span",{style:{fontSize:L*.68,fontWeight:700,color:N,letterSpacing:"0.13em",lineHeight:1,textShadow:U},children:"SEC"}),Ie.jsx("span",{style:{fontSize:L*2.5,fontWeight:700,color:ge,lineHeight:1,letterSpacing:"-0.02em",textShadow:be},children:te}),!l&&Ie.jsx("span",{style:{fontSize:L*.68,fontWeight:700,color:b,letterSpacing:"0.09em",lineHeight:1,textShadow:U},children:J})]})]}),Ie.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:L*.7},children:[Ie.jsx("button",{onClick:O,onPointerDown:W=>W.stopPropagation(),title:l?"Switch to 12-hour":"Switch to 24-hour",style:{background:o?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.06)",border:"none",borderRadius:L*.6,padding:`${L*.22}px ${L*.6}px`,cursor:"pointer",color:N,fontSize:L*.7,fontWeight:700,letterSpacing:"0.05em",fontFamily:"inherit",textShadow:U},children:l?"24 h":"12 h"}),Ie.jsxs("div",{style:{display:"flex",gap:L*.4},children:[Ie.jsx("button",{onPointerDown:F,onPointerMove:T,onPointerUp:S,title:"Drag to move",style:{width:L*1.9,height:L*1.9,flexShrink:0,background:K,border:"none",borderRadius:"50%",boxShadow:o?"0 2px 10px rgba(0,0,0,0.55)":"0 2px 10px rgba(0,0,0,0.11)",cursor:"grab",display:"flex",alignItems:"center",justifyContent:"center",fontSize:L*.9,color:N,padding:0,opacity:f||h?1:0,transition:"opacity 0.18s ease",pointerEvents:f||h?"auto":"none"},children:"⠿"}),Ie.jsx("button",{onPointerDown:D,onPointerMove:C,onPointerUp:A,onContextMenu:W=>W.preventDefault(),title:"Drag up / down to resize",style:{width:L*1.9,height:L*1.9,flexShrink:0,background:K,border:"none",borderRadius:"50%",boxShadow:o?"0 2px 10px rgba(0,0,0,0.55)":"0 2px 10px rgba(0,0,0,0.11)",cursor:"ns-resize",display:"flex",alignItems:"center",justifyContent:"center",fontSize:L*.82,color:N,padding:0,opacity:f||h?1:0,transition:"opacity 0.18s ease",pointerEvents:f||h?"auto":"none"},children:"⤡"})]})]})]})};class vA extends Gv.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){var e;return this.state.hasError?Ie.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh",background:"#fefce8",color:"#0f172a"},children:Ie.jsxs("div",{style:{padding:"2rem",background:"#fee2e2",border:"1px solid #fca5a5",borderRadius:"0.5rem",maxWidth:"32rem",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1)"},children:[Ie.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"bold",marginBottom:"0.5rem",color:"#b91c1c"},children:"Application Error"}),Ie.jsx("p",{style:{color:"#334155",marginBottom:"1rem"},children:"The renderer encountered an issue. Try reloading the preview."}),Ie.jsx("p",{style:{fontFamily:"monospace",fontSize:"0.75rem",color:"#ef4444",wordBreak:"break-word"},children:(e=this.state.error)==null?void 0:e.toString()})]})}):this.props.children}}function _A(){return Ie.jsx(vA,{children:Ie.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[Ie.jsx(dA,{}),Ie.jsx(gA,{}),Ie.jsx("div",{style:{position:"relative",zIndex:1,width:"100%",height:"100%"},children:Ie.jsx(YT,{svg:KT,smoothness:.6,color:"#4f46e5"})})]})})}N0(document.getElementById("root")).render(Ie.jsx(Ge.StrictMode,{children:Ie.jsx(_A,{})}));
