import{g as N,S as Fe,i as Le,s as Se,e as f,a as ae,b as u,c as b,d as c,n as z,f as v,h as gt,t as k,j as W,k as C,l as X,a8 as bt,C as vt,m as L,o as S,p as E,H as kt,I as $t,K as tt,q as w,r as y,x as ie,u as I,J as ht,y as yt,P as zt,L as At}from"./index.14c1c3d3.js";import{n as se,d as F,a as It,T as Pt}from"./Pagination.f435ffa3.js";import{o as qe,d as Rt,g as Ne,N as Tt}from"./ApiOn.6d7ccf79.js";import{A as Bt,T as Mt,f as ot}from"./TagInput.6c44b6a4.js";import{d as qt}from"./NotificationDispatcher.23e30b4c.js";const De=(n,e)=>({async unbanUser(){await qe({title:"Are you sure?",message:`This will allow user '${n.email}' to log in again.`},N.put,"/manage/users/unban",{id:n.id})&&await e()},banUser(t){return async()=>{if(n.id===t){qt.error("No.","You cant ban yourself.",2e3);return}await qe({title:"Are you sure?",message:`This will prohibt user '${n.email}' from logging in.`},N.put,"/manage/users/ban",{id:n.id})&&await e()}},async unlockUser(){await qe({title:"Are you sure?",message:`This will lift the lockout on '${n.email}'.`},N.put,"/manage/users/unlock",{id:n.id})&&await e()},async confirmUser(){await qe({title:"Are you sure?",message:`This will opt-in user '${n.email}' and enable login.`},N.put,"/manage/users/confirm",{id:n.id})&&await e()},async activeApplications(){return await Rt(N.post,"/manage/applications/with-authorization-for",{id:n.id})},async grantAuthorization(t,l){await Ne(N.post,"/manage/authorizations/grant",{client_id:t,user_id:n.id,scope:l})&&await e()},async revokeAuthorization(t){await Ne(N.post,"/manage/authorizations/revoke",{client_id:t,user_id:n.id})&&await e()},async addUserToRole(t){await Ne(N.post,"/manage/users/role/add",{role:t,id:n.id})&&await e()},async removeUserFromRole(t){await Ne(N.put,"/manage/users/role/remove",{role:t,id:n.id})&&await e()}});function Nt(n){let e,t,l,s,i;return{c(){e=f("span"),t=ae("svg"),l=ae("g"),s=ae("path"),u(s,"d","M9.5 10.972c0 0.366-0.207 0.672-0.5 0.846v2.154h-1v-2.153c-0.294-0.174-0.5-0.48-0.5-0.847 0-0.552 0.447-1 1-1 0.551 0 1 0.447 1 1zM14.994 8.46v7.080c0 0.827-0.673 1.5-1.5 1.5h-9.988c-0.827 0-1.5-0.673-1.5-1.5v-7.080c0-0.827 0.673-1.5 1.5-1.5h8.994v-1.988c0-2.206-1.794-4-4-4s-4 1.794-4 4h-1c0-2.757 2.243-5 5-5s5 2.243 5 5v1.988c0.824 0.004 1.494 0.675 1.494 1.5zM13.994 8.46c0-0.276-0.225-0.5-0.5-0.5h-9.988c-0.275 0-0.5 0.224-0.5 0.5v7.080c0 0.276 0.225 0.5 0.5 0.5h9.988c0.275 0 0.5-0.224 0.5-0.5v-7.080z"),u(s,"fill","#000000"),u(t,"version","1.1"),u(t,"xmlns","http://www.w3.org/2000/svg"),u(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),u(t,"width","17"),u(t,"height","17"),u(t,"viewBox","0 0 17 17"),u(t,"class","svelte-csyb9y"),u(e,"class",i="icon "+(n[1]?`is-${n[1]}`:"")+" "+(n[0]?`is-${n[0]}`:""))},m(o,r){b(o,e,r),c(e,t),c(t,l),c(t,s)},p(o,[r]){r&3&&i!==(i="icon "+(o[1]?`is-${o[1]}`:"")+" "+(o[0]?`is-${o[0]}`:""))&&u(e,"class",i)},i:z,o:z,d(o){o&&v(e)}}}function Dt(n,e,t){let{size:l=""}=e,{type:s=""}=e;return n.$$set=i=>{"size"in i&&t(0,l=i.size),"type"in i&&t(1,s=i.type)},[l,s]}class Ft extends Fe{constructor(e){super(),Le(this,e,Dt,Nt,Se,{size:0,type:1})}}function Lt(n){let e,t,l,s,i;return{c(){e=f("span"),t=ae("svg"),l=ae("g"),s=ae("path"),u(s,"d","M14 5.761h1v10.239h-14v-14h8.393v1h-7.393v12h12v-9.239zM4.854 8.146l-0.708 0.708 3.434 3.434 7.587-11.512-0.835-0.551-6.912 10.488-2.566-2.567z"),u(s,"fill","#000000"),u(t,"version","1.1"),u(t,"xmlns","http://www.w3.org/2000/svg"),u(t,"xmlns:xlink","http://www.w3.org/1999/xlink"),u(t,"width","17"),u(t,"height","17"),u(t,"viewBox","0 0 17 17"),u(t,"class","svelte-csyb9y"),u(e,"class",i="icon "+(n[1]?`is-${n[1]}`:"")+" "+(n[0]?`is-${n[0]}`:""))},m(o,r){b(o,e,r),c(e,t),c(t,l),c(t,s)},p(o,[r]){r&3&&i!==(i="icon "+(o[1]?`is-${o[1]}`:"")+" "+(o[0]?`is-${o[0]}`:""))&&u(e,"class",i)},i:z,o:z,d(o){o&&v(e)}}}function St(n,e,t){let{size:l=""}=e,{type:s=""}=e;return n.$$set=i=>{"size"in i&&t(0,l=i.size),"type"in i&&t(1,s=i.type)},[l,s]}class wt extends Fe{constructor(e){super(),Le(this,e,St,Lt,Se,{size:0,type:1})}}function rt(n,e,t){const l=n.slice();return l[24]=e[t],l}function ct(n){let e,t;return e=new vt({props:{closeable:!0,$$slots:{footer:[Ot],title:[Jt],default:[Gt]},$$scope:{ctx:n}}}),e.$on("card-closed",n[4]),{c(){L(e.$$.fragment)},m(l,s){S(e,l,s),t=!0},p(l,s){const i={};s&134217743&&(i.$$scope={dirty:s,ctx:l}),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){E(e,l)}}}function ut(n){let e,t,l,s=n[24]+"",i,o,r,a,d,p;function $(...U){return n[16](n[24],...U)}return{c(){e=f("li"),t=f("div"),l=f("div"),i=w(s),o=y(),r=f("div"),a=y(),u(l,"class","tag is-link"),u(r,"class","tag is-delete is-clickable"),u(t,"class","tags are-medium has-addons"),u(e,"class","control")},m(U,R){b(U,e,R),c(e,t),c(t,l),c(l,i),c(t,o),c(t,r),c(e,a),d||(p=ie(r,"click",$),d=!0)},p(U,R){n=U,R&1&&s!==(s=n[24]+"")&&I(i,s)},d(U){U&&v(e),d=!1,p()}}}function Et(n){return{c:z,m:z,d:z}}function Ht(n){return{c:z,m:z,d:z}}function Qt(n){let e;return{c(){e=f("span"),e.textContent="loading Application Authorizations"},m(t,l){b(t,e,l)},d(t){t&&v(e)}}}function Yt(n){let e,t,l,s,i,o=n[22].name+"",r,a,d,p,$=n[22].client_id+"",U,R,H,T,Y,_=n[22].status+"",A;return{c(){e=f("article"),t=f("div"),l=f("div"),s=f("p"),i=f("strong"),r=w(o),a=y(),d=f("small"),p=w("("),U=w($),R=w(")"),H=y(),T=f("div"),Y=f("small"),A=w(_),u(l,"class","content"),u(t,"class","media-content"),u(T,"class","media-right"),u(e,"class","media")},m(B,Q){b(B,e,Q),c(e,t),c(t,l),c(l,s),c(s,i),c(i,r),c(s,a),c(s,d),c(d,p),c(d,U),c(d,R),c(e,H),c(e,T),c(T,Y),c(Y,A)},p(B,Q){Q&4194304&&o!==(o=B[22].name+"")&&I(r,o),Q&4194304&&$!==($=B[22].client_id+"")&&I(U,$),Q&4194304&&_!==(_=B[22].status+"")&&I(A,_)},d(B){B&&v(e)}}}function jt(n){let e,t,l=n[23].name+"",s,i,o,r,a=n[23].client_id+"",d,p;return{c(){e=f("div"),t=f("strong"),s=w(l),i=y(),o=f("small"),r=w("("),d=w(a),p=w(")"),u(e,"slot","tag")},m($,U){b($,e,U),c(e,t),c(t,s),c(e,i),c(e,o),c(o,r),c(o,d),c(o,p)},p($,U){U&8388608&&l!==(l=$[23].name+"")&&I(s,l),U&8388608&&a!==(a=$[23].client_id+"")&&I(d,a)},d($){$&&v(e)}}}function Gt(n){let e,t,l,s,i,o=n[0].id+"",r,a,d,p=se(n[0].email)+"",$,U,R,H=F(n[0].email_confirmed)+"",T,Y,_,A,B=se(n[0].phone)+"",Q,Z,J,x=F(n[0].phone_confirmed)+"",h,K,ee,fe,de=n[0].mfa+"",Ee,lt,me,M,pe,_e,ge=F(n[0].lockout_till)+"",He,be,ve,ke=F(n[0].banned_on)+"",Qe,$e,he,we=n[0].current_failure_count+"",Ye,Ce,Ue,ye=se(n[0].confirm_token)+"",je,ze,Ae,Ie=F(n[0].created_at)+"",Ge,Pe,Re,Te=F(n[0].updated_at)+"",Je,Ke,oe,Ve,te,Oe,V,Be,G,We,nt,Me,re,Xe,ce,Ze,ue,O,P,xe,st,le=n[0].roles,q=[];for(let m=0;m<le.length;m+=1)q[m]=ut(rt(n,le,m));function Ut(m){n[17](m)}let at={queryProvider:n[14]};n[2]!==void 0&&(at.value=n[2]),G=new Bt({props:at}),kt.push(()=>$t(G,"value",Ut));let j={ctx:n,current:null,token:null,hasCatch:!1,pending:Qt,then:Ht,catch:Et};return tt(n[5],j),O=new Mt({props:{onBeforeAdd:n[10],onBeforeDelete:n[11],selectedItems:n[3],queryProvider:n[15],valueProperty:"id",$$slots:{tag:[jt,({item:m,match:g})=>({23:m,22:g}),({item:m,match:g})=>(m?8388608:0)|(g?4194304:0)],default:[Yt,({match:m})=>({22:m}),({match:m})=>m?4194304:0]},$$scope:{ctx:n}}}),{c(){e=f("div"),t=f("div"),l=f("dl"),s=f("dt"),s.textContent="ID:",i=f("dd"),r=w(o),a=f("dt"),a.textContent="Email:",d=f("dd"),$=w(p),U=f("dt"),U.textContent="Email confirmed:",R=f("dd"),T=w(H),Y=y(),_=f("dt"),_.textContent="Phone:",A=f("dd"),Q=w(B),Z=f("dt"),Z.textContent="Phone confirmed:",J=f("dd"),h=w(x),K=y(),ee=f("dt"),ee.textContent="MFA enabled:",fe=f("dd"),Ee=w(de),lt=y(),me=f("div"),M=f("dl"),pe=f("dt"),pe.textContent="Locked out till:",_e=f("dd"),He=w(ge),be=f("dt"),be.textContent="Banend on:",ve=f("dd"),Qe=w(ke),$e=f("dt"),$e.textContent="Current failures:",he=f("dd"),Ye=w(we),Ce=f("dt"),Ce.textContent="Confirm token:",Ue=f("dd"),je=w(ye),ze=f("dt"),ze.textContent="Created at",Ae=f("dd"),Ge=w(Ie),Pe=f("dt"),Pe.textContent="Updated at",Re=f("dd"),Je=w(Te),Ke=y(),oe=f("div"),oe.textContent="Roles",Ve=y(),te=f("ul");for(let m=0;m<q.length;m+=1)q[m].c();Oe=y(),V=f("div"),Be=f("div"),L(G.$$.fragment),nt=y(),Me=f("div"),re=f("button"),re.textContent="Add role",Xe=y(),ce=f("div"),ce.textContent="Applications",Ze=y(),j.block.c(),ue=y(),L(O.$$.fragment),u(s,"class","column is-3"),u(i,"class","column is-9"),u(a,"class","column is-3"),u(d,"class","column is-9"),u(U,"class","column is-3"),u(R,"class","column is-9"),u(_,"class","column is-3"),u(A,"class","column is-9"),u(Z,"class","column is-3"),u(J,"class","column is-9"),u(ee,"class","column is-3"),u(fe,"class","column is-9"),u(l,"class","columns is-multiline is-mobile"),u(t,"class","column"),u(pe,"class","column is-3"),u(_e,"class","column is-9"),u(be,"class","column is-3"),u(ve,"class","column is-9"),u($e,"class","column is-3"),u(he,"class","column is-9"),u(Ce,"class","column is-3"),u(Ue,"class","column is-9"),u(ze,"class","column is-3"),u(Ae,"class","column is-9"),u(Pe,"class","column is-3"),u(Re,"class","column is-9"),u(M,"class","columns is-multiline is-mobile"),u(me,"class","column"),u(e,"class","columns"),u(oe,"class","divider"),u(te,"class","field is-grouped is-grouped-multine"),u(Be,"class","control"),u(re,"class","button"),u(Me,"class","control"),u(V,"class","field has-addons"),u(ce,"class","divider")},m(m,g){b(m,e,g),c(e,t),c(t,l),c(l,s),c(l,i),c(i,r),c(l,a),c(l,d),c(d,$),c(l,U),c(l,R),c(R,T),c(R,Y),c(l,_),c(l,A),c(A,Q),c(l,Z),c(l,J),c(J,h),c(J,K),c(l,ee),c(l,fe),c(fe,Ee),c(e,lt),c(e,me),c(me,M),c(M,pe),c(M,_e),c(_e,He),c(M,be),c(M,ve),c(ve,Qe),c(M,$e),c(M,he),c(he,Ye),c(M,Ce),c(M,Ue),c(Ue,je),c(M,ze),c(M,Ae),c(Ae,Ge),c(M,Pe),c(M,Re),c(Re,Je),b(m,Ke,g),b(m,oe,g),b(m,Ve,g),b(m,te,g);for(let ne=0;ne<q.length;ne+=1)q[ne].m(te,null);b(m,Oe,g),b(m,V,g),c(V,Be),S(G,Be,null),c(V,nt),c(V,Me),c(Me,re),b(m,Xe,g),b(m,ce,g),b(m,Ze,g),j.block.m(m,j.anchor=g),j.mount=()=>ue.parentNode,j.anchor=ue,b(m,ue,g),S(O,m,g),P=!0,xe||(st=ie(re,"click",n[12]),xe=!0)},p(m,g){if(n=m,(!P||g&1)&&o!==(o=n[0].id+"")&&I(r,o),(!P||g&1)&&p!==(p=se(n[0].email)+"")&&I($,p),(!P||g&1)&&H!==(H=F(n[0].email_confirmed)+"")&&I(T,H),(!P||g&1)&&B!==(B=se(n[0].phone)+"")&&I(Q,B),(!P||g&1)&&x!==(x=F(n[0].phone_confirmed)+"")&&I(h,x),(!P||g&1)&&de!==(de=n[0].mfa+"")&&I(Ee,de),(!P||g&1)&&ge!==(ge=F(n[0].lockout_till)+"")&&I(He,ge),(!P||g&1)&&ke!==(ke=F(n[0].banned_on)+"")&&I(Qe,ke),(!P||g&1)&&we!==(we=n[0].current_failure_count+"")&&I(Ye,we),(!P||g&1)&&ye!==(ye=se(n[0].confirm_token)+"")&&I(je,ye),(!P||g&1)&&Ie!==(Ie=F(n[0].created_at)+"")&&I(Ge,Ie),(!P||g&1)&&Te!==(Te=F(n[0].updated_at)+"")&&I(Je,Te),g&8193){le=n[0].roles;let D;for(D=0;D<le.length;D+=1){const it=rt(n,le,D);q[D]?q[D].p(it,g):(q[D]=ut(it),q[D].c(),q[D].m(te,null))}for(;D<q.length;D+=1)q[D].d(1);q.length=le.length}const ne={};!We&&g&4&&(We=!0,ne.value=n[2],ht(()=>We=!1)),G.$set(ne);const et={};g&8&&(et.selectedItems=n[3]),g&146800640&&(et.$$scope={dirty:g,ctx:n}),O.$set(et)},i(m){P||(k(G.$$.fragment,m),k(O.$$.fragment,m),P=!0)},o(m){C(G.$$.fragment,m),C(O.$$.fragment,m),P=!1},d(m){m&&v(e),m&&v(Ke),m&&v(oe),m&&v(Ve),m&&v(te),yt(q,m),m&&v(Oe),m&&v(V),E(G),m&&v(Xe),m&&v(ce),m&&v(Ze),j.block.d(m),j.token=null,j=null,m&&v(ue),E(O,m),xe=!1,st()}}}function Jt(n){let e,t,l=n[0].id+"",s,i,o=n[0].email+"",r;return{c(){e=f("span"),t=w("("),s=w(l),i=w(") "),r=w(o),u(e,"slot","title")},m(a,d){b(a,e,d),c(e,t),c(e,s),c(e,i),c(e,r)},p(a,d){d&1&&l!==(l=a[0].id+"")&&I(s,l),d&1&&o!==(o=a[0].email+"")&&I(r,o)},d(a){a&&v(e)}}}function Kt(n){let e;return{c(){e=f("span"),e.textContent=`You are logged in and I guess you dont want to ban\r
                    yourself.`,u(e,"class","is-help")},m(t,l){b(t,e,l)},p:z,i:z,o:z,d(t){t&&v(e)}}}function Vt(n){let e,t,l,s,i,o=n[0].banned_on===null&&ft(n),r=n[0].banned_on!==null&&dt(n),a=n[0].lockout_till!==null&&mt(n),d=!n[0].email_confirmed&&pt(n);return{c(){e=f("div"),o&&o.c(),t=y(),r&&r.c(),l=y(),a&&a.c(),s=y(),d&&d.c(),u(e,"class","buttons")},m(p,$){b(p,e,$),o&&o.m(e,null),c(e,t),r&&r.m(e,null),c(e,l),a&&a.m(e,null),c(e,s),d&&d.m(e,null),i=!0},p(p,$){p[0].banned_on===null?o?(o.p(p,$),$&1&&k(o,1)):(o=ft(p),o.c(),k(o,1),o.m(e,t)):o&&(W(),C(o,1,1,()=>{o=null}),X()),p[0].banned_on!==null?r?(r.p(p,$),$&1&&k(r,1)):(r=dt(p),r.c(),k(r,1),r.m(e,l)):r&&(W(),C(r,1,1,()=>{r=null}),X()),p[0].lockout_till!==null?a?(a.p(p,$),$&1&&k(a,1)):(a=mt(p),a.c(),k(a,1),a.m(e,s)):a&&(W(),C(a,1,1,()=>{a=null}),X()),p[0].email_confirmed?d&&(W(),C(d,1,1,()=>{d=null}),X()):d?(d.p(p,$),$&1&&k(d,1)):(d=pt(p),d.c(),k(d,1),d.m(e,null))},i(p){i||(k(o),k(r),k(a),k(d),i=!0)},o(p){C(o),C(r),C(a),C(d),i=!1},d(p){p&&v(e),o&&o.d(),r&&r.d(),a&&a.d(),d&&d.d()}}}function ft(n){let e,t,l,s,i,o,r;return t=new Tt({}),{c(){e=f("button"),L(t.$$.fragment),l=y(),s=f("span"),s.textContent="Ban user",u(e,"class","button is-danger")},m(a,d){b(a,e,d),S(t,e,null),c(e,l),c(e,s),i=!0,o||(r=ie(e,"click",n[7]),o=!0)},p:z,i(a){i||(k(t.$$.fragment,a),i=!0)},o(a){C(t.$$.fragment,a),i=!1},d(a){a&&v(e),E(t),o=!1,r()}}}function dt(n){let e,t,l,s,i,o,r;return t=new wt({}),{c(){e=f("button"),L(t.$$.fragment),l=y(),s=f("span"),s.textContent="Unban user",u(e,"class","button is-danger")},m(a,d){b(a,e,d),S(t,e,null),c(e,l),c(e,s),i=!0,o||(r=ie(e,"click",n[6]),o=!0)},p:z,i(a){i||(k(t.$$.fragment,a),i=!0)},o(a){C(t.$$.fragment,a),i=!1},d(a){a&&v(e),E(t),o=!1,r()}}}function mt(n){let e,t,l,s,i,o;return t=new Ft({}),{c(){e=f("button"),L(t.$$.fragment),l=f("span"),l.textContent="Unlock user",u(e,"class","button")},m(r,a){b(r,e,a),S(t,e,null),c(e,l),s=!0,i||(o=ie(e,"click",n[8]),i=!0)},p:z,i(r){s||(k(t.$$.fragment,r),s=!0)},o(r){C(t.$$.fragment,r),s=!1},d(r){r&&v(e),E(t),i=!1,o()}}}function pt(n){let e,t,l,s,i,o;return t=new wt({}),{c(){e=f("button"),L(t.$$.fragment),l=f("span"),l.textContent="Confirm email / account",u(e,"class","button")},m(r,a){b(r,e,a),S(t,e,null),c(e,l),s=!0,i||(o=ie(e,"click",n[9]),i=!0)},p:z,i(r){s||(k(t.$$.fragment,r),s=!0)},o(r){C(t.$$.fragment,r),s=!1},d(r){r&&v(e),E(t),i=!1,o()}}}function Ot(n){let e,t,l,s;const i=[Vt,Kt],o=[];function r(a,d){return a[0].id!==a[1]?0:1}return t=r(n),l=o[t]=i[t](n),{c(){e=f("div"),l.c(),u(e,"slot","footer")},m(a,d){b(a,e,d),o[t].m(e,null),s=!0},p(a,d){let p=t;t=r(a),t===p?o[t].p(a,d):(W(),C(o[p],1,1,()=>{o[p]=null}),X(),l=o[t],l?l.p(a,d):(l=o[t]=i[t](a),l.c()),k(l,1),l.m(e,null))},i(a){s||(k(l),s=!0)},o(a){C(l),s=!1},d(a){a&&v(e),o[t].d()}}}function Wt(n){let e,t,l=n[0]&&ct(n);return{c(){l&&l.c(),e=gt()},m(s,i){l&&l.m(s,i),b(s,e,i),t=!0},p(s,[i]){s[0]?l?(l.p(s,i),i&1&&k(l,1)):(l=ct(s),l.c(),k(l,1),l.m(e.parentNode,e)):l&&(W(),C(l,1,1,()=>{l=null}),X())},i(s){t||(k(l),t=!0)},o(s){C(l),t=!1},d(s){l&&l.d(s),s&&v(e)}}}function Xt(n,e,t){let{user:l=null}=e;const s=async()=>{const{data:h}=await N.get("/manage/users/by-id",{params:{id:l.id}});t(0,l=h)},i=()=>{t(0,l=null)};let o=null;bt.subscribe(h=>{t(1,o=h.user)});let r="";const a=De(l,s);let d=[],$=(async()=>{t(3,d=await a.activeApplications())})();const U=a.unbanUser,R=a.banUser(o),H=a.unlockUser,T=a.confirmUser,Y=async h=>(await a.grantAuthorization(h.client_id,""),!0),_=async h=>(await a.revokeAuthorization(h.client_id),!0),A=async()=>{r&&r.length>0&&await a.addUserToRole(r)},B=async h=>{h&&h.length>0&&await a.removeUserFromRole(h)},Q=ot().dyanmic(async h=>{let{data:K}=await N.get("/manage/roles",{params:{page:1,page_size:25,query:`name==${h}*`,sort:""}});return K.entries.map(ee=>ee.name)}),Z=ot().dyanmic(async h=>{let{data:K}=await N.get("/manage/applications",{params:{page:1,page_size:25,query:`name==${h}*,client_id==${h}*`,sort:""}});return K.entries}),J=(h,K)=>B(h);function x(h){r=h,t(2,r)}return n.$$set=h=>{"user"in h&&t(0,l=h.user)},[l,o,r,d,i,$,U,R,H,T,Y,_,A,B,Q,Z,J,x]}class Zt extends Fe{constructor(e){super(),Le(this,e,Xt,Wt,Se,{user:0})}}function _t(n){let e,t,l,s,i;function o(a){n[7](a)}let r={};return n[4]!==void 0&&(r.user=n[4]),e=new Zt({props:r}),kt.push(()=>$t(e,"user",o)),{c(){L(e.$$.fragment),l=y(),s=f("br")},m(a,d){S(e,a,d),b(a,l,d),b(a,s,d),i=!0},p(a,d){const p={};!t&&d&16&&(t=!0,p.user=a[4],ht(()=>t=!1)),e.$set(p)},i(a){i||(k(e.$$.fragment,a),i=!0)},o(a){C(e.$$.fragment,a),i=!1},d(a){E(e,a),a&&v(l),a&&v(s)}}}function xt(n){let e,t,l=n[16].message+"",s;return{c(){e=f("article"),t=f("div"),s=w(l),u(t,"class","message-body"),u(e,"class","message is-danger")},m(i,o){b(i,e,o),c(e,t),c(t,s)},p(i,o){o&8&&l!==(l=i[16].message+"")&&I(s,l)},i:z,o:z,d(i){i&&v(e)}}}function el(n){let e,t;return e=new Pt({props:{data:n[0].entries,columns:n[6]}}),{c(){L(e.$$.fragment)},m(l,s){S(e,l,s),t=!0},p(l,s){const i={};s&1&&(i.data=l[0].entries),e.$set(i)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){E(e,l)}}}function tl(n){let e;return{c(){e=f("article"),e.innerHTML='<div class="message-body">Fetching users</div>',u(e,"class","message")},m(t,l){b(t,e,l)},p:z,i:z,o:z,d(t){t&&v(e)}}}function ll(n){let e,t,l,s={ctx:n,current:null,token:null,hasCatch:!0,pending:tl,then:el,catch:xt,value:15,error:16,blocks:[,,,]};return tt(t=n[3],s),{c(){e=gt(),s.block.c()},m(i,o){b(i,e,o),s.block.m(i,s.anchor=o),s.mount=()=>e.parentNode,s.anchor=e,l=!0},p(i,o){n=i,s.ctx=n,o&8&&t!==(t=n[3])&&tt(t,s)||At(s,n,o)},i(i){l||(k(s.block),l=!0)},o(i){for(let o=0;o<3;o+=1){const r=s.blocks[o];C(r)}l=!1},d(i){i&&v(e),s.block.d(i),s.token=null,s=null}}}function nl(n){let e;return{c(){e=f("span"),e.textContent="Users",u(e,"slot","title")},m(t,l){b(t,e,l)},p:z,d(t){t&&v(e)}}}function sl(n){let e,t,l;return t=new It({props:{pageSize:Ct,total:n[2],currentPage:n[1]}}),t.$on("page-changed",n[5]),{c(){e=f("span"),L(t.$$.fragment),u(e,"slot","footer")},m(s,i){b(s,e,i),S(t,e,null),l=!0},p(s,i){const o={};i&4&&(o.total=s[2]),i&2&&(o.currentPage=s[1]),t.$set(o)},i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){C(t.$$.fragment,s),l=!1},d(s){s&&v(e),E(t)}}}function al(n){let e,t,l,s,i,o;t=new zt({props:{title:"Manage",subtitle:"Users"}});let r=n[4]&&_t(n);return i=new vt({props:{padding:!1,$$slots:{footer:[sl],title:[nl],default:[ll]},$$scope:{ctx:n}}}),{c(){e=f("div"),L(t.$$.fragment),l=y(),r&&r.c(),s=y(),L(i.$$.fragment),u(e,"class","section")},m(a,d){b(a,e,d),S(t,e,null),c(e,l),r&&r.m(e,null),c(e,s),S(i,e,null),o=!0},p(a,[d]){a[4]?r?(r.p(a,d),d&16&&k(r,1)):(r=_t(a),r.c(),k(r,1),r.m(e,s)):r&&(W(),C(r,1,1,()=>{r=null}),X());const p={};d&131087&&(p.$$scope={dirty:d,ctx:a}),i.$set(p)},i(a){o||(k(t.$$.fragment,a),k(r),k(i.$$.fragment,a),o=!0)},o(a){C(t.$$.fragment,a),C(r),C(i.$$.fragment,a),o=!1},d(a){a&&v(e),E(t),r&&r.d(),E(i)}}}let Ct=15;function il(n,e,t){let l=null;bt.subscribe(_=>{l=_.user});let s={},i=1,o=30;function r(_){t(1,i=_.detail.page),t(3,d=a())}async function a(){let{data:_}=await N.get(`/manage/users?page=${i}&page_size=${Ct}`);t(2,o=_.total),t(0,s=_)}let d=a();const p=async()=>{t(3,d=a())},$=async(_,A)=>{A&&await De(A,p).banUser(l)()},U=async(_,A)=>{A&&await De(A,p).unbanUser()};let H=[{name:"E-Mail",property:"email",tooltip:"email_confirmed",indicator:_=>!_.email_confirmed||_.banned_on?"is-danger":_.lockout_till?"is-warning":"is-success"},{name:"Phone",property:"Phone",tooltip:"phone_confirmed"},{name:"Roles",property:"roles"},{name:"2FA",property:"mfa",format:"bool"},{name:"Locked out",property:"lockout_till",format:"if-time"},{name:"Banned on",property:"banned_on",format:"if-time"},{name:"Actions",format:"menu",menu:[{action:"Deails",onClick:(_,A)=>t(4,T=A)},{action:"Ban",onClick:$,showIf:_=>_.banned_on==null},{action:"Unban",onClick:U,showIf:_=>_.banned_on!=null},{action:"Unlock",onClick:U,showIf:_=>_.lockout_till!=null},{action:"Confirm email / account",onClick:async(_,A)=>{A&&await De(A,p).confirmUser()},showIf:_=>!_.email_confirmed}]}],T=null;function Y(_){T=_,t(4,T)}return[s,i,o,d,T,r,H,Y]}class dl extends Fe{constructor(e){super(),Le(this,e,il,al,Se,{})}}export{dl as default};