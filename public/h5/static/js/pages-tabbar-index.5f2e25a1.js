(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabbar-index"],{"064d":function(t,e,a){var n=a("cbf6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("6d18d89c",n,!0,{sourceMap:!1,shadowMode:!1})},"105c":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("1d6d")),r={components:{index:i.default},data:function(){return{baseurl:this.$common.baseUrl,PageCur:"index",tongzhi:!1,s_img:""}},onLoad:function(t){this.getNotice(),t.PageCur&&(this.PageCur=t.PageCur)},onShow:function(){"user"==this.PageCur&&this.$refs.user.userInfo();var t=this;uni.$on("PageCur",(function(e){t.PageCur=e,uni.$off("PageCur")}))},onReachBottom:function(){"index"==this.PageCur&&this.$refs.index.reachBottom()},onShareAppMessage:function(t){return"index"==this.PageCur?{title:"能实现梦想的潮流抽赏游戏!!!",path:"/pages/tabbar/index",imageUrl:this.baseurl+this.s_img}:"good"==this.PageCur?{title:"能实现梦想的潮流抽赏游戏!!!",path:"/pages/tabbar/index?PageCur=good",imageUrl:this.baseurl+this.s_img}:"user"==this.PageCur?{title:"能实现梦想的潮流抽赏游戏!!!",path:"/pages/tabbar/index?PageCur=user",imageUrl:this.baseurl+this.s_img}:void 0},watch:{PageCur:function(t,e){console.log(t,e,"15")}},methods:{getNotice:function(){var t=this;this.$Request.post(this.$api.common.getConfig,{key:"site_share"}).then((function(e){console.log("滚动公告",e),t.s_img=e.data.site_share}))},NavChange:function(t){this.PageCur=t.currentTarget.dataset.cur,uni.setStorageSync("PageCur",this.PageCur),console.log(this.PageCur)}}};e.default=r},"80c8":function(t,e,a){"use strict";a.r(e);var n=a("105c"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"8a7ea":function(t,e,a){"use strict";a.r(e);var n=a("eca2"),i=a("80c8");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("eff5");var s,u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"671fbd46",null,!1,n["a"],s);e["default"]=o.exports},cbf6:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-671fbd46]{background-color:#fff}.index[data-v-671fbd46]{height:100%}.text-sm[data-v-671fbd46]{display:flex;justify-content:center}.text-col[data-v-671fbd46]{color:gold;font-size:%?30?%;font-weight:800}.cuIcon-cu-image uni-image[data-v-671fbd46]{width:%?140?%!important;height:%?140?%!important;margin-bottom:%?3?%}body.?%PAGE?%[data-v-671fbd46]{background-color:#fff}',""]),t.exports=e},eca2:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"index"},["index"==t.PageCur?a("index",{ref:"index"}):t._e(),"good"==t.PageCur?a("good"):t._e(),"user"==t.PageCur?a("user",{ref:"user"}):t._e(),a("v-uni-view",{staticClass:"cu-bar tabbar bg-white shadow foot"},[a("v-uni-view",{staticClass:"action",attrs:{"data-cur":"index"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.NavChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cuIcon-cu-image"},[a("v-uni-image",{attrs:{src:"/static/1"+["index"==t.PageCur?"-h":""]+".png"}})],1),a("v-uni-view",{staticClass:"text-sm",class:"index"==t.PageCur?"text-col":"text-gray"},[t._v("抽赏")])],1),a("v-uni-view",{staticClass:"action",attrs:{"data-cur":"good"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.NavChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cuIcon-cu-image"},[a("v-uni-image",{attrs:{src:"/static/2"+["good"==t.PageCur?"-h":""]+".png"}})],1),a("v-uni-view",{staticClass:"text-sm",class:"good"==t.PageCur?"text-col":"text-gray"},[t._v("赏袋")])],1),a("v-uni-view",{staticClass:"action",attrs:{"data-cur":"user"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.NavChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cuIcon-cu-image"},[a("v-uni-image",{attrs:{src:"/static/3"+["user"==t.PageCur?"-h":""]+".png"}})],1),a("v-uni-view",{staticClass:"text-sm",class:"user"==t.PageCur?"text-col":"text-gray"},[t._v("我的")])],1)],1)],1)},r=[]},eff5:function(t,e,a){"use strict";var n=a("064d"),i=a.n(n);i.a}}]);