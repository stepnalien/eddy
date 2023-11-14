(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [391],
  {
    65987: function (t) {
      "use strict";
      var e = {
        single_source_shortest_paths: function (t, r, o) {
          var i,
            n,
            l,
            a,
            s,
            c,
            d,
            h = {},
            u = {};
          u[r] = 0;
          var m = e.PriorityQueue.make();
          for (m.push(r, 0); !m.empty(); )
            for (l in ((n = (i = m.pop()).value),
            (a = i.cost),
            (s = t[n] || {})))
              s.hasOwnProperty(l) &&
                ((c = a + s[l]),
                (d = u[l]),
                (void 0 === u[l] || d > c) &&
                  ((u[l] = c), m.push(l, c), (h[l] = n)));
          if (void 0 !== o && void 0 === u[o])
            throw Error(
              ["Could not find a path from ", r, " to ", o, "."].join("")
            );
          return h;
        },
        extract_shortest_path_from_predecessor_list: function (t, e) {
          for (var r = [], o = e; o; ) r.push(o), t[o], (o = t[o]);
          return r.reverse(), r;
        },
        find_path: function (t, r, o) {
          var i = e.single_source_shortest_paths(t, r, o);
          return e.extract_shortest_path_from_predecessor_list(i, o);
        },
        PriorityQueue: {
          make: function (t) {
            var r,
              o = e.PriorityQueue,
              i = {};
            for (r in ((t = t || {}), o)) o.hasOwnProperty(r) && (i[r] = o[r]);
            return (i.queue = []), (i.sorter = t.sorter || o.default_sorter), i;
          },
          default_sorter: function (t, e) {
            return t.cost - e.cost;
          },
          push: function (t, e) {
            this.queue.push({ value: t, cost: e }),
              this.queue.sort(this.sorter);
          },
          pop: function () {
            return this.queue.shift();
          },
          empty: function () {
            return 0 === this.queue.length;
          },
        },
      };
      t.exports = e;
    },
    6752: function (t) {
      "use strict";
      t.exports = function (t) {
        for (var e = [], r = t.length, o = 0; o < r; o++) {
          var i = t.charCodeAt(o);
          if (i >= 55296 && i <= 56319 && r > o + 1) {
            var n = t.charCodeAt(o + 1);
            n >= 56320 &&
              n <= 57343 &&
              ((i = (i - 55296) * 1024 + n - 56320 + 65536), (o += 1));
          }
          if (i < 128) {
            e.push(i);
            continue;
          }
          if (i < 2048) {
            e.push((i >> 6) | 192), e.push((63 & i) | 128);
            continue;
          }
          if (i < 55296 || (i >= 57344 && i < 65536)) {
            e.push((i >> 12) | 224),
              e.push(((i >> 6) & 63) | 128),
              e.push((63 & i) | 128);
            continue;
          }
          if (i >= 65536 && i <= 1114111) {
            e.push((i >> 18) | 240),
              e.push(((i >> 12) & 63) | 128),
              e.push(((i >> 6) & 63) | 128),
              e.push((63 & i) | 128);
            continue;
          }
          e.push(239, 191, 189);
        }
        return new Uint8Array(e).buffer;
      };
    },
    92592: function (t, e, r) {
      let o = r(47138),
        i = r(95115),
        n = r(6907),
        l = r(93776);
      function a(t, e, r, n, l) {
        let a = [].slice.call(arguments, 1),
          s = a.length,
          c = "function" == typeof a[s - 1];
        if (!c && !o()) throw Error("Callback required as last argument");
        if (c) {
          if (s < 2) throw Error("Too few arguments provided");
          2 === s
            ? ((l = r), (r = e), (e = n = void 0))
            : 3 === s &&
              (e.getContext && void 0 === l
                ? ((l = n), (n = void 0))
                : ((l = n), (n = r), (r = e), (e = void 0)));
        } else {
          if (s < 1) throw Error("Too few arguments provided");
          return (
            1 === s
              ? ((r = e), (e = n = void 0))
              : 2 !== s || e.getContext || ((n = r), (r = e), (e = void 0)),
            new Promise(function (o, l) {
              try {
                let l = i.create(r, n);
                o(t(l, e, n));
              } catch (t) {
                l(t);
              }
            })
          );
        }
        try {
          let o = i.create(r, n);
          l(null, t(o, e, n));
        } catch (t) {
          l(t);
        }
      }
      (e.create = i.create),
        (e.toCanvas = a.bind(null, n.render)),
        (e.toDataURL = a.bind(null, n.renderToDataURL)),
        (e.toString = a.bind(null, function (t, e, r) {
          return l.render(t, r);
        }));
    },
    47138: function (t) {
      t.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    21845: function (t, e, r) {
      let o = r(10242).getSymbolSize;
      (e.getRowColCoords = function (t) {
        if (1 === t) return [];
        let e = Math.floor(t / 7) + 2,
          r = o(t),
          i = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * e - 2)),
          n = [r - 7];
        for (let t = 1; t < e - 1; t++) n[t] = n[t - 1] - i;
        return n.push(6), n.reverse();
      }),
        (e.getPositions = function (t) {
          let r = [],
            o = e.getRowColCoords(t),
            i = o.length;
          for (let t = 0; t < i; t++)
            for (let e = 0; e < i; e++)
              (0 !== t || 0 !== e) &&
                (0 !== t || e !== i - 1) &&
                (t !== i - 1 || 0 !== e) &&
                r.push([o[t], o[e]]);
          return r;
        });
    },
    8260: function (t, e, r) {
      let o = r(76910),
        i = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function n(t) {
        (this.mode = o.ALPHANUMERIC), (this.data = t);
      }
      (n.getBitsLength = function (t) {
        return 11 * Math.floor(t / 2) + 6 * (t % 2);
      }),
        (n.prototype.getLength = function () {
          return this.data.length;
        }),
        (n.prototype.getBitsLength = function () {
          return n.getBitsLength(this.data.length);
        }),
        (n.prototype.write = function (t) {
          let e;
          for (e = 0; e + 2 <= this.data.length; e += 2) {
            let r = 45 * i.indexOf(this.data[e]);
            (r += i.indexOf(this.data[e + 1])), t.put(r, 11);
          }
          this.data.length % 2 && t.put(i.indexOf(this.data[e]), 6);
        }),
        (t.exports = n);
    },
    97245: function (t) {
      function e() {
        (this.buffer = []), (this.length = 0);
      }
      (e.prototype = {
        get: function (t) {
          return ((this.buffer[Math.floor(t / 8)] >>> (7 - (t % 8))) & 1) == 1;
        },
        put: function (t, e) {
          for (let r = 0; r < e; r++)
            this.putBit(((t >>> (e - r - 1)) & 1) == 1);
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (t) {
          let e = Math.floor(this.length / 8);
          this.buffer.length <= e && this.buffer.push(0),
            t && (this.buffer[e] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (t.exports = e);
    },
    73280: function (t) {
      function e(t) {
        if (!t || t < 1)
          throw Error("BitMatrix size must be defined and greater than 0");
        (this.size = t),
          (this.data = new Uint8Array(t * t)),
          (this.reservedBit = new Uint8Array(t * t));
      }
      (e.prototype.set = function (t, e, r, o) {
        let i = t * this.size + e;
        (this.data[i] = r), o && (this.reservedBit[i] = !0);
      }),
        (e.prototype.get = function (t, e) {
          return this.data[t * this.size + e];
        }),
        (e.prototype.xor = function (t, e, r) {
          this.data[t * this.size + e] ^= r;
        }),
        (e.prototype.isReserved = function (t, e) {
          return this.reservedBit[t * this.size + e];
        }),
        (t.exports = e);
    },
    43424: function (t, e, r) {
      let o = r(6752),
        i = r(76910);
      function n(t) {
        (this.mode = i.BYTE),
          "string" == typeof t && (t = o(t)),
          (this.data = new Uint8Array(t));
      }
      (n.getBitsLength = function (t) {
        return 8 * t;
      }),
        (n.prototype.getLength = function () {
          return this.data.length;
        }),
        (n.prototype.getBitsLength = function () {
          return n.getBitsLength(this.data.length);
        }),
        (n.prototype.write = function (t) {
          for (let e = 0, r = this.data.length; e < r; e++)
            t.put(this.data[e], 8);
        }),
        (t.exports = n);
    },
    35393: function (t, e, r) {
      let o = r(64908),
        i = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        n = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (e.getBlocksCount = function (t, e) {
        switch (e) {
          case o.L:
            return i[(t - 1) * 4 + 0];
          case o.M:
            return i[(t - 1) * 4 + 1];
          case o.Q:
            return i[(t - 1) * 4 + 2];
          case o.H:
            return i[(t - 1) * 4 + 3];
          default:
            return;
        }
      }),
        (e.getTotalCodewordsCount = function (t, e) {
          switch (e) {
            case o.L:
              return n[(t - 1) * 4 + 0];
            case o.M:
              return n[(t - 1) * 4 + 1];
            case o.Q:
              return n[(t - 1) * 4 + 2];
            case o.H:
              return n[(t - 1) * 4 + 3];
            default:
              return;
          }
        });
    },
    64908: function (t, e) {
      (e.L = { bit: 1 }),
        (e.M = { bit: 0 }),
        (e.Q = { bit: 3 }),
        (e.H = { bit: 2 }),
        (e.isValid = function (t) {
          return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4;
        }),
        (e.from = function (t, r) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" != typeof t) throw Error("Param is not a string");
              let r = t.toLowerCase();
              switch (r) {
                case "l":
                case "low":
                  return e.L;
                case "m":
                case "medium":
                  return e.M;
                case "q":
                case "quartile":
                  return e.Q;
                case "h":
                case "high":
                  return e.H;
                default:
                  throw Error("Unknown EC Level: " + t);
              }
            })(t);
          } catch (t) {
            return r;
          }
        });
    },
    76526: function (t, e, r) {
      let o = r(10242).getSymbolSize;
      e.getPositions = function (t) {
        let e = o(t);
        return [
          [0, 0],
          [e - 7, 0],
          [0, e - 7],
        ];
      };
    },
    61642: function (t, e, r) {
      let o = r(10242),
        i = o.getBCHDigit(1335);
      e.getEncodedBits = function (t, e) {
        let r = (t.bit << 3) | e,
          n = r << 10;
        for (; o.getBCHDigit(n) - i >= 0; ) n ^= 1335 << (o.getBCHDigit(n) - i);
        return ((r << 10) | n) ^ 21522;
      };
    },
    69729: function (t, e) {
      let r = new Uint8Array(512),
        o = new Uint8Array(256);
      !(function () {
        let t = 1;
        for (let e = 0; e < 255; e++)
          (r[e] = t), (o[t] = e), 256 & (t <<= 1) && (t ^= 285);
        for (let t = 255; t < 512; t++) r[t] = r[t - 255];
      })(),
        (e.log = function (t) {
          if (t < 1) throw Error("log(" + t + ")");
          return o[t];
        }),
        (e.exp = function (t) {
          return r[t];
        }),
        (e.mul = function (t, e) {
          return 0 === t || 0 === e ? 0 : r[o[t] + o[e]];
        });
    },
    35442: function (t, e, r) {
      let o = r(76910),
        i = r(10242);
      function n(t) {
        (this.mode = o.KANJI), (this.data = t);
      }
      (n.getBitsLength = function (t) {
        return 13 * t;
      }),
        (n.prototype.getLength = function () {
          return this.data.length;
        }),
        (n.prototype.getBitsLength = function () {
          return n.getBitsLength(this.data.length);
        }),
        (n.prototype.write = function (t) {
          let e;
          for (e = 0; e < this.data.length; e++) {
            let r = i.toSJIS(this.data[e]);
            if (r >= 33088 && r <= 40956) r -= 33088;
            else if (r >= 57408 && r <= 60351) r -= 49472;
            else
              throw Error(
                "Invalid SJIS character: " +
                  this.data[e] +
                  "\nMake sure your charset is UTF-8"
              );
            (r = ((r >>> 8) & 255) * 192 + (255 & r)), t.put(r, 13);
          }
        }),
        (t.exports = n);
    },
    27126: function (t, e) {
      e.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      let r = { N1: 3, N2: 3, N3: 40, N4: 10 };
      (e.isValid = function (t) {
        return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7;
      }),
        (e.from = function (t) {
          return e.isValid(t) ? parseInt(t, 10) : void 0;
        }),
        (e.getPenaltyN1 = function (t) {
          let e = t.size,
            o = 0,
            i = 0,
            n = 0,
            l = null,
            a = null;
          for (let s = 0; s < e; s++) {
            (i = n = 0), (l = a = null);
            for (let c = 0; c < e; c++) {
              let e = t.get(s, c);
              e === l
                ? i++
                : (i >= 5 && (o += r.N1 + (i - 5)), (l = e), (i = 1)),
                (e = t.get(c, s)) === a
                  ? n++
                  : (n >= 5 && (o += r.N1 + (n - 5)), (a = e), (n = 1));
            }
            i >= 5 && (o += r.N1 + (i - 5)), n >= 5 && (o += r.N1 + (n - 5));
          }
          return o;
        }),
        (e.getPenaltyN2 = function (t) {
          let e = t.size,
            o = 0;
          for (let r = 0; r < e - 1; r++)
            for (let i = 0; i < e - 1; i++) {
              let e =
                t.get(r, i) +
                t.get(r, i + 1) +
                t.get(r + 1, i) +
                t.get(r + 1, i + 1);
              (4 === e || 0 === e) && o++;
            }
          return o * r.N2;
        }),
        (e.getPenaltyN3 = function (t) {
          let e = t.size,
            o = 0,
            i = 0,
            n = 0;
          for (let r = 0; r < e; r++) {
            i = n = 0;
            for (let l = 0; l < e; l++)
              (i = ((i << 1) & 2047) | t.get(r, l)),
                l >= 10 && (1488 === i || 93 === i) && o++,
                (n = ((n << 1) & 2047) | t.get(l, r)),
                l >= 10 && (1488 === n || 93 === n) && o++;
          }
          return o * r.N3;
        }),
        (e.getPenaltyN4 = function (t) {
          let e = 0,
            o = t.data.length;
          for (let r = 0; r < o; r++) e += t.data[r];
          let i = Math.abs(Math.ceil((100 * e) / o / 5) - 10);
          return i * r.N4;
        }),
        (e.applyMask = function (t, r) {
          let o = r.size;
          for (let i = 0; i < o; i++)
            for (let n = 0; n < o; n++)
              r.isReserved(n, i) ||
                r.xor(
                  n,
                  i,
                  (function (t, r, o) {
                    switch (t) {
                      case e.Patterns.PATTERN000:
                        return (r + o) % 2 == 0;
                      case e.Patterns.PATTERN001:
                        return r % 2 == 0;
                      case e.Patterns.PATTERN010:
                        return o % 3 == 0;
                      case e.Patterns.PATTERN011:
                        return (r + o) % 3 == 0;
                      case e.Patterns.PATTERN100:
                        return (Math.floor(r / 2) + Math.floor(o / 3)) % 2 == 0;
                      case e.Patterns.PATTERN101:
                        return ((r * o) % 2) + ((r * o) % 3) == 0;
                      case e.Patterns.PATTERN110:
                        return (((r * o) % 2) + ((r * o) % 3)) % 2 == 0;
                      case e.Patterns.PATTERN111:
                        return (((r * o) % 3) + ((r + o) % 2)) % 2 == 0;
                      default:
                        throw Error("bad maskPattern:" + t);
                    }
                  })(t, n, i)
                );
        }),
        (e.getBestMask = function (t, r) {
          let o = Object.keys(e.Patterns).length,
            i = 0,
            n = 1 / 0;
          for (let l = 0; l < o; l++) {
            r(l), e.applyMask(l, t);
            let o =
              e.getPenaltyN1(t) +
              e.getPenaltyN2(t) +
              e.getPenaltyN3(t) +
              e.getPenaltyN4(t);
            e.applyMask(l, t), o < n && ((n = o), (i = l));
          }
          return i;
        });
    },
    76910: function (t, e, r) {
      let o = r(43114),
        i = r(7007);
      (e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (e.MIXED = { bit: -1 }),
        (e.getCharCountIndicator = function (t, e) {
          if (!t.ccBits) throw Error("Invalid mode: " + t);
          if (!o.isValid(e)) throw Error("Invalid version: " + e);
          return e >= 1 && e < 10
            ? t.ccBits[0]
            : e < 27
            ? t.ccBits[1]
            : t.ccBits[2];
        }),
        (e.getBestModeForData = function (t) {
          return i.testNumeric(t)
            ? e.NUMERIC
            : i.testAlphanumeric(t)
            ? e.ALPHANUMERIC
            : i.testKanji(t)
            ? e.KANJI
            : e.BYTE;
        }),
        (e.toString = function (t) {
          if (t && t.id) return t.id;
          throw Error("Invalid mode");
        }),
        (e.isValid = function (t) {
          return t && t.bit && t.ccBits;
        }),
        (e.from = function (t, r) {
          if (e.isValid(t)) return t;
          try {
            return (function (t) {
              if ("string" != typeof t) throw Error("Param is not a string");
              let r = t.toLowerCase();
              switch (r) {
                case "numeric":
                  return e.NUMERIC;
                case "alphanumeric":
                  return e.ALPHANUMERIC;
                case "kanji":
                  return e.KANJI;
                case "byte":
                  return e.BYTE;
                default:
                  throw Error("Unknown mode: " + t);
              }
            })(t);
          } catch (t) {
            return r;
          }
        });
    },
    41085: function (t, e, r) {
      let o = r(76910);
      function i(t) {
        (this.mode = o.NUMERIC), (this.data = t.toString());
      }
      (i.getBitsLength = function (t) {
        return 10 * Math.floor(t / 3) + (t % 3 ? (t % 3) * 3 + 1 : 0);
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          let e, r;
          for (e = 0; e + 3 <= this.data.length; e += 3)
            (r = parseInt(this.data.substr(e, 3), 10)), t.put(r, 10);
          let o = this.data.length - e;
          o > 0 &&
            ((r = parseInt(this.data.substr(e), 10)), t.put(r, 3 * o + 1));
        }),
        (t.exports = i);
    },
    26143: function (t, e, r) {
      let o = r(69729);
      (e.mul = function (t, e) {
        let r = new Uint8Array(t.length + e.length - 1);
        for (let i = 0; i < t.length; i++)
          for (let n = 0; n < e.length; n++) r[i + n] ^= o.mul(t[i], e[n]);
        return r;
      }),
        (e.mod = function (t, e) {
          let r = new Uint8Array(t);
          for (; r.length - e.length >= 0; ) {
            let t = r[0];
            for (let i = 0; i < e.length; i++) r[i] ^= o.mul(e[i], t);
            let i = 0;
            for (; i < r.length && 0 === r[i]; ) i++;
            r = r.slice(i);
          }
          return r;
        }),
        (e.generateECPolynomial = function (t) {
          let r = new Uint8Array([1]);
          for (let i = 0; i < t; i++)
            r = e.mul(r, new Uint8Array([1, o.exp(i)]));
          return r;
        });
    },
    95115: function (t, e, r) {
      let o = r(10242),
        i = r(64908),
        n = r(97245),
        l = r(73280),
        a = r(21845),
        s = r(76526),
        c = r(27126),
        d = r(35393),
        h = r(52882),
        u = r(23103),
        m = r(61642),
        p = r(76910),
        g = r(16130);
      function f(t, e, r) {
        let o, i;
        let n = t.size,
          l = m.getEncodedBits(e, r);
        for (o = 0; o < 15; o++)
          (i = ((l >> o) & 1) == 1),
            o < 6
              ? t.set(o, 8, i, !0)
              : o < 8
              ? t.set(o + 1, 8, i, !0)
              : t.set(n - 15 + o, 8, i, !0),
            o < 8
              ? t.set(8, n - o - 1, i, !0)
              : o < 9
              ? t.set(8, 15 - o - 1 + 1, i, !0)
              : t.set(8, 15 - o - 1, i, !0);
        t.set(n - 8, 8, 1, !0);
      }
      e.create = function (t, e) {
        let r, m;
        if (void 0 === t || "" === t) throw Error("No input text");
        let w = i.M;
        return (
          void 0 !== e &&
            ((w = i.from(e.errorCorrectionLevel, i.M)),
            (r = u.from(e.version)),
            (m = c.from(e.maskPattern)),
            e.toSJISFunc && o.setToSJISFunction(e.toSJISFunc)),
          (function (t, e, r, i) {
            let m;
            if (Array.isArray(t)) m = g.fromArray(t);
            else if ("string" == typeof t) {
              let o = e;
              if (!o) {
                let e = g.rawSplit(t);
                o = u.getBestVersionForData(e, r);
              }
              m = g.fromString(t, o || 40);
            } else throw Error("Invalid data");
            let w = u.getBestVersionForData(m, r);
            if (!w)
              throw Error(
                "The amount of data is too big to be stored in a QR Code"
              );
            if (e) {
              if (e < w)
                throw Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    w +
                    ".\n"
                );
            } else e = w;
            let v = (function (t, e, r) {
                let i = new n();
                r.forEach(function (e) {
                  i.put(e.mode.bit, 4),
                    i.put(e.getLength(), p.getCharCountIndicator(e.mode, t)),
                    e.write(i);
                });
                let l = o.getSymbolTotalCodewords(t),
                  a = d.getTotalCodewordsCount(t, e),
                  s = (l - a) * 8;
                for (
                  i.getLengthInBits() + 4 <= s && i.put(0, 4);
                  i.getLengthInBits() % 8 != 0;

                )
                  i.putBit(0);
                let c = (s - i.getLengthInBits()) / 8;
                for (let t = 0; t < c; t++) i.put(t % 2 ? 17 : 236, 8);
                return (function (t, e, r) {
                  let i, n;
                  let l = o.getSymbolTotalCodewords(e),
                    a = d.getTotalCodewordsCount(e, r),
                    s = l - a,
                    c = d.getBlocksCount(e, r),
                    u = l % c,
                    m = c - u,
                    p = Math.floor(l / c),
                    g = Math.floor(s / c),
                    f = g + 1,
                    w = p - g,
                    v = new h(w),
                    b = 0,
                    y = Array(c),
                    x = Array(c),
                    C = 0,
                    $ = new Uint8Array(t.buffer);
                  for (let t = 0; t < c; t++) {
                    let e = t < m ? g : f;
                    (y[t] = $.slice(b, b + e)),
                      (x[t] = v.encode(y[t])),
                      (b += e),
                      (C = Math.max(C, e));
                  }
                  let E = new Uint8Array(l),
                    A = 0;
                  for (i = 0; i < C; i++)
                    for (n = 0; n < c; n++)
                      i < y[n].length && (E[A++] = y[n][i]);
                  for (i = 0; i < w; i++)
                    for (n = 0; n < c; n++) E[A++] = x[n][i];
                  return E;
                })(i, t, e);
              })(e, r, m),
              b = o.getSymbolSize(e),
              y = new l(b);
            return (
              (function (t, e) {
                let r = t.size,
                  o = s.getPositions(e);
                for (let e = 0; e < o.length; e++) {
                  let i = o[e][0],
                    n = o[e][1];
                  for (let e = -1; e <= 7; e++)
                    if (!(i + e <= -1) && !(r <= i + e))
                      for (let o = -1; o <= 7; o++)
                        n + o <= -1 ||
                          r <= n + o ||
                          ((e >= 0 && e <= 6 && (0 === o || 6 === o)) ||
                          (o >= 0 && o <= 6 && (0 === e || 6 === e)) ||
                          (e >= 2 && e <= 4 && o >= 2 && o <= 4)
                            ? t.set(i + e, n + o, !0, !0)
                            : t.set(i + e, n + o, !1, !0));
                }
              })(y, e),
              (function (t) {
                let e = t.size;
                for (let r = 8; r < e - 8; r++) {
                  let e = r % 2 == 0;
                  t.set(r, 6, e, !0), t.set(6, r, e, !0);
                }
              })(y),
              (function (t, e) {
                let r = a.getPositions(e);
                for (let e = 0; e < r.length; e++) {
                  let o = r[e][0],
                    i = r[e][1];
                  for (let e = -2; e <= 2; e++)
                    for (let r = -2; r <= 2; r++)
                      -2 === e ||
                      2 === e ||
                      -2 === r ||
                      2 === r ||
                      (0 === e && 0 === r)
                        ? t.set(o + e, i + r, !0, !0)
                        : t.set(o + e, i + r, !1, !0);
                }
              })(y, e),
              f(y, r, 0),
              e >= 7 &&
                (function (t, e) {
                  let r, o, i;
                  let n = t.size,
                    l = u.getEncodedBits(e);
                  for (let e = 0; e < 18; e++)
                    (r = Math.floor(e / 3)),
                      (o = (e % 3) + n - 8 - 3),
                      (i = ((l >> e) & 1) == 1),
                      t.set(r, o, i, !0),
                      t.set(o, r, i, !0);
                })(y, e),
              (function (t, e) {
                let r = t.size,
                  o = -1,
                  i = r - 1,
                  n = 7,
                  l = 0;
                for (let a = r - 1; a > 0; a -= 2)
                  for (6 === a && a--; ; ) {
                    for (let r = 0; r < 2; r++)
                      if (!t.isReserved(i, a - r)) {
                        let o = !1;
                        l < e.length && (o = ((e[l] >>> n) & 1) == 1),
                          t.set(i, a - r, o),
                          -1 == --n && (l++, (n = 7));
                      }
                    if ((i += o) < 0 || r <= i) {
                      (i -= o), (o = -o);
                      break;
                    }
                  }
              })(y, v),
              isNaN(i) && (i = c.getBestMask(y, f.bind(null, y, r))),
              c.applyMask(i, y),
              f(y, r, i),
              {
                modules: y,
                version: e,
                errorCorrectionLevel: r,
                maskPattern: i,
                segments: m,
              }
            );
          })(t, r, w, m)
        );
      };
    },
    52882: function (t, e, r) {
      let o = r(26143);
      function i(t) {
        (this.genPoly = void 0),
          (this.degree = t),
          this.degree && this.initialize(this.degree);
      }
      (i.prototype.initialize = function (t) {
        (this.degree = t), (this.genPoly = o.generateECPolynomial(this.degree));
      }),
        (i.prototype.encode = function (t) {
          if (!this.genPoly) throw Error("Encoder not initialized");
          let e = new Uint8Array(t.length + this.degree);
          e.set(t);
          let r = o.mod(e, this.genPoly),
            i = this.degree - r.length;
          if (i > 0) {
            let t = new Uint8Array(this.degree);
            return t.set(r, i), t;
          }
          return r;
        }),
        (t.exports = i);
    },
    7007: function (t, e) {
      let r = "[0-9]+",
        o =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      o = o.replace(/u/g, "\\u");
      let i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + o + ")(?:.|[\r\n]))+";
      (e.KANJI = RegExp(o, "g")),
        (e.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (e.BYTE = RegExp(i, "g")),
        (e.NUMERIC = RegExp(r, "g")),
        (e.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
      let n = RegExp("^" + o + "$"),
        l = RegExp("^" + r + "$"),
        a = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (e.testKanji = function (t) {
        return n.test(t);
      }),
        (e.testNumeric = function (t) {
          return l.test(t);
        }),
        (e.testAlphanumeric = function (t) {
          return a.test(t);
        });
    },
    16130: function (t, e, r) {
      let o = r(76910),
        i = r(41085),
        n = r(8260),
        l = r(43424),
        a = r(35442),
        s = r(7007),
        c = r(10242),
        d = r(65987);
      function h(t) {
        return unescape(encodeURIComponent(t)).length;
      }
      function u(t, e, r) {
        let o;
        let i = [];
        for (; null !== (o = t.exec(r)); )
          i.push({ data: o[0], index: o.index, mode: e, length: o[0].length });
        return i;
      }
      function m(t) {
        let e, r;
        let i = u(s.NUMERIC, o.NUMERIC, t),
          n = u(s.ALPHANUMERIC, o.ALPHANUMERIC, t);
        c.isKanjiModeEnabled()
          ? ((e = u(s.BYTE, o.BYTE, t)), (r = u(s.KANJI, o.KANJI, t)))
          : ((e = u(s.BYTE_KANJI, o.BYTE, t)), (r = []));
        let l = i.concat(n, e, r);
        return l
          .sort(function (t, e) {
            return t.index - e.index;
          })
          .map(function (t) {
            return { data: t.data, mode: t.mode, length: t.length };
          });
      }
      function p(t, e) {
        switch (e) {
          case o.NUMERIC:
            return i.getBitsLength(t);
          case o.ALPHANUMERIC:
            return n.getBitsLength(t);
          case o.KANJI:
            return a.getBitsLength(t);
          case o.BYTE:
            return l.getBitsLength(t);
        }
      }
      function g(t, e) {
        let r;
        let s = o.getBestModeForData(t);
        if ((r = o.from(e, s)) !== o.BYTE && r.bit < s.bit)
          throw Error(
            '"' +
              t +
              '" cannot be encoded with mode ' +
              o.toString(r) +
              ".\n Suggested mode is: " +
              o.toString(s)
          );
        switch ((r !== o.KANJI || c.isKanjiModeEnabled() || (r = o.BYTE), r)) {
          case o.NUMERIC:
            return new i(t);
          case o.ALPHANUMERIC:
            return new n(t);
          case o.KANJI:
            return new a(t);
          case o.BYTE:
            return new l(t);
        }
      }
      (e.fromArray = function (t) {
        return t.reduce(function (t, e) {
          return (
            "string" == typeof e
              ? t.push(g(e, null))
              : e.data && t.push(g(e.data, e.mode)),
            t
          );
        }, []);
      }),
        (e.fromString = function (t, r) {
          let i = m(t, c.isKanjiModeEnabled()),
            n = (function (t) {
              let e = [];
              for (let r = 0; r < t.length; r++) {
                let i = t[r];
                switch (i.mode) {
                  case o.NUMERIC:
                    e.push([
                      i,
                      { data: i.data, mode: o.ALPHANUMERIC, length: i.length },
                      { data: i.data, mode: o.BYTE, length: i.length },
                    ]);
                    break;
                  case o.ALPHANUMERIC:
                    e.push([
                      i,
                      { data: i.data, mode: o.BYTE, length: i.length },
                    ]);
                    break;
                  case o.KANJI:
                    e.push([
                      i,
                      { data: i.data, mode: o.BYTE, length: h(i.data) },
                    ]);
                    break;
                  case o.BYTE:
                    e.push([{ data: i.data, mode: o.BYTE, length: h(i.data) }]);
                }
              }
              return e;
            })(i),
            l = (function (t, e) {
              let r = {},
                i = { start: {} },
                n = ["start"];
              for (let l = 0; l < t.length; l++) {
                let a = t[l],
                  s = [];
                for (let t = 0; t < a.length; t++) {
                  let c = a[t],
                    d = "" + l + t;
                  s.push(d), (r[d] = { node: c, lastCount: 0 }), (i[d] = {});
                  for (let t = 0; t < n.length; t++) {
                    let l = n[t];
                    r[l] && r[l].node.mode === c.mode
                      ? ((i[l][d] =
                          p(r[l].lastCount + c.length, c.mode) -
                          p(r[l].lastCount, c.mode)),
                        (r[l].lastCount += c.length))
                      : (r[l] && (r[l].lastCount = c.length),
                        (i[l][d] =
                          p(c.length, c.mode) +
                          4 +
                          o.getCharCountIndicator(c.mode, e)));
                  }
                }
                n = s;
              }
              for (let t = 0; t < n.length; t++) i[n[t]].end = 0;
              return { map: i, table: r };
            })(n, r),
            a = d.find_path(l.map, "start", "end"),
            s = [];
          for (let t = 1; t < a.length - 1; t++) s.push(l.table[a[t]].node);
          return e.fromArray(
            s.reduce(function (t, e) {
              let r = t.length - 1 >= 0 ? t[t.length - 1] : null;
              return (
                r && r.mode === e.mode
                  ? (t[t.length - 1].data += e.data)
                  : t.push(e),
                t
              );
            }, [])
          );
        }),
        (e.rawSplit = function (t) {
          return e.fromArray(m(t, c.isKanjiModeEnabled()));
        });
    },
    10242: function (t, e) {
      let r;
      let o = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
        655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828,
        1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532,
        3706,
      ];
      (e.getSymbolSize = function (t) {
        if (!t) throw Error('"version" cannot be null or undefined');
        if (t < 1 || t > 40)
          throw Error('"version" should be in range from 1 to 40');
        return 4 * t + 17;
      }),
        (e.getSymbolTotalCodewords = function (t) {
          return o[t];
        }),
        (e.getBCHDigit = function (t) {
          let e = 0;
          for (; 0 !== t; ) e++, (t >>>= 1);
          return e;
        }),
        (e.setToSJISFunction = function (t) {
          if ("function" != typeof t)
            throw Error('"toSJISFunc" is not a valid function.');
          r = t;
        }),
        (e.isKanjiModeEnabled = function () {
          return void 0 !== r;
        }),
        (e.toSJIS = function (t) {
          return r(t);
        });
    },
    43114: function (t, e) {
      e.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40;
      };
    },
    23103: function (t, e, r) {
      let o = r(10242),
        i = r(35393),
        n = r(64908),
        l = r(76910),
        a = r(43114),
        s = o.getBCHDigit(7973);
      function c(t, e) {
        return l.getCharCountIndicator(t, e) + 4;
      }
      (e.from = function (t, e) {
        return a.isValid(t) ? parseInt(t, 10) : e;
      }),
        (e.getCapacity = function (t, e, r) {
          if (!a.isValid(t)) throw Error("Invalid QR Code version");
          void 0 === r && (r = l.BYTE);
          let n = o.getSymbolTotalCodewords(t),
            s = i.getTotalCodewordsCount(t, e),
            d = (n - s) * 8;
          if (r === l.MIXED) return d;
          let h = d - c(r, t);
          switch (r) {
            case l.NUMERIC:
              return Math.floor((h / 10) * 3);
            case l.ALPHANUMERIC:
              return Math.floor((h / 11) * 2);
            case l.KANJI:
              return Math.floor(h / 13);
            case l.BYTE:
            default:
              return Math.floor(h / 8);
          }
        }),
        (e.getBestVersionForData = function (t, r) {
          let o;
          let i = n.from(r, n.M);
          if (Array.isArray(t)) {
            if (t.length > 1)
              return (function (t, r) {
                for (let o = 1; o <= 40; o++) {
                  let i = (function (t, e) {
                    let r = 0;
                    return (
                      t.forEach(function (t) {
                        let o = c(t.mode, e);
                        r += o + t.getBitsLength();
                      }),
                      r
                    );
                  })(t, o);
                  if (i <= e.getCapacity(o, r, l.MIXED)) return o;
                }
              })(t, i);
            if (0 === t.length) return 1;
            o = t[0];
          } else o = t;
          return (function (t, r, o) {
            for (let i = 1; i <= 40; i++)
              if (r <= e.getCapacity(i, o, t)) return i;
          })(o.mode, o.getLength(), i);
        }),
        (e.getEncodedBits = function (t) {
          if (!a.isValid(t) || t < 7) throw Error("Invalid QR Code version");
          let e = t << 12;
          for (; o.getBCHDigit(e) - s >= 0; )
            e ^= 7973 << (o.getBCHDigit(e) - s);
          return (t << 12) | e;
        });
    },
    6907: function (t, e, r) {
      let o = r(89653);
      (e.render = function (t, e, r) {
        var i;
        let n = r,
          l = e;
        void 0 !== n || (e && e.getContext) || ((n = e), (e = void 0)),
          e ||
            (l = (function () {
              try {
                return document.createElement("canvas");
              } catch (t) {
                throw Error("You need to specify a canvas element");
              }
            })()),
          (n = o.getOptions(n));
        let a = o.getImageWidth(t.modules.size, n),
          s = l.getContext("2d"),
          c = s.createImageData(a, a);
        return (
          o.qrToImageData(c.data, t, n),
          (i = l),
          s.clearRect(0, 0, i.width, i.height),
          i.style || (i.style = {}),
          (i.height = a),
          (i.width = a),
          (i.style.height = a + "px"),
          (i.style.width = a + "px"),
          s.putImageData(c, 0, 0),
          l
        );
      }),
        (e.renderToDataURL = function (t, r, o) {
          let i = o;
          void 0 !== i || (r && r.getContext) || ((i = r), (r = void 0)),
            i || (i = {});
          let n = e.render(t, r, i),
            l = i.type || "image/png",
            a = i.rendererOpts || {};
          return n.toDataURL(l, a.quality);
        });
    },
    93776: function (t, e, r) {
      let o = r(89653);
      function i(t, e) {
        let r = t.a / 255,
          o = e + '="' + t.hex + '"';
        return r < 1
          ? o + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"'
          : o;
      }
      function n(t, e, r) {
        let o = t + e;
        return void 0 !== r && (o += " " + r), o;
      }
      e.render = function (t, e, r) {
        let l = o.getOptions(e),
          a = t.modules.size,
          s = t.modules.data,
          c = a + 2 * l.margin,
          d = l.color.light.a
            ? "<path " +
              i(l.color.light, "fill") +
              ' d="M0 0h' +
              c +
              "v" +
              c +
              'H0z"/>'
            : "",
          h =
            "<path " +
            i(l.color.dark, "stroke") +
            ' d="' +
            (function (t, e, r) {
              let o = "",
                i = 0,
                l = !1,
                a = 0;
              for (let s = 0; s < t.length; s++) {
                let c = Math.floor(s % e),
                  d = Math.floor(s / e);
                c || l || (l = !0),
                  t[s]
                    ? (a++,
                      (s > 0 && c > 0 && t[s - 1]) ||
                        ((o += l ? n("M", c + r, 0.5 + d + r) : n("m", i, 0)),
                        (i = 0),
                        (l = !1)),
                      (c + 1 < e && t[s + 1]) || ((o += n("h", a)), (a = 0)))
                    : i++;
              }
              return o;
            })(s, a, l.margin) +
            '"/>',
          u = l.width
            ? 'width="' + l.width + '" height="' + l.width + '" '
            : "",
          m =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            u +
            ('viewBox="0 0 ' + c) +
            " " +
            c +
            '" shape-rendering="crispEdges">' +
            d +
            h +
            "</svg>\n";
        return "function" == typeof r && r(null, m), m;
      };
    },
    89653: function (t, e) {
      function r(t) {
        if (("number" == typeof t && (t = t.toString()), "string" != typeof t))
          throw Error("Color should be defined as hex string");
        let e = t.slice().replace("#", "").split("");
        if (e.length < 3 || 5 === e.length || e.length > 8)
          throw Error("Invalid hex color: " + t);
        (3 === e.length || 4 === e.length) &&
          (e = Array.prototype.concat.apply(
            [],
            e.map(function (t) {
              return [t, t];
            })
          )),
          6 === e.length && e.push("F", "F");
        let r = parseInt(e.join(""), 16);
        return {
          r: (r >> 24) & 255,
          g: (r >> 16) & 255,
          b: (r >> 8) & 255,
          a: 255 & r,
          hex: "#" + e.slice(0, 6).join(""),
        };
      }
      (e.getOptions = function (t) {
        t || (t = {}), t.color || (t.color = {});
        let e =
            void 0 === t.margin || null === t.margin || t.margin < 0
              ? 4
              : t.margin,
          o = t.width && t.width >= 21 ? t.width : void 0,
          i = t.scale || 4;
        return {
          width: o,
          scale: o ? 4 : i,
          margin: e,
          color: {
            dark: r(t.color.dark || "#000000ff"),
            light: r(t.color.light || "#ffffffff"),
          },
          type: t.type,
          rendererOpts: t.rendererOpts || {},
        };
      }),
        (e.getScale = function (t, e) {
          return e.width && e.width >= t + 2 * e.margin
            ? e.width / (t + 2 * e.margin)
            : e.scale;
        }),
        (e.getImageWidth = function (t, r) {
          let o = e.getScale(t, r);
          return Math.floor((t + 2 * r.margin) * o);
        }),
        (e.qrToImageData = function (t, r, o) {
          let i = r.modules.size,
            n = r.modules.data,
            l = e.getScale(i, o),
            a = Math.floor((i + 2 * o.margin) * l),
            s = o.margin * l,
            c = [o.color.light, o.color.dark];
          for (let e = 0; e < a; e++)
            for (let r = 0; r < a; r++) {
              let d = (e * a + r) * 4,
                h = o.color.light;
              if (e >= s && r >= s && e < a - s && r < a - s) {
                let t = Math.floor((e - s) / l),
                  o = Math.floor((r - s) / l);
                h = c[n[t * i + o] ? 1 : 0];
              }
              (t[d++] = h.r), (t[d++] = h.g), (t[d++] = h.b), (t[d] = h.a);
            }
        });
    },
    41391: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          WcmModal: function () {
            return oh;
          },
          WcmQrCode: function () {
            return rf;
          },
        });
      /**
       * @license
       * Copyright 2019 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ let o = window,
        i =
          o.ShadowRoot &&
          (void 0 === o.ShadyCSS || o.ShadyCSS.nativeShadow) &&
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        n = Symbol(),
        l = new WeakMap();
      class a {
        constructor(t, e, r) {
          if (((this._$cssResult$ = !0), r !== n))
            throw Error(
              "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
            );
          (this.cssText = t), (this.t = e);
        }
        get styleSheet() {
          let t = this.o,
            e = this.t;
          if (i && void 0 === t) {
            let r = void 0 !== e && 1 === e.length;
            r && (t = l.get(e)),
              void 0 === t &&
                ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText),
                r && l.set(e, t));
          }
          return t;
        }
        toString() {
          return this.cssText;
        }
      }
      let s = (t) => new a("string" == typeof t ? t : t + "", void 0, n),
        c = (t, ...e) => {
          let r =
            1 === t.length
              ? t[0]
              : e.reduce(
                  (e, r, o) =>
                    e +
                    ((t) => {
                      if (!0 === t._$cssResult$) return t.cssText;
                      if ("number" == typeof t) return t;
                      throw Error(
                        "Value passed to 'css' function must be a 'css' function result: " +
                          t +
                          ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                      );
                    })(r) +
                    t[o + 1],
                  t[0]
                );
          return new a(r, t, n);
        },
        d = (t, e) => {
          i
            ? (t.adoptedStyleSheets = e.map((t) =>
                t instanceof CSSStyleSheet ? t : t.styleSheet
              ))
            : e.forEach((e) => {
                let r = document.createElement("style"),
                  i = o.litNonce;
                void 0 !== i && r.setAttribute("nonce", i),
                  (r.textContent = e.cssText),
                  t.appendChild(r);
              });
        },
        h = i
          ? (t) => t
          : (t) =>
              t instanceof CSSStyleSheet
                ? ((t) => {
                    let e = "";
                    for (let r of t.cssRules) e += r.cssText;
                    return s(e);
                  })(t)
                : t,
        u = window,
        m = u.trustedTypes,
        p = m ? m.emptyScript : "",
        g = u.reactiveElementPolyfillSupport,
        f = {
          toAttribute(t, e) {
            switch (e) {
              case Boolean:
                t = t ? p : null;
                break;
              case Object:
              case Array:
                t = null == t ? t : JSON.stringify(t);
            }
            return t;
          },
          fromAttribute(t, e) {
            let r = t;
            switch (e) {
              case Boolean:
                r = null !== t;
                break;
              case Number:
                r = null === t ? null : Number(t);
                break;
              case Object:
              case Array:
                try {
                  r = JSON.parse(t);
                } catch (t) {
                  r = null;
                }
            }
            return r;
          },
        },
        w = (t, e) => e !== t && (e == e || t == t),
        v = {
          attribute: !0,
          type: String,
          converter: f,
          reflect: !1,
          hasChanged: w,
        },
        b = "finalized";
      class y extends HTMLElement {
        constructor() {
          super(),
            (this._$Ei = new Map()),
            (this.isUpdatePending = !1),
            (this.hasUpdated = !1),
            (this._$El = null),
            this._$Eu();
        }
        static addInitializer(t) {
          var e;
          this.finalize(),
            (null !== (e = this.h) && void 0 !== e ? e : (this.h = [])).push(t);
        }
        static get observedAttributes() {
          this.finalize();
          let t = [];
          return (
            this.elementProperties.forEach((e, r) => {
              let o = this._$Ep(r, e);
              void 0 !== o && (this._$Ev.set(o, r), t.push(o));
            }),
            t
          );
        }
        static createProperty(t, e = v) {
          if (
            (e.state && (e.attribute = !1),
            this.finalize(),
            this.elementProperties.set(t, e),
            !e.noAccessor && !this.prototype.hasOwnProperty(t))
          ) {
            let r = "symbol" == typeof t ? Symbol() : "__" + t,
              o = this.getPropertyDescriptor(t, r, e);
            void 0 !== o && Object.defineProperty(this.prototype, t, o);
          }
        }
        static getPropertyDescriptor(t, e, r) {
          return {
            get() {
              return this[e];
            },
            set(o) {
              let i = this[t];
              (this[e] = o), this.requestUpdate(t, i, r);
            },
            configurable: !0,
            enumerable: !0,
          };
        }
        static getPropertyOptions(t) {
          return this.elementProperties.get(t) || v;
        }
        static finalize() {
          if (this.hasOwnProperty(b)) return !1;
          this[b] = !0;
          let t = Object.getPrototypeOf(this);
          if (
            (t.finalize(),
            void 0 !== t.h && (this.h = [...t.h]),
            (this.elementProperties = new Map(t.elementProperties)),
            (this._$Ev = new Map()),
            this.hasOwnProperty("properties"))
          ) {
            let t = this.properties,
              e = [
                ...Object.getOwnPropertyNames(t),
                ...Object.getOwnPropertySymbols(t),
              ];
            for (let r of e) this.createProperty(r, t[r]);
          }
          return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
        }
        static finalizeStyles(t) {
          let e = [];
          if (Array.isArray(t)) {
            let r = new Set(t.flat(1 / 0).reverse());
            for (let t of r) e.unshift(h(t));
          } else void 0 !== t && e.push(h(t));
          return e;
        }
        static _$Ep(t, e) {
          let r = e.attribute;
          return !1 === r
            ? void 0
            : "string" == typeof r
            ? r
            : "string" == typeof t
            ? t.toLowerCase()
            : void 0;
        }
        _$Eu() {
          var t;
          (this._$E_ = new Promise((t) => (this.enableUpdating = t))),
            (this._$AL = new Map()),
            this._$Eg(),
            this.requestUpdate(),
            null === (t = this.constructor.h) ||
              void 0 === t ||
              t.forEach((t) => t(this));
        }
        addController(t) {
          var e, r;
          (null !== (e = this._$ES) && void 0 !== e
            ? e
            : (this._$ES = [])
          ).push(t),
            void 0 !== this.renderRoot &&
              this.isConnected &&
              (null === (r = t.hostConnected) || void 0 === r || r.call(t));
        }
        removeController(t) {
          var e;
          null === (e = this._$ES) ||
            void 0 === e ||
            e.splice(this._$ES.indexOf(t) >>> 0, 1);
        }
        _$Eg() {
          this.constructor.elementProperties.forEach((t, e) => {
            this.hasOwnProperty(e) &&
              (this._$Ei.set(e, this[e]), delete this[e]);
          });
        }
        createRenderRoot() {
          var t;
          let e =
            null !== (t = this.shadowRoot) && void 0 !== t
              ? t
              : this.attachShadow(this.constructor.shadowRootOptions);
          return d(e, this.constructor.elementStyles), e;
        }
        connectedCallback() {
          var t;
          void 0 === this.renderRoot &&
            (this.renderRoot = this.createRenderRoot()),
            this.enableUpdating(!0),
            null === (t = this._$ES) ||
              void 0 === t ||
              t.forEach((t) => {
                var e;
                return null === (e = t.hostConnected) || void 0 === e
                  ? void 0
                  : e.call(t);
              });
        }
        enableUpdating(t) {}
        disconnectedCallback() {
          var t;
          null === (t = this._$ES) ||
            void 0 === t ||
            t.forEach((t) => {
              var e;
              return null === (e = t.hostDisconnected) || void 0 === e
                ? void 0
                : e.call(t);
            });
        }
        attributeChangedCallback(t, e, r) {
          this._$AK(t, r);
        }
        _$EO(t, e, r = v) {
          var o;
          let i = this.constructor._$Ep(t, r);
          if (void 0 !== i && !0 === r.reflect) {
            let n = (
              void 0 !==
              (null === (o = r.converter) || void 0 === o
                ? void 0
                : o.toAttribute)
                ? r.converter
                : f
            ).toAttribute(e, r.type);
            (this._$El = t),
              null == n ? this.removeAttribute(i) : this.setAttribute(i, n),
              (this._$El = null);
          }
        }
        _$AK(t, e) {
          var r;
          let o = this.constructor,
            i = o._$Ev.get(t);
          if (void 0 !== i && this._$El !== i) {
            let t = o.getPropertyOptions(i),
              n =
                "function" == typeof t.converter
                  ? { fromAttribute: t.converter }
                  : void 0 !==
                    (null === (r = t.converter) || void 0 === r
                      ? void 0
                      : r.fromAttribute)
                  ? t.converter
                  : f;
            (this._$El = i),
              (this[i] = n.fromAttribute(e, t.type)),
              (this._$El = null);
          }
        }
        requestUpdate(t, e, r) {
          let o = !0;
          void 0 !== t &&
            ((
              (r = r || this.constructor.getPropertyOptions(t)).hasChanged || w
            )(this[t], e)
              ? (this._$AL.has(t) || this._$AL.set(t, e),
                !0 === r.reflect &&
                  this._$El !== t &&
                  (void 0 === this._$EC && (this._$EC = new Map()),
                  this._$EC.set(t, r)))
              : (o = !1)),
            !this.isUpdatePending && o && (this._$E_ = this._$Ej());
        }
        async _$Ej() {
          this.isUpdatePending = !0;
          try {
            await this._$E_;
          } catch (t) {
            Promise.reject(t);
          }
          let t = this.scheduleUpdate();
          return null != t && (await t), !this.isUpdatePending;
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          var t;
          if (!this.isUpdatePending) return;
          this.hasUpdated,
            this._$Ei &&
              (this._$Ei.forEach((t, e) => (this[e] = t)),
              (this._$Ei = void 0));
          let e = !1,
            r = this._$AL;
          try {
            (e = this.shouldUpdate(r))
              ? (this.willUpdate(r),
                null === (t = this._$ES) ||
                  void 0 === t ||
                  t.forEach((t) => {
                    var e;
                    return null === (e = t.hostUpdate) || void 0 === e
                      ? void 0
                      : e.call(t);
                  }),
                this.update(r))
              : this._$Ek();
          } catch (t) {
            throw ((e = !1), this._$Ek(), t);
          }
          e && this._$AE(r);
        }
        willUpdate(t) {}
        _$AE(t) {
          var e;
          null === (e = this._$ES) ||
            void 0 === e ||
            e.forEach((t) => {
              var e;
              return null === (e = t.hostUpdated) || void 0 === e
                ? void 0
                : e.call(t);
            }),
            this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(t)),
            this.updated(t);
        }
        _$Ek() {
          (this._$AL = new Map()), (this.isUpdatePending = !1);
        }
        get updateComplete() {
          return this.getUpdateComplete();
        }
        getUpdateComplete() {
          return this._$E_;
        }
        shouldUpdate(t) {
          return !0;
        }
        update(t) {
          void 0 !== this._$EC &&
            (this._$EC.forEach((t, e) => this._$EO(e, this[e], t)),
            (this._$EC = void 0)),
            this._$Ek();
        }
        updated(t) {}
        firstUpdated(t) {}
      }
      (y[b] = !0),
        (y.elementProperties = new Map()),
        (y.elementStyles = []),
        (y.shadowRootOptions = { mode: "open" }),
        null == g || g({ ReactiveElement: y }),
        (null !== (tv = u.reactiveElementVersions) && void 0 !== tv
          ? tv
          : (u.reactiveElementVersions = [])
        ).push("1.6.3");
      let x = window,
        C = x.trustedTypes,
        $ = C ? C.createPolicy("lit-html", { createHTML: (t) => t }) : void 0,
        E = "$lit$",
        A = `lit$${(Math.random() + "").slice(9)}$`,
        _ = "?" + A,
        k = `<${_}>`,
        O = document,
        I = () => O.createComment(""),
        T = (t) =>
          null === t || ("object" != typeof t && "function" != typeof t),
        M = Array.isArray,
        P = (t) =>
          M(t) ||
          "function" == typeof (null == t ? void 0 : t[Symbol.iterator]),
        R = "[ 	\n\f\r]",
        S = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        N = /-->/g,
        L = />/g,
        D = RegExp(
          `>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,
          "g"
        ),
        B = /'/g,
        j = /"/g,
        U = /^(?:script|style|textarea|title)$/i,
        W =
          (t) =>
          (e, ...r) => ({ _$litType$: t, strings: e, values: r }),
        z = W(1),
        H = W(2),
        Z = Symbol.for("lit-noChange"),
        V = Symbol.for("lit-nothing"),
        F = new WeakMap(),
        q = O.createTreeWalker(O, 129, null, !1);
      function K(t, e) {
        if (!Array.isArray(t) || !t.hasOwnProperty("raw"))
          throw Error("invalid template strings array");
        return void 0 !== $ ? $.createHTML(e) : e;
      }
      let Y = (t, e) => {
        let r = t.length - 1,
          o = [],
          i,
          n = 2 === e ? "<svg>" : "",
          l = S;
        for (let e = 0; e < r; e++) {
          let r = t[e],
            a,
            s,
            c = -1,
            d = 0;
          for (
            ;
            d < r.length && ((l.lastIndex = d), null !== (s = l.exec(r)));

          )
            (d = l.lastIndex),
              l === S
                ? "!--" === s[1]
                  ? (l = N)
                  : void 0 !== s[1]
                  ? (l = L)
                  : void 0 !== s[2]
                  ? (U.test(s[2]) && (i = RegExp("</" + s[2], "g")), (l = D))
                  : void 0 !== s[3] && (l = D)
                : l === D
                ? ">" === s[0]
                  ? ((l = null != i ? i : S), (c = -1))
                  : void 0 === s[1]
                  ? (c = -2)
                  : ((c = l.lastIndex - s[2].length),
                    (a = s[1]),
                    (l = void 0 === s[3] ? D : '"' === s[3] ? j : B))
                : l === j || l === B
                ? (l = D)
                : l === N || l === L
                ? (l = S)
                : ((l = D), (i = void 0));
          let h = l === D && t[e + 1].startsWith("/>") ? " " : "";
          n +=
            l === S
              ? r + k
              : c >= 0
              ? (o.push(a), r.slice(0, c) + E + r.slice(c) + A + h)
              : r + A + (-2 === c ? (o.push(void 0), e) : h);
        }
        return [K(t, n + (t[r] || "<?>") + (2 === e ? "</svg>" : "")), o];
      };
      class Q {
        constructor({ strings: t, _$litType$: e }, r) {
          let o;
          this.parts = [];
          let i = 0,
            n = 0,
            l = t.length - 1,
            a = this.parts,
            [s, c] = Y(t, e);
          if (
            ((this.el = Q.createElement(s, r)),
            (q.currentNode = this.el.content),
            2 === e)
          ) {
            let t = this.el.content,
              e = t.firstChild;
            e.remove(), t.append(...e.childNodes);
          }
          for (; null !== (o = q.nextNode()) && a.length < l; ) {
            if (1 === o.nodeType) {
              if (o.hasAttributes()) {
                let t = [];
                for (let e of o.getAttributeNames())
                  if (e.endsWith(E) || e.startsWith(A)) {
                    let r = c[n++];
                    if ((t.push(e), void 0 !== r)) {
                      let t = o.getAttribute(r.toLowerCase() + E).split(A),
                        e = /([.?@])?(.*)/.exec(r);
                      a.push({
                        type: 1,
                        index: i,
                        name: e[2],
                        strings: t,
                        ctor:
                          "." === e[1]
                            ? te
                            : "?" === e[1]
                            ? to
                            : "@" === e[1]
                            ? ti
                            : tt,
                      });
                    } else a.push({ type: 6, index: i });
                  }
                for (let e of t) o.removeAttribute(e);
              }
              if (U.test(o.tagName)) {
                let t = o.textContent.split(A),
                  e = t.length - 1;
                if (e > 0) {
                  o.textContent = C ? C.emptyScript : "";
                  for (let r = 0; r < e; r++)
                    o.append(t[r], I()),
                      q.nextNode(),
                      a.push({ type: 2, index: ++i });
                  o.append(t[e], I());
                }
              }
            } else if (8 === o.nodeType) {
              if (o.data === _) a.push({ type: 2, index: i });
              else {
                let t = -1;
                for (; -1 !== (t = o.data.indexOf(A, t + 1)); )
                  a.push({ type: 7, index: i }), (t += A.length - 1);
              }
            }
            i++;
          }
        }
        static createElement(t, e) {
          let r = O.createElement("template");
          return (r.innerHTML = t), r;
        }
      }
      function J(t, e, r = t, o) {
        var i, n, l;
        if (e === Z) return e;
        let a =
            void 0 !== o
              ? null === (i = r._$Co) || void 0 === i
                ? void 0
                : i[o]
              : r._$Cl,
          s = T(e) ? void 0 : e._$litDirective$;
        return (
          (null == a ? void 0 : a.constructor) !== s &&
            (null === (n = null == a ? void 0 : a._$AO) ||
              void 0 === n ||
              n.call(a, !1),
            void 0 === s ? (a = void 0) : (a = new s(t))._$AT(t, r, o),
            void 0 !== o
              ? ((null !== (l = r._$Co) && void 0 !== l ? l : (r._$Co = []))[
                  o
                ] = a)
              : (r._$Cl = a)),
          void 0 !== a && (e = J(t, a._$AS(t, e.values), a, o)),
          e
        );
      }
      class G {
        constructor(t, e) {
          (this._$AV = []),
            (this._$AN = void 0),
            (this._$AD = t),
            (this._$AM = e);
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(t) {
          var e;
          let {
              el: { content: r },
              parts: o,
            } = this._$AD,
            i = (
              null !== (e = null == t ? void 0 : t.creationScope) &&
              void 0 !== e
                ? e
                : O
            ).importNode(r, !0);
          q.currentNode = i;
          let n = q.nextNode(),
            l = 0,
            a = 0,
            s = o[0];
          for (; void 0 !== s; ) {
            if (l === s.index) {
              let e;
              2 === s.type
                ? (e = new X(n, n.nextSibling, this, t))
                : 1 === s.type
                ? (e = new s.ctor(n, s.name, s.strings, this, t))
                : 6 === s.type && (e = new tn(n, this, t)),
                this._$AV.push(e),
                (s = o[++a]);
            }
            l !== (null == s ? void 0 : s.index) && ((n = q.nextNode()), l++);
          }
          return (q.currentNode = O), i;
        }
        v(t) {
          let e = 0;
          for (let r of this._$AV)
            void 0 !== r &&
              (void 0 !== r.strings
                ? (r._$AI(t, r, e), (e += r.strings.length - 2))
                : r._$AI(t[e])),
              e++;
        }
      }
      class X {
        constructor(t, e, r, o) {
          var i;
          (this.type = 2),
            (this._$AH = V),
            (this._$AN = void 0),
            (this._$AA = t),
            (this._$AB = e),
            (this._$AM = r),
            (this.options = o),
            (this._$Cp =
              null === (i = null == o ? void 0 : o.isConnected) ||
              void 0 === i ||
              i);
        }
        get _$AU() {
          var t, e;
          return null !==
            (e = null === (t = this._$AM) || void 0 === t ? void 0 : t._$AU) &&
            void 0 !== e
            ? e
            : this._$Cp;
        }
        get parentNode() {
          let t = this._$AA.parentNode,
            e = this._$AM;
          return (
            void 0 !== e &&
              11 === (null == t ? void 0 : t.nodeType) &&
              (t = e.parentNode),
            t
          );
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(t, e = this) {
          T((t = J(this, t, e)))
            ? t === V || null == t || "" === t
              ? (this._$AH !== V && this._$AR(), (this._$AH = V))
              : t !== this._$AH && t !== Z && this._(t)
            : void 0 !== t._$litType$
            ? this.g(t)
            : void 0 !== t.nodeType
            ? this.$(t)
            : P(t)
            ? this.T(t)
            : this._(t);
        }
        k(t) {
          return this._$AA.parentNode.insertBefore(t, this._$AB);
        }
        $(t) {
          this._$AH !== t && (this._$AR(), (this._$AH = this.k(t)));
        }
        _(t) {
          this._$AH !== V && T(this._$AH)
            ? (this._$AA.nextSibling.data = t)
            : this.$(O.createTextNode(t)),
            (this._$AH = t);
        }
        g(t) {
          var e;
          let { values: r, _$litType$: o } = t,
            i =
              "number" == typeof o
                ? this._$AC(t)
                : (void 0 === o.el &&
                    (o.el = Q.createElement(K(o.h, o.h[0]), this.options)),
                  o);
          if (
            (null === (e = this._$AH) || void 0 === e ? void 0 : e._$AD) === i
          )
            this._$AH.v(r);
          else {
            let t = new G(i, this),
              e = t.u(this.options);
            t.v(r), this.$(e), (this._$AH = t);
          }
        }
        _$AC(t) {
          let e = F.get(t.strings);
          return void 0 === e && F.set(t.strings, (e = new Q(t))), e;
        }
        T(t) {
          M(this._$AH) || ((this._$AH = []), this._$AR());
          let e = this._$AH,
            r,
            o = 0;
          for (let i of t)
            o === e.length
              ? e.push(
                  (r = new X(this.k(I()), this.k(I()), this, this.options))
                )
              : (r = e[o]),
              r._$AI(i),
              o++;
          o < e.length &&
            (this._$AR(r && r._$AB.nextSibling, o), (e.length = o));
        }
        _$AR(t = this._$AA.nextSibling, e) {
          var r;
          for (
            null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, e);
            t && t !== this._$AB;

          ) {
            let e = t.nextSibling;
            t.remove(), (t = e);
          }
        }
        setConnected(t) {
          var e;
          void 0 === this._$AM &&
            ((this._$Cp = t),
            null === (e = this._$AP) || void 0 === e || e.call(this, t));
        }
      }
      class tt {
        constructor(t, e, r, o, i) {
          (this.type = 1),
            (this._$AH = V),
            (this._$AN = void 0),
            (this.element = t),
            (this.name = e),
            (this._$AM = o),
            (this.options = i),
            r.length > 2 || "" !== r[0] || "" !== r[1]
              ? ((this._$AH = Array(r.length - 1).fill(new String())),
                (this.strings = r))
              : (this._$AH = V);
        }
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t, e = this, r, o) {
          let i = this.strings,
            n = !1;
          if (void 0 === i)
            (n = !T((t = J(this, t, e, 0))) || (t !== this._$AH && t !== Z)) &&
              (this._$AH = t);
          else {
            let o, l;
            let a = t;
            for (t = i[0], o = 0; o < i.length - 1; o++)
              (l = J(this, a[r + o], e, o)) === Z && (l = this._$AH[o]),
                n || (n = !T(l) || l !== this._$AH[o]),
                l === V
                  ? (t = V)
                  : t !== V && (t += (null != l ? l : "") + i[o + 1]),
                (this._$AH[o] = l);
          }
          n && !o && this.j(t);
        }
        j(t) {
          t === V
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(this.name, null != t ? t : "");
        }
      }
      class te extends tt {
        constructor() {
          super(...arguments), (this.type = 3);
        }
        j(t) {
          this.element[this.name] = t === V ? void 0 : t;
        }
      }
      let tr = C ? C.emptyScript : "";
      class to extends tt {
        constructor() {
          super(...arguments), (this.type = 4);
        }
        j(t) {
          t && t !== V
            ? this.element.setAttribute(this.name, tr)
            : this.element.removeAttribute(this.name);
        }
      }
      class ti extends tt {
        constructor(t, e, r, o, i) {
          super(t, e, r, o, i), (this.type = 5);
        }
        _$AI(t, e = this) {
          var r;
          if (
            (t = null !== (r = J(this, t, e, 0)) && void 0 !== r ? r : V) === Z
          )
            return;
          let o = this._$AH,
            i =
              (t === V && o !== V) ||
              t.capture !== o.capture ||
              t.once !== o.once ||
              t.passive !== o.passive,
            n = t !== V && (o === V || i);
          i && this.element.removeEventListener(this.name, this, o),
            n && this.element.addEventListener(this.name, this, t),
            (this._$AH = t);
        }
        handleEvent(t) {
          var e, r;
          "function" == typeof this._$AH
            ? this._$AH.call(
                null !==
                  (r =
                    null === (e = this.options) || void 0 === e
                      ? void 0
                      : e.host) && void 0 !== r
                  ? r
                  : this.element,
                t
              )
            : this._$AH.handleEvent(t);
        }
      }
      class tn {
        constructor(t, e, r) {
          (this.element = t),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = e),
            (this.options = r);
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t) {
          J(this, t);
        }
      }
      let tl = x.litHtmlPolyfillSupport;
      null == tl || tl(Q, X),
        (null !== (tb = x.litHtmlVersions) && void 0 !== tb
          ? tb
          : (x.litHtmlVersions = [])
        ).push("2.8.0");
      let ta = (t, e, r) => {
        var o, i;
        let n =
            null !== (o = null == r ? void 0 : r.renderBefore) && void 0 !== o
              ? o
              : e,
          l = n._$litPart$;
        if (void 0 === l) {
          let t =
            null !== (i = null == r ? void 0 : r.renderBefore) && void 0 !== i
              ? i
              : null;
          n._$litPart$ = l = new X(
            e.insertBefore(I(), t),
            t,
            void 0,
            null != r ? r : {}
          );
        }
        return l._$AI(t), l;
      };
      class ts extends y {
        constructor() {
          super(...arguments),
            (this.renderOptions = { host: this }),
            (this._$Do = void 0);
        }
        createRenderRoot() {
          var t, e;
          let r = super.createRenderRoot();
          return (
            (null !== (t = (e = this.renderOptions).renderBefore) &&
              void 0 !== t) ||
              (e.renderBefore = r.firstChild),
            r
          );
        }
        update(t) {
          let e = this.render();
          this.hasUpdated ||
            (this.renderOptions.isConnected = this.isConnected),
            super.update(t),
            (this._$Do = ta(e, this.renderRoot, this.renderOptions));
        }
        connectedCallback() {
          var t;
          super.connectedCallback(),
            null === (t = this._$Do) || void 0 === t || t.setConnected(!0);
        }
        disconnectedCallback() {
          var t;
          super.disconnectedCallback(),
            null === (t = this._$Do) || void 0 === t || t.setConnected(!1);
        }
        render() {
          return Z;
        }
      }
      (ts.finalized = !0),
        (ts._$litElement$ = !0),
        null === (ty = globalThis.litElementHydrateSupport) ||
          void 0 === ty ||
          ty.call(globalThis, { LitElement: ts });
      let tc = globalThis.litElementPolyfillSupport;
      null == tc || tc({ LitElement: ts }),
        (null !== (tx = globalThis.litElementVersions) && void 0 !== tx
          ? tx
          : (globalThis.litElementVersions = [])
        ).push("3.3.3");
      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ let td = (t) => (e) =>
          "function" == typeof e
            ? (customElements.define(t, e), e)
            : ((t, e) => {
                let { kind: r, elements: o } = e;
                return {
                  kind: r,
                  elements: o,
                  finisher(e) {
                    customElements.define(t, e);
                  },
                };
              })(t, e),
        th = (t, e) =>
          "method" !== e.kind || !e.descriptor || "value" in e.descriptor
            ? {
                kind: "field",
                key: Symbol(),
                placement: "own",
                descriptor: {},
                originalKey: e.key,
                initializer() {
                  "function" == typeof e.initializer &&
                    (this[e.key] = e.initializer.call(this));
                },
                finisher(r) {
                  r.createProperty(e.key, t);
                },
              }
            : {
                ...e,
                finisher(r) {
                  r.createProperty(e.key, t);
                },
              },
        tu = (t, e, r) => {
          e.constructor.createProperty(r, t);
        };
      function tm(t) {
        return (e, r) => (void 0 !== r ? tu(t, e, r) : th(t, e));
      }
      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ function tp(t) {
        return tm({ ...t, state: !0 });
      }
      null !=
        (null === (tC = window.HTMLSlotElement) || void 0 === tC
          ? void 0
          : tC.prototype.assignedElements) ||
        ((t, e) =>
          t.assignedNodes(e).filter((t) => t.nodeType === Node.ELEMENT_NODE));
      class tg {
        constructor(t) {}
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(t, e, r) {
          (this._$Ct = t), (this._$AM = e), (this._$Ci = r);
        }
        _$AS(t, e) {
          return this.update(t, e);
        }
        update(t, e) {
          return this.render(...e);
        }
      }
      /**
       * @license
       * Copyright 2018 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ let tf =
        ((tw = class extends tg {
          constructor(t) {
            var e;
            if (
              (super(t),
              1 !== t.type ||
                "class" !== t.name ||
                (null === (e = t.strings) || void 0 === e ? void 0 : e.length) >
                  2)
            )
              throw Error(
                "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
              );
          }
          render(t) {
            return (
              " " +
              Object.keys(t)
                .filter((e) => t[e])
                .join(" ") +
              " "
            );
          }
          update(t, [e]) {
            var r, o;
            if (void 0 === this.it) {
              for (let o in ((this.it = new Set()),
              void 0 !== t.strings &&
                (this.nt = new Set(
                  t.strings
                    .join(" ")
                    .split(/\s/)
                    .filter((t) => "" !== t)
                )),
              e))
                !e[o] ||
                  (null === (r = this.nt) || void 0 === r
                    ? void 0
                    : r.has(o)) ||
                  this.it.add(o);
              return this.render(e);
            }
            let i = t.element.classList;
            for (let t in (this.it.forEach((t) => {
              t in e || (i.remove(t), this.it.delete(t));
            }),
            e)) {
              let r = !!e[t];
              r === this.it.has(t) ||
                (null === (o = this.nt) || void 0 === o ? void 0 : o.has(t)) ||
                (r
                  ? (i.add(t), this.it.add(t))
                  : (i.remove(t), this.it.delete(t)));
            }
            return Z;
          }
        }),
        (...t) => ({ _$litDirective$: tw, values: t }));
      var tw,
        tv,
        tb,
        ty,
        tx,
        tC,
        t$ = r(75740);
      let tE = {
          duration: 0.3,
          delay: 0,
          endDelay: 0,
          repeat: 0,
          easing: "ease",
        },
        tA = { ms: (t) => 1e3 * t, s: (t) => t / 1e3 },
        t_ = () => {},
        tk = (t) => t;
      function tO(t, e = !0) {
        if (t && "finished" !== t.playState)
          try {
            t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
          } catch (t) {}
      }
      let tI = (t) => t(),
        tT = (t, e, r = tE.duration) =>
          new Proxy(
            { animations: t.map(tI).filter(Boolean), duration: r, options: e },
            tP
          ),
        tM = (t) => t.animations[0],
        tP = {
          get: (t, e) => {
            let r = tM(t);
            switch (e) {
              case "duration":
                return t.duration;
              case "currentTime":
                return tA.s((null == r ? void 0 : r[e]) || 0);
              case "playbackRate":
              case "playState":
                return null == r ? void 0 : r[e];
              case "finished":
                return (
                  t.finished ||
                    (t.finished = Promise.all(t.animations.map(tR)).catch(t_)),
                  t.finished
                );
              case "stop":
                return () => {
                  t.animations.forEach((t) => tO(t));
                };
              case "forEachNative":
                return (e) => {
                  t.animations.forEach((r) => e(r, t));
                };
              default:
                return void 0 === (null == r ? void 0 : r[e])
                  ? void 0
                  : () => t.animations.forEach((t) => t[e]());
            }
          },
          set: (t, e, r) => {
            switch (e) {
              case "currentTime":
                r = tA.ms(r);
              case "playbackRate":
                for (let o = 0; o < t.animations.length; o++)
                  t.animations[o][e] = r;
                return !0;
            }
            return !1;
          },
        },
        tR = (t) => t.finished,
        tS = (t) => "object" == typeof t && !!t.createAnimation,
        tN = (t) => "number" == typeof t,
        tL = (t) => Array.isArray(t) && !tN(t[0]),
        tD = (t, e, r) => -r * t + r * e + t,
        tB = (t, e, r) => (e - t == 0 ? 1 : (r - t) / (e - t));
      function tj(t, e) {
        let r = t[t.length - 1];
        for (let o = 1; o <= e; o++) {
          let i = tB(0, e, o);
          t.push(tD(r, 1, i));
        }
      }
      let tU = (t, e, r) => {
          let o = e - t;
          return ((((r - t) % o) + o) % o) + t;
        },
        tW = (t, e, r) => Math.min(Math.max(r, t), e),
        tz = (t, e, r) =>
          (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
      function tH(t, e, r, o) {
        if (t === e && r === o) return tk;
        let i = (e) =>
          (function (t, e, r, o, i) {
            let n, l;
            let a = 0;
            do
              (n = tz((l = e + (r - e) / 2), o, i) - t) > 0 ? (r = l) : (e = l);
            while (Math.abs(n) > 1e-7 && ++a < 12);
            return l;
          })(e, 0, 1, t, r);
        return (t) => (0 === t || 1 === t ? t : tz(i(t), e, o));
      }
      let tZ =
          (t, e = "end") =>
          (r) => {
            r = "end" === e ? Math.min(r, 0.999) : Math.max(r, 0.001);
            let o = r * t,
              i = "end" === e ? Math.floor(o) : Math.ceil(o);
            return tW(0, 1, i / t);
          },
        tV = (t) => "function" == typeof t,
        tF = (t) => Array.isArray(t) && tN(t[0]),
        tq = {
          ease: tH(0.25, 0.1, 0.25, 1),
          "ease-in": tH(0.42, 0, 1, 1),
          "ease-in-out": tH(0.42, 0, 0.58, 1),
          "ease-out": tH(0, 0, 0.58, 1),
        },
        tK = /\((.*?)\)/;
      function tY(t) {
        if (tV(t)) return t;
        if (tF(t)) return tH(...t);
        if (tq[t]) return tq[t];
        if (t.startsWith("steps")) {
          let e = tK.exec(t);
          if (e) {
            let t = e[1].split(",");
            return tZ(parseFloat(t[0]), t[1].trim());
          }
        }
        return tk;
      }
      class tQ {
        constructor(
          t,
          e = [0, 1],
          {
            easing: r,
            duration: o = tE.duration,
            delay: i = tE.delay,
            endDelay: n = tE.endDelay,
            repeat: l = tE.repeat,
            offset: a,
            direction: s = "normal",
          } = {}
        ) {
          if (
            ((this.startTime = null),
            (this.rate = 1),
            (this.t = 0),
            (this.cancelTimestamp = null),
            (this.easing = tk),
            (this.duration = 0),
            (this.totalDuration = 0),
            (this.repeat = 0),
            (this.playState = "idle"),
            (this.finished = new Promise((t, e) => {
              (this.resolve = t), (this.reject = e);
            })),
            tS((r = r || tE.easing)))
          ) {
            let t = r.createAnimation(e);
            (r = t.easing), (e = t.keyframes || e), (o = t.duration || o);
          }
          (this.repeat = l),
            (this.easing = tL(r) ? tk : tY(r)),
            this.updateDuration(o);
          let c = (function (
            t,
            e = (function (t) {
              let e = [0];
              return tj(e, t - 1), e;
            })(t.length),
            r = tk
          ) {
            let o = t.length,
              i = o - e.length;
            return (
              i > 0 && tj(e, i),
              (i) => {
                var n;
                let l = 0;
                for (; l < o - 2 && !(i < e[l + 1]); l++);
                let a = tW(0, 1, tB(e[l], e[l + 1], i)),
                  s = ((n = l), tL(r) ? r[tU(0, r.length, n)] : r);
                return (a = s(a)), tD(t[l], t[l + 1], a);
              }
            );
          })(e, a, tL(r) ? r.map(tY) : tk);
          (this.tick = (e) => {
            var r;
            let o = 0;
            (o =
              void 0 !== this.pauseTime
                ? this.pauseTime
                : (e - this.startTime) * this.rate),
              (this.t = o),
              (o /= 1e3),
              (o = Math.max(o - i, 0)),
              "finished" === this.playState &&
                void 0 === this.pauseTime &&
                (o = this.totalDuration);
            let l = o / this.duration,
              a = Math.floor(l),
              d = l % 1;
            !d && l >= 1 && (d = 1), 1 === d && a--;
            let h = a % 2;
            ("reverse" === s ||
              ("alternate" === s && h) ||
              ("alternate-reverse" === s && !h)) &&
              (d = 1 - d);
            let u = o >= this.totalDuration ? 1 : Math.min(d, 1),
              m = c(this.easing(u));
            t(m);
            let p =
              void 0 === this.pauseTime &&
              ("finished" === this.playState || o >= this.totalDuration + n);
            p
              ? ((this.playState = "finished"),
                null === (r = this.resolve) || void 0 === r || r.call(this, m))
              : "idle" !== this.playState &&
                (this.frameRequestId = requestAnimationFrame(this.tick));
          }),
            this.play();
        }
        play() {
          let t = performance.now();
          (this.playState = "running"),
            void 0 !== this.pauseTime
              ? (this.startTime = t - this.pauseTime)
              : this.startTime || (this.startTime = t),
            (this.cancelTimestamp = this.startTime),
            (this.pauseTime = void 0),
            (this.frameRequestId = requestAnimationFrame(this.tick));
        }
        pause() {
          (this.playState = "paused"), (this.pauseTime = this.t);
        }
        finish() {
          (this.playState = "finished"), this.tick(0);
        }
        stop() {
          var t;
          (this.playState = "idle"),
            void 0 !== this.frameRequestId &&
              cancelAnimationFrame(this.frameRequestId),
            null === (t = this.reject) || void 0 === t || t.call(this, !1);
        }
        cancel() {
          this.stop(), this.tick(this.cancelTimestamp);
        }
        reverse() {
          this.rate *= -1;
        }
        commitStyles() {}
        updateDuration(t) {
          (this.duration = t), (this.totalDuration = t * (this.repeat + 1));
        }
        get currentTime() {
          return this.t;
        }
        set currentTime(t) {
          void 0 !== this.pauseTime || 0 === this.rate
            ? (this.pauseTime = t)
            : (this.startTime = performance.now() - t / this.rate);
        }
        get playbackRate() {
          return this.rate;
        }
        set playbackRate(t) {
          this.rate = t;
        }
      }
      var tJ = function () {};
      class tG {
        setAnimation(t) {
          (this.animation = t),
            null == t ||
              t.finished.then(() => this.clearAnimation()).catch(() => {});
        }
        clearAnimation() {
          this.animation = this.generator = void 0;
        }
      }
      let tX = new WeakMap();
      function t0(t) {
        return (
          tX.has(t) || tX.set(t, { transforms: [], values: new Map() }),
          tX.get(t)
        );
      }
      let t1 = ["", "X", "Y", "Z"],
        t2 = { x: "translateX", y: "translateY", z: "translateZ" },
        t5 = {
          syntax: "<angle>",
          initialValue: "0deg",
          toDefaultUnit: (t) => t + "deg",
        },
        t4 = {
          translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: (t) => t + "px",
          },
          rotate: t5,
          scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: tk },
          skew: t5,
        },
        t3 = new Map(),
        t7 = (t) => `--motion-${t}`,
        t6 = ["x", "y", "z"];
      ["translate", "scale", "rotate", "skew"].forEach((t) => {
        t1.forEach((e) => {
          t6.push(t + e), t3.set(t7(t + e), t4[t]);
        });
      });
      let t8 = (t, e) => t6.indexOf(t) - t6.indexOf(e),
        t9 = new Set(t6),
        et = (t) => t9.has(t),
        ee = (t, e) => {
          var r;
          t2[e] && (e = t2[e]);
          let { transforms: o } = t0(t);
          (r = e),
            -1 === o.indexOf(r) && o.push(r),
            (t.style.transform = er(o));
        },
        er = (t) => t.sort(t8).reduce(eo, "").trim(),
        eo = (t, e) => `${t} ${e}(var(${t7(e)}))`,
        ei = (t) => t.startsWith("--"),
        en = new Set(),
        el = (t, e) => document.createElement("div").animate(t, e),
        ea = {
          cssRegisterProperty: () =>
            "undefined" != typeof CSS &&
            Object.hasOwnProperty.call(CSS, "registerProperty"),
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
          partialKeyframes: () => {
            try {
              el({ opacity: [1] });
            } catch (t) {
              return !1;
            }
            return !0;
          },
          finished: () =>
            !!el({ opacity: [0, 1] }, { duration: 0.001 }).finished,
          linearEasing: () => {
            try {
              el({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch (t) {
              return !1;
            }
            return !0;
          },
        },
        es = {},
        ec = {};
      for (let t in ea)
        ec[t] = () => (void 0 === es[t] && (es[t] = ea[t]()), es[t]);
      let ed = (t, e) => {
          let r = "",
            o = Math.round(e / 0.015);
          for (let e = 0; e < o; e++) r += t(tB(0, o - 1, e)) + ", ";
          return r.substring(0, r.length - 2);
        },
        eh = (t, e) =>
          tV(t)
            ? ec.linearEasing()
              ? `linear(${ed(t, e)})`
              : tE.easing
            : tF(t)
            ? eu(t)
            : t,
        eu = ([t, e, r, o]) => `cubic-bezier(${t}, ${e}, ${r}, ${o})`,
        em = (t) => (Array.isArray(t) ? t : [t]);
      function ep(t) {
        return t2[t] && (t = t2[t]), et(t) ? t7(t) : t;
      }
      let eg = {
          get: (t, e) => {
            let r = ei((e = ep(e)))
              ? t.style.getPropertyValue(e)
              : getComputedStyle(t)[e];
            if (!r && 0 !== r) {
              let t = t3.get(e);
              t && (r = t.initialValue);
            }
            return r;
          },
          set: (t, e, r) => {
            ei((e = ep(e))) ? t.style.setProperty(e, r) : (t.style[e] = r);
          },
        },
        ef = (t) => "string" == typeof t,
        ew = (t, e) =>
          t[e]
            ? Object.assign(Object.assign({}, t), t[e])
            : Object.assign({}, t),
        ev = function (t, e, r = {}) {
          var o, i, n, l, a;
          "string" == typeof (o = t)
            ? i
              ? ((null !== (n = i[o]) && void 0 !== n) ||
                  (i[o] = document.querySelectorAll(o)),
                (o = i[o]))
              : (o = document.querySelectorAll(o))
            : o instanceof Element && (o = [o]),
            (t = Array.from(o || []));
          let s = t.length;
          tJ(!!s, "No valid element provided."),
            tJ(!!e, "No keyframes defined.");
          let c = [];
          for (let o = 0; o < s; o++) {
            let i = t[o];
            for (let t in e) {
              let n = ew(r, t);
              n.delay = ((l = n.delay), (a = o), tV(l) ? l(a, s) : l);
              let d = (function (t, e, r, o = {}, i) {
                var n;
                let l;
                let a = window.__MOTION_DEV_TOOLS_RECORD,
                  s = !1 !== o.record && a,
                  {
                    duration: c = tE.duration,
                    delay: d = tE.delay,
                    endDelay: h = tE.endDelay,
                    repeat: u = tE.repeat,
                    easing: m = tE.easing,
                    persist: p = !1,
                    direction: g,
                    offset: f,
                    allowWebkitAcceleration: w = !1,
                  } = o,
                  v = t0(t),
                  b = et(e),
                  y = ec.waapi();
                b && ee(t, e);
                let x = ep(e),
                  C = ((n = v.values).has(x) || n.set(x, new tG()), n.get(x)),
                  $ = t3.get(x);
                return (
                  tO(C.animation, !(tS(m) && C.generator) && !1 !== o.record),
                  () => {
                    let n = () => {
                        var e, r;
                        return null !==
                          (r =
                            null !== (e = eg.get(t, x)) && void 0 !== e
                              ? e
                              : null == $
                              ? void 0
                              : $.initialValue) && void 0 !== r
                          ? r
                          : 0;
                      },
                      v = (function (t, e) {
                        for (let r = 0; r < t.length; r++)
                          null === t[r] && (t[r] = r ? t[r - 1] : e());
                        return t;
                      })(em(r), n),
                      E = (function (t, e) {
                        var r;
                        let o = (null == e ? void 0 : e.toDefaultUnit) || tk,
                          i = t[t.length - 1];
                        if (ef(i)) {
                          let t =
                            (null === (r = i.match(/(-?[\d.]+)([a-z%]*)/)) ||
                            void 0 === r
                              ? void 0
                              : r[2]) || "";
                          t && (o = (e) => e + t);
                        }
                        return o;
                      })(v, $);
                    if (tS(m)) {
                      let t = m.createAnimation(v, "opacity" !== e, n, x, C);
                      (m = t.easing),
                        (v = t.keyframes || v),
                        (c = t.duration || c);
                    }
                    if (
                      (ei(x) &&
                        (ec.cssRegisterProperty()
                          ? (function (t) {
                              if (!en.has(t)) {
                                en.add(t);
                                try {
                                  let { syntax: e, initialValue: r } = t3.has(t)
                                    ? t3.get(t)
                                    : {};
                                  CSS.registerProperty({
                                    name: t,
                                    inherits: !1,
                                    syntax: e,
                                    initialValue: r,
                                  });
                                } catch (t) {}
                              }
                            })(x)
                          : (y = !1)),
                      b &&
                        !ec.linearEasing() &&
                        (tV(m) || (tL(m) && m.some(tV))) &&
                        (y = !1),
                      y)
                    ) {
                      $ && (v = v.map((t) => (tN(t) ? $.toDefaultUnit(t) : t))),
                        1 === v.length &&
                          (!ec.partialKeyframes() || s) &&
                          v.unshift(n());
                      let e = {
                        delay: tA.ms(d),
                        duration: tA.ms(c),
                        endDelay: tA.ms(h),
                        easing: tL(m) ? void 0 : eh(m, c),
                        direction: g,
                        iterations: u + 1,
                        fill: "both",
                      };
                      (l = t.animate(
                        {
                          [x]: v,
                          offset: f,
                          easing: tL(m) ? m.map((t) => eh(t, c)) : void 0,
                        },
                        e
                      )).finished ||
                        (l.finished = new Promise((t, e) => {
                          (l.onfinish = t), (l.oncancel = e);
                        }));
                      let r = v[v.length - 1];
                      l.finished
                        .then(() => {
                          p || (eg.set(t, x, r), l.cancel());
                        })
                        .catch(t_),
                        w || (l.playbackRate = 1.000001);
                    } else if (i && b)
                      1 ===
                        (v = v.map((t) =>
                          "string" == typeof t ? parseFloat(t) : t
                        )).length && v.unshift(parseFloat(n())),
                        (l = new i(
                          (e) => {
                            eg.set(t, x, E ? E(e) : e);
                          },
                          v,
                          Object.assign(Object.assign({}, o), {
                            duration: c,
                            easing: m,
                          })
                        ));
                    else {
                      let e = v[v.length - 1];
                      eg.set(t, x, $ && tN(e) ? $.toDefaultUnit(e) : e);
                    }
                    return (
                      s &&
                        a(
                          t,
                          e,
                          v,
                          {
                            duration: c,
                            delay: d,
                            easing: m,
                            repeat: u,
                            offset: f,
                          },
                          "motion-one"
                        ),
                      C.setAnimation(l),
                      l
                    );
                  }
                );
              })(i, t, e[t], n, tQ);
              c.push(d);
            }
          }
          return tT(c, r, r.duration);
        };
      function eb(t, e = {}) {
        return tT(
          [
            () => {
              let r = new tQ(t, [0, 1], e);
              return r.finished.catch(() => {}), r;
            },
          ],
          e,
          e.duration
        );
      }
      function ey(t, e, r) {
        let o = tV(t) ? eb : ev;
        return o(t, e, r);
      }
      /**
       * @license
       * Copyright 2018 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */ let ex = (t) => (null != t ? t : V);
      var eC = r(92592),
        e$ = Object.defineProperty,
        eE = Object.getOwnPropertySymbols,
        eA = Object.prototype.hasOwnProperty,
        e_ = Object.prototype.propertyIsEnumerable,
        ek = (t, e, r) =>
          e in t
            ? e$(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (t[e] = r),
        eO = (t, e) => {
          for (var r in e || (e = {})) eA.call(e, r) && ek(t, r, e[r]);
          if (eE) for (var r of eE(e)) e_.call(e, r) && ek(t, r, e[r]);
          return t;
        };
      function eI() {
        return {
          "--wcm-accent-color": "#3396FF",
          "--wcm-accent-fill-color": "#FFFFFF",
          "--wcm-z-index": "89",
          "--wcm-background-color": "#3396FF",
          "--wcm-background-border-radius": "8px",
          "--wcm-container-border-radius": "30px",
          "--wcm-wallet-icon-border-radius": "15px",
          "--wcm-wallet-icon-large-border-radius": "30px",
          "--wcm-wallet-icon-small-border-radius": "7px",
          "--wcm-input-border-radius": "28px",
          "--wcm-button-border-radius": "10px",
          "--wcm-notification-border-radius": "36px",
          "--wcm-secondary-button-border-radius": "28px",
          "--wcm-icon-button-border-radius": "50%",
          "--wcm-button-hover-highlight-border-radius": "10px",
          "--wcm-text-big-bold-size": "20px",
          "--wcm-text-big-bold-weight": "600",
          "--wcm-text-big-bold-line-height": "24px",
          "--wcm-text-big-bold-letter-spacing": "-0.03em",
          "--wcm-text-big-bold-text-transform": "none",
          "--wcm-text-xsmall-bold-size": "10px",
          "--wcm-text-xsmall-bold-weight": "700",
          "--wcm-text-xsmall-bold-line-height": "12px",
          "--wcm-text-xsmall-bold-letter-spacing": "0.02em",
          "--wcm-text-xsmall-bold-text-transform": "uppercase",
          "--wcm-text-xsmall-regular-size": "12px",
          "--wcm-text-xsmall-regular-weight": "600",
          "--wcm-text-xsmall-regular-line-height": "14px",
          "--wcm-text-xsmall-regular-letter-spacing": "-0.03em",
          "--wcm-text-xsmall-regular-text-transform": "none",
          "--wcm-text-small-thin-size": "14px",
          "--wcm-text-small-thin-weight": "500",
          "--wcm-text-small-thin-line-height": "16px",
          "--wcm-text-small-thin-letter-spacing": "-0.03em",
          "--wcm-text-small-thin-text-transform": "none",
          "--wcm-text-small-regular-size": "14px",
          "--wcm-text-small-regular-weight": "600",
          "--wcm-text-small-regular-line-height": "16px",
          "--wcm-text-small-regular-letter-spacing": "-0.03em",
          "--wcm-text-small-regular-text-transform": "none",
          "--wcm-text-medium-regular-size": "16px",
          "--wcm-text-medium-regular-weight": "600",
          "--wcm-text-medium-regular-line-height": "20px",
          "--wcm-text-medium-regular-letter-spacing": "-0.03em",
          "--wcm-text-medium-regular-text-transform": "none",
          "--wcm-font-family":
            "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
          "--wcm-font-feature-settings": "'tnum' on, 'lnum' on, 'case' on",
          "--wcm-success-color": "rgb(38,181,98)",
          "--wcm-error-color": "rgb(242, 90, 103)",
          "--wcm-overlay-background-color": "rgba(0, 0, 0, 0.3)",
          "--wcm-overlay-backdrop-filter": "none",
        };
      }
      let eT = {
          getPreset: (t) => eI()[t],
          setTheme() {
            let t = document.querySelector(":root"),
              { themeVariables: e } = t$.ThemeCtrl.state;
            if (t) {
              let r = eO(
                eO(
                  eO(
                    {},
                    (function () {
                      var t;
                      let e =
                          null != (t = t$.ThemeCtrl.state.themeMode)
                            ? t
                            : "dark",
                        r = {
                          light: {
                            foreground: {
                              1: "rgb(20,20,20)",
                              2: "rgb(121,134,134)",
                              3: "rgb(158,169,169)",
                            },
                            background: {
                              1: "rgb(255,255,255)",
                              2: "rgb(241,243,243)",
                              3: "rgb(228,231,231)",
                            },
                            overlay: "rgba(0,0,0,0.1)",
                          },
                          dark: {
                            foreground: {
                              1: "rgb(228,231,231)",
                              2: "rgb(148,158,158)",
                              3: "rgb(110,119,119)",
                            },
                            background: {
                              1: "rgb(20,20,20)",
                              2: "rgb(39,42,42)",
                              3: "rgb(59,64,64)",
                            },
                            overlay: "rgba(255,255,255,0.1)",
                          },
                        }[e];
                      return {
                        "--wcm-color-fg-1": r.foreground[1],
                        "--wcm-color-fg-2": r.foreground[2],
                        "--wcm-color-fg-3": r.foreground[3],
                        "--wcm-color-bg-1": r.background[1],
                        "--wcm-color-bg-2": r.background[2],
                        "--wcm-color-bg-3": r.background[3],
                        "--wcm-color-overlay": r.overlay,
                      };
                    })()
                  ),
                  eI()
                ),
                e
              );
              Object.entries(r).forEach(([e, r]) => t.style.setProperty(e, r));
            }
          },
          globalCss: c`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button wcm-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--wcm-accent-fill-color);background:var(--wcm-accent-color)}`,
        },
        eM = c`button{border-radius:var(--wcm-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--wcm-accent-color)}button path{fill:var(--wcm-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--wcm-color-overlay)}button:disabled::after{background-color:transparent}.wcm-icon-left svg{margin-right:5px}.wcm-icon-right svg{margin-left:5px}button:active::after{background-color:var(--wcm-color-overlay)}.wcm-ghost,.wcm-ghost:active::after,.wcm-outline{background-color:transparent}.wcm-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}.wcm-ghost:hover::after{background-color:transparent}.wcm-ghost:hover{opacity:.5}}button:disabled{background-color:var(--wcm-color-bg-3);pointer-events:none}.wcm-ghost::after{border-color:transparent}.wcm-ghost path{fill:var(--wcm-color-fg-2)}.wcm-outline path{fill:var(--wcm-accent-color)}.wcm-outline:disabled{background-color:transparent;opacity:.5}`;
      var eP = Object.defineProperty,
        eR = Object.getOwnPropertyDescriptor,
        eS = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? eR(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && eP(e, r, n), n;
        };
      let eN = class extends ts {
        constructor() {
          super(...arguments),
            (this.disabled = !1),
            (this.iconLeft = void 0),
            (this.iconRight = void 0),
            (this.onClick = () => null),
            (this.variant = "default");
        }
        render() {
          let t = {
              "wcm-icon-left": void 0 !== this.iconLeft,
              "wcm-icon-right": void 0 !== this.iconRight,
              "wcm-ghost": "ghost" === this.variant,
              "wcm-outline": "outline" === this.variant,
            },
            e = "inverse";
          return (
            "ghost" === this.variant && (e = "secondary"),
            "outline" === this.variant && (e = "accent"),
            z`<button class="${tf(t)}" ?disabled="${this.disabled}" @click="${
              this.onClick
            }">${
              this.iconLeft
            }<wcm-text variant="small-regular" color="${e}"><slot></slot></wcm-text>${
              this.iconRight
            }</button>`
          );
        }
      };
      (eN.styles = [eT.globalCss, eM]),
        eS([tm({ type: Boolean })], eN.prototype, "disabled", 2),
        eS([tm()], eN.prototype, "iconLeft", 2),
        eS([tm()], eN.prototype, "iconRight", 2),
        eS([tm()], eN.prototype, "onClick", 2),
        eS([tm()], eN.prototype, "variant", 2),
        (eN = eS([td("wcm-button")], eN));
      let eL = c`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--wcm-button-border-radius);color:var(--wcm-accent-fill-color);background-color:var(--wcm-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--wcm-color-overlay)}button:active::after{background-color:var(--wcm-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--wcm-color-bg-3);color:var(--wcm-color-fg-3)}.wcm-secondary{color:var(--wcm-accent-color);background-color:transparent}.wcm-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--wcm-color-overlay)}}`;
      var eD = Object.defineProperty,
        eB = Object.getOwnPropertyDescriptor,
        ej = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? eB(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && eD(e, r, n), n;
        };
      let eU = class extends ts {
        constructor() {
          super(...arguments), (this.disabled = !1), (this.variant = "primary");
        }
        render() {
          let t = { "wcm-secondary": "secondary" === this.variant };
          return z`<button ?disabled="${this.disabled}" class="${tf(
            t
          )}"><slot></slot></button>`;
        }
      };
      (eU.styles = [eT.globalCss, eL]),
        ej([tm({ type: Boolean })], eU.prototype, "disabled", 2),
        ej([tm()], eU.prototype, "variant", 2),
        (eU = ej([td("wcm-button-big")], eU));
      let eW = c`:host{background-color:var(--wcm-color-bg-2);border-top:1px solid var(--wcm-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
      var ez = Object.defineProperty,
        eH = Object.getOwnPropertyDescriptor;
      let eZ = class extends ts {
        render() {
          return z`<div><slot></slot></div>`;
        }
      };
      (eZ.styles = [eT.globalCss, eW]),
        (eZ = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? eH(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && ez(e, r, n), n;
        })([td("wcm-info-footer")], eZ));
      let eV = {
          CROSS_ICON: H`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_LOGO: H`<svg width="178" height="29" viewBox="0 0 178 29" id="wcm-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_ICON: H`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
          WALLET_CONNECT_ICON_COLORED: H`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
          BACK_ICON: H`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
          COPY_ICON: H`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
          RETRY_ICON: H`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
          DESKTOP_ICON: H`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          MOBILE_ICON: H`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
          ARROW_DOWN_ICON: H`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
          ARROW_UP_RIGHT_ICON: H`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          ARROW_RIGHT_ICON: H`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
          QRCODE_ICON: H`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
          SCAN_ICON: H`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
          CHECKMARK_ICON: H`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
          SEARCH_ICON: H`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
          WALLET_PLACEHOLDER: H`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          GLOBE_ICON: H`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`,
        },
        eF = c`.wcm-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--wcm-background-border-radius) * .9);background-color:var(--wcm-background-color);background-position:center;background-size:cover}.wcm-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.wcm-toolbar img,.wcm-toolbar svg{height:28px;object-position:left center;object-fit:contain}#wcm-wc-logo path{fill:var(--wcm-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--wcm-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--wcm-color-bg-1);box-shadow:0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--wcm-color-fg-1)}.wcm-toolbar div{display:flex}@media(hover:hover){button:hover{background-color:var(--wcm-color-bg-2)}}`;
      var eq = Object.defineProperty,
        eK = Object.getOwnPropertyDescriptor;
      let eY = class extends ts {
        render() {
          return z`<div class="wcm-toolbar-placeholder"></div><div class="wcm-toolbar">${eV.WALLET_CONNECT_LOGO} <button @click="${t$.jb.close}">${eV.CROSS_ICON}</button></div>`;
        }
      };
      (eY.styles = [eT.globalCss, eF]),
        (eY = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? eK(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && eq(e, r, n), n;
        })([td("wcm-modal-backcard")], eY));
      let eQ = c`main{padding:20px;padding-top:0;width:100%}`;
      var eJ = Object.defineProperty,
        eG = Object.getOwnPropertyDescriptor;
      let eX = class extends ts {
        render() {
          return z`<main><slot></slot></main>`;
        }
      };
      (eX.styles = [eT.globalCss, eQ]),
        (eX = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? eG(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && eJ(e, r, n), n;
        })([td("wcm-modal-content")], eX));
      let e0 = c`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--wcm-color-bg-2)}`;
      var e1 = Object.defineProperty,
        e2 = Object.getOwnPropertyDescriptor;
      let e5 = class extends ts {
        render() {
          return z`<footer><slot></slot></footer>`;
        }
      };
      (e5.styles = [eT.globalCss, e0]),
        (e5 = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? e2(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && e1(e, r, n), n;
        })([td("wcm-modal-footer")], e5));
      let e4 = c`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.wcm-border{border-bottom:1px solid var(--wcm-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.wcm-back-btn{position:absolute;left:0}.wcm-action-btn{position:absolute;right:0}path{fill:var(--wcm-accent-color)}`;
      var e3 = Object.defineProperty,
        e7 = Object.getOwnPropertyDescriptor,
        e6 = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? e7(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && e3(e, r, n), n;
        };
      let e8 = class extends ts {
        constructor() {
          super(...arguments),
            (this.title = ""),
            (this.onAction = void 0),
            (this.actionIcon = void 0),
            (this.border = !1);
        }
        backBtnTemplate() {
          return z`<button class="wcm-back-btn" @click="${t$.AV.goBack}">${eV.BACK_ICON}</button>`;
        }
        actionBtnTemplate() {
          return z`<button class="wcm-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
        }
        render() {
          let t = { "wcm-border": this.border },
            e = t$.AV.state.history.length > 1,
            r = this.title
              ? z`<wcm-text variant="big-bold">${this.title}</wcm-text>`
              : z`<slot></slot>`;
          return z`<header class="${tf(t)}">${
            e ? this.backBtnTemplate() : null
          } ${r} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
        }
      };
      (e8.styles = [eT.globalCss, e4]),
        e6([tm()], e8.prototype, "title", 2),
        e6([tm()], e8.prototype, "onAction", 2),
        e6([tm()], e8.prototype, "actionIcon", 2),
        e6([tm({ type: Boolean })], e8.prototype, "border", 2),
        (e8 = e6([td("wcm-modal-header")], e8));
      let e9 = {
          MOBILE_BREAKPOINT: 600,
          WCM_RECENT_WALLET_DATA: "WCM_RECENT_WALLET_DATA",
          EXPLORER_WALLET_URL:
            "https://explorer.walletconnect.com/?type=wallet",
          getShadowRootElement(t, e) {
            let r = t.renderRoot.querySelector(e);
            if (!r) throw Error(`${e} not found`);
            return r;
          },
          getWalletIcon({ id: t, image_id: e }) {
            let { walletImages: r } = t$.ConfigCtrl.state;
            return null != r && r[t]
              ? r[t]
              : e
              ? t$.ExplorerCtrl.getWalletImageUrl(e)
              : "";
          },
          getWalletName: (t, e = !1) =>
            e && t.length > 8 ? `${t.substring(0, 8)}..` : t,
          isMobileAnimation: () => window.innerWidth <= e9.MOBILE_BREAKPOINT,
          async preloadImage(t) {
            let e = new Promise((e, r) => {
              let o = new Image();
              (o.onload = e),
                (o.onerror = r),
                (o.crossOrigin = "anonymous"),
                (o.src = t);
            });
            return Promise.race([e, t$.zv.wait(3e3)]);
          },
          getErrorMessage: (t) =>
            t instanceof Error ? t.message : "Unknown Error",
          debounce(t, e = 500) {
            let r;
            return (...o) => {
              r && clearTimeout(r),
                (r = setTimeout(function () {
                  t(...o);
                }, e));
            };
          },
          handleMobileLinking(t) {
            let e;
            let { walletConnectUri: r } = t$.OptionsCtrl.state,
              { mobile: o, name: i } = t,
              n = o?.native,
              l = o?.universal;
            e9.setRecentWallet(t),
              r &&
                ((e = ""),
                n
                  ? (e = t$.zv.formatUniversalUrl(n, r, i))
                  : l && (e = t$.zv.formatNativeUrl(l, r, i)),
                t$.zv.openHref(e, "_self"));
          },
          handleAndroidLinking() {
            let { walletConnectUri: t } = t$.OptionsCtrl.state;
            t &&
              (t$.zv.setWalletConnectAndroidDeepLink(t),
              t$.zv.openHref(t, "_self"));
          },
          async handleUriCopy() {
            let { walletConnectUri: t } = t$.OptionsCtrl.state;
            if (t)
              try {
                await navigator.clipboard.writeText(t),
                  t$.ToastCtrl.openToast("Link copied", "success");
              } catch {
                t$.ToastCtrl.openToast("Failed to copy", "error");
              }
          },
          getCustomImageUrls() {
            let { walletImages: t } = t$.ConfigCtrl.state,
              e = Object.values(t ?? {});
            return Object.values(e);
          },
          truncate: (t, e = 8) =>
            t.length <= e
              ? t
              : `${t.substring(0, 4)}...${t.substring(t.length - 4)}`,
          setRecentWallet(t) {
            try {
              localStorage.setItem(
                e9.WCM_RECENT_WALLET_DATA,
                JSON.stringify(t)
              );
            } catch {
              console.info("Unable to set recent wallet");
            }
          },
          getRecentWallet() {
            try {
              let t = localStorage.getItem(e9.WCM_RECENT_WALLET_DATA);
              return t ? JSON.parse(t) : void 0;
            } catch {
              console.info("Unable to get recent wallet");
            }
          },
          caseSafeIncludes: (t, e) => t.toUpperCase().includes(e.toUpperCase()),
          openWalletExplorerUrl() {
            t$.zv.openHref(e9.EXPLORER_WALLET_URL, "_blank");
          },
          getCachedRouterWalletPlatforms() {
            let { desktop: t, mobile: e } = t$.zv.getWalletRouterData(),
              r = !!t?.native,
              o = !!t?.universal,
              i = !!e?.native || !!e?.universal;
            return { isDesktop: r, isMobile: i, isWeb: o };
          },
          goToConnectingView(t) {
            t$.AV.setData({ Wallet: t });
            let e = t$.zv.isMobile(),
              {
                isDesktop: r,
                isWeb: o,
                isMobile: i,
              } = e9.getCachedRouterWalletPlatforms();
            e
              ? i
                ? t$.AV.push("MobileConnecting")
                : o
                ? t$.AV.push("WebConnecting")
                : t$.AV.push("InstallWallet")
              : r
              ? t$.AV.push("DesktopConnecting")
              : o
              ? t$.AV.push("WebConnecting")
              : i
              ? t$.AV.push("MobileQrcodeConnecting")
              : t$.AV.push("InstallWallet");
          },
        },
        rt = c`.wcm-router{overflow:hidden;will-change:transform}.wcm-content{display:flex;flex-direction:column}`;
      var re = Object.defineProperty,
        rr = Object.getOwnPropertyDescriptor,
        ro = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? rr(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && re(e, r, n), n;
        };
      let ri = class extends ts {
        constructor() {
          super(),
            (this.view = t$.AV.state.view),
            (this.prevView = t$.AV.state.view),
            (this.unsubscribe = void 0),
            (this.oldHeight = "0px"),
            (this.resizeObserver = void 0),
            (this.unsubscribe = t$.AV.subscribe((t) => {
              this.view !== t.view && this.onChangeRoute();
            }));
        }
        firstUpdated() {
          (this.resizeObserver = new ResizeObserver(([t]) => {
            let e = `${t.contentRect.height}px`;
            "0px" !== this.oldHeight &&
              ey(
                this.routerEl,
                { height: [this.oldHeight, e] },
                { duration: 0.2 }
              ),
              (this.oldHeight = e);
          })),
            this.resizeObserver.observe(this.contentEl);
        }
        disconnectedCallback() {
          var t, e;
          null == (t = this.unsubscribe) || t.call(this),
            null == (e = this.resizeObserver) || e.disconnect();
        }
        get routerEl() {
          return e9.getShadowRootElement(this, ".wcm-router");
        }
        get contentEl() {
          return e9.getShadowRootElement(this, ".wcm-content");
        }
        viewTemplate() {
          switch (this.view) {
            case "ConnectWallet":
              return z`<wcm-connect-wallet-view></wcm-connect-wallet-view>`;
            case "DesktopConnecting":
              return z`<wcm-desktop-connecting-view></wcm-desktop-connecting-view>`;
            case "MobileConnecting":
              return z`<wcm-mobile-connecting-view></wcm-mobile-connecting-view>`;
            case "WebConnecting":
              return z`<wcm-web-connecting-view></wcm-web-connecting-view>`;
            case "MobileQrcodeConnecting":
              return z`<wcm-mobile-qr-connecting-view></wcm-mobile-qr-connecting-view>`;
            case "WalletExplorer":
              return z`<wcm-wallet-explorer-view></wcm-wallet-explorer-view>`;
            case "Qrcode":
              return z`<wcm-qrcode-view></wcm-qrcode-view>`;
            case "InstallWallet":
              return z`<wcm-install-wallet-view></wcm-install-wallet-view>`;
            default:
              return z`<div>Not Found</div>`;
          }
        }
        async onChangeRoute() {
          await ey(
            this.routerEl,
            { opacity: [1, 0], scale: [1, 1.02] },
            { duration: 0.15, delay: 0.1 }
          ).finished,
            (this.view = t$.AV.state.view),
            ey(
              this.routerEl,
              { opacity: [0, 1], scale: [0.99, 1] },
              { duration: 0.37, delay: 0.05 }
            );
        }
        render() {
          return z`<div class="wcm-router"><div class="wcm-content">${this.viewTemplate()}</div></div>`;
        }
      };
      (ri.styles = [eT.globalCss, rt]),
        ro([tp()], ri.prototype, "view", 2),
        ro([tp()], ri.prototype, "prevView", 2),
        (ri = ro([td("wcm-modal-router")], ri));
      let rn = c`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--wcm-notification-border-radius);border:1px solid var(--wcm-color-overlay);background-color:var(--wcm-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--wcm-color-bg-3)}}.wcm-success path{fill:var(--wcm-accent-color)}.wcm-error path{fill:var(--wcm-error-color)}`;
      var rl = Object.defineProperty,
        ra = Object.getOwnPropertyDescriptor,
        rs = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? ra(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && rl(e, r, n), n;
        };
      let rc = class extends ts {
        constructor() {
          super(),
            (this.open = !1),
            (this.unsubscribe = void 0),
            (this.timeout = void 0),
            (this.unsubscribe = t$.ToastCtrl.subscribe((t) => {
              t.open
                ? ((this.open = !0),
                  (this.timeout = setTimeout(
                    () => t$.ToastCtrl.closeToast(),
                    2200
                  )))
                : ((this.open = !1), clearTimeout(this.timeout));
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribe) || t.call(this),
            clearTimeout(this.timeout),
            t$.ToastCtrl.closeToast();
        }
        render() {
          let { message: t, variant: e } = t$.ToastCtrl.state;
          return this.open
            ? z`<div class="${tf({
                "wcm-success": "success" === e,
                "wcm-error": "error" === e,
              })}">${"success" === e ? eV.CHECKMARK_ICON : null} ${
                "error" === e ? eV.CROSS_ICON : null
              }<wcm-text variant="small-regular">${t}</wcm-text></div>`
            : null;
        }
      };
      function rd(t, e, r) {
        return t !== e && (t - e < 0 ? e - t : t - e) <= r + 0.1;
      }
      (rc.styles = [eT.globalCss, rn]),
        rs([tp()], rc.prototype, "open", 2),
        (rc = rs([td("wcm-modal-toast")], rc));
      let rh = {
          generate(t, e, r) {
            let o = "#141414",
              i = [],
              n = (function (t, e) {
                let r = Array.prototype.slice.call(
                    eC.create(t, { errorCorrectionLevel: "Q" }).modules.data,
                    0
                  ),
                  o = Math.sqrt(r.length);
                return r.reduce(
                  (t, e, r) =>
                    (r % o == 0 ? t.push([e]) : t[t.length - 1].push(e)) && t,
                  []
                );
              })(t, 0),
              l = e / n.length,
              a = [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 0, y: 1 },
              ];
            a.forEach(({ x: t, y: e }) => {
              let r = (n.length - 7) * l * t,
                s = (n.length - 7) * l * e;
              for (let t = 0; t < a.length; t += 1) {
                let e = l * (7 - 2 * t);
                i.push(
                  H`<rect fill="${
                    t % 2 == 0 ? o : "#ffffff"
                  }" height="${e}" rx="${0.45 * e}" ry="${
                    0.45 * e
                  }" width="${e}" x="${r + l * t}" y="${s + l * t}">`
                );
              }
            });
            let s = Math.floor((r + 25) / l),
              c = n.length / 2 - s / 2,
              d = n.length / 2 + s / 2 - 1,
              h = [];
            n.forEach((t, e) => {
              t.forEach((t, r) => {
                if (
                  n[e][r] &&
                  !(
                    (e < 7 && r < 7) ||
                    (e > n.length - 8 && r < 7) ||
                    (e < 7 && r > n.length - 8)
                  ) &&
                  !(e > c && e < d && r > c && r < d)
                ) {
                  let t = e * l + l / 2,
                    o = r * l + l / 2;
                  h.push([t, o]);
                }
              });
            });
            let u = {};
            return (
              h.forEach(([t, e]) => {
                u[t] ? u[t].push(e) : (u[t] = [e]);
              }),
              Object.entries(u)
                .map(([t, e]) => {
                  let r = e.filter((t) => e.every((e) => !rd(t, e, l)));
                  return [Number(t), r];
                })
                .forEach(([t, e]) => {
                  e.forEach((e) => {
                    i.push(
                      H`<circle cx="${t}" cy="${e}" fill="${o}" r="${l / 2.5}">`
                    );
                  });
                }),
              Object.entries(u)
                .filter(([t, e]) => e.length > 1)
                .map(([t, e]) => {
                  let r = e.filter((t) => e.some((e) => rd(t, e, l)));
                  return [Number(t), r];
                })
                .map(([t, e]) => {
                  e.sort((t, e) => (t < e ? -1 : 1));
                  let r = [];
                  for (let t of e) {
                    let e = r.find((e) => e.some((e) => rd(t, e, l)));
                    e ? e.push(t) : r.push([t]);
                  }
                  return [t, r.map((t) => [t[0], t[t.length - 1]])];
                })
                .forEach(([t, e]) => {
                  e.forEach(([e, r]) => {
                    i.push(
                      H`<line x1="${t}" x2="${t}" y1="${e}" y2="${r}" stroke="${o}" stroke-width="${
                        l / 1.25
                      }" stroke-linecap="round">`
                    );
                  });
                }),
              i
            );
          },
        },
        ru = c`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;aspect-ratio:1/1;animation:fadeIn ease .2s}.wcm-dark{background-color:#fff;border-radius:var(--wcm-container-border-radius);padding:18px;box-shadow:0 2px 5px #000}svg:first-child,wcm-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{transform:translateY(-50%) translateX(-50%)}wcm-wallet-image{width:25%;height:25%;border-radius:var(--wcm-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--wcm-accent-color)}svg:first-child path:last-child{stroke:var(--wcm-color-overlay)}`;
      var rm = Object.defineProperty,
        rp = Object.getOwnPropertyDescriptor,
        rg = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? rp(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && rm(e, r, n), n;
        };
      let rf = class extends ts {
        constructor() {
          super(...arguments),
            (this.uri = ""),
            (this.size = 0),
            (this.imageId = void 0),
            (this.walletId = void 0),
            (this.imageUrl = void 0);
        }
        svgTemplate() {
          let t =
            "light" === t$.ThemeCtrl.state.themeMode
              ? this.size
              : this.size - 36;
          return H`<svg height="${t}" width="${t}">${rh.generate(
            this.uri,
            t,
            t / 4
          )}</svg>`;
        }
        render() {
          let t = { "wcm-dark": "dark" === t$.ThemeCtrl.state.themeMode };
          return z`<div style="${`width: ${this.size}px`}" class="${tf(t)}">${
            this.walletId || this.imageUrl
              ? z`<wcm-wallet-image walletId="${ex(
                  this.walletId
                )}" imageId="${ex(this.imageId)}" imageUrl="${ex(
                  this.imageUrl
                )}"></wcm-wallet-image>`
              : eV.WALLET_CONNECT_ICON_COLORED
          } ${this.svgTemplate()}</div>`;
        }
      };
      (rf.styles = [eT.globalCss, ru]),
        rg([tm()], rf.prototype, "uri", 2),
        rg([tm({ type: Number })], rf.prototype, "size", 2),
        rg([tm()], rf.prototype, "imageId", 2),
        rg([tm()], rf.prototype, "walletId", 2),
        rg([tm()], rf.prototype, "imageUrl", 2),
        (rf = rg([td("wcm-qrcode")], rf));
      let rw = c`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--wcm-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:var(--wcm-color-fg-1);background-color:var(--wcm-color-bg-3);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay);caret-color:var(--wcm-accent-color)}input::placeholder{color:var(--wcm-color-fg-2)}svg{left:10px;top:4px;pointer-events:none;position:absolute;width:20px;height:20px}input:focus-within{box-shadow:inset 0 0 0 1px var(--wcm-accent-color)}path{fill:var(--wcm-color-fg-2)}`;
      var rv = Object.defineProperty,
        rb = Object.getOwnPropertyDescriptor,
        ry = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? rb(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && rv(e, r, n), n;
        };
      let rx = class extends ts {
        constructor() {
          super(...arguments), (this.onChange = () => null);
        }
        render() {
          return z`<input type="text" @input="${this.onChange}" placeholder="Search wallets"> ${eV.SEARCH_ICON}`;
        }
      };
      (rx.styles = [eT.globalCss, rw]),
        ry([tm()], rx.prototype, "onChange", 2),
        (rx = ry([td("wcm-search-input")], rx));
      let rC = c`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--wcm-accent-color)}`;
      var r$ = Object.defineProperty,
        rE = Object.getOwnPropertyDescriptor;
      let rA = class extends ts {
        render() {
          return z`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
        }
      };
      (rA.styles = [eT.globalCss, rC]),
        (rA = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? rE(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && r$(e, r, n), n;
        })([td("wcm-spinner")], rA));
      let r_ = c`span{font-style:normal;font-family:var(--wcm-font-family);font-feature-settings:var(--wcm-font-feature-settings)}.wcm-xsmall-bold{font-family:var(--wcm-text-xsmall-bold-font-family);font-weight:var(--wcm-text-xsmall-bold-weight);font-size:var(--wcm-text-xsmall-bold-size);line-height:var(--wcm-text-xsmall-bold-line-height);letter-spacing:var(--wcm-text-xsmall-bold-letter-spacing);text-transform:var(--wcm-text-xsmall-bold-text-transform)}.wcm-xsmall-regular{font-family:var(--wcm-text-xsmall-regular-font-family);font-weight:var(--wcm-text-xsmall-regular-weight);font-size:var(--wcm-text-xsmall-regular-size);line-height:var(--wcm-text-xsmall-regular-line-height);letter-spacing:var(--wcm-text-xsmall-regular-letter-spacing);text-transform:var(--wcm-text-xsmall-regular-text-transform)}.wcm-small-thin{font-family:var(--wcm-text-small-thin-font-family);font-weight:var(--wcm-text-small-thin-weight);font-size:var(--wcm-text-small-thin-size);line-height:var(--wcm-text-small-thin-line-height);letter-spacing:var(--wcm-text-small-thin-letter-spacing);text-transform:var(--wcm-text-small-thin-text-transform)}.wcm-small-regular{font-family:var(--wcm-text-small-regular-font-family);font-weight:var(--wcm-text-small-regular-weight);font-size:var(--wcm-text-small-regular-size);line-height:var(--wcm-text-small-regular-line-height);letter-spacing:var(--wcm-text-small-regular-letter-spacing);text-transform:var(--wcm-text-small-regular-text-transform)}.wcm-medium-regular{font-family:var(--wcm-text-medium-regular-font-family);font-weight:var(--wcm-text-medium-regular-weight);font-size:var(--wcm-text-medium-regular-size);line-height:var(--wcm-text-medium-regular-line-height);letter-spacing:var(--wcm-text-medium-regular-letter-spacing);text-transform:var(--wcm-text-medium-regular-text-transform)}.wcm-big-bold{font-family:var(--wcm-text-big-bold-font-family);font-weight:var(--wcm-text-big-bold-weight);font-size:var(--wcm-text-big-bold-size);line-height:var(--wcm-text-big-bold-line-height);letter-spacing:var(--wcm-text-big-bold-letter-spacing);text-transform:var(--wcm-text-big-bold-text-transform)}:host(*){color:var(--wcm-color-fg-1)}.wcm-color-primary{color:var(--wcm-color-fg-1)}.wcm-color-secondary{color:var(--wcm-color-fg-2)}.wcm-color-tertiary{color:var(--wcm-color-fg-3)}.wcm-color-inverse{color:var(--wcm-accent-fill-color)}.wcm-color-accnt{color:var(--wcm-accent-color)}.wcm-color-error{color:var(--wcm-error-color)}`;
      var rk = Object.defineProperty,
        rO = Object.getOwnPropertyDescriptor,
        rI = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? rO(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && rk(e, r, n), n;
        };
      let rT = class extends ts {
        constructor() {
          super(...arguments),
            (this.variant = "medium-regular"),
            (this.color = "primary");
        }
        render() {
          let t = {
            "wcm-big-bold": "big-bold" === this.variant,
            "wcm-medium-regular": "medium-regular" === this.variant,
            "wcm-small-regular": "small-regular" === this.variant,
            "wcm-small-thin": "small-thin" === this.variant,
            "wcm-xsmall-regular": "xsmall-regular" === this.variant,
            "wcm-xsmall-bold": "xsmall-bold" === this.variant,
            "wcm-color-primary": "primary" === this.color,
            "wcm-color-secondary": "secondary" === this.color,
            "wcm-color-tertiary": "tertiary" === this.color,
            "wcm-color-inverse": "inverse" === this.color,
            "wcm-color-accnt": "accent" === this.color,
            "wcm-color-error": "error" === this.color,
          };
          return z`<span><slot class="${tf(t)}"></slot></span>`;
        }
      };
      (rT.styles = [eT.globalCss, r_]),
        rI([tm()], rT.prototype, "variant", 2),
        rI([tm()], rT.prototype, "color", 2),
        (rT = rI([td("wcm-text")], rT));
      let rM = c`button{width:100%;height:100%;border-radius:var(--wcm-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}wcm-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}wcm-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--wcm-wallet-icon-border-radius);margin-bottom:5px}.wcm-sublabel{margin-top:2px}`;
      var rP = Object.defineProperty,
        rR = Object.getOwnPropertyDescriptor,
        rS = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? rR(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && rP(e, r, n), n;
        };
      let rN = class extends ts {
        constructor() {
          super(...arguments),
            (this.onClick = () => null),
            (this.name = ""),
            (this.walletId = ""),
            (this.label = void 0),
            (this.imageId = void 0),
            (this.installed = !1),
            (this.recent = !1);
        }
        sublabelTemplate() {
          return this.recent
            ? z`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">RECENT</wcm-text>`
            : this.installed
            ? z`<wcm-text class="wcm-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</wcm-text>`
            : null;
        }
        handleClick() {
          t$.uA.click({ name: "WALLET_BUTTON", walletId: this.walletId }),
            this.onClick();
        }
        render() {
          var t;
          return z`<button @click="${this.handleClick.bind(
            this
          )}"><div><wcm-wallet-image walletId="${this.walletId}" imageId="${ex(
            this.imageId
          )}"></wcm-wallet-image><wcm-text variant="xsmall-regular">${
            null != (t = this.label) ? t : e9.getWalletName(this.name, !0)
          }</wcm-text>${this.sublabelTemplate()}</div></button>`;
        }
      };
      (rN.styles = [eT.globalCss, rM]),
        rS([tm()], rN.prototype, "onClick", 2),
        rS([tm()], rN.prototype, "name", 2),
        rS([tm()], rN.prototype, "walletId", 2),
        rS([tm()], rN.prototype, "label", 2),
        rS([tm()], rN.prototype, "imageId", 2),
        rS([tm({ type: Boolean })], rN.prototype, "installed", 2),
        rS([tm({ type: Boolean })], rN.prototype, "recent", 2),
        (rN = rS([td("wcm-wallet-button")], rN));
      let rL = c`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--wcm-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--wcm-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
      var rD = Object.defineProperty,
        rB = Object.getOwnPropertyDescriptor,
        rj = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? rB(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && rD(e, r, n), n;
        };
      let rU = class extends ts {
        constructor() {
          super(...arguments),
            (this.walletId = ""),
            (this.imageId = void 0),
            (this.imageUrl = void 0);
        }
        render() {
          var t;
          let e =
            null != (t = this.imageUrl) && t.length
              ? this.imageUrl
              : e9.getWalletIcon({ id: this.walletId, image_id: this.imageId });
          return z`${
            e.length
              ? z`<div><img crossorigin="anonymous" src="${e}" alt="${this.id}"></div>`
              : eV.WALLET_PLACEHOLDER
          }`;
        }
      };
      (rU.styles = [eT.globalCss, rL]),
        rj([tm()], rU.prototype, "walletId", 2),
        rj([tm()], rU.prototype, "imageId", 2),
        rj([tm()], rU.prototype, "imageUrl", 2),
        (rU = rj([td("wcm-wallet-image")], rU));
      var rW = Object.defineProperty,
        rz = Object.getOwnPropertyDescriptor,
        rH = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? rz(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && rW(e, r, n), n;
        };
      let rZ = class extends ts {
        constructor() {
          super(), (this.preload = !0), this.preloadData();
        }
        async loadImages(t) {
          try {
            null != t &&
              t.length &&
              (await Promise.all(t.map(async (t) => e9.preloadImage(t))));
          } catch {
            console.info("Unsuccessful attempt at preloading some images", t);
          }
        }
        async preloadListings() {
          if (t$.ConfigCtrl.state.enableExplorer) {
            await t$.ExplorerCtrl.getRecomendedWallets(),
              t$.OptionsCtrl.setIsDataLoaded(!0);
            let { recomendedWallets: t } = t$.ExplorerCtrl.state,
              e = t.map((t) => e9.getWalletIcon(t));
            await this.loadImages(e);
          } else t$.OptionsCtrl.setIsDataLoaded(!0);
        }
        async preloadCustomImages() {
          let t = e9.getCustomImageUrls();
          await this.loadImages(t);
        }
        async preloadData() {
          try {
            this.preload &&
              ((this.preload = !1),
              await Promise.all([
                this.preloadListings(),
                this.preloadCustomImages(),
              ]));
          } catch (t) {
            console.error(t),
              t$.ToastCtrl.openToast("Failed preloading", "error");
          }
        }
      };
      rH([tp()], rZ.prototype, "preload", 2),
        (rZ = rH([td("wcm-explorer-context")], rZ));
      var rV = Object.defineProperty,
        rF = Object.getOwnPropertyDescriptor;
      let rq = class extends ts {
        constructor() {
          super(),
            (this.unsubscribeTheme = void 0),
            eT.setTheme(),
            (this.unsubscribeTheme = t$.ThemeCtrl.subscribe(eT.setTheme));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribeTheme) || t.call(this);
        }
      };
      rq = ((t, e, r, o) => {
        for (
          var i, n = o > 1 ? void 0 : o ? rF(e, r) : e, l = t.length - 1;
          l >= 0;
          l--
        )
          (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
        return o && n && rV(e, r, n), n;
      })([td("wcm-theme-context")], rq);
      let rK = c`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.wcm-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.wcm-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.wcm-track svg{margin:0 5px}wcm-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--wcm-wallet-icon-border-radius)}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-title{display:flex;align-items:center;margin-bottom:10px}.wcm-title svg{margin-right:6px}.wcm-title path{fill:var(--wcm-accent-color)}wcm-modal-footer .wcm-title{padding:0 10px}wcm-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--wcm-color-bg-1))}wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-info-footer wcm-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
      var rY = Object.defineProperty,
        rQ = Object.getOwnPropertyDescriptor;
      let rJ = class extends ts {
        onGoToQrcode() {
          t$.AV.push("Qrcode");
        }
        render() {
          let { recomendedWallets: t } = t$.ExplorerCtrl.state,
            e = [...t, ...t],
            r = 2 * t$.zv.RECOMMENDED_WALLET_AMOUNT;
          return z`<wcm-modal-header title="Connect your wallet" .onAction="${
            this.onGoToQrcode
          }" .actionIcon="${
            eV.QRCODE_ICON
          }"></wcm-modal-header><wcm-modal-content><div class="wcm-title">${
            eV.MOBILE_ICON
          }<wcm-text variant="small-regular" color="accent">WalletConnect</wcm-text></div><div class="wcm-slider"><div class="wcm-track">${[
            ...Array(r),
          ].map((t, r) => {
            let o = e[r % e.length];
            return o
              ? z`<wcm-wallet-image walletId="${o.id}" imageId="${o.image_id}"></wcm-wallet-image>`
              : eV.WALLET_PLACEHOLDER;
          })}</div><wcm-button-big @click="${
            e9.handleAndroidLinking
          }"><wcm-text variant="medium-regular" color="inverse">Select Wallet</wcm-text></wcm-button-big></div></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">Choose WalletConnect to see supported apps on your device</wcm-text></wcm-info-footer>`;
        }
      };
      (rJ.styles = [eT.globalCss, rK]),
        (rJ = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? rQ(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && rY(e, r, n), n;
        })([td("wcm-android-wallet-selection")], rJ));
      let rG = c`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--wcm-accent-color);animation:loading 1s linear infinite}wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:90px;height:90px}wcm-text{margin-bottom:40px}.wcm-error svg{stroke:var(--wcm-error-color)}.wcm-error use{display:none}.wcm-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.wcm-stale svg,.wcm-stale use{display:none}`;
      var rX = Object.defineProperty,
        r0 = Object.getOwnPropertyDescriptor,
        r1 = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? r0(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && rX(e, r, n), n;
        };
      let r2 = class extends ts {
        constructor() {
          super(...arguments),
            (this.walletId = void 0),
            (this.imageId = void 0),
            (this.isError = !1),
            (this.isStale = !1),
            (this.label = "");
        }
        svgLoaderTemplate() {
          var t, e;
          let r =
              null !=
              (e =
                null == (t = t$.ThemeCtrl.state.themeVariables)
                  ? void 0
                  : t["--wcm-wallet-icon-large-border-radius"])
                ? e
                : eT.getPreset("--wcm-wallet-icon-large-border-radius"),
            o = 0;
          o =
            (r.includes("%") ? 0.88 * parseInt(r, 10) : parseInt(r, 10)) * 1.17;
          let i = 317 - 1.57 * o,
            n = 425 - 1.8 * o;
          return z`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="wcm-loader" x="2" y="2" width="106" height="106" rx="${o}"/><use xlink:href="#wcm-loader" stroke-dasharray="106 ${i}" stroke-dashoffset="${n}"></use></svg>`;
        }
        render() {
          let t = { "wcm-error": this.isError, "wcm-stale": this.isStale };
          return z`<div class="${tf(
            t
          )}">${this.svgLoaderTemplate()}<wcm-wallet-image walletId="${ex(
            this.walletId
          )}" imageId="${ex(
            this.imageId
          )}"></wcm-wallet-image></div><wcm-text variant="medium-regular" color="${
            this.isError ? "error" : "primary"
          }">${this.isError ? "Connection declined" : this.label}</wcm-text>`;
        }
      };
      (r2.styles = [eT.globalCss, rG]),
        r1([tm()], r2.prototype, "walletId", 2),
        r1([tm()], r2.prototype, "imageId", 2),
        r1([tm({ type: Boolean })], r2.prototype, "isError", 2),
        r1([tm({ type: Boolean })], r2.prototype, "isStale", 2),
        r1([tm()], r2.prototype, "label", 2),
        (r2 = r1([td("wcm-connector-waiting")], r2));
      let r5 = {
          manualWallets() {
            var t, e;
            let { mobileWallets: r, desktopWallets: o } = t$.ConfigCtrl.state,
              i = null == (t = r5.recentWallet()) ? void 0 : t.id,
              n = t$.zv.isMobile() ? r : o,
              l = n?.filter((t) => i !== t.id);
            return null !=
              (e = t$.zv.isMobile()
                ? l?.map(({ id: t, name: e, links: r }) => ({
                    id: t,
                    name: e,
                    mobile: r,
                    links: r,
                  }))
                : l?.map(({ id: t, name: e, links: r }) => ({
                    id: t,
                    name: e,
                    desktop: r,
                    links: r,
                  })))
              ? e
              : [];
          },
          recentWallet: () => e9.getRecentWallet(),
          recomendedWallets(t = !1) {
            var e;
            let r = t || null == (e = r5.recentWallet()) ? void 0 : e.id,
              { recomendedWallets: o } = t$.ExplorerCtrl.state;
            return o.filter((t) => r !== t.id);
          },
        },
        r4 = {
          onConnecting(t) {
            e9.goToConnectingView(t);
          },
          manualWalletsTemplate() {
            return r5
              .manualWallets()
              .map(
                (t) =>
                  z`<wcm-wallet-button walletId="${t.id}" name="${
                    t.name
                  }" .onClick="${() =>
                    this.onConnecting(t)}"></wcm-wallet-button>`
              );
          },
          recomendedWalletsTemplate(t = !1) {
            return r5
              .recomendedWallets(t)
              .map(
                (t) =>
                  z`<wcm-wallet-button name="${t.name}" walletId="${
                    t.id
                  }" imageId="${t.image_id}" .onClick="${() =>
                    this.onConnecting(t)}"></wcm-wallet-button>`
              );
          },
          recentWalletTemplate() {
            let t = r5.recentWallet();
            if (t)
              return z`<wcm-wallet-button name="${t.name}" walletId="${
                t.id
              }" imageId="${ex(t.image_id)}" .recent="${!0}" .onClick="${() =>
                this.onConnecting(t)}"></wcm-wallet-button>`;
          },
        },
        r3 = c`.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.wcm-desktop-title,.wcm-mobile-title{display:flex;align-items:center}.wcm-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.wcm-desktop-title{margin-bottom:10px;padding:0 10px}.wcm-subtitle{display:flex;align-items:center}.wcm-subtitle:last-child path{fill:var(--wcm-color-fg-3)}.wcm-desktop-title svg,.wcm-mobile-title svg{margin-right:6px}.wcm-desktop-title path,.wcm-mobile-title path{fill:var(--wcm-accent-color)}`;
      var r7 = Object.defineProperty,
        r6 = Object.getOwnPropertyDescriptor;
      let r8 = class extends ts {
        render() {
          let { explorerExcludedWalletIds: t, enableExplorer: e } =
              t$.ConfigCtrl.state,
            r = r4.manualWalletsTemplate(),
            o = r4.recomendedWalletsTemplate(),
            i = [r4.recentWalletTemplate(), ...r, ...o];
          i = i.filter(Boolean);
          let n = i.length > 4 || ("ALL" !== t && e),
            l = [];
          l = n ? i.slice(0, 3) : i;
          let a = !!l.length;
          return z`<wcm-modal-header .border="${!0}" title="Connect your wallet" .onAction="${
            e9.handleUriCopy
          }" .actionIcon="${
            eV.COPY_ICON
          }"></wcm-modal-header><wcm-modal-content><div class="wcm-mobile-title"><div class="wcm-subtitle">${
            eV.MOBILE_ICON
          }<wcm-text variant="small-regular" color="accent">Mobile</wcm-text></div><div class="wcm-subtitle">${
            eV.SCAN_ICON
          }<wcm-text variant="small-regular" color="secondary">Scan with your wallet</wcm-text></div></div><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>${
            a
              ? z`<wcm-modal-footer><div class="wcm-desktop-title">${
                  eV.DESKTOP_ICON
                }<wcm-text variant="small-regular" color="accent">Desktop</wcm-text></div><div class="wcm-grid">${l} ${
                  n
                    ? z`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`
                    : null
                }</div></wcm-modal-footer>`
              : null
          }`;
        }
      };
      (r8.styles = [eT.globalCss, r3]),
        (r8 = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? r6(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && r7(e, r, n), n;
        })([td("wcm-desktop-wallet-selection")], r8));
      let r9 = c`div{background-color:var(--wcm-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--wcm-color-bg-3);text-align:center}a{color:var(--wcm-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
      var ot = Object.defineProperty,
        oe = Object.getOwnPropertyDescriptor;
      let or = class extends ts {
        render() {
          let { termsOfServiceUrl: t, privacyPolicyUrl: e } =
            t$.ConfigCtrl.state;
          return t ?? e
            ? z`<div><wcm-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${
                t
                  ? z`<a href="${t}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`
                  : null
              } ${t && e ? "and" : null} ${
                e
                  ? z`<a href="${e}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`
                  : null
              }</wcm-text></div>`
            : null;
        }
      };
      (or.styles = [eT.globalCss, r9]),
        (or = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? oe(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && ot(e, r, n), n;
        })([td("wcm-legal-notice")], or));
      let oo = c`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
      var oi = Object.defineProperty,
        on = Object.getOwnPropertyDescriptor;
      let ol = class extends ts {
        onQrcode() {
          t$.AV.push("Qrcode");
        }
        render() {
          let { explorerExcludedWalletIds: t, enableExplorer: e } =
              t$.ConfigCtrl.state,
            r = r4.manualWalletsTemplate(),
            o = r4.recomendedWalletsTemplate(),
            i = [r4.recentWalletTemplate(), ...r, ...o];
          i = i.filter(Boolean);
          let n = i.length > 8 || ("ALL" !== t && e),
            l = [];
          l = n ? i.slice(0, 7) : i;
          let a = !!l.length;
          return z`<wcm-modal-header title="Connect your wallet" .onAction="${
            this.onQrcode
          }" .actionIcon="${eV.QRCODE_ICON}"></wcm-modal-header>${
            a
              ? z`<wcm-modal-content><div>${l} ${
                  n
                    ? z`<wcm-view-all-wallets-button></wcm-view-all-wallets-button>`
                    : null
                }</div></wcm-modal-content>`
              : null
          }`;
        }
      };
      (ol.styles = [eT.globalCss, oo]),
        (ol = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? on(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && oi(e, r, n), n;
        })([td("wcm-mobile-wallet-selection")], ol));
      let oa = c`:host{all:initial}.wcm-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--wcm-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;opacity:0;pointer-events:none;background-color:var(--wcm-overlay-background-color);backdrop-filter:var(--wcm-overlay-backdrop-filter)}@media(max-height:720px) and (orientation:landscape){.wcm-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.wcm-active{pointer-events:auto}.wcm-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) var(--wcm-container-border-radius) var(--wcm-container-border-radius);border:1px solid var(--wcm-color-overlay);overflow:hidden}.wcm-card{width:100%;position:relative;border-radius:var(--wcm-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--wcm-color-overlay);background-color:var(--wcm-color-bg-1);color:var(--wcm-color-fg-1)}@media(max-width:600px){.wcm-container{max-width:440px;border-radius:var(--wcm-background-border-radius) var(--wcm-background-border-radius) 0 0}.wcm-card{border-radius:var(--wcm-container-border-radius) var(--wcm-container-border-radius) 0 0}.wcm-overlay{align-items:flex-end}}@media(max-width:440px){.wcm-container{border:0}}`;
      var os = Object.defineProperty,
        oc = Object.getOwnPropertyDescriptor,
        od = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? oc(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && os(e, r, n), n;
        };
      let oh = class extends ts {
        constructor() {
          super(),
            (this.open = !1),
            (this.active = !1),
            (this.unsubscribeModal = void 0),
            (this.abortController = void 0),
            (this.unsubscribeModal = t$.jb.subscribe((t) => {
              t.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
            }));
        }
        disconnectedCallback() {
          var t;
          null == (t = this.unsubscribeModal) || t.call(this);
        }
        get overlayEl() {
          return e9.getShadowRootElement(this, ".wcm-overlay");
        }
        get containerEl() {
          return e9.getShadowRootElement(this, ".wcm-container");
        }
        toggleBodyScroll(t) {
          if (document.querySelector("body")) {
            if (t) {
              let t = document.getElementById("wcm-styles");
              t?.remove();
            } else
              document.head.insertAdjacentHTML(
                "beforeend",
                '<style id="wcm-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'
              );
          }
        }
        onCloseModal(t) {
          t.target === t.currentTarget && t$.jb.close();
        }
        onOpenModalEvent() {
          this.toggleBodyScroll(!1),
            this.addKeyboardEvents(),
            (this.open = !0),
            setTimeout(async () => {
              let t = e9.isMobileAnimation()
                ? { y: ["50vh", "0vh"] }
                : { scale: [0.98, 1] };
              await Promise.all([
                ey(
                  this.overlayEl,
                  { opacity: [0, 1] },
                  { delay: 0.1, duration: 0.2 }
                ).finished,
                ey(this.containerEl, t, { delay: 0.1, duration: 0.2 }).finished,
              ]),
                (this.active = !0);
            }, 0);
        }
        async onCloseModalEvent() {
          this.toggleBodyScroll(!0), this.removeKeyboardEvents();
          let t = e9.isMobileAnimation()
            ? { y: ["0vh", "50vh"] }
            : { scale: [1, 0.98] };
          await Promise.all([
            ey(this.overlayEl, { opacity: [1, 0] }, { duration: 0.2 }).finished,
            ey(this.containerEl, t, { duration: 0.2 }).finished,
          ]),
            this.containerEl.removeAttribute("style"),
            (this.active = !1),
            (this.open = !1);
        }
        addKeyboardEvents() {
          (this.abortController = new AbortController()),
            window.addEventListener(
              "keydown",
              (t) => {
                var e;
                "Escape" === t.key
                  ? t$.jb.close()
                  : "Tab" === t.key &&
                    ((null != (e = t.target) && e.tagName.includes("wcm-")) ||
                      this.containerEl.focus());
              },
              this.abortController
            ),
            this.containerEl.focus();
        }
        removeKeyboardEvents() {
          var t;
          null == (t = this.abortController) || t.abort(),
            (this.abortController = void 0);
        }
        render() {
          let t = { "wcm-overlay": !0, "wcm-active": this.active };
          return z`<wcm-explorer-context></wcm-explorer-context><wcm-theme-context></wcm-theme-context><div id="wcm-modal" class="${tf(
            t
          )}" @click="${
            this.onCloseModal
          }" role="alertdialog" aria-modal="true"><div class="wcm-container" tabindex="0">${
            this.open
              ? z`<wcm-modal-backcard></wcm-modal-backcard><div class="wcm-card"><wcm-modal-router></wcm-modal-router><wcm-modal-toast></wcm-modal-toast></div>`
              : null
          }</div></div>`;
        }
      };
      (oh.styles = [eT.globalCss, oa]),
        od([tp()], oh.prototype, "open", 2),
        od([tp()], oh.prototype, "active", 2),
        (oh = od([td("wcm-modal")], oh));
      let ou = c`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}wcm-button{margin:0 5px}`;
      var om = Object.defineProperty,
        op = Object.getOwnPropertyDescriptor,
        og = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? op(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && om(e, r, n), n;
        };
      let of = class extends ts {
        constructor() {
          super(...arguments),
            (this.isMobile = !1),
            (this.isDesktop = !1),
            (this.isWeb = !1),
            (this.isRetry = !1);
        }
        onMobile() {
          t$.zv.isMobile()
            ? t$.AV.replace("MobileConnecting")
            : t$.AV.replace("MobileQrcodeConnecting");
        }
        onDesktop() {
          t$.AV.replace("DesktopConnecting");
        }
        onWeb() {
          t$.AV.replace("WebConnecting");
        }
        render() {
          return z`<div>${this.isRetry ? z`<slot></slot>` : null} ${
            this.isMobile
              ? z`<wcm-button .onClick="${this.onMobile}" .iconLeft="${eV.MOBILE_ICON}" variant="outline">Mobile</wcm-button>`
              : null
          } ${
            this.isDesktop
              ? z`<wcm-button .onClick="${this.onDesktop}" .iconLeft="${eV.DESKTOP_ICON}" variant="outline">Desktop</wcm-button>`
              : null
          } ${
            this.isWeb
              ? z`<wcm-button .onClick="${this.onWeb}" .iconLeft="${eV.GLOBE_ICON}" variant="outline">Web</wcm-button>`
              : null
          }</div>`;
        }
      };
      (of.styles = [eT.globalCss, ou]),
        og([tm({ type: Boolean })], of.prototype, "isMobile", 2),
        og([tm({ type: Boolean })], of.prototype, "isDesktop", 2),
        og([tm({ type: Boolean })], of.prototype, "isWeb", 2),
        og([tm({ type: Boolean })], of.prototype, "isRetry", 2),
        (of = og([td("wcm-platform-selection")], of));
      let ow = c`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--wcm-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.wcm-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--wcm-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--wcm-color-bg-2);box-shadow:inset 0 0 0 1px var(--wcm-color-overlay)}button:active{background-color:var(--wcm-color-overlay)}@media(hover:hover){button:hover{background-color:var(--wcm-color-overlay)}}.wcm-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--wcm-wallet-icon-border-radius)/ 2);border:1px solid var(--wcm-color-overlay)}.wcm-icons svg{width:21px;height:21px}.wcm-icons img:nth-child(1),.wcm-icons img:nth-child(2),.wcm-icons svg:nth-child(1),.wcm-icons svg:nth-child(2){margin-bottom:4px}wcm-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--wcm-color-bg-3)}#wallet-placeholder-dash{stroke:var(--wcm-color-overlay)}`;
      var ov = Object.defineProperty,
        ob = Object.getOwnPropertyDescriptor;
      let oy = class extends ts {
        onClick() {
          t$.AV.push("WalletExplorer");
        }
        render() {
          let { recomendedWallets: t } = t$.ExplorerCtrl.state,
            e = r5.manualWallets(),
            r = [...t, ...e].reverse().slice(0, 4);
          return z`<button @click="${
            this.onClick
          }"><div class="wcm-icons">${r.map((t) => {
            let e = e9.getWalletIcon(t);
            if (e) return z`<img crossorigin="anonymous" src="${e}">`;
            let r = e9.getWalletIcon({ id: t.id });
            return r
              ? z`<img crossorigin="anonymous" src="${r}">`
              : eV.WALLET_PLACEHOLDER;
          })} ${[...Array(4 - r.length)].map(
            () => eV.WALLET_PLACEHOLDER
          )}</div><wcm-text variant="xsmall-regular">View All</wcm-text></button>`;
        }
      };
      (oy.styles = [eT.globalCss, ow]),
        (oy = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? ob(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && ov(e, r, n), n;
        })([td("wcm-view-all-wallets-button")], oy));
      let ox = c`.wcm-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
      var oC = Object.defineProperty,
        o$ = Object.getOwnPropertyDescriptor,
        oE = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? o$(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && oC(e, r, n), n;
        };
      let oA = class extends ts {
        constructor() {
          super(),
            (this.walletId = ""),
            (this.imageId = ""),
            (this.uri = ""),
            setTimeout(() => {
              let { walletConnectUri: t } = t$.OptionsCtrl.state;
              this.uri = t;
            }, 0);
        }
        get overlayEl() {
          return e9.getShadowRootElement(this, ".wcm-qr-container");
        }
        render() {
          return z`<div class="wcm-qr-container">${
            this.uri
              ? z`<wcm-qrcode size="${this.overlayEl.offsetWidth}" uri="${
                  this.uri
                }" walletId="${ex(this.walletId)}" imageId="${ex(
                  this.imageId
                )}"></wcm-qrcode>`
              : z`<wcm-spinner></wcm-spinner>`
          }</div>`;
        }
      };
      (oA.styles = [eT.globalCss, ox]),
        oE([tm()], oA.prototype, "walletId", 2),
        oE([tm()], oA.prototype, "imageId", 2),
        oE([tp()], oA.prototype, "uri", 2),
        (oA = oE([td("wcm-walletconnect-qr")], oA));
      var o_ = Object.defineProperty,
        ok = Object.getOwnPropertyDescriptor;
      let oO = class extends ts {
        viewTemplate() {
          return t$.zv.isAndroid()
            ? z`<wcm-android-wallet-selection></wcm-android-wallet-selection>`
            : t$.zv.isMobile()
            ? z`<wcm-mobile-wallet-selection></wcm-mobile-wallet-selection>`
            : z`<wcm-desktop-wallet-selection></wcm-desktop-wallet-selection>`;
        }
        render() {
          return z`${this.viewTemplate()}<wcm-legal-notice></wcm-legal-notice>`;
        }
      };
      (oO.styles = [eT.globalCss]),
        (oO = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? ok(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && o_(e, r, n), n;
        })([td("wcm-connect-wallet-view")], oO));
      let oI = c`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
      var oT = Object.defineProperty,
        oM = Object.getOwnPropertyDescriptor,
        oP = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? oM(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && oT(e, r, n), n;
        };
      let oR = class extends ts {
        constructor() {
          super(), (this.isError = !1), this.openDesktopApp();
        }
        onFormatAndRedirect(t) {
          let { desktop: e, name: r } = t$.zv.getWalletRouterData(),
            o = e?.native;
          if (o) {
            let e = t$.zv.formatNativeUrl(o, t, r);
            t$.zv.openHref(e, "_self");
          }
        }
        openDesktopApp() {
          let { walletConnectUri: t } = t$.OptionsCtrl.state,
            e = t$.zv.getWalletRouterData();
          e9.setRecentWallet(e), t && this.onFormatAndRedirect(t);
        }
        render() {
          let { name: t, id: e, image_id: r } = t$.zv.getWalletRouterData(),
            { isMobile: o, isWeb: i } = e9.getCachedRouterWalletPlatforms();
          return z`<wcm-modal-header title="${t}" .onAction="${
            e9.handleUriCopy
          }" .actionIcon="${
            eV.COPY_ICON
          }"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${ex(
            r
          )}" label="${`Continue in ${t}...`}" .isError="${
            this.isError
          }"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Connection can continue loading if ${t} is not installed on your device`}</wcm-text><wcm-platform-selection .isMobile="${o}" .isWeb="${i}" .isRetry="${!0}"><wcm-button .onClick="${this.openDesktopApp.bind(
            this
          )}" .iconRight="${
            eV.RETRY_ICON
          }">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
        }
      };
      (oR.styles = [eT.globalCss, oI]),
        oP([tp()], oR.prototype, "isError", 2),
        (oR = oP([td("wcm-desktop-connecting-view")], oR));
      let oS = c`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}wcm-button{margin-top:15px}`;
      var oN = Object.defineProperty,
        oL = Object.getOwnPropertyDescriptor;
      let oD = class extends ts {
        onInstall(t) {
          t && t$.zv.openHref(t, "_blank");
        }
        render() {
          let {
            name: t,
            id: e,
            image_id: r,
            homepage: o,
          } = t$.zv.getWalletRouterData();
          return z`<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${ex(
            r
          )}" label="Not Detected" .isStale="${!0}"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Download ${t} to continue. If multiple browser extensions are installed, disable non ${t} ones and try again`}</wcm-text><wcm-button .onClick="${() =>
            this.onInstall(o)}" .iconLeft="${
            eV.ARROW_DOWN_ICON
          }">Download</wcm-button></wcm-info-footer>`;
        }
      };
      (oD.styles = [eT.globalCss, oS]),
        (oD = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? oL(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && oN(e, r, n), n;
        })([td("wcm-install-wallet-view")], oD));
      let oB = c`wcm-wallet-image{border-radius:var(--wcm-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}wcm-info-footer{display:flex;width:100%}.wcm-app-store{justify-content:space-between}.wcm-app-store wcm-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--wcm-wallet-icon-small-border-radius)}.wcm-app-store div{display:flex;align-items:center}.wcm-app-store wcm-button{margin-right:-10px}.wcm-note{flex-direction:column;align-items:center;padding:5px 0}.wcm-note wcm-text{text-align:center}wcm-platform-selection{margin-top:-15px}.wcm-note wcm-text{margin-top:15px}.wcm-note wcm-text span{color:var(--wcm-accent-color)}`;
      var oj = Object.defineProperty,
        oU = Object.getOwnPropertyDescriptor,
        oW = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? oU(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && oj(e, r, n), n;
        };
      let oz = class extends ts {
        constructor() {
          super(), (this.isError = !1), this.openMobileApp();
        }
        onFormatAndRedirect(t, e = !1) {
          let { mobile: r, name: o } = t$.zv.getWalletRouterData(),
            i = r?.native,
            n = r?.universal;
          if (i && !e) {
            let e = t$.zv.formatNativeUrl(i, t, o);
            t$.zv.openHref(e, "_self");
          } else if (n) {
            let e = t$.zv.formatUniversalUrl(n, t, o);
            t$.zv.openHref(e, "_self");
          }
        }
        openMobileApp(t = !1) {
          let { walletConnectUri: e } = t$.OptionsCtrl.state,
            r = t$.zv.getWalletRouterData();
          e9.setRecentWallet(r), e && this.onFormatAndRedirect(e, t);
        }
        onGoToAppStore(t) {
          t && t$.zv.openHref(t, "_blank");
        }
        render() {
          let {
              name: t,
              id: e,
              image_id: r,
              app: o,
              mobile: i,
            } = t$.zv.getWalletRouterData(),
            { isWeb: n } = e9.getCachedRouterWalletPlatforms(),
            l = o?.ios,
            a = i?.universal;
          return z`<wcm-modal-header title="${t}"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${ex(
            r
          )}" label="Tap 'Open' to continue…" .isError="${
            this.isError
          }"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer class="wcm-note"><wcm-platform-selection .isWeb="${n}" .isRetry="${!0}"><wcm-button .onClick="${() =>
            this.openMobileApp(!1)}" .iconRight="${
            eV.RETRY_ICON
          }">Retry</wcm-button></wcm-platform-selection>${
            a
              ? z`<wcm-text color="secondary" variant="small-thin">Still doesn't work? <span tabindex="0" @click="${() =>
                  this.openMobileApp(
                    !0
                  )}">Try this alternate link</span></wcm-text>`
              : null
          }</wcm-info-footer><wcm-info-footer class="wcm-app-store"><div><wcm-wallet-image walletId="${e}" imageId="${ex(
            r
          )}"></wcm-wallet-image><wcm-text>${`Get ${t}`}</wcm-text></div><wcm-button .iconRight="${
            eV.ARROW_RIGHT_ICON
          }" .onClick="${() =>
            this.onGoToAppStore(
              l
            )}" variant="ghost">App Store</wcm-button></wcm-info-footer>`;
        }
      };
      (oz.styles = [eT.globalCss, oB]),
        oW([tp()], oz.prototype, "isError", 2),
        (oz = oW([td("wcm-mobile-connecting-view")], oz));
      let oH = c`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
      var oZ = Object.defineProperty,
        oV = Object.getOwnPropertyDescriptor;
      let oF = class extends ts {
        render() {
          let { name: t, id: e, image_id: r } = t$.zv.getWalletRouterData(),
            { isDesktop: o, isWeb: i } = e9.getCachedRouterWalletPlatforms();
          return z`<wcm-modal-header title="${t}" .onAction="${
            e9.handleUriCopy
          }" .actionIcon="${
            eV.COPY_ICON
          }"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr walletId="${e}" imageId="${ex(
            r
          )}"></wcm-walletconnect-qr></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`Scan this QR Code with your phone's camera or inside ${t} app`}</wcm-text><wcm-platform-selection .isDesktop="${o}" .isWeb="${i}"></wcm-platform-selection></wcm-info-footer>`;
        }
      };
      (oF.styles = [eT.globalCss, oH]),
        (oF = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? oV(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && oZ(e, r, n), n;
        })([td("wcm-mobile-qr-connecting-view")], oF));
      var oq = Object.defineProperty,
        oK = Object.getOwnPropertyDescriptor;
      let oY = class extends ts {
        render() {
          return z`<wcm-modal-header title="Scan the code" .onAction="${e9.handleUriCopy}" .actionIcon="${eV.COPY_ICON}"></wcm-modal-header><wcm-modal-content><wcm-walletconnect-qr></wcm-walletconnect-qr></wcm-modal-content>`;
        }
      };
      (oY.styles = [eT.globalCss]),
        (oY = ((t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? oK(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && oq(e, r, n), n;
        })([td("wcm-qrcode-view")], oY));
      let oQ = c`wcm-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.wcm-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}wcm-modal-content::after,wcm-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}wcm-modal-content::before{box-shadow:0 -1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(var(--wcm-color-bg-1),rgba(255,255,255,0))}wcm-modal-content::after{box-shadow:0 1px 0 0 var(--wcm-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--wcm-color-bg-1));top:calc(100% - 20px)}wcm-modal-content::-webkit-scrollbar{display:none}.wcm-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.wcm-empty,.wcm-loading{display:flex}.wcm-loading .wcm-placeholder-block{height:100%}.wcm-end-reached .wcm-placeholder-block{height:0;opacity:0}.wcm-empty .wcm-placeholder-block{opacity:1;height:100%}wcm-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
      var oJ = Object.defineProperty,
        oG = Object.getOwnPropertyDescriptor,
        oX = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? oG(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && oJ(e, r, n), n;
        };
      let o0 = class extends ts {
        constructor() {
          super(...arguments),
            (this.loading = !t$.ExplorerCtrl.state.wallets.listings.length),
            (this.firstFetch = !t$.ExplorerCtrl.state.wallets.listings.length),
            (this.search = ""),
            (this.endReached = !1),
            (this.intersectionObserver = void 0),
            (this.searchDebounce = e9.debounce((t) => {
              t.length >= 1
                ? ((this.firstFetch = !0),
                  (this.endReached = !1),
                  (this.search = t),
                  t$.ExplorerCtrl.resetSearch(),
                  this.fetchWallets())
                : this.search &&
                  ((this.search = ""),
                  (this.endReached = this.isLastPage()),
                  t$.ExplorerCtrl.resetSearch());
            }));
        }
        firstUpdated() {
          this.createPaginationObserver();
        }
        disconnectedCallback() {
          var t;
          null == (t = this.intersectionObserver) || t.disconnect();
        }
        get placeholderEl() {
          return e9.getShadowRootElement(this, ".wcm-placeholder-block");
        }
        createPaginationObserver() {
          (this.intersectionObserver = new IntersectionObserver(([t]) => {
            t.isIntersecting &&
              !(this.search && this.firstFetch) &&
              this.fetchWallets();
          })),
            this.intersectionObserver.observe(this.placeholderEl);
        }
        isLastPage() {
          let { wallets: t, search: e } = t$.ExplorerCtrl.state,
            { listings: r, total: o } = this.search ? e : t;
          return o <= 40 || r.length >= o;
        }
        async fetchWallets() {
          var t;
          let { wallets: e, search: r } = t$.ExplorerCtrl.state,
            { listings: o, total: i, page: n } = this.search ? r : e;
          if (!this.endReached && (this.firstFetch || (i > 40 && o.length < i)))
            try {
              this.loading = !0;
              let e =
                  null == (t = t$.OptionsCtrl.state.chains)
                    ? void 0
                    : t.join(","),
                { listings: r } = await t$.ExplorerCtrl.getWallets({
                  page: this.firstFetch ? 1 : n + 1,
                  entries: 40,
                  search: this.search,
                  version: 2,
                  chains: e,
                }),
                o = r.map((t) => e9.getWalletIcon(t));
              await Promise.all([
                ...o.map(async (t) => e9.preloadImage(t)),
                t$.zv.wait(300),
              ]),
                (this.endReached = this.isLastPage());
            } catch (t) {
              console.error(t),
                t$.ToastCtrl.openToast(e9.getErrorMessage(t), "error");
            } finally {
              (this.loading = !1), (this.firstFetch = !1);
            }
        }
        onConnect(t) {
          t$.zv.isAndroid()
            ? e9.handleMobileLinking(t)
            : e9.goToConnectingView(t);
        }
        onSearchChange(t) {
          let { value: e } = t.target;
          this.searchDebounce(e);
        }
        render() {
          let { wallets: t, search: e } = t$.ExplorerCtrl.state,
            { listings: r } = this.search ? e : t,
            o = this.loading && !r.length,
            i = this.search.length >= 3,
            n = r4.manualWalletsTemplate(),
            l = r4.recomendedWalletsTemplate(!0);
          i &&
            ((n = n.filter(({ values: t }) =>
              e9.caseSafeIncludes(t[0], this.search)
            )),
            (l = l.filter(({ values: t }) =>
              e9.caseSafeIncludes(t[0], this.search)
            )));
          let a = !this.loading && !r.length && !l.length,
            s = {
              "wcm-loading": o,
              "wcm-end-reached": this.endReached || !this.loading,
              "wcm-empty": a,
            };
          return z`<wcm-modal-header><wcm-search-input .onChange="${this.onSearchChange.bind(
            this
          )}"></wcm-search-input></wcm-modal-header><wcm-modal-content class="${tf(
            s
          )}"><div class="wcm-grid">${o ? null : n} ${o ? null : l} ${
            o
              ? null
              : r.map(
                  (t) =>
                    z`${
                      t
                        ? z`<wcm-wallet-button imageId="${t.image_id}" name="${
                            t.name
                          }" walletId="${t.id}" .onClick="${() =>
                            this.onConnect(t)}"></wcm-wallet-button>`
                        : null
                    }`
                )
          }</div><div class="wcm-placeholder-block">${
            a
              ? z`<wcm-text variant="big-bold" color="secondary">No results found</wcm-text>`
              : null
          } ${
            !a && this.loading ? z`<wcm-spinner></wcm-spinner>` : null
          }</div></wcm-modal-content>`;
        }
      };
      (o0.styles = [eT.globalCss, oQ]),
        oX([tp()], o0.prototype, "loading", 2),
        oX([tp()], o0.prototype, "firstFetch", 2),
        oX([tp()], o0.prototype, "search", 2),
        oX([tp()], o0.prototype, "endReached", 2),
        (o0 = oX([td("wcm-wallet-explorer-view")], o0));
      let o1 = c`wcm-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}wcm-text{text-align:center}`;
      var o2 = Object.defineProperty,
        o5 = Object.getOwnPropertyDescriptor,
        o4 = (t, e, r, o) => {
          for (
            var i, n = o > 1 ? void 0 : o ? o5(e, r) : e, l = t.length - 1;
            l >= 0;
            l--
          )
            (i = t[l]) && (n = (o ? i(e, r, n) : i(n)) || n);
          return o && n && o2(e, r, n), n;
        };
      let o3 = class extends ts {
        constructor() {
          super(), (this.isError = !1), this.openWebWallet();
        }
        onFormatAndRedirect(t) {
          let { desktop: e, name: r } = t$.zv.getWalletRouterData(),
            o = e?.universal;
          if (o) {
            let e = t$.zv.formatUniversalUrl(o, t, r);
            t$.zv.openHref(e, "_blank");
          }
        }
        openWebWallet() {
          let { walletConnectUri: t } = t$.OptionsCtrl.state,
            e = t$.zv.getWalletRouterData();
          e9.setRecentWallet(e), t && this.onFormatAndRedirect(t);
        }
        render() {
          let { name: t, id: e, image_id: r } = t$.zv.getWalletRouterData(),
            { isMobile: o, isDesktop: i } = e9.getCachedRouterWalletPlatforms(),
            n = t$.zv.isMobile();
          return z`<wcm-modal-header title="${t}" .onAction="${
            e9.handleUriCopy
          }" .actionIcon="${
            eV.COPY_ICON
          }"></wcm-modal-header><wcm-modal-content><wcm-connector-waiting walletId="${e}" imageId="${ex(
            r
          )}" label="${`Continue in ${t}...`}" .isError="${
            this.isError
          }"></wcm-connector-waiting></wcm-modal-content><wcm-info-footer><wcm-text color="secondary" variant="small-thin">${`${t} web app has opened in a new tab. Go there, accept the connection, and come back`}</wcm-text><wcm-platform-selection .isMobile="${o}" .isDesktop="${
            !n && i
          }" .isRetry="${!0}"><wcm-button .onClick="${this.openWebWallet.bind(
            this
          )}" .iconRight="${
            eV.RETRY_ICON
          }">Retry</wcm-button></wcm-platform-selection></wcm-info-footer>`;
        }
      };
      (o3.styles = [eT.globalCss, o1]),
        o4([tp()], o3.prototype, "isError", 2),
        (o3 = o4([td("wcm-web-connecting-view")], o3));
    },
  },
]);
