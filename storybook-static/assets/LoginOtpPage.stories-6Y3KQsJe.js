import{j as l,T as b}from"./ThemeProvider-BemqQv5Y.js";import{L as x,T as y}from"./LoginOtpPage-ZGZR8QSV.js";import{m as L}from"./mocks-0YOqJqCE.js";import"./index-2yJIXLcc.js";import"./ThemeToggle-BAYkBRMN.js";import"./index-Bn05qqr6.js";const T=e=>{const w={pageId:"login-otp.ftl",url:{loginAction:"#"},realm:{displayName:"Test Realm",internationalizationEnabled:!0},otpLogin:{userOtpCredentials:e.multipleCredentials?[{id:"totp1",userLabel:"Google Authenticator",type:"totp"},{id:"totp2",userLabel:"Microsoft Authenticator",type:"totp"}]:[{id:"totp1",userLabel:"Google Authenticator",type:"totp"}],selectedCredentialId:(e.multipleCredentials,"totp1")},message:e.showError?{type:"error",summary:"Invalid authentication code"}:null,messagesPerField:{existsError:s=>s==="totp"&&e.fieldError,get:s=>s==="totp"&&e.fieldError?"Please enter a valid authentication code":""}};return l.jsx(b,{children:l.jsx(x,{Template:y,i18n:L,kcContext:w})})},G={title:"Authentication/OTP Login",component:T,parameters:{layout:"fullscreen"},argTypes:{multipleCredentials:{control:"boolean"},fieldError:{control:"boolean"},showError:{control:"boolean"}}},r={args:{multipleCredentials:!1,fieldError:!1,showError:!1}},t={args:{multipleCredentials:!0,fieldError:!1,showError:!1}},o={args:{multipleCredentials:!1,fieldError:!0,showError:!1}},a={args:{multipleCredentials:!1,fieldError:!1,showError:!0}};var i,n,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    multipleCredentials: false,
    fieldError: false,
    showError: false
  }
}`,...(d=(n=r.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var p,c,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    multipleCredentials: true,
    fieldError: false,
    showError: false
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,f,E;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    multipleCredentials: false,
    fieldError: true,
    showError: false
  }
}`,...(E=(f=o.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var g,h,C;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    multipleCredentials: false,
    fieldError: false,
    showError: true
  }
}`,...(C=(h=a.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const I=["Default","WithMultipleCredentials","WithFieldError","WithGlobalError"];export{r as Default,o as WithFieldError,a as WithGlobalError,t as WithMultipleCredentials,I as __namedExportsOrder,G as default};
