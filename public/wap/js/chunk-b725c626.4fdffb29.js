(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b725c626"],{"3bf9":function(t,s,i){"use strict";var a=i("4575"),e=i.n(a);e.a},4575:function(t,s,i){},"47d8":function(t,s,i){"use strict";var a=i("6f68"),e=i.n(a);e.a},"6f68":function(t,s,i){},"8f47":function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"collage_detail active_detail"},[i("navbar",{attrs:{text:t.eventinfo.title}}),i("scroller",[i("div",{staticClass:"active_img"},[i("activeSlide",{attrs:{imgsurl:t.imgsurl}})],1),i("div",{staticClass:"active_time"},[i("div",[i("span",{staticClass:"active_price"},[t._v(t._s(t.eventinfo.member_limit)+"人拼团价--")]),i("span",{staticClass:"active_price"},[t._v(t._s(t.goods.sale_price)+"元")]),t.cd.endtime>t.cd.nowtime&&t.cd.nowtime>t.cd.starttime?i("span",{staticClass:"countdown"},[t._v("剩余时间:"+t._s(t.cd.day)+"天"+t._s(t.cd.hour)+":"+t._s(t.cd.min)+":"+t._s(t.cd.sec))]):t.cd.nowtime>t.cd.endtime?i("span",{staticClass:"active_timeout"},[t._v("活动已结束")]):i("span",{staticClass:"active_not_begin"},[t._v("活动未开始")])])]),i("div",{staticClass:"flex good_detail"},[i("p",{staticClass:"red active_price"},[i("span",{staticClass:"price-icon"},[t._v("¥"+t._s(t.goods.sale_price))])]),i("p",{staticClass:"cost_price"},[i("small",{staticClass:"tag"},[t._v("拼团价")]),i("br"),i("del",{staticClass:"market_price"},[i("span",{staticClass:"prize-icon"},[t._v("¥")]),t._v("原价"+t._s(t.goods.market_price))])]),i("p",{staticClass:"good_name"},[t._v(t._s(t.goods.title))]),i("router-link",{staticClass:"red",attrs:{to:"/collage/instruction/"+t.eventinfo.id}},[t._v("活动说明"),i("i",{staticClass:"iconfont icon-warning1 f12 f-ml-base"})])],1),0==t.groupid&&0!=t.eventinfo.is_open&&""!=t.collagegroup.lists?i("div",{staticClass:"group_record"},[i("div",{staticClass:"gorup_record_header"},[i("p",{staticClass:"group_num"},[i("span",[t._v(t._s(t.collagegroup.count))]),t._v("人在拼单，可直接参与")]),i("p",{staticClass:"view_more"},[i("router-link",{staticClass:"flex",attrs:{to:"/collage/group_more/"+t.goods.id+"/"+t.eventinfo.id},on:{click:t.view_more}},[i("span",{staticClass:"gray"},[t._v("查看更多")]),i("i",{staticClass:"weui-cell__ft"})])],1)]),t._l(t.collagegroup.lists,function(s,a){return i("div",{key:a,staticClass:"group_record_content"},[i("div",{staticClass:"record_item"},[i("div",{staticClass:"record_header"},[i("img",{staticClass:"headimgurl",attrs:{src:s.headimgurl}}),i("div",{staticClass:"differ_num"},[i("p",{staticClass:"nickname"},[t._v(t._s(s.nickname))]),i("small",{staticClass:"differ_info"},[t._v("还差"),i("strong",{staticClass:"red"},[t._v(t._s(s.need_count)+"人")]),t._v("拼成,剩余 "),i("strong",{staticClass:"group_time",attrs:{rel:""}},[t._v(t._s(s.time_str))]),t._v(" 结束\n            ")])])]),i("div",{staticClass:"go_group"},[i("router-link",{attrs:{to:"/collage/group_detail/"+s.id}},[t._v("去拼团")])],1),i("div",{staticStyle:{clear:"both"}})])])})],2):t._e(),""!=t.goodsparam?i("div",{staticClass:"switch-card"},[i("div",{staticClass:"switch-card__hd",on:{click:t.toggleArrow}},[i("p",{staticClass:"switch-card__tt"},[t._v("产品参数")]),i("p",{staticClass:"switch-card__icon iconfont icon-fanhui",class:t.arrowDir})]),i("div",{directives:[{name:"show",rawName:"v-show",value:"top"==t.arrowDir,expression:"arrowDir == 'top'"}],staticClass:"switch-card__bd"},t._l(t.goodsparam,function(s,a){return i("div",{key:a,staticClass:"switch-card__item"},[i("p",{staticClass:"switch-card__param overflow-dot_row"},[t._v(t._s(s.title))]),i("p",{staticClass:"switch-card__attr overflow-dot_row"},[t._v(t._s(s.param_value))])])}),0)]):t._e(),i("div",{staticClass:"detail_estimate"},[i("van-tabs",{attrs:{swipeable:""}},[i("van-tab",{staticClass:"van_tab detail",attrs:{title:"商品详情"}},[i("div",{staticClass:"detail"},[i("div",{domProps:{innerHTML:t._s(t.content)}})])]),i("van-tab",{staticClass:"van_tab estimate",attrs:{title:"评价"}},[i("div",{},[i("img",{staticClass:"null_img",attrs:{src:"https://leyao.tv/yi/images/null.png"}})]),i("small",[t._v("暂无相关评价")])])],1)],1)]),""!=t.needpayurl?i("div",{staticClass:"bottom-btn"},[i("a",{staticClass:"gopay",on:{click:function(s){t.gopay(t.outtradeno)}}},[t._v("去支付")])]):""==t.needpayurl&&0==t.groupid?i("div",{staticClass:"bottom-btn"},[i("a",{staticClass:"costprice",on:{click:t.original_cost}},[t._v("原价购买"),i("span",[t._v("¥"+t._s(t.goods.market_price))])]),i("a",{staticClass:"collage_num",on:{click:t.joincollage}},[t._v(t._s(t.eventinfo.member_limit)+"人团"),i("span",[t._v("¥"+t._s(t.goods.sale_price))])])]):i("div",{staticClass:"bottom-btn"},[i("a",{staticClass:"costprice",on:{click:t.original_cost}},[t._v("原价购买"),i("span",[t._v("¥"+t._s(t.goods.market_price))])]),i("a",{staticClass:"collage_num",on:{click:t.invite_collage}},[t._v("邀请好友拼团")])]),i("transition",{attrs:{name:"fade"}},[t.show?i("div",{staticClass:"dialog",on:{click:function(s){t.show=!1}}},[i("div",{staticClass:"share_tips"},[i("img",{attrs:{src:"https://leyao.tv/yi/images/share_tips.png"}})])]):t._e()]),i("van-toast",{attrs:{id:"van-toast"}})],1)},e=[],o=(i("8383"),i("d9a1")),r=i("ed08"),c=i("fade"),n=i("9d8d"),l={data:function(){return{cd:{day:0,hour:0,min:0,sec:0,starttime:0,endtime:0,nowtime:0},userdata:[],collagegroup:{},eventinfo:{},content:"",goods:{},groupid:0,needpayurl:"",outtradeno:"",goodsparam:[],imgsurl:[],arrowDir:"top",show:!1}},components:{activeSlide:o["a"],navbar:n["a"]},computed:{},methods:{view_more:function(){},gopay:function(t,s){Object(r["d"])(t)},original_cost:function(){var t=this.goods.id,s=1,i=1,a=this.goods.market_price,e={goods_id:t,event_type:s,is_original:i,activePrice:a,PHPSESSID:window.localStorage.getItem("PHPSESSID")};this.$store.commit("saveData",{key:"activeOrderParams",value:JSON.stringify(e)}),this.$router.push("/confirm_order/"+this.goods.goods_id)},joincollage:function(){var t=this;Object(r["h"])(r["g"]+"/collage/Api/buy_now",{goods_id:this.goods.id,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(s){if(0==s.code)Object(c["e"])(s.msg);else{var i=/goods_id\/(\d+)\/event_type\/(\d+)\/event_id\/(\d+)\/pbid\/(\d+)/.exec(s.url),a=i[1],e=i[2],o=i[3],r=i[4],n=t.goods.sale_price,l={goods_id:a,event_type:e,event_id:o,pbid:r,activePrice:n,PHPSESSID:window.localStorage.getItem("PHPSESSID")};t.$store.commit("saveData",{key:"activeOrderParams",value:JSON.stringify(l)}),t.$router.push("/confirm_order/"+t.goods.goods_id)}})},invite_collage:function(){this.show=!this.show},toggleArrow:function(){"top"==this.arrowDir?this.arrowDir="bottom":this.arrowDir="top"},countdown:function(){var t=this,s=t.cd.endtime;this.cd.nowtime=Date.parse(new Date)/1e3;var i=s-Date.parse(new Date)/1e3,a=parseInt(i/60/60/24),e=parseInt(i/60/60%24),o=parseInt(i/60%60),r=parseInt(i%60);this.cd.day=a,this.cd.hour=e,this.cd.min=o,this.cd.sec=r,setTimeout(function(){t.countdown()},1e3)},cdtime:function(){var t=this;setInterval(function(){for(var s=0;s<t.collagegroup.count;s++){var i=t.collagegroup.lists[s].left_time--,a=parseInt(i/60/60/24),e=parseInt(i/60/60%24),o=parseInt(i/60%60),r=parseInt(i%60);t.collagegroup.lists[s].time_str=a+"天"+e+":"+o+":"+r}},1e3)}},created:function(){var t=this,s=this.$route.params.id;this.userdata=JSON.parse(window.localStorage.getItem("userInfo")),console.log("xxx",this.userdata),Object(r["h"])(r["g"]+"/collage/Api/goods_detail",{id:s,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(s){t.collagegroup=s.collage_group,t.eventinfo=s.event_info,t.content=s.goods.goods.content.replace(/\<img/gi,'<img style="width:100% !important;height:auto" '),t.goods=s.goods,t.groupid=s.group_id,t.needpayurl=s.need_pay_url,t.outtradeno=s.out_trade_no,t.imgsurl=s.goods.goods.imgs_url,t.goodsparam=s.goods.shop_goods.goods_param,t.cd.endtime=s.event_info.end_time,t.cd.starttime=s.event_info.start_time;var i=s.share_data;Object(r["f"])(i)}),this.countdown(),this.cdtime()}},d=l,_=(i("3bf9"),i("048f")),g=Object(_["a"])(d,a,e,!1,null,"55968e36",null);g.options.__file="index.vue";s["default"]=g.exports},d9a1:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"slide"},[i("van-swipe",{staticClass:"swiper",on:{change:t.toggleswiper}},t._l(t.imgsurl,function(s,a){return i("van-swipe-item",{key:a,staticClass:"swiper-item"},[i("a",{staticClass:"slide-url",on:{click:function(s){t.showslide(a)}}},[i("img",{staticClass:"slide-image",attrs:{mode:"aspectFill",src:s}})])])}),1),i("p",{staticClass:"padding"},[i("span",{staticClass:"currentslide"},[t._v(t._s(t.currentnum))]),t._v("/"),i("span",{staticClass:"totalslide"},[t._v(t._s(t.imgsurl.length))])])],1)},e=[],o=i("fade"),r={data:function(){return{currentnum:1}},props:{imgsurl:Array},methods:{toggleswiper:function(t){this.currentnum=t+1},showslide:function(t){Object(o["b"])({images:this.imgsurl,startPosition:t})}}},c=r,n=(i("47d8"),i("048f")),l=Object(n["a"])(c,a,e,!1,null,null,null);l.options.__file="activeSlide.vue";s["a"]=l.exports}}]);
//# sourceMappingURL=chunk-b725c626.4fdffb29.js.map