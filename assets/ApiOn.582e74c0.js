import{S as X,i as Y,s as $,e as d,a as Q,b as c,c as S,d as r,n as P,f as j,a1 as k,h as te,x as R,t as B,j as se,k as A,l as ne,D as ie,a2 as le,r as I,m as ae,q as F,o as oe,u as G,W as ce,Z as re,_ as W,$ as fe,p as ue,z as de,a3 as me,H as Z,F as N}from"./index.e5f15ed8.js";import{Q as _e}from"./Pagination.4a8c6d06.js";import{d as H}from"./NotificationDispatcher.eb466446.js";function ge(s){let e,t,l,i,n;return{c(){e=d("span"),t=Q("svg"),l=Q("g"),i=Q("path"),c(i,"d","M8.5 0.5c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM8.5 1.5c1.75 0 3.348 0.65 4.577 1.716l-9.86 9.861c-1.067-1.228-1.717-2.827-1.717-4.577 0-3.859 3.14-7 7-7zM8.5 15.5c-1.75 0-3.348-0.65-4.577-1.716l9.86-9.861c1.067 1.228 1.717 2.827 1.717 4.577 0 3.859-3.14 7-7 7z"),c(i,"fill","#000000"),c(t,"version","1.1"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),c(t,"width","17"),c(t,"height","17"),c(t,"viewBox","0 0 17 17"),c(t,"class","svelte-csyb9y"),c(e,"class",n="icon "+(s[1]?`is-${s[1]}`:"")+" "+(s[0]?`is-${s[0]}`:""))},m(a,f){S(a,e,f),r(e,t),r(t,l),r(t,i)},p(a,[f]){f&3&&n!==(n="icon "+(a[1]?`is-${a[1]}`:"")+" "+(a[0]?`is-${a[0]}`:""))&&c(e,"class",n)},i:P,o:P,d(a){a&&j(e)}}}function he(s,e,t){let{size:l=""}=e,{type:i=""}=e;return s.$$set=n=>{"size"in n&&t(0,l=n.size),"type"in n&&t(1,i=n.type)},[l,i]}class ze extends X{constructor(e){super(),Y(this,e,he,ge,$,{size:0,type:1})}}function J(s){let e,t,l,i,n,a,f,g,p,v,b,h,T,y,C,z,x,w,M,D,o,E,O,L,K;g=new _e({props:{type:"primary",size:"large"}});let m=s[1]&&U(s),_=s[5]&&V(s);return{c(){e=d("div"),t=d("div"),l=I(),i=d("div"),n=d("section"),a=d("div"),f=d("div"),ae(g.$$.fragment),p=I(),v=d("div"),m&&m.c(),b=I(),h=d("div"),T=I(),y=d("footer"),C=d("div"),_&&_.c(),z=I(),x=d("div"),w=d("button"),M=d("span"),D=F(s[3]),c(t,"class","modal-background"),c(f,"class","column is-narrow has-text-centered is-flex is-align-items-center is-justify-content-center"),c(h,"class","has-text-black"),c(v,"class","column"),c(a,"class","columns"),c(n,"class","modal-card-body dialog-card-body is-flex svelte-ek7ltq"),c(w,"type","button"),c(w,"class","button is-danger"),c(y,"class","modal-card-foot dialog-foot is-justify-content-space-between svelte-ek7ltq"),c(i,"class","modal-card dialog-card svelte-ek7ltq"),c(e,"class","dialog modal is-active")},m(u,q){S(u,e,q),r(e,t),r(e,l),r(e,i),r(i,n),r(n,a),r(a,f),oe(g,f,null),r(a,p),r(a,v),m&&m.m(v,null),r(v,b),r(v,h),h.innerHTML=s[2],r(i,T),r(i,y),r(y,C),_&&_.m(C,null),r(y,z),r(y,x),r(x,w),r(w,M),r(M,D),s[15](w),O=!0,L||(K=[R(t,"click",s[9]),R(w,"click",s[10])],L=!0)},p(u,q){u[1]?m?m.p(u,q):(m=U(u),m.c(),m.m(v,b)):m&&(m.d(1),m=null),(!O||q&4)&&(h.innerHTML=u[2]),u[5]?_?_.p(u,q):(_=V(u),_.c(),_.m(C,null)):_&&(_.d(1),_=null),(!O||q&8)&&G(D,u[3])},i(u){O||(B(g.$$.fragment,u),ce(()=>{E&&E.end(1),o=re(i,W,{}),o.start()}),O=!0)},o(u){A(g.$$.fragment,u),o&&o.invalidate(),E=fe(i,W,{}),O=!1},d(u){u&&j(e),ue(g),m&&m.d(),_&&_.d(),s[15](null),u&&E&&E.end(),L=!1,de(K)}}}function U(s){let e,t;return{c(){e=d("p"),t=F(s[1]),c(e,"class","is-size-5 has-text-weight-bold")},m(l,i){S(l,e,i),r(e,t)},p(l,i){i&2&&G(t,l[1])},d(l){l&&j(e)}}}function V(s){let e,t,l,i,n;return{c(){e=d("button"),t=d("span"),l=F(s[4]),c(e,"type","button"),c(e,"class","button is-primary is-light")},m(a,f){S(a,e,f),r(e,t),r(t,l),s[14](e),i||(n=R(e,"click",s[8]),i=!0)},p(a,f){f&16&&G(l,a[4])},d(a){a&&j(e),s[14](null),i=!1,n()}}}function ve(s){let e,t,l,i,n=s[0]&&J(s);return{c(){n&&n.c(),e=te()},m(a,f){n&&n.m(a,f),S(a,e,f),t=!0,l||(i=R(window,"keydown",s[11]),l=!0)},p(a,[f]){a[0]?n?(n.p(a,f),f&1&&B(n,1)):(n=J(a),n.c(),B(n,1),n.m(e.parentNode,e)):n&&(se(),A(n,1,1,()=>{n=null}),ne())},i(a){t||(B(n),t=!0)},o(a){A(n),t=!1},d(a){n&&n.d(a),a&&j(e),l=!1,i()}}}function ye(s,e,t){let{title:l=""}=e,{message:i=""}=e,{focusOn:n="confirm"}=e,{confirmText:a="OK"}=e,{cancelText:f="Cancel"}=e,{showCancel:g=!0}=e,{active:p=!0}=e;const v=ie();let b,h,T,{promise:y=new Promise(o=>T=o)}=e;le(async()=>{await me(),n==="cancel"&&g?b.focus():h.focus()});const C=()=>{T(!1),z()},z=()=>{T(!1),t(0,p=!1),v("destroy")},x=async()=>{T(!0),z()},w=o=>{p&&o.keyCode==27&&z()};function M(o){Z[o?"unshift":"push"](()=>{b=o,t(6,b)})}function D(o){Z[o?"unshift":"push"](()=>{h=o,t(7,h)})}return s.$$set=o=>{"title"in o&&t(1,l=o.title),"message"in o&&t(2,i=o.message),"focusOn"in o&&t(12,n=o.focusOn),"confirmText"in o&&t(3,a=o.confirmText),"cancelText"in o&&t(4,f=o.cancelText),"showCancel"in o&&t(5,g=o.showCancel),"active"in o&&t(0,p=o.active),"promise"in o&&t(13,y=o.promise)},[p,l,i,a,f,g,b,h,C,z,x,w,n,y,M,D]}class ee extends X{constructor(e){super(),Y(this,e,ye,ve,$,{title:1,message:2,focusOn:12,confirmText:3,cancelText:4,showCancel:5,active:0,promise:13})}get title(){return this.$$.ctx[1]}set title(e){this.$$set({title:e}),k()}get message(){return this.$$.ctx[2]}set message(e){this.$$set({message:e}),k()}get focusOn(){return this.$$.ctx[12]}set focusOn(e){this.$$set({focusOn:e}),k()}get confirmText(){return this.$$.ctx[3]}set confirmText(e){this.$$set({confirmText:e}),k()}get cancelText(){return this.$$.ctx[4]}set cancelText(e){this.$$set({cancelText:e}),k()}get showCancel(){return this.$$.ctx[5]}set showCancel(e){this.$$set({showCancel:e}),k()}get active(){return this.$$.ctx[0]}set active(e){this.$$set({active:e}),k()}get promise(){return this.$$.ctx[13]}set promise(e){this.$$set({promise:e}),k()}}const Ce=(s,e,t)=>{const l=new ee({target:document.body,props:s,intro:!0});e!=null&&l.promise.then(i=>{i?e():t!=null&&t()}),l.$on("destroy",()=>{l.$destroy()})},we=async s=>{const e=new ee({target:document.body,props:s,intro:!0});return e.$on("destroy",()=>{e.$destroy()}),await e.promise},be=async(s,e,t)=>{N.set(!0);let l=!1;try{let{data:i}=await s(e,t);i.success?(H.success("Success",`${i.message}`,2e3),l=!0):H.error("Error",`Server returned: ${i.error}`,2e3)}catch(i){H.error("Error",`${i}`,2e3)}return N.set(!1),l},Oe=async(s,e,t)=>{N.set(!0);try{let{data:l}=await s(e,t);return N.set(!1),l}catch(l){H.error("Error",`${l}`,2e3)}return N.set(!1),null},qe=async(s,e,t,l)=>await we(s)?await be(e,t,l):!1;export{ze as N,Ce as c,Oe as d,be as g,qe as o};