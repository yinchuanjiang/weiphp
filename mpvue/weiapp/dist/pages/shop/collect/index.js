require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_2_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_0_1_2_mpvue_config_loader_index_js_index_vue__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_2_mpvue_loader_lib_template_compiler_index_id_data_v_6ba7a735_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_2_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_0_1_2_mpvue_config_loader_index_js_index_vue__ = __webpack_require__(179);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(176)
  __webpack_require__(177)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6ba7a735"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_2_mpvue_loader_lib_selector_type_script_index_0_node_modules_mpvue_config_loader_0_1_2_mpvue_config_loader_index_js_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_2_mpvue_loader_lib_template_compiler_index_id_data_v_6ba7a735_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_2_mpvue_loader_lib_selector_type_template_index_0_node_modules_mpvue_config_loader_0_1_2_mpvue_config_loader_index_js_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shop\\collect\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6ba7a735", Component.options)
  } else {
    hotAPI.reload("data-v-6ba7a735", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 176:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_vant_toast_toast__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  mpType: 'page',

  data: function data() {
    return {
      collectList: []
    };
  },


  components: {},
  computed: {},
  methods: {
    addCart: function addCart(e) {
      var idx = e.target.dataset.index;
      var id = this.collectList[idx].id;
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* post */])('shop/api/addToCart', {
        goods_id: id,
        PHPSESSID: wx.getStorageSync('PHPSESSID')
      }).then(function (res) {
        if (res > 0) {
          Object(__WEBPACK_IMPORTED_MODULE_1__static_vant_toast_toast__["a" /* default */])('加入购物车成功');
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_1__static_vant_toast_toast__["a" /* default */])(res.msg);
        }
      });
    }
  },

  onLoad: function onLoad() {
    var _this = this;

    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* post */])('/shop/api/my_collect', {
      PHPSESSID: wx.getStorageSync('PHPSESSID')
    }).then(function (res) {
      console.log(res.myCollect);
      _this.collectList = res.myCollect;
    });
  }
});

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "collect"
  }, [_vm._l((_vm.collectList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "collect_list"
    }, [_c('a', {
      staticClass: "goods-line",
      attrs: {
        "href": '../goods_detail/index?id=' + item.id,
        "hover-class": "none"
      }
    }, [_c('image', {
      staticClass: "u-goods__img",
      attrs: {
        "src": item.cover
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "goods-line__right"
    }, [_c('p', {
      staticClass: "u-goods__tt overflow-dot"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "goods-line__ft"
    }, [_c('div', {
      staticClass: "goods-line__price u-goods__price"
    }, [_c('span', {
      staticClass: "icon-price"
    }, [_vm._v("¥")]), _vm._v(_vm._s(item.sale_price))]), _vm._v(" "), _c('div', {
      staticClass: "goods-line__icon",
      attrs: {
        "catchtap": "",
        "data-index": index,
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.addCart
      }
    })])], 1)])])
  }), _vm._v(" "), _c('van-toast', {
    attrs: {
      "id": "van-toast",
      "mpcomid": '0'
    }
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6ba7a735", esExports)
  }
}

/***/ })

},[322]);