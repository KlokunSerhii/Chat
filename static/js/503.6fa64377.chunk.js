"use strict";(self.webpackChunkchat_front=self.webpackChunkchat_front||[]).push([[503],{1503:function(e,a,n){n.r(a),n.d(a,{default:function(){return S}});var s=n(2791),r=n(7689),t=n(9439),c=n(1087),i=n(8820),o="Navigation_nav__X7fvI",u="Navigation_navLink__aIRDN",l="Navigation_icon__eKCez",f=n(9421),_=n(6067),m=n(2215),h=n(184),v=function(){var e=(0,f.a)().isLoggedIn,a=(0,s.useState)({room:"",user:"",avatar:_}),n=(0,t.Z)(a,2),v=n[0],d=n[1],j=(0,r.TH)().search;return(0,s.useEffect)((function(){var e=Object.fromEntries(new URLSearchParams(j));d(e)}),[j]),(0,h.jsx)("nav",{className:o,children:e?(0,h.jsxs)(c.OL,{className:u,to:"/join",onClick:function(){return m.W.emit("leftRoom",{params:v})},children:["Chat",(0,h.jsx)(i.y2T,{className:l})]}):(0,h.jsxs)(c.OL,{className:u,to:"/",children:["Chat",(0,h.jsx)(i.y2T,{className:l})]})})},d=n(9434),j="UserMenu_container__PrTFA",p="UserMenu_buttonIn__NpVOt",x="UserMenu_span__rONiV",N="UserMenu_UserProfile__PRISK",b="UserMenu_name_title__TfaWn",g="UserMenu_avatar__1UKXT",k="UserMenu_icon__Ezeyv",L=n(9273),U=n(1213);var C=function(){var e=(0,s.useState)({room:"",user:"",avatar:_}),a=(0,t.Z)(e,2),n=a[0],i=a[1],o=(0,r.TH)().search,u=(0,d.I0)(),l=(0,f.a)().user;return(0,s.useEffect)((function(){var e=Object.fromEntries(new URLSearchParams(o));i(e)}),[o]),(0,h.jsxs)("div",{className:j,children:[(0,h.jsxs)("span",{className:x,children:[(0,h.jsx)("p",{className:b,children:"Hello,"}),(0,h.jsxs)(c.OL,{to:"/profile",onClick:function(){return m.W.emit("leftRoom",{params:n})},className:N,children:[(0,h.jsx)("img",{className:g,src:l.avatarURL,alt:"avatar"}),l.name]})]}),(0,h.jsxs)("button",{className:p,type:"button",onClick:function(){n||m.W.emit("leftRoom",{params:n}),u((0,L.kS)())},children:["Logout",(0,h.jsx)(U.pGv,{className:k})]})]})},I="App_header__kZcP-",O="App_headerLogin__I7qg+";var R=function(){var e=(0,f.a)().isLoggedIn,a=(0,s.useState)(I),n=(0,t.Z)(a,2),r=n[0],c=n[1];return(0,s.useEffect)((function(){c(e?O:I)}),[e]),(0,h.jsxs)("header",{className:r,children:[(0,h.jsx)(v,{}),e&&(0,h.jsx)(C,{})]})};var S=function(){return(0,h.jsxs)("div",{children:[(0,h.jsx)(R,{}),(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)("b",{children:"LOAD..."}),children:(0,h.jsx)(r.j3,{})})]})}},2215:function(e,a,n){n.d(a,{W:function(){return s}});var s=n(1608).ZP.connect("https://chat-back-end-6mf9.onrender.com")},6067:function(e,a,n){e.exports=n.p+"static/media/bot.5e07e4ff49733c98e02b.jpg"}}]);
//# sourceMappingURL=503.6fa64377.chunk.js.map