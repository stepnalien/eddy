"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [343],
  {
    75740: function (e, t, s) {
      s.d(t, {
        ConfigCtrl: function () {
          return E;
        },
        zv: function () {
          return y;
        },
        uA: function () {
          return I;
        },
        ExplorerCtrl: function () {
          return z;
        },
        jb: function () {
          return J;
        },
        OptionsCtrl: function () {
          return O;
        },
        AV: function () {
          return b;
        },
        ThemeCtrl: function () {
          return ee;
        },
        ToastCtrl: function () {
          return es;
        },
      }),
        Symbol();
      let r = Symbol(),
        o = Object.getPrototypeOf,
        n = new WeakMap(),
        a = (e) =>
          e &&
          (n.has(e)
            ? n.get(e)
            : o(e) === Object.prototype || o(e) === Array.prototype),
        l = (e) => (a(e) && e[r]) || null,
        i = (e, t = !0) => {
          n.set(e, t);
        },
        c = (e) => "object" == typeof e && null !== e,
        d = new WeakMap(),
        u = new WeakSet(),
        p = (
          e = Object.is,
          t = (e, t) => new Proxy(e, t),
          s = (e) =>
            c(e) &&
            !u.has(e) &&
            (Array.isArray(e) || !(Symbol.iterator in e)) &&
            !(e instanceof WeakMap) &&
            !(e instanceof WeakSet) &&
            !(e instanceof Error) &&
            !(e instanceof Number) &&
            !(e instanceof Date) &&
            !(e instanceof String) &&
            !(e instanceof RegExp) &&
            !(e instanceof ArrayBuffer),
          r = (e) => {
            switch (e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
              default:
                throw e;
            }
          },
          o = new WeakMap(),
          n = (e, t, s = r) => {
            let a = o.get(e);
            if ((null == a ? void 0 : a[0]) === t) return a[1];
            let l = Array.isArray(e)
              ? []
              : Object.create(Object.getPrototypeOf(e));
            return (
              i(l, !0),
              o.set(e, [t, l]),
              Reflect.ownKeys(e).forEach((t) => {
                if (Object.getOwnPropertyDescriptor(l, t)) return;
                let r = Reflect.get(e, t),
                  o = { value: r, enumerable: !0, configurable: !0 };
                if (u.has(r)) i(r, !1);
                else if (r instanceof Promise)
                  delete o.value, (o.get = () => s(r));
                else if (d.has(r)) {
                  let [e, t] = d.get(r);
                  o.value = n(e, t(), s);
                }
                Object.defineProperty(l, t, o);
              }),
              Object.preventExtensions(l)
            );
          },
          a = new WeakMap(),
          p = [1, 1],
          f = (r) => {
            if (!c(r)) throw Error("object required");
            let o = a.get(r);
            if (o) return o;
            let i = p[0],
              h = new Set(),
              g = (e, t = ++p[0]) => {
                i !== t && ((i = t), h.forEach((s) => s(e, t)));
              },
              m = p[1],
              b = (e = ++p[1]) => (
                m === e ||
                  h.size ||
                  ((m = e),
                  v.forEach(([t]) => {
                    let s = t[1](e);
                    s > i && (i = s);
                  })),
                i
              ),
              y = (e) => (t, s) => {
                let r = [...t];
                (r[1] = [e, ...r[1]]), g(r, s);
              },
              v = new Map(),
              w = (e, t) => {
                if (v.has(e)) throw Error("prop listener already exists");
                if (h.size) {
                  let s = t[3](y(e));
                  v.set(e, [t, s]);
                } else v.set(e, [t]);
              },
              I = (e) => {
                var t;
                let s = v.get(e);
                s && (v.delete(e), null == (t = s[1]) || t.call(s));
              },
              C = (e) => {
                h.add(e),
                  1 === h.size &&
                    v.forEach(([e, t], s) => {
                      if (t) throw Error("remove already exists");
                      let r = e[3](y(s));
                      v.set(s, [e, r]);
                    });
                let t = () => {
                  h.delete(e),
                    0 === h.size &&
                      v.forEach(([e, t], s) => {
                        t && (t(), v.set(s, [e]));
                      });
                };
                return t;
              },
              O = Array.isArray(r)
                ? []
                : Object.create(Object.getPrototypeOf(r)),
              W = {
                deleteProperty(e, t) {
                  let s = Reflect.get(e, t);
                  I(t);
                  let r = Reflect.deleteProperty(e, t);
                  return r && g(["delete", [t], s]), r;
                },
                set(t, r, o, n) {
                  let i = Reflect.has(t, r),
                    p = Reflect.get(t, r, n);
                  if (i && (e(p, o) || (a.has(o) && e(p, a.get(o))))) return !0;
                  I(r), c(o) && (o = l(o) || o);
                  let h = o;
                  if (o instanceof Promise)
                    o.then((e) => {
                      (o.status = "fulfilled"),
                        (o.value = e),
                        g(["resolve", [r], e]);
                    }).catch((e) => {
                      (o.status = "rejected"),
                        (o.reason = e),
                        g(["reject", [r], e]);
                    });
                  else {
                    !d.has(o) && s(o) && (h = f(o));
                    let e = !u.has(h) && d.get(h);
                    e && w(r, e);
                  }
                  return Reflect.set(t, r, h, n), g(["set", [r], o, p]), !0;
                },
              },
              E = t(O, W);
            a.set(r, E);
            let j = [O, b, n, C];
            return (
              d.set(E, j),
              Reflect.ownKeys(r).forEach((e) => {
                let t = Object.getOwnPropertyDescriptor(r, e);
                "value" in t &&
                  ((E[e] = r[e]), delete t.value, delete t.writable),
                  Object.defineProperty(O, e, t);
              }),
              E
            );
          }
        ) => [f, d, u, e, t, s, r, o, n, a, p],
        [f] = p();
      function h(e = {}) {
        return f(e);
      }
      function g(e, t, s) {
        let r;
        let o = d.get(e);
        o || console.warn("Please use proxy object");
        let n = [],
          a = o[3],
          l = !1,
          i = a((e) => {
            if ((n.push(e), s)) {
              t(n.splice(0));
              return;
            }
            r ||
              (r = Promise.resolve().then(() => {
                (r = void 0), l && t(n.splice(0));
              }));
          });
        return (
          (l = !0),
          () => {
            (l = !1), i();
          }
        );
      }
      let m = h({
          history: ["ConnectWallet"],
          view: "ConnectWallet",
          data: void 0,
        }),
        b = {
          state: m,
          subscribe: (e) => g(m, () => e(m)),
          push(e, t) {
            e !== m.view &&
              ((m.view = e), t && (m.data = t), m.history.push(e));
          },
          reset(e) {
            (m.view = e), (m.history = [e]);
          },
          replace(e) {
            m.history.length > 1 &&
              ((m.history[m.history.length - 1] = e), (m.view = e));
          },
          goBack() {
            if (m.history.length > 1) {
              m.history.pop();
              let [e] = m.history.slice(-1);
              m.view = e;
            }
          },
          setData(e) {
            m.data = e;
          },
        },
        y = {
          WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
          WCM_VERSION: "WCM_VERSION",
          RECOMMENDED_WALLET_AMOUNT: 9,
          isMobile: () =>
            "u" > typeof window &&
            !!(
              window.matchMedia("(pointer:coarse)").matches ||
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
                navigator.userAgent
              )
            ),
          isAndroid: () =>
            y.isMobile() &&
            navigator.userAgent.toLowerCase().includes("android"),
          isIos() {
            let e = navigator.userAgent.toLowerCase();
            return y.isMobile() && (e.includes("iphone") || e.includes("ipad"));
          },
          isHttpUrl: (e) => e.startsWith("http://") || e.startsWith("https://"),
          isArray: (e) => Array.isArray(e) && e.length > 0,
          formatNativeUrl(e, t, s) {
            if (y.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
            let r = e;
            r.includes("://") ||
              (r = `${(r = e.replaceAll("/", "").replaceAll(":", ""))}://`),
              r.endsWith("/") || (r = `${r}/`),
              this.setWalletConnectDeepLink(r, s);
            let o = encodeURIComponent(t);
            return `${r}wc?uri=${o}`;
          },
          formatUniversalUrl(e, t, s) {
            if (!y.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
            let r = e;
            r.endsWith("/") || (r = `${r}/`),
              this.setWalletConnectDeepLink(r, s);
            let o = encodeURIComponent(t);
            return `${r}wc?uri=${o}`;
          },
          wait: async (e) =>
            new Promise((t) => {
              setTimeout(t, e);
            }),
          openHref(e, t) {
            window.open(e, t, "noreferrer noopener");
          },
          setWalletConnectDeepLink(e, t) {
            try {
              localStorage.setItem(
                y.WALLETCONNECT_DEEPLINK_CHOICE,
                JSON.stringify({ href: e, name: t })
              );
            } catch {
              console.info("Unable to set WalletConnect deep link");
            }
          },
          setWalletConnectAndroidDeepLink(e) {
            try {
              let [t] = e.split("?");
              localStorage.setItem(
                y.WALLETCONNECT_DEEPLINK_CHOICE,
                JSON.stringify({ href: t, name: "Android" })
              );
            } catch {
              console.info("Unable to set WalletConnect android deep link");
            }
          },
          removeWalletConnectDeepLink() {
            try {
              localStorage.removeItem(y.WALLETCONNECT_DEEPLINK_CHOICE);
            } catch {
              console.info("Unable to remove WalletConnect deep link");
            }
          },
          setModalVersionInStorage() {
            try {
              "u" > typeof localStorage &&
                localStorage.setItem(y.WCM_VERSION, "2.6.2");
            } catch {
              console.info("Unable to set Web3Modal version in storage");
            }
          },
          getWalletRouterData() {
            var e;
            let t = null == (e = b.state.data) ? void 0 : e.Wallet;
            if (!t) throw Error('Missing "Wallet" view data');
            return t;
          },
        },
        v =
          "u" > typeof location &&
          (location.hostname.includes("localhost") ||
            location.protocol.includes("https")),
        w = h({
          enabled: v,
          userSessionId: "",
          events: [],
          connectedWalletId: void 0,
        }),
        I = {
          state: w,
          subscribe: (e) =>
            g(w.events, () =>
              e(
                (function (e, t) {
                  let s = d.get(e);
                  s || console.warn("Please use proxy object");
                  let [r, o, n] = s;
                  return n(r, o(), void 0);
                })(w.events[w.events.length - 1])
              )
            ),
          initialize() {
            w.enabled &&
              "u" > typeof (null == crypto ? void 0 : crypto.randomUUID) &&
              (w.userSessionId = crypto.randomUUID());
          },
          setConnectedWalletId(e) {
            w.connectedWalletId = e;
          },
          click(e) {
            if (w.enabled) {
              let t = {
                type: "CLICK",
                name: e.name,
                userSessionId: w.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              w.events.push(t);
            }
          },
          track(e) {
            if (w.enabled) {
              let t = {
                type: "TRACK",
                name: e.name,
                userSessionId: w.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              w.events.push(t);
            }
          },
          view(e) {
            if (w.enabled) {
              let t = {
                type: "VIEW",
                name: e.name,
                userSessionId: w.userSessionId,
                timestamp: Date.now(),
                data: e,
              };
              w.events.push(t);
            }
          },
        },
        C = h({
          chains: void 0,
          walletConnectUri: void 0,
          isAuth: !1,
          isCustomDesktop: !1,
          isCustomMobile: !1,
          isDataLoaded: !1,
          isUiLoaded: !1,
        }),
        O = {
          state: C,
          subscribe: (e) => g(C, () => e(C)),
          setChains(e) {
            C.chains = e;
          },
          setWalletConnectUri(e) {
            C.walletConnectUri = e;
          },
          setIsCustomDesktop(e) {
            C.isCustomDesktop = e;
          },
          setIsCustomMobile(e) {
            C.isCustomMobile = e;
          },
          setIsDataLoaded(e) {
            C.isDataLoaded = e;
          },
          setIsUiLoaded(e) {
            C.isUiLoaded = e;
          },
          setIsAuth(e) {
            C.isAuth = e;
          },
        },
        W = h({
          projectId: "",
          mobileWallets: void 0,
          desktopWallets: void 0,
          walletImages: void 0,
          chains: void 0,
          enableAuthMode: !1,
          enableExplorer: !0,
          explorerExcludedWalletIds: void 0,
          explorerRecommendedWalletIds: void 0,
          termsOfServiceUrl: void 0,
          privacyPolicyUrl: void 0,
        }),
        E = {
          state: W,
          subscribe: (e) => g(W, () => e(W)),
          setConfig(e) {
            var t, s;
            I.initialize(),
              O.setChains(e.chains),
              O.setIsAuth(!!e.enableAuthMode),
              O.setIsCustomMobile(
                !!(null == (t = e.mobileWallets) ? void 0 : t.length)
              ),
              O.setIsCustomDesktop(
                !!(null == (s = e.desktopWallets) ? void 0 : s.length)
              ),
              y.setModalVersionInStorage(),
              Object.assign(W, e);
          },
        };
      var j = Object.defineProperty,
        L = Object.getOwnPropertySymbols,
        A = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        M = (e, t, s) =>
          t in e
            ? j(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[t] = s),
        U = (e, t) => {
          for (var s in t || (t = {})) A.call(t, s) && M(e, s, t[s]);
          if (L) for (var s of L(t)) k.call(t, s) && M(e, s, t[s]);
          return e;
        };
      let D = "https://explorer-api.walletconnect.com",
        P = "js-2.6.2";
      async function S(e, t) {
        let s = U({ sdkType: "wcm", sdkVersion: P }, t),
          r = new URL(e, D);
        return (
          r.searchParams.append("projectId", E.state.projectId),
          Object.entries(s).forEach(([e, t]) => {
            t && r.searchParams.append(e, String(t));
          }),
          (await fetch(r)).json()
        );
      }
      let N = {
        getDesktopListings: async (e) => S("/w3m/v1/getDesktopListings", e),
        getMobileListings: async (e) => S("/w3m/v1/getMobileListings", e),
        getInjectedListings: async (e) => S("/w3m/v1/getInjectedListings", e),
        getAllListings: async (e) => S("/w3m/v1/getAllListings", e),
        getWalletImageUrl: (e) =>
          `${D}/w3m/v1/getWalletImage/${e}?projectId=${E.state.projectId}&sdkType=wcm&sdkVersion=${P}`,
        getAssetImageUrl: (e) =>
          `${D}/w3m/v1/getAssetImage/${e}?projectId=${E.state.projectId}&sdkType=wcm&sdkVersion=${P}`,
      };
      var T = Object.defineProperty,
        x = Object.getOwnPropertySymbols,
        R = Object.prototype.hasOwnProperty,
        _ = Object.prototype.propertyIsEnumerable,
        $ = (e, t, s) =>
          t in e
            ? T(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[t] = s),
        V = (e, t) => {
          for (var s in t || (t = {})) R.call(t, s) && $(e, s, t[s]);
          if (x) for (var s of x(t)) _.call(t, s) && $(e, s, t[s]);
          return e;
        };
      let H = y.isMobile(),
        K = h({
          wallets: { listings: [], total: 0, page: 1 },
          search: { listings: [], total: 0, page: 1 },
          recomendedWallets: [],
        }),
        z = {
          state: K,
          async getRecomendedWallets() {
            let {
              explorerRecommendedWalletIds: e,
              explorerExcludedWalletIds: t,
            } = E.state;
            if ("NONE" === e || ("ALL" === t && !e)) return K.recomendedWallets;
            if (y.isArray(e)) {
              let t = { recommendedIds: e.join(",") },
                { listings: s } = await N.getAllListings(t),
                r = Object.values(s);
              r.sort((t, s) => {
                let r = e.indexOf(t.id),
                  o = e.indexOf(s.id);
                return r - o;
              }),
                (K.recomendedWallets = r);
            } else {
              let { chains: e, isAuth: s } = O.state,
                r = e?.join(","),
                o = y.isArray(t),
                n = {
                  page: 1,
                  sdks: s ? "auth_v1" : void 0,
                  entries: y.RECOMMENDED_WALLET_AMOUNT,
                  chains: r,
                  version: 2,
                  excludedIds: o ? t.join(",") : void 0,
                },
                { listings: a } = H
                  ? await N.getMobileListings(n)
                  : await N.getDesktopListings(n);
              K.recomendedWallets = Object.values(a);
            }
            return K.recomendedWallets;
          },
          async getWallets(e) {
            let t = V({}, e),
              {
                explorerRecommendedWalletIds: s,
                explorerExcludedWalletIds: r,
              } = E.state,
              { recomendedWallets: o } = K;
            if ("ALL" === r) return K.wallets;
            o.length
              ? (t.excludedIds = o.map((e) => e.id).join(","))
              : y.isArray(s) && (t.excludedIds = s.join(",")),
              y.isArray(r) &&
                (t.excludedIds = [t.excludedIds, r].filter(Boolean).join(",")),
              O.state.isAuth && (t.sdks = "auth_v1");
            let { page: n, search: a } = e,
              { listings: l, total: i } = H
                ? await N.getMobileListings(t)
                : await N.getDesktopListings(t),
              c = Object.values(l),
              d = a ? "search" : "wallets";
            return (
              (K[d] = {
                listings: [...K[d].listings, ...c],
                total: i,
                page: n ?? 1,
              }),
              { listings: c, total: i }
            );
          },
          getWalletImageUrl: (e) => N.getWalletImageUrl(e),
          getAssetImageUrl: (e) => N.getAssetImageUrl(e),
          resetSearch() {
            K.search = { listings: [], total: 0, page: 1 };
          },
        },
        B = h({ open: !1 }),
        J = {
          state: B,
          subscribe: (e) => g(B, () => e(B)),
          open: async (e) =>
            new Promise((t) => {
              let { isUiLoaded: s, isDataLoaded: r } = O.state;
              if (
                (y.removeWalletConnectDeepLink(),
                O.setWalletConnectUri(e?.uri),
                O.setChains(e?.chains),
                b.reset("ConnectWallet"),
                s && r)
              )
                (B.open = !0), t();
              else {
                let e = setInterval(() => {
                  let s = O.state;
                  s.isUiLoaded &&
                    s.isDataLoaded &&
                    (clearInterval(e), (B.open = !0), t());
                }, 200);
              }
            }),
          close() {
            B.open = !1;
          },
        };
      var q = Object.defineProperty,
        F = Object.getOwnPropertySymbols,
        G = Object.prototype.hasOwnProperty,
        Q = Object.prototype.propertyIsEnumerable,
        X = (e, t, s) =>
          t in e
            ? q(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: s,
              })
            : (e[t] = s),
        Y = (e, t) => {
          for (var s in t || (t = {})) G.call(t, s) && X(e, s, t[s]);
          if (F) for (var s of F(t)) Q.call(t, s) && X(e, s, t[s]);
          return e;
        };
      let Z = h({
          themeMode:
            "u" > typeof matchMedia &&
            matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
        }),
        ee = {
          state: Z,
          subscribe: (e) => g(Z, () => e(Z)),
          setThemeConfig(e) {
            let { themeMode: t, themeVariables: s } = e;
            t && (Z.themeMode = t), s && (Z.themeVariables = Y({}, s));
          },
        },
        et = h({ open: !1, message: "", variant: "success" }),
        es = {
          state: et,
          subscribe: (e) => g(et, () => e(et)),
          openToast(e, t) {
            (et.open = !0), (et.message = e), (et.variant = t);
          },
          closeToast() {
            et.open = !1;
          },
        };
    },
    59343: function (e, t, s) {
      s.d(t, {
        WalletConnectModal: function () {
          return o;
        },
      });
      var r = s(75740);
      class o {
        constructor(e) {
          (this.openModal = r.jb.open),
            (this.closeModal = r.jb.close),
            (this.subscribeModal = r.jb.subscribe),
            (this.setTheme = r.ThemeCtrl.setThemeConfig),
            r.ThemeCtrl.setThemeConfig(e),
            r.ConfigCtrl.setConfig(e),
            this.initUi();
        }
        async initUi() {
          if ("u" > typeof window) {
            await s.e(391).then(s.bind(s, 41391));
            let e = document.createElement("wcm-modal");
            document.body.insertAdjacentElement("beforeend", e),
              r.OptionsCtrl.setIsUiLoaded(!0);
          }
        }
      }
    },
  },
]);
