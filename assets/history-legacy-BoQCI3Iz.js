System.register(["./index-legacy-BIw6wWtP.js","./index-legacy-DSQYj9T7.js","./index-legacy-DCMshTpP.js"],(function(e,t){"use strict";var o,n,a,r,l,i,d,s,c,p,u,v,m,h,w,x,g,b,f,_,y,k,z,C,$,O,V,P,E,j,I,D,L,S,F,M,R,U,W,q,N,T,B,H,A,G,J,K,Q,X,Y,Z,ee,te,oe,ne;return{setters:[e=>{o=e.j,n=e.t,a=e.s,r=e.bv,l=e.aD,i=e.d,d=e.aE,s=e.v,c=e.k,p=e.c1,u=e.c,v=e.by,m=e.c2,h=e.bx,w=e.m,x=e.bh,g=e.ba,b=e.c3,f=e.bk,_=e.x,y=e.l,k=e.c4,z=e.be,C=e.bj,$=e.G,O=e.H,V=e.bg,P=e.F,E=e.c5,j=e.aK,I=e.n,D=e.I,L=e.u,S=e.Y,F=e.U,M=e.J,R=e.c6,U=e.b,W=e.L,q=e.f,N=e.e,T=e.N,B=e.M,H=e.P,A=e.O,G=e.Q,J=e.R,K=e.X,Q=e.b2,X=e.c7,Y=e.c8,Z=e.V,ee=e.a0},e=>{te=e.E},e=>{oe=e.I,ne=e.d}],execute:function(){var ae=document.createElement("style");ae.textContent=':root{--van-dropdown-menu-height: 1.28rem;--van-dropdown-menu-background-color: var(--van-background-color-light);--van-dropdown-menu-box-shadow: 0 .05333rem .32rem rgba(100, 101, 102, .12);--van-dropdown-menu-title-font-size: .4rem;--van-dropdown-menu-title-text-color: var(--van-text-color);--van-dropdown-menu-title-active-text-color: var(--van-danger-color);--van-dropdown-menu-title-disabled-text-color: var(--van-text-color-2);--van-dropdown-menu-title-padding: 0 var(--van-padding-xs);--van-dropdown-menu-title-line-height: var(--van-line-height-lg);--van-dropdown-menu-option-active-color: var(--van-danger-color);--van-dropdown-menu-content-max-height: 80%}.van-dropdown-menu{-webkit-user-select:none;-moz-user-select:none;user-select:none}.van-dropdown-menu__bar{position:relative;display:flex;height:var(--van-dropdown-menu-height);background:var(--van-dropdown-menu-background-color);box-shadow:var(--van-dropdown-menu-box-shadow)}.van-dropdown-menu__bar--opened{z-index:calc(var(--van-dropdown-item-z-index) + 1)}.van-dropdown-menu__item{display:flex;flex:1;align-items:center;justify-content:center;min-width:0}.van-dropdown-menu__item--disabled .van-dropdown-menu__title{color:var(--van-dropdown-menu-title-disabled-text-color)}.van-dropdown-menu__title{position:relative;box-sizing:border-box;max-width:100%;padding:var(--van-dropdown-menu-title-padding);color:var(--van-dropdown-menu-title-text-color);font-size:var(--van-dropdown-menu-title-font-size);line-height:var(--van-dropdown-menu-title-line-height)}.van-dropdown-menu__title:after{position:absolute;top:50%;right:-.10667rem;margin-top:-.13333rem;border:.08rem solid;border-color:transparent transparent var(--van-gray-4) var(--van-gray-4);transform:rotate(-45deg);opacity:.8;content:""}.van-dropdown-menu__title--active{color:var(--van-dropdown-menu-title-active-text-color)}.van-dropdown-menu__title--active:after{border-color:transparent transparent currentColor currentColor}.van-dropdown-menu__title--down:after{margin-top:-.02667rem;transform:rotate(135deg)}:root{--van-dropdown-item-z-index: 10}.van-dropdown-item{position:fixed;right:0;left:0;z-index:var(--van-dropdown-item-z-index);overflow:hidden}.van-dropdown-item__icon{display:block;line-height:inherit}.van-dropdown-item__option{text-align:left}.van-dropdown-item__option--active,.van-dropdown-item__option--active .van-dropdown-item__icon{color:var(--van-dropdown-menu-option-active-color)}.van-dropdown-item--up{top:0}.van-dropdown-item--down{bottom:0}.van-dropdown-item__content{position:absolute;max-height:var(--van-dropdown-menu-content-max-height)}.table-history[data-v-a7a12e88]{margin-top:.26667rem;line-height:1.2}.table-history td[data-v-a7a12e88]{padding:0 .05333rem}.table-history .t-header>th[data-v-a7a12e88]{padding:.21333rem 0}.table-history .t-header>th[data-v-a7a12e88]:first-child{padding-left:.37333rem}.table-history .t-header>th[data-v-a7a12e88]:last-child{padding-right:.37333rem}.table-history>.t-row[data-v-a7a12e88]{border-bottom:.02667rem solid #EBEDF0}.table-history>.t-row>td[data-v-a7a12e88]{padding:.32rem 0}.table-history>.t-row>td[data-v-a7a12e88]:first-child{padding-left:.37333rem}.table-history>.t-row>td[data-v-a7a12e88]:last-child{padding-right:.37333rem}.dropdown-item-1[data-v-a7a12e88] .van-cell__left-icon{margin-right:var(--van-padding-base);display:inline-flex;align-items:center;font-size:.48rem}\n',document.head.appendChild(ae);const[re,le]=o("dropdown-menu"),ie={overlay:n,zIndex:a,duration:r(.2),direction:l("down"),activeColor:String,closeOnClickOutside:n,closeOnClickOverlay:n},de=Symbol(re);var se=i({name:re,props:ie,setup(e,{slots:t}){const o=d(),n=s(),a=s(),r=s(0),{children:l,linkChildren:i}=c(de),f=p(n),_=u((()=>l.some((e=>e.state.showWrapper)))),y=u((()=>{if(_.value&&v(e.zIndex))return{zIndex:+e.zIndex+1}})),k=()=>{if(a.value){const t=g(a);"down"===e.direction?r.value=t.bottom:r.value=b.value-t.top}},z=(t,n)=>{const{showPopup:a}=t.state,{disabled:r,titleClass:i}=t;return w("div",{id:`${o}-${n}`,role:"button",tabindex:r?void 0:0,class:[le("item",{disabled:r}),{[x]:!r}],onClick:()=>{var e;r||(e=n,l.forEach(((t,o)=>{o===e?(k(),t.toggle()):t.state.showPopup&&t.toggle(!1,{immediate:!0})})))}},[w("span",{class:[le("title",{down:a===("down"===e.direction),active:a}),i],style:{color:a?e.activeColor:""}},[w("div",{class:"van-ellipsis"},[t.renderTitle()])])])};return i({id:o,props:e,offset:r}),m(n,(()=>{e.closeOnClickOutside&&l.forEach((e=>{e.toggle(!1)}))})),h("scroll",(()=>{_.value&&k()}),{target:f,passive:!0}),()=>{var e;return w("div",{ref:n,class:le()},[w("div",{ref:a,style:y.value,class:le("bar",{opened:_.value})},[l.map(z)]),null==(e=t.default)?void 0:e.call(t)])}}});const[ce,pe]=o("dropdown-item"),ue={title:String,options:z(),disabled:Boolean,teleport:[String,Object],lazyRender:n,modelValue:C,titleClass:C};var ve=i({name:ce,props:ue,emits:["open","opened","close","closed","change","update:modelValue"],setup(e,{emit:t,slots:o}){const n=f({showPopup:!1,transition:!0,showWrapper:!1}),{parent:a,index:r}=_(de);if(!a)return;const l=e=>()=>t(e),i=l("open"),d=l("close"),s=l("opened"),c=()=>{n.showWrapper=!1,t("closed")},p=t=>{e.teleport&&t.stopPropagation()},u=o=>{const{activeColor:r}=a.props,l=o.value===e.modelValue;return w(P,{role:"menuitem",key:o.value,icon:o.icon,title:o.text,class:pe("option",{active:l}),style:{color:l?r:""},tabindex:l?0:-1,clickable:!0,onClick:()=>{n.showPopup=!1,o.value!==e.modelValue&&(t("update:modelValue",o.value),t("change",o.value))}},{value:()=>{if(l)return w(j,{class:pe("icon"),color:r,name:"success"},null)}})},v=()=>{const{offset:t}=a,{zIndex:l,overlay:v,duration:m,direction:h,closeOnClickOverlay:x}=a.props,g=E(l);return"down"===h?g.top=`${t.value}px`:g.bottom=`${t.value}px`,$(w("div",{style:g,class:pe([h]),onClick:p},[w(V,{show:n.showPopup,"onUpdate:show":e=>n.showPopup=e,role:"menu",class:pe("content"),overlay:v,position:"down"===h?"top":"bottom",duration:n.transition?m:0,lazyRender:e.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":`${a.id}-${r.value}`,closeOnClickOverlay:x,onOpen:i,onClose:d,onOpened:s,onClosed:c},{default:()=>{var t;return[e.options.map(u),null==(t=o.default)?void 0:t.call(o)]}})]),[[O,n.showWrapper]])};return y({state:n,toggle:(e=!n.showPopup,t={})=>{e!==n.showPopup&&(n.showPopup=e,n.transition=!t.immediate,e&&(n.showWrapper=!0))},renderTitle:()=>{if(o.title)return o.title();if(e.title)return e.title;const t=e.options.find((t=>t.value===e.modelValue));return t?t.text:""}}),()=>e.teleport?w(k,{to:e.teleport},{default:()=>[v()]}):v()}});const me=I(ve),he=I(se),we={class:"pb-50px"},xe={class:"flex items-center"},ge={class:"text-size-[14px] w-100% table-history color-#333"},be={class:"text-size-[12px] color-[#999] t-header"},fe={class:"text-left font-400"},_e={class:"text-center font-400"},ye={class:"text-right font-400"},ke=["onClick"],ze={class:"text-left font-400"},Ce={class:"color-[#999] text-size-[12px]"},$e={class:"text-center font-400"},Oe={class:"w-100% font-400"},Ve={class:"text-right color-[#333]"},Pe={class:"text-left color-[#999]"},Ee={class:"text-right color-[#333]"},je={class:"text-left color-[#999]"},Ie={class:"text-right font-400"},De={class:"flex items-center justify-end"},Le={class:"color-[#999] text-size-[12px]"};e("default",ee(i({__name:"history",setup(e){const o=new URL("/assets/icon-default-NkrxpoEr.png",t.meta.url).href,{t:n}=D();let a=s(""),r=u((()=>{let e=[],t=[],o=[],a=L().chain,r=S(a);return c.value?.forEach?.((n=>{let a=n.token0_address===r?.wmain_wrapper?r?.main_name:n.token0_symbol;e.includes(a)||(e.push(a),t.push(F(`${n.token0_address}-${n.chain}`)),o.push(`${n.token0_address}-${n.chain}`));let l=n.token1_address===r?.wmain_wrapper?r?.main_name:n.token1_symbol;e.includes(l)||(e.push(l),t.push(F(`${n.token1_address}-${n.chain}`)),o.push(`${n.token1_address}-${n.chain}`))})),[{text:n("allToken"),value:"",icon:"",id:""}].concat(e.map(((e,n)=>({text:e,value:o[n],icon:t[n],id:o[n]}))))})),l=u((()=>r.value.find((e=>e.id===a.value)))),i=s(""),d=s([{text:n("allTypes"),value:""},{text:n("add"),value:"addLiquidity"},{text:n("remove"),value:"removeLiquidity"}]),c=s([]),p=s(!1),v=u((()=>{let e=L().chain,t=S(e);return c.value?.filter?.((e=>{let o=e.token0_address===t?.wmain_wrapper?t?.main_name:e.token0_symbol,n=e.token1_address===t?.wmain_wrapper?t?.main_name:e.token1_symbol;return!(e.type!==i.value&&""!==i.value||o!==l.value?.text&&n!==l.value?.text&&""!==a.value)}))||[]}));function m(e,t,o){let n=S(t);return e===n?.wmain_wrapper?n?.main_name:o}function h(){!function(){let e=L().chain,t=L().walletAddress;p.value=!0,ne(e,t).then((e=>{console.log(e),c.value=e})).finally((()=>{p.value=!1}))}()}return M((()=>{h()})),(e,t)=>{const s=oe,c=me,u=he,h=te,x=R("imageError");return U(),W("section",we,[w(u,{"active-color":"#3F80F7"},{default:q((()=>[$((U(),N(c,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),options:B(r),class:"dropdown-item-1"},{title:q((()=>[T("div",xe,[B(l)?.id?(U(),N(s,{key:0,class:"icon-token mr-5px",round:"",width:"0.5rem",height:"0.5rem","icon-size":"0.5rem","lazy-load":"","show-loading":"",src:B(F)(B(l)?.id||""),"error-icon":B(o)},null,8,["src","error-icon"])):H("",!0),T("span",null,A(B(l)?.text||""),1)])])),_:1},8,["modelValue","options"])),[[x]]),w(c,{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),options:d.value},null,8,["modelValue","options"])])),_:1}),T("table",ge,[T("tr",be,[T("th",fe,A(B(n)("type")),1),T("th",_e,A(B(n)("amount"))+"/"+A(B(n)("token")),1),T("th",ye,A(B(n)("volume"))+"/AMM",1)]),(U(!0),W(G,null,J(B(v),((e,t)=>(U(),W("tr",{key:t,class:"t-row clickable",onClick:K((t=>B(Q)(e.transaction,"tx",e.chain)),["stop"])},[T("td",ze,[T("div",{style:X({color:"addLiquidity"===e.type?"#12B886":"#F6465D"})},A("addLiquidity"===e.type?B(n)("add"):B(n)("remove")),5),T("div",Ce,A(B(Y)(e.time,"MM-DD HH:mm:ss")),1)]),T("td",$e,[T("table",Oe,[T("tr",null,[T("td",Ve,A(B(Z)(e.amount0)),1),T("td",Pe,A(m(e.token0_address,e.chain,e.token0_symbol)),1)]),T("tr",null,[T("td",Ee,A(B(Z)(e.amount1)),1),T("td",je,A(m(e.token1_address,e.chain,e.token1_symbol)),1)])])]),T("td",Ie,[T("div",null,"$"+A(B(Z)(Number(e.amount_usd)<0?-1*Number(e.amount_usd):e.amount_usd)),1),T("div",De,[w(s,{class:"w-[12px] h-[12px] mr-[5px]",round:"","lazy-load":"",src:`https://ave.s3.ap-east-1.amazonaws.com/swap/${e.amm}.jpeg`,"error-icon":B(o)},null,8,["src","error-icon"]),T("span",Le,A(e.show_name||e.amm||""),1)])])],8,ke)))),128))]),$(w(h,{description:B(n)("noData"),class:"empty"},null,8,["description"]),[[O,B(v)&&0===B(v).length&&!p.value]])])}}}),[["__scopeId","data-v-a7a12e88"]]))}}}));
