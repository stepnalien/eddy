"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [530],
  {
    79569: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hmac = t.HMAC = void 0);
      let n = r(27320),
        i = r(98089);
      class o extends i.Hash {
        constructor(e, t) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, n.hash)(e);
          let r = (0, i.toBytes)(t);
          if (
            ((this.iHash = e.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let o = this.blockLen,
            a = new Uint8Array(o);
          a.set(r.length > o ? e.create().update(r).digest() : r);
          for (let e = 0; e < a.length; e++) a[e] ^= 54;
          this.iHash.update(a), (this.oHash = e.create());
          for (let e = 0; e < a.length; e++) a[e] ^= 106;
          this.oHash.update(a), a.fill(0);
        }
        update(e) {
          return (0, n.exists)(this), this.iHash.update(e), this;
        }
        digestInto(e) {
          (0, n.exists)(this),
            (0, n.bytes)(e, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(e),
            this.oHash.update(e),
            this.oHash.digestInto(e),
            this.destroy();
        }
        digest() {
          let e = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(e), e;
        }
        _cloneInto(e) {
          e || (e = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: t,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: o,
            outputLen: a,
          } = this;
          return (
            (e.finished = n),
            (e.destroyed = i),
            (e.blockLen = o),
            (e.outputLen = a),
            (e.oHash = t._cloneInto(e.oHash)),
            (e.iHash = r._cloneInto(e.iHash)),
            e
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      (t.HMAC = o),
        (t.hmac = (e, t, r) => new o(e, t).update(r).digest()),
        (t.hmac.create = (e, t) => new o(e, t));
    },
    79656: function (e, t, r) {
      let n, i;
      /*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */ Object.defineProperty(
        t,
        "__esModule",
        { value: !0 }
      ),
        (t.utils =
          t.schnorr =
          t.verify =
          t.signSync =
          t.sign =
          t.getSharedSecret =
          t.recoverPublicKey =
          t.getPublicKey =
          t.Signature =
          t.Point =
          t.CURVE =
            void 0);
      let o = r(69159),
        a = BigInt(0),
        s = BigInt(1),
        l = BigInt(2),
        c = BigInt(3),
        f = BigInt(8),
        u = Object.freeze({
          a: a,
          b: BigInt(7),
          P: BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
          ),
          n: BigInt(
            "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
          ),
          h: s,
          Gx: BigInt(
            "55066263022277343669578718895168534326250603453777594175500187360389116729240"
          ),
          Gy: BigInt(
            "32670510020758816978083085130507043184471273380659243275938904335757337482424"
          ),
          beta: BigInt(
            "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
          ),
        });
      t.CURVE = u;
      let h = (e, t) => (e + t / l) / t,
        d = {
          beta: BigInt(
            "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
          ),
          splitScalar(e) {
            let { n: t } = u,
              r = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
              n = -s * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
              i = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
              o = BigInt("0x100000000000000000000000000000000"),
              a = h(r * e, t),
              l = h(-n * e, t),
              c = N(e - a * r - l * i, t),
              f = N(-a * n - l * r, t),
              d = c > o,
              y = f > o;
            if ((d && (c = t - c), y && (f = t - f), c > o || f > o))
              throw Error("splitScalarEndo: Endomorphism failed, k=" + e);
            return { k1neg: d, k1: c, k2neg: y, k2: f };
          },
        };
      function y(e) {
        let { a: t, b: r } = u,
          n = N(e * e),
          i = N(n * e);
        return N(i + t * e + r);
      }
      let g = u.a === a;
      class p extends Error {
        constructor(e) {
          super(e);
        }
      }
      function w(e) {
        if (!(e instanceof m)) throw TypeError("JacobianPoint expected");
      }
      class m {
        constructor(e, t, r) {
          (this.x = e), (this.y = t), (this.z = r);
        }
        static fromAffine(e) {
          if (!(e instanceof E))
            throw TypeError("JacobianPoint#fromAffine: expected Point");
          return e.equals(E.ZERO) ? m.ZERO : new m(e.x, e.y, s);
        }
        static toAffineBatch(e) {
          let t = (function (e, t = u.P) {
            let r = Array(e.length),
              n = e.reduce(
                (e, n, i) => (n === a ? e : ((r[i] = e), N(e * n, t))),
                s
              ),
              i = $(n, t);
            return (
              e.reduceRight(
                (e, n, i) =>
                  n === a ? e : ((r[i] = N(e * r[i], t)), N(e * n, t)),
                i
              ),
              r
            );
          })(e.map((e) => e.z));
          return e.map((e, r) => e.toAffine(t[r]));
        }
        static normalizeZ(e) {
          return m.toAffineBatch(e).map(m.fromAffine);
        }
        equals(e) {
          w(e);
          let { x: t, y: r, z: n } = this,
            { x: i, y: o, z: a } = e,
            s = N(n * n),
            l = N(a * a),
            c = N(t * l),
            f = N(i * s),
            u = N(N(r * a) * l),
            h = N(N(o * n) * s);
          return c === f && u === h;
        }
        negate() {
          return new m(this.x, N(-this.y), this.z);
        }
        double() {
          let { x: e, y: t, z: r } = this,
            n = N(e * e),
            i = N(t * t),
            o = N(i * i),
            a = e + i,
            s = N(l * (N(a * a) - n - o)),
            u = N(c * n),
            h = N(u * u),
            d = N(h - l * s),
            y = N(u * (s - d) - f * o),
            g = N(l * t * r);
          return new m(d, y, g);
        }
        add(e) {
          w(e);
          let { x: t, y: r, z: n } = this,
            { x: i, y: o, z: s } = e;
          if (i === a || o === a) return this;
          if (t === a || r === a) return e;
          let c = N(n * n),
            f = N(s * s),
            u = N(t * f),
            h = N(i * c),
            d = N(N(r * s) * f),
            y = N(N(o * n) * c),
            g = N(h - u),
            p = N(y - d);
          if (g === a) return p === a ? this.double() : m.ZERO;
          let v = N(g * g),
            b = N(g * v),
            E = N(u * v),
            S = N(p * p - b - l * E),
            x = N(p * (E - S) - d * b),
            A = N(n * s * g);
          return new m(S, x, A);
        }
        subtract(e) {
          return this.add(e.negate());
        }
        multiplyUnsafe(e) {
          let t = m.ZERO;
          if ("bigint" == typeof e && e === a) return t;
          let r = M(e);
          if (r === s) return this;
          if (!g) {
            let e = t,
              n = this;
            for (; r > a; )
              r & s && (e = e.add(n)), (n = n.double()), (r >>= s);
            return e;
          }
          let { k1neg: n, k1: i, k2neg: o, k2: l } = d.splitScalar(r),
            c = t,
            f = t,
            u = this;
          for (; i > a || l > a; )
            i & s && (c = c.add(u)),
              l & s && (f = f.add(u)),
              (u = u.double()),
              (i >>= s),
              (l >>= s);
          return (
            n && (c = c.negate()),
            o && (f = f.negate()),
            (f = new m(N(f.x * d.beta), f.y, f.z)),
            c.add(f)
          );
        }
        precomputeWindow(e) {
          let t = g ? 128 / e + 1 : 256 / e + 1,
            r = [],
            n = this,
            i = n;
          for (let o = 0; o < t; o++) {
            (i = n), r.push(i);
            for (let t = 1; t < 2 ** (e - 1); t++) (i = i.add(n)), r.push(i);
            n = i.double();
          }
          return r;
        }
        wNAF(e, t) {
          !t && this.equals(m.BASE) && (t = E.BASE);
          let r = (t && t._WINDOW_SIZE) || 1;
          if (256 % r)
            throw Error(
              "Point#wNAF: Invalid precomputation window, must be power of 2"
            );
          let n = t && b.get(t);
          !n &&
            ((n = this.precomputeWindow(r)),
            t && 1 !== r && ((n = m.normalizeZ(n)), b.set(t, n)));
          let i = m.ZERO,
            o = m.BASE,
            a = 1 + (g ? 128 / r : 256 / r),
            l = 2 ** (r - 1),
            c = BigInt(2 ** r - 1),
            f = 2 ** r,
            u = BigInt(r);
          for (let t = 0; t < a; t++) {
            let r = t * l,
              a = Number(e & c);
            (e >>= u), a > l && ((a -= f), (e += s));
            let h = r + Math.abs(a) - 1,
              d = t % 2 != 0,
              y = a < 0;
            0 === a ? (o = o.add(v(d, n[r]))) : (i = i.add(v(y, n[h])));
          }
          return { p: i, f: o };
        }
        multiply(e, t) {
          let r,
            n,
            i = M(e);
          if (g) {
            let { k1neg: e, k1: o, k2neg: a, k2: s } = d.splitScalar(i),
              { p: l, f: c } = this.wNAF(o, t),
              { p: f, f: u } = this.wNAF(s, t);
            (l = v(e, l)),
              (f = v(a, f)),
              (f = new m(N(f.x * d.beta), f.y, f.z)),
              (r = l.add(f)),
              (n = c.add(u));
          } else {
            let { p: e, f: o } = this.wNAF(i, t);
            (r = e), (n = o);
          }
          return m.normalizeZ([r, n])[0];
        }
        toAffine(e) {
          let { x: t, y: r, z: n } = this,
            i = this.equals(m.ZERO);
          null == e && (e = i ? f : $(n));
          let o = e,
            a = N(o * o),
            l = N(a * o),
            c = N(t * a),
            u = N(r * l),
            h = N(n * o);
          if (i) return E.ZERO;
          if (h !== s) throw Error("invZ was invalid");
          return new E(c, u);
        }
      }
      function v(e, t) {
        let r = t.negate();
        return e ? r : t;
      }
      (m.BASE = new m(u.Gx, u.Gy, s)), (m.ZERO = new m(a, s, a));
      let b = new WeakMap();
      class E {
        constructor(e, t) {
          (this.x = e), (this.y = t);
        }
        _setWindowSize(e) {
          (this._WINDOW_SIZE = e), b.delete(this);
        }
        hasEvenY() {
          return this.y % l === a;
        }
        static fromCompressedHex(e) {
          let t = 32 === e.length,
            r = U(t ? e : e.subarray(1));
          if (!z(r)) throw Error("Point is not on curve");
          let n = y(r),
            i = (function (e) {
              let { P: t } = u,
                r = BigInt(6),
                n = BigInt(11),
                i = BigInt(22),
                o = BigInt(23),
                a = BigInt(44),
                s = BigInt(88),
                f = (e * e * e) % t,
                h = (f * f * e) % t,
                d = (R(h, c) * h) % t,
                y = (R(d, c) * h) % t,
                g = (R(y, l) * f) % t,
                p = (R(g, n) * g) % t,
                w = (R(p, i) * p) % t,
                m = (R(w, a) * w) % t,
                v = (R(m, s) * m) % t,
                b = (R(v, a) * w) % t,
                E = (R(b, c) * h) % t,
                S = (R(E, o) * p) % t,
                x = (R(S, r) * f) % t,
                A = R(x, l);
              if ((A * A) % t !== e) throw Error("Cannot find square root");
              return A;
            })(n),
            o = (i & s) === s;
          if (t) o && (i = N(-i));
          else {
            let t = (1 & e[0]) == 1;
            t !== o && (i = N(-i));
          }
          let a = new E(r, i);
          return a.assertValidity(), a;
        }
        static fromUncompressedHex(e) {
          let t = U(e.subarray(1, 33)),
            r = U(e.subarray(33, 65)),
            n = new E(t, r);
          return n.assertValidity(), n;
        }
        static fromHex(e) {
          let t = k(e),
            r = t.length,
            n = t[0];
          if (32 === r || (33 === r && (2 === n || 3 === n)))
            return this.fromCompressedHex(t);
          if (65 === r && 4 === n) return this.fromUncompressedHex(t);
          throw Error(
            `Point.fromHex: received invalid point. Expected 32-33 compressed bytes or 65 uncompressed bytes, not ${r}`
          );
        }
        static fromPrivateKey(e) {
          return E.BASE.multiply(J(e));
        }
        static fromSignature(e, t, r) {
          let { r: n, s: i } = L(t);
          if (![0, 1, 2, 3].includes(r))
            throw Error("Cannot recover: invalid recovery bit");
          let o = q(k(e)),
            { n: a } = u,
            s = 2 === r || 3 === r ? n + a : n,
            l = $(s, a),
            c = N(-o * l, a),
            f = N(i * l, a),
            h = 1 & r ? "03" : "02",
            d = E.fromHex(h + C(s)),
            y = E.BASE.multiplyAndAddUnsafe(d, c, f);
          if (!y) throw Error("Cannot recover signature: point at infinify");
          return y.assertValidity(), y;
        }
        toRawBytes(e = !1) {
          return j(this.toHex(e));
        }
        toHex(e = !1) {
          let t = C(this.x);
          if (!e) return `04${t}${C(this.y)}`;
          {
            let e = this.hasEvenY() ? "02" : "03";
            return `${e}${t}`;
          }
        }
        toHexX() {
          return this.toHex(!0).slice(2);
        }
        toRawX() {
          return this.toRawBytes(!0).slice(1);
        }
        assertValidity() {
          let e = "Point is not on elliptic curve",
            { x: t, y: r } = this;
          if (!z(t) || !z(r)) throw Error(e);
          let n = N(r * r),
            i = y(t);
          if (N(n - i) !== a) throw Error(e);
        }
        equals(e) {
          return this.x === e.x && this.y === e.y;
        }
        negate() {
          return new E(this.x, N(-this.y));
        }
        double() {
          return m.fromAffine(this).double().toAffine();
        }
        add(e) {
          return m.fromAffine(this).add(m.fromAffine(e)).toAffine();
        }
        subtract(e) {
          return this.add(e.negate());
        }
        multiply(e) {
          return m.fromAffine(this).multiply(e, this).toAffine();
        }
        multiplyAndAddUnsafe(e, t, r) {
          let n = m.fromAffine(this),
            i =
              t === a || t === s || this !== E.BASE
                ? n.multiplyUnsafe(t)
                : n.multiply(t),
            o = m.fromAffine(e).multiplyUnsafe(r),
            l = i.add(o);
          return l.equals(m.ZERO) ? void 0 : l.toAffine();
        }
      }
      function S(e) {
        return Number.parseInt(e[0], 16) >= 8 ? "00" + e : e;
      }
      function x(e) {
        if (e.length < 2 || 2 !== e[0])
          throw Error(`Invalid signature integer tag: ${_(e)}`);
        let t = e[1],
          r = e.subarray(2, t + 2);
        if (!t || r.length !== t)
          throw Error("Invalid signature integer: wrong length");
        if (0 === r[0] && r[1] <= 127)
          throw Error("Invalid signature integer: trailing length");
        return { data: U(r), left: e.subarray(t + 2) };
      }
      (t.Point = E), (E.BASE = new E(u.Gx, u.Gy)), (E.ZERO = new E(a, a));
      class A {
        constructor(e, t) {
          (this.r = e), (this.s = t), this.assertValidity();
        }
        static fromCompact(e) {
          let t = e instanceof Uint8Array,
            r = "Signature.fromCompact";
          if ("string" != typeof e && !t)
            throw TypeError(`${r}: Expected string or Uint8Array`);
          let n = t ? _(e) : e;
          if (128 !== n.length) throw Error(`${r}: Expected 64-byte hex`);
          return new A(I(n.slice(0, 64)), I(n.slice(64, 128)));
        }
        static fromDER(e) {
          let t = e instanceof Uint8Array;
          if ("string" != typeof e && !t)
            throw TypeError("Signature.fromDER: Expected string or Uint8Array");
          let { r, s: n } = (function (e) {
            if (e.length < 2 || 48 != e[0])
              throw Error(`Invalid signature tag: ${_(e)}`);
            if (e[1] !== e.length - 2)
              throw Error("Invalid signature: incorrect length");
            let { data: t, left: r } = x(e.subarray(2)),
              { data: n, left: i } = x(r);
            if (i.length)
              throw Error(
                `Invalid signature: left bytes after parsing: ${_(i)}`
              );
            return { r: t, s: n };
          })(t ? e : j(e));
          return new A(r, n);
        }
        static fromHex(e) {
          return this.fromDER(e);
        }
        assertValidity() {
          let { r: e, s: t } = this;
          if (!K(e)) throw Error("Invalid Signature: r must be 0 < r < n");
          if (!K(t)) throw Error("Invalid Signature: s must be 0 < s < n");
        }
        hasHighS() {
          let e = u.n >> s;
          return this.s > e;
        }
        normalizeS() {
          return this.hasHighS() ? new A(this.r, N(-this.s, u.n)) : this;
        }
        toDERRawBytes() {
          return j(this.toDERHex());
        }
        toDERHex() {
          let e = S(T(this.s)),
            t = S(T(this.r)),
            r = e.length / 2,
            n = t.length / 2,
            i = T(r),
            o = T(n),
            a = T(n + r + 4);
          return `30${a}02${o}${t}02${i}${e}`;
        }
        toRawBytes() {
          return this.toDERRawBytes();
        }
        toHex() {
          return this.toDERHex();
        }
        toCompactRawBytes() {
          return j(this.toCompactHex());
        }
        toCompactHex() {
          return C(this.r) + C(this.s);
        }
      }
      function P(...e) {
        if (!e.every((e) => e instanceof Uint8Array))
          throw Error("Uint8Array list expected");
        if (1 === e.length) return e[0];
        let t = e.reduce((e, t) => e + t.length, 0),
          r = new Uint8Array(t);
        for (let t = 0, n = 0; t < e.length; t++) {
          let i = e[t];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      t.Signature = A;
      let B = Array.from({ length: 256 }, (e, t) =>
        t.toString(16).padStart(2, "0")
      );
      function _(e) {
        if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
        let t = "";
        for (let r = 0; r < e.length; r++) t += B[e[r]];
        return t;
      }
      let O = BigInt(
        "0x10000000000000000000000000000000000000000000000000000000000000000"
      );
      function C(e) {
        if ("bigint" != typeof e) throw Error("Expected bigint");
        if (!(a <= e && e < O)) throw Error("Expected number 0 <= n < 2^256");
        return e.toString(16).padStart(64, "0");
      }
      function H(e) {
        let t = j(C(e));
        if (32 !== t.length) throw Error("Error: expected 32 bytes");
        return t;
      }
      function T(e) {
        let t = e.toString(16);
        return 1 & t.length ? `0${t}` : t;
      }
      function I(e) {
        if ("string" != typeof e)
          throw TypeError("hexToNumber: expected string, got " + typeof e);
        return BigInt(`0x${e}`);
      }
      function j(e) {
        if ("string" != typeof e)
          throw TypeError("hexToBytes: expected string, got " + typeof e);
        if (e.length % 2)
          throw Error("hexToBytes: received invalid unpadded hex" + e.length);
        let t = new Uint8Array(e.length / 2);
        for (let r = 0; r < t.length; r++) {
          let n = 2 * r,
            i = e.slice(n, n + 2),
            o = Number.parseInt(i, 16);
          if (Number.isNaN(o) || o < 0) throw Error("Invalid byte sequence");
          t[r] = o;
        }
        return t;
      }
      function U(e) {
        return I(_(e));
      }
      function k(e) {
        return e instanceof Uint8Array ? Uint8Array.from(e) : j(e);
      }
      function M(e) {
        if ("number" == typeof e && Number.isSafeInteger(e) && e > 0)
          return BigInt(e);
        if ("bigint" == typeof e && K(e)) return e;
        throw TypeError("Expected valid private scalar: 0 < scalar < curve.n");
      }
      function N(e, t = u.P) {
        let r = e % t;
        return r >= a ? r : t + r;
      }
      function R(e, t) {
        let { P: r } = u,
          n = e;
        for (; t-- > a; ) (n *= n), (n %= r);
        return n;
      }
      function $(e, t = u.P) {
        if (e === a || t <= a)
          throw Error(
            `invert: expected positive integers, got n=${e} mod=${t}`
          );
        let r = N(e, t),
          n = t,
          i = a,
          o = s,
          l = s,
          c = a;
        for (; r !== a; ) {
          let e = n / r,
            t = n % r,
            a = i - l * e,
            s = o - c * e;
          (n = r), (r = t), (i = l), (o = c), (l = a), (c = s);
        }
        let f = n;
        if (f !== s) throw Error("invert: does not exist");
        return N(i, t);
      }
      function q(e, t = !1) {
        let r = (function (e) {
          let t = 8 * e.length - 256,
            r = U(e);
          return t > 0 ? r >> BigInt(t) : r;
        })(e);
        if (t) return r;
        let { n } = u;
        return r >= n ? r - n : r;
      }
      class D {
        constructor(e, t) {
          if (
            ((this.hashLen = e),
            (this.qByteLen = t),
            "number" != typeof e || e < 2)
          )
            throw Error("hashLen must be a number");
          if ("number" != typeof t || t < 2)
            throw Error("qByteLen must be a number");
          (this.v = new Uint8Array(e).fill(1)),
            (this.k = new Uint8Array(e).fill(0)),
            (this.counter = 0);
        }
        hmac(...e) {
          return t.utils.hmacSha256(this.k, ...e);
        }
        hmacSync(...e) {
          return i(this.k, ...e);
        }
        checkSync() {
          if ("function" != typeof i)
            throw new p("hmacSha256Sync needs to be set");
        }
        incr() {
          if (this.counter >= 1e3)
            throw Error("Tried 1,000 k values for sign(), all were invalid");
          this.counter += 1;
        }
        async reseed(e = new Uint8Array()) {
          (this.k = await this.hmac(this.v, Uint8Array.from([0]), e)),
            (this.v = await this.hmac(this.v)),
            0 !== e.length &&
              ((this.k = await this.hmac(this.v, Uint8Array.from([1]), e)),
              (this.v = await this.hmac(this.v)));
        }
        reseedSync(e = new Uint8Array()) {
          this.checkSync(),
            (this.k = this.hmacSync(this.v, Uint8Array.from([0]), e)),
            (this.v = this.hmacSync(this.v)),
            0 !== e.length &&
              ((this.k = this.hmacSync(this.v, Uint8Array.from([1]), e)),
              (this.v = this.hmacSync(this.v)));
        }
        async generate() {
          this.incr();
          let e = 0,
            t = [];
          for (; e < this.qByteLen; ) {
            this.v = await this.hmac(this.v);
            let r = this.v.slice();
            t.push(r), (e += this.v.length);
          }
          return P(...t);
        }
        generateSync() {
          this.checkSync(), this.incr();
          let e = 0,
            t = [];
          for (; e < this.qByteLen; ) {
            this.v = this.hmacSync(this.v);
            let r = this.v.slice();
            t.push(r), (e += this.v.length);
          }
          return P(...t);
        }
      }
      function K(e) {
        return a < e && e < u.n;
      }
      function z(e) {
        return a < e && e < u.P;
      }
      function W(e, t, r, n = !0) {
        let { n: i } = u,
          o = q(e, !0);
        if (!K(o)) return;
        let l = $(o, i),
          c = E.BASE.multiply(o),
          f = N(c.x, i);
        if (f === a) return;
        let h = N(l * N(t + r * f, i), i);
        if (h === a) return;
        let d = new A(f, h),
          y = (c.x === d.r ? 0 : 2) | Number(c.y & s);
        return (
          n && d.hasHighS() && ((d = d.normalizeS()), (y ^= 1)),
          { sig: d, recovery: y }
        );
      }
      function J(e) {
        let t;
        if ("bigint" == typeof e) t = e;
        else if ("number" == typeof e && Number.isSafeInteger(e) && e > 0)
          t = BigInt(e);
        else if ("string" == typeof e) {
          if (64 !== e.length) throw Error("Expected 32 bytes of private key");
          t = I(e);
        } else if (e instanceof Uint8Array) {
          if (32 !== e.length) throw Error("Expected 32 bytes of private key");
          t = U(e);
        } else throw TypeError("Expected valid private key");
        if (!K(t)) throw Error("Expected private key: 0 < key < n");
        return t;
      }
      function V(e) {
        return e instanceof E ? (e.assertValidity(), e) : E.fromHex(e);
      }
      function L(e) {
        if (e instanceof A) return e.assertValidity(), e;
        try {
          return A.fromDER(e);
        } catch (t) {
          return A.fromCompact(e);
        }
      }
      function Z(e) {
        let t = e instanceof Uint8Array,
          r = "string" == typeof e,
          n = (t || r) && e.length;
        return t
          ? 33 === n || 65 === n
          : r
          ? 66 === n || 130 === n
          : e instanceof E;
      }
      function F(e) {
        let t = e.length > 32 ? e.slice(0, 32) : e;
        return U(t);
      }
      function G(e, r, n) {
        if (null == e)
          throw Error(`sign: expected valid message hash, not "${e}"`);
        let i = k(e),
          o = J(r),
          s = [
            H(o),
            (function (e) {
              var t;
              let r = F(e),
                n = N(r, u.n);
              return H(n < a ? r : n);
            })(i),
          ];
        if (null != n) {
          !0 === n && (n = t.utils.randomBytes(32));
          let e = k(n);
          if (32 !== e.length)
            throw Error("sign: Expected 32 bytes of extra data");
          s.push(e);
        }
        let l = P(...s),
          c = F(i);
        return { seed: l, m: c, d: o };
      }
      function X(e, t) {
        let { sig: r, recovery: n } = e,
          { der: i, recovered: o } = Object.assign(
            { canonical: !0, der: !0 },
            t
          ),
          a = i ? r.toDERRawBytes() : r.toCompactRawBytes();
        return o ? [a, n] : a;
      }
      async function Y(e, t, r = {}) {
        let n;
        let { seed: i, m: o, d: a } = G(e, t, r.extraEntropy),
          s = new D(32, 32);
        for (
          await s.reseed(i);
          !(n = W(await s.generate(), o, a, r.canonical));

        )
          await s.reseed();
        return X(n, r);
      }
      (t.getPublicKey = function (e, t = !1) {
        return E.fromPrivateKey(e).toRawBytes(t);
      }),
        (t.recoverPublicKey = function (e, t, r, n = !1) {
          return E.fromSignature(e, t, r).toRawBytes(n);
        }),
        (t.getSharedSecret = function (e, t, r = !1) {
          if (Z(e))
            throw TypeError("getSharedSecret: first arg must be private key");
          if (!Z(t))
            throw TypeError("getSharedSecret: second arg must be public key");
          let n = V(t);
          return n.assertValidity(), n.multiply(J(e)).toRawBytes(r);
        }),
        (t.sign = Y),
        (t.signSync = function (e, t, r = {}) {
          let n;
          let { seed: i, m: o, d: a } = G(e, t, r.extraEntropy),
            s = new D(32, 32);
          for (s.reseedSync(i); !(n = W(s.generateSync(), o, a, r.canonical)); )
            s.reseedSync();
          return X(n, r);
        });
      let Q = { strict: !0 };
      function ee(e) {
        return N(U(e), u.n);
      }
      t.verify = function (e, t, r, n = Q) {
        let i, o;
        try {
          (i = L(e)), (t = k(t));
        } catch (e) {
          return !1;
        }
        let { r: a, s } = i;
        if (n.strict && i.hasHighS()) return !1;
        let l = q(t);
        try {
          o = V(r);
        } catch (e) {
          return !1;
        }
        let { n: c } = u,
          f = $(s, c),
          h = N(l * f, c),
          d = N(a * f, c),
          y = E.BASE.multiplyAndAddUnsafe(o, h, d);
        if (!y) return !1;
        let g = N(y.x, c);
        return g === a;
      };
      class et {
        constructor(e, t) {
          (this.r = e), (this.s = t), this.assertValidity();
        }
        static fromHex(e) {
          let t = k(e);
          if (64 !== t.length)
            throw TypeError(
              `SchnorrSignature.fromHex: expected 64 bytes, not ${t.length}`
            );
          let r = U(t.subarray(0, 32)),
            n = U(t.subarray(32, 64));
          return new et(r, n);
        }
        assertValidity() {
          let { r: e, s: t } = this;
          if (!z(e) || !K(t)) throw Error("Invalid signature");
        }
        toHex() {
          return C(this.r) + C(this.s);
        }
        toRawBytes() {
          return j(this.toHex());
        }
      }
      class er {
        constructor(e, r, n = t.utils.randomBytes()) {
          if (null == e)
            throw TypeError(`sign: Expected valid message, not "${e}"`);
          this.m = k(e);
          let { x: i, scalar: o } = this.getScalar(J(r));
          if (
            ((this.px = i),
            (this.d = o),
            (this.rand = k(n)),
            32 !== this.rand.length)
          )
            throw TypeError("sign: Expected 32 bytes of aux randomness");
        }
        getScalar(e) {
          let t = E.fromPrivateKey(e),
            r = t.hasEvenY() ? e : u.n - e;
          return { point: t, scalar: r, x: t.toRawX() };
        }
        initNonce(e, t) {
          return H(e ^ U(t));
        }
        finalizeNonce(e) {
          let t = N(U(e), u.n);
          if (t === a)
            throw Error("sign: Creation of signature failed. k is zero");
          let { point: r, x: n, scalar: i } = this.getScalar(t);
          return { R: r, rx: n, k: i };
        }
        finalizeSig(e, t, r, n) {
          return new et(e.x, N(t + r * n, u.n)).toRawBytes();
        }
        error() {
          throw Error("sign: Invalid signature produced");
        }
        async calc() {
          let { m: e, d: r, px: n, rand: i } = this,
            o = t.utils.taggedHash,
            a = this.initNonce(r, await o(ec.aux, i)),
            {
              R: s,
              rx: l,
              k: c,
            } = this.finalizeNonce(await o(ec.nonce, a, n, e)),
            f = ee(await o(ec.challenge, l, n, e)),
            u = this.finalizeSig(s, c, f, r);
          return (await ea(u, e, n)) || this.error(), u;
        }
        calcSync() {
          let { m: e, d: r, px: n, rand: i } = this,
            o = t.utils.taggedHashSync,
            a = this.initNonce(r, o(ec.aux, i)),
            { R: s, rx: l, k: c } = this.finalizeNonce(o(ec.nonce, a, n, e)),
            f = ee(o(ec.challenge, l, n, e)),
            u = this.finalizeSig(s, c, f, r);
          return es(u, e, n) || this.error(), u;
        }
      }
      async function en(e, t, r) {
        return new er(e, t, r).calc();
      }
      function ei(e, t, r) {
        let n = e instanceof et,
          i = n ? e : et.fromHex(e);
        return n && i.assertValidity(), { ...i, m: k(t), P: V(r) };
      }
      function eo(e, t, r, n) {
        let i = E.BASE.multiplyAndAddUnsafe(t, J(r), N(-n, u.n));
        return !!(i && i.hasEvenY()) && i.x === e;
      }
      async function ea(e, r, n) {
        try {
          let { r: i, s: o, m: a, P: s } = ei(e, r, n),
            l = ee(await t.utils.taggedHash(ec.challenge, H(i), s.toRawX(), a));
          return eo(i, s, o, l);
        } catch (e) {
          return !1;
        }
      }
      function es(e, r, n) {
        try {
          let { r: i, s: o, m: a, P: s } = ei(e, r, n),
            l = ee(t.utils.taggedHashSync(ec.challenge, H(i), s.toRawX(), a));
          return eo(i, s, o, l);
        } catch (e) {
          if (e instanceof p) throw e;
          return !1;
        }
      }
      (t.schnorr = {
        Signature: et,
        getPublicKey: function (e) {
          return E.fromPrivateKey(e).toRawX();
        },
        sign: en,
        verify: ea,
        signSync: function (e, t, r) {
          return new er(e, t, r).calcSync();
        },
        verifySync: es,
      }),
        E.BASE._setWindowSize(8);
      let el = {
          node: o,
          web:
            "object" == typeof self && "crypto" in self ? self.crypto : void 0,
        },
        ec = {
          challenge: "BIP0340/challenge",
          aux: "BIP0340/aux",
          nonce: "BIP0340/nonce",
        },
        ef = {};
      (t.utils = {
        bytesToHex: _,
        hexToBytes: j,
        concatBytes: P,
        mod: N,
        invert: $,
        isValidPrivateKey(e) {
          try {
            return J(e), !0;
          } catch (e) {
            return !1;
          }
        },
        _bigintTo32Bytes: H,
        _normalizePrivateKey: J,
        hashToPrivateKey: (e) => {
          if ((e = k(e)).length < 40 || e.length > 1024)
            throw Error("Expected valid bytes of private key as per FIPS 186");
          let t = N(U(e), u.n - s) + s;
          return H(t);
        },
        randomBytes: (e = 32) => {
          if (el.web) return el.web.getRandomValues(new Uint8Array(e));
          if (el.node) {
            let { randomBytes: t } = el.node;
            return Uint8Array.from(t(e));
          }
          throw Error("The environment doesn't have randomBytes function");
        },
        randomPrivateKey: () =>
          t.utils.hashToPrivateKey(t.utils.randomBytes(40)),
        precompute(e = 8, t = E.BASE) {
          let r = t === E.BASE ? t : new E(t.x, t.y);
          return r._setWindowSize(e), r.multiply(c), r;
        },
        sha256: async (...e) => {
          if (el.web) {
            let t = await el.web.subtle.digest("SHA-256", P(...e));
            return new Uint8Array(t);
          }
          if (el.node) {
            let { createHash: t } = el.node,
              r = t("sha256");
            return e.forEach((e) => r.update(e)), Uint8Array.from(r.digest());
          }
          throw Error("The environment doesn't have sha256 function");
        },
        hmacSha256: async (e, ...t) => {
          if (el.web) {
            let r = await el.web.subtle.importKey(
                "raw",
                e,
                { name: "HMAC", hash: { name: "SHA-256" } },
                !1,
                ["sign"]
              ),
              n = P(...t),
              i = await el.web.subtle.sign("HMAC", r, n);
            return new Uint8Array(i);
          }
          if (el.node) {
            let { createHmac: r } = el.node,
              n = r("sha256", e);
            return t.forEach((e) => n.update(e)), Uint8Array.from(n.digest());
          }
          throw Error("The environment doesn't have hmac-sha256 function");
        },
        sha256Sync: void 0,
        hmacSha256Sync: void 0,
        taggedHash: async (e, ...r) => {
          let n = ef[e];
          if (void 0 === n) {
            let r = await t.utils.sha256(
              Uint8Array.from(e, (e) => e.charCodeAt(0))
            );
            (n = P(r, r)), (ef[e] = n);
          }
          return t.utils.sha256(n, ...r);
        },
        taggedHashSync: (e, ...t) => {
          if ("function" != typeof n)
            throw new p("sha256Sync is undefined, you need to set it");
          let r = ef[e];
          if (void 0 === r) {
            let t = n(Uint8Array.from(e, (e) => e.charCodeAt(0)));
            (r = P(t, t)), (ef[e] = r);
          }
          return n(r, ...t);
        },
        _JacobianPoint: m,
      }),
        Object.defineProperties(t.utils, {
          sha256Sync: {
            configurable: !1,
            get: () => n,
            set(e) {
              n || (n = e);
            },
          },
          hmacSha256Sync: {
            configurable: !1,
            get: () => i,
            set(e) {
              i || (i = e);
            },
          },
        });
    },
    55764: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decode = t.encode = t.unescape = t.escape = t.pad = void 0);
      let n = r(79742);
      function i(e) {
        return `${e}${"=".repeat(4 - (e.length % 4 || 4))}`;
      }
      function o(e) {
        return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
      }
      function a(e) {
        return i(e).replace(/-/g, "+").replace(/_/g, "/");
      }
      (t.pad = i),
        (t.escape = o),
        (t.unescape = a),
        (t.encode = function (e) {
          return o((0, n.fromByteArray)(new TextEncoder().encode(e)));
        }),
        (t.decode = function (e) {
          return new TextDecoder().decode((0, n.toByteArray)(i(a(e))));
        });
    },
    17803: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cryptoClients = t.SECP256K1Client = void 0);
      let n = r(75118);
      Object.defineProperty(t, "SECP256K1Client", {
        enumerable: !0,
        get: function () {
          return n.SECP256K1Client;
        },
      });
      let i = { ES256K: n.SECP256K1Client };
      t.cryptoClients = i;
    },
    75118: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SECP256K1Client = void 0);
      let n = r(79569),
        i = r(23061),
        o = r(79656),
        a = r(90563),
        s = r(79581),
        l = r(98089);
      o.utils.hmacSha256Sync = (e, ...t) => {
        let r = n.hmac.create(i.sha256, e);
        return t.forEach((e) => r.update(e)), r.digest();
      };
      class c {
        static derivePublicKey(e, t = !0) {
          return (
            66 === e.length && (e = e.slice(0, 64)),
            e.length < 64 && (e = e.padStart(64, "0")),
            (0, l.bytesToHex)(o.getPublicKey(e, t))
          );
        }
        static signHash(e, t, r = "jose") {
          if (!e || !t)
            throw new s.MissingParametersError(
              "a signing input hash and private key are all required"
            );
          let n = o.signSync(e, t.slice(0, 64), { der: !0, canonical: !1 });
          if ("der" === r) return (0, l.bytesToHex)(n);
          if ("jose" === r) return (0, a.derToJose)(n, "ES256");
          throw Error("Invalid signature format");
        }
        static loadSignature(e) {
          return (0, a.joseToDer)(e, "ES256");
        }
        static verifyHash(e, t, r) {
          if (!e || !t || !r)
            throw new s.MissingParametersError(
              "a signing input hash, der signature, and public key are all required"
            );
          return o.verify(t, e, r, { strict: !1 });
        }
      }
      (t.SECP256K1Client = c), (c.algorithmName = "ES256K");
    },
    62674: function (e, t, r) {
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function a(e) {
              try {
                l(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })
                  ).then(a, s);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.hashSha256Async = t.hashSha256 = void 0);
      let i = r(23061);
      function o(e) {
        return (0, i.sha256)(e);
      }
      (t.hashSha256 = o),
        (t.hashSha256Async = function (e) {
          return n(this, void 0, void 0, function* () {
            try {
              let t = "undefined" != typeof crypto && void 0 !== crypto.subtle;
              if (t) {
                let t = "string" == typeof e ? new TextEncoder().encode(e) : e,
                  r = yield crypto.subtle.digest("SHA-256", t);
                return new Uint8Array(r);
              }
              {
                let t = r(18971);
                if (!t.createHash)
                  throw Error("`crypto` module does not contain `createHash`");
                return Promise.resolve(
                  t.createHash("sha256").update(e).digest()
                );
              }
            } catch (t) {
              return (
                console.log(t),
                console.log(
                  'Crypto lib not found. Neither the global `crypto.subtle` Web Crypto API, nor the or the Node.js `require("crypto").createHash` module is available. Falling back to JS implementation.'
                ),
                Promise.resolve(o(e))
              );
            }
          });
        });
    },
    43891: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.decodeToken = void 0);
      let n = r(55764);
      t.decodeToken = function (e) {
        if ("string" == typeof e) {
          let t = e.split("."),
            r = JSON.parse(n.decode(t[0])),
            i = JSON.parse(n.decode(t[1])),
            o = t[2];
          return { header: r, payload: i, signature: o };
        }
        if ("object" == typeof e) {
          if ("string" != typeof e.payload)
            throw Error("Expected token payload to be a base64 or json string");
          let t = e.payload;
          "{" !== e.payload[0] && (t = n.decode(t));
          let r = [];
          return (
            e.header.map((e) => {
              let t = JSON.parse(n.decode(e));
              r.push(t);
            }),
            { header: r, payload: JSON.parse(t), signature: e.signature }
          );
        }
      };
    },
    90563: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.joseToDer = t.derToJose = void 0);
      let n = r(79742),
        i = r(55764);
      function o(e) {
        return ((e / 8) | 0) + (e % 8 == 0 ? 0 : 1);
      }
      let a = { ES256: o(256), ES384: o(384), ES512: o(521) };
      function s(e) {
        let t = a[e];
        if (t) return t;
        throw Error(`Unknown algorithm "${e}"`);
      }
      function l(e) {
        if (e instanceof Uint8Array) return e;
        if ("string" == typeof e) return (0, n.toByteArray)((0, i.pad)(e));
        throw TypeError(
          "ECDSA signature must be a Base64 string or a Uint8Array"
        );
      }
      function c(e, t, r) {
        let n = 0;
        for (; t + n < r && 0 === e[t + n]; ) ++n;
        let i = e[t + n] >= 128;
        return i && --n, n;
      }
      (t.derToJose = function (e, t) {
        let r = l(e),
          o = s(t),
          a = o + 1,
          c = r.length,
          f = 0;
        if (48 !== r[f++]) throw Error('Could not find expected "seq"');
        let u = r[f++];
        if ((129 === u && (u = r[f++]), c - f < u))
          throw Error(
            `"seq" specified length of "${u}", only "${c - f}" remaining`
          );
        if (2 !== r[f++]) throw Error('Could not find expected "int" for "r"');
        let h = r[f++];
        if (c - f - 2 < h)
          throw Error(
            `"r" specified length of "${h}", only "${c - f - 2}" available`
          );
        if (a < h)
          throw Error(
            `"r" specified length of "${h}", max of "${a}" is acceptable`
          );
        let d = f;
        if (((f += h), 2 !== r[f++]))
          throw Error('Could not find expected "int" for "s"');
        let y = r[f++];
        if (c - f !== y)
          throw Error(`"s" specified length of "${y}", expected "${c - f}"`);
        if (a < y)
          throw Error(
            `"s" specified length of "${y}", max of "${a}" is acceptable`
          );
        let g = f;
        if ((f += y) !== c)
          throw Error(
            `Expected to consume entire array, but "${c - f}" bytes remain`
          );
        let p = o - h,
          w = o - y,
          m = new Uint8Array(p + h + w + y);
        for (f = 0; f < p; ++f) m[f] = 0;
        m.set(r.subarray(d + Math.max(-p, 0), d + h), f), (f = o);
        for (let e = f; f < e + w; ++f) m[f] = 0;
        return (
          m.set(r.subarray(g + Math.max(-w, 0), g + y), f),
          (0, i.escape)((0, n.fromByteArray)(m))
        );
      }),
        (t.joseToDer = function (e, t) {
          e = l(e);
          let r = s(t),
            n = e.length;
          if (n !== 2 * r)
            throw TypeError(
              `"${t}" signatures must be "${2 * r}" bytes, saw "${n}"`
            );
          let i = c(e, 0, r),
            o = c(e, r, e.length),
            a = r - i,
            f = r - o,
            u = 2 + a + 1 + 1 + f,
            h = u < 128,
            d = new Uint8Array((h ? 2 : 3) + u),
            y = 0;
          return (
            (d[y++] = 48),
            h ? (d[y++] = u) : ((d[y++] = 129), (d[y++] = 255 & u)),
            (d[y++] = 2),
            (d[y++] = a),
            i < 0
              ? ((d[y++] = 0), d.set(e.subarray(0, r), y), (y += r))
              : (d.set(e.subarray(i, r), y), (y += r - i)),
            (d[y++] = 2),
            (d[y++] = f),
            o < 0
              ? ((d[y++] = 0), d.set(e.subarray(r), y))
              : d.set(e.subarray(r + o), y),
            d
          );
        });
    },
    79581: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.InvalidTokenError = t.MissingParametersError = void 0),
        (t.MissingParametersError = class extends Error {
          constructor(e) {
            super(),
              (this.name = "MissingParametersError"),
              (this.message = e || "");
          }
        }),
        (t.InvalidTokenError = class extends Error {
          constructor(e) {
            super(),
              (this.name = "InvalidTokenError"),
              (this.message = e || "");
          }
        });
    },
    56080: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(42298), t),
        i(r(93523), t),
        i(r(43891), t),
        i(r(79581), t),
        i(r(17803), t);
    },
    42298: function (e, t, r) {
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function a(e) {
              try {
                l(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                l(n.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function l(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value) instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })
                  ).then(a, s);
            }
            l((n = n.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TokenSigner = t.createUnsecuredToken = void 0);
      let i = r(55764),
        o = r(17803),
        a = r(79581),
        s = r(62674);
      function l(e, t) {
        let r = [],
          n = i.encode(JSON.stringify(t));
        r.push(n);
        let o = i.encode(JSON.stringify(e));
        r.push(o);
        let a = r.join(".");
        return a;
      }
      (t.createUnsecuredToken = function (e) {
        return l(e, { typ: "JWT", alg: "none" }) + ".";
      }),
        (t.TokenSigner = class {
          constructor(e, t) {
            if (!(e && t))
              throw new a.MissingParametersError(
                "a signing algorithm and private key are required"
              );
            if ("string" != typeof e)
              throw Error("signing algorithm parameter must be a string");
            if (((e = e.toUpperCase()), !o.cryptoClients.hasOwnProperty(e)))
              throw Error("invalid signing algorithm");
            (this.tokenType = "JWT"),
              (this.cryptoClient = o.cryptoClients[e]),
              (this.rawPrivateKey = t);
          }
          header(e = {}) {
            let t = {
              typ: this.tokenType,
              alg: this.cryptoClient.algorithmName,
            };
            return Object.assign({}, t, e);
          }
          sign(e, t = !1, r = {}) {
            let n = this.header(r),
              i = l(e, n),
              o = (0, s.hashSha256)(i);
            return this.createWithSignedHash(e, t, n, i, o);
          }
          signAsync(e, t = !1, r = {}) {
            return n(this, void 0, void 0, function* () {
              let n = this.header(r),
                i = l(e, n),
                o = yield (0, s.hashSha256Async)(i);
              return this.createWithSignedHash(e, t, n, i, o);
            });
          }
          createWithSignedHash(e, t, r, n, o) {
            let a = this.cryptoClient.signHash(o, this.rawPrivateKey);
            if (!t) return [n, a].join(".");
            {
              let t = {
                header: [i.encode(JSON.stringify(r))],
                payload: JSON.stringify(e),
                signature: [a],
              };
              return t;
            }
          }
        });
    },
    93523: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TokenVerifier = void 0);
      let n = r(55764),
        i = r(17803),
        o = r(79581),
        a = r(62674);
      t.TokenVerifier = class {
        constructor(e, t) {
          if (!(e && t))
            throw new o.MissingParametersError(
              "a signing algorithm and public key are required"
            );
          if ("string" != typeof e)
            throw "signing algorithm parameter must be a string";
          if (((e = e.toUpperCase()), !i.cryptoClients.hasOwnProperty(e)))
            throw "invalid signing algorithm";
          (this.tokenType = "JWT"),
            (this.cryptoClient = i.cryptoClients[e]),
            (this.rawPublicKey = t);
        }
        verify(e) {
          return "string" == typeof e
            ? this.verifyCompact(e, !1)
            : "object" == typeof e && this.verifyExpanded(e, !1);
        }
        verifyAsync(e) {
          return "string" == typeof e
            ? this.verifyCompact(e, !0)
            : "object" == typeof e
            ? this.verifyExpanded(e, !0)
            : Promise.resolve(!1);
        }
        verifyCompact(e, t) {
          let r = e.split("."),
            n = r[0] + "." + r[1],
            i = (e) => {
              let t = this.cryptoClient.loadSignature(r[2]);
              return this.cryptoClient.verifyHash(e, t, this.rawPublicKey);
            };
          if (t) return (0, a.hashSha256Async)(n).then((e) => i(e));
          {
            let e = (0, a.hashSha256)(n);
            return i(e);
          }
        }
        verifyExpanded(e, t) {
          let r = [e.header.join("."), n.encode(e.payload)].join("."),
            i = !0,
            o = (t) => (
              e.signature.map((e) => {
                let r = this.cryptoClient.loadSignature(e),
                  n = this.cryptoClient.verifyHash(t, r, this.rawPublicKey);
                n || (i = !1);
              }),
              i
            );
          if (t) return (0, a.hashSha256Async)(r).then((e) => o(e));
          {
            let e = (0, a.hashSha256)(r);
            return o(e);
          }
        }
      };
    },
    90530: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        i(r(22859), t),
        i(r(22337), t),
        i(r(36497), t),
        i(r(15248), t),
        i(r(18617), t),
        i(r(88715), t);
    },
    22859: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getAddress = void 0);
      let o = r(56080),
        a = r(36497),
        s = async (e) => {
          let { getProvider: t = a.getDefaultProvider } = e,
            r = await t();
          if (!r) throw Error("No Bitcoin wallet installed");
          let { purposes: n } = e.payload;
          if (!n) throw Error("Address purposes are required");
          try {
            let t = (0, o.createUnsecuredToken)(e.payload),
              n = await r.connect(t);
            e.onFinish?.(n);
          } catch (t) {
            console.error("[Connect] Error during address request", t),
              e.onCancel?.();
          }
        };
      (t.getAddress = s), i(r(74252), t);
    },
    74252: function (e, t) {
      var r;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AddressPurposes = void 0),
        ((r = t.AddressPurposes || (t.AddressPurposes = {})).PAYMENT =
          "payment"),
        (r.ORDINALS = "ordinals");
    },
    22337: function (e, t, r) {
      var n;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.callWalletPopup = t.CallMethod = void 0);
      let i = r(56080),
        o = r(36497);
      ((n = t.CallMethod || (t.CallMethod = {})).SIGN_TRANSACTION =
        "signTransaction"),
        (n.GET_ADDRESS = "getAddress");
      let a = async (e) => {
        let { getProvider: t = o.getDefaultProvider } = e,
          r = await t();
        if (!r) throw Error("No Bitcoin wallet installed");
        let { method: n } = e.payload;
        if (!n) throw Error("A wallet method is required");
        let a = (0, i.createUnsecuredToken)(e.payload);
        try {
          let t = await r.call(a);
          e.onFinish?.(t);
        } catch (t) {
          console.error("[Connect] Error during call request", t),
            e.onCancel?.();
        }
      };
      t.callWalletPopup = a;
    },
    36497: function (e, t) {
      async function r() {
        return window.BitcoinProvider;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDefaultProvider = void 0),
        (t.getDefaultProvider = r);
    },
    15248: function (e, t, r) {
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (!i ||
                  ("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) &&
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__exportStar) ||
          function (e, t) {
            for (var r in e)
              "default" === r ||
                Object.prototype.hasOwnProperty.call(t, r) ||
                n(t, e, r);
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.signMessage = void 0);
      let o = r(56080),
        a = r(36497),
        s = async (e) => {
          let { getProvider: t = a.getDefaultProvider } = e,
            r = await t();
          if (!r) throw Error("No Bitcoin wallet installed");
          let { address: n, message: i } = e.payload;
          if (!n) throw Error("An address is required to sign a message");
          if (!i) throw Error("A message to be signed is required");
          try {
            let t = (0, o.createUnsecuredToken)(e.payload),
              n = await r.signMessage(t);
            e.onFinish?.(n);
          } catch (t) {
            console.error("[Connect] Error during sign message request", t),
              e.onCancel?.();
          }
        };
      (t.signMessage = s), i(r(82292), t);
    },
    82292: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    },
    18617: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendBtcTransaction = void 0);
      let n = r(56080),
        i = r(36497),
        o = async (e) => {
          let { getProvider: t = i.getDefaultProvider } = e,
            r = await t();
          if (!r) throw Error("No Bitcoin wallet installed");
          let { recipients: o, senderAddress: a } = e.payload;
          if (!o || 0 === o.length)
            throw Error("At least one recipient is required");
          if (!a) throw Error("The sender address is required");
          try {
            let t = (0, n.createUnsecuredToken)(e.payload),
              i = await r.sendBtcTransaction(t);
            e.onFinish?.(i);
          } catch (t) {
            console.error(
              "[Connect] Error during send BTC transaction request",
              t
            ),
              e.onCancel?.();
          }
        };
      t.sendBtcTransaction = o;
    },
    88715: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.signTransaction = void 0);
      let n = r(56080),
        i = r(36497),
        o = async (e) => {
          let { getProvider: t = i.getDefaultProvider } = e,
            r = await t();
          if (!r) throw Error("No Bitcoin wallet installed");
          let { psbtBase64: o, inputsToSign: a } = e.payload;
          if (!o)
            throw Error(
              "A value for psbtBase64 representing the tx hash is required"
            );
          if (!a)
            throw Error(
              "An array specifying the inputs to be signed by the wallet is required"
            );
          try {
            let t = (0, n.createUnsecuredToken)(e.payload),
              i = await r.signTransaction(t);
            e.onFinish?.(i);
          } catch (t) {
            console.error("[Connect] Error during sign transaction request", t),
              e.onCancel?.();
          }
        };
      t.signTransaction = o;
    },
  },
]);
