(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [447],
  {
    45822: function (e, n, t) {
      "use strict";
      t.d(n, {
        S: function () {
          return r;
        },
        c: function () {
          return s;
        },
      });
      var i = t(70853);
      let r = [7001],
        s = () => {
          let e = i.Z.activeTab;
          return "Zetaswap" === e ? [7001] : [5, 97, 9999, 80001];
        };
    },
    95827: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return ei;
          },
        });
      var i = t(82729),
        r = t(85893),
        s = t(29323),
        a = t(67294),
        d = t(25675),
        l = t.n(d),
        c = t(41686),
        o = t(69077),
        x = t(57764),
        p = {
          src: "/_next/static/media/eddyLogo.b6dd3588.svg",
          height: 36,
          width: 38,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = t(29760),
        h = t(88533),
        g = t(55597),
        m = t(90530),
        f = t(72290),
        y = t(32751),
        w = t(70853),
        j = t(45822),
        b = t(45920),
        Z = {
          src: "/_next/static/media/rewards-rocekt.c1b14c55.svg",
          height: 15,
          width: 15,
          blurWidth: 0,
          blurHeight: 0,
        };
      function v() {
        let e = (0, i._)([""]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function k() {
        let e = (0, i._)([
          "\n  display: flex;\n  align-items: center;\n  color: ",
          ";\n  cursor: pointer;\n  margin-left: 25px;\n  ",
          "\n  opacity: ",
          ";\n  &:hover {\n    color: ",
          ";\n    opacity: 1;\n  }\n",
        ]);
        return (
          (k = function () {
            return e;
          }),
          e
        );
      }
      function C() {
        let e = (0, i._)([
          "\n  background-color: ",
          ";\n  display: flex;\n  margin-left: 7px;\n  opacity: 1;\n  height: 5px\n  align-items: center;\n  justify-content: center;\n  padding: 1px 3px;\n",
        ]);
        return (
          (C = function () {
            return e;
          }),
          e
        );
      }
      function S() {
        let e = (0, i._)(["\n  ", "\n  opacity: 1;\n  color: ", ";\n"]);
        return (
          (S = function () {
            return e;
          }),
          e
        );
      }
      let O = c.ZP.div(v()),
        E = c.ZP.div(
          k(),
          (e) =>
            "Rewards" === e.tab
              ? x.O.background
              : 1 === e.active
              ? x.O.white
              : x.O.shade1,
          h.cV,
          (e) => ("Rewards" === e.tab ? 1 : 1 === e.active ? 1 : 0.5),
          (e) => ("Rewards" === e.tab ? x.O.background : x.O.white)
        ),
        P = c.ZP.div(C(), x.O.backgroundVariant2),
        T = c.ZP.span(S(), h.jJ, x.O.background);
      var A = (0, s.f3)(
          "appStore",
          "transferStore"
        )(
          (0, s.Pi)((e) => {
            let { key: n, item: t } = e;
            return (0, r.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              },
              children: [
                (0, r.jsx)(
                  E,
                  {
                    active: w.Z.activeTab === t ? 1 : 0,
                    tab: t,
                    onClick: () => {
                      ("Transfer" === t ||
                        "Rewards" === t ||
                        "Zetaswap" === t) &&
                        w.Z.setActiveTab(t);
                    },
                    children: t,
                  },
                  n
                ),
                "Pool" === t
                  ? (0, r.jsx)(P, {
                      children: (0, r.jsx)(T, { children: "Coming soon" }),
                    })
                  : null,
                "Rewards" === t
                  ? (0, r.jsx)(O, {
                      style: { marginLeft: "6px", marginTop: "-10px" },
                      children: (0, r.jsx)(l(), {
                        src: Z,
                        alt: "reward-rocket",
                      }),
                    })
                  : null,
              ],
            });
          })
        ),
        I = t(91653),
        B = t(69355),
        _ = t(23330),
        R = t(13057);
      function L() {
        let e = (0, i._)([
          "\n  padding: 15px;\n  position: absolute;\n  top: 60px;\n  right: ",
          ";\n  width: 160px;\n  border-radius: 10px;\n  border: 1px solid ",
          ";\n  background-color: ",
          ";\n  animation: slide 0.2s ease-in-out;\n  z-index: 10;\n  @keyframes slide {\n    from {\n      /* max-height: 0; */\n      transform: scale(0);\n    }\n    to {\n      /* max-height: 500px; */\n      transform: scale(1);\n    }\n  }\n",
        ]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      function N() {
        let e = (0, i._)([
          "\n  display: flex;\n  z-index: 10;\n  color: ",
          ";\n  ",
          "\n  flex: 1;\n  margin-left: 10px;\n",
        ]);
        return (
          (N = function () {
            return e;
          }),
          e
        );
      }
      function W() {
        let e = (0, i._)([
          "\n  padding: 40px 5% 0px 5%;\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n  align-items: center;\n",
        ]);
        return (
          (W = function () {
            return e;
          }),
          e
        );
      }
      function X() {
        let e = (0, i._)([
          "\n  position: relative;\n  background-color: ",
          ";\n  box-shadow: 0px 6px ",
          ";\n  padding: 10px 20px;\n  ",
          "\n  ",
          "\n    ",
          "\n    @media screen and (max-width: 940px) {\n    padding: 8.75px 17.5px;\n    ",
          "\n    box-shadow: 0px 4px ",
          ";\n  }\n",
        ]);
        return (
          (X = function () {
            return e;
          }),
          e
        );
      }
      function D() {
        let e = (0, i._)([
          "\n  background-color: ",
          ";\n  border: 1px solid ",
          ";\n  padding: 10px 15px;\n  ",
          "\n  ",
          "\n  ",
          "\n  color: ",
          ";\n  @media screen and (max-width: 940px) {\n    padding: 8.75px 17.5px;\n    ",
          "\n  }\n",
        ]);
        return (
          (D = function () {
            return e;
          }),
          e
        );
      }
      function H() {
        let e = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  @media screen and (max-width: 940px) {\n    display: none;\n  }\n",
        ]);
        return (
          (H = function () {
            return e;
          }),
          e
        );
      }
      function K() {
        let e = (0, i._)([
          "\n  display: flex;\n  @media screen and (max-width: 940px) {\n    display: none;\n  }\n",
        ]);
        return (
          (K = function () {
            return e;
          }),
          e
        );
      }
      function M() {
        let e = (0, i._)([
          "\n  display: none;\n  @media screen and (max-width: 940px) {\n    display: flex;\n  }\n",
        ]);
        return (
          (M = function () {
            return e;
          }),
          e
        );
      }
      function F() {
        let e = (0, i._)([
          "\n  display: flex;\n  max-width: 136px;\n  padding: 10px 20px;\n  ",
          ";\n  background-color: ",
          ";\n  color: ",
          ";\n  box-shadow: 0px 5px ",
          ";\n\n  @media screen and (max-width: 940px) {\n    padding: 8.75px 17.5px;\n    max-width: 100px;\n    ",
          ";\n    box-shadow: 0px 4px ",
          ";\n  }\n",
        ]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      function V() {
        let e = (0, i._)([
          "\n  display: flex;\n  max-width: 136px;\n  padding: 10px 20px;\n  ",
          ";\n  background-color: ",
          ";\n  color: ",
          ";\n  box-shadow: 0px 5px ",
          ";\n\n  @media screen and (max-width: 940px) {\n    padding: 8.75px 17.5px;\n    max-width: 100px;\n    ",
          ";\n    box-shadow: 0px 4px ",
          ";\n  }\n",
        ]);
        return (
          (V = function () {
            return e;
          }),
          e
        );
      }
      let J = c.ZP.div(
          L(),
          (e) => ("btc" === e.token ? "20%" : "12%"),
          x.O.ink6,
          x.O.ink2
        ),
        U = c.ZP.div(N(), x.O.ink7, h.DD),
        z = c.ZP.div(W()),
        G = c.ZP.div(
          X(),
          x.O.shade4,
          x.O.shade3,
          h.w2,
          g.cx,
          g.LH,
          h.fy,
          x.O.shade3
        ),
        Q = c.ZP.div(
          D(),
          x.O.borderRedVariant2,
          x.O.borderRed,
          h.Ir,
          g.cx,
          g.LH,
          x.O.danger2,
          h.tS
        ),
        q = c.ZP.div(H()),
        Y = c.ZP.div(K()),
        $ = c.ZP.div(M()),
        ee = c.ZP.div(
          F(),
          h.Bj,
          x.O.background,
          x.O.shade0,
          x.O.shadowColor,
          h.tS,
          x.O.shadowColor
        ),
        en = c.ZP.div(
          V(),
          h.Bj,
          x.O.btcOrange,
          x.O.shade0,
          x.O.shadowOrange,
          h.tS,
          x.O.shadowOrange
        ),
        et = ["Transfer", "Zetaswap", "Rewards"];
      var ei = (0, s.f3)(
        "appStore",
        "transferStore"
      )(
        (0, s.Pi)(() => {
          let { address: e, isConnected: n, connector: t } = (0, o.mA)(),
            { chain: i } = (0, o.LN)(),
            {
              chains: s,
              error: d,
              isLoading: c,
              pendingChainId: x,
              switchNetwork: h,
            } = (0, o.g0)(),
            [Z, v] = (0, a.useState)(!1),
            { disconnect: k } = (0, o.qL)(),
            C = (0, a.useRef)(null),
            S = (0, a.useRef)(null),
            [O, E] = (0, a.useState)(!1),
            [P, T] = (0, a.useState)(null),
            [L, N] = (0, a.useState)(""),
            W = window.innerWidth,
            X = !1;
          W <= 940 && (X = !0),
            (0, a.useEffect)(() => {
              function e(e) {
                C.current && !C.current.contains(e.target) && v(!1);
              }
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [C]),
            (0, a.useEffect)(() => {
              function e(e) {
                S.current && !S.current.contains(e.target) && E(!1);
              }
              return (
                document.addEventListener("mousedown", e),
                () => {
                  document.removeEventListener("mousedown", e);
                }
              );
            }, [S]),
            (0, a.useEffect)(() => {
              e && H();
            }, [e]),
            (0, a.useEffect)(() => {
              b.Z.fromChainId !== B.XN.BITCOIN && T(null);
            }, [b.Z.fromChainId]),
            (0, a.useEffect)(() => {
              b.Z.fromChainId !== B.XN.BITCOIN && T(null);
            }, []),
            (0, a.useEffect)(() => {
              H();
            }, []),
            (0, a.useEffect)(() => {
              T(w.Z.btcPaymentAddress);
            }, [w.Z.btcPaymentAddress]),
            (0, a.useEffect)(() => {
              localStorage.getItem("btc-payment-address") &&
                localStorage.getItem("btc-payment-public-key") &&
                D(
                  localStorage.getItem("btc-payment-address"),
                  localStorage.getItem("btc-payment-public-key")
                );
            }, []),
            (0, a.useEffect)(() => {
              (e || w.Z.okxWalletAddress) && w.Z.setBottomsheetOpen(!1);
            }, [e, w.Z.okxWalletAddress]);
          let D = (e, n) => {
              T(e), w.Z.setBtcPaymentAddress(e), w.Z.setBtcPaymentPublicKey(n);
            },
            H = async () => {
              try {
                let n = localStorage.getItem("eddyUserId"),
                  t = await (0, I.QQ)(e, n),
                  { inviteCode: i } = t;
                localStorage.getItem("".concat(e, "-invite-code")) ||
                  localStorage.setItem("".concat(e, "-invite-code"), i);
              } catch (e) {}
            },
            K = () => {
              T(null),
                w.Z.setBtcPaymentAddress(null),
                w.Z.setBtcPaymentPublicKey(null),
                localStorage.removeItem("btc-payment-address"),
                localStorage.removeItem("btc-payment-address"),
                b.Z.resetTransfer(),
                b.Z.setFromChainId(0),
                b.Z.setToChainId(0);
            },
            M = async () => {
              try {
                await (0, m.getAddress)({
                  payload: {
                    purposes: [
                      m.AddressPurposes.ORDINALS,
                      m.AddressPurposes.PAYMENT,
                    ],
                    message: "Address for receiving Ordinals and payments",
                    network: { type: "Testnet" },
                  },
                  onFinish: (e) => {
                    let n = e.addresses[1].address,
                      t = e.addresses[1].publicKey;
                    localStorage.setItem("btc-payment-address", n),
                      localStorage.setItem("btc-payment-public-key", t),
                      D(n, t);
                  },
                  onCancel: () => {
                    w.Z.setToastMessage({
                      message: "Wallet connection failed",
                      type: "DANGER",
                    });
                  },
                });
              } catch (e) {
                w.Z.setBtcWalletConnectOpen(!0);
              }
            };
          return (0, r.jsxs)(z, {
            children: [
              (0, r.jsx)(Y, {
                children: (0, r.jsx)(l(), {
                  style: { width: "60px", height: "30px" },
                  width: 95,
                  height: 35,
                  priority: !0,
                  src: p,
                  alt: "EddyFinance",
                }),
              }),
              (0, r.jsx)($, {
                children: (0, r.jsx)(l(), {
                  style: { width: "23px", height: "23px" },
                  width: 23,
                  height: 23,
                  priority: !0,
                  src: p,
                  alt: "EddyFinance",
                }),
              }),
              (0, r.jsx)(q, {
                children: et.map((e, n) => (0, r.jsx)(A, { item: e }, n)),
              }),
              (0, r.jsx)("div", { style: { flex: 1 } }),
              O &&
                (0, r.jsx)(J, {
                  token: "btc",
                  style: {},
                  ref: S,
                  children: (0, r.jsxs)(g.JX, {
                    children: [
                      (0, r.jsx)(u.Z, {
                        style: { alignSelf: "stretch", marginBottom: "10px" },
                        onClick: () => {
                          navigator.clipboard.writeText(P),
                            w.Z.setToastMessage({
                              message: "Address copied",
                              type: "SUCCESS",
                            }),
                            E(!1);
                        },
                        children: (0, r.jsxs)(g.X2, {
                          children: [
                            (0, r.jsx)(f.CK, {}),
                            (0, r.jsx)(U, { children: "Copy Address" }),
                          ],
                        }),
                      }),
                      (0, r.jsx)(u.Z, {
                        onClick: () => {
                          window.open(
                            "https://live.blockcypher.com/btc-testnet/address/".concat(
                              P,
                              "/"
                            )
                          ),
                            v(!1);
                        },
                        style: { alignSelf: "stretch", marginBottom: "10px" },
                        children: (0, r.jsxs)(g.X2, {
                          children: [
                            (0, r.jsx)(f.dL, {}),
                            (0, r.jsx)(U, { children: "View in Explorer" }),
                          ],
                        }),
                      }),
                      (0, r.jsx)(u.Z, {
                        onClick: () => {
                          E(!1), K();
                        },
                        style: { alignSelf: "stretch" },
                        children: (0, r.jsxs)(g.X2, {
                          children: [
                            (0, r.jsx)(f.cH, {}),
                            (0, r.jsx)(U, { children: "Disconnect" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              P && i && !X && (0, j.c)().includes(i.id)
                ? (0, r.jsx)(u.Z, {
                    onClick: () => {
                      E(!O);
                    },
                    style: { marginRight: "".concat(X ? "5px" : "15px") },
                    children: (0, r.jsxs)(G, {
                      children: [
                        (0, r.jsx)(f.v8, {
                          width: X ? 11 : 20,
                          height: X ? 11 : 20,
                          style: { marginRight: "10px" },
                        }),
                        " ",
                        ((e) => {
                          let n = e.substring(0, 6),
                            t = e.substring(e.length - 4, e.length);
                          return "".concat(n, "....").concat(t);
                        })(P),
                      ],
                    }),
                  })
                : P && i && !X && !(0, j.c)().includes(i.id)
                ? null
                : (0, r.jsx)(u.Z, {
                    style: {
                      marginRight: "5px",
                      display: "".concat(X ? "none" : "flex"),
                    },
                    onClick: () => {
                      M();
                    },
                    children: (0, r.jsx)(en, { children: "BTC wallet" }),
                  }),
              X &&
                n &&
                e &&
                (null == i ? void 0 : i.id) === 7001 &&
                (0, r.jsx)(G, {
                  style: {
                    marginRight: "10px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                  },
                  children: (0, r.jsx)(l(), {
                    width: 20,
                    height: 20,
                    src: (0, _.Z)(7001),
                    alt: "network-asset",
                  }),
                }),
              n && e && (0, j.c)().includes(i.id)
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(u.Z, {
                        onClick: () => {
                          if (X) {
                            w.Z.setBottomsheetOpen(!0),
                              w.Z.setWalletActionBottomSheet(!0);
                            return;
                          }
                          v(!Z);
                        },
                        children: (0, r.jsxs)(G, {
                          children: [
                            (null == t ? void 0 : t.name) === y.r.METAMASK
                              ? (0, r.jsx)(f.BP, {
                                  style: { marginRight: "10px" },
                                  width: X ? 11 : 20,
                                  height: X ? 11 : 20,
                                })
                              : (null == t ? void 0 : t.name) === y.r.COINBASE
                              ? (0, r.jsx)(f.C9, {
                                  style: { marginRight: "10px" },
                                  width: X ? 11 : 20,
                                  height: X ? 11 : 20,
                                })
                              : (null == t ? void 0 : t.name) ===
                                y.r.WALLET_CONNECT
                              ? (0, r.jsx)(f.be, {
                                  style: { marginRight: "10px" },
                                  width: X ? 11 : 20,
                                  height: X ? 11 : 20,
                                })
                              : (null == t ? void 0 : t.name) ===
                                y.r.BITGET_WALLET
                              ? (0, r.jsx)(l(), {
                                  style: { marginRight: "10px" },
                                  width: 20,
                                  height: 20,
                                  src: R.Z,
                                  alt: "bitget-wallet",
                                })
                              : "",
                            X ? e.substring(0, 5) : e.substring(0, 6),
                            "....",
                            X
                              ? e.substring(e.length - 3)
                              : e.substring(e.length - 4),
                          ],
                        }),
                      }),
                      Z
                        ? (0, r.jsx)(J, {
                            token: "evm",
                            ref: C,
                            children: (0, r.jsxs)(g.JX, {
                              children: [
                                (0, r.jsx)(u.Z, {
                                  style: {
                                    alignSelf: "stretch",
                                    marginBottom: "10px",
                                  },
                                  onClick: () => {
                                    navigator.clipboard.writeText(e),
                                      w.Z.setToastMessage({
                                        message: "Address copied",
                                        type: "SUCCESS",
                                      }),
                                      v(!1);
                                  },
                                  children: (0, r.jsxs)(g.X2, {
                                    children: [
                                      (0, r.jsx)(f.CK, {}),
                                      (0, r.jsx)(U, {
                                        children: "Copy Address",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)(u.Z, {
                                  style: {
                                    alignSelf: "stretch",
                                    marginBottom: "10px",
                                  },
                                  onClick: () => {
                                    b.Z.setTransactionHistory(!0), v(!1);
                                  },
                                  children: (0, r.jsxs)(g.X2, {
                                    children: [
                                      (0, r.jsx)(f.Ay, {}),
                                      (0, r.jsx)(U, {
                                        children: "Transactions",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)(u.Z, {
                                  onClick: () => {
                                    window.open(
                                      "".concat(
                                        (0, B.mv)(e, null == i ? void 0 : i.id)
                                      )
                                    ),
                                      v(!1);
                                  },
                                  style: {
                                    alignSelf: "stretch",
                                    marginBottom: "10px",
                                  },
                                  children: (0, r.jsxs)(g.X2, {
                                    children: [
                                      (0, r.jsx)(f.dL, {}),
                                      (0, r.jsx)(U, {
                                        children: "View in Explorer",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)(u.Z, {
                                  onClick: () => {
                                    k(), v(!1);
                                  },
                                  style: { alignSelf: "stretch" },
                                  children: (0, r.jsxs)(g.X2, {
                                    children: [
                                      (0, r.jsx)(f.cH, {}),
                                      (0, r.jsx)(U, { children: "Disconnect" }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          })
                        : null,
                    ],
                  })
                : n && i && !(0, j.c)().includes(i.id)
                ? (0, r.jsx)(u.Z, {
                    onClick: () => {
                      (0, j.c)().includes(7001) ? h(7001) : h(5);
                    },
                    style: { marginLeft: "15px" },
                    children: (0, r.jsxs)(Q, {
                      children: [
                        (0, r.jsx)(f.ge, {
                          width: X ? 11 : 20,
                          height: X ? 11 : 20,
                          style: { marginRight: "8px" },
                        }),
                        "Change network",
                      ],
                    }),
                  })
                : (0, r.jsx)(u.Z, {
                    onClick: () => {
                      if (X) {
                        w.Z.setBottomsheetOpen(!0),
                          w.Z.setWalletConnectBottomsheet(!0);
                        return;
                      }
                      w.Z.setWalletConnectOpen(!0);
                    },
                    children: (0, r.jsx)(ee, { children: "Connect wallet" }),
                  }),
            ],
          });
        })
      );
    },
    69159: function () {},
    18971: function () {},
  },
]);
