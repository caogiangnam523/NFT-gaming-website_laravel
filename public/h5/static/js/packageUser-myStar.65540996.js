(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["packageUser-myStar"],{"3d99":function(t,i,a){"use strict";a.d(i,"b",(function(){return o})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return e}));var e={uImage:a("21d2").default},o=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"myStar-root"},[e("v-uni-view",{staticClass:"box-list"},[t._l(t.starList,(function(i,o){return e("v-uni-view",{key:o,staticClass:"single-box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.enterBoxDetail(i)}}},[e("v-uni-view",{staticClass:"img"},[e("u-image",{attrs:{width:"318rpx",height:"318rpx",src:t.baseurl+i.cover_image,"lazy-load":!0,radius:"0"}}),e("v-uni-view",{staticClass:"hot"}),e("v-uni-view",{staticClass:"new"}),e("v-uni-view",{staticClass:"radom"})],1),e("v-uni-view",{staticClass:"name"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"time"},[t._v(t._s(i.create_time))]),e("v-uni-view",{staticClass:"price-box"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-text",[t._v("￥"+t._s(i.price))]),t._v("/ 抽")],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{},[t._v(t._s(i.surplus)+"/"+t._s(i.total))]),e("v-uni-image",{attrs:{src:a("c01d"),mode:""}})],1)],1)],1)})),e("v-uni-view",{staticClass:"single-box",staticStyle:{padding:"0",height:"0"}})],2)],1)},n=[]},8864:function(t,i,a){"use strict";a.r(i);var e=a("3d99"),o=a("b00e");for(var n in o)"default"!==n&&function(t){a.d(i,t,(function(){return o[t]}))}(n);a("a564");var r,s=a("f0c5"),c=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"7c6c9752",null,!1,e["a"],r);i["default"]=c.exports},"8c44":function(t,i,a){"use strict";a("99af"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{baseurl:this.$common.baseUrl,page:1,isLocal:!0,starList:[]}},onLoad:function(){this.getList()},onReachBottom:function(){var t=this;this.page=this.page+1,this.$Request.post(this.$api.user.collectionList,{page:this.page}).then((function(i){t.starList=t.starList.concat(i.data.data)}))},methods:{getList:function(){var t=this;uni.showLoading({title:"加载中..."}),this.$Request.post(this.$api.user.collectionList,{page:this.page}).then((function(i){console.log("我的收藏",i),1!=i.code&&0!=i.code||(uni.hideLoading(),i.data.data.length?t.isLocal=!0:t.isLocal=!1),t.starList=i.data.data}))},enterBoxDetail:function(t){1==t.type?uni.navigateTo({url:"/packageIndex/boxDetail?id="+t.box_id}):2==t.type?uni.navigateTo({url:"/packageIndex/matchDetail?id="+t.box_id}):3==t.type&&uni.navigateTo({url:"/packageIndex/infiniteDetail?id="+t.box_id})}}};i.default=e},a332:function(t,i,a){var e=a("24fb"),o=a("1de5"),n=a("128c"),r=a("0b08"),s=a("9316"),c=a("55d1");i=e(!1);var l=o(n),d=o(r),u=o(s),g=o(c);i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.myStar-root[data-v-7c6c9752]{width:100%;min-height:100vh;background-color:#000;padding-top:%?0.1?%}.myStar-root .box-list[data-v-7c6c9752]{width:100%;display:flex;align-items:center;justify-content:space-around;flex-wrap:wrap;padding:0 %?10?%;margin-top:%?20?%}.myStar-root .box-list .single-box[data-v-7c6c9752]{width:%?346?%;height:%?518?%;padding:%?12?% %?9?% %?20?% 0;display:flex;flex-direction:column;align-items:center;background-image:url('+l+");background-size:100% 100%;margin-bottom:%?15?%}.myStar-root .box-list .single-box .img[data-v-7c6c9752]{width:%?318?%;margin-bottom:%?10?%;position:relative}.myStar-root .box-list .single-box .img .hot[data-v-7c6c9752]{position:absolute;width:%?173?%;height:%?44?%;left:0;bottom:0;background-image:url("+d+");background-size:100% 100%}.myStar-root .box-list .single-box .img .new[data-v-7c6c9752]{position:absolute;width:%?173?%;height:%?44?%;right:0;bottom:0;background-image:url("+u+");background-size:100% 100%}.myStar-root .box-list .single-box .img .radom[data-v-7c6c9752]{position:absolute;width:%?128?%;height:%?44?%;right:0;top:0;background-image:url("+g+");background-size:100% 100%}.myStar-root .box-list .single-box .name[data-v-7c6c9752]{width:100%;height:%?80?%;padding:0 %?20?%;color:#fff;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin-bottom:%?3?%}.myStar-root .box-list .single-box .time[data-v-7c6c9752]{width:100%;font-size:%?24?%;color:#fff;padding:0 %?20?%;color:#2e93f8;margin-bottom:%?12?%}.myStar-root .box-list .single-box .price-box[data-v-7c6c9752]{width:100%;display:flex;justify-content:space-between;align-items:center;padding:0 %?15?%;color:#ccc}.myStar-root .box-list .single-box .price-box .left[data-v-7c6c9752]{color:#f8352e}.myStar-root .box-list .single-box .price-box .left uni-text[data-v-7c6c9752]{font-size:%?30?%;margin-right:%?6?%}.myStar-root .box-list .single-box .price-box .right[data-v-7c6c9752]{display:flex;align-items:flex-end;font-size:%?24?%}.myStar-root .box-list .single-box .price-box .right uni-image[data-v-7c6c9752]{width:%?36?%;height:%?36?%;margin-left:%?12?%}",""]),t.exports=i},a564:function(t,i,a){"use strict";var e=a("f5e0"),o=a.n(e);o.a},b00e:function(t,i,a){"use strict";a.r(i);var e=a("8c44"),o=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=o.a},f5e0:function(t,i,a){var e=a("a332");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("7699540b",e,!0,{sourceMap:!1,shadowMode:!1})}}]);