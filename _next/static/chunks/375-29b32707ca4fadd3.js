"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[375],{5113:function(e,r,t){t.d(r,{zx:function(){return W},hU:function(){return L}});var a=t(7375),n=t(6052),i=t(5031),s=t(8554),l=t.n(s),o=t(7294),c=t(6450),m=t(917),d={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},u=(0,n.m$)("span",{baseStyle:d});i.Ts&&(u.displayName="VisuallyHidden");var p=(0,n.m$)("input",{baseStyle:d});i.Ts&&(p.displayName="VisuallyHiddenInput");function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var v=["label","thickness","speed","emptyColor","className"],h=(0,m.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),g=(0,n.Gp)((function(e,r){var t=(0,n.mq)("Spinner",e),a=(0,n.Lr)(e),s=a.label,l=void 0===s?"Loading...":s,c=a.thickness,m=void 0===c?"2px":c,d=a.speed,p=void 0===d?"0.45s":d,g=a.emptyColor,y=void 0===g?"transparent":g,b=a.className,x=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(a,v),N=(0,i.cx)("chakra-spinner",b),_=f({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:m,borderBottomColor:y,borderLeftColor:y,animation:h+" "+p+" linear infinite"},t);return o.createElement(n.m$.div,f({ref:r,__css:_,className:N},x),l&&o.createElement(u,null,l))}));function y(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}function b(){return(b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}i.Ts&&(g.displayName="Spinner");var x=["size","colorScheme","variant","className","spacing","isAttached","isDisabled"],N=(0,c.kr)({strict:!1,name:"ButtonGroupContext"}),_=N[0],k=N[1],E=(0,n.Gp)((function(e,r){var t=e.size,a=e.colorScheme,s=e.variant,l=e.className,c=e.spacing,m=void 0===c?"0.5rem":c,d=e.isAttached,u=e.isDisabled,p=y(e,x),f=(0,i.cx)("chakra-button__group",l),v=o.useMemo((function(){return{size:t,colorScheme:a,variant:s,isDisabled:u}}),[t,a,s,u]),h={display:"inline-flex"};return h=b({},h,d?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:m}}),o.createElement(_,{value:v},o.createElement(n.m$.div,b({ref:r,role:"group",__css:h,className:f},p)))}));i.Ts&&(E.displayName="ButtonGroup");var w=["label","placement","spacing","children","className","__css"],T=function(e){var r=e.label,t=e.placement;e.spacing;var a=e.children,s=void 0===a?o.createElement(g,{color:"currentColor",width:"1em",height:"1em"}):a,l=e.className,c=e.__css,m=y(e,w),d=(0,i.cx)("chakra-button__spinner",l),u="start"===t?"marginEnd":"marginStart",p=o.useMemo((function(){var e;return b(((e={display:"flex",alignItems:"center",position:r?"relative":"absolute"})[u]=r?"0.5rem":0,e.fontSize="1em",e.lineHeight="normal",e),c)}),[c,r,u]);return o.createElement(n.m$.div,b({className:d},m,{__css:p}),s)};i.Ts&&(T.displayName="ButtonSpinner");var C=["children","className"],S=function(e){var r=e.children,t=e.className,a=y(e,C),s=o.isValidElement(r)?o.cloneElement(r,{"aria-hidden":!0,focusable:!1}):r,l=(0,i.cx)("chakra-button__icon",t);return o.createElement(n.m$.span,b({display:"inline-flex",alignSelf:"center",flexShrink:0},a,{className:l}),s)};i.Ts&&(S.displayName="ButtonIcon");var G=["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],W=(0,n.Gp)((function(e,r){var t=k(),s=(0,n.mq)("Button",b({},t,e)),c=(0,n.Lr)(e),m=c.isDisabled,d=void 0===m?null==t?void 0:t.isDisabled:m,u=c.isLoading,p=c.isActive,f=c.isFullWidth,v=c.children,h=c.leftIcon,g=c.rightIcon,x=c.loadingText,N=c.iconSpacing,_=void 0===N?"0.5rem":N,E=c.type,w=c.spinner,C=c.spinnerPlacement,S=void 0===C?"start":C,W=c.className,$=c.as,L=y(c,G),I=o.useMemo((function(){var e,r=l()({},null!=(e=null==s?void 0:s._focus)?e:{},{zIndex:1});return b({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:f?"100%":"auto"},s,!!t&&{_focus:r})}),[s,t,f]),j=function(e){var r=o.useState(!e),t=r[0],a=r[1];return{ref:o.useCallback((function(e){e&&a("BUTTON"===e.tagName)}),[]),type:t?"button":void 0}}($),O=j.ref,R=j.type,A={rightIcon:g,leftIcon:h,iconSpacing:_,children:v};return o.createElement(n.m$.button,b({disabled:d||u,ref:(0,a.qq)(r,O),as:$,type:null!=E?E:R,"data-active":(0,i.PB)(p),"data-loading":(0,i.PB)(u),__css:I,className:(0,i.cx)("chakra-button",W)},L),u&&"start"===S&&o.createElement(T,{className:"chakra-button__spinner--start",label:x,placement:"start"},w),u?x||o.createElement(n.m$.span,{opacity:0},o.createElement(B,A)):o.createElement(B,A),u&&"end"===S&&o.createElement(T,{className:"chakra-button__spinner--end",label:x,placement:"end"},w))}));function B(e){var r=e.leftIcon,t=e.rightIcon,a=e.children,n=e.iconSpacing;return o.createElement(o.Fragment,null,r&&o.createElement(S,{marginEnd:n},r),a,t&&o.createElement(S,{marginStart:n},t))}i.Ts&&(W.displayName="Button");var $=["icon","children","isRound","aria-label"],L=(0,n.Gp)((function(e,r){var t=e.icon,a=e.children,n=e.isRound,i=e["aria-label"],s=y(e,$),l=t||a,c=o.isValidElement(l)?o.cloneElement(l,{"aria-hidden":!0,focusable:!1}):null;return o.createElement(W,b({padding:"0",borderRadius:n?"full":void 0,ref:r,"aria-label":i},s),c)}));i.Ts&&(L.displayName="IconButton")},5115:function(e,r,t){t.d(r,{Ct:function(){return g},xu:function(){return x},M5:function(){return k},W2:function(){return C},iz:function(){return W},kC:function(){return $},Ug:function(){return te},X6:function(){return O},rU:function(){return D},fG:function(){return pe},AB:function(){return ue},aV:function(){return M},DE:function(){return Q},HC:function(){return V},Kq:function(){return re},xv:function(){return ie}});var a=t(6052),n=t(4244),i=t(5031),s=t(7294);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var o=["as","viewBox","color","focusable","children","className","__css"],c={path:s.createElement("g",{stroke:"currentColor",strokeWidth:"1.5"},s.createElement("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),s.createElement("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),s.createElement("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})),viewBox:"0 0 24 24"},m=(0,a.Gp)((function(e,r){var t=e.as,n=e.viewBox,m=e.color,d=void 0===m?"currentColor":m,u=e.focusable,p=void 0!==u&&u,f=e.children,v=e.className,h=e.__css,g=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o),y={ref:r,focusable:p,className:(0,i.cx)("chakra-icon",v),__css:l({w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:d},h)},b=null!=n?n:c.viewBox;if(t&&"string"!==typeof t)return s.createElement(a.m$.svg,l({as:t},y,g));var x=null!=f?f:c.path;return s.createElement(a.m$.svg,l({verticalAlign:"middle",viewBox:b},y,g),x)}));i.Ts&&(m.displayName="Icon");var d=t(6450);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function p(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}var f=["ratio","children","className"],v=(0,a.Gp)((function(e,r){var t=e.ratio,n=void 0===t?4/3:t,l=e.children,o=e.className,c=p(e,f),m=s.Children.only(l),d=(0,i.cx)("chakra-aspect-ratio",o);return s.createElement(a.m$.div,u({ref:r,position:"relative",className:d,_before:{height:0,content:'""',display:"block",paddingBottom:(0,i.XQ)(n,(function(e){return 1/e*100+"%"}))},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}}},c),m)}));i.Ts&&(v.displayName="AspectRatio");var h=["className"],g=(0,a.Gp)((function(e,r){var t=(0,a.mq)("Badge",e),n=(0,a.Lr)(e);n.className;var l=p(n,h);return s.createElement(a.m$.span,u({ref:r,className:(0,i.cx)("chakra-badge",e.className)},l,{__css:u({display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle"},t)}))}));i.Ts&&(g.displayName="Badge");var y=["size","centerContent"],b=["size"],x=(0,a.m$)("div");i.Ts&&(x.displayName="Box");var N=(0,a.Gp)((function(e,r){var t=e.size,a=e.centerContent,n=void 0===a||a,i=p(e,y),l=n?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return s.createElement(x,u({ref:r,boxSize:t,__css:u({},l,{flexShrink:0,flexGrow:0})},i))}));i.Ts&&(N.displayName="Square");var _=(0,a.Gp)((function(e,r){var t=e.size,a=p(e,b);return s.createElement(N,u({size:t,ref:r,borderRadius:"9999px"},a))}));i.Ts&&(_.displayName="Circle");var k=(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});i.Ts&&(k.displayName="Center");var E=["className"],w=(0,a.Gp)((function(e,r){var t=(0,a.mq)("Code",e),n=(0,a.Lr)(e);n.className;var l=p(n,E);return s.createElement(a.m$.code,u({ref:r,className:(0,i.cx)("chakra-code",e.className)},l,{__css:u({display:"inline-block"},t)}))}));i.Ts&&(w.displayName="Code");var T=["className","centerContent"],C=(0,a.Gp)((function(e,r){var t=(0,a.Lr)(e),n=t.className,l=t.centerContent,o=p(t,T),c=(0,a.mq)("Container",e);return s.createElement(a.m$.div,u({ref:r,className:(0,i.cx)("chakra-container",n)},o,{__css:u({},c,l&&{display:"flex",flexDirection:"column",alignItems:"center"})}))}));i.Ts&&(C.displayName="Container");var S=["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"],G=["className","orientation","__css"],W=(0,a.Gp)((function(e,r){var t=(0,a.mq)("Divider",e),n=t.borderLeftWidth,l=t.borderBottomWidth,o=t.borderTopWidth,c=t.borderRightWidth,m=t.borderWidth,d=t.borderStyle,f=t.borderColor,v=p(t,S),h=(0,a.Lr)(e),g=h.className,y=h.orientation,b=void 0===y?"horizontal":y,x=h.__css,N=p(h,G),_={vertical:{borderLeftWidth:n||c||m||"1px",height:"100%"},horizontal:{borderBottomWidth:l||o||m||"1px",width:"100%"}};return s.createElement(a.m$.hr,u({ref:r,"aria-orientation":b},N,{__css:u({},v,{border:"0",borderColor:f,borderStyle:d},_[b],x),className:(0,i.cx)("chakra-divider",g)}))}));i.Ts&&(W.displayName="Divider");var B=["direction","align","justify","wrap","basis","grow","shrink"],$=(0,a.Gp)((function(e,r){var t=e.direction,n=e.align,i=e.justify,l=e.wrap,o=e.basis,c=e.grow,m=e.shrink,d=p(e,B),f={display:"flex",flexDirection:t,alignItems:n,justifyContent:i,flexWrap:l,flexBasis:o,flexGrow:c,flexShrink:m};return s.createElement(a.m$.div,u({ref:r,__css:f},d))}));i.Ts&&($.displayName="Flex");var L=["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"],I=(0,a.Gp)((function(e,r){var t=e.area,n=e.templateAreas,i=e.gap,l=e.rowGap,o=e.columnGap,c=e.column,m=e.row,d=e.autoFlow,f=e.autoRows,v=e.templateRows,h=e.autoColumns,g=e.templateColumns,y=p(e,L),b={display:"grid",gridArea:t,gridTemplateAreas:n,gridGap:i,gridRowGap:l,gridColumnGap:o,gridAutoColumns:h,gridColumn:c,gridRow:m,gridAutoFlow:d,gridAutoRows:f,gridTemplateRows:v,gridTemplateColumns:g};return s.createElement(a.m$.div,u({ref:r,__css:b},y))}));i.Ts&&(I.displayName="Grid");var j=["className"],O=(0,a.Gp)((function(e,r){var t=(0,a.mq)("Heading",e),n=(0,a.Lr)(e);n.className;var l=p(n,j);return s.createElement(a.m$.h2,u({ref:r,className:(0,i.cx)("chakra-heading",e.className)},l,{__css:t}))}));i.Ts&&(O.displayName="Heading");var R=["className"],A=(0,a.Gp)((function(e,r){var t=(0,a.mq)("Kbd",e),n=(0,a.Lr)(e),l=n.className,o=p(n,R);return s.createElement(a.m$.kbd,u({ref:r,className:(0,i.cx)("chakra-kbd",l)},o,{__css:u({fontFamily:"mono"},t)}))}));i.Ts&&(A.displayName="Kbd");var z=["className","isExternal"],D=(0,a.Gp)((function(e,r){var t=(0,a.mq)("Link",e),n=(0,a.Lr)(e),l=n.className,o=n.isExternal,c=p(n,z);return s.createElement(a.m$.a,u({target:o?"_blank":void 0,rel:o?"noopener noreferrer":void 0,ref:r,className:(0,i.cx)("chakra-link",l)},c,{__css:t}))}));i.Ts&&(D.displayName="Link");var q=["children","styleType","stylePosition","spacing"],F=["as"],P=["as"],M=(0,a.Gp)((function(e,r){var t,n=(0,a.jC)("List",e),i=(0,a.Lr)(e),l=i.children,o=i.styleType,c=void 0===o?"none":o,m=i.stylePosition,f=i.spacing,v=p(i,q),h=(0,d.WR)(l),g=f?((t={})["& > *:not(style) ~ *:not(style)"]={mt:f},t):{};return s.createElement(a.Fo,{value:n},s.createElement(a.m$.ul,u({ref:r,listStyleType:c,listStylePosition:m,role:"list",__css:u({},n.container,g)},v),h))}));i.Ts&&(M.displayName="List");var X=(0,a.Gp)((function(e,r){e.as;var t=p(e,F);return s.createElement(M,u({ref:r,as:"ol",styleType:"decimal",marginStart:"1em"},t))}));i.Ts&&(X.displayName="OrderedList");var H=(0,a.Gp)((function(e,r){e.as;var t=p(e,P);return s.createElement(M,u({ref:r,as:"ul",styleType:"initial",marginStart:"1em"},t))}));i.Ts&&(H.displayName="UnorderedList");var V=(0,a.Gp)((function(e,r){var t=(0,a.yK)();return s.createElement(a.m$.li,u({ref:r},e,{__css:t.item}))}));i.Ts&&(V.displayName="ListItem");var Q=(0,a.Gp)((function(e,r){var t=(0,a.yK)();return s.createElement(m,u({ref:r,role:"presentation"},e,{__css:t.icon}))}));i.Ts&&(Q.displayName="ListIcon");var U=["columns","spacingX","spacingY","spacing","minChildWidth"],K=(0,a.Gp)((function(e,r){var t,a,n=e.columns,l=e.spacingX,o=e.spacingY,c=e.spacing,m=e.minChildWidth,d=p(e,U),f=m?(a=m,(0,i.XQ)(a,(function(e){return(0,i.Ft)(e)?null:"repeat(auto-fit, minmax("+(r=e,((0,i.hj)(r)?r+"px":r)+", 1fr))");var r}))):(t=n,(0,i.XQ)(t,(function(e){return(0,i.Ft)(e)?null:"repeat("+e+", minmax(0, 1fr))"})));return s.createElement(I,u({ref:r,gap:c,columnGap:l,rowGap:o,templateColumns:f},d))}));i.Ts&&(K.displayName="SimpleGrid");var Y=(0,a.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});i.Ts&&(Y.displayName="Spacer");var J="& > *:not(style) ~ *:not(style)";var Z=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],ee=function(e){return s.createElement(a.m$.div,u({className:"chakra-stack__item"},e,{__css:u({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))},re=(0,a.Gp)((function(e,r){var t,n=e.isInline,l=e.direction,o=e.align,c=e.justify,m=e.spacing,f=void 0===m?"0.5rem":m,v=e.wrap,h=e.children,g=e.divider,y=e.className,b=e.shouldWrapChildren,x=p(e,Z),N=n?"row":null!=l?l:"column",_=s.useMemo((function(){return function(e){var r,t=e.spacing,a=e.direction,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return(r={flexDirection:a})[J]=(0,i.XQ)(a,(function(e){return n[e]})),r}({direction:N,spacing:f})}),[N,f]),k=s.useMemo((function(){return function(e){var r=e.spacing,t=e.direction,a={column:{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:r,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:r,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,i.XQ)(t,(function(e){return a[e]}))}}({spacing:f,direction:N})}),[f,N]),E=!!g,w=!b&&!E,T=(0,d.WR)(h),C=w?T:T.map((function(e,r){var t="undefined"!==typeof e.key?e.key:r,a=r+1===T.length,n=b?s.createElement(ee,{key:t},e):e;if(!E)return n;var i=a?null:s.cloneElement(g,{__css:k});return s.createElement(s.Fragment,{key:t},n,i)})),S=(0,i.cx)("chakra-stack",y);return s.createElement(a.m$.div,u({ref:r,display:"flex",alignItems:o,justifyContent:c,flexDirection:_.flexDirection,flexWrap:v,className:S,__css:E?{}:(t={},t[J]=_[J],t)},x),C)}));i.Ts&&(re.displayName="Stack");var te=(0,a.Gp)((function(e,r){return s.createElement(re,u({align:"center"},e,{direction:"row",ref:r}))}));i.Ts&&(te.displayName="HStack");var ae=(0,a.Gp)((function(e,r){return s.createElement(re,u({align:"center"},e,{direction:"column",ref:r}))}));i.Ts&&(ae.displayName="VStack");var ne=["className","align","decoration","casing"],ie=(0,a.Gp)((function(e,r){var t=(0,a.mq)("Text",e),n=(0,a.Lr)(e);n.className,n.align,n.decoration,n.casing;var l=p(n,ne),o=(0,i.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return s.createElement(a.m$.p,u({ref:r,className:(0,i.cx)("chakra-text",e.className)},o,l,{__css:t}))}));i.Ts&&(ie.displayName="Text");var se=["spacing","children","justify","direction","align","className","shouldWrapChildren"],le=["className"],oe=(0,a.Gp)((function(e,r){var t=e.spacing,l=void 0===t?"0.5rem":t,o=e.children,c=e.justify,m=e.direction,d=e.align,f=e.className,v=e.shouldWrapChildren,h=p(e,se),g=s.useMemo((function(){return{"--chakra-wrap-spacing":function(e){return(0,i.XQ)(l,(function(r){return(0,n.fr)("space",r)(e)}))},"--wrap-spacing":"calc(var(--chakra-wrap-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:c,alignItems:d,flexDirection:m,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-spacing)"}}}),[l,c,d,m]),y=v?s.Children.map(o,(function(e,r){return s.createElement(ce,{key:r},e)})):o;return s.createElement(a.m$.div,u({ref:r,className:(0,i.cx)("chakra-wrap",f)},h),s.createElement(a.m$.ul,{className:"chakra-wrap__list",__css:g},y))}));i.Ts&&(oe.displayName="Wrap");var ce=(0,a.Gp)((function(e,r){var t=e.className,n=p(e,le);return s.createElement(a.m$.li,u({ref:r,__css:{display:"flex",alignItems:"flex-start"},className:(0,i.cx)("chakra-wrap__listitem",t)},n))}));i.Ts&&(ce.displayName="WrapItem");var me=["isExternal","target","rel","className"],de=["className"],ue=(0,a.Gp)((function(e,r){var t=e.isExternal,n=e.target,l=e.rel,o=e.className,c=p(e,me);return s.createElement(a.m$.a,u({},c,{ref:r,className:(0,i.cx)("chakra-linkbox__overlay",o),rel:t?"noopener noreferrer":l,target:t?"_blank":n,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}}))})),pe=(0,a.Gp)((function(e,r){var t=e.className,n=p(e,de);return s.createElement(a.m$.div,u({ref:r,position:"relative"},n,{className:(0,i.cx)("chakra-linkbox",t),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}}))}))}}]);