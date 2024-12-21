import{P as ve,j as w,p as be}from"./index.DR2ea3I7.js";import{r as le,R}from"./index.CqrSl2Gl.js";function Le(){return Le=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Le.apply(this,arguments)}function pt(e,s){if(e==null)return{};var t=wt(e,s),a,u;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(u=0;u<n.length;u++)a=n[u],!(s.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function wt(e,s){if(e==null)return{};var t={},a=Object.keys(e),u,n;for(n=0;n<a.length;n++)u=a[n],!(s.indexOf(u)>=0)&&(t[u]=e[u]);return t}var je=le.forwardRef(function(e,s){var t=e.color,a=t===void 0?"currentColor":t,u=e.size,n=u===void 0?24:u,y=pt(e,["color","size"]);return R.createElement("svg",Le({ref:s,xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},y),R.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),R.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))});je.propTypes={color:ve.string,size:ve.oneOfType([ve.string,ve.number])};je.displayName="Send";var ge=e=>e.type==="checkbox",ie=e=>e instanceof Date,P=e=>e==null;const at=e=>typeof e=="object";var k=e=>!P(e)&&!Array.isArray(e)&&at(e)&&!ie(e),_t=e=>k(e)&&e.target?ge(e.target)?e.target.checked:e.target.value:e,Ft=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,At=(e,s)=>e.has(Ft(s)),Vt=e=>{const s=e.constructor&&e.constructor.prototype;return k(s)&&s.hasOwnProperty("isPrototypeOf")},Te=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function $(e){let s;const t=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Te&&(e instanceof Blob||a))&&(t||k(e)))if(s=t?[]:{},!t&&!Vt(e))s=e;else for(const u in e)e.hasOwnProperty(u)&&(s[u]=$(e[u]));else return e;return s}var Ae=e=>Array.isArray(e)?e.filter(Boolean):[],E=e=>e===void 0,f=(e,s,t)=>{if(!s||!k(e))return t;const a=Ae(s.split(/[,[\].]+?/)).reduce((u,n)=>P(u)?u:u[n],e);return E(a)||a===e?E(e[s])?t:e[s]:a},J=e=>typeof e=="boolean",Re=e=>/^\w*$/.test(e),nt=e=>Ae(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,t)=>{let a=-1;const u=Re(s)?[s]:nt(s),n=u.length,y=n-1;for(;++a<n;){const g=u[a];let j=t;if(a!==y){const B=e[g];j=k(B)||Array.isArray(B)?B:isNaN(+u[a+1])?{}:[]}if(g==="__proto__"||g==="constructor"||g==="prototype")return;e[g]=j,e=e[g]}return e};const Ge={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Z={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};R.createContext(null);var St=(e,s,t,a=!0)=>{const u={defaultValues:s._defaultValues};for(const n in e)Object.defineProperty(u,n,{get:()=>{const y=n;return s._proxyFormState[y]!==Z.all&&(s._proxyFormState[y]=!a||Z.all),e[y]}});return u},M=e=>k(e)&&!Object.keys(e).length,Et=(e,s,t,a)=>{t(e);const{name:u,...n}=e;return M(n)||Object.keys(n).length>=Object.keys(s).length||Object.keys(n).find(y=>s[y]===Z.all)},xe=e=>Array.isArray(e)?e:[e];function kt(e){const s=R.useRef(e);s.current=e,R.useEffect(()=>{const t=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{t&&t.unsubscribe()}},[e.disabled])}var Q=e=>typeof e=="string",Dt=(e,s,t,a,u)=>Q(e)?(a&&s.watch.add(e),f(t,e,u)):Array.isArray(e)?e.map(n=>(a&&s.watch.add(n),f(t,n))):(a&&(s.watchAll=!0),t),Ct=(e,s,t,a,u)=>s?{...t[e],types:{...t[e]&&t[e].types?t[e].types:{},[a]:u||!0}}:{},Je=e=>({isOnSubmit:!e||e===Z.onSubmit,isOnBlur:e===Z.onBlur,isOnChange:e===Z.onChange,isOnAll:e===Z.all,isOnTouch:e===Z.onTouched}),Ye=(e,s,t)=>!t&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const he=(e,s,t,a)=>{for(const u of t||Object.keys(e)){const n=f(e,u);if(n){const{_f:y,...g}=n;if(y){if(y.refs&&y.refs[0]&&s(y.refs[0],u)&&!a)return!0;if(y.ref&&s(y.ref,y.name)&&!a)return!0;if(he(g,s))break}else if(k(g)&&he(g,s))break}}};var Nt=(e,s,t)=>{const a=xe(f(e,t));return A(a,"root",s[t]),A(e,t,a),e},Pe=e=>e.type==="file",Y=e=>typeof e=="function",we=e=>{if(!Te)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},pe=e=>Q(e),Ue=e=>e.type==="radio",_e=e=>e instanceof RegExp;const Qe={value:!1,isValid:!1},Xe={value:!0,isValid:!0};var lt=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(t=>t&&t.checked&&!t.disabled).map(t=>t.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!E(e[0].attributes.value)?E(e[0].value)||e[0].value===""?Xe:{value:e[0].value,isValid:!0}:Xe:Qe}return Qe};const et={isValid:!1,value:null};var ut=e=>Array.isArray(e)?e.reduce((s,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:s,et):et;function tt(e,s,t="validate"){if(pe(e)||Array.isArray(e)&&e.every(pe)||J(e)&&!e)return{type:t,message:pe(e)?e:"",ref:s}}var ne=e=>k(e)&&!_e(e)?e:{value:e,message:""},rt=async(e,s,t,a,u)=>{const{ref:n,refs:y,required:g,maxLength:j,minLength:B,min:V,max:b,pattern:ee,validate:U,name:T,valueAsNumber:ue,mount:W,disabled:K}=e._f,m=f(s,T);if(!W||K)return{};const p=y?y[0]:n,S=x=>{a&&p.reportValidity&&(p.setCustomValidity(J(x)?"":x||""),p.reportValidity())},F={},z=Ue(n),re=ge(n),G=z||re,ae=(ue||Pe(n))&&E(n.value)&&E(m)||we(n)&&n.value===""||m===""||Array.isArray(m)&&!m.length,I=Ct.bind(null,T,t,F),me=(x,_,D,O=X.maxLength,H=X.minLength)=>{const q=x?_:D;F[T]={type:x?O:H,message:q,ref:n,...I(x?O:H,q)}};if(u?!Array.isArray(m)||!m.length:g&&(!G&&(ae||P(m))||J(m)&&!m||re&&!lt(y).isValid||z&&!ut(y).isValid)){const{value:x,message:_}=pe(g)?{value:!!g,message:g}:ne(g);if(x&&(F[T]={type:X.required,message:_,ref:p,...I(X.required,_)},!t))return S(_),F}if(!ae&&(!P(V)||!P(b))){let x,_;const D=ne(b),O=ne(V);if(!P(m)&&!isNaN(m)){const H=n.valueAsNumber||m&&+m;P(D.value)||(x=H>D.value),P(O.value)||(_=H<O.value)}else{const H=n.valueAsDate||new Date(m),q=de=>new Date(new Date().toDateString()+" "+de),oe=n.type=="time",ce=n.type=="week";Q(D.value)&&m&&(x=oe?q(m)>q(D.value):ce?m>D.value:H>new Date(D.value)),Q(O.value)&&m&&(_=oe?q(m)<q(O.value):ce?m<O.value:H<new Date(O.value))}if((x||_)&&(me(!!x,D.message,O.message,X.max,X.min),!t))return S(F[T].message),F}if((j||B)&&!ae&&(Q(m)||u&&Array.isArray(m))){const x=ne(j),_=ne(B),D=!P(x.value)&&m.length>+x.value,O=!P(_.value)&&m.length<+_.value;if((D||O)&&(me(D,x.message,_.message),!t))return S(F[T].message),F}if(ee&&!ae&&Q(m)){const{value:x,message:_}=ne(ee);if(_e(x)&&!m.match(x)&&(F[T]={type:X.pattern,message:_,ref:n,...I(X.pattern,_)},!t))return S(_),F}if(U){if(Y(U)){const x=await U(m,s),_=tt(x,p);if(_&&(F[T]={..._,...I(X.validate,_.message)},!t))return S(_.message),F}else if(k(U)){let x={};for(const _ in U){if(!M(x)&&!t)break;const D=tt(await U[_](m,s),p,_);D&&(x={...D,...I(_,D.message)},S(D.message),t&&(F[T]=x))}if(!M(x)&&(F[T]={ref:p,...x},!t))return F}}return S(!0),F};function Lt(e,s){const t=s.slice(0,-1).length;let a=0;for(;a<t;)e=E(e)?a++:e[s[a++]];return e}function Ot(e){for(const s in e)if(e.hasOwnProperty(s)&&!E(e[s]))return!1;return!0}function C(e,s){const t=Array.isArray(s)?s:Re(s)?[s]:nt(s),a=t.length===1?e:Lt(e,t),u=t.length-1,n=t[u];return a&&delete a[n],u!==0&&(k(a)&&M(a)||Array.isArray(a)&&Ot(a))&&C(e,t.slice(0,-1)),e}var De=()=>{let e=[];return{get observers(){return e},next:u=>{for(const n of e)n.next&&n.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(n=>n!==u)}}),unsubscribe:()=>{e=[]}}},Oe=e=>P(e)||!at(e);function te(e,s){if(Oe(e)||Oe(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const t=Object.keys(e),a=Object.keys(s);if(t.length!==a.length)return!1;for(const u of t){const n=e[u];if(!a.includes(u))return!1;if(u!=="ref"){const y=s[u];if(ie(n)&&ie(y)||k(n)&&k(y)||Array.isArray(n)&&Array.isArray(y)?!te(n,y):n!==y)return!1}}return!0}var ot=e=>e.type==="select-multiple",jt=e=>Ue(e)||ge(e),Ce=e=>we(e)&&e.isConnected,ct=e=>{for(const s in e)if(Y(e[s]))return!0;return!1};function Fe(e,s={}){const t=Array.isArray(e);if(k(e)||t)for(const a in e)Array.isArray(e[a])||k(e[a])&&!ct(e[a])?(s[a]=Array.isArray(e[a])?[]:{},Fe(e[a],s[a])):P(e[a])||(s[a]=!0);return s}function dt(e,s,t){const a=Array.isArray(e);if(k(e)||a)for(const u in e)Array.isArray(e[u])||k(e[u])&&!ct(e[u])?E(s)||Oe(t[u])?t[u]=Array.isArray(e[u])?Fe(e[u],[]):{...Fe(e[u])}:dt(e[u],P(s)?{}:s[u],t[u]):t[u]=!te(e[u],s[u]);return t}var fe=(e,s)=>dt(e,s,Fe(s)),ft=(e,{valueAsNumber:s,valueAsDate:t,setValueAs:a})=>E(e)?e:s?e===""?NaN:e&&+e:t&&Q(e)?new Date(e):a?a(e):e;function Ne(e){const s=e.ref;if(!(e.refs?e.refs.every(t=>t.disabled):s.disabled))return Pe(s)?s.files:Ue(s)?ut(e.refs).value:ot(s)?[...s.selectedOptions].map(({value:t})=>t):ge(s)?lt(e.refs).value:ft(E(s.value)?e.ref.value:s.value,e)}var Tt=(e,s,t,a)=>{const u={};for(const n of e){const y=f(s,n);y&&A(u,n,y._f)}return{criteriaMode:t,names:[...e],fields:u,shouldUseNativeValidation:a}},ye=e=>E(e)?e:_e(e)?e.source:k(e)?_e(e.value)?e.value.source:e.value:e;const st="AsyncFunction";var Rt=e=>!!e&&!!e.validate&&!!(Y(e.validate)&&e.validate.constructor.name===st||k(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===st)),Pt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function it(e,s,t){const a=f(e,t);if(a||Re(t))return{error:a,name:t};const u=t.split(".");for(;u.length;){const n=u.join("."),y=f(s,n),g=f(e,n);if(y&&!Array.isArray(y)&&t!==n)return{name:t};if(g&&g.type)return{name:n,error:g};u.pop()}return{name:t}}var Ut=(e,s,t,a,u)=>u.isOnAll?!1:!t&&u.isOnTouch?!(s||e):(t?a.isOnBlur:u.isOnBlur)?!e:(t?a.isOnChange:u.isOnChange)?e:!0,Mt=(e,s)=>!Ae(f(e,s)).length&&C(e,s);const Bt={mode:Z.onSubmit,reValidateMode:Z.onChange,shouldFocusError:!0};function It(e={}){let s={...Bt,...e},t={submitCount:0,isDirty:!1,isLoading:Y(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},u=k(s.defaultValues)||k(s.values)?$(s.defaultValues||s.values)||{}:{},n=s.shouldUnregister?{}:$(u),y={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},j,B=0;const V={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={values:De(),array:De(),state:De()},ee=Je(s.mode),U=Je(s.reValidateMode),T=s.criteriaMode===Z.all,ue=r=>i=>{clearTimeout(B),B=setTimeout(r,i)},W=async r=>{if(!s.disabled&&(V.isValid||r)){const i=s.resolver?M((await G()).errors):await I(a,!0);i!==t.isValid&&b.state.next({isValid:i})}},K=(r,i)=>{!s.disabled&&(V.isValidating||V.validatingFields)&&((r||Array.from(g.mount)).forEach(l=>{l&&(i?A(t.validatingFields,l,i):C(t.validatingFields,l))}),b.state.next({validatingFields:t.validatingFields,isValidating:!M(t.validatingFields)}))},m=(r,i=[],l,d,c=!0,o=!0)=>{if(d&&l&&!s.disabled){if(y.action=!0,o&&Array.isArray(f(a,r))){const h=l(f(a,r),d.argA,d.argB);c&&A(a,r,h)}if(o&&Array.isArray(f(t.errors,r))){const h=l(f(t.errors,r),d.argA,d.argB);c&&A(t.errors,r,h),Mt(t.errors,r)}if(V.touchedFields&&o&&Array.isArray(f(t.touchedFields,r))){const h=l(f(t.touchedFields,r),d.argA,d.argB);c&&A(t.touchedFields,r,h)}V.dirtyFields&&(t.dirtyFields=fe(u,n)),b.state.next({name:r,isDirty:x(r,i),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(n,r,i)},p=(r,i)=>{A(t.errors,r,i),b.state.next({errors:t.errors})},S=r=>{t.errors=r,b.state.next({errors:t.errors,isValid:!1})},F=(r,i,l,d)=>{const c=f(a,r);if(c){const o=f(n,r,E(l)?f(u,r):l);E(o)||d&&d.defaultChecked||i?A(n,r,i?o:Ne(c._f)):O(r,o),y.mount&&W()}},z=(r,i,l,d,c)=>{let o=!1,h=!1;const v={name:r};if(!s.disabled){const N=!!(f(a,r)&&f(a,r)._f&&f(a,r)._f.disabled);if(!l||d){V.isDirty&&(h=t.isDirty,t.isDirty=v.isDirty=x(),o=h!==v.isDirty);const L=N||te(f(u,r),i);h=!!(!N&&f(t.dirtyFields,r)),L||N?C(t.dirtyFields,r):A(t.dirtyFields,r,!0),v.dirtyFields=t.dirtyFields,o=o||V.dirtyFields&&h!==!L}if(l){const L=f(t.touchedFields,r);L||(A(t.touchedFields,r,l),v.touchedFields=t.touchedFields,o=o||V.touchedFields&&L!==l)}o&&c&&b.state.next(v)}return o?v:{}},re=(r,i,l,d)=>{const c=f(t.errors,r),o=V.isValid&&J(i)&&t.isValid!==i;if(s.delayError&&l?(j=ue(()=>p(r,l)),j(s.delayError)):(clearTimeout(B),j=null,l?A(t.errors,r,l):C(t.errors,r)),(l?!te(c,l):c)||!M(d)||o){const h={...d,...o&&J(i)?{isValid:i}:{},errors:t.errors,name:r};t={...t,...h},b.state.next(h)}},G=async r=>{K(r,!0);const i=await s.resolver(n,s.context,Tt(r||g.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return K(r),i},ae=async r=>{const{errors:i}=await G(r);if(r)for(const l of r){const d=f(i,l);d?A(t.errors,l,d):C(t.errors,l)}else t.errors=i;return i},I=async(r,i,l={valid:!0})=>{for(const d in r){const c=r[d];if(c){const{_f:o,...h}=c;if(o){const v=g.array.has(o.name),N=c._f&&Rt(c._f);N&&V.validatingFields&&K([d],!0);const L=await rt(c,n,T,s.shouldUseNativeValidation&&!i,v);if(N&&V.validatingFields&&K([d]),L[o.name]&&(l.valid=!1,i))break;!i&&(f(L,o.name)?v?Nt(t.errors,L,o.name):A(t.errors,o.name,L[o.name]):C(t.errors,o.name))}!M(h)&&await I(h,i,l)}}return l.valid},me=()=>{for(const r of g.unMount){const i=f(a,r);i&&(i._f.refs?i._f.refs.every(l=>!Ce(l)):!Ce(i._f.ref))&&Ve(r)}g.unMount=new Set},x=(r,i)=>!s.disabled&&(r&&i&&A(n,r,i),!te(Me(),u)),_=(r,i,l)=>Dt(r,g,{...y.mount?n:E(i)?u:Q(r)?{[r]:i}:i},l,i),D=r=>Ae(f(y.mount?n:u,r,s.shouldUnregister?f(u,r,[]):[])),O=(r,i,l={})=>{const d=f(a,r);let c=i;if(d){const o=d._f;o&&(!o.disabled&&A(n,r,ft(i,o)),c=we(o.ref)&&P(i)?"":i,ot(o.ref)?[...o.ref.options].forEach(h=>h.selected=c.includes(h.value)):o.refs?ge(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(v=>v===h.value):c===h.value)):o.refs[0]&&(o.refs[0].checked=!!c):o.refs.forEach(h=>h.checked=h.value===c):Pe(o.ref)?o.ref.value="":(o.ref.value=c,o.ref.type||b.values.next({name:r,values:{...n}})))}(l.shouldDirty||l.shouldTouch)&&z(r,c,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&de(r)},H=(r,i,l)=>{for(const d in i){const c=i[d],o=`${r}.${d}`,h=f(a,o);(g.array.has(r)||k(c)||h&&!h._f)&&!ie(c)?H(o,c,l):O(o,c,l)}},q=(r,i,l={})=>{const d=f(a,r),c=g.array.has(r),o=$(i);A(n,r,o),c?(b.array.next({name:r,values:{...n}}),(V.isDirty||V.dirtyFields)&&l.shouldDirty&&b.state.next({name:r,dirtyFields:fe(u,n),isDirty:x(r,o)})):d&&!d._f&&!P(o)?H(r,o,l):O(r,o,l),Ye(r,g)&&b.state.next({...t}),b.values.next({name:y.mount?r:void 0,values:{...n}})},oe=async r=>{y.mount=!0;const i=r.target;let l=i.name,d=!0;const c=f(a,l),o=()=>i.type?Ne(c._f):_t(r),h=v=>{d=Number.isNaN(v)||ie(v)&&isNaN(v.getTime())||te(v,f(n,l,v))};if(c){let v,N;const L=o(),se=r.type===Ge.BLUR||r.type===Ge.FOCUS_OUT,vt=!Pt(c._f)&&!s.resolver&&!f(t.errors,l)&&!c._f.deps||Ut(se,f(t.touchedFields,l),t.isSubmitted,U,ee),Ee=Ye(l,g,se);A(n,l,L),se?(c._f.onBlur&&c._f.onBlur(r),j&&j(0)):c._f.onChange&&c._f.onChange(r);const ke=z(l,L,se,!1),bt=!M(ke)||Ee;if(!se&&b.values.next({name:l,type:r.type,values:{...n}}),vt)return V.isValid&&(s.mode==="onBlur"?se&&W():W()),bt&&b.state.next({name:l,...Ee?{}:ke});if(!se&&Ee&&b.state.next({...t}),s.resolver){const{errors:Ze}=await G([l]);if(h(L),d){const xt=it(t.errors,a,l),Ke=it(Ze,a,xt.name||l);v=Ke.error,l=Ke.name,N=M(Ze)}}else K([l],!0),v=(await rt(c,n,T,s.shouldUseNativeValidation))[l],K([l]),h(L),d&&(v?N=!1:V.isValid&&(N=await I(a,!0)));d&&(c._f.deps&&de(c._f.deps),re(l,N,v,ke))}},ce=(r,i)=>{if(f(t.errors,i)&&r.focus)return r.focus(),1},de=async(r,i={})=>{let l,d;const c=xe(r);if(s.resolver){const o=await ae(E(r)?r:c);l=M(o),d=r?!c.some(h=>f(o,h)):l}else r?(d=(await Promise.all(c.map(async o=>{const h=f(a,o);return await I(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!d&&!t.isValid)&&W()):d=l=await I(a);return b.state.next({...!Q(r)||V.isValid&&l!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:l}:{},errors:t.errors}),i.shouldFocus&&!d&&he(a,ce,r?c:g.mount),d},Me=r=>{const i={...y.mount?n:u};return E(r)?i:Q(r)?f(i,r):r.map(l=>f(i,l))},Be=(r,i)=>({invalid:!!f((i||t).errors,r),isDirty:!!f((i||t).dirtyFields,r),error:f((i||t).errors,r),isValidating:!!f(t.validatingFields,r),isTouched:!!f((i||t).touchedFields,r)}),yt=r=>{r&&xe(r).forEach(i=>C(t.errors,i)),b.state.next({errors:r?t.errors:{}})},Ie=(r,i,l)=>{const d=(f(a,r,{_f:{}})._f||{}).ref,c=f(t.errors,r)||{},{ref:o,message:h,type:v,...N}=c;A(t.errors,r,{...N,...i,ref:d}),b.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&d&&d.focus&&d.focus()},ht=(r,i)=>Y(r)?b.values.subscribe({next:l=>r(_(void 0,i),l)}):_(r,i,!0),Ve=(r,i={})=>{for(const l of r?xe(r):g.mount)g.mount.delete(l),g.array.delete(l),i.keepValue||(C(a,l),C(n,l)),!i.keepError&&C(t.errors,l),!i.keepDirty&&C(t.dirtyFields,l),!i.keepTouched&&C(t.touchedFields,l),!i.keepIsValidating&&C(t.validatingFields,l),!s.shouldUnregister&&!i.keepDefaultValue&&C(u,l);b.values.next({values:{...n}}),b.state.next({...t,...i.keepDirty?{isDirty:x()}:{}}),!i.keepIsValid&&W()},qe=({disabled:r,name:i,field:l,fields:d,value:c})=>{if(J(r)&&y.mount||r){const o=r?void 0:E(c)?Ne(l?l._f:f(d,i)._f):c;(r||!r&&!E(o))&&A(n,i,o),z(i,o,!1,!1,!0)}},Se=(r,i={})=>{let l=f(a,r);const d=J(i.disabled)||J(s.disabled);return A(a,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...i}}),g.mount.add(r),l?qe({field:l,disabled:J(i.disabled)?i.disabled:s.disabled,name:r,value:i.value}):F(r,!0,i.value),{...d?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:ye(i.min),max:ye(i.max),minLength:ye(i.minLength),maxLength:ye(i.maxLength),pattern:ye(i.pattern)}:{},name:r,onChange:oe,onBlur:oe,ref:c=>{if(c){Se(r,i),l=f(a,r);const o=E(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=jt(o),v=l._f.refs||[];if(h?v.find(N=>N===o):o===l._f.ref)return;A(a,r,{_f:{...l._f,...h?{refs:[...v.filter(Ce),o,...Array.isArray(f(u,r))?[{}]:[]],ref:{type:o.type,name:r}}:{ref:o}}}),F(r,!1,void 0,o)}else l=f(a,r,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(At(g.array,r)&&y.action)&&g.unMount.add(r)}}},$e=()=>s.shouldFocusError&&he(a,ce,g.mount),gt=r=>{J(r)&&(b.state.next({disabled:r}),he(a,(i,l)=>{const d=f(a,l);d&&(i.disabled=d._f.disabled||r,Array.isArray(d._f.refs)&&d._f.refs.forEach(c=>{c.disabled=d._f.disabled||r}))},0,!1))},We=(r,i)=>async l=>{let d;if(l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist()),s.disabled){i&&await i({...t.errors},l);return}let c=$(n);if(b.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:h}=await G();t.errors=o,c=h}else await I(a);if(C(t.errors,"root"),M(t.errors)){b.state.next({errors:{}});try{await r(c,l)}catch(o){d=o}}else i&&await i({...t.errors},l),$e(),setTimeout($e);if(b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:M(t.errors)&&!d,submitCount:t.submitCount+1,errors:t.errors}),d)throw d},mt=(r,i={})=>{f(a,r)&&(E(i.defaultValue)?q(r,$(f(u,r))):(q(r,i.defaultValue),A(u,r,$(i.defaultValue))),i.keepTouched||C(t.touchedFields,r),i.keepDirty||(C(t.dirtyFields,r),t.isDirty=i.defaultValue?x(r,$(f(u,r))):x()),i.keepError||(C(t.errors,r),V.isValid&&W()),b.state.next({...t}))},ze=(r,i={})=>{const l=r?$(r):u,d=$(l),c=M(r),o=c?u:d;if(i.keepDefaultValues||(u=l),!i.keepValues){if(i.keepDirtyValues){const h=new Set([...g.mount,...Object.keys(fe(u,n))]);for(const v of Array.from(h))f(t.dirtyFields,v)?A(o,v,f(n,v)):q(v,f(o,v))}else{if(Te&&E(r))for(const h of g.mount){const v=f(a,h);if(v&&v._f){const N=Array.isArray(v._f.refs)?v._f.refs[0]:v._f.ref;if(we(N)){const L=N.closest("form");if(L){L.reset();break}}}}a={}}n=s.shouldUnregister?i.keepDefaultValues?$(u):{}:$(o),b.array.next({values:{...o}}),b.values.next({values:{...o}})}g={mount:i.keepDirtyValues?g.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!V.isValid||!!i.keepIsValid||!!i.keepDirtyValues,y.watch=!!s.shouldUnregister,b.state.next({submitCount:i.keepSubmitCount?t.submitCount:0,isDirty:c?!1:i.keepDirty?t.isDirty:!!(i.keepDefaultValues&&!te(r,u)),isSubmitted:i.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:c?{}:i.keepDirtyValues?i.keepDefaultValues&&n?fe(u,n):t.dirtyFields:i.keepDefaultValues&&r?fe(u,r):i.keepDirty?t.dirtyFields:{},touchedFields:i.keepTouched?t.touchedFields:{},errors:i.keepErrors?t.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?t.isSubmitSuccessful:!1,isSubmitting:!1})},He=(r,i)=>ze(Y(r)?r(n):r,i);return{control:{register:Se,unregister:Ve,getFieldState:Be,handleSubmit:We,setError:Ie,_executeSchema:G,_getWatch:_,_getDirty:x,_updateValid:W,_removeUnmounted:me,_updateFieldArray:m,_updateDisabledField:qe,_getFieldArray:D,_reset:ze,_resetDefaultValues:()=>Y(s.defaultValues)&&s.defaultValues().then(r=>{He(r,s.resetOptions),b.state.next({isLoading:!1})}),_updateFormState:r=>{t={...t,...r}},_disableForm:gt,_subjects:b,_proxyFormState:V,_setErrors:S,get _fields(){return a},get _formValues(){return n},get _state(){return y},set _state(r){y=r},get _defaultValues(){return u},get _names(){return g},set _names(r){g=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:de,register:Se,handleSubmit:We,watch:ht,setValue:q,getValues:Me,reset:He,resetField:mt,clearErrors:yt,unregister:Ve,setError:Ie,setFocus:(r,i={})=>{const l=f(a,r),d=l&&l._f;if(d){const c=d.refs?d.refs[0]:d.ref;c.focus&&(c.focus(),i.shouldSelect&&Y(c.select)&&c.select())}},getFieldState:Be}}function qt(e={}){const s=R.useRef(void 0),t=R.useRef(void 0),[a,u]=R.useState({isDirty:!1,isValidating:!1,isLoading:Y(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:Y(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...It(e),formState:a});const n=s.current.control;return n._options=e,kt({subject:n._subjects.state,next:y=>{Et(y,n._proxyFormState,n._updateFormState)&&u({...n._formState})}}),R.useEffect(()=>n._disableForm(e.disabled),[n,e.disabled]),R.useEffect(()=>{if(n._proxyFormState.isDirty){const y=n._getDirty();y!==a.isDirty&&n._subjects.state.next({isDirty:y})}},[n,a.isDirty]),R.useEffect(()=>{e.values&&!te(e.values,t.current)?(n._reset(e.values,n._options.resetOptions),t.current=e.values,u(y=>({...y}))):n._resetDefaultValues()},[e.values,n]),R.useEffect(()=>{e.errors&&n._setErrors(e.errors)},[e.errors,n]),R.useEffect(()=>{n._state.mount||(n._updateValid(),n._state.mount=!0),n._state.watch&&(n._state.watch=!1,n._subjects.state.next({...n._formState})),n._removeUnmounted()}),R.useEffect(()=>{e.shouldUnregister&&n._subjects.values.next({values:n._getWatch()})},[e.shouldUnregister,n]),s.current.formState=St(a,n),s.current}const $t=()=>w.jsxs("div",{role:"status",children:[w.jsxs("svg",{"aria-hidden":"true",className:"w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[w.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),w.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),w.jsx("span",{className:"sr-only",children:"Loading..."})]}),Gt=({recaptchaSiteKey:e,validation:s})=>{const[t,a]=le.useState(!0),[u,n]=le.useState(!1),[y,g]=le.useState(!1),{register:j,handleSubmit:B,setError:V,reset:b,formState:{errors:ee,isValid:U,touchedFields:T,dirtyFields:ue}}=qt({mode:"onChange"});le.useEffect(()=>{const p=window.grecaptcha?.getResponse();a(!(U&&p))},[U]),le.useEffect(()=>{const p=document.createElement("script");return p.src="https://www.google.com/recaptcha/api.js",p.async=!0,p.defer=!0,document.body.appendChild(p),()=>{document.body.removeChild(p)}},[]),window.enableSubmit=()=>{const p=window.grecaptcha.getResponse();a(!p||!U)},window.disableSubmit=()=>{a(!0)};const W=p=>{console.log("Error submitting form:",p.error),be.set({show:!0,type:"error",message:s.data.alert.sendError}),p.error&&p.details&&Array.isArray(p.details)&&p.details.length>0&&(window.grecaptcha.reset(),p.details.forEach(S=>{S.path.forEach(F=>{V(F,{type:"server",message:S.message})})}))},K=async({name:p,email:S,message:F})=>{const z=window.grecaptcha.getResponse();if(!z){be.set({show:!0,type:"error",message:s.data.alert.recaptcha.required});return}if(U)try{g(!0);const G=await(await fetch("/api/contact",{method:"POST",body:JSON.stringify({name:p,email:S,message:F,recaptchaResponse:z}),headers:{"Content-Type":"application/json"}})).json();g(!1),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},10),G.success?(n(!0),window.grecaptcha.reset()):W(G)}catch(re){console.log("Error submitting form:",re),g(!1),setTimeout(()=>{window.scrollTo({top:0,behavior:"smooth"})},10),b(),window.grecaptcha.reset(),be.set({show:!0,type:"error",message:s.data.alert.sendError})}};if(u)return be.set({show:!0,type:"success",message:s.data.alert.sendSuccess}),setTimeout(()=>{window.location.assign("/")},1e4),w.jsxs("div",{className:"flex flex-col items-center",children:[w.jsx("h2",{className:"mb-4",children:s.data.thanks.title}),w.jsx("p",{children:s.data.thanks.body})]});const m=p=>{const S={status:"",class:"invisible",msg:""},F=Object.keys(ue).filter(z=>!(z in ee));return T[p]&&ee[p]?(S.status="error",S.class="visible",S.msg=ee[p].message||""):F.includes(p)?S.status="success":(S.status="",S.class="invisible",S.msg=""),S};return w.jsxs(w.Fragment,{children:[w.jsx("h1",{className:"mb-8",children:"Get in Touch"}),w.jsx("div",{className:"w-full md:max-w-md",children:w.jsxs("form",{onSubmit:B(K),children:[w.jsxs("div",{className:"mb-2",children:[w.jsx("label",{htmlFor:"name",className:"label","data-status":m("name").status,children:"Name"}),w.jsx("input",{"data-status":m("name").status,type:"text",id:"name",className:"text-input",required:!0,...j("name",{required:s.data.name.required,minLength:{value:2,message:s.data.name.minLength},maxLength:{value:100,message:s.data.name.maxLength}})}),w.jsx("p",{className:`${m("name").class} mt-2 text-sm text-red-600 dark:text-red-500 min-h-7`,children:m("name").msg})]}),w.jsxs("div",{className:"mb-2",children:[w.jsx("label",{htmlFor:"email",className:"label","data-status":m("email").status,children:"Email"}),w.jsx("input",{"data-status":m("email").status,type:"email",id:"email",className:"text-input",required:!0,...j("email",{required:s.data.email.required,pattern:{value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,message:s.data.email.pattern},maxLength:{value:200,message:s.data.email.maxLength}})}),w.jsx("p",{className:`${m("email").class} mt-2 text-sm text-red-600 dark:text-red-500 min-h-7`,children:m("email").msg})]}),w.jsxs("div",{className:"mb-2",children:[w.jsx("label",{htmlFor:"message",className:"label","data-status":m("message").status,children:"Message"}),w.jsx("textarea",{"data-status":m("message").status,className:"textarea",id:"message",placeholder:"Hi there!",required:!0,rows:4,minLength:1,maxLength:500,...j("message",{required:s.data.message.required,minLength:{value:20,message:s.data.message.minLength},maxLength:{value:500,message:s.data.message.maxLength}})}),w.jsx("p",{className:`${m("message").class} mt-2 text-sm text-red-600 dark:text-red-500 min-h-7`,children:m("message").msg})]}),w.jsx("div",{className:`mb-6 recaptcha-wrapper ${U?"":"recaptcha-disabled"}`,children:w.jsx("div",{className:"g-recaptcha","data-sitekey":e,"data-callback":"enableSubmit","data-expired-callback":"disableSubmit","data-theme":"dark"})}),w.jsxs("button",{className:"button",type:"submit",disabled:t,children:[w.jsxs("span",{className:"mr-3",children:["Send",y&&"ing"]}),y?w.jsx($t,{}):w.jsx(je,{size:16})]})]})})]})};export{Gt as default};
