(this.webpackJsonpagro=this.webpackJsonpagro||[]).push([[0],{114:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(12),c=t.n(l),s=(t(71),t(72),t(73),t(8)),o=(t(74),t(13)),m=t.n(o),i=t(20),u=t(7),d=t(117),f=t(118),E=t(119),p=t(120),h=t(121),b=t(122),g=t(10),v=t(19),N=t.n(v),y=t(46),w=function(){var e=Object(r.useState)(!1),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(g.c)((function(e){return e.userSignin})).userInfo;if(!c){c=N.a.get("userInfo");try{c=JSON.parse(c)}catch(o){c=null}}return n.a.createElement("div",null,n.a.createElement(E.a,{dark:!0,expand:"md"},n.a.createElement("div",{className:"container"},n.a.createElement(p.a,{onClick:function(){l(!t)}}),n.a.createElement(h.a,{className:"mr-auto",href:"/"},n.a.createElement("img",{src:y,height:"30",width:"30",alt:"AgroConnect"})),n.a.createElement(b.a,{isOpen:t,navbar:!0},n.a.createElement(d.a,{navbar:!0},n.a.createElement(f.a,null,n.a.createElement(s.c,{className:"nav-link",to:"/home"},n.a.createElement("span",{className:"fa fa-home fa-lg"})," Home")),n.a.createElement(f.a,null,n.a.createElement(s.c,{className:"nav-link",to:"/aboutus"},n.a.createElement("span",{className:"fa fa-info fa-lg"})," About Us")),n.a.createElement(f.a,null,n.a.createElement(s.c,{className:"nav-link",to:"/services"},n.a.createElement("span",{className:"fa fa-tasks fa-lg"})," Services")),n.a.createElement(f.a,null,n.a.createElement(s.c,{className:"nav-link",to:"/contactus"},n.a.createElement("span",{className:"fa fa-address-card fa-lg"})," Contact Us"))),c?(console.log(c),n.a.createElement(d.a,{className:"ml-auto",navbar:!0},n.a.createElement(f.a,null,n.a.createElement(s.c,{className:"nav-link",to:"/profile"},n.a.createElement("span",{className:"fa fa-user-circle fa-lg"})," ",c.firstname)),n.a.createElement(f.a,null,n.a.createElement(s.c,{className:"nav-link",refresh:"true",to:"/home",onClick:function(){N.a.remove("userInfo"),c=null,window.location.reload()}},n.a.createElement("span",{className:"fa fa-sign-out fa-lg"})," Logout")))):n.a.createElement(d.a,{className:"ml-auto",navbar:!0},n.a.createElement(f.a,null,n.a.createElement(s.c,{className:"nav-link",to:"/login"},n.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Login")),n.a.createElement(f.a,null,n.a.createElement(s.c,{className:"nav-link",to:"/register"},n.a.createElement("span",{className:"fa fa-sign-in fa-lg"})," Register")))))))},S=t(59),O=t(123),_=t(124),j=t(125),C=t(126),x=t(127),k=t(88),R=t(89),I=t(90),A=t(46),P=[{src:k,caption:"Local Farm Produce"},{src:R,caption:"Green and Fresh"},{src:I,caption:"Tech Revolutionizing"}],T=function(e){var a=Object(r.useState)(0),t=Object(u.a)(a,2),l=t[0],c=t[1],s=Object(r.useState)(!1),o=Object(u.a)(s,2),m=o[0],i=o[1],d=function(){if(!m){var e=l===P.length-1?0:l+1;c(e)}},f=function(){if(!m){var e=0===l?P.length-1:l-1;c(e)}},E={stretch:{width:"100%",height:"500px",margin:5}},p=P.map((function(e){return n.a.createElement(S.a,{onExiting:function(){return i(!0)},onExited:function(){return i(!1)},key:e.src},n.a.createElement("img",{src:e.src,alt:e.altText,style:E.stretch}),n.a.createElement(O.a,{captionHeader:e.caption}))}));return n.a.createElement("div",null,n.a.createElement(_.a,null,n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"text-center"},n.a.createElement("strong",null,"Agricultureify"))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row row-header"},n.a.createElement("div",{className:"col-md-9 col-12"},n.a.createElement("h4",null,n.a.createElement("strong",null,"The main aim of this website is to educate farmers and solve all their problems by using technology. Even though technology has gone too far beyond, technology is failing to reach everyone, especially farmers. So to provide an alternative avenue to sell their produce. So here is a platform that provides farmers a platform to directly contact the buyer, so that no middle man is making the profit. So on this website, we are providing various buyers' and farmers' details which include their contact numbers so that both farmers and buyers will be benefited mutually."))),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("img",{src:A,alt:"Logoo",style:{width:"100%",height:"100%"}}))))),n.a.createElement("div",{className:"row"},n.a.createElement(j.a,{activeIndex:l,next:d,previous:f,className:"col-md-8 offset-md-2"},n.a.createElement(C.a,{items:P,activeIndex:l,onClickHandler:function(e){m||c(e)}}),p,n.a.createElement(x.a,{direction:"prev",directionText:"Previous",onClickHandler:f}),n.a.createElement(x.a,{direction:"next",directionText:"Next",onClickHandler:d}))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row row-content"},n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,n.a.createElement("p",null,"Over the years, the system has created several layers of intermediaries, lengthening the supply chain and increasing the opportunity for cartels to form, which in turn drive prices down for farmers. Farmers earn only 15 to 20% of the market price the consumer pays.The middle man be it the wholesalers or retailers gobble up the remaining profit margin The main reasons for this exploitation experienced by farmers are , lack of infrastructure for farmers to store their produce to bargain their prices, they cannot organise them selves as one force, The small holdings is another drawback for farmers to demand the right price. The best way is to give farmers the power to sell  or giving them an opportunity which connects them to consumers directly rather than middle man minting farmers money. If the consumer knows where to find the farm produce he may buy directly from the farmer himself.")),n.a.createElement("p",null,n.a.createElement("strong",null,"We connect farmers to end consumers direct and help each other trade the grains at much better rates. It ensure that farmers get the fair rate of their grains. More than market and also for consumers it ensure that they get best quality grains at best price as compared to what they buy from super markets. Also If you're a farmer and want to get your crops, food grains at better rates than local mandi/traders we are here to help you."))))))},U=t(9);var D=function(e){return n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-12 col-sm-4 align-self-center"},n.a.createElement("div",{className:"text-center"},n.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},n.a.createElement("i",{className:"fa fa-google-plus"})),"\xa0\xa0",n.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},n.a.createElement("i",{className:"fa fa-facebook"})),"\xa0\xa0",n.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},n.a.createElement("i",{className:"fa fa-linkedin"})),"\xa0\xa0",n.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},n.a.createElement("i",{className:"fa fa-twitter"})),"\xa0\xa0",n.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},n.a.createElement("i",{className:"fa fa-youtube"})),"\xa0\xa0",n.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},n.a.createElement("i",{className:"fa fa-envelope-o"})),"\xa0\xa0"))),n.a.createElement("div",{className:"row justify-content-center"},n.a.createElement("div",{className:"col-auto"},n.a.createElement("p",null,"\xa9 Copyright 2020 Agriculturify")))))},L=t(32),F=t(33),q=t(35),G=t(36),H=t(128),K=t(129),B=t(91),Q=t(92),J=t(93),M=function(e){Object(G.a)(t,e);var a=Object(q.a)(t);function t(){return Object(L.a)(this,t),a.apply(this,arguments)}return Object(F.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(H.a,null,n.a.createElement(K.a,null,n.a.createElement(s.b,{to:"/home"},"Home")),n.a.createElement(K.a,{active:!0},"Contact Us")),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h3",null,"Contact Us"),n.a.createElement("hr",null))),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("img",{className:"col-4",src:B,alt:"Norway",style:{width:"100%",height:"100%"}}),n.a.createElement("img",{className:"col-4",src:Q,alt:"Norway",style:{width:"100%",height:"100%"}}),n.a.createElement("img",{className:"offset-2 col-2",src:J,alt:"Norway",style:{width:"100%",height:"80%"}}))),n.a.createElement("hr",null),n.a.createElement("div",{className:"row row-content"},n.a.createElement("div",{className:"col-12 col-md-4 offset-4"},n.a.createElement("h2",null,"Our Address"),n.a.createElement("h6",null,n.a.createElement("strong",null,"100 ft.road near church",n.a.createElement("br",null),"Indiranagar",n.a.createElement("br",null),"BANGLORE",n.a.createElement("br",null),n.a.createElement("i",{className:"fa fa-phone"}),": +896 2589 3699",n.a.createElement("br",null),n.a.createElement("i",{className:"fa fa-fax"}),": +896 78549632",n.a.createElement("br",null),n.a.createElement("i",{className:"fa fa-envelope"}),":"," ",n.a.createElement("a",{href:"mailto:agroconnect@email.com"},"agriculturify@email.com")))),n.a.createElement("div",{className:"col-12 col-sm-11 offset-sm-1 offset-md-4"},n.a.createElement("div",{className:"btn-group",role:"group"},n.a.createElement("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678"},n.a.createElement("i",{className:"fa fa-phone"})," Call"),n.a.createElement("a",{role:"button",className:"btn btn-info"},n.a.createElement("i",{className:"fa fa-skype"})," Skype"),n.a.createElement("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net"},n.a.createElement("i",{className:"fa fa-envelope-o"})," Email"))))))}}]),t}(r.Component),W=t(64),z=t(130),X=t(131),Y=t(132),Z=t(133),V=[{value:"0",label:"Wheat",url:"https://www.treehugger.com/thmb/GWXTDEM1gc1VLr6k3wyImoaS7q8=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2016__02__WheatFieldWithBlueCloudySky-cab45aaa81564ba99e2bd9a40932fd08.jpg"},{value:"1",label:"Paddy",url:"https://m.economictimes.com/thumb/msid-73156497,width-1200,height-900,resizemode-4,imgsize-76468/paddy.jpg"},{value:"2",label:"Strawberries",url:"https://hips.hearstapps.com/clv.h-cdn.co/assets/15/22/1432664914-strawberry-facts1.jpg"},{value:"3",label:"Tomatoes",url:"https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg"},{value:"4",label:"Blueberries",url:"https://images-prod.healthline.com/hlcmsresource/images/AN_images/blueberries-1296x728-feature.jpg"},{value:"5",label:"Capsicum",url:"https://www.almanac.com/sites/default/files/image_nodes/bell-peppers-assorted-crop.jpg"},{value:"6",label:"Pineapple",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1irEOUZjN3JssqD3EM0r0vtKCR1hK5EK0kg&usqp=CAU"},{value:"7",label:"Potatoes",url:"https://lh3.googleusercontent.com/proxy/3umsm9CmnTgcX_Jkn3eoHzgchcLCbPmCuJlc2hZQKu-FLXgZM6rPtT-2blusEPpmoKRbDGi4RwRiZTjjC-MkDj1CvfqKg98Zb6maCGmrBH48XQdueAx-7jPa1su-cxT7D9U"},{value:"8",label:"Lettuces",url:"https://scx1.b-cdn.net/csz/news/800/2020/15-researchersi.jpg"},{value:"9",label:"Carrots",url:"https://foodandnutrition.org/wp-content/uploads/Savor-Carrots-780x520.jpg"},{value:"10",label:"Celery",url:"https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-celery-imported-celery-tall-utah-vegetable-seeds-16969063891084_600x600.jpg?v=1601347825"},{value:"11",label:"Apples",url:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6plTXA1SoKEXa3jr3NWtB0RSTi0MEi_MnzA&usqp=CAU"},{value:"12",label:"Orange",url:"https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg"},{value:"13",label:"Grapes",url:"https://www.keckmedicine.org/wp-content/uploads/2016/10/grapes-have-so-many-health-benefits-like-fighting-against-cancer-and-boosting-cardio.jpg"},{value:"14",label:"Watermelons",url:"https://media.self.com/photos/5b10229e443bb72bf9fe0750/16:9/w_2800,h_1575,c_limit/pick-a-perfect-mellon.jpg"},{value:"15",label:"Peaches",url:"https://d279m997dpfwgl.cloudfront.net/wp/2019/07/0710_peaches-1000x667.jpg"},{value:"16",label:"Pears",url:"https://post.healthline.com/wp-content/uploads/2020/08/benefits-of-pears-1200x628-facebook-1200x628.jpg"},{value:"17",label:"Corn",url:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-973555096-1583765387.jpg?crop=0.669xw:1.00xh;0.333xw,0&resize=480:*"},{value:"18",label:"Ragi",url:"https://cdn.shopify.com/s/files/1/1462/9838/products/com1807893921823Poshtik_Ragi_1c6416df-6e16-4a84-aabe-78c2445a2d31_2048x.png?v=1565272257"},{value:"19",label:"Musturd",url:"https://tiimg.tistatic.com/fp/1/005/518/small-black-mustard-seeds-942.jpg"}],$=t(34),ee=function(e){var a=Object(r.useState)(""),t=Object(u.a)(a,2),l=t[0],c=t[1],s=Object(g.c)((function(e){return e.userSignin})),o=[].concat(Object(W.a)(V),[{value:"20",label:"All"}]),m=s.userInfo;if(!m){m=N.a.get("userInfo");try{m=JSON.parse(m)}catch(p){m=null}}var i=Object(g.c)((function(e){return e.cropList})),d=i.Data,f=i.loading,E=(i.error,f?n.a.createElement(Y.a,{color:"primary",className:"offset-5"}):d.map((function(e){if(!l||e.name===l||"All"==l)return n.a.createElement("div",null,n.a.createElement(z.a,{className:"container"},n.a.createElement(X.a,{className:"row"},n.a.createElement(X.a,{left:!0,href:"#",className:"col-md-3 col-12",style:{margin:20}},n.a.createElement("img",{src:e.pic,width:"90%"})),n.a.createElement(X.a,{body:!0,className:"col-8"},n.a.createElement(X.a,{heading:!0,className:"text-center"},n.a.createElement("strong",null,"Crop :")," ",e.name),n.a.createElement(X.a,{className:"row"},n.a.createElement("strong",{className:"col-md-3 col-6 offset-1"},"Price per Kg:")," ",n.a.createElement("div",{className:"col-md-8 col-5"},e.price)),n.a.createElement(X.a,{className:"row"},n.a.createElement("strong",{className:"col-md-3 col-6 offset-1"},"Owner :")," ",n.a.createElement("div",{className:"col-md-8 col-5"},e.owner)),n.a.createElement(X.a,{className:"row"},n.a.createElement("strong",{className:"col-md-3 col-6 offset-1"},"Phone Number :")," ",n.a.createElement("div",{className:"col-md-8 col-5"},e.ownerphone)),n.a.createElement(X.a,{className:"row"},n.a.createElement("strong",{className:"col-md-3 col-6 offset-1"},"Address :")," ",n.a.createElement("div",{className:"col-md-8 col-5"},e.owneraddress)),n.a.createElement(X.a,{muted:!0,className:"row"},n.a.createElement("strong",{className:"col-md-3 col-6 offset-1"},"Last Update On:")," ",n.a.createElement("div",{className:"col-md-8 col-5"},Date(e.createdAt).toString()))))),n.a.createElement("br",null))})));return m||e.history.push("/login"),n.a.createElement("div",null,n.a.createElement(H.a,{tag:"nav",listTag:"div"},n.a.createElement(K.a,{tag:"a",href:"home"},"Home"),n.a.createElement(K.a,{active:!0,tag:"span"},"Services")),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row offset-3"},n.a.createElement(Z.a,{className:"col-md-1 col-2"},n.a.createElement("span",{className:"fa fa-search"})),n.a.createElement($.a,{options:o,className:"col-8 col-md-8 search",placeholder:"Search",onChange:function(e){c(o[e.value].label)}}))),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},E))},ae=(t(94),t(137)),te=t(138),re=t(139),ne=t(95),le=function(e){Object(G.a)(t,e);var a=Object(q.a)(t);function t(){return Object(L.a)(this,t),a.apply(this,arguments)}return Object(F.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(H.a,null,n.a.createElement(K.a,null,n.a.createElement(s.b,{to:"/home"},"Home")),n.a.createElement(K.a,{active:!0},"About Us")),n.a.createElement("div",{className:"container"},n.a.createElement("img",{className:"offset-3 col-6",src:ne,alt:"Norway",style:{width:"100%",height:"100%"}}),n.a.createElement("h4",{className:"centered"},n.a.createElement("strong",null,"Connecting farmers and buyers to transact freely and fairly with each other by breaking down the financial, communication and marketing barriers of brokers, sales agents, and other intermediaries that generate profits by separating agricultural producers, wholesale buyers and consumers."))),n.a.createElement(ae.a,{defaultActiveKey:"0",style:{padding:"0px"}},n.a.createElement(te.a,null,n.a.createElement(te.a.Header,null,n.a.createElement(ae.a.Toggle,{as:re.a,variant:"link",eventKey:"0"},n.a.createElement("strong",null,"Farmers"))),n.a.createElement(ae.a.Collapse,{eventKey:"0"},n.a.createElement(te.a.Body,null,n.a.createElement("strong",null,"Here we connect farmers to end consumers directly and help each other trade the grains at much better rates. It ensures that farmers get the fair rate of their produce. In online mode, the farmer will complete the obligations of delivering the product to the customer himself. Our website does NOT act as a middleman because for every product the contact information is displayed by the farmer only and we do not buy from the farmers and sell it to customers.")))),n.a.createElement(te.a,null,n.a.createElement(te.a.Header,null,n.a.createElement(ae.a.Toggle,{as:re.a,variant:"link",eventKey:"1"},n.a.createElement("strong",null," Buyers"))),n.a.createElement(ae.a.Collapse,{eventKey:"1"},n.a.createElement(te.a.Body,null,n.a.createElement("strong",null,"The intervention of many middlemen in the supply chain is not exploiting farmers only but also the consumers, Retailers, and to some extent wholesalers as well. Here they the best quality grains at the best price as compared to what they buy from supermarkets where buyers will have to just log in to the website and get connected to the farmers directly."))))))}}]),t}(r.Component),ce=t(25),se=t.n(ce);var oe=function(e){var a=Object(r.useState)(""),t=Object(u.a)(a,2),l=t[0],c=t[1],o=Object(r.useState)(""),d=Object(u.a)(o,2),f=d[0],E=d[1],p=Object(g.c)((function(e){return e.userSignin})),h=p.loading,b=p.userInfo,v=p.error,y=Object(g.b)();return Object(r.useEffect)((function(){return b&&e.history.push("/services"),function(){}}),[b]),n.a.createElement("form",{className:"container",onSubmit:function(e){e.preventDefault(),y(function(e,a){return function(){var t=Object(i.a)(m.a.mark((function t(r){var n,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"USER_SIGNIN_REQUEST",payload:{email:e,password:a}}),t.prev=1,t.next=4,se.a.post("/users/signIn",{email:e,password:a});case 4:n=t.sent,l=n.data,r({type:"USER_SIGNIN_SUCCESS",payload:l}),N.a.set("userInfo",JSON.stringify(l)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),r({type:"USER_SIGNIN_FAIL",payload:"Invalid email or password"});case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}(l,f))}},n.a.createElement("br",null),n.a.createElement(z.a,null,n.a.createElement("h2",{className:"offset-5"},"Login"),h&&n.a.createElement(Y.a,{color:"primary",className:"offset-5"}),v&&n.a.createElement("div",{className:"text-center",style:{color:"red"}},v),n.a.createElement("div",{className:"row"},n.a.createElement("p",null)),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-4 col-md-2 offset-1 offset-md-2"},"Email :"),n.a.createElement("input",{className:"col-6 col-md-5",type:"email",id:"email",name:"email",placeholder:"Your email",onChange:function(e){c(e.target.value)}})),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-4 col-md-2 offset-1 offset-md-2"},"Pasword :"),n.a.createElement("input",{className:"col-6 col-md-5",type:"password",id:" Pasword",name:" Confirm Pasword",placeholder:"Pasword",onChange:function(e){E(e.target.value)}})),n.a.createElement("br",null),n.a.createElement(s.b,{to:"/register",className:"col-12 text-center"},"New to Agriculturify?"),n.a.createElement("br",null),n.a.createElement("input",{className:"offset-5 col-3 bg-primary",type:"submit",value:"Submit",required:!0,style:{color:"white"}})),n.a.createElement("br",null))},me=t(140);var ie=function(e){var a=Object(g.b)(),t=Object(g.c)((function(e){return e.resgister})),l=t.loading,c=t.userInfo,o=t.error,d=Object(r.useState)(""),f=Object(u.a)(d,2),E=f[0],p=f[1],h=Object(r.useState)(""),b=Object(u.a)(h,2),v=b[0],y=b[1],w=Object(r.useState)(""),S=Object(u.a)(w,2),O=S[0],_=S[1],j=Object(r.useState)(""),C=Object(u.a)(j,2),x=C[0],k=C[1],R=Object(r.useState)(""),I=Object(u.a)(R,2),A=I[0],P=I[1],T=Object(r.useState)(""),U=Object(u.a)(T,2),D=U[0],L=U[1],F=Object(r.useState)(!1),q=Object(u.a)(F,2),G=q[0],H=q[1],K=Object(r.useState)(""),B=Object(u.a)(K,2),Q=B[0],J=B[1],M=Object(r.useState)(""),W=Object(u.a)(M,2),X=W[0],Z=W[1];return Object(r.useEffect)((function(){return c&&e.history.push("/services"),function(){}}),[c]),n.a.createElement("form",{className:"container",onSubmit:function(e){console.log(O),O.length<=5?(_(""),Z("Password should be more than 5 characters")):O===x?a(function(e,a,t,r,n,l,c){return function(){var s=Object(i.a)(m.a.mark((function s(o){var i,u;return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return o({type:"USER_REGISTER_REQUEST",payload:{firstname:e,lastname:a,password:t,email:r,address:n,phone:l,isFarmer:c}}),s.prev=1,s.next=4,se.a.post("/users/register",{firstname:e,lastname:a,password:t,email:r,address:n,phone:l,isFarmer:c});case 4:i=s.sent,u=i.data,o({type:"USER_REGISTER_SUCCESS",payload:u}),N.a.set("userInfo",JSON.stringify(u)),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(1),o({type:"USER_REGISTER_FAIL",payload:"You have already created your account"});case 13:case"end":return s.stop()}}),s,null,[[1,10]])})));return function(e){return s.apply(this,arguments)}}()}(E,v,O,Q,D,A,G)):Z("Password and confirm password must be same"),e.preventDefault()}},n.a.createElement("br",null),n.a.createElement(z.a,null,X?n.a.createElement(me.a,{color:"danger"},X):null,n.a.createElement("h2",{className:"offset-5"},"Register"),l&&n.a.createElement(Y.a,{color:"primary",className:"offset-5"}),o&&n.a.createElement("div",{className:"text-center",style:{color:"red"}},o),n.a.createElement("div",{className:"row"},n.a.createElement("p",null)),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-4 col-md-2 offset-1 offset-md-2"},n.a.createElement("b",null,"First Name :")),n.a.createElement("input",{className:"col-6 col-md-5",type:"text",id:"fname",name:"firstname",placeholder:"Your name",required:!0,onChange:function(e){p(e.target.value)}})),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-4 col-md-2 offset-1 offset-md-2"},n.a.createElement("b",null,"Last Name :")),n.a.createElement("input",{className:"col-6 col-md-5",type:"text",id:"lname",name:"lastname",placeholder:"Your last name",required:!0,onChange:function(e){y(e.target.value)}})),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-4 col-md-2 offset-1 offset-md-2"},n.a.createElement("b",null,"Email")),n.a.createElement("input",{className:"col-6 col-md-5",type:"email",id:"email",name:"email",placeholder:"Your email",required:!0,onChange:function(e){J(e.target.value)}})),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-4 col-md-2 offset-1 offset-md-2"},n.a.createElement("b",null,"Phone Number")),n.a.createElement("input",{className:"col-6 col-md-5",type:"number",id:"phone",name:"phone",placeholder:"Phone number",required:!0,onChange:function(e){P(e.target.value)}})),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-4 col-md-2 offset-1 offset-md-2"},n.a.createElement("b",null,"Pasword :")),n.a.createElement("input",{className:"col-6 col-md-5",type:"password",id:" Pasword",name:" Confirm Pasword",placeholder:"Pasword",required:!0,onChange:function(e){_(e.target.value)}})),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-4 col-md-2 offset-1 offset-md-2",required:!0},n.a.createElement("b",null,"Confirm Pasword :")),n.a.createElement("input",{className:"col-6 col-md-5",type:"password",id:"email",name:" Confirm Pasword",placeholder:" Confirm Pasword",required:!0,onChange:function(e){k(e.target.value)}})),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-4 col-md-2 offset-1 offset-md-2",required:!0},n.a.createElement("b",null,"Address :")),n.a.createElement("textarea",{className:"col-6 col-md-5",id:"subject",name:"subject",placeholder:"Address",required:!0,onChange:function(e){L(e.target.value)}}),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-4 offset-1"},n.a.createElement("b",null,"Select the account you want to create")),n.a.createElement("div",{onChange:function(e){console.log(e.target.value),"Farmer"===e.target.value&&H(!0)}.bind(this),className:"col-7 row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("input",{type:"radio",value:"Farmer",name:"gender"}),"Farmer"),n.a.createElement("div",{className:"col-6"},n.a.createElement("input",{type:"radio",value:"Buyer",name:"gender",required:!0})," Buyer"))),n.a.createElement("br",null),n.a.createElement(s.b,{to:"/login",className:"col-12 text-center"},"Have an account?"),n.a.createElement("br",null),n.a.createElement("input",{className:"offset-5 col-3 bg-primary",type:"submit",value:"Submit",required:!0,style:{color:"white"}})),n.a.createElement("br",null),n.a.createElement("br",null))},ue=t(134),de=t(135),fe=t(136),Ee=function(e){var a=Object(g.b)(),t=Object(g.c)((function(e){return e.userSignin})),l=Object(r.useState)(""),c=Object(u.a)(l,2),o=c[0],d=c[1],f=Object(r.useState)(""),E=Object(u.a)(f,2),p=E[0],h=E[1],b=Object(r.useState)(""),v=Object(u.a)(b,2),y=v[0],w=v[1],S=Object(g.c)((function(e){return e.addcrop})),O=S.loading1,_=S.data,j=Object(g.c)((function(e){return e.cropList})),C=j.Data,x=j.loading,k=(j.error,t.userInfo);if(!k){k=N.a.get("userInfo");try{k=JSON.parse(k)}catch(A){k=null}}if(!k)return e.history.push("/login"),null;var R=function(e){var t;a((t=e._id,function(){var e=Object(i.a)(m.a.mark((function e(a){var r,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a({type:"DELETE_CROP_REQUEST",payload:{id:t}}),e.prev=2,e.next=5,se.a.post("/delete",{id:t});case 5:r=e.sent,n=r.data,a({type:"DELETE_CROP_SUCCESS",payload:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),a({type:"DELETE_CROP_FAIL",payload:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(a){return e.apply(this,arguments)}}())),alert("Deleted Sucessfully"),window.location.reload(!1)},I=x?null:C.map((function(e){if(e.ownerid===k._id)return n.a.createElement("div",null,n.a.createElement(z.a,{className:"container"},n.a.createElement(X.a,{className:"row"},n.a.createElement(X.a,{left:!0,href:"#",className:"col-md-3 col-12",style:{margin:20}},n.a.createElement("img",{src:e.pic,width:"90%",height:"100%"})),n.a.createElement(X.a,{body:!0,className:"col-8"},n.a.createElement(X.a,{heading:!0,className:"text-center"},n.a.createElement("strong",null,"Crop :")," ",e.name),n.a.createElement(X.a,{className:"row"},n.a.createElement("strong",{className:"col-md-3 col-6 offset-1"},"Price per KG:")," ",n.a.createElement("div",{className:"col-md-8 col-5"},e.price)),n.a.createElement(X.a,{className:"row"},n.a.createElement("strong",{className:"col-md-3 col-6 offset-1"},"Owner :")," ",n.a.createElement("div",{className:"col-md-8 col-5"},e.owner)),n.a.createElement(X.a,{className:"row"},n.a.createElement("strong",{className:"col-md-3 col-6 offset-1"},"Phone Number :")," ",n.a.createElement("div",{className:"col-md-8 col-5"},e.ownerphone)),n.a.createElement(X.a,{className:"row"},n.a.createElement("strong",{className:"col-md-3 col-6 offset-1"},"Address :")," ",n.a.createElement("div",{className:"col-md-8 col-5"},e.owneraddress)),n.a.createElement(X.a,{muted:!0,className:"row"},n.a.createElement("strong",{className:"col-md-3 col-6 offset-1"},"Last Update On:")," ",n.a.createElement("div",{className:"col-md-8 col-5"},Date(e.createdAt).toString())))),n.a.createElement(ue.a,{className:"bg-danger col-md-2 col-4 offset-4 offset-md-5",onClick:function(){R(e)}},n.a.createElement("i",{className:"fa fa-trash"})," Delete")),n.a.createElement("br",null))}));return n.a.createElement("div",null,n.a.createElement(H.a,null,n.a.createElement(K.a,null,n.a.createElement(s.b,{to:"/home"},"Home")),n.a.createElement(K.a,{active:!0},"Profile")),n.a.createElement("div",{className:"container"},n.a.createElement("br",null),n.a.createElement(z.a,{className:"row",style:{display:"flex",justifyContent:"center"}},n.a.createElement(de.a,{body:!0,className:"text-center container"},n.a.createElement("h3",{class:"row"},n.a.createElement("b",{className:"col-6"},"Name :")," ",k.firstname),n.a.createElement(fe.a,{className:"row"},n.a.createElement("b",{className:"col-6"},"Type Of Account :"),k.isFarmer?"Farmer":"Buyer"),n.a.createElement(fe.a,{className:"row"},n.a.createElement("b",{className:"col-6"},"Email : "),k.email),n.a.createElement(fe.a,{className:"row"},n.a.createElement("b",{className:"col-6"}," Address : "),k.address),n.a.createElement(fe.a,{className:"row"},n.a.createElement("b",{className:"col-6"},"Phone Number : "),k.phone))),n.a.createElement("br",null),k.isFarmer?n.a.createElement("div",null,n.a.createElement(z.a,{className:"row",style:{display:"flex",justifyContent:"center"}},_?n.a.createElement(me.a,{color:"success",className:"text-center"},"Added sucessfully"):null,O&&n.a.createElement(Y.a,{color:"primary",className:"offset-5"}),n.a.createElement(de.a,{body:!0,className:"text-center container"},n.a.createElement("div",{className:"row"},n.a.createElement("p",null)),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-4 col-md-2 offset-1 offset-md-2"},n.a.createElement("b",null,"Select the crop :")),n.a.createElement($.a,{required:!0,options:V,className:"col-6 col-md-5",onChange:function(e){w(V[e.value].label),h(V[e.value].url)}})),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-4 col-md-2 offset-1 offset-md-2"},n.a.createElement("b",null,"Price expectation in Rs/Kg:")),n.a.createElement("input",{className:"col-6 col-md-5",type:"text",placeholder:"Enter price",required:!0,onChange:function(e){d(e.target.value)}})),n.a.createElement("br",null),n.a.createElement(ue.a,{className:"bg-success",onClick:function(){y&&o?a(function(e,a,t,r,n,l,c){return function(){var s=Object(i.a)(m.a.mark((function s(o){var i,u;return m.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return o({type:"ADD_CROP_REQUEST",payload:{name:e,price:a,owner:t,pic:r,ownerid:n,owneraddress:l,ownerphone:c}}),s.prev=1,s.next=4,se.a.post("/send-data",{name:e,price:a,owner:t,pic:r,ownerid:n,owneraddress:l,ownerphone:c});case 4:i=s.sent,u=i.data,o({type:"ADD_CROP_SUCCESS",payload:u}),s.next=12;break;case 9:s.prev=9,s.t0=s.catch(1),o({type:"ADD_CROP_FAIL",payload:s.t0.message});case 12:case"end":return s.stop()}}),s,null,[[1,9]])})));return function(e){return s.apply(this,arguments)}}()}(y,o,k.firstname,p,k._id,k.address,k.phone)):alert("All fields are required")}},n.a.createElement("i",{className:"fa fa-plus"}),"    ","Add crop"))),n.a.createElement("br",null),n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"text-center"},"Your Crops"),I)):n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null))))},pe=function(){var e=Object(g.b)();return Object(r.useEffect)((function(){(function(){var a=Object(i.a)(m.a.mark((function a(){return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e(function(){var e=Object(i.a)(m.a.mark((function e(a){var t,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a({type:"CROP_LIST_REQUEST"}),e.next=4,se.a.get("/data");case 4:t=e.sent,r=t.data,a({type:"CROP_LIST_SUCESS",payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a({type:"CROP_LIST_FAIL",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(a){return e.apply(this,arguments)}}());case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),n.a.createElement("div",null,n.a.createElement(w,null),n.a.createElement(U.d,null,n.a.createElement(U.b,{path:"/home",component:T}),n.a.createElement(U.b,{path:"/contactus",component:M}),n.a.createElement(U.b,{path:"/services",component:ee}),n.a.createElement(U.b,{path:"/aboutus",component:le}),n.a.createElement(U.b,{path:"/login",component:oe}),n.a.createElement(U.b,{path:"/register",component:ie}),n.a.createElement(U.b,{path:"/profile",component:Ee}),n.a.createElement(U.a,{to:"/home"})),n.a.createElement("br",null),n.a.createElement(D,null))};var he=function(){return n.a.createElement(s.a,null,n.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(113);var be=t(24);var ge=t(63);var ve=Object(be.c)({cropList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{Data:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CROP_LIST_REQUEST":return{loading:!0,Data:[]};case"CROP_LIST_SUCESS":return{loading:!1,Data:a.payload};case"CROP_LIST_FAIL":return{loading:!1,error:a.payload,Data:[]};default:return e}},userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_SIGNIN_REQUEST":return{loading:!0};case"USER_SIGNIN_SUCCESS":return{loading:!1,userInfo:a.payload};case"USER_SIGNIN_FAIL":return{loading:!1,error:a.payload};case"USER_LOGOUT":return{};default:return e}},resgister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"USER_REGISTER_REQUEST":return{loading:!0};case"USER_REGISTER_SUCCESS":return{loading:!1,userInfo:a.payload};case"USER_REGISTER_FAIL":return{loading:!1,error:a.payload};default:return e}},addcrop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_CROP_REQUEST":return{loading1:!0};case"ADD_CROP_SUCCESS":return{loading1:!1,data:a.payload};case"ADD_CROP_FAIL":return{loading1:!1,error:a.payload};default:return e}},deletecrop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_CROP_REQUEST":return{loading1:!0};case"ADD_CROP_SUCCESS":return{loading1:!1,data:a.payload};case"ADD_CROP_FAIL":return{loading1:!1,error:a.payload};default:return e}}}),Ne=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,ye=Object(be.e)(ve,{},Ne(Object(be.a)(ge.a)));c.a.render(n.a.createElement(g.a,{store:ye},n.a.createElement(n.a.StrictMode,null,n.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,a,t){e.exports=t.p+"static/media/download.0d8e14ca.jpg"},66:function(e,a,t){e.exports=t(114)},71:function(e,a,t){},73:function(e,a,t){},88:function(e,a,t){e.exports=t.p+"static/media/s4.421fe2db.jpeg"},89:function(e,a,t){e.exports=t.p+"static/media/s2.d46d810b.jpeg"},90:function(e,a,t){e.exports=t.p+"static/media/s3.b984eb16.jpeg"},91:function(e,a,t){e.exports=t.p+"static/media/contact.9a217c27.jpg"},92:function(e,a,t){e.exports=t.p+"static/media/organic.de42acd3.jpg"},93:function(e,a,t){e.exports=t.p+"static/media/nature.b7320705.jpg"},94:function(e,a,t){},95:function(e,a,t){e.exports=t.p+"static/media/AboutUs.4197224f.jpg"}},[[66,1,2]]]);
//# sourceMappingURL=main.232ca2ab.chunk.js.map