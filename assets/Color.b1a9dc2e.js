var ze=Object.defineProperty;var l=(e,t)=>ze(e,"name",{value:t,configurable:!0});import{j as w,e as I,r as p,k as Q,N as Be,S as fe,al as Xe}from"./iframe.0b09fb14.js";import{s as T,W as _e,F as We,I as qe,n as Ve}from"./index.11d00644.js";function Ge(e,t){if(e==null)return{};var n=Ae(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}l(Ge,"_objectWithoutProperties$1");function Ae(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}l(Ae,"_objectWithoutPropertiesLoose$1");var Ke=T.div(function(e){var t=e.theme;return{padding:"2px 6px",lineHeight:"16px",fontSize:10,fontWeight:t.typography.weight.bold,color:t.color.lightest,boxShadow:"0 0 5px 0 rgba(0, 0, 0, 0.3)",borderRadius:4,whiteSpace:"nowrap",pointerEvents:"none",zIndex:-1,background:t.base==="light"?"rgba(60, 60, 60, 0.9)":"rgba(20, 20, 20, 0.85)",margin:6}}),Ce=l(function(t){var n=t.note,r=Ge(t,["note"]);return w(Ke,{...r,children:n})},"TooltipNote");Ce.displayName="TooltipNote";function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}l(L,"u");function de(e,t){if(e==null)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}l(de,"c");function ae(e){var t=p.exports.useRef(e),n=p.exports.useRef(function(r){t.current&&t.current(r)});return t.current=e,n.current}l(ae,"i");var z=l(function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},"s"),q=l(function(e){return"touches"in e},"f"),ie=l(function(e){return e&&e.ownerDocument.defaultView||self},"v"),ge=l(function(e,t,n){var r=e.getBoundingClientRect(),o=q(t)?function(a,i){for(var c=0;c<a.length;c++)if(a[c].identifier===i)return a[c];return a[0]}(t.touches,n):t;return{left:z((o.pageX-(r.left+ie(e).pageXOffset))/r.width),top:z((o.pageY-(r.top+ie(e).pageYOffset))/r.height)}},"d"),pe=l(function(e){!q(e)&&e.preventDefault()},"h"),he=I.memo(function(e){var t=e.onMove,n=e.onKey,r=de(e,["onMove","onKey"]),o=p.exports.useRef(null),a=ae(t),i=ae(n),c=p.exports.useRef(null),s=p.exports.useRef(!1),u=p.exports.useMemo(function(){var _=l(function(v){pe(v),(q(v)?v.touches.length>0:v.buttons>0)&&o.current?a(ge(o.current,v,c.current)):j(!1)},"e"),M=l(function(){return j(!1)},"r");function j(v){var g=s.current,b=ie(o.current),m=v?b.addEventListener:b.removeEventListener;m(g?"touchmove":"mousemove",_),m(g?"touchend":"mouseup",M)}return l(j,"t"),[function(v){var g=v.nativeEvent,b=o.current;if(b&&(pe(g),!function(C,S){return S&&!q(C)}(g,s.current)&&b)){if(q(g)){s.current=!0;var m=g.changedTouches||[];m.length&&(c.current=m[0].identifier)}b.focus(),a(ge(b,g,c.current)),j(!0)}},function(v){var g=v.which||v.keyCode;g<37||g>40||(v.preventDefault(),i({left:g===39?.05:g===37?-.05:0,top:g===40?.05:g===38?-.05:0}))},j]},[i,a]),d=u[0],h=u[1],k=u[2];return p.exports.useEffect(function(){return k},[k]),w("div",{...L({},r,{onTouchStart:d,onMouseDown:d,className:"react-colorful__interactive",ref:o,onKeyDown:h,tabIndex:0,role:"slider"})})}),A=l(function(e){return e.filter(Boolean).join(" ")},"g"),ve=l(function(e){var t=e.color,n=e.left,r=e.top,o=r===void 0?.5:r,a=A(["react-colorful__pointer",e.className]);return w("div",{className:a,style:{top:100*o+"%",left:100*n+"%"},children:w("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}})})},"p"),O=l(function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},"b"),De={grad:.9,turn:360,rad:360/(2*Math.PI)},ne=l(function(e){return e[0]==="#"&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},"x"),Ue=l(function(e,t){return t===void 0&&(t="deg"),Number(e)*(De[t]||1)},"C"),Ye=l(function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?Je({h:Ue(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},"E"),Je=l(function(e){var t=e.s,n=e.l;return{h:e.h,s:(t*=(n<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}},"M"),Me=l(function(e){var t=e.s,n=e.v,r=e.a,o=(200-t)*n/100;return{h:O(e.h),s:O(o>0&&o<200?t*n/100/(o<=100?o:200-o)*100:0),l:O(o/2),a:O(r,2)}},"N"),ce=l(function(e){var t=Me(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},"w"),J=l(function(e){var t=Me(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},"y"),Se=l(function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var a=Math.floor(t),i=r*(1-n),c=r*(1-(t-a)*n),s=r*(1-(1-t+a)*n),u=a%6;return{r:O(255*[r,c,i,i,s,r][u]),g:O(255*[s,r,r,c,i,i][u]),b:O(255*[i,i,s,r,r,c][u]),a:O(o,2)}},"q"),Qe=l(function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?Ee({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},"I"),re=l(function(e){var t=e.toString(16);return t.length<2?"0"+t:t},"z"),Ee=l(function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=Math.max(t,n,r),i=a-Math.min(t,n,r),c=i?a===t?(n-r)/i:a===n?2+(r-t)/i:4+(t-n)/i:0;return{h:O(60*(c<0?c+6:c)),s:O(a?i/a*100:0),v:O(a/255*100),a:o}},"B"),Oe=I.memo(function(e){var t=e.hue,n=e.onChange,r=A(["react-colorful__hue",e.className]);return I.createElement("div",{className:r},I.createElement(he,{onMove:function(o){n({h:360*o.left})},onKey:function(o){n({h:z(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuetext":O(t)},I.createElement(ve,{className:"react-colorful__hue-pointer",left:t/360,color:ce({h:t,s:100,v:100,a:1})})))}),Ie=I.memo(function(e){var t=e.hsva,n=e.onChange,r={backgroundColor:ce({h:t.h,s:100,v:100,a:1})};return I.createElement("div",{className:"react-colorful__saturation",style:r},I.createElement(he,{onMove:function(o){n({s:100*o.left,v:100-100*o.top})},onKey:function(o){n({s:z(t.s+100*o.left,0,100),v:z(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+O(t.s)+"%, Brightness "+O(t.v)+"%"},I.createElement(ve,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:ce(t)})))}),je=l(function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},"A"),Ne=l(function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")},"S");function Re(e,t,n){var r=ae(n),o=p.exports.useState(function(){return e.toHsva(t)}),a=o[0],i=o[1],c=p.exports.useRef({color:t,hsva:a});p.exports.useEffect(function(){if(!e.equal(t,c.current.color)){var u=e.toHsva(t);c.current={hsva:u,color:t},i(u)}},[t,e]),p.exports.useEffect(function(){var u;je(a,c.current.hsva)||e.equal(u=e.fromHsva(a),c.current.color)||(c.current={hsva:a,color:u},r(u))},[a,e,r]);var s=p.exports.useCallback(function(u){i(function(d){return Object.assign({},d,u)})},[]);return[a,s]}l(Re,"T");var Ze=typeof window<"u"?p.exports.useLayoutEffect:p.exports.useEffect,et=l(function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},"X"),be=new Map,He=l(function(e){Ze(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!be.has(t)){var n=t.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,be.set(t,n);var r=et();r&&n.setAttribute("nonce",r),t.head.appendChild(n)}},[])},"V"),tt=l(function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,i=de(e,["className","colorModel","color","onChange"]),c=p.exports.useRef(null);He(c);var s=Re(n,o,a),u=s[0],d=s[1],h=A(["react-colorful",t]);return Q("div",{...L({},i,{ref:c,className:h}),children:[w(Ie,{hsva:u,onChange:d}),w(Oe,{hue:u.h,onChange:d,className:"react-colorful__last-control"})]})},"$"),nt={defaultColor:"000",toHsva:function(e){return Ee(ne(e))},fromHsva:function(e){return n=(t=Se(e)).g,r=t.b,"#"+re(t.r)+re(n)+re(r);var t,n,r},equal:function(e,t){return e.toLowerCase()===t.toLowerCase()||je(ne(e),ne(t))}},rt=l(function(e){return I.createElement(tt,L({},e,{colorModel:nt}))},"J"),ot=l(function(e){var t=e.className,n=e.hsva,r=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+J(Object.assign({},n,{a:0}))+", "+J(Object.assign({},n,{a:1}))+")"},a=A(["react-colorful__alpha",t]);return I.createElement("div",{className:a},w("div",{className:"react-colorful__alpha-gradient",style:o}),I.createElement(he,{onMove:function(i){r({a:i.left})},onKey:function(i){r({a:z(n.a+i.left)})},"aria-label":"Alpha","aria-valuetext":O(100*n.a)+"%"},I.createElement(ve,{className:"react-colorful__alpha-pointer",left:n.a,color:J(n)})))},"Q"),Pe=l(function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,i=de(e,["className","colorModel","color","onChange"]),c=p.exports.useRef(null);He(c);var s=Re(n,o,a),u=s[0],d=s[1],h=A(["react-colorful",t]);return Q("div",{...L({},i,{ref:c,className:h}),children:[w(Ie,{hsva:u,onChange:d}),w(Oe,{hue:u.h,onChange:d}),w(ot,{hsva:u,onChange:d,className:"react-colorful__last-control"})]})},"U"),at={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Ye,fromHsva:J,equal:Ne},it=l(function(e){return w(Pe,{...L({},e,{colorModel:at})})},"re"),ct={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Qe,fromHsva:function(e){var t=Se(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:Ne},st=l(function(e){return w(Pe,{...L({},e,{colorModel:ct})})},"pe"),lt={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const G=lt,Te={};for(const e of Object.keys(G))Te[G[e]]=e;const f={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var Fe=f;for(const e of Object.keys(f)){if(!("channels"in f[e]))throw new Error("missing channels property: "+e);if(!("labels"in f[e]))throw new Error("missing channel labels property: "+e);if(f[e].labels.length!==f[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:n}=f[e];delete f[e].channels,delete f[e].labels,Object.defineProperty(f[e],"channels",{value:t}),Object.defineProperty(f[e],"labels",{value:n})}f.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),a=Math.max(t,n,r),i=a-o;let c,s;a===o?c=0:t===a?c=(n-r)/i:n===a?c=2+(r-t)/i:r===a&&(c=4+(t-n)/i),c=Math.min(c*60,360),c<0&&(c+=360);const u=(o+a)/2;return a===o?s=0:u<=.5?s=i/(a+o):s=i/(2-a-o),[c,s*100,u*100]};f.rgb.hsv=function(e){let t,n,r,o,a;const i=e[0]/255,c=e[1]/255,s=e[2]/255,u=Math.max(i,c,s),d=u-Math.min(i,c,s),h=l(function(k){return(u-k)/6/d+1/2},"diffc");return d===0?(o=0,a=0):(a=d/u,t=h(i),n=h(c),r=h(s),i===u?o=r-n:c===u?o=1/3+t-r:s===u&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[o*360,a*100,u*100]};f.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const o=f.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,a*100,r*100]};f.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r),a=(1-t-o)/(1-o)||0,i=(1-n-o)/(1-o)||0,c=(1-r-o)/(1-o)||0;return[a*100,i*100,c*100,o*100]};function ut(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}l(ut,"comparativeDistance");f.rgb.keyword=function(e){const t=Te[e];if(t)return t;let n=1/0,r;for(const o of Object.keys(G)){const a=G[o],i=ut(e,a);i<n&&(n=i,r=o)}return r};f.keyword.rgb=function(e){return G[e]};f.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const o=t*.4124+n*.3576+r*.1805,a=t*.2126+n*.7152+r*.0722,i=t*.0193+n*.1192+r*.9505;return[o*100,a*100,i*100]};f.rgb.lab=function(e){const t=f.rgb.xyz(e);let n=t[0],r=t[1],o=t[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;const a=116*r-16,i=500*(n-r),c=200*(r-o);return[a,i,c]};f.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let o,a,i;if(n===0)return i=r*255,[i,i,i];r<.5?o=r*(1+n):o=r+n-r*n;const c=2*r-o,s=[0,0,0];for(let u=0;u<3;u++)a=t+1/3*-(u-1),a<0&&a++,a>1&&a--,6*a<1?i=c+(o-c)*6*a:2*a<1?i=o:3*a<2?i=c+(o-c)*(2/3-a)*6:i=c,s[u]=i*255;return s};f.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,o=n;const a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=a<=1?a:2-a;const i=(r+n)/2,c=r===0?2*o/(a+o):2*n/(r+n);return[t,c*100,i*100]};f.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6,a=t-Math.floor(t),i=255*r*(1-n),c=255*r*(1-n*a),s=255*r*(1-n*(1-a));switch(r*=255,o){case 0:return[r,s,i];case 1:return[c,r,i];case 2:return[i,r,s];case 3:return[i,c,r];case 4:return[s,i,r];case 5:return[r,i,c]}};f.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01);let a,i;i=(2-n)*r;const c=(2-n)*o;return a=n*o,a/=c<=1?c:2-c,a=a||0,i/=2,[t,a*100,i*100]};f.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const o=n+r;let a;o>1&&(n/=o,r/=o);const i=Math.floor(6*t),c=1-r;a=6*t-i,(i&1)!==0&&(a=1-a);const s=n+a*(c-n);let u,d,h;switch(i){default:case 6:case 0:u=c,d=s,h=n;break;case 1:u=s,d=c,h=n;break;case 2:u=n,d=c,h=s;break;case 3:u=n,d=s,h=c;break;case 4:u=s,d=n,h=c;break;case 5:u=c,d=n,h=s;break}return[u*255,d*255,h*255]};f.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100,a=1-Math.min(1,t*(1-o)+o),i=1-Math.min(1,n*(1-o)+o),c=1-Math.min(1,r*(1-o)+o);return[a*255,i*255,c*255]};f.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let o,a,i;return o=t*3.2406+n*-1.5372+r*-.4986,a=t*-.9689+n*1.8758+r*.0415,i=t*.0557+n*-.204+r*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,i=i>.0031308?1.055*i**(1/2.4)-.055:i*12.92,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),i=Math.min(Math.max(0,i),1),[o*255,a*255,i*255]};f.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16,a=500*(t-n),i=200*(n-r);return[o,a,i]};f.lab.xyz=function(e){const t=e[0],n=e[1],r=e[2];let o,a,i;a=(t+16)/116,o=n/500+a,i=a-r/200;const c=a**3,s=o**3,u=i**3;return a=c>.008856?c:(a-16/116)/7.787,o=s>.008856?s:(o-16/116)/7.787,i=u>.008856?u:(i-16/116)/7.787,o*=95.047,a*=100,i*=108.883,[o,a,i]};f.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let o;o=Math.atan2(r,n)*360/2/Math.PI,o<0&&(o+=360);const i=Math.sqrt(n*n+r*r);return[t,i,o]};f.lch.lab=function(e){const t=e[0],n=e[1],o=e[2]/360*2*Math.PI,a=n*Math.cos(o),i=n*Math.sin(o);return[t,a,i]};f.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let a=t===null?f.rgb.hsv(e)[2]:t;if(a=Math.round(a/50),a===0)return 30;let i=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return a===2&&(i+=60),i};f.hsv.ansi16=function(e){return f.rgb.ansi16(f.hsv.rgb(e),e[2])};f.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};f.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=(~~(e>50)+1)*.5,r=(t&1)*n*255,o=(t>>1&1)*n*255,a=(t>>2&1)*n*255;return[r,o,a]};f.ansi256.rgb=function(e){if(e>=232){const a=(e-232)*10+8;return[a,a,a]}e-=16;let t;const n=Math.floor(e/36)/5*255,r=Math.floor((t=e%36)/6)/5*255,o=t%6/5*255;return[n,r,o]};f.rgb.hex=function(e){const n=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};f.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=n.split("").map(c=>c+c).join(""));const r=parseInt(n,16),o=r>>16&255,a=r>>8&255,i=r&255;return[o,a,i]};f.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),a=Math.min(Math.min(t,n),r),i=o-a;let c,s;return i<1?c=a/(1-i):c=0,i<=0?s=0:o===t?s=(n-r)/i%6:o===n?s=2+(r-t)/i:s=4+(t-n)/i,s/=6,s%=1,[s*360,i*100,c*100]};f.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],r*100,o*100]};f.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],r*100,o*100]};f.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(n===0)return[r*255,r*255,r*255];const o=[0,0,0],a=t%1*6,i=a%1,c=1-i;let s=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=i,o[2]=0;break;case 1:o[0]=c,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=i;break;case 3:o[0]=0,o[1]=c,o[2]=1;break;case 4:o[0]=i,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=c}return s=(1-n)*r,[(n*o[0]+s)*255,(n*o[1]+s)*255,(n*o[2]+s)*255]};f.hcg.hsv=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);let o=0;return r>0&&(o=t/r),[e[0],o*100,r*100]};f.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let o=0;return r>0&&r<.5?o=t/(2*r):r>=.5&&r<1&&(o=t/(2*(1-r))),[e[0],o*100,r*100]};f.hcg.hwb=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);return[e[0],(r-t)*100,(1-r)*100]};f.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,o=r-t;let a=0;return o<1&&(a=(r-o)/(1-o)),[e[0],o*100,a*100]};f.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};f.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};f.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};f.gray.hsl=function(e){return[0,0,e[0]]};f.gray.hsv=f.gray.hsl;f.gray.hwb=function(e){return[0,100,e[0]]};f.gray.cmyk=function(e){return[0,0,0,e[0]]};f.gray.lab=function(e){return[e[0],0,0]};f.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r};f.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const Z=Fe;function ft(){const e={},t=Object.keys(Z);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}l(ft,"buildGraph");function dt(e){const t=ft(),n=[e];for(t[e].distance=0;n.length;){const r=n.pop(),o=Object.keys(Z[r]);for(let a=o.length,i=0;i<a;i++){const c=o[i],s=t[c];s.distance===-1&&(s.distance=t[r].distance+1,s.parent=r,n.unshift(c))}}return t}l(dt,"deriveBFS");function ht(e,t){return function(n){return t(e(n))}}l(ht,"link");function vt(e,t){const n=[t[e].parent,e];let r=Z[t[e].parent][e],o=t[e].parent;for(;t[o].parent;)n.unshift(t[o].parent),r=ht(Z[t[o].parent][o],r),o=t[o].parent;return r.conversion=n,r}l(vt,"wrapConversion");var gt=l(function(e){const t=dt(e),n={},r=Object.keys(t);for(let o=r.length,a=0;a<o;a++){const i=r[a];t[i].parent!==null&&(n[i]=vt(i,t))}return n},"route$1");const se=Fe,pt=gt,$={},bt=Object.keys(se);function mt(e){const t=l(function(...n){const r=n[0];return r==null?r:(r.length>1&&(n=r),e(n))},"wrappedFn");return"conversion"in e&&(t.conversion=e.conversion),t}l(mt,"wrapRaw");function yt(e){const t=l(function(...n){const r=n[0];if(r==null)return r;r.length>1&&(n=r);const o=e(n);if(typeof o=="object")for(let a=o.length,i=0;i<a;i++)o[i]=Math.round(o[i]);return o},"wrappedFn");return"conversion"in e&&(t.conversion=e.conversion),t}l(yt,"wrapRounded");bt.forEach(e=>{$[e]={},Object.defineProperty($[e],"channels",{value:se[e].channels}),Object.defineProperty($[e],"labels",{value:se[e].labels});const t=pt(e);Object.keys(t).forEach(r=>{const o=t[r];$[e][r]=yt(o),$[e][r].raw=mt(o)})});var N=$,xt=Be,wt=l(function(){return xt.Date.now()},"now$1"),kt=wt,_t=/\s/;function Ct(e){for(var t=e.length;t--&&_t.test(e.charAt(t)););return t}l(Ct,"trimmedEndIndex$1");var Mt=Ct,St=Mt,Et=/^\s+/;function Ot(e){return e&&e.slice(0,St(e)+1).replace(Et,"")}l(Ot,"baseTrim$1");var It=Ot,jt=It,me=fe,Nt=Xe,ye=0/0,Rt=/^[-+]0x[0-9a-f]+$/i,Ht=/^0b[01]+$/i,Pt=/^0o[0-7]+$/i,Tt=parseInt;function Ft(e){if(typeof e=="number")return e;if(Nt(e))return ye;if(me(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=me(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=jt(e);var n=Ht.test(e);return n||Pt.test(e)?Tt(e.slice(2),n?2:8):Rt.test(e)?ye:+e}l(Ft,"toNumber$1");var Lt=Ft,$t=fe,oe=kt,xe=Lt,zt="Expected a function",Bt=Math.max,Xt=Math.min;function Wt(e,t,n){var r,o,a,i,c,s,u=0,d=!1,h=!1,k=!0;if(typeof e!="function")throw new TypeError(zt);t=xe(t)||0,$t(n)&&(d=!!n.leading,h="maxWait"in n,a=h?Bt(xe(n.maxWait)||0,t):a,k="trailing"in n?!!n.trailing:k);function _(x){var R=r,P=o;return r=o=void 0,u=x,i=e.apply(P,R),i}l(_,"invokeFunc");function M(x){return u=x,c=setTimeout(g,t),d?_(x):i}l(M,"leadingEdge");function j(x){var R=x-s,P=x-u,K=t-R;return h?Xt(K,a-P):K}l(j,"remainingWait");function v(x){var R=x-s,P=x-u;return s===void 0||R>=t||R<0||h&&P>=a}l(v,"shouldInvoke");function g(){var x=oe();if(v(x))return b(x);c=setTimeout(g,j(x))}l(g,"timerExpired");function b(x){return c=void 0,k&&r?_(x):(r=o=void 0,i)}l(b,"trailingEdge");function m(){c!==void 0&&clearTimeout(c),u=0,r=s=o=c=void 0}l(m,"cancel");function C(){return c===void 0?i:b(oe())}l(C,"flush");function S(){var x=oe(),R=v(x);if(r=arguments,o=this,s=x,R){if(c===void 0)return M(s);if(h)return clearTimeout(c),c=setTimeout(g,t),_(s)}return c===void 0&&(c=setTimeout(g,t)),i}return l(S,"debounced"),S.cancel=m,S.flush=C,S}l(Wt,"debounce$1");var qt=Wt,Vt=qt,Gt=fe,At="Expected a function";function Kt(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(At);return Gt(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Vt(e,t,{leading:r,maxWait:t,trailing:o})}l(Kt,"throttle");var Dt=Kt,X,W;function H(e,t){return Qt(e)||Jt(e,t)||Yt(e,t)||Ut()}l(H,"_slicedToArray");function Ut(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}l(Ut,"_nonIterableRest");function Yt(e,t){if(!!e){if(typeof e=="string")return we(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return we(e,t)}}l(Yt,"_unsupportedIterableToArray");function we(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}l(we,"_arrayLikeToArray");function Jt(e,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,o=!1,a=void 0;try{for(var i=e[Symbol.iterator](),c;!(r=(c=i.next()).done)&&(n.push(c.value),!(t&&n.length===t));r=!0);}catch(s){o=!0,a=s}finally{try{!r&&i.return!=null&&i.return()}finally{if(o)throw a}}return n}}l(Jt,"_iterableToArrayLimit");function Qt(e){if(Array.isArray(e))return e}l(Qt,"_arrayWithHoles");function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}l(E,"_defineProperty");function Zt(e,t){if(e==null)return{};var n=en(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}l(Zt,"_objectWithoutProperties");function en(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}l(en,"_objectWithoutPropertiesLoose");var tn=T.div({position:"relative",maxWidth:250}),nn=T(_e)({position:"absolute",zIndex:1,top:4,left:4}),rn=T.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),on=T(Ce)(function(e){var t=e.theme;return{fontFamily:t.typography.fonts.base}}),an=T.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),cn=T.div(function(e){var t=e.theme,n=e.active;return{width:16,height:16,boxShadow:n?"".concat(t.appBorderColor," 0 0 0 1px inset, ").concat(t.color.mediumdark,"50 0 0 0 4px"):"".concat(t.appBorderColor," 0 0 0 1px inset"),borderRadius:t.appBorderRadius}}),sn=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,le=l(function(t){var n=t.value,r=t.active,o=t.onClick,a=t.style,i=Zt(t,["value","active","onClick","style"]),c="linear-gradient(".concat(n,", ").concat(n,"), ").concat(sn,", linear-gradient(#fff, #fff)");return w(cn,{...i,active:r,onClick:o,style:Object.assign({},a,{backgroundImage:c})})},"Swatch");le.displayName="Swatch";var ln=T(We.Input)(function(e){var t=e.theme;return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:t.typography.fonts.base}}),un=T(qe)(function(e){var t=e.theme;return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:t.input.color}}),y;(function(e){e.RGB="rgb",e.HSL="hsl",e.HEX="hex"})(y||(y={}));var U=Object.values(y),fn=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,dn=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,hn=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,ue=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,vn=/^\s*#?([0-9a-f]{3})\s*$/i,gn=(X={},E(X,y.HEX,rt),E(X,y.RGB,st),E(X,y.HSL,it),X),Y=(W={},E(W,y.HEX,"transparent"),E(W,y.RGB,"rgba(0, 0, 0, 0)"),E(W,y.HSL,"hsla(0, 0%, 0%, 0)"),W),ke=l(function(t){var n=t==null?void 0:t.match(fn);if(!n)return[0,0,0,1];var r=H(n,5),o=r[1],a=r[2],i=r[3],c=r[4],s=c===void 0?1:c;return[o,a,i,s].map(Number)},"stringToArgs"),V=l(function(t){var n;if(!!t){var r=!0;if(dn.test(t)){var o,a=ke(t),i=H(a,4),c=i[0],s=i[1],u=i[2],d=i[3],h=N.rgb.hsl([c,s,u])||[0,0,0],k=H(h,3),_=k[0],M=k[1],j=k[2];return o={valid:r,value:t,keyword:N.rgb.keyword([c,s,u]),colorSpace:y.RGB},E(o,y.RGB,t),E(o,y.HSL,"hsla(".concat(_,", ").concat(M,"%, ").concat(j,"%, ").concat(d,")")),E(o,y.HEX,"#".concat(N.rgb.hex([c,s,u]).toLowerCase())),o}if(hn.test(t)){var v,g=ke(t),b=H(g,4),m=b[0],C=b[1],S=b[2],x=b[3],R=N.hsl.rgb([m,C,S])||[0,0,0],P=H(R,3),K=P[0],Le=P[1],$e=P[2];return v={valid:r,value:t,keyword:N.hsl.keyword([m,C,S]),colorSpace:y.HSL},E(v,y.RGB,"rgba(".concat(K,", ").concat(Le,", ").concat($e,", ").concat(x,")")),E(v,y.HSL,t),E(v,y.HEX,"#".concat(N.hsl.hex([m,C,S]).toLowerCase())),v}var D=t.replace("#",""),B=N.keyword.rgb(D)||N.hex.rgb(D),te=N.rgb.hsl(B),F=t;if(/[^#a-f0-9]/i.test(t)?F=D:ue.test(t)&&(F="#".concat(D)),F.startsWith("#"))r=ue.test(F);else try{N.keyword.hex(F)}catch{r=!1}return n={valid:r,value:F,keyword:N.rgb.keyword(B),colorSpace:y.HEX},E(n,y.RGB,"rgba(".concat(B[0],", ").concat(B[1],", ").concat(B[2],", 1)")),E(n,y.HSL,"hsla(".concat(te[0],", ").concat(te[1],"%, ").concat(te[2],"%, 1)")),E(n,y.HEX,F),n}},"parseValue"),pn=l(function(t,n,r){if(!t||!(n!=null&&n.valid))return Y[r];if(r!==y.HEX)return(n==null?void 0:n[r])||Y[r];if(!n.hex.startsWith("#"))try{return"#".concat(N.keyword.hex(n.hex))}catch{return Y.hex}var o=n.hex.match(vn);if(!o)return ue.test(n.hex)?n.hex:Y.hex;var a=o[1].split(""),i=H(a,3),c=i[0],s=i[1],u=i[2];return"#".concat(c).concat(c).concat(s).concat(s).concat(u).concat(u)},"getRealValue"),bn=l(function(t,n){var r=p.exports.useState(t||""),o=H(r,2),a=o[0],i=o[1],c=p.exports.useState(function(){return V(a)}),s=H(c,2),u=s[0],d=s[1],h=p.exports.useState((u==null?void 0:u.colorSpace)||y.HEX),k=H(h,2),_=k[0],M=k[1];p.exports.useEffect(function(){t===void 0&&(i(""),d(void 0),M(y.HEX))},[t]);var j=p.exports.useMemo(function(){return pn(a,u,_).toLowerCase()},[a,u,_]),v=p.exports.useCallback(function(b){var m=V(b);i((m==null?void 0:m.value)||b||""),m&&(d(m),M(m.colorSpace),n(m.value))},[n]),g=p.exports.useCallback(function(){var b=U.indexOf(_)+1;b>=U.length&&(b=0),M(U[b]);var m=(u==null?void 0:u[U[b]])||"";i(m),n(m)},[u,_,n]);return{value:a,realValue:j,updateValue:v,color:u,colorSpace:_,cycleColorSpace:g}},"useColorInput"),ee=l(function(t){return t.replace(/\s*/,"").toLowerCase()},"id"),mn=l(function(t,n,r){var o=p.exports.useState(n!=null&&n.valid?[n]:[]),a=H(o,2),i=a[0],c=a[1];p.exports.useEffect(function(){n===void 0&&c([])},[n]);var s=p.exports.useMemo(function(){var d=(t||[]).map(function(h){return typeof h=="string"?V(h):h.title?Object.assign({},V(h.color),{keyword:h.title}):V(h.color)});return d.concat(i).filter(Boolean).slice(-27)},[t,i]),u=p.exports.useCallback(function(d){!(d!=null&&d.valid)||s.some(function(h){return ee(h[r])===ee(d[r])})||c(function(h){return h.concat(d)})},[r,s]);return{presets:s,addPreset:u}},"usePresets"),yn=l(function(t){var n=t.name,r=t.value,o=t.onChange,a=t.onFocus,i=t.onBlur,c=t.presetColors,s=t.startOpen,u=bn(r,Dt(o,200)),d=u.value,h=u.realValue,k=u.updateValue,_=u.color,M=u.colorSpace,j=u.cycleColorSpace,v=mn(c,_,M),g=v.presets,b=v.addPreset,m=gn[M];return Q(tn,{children:[w(nn,{trigger:"click",startOpen:s,closeOnClick:!0,onVisibilityChange:l(function(){return b(_)},"onVisibilityChange"),tooltip:Q(rn,{children:[w(m,{color:h==="transparent"?"#000000":h,onChange:k,onFocus:a,onBlur:i}),g.length>0&&w(an,{children:g.map(function(C,S){return w(_e,{hasChrome:!1,tooltip:w(on,{note:C.keyword||C.value}),children:w(le,{value:C[M],active:_&&ee(C[M])===ee(_[M]),onClick:l(function(){return k(C.value)},"onClick")})},"".concat(C.value,"-").concat(S))})})]}),children:w(le,{value:h,style:{margin:4}})}),w(ln,{id:Ve(n),value:d,onChange:l(function(S){return k(S.target.value)},"onChange"),onFocus:l(function(S){return S.target.select()},"onFocus"),placeholder:"Choose color..."}),d?w(un,{icon:"markup",onClick:j}):null]})},"ColorControl");yn.displayName="ColorControl";export{yn as ColorControl,yn as default};
//# sourceMappingURL=Color.b1a9dc2e.js.map
