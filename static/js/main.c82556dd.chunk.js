(window["webpackJsonpvk-2019-app"]=window["webpackJsonpvk-2019-app"]||[]).push([[0],{108:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},165:function(e,t,a){e.exports=a(273)},271:function(e,t,a){},272:function(e,t,a){},273:function(e,t,a){"use strict";a.r(t);a(166),a(192),a(194),a(195),a(197),a(198),a(199),a(200),a(201),a(202),a(203),a(204),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(238);var n=a(0),r=a.n(n),s=a(33),i=a.n(s),o=a(18),c=a.n(o),l=a(109),m=a(94),d=a(95),u=a(110),p=a(96),h=a(37),g=a(111),f=a(45),y=a.n(f),_=a(97),b=a(4),v=(a(266),a(59),a(105)),k=a.n(v),E=a(61),A=a.n(E),R=a(106),S=a.n(R),F=a(107),P=a.n(F),w=a(62),O=(a(271),a(108)),T=a.n(O),C=(a(272),"5.101"),x=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).callAPI=function(e,t){return t.hasOwnProperty("access_token")||(t.access_token=a.state.vkAccessToken),t.hasOwnProperty("v")||(t.v=C),_.a.send("VKWebAppCallAPIMethod",{method:e,params:t}).then((function(e){return e.data.response})).catch((function(e){return e}))},a.getGroups=function(){c.a.send("VKWebAppCallAPIMethod",{method:"groups.get",request_id:"1gr",params:{fields:"description",count:180,extended:!0,access_token:a.state.vkAccessToken,v:"5.101"}})},a.getMe=function(){a.setState({isFetchingProfile:!0}),setTimeout((function(){a.setState({isFetchingProfile:!1})}))},a.getToken=function(){c.a.send("VKWebAppGetAuthToken",{app_id:7150409,scope:"friends,groups"})},a.onRefreshDiscover=function(){a.setState({isFetchingDiscover:!0}),setTimeout((function(){a.getGroups()}))},a.onRefreshFriends=function(){a.setState({isFetchingFriends:!0}),setTimeout((function(){a.getFriends()}))},a.onRefreshProfile=function(){a.setState({isFetchingProfile:!0}),setTimeout((function(){a.getMe()}))},a.state={activeModal:null,activePanel:"discover",activeStory:"discover",activeView:"discover",appInitTimestamp:0,isFetchingDiscover:!1,isFetchingFriends:!1,isFetchingProfile:!1,modalData:[],modalHistory:[],fetchedUser:null,isAuthorized:!1,userData:[],userDiscoverFeed:[],userFriendsInApp:[],userGeodata:null,vkAccessToken:null},a.onPanelChange=a.onPanelChange.bind(Object(h.a)(a)),a.onStoryChange=a.onStoryChange.bind(Object(h.a)(a)),a.onViewChange=a.onViewChange.bind(Object(h.a)(a)),a.onRefreshDiscover=a.onRefreshDiscover.bind(Object(h.a)(a)),a.modalBack=function(){a.setActiveModal(a.state.modalHistory[a.state.modalHistory.length-2])},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({appInitTimestamp:this.getTimestamp()}),c.a.subscribe((function(t){if(t.detail.hasOwnProperty("type"))switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.debugLog(t.detail.data),e.setState({fetchedUser:t.detail.data}),y.a.get("https://ybsapi.herokuapp.com/user/authorize/"+t.detail.data.id).then((function(t){if(e.debugLog("! YBS-API: user/authorize"),t.data.hasOwnProperty("data")){e.debugLog(t.data.data);var a=t.data.data;a.hasOwnProperty("level")||(a.level=1),e.setState({isAuthorized:!0,userData:a})}else e.debugLog("! Auth: Failed!")})).catch((function(t){e.debugLog("ERROR: "+t)}));break;case"VKWebAppGeodataResult":e.debugLog("! Result: Geodata"),e.debugLog(t.detail.data.lat+","+t.detail.data.long),e.setState({userGeodata:{lat:t.detail.data.lat,lng:t.detail.data.long}});break;case"VKWebAppAccessTokenReceived":e.debugLog("! Result: AccessToken"),t.detail.data.hasOwnProperty("access_token")?(e.setState({vkAccessToken:t.detail.data.access_token}),e.getFriends(),e.getGroups()):e.debugLog("ACCESS_TOKEN_ERROR");break;case"VKWebAppCallAPIMethodResult":if(t.detail.data.hasOwnProperty("request_id"))switch(t.detail.data.request_id){case"1fr":y.a.post("https://ybsapi.herokuapp.com/user/friends/"+e.state.fetchedUser.id,t.detail.data.response.items).then((function(t){e.debugLog("! YBS-API: user/friends"),t.data.hasOwnProperty("data")?(e.debugLog(t.data.data),e.setState({isFetchingFriends:!1,userFriendsInApp:t.data.data})):e.debugLog(t.data)})).catch((function(t){e.debugLog("ERROR: "+t)}));break;case"1gr":y.a.post("https://ybsapi.herokuapp.com/user/communities/"+e.state.fetchedUser.id,t.detail.data.response.items).then((function(t){if(e.debugLog("! YBS-API: user/communities"),t.data.hasOwnProperty("data")){e.debugLog(t.data.data);var a=t.data.data;a.map((function(e,t){if(e.rating<3)delete a[t];else{a[t].ratio=e.rating*e.user_ratings_total;var n=e.types[0];w.hasOwnProperty(n)?a[t].badge=w[n].name||"":a[t].badge=""}})),a=a.sort((function(e,t){return t.ratio-e.ratio})),e.setState({isFetchingDiscover:!1,userDiscoverFeed:a})}else e.debugLog(t.data)})).catch((function(t){e.debugLog("ERROR: "+t)}));break;default:e.debugLog(t.detail.data)}break;default:e.debugLog("ERROR: "+t.detail.type)}})),c.a.send("VKWebAppGetUserInfo",{}),this.getToken()}},{key:"debugLog",value:function(e){}},{key:"getAppRuntime",value:function(){return this.getTimestamp()-this.state.appInitTimestamp}},{key:"getTimestamp",value:function(){return Math.floor(Date.now()/1e3)}},{key:"getFriends",value:function(){c.a.send("VKWebAppCallAPIMethod",{method:"friends.get",request_id:"1fr",params:{fields:"first_name,last_name,photo_100,photo_200",count:1e3,order:"mobile",access_token:this.state.vkAccessToken,v:"5.101"}})}},{key:"onPanelChange",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"onViewChange",value:function(e){this.setState({activeView:e.currentTarget.dataset.view})}},{key:"setActiveModal",value:function(e){e=e||null;var t=this.state.modalHistory?Object(l.a)(this.state.modalHistory):[];null===e?t=[]:-1!==t.indexOf(e)?t=t.splice(0,t.indexOf(e)+1):t.push(e),this.setState({activeModal:e,modalHistory:t})}},{key:"render",value:function(){return r.a.createElement(b.c,{isWebView:!0},r.a.createElement(b.e,{activeStory:this.state.activeStory,tabbar:r.a.createElement(b.m,null,r.a.createElement(b.n,{onClick:this.onStoryChange,selected:"discover"===this.state.activeStory,"data-story":"discover",text:"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0435"},r.a.createElement(k.a,null)),r.a.createElement(b.n,{onClick:this.onStoryChange,selected:"friends"===this.state.activeStory,"data-story":"friends",text:"\u0414\u0440\u0443\u0437\u044c\u044f"},r.a.createElement(S.a,null)),r.a.createElement(b.n,{onClick:this.onStoryChange,selected:"profile"===this.state.activeStory,"data-story":"profile",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},r.a.createElement(A.a,null)))},r.a.createElement(b.o,{id:"discover",activePanel:"discover"},r.a.createElement(b.i,{id:"discover"},r.a.createElement(b.j,null,"\u041d\u0430 \u041c\u0435\u0441\u0442\u0435"),r.a.createElement(b.k,{onRefresh:this.onRefreshDiscover,isFetching:this.state.isFetchingDiscover},0===this.state.userDiscoverFeed.length&&this.getAppRuntime()<=10&&r.a.createElement(b.g,{style:{paddingTop:"20px",paddingBottom:"20px"}},r.a.createElement(b.l,{size:"medium",style:{marginTop:10}}),r.a.createElement(b.d,{style:{textAlign:"center"}},"\u0418\u0449\u0435\u043c \u0434\u043b\u044f \u0412\u0430\u0441 \u0447\u0442\u043e-\u0442\u043e \u043d\u043e\u0432\u0435\u043d\u044c\u043a\u043e\u0435!",r.a.createElement("img",{className:"Persik",src:T.a,alt:"Persik The Cat"}))),0===this.state.userDiscoverFeed.length&&this.getAppRuntime()>10&&r.a.createElement(b.g,{style:{paddingTop:"20px",paddingBottom:"20px"}},r.a.createElement(b.d,{style:{textAlign:"center"}},"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a...")),r.a.createElement(b.g,null,r.a.createElement(b.h,null,this.state.userDiscoverFeed.map((function(e,t){return r.a.createElement(b.g,{key:t,title:e.name,style:{marginBottom:"20px"}},r.a.createElement(b.f,{slideWidth:"100%",align:"center",style:{height:200}},e.photo_url&&r.a.createElement("div",{style:{width:"100%",backgroundImage:'url("'+e.photo_url+'")',backgroundRepeat:"none"}})),e.rating&&r.a.createElement(b.d,{style:{verticalAlign:"middle",lineHeight:"20px"}},r.a.createElement("span",{style:{color:"#9a9a9a",marginRight:"10px"}},e.rating),r.a.createElement(P.a,{rating:e.rating,starEmptyColor:"#e1e1e1",starHoverColor:"gold",starRatedColor:"#ffcc00",name:"rating",starDimension:"16px",starSpacing:"2px"}),r.a.createElement("span",{style:{color:"#9a9a9a",marginRight:"5px",marginLeft:"7px"}},"(",e.user_ratings_total||0,")")),r.a.createElement(b.b,{asideContent:e.badge,description:e.address,style:{marginTop:"-20px",fontSize:"14px"}}))}))))))),r.a.createElement(b.o,{id:"friends",activePanel:"friends"},r.a.createElement(b.i,{id:"friends"},r.a.createElement(b.j,null,"\u041d\u0430 \u041c\u0435\u0441\u0442\u0435"),r.a.createElement(b.k,{onRefresh:this.onRefreshFriends,isFetching:this.state.isFetchingFriends},r.a.createElement(b.g,null,r.a.createElement(b.h,null,0===this.state.userFriendsInApp.length&&r.a.createElement(b.d,{style:{textAlign:"center"}},"\u0415\u0449\u0451 \u043d\u0438\u043a\u0442\u043e \u0438\u0437 \u0412\u0430\u0448\u0438\u0445 \u0434\u0440\u0443\u0437\u0435\u0439 \u043d\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"),this.state.userFriendsInApp.map((function(e,t){return r.a.createElement(b.d,{key:t},r.a.createElement(b.b,{before:r.a.createElement(b.a,{src:e.photo_200})},r.a.createElement("span",{style:{color:"#3a3a3a"}},e.first_name+" "+e.last_name),r.a.createElement("br",null),r.a.createElement("span",{style:{color:"#9a9a9a"}},"1 \u0443\u0440\u043e\u0432\u0435\u043d\u044c")))}))))))),r.a.createElement(b.o,{id:"profile",activePanel:"profile"},r.a.createElement(b.i,{id:"profile"},r.a.createElement(b.j,null,"\u041d\u0430 \u041c\u0435\u0441\u0442\u0435"),r.a.createElement(b.k,{onRefresh:this.onRefreshProfile,isFetching:this.state.isFetchingProfile},this.state.fetchedUser&&r.a.createElement(b.g,null,r.a.createElement(b.h,null,r.a.createElement(b.d,null,r.a.createElement(b.b,{before:this.state.fetchedUser.photo_200?r.a.createElement(b.a,{src:this.state.fetchedUser.photo_200}):r.a.createElement(b.a,null,r.a.createElement(A.a,null))},r.a.createElement("span",{style:{color:"#3a3a3a"}},"".concat(this.state.fetchedUser.first_name," ").concat(this.state.fetchedUser.last_name)),r.a.createElement("br",null),r.a.createElement("span",{style:{color:"#9a9a9a"}},"1 \u0443\u0440\u043e\u0432\u0435\u043d\u044c"))))))))))}}]),t}(r.a.Component);c.a.send("VKWebAppInit"),i.a.render(r.a.createElement(x,null),document.getElementById("root"))},62:function(e){e.exports=JSON.parse('{"accounting":{"name":"\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\u0438\u044f"},"airport":{"name":"\u0410\u044d\u0440\u043e\u043f\u043e\u0440\u0442"},"amusement_park":{"name":"\u041f\u0430\u0440\u043a \u0440\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0439"},"aquarium":{"name":"\u0410\u043a\u0432\u0430\u0440\u0438\u0443\u043c"},"art_gallery":{"name":"\u0410\u0440\u0442-\u0433\u0430\u043b\u0435\u0440\u0435\u044f"},"atm":{"name":"\u0411\u0430\u043d\u043a\u043e\u043c\u0430\u0442"},"bakery":{"name":"\u041f\u0435\u043a\u0430\u0440\u043d\u044f"},"bank":{"name":"\u0411\u0430\u043d\u043a"},"bar":{"name":"\u0411\u0430\u0440"},"beauty_salon":{"name":"\u0421\u0430\u043b\u043e\u043d \u043a\u0440\u0430\u0441\u043e\u0442\u044b"},"bicycle_store":{"name":"\u0412\u0435\u043b\u043e\u0441\u0438\u043f\u0435\u0434\u044b"},"book_store":{"name":"\u041a\u043d\u0438\u0436\u043d\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"},"bowling_alley":{"name":"\u0411\u043e\u0443\u043b\u0438\u043d\u0433"},"bus_station":{"name":"\u0410\u0432\u0442\u043e\u0431\u0443\u0441\u043d\u0430\u044f \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430"},"cafe":{"name":"\u041a\u0430\u0444\u0435"},"campground":{"name":"\u041b\u0430\u0433\u0435\u0440\u044c"},"car_dealer":{"name":"\u0410\u0432\u0442\u043e\u0441\u0430\u043b\u043e\u043d"},"car_rental":{"name":"\u041f\u0440\u043e\u043a\u0430\u0442 \u0430\u0432\u0442\u043e"},"car_repair":{"name":"\u0410\u0432\u0442\u043e\u0441\u0435\u0440\u0432\u0438\u0441"},"car_wash":{"name":"\u0410\u0432\u0442\u043e\u043c\u043e\u0439\u043a\u0430"},"casino":{"name":"\u041a\u0430\u0437\u0438\u043d\u043e"},"cemetery":{"name":"\u041a\u043b\u0430\u0434\u0431\u0438\u0449\u0435"},"church":{"name":"\u0426\u0435\u0440\u043a\u043e\u0432\u044c"},"city_hall":{"name":"\u0420\u0430\u0442\u0443\u0448\u0430"},"clothing_store":{"name":"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043e\u0434\u0435\u0436\u0434\u044b"},"convenience_store":{"name":"\u041d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"},"courthouse":{"name":"\u0421\u0443\u0434"},"dentist":{"name":"\u0421\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433"},"department_store":{"name":"\u0423\u043d\u0438\u0432\u0435\u0440\u043c\u0430\u0433"},"doctor":{"name":"\u0412\u0440\u0430\u0447"},"drugstore":{"name":"\u0410\u043f\u0442\u0435\u043a\u0430"},"electrician":{"name":"\u042d\u043b\u0435\u043a\u0442\u0440\u0438\u043a\u0430"},"electronics_store":{"name":"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u0438\u043a\u0430"},"embassy":{"name":"\u041f\u043e\u0441\u043e\u043b\u044c\u0441\u0442\u0432\u043e"},"fire_station":{"name":"\u041f\u043e\u0436\u0430\u0440\u043d\u0430\u044f \u0441\u0442\u0430\u043d\u0446\u0438\u044f"},"florist":{"name":"\u0426\u0432\u0435\u0442\u044b"},"funeral_home":{"name":"\u041f\u043e\u0445\u043e\u0440\u043e\u043d\u043d\u043e\u0435 \u0431\u044e\u0440\u043e"},"furniture_store":{"name":"\u041c\u0435\u0431\u0435\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"},"gas_station":{"name":"\u0417\u0430\u043f\u0440\u0430\u0432\u043a\u0430"},"grocery_or_supermarket":{"name":"\u0421\u0443\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442"},"gym":{"name":"\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u044b\u0439 \u0437\u0430\u043b"},"hair_care":{"name":"\u041f\u0430\u0440\u0438\u043a\u043c\u0430\u0445\u0435\u0440\u0441\u043a\u0430\u044f"},"hardware_store":{"name":"\u0421\u043a\u043b\u0430\u0434"},"hindu_temple":{"name":"\u0418\u043d\u0434\u0443\u0438\u0441\u0442\u0441\u043a\u0438\u0439 \u0445\u0440\u0430\u043c"},"home_goods_store":{"name":"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430"},"hospital":{"name":"\u0411\u043e\u043b\u044c\u043d\u0438\u0446\u0430"},"insurance_agency":{"name":"\u0421\u0442\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0438\u0435"},"jewelry_store":{"name":"\u042e\u0432\u0435\u043b\u0438\u0440\u043d\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"},"laundry":{"name":"\u041f\u0440\u0430\u0447\u0435\u0447\u043d\u0430\u044f"},"lawyer":{"name":"\u042e\u0440\u0438\u0441\u0442"},"library":{"name":"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430"},"light_rail_station":{"name":""},"liquor_store":{"name":"\u0412\u0438\u043d\u043d\u044b\u0439 \u043c\u0430\u0433\u0430\u0437\u0438\u043d"},"local_government_office":{"name":"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"},"locksmith":{"name":"\u0421\u043b\u0435\u0441\u0430\u0440\u044c"},"lodging":{"name":"\u0416\u0438\u043b\u044c\u0451"},"meal_delivery":{"name":"\u0415\u0434\u0430 \u043d\u0430 \u0437\u0430\u043a\u0430\u0437"},"meal_takeaway":{"name":"\u0415\u0434\u0430 \u0441 \u0441\u043e\u0431\u043e\u0439"},"mosque":{"name":"\u041c\u0435\u0447\u0435\u0442\u044c"},"movie_rental":{"name":""},"movie_theater":{"name":"\u041a\u0438\u043d\u043e\u0442\u0435\u0430\u0442\u0440"},"moving_company":{"name":""},"museum":{"name":"\u041c\u0443\u0437\u0435\u0439"},"night_club":{"name":"\u041d\u043e\u0447\u043d\u043e\u0439 \u043a\u043b\u0443\u0431"},"painter":{"name":"\u0425\u0443\u0434\u043e\u0436\u043d\u0438\u043a"},"park":{"name":"\u041f\u0430\u0440\u043a"},"parking":{"name":"\u041f\u0430\u0440\u043a\u043e\u0432\u043a\u0430"},"pet_store":{"name":"\u0417\u043e\u043e\u043c\u0430\u0433\u0430\u0437\u0438\u043d"},"pharmacy":{"name":"\u0410\u043f\u0442\u0435\u043a\u0430"},"physiotherapist":{"name":"\u0424\u0438\u0437\u0438\u043e\u0442\u0435\u0440\u0430\u043f\u0435\u0432\u0442"},"plumber":{"name":"\u0412\u043e\u0434\u043e\u043f\u0440\u043e\u0432\u043e\u0434\u0447\u0438\u043a"},"point_of_interest":{"name":"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e"},"police":{"name":"\u041f\u043e\u043b\u0438\u0446\u0438\u044f"},"post_office":{"name":"\u041f\u043e\u0447\u0442\u0430"},"primary_school":{"name":"\u041d\u0430\u0447\u0430\u043b\u044c\u043d\u0430\u044f \u0448\u043a\u043e\u043b\u0430"},"real_estate_agency":{"name":"\u0410\u0433\u0435\u043d\u0441\u0442\u0432\u043e \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438"},"restaurant":{"name":"\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d"},"roofing_contractor":{"name":""},"rv_park":{"name":""},"school":{"name":"\u0428\u043a\u043e\u043b\u0430"},"secondary_school":{"name":"\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u0448\u043a\u043e\u043b\u0430"},"shoe_store":{"name":"\u041c\u0430\u0433\u0430\u0438\u043d \u043e\u0431\u0443\u0432\u0438"},"shopping_mall":{"name":"\u0422\u043e\u0440\u0433\u043e\u0432\u044b\u0439 \u0446\u0435\u043d\u0442\u0440"},"spa":{"name":"\u0421\u043f\u0430"},"stadium":{"name":"\u0421\u0442\u0430\u0434\u0438\u043e\u043d"},"storage":{"name":"\u0421\u043a\u043b\u0430\u0434"},"store":{"name":"\u041c\u0430\u0433\u0430\u0437\u0438\u043d"},"subway_station":{"name":"\u0421\u0442\u0430\u043d\u0446\u0438\u044f \u043c\u0435\u0442\u0440\u043e"},"supermarket":{"name":"\u0421\u0443\u043f\u0435\u0440\u043c\u0430\u0440\u043a\u0435\u0442"},"synagogue":{"name":"\u0421\u0438\u043d\u0430\u0433\u043e\u0433\u0430"},"taxi_stand":{"name":"\u0422\u0430\u043a\u0441\u043e\u043f\u0430\u0440\u043a"},"tourist_attraction":{"name":"\u0414\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},"train_station":{"name":"\u0412\u043e\u043a\u0437\u0430\u043b"},"transit_station":{"name":""},"travel_agency":{"name":"\u0422\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0430\u0433\u0435\u043d\u0441\u0442\u0432\u043e"},"university":{"name":"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442"},"veterinary_care":{"name":"\u0412\u0435\u0442\u0435\u0440\u0438\u043d\u0430\u0440"},"zoo":{"name":"\u0417\u043e\u043e\u043f\u0430\u0440\u043a"}}')}},[[165,1,2]]]);
//# sourceMappingURL=main.c82556dd.chunk.js.map