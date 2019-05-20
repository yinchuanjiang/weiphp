!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.v = t() : e.v = t()
}(this, function () {
    return function (e) {
        function t(r) {
            if (n[r])return n[r].exports;
            var o = n[r] = {exports: {}, id: r, loaded: !1};
            return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function (e, t, n) {
        "use strict";
        function r(e) {
            if (e && e.__esModule)return e;
            var t = {};
            if (null != e)for (var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        var i = (n(3), n(14)), a = o(i), u = n(8), c = o(u), s = n(9), l = o(s), f = n(2), d = o(f), p = n(10), h = o(p), m = n(22), y = o(m), v = n(24), g = o(v), b = n(41), w = o(b), _ = n(23), x = r(_), S = n(16), O = o(S), A = n(30), M = o(A), E = n(25), T = o(E), P = n(21), I = o(P);
        /*! wechat - v0.0.1 - MIT License - Vace_Vlm(ocdo@qq.com) */
        (0, a["default"])(), c["default"].cssid = (0, O["default"])(), c["default"].oauth = l["default"], c["default"].config = d["default"], c["default"].share = h["default"], c["default"].image = y["default"], c["default"].record = g["default"], c["default"].voice = w["default"], Object.keys(x).forEach(function (e) {
            return c["default"][e] = x[e]
        }), (0, M["default"])(c["default"]), (0, I["default"])(c["default"]), (0, T["default"])(), e.exports = c["default"]
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function () {
            return {
                plain: function (e) {
                    return n.object(e) && !n.window(e) && Object.getPrototypeOf(e) === Object.prototype
                }, window: function (e) {
                    return null !== e && e === e.window
                }, array: function (e) {
                    return Array.isArray(e)
                }, object: function (e) {
                    return Object.prototype.toString.call(e).indexOf("Object") > -1
                }, html: function (e) {
                    return e instanceof NodeList || e instanceof HTMLCollection
                }, node: function (e) {
                    return e.nodeType
                }, svg: function (e) {
                    return e instanceof SVGElement
                }, number: function (e) {
                    return !isNaN(parseInt(e))
                }, string: function (e) {
                    return "string" == typeof e
                }, func: function (e) {
                    return "function" == typeof e
                }, undef: function (e) {
                    return "undefined" == typeof e
                }, "null": function (e) {
                    return null === e
                }, hex: function (e) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
                }, rgb: function (e) {
                    return /^rgb/.test(e)
                }, rgba: function (e) {
                    return /^rgba/.test(e)
                }, hsl: function (e) {
                    return /^hsl/.test(e)
                }, color: function (e) {
                    return n.hex(e) || n.rgb(e) || n.rgba(e) || n.hsl(e)
                }
            }
        }();
        t["default"] = n
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e) {
            return e && (f["default"].object(e) ? (e.api && (o.api = e.api), e.debug && (o.debug = e.debug), e.wechat && (o.wechat = e.wechat), e.url && (o.url = e.url)) : f["default"].string(e) && (o.wechat = e)), i()
        }

        function i() {
            if (w === m) {
                w = y;
                var e = location.href.split("#"), t = o.url;
                o.wechat === u.DEFAULT_WECHAT && (t = "http://i.diggid.cn/api/v1/jssdk"), s["default"].get(t, {
                    params: {
                        wechat: o.wechat,
                        url: e[0],
                        anchor: e[1] || ""
                    }
                }).then(function (e) {
                    var t = e.data.data;
                    t.debug = o.debug, t.jsApiList = a(o.api), w = v, wx.config(t)
                })["catch"](function () {
                    return w = b
                })
            }
            return _
        }

        function a(e) {
            if (f["default"].string(e)) {
                if ("*" === e)return x;
                e = e.split(",")
            }
            for (var t, n, r, o = [], i = 0, a = e.length; i < a; i++)t = e[i].toLowerCase(), n = u.API_GROUPS.indexOf(t), r = S.indexOf(t), n !== -1 ? [].push.apply(o, u.API_GROUPS_MAP[n]) : r !== -1 && o.push(x[r]);
            return o
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = o;
        var u = n(4), c = n(6), s = r(c), l = n(1), f = r(l), d = n(14), p = r(d), h = n(3);
        (0, p["default"])();
        var m = -2, y = -1, v = 0, g = 1, b = 2, w = m, _ = new h.Promise(function (e, t) {
            wx.ready(function () {
                return w = g, e()
            }), wx.error(function () {
                return t()
            })
        })["catch"](function (e) {
            return console.warn("微信配置失败:", e)
        });
        o.api = "share", o.debug = !1, o.wechat = u.DEFAULT_WECHAT, o.url = u.SIGNATURE_URL, o.ready = function (e) {
            return o().then(e)
        }, o.getStatus = function () {
            return w
        }, o._call = function (e, t) {
            var n = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2];
            o().then(function () {
                return wx[e].call(n, t)
            })
        }, o._apply = function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1], n = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2];
            o().then(function () {
                return wx[e].apply(n, t)
            })
        };
        var x = [];
        u.API_GROUPS_MAP.forEach(function (e) {
            return [].push.apply(x, e)
        });
        var S = x.map(function (e) {
            return e.toLowerCase()
        })
    }, function (e, t, n) {
        (function (e) {
            "use strict";
            Object.defineProperty(t, "__esModule", {value: !0});
            var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }, r = void 0;
            if (window.Promise) r = window.Promise; else {
                var o, i, a;
                !function () {
                    var t = function () {
                    }, u = function (e, t) {
                        return function () {
                            e.apply(t, arguments)
                        }
                    }, c = function (e, t) {
                        for (; 3 === e._state;)e = e._value;
                        return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void i(function () {
                                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                                if (null === n)return void(1 === e._state ? s : l)(t.promise, e._value);
                                var r;
                                try {
                                    r = n(e._value)
                                } catch (o) {
                                    return void l(t.promise, o)
                                }
                                s(t.promise, r)
                            }))
                    }, s = function (e, t) {
                        try {
                            if (t === e)throw new TypeError("A promise cannot be resolved with itself.");
                            if (t && ("object" === ("undefined" == typeof t ? "undefined" : n(t)) || "function" == typeof t)) {
                                var o = t.then;
                                if (t instanceof r)return e._state = 3, e._value = t, void f(e);
                                if ("function" == typeof o)return void p(u(o, t), e)
                            }
                            e._state = 1, e._value = t, f(e)
                        } catch (i) {
                            l(e, i)
                        }
                    }, l = function (e, t) {
                        e._state = 2, e._value = t, f(e)
                    }, f = function (e) {
                        2 === e._state && 0 === e._deferreds.length && i(function () {
                            e._handled || a(e._value)
                        });
                        for (var t = 0, n = e._deferreds.length; t < n; t++)c(e, e._deferreds[t]);
                        e._deferreds = null
                    }, d = function (e, t, n) {
                        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                    }, p = function (e, t) {
                        var n = !1;
                        try {
                            e(function (e) {
                                n || (n = !0, s(t, e))
                            }, function (e) {
                                n || (n = !0, l(t, e))
                            })
                        } catch (r) {
                            if (n)return;
                            n = !0, l(t, r)
                        }
                    };
                    o = setTimeout, i = "function" == typeof e && e || function (e) {
                            o(e, 0)
                        }, a = function (e) {
                        "undefined" != typeof console && console && console.warn("Possible Unhandled _Promise Rejection:", e)
                    }, r = function (e) {
                        if ("object" !== n(this))throw new TypeError("_Promises must be constructed via new");
                        if ("function" != typeof e)throw new TypeError("not a function");
                        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], p(e, this)
                    }, r.prototype["catch"] = function (e) {
                        return this.then(null, e)
                    }, r.prototype.then = function (e, n) {
                        var r = new this.constructor(t);
                        return c(this, new d(e, n, r)), r
                    }, r.all = function (e) {
                        var t = Array.prototype.slice.call(e);
                        return new r(function (e, r) {
                            function o(a, u) {
                                try {
                                    if (u && ("object" === ("undefined" == typeof u ? "undefined" : n(u)) || "function" == typeof u)) {
                                        var c = u.then;
                                        if ("function" == typeof c)return void c.call(u, function (e) {
                                            o(a, e)
                                        }, r)
                                    }
                                    t[a] = u, 0 === --i && e(t)
                                } catch (s) {
                                    r(s)
                                }
                            }

                            if (0 === t.length)return e([]);
                            for (var i = t.length, a = 0; a < t.length; a++)o(a, t[a])
                        })
                    }, r.resolve = function (e) {
                        return e && "object" === ("undefined" == typeof e ? "undefined" : n(e)) && e.constructor === r ? e : new r(function (t) {
                                t(e)
                            })
                    }, r.reject = function (e) {
                        return new r(function (t, n) {
                            n(e)
                        })
                    }, r.race = function (e) {
                        return new r(function (t, n) {
                            for (var r = 0, o = e.length; r < o; r++)e[r].then(t, n)
                        })
                    }, r._setImmediateFn = function (e) {
                        i = e
                    }, r._setUnhandledRejectionFn = function (e) {
                        a = e
                    }, window.Promise = r
                }()
            }
            t.Promise = r
        }).call(t, n(7).setImmediate)
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = "Duogu", r = "http://wx.diggid.cn", o = "v1", i = function (e) {
            return r + "/api/" + o + "/" + e
        }, a = i("jssdk"), u = i("media"), c = i("media"), s = i("user"), l = i("oauth"), f = "module", d = ["share", "record", "voice", "image", "location", "menu", "card", "other"], p = [["onMenuShareAppMessage", "onMenuShareTimeline", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"], ["startRecord", "stopRecord", "onVoiceRecordEnd"], ["playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice", "downloadVoice", "translateVoice"], ["ooseImage", "previewImage", "uploadImage", "downloadImage"], ["openLocation", "getLocation"], ["hideOptionMenu", "showOptionMenu", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem"], ["addCard", "chooseCard", "openCard"], ["getNetworkType", "closeWindow", "scanQRCode", "openProductSpecificView", "chooseWXPay"]], h = ["app", "timeline", "qq", "weibo", "qzone"];
        t.DEFAULT_WECHAT = n, t.SIGNATURE_URL = a, t.SAVEIMAGE_URL = u, t.SAVEVOICE_URL = c, t.JUMPOAUTH_URL = l, t.USERINFO_URL = s, t.DOMAIN = r, t.UPLOAD_APP = f, t.API_GROUPS = d, t.API_GROUPS_MAP = p, t.SHARE_TYPES = h
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return v.querySelector(e)
        }

        function o(e) {
            return b.then(e)
        }

        function i(e, t) {
            return e && e.nodeType ? e.getAttribute(t) || e.getAttribute("data-" + t) : null
        }

        function a(e) {
            var t = v.createElement("style"), n = v.head || r("head") || r("body");
            t.type = "text/css";
            var o = t.id = "wechat-inject-css-" + Math.random().toString(16).slice(2).toUpperCase();
            return t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(v.createTextNode(e)), n.appendChild(t), o
        }

        function u() {
            var e;
            return e = DocumentFragment ? new DocumentFragment : e.createDocumentFragment()
        }

        function c(e, t) {
            t.parentNode.insertBefore(e)
        }

        function s(e, t) {
            t.nextSibling ? c(t.nextSibling, e) : t.appendChild(e)
        }

        function l(e, t) {
            t.firstChild ? c(e, t.firstChild) : t.appendChild(e)
        }

        function f(e, t) {
            if (e.classList)return e.classList.contains(t);
            var n = " " + (e.getAttribute("class") || "") + " ";
            return n.indexOf(" " + t + " ") !== -1
        }

        function d(e, t) {
            if (e.classList) e.classList.add(t); else {
                var n = " " + (e.getAttribute("class") || "") + " ";
                n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim())
            }
        }

        function p(e, t) {
            if (e.classList) e.classList.remove(t); else {
                for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;)n = n.replace(r, " ");
                e.setAttribute("class", n.trim())
            }
            e.className || e.removeAttribute("class")
        }

        function h(e, t) {
            e.classList && e.classList.toggle ? e.classList.toggle(t) : f(e, t) ? p(e, t) : d(e, t)
        }

        function m(e) {
            var t, n, o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], a = r('meta[name="wx:' + e + '"]'), u = {};
            if (!a)return !1;
            for (t in o)o.hasOwnProperty(t) && (n = i(a, t), u[t] = n ? n : o[t]);
            return u
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.query = r, t.ready = o, t.getAttr = i, t.writeCss = a, t.getFragment = u, t.before = c, t.after = s, t.prepend = l, t.hasClass = f, t.addClass = d, t.removeClass = p, t.toggleClass = h, t.queryMetas = m;
        var y = n(3), v = document, g = /complete|loaded|interactive/, b = new y.Promise(function (e) {
            return g.test(document.readyState) ? e() : v.addEventListener("DOMContentLoaded", e, !1)
        })
    }, function (e, t, n) {
        (function (t) {
            "use strict";
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }, o = n(3);
            e.exports = function (e) {
                function t(r) {
                    if (n[r])return n[r].exports;
                    var o = n[r] = {exports: {}, id: r, loaded: !1};
                    return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
                }

                var n = {};
                return t.m = e, t.c = n, t.p = "", t(0)
            }([function (e, t, n) {
                e.exports = n(1)
            }, function (e, t, n) {
                function r(e) {
                    this.defaults = a.merge({}, e), this.interceptors = {request: new c, response: new c}
                }

                var i = n(2), a = n(3), u = n(5), c = n(14), s = n(15), l = n(16), f = n(17), d = n(9);
                r.prototype.request = function (e) {
                    "string" == typeof e && (e = a.merge({url: arguments[0]}, arguments[1])), e = a.merge(i, this.defaults, {method: "get"}, e), e.baseURL && !s(e.url) && (e.url = l(e.baseURL, e.url)), e.withCredentials = e.withCredentials || this.defaults.withCredentials, e.data = d(e.data, e.headers, e.transformRequest), e.headers = a.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), a.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
                        delete e.headers[t]
                    });
                    var t = [u, void 0], n = o.Promise.resolve(e);
                    for (this.interceptors.request.forEach(function (e) {
                        t.unshift(e.fulfilled, e.rejected)
                    }), this.interceptors.response.forEach(function (e) {
                        t.push(e.fulfilled, e.rejected)
                    }); t.length;)n = n.then(t.shift(), t.shift());
                    return n
                };
                var p = new r(i), h = e.exports = f(r.prototype.request, p);
                h.request = f(r.prototype.request, p), h.Axios = r, h.defaults = p.defaults, h.interceptors = p.interceptors, h.create = function (e) {
                    return new r(e)
                }, h.all = function (e) {
                    return o.Promise.all(e)
                }, h.spread = n(18), a.forEach(["delete", "get", "head"], function (e) {
                    r.prototype[e] = function (t, n) {
                        return this.request(a.merge(n || {}, {method: e, url: t}))
                    }, h[e] = f(r.prototype[e], p)
                }), a.forEach(["post", "put", "patch"], function (e) {
                    r.prototype[e] = function (t, n, r) {
                        return this.request(a.merge(r || {}, {method: e, url: t, data: n}))
                    }, h[e] = f(r.prototype[e], p)
                })
            }, function (e, t, n) {
                function r(e, t) {
                    !o.isUndefined(e) && o.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
                }

                var o = n(3), i = n(4), a = /^\)\]\}',?\n/, u = {"Content-Type": "application/x-www-form-urlencoded"};
                e.exports = {
                    transformRequest: [function (e, t) {
                        return i(t, "Content-Type"), o.isFormData(e) || o.isArrayBuffer(e) || o.isStream(e) || o.isFile(e) || o.isBlob(e) ? e : o.isArrayBufferView(e) ? e.buffer : o.isURLSearchParams(e) ? (r(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : o.isObject(e) ? (r(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                    }],
                    transformResponse: [function (e) {
                        if ("string" == typeof e) {
                            e = e.replace(a, "");
                            try {
                                e = JSON.parse(e)
                            } catch (t) {
                            }
                        }
                        return e
                    }],
                    headers: {
                        common: {Accept: "application/json, text/plain, */*"},
                        patch: o.merge(u),
                        post: o.merge(u),
                        put: o.merge(u)
                    },
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function (e) {
                        return e >= 200 && e < 300
                    }
                }
            }, function (e, t) {
                function n(e) {
                    return "[object Array]" === _.call(e)
                }

                function o(e) {
                    return "[object ArrayBuffer]" === _.call(e)
                }

                function i(e) {
                    return "undefined" != typeof FormData && e instanceof FormData
                }

                function a(e) {
                    var t;
                    return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
                }

                function u(e) {
                    return "string" == typeof e
                }

                function c(e) {
                    return "number" == typeof e
                }

                function s(e) {
                    return "undefined" == typeof e
                }

                function l(e) {
                    return null !== e && "object" === ("undefined" == typeof e ? "undefined" : r(e))
                }

                function f(e) {
                    return "[object Date]" === _.call(e)
                }

                function d(e) {
                    return "[object File]" === _.call(e)
                }

                function p(e) {
                    return "[object Blob]" === _.call(e)
                }

                function h(e) {
                    return "[object Function]" === _.call(e)
                }

                function m(e) {
                    return l(e) && h(e.pipe)
                }

                function y(e) {
                    return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
                }

                function v(e) {
                    return e.replace(/^\s*/, "").replace(/\s*$/, "")
                }

                function g() {
                    return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement
                }

                function b(e, t) {
                    if (null !== e && "undefined" != typeof e)if ("object" === ("undefined" == typeof e ? "undefined" : r(e)) || n(e) || (e = [e]), n(e))for (var o = 0, i = e.length; o < i; o++)t.call(null, e[o], o, e); else for (var a in e)e.hasOwnProperty(a) && t.call(null, e[a], a, e)
                }

                function w() {
                    function e(e, n) {
                        "object" === r(t[n]) && "object" === ("undefined" == typeof e ? "undefined" : r(e)) ? t[n] = w(t[n], e) : t[n] = e
                    }

                    for (var t = {}, n = 0, o = arguments.length; n < o; n++)b(arguments[n], e);
                    return t
                }

                var _ = Object.prototype.toString;
                e.exports = {
                    isArray: n,
                    isArrayBuffer: o,
                    isFormData: i,
                    isArrayBufferView: a,
                    isString: u,
                    isNumber: c,
                    isObject: l,
                    isUndefined: s,
                    isDate: f,
                    isFile: d,
                    isBlob: p,
                    isFunction: h,
                    isStream: m,
                    isURLSearchParams: y,
                    isStandardBrowserEnv: g,
                    forEach: b,
                    merge: w,
                    trim: v
                }
            }, function (e, t, n) {
                var r = n(3);
                e.exports = function (e, t) {
                    r.forEach(e, function (n, r) {
                        r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
                    })
                }
            }, function (e, n, r) {
                e.exports = function (e) {
                    return new o.Promise(function (n, o) {
                        try {
                            var i;
                            "function" == typeof e.adapter ? i = e.adapter : "undefined" != typeof XMLHttpRequest ? i = r(6) : "undefined" != typeof t && (i = r(6)), "function" == typeof i && i(n, o, e)
                        } catch (a) {
                            o(a)
                        }
                    })
                }
            }, function (e, t, n) {
                var r = n(3), o = n(7), i = n(8), a = n(9), u = n(10), c = "undefined" != typeof window && window.btoa || n(11), s = n(12);
                e.exports = function (e, t, l) {
                    var f = l.data, d = l.headers;
                    r.isFormData(f) && delete d["Content-Type"];
                    var p = new XMLHttpRequest, h = "onreadystatechange", m = !1;
                    if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || u(l.url) || (p = new window.XDomainRequest, h = "onload", m = !0, p.onprogress = function () {
                        }, p.ontimeout = function () {
                        }), l.auth) {
                        var y = l.auth.username || "", v = l.auth.password || "";
                        d.Authorization = "Basic " + c(y + ":" + v)
                    }
                    if (p.open(l.method.toUpperCase(), o(l.url, l.params, l.paramsSerializer), !0), p.timeout = l.timeout, p[h] = function () {
                            if (p && (4 === p.readyState || m) && 0 !== p.status) {
                                var n = "getAllResponseHeaders" in p ? i(p.getAllResponseHeaders()) : null, r = l.responseType && "text" !== l.responseType ? p.response : p.responseText, o = {
                                    data: a(r, n, l.transformResponse),
                                    status: 1223 === p.status ? 204 : p.status,
                                    statusText: 1223 === p.status ? "No Content" : p.statusText,
                                    headers: n,
                                    config: l,
                                    request: p
                                };
                                s(e, t, o), p = null
                            }
                        }, p.onerror = function () {
                            t(new Error("Network Error")), p = null
                        }, p.ontimeout = function () {
                            var e = new Error("timeout of " + l.timeout + "ms exceeded");
                            e.timeout = l.timeout, e.code = "ECONNABORTED", t(e), p = null
                        }, r.isStandardBrowserEnv()) {
                        var g = n(13), b = l.withCredentials || u(l.url) ? g.read(l.xsrfCookieName) : void 0;
                        b && (d[l.xsrfHeaderName] = b)
                    }
                    if ("setRequestHeader" in p && r.forEach(d, function (e, t) {
                            "undefined" == typeof f && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e)
                        }), l.withCredentials && (p.withCredentials = !0), l.responseType)try {
                        p.responseType = l.responseType
                    } catch (w) {
                        if ("json" !== p.responseType)throw w
                    }

                    if("get" === l.method){
                        if(l.url == '/Wap1/Jingyu0905/posters?addon=Poster'){
                        }
                    }
                    console.log(l.progress)
                    l.progress && ("post" === l.method || "put" === l.method ? p.upload.addEventListener("progress", l.progress) : "get" === l.method && p.addEventListener("progress", l.progress)), void 0 === f && (f = null), p.send(f)
                }
            }, function (e, t, n) {
                function r(e) {
                    return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }

                var o = n(3);
                e.exports = function (e, t, n) {
                    if (!t)return e;
                    var i;
                    if (n) i = n(t); else if (o.isURLSearchParams(t)) i = t.toString(); else {
                        var a = [];
                        o.forEach(t, function (e, t) {
                            null !== e && "undefined" != typeof e && (o.isArray(e) && (t += "[]"), o.isArray(e) || (e = [e]), o.forEach(e, function (e) {
                                o.isDate(e) ? e = e.toISOString() : o.isObject(e) && (e = JSON.stringify(e)), a.push(r(t) + "=" + r(e))
                            }))
                        }), i = a.join("&")
                    }
                    return i && (e += (e.indexOf("?") === -1 ? "?" : "&") + i), e
                }
            }, function (e, t, n) {
                var r = n(3);
                e.exports = function (e) {
                    var t, n, o, i = {};
                    return e ? (r.forEach(e.split("\n"), function (e) {
                            o = e.indexOf(":"), t = r.trim(e.substr(0, o)).toLowerCase(), n = r.trim(e.substr(o + 1)), t && (i[t] = i[t] ? i[t] + ", " + n : n)
                        }), i) : i
                }
            }, function (e, t, n) {
                var r = n(3);
                e.exports = function (e, t, n) {
                    return r.forEach(n, function (n) {
                        e = n(e, t)
                    }), e
                }
            }, function (e, t, n) {
                var r = n(3);
                e.exports = r.isStandardBrowserEnv() ? function () {
                        function e(e) {
                            var t = e;
                            return n && (o.setAttribute("href", t), t = o.href), o.setAttribute("href", t), {
                                href: o.href,
                                protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                                host: o.host,
                                search: o.search ? o.search.replace(/^\?/, "") : "",
                                hash: o.hash ? o.hash.replace(/^#/, "") : "",
                                hostname: o.hostname,
                                port: o.port,
                                pathname: "/" === o.pathname.charAt(0) ? o.pathname : "/" + o.pathname
                            }
                        }

                        var t, n = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
                        return t = e(window.location.href), function (n) {
                            var o = r.isString(n) ? e(n) : n;
                            return o.protocol === t.protocol && o.host === t.host
                        }
                    }() : function () {
                        return function () {
                            return !0
                        }
                    }()
            }, function (e, t) {
                function n() {
                    this.message = "String contains an invalid character"
                }

                function r(e) {
                    for (var t, r, i = String(e), a = "", u = 0, c = o; i.charAt(0 | u) || (c = "=", u % 1); a += c.charAt(63 & t >> 8 - u % 1 * 8)) {
                        if (r = i.charCodeAt(u += .75), r > 255)throw new n;
                        t = t << 8 | r
                    }
                    return a
                }

                var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                n.prototype = new Error, n.prototype.code = 5, n.prototype.name = "InvalidCharacterError", e.exports = r
            }, function (e, t) {
                e.exports = function (e, t, n) {
                    var r = n.config.validateStatus;
                    n.status && r && !r(n.status) ? t(n) : e(n)
                }
            }, function (e, t, n) {
                var r = n(3);
                e.exports = r.isStandardBrowserEnv() ? function () {
                        return {
                            write: function (e, t, n, o, i, a) {
                                var u = [];
                                u.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()), r.isString(o) && u.push("path=" + o), r.isString(i) && u.push("domain=" + i), a === !0 && u.push("secure"), document.cookie = u.join("; ")
                            }, read: function (e) {
                                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                                return t ? decodeURIComponent(t[3]) : null
                            }, remove: function (e) {
                                this.write(e, "", Date.now() - 864e5)
                            }
                        }
                    }() : function () {
                        return {
                            write: function () {
                            }, read: function () {
                                return null
                            }, remove: function () {
                            }
                        }
                    }()
            }, function (e, t, n) {
                function r() {
                    this.handlers = []
                }

                var o = n(3);
                r.prototype.use = function (e, t) {
                    return this.handlers.push({fulfilled: e, rejected: t}), this.handlers.length - 1
                }, r.prototype.eject = function (e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }, r.prototype.forEach = function (e) {
                    o.forEach(this.handlers, function (t) {
                        null !== t && e(t)
                    })
                }, e.exports = r
            }, function (e, t) {
                e.exports = function (e) {
                    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
                }
            }, function (e, t) {
                e.exports = function (e, t) {
                    return e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "")
                }
            }, function (e, t) {
                e.exports = function (e, t) {
                    return function () {
                        for (var n = new Array(arguments.length), r = 0; r < n.length; r++)n[r] = arguments[r];
                        return e.apply(t, n)
                    }
                }
            }, function (e, t) {
                e.exports = function (e) {
                    return function (t) {
                        return e.apply(null, t)
                    }
                }
            }])
        }).call(t, n(15))
    }, function (e, t, n) {
        (function (e, r) {
            function o(e, t) {
                this._id = e, this._clearFn = t
            }

            var i = n(15).nextTick, a = Function.prototype.apply, u = Array.prototype.slice, c = {}, s = 0;
            t.setTimeout = function () {
                return new o(a.call(setTimeout, window, arguments), clearTimeout)
            }, t.setInterval = function () {
                return new o(a.call(setInterval, window, arguments), clearInterval)
            }, t.clearTimeout = t.clearInterval = function (e) {
                e.close()
            }, o.prototype.unref = o.prototype.ref = function () {
            }, o.prototype.close = function () {
                this._clearFn.call(window, this._id)
            }, t.enroll = function (e, t) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = t
            }, t.unenroll = function (e) {
                clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
            }, t._unrefActive = t.active = function (e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 && (e._idleTimeoutId = setTimeout(function () {
                    e._onTimeout && e._onTimeout()
                }, t))
            }, t.setImmediate = "function" == typeof e ? e : function (e) {
                    var n = s++, r = !(arguments.length < 2) && u.call(arguments, 1);
                    return c[n] = !0, i(function () {
                        c[n] && (r ? e.apply(null, r) : e.call(null), t.clearImmediate(n))
                    }), n
                }, t.clearImmediate = "function" == typeof r ? r : function (e) {
                    delete c[e]
                }
        }).call(t, n(7).setImmediate, n(7).clearImmediate)
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(2), i = r(o), a = {}, u = ["closeWindow", "openLocation", "hideOptionMenu", "showOptionMenu", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem"];
        a.ready = i["default"].ready, u.forEach(function (e) {
            return a[e] = function (t) {
                return i["default"]._call(e, t)
            }
        }), t["default"] = a
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e, t, n) {
            return t = t || "", n = n || "", e = e || "", p = new s.Promise(function (r, o) {
                t ? (d.user && r(d.user), f["default"].get(c.USERINFO_URL, {
                        params: {
                            wechat: n,
                            type: t
                        }
                    }).then(function (u) {
                        0 === u.data.code ? (i(u.data.data), r(d.user)) : (o(u.data.code), a(e, t, n))
                    })) : (o(-2), a("", t, n))
            })["catch"](function (e) {
                return console.warn("授权失败,错误码:", e)
            })
        }

        function i(e) {
            d.user = e
        }

        function a(e, t, n) {
            e = e || location.href;
            var r = e.split("#");
            r[1] && "none" !== r[1] && (e = (r[0].indexOf("?") === -1 ? "?" : "&") + "anchor=" + r[1]);
            var o = "url=" + u(e) + "&oauth=" + t + "&wechat=" + n, i = c.JUMPOAUTH_URL + (c.JUMPOAUTH_URL.indexOf("?") === -1 ? "?" : "&") + o;
            location.href = i
        }

        function u(e) {
            return encodeURIComponent(e).replace(/'/g, "%27").replace(/"/g, "%22")
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var c = n(4), s = n(3), l = n(6), f = r(l), d = function (e, t, n) {
            return o(e, t, n)
        };
        d.user = null;
        var p;
        d.then = function (e) {
            return p ? p.then(e) : d()
        }, d.setUser = i, t["default"] = d
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
        }

        function i() {
            var e = (0, f.query)('meta[name="keywords"]'), t = (0, f.query)('meta[name="description"]'), n = (0, f.getAttr)(e, "content") || document.title, r = (0, f.getAttr)(t, "content") || "", o = location.origin + x + "/share.jpg", i = location.href.split("#")[0];
            l.SHARE_TYPES.forEach(function (e) {
                return g[e] = {title: n, desc: r, link: i, imgUrl: o}
            })
        }

        function a(e) {
            return S.test(e) ? e : location.origin + (0, v.simplifyPath)(x + "/" + e)
        }

        function u(e, t) {
            var n, r = g[t];
            return Object.keys(e).forEach(function (t) {
                if (n = e[t])if (O.indexOf(t) !== -1) r.imgUrl = a(n); else if (A.indexOf(t) !== -1) r.dataUrl = a(n); else if ("link" === t) {
                    var o = n.split("#"), i = a(o[0]);
                    o[1] && "none" !== o[1] && (i += (i.indexOf("?") !== -1 ? "&" : "?") + "anchor=" + o[1]), r[t] = i
                } else r[t] = n
            }), r
        }

        function c(e, t) {
            t = t.toLowerCase(), e = e || {};
            var n = l.SHARE_TYPES.indexOf(t);
            if (n !== -1) {
                var r = u(e, t), o = w[n];
                y["default"]._call(o, r, s)
            }
        }

        function s(e, t) {
            t = t || "*", b || i(), b = !0;
            var n = t;
            return p["default"].string(t) && (n = "*" === t ? l.SHARE_TYPES : t.split(",")), e && p["default"].array(n) && n.forEach(function (t) {
                return c(e, t)
            }), s
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = s;
        var l = n(4), f = n(5), d = n(1), p = r(d), h = n(12), m = n(2), y = r(m), v = n(27), g = {}, b = !1, w = l.API_GROUPS_MAP[0], _ = location.pathname.split("/");
        _.pop();
        var x = _.join("/"), S = /(http|ftp|https):\/\//, O = ["img-url", "imgurl", "img_url", "imgUrl"], A = ["data-url", "data_url", "dataurl", "dataUrl"];
        (0, h.bindCommonCb)(s, function (e, t) {
            s(e, "*")
        }), l.SHARE_TYPES.forEach(function (e) {
            var t = s[e] = function (t, n) {
                return s(p["default"].string(t) ? o({}, t, n) : t, e)
            };
            t.get = function () {
                return s.get(e)
            }, (0, h.bindCommonCb)(t, function (t) {
                return s(t, e)
            })
        }), s.get = function (e) {
            return "*" === e || p["default"].undef(e) ? g : g[e]
        }
    }, function (e, t) {
        "use strict";
        var n = function () {
            var e = {}, t = ["Quad", "Cubic", "Quart", "Quint", "Expo"], n = {
                Sine: function (e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                }, Circ: function (e) {
                    return 1 - Math.sqrt(1 - e * e)
                }, Elastic: function (e, t) {
                    if (0 === e || 1 === e)return e;
                    var n = 1 - Math.min(t, 998) / 1e3, r = e / 1, o = r - 1, i = n / (2 * Math.PI) * Math.asin(1);
                    return -(Math.pow(2, 10 * o) * Math.sin((o - i) * (2 * Math.PI) / n))
                }, Back: function (e) {
                    return e * e * (3 * e - 2)
                }, Bounce: function (e) {
                    for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
                }
            };
            return t.forEach(function (e, t) {
                n[e] = function (e) {
                    return Math.pow(e, t + 2)
                }
            }), Object.keys(n).forEach(function (t) {
                var r = n[t];
                e["easeIn" + t] = r, e["easeOut" + t] = function (e, t) {
                    return 1 - r(1 - e, t)
                }, e["easeInOut" + t] = function (e, t) {
                    return e < .5 ? r(2 * e, t) / 2 : 1 - r(e * -2 + 2, t) / 2
                }
            }), e.linear = function (e) {
                return e
            }, e
        }();
        e.exports = n
    }, function (e, t) {
        "use strict";
        function n(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
        }

        function r(e, t) {
            a.map(function (r) {
                return e[r] = function (e) {
                    for (var o = arguments.length, i = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)i[a - 1] = arguments[a];
                    return t(n({}, r, e), i)
                }
            })
        }

        function o() {
            var e = u.exec(location.href);
            return !!e && e[1]
        }

        function i() {
            var e = c.exec(location.href);
            return !!e && e[1]
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.bindCommonCb = r, t.getOauthType = o, t.getOauthWechat = i;
        var a = ["success", "fail", "complete", "cancel", "trigger"], u = /[\?|&]oauth=(\w+)/, c = /[\?|&]wechat=(\w+)/
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(26), i = r(o);
        t["default"] = function () {
            function e(e, t) {
                return a[e] = a[e] || [], a[e].push(t), this
            }

            function t(t, n) {
                return n._once = !0, e(t, n), this
            }

            function n(e) {
                var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                return t ? a[e].splice(a[e].indexOf(t), 1) : delete a[e], this
            }

            function r(e) {
                for (var t = this, r = arguments.length, o = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)o[i - 1] = arguments[i];
                var u = a[e] && a[e].slice();
                return u && u.forEach(function (r) {
                    r._once && n(e, r), r.apply(t, o)
                }), this
            }

            var o = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], a = {};
            return (0, i["default"])(o, {on: e, once: t, off: n, emit: r})
        }
    }, function (e, t) {
        "use strict";
        function n(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
        }

        function r(e, t) {
            function r(t, n, r) {
                e.WeixinJSBridge ? WeixinJSBridge.invoke(t, i(n), function (e) {
                        c(t, e, r)
                    }) : f(t, r)
            }

            function o(t, n, r) {
                e.WeixinJSBridge ? WeixinJSBridge.on(t, function (e) {
                        r && r.trigger && r.trigger(e), c(t, e, n)
                    }) : r ? f(t, r) : f(t, n)
            }

            function i(e) {
                return e = e || {}, e.appId = C.appId, e.verifyAppId = C.appId, e.verifySignType = "sha1", e.verifyTimestamp = C.timestamp + "", e.verifyNonceStr = C.nonceStr, e.verifySignature = C.signature, e
            }

            function a(e) {
                return {
                    timeStamp: e.timestamp + "",
                    nonceStr: e.nonceStr,
                    "package": e["package"],
                    paySign: e.paySign,
                    signType: e.signType || "SHA1"
                }
            }

            function u(e) {
                return e.postalCode = e.addressPostalCode, delete e.addressPostalCode, e.provinceName = e.proviceFirstStageName, delete e.proviceFirstStageName, e.cityName = e.addressCitySecondStageName, delete e.addressCitySecondStageName, e.countryName = e.addressCountiesThirdStageName, delete e.addressCountiesThirdStageName, e.detailInfo = e.addressDetailInfo, delete e.addressDetailInfo, e
            }

            function c(e, t, n) {
                "openEnterpriseChat" == e && (t.errCode = t.err_code), delete t.err_code, delete t.err_desc, delete t.err_detail;
                var r = t.errMsg;
                r || (r = t.err_msg, delete t.err_msg, r = s(e, r), t.errMsg = r), n = n || {}, n._complete && (n._complete(t), delete n._complete), r = t.errMsg || "", C.debug && !n.isInnerInvoke && alert(JSON.stringify(t));
                var o = r.indexOf(":"), i = r.substring(o + 1);
                switch (i) {
                    case"ok":
                        n.success && n.success(t);
                        break;
                    case"cancel":
                        n.cancel && n.cancel(t);
                        break;
                    default:
                        n.fail && n.fail(t)
                }
                n.complete && n.complete(t)
            }

            function s(e, t) {
                var n = e, r = g[n];
                r && (n = r);
                var o = "ok";
                if (t) {
                    var i = t.indexOf(":");
                    o = t.substring(i + 1), "confirm" == o && (o = "ok"), "failed" == o && (o = "fail"), -1 != o.indexOf("failed_") && (o = o.substring(7)), -1 != o.indexOf("fail_") && (o = o.substring(5)), o = o.replace(/_/g, " "), o = o.toLowerCase(), ("access denied" == o || "no permission to execute" == o) && (o = "permission denied"), "config" == n && "function not exist" == o && (o = "ok"), "" == o && (o = "fail")
                }
                return t = n + ":" + o
            }

            function l(e) {
                if (e) {
                    for (var t = 0, n = e.length; n > t; ++t) {
                        var r = e[t], o = v[r];
                        o && (e[t] = o)
                    }
                    return e
                }
            }

            function f(e, t) {
                if (!(!C.debug || t && t.isInnerInvoke)) {
                    var n = g[e];
                    n && (e = n), t && t._complete && delete t._complete, console.log('"' + e + '",', t || "")
                }
            }

            function d(e) {
                if (!(S || O || C.debug || "6.0.2" > T || I.systemType < 0)) {
                    var t = new Image;
                    I.appId = C.appId, I.initTime = P.initEndTime - P.initStartTime, I.preVerifyTime = P.preVerifyEndTime - P.preVerifyStartTime, R.getNetworkType({
                        isInnerInvoke: !0,
                        success: function (e) {
                            I.networkType = e.networkType;
                            var n = "https://open.weixin.qq.com/sdk/report?v=" + I.version + "&o=" + I.isPreVerifyOk + "&s=" + I.systemType + "&c=" + I.clientVersion + "&a=" + I.appId + "&n=" + I.networkType + "&i=" + I.initTime + "&p=" + I.preVerifyTime + "&u=" + I.url;
                            t.src = n
                        }
                    })
                }
            }

            function p() {
                return (new Date).getTime()
            }

            function h(t) {
                A && (e.WeixinJSBridge ? t() : b.addEventListener && b.addEventListener("WeixinJSBridgeReady", t, !1))
            }

            function m() {
                R.invoke || (R.invoke = function (t, n, r) {
                    e.WeixinJSBridge && WeixinJSBridge.invoke(t, i(n), r)
                }, R.on = function (t, n) {
                    e.WeixinJSBridge && WeixinJSBridge.on(t, n)
                })
            }

            if (!e.jWeixin) {
                var y, v = {
                    config: "preVerifyJSAPI",
                    onMenuShareTimeline: "menu:share:timeline",
                    onMenuShareAppMessage: "menu:share:appmessage",
                    onMenuShareQQ: "menu:share:qq",
                    onMenuShareWeibo: "menu:share:weiboApp",
                    onMenuShareQZone: "menu:share:QZone",
                    previewImage: "imagePreview",
                    getLocation: "geoLocation",
                    openProductSpecificView: "openProductViewWithPid",
                    addCard: "batchAddCard",
                    openCard: "batchViewCard",
                    chooseWXPay: "getBrandWCPayRequest",
                    openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
                    startSearchBeacons: "startMonitoringBeacons",
                    stopSearchBeacons: "stopMonitoringBeacons",
                    onSearchBeacons: "onBeaconsInRange",
                    consumeAndShareCard: "consumedShareCard",
                    openAddress: "editAddress"
                }, g = function () {
                    var e = {};
                    for (var t in v)e[v[t]] = t;
                    return e
                }(), b = e.document, w = b.title, _ = navigator.userAgent.toLowerCase(), x = navigator.platform.toLowerCase(), S = !(!x.match("mac") && !x.match("win")), O = -1 != _.indexOf("wxdebugger"), A = -1 != _.indexOf("micromessenger"), M = -1 != _.indexOf("android"), E = -1 != _.indexOf("iphone") || -1 != _.indexOf("ipad"), T = function () {
                    var e = _.match(/micromessenger\/(\d+\.\d+\.\d+)/) || _.match(/micromessenger\/(\d+\.\d+)/);
                    return e ? e[1] : ""
                }(), P = {
                    initStartTime: p(),
                    initEndTime: 0,
                    preVerifyStartTime: 0,
                    preVerifyEndTime: 0
                }, I = {
                    version: 1,
                    appId: "",
                    initTime: 0,
                    preVerifyTime: 0,
                    networkType: "",
                    isPreVerifyOk: 1,
                    systemType: E ? 1 : M ? 2 : -1,
                    clientVersion: T,
                    url: encodeURIComponent(location.href)
                }, C = {}, k = {_completes: []}, j = {state: 0, data: {}};
                h(function () {
                    P.initEndTime = p()
                });
                var L = !1, q = [], R = (y = {
                    config: function (e) {
                        C = e, f("config", e);
                        var t = C.check !== !1;
                        h(function () {
                            if (t) r(v.config, {verifyJsApiList: l(C.jsApiList)}, function () {
                                k._complete = function (e) {
                                    P.preVerifyEndTime = p(), j.state = 1, j.data = e
                                }, k.success = function (e) {
                                    I.isPreVerifyOk = 0
                                }, k.fail = function (e) {
                                    k._fail ? k._fail(e) : j.state = -1
                                };
                                var e = k._completes;
                                return e.push(function () {
                                    d()
                                }), k.complete = function (t) {
                                    for (var n = 0, r = e.length; r > n; ++n)e[n]();
                                    k._completes = []
                                }, k
                            }()), P.preVerifyStartTime = p(); else {
                                j.state = 1;
                                for (var e = k._completes, n = 0, o = e.length; o > n; ++n)e[n]();
                                k._completes = []
                            }
                        }), C.beta && m()
                    }, ready: function (e) {
                        0 != j.state ? e() : (k._completes.push(e), !A && C.debug && e())
                    }, error: function (e) {
                        "6.0.2" > T || (-1 == j.state ? e(j.data) : k._fail = e)
                    }, checkJsApi: function (e) {
                        var t = function n(e) {
                            var n = e.checkResult;
                            for (var t in n) {
                                var r = g[t];
                                r && (n[r] = n[t], delete n[t])
                            }
                            return e
                        };
                        r("checkJsApi", {jsApiList: l(e.jsApiList)}, function () {
                            return e._complete = function (e) {
                                if (M) {
                                    var n = e.checkResult;
                                    n && (e.checkResult = JSON.parse(n))
                                }
                                e = t(e)
                            }, e
                        }())
                    }, onMenuShareTimeline: function (e) {
                        o(v.onMenuShareTimeline, {
                            complete: function () {
                                r("shareTimeline", {
                                    title: e.title || w,
                                    desc: e.title || w,
                                    img_url: e.imgUrl || "",
                                    link: e.link || location.href,
                                    type: e.type || "link",
                                    data_url: e.dataUrl || ""
                                }, e)
                            }
                        }, e)
                    }, onMenuShareAppMessage: function (e) {
                        o(v.onMenuShareAppMessage, {
                            complete: function () {
                                r("sendAppMessage", {
                                    title: e.title || w,
                                    desc: e.desc || "",
                                    link: e.link || location.href,
                                    img_url: e.imgUrl || "",
                                    type: e.type || "link",
                                    data_url: e.dataUrl || ""
                                }, e)
                            }
                        }, e)
                    }, onMenuShareQQ: function (e) {
                        o(v.onMenuShareQQ, {
                            complete: function () {
                                r("shareQQ", {
                                    title: e.title || w,
                                    desc: e.desc || "",
                                    img_url: e.imgUrl || "",
                                    link: e.link || location.href
                                }, e)
                            }
                        }, e)
                    }, onMenuShareWeibo: function (e) {
                        o(v.onMenuShareWeibo, {
                            complete: function () {
                                r("shareWeiboApp", {
                                    title: e.title || w,
                                    desc: e.desc || "",
                                    img_url: e.imgUrl || "",
                                    link: e.link || location.href
                                }, e)
                            }
                        }, e)
                    }, onMenuShareQZone: function (e) {
                        o(v.onMenuShareQZone, {
                            complete: function () {
                                r("shareQZone", {
                                    title: e.title || w,
                                    desc: e.desc || "",
                                    img_url: e.imgUrl || "",
                                    link: e.link || location.href
                                }, e)
                            }
                        }, e)
                    }, startRecord: function (e) {
                        r("startRecord", {}, e)
                    }, stopRecord: function (e) {
                        r("stopRecord", {}, e)
                    }, onVoiceRecordEnd: function (e) {
                        o("onVoiceRecordEnd", e)
                    }, playVoice: function (e) {
                        r("playVoice", {localId: e.localId}, e)
                    }, pauseVoice: function (e) {
                        r("pauseVoice", {localId: e.localId}, e)
                    }, stopVoice: function (e) {
                        r("stopVoice", {localId: e.localId}, e)
                    }, onVoicePlayEnd: function (e) {
                        o("onVoicePlayEnd", e)
                    }, uploadVoice: function (e) {
                        r("uploadVoice", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
                    }, downloadVoice: function (e) {
                        r("downloadVoice", {
                            serverId: e.serverId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    }, translateVoice: function (e) {
                        r("translateVoice", {
                            localId: e.localId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    }, chooseImage: function (e) {
                        r("chooseImage", {
                            scene: "1|2",
                            count: e.count || 9,
                            sizeType: e.sizeType || ["original", "compressed"],
                            sourceType: e.sourceType || ["album", "camera"]
                        }, function () {
                            return e._complete = function (e) {
                                if (M) {
                                    var t = e.localIds;
                                    t && (e.localIds = JSON.parse(t))
                                }
                            }, e
                        }())
                    }, getLocation: function (e) {
                    }, previewImage: function (e) {
                        r(v.previewImage, {current: e.current, urls: e.urls}, e)
                    }, uploadImage: function (e) {
                        r("uploadImage", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
                    }, downloadImage: function (e) {
                        r("downloadImage", {
                            serverId: e.serverId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    }, getLocalImgData: function (e) {
                        L === !1 ? (L = !0, r("getLocalImgData", {localId: e.localId}, function () {
                                return e._complete = function (e) {
                                    if (L = !1, q.length > 0) {
                                        var t = q.shift();
                                        wx.getLocalImgData(t)
                                    }
                                }, e
                            }())) : q.push(e)
                    }, getNetworkType: function (e) {
                        var t = function n(e) {
                            var n = e.errMsg;
                            e.errMsg = "getNetworkType:ok";
                            var t = e.subtype;
                            if (delete e.subtype, t) e.networkType = t; else {
                                var r = n.indexOf(":"), o = n.substring(r + 1);
                                switch (o) {
                                    case"wifi":
                                    case"edge":
                                    case"wwan":
                                        e.networkType = o;
                                        break;
                                    default:
                                        e.errMsg = "getNetworkType:fail"
                                }
                            }
                            return e
                        };
                        r("getNetworkType", {}, function () {
                            return e._complete = function (e) {
                                e = t(e)
                            }, e
                        }())
                    }, openLocation: function (e) {
                        r("openLocation", {
                            latitude: e.latitude,
                            longitude: e.longitude,
                            name: e.name || "",
                            address: e.address || "",
                            scale: e.scale || 28,
                            infoUrl: e.infoUrl || ""
                        }, e)
                    }
                }, n(y, "getLocation", function (e) {
                    e = e || {}, r(v.getLocation, {type: e.type || "wgs84"}, function () {
                        return e._complete = function (e) {
                            delete e.type
                        }, e
                    }())
                }), n(y, "hideOptionMenu", function (e) {
                    r("hideOptionMenu", {}, e)
                }), n(y, "showOptionMenu", function (e) {
                    r("showOptionMenu", {}, e)
                }), n(y, "closeWindow", function (e) {
                    e = e || {}, r("closeWindow", {}, e)
                }), n(y, "hideMenuItems", function (e) {
                    r("hideMenuItems", {menuList: e.menuList}, e)
                }), n(y, "showMenuItems", function (e) {
                    r("showMenuItems", {menuList: e.menuList}, e)
                }), n(y, "hideAllNonBaseMenuItem", function (e) {
                    r("hideAllNonBaseMenuItem", {}, e)
                }), n(y, "showAllNonBaseMenuItem", function (e) {
                    r("showAllNonBaseMenuItem", {}, e)
                }), n(y, "scanQRCode", function (e) {
                    e = e || {}, r("scanQRCode", {
                        needResult: e.needResult || 0,
                        scanType: e.scanType || ["qrCode", "barCode"]
                    }, function () {
                        return e._complete = function (e) {
                            if (E) {
                                var t = e.resultStr;
                                if (t) {
                                    var n = JSON.parse(t);
                                    e.resultStr = n && n.scan_code && n.scan_code.scan_result
                                }
                            }
                        }, e
                    }())
                }), n(y, "openAddress", function (e) {
                    r(v.openAddress, {}, function () {
                        return e._complete = function (e) {
                            e = u(e)
                        }, e
                    }())
                }), n(y, "openProductSpecificView", function (e) {
                    r(v.openProductSpecificView, {pid: e.productId, view_type: e.viewType || 0, ext_info: e.extInfo}, e)
                }), n(y, "addCard", function (e) {
                    for (var t = e.cardList, n = [], o = 0, i = t.length; i > o; ++o) {
                        var a = t[o], u = {card_id: a.cardId, card_ext: a.cardExt};
                        n.push(u)
                    }
                    r(v.addCard, {card_list: n}, function () {
                        return e._complete = function (e) {
                            var t = e.card_list;
                            if (t) {
                                t = JSON.parse(t);
                                for (var n = 0, r = t.length; r > n; ++n) {
                                    var o = t[n];
                                    o.cardId = o.card_id, o.cardExt = o.card_ext, o.isSuccess = !!o.is_succ, delete o.card_id, delete o.card_ext, delete o.is_succ
                                }
                                e.cardList = t, delete e.card_list
                            }
                        }, e
                    }())
                }), n(y, "chooseCard", function (e) {
                    r("chooseCard", {
                        app_id: C.appId,
                        location_id: e.shopId || "",
                        sign_type: e.signType || "SHA1",
                        card_id: e.cardId || "",
                        card_type: e.cardType || "",
                        card_sign: e.cardSign,
                        time_stamp: e.timestamp + "",
                        nonce_str: e.nonceStr
                    }, function () {
                        return e._complete = function (e) {
                            e.cardList = e.choose_card_info, delete e.choose_card_info
                        }, e
                    }())
                }), n(y, "openCard", function (e) {
                    for (var t = e.cardList, n = [], o = 0, i = t.length; i > o; ++o) {
                        var a = t[o], u = {card_id: a.cardId, code: a.code};
                        n.push(u)
                    }
                    r(v.openCard, {card_list: n}, e)
                }), n(y, "consumeAndShareCard", function (e) {
                    r(v.consumeAndShareCard, {consumedCardId: e.cardId, consumedCode: e.code}, e)
                }), n(y, "chooseWXPay", function (e) {
                    r(v.chooseWXPay, a(e), e)
                }), n(y, "openEnterpriseRedPacket", function (e) {
                    r(v.openEnterpriseRedPacket, a(e), e)
                }), n(y, "startSearchBeacons", function (e) {
                    r(v.startSearchBeacons, {ticket: e.ticket}, e)
                }), n(y, "stopSearchBeacons", function (e) {
                    r(v.stopSearchBeacons, {}, e)
                }), n(y, "onSearchBeacons", function (e) {
                    o(v.onSearchBeacons, e)
                }), n(y, "openEnterpriseChat", function (e) {
                    r("openEnterpriseChat", {useridlist: e.userIds, chatname: e.groupName}, e)
                }), y), N = 1, V = {};
                return b.addEventListener("error", function (e) {
                    if (!M) {
                        var t = e.target, n = t.tagName, r = t.src;
                        if ("IMG" == n || "VIDEO" == n || "AUDIO" == n || "SOURCE" == n) {
                            var o = -1 != r.indexOf("wxlocalresource://");
                            if (o) {
                                e.preventDefault(), e.stopPropagation();
                                var i = t["wx-id"];
                                if (i || (i = N++, t["wx-id"] = i), V[i])return;
                                V[i] = !0, wx.ready(function () {
                                    wx.getLocalImgData({
                                        localId: r, success: function (e) {
                                            t.src = e.localData
                                        }
                                    })
                                })
                            }
                        }
                    }
                }, !0), b.addEventListener("load", function (e) {
                    if (!M) {
                        var t = e.target, n = t.tagName;
                        if (t.src, "IMG" == n || "VIDEO" == n || "AUDIO" == n || "SOURCE" == n) {
                            var r = t["wx-id"];
                            r && (V[r] = !1)
                        }
                    }
                }, !0), t && (e.wx = e.jWeixin = R), R
            }
        }

        function o() {
            i || (i = !0, r(window, !0))
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = o;
        var i = !1
    }, function (e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }

        function r() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(e) {
            if (l === setTimeout)return setTimeout(e, 0);
            if ((l === n || !l) && setTimeout)return l = setTimeout, setTimeout(e, 0);
            try {
                return l(e, 0)
            } catch (t) {
                try {
                    return l.call(null, e, 0)
                } catch (t) {
                    return l.call(this, e, 0)
                }
            }
        }

        function i(e) {
            if (f === clearTimeout)return clearTimeout(e);
            if ((f === r || !f) && clearTimeout)return f = clearTimeout, clearTimeout(e);
            try {
                return f(e)
            } catch (t) {
                try {
                    return f.call(null, e)
                } catch (t) {
                    return f.call(this, e)
                }
            }
        }

        function a() {
            m && p && (m = !1, p.length ? h = p.concat(h) : y = -1, h.length && u())
        }

        function u() {
            if (!m) {
                var e = o(a);
                m = !0;
                for (var t = h.length; t;) {
                    for (p = h, h = []; ++y < t;)p && p[y].run();
                    y = -1, t = h.length
                }
                p = null, m = !1, i(e)
            }
        }

        function c(e, t) {
            this.fun = e, this.array = t
        }

        function s() {
        }

        var l, f, d = e.exports = {};
        !function () {
            try {
                l = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                l = n
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                f = r
            }
        }();
        var p, h = [], m = !1, y = -1;
        d.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
            h.push(new c(e, t)), 1 !== h.length || m || o(u)
        }, c.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = s, d.addListener = s, d.once = s, d.off = s, d.removeListener = s, d.removeAllListeners = s, d.emit = s, d.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function () {
            return "/"
        }, d.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function () {
            return 0
        }
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o() {
            if (l)return !0;
            l = !0;
            var e = a["default"] + c["default"];
            return (0, s.writeCss)(e)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = o;
        var i = n(17), a = r(i), u = n(19), c = r(u), s = n(5), l = !1
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = ".layermbox {\n    position: relative;\n    z-index: 19920626;\n}\n\n.laymshade,\n.layermmain {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.laymshade {\n    background-color: rgba(0, 0, 0, .5);\n    pointer-events: auto;\n}\n\n.layermmain {\n    display: table;\n    font-family: Helvetica, arial, sans-serif;\n    pointer-events: none;\n}\n\n.layermmain .section {\n    display: table-cell;\n    vertical-align: middle;\n    text-align: center;\n}\n\n.layermchild {\n    position: relative;\n    display: inline-block;\n    text-align: left;\n    background-color: #FAFAFC;\n    font-size: 14px;\n    border-radius: 3px;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);\n    pointer-events: auto;\n    box-shadow: 1px 1px 8px #353535\n}\n\n.layermchild {\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation-duration: .18s;\n    animation-duration: .18s;\n}\n\n.layermborder {\n    border: 1px solid #999;\n}\n\n@-webkit-keyframes layerbounceInEffect {\n    0% {\n        opacity: 0;\n        -webkit-transform: scale(.5);\n        transform: scale(.5)\n    }\n    100% {\n        opacity: 1;\n        -webkit-transform: scale(1);\n        transform: scale(1)\n    }\n}\n\n.layermanim {\n    animation-name: layerbounceInEffect;\n    -webkit-animation-name: layerbounceInEffect;\n}\n\n.layermbox0 .layermchild {\n    max-width: 90%;\n    min-width: 240px;\n}\n\n.layermbox1 .layermchild {\n    border: none;\n    border-radius: 0;\n}\n\n.layermbox2 .layermchild {\n    width: auto;\n    max-width: 260px;\n    min-width: 40px;\n    border: none;\n    background: none;\n    box-shadow: none;\n    color: #fff;\n}\n\n.layermchild h3 {\n    padding: 0 45px 0px 20px;\n    height: 50px;\n    line-height: 50px;\n    border-bottom: 1px solid #EBEBEB;\n    font-size: 16px;\n    font-weight: 400;\n    border-radius: 3px 3px 0 0;\n    margin: 0;\n}\n\n.layermchild h3,\n.layermbtn span {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.layermcont {\n    padding: 20px 15px;\n    line-height: 22px;\n    text-align: center;\n    color: #2d2d2d;\n}\n\n.layermbox1 .layermcont {\n    padding: 0;\n    text-align: left;\n}\n\n.layermbox2 .layermcont {\n    text-align: center;\n    padding: 0;\n    line-height: 0;\n}\n\n.layermbox2 .layermcont i {\n    width: 25px;\n    height: 25px;\n    margin-left: 8px;\n    display: inline-block;\n    background-color: #fff;\n    border-radius: 100%;\n}\n\n.layermbox2 .layermcont i {\n    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;\n    animation: bouncedelay 1.4s infinite ease-in-out;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n@-webkit-keyframes bouncedelay {\n    0%,\n    80%,\n    100% {\n        transform: scale(0);\n        -webkit-transform: scale(0)\n    }\n    40% {\n        transform: scale(1);\n        -webkit-transform: scale(1)\n    }\n}\n\n@keyframes bouncedelay {\n    0%,\n    80%,\n    100% {\n        transform: scale(0);\n        -webkit-transform: scale(0)\n    }\n    40% {\n        transform: scale(1);\n        -webkit-transform: scale(1)\n    }\n}\n\n.layermbox2 .layermcont i:first-child {\n    margin-left: 0;\n    -webkit-animation-delay: -.32s;\n    animation-delay: -.32s;\n}\n\n.layermbox2 .layermcont i.laymloadtwo {\n    -webkit-animation-delay: -.16s;\n    animation-delay: -.16s;\n}\n\n.layermbox2 .layermcont>div {\n    line-height: 22px;\n    padding-top: 7px;\n    margin-bottom: 20px;\n    font-size: 14px;\n}\n\n.layermbtn {\n    position: relative;\n    height: 40px;\n    line-height: 40px;\n    font-size: 0;\n    text-align: center;\n    border-top: 1px solid #EBEBEB;\n}\n\n.layermbtn span {\n    position: relative;\n    display: inline-block;\n    width: 50%;\n    text-align: center;\n    font-size: 14px;\n    cursor: pointer;\n    border-radius: 0 3px 0 0;\n}\n\n.layermbtn span:first-child {\n    height: 39px;\n    background-color: #fff;\n    border-radius: 0 0 0 3px;\n}\n\n.layermbtn span:last-child {\n    color: #0BB20C;\n    height: 39px;\n}\n\n.layermbtn:before {\n    content: '\\20';\n    position: absolute;\n    width: 1px;\n    height: 39px;\n    left: 50%;\n    top: 0;\n    background-color: #EBEBEB;\n}\n\n.layermend {\n    position: absolute;\n    right: 7px;\n    top: 10px;\n    width: 30px;\n    height: 30px;\n    border: 0;\n    font-weight: 400;\n    background: transparent;\n    cursor: pointer;\n    -webkit-appearance: none;\n    font-size: 30px;\n}\n\n.layermend::before,\n.layermend::after {\n    position: absolute;\n    left: 5px;\n    top: 15px;\n    content: '';\n    width: 18px;\n    height: 1px;\n    background-color: #999;\n    -ms-transform: rotate(45deg);\n        transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n    border-radius: 3px;\n}\n\n.layermend::after {\n    -ms-transform: rotate(-45deg);\n        transform: rotate(-45deg);\n    -webkit-transform: rotate(-45deg);\n}\n\n.layermbox2 .laym-loading {\n    color: #fff;\n    font-size: 10px;\n    font-weight: 900;\n    -webkit-transform-origin: center;\n        -ms-transform-origin: center;\n            transform-origin: center;\n    -webkit-transform: scale(0.7);\n        -ms-transform: scale(0.7);\n            transform: scale(0.7);\n    margin-top: 10px;\n}\n"
    }, function (e, t) {
        "use strict";
        function n(e, t) {
            return ([u, c, s][e] || u)(t)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n;
        var r = function (e, t) {
            return '\n  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="' + e + '">\n    ' + t.join("") + "\n  </svg>\n"
        }, o = function (e, t) {
            return '\n<circle transform="translate(' + e + ' 0)" cx="0" cy="16" r="0"> \n  <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="' + t + 's"\n      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />\n</circle>\n'
        }, i = function (e, t) {
            return '\n<circle transform="' + e + '" cx="16" cy="3" r="0">\n  <animate attributeName="r" values="0;3;0;0" dur="1s" repeatCount="indefinite" begin="' + t + 's" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" calcMode="spline" />\n</circle>\n'
        }, a = function (e, t) {
            return '\n<path transform="translate(' + e + ')" d="M0 12 V20 H4 V12z"> \n  <animate attributeName="d" values="M0 12 V20 H4 V12z; M0 4 V28 H4 V4z; M0 12 V20 H4 V12z; M0 12 V20 H4 V12z" dur="1.2s" repeatCount="indefinite" begin="' + t + 's" keytimes="0;.2;.5;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.8 0.4 0.8" calcMode="spline"  />\n</path>\n'
        }, u = function (e) {
            return r(e, [o(8, 0), o(16, .3), o(24, .6)])
        }, c = function (e) {
            return r(e, [i("", 0), i("rotate(45 16 16)", .125), i("rotate(90 16 16)", .25), i("rotate(135 16 16)", .375), i("rotate(180 16 16)", .5), i("rotate(225 16 16)", .625), i("rotate(270 16 16)", .75), i("rotate(315 16 16)", .875), i("rotate(180 16 16)", .5)])
        }, s = function (e) {
            return r(e, [a(2, 0), a(8, .2), a(14, .4), a(20, .6), a(26, .8)])
        }
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = "\n.wechat--muisc{\n\twidth:32px;\n\theight: 32px;\n\tposition: fixed;\n\ttop:16px;\n\tright: 16px;\n\tz-index:999999;\n}\n.wechat--muisc svg{\n\ttransform:translateX(-14px);\n\t-webkit-transform:translateX(-14px);\n}\n.wechat--muisc .wm--playing path{\n\ttransform-box: fill-box;\n\ttransform-origin:center center;\n\tanimation:wechatmusic 5s linear 0s infinite normal;\n\t-webkit-transform-origin:center center;\n\t-webkit-animation:wechatmusic 5s linear 0s infinite normal;\n}\n.wechat--muisc .wm--pause{\n\tdisplay:none;\n}\n.wm--pause .wm--playing{\n\tdisplay:none;\n}\n.wm--pause .wm--pause{\n\tdisplay:block;\n}\n.wechat--muisc.wm--pause{\n\t-webkit-animation:none;\n\t        animation:none;\n}\n.wechat--muisc.wm--playing{\n\t-webkit-animation:wechatmusic 5s linear 0s infinite normal;\n\t        animation:wechatmusic 5s linear 0s infinite normal\n}\n@-webkit-keyframes wechatmusic{\n\tfrom{\n\t\t-webkit-transform:rotate(0);\n\t\t        transform:rotate(0);\n\t}\n\tto{\n\t\t-webkit-transform:rotate(-360deg);\n\t\t        transform:rotate(-360deg);\n\t}\n}\n@keyframes wechatmusic{\n\tfrom{\n\t\t-webkit-transform:rotate(0);\n\t\t        transform:rotate(0);\n\t}\n\tto{\n\t\t-webkit-transform:rotate(-360deg);\n\t\t        transform:rotate(-360deg);\n\t}\n}\n"
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? "#000" : arguments[1];
            e = e || s[0];
            var n = c("wm--playing", e.path1.replace("__FILL__", t)), r = c("wm--pause", e.path2.replace("__FILL__", t));
            return n + r
        }

        function i() {
            var e, t = arguments.length <= 0 || void 0 === arguments[0] ? 1 : arguments[0], n = u["default"].number(t) ? "id" : "name";
            s.forEach(function (r) {
                r[n] === t && (e = r)
            });
            var r = document.createElement("span");
            return r.className = "wechat--muisc", r.innerHTML = o(e), r
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = i;
        var a = n(1), u = r(a), c = function (e, t) {
            return '\n<svg class="' + e + '" width="36" height="36" viewBox="0 0 36 36">\n\t<g transform="scale(0.03125 0.03125)">\n\t\t' + t + "\n\t</g>\n</svg>\n"
        }, s = [{
            id: 1,
            name: "default",
            path1: '<path fill="__FILL__" d="M512.5 148q-91.5 0-174.5 35.5t-143 95.5-95.5 143-35.5 174.5 35.5 174.5 95.5 143 143 95.5 174.5 35.5 174.5-35.5 143-95.5 95.5-143 35.5-174.5-35.5-174.5-95.5-143-143-95.5-174.5-35.5zM737.5 537.5q-2.5 13.5-8 21.5t-9.5 7.5-7.5-5.5-4.5-19q-3-23-15-33.5t-36-15.5q-26-5-45.5-21t-32.5-30q-13-12-20-8-6 3-6 15l1 67v246q0 4-7 28-4 17-17.5 32t-36 26-55.5 13q-34 1-61-12.5t-42-35-14.5-46.5 21.5-47 45.5-30.5 47.5-9.5 41 3q5 1 15.5 2.5t13.5 3.5v-320q0-16 7-24 8-11 23-13 12-2 19.5 5t15.5 19q8 11 19.5 26.5t31.5 29.5q18 13 30 19t24 11q11 5 22 12t24 22q14 16 16.5 32t0 29.5z"></path>',
            path2: '<path fill="__FILL__" d="M554 693v69q0 4-7 28-4 17-17.5 32t-36 26-55.5 13q-34 1-61-12.5t-42-35-14.5-46.5 21.5-47 45.5-30.5 47.5-9.5 41 3q5 1 15.5 2.5t13.5 3.5v-60l-285-373q-73 63-114.5 151.5t-41.5 188.5q0 92 35.5 175t95.5 143 143 95.5 174 35.5q138 0 252-77zM512 148q-128 0-236 67l229 299v-145q0-16 7-24 8-11 23-13 12-2 19.5 5t15.5 19q8 11 19.5 26.5t31.5 29.5q18 13 30 19t24 11q11 5 22 12t24 22q14 16 16.5 32t0 29.5-8 22-9.5 7.5-7.5-6-4.5-19q-3-23-15-33.5t-36-15.5q-26-5-45.5-21t-32.5-30q-13-12-20-8-6 3-6 15l1 67v63l264 345q67-63 105-147.5t38-180.5q0-91-35.5-174t-95.5-143-143-95.5-175-35.5z"></path>'
        }, {
            id: 2,
            name: "empty",
            path1: '<path fill="__FILL__" d="M512 1043q-91 0-174-35t-143-95-95.5-143-35.5-174 35.5-174 95.5-143 143-95.5 174-35.5 173.5 35.5 142.5 95.5 95.5 143 35.5 174-35.5 174-95.5 143-142.5 95-173.5 35zM511.5 204q-106.5 0-196.5 52.5t-142.5 142.5-52.5 196.5 52.5 197 142.5 142.5 196.5 52 196.5-52 142.5-142.5 52.5-197-52.5-196.5-142.5-142.5-196.5-52.5zM582 386v322h-1q3 42-32 79.5t-91 52.5q-62 16-115-5t-66-67 22-90 98-60q72-19 129 10v-298q0-6 4-10t10-4h28q4 0 8 3 26 1 61 25 39 26 66.5 36.5t36.5 8.5l9-3v56q-2 1-7.5 1.5t-22.5-0.5-35-6-46-18-56-33zM418 665q-36 10-61 37t-18 53q7 27 42.5 39t69.5-1q31-12 53-36t22-49v0q-1-27-36.5-40t-71.5-3z"></path>',
            path2: '<path fill="__FILL__" d="M512 64q185 0 316.5 131.5t131.5 316.5-131.5 316.5-316.5 131.5-316.5-131.5-131.5-316.5 131.5-316.5 316.5-131.5zM512 0q-139 0-257 68.5t-186.5 186.5-68.5 257 68.5 257 186.5 186.5 257 68.5 257-68.5 186.5-186.5 68.5-257-68.5-257-186.5-186.5-257-68.5zM537 349q0-11 7.5-14.5t21.5 9.5q14 15 36 33 22 17 50 23 27 5 40 16.5t16 36.5q2 15 5.5 20.5t8 6.5 10.5-9q6-9 9-23 3-15 0-32.5t-18-34.5q-14-17-26-24.5t-24-12.5q-5-2-14.5-6t-12.5-6q-14-6-33-21-22-15-35-32t-22-29q-8-13-16.5-20.5t-22.5-5.5q-15 2-24.5 13.5t-9.5 30.5v16l-1 159-159-159-40 40 199 199v91q-10-3-29.5-7.5t-45-3.5-52.5 10-50 33.5-23.5 52 16 50.5 46.5 38 67 13 61.5-13.5 39-28 20-35 4.5-34.5v-112l165 164 39-39-203-204v-149z"></path>'
        }, {
            id: 3,
            name: "full",
            path1: '<path fill="__FILL__" d="M512 5q103 0 197 40t162 108 108 162 40 197-40 197-108 162-162 108-197 40-197-40-162-108-108-162-40-197 40-197 108-162 162-108 197-40zM711 242l-328 1q-14 2-23 13.5t-9 26.5v63h-1v291q-21-22-49-22-35 0-60 25t-25 60q0 34 24.5 58t60.5 24q33 0 56-22t26-58h1v-274l338 1v170q-16-18-48-18-35 0-60.5 24.5t-25.5 59 25.5 59.5 60.5 25q34 0 57.5-24.5t23.5-59.5v-383q0-18-13.5-29t-30.5-11zM722 395h-337v-82q0-3 3-4h330l1-1q1 0 2 1t1 3v83z"></path>',
            path2: '<path fill="__FILL__" d="M863 819l-132-133q8-15 8-33v-348q0-17-12-29.5t-30-12.5h-291q-18 0-30 12.5t-12 29.5v14l-157-156q132-116 307-116 95 0 181 37t148 99 99 148 37 181q0 175-116 307zM707 371v216q-21-14-45-14-19 0-36 9l-206-207zM364 399v221q-20-14-45-14-32 0-54.5 22.5t-22.5 55 22.5 55 54.5 22.5 54.5-22 22.5-53h1v-254l192 193q-5 12-5 26 0 32 23 54.5t55 22.5q13 0 26-5l135 136q-62 56-141.5 87t-167.5 31q-95 0-181-37t-148-99-99-148-37-181q0-88 31-167.5t87-141.5z"></path>'
        }]
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            function t(e) {
                e = e.toLowerCase();
                var t = "V_SUBS_" + e;
                if (!/[\?&]from=/.test(location.href)) {
                    var n = Math.round(Date.now() / 1e3);
                    return u.set(t, n), n
                }
                return u.get(t) || !1
            }

            function n(t) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1], r = arguments.length <= 2 || void 0 === arguments[2] || arguments[2], o = c.createElement("div");
                o.className = "v-js-share-layer";
                var i = {position: "fixed", top: 0, left: 0, right: 0, bottom: 0, display: "none", zIndex: 9999};
                n && (i.backgroundColor = "rgba(0,0,0," + n + ")"), a(o, i);
                var u = new Image, s = {width: "100%"};
                r && (s.height = "100%"), a(u, s), u.src = t || "layer.png", o.appendChild(u), e.$(function () {
                    return c.body.appendChild(o)
                });
                var l = function () {
                    return o.style.display = "block"
                }, f = function () {
                    return o.style.display = "none"
                };
                o.addEventListener("click", f);
                var d = function () {
                    return o.parentNode.removeChild(o)
                };
                return {open: l, close: f, destory: d, div: o, img: u}
            }

            function r(e, t) {
                e = "V_TIME_" + e, t = t || 3;
                var n = function () {
                    var e = new Date;
                    return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
                }, r = function () {
                    var r = u.get(e);
                    return r && r.day === n() ? r.num : o(t)
                }, o = function (t) {
                    return u.set(e, {day: n(), num: t, update: Date.now()}), t
                }, i = function () {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? 1 : arguments[0];
                    return o(r() - e)
                }, a = function () {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? 1 : arguments[0];
                    return o(r() + e)
                };
                return {read: r, minus: i, plus: a}
            }

            function o(e) {
                return e.el = "body", new Vue(e)
            }

            function i() {
                if (s)return !1;
                s = !0;
                var e = document.createElement("script");
                e.src = "//wx.diggid.cn/static/debug/eruda.min.js", document.body.appendChild(e), e.onload = function () {
                    eruda.init()
                }
            }

            e.subscribe = t, e.shareLayerControl = n, e.dayTimeControl = r, e.vue = o, e.debug = i;
            var a = e.style, u = e.store, c = document, s = !1
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = r
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(1), i = r(o), a = n(2), u = r(a), c = n(6), s = r(c), l = n(4), f = n(3), d = {};
        d.choose = function () {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? 1 : arguments[0], t = arguments.length <= 1 || void 0 === arguments[1] || arguments[1], n = arguments.length <= 2 || void 0 === arguments[2] ? ["album", "camera"] : arguments[2];
            i["default"].string(n) && (n = n.split(","));
            var r = t ? ["compressed"] : ["original"];
            return new f.Promise(function (t, o) {
                var i = {
                    count: e, sizeType: r, sourceType: n, success: function (e) {
                        return t(e.localIds)
                    }, cancel: function (e) {
                        return o(e, "cancel")
                    }, fail: function (e) {
                        return o(e, "fail")
                    }
                };
                u["default"]._apply("chooseImage", [i], d)
            })
        }, d.upload = function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
            return i["default"].string(e) && (e = e.split(",")), new f.Promise(function (n, r) {
                e.length < 1 && r("没有需要上传的图片");
                var o = [], i = e.map(function (e) {
                    return {
                        localId: e, isShowProgressTips: t, success: function (e) {
                            return s(e.serverId)
                        }, error: function () {
                            return s(!1)
                        }, fail: function () {
                            return s(!1)
                        }
                    }
                }), a = 0, c = i.length, s = function (e) {
                    e && o.push(e), a >= c - 1 ? n(o) : a < c - 1 && (a += 1, l())
                }, l = function () {
                    return u["default"]._apply("uploadImage", [i[a]], d)
                };
                l()
            })
        }, d.save = function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? l.UPLOAD_APP : arguments[1];
            i["default"].array(e) && (e = e.join(","));
            var n = u["default"].wechat || "", r = l.SAVEIMAGE_URL;
            return n !== l.DEFAULT_WECHAT && n || (r = "http://i.diggid.cn/api/v1/media"), s["default"].get(r, {
                params: {
                    medias: e,
                    app: t,
                    wechat: n,
                    type: "image"
                }
            }).then(function (e) {
                return f.Promise.resolve(e.data)
            })
        }, d.download = function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
            i["default"].string(e) && (e = e.split(","));
            var n = e.map(function (e) {
                return new f.Promise(function (n, r) {
                    var o = {
                        serverId: e, isShowProgressTips: t ? 1 : 0, success: function (e) {
                            return n(e.localId)
                        }, cancel: function (e) {
                            return r(e, "cancel")
                        }, fail: function (e) {
                            return r(e, "fail")
                        }
                    };
                    u["default"]._apply("downloadImage", [o], d)
                })
            });
            return f.Promise.all(n)
        }, t["default"] = d
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? "wgs84" : arguments[0];
            return new f.Promise(function (t, n) {
                return l["default"]._call("getLocation", {
                    type: e, success: function (e) {
                        return t(e)
                    }, fail: function (e) {
                        return n(e, "fail")
                    }, cancel: function (e) {
                        return n(e, "cancel")
                    }
                })
            })
        }

        function i(e) {
            l["default"]._call("openLocation", e)
        }

        function a() {
            return new f.Promise(function (e, t) {
                return l["default"]._call("getNetworkType", {
                    success: function (t) {
                        return e(t.networkType)
                    }, fail: function (e) {
                        return t(e, "fail")
                    }, cancel: function (e) {
                        return t(e, "cancel")
                    }
                })
            })
        }

        function u() {
            var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0], t = arguments.length <= 1 || void 0 === arguments[1] ? ["qrCode", "barCode"] : arguments[1];
            return new f.Promise(function (n, r) {
                return l["default"]._call("scanQRCode", {
                    scanType: t, needResult: e ? 1 : 0, success: function (e) {
                        return n(e.resultStr)
                    }, fail: function (e) {
                        return r(e, "fail")
                    }, cancel: function (e) {
                        return r(e, "cancel")
                    }
                })
            })
        }

        function c(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1];
            l["default"]._call("openProductSpecificView", {productId: e, viewType: t})
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.getLocation = o, t.openLocation = i, t.getNetworkType = a, t.scanQRCode = u, t.openProductSpecificView = c;
        var s = n(2), l = r(s), f = n(3)
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o() {
        }

        function i() {
            m = !0, u["default"]._call("onVoiceRecordEnd", {
                complete: function (e) {
                    return p._successCb(e.localId)
                }, fail: function (e) {
                    return p._errorCb(e)
                }, cancel: function (e) {
                    return p._errorCb(e)
                }
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n(2), u = r(a), c = n(1), s = r(c), l = 0, f = 1, d = 2, p = {
            _successCb: o,
            _errorCb: o
        }, h = l, m = !1, y = null;
        p.start = function (e) {
            return m || i(), null !== y && clearTimeout(y), h === f && p.stop(), h = f, u["default"]._call("startRecord"), s["default"].number(e) && e > 0 && (y = setTimeout(p.stop, 1e3 * (e > 60 ? 60 : e))), p
        }, p.stop = function () {
            return h = d, u["default"]._call("stopRecord", {
                success: function (e) {
                    return p._successCb(e.localId)
                }, fail: function (e) {
                    return p._errorCb(e)
                }, cancel: function (e) {
                    return p._errorCb(e)
                }
            }), p
        }, p.success = function (e) {
            return p._successCb = e, p
        }, p.error = function (e) {
            return p._errorCb = e, p
        }, t["default"] = p
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o() {
            var e = (0, a.queryMetas)("config", {api: "share", url: "", wechat: i.DEFAULT_WECHAT, debug: !1});
            e && (0, c["default"])(e);
            var t = (0, a.queryMetas)("share", h);
            t && (0, f["default"])(t, "*"), i.SHARE_TYPES.forEach(function (e) {
                return (0, f["default"])((0, a.queryMetas)(e, h), e)
            });
            var n = (0, a.queryMetas)("music", {src: "music.mp3", attrs: "", skin: ""});
            if (n) {
                var r = {};
                if (n.attrs)try {
                    r = new Function("return " + n.attrs)()
                } catch (o) {
                    console.warn("meta music attrs error,attrs must be a json string")
                }
                p["default"].music(n.src, r, n.skin)
            }
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = o;
        var i = n(4), a = n(5), u = (n(12), n(2)), c = r(u), s = n(9), l = (r(s), n(10)), f = r(l), d = n(8), p = r(d), h = {
            title: "",
            imgUrl: "",
            "img-url": "",
            imgurl: "",
            img_url: "",
            desc: "",
            link: "",
            type: "",
            dataUrl: "",
            dataurl: "",
            data_url: "",
            "data-url": ""
        }
    }, function (e, t) {
        "use strict";
        function n(e) {
            if (null === e || void 0 === e)throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e)
        }

        function r() {
            try {
                if (!Object.assign)return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0])return !1;
                for (var t = {}, n = 0; n < 10; n++)t["_" + String.fromCharCode(n)] = n;
                var r = Object.getOwnPropertyNames(t).map(function (e) {
                    return t[e]
                });
                if ("0123456789" !== r.join(""))return !1;
                var o = {};
                return "abcdefghijklmnopqrst".split("").forEach(function (e) {
                    o[e] = e
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
            } catch (i) {
                return !1
            }
        }

        var o = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
        e.exports = r() ? Object.assign : Object.assign = function (e, t) {
                for (var r, a, u = n(e), c = 1; c < arguments.length; c++) {
                    r = Object(arguments[c]);
                    for (var s in r)o.call(r, s) && (u[s] = r[s]);
                    if (Object.getOwnPropertySymbols) {
                        a = Object.getOwnPropertySymbols(r);
                        for (var l = 0; l < a.length; l++)i.call(r, a[l]) && (u[a[l]] = r[a[l]])
                    }
                }
                return u
            }
    }, function (e, t) {
        "use strict";
        function n(e) {
            for (var t, n = [], c = e.length, s = 0, l = r, f = ""; s < c;)switch (t = e[s], s += 1, t) {
                case"/":
                    if (l === i) f && (n.push(f), f = ""); else if (l === o)continue;
                    l = o;
                    break;
                case".":
                    l === o ? l = a : l === a ? (l = u, n.pop()) : l === u ? l = a : l === i && (f += t);
                    break;
                default:
                    f += t, l = i
            }
            return l !== o && n.push(f), "/" + n.join("/")
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t.simplifyPath = n;
        var r = 0, o = 1, i = 2, a = 3, u = 4
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = navigator.userAgent.toLowerCase(), r = navigator.platform.toLowerCase(), o = {
            mobile: !(!r.match("mac") && !r.match("win")),
            ios: -1 !== n.indexOf("iphone") || -1 !== n.indexOf("ipad"),
            android: -1 !== n.indexOf("android"),
            wechat: -1 !== n.indexOf("micromessenger"),
            version: function () {
                var e = n.match(/micromessenger\/(\d+\.\d+\.\d+)/) || n.match(/micromessenger\/(\d+\.\d+)/);
                return e ? e[1] : ""
            }(),
            debuger: n.indexOf("wxdebugger")
        };
        t["default"] = o
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        var o = n(1), i = r(o), a = n(11), u = r(a), c = {
            duration: 1e3,
            delay: 0,
            loop: !1,
            autoplay: !0,
            direction: "normal",
            easing: "easeOutElastic",
            elasticity: 400,
            round: !1,
            begin: void 0,
            update: void 0,
            complete: void 0
        }, s = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skewX", "skewY"], l = function (e) {
            return i["default"].string(e) ? e : e + ""
        }, f = function (e) {
            return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }, d = function (e) {
            if (i["default"].color(e))return !1;
            try {
                var t = document.querySelectorAll(e);
                return t
            } catch (n) {
                return !1
            }
        }, p = function (e, t) {
            return Math.floor(Math.random() * (t - e + 1)) + e
        }, h = function Z(e) {
            return e.reduce(function (e, t) {
                return e.concat(i["default"].array(t) ? Z(t) : t)
            }, [])
        }, m = function (e) {
            return i["default"].array(e) ? e : (i["default"].string(e) && (e = d(e) || e), i["default"].html(e) ? [].slice.call(e) : [e])
        }, y = function (e, t) {
            return e.some(function (e) {
                return e === t
            })
        }, v = function (e, t) {
            var n = {};
            return e.forEach(function (e) {
                var r = JSON.stringify(t.map(function (t) {
                    return e[t]
                }));
                n[r] = n[r] || [], n[r].push(e)
            }), Object.keys(n).map(function (e) {
                return n[e]
            })
        }, g = function (e) {
            return e.filter(function (e, t, n) {
                return n.indexOf(e) === t
            })
        }, b = function (e) {
            var t = {};
            for (var n in e)t[n] = e[n];
            return t
        }, w = function (e, t) {
            for (var n in t)e[n] = i["default"].undef(e[n]) ? t[n] : e[n];
            return e
        }, _ = function (e) {
            var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, e = e.replace(t, function (e, t, n, r) {
                return t + t + n + n + r + r
            }), n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e), r = parseInt(n[1], 16), o = parseInt(n[2], 16), i = parseInt(n[3], 16);
            return "rgb(" + r + "," + o + "," + i + ")"
        }, x = function (e) {
            var t, n, r, e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e), o = parseInt(e[1]) / 360, i = parseInt(e[2]) / 100, a = parseInt(e[3]) / 100, u = function (e, t, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            };
            if (0 == i) t = n = r = a; else {
                var c = a < .5 ? a * (1 + i) : a + i - a * i, s = 2 * a - c;
                t = u(s, c, o + 1 / 3), n = u(s, c, o), r = u(s, c, o - 1 / 3)
            }
            return "rgb(" + 255 * t + "," + 255 * n + "," + 255 * r + ")"
        }, S = function (e) {
            return i["default"].rgb(e) || i["default"].rgba(e) ? e : i["default"].hex(e) ? _(e) : i["default"].hsl(e) ? x(e) : void 0
        }, O = function (e) {
            return /([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(e)[2]
        }, A = function (e, t, n) {
            return O(t) ? t : e.indexOf("translate") > -1 ? O(n) ? t + O(n) : t + "px" : e.indexOf("rotate") > -1 || e.indexOf("skew") > -1 ? t + "deg" : t
        }, M = function (e, t) {
            return (i["default"].node(e) || i["default"].svg(e)) && y(s, t) ? "transform" : (i["default"].node(e) || i["default"].svg(e)) && "transform" !== t && E(e, t) ? "css" : (i["default"].node(e) || i["default"].svg(e)) && (e.getAttribute(t) || i["default"].svg(e) && e[t]) ? "attribute" : i["default"]["null"](e[t]) || i["default"].undef(e[t]) ? void 0 : "object";
        }, E = function (e, t) {
            if (t in e.style)return getComputedStyle(e).getPropertyValue(f(t)) || "0"
        }, T = function (e, t) {
            var n = t.indexOf("scale") > -1 ? 1 : 0, r = e.style.transform;
            if (!r)return n;
            for (var o = /(\w+)\((.+?)\)/g, i = [], a = [], u = []; i = o.exec(r);)a.push(i[1]), u.push(i[2]);
            var c = u.filter(function (e, n) {
                return a[n] === t
            });
            return c.length ? c[0] : n
        }, P = function (e, t) {
            switch (M(e, t)) {
                case"transform":
                    return T(e, t);
                case"css":
                    return E(e, t);
                case"attribute":
                    return e.getAttribute(t)
            }
            return e[t] || 0
        }, I = function (e, t, n) {
            if (i["default"].color(t))return S(t);
            if (O(t))return t;
            var r = O(O(e.to) ? e.to : e.from);
            return !r && n && (r = O(n)), r ? t + r : t
        }, C = function (e) {
            var t = /-?\d*\.?\d+/g;
            return {original: e, numbers: l(e).match(t) ? l(e).match(t).map(Number) : [0], strings: l(e).split(t)}
        }, k = function (e, t, n) {
            return t.reduce(function (t, r, o) {
                var r = r ? r : n[o - 1];
                return t + e[o - 1] + r
            })
        }, j = function (e) {
            var e = e ? h(i["default"].array(e) ? e.map(m) : m(e)) : [];
            return e.map(function (e, t) {
                return {target: e, id: t}
            })
        }, L = function (e, t) {
            var n = [];
            for (var r in e)if (!c.hasOwnProperty(r) && "targets" !== r) {
                var o = i["default"].object(e[r]) ? b(e[r]) : {value: e[r]};
                o.name = r, n.push(w(o, t))
            }
            return n
        }, q = function (e, t, n, r) {
            var o = m(i["default"].func(n) ? n(e, r) : n);
            return {from: o.length > 1 ? o[0] : P(e, t), to: o.length > 1 ? o[1] : o[0]}
        }, R = function (e, t, n, r) {
            var o = {};
            if ("transform" === n) o.from = e + "(" + A(e, t.from, t.to) + ")", o.to = e + "(" + A(e, t.to) + ")"; else {
                var i = "css" === n ? E(r, e) : void 0;
                o.from = I(t, t.from, i), o.to = I(t, t.to, i)
            }
            return {from: C(o.from), to: C(o.to)}
        }, N = function (e, t) {
            var n = [];
            return e.forEach(function (r, o) {
                var a = r.target;
                return t.forEach(function (t) {
                    var u = M(a, t.name);
                    if (u) {
                        var c = q(a, t.name, t.value, o), s = b(t);
                        s.animatables = r, s.type = u, s.from = R(t.name, c, s.type, a).from, s.to = R(t.name, c, s.type, a).to, s.round = i["default"].color(c.from) || s.round ? 1 : 0, s.delay = (i["default"].func(s.delay) ? s.delay(a, o, e.length) : s.delay) / Q.speed, s.duration = (i["default"].func(s.duration) ? s.duration(a, o, e.length) : s.duration) / Q.speed, n.push(s)
                    }
                })
            }), n
        }, V = function (e, t) {
            var n = N(e, t), r = v(n, ["name", "from", "to", "delay", "duration"]);
            return r.map(function (e) {
                var t = b(e[0]);
                return t.animatables = e.map(function (e) {
                    return e.animatables
                }), t.totalDuration = t.delay + t.duration, t
            })
        }, U = function (e, t) {
            e.tweens.forEach(function (n) {
                var r = n.to, o = n.from, i = e.duration - (n.delay + n.duration);
                n.from = r, n.to = o, t && (n.delay = i)
            }), e.reversed = !e.reversed
        }, D = function (e) {
            var t = [], n = [];
            return e.tweens.forEach(function (e) {
                "css" !== e.type && "transform" !== e.type || (t.push("css" === e.type ? f(e.name) : "transform"), e.animatables.forEach(function (e) {
                    n.push(e.target)
                }))
            }), {properties: g(t).join(", "), elements: g(n)}
        }, B = function (e) {
            var t = D(e);
            t.elements.forEach(function (e) {
                e.style.willChange = t.properties
            })
        }, H = function (e) {
            var t = D(e);
            t.elements.forEach(function (e) {
                e.style.removeProperty("will-change")
            })
        }, F = function (e) {
            var t = i["default"].string(e) ? d(e)[0] : e;
            return {path: t, value: t.getTotalLength()}
        }, z = function (e, t) {
            var n = e.path, r = e.value * t, o = function (o) {
                var i = o || 0, a = t > 1 ? e.value + i : r + i;
                return n.getPointAtLength(a)
            }, i = o(), a = o(-1), u = o(1);
            switch (e.name) {
                case"translateX":
                    return i.x;
                case"translateY":
                    return i.y;
                case"rotate":
                    return 180 * Math.atan2(u.y - a.y, u.x - a.x) / Math.PI
            }
        }, W = function (e, t) {
            var n = Math.min(Math.max(t - e.delay, 0), e.duration), r = n / e.duration, o = e.to.numbers.map(function (t, n) {
                var o = e.from.numbers[n], i = u["default"][e.easing](r, e.elasticity), a = e.path ? z(e, i) : o + i * (t - o);
                return a = e.round ? Math.round(a * e.round) / e.round : a
            });
            return k(o, e.to.strings, e.from.strings)
        }, $ = function (e, t) {
            var n = void 0;
            if (e.time = Math.min(t, e.duration), e.progress = e.time / e.duration * 100, e.tweens.forEach(function (e) {
                    e.currentValue = W(e, t);
                    var r = e.currentValue;
                    e.animatables.forEach(function (t) {
                        var o = t.id;
                        switch (e.type) {
                            case"css":
                                t.target.style[e.name] = r;
                                break;
                            case"attribute":
                                t.target.setAttribute(e.name, r);
                                break;
                            case"object":
                                t.target[e.name] = r;
                                break;
                            case"transform":
                                n || (n = {}), n[o] || (n[o] = []), n[o].push(r)
                        }
                    })
                }), n)for (var r in n)e.animatables[r].target.style.transform = n[r].join(" ");
            e.settings.update && e.settings.update(e)
        }, J = function (e) {
            var t = {};
            return t.animatables = j(e.targets), t.settings = w(e, c), t.properties = L(e, t.settings), t.tweens = V(t.animatables, t.properties), t.duration = t.tweens.length ? Math.max.apply(Math, t.tweens.map(function (e) {
                    return e.totalDuration
                })) : e.duration / Q.speed, t.time = 0, t.progress = 0, t.running = !1, t.ended = !1, t
        }, X = [], Q = function (e) {
            var t = J(e), n = {};
            return n.tick = function () {
                if (t.running) {
                    t.ended = !1, n.now = +new Date, n.current = n.last + n.now - n.start, $(t, n.current);
                    var e = t.settings;
                    e.begin && n.current >= e.delay && (e.begin(t), e.begin = void 0), n.current >= t.duration ? (e.loop ? (n.start = +new Date, "alternate" === e.direction && U(t, !0), i["default"].number(e.loop) && e.loop--, n.raf = requestAnimationFrame(n.tick)) : (t.ended = !0, e.complete && e.complete(t), t.pause()), n.last = 0) : n.raf = requestAnimationFrame(n.tick)
                }
            }, t.seek = function (e) {
                var n = e / 100 * t.duration;
                $(t, n)
            }, t.pause = function () {
                t.running = !1, cancelAnimationFrame(n.raf), H(t);
                var e = X.indexOf(t);
                e > -1 && X.splice(e, 1)
            }, t.play = function (e) {
                e && (t = w(J(w(e, t.settings)), t)), t.pause(), t.running = !0, n.start = +new Date, n.last = t.ended ? 0 : t.time;
                var r = t.settings;
                "reverse" === r.direction && U(t), "alternate" !== r.direction || r.loop || (r.loop = 1), B(t), X.push(t), n.raf = requestAnimationFrame(n.tick)
            }, t.restart = function () {
                t.reversed && U(t), t.pause(), t.seek(0), t.play()
            }, t.settings.autoplay && t.play(), t
        }, Y = function (e) {
            for (var t = h(i["default"].array(e) ? e.map(m) : m(e)), n = X.length - 1; n >= 0; n--)for (var r = X[n], o = r.tweens.length - 1; o >= 0; o--)for (var a = r.tweens[o], u = a.animatables.length - 1; u >= 0; u--)y(t, a.animatables[u].target) && (a.animatables.splice(u, 1), a.animatables.length || r.tweens.splice(o, 1), r.tweens.length || r.pause())
        };
        Q.speed = 1, Q.list = X, Q.remove = Y, Q.easings = u["default"], Q.getValue = P, Q.path = F, Q.random = p, e.exports = Q
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e) {
            e.layer = a["default"], e.http = l["default"], e.music = d["default"], e.store = h["default"], e.emitter = y["default"], e.qs = V["default"], e.svg = x["default"], e.shake = w["default"], e.lazyload = g["default"], e.t = c["default"], e.md5 = O["default"], e.$ = M["default"], e.ani = T["default"], e.style = I["default"], e.is = k["default"], e.ease = L["default"], e.os = R["default"]
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = o;
        var i = n(32), a = r(i), u = n(40), c = r(u), s = n(6), l = r(s), f = n(35), d = r(f), p = n(38), h = r(p), m = n(13), y = r(m), v = n(33), g = r(v), b = n(37), w = r(b), _ = n(18), x = r(_), S = n(34), O = r(S), A = n(31), M = r(A), E = n(29), T = r(E), P = n(39), I = r(P), C = n(1), k = r(C), j = n(11), L = r(j), q = n(28), R = r(q), N = n(36), V = r(N)
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            if (e && e.__esModule)return e;
            var t = {};
            if (null != e)for (var n in e)Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t["default"] = e, t
        }

        function o(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function i(e) {
            d.push.apply(this, e && e.nodeType ? [e] : "" + e === e ? f.querySelectorAll(e) : void 0)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }, u = n(1), c = o(u), s = n(5), l = r(s), f = document, d = [], p = "prototype", h = function y(e) {
            return /^f/.test("undefined" == typeof e ? "undefined" : a(e)) ? /c/.test(f.readyState) ? e() : y(f).on("DOMContentLoaded", e) : new i(e)
        };
        h.trim = function (e) {
            return e.replace(/^\s+|\s+$/g, "")
        }, h.each = function (e, t) {
            var n = 0;
            if (c["default"].array(e))for (var r = e.length; n < r; ++n)t.call(e[n], n, e[n]); else for (n in e)e.hasOwnProperty(n) && t.call(e[n], n, e[n])
        }, h.stop = function (e) {
            return e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }, h[p] = i[p] = h.fn = i.fn = {
            length: 0, on: function (e, t) {
                return this.each(function (n) {
                    n.addEventListener(e, t)
                })
            }, off: function (e, t) {
                return this.each(function (n) {
                    n.removeEventListener(e, t)
                })
            }, eq: function () {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0];
                return this[e]
            }, each: function (e, t) {
                return d.forEach.call(this, e, t), this
            }, hasClass: function (e) {
                return !!this[0] && l.hasClass(this.eq(), e)
            }, hide: function () {
                return this.each(function (e) {
                    return e.style.display = "none"
                })
            }, show: function () {
                return this.each(function (e) {
                    return e.style.display = ""
                })
            }, attr: function (e, t) {
                return 1 === arguments.length ? this.eq().getAttribute(e) : this.each(function (n) {
                        return n.setAttribute(e, t)
                    })
            }, removeAttr: function (e) {
                this.each(function (t) {
                    return t.removeAttribute(e)
                })
            }, hasAttr: function (e) {
                return this.eq().hasAttributes(e)
            }, before: function (e) {
                return this.each(function (t) {
                    return t.insertAdjacentHTML("beforebegin", e)
                })
            }, after: function (e) {
                return this.each(function (t) {
                    return t.insertAdjacentHTML("afterend", e)
                })
            }, css: function (e, t) {
                var n = this;
                return c["default"].object(e) ? void h.each(e, function (e, t) {
                        return n.each(function (n) {
                            return n.style[e] = t
                        })
                    }) : 1 === arguments.length ? this[0].style[e] : this.each(function (n) {
                            return n.style[e] = t
                        })
            }, first: function () {
                return h(this[0])
            }, last: function () {
                return h(this[this.length - 1])
            }, get: function (e) {
                return h(this[e])
            }, text: function (e) {
                return arguments.length > 0 ? this.each(function (t) {
                        return t.textContent = e
                    }) : this.eq(0).textContent
            }, html: function (e) {
                return arguments.length > 0 ? this.each(function (t) {
                        return t.innerHTML = e
                    }) : this.eq(0).innerHTML
            }, parent: function () {
                return this[0] ? h(this[0].parentNode) : []
            }, remove: function () {
                return this.each(function (e) {
                    return e.parentNode.removeChild(e)
                })
            }, trigger: function (e) {
                if (document.createEvent) {
                    var t = document.createEvent("HTMLEvents");
                    t.initEvent(e, !0, !1), this.each(function (e) {
                        return e.dispatchEvent(t)
                    })
                } else this.each(function (t) {
                    return t.fireEvent("on" + e)
                })
            }, data: function (e, t) {
                return arguments.length > 1 ? this.attr("data-" + e, t) : this.attr("data-" + e)
            }, splice: d.splice
        };
        var m = ["addClass", "removeClass", "toggleClass"];
        m.forEach(function (e) {
            return h[p][e] = function (t) {
                this.each(function (n) {
                    return l[e](n, t)
                })
            }
        }), t["default"] = h
    }, function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }, r = document, o = "querySelectorAll", i = "getElementsByClassName", a = function (e) {
            return r[o](e)
        }, u = {type: 0, shade: !0, shadeClose: !0, fixed: !0, anim: !0}, c = {
            extend: function (e) {
                var t = JSON.parse(JSON.stringify(u));
                for (var n in e)t[n] = e[n];
                return t
            }, timer: {}, end: {}
        };
        c.touch = function (e, t) {
            var n;
            return /Android|iPhone|SymbianOS|Windows Phone|iPad|iPod/.test(navigator.userAgent) ? (e.addEventListener("touchmove", function () {
                    n = !0
                }, !1), void e.addEventListener("touchend", function (e) {
                    e.preventDefault(), n || t.call(this, e), n = !1
                }, !1)) : e.addEventListener("click", function (e) {
                    t.call(this, e)
                }, !1)
        };
        var s = 0, l = ["layermbox"], f = function (e) {
            var t = this;
            t.config = c.extend(e), t.view()
        };
        f.prototype.view = function () {
            var e = this, t = e.config, o = r.createElement("div");
            e.id = o.id = l[0] + s, o.setAttribute("class", l[0] + " " + l[0] + (t.type || 0)), o.setAttribute("index", s);
            var u = function () {
                var e = "object" === n(t.title);
                return t.title ? '<h3 style="' + (e ? t.title[1] : "") + '">' + (e ? t.title[0] : t.title) + '</h3><button class="layermend"></button>' : ""
            }(), c = function () {
                var e, n = (t.btn || []).length;
                return 0 !== n && t.btn ? (e = '<span type="1">' + t.btn[0] + "</span>", 2 === n && (e = '<span type="0">' + t.btn[1] + "</span>" + e), '<div class="layermbtn">' + e + "</div>") : ""
            }();
            if (t.fixed || (t.top = t.hasOwnProperty("top") ? t.top : 100, t.style = t.style || "", t.style += " top:" + (r.body.scrollTop + t.top) + "px"), 2 === t.type && (t.content = '<i></i><i class="laymloadtwo"></i><i></i><div class="laym-loading">' + (t.content || "") + "</div>"), o.innerHTML = (t.shade ? "<div " + ("string" == typeof t.shade ? 'style="' + t.shade + '"' : "") + ' class="laymshade"></div>' : "") + '<div class="layermmain" ' + (t.fixed ? "" : 'style="position:static;"') + '><div class="section"><div class="layermchild ' + (t.className ? t.className : "") + " " + (t.type || t.shade ? "" : "layermborder ") + (t.anim ? "layermanim" : "") + '" ' + (t.style ? 'style="' + t.style + '"' : "") + ">" + u + '<div class="layermcont">' + t.content + "</div>" + c + "</div></div></div>", !t.type || 2 === t.type) {
                var f = r[i](l[0] + t.type), d = f.length;
                d >= 1 && p.close(f[0].getAttribute("index"))
            }
            document.body.appendChild(o);
            var h = e.elem = a("#" + e.id)[0];
            t.success && t.success(h), e.index = s++, e.action(t, h)
        }, f.prototype.action = function (e, t) {
            var n = this;
            if (e.time && (c.timer[n.index] = setTimeout(function () {
                    p.close(n.index)
                }, 1e3 * e.time)), e.title) {
                var r = t[i]("layermend")[0], o = function () {
                    e.cancel && e.cancel(), p.close(n.index)
                };
                c.touch(r, o)
            }
            var a = function () {
                var t = this.getAttribute("type");
                0 == t ? (e.no && e.no(), p.close(n.index)) : e.yes ? e.yes(n.index) : p.close(n.index)
            };
            if (e.btn)for (var u = t[i]("layermbtn")[0].children, s = u.length, l = 0; l < s; l++)c.touch(u[l], a);
            if (e.shade && e.shadeClose) {
                var f = t[i]("laymshade")[0];
                c.touch(f, function () {
                    p.close(n.index, e.end)
                })
            }
            e.end && (c.end[n.index] = e.end)
        };
        var d = null, p = {
            v: "0.1", index: s, loading: function (e) {
                return d && p.close(d), d = p.open({type: 2, content: e})
            }, alert: function (e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? 3 : arguments[1];
                return p.open({content: e, time: t})
            }, open: function (e) {
                var t = new f(e || {});
                return t.index
            }, close: function (e) {
                var t = a("#" + l[0] + e)[0];
                return !!t && (t.innerHTML = "", r.body.removeChild(t), clearTimeout(c.timer[e]), delete c.timer[e], "function" == typeof c.end[e] && c.end[e](), void delete c.end[e])
            }, closeAll: function () {
                for (var e = r[i](l[0]), t = 0, n = e.length; t < n; t++)p.close(0 | e[0].getAttribute("index"))
            }
        };
        t["default"] = p
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(13), i = r(o);
        t["default"] = function () {
            function e() {
                return window.scrollY || window.pageYOffset
            }

            function t() {
                f = e(), n()
            }

            function n() {
                d || (requestAnimationFrame(function () {
                    return c()
                }), d = !0)
            }

            function r(e) {
                return e.getBoundingClientRect().top + f
            }

            function o(e) {
                var t = f, n = t + h, o = r(e), i = o + e.offsetHeight, a = m.threshold / 100 * h;
                return i >= t - a && o <= n + a
            }

            function a(e) {
                if (g.emit("src:before", e), y && e.hasAttribute(m.srcset)) e.setAttribute("srcset", e.getAttribute(m.srcset)); else {
                    var t = v > 1 && e.getAttribute(m.retina);
                    e.setAttribute("src", t || e.getAttribute(m.normal))
                }
                g.emit("src:after", e), [m.normal, m.retina, m.srcset].forEach(function (t) {
                    return e.removeAttribute(t)
                }), s()
            }

            function u(e) {
                var n = e ? "addEventListener" : "removeEventListener";
                return ["scroll", "resize"].forEach(function (e) {
                    return window[n](e, t)
                }), this
            }

            function c() {
                return h = window.innerHeight, p.forEach(function (e) {
                    return o(e) && a(e)
                }), d = !1, this
            }

            function s() {
                return p = Array.prototype.slice.call(document.querySelectorAll("[" + m.normal + "]")), this
            }

            var l = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], f = e(), d = void 0, p = void 0, h = void 0, m = {
                normal: l.normal || "data-normal",
                retina: l.retina || "data-retina",
                srcset: l.srcset || "data-srcset",
                threshold: l.threshold || 0
            }, y = document.body.classList.contains("srcset") || "srcset" in document.createElement("img"), v = window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI, g = (0, i["default"])({
                handlers: u,
                check: c,
                update: s
            });
            return g
        }
    }, function (e, t) {
        "use strict";
        function n(e, t) {
            var n = (65535 & e) + (65535 & t), r = (e >> 16) + (t >> 16) + (n >> 16);
            return r << 16 | 65535 & n
        }

        function r(e, t) {
            return e << t | e >>> 32 - t
        }

        function o(e, t, o, i, a, u) {
            return n(r(n(n(t, e), n(i, u)), a), o)
        }

        function i(e, t, n, r, i, a, u) {
            return o(t & n | ~t & r, e, t, i, a, u)
        }

        function a(e, t, n, r, i, a, u) {
            return o(t & r | n & ~r, e, t, i, a, u)
        }

        function u(e, t, n, r, i, a, u) {
            return o(t ^ n ^ r, e, t, i, a, u)
        }

        function c(e, t, n, r, i, a, u) {
            return o(n ^ (t | ~r), e, t, i, a, u)
        }

        function s(e, t) {
            e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
            var r, o, s, l, f, d = 1732584193, p = -271733879, h = -1732584194, m = 271733878;
            for (r = 0; r < e.length; r += 16)o = d, s = p, l = h, f = m, d = i(d, p, h, m, e[r], 7, -680876936), m = i(m, d, p, h, e[r + 1], 12, -389564586), h = i(h, m, d, p, e[r + 2], 17, 606105819), p = i(p, h, m, d, e[r + 3], 22, -1044525330), d = i(d, p, h, m, e[r + 4], 7, -176418897), m = i(m, d, p, h, e[r + 5], 12, 1200080426), h = i(h, m, d, p, e[r + 6], 17, -1473231341), p = i(p, h, m, d, e[r + 7], 22, -45705983), d = i(d, p, h, m, e[r + 8], 7, 1770035416), m = i(m, d, p, h, e[r + 9], 12, -1958414417), h = i(h, m, d, p, e[r + 10], 17, -42063), p = i(p, h, m, d, e[r + 11], 22, -1990404162), d = i(d, p, h, m, e[r + 12], 7, 1804603682), m = i(m, d, p, h, e[r + 13], 12, -40341101), h = i(h, m, d, p, e[r + 14], 17, -1502002290), p = i(p, h, m, d, e[r + 15], 22, 1236535329), d = a(d, p, h, m, e[r + 1], 5, -165796510), m = a(m, d, p, h, e[r + 6], 9, -1069501632), h = a(h, m, d, p, e[r + 11], 14, 643717713), p = a(p, h, m, d, e[r], 20, -373897302), d = a(d, p, h, m, e[r + 5], 5, -701558691), m = a(m, d, p, h, e[r + 10], 9, 38016083), h = a(h, m, d, p, e[r + 15], 14, -660478335), p = a(p, h, m, d, e[r + 4], 20, -405537848), d = a(d, p, h, m, e[r + 9], 5, 568446438), m = a(m, d, p, h, e[r + 14], 9, -1019803690), h = a(h, m, d, p, e[r + 3], 14, -187363961), p = a(p, h, m, d, e[r + 8], 20, 1163531501), d = a(d, p, h, m, e[r + 13], 5, -1444681467), m = a(m, d, p, h, e[r + 2], 9, -51403784), h = a(h, m, d, p, e[r + 7], 14, 1735328473), p = a(p, h, m, d, e[r + 12], 20, -1926607734), d = u(d, p, h, m, e[r + 5], 4, -378558), m = u(m, d, p, h, e[r + 8], 11, -2022574463), h = u(h, m, d, p, e[r + 11], 16, 1839030562), p = u(p, h, m, d, e[r + 14], 23, -35309556), d = u(d, p, h, m, e[r + 1], 4, -1530992060), m = u(m, d, p, h, e[r + 4], 11, 1272893353), h = u(h, m, d, p, e[r + 7], 16, -155497632), p = u(p, h, m, d, e[r + 10], 23, -1094730640), d = u(d, p, h, m, e[r + 13], 4, 681279174), m = u(m, d, p, h, e[r], 11, -358537222), h = u(h, m, d, p, e[r + 3], 16, -722521979), p = u(p, h, m, d, e[r + 6], 23, 76029189), d = u(d, p, h, m, e[r + 9], 4, -640364487), m = u(m, d, p, h, e[r + 12], 11, -421815835), h = u(h, m, d, p, e[r + 15], 16, 530742520), p = u(p, h, m, d, e[r + 2], 23, -995338651), d = c(d, p, h, m, e[r], 6, -198630844), m = c(m, d, p, h, e[r + 7], 10, 1126891415), h = c(h, m, d, p, e[r + 14], 15, -1416354905), p = c(p, h, m, d, e[r + 5], 21, -57434055), d = c(d, p, h, m, e[r + 12], 6, 1700485571), m = c(m, d, p, h, e[r + 3], 10, -1894986606), h = c(h, m, d, p, e[r + 10], 15, -1051523), p = c(p, h, m, d, e[r + 1], 21, -2054922799), d = c(d, p, h, m, e[r + 8], 6, 1873313359), m = c(m, d, p, h, e[r + 15], 10, -30611744), h = c(h, m, d, p, e[r + 6], 15, -1560198380), p = c(p, h, m, d, e[r + 13], 21, 1309151649), d = c(d, p, h, m, e[r + 4], 6, -145523070), m = c(m, d, p, h, e[r + 11], 10, -1120210379), h = c(h, m, d, p, e[r + 2], 15, 718787259), p = c(p, h, m, d, e[r + 9], 21, -343485551), d = n(d, o), p = n(p, s), h = n(h, l), m = n(m, f);
            return [d, p, h, m]
        }

        function l(e) {
            var t, n = "";
            for (t = 0; t < 32 * e.length; t += 8)n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }

        function f(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1)n[t] = 0;
            for (t = 0; t < 8 * e.length; t += 8)n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }

        function d(e) {
            return l(s(f(e), 8 * e.length))
        }

        function p(e, t) {
            var n, r, o = f(e), i = [], a = [];
            for (i[15] = a[15] = void 0, o.length > 16 && (o = s(o, 8 * e.length)), n = 0; n < 16; n += 1)i[n] = 909522486 ^ o[n], a[n] = 1549556828 ^ o[n];
            return r = s(i.concat(f(t)), 512 + 8 * t.length), l(s(a.concat(r), 640))
        }

        function h(e) {
            var t, n, r = "0123456789abcdef", o = "";
            for (n = 0; n < e.length; n += 1)t = e.charCodeAt(n), o += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
            return o
        }

        function m(e) {
            return unescape(encodeURIComponent(e))
        }

        function y(e) {
            return d(m(e))
        }

        function v(e) {
            return h(y(e))
        }

        function g(e, t) {
            return p(m(e), m(t))
        }

        function b(e, t) {
            return h(g(e, t))
        }

        function w(e, t, n) {
            return t ? n ? g(t, e) : b(t, e) : n ? y(e) : v(e)
        }

        e.exports = w
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e) {
            var t = document.createElement("audio");
            return t.style.display = "none", t.controls = !1, t.autoplay = !0, t.loop = !0, t.src = e || "music.mp3", t.autobuffer = !0, t
        }

        function i(e) {
            var t = this, n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], r = arguments.length <= 2 || void 0 === arguments[2] ? "default" : arguments[2], i = this.span = (0, s["default"])(r);
            this.style(n);
            var a = this.music = o(e);
            i.appendChild(a), (0, l.ready)(function () {
                return document.body.appendChild(i)
            }), i.addEventListener("click", function () {
                return t.toggle()
            }, !1)
        }

        function a(e, t) {
            return d.indexOf(e) !== -1 && "number" == typeof t && t ? t + "px" : t
        }

        function u(e, t, n) {
            return new i(e, t, n)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = u;
        var c = n(20), s = r(c), l = n(5), f = i.prototype;
        f.stop = function () {
            this.music.pause(), (0, l.addClass)(this.span, "wm--pause")
        }, f.hide = function () {
            var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
            this.span.style.display = e ? "none" : "block"
        }, f.toggle = function () {
            this.music.paused ? this.play() : this.stop()
        }, f.play = function () {
            var e = this.music;
            window.wx && window.wx.ready(function () {
                e.play()
            }), e.play(), (0, l.removeClass)(this.span, "wm--pause")
        }, f.volume = function (e) {
            return arguments.length ? void(this.music.volume = e) : this.music.volume
        }, f.style = function (e) {
            var t = this.span;
            e.color && [].slice.call(t.querySelectorAll("path")).forEach(function (t) {
                return t.setAttribute("fill", e.color)
            });
            var n = t.style;
            Object.keys(e).forEach(function (t) {
                return n[t] = a(t, e[t])
            })
        };
        var d = ["top", "left", "right", "bottom", "width", "height"]
    }, function (e, t, n) {
        var r, o, i, a, a, u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };
        !function (n) {
            if ("object" === u(t) && "undefined" != typeof e) e.exports = n(); else {
                o = [], r = n, i = "function" == typeof r ? r.apply(t, o) : r, !(void 0 !== i && (e.exports = i))
            }
        }(function () {
            return function e(t, n, r) {
                function o(u, c) {
                    if (!n[u]) {
                        if (!t[u]) {
                            var s = "function" == typeof a && a;
                            if (!c && s)return a(u, !0);
                            if (i)return i(u, !0);
                            var l = new Error("Cannot find module '" + u + "'");
                            throw l.code = "MODULE_NOT_FOUND", l
                        }
                        var f = n[u] = {exports: {}};
                        t[u][0].call(f.exports, function (e) {
                            var n = t[u][1][e];
                            return o(n ? n : e)
                        }, f, f.exports, e, t, n, r)
                    }
                    return n[u].exports
                }

                for (var i = "function" == typeof a && a, u = 0; u < r.length; u++)o(r[u]);
                return o
            }({
                1: [function (e, t, n) {
                    "use strict";
                    var r = String.prototype.replace, o = /%20/g;
                    t.exports = {
                        "default": "RFC3986", formatters: {
                            RFC1738: function (e) {
                                return r.call(e, o, "+")
                            }, RFC3986: function (e) {
                                return e
                            }
                        }, RFC1738: "RFC1738", RFC3986: "RFC3986"
                    }
                }, {}], 2: [function (e, t, n) {
                    "use strict";
                    var r = e("./stringify"), o = e("./parse"), i = e("./formats");
                    t.exports = {formats: i, parse: o, stringify: r}
                }, {"./formats": 1, "./parse": 3, "./stringify": 4}], 3: [function (e, t, n) {
                    "use strict";
                    var r = e("./utils"), o = Object.prototype.hasOwnProperty, i = {
                        allowDots: !1,
                        allowPrototypes: !1,
                        arrayLimit: 20,
                        decoder: r.decode,
                        delimiter: "&",
                        depth: 5,
                        parameterLimit: 1e3,
                        plainObjects: !1,
                        strictNullHandling: !1
                    }, a = function (e, t) {
                        for (var n = {}, r = e.split(t.delimiter, t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit), i = 0; i < r.length; ++i) {
                            var a, u, c = r[i], s = c.indexOf("]=") === -1 ? c.indexOf("=") : c.indexOf("]=") + 1;
                            s === -1 ? (a = t.decoder(c), u = t.strictNullHandling ? null : "") : (a = t.decoder(c.slice(0, s)), u = t.decoder(c.slice(s + 1))), o.call(n, a) ? n[a] = [].concat(n[a]).concat(u) : n[a] = u
                        }
                        return n
                    }, u = function (e, t, n) {
                        if (!e.length)return t;
                        var r, o = e.shift();
                        if ("[]" === o) r = [], r = r.concat(u(e, t, n)); else {
                            r = n.plainObjects ? Object.create(null) : {};
                            var i = "[" === o.charAt(0) && "]" === o.charAt(o.length - 1) ? o.slice(1, -1) : o, a = parseInt(i, 10);
                            !isNaN(a) && o !== i && String(a) === i && a >= 0 && n.parseArrays && a <= n.arrayLimit ? (r = [], r[a] = u(e, t, n)) : r[i] = u(e, t, n)
                        }
                        return r
                    }, c = function (e, t, n) {
                        if (e) {
                            var r = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, i = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, c = i.exec(r), s = c ? r.slice(0, c.index) : r, l = [];
                            if (s) {
                                if (!n.plainObjects && o.call(Object.prototype, s) && !n.allowPrototypes)return;
                                l.push(s)
                            }
                            for (var f = 0; null !== (c = a.exec(r)) && f < n.depth;) {
                                if (f += 1, !n.plainObjects && o.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)return;
                                l.push(c[1])
                            }
                            return c && l.push("[" + r.slice(c.index) + "]"), u(l, t, n)
                        }
                    };
                    t.exports = function (e, t) {
                        var n = t || {};
                        if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder)throw new TypeError("Decoder has to be a function.");
                        if (n.delimiter = "string" == typeof n.delimiter || r.isRegExp(n.delimiter) ? n.delimiter : i.delimiter, n.depth = "number" == typeof n.depth ? n.depth : i.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : i.arrayLimit, n.parseArrays = n.parseArrays !== !1, n.decoder = "function" == typeof n.decoder ? n.decoder : i.decoder, n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : i.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : i.plainObjects, n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : i.allowPrototypes, n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : i.parameterLimit, n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : i.strictNullHandling, "" === e || null === e || "undefined" == typeof e)return n.plainObjects ? Object.create(null) : {};
                        for (var o = "string" == typeof e ? a(e, n) : e, u = n.plainObjects ? Object.create(null) : {}, s = Object.keys(o), l = 0; l < s.length; ++l) {
                            var f = s[l], d = c(f, o[f], n);
                            u = r.merge(u, d, n)
                        }
                        return r.compact(u)
                    }
                }, {"./utils": 5}], 4: [function (e, t, n) {
                    "use strict";
                    var r = e("./utils"), o = e("./formats"), i = {
                        brackets: function (e) {
                            return e + "[]"
                        }, indices: function (e, t) {
                            return e + "[" + t + "]"
                        }, repeat: function (e) {
                            return e
                        }
                    }, a = Date.prototype.toISOString, c = {
                        delimiter: "&",
                        encode: !0,
                        encoder: r.encode,
                        encodeValuesOnly: !1,
                        serializeDate: function (e) {
                            return a.call(e)
                        },
                        skipNulls: !1,
                        strictNullHandling: !1
                    }, s = function l(e, t, n, o, i, a, u, c, s, f, d, p) {
                        var h = e;
                        if ("function" == typeof u) h = u(t, h); else if (h instanceof Date) h = f(h); else if (null === h) {
                            if (o)return a && !p ? a(t) : t;
                            h = ""
                        }
                        if ("string" == typeof h || "number" == typeof h || "boolean" == typeof h || r.isBuffer(h)) {
                            if (a) {
                                var m = p ? t : a(t);
                                return [d(m) + "=" + d(a(h))]
                            }
                            return [d(t) + "=" + d(String(h))]
                        }
                        var y = [];
                        if ("undefined" == typeof h)return y;
                        var v;
                        if (Array.isArray(u)) v = u; else {
                            var g = Object.keys(h);
                            v = c ? g.sort(c) : g
                        }
                        for (var b = 0; b < v.length; ++b) {
                            var w = v[b];
                            i && null === h[w] || (y = Array.isArray(h) ? y.concat(l(h[w], n(t, w), n, o, i, a, u, c, s, f, d, p)) : y.concat(l(h[w], t + (s ? "." + w : "[" + w + "]"), n, o, i, a, u, c, s, f, d, p)))
                        }
                        return y
                    };
                    t.exports = function (e, t) {
                        var n = e, r = t || {};
                        if (null !== r.encoder && void 0 !== r.encoder && "function" != typeof r.encoder)throw new TypeError("Encoder has to be a function.");
                        var a = "undefined" == typeof r.delimiter ? c.delimiter : r.delimiter, l = "boolean" == typeof r.strictNullHandling ? r.strictNullHandling : c.strictNullHandling, f = "boolean" == typeof r.skipNulls ? r.skipNulls : c.skipNulls, d = "boolean" == typeof r.encode ? r.encode : c.encode, p = "function" == typeof r.encoder ? r.encoder : c.encoder, h = "function" == typeof r.sort ? r.sort : null, m = "undefined" != typeof r.allowDots && r.allowDots, y = "function" == typeof r.serializeDate ? r.serializeDate : c.serializeDate, v = "boolean" == typeof r.encodeValuesOnly ? r.encodeValuesOnly : c.encodeValuesOnly;
                        if ("undefined" == typeof r.format) r.format = o["default"]; else if (!Object.prototype.hasOwnProperty.call(o.formatters, r.format))throw new TypeError("Unknown format option provided.");
                        var g, b, w = o.formatters[r.format];
                        "function" == typeof r.filter ? (b = r.filter, n = b("", n)) : Array.isArray(r.filter) && (b = r.filter, g = b);
                        var _ = [];
                        if ("object" !== ("undefined" == typeof n ? "undefined" : u(n)) || null === n)return "";
                        var x;
                        x = r.arrayFormat in i ? r.arrayFormat : "indices" in r ? r.indices ? "indices" : "repeat" : "indices";
                        var S = i[x];
                        g || (g = Object.keys(n)), h && g.sort(h);
                        for (var O = 0; O < g.length; ++O) {
                            var A = g[O];
                            f && null === n[A] || (_ = _.concat(s(n[A], A, S, l, f, d ? p : null, b, h, m, y, w, v)))
                        }
                        return _.join(a)
                    }
                }, {"./formats": 1, "./utils": 5}], 5: [function (e, t, n) {
                    "use strict";
                    var r = Object.prototype.hasOwnProperty, o = function () {
                        for (var e = [], t = 0; t < 256; ++t)e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                        return e
                    }();
                    n.arrayToObject = function (e, t) {
                        for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r)"undefined" != typeof e[r] && (n[r] = e[r]);
                        return n
                    }, n.merge = function (e, t, o) {
                        if (!t)return e;
                        if ("object" !== ("undefined" == typeof t ? "undefined" : u(t))) {
                            if (Array.isArray(e)) e.push(t); else {
                                if ("object" !== ("undefined" == typeof e ? "undefined" : u(e)))return [e, t];
                                (o.plainObjects || o.allowPrototypes || !r.call(Object.prototype, t)) && (e[t] = !0)
                            }
                            return e
                        }
                        if ("object" !== ("undefined" == typeof e ? "undefined" : u(e)))return [e].concat(t);
                        var i = e;
                        return Array.isArray(e) && !Array.isArray(t) && (i = n.arrayToObject(e, o)), Array.isArray(e) && Array.isArray(t) ? (t.forEach(function (t, i) {
                                r.call(e, i) ? e[i] && "object" === u(e[i]) ? e[i] = n.merge(e[i], t, o) : e.push(t) : e[i] = t
                            }), e) : Object.keys(t).reduce(function (e, i) {
                                var a = t[i];
                                return r.call(e, i) ? e[i] = n.merge(e[i], a, o) : e[i] = a, e
                            }, i)
                    }, n.decode = function (e) {
                        try {
                            return decodeURIComponent(e.replace(/\+/g, " "))
                        } catch (t) {
                            return e
                        }
                    }, n.encode = function (e) {
                        if (0 === e.length)return e;
                        for (var t = "string" == typeof e ? e : String(e), n = "", r = 0; r < t.length; ++r) {
                            var i = t.charCodeAt(r);
                            45 === i || 46 === i || 95 === i || 126 === i || i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122 ? n += t.charAt(r) : i < 128 ? n += o[i] : i < 2048 ? n += o[192 | i >> 6] + o[128 | 63 & i] : i < 55296 || i >= 57344 ? n += o[224 | i >> 12] + o[128 | i >> 6 & 63] + o[128 | 63 & i] : (r += 1, i = 65536 + ((1023 & i) << 10 | 1023 & t.charCodeAt(r)), n += o[240 | i >> 18] + o[128 | i >> 12 & 63] + o[128 | i >> 6 & 63] + o[128 | 63 & i])
                        }
                        return n
                    }, n.compact = function (e, t) {
                        if ("object" !== ("undefined" == typeof e ? "undefined" : u(e)) || null === e)return e;
                        var r = t || [], o = r.indexOf(e);
                        if (o !== -1)return r[o];
                        if (r.push(e), Array.isArray(e)) {
                            for (var i = [], a = 0; a < e.length; ++a)e[a] && "object" === u(e[a]) ? i.push(n.compact(e[a], r)) : "undefined" != typeof e[a] && i.push(e[a]);
                            return i
                        }
                        var c = Object.keys(e);
                        return c.forEach(function (t) {
                            e[t] = n.compact(e[t], r)
                        }), e
                    }, n.isRegExp = function (e) {
                        return "[object RegExp]" === Object.prototype.toString.call(e)
                    }, n.isBuffer = function (e) {
                        return null !== e && "undefined" != typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                    }
                }, {}]
            }, {}, [2])(2)
        })
    }, function (e, t) {
        "use strict";
        function n(e) {
            if (this.hasDeviceMotion = "ondevicemotion" in window, this.options = {
                    threshold: 15,
                    timeout: 1e3
                }, "object" === ("undefined" == typeof e ? "undefined" : o(e)))for (var t in e)e.hasOwnProperty(t) && (this.options[t] = e[t]);
            if (this.lastTime = new Date, this.lastX = null, this.lastY = null, this.lastZ = null, "function" == typeof document.CustomEvent) this.event = new document.CustomEvent("shake", {
                bubbles: !0,
                cancelable: !0
            }); else {
                if ("function" != typeof document.createEvent)return !1;
                this.event = document.createEvent("Event"), this.event.initEvent("shake", !0, !0)
            }
        }

        function r(e) {
            return new n(e)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            };
        t["default"] = r, n.prototype.reset = function () {
            this.lastTime = new Date, this.lastX = null, this.lastY = null, this.lastZ = null
        }, n.prototype.start = function () {
            this.reset(), this.hasDeviceMotion && window.addEventListener("devicemotion", this, !1)
        }, n.prototype.stop = function () {
            this.hasDeviceMotion && window.removeEventListener("devicemotion", this, !1), this.reset()
        }, n.prototype.devicemotion = function (e) {
            var t, n, r = e.accelerationIncludingGravity, o = 0, i = 0, a = 0;
            return null === this.lastX && null === this.lastY && null === this.lastZ ? (this.lastX = r.x, this.lastY = r.y, void(this.lastZ = r.z)) : (o = Math.abs(this.lastX - r.x), i = Math.abs(this.lastY - r.y), a = Math.abs(this.lastZ - r.z), (o > this.options.threshold && i > this.options.threshold || o > this.options.threshold && a > this.options.threshold || i > this.options.threshold && a > this.options.threshold) && (t = new Date, n = t.getTime() - this.lastTime.getTime(), n > this.options.timeout && (window.dispatchEvent(this.event), this.lastTime = new Date)), this.lastX = r.x, this.lastY = r.y, void(this.lastZ = r.z))
        }, n.prototype.handleEvent = function (e) {
            if ("function" == typeof this[e.type])return this[e.type](e)
        }
    }, function (e, t) {
        (function (t) {
            "use strict";
            e.exports = function () {
                function e() {
                    try {
                        return a in o && o[a]
                    } catch (e) {
                        return !1
                    }
                }

                var n, r = {}, o = "undefined" != typeof window ? window : t, i = o.document, a = "localStorage", u = "script";
                if (r.disabled = !1, r.version = "1.3.20", r.set = function (e, t) {
                    }, r.get = function (e, t) {
                    }, r.has = function (e) {
                        return void 0 !== r.get(e)
                    }, r.remove = function (e) {
                    }, r.clear = function () {
                    }, r.transact = function (e, t, n) {
                        null == n && (n = t, t = null), null == t && (t = {});
                        var o = r.get(e, t);
                        n(o), r.set(e, o)
                    }, r.getAll = function () {
                        var e = {};
                        return r.forEach(function (t, n) {
                            e[t] = n
                        }), e
                    }, r.forEach = function () {
                    }, r.serialize = function (e) {
                        return JSON.stringify(e)
                    }, r.deserialize = function (e) {
                        if ("string" == typeof e)try {
                            return JSON.parse(e)
                        } catch (t) {
                            return e || void 0
                        }
                    }, e()) n = o[a], r.set = function (e, t) {
                    return void 0 === t ? r.remove(e) : (n.setItem(e, r.serialize(t)), t)
                }, r.get = function (e, t) {
                    var o = r.deserialize(n.getItem(e));
                    return void 0 === o ? t : o
                }, r.remove = function (e) {
                    n.removeItem(e)
                }, r.clear = function () {
                    n.clear()
                }, r.forEach = function (e) {
                    for (var t = 0; t < n.length; t++) {
                        var o = n.key(t);
                        e(o, r.get(o))
                    }
                }; else if (i && i.documentElement.addBehavior) {
                    var c, s;
                    try {
                        s = new ActiveXObject("htmlfile"), s.open(), s.write("<" + u + ">document.w=window</" + u + '><iframe src="/favicon.ico"></iframe>'), s.close(), c = s.w.frames[0].document, n = c.createElement("div")
                    } catch (l) {
                        n = i.createElement("div"), c = i.body
                    }
                    var f = function (e) {
                        return function () {
                            var t = Array.prototype.slice.call(arguments, 0);
                            t.unshift(n), c.appendChild(n), n.addBehavior("#default#userData"), n.load(a);
                            var o = e.apply(r, t);
                            return c.removeChild(n), o
                        }
                    }, d = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"), p = function (e) {
                        return e.replace(/^d/, "___$&").replace(d, "___")
                    };
                    r.set = f(function (e, t, n) {
                        return t = p(t), void 0 === n ? r.remove(t) : (e.setAttribute(t, r.serialize(n)), e.save(a), n)
                    }), r.get = f(function (e, t, n) {
                        t = p(t);
                        var o = r.deserialize(e.getAttribute(t));
                        return void 0 === o ? n : o
                    }), r.remove = f(function (e, t) {
                        t = p(t), e.removeAttribute(t),
                            e.save(a)
                    }), r.clear = f(function (e) {
                        var t = e.XMLDocument.documentElement.attributes;
                        e.load(a);
                        for (var n = t.length - 1; n >= 0; n--)e.removeAttribute(t[n].name);
                        e.save(a)
                    }), r.forEach = f(function (e, t) {
                        for (var n, o = e.XMLDocument.documentElement.attributes, i = 0; n = o[i]; ++i)t(n.name, r.deserialize(e.getAttribute(n.name)))
                    })
                }
                try {
                    var h = "__storejs__";
                    r.set(h, h), r.get(h) != h && (r.disabled = !0), r.remove(h)
                } catch (l) {
                    r.disabled = !0
                }
                return r.enabled = !r.disabled, r
            }()
        }).call(t, function () {
            return this
        }())
    }, function (e, t) {
        "use strict";
        function n(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
        }

        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }, o = ["-webkit-", "-moz-", "-ms-"], i = ["Webkit", "Moz", "ms"], a = Object.create(null), u = /([a-z\d])([A-Z])/g, c = /-(\w)/g, s = null, l = function (e) {
            return e.replace(u, "$1-$2").toLowerCase()
        }, f = function (e) {
            return e.replace(c, function (e, t) {
                return t ? t.toUpperCase() : ""
            })
        }, d = function (e) {
            if (a[e])return a[e];
            var t = p(e);
            return a[e] = a[t] = t
        }, p = function (e) {
            e = l(e);
            var t = f(e), n = t.charAt(0).toUpperCase() + t.slice(1);
            s || (s = document.createElement("div"));
            for (var r, a = o.length; a--;)if (r = i[a] + n, r in s.style)return o[a] + e;
            if (t in s.style)return e
        }, h = document, m = function (e) {
            return [].slice.call(e)
        }, y = function (e) {
            return m(h.querySelectorAll(e))
        }, v = function (e, t) {
            if (e instanceof Element) {
                var n, r, o;
                if (g(t))return void(e.style.cssText = t);
                for (n in t)t.hasOwnProperty(n) && (o = t[n], r = d(n), null !== o && (o += ""), o ? e.style.setProperty(r, o) : e.style.removeProperty(r))
            }
        }, g = function (e) {
            return "string" == typeof e
        };
        e.exports = function (e, t, o) {
            if (g(t) && 3 === arguments.length && (t = n({}, t, o)), g(e)) e = y(e); else if (Array.isArray(e)) {
                var i = [];
                e.forEach(function (e) {
                    return i = i.concat(g(e) ? y(e) : e)
                }), e = i
            } else e = "object" === ("undefined" == typeof e ? "undefined" : r(e)) && e.length ? m(e) : [e];
            e.forEach(function (e) {
                return v(e, t)
            })
        }
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function o(e, t, n) {
            return ("string" == typeof t ? t : t.toString()).replace(e.define || m, function (t, r, o, i) {
                return 0 === r.indexOf("def.") && (r = r.substring(4)), r in n || (":" === o ? (e.defineParams && i.replace(e.defineParams, function (e, t, o) {
                        n[r] = {arg: t, text: o}
                    }), r in n || (n[r] = i)) : new Function("def", "def['" + r + "']=" + i)(n)), ""
            }).replace(e.use || m, function (t, r) {
                e.useParams && (r = r.replace(e.useParams, function (e, t, r, o) {
                    if (n[r] && n[r].arg && o) {
                        var i = (r + ":" + o).replace(/'|\\/g, "_");
                        return n.__exp = n.__exp || {}, n.__exp[i] = n[r].text.replace(new RegExp("(^|[^\\w$])" + n[r].arg + "([^\\w$])", "g"), "$1" + o + "$2"), t + "def.__exp['" + i + "']"
                    }
                }));
                var i = new Function("def", "return " + r)(n);
                return i ? o(e, i, n) : i
            })
        }

        function i(e) {
            return e.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
        }

        function a(e, t, n) {
            if (d["default"].html(e) && (e = e.innerHTML || e.innerText), d["default"].html(e) || y.test(e)) {
                var r = d["default"].string(e) ? (0, l.query)(e) : e;
                r && (t = t || (0, l.getAttr)(r, "target"), n = n || (0, l.getAttr)(r, "position"), e = r.innerHTML || r.innerText)
            }
            this._target = t, this._position = n, this._tempFunc = p.template(e)
        }

        function u(e, t, n) {
            if (d["default"].string(e) && (e = (0, l.query)(e)), !e)return !1;
            n = n.toLowerCase() || "append";
            var r = v.indexOf(n);
            switch (r) {
                case 0:
                    e.innerHTML += t;
                    break;
                case 1:
                    e.innerHTML = t + e.innerHTML;
                    break;
                case 2:
                    e.innerHTML = t
            }
        }

        function c(e, t, n) {
            return new a(e, t, n)
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = c;
        var s, l = n(5), f = n(1), d = r(f), p = {
            version: "1.0.3",
            templateSettings: {
                evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
                interpolate: /\{\{=([\s\S]+?)\}\}/g,
                encode: /\{\{!([\s\S]+?)\}\}/g,
                use: /\{\{#([\s\S]+?)\}\}/g,
                useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
                define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
                defineParams: /^\s*([\w$]+):([\s\S]+)/,
                conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
                iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
                varname: "t",
                strip: !0,
                append: !0,
                selfcontained: !1,
                doNotSkipEncoded: !1
            },
            template: void 0,
            compile: void 0
        };
        p.encodeHTMLSource = function (e) {
            var t = {
                "&": "&#38;",
                "<": "&#60;",
                ">": "&#62;",
                '"': "&#34;",
                "'": "&#39;",
                "/": "&#47;"
            }, n = e ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
            return function (e) {
                return e ? e.toString().replace(n, function (e) {
                        return t[e] || e
                    }) : ""
            }
        }, s = function () {
            return this || (0, eval)("this")
        }();
        var h = {
            append: {start: "'+(", end: ")+'", startencode: "'+encodeHTML("},
            split: {start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML("}
        }, m = /$^/;
        p.template = function (e, t, n) {
            t = t || p.templateSettings;
            var r, a, u = t.append ? h.append : h.split, c = 0, l = t.use || t.define ? o(t, e, n || {}) : e;
            l = ("var out='" + (t.strip ? l.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : l).replace(/'|\\/g, "\\$&").replace(t.interpolate || m, function (e, t) {
                return u.start + i(t) + u.end
            }).replace(t.encode || m, function (e, t) {
                return r = !0, u.startencode + i(t) + u.end
            }).replace(t.conditional || m, function (e, t, n) {
                return t ? n ? "';}else if(" + i(n) + "){out+='" : "';}else{out+='" : n ? "';if(" + i(n) + "){out+='" : "';}out+='"
            }).replace(t.iterate || m, function (e, t, n, r) {
                return t ? (c += 1, a = r || "i" + c, t = i(t), "';var arr" + c + "=" + t + ";if(arr" + c + "){var " + n + "," + a + "=-1,l" + c + "=arr" + c + ".length-1;while(" + a + "<l" + c + "){" + n + "=arr" + c + "[" + a + "+=1];out+='") : "';} } out+='"
            }).replace(t.evaluate || m, function (e, t) {
                return "';" + i(t) + "out+='"
            }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, ""), r && (t.selfcontained || !s || s._encodeHTML || (s._encodeHTML = p.encodeHTMLSource(t.doNotSkipEncoded)), l = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + p.encodeHTMLSource.toString() + "(" + (t.doNotSkipEncoded || "") + "));" + l);
            try {
                return new Function(t.varname, l)
            } catch (f) {
                throw"undefined" != typeof console && console.log("Could not create a template function: " + l), f
            }
        }, p.compile = function (e, t) {
            return p.template(e, null, t)
        };
        var y = /^[#|\.].{1,32}$/;
        a.prototype.target = function (e) {
            return arguments.length ? (this._selector = e, this) : this._selector
        }, a.prototype.position = function (e) {
            return arguments.length ? (this._position = e, this) : this._position
        }, a.prototype.clear = function () {
            return u(this._target, "", "replace"), this
        };
        var v = ["append", "prepend", "replace"];
        a.prototype.render = function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] || arguments[1], n = this._tempFunc(e);
            if (t && this._target) {
                var r = this._position;
                d["default"].string(t) && (r = t), u(this._target, n, r)
            }
            return n
        }
    }, function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(2), i = r(o), a = n(6), u = r(a), c = n(1), s = r(c), l = n(4), f = n(3), d = null, p = function h(e) {
            return d = e, h
        };
        ["play", "pause", "stop"].forEach(function (e) {
            return p[e] = function (t) {
                return i["default"]._call(e + "Voice", {localId: t || d})
            }
        }), p.end = function (e) {
            i["default"]._call("onVoicePlayEnd", {
                success: function (t) {
                    return e(t.localId)
                }
            })
        }, p.upload = function (e, t) {
            return new f.Promise(function (n, r) {
                return i["default"]._call("onVoicePlayEnd", {
                    localId: e || d,
                    isShowProgressTips: t ? 1 : 0,
                    success: function (e) {
                        return n(e.serverId)
                    },
                    fail: function (e) {
                        return r(e)
                    },
                    cancel: function (e) {
                        return r(e)
                    }
                })
            })
        }, p.save = function (e, t) {
            return s["default"].array(e) && (e = e.join(",")), u["default"].get(l.SAVEVOICE_URL, {
                params: {
                    medias: e,
                    app: t || "",
                    type: "sound"
                }
            }).then(function (e) {
                return f.Promise.resolve(e.data)
            })
        }, p.translate = function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
            return new f.Promise(function (n, r) {
                return i["default"]._call("translateVoice", {
                    localId: e || d,
                    isShowProgressTips: t ? 1 : 0,
                    success: function (e) {
                        return n(e.translateResult)
                    },
                    cancel: function (e) {
                        return r(e, "cancel")
                    },
                    fail: function (e) {
                        return r(e, "fail")
                    }
                })
            })
        }, p.download = function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];
            s["default"].string(e) && (e = e.split(","));
            var n = e.map(function (e) {
                return new f.Promise(function (n, r) {
                    var o = {
                        serverId: e, isShowProgressTips: t ? 1 : 0, success: function (e) {
                            return n(e.localId)
                        }, cancel: function (e) {
                            return r(e, "cancel")
                        }, fail: function (e) {
                            return r(e, "fail")
                        }
                    };
                    i["default"]._call("downloadVoice", o)
                })
            });
            return f.Promise.all(n)
        }, t["default"] = p
    }])
});