var Fs=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ws(t,e),t.prototype.render=function(){var e=this.props,t=e.dayDate,n=e.todayRange,r=this.context,i=r.theme,a=r.dateEnv,o=r.options,s=r.viewApi,l=Xr(t,n),d=o.listDayFormat?a.format(t,o.listDayFormat):"",u=o.listDaySideFormat?a.format(t,o.listDaySideFormat):"",c=o.navLinks?ei(t):null,f=zs({date:a.toDate(t),view:s,text:d,sideText:u,navLinkData:c},l),h=["fc-list-day"].concat(Kr(l,i));return Ge(Ni,{hookProps:f,classNames:o.dayHeaderClassNames,content:o.dayHeaderContent,defaultContent:Us,didMount:o.dayHeaderDidMount,willUnmount:o.dayHeaderWillUnmount},(function(e,n,r,a){return Ge("tr",{ref:e,className:h.concat(n).join(" "),"data-date":rn(t)},Ge("th",{colSpan:3},Ge("div",{className:"fc-list-day-cushion "+i.getClass("tableCellShaded"),ref:r},a)))}))},t}(_i);function Us(e){var t=e.navLinkData?{"data-navlink":e.navLinkData,tabIndex:0}:{};return Ge(Je,null,e.text&&Ge("a",zs({className:"fc-list-day-text"},t),e.text),e.sideText&&Ge("a",zs({className:"fc-list-day-side-text"},t),e.sideText))}var Vs=Mn({hour:"numeric",minute:"2-digit",meridiem:"short"}),Bs=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Ws(t,e),t.prototype.render=function(){var e=this.props,t=this.context,n=e.seg,r=t.options.eventTimeFormat||Vs;return Ge(_o,{seg:n,timeText:"",disableDragging:!0,disableResizing:!0,defaultContent:Gs,isPast:e.isPast,isFuture:e.isFuture,isToday:e.isToday,isSelected:e.isSelected,isDragging:e.isDragging,isResizing:e.isResizing,isDateSelecting:e.isDateSelecting},(function(e,i,a,o,s){return Ge("tr",{className:["fc-list-event",s.event.url?"fc-event-forced-url":""].concat(i).join(" "),ref:e},function(e,t,n){var r=n.options;if(!1!==r.displayEventTime){var i=e.eventRange.def,a=e.eventRange.instance,o=!1,s=void 0;if(i.allDay?o=!0:(d=e.eventRange.range,Lt((u=$n(d)).start,u.end)>1?e.isStart?s=mr(e,t,n,null,null,a.range.start,e.end):e.isEnd?s=mr(e,t,n,null,null,e.start,a.range.end):o=!0:s=mr(e,t,n)),o){var l={text:n.options.allDayText,view:n.viewApi};return Ge(Ni,{hookProps:l,classNames:r.allDayClassNames,content:r.allDayContent,defaultContent:qs,didMount:r.allDayDidMount,willUnmount:r.allDayWillUnmount},(function(e,t,n,r){return Ge("td",{className:["fc-list-event-time"].concat(t).join(" "),ref:e},r)}))}return Ge("td",{className:"fc-list-event-time"},s)}var d,u;return null}(n,r,t),Ge("td",{className:"fc-list-event-graphic"},Ge("span",{className:"fc-list-event-dot",style:{borderColor:s.borderColor||s.backgroundColor}})),Ge("td",{className:"fc-list-event-title",ref:a},o))}))},t}(_i);function Gs(e){var t=e.event,n=t.url;return Ge("a",zs({},n?{href:n}:{}),t.title)}function qs(e){return e.text}function Qs(e){return e.text}function Js(e){for(var t=Yt(e.renderRange.start),n=e.renderRange.end,r=[],i=[];t<n;)r.push(t),i.push({start:t,end:St(t,1)}),t=St(t,1);return{dayDates:r,dayRanges:i}}function Zs(e){return!1===e?null:Mn(e)}var $s=Ri({optionRefiners:{listDayFormat:Zs,listDaySideFormat:Zs,noEventsClassNames:xn,noEventsContent:xn,noEventsDidMount:xn,noEventsWillUnmount:xn},views:{list:{component:function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.computeDateVars=on(Js),t.eventStoreToSegs=on(t._eventStoreToSegs),t.setRootEl=function(e){e?t.context.registerInteractiveComponent(t,{el:e}):t.context.unregisterInteractiveComponent(t)},t}return Ws(t,e),t.prototype.render=function(){var e=this,t=this.props,n=this.context,r=["fc-list",n.theme.getClass("table"),!1!==n.options.stickyHeaderDates?"fc-list-sticky":""],i=this.computeDateVars(t.dateProfile),a=i.dayDates,o=i.dayRanges,s=this.eventStoreToSegs(t.eventStore,t.eventUiBases,o);return Ge(Vi,{viewSpec:n.viewSpec,elRef:this.setRootEl},(function(n,i){return Ge("div",{ref:n,className:r.concat(i).join(" ")},Ge(oo,{liquid:!t.isHeightAuto,overflowX:t.isHeightAuto?"visible":"hidden",overflowY:t.isHeightAuto?"visible":"auto"},s.length>0?e.renderSegList(s,a):e.renderEmptyMessage()))}))},t.prototype.renderEmptyMessage=function(){var e=this.context,t=e.options,n=e.viewApi,r={text:t.noEventsText,view:n};return Ge(Ni,{hookProps:r,classNames:t.noEventsClassNames,content:t.noEventsContent,defaultContent:Qs,didMount:t.noEventsDidMount,willUnmount:t.noEventsWillUnmount},(function(e,t,n,r){return Ge("div",{className:["fc-list-empty"].concat(t).join(" "),ref:e},Ge("div",{className:"fc-list-empty-cushion",ref:n},r))}))},t.prototype.renderSegList=function(e,t){var n=this.context,r=n.theme,i=n.options,a=function(e){var t,n,r=[];for(t=0;t<e.length;t++)n=e[t],(r[n.dayIndex]||(r[n.dayIndex]=[])).push(n);return r}(e);return Ge($a,{unit:"day"},(function(e,n){for(var o=[],s=0;s<a.length;s++){var l=a[s];if(l){var d=t[s].toISOString();o.push(Ge(Fs,{key:d,dayDate:t[s],todayRange:n}));for(var u=0,c=l=ur(l,i.eventOrder);u<c.length;u++){var f=c[u];o.push(Ge(Bs,zs({key:d+":"+f.eventRange.instance.instanceId,seg:f,isDragging:!1,isResizing:!1,isDateSelecting:!1,isSelected:!1},gr(f,n,e))))}}}return Ge("table",{className:"fc-list-table "+r.getClass("table")},Ge("tbody",null,o))}))},t.prototype._eventStoreToSegs=function(e,t,n){return this.eventRangesToSegs(ar(e,t,this.props.dateProfile.activeRange,this.context.options.nextDayThreshold).fg,n)},t.prototype.eventRangesToSegs=function(e,t){for(var n=[],r=0,i=e;r<i.length;r++){var a=i[r];n.push.apply(n,this.eventRangeToSegs(a,t))}return n},t.prototype.eventRangeToSegs=function(e,t){var n,r,i,a=this.context.dateEnv,o=this.context.options.nextDayThreshold,s=e.range,l=e.def.allDay,d=[];for(n=0;n<t.length;n++)if((r=tr(s,t[n]))&&(i={component:this,eventRange:e,start:r.start,end:r.end,isStart:e.isStart&&r.start.valueOf()===s.start.valueOf(),isEnd:e.isEnd&&r.end.valueOf()===s.end.valueOf(),dayIndex:n},d.push(i),!i.isEnd&&!l&&n+1<t.length&&s.end<a.add(t[n+1].start,o))){i.end=s.end,i.isEnd=!0;break}return d},t}(Ci),buttonTextKey:"list",listDayFormat:{month:"long",day:"numeric",year:"numeric"}},listDay:{type:"list",duration:{days:1},listDayFormat:{weekday:"long"}},listWeek:{type:"list",duration:{weeks:1},listDayFormat:{weekday:"long"},listDaySideFormat:{month:"long",day:"numeric",year:"numeric"}},listMonth:{type:"list",duration:{month:1},listDaySideFormat:{weekday:"long"}},listYear:{type:"list",duration:{year:1},listDaySideFormat:{weekday:"long"}}}});function Xs(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function Ks(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t?t.defaultView:window}return e}function el(e){var t=Ks(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function tl(e){return e instanceof Ks(e).Element||e instanceof Element}function nl(e){return e instanceof Ks(e).HTMLElement||e instanceof HTMLElement}function rl(e){return e?(e.nodeName||"").toLowerCase():null}function il(e){return(tl(e)?e.ownerDocument:e.document).documentElement}function al(e){return Xs(il(e)).left+el(e).scrollLeft}function ol(e,t,n){var r;void 0===n&&(n=!1);var i,a,o=Xs(e),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return n||("body"!==rl(t)&&(s=(i=t)!==Ks(i)&&nl(i)?{scrollLeft:(a=i).scrollLeft,scrollTop:a.scrollTop}:el(i)),nl(t)?((l=Xs(t)).x+=t.clientLeft,l.y+=t.clientTop):(r=il(t))&&(l.x=al(r))),{x:o.left+s.scrollLeft-l.x,y:o.top+s.scrollTop-l.y,width:o.width,height:o.height}}function sl(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function ll(e){return"html"===rl(e)?e:e.assignedSlot||e.parentNode||e.host||il(e)}function dl(e){return Ks(e).getComputedStyle(e)}function ul(e,t){void 0===t&&(t=[]);var n=function e(t){if(["html","body","#document"].indexOf(rl(t))>=0)return t.ownerDocument.body;if(nl(t)){var n=dl(t),r=n.overflow,i=n.overflowX,a=n.overflowY;if(/auto|scroll|overlay|hidden/.test(r+a+i))return t}return e(ll(t))}(e),r="body"===rl(n),i=Ks(n),a=r?[i].concat(i.visualViewport||[]):n,o=t.concat(a);return r?o:o.concat(ul(ll(a)))}function cl(e){return["table","td","th"].indexOf(rl(e))>=0}function fl(e){return nl(e)&&"fixed"!==dl(e).position?e.offsetParent:null}function hl(e){for(var t=Ks(e),n=fl(e);n&&cl(n);)n=fl(n);return n&&"body"===rl(n)&&"static"===dl(n).position?t:n||t}var pl="top",ml="bottom",gl="right",vl="left",_l=[pl,ml,gl,vl],yl=_l.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),bl=[].concat(_l,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),Ml=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function wl(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(i){n.add(i.name),[].concat(i.requires||[],i.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var i=t.get(r);i&&e(i)}})),r.push(i)}(e)})),r}var Dl={placement:"bottom",modifiers:[],strategy:"absolute"};function kl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Sl(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,a=void 0===i?Dl:i;return function(e,t,n){void 0===n&&(n=a);var i,o,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Dl,{},a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},l=[],d=!1,u={state:s,setOptions:function(n){c(),s.options=Object.assign({},a,{},s.options,{},n),s.scrollParents={reference:tl(e)?ul(e):e.contextElement?ul(e.contextElement):[],popper:ul(t)};var i=function(e){var t=wl(e);return Ml.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,{},t,{options:Object.assign({},n.options,{},t.options),data:Object.assign({},n.data,{},t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,s.options.modifiers)));return s.orderedModifiers=i.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"==typeof i){var a=i({state:s,name:t,instance:u,options:r});l.push(a||function(){})}})),u.update()},forceUpdate:function(){if(!d){var e=s.elements,t=e.reference,n=e.popper;if(kl(t,n)){s.rects={reference:ol(t,hl(n),"fixed"===s.options.strategy),popper:sl(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<s.orderedModifiers.length;r++)if(!0!==s.reset){var i=s.orderedModifiers[r],a=i.fn,o=i.options,l=void 0===o?{}:o,c=i.name;"function"==typeof a&&(s=a({state:s,options:l,name:c,instance:u})||s)}else s.reset=!1,r=-1}}},update:(i=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return o||(o=new Promise((function(e){Promise.resolve().then((function(){o=void 0,e(i())}))}))),o}),destroy:function(){c(),d=!0}};if(!kl(e,t))return u;function c(){l.forEach((function(e){return e()})),l=[]}return u.setOptions(n).then((function(e){!d&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var Tl={passive:!0};function Ll(e){return e.split("-")[0]}function El(e){return e.split("-")[1]}function Yl(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Al(e){var t,n=e.reference,r=e.element,i=e.placement,a=i?Ll(i):null,o=i?El(i):null,s=n.x+n.width/2-r.width/2,l=n.y+n.height/2-r.height/2;switch(a){case pl:t={x:s,y:n.y-r.height};break;case ml:t={x:s,y:n.y+n.height};break;case gl:t={x:n.x+n.width,y:l};break;case vl:t={x:n.x-r.width,y:l};break;default:t={x:n.x,y:n.y}}var d=a?Yl(a):null;if(null!=d){var u="y"===d?"height":"width";switch(o){case"start":t[d]=Math.floor(t[d])-Math.floor(n[u]/2-r[u]/2);break;case"end":t[d]=Math.floor(t[d])+Math.ceil(n[u]/2-r[u]/2)}}return t}var xl={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Cl(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.offsets,o=e.position,s=e.gpuAcceleration,l=e.adaptive,d=function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Math.round(t*r)/r||0,y:Math.round(n*r)/r||0}}(a),u=d.x,c=d.y,f=a.hasOwnProperty("x"),h=a.hasOwnProperty("y"),p=vl,m=pl,g=window;if(l){var v=hl(n);v===Ks(n)&&(v=il(n)),i===pl&&(m=ml,c-=v.clientHeight-r.height,c*=s?1:-1),i===vl&&(p=gl,u-=v.clientWidth-r.width,u*=s?1:-1)}var _,y=Object.assign({position:o},l&&xl);return s?Object.assign({},y,((_={})[m]=h?"0":"",_[p]=f?"0":"",_.transform=(g.devicePixelRatio||1)<2?"translate("+u+"px, "+c+"px)":"translate3d("+u+"px, "+c+"px, 0)",_)):Object.assign({},y,((t={})[m]=h?c+"px":"",t[p]=f?u+"px":"",t.transform="",t))}var Rl={left:"right",right:"left",bottom:"top",top:"bottom"};function Hl(e){return e.replace(/left|right|bottom|top/g,(function(e){return Rl[e]}))}var Ol={start:"end",end:"start"};function Pl(e){return e.replace(/start|end/g,(function(e){return Ol[e]}))}function Nl(e){return parseFloat(e)||0}function jl(e){var t=Ks(e),n=function(e){var t=nl(e)?dl(e):{};return{top:Nl(t.borderTopWidth),right:Nl(t.borderRightWidth),bottom:Nl(t.borderBottomWidth),left:Nl(t.borderLeftWidth)}}(e),r="html"===rl(e),i=al(e),a=e.clientWidth+n.right,o=e.clientHeight+n.bottom;return r&&t.innerHeight-e.clientHeight>50&&(o=t.innerHeight-n.bottom),{top:r?0:e.clientTop,right:e.clientLeft>n.left?n.right:r?t.innerWidth-a-i:e.offsetWidth-a,bottom:r?t.innerHeight-o:e.offsetHeight-o,left:r?i:e.clientLeft}}function Il(e,t){var n=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(n){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Wl(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function zl(e,t){return"viewport"===t?Wl(function(e){var t=Ks(e),n=t.visualViewport,r=t.innerWidth,i=t.innerHeight;return n&&/iPhone|iPod|iPad/.test(navigator.platform)&&(r=n.width,i=n.height),{width:r,height:i,x:0,y:0}}(e)):nl(t)?Xs(t):Wl(function(e){var t=Ks(e),n=el(e),r=ol(il(e),t);return r.height=Math.max(r.height,t.innerHeight),r.width=Math.max(r.width,t.innerWidth),r.x=-n.scrollLeft,r.y=-n.scrollTop,r}(il(e)))}function Fl(e,t,n){var r="clippingParents"===t?function(e){var t=ul(e),n=["absolute","fixed"].indexOf(dl(e).position)>=0&&nl(e)?hl(e):e;return tl(n)?t.filter((function(e){return tl(e)&&Il(e,n)})):[]}(e):[].concat(t),i=[].concat(r,[n]),a=i[0],o=i.reduce((function(t,n){var r=zl(e,n),i=jl(nl(n)?n:il(e));return t.top=Math.max(r.top+i.top,t.top),t.right=Math.min(r.right-i.right,t.right),t.bottom=Math.min(r.bottom-i.bottom,t.bottom),t.left=Math.max(r.left+i.left,t.left),t}),zl(e,a));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Ul(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},{},e)}function Vl(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function Bl(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=void 0===r?e.placement:r,a=n.boundary,o=void 0===a?"clippingParents":a,s=n.rootBoundary,l=void 0===s?"viewport":s,d=n.elementContext,u=void 0===d?"popper":d,c=n.altBoundary,f=void 0!==c&&c,h=n.padding,p=void 0===h?0:h,m=Ul("number"!=typeof p?p:Vl(p,_l)),g="popper"===u?"reference":"popper",v=e.elements.reference,_=e.rects.popper,y=e.elements[f?g:u],b=Fl(tl(y)?y:y.contextElement||il(e.elements.popper),o,l),M=Xs(v),w=Al({reference:M,element:_,strategy:"absolute",placement:i}),D=Wl(Object.assign({},_,{},w)),k="popper"===u?D:M,S={top:b.top-k.top+m.top,bottom:k.bottom-b.bottom+m.bottom,left:b.left-k.left+m.left,right:k.right-b.right+m.right},T=e.modifiersData.offset;if("popper"===u&&T){var L=T[i];Object.keys(S).forEach((function(e){var t=[gl,ml].indexOf(e)>=0?1:-1,n=[pl,ml].indexOf(e)>=0?"y":"x";S[e]+=L[n]*t}))}return S}function Gl(e,t,n){return Math.max(e,Math.min(t,n))}function ql(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ql(e){return[pl,gl,ml,vl].some((function(t){return e[t]>=0}))}var Jl=Sl({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,o=r.resize,s=void 0===o||o,l=Ks(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&d.forEach((function(e){e.addEventListener("scroll",n.update,Tl)})),s&&l.addEventListener("resize",n.update,Tl),function(){a&&d.forEach((function(e){e.removeEventListener("scroll",n.update,Tl)})),s&&l.removeEventListener("resize",n.update,Tl)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Al({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,a=n.adaptive,o=void 0===a||a,s={placement:Ll(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,{},Cl(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,{},Cl(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];nl(i)&&rl(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});nl(r)&&rl(r)&&(Object.assign(r.style,a),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,a=void 0===i?[0,0]:i,o=bl.reduce((function(e,n){return e[n]=function(e,t,n){var r=Ll(e),i=[vl,pl].indexOf(r)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,o=a[0],s=a[1];return o=o||0,s=(s||0)*i,[vl,gl].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}(n,t.rects,a),e}),{}),s=o[t.placement],l=s.x,d=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=d),t.modifiersData[r]=o}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.fallbackPlacements,a=n.padding,o=n.boundary,s=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,u=void 0===d||d,c=n.allowedAutoPlacements,f=t.options.placement,h=Ll(f),p=i||(h===f||!u?[Hl(f)]:function(e){if("auto"===Ll(e))return[];var t=Hl(e);return[Pl(e),t,Pl(t)]}(f)),m=[f].concat(p).reduce((function(e,n){return e.concat("auto"===Ll(n)?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,a=n.rootBoundary,o=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,d=void 0===l?bl:l,u=El(r),c=(u?s?yl:yl.filter((function(e){return El(e)===u})):_l).filter((function(e){return d.indexOf(e)>=0})).reduce((function(t,n){return t[n]=Bl(e,{placement:n,boundary:i,rootBoundary:a,padding:o})[Ll(n)],t}),{});return Object.keys(c).sort((function(e,t){return c[e]-c[t]}))}(t,{placement:n,boundary:o,rootBoundary:s,padding:a,flipVariations:u,allowedAutoPlacements:c}):n)}),[]),g=t.rects.reference,v=t.rects.popper,_=new Map,y=!0,b=m[0],M=0;M<m.length;M++){var w=m[M],D=Ll(w),k="start"===El(w),S=[pl,ml].indexOf(D)>=0,T=S?"width":"height",L=Bl(t,{placement:w,boundary:o,rootBoundary:s,altBoundary:l,padding:a}),E=S?k?gl:vl:k?ml:pl;g[T]>v[T]&&(E=Hl(E));var Y=Hl(E),A=[L[D]<=0,L[E]<=0,L[Y]<=0];if(A.every((function(e){return e}))){b=w,y=!1;break}_.set(w,A)}if(y)for(var x=function(e){var t=m.find((function(t){var n=_.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return b=t,"break"},C=u?3:1;C>0;C--){if("break"===x(C))break}t.placement!==b&&(t.modifiersData[r]._skip=!0,t.placement=b,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.mainAxis,a=void 0===i||i,o=n.altAxis,s=void 0!==o&&o,l=n.boundary,d=n.rootBoundary,u=n.altBoundary,c=n.padding,f=n.tether,h=void 0===f||f,p=n.tetherOffset,m=void 0===p?0:p,g=Bl(t,{boundary:l,rootBoundary:d,padding:c,altBoundary:u}),v=Ll(t.placement),_=El(t.placement),y=!_,b=Yl(v),M="x"===b?"y":"x",w=t.modifiersData.popperOffsets,D=t.rects.reference,k=t.rects.popper,S="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,T={x:0,y:0};if(w){if(a){var L="y"===b?pl:vl,E="y"===b?ml:gl,Y="y"===b?"height":"width",A=w[b],x=w[b]+g[L],C=w[b]-g[E],R=h?-k[Y]/2:0,H="start"===_?D[Y]:k[Y],O="start"===_?-k[Y]:-D[Y],P=t.elements.arrow,N=h&&P?sl(P):{width:0,height:0},j=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},I=j[L],W=j[E],z=Gl(0,D[Y],N[Y]),F=y?D[Y]/2-R-z-I-S:H-z-I-S,U=y?-D[Y]/2+R+z+W+S:O+z+W+S,V=t.elements.arrow&&hl(t.elements.arrow),B=V?"y"===b?V.clientTop||0:V.clientLeft||0:0,G=t.modifiersData.offset?t.modifiersData.offset[t.placement][b]:0,q=w[b]+F-G-B,Q=w[b]+U-G,J=Gl(h?Math.min(x,q):x,A,h?Math.max(C,Q):C);w[b]=J,T[b]=J-A}if(s){var Z="x"===b?pl:vl,$="x"===b?ml:gl,X=w[M],K=Gl(X+g[Z],X,X-g[$]);w[M]=K,T[M]=K-X}t.modifiersData[r]=T}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,i=n.elements.arrow,a=n.modifiersData.popperOffsets,o=Ll(n.placement),s=Yl(o),l=[vl,gl].indexOf(o)>=0?"height":"width";if(i&&a){var d=n.modifiersData[r+"#persistent"].padding,u=sl(i),c="y"===s?pl:vl,f="y"===s?ml:gl,h=n.rects.reference[l]+n.rects.reference[s]-a[s]-n.rects.popper[l],p=a[s]-n.rects.reference[s],m=n.elements.arrow&&hl(n.elements.arrow),g=m?"y"===s?m.clientHeight||0:m.clientWidth||0:0,v=h/2-p/2,_=d[c],y=g-u[l]-d[f],b=g/2-u[l]/2+v,M=Gl(_,b,y),w=s;n.modifiersData[r]=((t={})[w]=M,t.centerOffset=M-b,t)}},effect:function(e){var t=e.state,n=e.options,r=e.name,i=n.element,a=void 0===i?"[data-popper-arrow]":i,o=n.padding,s=void 0===o?0:o;null!=a&&("string"!=typeof a||(a=t.elements.popper.querySelector(a)))&&Il(t.elements.popper,a)&&(t.elements.arrow=a,t.modifiersData[r+"#persistent"]={padding:Ul("number"!=typeof s?s:Vl(s,_l))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,a=t.modifiersData.preventOverflow,o=Bl(t,{elementContext:"reference"}),s=Bl(t,{altBoundary:!0}),l=ql(o,r),d=ql(s,i,a),u=Ql(l),c=Ql(d);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:d,isReferenceHidden:u,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":c})}}]}),Zl={passive:!0,capture:!0};function $l(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function Xl(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function Kl(e,t){return"function"==typeof e?e.apply(void 0,t):e}function ed(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function td(e){return[].concat(e)}function nd(e,t){-1===e.indexOf(t)&&e.push(t)}function rd(e){return e.split("-")[0]}function id(e){return[].slice.call(e)}function ad(){return document.createElement("div")}function od(e){return["Element","Fragment"].some((function(t){return Xl(e,t)}))}function sd(e){return Xl(e,"MouseEvent")}function ld(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function dd(e){return od(e)?[e]:function(e){return Xl(e,"NodeList")}(e)?id(e):Array.isArray(e)?e:id(document.querySelectorAll(e))}function ud(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function cd(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function fd(e){var t=td(e)[0];return t&&t.ownerDocument||document}function hd(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}var pd={isTouch:!1},md=0;function gd(){pd.isTouch||(pd.isTouch=!0,window.performance&&document.addEventListener("mousemove",vd))}function vd(){var e=performance.now();e-md<20&&(pd.isTouch=!1,document.removeEventListener("mousemove",vd)),md=e}function _d(){var e=document.activeElement;if(ld(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var yd="undefined"!=typeof window&&"undefined"!=typeof document?navigator.userAgent:"",bd=/MSIE |Trident\//.test(yd);var Md={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},wd=Object.assign({appendTo:function(){return document.body},aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Md,{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),Dd=Object.keys(wd);function kd(e){var t=(e.plugins||[]).reduce((function(t,n){var r=n.name,i=n.defaultValue;return r&&(t[r]=void 0!==e[r]?e[r]:i),t}),{});return Object.assign({},e,{},t)}function Sd(e,t){var n=Object.assign({},t,{content:Kl(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(kd(Object.assign({},wd,{plugins:t}))):Dd).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(e){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},wd.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function Td(e,t){e.innerHTML=t}function Ld(e){var t=ad();return!0===e?t.className="tippy-arrow":(t.className="tippy-svg-arrow",od(e)?t.appendChild(e):Td(t,e)),t}function Ed(e,t){od(t.content)?(Td(e,""),e.appendChild(t.content)):"function"!=typeof t.content&&(t.allowHTML?Td(e,t.content):e.textContent=t.content)}function Yd(e){var t=e.firstElementChild,n=id(t.children);return{box:t,content:n.find((function(e){return e.classList.contains("tippy-content")})),arrow:n.find((function(e){return e.classList.contains("tippy-arrow")||e.classList.contains("tippy-svg-arrow")})),backdrop:n.find((function(e){return e.classList.contains("tippy-backdrop")}))}}function Ad(e){var t=ad(),n=ad();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=ad();function i(n,r){var i=Yd(t),a=i.box,o=i.content,s=i.arrow;r.theme?a.setAttribute("data-theme",r.theme):a.removeAttribute("data-theme"),"string"==typeof r.animation?a.setAttribute("data-animation",r.animation):a.removeAttribute("data-animation"),r.inertia?a.setAttribute("data-inertia",""):a.removeAttribute("data-inertia"),a.style.maxWidth="number"==typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?a.setAttribute("role",r.role):a.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||Ed(o,e.props),r.arrow?s?n.arrow!==r.arrow&&(a.removeChild(s),a.appendChild(Ld(r.arrow))):a.appendChild(Ld(r.arrow)):s&&a.removeChild(s)}return r.className="tippy-content",r.setAttribute("data-state","hidden"),Ed(r,e.props),t.appendChild(n),n.appendChild(r),i(e.props,e.props),{popper:t,onUpdate:i}}Ad.$$tippy=!0;var xd=1,Cd=[],Rd=[];function Hd(e,t){var n,r,i,a,o,s,l,d,u=Sd(e,Object.assign({},wd,{},kd(t))),c=!1,f=!1,h=!1,p=!1,m=[],g=ed(q,u.interactiveDebounce),v=fd(u.triggerTarget||e),_=xd++,y=(d=u.plugins).filter((function(e,t){return d.indexOf(e)===t})),b={id:_,reference:e,popper:ad(),popperInstance:null,props:u,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:y,clearDelayTimeouts:function(){clearTimeout(n),clearTimeout(r),cancelAnimationFrame(i)},setProps:function(t){0;if(b.state.isDestroyed)return;R("onBeforeUpdate",[b,t]),B();var n=b.props,r=Sd(e,Object.assign({},b.props,{},t,{ignoreAttributes:!0}));b.props=r,V(),n.interactiveDebounce!==r.interactiveDebounce&&(P(),g=ed(q,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?td(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");O(),C(),D&&D(n,r);b.popperInstance&&($(),K().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));R("onAfterUpdate",[b,t])},setContent:function(e){b.setProps({content:e})},show:function(){0;var e=b.state.isVisible,t=b.state.isDestroyed,n=!b.state.isEnabled,r=pd.isTouch&&!b.props.touch,i=$l(b.props.duration,0,wd.duration);if(e||t||n||r)return;if(Y().hasAttribute("disabled"))return;if(R("onShow",[b],!1),!1===b.props.onShow(b))return;b.state.isVisible=!0,E()&&(w.style.visibility="visible");C(),W(),b.state.isMounted||(w.style.transition="none");if(E()){var a=A(),o=a.box,l=a.content;ud([o,l],0)}s=function(){if(b.state.isVisible&&!p){if(p=!0,w.offsetHeight,w.style.transition=b.props.moveTransition,E()&&b.props.animation){var e=A(),t=e.box,n=e.content;ud([t,n],i),cd([t,n],"visible")}H(),O(),nd(Rd,b),b.state.isMounted=!0,R("onMount",[b]),b.props.animation&&E()&&function(e,t){F(e,t)}(i,(function(){b.state.isShown=!0,R("onShown",[b])}))}},function(){var e,t=b.props.appendTo,n=Y();e=b.props.interactive&&t===wd.appendTo||"parent"===t?n.parentNode:Kl(t,[n]);e.contains(w)||e.appendChild(w);$(),!1}()},hide:function(){0;var e=!b.state.isVisible,t=b.state.isDestroyed,n=!b.state.isEnabled,r=$l(b.props.duration,1,wd.duration);if(e||t||n)return;if(R("onHide",[b],!1),!1===b.props.onHide(b))return;b.state.isVisible=!1,b.state.isShown=!1,p=!1,E()&&(w.style.visibility="hidden");if(P(),z(),C(),E()){var i=A(),a=i.box,o=i.content;b.props.animation&&(ud([a,o],r),cd([a,o],"hidden"))}H(),O(),b.props.animation?E()&&function(e,t){F(e,(function(){!b.state.isVisible&&w.parentNode&&w.parentNode.contains(w)&&t()}))}(r,b.unmount):b.unmount()},hideWithInteractivity:function(e){0;b.state.isVisible&&(v.body.addEventListener("mouseleave",te),v.addEventListener("mousemove",g),nd(Cd,g),g(e))},enable:function(){b.state.isEnabled=!0},disable:function(){b.hide(),b.state.isEnabled=!1},unmount:function(){0;b.state.isVisible&&b.hide();if(!b.state.isMounted)return;X(),K().forEach((function(e){e._tippy.unmount()})),w.parentNode&&w.parentNode.removeChild(w);Rd=Rd.filter((function(e){return e!==b})),b.state.isMounted=!1,R("onHidden",[b])},destroy:function(){0;if(b.state.isDestroyed)return;b.clearDelayTimeouts(),b.unmount(),B(),delete e._tippy,b.state.isDestroyed=!0,R("onDestroy",[b])}};if(!u.render)return b;var M=u.render(b),w=M.popper,D=M.onUpdate;w.setAttribute("data-tippy-root",""),w.id="tippy-"+b.id,b.popper=w,e._tippy=b,w._tippy=b;var k=y.map((function(e){return e.fn(b)})),S=e.hasAttribute("aria-expanded");return V(),O(),C(),R("onCreate",[b]),u.showOnCreate&&ee(),w.addEventListener("mouseenter",(function(){b.props.interactive&&b.state.isVisible&&b.clearDelayTimeouts()})),w.addEventListener("mouseleave",(function(e){b.props.interactive&&b.props.trigger.indexOf("mouseenter")>=0&&(v.addEventListener("mousemove",g),g(e))})),b;function T(){var e=b.props.touch;return Array.isArray(e)?e:[e,0]}function L(){return"hold"===T()[0]}function E(){var e;return!!(null==(e=b.props.render)?void 0:e.$$tippy)}function Y(){return l||e}function A(){return Yd(w)}function x(e){return b.state.isMounted&&!b.state.isVisible||pd.isTouch||a&&"focus"===a.type?0:$l(b.props.delay,e?0:1,wd.delay)}function C(){w.style.pointerEvents=b.props.interactive&&b.state.isVisible?"":"none",w.style.zIndex=""+b.props.zIndex}function R(e,t,n){var r;(void 0===n&&(n=!0),k.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n)&&(r=b.props)[e].apply(r,t)}function H(){var t=b.props.aria;if(t.content){var n="aria-"+t.content,r=w.id;td(b.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(b.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var i=t&&t.replace(r,"").trim();i?e.setAttribute(n,i):e.removeAttribute(n)}}))}}function O(){!S&&b.props.aria.expanded&&td(b.props.triggerTarget||e).forEach((function(e){b.props.interactive?e.setAttribute("aria-expanded",b.state.isVisible&&e===Y()?"true":"false"):e.removeAttribute("aria-expanded")}))}function P(){v.body.removeEventListener("mouseleave",te),v.removeEventListener("mousemove",g),Cd=Cd.filter((function(e){return e!==g}))}function N(e){if(!(pd.isTouch&&(h||"mousedown"===e.type)||b.props.interactive&&w.contains(e.target))){if(Y().contains(e.target)){if(pd.isTouch)return;if(b.state.isVisible&&b.props.trigger.indexOf("click")>=0)return}else R("onClickOutside",[b,e]);!0===b.props.hideOnClick&&(c=!1,b.clearDelayTimeouts(),b.hide(),f=!0,setTimeout((function(){f=!1})),b.state.isMounted||z())}}function j(){h=!0}function I(){h=!1}function W(){v.addEventListener("mousedown",N,!0),v.addEventListener("touchend",N,Zl),v.addEventListener("touchstart",I,Zl),v.addEventListener("touchmove",j,Zl)}function z(){v.removeEventListener("mousedown",N,!0),v.removeEventListener("touchend",N,Zl),v.removeEventListener("touchstart",I,Zl),v.removeEventListener("touchmove",j,Zl)}function F(e,t){var n=A().box;function r(e){e.target===n&&(hd(n,"remove",r),t())}if(0===e)return t();hd(n,"remove",o),hd(n,"add",r),o=r}function U(t,n,r){void 0===r&&(r=!1),td(b.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),m.push({node:e,eventType:t,handler:n,options:r})}))}function V(){var e;L()&&(U("touchstart",G,{passive:!0}),U("touchend",Q,{passive:!0})),(e=b.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(U(e,G),e){case"mouseenter":U("mouseleave",Q);break;case"focus":U(bd?"focusout":"blur",J);break;case"focusin":U("focusout",J)}}))}function B(){m.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,i=e.options;t.removeEventListener(n,r,i)})),m=[]}function G(e){var t,n=!1;if(b.state.isEnabled&&!Z(e)&&!f){var r="focus"===(null==(t=a)?void 0:t.type);a=e,l=e.currentTarget,O(),!b.state.isVisible&&sd(e)&&Cd.forEach((function(t){return t(e)})),"click"===e.type&&(b.props.trigger.indexOf("mouseenter")<0||c)&&!1!==b.props.hideOnClick&&b.state.isVisible?n=!0:ee(e),"click"===e.type&&(c=!n),n&&!r&&te(e)}}function q(t){var n=t.target,r=e.contains(n)||w.contains(n);"mousemove"===t.type&&r||function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,i=e.popperState,a=e.props.interactiveBorder,o=rd(i.placement),s=i.modifiersData.offset;if(!s)return!0;var l="bottom"===o?s.top.y:0,d="top"===o?s.bottom.y:0,u="right"===o?s.left.x:0,c="left"===o?s.right.x:0,f=t.top-r+l>a,h=r-t.bottom-d>a,p=t.left-n+u>a,m=n-t.right-c>a;return f||h||p||m}))}(K().concat(w).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:u}:null})).filter(Boolean),t)&&(P(),te(t))}function Q(e){Z(e)||b.props.trigger.indexOf("click")>=0&&c||(b.props.interactive?b.hideWithInteractivity(e):te(e))}function J(e){b.props.trigger.indexOf("focusin")<0&&e.target!==Y()||b.props.interactive&&e.relatedTarget&&w.contains(e.relatedTarget)||te(e)}function Z(e){return!!pd.isTouch&&L()!==e.type.indexOf("touch")>=0}function $(){X();var t=b.props,n=t.popperOptions,r=t.placement,i=t.offset,a=t.getReferenceClientRect,o=t.moveTransition,l=E()?Yd(w).arrow:null,d=a?{getBoundingClientRect:a,contextElement:a.contextElement||Y()}:e,u=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!o}},{name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(E()){var n=A().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}}];E()&&l&&u.push({name:"arrow",options:{element:l,padding:3}}),u.push.apply(u,(null==n?void 0:n.modifiers)||[]),b.popperInstance=Jl(d,w,Object.assign({},n,{placement:r,onFirstUpdate:s,modifiers:u}))}function X(){b.popperInstance&&(b.popperInstance.destroy(),b.popperInstance=null)}function K(){return id(w.querySelectorAll("[data-tippy-root]"))}function ee(e){b.clearDelayTimeouts(),e&&R("onTrigger",[b,e]),W();var t=x(!0),r=T(),i=r[0],a=r[1];pd.isTouch&&"hold"===i&&a&&(t=a),t?n=setTimeout((function(){b.show()}),t):b.show()}function te(e){if(b.clearDelayTimeouts(),R("onUntrigger",[b,e]),b.state.isVisible){if(!(b.props.trigger.indexOf("mouseenter")>=0&&b.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&c)){var t=x(!1);t?r=setTimeout((function(){b.state.isVisible&&b.hide()}),t):i=requestAnimationFrame((function(){b.hide()}))}}else z()}}function Od(e,t){void 0===t&&(t={});var n=wd.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",gd,Zl),window.addEventListener("blur",_d);var r=Object.assign({},t,{plugins:n}),i=dd(e).reduce((function(e,t){var n=t&&Hd(t,r);return n&&e.push(n),e}),[]);return od(e)?i[0]:i}Od.defaultProps=wd,Od.setDefaultProps=function(e){Object.keys(e).forEach((function(t){wd[t]=e[t]}))},Od.currentInput=pd;Od.setDefaultProps({render:Ad});var Pd=Od,Nd=n(4),jd=n.n(Nd),Id=n(5),Wd=n.n(Id),zd=n(6),Fd=n.n(zd),Ud=(n(9),n(0));const Vd=function(e,t){Ud.locale(t);let n=Ud(new Date(e.start)),r=e.end?Ud(new Date(e.end)):Ud(new Date(e.start)).add(1,"days"),i="";return e.allDay?(r=r.startOf("day").add(-1,"hours"),i=n.clone().startOf("day").isSame(r.clone().startOf("day"))?""+n.format("dddd, D MMMM"):n.month()==r.month()?`${n.format("D")} - ${r.format("D MMMM YYYY")}`:n.year()==r.year()?`${n.format("D MMMM")} - ${r.format("D MMMM YYYY")}`:`${n.format("D MMMM YYYY")} - ${r.format("D MMMM YYYY")}`):i=n.clone().startOf("day").isSame(r.clone().startOf("day"))?n.format("a")==r.format("a")?`${n.format("dddd, D MMMM")}  ⋅ ${n.format("h:mm")} - ${r.format("h:mm a")}`:`${n.format("dddd, D MMMM")}  ⋅ ${n.format("h:mm a")} - ${r.format("h:mm a")}`:`${n.format("D MMMM YYYY, h:mm a")} - ${r.format("D MMMM YYYY, h:mm a")}`,i};class Bd{static FromEventData(e,t){var n=new Bd;return n.title=t.summary?t.summary:t.title,n.start=t.start.date?t.start.date:t.start.dateTime?t.start.dateTime:t.start,n.end=t.end.date?t.end.date:t.end.dateTime?t.end.dateTime:t.end,n.allDay=function(e){var t=!1;if(e.start.date)t=!0;else if(e.start.dateTime)t=!1;else{let n=Ud(e.start);t=Ud(e.end).diff(n,"hours")>=24}return t}(t),n.displayTime=Vd(n,e.language),n}static FromEntity(e,t,n){var r=new Bd;if(r.title=t.name?t.name:n.attributes.friendly_name,"timestamp"===n.attributes.device_class)r.start=n.state;else{n.entity_id.split(".")[0];r.start=n.attributes.last_changed?n.attributes.last_changed:n.last_changed}return r.allDay=!0,r.displayTime=Vd(r,e.language),r}}class Gd{constructor(){this.eventData={}}async getEvents(e,t,n,r){if(!e)return[];var i=t.entity;return"calendar"==i.split(".")[0]?this.getCalendarEvents(e,i,n,r):this.getEntityEvents(e,t)}async getEntityEvents(e,t){var n=e.states[t.entity];if(t.time_list_attribute){var r=Bd.FromEntity(e,t,n),i=n.attributes[t.time_list_attribute];return i?i.map(e=>({...r,start:e})):[r]}return[Bd.FromEntity(e,t,n)]}async getCalendarEvents(e,t,n,r){let i=`calendars/${t}?start=${n.toISOString()}&end=${r.toISOString()}`;var a=(await e.callApi("get",i)).map(t=>Bd.FromEventData(e,t));let o=this.eventData[t]||[];return o.push(...a),this.eventData[t]=o.filter((e,t)=>{const n=JSON.stringify(e);return t===o.findIndex(e=>JSON.stringify(e)===n)}),this.eventData[t]}}const qd=K`
  :host {
    font-family: var(--paper-font-body1_-_font-family);
    -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);
    font-size: var(--paper-font-body1_-_font-size);
    font-weight: var(--paper-font-body1_-_font-weight);
    line-height: var(--paper-font-body1_-_line-height);
  }

  app-header-layout,
  ha-app-layout {
    background-color: var(--primary-background-color);
  }

  app-header,
  app-toolbar {
    background-color: var(--app-header-background-color);
    font-weight: 400;
    color: var(--app-header-text-color, white);
  }

  app-toolbar {
    height: var(--header-height);
  }

  app-header div[sticky] {
    height: 48px;
  }

  app-toolbar [main-title] {
    margin-left: 20px;
  }

  h1 {
    font-family: var(--paper-font-headline_-_font-family);
    -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
    white-space: var(--paper-font-headline_-_white-space);
    overflow: var(--paper-font-headline_-_overflow);
    text-overflow: var(--paper-font-headline_-_text-overflow);
    font-size: var(--paper-font-headline_-_font-size);
    font-weight: var(--paper-font-headline_-_font-weight);
    line-height: var(--paper-font-headline_-_line-height);
  }

  h2 {
    font-family: var(--paper-font-title_-_font-family);
    -webkit-font-smoothing: var(--paper-font-title_-_-webkit-font-smoothing);
    white-space: var(--paper-font-title_-_white-space);
    overflow: var(--paper-font-title_-_overflow);
    text-overflow: var(--paper-font-title_-_text-overflow);
    font-size: var(--paper-font-title_-_font-size);
    font-weight: var(--paper-font-title_-_font-weight);
    line-height: var(--paper-font-title_-_line-height);
  }

  h3 {
    font-family: var(--paper-font-subhead_-_font-family);
    -webkit-font-smoothing: var(--paper-font-subhead_-_-webkit-font-smoothing);
    white-space: var(--paper-font-subhead_-_white-space);
    overflow: var(--paper-font-subhead_-_overflow);
    text-overflow: var(--paper-font-subhead_-_text-overflow);
    font-size: var(--paper-font-subhead_-_font-size);
    font-weight: var(--paper-font-subhead_-_font-weight);
    line-height: var(--paper-font-subhead_-_line-height);
  }

  a {
    color: var(--primary-color);
  }

  .secondary {
    color: var(--secondary-text-color);
  }

  .error {
    color: var(--error-color);
  }

  .warning {
    color: var(--error-color);
  }

  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }

  button.link {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    text-align: left;
    text-decoration: underline;
    cursor: pointer;
  }

  .card-actions a {
    text-decoration: none;
  }

  .card-actions .warning {
    --mdc-theme-primary: var(--error-color);
  }

  .layout.horizontal,
  .layout.vertical {
    display: flex;
  }
  .layout.inline {
    display: inline-flex;
  }
  .layout.horizontal {
    flex-direction: row;
  }
  .layout.vertical {
    flex-direction: column;
  }
  .layout.wrap {
    flex-wrap: wrap;
  }
  .layout.no-wrap {
    flex-wrap: nowrap;
  }
  .layout.center,
  .layout.center-center {
    align-items: center;
  }
  .layout.bottom {
    align-items: flex-end;
  }
  .layout.center-justified,
  .layout.center-center {
    justify-content: center;
  }
  .flex {
    flex: 1;
    flex-basis: 0.000000001px;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .flex-none {
    flex: none;
  }
  .layout.justified {
    justify-content: space-between;
  }
`;var Qd,Jd;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Qd||(Qd={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Jd||(Jd={}));function Zd(){return(Zd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}new Set(["fan","input_boolean","light","switch","group","automation"]),new Set(["call-service","divider","section","weblink","cast","select"]);const $d=[{label:"Month View",value:"dayGridMonth",iconPath:"M16,5V11H21V5M10,11H15V5H10M16,18H21V12H16M10,18H15V12H10M4,18H9V12H4M4,11H9V5H4V11Z"},{label:"Week View",value:"dayGridWeek",iconPath:"M13,5H10A1,1 0 0,0 9,6V18A1,1 0 0,0 10,19H13A1,1 0 0,0 14,18V6A1,1 0 0,0 13,5M20,5H17A1,1 0 0,0 16,6V18A1,1 0 0,0 17,19H20A1,1 0 0,0 21,18V6A1,1 0 0,0 20,5M6,5H3A1,1 0 0,0 2,6V18A1,1 0 0,0 3,19H6A1,1 0 0,0 7,18V6A1,1 0 0,0 6,5Z"},{label:"Day View",value:"dayGridDay",iconPath:"M2,3V6H21V3M20,8H3A1,1 0 0,0 2,9V15A1,1 0 0,0 3,16H20A1,1 0 0,0 21,15V9A1,1 0 0,0 20,8M2,21H21V18H2V21Z"},{label:"List View",value:"list",iconPath:"M21 3H3C2.4 3 2 3.4 2 4V10C2 10.6 2.4 11 3 11H21C21.6 11 22 10.6 22 10V4C22 3.4 21.6 3 21 3M21 13H3C2.4 13 2 13.4 2 14V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20V14C22 13.4 21.6 13 21 13Z"}],Xd=e=>{const t=new Date(e.valueOf()),n=new Date(e.valueOf());return n.setDate(n.getDate()+7),{start:t,end:n}};customElements.define("fullcalendar-card",class extends te{constructor(){super(),this._activeView="dayGridMonth",this.initialView="dayGridMonth",this.views=["dayGridMonth","dayGridWeek","dayGridDay"]}setConfig(e){if(!e||!e.entities)throw new Error("Invalid configuration");this._config=e,this.entities=this.processConfigEntities(this._config.entities),this.calendarService=new Gd}static get styles(){return console.log("getting styles"),[qd,K`
        ${X(We.a)}
      	${X(os.a)}
      	${X(js.a)}
      	${X(jd.a)}
      	${X(Wd.a)}
      	${X(Fd.a)}
      	
        :host {
          display: flex;
          flex-direction: column;
          --fc-theme-standard-border-color: var(--divider-color);
        }
        
        :host([ispanel]) {
    		height: calc(100% - 6em);
        }
        
        :host([ispanel]) ha-card {
        	height: calc(100% - 6em);
        }
        
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 8px;
        }

        :host([narrow]) .header {
          padding-right: 8px;
          padding-left: 8px;
          flex-direction: column;
          align-items: flex-start;
          justify-content: initial;
        }

        .navigation {
          display: flex;
          align-items: center;
          flex-grow: 0;
        }

        a {
          color: var(--primary-text-color);
        }

        .controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .today {
          margin-right: 20px;
        }

        .prev,
        .next {
          --mdc-icon-button-size: 32px;
        }

        ha-button-toggle-group {
          color: var(--primary-color);
        }
        
        #calendar {
          flex-grow: 1;
          background-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          min-height: 400px;
          --fc-neutral-bg-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          --fc-list-event-hover-bg-color: var(
            --ha-card-background,
            var(--card-background-color, white)
          );
          --fc-theme-standard-border-color: var(--divider-color);
          --fc-border-color: var(--divider-color);
          height: 100%;
        }

        a {
            color: inherit !important; 
        }

        .fc-theme-standard .fc-scrollgrid {
          border: 1px solid var(--divider-color);
        }

        .fc-scrollgrid-section-header td {
          border: none;
        }

        th.fc-col-header-cell.fc-day {
          color: var(--secondary-text-color);
          font-size: 11px;
          font-weight: 400;
          text-transform: uppercase;
        }

        .fc-daygrid-dot-event:hover {
          background-color: inherit
        }

        .fc-daygrid-day-top {
          text-align: center;
          padding-top: 5px;
          justify-content: center;
        }

        table.fc-scrollgrid-sync-table
          tbody
          tr:first-child
          .fc-daygrid-day-top {
          padding-top: 0;
        }

        a.fc-daygrid-day-number {
          float: none !important;
          font-size: 12px;
        }

        .fc .fc-daygrid-day-number {
            padding: 3px !important;
        }

        .fc .fc-daygrid-day.fc-day-today {
          background: inherit;
        }

        td.fc-day-today .fc-daygrid-day-top {
          padding-top: 4px;
        }

        td.fc-day-today .fc-daygrid-day-number {
          height: 24px;
          color: var(--text-primary-color) !important;
          background-color: var(--primary-color);
          border-radius: 50%;
          display: inline-block;
          text-align: center;
          white-space: nowrap;
          width: max-content;
          min-width: 24px;
          line-height: 140%;
        }

        .fc-daygrid-day-events {
          margin-top: 4px;
        }

        .fc-event {
          border-radius: 4px;
          line-height: 1.7;
        }

        .fc-daygrid-block-event .fc-event-main {
          padding: 0 1px;
        }

        .fc-day-past .fc-daygrid-day-events {
          opacity: 0.5;
        }

        .fc-icon-x:before {
          font-family: var(--material-font-family);
          content: "X";
        }

        .fc-popover {
          background-color: var(--primary-background-color) !important;
        }

        .fc-popover-header {
          background-color: var(--secondary-background-color) !important;
        }

        .fc-theme-standard .fc-list-day-frame {
          background-color: transparent;
        }

        .fc-list.fc-view,
        .fc-list-event.fc-event td {
          border: none;
        }

        .fc-list-day.fc-day th {
          border-bottom: none;
          border-top: 1px solid var(--fc-theme-standard-border-color, #ddd) !important;
        }

        .fc-list-day-text {
          font-size: 16px;
          font-weight: 400;
        }

        .fc-list-day-side-text {
          font-weight: 400;
          font-size: 16px;
          color: var(--primary-color);
        }

        .fc-list-table td,
        .fc-list-day-frame {
          padding-top: 12px;
          padding-bottom: 12px;
        }

        :host([narrow]) .fc-dayGridMonth-view
          .fc-daygrid-dot-event
          .fc-event-time,
        :host([narrow]) .fc-dayGridMonth-view
          .fc-daygrid-dot-event
          .fc-event-title,
          :host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-bottom {
          display: none;
        }

        :host([narrow]) .fc .fc-dayGridMonth-view .fc-daygrid-event-harness-abs {
          visibility: visible !important;
          position: static;
        }

        :host([narrow]) .fc-dayGridMonth-view .fc-daygrid-day-events {
          display: flex;
          min-height: 2em !important;
          justify-content: center;
          flex-wrap: wrap;
          max-height: 2em;
          height: 2em;
          overflow: hidden;
        }

        :host([narrow]) .fc-dayGridMonth-view .fc-scrollgrid-sync-table {
          overflow: hidden;
        }

        .fc-scroller::-webkit-scrollbar {
          width: 0.4rem;
          height: 0.4rem;
        }

        .fc-scroller::-webkit-scrollbar-thumb {
          -webkit-border-radius: 4px;
          border-radius: 4px;
          background: var(--scrollbar-thumb-color);
        }

        .fc-scroller {
          overflow-y: auto;
          scrollbar-color: var(--scrollbar-thumb-color) transparent;
          scrollbar-width: thin;
        }
      `]}get calendarHtml(){const e=$d.filter(e=>this.views.includes(e.value));return j`<ha-card>
      ${this.calendar?j`
            <div class="header">
              ${this.narrow?j`
                    <div class="controls">
                      <h1>
                        ${this.calendar.view.title}
                      </h1>
                      <div>
                        <ha-icon-button
                          label=${this._hass.localize("ui.common.previous")}
                          icon="hass:chevron-left"
                          class="prev"
                          @click=${this._handlePrev}
                        >
                        </ha-icon-button>
                        <ha-icon-button
                          label=${this._hass.localize("ui.common.next")}
                          icon="hass:chevron-right"
                          class="next"
                          @click=${this._handleNext}
                        >
                        </ha-icon-button>
                      </div>
                    </div>
                    <div class="controls">
                      <mwc-button
                        outlined
                        class="today"
                        @click=${this._handleToday}
                        >Today</mwc-button
                      >
                      <ha-button-toggle-group
                        .buttons=${e}
                        .active=${this._activeView}
                        @value-changed=${this._handleView}
                      ></ha-button-toggle-group>
                    </div>
                  `:j`
                    <div class="navigation">
                      <mwc-button
                        outlined
                        class="today"
                        @click=${this._handleToday}
                        >Today</mwc-button
                      >
                      <ha-icon-button
                        label=${this._hass.localize("ui.common.previous")}
                        icon="hass:chevron-left"
                        class="prev"
                        @click=${this._handlePrev}
                      >
                      </ha-icon-button>
                      <ha-icon-button
                        label=${this._hass.localize("ui.common.next")}
                        icon="hass:chevron-right"
                        class="next"
                        @click=${this._handleNext}
                      >
                      </ha-icon-button>
                    </div>
                    <h1>
                      ${this.calendar.view.title}
                    </h1>
                    <ha-button-toggle-group
                      .buttons=${e}
                      .active=${this._activeView}
                      @value-changed=${this._handleView}
                    ></ha-button-toggle-group>
                  `}
            </div>
          `:""}
      <div id="calendar"></div></ha-card>
    `}render(){return[this.calendarHtml]}get root(){return this.shadowRoot?this.shadowRoot:this}static get properties(){return{narrow:{type:Boolean,reflect:!0},views:{type:Object},initialView:{type:Object},isPanel:{type:Boolean,reflect:!0},_hass:{type:Object}}}processConfigEntities(e){if(!Array.isArray(e))throw new Error("Entities need to be an array");return e.map((e,t)=>{if("string"==typeof e)e={entity:e,eventColor:"#3788d8"};else{if("object"!=typeof e||Array.isArray(e))throw new Error(`Invalid entity specified at position ${t}.`);if(!e.entity)throw new Error(`Entity object at position ${t} is missing entity field.`)}return e})}updateAspectRatio(){this._measureCard(),this.calendar&&this.calendar.updateSize()}getEventSources(){return this.entities.map(e=>({events:async t=>await this.calendarService.getEvents(this._hass,e,t.start,t.end),id:e.entity.startsWith("calendar")?e.name?e.name:this._hass.states[e.entity].attributes.friendly_name:"Entities",color:e.eventColor}))}updated(e){if(super.updated(e),this.calendar&&(e.has("narrow")&&(this.views=this.narrow?["list","dayGridMonth","dayGridDay"]:["dayGridMonth","dayGridWeek","dayGridDay"],this.initialView=this.narrow?"list":"dayGridMonth",this._activeView=this.initialView,this.calendar.changeView(this._activeView),this.calendar.setOption("eventDisplay",this.narrow?"list-item":"auto"),this.requestUpdate()),e.has("views")&&!this.views.includes(this._activeView)&&(this._activeView=this.initialView&&this.views.includes(this.initialView)?this.initialView:this.views[0],this.calendar.changeView(this._activeView),this.requestUpdate()),this._config&&this._hass)){const t=e.get("_hass");t&&t.themes===this._hass.themes||function(e,t,n,r){void 0===r&&(r=!1),e._themes||(e._themes={});var i=t.default_theme;("default"===n||n&&t.themes[n])&&(i=n);var a=Zd({},e._themes);if("default"!==i){var o=t.themes[i];Object.keys(o).forEach((function(t){var n="--"+t;e._themes[n]="",a[n]=o[t]}))}if(e.updateStyles?e.updateStyles(a):window.ShadyCSS&&window.ShadyCSS.styleSubtree(e,a),r){var s=document.querySelector("meta[name=theme-color]");if(s){s.hasAttribute("default-content")||s.setAttribute("default-content",s.getAttribute("content"));var l=a["--primary-color"]||s.getAttribute("default-content");s.setAttribute("content",l)}}}(this,this._hass.themes,this._config.theme)}}firstUpdated(){var e=this.root.querySelector("#calendar");window.innerHeight,window.innerWidth;Pd.setDefaultProps({maxWidth:"",maxHeight:""}),this.calendar=new Ao(e,{plugins:[Ps,$s,is],initialView:this.initialView,locale:this._hass.language,eventDisplay:"auto",views:{list:{visibleRange:Xd}},headerToolbar:!1,height:"parent",eventTimeFormat:{hour:"numeric",minute:"2-digit",hour12:!1},eventSources:this.getEventSources(),windowResize:()=>{this.updateAspectRatio()},eventDidMount:function(t){Pd(t.el,{content:`<div style="min-width:40em; min-height:10em;">\n  \t\t\t\t\t\t<h2>${t.event.title}</h2>\n  \t\t\t\t\t\t<p><ha-icon icon="mdi:clock"></ha-icon> ${t.event.extendedProps.displayTime}</p>\n\t \t\t\t\t\t<p></p>\n\t \t\t\t\t\t<p><ha-icon icon="mdi:calendar"></ha-icon> ${t.event.source.id}</p>\n\t \t\t\t\t</div>\n\t \t\t`,arrow:!1,animation:"scale-extreme",placement:"auto",theme:"homeassistant",appendTo:e,trigger:"click",hideOnClick:!0,onHide(e){let t=new Date;e.lastHidden=t},onShow(e){let t=new Date;if(e.lastHidden){if(t.getTime()-e.lastHidden.getTime()<500)return!1}},popperOptions:{modifiers:[{name:"flip",options:{fallbackPlacements:["bottom","right"]}},{name:"preventOverflow",options:{altAxis:!0,tether:!1}}]},allowHTML:!0})}}),this.calendar.render(),this._measureCard(),this.requestUpdate()}getCardSize(){return 2}_measureCard(){let e=this.shadowRoot.querySelector("#calendar");e&&(this.narrow=e.offsetWidth<870,this.requestUpdate())}set hass(e){this._hass=e,this.calendar&&this.updateAspectRatio()}_handleNext(){this.calendar.next(),this.requestUpdate()}_handlePrev(){this.calendar.prev(),this.requestUpdate()}_handleToday(){this.calendar.today(),this.requestUpdate()}_handleView(e){this._activeView=e.detail.value,this.calendar.changeView(this._activeView),this.requestUpdate()}});
