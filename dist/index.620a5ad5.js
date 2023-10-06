var t,e,r,n,i,o,a,s,c,u,l,f,p,h,d,v,g,m,y,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function _(t){return t&&t.__esModule?t.default:t}var w={},E={},S=b.parcelRequire3a11;null==S&&((S=function(t){if(t in w)return w[t].exports;if(t in E){var e=E[t];delete E[t];var r={id:t,exports:{}};return w[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){E[t]=e},b.parcelRequire3a11=S);var j={},O={},k=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
O=k("object"==typeof globalThis&&globalThis)||k("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
k("object"==typeof self&&self)||k("object"==typeof b&&b)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||O||Function("return this")();var F={},$={};// Detect IE8's incomplete defineProperty implementation
F=!($=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var L={},M={};M=!$(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var P=Function.prototype.call;L=M?P.bind(P):function(){return P.apply(P,arguments)};var x={}.propertyIsEnumerable,T=Object.getOwnPropertyDescriptor;o=T&&!x.call({1:2},1)?function(t){var e=T(this,t);return!!e&&e.enumerable}:x;var I={};I=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var q={},N={},A={},C=Function.prototype,D=C.call,H=M&&C.bind.bind(D,D),z={},R=(A=M?H:function(t){return function(){return D.apply(t,arguments)}})({}.toString),G=A("".slice);z=function(t){return G(R(t),8,-1)};var U=Object,B=A("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
N=$(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!U("z").propertyIsEnumerable(0)})?function(t){return"String"===z(t)?B(t,""):U(t)}:U;var W={},Y={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
Y=function(t){return null==t};var Q=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
W=function(t){if(Y(t))throw Q("Can't call method on "+t);return t},q=function(t){return N(W(t))};var V={},K={},J={},X={},Z={},tt="object"==typeof document&&document.all,te=(Z={all:tt,IS_HTMLDDA:void 0===tt&&void 0!==tt}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
X=Z.IS_HTMLDDA?function(t){return"function"==typeof t||t===te}:function(t){return"function"==typeof t};var tr=Z.all;J=Z.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:X(t)||t===tr}:function(t){return"object"==typeof t?null!==t:X(t)};var tn={},ti={};ti=function(t,e){var r;return arguments.length<2?(r=O[t],X(r)?r:void 0):O[t]&&O[t][e]};var to={};to=A({}.isPrototypeOf);var ta={},ts={},tc={},tu={};tu="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tl=O.process,tf=O.Deno,tp=tl&&tl.versions||tf&&tf.version,th=tp&&tp.v8;th&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(s=(a=th.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&tu&&(!(a=tu.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=tu.match(/Chrome\/(\d+)/))&&(s=+a[1]),tc=s;var tv=O.String;ta=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(ts=!!Object.getOwnPropertySymbols&&!$(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tv(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&tc&&tc<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tg=Object;tn=ta?function(t){return"symbol"==typeof t}:function(t){var e=ti("Symbol");return X(e)&&to(e.prototype,tg(t))};var tm={},ty={},tb={},t_=String;tb=function(t){try{return t_(t)}catch(t){return"Object"}};var tw=TypeError;// `Assert: IsCallable(argument) is true`
ty=function(t){if(X(t))return t;throw tw(tb(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
tm=function(t,e){var r=t[e];return Y(r)?void 0:ty(r)};var tE={},tS=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
tE=function(t,e){var r,n;if("string"===e&&X(r=t.toString)&&!J(n=L(r,t))||X(r=t.valueOf)&&!J(n=L(r,t))||"string"!==e&&X(r=t.toString)&&!J(n=L(r,t)))return n;throw tS("Can't convert object to primitive value")};var tj={},tO={};tO=!1;var tk={},tF={},t$=Object.defineProperty;tF=function(t,e){try{t$(O,t,{value:e,configurable:!0,writable:!0})}catch(r){O[t]=e}return e};var tL="__core-js_shared__";tk=O[tL]||tF(tL,{}),(tj=function(t,e){return tk[t]||(tk[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.2",mode:tO?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var tM={},tP={},tx=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
tP=function(t){return tx(W(t))};var tT=A({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
tM=Object.hasOwn||function(t,e){return tT(tP(t),e)};var tI={},tq=0,tN=Math.random(),tA=A(1..toString);tI=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tA(++tq+tN,36)};var tC=O.Symbol,tD=tj("wks"),tH=ta?tC.for||tC:tC&&tC.withoutSetter||tI,tz=TypeError,tR=(tM(tD,t="toPrimitive")||(tD[t]=ts&&tM(tC,t)?tC[t]:tH("Symbol."+t)),tD[t]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
K=function(t,e){if(!J(t)||tn(t))return t;var r,n=tm(t,tR);if(n){if(void 0===e&&(e="default"),r=L(n,t,e),!J(r)||tn(r))return r;throw tz("Can't convert object to primitive value")}return void 0===e&&(e="number"),tE(t,e)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
V=function(t){var e=K(t,"string");return tn(e)?e:e+""};var tG={},tU={},tB=O.document,tW=J(tB)&&J(tB.createElement);tU=function(t){return tW?tB.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
tG=!F&&!$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(tU("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var tY=Object.getOwnPropertyDescriptor;i=F?tY:function(t,e){if(t=q(t),e=V(e),tG)try{return tY(t,e)}catch(t){}if(tM(t,e))return I(!L(o,t,e),t[e])};var tQ={},tV={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
tV=F&&$(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tK={},tJ=String,tX=TypeError;// `Assert: Type(argument) is Object`
tK=function(t){if(J(t))return t;throw tX(tJ(t)+" is not an object")};var tZ=TypeError,t0=Object.defineProperty,t1=Object.getOwnPropertyDescriptor,t2="enumerable",t3="configurable",t4="writable";c=F?tV?function(t,e,r){if(tK(t),e=V(e),tK(r),"function"==typeof t&&"prototype"===e&&"value"in r&&t4 in r&&!r[t4]){var n=t1(t,e);n&&n[t4]&&(t[e]=r.value,r={configurable:t3 in r?r[t3]:n[t3],enumerable:t2 in r?r[t2]:n[t2],writable:!1})}return t0(t,e,r)}:t0:function(t,e,r){if(tK(t),e=V(e),tK(r),tG)try{return t0(t,e,r)}catch(t){}if("get"in r||"set"in r)throw tZ("Accessors not supported");return"value"in r&&(t[e]=r.value),t},tQ=F?function(t,e,r){return c(t,e,I(1,r))}:function(t,e,r){return t[e]=r,t};var t7={},t9={},t8=Function.prototype,t5=F&&Object.getOwnPropertyDescriptor,t6=tM(t8,"name")&&(!F||F&&t5(t8,"name").configurable),et={},ee=A(Function.toString);X(tk.inspectSource)||(tk.inspectSource=function(t){return ee(t)}),et=tk.inspectSource;var er={},en={},ei=O.WeakMap;en=X(ei)&&/native code/.test(String(ei));var eo={},ea=tj("keys");eo=function(t){return ea[t]||(ea[t]=tI(t))};var es={};es={};var ec="Object already initialized",eu=O.TypeError,el=O.WeakMap;if(en||tk.state){var ef=tk.state||(tk.state=new el);/* eslint-disable no-self-assign -- prototype methods protection */ef.get=ef.get,ef.has=ef.has,ef.set=ef.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(t,e){if(ef.has(t))throw eu(ec);return e.facade=t,ef.set(t,e),e},l=function(t){return ef.get(t)||{}},f=function(t){return ef.has(t)}}else{var ep=eo("state");es[ep]=!0,u=function(t,e){if(tM(t,ep))throw eu(ec);return e.facade=t,tQ(t,ep,e),e},l=function(t){return tM(t,ep)?t[ep]:{}},f=function(t){return tM(t,ep)}}var eh=(er={set:u,get:l,has:f,enforce:function(t){return f(t)?l(t):u(t,{})},getterFor:function(t){return function(e){var r;if(!J(e)||(r=l(e)).type!==t)throw eu("Incompatible receiver, "+t+" required");return r}}}).enforce,ed=er.get,ev=String,eg=Object.defineProperty,em=A("".slice),ey=A("".replace),eb=A([].join),e_=F&&!$(function(){return 8!==eg(function(){},"length",{value:8}).length}),ew=String(String).split("String"),eE=t9=function(t,e,r){"Symbol("===em(ev(e),0,7)&&(e="["+ey(ev(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!tM(t,"name")||t6&&t.name!==e)&&(F?eg(t,"name",{value:e,configurable:!0}):t.name=e),e_&&r&&tM(r,"arity")&&t.length!==r.arity&&eg(t,"length",{value:r.arity});try{r&&tM(r,"constructor")&&r.constructor?F&&eg(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=eh(t);return tM(n,"source")||(n.source=eb(ew,"string"==typeof e?e:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=eE(function(){return X(this)&&ed(this).source||et(this)},"toString"),t7=function(t,e,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:e;if(X(r)&&t9(r,o,n),n.global)i?t[e]=r:tF(e,r);else{try{n.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=r:c(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var eS={},ej={},eO={},ek={},eF={},e$={},eL=Math.ceil,eM=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
e$=Math.trunc||function(t){var e=+t;return(e>0?eM:eL)(e)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
eF=function(t){var e=+t;// eslint-disable-next-line no-self-compare -- NaN check
return e!=e||0===e?0:e$(e)};var eP=Math.max,ex=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
ek=function(t,e){var r=eF(t);return r<0?eP(r+e,0):ex(r,e)};var eT={},eI={},eq=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
eI=function(t){return t>0?eq(eF(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
eT=function(t){return eI(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var eN=function(t){return function(e,r,n){var i,o=q(e),a=eT(o),s=ek(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((t||s in o)&&o[s]===r)return t||s||0;return!t&&-1}},eA={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:eN(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:eN(!1)}.indexOf,eC=A([].push);eO=function(t,e){var r,n=q(t),i=0,o=[];for(r in n)!tM(es,r)&&tM(n,r)&&eC(o,r);// Don't enum bug & hidden keys
for(;e.length>i;)tM(n,r=e[i++])&&(~eA(o,r)||eC(o,r));return o};var eD=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(t){return eO(t,eD)},h=Object.getOwnPropertySymbols;var eH=A([].concat);// all object keys, includes non-enumerable and symbols
ej=ti("Reflect","ownKeys")||function(t){var e=p(tK(t));return h?eH(e,h(t)):e},eS=function(t,e,r){for(var n=ej(e),o=0;o<n.length;o++){var a=n[o];tM(t,a)||r&&tM(r,a)||c(t,a,i(e,a))}};var ez={},eR=/#|\.prototype\./,eG=function(t,e){var r=eB[eU(t)];return r===eY||r!==eW&&(X(e)?$(e):!!e)},eU=eG.normalize=function(t){return String(t).replace(eR,".").toLowerCase()},eB=eG.data={},eW=eG.NATIVE="N",eY=eG.POLYFILL="P";ez=eG,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/j=function(t,e){var r,n,o,a,s,c=t.target,u=t.global,l=t.stat;if(r=u?O:l?O[c]||tF(c,{}):(O[c]||{}).prototype)for(n in e){// contained in target
if(a=e[n],o=t.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!ez(u?n:c+(l?".":"#")+n,t.forced)&&void 0!==o){if(typeof a==typeof o)continue;eS(a,o)}(t.sham||o&&o.sham)&&tQ(a,"sham",!0),t7(r,n,a,t)}};var eQ={},eV={},eK=Function.prototype,eJ=eK.apply,eX=eK.call;// eslint-disable-next-line es/no-reflect -- safe
eV="object"==typeof Reflect&&Reflect.apply||(M?eX.bind(eJ):function(){return eX.apply(eJ,arguments)});var eZ={},e0={},e1=(e0=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===z(t))return A(t)})(e0.bind);// optional / simple context binding
eZ=function(t,e){return ty(t),void 0===e?t:M?e1(t,e):function(){return t.apply(e,arguments)}};var e2={};e2=ti("document","documentElement");var e3={};e3=A([].slice);var e4={},e7=TypeError;e4=function(t,e){if(t<e)throw e7("Not enough arguments");return t};var e9={};// eslint-disable-next-line redos/no-vulnerable -- safe
e9=/(?:ipad|iphone|ipod).*applewebkit/i.test(tu);var e8={};e8="process"===z(O.process);var e5=O.setImmediate,e6=O.clearImmediate,rt=O.process,re=O.Dispatch,rr=O.Function,rn=O.MessageChannel,ri=O.String,ro=0,ra={},rs="onreadystatechange";$(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
d=O.location});var rc=function(t){if(tM(ra,t)){var e=ra[t];delete ra[t],e()}},ru=function(t){return function(){rc(t)}},rl=function(t){rc(t.data)},rf=function(t){// old engines have not location.origin
O.postMessage(ri(t),d.protocol+"//"+d.host)};e5&&e6||(e5=function(t){e4(arguments.length,1);var e=X(t)?t:rr(t),r=e3(arguments,1);return ra[++ro]=function(){eV(e,void 0,r)},v(ro),ro},e6=function(t){delete ra[t]},e8?v=function(t){rt.nextTick(ru(t))}:re&&re.now?v=function(t){re.now(ru(t))}:rn&&!e9?(m=(g=new rn).port2,g.port1.onmessage=rl,v=eZ(m.postMessage,m)):O.addEventListener&&X(O.postMessage)&&!O.importScripts&&d&&"file:"!==d.protocol&&!$(rf)?(v=rf,O.addEventListener("message",rl,!1)):v=rs in tU("script")?function(t){e2.appendChild(tU("script"))[rs]=function(){e2.removeChild(this),rc(t)}}:function(t){setTimeout(ru(t),0)});var rp=(eQ={set:e5,clear:e6}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
j({global:!0,bind:!0,enumerable:!0,forced:O.clearImmediate!==rp},{clearImmediate:rp});var rh=eQ.set,rd={},rv={};/* global Bun -- Deno case */rv="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rg=O.Function,rm=/MSIE .\./.test(tu)||rv&&((e=O.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rd=function(t,e){var r=e?2:1;return rm?function(n,i/* , ...arguments */){var o=e4(arguments.length,1)>r,a=X(n)?n:rg(n),s=o?e3(arguments,r):[],c=o?function(){eV(a,this,s)}:a;return e?t(c,i):t(c)}:t};// https://github.com/oven-sh/bun/issues/1633
var ry=O.setImmediate?rd(rh,!1):rh;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
j({global:!0,bind:!0,enumerable:!0,forced:O.setImmediate!==ry},{setImmediate:ry});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new F(o||[]),s=p,function(r,i){if(s===h)throw Error("Generator is already running");if(s===d){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:e,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(r,n){var i=n.method,o=r.iterator[i];if(o===e)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=h;var u=f(t,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?d:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=d,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="executing",d="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function m(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var E=y.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function S(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function j(t,e){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new e(function(r,a){!function r(i,o,a,s){var c=f(t[i],t,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,s)},function(t){r("throw",t,a,s)}):e.resolve(l).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=t,a(u)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",t,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function $(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw TypeError(typeof t+" is not iterable")}return m.prototype=y,i(E,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},S(j.prototype),u(j.prototype,s,function(){return this}),t.AsyncIterator=j,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new j(l(e,r,n,i),o);return t.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
S(E),u(E,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(E,a,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=$,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=t,a.arg=e,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:$(t),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=e),v}},t}({});try{regeneratorRuntime=rb}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rb:Function("r","regeneratorRuntime = r")(rb)}const r_="https://forkify-api.herokuapp.com/api/v2/recipes/",rw=async function(t){try{let e=fetch(t),r=await Promise.race([e,new Promise(function(t,e){setTimeout(function(){e(Error("Request took too long! Timeout after 10 second"))},1e4)})]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(t){throw t}},rE={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},rS=async function(t){try{let e=await rw(`${r_}${t}`);console.log(e);let{recipe:r}=e.data;rE.recipe={id:r.id,title:r.title,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,servings:r.servings,cookingTime:r.cooking_time,ingredients:r.ingredients},console.log(rE.recipe);// console.log(state.recipe);
}catch(t){throw t}},rj=async function(t){try{rE.search.query=t;let e=await rw(`${r_}?search=${t}`);rE.search.results=e.data.recipes.map(t=>({id:t.id,title:t.title,publisher:t.publisher,image:t.image_url}))}catch(t){throw t}},rO=function(t=rE.search.page){rE.search.page=t;let e=(t-1)*t*rE.search.resultsPerPage,r=t*rE.search.resultsPerPage;return rE.search.results.slice(e,r)},rk=function(t){rE.recipe.ingredients.forEach(e=>{e.quantity=e.quantity*t/rE.recipe.servings}),rE.recipe.servings=t};class rF{_parentEl=document.querySelector(".search");getQuery(){let t=this._parentEl.querySelector(".search__field").value;return this._clearInput(),t}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(t){this._parentEl.addEventListener("submit",function(e){e.preventDefault(),t()})}}var r$=new rF,rL={};rL=new URL(S("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rM{_data;render(t){if(!t||Array.isArray(t)&&0===t)return this.renderError();this._data=t;let e=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}update(t){this._data=t;let e=this._generateMarkup(),r=document.createRange().createContextualFragment(e),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElement.querySelectorAll("*"));console.log(n),n.forEach((t,e)=>{let r=i[e];t.isEqualNode(r)||t.firstChild?.nodeValue.trim()===""||(r.textContent=t.textContent),t.isEqualNode(r)||Array.from(t.attributes).forEach(t=>r.setAttribute(t.name,t.value))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let t=`
            <div class="spinner">
              <svg>
                <use href="${/*@__PURE__*/_(rL)}#icon-loader"></use>
              </svg>
            </div>
            
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){let e=`
      <div class="error">
              <div>
                <svg>
                  <use href="${/*@__PURE__*/_(rL)}#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>${t}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderMessage(t=this._message){let e=`
      <div class="message">
              <div>
                <svg>
                  <use href="${/*@__PURE__*/_(rL)}#icon-smile"></use>
                </svg>
              </div>
              <p>${t}</p>
      </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}class rP extends rM{_parentElement=document.querySelector(".results");_errorMessage="No recipe found for your query! Please try again later;";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(t){let e=window.location.hash.slice(1);return`
  <li class="preview">
      <a class="preview__link ${t.id===e?"preview__link--active":""}" href="#${t.id}">
        <figure class="preview__fig">
          <img src="${t.image}" alt="${t.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${t.title}</h4>
          <p class="preview__publisher">${t.publisher}</p>
        </div>
      </a>
  </li>
`}}var rx=new rP;class rT extends rM{_parentElement=document.querySelector(".pagination");addHandlerClick(t){this._parentElement.addEventListener("click",function(e){let r=e.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;t(n)})}_generateMarkup(){let t=this._data.page,e=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(// Page 1, and there are other pages
1===t&&e>1?`
        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
          <span>Page ${t+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/_(rL)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:t===e&&e>1?`
        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/_(rL)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${t-1}</span>
        </button>
      `:t<e?`
        <button data-goto="${t-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/_(rL)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${t-1}</span>
        </button>
        <button data-goto="${t+1}" class="btn--inline pagination__btn--next">
          <span>Page ${t+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/_(rL)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:"")}}var rI=new rT;(Fraction=function(t,e){/* double argument invocation */if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e){if("number"==typeof(num=t))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=t&&n.push(t),0!=e&&n.push((0===t?e:Math.abs(e))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));// fractions that are equal should have equal normalized forms
var e=this.clone().normalize(),t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(r=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},n=function(t,e){if(!e)return Math.round(t);var r=Math.pow(10,e);return Math.round(t*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(r(this.denominator)){var t=n(this.denominator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),//this.numerator *= scaleup;
this.numerator*=e}if(r(this.numerator)){var t=n(this.numerator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*e),//this.numerator *= scaleup;
this.denominator*=e}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(t,e){var r=[],n=Fraction.primeFactors(t),i=Fraction.primeFactors(e);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(t){var e=i.indexOf(t);e>=0&&(r.push(t),i.splice(e,1))}),0===r.length)?1:function(){var t,e=r[0];for(t=1;t<r.length;t++)e*=r[t];return e}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(t){for(var e=Math.abs(t),r=[],n=2;n*n<=e;)e%n==0?(r.push(n),e/=n):n++;// and increment
return 1!=e&&r.push(e),r;// Return the prime factors
},y=Fraction;class rq extends rM{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";addHandlerRender(t){["hashchange","load"].forEach(e=>window.addEventListener(e,t))}addHandlerUpdateServings(t){this._parentElement.addEventListener("click",function(e){let r=e.target.closest(".btn--tiny");if(!r)return;let{updateTo:n}=r.dataset;console.log(n),+n>0&&t(+n)})}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/_(rL)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/_(rL)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings-1}">
              <svg>
                <use href="${/*@__PURE__*/_(rL)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${this._data.servings+1}">
              <svg>
                <use href="${/*@__PURE__*/_(rL)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${/*@__PURE__*/_(rL)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${/*@__PURE__*/_(rL)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/_(rL)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}_generateMarkupIngredient(t){return`
    <li class="recipe__ingredient">
      <svg class="recipe__icon">
        <use href="${/*@__PURE__*/_(rL)}#icon-check"></use>
      </svg>
      <div class="recipe__quantity">${t.quantity?new y(t.quantity).toString():""}</div>
      <div class="recipe__description">
        <span class="recipe__unit">${t.unit}</span>
        ${t.description}
      </div>
    </li>
  `}}var rN=new rq;const rA=async function(){try{let t=window.location.hash.slice(1);// console.log(id);
// console.log(window.location.hash);
if(!t)return;rN.renderSpinner(),rx.update(rO()),// 1).Loading Recipe
await rS(t),rN.render(rE.recipe)}catch(t){rN.renderError()}},rC=async function(){try{rx.renderSpinner();// 1). Get search query
let t=r$.getQuery();if(!t)return;//2). Load Search results
await rj(t),rx.render(rO()),rI.render(rE.search),// Test
rD()}catch(t){rx.renderError()}},rD=function(t){// Update the recipe in serving(in state)
rk(t),rN.update(rE.recipe)};r$.addHandlerSearch(rC),rN.addHandlerUpdateServings(rD),rN.addHandlerRender(rA),rI.addHandlerClick(function(t){rx.render(rO(t)),rI.render(rE.search)});//# sourceMappingURL=index.620a5ad5.js.map

//# sourceMappingURL=index.620a5ad5.js.map
