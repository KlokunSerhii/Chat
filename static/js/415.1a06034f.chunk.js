"use strict";(self.webpackChunkchat_front=self.webpackChunkchat_front||[]).push([[415],{415:function(e,a,n){n.r(a),n.d(a,{default:function(){return R}});var s=n(2791),r=n(7689),t=n(2184),o=n(9439),c=n(1087),i=n(8820),l=n(9421),u=n(6067),m=n(2215),f=n(3117),d=n(7022),h=n(2537),j=n(9434),_="UserMenu_container__KolyR",x="UserMenu_span__Saf-o",v="UserMenu_UserProfile__K0ZhM",b="UserMenu_UserProfileMobile__diTna",p="UserMenu_btnMobile__DG2Na",k="UserMenu_btn__cDmR5",g="UserMenu_name_title__9C2Ei",U="UserMenu_avatar__sRg9V",Z=n(9273),M=n(3360),N=n(184);var C=function(){var e=(0,s.useState)({room:"",user:"",avatar:u}),a=(0,o.Z)(e,2),n=a[0],t=a[1],i=(0,r.TH)().search,f=(0,j.I0)(),d=(0,l.a)().user;(0,s.useEffect)((function(){var e=Object.fromEntries(new URLSearchParams(i));t(e)}),[i]);var h=function(){n||m.W.emit("leftRoom",{params:n}),f((0,Z.kS)())};return(0,N.jsxs)("div",{className:_,children:[(0,N.jsxs)("span",{className:x,children:[(0,N.jsx)("p",{className:g,children:"Hello,"}),(0,N.jsxs)(c.OL,{to:"/profile",onClick:function(){return m.W.emit("leftRoom",{params:n})},className:v,children:[(0,N.jsx)("img",{className:U,src:d.avatarURL,alt:"avatar"}),d.name]})]}),(0,N.jsx)(c.OL,{to:"/profile",onClick:function(){return m.W.emit("leftRoom",{params:n})},className:b,children:"Profile"}),(0,N.jsx)(M.Z,{variant:"link",className:p,onClick:h,size:"sm",children:"Logout"}),(0,N.jsx)(M.Z,{variant:"outline-light",onClick:h,className:k,size:"sm",children:"Logout"})]})},L=function(){var e=(0,l.a)().isLoggedIn,a=(0,s.useState)({room:"",user:"",avatar:u}),n=(0,o.Z)(a,2),t=n[0],j=n[1],_=(0,r.TH)().search;return(0,s.useEffect)((function(){var e=Object.fromEntries(new URLSearchParams(_));j(e)}),[_]),(0,N.jsx)(h.Z,{expand:"lg",className:"bg-body-tertiary",bg:"dark","data-bs-theme":"dark",children:(0,N.jsxs)(d.Z,{children:[(0,N.jsx)(h.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,N.jsxs)(h.Z.Collapse,{id:"basic-navbar-nav",children:[(0,N.jsx)(f.Z,{className:"me-auto mt-2 mb-2",children:e?(0,N.jsxs)(c.OL,{to:"/join",onClick:function(){return m.W.emit("leftRoom",{params:t})},style:{textDecoration:"none"},children:["Chat",(0,N.jsx)(i.y2T,{})]}):(0,N.jsx)(c.OL,{to:"/",style:{textDecoration:"none"},children:"Home"})}),e&&(0,N.jsx)(C,{"aria-controls":"basic-navbar-nav"})]})]})})};var R=function(){return(0,N.jsxs)("div",{children:[(0,N.jsx)(L,{}),(0,N.jsx)(s.Suspense,{fallback:(0,N.jsx)(t.Z,{}),children:(0,N.jsx)(r.j3,{})})]})}},2215:function(e,a,n){n.d(a,{W:function(){return s}});var s=n(1608).ZP.connect("https://chat-back-end-6mf9.onrender.com")},6067:function(e,a,n){e.exports=n.p+"static/media/bot.5e07e4ff49733c98e02b.jpg"}}]);
//# sourceMappingURL=415.1a06034f.chunk.js.map