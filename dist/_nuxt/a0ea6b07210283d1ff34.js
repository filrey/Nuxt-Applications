(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{378:function(e,t,n){var content=n(396);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("ff299178",content,!0,{sourceMap:!1})},380:function(e,t,n){"use strict";n(12),n(10),n(9);var r=n(2),o=(n(91),n(7),n(6),n(205),n(37),n(41),n(93));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach(function(t){Object(r.a)(e,t,source[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(source).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))})}return e}t.a=Object(o.b)("form").extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",function(t){e.$set(e.errorBag,input._uid,t)},{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))}):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter(function(input){return!input.validate(!0)}).length},reset:function(){this.inputs.forEach(function(input){return input.reset()}),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout(function(){e.errorBag={}},0)},resetValidation:function(){this.inputs.forEach(function(input){return input.resetValidation()}),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find(function(i){return i._uid===input._uid});if(e){var t=this.watchers.find(function(i){return i._uid===e._uid});t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter(function(i){return i._uid!==e._uid}),this.inputs=this.inputs.filter(function(i){return i._uid!==e._uid}),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.$attrs),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},393:function(e,t,n){"use strict";var r=n(19),o=n(394),l=n(207),c=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(l);r(r.P+r.F*c,"String",{padStart:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},394:function(e,t,n){var r=n(45),o=n(208),l=n(44);e.exports=function(e,t,n,c){var h=String(l(e)),d=h.length,f=void 0===n?" ":String(n),v=r(t);if(v<=d||""==f)return h;var m=v-d,w=o.call(f,Math.ceil(m/f.length));return w.length>m&&(w=w.slice(0,m)),c?w+h:h+w}},395:function(e,t,n){"use strict";var r=n(378);n.n(r).a},396:function(e,t,n){(e.exports=n(13)(!1)).push([e.i,".container{min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}",""])},397:function(e,t,n){var content=n(398);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(14).default)("5939d713",content,!0,{sourceMap:!1})},398:function(e,t,n){(e.exports=n(13)(!1)).push([e.i,".v-rating{max-width:100%;white-space:nowrap}.v-rating .v-icon{padding:.5rem;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-rtl .v-rating .v-icon{transform:scaleX(-1)}.v-rating--readonly .v-icon{pointer-events:none}.v-rating--dense .v-icon{padding:.1rem}",""])},434:function(e,t,n){"use strict";n.r(t);n(393),n(24);var r=n(35),o=n.n(r),l=n(87),c={name:"ContactUs",data:function(){return{writeSuccessful:!1,name:"",review:"",date:this.returnDate(),rating:""}},methods:{writeToFirestore:function(){var e={name:this.name,review:this.review,date:this.date,rating:this.rating};l.b.collection("Reviews").add(e).then(function(e){}).catch(function(e){this.$snotify.error(e.message)}),this.writeSuccessful=!0},googleSignIn:function(){var e=this;this.provider=new o.a.auth.GoogleAuthProvider,o.a.auth().signInWithPopup(this.provider).then(function(t){e.$store.commit("saveUser",t),e.$router.push("/")}).catch(function(t){e.$snotify.error(t.message)})},returnDate:function(){var e=new Date,dd=String(e.getDate()).padStart(2,"0"),t=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();return e=t+"/"+dd+"/"+n},onCreatePost:function(){if(this.image){var e={title:this.title,location:this.location,image:this.image,description:this.description};this.$store.dispatch("uploadImage",e),this.$router.push("/")}},onPickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(e){var t=this,n=e.target.files;if(n[0].name.lastIndexOf(".")<=0)return alert("Please add a valid file!");var r=new FileReader;r.addEventListener("load",function(){t.imageUrl=r.result}),r.readAsDataURL(n[0]),this.image=n[0]}}},h=(n(395),n(61)),d=n(90),f=n.n(d),v=n(133),m=n(380),w=(n(153),n(16),n(397),n(54)),y=n(15),x=n(115),I=n(112),$=n(64),S=n(3).default.extend({name:"rippleable",directives:{ripple:$.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),data.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",data)):null},onChange:function(){}}}),_=n(17),O=n(0),H=n(4),V=Object(H.a)(y.a,x.a,S,I.a,_.a).extend({name:"v-rating",props:{backgroundColor:{type:String,default:"accent"},color:{type:String,default:"primary"},clearable:Boolean,dense:Boolean,emptyIcon:{type:String,default:"$vuetify.icons.ratingEmpty"},fullIcon:{type:String,default:"$vuetify.icons.ratingFull"},halfIcon:{type:String,default:"$vuetify.icons.ratingHalf"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,size:[Number,String],value:{type:Number,default:0}},data:function(){return{hoverIndex:-1,internalValue:this.value}},computed:{directives:function(){return this.readonly||!this.ripple?[]:[{name:"ripple",value:{circle:!0}}]},iconProps:function(){var e=this.$props,t=e.dark,n=e.medium,r=e.large,o=e.light,small=e.small;return{dark:t,medium:n,large:r,light:o,size:e.size,small:small,xLarge:e.xLarge}},isHovering:function(){return this.hover&&this.hoverIndex>=0}},watch:{internalValue:function(e){e!==this.value&&this.$emit("input",e)},value:function(e){this.internalValue=e}},methods:{createClickFn:function(i){var e=this;return function(t){if(!e.readonly){var n=e.genHoverIndex(t,i);e.clearable&&e.internalValue===n?e.internalValue=0:e.internalValue=n}}},createProps:function(i){var e={index:i,value:this.internalValue,click:this.createClickFn(i),isFilled:Math.floor(this.internalValue)>i,isHovered:Math.floor(this.hoverIndex)>i};return this.halfIncrements&&(e.isHalfHovered=!e.isHovered&&(this.hoverIndex-i)%1>0,e.isHalfFilled=!e.isFilled&&(this.internalValue-i)%1>0),e},genHoverIndex:function(e,i){var t=this.isHalfEvent(e);return this.$vuetify.rtl&&(t=!t),i+(t?.5:1)},getIconName:function(e){var t=this.isHovering?e.isHovered:e.isFilled,n=this.isHovering?e.isHalfHovered:e.isHalfFilled;return t?this.fullIcon:n?this.halfIcon:this.emptyIcon},getColor:function(e){if(this.isHovering){if(e.isHovered||e.isHalfHovered)return this.color}else if(e.isFilled||e.isHalfFilled)return this.color;return this.backgroundColor},isHalfEvent:function(e){if(this.halfIncrements){var rect=e.target&&e.target.getBoundingClientRect();if(rect&&e.pageX-rect.left<rect.width/2)return!0}return!1},onMouseEnter:function(e,i){var t=this;this.runDelay("open",function(){t.hoverIndex=t.genHoverIndex(e,i)})},onMouseLeave:function(){var e=this;this.runDelay("close",function(){return e.hoverIndex=-1})},genItem:function(i){var e=this,t=this.createProps(i);if(this.$scopedSlots.item)return this.$scopedSlots.item(t);var n={click:t.click};return this.hover&&(n.mouseenter=function(t){return e.onMouseEnter(t,i)},n.mouseleave=this.onMouseLeave,this.halfIncrements&&(n.mousemove=function(t){return e.onMouseEnter(t,i)})),this.$createElement(w.a,this.setTextColor(this.getColor(t),{directives:this.directives,props:this.iconProps,on:n}),[this.getIconName(t)])}},render:function(e){var t=this,n=Object(O.g)(Number(this.length)).map(function(i){return t.genItem(i)});return e("div",{staticClass:"v-rating",class:{"v-rating--readonly":this.readonly,"v-rating--dense":this.dense}},n)}}),k=n(431),component=Object(h.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container"},[n("div",[n("h2",[e._v("\n      Write a Review.\n    ")]),e._v(" "),n("div",[e.writeSuccessful?n("span",[e._v("Successful!")]):n("span",[e._v("Write now")]),e._v(" "),n("v-form",[n("v-text-field",{attrs:{label:"Name",name:"name",type:"text"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-text-field",{attrs:{label:"Review",name:"review",type:"text"},model:{value:e.review,callback:function(t){e.review=t},expression:"review"}}),e._v(" "),n("v-rating",{attrs:{"half-increments":""},model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}})],1),e._v(" "),n("v-btn",{on:{click:e.writeToFirestore}},[e._v("\n        Send Review\n      ")])],1)])])},[],!1,null,null,null);t.default=component.exports;f()(component,{VBtn:v.a,VForm:m.a,VRating:V,VTextField:k.a})}}]);