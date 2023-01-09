import{S as _l,i as yl,s as Dl,N as Co,k as s,l as i,m as a,h as t,n as f,b as n,D as l,O as Io,P as xo,Q as Po,f as nt,t as ft,V as Ki,E as ke,W as zi,w as Wt,x as Xt,y as Jt,Z as qo,_ as bo,z as gt,$ as To,q as u,a as p,T as Lo,r as d,c,U as wo}from"../../../../chunks/index-9671d79c.js";import{P as Ro}from"../../../../chunks/post_layout-5123c4e2.js";function Uo(y){let o,F,E;const v=y[1].default,h=Co(v,y,y[0],null);return{c(){o=s("div"),F=s("table"),h&&h.c(),this.h()},l(m){o=i(m,"DIV",{class:!0});var D=a(o);F=i(D,"TABLE",{class:!0});var B=a(F);h&&h.l(B),B.forEach(t),D.forEach(t),this.h()},h(){f(F,"class","table w-full"),f(o,"class","overflow-x-auto mb-4")},m(m,D){n(m,o,D),l(o,F),h&&h.m(F,null),E=!0},p(m,[D]){h&&h.p&&(!E||D&1)&&Io(h,v,m,m[0],E?Po(v,m[0],D,null):xo(m[0]),null)},i(m){E||(nt(h,m),E=!0)},o(m){ft(h,m),E=!1},d(m){m&&t(o),h&&h.d(m)}}}function So(y,o,F){let{$$slots:E={},$$scope:v}=o;return y.$$set=h=>{"$$scope"in h&&F(0,v=h.$$scope)},[v,E]}class Ho extends _l{constructor(o){super(),yl(this,o,So,Uo,Dl,{})}}function Oo(y){let o,F,E;return{c(){o=s("div"),F=s("iframe"),this.h()},l(v){o=i(v,"DIV",{class:!0});var h=a(o);F=i(h,"IFRAME",{src:!0,class:!0,title:!0,frameborder:!0,allow:!0,loading:!0}),a(F).forEach(t),h.forEach(t),this.h()},h(){Ki(F.src,E=y[0])||f(F,"src",E),f(F,"class","absolute w-full h-full"),f(F,"title","YouTube video player"),f(F,"frameborder","0"),f(F,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),f(F,"loading","lazy"),F.allowFullscreen=!0,f(o,"class","relative pb-[56.25%] mb-4")},m(v,h){n(v,o,h),l(o,F)},p:ke,i:ke,o:ke,d(v){v&&t(o)}}}function No(y,o,F){let{id:E}=o,{list:v=void 0}=o,{playlist:h=void 0}=o,{start:m=void 0}=o,{autoplay:D=!1}=o,{disablekb:B=!1}=o,{controls:w=!0}=o,{fs:b=!0}=o,{loop:T=!1}=o;const H=`https://www.youtube.com/embed/${E}?${new URLSearchParams({...v?{listType:"playlist",list:v}:{},...h?{playlist:h}:{},...m?{start:m}:{},autoplay:D?"1":"0",disablekb:B?"1":"0",controls:w?"1":"0",fs:b?"1":"0",loop:T?"1":"0"}).toString()}`;return y.$$set=_=>{"id"in _&&F(1,E=_.id),"list"in _&&F(2,v=_.list),"playlist"in _&&F(3,h=_.playlist),"start"in _&&F(4,m=_.start),"autoplay"in _&&F(5,D=_.autoplay),"disablekb"in _&&F(6,B=_.disablekb),"controls"in _&&F(7,w=_.controls),"fs"in _&&F(8,b=_.fs),"loop"in _&&F(9,T=_.loop)},[H,E,v,h,m,D,B,w,b,T]}class Yo extends _l{constructor(o){super(),yl(this,o,No,Oo,Dl,{id:1,list:2,playlist:3,start:4,autoplay:5,disablekb:6,controls:7,fs:8,loop:9})}}function Mo(y){let o,F;return{c(){o=s("iframe"),this.h()},l(E){o=i(E,"IFRAME",{title:!0,class:!0,src:!0,width:!0,height:!0,frameborder:!0,allow:!0,loading:!0}),a(o).forEach(t),this.h()},h(){f(o,"title","Spotify music player"),f(o,"class","mb-4 rounded-box"),Ki(o.src,F=y[2])||f(o,"src",F),f(o,"width",y[0]),f(o,"height",y[1]),f(o,"frameborder","0"),o.allowFullscreen="",f(o,"allow","autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"),f(o,"loading","lazy")},m(E,v){n(E,o,v)},p(E,[v]){v&1&&f(o,"width",E[0]),v&2&&f(o,"height",E[1])},i:ke,o:ke,d(E){E&&t(o)}}}function zo(y,o,F){let{type:E="track"}=o,{id:v}=o,{theme:h=!0}=o,{compact:m=!1}=o,{width:D="100%"}=o,{height:B=m?"152":"352"}=o;const w=`https://open.spotify.com/embed/${E}/${v}?${new URLSearchParams({utm_source:"generator",theme:h?"1":"0"}).toString()}`;return y.$$set=b=>{"type"in b&&F(3,E=b.type),"id"in b&&F(4,v=b.id),"theme"in b&&F(5,h=b.theme),"compact"in b&&F(6,m=b.compact),"width"in b&&F(0,D=b.width),"height"in b&&F(1,B=b.height)},[D,B,w,E,v,h,m]}class Ko extends _l{constructor(o){super(),yl(this,o,zo,Mo,Dl,{type:3,id:4,theme:5,compact:6,width:0,height:1})}}function Vo(y){let o,F;return{c(){o=s("iframe"),this.h()},l(E){o=i(E,"IFRAME",{title:!0,class:!0,width:!0,height:!0,scrolling:!0,frameborder:!0,allow:!0,src:!0}),a(o).forEach(t),this.h()},h(){f(o,"title","SoundCloud music player"),f(o,"class","mb-4"),f(o,"width",y[0]),f(o,"height",y[1]),f(o,"scrolling","no"),f(o,"frameborder","no"),f(o,"allow","autoplay"),Ki(o.src,F=y[2])||f(o,"src",F)},m(E,v){n(E,o,v)},p(E,[v]){v&1&&f(o,"width",E[0]),v&2&&f(o,"height",E[1])},i:ke,o:ke,d(E){E&&t(o)}}}function Zo(y,o,F){let{type:E="track"}=o,{id:v}=o,{visual:h=!0}=o,{color:m="#ff5500"}=o,{autoplay:D=!1}=o,{width:B="100%"}=o,{height:w=h?"300":E==="tracks"?"166":"450"}=o;const b=`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/${E}s/${v}?${new URLSearchParams({color:m,visual:h,auto_play:D,hide_related:"false",show_comments:"true",show_user:"true",show_reposts:"false",show_teaser:"true"}).toString()}`;return y.$$set=T=>{"type"in T&&F(3,E=T.type),"id"in T&&F(4,v=T.id),"visual"in T&&F(5,h=T.visual),"color"in T&&F(6,m=T.color),"autoplay"in T&&F(7,D=T.autoplay),"width"in T&&F(0,B=T.width),"height"in T&&F(1,w=T.height)},[B,w,b,E,v,h,m,D]}class jo extends _l{constructor(o){super(),yl(this,o,Zo,Vo,Dl,{type:3,id:4,visual:5,color:6,autoplay:7,width:0,height:1})}}function Qo(y){let o,F,E,v,h,m,D,B,w,b,T,H,_,x,ae,$,I,Q,oe,S,ee,te,A,P,re,le,q,G,ne,O,k,X,C,K,fe,J,V,ue,g,Z,de;return{c(){o=s("thead"),F=s("tr"),E=s("th"),v=u("Table Header 1"),h=p(),m=s("th"),D=u("Table Header 2"),B=p(),w=s("th"),b=u("Table Header 3"),T=p(),H=s("tbody"),_=s("tr"),x=s("td"),ae=u("Division 1"),$=p(),I=s("td"),Q=u("Division 2"),oe=p(),S=s("td"),ee=u("Division 3"),te=p(),A=s("tr"),P=s("td"),re=u("Division 1"),le=p(),q=s("td"),G=u("Division 2"),ne=p(),O=s("td"),k=u("Division 3"),X=p(),C=s("tr"),K=s("td"),fe=u("Division 1"),J=p(),V=s("td"),ue=u("Division 2"),g=p(),Z=s("td"),de=u("Division 3")},l(L){o=i(L,"THEAD",{});var N=a(o);F=i(N,"TR",{});var Y=a(F);E=i(Y,"TH",{});var pe=a(E);v=d(pe,"Table Header 1"),pe.forEach(t),h=c(Y),m=i(Y,"TH",{});var ye=a(m);D=d(ye,"Table Header 2"),ye.forEach(t),B=c(Y),w=i(Y,"TH",{});var De=a(w);b=d(De,"Table Header 3"),De.forEach(t),Y.forEach(t),N.forEach(t),T=c(L),H=i(L,"TBODY",{});var R=a(H);_=i(R,"TR",{});var M=a(_);x=i(M,"TD",{});var be=a(x);ae=d(be,"Division 1"),be.forEach(t),$=c(M),I=i(M,"TD",{});var ce=a(I);Q=d(ce,"Division 2"),ce.forEach(t),oe=c(M),S=i(M,"TD",{});var Te=a(S);ee=d(Te,"Division 3"),Te.forEach(t),M.forEach(t),te=c(R),A=i(R,"TR",{});var z=a(A);P=i(z,"TD",{});var he=a(P);re=d(he,"Division 1"),he.forEach(t),le=c(z),q=i(z,"TD",{});var se=a(q);G=d(se,"Division 2"),se.forEach(t),ne=c(z),O=i(z,"TD",{});var Le=a(O);k=d(Le,"Division 3"),Le.forEach(t),z.forEach(t),X=c(R),C=i(R,"TR",{});var U=a(C);K=i(U,"TD",{});var ie=a(K);fe=d(ie,"Division 1"),ie.forEach(t),J=c(U),V=i(U,"TD",{});var we=a(V);ue=d(we,"Division 2"),we.forEach(t),g=c(U),Z=i(U,"TD",{});var Ee=a(Z);de=d(Ee,"Division 3"),Ee.forEach(t),U.forEach(t),R.forEach(t)},m(L,N){n(L,o,N),l(o,F),l(F,E),l(E,v),l(F,h),l(F,m),l(m,D),l(F,B),l(F,w),l(w,b),n(L,T,N),n(L,H,N),l(H,_),l(_,x),l(x,ae),l(_,$),l(_,I),l(I,Q),l(_,oe),l(_,S),l(S,ee),l(H,te),l(H,A),l(A,P),l(P,re),l(A,le),l(A,q),l(q,G),l(A,ne),l(A,O),l(O,k),l(H,X),l(H,C),l(C,K),l(K,fe),l(C,J),l(C,V),l(V,ue),l(C,g),l(C,Z),l(Z,de)},p:ke,d(L){L&&t(o),L&&t(T),L&&t(H)}}}function Go(y){let o,F,E,v,h,m,D,B,w,b,T,H,_,x,ae,$,I,Q,oe,S,ee,te,A,P,re,le,q,G,ne,O,k,X,C,K,fe,J,V,ue,g,Z,de;return{c(){o=s("thead"),F=s("tr"),E=s("th"),v=u("Table Header 1"),h=p(),m=s("th"),D=u("Table Header 2"),B=p(),w=s("th"),b=u("Table Header 3"),T=p(),H=s("tbody"),_=s("tr"),x=s("td"),ae=u("Division 1"),$=p(),I=s("td"),Q=u("Division 2"),oe=p(),S=s("td"),ee=u("Division 3"),te=p(),A=s("tr"),P=s("td"),re=u("Division 1"),le=p(),q=s("td"),G=u("Division 2"),ne=p(),O=s("td"),k=u("Division 3"),X=p(),C=s("tr"),K=s("td"),fe=u("Division 1"),J=p(),V=s("td"),ue=u("Division 2"),g=p(),Z=s("td"),de=u("Division 3"),this.h()},l(L){o=i(L,"THEAD",{});var N=a(o);F=i(N,"TR",{});var Y=a(F);E=i(Y,"TH",{align:!0});var pe=a(E);v=d(pe,"Table Header 1"),pe.forEach(t),h=c(Y),m=i(Y,"TH",{align:!0});var ye=a(m);D=d(ye,"Table Header 2"),ye.forEach(t),B=c(Y),w=i(Y,"TH",{align:!0});var De=a(w);b=d(De,"Table Header 3"),De.forEach(t),Y.forEach(t),N.forEach(t),T=c(L),H=i(L,"TBODY",{});var R=a(H);_=i(R,"TR",{});var M=a(_);x=i(M,"TD",{align:!0});var be=a(x);ae=d(be,"Division 1"),be.forEach(t),$=c(M),I=i(M,"TD",{align:!0});var ce=a(I);Q=d(ce,"Division 2"),ce.forEach(t),oe=c(M),S=i(M,"TD",{align:!0});var Te=a(S);ee=d(Te,"Division 3"),Te.forEach(t),M.forEach(t),te=c(R),A=i(R,"TR",{});var z=a(A);P=i(z,"TD",{align:!0});var he=a(P);re=d(he,"Division 1"),he.forEach(t),le=c(z),q=i(z,"TD",{align:!0});var se=a(q);G=d(se,"Division 2"),se.forEach(t),ne=c(z),O=i(z,"TD",{align:!0});var Le=a(O);k=d(Le,"Division 3"),Le.forEach(t),z.forEach(t),X=c(R),C=i(R,"TR",{});var U=a(C);K=i(U,"TD",{align:!0});var ie=a(K);fe=d(ie,"Division 1"),ie.forEach(t),J=c(U),V=i(U,"TD",{align:!0});var we=a(V);ue=d(we,"Division 2"),we.forEach(t),g=c(U),Z=i(U,"TD",{align:!0});var Ee=a(Z);de=d(Ee,"Division 3"),Ee.forEach(t),U.forEach(t),R.forEach(t),this.h()},h(){f(E,"align","left"),f(m,"align","center"),f(w,"align","right"),f(x,"align","left"),f(I,"align","center"),f(S,"align","right"),f(P,"align","left"),f(q,"align","center"),f(O,"align","right"),f(K,"align","left"),f(V,"align","center"),f(Z,"align","right")},m(L,N){n(L,o,N),l(o,F),l(F,E),l(E,v),l(F,h),l(F,m),l(m,D),l(F,B),l(F,w),l(w,b),n(L,T,N),n(L,H,N),l(H,_),l(_,x),l(x,ae),l(_,$),l(_,I),l(I,Q),l(_,oe),l(_,S),l(S,ee),l(H,te),l(H,A),l(A,P),l(P,re),l(A,le),l(A,q),l(q,G),l(A,ne),l(A,O),l(O,k),l(H,X),l(H,C),l(C,K),l(K,fe),l(C,J),l(C,V),l(V,ue),l(C,g),l(C,Z),l(Z,de)},p:ke,d(L){L&&t(o),L&&t(T),L&&t(H)}}}function Wo(y){let o,F,E,v,h,m,D,B,w,b,T,H,_,x,ae,$,I,Q,oe,S,ee,te,A,P,re,le,q,G,ne,O,k,X,C,K,fe,J,V,ue,g,Z,de,L,N,Y,pe,ye,De,R,M,be,ce,Te,z,he,se,Le,U,ie,we,Ee,ut,Es,bl,dt,ms,Tl,pt,vs,Ll,ct,$t,_s,wl,Ft,ys,Hl,ht,Ds,Al,Et,bs,kl,mt,vt,Ts,Bl,Cl,Il,Ie,_t,Ls,xl,xe,yt,ws,Pl,Pe,el,Hs,tl,As,ql,qe,Dt,ks,Rl,me,ll,Bs,Cs,sl,Is,xs,il,Ps,Ul,Re,bt,qs,Sl,ve,al,Rs,Us,ol,Ss,Os,rl,Ns,Ol,Ue,Tt,Ys,Nl,Fe,Se,nl,Ms,zs,Oe,Lt,Ks,Vs,Ne,wt,Zs,Yl,Ye,Ht,js,Ml,Be,zl,Ce,Kl,At,kt,Qs,Vl,Me,Bt,Gs,Zl,ze,Ws,Ct,Ke,Xs,jl,Ve,Js,It,Ze,gs,Ql,je,$s,xt,Qe,ei,Gl,Pt,qt,ti,Wl,Ge,Rt,li,Xl,fl,ko=`<pre class="shiki material-default with-title twoslash lsp" style="background-color: #263238; color: #EEFFFF" ts="true" title="examples/index.ts"><div class='code-title'>examples/index.ts</div><div class="language-id">ts</div><div class='code-container'><code><div class='line'><span style="color: #89DDFF">for</span><span style="color: #EEFFFF"> (</span><span style="color: #C792EA">let</span><span style="color: #EEFFFF"> <data-lsp lsp='let x: string' >x</data-lsp> </span><span style="color: #89DDFF">in</span><span style="color: #EEFFFF"> [</span><span style="color: #F78C6C">0</span><span style="color: #EEFFFF">]) <data-lsp lsp='var console: Console' >console</data-lsp></span><span style="color: #89DDFF">.</span><span style="color: #82AAFF"><data-lsp lsp='(method) Console.log(...data: any[]): void' >log</data-lsp></span><span style="color: #EEFFFF">(<data-lsp lsp='let x: string' >x</data-lsp>)</span></div></code></div></pre>`,ul,dl,Bo=`<pre class="shiki material-default twoslash lsp" style="background-color: #263238; color: #EEFFFF" ts="true"><div class="language-id">ts</div><div class='code-container'><code><div class='line highlight'><span style="color: #C792EA">interface</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">IdLabel</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line highlight'><span style="color: #EEFFFF">  </span><span style="color: #F07178">id</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #546E7A">/* some fields */</span></div><div class='line highlight'><span style="color: #89DDFF">&#125;</span></div><div class='line highlight'><span style="color: #C792EA">interface</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameLabel</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line highlight'><span style="color: #EEFFFF">  </span><span style="color: #F07178">name<data-lsp lsp='let a: NameLabel' ></data-lsp></span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">string</span><span style="color: #EEFFFF"> </span><span style="color: #546E7A">/* other fields */</span></div><div class='line highlight'><span style="color: #89DDFF">&#125;</span></div><div class='line dim'><span style="color: #C792EA">type</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameOrId</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">T</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">extends</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">|</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">string</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">T</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">extends</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">?</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">IdLabel</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameLabel</span></div><div class='line dim'><span style="color: #546E7A">// This comment should not be included</span></div><div class='line dim'>&nbsp;</div><div class='line dim'><span style="color: #546E7A">// ---cut---</span></div><div class='line dim'><span style="color: #C792EA">function</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">createLabel</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">T</span><span style="color: #EEFFFF"> </span><span style="color: #C792EA">extends</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">number</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">|</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">string</span><span style="color: #89DDFF">&gt;(</span><span style="color: #EEFFFF">idOrName</span><span style="color: #89DDFF">:</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">T</span><span style="color: #89DDFF">):</span><span style="color: #EEFFFF"> </span><span style="color: #FFCB6B">NameOrId</span><span style="color: #89DDFF">&lt;</span><span style="color: #FFCB6B">T</span><span style="color: #89DDFF">&gt;</span><span style="color: #EEFFFF"> </span><span style="color: #89DDFF">&#123;</span></div><div class='line dim'><span style="color: #F07178">  </span><span style="color: #89DDFF">throw</span><span style="color: #F07178"> </span><span style="color: #89DDFF">&apos;</span><span style="color: #C3E88D">unimplemented</span><span style="color: #89DDFF">&apos;</span></div><div class='line dim'><span style="color: #89DDFF">&#125;</span></div><div class='line dim'>&nbsp;</div><div class='line dim'><span style="color: #C792EA">let</span><span style="color: #EEFFFF"> a </span><span style="color: #89DDFF">=</span><span style="color: #EEFFFF"> </span><span style="color: #82AAFF">createLabel</span><span style="color: #EEFFFF">(</span><span style="color: #89DDFF">&apos;</span><span style="color: #C3E88D">typescript</span><span style="color: #89DDFF">&apos;</span><span style="color: #EEFFFF">)</span></div></code></div></pre>`,pl,We,Ut,si,Jl,St,ii,gl,Ot,ai,$l,Nt,oi,es,Xe,ri,ts,Je,ni,ls,ss,is,as,Yt,fi,os,W,ui,cl,di,pi,Fl,ci,Fi,hl,hi,Ei,El,mi,vi,rs,Mt,_i,ns,zt,Kt,yi,fs,ge,Vt,Di,us,$e,ds,et,ps,tt,cs,He,bi,Ti,Ae,lt,Li,st,wi,Hi,it,Ai,at,ki,Bi,ot,Ci,rt,Ii,Fs;return Be=new Ho({props:{$$slots:{default:[Qo]},$$scope:{ctx:y}}}),Ce=new Ho({props:{$$slots:{default:[Go]},$$scope:{ctx:y}}}),$e=new Yo({props:{id:"WysuxO4yR04"}}),et=new Ko({props:{id:"6pCXYUR3mBfXY8s0FYcZqQ"}}),tt=new jo({props:{type:"playlist",id:"1259265289"}}),{c(){o=s("h2"),F=s("a"),E=u("Headings"),v=p(),h=s("h3"),m=s("a"),D=u("Heading"),B=p(),w=s("h4"),b=s("a"),T=u("Heading"),H=p(),_=s("h5"),x=s("a"),ae=u("Heading"),$=p(),I=s("h6"),Q=s("a"),oe=u("Heading"),S=p(),ee=s("hr"),te=p(),A=s("h2"),P=s("a"),re=u("Paragraphs"),le=p(),q=s("p"),G=s("span"),ne=u("spoiler"),O=p(),k=s("p"),X=s("strong"),C=s("em"),K=u("The"),fe=p(),J=s("em"),V=u("quick"),ue=p(),g=s("u"),Z=u("brown"),de=p(),L=s("a"),N=u("fox"),Y=p(),pe=s("code"),ye=u("jumps"),De=p(),R=s("del"),M=u("over"),be=u(" the lazy "),ce=s("strong"),Te=u("dog"),z=u("."),he=p(),se=s("p"),Le=u("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),U=p(),ie=s("p"),we=u("建格的何另始養離腳合兒現各談花車是都無處與費別、信善行修覺自！壓總談下市率應次司公母兒用什一線送用標地倒直作任老數年白安足個後引使名隊懷持日落異今特族？"),Ee=p(),ut=s("p"),Es=u("一士我像衣買了人義，計念？"),bl=p(),dt=s("p"),ms=u("期老外並中般灣作各現初知強車我的品式企國立市它北待不型師文人注信方，各成能久，然的孩界，他事應在創灣字母寫麼，會不作散際，學節水……全當名己會天還著行多是生如內他道了家至種樣見景時一……區行水影。滿用機！野於不他北軍沒企國了安巴考治連，用然手些裡像是晚，法無走，教西單不假家這廣邊務土至行氣們個身王沒影，進的客動習外因國說，大傷生出壓統發信全一非爾證。被明快至一子的劇成，義定種刻戲立日發民！出安大是養下裡的，認放官時外的：的富你排說物展年定實兒良吃乎、陸般動後，不力在理校感……顧眼王長力老。"),Tl=p(),pt=s("p"),vs=u("重多一？生光聯……動說麼了：起形市般我題臉事級。"),Ll=p(),ct=s("blockquote"),$t=s("p"),_s=u("In solitude, where we are least alone."),wl=p(),Ft=s("p"),ys=u("私は絶対いよいよ漠然たる相当心に対してはずの他にできるならな。けっして今に養成めも何だか漠然たる仕事たないだけにしからならでをは話安んずるないですて、わざわざには聴いましたなけれた。権力を気がつきなのはどうしても先刻が毫もらしくでう。"),Hl=p(),ht=s("p"),Ds=u("ようやく嘉納さんに供獄とても承諾をやるでしょ習慣その主義それか攻撃にに対してお関係でたあるですと、その今は俺か釣竿頭に喜ぶば、嘉納さんののより考のそれをよくごふりと云ってあなた一団がお融和へ見えようにまあご経験にしずませば、とうとうもっとも誤解になるたでいるないのを思っですた。しかもしかしながら大首へする気もずいぶん美味と移ろたて、この言葉にもいうですてってがたにしてしまえたない。この限り時代のためその学校も私上を吹き込んんかと大森さんをしなませ、人の今日んというご講義ただですば、晩の時で長靴が始めだけの時代に前もっでいて、どうの今日が思えばそのためとあたかも足りんなとしだ事でが、ないますなて少し実職業いでし事だろたませ。"),Al=p(),Et=s("p"),bs=u("さて学校か不幸か話に教えですけれども、今中力が起るて得るですためがご講演の今に訊かたです。多年をはどうしても思うでいうんたずでと、まるで何とも繰り返しが周旋はさっそく悪いうので。"),kl=p(),mt=s("p"),vt=s("a"),Ts=u("scrollToTop"),Bl=p(),Cl=s("hr"),Il=p(),Ie=s("h2"),_t=s("a"),Ls=u("Lists"),xl=p(),xe=s("h3"),yt=s("a"),ws=u("Definition List (dl)"),Pl=p(),Pe=s("dl"),el=s("dt"),Hs=u("Definition List Title"),tl=s("dd"),As=u("This is a definition list division."),ql=p(),qe=s("h3"),Dt=s("a"),ks=u("Ordered List (ol)"),Rl=p(),me=s("ol"),ll=s("li"),Bs=u("List Item 1"),Cs=p(),sl=s("li"),Is=u("List Item 2"),xs=p(),il=s("li"),Ps=u("List Item 3"),Ul=p(),Re=s("h3"),bt=s("a"),qs=u("Unordered List (ul)"),Sl=p(),ve=s("ul"),al=s("li"),Rs=u("List Item 1"),Us=p(),ol=s("li"),Ss=u("List Item 2"),Os=p(),rl=s("li"),Ns=u("List Item 3"),Ol=p(),Ue=s("h3"),Tt=s("a"),Ys=u("Checkbox List (ul)"),Nl=p(),Fe=s("ul"),Se=s("li"),nl=s("input"),Ms=u(" List Item 1 unchecked"),zs=p(),Oe=s("li"),Lt=s("input"),Ks=u(" List Item 2 checked"),Vs=p(),Ne=s("li"),wt=s("input"),Zs=u(" List Item 3 checked"),Yl=p(),Ye=s("h2"),Ht=s("a"),js=u("Table"),Ml=p(),Wt(Be.$$.fragment),zl=p(),Wt(Ce.$$.fragment),Kl=p(),At=s("p"),kt=s("a"),Qs=u("scrollToTop"),Vl=p(),Me=s("h2"),Bt=s("a"),Gs=u("Footnotes"),Zl=p(),ze=s("p"),Ws=u("Here is a footnote reference. "),Ct=s("sup"),Ke=s("a"),Xs=u("1"),jl=p(),Ve=s("p"),Js=u("This is a long note. "),It=s("sup"),Ze=s("a"),gs=u("longnote"),Ql=p(),je=s("p"),$s=u("This is an inline note. "),xt=s("sup"),Qe=s("a"),ei=u("2"),Gl=p(),Pt=s("p"),qt=s("a"),ti=u("scrollToTop"),Wl=p(),Ge=s("h2"),Rt=s("a"),li=u("Code"),Xl=p(),fl=new Lo(!1),ul=p(),dl=new Lo(!1),pl=p(),We=s("h2"),Ut=s("a"),si=u("Misc"),Jl=p(),St=s("sup"),ii=u("Lorem"),gl=p(),Ot=s("sub"),ai=u("ipsum"),$l=p(),Nt=s("cite"),oi=u("dolor sit amet"),es=u(", "),Xe=s("acronym"),ri=u("consectetur adipiscing elit"),ts=u(", "),Je=s("abbr"),ni=u("sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),ls=u(". Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),ss=s("br"),is=s("br"),as=p(),Yt=s("p"),fi=u("リバースカードオープン、エネミーコントローラー！"),os=p(),W=s("p"),ui=u("ライフを 1000 払い、コマンド入力、"),cl=s("kbd"),di=u("←"),pi=p(),Fl=s("kbd"),ci=u("→"),Fi=p(),hl=s("kbd"),hi=u("A"),Ei=p(),El=s("kbd"),mi=u("B"),vi=u("！"),rs=p(),Mt=s("p"),_i=u("このコマンドにより、全てのアニヲタを破壊する！"),ns=p(),zt=s("p"),Kt=s("a"),yi=u("scrollToTop"),fs=p(),ge=s("h2"),Vt=s("a"),Di=u("Svelte Components"),us=p(),Wt($e.$$.fragment),ds=p(),Wt(et.$$.fragment),ps=p(),Wt(tt.$$.fragment),cs=p(),He=s("div"),bi=s("hr"),Ti=p(),Ae=s("ol"),lt=s("li"),Li=u("Here is the footnote."),st=s("a"),wi=u("↩"),Hi=p(),it=s("li"),Ai=u("Here’s one footnote with longer identifier."),at=s("a"),ki=u("↩"),Bi=p(),ot=s("li"),Ci=u("You can type footnotes inline, so you don’t have to pick an identifier manually."),rt=s("a"),Ii=u("↩"),this.h()},l(e){o=i(e,"H2",{id:!0});var r=a(o);F=i(r,"A",{href:!0});var ml=a(F);E=d(ml,"Headings"),ml.forEach(t),r.forEach(t),v=c(e),h=i(e,"H3",{id:!0});var vl=a(h);m=i(vl,"A",{href:!0});var Vi=a(m);D=d(Vi,"Heading"),Vi.forEach(t),vl.forEach(t),B=c(e),w=i(e,"H4",{id:!0});var Zi=a(w);b=i(Zi,"A",{href:!0});var ji=a(b);T=d(ji,"Heading"),ji.forEach(t),Zi.forEach(t),H=c(e),_=i(e,"H5",{id:!0});var Qi=a(_);x=i(Qi,"A",{href:!0});var Gi=a(x);ae=d(Gi,"Heading"),Gi.forEach(t),Qi.forEach(t),$=c(e),I=i(e,"H6",{id:!0});var Wi=a(I);Q=i(Wi,"A",{href:!0});var Xi=a(Q);oe=d(Xi,"Heading"),Xi.forEach(t),Wi.forEach(t),S=c(e),ee=i(e,"HR",{}),te=c(e),A=i(e,"H2",{id:!0});var Ji=a(A);P=i(Ji,"A",{href:!0});var gi=a(P);re=d(gi,"Paragraphs"),gi.forEach(t),Ji.forEach(t),le=c(e),q=i(e,"P",{});var $i=a(q);G=i($i,"SPAN",{class:!0});var ea=a(G);ne=d(ea,"spoiler"),ea.forEach(t),$i.forEach(t),O=c(e),k=i(e,"P",{});var j=a(k);X=i(j,"STRONG",{});var ta=a(X);C=i(ta,"EM",{});var la=a(C);K=d(la,"The"),la.forEach(t),ta.forEach(t),fe=c(j),J=i(j,"EM",{});var sa=a(J);V=d(sa,"quick"),sa.forEach(t),ue=c(j),g=i(j,"U",{});var ia=a(g);Z=d(ia,"brown"),ia.forEach(t),de=c(j),L=i(j,"A",{href:!0,rel:!0,target:!0});var aa=a(L);N=d(aa,"fox"),aa.forEach(t),Y=c(j),pe=i(j,"CODE",{});var oa=a(pe);ye=d(oa,"jumps"),oa.forEach(t),De=c(j),R=i(j,"DEL",{});var ra=a(R);M=d(ra,"over"),ra.forEach(t),be=d(j," the lazy "),ce=i(j,"STRONG",{});var na=a(ce);Te=d(na,"dog"),na.forEach(t),z=d(j,"."),j.forEach(t),he=c(e),se=i(e,"P",{});var fa=a(se);Le=d(fa,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),fa.forEach(t),U=c(e),ie=i(e,"P",{});var ua=a(ie);we=d(ua,"建格的何另始養離腳合兒現各談花車是都無處與費別、信善行修覺自！壓總談下市率應次司公母兒用什一線送用標地倒直作任老數年白安足個後引使名隊懷持日落異今特族？"),ua.forEach(t),Ee=c(e),ut=i(e,"P",{});var da=a(ut);Es=d(da,"一士我像衣買了人義，計念？"),da.forEach(t),bl=c(e),dt=i(e,"P",{});var pa=a(dt);ms=d(pa,"期老外並中般灣作各現初知強車我的品式企國立市它北待不型師文人注信方，各成能久，然的孩界，他事應在創灣字母寫麼，會不作散際，學節水……全當名己會天還著行多是生如內他道了家至種樣見景時一……區行水影。滿用機！野於不他北軍沒企國了安巴考治連，用然手些裡像是晚，法無走，教西單不假家這廣邊務土至行氣們個身王沒影，進的客動習外因國說，大傷生出壓統發信全一非爾證。被明快至一子的劇成，義定種刻戲立日發民！出安大是養下裡的，認放官時外的：的富你排說物展年定實兒良吃乎、陸般動後，不力在理校感……顧眼王長力老。"),pa.forEach(t),Tl=c(e),pt=i(e,"P",{});var ca=a(pt);vs=d(ca,"重多一？生光聯……動說麼了：起形市般我題臉事級。"),ca.forEach(t),Ll=c(e),ct=i(e,"BLOCKQUOTE",{});var Fa=a(ct);$t=i(Fa,"P",{});var ha=a($t);_s=d(ha,"In solitude, where we are least alone."),ha.forEach(t),Fa.forEach(t),wl=c(e),Ft=i(e,"P",{});var Ea=a(Ft);ys=d(Ea,"私は絶対いよいよ漠然たる相当心に対してはずの他にできるならな。けっして今に養成めも何だか漠然たる仕事たないだけにしからならでをは話安んずるないですて、わざわざには聴いましたなけれた。権力を気がつきなのはどうしても先刻が毫もらしくでう。"),Ea.forEach(t),Hl=c(e),ht=i(e,"P",{});var ma=a(ht);Ds=d(ma,"ようやく嘉納さんに供獄とても承諾をやるでしょ習慣その主義それか攻撃にに対してお関係でたあるですと、その今は俺か釣竿頭に喜ぶば、嘉納さんののより考のそれをよくごふりと云ってあなた一団がお融和へ見えようにまあご経験にしずませば、とうとうもっとも誤解になるたでいるないのを思っですた。しかもしかしながら大首へする気もずいぶん美味と移ろたて、この言葉にもいうですてってがたにしてしまえたない。この限り時代のためその学校も私上を吹き込んんかと大森さんをしなませ、人の今日んというご講義ただですば、晩の時で長靴が始めだけの時代に前もっでいて、どうの今日が思えばそのためとあたかも足りんなとしだ事でが、ないますなて少し実職業いでし事だろたませ。"),ma.forEach(t),Al=c(e),Et=i(e,"P",{});var va=a(Et);bs=d(va,"さて学校か不幸か話に教えですけれども、今中力が起るて得るですためがご講演の今に訊かたです。多年をはどうしても思うでいうんたずでと、まるで何とも繰り返しが周旋はさっそく悪いうので。"),va.forEach(t),kl=c(e),mt=i(e,"P",{});var _a=a(mt);vt=i(_a,"A",{href:!0});var ya=a(vt);Ts=d(ya,"scrollToTop"),ya.forEach(t),_a.forEach(t),Bl=c(e),Cl=i(e,"HR",{}),Il=c(e),Ie=i(e,"H2",{id:!0});var Da=a(Ie);_t=i(Da,"A",{href:!0});var ba=a(_t);Ls=d(ba,"Lists"),ba.forEach(t),Da.forEach(t),xl=c(e),xe=i(e,"H3",{id:!0});var Ta=a(xe);yt=i(Ta,"A",{href:!0});var La=a(yt);ws=d(La,"Definition List (dl)"),La.forEach(t),Ta.forEach(t),Pl=c(e),Pe=i(e,"DL",{});var xi=a(Pe);el=i(xi,"DT",{});var wa=a(el);Hs=d(wa,"Definition List Title"),wa.forEach(t),tl=i(xi,"DD",{});var Ha=a(tl);As=d(Ha,"This is a definition list division."),Ha.forEach(t),xi.forEach(t),ql=c(e),qe=i(e,"H3",{id:!0});var Aa=a(qe);Dt=i(Aa,"A",{href:!0});var ka=a(Dt);ks=d(ka,"Ordered List (ol)"),ka.forEach(t),Aa.forEach(t),Rl=c(e),me=i(e,"OL",{});var Zt=a(me);ll=i(Zt,"LI",{});var Ba=a(ll);Bs=d(Ba,"List Item 1"),Ba.forEach(t),Cs=c(Zt),sl=i(Zt,"LI",{});var Ca=a(sl);Is=d(Ca,"List Item 2"),Ca.forEach(t),xs=c(Zt),il=i(Zt,"LI",{});var Ia=a(il);Ps=d(Ia,"List Item 3"),Ia.forEach(t),Zt.forEach(t),Ul=c(e),Re=i(e,"H3",{id:!0});var xa=a(Re);bt=i(xa,"A",{href:!0});var Pa=a(bt);qs=d(Pa,"Unordered List (ul)"),Pa.forEach(t),xa.forEach(t),Sl=c(e),ve=i(e,"UL",{});var jt=a(ve);al=i(jt,"LI",{});var qa=a(al);Rs=d(qa,"List Item 1"),qa.forEach(t),Us=c(jt),ol=i(jt,"LI",{});var Ra=a(ol);Ss=d(Ra,"List Item 2"),Ra.forEach(t),Os=c(jt),rl=i(jt,"LI",{});var Ua=a(rl);Ns=d(Ua,"List Item 3"),Ua.forEach(t),jt.forEach(t),Ol=c(e),Ue=i(e,"H3",{id:!0});var Sa=a(Ue);Tt=i(Sa,"A",{href:!0});var Oa=a(Tt);Ys=d(Oa,"Checkbox List (ul)"),Oa.forEach(t),Sa.forEach(t),Nl=c(e),Fe=i(e,"UL",{class:!0});var Qt=a(Fe);Se=i(Qt,"LI",{class:!0});var Pi=a(Se);nl=i(Pi,"INPUT",{type:!0}),Ms=d(Pi," List Item 1 unchecked"),Pi.forEach(t),zs=c(Qt),Oe=i(Qt,"LI",{class:!0});var qi=a(Oe);Lt=i(qi,"INPUT",{type:!0}),Ks=d(qi," List Item 2 checked"),qi.forEach(t),Vs=c(Qt),Ne=i(Qt,"LI",{class:!0});var Ri=a(Ne);wt=i(Ri,"INPUT",{type:!0}),Zs=d(Ri," List Item 3 checked"),Ri.forEach(t),Qt.forEach(t),Yl=c(e),Ye=i(e,"H2",{id:!0});var Na=a(Ye);Ht=i(Na,"A",{href:!0});var Ya=a(Ht);js=d(Ya,"Table"),Ya.forEach(t),Na.forEach(t),Ml=c(e),Xt(Be.$$.fragment,e),zl=c(e),Xt(Ce.$$.fragment,e),Kl=c(e),At=i(e,"P",{});var Ma=a(At);kt=i(Ma,"A",{href:!0});var za=a(kt);Qs=d(za,"scrollToTop"),za.forEach(t),Ma.forEach(t),Vl=c(e),Me=i(e,"H2",{id:!0});var Ka=a(Me);Bt=i(Ka,"A",{href:!0});var Va=a(Bt);Gs=d(Va,"Footnotes"),Va.forEach(t),Ka.forEach(t),Zl=c(e),ze=i(e,"P",{});var Ui=a(ze);Ws=d(Ui,"Here is a footnote reference. "),Ct=i(Ui,"SUP",{id:!0});var Za=a(Ct);Ke=i(Za,"A",{href:!0,class:!0});var ja=a(Ke);Xs=d(ja,"1"),ja.forEach(t),Za.forEach(t),Ui.forEach(t),jl=c(e),Ve=i(e,"P",{});var Si=a(Ve);Js=d(Si,"This is a long note. "),It=i(Si,"SUP",{id:!0});var Qa=a(It);Ze=i(Qa,"A",{href:!0,class:!0});var Ga=a(Ze);gs=d(Ga,"longnote"),Ga.forEach(t),Qa.forEach(t),Si.forEach(t),Ql=c(e),je=i(e,"P",{});var Oi=a(je);$s=d(Oi,"This is an inline note. "),xt=i(Oi,"SUP",{id:!0});var Wa=a(xt);Qe=i(Wa,"A",{href:!0,class:!0});var Xa=a(Qe);ei=d(Xa,"2"),Xa.forEach(t),Wa.forEach(t),Oi.forEach(t),Gl=c(e),Pt=i(e,"P",{});var Ja=a(Pt);qt=i(Ja,"A",{href:!0});var ga=a(qt);ti=d(ga,"scrollToTop"),ga.forEach(t),Ja.forEach(t),Wl=c(e),Ge=i(e,"H2",{id:!0});var $a=a(Ge);Rt=i($a,"A",{href:!0});var eo=a(Rt);li=d(eo,"Code"),eo.forEach(t),$a.forEach(t),Xl=c(e),fl=wo(e,!1),ul=c(e),dl=wo(e,!1),pl=c(e),We=i(e,"H2",{id:!0});var to=a(We);Ut=i(to,"A",{href:!0});var lo=a(Ut);si=d(lo,"Misc"),lo.forEach(t),to.forEach(t),Jl=c(e),St=i(e,"SUP",{});var so=a(St);ii=d(so,"Lorem"),so.forEach(t),gl=c(e),Ot=i(e,"SUB",{});var io=a(Ot);ai=d(io,"ipsum"),io.forEach(t),$l=c(e),Nt=i(e,"CITE",{});var ao=a(Nt);oi=d(ao,"dolor sit amet"),ao.forEach(t),es=d(e,", "),Xe=i(e,"ACRONYM",{title:!0});var oo=a(Xe);ri=d(oo,"consectetur adipiscing elit"),oo.forEach(t),ts=d(e,", "),Je=i(e,"ABBR",{title:!0});var ro=a(Je);ni=d(ro,"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"),ro.forEach(t),ls=d(e,". Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),ss=i(e,"BR",{}),is=i(e,"BR",{}),as=c(e),Yt=i(e,"P",{});var no=a(Yt);fi=d(no,"リバースカードオープン、エネミーコントローラー！"),no.forEach(t),os=c(e),W=i(e,"P",{});var _e=a(W);ui=d(_e,"ライフを 1000 払い、コマンド入力、"),cl=i(_e,"KBD",{});var fo=a(cl);di=d(fo,"←"),fo.forEach(t),pi=c(_e),Fl=i(_e,"KBD",{});var uo=a(Fl);ci=d(uo,"→"),uo.forEach(t),Fi=c(_e),hl=i(_e,"KBD",{});var po=a(hl);hi=d(po,"A"),po.forEach(t),Ei=c(_e),El=i(_e,"KBD",{});var co=a(El);mi=d(co,"B"),co.forEach(t),vi=d(_e,"！"),_e.forEach(t),rs=c(e),Mt=i(e,"P",{});var Fo=a(Mt);_i=d(Fo,"このコマンドにより、全てのアニヲタを破壊する！"),Fo.forEach(t),ns=c(e),zt=i(e,"P",{});var ho=a(zt);Kt=i(ho,"A",{href:!0});var Eo=a(Kt);yi=d(Eo,"scrollToTop"),Eo.forEach(t),ho.forEach(t),fs=c(e),ge=i(e,"H2",{id:!0});var mo=a(ge);Vt=i(mo,"A",{href:!0});var vo=a(Vt);Di=d(vo,"Svelte Components"),vo.forEach(t),mo.forEach(t),us=c(e),Xt($e.$$.fragment,e),ds=c(e),Xt(et.$$.fragment,e),ps=c(e),Xt(tt.$$.fragment,e),cs=c(e),He=i(e,"DIV",{class:!0});var hs=a(He);bi=i(hs,"HR",{}),Ti=c(hs),Ae=i(hs,"OL",{});var Gt=a(Ae);lt=i(Gt,"LI",{id:!0});var Ni=a(lt);Li=d(Ni,"Here is the footnote."),st=i(Ni,"A",{href:!0,class:!0});var _o=a(st);wi=d(_o,"↩"),_o.forEach(t),Ni.forEach(t),Hi=c(Gt),it=i(Gt,"LI",{id:!0});var Yi=a(it);Ai=d(Yi,"Here’s one footnote with longer identifier."),at=i(Yi,"A",{href:!0,class:!0});var yo=a(at);ki=d(yo,"↩"),yo.forEach(t),Yi.forEach(t),Bi=c(Gt),ot=i(Gt,"LI",{id:!0});var Mi=a(ot);Ci=d(Mi,"You can type footnotes inline, so you don’t have to pick an identifier manually."),rt=i(Mi,"A",{href:!0,class:!0});var Do=a(rt);Ii=d(Do,"↩"),Do.forEach(t),Mi.forEach(t),Gt.forEach(t),hs.forEach(t),this.h()},h(){f(F,"href","#headings"),f(o,"id","headings"),f(m,"href","#heading"),f(h,"id","heading"),f(b,"href","#heading-1"),f(w,"id","heading-1"),f(x,"href","#heading-2"),f(_,"id","heading-2"),f(Q,"href","#heading-3"),f(I,"id","heading-3"),f(P,"href","#paragraphs"),f(A,"id","paragraphs"),f(G,"class","spoiler"),f(L,"href","https://www.foxnews.com/"),f(L,"rel","nofollow noopener noreferrer external"),f(L,"target","_blank"),f(vt,"href","#headings"),f(_t,"href","#lists"),f(Ie,"id","lists"),f(yt,"href","#definition-list-dl"),f(xe,"id","definition-list-dl"),f(Dt,"href","#ordered-list-ol"),f(qe,"id","ordered-list-ol"),f(bt,"href","#unordered-list-ul"),f(Re,"id","unordered-list-ul"),f(Tt,"href","#checkbox-list-ul"),f(Ue,"id","checkbox-list-ul"),f(nl,"type","checkbox"),nl.disabled=!0,f(Se,"class","task-list-item"),f(Lt,"type","checkbox"),Lt.checked=!0,Lt.disabled=!0,f(Oe,"class","task-list-item"),f(wt,"type","checkbox"),wt.checked=!0,wt.disabled=!0,f(Ne,"class","task-list-item"),f(Fe,"class","contains-task-list"),f(Ht,"href","#table"),f(Ye,"id","table"),f(kt,"href","#headings"),f(Bt,"href","#footnotes"),f(Me,"id","footnotes"),f(Ke,"href","#fn-1"),f(Ke,"class","footnote-ref"),f(Ct,"id","fnref-1"),f(Ze,"href","#fn-longnote"),f(Ze,"class","footnote-ref"),f(It,"id","fnref-longnote"),f(Qe,"href","#fn-2"),f(Qe,"class","footnote-ref"),f(xt,"id","fnref-2"),f(qt,"href","#headings"),f(Rt,"href","#code"),f(Ge,"id","code"),fl.a=ul,dl.a=pl,f(Ut,"href","#misc"),f(We,"id","misc"),f(Xe,"title","Consectetur Adipiscing Elit"),f(Je,"title","Aliqua"),f(Kt,"href","#headings"),f(Vt,"href","#svelte-components"),f(ge,"id","svelte-components"),f(st,"href","#fnref-1"),f(st,"class","footnote-backref"),f(lt,"id","fn-1"),f(at,"href","#fnref-longnote"),f(at,"class","footnote-backref"),f(it,"id","fn-longnote"),f(rt,"href","#fnref-2"),f(rt,"class","footnote-backref"),f(ot,"id","fn-2"),f(He,"class","footnotes")},m(e,r){n(e,o,r),l(o,F),l(F,E),n(e,v,r),n(e,h,r),l(h,m),l(m,D),n(e,B,r),n(e,w,r),l(w,b),l(b,T),n(e,H,r),n(e,_,r),l(_,x),l(x,ae),n(e,$,r),n(e,I,r),l(I,Q),l(Q,oe),n(e,S,r),n(e,ee,r),n(e,te,r),n(e,A,r),l(A,P),l(P,re),n(e,le,r),n(e,q,r),l(q,G),l(G,ne),n(e,O,r),n(e,k,r),l(k,X),l(X,C),l(C,K),l(k,fe),l(k,J),l(J,V),l(k,ue),l(k,g),l(g,Z),l(k,de),l(k,L),l(L,N),l(k,Y),l(k,pe),l(pe,ye),l(k,De),l(k,R),l(R,M),l(k,be),l(k,ce),l(ce,Te),l(k,z),n(e,he,r),n(e,se,r),l(se,Le),n(e,U,r),n(e,ie,r),l(ie,we),n(e,Ee,r),n(e,ut,r),l(ut,Es),n(e,bl,r),n(e,dt,r),l(dt,ms),n(e,Tl,r),n(e,pt,r),l(pt,vs),n(e,Ll,r),n(e,ct,r),l(ct,$t),l($t,_s),n(e,wl,r),n(e,Ft,r),l(Ft,ys),n(e,Hl,r),n(e,ht,r),l(ht,Ds),n(e,Al,r),n(e,Et,r),l(Et,bs),n(e,kl,r),n(e,mt,r),l(mt,vt),l(vt,Ts),n(e,Bl,r),n(e,Cl,r),n(e,Il,r),n(e,Ie,r),l(Ie,_t),l(_t,Ls),n(e,xl,r),n(e,xe,r),l(xe,yt),l(yt,ws),n(e,Pl,r),n(e,Pe,r),l(Pe,el),l(el,Hs),l(Pe,tl),l(tl,As),n(e,ql,r),n(e,qe,r),l(qe,Dt),l(Dt,ks),n(e,Rl,r),n(e,me,r),l(me,ll),l(ll,Bs),l(me,Cs),l(me,sl),l(sl,Is),l(me,xs),l(me,il),l(il,Ps),n(e,Ul,r),n(e,Re,r),l(Re,bt),l(bt,qs),n(e,Sl,r),n(e,ve,r),l(ve,al),l(al,Rs),l(ve,Us),l(ve,ol),l(ol,Ss),l(ve,Os),l(ve,rl),l(rl,Ns),n(e,Ol,r),n(e,Ue,r),l(Ue,Tt),l(Tt,Ys),n(e,Nl,r),n(e,Fe,r),l(Fe,Se),l(Se,nl),l(Se,Ms),l(Fe,zs),l(Fe,Oe),l(Oe,Lt),l(Oe,Ks),l(Fe,Vs),l(Fe,Ne),l(Ne,wt),l(Ne,Zs),n(e,Yl,r),n(e,Ye,r),l(Ye,Ht),l(Ht,js),n(e,Ml,r),Jt(Be,e,r),n(e,zl,r),Jt(Ce,e,r),n(e,Kl,r),n(e,At,r),l(At,kt),l(kt,Qs),n(e,Vl,r),n(e,Me,r),l(Me,Bt),l(Bt,Gs),n(e,Zl,r),n(e,ze,r),l(ze,Ws),l(ze,Ct),l(Ct,Ke),l(Ke,Xs),n(e,jl,r),n(e,Ve,r),l(Ve,Js),l(Ve,It),l(It,Ze),l(Ze,gs),n(e,Ql,r),n(e,je,r),l(je,$s),l(je,xt),l(xt,Qe),l(Qe,ei),n(e,Gl,r),n(e,Pt,r),l(Pt,qt),l(qt,ti),n(e,Wl,r),n(e,Ge,r),l(Ge,Rt),l(Rt,li),n(e,Xl,r),fl.m(ko,e,r),n(e,ul,r),dl.m(Bo,e,r),n(e,pl,r),n(e,We,r),l(We,Ut),l(Ut,si),n(e,Jl,r),n(e,St,r),l(St,ii),n(e,gl,r),n(e,Ot,r),l(Ot,ai),n(e,$l,r),n(e,Nt,r),l(Nt,oi),n(e,es,r),n(e,Xe,r),l(Xe,ri),n(e,ts,r),n(e,Je,r),l(Je,ni),n(e,ls,r),n(e,ss,r),n(e,is,r),n(e,as,r),n(e,Yt,r),l(Yt,fi),n(e,os,r),n(e,W,r),l(W,ui),l(W,cl),l(cl,di),l(W,pi),l(W,Fl),l(Fl,ci),l(W,Fi),l(W,hl),l(hl,hi),l(W,Ei),l(W,El),l(El,mi),l(W,vi),n(e,rs,r),n(e,Mt,r),l(Mt,_i),n(e,ns,r),n(e,zt,r),l(zt,Kt),l(Kt,yi),n(e,fs,r),n(e,ge,r),l(ge,Vt),l(Vt,Di),n(e,us,r),Jt($e,e,r),n(e,ds,r),Jt(et,e,r),n(e,ps,r),Jt(tt,e,r),n(e,cs,r),n(e,He,r),l(He,bi),l(He,Ti),l(He,Ae),l(Ae,lt),l(lt,Li),l(lt,st),l(st,wi),l(Ae,Hi),l(Ae,it),l(it,Ai),l(it,at),l(at,ki),l(Ae,Bi),l(Ae,ot),l(ot,Ci),l(ot,rt),l(rt,Ii),Fs=!0},p(e,r){const ml={};r&2&&(ml.$$scope={dirty:r,ctx:e}),Be.$set(ml);const vl={};r&2&&(vl.$$scope={dirty:r,ctx:e}),Ce.$set(vl)},i(e){Fs||(nt(Be.$$.fragment,e),nt(Ce.$$.fragment,e),nt($e.$$.fragment,e),nt(et.$$.fragment,e),nt(tt.$$.fragment,e),Fs=!0)},o(e){ft(Be.$$.fragment,e),ft(Ce.$$.fragment,e),ft($e.$$.fragment,e),ft(et.$$.fragment,e),ft(tt.$$.fragment,e),Fs=!1},d(e){e&&t(o),e&&t(v),e&&t(h),e&&t(B),e&&t(w),e&&t(H),e&&t(_),e&&t($),e&&t(I),e&&t(S),e&&t(ee),e&&t(te),e&&t(A),e&&t(le),e&&t(q),e&&t(O),e&&t(k),e&&t(he),e&&t(se),e&&t(U),e&&t(ie),e&&t(Ee),e&&t(ut),e&&t(bl),e&&t(dt),e&&t(Tl),e&&t(pt),e&&t(Ll),e&&t(ct),e&&t(wl),e&&t(Ft),e&&t(Hl),e&&t(ht),e&&t(Al),e&&t(Et),e&&t(kl),e&&t(mt),e&&t(Bl),e&&t(Cl),e&&t(Il),e&&t(Ie),e&&t(xl),e&&t(xe),e&&t(Pl),e&&t(Pe),e&&t(ql),e&&t(qe),e&&t(Rl),e&&t(me),e&&t(Ul),e&&t(Re),e&&t(Sl),e&&t(ve),e&&t(Ol),e&&t(Ue),e&&t(Nl),e&&t(Fe),e&&t(Yl),e&&t(Ye),e&&t(Ml),gt(Be,e),e&&t(zl),gt(Ce,e),e&&t(Kl),e&&t(At),e&&t(Vl),e&&t(Me),e&&t(Zl),e&&t(ze),e&&t(jl),e&&t(Ve),e&&t(Ql),e&&t(je),e&&t(Gl),e&&t(Pt),e&&t(Wl),e&&t(Ge),e&&t(Xl),e&&fl.d(),e&&t(ul),e&&dl.d(),e&&t(pl),e&&t(We),e&&t(Jl),e&&t(St),e&&t(gl),e&&t(Ot),e&&t($l),e&&t(Nt),e&&t(es),e&&t(Xe),e&&t(ts),e&&t(Je),e&&t(ls),e&&t(ss),e&&t(is),e&&t(as),e&&t(Yt),e&&t(os),e&&t(W),e&&t(rs),e&&t(Mt),e&&t(ns),e&&t(zt),e&&t(fs),e&&t(ge),e&&t(us),gt($e,e),e&&t(ds),gt(et,e),e&&t(ps),gt(tt,e),e&&t(cs),e&&t(He)}}}function Xo(y){let o,F;const E=[y[0],Ao];let v={$$slots:{default:[Wo]},$$scope:{ctx:y}};for(let h=0;h<E.length;h+=1)v=zi(v,E[h]);return o=new Ro({props:v}),{c(){Wt(o.$$.fragment)},l(h){Xt(o.$$.fragment,h)},m(h,m){Jt(o,h,m),F=!0},p(h,[m]){const D=m&1?qo(E,[m&1&&bo(h[0]),m&0&&bo(Ao)]):{};m&2&&(D.$$scope={dirty:m,ctx:h}),o.$set(D)},i(h){F||(nt(o.$$.fragment,h),F=!0)},o(h){ft(o.$$.fragment,h),F=!1},d(h){gt(o,h)}}}const Ao={title:"Elements",created:"2021-12-12T00:00:00.000Z",tags:["Urara","Elements"],flags:[],updated:"2023-01-09T04:37:07.282Z",slug:"/hello-world/elements/+page.svelte.md",path:"/hello-world/elements",toc:[{depth:2,title:"Headings",slug:"headings"},{depth:3,title:"Heading",slug:"heading"},{depth:4,title:"Heading",slug:"heading-1"},{depth:5,title:"Heading",slug:"heading-2"},{depth:6,title:"Heading",slug:"heading-3"},{depth:2,title:"Paragraphs",slug:"paragraphs"},{depth:2,title:"Lists",slug:"lists"},{depth:3,title:"Definition List (dl)",slug:"definition-list-dl"},{depth:3,title:"Ordered List (ol)",slug:"ordered-list-ol"},{depth:3,title:"Unordered List (ul)",slug:"unordered-list-ul"},{depth:3,title:"Checkbox List (ul)",slug:"checkbox-list-ul"},{depth:2,title:"Table",slug:"table"},{depth:2,title:"Footnotes",slug:"footnotes"},{depth:2,title:"Code",slug:"code"},{depth:2,title:"Misc",slug:"misc"},{depth:2,title:"Svelte Components",slug:"svelte-components"}]};function Jo(y,o,F){return y.$$set=E=>{F(0,o=zi(zi({},o),To(E)))},o=To(o),[o]}class er extends _l{constructor(o){super(),yl(this,o,Jo,Xo,Dl,{})}}export{er as default,Ao as metadata};
