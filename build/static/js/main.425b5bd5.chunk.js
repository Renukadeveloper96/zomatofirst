(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{33:function(e,t,a){},60:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(34),c=a.n(n),i=a(10),r=a(6),l=a(2),o=a(3),d=a(5),j=a(4),h=a(13),u=a.n(h),m=(a(60),a(0)),b=function(e){return Object(m.jsx)("div",{id:"content",children:function(e){var t=e.listData;return t?t.length>0?t.map((function(e){return Object(m.jsx)("div",{className:"item",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-5",children:Object(m.jsx)("img",{className:"Image",alt:e.restaurant_name,src:e.restaurant_thumb})}),Object(m.jsx)("div",{className:"col-md-7",children:Object(m.jsxs)("div",{className:"hotel_name",children:[Object(m.jsx)(i.b,{to:"/details/".concat(e.restaurant_id),children:e.restaurant_name}),Object(m.jsx)("div",{className:"city_name rating1",children:e.address}),Object(m.jsx)("div",{className:"city_name rating2",children:e.rating_text}),Object(m.jsxs)("div",{className:"city_name rating3",children:["Rs.",e.cost]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"label label-primary",children:e.mealTypes[0].mealtype_name})," \xa0",Object(m.jsx)("span",{className:"label label-success",children:e.mealTypes[1].mealtype_name})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"label label-warning",children:e.cuisines[0].cuisine_name})," \xa0",Object(m.jsx)("span",{className:"label label-info",children:e.cuisines[1].cuisine_name})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("i",{class:"fa fa-star-o",style:{color:"red"}}),"\xa0",Object(m.jsx)("i",{class:"fa fa-star-o",style:{color:"red"}}),"\xa0",Object(m.jsx)("i",{class:"fa fa-star-o",style:{color:"red"}}),"\xa0",Object(m.jsx)("i",{class:"fa fa-star-o",style:{color:"gray"}}),"\xa0",Object(m.jsx)("i",{class:"fa fa-star-o",style:{color:"gray"}}),"\xa0"]})]})})]})},e._id)})):Object(m.jsx)("div",{children:Object(m.jsx)("h2",{children:"No Data For this filter"})}):Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:"/images/loader.gif",alt:"loader"}),Object(m.jsx)("h3",{children:"loading...."})]})}(e)})},p=(a(33),"https://zomatojulyapi.herokuapp.com/filter"),O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).filterCuisine=function(t){var a,s=sessionStorage.getItem("mealId"),n=t.target.value;a=""==n?"".concat(p,"/").concat(s):"".concat(p,"/").concat(s,"?cuisine=").concat(n),u.a.get(a).then((function(t){e.props.restPerCusinie(t.data)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"cusineFilter",children:[Object(m.jsx)("h3",{className:"h3",children:"Cuisine Filter"}),Object(m.jsxs)("div",{onChange:this.filterCuisine,children:[Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"1"}),"North Indian"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"2"}),"South Indian"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"3"}),"Chinese"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"4"}),"Fast Food"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"5"}),"Street Food"]})]})]})}}]),a}(s.Component),x=O,f="https://zomatojulyapi.herokuapp.com/filter",v=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).filterCost=function(t){var a,s=sessionStorage.getItem("mealId"),n=t.target.value.split("-"),c=n[0],i=n[1];a=""==t.target.value?"".concat(f,"/").concat(s):"".concat(f,"/").concat(s,"?lcost=").concat(c,"&hcost=").concat(i),u.a.get(a).then((function(t){e.props.restPerCost(t.data)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"cusineFilter",children:[Object(m.jsx)("h3",{className:"h3",children:"Cost Filter"}),Object(m.jsxs)("div",{onChange:this.filterCost,children:[Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"200-300"}),"201-300"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"301-600"}),"301-600"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"601-1000"}),"601-1000"]}),Object(m.jsxs)("label",{className:"radio",children:[Object(m.jsx)("input",{type:"radio",name:"cuisine",value:"1001-1500"}),"1001-1500"]})]})]})}}]),a}(s.Component),g=v,y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this)).setDataAsPerFilter=function(e){s.setState({restaurantList:e})},s.state={restaurantList:""},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{id:"mainListing",children:[Object(m.jsxs)("div",{id:"filter",children:[Object(m.jsx)(x,{restPerCusinie:function(t){e.setDataAsPerFilter(t)}}),Object(m.jsx)("hr",{}),Object(m.jsx)(g,{restPerCost:function(t){e.setDataAsPerFilter(t)}}),Object(m.jsx)("hr",{})]}),Object(m.jsx)(b,{listData:this.state.restaurantList})]})})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.mealId;sessionStorage.setItem("mealId",t),u.a.get("".concat("https://zomatojulyapi.herokuapp.com/restaurant?mealtype_id=2").concat(t)).then((function(t){e.setState({restaurantList:t.data})}))}}]),a}(s.Component),N=(a(67),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this)).renderCity=function(e){if(e)return e.map((function(e){return Object(m.jsx)("option",{value:e.state_id,children:e.state},e.state_id)}))},s.renderRestaurants=function(e){if(e)return e.map((function(e){return Object(m.jsxs)("option",{value:e.restaurant_id,children:[e.restaurant_name," | ",e.address]})}))},s.handleCity=function(e){console.log(e.target.value);var t=e.target.value;fetch("".concat("https://zomatojulyapi.herokuapp.com/restaurant?stateId=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){s.setState({restaurant:e})}))},s.handleRest=function(e){s.props.history.push("/details/".concat(e.target.value))},s.state={location:"",restaurant:""},s}return Object(o.a)(a,[{key:"render",value:function(){return console.log(this.state.restaurant),Object(m.jsxs)("div",{id:"search",children:[Object(m.jsx)("div",{class:"bike",children:Object(m.jsx)("img",{src:"images/logo.svg",style:{height:"150px",width:"150px"}})}),Object(m.jsx)("div",{id:"logo",children:Object(m.jsx)("span",{children:"e!"})}),Object(m.jsxs)("div",{id:"heading",children:[Object(m.jsx)("span",{className:"COLORSF",children:"Find"})," The Best Rest\xe5ur\xe2nts,",Object(m.jsx)("span",{className:"COLORSF",children:"Caf\xe9s and b\xe4rs"})," ",Object(m.jsx)("span",{id:"usercity"})]}),Object(m.jsxs)("div",{id:"dropdown",children:[Object(m.jsxs)("select",{id:"city",onChange:this.handleCity,children:[Object(m.jsx)("option",{children:"---SELECT LOCATION---"}),this.renderCity(this.state.location)]}),Object(m.jsx)("select",{id:"restaurants",onChange:this.handleRest,children:this.renderRestaurants(this.state.restaurant)})]})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://zomatojulyapi.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({location:t})}))}}]),a}(s.Component)),C=Object(r.e)(N),k=(a(68),function(e){return Object(m.jsxs)("div",{id:"quicksearch",children:[Object(m.jsx)("span",{id:"QuickHeading",children:"Quick Searches"}),Object(m.jsx)("span",{id:"QuickSubHeading",children:"Discover rest\xe5ur\xe2nts by type of meal"}),Object(m.jsx)("div",{id:"mainTileContainer",children:function(e){var t=e.quickData;if(t)return t.map((function(e){return Object(m.jsx)(i.b,{to:"/list/".concat(e.mealtype_id),children:Object(m.jsxs)("div",{className:"tileContainer",children:[Object(m.jsx)("div",{className:"tileComponent1",children:Object(m.jsx)("img",{src:e.meal_image,alt:"breakfast"})}),Object(m.jsxs)("div",{className:"tileComponent2",children:[Object(m.jsx)("div",{className:"componentHeading",children:e.mealtype}),Object(m.jsx)("div",{className:"componentSubHeading",children:e.content})]})]})},e.mealtype_id)}))}(e)})]})}),I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={QuickData:""},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)(k,{quickData:this.state.QuickData})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://zomatojulyapi.herokuapp.com/quicksearch").then((function(e){return e.json()})).then((function(t){e.setState({QuickData:t})}))}}]),a}(s.Component),S=function(){return Object(m.jsxs)("div",{id:"main",children:[Object(m.jsx)(C,{}),Object(m.jsx)(I,{})]})},_=a(23),w=a.n(_),D=a(37),L=(a(70),a(16)),P=(a(71),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).orderId=[],e.placeOrder=function(t){e.orderId.push("".concat(t)),e.props.finalOrder(e.orderId)},e.removeOrder=function(t){e.orderId.splice(e.orderId.indexOf(t.toString()),1),e.props.finalOrder(e.orderId)},e.renderMenu=function(t){var a=t.menudata;if(a)return a.map((function(t){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"col-md-7",children:[Object(m.jsx)("b",{children:t.menu_id})," \xa0",Object(m.jsx)("img",{src:t.menu_image,alt:t.menu_name,style:{height:80,width:80},className:"imgcircle"}),"\xa0\xa0 ",t.menu_name," - ",t.menu_price]}),Object(m.jsxs)("div",{className:"col-md-4 col-md-77",children:[Object(m.jsx)("button",{className:"btn  btncircle",onClick:function(){e.placeOrder(t.menu_id)},children:Object(m.jsx)("span",{class:"pm",children:"+"})})," \xa0",Object(m.jsx)("button",{className:"btn  btncircle1 ",onClick:function(){e.removeOrder(t.menu_id)},children:Object(m.jsx)("span",{class:"pm",children:"-"})})]}),"\xa0"]},t.menu_id)}))},e.renderCart=function(e){if(e)return e.map((function(e,t){return Object(m.jsxs)("b",{children:[" ",e," \xa0\xa0 "]},t)}))},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"col-md-12 bg-warning",children:["Item Number",Object(m.jsxs)("span",{className:"style",children:["(",this.renderCart(this.orderId),") added"]})]}),Object(m.jsx)("div",{className:"col-md-12 bg-danger",children:this.renderMenu(this.props)}),Object(m.jsx)("br",{}),Object(m.jsx)("hr",{})]})}}]),a}(s.Component)),T=Object(r.e)(P),F=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).addToCart=function(t){console.log("data in card",t),e.setState({userItem:t})},e.proceed=function(){sessionStorage.setItem("menu",e.state.userItem),e.props.history.push("/placeOrder/".concat(e.state.details.restaurant_name))},e.state={details:"",menuList:"",userItem:""},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state.details;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"panel panel-danger",children:[Object(m.jsx)("div",{className:"panel-heading",children:this.state.details.restaurant_name}),Object(m.jsxs)("div",{className:"panel-body",children:[Object(m.jsx)("img",{src:t.restaurant_thumb,alt:t.restaurant_name,className:"sliderImage"}),Object(m.jsx)("hr",{}),Object(m.jsx)("h2",{children:t.restaurant_name}),Object(m.jsxs)("h2",{children:[Object(m.jsxs)("span",{children:[Object(m.jsx)("i",{class:"fa fa-star-o star",style:{color:"yellow"}}),"\xa0",Object(m.jsx)("i",{class:"fa fa-star-o star",style:{color:"yellow"}}),"\xa0",Object(m.jsx)("i",{class:"fa fa-star-o star",style:{color:"yellow"}}),"\xa0",Object(m.jsx)("i",{class:"fa fa-star-o star",style:{color:"gray"}}),"\xa0",Object(m.jsx)("i",{class:"fa fa-star-o star",style:{color:"gray"}}),"\xa0"]}),Object(m.jsxs)("span",{class:"rating_txt",children:["(",t.average_rating,")",Object(m.jsxs)("h2",{children:["(",t.rating_text,")"]})]})]}),Object(m.jsxs)(L.d,{children:[Object(m.jsxs)(L.b,{children:[Object(m.jsx)(L.a,{children:"Details"}),Object(m.jsx)(L.a,{children:"Menu"})]}),Object(m.jsx)(L.c,{children:Object(m.jsxs)("p",{children:[t.restaurant_name," is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]})}),Object(m.jsxs)(L.c,{children:[Object(m.jsx)("h2",{children:"Menu"}),Object(m.jsx)(T,{menudata:this.state.menuList,restId:this.props.match.params.restId,finalOrder:function(t){e.addToCart(t)}})]})]}),Object(m.jsx)("button",{className:"btn btn-success",onClick:this.proceed,children:"Proceed"})]})]})})]})}},{key:"componentDidMount",value:function(){var e=Object(D.a)(w.a.mark((function e(){var t,a,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.restId,e.next=3,u.a.get("".concat("https://zomatojulyapi.herokuapp.com/details","/").concat(t));case 3:return a=e.sent,e.next=6,u.a.get("".concat("https://zomatojulyapi.herokuapp.com/menu","/").concat(t));case 6:s=e.sent,console.log(a.data),console.log(s.data),this.setState({details:a.data[0],menuList:s.data});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(s.Component),R=F,M=a(17),A=(a(72),a(73),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).handleLogout=function(){e.setState({userData:""}),sessionStorage.removeItem("ltk"),sessionStorage.removeItem("userData"),e.props.history.push("/")},e.conditionalHeader=function(){if(e.state.userData.name){var t=e.state.userData,a=[t.name,t.email,t.phone,t.role];return sessionStorage.setItem("userData",a),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("button",{className:"btn btn-info",children:["Hi ",e.state.userData.name]}),"\xa0",Object(m.jsx)("button",{className:"btn btn-warning",onClick:e.handleLogout,children:"Logout"})]})}return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(i.b,{to:"/login",className:"btn btn-success",children:Object(m.jsx)("span",{className:"glyphicon glyphicon-log-in",children:" LogIn"})})," \xa0",Object(m.jsx)(i.b,{to:"/register",className:"btn btn-warning",children:Object(m.jsx)("span",{className:"glyphicon glyphicon-user",children:" Register"})})]})},e.state={userData:""},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("header",{id:"header",children:[Object(m.jsxs)("div",{id:"logo_main",children:[Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("h1",{id:"headingListing",children:"E!"})}),Object(m.jsx)(i.b,{to:"/viewOrder",children:"Orders"})]}),Object(m.jsx)("div",{className:"logoRight",children:this.conditionalHeader()})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://loginregisterapi.herokuapp.com/api/auth/userinfo",{method:"GET",headers:{"x-access-token":sessionStorage.getItem("ltk")}}).then((function(e){return e.json()})).then((function(t){e.setState({userData:t})}))}}]),a}(s.Component)),z=Object(r.e)(A),E=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(M.a)({},e.target.name,e.target.value))},s.handleSubmit=function(){console.log(s.state),fetch("https://zomatojulyapi.herokuapp.com/placeOrder",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(s.state)}).then(console.log("payment gateway"))},s.renderItems=function(e){return e?e.map((function(e){return Object(m.jsx)("div",{className:"items",children:Object(m.jsxs)("span",{children:[Object(m.jsx)("img",{src:e.menu_image,alt:e.menu_name,className:"placeorderimage"}),Object(m.jsx)("h4",{className:"placeorderimage1",children:Object(m.jsx)("span",{className:"menuprice",children:e.menu_name})}),Object(m.jsx)("h4",{className:"placeorderimage1",children:Object(m.jsxs)("span",{className:"menuprice",children:["Rs ",e.menu_price]})})]})},e.menu_id)})):Object(m.jsx)("img",{src:"/images/loader.gif",alt:"loader"})},s.state={details:"",amount:0,hotel_name:s.props.match.params.restName,name:"",phone:"",email:"",address:"",status:"Pending"},s}return Object(o.a)(a,[{key:"render",value:function(){return console.log(this.state),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(z,{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"panel panel-info",children:[Object(m.jsxs)("div",{className:"panel-heading",children:["Your order from ",this.props.match.params.restName," is below:"]}),Object(m.jsx)("div",{className:"panel-body",children:Object(m.jsxs)("form",{method:"POST",action:"https://paymentgatewayt.herokuapp.com//paynow",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"EmailId"}),Object(m.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Phone"}),Object(m.jsx)("input",{className:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Address"}),Object(m.jsx)("input",{className:"form-control",name:"address",value:this.state.address,onChange:this.handleChange})]})})]}),Object(m.jsx)("input",{type:"hidden",name:"amount",value:this.state.amount})]}),this.renderItems(this.state.details),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-12 menuprice3",children:Object(m.jsxs)("span",{className:"menuprice1",children:["Total Cost is Rs.",Object(m.jsx)("span",{className:"menuprice2",children:this.state.amount})]})})}),Object(m.jsx)("button",{className:"btn btn-success btn1",onClick:this.handleSubmit,type:"submit",children:"Checkout"})]})})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("menu"),a=[];t.split(",").map((function(e){return a.push(parseInt(e)),"ok"})),fetch("https://zomatojulyapi.herokuapp.com/menuItem",{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(t){var a=0;t.map((function(e){return a+=parseInt(e.menu_price),"ok"})),e.setState({details:t,amount:a})}))}}]),a}(s.Component),H=function(e){return Object(m.jsx)("div",{class:"modal",id:"myModal",children:Object(m.jsx)("div",{class:"modal-dialog",children:Object(m.jsxs)("div",{class:"modal-content",children:[Object(m.jsxs)("div",{class:"modal-header",children:[Object(m.jsx)("h4",{class:"modal-title",children:"View Orders"}),Object(m.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",children:"\xd7"})]}),Object(m.jsx)("div",{class:"modal-body",children:Object(m.jsxs)("table",{class:"table table-striped",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Restau Name"}),Object(m.jsx)("th",{children:" Name"}),Object(m.jsx)("th",{children:"Phone"}),Object(m.jsx)("th",{children:"Email"}),Object(m.jsx)("th",{children:"Address"}),Object(m.jsx)("th",{children:"Price"}),Object(m.jsx)("th",{children:"status"})]})}),Object(m.jsx)("tbody",{class:"background-color",children:function(e){var t=e.orderData;if(t)return t.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.hotel_name}),Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.phone}),Object(m.jsx)("td",{children:e.email}),Object(m.jsx)("td",{children:e.address}),Object(m.jsxs)("td",{children:["Rs.",e.amount]}),Object(m.jsx)("td",{children:e.status})]})}))}(e)})]})})]})})})},J=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={orders:""},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)(H,{orderData:this.state.orders})})}},{key:"componentDidMount",value:function(){var e=this;u.a.get("https://zomatojulyapi.herokuapp.com/viewOrder").then((function(t){e.setState({orders:t.data})}))}}]),a}(s.Component),Q=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(M.a)({},e.target.name,e.target.value))},s.handleSubmit=function(){console.log(s.state),fetch("https://loginregisterapi.herokuapp.com/api/auth/login",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(s.state)}).then((function(e){return e.json()})).then((function(e){!1===e.auth?s.setState({message:e.token}):(sessionStorage.setItem("ltk",e.token),s.props.history.push("/"))}))},s.state={email:"",password:""},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"panel panel-warning",children:Object(m.jsxs)("div",{className:"panel-body",children:[Object(m.jsx)("h2",{style:{color:"red"},children:this.state.message}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"EmailId"}),Object(m.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{className:"form-control",name:"password",value:this.state.password,onChange:this.handleChange})]})})]})}),Object(m.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"Login"})]})})]})}}]),a}(s.Component),q=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleChange=function(e){s.setState(Object(M.a)({},e.target.name,e.target.value))},s.handleSubmit=function(){console.log(s.state),fetch("https://loginregisterapi.herokuapp.com/api/auth/register",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(s.state)}).then(s.props.history.push("/login"))},s.state={name:"",phone:"",email:"",password:""},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("br",{}),Object(m.jsx)("div",{className:"panel panel-info",children:Object(m.jsxs)("div",{className:"panel-body",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Name"}),Object(m.jsx)("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"EmailId"}),Object(m.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Phone"}),Object(m.jsx)("input",{className:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]})}),Object(m.jsx)("div",{className:"col-md-6",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{className:"form-control",name:"password",value:this.state.password,onChange:this.handleChange})]})})]})}),Object(m.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"Register"})]})})]})}}]),a}(s.Component),G=function(){return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(z,{}),Object(m.jsx)(r.a,{exact:!0,path:"/",component:S}),Object(m.jsx)(r.a,{path:"/list/:mealId",component:y}),Object(m.jsx)(r.a,{path:"/details/:restId",component:R}),Object(m.jsx)(r.a,{path:"/placeOrder/:restName",component:E}),Object(m.jsx)(r.a,{path:"/viewOrder",component:J}),Object(m.jsx)(r.a,{path:"/register",component:q}),Object(m.jsx)(r.a,{path:"/login",component:Q})]})};c.a.render(Object(m.jsx)(G,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.425b5bd5.chunk.js.map