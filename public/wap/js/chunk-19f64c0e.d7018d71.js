(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19f64c0e"],{aaf6:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"index"},[e("scroller",[e("search"),e("div",{staticClass:"m15 swiper"},[e("van-swipe",t._l(t.slides,function(t,s){return e("van-swipe-item",{key:s,staticClass:"pic-align-center"},[e("a",{attrs:{href:t.url?t.url:"#"}},[e("img",{attrs:{src:t.img,alt:""}})])])}),1)],1),e("div",{staticClass:"categorys"},[e("van-swipe",t._l(t.categoryList,function(s,o){return e("van-swipe-item",{key:o},t._l(s,function(s,o){return e("div",{key:s.id,staticClass:"category-block__item",on:{click:function(e){t.goToUrl(s.pid,s.id)}}},[e("img",{staticClass:"category-block__img",attrs:{src:s.icon,mode:"aspectFill"}}),e("p",{staticClass:"category-block__txt overflow-dot_row"},[t._v(t._s(s.title))])])}),0)}),1)],1),e("p",{staticClass:"page-title"},[t._v("猜你喜欢")]),t.goods?e("goodsList",{attrs:{goodsData:t.goods}}):t._e()],1),e("tabbar",{attrs:{checkedIndex:"1"}})],1)},a=[],i=e("e989"),n=e("26fc"),c=e("24ab"),r=e("ed08"),l=(e("00ca"),{config:{navigationBarTitleText:"圆梦云商城"},data:function(){return{motto:"Hello World",slides:[],categorys:[],goods:[],isLoad:!1}},components:{search:i["a"],goodsList:c["a"],tabbar:n["a"]},computed:{categoryList:function(){var t=JSON.parse(JSON.stringify(this.categorys)),s=0,e=[];s=t.length%8==0?t.length/8:parseInt(t.length/8)+1;for(var o=0;o<s;o++)e.push(t.slice(8*o,8*(o+1)));return e}},methods:{jump:function(t){window.location.href=t},goToUrl:function(t,s){this.$router.push({name:"lists",params:{pid:t,id:s}})}},created:function(){var t=this;Object(r["c"])("shop/api/index").then(function(s){console.log(s),t.slides=s.slideshow,t.categorys=s.category,t.goods=s.goods}),Object(r["h"])("shop/api/cart/",{PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(s){var e=s.lists.length;t.$store.commit("getCartShopNum",{num:e})}).catch(function(t){console.log("失败："+t)})}}),d=l,u=(e("c5a8"),e("048f")),g=Object(u["a"])(d,o,a,!1,null,"089270e6",null);g.options.__file="index.vue";s["default"]=g.exports},c5a8:function(t,s,e){"use strict";var o=e("d272"),a=e.n(o);a.a},d272:function(t,s,e){}}]);
//# sourceMappingURL=chunk-19f64c0e.d7018d71.js.map