import{j as e,T as I}from"./ThemeProvider-BemqQv5Y.js";import{c as Ie}from"./KcPageStory-dXwFLs0d.js";import{B as s,T as b}from"./ThemeToggle-BAYkBRMN.js";import"./index-2yJIXLcc.js";import"./iframe-Ge25m0MO.js";import"./LoginOtpPage-ZGZR8QSV.js";/* empty css             */import"./index-Bn05qqr6.js";const Ce=({children:r,title:o})=>e.jsxs(s,{children:[o&&e.jsx(b,{variant:"h4",gutterBottom:!0,children:o}),e.jsxs(s,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},gap:4,"& > *":{flex:1}},children:[e.jsxs(s,{children:[e.jsx(b,{variant:"h6",mb:2,align:"center",children:"Light Theme"}),e.jsx(I,{children:e.jsx(N,{mode:"light",children:r})})]}),e.jsxs(s,{children:[e.jsx(b,{variant:"h6",mb:2,align:"center",children:"Dark Theme"}),e.jsx(I,{children:e.jsx(N,{mode:"dark",children:r})})]})]})]}),N=({children:r,mode:o})=>e.jsx("div",{className:`${o}-theme`,style:{overflow:"hidden"},children:r});Ce.__docgenInfo={description:"",methods:[],displayName:"MultiThemeView",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};const{KcPageStory:a}=Ie({pageId:"login.ftl"}),Ke={title:"login/login.ftl",component:a},n={render:()=>e.jsx(a,{})},i={render:()=>e.jsx(a,{kcContext:{login:{username:"johndoe"},messagesPerField:{existsError:(r,...o)=>{const C=[r,...o];return C.includes("username")||C.includes("password")},get:r=>r==="username"||r==="password"?"Invalid username or password.":""}}})},t={render:()=>e.jsx(a,{kcContext:{realm:{registrationAllowed:!1}}})},l={render:()=>e.jsx(a,{kcContext:{realm:{rememberMe:!1}}})},d={render:()=>e.jsx(a,{kcContext:{realm:{resetPasswordAllowed:!1}}})},c={render:()=>e.jsx(a,{kcContext:{realm:{loginWithEmailAllowed:!0}}})},m={render:()=>e.jsx(a,{kcContext:{login:{username:"max.mustermann@mail.com"}}})},g={render:()=>e.jsx(a,{kcContext:{auth:{attemptedUsername:"max.mustermann@mail.com",showUsername:!0},usernameHidden:!0,message:{type:"info",summary:"Please re-authenticate to continue"}}})},p={render:()=>e.jsx(a,{kcContext:{social:{displayInfo:!0,providers:[{loginUrl:"google",alias:"google",providerId:"google",displayName:"Google",iconClasses:"fa fa-google"},{loginUrl:"microsoft",alias:"microsoft",providerId:"microsoft",displayName:"Microsoft",iconClasses:"fa fa-windows"},{loginUrl:"facebook",alias:"facebook",providerId:"facebook",displayName:"Facebook",iconClasses:"fa fa-facebook"},{loginUrl:"instagram",alias:"instagram",providerId:"instagram",displayName:"Instagram",iconClasses:"fa fa-instagram"},{loginUrl:"twitter",alias:"twitter",providerId:"twitter",displayName:"Twitter",iconClasses:"fa fa-twitter"},{loginUrl:"linkedin",alias:"linkedin",providerId:"linkedin",displayName:"LinkedIn",iconClasses:"fa fa-linkedin"},{loginUrl:"stackoverflow",alias:"stackoverflow",providerId:"stackoverflow",displayName:"Stackoverflow",iconClasses:"fa fa-stack-overflow"},{loginUrl:"github",alias:"github",providerId:"github",displayName:"Github",iconClasses:"fa fa-github"},{loginUrl:"gitlab",alias:"gitlab",providerId:"gitlab",displayName:"Gitlab",iconClasses:"fa fa-gitlab"},{loginUrl:"bitbucket",alias:"bitbucket",providerId:"bitbucket",displayName:"Bitbucket",iconClasses:"fa fa-bitbucket"},{loginUrl:"paypal",alias:"paypal",providerId:"paypal",displayName:"PayPal",iconClasses:"fa fa-paypal"},{loginUrl:"openshift",alias:"openshift",providerId:"openshift",displayName:"OpenShift",iconClasses:"fa fa-cloud"}]}}})},f={render:()=>e.jsx(a,{kcContext:{realm:{password:!1}}})},u={render:()=>e.jsx(a,{kcContext:{message:{summary:"The time allotted for the connection has elapsed.<br/>The login process will restart from the beginning.",type:"error"}}})},h={render:r=>e.jsx(a,{...r,kcContext:{social:{displayInfo:!0,providers:[{loginUrl:"google",alias:"google",providerId:"google",displayName:"Google",iconClasses:"fa fa-google"}]}}})},y={render:r=>e.jsx(a,{...r,kcContext:{social:{displayInfo:!0,providers:[{loginUrl:"google",alias:"google",providerId:"google",displayName:"Google",iconClasses:"fa fa-google"},{loginUrl:"microsoft",alias:"microsoft",providerId:"microsoft",displayName:"Microsoft",iconClasses:"fa fa-windows"}]}}})},k={render:r=>e.jsx(a,{...r,kcContext:{social:{displayInfo:!0,providers:[]}}})},v={render:r=>e.jsx(a,{...r,kcContext:{social:{displayInfo:!0,providers:[{loginUrl:"google",alias:"google",providerId:"google",displayName:"Google",iconClasses:"fa fa-google"},{loginUrl:"microsoft",alias:"microsoft",providerId:"microsoft",displayName:"Microsoft",iconClasses:"fa fa-windows"},{loginUrl:"facebook",alias:"facebook",providerId:"facebook",displayName:"Facebook",iconClasses:"fa fa-facebook"},{loginUrl:"twitter",alias:"twitter",providerId:"twitter",displayName:"Twitter",iconClasses:"fa fa-twitter"}]}}})},x={render:r=>e.jsx(a,{...r,kcContext:{social:{displayInfo:!0,providers:[{loginUrl:"google",alias:"google",providerId:"google",displayName:"Google",iconClasses:"fa fa-google"}]},realm:{rememberMe:!1}}})},w={render:()=>e.jsx(Ce,{title:"Login Page - Light and Dark Comparison",children:e.jsx(a,{})})};var P,S,U;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <KcPageStory />
}`,...(U=(S=n.parameters)==null?void 0:S.docs)==null?void 0:U.source}}};var j,W,T;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    login: {
      username: "johndoe"
    },
    messagesPerField: {
      // NOTE: The other functions of messagesPerField are derived from get() and
      // existsError() so they are the only ones that need to mock.
      existsError: (fieldName: string, ...otherFieldNames: string[]) => {
        const fieldNames = [fieldName, ...otherFieldNames];
        return fieldNames.includes("username") || fieldNames.includes("password");
      },
      get: (fieldName: string) => {
        if (fieldName === "username" || fieldName === "password") {
          return "Invalid username or password.";
        }
        return "";
      }
    }
  }} />
}`,...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var M,K,G;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      registrationAllowed: false
    }
  }} />
}`,...(G=(K=t.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var E,F,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      rememberMe: false
    }
  }} />
}`,...(A=(F=l.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var R,B,L;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      resetPasswordAllowed: false
    }
  }} />
}`,...(L=(B=d.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var D,O,V;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      loginWithEmailAllowed: true
    }
  }} />
}`,...(V=(O=c.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var _,q,H;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    login: {
      username: "max.mustermann@mail.com"
    }
  }} />
}`,...(H=(q=m.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var $,z,J;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    auth: {
      attemptedUsername: "max.mustermann@mail.com",
      showUsername: true
    },
    usernameHidden: true,
    message: {
      type: "info",
      summary: "Please re-authenticate to continue"
    }
  }} />
}`,...(J=(z=g.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,X,Y;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    social: {
      displayInfo: true,
      providers: [{
        loginUrl: "google",
        alias: "google",
        providerId: "google",
        displayName: "Google",
        iconClasses: "fa fa-google"
      }, {
        loginUrl: "microsoft",
        alias: "microsoft",
        providerId: "microsoft",
        displayName: "Microsoft",
        iconClasses: "fa fa-windows"
      }, {
        loginUrl: "facebook",
        alias: "facebook",
        providerId: "facebook",
        displayName: "Facebook",
        iconClasses: "fa fa-facebook"
      }, {
        loginUrl: "instagram",
        alias: "instagram",
        providerId: "instagram",
        displayName: "Instagram",
        iconClasses: "fa fa-instagram"
      }, {
        loginUrl: "twitter",
        alias: "twitter",
        providerId: "twitter",
        displayName: "Twitter",
        iconClasses: "fa fa-twitter"
      }, {
        loginUrl: "linkedin",
        alias: "linkedin",
        providerId: "linkedin",
        displayName: "LinkedIn",
        iconClasses: "fa fa-linkedin"
      }, {
        loginUrl: "stackoverflow",
        alias: "stackoverflow",
        providerId: "stackoverflow",
        displayName: "Stackoverflow",
        iconClasses: "fa fa-stack-overflow"
      }, {
        loginUrl: "github",
        alias: "github",
        providerId: "github",
        displayName: "Github",
        iconClasses: "fa fa-github"
      }, {
        loginUrl: "gitlab",
        alias: "gitlab",
        providerId: "gitlab",
        displayName: "Gitlab",
        iconClasses: "fa fa-gitlab"
      }, {
        loginUrl: "bitbucket",
        alias: "bitbucket",
        providerId: "bitbucket",
        displayName: "Bitbucket",
        iconClasses: "fa fa-bitbucket"
      }, {
        loginUrl: "paypal",
        alias: "paypal",
        providerId: "paypal",
        displayName: "PayPal",
        iconClasses: "fa fa-paypal"
      }, {
        loginUrl: "openshift",
        alias: "openshift",
        providerId: "openshift",
        displayName: "OpenShift",
        iconClasses: "fa fa-cloud"
      }]
    }
  }} />
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    realm: {
      password: false
    }
  }} />
}`,...(re=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,oe,se;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <KcPageStory kcContext={{
    message: {
      summary: "The time allotted for the connection has elapsed.<br/>The login process will restart from the beginning.",
      type: "error"
    }
  }} />
}`,...(se=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,ie,te;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => <KcPageStory {...args} kcContext={{
    social: {
      displayInfo: true,
      providers: [{
        loginUrl: "google",
        alias: "google",
        providerId: "google",
        displayName: "Google",
        iconClasses: "fa fa-google"
      }]
    }
  }} />
}`,...(te=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var le,de,ce;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <KcPageStory {...args} kcContext={{
    social: {
      displayInfo: true,
      providers: [{
        loginUrl: "google",
        alias: "google",
        providerId: "google",
        displayName: "Google",
        iconClasses: "fa fa-google"
      }, {
        loginUrl: "microsoft",
        alias: "microsoft",
        providerId: "microsoft",
        displayName: "Microsoft",
        iconClasses: "fa fa-windows"
      }]
    }
  }} />
}`,...(ce=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,ge,pe;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <KcPageStory {...args} kcContext={{
    social: {
      displayInfo: true,
      providers: []
    }
  }} />
}`,...(pe=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var fe,ue,he;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => <KcPageStory {...args} kcContext={{
    social: {
      displayInfo: true,
      providers: [{
        loginUrl: "google",
        alias: "google",
        providerId: "google",
        displayName: "Google",
        iconClasses: "fa fa-google"
      }, {
        loginUrl: "microsoft",
        alias: "microsoft",
        providerId: "microsoft",
        displayName: "Microsoft",
        iconClasses: "fa fa-windows"
      }, {
        loginUrl: "facebook",
        alias: "facebook",
        providerId: "facebook",
        displayName: "Facebook",
        iconClasses: "fa fa-facebook"
      }, {
        loginUrl: "twitter",
        alias: "twitter",
        providerId: "twitter",
        displayName: "Twitter",
        iconClasses: "fa fa-twitter"
      }]
    }
  }} />
}`,...(he=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ye,ke,ve;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <KcPageStory {...args} kcContext={{
    social: {
      displayInfo: true,
      providers: [{
        loginUrl: "google",
        alias: "google",
        providerId: "google",
        displayName: "Google",
        iconClasses: "fa fa-google"
      }]
    },
    realm: {
      rememberMe: false
    }
  }} />
}`,...(ve=(ke=x.parameters)==null?void 0:ke.docs)==null?void 0:ve.source}}};var xe,we,be;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <MultiThemeView title="Login Page - Light and Dark Comparison">
      <KcPageStory />
    </MultiThemeView>
}`,...(be=(we=w.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};const Ge=["Default","WithInvalidCredential","WithoutRegistration","WithoutRememberMe","WithoutPasswordReset","WithEmailAsUsername","WithPresetUsername","WithImmutablePresetUsername","WithSocialProviders","WithoutPasswordField","WithErrorMessage","WithOneSocialProvider","WithTwoSocialProviders","WithNoSocialProviders","WithMoreThanTwoSocialProviders","WithSocialProvidersAndWithoutRememberMe","BothThemes"];export{w as BothThemes,n as Default,c as WithEmailAsUsername,u as WithErrorMessage,g as WithImmutablePresetUsername,i as WithInvalidCredential,v as WithMoreThanTwoSocialProviders,k as WithNoSocialProviders,h as WithOneSocialProvider,m as WithPresetUsername,p as WithSocialProviders,x as WithSocialProvidersAndWithoutRememberMe,y as WithTwoSocialProviders,f as WithoutPasswordField,d as WithoutPasswordReset,t as WithoutRegistration,l as WithoutRememberMe,Ge as __namedExportsOrder,Ke as default};
