import{a5 as h,a6 as v,a7 as B}from"./index.fdd36fac.js";var T=Object.prototype.hasOwnProperty;function b(e,t){var s,n;if(e===t)return!0;if(e&&t&&(s=e.constructor)===t.constructor){if(s===Date)return e.getTime()===t.getTime();if(s===RegExp)return e.toString()===t.toString();if(s===Array){if((n=e.length)===t.length)for(;n--&&b(e[n],t[n]););return n===-1}if(!s||typeof e=="object"){n=0;for(s in e)if(T.call(e,s)&&++n&&!T.call(t,s)||!(s in t)||!b(e[s],t[s]))return!1;return Object.keys(t).length===n}}return e!==e&&t!==t}function G(e){return new Promise(t=>{e.subscribe(t)()})}function K(e,t,s){e.update(n=>(q(n,t,s),n))}function L(e){return JSON.parse(JSON.stringify(e))}function V(e){return e==null}function M(e){return V(e)||Object.keys(e).length<=0}function _(e){let t=[];for(const[,s]of Object.entries(e)){const n=typeof s=="object"?_(s):[s];t=[...t,...n]}return t}function E(e,t,s={}){for(const n in t)switch(!0){case(t[n].type==="object"&&!M(t[n].fields)):{s[n]=E(e[n],t[n].fields,{...s[n]});break}case t[n].type==="array":{const d=e&&e[n]?e[n]:[];s[n]=d.map(c=>{const l=E(c,t[n].innerType.fields,{...s[n]});return Object.keys(l).length>0?l:""});break}default:s[n]=""}return s}const Q=b;function A(e,t){if(Array.isArray(e))return e.map(n=>A(n,t));const s={};for(const n in e)s[n]=typeof e[n]=="object"&&!V(e[n])?A(e[n],t):t;return s}function q(e,t,s){if(new Object(e)!==e)return e;Array.isArray(t)||(t=t.toString().match(/[^.[\]]+/g)||[]);const n=t.slice(0,-1).reduce((d,c,l)=>new Object(d[c])===d[c]?d[c]:d[c]=Math.trunc(Math.abs(t[l+1]))===+t[l+1]?[]:{},e);return n[t[t.length-1]]=s,e}const a={assignDeep:A,cloneDeep:L,deepEqual:Q,getErrorsFromSchema:E,getValues:_,isEmpty:M,isNullish:V,set:q,subscribeOnce:G,update:K},I="",W=!0;function X(e){return e.getAttribute&&e.getAttribute("type")==="checkbox"}function Y(e){return e.getAttribute&&e.getAttribute("type")==="file"}function Z(e){return Y(e)?e.files:X(e)?e.checked:e.value}const ee=e=>{let t=e.initialValues||{};const s=e.validationSchema,n=e.validate,d=e.onSubmit,c={values:()=>a.cloneDeep(t),errors:()=>s?a.getErrorsFromSchema(t,s.fields):a.assignDeep(t,I),touched:()=>a.assignDeep(t,!W)},l=h(c.values()),o=h(c.errors()),y=h(c.touched()),g=h(!1),f=h(!1),D=v(o,r=>a.getValues(r).every(u=>u===I)),O=v(l,r=>{const i=a.assignDeep(r,!1);for(let u in r)i[u]=!a.deepEqual(r[u],t[u]);return i}),F=v(O,r=>a.getValues(r).includes(!0));function x(r){return a.subscribeOnce(l).then(i=>k(r,i[r]))}function k(r,i){return R(r,!0),s?(f.set(!0),s.validateAt(r,B(l)).then(()=>a.update(o,r,"")).catch(u=>a.update(o,r,u.message)).finally(()=>{f.set(!1)})):n?(f.set(!0),Promise.resolve().then(()=>n({[r]:i})).then(u=>a.update(o,r,a.isNullish(u)?"":u[r])).finally(()=>{f.set(!1)})):Promise.resolve()}function w(r,i){return P(r,i),k(r,i)}function C(r){const i=r.target,u=i.name||i.id,p=Z(i);return w(u,p)}function j(r){return r&&r.preventDefault&&r.preventDefault(),g.set(!0),a.subscribeOnce(l).then(i=>typeof n=="function"?(f.set(!0),Promise.resolve().then(()=>n(i)).then(u=>{if(a.isNullish(u)||a.getValues(u).length===0)return S(i);o.set(u),g.set(!1)}).finally(()=>f.set(!1))):s?(f.set(!0),s.validate(i,{abortEarly:!1}).then(()=>S(i)).catch(u=>{if(u&&u.inner){const p=c.errors();u.inner.map(m=>a.set(p,m.path,m.message)),o.set(p)}g.set(!1)}).finally(()=>f.set(!1))):S(i))}function N(){l.set(c.values()),o.set(c.errors()),y.set(c.touched())}function S(r){return Promise.resolve().then(()=>o.set(c.errors())).then(()=>d(r,l,o)).finally(()=>g.set(!1))}function P(r,i){a.update(l,r,i)}function R(r,i){a.update(y,r,i)}function J(r){t=r,N()}return{form:l,errors:o,touched:y,modified:O,isValid:D,isSubmitting:g,isValidating:f,isModified:F,handleChange:C,handleSubmit:j,handleReset:N,updateField:P,updateValidateField:w,updateTouched:R,validateField:x,updateInitialValues:J,state:v([l,o,y,O,D,f,g,F],([r,i,u,p,m,H,U,z])=>({form:r,errors:i,touched:u,modified:p,isValid:m,isSubmitting:U,isValidating:H,isModified:z}))}};export{ee as c};