import{M as i}from"./2Hrod7cj.js";import{f as u,b6 as g,c as r,o,$ as h,n as d,g as p,F as l,r as M,l as c,_ as m,b as y}from"./CArnVfK8.js";const z=u({__name:"BlockMathGroup",props:{group:{},freeze:{type:Boolean}},setup(t){const s=t,a=(()=>{switch(s.group.gap){case"normal":return;case"big":return"calc(2 * var(--bitran_gapBig))";case"small":return"calc(0.5 * var(--bitran_gapBig))";default:return s.group.gap}})();return(e,f)=>{const _=g("BlockMathGroup",!0);return o(),r("div",{class:d(e.$style.mathGroup),style:h({columnGap:p(a)})},[(o(!0),r(l,null,M(e.group.parts,n=>(o(),r(l,null,[typeof n=="string"?(o(),c(i,{key:0,displayMath:!0,mathHtml:n,freeze:e.freeze},null,8,["mathHtml","freeze"])):(o(),c(_,{key:1,group:n,freeze:e.freeze},null,8,["group","freeze"]))],64))),256))],6)}}}),B="_mathGroup_1rw2w_1",k={mathGroup:B},G={$style:k},$=m(z,[["__cssModules",G]]),v=u({__name:"BlockMath",props:{node:{}},setup(t){const a=t.node.renderData;return(e,f)=>(o(),r("div",null,[y($,{group:p(a),freeze:e.node.meta.freeze},null,8,["group","freeze"])]))}}),b={},w={$style:b},H=m(v,[["__cssModules",w]]);export{H as default};
