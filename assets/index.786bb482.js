var $=Object.defineProperty,B=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var R=(i,n,e)=>n in i?$(i,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[n]=e,F=(i,n)=>{for(var e in n||(n={}))P.call(n,e)&&R(i,e,n[e]);if(W)for(var e of W(n))V.call(n,e)&&R(i,e,n[e]);return i},N=(i,n)=>B(i,O(n));import{r as u,j as X,R as b,a as j,d as C}from"./vendor.d13dd881.js";const z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerpolicy&&(t.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?t.credentials="include":l.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(l){if(l.ep)return;l.ep=!0;const t=e(l);fetch(l.href,t)}};z();async function q(i){const n=K["Time Series (Daily)"];return Object.keys(n).map(e=>({date:e,value:Number(n[e]["4. close"]),volume:Number(n[e]["5. volume"])}))}const K={"Time Series (Daily)":{"2022-02-18":{"1. open":"169.8200","2. high":"170.5413","3. low":"166.1900","4. close":"167.3000","5. volume":"82772674"},"2022-02-17":{"1. open":"171.0300","2. high":"171.9100","3. low":"168.4700","4. close":"168.8800","5. volume":"69589344"},"2022-02-16":{"1. open":"171.8500","2. high":"173.3400","3. low":"170.0500","4. close":"172.5500","5. volume":"61177398"},"2022-02-15":{"1. open":"170.9700","2. high":"172.9500","3. low":"170.2500","4. close":"172.7900","5. volume":"64286320"},"2022-02-14":{"1. open":"167.3700","2. high":"169.5800","3. low":"166.5600","4. close":"168.8800","5. volume":"86185530"},"2022-02-11":{"1. open":"172.3300","2. high":"173.0800","3. low":"168.0400","4. close":"168.6400","5. volume":"98670687"},"2022-02-10":{"1. open":"174.1400","2. high":"175.4800","3. low":"171.5500","4. close":"172.1200","5. volume":"90865899"},"2022-02-09":{"1. open":"176.0500","2. high":"176.6500","3. low":"174.9000","4. close":"176.2800","5. volume":"71285038"},"2022-02-08":{"1. open":"171.7300","2. high":"175.3500","3. low":"171.4300","4. close":"174.8300","5. volume":"74829217"},"2022-02-07":{"1. open":"172.8600","2. high":"173.9458","3. low":"170.9500","4. close":"171.6600","5. volume":"77251204"},"2022-02-04":{"1. open":"171.6800","2. high":"174.1000","3. low":"170.6800","4. close":"172.3900","5. volume":"82465400"},"2022-02-03":{"1. open":"174.4800","2. high":"176.2399","3. low":"172.1200","4. close":"172.9000","5. volume":"89418074"},"2022-02-02":{"1. open":"174.7450","2. high":"175.8800","3. low":"173.3300","4. close":"175.8400","5. volume":"84914256"},"2022-02-01":{"1. open":"174.0100","2. high":"174.8400","3. low":"172.3100","4. close":"174.6100","5. volume":"86213911"},"2022-01-31":{"1. open":"170.1600","2. high":"175.0000","3. low":"169.5100","4. close":"174.7800","5. volume":"115541590"},"2022-01-28":{"1. open":"165.7100","2. high":"170.3500","3. low":"162.8000","4. close":"170.3300","5. volume":"179935660"},"2022-01-27":{"1. open":"162.4500","2. high":"163.8400","3. low":"158.2800","4. close":"159.2200","5. volume":"121954638"},"2022-01-26":{"1. open":"163.5000","2. high":"164.3894","3. low":"157.8200","4. close":"159.6900","5. volume":"108275308"},"2022-01-25":{"1. open":"158.9800","2. high":"162.7600","3. low":"157.0200","4. close":"159.7800","5. volume":"115798367"},"2022-01-24":{"1. open":"160.0200","2. high":"162.3000","3. low":"154.7000","4. close":"161.6200","5. volume":"162706686"},"2022-01-21":{"1. open":"164.4150","2. high":"166.3300","3. low":"162.3000","4. close":"162.4100","5. volume":"122848858"},"2022-01-20":{"1. open":"166.9800","2. high":"169.6800","3. low":"164.1800","4. close":"164.5100","5. volume":"91420515"},"2022-01-19":{"1. open":"170.0000","2. high":"171.0800","3. low":"165.9400","4. close":"166.2300","5. volume":"92914792"},"2022-01-18":{"1. open":"171.5100","2. high":"172.5400","3. low":"169.4050","4. close":"169.8000","5. volume":"90500236"},"2022-01-14":{"1. open":"171.3400","2. high":"173.7800","3. low":"171.0900","4. close":"173.0700","5. volume":"80440780"},"2022-01-13":{"1. open":"175.7800","2. high":"176.6200","3. low":"171.7900","4. close":"172.1900","5. volume":"84505760"},"2022-01-12":{"1. open":"176.1200","2. high":"177.1800","3. low":"174.8200","4. close":"175.5300","5. volume":"74805173"},"2022-01-11":{"1. open":"172.3200","2. high":"175.1800","3. low":"170.8200","4. close":"175.0800","5. volume":"75937685"},"2022-01-10":{"1. open":"169.0800","2. high":"172.5000","3. low":"168.1700","4. close":"172.1900","5. volume":"106765552"},"2022-01-07":{"1. open":"172.8900","2. high":"174.1400","3. low":"171.0300","4. close":"172.1700","5. volume":"86709147"},"2022-01-06":{"1. open":"172.7000","2. high":"175.3000","3. low":"171.6400","4. close":"172.0000","5. volume":"96903955"},"2022-01-05":{"1. open":"179.6100","2. high":"180.1700","3. low":"174.6400","4. close":"174.9200","5. volume":"94537602"},"2022-01-04":{"1. open":"182.6300","2. high":"182.9400","3. low":"179.1200","4. close":"179.7000","5. volume":"99310438"},"2022-01-03":{"1. open":"177.8300","2. high":"182.8800","3. low":"177.7100","4. close":"182.0100","5. volume":"104701220"},"2021-12-31":{"1. open":"178.0850","2. high":"179.2300","3. low":"177.2600","4. close":"177.5700","5. volume":"61661433"},"2021-12-30":{"1. open":"179.4700","2. high":"180.5700","3. low":"178.0900","4. close":"178.2000","5. volume":"59773014"},"2021-12-29":{"1. open":"179.3300","2. high":"180.6300","3. low":"178.1400","4. close":"179.3800","5. volume":"62348931"},"2021-12-28":{"1. open":"180.1600","2. high":"181.3300","3. low":"178.5300","4. close":"179.2900","5. volume":"79144339"},"2021-12-27":{"1. open":"177.0850","2. high":"180.4200","3. low":"177.0700","4. close":"180.3300","5. volume":"74919582"},"2021-12-23":{"1. open":"175.8500","2. high":"176.8499","3. low":"175.2700","4. close":"176.2800","5. volume":"68356567"},"2021-12-22":{"1. open":"173.0400","2. high":"175.8600","3. low":"172.1500","4. close":"175.6400","5. volume":"92135303"},"2021-12-21":{"1. open":"171.5550","2. high":"173.2000","3. low":"169.1200","4. close":"172.9900","5. volume":"91185905"},"2021-12-20":{"1. open":"168.2800","2. high":"170.5800","3. low":"167.4600","4. close":"169.7500","5. volume":"107499114"},"2021-12-17":{"1. open":"169.9300","2. high":"173.4700","3. low":"169.6900","4. close":"171.1400","5. volume":"195923441"},"2021-12-16":{"1. open":"179.2800","2. high":"181.1400","3. low":"170.7500","4. close":"172.2600","5. volume":"150185843"},"2021-12-15":{"1. open":"175.1100","2. high":"179.5000","3. low":"172.3108","4. close":"179.3000","5. volume":"131063257"},"2021-12-14":{"1. open":"175.2500","2. high":"177.7400","3. low":"172.2100","4. close":"174.3300","5. volume":"139380382"},"2021-12-13":{"1. open":"181.1150","2. high":"182.1300","3. low":"175.5300","4. close":"175.7400","5. volume":"153237019"},"2021-12-10":{"1. open":"175.2050","2. high":"179.6300","3. low":"174.6900","4. close":"179.4500","5. volume":"115402731"},"2021-12-09":{"1. open":"174.9100","2. high":"176.7500","3. low":"173.9200","4. close":"174.5600","5. volume":"108923739"},"2021-12-08":{"1. open":"172.1250","2. high":"175.9600","3. low":"170.7000","4. close":"175.0800","5. volume":"116998901"},"2021-12-07":{"1. open":"169.0800","2. high":"171.5800","3. low":"168.3400","4. close":"171.1800","5. volume":"120405352"},"2021-12-06":{"1. open":"164.2900","2. high":"167.8799","3. low":"164.2800","4. close":"165.3200","5. volume":"107496982"},"2021-12-03":{"1. open":"164.0200","2. high":"164.9600","3. low":"159.7200","4. close":"161.8400","5. volume":"118023116"},"2021-12-02":{"1. open":"158.7350","2. high":"164.2000","3. low":"157.8000","4. close":"163.7600","5. volume":"136739174"},"2021-12-01":{"1. open":"167.4800","2. high":"170.3000","3. low":"164.5300","4. close":"164.7700","5. volume":"152423003"},"2021-11-30":{"1. open":"159.9850","2. high":"165.5200","3. low":"159.9200","4. close":"165.3000","5. volume":"174048056"},"2021-11-29":{"1. open":"159.3700","2. high":"161.1900","3. low":"158.7901","4. close":"160.2400","5. volume":"88748217"},"2021-11-26":{"1. open":"159.5650","2. high":"160.4500","3. low":"156.3600","4. close":"156.8100","5. volume":"76959752"},"2021-11-24":{"1. open":"160.7500","2. high":"162.1400","3. low":"159.6400","4. close":"161.9400","5. volume":"69463623"},"2021-11-23":{"1. open":"161.1200","2. high":"161.8000","3. low":"159.0601","4. close":"161.4100","5. volume":"96041899"},"2021-11-22":{"1. open":"161.6800","2. high":"165.7000","3. low":"161.0000","4. close":"161.0200","5. volume":"117467889"},"2021-11-19":{"1. open":"157.6500","2. high":"161.0200","3. low":"156.5328","4. close":"160.5500","5. volume":"117305597"},"2021-11-18":{"1. open":"153.7100","2. high":"158.6700","3. low":"153.0500","4. close":"157.8700","5. volume":"137827673"},"2021-11-17":{"1. open":"150.9950","2. high":"155.0000","3. low":"150.9900","4. close":"153.4900","5. volume":"88807000"},"2021-11-16":{"1. open":"149.9400","2. high":"151.4880","3. low":"149.3400","4. close":"151.0000","5. volume":"59256210"},"2021-11-15":{"1. open":"150.3700","2. high":"151.8800","3. low":"149.4300","4. close":"150.0000","5. volume":"59222803"},"2021-11-12":{"1. open":"148.4300","2. high":"150.4000","3. low":"147.4800","4. close":"149.9900","5. volume":"63245197"},"2021-11-11":{"1. open":"148.9600","2. high":"149.4300","3. low":"147.6810","4. close":"147.8700","5. volume":"40999950"},"2021-11-10":{"1. open":"150.0200","2. high":"150.1300","3. low":"147.8500","4. close":"147.9200","5. volume":"65187092"},"2021-11-09":{"1. open":"150.2000","2. high":"151.4280","3. low":"150.0601","4. close":"150.8100","5. volume":"56573449"},"2021-11-08":{"1. open":"151.4100","2. high":"151.5700","3. low":"150.1600","4. close":"150.4400","5. volume":"55020868"},"2021-11-05":{"1. open":"151.8900","2. high":"152.2000","3. low":"150.0600","4. close":"151.2800","5. volume":"65463883"},"2021-11-04":{"1. open":"151.5800","2. high":"152.4300","3. low":"150.6400","4. close":"150.9600","5. volume":"60394616"},"2021-11-03":{"1. open":"150.3900","2. high":"151.9700","3. low":"149.8200","4. close":"151.4900","5. volume":"54511534"},"2021-11-02":{"1. open":"148.6600","2. high":"151.5700","3. low":"148.6500","4. close":"150.0200","5. volume":"68922374"},"2021-11-01":{"1. open":"148.9850","2. high":"149.7000","3. low":"147.8000","4. close":"148.9600","5. volume":"73396551"},"2021-10-29":{"1. open":"147.2150","2. high":"149.9400","3. low":"146.4128","4. close":"149.8000","5. volume":"124953168"},"2021-10-28":{"1. open":"149.8200","2. high":"153.1650","3. low":"149.7200","4. close":"152.5700","5. volume":"100077888"},"2021-10-27":{"1. open":"149.3600","2. high":"149.7300","3. low":"148.4900","4. close":"148.8500","5. volume":"56094929"},"2021-10-26":{"1. open":"149.3300","2. high":"150.8400","3. low":"149.0101","4. close":"149.3200","5. volume":"60893395"},"2021-10-25":{"1. open":"148.6800","2. high":"149.3700","3. low":"147.6211","4. close":"148.6400","5. volume":"50720556"},"2021-10-22":{"1. open":"149.6900","2. high":"150.1800","3. low":"148.6400","4. close":"148.6900","5. volume":"58883443"},"2021-10-21":{"1. open":"148.8100","2. high":"149.6400","3. low":"147.8700","4. close":"149.4800","5. volume":"61420990"},"2021-10-20":{"1. open":"148.7000","2. high":"149.7539","3. low":"148.1200","4. close":"149.2600","5. volume":"58418788"},"2021-10-19":{"1. open":"147.0100","2. high":"149.1700","3. low":"146.5500","4. close":"148.7600","5. volume":"76378894"},"2021-10-18":{"1. open":"143.4450","2. high":"146.8400","3. low":"143.1600","4. close":"146.5500","5. volume":"85589175"},"2021-10-15":{"1. open":"143.7700","2. high":"144.8950","3. low":"143.5100","4. close":"144.8400","5. volume":"67940334"},"2021-10-14":{"1. open":"142.1100","2. high":"143.8800","3. low":"141.5100","4. close":"143.7600","5. volume":"69907100"},"2021-10-13":{"1. open":"141.2350","2. high":"141.4000","3. low":"139.2000","4. close":"140.9100","5. volume":"78762721"},"2021-10-12":{"1. open":"143.2300","2. high":"143.2500","3. low":"141.0401","4. close":"141.5100","5. volume":"73035859"},"2021-10-11":{"1. open":"142.2700","2. high":"144.8100","3. low":"141.8100","4. close":"142.8100","5. volume":"64452219"},"2021-10-08":{"1. open":"144.0300","2. high":"144.1781","3. low":"142.5600","4. close":"142.9000","5. volume":"58773155"},"2021-10-07":{"1. open":"143.0600","2. high":"144.2150","3. low":"142.7200","4. close":"143.2900","5. volume":"61732656"},"2021-10-06":{"1. open":"139.4700","2. high":"142.1500","3. low":"138.3700","4. close":"142.0000","5. volume":"83221119"},"2021-10-05":{"1. open":"139.4900","2. high":"142.2400","3. low":"139.3600","4. close":"141.1100","5. volume":"80861062"},"2021-10-04":{"1. open":"141.7600","2. high":"142.2100","3. low":"138.2700","4. close":"139.1400","5. volume":"98322008"},"2021-10-01":{"1. open":"141.9000","2. high":"142.9200","3. low":"139.1101","4. close":"142.6500","5. volume":"94639581"},"2021-09-30":{"1. open":"143.6600","2. high":"144.3780","3. low":"141.2800","4. close":"141.5000","5. volume":"89056664"},"2021-09-29":{"1. open":"142.4700","2. high":"144.4500","3. low":"142.0300","4. close":"142.8300","5. volume":"74602044"}}};const k=u.exports.createContext({width:0,height:0,xAxisTicks:[],xAxisFn:()=>0,yAxisTicks:[],yAxisFn:()=>0,xTickHeight:20,yTickWidth:30,onHoverItem:()=>{}}),s=X.exports.jsx,y=X.exports.jsxs,H=i=>{const{width:n,height:e,xAxisTicks:o,yAxisTicks:l,yTickWidth:t=30,DivProps:c}=i,r=20,p=u.exports.useCallback(w=>{if(o.length===0)return 0;const v=(n-t-20)/(o.length-1);return t+o.findIndex(f=>f===w)*v},[o,n,t]),m=u.exports.useCallback(w=>{if(l.length===0)return 0;const f=e-r-10;if(typeof w=="number"&&typeof l[0]=="number"){const T=l[0],Y=l[l.length-1];return(w-T)/(Y-T)*f+10}const S=f/(l.length-1);return l.findIndex(T=>T===w)*S+10},[l,r,e]),[h,x]=u.exports.useState();return s(k.Provider,{value:{width:n,height:e,xAxisFn:p,xAxisTicks:o,yAxisFn:m,yAxisTicks:l,xTickHeight:r,yTickWidth:t,hoverItem:h,onHoverItem:x},children:s("div",N(F({},c),{style:N(F({},c==null?void 0:c.style),{width:n,height:e}),children:s("svg",{viewBox:`0 0 ${n} ${e}`,children:i.children})}))})},U=i=>{const{data:n,x:e,y:o}=i,{xAxisFn:l,yAxisFn:t,onHoverItem:c}=u.exports.useContext(k);return s("g",{className:"line",children:n.map((r,p)=>y(b.Fragment,{children:[p!==0&&s("line",{x1:l(n[p-1][e]),y1:t(n[p-1][o]),x2:l(r[e]),y2:t(r[o]),stroke:"blue"}),s("circle",{cx:l(r[e]),cy:t(r[o]),r:4,fill:"blue",onMouseEnter:m=>c({x:m.clientX,y:m.clientY,data:r}),onMouseLeave:()=>c()})]},p))})},G=i=>{const{data:n,x:e,y:o}=i,{xAxisFn:l,yAxisFn:t,yAxisTicks:c,onHoverItem:r}=u.exports.useContext(k),p=t(c[c.length-1]),m=10;return s("g",{className:"line",children:n.map((h,x)=>s(b.Fragment,{children:s("rect",{x:l(h[e])-m/2,y:t(h[o]),width:m,height:p-t(h[o]),fill:"blue",onMouseEnter:w=>r({x:w.clientX,y:w.clientY,data:h}),onMouseLeave:()=>r()})},x))})},J=i=>{const{maxTickCount:n=10,fontSize:e=8,label:o=h=>h.toString()}=i,{xAxisFn:l,yAxisFn:t,xAxisTicks:c,yAxisTicks:r,xTickHeight:p}=u.exports.useContext(k),m=Math.ceil(c.length/n);return s("g",{className:"xAxis",children:c.map((h,x)=>y(b.Fragment,{children:[s("line",{className:((c.length-x)%m).toString(),x1:l(h),y1:t(r[0]),x2:l(h),y2:t(r[r.length-1]),stroke:"#cfcfcf"}),(c.length-x+1)%m===0&&s("text",{className:"tick-text",fontSize:e,x:l(h)-20,y:t(r[r.length-1])+p/2,children:o(h)})]},h))})},I=i=>{const{maxTickCount:n=10,fontSize:e=8,label:o=m=>m.toString()}=i,{xAxisFn:l,yAxisFn:t,xAxisTicks:c,yAxisTicks:r,yTickWidth:p}=u.exports.useContext(k);return Math.ceil(r.length/n),s("g",{className:"yAxis",children:r.map((m,h)=>y(b.Fragment,{children:[s("line",{x1:l(c[0]),y1:t(m),x2:l(c[c.length-1]),y2:t(m),stroke:"#cfcfcf"},m),s("text",{className:"tick-text",fontSize:e,x:l(c[0])-p,y:t(m)+e/2,children:o(m)})]},m))})};function Q({onWheel:i,delay:n=10}){const e=u.exports.useRef(),o=u.exports.useRef(0),l=t=>{o.current+=t.deltaY,e.current&&clearTimeout(e.current),e.current=setTimeout(()=>{i(o.current),o.current=0},n)};return u.exports.useEffect(()=>()=>{e.current&&clearTimeout(e.current)},[]),{handleWheel:l}}function Z({onSwipe:i,delay:n=10}){const e=u.exports.useRef(0),o=u.exports.useRef(),l=v=>{e.current+=v,o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{i(e.current),e.current=0},n)};u.exports.useEffect(()=>()=>{o.current&&clearTimeout(o.current)},[]);const t=u.exports.useRef(!1),c=v=>{t.current=!0},r=v=>{t.current=!1},p=v=>{t.current=!1},m=v=>{!t.current||l(v.movementX)},h=u.exports.useRef();return{onMouseUp:r,onMouseDown:c,onMouseMove:m,onMouseLeave:p,onTouchMove:v=>{h.current||(h.current=v.touches[0].screenX);const f=v.touches[0].screenX-h.current;h.current=v.touches[0].screenX,l(f)},onTouchEnd:v=>{h.current=null}}}const L=i=>{const{render:n}=i,{hoverItem:e}=u.exports.useContext(k),o=u.exports.useRef(document.createElement("div"));return u.exports.useEffect(()=>(document.body.append(o.current),()=>{o.current}),[]),j.createPortal(s("div",{className:"tooltip",style:{top:e?e.y+24:void 0,left:e?e.x:void 0,display:e?void 0:"none"},children:(e==null?void 0:e.data)&&n(e.data)}),o.current)},_=i=>{const{width:n,height:e,data:o,date:l,onDateChange:t,displayDay:c,onDisplayDayChange:r}=i,p=C(l).add(-c/2,"day").format("YYYY-MM-DD"),m=C(l).add(c/2,"day").format("YYYY-MM-DD"),h=u.exports.useMemo(()=>(o==null?void 0:o.filter(a=>{const g=C(a.date);return!g.isBefore(p)&&!g.isAfter(m)}))||[],[o,p,m]),x=u.exports.useMemo(()=>{const a=[];let g=C(p);for(;!g.isAfter(m);){const d=g.format("YYYY-MM-DD");(o==null?void 0:o.some(D=>D.date===d))&&a.push(d),g=g.add(1,"day")}return a},[p,m,o]),w=u.exports.useMemo(()=>{if(h.length===0)return[];const a=h.map(E=>E.value),g=Math.round(Math.min(...a)*.8*100)/100,d=Math.round(Math.max(...a)*1.2*100)/100,D=Math.round((d-g)/5*100)/100,A=[];let M=d;for(;M>=g;)A.push(M),M-=D;return A},[h]),v=u.exports.useMemo(()=>{if(h.length===0)return[];const a=h.map(E=>E.volume),g=Math.round(Math.min(...a)*.1),d=Math.round(Math.max(...a)*1.1),D=Math.round((d-g)/5),A=[];let M=d;for(;M>=g;)A.push(M),M-=D;return A},[h]),{handleWheel:f}=Q({onWheel(a){const g=Math.max(6,c+Math.round(a/20));r&&r(g)}}),S=o==null?void 0:o[o.length-1].date,T=o==null?void 0:o[0].date,Y=Z({onSwipe(a){const g=Math.round(a/10),d=C(l).add(-g,"day");if(!d.isBefore(S)&&!d.isAfter(T)){t&&t(d.format("YYYY-MM-DD"));return}}});return y("div",{children:[y(H,{width:n,height:e/3*2,xAxisTicks:x,yAxisTicks:w,yTickWidth:50,DivProps:F({onWheel:f},Y),children:[s(J,{}),s(I,{label:a=>Number(a).toFixed(2)}),s(U,{data:h,x:"date",y:"value"}),s(L,{render:a=>y("div",{children:[s("div",{children:`\u65E5\u671F: ${a.date}`}),s("div",{children:`\u50F9\u683C: ${a.value}`}),s("div",{children:`\u4EA4\u6613\u91CF: ${a.volume}`})]})})]}),y(H,{width:n,height:e/3,xAxisTicks:x,yAxisTicks:v,yTickWidth:50,DivProps:F({onWheel:f},Y),children:[s(I,{label:a=>Number(a).toFixed(0)}),s(G,{data:h,x:"date",y:"volume"}),s(L,{render:a=>y("div",{children:[s("div",{children:`\u65E5\u671F: ${a.date}`}),s("div",{children:`\u50F9\u683C: ${a.value}`}),s("div",{children:`\u4EA4\u6613\u91CF: ${a.volume}`})]})})]})]})},e0=i=>{const[n,e]=u.exports.useState(),[o,l]=u.exports.useState("2022-01-01"),[t,c]=u.exports.useState(30);return u.exports.useEffect(()=>{(async()=>{const r=await q();e(r)})()},[]),s("div",{children:s(_,{height:400,width:600,data:n,date:o,onDateChange:l,displayDay:t,onDisplayDayChange:c})})};j.render(s(b.StrictMode,{children:s(e0,{})}),document.getElementById("root"));
