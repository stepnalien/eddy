(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    48312: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(68676);
        },
      ]);
    },
    68676: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return cX;
          },
        });
      var i = t(82729),
        a = t(85893),
        r = t(41686),
        o = t(67294),
        s = t(29323),
        l = t(70853),
        c = t(88533);
      function x() {
        let n = (0, i._)(["\n  color: white;\n  ", "\n"]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      let d = r.zo.div(x(), c.qf);
      var p = (0, s.f3)("appStore")(
          (0, s.Pi)(() =>
            (0, a.jsx)(a.Fragment, {
              children:
                "Pool" === l.Z.activeTab
                  ? (0, a.jsx)(d, { children: "Pool Page" })
                  : null,
            })
          )
        ),
        m = t(57764),
        u = t(91653),
        k = t(69077),
        h = t(82623),
        f = (n) => {
          let { username: e, saturation: t } = n,
            i = (0, o.useMemo)(
              () =>
                "data:image/svg+xml;utf8," + encodeURIComponent((0, h.Y)(e, t)),
              [e, t]
            );
          return (0, a.jsx)("img", { src: i, alt: e, ...n });
        },
        y = t(97562);
      function g() {
        let n = (0, i._)([""]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        let n = (0, i._)([
          "\n  display: flex;\n  width: 45px;\n  background-color: ",
          ";\n  justify-content: center;\n  align-items: center;\n  max-width: 45px;\n  @media screen and (max-width: 940px) {\n    max-width: 40px;\n  }\n",
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      function A() {
        let n = (0, i._)([
          "\n  ",
          "\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (A = function () {
            return n;
          }),
          n
        );
      }
      function Z() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  padding: 15px 32px;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 15px;\n  flex: 1;\n  background-color: ",
          ";\n  @media screen and (max-width: 940px) {\n    padding: 5px 10px;\n    margin-left: 5px;\n  }\n",
        ]);
        return (
          (Z = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        let n = (0, i._)([
          "\n  ",
          "\n  margin-left: 100px;\n  @media screen and (max-width: 940px) {\n    margin-left: 10px;\n  }\n",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function j() {
        let n = (0, i._)([
          "\n  ",
          "\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (j = function () {
            return n;
          }),
          n
        );
      }
      let S = r.ZP.div(g()),
        E = r.ZP.div(w(), (n) => (n.activeuser ? m.O.shade8 : m.O.shade7)),
        v = r.ZP.span(A(), c.tQ, c.DF),
        P = r.ZP.div(Z(), (n) => (n.activeuser ? m.O.shade8 : m.O.shade7)),
        B = r.ZP.span(b(), c.cV),
        D = r.ZP.span(j(), c.cV, c.w2);
      var T = (n) => {
          let e = window.innerWidth,
            t = !1;
          return (
            e <= 940 && (t = !0),
            (0, a.jsxs)(S, {
              style: {
                display: "flex",
                flexDirection: "row",
                maxHeight: "40px",
                marginTop: "10px",
              },
              children: [
                (0, a.jsx)(E, {
                  activeuser: n.currentUser,
                  children: (0, a.jsx)(S, {
                    style: { display: "block" },
                    children: (0, a.jsx)(v, {
                      children: (0, y.z8)(n.userData.rankOfUser),
                    }),
                  }),
                }),
                (0, a.jsxs)(P, {
                  activeuser: n.currentUser,
                  children: [
                    (0, a.jsxs)(S, {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      },
                      children: [
                        (0, a.jsx)(S, {
                          style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          },
                          children: (0, a.jsx)(f, {
                            width: t ? "24px" : "35px",
                            height: t ? "24px" : "35px",
                            username: n.userData.walletAddress,
                          }),
                        }),
                        (0, a.jsx)(B, {
                          children: (0, y.fj)(n.userData.walletAddress),
                        }),
                      ],
                    }),
                    (0, a.jsx)(S, {
                      style: { display: "flex" },
                      children: (0, a.jsx)(D, { children: n.userData.points }),
                    }),
                  ],
                }),
              ],
            })
          );
        },
        C = t(19084);
      function _() {
        let n = (0, i._)([""]);
        return (
          (_ = function () {
            return n;
          }),
          n
        );
      }
      function F() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  width: 100%;\n",
        ]);
        return (
          (F = function () {
            return n;
          }),
          n
        );
      }
      function R() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  flex: 0.36;\n  padding: 22px 40px;\n  border: 1px solid ",
          ";\n  background-color: ",
          ";\n  @media screen and (max-width: 940px) {\n    padding: 7.5px 9.3px;\n    background-color: ",
          ";\n  }\n  \n",
        ]);
        return (
          (R = function () {
            return n;
          }),
          n
        );
      }
      function V() {
        let n = (0, i._)(["\n  display: flex;\n  flex: 0.05;\n"]);
        return (
          (V = function () {
            return n;
          }),
          n
        );
      }
      function I() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  flex: 0.27;\n  padding: 22px 40px;\n  border: 1px solid ",
          ";\n  background-color: ",
          ";\n  @media screen and (max-width: 940px) {\n    padding: 7.5px 9.3px;\n    background-color: ",
          ";\n  }\n",
        ]);
        return (
          (I = function () {
            return n;
          }),
          n
        );
      }
      function G() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  flex: 0.27;\n  padding: 22px 40px;\n  border: 1px solid ",
          ";\n  background-color: ",
          ";\n  @media screen and (max-width: 940px) {\n    padding: 7.5px 9.3px;\n    background-color: ",
          ";\n  }\n",
        ]);
        return (
          (G = function () {
            return n;
          }),
          n
        );
      }
      function O() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 0.5;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (O = function () {
            return n;
          }),
          n
        );
      }
      function N() {
        let n = (0, i._)([
          "\n  ",
          "\n  line-height: 35px;\n  margin-right: 30px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n    line-height: 18px;\n  }\n\n",
        ]);
        return (
          (N = function () {
            return n;
          }),
          n
        );
      }
      function L() {
        let n = (0, i._)([
          "\n  display: flex;\n  margin-top: 15px;\n  flex-direction: row;\n  align-items: center\n  flex-direction: column;\n  @media screen and (max-width: 940px) {\n    margin-top: 5px\n  }\n",
        ]);
        return (
          (L = function () {
            return n;
          }),
          n
        );
      }
      let M = r.ZP.div(_()),
        U = r.ZP.div(F()),
        W = r.ZP.div(R(), m.O.shade7, m.O.shade16, m.O.shade5),
        H = r.ZP.div(V()),
        z = r.ZP.div(I(), m.O.shade7, m.O.shade16, m.O.shade5),
        Y = r.ZP.div(G(), m.O.shade7, m.O.shade16, m.O.shade5),
        q = r.ZP.span(O(), c.cV, c.jY),
        K = r.ZP.span(N(), c.Aq, c.ny),
        Q = r.ZP.div(L());
      var X = (n) => {
          let { address: e } = (0, k.mA)();
          return (0, a.jsxs)(U, {
            children: [
              (0, a.jsxs)(W, {
                children: [
                  (0, a.jsx)(q, { children: "Your total points" }),
                  (0, a.jsx)(Q, {
                    children: e
                      ? (0, a.jsx)(M, {
                          children: n.userRewardData
                            ? (0, a.jsx)(K, {
                                children: n.userRewardData.points,
                              })
                            : (0, a.jsx)(C.Z, {
                                width: "50px",
                                height: "20px",
                              }),
                        })
                      : (0, a.jsx)(K, { children: "0" }),
                  }),
                ],
              }),
              (0, a.jsx)(H, {}),
              (0, a.jsxs)(z, {
                children: [
                  (0, a.jsx)(q, { children: "Trade points" }),
                  (0, a.jsx)(Q, {
                    children: e
                      ? (0, a.jsx)(M, {
                          children: n.userRewardData
                            ? (0, a.jsx)(K, {
                                children: n.userRewardData.swapPoints,
                              })
                            : (0, a.jsx)(C.Z, {
                                width: "50px",
                                height: "20px",
                              }),
                        })
                      : (0, a.jsx)(K, { children: "-" }),
                  }),
                ],
              }),
              (0, a.jsx)(H, {}),
              (0, a.jsxs)(Y, {
                children: [
                  (0, a.jsx)(q, { children: "Referral points" }),
                  (0, a.jsx)(Q, {
                    children: e
                      ? (0, a.jsx)(M, {
                          children: n.userRewardData
                            ? (0, a.jsx)(K, {
                                children: n.userRewardData.referralPoints,
                              })
                            : (0, a.jsx)(C.Z, {
                                width: "50px",
                                height: "20px",
                              }),
                        })
                      : (0, a.jsx)(K, { children: "-" }),
                  }),
                ],
              }),
            ],
          });
        },
        J = t(25675),
        $ = t.n(J),
        nn = {
          src: "/_next/static/media/claim-nft-new-asset.a152668a.svg",
          height: 94,
          width: 95,
          blurWidth: 0,
          blurHeight: 0,
        },
        ne = {
          src: "/_next/static/media/swap-new-asset.17308771.svg",
          height: 60,
          width: 68,
          blurWidth: 0,
          blurHeight: 0,
        },
        nt = {
          src: "/_next/static/media/refer-new-asset.8992112c.svg",
          height: 71,
          width: 76,
          blurWidth: 0,
          blurHeight: 0,
        };
      function ni() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-top: 30px;\n  @media screen and (max-width: 940px) {\n    margin-top: 0;\n  }\n",
        ]);
        return (
          (ni = function () {
            return n;
          }),
          n
        );
      }
      function na() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  @media screen and (max-width: 940px) {\n    flex-direction: row;\n  }\n",
        ]);
        return (
          (na = function () {
            return n;
          }),
          n
        );
      }
      function nr() {
        let n = (0, i._)([
          "\n  position: relative;\n  width: 100%;\n  margin-top: 30px;\n  background-color: ",
          ";\n  height: 80px;\n  display: flex;\n  align-items: center;\n  @media screen and (max-width: 940px) {\n    height: 120px;\n    align-items: flex-start;\n    margin-top: 10px;\n  }\n",
        ]);
        return (
          (nr = function () {
            return n;
          }),
          n
        );
      }
      function no() {
        let n = (0, i._)([
          "\n  position: relative;\n  background-color: ",
          ";\n  height: 80px;\n  display: flex;\n  align-items: center;\n  @media screen and (max-width: 940px) {\n    height: 120px;\n    align-items: flex-start;\n    width: 50%;\n  }\n",
        ]);
        return (
          (no = function () {
            return n;
          }),
          n
        );
      }
      function ns() {
        let n = (0, i._)([
          "\n  position: relative;\n  background-color: ",
          ";\n  height: 80px;\n  display: flex;\n  align-items: center;\n  margin-top: 30px;\n  @media screen and (max-width: 940px) {\n    height: 120px;\n    align-items: flex-start;\n    margin-top: 0;\n    margin-left: 10px;\n    width: 50%;\n  }\n",
        ]);
        return (
          (ns = function () {
            return n;
          }),
          n
        );
      }
      function nl() {
        let n = (0, i._)([
          "\n  width: 100%;\n  margin-left: 20px;\n  @media screen and (max-width: 940px) {\n    margin-left: 10px;\n    margin-top: 10px;\n    width: 84px;\n  }\n",
        ]);
        return (
          (nl = function () {
            return n;
          }),
          n
        );
      }
      function nc() {
        let n = (0, i._)([
          "\n  width: 100%;\n  margin-left: 20px;\n  @media screen and (max-width: 940px) {\n    margin-left: 10px;\n    margin-top: 10px;\n    width: 102px;\n  }\n",
        ]);
        return (
          (nc = function () {
            return n;
          }),
          n
        );
      }
      function nx() {
        let n = (0, i._)([
          "\n  ",
          "\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (nx = function () {
            return n;
          }),
          n
        );
      }
      function nd() {
        let n = (0, i._)([
          "\n  width: 100%;\n  margin-left: 20px;\n  @media screen and (max-width: 940px) {\n    margin-left: 10px;\n    margin-top: 10px;\n    width: 142px;\n  }\n",
        ]);
        return (
          (nd = function () {
            return n;
          }),
          n
        );
      }
      function np() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5;\n"]);
        return (
          (np = function () {
            return n;
          }),
          n
        );
      }
      function nm() {
        let n = (0, i._)(["\n  opacity: 0.5;\n"]);
        return (
          (nm = function () {
            return n;
          }),
          n
        );
      }
      let nu = r.ZP.div(ni()),
        nk = r.ZP.div(na()),
        nh = r.ZP.div(nr(), m.O.shade7),
        nf = r.ZP.div(no(), m.O.shade7),
        ny = r.ZP.div(ns(), m.O.shade7),
        ng = r.ZP.div(nl()),
        nw = r.ZP.div(nc()),
        nA = r.ZP.span(nx(), c.EP, c.fy),
        nZ = r.ZP.div(nd());
      r.ZP.span(np(), c.jJ);
      let nb = r.ZP.span(nm());
      var nj = () =>
        (0, a.jsxs)(nu, {
          children: [
            (0, a.jsxs)(nk, {
              children: [
                (0, a.jsxs)(nf, {
                  children: [
                    (0, a.jsx)(ng, {
                      children: (0, a.jsxs)(nA, {
                        children: [
                          "Earn 1000 Eddy Points",
                          " ",
                          (0, a.jsx)(nb, { children: "with every referral" }),
                        ],
                      }),
                    }),
                    (0, a.jsx)($(), {
                      style: { position: "absolute", bottom: 0, right: 0 },
                      src: nt,
                      alt: "refer-friend",
                    }),
                  ],
                }),
                (0, a.jsxs)(ny, {
                  children: [
                    (0, a.jsx)(nw, {
                      children: (0, a.jsxs)(nA, {
                        children: [
                          "Win 200 points daily",
                          " ",
                          (0, a.jsx)(nb, { children: "by swapping every day" }),
                        ],
                      }),
                    }),
                    (0, a.jsx)($(), {
                      style: { position: "absolute", bottom: 0, right: 0 },
                      src: ne,
                      alt: "swap-asset",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsxs)(nh, {
              children: [
                (0, a.jsx)(nZ, {
                  children: (0, a.jsxs)(nA, {
                    children: [
                      "Claim free NFTs with",
                      " ",
                      (0, a.jsx)(nb, {
                        children: "your EP from rare glass bottles",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)($(), {
                  style: { position: "absolute", bottom: 0, right: 0 },
                  src: nn,
                  alt: "claim-nft",
                }),
              ],
            }),
          ],
        });
      function nS() {
        let n = (0, i._)([""]);
        return (
          (nS = function () {
            return n;
          }),
          n
        );
      }
      function nE() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  box-shadow: 0px 13px ",
          ";\n  @media screen and (max-width: 940px) {\n    box-shadow: none;\n  }\n",
        ]);
        return (
          (nE = function () {
            return n;
          }),
          n
        );
      }
      function nv() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 0.05;\n  @media screen and (max-width: 940px) {\n    display: none;\n  }\n",
        ]);
        return (
          (nv = function () {
            return n;
          }),
          n
        );
      }
      function nP() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  flex: 0.8;\n  background-color: ",
          ";\n  padding: 0px 30px;\n  @media screen and (max-width: 940px) {\n    padding: 20px 20px;\n    flex: 0;\n    background-color: #1d1d1d;\n    box-shadow: 0px 8px ",
          ";\n  }\n",
        ]);
        return (
          (nP = function () {
            return n;
          }),
          n
        );
      }
      function nB() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n",
        ]);
        return (
          (nB = function () {
            return n;
          }),
          n
        );
      }
      function nD() {
        let n = (0, i._)([
          "\n  ",
          "\n  line-height: 30px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n    line-height: 27px;\n  }\n",
        ]);
        return (
          (nD = function () {
            return n;
          }),
          n
        );
      }
      function nT() {
        let n = (0, i._)(["\n  ", "\n  color: #000\n"]);
        return (
          (nT = function () {
            return n;
          }),
          n
        );
      }
      function nC() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5\n"]);
        return (
          (nC = function () {
            return n;
          }),
          n
        );
      }
      function n_() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  @media screen and (max-width: 940px) {\n    display: flex;\n  }\n",
        ]);
        return (
          (n_ = function () {
            return n;
          }),
          n
        );
      }
      function nF() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 27px\n",
        ]);
        return (
          (nF = function () {
            return n;
          }),
          n
        );
      }
      function nR() {
        let n = (0, i._)(["\n  display: flex;\n  flex-direction: column;\n"]);
        return (
          (nR = function () {
            return n;
          }),
          n
        );
      }
      function nV() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5\n"]);
        return (
          (nV = function () {
            return n;
          }),
          n
        );
      }
      function nI() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  flex: 0.15;\n  @media screen and (max-width: 940px) {\n    display: none;\n  }\n",
        ]);
        return (
          (nI = function () {
            return n;
          }),
          n
        );
      }
      let nG = r.ZP.div(nS()),
        nO = r.ZP.div(nE(), m.O.shade6),
        nN = r.ZP.div(nv()),
        nL = r.ZP.div(nP(), m.O.shade2, m.O.shadowPhone),
        nM = r.ZP.div(nB()),
        nU = r.ZP.span(nD(), c.IE, c.ny);
      r.ZP.span(nT(), c.EP), r.ZP.span(nC(), c.EP);
      let nW = r.ZP.div(n_()),
        nH = r.ZP.div(nF()),
        nz = r.ZP.div(nR()),
        nY = r.ZP.span(nV(), c.w2),
        nq = r.ZP.div(nI());
      var nK = (n) => {
          let { address: e } = (0, k.mA)();
          return (
            window.innerWidth,
            (0, a.jsxs)(nO, {
              children: [
                (0, a.jsx)(nq, {
                  children: (0, a.jsx)(X, {
                    userRewardData: n.userRankDetails,
                  }),
                }),
                (0, a.jsx)(nN, {}),
                (0, a.jsx)(nL, {
                  children: e
                    ? (0, a.jsxs)(nG, {
                        style: { display: "flex", flexDirection: "column" },
                        children: [
                          (0, a.jsx)(nM, {
                            children: (0, a.jsx)(nU, {
                              children: "Leaderboard",
                            }),
                          }),
                          (0, a.jsxs)(nW, {
                            children: [
                              (0, a.jsxs)(nH, {
                                children: [
                                  (0, a.jsxs)(nG, {
                                    style: {
                                      display: "flex",
                                      flexDirection: "row",
                                    },
                                    children: [
                                      (0, a.jsx)(nG, {
                                        style: {
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          marginLeft: "15%",
                                        },
                                        children: (0, a.jsx)(nY, {
                                          children: "Rank",
                                        }),
                                      }),
                                      (0, a.jsx)(nG, {
                                        style: {
                                          display: "flex",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          marginLeft: "110%",
                                        },
                                        children: (0, a.jsx)(nY, {
                                          children: "User",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)(nG, {
                                    style: {
                                      display: "flex",
                                      paddingRight: "3.5%",
                                      justifyContent: "center",
                                      alignItems: "center",
                                    },
                                    children: (0, a.jsx)(nY, {
                                      children: "Points",
                                    }),
                                  }),
                                ],
                              }),
                              (0, a.jsx)(nz, {
                                children: n.top5Currents
                                  ? (0, a.jsx)(nG, {
                                      children: n.top5Currents.map((e, t) =>
                                        (0, a.jsx)(
                                          T,
                                          {
                                            userData: e,
                                            currentUser:
                                              e.walletAddress ===
                                              n.userRankDetails.walletAddress
                                                ? 1
                                                : 0,
                                          },
                                          t
                                        )
                                      ),
                                    })
                                  : (0, a.jsx)(nG, {
                                      style: { width: "100%" },
                                      children: [1, 2, 3, 4].map((n, e) =>
                                        (0, a.jsx)(
                                          nG,
                                          {
                                            style: { marginTop: "10px" },
                                            children: (0, a.jsx)(C.Z, {
                                              width: "100%",
                                              height: "40px",
                                            }),
                                          },
                                          e
                                        )
                                      ),
                                    }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, a.jsx)(nj, {}),
                }),
              ],
            })
          );
        },
        nQ = t(29760),
        nX = {
          src: "/_next/static/media/connect-wallet.4d1d3735.svg",
          height: 66,
          width: 67,
          blurWidth: 0,
          blurHeight: 0,
        };
      function nJ() {
        let n = (0, i._)([""]);
        return (
          (nJ = function () {
            return n;
          }),
          n
        );
      }
      function n$() {
        let n = (0, i._)([
          "\n    display: flex;\n    width: 100%;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    background-image: url(",
          ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    @media screen and (max-width: 940px) {\n      background-image: url(",
          ");\n      padding: 48px 0px;\n      box-shadow: 0px 8px ",
          ";\n      margin-bottom: 23px;\n      border: 1px solid ",
          ";\n\n    }\n",
        ]);
        return (
          (n$ = function () {
            return n;
          }),
          n
        );
      }
      function n0() {
        let n = (0, i._)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 35px;\n  background-color: ",
          ";\n  border-radius: 20px;\n  padding: 0px 14px;\n  @media screen and (max-width: 940px) {\n    background-color: transparent;\n    border: 1px solid ",
          ";\n  }\n",
        ]);
        return (
          (n0 = function () {
            return n;
          }),
          n
        );
      }
      function n1() {
        let n = (0, i._)([
          "\n  ",
          "\n  color: #000;\n  @media screen and (max-width: 940px) {\n    color: ",
          "\n  }\n",
        ]);
        return (
          (n1 = function () {
            return n;
          }),
          n
        );
      }
      function n2() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (n2 = function () {
            return n;
          }),
          n
        );
      }
      let n5 = r.ZP.div(nJ()),
        n4 = r.ZP.div(
          n$(),
          "/_next/static/media/no-wallet-bg.018495e9.png",
          "/_next/static/media/no-wallet-phone-bg.6a665286.png",
          m.O.shadowPhone,
          m.O.shade5
        ),
        n8 = r.ZP.div(n0(), m.O.background, m.O.background),
        n3 = r.ZP.span(n1(), c.ww, m.O.background),
        n6 = r.ZP.span(n2(), c.MU);
      var n9 = (0, s.f3)("appStore")(
        (0, s.Pi)(() => {
          let n = window.innerWidth,
            e = !1;
          return (
            n <= 940 && (e = !0),
            (0, a.jsxs)(n4, {
              children: [
                (0, a.jsx)($(), {
                  priority: !0,
                  src: nX,
                  alt: "connect-wallet",
                }),
                (0, a.jsx)(n5, {
                  style: { marginTop: "15px" },
                  children: (0, a.jsx)(n6, {
                    children: "Connect wallet to see your rewards",
                  }),
                }),
                (0, a.jsx)(nQ.Z, {
                  style: { marginTop: "25px" },
                  onClick: () => {},
                  children: (0, a.jsx)(n8, {
                    onClick: () => {
                      if (e) {
                        l.Z.setBottomsheetOpen(!0),
                          l.Z.setWalletConnectBottomsheet(!0);
                        return;
                      }
                      l.Z.setWalletConnectOpen(!0);
                    },
                    children: (0, a.jsx)(n3, { children: "Connect wallet" }),
                  }),
                }),
              ],
            })
          );
        })
      );
      function n7() {
        let n = (0, i._)([""]);
        return (
          (n7 = function () {
            return n;
          }),
          n
        );
      }
      function en() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 1;\n  padding: 20px;\n  flex-direction: column;\n  background-color: ",
          ";\n  box-shadow: 0px 13px ",
          ";\n  @media screen and (max-width: 940px) {\n    margin-bottom: 21px;\n    box-shadow: 0px 8px ",
          ";\n  }\n\n",
        ]);
        return (
          (en = function () {
            return n;
          }),
          n
        );
      }
      function ee() {
        let n = (0, i._)(["\n  display: flex;\n  flex: 0.3;\n"]);
        return (
          (ee = function () {
            return n;
          }),
          n
        );
      }
      function et() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 0.3;\n  background-color: ",
          ";\n  padding: 25px 45px;\n  flex-direction: column;\n",
        ]);
        return (
          (et = function () {
            return n;
          }),
          n
        );
      }
      function ei() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n",
        ]);
        return (
          (ei = function () {
            return n;
          }),
          n
        );
      }
      function ea() {
        let n = (0, i._)([
          "\n  ",
          "\n  margin-left: 15px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (ea = function () {
            return n;
          }),
          n
        );
      }
      function er() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  margin-top: 15px;\n  align-items: center;\n",
        ]);
        return (
          (er = function () {
            return n;
          }),
          n
        );
      }
      function eo() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 0.5;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (eo = function () {
            return n;
          }),
          n
        );
      }
      function es() {
        let n = (0, i._)([
          "\n  ",
          "\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (es = function () {
            return n;
          }),
          n
        );
      }
      function el() {
        let n = (0, i._)([
          "\n  display: flex;\n  width: 100%;\n  height: 15px;\n  background-color: ",
          ";\n",
        ]);
        return (
          (el = function () {
            return n;
          }),
          n
        );
      }
      function ec() {
        let n = (0, i._)([
          "\n    0% {\n        background-color: ",
          "\n    }\n    100% {\n        background-color: #FFF\n    }\n",
        ]);
        return (
          (ec = function () {
            return n;
          }),
          n
        );
      }
      function ex() {
        let n = (0, i._)([
          "\n  display: flex;\n  width: ",
          ";\n  height: 100%;\n  backgroundcolor: ",
          ";\n  animation: ",
          " 0.5s linear infinite alternate;\n",
        ]);
        return (
          (ex = function () {
            return n;
          }),
          n
        );
      }
      function ed() {
        let n = (0, i._)(["\n  ", "\n  color: ", "\n"]);
        return (
          (ed = function () {
            return n;
          }),
          n
        );
      }
      function ep() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5\n"]);
        return (
          (ep = function () {
            return n;
          }),
          n
        );
      }
      function em() {
        let n = (0, i._)([
          "\n  display: flex;\n  margin-top: 20px;\n  flex-direction: row;\n  overflow-x: auto;\n  width: 100%;\n  max-width: 450px;\n  padding: 0px 0px 20px 0px;\n",
        ]);
        return (
          (em = function () {
            return n;
          }),
          n
        );
      }
      function eu() {
        let n = (0, i._)(["\n  ", "\n  color: ", "\n"]);
        return (
          (eu = function () {
            return n;
          }),
          n
        );
      }
      function ek() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 0.45;\n  padding: 14px 0px;\n  background-color: transparent;\n  justify-content: center;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  cursor: pointer;\n",
        ]);
        return (
          (ek = function () {
            return n;
          }),
          n
        );
      }
      function eh() {
        let n = (0, i._)(["\n  ", "\n  color: #fff;\n  opacity: 0.5;\n"]);
        return (
          (eh = function () {
            return n;
          }),
          n
        );
      }
      function ef() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 0.45;\n  padding: 14px 0px;\n  background-color: ",
          ";\n  justify-content: center;\n  cursor: pointer;\n",
        ]);
        return (
          (ef = function () {
            return n;
          }),
          n
        );
      }
      function ey() {
        let n = (0, i._)(["\n  display: flex;\n  flex: 0.1;\n"]);
        return (
          (ey = function () {
            return n;
          }),
          n
        );
      }
      function eg() {
        let n = (0, i._)([
          "\n    display: none;\n    @media screen and (max-width: 940px) {\n      display: flex;\n      flex-direction: row;\n      margin-top: 15px\n    }\n",
        ]);
        return (
          (eg = function () {
            return n;
          }),
          n
        );
      }
      let ew = r.ZP.div(n7()),
        eA = r.ZP.div(en(), m.O.shade2, m.O.shade6, m.O.shadowPhone);
      r.ZP.div(ee()), r.ZP.div(et(), m.O.shade2);
      let eZ = r.ZP.div(ei()),
        eb = r.ZP.span(ea(), c.sj, c.pm),
        ej = r.ZP.div(er()),
        eS = r.ZP.span(eo(), c.Ir, c.w2),
        eE = r.ZP.span(es(), c.Ir, c.w2),
        ev = r.ZP.div(el(), m.O.shade5),
        eP = (0, r.F4)(ec(), m.O.shade15),
        eB = r.ZP.div(
          ex(),
          (n) => (n.widthoftracker ? "".concat(n.widthoftracker, "%") : "0%"),
          m.O.background,
          eP
        );
      r.ZP.span(ed(), c.ih, m.O.shade2),
        r.ZP.span(ep(), c.Ir),
        r.ZP.div(em()),
        r.ZP.span(eu(), c.nL, m.O.background),
        r.ZP.div(ek()),
        r.ZP.span(eh(), c.nL),
        r.ZP.div(ef(), m.O.background),
        r.ZP.div(ey());
      let eD = r.ZP.div(eg());
      var eT = (0, s.f3)(
          "appStore",
          "transferStore"
        )(
          (0, s.Pi)((n) => {
            var e, t, i, r;
            let { address: o } = (0, k.mA)();
            return (
              window.innerWidth,
              (0, a.jsxs)(eA, {
                children: [
                  (0, a.jsxs)(eZ, {
                    children: [
                      n.userBadge
                        ? (0, a.jsx)($(), {
                            width: 45,
                            height: 45,
                            priority: !0,
                            src:
                              null === (e = n.userBadge) || void 0 === e
                                ? void 0
                                : e.badgeAsset,
                            alt: "level-asset",
                          })
                        : (0, a.jsx)(C.Z, { width: "45px", height: "48px" }),
                      (0, a.jsx)(eb, {
                        children: n.userBadge
                          ? (0, a.jsx)(a.Fragment, {
                              children:
                                null === (t = n.userBadge) || void 0 === t
                                  ? void 0
                                  : t.badgeLabel,
                            })
                          : (0, a.jsx)(C.Z, { width: "50px", height: "20px" }),
                      }),
                    ],
                  }),
                  n.userBadge
                    ? (0, a.jsxs)(ew, {
                        children: [
                          (0, a.jsxs)(ej, {
                            children: [
                              (0, a.jsx)(eS, { children: "Next reward:\xa0" }),
                              (0, a.jsxs)(eE, {
                                children: [
                                  (null === (i = n.nextBadge) || void 0 === i
                                    ? void 0
                                    : i.lowerLimit) - 1,
                                  " Eddy points",
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)(ew, {
                            style: {
                              display: "flex",
                              height: "56px",
                              position: "relative",
                              alignItems: "center",
                            },
                            children: [
                              (0, a.jsx)(ev, {
                                children: (0, a.jsx)(eB, {
                                  widthoftracker: (() => {
                                    var e, t, i, a;
                                    let r =
                                      ((null === (e = n.userBadge) ||
                                      void 0 === e
                                        ? void 0
                                        : e.upperLimit) -
                                        (null === (t = n.userRankDetails) ||
                                        void 0 === t
                                          ? void 0
                                          : t.points)) /
                                      ((null === (i = n.userBadge) ||
                                      void 0 === i
                                        ? void 0
                                        : i.upperLimit) -
                                        (null === (a = n.userBadge) ||
                                        void 0 === a
                                          ? void 0
                                          : a.lowerLimit));
                                    return (1 - r) * 100;
                                  })(),
                                }),
                              }),
                              (0, a.jsx)($(), {
                                style: {
                                  position: "absolute",
                                  right: 0,
                                  bottom: 12,
                                },
                                width: 38,
                                height: 38,
                                priority: !0,
                                src:
                                  null === (r = n.nextBadge) || void 0 === r
                                    ? void 0
                                    : r.badgeAsset,
                                alt: "tracker-badge",
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, a.jsx)(ew, {
                        style: { marginTop: "20px" },
                        children: (0, a.jsx)(C.Z, {
                          width: "300px",
                          height: "100px",
                        }),
                      }),
                  (0, a.jsx)(eD, {
                    children: (0, a.jsx)(X, {
                      userRewardData: n.userRankDetails,
                    }),
                  }),
                ],
              })
            );
          })
        ),
        eC = {
          src: "/_next/static/media/refer-friend-guide.8f4a2ecd.svg",
          height: 22,
          width: 22,
          blurWidth: 0,
          blurHeight: 0,
        },
        e_ = {
          src: "/_next/static/media/swap-guide.8045cf5f.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        eF = {
          src: "/_next/static/media/claim-nft-guide.44b56ca5.svg",
          height: 31,
          width: 22,
          blurWidth: 0,
          blurHeight: 0,
        };
      function eR() {
        let n = (0, i._)([""]);
        return (
          (eR = function () {
            return n;
          }),
          n
        );
      }
      function eV() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 1;\n  padding: 20px;\n  flex-direction: column;\n  background-color: ",
          ";\n  box-shadow: 0px 10px ",
          ";\n  justify-content: space-between;\n  @media screen and (max-width: 940px) {\n    box-shadow: 0px 8px ",
          ";\n    margin-bottom: 21px;\n  }\n",
        ]);
        return (
          (eV = function () {
            return n;
          }),
          n
        );
      }
      function eI() {
        let n = (0, i._)([
          "\n  display: flex;\n  width: 60%;\n  @media screen and (max-width: 940px) {\n    width: 70%\n  }\n",
        ]);
        return (
          (eI = function () {
            return n;
          }),
          n
        );
      }
      function eG() {
        let n = (0, i._)([
          "\n  ",
          "\n  line-height: 30px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n    line-height: 27px;\n  }\n",
        ]);
        return (
          (eG = function () {
            return n;
          }),
          n
        );
      }
      function eO() {
        let n = (0, i._)(["\n  ", "\n  line-height: 30px\n"]);
        return (
          (eO = function () {
            return n;
          }),
          n
        );
      }
      function eN() {
        let n = (0, i._)([
          "\n  display: flex;\n  margin-top: 20px;\n  flex-direction: column;\n",
        ]);
        return (
          (eN = function () {
            return n;
          }),
          n
        );
      }
      function eL() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  width: 75%;\n  @media screen and (max-width: 940px) {\n    width: 100%\n  }\n",
        ]);
        return (
          (eL = function () {
            return n;
          }),
          n
        );
      }
      function eM() {
        let n = (0, i._)([
          "\n  ",
          "\n  line-height: 24px;\n  opacity: 0.4;\n  margin-left: 16px;\n",
        ]);
        return (
          (eM = function () {
            return n;
          }),
          n
        );
      }
      function eU() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (eU = function () {
            return n;
          }),
          n
        );
      }
      function eW() {
        let n = (0, i._)(["\n  ", "\n  color: ", "\n"]);
        return (
          (eW = function () {
            return n;
          }),
          n
        );
      }
      let eH = r.ZP.div(eR()),
        ez = r.ZP.div(eV(), m.O.shade2, m.O.shade6, m.O.shadowPhone),
        eY = r.ZP.div(eI()),
        eq = r.ZP.span(eG(), c.B0, c.ny),
        eK = r.ZP.span(eO(), c.Cw),
        eQ = r.ZP.div(eN()),
        eX = r.ZP.div(eL()),
        eJ = r.ZP.span(eM(), c.w2),
        e$ = r.ZP.span(eU(), c.DF),
        e0 = r.ZP.span(eW(), c.Bj, m.O.shade2);
      var e1 = (0, s.f3)(
        "appStore",
        "transferStore"
      )(
        (0, s.Pi)(() => {
          let n = window.innerWidth,
            e = !1;
          return (
            n <= 940 && (e = !0),
            (0, a.jsxs)(ez, {
              children: [
                (0, a.jsxs)(eH, {
                  children: [
                    (0, a.jsx)(eY, {
                      children: (0, a.jsxs)(eq, {
                        children: [
                          "Earn rewards through ",
                          (0, a.jsx)(eK, { children: "Eddy points!" }),
                        ],
                      }),
                    }),
                    (0, a.jsx)(eQ, {
                      children: (0, a.jsxs)(eX, {
                        children: [
                          (0, a.jsx)($(), { src: eC, alt: "refer-friend" }),
                          (0, a.jsx)(eJ, {
                            children:
                              "Refer a friend and gain 1000 Eddy Points.",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)(eQ, {
                      children: (0, a.jsxs)(eX, {
                        children: [
                          (0, a.jsx)($(), { src: e_, alt: "refer-friend" }),
                          (0, a.jsx)(eJ, {
                            children:
                              "Win 200 Eddy Points daily by swapping every day.",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)(eQ, {
                      children: (0, a.jsxs)(eX, {
                        children: [
                          (0, a.jsx)($(), { src: eF, alt: "refer-friend" }),
                          (0, a.jsx)(eJ, {
                            style: { lineHeight: "" },
                            children:
                              "Claim free NFTs from rare glass bottles with your points.",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)(eH, {
                  style: {
                    marginTop: "25px",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  },
                  children: [
                    (0, a.jsx)(eH, {
                      onClick: () => {
                        l.Z.setActiveTab("Transfer");
                      },
                      style: {
                        display: "flex",
                        height: "40px",
                        width: "48%",
                        backgroundColor: "".concat(m.O.shade4),
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      children: (0, a.jsx)(e$, { children: "Swap now" }),
                    }),
                    (0, a.jsx)(eH, {
                      onClick: () => {
                        if (e) {
                          l.Z.setBottomsheetOpen(!0),
                            l.Z.setInviteFriendBottomsheet(!0);
                          return;
                        }
                        l.Z.setInviteFriendOpen(!0);
                      },
                      style: {
                        display: "flex",
                        cursor: "pointer",
                        height: "40px",
                        width: "48%",
                        backgroundColor: "".concat(m.O.background),
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      children: (0, a.jsx)(e0, { children: "Invite a friend" }),
                    }),
                  ],
                }),
              ],
            })
          );
        })
      );
      function e2() {
        let n = (0, i._)([""]);
        return (
          (e2 = function () {
            return n;
          }),
          n
        );
      }
      function e5() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 1;\n  width: 100%;\n  padding: 43px 5% 10% 5%;\n  @media screen and (max-width: 940px) {\n    flex-direction: column;\n    padding: 20px 25px;\n    margin-top: 20px;\n    height: 650px;\n    overflow: auto\n  }\n",
        ]);
        return (
          (e5 = function () {
            return n;
          }),
          n
        );
      }
      function e4() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 0.3;\n  flex-direction: column;\n  @media screen and (max-width: 940px) {\n  }\n",
        ]);
        return (
          (e4 = function () {
            return n;
          }),
          n
        );
      }
      function e8() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  box-shadow: 0px 13px ",
          ";\n  justify-content: center;\n  background-color: ",
          ";\n",
        ]);
        return (
          (e8 = function () {
            return n;
          }),
          n
        );
      }
      function e3() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  flex: ",
          ";\n  position: relative;\n  background-color: ",
          ";\n  box-shadow: 0px 13px ",
          ";\n  padding: 30px 45px;\n",
        ]);
        return (
          (e3 = function () {
            return n;
          }),
          n
        );
      }
      function e6() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 0.05;\n  @media screen and (max-width: 940px) {\n    display: none\n  }\n",
        ]);
        return (
          (e6 = function () {
            return n;
          }),
          n
        );
      }
      function e9() {
        let n = (0, i._)(["\n  ", "\n  color: ", ";\n  margin-right: 5px;\n"]);
        return (
          (e9 = function () {
            return n;
          }),
          n
        );
      }
      let e7 = r.ZP.div(e2()),
        tn = r.ZP.div(e5()),
        te = r.ZP.div(e4()),
        tt = r.ZP.div(e8(), m.O.shade6, (n) =>
          n.connected ? "none" : "rgb(15,15,15, 0.3)"
        );
      r.ZP.div(
        e3(),
        (n) => (n.connected ? "0.2" : "0.1"),
        m.O.shade2,
        m.O.shade6
      );
      let ti = r.ZP.div(e6());
      r.ZP.span(e9(), c.EP, m.O.background);
      var ta = (0, s.f3)("appStore")(
          (0, s.Pi)(() => {
            let { address: n } = (0, k.mA)(),
              [e, t] = (0, o.useState)([]),
              [i, r] = (0, o.useState)(null),
              [s, c] = (0, o.useState)(null),
              [x, d] = (0, o.useState)(null),
              p = async () => {
                let e = await (0, u.PN)(n),
                  {
                    top5Currents: i,
                    userRankDetails: a,
                    userBadge: o,
                    nextBadge: s,
                  } = e;
                r(a), t(i), c(o), d(s);
              };
            return (
              (0, o.useEffect)(() => {
                "Rewards" === l.Z.activeTab && p();
              }, [l.Z.activeTab]),
              (0, a.jsxs)(tn, {
                children: [
                  (0, a.jsx)(te, {
                    children: (0, a.jsx)(tt, {
                      connected: n ? 1 : 0,
                      children: n
                        ? (0, a.jsxs)(e7, {
                            style: {
                              display: "flex",
                              flex: 1,
                              flexDirection: "column",
                            },
                            children: [
                              (0, a.jsx)(e7, {
                                style: { display: "flex", flex: 0.3 },
                                children: (0, a.jsx)(eT, {
                                  userBadge: s,
                                  nextBadge: x,
                                  userRankDetails: i,
                                }),
                              }),
                              (0, a.jsx)(e7, {
                                style: { display: "flex", flex: 0.05 },
                              }),
                              (0, a.jsx)(e7, {
                                style: { display: "flex", flex: 0.65 },
                                children: (0, a.jsx)(e1, {}),
                              }),
                            ],
                          })
                        : (0, a.jsx)(n9, {}),
                    }),
                  }),
                  (0, a.jsx)(ti, {}),
                  (0, a.jsx)(e7, {
                    style: { display: "flex", flex: "0.65" },
                    children: (0, a.jsx)(nK, {
                      top5Currents: e,
                      userRankDetails: i,
                    }),
                  }),
                ],
              })
            );
          })
        ),
        tr = t(90530),
        to = t(72290),
        ts = t(57786),
        tl = t(69355),
        tc = t(45920);
      function tx() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  background-color: ",
          ";\n",
        ]);
        return (
          (tx = function () {
            return n;
          }),
          n
        );
      }
      function td() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n",
        ]);
        return (
          (td = function () {
            return n;
          }),
          n
        );
      }
      function tp() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  margin-top: 15px;\n  align-items: center;\n",
        ]);
        return (
          (tp = function () {
            return n;
          }),
          n
        );
      }
      function tm() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  margin-top: 15px;\n  align-items: center;\n",
        ]);
        return (
          (tm = function () {
            return n;
          }),
          n
        );
      }
      function tu() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 0.5;\n  margin-left: 10px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (tu = function () {
            return n;
          }),
          n
        );
      }
      function tk() {
        let n = (0, i._)([
          "\n  ",
          "\n  margin-left: 12px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (tk = function () {
            return n;
          }),
          n
        );
      }
      let th = r.ZP.div(tx(), m.O.shade2),
        tf = r.ZP.div(td()),
        ty = r.ZP.div(tp());
      r.ZP.div(tm());
      let tg = r.ZP.span(tu(), c.DD, c.fy),
        tw = r.ZP.span(tk(), c.MU, c.fy);
      var tA = (0, s.f3)(
        "appStore",
        "transferStore"
      )(
        (0, s.Pi)(() => {
          let [n, e] = (0, o.useState)(!1),
            t = window.innerWidth,
            i = !1;
          t <= 940 && (i = !0);
          let r = async (n) => {
              e(!0);
              let t = await (0, u.kc)(n);
              return e(!1), t;
            },
            s = async (n) => {
              let e = await r(n);
              tc.Z.setFromChainGasFee(e);
            },
            l = async (n) => {
              let e = await r(n);
              tc.Z.setToChainGasFee(e);
            };
          return (
            (0, o.useEffect)(() => {
              tc.Z.fromChainId &&
                tc.Z.toChainId &&
                (s(tc.Z.fromChainId), l(tc.Z.toChainId));
            }, []),
            (0, o.useEffect)(() => {
              0 !== tc.Z.fromChainId && s(tc.Z.fromChainId);
            }, [tc.Z.fromChainId]),
            (0, o.useEffect)(() => {
              0 !== tc.Z.toChainId && l(tc.Z.toChainId);
            }, [tc.Z.toChainId]),
            (0, a.jsxs)(th, {
              children: [
                (0, a.jsxs)(tf, {
                  children: [
                    (0, a.jsx)(to.Zo, {
                      width: i ? 12 : 16,
                      height: i ? 12 : 16,
                    }),
                    (0, a.jsx)(tg, { children: "Slippage:" }),
                    (0, a.jsx)(tw, { children: "0.0002%" }),
                  ],
                }),
                (0, a.jsxs)(ty, {
                  children: [
                    (0, a.jsx)(to.ei, {
                      width: i ? 12 : 16,
                      height: i ? 12 : 16,
                    }),
                    (0, a.jsx)(tg, { children: "Gas fees:" }),
                    (0, a.jsx)("div", { style: { marginRight: "10px" } }),
                    (0, to.uq)(tc.Z.fromChainId, i ? 12 : 16, i ? 12 : 16),
                    n
                      ? (0, a.jsx)("div", {
                          children: (0, a.jsx)(C.Z, {
                            width: "60px",
                            height: "15px",
                          }),
                        })
                      : (0, a.jsx)("div", {
                          children: (0, a.jsxs)(tw, {
                            children: [
                              "$",
                              " ",
                              tc.Z.fromChainGasFee
                                ? tc.Z.fromChainGasFee
                                : "0.00",
                            ],
                          }),
                        }),
                  ],
                }),
                (0, a.jsxs)(ty, {
                  children: [
                    (0, a.jsx)(to.ei, {
                      width: i ? 12 : 16,
                      height: i ? 12 : 16,
                    }),
                    (0, a.jsx)(tg, { children: "Gas fees:" }),
                    (0, a.jsx)("div", { style: { marginRight: "10px" } }),
                    (0, to.uq)(tc.Z.toChainId, i ? 12 : 16, i ? 12 : 16),
                    n
                      ? (0, a.jsx)("div", {
                          children: (0, a.jsx)(C.Z, {
                            width: "60px",
                            height: "15px",
                          }),
                        })
                      : (0, a.jsx)("div", {
                          children: (0, a.jsxs)(tw, {
                            children: [
                              "$",
                              " ",
                              tc.Z.toChainGasFee ? tc.Z.toChainGasFee : "0.00",
                            ],
                          }),
                        }),
                  ],
                }),
              ],
            })
          );
        })
      );
      function tZ() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n",
        ]);
        return (
          (tZ = function () {
            return n;
          }),
          n
        );
      }
      function tb() {
        let n = (0, i._)([
          "\n  ",
          "\n  color: ",
          ";\n  margin-bottom: 5px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (tb = function () {
            return n;
          }),
          n
        );
      }
      function tj() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 0.5;\n  color: ",
          ";\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (tj = function () {
            return n;
          }),
          n
        );
      }
      let tS = r.ZP.div(tZ()),
        tE = r.ZP.span(tb(), c.B0, m.O.white, c.MU),
        tv = r.ZP.span(tj(), c.Ir, m.O.white, c.w2);
      var tP = () =>
          (0, a.jsxs)(tS, {
            children: [
              (0, a.jsx)(tE, { children: "Bridge" }),
              (0, a.jsx)(tv, { children: "Send your assets across chains" }),
            ],
          }),
        tB = {
          src: "/_next/static/media/GasToken.c96b724e.svg",
          height: 31,
          width: 30,
          blurWidth: 0,
          blurHeight: 0,
        },
        tD = t(97320),
        tT = t(24697),
        tC = t(48470);
      function t_() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  padding: 10px 20px 20px 20px;\n  background-color: ",
          ";\n",
        ]);
        return (
          (t_ = function () {
            return n;
          }),
          n
        );
      }
      function tF() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  background-color: ",
          ";\n  padding: 25px;\n",
        ]);
        return (
          (tF = function () {
            return n;
          }),
          n
        );
      }
      function tR() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 0.5;\n  margin-bottom: 20px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (tR = function () {
            return n;
          }),
          n
        );
      }
      function tV() {
        let n = (0, i._)(["\n  display: flex;\n  flex-direction: column;\n"]);
        return (
          (tV = function () {
            return n;
          }),
          n
        );
      }
      function tI() {
        let n = (0, i._)(["\n  display: flex;\n  align-items: center;\n"]);
        return (
          (tI = function () {
            return n;
          }),
          n
        );
      }
      function tG() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-left: 18px;\n",
        ]);
        return (
          (tG = function () {
            return n;
          }),
          n
        );
      }
      function tO() {
        let n = (0, i._)([
          "\n  ",
          "\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (tO = function () {
            return n;
          }),
          n
        );
      }
      function tN() {
        let n = (0, i._)([
          "\n  height: 80px;\n  border-left: 1px solid ",
          ";\n  opacity: 0.2;\n  width: 1px;\n  margin-left: 20.5px;\n  @media screen and (max-width: 940px) {\n    height: 35px;\n  }\n",
        ]);
        return (
          (tN = function () {
            return n;
          }),
          n
        );
      }
      function tL() {
        let n = (0, i._)([
          "\n  display: flex;\n  margin-left: 5px;\n  align-items: center;\n  @media screen and (max-width: 940px) {\n    margin-left: 12px\n  }\n",
        ]);
        return (
          (tL = function () {
            return n;
          }),
          n
        );
      }
      function tM() {
        let n = (0, i._)([
          "\n  ",
          "\n  margin-left: 22px;\n  color: ",
          ";\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (tM = function () {
            return n;
          }),
          n
        );
      }
      t(53140);
      let tU = r.ZP.div(t_(), m.O.shade2),
        tW = r.ZP.div(tF(), m.O.shade0),
        tH = r.ZP.span(tR(), c.MU, c.w2),
        tz = r.ZP.div(tV()),
        tY = r.ZP.div(tI()),
        tq = r.ZP.div(tG()),
        tK = r.ZP.span(tO(), c.Cw, c.Dl),
        tQ = r.ZP.div(tN(), m.O.white),
        tX = r.ZP.div(tL()),
        tJ = r.ZP.span(tM(), c.YD, m.O.background, c.Dl);
      var t$ = (0, s.f3)(
          "appStore",
          "transferStore"
        )(
          (0, s.Pi)(() => {
            let [n, e] = (0, o.useState)(""),
              [t, i] = (0, o.useState)(null),
              [r, s] = (0, o.useState)(!1),
              [c, x] = (0, o.useState)(null),
              d = tc.Z.fromAmount,
              [p] = (0, tT.Nr)(n, 500),
              [m] = (0, tT.Nr)(d, 500),
              { address: h } = (0, k.mA)(),
              { config: f } = (0, k.M5)({
                to: p,
                value: m ? tC.fi(m) : void 0,
                data: t,
              }),
              { sendTransactionAsync: g } = (0, k.pQ)(f),
              w = window.innerWidth,
              A = !1;
            w <= 940 && (A = !0);
            let Z = tc.Z.transferState;
            (0, o.useEffect)(() => {
              Z === tl.ki.REVIEW_TRANSFER &&
                tc.Z.fromChainId !== tl.XN.BITCOIN &&
                v(),
                Z === tl.ki.REVIEW_TRANSFER &&
                  (tc.Z.fromChainId, tl.XN.BITCOIN);
            }, [tc.Z.transferState]);
            let b = async () => {
                try {
                  let n = await g(),
                    e = n.hash;
                  tc.Z.setTransactionHash(e),
                    tc.Z.setTransferState(tl.ki.TRANSFER_SUCCESS),
                    Date.now();
                  let t = BigInt(1e18 * parseFloat(tc.Z.fromAmount)),
                    i = localStorage.getItem("referral-code"),
                    a = {
                      walletAddress: h,
                      sourceChainHash: e,
                      sourceAmount: t,
                      sourceChainId: tc.Z.fromChainId,
                      destinationChainId: tc.Z.toChainId,
                      referralCode: i || "none",
                    };
                  await (0, u.Xs)(a);
                } catch (n) {}
              },
              j = async (n, e) => {
                if (n) {
                  l.Z.setToastMessage({
                    message: "Failed to send transaction",
                    type: "DANGER",
                  });
                  return;
                }
                try {
                  if (e) {
                    tc.Z.setTransferState(tl.ki.TRANSFER_SUCCESS),
                      tc.Z.setTransactionHash(e);
                    let n = BigInt(
                        Math.ceil(1e8 * parseFloat(tc.Z.fromAmount))
                      ),
                      t = localStorage.getItem("referral-code"),
                      i = {
                        walletAddress: h,
                        sourceChainHash: e,
                        sourceAmount: n,
                        sourceChainId: tc.Z.fromChainId,
                        destinationChainId: tc.Z.toChainId,
                        referralCode: t || "none",
                      };
                    await (0, u.Xs)(i);
                  }
                } catch (n) {}
              },
              S = () => {
                let n = (0, tl.E5)(tc.Z.toChainId),
                  e = (0, tl.JZ)(h, n),
                  t = 1e8 * parseFloat(d),
                  i = l.Z.btcPaymentAddress;
                return { memoString: e, amountInSatoshi: t, fromAddress: i };
              },
              E = () => {
                let { memoString: n, amountInSatoshi: e, fromAddress: t } = S();
                window.xfi.bitcoin.request(
                  {
                    method: "transfer",
                    params: [
                      {
                        feeRate: 10,
                        from: t,
                        recipient: "tb1qy9pqmk2pd9sv63g27jt8r657wy0d9ueeh0nqur",
                        amount: { amount: e, decimals: 8 },
                        memo: "hex::".concat(n),
                      },
                    ],
                  },
                  j
                );
              },
              v = () => {
                let n = l.Z.btcPaymentAddress,
                  { data: t, tssAddress: a } = (0, tl.QG)(
                    tc.Z.fromChainId,
                    tc.Z.toChainId,
                    h,
                    n
                  );
                e(a), i(t);
              };
            return (0, a.jsxs)(tU, {
              children: [
                (0, a.jsx)("div", {
                  style: {
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: "7px",
                  },
                  children: (0, a.jsx)(to.x8, {
                    onClick: () => {
                      tc.Z.setTransferState(tl.ki.SELECT_TOKENS);
                    },
                    width: A ? 12 : 16,
                    height: A ? 12 : 16,
                  }),
                }),
                (0, a.jsxs)(tW, {
                  children: [
                    (0, a.jsx)(tH, { children: "Review your transfer" }),
                    (0, a.jsxs)(tz, {
                      children: [
                        (0, a.jsxs)(tY, {
                          children: [
                            (0, to.uq)(tc.Z.fromChainId, 35, 35),
                            (0, a.jsx)(tq, {
                              children: (0, a.jsx)(tK, {
                                children: tc.Z.fromAmount,
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(tQ, {}),
                        (0, a.jsxs)(tX, {
                          children: [
                            (0, a.jsx)($(), {
                              width: A ? 19 : 30,
                              height: A ? 19 : 30,
                              priority: !0,
                              src: tB,
                              alt: "gas-tank",
                            }),
                            (0, a.jsxs)(tJ, {
                              children: [
                                "~ $",
                                (() => {
                                  let n = tc.Z.fromChainGasFee,
                                    e = tc.Z.toChainGasFee,
                                    t =
                                      parseFloat(
                                        null == n ? void 0 : n.toString()
                                      ) +
                                      parseFloat(
                                        null == e ? void 0 : e.toString()
                                      );
                                  return (0, y.Om)(t || 0);
                                })(),
                                " fee ",
                              ],
                            }),
                          ],
                        }),
                        (0, a.jsx)(tQ, {}),
                        (0, a.jsxs)(tY, {
                          children: [
                            (0, to.uq)(tc.Z.toChainId, 35, 35),
                            (0, a.jsx)(tq, {
                              children: (0, a.jsx)(tK, {
                                children: tc.Z.toAmount,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(nQ.Z, {
                  style: { marginTop: "15px" },
                  onClick: () => {
                    tc.Z.fromChainId === tl.XN.BITCOIN
                      ? (E(), tc.Z.setTransferState(tl.ki.TRANSFER_PENDING))
                      : t && "" !== n && b();
                  },
                  children: (0, a.jsx)(ts.Z, {
                    style: {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#8BCE2B",
                      color: "#000",
                      boxShadow: "#184D2F 0px 6px",
                      padding: "15px 0px",
                    },
                    children: r
                      ? (0, a.jsx)(tD.Z, { theme: "dark", small: 1 })
                      : (0, a.jsx)("div", { children: "Swap" }),
                  }),
                }),
              ],
            });
          })
        ),
        t0 = t(69260),
        t1 = t.n(t0),
        t2 = JSON.parse(
          '{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.4.5","a":"","k":"","d":"","tc":""},"fr":30,"ip":0,"op":1850,"w":472,"h":325,"nm":"Comp 2","ddd":0,"assets":[{"id":"image_0","w":128,"h":102,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABmCAYAAAADI5lUAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAF/0lEQVR4nO2du3LbRhSG/4U4sSkVZgCwSJVxl1RmuqQK3Dkdy3Sh3kDu0voN8gaROpdS585S51LsUsqdJ6JosCEwE3mRglqGYngBFnsFztdZpoAz+v4hcHCABUA4TxT1R1HUH9mug7BAFPVHYRgXYRgXOkJwoHqDhDqiqD8qiuLPlR8NDw+PPmbZ/FrVPpiqDRFq2SB/CefshzS9VRKCQMVGCLXskg8AQVBc9nr9gYp90TeAY+yTv8KMc5bU/SagADhEBfmC2iGgADiChHxBrRBQAByghnyBdAgoAJZRIF8gFQIKgEUUyhdUDgEFwBIa5AsqhYACYAGN8gWlQ0ABMIwB+YJSIaAAGMSgfMHeEFAADGFBvmBnCCgABrAoX7A1BBQAzTggX7AxBBQAjTgkX/C/EFAANOGgfMGjEFAANOCwfMEyBBQAxXggXzDjnCUUAIV4JF8wowAowkP5YIwdUwAUEMdxwjne266jAjPGitHd3d05BaAmvV5/EATFJYBntmspCXUBqvBdPkABkKYJ8gF6LkAKD+WPOe8MaBagAD/l3ydpmqab/pMCUIGmyQcoAKVponyAAlAK/+Szs+n0dlTqk5or8Z4mywcoADtpunyA2sCt+Ccfb6rKB+gbYCO+yWeMHd/d3Z5K/a7iWrynTfIBCsAj2iYfoAAs8Uz+LAgwnEwml3U3pO0kMI7jRNe2VeObfM5ZokI+oCkAYdg/5Rzvw7B/qmP7KvFRvqoVwgANh4CF9OI38e+iwEVR3I/2XZK0QdvlA4oDsC5/hVLXpU3imXxtfz9lAdghX6AlwTKQ/P9Qcg5QQj4APAuC4jKKoqGKfcpC8h9Te63gkvIFTwH2q+r1bsvik/yHc6eh7sNmrUNARfnru648uKiDT/JN/m2kA1BP/gJTHQLJ37E3mV9SIX8Frcc5kr+byieBiuUDwIsg6NyoWv16Fb/k47Vp+UDFAGiQL1DeIfgknzF2PJ1O/rCx79JdgEb5AmUdgm/y6070au2/zIcMyF9D/lhI8ivWsO8D5uUvYAxXX75U64M9ku/MVdGdAbAlf4Ux551hmn662fdBki/H1gA4IF+w9w9G8uXZ2AU4JB9Ydgib35nnkfyxa/KBDV2AY/IFTwEMu93DWZbNP4gf+iX/PknT6Y3tQtZ5FABH5a/yqts9ep5l83P/5LtzL8Qqy3MAD+QvYQxXRYEBSH5tGOCXfH9gZ5z/c+KyfABgJF8H5oc6sgRAoXwI0278kQ8AAef3CWO4sl1IM/BLPuDpSaCLuHBdX4ZlG5hl8/Nu95ABSOyV4ye+ygfWrgNk2fzy8PDoIwCrd+76hM/ygS2zAI8usthkud6u7ULqsHUY9BCCcwDfGqzHF5wb6siycxzc6/V6QdC5BPDCTDle0Bj5wJ57AtM0TTm/T4oCF6YKcpxGyQdK3BOY53me5/O33e7RcwBtvmg05ryTpOnff9kuRCWlbwp9aBNnAF5prMdVHoY6k0+2C1FNpWcDs2z+oYVtovMTvTpIPRnUojax0fIBycfD0/T2mnOWABirLccl2Nl0Ohk0WT5Q8+ng5raJ/g11ZKm1PkCe5/mTJ1+9ZezgGzSmQ2iPfEDBAhF5nueLDqERbeKb6XRyYrsIkyhdJMrHlycKfB/qyFL7G2CVLJtfP7SJL7G4ldsL2iof0LRUrE9tYpvlA5pWCl20iZ0B3G4TZ0GAl22WD2heLNrhNrFxQx1ZjKwW7tj9hiR/BaUngdtYtIndrwH2o4n97YDkr2EkAACQZdk7y4OkMef3Axcf0LSJsQAAok3sjgH2C8y2iY0f6shi5Y0hhttEkr8DK6+NM9UmFgUuSP5urL4zqNfr9Q4OOudFgZ/Vb71dQx1ZnHhplPo2keSXxehJ4DbUPpZG8qvgRAAAZY+lvZ5OJ7+rqqkNOHEIWCWO44RznKNih9D2oY4szgUAqN4mknx5nAwAUH6QRPLr4cw5wDrifkMg+J4xfLfhIzPO2U+fP9++M15cg3D2G2CVDW0iDXXaRhjGJ2EYF2EYpzreLkJ4QBRFQ5Kvln8BH3oOs6OT5hkAAAAASUVORK5CYII=","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"Vector 526.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,162,0],"ix":2},"a":{"a":0,"k":[64,51,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":1850,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 63","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[233.5,169.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[1416.923,1416.923,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":304,"op":1954,"st":104,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 62","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[43.5,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":298,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 60","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[43.5,228.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":291,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 58","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[43.5,164,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":285,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 56","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[43.5,99.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":279,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Shape Layer 54","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[43.5,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":273,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Shape Layer 52","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[428.5,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":267,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Shape Layer 50","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[428.5,96.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":261,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Shape Layer 48","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[428.5,161.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":254,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Shape Layer 46","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[428.5,225.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":247,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Shape Layer 44","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[428.5,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":240,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Shape Layer 41","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[363.75,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":227,"op":1941,"st":91,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Shape Layer 39","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[300,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":219,"op":1941,"st":91,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Shape Layer 38","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":211,"op":1933,"st":83,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Shape Layer 37","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[172,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":203,"op":1925,"st":75,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Shape Layer 33","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[108,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":184,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Shape Layer 31","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[108,226,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":175,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"Shape Layer 29","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[108,162,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":167,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"Shape Layer 27","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[108,98,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":158,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"Shape Layer 25","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[108,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":150,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"Shape Layer 23","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[172,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":140,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"Shape Layer 21","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":130,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":24,"ty":4,"nm":"Shape Layer 19","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[300,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":121,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":25,"ty":4,"nm":"Shape Layer 17","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[364,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":111,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":26,"ty":4,"nm":"Shape Layer 16","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[364,98,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":102,"op":1917,"st":67,"bm":0},{"ddd":0,"ind":27,"ty":4,"nm":"Shape Layer 15","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[364,162.25,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":93,"op":1908,"st":58,"bm":0},{"ddd":0,"ind":28,"ty":4,"nm":"Shape Layer 14","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[364,226,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":84,"op":1899,"st":49,"bm":0},{"ddd":0,"ind":29,"ty":4,"nm":"Shape Layer 13","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[300,226,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":75,"op":1890,"st":40,"bm":0},{"ddd":0,"ind":30,"ty":4,"nm":"Shape Layer 12","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,226,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":66,"op":1881,"st":31,"bm":0},{"ddd":0,"ind":31,"ty":4,"nm":"Shape Layer 11","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[172,226,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":56,"op":1871,"st":21,"bm":0},{"ddd":0,"ind":32,"ty":4,"nm":"Shape Layer 10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[172,162,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":45,"op":1860,"st":10,"bm":0},{"ddd":0,"ind":33,"ty":4,"nm":"Shape Layer 8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[172,98,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":35,"op":1860,"st":10,"bm":0},{"ddd":0,"ind":34,"ty":4,"nm":"Shape Layer 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,98,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":25,"op":1858,"st":8,"bm":0},{"ddd":0,"ind":35,"ty":4,"nm":"Shape Layer 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[300,98,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":17,"op":1850,"st":0,"bm":0},{"ddd":0,"ind":36,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[300,162,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":8,"op":1850,"st":0,"bm":0},{"ddd":0,"ind":37,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,162,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1850,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Comp 1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,162.5,0],"ix":2},"a":{"a":0,"k":[236,162.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.739],"y":[0.201]},"o":{"x":[0.503],"y":[0.109]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.337],"y":[0.681]},"t":30,"s":[10.267]},{"t":1850,"s":[61.667]}],"ix":2},"w":472,"h":325,"ip":0,"op":1850,"st":0,"bm":0}],"markers":[]}'
        );
      function t5() {
        let n = (0, i._)([""]);
        return (
          (t5 = function () {
            return n;
          }),
          n
        );
      }
      function t4() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  background-color: ",
          ";\n  margin-top: 10px;\n",
        ]);
        return (
          (t4 = function () {
            return n;
          }),
          n
        );
      }
      function t8() {
        let n = (0, i._)(["\n  ", "\n  margin-top: 10px;\n"]);
        return (
          (t8 = function () {
            return n;
          }),
          n
        );
      }
      function t3() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (t3 = function () {
            return n;
          }),
          n
        );
      }
      function t6() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  margin-top: 15px;\n",
        ]);
        return (
          (t6 = function () {
            return n;
          }),
          n
        );
      }
      function t9() {
        let n = (0, i._)([
          "\n  padding: 20px;\n  background-color: ",
          ";\n  border: 0.8px solid ",
          ";\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n",
        ]);
        return (
          (t9 = function () {
            return n;
          }),
          n
        );
      }
      function t7() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  border: ",
          ";\n",
        ]);
        return (
          (t7 = function () {
            return n;
          }),
          n
        );
      }
      function ie() {
        let n = (0, i._)([
          "\n  ",
          "\n  outline: none;\n  border: 1px solid ",
          ";\n  background-color: ",
          ';\n  width: 100%;\n  color: white;\n  padding: 10px 12px;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  &[type="number"] {\n    -moz-appearance: textfield;\n    appearance: textfield;\n  }\n\n  &::placeholder {\n    color: white;\n    opacity: 0.5;\n  }\n\n  &:-ms-input-placeholder {\n    color: white;\n  }\n\n  &::-ms-input-placeholder {\n    color: white;\n  }\n',
        ]);
        return (
          (ie = function () {
            return n;
          }),
          n
        );
      }
      function it() {
        let n = (0, i._)(["\n  display: flex;\n  margin-bottom: 10px;\n"]);
        return (
          (it = function () {
            return n;
          }),
          n
        );
      }
      function ii() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5\n"]);
        return (
          (ii = function () {
            return n;
          }),
          n
        );
      }
      function ia() {
        let n = (0, i._)([
          "\n  display: flex;\n  background-color: ",
          ";\n  padding: 11px 16px;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n",
        ]);
        return (
          (ia = function () {
            return n;
          }),
          n
        );
      }
      function ir() {
        let n = (0, i._)(["\n  ", "\n  color: ", "\n"]);
        return (
          (ir = function () {
            return n;
          }),
          n
        );
      }
      function io() {
        let n = (0, i._)(["\n  display: ", ";\n  flex-direction: column;\n"]);
        return (
          (io = function () {
            return n;
          }),
          n
        );
      }
      function is() {
        let n = (0, i._)(["\n  display: ", ";\n"]);
        return (
          (is = function () {
            return n;
          }),
          n
        );
      }
      function il() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (il = function () {
            return n;
          }),
          n
        );
      }
      let ic = r.ZP.div(t5()),
        ix = r.ZP.div(t4(), m.O.shade2),
        id = r.ZP.span(t8(), c.MU),
        ip = r.ZP.span(t3(), c.pm),
        im = r.ZP.div(t6()),
        iu = r.ZP.div(t9(), m.O.shade0, m.O.borderVariant3),
        ik = r.ZP.div(t7(), (n) =>
          n.valid ? "1px solid ".concat(m.O.borderVariant3) : "1px solid red"
        ),
        ih = r.ZP.input(ie(), c.MU, m.O.shade17, m.O.shade18),
        iy = r.ZP.div(it()),
        ig = r.ZP.span(ii(), c.MU),
        iw = r.ZP.div(ia(), m.O.background),
        iA = r.ZP.span(ir(), c.MU, m.O.shade0),
        iZ = r.ZP.div(io(), (n) => (n.saved ? "none" : "flex")),
        ib = r.ZP.div(is(), (n) => (n.saved ? "flex" : "none")),
        ij = r.ZP.span(il(), c.MU);
      var iS = (0, s.f3)(
          "appStore",
          "transferStore"
        )(
          (0, s.Pi)(() => {
            let [n, e] = (0, o.useState)("Transaction pending"),
              [t, i] = (0, o.useState)(""),
              [r, s] = (0, o.useState)(!0),
              [l, c] = (0, o.useState)(!1),
              [x, d] = (0, o.useState)(!1),
              p = localStorage.getItem("email-saved"),
              k = window.innerWidth,
              h = !1;
            k <= 940 && (h = !0),
              (0, o.useEffect)(() => {
                tc.Z.transferState === tl.ki.TRANSFER_SUCCESS &&
                  e("Transaction sent");
              }, [tc.Z.transferState]);
            let f = (n) =>
                !!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(n) ||
                !!/^[a-zA-Z0-9._-]+@(?:[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|yourcorporatedomain\.com)$/.test(
                  n
                ),
              y = async () => {
                d(!0);
                let n = f(t);
                if (!n) {
                  s(!1), d(!1);
                  return;
                }
                s(!0);
                let e = await (0, u.it)(t);
                if (!e) {
                  s(!1), d(!1);
                  return;
                }
                c(!0), d(!1), localStorage.setItem("email-saved", "".concat(e));
              };
            return (0, a.jsxs)(ix, {
              children: [
                (0, a.jsxs)(ic, {
                  style: { display: "flex", justifyContent: "space-between" },
                  children: [
                    (0, a.jsx)(ip, { children: n }),
                    (0, a.jsx)(to.x8, {
                      style: { cursor: "pointer" },
                      onClick: () => tc.Z.resetTransfer(),
                    }),
                  ],
                }),
                tc.Z.transferState === tl.ki.TRANSFER_PENDING &&
                  (0, a.jsx)(id, {
                    children:
                      "Great news! Your transaction has been sent to the blockchain for transfer",
                  }),
                (0, a.jsx)(im, {
                  children:
                    tc.Z.transferState === tl.ki.TRANSFER_PENDING
                      ? (0, a.jsx)(t1(), {
                          animationData: (0, tl.vD)(tc.Z.fromChainId),
                          loop: !0,
                          style: { marginTop: "20px" },
                        })
                      : (0, a.jsxs)(ic, {
                          style: { display: "flex", flexDirection: "column" },
                          children: [
                            (0, a.jsx)(t1(), {
                              animationData: t2,
                              loop: !0,
                              style: { width: "100%" },
                            }),
                            (!p || l) &&
                              (0, a.jsxs)(iu, {
                                children: [
                                  (0, a.jsxs)(iZ, {
                                    saved: l ? 1 : 0,
                                    children: [
                                      (0, a.jsx)(iy, {
                                        children: (0, a.jsx)(ig, {
                                          children:
                                            "Get exclusive perks in the Eddy community \uD83C\uDF81",
                                        }),
                                      }),
                                      (0, a.jsxs)(ik, {
                                        valid: r ? 1 : 0,
                                        children: [
                                          (0, a.jsx)(ic, {
                                            style: {
                                              display: "flex",
                                              width: "100%",
                                            },
                                            children: (0, a.jsx)(ih, {
                                              value: t,
                                              placeholder:
                                                "Enter your email...",
                                              onChange: (n) => {
                                                i(n.target.value);
                                              },
                                            }),
                                          }),
                                          (0, a.jsx)(iw, {
                                            onClick: y,
                                            children: x
                                              ? (0, a.jsx)(tD.Z, {
                                                  theme: "dark",
                                                  small: 1,
                                                })
                                              : (0, a.jsx)(iA, {
                                                  children: "Submit",
                                                }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, a.jsx)(ib, {
                                    saved: l ? 1 : 0,
                                    children: (0, a.jsx)(ij, {
                                      children:
                                        "Congratulations \uD83C\uDF89 Your email is eligible for rewards",
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                }),
                tc.Z.transferState === tl.ki.TRANSFER_SUCCESS &&
                  (0, a.jsx)(nQ.Z, {
                    style: { marginTop: "15px" },
                    onClick: () => {
                      if (h) {
                        tc.Z.resetTransfer();
                        return;
                      }
                      tc.Z.setTransactionHistory(!0);
                    },
                    children: (0, a.jsx)(ts.Z, {
                      style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#fff",
                        color: "".concat(m.O.shade2),
                        boxShadow: "0px 8px #404040",
                        padding: "15px",
                      },
                      children: h ? "Go back home" : "Check transaction status",
                    }),
                  }),
              ],
            });
          })
        ),
        iE = t(45822),
        iv = JSON.parse(
          '{"nm":"newScene","ddd":0,"h":600,"w":600,"meta":{"g":"@lottiefiles/toolkit-js 0.26.1"},"layers":[{"ty":4,"nm":"Shape Layer 1","sr":1,"st":0,"op":900.000036657751,"ip":0,"hd":false,"ddd":0,"bm":0,"hasMask":false,"ao":0,"ks":{"a":{"a":0,"k":[0,0,0]},"s":{"a":0,"k":[244,244,100]},"sk":{"a":0,"k":0},"p":{"a":0,"k":[300,300,0]},"r":{"a":0,"k":0},"sa":{"a":0,"k":0},"o":{"a":0,"k":100}},"ef":[],"shapes":[{"ty":"el","bm":0,"hd":false,"mn":"ADBE Vector Shape - Ellipse","nm":"Ellipse Path 1","d":1,"p":{"a":0,"k":[0,0]},"s":{"a":0,"k":[100,100]}},{"ty":"tm","bm":0,"hd":false,"mn":"ADBE Vector Filter - Trim","nm":"Trim Paths 1","ix":2,"e":{"a":1,"k":[{"o":{"x":0.561,"y":0.016},"i":{"x":0.439,"y":1.017},"s":[100],"t":0},{"s":[0],"t":30.0000012219251}],"ix":2},"o":{"a":0,"k":0,"ix":3},"s":{"a":1,"k":[{"o":{"x":0.561,"y":0.015},"i":{"x":0.439,"y":1.016},"s":[100],"t":5},{"s":[0],"t":33.0000013441176}],"ix":1},"m":1},{"ty":"st","bm":0,"hd":false,"mn":"ADBE Vector Graphic - Stroke","nm":"Stroke 1","lc":2,"lj":1,"ml":4,"o":{"a":0,"k":100},"w":{"a":0,"k":16},"c":{"a":0,"k":[0.5451,0.8078,0.1686]}}],"ind":1}],"v":"4.5.3","fr":29.9700012207031,"op":33.0000013441175,"ip":1.00000004073083,"assets":[]}'
        );
      function iP() {
        let n = (0, i._)([""]);
        return (
          (iP = function () {
            return n;
          }),
          n
        );
      }
      function iB() {
        let n = (0, i._)([
          "\n  display: flex;\n  padding: 25px;\n  border: 1px solid\n    ",
          ";\n  background-color: ",
          ";\n  margin-top: 25px;\n  flex-direction: column;\n",
        ]);
        return (
          (iB = function () {
            return n;
          }),
          n
        );
      }
      function iD() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n",
        ]);
        return (
          (iD = function () {
            return n;
          }),
          n
        );
      }
      function iT() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: space-between;\n",
        ]);
        return (
          (iT = function () {
            return n;
          }),
          n
        );
      }
      function iC() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5;\n  margin-right: 3px;\n"]);
        return (
          (iC = function () {
            return n;
          }),
          n
        );
      }
      function i_() {
        let n = (0, i._)([
          "\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n",
        ]);
        return (
          (i_ = function () {
            return n;
          }),
          n
        );
      }
      function iF() {
        let n = (0, i._)([
          "\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n",
        ]);
        return (
          (iF = function () {
            return n;
          }),
          n
        );
      }
      function iR() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (iR = function () {
            return n;
          }),
          n
        );
      }
      function iV() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 0.5;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (iV = function () {
            return n;
          }),
          n
        );
      }
      function iI() {
        let n = (0, i._)([
          "\n  displat: flex;\n  width: 24px;\n  height: 24px;\n",
        ]);
        return (
          (iI = function () {
            return n;
          }),
          n
        );
      }
      function iG() {
        let n = (0, i._)([
          "\n  width: 75px;\n  border-top: 2px dashed ",
          ";\n",
        ]);
        return (
          (iG = function () {
            return n;
          }),
          n
        );
      }
      function iO() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5;\n  margin-right: 7px;\n"]);
        return (
          (iO = function () {
            return n;
          }),
          n
        );
      }
      function iN() {
        let n = (0, i._)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n",
        ]);
        return (
          (iN = function () {
            return n;
          }),
          n
        );
      }
      function iL() {
        let n = (0, i._)([
          "\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 5px 10px;\n    border-radius: 4px;\n    background-color: ",
          ";\n",
        ]);
        return (
          (iL = function () {
            return n;
          }),
          n
        );
      }
      function iM() {
        let n = (0, i._)(["\n    ", "\n    color: #000\n"]);
        return (
          (iM = function () {
            return n;
          }),
          n
        );
      }
      let iU = r.ZP.div(iP()),
        iW = r.ZP.div(
          iB(),
          (n) =>
            "FAILED" !== n.txstatus ? m.O.backgroundVariant2 : m.O.borderRed,
          (n) =>
            "FAILED" !== n.txstatus
              ? m.O.backgroundVariant1
              : m.O.borderRedVariant
        ),
        iH = r.ZP.div(iD()),
        iz = r.ZP.div(iT()),
        iY = r.ZP.span(iC(), c.Pj),
        iq = r.ZP.div(i_()),
        iK = r.ZP.div(iF()),
        iQ = r.ZP.span(iR(), c.YD),
        iX = r.ZP.span(iV(), c.w2),
        iJ = r.ZP.div(iI()),
        i$ = r.ZP.div(iG(), m.O.background),
        i0 = r.ZP.span(iO(), c.w2),
        i1 = r.ZP.div(iN()),
        i2 = r.ZP.div(iL(), m.O.background),
        i5 = r.ZP.span(iM(), c.yk);
      var i4 = (0, s.f3)(
        "appStore",
        "transferStore"
      )(
        (0, s.Pi)((n) => {
          var e, t;
          let { status: i, sourceChainHash: r } = n.item,
            s =
              "SUCCESS" !== i
                ? tl.nv.PROGRESS
                : "Transaction ".concat(i.toLowerCase()),
            [l, c] = (0, o.useState)(null),
            [x, d] = (0, o.useState)(null),
            [p, k] = (0, o.useState)(s),
            [h, f] = (0, o.useState)(!1),
            y = () => {
              f(!0),
                setTimeout(() => {
                  f(!1);
                }, 3e3);
              let n = Math.floor(Date.now() / 1e3),
                e = localStorage.getItem("".concat(r, "-last-refresh"));
              if (e) {
                let t = parseFloat(n.toString()) - parseFloat(e);
                if (t >= 30) {
                  localStorage.setItem(
                    "".concat(r, "-last-refresh"),
                    n.toString()
                  ),
                    g();
                  return;
                }
              } else {
                localStorage.setItem(
                  "".concat(r, "-last-refresh"),
                  n.toString()
                ),
                  g();
                return;
              }
            },
            g = async () => {
              if (localStorage.getItem("tx-".concat(r))) {
                let e = JSON.parse(
                    localStorage.getItem("tx-".concat(n.item.sourceChainHash))
                  ),
                  {
                    sourceChainHash: t,
                    zetachainHash: i,
                    destinationChainHash: a,
                    status: r,
                  } = e;
                c(i), d(a);
                return;
              }
              let e = await (0, u.iY)(r);
              if (
                (e &&
                  e.zetachainHashOutbound &&
                  (c(e.zetachainHashInbound), k(tl.nv.PROGRESS)),
                e && e.destinationChainHash)
              ) {
                d(e.destinationChainHash), k(tl.nv.SUCCESS);
                let n = {
                  sourceChainHash: r,
                  zetachainHash: e.zetachainHashInbound,
                  destinationChainHash: e.destinationChainHash,
                  status: "SUCCESS",
                };
                localStorage.setItem("tx-".concat(r), JSON.stringify(n));
              }
              e && "FAILED" === e.status && k(tl.nv.FAILED);
            };
          return (
            (0, o.useEffect)(() => {
              g();
            }, []),
            (0, o.useEffect)(() => {
              g();
            }, [tc.Z.transactionHistory]),
            (0, o.useEffect)(() => {
              p === tl.nv.SUCCESS &&
                localStorage.removeItem("".concat(r, "-last-refresh"));
            }, [p]),
            (0, a.jsxs)(iW, {
              txstatus: i,
              children: [
                (0, a.jsxs)(iH, {
                  children: [
                    (0, to.uq)(n.item.sourceChainId, 24, 24),
                    (0, a.jsx)(i$, {
                      style: {
                        width: "90px",
                        borderTop: "2px dashed ".concat(m.O.background),
                      },
                    }),
                    (0, a.jsx)(to.I_, {}),
                    (0, a.jsx)(i$, {
                      style: {
                        width: "90px",
                        borderTop: "2px dashed ".concat(m.O.background),
                      },
                    }),
                    (0, to.uq)(n.item.destinationChainId, 24, 24),
                  ],
                }),
                (0, a.jsxs)(iz, {
                  children: [
                    (0, a.jsxs)(iq, {
                      onClick: () => {
                        let e = (0, tl.qZ)(n.item.sourceChainId, r);
                        window.open(e, "_blank");
                      },
                      children: [
                        (0, a.jsx)(iY, { children: "View" }),
                        (0, a.jsx)(to.dL, { width: 8, height: 8 }),
                      ],
                    }),
                    (0, a.jsx)(iq, {
                      children: l
                        ? (0, a.jsxs)(iU, {
                            style: {
                              display: "flex",
                              cursor: "ponter",
                              alignItems: "center",
                            },
                            onClick: () => {
                              let n =
                                "https://athens3.explorer.zetachain.com/cc/tx/".concat(
                                  l
                                );
                              window.open(n, "_blank");
                            },
                            children: [
                              (0, a.jsx)(iY, { children: "View" }),
                              (0, a.jsx)(to.dL, { width: 8, height: 8 }),
                            ],
                          })
                        : (0, a.jsx)(iJ, {
                            children:
                              "FAILED" === i
                                ? (0, a.jsx)(to.ZJ, {})
                                : (0, a.jsx)(t1(), {
                                    animationData: iv,
                                    loop: !0,
                                  }),
                          }),
                    }),
                    (0, a.jsx)(iq, {
                      children: x
                        ? (0, a.jsxs)(iU, {
                            style: {
                              display: "flex",
                              cursor: "pointer",
                              alignItems: "center",
                            },
                            onClick: () => {
                              let e = (0, tl.qZ)(n.item.destinationChainId, x);
                              window.open(e, "_blank");
                            },
                            children: [
                              (0, a.jsx)(iY, { children: "View" }),
                              (0, a.jsx)(to.dL, { width: 8, height: 8 }),
                            ],
                          })
                        : (0, a.jsx)(iJ, {
                            children:
                              "FAILED" === i
                                ? (0, a.jsx)(to.ZJ, {})
                                : (0, a.jsx)(t1(), {
                                    animationData: iv,
                                    loop: !0,
                                  }),
                          }),
                    }),
                  ],
                }),
                (0, a.jsxs)(iK, {
                  children: [
                    (0, a.jsx)(iQ, {
                      style: { marginRight: "10px" },
                      children:
                        null === (e = (0, tl.bt)(n.item.sourceChainId)) ||
                        void 0 === e
                          ? void 0
                          : e.name,
                    }),
                    (0, a.jsx)(to.eQ, {}),
                    (0, a.jsx)(iQ, {
                      style: { marginLeft: "10px" },
                      children:
                        null === (t = (0, tl.bt)(n.item.destinationChainId)) ||
                        void 0 === t
                          ? void 0
                          : t.name,
                    }),
                  ],
                }),
                (0, a.jsxs)(iU, {
                  style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: "7px",
                  },
                  children: [
                    (0, a.jsx)(iX, { children: p }),
                    (!l || !x) &&
                      "FAILED" !== i &&
                      "SUCCESS" !== i &&
                      (0, a.jsx)(i1, {
                        children: h
                          ? (0, a.jsx)(iJ, {
                              children: (0, a.jsx)(t1(), {
                                animationData: iv,
                                loop: !0,
                              }),
                            })
                          : (0, a.jsxs)(iU, {
                              style: {
                                alignItems: "center",
                                justifyContent: "center",
                              },
                              onClick: () => {
                                y();
                              },
                              children: [
                                (0, a.jsx)(i0, { children: "Refresh" }),
                                (0, a.jsx)(to.hY, {
                                  style: {},
                                  width: 10,
                                  height: 10,
                                }),
                              ],
                            }),
                      }),
                    x &&
                      "SUCCESS" === i &&
                      n.item.swapReward &&
                      n.item.swapReward > 0 &&
                      (0, a.jsx)(i2, {
                        children: (0, a.jsxs)(i5, {
                          children: [
                            "\uD83C\uDF8A ",
                            n.item.swapReward,
                            " points",
                          ],
                        }),
                      }),
                  ],
                }),
              ],
            })
          );
        })
      );
      function i8() {
        let n = (0, i._)([
          "\n  display: ",
          ";\n  flex-direction: column;\n  padding: 20px;\n  min-width: 330px;\n  margin-left: 40px;\n  margin-top: 15px;\n  background-color: ",
          ";\n",
        ]);
        return (
          (i8 = function () {
            return n;
          }),
          n
        );
      }
      function i3() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5;\n"]);
        return (
          (i3 = function () {
            return n;
          }),
          n
        );
      }
      function i6() {
        let n = (0, i._)([
          "\n  overflow: auto;\n  height: 350px;\n  padding-right: 30px;\n  padding-bottom: 30px;\n",
        ]);
        return (
          (i6 = function () {
            return n;
          }),
          n
        );
      }
      function i9() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5\n"]);
        return (
          (i9 = function () {
            return n;
          }),
          n
        );
      }
      function i7() {
        let n = (0, i._)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: auto;\n  margin-bottom: auto;\n",
        ]);
        return (
          (i7 = function () {
            return n;
          }),
          n
        );
      }
      function an() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n",
        ]);
        return (
          (an = function () {
            return n;
          }),
          n
        );
      }
      let ae = r.ZP.div(i8(), (n) => (n.open ? "flex" : "none"), m.O.shade2),
        at = r.ZP.span(i3(), c.MU),
        ai = r.ZP.div(i6()),
        aa = r.ZP.span(i9(), c.MU),
        ar = r.ZP.div(i7()),
        ao = r.ZP.div(an());
      var as = (0, s.f3)(
          "appStore",
          "transferStore"
        )(
          (0, s.Pi)(() => {
            let [n, e] = (0, o.useState)([]),
              [t, i] = (0, o.useState)(!1),
              { address: r } = (0, k.mA)(),
              s = async () => {
                try {
                  i(!0);
                  let n = await (0, u.TY)(r);
                  e(n), i(!1);
                } catch (n) {
                  i(!1);
                }
              };
            return (
              (0, o.useEffect)(() => {
                s();
              }, []),
              (0, a.jsxs)(ae, {
                open: tc.Z.transactionHistory,
                children: [
                  (0, a.jsxs)(ao, {
                    children: [
                      (0, a.jsx)(at, { children: "Transaction history" }),
                      (0, a.jsx)(to.x8, {
                        onClick: () => {
                          tc.Z.setTransactionHistory(!1);
                        },
                        style: { cursor: "pointer" },
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", { style: { height: "10px" } }),
                  l.Z.loadingTransactionHistory
                    ? (0, a.jsx)(C.Z, { width: "330px", height: "200px" })
                    : (0, a.jsx)("div", {
                        children:
                          n.length > 0
                            ? (0, a.jsx)(ai, {
                                className: "scrollBarClass",
                                children: n.map((n, e) =>
                                  (0, a.jsx)(i4, { item: n }, e)
                                ),
                              })
                            : (0, a.jsx)("div", {
                                style: {
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  marginTop: "90px",
                                },
                                children: t
                                  ? (0, a.jsx)(tD.Z, { small: 1 })
                                  : (0, a.jsx)(ar, {
                                      children: (0, a.jsx)(aa, {
                                        children: "No transaction found",
                                      }),
                                    }),
                              }),
                      }),
                ],
              })
            );
          })
        ),
        al = JSON.parse(
          '{"v":"5.7.6","fr":30,"ip":0,"op":117,"w":800,"h":800,"nm":"18 Circle Line Loading Icon","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Null 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[400,400,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[261,261,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":181,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 17","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[-0.5,15.5,0],"ix":1,"l":2},"s":{"a":0,"k":[102,102,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[171,171],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5451,0.8078,0.1686,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":14,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.5,15.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":92.793,"s":[0]},{"t":117,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":78,"s":[0]},{"t":117,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":78,"op":117,"st":78,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 16","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[-0.5,15.5,0],"ix":1,"l":2},"s":{"a":0,"k":[102,102,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[171,171],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5451,0.8078,0.1686,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":14,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.5,15.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":53.793,"s":[0]},{"t":78,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":39,"s":[0]},{"t":78,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":39,"op":78,"st":39,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 15","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[-0.5,15.5,0],"ix":1,"l":2},"s":{"a":0,"k":[102,102,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[171,171],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.5451,0.8078,0.1686,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":14,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[-0.5,15.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":14.793,"s":[0]},{"t":39,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":39,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":39,"st":0,"bm":0}],"markers":[]}'
        );
      function ac() {
        let n = (0, i._)([""]);
        return (
          (ac = function () {
            return n;
          }),
          n
        );
      }
      function ax() {
        let n = (0, i._)([
          "\n  display: flex;\n  border-radius: 5px;\n  border: 0.837px solid ",
          ";\n  background-color: ",
          ";\n  padding: 12px 16px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 15px;\n",
        ]);
        return (
          (ax = function () {
            return n;
          }),
          n
        );
      }
      function ad() {
        let n = (0, i._)([""]);
        return (
          (ad = function () {
            return n;
          }),
          n
        );
      }
      function ap() {
        let n = (0, i._)(["\n  margin-left: -5px;\n"]);
        return (
          (ap = function () {
            return n;
          }),
          n
        );
      }
      function am() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-left: 13px;\n",
        ]);
        return (
          (am = function () {
            return n;
          }),
          n
        );
      }
      function au() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 5px;\n",
        ]);
        return (
          (au = function () {
            return n;
          }),
          n
        );
      }
      function ak() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (ak = function () {
            return n;
          }),
          n
        );
      }
      function ah() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5\n"]);
        return (
          (ah = function () {
            return n;
          }),
          n
        );
      }
      let af = r.ZP.div(ac()),
        ay = r.ZP.div(ax(), m.O.backgroundVariant2, m.O.backgroundVariant1),
        ag = r.ZP.div(ad()),
        aw = r.ZP.div(ap()),
        aA = r.ZP.div(am()),
        aZ = r.ZP.div(au()),
        ab = r.ZP.span(ak(), c.Bj),
        aj = r.ZP.span(ah(), c.jJ);
      var aS = (n) => {
        var e, t, i, r, s;
        let l = () => {
            var e, t, i;
            let a = Math.floor(Date.now() / 1e3),
              r = localStorage.getItem(
                "".concat(
                  null === (e = n.item) || void 0 === e
                    ? void 0
                    : e.sourceChainHash,
                  "-last-refresh"
                )
              );
            if (r) {
              let e = parseFloat(a.toString()) - parseFloat(r);
              if (e >= 30) {
                localStorage.setItem(
                  "".concat(
                    null === (t = n.item) || void 0 === t
                      ? void 0
                      : t.sourceChainHash,
                    "-last-refresh"
                  ),
                  a.toString()
                ),
                  c();
                return;
              }
            } else {
              localStorage.setItem(
                "".concat(
                  null === (i = n.item) || void 0 === i
                    ? void 0
                    : i.sourceChainHash,
                  "-last-refresh"
                ),
                a.toString()
              ),
                c();
              return;
            }
          },
          c = async () => {
            var e;
            await (0, u.iY)(
              null === (e = n.item) || void 0 === e ? void 0 : e.sourceChainHash
            );
          };
        return (
          (0, o.useEffect)(() => {
            l();
          }, []),
          (0, a.jsxs)(
            ay,
            {
              children: [
                (0, a.jsxs)(af, {
                  style: { display: "flex", flexDirection: "row" },
                  children: [
                    (0, a.jsx)(ag, {
                      children: (0, to.uq)(
                        null === (e = n.item) || void 0 === e
                          ? void 0
                          : e.sourceChainId
                      ),
                    }),
                    (0, a.jsx)(aw, {
                      children: (0, to.uq)(
                        null === (t = n.item) || void 0 === t
                          ? void 0
                          : t.destinationChainId
                      ),
                    }),
                    (0, a.jsxs)(aA, {
                      children: [
                        (0, a.jsxs)(aZ, {
                          children: [
                            (0, a.jsx)(ab, {
                              children:
                                null ===
                                  (i = (0, tl.bt)(n.item.sourceChainId)) ||
                                void 0 === i
                                  ? void 0
                                  : i.name,
                            }),
                            (0, a.jsx)(to.eQ, {
                              style: { margin: "0px 8px" },
                              width: 12,
                              height: 12,
                            }),
                            (0, a.jsx)(ab, {
                              children:
                                null ===
                                  (r = (0, tl.bt)(
                                    null === (s = n.item) || void 0 === s
                                      ? void 0
                                      : s.destinationChainId
                                  )) || void 0 === r
                                  ? void 0
                                  : r.name,
                            }),
                          ],
                        }),
                        (0, a.jsx)(aj, {
                          children: "Waiting for swap transaction",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(af, {
                  style: { width: "18px", height: "18px" },
                  children: (0, a.jsx)(t1(), { animationData: al, loop: !0 }),
                }),
              ],
            },
            n.index
          )
        );
      };
      function aE() {
        let n = (0, i._)([""]);
        return (
          (aE = function () {
            return n;
          }),
          n
        );
      }
      function av() {
        let n = (0, i._)([
          "\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n",
        ]);
        return (
          (av = function () {
            return n;
          }),
          n
        );
      }
      function aP() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin: 0px 25px;\n",
        ]);
        return (
          (aP = function () {
            return n;
          }),
          n
        );
      }
      function aB() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (aB = function () {
            return n;
          }),
          n
        );
      }
      function aD() {
        let n = (0, i._)(["\n  display: flex;\n  align-items: center;\n"]);
        return (
          (aD = function () {
            return n;
          }),
          n
        );
      }
      function aT() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5;\n  margin-top: 5px;\n"]);
        return (
          (aT = function () {
            return n;
          }),
          n
        );
      }
      function aC() {
        let n = (0, i._)([
          "\n  display: ",
          ";\n  background-color: ",
          ";\n  padding: 16px;\n  margin: 16px 25px 0px;\n  flex-direction: column;\n  height: 200px;\n  overflow: auto;\n",
        ]);
        return (
          (aC = function () {
            return n;
          }),
          n
        );
      }
      function a_() {
        let n = (0, i._)(["\n  width: 16px;\n  height: 16px;\n"]);
        return (
          (a_ = function () {
            return n;
          }),
          n
        );
      }
      function aF() {
        let n = (0, i._)(["\n  color: ", ";\n"]);
        return (
          (aF = function () {
            return n;
          }),
          n
        );
      }
      let aR = r.ZP.div(aE()),
        aV = r.ZP.div(av()),
        aI = r.ZP.div(aP()),
        aG = r.ZP.span(aB(), c.nL),
        aO = r.ZP.div(aD());
      r.ZP.span(aT(), c.w2);
      let aN = r.ZP.div(aC(), (n) => (n.visible ? "flex" : "none"), m.O.shade4),
        aL = r.ZP.div(a_()),
        aM = r.ZP.span(aF(), m.O.background);
      var aU = (0, s.f3)(
        "appStore",
        "transferStore"
      )(
        (0, s.Pi)(() => {
          let { address: n } = (0, k.mA)(),
            [e, t] = (0, o.useState)([]),
            [i, r] = (0, o.useState)([]),
            [s, l] = (0, o.useState)(0),
            c = async () => {
              try {
                let e = await (0, u.TY)(n),
                  i = e.filter((n) => !n.destinationChainHash);
                r(i), t(e);
              } catch (n) {}
            };
          return (
            (0, o.useEffect)(() => {
              c();
            }, []),
            (0, o.useEffect)(() => {
              c();
            }, [tc.Z.transferState]),
            (0, a.jsx)(aV, {
              children:
                i &&
                i.length > 0 &&
                (0, a.jsxs)(aR, {
                  children: [
                    (0, a.jsx)(aI, {
                      onClick: () => {
                        l(s ? 0 : 1);
                      },
                      children: (0, a.jsx)(aO, {
                        children: (0, a.jsxs)(aR, {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            border: "1px solid ".concat(m.O.backgroundVariant1),
                            borderRadius: "5px",
                            padding: "5px",
                            backgroundColor: "".concat(m.O.backgroundVariant2),
                            alignItems: "center",
                          },
                          children: [
                            (0, a.jsx)(aL, {
                              children: s
                                ? (0, a.jsx)(to.x8, { width: 10, height: 10 })
                                : (0, a.jsx)(t1(), {
                                    animationData: al,
                                    loop: !0,
                                  }),
                            }),
                            (0, a.jsxs)(aG, {
                              children: [
                                (0, a.jsx)(aM, { children: i.length }),
                                " Pending",
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsx)(aN, {
                      visible: s,
                      children: i.map((n, e) =>
                        (0, a.jsx)(aS, { index: e, item: n }, e)
                      ),
                    }),
                  ],
                }),
            })
          );
        })
      );
      function aW() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 25px;\n",
        ]);
        return (
          (aW = function () {
            return n;
          }),
          n
        );
      }
      function aH() {
        let n = (0, i._)([
          "\n  ",
          "\n  color: ",
          ";\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (aH = function () {
            return n;
          }),
          n
        );
      }
      function az() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5;\n  margin-top: 5px;\n"]);
        return (
          (az = function () {
            return n;
          }),
          n
        );
      }
      function aY() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  cursor: pointer;\n",
        ]);
        return (
          (aY = function () {
            return n;
          }),
          n
        );
      }
      function aq() {
        let n = (0, i._)([
          "\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n  ",
          "\n",
        ]);
        return (
          (aq = function () {
            return n;
          }),
          n
        );
      }
      function aK() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (aK = function () {
            return n;
          }),
          n
        );
      }
      function aQ() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 1;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (aQ = function () {
            return n;
          }),
          n
        );
      }
      function aX() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 0.5;\n  margin-top: 5px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (aX = function () {
            return n;
          }),
          n
        );
      }
      let aJ = r.ZP.div(aW()),
        a$ = r.ZP.span(aH(), c.pm, m.O.white, c.Dl),
        a0 = r.ZP.span(az(), c.fy),
        a1 = r.ZP.div(aY()),
        a2 = r.ZP.div(aq(), c.ny),
        a5 = r.ZP.div(aK()),
        a4 = r.ZP.span(aQ(), c.Cw, c.Dl);
      r.ZP.span(aX(), c.w2, c.fy);
      var a8 = (0, s.f3)(
        "appStore",
        "transferStore"
      )(
        (0, s.Pi)((n) => {
          var e, t;
          let { switchNetwork: i } = (0, k.g0)(),
            { address: r } = (0, k.mA)(),
            s = window.innerWidth,
            c = n.chainId,
            [x, d] = (0, o.useState)("0.00"),
            [p, m] = (0, o.useState)(!1),
            h = !1;
          s <= 940 && (h = !0);
          let f = async () => {
            try {
              m(!0);
              let n = await (0, u.fH)(c, r, l.Z.btcPaymentAddress);
              d(null == n ? void 0 : n.toString()), m(!1);
            } catch (n) {}
          };
          (0, o.useEffect)(() => {
            f();
          }, []);
          let y = (n, e) => {
              if (n) {
                l.Z.setToastMessage({
                  message: "Failed to connect wallet",
                  type: "DANGER",
                });
                return;
              }
              let t = e[0];
              localStorage.setItem("btc-payment-address", t),
                localStorage.setItem("btc-payment-public-key", t),
                l.Z.setBtcPaymentAddress(t),
                l.Z.setBtcPaymentPublicKey(t);
            },
            g = () => {
              try {
                window.xfi && window.xfi.bitcoin
                  ? window.xfi.bitcoin.request(
                      { method: "request_accounts", params: [] },
                      y
                    )
                  : l.Z.setBtcWalletConnectOpen(!0);
              } catch (n) {
                l.Z.setBtcWalletConnectOpen(!0);
              }
            };
          return (0, a.jsxs)(
            aJ,
            {
              onClick: () => {
                if ("from" === tc.Z.tokenClicked) {
                  if (tc.Z.toChainId === c) {
                    if (h) {
                      l.Z.setPhoneToastMessage({
                        message: "Cannot take same chainId",
                        type: "danger",
                      });
                      return;
                    }
                    l.Z.setToastMessage({
                      message: "Cannot take same chainId",
                      type: "INFO",
                    });
                    return;
                  }
                  tc.Z.fromChainId !== c && c !== tl.XN.BITCOIN && i(c),
                    c !== tl.XN.BITCOIN || l.Z.btcPaymentAddress || g(),
                    tc.Z.setFromChainId(c);
                } else {
                  if (tc.Z.fromChainId === c) {
                    if (h) {
                      l.Z.setPhoneToastMessage({
                        message: "Cannot take same chainId",
                        type: "danger",
                      });
                      return;
                    }
                    l.Z.setToastMessage({
                      message: "Cannot take same chainId",
                      type: "INFO",
                    });
                    return;
                  }
                  tc.Z.setToChainId(c);
                }
                tc.Z.setTokenModal(!1), tc.Z.setTokenClicked(null);
              },
              children: [
                (0, a.jsxs)(
                  a1,
                  {
                    children: [
                      (0, to.uq)(c, 30, 30),
                      (0, a.jsxs)(a2, {
                        children: [
                          (0, a.jsx)(a$, {
                            children:
                              null === (e = (0, tl.bt)(c)) || void 0 === e
                                ? void 0
                                : e.name,
                          }),
                          (0, a.jsx)(a0, {
                            children:
                              null === (t = (0, tl.bt)(c)) || void 0 === t
                                ? void 0
                                : t.chainName,
                          }),
                        ],
                      }),
                    ],
                  },
                  c
                ),
                (0, a.jsx)(a5, {
                  children: (0, a.jsx)(a4, {
                    children: p
                      ? (0, a.jsx)(C.Z, { width: "20px", height: "10px" })
                      : x,
                  }),
                }),
              ],
            },
            n.index
          );
        })
      );
      function a3() {
        let n = (0, i._)([
          "\n  display: flex;\n  border: 0.837px solid #353535;\n  background: rgba(75, 75, 75, 0.07);\n  padding: 14px 26px;\n  margin-top: 40px;\n  border-radius: 5px;\n",
        ]);
        return (
          (a3 = function () {
            return n;
          }),
          n
        );
      }
      function a6() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (a6 = function () {
            return n;
          }),
          n
        );
      }
      function a9() {
        let n = (0, i._)([""]);
        return (
          (a9 = function () {
            return n;
          }),
          n
        );
      }
      let a7 = r.ZP.div(a3()),
        rn = r.ZP.span(a6(), c.DF),
        re = r.ZP.div(a9());
      var rt = () => {
        let [n, e] = (0, o.useState)(!1),
          [t, i] = (0, o.useState)(null),
          { address: r } = (0, k.mA)(),
          s = async () => {
            try {
              e(!0);
              let n = await (0, u.$r)(r);
              i(parseInt(n)), e(!1);
            } catch (n) {
              e(!1);
            }
          };
        return (
          (0, o.useEffect)(() => {
            s();
          }, []),
          (0, a.jsx)(a7, {
            children: n
              ? (0, a.jsx)(C.Z, { height: "15px", width: "300px" })
              : (0, a.jsx)(re, {
                  children:
                    0 === t
                      ? (0, a.jsx)(rn, {
                          children:
                            "\uD83D\uDE80 \xa0You will earn 200 Eddy Points if this swap is successful.",
                        })
                      : (0, a.jsxs)(rn, {
                          children: [
                            "\uD83D\uDE80 \xa0 Do your next swap in about ",
                            t,
                            " hours for getting reward points",
                          ],
                        }),
                }),
          })
        );
      };
      function ri() {
        let n = (0, i._)([""]);
        return (
          (ri = function () {
            return n;
          }),
          n
        );
      }
      function ra() {
        let n = (0, i._)([
          "\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  @media screen and (max-width: 940px) {\n  }\n",
        ]);
        return (
          (ra = function () {
            return n;
          }),
          n
        );
      }
      function rr() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n",
        ]);
        return (
          (rr = function () {
            return n;
          }),
          n
        );
      }
      function ro() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  background-color: ",
          ";\n  box-shadow: 0px 6px #121214;\n",
        ]);
        return (
          (ro = function () {
            return n;
          }),
          n
        );
      }
      function rs() {
        let n = (0, i._)([
          "\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  background-color: ",
          ";\n",
        ]);
        return (
          (rs = function () {
            return n;
          }),
          n
        );
      }
      function rl() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5\n"]);
        return (
          (rl = function () {
            return n;
          }),
          n
        );
      }
      function rc() {
        let n = (0, i._)([
          "\n  margin-top: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n",
        ]);
        return (
          (rc = function () {
            return n;
          }),
          n
        );
      }
      function rx() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n",
        ]);
        return (
          (rx = function () {
            return n;
          }),
          n
        );
      }
      function rd() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-right: 18px;\n",
        ]);
        return (
          (rd = function () {
            return n;
          }),
          n
        );
      }
      function rp() {
        let n = (0, i._)([
          "\n  ",
          "\n  color: ",
          ";\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (rp = function () {
            return n;
          }),
          n
        );
      }
      function rm() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5;\n  margin-top: 5px;\n"]);
        return (
          (rm = function () {
            return n;
          }),
          n
        );
      }
      function ru() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  justify-content: flex-start;\n",
        ]);
        return (
          (ru = function () {
            return n;
          }),
          n
        );
      }
      function rk() {
        let n = (0, i._)([
          "\n  display: flex;\n  width: 30px;\n  heigth: 30px;\n  border-radius: 23px;\n  margin-right: 15px;\n",
        ]);
        return (
          (rk = function () {
            return n;
          }),
          n
        );
      }
      function rh() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 1;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (rh = function () {
            return n;
          }),
          n
        );
      }
      function rf() {
        let n = (0, i._)([
          "\n  background-color: ",
          ";\n  height: 40px;\n  display: flex;\n  padding: 0px 25px;\n  align-items: center;\n  cursor: ",
          ";\n  @media screen and (max-width: 940px) {\n    height: 30px;\n  }\n",
        ]);
        return (
          (rf = function () {
            return n;
          }),
          n
        );
      }
      function ry() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 0.5;\n  margin-top: 5px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (ry = function () {
            return n;
          }),
          n
        );
      }
      function rg() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  background-color: ",
          ";\n  margin-top: 10px;\n",
        ]);
        return (
          (rg = function () {
            return n;
          }),
          n
        );
      }
      function rw() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (rw = function () {
            return n;
          }),
          n
        );
      }
      function rA() {
        let n = (0, i._)([
          "\n  display: flex;\n  padding: 18px;\n  margin-top: 15px;\n  background-color: ",
          ";\n  align-items: center;\n\n  input {\n    opacity: 0.7;\n    ",
          "\n    letter-spacing: 1px;\n  }\n",
        ]);
        return (
          (rA = function () {
            return n;
          }),
          n
        );
      }
      function rZ() {
        let n = (0, i._)([
          "\n  ",
          "\n  outline: none;\n  border: none;\n  background-color: transparent;\n  width: 100%;\n  color: white;\n  margin-left: 15px;\n  padding: 0;\n  @media screen and (max-width: 940px) {\n    ",
          '\n  }\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  &[type="number"] {\n    -moz-appearance: textfield;\n    appearance: textfield;\n  }\n\n  &::placeholder {\n    color: white;\n    opacity: 0.5;\n  }\n\n  &:-ms-input-placeholder {\n    color: white;\n  }\n\n  &::-ms-input-placeholder {\n    color: white;\n  }\n',
        ]);
        return (
          (rZ = function () {
            return n;
          }),
          n
        );
      }
      function rb() {
        let n = (0, i._)([
          "\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 230px;\n  padding-right: 20px;\n",
        ]);
        return (
          (rb = function () {
            return n;
          }),
          n
        );
      }
      function rj() {
        let n = (0, i._)([
          "\n  height: 1px;\n  opacity: 0.1;\n  margin-top: 15px;\n  background-color: ",
          ";\n",
        ]);
        return (
          (rj = function () {
            return n;
          }),
          n
        );
      }
      function rS() {
        let n = (0, i._)([
          "\n  display: flex;\n  margin-top: 20px;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (rS = function () {
            return n;
          }),
          n
        );
      }
      function rE() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5;\n"]);
        return (
          (rE = function () {
            return n;
          }),
          n
        );
      }
      function rv() {
        let n = (0, i._)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n",
        ]);
        return (
          (rv = function () {
            return n;
          }),
          n
        );
      }
      function rP() {
        let n = (0, i._)([
          "\n  ",
          "\n  color: ",
          ";\n  margin-left: 7px;\n  opacity: 1;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (rP = function () {
            return n;
          }),
          n
        );
      }
      function rB() {
        let n = (0, i._)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  margin-top: 5px;\n",
        ]);
        return (
          (rB = function () {
            return n;
          }),
          n
        );
      }
      function rD() {
        let n = (0, i._)([
          "\n  margin-right: 15px;\n  ",
          "\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (rD = function () {
            return n;
          }),
          n
        );
      }
      function rT() {
        let n = (0, i._)([
          "\n  display: flex;\n  border-radius: 12px;\n  background-color: ",
          ";\n  margin: -15px 0px;\n  justify-content: center;\n  align-items: center;\n  @media screen and (max-width: 940px) {\n    width: 24px;\n    height: 24px;\n    border-radius: 12px;\n  }\n",
        ]);
        return (
          (rT = function () {
            return n;
          }),
          n
        );
      }
      function rC() {
        let n = (0, i._)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  cursor: pointer;\n  height: 10px;\n",
        ]);
        return (
          (rC = function () {
            return n;
          }),
          n
        );
      }
      function r_() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  min-width: 420px;\n  margin-top: 100px;\n  @media screen and (max-width: 940px) {\n    width: 100%;\n    min-width: 0px;\n    margin: 40px 25px;\n  }\n",
        ]);
        return (
          (r_ = function () {
            return n;
          }),
          n
        );
      }
      let rF = r.ZP.div(ri()),
        rR = r.ZP.div(ra()),
        rV = r.ZP.div(rr()),
        rI = r.ZP.div(ro(), m.O.shade2),
        rG = r.ZP.div(rs(), m.O.shade0),
        rO = r.ZP.span(rl(), c.w2),
        rN = r.ZP.div(rc()),
        rL = r.ZP.div(rx()),
        rM = r.ZP.div(rd()),
        rU = r.ZP.span(rp(), c.pm, m.O.white, c.Dl),
        rW = r.ZP.span(rm(), c.fy),
        rH = r.ZP.div(ru()),
        rz = r.ZP.div(rk()),
        rY = r.ZP.span(rh(), c.Cw, c.Dl),
        rq = r.ZP.div(rf(), m.O.shade2, (n) =>
          n.disablecursor ? "no-drop" : "pointer"
        ),
        rK = r.ZP.span(ry(), c.w2, c.fy),
        rQ = r.ZP.div(rg(), m.O.shade2),
        rX = r.ZP.span(rw(), c.ny),
        rJ = r.ZP.div(rA(), m.O.shade0, c.BO),
        r$ = r.ZP.input(rZ(), c.PT, c.Dl),
        r0 = r.ZP.div(rb()),
        r1 = r.ZP.div(rj(), m.O.white),
        r2 = r.ZP.div(rS()),
        r5 = r.ZP.span(rE(), c.MU),
        r4 = r.ZP.div(rv()),
        r8 = r.ZP.span(rP(), c.Dl, m.O.background, c.tS),
        r3 = r.ZP.div(rB()),
        r6 = r.ZP.span(rD(), c.MU, c.fy);
      r.ZP.div(rT(), m.O.shade3);
      let r9 = r.ZP.div(rC()),
        r7 = r.ZP.div(r_());
      var on = (0, s.f3)(
          "appStore",
          "transferStore"
        )(
          (0, s.Pi)(() => {
            var n, e, t, i;
            let [r, s] = (0, o.useState)(""),
              [c, x] = (0, o.useState)("Review transaction"),
              [d, p] = (0, o.useState)(!0),
              [h, f] = (0, o.useState)("0.00"),
              [g, w] = (0, o.useState)(!1),
              [A, Z] = (0, o.useState)(!1),
              { switchNetwork: b } = (0, k.g0)(),
              { chain: j } = (0, k.LN)(),
              { address: S, isConnected: E } = (0, k.mA)(),
              { data: v } = (0, k.KQ)({
                address: S,
                chainId: null == j ? void 0 : j.id,
              }),
              P = (0, iE.c)().includes(null == j ? void 0 : j.id),
              B = window.innerWidth,
              D = !1;
            B <= 940 && (D = !0);
            let T = async () => {
                try {
                  await (0, tr.getAddress)({
                    payload: {
                      purposes: [
                        tr.AddressPurposes.ORDINALS,
                        tr.AddressPurposes.PAYMENT,
                      ],
                      message: "Address for receiving Ordinals and payments",
                      network: { type: "Testnet" },
                    },
                    onFinish: (n) => {
                      let e = n.addresses[1].address,
                        t = n.addresses[1].publicKey;
                      x("Enter amount to transfer"),
                        localStorage.setItem("btc-payment-address", e),
                        localStorage.setItem("btc-payment-public-key", t),
                        l.Z.setBtcPaymentAddress(e),
                        l.Z.setBtcPaymentPublicKey(t);
                    },
                    onCancel: () => {
                      l.Z.setToastMessage({
                        message: "User cancelled connection",
                        type: "INFO",
                      });
                    },
                  });
                } catch (n) {
                  l.Z.setBtcWalletConnectOpen(!0);
                }
              },
              _ = () => {
                if (!E) {
                  x(tl.BN.CONNECT_WALLET_EVM);
                  return;
                }
                "" !== tc.Z.fromAmount &&
                parseFloat(tc.Z.fromAmount) > 0 &&
                tc.Z.fromChainId === tl.XN.BITCOIN &&
                parseFloat(h) > parseFloat(tc.Z.fromAmount)
                  ? x(tl.BN.REVIEW_TRANSACTION)
                  : "" !== tc.Z.fromAmount &&
                    parseFloat(tc.Z.fromAmount) > 0 &&
                    tc.Z.fromChainId !== tl.XN.BITCOIN &&
                    parseFloat(v.formatted) > parseFloat(tc.Z.fromAmount)
                  ? x(tl.BN.REVIEW_TRANSACTION)
                  : "" === tc.Z.fromAmount || 0 === parseFloat(tc.Z.fromAmount)
                  ? (p(!0), x(tl.BN.ENTER_AMOUNT))
                  : (x(tl.BN.INSUFFICIENT_BALANCE), p(!0));
              },
              F = async () => {
                let n = l.Z.btcPaymentAddress;
                if (!n) return;
                w(!0);
                let e = await (0, tl.b8)(n);
                if (!e) {
                  w(!1);
                  return;
                }
                f(e.toString()), w(!1);
              },
              R = () => {
                localStorage.getItem("txn-history") ||
                  localStorage.setItem("txn-history", JSON.stringify([]));
              },
              V = async () => {
                try {
                  w(!0);
                  let n = 1e18 * parseFloat(tc.Z.fromAmount),
                    e = await (0, u.r)(
                      tc.Z.fromChainId,
                      tc.Z.toChainId,
                      n.toString(),
                      S
                    );
                  (e =
                    tc.Z.toChainId === tl.XN.BITCOIN
                      ? parseFloat(e) / 1e8
                      : parseFloat(e) / 1e18),
                    tc.Z.setToAmount((0, y.Om)(e).toString()),
                    w(!1);
                } catch (n) {
                  w(!1),
                    D
                      ? l.Z.setPhoneToastMessage({
                          message: "Failed to fetch quote",
                          type: "danger",
                        })
                      : l.Z.setToastMessage({
                          message: "Failed to fetch quote",
                          type: "DANGER",
                        });
                }
              };
            return (
              (0, o.useEffect)(() => {
                _(),
                  E && tc.Z.setFromChainId(j.id),
                  E || (tc.Z.setFromChainId(0), tc.Z.setFromChainId(0));
              }, [E]),
              (0, o.useEffect)(() => {
                R();
              }, []),
              (0, o.useEffect)(() => {
                j && tc.Z.setFromChainId(j.id);
              }, []),
              (0, o.useEffect)(() => {
                (null == j ? void 0 : j.id) &&
                  iE.S.includes(null == j ? void 0 : j.id) &&
                  tc.Z.setFromChainId(j.id);
              }, [j]),
              (0, o.useEffect)(() => {
                _(),
                  0 !== tc.Z.fromChainId &&
                    0 !== tc.Z.toChainId &&
                    Number(tc.Z.fromAmount) > 0 &&
                    V();
              }, [tc.Z.fromAmount]),
              (0, o.useEffect)(() => {
                tc.Z.fromChainId === tl.XN.BITCOIN && F();
              }, [tc.Z.fromChainId, l.Z.btcPaymentAddress]),
              (0, o.useEffect)(() => {
                tc.Z.setFromChainId(tc.Z.fromChainId),
                  tc.Z.setToChainId(tc.Z.toChainId);
              }, [tc.Z.fromChainId, tc.Z.toChainId]),
              (0, a.jsxs)(rR, {
                children: [
                  "Transfer" === l.Z.activeTab
                    ? (0, a.jsx)(rV, {
                        children: (0, a.jsxs)(rF, {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            flex: 1,
                          },
                          children: [
                            (0, a.jsx)(rF, {
                              style: {
                                display: "flex",
                                width: "100%",
                                justifyContent: "center",
                              },
                              children: (0, a.jsxs)(r7, {
                                children: [
                                  tc.Z.tokenModal
                                    ? (0, a.jsxs)(rQ, {
                                        children: [
                                          (0, a.jsxs)(r4, {
                                            children: [
                                              (0, a.jsx)(rX, {
                                                children:
                                                  "Select token to transfer",
                                              }),
                                              (0, a.jsx)(to.x8, {
                                                onClick: () => {
                                                  tc.Z.setTokenModal(!1);
                                                },
                                                style: {
                                                  cursor: "pointer",
                                                  width: "12px",
                                                },
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)(rJ, {
                                            children: [
                                              (0, a.jsx)(to.W1, {}),
                                              (0, a.jsx)(r$, {
                                                value: r,
                                                placeholder: "Search",
                                                onChange: (n) => {
                                                  s(n.target.value);
                                                },
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)(r1, {}),
                                          (0, a.jsxs)(r0, {
                                            children: [
                                              D &&
                                                tl.Q3.map((n, e) =>
                                                  (0, a.jsx)(
                                                    a8,
                                                    { chainId: n, index: e },
                                                    e
                                                  )
                                                ),
                                              !D &&
                                                tl.TE.map((n, e) =>
                                                  (0, a.jsx)(
                                                    a8,
                                                    { chainId: n, index: e },
                                                    e
                                                  )
                                                ),
                                            ],
                                          }),
                                          (0, a.jsx)(r1, {}),
                                          (0, a.jsx)(r2, {
                                            children: (0, a.jsx)(r5, {
                                              children:
                                                "*more tokens are coming soon*",
                                            }),
                                          }),
                                        ],
                                      })
                                    : tc.Z.transferState === tl.ki.SELECT_TOKENS
                                    ? (0, a.jsxs)(rF, {
                                        children: [
                                          (0, a.jsx)(tP, {}),
                                          (0, a.jsxs)(rI, {
                                            children: [
                                              (0, a.jsxs)(rG, {
                                                children: [
                                                  (0, a.jsx)(rO, {
                                                    children: "You pay",
                                                  }),
                                                  (0, a.jsxs)(rN, {
                                                    children: [
                                                      (0, a.jsx)(rL, {
                                                        onClick: () => {
                                                          if (!E || !P) {
                                                            if (D) {
                                                              l.Z.setPhoneToastMessage(
                                                                {
                                                                  message:
                                                                    "".concat(
                                                                      E
                                                                        ? "Change network"
                                                                        : "Connect wallet"
                                                                    ),
                                                                  type: "danger",
                                                                }
                                                              );
                                                              return;
                                                            }
                                                            l.Z.setToastMessage(
                                                              {
                                                                message:
                                                                  "".concat(
                                                                    E
                                                                      ? "Change network"
                                                                      : "Connect wallet"
                                                                  ),
                                                                type: "DANGER",
                                                              }
                                                            );
                                                            return;
                                                          }
                                                          tc.Z.setTokenModal(
                                                            !0
                                                          ),
                                                            tc.Z.setTokenClicked(
                                                              "from"
                                                            );
                                                        },
                                                        children:
                                                          0 !==
                                                            tc.Z.fromChainId &&
                                                          P
                                                            ? (0, a.jsxs)(rF, {
                                                                style: {
                                                                  display:
                                                                    "flex",
                                                                  flexDirection:
                                                                    "row",
                                                                },
                                                                children: [
                                                                  (0, a.jsx)(
                                                                    rz,
                                                                    {
                                                                      children:
                                                                        (0,
                                                                        to.uq)(
                                                                          tc.Z
                                                                            .fromChainId,
                                                                          32,
                                                                          32
                                                                        ),
                                                                    }
                                                                  ),
                                                                  (0, a.jsxs)(
                                                                    rM,
                                                                    {
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          a.jsx)(
                                                                            rU,
                                                                            {
                                                                              children:
                                                                                null ===
                                                                                  (n =
                                                                                    (0,
                                                                                    tl.bt)(
                                                                                      tc
                                                                                        .Z
                                                                                        .fromChainId
                                                                                    )) ||
                                                                                void 0 ===
                                                                                  n
                                                                                  ? void 0
                                                                                  : n.name,
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          a.jsxs)(
                                                                            rW,
                                                                            {
                                                                              children:
                                                                                [
                                                                                  "On",
                                                                                  " ",
                                                                                  null ===
                                                                                    (e =
                                                                                      (0,
                                                                                      tl.bt)(
                                                                                        tc
                                                                                          .Z
                                                                                          .fromChainId
                                                                                      )) ||
                                                                                  void 0 ===
                                                                                    e
                                                                                    ? void 0
                                                                                    : e.chainName,
                                                                                ],
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                  (0, a.jsx)(
                                                                    to._M,
                                                                    {
                                                                      width: D
                                                                        ? 6
                                                                        : 10,
                                                                      height: 6,
                                                                    }
                                                                  ),
                                                                ],
                                                              })
                                                            : (0, a.jsxs)(rq, {
                                                                disablecursor:
                                                                  E && P
                                                                    ? 0
                                                                    : 1,
                                                                children: [
                                                                  (0, a.jsx)(
                                                                    r6,
                                                                    {
                                                                      children:
                                                                        "Select",
                                                                    }
                                                                  ),
                                                                  (0, a.jsx)(
                                                                    to._M,
                                                                    {
                                                                      width: D
                                                                        ? 6
                                                                        : 10,
                                                                      height: 6,
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                      }),
                                                      (0, a.jsxs)(rH, {
                                                        children: [
                                                          (0, a.jsx)(r$, {
                                                            placeholder: "0.00",
                                                            style: {
                                                              maxWidth: "100px",
                                                              marginLeft: "0px",
                                                              textAlign:
                                                                "right",
                                                            },
                                                            maxLength: 18,
                                                            type: "number",
                                                            value:
                                                              tc.Z.fromAmount,
                                                            onChange: (n) => {
                                                              let e =
                                                                  n.target
                                                                    .value,
                                                                t = e.length;
                                                              t > 18 ||
                                                                tc.Z.setFromAmount(
                                                                  e
                                                                );
                                                            },
                                                          }),
                                                          (0, a.jsxs)(r3, {
                                                            children: [
                                                              (0, a.jsx)(rK, {
                                                                children:
                                                                  tc.Z
                                                                    .fromChainId !==
                                                                  tl.XN.BITCOIN
                                                                    ? (0,
                                                                      a.jsxs)(
                                                                        a.Fragment,
                                                                        {
                                                                          children:
                                                                            [
                                                                              "Bal:",
                                                                              " ",
                                                                              v
                                                                                ? (0,
                                                                                  y.Om)(
                                                                                    null ==
                                                                                      v
                                                                                      ? void 0
                                                                                      : v.formatted
                                                                                  )
                                                                                : 0,
                                                                              " ",
                                                                            ],
                                                                        }
                                                                      )
                                                                    : (0,
                                                                      a.jsx)(
                                                                        a.Fragment,
                                                                        {
                                                                          children:
                                                                            g
                                                                              ? (0,
                                                                                a.jsx)(
                                                                                  C.Z,
                                                                                  {
                                                                                    height:
                                                                                      "15px",
                                                                                    width:
                                                                                      "60px",
                                                                                  }
                                                                                )
                                                                              : (0,
                                                                                a.jsxs)(
                                                                                  a.Fragment,
                                                                                  {
                                                                                    children:
                                                                                      [
                                                                                        "Bal:",
                                                                                        " ",
                                                                                        h
                                                                                          ? (0,
                                                                                            y.Om)(
                                                                                              h
                                                                                            )
                                                                                          : "0.00",
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                        }
                                                                      ),
                                                              }),
                                                              (0, a.jsx)(r8, {
                                                                onClick: () => {
                                                                  if (
                                                                    tc.Z
                                                                      .fromChainId ===
                                                                    tl.XN
                                                                      .BITCOIN
                                                                  ) {
                                                                    let n = (0,
                                                                    y.Om)(
                                                                      h,
                                                                      4
                                                                    ).toString();
                                                                    tc.Z.setFromAmount(
                                                                      n
                                                                    );
                                                                  } else {
                                                                    let n = (0,
                                                                    y.Om)(
                                                                      null == v
                                                                        ? void 0
                                                                        : v.formatted,
                                                                      8
                                                                    ).toString();
                                                                    tc.Z.setFromAmount(
                                                                      n
                                                                    );
                                                                  }
                                                                },
                                                                children: "Max",
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, a.jsx)(r9, {
                                                onClick: () => {
                                                  let n = tc.Z.fromChainId,
                                                    e = tc.Z.toChainId;
                                                  tc.Z.setFromChainId(e),
                                                    tc.Z.setToChainId(n),
                                                    tc.Z.setFromAmount(""),
                                                    0 != e && b(e);
                                                },
                                                children: (0, a.jsx)(to.sv, {
                                                  width: D ? 28 : 38,
                                                  height: D ? 28 : 38,
                                                }),
                                              }),
                                              (0, a.jsxs)(rG, {
                                                children: [
                                                  (0, a.jsx)(rO, {
                                                    children: "You get",
                                                  }),
                                                  (0, a.jsxs)(rN, {
                                                    children: [
                                                      (0, a.jsx)(rL, {
                                                        onClick: () => {
                                                          if (!E || !P) {
                                                            if (D) {
                                                              l.Z.setPhoneToastMessage(
                                                                {
                                                                  message:
                                                                    "".concat(
                                                                      E
                                                                        ? "Change network"
                                                                        : "Connect wallet"
                                                                    ),
                                                                  type: "danger",
                                                                }
                                                              );
                                                              return;
                                                            }
                                                            l.Z.setToastMessage(
                                                              {
                                                                message:
                                                                  "".concat(
                                                                    E
                                                                      ? "Change network"
                                                                      : "Connect wallet"
                                                                  ),
                                                                type: "DANGER",
                                                              }
                                                            );
                                                            return;
                                                          }
                                                          tc.Z.setTokenModal(
                                                            !0
                                                          ),
                                                            tc.Z.setTokenClicked(
                                                              "to"
                                                            );
                                                        },
                                                        children:
                                                          0 === tc.Z.toChainId
                                                            ? (0, a.jsxs)(rq, {
                                                                disablecursor:
                                                                  E && P
                                                                    ? 0
                                                                    : 1,
                                                                children: [
                                                                  (0, a.jsx)(
                                                                    r6,
                                                                    {
                                                                      children:
                                                                        "Select",
                                                                    }
                                                                  ),
                                                                  (0, a.jsx)(
                                                                    to._M,
                                                                    {
                                                                      width: D
                                                                        ? 6
                                                                        : 10,
                                                                      height: 6,
                                                                    }
                                                                  ),
                                                                ],
                                                              })
                                                            : (0, a.jsxs)(rF, {
                                                                style: {
                                                                  display:
                                                                    "flex",
                                                                  flexDirection:
                                                                    "row",
                                                                },
                                                                children: [
                                                                  (0, a.jsx)(
                                                                    rz,
                                                                    {
                                                                      children:
                                                                        (0,
                                                                        to.uq)(
                                                                          tc.Z
                                                                            .toChainId,
                                                                          32,
                                                                          32
                                                                        ),
                                                                    }
                                                                  ),
                                                                  (0, a.jsxs)(
                                                                    rM,
                                                                    {
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          a.jsx)(
                                                                            rU,
                                                                            {
                                                                              children:
                                                                                null ===
                                                                                  (t =
                                                                                    (0,
                                                                                    tl.bt)(
                                                                                      tc
                                                                                        .Z
                                                                                        .toChainId
                                                                                    )) ||
                                                                                void 0 ===
                                                                                  t
                                                                                  ? void 0
                                                                                  : t.name,
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          a.jsxs)(
                                                                            rW,
                                                                            {
                                                                              children:
                                                                                [
                                                                                  "On",
                                                                                  " ",
                                                                                  null ===
                                                                                    (i =
                                                                                      (0,
                                                                                      tl.bt)(
                                                                                        tc
                                                                                          .Z
                                                                                          .toChainId
                                                                                      )) ||
                                                                                  void 0 ===
                                                                                    i
                                                                                    ? void 0
                                                                                    : i.chainName,
                                                                                ],
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                  (0, a.jsx)(
                                                                    to._M,
                                                                    {
                                                                      width: D
                                                                        ? 6
                                                                        : 10,
                                                                      height: 6,
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                      }),
                                                      (0, a.jsx)(rH, {
                                                        children: (0, a.jsx)(
                                                          rY,
                                                          {
                                                            children: g
                                                              ? (0, a.jsx)(
                                                                  C.Z,
                                                                  {
                                                                    width:
                                                                      "25px",
                                                                    height:
                                                                      "10px",
                                                                  }
                                                                )
                                                              : (0, a.jsx)(rF, {
                                                                  children:
                                                                    parseFloat(
                                                                      tc.Z
                                                                        .fromAmount
                                                                    ) > 0 &&
                                                                    0 !==
                                                                      tc.Z
                                                                        .toChainId
                                                                      ? tc.Z
                                                                          .toAmount
                                                                      : "0.00",
                                                                }),
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              0 !== tc.Z.fromChainId &&
                                                0 !== tc.Z.toChainId &&
                                                (0, a.jsx)(tA, {}),
                                            ],
                                          }),
                                        ],
                                      })
                                    : tc.Z.transferState ===
                                      tl.ki.REVIEW_TRANSFER
                                    ? (0, a.jsx)(t$, {})
                                    : (0, a.jsx)(iS, {}),
                                  tc.Z.tokenModal ||
                                  tc.Z.transferState !== tl.ki.SELECT_TOKENS
                                    ? null
                                    : (0, a.jsx)(nQ.Z, {
                                        style: { marginTop: "15px" },
                                        onClick: () => {
                                          if (!A) {
                                            if (
                                              c === tl.BN.CONNECT_WALLET_BTC
                                            ) {
                                              T();
                                              return;
                                            }
                                            if (
                                              c === tl.BN.CONNECT_WALLET_EVM
                                            ) {
                                              if (D) {
                                                l.Z.setBottomsheetOpen(!0),
                                                  l.Z.setWalletConnectBottomsheet(
                                                    !0
                                                  );
                                                return;
                                              }
                                              l.Z.setWalletConnectOpen(!0);
                                              return;
                                            }
                                            if (0 === tc.Z.toChainId) {
                                              if (D) {
                                                l.Z.setPhoneToastMessage({
                                                  message:
                                                    "Select destination chain for swap",
                                                  type: "danger",
                                                });
                                                return;
                                              }
                                              l.Z.setToastMessage({
                                                message:
                                                  "Select destination chain for swap",
                                                type: "DANGER",
                                              });
                                              return;
                                            }
                                            if (
                                              c !== tl.BN.ENTER_AMOUNT &&
                                              c !== tl.BN.INSUFFICIENT_BALANCE
                                            ) {
                                              if (
                                                tc.Z.toChainId ===
                                                  tl.XN.BITCOIN &&
                                                !l.Z.btcPaymentAddress
                                              ) {
                                                l.Z.setToastMessage({
                                                  message: "Connect BTC wallet",
                                                  type: "DANGER",
                                                });
                                                return;
                                              }
                                              if (
                                                parseFloat(tc.Z.fromAmount) > 5
                                              ) {
                                                D
                                                  ? l.Z.setPhoneToastMessage({
                                                      message:
                                                        "Enter an amount less than 5 ".concat(
                                                          (0, tl.bt)(
                                                            tc.Z.fromChainId
                                                          ).name
                                                        ),
                                                      type: "info",
                                                    })
                                                  : l.Z.setToastMessage({
                                                      message:
                                                        "Enter an amount less than 5 ".concat(
                                                          (0, tl.bt)(
                                                            tc.Z.fromChainId
                                                          ).name
                                                        ),
                                                      type: "INFO",
                                                    });
                                                return;
                                              }
                                              tc.Z.setTransferState(
                                                tl.ki.REVIEW_TRANSFER
                                              );
                                            }
                                          }
                                        },
                                        children: (0, a.jsx)(ts.Z, {
                                          disabled: d,
                                          style: {
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "".concat(
                                              c === tl.BN.INSUFFICIENT_BALANCE
                                                ? "#fff"
                                                : "#000"
                                            ),
                                            boxShadow: "".concat(
                                              c === tl.BN.INSUFFICIENT_BALANCE
                                                ? "0px 6px ".concat(
                                                    m.O.greyStoneShadow
                                                  )
                                                : "0px 6px ".concat(
                                                    m.O.shadowColor
                                                  )
                                            ),
                                            padding: "15px",
                                            backgroundColor: "".concat(
                                              c === tl.BN.INSUFFICIENT_BALANCE
                                                ? "".concat(m.O.shade2)
                                                : "".concat(m.O.background)
                                            ),
                                          },
                                          children: c,
                                        }),
                                      }),
                                  (0, a.jsx)(rt, {}),
                                ],
                              }),
                            }),
                            tc.Z.transactionHistory ? (0, a.jsx)(as, {}) : null,
                          ],
                        }),
                      })
                    : null,
                  D &&
                    tc.Z.transferState === tl.ki.SELECT_TOKENS &&
                    (0, a.jsx)(aU, {}),
                ],
              })
            );
          })
        ),
        oe = t(46670);
      function ot() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n",
        ]);
        return (
          (ot = function () {
            return n;
          }),
          n
        );
      }
      function oi() {
        let n = (0, i._)([""]);
        return (
          (oi = function () {
            return n;
          }),
          n
        );
      }
      function oa() {
        let n = (0, i._)([
          "\n  display: flex;\n  padding: 24px;\n  background-color: #0f0f0f;\n  flex-direction: column;\n  min-width: 420px;\n",
        ]);
        return (
          (oa = function () {
            return n;
          }),
          n
        );
      }
      function or() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  background-color: ",
          ";\n  border-radius: 10px;\n  margin-top: 16px;\n  padding: 16px;\n",
        ]);
        return (
          (or = function () {
            return n;
          }),
          n
        );
      }
      function oo() {
        let n = (0, i._)(["\n  color: ", ";\n  ", "\n"]);
        return (
          (oo = function () {
            return n;
          }),
          n
        );
      }
      function os() {
        let n = (0, i._)(["\n  color: ", ";\n  ", "\n"]);
        return (
          (os = function () {
            return n;
          }),
          n
        );
      }
      function ol() {
        let n = (0, i._)([
          "\n  height: 1px;\n  opacity: 0.1;\n  margin-top: 10px;\n  background-color: ",
          ";\n",
        ]);
        return (
          (ol = function () {
            return n;
          }),
          n
        );
      }
      function oc() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-top: 10px;\n",
        ]);
        return (
          (oc = function () {
            return n;
          }),
          n
        );
      }
      function ox() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n",
        ]);
        return (
          (ox = function () {
            return n;
          }),
          n
        );
      }
      function od() {
        let n = (0, i._)(["\n  ", "\n  padding: 4px 0px;\n"]);
        return (
          (od = function () {
            return n;
          }),
          n
        );
      }
      function op() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n",
        ]);
        return (
          (op = function () {
            return n;
          }),
          n
        );
      }
      function om() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (om = function () {
            return n;
          }),
          n
        );
      }
      function ou() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5;\n  margin-top: 5px;\n"]);
        return (
          (ou = function () {
            return n;
          }),
          n
        );
      }
      function ok() {
        let n = (0, i._)([
          "\n  display: flex;\n  background-color: #fff;\n  padding: 7px 12px;\n",
        ]);
        return (
          (ok = function () {
            return n;
          }),
          n
        );
      }
      function oh() {
        let n = (0, i._)(["\n  ", "\n  color: #000\n"]);
        return (
          (oh = function () {
            return n;
          }),
          n
        );
      }
      function of() {
        let n = (0, i._)(["\n  ", "\n  margin-top: 15px;\n  opacity: 0.5;\n"]);
        return (
          (of = function () {
            return n;
          }),
          n
        );
      }
      function oy() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 0.75px solid ",
          ";\n  padding-bottom: 15px;\n",
        ]);
        return (
          (oy = function () {
            return n;
          }),
          n
        );
      }
      function og() {
        let n = (0, i._)(["\n  display: flex;\n  flex-direction: column;\n"]);
        return (
          (og = function () {
            return n;
          }),
          n
        );
      }
      function ow() {
        let n = (0, i._)(["\n  ", ";\n  padding: 4px 0px;\n"]);
        return (
          (ow = function () {
            return n;
          }),
          n
        );
      }
      function oA() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (oA = function () {
            return n;
          }),
          n
        );
      }
      function oZ() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n",
        ]);
        return (
          (oZ = function () {
            return n;
          }),
          n
        );
      }
      function ob() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  min-width: 420px;\n  min-height: 420px;\n  margin-top: 200px;\n  @media screen and (max-width: 940px) {\n    width: 100%;\n    min-width: 0px;\n    margin: 40px 25px;\n  }\n",
        ]);
        return (
          (ob = function () {
            return n;
          }),
          n
        );
      }
      function oj() {
        let n = (0, i._)([
          "\n  background-color: #000;\n  margin-top: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  border-radius: 5px;\n",
        ]);
        return (
          (oj = function () {
            return n;
          }),
          n
        );
      }
      function oS() {
        let n = (0, i._)([
          "\n  ",
          "\n  outline: none;\n  border: none;\n  background-color: transparent;\n  width: 100%;\n  color: white;\n  margin-left: 15px;\n  padding: 0;\n  opacity: 0.5;\n  @media screen and (max-width: 940px) {\n    ",
          '\n  }\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  &[type="number"] {\n    -moz-appearance: textfield;\n    appearance: textfield;\n  }\n\n  &::placeholder {\n    color: white;\n    opacity: 0.5;\n  }\n\n  &:-ms-input-placeholder {\n    color: white;\n  }\n\n  &::-ms-input-placeholder {\n    color: white;\n  }\n',
        ]);
        return (
          (oS = function () {
            return n;
          }),
          n
        );
      }
      function oE() {
        let n = (0, i._)([
          "\n  padding: 12.5px 17px;\n  background-color: ",
          ";\n  width: ",
          ";\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  border-radius: 5px;\n",
        ]);
        return (
          (oE = function () {
            return n;
          }),
          n
        );
      }
      function ov() {
        let n = (0, i._)(["\n  ", "\n  color: #000\n"]);
        return (
          (ov = function () {
            return n;
          }),
          n
        );
      }
      function oP() {
        let n = (0, i._)(["\n  display: ", ";\n  width: 70%;\n"]);
        return (
          (oP = function () {
            return n;
          }),
          n
        );
      }
      let oB = r.ZP.div(ot()),
        oD = r.ZP.div(oi()),
        oT = r.ZP.div(oa()),
        oC = r.ZP.div(or(), m.O.shade7),
        o_ = r.ZP.span(oo(), m.O.shade1, c.BO),
        oF = r.ZP.span(os(), m.O.ink7, c.fy);
      r.ZP.div(ol(), m.O.white), r.ZP.div(oc()), r.ZP.div(ox());
      let oR = r.ZP.span(od(), c.ny);
      r.ZP.div(op()),
        r.ZP.span(om(), c.sy),
        r.ZP.span(ou(), c.w2),
        r.ZP.div(ok()),
        r.ZP.span(oh(), c.Bj),
        r.ZP.span(of(), c.cV),
        r.ZP.div(oy(), m.O.borderVariant4),
        r.ZP.div(og()),
        r.ZP.span(ow(), c.DD),
        r.ZP.span(oA(), c.DD),
        r.ZP.div(oZ());
      let oV = r.ZP.div(ob()),
        oI = r.ZP.div(oj()),
        oG = r.ZP.input(oS(), c.MU, c.w2),
        oO = r.ZP.div(oE(), m.O.background, (n) =>
          n.hideinput ? "100%" : "50px"
        ),
        oN = r.ZP.span(ov(), c.Bj),
        oL = r.ZP.div(oP(), (n) => (n.hideinput ? "none" : "flex"));
      var oM = (0, s.f3)("appStore")(
          (0, s.Pi)(() => {
            let [n, e] = (0, o.useState)(""),
              [t, i] = (0, o.useState)(!1),
              [r, s] = (0, o.useState)("Tweet"),
              [c, x] = (0, o.useState)("Follow on Twitter"),
              { address: d } = (0, k.mA)();
            (0, o.useEffect)(() => {
              d ? s("Tweet") : s("Connect wallet");
            }, [d]);
            let p = async () => {
                try {
                  i(!0);
                  let n = localStorage.getItem("eddyUserId"),
                    e = await (0, u.w6)(d, n);
                  if ("success" === e.message) {
                    let n = Math.floor(Date.now() / 1e3);
                    localStorage.setItem("eddyLastMintTimestamp", n.toString()),
                      l.Z.setPhoneToastMessage({
                        message:
                          "Successfully minted Zeta tokens on your wallet",
                      }),
                      localStorage.setItem("eddyUserTweeted", "1"),
                      i(!1);
                  } else
                    l.Z.setPhoneToastMessage({
                      message:
                        "Failed to mint Zeta tokens. Please try again later",
                      type: "danger",
                    }),
                      localStorage.setItem("eddyUserTweeted", "1"),
                      i(!1);
                } catch (n) {
                  l.Z.setPhoneToastMessage({
                    message:
                      "Failed to mint Zeta tokens. Please try again later",
                    type: "danger",
                  }),
                    localStorage.setItem("eddyUserTweeted", "1"),
                    i(!1);
                }
              },
              m = async () => {
                let n = localStorage.getItem("eddyLastMintTimestamp"),
                  e = Math.floor(Date.now() / 1e3);
                if (n) {
                  let t = parseFloat(e.toString()) - parseFloat(n);
                  if (t > 86400) {
                    p();
                    return;
                  }
                  l.Z.setPhoneToastMessage({
                    message: "Faucet can only be used once in 24 hours",
                    type: "danger",
                  });
                  return;
                }
                p();
              },
              h = (n) => {
                let e = encodeURIComponent(n);
                return "https://twitter.com/intent/tweet?text=".concat(e);
              },
              f = () => {
                let n =
                    "Claiming faucet tokens in @eddy_protocol for wallet ".concat(
                      d,
                      "        \n    They are the first Omnichain DEX on @zetablockchain"
                    ),
                  e = h(n);
                window.open(e, "_blank");
              },
              y = (n) => {
                let e = /^(https:\/\/twitter\.com|https:\/\/x\.com)/.test(n);
                return e;
              };
            return (0, a.jsx)(oB, {
              children: (0, a.jsx)(oD, {
                style: { display: "flex", flexDirection: "column", flex: 1 },
                children: (0, a.jsx)(oD, {
                  style: {
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  },
                  children: (0, a.jsx)(oV, {
                    children: (0, a.jsxs)(oT, {
                      children: [
                        (0, a.jsx)(oR, {
                          children: "Claim your Eddy Testnet tokens",
                        }),
                        (0, a.jsxs)(oC, {
                          children: [
                            (0, a.jsx)(o_, {
                              children: "Follow Eddy on Twitter",
                            }),
                            (0, a.jsx)(oF, {
                              children:
                                "Follow Eddy to authenticate your Twitter account",
                            }),
                            (0, a.jsx)(nQ.Z, {
                              style: { marginTop: "15px", width: "100%" },
                              onClick: () => {
                                window.open(
                                  "https://twitter.com/eddy_protocol",
                                  "_blank"
                                ),
                                  x("Already Followed!"),
                                  localStorage.setItem("eddyUserFollowed", "1");
                              },
                              children: (0, a.jsx)(ts.Z, {
                                style: {
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "#000",
                                  boxShadow: "none",
                                  padding: "15px",
                                  backgroundColor: "".concat(
                                    "Follow on Twitter" === c
                                      ? "#8BCE2B"
                                      : "#787878"
                                  ),
                                  borderRadius: "5px",
                                },
                                children: t
                                  ? (0, a.jsx)(tD.Z, {
                                      theme: "dark",
                                      small: 1,
                                    })
                                  : "".concat(c),
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsxs)(oC, {
                          children: [
                            (0, a.jsx)(o_, { children: "Tweet and Claim" }),
                            (0, a.jsx)(oF, {
                              children:
                                "Tweet and paste your link to claim tokens",
                            }),
                            "1" === localStorage.getItem("eddyUserFollowed")
                              ? (0, a.jsxs)(oI, {
                                  children: [
                                    (0, a.jsx)(oL, {
                                      hideinput: 0,
                                      children: (0, a.jsx)(oG, {
                                        value: n,
                                        placeholder: "Paste tweet link here...",
                                        onChange: (n) => {
                                          let { value: t } = n.target;
                                          e(t),
                                            t.length > 0
                                              ? s("Verify")
                                              : s("Tweet");
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(oO, {
                                      hideinput: 0,
                                      onClick: () => {
                                        if (!t) {
                                          if ("" === n || 0 === n.length) f();
                                          else {
                                            let e = y(n);
                                            if (!e) {
                                              l.Z.setToastMessage({
                                                message:
                                                  "Invalid tweet link. Please check again",
                                                type: "DANGER",
                                              });
                                              return;
                                            }
                                            m();
                                          }
                                        }
                                      },
                                      children: t
                                        ? (0, a.jsx)(tD.Z, { extrasmall: 1 })
                                        : (0, a.jsx)(oN, { children: r }),
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            });
          })
        ),
        oU = t(59847);
      function oW() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 18px;\n",
        ]);
        return (
          (oW = function () {
            return n;
          }),
          n
        );
      }
      function oH() {
        let n = (0, i._)([
          "\n  ",
          "\n  color: ",
          ";\n  margin-bottom: 5px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (oH = function () {
            return n;
          }),
          n
        );
      }
      function oz() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 0.5;\n  color: ",
          ";\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (oz = function () {
            return n;
          }),
          n
        );
      }
      let oY = r.ZP.div(oW()),
        oq = r.ZP.span(oH(), c.B0, m.O.white, c.MU),
        oK = r.ZP.span(oz(), c.Ir, m.O.white, c.w2);
      var oQ = () =>
          (0, a.jsxs)(oY, {
            children: [
              (0, a.jsx)(oq, { children: "Zetaswap" }),
              (0, a.jsx)(oK, { children: "Swap your tokens on zetachain" }),
            ],
          }),
        oX = t(11435),
        oJ = t(23330),
        o$ = t(22955);
      function o0() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  padding: 10px 20px 20px 20px;\n  background-color: ",
          ";\n",
        ]);
        return (
          (o0 = function () {
            return n;
          }),
          n
        );
      }
      function o1() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  background-color: ",
          ";\n  padding: 25px;\n",
        ]);
        return (
          (o1 = function () {
            return n;
          }),
          n
        );
      }
      function o2() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 0.5;\n  margin-bottom: 20px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (o2 = function () {
            return n;
          }),
          n
        );
      }
      function o5() {
        let n = (0, i._)(["\n  display: flex;\n  flex-direction: column;\n"]);
        return (
          (o5 = function () {
            return n;
          }),
          n
        );
      }
      function o4() {
        let n = (0, i._)(["\n  display: flex;\n  align-items: center;\n"]);
        return (
          (o4 = function () {
            return n;
          }),
          n
        );
      }
      function o8() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-left: 18px;\n",
        ]);
        return (
          (o8 = function () {
            return n;
          }),
          n
        );
      }
      function o3() {
        let n = (0, i._)([
          "\n  ",
          "\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (o3 = function () {
            return n;
          }),
          n
        );
      }
      function o6() {
        let n = (0, i._)(["\n  ", "\n  color: #808080;\n  margin-top:4px;\n"]);
        return (
          (o6 = function () {
            return n;
          }),
          n
        );
      }
      function o9() {
        let n = (0, i._)([
          "\n  height: 40px;\n  border-left: 1px solid ",
          ";\n  opacity: 0.2;\n  width: 1px;\n  margin-left: 20.5px;\n  @media screen and (max-width: 940px) {\n    height: 35px;\n  }\n",
        ]);
        return (
          (o9 = function () {
            return n;
          }),
          n
        );
      }
      function o7() {
        let n = (0, i._)([
          "\n  display: flex;\n  margin-left: 5px;\n  align-items: center;\n  @media screen and (max-width: 940px) {\n    margin-left: 12px;\n  }\n",
        ]);
        return (
          (o7 = function () {
            return n;
          }),
          n
        );
      }
      function sn() {
        let n = (0, i._)([
          "\n  ",
          "\n  margin-left: 22px;\n  color: ",
          ";\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (sn = function () {
            return n;
          }),
          n
        );
      }
      let se = r.ZP.div(o0(), m.O.shade2),
        st = r.ZP.div(o1(), m.O.shade0),
        si = r.ZP.span(o2(), c.MU, c.w2),
        sa = r.ZP.div(o5()),
        sr = r.ZP.div(o4()),
        so = r.ZP.div(o8()),
        ss = r.ZP.span(o3(), c.Cw, c.Dl),
        sl = r.ZP.span(o6(), c.fy),
        sc = r.ZP.div(o9(), m.O.white),
        sx = r.ZP.div(o7()),
        sd = r.ZP.span(sn(), c.YD, m.O.background, c.Dl),
        sp = oJ.T.find((n) => "aZeta" === n.symbol);
      var sm = (0, s.f3)(
          "appStore",
          "zetaswapStore"
        )(
          (0, s.Pi)(() => {
            var n, e, t, i, r, s, c, x;
            let [d, p] = (0, o.useState)(!1),
              { data: m, isError: u } = (0, k.LK)(),
              { address: h } = (0, k.mA)(),
              f = window.innerWidth,
              { config: g, error: w } = (0, k.PJ)(
                (0, oU.gV)(
                  null === (n = oX.Z.selectedFromToken) || void 0 === n
                    ? void 0
                    : n.tokenAddress,
                  null === (e = oX.Z.selectedToToken) || void 0 === e
                    ? void 0
                    : e.tokenAddress,
                  h
                )
              ),
              {
                write: A,
                error: Z,
                data: b,
                status: j,
                isSuccess: S,
              } = (0, k.GG)(g),
              E = !1;
            f <= 940 && (E = !0);
            let v = async () => {
                (0, o$.cG)(h);
              },
              P = async () => {
                p(!0), null == A || A();
              };
            return (
              (0, o.useEffect)(() => {
                S &&
                  (oX.Z.setZetaswapState(oU.ri.TRANSFER_SUCCESS),
                  v(),
                  E
                    ? l.Z.setPhoneToastMessage({
                        message: "Successfully swapped your tokens",
                      })
                    : l.Z.setToastMessage({
                        message: "Successfully swapped your tokens",
                        type: "SUCCESS",
                      })),
                  Z &&
                    (E
                      ? l.Z.setPhoneToastMessage({
                          message: "Failed to swap",
                          type: "danger",
                        })
                      : l.Z.setToastMessage({
                          message: "Failed to swap",
                          type: "DANGER",
                        }));
              }, [S, Z]),
              (0, a.jsxs)(se, {
                children: [
                  (0, a.jsx)("div", {
                    style: {
                      display: "flex",
                      justifyContent: "flex-end",
                      marginBottom: "7px",
                    },
                    children: (0, a.jsx)(to.x8, {
                      onClick: () => {
                        oX.Z.setZetaswapState(oU.ri.SELECT_TOKENS);
                      },
                      width: E ? 12 : 16,
                      height: E ? 12 : 16,
                    }),
                  }),
                  (0, a.jsxs)(st, {
                    children: [
                      (0, a.jsx)(si, { children: "Review your transfer" }),
                      (0, a.jsxs)(sa, {
                        children: [
                          (0, a.jsxs)(sr, {
                            children: [
                              (0, a.jsx)($(), {
                                width: 40,
                                height: 40,
                                src:
                                  null === (t = oX.Z.selectedFromToken) ||
                                  void 0 === t
                                    ? void 0
                                    : t.image,
                                alt: "token-asset",
                              }),
                              (0, a.jsxs)(so, {
                                children: [
                                  (0, a.jsx)(ss, { children: oX.Z.fromAmount }),
                                  (0, a.jsxs)(sl, {
                                    children: [
                                      "US$",
                                      oX.Z.fromAmount,
                                      " \xb7 ",
                                      null === (i = oX.Z.selectedFromToken) ||
                                      void 0 === i
                                        ? void 0
                                        : i.symbol,
                                      " on ZetaChain",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)(sc, {}),
                          (0, a.jsxs)(sx, {
                            children: [
                              (0, a.jsx)($(), {
                                width: E ? 19 : 30,
                                height: E ? 19 : 30,
                                priority: !0,
                                src: tB,
                                alt: "gas-tank",
                              }),
                              (0, a.jsxs)(sd, {
                                children: [
                                  "~",
                                  !u && m.formatted
                                    ? ((x =
                                        null === (r = m.formatted) ||
                                        void 0 === r
                                          ? void 0
                                          : r.gasPrice),
                                      (0, y.Om)(
                                        parseFloat(x) * parseFloat("238052")
                                      ))
                                    : "0.00",
                                ],
                              }),
                              (0, a.jsx)($(), {
                                style: { marginLeft: "12px" },
                                width: 16,
                                height: 16,
                                alt: "zeta-token",
                                src: sp.image,
                              }),
                            ],
                          }),
                          (0, a.jsx)(sc, {}),
                          (0, a.jsxs)(sr, {
                            children: [
                              (0, a.jsx)($(), {
                                width: 40,
                                height: 40,
                                src:
                                  null === (s = oX.Z.selectedToToken) ||
                                  void 0 === s
                                    ? void 0
                                    : s.image,
                                alt: "token-asset",
                              }),
                              (0, a.jsxs)(so, {
                                children: [
                                  (0, a.jsx)(ss, {
                                    children:
                                      parseFloat(oX.Z.fromAmount) > 0
                                        ? (0, y.Om)(parseFloat(oX.Z.toAmount))
                                        : "0.00",
                                  }),
                                  (0, a.jsxs)(sl, {
                                    children: [
                                      "US$",
                                      (0, y.Om)(parseFloat(oX.Z.toAmount)),
                                      " \xb7 ",
                                      null === (c = oX.Z.selectedToToken) ||
                                      void 0 === c
                                        ? void 0
                                        : c.symbol,
                                      " on ZetaChain",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(nQ.Z, {
                    style: { marginTop: "15px" },
                    onClick: () => {
                      P();
                    },
                    children: (0, a.jsx)(ts.Z, {
                      style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#8BCE2B",
                        color: "#000",
                        boxShadow: "#184D2F 0px 6px",
                        padding: "15px 0px",
                      },
                      children: d
                        ? (0, a.jsx)(tD.Z, { theme: "dark", small: 1 })
                        : (0, a.jsx)("div", { children: "Swap" }),
                    }),
                  }),
                ],
              })
            );
          })
        ),
        su = {
          src: "/_next/static/media/faucetalert.8eb3c48c.svg",
          height: 16,
          width: 15,
          blurWidth: 0,
          blurHeight: 0,
        },
        sk = {
          src: "/_next/static/media/newwindowicon.41b49d52.svg",
          height: 16,
          width: 15,
          blurWidth: 0,
          blurHeight: 0,
        };
      function sh() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  background-color: ",
          ";\n",
        ]);
        return (
          (sh = function () {
            return n;
          }),
          n
        );
      }
      function sf() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n",
        ]);
        return (
          (sf = function () {
            return n;
          }),
          n
        );
      }
      function sy() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  margin-top: 15px;\n  align-items: center;\n",
        ]);
        return (
          (sy = function () {
            return n;
          }),
          n
        );
      }
      function sg() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  margin-top: 15px;\n  align-items: center;\n",
        ]);
        return (
          (sg = function () {
            return n;
          }),
          n
        );
      }
      function sw() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 0.5;\n  margin-left: 10px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (sw = function () {
            return n;
          }),
          n
        );
      }
      function sA() {
        let n = (0, i._)([
          "\n  ",
          "\n  margin-left: 12px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (sA = function () {
            return n;
          }),
          n
        );
      }
      let sZ = r.ZP.div(sh(), m.O.shade2),
        sb = r.ZP.div(sf()),
        sj = r.ZP.div(sy());
      r.ZP.div(sg());
      let sS = r.ZP.span(sw(), c.DD, c.fy),
        sE = r.ZP.span(sA(), c.MU, c.fy),
        sv = oJ.T.find((n) => "aZeta" === n.symbol);
      var sP = (0, s.f3)(
          "appStore",
          "transferStore"
        )(
          (0, s.Pi)(() => {
            var n, e;
            let { data: t, isError: i, isLoading: r } = (0, k.LK)(),
              [s, l] = (0, o.useState)(!1),
              c = window.innerWidth,
              x = !1;
            return (
              c <= 940 && (x = !0),
              (0, a.jsxs)(sZ, {
                children: [
                  (0, a.jsxs)(sb, {
                    children: [
                      (0, a.jsx)(to.Zo, {
                        width: x ? 12 : 16,
                        height: x ? 12 : 16,
                      }),
                      (0, a.jsx)(sS, { children: "Slippage:" }),
                      (0, a.jsx)(sE, { children: "0.0002%" }),
                    ],
                  }),
                  (0, a.jsxs)(sj, {
                    children: [
                      (0, a.jsx)(to.ei, {
                        width: x ? 12 : 16,
                        height: x ? 12 : 16,
                      }),
                      (0, a.jsx)(sS, { children: "Gas fee:" }),
                      (0, a.jsx)("div", { style: { marginRight: "10px" } }),
                      (0, a.jsx)($(), {
                        width: 16,
                        height: 16,
                        src: sv.image,
                        alt: "zetatoken-asset",
                      }),
                      r
                        ? (0, a.jsx)("div", {
                            children: (0, a.jsx)(C.Z, {
                              width: "60px",
                              height: "15px",
                            }),
                          })
                        : (0, a.jsx)("div", {
                            children: (0, a.jsxs)(sE, {
                              children: [
                                "~",
                                !i && t.formatted
                                  ? ((e =
                                      null === (n = t.formatted) || void 0 === n
                                        ? void 0
                                        : n.gasPrice),
                                    (0, y.Om)(
                                      parseFloat(e) * parseFloat("238052")
                                    ))
                                  : "0.00",
                              ],
                            }),
                          }),
                    ],
                  }),
                ],
              })
            );
          })
        ),
        sB = JSON.parse(
          '{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.4.5","a":"","k":"","d":"","tc":""},"fr":30,"ip":0,"op":1850,"w":472,"h":325,"nm":"Comp 2","ddd":0,"assets":[{"id":"image_0","w":128,"h":102,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABmCAYAAAADI5lUAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAF/0lEQVR4nO2du3LbRhSG/4U4sSkVZgCwSJVxl1RmuqQK3Dkdy3Sh3kDu0voN8gaROpdS585S51LsUsqdJ6JosCEwE3mRglqGYngBFnsFztdZpoAz+v4hcHCABUA4TxT1R1HUH9mug7BAFPVHYRgXYRgXOkJwoHqDhDqiqD8qiuLPlR8NDw+PPmbZ/FrVPpiqDRFq2SB/CefshzS9VRKCQMVGCLXskg8AQVBc9nr9gYp90TeAY+yTv8KMc5bU/SagADhEBfmC2iGgADiChHxBrRBQAByghnyBdAgoAJZRIF8gFQIKgEUUyhdUDgEFwBIa5AsqhYACYAGN8gWlQ0ABMIwB+YJSIaAAGMSgfMHeEFAADGFBvmBnCCgABrAoX7A1BBQAzTggX7AxBBQAjTgkX/C/EFAANOGgfMGjEFAANOCwfMEyBBQAxXggXzDjnCUUAIV4JF8wowAowkP5YIwdUwAUEMdxwjne266jAjPGitHd3d05BaAmvV5/EATFJYBntmspCXUBqvBdPkABkKYJ8gF6LkAKD+WPOe8MaBagAD/l3ydpmqab/pMCUIGmyQcoAKVponyAAlAK/+Szs+n0dlTqk5or8Z4mywcoADtpunyA2sCt+Ccfb6rKB+gbYCO+yWeMHd/d3Z5K/a7iWrynTfIBCsAj2iYfoAAs8Uz+LAgwnEwml3U3pO0kMI7jRNe2VeObfM5ZokI+oCkAYdg/5Rzvw7B/qmP7KvFRvqoVwgANh4CF9OI38e+iwEVR3I/2XZK0QdvlA4oDsC5/hVLXpU3imXxtfz9lAdghX6AlwTKQ/P9Qcg5QQj4APAuC4jKKoqGKfcpC8h9Te63gkvIFTwH2q+r1bsvik/yHc6eh7sNmrUNARfnru648uKiDT/JN/m2kA1BP/gJTHQLJ37E3mV9SIX8Frcc5kr+byieBiuUDwIsg6NyoWv16Fb/k47Vp+UDFAGiQL1DeIfgknzF2PJ1O/rCx79JdgEb5AmUdgm/y6070au2/zIcMyF9D/lhI8ivWsO8D5uUvYAxXX75U64M9ku/MVdGdAbAlf4Ux551hmn662fdBki/H1gA4IF+w9w9G8uXZ2AU4JB9Ydgib35nnkfyxa/KBDV2AY/IFTwEMu93DWZbNP4gf+iX/PknT6Y3tQtZ5FABH5a/yqts9ep5l83P/5LtzL8Qqy3MAD+QvYQxXRYEBSH5tGOCXfH9gZ5z/c+KyfABgJF8H5oc6sgRAoXwI0278kQ8AAef3CWO4sl1IM/BLPuDpSaCLuHBdX4ZlG5hl8/Nu95ABSOyV4ye+ygfWrgNk2fzy8PDoIwCrd+76hM/ygS2zAI8usthkud6u7ULqsHUY9BCCcwDfGqzHF5wb6siycxzc6/V6QdC5BPDCTDle0Bj5wJ57AtM0TTm/T4oCF6YKcpxGyQdK3BOY53me5/O33e7RcwBtvmg05ryTpOnff9kuRCWlbwp9aBNnAF5prMdVHoY6k0+2C1FNpWcDs2z+oYVtovMTvTpIPRnUojax0fIBycfD0/T2mnOWABirLccl2Nl0Ohk0WT5Q8+ng5raJ/g11ZKm1PkCe5/mTJ1+9ZezgGzSmQ2iPfEDBAhF5nueLDqERbeKb6XRyYrsIkyhdJMrHlycKfB/qyFL7G2CVLJtfP7SJL7G4ldsL2iof0LRUrE9tYpvlA5pWCl20iZ0B3G4TZ0GAl22WD2heLNrhNrFxQx1ZjKwW7tj9hiR/BaUngdtYtIndrwH2o4n97YDkr2EkAACQZdk7y4OkMef3Axcf0LSJsQAAok3sjgH2C8y2iY0f6shi5Y0hhttEkr8DK6+NM9UmFgUuSP5urL4zqNfr9Q4OOudFgZ/Vb71dQx1ZnHhplPo2keSXxehJ4DbUPpZG8qvgRAAAZY+lvZ5OJ7+rqqkNOHEIWCWO44RznKNih9D2oY4szgUAqN4mknx5nAwAUH6QRPLr4cw5wDrifkMg+J4xfLfhIzPO2U+fP9++M15cg3D2G2CVDW0iDXXaRhjGJ2EYF2EYpzreLkJ4QBRFQ5Kvln8BH3oOs6OT5hkAAAAASUVORK5CYII=","e":1},{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":2,"nm":"Vector 526.ai","cl":"ai","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,162,0],"ix":2},"a":{"a":0,"k":[64,51,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":1850,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Shape Layer 63","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[233.5,169.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[1416.923,1416.923,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":304,"op":1954,"st":104,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 62","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[43.5,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":298,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 60","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[43.5,228.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":291,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 58","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[43.5,164,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":285,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 56","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[43.5,99.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":279,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Shape Layer 54","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[43.5,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":273,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Shape Layer 52","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[428.5,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":267,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Shape Layer 50","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[428.5,96.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":261,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Shape Layer 48","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[428.5,161.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":254,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Shape Layer 46","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[428.5,225.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":247,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Shape Layer 44","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[428.5,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":240,"op":1948,"st":98,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Shape Layer 41","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[363.75,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":227,"op":1941,"st":91,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Shape Layer 39","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[300,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":219,"op":1941,"st":91,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Shape Layer 38","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":211,"op":1933,"st":83,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"Shape Layer 37","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[172,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":203,"op":1925,"st":75,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"Shape Layer 33","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[108,289.5,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":184,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":18,"ty":4,"nm":"Shape Layer 31","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[108,226,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":175,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"Shape Layer 29","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[108,162,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":167,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"Shape Layer 27","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[108,98,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":158,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"Shape Layer 25","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[108,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":150,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"Shape Layer 23","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[172,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":140,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":23,"ty":4,"nm":"Shape Layer 21","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":130,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":24,"ty":4,"nm":"Shape Layer 19","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[300,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":121,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":25,"ty":4,"nm":"Shape Layer 17","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[364,35,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":111,"op":1926,"st":76,"bm":0},{"ddd":0,"ind":26,"ty":4,"nm":"Shape Layer 16","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[364,98,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":102,"op":1917,"st":67,"bm":0},{"ddd":0,"ind":27,"ty":4,"nm":"Shape Layer 15","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[364,162.25,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":93,"op":1908,"st":58,"bm":0},{"ddd":0,"ind":28,"ty":4,"nm":"Shape Layer 14","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[364,226,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":84,"op":1899,"st":49,"bm":0},{"ddd":0,"ind":29,"ty":4,"nm":"Shape Layer 13","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[300,226,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":75,"op":1890,"st":40,"bm":0},{"ddd":0,"ind":30,"ty":4,"nm":"Shape Layer 12","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,226,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":66,"op":1881,"st":31,"bm":0},{"ddd":0,"ind":31,"ty":4,"nm":"Shape Layer 11","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[172,226,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":56,"op":1871,"st":21,"bm":0},{"ddd":0,"ind":32,"ty":4,"nm":"Shape Layer 10","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[172,162,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":45,"op":1860,"st":10,"bm":0},{"ddd":0,"ind":33,"ty":4,"nm":"Shape Layer 8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[172,98,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":35,"op":1860,"st":10,"bm":0},{"ddd":0,"ind":34,"ty":4,"nm":"Shape Layer 5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,98,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":25,"op":1858,"st":8,"bm":0},{"ddd":0,"ind":35,"ty":4,"nm":"Shape Layer 6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[300,98,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":17,"op":1850,"st":0,"bm":0},{"ddd":0,"ind":36,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[300,162,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":8,"op":1850,"st":0,"bm":0},{"ddd":0,"ind":37,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,162,0],"ix":2},"a":{"a":0,"k":[-20.582,-15.082,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[65,65],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.545098039216,0.807843137255,0.16862745098,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-20.582,-15.082],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1850,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Comp 1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[236,162.5,0],"ix":2},"a":{"a":0,"k":[236,162.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.739],"y":[0.201]},"o":{"x":[0.503],"y":[0.109]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.337],"y":[0.681]},"t":30,"s":[10.267]},{"t":1850,"s":[61.667]}],"ix":2},"w":472,"h":325,"ip":0,"op":1850,"st":0,"bm":0}],"markers":[]}'
        );
      function sD() {
        let n = (0, i._)([""]);
        return (
          (sD = function () {
            return n;
          }),
          n
        );
      }
      function sT() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  background-color: ",
          ";\n  margin-top: 10px;\n",
        ]);
        return (
          (sT = function () {
            return n;
          }),
          n
        );
      }
      function sC() {
        let n = (0, i._)(["\n  ", "\n  margin-top: 10px;\n"]);
        return (
          (sC = function () {
            return n;
          }),
          n
        );
      }
      function s_() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (s_ = function () {
            return n;
          }),
          n
        );
      }
      function sF() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  margin-top: 15px;\n",
        ]);
        return (
          (sF = function () {
            return n;
          }),
          n
        );
      }
      function sR() {
        let n = (0, i._)([
          "\n  padding: 20px;\n  background-color: ",
          ";\n  border: 0.8px solid ",
          ";\n  display: flex;\n  flex-direction: column;\n  margin-top: 16px;\n",
        ]);
        return (
          (sR = function () {
            return n;
          }),
          n
        );
      }
      function sV() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  border: ",
          ";\n",
        ]);
        return (
          (sV = function () {
            return n;
          }),
          n
        );
      }
      function sI() {
        let n = (0, i._)([
          "\n  ",
          "\n  outline: none;\n  border: 1px solid ",
          ";\n  background-color: ",
          ';\n  width: 100%;\n  color: white;\n  padding: 10px 12px;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  &[type="number"] {\n    -moz-appearance: textfield;\n    appearance: textfield;\n  }\n\n  &::placeholder {\n    color: white;\n    opacity: 0.5;\n  }\n\n  &:-ms-input-placeholder {\n    color: white;\n  }\n\n  &::-ms-input-placeholder {\n    color: white;\n  }\n',
        ]);
        return (
          (sI = function () {
            return n;
          }),
          n
        );
      }
      function sG() {
        let n = (0, i._)(["\n  display: flex;\n  margin-bottom: 10px;\n"]);
        return (
          (sG = function () {
            return n;
          }),
          n
        );
      }
      function sO() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5\n"]);
        return (
          (sO = function () {
            return n;
          }),
          n
        );
      }
      function sN() {
        let n = (0, i._)([
          "\n  display: flex;\n  background-color: ",
          ";\n  padding: 11px 16px;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n",
        ]);
        return (
          (sN = function () {
            return n;
          }),
          n
        );
      }
      function sL() {
        let n = (0, i._)(["\n  ", "\n  color: ", "\n"]);
        return (
          (sL = function () {
            return n;
          }),
          n
        );
      }
      function sM() {
        let n = (0, i._)(["\n  display: ", ";\n  flex-direction: column;\n"]);
        return (
          (sM = function () {
            return n;
          }),
          n
        );
      }
      function sU() {
        let n = (0, i._)(["\n  display: ", ";\n"]);
        return (
          (sU = function () {
            return n;
          }),
          n
        );
      }
      function sW() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (sW = function () {
            return n;
          }),
          n
        );
      }
      let sH = r.ZP.div(sD()),
        sz = r.ZP.div(sT(), m.O.shade2);
      r.ZP.span(sC(), c.MU);
      let sY = r.ZP.span(s_(), c.pm),
        sq = r.ZP.div(sF()),
        sK = r.ZP.div(sR(), m.O.shade0, m.O.borderVariant3),
        sQ = r.ZP.div(sV(), (n) =>
          n.valid ? "1px solid ".concat(m.O.borderVariant3) : "1px solid red"
        ),
        sX = r.ZP.input(sI(), c.MU, m.O.shade17, m.O.shade18),
        sJ = r.ZP.div(sG()),
        s$ = r.ZP.span(sO(), c.MU),
        s0 = r.ZP.div(sN(), m.O.background),
        s1 = r.ZP.span(sL(), c.MU, m.O.shade0),
        s2 = r.ZP.div(sM(), (n) => (n.saved ? "none" : "flex")),
        s5 = r.ZP.div(sU(), (n) => (n.saved ? "flex" : "none")),
        s4 = r.ZP.span(sW(), c.MU);
      var s8 = (0, s.f3)(
        "appStore",
        "zetaswapStore"
      )(
        (0, s.Pi)(() => {
          let [n, e] = (0, o.useState)("Transaction pending"),
            [t, i] = (0, o.useState)(""),
            [r, s] = (0, o.useState)(!0),
            [l, c] = (0, o.useState)(!1),
            [x, d] = (0, o.useState)(!1),
            p = localStorage.getItem("email-saved");
          window.innerWidth,
            (0, o.useEffect)(() => {
              oX.Z.zetaswapState === oU.ri.TRANSFER_SUCCESS &&
                e("Transaction success");
            }, [oX.Z.zetaswapState]);
          let u = (n) =>
              !!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(n) ||
              !!/^[a-zA-Z0-9._-]+@(?:[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|yourcorporatedomain\.com)$/.test(
                n
              ),
            k = async () => {
              d(!0);
              let n = u(t);
              if (!n) {
                s(!1), d(!1);
                return;
              }
              s(!0);
              let e = await (0, o$.it)(t);
              if (!e) {
                s(!1), d(!1);
                return;
              }
              c(!0), d(!1), localStorage.setItem("email-saved", "".concat(e));
            };
          return (0, a.jsxs)(sz, {
            children: [
              (0, a.jsxs)(sH, {
                style: { display: "flex", justifyContent: "space-between" },
                children: [
                  (0, a.jsx)(sY, { children: n }),
                  (0, a.jsx)(to.x8, {
                    style: { cursor: "pointer" },
                    onClick: () => oX.Z.resetTransfer(),
                  }),
                ],
              }),
              (0, a.jsx)(sq, {
                children:
                  oX.Z.zetaswapState === oU.ri.TRANSFER_SUCCESS &&
                  (0, a.jsxs)(sH, {
                    style: { display: "flex", flexDirection: "column" },
                    children: [
                      (0, a.jsx)(t1(), {
                        animationData: sB,
                        loop: !0,
                        style: { width: "100%" },
                      }),
                      (!p || l) &&
                        (0, a.jsxs)(sK, {
                          children: [
                            (0, a.jsxs)(s2, {
                              saved: l ? 1 : 0,
                              children: [
                                (0, a.jsx)(sJ, {
                                  children: (0, a.jsx)(s$, {
                                    children:
                                      "Get exclusive perks in the Eddy community \uD83C\uDF81",
                                  }),
                                }),
                                (0, a.jsxs)(sQ, {
                                  valid: r ? 1 : 0,
                                  children: [
                                    (0, a.jsx)(sH, {
                                      style: { display: "flex", width: "100%" },
                                      children: (0, a.jsx)(sX, {
                                        value: t,
                                        placeholder: "Enter your email...",
                                        onChange: (n) => {
                                          i(n.target.value);
                                        },
                                      }),
                                    }),
                                    (0, a.jsx)(s0, {
                                      onClick: k,
                                      children: x
                                        ? (0, a.jsx)(tD.Z, {
                                            theme: "dark",
                                            small: 1,
                                          })
                                        : (0, a.jsx)(s1, {
                                            children: "Submit",
                                          }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsx)(s5, {
                              saved: l ? 1 : 0,
                              children: (0, a.jsx)(s4, {
                                children:
                                  "Congratulations \uD83C\uDF89 Your email is eligible for rewards",
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
              }),
              oX.Z.zetaswapState === oU.ri.TRANSFER_SUCCESS &&
                (0, a.jsx)(nQ.Z, {
                  style: { marginTop: "15px" },
                  onClick: () => oX.Z.resetTransfer(),
                  children: (0, a.jsx)(ts.Z, {
                    style: {
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      color: "".concat(m.O.shade2),
                      boxShadow: "0px 8px #404040",
                    },
                    children: "Go back home",
                  }),
                }),
            ],
          });
        })
      );
      function s3() {
        let n = (0, i._)([""]);
        return (
          (s3 = function () {
            return n;
          }),
          n
        );
      }
      function s6() {
        let n = (0, i._)([
          "\n  display: flex;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n  flex-direction: column;\n  @media screen and (max-width: 940px) {\n  }\n",
        ]);
        return (
          (s6 = function () {
            return n;
          }),
          n
        );
      }
      function s9() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n",
        ]);
        return (
          (s9 = function () {
            return n;
          }),
          n
        );
      }
      function s7() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  background-color: ",
          ";\n  box-shadow: 0px 6px #121214;\n",
        ]);
        return (
          (s7 = function () {
            return n;
          }),
          n
        );
      }
      function ln() {
        let n = (0, i._)([
          "\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  background-color: ",
          ";\n",
        ]);
        return (
          (ln = function () {
            return n;
          }),
          n
        );
      }
      function le() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5\n"]);
        return (
          (le = function () {
            return n;
          }),
          n
        );
      }
      function lt() {
        let n = (0, i._)([
          "\n  margin-top: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n",
        ]);
        return (
          (lt = function () {
            return n;
          }),
          n
        );
      }
      function li() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n",
        ]);
        return (
          (li = function () {
            return n;
          }),
          n
        );
      }
      function la() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-right: 18px;\n",
        ]);
        return (
          (la = function () {
            return n;
          }),
          n
        );
      }
      function lr() {
        let n = (0, i._)([
          "\n  ",
          "\n  color: ",
          ";\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (lr = function () {
            return n;
          }),
          n
        );
      }
      function lo() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5;\n  margin-top: 5px;\n"]);
        return (
          (lo = function () {
            return n;
          }),
          n
        );
      }
      function ls() {
        let n = (0, i._)([
          "\n  ",
          "\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  justify-content: flex-start;\n",
        ]);
        return (
          (ls = function () {
            return n;
          }),
          n
        );
      }
      function ll() {
        let n = (0, i._)([
          "\n  display: flex;\n  width: 30px;\n  heigth: 30px;\n  border-radius: 23px;\n  margin-right: 15px;\n",
        ]);
        return (
          (ll = function () {
            return n;
          }),
          n
        );
      }
      function lc() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 1;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (lc = function () {
            return n;
          }),
          n
        );
      }
      function lx() {
        let n = (0, i._)([
          "\n  background-color: ",
          ";\n  height: 40px;\n  display: flex;\n  padding: 0px 25px;\n  align-items: center;\n  cursor: ",
          ";\n  @media screen and (max-width: 940px) {\n    height: 30px;\n  }\n",
        ]);
        return (
          (lx = function () {
            return n;
          }),
          n
        );
      }
      function ld() {
        let n = (0, i._)([
          "\n  ",
          "\n  opacity: 0.5;\n  margin-top: 5px;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (ld = function () {
            return n;
          }),
          n
        );
      }
      function lp() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  background-color: ",
          ";\n  margin-top: 10px;\n",
        ]);
        return (
          (lp = function () {
            return n;
          }),
          n
        );
      }
      function lm() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (lm = function () {
            return n;
          }),
          n
        );
      }
      function lu() {
        let n = (0, i._)([
          "\n  display: flex;\n  padding: 18px;\n  margin-top: 15px;\n  background-color: ",
          ";\n  align-items: center;\n\n  input {\n    opacity: 0.7;\n    ",
          "\n    letter-spacing: 1px;\n  }\n",
        ]);
        return (
          (lu = function () {
            return n;
          }),
          n
        );
      }
      function lk() {
        let n = (0, i._)([
          "\n  ",
          "\n  outline: none;\n  border: none;\n  background-color: transparent;\n  width: 100%;\n  color: white;\n  margin-left: 15px;\n  padding: 0;\n  @media screen and (max-width: 940px) {\n    ",
          '\n  }\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  &[type="number"] {\n    -moz-appearance: textfield;\n    appearance: textfield;\n  }\n\n  &::placeholder {\n    color: white;\n    opacity: 0.5;\n  }\n\n  &:-ms-input-placeholder {\n    color: white;\n  }\n\n  &::-ms-input-placeholder {\n    color: white;\n  }\n',
        ]);
        return (
          (lk = function () {
            return n;
          }),
          n
        );
      }
      function lh() {
        let n = (0, i._)([
          "\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: 230px;\n  padding-right: 20px;\n",
        ]);
        return (
          (lh = function () {
            return n;
          }),
          n
        );
      }
      function lf() {
        let n = (0, i._)([
          "\n  height: 1px;\n  opacity: 0.1;\n  margin-top: 15px;\n  background-color: ",
          ";\n",
        ]);
        return (
          (lf = function () {
            return n;
          }),
          n
        );
      }
      function ly() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex: 1;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 25px;\n",
        ]);
        return (
          (ly = function () {
            return n;
          }),
          n
        );
      }
      function lg() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  cursor: pointer;\n",
        ]);
        return (
          (lg = function () {
            return n;
          }),
          n
        );
      }
      function lw() {
        let n = (0, i._)([
          "\n  margin-left: 15px;\n  display: flex;\n  flex-direction: column;\n  ",
          "\n",
        ]);
        return (
          (lw = function () {
            return n;
          }),
          n
        );
      }
      function lA() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (lA = function () {
            return n;
          }),
          n
        );
      }
      function lZ() {
        let n = (0, i._)([
          "\n  display: flex;\n  margin-top: 20px;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (lZ = function () {
            return n;
          }),
          n
        );
      }
      function lb() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5;\n"]);
        return (
          (lb = function () {
            return n;
          }),
          n
        );
      }
      function lj() {
        let n = (0, i._)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n",
        ]);
        return (
          (lj = function () {
            return n;
          }),
          n
        );
      }
      function lS() {
        let n = (0, i._)([
          "\n  ",
          "\n  color: ",
          ";\n  margin-left: 7px;\n  opacity: 1;\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (lS = function () {
            return n;
          }),
          n
        );
      }
      function lE() {
        let n = (0, i._)([
          "\n  display: flex;\n  align-items: center;\n  justify-content: end;\n  margin-top: 5px;\n",
        ]);
        return (
          (lE = function () {
            return n;
          }),
          n
        );
      }
      function lv() {
        let n = (0, i._)([
          "\n  margin-right: 15px;\n  ",
          "\n  @media screen and (max-width: 940px) {\n    ",
          "\n  }\n",
        ]);
        return (
          (lv = function () {
            return n;
          }),
          n
        );
      }
      function lP() {
        let n = (0, i._)([
          "\n  display: flex;\n  border-radius: 12px;\n  background-color: ",
          ";\n  margin: -15px 0px;\n  justify-content: center;\n  align-items: center;\n  @media screen and (max-width: 940px) {\n    width: 24px;\n    height: 24px;\n    border-radius: 12px;\n  }\n",
        ]);
        return (
          (lP = function () {
            return n;
          }),
          n
        );
      }
      function lB() {
        let n = (0, i._)([
          "\n  display: flex;\n  margin-top: 20px;\n  width: 100%;\n  flex-direction: column;\n  height: 300px;\n  overflow-x: hidden;\n  overflow-y: auto;\n",
        ]);
        return (
          (lB = function () {
            return n;
          }),
          n
        );
      }
      function lD() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-left: 10px;\n",
        ]);
        return (
          (lD = function () {
            return n;
          }),
          n
        );
      }
      function lT() {
        let n = (0, i._)(["\n  ", "\n  opacity: 0.5;\n  margin-top: 5px;\n"]);
        return (
          (lT = function () {
            return n;
          }),
          n
        );
      }
      function lC() {
        let n = (0, i._)([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  cursor: pointer;\n  height: 10px;\n",
        ]);
        return (
          (lC = function () {
            return n;
          }),
          n
        );
      }
      function l_() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  min-width: 420px;\n  margin-top: 100px;\n  @media screen and (max-width: 940px) {\n    width: 100%;\n    min-width: 0px;\n    margin: 40px 25px;\n  }\n",
        ]);
        return (
          (l_ = function () {
            return n;
          }),
          n
        );
      }
      function lF() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1;\n",
        ]);
        return (
          (lF = function () {
            return n;
          }),
          n
        );
      }
      function lR() {
        let n = (0, i._)(["\n  ", "\n"]);
        return (
          (lR = function () {
            return n;
          }),
          n
        );
      }
      function lV() {
        let n = (0, i._)(["\n  ", "\n  color: #000\n"]);
        return (
          (lV = function () {
            return n;
          }),
          n
        );
      }
      function lI() {
        let n = (0, i._)([
          "\n  cursor: pointer;\n  padding: 8px 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n  background-color: ",
          ";\n  border-radius: 50px;\n  @media screen and (max-width: 940px) {\n    display: none;\n  }\n",
        ]);
        return (
          (lI = function () {
            return n;
          }),
          n
        );
      }
      function lG() {
        let n = (0, i._)([
          "\n  ",
          ";\n  color: #f5b300;\n  display: flex;\n  gap: 5px;\n  align-items: center;\n",
        ]);
        return (
          (lG = function () {
            return n;
          }),
          n
        );
      }
      let lO = r.ZP.div(s3()),
        lN = r.ZP.div(s6()),
        lL = r.ZP.div(s9()),
        lM = r.ZP.div(s7(), m.O.shade2),
        lU = r.ZP.div(ln(), m.O.shade0),
        lW = r.ZP.span(le(), c.w2),
        lH = r.ZP.div(lt()),
        lz = r.ZP.div(li()),
        lY = r.ZP.div(la()),
        lq = r.ZP.span(lr(), c.pm, m.O.white, c.Dl),
        lK = r.ZP.span(lo(), c.fy),
        lQ = r.ZP.div(ls(), c.pm),
        lX = r.ZP.div(ll()),
        lJ = r.ZP.span(lc(), c.Cw, c.Dl),
        l$ = r.ZP.div(lx(), m.O.shade2, (n) =>
          n.disablecursor ? "no-drop" : "pointer"
        ),
        l0 = r.ZP.span(ld(), c.w2, c.fy),
        l1 = r.ZP.div(lp(), m.O.shade2),
        l2 = r.ZP.span(lm(), c.ny),
        l5 = r.ZP.div(lu(), m.O.shade0, c.BO),
        l4 = r.ZP.input(lk(), c.PT, c.Dl);
      r.ZP.div(lh());
      let l8 = r.ZP.div(lf(), m.O.white);
      r.ZP.div(ly()), r.ZP.div(lg()), r.ZP.div(lw(), c.ny), r.ZP.div(lA());
      let l3 = r.ZP.div(lZ()),
        l6 = r.ZP.span(lb(), c.MU),
        l9 = r.ZP.div(lj()),
        l7 = r.ZP.span(lS(), c.Dl, m.O.background, c.tS),
        cn = r.ZP.div(lE()),
        ce = r.ZP.span(lv(), c.MU, c.fy);
      r.ZP.div(lP(), m.O.shade3);
      let ct = r.ZP.div(lB()),
        ci = r.ZP.div(lD()),
        ca = r.ZP.span(lT(), c.fy),
        cr = r.ZP.div(lC()),
        co = r.ZP.div(l_()),
        cs = r.ZP.div(lF()),
        cl = r.ZP.span(lR(), c.sy);
      r.ZP.span(lV(), c.Bj);
      let cc = r.ZP.div(lI(), m.O.shade7),
        cx = r.ZP.div(lG(), c.w2);
      var cd = (0, s.f3)(
        "appStore",
        "zetaswapStore"
      )(
        (0, s.Pi)(() => {
          var n, e, t, i, r;
          let [s, c] = (0, o.useState)(!1),
            [x, d] = (0, o.useState)(""),
            [p, u] = (0, o.useState)(""),
            [h, f] = (0, o.useState)("Select token to transfer"),
            [g, w] = (0, o.useState)(!0),
            [A, Z] = (0, o.useState)(null),
            [b, j] = (0, o.useState)(0),
            [S, E] = (0, o.useState)(0),
            [v, P] = (0, o.useState)(!1),
            [B, D] = (0, o.useState)(!1),
            { switchNetwork: T } = (0, k.g0)(),
            { chain: _ } = (0, k.LN)(),
            { address: F, isConnected: R } = (0, k.mA)(),
            [V, I] = (0, o.useState)(!1),
            G = localStorage.getItem("eddyUserTweeted"),
            O = oJ.T.find((n, e) => "aZeta" === n.symbol),
            { config: N, error: L } = (0, k.PJ)({
              address:
                null === (n = oX.Z.selectedFromToken) || void 0 === n
                  ? void 0
                  : n.tokenAddress,
              abi: [
                {
                  constant: !1,
                  inputs: [
                    { name: "_spender", type: "address" },
                    { name: "_value", type: "uint256" },
                  ],
                  name: "approve",
                  outputs: [{ name: "", type: "bool" }],
                  payable: !1,
                  stateMutability: "nonpayable",
                  type: "function",
                },
              ],
              functionName: "approve",
              args: [
                "0x2ca7d64A7EFE2D62A725E2B35Cf7230D6677FfEe",
                "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
              ],
            }),
            {
              write: M,
              error: U,
              data: W,
              status: H,
              isSuccess: z,
            } = (0, k.GG)(N),
            Y = iE.S.includes(null == _ ? void 0 : _.id),
            q = window.innerWidth,
            K = !1;
          q <= 940 && (K = !0);
          let Q = async () => {
              var n, e;
              let t = await (0, o$.zz)(
                null === (n = oX.Z.selectedFromToken) || void 0 === n
                  ? void 0
                  : n.tokenAddress,
                F
              );
              (null === (e = oX.Z.selectedFromToken) || void 0 === e
                ? void 0
                : e.tokenAddress) !==
                "0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf" &&
                0.1 > parseFloat(t) &&
                K &&
                (l.Z.setBottomsheetOpen(!0),
                l.Z.setMintEddyTokenBottomsheet(!0)),
                u(t);
            },
            X = async () => {
              var n;
              let e = await (0, o$.$T)(
                null === (n = oX.Z.selectedFromToken) || void 0 === n
                  ? void 0
                  : n.tokenAddress,
                F,
                oX.Z.fromAmount
              );
              e ? f("Enter amount to transfer") : f("Approve");
            },
            J = async () => {
              P(!0), null == M || M();
            },
            nn = () => {
              if (!R) {
                f(oU.BN.CONNECT_WALLET_EVM);
                return;
              }
              if (!oX.Z.selectedFromToken) {
                f(oU.BN.SELECT_TOKENS);
                return;
              }
              "Approve" !== h &&
                ("" !== oX.Z.fromAmount &&
                parseFloat(oX.Z.fromAmount) > 0 &&
                parseFloat(p) > parseFloat(oX.Z.fromAmount)
                  ? f(oU.BN.REVIEW_TRANSACTION)
                  : oX.Z.selectedFromToken && oX.Z.selectedToToken
                  ? oX.Z.selectedFromToken &&
                    oX.Z.selectedToToken &&
                    "" === oX.Z.fromAmount
                    ? f(oU.BN.ENTER_AMOUNT)
                    : (f(oU.BN.INSUFFICIENT_BALANCE), w(!0))
                  : (w(!0), f(oU.BN.SELECT_TOKENS)));
            },
            ne = () => {
              localStorage.getItem("txn-history") ||
                localStorage.setItem("txn-history", JSON.stringify([]));
            },
            nt = async () => {
              var n, e;
              if (
                (I(!0),
                0 >= parseFloat(oX.Z.fromAmount) ||
                  !oX.Z.selectedFromToken ||
                  !oX.Z.selectedToToken)
              )
                return;
              let t = [
                null === (n = oX.Z.selectedFromToken) || void 0 === n
                  ? void 0
                  : n.tokenAddress,
                O.tokenAddress,
                null === (e = oX.Z.selectedToToken) || void 0 === e
                  ? void 0
                  : e.tokenAddress,
              ];
              (oX.Z.selectedToToken.tokenAddress === O.tokenAddress ||
                oX.Z.selectedFromToken.tokenAddress === O.tokenAddress) &&
                (t = [
                  oX.Z.selectedFromToken.tokenAddress,
                  oX.Z.selectedToToken.tokenAddress,
                ]);
              let i = 1e18 * parseFloat(oX.Z.fromAmount),
                a = await (0, o$.Zq)(i.toString(), t),
                r = parseFloat(a) / 1e18;
              oX.Z.setToAmount(r.toString()), I(!1);
            },
            ni = (n) => {
              let { item: e, index: t } = n,
                { address: i } = (0, k.mA)(),
                [r, s] = (0, o.useState)(null),
                x = async (n) => {
                  let e = await (0, o$.zz)(n, i);
                  s(e);
                };
              return (
                (0, o.useEffect)(() => {
                  x(e.tokenAddress);
                }, []),
                (0, a.jsxs)(
                  cs,
                  {
                    onClick: () => {
                      if ("from" === oX.Z.tokenClicked) {
                        if (
                          oX.Z.selectedToToken &&
                          oX.Z.selectedToToken.symbol === e.symbol
                        ) {
                          if (K) {
                            l.Z.setPhoneToastMessage({
                              message: "Select a different token",
                              type: "danger",
                            });
                            return;
                          }
                          l.Z.setToastMessage({
                            message: "Select a different token",
                            type: "DANGER",
                          });
                          return;
                        }
                        oX.Z.setSelectedFromToken(e), c(!1);
                      } else {
                        if (
                          oX.Z.selectedFromToken &&
                          oX.Z.selectedFromToken.symbol === e.symbol
                        ) {
                          if (K) {
                            l.Z.setPhoneToastMessage({
                              message: "Select a different token",
                              type: "danger",
                            });
                            return;
                          }
                          l.Z.setToastMessage({
                            message: "Select a different token",
                            type: "DANGER",
                          });
                          return;
                        }
                        oX.Z.setSelectedToToken(e), c(!1);
                      }
                    },
                    style: { marginTop: "".concat(t > 0 ? "25px" : "0px") },
                    children: [
                      (0, a.jsxs)(lO, {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        },
                        children: [
                          (0, a.jsx)(lX, {
                            children: (0, a.jsx)($(), {
                              priority: !0,
                              width: 35,
                              height: 35,
                              src: e.image,
                              alt: "token-image",
                            }),
                          }),
                          (0, a.jsxs)(ci, {
                            children: [
                              (0, a.jsx)(cl, { children: e.symbol }),
                              (0, a.jsx)(ca, { children: e.name }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(lO, {
                        children:
                          O.tokenAddress === e.tokenAddress
                            ? (0, a.jsx)(lQ, { children: (0, y.Om)(r) })
                            : r
                            ? (0, a.jsx)(lQ, { children: (0, y.Om)(r) })
                            : (0, a.jsx)(C.Z, { width: "15px", height: "7px" }),
                      }),
                    ],
                  },
                  t
                )
              );
            };
          return (
            (0, o.useEffect)(() => {
              oX.Z.selectedFromToken && (Q(), X());
            }, [oX.Z.selectedFromToken]),
            (0, o.useEffect)(() => {
              nn(),
                oX.Z.selectedFromToken &&
                  oX.Z.selectedToToken &&
                  parseFloat(oX.Z.fromAmount) > 0 &&
                  nt();
            }, [oX.Z.fromAmount, oX.Z.selectedFromToken, oX.Z.selectedToToken]),
            (0, o.useEffect)(() => {
              R && nn(),
                R ||
                  (oX.Z.setSelectedFromToken(null),
                  oX.Z.setSelectedToToken(null),
                  nn());
            }, [R]),
            (0, o.useEffect)(() => {
              ne();
            }, []),
            (0, o.useEffect)(() => {
              if (z) {
                P(!1),
                  K
                    ? l.Z.setPhoneToastMessage({ message: "Approval success" })
                    : l.Z.setToastMessage({
                        message: "Approval success",
                        type: "SUCCESS",
                      }),
                  oX.Z.selectedToToken &&
                  "" !== oX.Z.fromAmount &&
                  parseFloat(oX.Z.fromAmount) > 0
                    ? f(oU.BN.REVIEW_TRANSACTION)
                    : oX.Z.selectedToToken
                    ? oX.Z.selectedToToken &&
                      ("" === oX.Z.fromAmount ||
                        0 === parseFloat(oX.Z.fromAmount)) &&
                      f(oU.BN.ENTER_AMOUNT)
                    : f(oU.BN.SELECT_TOKENS);
                return;
              }
              U &&
                (P(!1),
                K
                  ? l.Z.setPhoneToastMessage({
                      message: "Failed to approve token",
                      type: "danger",
                    })
                  : l.Z.setToastMessage({
                      message: "Failed to approve token",
                      type: "DANGER",
                    }));
            }, [z, U]),
            (0, a.jsx)(lN, {
              children:
                "Zetaswap" === l.Z.activeTab
                  ? (0, a.jsx)(lL, {
                      children: (0, a.jsx)(lO, {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          flex: 1,
                        },
                        children: (0, a.jsx)(lO, {
                          style: {
                            display: "flex",
                            width: "100%",
                            justifyContent: "center",
                          },
                          children: (0, a.jsxs)(co, {
                            children: [
                              s
                                ? (0, a.jsxs)(l1, {
                                    children: [
                                      (0, a.jsxs)(l9, {
                                        children: [
                                          (0, a.jsx)(l2, {
                                            children:
                                              "Select token to transfer",
                                          }),
                                          (0, a.jsx)(to.x8, {
                                            onClick: () => {
                                              c(!1);
                                            },
                                            style: {
                                              cursor: "pointer",
                                              width: "12px",
                                            },
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)(l5, {
                                        children: [
                                          (0, a.jsx)(to.W1, {}),
                                          (0, a.jsx)(l4, {
                                            value: x,
                                            placeholder: "Search",
                                            onChange: (n) => {
                                              d(n.target.value);
                                            },
                                          }),
                                        ],
                                      }),
                                      (0, a.jsx)(l8, {}),
                                      (0, a.jsx)(ct, {
                                        children: oJ.T.map((n, e) =>
                                          (0, a.jsx)(
                                            ni,
                                            { item: n, index: e },
                                            e
                                          )
                                        ),
                                      }),
                                      G || K
                                        ? null
                                        : (0, a.jsx)(nQ.Z, {
                                            style: { marginTop: "15px" },
                                            onClick: () => {
                                              l.Z.setSideSheetOpen(!0),
                                                l.Z.setFaucetSidesheet(!0);
                                            },
                                            children: (0, a.jsx)(ts.Z, {
                                              style: {
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                color: "#000",
                                                boxShadow: "none",
                                                padding: "15px",
                                                backgroundColor: "".concat(
                                                  m.O.background
                                                ),
                                              },
                                              children: v
                                                ? (0, a.jsx)(tD.Z, {
                                                    theme: "dark",
                                                    small: 1,
                                                  })
                                                : "No Funds? Claim now.",
                                            }),
                                          }),
                                      (0, a.jsx)(l8, {}),
                                      (0, a.jsx)(l3, {
                                        children: (0, a.jsx)(l6, {
                                          children:
                                            "*more tokens are coming soon*",
                                        }),
                                      }),
                                    ],
                                  })
                                : oX.Z.zetaswapState === oU.ri.SELECT_TOKENS
                                ? (0, a.jsxs)(lO, {
                                    children: [
                                      (0, a.jsx)(oQ, {}),
                                      (0, a.jsxs)(lM, {
                                        children: [
                                          K
                                            ? null
                                            : (0, a.jsxs)(cc, {
                                                onClick: () => {
                                                  l.Z.setSideSheetOpen(!0),
                                                    l.Z.setFaucetSidesheet(!0);
                                                },
                                                children: [
                                                  (0, a.jsxs)(cx, {
                                                    children: [
                                                      (0, a.jsx)($(), {
                                                        priority: !0,
                                                        width: 16,
                                                        height: 16,
                                                        src: su,
                                                        alt: "Faucent Icon",
                                                      }),
                                                      "Claim Testnet tokens",
                                                    ],
                                                  }),
                                                  (0, a.jsx)($(), {
                                                    priority: !0,
                                                    width: 16,
                                                    height: 16,
                                                    src: sk,
                                                    alt: "Faucent Icon",
                                                  }),
                                                ],
                                              }),
                                          (0, a.jsxs)(lU, {
                                            children: [
                                              (0, a.jsx)(lW, {
                                                children: "You pay",
                                              }),
                                              (0, a.jsxs)(lH, {
                                                children: [
                                                  (0, a.jsx)(lz, {
                                                    onClick: () => {
                                                      R && Y
                                                        ? (K
                                                            ? (l.Z.setBottomsheetOpen(
                                                                !0
                                                              ),
                                                              l.Z.setTokenListBottomsheet(
                                                                !0
                                                              ))
                                                            : c(!0),
                                                          oX.Z.setTokenClicked(
                                                            "from"
                                                          ))
                                                        : K
                                                        ? (l.Z.setBottomsheetOpen(
                                                            !0
                                                          ),
                                                          l.Z.setTokenListBottomsheet(
                                                            !0
                                                          ),
                                                          l.Z.setPhoneToastMessage(
                                                            {
                                                              message:
                                                                "".concat(
                                                                  R
                                                                    ? "Change network"
                                                                    : "Connect wallet"
                                                                ),
                                                            }
                                                          ))
                                                        : l.Z.setToastMessage({
                                                            message: "".concat(
                                                              R
                                                                ? "Change network"
                                                                : "Connect wallet"
                                                            ),
                                                            type: "DANGER",
                                                          });
                                                    },
                                                    children:
                                                      oX.Z.selectedFromToken &&
                                                      Y
                                                        ? (0, a.jsxs)(lO, {
                                                            style: {
                                                              display: "flex",
                                                              flexDirection:
                                                                "row",
                                                            },
                                                            children: [
                                                              (0, a.jsx)(lX, {
                                                                children: (0,
                                                                a.jsx)($(), {
                                                                  width: 32,
                                                                  height: 32,
                                                                  src:
                                                                    null ===
                                                                      (e =
                                                                        oX.Z
                                                                          .selectedFromToken) ||
                                                                    void 0 === e
                                                                      ? void 0
                                                                      : e.image,
                                                                  alt: "token-asset",
                                                                }),
                                                              }),
                                                              (0, a.jsxs)(lY, {
                                                                children: [
                                                                  (0, a.jsx)(
                                                                    lq,
                                                                    {
                                                                      children:
                                                                        null ===
                                                                          (t =
                                                                            oX.Z
                                                                              .selectedFromToken) ||
                                                                        void 0 ===
                                                                          t
                                                                          ? void 0
                                                                          : t.name,
                                                                    }
                                                                  ),
                                                                  (0, a.jsx)(
                                                                    lK,
                                                                    {
                                                                      children:
                                                                        "On Zetachain",
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                              (0, a.jsx)(
                                                                to._M,
                                                                {
                                                                  width: K
                                                                    ? 6
                                                                    : 10,
                                                                  height: 6,
                                                                }
                                                              ),
                                                            ],
                                                          })
                                                        : (0, a.jsxs)(l$, {
                                                            disablecursor:
                                                              R && Y ? 0 : 1,
                                                            children: [
                                                              (0, a.jsx)(ce, {
                                                                children:
                                                                  "Select",
                                                              }),
                                                              (0, a.jsx)(
                                                                to._M,
                                                                {
                                                                  width: K
                                                                    ? 6
                                                                    : 10,
                                                                  height: 6,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                  }),
                                                  (0, a.jsxs)(lQ, {
                                                    children: [
                                                      (0, a.jsx)(l4, {
                                                        placeholder: "0.00",
                                                        style: {
                                                          maxWidth: "100px",
                                                          marginLeft: "0px",
                                                          textAlign: "right",
                                                        },
                                                        maxLength: 18,
                                                        value: oX.Z.fromAmount,
                                                        onChange: (n) => {
                                                          let e =
                                                            n.target.value;
                                                          if (isNaN(e)) return;
                                                          let t = e.length;
                                                          t > 18 ||
                                                            oX.Z.setFromAmount(
                                                              e
                                                            );
                                                        },
                                                      }),
                                                      (0, a.jsxs)(cn, {
                                                        children: [
                                                          (0, a.jsxs)(l0, {
                                                            children: [
                                                              "Bal: ",
                                                              (0, y.Om)(p),
                                                            ],
                                                          }),
                                                          (0, a.jsx)(l7, {
                                                            onClick: () => {
                                                              oX.Z.setFromAmount(
                                                                p
                                                              );
                                                            },
                                                            children: "Max",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)(cr, {
                                            onClick: () => {
                                              let n = oX.Z.selectedFromToken,
                                                e = oX.Z.selectedToToken;
                                              oX.Z.setFromAmount(""),
                                                oX.Z.setSelectedFromToken(e),
                                                oX.Z.setSelectedToToken(n);
                                            },
                                            children: (0, a.jsx)(to.sv, {
                                              width: K ? 28 : 38,
                                              height: K ? 28 : 38,
                                            }),
                                          }),
                                          (0, a.jsxs)(lU, {
                                            children: [
                                              (0, a.jsx)(lW, {
                                                children: "You get",
                                              }),
                                              (0, a.jsxs)(lH, {
                                                children: [
                                                  (0, a.jsx)(lz, {
                                                    onClick: () => {
                                                      if (!R || !Y) {
                                                        if (K) {
                                                          l.Z.setPhoneToastMessage(
                                                            {
                                                              message:
                                                                "".concat(
                                                                  R
                                                                    ? "Change network"
                                                                    : "Connect wallet"
                                                                ),
                                                              type: "danger",
                                                            }
                                                          );
                                                          return;
                                                        }
                                                        l.Z.setToastMessage({
                                                          message: "".concat(
                                                            R
                                                              ? "Change network"
                                                              : "Connect wallet"
                                                          ),
                                                          type: "DANGER",
                                                        });
                                                        return;
                                                      }
                                                      c(!0),
                                                        oX.Z.setTokenClicked(
                                                          "to"
                                                        );
                                                    },
                                                    children: oX.Z
                                                      .selectedToToken
                                                      ? (0, a.jsxs)(lO, {
                                                          style: {
                                                            display: "flex",
                                                            flexDirection:
                                                              "row",
                                                          },
                                                          children: [
                                                            (0, a.jsx)(lX, {
                                                              children: (0,
                                                              a.jsx)($(), {
                                                                width: 32,
                                                                height: 32,
                                                                src:
                                                                  null ===
                                                                    (i =
                                                                      oX.Z
                                                                        .selectedToToken) ||
                                                                  void 0 === i
                                                                    ? void 0
                                                                    : i.image,
                                                                alt: "token-asset",
                                                              }),
                                                            }),
                                                            (0, a.jsxs)(lY, {
                                                              children: [
                                                                (0, a.jsx)(lq, {
                                                                  children:
                                                                    null ===
                                                                      (r =
                                                                        oX.Z
                                                                          .selectedToToken) ||
                                                                    void 0 === r
                                                                      ? void 0
                                                                      : r.name,
                                                                }),
                                                                (0, a.jsx)(lK, {
                                                                  children:
                                                                    "On Zetachain",
                                                                }),
                                                              ],
                                                            }),
                                                            (0, a.jsx)(to._M, {
                                                              width: K ? 6 : 10,
                                                              height: 6,
                                                            }),
                                                          ],
                                                        })
                                                      : (0, a.jsxs)(l$, {
                                                          disablecursor:
                                                            R && Y ? 0 : 1,
                                                          children: [
                                                            (0, a.jsx)(ce, {
                                                              children:
                                                                "Select",
                                                            }),
                                                            (0, a.jsx)(to._M, {
                                                              width: K ? 6 : 10,
                                                              height: 6,
                                                            }),
                                                          ],
                                                        }),
                                                  }),
                                                  (0, a.jsx)(lQ, {
                                                    children: (0, a.jsx)(lJ, {
                                                      children: V
                                                        ? (0, a.jsx)(C.Z, {
                                                            width: "40px",
                                                            height: "15px",
                                                          })
                                                        : parseFloat(
                                                            oX.Z.fromAmount
                                                          ) > 0 &&
                                                          oX.Z.selectedToToken
                                                        ? (0, y.Om)(
                                                            parseFloat(
                                                              oX.Z.toAmount
                                                            )
                                                          )
                                                        : "0.00",
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsx)(sP, {}),
                                        ],
                                      }),
                                    ],
                                  })
                                : oX.Z.zetaswapState === oU.ri.REVIEW_TRANSFER
                                ? (0, a.jsx)(sm, {})
                                : (0, a.jsx)(s8, {}),
                              s || oX.Z.zetaswapState !== oU.ri.SELECT_TOKENS
                                ? null
                                : (0, a.jsx)(nQ.Z, {
                                    style: { marginTop: "15px" },
                                    onClick: () => {
                                      if (!B) {
                                        if (h === oU.BN.CONNECT_WALLET_EVM) {
                                          if (K) {
                                            l.Z.setBottomsheetOpen(!0),
                                              l.Z.setWalletConnectBottomsheet(
                                                !0
                                              );
                                            return;
                                          }
                                          l.Z.setWalletConnectOpen(!0);
                                          return;
                                        }
                                        if (
                                          oX.Z.selectedFromToken &&
                                          "Approve" === h
                                        ) {
                                          J();
                                          return;
                                        }
                                        if (oX.Z.selectedFromToken) {
                                          if (!oX.Z.selectedToToken) {
                                            if (K) {
                                              l.Z.setPhoneToastMessage({
                                                message:
                                                  "Select destination chain for swap",
                                                type: "danger",
                                              });
                                              return;
                                            }
                                            l.Z.setToastMessage({
                                              message:
                                                "Select destination chain for swap",
                                              type: "DANGER",
                                            });
                                            return;
                                          }
                                          h !== oU.BN.ENTER_AMOUNT &&
                                            h !== oU.BN.INSUFFICIENT_BALANCE &&
                                            oX.Z.setZetaswapState(
                                              oU.ri.REVIEW_TRANSFER
                                            );
                                        }
                                      }
                                    },
                                    children: (0, a.jsx)(ts.Z, {
                                      disabled: g,
                                      style: {
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "".concat(
                                          h === oU.BN.INSUFFICIENT_BALANCE
                                            ? "#fff"
                                            : "#000"
                                        ),
                                        boxShadow: "".concat(
                                          h === oU.BN.INSUFFICIENT_BALANCE
                                            ? "0px 6px ".concat(
                                                m.O.greyStoneShadow
                                              )
                                            : "0px 6px ".concat(m.O.shadowColor)
                                        ),
                                        padding: "15px",
                                        backgroundColor: "".concat(
                                          h === oU.BN.INSUFFICIENT_BALANCE
                                            ? "".concat(m.O.shade2)
                                            : "".concat(m.O.background)
                                        ),
                                      },
                                      children: v
                                        ? (0, a.jsx)(tD.Z, {
                                            theme: "dark",
                                            small: 1,
                                          })
                                        : h,
                                    }),
                                  }),
                            ],
                          }),
                        }),
                      }),
                    })
                  : null,
            })
          );
        })
      );
      function cp() {
        let n = (0, i._)([
          "\n  display: flex;\n  justifyContent: center;\n  alignItems: center;\n  width: 100%;\n",
        ]);
        return (
          (cp = function () {
            return n;
          }),
          n
        );
      }
      function cm() {
        let n = (0, i._)(["\n  display: ", "\n"]);
        return (
          (cm = function () {
            return n;
          }),
          n
        );
      }
      function cu() {
        let n = (0, i._)(["\n  display: ", ";\n  width: 100%;\n"]);
        return (
          (cu = function () {
            return n;
          }),
          n
        );
      }
      function ck() {
        let n = (0, i._)(["\n  display: ", ";\n  width: 100%\n"]);
        return (
          (ck = function () {
            return n;
          }),
          n
        );
      }
      function ch() {
        let n = (0, i._)(["\n  display: ", ";\n  width: 100%\n"]);
        return (
          (ch = function () {
            return n;
          }),
          n
        );
      }
      function cf() {
        let n = (0, i._)(["\n  display: ", ";\n  width: 100%\n"]);
        return (
          (cf = function () {
            return n;
          }),
          n
        );
      }
      let cy = r.ZP.div(cp()),
        cg = r.ZP.div(cm(), (n) => (1 === n.active ? "flex" : "none")),
        cw = r.ZP.div(cu(), (n) => (1 === n.active ? "flex" : "none")),
        cA = r.ZP.div(ck(), (n) => (1 === n.active ? "flex" : "none")),
        cZ = r.ZP.div(ch(), (n) => (1 === n.active ? "flex" : "none")),
        cb = r.ZP.div(cf(), (n) => (1 === n.active ? "flex" : "none"));
      var cj = (0, s.f3)("appStore")(
          (0, oe.Pi)(() =>
            (0, a.jsxs)(cy, {
              children: [
                (0, a.jsx)(cg, {
                  active: "Pool" === l.Z.activeTab ? 1 : 0,
                  children: (0, a.jsx)(p, {}),
                }),
                (0, a.jsx)(cw, {
                  active: "Transfer" === l.Z.activeTab ? 1 : 0,
                  children: (0, a.jsx)(on, {}),
                }),
                (0, a.jsx)(cA, {
                  active: "Rewards" === l.Z.activeTab ? 1 : 0,
                  children: (0, a.jsx)(ta, {}),
                }),
                (0, a.jsx)(cb, {
                  active: "Faucet" === l.Z.activeTab ? 1 : 0,
                  children: (0, a.jsx)(oM, {}),
                }),
                (0, a.jsx)(cZ, {
                  active: "Zetaswap" === l.Z.activeTab ? 1 : 0,
                  children: (0, a.jsx)(cd, {}),
                }),
              ],
            })
          )
        ),
        cS = t(95827),
        cE = {
          src: "/_next/static/media/transfer-bn.3cc1036b.svg",
          height: 25,
          width: 25,
          blurWidth: 0,
          blurHeight: 0,
        },
        cv = {
          src: "/_next/static/media/rewards-bn.ec209caa.svg",
          height: 25,
          width: 25,
          blurWidth: 0,
          blurHeight: 0,
        },
        cP = {
          src: "/_next/static/media/faucet.36f2e931.svg",
          height: 24,
          width: 25,
          blurWidth: 0,
          blurHeight: 0,
        },
        cB = {
          src: "/_next/static/media/zeta-swap.e4d84d38.svg",
          height: 25,
          width: 25,
          blurWidth: 0,
          blurHeight: 0,
        };
      function cD() {
        let n = (0, i._)([""]);
        return (
          (cD = function () {
            return n;
          }),
          n
        );
      }
      function cT() {
        let n = (0, i._)([
          "\n  padding: 10px 0px;\n  display: flex;\n  flex-direction: row;\n  background-color: ",
          ";\n  width: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n",
        ]);
        return (
          (cT = function () {
            return n;
          }),
          n
        );
      }
      function cC() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  opacity: ",
          ";\n",
        ]);
        return (
          (cC = function () {
            return n;
          }),
          n
        );
      }
      function c_() {
        let n = (0, i._)(["\n  ", "\n  margin-top: 5px\n"]);
        return (
          (c_ = function () {
            return n;
          }),
          n
        );
      }
      r.ZP.div(cD());
      let cF = r.ZP.div(cT(), m.O.shade4),
        cR = r.ZP.div(cC(), (n) => (n.active ? "1" : "0.5")),
        cV = r.ZP.span(c_(), c.jJ);
      var cI = (0, s.f3)(
        "appStore",
        "transferStore"
      )(
        (0, s.Pi)(() => {
          let { address: n } = (0, k.mA)(),
            e = !1,
            t = window.innerWidth;
          t <= 940 && (e = !0);
          let i = () => {
            e && l.Z.setActiveTab("Zetaswap");
          };
          return (
            (0, o.useEffect)(() => {
              i();
            }, []),
            (0, a.jsxs)(cF, {
              children: [
                (0, a.jsxs)(cR, {
                  onClick: () => {
                    l.Z.setActiveTab("Zetaswap");
                  },
                  active: "Zetaswap" === l.Z.activeTab ? 1 : 0,
                  children: [
                    (0, a.jsx)($(), { src: cB, alt: "zetaswap-asset" }),
                    (0, a.jsx)(cV, { children: "Zetaswap" }),
                  ],
                }),
                (0, a.jsxs)(cR, {
                  onClick: () => {
                    if (!n) {
                      l.Z.setBottomsheetOpen(!0),
                        l.Z.setWalletConnectBottomsheet(!0);
                      return;
                    }
                    l.Z.setBottomsheetOpen(!0), l.Z.setFaucetBottomsheet(!0);
                  },
                  active: "Faucet" === l.Z.activeTab ? 1 : 0,
                  children: [
                    (0, a.jsx)($(), { src: cP, alt: "faucet-asset" }),
                    (0, a.jsx)(cV, { children: "Zeta faucet" }),
                  ],
                }),
                (0, a.jsxs)(cR, {
                  active: "Rewards" === l.Z.activeTab ? 1 : 0,
                  onClick: () => {
                    l.Z.setActiveTab("Rewards");
                  },
                  children: [
                    (0, a.jsx)($(), { src: cv, alt: "rewards-asset" }),
                    (0, a.jsx)(cV, { children: "Rewards" }),
                  ],
                }),
                (0, a.jsxs)(cR, {
                  active: "Transfer" === l.Z.activeTab ? 1 : 0,
                  onClick: () => {
                    l.Z.setActiveTab("Transfer");
                  },
                  children: [
                    (0, a.jsx)($(), { src: cE, alt: "transfer-asset" }),
                    (0, a.jsx)(cV, { children: "Cross-chain" }),
                  ],
                }),
              ],
            })
          );
        })
      );
      function cG() {
        let n = (0, i._)([""]);
        return (
          (cG = function () {
            return n;
          }),
          n
        );
      }
      function cO() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n",
        ]);
        return (
          (cO = function () {
            return n;
          }),
          n
        );
      }
      function cN() {
        let n = (0, i._)([
          "\n  display: none;\n  @media screen and (max-width: 940px) {\n    display: flex;\n    height: 100vh;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n",
        ]);
        return (
          (cN = function () {
            return n;
          }),
          n
        );
      }
      function cL() {
        let n = (0, i._)([
          "\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-size: cover;\n",
        ]);
        return (
          (cL = function () {
            return n;
          }),
          n
        );
      }
      function cM() {
        let n = (0, i._)([
          "\n  display: flex;\n  justify-content: center;\n  width: 100%;\n",
        ]);
        return (
          (cM = function () {
            return n;
          }),
          n
        );
      }
      function cU() {
        let n = (0, i._)([
          "\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n",
        ]);
        return (
          (cU = function () {
            return n;
          }),
          n
        );
      }
      function cW() {
        let n = (0, i._)([
          "\n  display: none;\n  \n  @media screen and (max-width: 940px) {\n    display: flex;\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n  }\n",
        ]);
        return (
          (cW = function () {
            return n;
          }),
          n
        );
      }
      r.ZP.div(cG());
      let cH = r.ZP.div(cO());
      r.ZP.div(cN());
      let cz = r.ZP.div(cL()),
        cY = r.ZP.div(cM()),
        cq = r.ZP.div(cU()),
        cK = r.ZP.div(cW()),
        cQ = () => (0, a.jsx)(cq, { children: (0, a.jsx)(cj, {}) });
      var cX = () =>
        (0, a.jsx)(cz, {
          style: {
            backgroundImage: "url(".concat(
              "/_next/static/media/bg2.5e4f6916.png",
              ")"
            ),
          },
          children: (0, a.jsxs)(cH, {
            children: [
              (0, a.jsx)(cY, { children: (0, a.jsx)(cS.default, {}) }),
              (0, a.jsx)(cQ, {}),
              (0, a.jsx)(cK, { children: (0, a.jsx)(cI, {}) }),
            ],
          }),
        });
    },
  },
  function (n) {
    n.O(0, [296, 530, 323, 447, 774, 888, 179], function () {
      return n((n.s = 48312));
    }),
      (_N_E = n.O());
  },
]);
