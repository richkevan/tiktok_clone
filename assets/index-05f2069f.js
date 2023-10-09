(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Lp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ed={exports:{}},ys={},td={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=Symbol.for("react.element"),Dp=Symbol.for("react.portal"),Mp=Symbol.for("react.fragment"),jp=Symbol.for("react.strict_mode"),Up=Symbol.for("react.profiler"),Fp=Symbol.for("react.provider"),bp=Symbol.for("react.context"),zp=Symbol.for("react.forward_ref"),$p=Symbol.for("react.suspense"),Bp=Symbol.for("react.memo"),Vp=Symbol.for("react.lazy"),Zl=Symbol.iterator;function Hp(e){return e===null||typeof e!="object"?null:(e=Zl&&e[Zl]||e["@@iterator"],typeof e=="function"?e:null)}var nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rd=Object.assign,id={};function Hn(e,t,n){this.props=e,this.context=t,this.refs=id,this.updater=n||nd}Hn.prototype.isReactComponent={};Hn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Hn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sd(){}sd.prototype=Hn.prototype;function za(e,t,n){this.props=e,this.context=t,this.refs=id,this.updater=n||nd}var $a=za.prototype=new sd;$a.constructor=za;rd($a,Hn.prototype);$a.isPureReactComponent=!0;var eu=Array.isArray,od=Object.prototype.hasOwnProperty,Ba={current:null},ad={key:!0,ref:!0,__self:!0,__source:!0};function ld(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)od.call(t,r)&&!ad.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Hr,type:e,key:s,ref:o,props:i,_owner:Ba.current}}function Wp(e,t){return{$$typeof:Hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Va(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hr}function Kp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var tu=/\/+/g;function Bs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kp(""+e.key):t.toString(36)}function Si(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Hr:case Dp:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Bs(o,0):r,eu(i)?(n="",e!=null&&(n=e.replace(tu,"$&/")+"/"),Si(i,t,n,"",function(u){return u})):i!=null&&(Va(i)&&(i=Wp(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(tu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",eu(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+Bs(s,a);o+=Si(s,t,n,l,i)}else if(l=Hp(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+Bs(s,a++),o+=Si(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ri(e,t,n){if(e==null)return e;var r=[],i=0;return Si(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Gp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Ii={transition:null},Qp={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Ii,ReactCurrentOwner:Ba};O.Children={map:ri,forEach:function(e,t,n){ri(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ri(e,function(){t++}),t},toArray:function(e){return ri(e,function(t){return t})||[]},only:function(e){if(!Va(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Hn;O.Fragment=Mp;O.Profiler=Up;O.PureComponent=za;O.StrictMode=jp;O.Suspense=$p;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qp;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rd({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Ba.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)od.call(t,l)&&!ad.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Hr,type:e.type,key:i,ref:s,props:r,_owner:o}};O.createContext=function(e){return e={$$typeof:bp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fp,_context:e},e.Consumer=e};O.createElement=ld;O.createFactory=function(e){var t=ld.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:zp,render:e}};O.isValidElement=Va;O.lazy=function(e){return{$$typeof:Vp,_payload:{_status:-1,_result:e},_init:Gp}};O.memo=function(e,t){return{$$typeof:Bp,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=Ii.transition;Ii.transition={};try{e()}finally{Ii.transition=t}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,t){return de.current.useCallback(e,t)};O.useContext=function(e){return de.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return de.current.useDeferredValue(e)};O.useEffect=function(e,t){return de.current.useEffect(e,t)};O.useId=function(){return de.current.useId()};O.useImperativeHandle=function(e,t,n){return de.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return de.current.useMemo(e,t)};O.useReducer=function(e,t,n){return de.current.useReducer(e,t,n)};O.useRef=function(e){return de.current.useRef(e)};O.useState=function(e){return de.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return de.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return de.current.useTransition()};O.version="18.2.0";td.exports=O;var j=td.exports;const qp=Lp(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp=j,Jp=Symbol.for("react.element"),Xp=Symbol.for("react.fragment"),Zp=Object.prototype.hasOwnProperty,em=Yp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tm={key:!0,ref:!0,__self:!0,__source:!0};function ud(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Zp.call(t,r)&&!tm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Jp,type:e,key:s,ref:o,props:i,_owner:em.current}}ys.Fragment=Xp;ys.jsx=ud;ys.jsxs=ud;ed.exports=ys;var v=ed.exports,xo={},cd={exports:{}},ke={},dd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,R){var x=k.length;k.push(R);e:for(;0<x;){var G=x-1>>>1,X=k[G];if(0<i(X,R))k[G]=R,k[x]=X,x=G;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var R=k[0],x=k.pop();if(x!==R){k[0]=x;e:for(var G=0,X=k.length,ti=X>>>1;G<ti;){var zt=2*(G+1)-1,$s=k[zt],$t=zt+1,ni=k[$t];if(0>i($s,x))$t<X&&0>i(ni,$s)?(k[G]=ni,k[$t]=x,G=$t):(k[G]=$s,k[zt]=x,G=zt);else if($t<X&&0>i(ni,x))k[G]=ni,k[$t]=x,G=$t;else break e}}return R}function i(k,R){var x=k.sortIndex-R.sortIndex;return x!==0?x:k.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,p=null,m=3,y=!1,_=!1,E=!1,M=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(k){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=k)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function g(k){if(E=!1,f(k),!_)if(n(l)!==null)_=!0,bs(S);else{var R=n(u);R!==null&&zs(g,R.startTime-k)}}function S(k,R){_=!1,E&&(E=!1,d(P),P=-1),y=!0;var x=m;try{for(f(R),p=n(l);p!==null&&(!(p.expirationTime>R)||k&&!Oe());){var G=p.callback;if(typeof G=="function"){p.callback=null,m=p.priorityLevel;var X=G(p.expirationTime<=R);R=e.unstable_now(),typeof X=="function"?p.callback=X:p===n(l)&&r(l),f(R)}else r(l);p=n(l)}if(p!==null)var ti=!0;else{var zt=n(u);zt!==null&&zs(g,zt.startTime-R),ti=!1}return ti}finally{p=null,m=x,y=!1}}var T=!1,C=null,P=-1,b=5,A=-1;function Oe(){return!(e.unstable_now()-A<b)}function qn(){if(C!==null){var k=e.unstable_now();A=k;var R=!0;try{R=C(!0,k)}finally{R?Yn():(T=!1,C=null)}}else T=!1}var Yn;if(typeof c=="function")Yn=function(){c(qn)};else if(typeof MessageChannel<"u"){var Xl=new MessageChannel,Op=Xl.port2;Xl.port1.onmessage=qn,Yn=function(){Op.postMessage(null)}}else Yn=function(){M(qn,0)};function bs(k){C=k,T||(T=!0,Yn())}function zs(k,R){P=M(function(){k(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){_||y||(_=!0,bs(S))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(k){switch(m){case 1:case 2:case 3:var R=3;break;default:R=m}var x=m;m=R;try{return k()}finally{m=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,R){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var x=m;m=k;try{return R()}finally{m=x}},e.unstable_scheduleCallback=function(k,R,x){var G=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?G+x:G):x=G,k){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=x+X,k={id:h++,callback:R,priorityLevel:k,startTime:x,expirationTime:X,sortIndex:-1},x>G?(k.sortIndex=x,t(u,k),n(l)===null&&k===n(u)&&(E?(d(P),P=-1):E=!0,zs(g,x-G))):(k.sortIndex=X,t(l,k),_||y||(_=!0,bs(S))),k},e.unstable_shouldYield=Oe,e.unstable_wrapCallback=function(k){var R=m;return function(){var x=m;m=R;try{return k.apply(this,arguments)}finally{m=x}}}})(fd);dd.exports=fd;var nm=dd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=j,Ie=nm;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pd=new Set,Sr={};function un(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(Sr[e]=t,e=0;e<t.length;e++)pd.add(t[e])}var st=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ao=Object.prototype.hasOwnProperty,rm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,nu={},ru={};function im(e){return Ao.call(ru,e)?!0:Ao.call(nu,e)?!1:rm.test(e)?ru[e]=!0:(nu[e]=!0,!1)}function sm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function om(e,t,n,r){if(t===null||typeof t>"u"||sm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ha=/[\-:]([a-z])/g;function Wa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ha,Wa);re[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ha,Wa);re[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ha,Wa);re[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ka(e,t,n,r){var i=re.hasOwnProperty(t)?re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(om(t,n,i,r)&&(n=null),r||i===null?im(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var dt=hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ii=Symbol.for("react.element"),gn=Symbol.for("react.portal"),vn=Symbol.for("react.fragment"),Ga=Symbol.for("react.strict_mode"),Oo=Symbol.for("react.profiler"),md=Symbol.for("react.provider"),gd=Symbol.for("react.context"),Qa=Symbol.for("react.forward_ref"),Lo=Symbol.for("react.suspense"),Do=Symbol.for("react.suspense_list"),qa=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),vd=Symbol.for("react.offscreen"),iu=Symbol.iterator;function Jn(e){return e===null||typeof e!="object"?null:(e=iu&&e[iu]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Vs;function sr(e){if(Vs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vs=t&&t[1]||""}return`
`+Vs+e}var Hs=!1;function Ws(e,t){if(!e||Hs)return"";Hs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?sr(e):""}function am(e){switch(e.tag){case 5:return sr(e.type);case 16:return sr("Lazy");case 13:return sr("Suspense");case 19:return sr("SuspenseList");case 0:case 2:case 15:return e=Ws(e.type,!1),e;case 11:return e=Ws(e.type.render,!1),e;case 1:return e=Ws(e.type,!0),e;default:return""}}function Mo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vn:return"Fragment";case gn:return"Portal";case Oo:return"Profiler";case Ga:return"StrictMode";case Lo:return"Suspense";case Do:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gd:return(e.displayName||"Context")+".Consumer";case md:return(e._context.displayName||"Context")+".Provider";case Qa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qa:return t=e.displayName||null,t!==null?t:Mo(e.type)||"Memo";case pt:t=e._payload,e=e._init;try{return Mo(e(t))}catch{}}return null}function lm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Mo(t);case 8:return t===Ga?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function um(e){var t=yd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function si(e){e._valueTracker||(e._valueTracker=um(e))}function wd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jo(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function su(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _d(e,t){t=t.checked,t!=null&&Ka(e,"checked",t,!1)}function Uo(e,t){_d(e,t);var n=Mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fo(e,t.type,Mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ou(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fo(e,t,n){(t!=="number"||Fi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var or=Array.isArray;function Rn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function au(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(or(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mt(n)}}function Ed(e,t){var n=Mt(t.value),r=Mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function lu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oi,Id=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oi=oi||document.createElement("div"),oi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ir(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cm=["Webkit","ms","Moz","O"];Object.keys(dr).forEach(function(e){cm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dr[t]=dr[e]})});function kd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||dr.hasOwnProperty(e)&&dr[e]?(""+t).trim():t+"px"}function Td(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dm=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $o(e,t){if(t){if(dm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function Bo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vo=null;function Ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ho=null,xn=null,An=null;function uu(e){if(e=Gr(e)){if(typeof Ho!="function")throw Error(w(280));var t=e.stateNode;t&&(t=Is(t),Ho(e.stateNode,e.type,t))}}function Cd(e){xn?An?An.push(e):An=[e]:xn=e}function Pd(){if(xn){var e=xn,t=An;if(An=xn=null,uu(e),t)for(e=0;e<t.length;e++)uu(t[e])}}function Nd(e,t){return e(t)}function Rd(){}var Ks=!1;function xd(e,t,n){if(Ks)return e(t,n);Ks=!0;try{return Nd(e,t,n)}finally{Ks=!1,(xn!==null||An!==null)&&(Rd(),Pd())}}function kr(e,t){var n=e.stateNode;if(n===null)return null;var r=Is(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Wo=!1;if(st)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{Wo=!1}function fm(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var fr=!1,bi=null,zi=!1,Ko=null,hm={onError:function(e){fr=!0,bi=e}};function pm(e,t,n,r,i,s,o,a,l){fr=!1,bi=null,fm.apply(hm,arguments)}function mm(e,t,n,r,i,s,o,a,l){if(pm.apply(this,arguments),fr){if(fr){var u=bi;fr=!1,bi=null}else throw Error(w(198));zi||(zi=!0,Ko=u)}}function cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ad(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cu(e){if(cn(e)!==e)throw Error(w(188))}function gm(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return cu(i),e;if(s===r)return cu(i),t;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Od(e){return e=gm(e),e!==null?Ld(e):null}function Ld(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ld(e);if(t!==null)return t;e=e.sibling}return null}var Dd=Ie.unstable_scheduleCallback,du=Ie.unstable_cancelCallback,vm=Ie.unstable_shouldYield,ym=Ie.unstable_requestPaint,Q=Ie.unstable_now,wm=Ie.unstable_getCurrentPriorityLevel,Ja=Ie.unstable_ImmediatePriority,Md=Ie.unstable_UserBlockingPriority,$i=Ie.unstable_NormalPriority,_m=Ie.unstable_LowPriority,jd=Ie.unstable_IdlePriority,ws=null,We=null;function Em(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(ws,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:km,Sm=Math.log,Im=Math.LN2;function km(e){return e>>>=0,e===0?32:31-(Sm(e)/Im|0)|0}var ai=64,li=4194304;function ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ar(a):(s&=o,s!==0&&(r=ar(s)))}else o=n&~i,o!==0?r=ar(o):s!==0&&(r=ar(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ue(t),i=1<<n,r|=e[n],t&=~i;return r}function Tm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ue(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Tm(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function Go(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ud(){var e=ai;return ai<<=1,!(ai&4194240)&&(ai=64),e}function Gs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=n}function Pm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ue(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Xa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var D=0;function Fd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var bd,Za,zd,$d,Bd,Qo=!1,ui=[],kt=null,Tt=null,Ct=null,Tr=new Map,Cr=new Map,gt=[],Nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fu(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":Tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function Zn(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Gr(t),t!==null&&Za(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Rm(e,t,n,r,i){switch(t){case"focusin":return kt=Zn(kt,e,t,n,r,i),!0;case"dragenter":return Tt=Zn(Tt,e,t,n,r,i),!0;case"mouseover":return Ct=Zn(Ct,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Tr.set(s,Zn(Tr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Cr.set(s,Zn(Cr.get(s)||null,e,t,n,r,i)),!0}return!1}function Vd(e){var t=Wt(e.target);if(t!==null){var n=cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ad(n),t!==null){e.blockedOn=t,Bd(e.priority,function(){zd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vo=r,n.target.dispatchEvent(r),Vo=null}else return t=Gr(n),t!==null&&Za(t),e.blockedOn=n,!1;t.shift()}return!0}function hu(e,t,n){ki(e)&&n.delete(t)}function xm(){Qo=!1,kt!==null&&ki(kt)&&(kt=null),Tt!==null&&ki(Tt)&&(Tt=null),Ct!==null&&ki(Ct)&&(Ct=null),Tr.forEach(hu),Cr.forEach(hu)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,Qo||(Qo=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,xm)))}function Pr(e){function t(i){return er(i,e)}if(0<ui.length){er(ui[0],e);for(var n=1;n<ui.length;n++){var r=ui[n];r.blockedOn===e&&(r.blockedOn=null)}}for(kt!==null&&er(kt,e),Tt!==null&&er(Tt,e),Ct!==null&&er(Ct,e),Tr.forEach(t),Cr.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)Vd(n),n.blockedOn===null&&gt.shift()}var On=dt.ReactCurrentBatchConfig,Vi=!0;function Am(e,t,n,r){var i=D,s=On.transition;On.transition=null;try{D=1,el(e,t,n,r)}finally{D=i,On.transition=s}}function Om(e,t,n,r){var i=D,s=On.transition;On.transition=null;try{D=4,el(e,t,n,r)}finally{D=i,On.transition=s}}function el(e,t,n,r){if(Vi){var i=qo(e,t,n,r);if(i===null)ro(e,t,r,Hi,n),fu(e,r);else if(Rm(i,e,t,n,r))r.stopPropagation();else if(fu(e,r),t&4&&-1<Nm.indexOf(e)){for(;i!==null;){var s=Gr(i);if(s!==null&&bd(s),s=qo(e,t,n,r),s===null&&ro(e,t,r,Hi,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ro(e,t,r,null,n)}}var Hi=null;function qo(e,t,n,r){if(Hi=null,e=Ya(r),e=Wt(e),e!==null)if(t=cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ad(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Hi=e,null}function Hd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wm()){case Ja:return 1;case Md:return 4;case $i:case _m:return 16;case jd:return 536870912;default:return 16}default:return 16}}var St=null,tl=null,Ti=null;function Wd(){if(Ti)return Ti;var e,t=tl,n=t.length,r,i="value"in St?St.value:St.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return Ti=i.slice(e,1<r?1-r:void 0)}function Ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ci(){return!0}function pu(){return!1}function Te(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ci:pu,this.isPropagationStopped=pu,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ci)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ci)},persist:function(){},isPersistent:ci}),t}var Wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=Te(Wn),Kr=W({},Wn,{view:0,detail:0}),Lm=Te(Kr),Qs,qs,tr,_s=W({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(Qs=e.screenX-tr.screenX,qs=e.screenY-tr.screenY):qs=Qs=0,tr=e),Qs)},movementY:function(e){return"movementY"in e?e.movementY:qs}}),mu=Te(_s),Dm=W({},_s,{dataTransfer:0}),Mm=Te(Dm),jm=W({},Kr,{relatedTarget:0}),Ys=Te(jm),Um=W({},Wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fm=Te(Um),bm=W({},Wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zm=Te(bm),$m=W({},Wn,{data:0}),gu=Te($m),Bm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hm[e])?!!t[e]:!1}function rl(){return Wm}var Km=W({},Kr,{key:function(e){if(e.key){var t=Bm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rl,charCode:function(e){return e.type==="keypress"?Ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gm=Te(Km),Qm=W({},_s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vu=Te(Qm),qm=W({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rl}),Ym=Te(qm),Jm=W({},Wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xm=Te(Jm),Zm=W({},_s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),eg=Te(Zm),tg=[9,13,27,32],il=st&&"CompositionEvent"in window,hr=null;st&&"documentMode"in document&&(hr=document.documentMode);var ng=st&&"TextEvent"in window&&!hr,Kd=st&&(!il||hr&&8<hr&&11>=hr),yu=String.fromCharCode(32),wu=!1;function Gd(e,t){switch(e){case"keyup":return tg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yn=!1;function rg(e,t){switch(e){case"compositionend":return Qd(t);case"keypress":return t.which!==32?null:(wu=!0,yu);case"textInput":return e=t.data,e===yu&&wu?null:e;default:return null}}function ig(e,t){if(yn)return e==="compositionend"||!il&&Gd(e,t)?(e=Wd(),Ti=tl=St=null,yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kd&&t.locale!=="ko"?null:t.data;default:return null}}var sg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!sg[e.type]:t==="textarea"}function qd(e,t,n,r){Cd(r),t=Wi(t,"onChange"),0<t.length&&(n=new nl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,Nr=null;function og(e){af(e,0)}function Es(e){var t=En(e);if(wd(t))return e}function ag(e,t){if(e==="change")return t}var Yd=!1;if(st){var Js;if(st){var Xs="oninput"in document;if(!Xs){var Eu=document.createElement("div");Eu.setAttribute("oninput","return;"),Xs=typeof Eu.oninput=="function"}Js=Xs}else Js=!1;Yd=Js&&(!document.documentMode||9<document.documentMode)}function Su(){pr&&(pr.detachEvent("onpropertychange",Jd),Nr=pr=null)}function Jd(e){if(e.propertyName==="value"&&Es(Nr)){var t=[];qd(t,Nr,e,Ya(e)),xd(og,t)}}function lg(e,t,n){e==="focusin"?(Su(),pr=t,Nr=n,pr.attachEvent("onpropertychange",Jd)):e==="focusout"&&Su()}function ug(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Es(Nr)}function cg(e,t){if(e==="click")return Es(t)}function dg(e,t){if(e==="input"||e==="change")return Es(t)}function fg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var be=typeof Object.is=="function"?Object.is:fg;function Rr(e,t){if(be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ao.call(t,i)||!be(e[i],t[i]))return!1}return!0}function Iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ku(e,t){var n=Iu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Iu(n)}}function Xd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zd(){for(var e=window,t=Fi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fi(e.document)}return t}function sl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hg(e){var t=Zd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xd(n.ownerDocument.documentElement,n)){if(r!==null&&sl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=ku(n,s);var o=ku(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pg=st&&"documentMode"in document&&11>=document.documentMode,wn=null,Yo=null,mr=null,Jo=!1;function Tu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jo||wn==null||wn!==Fi(r)||(r=wn,"selectionStart"in r&&sl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mr&&Rr(mr,r)||(mr=r,r=Wi(Yo,"onSelect"),0<r.length&&(t=new nl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wn)))}function di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:di("Animation","AnimationEnd"),animationiteration:di("Animation","AnimationIteration"),animationstart:di("Animation","AnimationStart"),transitionend:di("Transition","TransitionEnd")},Zs={},ef={};st&&(ef=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function Ss(e){if(Zs[e])return Zs[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ef)return Zs[e]=t[n];return e}var tf=Ss("animationend"),nf=Ss("animationiteration"),rf=Ss("animationstart"),sf=Ss("transitionend"),of=new Map,Cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){of.set(e,t),un(t,[e])}for(var eo=0;eo<Cu.length;eo++){var to=Cu[eo],mg=to.toLowerCase(),gg=to[0].toUpperCase()+to.slice(1);Ut(mg,"on"+gg)}Ut(tf,"onAnimationEnd");Ut(nf,"onAnimationIteration");Ut(rf,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(sf,"onTransitionEnd");Un("onMouseEnter",["mouseout","mouseover"]);Un("onMouseLeave",["mouseout","mouseover"]);Un("onPointerEnter",["pointerout","pointerover"]);Un("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vg=new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));function Pu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mm(r,t,void 0,e),e.currentTarget=null}function af(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Pu(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Pu(i,a,u),s=l}}}if(zi)throw e=Ko,zi=!1,Ko=null,e}function z(e,t){var n=t[na];n===void 0&&(n=t[na]=new Set);var r=e+"__bubble";n.has(r)||(lf(t,e,2,!1),n.add(r))}function no(e,t,n){var r=0;t&&(r|=4),lf(n,e,r,t)}var fi="_reactListening"+Math.random().toString(36).slice(2);function xr(e){if(!e[fi]){e[fi]=!0,pd.forEach(function(n){n!=="selectionchange"&&(vg.has(n)||no(n,!1,e),no(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fi]||(t[fi]=!0,no("selectionchange",!1,t))}}function lf(e,t,n,r){switch(Hd(t)){case 1:var i=Am;break;case 4:i=Om;break;default:i=el}n=i.bind(null,t,n,e),i=void 0,!Wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ro(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Wt(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}xd(function(){var u=s,h=Ya(n),p=[];e:{var m=of.get(e);if(m!==void 0){var y=nl,_=e;switch(e){case"keypress":if(Ci(n)===0)break e;case"keydown":case"keyup":y=Gm;break;case"focusin":_="focus",y=Ys;break;case"focusout":_="blur",y=Ys;break;case"beforeblur":case"afterblur":y=Ys;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=mu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ym;break;case tf:case nf:case rf:y=Fm;break;case sf:y=Xm;break;case"scroll":y=Lm;break;case"wheel":y=eg;break;case"copy":case"cut":case"paste":y=zm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=vu}var E=(t&4)!==0,M=!E&&e==="scroll",d=E?m!==null?m+"Capture":null:m;E=[];for(var c=u,f;c!==null;){f=c;var g=f.stateNode;if(f.tag===5&&g!==null&&(f=g,d!==null&&(g=kr(c,d),g!=null&&E.push(Ar(c,g,f)))),M)break;c=c.return}0<E.length&&(m=new y(m,_,null,n,h),p.push({event:m,listeners:E}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==Vo&&(_=n.relatedTarget||n.fromElement)&&(Wt(_)||_[ot]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(_=n.relatedTarget||n.toElement,y=u,_=_?Wt(_):null,_!==null&&(M=cn(_),_!==M||_.tag!==5&&_.tag!==6)&&(_=null)):(y=null,_=u),y!==_)){if(E=mu,g="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=vu,g="onPointerLeave",d="onPointerEnter",c="pointer"),M=y==null?m:En(y),f=_==null?m:En(_),m=new E(g,c+"leave",y,n,h),m.target=M,m.relatedTarget=f,g=null,Wt(h)===u&&(E=new E(d,c+"enter",_,n,h),E.target=f,E.relatedTarget=M,g=E),M=g,y&&_)t:{for(E=y,d=_,c=0,f=E;f;f=mn(f))c++;for(f=0,g=d;g;g=mn(g))f++;for(;0<c-f;)E=mn(E),c--;for(;0<f-c;)d=mn(d),f--;for(;c--;){if(E===d||d!==null&&E===d.alternate)break t;E=mn(E),d=mn(d)}E=null}else E=null;y!==null&&Nu(p,m,y,E,!1),_!==null&&M!==null&&Nu(p,M,_,E,!0)}}e:{if(m=u?En(u):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var S=ag;else if(_u(m))if(Yd)S=dg;else{S=ug;var T=lg}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=cg);if(S&&(S=S(e,u))){qd(p,S,n,h);break e}T&&T(e,m,u),e==="focusout"&&(T=m._wrapperState)&&T.controlled&&m.type==="number"&&Fo(m,"number",m.value)}switch(T=u?En(u):window,e){case"focusin":(_u(T)||T.contentEditable==="true")&&(wn=T,Yo=u,mr=null);break;case"focusout":mr=Yo=wn=null;break;case"mousedown":Jo=!0;break;case"contextmenu":case"mouseup":case"dragend":Jo=!1,Tu(p,n,h);break;case"selectionchange":if(pg)break;case"keydown":case"keyup":Tu(p,n,h)}var C;if(il)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else yn?Gd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Kd&&n.locale!=="ko"&&(yn||P!=="onCompositionStart"?P==="onCompositionEnd"&&yn&&(C=Wd()):(St=h,tl="value"in St?St.value:St.textContent,yn=!0)),T=Wi(u,P),0<T.length&&(P=new gu(P,e,null,n,h),p.push({event:P,listeners:T}),C?P.data=C:(C=Qd(n),C!==null&&(P.data=C)))),(C=ng?rg(e,n):ig(e,n))&&(u=Wi(u,"onBeforeInput"),0<u.length&&(h=new gu("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=C))}af(p,t)})}function Ar(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=kr(e,n),s!=null&&r.unshift(Ar(e,s,i)),s=kr(e,t),s!=null&&r.push(Ar(e,s,i))),e=e.return}return r}function mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nu(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=kr(n,s),l!=null&&o.unshift(Ar(n,l,a))):i||(l=kr(n,s),l!=null&&o.push(Ar(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var yg=/\r\n?/g,wg=/\u0000|\uFFFD/g;function Ru(e){return(typeof e=="string"?e:""+e).replace(yg,`
`).replace(wg,"")}function hi(e,t,n){if(t=Ru(t),Ru(e)!==t&&n)throw Error(w(425))}function Ki(){}var Xo=null,Zo=null;function ea(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ta=typeof setTimeout=="function"?setTimeout:void 0,_g=typeof clearTimeout=="function"?clearTimeout:void 0,xu=typeof Promise=="function"?Promise:void 0,Eg=typeof queueMicrotask=="function"?queueMicrotask:typeof xu<"u"?function(e){return xu.resolve(null).then(e).catch(Sg)}:ta;function Sg(e){setTimeout(function(){throw e})}function io(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Pr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pr(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Au(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),He="__reactFiber$"+Kn,Or="__reactProps$"+Kn,ot="__reactContainer$"+Kn,na="__reactEvents$"+Kn,Ig="__reactListeners$"+Kn,kg="__reactHandles$"+Kn;function Wt(e){var t=e[He];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ot]||n[He]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Au(e);e!==null;){if(n=e[He])return n;e=Au(e)}return t}e=n,n=e.parentNode}return null}function Gr(e){return e=e[He]||e[ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function Is(e){return e[Or]||null}var ra=[],Sn=-1;function Ft(e){return{current:e}}function $(e){0>Sn||(e.current=ra[Sn],ra[Sn]=null,Sn--)}function F(e,t){Sn++,ra[Sn]=e.current,e.current=t}var jt={},ae=Ft(jt),me=Ft(!1),Xt=jt;function Fn(e,t){var n=e.type.contextTypes;if(!n)return jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ge(e){return e=e.childContextTypes,e!=null}function Gi(){$(me),$(ae)}function Ou(e,t,n){if(ae.current!==jt)throw Error(w(168));F(ae,t),F(me,n)}function uf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,lm(e)||"Unknown",i));return W({},n,r)}function Qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jt,Xt=ae.current,F(ae,e),F(me,me.current),!0}function Lu(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=uf(e,t,Xt),r.__reactInternalMemoizedMergedChildContext=e,$(me),$(ae),F(ae,e)):$(me),F(me,n)}var Ze=null,ks=!1,so=!1;function cf(e){Ze===null?Ze=[e]:Ze.push(e)}function Tg(e){ks=!0,cf(e)}function bt(){if(!so&&Ze!==null){so=!0;var e=0,t=D;try{var n=Ze;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,ks=!1}catch(i){throw Ze!==null&&(Ze=Ze.slice(e+1)),Dd(Ja,bt),i}finally{D=t,so=!1}}return null}var In=[],kn=0,qi=null,Yi=0,Ce=[],Pe=0,Zt=null,et=1,tt="";function Bt(e,t){In[kn++]=Yi,In[kn++]=qi,qi=e,Yi=t}function df(e,t,n){Ce[Pe++]=et,Ce[Pe++]=tt,Ce[Pe++]=Zt,Zt=e;var r=et;e=tt;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var s=32-Ue(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,et=1<<32-Ue(t)+i|n<<i|r,tt=s+e}else et=1<<s|n<<i|r,tt=e}function ol(e){e.return!==null&&(Bt(e,1),df(e,1,0))}function al(e){for(;e===qi;)qi=In[--kn],In[kn]=null,Yi=In[--kn],In[kn]=null;for(;e===Zt;)Zt=Ce[--Pe],Ce[Pe]=null,tt=Ce[--Pe],Ce[Pe]=null,et=Ce[--Pe],Ce[Pe]=null}var Ee=null,_e=null,B=!1,je=null;function ff(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,_e=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zt!==null?{id:et,overflow:tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,_e=null,!0):!1;default:return!1}}function ia(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sa(e){if(B){var t=_e;if(t){var n=t;if(!Du(e,t)){if(ia(e))throw Error(w(418));t=Pt(n.nextSibling);var r=Ee;t&&Du(e,t)?ff(r,n):(e.flags=e.flags&-4097|2,B=!1,Ee=e)}}else{if(ia(e))throw Error(w(418));e.flags=e.flags&-4097|2,B=!1,Ee=e}}}function Mu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function pi(e){if(e!==Ee)return!1;if(!B)return Mu(e),B=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ea(e.type,e.memoizedProps)),t&&(t=_e)){if(ia(e))throw hf(),Error(w(418));for(;t;)ff(e,t),t=Pt(t.nextSibling)}if(Mu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){_e=Pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Ee?Pt(e.stateNode.nextSibling):null;return!0}function hf(){for(var e=_e;e;)e=Pt(e.nextSibling)}function bn(){_e=Ee=null,B=!1}function ll(e){je===null?je=[e]:je.push(e)}var Cg=dt.ReactCurrentBatchConfig;function De(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ji=Ft(null),Xi=null,Tn=null,ul=null;function cl(){ul=Tn=Xi=null}function dl(e){var t=Ji.current;$(Ji),e._currentValue=t}function oa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){Xi=e,ul=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function xe(e){var t=e._currentValue;if(ul!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(Xi===null)throw Error(w(308));Tn=e,Xi.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var Kt=null;function fl(e){Kt===null?Kt=[e]:Kt.push(e)}function pf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,fl(t)):(n.next=i.next,i.next=n),t.interleaved=n,at(e,r)}function at(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mt=!1;function hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function it(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,at(e,n)}return i=r.interleaved,i===null?(t.next=t,fl(r)):(t.next=i.next,i.next=t),r.interleaved=t,at(e,n)}function Pi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xa(e,n)}}function ju(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zi(e,t,n,r){var i=e.updateQueue;mt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var p=i.baseState;o=0,h=u=l=null,a=s;do{var m=a.lane,y=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=e,E=a;switch(m=t,y=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){p=_.call(y,p,m);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,m=typeof _=="function"?_.call(y,p,m):_,m==null)break e;p=W({},p,m);break e;case 2:mt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=y,l=p):h=h.next=y,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(l=p),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);tn|=o,e.lanes=o,e.memoizedState=p}}function Uu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var gf=new hd.Component().refs;function aa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ts={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ce(),i=xt(e),s=it(r,i);s.payload=t,n!=null&&(s.callback=n),t=Nt(e,s,i),t!==null&&(Fe(t,e,i,r),Pi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ce(),i=xt(e),s=it(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Nt(e,s,i),t!==null&&(Fe(t,e,i,r),Pi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ce(),r=xt(e),i=it(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nt(e,i,r),t!==null&&(Fe(t,e,r,n),Pi(t,e,r))}};function Fu(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(i,s):!0}function vf(e,t,n){var r=!1,i=jt,s=t.contextType;return typeof s=="object"&&s!==null?s=xe(s):(i=ge(t)?Xt:ae.current,r=t.contextTypes,s=(r=r!=null)?Fn(e,i):jt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ts,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function bu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ts.enqueueReplaceState(t,t.state,null)}function la(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=gf,hl(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=xe(s):(s=ge(t)?Xt:ae.current,i.context=Fn(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(aa(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ts.enqueueReplaceState(i,i.state,null),Zi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===gf&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function mi(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zu(e){var t=e._init;return t(e._payload)}function yf(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=At(d,c),d.index=0,d.sibling=null,d}function s(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,f,g){return c===null||c.tag!==6?(c=ho(f,d.mode,g),c.return=d,c):(c=i(c,f),c.return=d,c)}function l(d,c,f,g){var S=f.type;return S===vn?h(d,c,f.props.children,g,f.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===pt&&zu(S)===c.type)?(g=i(c,f.props),g.ref=nr(d,c,f),g.return=d,g):(g=Li(f.type,f.key,f.props,null,d.mode,g),g.ref=nr(d,c,f),g.return=d,g)}function u(d,c,f,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=po(f,d.mode,g),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function h(d,c,f,g,S){return c===null||c.tag!==7?(c=Yt(f,d.mode,g,S),c.return=d,c):(c=i(c,f),c.return=d,c)}function p(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ho(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ii:return f=Li(c.type,c.key,c.props,null,d.mode,f),f.ref=nr(d,null,c),f.return=d,f;case gn:return c=po(c,d.mode,f),c.return=d,c;case pt:var g=c._init;return p(d,g(c._payload),f)}if(or(c)||Jn(c))return c=Yt(c,d.mode,f,null),c.return=d,c;mi(d,c)}return null}function m(d,c,f,g){var S=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return S!==null?null:a(d,c,""+f,g);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ii:return f.key===S?l(d,c,f,g):null;case gn:return f.key===S?u(d,c,f,g):null;case pt:return S=f._init,m(d,c,S(f._payload),g)}if(or(f)||Jn(f))return S!==null?null:h(d,c,f,g,null);mi(d,f)}return null}function y(d,c,f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return d=d.get(f)||null,a(c,d,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ii:return d=d.get(g.key===null?f:g.key)||null,l(c,d,g,S);case gn:return d=d.get(g.key===null?f:g.key)||null,u(c,d,g,S);case pt:var T=g._init;return y(d,c,f,T(g._payload),S)}if(or(g)||Jn(g))return d=d.get(f)||null,h(c,d,g,S,null);mi(c,g)}return null}function _(d,c,f,g){for(var S=null,T=null,C=c,P=c=0,b=null;C!==null&&P<f.length;P++){C.index>P?(b=C,C=null):b=C.sibling;var A=m(d,C,f[P],g);if(A===null){C===null&&(C=b);break}e&&C&&A.alternate===null&&t(d,C),c=s(A,c,P),T===null?S=A:T.sibling=A,T=A,C=b}if(P===f.length)return n(d,C),B&&Bt(d,P),S;if(C===null){for(;P<f.length;P++)C=p(d,f[P],g),C!==null&&(c=s(C,c,P),T===null?S=C:T.sibling=C,T=C);return B&&Bt(d,P),S}for(C=r(d,C);P<f.length;P++)b=y(C,d,P,f[P],g),b!==null&&(e&&b.alternate!==null&&C.delete(b.key===null?P:b.key),c=s(b,c,P),T===null?S=b:T.sibling=b,T=b);return e&&C.forEach(function(Oe){return t(d,Oe)}),B&&Bt(d,P),S}function E(d,c,f,g){var S=Jn(f);if(typeof S!="function")throw Error(w(150));if(f=S.call(f),f==null)throw Error(w(151));for(var T=S=null,C=c,P=c=0,b=null,A=f.next();C!==null&&!A.done;P++,A=f.next()){C.index>P?(b=C,C=null):b=C.sibling;var Oe=m(d,C,A.value,g);if(Oe===null){C===null&&(C=b);break}e&&C&&Oe.alternate===null&&t(d,C),c=s(Oe,c,P),T===null?S=Oe:T.sibling=Oe,T=Oe,C=b}if(A.done)return n(d,C),B&&Bt(d,P),S;if(C===null){for(;!A.done;P++,A=f.next())A=p(d,A.value,g),A!==null&&(c=s(A,c,P),T===null?S=A:T.sibling=A,T=A);return B&&Bt(d,P),S}for(C=r(d,C);!A.done;P++,A=f.next())A=y(C,d,P,A.value,g),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?P:A.key),c=s(A,c,P),T===null?S=A:T.sibling=A,T=A);return e&&C.forEach(function(qn){return t(d,qn)}),B&&Bt(d,P),S}function M(d,c,f,g){if(typeof f=="object"&&f!==null&&f.type===vn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ii:e:{for(var S=f.key,T=c;T!==null;){if(T.key===S){if(S=f.type,S===vn){if(T.tag===7){n(d,T.sibling),c=i(T,f.props.children),c.return=d,d=c;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===pt&&zu(S)===T.type){n(d,T.sibling),c=i(T,f.props),c.ref=nr(d,T,f),c.return=d,d=c;break e}n(d,T);break}else t(d,T);T=T.sibling}f.type===vn?(c=Yt(f.props.children,d.mode,g,f.key),c.return=d,d=c):(g=Li(f.type,f.key,f.props,null,d.mode,g),g.ref=nr(d,c,f),g.return=d,d=g)}return o(d);case gn:e:{for(T=f.key;c!==null;){if(c.key===T)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=i(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=po(f,d.mode,g),c.return=d,d=c}return o(d);case pt:return T=f._init,M(d,c,T(f._payload),g)}if(or(f))return _(d,c,f,g);if(Jn(f))return E(d,c,f,g);mi(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,f),c.return=d,d=c):(n(d,c),c=ho(f,d.mode,g),c.return=d,d=c),o(d)):n(d,c)}return M}var zn=yf(!0),wf=yf(!1),Qr={},Ke=Ft(Qr),Lr=Ft(Qr),Dr=Ft(Qr);function Gt(e){if(e===Qr)throw Error(w(174));return e}function pl(e,t){switch(F(Dr,t),F(Lr,e),F(Ke,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zo(t,e)}$(Ke),F(Ke,t)}function $n(){$(Ke),$(Lr),$(Dr)}function _f(e){Gt(Dr.current);var t=Gt(Ke.current),n=zo(t,e.type);t!==n&&(F(Lr,e),F(Ke,n))}function ml(e){Lr.current===e&&($(Ke),$(Lr))}var V=Ft(0);function es(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oo=[];function gl(){for(var e=0;e<oo.length;e++)oo[e]._workInProgressVersionPrimary=null;oo.length=0}var Ni=dt.ReactCurrentDispatcher,ao=dt.ReactCurrentBatchConfig,en=0,H=null,Y=null,Z=null,ts=!1,gr=!1,Mr=0,Pg=0;function ie(){throw Error(w(321))}function vl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!be(e[n],t[n]))return!1;return!0}function yl(e,t,n,r,i,s){if(en=s,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ni.current=e===null||e.memoizedState===null?Ag:Og,e=n(r,i),gr){s=0;do{if(gr=!1,Mr=0,25<=s)throw Error(w(301));s+=1,Z=Y=null,t.updateQueue=null,Ni.current=Lg,e=n(r,i)}while(gr)}if(Ni.current=ns,t=Y!==null&&Y.next!==null,en=0,Z=Y=H=null,ts=!1,t)throw Error(w(300));return e}function wl(){var e=Mr!==0;return Mr=0,e}function Ve(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?H.memoizedState=Z=e:Z=Z.next=e,Z}function Ae(){if(Y===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Z===null?H.memoizedState:Z.next;if(t!==null)Z=t,Y=e;else{if(e===null)throw Error(w(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Z===null?H.memoizedState=Z=e:Z=Z.next=e}return Z}function jr(e,t){return typeof t=="function"?t(e):t}function lo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Y,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((en&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=p,o=r):l=l.next=p,H.lanes|=h,tn|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,be(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,H.lanes|=s,tn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function uo(e){var t=Ae(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);be(s,t.memoizedState)||(pe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ef(){}function Sf(e,t){var n=H,r=Ae(),i=t(),s=!be(r.memoizedState,i);if(s&&(r.memoizedState=i,pe=!0),r=r.queue,_l(Tf.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Z!==null&&Z.memoizedState.tag&1){if(n.flags|=2048,Ur(9,kf.bind(null,n,r,i,t),void 0,null),ee===null)throw Error(w(349));en&30||If(n,t,i)}return i}function If(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kf(e,t,n,r){t.value=n,t.getSnapshot=r,Cf(t)&&Pf(e)}function Tf(e,t,n){return n(function(){Cf(t)&&Pf(e)})}function Cf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!be(e,n)}catch{return!0}}function Pf(e){var t=at(e,1);t!==null&&Fe(t,e,1,-1)}function $u(e){var t=Ve();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jr,lastRenderedState:e},t.queue=e,e=e.dispatch=xg.bind(null,H,e),[t.memoizedState,e]}function Ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nf(){return Ae().memoizedState}function Ri(e,t,n,r){var i=Ve();H.flags|=e,i.memoizedState=Ur(1|t,n,void 0,r===void 0?null:r)}function Cs(e,t,n,r){var i=Ae();r=r===void 0?null:r;var s=void 0;if(Y!==null){var o=Y.memoizedState;if(s=o.destroy,r!==null&&vl(r,o.deps)){i.memoizedState=Ur(t,n,s,r);return}}H.flags|=e,i.memoizedState=Ur(1|t,n,s,r)}function Bu(e,t){return Ri(8390656,8,e,t)}function _l(e,t){return Cs(2048,8,e,t)}function Rf(e,t){return Cs(4,2,e,t)}function xf(e,t){return Cs(4,4,e,t)}function Af(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Of(e,t,n){return n=n!=null?n.concat([e]):null,Cs(4,4,Af.bind(null,t,e),n)}function El(){}function Lf(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Df(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Mf(e,t,n){return en&21?(be(n,t)||(n=Ud(),H.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function Ng(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{D=n,ao.transition=r}}function jf(){return Ae().memoizedState}function Rg(e,t,n){var r=xt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uf(e))Ff(t,n);else if(n=pf(e,t,n,r),n!==null){var i=ce();Fe(n,e,r,i),bf(n,t,r)}}function xg(e,t,n){var r=xt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uf(e))Ff(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,be(a,o)){var l=t.interleaved;l===null?(i.next=i,fl(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=pf(e,t,i,r),n!==null&&(i=ce(),Fe(n,e,r,i),bf(n,t,r))}}function Uf(e){var t=e.alternate;return e===H||t!==null&&t===H}function Ff(e,t){gr=ts=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xa(e,n)}}var ns={readContext:xe,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Ag={readContext:xe,useCallback:function(e,t){return Ve().memoizedState=[e,t===void 0?null:t],e},useContext:xe,useEffect:Bu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ri(4194308,4,Af.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ri(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ri(4,2,e,t)},useMemo:function(e,t){var n=Ve();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ve();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Rg.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Ve();return e={current:e},t.memoizedState=e},useState:$u,useDebugValue:El,useDeferredValue:function(e){return Ve().memoizedState=e},useTransition:function(){var e=$u(!1),t=e[0];return e=Ng.bind(null,e[1]),Ve().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,i=Ve();if(B){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ee===null)throw Error(w(349));en&30||If(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Bu(Tf.bind(null,r,s,e),[e]),r.flags|=2048,Ur(9,kf.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ve(),t=ee.identifierPrefix;if(B){var n=tt,r=et;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Mr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Pg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Og={readContext:xe,useCallback:Lf,useContext:xe,useEffect:_l,useImperativeHandle:Of,useInsertionEffect:Rf,useLayoutEffect:xf,useMemo:Df,useReducer:lo,useRef:Nf,useState:function(){return lo(jr)},useDebugValue:El,useDeferredValue:function(e){var t=Ae();return Mf(t,Y.memoizedState,e)},useTransition:function(){var e=lo(jr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Ef,useSyncExternalStore:Sf,useId:jf,unstable_isNewReconciler:!1},Lg={readContext:xe,useCallback:Lf,useContext:xe,useEffect:_l,useImperativeHandle:Of,useInsertionEffect:Rf,useLayoutEffect:xf,useMemo:Df,useReducer:uo,useRef:Nf,useState:function(){return uo(jr)},useDebugValue:El,useDeferredValue:function(e){var t=Ae();return Y===null?t.memoizedState=e:Mf(t,Y.memoizedState,e)},useTransition:function(){var e=uo(jr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Ef,useSyncExternalStore:Sf,useId:jf,unstable_isNewReconciler:!1};function Bn(e,t){try{var n="",r=t;do n+=am(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function co(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ua(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Dg=typeof WeakMap=="function"?WeakMap:Map;function zf(e,t,n){n=it(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){is||(is=!0,wa=r),ua(e,t)},n}function $f(e,t,n){n=it(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ua(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ua(e,t),typeof r!="function"&&(Rt===null?Rt=new Set([this]):Rt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Vu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Dg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Qg.bind(null,e,t,n),t.then(e,e))}function Hu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wu(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=it(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Mg=dt.ReactCurrentOwner,pe=!1;function ue(e,t,n,r){t.child=e===null?wf(t,null,n,r):zn(t,e.child,n,r)}function Ku(e,t,n,r,i){n=n.render;var s=t.ref;return Ln(t,i),r=yl(e,t,n,r,s,i),n=wl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lt(e,t,i)):(B&&n&&ol(t),t.flags|=1,ue(e,t,r,i),t.child)}function Gu(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Rl(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Bf(e,t,s,r,i)):(e=Li(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Rr,n(o,r)&&e.ref===t.ref)return lt(e,t,i)}return t.flags|=1,e=At(s,r),e.ref=t.ref,e.return=t,t.child=e}function Bf(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Rr(s,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,lt(e,t,i)}return ca(e,t,n,r,i)}function Vf(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Pn,we),we|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,F(Pn,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,F(Pn,we),we|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,F(Pn,we),we|=r;return ue(e,t,i,n),t.child}function Hf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ca(e,t,n,r,i){var s=ge(n)?Xt:ae.current;return s=Fn(t,s),Ln(t,i),n=yl(e,t,n,r,s,i),r=wl(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,lt(e,t,i)):(B&&r&&ol(t),t.flags|=1,ue(e,t,n,i),t.child)}function Qu(e,t,n,r,i){if(ge(n)){var s=!0;Qi(t)}else s=!1;if(Ln(t,i),t.stateNode===null)xi(e,t),vf(t,n,r),la(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=xe(u):(u=ge(n)?Xt:ae.current,u=Fn(t,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bu(t,o,r,u),mt=!1;var m=t.memoizedState;o.state=m,Zi(t,r,o,i),l=t.memoizedState,a!==r||m!==l||me.current||mt?(typeof h=="function"&&(aa(t,n,h,r),l=t.memoizedState),(a=mt||Fu(t,n,a,r,m,l,u))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,mf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:De(t.type,a),o.props=u,p=t.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=xe(l):(l=ge(n)?Xt:ae.current,l=Fn(t,l));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||m!==l)&&bu(t,o,r,l),mt=!1,m=t.memoizedState,o.state=m,Zi(t,r,o,i);var _=t.memoizedState;a!==p||m!==_||me.current||mt?(typeof y=="function"&&(aa(t,n,y,r),_=t.memoizedState),(u=mt||Fu(t,n,u,r,m,_,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),o.props=r,o.state=_,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return da(e,t,n,r,s,i)}function da(e,t,n,r,i,s){Hf(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Lu(t,n,!1),lt(e,t,s);r=t.stateNode,Mg.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=zn(t,e.child,null,s),t.child=zn(t,null,a,s)):ue(e,t,a,s),t.memoizedState=r.state,i&&Lu(t,n,!0),t.child}function Wf(e){var t=e.stateNode;t.pendingContext?Ou(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ou(e,t.context,!1),pl(e,t.containerInfo)}function qu(e,t,n,r,i){return bn(),ll(i),t.flags|=256,ue(e,t,n,r),t.child}var fa={dehydrated:null,treeContext:null,retryLane:0};function ha(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kf(e,t,n){var r=t.pendingProps,i=V.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),F(V,i&1),e===null)return sa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Rs(o,r,0,null),e=Yt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ha(n),t.memoizedState=fa,e):Sl(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return jg(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=At(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=At(a,s):(s=Yt(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?ha(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=fa,r}return s=e.child,e=s.sibling,r=At(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sl(e,t){return t=Rs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gi(e,t,n,r){return r!==null&&ll(r),zn(t,e.child,null,n),e=Sl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jg(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=co(Error(w(422))),gi(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Rs({mode:"visible",children:r.children},i,0,null),s=Yt(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&zn(t,e.child,null,o),t.child.memoizedState=ha(o),t.memoizedState=fa,s);if(!(t.mode&1))return gi(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=co(s,r,void 0),gi(e,t,o,r)}if(a=(o&e.childLanes)!==0,pe||a){if(r=ee,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,at(e,i),Fe(r,e,i,-1))}return Nl(),r=co(Error(w(421))),gi(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=qg.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,_e=Pt(i.nextSibling),Ee=t,B=!0,je=null,e!==null&&(Ce[Pe++]=et,Ce[Pe++]=tt,Ce[Pe++]=Zt,et=e.id,tt=e.overflow,Zt=t),t=Sl(t,r.children),t.flags|=4096,t)}function Yu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),oa(e.return,t,n)}function fo(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gf(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ue(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yu(e,n,t);else if(e.tag===19)Yu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(F(V,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&es(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),fo(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&es(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}fo(t,!0,n,null,s);break;case"together":fo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=At(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=At(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ug(e,t,n){switch(t.tag){case 3:Wf(t),bn();break;case 5:_f(t);break;case 1:ge(t.type)&&Qi(t);break;case 4:pl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;F(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(F(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Kf(e,t,n):(F(V,V.current&1),e=lt(e,t,n),e!==null?e.sibling:null);F(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Gf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Vf(e,t,n)}return lt(e,t,n)}var Qf,pa,qf,Yf;Qf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pa=function(){};qf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Gt(Ke.current);var s=null;switch(n){case"input":i=jo(e,i),r=jo(e,r),s=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),s=[];break;case"textarea":i=bo(e,i),r=bo(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ki)}$o(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Sr.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Sr.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&z("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Yf=function(e,t,n,r){n!==r&&(t.flags|=4)};function rr(e,t){if(!B)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Fg(e,t,n){var r=t.pendingProps;switch(al(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return ge(t.type)&&Gi(),se(t),null;case 3:return r=t.stateNode,$n(),$(me),$(ae),gl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,je!==null&&(Sa(je),je=null))),pa(e,t),se(t),null;case 5:ml(t);var i=Gt(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)qf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return se(t),null}if(e=Gt(Ke.current),pi(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[He]=t,r[Or]=s,e=(t.mode&1)!==0,n){case"dialog":z("cancel",r),z("close",r);break;case"iframe":case"object":case"embed":z("load",r);break;case"video":case"audio":for(i=0;i<lr.length;i++)z(lr[i],r);break;case"source":z("error",r);break;case"img":case"image":case"link":z("error",r),z("load",r);break;case"details":z("toggle",r);break;case"input":su(r,s),z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},z("invalid",r);break;case"textarea":au(r,s),z("invalid",r)}$o(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&hi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hi(r.textContent,a,e),i=["children",""+a]):Sr.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&z("scroll",r)}switch(n){case"input":si(r),ou(r,s,!0);break;case"textarea":si(r),lu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ki)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[He]=t,e[Or]=r,Qf(e,t,!1,!1),t.stateNode=e;e:{switch(o=Bo(n,r),n){case"dialog":z("cancel",e),z("close",e),i=r;break;case"iframe":case"object":case"embed":z("load",e),i=r;break;case"video":case"audio":for(i=0;i<lr.length;i++)z(lr[i],e);i=r;break;case"source":z("error",e),i=r;break;case"img":case"image":case"link":z("error",e),z("load",e),i=r;break;case"details":z("toggle",e),i=r;break;case"input":su(e,r),i=jo(e,r),z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),z("invalid",e);break;case"textarea":au(e,r),i=bo(e,r),z("invalid",e);break;default:i=r}$o(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Td(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Id(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ir(e,l):typeof l=="number"&&Ir(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sr.hasOwnProperty(s)?l!=null&&s==="onScroll"&&z("scroll",e):l!=null&&Ka(e,s,l,o))}switch(n){case"input":si(e),ou(e,r,!1);break;case"textarea":si(e),lu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Rn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Rn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ki)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Yf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Gt(Dr.current),Gt(Ke.current),pi(t)){if(r=t.stateNode,n=t.memoizedProps,r[He]=t,(s=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:hi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&hi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[He]=t,t.stateNode=r}return se(t),null;case 13:if($(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(B&&_e!==null&&t.mode&1&&!(t.flags&128))hf(),bn(),t.flags|=98560,s=!1;else if(s=pi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(w(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[He]=t}else bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;se(t),s=!1}else je!==null&&(Sa(je),je=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?J===0&&(J=3):Nl())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return $n(),pa(e,t),e===null&&xr(t.stateNode.containerInfo),se(t),null;case 10:return dl(t.type._context),se(t),null;case 17:return ge(t.type)&&Gi(),se(t),null;case 19:if($(V),s=t.memoizedState,s===null)return se(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)rr(s,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=es(e),o!==null){for(t.flags|=128,rr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return F(V,V.current&1|2),t.child}e=e.sibling}s.tail!==null&&Q()>Vn&&(t.flags|=128,r=!0,rr(s,!1),t.lanes=4194304)}else{if(!r)if(e=es(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),rr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!B)return se(t),null}else 2*Q()-s.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,rr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Q(),t.sibling=null,n=V.current,F(V,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return Pl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function bg(e,t){switch(al(t),t.tag){case 1:return ge(t.type)&&Gi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $n(),$(me),$(ae),gl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ml(t),null;case 13:if($(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(V),null;case 4:return $n(),null;case 10:return dl(t.type._context),null;case 22:case 23:return Pl(),null;case 24:return null;default:return null}}var vi=!1,oe=!1,zg=typeof WeakSet=="function"?WeakSet:Set,I=null;function Cn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function ma(e,t,n){try{n()}catch(r){K(e,t,r)}}var Ju=!1;function $g(e,t){if(Xo=Vi,e=Zd(),sl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,p=e,m=null;t:for(;;){for(var y;p!==n||i!==0&&p.nodeType!==3||(a=o+i),p!==s||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(y=p.firstChild)!==null;)m=p,p=y;for(;;){if(p===e)break t;if(m===n&&++u===i&&(a=o),m===s&&++h===r&&(l=o),(y=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zo={focusedElem:e,selectionRange:n},Vi=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,M=_.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?E:De(t.type,E),M);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(g){K(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return _=Ju,Ju=!1,_}function vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&ma(t,n,s)}i=i.next}while(i!==r)}}function Ps(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ga(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jf(e){var t=e.alternate;t!==null&&(e.alternate=null,Jf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[He],delete t[Or],delete t[na],delete t[Ig],delete t[kg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xf(e){return e.tag===5||e.tag===3||e.tag===4}function Xu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function va(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ki));else if(r!==4&&(e=e.child,e!==null))for(va(e,t,n),e=e.sibling;e!==null;)va(e,t,n),e=e.sibling}function ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ya(e,t,n),e=e.sibling;e!==null;)ya(e,t,n),e=e.sibling}var te=null,Me=!1;function ft(e,t,n){for(n=n.child;n!==null;)Zf(e,t,n),n=n.sibling}function Zf(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(ws,n)}catch{}switch(n.tag){case 5:oe||Cn(n,t);case 6:var r=te,i=Me;te=null,ft(e,t,n),te=r,Me=i,te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Me?(e=te,n=n.stateNode,e.nodeType===8?io(e.parentNode,n):e.nodeType===1&&io(e,n),Pr(e)):io(te,n.stateNode));break;case 4:r=te,i=Me,te=n.stateNode.containerInfo,Me=!0,ft(e,t,n),te=r,Me=i;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ma(n,t,o),i=i.next}while(i!==r)}ft(e,t,n);break;case 1:if(!oe&&(Cn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){K(n,t,a)}ft(e,t,n);break;case 21:ft(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,ft(e,t,n),oe=r):ft(e,t,n);break;default:ft(e,t,n)}}function Zu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new zg),t.forEach(function(r){var i=Yg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:te=a.stateNode,Me=!1;break e;case 3:te=a.stateNode.containerInfo,Me=!0;break e;case 4:te=a.stateNode.containerInfo,Me=!0;break e}a=a.return}if(te===null)throw Error(w(160));Zf(s,o,i),te=null,Me=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){K(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eh(t,e),t=t.sibling}function eh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Be(e),r&4){try{vr(3,e,e.return),Ps(3,e)}catch(E){K(e,e.return,E)}try{vr(5,e,e.return)}catch(E){K(e,e.return,E)}}break;case 1:Le(t,e),Be(e),r&512&&n!==null&&Cn(n,n.return);break;case 5:if(Le(t,e),Be(e),r&512&&n!==null&&Cn(n,n.return),e.flags&32){var i=e.stateNode;try{Ir(i,"")}catch(E){K(e,e.return,E)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_d(i,s),Bo(a,o);var u=Bo(a,s);for(o=0;o<l.length;o+=2){var h=l[o],p=l[o+1];h==="style"?Td(i,p):h==="dangerouslySetInnerHTML"?Id(i,p):h==="children"?Ir(i,p):Ka(i,h,p,u)}switch(a){case"input":Uo(i,s);break;case"textarea":Ed(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?Rn(i,!!s.multiple,y,!1):m!==!!s.multiple&&(s.defaultValue!=null?Rn(i,!!s.multiple,s.defaultValue,!0):Rn(i,!!s.multiple,s.multiple?[]:"",!1))}i[Or]=s}catch(E){K(e,e.return,E)}}break;case 6:if(Le(t,e),Be(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(E){K(e,e.return,E)}}break;case 3:if(Le(t,e),Be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pr(t.containerInfo)}catch(E){K(e,e.return,E)}break;case 4:Le(t,e),Be(e);break;case 13:Le(t,e),Be(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Tl=Q())),r&4&&Zu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||h,Le(t,e),oe=u):Le(t,e),Be(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(I=e,h=e.child;h!==null;){for(p=I=h;I!==null;){switch(m=I,y=m.child,m.tag){case 0:case 11:case 14:case 15:vr(4,m,m.return);break;case 1:Cn(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(E){K(r,n,E)}}break;case 5:Cn(m,m.return);break;case 22:if(m.memoizedState!==null){tc(p);continue}}y!==null?(y.return=m,I=y):tc(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=kd("display",o))}catch(E){K(e,e.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(E){K(e,e.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Le(t,e),Be(e),r&4&&Zu(e);break;case 21:break;default:Le(t,e),Be(e)}}function Be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xf(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ir(i,""),r.flags&=-33);var s=Xu(e);ya(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Xu(e);va(e,a,o);break;default:throw Error(w(161))}}catch(l){K(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bg(e,t,n){I=e,th(e)}function th(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vi;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||oe;a=vi;var u=oe;if(vi=o,(oe=l)&&!u)for(I=i;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?nc(i):l!==null?(l.return=o,I=l):nc(i);for(;s!==null;)I=s,th(s),s=s.sibling;I=i,vi=a,oe=u}ec(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,I=s):ec(e)}}function ec(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||Ps(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Uu(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uu(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Pr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}oe||t.flags&512&&ga(t)}catch(m){K(t,t.return,m)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function tc(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function nc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ps(4,t)}catch(l){K(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){K(t,i,l)}}var s=t.return;try{ga(t)}catch(l){K(t,s,l)}break;case 5:var o=t.return;try{ga(t)}catch(l){K(t,o,l)}}}catch(l){K(t,t.return,l)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var Vg=Math.ceil,rs=dt.ReactCurrentDispatcher,Il=dt.ReactCurrentOwner,Re=dt.ReactCurrentBatchConfig,L=0,ee=null,q=null,ne=0,we=0,Pn=Ft(0),J=0,Fr=null,tn=0,Ns=0,kl=0,yr=null,he=null,Tl=0,Vn=1/0,Xe=null,is=!1,wa=null,Rt=null,yi=!1,It=null,ss=0,wr=0,_a=null,Ai=-1,Oi=0;function ce(){return L&6?Q():Ai!==-1?Ai:Ai=Q()}function xt(e){return e.mode&1?L&2&&ne!==0?ne&-ne:Cg.transition!==null?(Oi===0&&(Oi=Ud()),Oi):(e=D,e!==0||(e=window.event,e=e===void 0?16:Hd(e.type)),e):1}function Fe(e,t,n,r){if(50<wr)throw wr=0,_a=null,Error(w(185));Wr(e,n,r),(!(L&2)||e!==ee)&&(e===ee&&(!(L&2)&&(Ns|=n),J===4&&vt(e,ne)),ve(e,r),n===1&&L===0&&!(t.mode&1)&&(Vn=Q()+500,ks&&bt()))}function ve(e,t){var n=e.callbackNode;Cm(e,t);var r=Bi(e,e===ee?ne:0);if(r===0)n!==null&&du(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&du(n),t===1)e.tag===0?Tg(rc.bind(null,e)):cf(rc.bind(null,e)),Eg(function(){!(L&6)&&bt()}),n=null;else{switch(Fd(r)){case 1:n=Ja;break;case 4:n=Md;break;case 16:n=$i;break;case 536870912:n=jd;break;default:n=$i}n=uh(n,nh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nh(e,t){if(Ai=-1,Oi=0,L&6)throw Error(w(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=Bi(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=os(e,r);else{t=r;var i=L;L|=2;var s=ih();(ee!==e||ne!==t)&&(Xe=null,Vn=Q()+500,qt(e,t));do try{Kg();break}catch(a){rh(e,a)}while(1);cl(),rs.current=s,L=i,q!==null?t=0:(ee=null,ne=0,t=J)}if(t!==0){if(t===2&&(i=Go(e),i!==0&&(r=i,t=Ea(e,i))),t===1)throw n=Fr,qt(e,0),vt(e,r),ve(e,Q()),n;if(t===6)vt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Hg(i)&&(t=os(e,r),t===2&&(s=Go(e),s!==0&&(r=s,t=Ea(e,s))),t===1))throw n=Fr,qt(e,0),vt(e,r),ve(e,Q()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Vt(e,he,Xe);break;case 3:if(vt(e,r),(r&130023424)===r&&(t=Tl+500-Q(),10<t)){if(Bi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ce(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ta(Vt.bind(null,e,he,Xe),t);break}Vt(e,he,Xe);break;case 4:if(vt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ue(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vg(r/1960))-r,10<r){e.timeoutHandle=ta(Vt.bind(null,e,he,Xe),r);break}Vt(e,he,Xe);break;case 5:Vt(e,he,Xe);break;default:throw Error(w(329))}}}return ve(e,Q()),e.callbackNode===n?nh.bind(null,e):null}function Ea(e,t){var n=yr;return e.current.memoizedState.isDehydrated&&(qt(e,t).flags|=256),e=os(e,t),e!==2&&(t=he,he=n,t!==null&&Sa(t)),e}function Sa(e){he===null?he=e:he.push.apply(he,e)}function Hg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!be(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vt(e,t){for(t&=~kl,t&=~Ns,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ue(t),r=1<<n;e[n]=-1,t&=~r}}function rc(e){if(L&6)throw Error(w(327));Dn();var t=Bi(e,0);if(!(t&1))return ve(e,Q()),null;var n=os(e,t);if(e.tag!==0&&n===2){var r=Go(e);r!==0&&(t=r,n=Ea(e,r))}if(n===1)throw n=Fr,qt(e,0),vt(e,t),ve(e,Q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Vt(e,he,Xe),ve(e,Q()),null}function Cl(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(Vn=Q()+500,ks&&bt())}}function nn(e){It!==null&&It.tag===0&&!(L&6)&&Dn();var t=L;L|=1;var n=Re.transition,r=D;try{if(Re.transition=null,D=1,e)return e()}finally{D=r,Re.transition=n,L=t,!(L&6)&&bt()}}function Pl(){we=Pn.current,$(Pn)}function qt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_g(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(al(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Gi();break;case 3:$n(),$(me),$(ae),gl();break;case 5:ml(r);break;case 4:$n();break;case 13:$(V);break;case 19:$(V);break;case 10:dl(r.type._context);break;case 22:case 23:Pl()}n=n.return}if(ee=e,q=e=At(e.current,null),ne=we=t,J=0,Fr=null,kl=Ns=tn=0,he=yr=null,Kt!==null){for(t=0;t<Kt.length;t++)if(n=Kt[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kt=null}return e}function rh(e,t){do{var n=q;try{if(cl(),Ni.current=ns,ts){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ts=!1}if(en=0,Z=Y=H=null,gr=!1,Mr=0,Il.current=null,n===null||n.return===null){J=1,Fr=t,q=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=ne,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=Hu(o);if(y!==null){y.flags&=-257,Wu(y,o,a,s,t),y.mode&1&&Vu(s,u,t),t=y,l=u;var _=t.updateQueue;if(_===null){var E=new Set;E.add(l),t.updateQueue=E}else _.add(l);break e}else{if(!(t&1)){Vu(s,u,t),Nl();break e}l=Error(w(426))}}else if(B&&a.mode&1){var M=Hu(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Wu(M,o,a,s,t),ll(Bn(l,a));break e}}s=l=Bn(l,a),J!==4&&(J=2),yr===null?yr=[s]:yr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var d=zf(s,l,t);ju(s,d);break e;case 1:a=l;var c=s.type,f=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Rt===null||!Rt.has(f)))){s.flags|=65536,t&=-t,s.lanes|=t;var g=$f(s,a,t);ju(s,g);break e}}s=s.return}while(s!==null)}oh(n)}catch(S){t=S,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function ih(){var e=rs.current;return rs.current=ns,e===null?ns:e}function Nl(){(J===0||J===3||J===2)&&(J=4),ee===null||!(tn&268435455)&&!(Ns&268435455)||vt(ee,ne)}function os(e,t){var n=L;L|=2;var r=ih();(ee!==e||ne!==t)&&(Xe=null,qt(e,t));do try{Wg();break}catch(i){rh(e,i)}while(1);if(cl(),L=n,rs.current=r,q!==null)throw Error(w(261));return ee=null,ne=0,J}function Wg(){for(;q!==null;)sh(q)}function Kg(){for(;q!==null&&!vm();)sh(q)}function sh(e){var t=lh(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?oh(e):q=t,Il.current=null}function oh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bg(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,q=null;return}}else if(n=Fg(n,t,we),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);J===0&&(J=5)}function Vt(e,t,n){var r=D,i=Re.transition;try{Re.transition=null,D=1,Gg(e,t,n,r)}finally{Re.transition=i,D=r}return null}function Gg(e,t,n,r){do Dn();while(It!==null);if(L&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Pm(e,s),e===ee&&(q=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yi||(yi=!0,uh($i,function(){return Dn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Re.transition,Re.transition=null;var o=D;D=1;var a=L;L|=4,Il.current=null,$g(e,n),eh(n,e),hg(Zo),Vi=!!Xo,Zo=Xo=null,e.current=n,Bg(n),ym(),L=a,D=o,Re.transition=s}else e.current=n;if(yi&&(yi=!1,It=e,ss=i),s=e.pendingLanes,s===0&&(Rt=null),Em(n.stateNode),ve(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(is)throw is=!1,e=wa,wa=null,e;return ss&1&&e.tag!==0&&Dn(),s=e.pendingLanes,s&1?e===_a?wr++:(wr=0,_a=e):wr=0,bt(),null}function Dn(){if(It!==null){var e=Fd(ss),t=Re.transition,n=D;try{if(Re.transition=null,D=16>e?16:e,It===null)var r=!1;else{if(e=It,It=null,ss=0,L&6)throw Error(w(331));var i=L;for(L|=4,I=e.current;I!==null;){var s=I,o=s.child;if(I.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(I=u;I!==null;){var h=I;switch(h.tag){case 0:case 11:case 15:vr(8,h,s)}var p=h.child;if(p!==null)p.return=h,I=p;else for(;I!==null;){h=I;var m=h.sibling,y=h.return;if(Jf(h),h===u){I=null;break}if(m!==null){m.return=y,I=m;break}I=y}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var M=E.sibling;E.sibling=null,E=M}while(E!==null)}}I=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,I=o;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vr(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,I=d;break e}I=s.return}}var c=e.current;for(I=c;I!==null;){o=I;var f=o.child;if(o.subtreeFlags&2064&&f!==null)f.return=o,I=f;else e:for(o=c;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ps(9,a)}}catch(S){K(a,a.return,S)}if(a===o){I=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,I=g;break e}I=a.return}}if(L=i,bt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(ws,e)}catch{}r=!0}return r}finally{D=n,Re.transition=t}}return!1}function ic(e,t,n){t=Bn(n,t),t=zf(e,t,1),e=Nt(e,t,1),t=ce(),e!==null&&(Wr(e,1,t),ve(e,t))}function K(e,t,n){if(e.tag===3)ic(e,e,n);else for(;t!==null;){if(t.tag===3){ic(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rt===null||!Rt.has(r))){e=Bn(n,e),e=$f(t,e,1),t=Nt(t,e,1),e=ce(),t!==null&&(Wr(t,1,e),ve(t,e));break}}t=t.return}}function Qg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ce(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(J===4||J===3&&(ne&130023424)===ne&&500>Q()-Tl?qt(e,0):kl|=n),ve(e,t)}function ah(e,t){t===0&&(e.mode&1?(t=li,li<<=1,!(li&130023424)&&(li=4194304)):t=1);var n=ce();e=at(e,t),e!==null&&(Wr(e,t,n),ve(e,n))}function qg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ah(e,n)}function Yg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),ah(e,n)}var lh;lh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Ug(e,t,n);pe=!!(e.flags&131072)}else pe=!1,B&&t.flags&1048576&&df(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xi(e,t),e=t.pendingProps;var i=Fn(t,ae.current);Ln(t,n),i=yl(null,t,r,e,i,n);var s=wl();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(s=!0,Qi(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hl(t),i.updater=Ts,t.stateNode=i,i._reactInternals=t,la(t,r,e,n),t=da(null,t,r,!0,s,n)):(t.tag=0,B&&s&&ol(t),ue(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(xi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xg(r),e=De(r,e),i){case 0:t=ca(null,t,r,e,n);break e;case 1:t=Qu(null,t,r,e,n);break e;case 11:t=Ku(null,t,r,e,n);break e;case 14:t=Gu(null,t,r,De(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),ca(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Qu(e,t,r,i,n);case 3:e:{if(Wf(t),e===null)throw Error(w(387));r=t.pendingProps,s=t.memoizedState,i=s.element,mf(e,t),Zi(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Bn(Error(w(423)),t),t=qu(e,t,r,n,i);break e}else if(r!==i){i=Bn(Error(w(424)),t),t=qu(e,t,r,n,i);break e}else for(_e=Pt(t.stateNode.containerInfo.firstChild),Ee=t,B=!0,je=null,n=wf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bn(),r===i){t=lt(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return _f(t),e===null&&sa(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,ea(r,i)?o=null:s!==null&&ea(r,s)&&(t.flags|=32),Hf(e,t),ue(e,t,o,n),t.child;case 6:return e===null&&sa(t),null;case 13:return Kf(e,t,n);case 4:return pl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),Ku(e,t,r,i,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,F(Ji,r._currentValue),r._currentValue=o,s!==null)if(be(s.value,o)){if(s.children===i.children&&!me.current){t=lt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=it(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),oa(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),oa(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ue(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ln(t,n),i=xe(i),r=r(i),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,i=De(r,t.pendingProps),i=De(r.type,i),Gu(e,t,r,i,n);case 15:return Bf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:De(r,i),xi(e,t),t.tag=1,ge(r)?(e=!0,Qi(t)):e=!1,Ln(t,n),vf(t,r,i),la(t,r,i,n),da(null,t,r,!0,e,n);case 19:return Gf(e,t,n);case 22:return Vf(e,t,n)}throw Error(w(156,t.tag))};function uh(e,t){return Dd(e,t)}function Jg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Jg(e,t,n,r)}function Rl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xg(e){if(typeof e=="function")return Rl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qa)return 11;if(e===qa)return 14}return 2}function At(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Li(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Rl(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case vn:return Yt(n.children,i,s,t);case Ga:o=8,i|=8;break;case Oo:return e=Ne(12,n,t,i|2),e.elementType=Oo,e.lanes=s,e;case Lo:return e=Ne(13,n,t,i),e.elementType=Lo,e.lanes=s,e;case Do:return e=Ne(19,n,t,i),e.elementType=Do,e.lanes=s,e;case vd:return Rs(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case md:o=10;break e;case gd:o=9;break e;case Qa:o=11;break e;case qa:o=14;break e;case pt:o=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ne(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Yt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Rs(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=vd,e.lanes=n,e.stateNode={isHidden:!1},e}function ho(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function po(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Zg(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gs(0),this.expirationTimes=Gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function xl(e,t,n,r,i,s,o,a,l){return e=new Zg(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ne(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hl(s),e}function ev(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ch(e){if(!e)return jt;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ge(n))return uf(e,n,t)}return t}function dh(e,t,n,r,i,s,o,a,l){return e=xl(n,r,!0,e,i,s,o,a,l),e.context=ch(null),n=e.current,r=ce(),i=xt(n),s=it(r,i),s.callback=t??null,Nt(n,s,i),e.current.lanes=i,Wr(e,i,r),ve(e,r),e}function xs(e,t,n,r){var i=t.current,s=ce(),o=xt(i);return n=ch(n),t.context===null?t.context=n:t.pendingContext=n,t=it(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(i,t,o),e!==null&&(Fe(e,i,o,s),Pi(e,i,o)),o}function as(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Al(e,t){sc(e,t),(e=e.alternate)&&sc(e,t)}function tv(){return null}var fh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ol(e){this._internalRoot=e}As.prototype.render=Ol.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));xs(e,t,null,null)};As.prototype.unmount=Ol.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){xs(null,e,null,null)}),t[ot]=null}};function As(e){this._internalRoot=e}As.prototype.unstable_scheduleHydration=function(e){if(e){var t=$d();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&Vd(e)}};function Ll(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oc(){}function nv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=as(o);s.call(u)}}var o=dh(t,r,e,0,null,!1,!1,"",oc);return e._reactRootContainer=o,e[ot]=o.current,xr(e.nodeType===8?e.parentNode:e),nn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=as(l);a.call(u)}}var l=xl(e,0,!1,null,null,!1,!1,"",oc);return e._reactRootContainer=l,e[ot]=l.current,xr(e.nodeType===8?e.parentNode:e),nn(function(){xs(t,l,n,r)}),l}function Ls(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=as(o);a.call(l)}}xs(t,o,e,i)}else o=nv(n,t,e,i,r);return as(o)}bd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ar(t.pendingLanes);n!==0&&(Xa(t,n|1),ve(t,Q()),!(L&6)&&(Vn=Q()+500,bt()))}break;case 13:nn(function(){var r=at(e,1);if(r!==null){var i=ce();Fe(r,e,1,i)}}),Al(e,1)}};Za=function(e){if(e.tag===13){var t=at(e,134217728);if(t!==null){var n=ce();Fe(t,e,134217728,n)}Al(e,134217728)}};zd=function(e){if(e.tag===13){var t=xt(e),n=at(e,t);if(n!==null){var r=ce();Fe(n,e,t,r)}Al(e,t)}};$d=function(){return D};Bd=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Ho=function(e,t,n){switch(t){case"input":if(Uo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Is(r);if(!i)throw Error(w(90));wd(r),Uo(r,i)}}}break;case"textarea":Ed(e,n);break;case"select":t=n.value,t!=null&&Rn(e,!!n.multiple,t,!1)}};Nd=Cl;Rd=nn;var rv={usingClientEntryPoint:!1,Events:[Gr,En,Is,Cd,Pd,Cl]},ir={findFiberByHostInstance:Wt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iv={bundleType:ir.bundleType,version:ir.version,rendererPackageName:ir.rendererPackageName,rendererConfig:ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Od(e),e===null?null:e.stateNode},findFiberByHostInstance:ir.findFiberByHostInstance||tv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wi.isDisabled&&wi.supportsFiber)try{ws=wi.inject(iv),We=wi}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rv;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ll(t))throw Error(w(200));return ev(e,t,null,n)};ke.createRoot=function(e,t){if(!Ll(e))throw Error(w(299));var n=!1,r="",i=fh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=xl(e,1,!1,null,null,n,!1,r,i),e[ot]=t.current,xr(e.nodeType===8?e.parentNode:e),new Ol(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Od(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return nn(e)};ke.hydrate=function(e,t,n){if(!Os(t))throw Error(w(200));return Ls(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Ll(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=dh(t,null,e,1,n??null,i,!1,s,o),e[ot]=t.current,xr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new As(t)};ke.render=function(e,t,n){if(!Os(t))throw Error(w(200));return Ls(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!Os(e))throw Error(w(40));return e._reactRootContainer?(nn(function(){Ls(null,null,e,!1,function(){e._reactRootContainer=null,e[ot]=null})}),!0):!1};ke.unstable_batchedUpdates=Cl;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Os(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Ls(e,t,n,!1,r)};ke.version="18.2.0-next-9e3b772b8-20220608";function hh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hh)}catch(e){console.error(e)}}hh(),cd.exports=ke;var sv=cd.exports,ac=sv;xo.createRoot=ac.createRoot,xo.hydrateRoot=ac.hydrateRoot;const ov="/tiktok_clone/assets/tiktokLogo-1846b8cb.svg",ls=({sprite:e,className:t})=>v.jsx("svg",{className:t,children:v.jsx("use",{xlinkHref:ov+e})});var lc;function Ia(){return Ia=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ia.apply(this,arguments)}var av=function(t){return j.createElement("svg",Ia({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",className:"plus_svg__tiktok-qeydvm-StyledPlusIcon plus_svg__e18d3d945",viewBox:"0 0 16 16"},t),lc||(lc=j.createElement("path",{fillRule:"evenodd",d:"M8 2.5a.75.75 0 0 0-.75.75v4h-4a.75.75 0 0 0 0 1.5h4v4a.75.75 0 0 0 1.5 0v-4h4a.75.75 0 0 0 0-1.5h-4v-4A.75.75 0 0 0 8 2.5Z",clipRule:"evenodd"})))},uc;function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}var lv=function(t){return j.createElement("svg",ka({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",className:"vert-elipsis_svg__tiktok-lgo5n0-StyledEllipsisVertical vert-elipsis_svg__e13wiwn64",viewBox:"0 0 48 48"},t),uc||(uc=j.createElement("path",{fillRule:"evenodd",d:"M24 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 16a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 16a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z",clipRule:"evenodd"})))},cc;function Ta(){return Ta=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ta.apply(this,arguments)}var uv=function(t){return j.createElement("svg",Ta({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"rgba(22, 24, 35, .34)",viewBox:"0 0 48 48"},t),cc||(cc=j.createElement("path",{fillRule:"evenodd",d:"M22 10c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12ZM6 22c0-8.837 7.163-16 16-16s16 7.163 16 16c0 3.697-1.254 7.102-3.36 9.811l8.74 8.745a1 1 0 0 1 0 1.415l-1.413 1.414a1 1 0 0 1-1.415 0l-8.74-8.745A15.931 15.931 0 0 1 22 38c-8.837 0-16-7.163-16-16Z",clipRule:"evenodd"})))},dc;function Ca(){return Ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ca.apply(this,arguments)}var cv=function(t){return j.createElement("svg",Ca({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"rgba(254, 44, 85, 1)",viewBox:"0 0 48 48"},t),dc||(dc=j.createElement("path",{fillRule:"evenodd",d:"M24.95 7.84a1.5 1.5 0 0 0-1.901 0l-16.1 13.2a1.5 1.5 0 0 0 .95 2.66h2.332l1.192 13.028A2.5 2.5 0 0 0 13.913 39H21.5a1 1 0 0 0 1-1v-9.685a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V38a1 1 0 0 0 1 1h7.587a2.5 2.5 0 0 0 2.49-2.272L37.769 23.7H40.1a1.5 1.5 0 0 0 .951-2.66l-16.1-13.2Z",clipRule:"evenodd"})))},fc;function Pa(){return Pa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pa.apply(this,arguments)}var dv=function(t){return j.createElement("svg",Pa({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"rgba(22, 24, 35, 1)",viewBox:"0 0 48 48"},t),fc||(fc=j.createElement("path",{fillRule:"evenodd",d:"M18 12.5c-2.41 0-4.415 2.002-4.415 4.535 0 2.532 2.005 4.534 4.415 4.534s4.415-2.002 4.415-4.534c0-2.533-2.005-4.535-4.415-4.535Zm-7.415 4.535c0-4.133 3.292-7.535 7.415-7.535s7.415 3.402 7.415 7.535c0 4.132-3.292 7.534-7.415 7.534s-7.415-3.402-7.415-7.534ZM18 29.879c-3.92 0-7.26 2.683-8.303 6.388-.15.532-.659.904-1.204.814l-.986-.162c-.545-.09-.919-.606-.784-1.141 1.284-5.1 5.828-8.899 11.277-8.899 5.449 0 9.993 3.8 11.277 8.899.135.535-.239 1.051-.784 1.14l-.986.163c-.545.09-1.054-.282-1.204-.814C25.26 32.562 21.92 29.88 18 29.88ZM33 31.537c-.755 0-1.48.131-2.155.372-.52.186-1.126.015-1.39-.47l-.478-.878c-.264-.485-.086-1.098.424-1.31A9.384 9.384 0 0 1 33 28.538c4.455 0 8.16 3.093 9.27 7.244.143.534-.231 1.05-.777 1.139l-.986.16c-.546.09-1.052-.284-1.218-.811-.867-2.769-3.379-4.732-6.289-4.732ZM33 18.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM27.5 21a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0Z",clipRule:"evenodd"})))},hc,pc;function Na(){return Na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Na.apply(this,arguments)}var fv=function(t){return j.createElement("svg",Na({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"rgba(22, 24, 35, 1)",viewBox:"0 0 48 48"},t),hc||(hc=j.createElement("path",{fillRule:"evenodd",d:"M24 37.4a13.4 13.4 0 1 0 0-26.8 13.4 13.4 0 0 0 0 26.8ZM40.5 24a16.5 16.5 0 1 1-33 0 16.5 16.5 0 0 1 33 0Z",clipRule:"evenodd"})),pc||(pc=j.createElement("path",{fillRule:"evenodd",d:"M27.13 27.18a2 2 0 0 0 .93-1.32l1.84-9.33a.6.6 0 0 0-.9-.63l-8.14 4.92a2 2 0 0 0-.92 1.32l-1.84 9.33c-.1.52.45.9.9.63l8.13-4.92Zm-5.04-.45 3.11-1.89.7-3.57-3.1 1.89-.7 3.57Z",clipRule:"evenodd"})))},mc,gc;function Ra(){return Ra=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ra.apply(this,arguments)}var hv=function(t){return j.createElement("svg",Ra({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"rgba(22, 24, 35, 1)"},t),mc||(mc=j.createElement("path",{fillRule:"evenodd",d:"M7.785 10.333c-.83 0-1.452.646-1.452 1.381v8.572c0 .735.622 1.38 1.452 1.38h10.79c.83 0 1.451-.645 1.451-1.38V17.56a1 1 0 0 1 1.595-.804l4.045 2.993V12.25l-4.045 2.993a1 1 0 0 1-1.595-.804v-2.726c0-.735-.622-1.38-1.452-1.38H7.785Zm17.9 1.904-.001.001h.002Zm-.013-.02a.053.053 0 0 0 .004.01.039.039 0 0 0 .01.01l.001.001h-.003m-21.351-.524c0-1.894 1.574-3.38 3.452-3.38h10.79c1.878 0 3.451 1.486 3.451 3.38v.742l2.47-1.827a2.005 2.005 0 0 1 2.058-.193 1.95 1.95 0 0 1 1.112 1.755v7.619a1.95 1.95 0 0 1-1.112 1.754 2.005 2.005 0 0 1-2.058-.193l-2.47-1.827v.742c0 1.895-1.573 3.38-3.452 3.38H7.785c-1.878 0-3.452-1.485-3.452-3.38v-8.572Z",clipRule:"evenodd"})),gc||(gc=j.createElement("path",{d:"M15 15.134a1 1 0 0 1 0 1.732l-3 1.732a1 1 0 0 1-1.5-.866v-3.464a1 1 0 0 1 1.5-.866l3 1.732Z"})))};const pv=()=>{const[e,t]=j.useState(!1),n=()=>{t(!0)};return{HoverMenu:({children:i,className:s})=>v.jsx("div",{className:"transition-all duration-1000 ease-in-out bg-white "+s+`${e?" opacity-100":" opacity-0 hidden"}`,onMouseEnter:()=>{n()},onMouseLeave:()=>{t(!1)},children:i}),show:e,showHoverMenu:n}},mv=()=>{const[e,t]=j.useState(!1);return{Modal:({children:i,className:s=""})=>v.jsxs("div",{className:`${e?" opacity-100":" opacity-0 hidden"}`,children:[v.jsx("div",{className:"w-screen h-screen top-0 bg-black bg-opacity-80 absolute",onClick:()=>{t(!1)}}),v.jsxs("div",{className:"transition-all duration-1000 ease-in-out bg-white absolute top-32 left-1/3 w-1/3 h-2/3 rounded p-12"+s,children:[v.jsx("span",{className:"text-black absolute top-4 right-4 font-bold text-2xl cursor-pointer",onClick:()=>t(!1),children:"X"}),i]})]}),show:e,showModal:()=>{t(!0)}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},gv=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,h=s>>2,p=(s&3)<<4|a>>4;let m=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(m=64)),r.push(n[h],n[p],n[m],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ph(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gv(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const p=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||p==null)throw new vv;const m=s<<2|a>>4;if(r.push(m),u!==64){const y=a<<4&240|u>>2;if(r.push(y),p!==64){const _=u<<6&192|p;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yv=function(e){const t=ph(e);return mh.encodeByteArray(t,!0)},gh=function(e){return yv(e).replace(/\./g,"")},vh=function(e){try{return mh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=()=>wv().__FIREBASE_DEFAULTS__,Ev=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Sv=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&vh(e[1]);return t&&JSON.parse(t)},Dl=()=>{try{return _v()||Ev()||Sv()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Iv=e=>{var t,n;return(n=(t=Dl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},yh=()=>{var e;return(e=Dl())===null||e===void 0?void 0:e.config},wh=e=>{var t;return(t=Dl())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Tv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function _h(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Cv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Pv(){const e=le();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Eh(){try{return typeof indexedDB=="object"}catch{return!1}}function Sh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function Nv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="FirebaseError";class Je extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Rv,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?xv(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Je(i,a,r)}}function xv(e,t){return e.replace(Av,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Av=/\{\$([^}]+)}/g;function Ov(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function br(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(vc(s)&&vc(o)){if(!br(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vc(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function ur(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function cr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Lv(e,t){const n=new Dv(e,t);return n.subscribe.bind(n)}class Dv{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Mv(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=mo),i.error===void 0&&(i.error=mo),i.complete===void 0&&(i.complete=mo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Mv(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function mo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=1e3,Uv=2,Fv=4*60*60*1e3,bv=.5;function yc(e,t=jv,n=Uv){const r=t*Math.pow(n,e),i=Math.round(bv*r*(Math.random()-.5)*2);return Math.min(Fv,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){return e&&e._delegate?e._delegate:e}class Ye{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new kv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Bv(t))try{this.getOrInitializeService({instanceIdentifier:Ht})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ht){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ht){return this.instances.has(t)}getOptions(t=Ht){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$v(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ht){return this.component?this.component.multipleInstances?t:Ht:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $v(e){return e===Ht?void 0:e}function Bv(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new zv(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const Hv={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Wv=U.INFO,Kv={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},Gv=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Kv[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ml{constructor(t){this.name=t,this._logLevel=Wv,this._logHandler=Gv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in U))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...t),this._logHandler(this,U.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...t),this._logHandler(this,U.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,U.INFO,...t),this._logHandler(this,U.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,U.WARN,...t),this._logHandler(this,U.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...t),this._logHandler(this,U.ERROR,...t)}}const Qv=(e,t)=>t.some(n=>e instanceof n);let wc,_c;function qv(){return wc||(wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yv(){return _c||(_c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ih=new WeakMap,xa=new WeakMap,kh=new WeakMap,go=new WeakMap,jl=new WeakMap;function Jv(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ot(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Ih.set(n,e)}).catch(()=>{}),jl.set(t,e),t}function Xv(e){if(xa.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});xa.set(e,t)}let Aa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return xa.get(e);if(t==="objectStoreNames")return e.objectStoreNames||kh.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zv(e){Aa=e(Aa)}function e0(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(vo(this),t,...n);return kh.set(r,t.sort?t.sort():[t]),Ot(r)}:Yv().includes(e)?function(...t){return e.apply(vo(this),t),Ot(Ih.get(this))}:function(...t){return Ot(e.apply(vo(this),t))}}function t0(e){return typeof e=="function"?e0(e):(e instanceof IDBTransaction&&Xv(e),Qv(e,qv())?new Proxy(e,Aa):e)}function Ot(e){if(e instanceof IDBRequest)return Jv(e);if(go.has(e))return go.get(e);const t=t0(e);return t!==e&&(go.set(e,t),jl.set(t,e)),t}const vo=e=>jl.get(e);function n0(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Ot(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ot(o.result),l.oldVersion,l.newVersion,Ot(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const r0=["get","getKey","getAll","getAllKeys","count"],i0=["put","add","delete","clear"],yo=new Map;function Ec(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(yo.get(t))return yo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=i0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||r0.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return yo.set(t,s),s}Zv(e=>({...e,get:(t,n,r)=>Ec(t,n)||e.get(t,n,r),has:(t,n)=>!!Ec(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(o0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function o0(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Oa="@firebase/app",Sc="0.9.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Ml("@firebase/app"),a0="@firebase/app-compat",l0="@firebase/analytics-compat",u0="@firebase/analytics",c0="@firebase/app-check-compat",d0="@firebase/app-check",f0="@firebase/auth",h0="@firebase/auth-compat",p0="@firebase/database",m0="@firebase/database-compat",g0="@firebase/functions",v0="@firebase/functions-compat",y0="@firebase/installations",w0="@firebase/installations-compat",_0="@firebase/messaging",E0="@firebase/messaging-compat",S0="@firebase/performance",I0="@firebase/performance-compat",k0="@firebase/remote-config",T0="@firebase/remote-config-compat",C0="@firebase/storage",P0="@firebase/storage-compat",N0="@firebase/firestore",R0="@firebase/firestore-compat",x0="firebase",A0="10.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="[DEFAULT]",O0={[Oa]:"fire-core",[a0]:"fire-core-compat",[u0]:"fire-analytics",[l0]:"fire-analytics-compat",[d0]:"fire-app-check",[c0]:"fire-app-check-compat",[f0]:"fire-auth",[h0]:"fire-auth-compat",[p0]:"fire-rtdb",[m0]:"fire-rtdb-compat",[g0]:"fire-fn",[v0]:"fire-fn-compat",[y0]:"fire-iid",[w0]:"fire-iid-compat",[_0]:"fire-fcm",[E0]:"fire-fcm-compat",[S0]:"fire-perf",[I0]:"fire-perf-compat",[k0]:"fire-rc",[T0]:"fire-rc-compat",[C0]:"fire-gcs",[P0]:"fire-gcs-compat",[N0]:"fire-fst",[R0]:"fire-fst-compat","fire-js":"fire-js",[x0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Map,Da=new Map;function L0(e,t){try{e.container.addComponent(t)}catch(n){rn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ut(e){const t=e.name;if(Da.has(t))return rn.debug(`There were multiple attempts to register component ${t}.`),!1;Da.set(t,e);for(const n of us.values())L0(n,e);return!0}function Gn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new dn("app","Firebase",D0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=A0;function Th(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:La,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(n||(n=yh()),!n)throw Lt.create("no-options");const s=us.get(i);if(s){if(br(n,s.options)&&br(r,s.config))return s;throw Lt.create("duplicate-app",{appName:i})}const o=new Vv(i);for(const l of Da.values())o.addComponent(l);const a=new M0(n,r,o);return us.set(i,a),a}function Ch(e=La){const t=us.get(e);if(!t&&e===La&&yh())return Th();if(!t)throw Lt.create("no-app",{appName:e});return t}function Ge(e,t,n){var r;let i=(r=O0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),rn.warn(a.join(" "));return}ut(new Ye(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="firebase-heartbeat-database",U0=1,zr="firebase-heartbeat-store";let wo=null;function Ph(){return wo||(wo=n0(j0,U0,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(zr)}}}).catch(e=>{throw Lt.create("idb-open",{originalErrorMessage:e.message})})),wo}async function F0(e){try{return await(await Ph()).transaction(zr).objectStore(zr).get(Nh(e))}catch(t){if(t instanceof Je)rn.warn(t.message);else{const n=Lt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});rn.warn(n.message)}}}async function Ic(e,t){try{const r=(await Ph()).transaction(zr,"readwrite");await r.objectStore(zr).put(t,Nh(e)),await r.done}catch(n){if(n instanceof Je)rn.warn(n.message);else{const r=Lt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rn.warn(r.message)}}}function Nh(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=1024,z0=30*24*60*60*1e3;class $0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new V0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=kc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=z0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=kc(),{heartbeatsToSend:n,unsentEntries:r}=B0(this._heartbeatsCache.heartbeats),i=gh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function kc(){return new Date().toISOString().substring(0,10)}function B0(e,t=b0){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class V0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eh()?Sh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await F0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ic(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Tc(e){return gh(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H0(e){ut(new Ye("platform-logger",t=>new s0(t),"PRIVATE")),ut(new Ye("heartbeat",t=>new $0(t),"PRIVATE")),Ge(Oa,Sc,e),Ge(Oa,Sc,"esm2017"),Ge("fire-js","")}H0("");function Ul(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Cc(e){return e!==void 0&&e.enterprise!==void 0}class W0{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Rh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const K0=Rh,xh=new dn("auth","Firebase",Rh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new Ml("@firebase/auth");function G0(e,...t){cs.logLevel<=U.WARN&&cs.warn(`Auth (${Yr}): ${e}`,...t)}function Di(e,...t){cs.logLevel<=U.ERROR&&cs.error(`Auth (${Yr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e,...t){throw Fl(e,...t)}function Qe(e,...t){return Fl(e,...t)}function Q0(e,t,n){const r=Object.assign(Object.assign({},K0()),{[t]:n});return new dn("auth","Firebase",r).create(t,{appName:e.name})}function Fl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return xh.create(e,...t)}function N(e,t,...n){if(!e)throw Fl(t,...n)}function nt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Di(t),new Error(t)}function ct(e,t){e||nt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function q0(){return Pc()==="http:"||Pc()==="https:"}function Pc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q0()||_h()||"connection"in navigator)?navigator.onLine:!0}function J0(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,n){this.shortDelay=t,this.longDelay=n,ct(n>t,"Short delay should be less than long delay!"),this.isMobile=Tv()||Cv()}get(){return Y0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(e,t){ct(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=new Jr(3e4,6e4);function fn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function hn(e,t,n,r,i={}){return Oh(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=qr(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Ah.fetch()(Lh(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Oh(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},X0),t);try{const i=new ey(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _i(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _i(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _i(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw _i(e,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Q0(e,h,u);ze(e,h)}}catch(i){if(i instanceof Je)throw i;ze(e,"network-request-failed",{message:String(i)})}}async function Xr(e,t,n,r,i={}){const s=await hn(e,t,n,r,i);return"mfaPendingCredential"in s&&ze(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Lh(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?bl(e.config,i):`${e.config.apiScheme}://${i}`}class ey{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qe(this.auth,"network-request-failed")),Z0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _i(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Qe(e,t,r);return i.customData._tokenResponse=n,i}async function ty(e,t){return hn(e,"GET","/v2/recaptchaConfig",fn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(e,t){return hn(e,"POST","/v1/accounts:delete",t)}async function ry(e,t){return hn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function iy(e,t=!1){const n=$e(e),r=await n.getIdToken(t),i=zl(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_r(_o(i.auth_time)),issuedAtTime:_r(_o(i.iat)),expirationTime:_r(_o(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _o(e){return Number(e)*1e3}function zl(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Di("JWT malformed, contained fewer than 3 sections"),null;try{const i=vh(n);return i?JSON.parse(i):(Di("Failed to decode base64 JWT payload"),null)}catch(i){return Di("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sy(e){const t=zl(e);return N(t,"internal-error"),N(typeof t.exp<"u","internal-error"),N(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Je&&oy(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function oy({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_r(this.lastLoginAt),this.creationTime=_r(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(e){var t;const n=e.auth,r=await e.getIdToken(),i=await $r(e,ry(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?cy(s.providerUserInfo):[],a=uy(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Dh(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,p)}async function ly(e){const t=$e(e);await ds(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function uy(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function cy(e){return e.map(t=>{var{providerId:n}=t,r=Ul(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dy(e,t){const n=await Oh(e,{},async()=>{const r=qr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Lh(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ah.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){N(t.idToken,"internal-error"),N(typeof t.idToken<"u","internal-error"),N(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):sy(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return N(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await dy(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Br;return r&&(N(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(e,t){N(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Jt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Ul(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ay(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Dh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await $r(this,this.stsTokenManager.getToken(this.auth,t));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return iy(this,t)}reload(){return ly(this)}_assign(t){this!==t&&(N(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Jt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ds(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await $r(this,ny(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,h;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,d=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:f,emailVerified:g,isAnonymous:S,providerData:T,stsTokenManager:C}=n;N(f&&C,t,"internal-error");const P=Br.fromJSON(this.name,C);N(typeof f=="string",t,"internal-error"),ht(p,t.name),ht(m,t.name),N(typeof g=="boolean",t,"internal-error"),N(typeof S=="boolean",t,"internal-error"),ht(y,t.name),ht(_,t.name),ht(E,t.name),ht(M,t.name),ht(d,t.name),ht(c,t.name);const b=new Jt({uid:f,auth:t,email:m,emailVerified:g,displayName:p,isAnonymous:S,photoURL:_,phoneNumber:y,tenantId:E,stsTokenManager:P,createdAt:d,lastLoginAt:c});return T&&Array.isArray(T)&&(b.providerData=T.map(A=>Object.assign({},A))),M&&(b._redirectEventId=M),b}static async _fromIdTokenResponse(t,n,r=!1){const i=new Br;i.updateFromServerResponse(n);const s=new Jt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ds(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=new Map;function rt(e){ct(e instanceof Function,"Expected a class definition");let t=Nc.get(e);return t?(ct(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Nc.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Mh.type="NONE";const Rc=Mh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e,t,n){return`firebase:${e}:${t}:${n}`}class Mn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Mi(this.userKey,i.apiKey,s),this.fullPersistenceKey=Mi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Jt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Mn(rt(Rc),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||rt(Rc);const o=Mi(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const p=Jt._fromJSON(t,h);u!==s&&(a=p),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Mn(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Mn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Fh(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(jh(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(zh(t))return"Blackberry";if($h(t))return"Webos";if($l(t))return"Safari";if((t.includes("chrome/")||Uh(t))&&!t.includes("edge/"))return"Chrome";if(bh(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jh(e=le()){return/firefox\//i.test(e)}function $l(e=le()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Uh(e=le()){return/crios\//i.test(e)}function Fh(e=le()){return/iemobile/i.test(e)}function bh(e=le()){return/android/i.test(e)}function zh(e=le()){return/blackberry/i.test(e)}function $h(e=le()){return/webos/i.test(e)}function Ds(e=le()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function fy(e=le()){var t;return Ds(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function hy(){return Pv()&&document.documentMode===10}function Bh(e=le()){return Ds(e)||bh(e)||$h(e)||zh(e)||/windows phone/i.test(e)||Fh(e)}function py(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(e,t=[]){let n;switch(e){case"Browser":n=xc(le());break;case"Worker":n=`${xc(le())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gy(e,t={}){return hn(e,"GET","/v2/passwordPolicy",fn(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=6;class yy{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:vy,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ac(this),this.idTokenSubscription=new Ac(this),this.beforeStateQueue=new my(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ds(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=J0()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?$e(t):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&N(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await gy(this),n=new yy(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new dn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&rt(t)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(N(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Vh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&G0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pn(e){return $e(e)}class Ac{constructor(t){this.auth=t,this.observer=null,this.addObserver=Lv(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Hh(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Qe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",_y().appendChild(r)})}function Ey(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Sy="https://www.google.com/recaptcha/enterprise.js?render=",Iy="recaptcha-enterprise",ky="NO_RECAPTCHA";class Ty{constructor(t){this.type=Iy,this.auth=pn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ty(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new W0(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Cc(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(ky)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Cc(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Hh(Sy+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function fs(e,t,n,r=!1){const i=new Ty(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(e,t){const n=Gn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(br(s,t??{}))return i;ze(i,"already-initialized")}return n.initialize({options:t})}function Py(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Ny(e,t,n){const r=pn(e);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Wh(t),{host:o,port:a}=Ry(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||xy()}function Wh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ry(e){const t=Wh(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Oc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Oc(o)}}}function Oc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function xy(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(t){return nt("not implemented")}_linkToIdToken(t,n){return nt("not implemented")}_getReauthenticationResolver(t){return nt("not implemented")}}async function Ay(e,t){return hn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(e,t){return Xr(e,"POST","/v1/accounts:signInWithPassword",fn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oy(e,t){return Xr(e,"POST","/v1/accounts:signInWithEmailLink",fn(e,t))}async function Ly(e,t){return Xr(e,"POST","/v1/accounts:signInWithEmailLink",fn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Bl{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Vr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Vr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await fs(t,r,"signInWithPassword");return Eo(t,i)}else return Eo(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await fs(t,r,"signInWithPassword");return Eo(t,s)}else return Promise.reject(i)});case"emailLink":return Oy(t,{email:this._email,oobCode:this._password});default:ze(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Ay(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ly(t,{idToken:n,email:this._email,oobCode:this._password});default:ze(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(e,t){return Xr(e,"POST","/v1/accounts:signInWithIdp",fn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="http://localhost";class sn extends Bl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new sn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Ul(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new sn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return jn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,jn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,jn(t,n)}buildRequest(){const t={requestUri:Dy,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=qr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jy(e){const t=ur(cr(e)).link,n=t?ur(cr(t)).deep_link_id:null,r=ur(cr(e)).deep_link_id;return(r?ur(cr(r)).link:null)||r||n||t||e}class Vl{constructor(t){var n,r,i,s,o,a;const l=ur(cr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,p=My((i=l.mode)!==null&&i!==void 0?i:null);N(u&&h&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=jy(t);try{return new Vl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.providerId=Qn.PROVIDER_ID}static credential(t,n){return Vr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Vl.parseLink(n);return N(r,"argument-error"),Vr._fromEmailAndCode(t,r.code,r.tenantId)}}Qn.PROVIDER_ID="password";Qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Kh{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends Zr{constructor(){super("facebook.com")}static credential(t){return sn._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return yt.credentialFromTaggedObject(t)}static credentialFromError(t){return yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return yt.credential(t.oauthAccessToken)}catch{return null}}}yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return sn._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return wt.credentialFromTaggedObject(t)}static credentialFromError(t){return wt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends Zr{constructor(){super("github.com")}static credential(t){return sn._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return _t.credentialFromTaggedObject(t)}static credentialFromError(t){return _t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return _t.credential(t.oauthAccessToken)}catch{return null}}}_t.GITHUB_SIGN_IN_METHOD="github.com";_t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Zr{constructor(){super("twitter.com")}static credential(t,n){return sn._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Et.credentialFromTaggedObject(t)}static credentialFromError(t){return Et.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Et.credential(n,r)}catch{return null}}}Et.TWITTER_SIGN_IN_METHOD="twitter.com";Et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(e,t){return Xr(e,"POST","/v1/accounts:signUp",fn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await Jt._fromIdTokenResponse(t,r,i),o=Lc(r);return new on({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Lc(r);return new on({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Lc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs extends Je{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hs.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new hs(t,n,r,i)}}function Gh(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hs._fromErrorAndOperation(e,s,t,r):s})}async function Uy(e,t,n=!1){const r=await $r(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return on._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await $r(e,Gh(r,i,t,e),n);N(s.idToken,r,"internal-error");const o=zl(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(e.uid===a,r,"user-mismatch"),on._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ze(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qh(e,t,n=!1){const r="signIn",i=await Gh(e,r,t),s=await on._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function by(e,t){return Qh(pn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qh(e){const t=pn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function zy(e,t,n){var r;const i=pn(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await fs(i,s,"signUpPassword");o=So(i,u)}else o=So(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const h=await fs(i,s,"signUpPassword");return So(i,h)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&qh(e),u}),l=await on._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function $y(e,t,n){return by($e(e),Qn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qh(e),r})}function By(e,t,n,r){return $e(e).onIdTokenChanged(t,n,r)}function Vy(e,t,n){return $e(e).beforeAuthStateChanged(t,n)}function Hy(e,t,n,r){return $e(e).onAuthStateChanged(t,n,r)}function Wy(e){return $e(e).signOut()}const ps="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ps,"1"),this.storage.removeItem(ps),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(){const e=le();return $l(e)||Ds(e)}const Gy=1e3,Qy=10;class Jh extends Yh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ky()&&py(),this.fallbackToPolling=Bh(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hy()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Qy):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Gy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Jh.type="LOCAL";const qy=Jh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh extends Yh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Xh.type="SESSION";const Zh=Xh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ms(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await Yy(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ms.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Hl("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function Xy(e){qe().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function Zy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function e1(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function t1(){return ep()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="firebaseLocalStorageDb",n1=1,ms="firebaseLocalStorage",np="fbase_key";class ei{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function js(e,t){return e.transaction([ms],t?"readwrite":"readonly").objectStore(ms)}function r1(){const e=indexedDB.deleteDatabase(tp);return new ei(e).toPromise()}function ja(){const e=indexedDB.open(tp,n1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(ms,{keyPath:np})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(ms)?t(r):(r.close(),await r1(),t(await ja()))})})}async function Dc(e,t,n){const r=js(e,!0).put({[np]:t,value:n});return new ei(r).toPromise()}async function i1(e,t){const n=js(e,!1).get(t),r=await new ei(n).toPromise();return r===void 0?null:r.value}function Mc(e,t){const n=js(e,!0).delete(t);return new ei(n).toPromise()}const s1=800,o1=3;class rp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ja(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>o1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ep()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ms._getInstance(t1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Zy(),!this.activeServiceWorker)return;this.sender=new Jy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||e1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ja();return await Dc(t,ps,"1"),await Mc(t,ps),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>i1(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=js(i,!1).getAll();return new ei(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),s1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rp.type="LOCAL";const a1=rp;new Jr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(e,t){return t?rt(t):(N(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends Bl{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return jn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return jn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return jn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function u1(e){return Qh(e.auth,new Wl(e),e.bypassAuthState)}function c1(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),Fy(n,new Wl(e),e.bypassAuthState)}async function d1(e){const{auth:t,user:n}=e;return N(n,t,"internal-error"),Uy(n,new Wl(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return u1;case"linkViaPopup":case"linkViaRedirect":return d1;case"reauthViaPopup":case"reauthViaRedirect":return c1;default:ze(this.auth,"internal-error")}}resolve(t){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=new Jr(2e3,1e4);class Nn extends ip{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nn.currentPopupAction&&Nn.currentPopupAction.cancel(),Nn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return N(t,this.auth,"internal-error"),t}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const t=Hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Qe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,f1.get())};t()}}Nn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="pendingRedirect",ji=new Map;class p1 extends ip{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ji.get(this.auth._key());if(!t){try{const r=await m1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ji.set(this.auth._key(),t)}return this.bypassAuthState||ji.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function m1(e,t){const n=y1(t),r=v1(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function g1(e,t){ji.set(e._key(),t)}function v1(e){return rt(e._redirectPersistence)}function y1(e){return Mi(h1,e.config.apiKey,e.name)}async function w1(e,t,n=!1){const r=pn(e),i=l1(r,t),o=await new p1(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=10*60*1e3;class E1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!S1(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!sp(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qe(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=_1&&this.cachedEventUids.clear(),this.cachedEventUids.has(jc(t))}saveEventToCache(t){this.cachedEventUids.add(jc(t)),this.lastProcessedEventTime=Date.now()}}function jc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function sp({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function S1(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sp(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I1(e,t={}){return hn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,T1=/^https?/;async function C1(e){if(e.config.emulator)return;const{authorizedDomains:t}=await I1(e);for(const n of t)try{if(P1(n))return}catch{}ze(e,"unauthorized-domain")}function P1(e){const t=Ma(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!T1.test(n))return!1;if(k1.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1=new Jr(3e4,6e4);function Uc(){const e=qe().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function R1(e){return new Promise((t,n)=>{var r,i,s;function o(){Uc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Uc(),n(Qe(e,"network-request-failed"))},timeout:N1.get()})}if(!((i=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=qe().gapi)===null||s===void 0)&&s.load)o();else{const a=Ey("iframefcb");return qe()[a]=()=>{gapi.load?o():n(Qe(e,"network-request-failed"))},Hh(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ui=null,t})}let Ui=null;function x1(e){return Ui=Ui||R1(e),Ui}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A1=new Jr(5e3,15e3),O1="__/auth/iframe",L1="emulator/auth/iframe",D1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},M1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function j1(e){const t=e.config;N(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?bl(t,L1):`https://${e.config.authDomain}/${O1}`,r={apiKey:t.apiKey,appName:e.name,v:Yr},i=M1.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qr(r).slice(1)}`}async function U1(e){const t=await x1(e),n=qe().gapi;return N(n,e,"internal-error"),t.open({where:document.body,url:j1(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:D1,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qe(e,"network-request-failed"),a=qe().setTimeout(()=>{s(o)},A1.get());function l(){qe().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},b1=500,z1=600,$1="_blank",B1="http://localhost";class Fc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function V1(e,t,n,r=b1,i=z1){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},F1),{width:r.toString(),height:i.toString(),top:s,left:o}),u=le().toLowerCase();n&&(a=Uh(u)?$1:n),jh(u)&&(t=t||B1,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[y,_])=>`${m}${y}=${_},`,"");if(fy(u)&&a!=="_self")return H1(t||"",a),new Fc(null);const p=window.open(t||"",a,h);N(p,e,"popup-blocked");try{p.focus()}catch{}return new Fc(p)}function H1(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="__/auth/handler",K1="emulator/auth/handler",G1=encodeURIComponent("fac");async function bc(e,t,n,r,i,s){N(e.config.authDomain,e,"auth-domain-config-required"),N(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Yr,eventId:i};if(t instanceof Kh){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Ov(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[h,p]of Object.entries(s||{}))o[h]=p}if(t instanceof Zr){const h=t.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await e._getAppCheckToken(),u=l?`#${G1}=${encodeURIComponent(l)}`:"";return`${Q1(e)}?${qr(a).slice(1)}${u}`}function Q1({config:e}){return e.emulator?bl(e,K1):`https://${e.authDomain}/${W1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="webStorageSupport";class q1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zh,this._completeRedirectFn=w1,this._overrideRedirectResult=g1}async _openPopup(t,n,r,i){var s;ct((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await bc(t,n,r,Ma(),i);return V1(t,o,Hl())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await bc(t,n,r,Ma(),i);return Xy(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ct(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await U1(t),r=new E1(t);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Io,{type:Io},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Io];o!==void 0&&n(!!o),ze(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=C1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bh()||$l()||Ds()}}const Y1=q1;var zc="@firebase/auth",$c="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Z1(e){ut(new Ye("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;N(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vh(e)},u=new wy(r,i,s,l);return Py(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ut(new Ye("auth-internal",t=>{const n=pn(t.getProvider("auth").getImmediate());return(r=>new J1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(zc,$c,X1(e)),Ge(zc,$c,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew=5*60,tw=wh("authIdTokenMaxAge")||ew;let Bc=null;const nw=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tw)return;const i=n==null?void 0:n.token;Bc!==i&&(Bc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rw(e=Ch()){const t=Gn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Cy(e,{popupRedirectResolver:Y1,persistence:[a1,qy,Zh]}),r=wh("authTokenSyncURL");if(r){const s=nw(r);Vy(n,s,()=>s(n.currentUser)),By(n,o=>s(o))}const i=Iv("auth");return i&&Ny(n,`http://${i}`),n}Z1("Browser");var iw="firebase",sw="10.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(iw,sw,"app");const ow=(e,t)=>t.some(n=>e instanceof n);let Vc,Hc;function aw(){return Vc||(Vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lw(){return Hc||(Hc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const op=new WeakMap,Ua=new WeakMap,ap=new WeakMap,ko=new WeakMap,Kl=new WeakMap;function uw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Dt(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&op.set(n,e)}).catch(()=>{}),Kl.set(t,e),t}function cw(e){if(Ua.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Ua.set(e,t)}let Fa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ua.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ap.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dw(e){Fa=e(Fa)}function fw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(To(this),t,...n);return ap.set(r,t.sort?t.sort():[t]),Dt(r)}:lw().includes(e)?function(...t){return e.apply(To(this),t),Dt(op.get(this))}:function(...t){return Dt(e.apply(To(this),t))}}function hw(e){return typeof e=="function"?fw(e):(e instanceof IDBTransaction&&cw(e),ow(e,aw())?new Proxy(e,Fa):e)}function Dt(e){if(e instanceof IDBRequest)return uw(e);if(ko.has(e))return ko.get(e);const t=hw(e);return t!==e&&(ko.set(e,t),Kl.set(t,e)),t}const To=e=>Kl.get(e);function pw(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Dt(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Dt(o.result),l.oldVersion,l.newVersion,Dt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const mw=["get","getKey","getAll","getAllKeys","count"],gw=["put","add","delete","clear"],Co=new Map;function Wc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Co.get(t))return Co.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=gw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mw.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Co.set(t,s),s}dw(e=>({...e,get:(t,n,r)=>Wc(t,n)||e.get(t,n,r),has:(t,n)=>!!Wc(t,n)||e.has(t,n)}));const lp="@firebase/installations",Gl="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=1e4,cp=`w:${Gl}`,dp="FIS_v2",vw="https://firebaseinstallations.googleapis.com/v1",yw=60*60*1e3,ww="installations",_w="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},an=new dn(ww,_w,Ew);function fp(e){return e instanceof Je&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp({projectId:e}){return`${vw}/projects/${e}/installations`}function pp(e){return{token:e.token,requestStatus:2,expiresIn:Iw(e.expiresIn),creationTime:Date.now()}}async function mp(e,t){const r=(await t.json()).error;return an.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function gp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Sw(e,{refreshToken:t}){const n=gp(e);return n.append("Authorization",kw(t)),n}async function vp(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Iw(e){return Number(e.replace("s","000"))}function kw(e){return`${dp} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tw({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=hp(e),i=gp(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:dp,appId:e.appId,sdkVersion:cp},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await vp(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:pp(u.authToken)}}else throw await mp("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=/^[cdef][\w-]{21}$/,ba="";function Nw(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Rw(e);return Pw.test(n)?n:ba}catch{return ba}}function Rw(e){return Cw(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new Map;function _p(e,t){const n=Us(e);Ep(n,t),xw(n,t)}function Ep(e,t){const n=wp.get(e);if(n)for(const r of n)r(t)}function xw(e,t){const n=Aw();n&&n.postMessage({key:e,fid:t}),Ow()}let Qt=null;function Aw(){return!Qt&&"BroadcastChannel"in self&&(Qt=new BroadcastChannel("[Firebase] FID Change"),Qt.onmessage=e=>{Ep(e.data.key,e.data.fid)}),Qt}function Ow(){wp.size===0&&Qt&&(Qt.close(),Qt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="firebase-installations-database",Dw=1,ln="firebase-installations-store";let Po=null;function Ql(){return Po||(Po=pw(Lw,Dw,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ln)}}})),Po}async function gs(e,t){const n=Us(e),i=(await Ql()).transaction(ln,"readwrite"),s=i.objectStore(ln),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&_p(e,t.fid),t}async function Sp(e){const t=Us(e),r=(await Ql()).transaction(ln,"readwrite");await r.objectStore(ln).delete(t),await r.done}async function Fs(e,t){const n=Us(e),i=(await Ql()).transaction(ln,"readwrite"),s=i.objectStore(ln),o=await s.get(n),a=t(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&_p(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(e){let t;const n=await Fs(e.appConfig,r=>{const i=Mw(r),s=jw(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===ba?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Mw(e){const t=e||{fid:Nw(),registrationStatus:0};return Ip(t)}function jw(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(an.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Uw(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Fw(e)}:{installationEntry:t}}async function Uw(e,t){try{const n=await Tw(e,t);return gs(e.appConfig,n)}catch(n){throw fp(n)&&n.customData.serverCode===409?await Sp(e.appConfig):await gs(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Fw(e){let t=await Kc(e.appConfig);for(;t.registrationStatus===1;)await yp(100),t=await Kc(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ql(e);return r||n}return t}function Kc(e){return Fs(e,t=>{if(!t)throw an.create("installation-not-found");return Ip(t)})}function Ip(e){return bw(e)?{fid:e.fid,registrationStatus:0}:e}function bw(e){return e.registrationStatus===1&&e.registrationTime+up<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw({appConfig:e,heartbeatServiceProvider:t},n){const r=$w(e,n),i=Sw(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:cp,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await vp(()=>fetch(r,a));if(l.ok){const u=await l.json();return pp(u)}else throw await mp("Generate Auth Token",l)}function $w(e,{fid:t}){return`${hp(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(e,t=!1){let n;const r=await Fs(e.appConfig,s=>{if(!kp(s))throw an.create("not-registered");const o=s.authToken;if(!t&&Hw(o))return s;if(o.requestStatus===1)return n=Bw(e,t),s;{if(!navigator.onLine)throw an.create("app-offline");const a=Kw(s);return n=Vw(e,a),a}});return n?await n:r.authToken}async function Bw(e,t){let n=await Gc(e.appConfig);for(;n.authToken.requestStatus===1;)await yp(100),n=await Gc(e.appConfig);const r=n.authToken;return r.requestStatus===0?Yl(e,t):r}function Gc(e){return Fs(e,t=>{if(!kp(t))throw an.create("not-registered");const n=t.authToken;return Gw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Vw(e,t){try{const n=await zw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await gs(e.appConfig,r),n}catch(n){if(fp(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Sp(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await gs(e.appConfig,r)}throw n}}function kp(e){return e!==void 0&&e.registrationStatus===2}function Hw(e){return e.requestStatus===2&&!Ww(e)}function Ww(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+yw}function Kw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Gw(e){return e.requestStatus===1&&e.requestTime+up<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(e){const t=e,{installationEntry:n,registrationPromise:r}=await ql(t);return r?r.catch(console.error):Yl(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(e,t=!1){const n=e;return await Yw(n),(await Yl(n,t)).token}async function Yw(e){const{registrationPromise:t}=await ql(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(e){if(!e||!e.options)throw No("App Configuration");if(!e.name)throw No("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw No(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function No(e){return an.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="installations",Xw="installations-internal",Zw=e=>{const t=e.getProvider("app").getImmediate(),n=Jw(t),r=Gn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},e_=e=>{const t=e.getProvider("app").getImmediate(),n=Gn(t,Tp).getImmediate();return{getId:()=>Qw(n),getToken:i=>qw(n,i)}};function t_(){ut(new Ye(Tp,Zw,"PUBLIC")),ut(new Ye(Xw,e_,"PRIVATE"))}t_();Ge(lp,Gl);Ge(lp,Gl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="analytics",n_="firebase_id",r_="origin",i_=60*1e3,s_="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Jl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Ml("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Se=new dn("analytics","Analytics",o_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(e){if(!e.startsWith(Jl)){const t=Se.create("invalid-gtag-resource",{gtagURL:e});return ye.warn(t.message),""}return e}function Cp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function l_(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function u_(e,t){const n=l_("firebase-js-sdk-policy",{createScriptURL:a_}),r=document.createElement("script"),i=`${Jl}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function c_(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function d_(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const l=(await Cp(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){ye.error(a)}e("config",i,s)}async function f_(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await Cp(n);for(const l of o){const u=a.find(p=>p.measurementId===l),h=u&&t[u.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){ye.error(s)}}function h_(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await f_(e,t,n,a,l)}else if(s==="config"){const[a,l]=o;await d_(e,t,n,r,a,l)}else if(s==="consent"){const[a]=o;e("consent","update",a)}else if(s==="get"){const[a,l,u]=o;e("get",a,l,u)}else if(s==="set"){const[a]=o;e("set",a)}else e(s,...o)}catch(a){ye.error(a)}}return i}function p_(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=h_(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function m_(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Jl)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=30,v_=1e3;class y_{constructor(t={},n=v_){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Pp=new y_;function w_(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function __(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:w_(r)},s=s_.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw Se.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function E_(e,t=Pp,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Se.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Se.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new k_;return setTimeout(async()=>{a.abort()},n!==void 0?n:i_),Np({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Np(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Pp){var s;const{appId:o,measurementId:a}=e;try{await S_(r,t)}catch(l){if(a)return ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await __(e);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!I_(u)){if(i.deleteThrottleMetadata(o),a)return ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const h=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?yc(n,i.intervalMillis,g_):yc(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+h,backoffCount:n+1};return i.setThrottleMetadata(o,p),ye.debug(`Calling attemptFetch again in ${h} millis`),Np(e,p,r,i)}}function S_(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(Se.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function I_(e){if(!(e instanceof Je)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class k_{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function T_(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(){if(Eh())try{await Sh()}catch(e){return ye.warn(Se.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ye.warn(Se.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function P_(e,t,n,r,i,s,o){var a;const l=E_(e);l.then(y=>{n[y.measurementId]=y.appId,e.options.measurementId&&y.measurementId!==e.options.measurementId&&ye.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>ye.error(y)),t.push(l);const u=C_().then(y=>{if(y)return r.getId()}),[h,p]=await Promise.all([l,u]);m_(s)||u_(s,h.measurementId),i("js",new Date);const m=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return m[r_]="firebase",m.update=!0,p!=null&&(m[n_]=p),i("config",h.measurementId,m),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t){this.app=t}_delete(){return delete Er[this.app.options.appId],Promise.resolve()}}let Er={},Qc=[];const qc={};let Ro="dataLayer",R_="gtag",Yc,Rp,Jc=!1;function x_(){const e=[];if(_h()&&e.push("This is a browser extension environment."),Nv()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Se.create("invalid-analytics-context",{errorInfo:t});ye.warn(n.message)}}function A_(e,t,n){x_();const r=e.options.appId;if(!r)throw Se.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Se.create("no-api-key");if(Er[r]!=null)throw Se.create("already-exists",{id:r});if(!Jc){c_(Ro);const{wrappedGtag:s,gtagCore:o}=p_(Er,Qc,qc,Ro,R_);Rp=s,Yc=o,Jc=!0}return Er[r]=P_(e,Qc,qc,t,Yc,Ro,n),new N_(e)}function O_(e=Ch()){e=$e(e);const t=Gn(e,vs);return t.isInitialized()?t.getImmediate():L_(e)}function L_(e,t={}){const n=Gn(e,vs);if(n.isInitialized()){const i=n.getImmediate();if(br(t,n.getOptions()))return i;throw Se.create("already-initialized")}return n.initialize({options:t})}function D_(e,t,n,r){e=$e(e),T_(Rp,Er[e.app.options.appId],t,n,r).catch(i=>ye.error(i))}const Xc="@firebase/analytics",Zc="0.10.0";function M_(){ut(new Ye(vs,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return A_(r,i,n)},"PUBLIC")),ut(new Ye("analytics-internal",e,"PRIVATE")),Ge(Xc,Zc),Ge(Xc,Zc,"esm2017");function e(t){try{const n=t.getProvider(vs).getImmediate();return{logEvent:(r,i,s)=>D_(n,r,i,s)}}catch(n){throw Se.create("interop-component-reg-failed",{reason:n})}}}M_();const j_={apiKey:"",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:"",measurementId:""},xp=Th(j_);O_(xp);const Ei=rw(xp),Ap=j.createContext({}),U_=({children:e})=>{const[t,n]=j.useState(null);j.useEffect(()=>{const o=Hy(Ei,a=>{n(a||null)});return()=>{o()}},[]);const r=async({email:o,password:a})=>zy(Ei,o,a),i=async({email:o,password:a})=>$y(Ei,o,a),s=async()=>Wy(Ei);return v.jsx(Ap.Provider,{value:{user:t,sign_Up:r,sign_In:i,sign_Out:s},children:e})},F_=()=>{const{user:e,sign_Up:t,sign_In:n,sign_Out:r}=j.useContext(Ap);return{user:e,sign_Up:t,sign_In:n,sign_Out:r}},b_=()=>{const[e,t]=j.useState(!1),[n,r]=j.useState(""),[i,s]=j.useState(""),{sign_In:o}=F_(),a=l=>{l.preventDefault();const u=new FormData(l.target),h=Object.fromEntries(u);o({email:h.email.toString(),password:h.password.toString()})};return v.jsxs(v.Fragment,{children:[v.jsxs("form",{className:"w-full flex flex-col gap-4",onSubmit:l=>a(l),children:[v.jsx("h1",{className:"text-center text-2xl font-bold",children:"Log in to TikTok"}),v.jsx("input",{name:"email",type:"email",placeholder:"Email",onChange:l=>r(l.target.value),className:"w-full items-center placeholder:text-black bg-gray-300 rounded p-2",required:!0}),v.jsxs("div",{className:"flex w-full items-center bg-gray-300 rounded p-2",onClick:()=>t(!e),children:[v.jsx("input",{name:"password",type:e?"text":"password",placeholder:"Password",onChange:l=>s(l.target.value),className:"flex-1 placeholder:text-black bg-gray-300",required:!0}),e?v.jsx(ls,{sprite:"#show-password-0060eb3e",className:"h-6 w-6"}):v.jsx(ls,{sprite:"#hide-password-0060eb3e",className:"h-6 w-6"})]}),v.jsx("span",{className:" text-xs",children:"Forgot password?"}),v.jsx("button",{className:"w-full p-2 rounded bg-[#fe2c55] disabled:bg-gray-300 disabled:text-gray-400",type:"submit",disabled:n===""||i==="",children:"Log in"}),v.jsxs("div",{className:"flex items-center gap-1",children:[v.jsx("div",{className:"border-black border-b-2 flex-1"}),"Or continue with",v.jsx("div",{className:"border-black border-b-2 flex-1"})]})]}),v.jsx("button",{type:"button",className:" bg-[#fe2c55] text-white w-full p-2 rounded mt-8",onClick:()=>o({email:"demo@richkevan.com",password:"password"}),children:"Login with demo@richkevan.com"})]})},z_=[{name:"For You",Icon:cv,url:"foryou"},{name:"Following",Icon:dv,url:"following"},{name:"Explore",Icon:fv,url:"explore"},{name:"LIVE",Icon:hv,url:"live"}],$_=({children:e})=>{const{HoverMenu:t,showHoverMenu:n}=pv(),{Modal:r,showModal:i}=mv(),s=({url:o})=>!!window.location.pathname.includes(o);return v.jsxs(v.Fragment,{children:[v.jsxs("header",{className:"border-b-2 border-b-gray-400 h-16 flex items-center justify-between pl-4 pr-6 fixed top-0 w-full",children:[v.jsx("div",{className:"min-w-[300px]",children:v.jsx(ls,{sprite:"#logo-dark-1ef9a37a",className:"w-[118px] h-11"})}),v.jsx("div",{className:"w-[516px] min-w-[200px] px-2",children:v.jsxs("form",{className:" relative flex items-center py-3 px-4 m-0 bg-gray-300 rounded-full overflow-hidden",children:[v.jsx("input",{type:"search",placeholder:"Search",className:" bg-inherit w-full"}),v.jsx("span",{className:" h-7 w-[2px] bg-black -my-[3px]"}),v.jsx("button",{type:"submit",className:"bg-inherit p-3 -my-3 -mr-4",children:v.jsx(uv,{})})]})}),v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx("a",{href:"/upload",children:v.jsxs("div",{className:"flex items-center rounded-[2px] px-4 h-9 border-2 border-gray-300 ",children:[v.jsx(av,{}),"Upload"]})}),v.jsx("button",{className:`flex items-center justify-center rounded-[4px] px-2 py-[6px] min-h-9 min-w-[100px] 
        bg-[#fe2c55] text-white font-semibold`,onClick:()=>i(),children:"Log in"}),v.jsxs("div",{className:"relative",onMouseEnter:()=>{n()},children:[v.jsx(lv,{className:" w-5 h-5"}),v.jsx(t,{className:"fixed top-16 right-0 rounded shadow-lg font-semibold ",children:v.jsxs("ul",{children:[v.jsx("li",{className:"hover:bg-gray-300 hover:bg-opacity-30 px-8 py-2",children:"LIVE Creator Hub"}),v.jsx("li",{className:"hover:bg-gray-300 hover:bg-opacity-30 px-8 py-2",children:"English"}),v.jsx("li",{className:"hover:bg-gray-300 hover:bg-opacity-30 px-8 py-2",children:"Feedback and help"}),v.jsx("li",{className:"hover:bg-gray-300 hover:bg-opacity-30 px-8 py-2",children:"Keyboard shortcuts"})]})})]})]})]}),v.jsxs("div",{className:"flex mt-16",children:[v.jsxs("aside",{className:"border-r-2 border-r-gray-300 w-[240px] fixed left-0 top-16 px-2 py-4 h-[calc(100vh-64px)] flex flex-col",children:[v.jsxs("ul",{children:[z_.map(({name:o,Icon:a,url:l})=>v.jsx("li",{className:" p-2 hover:bg-gray-300 hover:bg-opacity-30",children:v.jsxs("a",{id:l,href:"/tiktok_clone/"+l,className:`flex items-center${s({url:l})?" text-[#fe2c55] fill-[#fe2c55]":" text-black fill-black"}`,children:[v.jsx(a,{className:"w-8 h-8 fill-inherit"}),v.jsx("span",{className:" text-lg font-semibold text-inherit",children:o})]})},l)),v.jsx("hr",{})]}),v.jsxs("div",{className:"px-4 pt-5 pb-6 flex flex-col",children:[v.jsx("p",{children:"Log in to follow creators, like videos, and view comments."}),v.jsx("button",{className:"border-2 border-[#fe2c55] px-2 py-[6px] rounded mt-5 min-w-[168px] text-[#fe2c55] w-full",children:"Log in"})]}),v.jsx("div",{className:"flex-1"}),v.jsx("hr",{}),v.jsxs("div",{className:" pt-4 pl-2",children:[v.jsx("div",{className:"pr-2 mb-8 flex justify-center items-center rounded-lg bg-[url(./045b2fc7c278b9a30dd0.png)] h-[52px] bg-cover bg-no-repeat w-full bg-center cursor-pointer",children:v.jsxs("div",{className:"flex hover:scale-110 transition-all duration-500",children:[v.jsx(ls,{sprite:"#eh-logo-a5ac4daf",className:" w-5 h-5 mr-2"}),v.jsx("span",{children:"Create effects"})]})}),v.jsxs("section",{className:" text-xs",children:[v.jsxs("div",{className:"mb-3 flex gap-2",children:[v.jsx("a",{children:"About"}),v.jsx("a",{children:"Newsroom"}),v.jsx("a",{children:"Contact"}),v.jsx("a",{children:"Careers"})]}),v.jsxs("div",{className:"mb-3 flex flex-row flex-wrap",children:[v.jsx("a",{className:"mt-1 mr-2",children:"TikTok for Good"}),v.jsx("a",{className:"mt-1 mr-2",children:"Advertise"}),v.jsx("a",{className:"mt-1 mr-2",children:"Developers"}),v.jsx("a",{className:"mt-1 mr-2",children:"Transparency"}),v.jsx("a",{className:"mt-1 mr-2",children:"TikTok Rewards"}),v.jsx("a",{className:"mt-1 mr-2",children:"TikTok Embeds"})]}),v.jsxs("div",{className:"mb-3 flex flex-row flex-wrap",children:[v.jsx("a",{className:"mt-1 mr-2",children:"Help"}),v.jsx("a",{className:"mt-1 mr-2",children:"Safety"}),v.jsx("a",{className:"mt-1 mr-2",children:"Terms"}),v.jsx("a",{className:"mt-1 mr-2",children:"Privacy"}),v.jsx("a",{className:"mt-1 mr-2",children:"Creator Portal"}),v.jsx("a",{className:"mt-1 mr-2",children:"Community Guidlines"})]}),v.jsx("div",{className:" mb-5",children:"See more ▼"}),v.jsx("span",{children:"© 2023 TikTok"})]})]})]}),v.jsx("div",{className:" flex-1 w-full flex flex-col items-center",children:e})]}),v.jsx("footer",{}),v.jsx(r,{children:v.jsx(b_,{})})]})};xo.createRoot(document.getElementById("root")).render(v.jsx(qp.StrictMode,{children:v.jsx(U_,{children:v.jsx($_,{children:v.jsx("h1",{className:" font-extrabold",children:"TIKTOK"})})})}));
