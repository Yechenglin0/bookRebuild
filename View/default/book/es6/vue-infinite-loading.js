! function(p, e) { "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.VueInfiniteLoading = e() : p.VueInfiniteLoading = e() }(this, function() {
    return function(p) {
        function e(o) {
            if (t[o]) return t[o].exports;
            var n = t[o] = { exports: {}, id: o, loaded: !1 };
            return p[o].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports }
        var t = {};
        return e.m = p, e.c = t, e.p = "/", e(0) }([function(p, e, t) { "use strict";

        function o(p) {
            return p && p.__esModule ? p : { default: p } }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = t(5),
            x = o(n);
        e.default = x.default, "undefined" != typeof window && window.Vue && window.Vue.component("infinite-loading", x.default) }, function(p, e) { "use strict";

        function t(p) {
            return "BODY" === p.tagName ? window : ["scroll", "auto"].indexOf(getComputedStyle(p).overflowY) > -1 ? p : t(p.parentNode) }

        function o(p) {
            var e = getComputedStyle(p === window ? document.body : p),
                t = p === window ? window.innerHeight : parseInt(e.height, 10),
                o = p === window ? document.body.scrollHeight : p.scrollHeight,
                n = isNaN(p.scrollTop) ? p.pageYOffset : p.scrollTop,
                x = parseInt(e.paddingTop, 10),
                i = parseInt(e.paddingBottom, 10);
            return o - t - n - x - i }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = { bubbles: "loading-bubbles", circles: "loading-circles", default: "loading-default", spiral: "loading-spiral", waveDots: "loading-wave-dots" };
        e.default = { data: function() {
                return { scrollParent: null, scrollHandler: null, isLoading: !1, isComplete: !1, isFirstLoad: !0 } }, computed: { spinnerType: function() {
                    return n[this.spinner] || n.default } }, props: { distance: { type: Number, default: 100 }, onInfinite: { type: Function, required: !0 }, spinner: String }, ready: function() { this.scrollParent = t(this.$el), this.scrollHandler = function() {
                    var p = o(this.scrollParent);!this.isLoading && p <= this.distance && (this.isLoading = !0, this.onInfinite.call()) }.bind(this), setTimeout(this.scrollHandler, 1), this.scrollParent.addEventListener("scroll", this.scrollHandler) }, events: { "$InfiniteLoading:loaded": function() { this.isLoading = !1, this.isFirstLoad = !1 }, "$InfiniteLoading:complete": function() { this.isLoading = !1, this.isComplete = !0, this.scrollParent.removeEventListener("scroll", this.scrollHandler) }, "$InfiniteLoading:reset": function() { this.isLoading = !1, this.isComplete = !1, this.isFirstLoad = !0, this.scrollParent.addEventListener("scroll", this.scrollHandler), setTimeout(this.scrollHandler, 1) } }, destroyed: function() { this.isComplete || this.scrollParent.removeEventListener("scroll", this.scrollHandler) } } }, function(p, e, t) { e = p.exports = t(3)(), e.push([p.id, `.loading-circles[_v-34e13b62]{position:relative}.loading-circles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-2.5px;margin-left:-2.5px;width:5px;height:5px;border-radius:50%;animation:linear loading-circles .75s infinite;-webkit-animation:linear loading-circles .75s infinite}@keyframes loading-circles{0%{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}12.5%{box-shadow:0 -12px 0 #dfdfdf,8.52px -8.52px 0 #505050,12px 0 0 #646464,8.52px 8.52px 0 #797979,0 12px 0 #8d8d8d,-8.52px 8.52px 0 #a2a2a2,-12px 0 0 #b6b6b6,-8.52px -8.52px 0 #cacaca}25%{box-shadow:0 -12px 0 #cacaca,8.52px -8.52px 0 #dfdfdf,12px 0 0 #505050,8.52px 8.52px 0 #646464,0 12px 0 #797979,-8.52px 8.52px 0 #8d8d8d,-12px 0 0 #a2a2a2,-8.52px -8.52px 0 #b6b6b6}37.5%{box-shadow:0 -12px 0 #b6b6b6,8.52px -8.52px 0 #cacaca,12px 0 0 #dfdfdf,8.52px 8.52px 0 #505050,0 12px 0 #646464,-8.52px 8.52px 0 #797979,-12px 0 0 #8d8d8d,-8.52px -8.52px 0 #a2a2a2}50%{box-shadow:0 -12px 0 #a2a2a2,8.52px -8.52px 0 #b6b6b6,12px 0 0 #cacaca,8.52px 8.52px 0 #dfdfdf,0 12px 0 #505050,-8.52px 8.52px 0 #646464,-12px 0 0 #797979,-8.52px -8.52px 0 #8d8d8d}62.5%{box-shadow:0 -12px 0 #8d8d8d,8.52px -8.52px 0 #a2a2a2,12px 0 0 #b6b6b6,8.52px 8.52px 0 #cacaca,0 12px 0 #dfdfdf,-8.52px 8.52px 0 #505050,-12px 0 0 #646464,-8.52px -8.52px 0 #797979}75%{box-shadow:0 -12px 0 #797979,8.52px -8.52px 0 #8d8d8d,12px 0 0 #a2a2a2,8.52px 8.52px 0 #b6b6b6,0 12px 0 #cacaca,-8.52px 8.52px 0 #dfdfdf,-12px 0 0 #505050,-8.52px -8.52px 0 #646464}87.5%{box-shadow:0 -12px 0 #646464,8.52px -8.52px 0 #797979,12px 0 0 #8d8d8d,8.52px 8.52px 0 #a2a2a2,0 12px 0 #b6b6b6,-8.52px 8.52px 0 #cacaca,-12px 0 0 #dfdfdf,-8.52px -8.52px 0 #505050}to{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}}@-webkit-keyframes loading-circles{0%{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}12.5%{box-shadow:0 -12px 0 #dfdfdf,8.52px -8.52px 0 #505050,12px 0 0 #646464,8.52px 8.52px 0 #797979,0 12px 0 #8d8d8d,-8.52px 8.52px 0 #a2a2a2,-12px 0 0 #b6b6b6,-8.52px -8.52px 0 #cacaca}25%{box-shadow:0 -12px 0 #cacaca,8.52px -8.52px 0 #dfdfdf,12px 0 0 #505050,8.52px 8.52px 0 #646464,0 12px 0 #797979,-8.52px 8.52px 0 #8d8d8d,-12px 0 0 #a2a2a2,-8.52px -8.52px 0 #b6b6b6}37.5%{box-shadow:0 -12px 0 #b6b6b6,8.52px -8.52px 0 #cacaca,12px 0 0 #dfdfdf,8.52px 8.52px 0 #505050,0 12px 0 #646464,-8.52px 8.52px 0 #797979,-12px 0 0 #8d8d8d,-8.52px -8.52px 0 #a2a2a2}50%{box-shadow:0 -12px 0 #a2a2a2,8.52px -8.52px 0 #b6b6b6,12px 0 0 #cacaca,8.52px 8.52px 0 #dfdfdf,0 12px 0 #505050,-8.52px 8.52px 0 #646464,-12px 0 0 #797979,-8.52px -8.52px 0 #8d8d8d}62.5%{box-shadow:0 -12px 0 #8d8d8d,8.52px -8.52px 0 #a2a2a2,12px 0 0 #b6b6b6,8.52px 8.52px 0 #cacaca,0 12px 0 #dfdfdf,-8.52px 8.52px 0 #505050,-12px 0 0 #646464,-8.52px -8.52px 0 #797979}75%{box-shadow:0 -12px 0 #797979,8.52px -8.52px 0 #8d8d8d,12px 0 0 #a2a2a2,8.52px 8.52px 0 #b6b6b6,0 12px 0 #cacaca,-8.52px 8.52px 0 #dfdfdf,-12px 0 0 #505050,-8.52px -8.52px 0 #646464}87.5%{box-shadow:0 -12px 0 #646464,8.52px -8.52px 0 #797979,12px 0 0 #8d8d8d,8.52px 8.52px 0 #a2a2a2,0 12px 0 #b6b6b6,-8.52px 8.52px 0 #cacaca,-12px 0 0 #dfdfdf,-8.52px -8.52px 0 #505050}to{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}}.loading-default[_v-34e13b62]{position:relative;border:1px solid #999;animation:ease loading-rotating 1.5s infinite;-webkit-animation:ease loading-rotating 1.5s infinite}.loading-default[_v-34e13b62]:before{content:'';position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.infinite-loading-container[_v-34e13b62]{clear:both;text-align:center}.infinite-loading-container [class^=loading-][_v-34e13b62]{display:inline-block;margin:15px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.infinite-status-prompt[_v-34e13b62]{color:#666;font-size:14px;text-align:center;padding:10px 0}`, ""]) }, function(p, e) { p.exports = function() {
            var p = [];
            return p.toString = function() {
                for (var p = [], e = 0; e < this.length; e++) {
                    var t = this[e];
                    t[2] ? p.push("@media " + t[2] + "{" + t[1] + "}") : p.push(t[1]) }
                return p.join("") }, p.i = function(e, t) { "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                for (var o = {}, n = 0; n < this.length; n++) {
                    var x = this[n][0]; "number" == typeof x && (o[x] = !0) }
                for (n = 0; n < e.length; n++) {
                    var i = e[n]; "number" == typeof i[0] && o[i[0]] || (t && !i[2] ? i[2] = t : t && (i[2] = "(" + i[2] + ") and (" + t + ")"), p.push(i)) } }, p } }, function(p, e) { p.exports = ' <div class=infinite-loading-container _v-34e13b62=""> <div v-show=isLoading _v-34e13b62=""> <slot name=spinner _v-34e13b62=""> <i :class=spinnerType _v-34e13b62=""></i> </slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; isFirstLoad" _v-34e13b62=""> <slot name=no-results _v-34e13b62="">No results :(</slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; !isFirstLoad" _v-34e13b62=""> <slot name=no-more _v-34e13b62="">No more data :)</slot> </div> </div> ' }, function(p, e, t) {
        var o, n, x = {};
        t(7), o = t(1), n = t(4), p.exports = o || {}, p.exports.__esModule && (p.exports = p.exports.default);
        var i = "function" == typeof p.exports ? p.exports.options || (p.exports.options = {}) : p.exports;
        n && (i.template = n), i.computed || (i.computed = {}), Object.keys(x).forEach(function(p) {
            var e = x[p];
            i.computed[p] = function() {
                return e } }) }, function(p, e, t) {
        function o(p, e) {
            for (var t = 0; t < p.length; t++) {
                var o = p[t],
                    n = l[o.id];
                if (n) { n.refs++;
                    for (var x = 0; x < n.parts.length; x++) n.parts[x](o.parts[x]);
                    for (; x < o.parts.length; x++) n.parts.push(r(o.parts[x], e)) } else {
                    for (var i = [], x = 0; x < o.parts.length; x++) i.push(r(o.parts[x], e));
                    l[o.id] = { id: o.id, refs: 1, parts: i } } } }

        function n(p) {
            for (var e = [], t = {}, o = 0; o < p.length; o++) {
                var n = p[o],
                    x = n[0],
                    i = n[1],
                    a = n[2],
                    r = n[3],
                    s = { css: i, media: a, sourceMap: r };
                t[x] ? t[x].parts.push(s) : e.push(t[x] = { id: x, parts: [s] }) }
            return e }

        function x(p, e) {
            var t = c(),
                o = g[g.length - 1];
            if ("top" === p.insertAt) o ? o.nextSibling ? t.insertBefore(e, o.nextSibling) : t.appendChild(e) : t.insertBefore(e, t.firstChild), g.push(e);
            else {
                if ("bottom" !== p.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                t.appendChild(e) } }

        function i(p) { p.parentNode.removeChild(p);
            var e = g.indexOf(p);
            e >= 0 && g.splice(e, 1) }

        function a(p) {
            var e = document.createElement("style");
            return e.type = "text/css", x(p, e), e }

        function r(p, e) {
            var t, o, n;
            if (e.singleton) {
                var x = h++;
                t = u || (u = a(e)), o = s.bind(null, t, x, !1), n = s.bind(null, t, x, !0) } else t = a(e), o = d.bind(null, t), n = function() { i(t) };
            return o(p),
                function(e) {
                    if (e) {
                        if (e.css === p.css && e.media === p.media && e.sourceMap === p.sourceMap) return;
                        o(p = e) } else n() } }

        function s(p, e, t, o) {
            var n = t ? "" : o.css;
            if (p.styleSheet) p.styleSheet.cssText = v(e, n);
            else {
                var x = document.createTextNode(n),
                    i = p.childNodes;
                i[e] && p.removeChild(i[e]), i.length ? p.insertBefore(x, i[e]) : p.appendChild(x) } }

        function d(p, e) {
            var t = e.css,
                o = e.media,
                n = e.sourceMap;
            if (o && p.setAttribute("media", o), n && (t += "\n/*# sourceURL=" + n.sources[0] + " */", t += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"), p.styleSheet) p.styleSheet.cssText = t;
            else {
                for (; p.firstChild;) p.removeChild(p.firstChild);
                p.appendChild(document.createTextNode(t)) } }
        var l = {},
            b = function(p) {
                var e;
                return function() {
                    return "undefined" == typeof e && (e = p.apply(this, arguments)), e } },
            f = b(function() {
                return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase()) }),
            c = b(function() {
                return document.head || document.getElementsByTagName("head")[0] }),
            u = null,
            h = 0,
            g = [];
        p.exports = function(p, e) { e = e || {}, "undefined" == typeof e.singleton && (e.singleton = f()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
            var t = n(p);
            return o(t, e),
                function(p) {
                    for (var x = [], i = 0; i < t.length; i++) {
                        var a = t[i],
                            r = l[a.id];
                        r.refs--, x.push(r) }
                    if (p) {
                        var s = n(p);
                        o(s, e) }
                    for (var i = 0; i < x.length; i++) {
                        var r = x[i];
                        if (0 === r.refs) {
                            for (var d = 0; d < r.parts.length; d++) r.parts[d]();
                            delete l[r.id] } } } };
        var v = function() {
            var p = [];
            return function(e, t) {
                return p[e] = t, p.filter(Boolean).join("\n") } }() }, function(p, e, t) {
        var o = t(2); "string" == typeof o && (o = [
            [p.id, o, ""]
        ]);
        t(6)(o, {});
        o.locals && (p.exports = o.locals) }]) });
