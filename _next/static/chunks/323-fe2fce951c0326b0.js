(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [323],
  {
    69260: function (e, t, n) {
      !(function (e, t, n) {
        "use strict";
        function r(e) {
          return e && "object" == typeof e && "default" in e
            ? e
            : { default: e };
        }
        var i = r(t),
          o = r(n);
        function a(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function u(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? a(Object(n), !0).forEach(function (t) {
                  var r, i;
                  (r = t),
                    (i = n[t]),
                    (r = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || null === e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                          var r = n.call(e, t || "default");
                          if ("object" != typeof r) return r;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : String(t);
                    })(r)) in e
                      ? Object.defineProperty(e, r, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[r] = i);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : a(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        }
        function c(e, t) {
          if (null == e) return {};
          var n,
            r,
            i = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                i = {},
                o = Object.keys(e);
              for (r = 0; r < o.length; r++)
                (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]),
                !(t.indexOf(n) >= 0) &&
                  Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (i[n] = e[n]);
          }
          return i;
        }
        function l(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        var s = [
            "animationData",
            "loop",
            "autoplay",
            "initialSegment",
            "onComplete",
            "onLoopComplete",
            "onEnterFrame",
            "onSegmentStart",
            "onConfigReady",
            "onDataReady",
            "onDataFailed",
            "onLoadedImages",
            "onDOMLoaded",
            "onDestroy",
            "lottieRef",
            "renderer",
            "name",
            "assetsPath",
            "rendererSettings",
          ],
          f = function (e, t) {
            var r,
              a = e.animationData,
              f = e.loop,
              d = e.autoplay,
              m = e.initialSegment,
              p = e.onComplete,
              y = e.onLoopComplete,
              v = e.onEnterFrame,
              g = e.onSegmentStart,
              b = e.onConfigReady,
              h = e.onDataReady,
              S = e.onDataFailed,
              w = e.onLoadedImages,
              A = e.onDOMLoaded,
              O = e.onDestroy;
            e.lottieRef, e.renderer, e.name, e.assetsPath, e.rendererSettings;
            var R = c(e, s),
              E =
                (function (e) {
                  if (Array.isArray(e)) return e;
                })((r = n.useState(!1))) ||
                (function (e, t) {
                  var n =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != n) {
                    var r,
                      i,
                      o,
                      a,
                      u = [],
                      c = !0,
                      l = !1;
                    try {
                      if (((o = (n = n.call(e)).next), 0 === t)) {
                        if (Object(n) !== n) return;
                        c = !1;
                      } else
                        for (
                          ;
                          !(c = (r = o.call(n)).done) &&
                          (u.push(r.value), u.length !== t);
                          c = !0
                        );
                    } catch (e) {
                      (l = !0), (i = e);
                    } finally {
                      try {
                        if (
                          !c &&
                          null != n.return &&
                          ((a = n.return()), Object(a) !== a)
                        )
                          return;
                      } finally {
                        if (l) throw i;
                      }
                    }
                    return u;
                  }
                })(r, 2) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return l(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if (
                      ("Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n)
                    )
                      return Array.from(e);
                    if (
                      "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    )
                      return l(e, t);
                  }
                })(r, 2) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })(),
              j = E[0],
              D = E[1],
              C = n.useRef(),
              P = n.useRef(null),
              L = function () {
                var t,
                  n =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                if (P.current) {
                  null === (t = C.current) || void 0 === t || t.destroy();
                  var r = u(u(u({}, e), n), {}, { container: P.current });
                  return (
                    (C.current = i.default.loadAnimation(r)),
                    D(!!C.current),
                    function () {
                      var e;
                      null === (e = C.current) || void 0 === e || e.destroy(),
                        (C.current = void 0);
                    }
                  );
                }
              };
            return (
              n.useEffect(
                function () {
                  var e = L();
                  return function () {
                    return null == e ? void 0 : e();
                  };
                },
                [a, f]
              ),
              n.useEffect(
                function () {
                  C.current && (C.current.autoplay = !!d);
                },
                [d]
              ),
              n.useEffect(
                function () {
                  if (C.current) {
                    if (!m) {
                      C.current.resetSegments(!0);
                      return;
                    }
                    Array.isArray(m) &&
                      m.length &&
                      ((C.current.currentRawFrame < m[0] ||
                        C.current.currentRawFrame > m[1]) &&
                        (C.current.currentRawFrame = m[0]),
                      C.current.setSegment(m[0], m[1]));
                  }
                },
                [m]
              ),
              n.useEffect(
                function () {
                  var e = [
                    { name: "complete", handler: p },
                    { name: "loopComplete", handler: y },
                    { name: "enterFrame", handler: v },
                    { name: "segmentStart", handler: g },
                    { name: "config_ready", handler: b },
                    { name: "data_ready", handler: h },
                    { name: "data_failed", handler: S },
                    { name: "loaded_images", handler: w },
                    { name: "DOMLoaded", handler: A },
                    { name: "destroy", handler: O },
                  ].filter(function (e) {
                    return null != e.handler;
                  });
                  if (e.length) {
                    var t = e.map(function (e) {
                      var t;
                      return (
                        null === (t = C.current) ||
                          void 0 === t ||
                          t.addEventListener(e.name, e.handler),
                        function () {
                          var t;
                          null === (t = C.current) ||
                            void 0 === t ||
                            t.removeEventListener(e.name, e.handler);
                        }
                      );
                    });
                    return function () {
                      t.forEach(function (e) {
                        return e();
                      });
                    };
                  }
                },
                [p, y, v, g, b, h, S, w, A, O]
              ),
              {
                View: o.default.createElement(
                  "div",
                  u({ style: t, ref: P }, R)
                ),
                play: function () {
                  var e;
                  null === (e = C.current) || void 0 === e || e.play();
                },
                stop: function () {
                  var e;
                  null === (e = C.current) || void 0 === e || e.stop();
                },
                pause: function () {
                  var e;
                  null === (e = C.current) || void 0 === e || e.pause();
                },
                setSpeed: function (e) {
                  var t;
                  null === (t = C.current) || void 0 === t || t.setSpeed(e);
                },
                goToAndStop: function (e, t) {
                  var n;
                  null === (n = C.current) ||
                    void 0 === n ||
                    n.goToAndStop(e, t);
                },
                goToAndPlay: function (e, t) {
                  var n;
                  null === (n = C.current) ||
                    void 0 === n ||
                    n.goToAndPlay(e, t);
                },
                setDirection: function (e) {
                  var t;
                  null === (t = C.current) || void 0 === t || t.setDirection(e);
                },
                playSegments: function (e, t) {
                  var n;
                  null === (n = C.current) ||
                    void 0 === n ||
                    n.playSegments(e, t);
                },
                setSubframe: function (e) {
                  var t;
                  null === (t = C.current) || void 0 === t || t.setSubframe(e);
                },
                getDuration: function (e) {
                  var t;
                  return null === (t = C.current) || void 0 === t
                    ? void 0
                    : t.getDuration(e);
                },
                destroy: function () {
                  var e;
                  null === (e = C.current) || void 0 === e || e.destroy(),
                    (C.current = void 0);
                },
                animationContainerRef: P,
                animationLoaded: j,
                animationItem: C.current,
              }
            );
          },
          d = function (e) {
            var t = e.wrapperRef,
              r = e.animationItem,
              i = e.mode,
              o = e.actions;
            n.useEffect(
              function () {
                var e,
                  n,
                  a,
                  u,
                  c,
                  l = t.current;
                if (l && r && o.length)
                  switch ((r.stop(), i)) {
                    case "scroll":
                      return (
                        (e = null),
                        (n = function () {
                          var t,
                            n,
                            i,
                            a =
                              ((n = (t = l.getBoundingClientRect()).top),
                              (i = t.height),
                              (window.innerHeight - n) /
                                (window.innerHeight + i)),
                            u = o.find(function (e) {
                              var t = e.visibility;
                              return t && a >= t[0] && a <= t[1];
                            });
                          if (u) {
                            if (
                              "seek" === u.type &&
                              u.visibility &&
                              2 === u.frames.length
                            ) {
                              var c =
                                u.frames[0] +
                                Math.ceil(
                                  ((a - u.visibility[0]) /
                                    (u.visibility[1] - u.visibility[0])) *
                                    u.frames[1]
                                );
                              r.goToAndStop(c - r.firstFrame - 1, !0);
                            }
                            "loop" === u.type &&
                              (null === e
                                ? (r.playSegments(u.frames, !0), (e = u.frames))
                                : e !== u.frames
                                ? (r.playSegments(u.frames, !0), (e = u.frames))
                                : r.isPaused &&
                                  (r.playSegments(u.frames, !0),
                                  (e = u.frames))),
                              "play" === u.type &&
                                r.isPaused &&
                                (r.resetSegments(!0), r.play()),
                              "stop" === u.type &&
                                r.goToAndStop(
                                  u.frames[0] - r.firstFrame - 1,
                                  !0
                                );
                          }
                        }),
                        document.addEventListener("scroll", n),
                        function () {
                          document.removeEventListener("scroll", n);
                        }
                      );
                    case "cursor":
                      return (
                        (a = function (e, t) {
                          var n = e,
                            i = t;
                          if (-1 !== n && -1 !== i) {
                            var a,
                              u,
                              c,
                              s,
                              f,
                              d =
                                ((a = n),
                                (u = i),
                                (s = (c = l.getBoundingClientRect()).top),
                                (f = c.left),
                                {
                                  x: (a - f) / c.width,
                                  y: (u - s) / c.height,
                                });
                            (n = d.x), (i = d.y);
                          }
                          var m = o.find(function (e) {
                            var t = e.position;
                            return t && Array.isArray(t.x) && Array.isArray(t.y)
                              ? n >= t.x[0] &&
                                  n <= t.x[1] &&
                                  i >= t.y[0] &&
                                  i <= t.y[1]
                              : !(
                                  !t ||
                                  Number.isNaN(t.x) ||
                                  Number.isNaN(t.y)
                                ) &&
                                  n === t.x &&
                                  i === t.y;
                          });
                          if (m) {
                            if (
                              "seek" === m.type &&
                              m.position &&
                              Array.isArray(m.position.x) &&
                              Array.isArray(m.position.y) &&
                              2 === m.frames.length
                            ) {
                              var p =
                                  (n - m.position.x[0]) /
                                  (m.position.x[1] - m.position.x[0]),
                                y =
                                  (i - m.position.y[0]) /
                                  (m.position.y[1] - m.position.y[0]);
                              r.playSegments(m.frames, !0),
                                r.goToAndStop(
                                  Math.ceil(
                                    ((p + y) / 2) * (m.frames[1] - m.frames[0])
                                  ),
                                  !0
                                );
                            }
                            "loop" === m.type && r.playSegments(m.frames, !0),
                              "play" === m.type &&
                                (r.isPaused && r.resetSegments(!1),
                                r.playSegments(m.frames)),
                              "stop" === m.type &&
                                r.goToAndStop(m.frames[0], !0);
                          }
                        }),
                        (u = function (e) {
                          a(e.clientX, e.clientY);
                        }),
                        (c = function () {
                          a(-1, -1);
                        }),
                        l.addEventListener("mousemove", u),
                        l.addEventListener("mouseout", c),
                        function () {
                          l.removeEventListener("mousemove", u),
                            l.removeEventListener("mouseout", c);
                        }
                      );
                  }
              },
              [i, r]
            );
          },
          m = function (e) {
            var t = e.actions,
              n = e.mode,
              r = e.lottieObj,
              i = r.animationItem,
              o = r.View;
            return (
              d({
                actions: t,
                animationItem: i,
                mode: n,
                wrapperRef: r.animationContainerRef,
              }),
              o
            );
          },
          p = ["style", "interactivity"];
        Object.defineProperty(e, "LottiePlayer", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
          (e.default = function (e) {
            var t,
              r,
              i,
              o = e.style,
              a = e.interactivity,
              u = f(c(e, p), o),
              l = u.View,
              s = u.play,
              d = u.stop,
              y = u.pause,
              v = u.setSpeed,
              g = u.goToAndStop,
              b = u.goToAndPlay,
              h = u.setDirection,
              S = u.playSegments,
              w = u.setSubframe,
              A = u.getDuration,
              O = u.destroy,
              R = u.animationContainerRef,
              E = u.animationLoaded,
              j = u.animationItem;
            return (
              n.useEffect(
                function () {
                  e.lottieRef &&
                    (e.lottieRef.current = {
                      play: s,
                      stop: d,
                      pause: y,
                      setSpeed: v,
                      goToAndPlay: b,
                      goToAndStop: g,
                      setDirection: h,
                      playSegments: S,
                      setSubframe: w,
                      getDuration: A,
                      destroy: O,
                      animationContainerRef: R,
                      animationLoaded: E,
                      animationItem: j,
                    });
                },
                [
                  null === (t = e.lottieRef) || void 0 === t
                    ? void 0
                    : t.current,
                ]
              ),
              m({
                lottieObj: {
                  View: l,
                  play: s,
                  stop: d,
                  pause: y,
                  setSpeed: v,
                  goToAndStop: g,
                  goToAndPlay: b,
                  setDirection: h,
                  playSegments: S,
                  setSubframe: w,
                  getDuration: A,
                  destroy: O,
                  animationContainerRef: R,
                  animationLoaded: E,
                  animationItem: j,
                },
                actions:
                  null !== (r = null == a ? void 0 : a.actions) && void 0 !== r
                    ? r
                    : [],
                mode:
                  null !== (i = null == a ? void 0 : a.mode) && void 0 !== i
                    ? i
                    : "scroll",
              })
            );
          }),
          (e.useLottie = f),
          (e.useLottieInteractivity = m),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, n(11248), n(67294));
    },
    24697: function (e, t, n) {
      "use strict";
      n.d(t, {
        Nr: function () {
          return a;
        },
      });
      var r = n(67294);
      function i(e, t) {
        return e === t;
      }
      function o(e) {
        return "function" == typeof e
          ? function () {
              return e;
            }
          : e;
      }
      function a(e, t, n) {
        var a,
          u,
          c = (n && n.equalityFn) || i,
          l =
            ((u = (a = (0, r.useState)(o(e)))[1]),
            [
              a[0],
              (0, r.useCallback)(function (e) {
                return u(o(e));
              }, []),
            ]),
          s = l[0],
          f = l[1],
          d = (function (e, t, n) {
            var i = this,
              o = (0, r.useRef)(null),
              a = (0, r.useRef)(0),
              u = (0, r.useRef)(null),
              c = (0, r.useRef)([]),
              l = (0, r.useRef)(),
              s = (0, r.useRef)(),
              f = (0, r.useRef)(e),
              d = (0, r.useRef)(!0);
            (0, r.useEffect)(
              function () {
                f.current = e;
              },
              [e]
            );
            var m = !t && 0 !== t && "undefined" != typeof window;
            if ("function" != typeof e) throw TypeError("Expected a function");
            t = +t || 0;
            var p = !!(n = n || {}).leading,
              y = !("trailing" in n) || !!n.trailing,
              v = "maxWait" in n,
              g = v ? Math.max(+n.maxWait || 0, t) : null;
            return (
              (0, r.useEffect)(function () {
                return (
                  (d.current = !0),
                  function () {
                    d.current = !1;
                  }
                );
              }, []),
              (0, r.useMemo)(
                function () {
                  var e = function (e) {
                      var t = c.current,
                        n = l.current;
                      return (
                        (c.current = l.current = null),
                        (a.current = e),
                        (s.current = f.current.apply(n, t))
                      );
                    },
                    n = function (e, t) {
                      m && cancelAnimationFrame(u.current),
                        (u.current = m
                          ? requestAnimationFrame(e)
                          : setTimeout(e, t));
                    },
                    r = function (e) {
                      if (!d.current) return !1;
                      var n = e - o.current;
                      return (
                        !o.current ||
                        n >= t ||
                        n < 0 ||
                        (v && e - a.current >= g)
                      );
                    },
                    b = function (t) {
                      return (
                        (u.current = null),
                        y && c.current
                          ? e(t)
                          : ((c.current = l.current = null), s.current)
                      );
                    },
                    h = function e() {
                      var i = Date.now();
                      if (r(i)) return b(i);
                      if (d.current) {
                        var u = t - (i - o.current);
                        n(e, v ? Math.min(u, g - (i - a.current)) : u);
                      }
                    },
                    S = function () {
                      var f = Date.now(),
                        m = r(f);
                      if (
                        ((c.current = [].slice.call(arguments)),
                        (l.current = i),
                        (o.current = f),
                        m)
                      ) {
                        if (!u.current && d.current)
                          return (
                            (a.current = o.current),
                            n(h, t),
                            p ? e(o.current) : s.current
                          );
                        if (v) return n(h, t), e(o.current);
                      }
                      return u.current || n(h, t), s.current;
                    };
                  return (
                    (S.cancel = function () {
                      u.current &&
                        (m
                          ? cancelAnimationFrame(u.current)
                          : clearTimeout(u.current)),
                        (a.current = 0),
                        (c.current = o.current = l.current = u.current = null);
                    }),
                    (S.isPending = function () {
                      return !!u.current;
                    }),
                    (S.flush = function () {
                      return u.current ? b(Date.now()) : s.current;
                    }),
                    S
                  );
                },
                [p, v, t, g, y, m]
              )
            );
          })(
            (0, r.useCallback)(
              function (e) {
                return f(e);
              },
              [f]
            ),
            t,
            n
          ),
          m = (0, r.useRef)(e);
        return c(m.current, e) || (d(e), (m.current = e)), [s, d];
      }
    },
    82623: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          e.split("").reduce((e, t) => -((e ^ t.charCodeAt(0)) * 5), 5) >>> 2
        );
      }
      function i(e = "", t = 95, n = 45, i = r) {
        let o = i(e),
          a = (o % 9) * 40;
        return (
          [...Array(e ? 25 : 0)].reduce(
            (e, t, n) =>
              o & (1 << n % 15)
                ? e +
                  `<rect x="${n > 14 ? 7 - ~~(n / 5) : ~~(n / 5)}" y="${
                    n % 5
                  }" width="1" height="1"/>`
                : e,
            `<svg viewBox="-1.5 -1.5 8 8" xmlns="http://www.w3.org/2000/svg" fill="hsl(${a} ${t}% ${n}%)">`
          ) + "</svg>"
        );
      }
      n.d(t, {
        Y: function () {
          return i;
        },
      }),
        globalThis.customElements?.define(
          "minidenticon-svg",
          class e extends HTMLElement {
            static observedAttributes = ["username", "saturation", "lightness"];
            static #e = {};
            #t = !1;
            connectedCallback() {
              this.#n(), (this.#t = !0);
            }
            attributeChangedCallback() {
              this.#t && this.#n();
            }
            #n() {
              let t = e.observedAttributes.map(
                  (e) => this.getAttribute(e) || void 0
                ),
                n = t.join(",");
              this.innerHTML = e.#e[n] ??= i(...t);
            }
          }
        );
    },
  },
]);
