import{S as z,i as C,s as P,P as A,C as j,e as c,m as $,r as S,b as p,c as u,o as h,d as k,t as d,k as g,f,p as b,K as v,h as T,L as q,n as i,g as H,q as L,u as M}from"./index.e5f15ed8.js";import{a as U,T as D}from"./Pagination.4a8c6d06.js";function F(s){let e,a,n=s[8].message+"",t;return{c(){e=c("article"),a=c("div"),t=L(n),p(a,"class","message-body"),p(e,"class","message is-danger")},m(r,o){u(r,e,o),k(e,a),k(a,t)},p(r,o){o&8&&n!==(n=r[8].message+"")&&M(t,n)},i,o:i,d(r){r&&f(e)}}}function I(s){let e,a;return e=new D({props:{data:s[0].entries,columns:s[4]}}),{c(){$(e.$$.fragment)},m(n,t){h(e,n,t),a=!0},p(n,t){const r={};t&1&&(r.data=n[0].entries),e.$set(r)},i(n){a||(d(e.$$.fragment,n),a=!0)},o(n){g(e.$$.fragment,n),a=!1},d(n){b(e,n)}}}function K(s){let e;return{c(){e=c("article"),e.innerHTML='<div class="message-body">Fetching authorizations</div>',p(e,"class","message")},m(a,n){u(a,e,n)},p:i,i,o:i,d(a){a&&f(e)}}}function N(s){let e,a,n,t={ctx:s,current:null,token:null,hasCatch:!0,pending:K,then:I,catch:F,value:7,error:8,blocks:[,,,]};return v(a=s[3],t),{c(){e=T(),t.block.c()},m(r,o){u(r,e,o),t.block.m(r,t.anchor=o),t.mount=()=>e.parentNode,t.anchor=e,n=!0},p(r,o){s=r,t.ctx=s,o&8&&a!==(a=s[3])&&v(a,t)||q(t,s,o)},i(r){n||(d(t.block),n=!0)},o(r){for(let o=0;o<3;o+=1){const l=t.blocks[o];g(l)}n=!1},d(r){r&&f(e),t.block.d(r),t.token=null,t=null}}}function R(s){let e;return{c(){e=c("span"),e.textContent="Authorizations",p(e,"slot","title")},m(a,n){u(a,e,n)},p:i,d(a){a&&f(e)}}}function B(s){let e,a,n;return a=new U({props:{pageSize:w,total:s[2],currentPage:s[1]}}),a.$on("page-changed",s[5]),{c(){e=c("span"),$(a.$$.fragment),p(e,"slot","footer")},m(t,r){u(t,e,r),h(a,e,null),n=!0},p(t,r){const o={};r&4&&(o.total=t[2]),r&2&&(o.currentPage=t[1]),a.$set(o)},i(t){n||(d(a.$$.fragment,t),n=!0)},o(t){g(a.$$.fragment,t),n=!1},d(t){t&&f(e),b(a)}}}function E(s){let e,a,n,t,r;return a=new A({props:{title:"Manage",subtitle:"Authorizations"}}),t=new j({props:{padding:!1,$$slots:{footer:[B],title:[R],default:[N]},$$scope:{ctx:s}}}),{c(){e=c("div"),$(a.$$.fragment),n=S(),$(t.$$.fragment),p(e,"class","section")},m(o,l){u(o,e,l),h(a,e,null),k(e,n),h(t,e,null),r=!0},p(o,[l]){const m={};l&527&&(m.$$scope={dirty:l,ctx:o}),t.$set(m)},i(o){r||(d(a.$$.fragment,o),d(t.$$.fragment,o),r=!0)},o(o){g(a.$$.fragment,o),g(t.$$.fragment,o),r=!1},d(o){o&&f(e),b(a),b(t)}}}let w=15;function G(s,e,a){let n={},t=1,r=30,o=[{name:"ID",property:"id",class:""},{name:"User",property:"user",format:"json"},{name:"Application",property:"application",format:"json"},{name:"Properties",property:"properties",format:"json"},{name:"Created",property:"created_at",format:"if-time"},{name:"Updated",property:"updated_at",format:"if-time"},{name:"Revoked",property:"revoked_at",format:"if-time"}];function l(_){a(1,t=_.detail.page),a(3,y=m())}async function m(){let{data:_}=await H.get(`/manage/authorizations?page=${t}&page_size=${w}`);a(2,r=_.total),a(0,n=_)}let y=m();return[n,t,r,y,o,l]}class Q extends z{constructor(e){super(),C(this,e,G,E,P,{})}}export{Q as default};