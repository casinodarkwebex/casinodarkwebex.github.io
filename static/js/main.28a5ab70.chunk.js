(this.webpackJsonpdsoh3=this.webpackJsonpdsoh3||[]).push([[0],{166:function(e,t,a){e.exports=a(256)},255:function(e,t,a){e.exports=a.p+"static/media/covidimg.beb9d6d4.svg"},256:function(e,t,a){"use strict";a.r(t);a(167),a(193),a(195),a(196),a(198),a(199),a(200),a(201),a(202),a(203),a(204),a(205),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235);var l=a(0),n=a.n(l),r=a(41),c=a.n(r),m=a(25),i=a.n(m),o=a(87),s=a(88),d=a(89),E=a(42),u=a(117),h=a(116),b=a(1),g=(a(254),a(98)),y=a.n(g),f=a(97),p=a.n(f),v=a(104),k=a.n(v),z=a(111),C=a.n(z),S=a(112),w=a.n(S),_=a(113),I=a.n(_),j=a(114),A=a.n(j),P=a(105),B=a.n(P),V=a(106),x=a.n(V),Y=a(107),Q=a.n(Y),X=a(108),K=a.n(X),W=a(109),M=a.n(W),G=a(110),H=a.n(G),R=a(115),D=a.n(R),O=a(99),F=a.n(O),J=a(103),q=a.n(J),T=a(101),U=a.n(T),L=a(100),Z=a.n(L),N=a(102),$=a.n(N),ee=(a(255),"linear-gradient(90deg, #ffb73d 0%, #ffa000 100%)"),te=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).state={activeStory:"main",tooltip:!0,scheme:"bright_light",lights:["bright_light","client_light"],activeModal:null,modalHistory:[]},l.modalBack=function(){l.setActiveModal(l.state.modalHistory[l.state.modalHistory.length-2])},l.onStoryChange=l.onStoryChange.bind(Object(E.a)(l)),l}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe((function(t){var a=t.detail,l=a.type,n=a.data;"VKWebAppUpdateConfig"===l&&e.camelCase(n.scheme)}))}},{key:"camelCase",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this.state.lights.includes(e);t&&(Object(o.a)("isLight"),a=!a),this.setState({scheme:a?"bright_light":"space_gray"}),i.a.send("VKWebAppSetViewSettings",{status_bar_style:a?"dark":"light",action_bar_color:a?"#000":"#ffff"})}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"render",value:function(){var e=this;b.q,this.state.activeModal,this.modalBack,b.o,b.p;return n.a.createElement(b.g,{isWebView:!0,scheme:this.state.scheme},n.a.createElement(b.i,{activeStory:this.state.activeStory,tabbar:n.a.createElement(b.y,null,n.a.createElement(b.z,{onClick:this.onStoryChange,selected:"main"===this.state.activeStory,"data-story":"main",text:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"},n.a.createElement(p.a,null)),n.a.createElement(b.z,{onClick:this.onStoryChange,selected:"schedule"===this.state.activeStory,"data-story":"schedule",text:"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},n.a.createElement(y.a,null)),n.a.createElement(b.z,{onClick:this.onStoryChange,selected:"zvonki"===this.state.activeStory,"data-story":"zvonki",text:"\u0417\u0432\u043e\u043d\u043a\u0438"},n.a.createElement(F.a,null)),n.a.createElement(b.z,{onClick:this.onStoryChange,selected:"alert"===this.state.activeStory,"data-story":"alert",text:"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f"},n.a.createElement(Z.a,null)),n.a.createElement(b.z,{onClick:this.onStoryChange,selected:"more"===this.state.activeStory,"data-story":"more",text:"\u0415\u0449\u0451"},n.a.createElement(U.a,null)))},n.a.createElement(b.B,{id:"main",activePanel:"main"},n.a.createElement(b.r,{id:"main"},n.a.createElement(b.s,null,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),n.a.createElement(b.e,null,n.a.createElement(b.d,{size:"l",mode:"outline"},n.a.createElement("div",{style:{height:2}}),n.a.createElement(b.m,{mode:"secondary"},"\u0422\u043e\u0447\u043a\u0430 \u0420\u043e\u0441\u0442\u0430 \u0432 \u043d\u0430\u0448\u0435\u0439 \u0448\u043a\u043e\u043b\u0435!"),n.a.createElement(b.k,{onClick:function(){return i.a.send("VKWebAppShowImages",{images:["https://sun9-24.userapi.com/6eKS35R0W1YCE6gFW17XPEy8woXz_20kh0ezDQ/Gh0EKyjYt-c.jpg","https://sun9-66.userapi.com/eH2EI17YygtRbhmJBtvKJbVdbXcyVQ67BL_oWQ/YzBg2cZPGXM.jpg","https://sun9-35.userapi.com/V-_5ov185Gnn6IHGAYyWHtMVPg9XgLAO1zHeqQ/AcQA_lzAY8o.jpg","https://sun9-42.userapi.com/bYQjCA2YaeIDCRni_AlF0-07KwXR2xzkqyGPlw/6UdsTedfMzQ.jpg","https://sun9-61.userapi.com/ybru3CAged6r0tIuiVbhctyvIikBBc5xexerwA/mGKbLqeX6s8.jpg"]})},slideWidth:"100%",style:{height:200},bullets:"dark"},n.a.createElement(b.a,{size:{width:1440,height:720},align:"center",frameborder:"0",mode:"image",src:"https://sun9-24.userapi.com/6eKS35R0W1YCE6gFW17XPEy8woXz_20kh0ezDQ/Gh0EKyjYt-c.jpg"}),n.a.createElement(b.a,{size:{width:1440,height:720},align:"center",frameborder:"0",mode:"image",src:"https://sun9-66.userapi.com/eH2EI17YygtRbhmJBtvKJbVdbXcyVQ67BL_oWQ/YzBg2cZPGXM.jpg"}),n.a.createElement(b.a,{size:{width:1440,height:720},align:"center",frameborder:"0",mode:"image",src:"https://sun9-35.userapi.com/V-_5ov185Gnn6IHGAYyWHtMVPg9XgLAO1zHeqQ/AcQA_lzAY8o.jpg"}),n.a.createElement(b.a,{size:{width:1440,height:720},align:"center",frameborder:"0",mode:"image",src:"https://sun9-42.userapi.com/bYQjCA2YaeIDCRni_AlF0-07KwXR2xzkqyGPlw/6UdsTedfMzQ.jpg"}),n.a.createElement(b.a,{size:{width:1440,height:720},align:"center",frameborder:"0",mode:"image",src:"https://sun9-61.userapi.com/ybru3CAged6r0tIuiVbhctyvIikBBc5xexerwA/mGKbLqeX6s8.jpg"})),n.a.createElement(b.m,{mode:"secondary"},"29 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"))),n.a.createElement("br",null),n.a.createElement(b.e,null,n.a.createElement(b.d,{size:"l",mode:"outline"},n.a.createElement("div",{style:{height:2}}),n.a.createElement(b.m,{mode:"secondary"},'\u041c\u0430\u0440\u0430\u0444\u043e\u043d \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u0439 \u0446\u0435\u043d\u0442\u0440\u043e\u0432 "\u0422\u043e\u0447\u043a\u0430 \u0420\u043e\u0441\u0442\u0430"'),n.a.createElement("iframe",{src:"https://vk.com/video_ext.php?oid=-30558759&id=456240570&hash=454de247a65dc2fa",width:"100%",height:"175",frameborder:"0",allowfullscreen:!0}),n.a.createElement(b.m,{mode:"secondary"},"29 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f"))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement(b.B,{id:"schedule",activePanel:"schedule"},n.a.createElement(b.r,{id:"schedule"},n.a.createElement(b.s,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),n.a.createElement("br",null),n.a.createElement(b.m,{mode:"secondary"},"7 \u043e\u043a\u0442\u044f\u0431\u0440\u044f. \u0421\u0440\u0435\u0434\u0430."),n.a.createElement("br",null),n.a.createElement(b.e,null,n.a.createElement(b.d,{size:"l",mode:"outline"},n.a.createElement("div",{style:{height:2}}),n.a.createElement(b.m,{mode:"secondary"},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043a\u043b\u0430\u0441\u0441:"),n.a.createElement(b.b,{onClick:this.onStoryChange,selected:"room10"===this.state.activeStory,"data-story":"room10",before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"10")),header:"\u041a\u043b\u0430\u0441\u0441"}),n.a.createElement(b.b,{onClick:this.onStoryChange,selected:"room11"===this.state.activeStory,"data-story":"room11",before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"11")),header:"\u041a\u043b\u0430\u0441\u0441"}))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement(b.B,{id:"alert",activePanel:"alert"},n.a.createElement(b.r,{id:"alert"},n.a.createElement(b.s,null,"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f"),n.a.createElement(b.u,{icon:n.a.createElement($.a,null),stretched:!0},"\u041d\u0435\u0442 \u043d\u043e\u0432\u044b\u0445",n.a.createElement("br",null),"\u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0439!"))),n.a.createElement(b.B,{id:"room10",activePanel:"room10"},n.a.createElement(b.r,{id:"room10"},n.a.createElement(b.s,null,"10 \u041a\u043b\u0430\u0441\u0441"),n.a.createElement(b.n,null,n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u041d\u0435\u0442 \u0443\u0440\u043e\u043a\u0430")},"1 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u0424\u0438\u0437\u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430")},"2 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u041b\u0438\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430")},"3 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439")},"4 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430")},"5 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u0418\u0441\u0442\u043e\u0440\u0438\u044f")},"6 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u0424\u0438\u0437\u0438\u043a\u0430")},"7 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439")},"8 \u0443\u0440\u043e\u043a")))),n.a.createElement(b.B,{id:"room11",activePanel:"room11"},n.a.createElement(b.r,{id:"room11"},n.a.createElement(b.s,null,"11 \u041a\u043b\u0430\u0441\u0441"),n.a.createElement(b.n,null,n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u041d\u0435\u0442 \u0443\u0440\u043e\u043a\u0430")},"1 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u042d\u043b\u0435\u043a\u0442\u0438\u0432 \u0424\u0438\u0437\u0438\u043a\u0430")},"2 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u0418\u0441\u0442\u043e\u0440\u0438\u044f")},"3 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439")},"4 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f")},"5 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u042f\u0437\u044b\u043a")},"6 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,null,"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430")},"7 \u0443\u0440\u043e\u043a")))),n.a.createElement(b.B,{id:"onlinednevnik",activePanel:"onlinednevnik"},n.a.createElement(b.r,{id:"onlinednevnik"},n.a.createElement(b.s,null,"\u041e\u043d\u043b\u0430\u0439\u043d \u0414\u043d\u0435\u0432\u043d\u0438\u043a"))),n.a.createElement(b.B,{id:"zvonki",activePanel:"zvonki"},n.a.createElement(b.r,{id:"zvonki"},n.a.createElement(b.s,null,"\u0420\u0430\u0441\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0432\u043e\u043d\u043a\u043e\u0432"),n.a.createElement("br",null),n.a.createElement(b.e,null,n.a.createElement(b.d,{size:"l",mode:"shadow"},n.a.createElement("div",{style:{height:1}}),n.a.createElement(b.x,{before:n.a.createElement(b.a,{style:{background:"var(--accent)"},size:28,shadow:!1},n.a.createElement(q.a,{fill:"var(--white)"})),description:"\u0417\u0432\u043e\u043d\u043a\u0438"}),n.a.createElement(b.n,null,n.a.createElement(b.f,{indicator:n.a.createElement(b.h,{mode:"primary"},"8:30-9:10")},"1 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,{mode:"primary"},"9:25-10:05")},"2 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,{mode:"primary"},"10:20-11:00")},"3 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,{mode:"primary"},"11:15-11:55")},"4 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,{mode:"primary"},"12:10-12:50")},"5 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,{mode:"primary"},"13:05-13:45")},"6 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,{mode:"primary"},"13:50-14:30")},"7 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,{mode:"primary"},"14:45-15:15")},"8 \u0443\u0440\u043e\u043a"),n.a.createElement(b.f,{indicator:n.a.createElement(b.h,{mode:"primary"},"15:20-16:00")},"9 \u0443\u0440\u043e\u043a")))))),n.a.createElement(b.B,{id:"devlock",activePanel:"devlock"},n.a.createElement(b.r,{id:"devlock"},n.a.createElement(b.s,null,"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430"))),n.a.createElement(b.B,{id:"newunit",activePanel:"newunit"},n.a.createElement(b.r,{id:"newunit"},n.a.createElement(b.s,null,"\u0425\u043e\u0447\u0443 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0443!"),n.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSdOE91rzD4DfShBwN1WvRQUFsM_GSWHfsiu7mtyr70CD12tHA/viewform?embedded=true",width:"100%",height:"650",frameborder:"0",marginheight:"0",marginwidth:"0"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u2026"))),n.a.createElement(b.B,{id:"developers",activePanel:"developers"},n.a.createElement(b.r,{id:"developers"},n.a.createElement(b.s,null,"\u041d\u0430\u0448\u0430 \u041a\u043e\u043c\u0430\u043d\u0434\u0430"),n.a.createElement(b.v,{disabled:!0,before:n.a.createElement(b.a,{size:72,src:"https://sun9-38.userapi.com/6CGDMTJGiJ3avU1t-lXV6MuyrDp6Q_lTJMjdnQ/VaKbPbYxuoI.jpg"}),caption:"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a/\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440, \u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u043e",actions:n.a.createElement(n.a.Fragment,null,n.a.createElement(b.c,{href:"https://vk.com/e.gordeev0",target:"_blank"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"))},"\u0415\u0433\u043e\u0440 \u041c\u0430\u043a\u0441\u0438\u043c\u0435\u043d\u043a\u043e"),n.a.createElement("br",null),n.a.createElement(b.v,{disabled:!0,before:n.a.createElement(b.a,{size:72,src:"https://sun1-93.userapi.com/c857520/v857520273/204dd1/t9vXZR83Xak.jpg"}),caption:"\u0421\u0442\u0440\u0430\u0448\u0438\u0439 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c, \u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u043e",actions:n.a.createElement(n.a.Fragment,null,n.a.createElement(b.c,{href:"https://vk.com/gnitsugsid",target:"_blank"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"))},"\u041c\u0430\u043a\u0441\u0438\u043c \u0410\u043b\u0451\u0445\u0438\u043d"))),n.a.createElement(b.B,{id:"covid",activePanel:"covid"},n.a.createElement(b.r,{id:"covid"},n.a.createElement(b.s,{left:n.a.createElement(b.t,{onClick:this.onStoryChange,selected:"more"===this.state.activeStory,"data-story":"more"})},"COVID-19"),n.a.createElement("br",null),n.a.createElement(b.e,null,n.a.createElement(b.d,{size:"l",mode:"shadow"},n.a.createElement("div",{style:{height:10}}),n.a.createElement(b.u,{icon:n.a.createElement(k.a,null),header:"\u041d\u043e\u0441\u0438\u0442\u0435 \u043c\u0430\u0441\u043a\u0443 \u2013 \u0441\u043f\u0430\u0441\u0430\u0439\u0442\u0435 \u0436\u0438\u0437\u043d\u0438"},n.a.createElement("br",null),"\u041d\u043e\u0441\u0438\u0442\u0435 \u043c\u0430\u0441\u043a\u0443",n.a.createElement("br",null),"\u0427\u0430\u0449\u0435 \u043c\u043e\u0439\u0442\u0435 \u0440\u0443\u043a\u0438",n.a.createElement("br",null),"\u0421\u043e\u0431\u043b\u044e\u0434\u0430\u0439\u0442\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0443\u044e \u0434\u0438\u0441\u0442\u0430\u043d\u0446\u0438\u044e",n.a.createElement("br",null)))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement(b.A,{mode:"light",text:"\u0421\u0434\u0435\u043b\u0430\u0439 \u0441\u0432\u0430\u0439\u043f, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435!",isShown:this.state.tooltip,onClose:function(){return e.setState({tooltip:!1})},offsetX:10},n.a.createElement(b.k,{slideWidth:"80%",align:"center",style:{height:150},bullets:"dark"},n.a.createElement(b.u,{icon:n.a.createElement(B.a,null),header:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u043d\u0438\u0439"}),n.a.createElement(b.u,{icon:n.a.createElement(x.a,null),header:"\u041f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043e \u0442\u0435\u0441\u0442\u043e\u0432"},"47,2 \u043c\u043b\u043d"),n.a.createElement(b.u,{icon:n.a.createElement(Q.a,null),header:"\u0412\u044b\u044f\u0432\u043b\u0435\u043d\u043e \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0448\u0438\u0445"},"1 204 502"),n.a.createElement(b.u,{icon:n.a.createElement(K.a,null),header:"\u0417\u0430\u0431\u043e\u043b\u0435\u043b\u043e \u0437\u0430 \u0441\u0443\u0442\u043a\u0438"},"9 859"),n.a.createElement(b.u,{icon:n.a.createElement(M.a,null),header:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a \u0432\u044b\u0437\u0434\u043e\u0440\u043e\u0432\u0435\u043b\u043e"},"975 859"),n.a.createElement(b.u,{icon:n.a.createElement(H.a,null),header:"\u0427\u0435\u043b\u043e\u0432\u0435\u043a \u0443\u043c\u0435\u0440\u043b\u043e"},"21 251"))),n.a.createElement("br",null),n.a.createElement("div",{style:{height:10}}),n.a.createElement(b.b,{before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"1")),header:"\u0414\u0435\u0440\u0436\u0438\u0442\u0435 \u0440\u0443\u043a\u0438 \u0432 \u0447\u0438\u0441\u0442\u043e\u0442\u0435 \u2013 \u0447\u0430\u0441\u0442\u043e \u043c\u043e\u0439\u0442\u0435 \u0438\u0445 \u0432\u043e\u0434\u043e\u0439 \u0441 \u043c\u044b\u043b\u043e\u043c \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c 20 \u0441\u0435\u043a\u0443\u043d\u0434, \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043d\u0430\u0441\u0443\u0445\u043e \u0432\u044b\u0442\u0438\u0440\u0430\u0439\u0442\u0435 \u043e\u0434\u043d\u043e\u0440\u0430\u0437\u043e\u0432\u044b\u043c \u0431\u0443\u043c\u0430\u0436\u043d\u044b\u043c \u043f\u043e\u043b\u043e\u0442\u0435\u043d\u0446\u0435\u043c. \u041a\u0440\u0430\u0439\u043d\u0435 \u0446\u0435\u043b\u0435\u0441\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u043e \u0438\u043c\u0435\u0442\u044c \u043f\u0440\u0438 \u0441\u0435\u0431\u0435 \u0430\u043d\u0442\u0438\u0441\u0435\u043f\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0441\u0430\u043b\u0444\u0435\u0442\u043a\u0438 \u0438\u043b\u0438 \u0436\u0438\u0434\u043a\u0438\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 (\u0433\u0435\u043b\u0438, \u0441\u043f\u0440\u0435\u0438 \u0438 \u0434\u0440.). \u0422\u0430\u043a \u0432\u0441\u0435\u0433\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u0447\u0438\u0441\u0442\u043e\u0442\u0443 \u0440\u0443\u043a \u0434\u0430\u0436\u0435 \u043f\u0440\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0438\u0445 \u0432\u044b\u043c\u044b\u0442\u044c."}),n.a.createElement("br",null),n.a.createElement(b.b,{before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"2")),header:"\u0421\u0442\u0430\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0435 \u043a\u0430\u0441\u0430\u0442\u044c\u0441\u044f \u0440\u0442\u0430, \u043d\u043e\u0441\u0430 \u0438\u043b\u0438 \u0433\u043b\u0430\u0437 \u043d\u0435\u043c\u044b\u0442\u044b\u043c\u0438 \u0440\u0443\u043a\u0430\u043c\u0438 (\u043e\u0431\u044b\u0447\u043d\u043e \u0442\u0430\u043a\u0438\u0435 \u043f\u0440\u0438\u043a\u043e\u0441\u043d\u043e\u0432\u0435\u043d\u0438\u044f \u043d\u0435\u043e\u0441\u043e\u0437\u043d\u0430\u043d\u043d\u043e \u0441\u043e\u0432\u0435\u0440\u0448\u0430\u044e\u0442\u0441\u044f \u043d\u0430\u043c\u0438 \u0432 \u0441\u0440\u0435\u0434\u043d\u0435\u043c 15 \u0440\u0430\u0437 \u0432 \u0447\u0430\u0441)."}),n.a.createElement("br",null),n.a.createElement(b.b,{before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"3")),header:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043c\u0430\u0441\u043a\u0443 \u043f\u0440\u0438 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0438 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0445 \u043c\u0435\u0441\u0442 \u0438 \u0435\u0441\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0435\u0441\u044c \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043e\u043c. \u041f\u043e\u043c\u043d\u0438\u0442\u0435, \u043c\u0430\u0441\u043a\u0443 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043c\u0435\u043d\u044f\u0442\u044c \u043a\u0430\u0436\u0434\u044b\u0435 \u0434\u0432\u0430-\u0442\u0440\u0438 \u0447\u0430\u0441\u0430!"}),n.a.createElement("br",null),n.a.createElement(b.b,{before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"4")),header:"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e \u043e\u0447\u0438\u0449\u0430\u0439\u0442\u0435 \u0438 \u0434\u0435\u0437\u0438\u043d\u0444\u0438\u0446\u0438\u0440\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0435\u0440\u0445\u043d\u043e\u0441\u0442\u0438 \u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u043a \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0432\u044b \u043f\u0440\u0438\u043a\u0430\u0441\u0430\u0435\u0442\u0435\u0441\u044c (\u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 \u0438\u043b\u0438 \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0430, \u044d\u043a\u0440\u0430\u043d \u0441\u043c\u0430\u0440\u0442\u0444\u043e\u043d\u0430, \u043f\u0443\u043b\u044c\u0442\u044b, \u0432\u044b\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u0438 \u0438 \u0434\u0432\u0435\u0440\u043d\u044b\u0435 \u0440\u0443\u0447\u043a\u0438). \u0414\u043b\u044f \u0431\u043e\u0440\u044c\u0431\u044b \u0441 \u0432\u0438\u0440\u0443\u0441\u0430\u043c\u0438 \u043b\u0443\u0447\u0448\u0435\u0433\u043e \u0432\u0441\u0435\u0433\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0430\u043b\u0444\u0435\u0442\u043a\u0438 \u0438 \u0433\u0435\u043b\u0438 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0441\u043f\u0438\u0440\u0442\u0430."}),n.a.createElement("br",null),n.a.createElement(b.b,{before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"5")),header:"\u041d\u043e\u0441\u0438\u0442\u0435 \u0441 \u0441\u043e\u0431\u043e\u0439 \u043e\u0434\u043d\u043e\u0440\u0430\u0437\u043e\u0432\u044b\u0435 \u0441\u0430\u043b\u0444\u0435\u0442\u043a\u0438 \u0438 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u0440\u0438\u043a\u0440\u044b\u0432\u0430\u0439\u0442\u0435 \u043d\u043e\u0441 \u0438 \u0440\u043e\u0442, \u043a\u043e\u0433\u0434\u0430 \u0432\u044b \u043a\u0430\u0448\u043b\u044f\u0435\u0442\u0435 \u0438\u043b\u0438 \u0447\u0438\u0445\u0430\u0435\u0442\u0435. \u041f\u043e\u0441\u043b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u0445 \u043d\u0430\u0434\u043e \u0441\u0440\u0430\u0437\u0443 \u0443\u0442\u0438\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c."}),n.a.createElement("br",null),n.a.createElement(b.b,{before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"6")),header:"\u041d\u0435 \u0435\u0448\u044c\u0442\u0435 \u0435\u0434\u0443 (\u043e\u0440\u0435\u0448\u043a\u0438, \u0447\u0438\u043f\u0441\u044b, \u043f\u0435\u0447\u0435\u043d\u044c\u0435 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043d\u0435\u043a\u0438) \u0438\u0437 \u043e\u0431\u0449\u0438\u0445 \u0443\u043f\u0430\u043a\u043e\u0432\u043e\u043a \u0438\u043b\u0438 \u043f\u043e\u0441\u0443\u0434\u044b, \u0435\u0441\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043b\u044e\u0434\u0438 \u043f\u043e\u0433\u0440\u0443\u0436\u0430\u043b\u0438 \u0432 \u043d\u0438\u0445 \u0441\u0432\u043e\u0438 \u043f\u0430\u043b\u044c\u0446\u044b."}),n.a.createElement("br",null),n.a.createElement(b.b,{before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"7")),header:"\u0427\u0430\u0441\u0442\u043e \u043f\u0440\u043e\u0432\u0435\u0442\u0440\u0438\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u043c\u0435\u0449\u0435\u043d\u0438\u044f, \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e \u0434\u0435\u043b\u0430\u0439\u0442\u0435 \u0432\u043b\u0430\u0436\u043d\u0443\u044e \u0443\u0431\u043e\u0440\u043a\u0443."}),n.a.createElement("br",null),n.a.createElement(b.b,{before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"8")),header:"\u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0439\u0442\u0435 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430, \u043d\u0435 \u043a\u0430\u0441\u0430\u044f\u0441\u044c. \u041e\u0442\u0434\u0430\u0439\u0442\u0435 \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0435\u043d\u0438\u0435 \u0436\u0435\u0441\u0442\u0443 \u0438\u043b\u0438 \u043f\u043e\u043c\u0430\u0448\u0438\u0442\u0435 \u0440\u0443\u043a\u043e\u0439 \u0432\u043c\u0435\u0441\u0442\u043e \u0440\u0443\u043a\u043e\u043f\u043e\u0436\u0430\u0442\u0438\u044f."}),n.a.createElement("br",null),n.a.createElement(b.b,{before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"9")),header:"\u041e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0439\u0442\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u043d\u043e\u0441\u0438\u0442\u0435 \u0438\u0437 \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0430. \u041e\u0432\u043e\u0449\u0438 \u0438 \u0444\u0440\u0443\u043a\u0442\u044b \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u043c\u044b\u0442\u044c, \u0430 \u0442\u043e\u0432\u0430\u0440\u044b \u0432 \u0443\u043f\u0430\u043a\u043e\u0432\u043a\u0430\u0445 \u043f\u0440\u043e\u043c\u044b\u0442\u044c \u0432\u043e\u0434\u043e\u0439 \u0441 \u043c\u044b\u043b\u043e\u043c, \u043b\u0438\u0431\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0430\u043d\u0442\u0438\u0431\u0430\u043a\u0442\u0435\u0440\u0438\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0441\u0430\u043b\u0444\u0435\u0442\u043a\u0430\u043c\u0438."}),n.a.createElement("br",null),n.a.createElement(b.w,null),n.a.createElement(b.m,{mode:"secondary"},"\u0421\u0438\u043c\u043f\u0442\u043e\u043c\u0430\u0442\u0438\u043a\u0430"),n.a.createElement("br",null),n.a.createElement(b.b,{before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"1")),header:"\u0427\u0430\u0441\u0442\u043e \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u044b\u0435 \u0441\u0438\u043c\u043f\u0442\u043e\u043c\u044b:",subheader:n.a.createElement(n.a.Fragment,null,"\u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u044b \u0442\u0435\u043b\u0430;",n.a.createElement("br",null),"\u0441\u0443\u0445\u043e\u0439 \u043a\u0430\u0448\u0435\u043b\u044c;",n.a.createElement("br",null),"\u0443\u0442\u043e\u043c\u043b\u044f\u0435\u043c\u043e\u0441\u0442\u044c.")}),n.a.createElement(b.b,{before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"2")),header:"\u0423 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u043d\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0433\u0443\u0442 \u0442\u0430\u043a\u0436\u0435 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0442\u044c\u0441\u044f:",subheader:n.a.createElement(n.a.Fragment,null,"\u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0431\u043e\u043b\u0435\u0432\u044b\u0435 \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u044f;",n.a.createElement("br",null),"\u0431\u043e\u043b\u044c \u0432 \u0433\u043e\u0440\u043b\u0435;",n.a.createElement("br",null),"\u0434\u0438\u0430\u0440\u0435\u044f;",n.a.createElement("br",null),"\u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0442\u0438\u0432\u0438\u0442;",n.a.createElement("br",null),"\u0433\u043e\u043b\u043e\u0432\u043d\u0430\u044f \u0431\u043e\u043b\u044c;",n.a.createElement("br",null),"\u043f\u043e\u0442\u0435\u0440\u044f \u043e\u0431\u043e\u043d\u044f\u043d\u0438\u044f \u0438 \u0432\u043a\u0443\u0441\u043e\u0432\u044b\u0445 \u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0439;",n.a.createElement("br",null),"\u0441\u044b\u043f\u044c \u043d\u0430 \u043a\u043e\u0436\u0435 \u0438\u043b\u0438 \u0434\u0435\u043f\u0438\u0433\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043d\u043e\u0433\u0442\u0435\u0439 \u043d\u0430 \u0440\u0443\u043a\u0430\u0445 \u0438 \u043d\u043e\u0433\u0430\u0445.")}),n.a.createElement(b.b,{before:n.a.createElement(b.a,{size:28,style:{backgroundImage:ee}},n.a.createElement("span",{style:{color:"#fff"}},"3")),header:"\u0421\u0438\u043c\u043f\u0442\u043e\u043c\u044b \u0442\u044f\u0436\u0435\u043b\u043e\u0439 \u0444\u043e\u0440\u043c\u044b \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u043d\u0438\u044f:",subheader:n.a.createElement(n.a.Fragment,null,"\u0437\u0430\u0442\u0440\u0443\u0434\u043d\u0435\u043d\u043d\u043e\u0435 \u0434\u044b\u0445\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u043e\u0434\u044b\u0448\u043a\u0430;",n.a.createElement("br",null),"\u043e\u0449\u0443\u0449\u0435\u043d\u0438\u0435 \u0441\u0434\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438\u043b\u0438 \u0431\u043e\u043b\u044c \u0432 \u0433\u0440\u0443\u0434\u043d\u043e\u0439 \u043a\u043b\u0435\u0442\u043a\u0435;",n.a.createElement("br",null),"\u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0435 \u0440\u0435\u0447\u0438 \u0438\u043b\u0438 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439.")}),n.a.createElement("br",null),n.a.createElement(b.e,null,n.a.createElement(b.d,{size:"l"},n.a.createElement("div",{style:{height:1}}),n.a.createElement(b.u,{icon:n.a.createElement(C.a,null),header:"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u044e\u0442\u0441\u044f \u0441\u0438\u043c\u043f\u0442\u043e\u043c\u044b \u0442\u044f\u0436\u0435\u043b\u043e\u0439 \u0444\u043e\u0440\u043c\u044b \u0437\u0430\u0431\u043e\u043b\u0435\u0432\u0430\u043d\u0438\u044f, \u043d\u0435\u0437\u0430\u043c\u0435\u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u0437\u0430 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u0441\u043a\u043e\u0439 \u043f\u043e\u043c\u043e\u0449\u044c\u044e. \u041f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u043f\u043e\u0441\u0435\u0449\u0430\u0442\u044c \u043a\u043b\u0438\u043d\u0438\u043a\u0443 \u0438\u043b\u0438 \u0431\u043e\u043b\u044c\u043d\u0438\u0446\u0443, \u043f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u0435 \u0438 \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u0442\u0435 \u043e \u0441\u0432\u043e\u0435\u043c \u0432\u0438\u0437\u0438\u0442\u0435."},n.a.createElement("br",null),n.a.createElement(b.e,null,n.a.createElement(b.d,{size:"l",mode:"shadow"},n.a.createElement("div",{style:{height:10}}),n.a.createElement(b.j,null,n.a.createElement(b.c,{size:"xl",mode:"outline",href:"tel:+8-800-2000-122",target:"_blank"},"\u0415\u0434\u0438\u043d\u0430\u044f \u0433\u043e\u0440\u044f\u0447\u0430\u044f \u043b\u0438\u043d\u0438\u044f"),n.a.createElement(b.c,{size:"xl",href:"tel:+8-352-523-32-53",target:"_blank"},'\u0413\u0411\u0423 "\u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u0441\u043a\u0430\u044f \u0426\u0420\u0411"'),n.a.createElement(b.c,{size:"xl",href:"tel:+8-352-523-15-03",target:"_blank"},"\u0421\u043a\u043e\u0440\u0430\u044f \u041f\u043e\u043c\u043e\u0449\u044c"))))))),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement(b.B,{id:"more",activePanel:"more"},n.a.createElement(b.r,{id:"more"},n.a.createElement(b.s,null,"\u0415\u0449\u0451"),n.a.createElement(b.n,null,n.a.createElement(b.b,{mode:"image",size:"m",header:n.a.createElement("span",null,"\u041a\u043e\u0440\u043e\u043d\u0430\u0432\u0438\u0440\u0443\u0441 \u0438 ",n.a.createElement("br",null),"\u0435\u0433\u043e \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435"),subheader:"\u0414\u0430\u043b\u043c\u0430\u0442\u043e\u0432\u043e \xb7 30 \u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f",background:n.a.createElement("div",{style:{backgroundColor:"#000",backgroundPosition:"right bottom",backgroundSize:358,backgroundRepeat:"no-repeat"}}),actions:n.a.createElement(b.c,{mode:"overlay_primary",size:"l",onClick:this.onStoryChange,selected:"covid"===this.state.activeStory,"data-story":"covid"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")}),n.a.createElement("br",null),n.a.createElement(b.l,null,n.a.createElement(b.b,{mode:"image",header:"\u041e\u043d\u043b\u0430\u0439\u043d \u0434\u043d\u0435\u0432\u043d\u0438\u043a",subheader:"\u0421\u043b\u0435\u0434\u0438\u0442\u0435 \u0437\u0430 \u043e\u0446\u0435\u043d\u043a\u0430\u043c\u0438, \u0441\u0432\u043e\u0435\u0433\u043e \u0440\u0435\u0431\u0451\u043d\u043a\u0430",background:n.a.createElement("div",{style:{backgroundColor:"#65c063",backgroundImage:"url(https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg)",backgroundPosition:"right bottom",backgroundSize:320,backgroundRepeat:"no-repeat"}}),actions:n.a.createElement(b.c,{mode:"overlay_primary",onClick:this.onStoryChange,selected:"onlinednevnik"===this.state.activeStory,"data-story":"onlinednevnik",label:"\u041d\u0435 \u0430\u043a\u0442\u0438\u0432\u043d\u043e!"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")})),n.a.createElement("br",null),n.a.createElement(b.e,null,n.a.createElement(b.d,{size:"l",mode:"outline"},n.a.createElement("div",{style:{height:1}}))),n.a.createElement(b.e,null,n.a.createElement(b.d,{size:"l",mode:"shadow"},n.a.createElement(b.f,{before:n.a.createElement(w.a,null),href:"mailto:maksimenkoegorlvovich1@gmail.com",target:"_blank"},"\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"),n.a.createElement("div",{style:{height:1}}))),n.a.createElement("br",null),n.a.createElement(b.e,null,n.a.createElement(b.d,{size:"l",mode:"shadow"},n.a.createElement(b.f,{before:n.a.createElement(I.a,null),href:"tel:+8(35252)22757",target:"_blank"},"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0448\u043a\u043e\u043b\u044b"),n.a.createElement("div",{style:{height:1}}))),n.a.createElement("br",null),n.a.createElement(b.e,null,n.a.createElement(b.d,{size:"l",mode:"shadow"},n.a.createElement(b.f,{before:n.a.createElement(A.a,null),href:"mailto:dsosh3@mail.ru",target:"_blank"},"\u042d\u043b. \u043f\u043e\u0447\u0442\u0430 \u0428\u043a\u043e\u043b\u044b"),n.a.createElement("div",{style:{height:1}}))),n.a.createElement("br",null),n.a.createElement(b.e,null,n.a.createElement(b.d,{size:"l",mode:"shadow"},n.a.createElement(b.f,{before:n.a.createElement(D.a,null),onClick:this.onStoryChange,selected:"developers"===this.state.activeStory,"data-story":"developers"},"\u041d\u0430\u0448\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430"),n.a.createElement("div",{style:{height:1}}))),n.a.createElement(b.b,{mode:"image",header:"\u041d\u0430\u0431\u043e\u0440 \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0443",subheader:"\u0425\u043e\u0447\u0435\u0448\u044c \u043a \u043d\u0430\u043c \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u0443? \u0417\u0430\u043f\u043e\u043b\u043d\u0438 \u0430\u043d\u043a\u0435\u0442\u0443",background:n.a.createElement("div",{style:{backgroundColor:"#65c063",backgroundImage:"url(https://sun9-59.userapi.com/7J6qHkTa_P8VKRTO5gkh6MizcCEefz04Y0gDmA/y6dSjdtPU4U.jpg)",backgroundPosition:"right bottom",backgroundSize:320,backgroundRepeat:"no-repeat"}}),actions:n.a.createElement(b.c,{mode:"overlay_primary",onClick:this.onStoryChange,selected:"newunit"===this.state.activeStory,"data-story":"newunit"},"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c")}),n.a.createElement("br",null))))))}}]),a}(n.a.Component);i.a.send("VKWebAppInit"),c.a.render(n.a.createElement(te,null),document.getElementById("root"))}},[[166,1,2]]]);
//# sourceMappingURL=main.28a5ab70.chunk.js.map