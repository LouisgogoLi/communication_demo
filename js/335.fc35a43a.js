"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[335],{7335:function(e,t,s){s.r(t),s.d(t,{default:function(){return V}});var a=s(3396);const n={name:"TitleBar"};var u=Object.assign(n,{props:{propsHandListShow:{type:Function,default:()=>{}}},setup(e){const t=e;return(e,s)=>((0,a.wg)(),(0,a.iD)("a",{class:"title",onClick:s[0]||(s[0]=(...e)=>t.propsHandListShow&&t.propsHandListShow(...e)),"data-test":"titlebar_title"},"點選測試Title"))}}),l=s(89);const i=(0,l.Z)(u,[["__scopeId","data-v-4822fc09"]]);var o=i,r=s(7139),p=s(4870);const d={name:"ListItem"};var m=Object.assign(d,{props:{propsIsOpen:{type:Boolean,default:!0}},setup(e){const t=e,s=(0,p.qj)([{id:"0001",name:"測試Vue陣列1",show:!0,status:"red"},{id:"0002",name:"測試Vue陣列2",show:!1,status:"blue"},{id:"0003",name:"測試Vue陣列3",show:!0,status:"red"},{id:"0004",name:"測試Vue陣列4",show:!0,status:"red"},{id:"0005",name:"測試Vue陣列5",show:!1,status:"blue"}]);return(e,n)=>t.propsIsOpen?((0,a.wg)(),(0,a.iD)("ul",{key:0,class:(0,r.C_)(["box",{open:t.propsIsOpen}])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,p.SU)(s),((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:e.id,"data-test":"list_test"},(0,r.zw)(t+1)+". "+(0,r.zw)(e.name),1)))),128))],2)):(0,a.kq)("",!0)}});const c=(0,l.Z)(m,[["__scopeId","data-v-af03be24"]]);var v=c;const b={name:"EmitTest"};var w=Object.assign(b,{emits:{emitTestNumber:null},setup(e,{emit:t}){const s=(0,p.iH)(54088);return(0,a.bv)((()=>{t("emitTestNumber",s)})),(e,t)=>((0,a.wg)(),(0,a.iD)("h1",null,(0,r.zw)(s.value),1))}});const f=w;var g=f;const h={name:"TimerBox"};var _=Object.assign(h,{emits:{emitTimerNumber:e=>0===e.value},setup(e,{emit:t}){const s=(0,p.iH)(5);let n=null;return(0,a.bv)((()=>{n=setInterval((()=>{s.value--,0===s.value&&(clearInterval(n),t("emitTimerNumber",s))}),1e3)})),(e,t)=>((0,a.wg)(),(0,a.iD)("h1",null,(0,r.zw)(s.value),1))}});const T=(0,l.Z)(_,[["__scopeId","data-v-3d24df8a"]]);var k=T,I=s(9242);const O={name:"DomRefTest"};var C=Object.assign(O,{setup(e,{expose:t}){const s=(0,p.qj)([{date:"2016-05-02",name:"王小虎",address:"台北市信義區"}]),n=(0,p.iH)("我是子元件"),u=(0,p.iH)(!0),l=()=>{u.value=!u.value},i=(0,p.iH)(null);return(0,a.bv)((()=>{i.value.focus()})),t({aTableData:s,sConts:n,bOpenTest:u,fnChangeOpenText:l,getChildConts:i}),(e,t)=>((0,a.wg)(),(0,a.iD)("div",null,[u.value?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:0,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),ref_key:"getChildConts",ref:i},null,512)),[[I.nr,n.value]]):(0,a.kq)("",!0),(0,a._)("button",{onClick:l},"按我開關"),(0,a._)("div",null,(0,r.zw)(n.value),1)]))}});const D=(0,l.Z)(C,[["__scopeId","data-v-4f2e4fec"]]);var H=D;const j={name:"PropsAndEmit"};var y=Object.assign(j,{setup(e){const t=(0,p.iH)(!0),s=()=>{t.value=!t.value},n=e=>{},u=e=>{},l=(0,p.iH)(null);return(0,a.bv)((()=>{})),(e,i)=>((0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(o,{propsHandListShow:s}),(0,a.Wm)(v,{propsIsOpen:t.value},null,8,["propsIsOpen"]),(0,a.Wm)(g,{onEmitTestNumber:n}),(0,a.Wm)(k,{onEmitTimerNumber:u}),(0,a.Wm)(H,{ref_key:"getChildDomRefTest",ref:l},null,512)]))}});const N=(0,l.Z)(y,[["__scopeId","data-v-7a5de3b2"]]);var V=N}}]);