(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{105:function(e,t,n){e.exports={app:"App_app__10dw9"}},111:function(e,t,n){e.exports={post:"Post_post__2prcS",postHeader:"Post_postHeader__13KaB"}},114:function(e,t,n){},161:function(e,t,n){e.exports={aboutBlock:"About_aboutBlock__2WwFz"}},162:function(e,t,n){e.exports={myPostsForm:"MyPostsForm_myPostsForm__2-JJU"}},166:function(e,t,n){e.exports={login:"Login_login__ylczG"}},299:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=(n(114),n(90)),c=n(18),i=n.n(c),o=n(30),l=n(5),u=n(7),d=n(332),j=n(51),b=n.n(j),p=b.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"1e90b645-3ab8-4f0b-b1bb-01b70c47396d"}}),f=function(e){return p.get("profile/".concat(e))},O=function(e){return p.get("profile/status/".concat(e))},h=function(e){return p.put("profile/status",{status:e})},m={appStatus:"idle",error:null,initialization:!1},x=function(e){return{type:"APP/SET-ERROR",error:e}},v=function(e){return{type:"APP/SET-STATUS",status:e}},_=function(e){return{type:"APP/SET-INITIALIZATION",value:e}},g=function(e,t){e.messages.length?t(x(e.messages[0])):t(x("Some error occurred")),t(v("failed"))},S=function(e,t){t(x(e.message)),t(v("failed"))},w={posts:[{id:Object(d.a)(),post:"Hello!",likesCount:3},{id:Object(d.a)(),post:"JS!",likesCount:9}],profile:null,status:""},N=function(e){return{type:"SET-STATUS-PROFILE",status:e}},y=b.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"1e90b645-3ab8-4f0b-b1bb-01b70c47396d"}}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{term:"",friend:null};return y.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n.term)+(null===n.friend?"":"&friend=".concat(n.friend))).then((function(e){return e.data}))},P=function(e){return y.post("follow/".concat(e))},F=function(e){return y.delete("follow/".concat(e))},E={usersList:[],pageSize:12,totalUsersCount:0,currentPage:1,isFetching:!1,isFollowing:[],disableButton:!1,filter:{term:"",friend:null}},k=function(e){return{type:"USERS/SET_FILTER",payload:e}},L=function(e,t){return{type:"TOGGLE_IS_FOLLOWING",disableButton:e,userID:t}},U=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},C=function(e,t,n){return function(){var a=Object(o.a)(i.a.mark((function a(r){var s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(U(!0)),r(k(n)),r({type:"SET-CURRENT-PAGE",currentPage:e}),a.next=5,T(e,t,n);case 5:s=a.sent,r(U(!1)),r({type:"SET-USERS",users:s.items}),r({type:"SET-TOTAL-USERS-COUNT",totalUsersCount:s.totalCount});case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},I=b.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"1e90b645-3ab8-4f0b-b1bb-01b70c47396d"}}),A=function(){return I.get("auth/me")},R=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return I.post("auth/login",{email:e,password:t,rememberMe:n})},B=function(){return I.delete("auth/login")},z={data:{id:null,login:null,email:null},messages:[],fieldsErrors:[],resultCode:0,isAuth:!1},H=function(e,t,n,a){return{type:"SET-AUTH-USER-DATA",payload:{id:e,login:t,email:n},isAuth:a}},G=function(){return function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a,r,s,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v("loading")),e.prev=1,e.next=4,A();case 4:0===(n=e.sent).data.resultCode?(a=n.data.data,r=a.id,s=a.login,c=a.email,t(H(r,s,c,!0)),t(_(!0)),t(v("succeeded"))):g(n.data,t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),S(e.t0,t);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},M=n(149),D=Object(s.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:t.id,post:t.postText,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[n].concat(Object(l.a)(e.posts))});case"SET-USER-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SET-STATUS-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(u.a)(Object(u.a)({},e),{},{usersList:e.usersList.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(u.a)(Object(u.a)({},e),{},{usersList:e.usersList.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(u.a)(Object(u.a)({},e),{},{usersList:t.users});case"SET-CURRENT-PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE_IS_FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING":return Object(u.a)(Object(u.a)({},e),{},{isFollowing:t.disableButton?[].concat(Object(l.a)(e.isFollowing),[t.userID]):Object(l.a)(e.isFollowing.filter((function(e){return e!==t.userID})))});case"USERS/SET_FILTER":return Object(u.a)(Object(u.a)({},e),{},{filter:t.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-AUTH-USER-DATA":return Object(u.a)(Object(u.a)({},e),{},{data:Object(u.a)(Object(u.a)({},e.data),t.payload),isAuth:t.isAuth});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET-STATUS":return Object(u.a)(Object(u.a)({},e),{},{appStatus:t.status});case"APP/SET-ERROR":return Object(u.a)(Object(u.a)({},e),{},{error:t.error});case"APP/SET-INITIALIZATION":return Object(u.a)(Object(u.a)({},e),{},{initialization:t.value});default:return e}}}),W=Object(s.c)(D,Object(s.a)(M.a));console.log(window.store=W);var K=n(44),J=n.n(K),X=n(105),V=n.n(X),Y=n(14),Z=n(56),q=n.n(Z),Q=n(150),$=n.n(Q),ee=n(154),te=n.n(ee),ne=n(1),ae=a.memo((function(){var e=Object(Y.b)(),t=Object(Y.c)((function(e){return e.app.appStatus})),n=Object(Y.c)((function(e){return e.auth.isAuth})),a=Object(Y.c)((function(e){return e.auth.data.login})),r=function(){e(function(){var e=Object(o.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v("loading")),e.prev=1,e.next=4,B();case 4:0===(n=e.sent).data.resultCode?(t(H(null,null,null,!1)),t(_(!1)),t(v("succeeded"))):g(n.data,t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),S(e.t0,t);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())};return Object(ne.jsx)("header",{className:q.a.header,children:Object(ne.jsxs)("div",{className:q.a.container,children:[Object(ne.jsxs)("div",{className:q.a.title,children:[Object(ne.jsx)($.a,{sx:{fontSize:"45px",color:"#64d580"}}),Object(ne.jsx)("h1",{children:"Lumos."})]}),Object(ne.jsx)("div",{children:n?Object(ne.jsxs)("div",{className:q.a.loginInfo,children:[Object(ne.jsx)("span",{children:a}),Object(ne.jsx)("button",{className:q.a.logoutBtn,onClick:function(){return r()},disabled:"loading"===t,children:Object(ne.jsx)(te.a,{sx:{fontSize:"35px",color:"#2254f5"}})})]}):Object(ne.jsx)(ne.Fragment,{})})]})})})),re=n(9),se=n(66),ce=n.n(se),ie=n(37),oe=n(335),le=n(333),ue=r.a.memo((function(e){var t=e.usersList,n=e.isFollowing,a=e.followUserHandler,r=e.unfollowUserHandler,s=t.map((function(e){var t;return Object(ne.jsx)(le.a,{item:!0,xs:3,children:Object(ne.jsxs)("div",{className:ce.a.user,children:[Object(ne.jsx)("div",{children:Object(ne.jsx)(ie.b,{to:"/profile/"+e.id,children:Object(ne.jsx)(oe.a,{alt:e.name,src:null===(t=e.photos)||void 0===t?void 0:t.small,sx:{width:65,height:65}})})}),Object(ne.jsx)("h4",{children:e.name}),Object(ne.jsxs)("p",{children:["ID: ",e.id]}),Object(ne.jsx)("div",{children:e.followed?Object(ne.jsx)("button",{className:ce.a.unfollowBtn,onClick:function(){return r(e.id)},disabled:n.some((function(t){return t===e.id})),children:"UNFOLLOW"}):Object(ne.jsx)("button",{className:ce.a.followBtn,onClick:function(){return a(e.id)},disabled:n.some((function(t){return t===e.id})),children:"FOLLOW"})})]})},e.id)}));return Object(ne.jsx)("div",{className:ce.a.users,children:Object(ne.jsx)(le.a,{container:!0,spacing:2,children:s})})})),de=n(336),je=n(329),be=n(23),pe=n(35),fe=n(49),Oe=n.n(fe),he=n(160),me=n.n(he),xe=pe.a({term:pe.b().max(300,"Must be 300 characters or less")}),ve=r.a.memo((function(e){var t=e.onFilterChanged;return Object(ne.jsx)("div",{children:Object(ne.jsx)(be.d,{initialValues:{term:"",friend:"null"},onSubmit:function(e,n){var a=n.setSubmitting,r={term:e.term,friend:"null"===e.friend?null:"true"===e.friend};t(r),a(!1)},validationSchema:xe,children:function(e){var t=e.isSubmitting;return Object(ne.jsxs)(be.c,{className:Oe.a.searchForm,children:[Object(ne.jsxs)("div",{className:Oe.a.inputBlock,children:[Object(ne.jsx)(be.b,{name:"term",type:"text",placeholder:"Search here"}),Object(ne.jsx)("button",{className:Oe.a.searchBtn,type:"submit",disabled:t,children:Object(ne.jsx)("div",{className:Oe.a.icon,children:Object(ne.jsx)(me.a,{sx:{fontSize:"25px",color:"#adb5bd"}})})})]}),Object(ne.jsx)("div",{className:Oe.a.selectBlock,children:Object(ne.jsxs)(be.b,{className:Oe.a.select,name:"friend",as:"select",children:[Object(ne.jsx)("option",{value:"null",children:"All"}),Object(ne.jsx)("option",{value:"true",children:"Only followed"}),Object(ne.jsx)("option",{value:"false",children:"Only unfollowed"})]})})]})}})})})),_e=n(85),ge=n.n(_e),Se=r.a.memo((function(){var e=Object(Y.b)(),t=Object(Y.c)((function(e){return e.usersPage}));Object(a.useEffect)((function(){e(C(t.currentPage,t.pageSize,t.filter))}),[e,t.currentPage,t.pageSize,t.filter]);var n=Object(a.useCallback)((function(n){e(C(n,t.pageSize,t.filter))}),[e,t.pageSize,t.filter]),r=Object(a.useCallback)((function(t){e(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(L(!0,e)),t.next=3,P(e);case 3:0===t.sent.data.resultCode&&n({type:"FOLLOW",id:e}),n(L(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[e]),s=Object(a.useCallback)((function(t){e(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(L(!0,e)),t.next=3,F(e);case 3:0===t.sent.data.resultCode&&n({type:"UNFOLLOW",id:e}),n(L(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[e]),c=Math.ceil(t.totalUsersCount/t.pageSize);return Object(ne.jsxs)("div",{className:ge.a.users,children:[Object(ne.jsxs)("div",{className:ge.a.searchBlock,children:[Object(ne.jsx)("div",{children:Object(ne.jsx)("h2",{children:"Users"})}),Object(ne.jsx)("div",{children:Object(ne.jsx)(ve,{onFilterChanged:function(n){e(C(1,t.pageSize,n))}})})]}),t.isFetching?Object(ne.jsx)(de.a,{style:{marginTop:"30px",marginBottom:"20px"}}):Object(ne.jsx)(ue,{usersList:t.usersList,isFollowing:t.isFollowing,followUserHandler:r,unfollowUserHandler:s}),Object(ne.jsx)("div",{className:ge.a.pagination,children:Object(ne.jsx)(je.a,{count:c,color:"primary",onChange:function(e,t){return n(t)}})})]})})),we=n(86),Ne=n.n(we);function ye(){return Object(ne.jsxs)("nav",{className:Ne.a.navbar,children:[Object(ne.jsx)(ie.b,{to:"/profile",className:function(e){return e.isActive?Ne.a.active:""},children:"Profile"}),Object(ne.jsx)(ie.b,{to:"/users",className:function(e){return e.isActive?Ne.a.active:""},children:"Users"})]})}var Te=n(31),Pe=n(42),Fe=n.n(Pe),Ee=n(161),ke=n.n(Ee),Le=Object(a.memo)((function(e){var t=e.aboutMe;return Object(ne.jsxs)("div",{className:ke.a.aboutBlock,children:[Object(ne.jsx)("h4",{children:"About"}),t?Object(ne.jsx)("p",{children:t}):Object(ne.jsx)("p",{children:"The user did not tell about himself."})]})})),Ue=n(111),Ce=n.n(Ue);var Ie,Ae=function(e){return Object(ne.jsxs)("div",{className:Ce.a.post,children:[Object(ne.jsxs)("div",{className:Ce.a.postHeader,children:[Object(ne.jsx)(oe.a,{src:e.avatar,sx:{width:45,height:45}}),Object(ne.jsx)("h4",{children:e.name})]}),Object(ne.jsx)("div",{children:Object(ne.jsx)("p",{children:e.post})}),Object(ne.jsx)("div",{children:Object(ne.jsxs)("span",{children:[e.likesCount," Like"]})})]})},Re=n(87),Be=n.n(Re),ze=n(327),He=n(337),Ge=n(162),Me=n.n(Ge),De=pe.a({postText:pe.b().max(300,"Must be 300 characters or less")}),We=r.a.memo((function(e){var t=e.addPostHandler;return Object(ne.jsx)("div",{style:{width:"100%"},children:Object(ne.jsx)(be.d,{initialValues:{postText:""},onSubmit:function(e,n){var a=n.setSubmitting;t(e.postText),a(!1)},validationSchema:De,children:function(e){var t=e.isSubmitting;return Object(ne.jsxs)(be.c,{className:Me.a.myPostsForm,children:[Object(ne.jsx)(He.a,{type:"submit",disabled:t,style:{margin:"0 0 5px 0"},children:Object(ne.jsx)(ze.a,{color:"primary"})}),Object(ne.jsx)("span",{children:"Create post"}),Object(ne.jsx)(be.b,{component:"textarea",name:"postText",type:"text",placeholder:"What's on your mind?"}),Object(ne.jsx)(be.a,{name:"postText"})]})}})})})),Ke=r.a.memo((function(e){var t=e.avatar,n=e.name,r=Object(Y.b)(),s=Object(Y.c)((function(e){return e.profilePage.posts})).map((function(e){return Object(ne.jsx)(Ae,{id:e.id,post:e.post,avatar:t,name:n,likesCount:e.likesCount},e.id)})),c=Object(a.useCallback)((function(e){var t=e.trim();t&&r({type:"ADD-POST",postText:t,id:Object(d.a)()})}),[r]);return Object(ne.jsxs)("div",{className:Be.a.myPosts,children:[Object(ne.jsx)("div",{className:Be.a.postForm,children:Object(ne.jsx)(We,{addPostHandler:c})}),Object(ne.jsx)("div",{className:Be.a.allPosts,children:s})]})})),Je=n(12),Xe=n(67),Ve=n.n(Xe),Ye=r.a.memo((function(e){var t=e.status,n=Object(a.useState)(!1),r=Object(Je.a)(n,2),s=r[0],c=r[1],l=Object(a.useState)(t),u=Object(Je.a)(l,2),d=u[0],j=u[1],b=Object(Y.b)(),p=Object(Y.c)((function(e){return e.app.appStatus})),f=function(){c(!1),b(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v("loading")),t.prev=1,t.next=4,h(e);case 4:0===(a=t.sent).data.resultCode?(n(N(e)),n(v("succeeded"))):g(a.data,n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),S(t.t0,n);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(d.trim()))};Object(a.useEffect)((function(){j(t)}),[t]);return Object(ne.jsxs)("div",{className:Ve.a.profileStatus,children:[s&&Object(ne.jsx)("div",{className:Ve.a.input,children:Object(ne.jsx)("input",{type:"text",onChange:function(e){j(e.currentTarget.value)},autoFocus:!0,onFocus:function(e){return e.currentTarget.select()},onBlur:f,value:d,onKeyPress:function(e){"Enter"===e.key&&f()},disabled:"loading"===p})}),!s&&Object(ne.jsx)("div",{className:Ve.a.span,onClick:function(){"loading"!==p&&c(!0)},children:t||Object(ne.jsx)("span",{className:Ve.a.noStatus,children:"type status"})})]})})),Ze=n(163),qe=n.p+"static/media/bgnode.225cbf7a.jpg",Qe=r.a.memo((function(){var e=Object(Y.b)(),t=Object(Y.c)((function(e){return e.profilePage.profile})),n=Object(Y.c)((function(e){return e.profilePage.status})),r=Object(Y.c)((function(e){return e.auth.data.id})),s=Object(re.g)().userId;s||(s=r),Object(a.useEffect)((function(){var t;e((t=s,function(){var e=Object(o.a)(i.a.mark((function e(n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(v("loading")),e.prev=1,e.next=4,f(t);case 4:a=e.sent,n({type:"SET-USER-PROFILE",profile:a.data}),n(v("succeeded")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),S(e.t0,n);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())),e(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v("loading")),t.prev=1,t.next=4,O(e);case 4:a=t.sent,n(N(a.data)),n(v("succeeded")),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),S(t.t0,n);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(s))}),[e,s]);var c=Ze.a.div(Ie||(Ie=Object(Te.a)(["\n        border-radius: 15px;\n        height: 70%;\n        width: 100%;\n        background-image: url(",");\n        background-position: center;\n        background-size: cover;\n        overflow: hidden;\n    "])),(function(e){return e.img}));return Object(ne.jsxs)("div",{className:Fe.a.profile,children:[Object(ne.jsxs)("div",{className:Fe.a.profileHeader,children:[(null===t||void 0===t?void 0:t.photos.large)?Object(ne.jsx)(c,{img:null===t||void 0===t?void 0:t.photos.large}):Object(ne.jsx)(c,{img:qe}),Object(ne.jsxs)("div",{className:Fe.a.headInfo,children:[Object(ne.jsx)("div",{className:Fe.a.avatar,children:Object(ne.jsx)(oe.a,{alt:null===t||void 0===t?void 0:t.fullName,src:null===t||void 0===t?void 0:t.photos.small,sx:{width:100,height:100,border:"4px solid white",position:"absolute",top:"-85px",left:"25px"}})}),Object(ne.jsxs)("div",{className:Fe.a.info,children:[Object(ne.jsxs)("div",{children:[Object(ne.jsx)("h4",{children:null===t||void 0===t?void 0:t.fullName}),Object(ne.jsx)(Ye,{status:n})]}),Object(ne.jsx)("div",{children:Object(ne.jsx)("button",{children:"ssss"})})]})]})]}),Object(ne.jsxs)("div",{className:Fe.a.profileContent,children:[Object(ne.jsx)("div",{className:Fe.a.about,children:Object(ne.jsx)(Le,{aboutMe:null===t||void 0===t?void 0:t.aboutMe})}),Object(ne.jsx)("div",{className:Fe.a.posts,children:Object(ne.jsx)(Ke,{avatar:null===t||void 0===t?void 0:t.photos.small,name:null===t||void 0===t?void 0:t.fullName})})]})]})})),$e=n(88),et=n.n($e),tt=r.a.memo((function(){return Object(ne.jsxs)("main",{className:et.a.main,children:[Object(ne.jsx)("div",{className:et.a.nav,children:Object(ne.jsx)(ye,{})}),Object(ne.jsx)("div",{className:et.a.content,children:Object(ne.jsxs)(re.c,{children:[Object(ne.jsx)(re.a,{path:"profile",element:Object(ne.jsx)(Qe,{}),children:Object(ne.jsx)(re.a,{path:":userId",element:Object(ne.jsx)(Qe,{})})}),Object(ne.jsx)(re.a,{path:"users",element:Object(ne.jsx)(Se,{})}),Object(ne.jsx)(re.a,{path:"*",element:Object(ne.jsx)("div",{children:"404"})}),Object(ne.jsx)(re.a,{path:"social-network",element:Object(ne.jsx)(Se,{})}),Object(ne.jsx)(re.a,{path:"/",element:Object(ne.jsx)(Se,{})})]})})]})})),nt=n(328),at=n(331),rt=a.forwardRef((function(e,t){return Object(ne.jsx)(at.a,Object(u.a)({elevation:6,ref:t,variant:"filled"},e))}));function st(){var e=Object(Y.b)(),t=Object(Y.c)((function(e){return e.app.error})),n=null!==t,a=function(t,n){"clickaway"!==n&&e(x(null))};return Object(ne.jsx)(nt.a,{open:n,autoHideDuration:6e3,onClose:a,anchorOrigin:{horizontal:"center",vertical:"bottom"},children:Object(ne.jsx)(rt,{onClose:a,severity:"error",sx:{width:"100%"},children:t})})}var ct=n(166),it=n.n(ct),ot=n(89),lt=n.n(ot),ut=pe.a({email:pe.b().email("Invalid email address").required("Required"),password:pe.b().required("No password provided").min(8,"Password is too short - should be 8 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")}),dt=function(){var e=Object(Y.b)(),t=Object(Y.c)((function(e){return e.app.appStatus})),n=function(t,n,a){e(function(e,t,n){return function(){var a=Object(o.a)(i.a.mark((function a(r){var s;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(v("loading")),a.prev=1,a.next=4,R(e,t,n);case 4:0===(s=a.sent).data.resultCode?(r(G()),r(v("succeeded"))):g(s.data,r),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),S(a.t0,r);case 11:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,n,a))};return Object(ne.jsx)("div",{children:Object(ne.jsx)(be.d,{initialValues:{email:"",password:"",rememberMe:!1},validationSchema:ut,onSubmit:function(e,t){var a=t.setSubmitting;n(e.email,e.password,e.rememberMe),a(!1)},children:function(e){e.isSubmitting;return Object(ne.jsxs)(be.c,{className:lt.a.loginForm,children:[Object(ne.jsx)(be.b,{name:"email",type:"email",placeholder:"Email"}),Object(ne.jsx)(be.b,{name:"password",type:"password",placeholder:"Password"}),Object(ne.jsxs)("div",{className:lt.a.remember,children:[Object(ne.jsx)("div",{children:Object(ne.jsx)(be.b,{name:"rememberMe",type:"checkbox"})}),Object(ne.jsx)("div",{children:Object(ne.jsx)("label",{htmlFor:"rememberMe",children:"Remember me"})})]}),Object(ne.jsx)("button",{className:lt.a.loginBtn,type:"submit",disabled:"loading"===t,children:"Login"})]})}})})},jt=r.a.memo((function(){return"loading"===Object(Y.c)((function(e){return e.app.appStatus}))?Object(ne.jsx)(ne.Fragment,{}):Object(ne.jsxs)("div",{className:it.a.login,children:[Object(ne.jsx)("h1",{children:"Login into your account"}),Object(ne.jsx)(dt,{})]})})),bt=function(){var e=Object(Y.b)(),t=Object(Y.c)((function(e){return e.app.initialization}));return Object(a.useEffect)((function(){e(G())}),[e]),Object(ne.jsxs)("div",{className:V.a.app,children:[Object(ne.jsx)(st,{}),t?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ae,{}),Object(ne.jsx)(tt,{})]}):Object(ne.jsx)(ne.Fragment,{children:Object(ne.jsx)(jt,{})})]})},pt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,339)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};J.a.render(Object(ne.jsx)(ie.a,{children:Object(ne.jsx)(Y.a,{store:W,children:Object(ne.jsx)(bt,{})})}),document.getElementById("root")),pt()},42:function(e,t,n){e.exports={profile:"Profile_profile__2bhSD",profileHeader:"Profile_profileHeader__3SFge",headInfo:"Profile_headInfo__S7XWr",avatar:"Profile_avatar__3EgOt",info:"Profile_info__1IsRk",profileContent:"Profile_profileContent__3YG9w",about:"Profile_about__YHcuh",posts:"Profile_posts__34jW_"}},49:function(e,t,n){e.exports={searchForm:"UsersSearchForm_searchForm__14s5Z",inputBlock:"UsersSearchForm_inputBlock__2-Nk8",searchBtn:"UsersSearchForm_searchBtn__10KSX",icon:"UsersSearchForm_icon__2zzXz",selectBlock:"UsersSearchForm_selectBlock__3WXoG",select:"UsersSearchForm_select__36IBy"}},56:function(e,t,n){e.exports={header:"Header_header__22rC9",container:"Header_container__2bcQR",title:"Header_title__2UK3R",loginInfo:"Header_loginInfo__12Qmf",logoutBtn:"Header_logoutBtn__3dOFJ"}},66:function(e,t,n){e.exports={users:"User_users__2zBa5",user:"User_user__1zDCz",followBtn:"User_followBtn__1C6TZ",unfollowBtn:"User_unfollowBtn__2TDO2"}},67:function(e,t,n){e.exports={profileStatus:"ProfileStatus_profileStatus__1j3HN",span:"ProfileStatus_span__2LAS-",noStatus:"ProfileStatus_noStatus__3-4mN"}},85:function(e,t,n){e.exports={users:"Users_users__nB4Rk",searchBlock:"Users_searchBlock__1Qm7o",pagination:"Users_pagination__1MrqR"}},86:function(e,t,n){e.exports={navbar:"Navbar_navbar__RW2mG"}},87:function(e,t,n){e.exports={myPosts:"MyPosts_myPosts__2o7U5",postForm:"MyPosts_postForm__amRnx"}},88:function(e,t,n){e.exports={main:"Main_main__1DGW4",nav:"Main_nav__3Omg5",content:"Main_content__3XygP"}},89:function(e,t,n){e.exports={loginForm:"LoginForm_loginForm__3VhNT",remember:"LoginForm_remember__1yzVo",loginBtn:"LoginForm_loginBtn__2jpEX"}}},[[299,1,2]]]);
//# sourceMappingURL=main.d88ede53.chunk.js.map