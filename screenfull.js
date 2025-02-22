/*!
 * screenfull
 * v5.1.0 - 2020-12-24
 * (c) Sindre Sorhus; MIT License
 */

!(function () {
    "use strict";
    var c =
            "undefined" != typeof window && void 0 !== window.document
                ? window.document
                : {},
        e = "undefined" != typeof module && module.exports,
        s = (function () {
            for (
                var e,
                    n = [
                        [
                            "requestFullscreen",
                            "exitFullscreen",
                            "fullscreenElement",
                            "fullscreenEnabled",
                            "fullscreenchange",
                            "fullscreenerror",
                        ],
                        [
                            "webkitRequestFullscreen",
                            "webkitExitFullscreen",
                            "webkitFullscreenElement",
                            "webkitFullscreenEnabled",
                            "webkitfullscreenchange",
                            "webkitfullscreenerror",
                        ],
                        [
                            "webkitRequestFullScreen",
                            "webkitCancelFullScreen",
                            "webkitCurrentFullScreenElement",
                            "webkitCancelFullScreen",
                            "webkitfullscreenchange",
                            "webkitfullscreenerror",
                        ],
                        [
                            "mozRequestFullScreen",
                            "mozCancelFullScreen",
                            "mozFullScreenElement",
                            "mozFullScreenEnabled",
                            "mozfullscreenchange",
                            "mozfullscreenerror",
                        ],
                        [
                            "msRequestFullscreen",
                            "msExitFullscreen",
                            "msFullscreenElement",
                            "msFullscreenEnabled",
                            "MSFullscreenChange",
                            "MSFullscreenError",
                        ],
                    ],
                    l = 0,
                    r = n.length,
                    t = {};
                l < r;
                l++
            )
                if ((e = n[l]) && e[1] in c) {
                    for (l = 0; l < e.length; l++) t[n[0][l]] = e[l];
                    return t;
                }
            return !1;
        })(),
        l = { change: s.fullscreenchange, error: s.fullscreenerror },
        n = {
            request: function (t, u) {
                return new Promise(
                    function (e, n) {
                        var l = function () {
                            this.off("change", l), e();
                        }.bind(this);
                        this.on("change", l);
                        var r = (t = t || c.documentElement)[
                            s.requestFullscreen
                        ](u);
                        r instanceof Promise && r.then(l).catch(n);
                    }.bind(this)
                );
            },
            exit: function () {
                return new Promise(
                    function (e, n) {
                        var l, r;
                        this.isFullscreen
                            ? ((l = function () {
                                  this.off("change", l), e();
                              }.bind(this)),
                              this.on("change", l),
                              (r = c[s.exitFullscreen]()) instanceof Promise &&
                                  r.then(l).catch(n))
                            : e();
                    }.bind(this)
                );
            },
            toggle: function (e, n) {
                return this.isFullscreen ? this.exit() : this.request(e, n);
            },
            onchange: function (e) {
                this.on("change", e);
            },
            onerror: function (e) {
                this.on("error", e);
            },
            on: function (e, n) {
                e = l[e];
                e && c.addEventListener(e, n, !1);
            },
            off: function (e, n) {
                e = l[e];
                e && c.removeEventListener(e, n, !1);
            },
            raw: s,
        };
    s
        ? (Object.defineProperties(n, {
              isFullscreen: {
                  get: function () {
                      return Boolean(c[s.fullscreenElement]);
                  },
              },
              element: {
                  enumerable: !0,
                  get: function () {
                      return c[s.fullscreenElement];
                  },
              },
              isEnabled: {
                  enumerable: !0,
                  get: function () {
                      return Boolean(c[s.fullscreenEnabled]);
                  },
              },
          }),
          e ? (module.exports = n) : (window.screenfull = n))
        : e
        ? (module.exports = { isEnabled: !1 })
        : (window.screenfull = { isEnabled: !1 });
})();
