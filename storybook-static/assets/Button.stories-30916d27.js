import{r as R}from"./index-c013ead5.js";import{P as s}from"./index-2baff29e.js";import"./_commonjsHelpers-725317a4.js";var E={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C=R,j=Symbol.for("react.element"),q=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,I=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function P(o,e,n){var r,t={},a=null,d=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(d=e.ref);for(r in e)z.call(e,r)&&!T.hasOwnProperty(r)&&(t[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)t[r]===void 0&&(t[r]=e[r]);return{$$typeof:j,type:o,key:a,ref:d,props:t,_owner:I.current}}p.Fragment=q;p.jsx=P;p.jsxs=P;E.exports=p;var w=E.exports;const m=({primary:o,backgroundColor:e,size:n,label:r,...t})=>{const a=o?"storybook-button--primary":"storybook-button--secondary";return w.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${n}`,a].join(" "),style:e&&{backgroundColor:e},...t,children:r})};m.propTypes={primary:s.bool,backgroundColor:s.string,size:s.oneOf(["small","medium","large"]),label:s.string.isRequired,onClick:s.func};m.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};m.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"What background color to use"},primary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1,description:"How large should the button be?"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"Button contents"}}};const U={title:"Example/Button",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},l={args:{primary:!0,label:"Button"}},u={args:{label:"Button"}},i={args:{size:"large",label:"Button"}},c={args:{size:"small",label:"Button"}};var f,y,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var g,_,v;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(v=(_=u.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var k,x,B;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(B=(x=i.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var S,h,O;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(O=(h=c.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};const $=["Primary","Secondary","Large","Small"];export{i as Large,l as Primary,u as Secondary,c as Small,$ as __namedExportsOrder,U as default};
//# sourceMappingURL=Button.stories-30916d27.js.map
