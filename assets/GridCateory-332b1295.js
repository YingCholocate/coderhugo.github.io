import{d as l,r as u,u as v,o as r,c as n,b as o,f as g,t as h,g as y,j as p,e as f,_ as m,F as C,a as G,k as x,p as I,l as b}from"./index-bac70b71.js";const j="/assets/Hunter-Assassin-3d-3e3e05ad.jpg",k={class:"cardImg"},S=["src"],B=l({__name:"GameCard",props:{data:{}},setup(e){const s=u(e.data),c=v(),d=a=>{a.replace(" ","-");const t=y(p.filter(i=>i.categories===s.value));console.log(t),f.emit("searchResult",t),c.push({name:"search",params:{gamename:s.value}})};return(a,t)=>(r(),n("div",{class:"card",onClick:t[0]||(t[0]=i=>d(s.value))},[o("div",k,[o("img",{src:g(j)},null,8,S)]),o("div",null,h(s.value),1)]))}});const $=m(B,[["__scopeId","data-v-a98c1c12"]]),D=e=>(I("data-v-ab231d14"),e=e(),b(),e),R={class:"category"},w=D(()=>o("div",null,"Game Cateories",-1)),F={class:"grid"},N=l({__name:"GridCateory",setup(e){const _=[...new Set(p.map(c=>c.categories))],s=u(_);return(c,d)=>(r(),n("div",R,[w,o("div",F,[(r(!0),n(C,null,G(s.value,a=>(r(),n("div",{key:a},[x($,{data:a},null,8,["data"])]))),128))])]))}});const A=m(N,[["__scopeId","data-v-ab231d14"]]);export{A as G,j as i};
