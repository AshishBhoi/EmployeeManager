webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),s=a("kxiW"),n=a.n(s),o={name:"navbar",data:function(){return{isLogedIn:!1,currentUser:!1,isVerefied:!1}},created:function(){var e=this;n.a.auth().currentUser&&(this.isLogedIn=!0,this.currentUser=n.a.auth().currentUser.email,n.a.auth().onAuthStateChanged(function(t){t.emailVerified?e.isVerefied=!0:e.isVerefied=!1}))},methods:{logout:function(){var e=this;n.a.auth().signOut().then(function(){alert("Signout Successful"),e.$router.go({path:e.$router.path})}).catch(function(e){alert(e.message)})}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("div",{staticClass:"nav-wrapper green"},[a("div",{staticClass:"container"},[a("router-link",{staticClass:"brand-logo left",attrs:{to:"/"}},[e._v("Employee Manager")]),e._v(" "),a("ul",{staticClass:"right",attrs:{id:"nav-mobile"}},[e.isVerefied?a("li",{staticClass:"email black-text"},[e._v(e._s(e.currentUser))]):e._e(),e._v(" "),e.isVerefied?a("li",[a("router-link",{attrs:{to:"/"}},[e._v("Dashboard")])],1):e._e(),e._v(" "),e.isLogedIn?e._e():a("li",[a("router-link",{attrs:{to:"/login"}},[e._v("Login")])],1),e._v(" "),e.isLogedIn?e._e():a("li",[a("router-link",{attrs:{to:"/register"}},[e._v("Register")])],1),e._v(" "),e.isLogedIn?a("li",[a("button",{staticClass:"btn black",on:{click:e.logout}},[e._v("Logout")])]):e._e()])],1)])])},staticRenderFns:[]},l={name:"App",components:{Navbar:a("VU/8")(o,r,!1,null,null,null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},d=a("VU/8")(l,c,!1,null,null,null).exports,u=a("/ocq"),p=a("yviF"),m=a.n(p),v=(a("881v"),m.a.initializeApp({apiKey:"AIzaSyCA4exPC-S2oDC9ReI1tqrNGoc5tUdJ1sQ",authDomain:"vuejs-fs.firebaseapp.com",databaseURL:"https://vuejs-fs.firebaseio.com",projectId:"vuejs-fs",storageBucket:"vuejs-fs.appspot.com",messagingSenderId:"574952236739"}).firestore()),f={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;v.collection("employees").orderBy("dept").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept,position:t.data().position};e.employees.push(a)})})}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v(e._s(t.dept))]),e._v(e._s(t.employee_id)+":"+e._s(t.name)+"\n\n            "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.id}}}},[a("i",{staticClass:"fa fa-eye fa-lg"})])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large waves-effect waves-light red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Employees")])])}]},_=a("VU/8")(f,h,!1,null,null,null).exports;v.settings({timestampsInSnapshots:!0});var g={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null,position:null}},methods:{saveEmploey:function(){var e=this;v.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(t){return e.$router.push("/")}).catch(function(e){return console.log(e)})}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h3",[e._v("New Employee")]),e._v(" "),a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmploey(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",[e._v("Employee ID")])]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("Name")])]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",[e._v("Department")])]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),e._v(" "),a("label",[e._v("Position")])])]),e._v(" "),e._m(0),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel"),a("i",{staticClass:"fa fa-times-circle right"})])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"btn",attrs:{type:"submit"}},[this._v("Submit"),t("i",{staticClass:"fa fa-paper-plane right"})])}]},C=a("VU/8")(g,y,!1,null,null,null).exports;v.settings({timestampsInSnapshots:!0});var w={name:"view-employee",data:function(){return{id:null,employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){v.collection("employees").doc(e.params.employee_id).get().then(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position,t.id=e.id})})},watch:{$route:"fetchData"},methods:{fetchData:function(){v.collection("employees").doc(this.$root.params.employee_id).get().then(function(e){this.employee_id=e.data().employee_id,this.name=e.data().name,this.dept=e.data().dept,this.position=e.data().position,this.id=e.id})},deleteEmployee:function(){if(confirm("Are You Sure?")){var e=this.$route.params.employee_id;v.collection("employees").doc(e).delete().then(function(){this.$router.push("/")})}}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-employee"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v("ID : "+e._s(e.employee_id))])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Name : "+e._s(e.name))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Department : "+e._s(e.dept))]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Position : "+e._s(e.position))])]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back"),a("i",{staticClass:"fa fa-angle-double-left left"})]),e._v(" "),a("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete"),a("i",{staticClass:"fa fa-trash-alt right"})]),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large waves-effect waves-light red",attrs:{to:{name:"edit-employee",params:{employee_id:e.id}}}},[a("i",{staticClass:"fa fa-pencil-alt"})])],1)],1)},staticRenderFns:[]},x=a("VU/8")(w,b,!1,null,null,null).exports;v.settings({timestampsInSnapshots:!0});var E={name:"edit-employee",data:function(){return{id:null,employee_id:null,name:null,dept:null,position:null}},beforeRouteEnter:function(e,t,a){v.collection("employees").doc(e.params.employee_id).get().then(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept,t.position=e.data().position,t.id=e.id})})},watch:{$route:"fetchData"},methods:{fetchData:function(){v.collection("employees").doc(this.$root.params.employee_id).get().then(function(e){this.employee_id=e.data().employee_id,this.name=e.data().name,this.dept=e.data().dept,this.position=e.data().position,this.id=e.id})},updateEmploey:function(){var e=this,t=this.$route.params.employee_id;v.collection("employees").doc(t).update({employee_id:this.employee_id,name:this.name,dept:this.dept,position:this.position}).then(function(){e.$router.push({name:"view-employee",params:t})})},CancelEdit:function(){var e=this.$route.params.employee_id;this.$router.push({name:"view-employee",params:e})}}},P={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-employee"}},[a("h3",[e._v("Edit Employee")]),e._v(" "),a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmploey(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),e._v(" "),e._m(0),e._v(" "),a("button",{staticClass:"btn grey",on:{click:e.CancelEdit}},[e._v("Cancel"),a("i",{staticClass:"fa fa-times-circle right"})])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"btn waves-effect waves-light",attrs:{type:"submit"}},[this._v("Submit"),t("i",{staticClass:"fa fa-paper-plane right"})])}]},q=a("VU/8")(E,P,!1,null,null,null).exports,$={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(e){var t=this;n.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(e){alert("You Are logged in"),t.$router.go({path:t.$router.path})},function(e){alert(e.message)}),e.preventDefault()}}},V={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"login"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel green lighten-1 white-text center"},[a("h3",[e._v("Login")]),e._v(" "),a("form",[a("div",{staticClass:"input-field col s12"},[a("i",{staticClass:"fa fa-envelope prefix"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("i",{staticClass:"fa fa-lock prefix"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{staticClass:"white-text",attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",on:{click:e.login}},[e._v("Login")])])])])])])])},staticRenderFns:[]},k=a("VU/8")($,V,!1,null,null,null).exports,U={name:"register",data:function(){return{email:"",password:"",confPassword:""}},methods:{register:function(e){var t=this;this.password==this.confPassword?n.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(e){alert("Account Created"),t.$router.go({path:t.$router.path})},function(e){alert(e.message)}):alert("Confirm Password Doesnt Match With Password"),e.preventDefault()}}},A={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"register"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col s12 m8 offset-m2"},[a("div",{staticClass:"login card-panel grey lighten-4 black-text center"},[a("h3",[e._v("Register")]),e._v(" "),a("form",[a("div",{staticClass:"input-field col s12"},[a("i",{staticClass:"fa fa-envelope prefix"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",id:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"email"}},[e._v("Email")])]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("i",{staticClass:"fa fa-lock prefix"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"password"}},[e._v("Password")])]),e._v(" "),a("div",{staticClass:"input-field col s12"},[a("i",{staticClass:"fa fa-lock prefix"}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.confPassword,expression:"confPassword"}],attrs:{type:"password",id:"confPassword"},domProps:{value:e.confPassword},on:{input:function(t){t.target.composing||(e.confPassword=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"conf-password"}},[e._v("Confirm Password")])]),e._v(" "),a("button",{staticClass:"btn btn-large grey lighten-4 black-text",on:{click:e.register}},[e._v("Register")])])])])])])])},staticRenderFns:[]},N=a("VU/8")(U,A,!1,null,null,null).exports,D={name:"verefy",methods:{sendVereficationEmail:function(){n.a.auth().currentUser.sendEmailVerification(),alert("Verefication Email Sent")}}},R={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h3",[e._v("Please Verefy Your Email")]),e._v(" "),a("button",{staticClass:"btn",on:{click:e.sendVereficationEmail}},[e._v("Resend Verefication Email")]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("h6",[e._v("Once Verefied Please Refresh The Page")])])},staticRenderFns:[]},S=a("VU/8")(D,R,!1,null,null,null).exports,I={render:function(){var e=this.$createElement;return(this._self._c||e)("h3",[this._v("Your Email Has Been Verefied")])},staticRenderFns:[]},L=a("VU/8")(null,I,!1,null,null,null).exports;i.a.use(u.a);var F=new u.a({routes:[{path:"/",name:"dashboard",component:_,meta:{requiresAuth:!0,requiresConfirm:!0}},{path:"/login",name:"login",component:k,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:N,meta:{requiresGuest:!0}},{path:"/verefy",name:"verefy",component:S,meta:{requiresAuth:!0,realtimeVerefication:!0}},{path:"/verefied",name:"verefied",component:L,meta:{requiresAuth:!0,requiresConfirm:!0}},{path:"/new",name:"new-employee",component:C,meta:{requiresAuth:!0,requiresConfirm:!0}},{path:"/:employee_id",name:"view-employee",component:x,meta:{requiresAuth:!0,requiresConfirm:!0}},{path:"/edit/:employee_id",name:"edit-employee",component:q,meta:{requiresAuth:!0,requiresConfirm:!0}}]});F.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.requiresAuth})&&(n.a.auth().currentUser?a():a({path:"/login",query:{redirect:e.path}})),e.matched.some(function(e){return e.meta.requiresGuest})&&(n.a.auth().currentUser?a({path:"/",query:{redirect:e.path}}):a()),e.matched.some(function(e){return e.meta.requiresConfirm})&&n.a.auth().currentUser&&n.a.auth().onAuthStateChanged(function(t){t.emailVerified?a():(n.a.auth().currentUser.sendEmailVerification(),a({path:"/verefy",query:{redirect:e.path}}))}),e.matched.some(function(e){return e.meta.realtimeVerefication})?n.a.auth().onAuthStateChanged(function(t){t.emailVerified?a({path:"/verefied",query:{redirect:e.fullPath}}):a({path:"/verefy",query:{redirect:e.path}})}):a()});var j=F;a("X0eL"),a("7t+N"),a("0lrd"),a("ao2D");i.a.config.productionTip=!1;var W=void 0;n.a.auth().onAuthStateChanged(function(e){W||(W=new i.a({el:"#app",router:j,components:{App:d},template:"<App/>"}))})},X0eL:function(e,t){},ao2D:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ade626904f0bf37fddab.js.map