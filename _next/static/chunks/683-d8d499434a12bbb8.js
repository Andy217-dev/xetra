(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [683],
  {
    4459: function (t, e, r) {
      "use strict";
      (e._O = e.Jq = e.KB = e.u8 = e.cv = void 0),
        (e.Ik = e.A9 = e.n_ = e.gM = void 0);
      let n = r(9109);
      function i(t) {
        if (!(t instanceof Uint8Array))
          throw TypeError("b must be a Uint8Array");
      }
      function o(t) {
        return i(t), n.Buffer.from(t.buffer, t.byteOffset, t.length);
      }
      class s {
        constructor(t, e) {
          if (!Number.isInteger(t)) throw TypeError("span must be an integer");
          (this.span = t), (this.property = e);
        }
        makeDestinationObject() {
          return {};
        }
        getSpan(t, e) {
          if (0 > this.span) throw RangeError("indeterminate span");
          return this.span;
        }
        replicate(t) {
          let e = Object.create(this.constructor.prototype);
          return Object.assign(e, this), (e.property = t), e;
        }
        fromArray(t) {}
      }
      function a(t, e) {
        return e.property ? t + "[" + e.property + "]" : t;
      }
      class u extends s {
        isCount() {
          throw Error("ExternalLayout is abstract");
        }
      }
      class h extends u {
        constructor(t, e = 0, r) {
          if (!(t instanceof s)) throw TypeError("layout must be a Layout");
          if (!Number.isInteger(e))
            throw TypeError("offset must be integer or undefined");
          super(t.span, r || t.property), (this.layout = t), (this.offset = e);
        }
        isCount() {
          return this.layout instanceof l || this.layout instanceof f;
        }
        decode(t, e = 0) {
          return this.layout.decode(t, e + this.offset);
        }
        encode(t, e, r = 0) {
          return this.layout.encode(t, e, r + this.offset);
        }
      }
      class l extends s {
        constructor(t, e) {
          if ((super(t, e), 6 < this.span))
            throw RangeError("span must not exceed 6 bytes");
        }
        decode(t, e = 0) {
          return o(t).readUIntLE(e, this.span);
        }
        encode(t, e, r = 0) {
          return o(e).writeUIntLE(t, r, this.span), this.span;
        }
      }
      class f extends s {
        constructor(t, e) {
          if ((super(t, e), 6 < this.span))
            throw RangeError("span must not exceed 6 bytes");
        }
        decode(t, e = 0) {
          return o(t).readUIntBE(e, this.span);
        }
        encode(t, e, r = 0) {
          return o(e).writeUIntBE(t, r, this.span), this.span;
        }
      }
      function c(t) {
        let e = Math.floor(t / 4294967296);
        return { hi32: e, lo32: t - 4294967296 * e };
      }
      function d(t, e) {
        return 4294967296 * t + e;
      }
      class p extends s {
        constructor(t) {
          super(8, t);
        }
        decode(t, e = 0) {
          let r = o(t),
            n = r.readUInt32LE(e);
          return d(r.readUInt32LE(e + 4), n);
        }
        encode(t, e, r = 0) {
          let n = c(t),
            i = o(e);
          return i.writeUInt32LE(n.lo32, r), i.writeUInt32LE(n.hi32, r + 4), 8;
        }
      }
      class m extends s {
        constructor(t) {
          super(8, t);
        }
        decode(t, e = 0) {
          let r = o(t),
            n = r.readUInt32LE(e);
          return d(r.readInt32LE(e + 4), n);
        }
        encode(t, e, r = 0) {
          let n = c(t),
            i = o(e);
          return i.writeUInt32LE(n.lo32, r), i.writeInt32LE(n.hi32, r + 4), 8;
        }
      }
      class g extends s {
        constructor(t, e, r) {
          if (!(t instanceof s))
            throw TypeError("elementLayout must be a Layout");
          if (
            !(
              (e instanceof u && e.isCount()) ||
              (Number.isInteger(e) && 0 <= e)
            )
          )
            throw TypeError(
              "count must be non-negative integer or an unsigned integer ExternalLayout"
            );
          let n = -1;
          e instanceof u || !(0 < t.span) || (n = e * t.span),
            super(n, r),
            (this.elementLayout = t),
            (this.count = e);
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = 0,
            n = this.count;
          if (
            (n instanceof u && (n = n.decode(t, e)),
            0 < this.elementLayout.span)
          )
            r = n * this.elementLayout.span;
          else {
            let i = 0;
            for (; i < n; ) (r += this.elementLayout.getSpan(t, e + r)), ++i;
          }
          return r;
        }
        decode(t, e = 0) {
          let r = [],
            n = 0,
            i = this.count;
          for (i instanceof u && (i = i.decode(t, e)); n < i; )
            r.push(this.elementLayout.decode(t, e)),
              (e += this.elementLayout.getSpan(t, e)),
              (n += 1);
          return r;
        }
        encode(t, e, r = 0) {
          let n = this.elementLayout,
            i = t.reduce((t, i) => t + n.encode(i, e, r + t), 0);
          return (
            this.count instanceof u && this.count.encode(t.length, e, r), i
          );
        }
      }
      class y extends s {
        constructor(t, e, r) {
          if (
            !(Array.isArray(t) && t.reduce((t, e) => t && e instanceof s, !0))
          )
            throw TypeError("fields must be array of Layout instances");
          for (let n of ("boolean" == typeof e &&
            void 0 === r &&
            ((r = e), (e = void 0)),
          t))
            if (0 > n.span && void 0 === n.property)
              throw Error(
                "fields cannot contain unnamed variable-length layout"
              );
          let n = -1;
          try {
            n = t.reduce((t, e) => t + e.getSpan(), 0);
          } catch (t) {}
          super(n, e), (this.fields = t), (this.decodePrefixes = !!r);
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = 0;
          try {
            r = this.fields.reduce((r, n) => {
              let i = n.getSpan(t, e);
              return (e += i), r + i;
            }, 0);
          } catch (t) {
            throw RangeError("indeterminate span");
          }
          return r;
        }
        decode(t, e = 0) {
          i(t);
          let r = this.makeDestinationObject();
          for (let n of this.fields)
            if (
              (void 0 !== n.property && (r[n.property] = n.decode(t, e)),
              (e += n.getSpan(t, e)),
              this.decodePrefixes && t.length === e)
            )
              break;
          return r;
        }
        encode(t, e, r = 0) {
          let n = r,
            i = 0,
            o = 0;
          for (let n of this.fields) {
            let s = n.span;
            if (((o = 0 < s ? s : 0), void 0 !== n.property)) {
              let i = t[n.property];
              void 0 !== i &&
                ((o = n.encode(i, e, r)), 0 > s && (s = n.getSpan(e, r)));
            }
            (i = r), (r += s);
          }
          return i + o - n;
        }
        fromArray(t) {
          let e = this.makeDestinationObject();
          for (let r of this.fields)
            void 0 !== r.property &&
              0 < t.length &&
              (e[r.property] = t.shift());
          return e;
        }
        layoutFor(t) {
          if ("string" != typeof t) throw TypeError("property must be string");
          for (let e of this.fields) if (e.property === t) return e;
        }
        offsetOf(t) {
          if ("string" != typeof t) throw TypeError("property must be string");
          let e = 0;
          for (let r of this.fields) {
            if (r.property === t) return e;
            0 > r.span ? (e = -1) : 0 <= e && (e += r.span);
          }
        }
      }
      class w {
        constructor(t) {
          this.property = t;
        }
        decode(t, e) {
          throw Error("UnionDiscriminator is abstract");
        }
        encode(t, e, r) {
          throw Error("UnionDiscriminator is abstract");
        }
      }
      class v extends w {
        constructor(t, e) {
          if (!(t instanceof u && t.isCount()))
            throw TypeError(
              "layout must be an unsigned integer ExternalLayout"
            );
          super(e || t.property || "variant"), (this.layout = t);
        }
        decode(t, e) {
          return this.layout.decode(t, e);
        }
        encode(t, e, r) {
          return this.layout.encode(t, e, r);
        }
      }
      class b extends s {
        constructor(t, e, r) {
          let n;
          if (t instanceof l || t instanceof f) n = new v(new h(t));
          else if (t instanceof u && t.isCount()) n = new v(t);
          else if (t instanceof w) n = t;
          else
            throw TypeError(
              "discr must be a UnionDiscriminator or an unsigned integer layout"
            );
          if ((void 0 === e && (e = null), !(null === e || e instanceof s)))
            throw TypeError("defaultLayout must be null or a Layout");
          if (null !== e) {
            if (0 > e.span)
              throw Error("defaultLayout must have constant span");
            void 0 === e.property && (e = e.replicate("content"));
          }
          let i = -1;
          e &&
            0 <= (i = e.span) &&
            (t instanceof l || t instanceof f) &&
            (i += n.layout.span),
            super(i, r),
            (this.discriminator = n),
            (this.usesPrefixDiscriminator = t instanceof l || t instanceof f),
            (this.defaultLayout = e),
            (this.registry = {});
          let o = this.defaultGetSourceVariant.bind(this);
          (this.getSourceVariant = function (t) {
            return o(t);
          }),
            (this.configGetSourceVariant = function (t) {
              o = t.bind(this);
            });
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = this.getVariant(t, e);
          if (!r)
            throw Error("unable to determine span for unrecognized variant");
          return r.getSpan(t, e);
        }
        defaultGetSourceVariant(t) {
          if (
            Object.prototype.hasOwnProperty.call(t, this.discriminator.property)
          ) {
            if (
              this.defaultLayout &&
              this.defaultLayout.property &&
              Object.prototype.hasOwnProperty.call(
                t,
                this.defaultLayout.property
              )
            )
              return;
            let e = this.registry[t[this.discriminator.property]];
            if (
              e &&
              (!e.layout ||
                (e.property &&
                  Object.prototype.hasOwnProperty.call(t, e.property)))
            )
              return e;
          } else
            for (let e in this.registry) {
              let r = this.registry[e];
              if (
                r.property &&
                Object.prototype.hasOwnProperty.call(t, r.property)
              )
                return r;
            }
          throw Error("unable to infer src variant");
        }
        decode(t, e = 0) {
          let r;
          let n = this.discriminator,
            i = n.decode(t, e),
            o = this.registry[i];
          if (void 0 === o) {
            let o = this.defaultLayout,
              s = 0;
            this.usesPrefixDiscriminator && (s = n.layout.span),
              ((r = this.makeDestinationObject())[n.property] = i),
              (r[o.property] = o.decode(t, e + s));
          } else r = o.decode(t, e);
          return r;
        }
        encode(t, e, r = 0) {
          let n = this.getSourceVariant(t);
          if (void 0 === n) {
            let n = this.discriminator,
              i = this.defaultLayout,
              o = 0;
            return (
              this.usesPrefixDiscriminator && (o = n.layout.span),
              n.encode(t[n.property], e, r),
              o + i.encode(t[i.property], e, r + o)
            );
          }
          return n.encode(t, e, r);
        }
        addVariant(t, e, r) {
          let n = new M(this, t, e, r);
          return (this.registry[t] = n), n;
        }
        getVariant(t, e = 0) {
          let r;
          return (
            t instanceof Uint8Array
              ? (r = this.discriminator.decode(t, e))
              : (r = t),
            this.registry[r]
          );
        }
      }
      class M extends s {
        constructor(t, e, r, n) {
          if (!(t instanceof b)) throw TypeError("union must be a Union");
          if (!Number.isInteger(e) || 0 > e)
            throw TypeError("variant must be a (non-negative) integer");
          if (
            ("string" == typeof r && void 0 === n && ((n = r), (r = null)), r)
          ) {
            if (!(r instanceof s)) throw TypeError("layout must be a Layout");
            if (
              null !== t.defaultLayout &&
              0 <= r.span &&
              r.span > t.defaultLayout.span
            )
              throw Error("variant span exceeds span of containing union");
            if ("string" != typeof n)
              throw TypeError("variant must have a String property");
          }
          let i = t.span;
          0 > t.span &&
            0 <= (i = r ? r.span : 0) &&
            t.usesPrefixDiscriminator &&
            (i += t.discriminator.layout.span),
            super(i, n),
            (this.union = t),
            (this.variant = e),
            (this.layout = r || null);
        }
        getSpan(t, e = 0) {
          if (0 <= this.span) return this.span;
          let r = 0;
          this.union.usesPrefixDiscriminator &&
            (r = this.union.discriminator.layout.span);
          let n = 0;
          return this.layout && (n = this.layout.getSpan(t, e + r)), r + n;
        }
        decode(t, e = 0) {
          let r = this.makeDestinationObject();
          if (this !== this.union.getVariant(t, e))
            throw Error("variant mismatch");
          let n = 0;
          return (
            this.union.usesPrefixDiscriminator &&
              (n = this.union.discriminator.layout.span),
            this.layout
              ? (r[this.property] = this.layout.decode(t, e + n))
              : this.property
              ? (r[this.property] = !0)
              : this.union.usesPrefixDiscriminator &&
                (r[this.union.discriminator.property] = this.variant),
            r
          );
        }
        encode(t, e, r = 0) {
          let n = 0;
          if (
            (this.union.usesPrefixDiscriminator &&
              (n = this.union.discriminator.layout.span),
            this.layout &&
              !Object.prototype.hasOwnProperty.call(t, this.property))
          )
            throw TypeError("variant lacks property " + this.property);
          this.union.discriminator.encode(this.variant, e, r);
          let i = n;
          if (
            this.layout &&
            (this.layout.encode(t[this.property], e, r + n),
            (i += this.layout.getSpan(e, r + n)),
            0 <= this.union.span && i > this.union.span)
          )
            throw Error("encoded variant overruns containing union");
          return i;
        }
        fromArray(t) {
          if (this.layout) return this.layout.fromArray(t);
        }
      }
      function E(t) {
        return 0 > t && (t += 4294967296), t;
      }
      class _ extends s {
        constructor(t, e, r) {
          if (!(t instanceof l || t instanceof f))
            throw TypeError("word must be a UInt or UIntBE layout");
          if (
            ("string" == typeof e && void 0 === r && ((r = e), (e = !1)),
            4 < t.span)
          )
            throw RangeError("word cannot exceed 32 bits");
          super(t.span, r),
            (this.word = t),
            (this.msb = !!e),
            (this.fields = []);
          let n = 0;
          (this._packedSetValue = function (t) {
            return (n = E(t)), this;
          }),
            (this._packedGetValue = function () {
              return n;
            });
        }
        decode(t, e = 0) {
          let r = this.makeDestinationObject(),
            n = this.word.decode(t, e);
          for (let e of (this._packedSetValue(n), this.fields))
            void 0 !== e.property && (r[e.property] = e.decode(t));
          return r;
        }
        encode(t, e, r = 0) {
          let n = this.word.decode(e, r);
          for (let e of (this._packedSetValue(n), this.fields))
            if (void 0 !== e.property) {
              let r = t[e.property];
              void 0 !== r && e.encode(r);
            }
          return this.word.encode(this._packedGetValue(), e, r);
        }
        addField(t, e) {
          let r = new A(this, t, e);
          return this.fields.push(r), r;
        }
        addBoolean(t) {
          let e = new x(this, t);
          return this.fields.push(e), e;
        }
        fieldFor(t) {
          if ("string" != typeof t) throw TypeError("property must be string");
          for (let e of this.fields) if (e.property === t) return e;
        }
      }
      class A {
        constructor(t, e, r) {
          if (!(t instanceof _))
            throw TypeError("container must be a BitStructure");
          if (!Number.isInteger(e) || 0 >= e)
            throw TypeError("bits must be positive integer");
          let n = 8 * t.span,
            i = t.fields.reduce((t, e) => t + e.bits, 0);
          if (e + i > n)
            throw Error(
              "bits too long for span remainder (" +
                (n - i) +
                " of " +
                n +
                " remain)"
            );
          (this.container = t),
            (this.bits = e),
            (this.valueMask = (1 << e) - 1),
            32 === e && (this.valueMask = 4294967295),
            (this.start = i),
            this.container.msb && (this.start = n - i - e),
            (this.wordMask = E(this.valueMask << this.start)),
            (this.property = r);
        }
        decode(t, e) {
          return (
            E(this.container._packedGetValue() & this.wordMask) >>> this.start
          );
        }
        encode(t) {
          if (
            "number" != typeof t ||
            !Number.isInteger(t) ||
            t !== E(t & this.valueMask)
          )
            throw TypeError(
              a("BitField.encode", this) +
                " value must be integer not exceeding " +
                this.valueMask
            );
          let e = this.container._packedGetValue(),
            r = E(t << this.start);
          this.container._packedSetValue(E(e & ~this.wordMask) | r);
        }
      }
      class x extends A {
        constructor(t, e) {
          super(t, 1, e);
        }
        decode(t, e) {
          return !!super.decode(t, e);
        }
        encode(t) {
          "boolean" == typeof t && (t = +t), super.encode(t);
        }
      }
      class B extends s {
        constructor(t, e) {
          if (
            !(
              (t instanceof u && t.isCount()) ||
              (Number.isInteger(t) && 0 <= t)
            )
          )
            throw TypeError(
              "length must be positive integer or an unsigned integer ExternalLayout"
            );
          let r = -1;
          t instanceof u || (r = t), super(r, e), (this.length = t);
        }
        getSpan(t, e) {
          let r = this.span;
          return 0 > r && (r = this.length.decode(t, e)), r;
        }
        decode(t, e = 0) {
          let r = this.span;
          return 0 > r && (r = this.length.decode(t, e)), o(t).slice(e, e + r);
        }
        encode(t, e, r) {
          let n = this.length;
          if (
            (this.length instanceof u && (n = t.length),
            !(t instanceof Uint8Array && n === t.length))
          )
            throw TypeError(
              a("Blob.encode", this) +
                " requires (length " +
                n +
                ") Uint8Array as src"
            );
          if (r + n > e.length)
            throw RangeError("encoding overruns Uint8Array");
          let i = o(t);
          return (
            o(e).write(i.toString("hex"), r, n, "hex"),
            this.length instanceof u && this.length.encode(n, e, r),
            n
          );
        }
      }
      (e.cv = (t, e, r) => new h(t, e, r)),
        (e.u8 = (t) => new l(1, t)),
        (e.KB = (t) => new l(2, t)),
        (e.Jq = (t) => new l(4, t)),
        (e._O = (t) => new p(t)),
        (e.gM = (t) => new m(t)),
        (e.n_ = (t, e, r) => new y(t, e, r)),
        (e.A9 = (t, e, r) => new g(t, e, r)),
        (e.Ik = (t, e) => new B(t, e));
    },
    6400: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === e || "be" === e) && ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        "object" == typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          f =
            "undefined" != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : r(1922).Buffer;
        } catch (t) {}
        function s(t, e) {
          var r = t.charCodeAt(e);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void n(!1, "Invalid character in " + t);
        }
        function a(t, e, r) {
          var n = s(t, r);
          return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
        }
        function u(t, e, r, i) {
          for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
            var h = t.charCodeAt(u) - 48;
            (o *= i),
              (s = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
              n(h >= 0 && s < i, "Invalid character"),
              (o += s);
          }
          return o;
        }
        function h(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" == typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return 0 > t.cmp(e) ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" == typeof t) return this._initNumber(t, e, r);
            if ("object" == typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var i, o, s = 0; s < this.length; s++) this.words[s] = 0;
            var a = 0;
            if ("be" === r)
              for (s = t.length - 1, i = 0; s >= 0; s -= 3)
                (o = t[s] | (t[s - 1] << 8) | (t[s - 2] << 16)),
                  (this.words[i] |= (o << a) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            else if ("le" === r)
              for (s = 0, i = 0; s < t.length; s += 3)
                (o = t[s] | (t[s + 1] << 8) | (t[s + 2] << 16)),
                  (this.words[i] |= (o << a) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = Array(this.length));
            for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
            var o = 0,
              s = 0;
            if ("be" === r)
              for (i = t.length - 1; i >= e; i -= 2)
                (n = a(t, e, i) << o),
                  (this.words[s] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                    : (o += 8);
            else
              for (
                i = (t.length - e) % 2 == 0 ? e + 1 : e;
                i < t.length;
                i += 2
              )
                (n = a(t, e, i) << o),
                  (this.words[s] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                s = o % n,
                a = Math.min(o, o - s) + r,
                h = 0,
                l = r;
              l < a;
              l += n
            )
              (h = u(t, l, l + n, e)),
                this.imuln(i),
                this.words[0] + h < 67108864
                  ? (this.words[0] += h)
                  : this._iaddn(h);
            if (0 !== s) {
              var f = 1;
              for (h = u(t, l, t.length, e), l = 0; l < s; l++) f *= e;
              this.imuln(f),
                this.words[0] + h < 67108864
                  ? (this.words[0] += h)
                  : this._iaddn(h);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            h(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" != typeof Symbol && "function" == typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = l;
          } catch (t) {
            o.prototype.inspect = l;
          }
        else o.prototype.inspect = l;
        function l() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var f,
          c = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          d = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function m(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            s = i * o,
            a = 67108863 & s,
            u = (s / 67108864) | 0;
          r.words[0] = a;
          for (var h = 1; h < n; h++) {
            for (
              var l = u >>> 26,
                f = 67108863 & u,
                c = Math.min(h, e.length - 1),
                d = Math.max(0, h - t.length + 1);
              d <= c;
              d++
            ) {
              var p = (h - d) | 0;
              (l +=
                ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + f) /
                  67108864) |
                0),
                (f = 67108863 & s);
            }
            (r.words[h] = 0 | f), (u = 0 | l);
          }
          return 0 !== u ? (r.words[h] = 0 | u) : r.length--, r._strip();
        }
        (o.prototype.toString = function (t, e) {
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var r, i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = (((a << i) | o) & 16777215).toString(16);
              (o = (a >>> (24 - i)) & 16777215),
                (i += 2) >= 26 && ((i -= 26), s--),
                (r =
                  0 !== o || s !== this.length - 1
                    ? c[6 - u.length] + u + r
                    : u + r);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var h = d[t],
              l = p[t];
            r = "";
            var f = this.clone();
            for (f.negative = 0; !f.isZero(); ) {
              var m = f.modrn(l).toString(t);
              r = (f = f.idivn(l)).isZero() ? m + r : c[h - m.length] + m + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          f &&
            (o.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(f, t, e);
            }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            n(i <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0");
            var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
            return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s;
          }),
          (o.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
              var s = (this.words[i] << o) | n;
              (t[r++] = 255 & s),
                r < t.length && (t[r++] = (s >> 8) & 255),
                r < t.length && (t[r++] = (s >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (s >> 24) & 255),
                    (n = 0),
                    (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, e) {
            for (
              var r = t.length - 1, n = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var s = (this.words[i] << o) | n;
              (t[r--] = 255 & s),
                r >= 0 && (t[r--] = (s >> 8) & 255),
                r >= 0 && (t[r--] = (s >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              (8191 & e) == 0 && ((r += 13), (e >>>= 13)),
              (127 & e) == 0 && ((r += 7), (e >>>= 7)),
              (15 & e) == 0 && ((r += 4), (e >>>= 4)),
              (3 & e) == 0 && ((r += 2), (e >>>= 2)),
              (1 & e) == 0 && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return (this.length - 1) * 26 + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return n((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return n((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var e, r, n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return n((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" == typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              e
                ? (this.words[r] = this.words[r] | (1 << i))
                : (this.words[r] = this.words[r] & ~(1 << i)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var e, r, n, i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e,
                r,
                n = this.iadd(t);
              return (t.negative = 1), n._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((e = this), (r = t)) : ((e = t), (r = this));
            for (var o = 0, s = 0; s < r.length; s++)
              (o = (n = (0 | e.words[s]) - (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & n);
            for (; 0 !== o && s < e.length; s++)
              (o = (n = (0 | e.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & n);
            if (0 === o && s < e.length && e !== this)
              for (; s < e.length; s++) this.words[s] = e.words[s];
            return (
              (this.length = Math.max(this.length, s)),
              e !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var g = function (t, e, r) {
          var n,
            i,
            o,
            s = t.words,
            a = e.words,
            u = r.words,
            h = 0,
            l = 0 | s[0],
            f = 8191 & l,
            c = l >>> 13,
            d = 0 | s[1],
            p = 8191 & d,
            m = d >>> 13,
            g = 0 | s[2],
            y = 8191 & g,
            w = g >>> 13,
            v = 0 | s[3],
            b = 8191 & v,
            M = v >>> 13,
            E = 0 | s[4],
            _ = 8191 & E,
            A = E >>> 13,
            x = 0 | s[5],
            B = 8191 & x,
            S = x >>> 13,
            I = 0 | s[6],
            R = 8191 & I,
            O = I >>> 13,
            L = 0 | s[7],
            C = 8191 & L,
            T = L >>> 13,
            U = 0 | s[8],
            k = 8191 & U,
            N = U >>> 13,
            P = 0 | s[9],
            z = 8191 & P,
            j = P >>> 13,
            F = 0 | a[0],
            D = 8191 & F,
            q = F >>> 13,
            $ = 0 | a[1],
            H = 8191 & $,
            V = $ >>> 13,
            Z = 0 | a[2],
            W = 8191 & Z,
            K = Z >>> 13,
            G = 0 | a[3],
            Y = 8191 & G,
            J = G >>> 13,
            Q = 0 | a[4],
            X = 8191 & Q,
            tt = Q >>> 13,
            te = 0 | a[5],
            tr = 8191 & te,
            tn = te >>> 13,
            ti = 0 | a[6],
            to = 8191 & ti,
            ts = ti >>> 13,
            ta = 0 | a[7],
            tu = 8191 & ta,
            th = ta >>> 13,
            tl = 0 | a[8],
            tf = 8191 & tl,
            tc = tl >>> 13,
            td = 0 | a[9],
            tp = 8191 & td,
            tm = td >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var tg =
            (((h + (n = Math.imul(f, D))) | 0) +
              ((8191 & (i = ((i = Math.imul(f, q)) + Math.imul(c, D)) | 0)) <<
                13)) |
            0;
          (h = ((((o = Math.imul(c, q)) + (i >>> 13)) | 0) + (tg >>> 26)) | 0),
            (tg &= 67108863),
            (n = Math.imul(p, D)),
            (i = ((i = Math.imul(p, q)) + Math.imul(m, D)) | 0),
            (o = Math.imul(m, q));
          var ty =
            (((h + (n = (n + Math.imul(f, H)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, V)) | 0) + Math.imul(c, H)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, V)) | 0) + (i >>> 13)) | 0) +
              (ty >>> 26)) |
            0),
            (ty &= 67108863),
            (n = Math.imul(y, D)),
            (i = ((i = Math.imul(y, q)) + Math.imul(w, D)) | 0),
            (o = Math.imul(w, q)),
            (n = (n + Math.imul(p, H)) | 0),
            (i = ((i = (i + Math.imul(p, V)) | 0) + Math.imul(m, H)) | 0),
            (o = (o + Math.imul(m, V)) | 0);
          var tw =
            (((h + (n = (n + Math.imul(f, W)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, K)) | 0) + Math.imul(c, W)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, K)) | 0) + (i >>> 13)) | 0) +
              (tw >>> 26)) |
            0),
            (tw &= 67108863),
            (n = Math.imul(b, D)),
            (i = ((i = Math.imul(b, q)) + Math.imul(M, D)) | 0),
            (o = Math.imul(M, q)),
            (n = (n + Math.imul(y, H)) | 0),
            (i = ((i = (i + Math.imul(y, V)) | 0) + Math.imul(w, H)) | 0),
            (o = (o + Math.imul(w, V)) | 0),
            (n = (n + Math.imul(p, W)) | 0),
            (i = ((i = (i + Math.imul(p, K)) | 0) + Math.imul(m, W)) | 0),
            (o = (o + Math.imul(m, K)) | 0);
          var tv =
            (((h + (n = (n + Math.imul(f, Y)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, J)) | 0) + Math.imul(c, Y)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, J)) | 0) + (i >>> 13)) | 0) +
              (tv >>> 26)) |
            0),
            (tv &= 67108863),
            (n = Math.imul(_, D)),
            (i = ((i = Math.imul(_, q)) + Math.imul(A, D)) | 0),
            (o = Math.imul(A, q)),
            (n = (n + Math.imul(b, H)) | 0),
            (i = ((i = (i + Math.imul(b, V)) | 0) + Math.imul(M, H)) | 0),
            (o = (o + Math.imul(M, V)) | 0),
            (n = (n + Math.imul(y, W)) | 0),
            (i = ((i = (i + Math.imul(y, K)) | 0) + Math.imul(w, W)) | 0),
            (o = (o + Math.imul(w, K)) | 0),
            (n = (n + Math.imul(p, Y)) | 0),
            (i = ((i = (i + Math.imul(p, J)) | 0) + Math.imul(m, Y)) | 0),
            (o = (o + Math.imul(m, J)) | 0);
          var tb =
            (((h + (n = (n + Math.imul(f, X)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, tt)) | 0) + Math.imul(c, X)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, tt)) | 0) + (i >>> 13)) | 0) +
              (tb >>> 26)) |
            0),
            (tb &= 67108863),
            (n = Math.imul(B, D)),
            (i = ((i = Math.imul(B, q)) + Math.imul(S, D)) | 0),
            (o = Math.imul(S, q)),
            (n = (n + Math.imul(_, H)) | 0),
            (i = ((i = (i + Math.imul(_, V)) | 0) + Math.imul(A, H)) | 0),
            (o = (o + Math.imul(A, V)) | 0),
            (n = (n + Math.imul(b, W)) | 0),
            (i = ((i = (i + Math.imul(b, K)) | 0) + Math.imul(M, W)) | 0),
            (o = (o + Math.imul(M, K)) | 0),
            (n = (n + Math.imul(y, Y)) | 0),
            (i = ((i = (i + Math.imul(y, J)) | 0) + Math.imul(w, Y)) | 0),
            (o = (o + Math.imul(w, J)) | 0),
            (n = (n + Math.imul(p, X)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(m, X)) | 0),
            (o = (o + Math.imul(m, tt)) | 0);
          var tM =
            (((h + (n = (n + Math.imul(f, tr)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, tn)) | 0) + Math.imul(c, tr)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, tn)) | 0) + (i >>> 13)) | 0) +
              (tM >>> 26)) |
            0),
            (tM &= 67108863),
            (n = Math.imul(R, D)),
            (i = ((i = Math.imul(R, q)) + Math.imul(O, D)) | 0),
            (o = Math.imul(O, q)),
            (n = (n + Math.imul(B, H)) | 0),
            (i = ((i = (i + Math.imul(B, V)) | 0) + Math.imul(S, H)) | 0),
            (o = (o + Math.imul(S, V)) | 0),
            (n = (n + Math.imul(_, W)) | 0),
            (i = ((i = (i + Math.imul(_, K)) | 0) + Math.imul(A, W)) | 0),
            (o = (o + Math.imul(A, K)) | 0),
            (n = (n + Math.imul(b, Y)) | 0),
            (i = ((i = (i + Math.imul(b, J)) | 0) + Math.imul(M, Y)) | 0),
            (o = (o + Math.imul(M, J)) | 0),
            (n = (n + Math.imul(y, X)) | 0),
            (i = ((i = (i + Math.imul(y, tt)) | 0) + Math.imul(w, X)) | 0),
            (o = (o + Math.imul(w, tt)) | 0),
            (n = (n + Math.imul(p, tr)) | 0),
            (i = ((i = (i + Math.imul(p, tn)) | 0) + Math.imul(m, tr)) | 0),
            (o = (o + Math.imul(m, tn)) | 0);
          var tE =
            (((h + (n = (n + Math.imul(f, to)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, ts)) | 0) + Math.imul(c, to)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, ts)) | 0) + (i >>> 13)) | 0) +
              (tE >>> 26)) |
            0),
            (tE &= 67108863),
            (n = Math.imul(C, D)),
            (i = ((i = Math.imul(C, q)) + Math.imul(T, D)) | 0),
            (o = Math.imul(T, q)),
            (n = (n + Math.imul(R, H)) | 0),
            (i = ((i = (i + Math.imul(R, V)) | 0) + Math.imul(O, H)) | 0),
            (o = (o + Math.imul(O, V)) | 0),
            (n = (n + Math.imul(B, W)) | 0),
            (i = ((i = (i + Math.imul(B, K)) | 0) + Math.imul(S, W)) | 0),
            (o = (o + Math.imul(S, K)) | 0),
            (n = (n + Math.imul(_, Y)) | 0),
            (i = ((i = (i + Math.imul(_, J)) | 0) + Math.imul(A, Y)) | 0),
            (o = (o + Math.imul(A, J)) | 0),
            (n = (n + Math.imul(b, X)) | 0),
            (i = ((i = (i + Math.imul(b, tt)) | 0) + Math.imul(M, X)) | 0),
            (o = (o + Math.imul(M, tt)) | 0),
            (n = (n + Math.imul(y, tr)) | 0),
            (i = ((i = (i + Math.imul(y, tn)) | 0) + Math.imul(w, tr)) | 0),
            (o = (o + Math.imul(w, tn)) | 0),
            (n = (n + Math.imul(p, to)) | 0),
            (i = ((i = (i + Math.imul(p, ts)) | 0) + Math.imul(m, to)) | 0),
            (o = (o + Math.imul(m, ts)) | 0);
          var t_ =
            (((h + (n = (n + Math.imul(f, tu)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, th)) | 0) + Math.imul(c, tu)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, th)) | 0) + (i >>> 13)) | 0) +
              (t_ >>> 26)) |
            0),
            (t_ &= 67108863),
            (n = Math.imul(k, D)),
            (i = ((i = Math.imul(k, q)) + Math.imul(N, D)) | 0),
            (o = Math.imul(N, q)),
            (n = (n + Math.imul(C, H)) | 0),
            (i = ((i = (i + Math.imul(C, V)) | 0) + Math.imul(T, H)) | 0),
            (o = (o + Math.imul(T, V)) | 0),
            (n = (n + Math.imul(R, W)) | 0),
            (i = ((i = (i + Math.imul(R, K)) | 0) + Math.imul(O, W)) | 0),
            (o = (o + Math.imul(O, K)) | 0),
            (n = (n + Math.imul(B, Y)) | 0),
            (i = ((i = (i + Math.imul(B, J)) | 0) + Math.imul(S, Y)) | 0),
            (o = (o + Math.imul(S, J)) | 0),
            (n = (n + Math.imul(_, X)) | 0),
            (i = ((i = (i + Math.imul(_, tt)) | 0) + Math.imul(A, X)) | 0),
            (o = (o + Math.imul(A, tt)) | 0),
            (n = (n + Math.imul(b, tr)) | 0),
            (i = ((i = (i + Math.imul(b, tn)) | 0) + Math.imul(M, tr)) | 0),
            (o = (o + Math.imul(M, tn)) | 0),
            (n = (n + Math.imul(y, to)) | 0),
            (i = ((i = (i + Math.imul(y, ts)) | 0) + Math.imul(w, to)) | 0),
            (o = (o + Math.imul(w, ts)) | 0),
            (n = (n + Math.imul(p, tu)) | 0),
            (i = ((i = (i + Math.imul(p, th)) | 0) + Math.imul(m, tu)) | 0),
            (o = (o + Math.imul(m, th)) | 0);
          var tA =
            (((h + (n = (n + Math.imul(f, tf)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, tc)) | 0) + Math.imul(c, tf)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, tc)) | 0) + (i >>> 13)) | 0) +
              (tA >>> 26)) |
            0),
            (tA &= 67108863),
            (n = Math.imul(z, D)),
            (i = ((i = Math.imul(z, q)) + Math.imul(j, D)) | 0),
            (o = Math.imul(j, q)),
            (n = (n + Math.imul(k, H)) | 0),
            (i = ((i = (i + Math.imul(k, V)) | 0) + Math.imul(N, H)) | 0),
            (o = (o + Math.imul(N, V)) | 0),
            (n = (n + Math.imul(C, W)) | 0),
            (i = ((i = (i + Math.imul(C, K)) | 0) + Math.imul(T, W)) | 0),
            (o = (o + Math.imul(T, K)) | 0),
            (n = (n + Math.imul(R, Y)) | 0),
            (i = ((i = (i + Math.imul(R, J)) | 0) + Math.imul(O, Y)) | 0),
            (o = (o + Math.imul(O, J)) | 0),
            (n = (n + Math.imul(B, X)) | 0),
            (i = ((i = (i + Math.imul(B, tt)) | 0) + Math.imul(S, X)) | 0),
            (o = (o + Math.imul(S, tt)) | 0),
            (n = (n + Math.imul(_, tr)) | 0),
            (i = ((i = (i + Math.imul(_, tn)) | 0) + Math.imul(A, tr)) | 0),
            (o = (o + Math.imul(A, tn)) | 0),
            (n = (n + Math.imul(b, to)) | 0),
            (i = ((i = (i + Math.imul(b, ts)) | 0) + Math.imul(M, to)) | 0),
            (o = (o + Math.imul(M, ts)) | 0),
            (n = (n + Math.imul(y, tu)) | 0),
            (i = ((i = (i + Math.imul(y, th)) | 0) + Math.imul(w, tu)) | 0),
            (o = (o + Math.imul(w, th)) | 0),
            (n = (n + Math.imul(p, tf)) | 0),
            (i = ((i = (i + Math.imul(p, tc)) | 0) + Math.imul(m, tf)) | 0),
            (o = (o + Math.imul(m, tc)) | 0);
          var tx =
            (((h + (n = (n + Math.imul(f, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, tm)) | 0) + Math.imul(c, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, tm)) | 0) + (i >>> 13)) | 0) +
              (tx >>> 26)) |
            0),
            (tx &= 67108863),
            (n = Math.imul(z, H)),
            (i = ((i = Math.imul(z, V)) + Math.imul(j, H)) | 0),
            (o = Math.imul(j, V)),
            (n = (n + Math.imul(k, W)) | 0),
            (i = ((i = (i + Math.imul(k, K)) | 0) + Math.imul(N, W)) | 0),
            (o = (o + Math.imul(N, K)) | 0),
            (n = (n + Math.imul(C, Y)) | 0),
            (i = ((i = (i + Math.imul(C, J)) | 0) + Math.imul(T, Y)) | 0),
            (o = (o + Math.imul(T, J)) | 0),
            (n = (n + Math.imul(R, X)) | 0),
            (i = ((i = (i + Math.imul(R, tt)) | 0) + Math.imul(O, X)) | 0),
            (o = (o + Math.imul(O, tt)) | 0),
            (n = (n + Math.imul(B, tr)) | 0),
            (i = ((i = (i + Math.imul(B, tn)) | 0) + Math.imul(S, tr)) | 0),
            (o = (o + Math.imul(S, tn)) | 0),
            (n = (n + Math.imul(_, to)) | 0),
            (i = ((i = (i + Math.imul(_, ts)) | 0) + Math.imul(A, to)) | 0),
            (o = (o + Math.imul(A, ts)) | 0),
            (n = (n + Math.imul(b, tu)) | 0),
            (i = ((i = (i + Math.imul(b, th)) | 0) + Math.imul(M, tu)) | 0),
            (o = (o + Math.imul(M, th)) | 0),
            (n = (n + Math.imul(y, tf)) | 0),
            (i = ((i = (i + Math.imul(y, tc)) | 0) + Math.imul(w, tf)) | 0),
            (o = (o + Math.imul(w, tc)) | 0);
          var tB =
            (((h + (n = (n + Math.imul(p, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, tm)) | 0) + Math.imul(m, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(m, tm)) | 0) + (i >>> 13)) | 0) +
              (tB >>> 26)) |
            0),
            (tB &= 67108863),
            (n = Math.imul(z, W)),
            (i = ((i = Math.imul(z, K)) + Math.imul(j, W)) | 0),
            (o = Math.imul(j, K)),
            (n = (n + Math.imul(k, Y)) | 0),
            (i = ((i = (i + Math.imul(k, J)) | 0) + Math.imul(N, Y)) | 0),
            (o = (o + Math.imul(N, J)) | 0),
            (n = (n + Math.imul(C, X)) | 0),
            (i = ((i = (i + Math.imul(C, tt)) | 0) + Math.imul(T, X)) | 0),
            (o = (o + Math.imul(T, tt)) | 0),
            (n = (n + Math.imul(R, tr)) | 0),
            (i = ((i = (i + Math.imul(R, tn)) | 0) + Math.imul(O, tr)) | 0),
            (o = (o + Math.imul(O, tn)) | 0),
            (n = (n + Math.imul(B, to)) | 0),
            (i = ((i = (i + Math.imul(B, ts)) | 0) + Math.imul(S, to)) | 0),
            (o = (o + Math.imul(S, ts)) | 0),
            (n = (n + Math.imul(_, tu)) | 0),
            (i = ((i = (i + Math.imul(_, th)) | 0) + Math.imul(A, tu)) | 0),
            (o = (o + Math.imul(A, th)) | 0),
            (n = (n + Math.imul(b, tf)) | 0),
            (i = ((i = (i + Math.imul(b, tc)) | 0) + Math.imul(M, tf)) | 0),
            (o = (o + Math.imul(M, tc)) | 0);
          var tS =
            (((h + (n = (n + Math.imul(y, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(y, tm)) | 0) + Math.imul(w, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(w, tm)) | 0) + (i >>> 13)) | 0) +
              (tS >>> 26)) |
            0),
            (tS &= 67108863),
            (n = Math.imul(z, Y)),
            (i = ((i = Math.imul(z, J)) + Math.imul(j, Y)) | 0),
            (o = Math.imul(j, J)),
            (n = (n + Math.imul(k, X)) | 0),
            (i = ((i = (i + Math.imul(k, tt)) | 0) + Math.imul(N, X)) | 0),
            (o = (o + Math.imul(N, tt)) | 0),
            (n = (n + Math.imul(C, tr)) | 0),
            (i = ((i = (i + Math.imul(C, tn)) | 0) + Math.imul(T, tr)) | 0),
            (o = (o + Math.imul(T, tn)) | 0),
            (n = (n + Math.imul(R, to)) | 0),
            (i = ((i = (i + Math.imul(R, ts)) | 0) + Math.imul(O, to)) | 0),
            (o = (o + Math.imul(O, ts)) | 0),
            (n = (n + Math.imul(B, tu)) | 0),
            (i = ((i = (i + Math.imul(B, th)) | 0) + Math.imul(S, tu)) | 0),
            (o = (o + Math.imul(S, th)) | 0),
            (n = (n + Math.imul(_, tf)) | 0),
            (i = ((i = (i + Math.imul(_, tc)) | 0) + Math.imul(A, tf)) | 0),
            (o = (o + Math.imul(A, tc)) | 0);
          var tI =
            (((h + (n = (n + Math.imul(b, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(b, tm)) | 0) + Math.imul(M, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(M, tm)) | 0) + (i >>> 13)) | 0) +
              (tI >>> 26)) |
            0),
            (tI &= 67108863),
            (n = Math.imul(z, X)),
            (i = ((i = Math.imul(z, tt)) + Math.imul(j, X)) | 0),
            (o = Math.imul(j, tt)),
            (n = (n + Math.imul(k, tr)) | 0),
            (i = ((i = (i + Math.imul(k, tn)) | 0) + Math.imul(N, tr)) | 0),
            (o = (o + Math.imul(N, tn)) | 0),
            (n = (n + Math.imul(C, to)) | 0),
            (i = ((i = (i + Math.imul(C, ts)) | 0) + Math.imul(T, to)) | 0),
            (o = (o + Math.imul(T, ts)) | 0),
            (n = (n + Math.imul(R, tu)) | 0),
            (i = ((i = (i + Math.imul(R, th)) | 0) + Math.imul(O, tu)) | 0),
            (o = (o + Math.imul(O, th)) | 0),
            (n = (n + Math.imul(B, tf)) | 0),
            (i = ((i = (i + Math.imul(B, tc)) | 0) + Math.imul(S, tf)) | 0),
            (o = (o + Math.imul(S, tc)) | 0);
          var tR =
            (((h + (n = (n + Math.imul(_, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(_, tm)) | 0) + Math.imul(A, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(A, tm)) | 0) + (i >>> 13)) | 0) +
              (tR >>> 26)) |
            0),
            (tR &= 67108863),
            (n = Math.imul(z, tr)),
            (i = ((i = Math.imul(z, tn)) + Math.imul(j, tr)) | 0),
            (o = Math.imul(j, tn)),
            (n = (n + Math.imul(k, to)) | 0),
            (i = ((i = (i + Math.imul(k, ts)) | 0) + Math.imul(N, to)) | 0),
            (o = (o + Math.imul(N, ts)) | 0),
            (n = (n + Math.imul(C, tu)) | 0),
            (i = ((i = (i + Math.imul(C, th)) | 0) + Math.imul(T, tu)) | 0),
            (o = (o + Math.imul(T, th)) | 0),
            (n = (n + Math.imul(R, tf)) | 0),
            (i = ((i = (i + Math.imul(R, tc)) | 0) + Math.imul(O, tf)) | 0),
            (o = (o + Math.imul(O, tc)) | 0);
          var tO =
            (((h + (n = (n + Math.imul(B, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(B, tm)) | 0) + Math.imul(S, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(S, tm)) | 0) + (i >>> 13)) | 0) +
              (tO >>> 26)) |
            0),
            (tO &= 67108863),
            (n = Math.imul(z, to)),
            (i = ((i = Math.imul(z, ts)) + Math.imul(j, to)) | 0),
            (o = Math.imul(j, ts)),
            (n = (n + Math.imul(k, tu)) | 0),
            (i = ((i = (i + Math.imul(k, th)) | 0) + Math.imul(N, tu)) | 0),
            (o = (o + Math.imul(N, th)) | 0),
            (n = (n + Math.imul(C, tf)) | 0),
            (i = ((i = (i + Math.imul(C, tc)) | 0) + Math.imul(T, tf)) | 0),
            (o = (o + Math.imul(T, tc)) | 0);
          var tL =
            (((h + (n = (n + Math.imul(R, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(R, tm)) | 0) + Math.imul(O, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(O, tm)) | 0) + (i >>> 13)) | 0) +
              (tL >>> 26)) |
            0),
            (tL &= 67108863),
            (n = Math.imul(z, tu)),
            (i = ((i = Math.imul(z, th)) + Math.imul(j, tu)) | 0),
            (o = Math.imul(j, th)),
            (n = (n + Math.imul(k, tf)) | 0),
            (i = ((i = (i + Math.imul(k, tc)) | 0) + Math.imul(N, tf)) | 0),
            (o = (o + Math.imul(N, tc)) | 0);
          var tC =
            (((h + (n = (n + Math.imul(C, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(C, tm)) | 0) + Math.imul(T, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(T, tm)) | 0) + (i >>> 13)) | 0) +
              (tC >>> 26)) |
            0),
            (tC &= 67108863),
            (n = Math.imul(z, tf)),
            (i = ((i = Math.imul(z, tc)) + Math.imul(j, tf)) | 0),
            (o = Math.imul(j, tc));
          var tT =
            (((h + (n = (n + Math.imul(k, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(k, tm)) | 0) + Math.imul(N, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(N, tm)) | 0) + (i >>> 13)) | 0) +
              (tT >>> 26)) |
            0),
            (tT &= 67108863);
          var tU =
            (((h + (n = Math.imul(z, tp))) | 0) +
              ((8191 & (i = ((i = Math.imul(z, tm)) + Math.imul(j, tp)) | 0)) <<
                13)) |
            0;
          return (
            (h =
              ((((o = Math.imul(j, tm)) + (i >>> 13)) | 0) + (tU >>> 26)) | 0),
            (tU &= 67108863),
            (u[0] = tg),
            (u[1] = ty),
            (u[2] = tw),
            (u[3] = tv),
            (u[4] = tb),
            (u[5] = tM),
            (u[6] = tE),
            (u[7] = t_),
            (u[8] = tA),
            (u[9] = tx),
            (u[10] = tB),
            (u[11] = tS),
            (u[12] = tI),
            (u[13] = tR),
            (u[14] = tO),
            (u[15] = tL),
            (u[16] = tC),
            (u[17] = tT),
            (u[18] = tU),
            0 !== h && ((u[19] = h), r.length++),
            r
          );
        };
        function y(t, e, r) {
          (r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length);
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var s = i;
            i = 0;
            for (
              var a = 67108863 & n,
                u = Math.min(o, e.length - 1),
                h = Math.max(0, o - t.length + 1);
              h <= u;
              h++
            ) {
              var l = o - h,
                f = (0 | t.words[l]) * (0 | e.words[h]),
                c = 67108863 & f;
              (s = (s + ((f / 67108864) | 0)) | 0),
                (a = 67108863 & (c = (c + a) | 0)),
                (i += (s = (s + (c >>> 26)) | 0) >>> 26),
                (s &= 67108863);
            }
            (r.words[o] = a), (n = s), (s = i);
          }
          return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
        }
        function w(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (g = m),
          (o.prototype.mulTo = function (t, e) {
            var r,
              n = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? g(this, t, e)
              : n < 63
              ? m(this, t, e)
              : y(this, t, e);
          }),
          (w.prototype.makeRBT = function (t) {
            for (
              var e = Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (w.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (w.prototype.permute = function (t, e, r, n, i, o) {
            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]]);
          }),
          (w.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var s = 1; s < i; s <<= 1)
              for (
                var a = s << 1,
                  u = Math.cos((2 * Math.PI) / a),
                  h = Math.sin((2 * Math.PI) / a),
                  l = 0;
                l < i;
                l += a
              )
                for (var f = u, c = h, d = 0; d < s; d++) {
                  var p = r[l + d],
                    m = n[l + d],
                    g = r[l + d + s],
                    y = n[l + d + s],
                    w = f * g - c * y;
                  (y = f * y + c * g),
                    (g = w),
                    (r[l + d] = p + g),
                    (n[l + d] = m + y),
                    (r[l + d + s] = p - g),
                    (n[l + d + s] = m - y),
                    d !== a &&
                      ((w = u * f - h * c), (c = u * c + h * f), (f = w));
                }
          }),
          (w.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (w.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (w.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (w.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, s = 0; s < e; s++)
              (o += 0 | t[s]),
                (r[2 * s] = 8191 & o),
                (o >>>= 13),
                (r[2 * s + 1] = 8191 & o),
                (o >>>= 13);
            for (s = 2 * e; s < i; ++s) r[s] = 0;
            n(0 === o), n((-8192 & o) == 0);
          }),
          (w.prototype.stub = function (t) {
            for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (w.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = Array(n),
              a = Array(n),
              u = Array(n),
              h = Array(n),
              l = Array(n),
              f = Array(n),
              c = r.words;
            (c.length = n),
              this.convert13b(t.words, t.length, s, n),
              this.convert13b(e.words, e.length, h, n),
              this.transform(s, o, a, u, n, i),
              this.transform(h, o, l, f, n, i);
            for (var d = 0; d < n; d++) {
              var p = a[d] * l[d] - u[d] * f[d];
              (u[d] = a[d] * f[d] + u[d] * l[d]), (a[d] = p);
            }
            return (
              this.conjugate(a, u, n),
              this.transform(a, u, c, o, n, i),
              this.conjugate(c, o, n),
              this.normalize13b(c, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), y(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), n("number" == typeof t), n(t < 67108864);
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * t,
                s = (67108863 & o) + (67108863 & r);
              (r >>= 26),
                (r += ((o / 67108864) | 0) + (s >>> 26)),
                (this.words[i] = 67108863 & s);
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              e ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] >>> i) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" == typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var s = 0;
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & o,
                  u = ((0 | this.words[e]) - a) << r;
                (this.words[e] = u | s), (s = a >>> (26 - r));
              }
              s && ((this.words[e] = s), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            n("number" == typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var i,
              o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> o) << o);
            if (((i -= s), (i = Math.max(0, i)), r)) {
              for (var u = 0; u < s; u++) r.words[u] = this.words[u];
              r.length = s;
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + s];
            else (this.words[0] = 0), (this.length = 1);
            var h = 0;
            for (u = this.length - 1; u >= 0 && (0 !== h || u >= i); u--) {
              var l = 0 | this.words[u];
              (this.words[u] = (h << (26 - o)) | (l >>> o)), (h = l & a);
            }
            return (
              r && 0 !== h && (r.words[r.length++] = h),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return !(this.length <= r) && !!(this.words[r] & (1 << e));
          }),
          (o.prototype.imaskn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return (n(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= r)
              ? this
              : (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> e) << e)),
                this._strip());
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (n("number" == typeof t), n(t < 67108864), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
              ? (1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0))
                  : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
                this)
              : this._iaddn(t);
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" == typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              s = t.length + r;
            this._expand(s);
            var a = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + a;
              var u = (0 | t.words[i]) * e;
              (o -= 67108863 & u),
                (a = (o >> 26) - ((u / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (a = (o = (0 | this.words[i + r]) + a) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === a) return this._strip();
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (o = -(0 | this.words[i]) + a) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r,
              n = this.length - t.length,
              i = this.clone(),
              s = t,
              a = 0 | s.words[s.length - 1];
            0 != (n = 26 - this._countBits(a)) &&
              ((s = s.ushln(n)), i.iushln(n), (a = 0 | s.words[s.length - 1]));
            var u = i.length - s.length;
            if ("mod" !== e) {
              ((r = new o(null)).length = u + 1), (r.words = Array(r.length));
              for (var h = 0; h < r.length; h++) r.words[h] = 0;
            }
            var l = i.clone()._ishlnsubmul(s, 1, u);
            0 === l.negative && ((i = l), r && (r.words[u] = 1));
            for (var f = u - 1; f >= 0; f--) {
              var c =
                (0 | i.words[s.length + f]) * 67108864 +
                (0 | i.words[s.length + f - 1]);
              for (
                c = Math.min((c / a) | 0, 67108863), i._ishlnsubmul(s, c, f);
                0 !== i.negative;

              )
                c--,
                  (i.negative = 0),
                  i._ishlnsubmul(s, 1, f),
                  i.isZero() || (i.negative ^= 1);
              r && (r.words[f] = c);
            }
            return (
              r && r._strip(),
              i._strip(),
              "div" !== e && 0 !== n && i.iushrn(n),
              { div: r || null, mod: i }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            var i, s, a;
            return (n(!t.isZero()), this.isZero())
              ? { div: new o(0), mod: new o(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((a = this.neg().divmod(t, e)),
                "mod" !== e && (i = a.div.neg()),
                "div" !== e &&
                  ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                { div: i, mod: s })
              : 0 === this.negative && 0 !== t.negative
              ? ((a = this.divmod(t.neg(), e)),
                "mod" !== e && (i = a.div.neg()),
                { div: i, mod: a.mod })
              : (this.negative & t.negative) != 0
              ? ((a = this.neg().divmod(t.neg(), e)),
                "div" !== e &&
                  ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                { div: a.div, mod: s })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new o(0), mod: this }
              : 1 === t.length
              ? "div" === e
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === e
                ? { div: null, mod: new o(this.modrn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new o(this.modrn(t.words[0])),
                  }
              : this._wordDiv(t, e);
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 67108864 % t, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % t;
            return e ? -i : i;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 67108864 * r;
              (this.words[i] = (o / t) | 0), (r = o % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), s = new o(0), a = new o(0), u = new o(1), h = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++h;
            for (var l = r.clone(), f = e.clone(); !e.isZero(); ) {
              for (
                var c = 0, d = 1;
                (e.words[0] & d) == 0 && c < 26;
                ++c, d <<= 1
              );
              if (c > 0)
                for (e.iushrn(c); c-- > 0; )
                  (i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(f)),
                    i.iushrn(1),
                    s.iushrn(1);
              for (
                var p = 0, m = 1;
                (r.words[0] & m) == 0 && p < 26;
                ++p, m <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(f)),
                    a.iushrn(1),
                    u.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(a), s.isub(u))
                : (r.isub(e), a.isub(i), u.isub(s));
            }
            return { a: a, b: u, gcd: r.iushln(h) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e,
              r = this,
              i = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var s = new o(1), a = new o(0), u = i.clone();
              r.cmpn(1) > 0 && i.cmpn(1) > 0;

            ) {
              for (
                var h = 0, l = 1;
                (r.words[0] & l) == 0 && h < 26;
                ++h, l <<= 1
              );
              if (h > 0)
                for (r.iushrn(h); h-- > 0; )
                  s.isOdd() && s.iadd(u), s.iushrn(1);
              for (
                var f = 0, c = 1;
                (i.words[0] & c) == 0 && f < 26;
                ++f, c <<= 1
              );
              if (f > 0)
                for (i.iushrn(f); f-- > 0; )
                  a.isOdd() && a.iadd(u), a.iushrn(1);
              r.cmp(i) >= 0 ? (r.isub(i), s.isub(a)) : (i.isub(r), a.isub(s));
            }
            return 0 > (e = 0 === r.cmpn(1) ? s : a).cmpn(0) && e.iadd(t), e;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (o.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" == typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
              var a = 0 | this.words[s];
              (a += o), (o = a >>> 26), (a &= 67108863), (this.words[s] = a);
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (o.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new x(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var v = { k256: null, p224: null, p192: null, p25519: null };
        function b(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function M() {
          b.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function E() {
          b.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function _() {
          b.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function A() {
          b.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function x(t) {
          if ("string" == typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function B(t) {
          x.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (b.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (b.prototype.ireduce = function (t) {
            var e,
              r = t;
            do
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (b.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (b.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(M, b),
          (M.prototype.split = function (t, e) {
            for (var r = Math.min(t.length, 9), n = 0; n < r; n++)
              e.words[n] = t.words[n];
            if (((e.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var i = t.words[9];
            for (n = 10, e.words[e.length++] = 4194303 & i; n < t.length; n++) {
              var o = 0 | t.words[n];
              (t.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o);
            }
            (i >>>= 22),
              (t.words[n - 10] = i),
              0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (M.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(E, b),
          i(_, b),
          i(A, b),
          (A.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = (0 | t.words[r]) * 19 + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            var e;
            if (v[t]) return v[t];
            if ("k256" === t) e = new M();
            else if ("p224" === t) e = new E();
            else if ("p192" === t) e = new _();
            else if ("p25519" === t) e = new A();
            else throw Error("Unknown prime " + t);
            return (v[t] = e), e;
          }),
          (x.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"),
              n(t.red, "red works only with red numbers");
          }),
          (x.prototype._verify2 = function (t, e) {
            n((t.negative | e.negative) == 0, "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (x.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (h(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (x.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (x.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (x.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (x.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (x.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (x.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (x.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (x.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (x.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (x.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (x.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 == 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), s = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              s++, i.iushrn(1);
            n(!i.isZero());
            var a = new o(1).toRed(this),
              u = a.redNeg(),
              h = this.m.subn(1).iushrn(1),
              l = this.m.bitLength();
            for (
              l = new o(2 * l * l).toRed(this);
              0 !== this.pow(l, h).cmp(u);

            )
              l.redIAdd(u);
            for (
              var f = this.pow(l, i),
                c = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = s;
              0 !== d.cmp(a);

            ) {
              for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
              n(g < p);
              var y = this.pow(f, new o(1).iushln(p - g - 1));
              (c = c.redMul(y)), (f = y.redSqr()), (d = d.redMul(f)), (p = g);
            }
            return c;
          }),
          (x.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (x.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26;
            for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
              for (var h = e.words[n], l = u - 1; l >= 0; l--) {
                var f = (h >> l) & 1;
                if ((i !== r[0] && (i = this.sqr(i)), 0 === f && 0 === s)) {
                  a = 0;
                  continue;
                }
                (s <<= 1),
                  (s |= f),
                  (4 == ++a || (0 === n && 0 === l)) &&
                    ((i = this.mul(i, r[s])), (a = 0), (s = 0));
              }
              u = 26;
            }
            return i;
          }),
          (x.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (x.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new B(t);
          }),
          i(B, x),
          (B.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (B.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (B.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : 0 > i.cmpn(0) && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (B.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i;
            return (
              i.cmp(this.m) >= 0
                ? (s = i.isub(this.m))
                : 0 > i.cmpn(0) && (s = i.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (B.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    8443: function (t, e, r) {
      var n = r(5197);
      t.exports = n(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    5197: function (t, e, r) {
      "use strict";
      var n = r(632).Buffer;
      t.exports = function (t) {
        if (t.length >= 255) throw TypeError("Alphabet too long");
        for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
        for (var i = 0; i < t.length; i++) {
          var o = t.charAt(i),
            s = o.charCodeAt(0);
          if (255 !== e[s]) throw TypeError(o + " is ambiguous");
          e[s] = i;
        }
        var a = t.length,
          u = t.charAt(0),
          h = Math.log(a) / Math.log(256),
          l = Math.log(256) / Math.log(a);
        function f(t) {
          if ("string" != typeof t) throw TypeError("Expected String");
          if (0 === t.length) return n.alloc(0);
          for (var r = 0, i = 0, o = 0; t[r] === u; ) i++, r++;
          for (
            var s = ((t.length - r) * h + 1) >>> 0, l = new Uint8Array(s);
            r < t.length;

          ) {
            var f = e[t.charCodeAt(r)];
            if (255 === f) return;
            for (var c = 0, d = s - 1; (0 !== f || c < o) && -1 !== d; d--, c++)
              (f += (a * l[d]) >>> 0),
                (l[d] = f % 256 >>> 0),
                (f = (f / 256) >>> 0);
            if (0 !== f) throw Error("Non-zero carry");
            (o = c), r++;
          }
          for (var p = s - o; p !== s && 0 === l[p]; ) p++;
          var m = n.allocUnsafe(i + (s - p));
          m.fill(0, 0, i);
          for (var g = i; p !== s; ) m[g++] = l[p++];
          return m;
        }
        return {
          encode: function (e) {
            if (
              ((Array.isArray(e) || e instanceof Uint8Array) && (e = n.from(e)),
              !n.isBuffer(e))
            )
              throw TypeError("Expected Buffer");
            if (0 === e.length) return "";
            for (var r = 0, i = 0, o = 0, s = e.length; o !== s && 0 === e[o]; )
              o++, r++;
            for (
              var h = ((s - o) * l + 1) >>> 0, f = new Uint8Array(h);
              o !== s;

            ) {
              for (
                var c = e[o], d = 0, p = h - 1;
                (0 !== c || d < i) && -1 !== p;
                p--, d++
              )
                (c += (256 * f[p]) >>> 0),
                  (f[p] = c % a >>> 0),
                  (c = (c / a) >>> 0);
              if (0 !== c) throw Error("Non-zero carry");
              (i = d), o++;
            }
            for (var m = h - i; m !== h && 0 === f[m]; ) m++;
            for (var g = u.repeat(r); m < h; ++m) g += t.charAt(f[m]);
            return g;
          },
          decodeUnsafe: f,
          decode: function (t) {
            var e = f(t);
            if (e) return e;
            throw Error("Non-base" + a + " character");
          },
        };
      };
    },
    8738: function (t, e) {
      "use strict";
      (e.byteLength = function (t) {
        var e = u(t),
          r = e[0],
          n = e[1];
        return ((r + n) * 3) / 4 - n;
      }),
        (e.toByteArray = function (t) {
          var e,
            r,
            o = u(t),
            s = o[0],
            a = o[1],
            h = new i(((s + a) * 3) / 4 - a),
            l = 0,
            f = a > 0 ? s - 4 : s;
          for (r = 0; r < f; r += 4)
            (e =
              (n[t.charCodeAt(r)] << 18) |
              (n[t.charCodeAt(r + 1)] << 12) |
              (n[t.charCodeAt(r + 2)] << 6) |
              n[t.charCodeAt(r + 3)]),
              (h[l++] = (e >> 16) & 255),
              (h[l++] = (e >> 8) & 255),
              (h[l++] = 255 & e);
          return (
            2 === a &&
              ((e = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
              (h[l++] = 255 & e)),
            1 === a &&
              ((e =
                (n[t.charCodeAt(r)] << 10) |
                (n[t.charCodeAt(r + 1)] << 4) |
                (n[t.charCodeAt(r + 2)] >> 2)),
              (h[l++] = (e >> 8) & 255),
              (h[l++] = 255 & e)),
            h
          );
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i;
            s < a;
            s += 16383
          )
            o.push(
              (function (t, e, n) {
                for (var i, o = [], s = e; s < n; s += 3)
                  o.push(
                    r[
                      ((i =
                        ((t[s] << 16) & 16711680) +
                        ((t[s + 1] << 8) & 65280) +
                        (255 & t[s + 2])) >>
                        18) &
                        63
                    ] +
                      r[(i >> 12) & 63] +
                      r[(i >> 6) & 63] +
                      r[63 & i]
                  );
                return o.join("");
              })(t, s, s + 16383 > a ? a : s + 16383)
            );
          return (
            1 === i
              ? o.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + "==")
              : 2 === i &&
                o.push(
                  r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] +
                    r[(e >> 4) & 63] +
                    r[(e << 2) & 63] +
                    "="
                ),
            o.join("")
          );
        });
      for (
        var r = [],
          n = [],
          i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          o =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          s = 0,
          a = o.length;
        s < a;
        ++s
      )
        (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
      function u(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        -1 === r && (r = e);
        var n = r === e ? 0 : 4 - (r % 4);
        return [r, n];
      }
      (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
    },
    2653: function (t, e, r) {
      "use strict";
      var n = r(9109).Buffer;
      (e.oU = function (t) {
        {
          let e = n.from(t);
          e.reverse();
          let r = e.toString("hex");
          return 0 === r.length ? BigInt(0) : BigInt(`0x${r}`);
        }
      }),
        (e.k$ = function (t, e) {
          {
            let r = t.toString(16),
              i = n.from(r.padStart(2 * e, "0").slice(0, 2 * e), "hex");
            return i.reverse(), i;
          }
        });
    },
    5810: function (t, e, r) {
      "use strict";
      var n = r(9109).Buffer,
        i =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: function () {
                      return e[r];
                    },
                  });
              }
            : function (t, e, r, n) {
                void 0 === n && (n = r), (t[n] = e[r]);
              }),
        o =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (t, e) {
                Object.defineProperty(t, "default", {
                  enumerable: !0,
                  value: e,
                });
              }
            : function (t, e) {
                t.default = e;
              }),
        s =
          (this && this.__decorate) ||
          function (t, e, r, n) {
            var i,
              o = arguments.length,
              s =
                o < 3
                  ? e
                  : null === n
                  ? (n = Object.getOwnPropertyDescriptor(e, r))
                  : n;
            if (
              "object" == typeof Reflect &&
              "function" == typeof Reflect.decorate
            )
              s = Reflect.decorate(t, e, r, n);
            else
              for (var a = t.length - 1; a >= 0; a--)
                (i = t[a]) &&
                  (s = (o < 3 ? i(s) : o > 3 ? i(e, r, s) : i(e, r)) || s);
            return o > 3 && s && Object.defineProperty(e, r, s), s;
          },
        a =
          (this && this.__importStar) ||
          function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var r in t)
                "default" !== r &&
                  Object.hasOwnProperty.call(t, r) &&
                  i(e, t, r);
            return o(e, t), e;
          },
        u =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.deserializeUnchecked =
          e.deserialize =
          e.serialize =
          e.BinaryReader =
          e.BinaryWriter =
          e.BorshError =
          e.baseDecode =
          e.baseEncode =
            void 0);
      let h = u(r(6109)),
        l = u(r(5824)),
        f = a(r(7139)),
        c = new (
          "function" != typeof TextDecoder ? f.TextDecoder : TextDecoder
        )("utf-8", { fatal: !0 });
      (e.baseEncode = function (t) {
        return (
          "string" == typeof t && (t = n.from(t, "utf8")),
          l.default.encode(n.from(t))
        );
      }),
        (e.baseDecode = function (t) {
          return n.from(l.default.decode(t));
        });
      class d extends Error {
        constructor(t) {
          super(t), (this.fieldPath = []), (this.originalMessage = t);
        }
        addToFieldPath(t) {
          this.fieldPath.splice(0, 0, t),
            (this.message =
              this.originalMessage + ": " + this.fieldPath.join("."));
        }
      }
      e.BorshError = d;
      class p {
        constructor() {
          (this.buf = n.alloc(1024)), (this.length = 0);
        }
        maybeResize() {
          this.buf.length < 16 + this.length &&
            (this.buf = n.concat([this.buf, n.alloc(1024)]));
        }
        writeU8(t) {
          this.maybeResize(),
            this.buf.writeUInt8(t, this.length),
            (this.length += 1);
        }
        writeU16(t) {
          this.maybeResize(),
            this.buf.writeUInt16LE(t, this.length),
            (this.length += 2);
        }
        writeU32(t) {
          this.maybeResize(),
            this.buf.writeUInt32LE(t, this.length),
            (this.length += 4);
        }
        writeU64(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new h.default(t).toArray("le", 8)));
        }
        writeU128(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new h.default(t).toArray("le", 16)));
        }
        writeU256(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new h.default(t).toArray("le", 32)));
        }
        writeU512(t) {
          this.maybeResize(),
            this.writeBuffer(n.from(new h.default(t).toArray("le", 64)));
        }
        writeBuffer(t) {
          (this.buf = n.concat([
            n.from(this.buf.subarray(0, this.length)),
            t,
            n.alloc(1024),
          ])),
            (this.length += t.length);
        }
        writeString(t) {
          this.maybeResize();
          let e = n.from(t, "utf8");
          this.writeU32(e.length), this.writeBuffer(e);
        }
        writeFixedArray(t) {
          this.writeBuffer(n.from(t));
        }
        writeArray(t, e) {
          for (let r of (this.maybeResize(), this.writeU32(t.length), t))
            this.maybeResize(), e(r);
        }
        toArray() {
          return this.buf.subarray(0, this.length);
        }
      }
      function m(t, e, r) {
        let n = r.value;
        r.value = function (...t) {
          try {
            return n.apply(this, t);
          } catch (t) {
            if (
              t instanceof RangeError &&
              ["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(
                t.code
              ) >= 0
            )
              throw new d("Reached the end of buffer when deserializing");
            throw t;
          }
        };
      }
      e.BinaryWriter = p;
      class g {
        constructor(t) {
          (this.buf = t), (this.offset = 0);
        }
        readU8() {
          let t = this.buf.readUInt8(this.offset);
          return (this.offset += 1), t;
        }
        readU16() {
          let t = this.buf.readUInt16LE(this.offset);
          return (this.offset += 2), t;
        }
        readU32() {
          let t = this.buf.readUInt32LE(this.offset);
          return (this.offset += 4), t;
        }
        readU64() {
          let t = this.readBuffer(8);
          return new h.default(t, "le");
        }
        readU128() {
          let t = this.readBuffer(16);
          return new h.default(t, "le");
        }
        readU256() {
          let t = this.readBuffer(32);
          return new h.default(t, "le");
        }
        readU512() {
          let t = this.readBuffer(64);
          return new h.default(t, "le");
        }
        readBuffer(t) {
          if (this.offset + t > this.buf.length)
            throw new d(`Expected buffer length ${t} isn't within bounds`);
          let e = this.buf.slice(this.offset, this.offset + t);
          return (this.offset += t), e;
        }
        readString() {
          let t = this.readU32(),
            e = this.readBuffer(t);
          try {
            return c.decode(e);
          } catch (t) {
            throw new d(`Error decoding UTF-8 string: ${t}`);
          }
        }
        readFixedArray(t) {
          return new Uint8Array(this.readBuffer(t));
        }
        readArray(t) {
          let e = this.readU32(),
            r = [];
          for (let n = 0; n < e; ++n) r.push(t());
          return r;
        }
      }
      function y(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      function w(t, e, r, n, i) {
        try {
          if ("string" == typeof n) i[`write${y(n)}`](r);
          else if (n instanceof Array) {
            if ("number" == typeof n[0]) {
              if (r.length !== n[0])
                throw new d(
                  `Expecting byte array of length ${n[0]}, but got ${r.length} bytes`
                );
              i.writeFixedArray(r);
            } else if (2 === n.length && "number" == typeof n[1]) {
              if (r.length !== n[1])
                throw new d(
                  `Expecting byte array of length ${n[1]}, but got ${r.length} bytes`
                );
              for (let e = 0; e < n[1]; e++) w(t, null, r[e], n[0], i);
            } else
              i.writeArray(r, (r) => {
                w(t, e, r, n[0], i);
              });
          } else if (void 0 !== n.kind)
            switch (n.kind) {
              case "option":
                null == r
                  ? i.writeU8(0)
                  : (i.writeU8(1), w(t, e, r, n.type, i));
                break;
              case "map":
                i.writeU32(r.size),
                  r.forEach((r, o) => {
                    w(t, e, o, n.key, i), w(t, e, r, n.value, i);
                  });
                break;
              default:
                throw new d(`FieldType ${n} unrecognized`);
            }
          else v(t, r, i);
        } catch (t) {
          throw (t instanceof d && t.addToFieldPath(e), t);
        }
      }
      function v(t, e, r) {
        if ("function" == typeof e.borshSerialize) {
          e.borshSerialize(r);
          return;
        }
        let n = t.get(e.constructor);
        if (!n) throw new d(`Class ${e.constructor.name} is missing in schema`);
        if ("struct" === n.kind)
          n.fields.map(([n, i]) => {
            w(t, n, e[n], i, r);
          });
        else if ("enum" === n.kind) {
          let i = e[n.field];
          for (let o = 0; o < n.values.length; ++o) {
            let [s, a] = n.values[o];
            if (s === i) {
              r.writeU8(o), w(t, s, e[s], a, r);
              break;
            }
          }
        } else
          throw new d(
            `Unexpected schema kind: ${n.kind} for ${e.constructor.name}`
          );
      }
      function b(t, e, r, n) {
        try {
          if ("string" == typeof r) return n[`read${y(r)}`]();
          if (r instanceof Array) {
            if ("number" == typeof r[0]) return n.readFixedArray(r[0]);
            if ("number" != typeof r[1])
              return n.readArray(() => b(t, e, r[0], n));
            {
              let e = [];
              for (let i = 0; i < r[1]; i++) e.push(b(t, null, r[0], n));
              return e;
            }
          }
          if ("option" === r.kind) {
            if (n.readU8()) return b(t, e, r.type, n);
            return;
          }
          if ("map" === r.kind) {
            let i = new Map(),
              o = n.readU32();
            for (let s = 0; s < o; s++) {
              let o = b(t, e, r.key, n),
                s = b(t, e, r.value, n);
              i.set(o, s);
            }
            return i;
          }
          return M(t, r, n);
        } catch (t) {
          throw (t instanceof d && t.addToFieldPath(e), t);
        }
      }
      function M(t, e, r) {
        if ("function" == typeof e.borshDeserialize)
          return e.borshDeserialize(r);
        let n = t.get(e);
        if (!n) throw new d(`Class ${e.name} is missing in schema`);
        if ("struct" === n.kind) {
          let n = {};
          for (let [i, o] of t.get(e).fields) n[i] = b(t, i, o, r);
          return new e(n);
        }
        if ("enum" === n.kind) {
          let i = r.readU8();
          if (i >= n.values.length)
            throw new d(`Enum index: ${i} is out of range`);
          let [o, s] = n.values[i],
            a = b(t, o, s, r);
          return new e({ [o]: a });
        }
        throw new d(
          `Unexpected schema kind: ${n.kind} for ${e.constructor.name}`
        );
      }
      s([m], g.prototype, "readU8", null),
        s([m], g.prototype, "readU16", null),
        s([m], g.prototype, "readU32", null),
        s([m], g.prototype, "readU64", null),
        s([m], g.prototype, "readU128", null),
        s([m], g.prototype, "readU256", null),
        s([m], g.prototype, "readU512", null),
        s([m], g.prototype, "readString", null),
        s([m], g.prototype, "readFixedArray", null),
        s([m], g.prototype, "readArray", null),
        (e.BinaryReader = g),
        (e.serialize = function (t, e, r = p) {
          let n = new r();
          return v(t, e, n), n.toArray();
        }),
        (e.deserialize = function (t, e, r, n = g) {
          let i = new n(r),
            o = M(t, e, i);
          if (i.offset < r.length)
            throw new d(
              `Unexpected ${r.length - i.offset} bytes after deserialized data`
            );
          return o;
        }),
        (e.deserializeUnchecked = function (t, e, r, n = g) {
          return M(t, e, new n(r));
        });
    },
    6109: function (t, e, r) {
      !(function (t, e) {
        "use strict";
        function n(t, e) {
          if (!t) throw Error(e || "Assertion failed");
        }
        function i(t, e) {
          t.super_ = e;
          var r = function () {};
          (r.prototype = e.prototype),
            (t.prototype = new r()),
            (t.prototype.constructor = t);
        }
        function o(t, e, r) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" === e || "be" === e) && ((r = e), (e = 10)),
              this._init(t || 0, e || 10, r || "be"));
        }
        "object" == typeof t ? (t.exports = o) : (e.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          f =
            "undefined" != typeof window && void 0 !== window.Buffer
              ? window.Buffer
              : r(1456).Buffer;
        } catch (t) {}
        function s(t, e) {
          var r = t.charCodeAt(e);
          return r >= 48 && r <= 57
            ? r - 48
            : r >= 65 && r <= 70
            ? r - 55
            : r >= 97 && r <= 102
            ? r - 87
            : void n(!1, "Invalid character in " + t);
        }
        function a(t, e, r) {
          var n = s(t, r);
          return r - 1 >= e && (n |= s(t, r - 1) << 4), n;
        }
        function u(t, e, r, i) {
          for (var o = 0, s = 0, a = Math.min(t.length, r), u = e; u < a; u++) {
            var h = t.charCodeAt(u) - 48;
            (o *= i),
              (s = h >= 49 ? h - 49 + 10 : h >= 17 ? h - 17 + 10 : h),
              n(h >= 0 && s < i, "Invalid character"),
              (o += s);
          }
          return o;
        }
        function h(t, e) {
          (t.words = e.words),
            (t.length = e.length),
            (t.negative = e.negative),
            (t.red = e.red);
        }
        if (
          ((o.isBN = function (t) {
            return (
              t instanceof o ||
              (null !== t &&
                "object" == typeof t &&
                t.constructor.wordSize === o.wordSize &&
                Array.isArray(t.words))
            );
          }),
          (o.max = function (t, e) {
            return t.cmp(e) > 0 ? t : e;
          }),
          (o.min = function (t, e) {
            return 0 > t.cmp(e) ? t : e;
          }),
          (o.prototype._init = function (t, e, r) {
            if ("number" == typeof t) return this._initNumber(t, e, r);
            if ("object" == typeof t) return this._initArray(t, e, r);
            "hex" === e && (e = 16), n(e === (0 | e) && e >= 2 && e <= 36);
            var i = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] &&
              (i++, (this.negative = 1)),
              i < t.length &&
                (16 === e
                  ? this._parseHex(t, i, r)
                  : (this._parseBase(t, e, i),
                    "le" === r && this._initArray(this.toArray(), e, r)));
          }),
          (o.prototype._initNumber = function (t, e, r) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (n(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === r && this._initArray(this.toArray(), e, r);
          }),
          (o.prototype._initArray = function (t, e, r) {
            if ((n("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = Array(this.length));
            for (var i, o, s = 0; s < this.length; s++) this.words[s] = 0;
            var a = 0;
            if ("be" === r)
              for (s = t.length - 1, i = 0; s >= 0; s -= 3)
                (o = t[s] | (t[s - 1] << 8) | (t[s - 2] << 16)),
                  (this.words[i] |= (o << a) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            else if ("le" === r)
              for (s = 0, i = 0; s < t.length; s += 3)
                (o = t[s] | (t[s + 1] << 8) | (t[s + 2] << 16)),
                  (this.words[i] |= (o << a) & 67108863),
                  (this.words[i + 1] = (o >>> (26 - a)) & 67108863),
                  (a += 24) >= 26 && ((a -= 26), i++);
            return this._strip();
          }),
          (o.prototype._parseHex = function (t, e, r) {
            (this.length = Math.ceil((t.length - e) / 6)),
              (this.words = Array(this.length));
            for (var n, i = 0; i < this.length; i++) this.words[i] = 0;
            var o = 0,
              s = 0;
            if ("be" === r)
              for (i = t.length - 1; i >= e; i -= 2)
                (n = a(t, e, i) << o),
                  (this.words[s] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                    : (o += 8);
            else
              for (
                i = (t.length - e) % 2 == 0 ? e + 1 : e;
                i < t.length;
                i += 2
              )
                (n = a(t, e, i) << o),
                  (this.words[s] |= 67108863 & n),
                  o >= 18
                    ? ((o -= 18), (s += 1), (this.words[s] |= n >>> 26))
                    : (o += 8);
            this._strip();
          }),
          (o.prototype._parseBase = function (t, e, r) {
            (this.words = [0]), (this.length = 1);
            for (var n = 0, i = 1; i <= 67108863; i *= e) n++;
            n--, (i = (i / e) | 0);
            for (
              var o = t.length - r,
                s = o % n,
                a = Math.min(o, o - s) + r,
                h = 0,
                l = r;
              l < a;
              l += n
            )
              (h = u(t, l, l + n, e)),
                this.imuln(i),
                this.words[0] + h < 67108864
                  ? (this.words[0] += h)
                  : this._iaddn(h);
            if (0 !== s) {
              var f = 1;
              for (h = u(t, l, t.length, e), l = 0; l < s; l++) f *= e;
              this.imuln(f),
                this.words[0] + h < 67108864
                  ? (this.words[0] += h)
                  : this._iaddn(h);
            }
            this._strip();
          }),
          (o.prototype.copy = function (t) {
            t.words = Array(this.length);
            for (var e = 0; e < this.length; e++) t.words[e] = this.words[e];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype._move = function (t) {
            h(t, this);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          "undefined" != typeof Symbol && "function" == typeof Symbol.for)
        )
          try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = l;
          } catch (t) {
            o.prototype.inspect = l;
          }
        else o.prototype.inspect = l;
        function l() {
          return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var f,
          c = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          d = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          p = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function m(t, e, r) {
          r.negative = e.negative ^ t.negative;
          var n = (t.length + e.length) | 0;
          (r.length = n), (n = (n - 1) | 0);
          var i = 0 | t.words[0],
            o = 0 | e.words[0],
            s = i * o,
            a = 67108863 & s,
            u = (s / 67108864) | 0;
          r.words[0] = a;
          for (var h = 1; h < n; h++) {
            for (
              var l = u >>> 26,
                f = 67108863 & u,
                c = Math.min(h, e.length - 1),
                d = Math.max(0, h - t.length + 1);
              d <= c;
              d++
            ) {
              var p = (h - d) | 0;
              (l +=
                ((s = (i = 0 | t.words[p]) * (o = 0 | e.words[d]) + f) /
                  67108864) |
                0),
                (f = 67108863 & s);
            }
            (r.words[h] = 0 | f), (u = 0 | l);
          }
          return 0 !== u ? (r.words[h] = 0 | u) : r.length--, r._strip();
        }
        (o.prototype.toString = function (t, e) {
          if (((e = 0 | e || 1), 16 === (t = t || 10) || "hex" === t)) {
            r = "";
            for (var r, i = 0, o = 0, s = 0; s < this.length; s++) {
              var a = this.words[s],
                u = (((a << i) | o) & 16777215).toString(16);
              (o = (a >>> (24 - i)) & 16777215),
                (i += 2) >= 26 && ((i -= 26), s--),
                (r =
                  0 !== o || s !== this.length - 1
                    ? c[6 - u.length] + u + r
                    : u + r);
            }
            for (0 !== o && (r = o.toString(16) + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var h = d[t],
              l = p[t];
            r = "";
            var f = this.clone();
            for (f.negative = 0; !f.isZero(); ) {
              var m = f.modrn(l).toString(t);
              r = (f = f.idivn(l)).isZero() ? m + r : c[h - m.length] + m + r;
            }
            for (this.isZero() && (r = "0" + r); r.length % e != 0; )
              r = "0" + r;
            return 0 !== this.negative && (r = "-" + r), r;
          }
          n(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  n(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16, 2);
          }),
          f &&
            (o.prototype.toBuffer = function (t, e) {
              return this.toArrayLike(f, t, e);
            }),
          (o.prototype.toArray = function (t, e) {
            return this.toArrayLike(Array, t, e);
          }),
          (o.prototype.toArrayLike = function (t, e, r) {
            this._strip();
            var i = this.byteLength(),
              o = r || Math.max(1, i);
            n(i <= o, "byte array longer than desired length"),
              n(o > 0, "Requested array length <= 0");
            var s = t.allocUnsafe ? t.allocUnsafe(o) : new t(o);
            return this["_toArrayLike" + ("le" === e ? "LE" : "BE")](s, i), s;
          }),
          (o.prototype._toArrayLikeLE = function (t, e) {
            for (var r = 0, n = 0, i = 0, o = 0; i < this.length; i++) {
              var s = (this.words[i] << o) | n;
              (t[r++] = 255 & s),
                r < t.length && (t[r++] = (s >> 8) & 255),
                r < t.length && (t[r++] = (s >> 16) & 255),
                6 === o
                  ? (r < t.length && (t[r++] = (s >> 24) & 255),
                    (n = 0),
                    (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r < t.length) for (t[r++] = n; r < t.length; ) t[r++] = 0;
          }),
          (o.prototype._toArrayLikeBE = function (t, e) {
            for (
              var r = t.length - 1, n = 0, i = 0, o = 0;
              i < this.length;
              i++
            ) {
              var s = (this.words[i] << o) | n;
              (t[r--] = 255 & s),
                r >= 0 && (t[r--] = (s >> 8) & 255),
                r >= 0 && (t[r--] = (s >> 16) & 255),
                6 === o
                  ? (r >= 0 && (t[r--] = (s >> 24) & 255), (n = 0), (o = 0))
                  : ((n = s >>> 24), (o += 2));
            }
            if (r >= 0) for (t[r--] = n; r >= 0; ) t[r--] = 0;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var e = t,
                  r = 0;
                return (
                  e >= 4096 && ((r += 13), (e >>>= 13)),
                  e >= 64 && ((r += 7), (e >>>= 7)),
                  e >= 8 && ((r += 4), (e >>>= 4)),
                  e >= 2 && ((r += 2), (e >>>= 2)),
                  r + e
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var e = t,
              r = 0;
            return (
              (8191 & e) == 0 && ((r += 13), (e >>>= 13)),
              (127 & e) == 0 && ((r += 7), (e >>>= 7)),
              (15 & e) == 0 && ((r += 4), (e >>>= 4)),
              (3 & e) == 0 && ((r += 2), (e >>>= 2)),
              (1 & e) == 0 && r++,
              r
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              e = this._countBits(t);
            return (this.length - 1) * 26 + e;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, e = 0; e < this.length; e++) {
              var r = this._zeroBits(this.words[e]);
              if (((t += r), 26 !== r)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var e = 0; e < t.length; e++)
              this.words[e] = this.words[e] | t.words[e];
            return this._strip();
          }),
          (o.prototype.ior = function (t) {
            return n((this.negative | t.negative) == 0), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var e;
            e = this.length > t.length ? t : this;
            for (var r = 0; r < e.length; r++)
              this.words[r] = this.words[r] & t.words[r];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.iand = function (t) {
            return n((this.negative | t.negative) == 0), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            this.length > t.length
              ? ((e = this), (r = t))
              : ((e = t), (r = this));
            for (var e, r, n = 0; n < r.length; n++)
              this.words[n] = e.words[n] ^ r.words[n];
            if (this !== e)
              for (; n < e.length; n++) this.words[n] = e.words[n];
            return (this.length = e.length), this._strip();
          }),
          (o.prototype.ixor = function (t) {
            return n((this.negative | t.negative) == 0), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = 0 | Math.ceil(t / 26),
              r = t % 26;
            this._expand(e), r > 0 && e--;
            for (var i = 0; i < e; i++)
              this.words[i] = 67108863 & ~this.words[i];
            return (
              r > 0 &&
                (this.words[i] = ~this.words[i] & (67108863 >> (26 - r))),
              this._strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, e) {
            n("number" == typeof t && t >= 0);
            var r = (t / 26) | 0,
              i = t % 26;
            return (
              this._expand(r + 1),
              e
                ? (this.words[r] = this.words[r] | (1 << i))
                : (this.words[r] = this.words[r] & ~(1 << i)),
              this._strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (e = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (e = this.isub(t)),
                (t.negative = 1),
                e._normSign()
              );
            this.length > t.length
              ? ((r = this), (n = t))
              : ((r = t), (n = this));
            for (var e, r, n, i = 0, o = 0; o < n.length; o++)
              (e = (0 | r.words[o]) + (0 | n.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            for (; 0 !== i && o < r.length; o++)
              (e = (0 | r.words[o]) + i),
                (this.words[o] = 67108863 & e),
                (i = e >>> 26);
            if (((this.length = r.length), 0 !== i))
              (this.words[this.length] = i), this.length++;
            else if (r !== this)
              for (; o < r.length; o++) this.words[o] = r.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var e;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (e = this.sub(t)), (t.negative ^= 1), e)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (e = t.sub(this)), (this.negative = 1), e)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var e,
                r,
                n = this.iadd(t);
              return (t.negative = 1), n._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var i = this.cmp(t);
            if (0 === i)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            i > 0 ? ((e = this), (r = t)) : ((e = t), (r = this));
            for (var o = 0, s = 0; s < r.length; s++)
              (o = (n = (0 | e.words[s]) - (0 | r.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & n);
            for (; 0 !== o && s < e.length; s++)
              (o = (n = (0 | e.words[s]) + o) >> 26),
                (this.words[s] = 67108863 & n);
            if (0 === o && s < e.length && e !== this)
              for (; s < e.length; s++) this.words[s] = e.words[s];
            return (
              (this.length = Math.max(this.length, s)),
              e !== this && (this.negative = 1),
              this._strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var g = function (t, e, r) {
          var n,
            i,
            o,
            s = t.words,
            a = e.words,
            u = r.words,
            h = 0,
            l = 0 | s[0],
            f = 8191 & l,
            c = l >>> 13,
            d = 0 | s[1],
            p = 8191 & d,
            m = d >>> 13,
            g = 0 | s[2],
            y = 8191 & g,
            w = g >>> 13,
            v = 0 | s[3],
            b = 8191 & v,
            M = v >>> 13,
            E = 0 | s[4],
            _ = 8191 & E,
            A = E >>> 13,
            x = 0 | s[5],
            B = 8191 & x,
            S = x >>> 13,
            I = 0 | s[6],
            R = 8191 & I,
            O = I >>> 13,
            L = 0 | s[7],
            C = 8191 & L,
            T = L >>> 13,
            U = 0 | s[8],
            k = 8191 & U,
            N = U >>> 13,
            P = 0 | s[9],
            z = 8191 & P,
            j = P >>> 13,
            F = 0 | a[0],
            D = 8191 & F,
            q = F >>> 13,
            $ = 0 | a[1],
            H = 8191 & $,
            V = $ >>> 13,
            Z = 0 | a[2],
            W = 8191 & Z,
            K = Z >>> 13,
            G = 0 | a[3],
            Y = 8191 & G,
            J = G >>> 13,
            Q = 0 | a[4],
            X = 8191 & Q,
            tt = Q >>> 13,
            te = 0 | a[5],
            tr = 8191 & te,
            tn = te >>> 13,
            ti = 0 | a[6],
            to = 8191 & ti,
            ts = ti >>> 13,
            ta = 0 | a[7],
            tu = 8191 & ta,
            th = ta >>> 13,
            tl = 0 | a[8],
            tf = 8191 & tl,
            tc = tl >>> 13,
            td = 0 | a[9],
            tp = 8191 & td,
            tm = td >>> 13;
          (r.negative = t.negative ^ e.negative), (r.length = 19);
          var tg =
            (((h + (n = Math.imul(f, D))) | 0) +
              ((8191 & (i = ((i = Math.imul(f, q)) + Math.imul(c, D)) | 0)) <<
                13)) |
            0;
          (h = ((((o = Math.imul(c, q)) + (i >>> 13)) | 0) + (tg >>> 26)) | 0),
            (tg &= 67108863),
            (n = Math.imul(p, D)),
            (i = ((i = Math.imul(p, q)) + Math.imul(m, D)) | 0),
            (o = Math.imul(m, q));
          var ty =
            (((h + (n = (n + Math.imul(f, H)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, V)) | 0) + Math.imul(c, H)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, V)) | 0) + (i >>> 13)) | 0) +
              (ty >>> 26)) |
            0),
            (ty &= 67108863),
            (n = Math.imul(y, D)),
            (i = ((i = Math.imul(y, q)) + Math.imul(w, D)) | 0),
            (o = Math.imul(w, q)),
            (n = (n + Math.imul(p, H)) | 0),
            (i = ((i = (i + Math.imul(p, V)) | 0) + Math.imul(m, H)) | 0),
            (o = (o + Math.imul(m, V)) | 0);
          var tw =
            (((h + (n = (n + Math.imul(f, W)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, K)) | 0) + Math.imul(c, W)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, K)) | 0) + (i >>> 13)) | 0) +
              (tw >>> 26)) |
            0),
            (tw &= 67108863),
            (n = Math.imul(b, D)),
            (i = ((i = Math.imul(b, q)) + Math.imul(M, D)) | 0),
            (o = Math.imul(M, q)),
            (n = (n + Math.imul(y, H)) | 0),
            (i = ((i = (i + Math.imul(y, V)) | 0) + Math.imul(w, H)) | 0),
            (o = (o + Math.imul(w, V)) | 0),
            (n = (n + Math.imul(p, W)) | 0),
            (i = ((i = (i + Math.imul(p, K)) | 0) + Math.imul(m, W)) | 0),
            (o = (o + Math.imul(m, K)) | 0);
          var tv =
            (((h + (n = (n + Math.imul(f, Y)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, J)) | 0) + Math.imul(c, Y)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, J)) | 0) + (i >>> 13)) | 0) +
              (tv >>> 26)) |
            0),
            (tv &= 67108863),
            (n = Math.imul(_, D)),
            (i = ((i = Math.imul(_, q)) + Math.imul(A, D)) | 0),
            (o = Math.imul(A, q)),
            (n = (n + Math.imul(b, H)) | 0),
            (i = ((i = (i + Math.imul(b, V)) | 0) + Math.imul(M, H)) | 0),
            (o = (o + Math.imul(M, V)) | 0),
            (n = (n + Math.imul(y, W)) | 0),
            (i = ((i = (i + Math.imul(y, K)) | 0) + Math.imul(w, W)) | 0),
            (o = (o + Math.imul(w, K)) | 0),
            (n = (n + Math.imul(p, Y)) | 0),
            (i = ((i = (i + Math.imul(p, J)) | 0) + Math.imul(m, Y)) | 0),
            (o = (o + Math.imul(m, J)) | 0);
          var tb =
            (((h + (n = (n + Math.imul(f, X)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, tt)) | 0) + Math.imul(c, X)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, tt)) | 0) + (i >>> 13)) | 0) +
              (tb >>> 26)) |
            0),
            (tb &= 67108863),
            (n = Math.imul(B, D)),
            (i = ((i = Math.imul(B, q)) + Math.imul(S, D)) | 0),
            (o = Math.imul(S, q)),
            (n = (n + Math.imul(_, H)) | 0),
            (i = ((i = (i + Math.imul(_, V)) | 0) + Math.imul(A, H)) | 0),
            (o = (o + Math.imul(A, V)) | 0),
            (n = (n + Math.imul(b, W)) | 0),
            (i = ((i = (i + Math.imul(b, K)) | 0) + Math.imul(M, W)) | 0),
            (o = (o + Math.imul(M, K)) | 0),
            (n = (n + Math.imul(y, Y)) | 0),
            (i = ((i = (i + Math.imul(y, J)) | 0) + Math.imul(w, Y)) | 0),
            (o = (o + Math.imul(w, J)) | 0),
            (n = (n + Math.imul(p, X)) | 0),
            (i = ((i = (i + Math.imul(p, tt)) | 0) + Math.imul(m, X)) | 0),
            (o = (o + Math.imul(m, tt)) | 0);
          var tM =
            (((h + (n = (n + Math.imul(f, tr)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, tn)) | 0) + Math.imul(c, tr)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, tn)) | 0) + (i >>> 13)) | 0) +
              (tM >>> 26)) |
            0),
            (tM &= 67108863),
            (n = Math.imul(R, D)),
            (i = ((i = Math.imul(R, q)) + Math.imul(O, D)) | 0),
            (o = Math.imul(O, q)),
            (n = (n + Math.imul(B, H)) | 0),
            (i = ((i = (i + Math.imul(B, V)) | 0) + Math.imul(S, H)) | 0),
            (o = (o + Math.imul(S, V)) | 0),
            (n = (n + Math.imul(_, W)) | 0),
            (i = ((i = (i + Math.imul(_, K)) | 0) + Math.imul(A, W)) | 0),
            (o = (o + Math.imul(A, K)) | 0),
            (n = (n + Math.imul(b, Y)) | 0),
            (i = ((i = (i + Math.imul(b, J)) | 0) + Math.imul(M, Y)) | 0),
            (o = (o + Math.imul(M, J)) | 0),
            (n = (n + Math.imul(y, X)) | 0),
            (i = ((i = (i + Math.imul(y, tt)) | 0) + Math.imul(w, X)) | 0),
            (o = (o + Math.imul(w, tt)) | 0),
            (n = (n + Math.imul(p, tr)) | 0),
            (i = ((i = (i + Math.imul(p, tn)) | 0) + Math.imul(m, tr)) | 0),
            (o = (o + Math.imul(m, tn)) | 0);
          var tE =
            (((h + (n = (n + Math.imul(f, to)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, ts)) | 0) + Math.imul(c, to)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, ts)) | 0) + (i >>> 13)) | 0) +
              (tE >>> 26)) |
            0),
            (tE &= 67108863),
            (n = Math.imul(C, D)),
            (i = ((i = Math.imul(C, q)) + Math.imul(T, D)) | 0),
            (o = Math.imul(T, q)),
            (n = (n + Math.imul(R, H)) | 0),
            (i = ((i = (i + Math.imul(R, V)) | 0) + Math.imul(O, H)) | 0),
            (o = (o + Math.imul(O, V)) | 0),
            (n = (n + Math.imul(B, W)) | 0),
            (i = ((i = (i + Math.imul(B, K)) | 0) + Math.imul(S, W)) | 0),
            (o = (o + Math.imul(S, K)) | 0),
            (n = (n + Math.imul(_, Y)) | 0),
            (i = ((i = (i + Math.imul(_, J)) | 0) + Math.imul(A, Y)) | 0),
            (o = (o + Math.imul(A, J)) | 0),
            (n = (n + Math.imul(b, X)) | 0),
            (i = ((i = (i + Math.imul(b, tt)) | 0) + Math.imul(M, X)) | 0),
            (o = (o + Math.imul(M, tt)) | 0),
            (n = (n + Math.imul(y, tr)) | 0),
            (i = ((i = (i + Math.imul(y, tn)) | 0) + Math.imul(w, tr)) | 0),
            (o = (o + Math.imul(w, tn)) | 0),
            (n = (n + Math.imul(p, to)) | 0),
            (i = ((i = (i + Math.imul(p, ts)) | 0) + Math.imul(m, to)) | 0),
            (o = (o + Math.imul(m, ts)) | 0);
          var t_ =
            (((h + (n = (n + Math.imul(f, tu)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, th)) | 0) + Math.imul(c, tu)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, th)) | 0) + (i >>> 13)) | 0) +
              (t_ >>> 26)) |
            0),
            (t_ &= 67108863),
            (n = Math.imul(k, D)),
            (i = ((i = Math.imul(k, q)) + Math.imul(N, D)) | 0),
            (o = Math.imul(N, q)),
            (n = (n + Math.imul(C, H)) | 0),
            (i = ((i = (i + Math.imul(C, V)) | 0) + Math.imul(T, H)) | 0),
            (o = (o + Math.imul(T, V)) | 0),
            (n = (n + Math.imul(R, W)) | 0),
            (i = ((i = (i + Math.imul(R, K)) | 0) + Math.imul(O, W)) | 0),
            (o = (o + Math.imul(O, K)) | 0),
            (n = (n + Math.imul(B, Y)) | 0),
            (i = ((i = (i + Math.imul(B, J)) | 0) + Math.imul(S, Y)) | 0),
            (o = (o + Math.imul(S, J)) | 0),
            (n = (n + Math.imul(_, X)) | 0),
            (i = ((i = (i + Math.imul(_, tt)) | 0) + Math.imul(A, X)) | 0),
            (o = (o + Math.imul(A, tt)) | 0),
            (n = (n + Math.imul(b, tr)) | 0),
            (i = ((i = (i + Math.imul(b, tn)) | 0) + Math.imul(M, tr)) | 0),
            (o = (o + Math.imul(M, tn)) | 0),
            (n = (n + Math.imul(y, to)) | 0),
            (i = ((i = (i + Math.imul(y, ts)) | 0) + Math.imul(w, to)) | 0),
            (o = (o + Math.imul(w, ts)) | 0),
            (n = (n + Math.imul(p, tu)) | 0),
            (i = ((i = (i + Math.imul(p, th)) | 0) + Math.imul(m, tu)) | 0),
            (o = (o + Math.imul(m, th)) | 0);
          var tA =
            (((h + (n = (n + Math.imul(f, tf)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, tc)) | 0) + Math.imul(c, tf)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, tc)) | 0) + (i >>> 13)) | 0) +
              (tA >>> 26)) |
            0),
            (tA &= 67108863),
            (n = Math.imul(z, D)),
            (i = ((i = Math.imul(z, q)) + Math.imul(j, D)) | 0),
            (o = Math.imul(j, q)),
            (n = (n + Math.imul(k, H)) | 0),
            (i = ((i = (i + Math.imul(k, V)) | 0) + Math.imul(N, H)) | 0),
            (o = (o + Math.imul(N, V)) | 0),
            (n = (n + Math.imul(C, W)) | 0),
            (i = ((i = (i + Math.imul(C, K)) | 0) + Math.imul(T, W)) | 0),
            (o = (o + Math.imul(T, K)) | 0),
            (n = (n + Math.imul(R, Y)) | 0),
            (i = ((i = (i + Math.imul(R, J)) | 0) + Math.imul(O, Y)) | 0),
            (o = (o + Math.imul(O, J)) | 0),
            (n = (n + Math.imul(B, X)) | 0),
            (i = ((i = (i + Math.imul(B, tt)) | 0) + Math.imul(S, X)) | 0),
            (o = (o + Math.imul(S, tt)) | 0),
            (n = (n + Math.imul(_, tr)) | 0),
            (i = ((i = (i + Math.imul(_, tn)) | 0) + Math.imul(A, tr)) | 0),
            (o = (o + Math.imul(A, tn)) | 0),
            (n = (n + Math.imul(b, to)) | 0),
            (i = ((i = (i + Math.imul(b, ts)) | 0) + Math.imul(M, to)) | 0),
            (o = (o + Math.imul(M, ts)) | 0),
            (n = (n + Math.imul(y, tu)) | 0),
            (i = ((i = (i + Math.imul(y, th)) | 0) + Math.imul(w, tu)) | 0),
            (o = (o + Math.imul(w, th)) | 0),
            (n = (n + Math.imul(p, tf)) | 0),
            (i = ((i = (i + Math.imul(p, tc)) | 0) + Math.imul(m, tf)) | 0),
            (o = (o + Math.imul(m, tc)) | 0);
          var tx =
            (((h + (n = (n + Math.imul(f, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(f, tm)) | 0) + Math.imul(c, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(c, tm)) | 0) + (i >>> 13)) | 0) +
              (tx >>> 26)) |
            0),
            (tx &= 67108863),
            (n = Math.imul(z, H)),
            (i = ((i = Math.imul(z, V)) + Math.imul(j, H)) | 0),
            (o = Math.imul(j, V)),
            (n = (n + Math.imul(k, W)) | 0),
            (i = ((i = (i + Math.imul(k, K)) | 0) + Math.imul(N, W)) | 0),
            (o = (o + Math.imul(N, K)) | 0),
            (n = (n + Math.imul(C, Y)) | 0),
            (i = ((i = (i + Math.imul(C, J)) | 0) + Math.imul(T, Y)) | 0),
            (o = (o + Math.imul(T, J)) | 0),
            (n = (n + Math.imul(R, X)) | 0),
            (i = ((i = (i + Math.imul(R, tt)) | 0) + Math.imul(O, X)) | 0),
            (o = (o + Math.imul(O, tt)) | 0),
            (n = (n + Math.imul(B, tr)) | 0),
            (i = ((i = (i + Math.imul(B, tn)) | 0) + Math.imul(S, tr)) | 0),
            (o = (o + Math.imul(S, tn)) | 0),
            (n = (n + Math.imul(_, to)) | 0),
            (i = ((i = (i + Math.imul(_, ts)) | 0) + Math.imul(A, to)) | 0),
            (o = (o + Math.imul(A, ts)) | 0),
            (n = (n + Math.imul(b, tu)) | 0),
            (i = ((i = (i + Math.imul(b, th)) | 0) + Math.imul(M, tu)) | 0),
            (o = (o + Math.imul(M, th)) | 0),
            (n = (n + Math.imul(y, tf)) | 0),
            (i = ((i = (i + Math.imul(y, tc)) | 0) + Math.imul(w, tf)) | 0),
            (o = (o + Math.imul(w, tc)) | 0);
          var tB =
            (((h + (n = (n + Math.imul(p, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(p, tm)) | 0) + Math.imul(m, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(m, tm)) | 0) + (i >>> 13)) | 0) +
              (tB >>> 26)) |
            0),
            (tB &= 67108863),
            (n = Math.imul(z, W)),
            (i = ((i = Math.imul(z, K)) + Math.imul(j, W)) | 0),
            (o = Math.imul(j, K)),
            (n = (n + Math.imul(k, Y)) | 0),
            (i = ((i = (i + Math.imul(k, J)) | 0) + Math.imul(N, Y)) | 0),
            (o = (o + Math.imul(N, J)) | 0),
            (n = (n + Math.imul(C, X)) | 0),
            (i = ((i = (i + Math.imul(C, tt)) | 0) + Math.imul(T, X)) | 0),
            (o = (o + Math.imul(T, tt)) | 0),
            (n = (n + Math.imul(R, tr)) | 0),
            (i = ((i = (i + Math.imul(R, tn)) | 0) + Math.imul(O, tr)) | 0),
            (o = (o + Math.imul(O, tn)) | 0),
            (n = (n + Math.imul(B, to)) | 0),
            (i = ((i = (i + Math.imul(B, ts)) | 0) + Math.imul(S, to)) | 0),
            (o = (o + Math.imul(S, ts)) | 0),
            (n = (n + Math.imul(_, tu)) | 0),
            (i = ((i = (i + Math.imul(_, th)) | 0) + Math.imul(A, tu)) | 0),
            (o = (o + Math.imul(A, th)) | 0),
            (n = (n + Math.imul(b, tf)) | 0),
            (i = ((i = (i + Math.imul(b, tc)) | 0) + Math.imul(M, tf)) | 0),
            (o = (o + Math.imul(M, tc)) | 0);
          var tS =
            (((h + (n = (n + Math.imul(y, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(y, tm)) | 0) + Math.imul(w, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(w, tm)) | 0) + (i >>> 13)) | 0) +
              (tS >>> 26)) |
            0),
            (tS &= 67108863),
            (n = Math.imul(z, Y)),
            (i = ((i = Math.imul(z, J)) + Math.imul(j, Y)) | 0),
            (o = Math.imul(j, J)),
            (n = (n + Math.imul(k, X)) | 0),
            (i = ((i = (i + Math.imul(k, tt)) | 0) + Math.imul(N, X)) | 0),
            (o = (o + Math.imul(N, tt)) | 0),
            (n = (n + Math.imul(C, tr)) | 0),
            (i = ((i = (i + Math.imul(C, tn)) | 0) + Math.imul(T, tr)) | 0),
            (o = (o + Math.imul(T, tn)) | 0),
            (n = (n + Math.imul(R, to)) | 0),
            (i = ((i = (i + Math.imul(R, ts)) | 0) + Math.imul(O, to)) | 0),
            (o = (o + Math.imul(O, ts)) | 0),
            (n = (n + Math.imul(B, tu)) | 0),
            (i = ((i = (i + Math.imul(B, th)) | 0) + Math.imul(S, tu)) | 0),
            (o = (o + Math.imul(S, th)) | 0),
            (n = (n + Math.imul(_, tf)) | 0),
            (i = ((i = (i + Math.imul(_, tc)) | 0) + Math.imul(A, tf)) | 0),
            (o = (o + Math.imul(A, tc)) | 0);
          var tI =
            (((h + (n = (n + Math.imul(b, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(b, tm)) | 0) + Math.imul(M, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(M, tm)) | 0) + (i >>> 13)) | 0) +
              (tI >>> 26)) |
            0),
            (tI &= 67108863),
            (n = Math.imul(z, X)),
            (i = ((i = Math.imul(z, tt)) + Math.imul(j, X)) | 0),
            (o = Math.imul(j, tt)),
            (n = (n + Math.imul(k, tr)) | 0),
            (i = ((i = (i + Math.imul(k, tn)) | 0) + Math.imul(N, tr)) | 0),
            (o = (o + Math.imul(N, tn)) | 0),
            (n = (n + Math.imul(C, to)) | 0),
            (i = ((i = (i + Math.imul(C, ts)) | 0) + Math.imul(T, to)) | 0),
            (o = (o + Math.imul(T, ts)) | 0),
            (n = (n + Math.imul(R, tu)) | 0),
            (i = ((i = (i + Math.imul(R, th)) | 0) + Math.imul(O, tu)) | 0),
            (o = (o + Math.imul(O, th)) | 0),
            (n = (n + Math.imul(B, tf)) | 0),
            (i = ((i = (i + Math.imul(B, tc)) | 0) + Math.imul(S, tf)) | 0),
            (o = (o + Math.imul(S, tc)) | 0);
          var tR =
            (((h + (n = (n + Math.imul(_, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(_, tm)) | 0) + Math.imul(A, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(A, tm)) | 0) + (i >>> 13)) | 0) +
              (tR >>> 26)) |
            0),
            (tR &= 67108863),
            (n = Math.imul(z, tr)),
            (i = ((i = Math.imul(z, tn)) + Math.imul(j, tr)) | 0),
            (o = Math.imul(j, tn)),
            (n = (n + Math.imul(k, to)) | 0),
            (i = ((i = (i + Math.imul(k, ts)) | 0) + Math.imul(N, to)) | 0),
            (o = (o + Math.imul(N, ts)) | 0),
            (n = (n + Math.imul(C, tu)) | 0),
            (i = ((i = (i + Math.imul(C, th)) | 0) + Math.imul(T, tu)) | 0),
            (o = (o + Math.imul(T, th)) | 0),
            (n = (n + Math.imul(R, tf)) | 0),
            (i = ((i = (i + Math.imul(R, tc)) | 0) + Math.imul(O, tf)) | 0),
            (o = (o + Math.imul(O, tc)) | 0);
          var tO =
            (((h + (n = (n + Math.imul(B, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(B, tm)) | 0) + Math.imul(S, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(S, tm)) | 0) + (i >>> 13)) | 0) +
              (tO >>> 26)) |
            0),
            (tO &= 67108863),
            (n = Math.imul(z, to)),
            (i = ((i = Math.imul(z, ts)) + Math.imul(j, to)) | 0),
            (o = Math.imul(j, ts)),
            (n = (n + Math.imul(k, tu)) | 0),
            (i = ((i = (i + Math.imul(k, th)) | 0) + Math.imul(N, tu)) | 0),
            (o = (o + Math.imul(N, th)) | 0),
            (n = (n + Math.imul(C, tf)) | 0),
            (i = ((i = (i + Math.imul(C, tc)) | 0) + Math.imul(T, tf)) | 0),
            (o = (o + Math.imul(T, tc)) | 0);
          var tL =
            (((h + (n = (n + Math.imul(R, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(R, tm)) | 0) + Math.imul(O, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(O, tm)) | 0) + (i >>> 13)) | 0) +
              (tL >>> 26)) |
            0),
            (tL &= 67108863),
            (n = Math.imul(z, tu)),
            (i = ((i = Math.imul(z, th)) + Math.imul(j, tu)) | 0),
            (o = Math.imul(j, th)),
            (n = (n + Math.imul(k, tf)) | 0),
            (i = ((i = (i + Math.imul(k, tc)) | 0) + Math.imul(N, tf)) | 0),
            (o = (o + Math.imul(N, tc)) | 0);
          var tC =
            (((h + (n = (n + Math.imul(C, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(C, tm)) | 0) + Math.imul(T, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(T, tm)) | 0) + (i >>> 13)) | 0) +
              (tC >>> 26)) |
            0),
            (tC &= 67108863),
            (n = Math.imul(z, tf)),
            (i = ((i = Math.imul(z, tc)) + Math.imul(j, tf)) | 0),
            (o = Math.imul(j, tc));
          var tT =
            (((h + (n = (n + Math.imul(k, tp)) | 0)) | 0) +
              ((8191 &
                (i =
                  ((i = (i + Math.imul(k, tm)) | 0) + Math.imul(N, tp)) | 0)) <<
                13)) |
            0;
          (h =
            ((((o = (o + Math.imul(N, tm)) | 0) + (i >>> 13)) | 0) +
              (tT >>> 26)) |
            0),
            (tT &= 67108863);
          var tU =
            (((h + (n = Math.imul(z, tp))) | 0) +
              ((8191 & (i = ((i = Math.imul(z, tm)) + Math.imul(j, tp)) | 0)) <<
                13)) |
            0;
          return (
            (h =
              ((((o = Math.imul(j, tm)) + (i >>> 13)) | 0) + (tU >>> 26)) | 0),
            (tU &= 67108863),
            (u[0] = tg),
            (u[1] = ty),
            (u[2] = tw),
            (u[3] = tv),
            (u[4] = tb),
            (u[5] = tM),
            (u[6] = tE),
            (u[7] = t_),
            (u[8] = tA),
            (u[9] = tx),
            (u[10] = tB),
            (u[11] = tS),
            (u[12] = tI),
            (u[13] = tR),
            (u[14] = tO),
            (u[15] = tL),
            (u[16] = tC),
            (u[17] = tT),
            (u[18] = tU),
            0 !== h && ((u[19] = h), r.length++),
            r
          );
        };
        function y(t, e, r) {
          (r.negative = e.negative ^ t.negative),
            (r.length = t.length + e.length);
          for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
            var s = i;
            i = 0;
            for (
              var a = 67108863 & n,
                u = Math.min(o, e.length - 1),
                h = Math.max(0, o - t.length + 1);
              h <= u;
              h++
            ) {
              var l = o - h,
                f = (0 | t.words[l]) * (0 | e.words[h]),
                c = 67108863 & f;
              (s = (s + ((f / 67108864) | 0)) | 0),
                (a = 67108863 & (c = (c + a) | 0)),
                (i += (s = (s + (c >>> 26)) | 0) >>> 26),
                (s &= 67108863);
            }
            (r.words[o] = a), (n = s), (s = i);
          }
          return 0 !== n ? (r.words[o] = n) : r.length--, r._strip();
        }
        function w(t, e) {
          (this.x = t), (this.y = e);
        }
        Math.imul || (g = m),
          (o.prototype.mulTo = function (t, e) {
            var r,
              n = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? g(this, t, e)
              : n < 63
              ? m(this, t, e)
              : y(this, t, e);
          }),
          (w.prototype.makeRBT = function (t) {
            for (
              var e = Array(t), r = o.prototype._countBits(t) - 1, n = 0;
              n < t;
              n++
            )
              e[n] = this.revBin(n, r, t);
            return e;
          }),
          (w.prototype.revBin = function (t, e, r) {
            if (0 === t || t === r - 1) return t;
            for (var n = 0, i = 0; i < e; i++)
              (n |= (1 & t) << (e - i - 1)), (t >>= 1);
            return n;
          }),
          (w.prototype.permute = function (t, e, r, n, i, o) {
            for (var s = 0; s < o; s++) (n[s] = e[t[s]]), (i[s] = r[t[s]]);
          }),
          (w.prototype.transform = function (t, e, r, n, i, o) {
            this.permute(o, t, e, r, n, i);
            for (var s = 1; s < i; s <<= 1)
              for (
                var a = s << 1,
                  u = Math.cos((2 * Math.PI) / a),
                  h = Math.sin((2 * Math.PI) / a),
                  l = 0;
                l < i;
                l += a
              )
                for (var f = u, c = h, d = 0; d < s; d++) {
                  var p = r[l + d],
                    m = n[l + d],
                    g = r[l + d + s],
                    y = n[l + d + s],
                    w = f * g - c * y;
                  (y = f * y + c * g),
                    (g = w),
                    (r[l + d] = p + g),
                    (n[l + d] = m + y),
                    (r[l + d + s] = p - g),
                    (n[l + d + s] = m - y),
                    d !== a &&
                      ((w = u * f - h * c), (c = u * c + h * f), (f = w));
                }
          }),
          (w.prototype.guessLen13b = function (t, e) {
            var r = 1 | Math.max(e, t),
              n = 1 & r,
              i = 0;
            for (r = (r / 2) | 0; r; r >>>= 1) i++;
            return 1 << (i + 1 + n);
          }),
          (w.prototype.conjugate = function (t, e, r) {
            if (!(r <= 1))
              for (var n = 0; n < r / 2; n++) {
                var i = t[n];
                (t[n] = t[r - n - 1]),
                  (t[r - n - 1] = i),
                  (i = e[n]),
                  (e[n] = -e[r - n - 1]),
                  (e[r - n - 1] = -i);
              }
          }),
          (w.prototype.normalize13b = function (t, e) {
            for (var r = 0, n = 0; n < e / 2; n++) {
              var i =
                8192 * Math.round(t[2 * n + 1] / e) +
                Math.round(t[2 * n] / e) +
                r;
              (t[n] = 67108863 & i),
                (r = i < 67108864 ? 0 : (i / 67108864) | 0);
            }
            return t;
          }),
          (w.prototype.convert13b = function (t, e, r, i) {
            for (var o = 0, s = 0; s < e; s++)
              (o += 0 | t[s]),
                (r[2 * s] = 8191 & o),
                (o >>>= 13),
                (r[2 * s + 1] = 8191 & o),
                (o >>>= 13);
            for (s = 2 * e; s < i; ++s) r[s] = 0;
            n(0 === o), n((-8192 & o) == 0);
          }),
          (w.prototype.stub = function (t) {
            for (var e = Array(t), r = 0; r < t; r++) e[r] = 0;
            return e;
          }),
          (w.prototype.mulp = function (t, e, r) {
            var n = 2 * this.guessLen13b(t.length, e.length),
              i = this.makeRBT(n),
              o = this.stub(n),
              s = Array(n),
              a = Array(n),
              u = Array(n),
              h = Array(n),
              l = Array(n),
              f = Array(n),
              c = r.words;
            (c.length = n),
              this.convert13b(t.words, t.length, s, n),
              this.convert13b(e.words, e.length, h, n),
              this.transform(s, o, a, u, n, i),
              this.transform(h, o, l, f, n, i);
            for (var d = 0; d < n; d++) {
              var p = a[d] * l[d] - u[d] * f[d];
              (u[d] = a[d] * f[d] + u[d] * l[d]), (a[d] = p);
            }
            return (
              this.conjugate(a, u, n),
              this.transform(a, u, c, o, n, i),
              this.conjugate(c, o, n),
              this.normalize13b(c, n),
              (r.negative = t.negative ^ e.negative),
              (r.length = t.length + e.length),
              r._strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), this.mulTo(t, e);
          }),
          (o.prototype.mulf = function (t) {
            var e = new o(null);
            return (e.words = Array(this.length + t.length)), y(this, t, e);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            var e = t < 0;
            e && (t = -t), n("number" == typeof t), n(t < 67108864);
            for (var r = 0, i = 0; i < this.length; i++) {
              var o = (0 | this.words[i]) * t,
                s = (67108863 & o) + (67108863 & r);
              (r >>= 26),
                (r += ((o / 67108864) | 0) + (s >>> 26)),
                (this.words[i] = 67108863 & s);
            }
            return (
              0 !== r && ((this.words[i] = r), this.length++),
              e ? this.ineg() : this
            );
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var e = (function (t) {
              for (var e = Array(t.bitLength()), r = 0; r < e.length; r++) {
                var n = (r / 26) | 0,
                  i = r % 26;
                e[r] = (t.words[n] >>> i) & 1;
              }
              return e;
            })(t);
            if (0 === e.length) return new o(1);
            for (
              var r = this, n = 0;
              n < e.length && 0 === e[n];
              n++, r = r.sqr()
            );
            if (++n < e.length)
              for (var i = r.sqr(); n < e.length; n++, i = i.sqr())
                0 !== e[n] && (r = r.mul(i));
            return r;
          }),
          (o.prototype.iushln = function (t) {
            n("number" == typeof t && t >= 0);
            var e,
              r = t % 26,
              i = (t - r) / 26,
              o = (67108863 >>> (26 - r)) << (26 - r);
            if (0 !== r) {
              var s = 0;
              for (e = 0; e < this.length; e++) {
                var a = this.words[e] & o,
                  u = ((0 | this.words[e]) - a) << r;
                (this.words[e] = u | s), (s = a >>> (26 - r));
              }
              s && ((this.words[e] = s), this.length++);
            }
            if (0 !== i) {
              for (e = this.length - 1; e >= 0; e--)
                this.words[e + i] = this.words[e];
              for (e = 0; e < i; e++) this.words[e] = 0;
              this.length += i;
            }
            return this._strip();
          }),
          (o.prototype.ishln = function (t) {
            return n(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, e, r) {
            n("number" == typeof t && t >= 0),
              (i = e ? (e - (e % 26)) / 26 : 0);
            var i,
              o = t % 26,
              s = Math.min((t - o) / 26, this.length),
              a = 67108863 ^ ((67108863 >>> o) << o);
            if (((i -= s), (i = Math.max(0, i)), r)) {
              for (var u = 0; u < s; u++) r.words[u] = this.words[u];
              r.length = s;
            }
            if (0 === s);
            else if (this.length > s)
              for (this.length -= s, u = 0; u < this.length; u++)
                this.words[u] = this.words[u + s];
            else (this.words[0] = 0), (this.length = 1);
            var h = 0;
            for (u = this.length - 1; u >= 0 && (0 !== h || u >= i); u--) {
              var l = 0 | this.words[u];
              (this.words[u] = (h << (26 - o)) | (l >>> o)), (h = l & a);
            }
            return (
              r && 0 !== h && (r.words[r.length++] = h),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this._strip()
            );
          }),
          (o.prototype.ishrn = function (t, e, r) {
            return n(0 === this.negative), this.iushrn(t, e, r);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return !(this.length <= r) && !!(this.words[r] & (1 << e));
          }),
          (o.prototype.imaskn = function (t) {
            n("number" == typeof t && t >= 0);
            var e = t % 26,
              r = (t - e) / 26;
            return (n(
              0 === this.negative,
              "imaskn works only with positive numbers"
            ),
            this.length <= r)
              ? this
              : (0 !== e && r++,
                (this.length = Math.min(r, this.length)),
                0 !== e &&
                  (this.words[this.length - 1] &=
                    67108863 ^ ((67108863 >>> e) << e)),
                this._strip());
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (n("number" == typeof t), n(t < 67108864), t < 0)
              ? this.isubn(-t)
              : 0 !== this.negative
              ? (1 === this.length && (0 | this.words[0]) <= t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0))
                  : ((this.negative = 0), this.isubn(t), (this.negative = 1)),
                this)
              : this._iaddn(t);
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var e = 0; e < this.length && this.words[e] >= 67108864; e++)
              (this.words[e] -= 67108864),
                e === this.length - 1
                  ? (this.words[e + 1] = 1)
                  : this.words[e + 1]++;
            return (this.length = Math.max(this.length, e + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((n("number" == typeof t), n(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var e = 0; e < this.length && this.words[e] < 0; e++)
                (this.words[e] += 67108864), (this.words[e + 1] -= 1);
            return this._strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, e, r) {
            var i,
              o,
              s = t.length + r;
            this._expand(s);
            var a = 0;
            for (i = 0; i < t.length; i++) {
              o = (0 | this.words[i + r]) + a;
              var u = (0 | t.words[i]) * e;
              (o -= 67108863 & u),
                (a = (o >> 26) - ((u / 67108864) | 0)),
                (this.words[i + r] = 67108863 & o);
            }
            for (; i < this.length - r; i++)
              (a = (o = (0 | this.words[i + r]) + a) >> 26),
                (this.words[i + r] = 67108863 & o);
            if (0 === a) return this._strip();
            for (n(-1 === a), a = 0, i = 0; i < this.length; i++)
              (a = (o = -(0 | this.words[i]) + a) >> 26),
                (this.words[i] = 67108863 & o);
            return (this.negative = 1), this._strip();
          }),
          (o.prototype._wordDiv = function (t, e) {
            var r,
              n = this.length - t.length,
              i = this.clone(),
              s = t,
              a = 0 | s.words[s.length - 1];
            0 != (n = 26 - this._countBits(a)) &&
              ((s = s.ushln(n)), i.iushln(n), (a = 0 | s.words[s.length - 1]));
            var u = i.length - s.length;
            if ("mod" !== e) {
              ((r = new o(null)).length = u + 1), (r.words = Array(r.length));
              for (var h = 0; h < r.length; h++) r.words[h] = 0;
            }
            var l = i.clone()._ishlnsubmul(s, 1, u);
            0 === l.negative && ((i = l), r && (r.words[u] = 1));
            for (var f = u - 1; f >= 0; f--) {
              var c =
                (0 | i.words[s.length + f]) * 67108864 +
                (0 | i.words[s.length + f - 1]);
              for (
                c = Math.min((c / a) | 0, 67108863), i._ishlnsubmul(s, c, f);
                0 !== i.negative;

              )
                c--,
                  (i.negative = 0),
                  i._ishlnsubmul(s, 1, f),
                  i.isZero() || (i.negative ^= 1);
              r && (r.words[f] = c);
            }
            return (
              r && r._strip(),
              i._strip(),
              "div" !== e && 0 !== n && i.iushrn(n),
              { div: r || null, mod: i }
            );
          }),
          (o.prototype.divmod = function (t, e, r) {
            var i, s, a;
            return (n(!t.isZero()), this.isZero())
              ? { div: new o(0), mod: new o(0) }
              : 0 !== this.negative && 0 === t.negative
              ? ((a = this.neg().divmod(t, e)),
                "mod" !== e && (i = a.div.neg()),
                "div" !== e &&
                  ((s = a.mod.neg()), r && 0 !== s.negative && s.iadd(t)),
                { div: i, mod: s })
              : 0 === this.negative && 0 !== t.negative
              ? ((a = this.divmod(t.neg(), e)),
                "mod" !== e && (i = a.div.neg()),
                { div: i, mod: a.mod })
              : (this.negative & t.negative) != 0
              ? ((a = this.neg().divmod(t.neg(), e)),
                "div" !== e &&
                  ((s = a.mod.neg()), r && 0 !== s.negative && s.isub(t)),
                { div: a.div, mod: s })
              : t.length > this.length || 0 > this.cmp(t)
              ? { div: new o(0), mod: this }
              : 1 === t.length
              ? "div" === e
                ? { div: this.divn(t.words[0]), mod: null }
                : "mod" === e
                ? { div: null, mod: new o(this.modrn(t.words[0])) }
                : {
                    div: this.divn(t.words[0]),
                    mod: new o(this.modrn(t.words[0])),
                  }
              : this._wordDiv(t, e);
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var e = this.divmod(t);
            if (e.mod.isZero()) return e.div;
            var r = 0 !== e.div.negative ? e.mod.isub(t) : e.mod,
              n = t.ushrn(1),
              i = t.andln(1),
              o = r.cmp(n);
            return o < 0 || (1 === i && 0 === o)
              ? e.div
              : 0 !== e.div.negative
              ? e.div.isubn(1)
              : e.div.iaddn(1);
          }),
          (o.prototype.modrn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 67108864 % t, i = 0, o = this.length - 1; o >= 0; o--)
              i = (r * i + (0 | this.words[o])) % t;
            return e ? -i : i;
          }),
          (o.prototype.modn = function (t) {
            return this.modrn(t);
          }),
          (o.prototype.idivn = function (t) {
            var e = t < 0;
            e && (t = -t), n(t <= 67108863);
            for (var r = 0, i = this.length - 1; i >= 0; i--) {
              var o = (0 | this.words[i]) + 67108864 * r;
              (this.words[i] = (o / t) | 0), (r = o % t);
            }
            return this._strip(), e ? this.ineg() : this;
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e = this,
              r = t.clone();
            e = 0 !== e.negative ? e.umod(t) : e.clone();
            for (
              var i = new o(1), s = new o(0), a = new o(0), u = new o(1), h = 0;
              e.isEven() && r.isEven();

            )
              e.iushrn(1), r.iushrn(1), ++h;
            for (var l = r.clone(), f = e.clone(); !e.isZero(); ) {
              for (
                var c = 0, d = 1;
                (e.words[0] & d) == 0 && c < 26;
                ++c, d <<= 1
              );
              if (c > 0)
                for (e.iushrn(c); c-- > 0; )
                  (i.isOdd() || s.isOdd()) && (i.iadd(l), s.isub(f)),
                    i.iushrn(1),
                    s.iushrn(1);
              for (
                var p = 0, m = 1;
                (r.words[0] & m) == 0 && p < 26;
                ++p, m <<= 1
              );
              if (p > 0)
                for (r.iushrn(p); p-- > 0; )
                  (a.isOdd() || u.isOdd()) && (a.iadd(l), u.isub(f)),
                    a.iushrn(1),
                    u.iushrn(1);
              e.cmp(r) >= 0
                ? (e.isub(r), i.isub(a), s.isub(u))
                : (r.isub(e), a.isub(i), u.isub(s));
            }
            return { a: a, b: u, gcd: r.iushln(h) };
          }),
          (o.prototype._invmp = function (t) {
            n(0 === t.negative), n(!t.isZero());
            var e,
              r = this,
              i = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var s = new o(1), a = new o(0), u = i.clone();
              r.cmpn(1) > 0 && i.cmpn(1) > 0;

            ) {
              for (
                var h = 0, l = 1;
                (r.words[0] & l) == 0 && h < 26;
                ++h, l <<= 1
              );
              if (h > 0)
                for (r.iushrn(h); h-- > 0; )
                  s.isOdd() && s.iadd(u), s.iushrn(1);
              for (
                var f = 0, c = 1;
                (i.words[0] & c) == 0 && f < 26;
                ++f, c <<= 1
              );
              if (f > 0)
                for (i.iushrn(f); f-- > 0; )
                  a.isOdd() && a.iadd(u), a.iushrn(1);
              r.cmp(i) >= 0 ? (r.isub(i), s.isub(a)) : (i.isub(r), a.isub(s));
            }
            return 0 > (e = 0 === r.cmpn(1) ? s : a).cmpn(0) && e.iadd(t), e;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var e = this.clone(),
              r = t.clone();
            (e.negative = 0), (r.negative = 0);
            for (var n = 0; e.isEven() && r.isEven(); n++)
              e.iushrn(1), r.iushrn(1);
            for (;;) {
              for (; e.isEven(); ) e.iushrn(1);
              for (; r.isEven(); ) r.iushrn(1);
              var i = e.cmp(r);
              if (i < 0) {
                var o = e;
                (e = r), (r = o);
              } else if (0 === i || 0 === r.cmpn(1)) break;
              e.isub(r);
            }
            return r.iushln(n);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return (1 & this.words[0]) == 0;
          }),
          (o.prototype.isOdd = function () {
            return (1 & this.words[0]) == 1;
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            n("number" == typeof t);
            var e = t % 26,
              r = (t - e) / 26,
              i = 1 << e;
            if (this.length <= r)
              return this._expand(r + 1), (this.words[r] |= i), this;
            for (var o = i, s = r; 0 !== o && s < this.length; s++) {
              var a = 0 | this.words[s];
              (a += o), (o = a >>> 26), (a &= 67108863), (this.words[s] = a);
            }
            return 0 !== o && ((this.words[s] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var e,
              r = t < 0;
            if (0 !== this.negative && !r) return -1;
            if (0 === this.negative && r) return 1;
            if ((this._strip(), this.length > 1)) e = 1;
            else {
              r && (t = -t), n(t <= 67108863, "Number is too big");
              var i = 0 | this.words[0];
              e = i === t ? 0 : i < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var e = this.ucmp(t);
            return 0 !== this.negative ? 0 | -e : e;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var e = 0, r = this.length - 1; r >= 0; r--) {
              var n = 0 | this.words[r],
                i = 0 | t.words[r];
              if (n !== i) {
                n < i ? (e = -1) : n > i && (e = 1);
                break;
              }
            }
            return e;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return 0 >= this.cmpn(t);
          }),
          (o.prototype.lte = function (t) {
            return 0 >= this.cmp(t);
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new x(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              n(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              n(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              n(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              n(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              n(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              n(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              n(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              n(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              n(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              n(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              n(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              n(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              n(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              n(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              n(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var v = { k256: null, p224: null, p192: null, p25519: null };
        function b(t, e) {
          (this.name = t),
            (this.p = new o(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function M() {
          b.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function E() {
          b.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function _() {
          b.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function A() {
          b.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function x(t) {
          if ("string" == typeof t) {
            var e = o._prime(t);
            (this.m = e.p), (this.prime = e);
          } else
            n(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function B(t) {
          x.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (b.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = Array(Math.ceil(this.n / 13))), t;
        }),
          (b.prototype.ireduce = function (t) {
            var e,
              r = t;
            do
              this.split(r, this.tmp),
                (e = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength());
            while (e > this.n);
            var n = e < this.n ? -1 : r.ucmp(this.p);
            return (
              0 === n
                ? ((r.words[0] = 0), (r.length = 1))
                : n > 0
                ? r.isub(this.p)
                : void 0 !== r.strip
                ? r.strip()
                : r._strip(),
              r
            );
          }),
          (b.prototype.split = function (t, e) {
            t.iushrn(this.n, 0, e);
          }),
          (b.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          i(M, b),
          (M.prototype.split = function (t, e) {
            for (var r = Math.min(t.length, 9), n = 0; n < r; n++)
              e.words[n] = t.words[n];
            if (((e.length = r), t.length <= 9)) {
              (t.words[0] = 0), (t.length = 1);
              return;
            }
            var i = t.words[9];
            for (n = 10, e.words[e.length++] = 4194303 & i; n < t.length; n++) {
              var o = 0 | t.words[n];
              (t.words[n - 10] = ((4194303 & o) << 4) | (i >>> 22)), (i = o);
            }
            (i >>>= 22),
              (t.words[n - 10] = i),
              0 === i && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (M.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = 0 | t.words[r];
              (e += 977 * n),
                (t.words[r] = 67108863 & e),
                (e = 64 * n + ((e / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          i(E, b),
          i(_, b),
          i(A, b),
          (A.prototype.imulK = function (t) {
            for (var e = 0, r = 0; r < t.length; r++) {
              var n = (0 | t.words[r]) * 19 + e,
                i = 67108863 & n;
              (n >>>= 26), (t.words[r] = i), (e = n);
            }
            return 0 !== e && (t.words[t.length++] = e), t;
          }),
          (o._prime = function (t) {
            var e;
            if (v[t]) return v[t];
            if ("k256" === t) e = new M();
            else if ("p224" === t) e = new E();
            else if ("p192" === t) e = new _();
            else if ("p25519" === t) e = new A();
            else throw Error("Unknown prime " + t);
            return (v[t] = e), e;
          }),
          (x.prototype._verify1 = function (t) {
            n(0 === t.negative, "red works only with positives"),
              n(t.red, "red works only with red numbers");
          }),
          (x.prototype._verify2 = function (t, e) {
            n((t.negative | e.negative) == 0, "red works only with positives"),
              n(t.red && t.red === e.red, "red works only with red numbers");
          }),
          (x.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : (h(t, t.umod(this.m)._forceRed(this)), t);
          }),
          (x.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (x.prototype.add = function (t, e) {
            this._verify2(t, e);
            var r = t.add(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this);
          }),
          (x.prototype.iadd = function (t, e) {
            this._verify2(t, e);
            var r = t.iadd(e);
            return r.cmp(this.m) >= 0 && r.isub(this.m), r;
          }),
          (x.prototype.sub = function (t, e) {
            this._verify2(t, e);
            var r = t.sub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r._forceRed(this);
          }),
          (x.prototype.isub = function (t, e) {
            this._verify2(t, e);
            var r = t.isub(e);
            return 0 > r.cmpn(0) && r.iadd(this.m), r;
          }),
          (x.prototype.shl = function (t, e) {
            return this._verify1(t), this.imod(t.ushln(e));
          }),
          (x.prototype.imul = function (t, e) {
            return this._verify2(t, e), this.imod(t.imul(e));
          }),
          (x.prototype.mul = function (t, e) {
            return this._verify2(t, e), this.imod(t.mul(e));
          }),
          (x.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (x.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (x.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var e = this.m.andln(3);
            if ((n(e % 2 == 1), 3 === e)) {
              var r = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, r);
            }
            for (
              var i = this.m.subn(1), s = 0;
              !i.isZero() && 0 === i.andln(1);

            )
              s++, i.iushrn(1);
            n(!i.isZero());
            var a = new o(1).toRed(this),
              u = a.redNeg(),
              h = this.m.subn(1).iushrn(1),
              l = this.m.bitLength();
            for (
              l = new o(2 * l * l).toRed(this);
              0 !== this.pow(l, h).cmp(u);

            )
              l.redIAdd(u);
            for (
              var f = this.pow(l, i),
                c = this.pow(t, i.addn(1).iushrn(1)),
                d = this.pow(t, i),
                p = s;
              0 !== d.cmp(a);

            ) {
              for (var m = d, g = 0; 0 !== m.cmp(a); g++) m = m.redSqr();
              n(g < p);
              var y = this.pow(f, new o(1).iushln(p - g - 1));
              (c = c.redMul(y)), (f = y.redSqr()), (d = d.redMul(f)), (p = g);
            }
            return c;
          }),
          (x.prototype.invm = function (t) {
            var e = t._invmp(this.m);
            return 0 !== e.negative
              ? ((e.negative = 0), this.imod(e).redNeg())
              : this.imod(e);
          }),
          (x.prototype.pow = function (t, e) {
            if (e.isZero()) return new o(1).toRed(this);
            if (0 === e.cmpn(1)) return t.clone();
            var r = Array(16);
            (r[0] = new o(1).toRed(this)), (r[1] = t);
            for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], t);
            var i = r[0],
              s = 0,
              a = 0,
              u = e.bitLength() % 26;
            for (0 === u && (u = 26), n = e.length - 1; n >= 0; n--) {
              for (var h = e.words[n], l = u - 1; l >= 0; l--) {
                var f = (h >> l) & 1;
                if ((i !== r[0] && (i = this.sqr(i)), 0 === f && 0 === s)) {
                  a = 0;
                  continue;
                }
                (s <<= 1),
                  (s |= f),
                  (4 == ++a || (0 === n && 0 === l)) &&
                    ((i = this.mul(i, r[s])), (a = 0), (s = 0));
              }
              u = 26;
            }
            return i;
          }),
          (x.prototype.convertTo = function (t) {
            var e = t.umod(this.m);
            return e === t ? e.clone() : e;
          }),
          (x.prototype.convertFrom = function (t) {
            var e = t.clone();
            return (e.red = null), e;
          }),
          (o.mont = function (t) {
            return new B(t);
          }),
          i(B, x),
          (B.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (B.prototype.convertFrom = function (t) {
            var e = this.imod(t.mul(this.rinv));
            return (e.red = null), e;
          }),
          (B.prototype.imul = function (t, e) {
            if (t.isZero() || e.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var r = t.imul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              o = i;
            return (
              i.cmp(this.m) >= 0
                ? (o = i.isub(this.m))
                : 0 > i.cmpn(0) && (o = i.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (B.prototype.mul = function (t, e) {
            if (t.isZero() || e.isZero()) return new o(0)._forceRed(this);
            var r = t.mul(e),
              n = r
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              i = r.isub(n).iushrn(this.shift),
              s = i;
            return (
              i.cmp(this.m) >= 0
                ? (s = i.isub(this.m))
                : 0 > i.cmpn(0) && (s = i.iadd(this.m)),
              s._forceRed(this)
            );
          }),
          (B.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((t = r.nmd(t)), this);
    },
    5824: function (t, e, r) {
      var n = r(5197);
      t.exports = n(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    8672: function (t, e, r) {
      let n = r(2768);
      t.exports = n(
        "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
      );
    },
    2768: function (t) {
      "use strict";
      t.exports = function (t) {
        if (t.length >= 255) throw TypeError("Alphabet too long");
        for (var e = new Uint8Array(256), r = 0; r < e.length; r++) e[r] = 255;
        for (var n = 0; n < t.length; n++) {
          var i = t.charAt(n),
            o = i.charCodeAt(0);
          if (255 !== e[o]) throw TypeError(i + " is ambiguous");
          e[o] = n;
        }
        var s = t.length,
          a = t.charAt(0),
          u = Math.log(s) / Math.log(256),
          h = Math.log(256) / Math.log(s);
        function l(t) {
          if ("string" != typeof t) throw TypeError("Expected String");
          if (0 === t.length) return new Uint8Array();
          for (var r = 0, n = 0, i = 0; t[r] === a; ) n++, r++;
          for (
            var o = ((t.length - r) * u + 1) >>> 0, h = new Uint8Array(o);
            t[r];

          ) {
            var l = e[t.charCodeAt(r)];
            if (255 === l) return;
            for (var f = 0, c = o - 1; (0 !== l || f < i) && -1 !== c; c--, f++)
              (l += (s * h[c]) >>> 0),
                (h[c] = l % 256 >>> 0),
                (l = (l / 256) >>> 0);
            if (0 !== l) throw Error("Non-zero carry");
            (i = f), r++;
          }
          for (var d = o - i; d !== o && 0 === h[d]; ) d++;
          for (var p = new Uint8Array(n + (o - d)), m = n; d !== o; )
            p[m++] = h[d++];
          return p;
        }
        return {
          encode: function (e) {
            if (
              (e instanceof Uint8Array ||
                (ArrayBuffer.isView(e)
                  ? (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
                  : Array.isArray(e) && (e = Uint8Array.from(e))),
              !(e instanceof Uint8Array))
            )
              throw TypeError("Expected Uint8Array");
            if (0 === e.length) return "";
            for (var r = 0, n = 0, i = 0, o = e.length; i !== o && 0 === e[i]; )
              i++, r++;
            for (
              var u = ((o - i) * h + 1) >>> 0, l = new Uint8Array(u);
              i !== o;

            ) {
              for (
                var f = e[i], c = 0, d = u - 1;
                (0 !== f || c < n) && -1 !== d;
                d--, c++
              )
                (f += (256 * l[d]) >>> 0),
                  (l[d] = f % s >>> 0),
                  (f = (f / s) >>> 0);
              if (0 !== f) throw Error("Non-zero carry");
              (n = c), i++;
            }
            for (var p = u - n; p !== u && 0 === l[p]; ) p++;
            for (var m = a.repeat(r); p < u; ++p) m += t.charAt(l[p]);
            return m;
          },
          decodeUnsafe: l,
          decode: function (t) {
            var e = l(t);
            if (e) return e;
            throw Error("Non-base" + s + " character");
          },
        };
      };
    },
    9109: function (t, e, r) {
      "use strict";
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ let n = r(8738),
        i = r(6868),
        o =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      function s(t) {
        if (t > 2147483647)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
        let e = new Uint8Array(t);
        return Object.setPrototypeOf(e, a.prototype), e;
      }
      function a(t, e, r) {
        if ("number" == typeof t) {
          if ("string" == typeof e)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return l(t);
        }
        return u(t, e, r);
      }
      function u(t, e, r) {
        if ("string" == typeof t)
          return (function (t, e) {
            if (
              (("string" != typeof e || "" === e) && (e = "utf8"),
              !a.isEncoding(e))
            )
              throw TypeError("Unknown encoding: " + e);
            let r = 0 | p(t, e),
              n = s(r),
              i = n.write(t, e);
            return i !== r && (n = n.slice(0, i)), n;
          })(t, e);
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (P(t, Uint8Array)) {
              let e = new Uint8Array(t);
              return c(e.buffer, e.byteOffset, e.byteLength);
            }
            return f(t);
          })(t);
        if (null == t)
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        if (
          P(t, ArrayBuffer) ||
          (t && P(t.buffer, ArrayBuffer)) ||
          ("undefined" != typeof SharedArrayBuffer &&
            (P(t, SharedArrayBuffer) || (t && P(t.buffer, SharedArrayBuffer))))
        )
          return c(t, e, r);
        if ("number" == typeof t)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        let n = t.valueOf && t.valueOf();
        if (null != n && n !== t) return a.from(n, e, r);
        let i = (function (t) {
          var e;
          if (a.isBuffer(t)) {
            let e = 0 | d(t.length),
              r = s(e);
            return 0 === r.length || t.copy(r, 0, 0, e), r;
          }
          return void 0 !== t.length
            ? "number" != typeof t.length || (e = t.length) != e
              ? s(0)
              : f(t)
            : "Buffer" === t.type && Array.isArray(t.data)
            ? f(t.data)
            : void 0;
        })(t);
        if (i) return i;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof t[Symbol.toPrimitive]
        )
          return a.from(t[Symbol.toPrimitive]("string"), e, r);
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof t
        );
      }
      function h(t) {
        if ("number" != typeof t)
          throw TypeError('"size" argument must be of type number');
        if (t < 0)
          throw RangeError(
            'The value "' + t + '" is invalid for option "size"'
          );
      }
      function l(t) {
        return h(t), s(t < 0 ? 0 : 0 | d(t));
      }
      function f(t) {
        let e = t.length < 0 ? 0 : 0 | d(t.length),
          r = s(e);
        for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
        return r;
      }
      function c(t, e, r) {
        let n;
        if (e < 0 || t.byteLength < e)
          throw RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (r || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (n =
              void 0 === e && void 0 === r
                ? new Uint8Array(t)
                : void 0 === r
                ? new Uint8Array(t, e)
                : new Uint8Array(t, e, r)),
            a.prototype
          ),
          n
        );
      }
      function d(t) {
        if (t >= 2147483647)
          throw RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
          );
        return 0 | t;
      }
      function p(t, e) {
        if (a.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || P(t, ArrayBuffer)) return t.byteLength;
        if ("string" != typeof t)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof t
          );
        let r = t.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        let i = !1;
        for (;;)
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return U(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return k(t).length;
            default:
              if (i) return n ? -1 : U(t).length;
              (e = ("" + e).toLowerCase()), (i = !0);
          }
      }
      function m(t, e, r) {
        let i = !1;
        if (
          ((void 0 === e || e < 0) && (e = 0),
          e > this.length ||
            ((void 0 === r || r > this.length) && (r = this.length),
            r <= 0 || (r >>>= 0) <= (e >>>= 0)))
        )
          return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return (function (t, e, r) {
                let n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                let i = "";
                for (let n = e; n < r; ++n) i += z[t[n]];
                return i;
              })(this, e, r);
            case "utf8":
            case "utf-8":
              return v(this, e, r);
            case "ascii":
              return (function (t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i)
                  n += String.fromCharCode(127 & t[i]);
                return n;
              })(this, e, r);
            case "latin1":
            case "binary":
              return (function (t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
                return n;
              })(this, e, r);
            case "base64":
              var o, s;
              return (
                (o = e),
                (s = r),
                0 === o && s === this.length
                  ? n.fromByteArray(this)
                  : n.fromByteArray(this.slice(o, s))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (t, e, r) {
                let n = t.slice(e, r),
                  i = "";
                for (let t = 0; t < n.length - 1; t += 2)
                  i += String.fromCharCode(n[t] + 256 * n[t + 1]);
                return i;
              })(this, e, r);
            default:
              if (i) throw TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (i = !0);
          }
      }
      function g(t, e, r) {
        let n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function y(t, e, r, n, i) {
        var o;
        if (0 === t.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (o = r = +r) != o && (r = i ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (i) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!i) return -1;
          r = 0;
        }
        if (("string" == typeof e && (e = a.from(e, n)), a.isBuffer(e)))
          return 0 === e.length ? -1 : w(t, e, r, n, i);
        if ("number" == typeof e)
          return ((e &= 255), "function" == typeof Uint8Array.prototype.indexOf)
            ? i
              ? Uint8Array.prototype.indexOf.call(t, e, r)
              : Uint8Array.prototype.lastIndexOf.call(t, e, r)
            : w(t, [e], r, n, i);
        throw TypeError("val must be string, number or Buffer");
      }
      function w(t, e, r, n, i) {
        let o,
          s = 1,
          a = t.length,
          u = e.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (s = 2), (a /= 2), (u /= 2), (r /= 2);
        }
        function h(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        if (i) {
          let n = -1;
          for (o = r; o < a; o++)
            if (h(t, o) === h(e, -1 === n ? 0 : o - n)) {
              if ((-1 === n && (n = o), o - n + 1 === u)) return n * s;
            } else -1 !== n && (o -= o - n), (n = -1);
        } else
          for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
            let r = !0;
            for (let n = 0; n < u; n++)
              if (h(t, o + n) !== h(e, n)) {
                r = !1;
                break;
              }
            if (r) return o;
          }
        return -1;
      }
      function v(t, e, r) {
        r = Math.min(t.length, r);
        let n = [],
          i = e;
        for (; i < r; ) {
          let e = t[i],
            o = null,
            s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
          if (i + s <= r) {
            let r, n, a, u;
            switch (s) {
              case 1:
                e < 128 && (o = e);
                break;
              case 2:
                (192 & (r = t[i + 1])) == 128 &&
                  (u = ((31 & e) << 6) | (63 & r)) > 127 &&
                  (o = u);
                break;
              case 3:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (o = u);
                break;
              case 4:
                (r = t[i + 1]),
                  (n = t[i + 2]),
                  (a = t[i + 3]),
                  (192 & r) == 128 &&
                    (192 & n) == 128 &&
                    (192 & a) == 128 &&
                    (u =
                      ((15 & e) << 18) |
                      ((63 & r) << 12) |
                      ((63 & n) << 6) |
                      (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (o = u);
            }
          }
          null === o
            ? ((o = 65533), (s = 1))
            : o > 65535 &&
              ((o -= 65536),
              n.push(((o >>> 10) & 1023) | 55296),
              (o = 56320 | (1023 & o))),
            n.push(o),
            (i += s);
        }
        return (function (t) {
          let e = t.length;
          if (e <= 4096) return String.fromCharCode.apply(String, t);
          let r = "",
            n = 0;
          for (; n < e; )
            r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      function b(t, e, r) {
        if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
        if (t + e > r)
          throw RangeError("Trying to access beyond buffer length");
      }
      function M(t, e, r, n, i, o) {
        if (!a.isBuffer(t))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (e > i || e < o)
          throw RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw RangeError("Index out of range");
      }
      function E(t, e, r, n, i) {
        O(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o),
          (o >>= 8),
          (t[r++] = o);
        let s = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          (s >>= 8),
          (t[r++] = s),
          r
        );
      }
      function _(t, e, r, n, i) {
        O(e, n, i, t, r, 7);
        let o = Number(e & BigInt(4294967295));
        (t[r + 7] = o),
          (o >>= 8),
          (t[r + 6] = o),
          (o >>= 8),
          (t[r + 5] = o),
          (o >>= 8),
          (t[r + 4] = o);
        let s = Number((e >> BigInt(32)) & BigInt(4294967295));
        return (
          (t[r + 3] = s),
          (s >>= 8),
          (t[r + 2] = s),
          (s >>= 8),
          (t[r + 1] = s),
          (s >>= 8),
          (t[r] = s),
          r + 8
        );
      }
      function A(t, e, r, n, i, o) {
        if (r + n > t.length || r < 0) throw RangeError("Index out of range");
      }
      function x(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || A(t, e, r, 4, 34028234663852886e22, -34028234663852886e22),
          i.write(t, e, r, n, 23, 4),
          r + 4
        );
      }
      function B(t, e, r, n, o) {
        return (
          (e = +e),
          (r >>>= 0),
          o || A(t, e, r, 8, 17976931348623157e292, -17976931348623157e292),
          i.write(t, e, r, n, 52, 8),
          r + 8
        );
      }
      (e.Buffer = a),
        (e.SlowBuffer = function (t) {
          return +t != t && (t = 0), a.alloc(+t);
        }),
        (e.INSPECT_MAX_BYTES = 50),
        (e.kMaxLength = 2147483647),
        (a.TYPED_ARRAY_SUPPORT = (function () {
          try {
            let t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(e, Uint8Array.prototype),
              Object.setPrototypeOf(t, e),
              42 === t.foo()
            );
          } catch (t) {
            return !1;
          }
        })()),
        a.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(a.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(a.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (a.isBuffer(this)) return this.byteOffset;
          },
        }),
        (a.poolSize = 8192),
        (a.from = function (t, e, r) {
          return u(t, e, r);
        }),
        Object.setPrototypeOf(a.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(a, Uint8Array),
        (a.alloc = function (t, e, r) {
          return (h(t), t <= 0)
            ? s(t)
            : void 0 !== e
            ? "string" == typeof r
              ? s(t).fill(e, r)
              : s(t).fill(e)
            : s(t);
        }),
        (a.allocUnsafe = function (t) {
          return l(t);
        }),
        (a.allocUnsafeSlow = function (t) {
          return l(t);
        }),
        (a.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== a.prototype;
        }),
        (a.compare = function (t, e) {
          if (
            (P(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            P(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)),
            !a.isBuffer(t) || !a.isBuffer(e))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (t === e) return 0;
          let r = t.length,
            n = e.length;
          for (let i = 0, o = Math.min(r, n); i < o; ++i)
            if (t[i] !== e[i]) {
              (r = t[i]), (n = e[i]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (a.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (a.concat = function (t, e) {
          let r;
          if (!Array.isArray(t))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return a.alloc(0);
          if (void 0 === e)
            for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
          let n = a.allocUnsafe(e),
            i = 0;
          for (r = 0; r < t.length; ++r) {
            let e = t[r];
            if (P(e, Uint8Array))
              i + e.length > n.length
                ? (a.isBuffer(e) || (e = a.from(e)), e.copy(n, i))
                : Uint8Array.prototype.set.call(n, e, i);
            else if (a.isBuffer(e)) e.copy(n, i);
            else throw TypeError('"list" argument must be an Array of Buffers');
            i += e.length;
          }
          return n;
        }),
        (a.byteLength = p),
        (a.prototype._isBuffer = !0),
        (a.prototype.swap16 = function () {
          let t = this.length;
          if (t % 2 != 0)
            throw RangeError("Buffer size must be a multiple of 16-bits");
          for (let e = 0; e < t; e += 2) g(this, e, e + 1);
          return this;
        }),
        (a.prototype.swap32 = function () {
          let t = this.length;
          if (t % 4 != 0)
            throw RangeError("Buffer size must be a multiple of 32-bits");
          for (let e = 0; e < t; e += 4)
            g(this, e, e + 3), g(this, e + 1, e + 2);
          return this;
        }),
        (a.prototype.swap64 = function () {
          let t = this.length;
          if (t % 8 != 0)
            throw RangeError("Buffer size must be a multiple of 64-bits");
          for (let e = 0; e < t; e += 8)
            g(this, e, e + 7),
              g(this, e + 1, e + 6),
              g(this, e + 2, e + 5),
              g(this, e + 3, e + 4);
          return this;
        }),
        (a.prototype.toString = function () {
          let t = this.length;
          return 0 === t
            ? ""
            : 0 == arguments.length
            ? v(this, 0, t)
            : m.apply(this, arguments);
        }),
        (a.prototype.toLocaleString = a.prototype.toString),
        (a.prototype.equals = function (t) {
          if (!a.isBuffer(t)) throw TypeError("Argument must be a Buffer");
          return this === t || 0 === a.compare(this, t);
        }),
        (a.prototype.inspect = function () {
          let t = "",
            r = e.INSPECT_MAX_BYTES;
          return (
            (t = this.toString("hex", 0, r)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > r && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        o && (a.prototype[o] = a.prototype.inspect),
        (a.prototype.compare = function (t, e, r, n, i) {
          if (
            (P(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)),
            !a.isBuffer(t))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof t
            );
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            e < 0 || r > t.length || n < 0 || i > this.length)
          )
            throw RangeError("out of range index");
          if (n >= i && e >= r) return 0;
          if (n >= i) return -1;
          if (e >= r) return 1;
          if (((e >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === t))
            return 0;
          let o = i - n,
            s = r - e,
            u = Math.min(o, s),
            h = this.slice(n, i),
            l = t.slice(e, r);
          for (let t = 0; t < u; ++t)
            if (h[t] !== l[t]) {
              (o = h[t]), (s = l[t]);
              break;
            }
          return o < s ? -1 : s < o ? 1 : 0;
        }),
        (a.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (a.prototype.indexOf = function (t, e, r) {
          return y(this, t, e, r, !0);
        }),
        (a.prototype.lastIndexOf = function (t, e, r) {
          return y(this, t, e, r, !1);
        }),
        (a.prototype.write = function (t, e, r, n) {
          var i, o, s, a, u, h, l, f;
          if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" == typeof e)
            (n = e), (r = this.length), (e = 0);
          else if (isFinite(e))
            (e >>>= 0),
              isFinite(r)
                ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          else
            throw Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported"
            );
          let c = this.length - e;
          if (
            ((void 0 === r || r > c) && (r = c),
            (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
          )
            throw RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          let d = !1;
          for (;;)
            switch (n) {
              case "hex":
                return (function (t, e, r, n) {
                  let i;
                  r = Number(r) || 0;
                  let o = t.length - r;
                  n ? (n = Number(n)) > o && (n = o) : (n = o);
                  let s = e.length;
                  for (n > s / 2 && (n = s / 2), i = 0; i < n; ++i) {
                    let n = parseInt(e.substr(2 * i, 2), 16);
                    if (n != n) break;
                    t[r + i] = n;
                  }
                  return i;
                })(this, t, e, r);
              case "utf8":
              case "utf-8":
                return (i = e), (o = r), N(U(t, this.length - i), this, i, o);
              case "ascii":
              case "latin1":
              case "binary":
                return (
                  (s = e),
                  (a = r),
                  N(
                    (function (t) {
                      let e = [];
                      for (let r = 0; r < t.length; ++r)
                        e.push(255 & t.charCodeAt(r));
                      return e;
                    })(t),
                    this,
                    s,
                    a
                  )
                );
              case "base64":
                return (u = e), (h = r), N(k(t), this, u, h);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (
                  (l = e),
                  (f = r),
                  N(
                    (function (t, e) {
                      let r, n;
                      let i = [];
                      for (let o = 0; o < t.length && !((e -= 2) < 0); ++o)
                        (n = (r = t.charCodeAt(o)) >> 8),
                          i.push(r % 256),
                          i.push(n);
                      return i;
                    })(t, this.length - l),
                    this,
                    l,
                    f
                  )
                );
              default:
                if (d) throw TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (d = !0);
            }
        }),
        (a.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (a.prototype.slice = function (t, e) {
          let r = this.length;
          (t = ~~t),
            (e = void 0 === e ? r : ~~e),
            t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
            e < t && (e = t);
          let n = this.subarray(t, e);
          return Object.setPrototypeOf(n, a.prototype), n;
        }),
        (a.prototype.readUintLE = a.prototype.readUIntLE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
            let n = this[t],
              i = 1,
              o = 0;
            for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
            return n;
          }),
        (a.prototype.readUintBE = a.prototype.readUIntBE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
            let n = this[t + --e],
              i = 1;
            for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
            return n;
          }),
        (a.prototype.readUint8 = a.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || b(t, 1, this.length), this[t];
          }),
        (a.prototype.readUint16LE = a.prototype.readUInt16LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || b(t, 2, this.length),
              this[t] | (this[t + 1] << 8)
            );
          }),
        (a.prototype.readUint16BE = a.prototype.readUInt16BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || b(t, 2, this.length),
              (this[t] << 8) | this[t + 1]
            );
          }),
        (a.prototype.readUint32LE = a.prototype.readUInt32LE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || b(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
        (a.prototype.readUint32BE = a.prototype.readUInt32BE =
          function (t, e) {
            return (
              (t >>>= 0),
              e || b(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
        (a.prototype.readBigUInt64LE = j(function (t) {
          L((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && C(t, this.length - 8);
          let n =
              e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t],
            i = this[++t] + 256 * this[++t] + 65536 * this[++t] + 16777216 * r;
          return BigInt(n) + (BigInt(i) << BigInt(32));
        })),
        (a.prototype.readBigUInt64BE = j(function (t) {
          L((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          (void 0 === e || void 0 === r) && C(t, this.length - 8);
          let n =
              16777216 * e + 65536 * this[++t] + 256 * this[++t] + this[++t],
            i = 16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r;
          return (BigInt(n) << BigInt(32)) + BigInt(i);
        })),
        (a.prototype.readIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
          let n = this[t],
            i = 1,
            o = 0;
          for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
        }),
        (a.prototype.readIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
          let n = e,
            i = 1,
            o = this[t + --n];
          for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
        }),
        (a.prototype.readInt8 = function (t, e) {
          return ((t >>>= 0), e || b(t, 1, this.length), 128 & this[t])
            ? -((255 - this[t] + 1) * 1)
            : this[t];
        }),
        (a.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || b(t, 2, this.length);
          let r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || b(t, 2, this.length);
          let r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (a.prototype.readInt32LE = function (t, e) {
          return (
            (t >>>= 0),
            e || b(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (a.prototype.readInt32BE = function (t, e) {
          return (
            (t >>>= 0),
            e || b(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (a.prototype.readBigInt64LE = j(function (t) {
          L((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && C(t, this.length - 8),
            (BigInt(
              this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24)
            ) <<
              BigInt(32)) +
              BigInt(
                e + 256 * this[++t] + 65536 * this[++t] + 16777216 * this[++t]
              )
          );
        })),
        (a.prototype.readBigInt64BE = j(function (t) {
          L((t >>>= 0), "offset");
          let e = this[t],
            r = this[t + 7];
          return (
            (void 0 === e || void 0 === r) && C(t, this.length - 8),
            (BigInt(
              (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t]
            ) <<
              BigInt(32)) +
              BigInt(
                16777216 * this[++t] + 65536 * this[++t] + 256 * this[++t] + r
              )
          );
        })),
        (a.prototype.readFloatLE = function (t, e) {
          return (
            (t >>>= 0), e || b(t, 4, this.length), i.read(this, t, !0, 23, 4)
          );
        }),
        (a.prototype.readFloatBE = function (t, e) {
          return (
            (t >>>= 0), e || b(t, 4, this.length), i.read(this, t, !1, 23, 4)
          );
        }),
        (a.prototype.readDoubleLE = function (t, e) {
          return (
            (t >>>= 0), e || b(t, 8, this.length), i.read(this, t, !0, 52, 8)
          );
        }),
        (a.prototype.readDoubleBE = function (t, e) {
          return (
            (t >>>= 0), e || b(t, 8, this.length), i.read(this, t, !1, 52, 8)
          );
        }),
        (a.prototype.writeUintLE = a.prototype.writeUIntLE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              M(this, t, e, r, n, 0);
            }
            let i = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < r && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + r;
          }),
        (a.prototype.writeUintBE = a.prototype.writeUIntBE =
          function (t, e, r, n) {
            if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
              let n = Math.pow(2, 8 * r) - 1;
              M(this, t, e, r, n, 0);
            }
            let i = r - 1,
              o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + r;
          }),
        (a.prototype.writeUint8 = a.prototype.writeUInt8 =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || M(this, t, e, 1, 255, 0),
              (this[e] = 255 & t),
              e + 1
            );
          }),
        (a.prototype.writeUint16LE = a.prototype.writeUInt16LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || M(this, t, e, 2, 65535, 0),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
        (a.prototype.writeUint16BE = a.prototype.writeUInt16BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || M(this, t, e, 2, 65535, 0),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
        (a.prototype.writeUint32LE = a.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || M(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeUint32BE = a.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || M(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (a.prototype.writeBigUInt64LE = j(function (t, e = 0) {
          return E(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (a.prototype.writeBigUInt64BE = j(function (t, e = 0) {
          return _(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
        })),
        (a.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            M(this, t, e, r, n - 1, -n);
          }
          let i = 0,
            o = 1,
            s = 0;
          for (this[e] = 255 & t; ++i < r && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
              (this[e + i] = (((t / o) >> 0) - s) & 255);
          return e + r;
        }),
        (a.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            let n = Math.pow(2, 8 * r - 1);
            M(this, t, e, r, n - 1, -n);
          }
          let i = r - 1,
            o = 1,
            s = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
              (this[e + i] = (((t / o) >> 0) - s) & 255);
          return e + r;
        }),
        (a.prototype.writeInt8 = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || M(this, t, e, 1, 127, -128),
            t < 0 && (t = 255 + t + 1),
            (this[e] = 255 & t),
            e + 1
          );
        }),
        (a.prototype.writeInt16LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || M(this, t, e, 2, 32767, -32768),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            e + 2
          );
        }),
        (a.prototype.writeInt16BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || M(this, t, e, 2, 32767, -32768),
            (this[e] = t >>> 8),
            (this[e + 1] = 255 & t),
            e + 2
          );
        }),
        (a.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || M(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (a.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || M(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (a.prototype.writeBigInt64LE = j(function (t, e = 0) {
          return E(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (a.prototype.writeBigInt64BE = j(function (t, e = 0) {
          return _(
            this,
            t,
            e,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (a.prototype.writeFloatLE = function (t, e, r) {
          return x(this, t, e, !0, r);
        }),
        (a.prototype.writeFloatBE = function (t, e, r) {
          return x(this, t, e, !1, r);
        }),
        (a.prototype.writeDoubleLE = function (t, e, r) {
          return B(this, t, e, !0, r);
        }),
        (a.prototype.writeDoubleBE = function (t, e, r) {
          return B(this, t, e, !1, r);
        }),
        (a.prototype.copy = function (t, e, r, n) {
          if (!a.isBuffer(t)) throw TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r || 0 === t.length || 0 === this.length)
          )
            return 0;
          if (e < 0) throw RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw RangeError("Index out of range");
          if (n < 0) throw RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            t.length - e < n - r && (n = t.length - e + r);
          let i = n - r;
          return (
            this === t && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            i
          );
        }),
        (a.prototype.fill = function (t, e, r, n) {
          let i;
          if ("string" == typeof t) {
            if (
              ("string" == typeof e
                ? ((n = e), (e = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" != typeof n)
            )
              throw TypeError("encoding must be a string");
            if ("string" == typeof n && !a.isEncoding(n))
              throw TypeError("Unknown encoding: " + n);
            if (1 === t.length) {
              let e = t.charCodeAt(0);
              (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
            }
          } else
            "number" == typeof t
              ? (t &= 255)
              : "boolean" == typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < r)
            throw RangeError("Out of range index");
          if (r <= e) return this;
          if (
            ((e >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            t || (t = 0),
            "number" == typeof t)
          )
            for (i = e; i < r; ++i) this[i] = t;
          else {
            let o = a.isBuffer(t) ? t : a.from(t, n),
              s = o.length;
            if (0 === s)
              throw TypeError(
                'The value "' + t + '" is invalid for argument "value"'
              );
            for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
          }
          return this;
        });
      let S = {};
      function I(t, e, r) {
        S[t] = class extends r {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: e.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${t}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return t;
          }
          set code(t) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: t,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${t}]: ${this.message}`;
          }
        };
      }
      function R(t) {
        let e = "",
          r = t.length,
          n = "-" === t[0] ? 1 : 0;
        for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
        return `${t.slice(0, r)}${e}`;
      }
      function O(t, e, r, n, i, o) {
        if (t > r || t < e) {
          let n;
          let i = "bigint" == typeof e ? "n" : "";
          throw (
            ((n =
              o > 3
                ? 0 === e || e === BigInt(0)
                  ? `>= 0${i} and < 2${i} ** ${(o + 1) * 8}${i}`
                  : `>= -(2${i} ** ${(o + 1) * 8 - 1}${i}) and < 2 ** ${
                      (o + 1) * 8 - 1
                    }${i}`
                : `>= ${e}${i} and <= ${r}${i}`),
            new S.ERR_OUT_OF_RANGE("value", n, t))
          );
        }
        L(i, "offset"),
          (void 0 === n[i] || void 0 === n[i + o]) && C(i, n.length - (o + 1));
      }
      function L(t, e) {
        if ("number" != typeof t)
          throw new S.ERR_INVALID_ARG_TYPE(e, "number", t);
      }
      function C(t, e, r) {
        if (Math.floor(t) !== t)
          throw (
            (L(t, r), new S.ERR_OUT_OF_RANGE(r || "offset", "an integer", t))
          );
        if (e < 0) throw new S.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new S.ERR_OUT_OF_RANGE(
          r || "offset",
          `>= ${r ? 1 : 0} and <= ${e}`,
          t
        );
      }
      I(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (t) {
          return t
            ? `${t} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        I(
          "ERR_INVALID_ARG_TYPE",
          function (t, e) {
            return `The "${t}" argument must be of type number. Received type ${typeof e}`;
          },
          TypeError
        ),
        I(
          "ERR_OUT_OF_RANGE",
          function (t, e, r) {
            let n = `The value of "${t}" is out of range.`,
              i = r;
            return (
              Number.isInteger(r) && Math.abs(r) > 4294967296
                ? (i = R(String(r)))
                : "bigint" == typeof r &&
                  ((i = String(r)),
                  (r > BigInt(2) ** BigInt(32) ||
                    r < -(BigInt(2) ** BigInt(32))) &&
                    (i = R(i)),
                  (i += "n")),
              (n += ` It must be ${e}. Received ${i}`)
            );
          },
          RangeError
        );
      let T = /[^+/0-9A-Za-z-_]/g;
      function U(t, e) {
        let r;
        e = e || 1 / 0;
        let n = t.length,
          i = null,
          o = [];
        for (let s = 0; s < n; ++s) {
          if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319 || s + 1 === n) {
                (e -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
              continue;
            }
            r = (((i - 55296) << 10) | (r - 56320)) + 65536;
          } else i && (e -= 3) > -1 && o.push(239, 191, 189);
          if (((i = null), r < 128)) {
            if ((e -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            o.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else if (r < 1114112) {
            if ((e -= 4) < 0) break;
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          } else throw Error("Invalid code point");
        }
        return o;
      }
      function k(t) {
        return n.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace(T, "")).length < 2)
              return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function N(t, e, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= e.length) && !(i >= t.length); ++i)
          e[i + r] = t[i];
        return i;
      }
      function P(t, e) {
        return (
          t instanceof e ||
          (null != t &&
            null != t.constructor &&
            null != t.constructor.name &&
            t.constructor.name === e.name)
        );
      }
      let z = (function () {
        let t = "0123456789abcdef",
          e = Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = 16 * r;
          for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
        }
        return e;
      })();
      function j(t) {
        return "undefined" == typeof BigInt ? F : t;
      }
      function F() {
        throw Error("BigInt not supported");
      }
    },
    2892: function (t) {
      "use strict";
      var e = {
        single_source_shortest_paths: function (t, r, n) {
          var i,
            o,
            s,
            a,
            u,
            h,
            l,
            f = {},
            c = {};
          c[r] = 0;
          var d = e.PriorityQueue.make();
          for (d.push(r, 0); !d.empty(); )
            for (s in ((o = (i = d.pop()).value),
            (a = i.cost),
            (u = t[o] || {})))
              u.hasOwnProperty(s) &&
                ((h = a + u[s]),
                (l = c[s]),
                (void 0 === c[s] || l > h) &&
                  ((c[s] = h), d.push(s, h), (f[s] = o)));
          if (void 0 !== n && void 0 === c[n])
            throw Error(
              ["Could not find a path from ", r, " to ", n, "."].join("")
            );
          return f;
        },
        extract_shortest_path_from_predecessor_list: function (t, e) {
          for (var r = [], n = e; n; ) r.push(n), t[n], (n = t[n]);
          return r.reverse(), r;
        },
        find_path: function (t, r, n) {
          var i = e.single_source_shortest_paths(t, r, n);
          return e.extract_shortest_path_from_predecessor_list(i, n);
        },
        PriorityQueue: {
          make: function (t) {
            var r,
              n = e.PriorityQueue,
              i = {};
            for (r in ((t = t || {}), n)) n.hasOwnProperty(r) && (i[r] = n[r]);
            return (i.queue = []), (i.sorter = t.sorter || n.default_sorter), i;
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
    7836: function (t) {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function i(t, e, r) {
        (this.fn = t), (this.context = e), (this.once = r || !1);
      }
      function o(t, e, n, o, s) {
        if ("function" != typeof n)
          throw TypeError("The listener must be a function");
        var a = new i(n, o || t, s),
          u = r ? r + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], a])
              : t._events[u].push(a)
            : ((t._events[u] = a), t._eventsCount++),
          t
        );
      }
      function s(t, e) {
        0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
      }
      function a() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (a.prototype.eventNames = function () {
          var t,
            n,
            i = [];
          if (0 === this._eventsCount) return i;
          for (n in (t = this._events))
            e.call(t, n) && i.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(t))
            : i;
        }),
        (a.prototype.listeners = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, o = n.length, s = Array(o); i < o; i++)
            s[i] = n[i].fn;
          return s;
        }),
        (a.prototype.listenerCount = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (a.prototype.emit = function (t, e, n, i, o, s) {
          var a = r ? r + t : t;
          if (!this._events[a]) return !1;
          var u,
            h,
            l = this._events[a],
            f = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(t, l.fn, void 0, !0), f)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, e), !0;
              case 3:
                return l.fn.call(l.context, e, n), !0;
              case 4:
                return l.fn.call(l.context, e, n, i), !0;
              case 5:
                return l.fn.call(l.context, e, n, i, o), !0;
              case 6:
                return l.fn.call(l.context, e, n, i, o, s), !0;
            }
            for (h = 1, u = Array(f - 1); h < f; h++) u[h - 1] = arguments[h];
            l.fn.apply(l.context, u);
          } else {
            var c,
              d = l.length;
            for (h = 0; h < d; h++)
              switch (
                (l[h].once && this.removeListener(t, l[h].fn, void 0, !0), f)
              ) {
                case 1:
                  l[h].fn.call(l[h].context);
                  break;
                case 2:
                  l[h].fn.call(l[h].context, e);
                  break;
                case 3:
                  l[h].fn.call(l[h].context, e, n);
                  break;
                case 4:
                  l[h].fn.call(l[h].context, e, n, i);
                  break;
                default:
                  if (!u)
                    for (c = 1, u = Array(f - 1); c < f; c++)
                      u[c - 1] = arguments[c];
                  l[h].fn.apply(l[h].context, u);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (t, e, r) {
          return o(this, t, e, r, !1);
        }),
        (a.prototype.once = function (t, e, r) {
          return o(this, t, e, r, !0);
        }),
        (a.prototype.removeListener = function (t, e, n, i) {
          var o = r ? r + t : t;
          if (!this._events[o]) return this;
          if (!e) return s(this, o), this;
          var a = this._events[o];
          if (a.fn)
            a.fn !== e ||
              (i && !a.once) ||
              (n && a.context !== n) ||
              s(this, o);
          else {
            for (var u = 0, h = [], l = a.length; u < l; u++)
              (a[u].fn !== e ||
                (i && !a[u].once) ||
                (n && a[u].context !== n)) &&
                h.push(a[u]);
            h.length
              ? (this._events[o] = 1 === h.length ? h[0] : h)
              : s(this, o);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = r ? r + t : t), this._events[e] && s(this, e))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = r),
        (a.EventEmitter = a),
        (t.exports = a);
    },
    6868: function (t, e) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (e.read =
        function (t, e, r, n, i) {
          var o,
            s,
            a = 8 * i - n - 1,
            u = (1 << a) - 1,
            h = u >> 1,
            l = -7,
            f = r ? i - 1 : 0,
            c = r ? -1 : 1,
            d = t[e + f];
          for (
            f += c, o = d & ((1 << -l) - 1), d >>= -l, l += a;
            l > 0;
            o = 256 * o + t[e + f], f += c, l -= 8
          );
          for (
            s = o & ((1 << -l) - 1), o >>= -l, l += n;
            l > 0;
            s = 256 * s + t[e + f], f += c, l -= 8
          );
          if (0 === o) o = 1 - h;
          else {
            if (o === u) return s ? NaN : (1 / 0) * (d ? -1 : 1);
            (s += Math.pow(2, n)), (o -= h);
          }
          return (d ? -1 : 1) * s * Math.pow(2, o - n);
        }),
        (e.write = function (t, e, r, n, i, o) {
          var s,
            a,
            u,
            h = 8 * o - i - 1,
            l = (1 << h) - 1,
            f = l >> 1,
            c = 23 === i ? 5960464477539062e-23 : 0,
            d = n ? 0 : o - 1,
            p = n ? 1 : -1,
            m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            isNaN((e = Math.abs(e))) || e === 1 / 0
              ? ((a = isNaN(e) ? 1 : 0), (s = l))
              : ((s = Math.floor(Math.log(e) / Math.LN2)),
                e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                s + f >= 1 ? (e += c / u) : (e += c * Math.pow(2, 1 - f)),
                e * u >= 2 && (s++, (u /= 2)),
                s + f >= l
                  ? ((a = 0), (s = l))
                  : s + f >= 1
                  ? ((a = (e * u - 1) * Math.pow(2, i)), (s += f))
                  : ((a = e * Math.pow(2, f - 1) * Math.pow(2, i)), (s = 0)));
            i >= 8;
            t[r + d] = 255 & a, d += p, a /= 256, i -= 8
          );
          for (
            s = (s << i) | a, h += i;
            h > 0;
            t[r + d] = 255 & s, d += p, s /= 256, h -= 8
          );
          t[r + d - p] |= 128 * m;
        });
    },
    4531: function (t, e, r) {
      "use strict";
      let n = r(3538).v4,
        i = r(2309),
        o = function (t, e) {
          if (!(this instanceof o)) return new o(t, e);
          e || (e = {}),
            (this.options = {
              reviver: void 0 !== e.reviver ? e.reviver : null,
              replacer: void 0 !== e.replacer ? e.replacer : null,
              generator:
                void 0 !== e.generator
                  ? e.generator
                  : function () {
                      return n();
                    },
              version: void 0 !== e.version ? e.version : 2,
              notificationIdNull:
                "boolean" == typeof e.notificationIdNull &&
                e.notificationIdNull,
            }),
            (this.callServer = t);
        };
      (t.exports = o),
        (o.prototype.request = function (t, e, r, n) {
          let o;
          let s = this,
            a = null,
            u = Array.isArray(t) && "function" == typeof e;
          if (1 === this.options.version && u)
            throw TypeError("JSON-RPC 1.0 does not support batching");
          let h = !u && t && "object" == typeof t && "function" == typeof e;
          if (u || h) (n = e), (a = t);
          else {
            "function" == typeof r && ((n = r), (r = void 0));
            let o = "function" == typeof n;
            try {
              a = i(t, e, r, {
                generator: this.options.generator,
                version: this.options.version,
                notificationIdNull: this.options.notificationIdNull,
              });
            } catch (t) {
              if (o) return n(t);
              throw t;
            }
            if (!o) return a;
          }
          try {
            o = JSON.stringify(a, this.options.replacer);
          } catch (t) {
            return n(t);
          }
          return (
            this.callServer(o, function (t, e) {
              s._parseResponse(t, e, n);
            }),
            a
          );
        }),
        (o.prototype._parseResponse = function (t, e, r) {
          let n;
          if (t) {
            r(t);
            return;
          }
          if (!e) return r();
          try {
            n = JSON.parse(e, this.options.reviver);
          } catch (t) {
            return r(t);
          }
          if (3 === r.length) {
            if (!Array.isArray(n)) return r(null, n.error, n.result);
            {
              let t = function (t) {
                return void 0 !== t.error;
              };
              return r(
                null,
                n.filter(t),
                n.filter(function (e) {
                  return !t(e);
                })
              );
            }
          }
          r(null, n);
        });
    },
    2309: function (t, e, r) {
      "use strict";
      let n = r(3538).v4;
      t.exports = function (t, e, r, i) {
        if ("string" != typeof t) throw TypeError(t + " must be a string");
        let o = "number" == typeof (i = i || {}).version ? i.version : 2;
        if (1 !== o && 2 !== o) throw TypeError(o + " must be 1 or 2");
        let s = { method: t };
        if ((2 === o && (s.jsonrpc = "2.0"), e)) {
          if ("object" != typeof e && !Array.isArray(e))
            throw TypeError(e + " must be an object, array or omitted");
          s.params = e;
        }
        if (void 0 === r) {
          let t =
            "function" == typeof i.generator
              ? i.generator
              : function () {
                  return n();
                };
          s.id = t(s, i);
        } else
          2 === o && null === r
            ? i.notificationIdNull && (s.id = null)
            : (s.id = r);
        return s;
      };
    },
    9783: function (t, e, r) {
      let n = r(7936),
        i = r(4258),
        o = r(4811),
        s = r(5773);
      function a(t, e, r, o, s) {
        let a = [].slice.call(arguments, 1),
          u = a.length,
          h = "function" == typeof a[u - 1];
        if (!h && !n()) throw Error("Callback required as last argument");
        if (h) {
          if (u < 2) throw Error("Too few arguments provided");
          2 === u
            ? ((s = r), (r = e), (e = o = void 0))
            : 3 === u &&
              (e.getContext && void 0 === s
                ? ((s = o), (o = void 0))
                : ((s = o), (o = r), (r = e), (e = void 0)));
        } else {
          if (u < 1) throw Error("Too few arguments provided");
          return (
            1 === u
              ? ((r = e), (e = o = void 0))
              : 2 !== u || e.getContext || ((o = r), (r = e), (e = void 0)),
            new Promise(function (n, s) {
              try {
                let s = i.create(r, o);
                n(t(s, e, o));
              } catch (t) {
                s(t);
              }
            })
          );
        }
        try {
          let n = i.create(r, o);
          s(null, t(n, e, o));
        } catch (t) {
          s(t);
        }
      }
      (e.create = i.create),
        (e.toCanvas = a.bind(null, o.render)),
        (e.toDataURL = a.bind(null, o.renderToDataURL)),
        (e.toString = a.bind(null, function (t, e, r) {
          return s.render(t, r);
        }));
    },
    7936: function (t) {
      t.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    532: function (t, e, r) {
      let n = r(2601).getSymbolSize;
      (e.getRowColCoords = function (t) {
        if (1 === t) return [];
        let e = Math.floor(t / 7) + 2,
          r = n(t),
          i = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * e - 2)),
          o = [r - 7];
        for (let t = 1; t < e - 1; t++) o[t] = o[t - 1] - i;
        return o.push(6), o.reverse();
      }),
        (e.getPositions = function (t) {
          let r = [],
            n = e.getRowColCoords(t),
            i = n.length;
          for (let t = 0; t < i; t++)
            for (let e = 0; e < i; e++)
              (0 !== t || 0 !== e) &&
                (0 !== t || e !== i - 1) &&
                (t !== i - 1 || 0 !== e) &&
                r.push([n[t], n[e]]);
          return r;
        });
    },
    2971: function (t, e, r) {
      let n = r(8257),
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
      function o(t) {
        (this.mode = n.ALPHANUMERIC), (this.data = t);
      }
      (o.getBitsLength = function (t) {
        return 11 * Math.floor(t / 2) + (t % 2) * 6;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
          let e;
          for (e = 0; e + 2 <= this.data.length; e += 2) {
            let r = 45 * i.indexOf(this.data[e]);
            (r += i.indexOf(this.data[e + 1])), t.put(r, 11);
          }
          this.data.length % 2 && t.put(i.indexOf(this.data[e]), 6);
        }),
        (t.exports = o);
    },
    7148: function (t) {
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
    3143: function (t) {
      function e(t) {
        if (!t || t < 1)
          throw Error("BitMatrix size must be defined and greater than 0");
        (this.size = t),
          (this.data = new Uint8Array(t * t)),
          (this.reservedBit = new Uint8Array(t * t));
      }
      (e.prototype.set = function (t, e, r, n) {
        let i = t * this.size + e;
        (this.data[i] = r), n && (this.reservedBit[i] = !0);
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
    3841: function (t, e, r) {
      let n = r(8257);
      function i(t) {
        (this.mode = n.BYTE),
          "string" == typeof t
            ? (this.data = new TextEncoder().encode(t))
            : (this.data = new Uint8Array(t));
      }
      (i.getBitsLength = function (t) {
        return 8 * t;
      }),
        (i.prototype.getLength = function () {
          return this.data.length;
        }),
        (i.prototype.getBitsLength = function () {
          return i.getBitsLength(this.data.length);
        }),
        (i.prototype.write = function (t) {
          for (let e = 0, r = this.data.length; e < r; e++)
            t.put(this.data[e], 8);
        }),
        (t.exports = i);
    },
    4270: function (t, e, r) {
      let n = r(8428),
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
        o = [
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
          case n.L:
            return i[(t - 1) * 4 + 0];
          case n.M:
            return i[(t - 1) * 4 + 1];
          case n.Q:
            return i[(t - 1) * 4 + 2];
          case n.H:
            return i[(t - 1) * 4 + 3];
          default:
            return;
        }
      }),
        (e.getTotalCodewordsCount = function (t, e) {
          switch (e) {
            case n.L:
              return o[(t - 1) * 4 + 0];
            case n.M:
              return o[(t - 1) * 4 + 1];
            case n.Q:
              return o[(t - 1) * 4 + 2];
            case n.H:
              return o[(t - 1) * 4 + 3];
            default:
              return;
          }
        });
    },
    8428: function (t, e) {
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
              switch (t.toLowerCase()) {
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
    6123: function (t, e, r) {
      let n = r(2601).getSymbolSize;
      e.getPositions = function (t) {
        let e = n(t);
        return [
          [0, 0],
          [e - 7, 0],
          [0, e - 7],
        ];
      };
    },
    9906: function (t, e, r) {
      let n = r(2601),
        i = n.getBCHDigit(1335);
      e.getEncodedBits = function (t, e) {
        let r = (t.bit << 3) | e,
          o = r << 10;
        for (; n.getBCHDigit(o) - i >= 0; ) o ^= 1335 << (n.getBCHDigit(o) - i);
        return ((r << 10) | o) ^ 21522;
      };
    },
    1011: function (t, e) {
      let r = new Uint8Array(512),
        n = new Uint8Array(256);
      !(function () {
        let t = 1;
        for (let e = 0; e < 255; e++)
          (r[e] = t), (n[t] = e), 256 & (t <<= 1) && (t ^= 285);
        for (let t = 255; t < 512; t++) r[t] = r[t - 255];
      })(),
        (e.log = function (t) {
          if (t < 1) throw Error("log(" + t + ")");
          return n[t];
        }),
        (e.exp = function (t) {
          return r[t];
        }),
        (e.mul = function (t, e) {
          return 0 === t || 0 === e ? 0 : r[n[t] + n[e]];
        });
    },
    2558: function (t, e, r) {
      let n = r(8257),
        i = r(2601);
      function o(t) {
        (this.mode = n.KANJI), (this.data = t);
      }
      (o.getBitsLength = function (t) {
        return 13 * t;
      }),
        (o.prototype.getLength = function () {
          return this.data.length;
        }),
        (o.prototype.getBitsLength = function () {
          return o.getBitsLength(this.data.length);
        }),
        (o.prototype.write = function (t) {
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
        (t.exports = o);
    },
    2903: function (t, e) {
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
            n = 0,
            i = 0,
            o = 0,
            s = null,
            a = null;
          for (let u = 0; u < e; u++) {
            (i = o = 0), (s = a = null);
            for (let h = 0; h < e; h++) {
              let e = t.get(u, h);
              e === s
                ? i++
                : (i >= 5 && (n += r.N1 + (i - 5)), (s = e), (i = 1)),
                (e = t.get(h, u)) === a
                  ? o++
                  : (o >= 5 && (n += r.N1 + (o - 5)), (a = e), (o = 1));
            }
            i >= 5 && (n += r.N1 + (i - 5)), o >= 5 && (n += r.N1 + (o - 5));
          }
          return n;
        }),
        (e.getPenaltyN2 = function (t) {
          let e = t.size,
            n = 0;
          for (let r = 0; r < e - 1; r++)
            for (let i = 0; i < e - 1; i++) {
              let e =
                t.get(r, i) +
                t.get(r, i + 1) +
                t.get(r + 1, i) +
                t.get(r + 1, i + 1);
              (4 === e || 0 === e) && n++;
            }
          return n * r.N2;
        }),
        (e.getPenaltyN3 = function (t) {
          let e = t.size,
            n = 0,
            i = 0,
            o = 0;
          for (let r = 0; r < e; r++) {
            i = o = 0;
            for (let s = 0; s < e; s++)
              (i = ((i << 1) & 2047) | t.get(r, s)),
                s >= 10 && (1488 === i || 93 === i) && n++,
                (o = ((o << 1) & 2047) | t.get(s, r)),
                s >= 10 && (1488 === o || 93 === o) && n++;
          }
          return n * r.N3;
        }),
        (e.getPenaltyN4 = function (t) {
          let e = 0,
            n = t.data.length;
          for (let r = 0; r < n; r++) e += t.data[r];
          return Math.abs(Math.ceil((100 * e) / n / 5) - 10) * r.N4;
        }),
        (e.applyMask = function (t, r) {
          let n = r.size;
          for (let i = 0; i < n; i++)
            for (let o = 0; o < n; o++)
              r.isReserved(o, i) ||
                r.xor(
                  o,
                  i,
                  (function (t, r, n) {
                    switch (t) {
                      case e.Patterns.PATTERN000:
                        return (r + n) % 2 == 0;
                      case e.Patterns.PATTERN001:
                        return r % 2 == 0;
                      case e.Patterns.PATTERN010:
                        return n % 3 == 0;
                      case e.Patterns.PATTERN011:
                        return (r + n) % 3 == 0;
                      case e.Patterns.PATTERN100:
                        return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 == 0;
                      case e.Patterns.PATTERN101:
                        return ((r * n) % 2) + ((r * n) % 3) == 0;
                      case e.Patterns.PATTERN110:
                        return (((r * n) % 2) + ((r * n) % 3)) % 2 == 0;
                      case e.Patterns.PATTERN111:
                        return (((r * n) % 3) + ((r + n) % 2)) % 2 == 0;
                      default:
                        throw Error("bad maskPattern:" + t);
                    }
                  })(t, o, i)
                );
        }),
        (e.getBestMask = function (t, r) {
          let n = Object.keys(e.Patterns).length,
            i = 0,
            o = 1 / 0;
          for (let s = 0; s < n; s++) {
            r(s), e.applyMask(s, t);
            let n =
              e.getPenaltyN1(t) +
              e.getPenaltyN2(t) +
              e.getPenaltyN3(t) +
              e.getPenaltyN4(t);
            e.applyMask(s, t), n < o && ((o = n), (i = s));
          }
          return i;
        });
    },
    8257: function (t, e, r) {
      let n = r(6477),
        i = r(6276);
      (e.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (e.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (e.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (e.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (e.MIXED = { bit: -1 }),
        (e.getCharCountIndicator = function (t, e) {
          if (!t.ccBits) throw Error("Invalid mode: " + t);
          if (!n.isValid(e)) throw Error("Invalid version: " + e);
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
              switch (t.toLowerCase()) {
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
    6078: function (t, e, r) {
      let n = r(8257);
      function i(t) {
        (this.mode = n.NUMERIC), (this.data = t.toString());
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
          let n = this.data.length - e;
          n > 0 &&
            ((r = parseInt(this.data.substr(e), 10)), t.put(r, 3 * n + 1));
        }),
        (t.exports = i);
    },
    958: function (t, e, r) {
      let n = r(1011);
      (e.mul = function (t, e) {
        let r = new Uint8Array(t.length + e.length - 1);
        for (let i = 0; i < t.length; i++)
          for (let o = 0; o < e.length; o++) r[i + o] ^= n.mul(t[i], e[o]);
        return r;
      }),
        (e.mod = function (t, e) {
          let r = new Uint8Array(t);
          for (; r.length - e.length >= 0; ) {
            let t = r[0];
            for (let i = 0; i < e.length; i++) r[i] ^= n.mul(e[i], t);
            let i = 0;
            for (; i < r.length && 0 === r[i]; ) i++;
            r = r.slice(i);
          }
          return r;
        }),
        (e.generateECPolynomial = function (t) {
          let r = new Uint8Array([1]);
          for (let i = 0; i < t; i++)
            r = e.mul(r, new Uint8Array([1, n.exp(i)]));
          return r;
        });
    },
    4258: function (t, e, r) {
      let n = r(2601),
        i = r(8428),
        o = r(7148),
        s = r(3143),
        a = r(532),
        u = r(6123),
        h = r(2903),
        l = r(4270),
        f = r(4001),
        c = r(1888),
        d = r(9906),
        p = r(8257),
        m = r(5051);
      function g(t, e, r) {
        let n, i;
        let o = t.size,
          s = d.getEncodedBits(e, r);
        for (n = 0; n < 15; n++)
          (i = ((s >> n) & 1) == 1),
            n < 6
              ? t.set(n, 8, i, !0)
              : n < 8
              ? t.set(n + 1, 8, i, !0)
              : t.set(o - 15 + n, 8, i, !0),
            n < 8
              ? t.set(8, o - n - 1, i, !0)
              : n < 9
              ? t.set(8, 15 - n - 1 + 1, i, !0)
              : t.set(8, 15 - n - 1, i, !0);
        t.set(o - 8, 8, 1, !0);
      }
      e.create = function (t, e) {
        let r, d;
        if (void 0 === t || "" === t) throw Error("No input text");
        let y = i.M;
        return (
          void 0 !== e &&
            ((y = i.from(e.errorCorrectionLevel, i.M)),
            (r = c.from(e.version)),
            (d = h.from(e.maskPattern)),
            e.toSJISFunc && n.setToSJISFunction(e.toSJISFunc)),
          (function (t, e, r, i) {
            let d;
            if (Array.isArray(t)) d = m.fromArray(t);
            else if ("string" == typeof t) {
              let n = e;
              if (!n) {
                let e = m.rawSplit(t);
                n = c.getBestVersionForData(e, r);
              }
              d = m.fromString(t, n || 40);
            } else throw Error("Invalid data");
            let y = c.getBestVersionForData(d, r);
            if (!y)
              throw Error(
                "The amount of data is too big to be stored in a QR Code"
              );
            if (e) {
              if (e < y)
                throw Error(
                  "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                    y +
                    ".\n"
                );
            } else e = y;
            let w = (function (t, e, r) {
                let i = new o();
                r.forEach(function (e) {
                  i.put(e.mode.bit, 4),
                    i.put(e.getLength(), p.getCharCountIndicator(e.mode, t)),
                    e.write(i);
                });
                let s =
                  (n.getSymbolTotalCodewords(t) -
                    l.getTotalCodewordsCount(t, e)) *
                  8;
                for (
                  i.getLengthInBits() + 4 <= s && i.put(0, 4);
                  i.getLengthInBits() % 8 != 0;

                )
                  i.putBit(0);
                let a = (s - i.getLengthInBits()) / 8;
                for (let t = 0; t < a; t++) i.put(t % 2 ? 17 : 236, 8);
                return (function (t, e, r) {
                  let i, o;
                  let s = n.getSymbolTotalCodewords(e),
                    a = s - l.getTotalCodewordsCount(e, r),
                    u = l.getBlocksCount(e, r),
                    h = s % u,
                    c = u - h,
                    d = Math.floor(s / u),
                    p = Math.floor(a / u),
                    m = p + 1,
                    g = d - p,
                    y = new f(g),
                    w = 0,
                    v = Array(u),
                    b = Array(u),
                    M = 0,
                    E = new Uint8Array(t.buffer);
                  for (let t = 0; t < u; t++) {
                    let e = t < c ? p : m;
                    (v[t] = E.slice(w, w + e)),
                      (b[t] = y.encode(v[t])),
                      (w += e),
                      (M = Math.max(M, e));
                  }
                  let _ = new Uint8Array(s),
                    A = 0;
                  for (i = 0; i < M; i++)
                    for (o = 0; o < u; o++)
                      i < v[o].length && (_[A++] = v[o][i]);
                  for (i = 0; i < g; i++)
                    for (o = 0; o < u; o++) _[A++] = b[o][i];
                  return _;
                })(i, t, e);
              })(e, r, d),
              v = new s(n.getSymbolSize(e));
            return (
              (function (t, e) {
                let r = t.size,
                  n = u.getPositions(e);
                for (let e = 0; e < n.length; e++) {
                  let i = n[e][0],
                    o = n[e][1];
                  for (let e = -1; e <= 7; e++)
                    if (!(i + e <= -1) && !(r <= i + e))
                      for (let n = -1; n <= 7; n++)
                        o + n <= -1 ||
                          r <= o + n ||
                          ((e >= 0 && e <= 6 && (0 === n || 6 === n)) ||
                          (n >= 0 && n <= 6 && (0 === e || 6 === e)) ||
                          (e >= 2 && e <= 4 && n >= 2 && n <= 4)
                            ? t.set(i + e, o + n, !0, !0)
                            : t.set(i + e, o + n, !1, !0));
                }
              })(v, e),
              (function (t) {
                let e = t.size;
                for (let r = 8; r < e - 8; r++) {
                  let e = r % 2 == 0;
                  t.set(r, 6, e, !0), t.set(6, r, e, !0);
                }
              })(v),
              (function (t, e) {
                let r = a.getPositions(e);
                for (let e = 0; e < r.length; e++) {
                  let n = r[e][0],
                    i = r[e][1];
                  for (let e = -2; e <= 2; e++)
                    for (let r = -2; r <= 2; r++)
                      -2 === e ||
                      2 === e ||
                      -2 === r ||
                      2 === r ||
                      (0 === e && 0 === r)
                        ? t.set(n + e, i + r, !0, !0)
                        : t.set(n + e, i + r, !1, !0);
                }
              })(v, e),
              g(v, r, 0),
              e >= 7 &&
                (function (t, e) {
                  let r, n, i;
                  let o = t.size,
                    s = c.getEncodedBits(e);
                  for (let e = 0; e < 18; e++)
                    (r = Math.floor(e / 3)),
                      (n = (e % 3) + o - 8 - 3),
                      (i = ((s >> e) & 1) == 1),
                      t.set(r, n, i, !0),
                      t.set(n, r, i, !0);
                })(v, e),
              (function (t, e) {
                let r = t.size,
                  n = -1,
                  i = r - 1,
                  o = 7,
                  s = 0;
                for (let a = r - 1; a > 0; a -= 2)
                  for (6 === a && a--; ; ) {
                    for (let r = 0; r < 2; r++)
                      if (!t.isReserved(i, a - r)) {
                        let n = !1;
                        s < e.length && (n = ((e[s] >>> o) & 1) == 1),
                          t.set(i, a - r, n),
                          -1 == --o && (s++, (o = 7));
                      }
                    if ((i += n) < 0 || r <= i) {
                      (i -= n), (n = -n);
                      break;
                    }
                  }
              })(v, w),
              isNaN(i) && (i = h.getBestMask(v, g.bind(null, v, r))),
              h.applyMask(i, v),
              g(v, r, i),
              {
                modules: v,
                version: e,
                errorCorrectionLevel: r,
                maskPattern: i,
                segments: d,
              }
            );
          })(t, r, y, d)
        );
      };
    },
    4001: function (t, e, r) {
      let n = r(958);
      function i(t) {
        (this.genPoly = void 0),
          (this.degree = t),
          this.degree && this.initialize(this.degree);
      }
      (i.prototype.initialize = function (t) {
        (this.degree = t), (this.genPoly = n.generateECPolynomial(this.degree));
      }),
        (i.prototype.encode = function (t) {
          if (!this.genPoly) throw Error("Encoder not initialized");
          let e = new Uint8Array(t.length + this.degree);
          e.set(t);
          let r = n.mod(e, this.genPoly),
            i = this.degree - r.length;
          if (i > 0) {
            let t = new Uint8Array(this.degree);
            return t.set(r, i), t;
          }
          return r;
        }),
        (t.exports = i);
    },
    6276: function (t, e) {
      let r = "[0-9]+",
        n =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        i =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (n = n.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (e.KANJI = RegExp(n, "g")),
        (e.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (e.BYTE = RegExp(i, "g")),
        (e.NUMERIC = RegExp(r, "g")),
        (e.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g"));
      let o = RegExp("^" + n + "$"),
        s = RegExp("^" + r + "$"),
        a = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (e.testKanji = function (t) {
        return o.test(t);
      }),
        (e.testNumeric = function (t) {
          return s.test(t);
        }),
        (e.testAlphanumeric = function (t) {
          return a.test(t);
        });
    },
    5051: function (t, e, r) {
      let n = r(8257),
        i = r(6078),
        o = r(2971),
        s = r(3841),
        a = r(2558),
        u = r(6276),
        h = r(2601),
        l = r(2892);
      function f(t) {
        return unescape(encodeURIComponent(t)).length;
      }
      function c(t, e, r) {
        let n;
        let i = [];
        for (; null !== (n = t.exec(r)); )
          i.push({ data: n[0], index: n.index, mode: e, length: n[0].length });
        return i;
      }
      function d(t) {
        let e, r;
        let i = c(u.NUMERIC, n.NUMERIC, t),
          o = c(u.ALPHANUMERIC, n.ALPHANUMERIC, t);
        return (
          h.isKanjiModeEnabled()
            ? ((e = c(u.BYTE, n.BYTE, t)), (r = c(u.KANJI, n.KANJI, t)))
            : ((e = c(u.BYTE_KANJI, n.BYTE, t)), (r = [])),
          i
            .concat(o, e, r)
            .sort(function (t, e) {
              return t.index - e.index;
            })
            .map(function (t) {
              return { data: t.data, mode: t.mode, length: t.length };
            })
        );
      }
      function p(t, e) {
        switch (e) {
          case n.NUMERIC:
            return i.getBitsLength(t);
          case n.ALPHANUMERIC:
            return o.getBitsLength(t);
          case n.KANJI:
            return a.getBitsLength(t);
          case n.BYTE:
            return s.getBitsLength(t);
        }
      }
      function m(t, e) {
        let r;
        let u = n.getBestModeForData(t);
        if ((r = n.from(e, u)) !== n.BYTE && r.bit < u.bit)
          throw Error(
            '"' +
              t +
              '" cannot be encoded with mode ' +
              n.toString(r) +
              ".\n Suggested mode is: " +
              n.toString(u)
          );
        switch ((r !== n.KANJI || h.isKanjiModeEnabled() || (r = n.BYTE), r)) {
          case n.NUMERIC:
            return new i(t);
          case n.ALPHANUMERIC:
            return new o(t);
          case n.KANJI:
            return new a(t);
          case n.BYTE:
            return new s(t);
        }
      }
      (e.fromArray = function (t) {
        return t.reduce(function (t, e) {
          return (
            "string" == typeof e
              ? t.push(m(e, null))
              : e.data && t.push(m(e.data, e.mode)),
            t
          );
        }, []);
      }),
        (e.fromString = function (t, r) {
          let i = (function (t, e) {
              let r = {},
                i = { start: {} },
                o = ["start"];
              for (let s = 0; s < t.length; s++) {
                let a = t[s],
                  u = [];
                for (let t = 0; t < a.length; t++) {
                  let h = a[t],
                    l = "" + s + t;
                  u.push(l), (r[l] = { node: h, lastCount: 0 }), (i[l] = {});
                  for (let t = 0; t < o.length; t++) {
                    let s = o[t];
                    r[s] && r[s].node.mode === h.mode
                      ? ((i[s][l] =
                          p(r[s].lastCount + h.length, h.mode) -
                          p(r[s].lastCount, h.mode)),
                        (r[s].lastCount += h.length))
                      : (r[s] && (r[s].lastCount = h.length),
                        (i[s][l] =
                          p(h.length, h.mode) +
                          4 +
                          n.getCharCountIndicator(h.mode, e)));
                  }
                }
                o = u;
              }
              for (let t = 0; t < o.length; t++) i[o[t]].end = 0;
              return { map: i, table: r };
            })(
              (function (t) {
                let e = [];
                for (let r = 0; r < t.length; r++) {
                  let i = t[r];
                  switch (i.mode) {
                    case n.NUMERIC:
                      e.push([
                        i,
                        {
                          data: i.data,
                          mode: n.ALPHANUMERIC,
                          length: i.length,
                        },
                        { data: i.data, mode: n.BYTE, length: i.length },
                      ]);
                      break;
                    case n.ALPHANUMERIC:
                      e.push([
                        i,
                        { data: i.data, mode: n.BYTE, length: i.length },
                      ]);
                      break;
                    case n.KANJI:
                      e.push([
                        i,
                        { data: i.data, mode: n.BYTE, length: f(i.data) },
                      ]);
                      break;
                    case n.BYTE:
                      e.push([
                        { data: i.data, mode: n.BYTE, length: f(i.data) },
                      ]);
                  }
                }
                return e;
              })(d(t, h.isKanjiModeEnabled())),
              r
            ),
            o = l.find_path(i.map, "start", "end"),
            s = [];
          for (let t = 1; t < o.length - 1; t++) s.push(i.table[o[t]].node);
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
          return e.fromArray(d(t, h.isKanjiModeEnabled()));
        });
    },
    2601: function (t, e) {
      let r;
      let n = [
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
          return n[t];
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
    6477: function (t, e) {
      e.isValid = function (t) {
        return !isNaN(t) && t >= 1 && t <= 40;
      };
    },
    1888: function (t, e, r) {
      let n = r(2601),
        i = r(4270),
        o = r(8428),
        s = r(8257),
        a = r(6477),
        u = n.getBCHDigit(7973);
      function h(t, e) {
        return s.getCharCountIndicator(t, e) + 4;
      }
      (e.from = function (t, e) {
        return a.isValid(t) ? parseInt(t, 10) : e;
      }),
        (e.getCapacity = function (t, e, r) {
          if (!a.isValid(t)) throw Error("Invalid QR Code version");
          void 0 === r && (r = s.BYTE);
          let o =
            (n.getSymbolTotalCodewords(t) - i.getTotalCodewordsCount(t, e)) * 8;
          if (r === s.MIXED) return o;
          let u = o - h(r, t);
          switch (r) {
            case s.NUMERIC:
              return Math.floor((u / 10) * 3);
            case s.ALPHANUMERIC:
              return Math.floor((u / 11) * 2);
            case s.KANJI:
              return Math.floor(u / 13);
            case s.BYTE:
            default:
              return Math.floor(u / 8);
          }
        }),
        (e.getBestVersionForData = function (t, r) {
          let n;
          let i = o.from(r, o.M);
          if (Array.isArray(t)) {
            if (t.length > 1)
              return (function (t, r) {
                for (let n = 1; n <= 40; n++)
                  if (
                    (function (t, e) {
                      let r = 0;
                      return (
                        t.forEach(function (t) {
                          let n = h(t.mode, e);
                          r += n + t.getBitsLength();
                        }),
                        r
                      );
                    })(t, n) <= e.getCapacity(n, r, s.MIXED)
                  )
                    return n;
              })(t, i);
            if (0 === t.length) return 1;
            n = t[0];
          } else n = t;
          return (function (t, r, n) {
            for (let i = 1; i <= 40; i++)
              if (r <= e.getCapacity(i, n, t)) return i;
          })(n.mode, n.getLength(), i);
        }),
        (e.getEncodedBits = function (t) {
          if (!a.isValid(t) || t < 7) throw Error("Invalid QR Code version");
          let e = t << 12;
          for (; n.getBCHDigit(e) - u >= 0; )
            e ^= 7973 << (n.getBCHDigit(e) - u);
          return (t << 12) | e;
        });
    },
    4811: function (t, e, r) {
      let n = r(9472);
      (e.render = function (t, e, r) {
        var i;
        let o = r,
          s = e;
        void 0 !== o || (e && e.getContext) || ((o = e), (e = void 0)),
          e ||
            (s = (function () {
              try {
                return document.createElement("canvas");
              } catch (t) {
                throw Error("You need to specify a canvas element");
              }
            })()),
          (o = n.getOptions(o));
        let a = n.getImageWidth(t.modules.size, o),
          u = s.getContext("2d"),
          h = u.createImageData(a, a);
        return (
          n.qrToImageData(h.data, t, o),
          (i = s),
          u.clearRect(0, 0, i.width, i.height),
          i.style || (i.style = {}),
          (i.height = a),
          (i.width = a),
          (i.style.height = a + "px"),
          (i.style.width = a + "px"),
          u.putImageData(h, 0, 0),
          s
        );
      }),
        (e.renderToDataURL = function (t, r, n) {
          let i = n;
          void 0 !== i || (r && r.getContext) || ((i = r), (r = void 0)),
            i || (i = {});
          let o = e.render(t, r, i),
            s = i.type || "image/png",
            a = i.rendererOpts || {};
          return o.toDataURL(s, a.quality);
        });
    },
    5773: function (t, e, r) {
      let n = r(9472);
      function i(t, e) {
        let r = t.a / 255,
          n = e + '="' + t.hex + '"';
        return r < 1
          ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"'
          : n;
      }
      function o(t, e, r) {
        let n = t + e;
        return void 0 !== r && (n += " " + r), n;
      }
      e.render = function (t, e, r) {
        let s = n.getOptions(e),
          a = t.modules.size,
          u = t.modules.data,
          h = a + 2 * s.margin,
          l = s.color.light.a
            ? "<path " +
              i(s.color.light, "fill") +
              ' d="M0 0h' +
              h +
              "v" +
              h +
              'H0z"/>'
            : "",
          f =
            "<path " +
            i(s.color.dark, "stroke") +
            ' d="' +
            (function (t, e, r) {
              let n = "",
                i = 0,
                s = !1,
                a = 0;
              for (let u = 0; u < t.length; u++) {
                let h = Math.floor(u % e),
                  l = Math.floor(u / e);
                h || s || (s = !0),
                  t[u]
                    ? (a++,
                      (u > 0 && h > 0 && t[u - 1]) ||
                        ((n += s ? o("M", h + r, 0.5 + l + r) : o("m", i, 0)),
                        (i = 0),
                        (s = !1)),
                      (h + 1 < e && t[u + 1]) || ((n += o("h", a)), (a = 0)))
                    : i++;
              }
              return n;
            })(u, a, s.margin) +
            '"/>',
          c =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (s.width
              ? 'width="' + s.width + '" height="' + s.width + '" '
              : "") +
            ('viewBox="0 0 ' + h) +
            " " +
            h +
            '" shape-rendering="crispEdges">' +
            l +
            f +
            "</svg>\n";
        return "function" == typeof r && r(null, c), c;
      };
    },
    9472: function (t, e) {
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
          n = t.width && t.width >= 21 ? t.width : void 0,
          i = t.scale || 4;
        return {
          width: n,
          scale: n ? 4 : i,
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
          let n = e.getScale(t, r);
          return Math.floor((t + 2 * r.margin) * n);
        }),
        (e.qrToImageData = function (t, r, n) {
          let i = r.modules.size,
            o = r.modules.data,
            s = e.getScale(i, n),
            a = Math.floor((i + 2 * n.margin) * s),
            u = n.margin * s,
            h = [n.color.light, n.color.dark];
          for (let e = 0; e < a; e++)
            for (let r = 0; r < a; r++) {
              let l = (e * a + r) * 4,
                f = n.color.light;
              e >= u &&
                r >= u &&
                e < a - u &&
                r < a - u &&
                (f =
                  h[
                    o[Math.floor((e - u) / s) * i + Math.floor((r - u) / s)]
                      ? 1
                      : 0
                  ]),
                (t[l++] = f.r),
                (t[l++] = f.g),
                (t[l++] = f.b),
                (t[l] = f.a);
            }
        });
    },
    3466: function (t) {
      "use strict";
      var e = Object.prototype.hasOwnProperty,
        r = "~";
      function n() {}
      function i(t, e, r) {
        (this.fn = t), (this.context = e), (this.once = r || !1);
      }
      function o(t, e, n, o, s) {
        if ("function" != typeof n)
          throw TypeError("The listener must be a function");
        var a = new i(n, o || t, s),
          u = r ? r + e : e;
        return (
          t._events[u]
            ? t._events[u].fn
              ? (t._events[u] = [t._events[u], a])
              : t._events[u].push(a)
            : ((t._events[u] = a), t._eventsCount++),
          t
        );
      }
      function s(t, e) {
        0 == --t._eventsCount ? (t._events = new n()) : delete t._events[e];
      }
      function a() {
        (this._events = new n()), (this._eventsCount = 0);
      }
      Object.create &&
        ((n.prototype = Object.create(null)), new n().__proto__ || (r = !1)),
        (a.prototype.eventNames = function () {
          var t,
            n,
            i = [];
          if (0 === this._eventsCount) return i;
          for (n in (t = this._events))
            e.call(t, n) && i.push(r ? n.slice(1) : n);
          return Object.getOwnPropertySymbols
            ? i.concat(Object.getOwnPropertySymbols(t))
            : i;
        }),
        (a.prototype.listeners = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          if (!n) return [];
          if (n.fn) return [n.fn];
          for (var i = 0, o = n.length, s = Array(o); i < o; i++)
            s[i] = n[i].fn;
          return s;
        }),
        (a.prototype.listenerCount = function (t) {
          var e = r ? r + t : t,
            n = this._events[e];
          return n ? (n.fn ? 1 : n.length) : 0;
        }),
        (a.prototype.emit = function (t, e, n, i, o, s) {
          var a = r ? r + t : t;
          if (!this._events[a]) return !1;
          var u,
            h,
            l = this._events[a],
            f = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(t, l.fn, void 0, !0), f)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, e), !0;
              case 3:
                return l.fn.call(l.context, e, n), !0;
              case 4:
                return l.fn.call(l.context, e, n, i), !0;
              case 5:
                return l.fn.call(l.context, e, n, i, o), !0;
              case 6:
                return l.fn.call(l.context, e, n, i, o, s), !0;
            }
            for (h = 1, u = Array(f - 1); h < f; h++) u[h - 1] = arguments[h];
            l.fn.apply(l.context, u);
          } else {
            var c,
              d = l.length;
            for (h = 0; h < d; h++)
              switch (
                (l[h].once && this.removeListener(t, l[h].fn, void 0, !0), f)
              ) {
                case 1:
                  l[h].fn.call(l[h].context);
                  break;
                case 2:
                  l[h].fn.call(l[h].context, e);
                  break;
                case 3:
                  l[h].fn.call(l[h].context, e, n);
                  break;
                case 4:
                  l[h].fn.call(l[h].context, e, n, i);
                  break;
                default:
                  if (!u)
                    for (c = 1, u = Array(f - 1); c < f; c++)
                      u[c - 1] = arguments[c];
                  l[h].fn.apply(l[h].context, u);
              }
          }
          return !0;
        }),
        (a.prototype.on = function (t, e, r) {
          return o(this, t, e, r, !1);
        }),
        (a.prototype.once = function (t, e, r) {
          return o(this, t, e, r, !0);
        }),
        (a.prototype.removeListener = function (t, e, n, i) {
          var o = r ? r + t : t;
          if (!this._events[o]) return this;
          if (!e) return s(this, o), this;
          var a = this._events[o];
          if (a.fn)
            a.fn !== e ||
              (i && !a.once) ||
              (n && a.context !== n) ||
              s(this, o);
          else {
            for (var u = 0, h = [], l = a.length; u < l; u++)
              (a[u].fn !== e ||
                (i && !a[u].once) ||
                (n && a[u].context !== n)) &&
                h.push(a[u]);
            h.length
              ? (this._events[o] = 1 === h.length ? h[0] : h)
              : s(this, o);
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function (t) {
          var e;
          return (
            t
              ? ((e = r ? r + t : t), this._events[e] && s(this, e))
              : ((this._events = new n()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prefixed = r),
        (a.EventEmitter = a),
        (t.exports = a);
    },
    632: function (t, e, r) {
      /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ var n =
          r(9109),
        i = n.Buffer;
      function o(t, e) {
        for (var r in t) e[r] = t[r];
      }
      function s(t, e, r) {
        return i(t, e, r);
      }
      i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
        ? (t.exports = n)
        : (o(n, e), (e.Buffer = s)),
        (s.prototype = Object.create(i.prototype)),
        o(i, s),
        (s.from = function (t, e, r) {
          if ("number" == typeof t)
            throw TypeError("Argument must not be a number");
          return i(t, e, r);
        }),
        (s.alloc = function (t, e, r) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          var n = i(t);
          return (
            void 0 !== e
              ? "string" == typeof r
                ? n.fill(e, r)
                : n.fill(e)
              : n.fill(0),
            n
          );
        }),
        (s.allocUnsafe = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return i(t);
        }),
        (s.allocUnsafeSlow = function (t) {
          if ("number" != typeof t)
            throw TypeError("Argument must be a number");
          return n.SlowBuffer(t);
        });
    },
    7139: function (t, e) {
      "use strict";
      function r(t, e, r) {
        return e <= t && t <= r;
      }
      function n(t) {
        if (void 0 === t) return {};
        if (t === Object(t)) return t;
        throw TypeError("Could not convert argument to dictionary");
      }
      function i(t) {
        this.tokens = [].slice.call(t);
      }
      function o(t, e) {
        if (t) throw TypeError("Decoder error");
        return e || 65533;
      }
      i.prototype = {
        endOfStream: function () {
          return !this.tokens.length;
        },
        read: function () {
          return this.tokens.length ? this.tokens.shift() : -1;
        },
        prepend: function (t) {
          if (Array.isArray(t)) for (; t.length; ) this.tokens.unshift(t.pop());
          else this.tokens.unshift(t);
        },
        push: function (t) {
          if (Array.isArray(t)) for (; t.length; ) this.tokens.push(t.shift());
          else this.tokens.push(t);
        },
      };
      var s = "utf-8";
      function a(t, e) {
        if (!(this instanceof a)) return new a(t, e);
        if ((t = void 0 !== t ? String(t).toLowerCase() : s) !== s)
          throw Error("Encoding not supported. Only utf-8 is supported");
        (e = n(e)),
          (this._streaming = !1),
          (this._BOMseen = !1),
          (this._decoder = null),
          (this._fatal = !!e.fatal),
          (this._ignoreBOM = !!e.ignoreBOM),
          Object.defineProperty(this, "encoding", { value: "utf-8" }),
          Object.defineProperty(this, "fatal", { value: this._fatal }),
          Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
      }
      function u(t, e) {
        if (!(this instanceof u)) return new u(t, e);
        if ((t = void 0 !== t ? String(t).toLowerCase() : s) !== s)
          throw Error("Encoding not supported. Only utf-8 is supported");
        (e = n(e)),
          (this._streaming = !1),
          (this._encoder = null),
          (this._options = { fatal: !!e.fatal }),
          Object.defineProperty(this, "encoding", { value: "utf-8" });
      }
      function h(t) {
        var e = t.fatal,
          n = 0,
          i = 0,
          s = 0,
          a = 128,
          u = 191;
        this.handler = function (t, h) {
          if (-1 === h && 0 !== s) return (s = 0), o(e);
          if (-1 === h) return -1;
          if (0 === s) {
            if (r(h, 0, 127)) return h;
            if (r(h, 194, 223)) (s = 1), (n = h - 192);
            else if (r(h, 224, 239))
              224 === h && (a = 160),
                237 === h && (u = 159),
                (s = 2),
                (n = h - 224);
            else {
              if (!r(h, 240, 244)) return o(e);
              240 === h && (a = 144),
                244 === h && (u = 143),
                (s = 3),
                (n = h - 240);
            }
            return (n <<= 6 * s), null;
          }
          if (!r(h, a, u))
            return (n = s = i = 0), (a = 128), (u = 191), t.prepend(h), o(e);
          if (
            ((a = 128),
            (u = 191),
            (i += 1),
            (n += (h - 128) << (6 * (s - i))),
            i !== s)
          )
            return null;
          var l = n;
          return (n = s = i = 0), l;
        };
      }
      function l(t) {
        t.fatal,
          (this.handler = function (t, e) {
            if (-1 === e) return -1;
            if (r(e, 0, 127)) return e;
            r(e, 128, 2047)
              ? ((n = 1), (i = 192))
              : r(e, 2048, 65535)
              ? ((n = 2), (i = 224))
              : r(e, 65536, 1114111) && ((n = 3), (i = 240));
            for (var n, i, o = [(e >> (6 * n)) + i]; n > 0; ) {
              var s = e >> (6 * (n - 1));
              o.push(128 | (63 & s)), (n -= 1);
            }
            return o;
          });
      }
      (a.prototype = {
        decode: function (t, e) {
          (r =
            "object" == typeof t && t instanceof ArrayBuffer
              ? new Uint8Array(t)
              : "object" == typeof t &&
                "buffer" in t &&
                t.buffer instanceof ArrayBuffer
              ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
              : new Uint8Array(0)),
            (e = n(e)),
            this._streaming ||
              ((this._decoder = new h({ fatal: this._fatal })),
              (this._BOMseen = !1)),
            (this._streaming = !!e.stream);
          for (
            var r, o, s = new i(r), a = [];
            !s.endOfStream() && -1 !== (o = this._decoder.handler(s, s.read()));

          )
            null !== o && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
          if (!this._streaming) {
            do {
              if (-1 === (o = this._decoder.handler(s, s.read()))) break;
              if (null === o) continue;
              Array.isArray(o) ? a.push.apply(a, o) : a.push(o);
            } while (!s.endOfStream());
            this._decoder = null;
          }
          return (
            !a.length ||
              -1 === ["utf-8"].indexOf(this.encoding) ||
              this._ignoreBOM ||
              this._BOMseen ||
              (65279 === a[0]
                ? ((this._BOMseen = !0), a.shift())
                : (this._BOMseen = !0)),
            (function (t) {
              for (var e = "", r = 0; r < t.length; ++r) {
                var n = t[r];
                n <= 65535
                  ? (e += String.fromCharCode(n))
                  : ((n -= 65536),
                    (e += String.fromCharCode(
                      (n >> 10) + 55296,
                      (1023 & n) + 56320
                    )));
              }
              return e;
            })(a)
          );
        },
      }),
        (u.prototype = {
          encode: function (t, e) {
            (t = t ? String(t) : ""),
              (e = n(e)),
              this._streaming || (this._encoder = new l(this._options)),
              (this._streaming = !!e.stream);
            for (
              var r,
                o = [],
                s = new i(
                  (function (t) {
                    for (
                      var e = String(t), r = e.length, n = 0, i = [];
                      n < r;

                    ) {
                      var o = e.charCodeAt(n);
                      if (o < 55296 || o > 57343) i.push(o);
                      else if (56320 <= o && o <= 57343) i.push(65533);
                      else if (55296 <= o && o <= 56319) {
                        if (n === r - 1) i.push(65533);
                        else {
                          var s = t.charCodeAt(n + 1);
                          if (56320 <= s && s <= 57343) {
                            var a = 1023 & o,
                              u = 1023 & s;
                            i.push(65536 + (a << 10) + u), (n += 1);
                          } else i.push(65533);
                        }
                      }
                      n += 1;
                    }
                    return i;
                  })(t)
                );
              !s.endOfStream() &&
              -1 !== (r = this._encoder.handler(s, s.read()));

            )
              Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
            if (!this._streaming) {
              for (; -1 !== (r = this._encoder.handler(s, s.read())); )
                Array.isArray(r) ? o.push.apply(o, r) : o.push(r);
              this._encoder = null;
            }
            return new Uint8Array(o);
          },
        }),
        (e.TextEncoder = u),
        (e.TextDecoder = a);
    },
    3538: function (t, e, r) {
      "use strict";
      r.d(e, {
        v4: function () {
          return h;
        },
      });
      for (
        var n,
          i = new Uint8Array(16),
          o =
            /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
          s = [],
          a = 0;
        a < 256;
        ++a
      )
        s.push((a + 256).toString(16).substr(1));
      var u = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            r = (
              s[t[e + 0]] +
              s[t[e + 1]] +
              s[t[e + 2]] +
              s[t[e + 3]] +
              "-" +
              s[t[e + 4]] +
              s[t[e + 5]] +
              "-" +
              s[t[e + 6]] +
              s[t[e + 7]] +
              "-" +
              s[t[e + 8]] +
              s[t[e + 9]] +
              "-" +
              s[t[e + 10]] +
              s[t[e + 11]] +
              s[t[e + 12]] +
              s[t[e + 13]] +
              s[t[e + 14]] +
              s[t[e + 15]]
            ).toLowerCase();
          if (!("string" == typeof r && o.test(r)))
            throw TypeError("Stringified UUID is invalid");
          return r;
        },
        h = function (t, e, r) {
          var o =
            (t = t || {}).random ||
            (
              t.rng ||
              function () {
                if (
                  !n &&
                  !(n =
                    ("undefined" != typeof crypto &&
                      crypto.getRandomValues &&
                      crypto.getRandomValues.bind(crypto)) ||
                    ("undefined" != typeof msCrypto &&
                      "function" == typeof msCrypto.getRandomValues &&
                      msCrypto.getRandomValues.bind(msCrypto)))
                )
                  throw Error(
                    "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                  );
                return n(i);
              }
            )();
          if (((o[6] = (15 & o[6]) | 64), (o[8] = (63 & o[8]) | 128), e)) {
            r = r || 0;
            for (var s = 0; s < 16; ++s) e[r + s] = o[s];
            return e;
          }
          return u(o);
        };
    },
    5438: function () {},
    6423: function (t) {
      t.exports = {
        style: {
          fontFamily:
            "'__Chakra_Petch_051167', '__Chakra_Petch_Fallback_051167'",
        },
        className: "__className_051167",
        variable: "__variable_051167",
      };
    },
    2435: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Inter_9b822d', '__Inter_Fallback_9b822d'",
          fontStyle: "normal",
        },
        className: "__className_9b822d",
        variable: "__variable_9b822d",
      };
    },
    5332: function (t, e, r) {
      "use strict";
      r.d(e, {
        D1: function () {
          return l;
        },
        Kd: function () {
          return f;
        },
        Mx: function () {
          return h;
        },
      });
      var n = r(3554),
        i = r(1678);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let o =
          BigInt(0),
        s = BigInt(1),
        a = new WeakMap(),
        u = new WeakMap();
      function h(t, e) {
        let r = (t, e) => {
            let r = e.negate();
            return t ? r : e;
          },
          n = (t) => {
            if (!Number.isSafeInteger(t) || t <= 0 || t > e)
              throw Error(`Wrong window size=${t}, should be [1..${e}]`);
          },
          i = (t) => (
            n(t), { windows: Math.ceil(e / t) + 1, windowSize: 2 ** (t - 1) }
          );
        return {
          constTimeNegate: r,
          unsafeLadder(e, r) {
            let n = t.ZERO,
              i = e;
            for (; r > o; )
              r & s && (n = n.add(i)), (i = i.double()), (r >>= s);
            return n;
          },
          precomputeWindow(t, e) {
            let { windows: r, windowSize: n } = i(e),
              o = [],
              s = t,
              a = s;
            for (let t = 0; t < r; t++) {
              (a = s), o.push(a);
              for (let t = 1; t < n; t++) (a = a.add(s)), o.push(a);
              s = a.double();
            }
            return o;
          },
          wNAF(e, n, o) {
            let { windows: a, windowSize: u } = i(e),
              h = t.ZERO,
              l = t.BASE,
              f = BigInt(2 ** e - 1),
              c = 2 ** e,
              d = BigInt(e);
            for (let t = 0; t < a; t++) {
              let e = t * u,
                i = Number(o & f);
              (o >>= d), i > u && ((i -= c), (o += s));
              let a = e + Math.abs(i) - 1,
                p = t % 2 != 0,
                m = i < 0;
              0 === i ? (l = l.add(r(p, n[e]))) : (h = h.add(r(m, n[a])));
            }
            return { p: h, f: l };
          },
          wNAFCached(t, e, r) {
            let n = u.get(t) || 1,
              i = a.get(t);
            return (
              i ||
                ((i = this.precomputeWindow(t, n)), 1 !== n && a.set(t, r(i))),
              this.wNAF(n, i, e)
            );
          },
          setWindowSize(t, e) {
            n(e), u.set(t, e), a.delete(t);
          },
        };
      }
      function l(t, e, r, n) {
        if (!Array.isArray(r) || !Array.isArray(n) || n.length !== r.length)
          throw Error("arrays of points and scalars must have equal length");
        n.forEach((t, r) => {
          if (!e.isValid(t)) throw Error(`wrong scalar at index ${r}`);
        }),
          r.forEach((e, r) => {
            if (!(e instanceof t)) throw Error(`wrong point at index ${r}`);
          });
        let o = (0, i.Dd)(BigInt(r.length)),
          s = o > 12 ? o - 3 : o > 4 ? o - 2 : o ? 2 : 1,
          a = (1 << s) - 1,
          u = Array(a + 1).fill(t.ZERO),
          h = Math.floor((e.BITS - 1) / s) * s,
          l = t.ZERO;
        for (let e = h; e >= 0; e -= s) {
          u.fill(t.ZERO);
          for (let t = 0; t < n.length; t++) {
            let i = Number((n[t] >> BigInt(e)) & BigInt(a));
            u[i] = u[i].add(r[t]);
          }
          let i = t.ZERO;
          for (let e = u.length - 1, r = t.ZERO; e > 0; e--)
            (r = r.add(u[e])), (i = i.add(r));
          if (((l = l.add(i)), 0 !== e))
            for (let t = 0; t < s; t++) l = l.double();
        }
        return l;
      }
      function f(t) {
        return (
          (0, n.OP)(t.Fp),
          (0, i.FF)(
            t,
            { n: "bigint", h: "bigint", Gx: "field", Gy: "field" },
            { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }
          ),
          Object.freeze({
            ...(0, n.kK)(t.n, t.nBitLength),
            ...t,
            p: t.Fp.ORDER,
          })
        );
      }
    },
    3554: function (t, e, r) {
      "use strict";
      r.d(e, {
        OP: function () {
          return g;
        },
        PS: function () {
          return b;
        },
        Tu: function () {
          return p;
        },
        U_: function () {
          return d;
        },
        Us: function () {
          return M;
        },
        gN: function () {
          return w;
        },
        kK: function () {
          return y;
        },
        oA: function () {
          return c;
        },
        wQ: function () {
          return f;
        },
      });
      var n = r(1678);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let i =
          BigInt(0),
        o = BigInt(1),
        s = BigInt(2),
        a = BigInt(3),
        u = BigInt(4),
        h = BigInt(5),
        l = BigInt(8);
      function f(t, e) {
        let r = t % e;
        return r >= i ? r : e + r;
      }
      function c(t, e, r) {
        let n = t;
        for (; e-- > i; ) (n *= n), (n %= r);
        return n;
      }
      function d(t, e) {
        if (t === i || e <= i)
          throw Error(
            `invert: expected positive integers, got n=${t} mod=${e}`
          );
        let r = f(t, e),
          n = e,
          s = i,
          a = o,
          u = o,
          h = i;
        for (; r !== i; ) {
          let t = n / r,
            e = n % r,
            i = s - u * t,
            o = a - h * t;
          (n = r), (r = e), (s = u), (a = h), (u = i), (h = o);
        }
        if (n !== o) throw Error("invert: does not exist");
        return f(s, e);
      }
      BigInt(9), BigInt(16);
      let p = (t, e) => (f(t, e) & o) === o,
        m = [
          "create",
          "isValid",
          "is0",
          "neg",
          "inv",
          "sqrt",
          "sqr",
          "eql",
          "add",
          "sub",
          "mul",
          "pow",
          "div",
          "addN",
          "subN",
          "mulN",
          "sqrN",
        ];
      function g(t) {
        let e = m.reduce((t, e) => ((t[e] = "function"), t), {
          ORDER: "bigint",
          MASK: "bigint",
          BYTES: "isSafeInteger",
          BITS: "isSafeInteger",
        });
        return (0, n.FF)(t, e);
      }
      function y(t, e) {
        let r = void 0 !== e ? e : t.toString(2).length;
        return { nBitLength: r, nByteLength: Math.ceil(r / 8) };
      }
      function w(t, e, r = !1, c = {}) {
        if (t <= i) throw Error(`Expected Field ORDER > 0, got ${t}`);
        let { nBitLength: p, nByteLength: m } = y(t, e);
        if (m > 2048)
          throw Error("Field lengths over 2048 bytes are not supported");
        let g = (function (t) {
            if (t % u === a) {
              let e = (t + o) / u;
              return function (t, r) {
                let n = t.pow(r, e);
                if (!t.eql(t.sqr(n), r)) throw Error("Cannot find square root");
                return n;
              };
            }
            if (t % l === h) {
              let e = (t - h) / l;
              return function (t, r) {
                let n = t.mul(r, s),
                  i = t.pow(n, e),
                  o = t.mul(r, i),
                  a = t.mul(t.mul(o, s), i),
                  u = t.mul(o, t.sub(a, t.ONE));
                if (!t.eql(t.sqr(u), r)) throw Error("Cannot find square root");
                return u;
              };
            }
            return (function (t) {
              let e, r, n;
              let a = (t - o) / s;
              for (e = t - o, r = 0; e % s === i; e /= s, r++);
              for (
                n = s;
                n < t &&
                (function (t, e, r) {
                  if (r <= i || e < i) throw Error("Expected power/modulo > 0");
                  if (r === o) return i;
                  let n = o;
                  for (; e > i; )
                    e & o && (n = (n * t) % r), (t = (t * t) % r), (e >>= o);
                  return n;
                })(n, a, t) !==
                  t - o;
                n++
              );
              if (1 === r) {
                let e = (t + o) / u;
                return function (t, r) {
                  let n = t.pow(r, e);
                  if (!t.eql(t.sqr(n), r))
                    throw Error("Cannot find square root");
                  return n;
                };
              }
              let h = (e + o) / s;
              return function (t, i) {
                if (t.pow(i, a) === t.neg(t.ONE))
                  throw Error("Cannot find square root");
                let s = r,
                  u = t.pow(t.mul(t.ONE, n), e),
                  l = t.pow(i, h),
                  f = t.pow(i, e);
                for (; !t.eql(f, t.ONE); ) {
                  if (t.eql(f, t.ZERO)) return t.ZERO;
                  let e = 1;
                  for (let r = t.sqr(f); e < s && !t.eql(r, t.ONE); e++)
                    r = t.sqr(r);
                  let r = t.pow(u, o << BigInt(s - e - 1));
                  (u = t.sqr(r)), (l = t.mul(l, r)), (f = t.mul(f, u)), (s = e);
                }
                return l;
              };
            })(t);
          })(t),
          w = Object.freeze({
            ORDER: t,
            BITS: p,
            BYTES: m,
            MASK: (0, n.dQ)(p),
            ZERO: i,
            ONE: o,
            create: (e) => f(e, t),
            isValid: (e) => {
              if ("bigint" != typeof e)
                throw Error(
                  `Invalid field element: expected bigint, got ${typeof e}`
                );
              return i <= e && e < t;
            },
            is0: (t) => t === i,
            isOdd: (t) => (t & o) === o,
            neg: (e) => f(-e, t),
            eql: (t, e) => t === e,
            sqr: (e) => f(e * e, t),
            add: (e, r) => f(e + r, t),
            sub: (e, r) => f(e - r, t),
            mul: (e, r) => f(e * r, t),
            pow: (t, e) =>
              (function (t, e, r) {
                if (r < i) throw Error("Expected power > 0");
                if (r === i) return t.ONE;
                if (r === o) return e;
                let n = t.ONE,
                  s = e;
                for (; r > i; )
                  r & o && (n = t.mul(n, s)), (s = t.sqr(s)), (r >>= o);
                return n;
              })(w, t, e),
            div: (e, r) => f(e * d(r, t), t),
            sqrN: (t) => t * t,
            addN: (t, e) => t + e,
            subN: (t, e) => t - e,
            mulN: (t, e) => t * e,
            inv: (e) => d(e, t),
            sqrt: c.sqrt || ((t) => g(w, t)),
            invertBatch: (t) =>
              (function (t, e) {
                let r = Array(e.length),
                  n = e.reduce(
                    (e, n, i) => (t.is0(n) ? e : ((r[i] = e), t.mul(e, n))),
                    t.ONE
                  ),
                  i = t.inv(n);
                return (
                  e.reduceRight(
                    (e, n, i) =>
                      t.is0(n) ? e : ((r[i] = t.mul(e, r[i])), t.mul(e, n)),
                    i
                  ),
                  r
                );
              })(w, t),
            cmov: (t, e, r) => (r ? e : t),
            toBytes: (t) => (r ? (0, n.S5)(t, m) : (0, n.tL)(t, m)),
            fromBytes: (t) => {
              if (t.length !== m)
                throw Error(`Fp.fromBytes: expected ${m}, got ${t.length}`);
              return r ? (0, n.ty)(t) : (0, n.bytesToNumberBE)(t);
            },
          });
        return Object.freeze(w);
      }
      function v(t) {
        if ("bigint" != typeof t) throw Error("field order must be bigint");
        return Math.ceil(t.toString(2).length / 8);
      }
      function b(t) {
        let e = v(t);
        return e + Math.ceil(e / 2);
      }
      function M(t, e, r = !1) {
        let i = t.length,
          s = v(e),
          a = b(e);
        if (i < 16 || i < a || i > 1024)
          throw Error(`expected ${a}-1024 bytes of input, got ${i}`);
        let u = f(r ? (0, n.bytesToNumberBE)(t) : (0, n.ty)(t), e - o) + o;
        return r ? (0, n.S5)(u, s) : (0, n.tL)(u, s);
      }
    },
    1678: function (t, e, r) {
      "use strict";
      r.d(e, {
        Dd: function () {
          return x;
        },
        FF: function () {
          return L;
        },
        Fy: function () {
          return A;
        },
        H9: function () {
          return C;
        },
        S5: function () {
          return v;
        },
        Z2: function () {
          return _;
        },
        _t: function () {
          return s;
        },
        bytesToNumberBE: function () {
          return g;
        },
        ci: function () {
          return l;
        },
        dQ: function () {
          return B;
        },
        eV: function () {
          return M;
        },
        gk: function () {
          return a;
        },
        hexToBytes: function () {
          return m;
        },
        n$: function () {
          return R;
        },
        ql: function () {
          return b;
        },
        tL: function () {
          return w;
        },
        ty: function () {
          return y;
        },
        uw: function () {
          return u;
        },
        uz: function () {
          return f;
        },
      });
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let n =
          BigInt(0),
        i = BigInt(1),
        o = BigInt(2);
      function s(t) {
        return (
          t instanceof Uint8Array ||
          (null != t &&
            "object" == typeof t &&
            "Uint8Array" === t.constructor.name)
        );
      }
      function a(t) {
        if (!s(t)) throw Error("Uint8Array expected");
      }
      function u(t, e) {
        if ("boolean" != typeof e)
          throw Error(`${t} must be valid boolean, got "${e}".`);
      }
      let h = Array.from({ length: 256 }, (t, e) =>
        e.toString(16).padStart(2, "0")
      );
      function l(t) {
        a(t);
        let e = "";
        for (let r = 0; r < t.length; r++) e += h[t[r]];
        return e;
      }
      function f(t) {
        let e = t.toString(16);
        return 1 & e.length ? `0${e}` : e;
      }
      function c(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        return BigInt("" === t ? "0" : `0x${t}`);
      }
      let d = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
      function p(t) {
        return t >= d._0 && t <= d._9
          ? t - d._0
          : t >= d._A && t <= d._F
          ? t - (d._A - 10)
          : t >= d._a && t <= d._f
          ? t - (d._a - 10)
          : void 0;
      }
      function m(t) {
        if ("string" != typeof t)
          throw Error("hex string expected, got " + typeof t);
        let e = t.length,
          r = e / 2;
        if (e % 2)
          throw Error(
            "padded hex string expected, got unpadded hex of length " + e
          );
        let n = new Uint8Array(r);
        for (let e = 0, i = 0; e < r; e++, i += 2) {
          let r = p(t.charCodeAt(i)),
            o = p(t.charCodeAt(i + 1));
          if (void 0 === r || void 0 === o)
            throw Error(
              'hex string expected, got non-hex character "' +
                (t[i] + t[i + 1]) +
                '" at index ' +
                i
            );
          n[e] = 16 * r + o;
        }
        return n;
      }
      function g(t) {
        return c(l(t));
      }
      function y(t) {
        return a(t), c(l(Uint8Array.from(t).reverse()));
      }
      function w(t, e) {
        return m(t.toString(16).padStart(2 * e, "0"));
      }
      function v(t, e) {
        return w(t, e).reverse();
      }
      function b(t, e, r) {
        let n;
        if ("string" == typeof e)
          try {
            n = m(e);
          } catch (r) {
            throw Error(
              `${t} must be valid hex string, got "${e}". Cause: ${r}`
            );
          }
        else if (s(e)) n = Uint8Array.from(e);
        else throw Error(`${t} must be hex string or Uint8Array`);
        let i = n.length;
        if ("number" == typeof r && i !== r)
          throw Error(`${t} expected ${r} bytes, got ${i}`);
        return n;
      }
      function M(...t) {
        let e = 0;
        for (let r = 0; r < t.length; r++) {
          let n = t[r];
          a(n), (e += n.length);
        }
        let r = new Uint8Array(e);
        for (let e = 0, n = 0; e < t.length; e++) {
          let i = t[e];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      let E = (t) => "bigint" == typeof t && n <= t;
      function _(t, e, r) {
        return E(t) && E(e) && E(r) && e <= t && t < r;
      }
      function A(t, e, r, n) {
        if (!_(e, r, n))
          throw Error(
            `expected valid ${t}: ${r} <= n < ${n}, got ${typeof e} ${e}`
          );
      }
      function x(t) {
        let e;
        for (e = 0; t > n; t >>= i, e += 1);
        return e;
      }
      let B = (t) => (o << BigInt(t - 1)) - i,
        S = (t) => new Uint8Array(t),
        I = (t) => Uint8Array.from(t);
      function R(t, e, r) {
        if ("number" != typeof t || t < 2)
          throw Error("hashLen must be a number");
        if ("number" != typeof e || e < 2)
          throw Error("qByteLen must be a number");
        if ("function" != typeof r) throw Error("hmacFn must be a function");
        let n = S(t),
          i = S(t),
          o = 0,
          s = () => {
            n.fill(1), i.fill(0), (o = 0);
          },
          a = (...t) => r(i, n, ...t),
          u = (t = S()) => {
            (i = a(I([0]), t)),
              (n = a()),
              0 !== t.length && ((i = a(I([1]), t)), (n = a()));
          },
          h = () => {
            if (o++ >= 1e3) throw Error("drbg: tried 1000 values");
            let t = 0,
              r = [];
            for (; t < e; ) {
              let e = (n = a()).slice();
              r.push(e), (t += n.length);
            }
            return M(...r);
          };
        return (t, e) => {
          let r;
          for (s(), u(t); !(r = e(h())); ) u();
          return s(), r;
        };
      }
      let O = {
        bigint: (t) => "bigint" == typeof t,
        function: (t) => "function" == typeof t,
        boolean: (t) => "boolean" == typeof t,
        string: (t) => "string" == typeof t,
        stringOrUint8Array: (t) => "string" == typeof t || s(t),
        isSafeInteger: (t) => Number.isSafeInteger(t),
        array: (t) => Array.isArray(t),
        field: (t, e) => e.Fp.isValid(t),
        hash: (t) =>
          "function" == typeof t && Number.isSafeInteger(t.outputLen),
      };
      function L(t, e, r = {}) {
        let n = (e, r, n) => {
          let i = O[r];
          if ("function" != typeof i)
            throw Error(`Invalid validator "${r}", expected function`);
          let o = t[e];
          if ((!n || void 0 !== o) && !i(o, t))
            throw Error(
              `Invalid param ${String(e)}=${o} (${typeof o}), expected ${r}`
            );
        };
        for (let [t, r] of Object.entries(e)) n(t, r, !1);
        for (let [t, e] of Object.entries(r)) n(t, e, !0);
        return t;
      }
      function C(t) {
        let e = new WeakMap();
        return (r, ...n) => {
          let i = e.get(r);
          if (void 0 !== i) return i;
          let o = t(r, ...n);
          return e.set(r, o), o;
        };
      }
    },
    2583: function (t, e, r) {
      "use strict";
      r.d(e, {
        UN: function () {
          return L;
        },
      });
      var n = r(7189);
      let i = BigInt(4294967296 - 1),
        o = BigInt(32);
      var s = {
          split: function (t, e = !1) {
            let r = new Uint32Array(t.length),
              n = new Uint32Array(t.length);
            for (let s = 0; s < t.length; s++) {
              let { h: a, l: u } = (function (t, e = !1) {
                return e
                  ? { h: Number(t & i), l: Number((t >> o) & i) }
                  : { h: 0 | Number((t >> o) & i), l: 0 | Number(t & i) };
              })(t[s], e);
              [r[s], n[s]] = [a, u];
            }
            return [r, n];
          },
          shrSH: (t, e, r) => t >>> r,
          shrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
          rotrSH: (t, e, r) => (t >>> r) | (e << (32 - r)),
          rotrSL: (t, e, r) => (t << (32 - r)) | (e >>> r),
          rotrBH: (t, e, r) => (t << (64 - r)) | (e >>> (r - 32)),
          rotrBL: (t, e, r) => (t >>> (r - 32)) | (e << (64 - r)),
          add: function (t, e, r, n) {
            let i = (e >>> 0) + (n >>> 0);
            return { h: (t + r + ((i / 4294967296) | 0)) | 0, l: 0 | i };
          },
          add3L: (t, e, r) => (t >>> 0) + (e >>> 0) + (r >>> 0),
          add3H: (t, e, r, n) => (e + r + n + ((t / 4294967296) | 0)) | 0,
          add4L: (t, e, r, n) => (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0),
          add4H: (t, e, r, n, i) =>
            (e + r + n + i + ((t / 4294967296) | 0)) | 0,
          add5H: (t, e, r, n, i, o) =>
            (e + r + n + i + o + ((t / 4294967296) | 0)) | 0,
          add5L: (t, e, r, n, i) =>
            (t >>> 0) + (e >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0),
        },
        a = r(1007);
      let [u, h] = s.split(
          [
            "0x428a2f98d728ae22",
            "0x7137449123ef65cd",
            "0xb5c0fbcfec4d3b2f",
            "0xe9b5dba58189dbbc",
            "0x3956c25bf348b538",
            "0x59f111f1b605d019",
            "0x923f82a4af194f9b",
            "0xab1c5ed5da6d8118",
            "0xd807aa98a3030242",
            "0x12835b0145706fbe",
            "0x243185be4ee4b28c",
            "0x550c7dc3d5ffb4e2",
            "0x72be5d74f27b896f",
            "0x80deb1fe3b1696b1",
            "0x9bdc06a725c71235",
            "0xc19bf174cf692694",
            "0xe49b69c19ef14ad2",
            "0xefbe4786384f25e3",
            "0x0fc19dc68b8cd5b5",
            "0x240ca1cc77ac9c65",
            "0x2de92c6f592b0275",
            "0x4a7484aa6ea6e483",
            "0x5cb0a9dcbd41fbd4",
            "0x76f988da831153b5",
            "0x983e5152ee66dfab",
            "0xa831c66d2db43210",
            "0xb00327c898fb213f",
            "0xbf597fc7beef0ee4",
            "0xc6e00bf33da88fc2",
            "0xd5a79147930aa725",
            "0x06ca6351e003826f",
            "0x142929670a0e6e70",
            "0x27b70a8546d22ffc",
            "0x2e1b21385c26c926",
            "0x4d2c6dfc5ac42aed",
            "0x53380d139d95b3df",
            "0x650a73548baf63de",
            "0x766a0abb3c77b2a8",
            "0x81c2c92e47edaee6",
            "0x92722c851482353b",
            "0xa2bfe8a14cf10364",
            "0xa81a664bbc423001",
            "0xc24b8b70d0f89791",
            "0xc76c51a30654be30",
            "0xd192e819d6ef5218",
            "0xd69906245565a910",
            "0xf40e35855771202a",
            "0x106aa07032bbd1b8",
            "0x19a4c116b8d2d0c8",
            "0x1e376c085141ab53",
            "0x2748774cdf8eeb99",
            "0x34b0bcb5e19b48a8",
            "0x391c0cb3c5c95a63",
            "0x4ed8aa4ae3418acb",
            "0x5b9cca4f7763e373",
            "0x682e6ff3d6b2b8a3",
            "0x748f82ee5defb2fc",
            "0x78a5636f43172f60",
            "0x84c87814a1f0ab72",
            "0x8cc702081a6439ec",
            "0x90befffa23631e28",
            "0xa4506cebde82bde9",
            "0xbef9a3f7b2c67915",
            "0xc67178f2e372532b",
            "0xca273eceea26619c",
            "0xd186b8c721c0c207",
            "0xeada7dd6cde0eb1e",
            "0xf57d4f7fee6ed178",
            "0x06f067aa72176fba",
            "0x0a637dc5a2c898a6",
            "0x113f9804bef90dae",
            "0x1b710b35131c471b",
            "0x28db77f523047d84",
            "0x32caab7b40c72493",
            "0x3c9ebe0a15c9bebc",
            "0x431d67c49c100d4c",
            "0x4cc5d4becb3e42b6",
            "0x597f299cfc657e2a",
            "0x5fcb6fab3ad6faec",
            "0x6c44198c4a475817",
          ].map((t) => BigInt(t))
        ),
        l = new Uint32Array(80),
        f = new Uint32Array(80);
      class c extends n.VR {
        constructor() {
          super(128, 64, 16, !1),
            (this.Ah = 1779033703),
            (this.Al = -205731576),
            (this.Bh = -1150833019),
            (this.Bl = -2067093701),
            (this.Ch = 1013904242),
            (this.Cl = -23791573),
            (this.Dh = -1521486534),
            (this.Dl = 1595750129),
            (this.Eh = 1359893119),
            (this.El = -1377402159),
            (this.Fh = -1694144372),
            (this.Fl = 725511199),
            (this.Gh = 528734635),
            (this.Gl = -79577749),
            (this.Hh = 1541459225),
            (this.Hl = 327033209);
        }
        get() {
          let {
            Ah: t,
            Al: e,
            Bh: r,
            Bl: n,
            Ch: i,
            Cl: o,
            Dh: s,
            Dl: a,
            Eh: u,
            El: h,
            Fh: l,
            Fl: f,
            Gh: c,
            Gl: d,
            Hh: p,
            Hl: m,
          } = this;
          return [t, e, r, n, i, o, s, a, u, h, l, f, c, d, p, m];
        }
        set(t, e, r, n, i, o, s, a, u, h, l, f, c, d, p, m) {
          (this.Ah = 0 | t),
            (this.Al = 0 | e),
            (this.Bh = 0 | r),
            (this.Bl = 0 | n),
            (this.Ch = 0 | i),
            (this.Cl = 0 | o),
            (this.Dh = 0 | s),
            (this.Dl = 0 | a),
            (this.Eh = 0 | u),
            (this.El = 0 | h),
            (this.Fh = 0 | l),
            (this.Fl = 0 | f),
            (this.Gh = 0 | c),
            (this.Gl = 0 | d),
            (this.Hh = 0 | p),
            (this.Hl = 0 | m);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4)
            (l[r] = t.getUint32(e)), (f[r] = t.getUint32((e += 4)));
          for (let t = 16; t < 80; t++) {
            let e = 0 | l[t - 15],
              r = 0 | f[t - 15],
              n = s.rotrSH(e, r, 1) ^ s.rotrSH(e, r, 8) ^ s.shrSH(e, r, 7),
              i = s.rotrSL(e, r, 1) ^ s.rotrSL(e, r, 8) ^ s.shrSL(e, r, 7),
              o = 0 | l[t - 2],
              a = 0 | f[t - 2],
              u = s.rotrSH(o, a, 19) ^ s.rotrBH(o, a, 61) ^ s.shrSH(o, a, 6),
              h = s.rotrSL(o, a, 19) ^ s.rotrBL(o, a, 61) ^ s.shrSL(o, a, 6),
              c = s.add4L(i, h, f[t - 7], f[t - 16]),
              d = s.add4H(c, n, u, l[t - 7], l[t - 16]);
            (l[t] = 0 | d), (f[t] = 0 | c);
          }
          let {
            Ah: r,
            Al: n,
            Bh: i,
            Bl: o,
            Ch: a,
            Cl: c,
            Dh: d,
            Dl: p,
            Eh: m,
            El: g,
            Fh: y,
            Fl: w,
            Gh: v,
            Gl: b,
            Hh: M,
            Hl: E,
          } = this;
          for (let t = 0; t < 80; t++) {
            let e =
                s.rotrSH(m, g, 14) ^ s.rotrSH(m, g, 18) ^ s.rotrBH(m, g, 41),
              _ = s.rotrSL(m, g, 14) ^ s.rotrSL(m, g, 18) ^ s.rotrBL(m, g, 41),
              A = (m & y) ^ (~m & v),
              x = (g & w) ^ (~g & b),
              B = s.add5L(E, _, x, h[t], f[t]),
              S = s.add5H(B, M, e, A, u[t], l[t]),
              I = 0 | B,
              R = s.rotrSH(r, n, 28) ^ s.rotrBH(r, n, 34) ^ s.rotrBH(r, n, 39),
              O = s.rotrSL(r, n, 28) ^ s.rotrBL(r, n, 34) ^ s.rotrBL(r, n, 39),
              L = (r & i) ^ (r & a) ^ (i & a),
              C = (n & o) ^ (n & c) ^ (o & c);
            (M = 0 | v),
              (E = 0 | b),
              (v = 0 | y),
              (b = 0 | w),
              (y = 0 | m),
              (w = 0 | g),
              ({ h: m, l: g } = s.add(0 | d, 0 | p, 0 | S, 0 | I)),
              (d = 0 | a),
              (p = 0 | c),
              (a = 0 | i),
              (c = 0 | o),
              (i = 0 | r),
              (o = 0 | n);
            let T = s.add3L(I, O, C);
            (r = s.add3H(T, S, R, L)), (n = 0 | T);
          }
          ({ h: r, l: n } = s.add(0 | this.Ah, 0 | this.Al, 0 | r, 0 | n)),
            ({ h: i, l: o } = s.add(0 | this.Bh, 0 | this.Bl, 0 | i, 0 | o)),
            ({ h: a, l: c } = s.add(0 | this.Ch, 0 | this.Cl, 0 | a, 0 | c)),
            ({ h: d, l: p } = s.add(0 | this.Dh, 0 | this.Dl, 0 | d, 0 | p)),
            ({ h: m, l: g } = s.add(0 | this.Eh, 0 | this.El, 0 | m, 0 | g)),
            ({ h: y, l: w } = s.add(0 | this.Fh, 0 | this.Fl, 0 | y, 0 | w)),
            ({ h: v, l: b } = s.add(0 | this.Gh, 0 | this.Gl, 0 | v, 0 | b)),
            ({ h: M, l: E } = s.add(0 | this.Hh, 0 | this.Hl, 0 | M, 0 | E)),
            this.set(r, n, i, o, a, c, d, p, m, g, y, w, v, b, M, E);
        }
        roundClean() {
          l.fill(0), f.fill(0);
        }
        destroy() {
          this.buffer.fill(0),
            this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        }
      }
      let d = (0, a.hE)(() => new c());
      var p = r(5332),
        m = r(3554),
        g = r(1678);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let y =
          BigInt(0),
        w = BigInt(1),
        v = BigInt(2),
        b = BigInt(8),
        M = { zip215: !0 },
        E = BigInt(
          "57896044618658097711785492504343953926634992332820282019728792003956564819949"
        ),
        _ = BigInt(
          "19681161376707505956807079304988542015446066515923890162744021073123829784752"
        ),
        A = BigInt(0),
        x = BigInt(1),
        B = BigInt(2);
      BigInt(3);
      let S = BigInt(5),
        I = BigInt(8);
      function R(t, e) {
        let r = (0, m.wQ)(e * e * e, E),
          n = (function (t) {
            let e = BigInt(10),
              r = BigInt(20),
              n = BigInt(40),
              i = BigInt(80),
              o = (((t * t) % E) * t) % E,
              s = ((0, m.oA)(o, B, E) * o) % E,
              a = ((0, m.oA)(s, x, E) * t) % E,
              u = ((0, m.oA)(a, S, E) * a) % E,
              h = ((0, m.oA)(u, e, E) * u) % E,
              l = ((0, m.oA)(h, r, E) * h) % E,
              f = ((0, m.oA)(l, n, E) * l) % E,
              c = ((0, m.oA)(f, i, E) * f) % E,
              d = ((0, m.oA)(c, i, E) * f) % E,
              p = ((0, m.oA)(d, e, E) * u) % E;
            return { pow_p_5_8: ((0, m.oA)(p, B, E) * t) % E, b2: o };
          })(t * (0, m.wQ)(r * r * e, E)).pow_p_5_8,
          i = (0, m.wQ)(t * r * n, E),
          o = (0, m.wQ)(e * i * i, E),
          s = i,
          a = (0, m.wQ)(i * _, E),
          u = o === t,
          h = o === (0, m.wQ)(-t, E),
          l = o === (0, m.wQ)(-t * _, E);
        return (
          u && (i = s),
          (h || l) && (i = a),
          (0, m.Tu)(i, E) && (i = (0, m.wQ)(-i, E)),
          { isValid: u || h, value: i }
        );
      }
      let O = (0, m.gN)(E, void 0, !0),
        L = (function (t) {
          let e = (function (t) {
              let e = (0, p.Kd)(t);
              return (
                g.FF(
                  t,
                  {
                    hash: "function",
                    a: "bigint",
                    d: "bigint",
                    randomBytes: "function",
                  },
                  {
                    adjustScalarBytes: "function",
                    domain: "function",
                    uvRatio: "function",
                    mapToCurve: "function",
                  }
                ),
                Object.freeze({ ...e })
              );
            })(t),
            {
              Fp: r,
              n: n,
              prehash: i,
              hash: o,
              randomBytes: s,
              nByteLength: a,
              h: u,
            } = e,
            h = v << (BigInt(8 * a) - w),
            l = r.create,
            f = (0, m.gN)(e.n, e.nBitLength),
            c =
              e.uvRatio ||
              ((t, e) => {
                try {
                  return { isValid: !0, value: r.sqrt(t * r.inv(e)) };
                } catch (t) {
                  return { isValid: !1, value: y };
                }
              }),
            d = e.adjustScalarBytes || ((t) => t),
            E =
              e.domain ||
              ((t, e, r) => {
                if (((0, g.uw)("phflag", r), e.length || r))
                  throw Error("Contexts/pre-hash are not supported");
                return t;
              });
          function _(t, e) {
            g.Fy("coordinate " + t, e, y, h);
          }
          function A(t) {
            if (!(t instanceof S)) throw Error("ExtendedPoint expected");
          }
          let x = (0, g.H9)((t, e) => {
              let { ex: n, ey: i, ez: o } = t,
                s = t.is0();
              null == e && (e = s ? b : r.inv(o));
              let a = l(n * e),
                u = l(i * e),
                h = l(o * e);
              if (s) return { x: y, y: w };
              if (h !== w) throw Error("invZ was invalid");
              return { x: a, y: u };
            }),
            B = (0, g.H9)((t) => {
              let { a: r, d: n } = e;
              if (t.is0()) throw Error("bad point: ZERO");
              let { ex: i, ey: o, ez: s, et: a } = t,
                u = l(i * i),
                h = l(o * o),
                f = l(s * s),
                c = l(f * f),
                d = l(u * r);
              if (l(f * l(d + h)) !== l(c + l(n * l(u * h))))
                throw Error("bad point: equation left != right (1)");
              if (l(i * o) !== l(s * a))
                throw Error("bad point: equation left != right (2)");
              return !0;
            });
          class S {
            constructor(t, e, r, n) {
              (this.ex = t),
                (this.ey = e),
                (this.ez = r),
                (this.et = n),
                _("x", t),
                _("y", e),
                _("z", r),
                _("t", n),
                Object.freeze(this);
            }
            get x() {
              return this.toAffine().x;
            }
            get y() {
              return this.toAffine().y;
            }
            static fromAffine(t) {
              if (t instanceof S) throw Error("extended point not allowed");
              let { x: e, y: r } = t || {};
              return _("x", e), _("y", r), new S(e, r, w, l(e * r));
            }
            static normalizeZ(t) {
              let e = r.invertBatch(t.map((t) => t.ez));
              return t.map((t, r) => t.toAffine(e[r])).map(S.fromAffine);
            }
            static msm(t, e) {
              return (0, p.D1)(S, f, t, e);
            }
            _setWindowSize(t) {
              O.setWindowSize(this, t);
            }
            assertValidity() {
              B(this);
            }
            equals(t) {
              A(t);
              let { ex: e, ey: r, ez: n } = this,
                { ex: i, ey: o, ez: s } = t,
                a = l(e * s),
                u = l(i * n),
                h = l(r * s),
                f = l(o * n);
              return a === u && h === f;
            }
            is0() {
              return this.equals(S.ZERO);
            }
            negate() {
              return new S(l(-this.ex), this.ey, this.ez, l(-this.et));
            }
            double() {
              let { a: t } = e,
                { ex: r, ey: n, ez: i } = this,
                o = l(r * r),
                s = l(n * n),
                a = l(v * l(i * i)),
                u = l(t * o),
                h = r + n,
                f = l(l(h * h) - o - s),
                c = u + s,
                d = c - a,
                p = u - s,
                m = l(f * d),
                g = l(c * p),
                y = l(f * p);
              return new S(m, g, l(d * c), y);
            }
            add(t) {
              A(t);
              let { a: r, d: n } = e,
                { ex: i, ey: o, ez: s, et: a } = this,
                { ex: u, ey: h, ez: f, et: c } = t;
              if (r === BigInt(-1)) {
                let t = l((o - i) * (h + u)),
                  e = l((o + i) * (h - u)),
                  r = l(e - t);
                if (r === y) return this.double();
                let n = l(s * v * c),
                  d = l(a * v * f),
                  p = d + n,
                  m = e + t,
                  g = d - n,
                  w = l(p * r),
                  b = l(m * g),
                  M = l(p * g);
                return new S(w, b, l(r * m), M);
              }
              let d = l(i * u),
                p = l(o * h),
                m = l(a * n * c),
                g = l(s * f),
                w = l((i + o) * (u + h) - d - p),
                b = g - m,
                M = g + m,
                E = l(p - r * d),
                _ = l(w * b),
                x = l(M * E),
                B = l(w * E);
              return new S(_, x, l(b * M), B);
            }
            subtract(t) {
              return this.add(t.negate());
            }
            wNAF(t) {
              return O.wNAFCached(this, t, S.normalizeZ);
            }
            multiply(t) {
              g.Fy("scalar", t, w, n);
              let { p: e, f: r } = this.wNAF(t);
              return S.normalizeZ([e, r])[0];
            }
            multiplyUnsafe(t) {
              return (g.Fy("scalar", t, y, n), t === y)
                ? R
                : this.equals(R) || t === w
                ? this
                : this.equals(I)
                ? this.wNAF(t).p
                : O.unsafeLadder(this, t);
            }
            isSmallOrder() {
              return this.multiplyUnsafe(u).is0();
            }
            isTorsionFree() {
              return O.unsafeLadder(this, n).is0();
            }
            toAffine(t) {
              return x(this, t);
            }
            clearCofactor() {
              let { h: t } = e;
              return t === w ? this : this.multiplyUnsafe(t);
            }
            static fromHex(t, n = !1) {
              let { d: i, a: o } = e,
                s = r.BYTES;
              (t = (0, g.ql)("pointHex", t, s)), (0, g.uw)("zip215", n);
              let a = t.slice(),
                u = t[s - 1];
              a[s - 1] = -129 & u;
              let f = g.ty(a),
                d = n ? h : r.ORDER;
              g.Fy("pointHex.y", f, y, d);
              let p = l(f * f),
                { isValid: m, value: v } = c(l(p - w), l(i * p - o));
              if (!m) throw Error("Point.fromHex: invalid y coordinate");
              let b = (v & w) === w,
                M = (128 & u) != 0;
              if (!n && v === y && M)
                throw Error("Point.fromHex: x=0 and x_0=1");
              return M !== b && (v = l(-v)), S.fromAffine({ x: v, y: f });
            }
            static fromPrivateKey(t) {
              return C(t).point;
            }
            toRawBytes() {
              let { x: t, y: e } = this.toAffine(),
                n = g.S5(e, r.BYTES);
              return (n[n.length - 1] |= t & w ? 128 : 0), n;
            }
            toHex() {
              return g.ci(this.toRawBytes());
            }
          }
          (S.BASE = new S(e.Gx, e.Gy, w, l(e.Gx * e.Gy))),
            (S.ZERO = new S(y, w, w, y));
          let { BASE: I, ZERO: R } = S,
            O = (0, p.Mx)(S, 8 * a);
          function L(t) {
            var e;
            return (e = g.ty(t)), (0, m.wQ)(e, n);
          }
          function C(t) {
            t = (0, g.ql)("private key", t, a);
            let e = (0, g.ql)("hashed private key", o(t), 2 * a),
              r = d(e.slice(0, a)),
              n = e.slice(a, 2 * a),
              i = L(r),
              s = I.multiply(i),
              u = s.toRawBytes();
            return { head: r, prefix: n, scalar: i, point: s, pointBytes: u };
          }
          function T(t = new Uint8Array(), ...e) {
            return L(o(E(g.eV(...e), (0, g.ql)("context", t), !!i)));
          }
          return (
            I._setWindowSize(8),
            {
              CURVE: e,
              getPublicKey: function (t) {
                return C(t).pointBytes;
              },
              sign: function (t, e, o = {}) {
                var s;
                (t = (0, g.ql)("message", t)), i && (t = i(t));
                let { prefix: u, scalar: h, pointBytes: l } = C(e),
                  f = T(o.context, u, t),
                  c = I.multiply(f).toRawBytes(),
                  d = ((s = f + T(o.context, c, l, t) * h), (0, m.wQ)(s, n));
                g.Fy("signature.s", d, y, n);
                let p = g.eV(c, g.S5(d, r.BYTES));
                return (0, g.ql)("result", p, 2 * a);
              },
              verify: function (t, e, n, o = M) {
                let s, a, u;
                let { context: h, zip215: l } = o,
                  f = r.BYTES;
                (t = (0, g.ql)("signature", t, 2 * f)),
                  (e = (0, g.ql)("message", e)),
                  void 0 !== l && (0, g.uw)("zip215", l),
                  i && (e = i(e));
                let c = g.ty(t.slice(f, 2 * f));
                try {
                  (s = S.fromHex(n, l)),
                    (a = S.fromHex(t.slice(0, f), l)),
                    (u = I.multiplyUnsafe(c));
                } catch (t) {
                  return !1;
                }
                if (!l && s.isSmallOrder()) return !1;
                let d = T(h, a.toRawBytes(), s.toRawBytes(), e);
                return a
                  .add(s.multiplyUnsafe(d))
                  .subtract(u)
                  .clearCofactor()
                  .equals(S.ZERO);
              },
              ExtendedPoint: S,
              utils: {
                getExtendedPublicKey: C,
                randomPrivateKey: () => s(r.BYTES),
                precompute: (t = 8, e = S.BASE) => (
                  e._setWindowSize(t), e.multiply(BigInt(3)), e
                ),
              },
            }
          );
        })({
          a: BigInt(-1),
          d: BigInt(
            "37095705934669439343138083508754565189542113879843219016388785533085940283555"
          ),
          Fp: O,
          n: BigInt(
            "7237005577332262213973186563042994240857116359379907606001950938285454250989"
          ),
          h: I,
          Gx: BigInt(
            "15112221349535400772501151409588531511454012693041857206046113283949847762202"
          ),
          Gy: BigInt(
            "46316835694926478169428394003475163141307993866256225615783033603165251855960"
          ),
          hash: d,
          randomBytes: a.O6,
          adjustScalarBytes: function (t) {
            return (t[0] &= 248), (t[31] &= 127), (t[31] |= 64), t;
          },
          uvRatio: R,
        });
      function C(t) {
        if (!(t instanceof N)) throw Error("RistrettoPoint expected");
      }
      let T = (t) => R(x, t),
        U = (t) => L.CURVE.Fp.create(null & bytesToNumberLE(t));
      function k(t) {
        let { d: e } = L.CURVE,
          r = L.CURVE.Fp.ORDER,
          n = L.CURVE.Fp.create,
          i = n(null * t * t),
          o = n((i + x) * null),
          s = BigInt(-1),
          a = n((s - e * i) * n(i + e)),
          { isValid: u, value: h } = R(o, a),
          l = n(h * t);
        isNegativeLE(l, r) || (l = n(-l)), u || (h = l), u || (s = i);
        let f = n(s * (i - x) * null - a),
          c = h * h,
          d = n((h + h) * a),
          p = n(null * f),
          m = n(x - c),
          g = n(x + c);
        return new L.ExtendedPoint(n(d * g), n(m * p), n(p * g), n(d * m));
      }
      class N {
        constructor(t) {
          this.ep = t;
        }
        static fromAffine(t) {
          return new N(L.ExtendedPoint.fromAffine(t));
        }
        static hashToCurve(t) {
          let e = k(U((t = ensureBytes("ristrettoHash", t, 64)).slice(0, 32))),
            r = k(U(t.slice(32, 64)));
          return new N(e.add(r));
        }
        static fromHex(t) {
          t = ensureBytes("ristrettoHex", t, 32);
          let { a: e, d: r } = L.CURVE,
            n = L.CURVE.Fp.ORDER,
            i = L.CURVE.Fp.create,
            o =
              "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint",
            s = U(t);
          if (!equalBytes(numberToBytesLE(s, 32), t) || isNegativeLE(s, n))
            throw Error(o);
          let a = i(s * s),
            u = i(x + e * a),
            h = i(x - e * a),
            l = i(u * u),
            f = i(h * h),
            c = i(e * r * l - f),
            { isValid: d, value: p } = T(i(c * f)),
            m = i(p * h),
            g = i(p * m * c),
            y = i((s + s) * m);
          isNegativeLE(y, n) && (y = i(-y));
          let w = i(u * g),
            v = i(y * w);
          if (!d || isNegativeLE(v, n) || w === A) throw Error(o);
          return new N(new L.ExtendedPoint(y, w, x, v));
        }
        toRawBytes() {
          let t,
            { ex: e, ey: r, ez: n, et: i } = this.ep,
            o = L.CURVE.Fp.ORDER,
            s = L.CURVE.Fp.create,
            a = s(s(n + r) * s(n - r)),
            u = s(e * r),
            h = s(u * u),
            { value: l } = T(s(a * h)),
            f = s(l * a),
            c = s(l * u),
            d = s(f * c * i);
          if (isNegativeLE(i * d, o)) {
            let n = s(null * r),
              i = s(null * e);
            (e = n), (r = i), (t = s(null * f));
          } else t = c;
          isNegativeLE(e * d, o) && (r = s(-r));
          let p = s((n - r) * t);
          return isNegativeLE(p, o) && (p = s(-p)), numberToBytesLE(p, 32);
        }
        toHex() {
          return bytesToHex(this.toRawBytes());
        }
        toString() {
          return this.toHex();
        }
        equals(t) {
          C(t);
          let { ex: e, ey: r } = this.ep,
            { ex: n, ey: i } = t.ep,
            o = L.CURVE.Fp.create,
            s = o(e * i) === o(r * n),
            a = o(r * i) === o(e * n);
          return s || a;
        }
        add(t) {
          return C(t), new N(this.ep.add(t.ep));
        }
        subtract(t) {
          return C(t), new N(this.ep.subtract(t.ep));
        }
        multiply(t) {
          return new N(this.ep.multiply(t));
        }
        multiplyUnsafe(t) {
          return new N(this.ep.multiplyUnsafe(t));
        }
        double() {
          return new N(this.ep.double());
        }
        negate() {
          return new N(this.ep.negate());
        }
      }
    },
    7336: function (t, e, r) {
      "use strict";
      r.d(e, {
        kA: function () {
          return R;
        },
      });
      var n = r(7189),
        i = r(1007);
      let o = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        s = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        a = new Uint32Array(64);
      class u extends n.VR {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | s[0]),
            (this.B = 0 | s[1]),
            (this.C = 0 | s[2]),
            (this.D = 0 | s[3]),
            (this.E = 0 | s[4]),
            (this.F = 0 | s[5]),
            (this.G = 0 | s[6]),
            (this.H = 0 | s[7]);
        }
        get() {
          let { A: t, B: e, C: r, D: n, E: i, F: o, G: s, H: a } = this;
          return [t, e, r, n, i, o, s, a];
        }
        set(t, e, r, n, i, o, s, a) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) a[r] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = a[t - 15],
              r = a[t - 2],
              n = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ (e >>> 3),
              o = (0, i.np)(r, 17) ^ (0, i.np)(r, 19) ^ (r >>> 10);
            a[t] = (o + a[t - 7] + n + a[t - 16]) | 0;
          }
          let { A: r, B: s, C: u, D: h, E: l, F: f, G: c, H: d } = this;
          for (let t = 0; t < 64; t++) {
            let e =
                (d +
                  ((0, i.np)(l, 6) ^ (0, i.np)(l, 11) ^ (0, i.np)(l, 25)) +
                  (0, n.bc)(l, f, c) +
                  o[t] +
                  a[t]) |
                0,
              p =
                (((0, i.np)(r, 2) ^ (0, i.np)(r, 13) ^ (0, i.np)(r, 22)) +
                  (0, n.l3)(r, s, u)) |
                0;
            (d = c),
              (c = f),
              (f = l),
              (l = (h + e) | 0),
              (h = u),
              (u = s),
              (s = r),
              (r = (e + p) | 0);
          }
          (r = (r + this.A) | 0),
            (s = (s + this.B) | 0),
            (u = (u + this.C) | 0),
            (h = (h + this.D) | 0),
            (l = (l + this.E) | 0),
            (f = (f + this.F) | 0),
            (c = (c + this.G) | 0),
            (d = (d + this.H) | 0),
            this.set(r, s, u, h, l, f, c, d);
        }
        roundClean() {
          a.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let h = (0, i.hE)(() => new u());
      var l = r(3671);
      class f extends i.kb {
        constructor(t, e) {
          super(), (this.finished = !1), (this.destroyed = !1), (0, l.vp)(t);
          let r = (0, i.O0)(e);
          if (
            ((this.iHash = t.create()), "function" != typeof this.iHash.update)
          )
            throw Error("Expected instance of class which extends utils.Hash");
          (this.blockLen = this.iHash.blockLen),
            (this.outputLen = this.iHash.outputLen);
          let n = this.blockLen,
            o = new Uint8Array(n);
          o.set(r.length > n ? t.create().update(r).digest() : r);
          for (let t = 0; t < o.length; t++) o[t] ^= 54;
          this.iHash.update(o), (this.oHash = t.create());
          for (let t = 0; t < o.length; t++) o[t] ^= 106;
          this.oHash.update(o), o.fill(0);
        }
        update(t) {
          return (0, l.Gg)(this), this.iHash.update(t), this;
        }
        digestInto(t) {
          (0, l.Gg)(this),
            (0, l.aI)(t, this.outputLen),
            (this.finished = !0),
            this.iHash.digestInto(t),
            this.oHash.update(t),
            this.oHash.digestInto(t),
            this.destroy();
        }
        digest() {
          let t = new Uint8Array(this.oHash.outputLen);
          return this.digestInto(t), t;
        }
        _cloneInto(t) {
          t || (t = Object.create(Object.getPrototypeOf(this), {}));
          let {
            oHash: e,
            iHash: r,
            finished: n,
            destroyed: i,
            blockLen: o,
            outputLen: s,
          } = this;
          return (
            (t.finished = n),
            (t.destroyed = i),
            (t.blockLen = o),
            (t.outputLen = s),
            (t.oHash = e._cloneInto(t.oHash)),
            (t.iHash = r._cloneInto(t.iHash)),
            t
          );
        }
        destroy() {
          (this.destroyed = !0), this.oHash.destroy(), this.iHash.destroy();
        }
      }
      let c = (t, e, r) => new f(t, e).update(r).digest();
      c.create = (t, e) => new f(t, e);
      var d = r(5332),
        p = r(3554),
        m = r(1678);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function g(
        t
      ) {
        void 0 !== t.lowS && (0, m.uw)("lowS", t.lowS),
          void 0 !== t.prehash && (0, m.uw)("prehash", t.prehash);
      }
      let { bytesToNumberBE: y, hexToBytes: w } = m,
        v = {
          Err: class extends Error {
            constructor(t = "") {
              super(t);
            }
          },
          _tlv: {
            encode: (t, e) => {
              let { Err: r } = v;
              if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
              if (1 & e.length) throw new r("tlv.encode: unpadded data");
              let n = e.length / 2,
                i = m.uz(n);
              if ((i.length / 2) & 128)
                throw new r("tlv.encode: long form length too big");
              let o = n > 127 ? m.uz((i.length / 2) | 128) : "";
              return `${m.uz(t)}${o}${i}${e}`;
            },
            decode(t, e) {
              let { Err: r } = v,
                n = 0;
              if (t < 0 || t > 256) throw new r("tlv.encode: wrong tag");
              if (e.length < 2 || e[n++] !== t)
                throw new r("tlv.decode: wrong tlv");
              let i = e[n++],
                o = 0;
              if (128 & i) {
                let t = 127 & i;
                if (!t)
                  throw new r(
                    "tlv.decode(long): indefinite length not supported"
                  );
                if (t > 4)
                  throw new r("tlv.decode(long): byte length is too big");
                let s = e.subarray(n, n + t);
                if (s.length !== t)
                  throw new r("tlv.decode: length bytes not complete");
                if (0 === s[0])
                  throw new r("tlv.decode(long): zero leftmost byte");
                for (let t of s) o = (o << 8) | t;
                if (((n += t), o < 128))
                  throw new r("tlv.decode(long): not minimal encoding");
              } else o = i;
              let s = e.subarray(n, n + o);
              if (s.length !== o) throw new r("tlv.decode: wrong value length");
              return { v: s, l: e.subarray(n + o) };
            },
          },
          _int: {
            encode(t) {
              let { Err: e } = v;
              if (t < b)
                throw new e("integer: negative integers are not allowed");
              let r = m.uz(t);
              if (
                (8 & Number.parseInt(r[0], 16) && (r = "00" + r), 1 & r.length)
              )
                throw new e("unexpected assertion");
              return r;
            },
            decode(t) {
              let { Err: e } = v;
              if (128 & t[0])
                throw new e("Invalid signature integer: negative");
              if (0 === t[0] && !(128 & t[1]))
                throw new e(
                  "Invalid signature integer: unnecessary leading zero"
                );
              return y(t);
            },
          },
          toSig(t) {
            let { Err: e, _int: r, _tlv: n } = v,
              i = "string" == typeof t ? w(t) : t;
            m.gk(i);
            let { v: o, l: s } = n.decode(48, i);
            if (s.length)
              throw new e("Invalid signature: left bytes after parsing");
            let { v: a, l: u } = n.decode(2, o),
              { v: h, l: l } = n.decode(2, u);
            if (l.length)
              throw new e("Invalid signature: left bytes after parsing");
            return { r: r.decode(a), s: r.decode(h) };
          },
          hexFromSig(t) {
            let { _tlv: e, _int: r } = v,
              n = `${e.encode(2, r.encode(t.r))}${e.encode(2, r.encode(t.s))}`;
            return e.encode(48, n);
          },
        },
        b = BigInt(0),
        M = BigInt(1),
        E = (BigInt(2), BigInt(3));
      BigInt(4);
      /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ let _ =
          BigInt(
            "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
          ),
        A = BigInt(
          "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
        ),
        x = BigInt(1),
        B = BigInt(2),
        S = (t, e) => (t + e / B) / e,
        I = (0, p.gN)(_, void 0, void 0, {
          sqrt: function (t) {
            let e = BigInt(3),
              r = BigInt(6),
              n = BigInt(11),
              i = BigInt(22),
              o = BigInt(23),
              s = BigInt(44),
              a = BigInt(88),
              u = (t * t * t) % _,
              h = (u * u * t) % _,
              l = ((0, p.oA)(h, e, _) * h) % _,
              f = ((0, p.oA)(l, e, _) * h) % _,
              c = ((0, p.oA)(f, B, _) * u) % _,
              d = ((0, p.oA)(c, n, _) * c) % _,
              m = ((0, p.oA)(d, i, _) * d) % _,
              g = ((0, p.oA)(m, s, _) * m) % _,
              y = ((0, p.oA)(g, a, _) * g) % _,
              w = ((0, p.oA)(y, s, _) * m) % _,
              v = ((0, p.oA)(w, e, _) * h) % _,
              b = ((0, p.oA)(v, o, _) * d) % _,
              M = ((0, p.oA)(b, r, _) * u) % _,
              E = (0, p.oA)(M, B, _);
            if (!I.eql(I.sqr(E), t)) throw Error("Cannot find square root");
            return E;
          },
        }),
        R = (function (t, e) {
          let r = (e) =>
            (function (t) {
              let e = (function (t) {
                  let e = (0, d.Kd)(t);
                  return (
                    m.FF(
                      e,
                      {
                        hash: "hash",
                        hmac: "function",
                        randomBytes: "function",
                      },
                      {
                        bits2int: "function",
                        bits2int_modN: "function",
                        lowS: "boolean",
                      }
                    ),
                    Object.freeze({ lowS: !0, ...e })
                  );
                })(t),
                { Fp: r, n: n } = e,
                i = r.BYTES + 1,
                o = 2 * r.BYTES + 1;
              function s(t) {
                return p.wQ(t, n);
              }
              function a(t) {
                return p.U_(t, n);
              }
              let {
                  ProjectivePoint: u,
                  normPrivateKeyToScalar: h,
                  weierstrassEquation: l,
                  isWithinCurveOrder: f,
                } = (function (t) {
                  let e = (function (t) {
                      let e = (0, d.Kd)(t);
                      m.FF(
                        e,
                        { a: "field", b: "field" },
                        {
                          allowedPrivateKeyLengths: "array",
                          wrapPrivateKey: "boolean",
                          isTorsionFree: "function",
                          clearCofactor: "function",
                          allowInfinityPoint: "boolean",
                          fromBytes: "function",
                          toBytes: "function",
                        }
                      );
                      let { endo: r, Fp: n, a: i } = e;
                      if (r) {
                        if (!n.eql(i, n.ZERO))
                          throw Error(
                            "Endomorphism can only be defined for Koblitz curves that have a=0"
                          );
                        if (
                          "object" != typeof r ||
                          "bigint" != typeof r.beta ||
                          "function" != typeof r.splitScalar
                        )
                          throw Error(
                            "Expected endomorphism with beta: bigint and splitScalar: function"
                          );
                      }
                      return Object.freeze({ ...e });
                    })(t),
                    { Fp: r } = e,
                    n = p.gN(e.n, e.nBitLength),
                    i =
                      e.toBytes ||
                      ((t, e, n) => {
                        let i = e.toAffine();
                        return m.eV(
                          Uint8Array.from([4]),
                          r.toBytes(i.x),
                          r.toBytes(i.y)
                        );
                      }),
                    o =
                      e.fromBytes ||
                      ((t) => {
                        let e = t.subarray(1);
                        return {
                          x: r.fromBytes(e.subarray(0, r.BYTES)),
                          y: r.fromBytes(e.subarray(r.BYTES, 2 * r.BYTES)),
                        };
                      });
                  function s(t) {
                    let { a: n, b: i } = e,
                      o = r.sqr(t),
                      s = r.mul(o, t);
                    return r.add(r.add(s, r.mul(t, n)), i);
                  }
                  if (!r.eql(r.sqr(e.Gy), s(e.Gx)))
                    throw Error("bad generator point: equation left != right");
                  function a(t) {
                    let r;
                    let {
                      allowedPrivateKeyLengths: n,
                      nByteLength: i,
                      wrapPrivateKey: o,
                      n: s,
                    } = e;
                    if (n && "bigint" != typeof t) {
                      if (
                        (m._t(t) && (t = m.ci(t)),
                        "string" != typeof t || !n.includes(t.length))
                      )
                        throw Error("Invalid key");
                      t = t.padStart(2 * i, "0");
                    }
                    try {
                      r =
                        "bigint" == typeof t
                          ? t
                          : m.bytesToNumberBE((0, m.ql)("private key", t, i));
                    } catch (e) {
                      throw Error(
                        `private key must be ${i} bytes, hex or bigint, not ${typeof t}`
                      );
                    }
                    return (
                      o && (r = p.wQ(r, s)), m.Fy("private key", r, M, s), r
                    );
                  }
                  function u(t) {
                    if (!(t instanceof f))
                      throw Error("ProjectivePoint expected");
                  }
                  let h = (0, m.H9)((t, e) => {
                      let { px: n, py: i, pz: o } = t;
                      if (r.eql(o, r.ONE)) return { x: n, y: i };
                      let s = t.is0();
                      null == e && (e = s ? r.ONE : r.inv(o));
                      let a = r.mul(n, e),
                        u = r.mul(i, e),
                        h = r.mul(o, e);
                      if (s) return { x: r.ZERO, y: r.ZERO };
                      if (!r.eql(h, r.ONE)) throw Error("invZ was invalid");
                      return { x: a, y: u };
                    }),
                    l = (0, m.H9)((t) => {
                      if (t.is0()) {
                        if (e.allowInfinityPoint && !r.is0(t.py)) return;
                        throw Error("bad point: ZERO");
                      }
                      let { x: n, y: i } = t.toAffine();
                      if (!r.isValid(n) || !r.isValid(i))
                        throw Error("bad point: x or y not FE");
                      let o = r.sqr(i),
                        a = s(n);
                      if (!r.eql(o, a))
                        throw Error("bad point: equation left != right");
                      if (!t.isTorsionFree())
                        throw Error("bad point: not in prime-order subgroup");
                      return !0;
                    });
                  class f {
                    constructor(t, e, n) {
                      if (
                        ((this.px = t),
                        (this.py = e),
                        (this.pz = n),
                        null == t || !r.isValid(t))
                      )
                        throw Error("x required");
                      if (null == e || !r.isValid(e)) throw Error("y required");
                      if (null == n || !r.isValid(n)) throw Error("z required");
                      Object.freeze(this);
                    }
                    static fromAffine(t) {
                      let { x: e, y: n } = t || {};
                      if (!t || !r.isValid(e) || !r.isValid(n))
                        throw Error("invalid affine point");
                      if (t instanceof f)
                        throw Error("projective point not allowed");
                      let i = (t) => r.eql(t, r.ZERO);
                      return i(e) && i(n) ? f.ZERO : new f(e, n, r.ONE);
                    }
                    get x() {
                      return this.toAffine().x;
                    }
                    get y() {
                      return this.toAffine().y;
                    }
                    static normalizeZ(t) {
                      let e = r.invertBatch(t.map((t) => t.pz));
                      return t
                        .map((t, r) => t.toAffine(e[r]))
                        .map(f.fromAffine);
                    }
                    static fromHex(t) {
                      let e = f.fromAffine(o((0, m.ql)("pointHex", t)));
                      return e.assertValidity(), e;
                    }
                    static fromPrivateKey(t) {
                      return f.BASE.multiply(a(t));
                    }
                    static msm(t, e) {
                      return (0, d.D1)(f, n, t, e);
                    }
                    _setWindowSize(t) {
                      g.setWindowSize(this, t);
                    }
                    assertValidity() {
                      l(this);
                    }
                    hasEvenY() {
                      let { y: t } = this.toAffine();
                      if (r.isOdd) return !r.isOdd(t);
                      throw Error("Field doesn't support isOdd");
                    }
                    equals(t) {
                      u(t);
                      let { px: e, py: n, pz: i } = this,
                        { px: o, py: s, pz: a } = t,
                        h = r.eql(r.mul(e, a), r.mul(o, i)),
                        l = r.eql(r.mul(n, a), r.mul(s, i));
                      return h && l;
                    }
                    negate() {
                      return new f(this.px, r.neg(this.py), this.pz);
                    }
                    double() {
                      let { a: t, b: n } = e,
                        i = r.mul(n, E),
                        { px: o, py: s, pz: a } = this,
                        u = r.ZERO,
                        h = r.ZERO,
                        l = r.ZERO,
                        c = r.mul(o, o),
                        d = r.mul(s, s),
                        p = r.mul(a, a),
                        m = r.mul(o, s);
                      return (
                        (m = r.add(m, m)),
                        (l = r.mul(o, a)),
                        (l = r.add(l, l)),
                        (u = r.mul(t, l)),
                        (h = r.mul(i, p)),
                        (h = r.add(u, h)),
                        (u = r.sub(d, h)),
                        (h = r.add(d, h)),
                        (h = r.mul(u, h)),
                        (u = r.mul(m, u)),
                        (l = r.mul(i, l)),
                        (p = r.mul(t, p)),
                        (m = r.sub(c, p)),
                        (m = r.mul(t, m)),
                        (m = r.add(m, l)),
                        (l = r.add(c, c)),
                        (c = r.add(l, c)),
                        (c = r.add(c, p)),
                        (c = r.mul(c, m)),
                        (h = r.add(h, c)),
                        (p = r.mul(s, a)),
                        (p = r.add(p, p)),
                        (c = r.mul(p, m)),
                        (u = r.sub(u, c)),
                        (l = r.mul(p, d)),
                        (l = r.add(l, l)),
                        new f(u, h, (l = r.add(l, l)))
                      );
                    }
                    add(t) {
                      u(t);
                      let { px: n, py: i, pz: o } = this,
                        { px: s, py: a, pz: h } = t,
                        l = r.ZERO,
                        c = r.ZERO,
                        d = r.ZERO,
                        p = e.a,
                        m = r.mul(e.b, E),
                        g = r.mul(n, s),
                        y = r.mul(i, a),
                        w = r.mul(o, h),
                        v = r.add(n, i),
                        b = r.add(s, a);
                      (v = r.mul(v, b)),
                        (b = r.add(g, y)),
                        (v = r.sub(v, b)),
                        (b = r.add(n, o));
                      let M = r.add(s, h);
                      return (
                        (b = r.mul(b, M)),
                        (M = r.add(g, w)),
                        (b = r.sub(b, M)),
                        (M = r.add(i, o)),
                        (l = r.add(a, h)),
                        (M = r.mul(M, l)),
                        (l = r.add(y, w)),
                        (M = r.sub(M, l)),
                        (d = r.mul(p, b)),
                        (l = r.mul(m, w)),
                        (d = r.add(l, d)),
                        (l = r.sub(y, d)),
                        (d = r.add(y, d)),
                        (c = r.mul(l, d)),
                        (y = r.add(g, g)),
                        (y = r.add(y, g)),
                        (w = r.mul(p, w)),
                        (b = r.mul(m, b)),
                        (y = r.add(y, w)),
                        (w = r.sub(g, w)),
                        (w = r.mul(p, w)),
                        (b = r.add(b, w)),
                        (g = r.mul(y, b)),
                        (c = r.add(c, g)),
                        (g = r.mul(M, b)),
                        (l = r.mul(v, l)),
                        (l = r.sub(l, g)),
                        (g = r.mul(v, y)),
                        (d = r.mul(M, d)),
                        new f(l, c, (d = r.add(d, g)))
                      );
                    }
                    subtract(t) {
                      return this.add(t.negate());
                    }
                    is0() {
                      return this.equals(f.ZERO);
                    }
                    wNAF(t) {
                      return g.wNAFCached(this, t, f.normalizeZ);
                    }
                    multiplyUnsafe(t) {
                      m.Fy("scalar", t, b, e.n);
                      let n = f.ZERO;
                      if (t === b) return n;
                      if (t === M) return this;
                      let { endo: i } = e;
                      if (!i) return g.unsafeLadder(this, t);
                      let {
                          k1neg: o,
                          k1: s,
                          k2neg: a,
                          k2: u,
                        } = i.splitScalar(t),
                        h = n,
                        l = n,
                        c = this;
                      for (; s > b || u > b; )
                        s & M && (h = h.add(c)),
                          u & M && (l = l.add(c)),
                          (c = c.double()),
                          (s >>= M),
                          (u >>= M);
                      return (
                        o && (h = h.negate()),
                        a && (l = l.negate()),
                        (l = new f(r.mul(l.px, i.beta), l.py, l.pz)),
                        h.add(l)
                      );
                    }
                    multiply(t) {
                      let n, i;
                      let { endo: o, n: s } = e;
                      if ((m.Fy("scalar", t, M, s), o)) {
                        let {
                            k1neg: e,
                            k1: s,
                            k2neg: a,
                            k2: u,
                          } = o.splitScalar(t),
                          { p: h, f: l } = this.wNAF(s),
                          { p: c, f: d } = this.wNAF(u);
                        (h = g.constTimeNegate(e, h)),
                          (c = g.constTimeNegate(a, c)),
                          (c = new f(r.mul(c.px, o.beta), c.py, c.pz)),
                          (n = h.add(c)),
                          (i = l.add(d));
                      } else {
                        let { p: e, f: r } = this.wNAF(t);
                        (n = e), (i = r);
                      }
                      return f.normalizeZ([n, i])[0];
                    }
                    multiplyAndAddUnsafe(t, e, r) {
                      let n = f.BASE,
                        i = (t, e) =>
                          e !== b && e !== M && t.equals(n)
                            ? t.multiply(e)
                            : t.multiplyUnsafe(e),
                        o = i(this, e).add(i(t, r));
                      return o.is0() ? void 0 : o;
                    }
                    toAffine(t) {
                      return h(this, t);
                    }
                    isTorsionFree() {
                      let { h: t, isTorsionFree: r } = e;
                      if (t === M) return !0;
                      if (r) return r(f, this);
                      throw Error(
                        "isTorsionFree() has not been declared for the elliptic curve"
                      );
                    }
                    clearCofactor() {
                      let { h: t, clearCofactor: r } = e;
                      return t === M
                        ? this
                        : r
                        ? r(f, this)
                        : this.multiplyUnsafe(e.h);
                    }
                    toRawBytes(t = !0) {
                      return (
                        (0, m.uw)("isCompressed", t),
                        this.assertValidity(),
                        i(f, this, t)
                      );
                    }
                    toHex(t = !0) {
                      return (
                        (0, m.uw)("isCompressed", t), m.ci(this.toRawBytes(t))
                      );
                    }
                  }
                  (f.BASE = new f(e.Gx, e.Gy, r.ONE)),
                    (f.ZERO = new f(r.ZERO, r.ONE, r.ZERO));
                  let c = e.nBitLength,
                    g = (0, d.Mx)(f, e.endo ? Math.ceil(c / 2) : c);
                  return {
                    CURVE: e,
                    ProjectivePoint: f,
                    normPrivateKeyToScalar: a,
                    weierstrassEquation: s,
                    isWithinCurveOrder: function (t) {
                      return m.Z2(t, M, e.n);
                    },
                  };
                })({
                  ...e,
                  toBytes(t, e, n) {
                    let i = e.toAffine(),
                      o = r.toBytes(i.x),
                      s = m.eV;
                    return ((0, m.uw)("isCompressed", n), n)
                      ? s(Uint8Array.from([e.hasEvenY() ? 2 : 3]), o)
                      : s(Uint8Array.from([4]), o, r.toBytes(i.y));
                  },
                  fromBytes(t) {
                    let e = t.length,
                      n = t[0],
                      s = t.subarray(1);
                    if (e === i && (2 === n || 3 === n)) {
                      let t;
                      let e = m.bytesToNumberBE(s);
                      if (!m.Z2(e, M, r.ORDER))
                        throw Error("Point is not on curve");
                      let i = l(e);
                      try {
                        t = r.sqrt(i);
                      } catch (t) {
                        throw Error(
                          "Point is not on curve" +
                            (t instanceof Error ? ": " + t.message : "")
                        );
                      }
                      return (
                        ((1 & n) == 1) != ((t & M) === M) && (t = r.neg(t)),
                        { x: e, y: t }
                      );
                    }
                    if (e === o && 4 === n)
                      return {
                        x: r.fromBytes(s.subarray(0, r.BYTES)),
                        y: r.fromBytes(s.subarray(r.BYTES, 2 * r.BYTES)),
                      };
                    throw Error(
                      `Point of length ${e} was invalid. Expected ${i} compressed bytes or ${o} uncompressed bytes`
                    );
                  },
                }),
                c = (t) => m.ci(m.tL(t, e.nByteLength)),
                y = (t, e, r) => m.bytesToNumberBE(t.slice(e, r));
              class w {
                constructor(t, e, r) {
                  (this.r = t),
                    (this.s = e),
                    (this.recovery = r),
                    this.assertValidity();
                }
                static fromCompact(t) {
                  let r = e.nByteLength;
                  return new w(
                    y((t = (0, m.ql)("compactSignature", t, 2 * r)), 0, r),
                    y(t, r, 2 * r)
                  );
                }
                static fromDER(t) {
                  let { r: e, s: r } = v.toSig((0, m.ql)("DER", t));
                  return new w(e, r);
                }
                assertValidity() {
                  m.Fy("r", this.r, M, n), m.Fy("s", this.s, M, n);
                }
                addRecoveryBit(t) {
                  return new w(this.r, this.s, t);
                }
                recoverPublicKey(t) {
                  let { r: n, s: i, recovery: o } = this,
                    h = x((0, m.ql)("msgHash", t));
                  if (null == o || ![0, 1, 2, 3].includes(o))
                    throw Error("recovery id invalid");
                  let l = 2 === o || 3 === o ? n + e.n : n;
                  if (l >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                  let f = (1 & o) == 0 ? "02" : "03",
                    d = u.fromHex(f + c(l)),
                    p = a(l),
                    g = s(-h * p),
                    y = s(i * p),
                    w = u.BASE.multiplyAndAddUnsafe(d, g, y);
                  if (!w) throw Error("point at infinify");
                  return w.assertValidity(), w;
                }
                hasHighS() {
                  return this.s > n >> M;
                }
                normalizeS() {
                  return this.hasHighS()
                    ? new w(this.r, s(-this.s), this.recovery)
                    : this;
                }
                toDERRawBytes() {
                  return m.hexToBytes(this.toDERHex());
                }
                toDERHex() {
                  return v.hexFromSig({ r: this.r, s: this.s });
                }
                toCompactRawBytes() {
                  return m.hexToBytes(this.toCompactHex());
                }
                toCompactHex() {
                  return c(this.r) + c(this.s);
                }
              }
              function _(t) {
                let e = m._t(t),
                  r = "string" == typeof t,
                  n = (e || r) && t.length;
                return e
                  ? n === i || n === o
                  : r
                  ? n === 2 * i || n === 2 * o
                  : t instanceof u;
              }
              let A =
                  e.bits2int ||
                  function (t) {
                    let r = m.bytesToNumberBE(t),
                      n = 8 * t.length - e.nBitLength;
                    return n > 0 ? r >> BigInt(n) : r;
                  },
                x =
                  e.bits2int_modN ||
                  function (t) {
                    return s(A(t));
                  },
                B = m.dQ(e.nBitLength);
              function S(t) {
                return (
                  m.Fy(`num < 2^${e.nBitLength}`, t, b, B),
                  m.tL(t, e.nByteLength)
                );
              }
              let I = { lowS: e.lowS, prehash: !1 },
                R = { lowS: e.lowS, prehash: !1 };
              return (
                u.BASE._setWindowSize(8),
                {
                  CURVE: e,
                  getPublicKey: function (t, e = !0) {
                    return u.fromPrivateKey(t).toRawBytes(e);
                  },
                  getSharedSecret: function (t, e, r = !0) {
                    if (_(t)) throw Error("first arg must be private key");
                    if (!_(e)) throw Error("second arg must be public key");
                    return u.fromHex(e).multiply(h(t)).toRawBytes(r);
                  },
                  sign: function (t, i, o = I) {
                    let { seed: l, k2sig: c } = (function (t, i, o = I) {
                      if (["recovered", "canonical"].some((t) => t in o))
                        throw Error("sign() legacy options not supported");
                      let { hash: l, randomBytes: c } = e,
                        { lowS: d, prehash: p, extraEntropy: y } = o;
                      null == d && (d = !0),
                        (t = (0, m.ql)("msgHash", t)),
                        g(o),
                        p && (t = (0, m.ql)("prehashed msgHash", l(t)));
                      let v = x(t),
                        E = h(i),
                        _ = [S(E), S(v)];
                      if (null != y && !1 !== y) {
                        let t = !0 === y ? c(r.BYTES) : y;
                        _.push((0, m.ql)("extraEntropy", t));
                      }
                      return {
                        seed: m.eV(..._),
                        k2sig: function (t) {
                          let e = A(t);
                          if (!f(e)) return;
                          let r = a(e),
                            i = u.BASE.multiply(e).toAffine(),
                            o = s(i.x);
                          if (o === b) return;
                          let h = s(r * s(v + o * E));
                          if (h === b) return;
                          let l = (i.x === o ? 0 : 2) | Number(i.y & M),
                            c = h;
                          if (d && h > n >> M)
                            (c = h > n >> M ? s(-h) : h), (l ^= 1);
                          return new w(o, c, l);
                        },
                      };
                    })(t, i, o);
                    return m.n$(e.hash.outputLen, e.nByteLength, e.hmac)(l, c);
                  },
                  verify: function (t, r, n, i = R) {
                    let o, h;
                    if (
                      ((r = (0, m.ql)("msgHash", r)),
                      (n = (0, m.ql)("publicKey", n)),
                      "strict" in i)
                    )
                      throw Error("options.strict was renamed to lowS");
                    g(i);
                    let { lowS: l, prehash: f } = i;
                    try {
                      if ("string" == typeof t || m._t(t))
                        try {
                          h = w.fromDER(t);
                        } catch (e) {
                          if (!(e instanceof v.Err)) throw e;
                          h = w.fromCompact(t);
                        }
                      else if (
                        "object" == typeof t &&
                        "bigint" == typeof t.r &&
                        "bigint" == typeof t.s
                      ) {
                        let { r: e, s: r } = t;
                        h = new w(e, r);
                      } else throw Error("PARSE");
                      o = u.fromHex(n);
                    } catch (t) {
                      if ("PARSE" === t.message)
                        throw Error(
                          "signature must be Signature instance, Uint8Array or hex string"
                        );
                      return !1;
                    }
                    if (l && h.hasHighS()) return !1;
                    f && (r = e.hash(r));
                    let { r: c, s: d } = h,
                      p = x(r),
                      y = a(d),
                      b = s(p * y),
                      M = s(c * y),
                      E = u.BASE.multiplyAndAddUnsafe(o, b, M)?.toAffine();
                    return !!E && s(E.x) === c;
                  },
                  ProjectivePoint: u,
                  Signature: w,
                  utils: {
                    isValidPrivateKey(t) {
                      try {
                        return h(t), !0;
                      } catch (t) {
                        return !1;
                      }
                    },
                    normPrivateKeyToScalar: h,
                    randomPrivateKey: () => {
                      let t = p.PS(e.n);
                      return p.Us(e.randomBytes(t), e.n);
                    },
                    precompute: (t = 8, e = u.BASE) => (
                      e._setWindowSize(t), e.multiply(BigInt(3)), e
                    ),
                  },
                }
              );
            })({
              ...t,
              hash: e,
              hmac: (t, ...r) => c(e, t, (0, i.eV)(...r)),
              randomBytes: i.O6,
            });
          return Object.freeze({ ...r(e), create: r });
        })(
          {
            a: BigInt(0),
            b: BigInt(7),
            Fp: I,
            n: A,
            Gx: BigInt(
              "55066263022277343669578718895168534326250603453777594175500187360389116729240"
            ),
            Gy: BigInt(
              "32670510020758816978083085130507043184471273380659243275938904335757337482424"
            ),
            h: BigInt(1),
            lowS: !0,
            endo: {
              beta: BigInt(
                "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
              ),
              splitScalar: (t) => {
                let e = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                  r = -x * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                  n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                  i = BigInt("0x100000000000000000000000000000000"),
                  o = S(e * t, A),
                  s = S(-r * t, A),
                  a = (0, p.wQ)(t - o * e - s * n, A),
                  u = (0, p.wQ)(-o * r - s * e, A),
                  h = a > i,
                  l = u > i;
                if ((h && (a = A - a), l && (u = A - u), a > i || u > i))
                  throw Error("splitScalar: Endomorphism failed, k=" + t);
                return { k1neg: h, k1: a, k2neg: l, k2: u };
              },
            },
          },
          h
        );
      BigInt(0), R.ProjectivePoint;
    },
    3671: function (t, e, r) {
      "use strict";
      function n(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error(`positive integer expected, not ${t}`);
      }
      function i(t, ...e) {
        if (
          !(
            t instanceof Uint8Array ||
            (null != t &&
              "object" == typeof t &&
              "Uint8Array" === t.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (e.length > 0 && !e.includes(t.length))
          throw Error(
            `Uint8Array expected of length ${e}, not of length=${t.length}`
          );
      }
      function o(t) {
        if ("function" != typeof t || "function" != typeof t.create)
          throw Error("Hash should be wrapped by utils.wrapConstructor");
        n(t.outputLen), n(t.blockLen);
      }
      function s(t, e = !0) {
        if (t.destroyed) throw Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw Error("Hash#digest() has already been called");
      }
      function a(t, e) {
        i(t);
        let r = e.outputLen;
        if (t.length < r)
          throw Error(
            `digestInto() expects output buffer of length at least ${r}`
          );
      }
      r.d(e, {
        Gg: function () {
          return s;
        },
        J8: function () {
          return a;
        },
        aI: function () {
          return i;
        },
        vp: function () {
          return o;
        },
      });
    },
    7189: function (t, e, r) {
      "use strict";
      r.d(e, {
        VR: function () {
          return a;
        },
        bc: function () {
          return o;
        },
        l3: function () {
          return s;
        },
      });
      var n = r(3671),
        i = r(1007);
      let o = (t, e, r) => (t & e) ^ (~t & r),
        s = (t, e, r) => (t & e) ^ (t & r) ^ (e & r);
      class a extends i.kb {
        constructor(t, e, r, n) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.GL)(this.buffer));
        }
        update(t) {
          (0, n.Gg)(this);
          let { view: e, buffer: r, blockLen: o } = this,
            s = (t = (0, i.O0)(t)).length;
          for (let n = 0; n < s; ) {
            let a = Math.min(o - this.pos, s - n);
            if (a === o) {
              let e = (0, i.GL)(t);
              for (; o <= s - n; n += o) this.process(e, n);
              continue;
            }
            r.set(t.subarray(n, n + a), this.pos),
              (this.pos += a),
              (n += a),
              this.pos === o && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, n.Gg)(this), (0, n.J8)(t, this), (this.finished = !0);
          let { buffer: e, view: r, blockLen: o, isLE: s } = this,
            { pos: a } = this;
          (e[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > o - a && (this.process(r, 0), (a = 0));
          for (let t = a; t < o; t++) e[t] = 0;
          !(function (t, e, r, n) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, r, n);
            let i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((r >> i) & o),
              a = Number(r & o),
              u = n ? 4 : 0,
              h = n ? 0 : 4;
            t.setUint32(e + u, s, n), t.setUint32(e + h, a, n);
          })(r, o - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let u = (0, i.GL)(t),
            h = this.outputLen;
          if (h % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let l = h / 4,
            f = this.get();
          if (l > f.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < l; t++) u.setUint32(4 * t, f[t], s);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let r = t.slice(0, e);
          return this.destroy(), r;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: r,
            length: n,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (t.length = n),
            (t.pos = s),
            (t.finished = i),
            (t.destroyed = o),
            n % e && t.buffer.set(r),
            t
          );
        }
      }
    },
    1007: function (t, e, r) {
      "use strict";
      r.d(e, {
        kb: function () {
          return h;
        },
        eV: function () {
          return u;
        },
        GL: function () {
          return o;
        },
        O6: function () {
          return f;
        },
        np: function () {
          return s;
        },
        O0: function () {
          return a;
        },
        hE: function () {
          return l;
        },
      });
      let n =
        "object" == typeof globalThis && "crypto" in globalThis
          ? globalThis.crypto
          : void 0;
      var i = r(3671);
      let o = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        s = (t, e) => (t << (32 - e)) | (t >>> e);
      function a(t) {
        return (
          "string" == typeof t &&
            (t = (function (t) {
              if ("string" != typeof t)
                throw Error(`utf8ToBytes expected string, got ${typeof t}`);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          (0, i.aI)(t),
          t
        );
      }
      function u(...t) {
        let e = 0;
        for (let r = 0; r < t.length; r++) {
          let n = t[r];
          (0, i.aI)(n), (e += n.length);
        }
        let r = new Uint8Array(e);
        for (let e = 0, n = 0; e < t.length; e++) {
          let i = t[e];
          r.set(i, n), (n += i.length);
        }
        return r;
      }
      new Uint8Array(new Uint32Array([287454020]).buffer)[0];
      class h {
        clone() {
          return this._cloneInto();
        }
      }
      function l(t) {
        let e = (e) => t().update(a(e)).digest(),
          r = t();
        return (
          (e.outputLen = r.outputLen),
          (e.blockLen = r.blockLen),
          (e.create = () => t()),
          e
        );
      }
      function f(t = 32) {
        if (n && "function" == typeof n.getRandomValues)
          return n.getRandomValues(new Uint8Array(t));
        if (n && "function" == typeof n.randomBytes) return n.randomBytes(t);
        throw Error("crypto.getRandomValues must be defined");
      }
    },
    277: function (t, e, r) {
      "use strict";
      r.d(e, {
        i1: function () {
          return i;
        },
        mI: function () {
          return a;
        },
      });
      var n,
        i,
        o = r(7836),
        s = r(9860);
      ((n = i || (i = {})).Installed = "Installed"),
        (n.NotDetected = "NotDetected"),
        (n.Loadable = "Loadable"),
        (n.Unsupported = "Unsupported");
      class a extends o {
        get connected() {
          return !!this.publicKey;
        }
        async autoConnect() {
          await this.connect();
        }
        async prepareTransaction(t, e, r = {}) {
          let n = this.publicKey;
          if (!n) throw new s.oS();
          return (
            (t.feePayer = t.feePayer || n),
            (t.recentBlockhash =
              t.recentBlockhash ||
              (
                await e.getLatestBlockhash({
                  commitment: r.preflightCommitment,
                  minContextSlot: r.minContextSlot,
                })
              ).blockhash),
            t
          );
        }
      }
    },
    9860: function (t, e, r) {
      "use strict";
      r.d(e, {
        $w: function () {
          return s;
        },
        IW: function () {
          return c;
        },
        Nx: function () {
          return l;
        },
        OZ: function () {
          return i;
        },
        PY: function () {
          return d;
        },
        UG: function () {
          return u;
        },
        at: function () {
          return a;
        },
        bD: function () {
          return m;
        },
        cO: function () {
          return h;
        },
        fk: function () {
          return p;
        },
        lj: function () {
          return n;
        },
        oS: function () {
          return f;
        },
        p6: function () {
          return o;
        },
      });
      class n extends Error {
        constructor(t, e) {
          super(t), (this.error = e);
        }
      }
      class i extends n {
        constructor() {
          super(...arguments), (this.name = "WalletNotReadyError");
        }
      }
      class o extends n {
        constructor() {
          super(...arguments), (this.name = "WalletConfigError");
        }
      }
      class s extends n {
        constructor() {
          super(...arguments), (this.name = "WalletConnectionError");
        }
      }
      class a extends n {
        constructor() {
          super(...arguments), (this.name = "WalletDisconnectedError");
        }
      }
      class u extends n {
        constructor() {
          super(...arguments), (this.name = "WalletDisconnectionError");
        }
      }
      class h extends n {
        constructor() {
          super(...arguments), (this.name = "WalletAccountError");
        }
      }
      class l extends n {
        constructor() {
          super(...arguments), (this.name = "WalletPublicKeyError");
        }
      }
      class f extends n {
        constructor() {
          super(...arguments), (this.name = "WalletNotConnectedError");
        }
      }
      class c extends n {
        constructor() {
          super(...arguments), (this.name = "WalletSendTransactionError");
        }
      }
      class d extends n {
        constructor() {
          super(...arguments), (this.name = "WalletSignTransactionError");
        }
      }
      class p extends n {
        constructor() {
          super(...arguments), (this.name = "WalletSignMessageError");
        }
      }
      class m extends n {
        constructor() {
          super(...arguments), (this.name = "WalletSignInError");
        }
      }
    },
    5442: function (t, e, r) {
      "use strict";
      var n, i;
      r.d(e, {
        Q: function () {
          return n;
        },
      }),
        ((i = n || (n = {})).Mainnet = "mainnet-beta"),
        (i.Testnet = "testnet"),
        (i.Devnet = "devnet");
    },
    1156: function (t, e, r) {
      "use strict";
      r.d(e, {
        s: function () {
          return g;
        },
      });
      var n = r(2265);
      let i = {
        setVisible(t) {
          console.error(o("call", "setVisible"));
        },
        visible: !1,
      };
      function o(t, e) {
        return `You have tried to  ${t} "${e}" on a WalletModalContext without providing one. Make sure to render a WalletModalProvider as an ancestor of the component that uses WalletModalContext`;
      }
      Object.defineProperty(i, "visible", {
        get: () => (console.error(o("read", "visible")), !1),
      });
      let s = (0, n.createContext)(i);
      var a = r(277),
        u = r(8782),
        h = r(4887);
      let l = ({ id: t, children: e, expanded: r = !1 }) => {
          let i = (0, n.useRef)(null),
            o = (0, n.useRef)(!0),
            s = () => {
              let t = i.current;
              t &&
                requestAnimationFrame(() => {
                  t.style.height = t.scrollHeight + "px";
                });
            },
            a = () => {
              let t = i.current;
              t &&
                requestAnimationFrame(() => {
                  (t.style.height = t.offsetHeight + "px"),
                    (t.style.overflow = "hidden"),
                    requestAnimationFrame(() => {
                      t.style.height = "0";
                    });
                });
            };
          return (
            (0, n.useLayoutEffect)(() => {
              r ? s() : a();
            }, [r]),
            (0, n.useLayoutEffect)(() => {
              let t = i.current;
              if (t)
                return (
                  o.current && (e(), (o.current = !1)),
                  t.addEventListener("transitionend", n),
                  () => t.removeEventListener("transitionend", n)
                );
              function e() {
                t &&
                  ((t.style.overflow = r ? "initial" : "hidden"),
                  r && (t.style.height = "auto"));
              }
              function n(r) {
                t && r.target === t && "height" === r.propertyName && e();
              }
            }, [r]),
            n.createElement(
              "div",
              {
                className: "wallet-adapter-collapse",
                id: t,
                ref: i,
                role: "region",
                style: {
                  height: 0,
                  transition: o.current ? void 0 : "height 250ms ease-out",
                },
              },
              e
            )
          );
        },
        f = (t) =>
          n.createElement(
            "button",
            {
              className: `wallet-adapter-button ${t.className || ""}`,
              disabled: t.disabled,
              style: t.style,
              onClick: t.onClick,
              tabIndex: t.tabIndex || 0,
              type: "button",
            },
            t.startIcon &&
              n.createElement(
                "i",
                { className: "wallet-adapter-button-start-icon" },
                t.startIcon
              ),
            t.children,
            t.endIcon &&
              n.createElement(
                "i",
                { className: "wallet-adapter-button-end-icon" },
                t.endIcon
              )
          ),
        c = ({ wallet: t, ...e }) =>
          t &&
          n.createElement("img", {
            src: t.adapter.icon,
            alt: `${t.adapter.name} icon`,
            ...e,
          }),
        d = ({ handleClick: t, tabIndex: e, wallet: r }) =>
          n.createElement(
            "li",
            null,
            n.createElement(
              f,
              {
                onClick: t,
                startIcon: n.createElement(c, { wallet: r }),
                tabIndex: e,
              },
              r.adapter.name,
              r.readyState === a.i1.Installed &&
                n.createElement("span", null, "Detected")
            )
          ),
        p = () =>
          n.createElement(
            "svg",
            {
              width: "97",
              height: "96",
              viewBox: "0 0 97 96",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            n.createElement("circle", {
              cx: "48.5",
              cy: "48",
              r: "48",
              fill: "url(#paint0_linear_880_5115)",
              fillOpacity: "0.1",
            }),
            n.createElement("circle", {
              cx: "48.5",
              cy: "48",
              r: "47",
              stroke: "url(#paint1_linear_880_5115)",
              strokeOpacity: "0.4",
              strokeWidth: "2",
            }),
            n.createElement(
              "g",
              { clipPath: "url(#clip0_880_5115)" },
              n.createElement("path", {
                d: "M65.5769 28.1523H31.4231C27.6057 28.1523 24.5 31.258 24.5 35.0754V60.9215C24.5 64.7389 27.6057 67.8446 31.4231 67.8446H65.5769C69.3943 67.8446 72.5 64.7389 72.5 60.9215V35.0754C72.5 31.258 69.3943 28.1523 65.5769 28.1523ZM69.7308 52.1523H59.5769C57.2865 52.1523 55.4231 50.289 55.4231 47.9985C55.4231 45.708 57.2864 43.8446 59.5769 43.8446H69.7308V52.1523ZM69.7308 41.0754H59.5769C55.7595 41.0754 52.6539 44.1811 52.6539 47.9985C52.6539 51.8159 55.7595 54.9215 59.5769 54.9215H69.7308V60.9215C69.7308 63.2119 67.8674 65.0754 65.5769 65.0754H31.4231C29.1327 65.0754 27.2692 63.212 27.2692 60.9215V35.0754C27.2692 32.785 29.1326 30.9215 31.4231 30.9215H65.5769C67.8673 30.9215 69.7308 32.7849 69.7308 35.0754V41.0754Z",
                fill: "url(#paint2_linear_880_5115)",
              }),
              n.createElement("path", {
                d: "M61.4231 46.6172H59.577C58.8123 46.6172 58.1924 47.2371 58.1924 48.0018C58.1924 48.7665 58.8123 49.3863 59.577 49.3863H61.4231C62.1878 49.3863 62.8077 48.7664 62.8077 48.0018C62.8077 47.2371 62.1878 46.6172 61.4231 46.6172Z",
                fill: "url(#paint3_linear_880_5115)",
              })
            ),
            n.createElement(
              "defs",
              null,
              n.createElement(
                "linearGradient",
                {
                  id: "paint0_linear_880_5115",
                  x1: "3.41664",
                  y1: "98.0933",
                  x2: "103.05",
                  y2: "8.42498",
                  gradientUnits: "userSpaceOnUse",
                },
                n.createElement("stop", { stopColor: "#9945FF" }),
                n.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                n.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                n.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                n.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                n.createElement("stop", { offset: "1", stopColor: "#00D18C" })
              ),
              n.createElement(
                "linearGradient",
                {
                  id: "paint1_linear_880_5115",
                  x1: "3.41664",
                  y1: "98.0933",
                  x2: "103.05",
                  y2: "8.42498",
                  gradientUnits: "userSpaceOnUse",
                },
                n.createElement("stop", { stopColor: "#9945FF" }),
                n.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                n.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                n.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                n.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                n.createElement("stop", { offset: "1", stopColor: "#00D18C" })
              ),
              n.createElement(
                "linearGradient",
                {
                  id: "paint2_linear_880_5115",
                  x1: "25.9583",
                  y1: "68.7101",
                  x2: "67.2337",
                  y2: "23.7879",
                  gradientUnits: "userSpaceOnUse",
                },
                n.createElement("stop", { stopColor: "#9945FF" }),
                n.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                n.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                n.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                n.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                n.createElement("stop", { offset: "1", stopColor: "#00D18C" })
              ),
              n.createElement(
                "linearGradient",
                {
                  id: "paint3_linear_880_5115",
                  x1: "58.3326",
                  y1: "49.4467",
                  x2: "61.0002",
                  y2: "45.4453",
                  gradientUnits: "userSpaceOnUse",
                },
                n.createElement("stop", { stopColor: "#9945FF" }),
                n.createElement("stop", {
                  offset: "0.14",
                  stopColor: "#8A53F4",
                }),
                n.createElement("stop", {
                  offset: "0.42",
                  stopColor: "#6377D6",
                }),
                n.createElement("stop", {
                  offset: "0.79",
                  stopColor: "#24B0A7",
                }),
                n.createElement("stop", {
                  offset: "0.99",
                  stopColor: "#00D18C",
                }),
                n.createElement("stop", { offset: "1", stopColor: "#00D18C" })
              ),
              n.createElement(
                "clipPath",
                { id: "clip0_880_5115" },
                n.createElement("rect", {
                  width: "48",
                  height: "48",
                  fill: "white",
                  transform: "translate(24.5 24)",
                })
              )
            )
          ),
        m = ({ className: t = "", container: e = "body" }) => {
          let r = (0, n.useRef)(null),
            { wallets: i, select: o } = (0, u.O)(),
            { setVisible: f } = (0, n.useContext)(s),
            [c, m] = (0, n.useState)(!1),
            [g, y] = (0, n.useState)(!1),
            [w, v] = (0, n.useState)(null),
            [b, M] = (0, n.useMemo)(() => {
              let t = [],
                e = [];
              for (let r of i)
                r.readyState === a.i1.Installed ? t.push(r) : e.push(r);
              return t.length ? [t, e] : [e, []];
            }, [i]),
            E = (0, n.useCallback)(() => {
              y(!1), setTimeout(() => f(!1), 150);
            }, [f]),
            _ = (0, n.useCallback)(
              (t) => {
                t.preventDefault(), E();
              },
              [E]
            ),
            A = (0, n.useCallback)(
              (t, e) => {
                o(e), _(t);
              },
              [o, _]
            ),
            x = (0, n.useCallback)(() => m(!c), [c]),
            B = (0, n.useCallback)(
              (t) => {
                let e = r.current;
                if (!e) return;
                let n = e.querySelectorAll("button"),
                  i = n[0],
                  o = n[n.length - 1];
                t.shiftKey
                  ? document.activeElement === i &&
                    (o.focus(), t.preventDefault())
                  : document.activeElement === o &&
                    (i.focus(), t.preventDefault());
              },
              [r]
            );
          return (
            (0, n.useLayoutEffect)(() => {
              let t = (t) => {
                  "Escape" === t.key ? E() : "Tab" === t.key && B(t);
                },
                { overflow: e } = window.getComputedStyle(document.body);
              return (
                setTimeout(() => y(!0), 0),
                (document.body.style.overflow = "hidden"),
                window.addEventListener("keydown", t, !1),
                () => {
                  (document.body.style.overflow = e),
                    window.removeEventListener("keydown", t, !1);
                }
              );
            }, [E, B]),
            (0, n.useLayoutEffect)(() => v(document.querySelector(e)), [e]),
            w &&
              (0, h.createPortal)(
                n.createElement(
                  "div",
                  {
                    "aria-labelledby": "wallet-adapter-modal-title",
                    "aria-modal": "true",
                    className: `wallet-adapter-modal ${
                      g && "wallet-adapter-modal-fade-in"
                    } ${t}`,
                    ref: r,
                    role: "dialog",
                  },
                  n.createElement(
                    "div",
                    { className: "wallet-adapter-modal-container" },
                    n.createElement(
                      "div",
                      { className: "wallet-adapter-modal-wrapper" },
                      n.createElement(
                        "button",
                        {
                          onClick: _,
                          className: "wallet-adapter-modal-button-close",
                        },
                        n.createElement(
                          "svg",
                          { width: "14", height: "14" },
                          n.createElement("path", {
                            d: "M14 12.461 8.3 6.772l5.234-5.233L12.006 0 6.772 5.234 1.54 0 0 1.539l5.234 5.233L0 12.006l1.539 1.528L6.772 8.3l5.69 5.7L14 12.461z",
                          })
                        )
                      ),
                      b.length
                        ? n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(
                              "h1",
                              { className: "wallet-adapter-modal-title" },
                              "Connect a wallet on Solana to continue"
                            ),
                            n.createElement(
                              "ul",
                              { className: "wallet-adapter-modal-list" },
                              b.map((t) =>
                                n.createElement(d, {
                                  key: t.adapter.name,
                                  handleClick: (e) => A(e, t.adapter.name),
                                  wallet: t,
                                })
                              ),
                              M.length
                                ? n.createElement(
                                    l,
                                    {
                                      expanded: c,
                                      id: "wallet-adapter-modal-collapse",
                                    },
                                    M.map((t) =>
                                      n.createElement(d, {
                                        key: t.adapter.name,
                                        handleClick: (e) =>
                                          A(e, t.adapter.name),
                                        tabIndex: c ? 0 : -1,
                                        wallet: t,
                                      })
                                    )
                                  )
                                : null
                            ),
                            M.length
                              ? n.createElement(
                                  "button",
                                  {
                                    className: "wallet-adapter-modal-list-more",
                                    onClick: x,
                                    tabIndex: 0,
                                  },
                                  n.createElement(
                                    "span",
                                    null,
                                    c ? "Less " : "More ",
                                    "options"
                                  ),
                                  n.createElement(
                                    "svg",
                                    {
                                      width: "13",
                                      height: "7",
                                      viewBox: "0 0 13 7",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      className: `${
                                        c
                                          ? "wallet-adapter-modal-list-more-icon-rotate"
                                          : ""
                                      }`,
                                    },
                                    n.createElement("path", {
                                      d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z",
                                    })
                                  )
                                )
                              : null
                          )
                        : n.createElement(
                            n.Fragment,
                            null,
                            n.createElement(
                              "h1",
                              { className: "wallet-adapter-modal-title" },
                              "You'll need a wallet on Solana to continue"
                            ),
                            n.createElement(
                              "div",
                              { className: "wallet-adapter-modal-middle" },
                              n.createElement(p, null)
                            ),
                            M.length
                              ? n.createElement(
                                  n.Fragment,
                                  null,
                                  n.createElement(
                                    "button",
                                    {
                                      className:
                                        "wallet-adapter-modal-list-more",
                                      onClick: x,
                                      tabIndex: 0,
                                    },
                                    n.createElement(
                                      "span",
                                      null,
                                      c
                                        ? "Hide "
                                        : "Already have a wallet? View ",
                                      "options"
                                    ),
                                    n.createElement(
                                      "svg",
                                      {
                                        width: "13",
                                        height: "7",
                                        viewBox: "0 0 13 7",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: `${
                                          c
                                            ? "wallet-adapter-modal-list-more-icon-rotate"
                                            : ""
                                        }`,
                                      },
                                      n.createElement("path", {
                                        d: "M0.71418 1.626L5.83323 6.26188C5.91574 6.33657 6.0181 6.39652 6.13327 6.43762C6.24844 6.47872 6.37371 6.5 6.50048 6.5C6.62725 6.5 6.75252 6.47872 6.8677 6.43762C6.98287 6.39652 7.08523 6.33657 7.16774 6.26188L12.2868 1.626C12.7753 1.1835 12.3703 0.5 11.6195 0.5H1.37997C0.629216 0.5 0.224175 1.1835 0.71418 1.626Z",
                                      })
                                    )
                                  ),
                                  n.createElement(
                                    l,
                                    {
                                      expanded: c,
                                      id: "wallet-adapter-modal-collapse",
                                    },
                                    n.createElement(
                                      "ul",
                                      {
                                        className: "wallet-adapter-modal-list",
                                      },
                                      M.map((t) =>
                                        n.createElement(d, {
                                          key: t.adapter.name,
                                          handleClick: (e) =>
                                            A(e, t.adapter.name),
                                          tabIndex: c ? 0 : -1,
                                          wallet: t,
                                        })
                                      )
                                    )
                                  )
                                )
                              : null
                          )
                    )
                  ),
                  n.createElement("div", {
                    className: "wallet-adapter-modal-overlay",
                    onMouseDown: _,
                  })
                ),
                w
              )
          );
        },
        g = ({ children: t, ...e }) => {
          let [r, i] = (0, n.useState)(!1);
          return n.createElement(
            s.Provider,
            { value: { visible: r, setVisible: i } },
            t,
            r && n.createElement(m, { ...e })
          );
        };
    },
    1910: function (t, e, r) {
      "use strict";
      r.d(e, {
        U: function () {
          return s;
        },
      });
      var n = r(5429),
        i = r(2265),
        o = r(1811);
      let s = ({
        children: t,
        endpoint: e,
        config: r = { commitment: "confirmed" },
      }) => {
        let s = (0, i.useMemo)(() => new n.ew(e, r), [e, r]);
        return i.createElement(o.h.Provider, { value: { connection: s } }, t);
      };
    },
    4380: function (t, e, r) {
      "use strict";
      let n, i, o, s, a;
      r.d(e, {
        n: function () {
          return tW;
        },
      });
      var u,
        h,
        l,
        f,
        c,
        d,
        p,
        m,
        g,
        y,
        w,
        v,
        b,
        M,
        E,
        _,
        A,
        x,
        B,
        S,
        I,
        R = r(277),
        O = r(9860);
      function L(t) {
        return "version" in t;
      }
      class C extends R.mI {
        async sendTransaction(t, e, r = {}) {
          let n = !0;
          try {
            if (L(t)) {
              if (!this.supportedTransactionVersions)
                throw new O.IW(
                  "Sending versioned transactions isn't supported by this wallet"
                );
              if (!this.supportedTransactionVersions.has(t.version))
                throw new O.IW(
                  `Sending transaction version ${t.version} isn't supported by this wallet`
                );
              try {
                let n = (t = await this.signTransaction(t)).serialize();
                return await e.sendRawTransaction(n, r);
              } catch (t) {
                if (t instanceof O.PY) throw ((n = !1), t);
                throw new O.IW(t?.message, t);
              }
            } else
              try {
                let { signers: n, ...i } = r;
                (t = await this.prepareTransaction(t, e, i)),
                  n?.length && t.partialSign(...n);
                let o = (t = await this.signTransaction(t)).serialize();
                return await e.sendRawTransaction(o, i);
              } catch (t) {
                if (t instanceof O.PY) throw ((n = !1), t);
                throw new O.IW(t?.message, t);
              }
          } catch (t) {
            throw (n && this.emit("error", t), t);
          }
        }
        async signAllTransactions(t) {
          for (let e of t)
            if (L(e)) {
              if (!this.supportedTransactionVersions)
                throw new O.PY(
                  "Signing versioned transactions isn't supported by this wallet"
                );
              if (!this.supportedTransactionVersions.has(e.version))
                throw new O.PY(
                  `Signing transaction version ${e.version} isn't supported by this wallet`
                );
            }
          let e = [];
          for (let r of t) e.push(await this.signTransaction(r));
          return e;
        }
      }
      class T extends C {}
      class U extends T {}
      var k = r(5429);
      let N = `(?:\\nURI: (?<uri>[^\\n]+))?(?:\\nVersion: (?<version>[^\\n]+))?(?:\\nChain ID: (?<chainId>[^\\n]+))?(?:\\nNonce: (?<nonce>[^\\n]+))?(?:\\nIssued At: (?<issuedAt>[^\\n]+))?(?:\\nExpiration Time: (?<expirationTime>[^\\n]+))?(?:\\nNot Before: (?<notBefore>[^\\n]+))?(?:\\nRequest ID: (?<requestId>[^\\n]+))?(?:\\nResources:(?<resources>(?:\\n- [^\\n]+)*))?`;
      RegExp(
        `^(?<domain>[^\\n]+?) wants you to sign in with your Solana account:\\n(?<address>[^\\n]+)(?:\\n|$)(?:\\n(?<statement>[\\S\\s]*?)(?:\\n|$))??${N}\\n*$`
      );
      let P = {
        ERROR_ASSOCIATION_PORT_OUT_OF_RANGE:
          "ERROR_ASSOCIATION_PORT_OUT_OF_RANGE",
        ERROR_FORBIDDEN_WALLET_BASE_URL: "ERROR_FORBIDDEN_WALLET_BASE_URL",
        ERROR_SECURE_CONTEXT_REQUIRED: "ERROR_SECURE_CONTEXT_REQUIRED",
        ERROR_SESSION_CLOSED: "ERROR_SESSION_CLOSED",
        ERROR_SESSION_TIMEOUT: "ERROR_SESSION_TIMEOUT",
        ERROR_WALLET_NOT_FOUND: "ERROR_WALLET_NOT_FOUND",
        ERROR_INVALID_PROTOCOL_VERSION: "ERROR_INVALID_PROTOCOL_VERSION",
      };
      class z extends Error {
        constructor(...t) {
          let [e, r, n] = t;
          super(r),
            (this.code = e),
            (this.data = n),
            (this.name = "SolanaMobileWalletAdapterError");
        }
      }
      class j extends Error {
        constructor(...t) {
          let [e, r, n, i] = t;
          super(n),
            (this.code = r),
            (this.data = i),
            (this.jsonRpcMessageId = e),
            (this.name = "SolanaMobileWalletAdapterProtocolError");
        }
      }
      function F(t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      }
      function D(t, e) {
        return F(this, void 0, void 0, function* () {
          let r = yield crypto.subtle.exportKey("raw", t),
            n = yield crypto.subtle.sign(
              { hash: "SHA-256", name: "ECDSA" },
              e,
              r
            ),
            i = new Uint8Array(r.byteLength + n.byteLength);
          return (
            i.set(new Uint8Array(r), 0),
            i.set(new Uint8Array(n), r.byteLength),
            i
          );
        });
      }
      let q = "solana:cloneAuthorization";
      function $(t, e) {
        return F(this, void 0, void 0, function* () {
          let r = t.slice(0, 4),
            i = t.slice(4, 16),
            o = t.slice(16),
            s = yield crypto.subtle.decrypt(H(r, i), e, o);
          return (void 0 === n && (n = new TextDecoder("utf-8")), n).decode(s);
        });
      }
      function H(t, e) {
        return { additionalData: t, iv: e, name: "AES-GCM", tagLength: 128 };
      }
      function V() {
        return F(this, void 0, void 0, function* () {
          return yield crypto.subtle.generateKey(
            { name: "ECDH", namedCurve: "P-256" },
            !1,
            ["deriveKey", "deriveBits"]
          );
        });
      }
      function Z(t) {
        if (t < 49152 || t > 65535)
          throw new z(
            P.ERROR_ASSOCIATION_PORT_OUT_OF_RANGE,
            `Association port number must be between 49152 and 65535. ${t} given.`,
            { port: t }
          );
        return t;
      }
      function W(t) {
        return t.replace(/(^\/+|\/+$)/g, "").split("/");
      }
      let K = { Firefox: 0, Other: 1 },
        G = null,
        Y = [150, 150, 200, 500, 500, 750, 750, 1e3];
      function J(t) {
        return new DataView(t).getUint32(0, !1);
      }
      var Q = r(8672);
      function X(t, e) {
        var r = {};
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) &&
            0 > e.indexOf(n) &&
            (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, n = Object.getOwnPropertySymbols(t);
            i < n.length;
            i++
          )
            0 > e.indexOf(n[i]) &&
              Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
              (r[n[i]] = t[n[i]]);
        return r;
      }
      function tt(t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      }
      function te(t) {
        return window.btoa(String.fromCharCode.call(null, ...t));
      }
      function tr(t) {
        return new Uint8Array(
          window
            .atob(t)
            .split("")
            .map((t) => t.charCodeAt(0))
        );
      }
      function tn(t) {
        return te(
          "version" in t
            ? t.serialize()
            : t.serialize({ requireAllSignatures: !1, verifySignatures: !1 })
        );
      }
      function ti(t) {
        let e = t[0] * k.eT + 1;
        return "legacy" === k.EC.deserializeMessageVersion(t.slice(e, t.length))
          ? k.YW.from(t)
          : k.GS.deserialize(t);
      }
      r(9783);
      let to = "function" == typeof r(9109).Buffer;
      "function" == typeof TextDecoder && new TextDecoder(),
        "function" == typeof TextEncoder && new TextEncoder();
      let ts = Array.prototype.slice.call(
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        ),
        ta = ((s = {}), ts.forEach((t, e) => (s[t] = e)), s),
        tu =
          /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
        th = String.fromCharCode.bind(String);
      function tl(t, e, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (t) {
              o(t);
            }
          }
          function a(t) {
            try {
              u(n.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value) instanceof r
                  ? e
                  : new r(function (t) {
                      t(e);
                    })
                ).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      }
      function tf(t) {
        return new Uint8Array(
          window
            .atob(t)
            .split("")
            .map((t) => t.charCodeAt(0))
        );
      }
      "function" == typeof Uint8Array.from && Uint8Array.from.bind(Uint8Array),
        "function" == typeof btoa ||
          to ||
          ((t) => {
            let e,
              r,
              n,
              i,
              o = "",
              s = t.length % 3;
            for (let s = 0; s < t.length; ) {
              if (
                (r = t.charCodeAt(s++)) > 255 ||
                (n = t.charCodeAt(s++)) > 255 ||
                (i = t.charCodeAt(s++)) > 255
              )
                throw TypeError("invalid character found");
              o +=
                ts[((e = (r << 16) | (n << 8) | i) >> 18) & 63] +
                ts[(e >> 12) & 63] +
                ts[(e >> 6) & 63] +
                ts[63 & e];
            }
            return s ? o.slice(0, s - 3) + "===".substring(s) : o;
          }),
        "function" == typeof atob ||
          to ||
          ((t) => {
            if (((t = t.replace(/\s+/g, "")), !tu.test(t)))
              throw TypeError("malformed base64.");
            t += "==".slice(2 - (3 & t.length));
            let e,
              r = "",
              n,
              i;
            for (let o = 0; o < t.length; )
              (e =
                (ta[t.charAt(o++)] << 18) |
                (ta[t.charAt(o++)] << 12) |
                ((n = ta[t.charAt(o++)]) << 6) |
                (i = ta[t.charAt(o++)])),
                (r +=
                  64 === n
                    ? th((e >> 16) & 255)
                    : 64 === i
                    ? th((e >> 16) & 255, (e >> 8) & 255)
                    : th((e >> 16) & 255, (e >> 8) & 255, 255 & e));
            return r;
          });
      let tc = "Mobile Wallet Adapter";
      function td(t) {
        return "version" in t;
      }
      class tp extends U {
        constructor(t) {
          var e;
          super(),
            (this.supportedTransactionVersions = new Set(["legacy", 0])),
            (this.name = tc),
            (this.url = "https://solanamobile.com/wallets"),
            (this.icon =
              "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI4IiB3aWR0aD0iMjgiIHZpZXdCb3g9Ii0zIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0RDQjhGRiI+PHBhdGggZD0iTTE3LjQgMTcuNEgxNXYyLjRoMi40di0yLjRabTEuMi05LjZoLTIuNHYyLjRoMi40VjcuOFoiLz48cGF0aCBkPSJNMjEuNiAzVjBoLTIuNHYzaC0zLjZWMGgtMi40djNoLTIuNHY2LjZINC41YTIuMSAyLjEgMCAxIDEgMC00LjJoMi43VjNINC41QTQuNSA0LjUgMCAwIDAgMCA3LjVWMjRoMjEuNnYtNi42aC0yLjR2NC4ySDIuNFYxMS41Yy41LjMgMS4yLjQgMS44LjVoNy41QTYuNiA2LjYgMCAwIDAgMjQgOVYzaC0yLjRabTAgNS43YTQuMiA0LjIgMCAxIDEtOC40IDBWNS40aDguNHYzLjNaIi8+PC9nPjwvc3ZnPg=="),
            (this._connecting = !1),
            (this._connectionGeneration = 0),
            (this._readyState =
              "undefined" != typeof window &&
              window.isSecureContext &&
              "undefined" != typeof document &&
              /android/i.test(navigator.userAgent)
                ? R.i1.Loadable
                : R.i1.Unsupported),
            (this._authorizationResultCache = t.authorizationResultCache),
            (this._addressSelector = t.addressSelector),
            (this._appIdentity = t.appIdentity),
            (this._chain =
              null !== (e = t.chain) && void 0 !== e
                ? e
                : (function (t) {
                    switch (t) {
                      case "mainnet-beta":
                        return "solana:mainnet";
                      case "testnet":
                        return "solana:testnet";
                      case "devnet":
                        return "solana:devnet";
                    }
                  })(t.cluster)),
            (this._hostAuthority = t.remoteHostAuthority),
            (this._onWalletNotFound = t.onWalletNotFound),
            this._readyState !== R.i1.Unsupported &&
              this._authorizationResultCache.get().then((t) => {
                t && this.declareWalletAsInstalled();
              });
        }
        get publicKey() {
          if (null == this._publicKey && null != this._selectedAddress)
            try {
              this._publicKey = (function (t) {
                let e = tf(t);
                return new k.nh(e);
              })(this._selectedAddress);
            } catch (t) {
              throw new O.Nx(
                (t instanceof Error && (null == t ? void 0 : t.message)) ||
                  "Unknown error",
                t
              );
            }
          return this._publicKey ? this._publicKey : null;
        }
        get connected() {
          return !!this._authorizationResult;
        }
        get connecting() {
          return this._connecting;
        }
        get readyState() {
          return this._readyState;
        }
        declareWalletAsInstalled() {
          this._readyState !== R.i1.Installed &&
            this.emit("readyStateChange", (this._readyState = R.i1.Installed));
        }
        runWithGuard(t) {
          return tl(this, void 0, void 0, function* () {
            try {
              return yield t();
            } catch (t) {
              throw (this.emit("error", t), t);
            }
          });
        }
        autoConnect_DO_NOT_USE_OR_YOU_WILL_BE_FIRED() {
          return tl(this, void 0, void 0, function* () {
            return yield this.autoConnect();
          });
        }
        autoConnect() {
          return tl(this, void 0, void 0, function* () {
            if (!this.connecting && !this.connected)
              return yield this.runWithGuard(() =>
                tl(this, void 0, void 0, function* () {
                  if (
                    this._readyState !== R.i1.Installed &&
                    this._readyState !== R.i1.Loadable
                  )
                    throw new O.OZ();
                  this._connecting = !0;
                  try {
                    let t = yield this._authorizationResultCache.get();
                    t && this.handleAuthorizationResult(t);
                  } catch (t) {
                    throw new O.$w(
                      (t instanceof Error && t.message) || "Unknown error",
                      t
                    );
                  } finally {
                    this._connecting = !1;
                  }
                })
              );
          });
        }
        connect() {
          return tl(this, void 0, void 0, function* () {
            if (!this.connecting && !this.connected)
              return yield this.runWithGuard(() =>
                tl(this, void 0, void 0, function* () {
                  if (
                    this._readyState !== R.i1.Installed &&
                    this._readyState !== R.i1.Loadable
                  )
                    throw new O.OZ();
                  this._connecting = !0;
                  try {
                    yield this.performAuthorization();
                  } catch (t) {
                    throw new O.$w(
                      (t instanceof Error && t.message) || "Unknown error",
                      t
                    );
                  } finally {
                    this._connecting = !1;
                  }
                })
              );
          });
        }
        performAuthorization(t) {
          return tl(this, void 0, void 0, function* () {
            try {
              let e = yield this._authorizationResultCache.get();
              if (e) return this.handleAuthorizationResult(e), e;
              return yield this.transact((e) =>
                tl(this, void 0, void 0, function* () {
                  let r = yield e.authorize({
                    chain: this._chain,
                    identity: this._appIdentity,
                    sign_in_payload: t,
                  });
                  return (
                    Promise.all([
                      this._authorizationResultCache.set(r),
                      this.handleAuthorizationResult(r),
                    ]),
                    r
                  );
                })
              );
            } catch (t) {
              throw new O.$w(
                (t instanceof Error && t.message) || "Unknown error",
                t
              );
            }
          });
        }
        handleAuthorizationResult(t) {
          var e;
          return tl(this, void 0, void 0, function* () {
            let r =
              null == this._authorizationResult ||
              (null === (e = this._authorizationResult) || void 0 === e
                ? void 0
                : e.accounts.length) !== t.accounts.length ||
              this._authorizationResult.accounts.some(
                (e, r) => e.address !== t.accounts[r].address
              );
            if (
              ((this._authorizationResult = t),
              this.declareWalletAsInstalled(),
              r)
            ) {
              let e = yield this._addressSelector.select(
                t.accounts.map(({ address: t }) => t)
              );
              e !== this._selectedAddress &&
                ((this._selectedAddress = e),
                delete this._publicKey,
                this.emit("connect", this.publicKey));
            }
          });
        }
        performReauthorization(t, e) {
          return tl(this, void 0, void 0, function* () {
            try {
              let r = yield t.authorize({
                auth_token: e,
                identity: this._appIdentity,
              });
              Promise.all([
                this._authorizationResultCache.set(r),
                this.handleAuthorizationResult(r),
              ]);
            } catch (t) {
              throw (
                (this.disconnect(),
                new O.at(
                  (t instanceof Error && (null == t ? void 0 : t.message)) ||
                    "Unknown error",
                  t
                ))
              );
            }
          });
        }
        disconnect() {
          return tl(this, void 0, void 0, function* () {
            this._authorizationResultCache.clear(),
              (this._connecting = !1),
              this._connectionGeneration++,
              delete this._authorizationResult,
              delete this._publicKey,
              delete this._selectedAddress,
              this.emit("disconnect");
          });
        }
        transact(t) {
          var e;
          return tl(this, void 0, void 0, function* () {
            let r =
                null === (e = this._authorizationResult) || void 0 === e
                  ? void 0
                  : e.wallet_uri_base,
              n = this._hostAuthority
                ? { remoteHostAuthority: this._hostAuthority }
                : void 0,
              i = this._connectionGeneration;
            try {
              return yield (function (t, e) {
                return tt(this, void 0, void 0, function* () {
                  return yield (function (t, e) {
                    return F(this, void 0, void 0, function* () {
                      let r;
                      !(function () {
                        if (
                          "undefined" == typeof window ||
                          !0 !== window.isSecureContext
                        )
                          throw new z(
                            P.ERROR_SECURE_CONTEXT_REQUIRED,
                            "The mobile wallet adapter protocol must be used in a secure context (`https`)."
                          );
                      })();
                      let n = yield (function () {
                          return F(this, void 0, void 0, function* () {
                            return yield crypto.subtle.generateKey(
                              { name: "ECDSA", namedCurve: "P-256" },
                              !1,
                              ["sign"]
                            );
                          });
                        })(),
                        i = yield (function (t, e) {
                          return F(this, void 0, void 0, function* () {
                            let r = Z(
                                49152 + Math.floor(16384 * Math.random())
                              ),
                              n = yield (function (t, e, r, n = ["v1"]) {
                                return F(this, void 0, void 0, function* () {
                                  let i = Z(e),
                                    o = (function (t) {
                                      let e = "",
                                        r = new Uint8Array(t),
                                        n = r.byteLength;
                                      for (let t = 0; t < n; t++)
                                        e += String.fromCharCode(r[t]);
                                      return window.btoa(e);
                                    })(yield crypto.subtle.exportKey("raw", t)),
                                    s = (function (t, e) {
                                      let r = null;
                                      if (e) {
                                        try {
                                          r = new URL(e);
                                        } catch (t) {}
                                        if (
                                          (null == r ? void 0 : r.protocol) !==
                                          "https:"
                                        )
                                          throw new z(
                                            P.ERROR_FORBIDDEN_WALLET_BASE_URL,
                                            "Base URLs supplied by wallets must be valid `https` URLs"
                                          );
                                      }
                                      return (
                                        r || (r = new URL("solana-wallet:/")),
                                        new URL(
                                          t.startsWith("/")
                                            ? t
                                            : [...W(r.pathname), ...W(t)].join(
                                                "/"
                                              ),
                                          r
                                        )
                                      );
                                    })("v1/associate/local", r);
                                  return (
                                    s.searchParams.set(
                                      "association",
                                      o.replace(
                                        /[/+=]/g,
                                        (t) =>
                                          ({ "/": "_", "+": "-", "=": "." }[t])
                                      )
                                    ),
                                    s.searchParams.set("port", `${i}`),
                                    n.forEach((t) => {
                                      s.searchParams.set("v", t);
                                    }),
                                    s
                                  );
                                });
                              })(t, r, e);
                            return (
                              yield (function (t) {
                                return F(this, void 0, void 0, function* () {
                                  if ("https:" === t.protocol)
                                    window.location.assign(t);
                                  else
                                    try {
                                      switch (
                                        -1 !==
                                        navigator.userAgent.indexOf("Firefox/")
                                          ? K.Firefox
                                          : K.Other
                                      ) {
                                        case K.Firefox:
                                          null == G &&
                                            (((G =
                                              document.createElement(
                                                "iframe"
                                              )).style.display = "none"),
                                            document.body.appendChild(G)),
                                            (G.contentWindow.location.href =
                                              t.toString());
                                          break;
                                        case K.Other: {
                                          let e = new Promise((t, e) => {
                                            function r() {
                                              clearTimeout(i),
                                                window.removeEventListener(
                                                  "blur",
                                                  n
                                                );
                                            }
                                            function n() {
                                              r(), t();
                                            }
                                            window.addEventListener("blur", n);
                                            let i = setTimeout(() => {
                                              r(), e();
                                            }, 2e3);
                                          });
                                          window.location.assign(t), yield e;
                                        }
                                      }
                                    } catch (t) {
                                      throw new z(
                                        P.ERROR_WALLET_NOT_FOUND,
                                        "Found no installed wallet that supports the mobile wallet protocol."
                                      );
                                    }
                                });
                              })(n),
                              r
                            );
                          });
                        })(n.publicKey, null == e ? void 0 : e.baseUri),
                        o = `ws://localhost:${i}/solana-wallet`,
                        s = (() => {
                          let t = [...Y];
                          return () => (t.length > 1 ? t.shift() : t[0]);
                        })(),
                        a = 1,
                        u = 0,
                        h = { __type: "disconnected" };
                      return new Promise((e, i) => {
                        let l, f, c;
                        let d = {},
                          p = () =>
                            F(this, void 0, void 0, function* () {
                              if ("connecting" !== h.__type) {
                                console.warn(
                                  `Expected adapter state to be \`connecting\` at the moment the websocket opens. Got \`${h.__type}\`.`
                                );
                                return;
                              }
                              l.removeEventListener("open", p);
                              let { associationKeypair: t } = h,
                                e = yield V();
                              l.send(yield D(e.publicKey, t.privateKey)),
                                (h = {
                                  __type: "hello_req_sent",
                                  associationPublicKey: t.publicKey,
                                  ecdhPrivateKey: e.privateKey,
                                });
                            }),
                          m = (t) => {
                            t.wasClean
                              ? (h = { __type: "disconnected" })
                              : i(
                                  new z(
                                    P.ERROR_SESSION_CLOSED,
                                    `The wallet session dropped unexpectedly (${t.code}: ${t.reason}).`,
                                    { closeEvent: t }
                                  )
                                ),
                              f();
                          },
                          g = (t) =>
                            F(this, void 0, void 0, function* () {
                              f(),
                                Date.now() - r >= 3e4
                                  ? i(
                                      new z(
                                        P.ERROR_SESSION_TIMEOUT,
                                        `Failed to connect to the wallet websocket at ${o}.`
                                      )
                                    )
                                  : (yield new Promise((t) => {
                                      let e = s();
                                      c = window.setTimeout(t, e);
                                    }),
                                    w());
                            }),
                          y = (r) =>
                            F(this, void 0, void 0, function* () {
                              let o = yield r.data.arrayBuffer();
                              switch (h.__type) {
                                case "connecting":
                                  if (0 !== o.byteLength)
                                    throw Error(
                                      "Encountered unexpected message while connecting"
                                    );
                                  let s = yield V();
                                  l.send(yield D(s.publicKey, n.privateKey)),
                                    (h = {
                                      __type: "hello_req_sent",
                                      associationPublicKey: n.publicKey,
                                      ecdhPrivateKey: s.privateKey,
                                    });
                                  break;
                                case "connected":
                                  try {
                                    let t = o.slice(0, 4),
                                      e = J(t);
                                    if (e !== u + 1)
                                      throw Error(
                                        "Encrypted message has invalid sequence number"
                                      );
                                    u = e;
                                    let r = yield (function (t, e) {
                                        return F(
                                          this,
                                          void 0,
                                          void 0,
                                          function* () {
                                            let r = JSON.parse(yield $(t, e));
                                            if (
                                              Object.hasOwnProperty.call(
                                                r,
                                                "error"
                                              )
                                            )
                                              throw new j(
                                                r.id,
                                                r.error.code,
                                                r.error.message
                                              );
                                            return r;
                                          }
                                        );
                                      })(o, h.sharedSecret),
                                      n = d[r.id];
                                    delete d[r.id], n.resolve(r.result);
                                  } catch (t) {
                                    if (t instanceof j) {
                                      let e = d[t.jsonRpcMessageId];
                                      delete d[t.jsonRpcMessageId], e.reject(t);
                                    } else throw t;
                                  }
                                  break;
                                case "hello_req_sent": {
                                  var c, p;
                                  if (0 === o.byteLength) {
                                    let t = yield V();
                                    l.send(yield D(t.publicKey, n.privateKey)),
                                      (h = {
                                        __type: "hello_req_sent",
                                        associationPublicKey: n.publicKey,
                                        ecdhPrivateKey: t.privateKey,
                                      });
                                    break;
                                  }
                                  let r = yield (function (t, e, r) {
                                      return F(
                                        this,
                                        void 0,
                                        void 0,
                                        function* () {
                                          let [n, i] = yield Promise.all([
                                              crypto.subtle.exportKey("raw", e),
                                              crypto.subtle.importKey(
                                                "raw",
                                                t.slice(0, 65),
                                                {
                                                  name: "ECDH",
                                                  namedCurve: "P-256",
                                                },
                                                !1,
                                                []
                                              ),
                                            ]),
                                            o = yield crypto.subtle.deriveBits(
                                              { name: "ECDH", public: i },
                                              r,
                                              256
                                            ),
                                            s = yield crypto.subtle.importKey(
                                              "raw",
                                              o,
                                              "HKDF",
                                              !1,
                                              ["deriveKey"]
                                            );
                                          return yield crypto.subtle.deriveKey(
                                            {
                                              name: "HKDF",
                                              hash: "SHA-256",
                                              salt: new Uint8Array(n),
                                              info: new Uint8Array(),
                                            },
                                            s,
                                            { name: "AES-GCM", length: 128 },
                                            !1,
                                            ["encrypt", "decrypt"]
                                          );
                                        }
                                      );
                                    })(
                                      o,
                                      h.associationPublicKey,
                                      h.ecdhPrivateKey
                                    ),
                                    s = o.slice(65),
                                    m =
                                      0 !== s.byteLength
                                        ? yield F(
                                            this,
                                            void 0,
                                            void 0,
                                            function* () {
                                              let t = J(s.slice(0, 4));
                                              if (t !== u + 1)
                                                throw Error(
                                                  "Encrypted message has invalid sequence number"
                                                );
                                              return (
                                                (u = t),
                                                (function (t, e) {
                                                  return F(
                                                    this,
                                                    void 0,
                                                    void 0,
                                                    function* () {
                                                      let r = JSON.parse(
                                                          yield $(t, e)
                                                        ),
                                                        n = "legacy";
                                                      if (
                                                        Object.hasOwnProperty.call(
                                                          r,
                                                          "v"
                                                        )
                                                      )
                                                        switch (r.v) {
                                                          case 1:
                                                          case "1":
                                                          case "v1":
                                                            n = "v1";
                                                            break;
                                                          case "legacy":
                                                            n = "legacy";
                                                            break;
                                                          default:
                                                            throw new z(
                                                              P.ERROR_INVALID_PROTOCOL_VERSION,
                                                              `Unknown/unsupported protocol version: ${r.v}`
                                                            );
                                                        }
                                                      return {
                                                        protocol_version: n,
                                                      };
                                                    }
                                                  );
                                                })(s, r)
                                              );
                                            }
                                          )
                                        : { protocol_version: "legacy" };
                                  h = {
                                    __type: "connected",
                                    sharedSecret: r,
                                    sessionProperties: m,
                                  };
                                  let g =
                                    ((c = m.protocol_version),
                                    (p = (t, e) =>
                                      F(this, void 0, void 0, function* () {
                                        let n = a++;
                                        return (
                                          l.send(
                                            yield (function (t, e) {
                                              return F(
                                                this,
                                                void 0,
                                                void 0,
                                                function* () {
                                                  let r = JSON.stringify(t);
                                                  return (function (t, e, r) {
                                                    return F(
                                                      this,
                                                      void 0,
                                                      void 0,
                                                      function* () {
                                                        let n = (function (t) {
                                                            if (t >= 4294967296)
                                                              throw Error(
                                                                "Outbound sequence number overflow. The maximum sequence number is 32-bytes."
                                                              );
                                                            let e =
                                                              new ArrayBuffer(
                                                                4
                                                              );
                                                            return (
                                                              new DataView(
                                                                e
                                                              ).setUint32(
                                                                0,
                                                                t,
                                                                !1
                                                              ),
                                                              new Uint8Array(e)
                                                            );
                                                          })(e),
                                                          i = new Uint8Array(
                                                            12
                                                          );
                                                        crypto.getRandomValues(
                                                          i
                                                        );
                                                        let o =
                                                            yield crypto.subtle.encrypt(
                                                              H(n, i),
                                                              r,
                                                              new TextEncoder().encode(
                                                                t
                                                              )
                                                            ),
                                                          s = new Uint8Array(
                                                            n.byteLength +
                                                              i.byteLength +
                                                              o.byteLength
                                                          );
                                                        return (
                                                          s.set(
                                                            new Uint8Array(n),
                                                            0
                                                          ),
                                                          s.set(
                                                            new Uint8Array(i),
                                                            n.byteLength
                                                          ),
                                                          s.set(
                                                            new Uint8Array(o),
                                                            n.byteLength +
                                                              i.byteLength
                                                          ),
                                                          s
                                                        );
                                                      }
                                                    );
                                                  })(r, t.id, e);
                                                }
                                              );
                                            })(
                                              {
                                                id: n,
                                                jsonrpc: "2.0",
                                                method: t,
                                                params: null != e ? e : {},
                                              },
                                              r
                                            )
                                          ),
                                          new Promise((e, r) => {
                                            d[n] = {
                                              resolve(n) {
                                                switch (t) {
                                                  case "authorize":
                                                  case "reauthorize": {
                                                    let { wallet_uri_base: t } =
                                                      n;
                                                    if (null != t)
                                                      try {
                                                        !(function (t) {
                                                          let e;
                                                          try {
                                                            e = new URL(t);
                                                          } catch (t) {
                                                            throw new z(
                                                              P.ERROR_FORBIDDEN_WALLET_BASE_URL,
                                                              "Invalid base URL supplied by wallet"
                                                            );
                                                          }
                                                          if (
                                                            "https:" !==
                                                            e.protocol
                                                          )
                                                            throw new z(
                                                              P.ERROR_FORBIDDEN_WALLET_BASE_URL,
                                                              "Base URLs supplied by wallets must be valid `https` URLs"
                                                            );
                                                        })(t);
                                                      } catch (t) {
                                                        r(t);
                                                        return;
                                                      }
                                                  }
                                                }
                                                e(n);
                                              },
                                              reject: r,
                                            };
                                          })
                                        );
                                      })),
                                    new Proxy(
                                      {},
                                      {
                                        get: (t, e) => (
                                          null == t[e] &&
                                            (t[e] = function (t) {
                                              return F(
                                                this,
                                                void 0,
                                                void 0,
                                                function* () {
                                                  let { method: r, params: n } =
                                                      (function (t, e, r) {
                                                        let n = e,
                                                          i = t
                                                            .toString()
                                                            .replace(
                                                              /[A-Z]/g,
                                                              (t) =>
                                                                `_${t.toLowerCase()}`
                                                            )
                                                            .toLowerCase();
                                                        switch (t) {
                                                          case "authorize": {
                                                            let { chain: t } =
                                                              n;
                                                            if (
                                                              "legacy" === r
                                                            ) {
                                                              switch (t) {
                                                                case "solana:testnet":
                                                                  t = "testnet";
                                                                  break;
                                                                case "solana:devnet":
                                                                  t = "devnet";
                                                                  break;
                                                                case "solana:mainnet":
                                                                  t =
                                                                    "mainnet-beta";
                                                                  break;
                                                                default:
                                                                  t = n.cluster;
                                                              }
                                                              n.cluster = t;
                                                            } else {
                                                              switch (t) {
                                                                case "testnet":
                                                                case "devnet":
                                                                  t = `solana:${t}`;
                                                                  break;
                                                                case "mainnet-beta":
                                                                  t =
                                                                    "solana:mainnet";
                                                              }
                                                              n.chain = t;
                                                            }
                                                          }
                                                          case "reauthorize": {
                                                            let {
                                                              auth_token: t,
                                                              identity: e,
                                                            } = n;
                                                            t &&
                                                              ("legacy" === r
                                                                ? ((i =
                                                                    "reauthorize"),
                                                                  (n = {
                                                                    auth_token:
                                                                      t,
                                                                    identity: e,
                                                                  }))
                                                                : (i =
                                                                    "authorize"));
                                                          }
                                                        }
                                                        return {
                                                          method: i,
                                                          params: n,
                                                        };
                                                      })(e, t, c),
                                                    i = yield p(r, n);
                                                  return (
                                                    "authorize" === r &&
                                                      n.sign_in_payload &&
                                                      !i.sign_in_result &&
                                                      (i.sign_in_result =
                                                        yield (function (
                                                          t,
                                                          e,
                                                          r
                                                        ) {
                                                          var n;
                                                          return F(
                                                            this,
                                                            void 0,
                                                            void 0,
                                                            function* () {
                                                              var i, o;
                                                              let s =
                                                                  null !==
                                                                    (n =
                                                                      t.domain) &&
                                                                  void 0 !== n
                                                                    ? n
                                                                    : window
                                                                        .location
                                                                        .host,
                                                                a =
                                                                  e.accounts[0]
                                                                    .address,
                                                                u =
                                                                  ((i =
                                                                    Object.assign(
                                                                      Object.assign(
                                                                        {},
                                                                        t
                                                                      ),
                                                                      {
                                                                        domain:
                                                                          s,
                                                                        address:
                                                                          a,
                                                                      }
                                                                    )),
                                                                  (o =
                                                                    (function (
                                                                      t
                                                                    ) {
                                                                      let e = `${t.domain} wants you to sign in with your Solana account:
`;
                                                                      (e += `${t.address}`),
                                                                        t.statement &&
                                                                          (e += `

${t.statement}`);
                                                                      let r =
                                                                        [];
                                                                      if (
                                                                        (t.uri &&
                                                                          r.push(
                                                                            `URI: ${t.uri}`
                                                                          ),
                                                                        t.version &&
                                                                          r.push(
                                                                            `Version: ${t.version}`
                                                                          ),
                                                                        t.chainId &&
                                                                          r.push(
                                                                            `Chain ID: ${t.chainId}`
                                                                          ),
                                                                        t.nonce &&
                                                                          r.push(
                                                                            `Nonce: ${t.nonce}`
                                                                          ),
                                                                        t.issuedAt &&
                                                                          r.push(
                                                                            `Issued At: ${t.issuedAt}`
                                                                          ),
                                                                        t.expirationTime &&
                                                                          r.push(
                                                                            `Expiration Time: ${t.expirationTime}`
                                                                          ),
                                                                        t.notBefore &&
                                                                          r.push(
                                                                            `Not Before: ${t.notBefore}`
                                                                          ),
                                                                        t.requestId &&
                                                                          r.push(
                                                                            `Request ID: ${t.requestId}`
                                                                          ),
                                                                        t.resources)
                                                                      )
                                                                        for (let e of (r.push(
                                                                          "Resources:"
                                                                        ),
                                                                        t.resources))
                                                                          r.push(
                                                                            `- ${e}`
                                                                          );
                                                                      return (
                                                                        r.length &&
                                                                          (e += `

${r.join("\n")}`),
                                                                        e
                                                                      );
                                                                    })(i)),
                                                                  window.btoa(
                                                                    o
                                                                  )),
                                                                h = yield r(
                                                                  "sign_messages",
                                                                  {
                                                                    addresses: [
                                                                      a,
                                                                    ],
                                                                    payloads: [
                                                                      u,
                                                                    ],
                                                                  }
                                                                );
                                                              return {
                                                                address: a,
                                                                signed_message:
                                                                  u,
                                                                signature:
                                                                  h.signed_payloads[0].slice(
                                                                    u.length
                                                                  ),
                                                              };
                                                            }
                                                          );
                                                        })(
                                                          n.sign_in_payload,
                                                          i,
                                                          p
                                                        )),
                                                    (function (t, e, r) {
                                                      if (
                                                        "getCapabilities" === t
                                                      )
                                                        switch (r) {
                                                          case "legacy": {
                                                            let t = [
                                                              "solana:signTransactions",
                                                            ];
                                                            return (
                                                              !0 ===
                                                                e.supports_clone_authorization &&
                                                                t.push(q),
                                                              Object.assign(
                                                                Object.assign(
                                                                  {},
                                                                  e
                                                                ),
                                                                { features: t }
                                                              )
                                                            );
                                                          }
                                                          case "v1":
                                                            return Object.assign(
                                                              Object.assign(
                                                                {},
                                                                e
                                                              ),
                                                              {
                                                                supports_sign_and_send_transactions:
                                                                  !0,
                                                                supports_clone_authorization:
                                                                  e.features.includes(
                                                                    q
                                                                  ),
                                                              }
                                                            );
                                                        }
                                                      return e;
                                                    })(e, i, c)
                                                  );
                                                }
                                              );
                                            }),
                                          t[e]
                                        ),
                                        defineProperty: () => !1,
                                        deleteProperty: () => !1,
                                      }
                                    ));
                                  try {
                                    e(yield t(g));
                                  } catch (t) {
                                    i(t);
                                  } finally {
                                    f(), l.close();
                                  }
                                }
                              }
                            }),
                          w = () => {
                            f && f(),
                              (h = {
                                __type: "connecting",
                                associationKeypair: n,
                              }),
                              void 0 === r && (r = Date.now()),
                              (l = new WebSocket(o, [
                                "com.solana.mobilewalletadapter.v1",
                              ])).addEventListener("open", p),
                              l.addEventListener("close", m),
                              l.addEventListener("error", g),
                              l.addEventListener("message", y),
                              (f = () => {
                                window.clearTimeout(c),
                                  l.removeEventListener("open", p),
                                  l.removeEventListener("close", m),
                                  l.removeEventListener("error", g),
                                  l.removeEventListener("message", y);
                              });
                          };
                        w();
                      });
                    });
                  })(
                    (e) =>
                      t(
                        new Proxy(
                          {},
                          {
                            get(t, r) {
                              if (null == t[r])
                                switch (r) {
                                  case "signAndSendTransactions":
                                    t[r] = function (t) {
                                      var {
                                          minContextSlot: r,
                                          commitment: n,
                                          skipPreflight: i,
                                          maxRetries: o,
                                          waitForCommitmentToSendNextTransaction:
                                            s,
                                          transactions: a,
                                        } = t,
                                        u = X(t, [
                                          "minContextSlot",
                                          "commitment",
                                          "skipPreflight",
                                          "maxRetries",
                                          "waitForCommitmentToSendNextTransaction",
                                          "transactions",
                                        ]);
                                      return tt(
                                        this,
                                        void 0,
                                        void 0,
                                        function* () {
                                          let t = a.map(tn),
                                            h = {
                                              min_context_slot: r,
                                              commitment: n,
                                              skip_preflight: i,
                                              max_retries: o,
                                              wait_for_commitment_to_send_next_transaction:
                                                s,
                                            },
                                            { signatures: l } =
                                              yield e.signAndSendTransactions(
                                                Object.assign(
                                                  Object.assign(
                                                    Object.assign({}, u),
                                                    Object.values(h).some(
                                                      (t) => null != t
                                                    )
                                                      ? { options: h }
                                                      : null
                                                  ),
                                                  { payloads: t }
                                                )
                                              );
                                          return l.map(tr).map(Q.encode);
                                        }
                                      );
                                    };
                                    break;
                                  case "signMessages":
                                    t[r] = function (t) {
                                      var { payloads: r } = t,
                                        n = X(t, ["payloads"]);
                                      return tt(
                                        this,
                                        void 0,
                                        void 0,
                                        function* () {
                                          let t = r.map(te),
                                            { signed_payloads: i } =
                                              yield e.signMessages(
                                                Object.assign(
                                                  Object.assign({}, n),
                                                  { payloads: t }
                                                )
                                              );
                                          return i.map(tr);
                                        }
                                      );
                                    };
                                    break;
                                  case "signTransactions":
                                    t[r] = function (t) {
                                      var { transactions: r } = t,
                                        n = X(t, ["transactions"]);
                                      return tt(
                                        this,
                                        void 0,
                                        void 0,
                                        function* () {
                                          let t = r.map(tn),
                                            { signed_payloads: i } =
                                              yield e.signTransactions(
                                                Object.assign(
                                                  Object.assign({}, n),
                                                  { payloads: t }
                                                )
                                              );
                                          return i.map(tr).map(ti);
                                        }
                                      );
                                    };
                                    break;
                                  default:
                                    t[r] = e[r];
                                }
                              return t[r];
                            },
                            defineProperty: () => !1,
                            deleteProperty: () => !1,
                          }
                        )
                      ),
                    e
                  );
                });
              })(
                t,
                Object.assign(Object.assign({}, r ? { baseUri: r } : void 0), n)
              );
            } catch (t) {
              throw (
                (this._connectionGeneration !== i &&
                  (yield new Promise(() => {})),
                t instanceof Error &&
                  "SolanaMobileWalletAdapterError" === t.name &&
                  "ERROR_WALLET_NOT_FOUND" === t.code &&
                  (yield this._onWalletNotFound(this)),
                t)
              );
            }
          });
        }
        assertIsAuthorized() {
          if (!this._authorizationResult || !this._selectedAddress)
            throw new O.oS();
          return {
            authToken: this._authorizationResult.auth_token,
            selectedAddress: this._selectedAddress,
          };
        }
        performSignTransactions(t) {
          return tl(this, void 0, void 0, function* () {
            let { authToken: e } = this.assertIsAuthorized();
            try {
              return yield this.transact((r) =>
                tl(this, void 0, void 0, function* () {
                  return (
                    yield this.performReauthorization(r, e),
                    yield r.signTransactions({ transactions: t })
                  );
                })
              );
            } catch (t) {
              throw new O.PY(null == t ? void 0 : t.message, t);
            }
          });
        }
        sendTransaction(t, e, r) {
          return tl(this, void 0, void 0, function* () {
            return yield this.runWithGuard(() =>
              tl(this, void 0, void 0, function* () {
                let { authToken: n } = this.assertIsAuthorized(),
                  i = null == r ? void 0 : r.minContextSlot;
                try {
                  return yield this.transact((o) =>
                    tl(this, void 0, void 0, function* () {
                      function s() {
                        let t, n;
                        switch (e.commitment) {
                          case "confirmed":
                          case "finalized":
                          case "processed":
                            t = e.commitment;
                            break;
                          default:
                            t = "finalized";
                        }
                        switch (null == r ? void 0 : r.preflightCommitment) {
                          case "confirmed":
                          case "finalized":
                          case "processed":
                            n = r.preflightCommitment;
                            break;
                          case void 0:
                            n = t;
                            break;
                          default:
                            n = "finalized";
                        }
                        let i =
                            "finalized" === n ? 2 : "confirmed" === n ? 1 : 0,
                          o = "finalized" === t ? 2 : "confirmed" === t ? 1 : 0;
                        return i < o ? n : t;
                      }
                      let [a, u, h] = yield Promise.all([
                        o.getCapabilities(),
                        this.performReauthorization(o, n),
                        td(t)
                          ? null
                          : tl(this, void 0, void 0, function* () {
                              var r;
                              if (
                                (t.feePayer ||
                                  (t.feePayer =
                                    null !== (r = this.publicKey) &&
                                    void 0 !== r
                                      ? r
                                      : void 0),
                                null == t.recentBlockhash)
                              ) {
                                let { blockhash: r } =
                                  yield e.getLatestBlockhash({
                                    commitment: s(),
                                  });
                                t.recentBlockhash = r;
                              }
                            }),
                      ]);
                      if (a.supports_sign_and_send_transactions)
                        return (yield o.signAndSendTransactions({
                          minContextSlot: i,
                          transactions: [t],
                        }))[0];
                      {
                        let [n] = yield o.signTransactions({
                          transactions: [t],
                        });
                        if (td(n)) return yield e.sendTransaction(n);
                        {
                          let t = n.serialize();
                          return yield e.sendRawTransaction(
                            t,
                            Object.assign(Object.assign({}, r), {
                              preflightCommitment: s(),
                            })
                          );
                        }
                      }
                    })
                  );
                } catch (t) {
                  throw new O.IW(null == t ? void 0 : t.message, t);
                }
              })
            );
          });
        }
        signTransaction(t) {
          return tl(this, void 0, void 0, function* () {
            return yield this.runWithGuard(() =>
              tl(this, void 0, void 0, function* () {
                let [e] = yield this.performSignTransactions([t]);
                return e;
              })
            );
          });
        }
        signAllTransactions(t) {
          return tl(this, void 0, void 0, function* () {
            return yield this.runWithGuard(() =>
              tl(this, void 0, void 0, function* () {
                return yield this.performSignTransactions(t);
              })
            );
          });
        }
        signMessage(t) {
          return tl(this, void 0, void 0, function* () {
            return yield this.runWithGuard(() =>
              tl(this, void 0, void 0, function* () {
                let { authToken: e, selectedAddress: r } =
                  this.assertIsAuthorized();
                try {
                  return yield this.transact((n) =>
                    tl(this, void 0, void 0, function* () {
                      yield this.performReauthorization(n, e);
                      let [i] = yield n.signMessages({
                        addresses: [r],
                        payloads: [t],
                      });
                      return i.slice(-64);
                    })
                  );
                } catch (t) {
                  throw new O.fk(null == t ? void 0 : t.message, t);
                }
              })
            );
          });
        }
        signIn(t) {
          return tl(this, void 0, void 0, function* () {
            return yield this.runWithGuard(() =>
              tl(this, void 0, void 0, function* () {
                var e, r;
                if (
                  this._readyState !== R.i1.Installed &&
                  this._readyState !== R.i1.Loadable
                )
                  throw new O.OZ();
                this._connecting = !0;
                try {
                  let n = yield this.performAuthorization(
                    Object.assign(Object.assign({}, t), {
                      domain:
                        null !== (e = null == t ? void 0 : t.domain) &&
                        void 0 !== e
                          ? e
                          : window.location.host,
                    })
                  );
                  if (!n.sign_in_result)
                    throw Error(
                      "Sign in failed, no sign in result returned by wallet"
                    );
                  let i = n.sign_in_result.address;
                  return {
                    account: Object.assign(
                      Object.assign(
                        {},
                        null !== (r = n.accounts.find((t) => t.address == i)) &&
                          void 0 !== r
                          ? r
                          : { address: i }
                      ),
                      { publicKey: tf(i) }
                    ),
                    signedMessage: tf(n.sign_in_result.signed_message),
                    signature: tf(n.sign_in_result.signature),
                  };
                } catch (t) {
                  throw new O.$w(
                    (t instanceof Error && t.message) || "Unknown error",
                    t
                  );
                } finally {
                  this._connecting = !1;
                }
              })
            );
          });
        }
      }
      let tm = "SolanaMobileWalletAdapterDefaultAuthorizationCache";
      function tg(t) {
        return tl(this, void 0, void 0, function* () {
          "undefined" != typeof window && window.location.assign(t.url);
        });
      }
      let ty = "solana:signAndSendTransaction",
        tw = "solana:signTransaction",
        tv = "standard:connect",
        tb = "standard:events",
        tM = function (t) {
          return (
            tv in t.features &&
            tb in t.features &&
            (ty in t.features || tw in t.features)
          );
        },
        tE = "solana:signMessage",
        t_ = "solana:signIn",
        tA = "solana:mainnet";
      function tx(t) {
        switch (t) {
          case "processed":
          case "confirmed":
          case "finalized":
          case void 0:
            return t;
          case "recent":
            return "processed";
          case "single":
          case "singleGossip":
            return "confirmed";
          case "max":
          case "root":
            return "finalized";
          default:
            return;
        }
      }
      let tB = "standard:disconnect";
      new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap(),
        new WeakMap();
      var tS = function (t, e, r, n, i) {
          if ("m" === n) throw TypeError("Private method is not writable");
          if ("a" === n && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === n ? i.call(t, r) : i ? (i.value = r) : e.set(t, r), r;
        },
        tI = function (t, e, r, n) {
          if ("a" === r && !n)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof e ? t !== e || !n : !e.has(t))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t);
        };
      class tR extends R.mI {
        constructor({ wallet: t }) {
          super(),
            h.add(this),
            l.set(this, void 0),
            f.set(this, void 0),
            c.set(this, void 0),
            d.set(this, void 0),
            p.set(this, void 0),
            m.set(this, void 0),
            g.set(this, void 0),
            y.set(
              this,
              "undefined" == typeof window || "undefined" == typeof document
                ? R.i1.Unsupported
                : R.i1.Installed
            ),
            E.set(this, (t) => {
              if ("accounts" in t) {
                let t = tI(this, g, "f").accounts[0];
                tI(this, l, "f") &&
                  !tI(this, d, "f") &&
                  t !== tI(this, l, "f") &&
                  (t
                    ? tI(this, h, "m", v).call(this, t)
                    : (this.emit("error", new O.at()),
                      tI(this, h, "m", b).call(this)));
              }
              "features" in t && tI(this, h, "m", M).call(this);
            }),
            tS(this, g, t, "f"),
            tS(this, l, null, "f"),
            tS(this, f, null, "f"),
            tS(this, c, !1, "f"),
            tS(this, d, !1, "f"),
            tS(
              this,
              p,
              tI(this, g, "f").features[tb].on("change", tI(this, E, "f")),
              "f"
            ),
            tI(this, h, "m", M).call(this);
        }
        get name() {
          return tI(this, g, "f").name;
        }
        get url() {
          return "https://github.com/solana-labs/wallet-standard";
        }
        get icon() {
          return tI(this, g, "f").icon;
        }
        get readyState() {
          return tI(this, y, "f");
        }
        get publicKey() {
          return tI(this, f, "f");
        }
        get connecting() {
          return tI(this, c, "f");
        }
        get supportedTransactionVersions() {
          return tI(this, m, "f");
        }
        get wallet() {
          return tI(this, g, "f");
        }
        get standard() {
          return !0;
        }
        destroy() {
          tS(this, l, null, "f"),
            tS(this, f, null, "f"),
            tS(this, c, !1, "f"),
            tS(this, d, !1, "f");
          let t = tI(this, p, "f");
          t && (tS(this, p, null, "f"), t());
        }
        async autoConnect() {
          return tI(this, h, "m", w).call(this, { silent: !0 });
        }
        async connect() {
          return tI(this, h, "m", w).call(this);
        }
        async disconnect() {
          if (tB in tI(this, g, "f").features)
            try {
              tS(this, d, !0, "f"),
                await tI(this, g, "f").features[tB].disconnect();
            } catch (t) {
              this.emit("error", new O.UG(t?.message, t));
            } finally {
              tS(this, d, !1, "f");
            }
          tI(this, h, "m", b).call(this);
        }
        async sendTransaction(t, e, r = {}) {
          try {
            var n;
            let i;
            let o = tI(this, l, "f");
            if (!o) throw new O.oS();
            if (ty in tI(this, g, "f").features) {
              if (o.features.includes(ty)) i = ty;
              else if (
                tw in tI(this, g, "f").features &&
                o.features.includes(tw)
              )
                i = tw;
              else throw new O.cO();
            } else if (tw in tI(this, g, "f").features) {
              if (!o.features.includes(tw)) throw new O.cO();
              i = tw;
            } else throw new O.p6();
            let s = (n = e.rpcEndpoint).includes(
              "https://api.mainnet-beta.solana.com"
            )
              ? tA
              : /\bdevnet\b/i.test(n)
              ? "solana:devnet"
              : /\btestnet\b/i.test(n)
              ? "solana:testnet"
              : /\blocalhost\b/i.test(n) || /\b127\.0\.0\.1\b/.test(n)
              ? "solana:localnet"
              : tA;
            if (!o.chains.includes(s)) throw new O.IW();
            try {
              let n;
              let { signers: a, ...u } = r;
              if (
                (L(t)
                  ? (a?.length && t.sign(a), (n = t.serialize()))
                  : ((t = await this.prepareTransaction(t, e, u)),
                    a?.length && t.partialSign(...a),
                    (n = new Uint8Array(
                      t.serialize({
                        requireAllSignatures: !1,
                        verifySignatures: !1,
                      })
                    ))),
                i === ty)
              ) {
                let [t] = await tI(this, g, "f").features[
                  ty
                ].signAndSendTransaction({
                  account: o,
                  chain: s,
                  transaction: n,
                  options: {
                    preflightCommitment: tx(
                      u.preflightCommitment || e.commitment
                    ),
                    skipPreflight: u.skipPreflight,
                    maxRetries: u.maxRetries,
                    minContextSlot: u.minContextSlot,
                  },
                });
                return Q.encode(t.signature);
              }
              {
                let [t] = await tI(this, g, "f").features[tw].signTransaction({
                  account: o,
                  chain: s,
                  transaction: n,
                  options: {
                    preflightCommitment: tx(
                      u.preflightCommitment || e.commitment
                    ),
                    minContextSlot: u.minContextSlot,
                  },
                });
                return await e.sendRawTransaction(t.signedTransaction, {
                  ...u,
                  preflightCommitment: tx(
                    u.preflightCommitment || e.commitment
                  ),
                });
              }
            } catch (t) {
              if (t instanceof O.lj) throw t;
              throw new O.IW(t?.message, t);
            }
          } catch (t) {
            throw (this.emit("error", t), t);
          }
        }
      }
      (l = new WeakMap()),
        (f = new WeakMap()),
        (c = new WeakMap()),
        (d = new WeakMap()),
        (p = new WeakMap()),
        (m = new WeakMap()),
        (g = new WeakMap()),
        (y = new WeakMap()),
        (E = new WeakMap()),
        (h = new WeakSet()),
        (w = async function (t) {
          try {
            if (this.connected || this.connecting) return;
            if (tI(this, y, "f") !== R.i1.Installed) throw new O.OZ();
            if ((tS(this, c, !0, "f"), !tI(this, g, "f").accounts.length))
              try {
                await tI(this, g, "f").features[tv].connect(t);
              } catch (t) {
                throw new O.$w(t?.message, t);
              }
            let e = tI(this, g, "f").accounts[0];
            if (!e) throw new O.cO();
            tI(this, h, "m", v).call(this, e);
          } catch (t) {
            throw (this.emit("error", t), t);
          } finally {
            tS(this, c, !1, "f");
          }
        }),
        (v = function (t) {
          let e;
          try {
            e = new k.nh(t.address);
          } catch (t) {
            throw new O.Nx(t?.message, t);
          }
          tS(this, l, t, "f"),
            tS(this, f, e, "f"),
            tI(this, h, "m", M).call(this),
            this.emit("connect", e);
        }),
        (b = function () {
          tS(this, l, null, "f"),
            tS(this, f, null, "f"),
            tI(this, h, "m", M).call(this),
            this.emit("disconnect");
        }),
        (M = function () {
          let t =
            ty in tI(this, g, "f").features
              ? tI(this, g, "f").features[ty].supportedTransactionVersions
              : tI(this, g, "f").features[tw].supportedTransactionVersions;
          tS(
            this,
            m,
            !(function (t, e) {
              if (t === e) return !0;
              let r = t.length;
              if (r !== e.length) return !1;
              for (let n = 0; n < r; n++) if (t[n] !== e[n]) return !1;
              return !0;
            })(t, ["legacy"])
              ? new Set(t)
              : null,
            "f"
          ),
            tw in tI(this, g, "f").features &&
            tI(this, l, "f")?.features.includes(tw)
              ? ((this.signTransaction = tI(this, h, "m", _)),
                (this.signAllTransactions = tI(this, h, "m", A)))
              : (delete this.signTransaction, delete this.signAllTransactions),
            tE in tI(this, g, "f").features &&
            tI(this, l, "f")?.features.includes(tE)
              ? (this.signMessage = tI(this, h, "m", x))
              : delete this.signMessage,
            t_ in tI(this, g, "f").features
              ? (this.signIn = tI(this, h, "m", B))
              : delete this.signIn;
        }),
        (_ = async function (t) {
          try {
            let e = tI(this, l, "f");
            if (!e) throw new O.oS();
            if (!(tw in tI(this, g, "f").features)) throw new O.p6();
            if (!e.features.includes(tw)) throw new O.cO();
            try {
              let r = (
                await tI(this, g, "f").features[tw].signTransaction({
                  account: e,
                  transaction: L(t)
                    ? t.serialize()
                    : new Uint8Array(
                        t.serialize({
                          requireAllSignatures: !1,
                          verifySignatures: !1,
                        })
                      ),
                })
              )[0].signedTransaction;
              return L(t) ? k.GS.deserialize(r) : k.YW.from(r);
            } catch (t) {
              if (t instanceof O.lj) throw t;
              throw new O.PY(t?.message, t);
            }
          } catch (t) {
            throw (this.emit("error", t), t);
          }
        }),
        (A = async function (t) {
          try {
            let e = tI(this, l, "f");
            if (!e) throw new O.oS();
            if (!(tw in tI(this, g, "f").features)) throw new O.p6();
            if (!e.features.includes(tw)) throw new O.cO();
            try {
              let r = await tI(this, g, "f").features[tw].signTransaction(
                ...t.map((t) => ({
                  account: e,
                  transaction: L(t)
                    ? t.serialize()
                    : new Uint8Array(
                        t.serialize({
                          requireAllSignatures: !1,
                          verifySignatures: !1,
                        })
                      ),
                }))
              );
              return t.map((t, e) => {
                let n = r[e].signedTransaction;
                return L(t) ? k.GS.deserialize(n) : k.YW.from(n);
              });
            } catch (t) {
              throw new O.PY(t?.message, t);
            }
          } catch (t) {
            throw (this.emit("error", t), t);
          }
        }),
        (x = async function (t) {
          try {
            let e = tI(this, l, "f");
            if (!e) throw new O.oS();
            if (!(tE in tI(this, g, "f").features)) throw new O.p6();
            if (!e.features.includes(tE)) throw new O.cO();
            try {
              return (
                await tI(this, g, "f").features[tE].signMessage({
                  account: e,
                  message: t,
                })
              )[0].signature;
            } catch (t) {
              throw new O.fk(t?.message, t);
            }
          } catch (t) {
            throw (this.emit("error", t), t);
          }
        }),
        (B = async function (t = {}) {
          try {
            let e;
            if (!(t_ in tI(this, g, "f").features)) throw new O.p6();
            try {
              [e] = await tI(this, g, "f").features[t_].signIn(t);
            } catch (t) {
              throw new O.bD(t?.message, t);
            }
            if (!e) throw new O.bD();
            return tI(this, h, "m", v).call(this, e.account), e;
          } catch (t) {
            throw (this.emit("error", t), t);
          }
        });
      var tO = function (t, e, r, n) {
          if ("a" === r && !n)
            throw TypeError("Private accessor was defined without a getter");
          if ("function" == typeof e ? t !== e || !n : !e.has(t))
            throw TypeError(
              "Cannot read private member from an object whose class did not declare it"
            );
          return "m" === r ? n : "a" === r ? n.call(t) : n ? n.value : e.get(t);
        },
        tL = function (t, e, r, n, i) {
          if ("m" === n) throw TypeError("Private method is not writable");
          if ("a" === n && !i)
            throw TypeError("Private accessor was defined without a setter");
          if ("function" == typeof e ? t !== e || !i : !e.has(t))
            throw TypeError(
              "Cannot write private member to an object whose class did not declare it"
            );
          return "a" === n ? i.call(t, r) : i ? (i.value = r) : e.set(t, r), r;
        };
      let tC = new Set(),
        tT = {};
      function tU(...t) {
        return (t = t.filter((t) => !tC.has(t))).length
          ? (t.forEach((t) => {
              (i = void 0), tC.add(t);
            }),
            tT.register?.forEach((e) => tP(() => e(...t))),
            function () {
              t.forEach((t) => {
                (i = void 0), tC.delete(t);
              }),
                tT.unregister?.forEach((e) => tP(() => e(...t)));
            })
          : () => {};
      }
      function tk() {
        return i || (i = [...tC]), i;
      }
      function tN(t, e) {
        return (
          tT[t]?.push(e) || (tT[t] = [e]),
          function () {
            tT[t] = tT[t]?.filter((t) => e !== t);
          }
        );
      }
      function tP(t) {
        try {
          t();
        } catch (t) {
          console.error(t);
        }
      }
      class tz extends Event {
        get detail() {
          return tO(this, S, "f");
        }
        get type() {
          return "wallet-standard:app-ready";
        }
        constructor(t) {
          super("wallet-standard:app-ready", {
            bubbles: !1,
            cancelable: !1,
            composed: !1,
          }),
            S.set(this, void 0),
            tL(this, S, t, "f");
        }
        preventDefault() {
          throw Error("preventDefault cannot be called");
        }
        stopImmediatePropagation() {
          throw Error("stopImmediatePropagation cannot be called");
        }
        stopPropagation() {
          throw Error("stopPropagation cannot be called");
        }
      }
      S = new WeakMap();
      var tj = r(2265);
      function tF(t) {
        let e = (0, tj.useRef)();
        return e.current || (e.current = { value: t() }), e.current.value;
      }
      function tD(t) {
        return t.filter(tM).map((t) => new tR({ wallet: t }));
      }
      ((u = I || (I = {}))[(u.DESKTOP_WEB = 0)] = "DESKTOP_WEB"),
        (u[(u.MOBILE_WEB = 1)] = "MOBILE_WEB");
      var tq = r(1811);
      class t$ extends O.lj {
        constructor() {
          super(...arguments), (this.name = "WalletNotSelectedError");
        }
      }
      var tH = r(8782);
      function tV({
        children: t,
        wallets: e,
        adapter: r,
        isUnloadingRef: n,
        onAutoConnectRequest: i,
        onConnectError: o,
        onError: s,
        onSelectWallet: a,
      }) {
        let u = (0, tj.useRef)(!1),
          [h, l] = (0, tj.useState)(!1),
          f = (0, tj.useRef)(!1),
          [c, d] = (0, tj.useState)(!1),
          [p, m] = (0, tj.useState)(() => r?.publicKey ?? null),
          [g, y] = (0, tj.useState)(() => r?.connected ?? !1),
          w = (0, tj.useRef)(s);
        (0, tj.useEffect)(
          () => (
            (w.current = s),
            () => {
              w.current = void 0;
            }
          ),
          [s]
        );
        let v = (0, tj.useRef)(
            (t, e) => (
              !n.current &&
                (w.current
                  ? w.current(t, e)
                  : (console.error(t, e),
                    t instanceof O.OZ &&
                      "undefined" != typeof window &&
                      e &&
                      window.open(e.url, "_blank"))),
              t
            )
          ),
          [b, M] = (0, tj.useState)(() =>
            e
              .map((t) => ({ adapter: t, readyState: t.readyState }))
              .filter(({ readyState: t }) => t !== R.i1.Unsupported)
          );
        (0, tj.useEffect)(() => {
          function t(t) {
            M((e) => {
              let r = e.findIndex(({ adapter: t }) => t === this);
              if (-1 === r) return e;
              let { adapter: n } = e[r];
              return [
                ...e.slice(0, r),
                { adapter: n, readyState: t },
                ...e.slice(r + 1),
              ].filter(({ readyState: t }) => t !== R.i1.Unsupported);
            });
          }
          return (
            M((t) =>
              e
                .map((e, r) => {
                  let n = t[r];
                  return n && n.adapter === e && n.readyState === e.readyState
                    ? n
                    : { adapter: e, readyState: e.readyState };
                })
                .filter(({ readyState: t }) => t !== R.i1.Unsupported)
            ),
            e.forEach((e) => e.on("readyStateChange", t, e)),
            () => {
              e.forEach((e) => e.off("readyStateChange", t, e));
            }
          );
        }, [r, e]);
        let E = (0, tj.useMemo)(
          () => b.find((t) => t.adapter === r) ?? null,
          [r, b]
        );
        (0, tj.useEffect)(() => {
          if (!r) return;
          let t = (t) => {
              m(t), (u.current = !1), l(!1), y(!0), (f.current = !1), d(!1);
            },
            e = () => {
              n.current ||
                (m(null),
                (u.current = !1),
                l(!1),
                y(!1),
                (f.current = !1),
                d(!1));
            },
            i = (t) => {
              v.current(t, r);
            };
          return (
            r.on("connect", t),
            r.on("disconnect", e),
            r.on("error", i),
            () => {
              r.off("connect", t),
                r.off("disconnect", e),
                r.off("error", i),
                e();
            }
          );
        }, [r, n]);
        let _ = (0, tj.useRef)(!1);
        (0, tj.useEffect)(
          () => () => {
            _.current = !1;
          },
          [r]
        ),
          (0, tj.useEffect)(() => {
            _.current ||
              u.current ||
              g ||
              !i ||
              (E?.readyState !== R.i1.Installed &&
                E?.readyState !== R.i1.Loadable) ||
              ((u.current = !0),
              l(!0),
              (_.current = !0),
              (async function () {
                try {
                  await i();
                } catch {
                  o();
                } finally {
                  l(!1), (u.current = !1);
                }
              })());
          }, [g, i, o, E]);
        let A = (0, tj.useCallback)(
            async (t, e, n) => {
              if (!r) throw v.current(new t$());
              if (!g) throw v.current(new O.oS(), r);
              return await r.sendTransaction(t, e, n);
            },
            [r, g]
          ),
          x = (0, tj.useMemo)(
            () =>
              r && "signTransaction" in r
                ? async (t) => {
                    if (!g) throw v.current(new O.oS(), r);
                    return await r.signTransaction(t);
                  }
                : void 0,
            [r, g]
          ),
          B = (0, tj.useMemo)(
            () =>
              r && "signAllTransactions" in r
                ? async (t) => {
                    if (!g) throw v.current(new O.oS(), r);
                    return await r.signAllTransactions(t);
                  }
                : void 0,
            [r, g]
          ),
          S = (0, tj.useMemo)(
            () =>
              r && "signMessage" in r
                ? async (t) => {
                    if (!g) throw v.current(new O.oS(), r);
                    return await r.signMessage(t);
                  }
                : void 0,
            [r, g]
          ),
          I = (0, tj.useMemo)(
            () =>
              r && "signIn" in r ? async (t) => await r.signIn(t) : void 0,
            [r]
          ),
          L = (0, tj.useCallback)(async () => {
            if (u.current || f.current || E?.adapter.connected) return;
            if (!E) throw v.current(new t$());
            let { adapter: t, readyState: e } = E;
            if (!(e === R.i1.Installed || e === R.i1.Loadable))
              throw v.current(new O.OZ(), t);
            (u.current = !0), l(!0);
            try {
              await t.connect();
            } catch (t) {
              throw (o(), t);
            } finally {
              l(!1), (u.current = !1);
            }
          }, [o, E]),
          C = (0, tj.useCallback)(async () => {
            if (!f.current && r) {
              (f.current = !0), d(!0);
              try {
                await r.disconnect();
              } finally {
                d(!1), (f.current = !1);
              }
            }
          }, [r]);
        return tj.createElement(
          tH.z.Provider,
          {
            value: {
              autoConnect: !!i,
              wallets: b,
              wallet: E,
              publicKey: p,
              connected: g,
              connecting: h,
              disconnecting: c,
              select: a,
              connect: L,
              disconnect: C,
              sendTransaction: A,
              signTransaction: x,
              signAllTransactions: B,
              signMessage: S,
              signIn: I,
            },
          },
          t
        );
      }
      function tZ(t) {
        return (
          (function ({ adapters: t, userAgentString: e }) {
            return t.some(
              (t) => t.name !== tc && t.readyState === R.i1.Installed
            )
              ? I.DESKTOP_WEB
              : e &&
                /android/i.test(e) &&
                !/(WebView|Version\/.+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+)|; wv\).+(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+))/i.test(
                  e
                )
              ? I.MOBILE_WEB
              : I.DESKTOP_WEB;
          })({
            adapters: t,
            userAgentString:
              (void 0 === o && (o = globalThis.navigator?.userAgent ?? null),
              o),
          }) === I.MOBILE_WEB
        );
      }
      function tW({
        children: t,
        wallets: e,
        autoConnect: r,
        localStorageKey: n = "walletName",
        onError: i,
      }) {
        let { connection: o } = (0, tq.R)(),
          s = (function (t) {
            let e = tF(() => new Set()),
              { get: r, on: n } = tF(() =>
                (function () {
                  if (
                    a ||
                    ((a = (function () {
                      if (
                        a ||
                        ((a = Object.freeze({ register: tU, get: tk, on: tN })),
                        "undefined" == typeof window)
                      )
                        return a;
                      let t = Object.freeze({ register: tU });
                      try {
                        window.addEventListener(
                          "wallet-standard:register-wallet",
                          ({ detail: e }) => e(t)
                        );
                      } catch (t) {
                        console.error(
                          "wallet-standard:register-wallet event listener could not be added\n",
                          t
                        );
                      }
                      try {
                        window.dispatchEvent(new tz(t));
                      } catch (t) {
                        console.error(
                          "wallet-standard:app-ready event could not be dispatched\n",
                          t
                        );
                      }
                      return a;
                    })()),
                    "undefined" == typeof window)
                  )
                    return a;
                  let t = window.navigator.wallets || [];
                  if (!Array.isArray(t))
                    return (
                      console.error("window.navigator.wallets is not an array"),
                      a
                    );
                  let { register: e } = a,
                    r = (...t) =>
                      t.forEach((t) => tP(() => t({ register: e })));
                  try {
                    Object.defineProperty(window.navigator, "wallets", {
                      value: Object.freeze({ push: r }),
                    });
                  } catch (t) {
                    return (
                      console.error(
                        "window.navigator.wallets could not be set"
                      ),
                      a
                    );
                  }
                  return r(...t), a;
                })()
              ),
              [i, o] = (0, tj.useState)(() => tD(r()));
            (0, tj.useEffect)(() => {
              let t = [
                n("register", (...t) => o((e) => [...e, ...tD(t)])),
                n("unregister", (...t) =>
                  o((e) => e.filter((e) => t.some((t) => t === e.wallet)))
                ),
              ];
              return () => t.forEach((t) => t());
            }, [n]);
            let s = (function (t) {
              let e = (0, tj.useRef)();
              return (
                (0, tj.useEffect)(() => {
                  e.current = t;
                }),
                e.current
              );
            })(i);
            return (
              (0, tj.useEffect)(() => {
                if (!s) return;
                let t = new Set(i);
                new Set(s.filter((e) => !t.has(e))).forEach((t) => t.destroy());
              }, [s, i]),
              (0, tj.useEffect)(() => () => i.forEach((t) => t.destroy()), []),
              (0, tj.useMemo)(
                () => [
                  ...i,
                  ...t.filter(
                    ({ name: t }) =>
                      !i.some((e) => e.name === t) ||
                      (e.has(t) ||
                        (e.add(t),
                        console.warn(
                          `${t} was registered as a Standard Wallet. The Wallet Adapter for ${t} can be removed from your app.`
                        )),
                      !1)
                  ),
                ],
                [i, t, e]
              )
            );
          })(e),
          u = (0, tj.useMemo)(() => {
            var t;
            if (!tZ(s)) return null;
            let e = s.find((t) => t.name === tc);
            return (
              e ||
              new tp({
                addressSelector: {
                  select(t) {
                    return tl(this, void 0, void 0, function* () {
                      return t[0];
                    });
                  },
                },
                appIdentity: {
                  uri: (function () {
                    let t = globalThis.location;
                    if (t) return `${t.protocol}//${t.host}`;
                  })(),
                },
                authorizationResultCache: (function () {
                  let t;
                  try {
                    t = window.localStorage;
                  } catch (t) {}
                  return {
                    clear() {
                      return tl(this, void 0, void 0, function* () {
                        if (t)
                          try {
                            t.removeItem(tm);
                          } catch (t) {}
                      });
                    },
                    get() {
                      return tl(this, void 0, void 0, function* () {
                        if (t)
                          try {
                            return JSON.parse(t.getItem(tm)) || void 0;
                          } catch (t) {}
                      });
                    },
                    set(e) {
                      return tl(this, void 0, void 0, function* () {
                        if (t)
                          try {
                            t.setItem(tm, JSON.stringify(e));
                          } catch (t) {}
                      });
                    },
                  };
                })(),
                cluster: (t = o?.rpcEndpoint)
                  ? /devnet/i.test(t)
                    ? "devnet"
                    : /testnet/i.test(t)
                    ? "testnet"
                    : "mainnet-beta"
                  : "mainnet-beta",
                onWalletNotFound: tg,
              })
            );
          }, [s, o?.rpcEndpoint]),
          h = (0, tj.useMemo)(
            () => (null == u || -1 !== s.indexOf(u) ? s : [u, ...s]),
            [s, u]
          ),
          [l, f] = (function (t, e) {
            let r = (0, tj.useState)(() => {
                try {
                  let e = localStorage.getItem(t);
                  if (e) return JSON.parse(e);
                } catch (t) {
                  "undefined" != typeof window && console.error(t);
                }
                return e;
              }),
              n = r[0],
              i = (0, tj.useRef)(!0);
            return (
              (0, tj.useEffect)(() => {
                if (i.current) {
                  i.current = !1;
                  return;
                }
                try {
                  null === n
                    ? localStorage.removeItem(t)
                    : localStorage.setItem(t, JSON.stringify(n));
                } catch (t) {
                  "undefined" != typeof window && console.error(t);
                }
              }, [n, t]),
              r
            );
          })(n, tZ(s) ? tc : null),
          c = (0, tj.useMemo)(
            () => h.find((t) => t.name === l) ?? null,
            [h, l]
          ),
          d = (0, tj.useCallback)(
            (t) => {
              l !== t && (c && c.name !== tc && c.disconnect(), f(t));
            },
            [c, f, l]
          );
        (0, tj.useEffect)(() => {
          if (c)
            return (
              c.on("disconnect", t),
              () => {
                c.off("disconnect", t);
              }
            );
          function t() {
            !g.current && ((l === tc && tZ(s)) || f(null));
          }
        }, [c, s, f, l]);
        let p = (0, tj.useRef)(!1),
          m = (0, tj.useMemo)(() => {
            if (r && c)
              return async () => {
                (!0 === r || (await r(c))) &&
                  (p.current ? await c.connect() : await c.autoConnect());
              };
          }, [r, c]),
          g = (0, tj.useRef)(!1);
        (0, tj.useEffect)(() => {
          if (l === tc && tZ(s)) {
            g.current = !1;
            return;
          }
          function t() {
            g.current = !0;
          }
          return (
            window.addEventListener("beforeunload", t),
            () => {
              window.removeEventListener("beforeunload", t);
            }
          );
        }, [s, l]);
        let y = (0, tj.useCallback)(() => {
            c && c.name !== tc && d(null);
          }, [c, d]),
          w = (0, tj.useCallback)(
            (t) => {
              (p.current = !0), d(t);
            },
            [d]
          );
        return tj.createElement(
          tV,
          {
            wallets: h,
            adapter: c,
            isUnloadingRef: g,
            onAutoConnectRequest: m,
            onConnectError: y,
            onError: i,
            onSelectWallet: w,
          },
          t
        );
      }
    },
    1811: function (t, e, r) {
      "use strict";
      r.d(e, {
        R: function () {
          return o;
        },
        h: function () {
          return i;
        },
      });
      var n = r(2265);
      let i = (0, n.createContext)({});
      function o() {
        return (0, n.useContext)(i);
      }
    },
    8782: function (t, e, r) {
      "use strict";
      r.d(e, {
        O: function () {
          return u;
        },
        z: function () {
          return a;
        },
      });
      var n = r(2265);
      let i = [],
        o = {
          autoConnect: !1,
          connecting: !1,
          connected: !1,
          disconnecting: !1,
          select() {
            s("call", "select");
          },
          connect: () => Promise.reject(s("call", "connect")),
          disconnect: () => Promise.reject(s("call", "disconnect")),
          sendTransaction: () => Promise.reject(s("call", "sendTransaction")),
          signTransaction: () => Promise.reject(s("call", "signTransaction")),
          signAllTransactions: () =>
            Promise.reject(s("call", "signAllTransactions")),
          signMessage: () => Promise.reject(s("call", "signMessage")),
          signIn: () => Promise.reject(s("call", "signIn")),
        };
      function s(t, e) {
        let r = Error(
          `You have tried to ${t} "${e}" on a WalletContext without providing one. Make sure to render a WalletProvider as an ancestor of the component that uses WalletContext.`
        );
        return console.error(r), r;
      }
      Object.defineProperty(o, "wallets", {
        get: () => (s("read", "wallets"), i),
      }),
        Object.defineProperty(o, "wallet", {
          get: () => (s("read", "wallet"), null),
        }),
        Object.defineProperty(o, "publicKey", {
          get: () => (s("read", "publicKey"), null),
        });
      let a = (0, n.createContext)(o);
      function u() {
        return (0, n.useContext)(a);
      }
    },
    6199: function (t, e, r) {
      "use strict";
      function n(t) {
        if (!Number.isSafeInteger(t) || t < 0)
          throw Error(`positive integer expected, not ${t}`);
      }
      function i(t, ...e) {
        if (
          !(
            t instanceof Uint8Array ||
            (null != t &&
              "object" == typeof t &&
              "Uint8Array" === t.constructor.name)
          )
        )
          throw Error("Uint8Array expected");
        if (e.length > 0 && !e.includes(t.length))
          throw Error(
            `Uint8Array expected of length ${e}, not of length=${t.length}`
          );
      }
      function o(t, e = !0) {
        if (t.destroyed) throw Error("Hash instance has been destroyed");
        if (e && t.finished)
          throw Error("Hash#digest() has already been called");
      }
      function s(t, e) {
        i(t);
        let r = e.outputLen;
        if (t.length < r)
          throw Error(
            `digestInto() expects output buffer of length at least ${r}`
          );
      }
      r.d(e, {
        Gg: function () {
          return o;
        },
        J8: function () {
          return s;
        },
        Rx: function () {
          return n;
        },
        aI: function () {
          return i;
        },
      });
    },
    8231: function (t, e, r) {
      "use strict";
      r.d(e, {
        JQ: function () {
          return c;
        },
      });
      var n = r(6199),
        i = r(9896);
      let o = (t, e, r) => (t & e) ^ (~t & r),
        s = (t, e, r) => (t & e) ^ (t & r) ^ (e & r);
      class a extends i.kb {
        constructor(t, e, r, n) {
          super(),
            (this.blockLen = t),
            (this.outputLen = e),
            (this.padOffset = r),
            (this.isLE = n),
            (this.finished = !1),
            (this.length = 0),
            (this.pos = 0),
            (this.destroyed = !1),
            (this.buffer = new Uint8Array(t)),
            (this.view = (0, i.GL)(this.buffer));
        }
        update(t) {
          (0, n.Gg)(this);
          let { view: e, buffer: r, blockLen: o } = this,
            s = (t = (0, i.O0)(t)).length;
          for (let n = 0; n < s; ) {
            let a = Math.min(o - this.pos, s - n);
            if (a === o) {
              let e = (0, i.GL)(t);
              for (; o <= s - n; n += o) this.process(e, n);
              continue;
            }
            r.set(t.subarray(n, n + a), this.pos),
              (this.pos += a),
              (n += a),
              this.pos === o && (this.process(e, 0), (this.pos = 0));
          }
          return (this.length += t.length), this.roundClean(), this;
        }
        digestInto(t) {
          (0, n.Gg)(this), (0, n.J8)(t, this), (this.finished = !0);
          let { buffer: e, view: r, blockLen: o, isLE: s } = this,
            { pos: a } = this;
          (e[a++] = 128),
            this.buffer.subarray(a).fill(0),
            this.padOffset > o - a && (this.process(r, 0), (a = 0));
          for (let t = a; t < o; t++) e[t] = 0;
          !(function (t, e, r, n) {
            if ("function" == typeof t.setBigUint64)
              return t.setBigUint64(e, r, n);
            let i = BigInt(32),
              o = BigInt(4294967295),
              s = Number((r >> i) & o),
              a = Number(r & o),
              u = n ? 4 : 0,
              h = n ? 0 : 4;
            t.setUint32(e + u, s, n), t.setUint32(e + h, a, n);
          })(r, o - 8, BigInt(8 * this.length), s),
            this.process(r, 0);
          let u = (0, i.GL)(t),
            h = this.outputLen;
          if (h % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
          let l = h / 4,
            f = this.get();
          if (l > f.length) throw Error("_sha2: outputLen bigger than state");
          for (let t = 0; t < l; t++) u.setUint32(4 * t, f[t], s);
        }
        digest() {
          let { buffer: t, outputLen: e } = this;
          this.digestInto(t);
          let r = t.slice(0, e);
          return this.destroy(), r;
        }
        _cloneInto(t) {
          t || (t = new this.constructor()), t.set(...this.get());
          let {
            blockLen: e,
            buffer: r,
            length: n,
            finished: i,
            destroyed: o,
            pos: s,
          } = this;
          return (
            (t.length = n),
            (t.pos = s),
            (t.finished = i),
            (t.destroyed = o),
            n % e && t.buffer.set(r),
            t
          );
        }
      }
      let u = new Uint32Array([
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
          2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401,
          4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692,
          1996064986, 2554220882, 2821834349, 2952996808, 3210313671,
          3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912,
          1294757372, 1396182291, 1695183700, 1986661051, 2177026350,
          2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
          3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616,
          659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
          1955562222, 2024104815, 2227730452, 2361852424, 2428436474,
          2756734187, 3204031479, 3329325298,
        ]),
        h = new Uint32Array([
          1779033703, 3144134277, 1013904242, 2773480762, 1359893119,
          2600822924, 528734635, 1541459225,
        ]),
        l = new Uint32Array(64);
      class f extends a {
        constructor() {
          super(64, 32, 8, !1),
            (this.A = 0 | h[0]),
            (this.B = 0 | h[1]),
            (this.C = 0 | h[2]),
            (this.D = 0 | h[3]),
            (this.E = 0 | h[4]),
            (this.F = 0 | h[5]),
            (this.G = 0 | h[6]),
            (this.H = 0 | h[7]);
        }
        get() {
          let { A: t, B: e, C: r, D: n, E: i, F: o, G: s, H: a } = this;
          return [t, e, r, n, i, o, s, a];
        }
        set(t, e, r, n, i, o, s, a) {
          (this.A = 0 | t),
            (this.B = 0 | e),
            (this.C = 0 | r),
            (this.D = 0 | n),
            (this.E = 0 | i),
            (this.F = 0 | o),
            (this.G = 0 | s),
            (this.H = 0 | a);
        }
        process(t, e) {
          for (let r = 0; r < 16; r++, e += 4) l[r] = t.getUint32(e, !1);
          for (let t = 16; t < 64; t++) {
            let e = l[t - 15],
              r = l[t - 2],
              n = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ (e >>> 3),
              o = (0, i.np)(r, 17) ^ (0, i.np)(r, 19) ^ (r >>> 10);
            l[t] = (o + l[t - 7] + n + l[t - 16]) | 0;
          }
          let { A: r, B: n, C: a, D: h, E: f, F: c, G: d, H: p } = this;
          for (let t = 0; t < 64; t++) {
            let e =
                (p +
                  ((0, i.np)(f, 6) ^ (0, i.np)(f, 11) ^ (0, i.np)(f, 25)) +
                  o(f, c, d) +
                  u[t] +
                  l[t]) |
                0,
              m =
                (((0, i.np)(r, 2) ^ (0, i.np)(r, 13) ^ (0, i.np)(r, 22)) +
                  s(r, n, a)) |
                0;
            (p = d),
              (d = c),
              (c = f),
              (f = (h + e) | 0),
              (h = a),
              (a = n),
              (n = r),
              (r = (e + m) | 0);
          }
          (r = (r + this.A) | 0),
            (n = (n + this.B) | 0),
            (a = (a + this.C) | 0),
            (h = (h + this.D) | 0),
            (f = (f + this.E) | 0),
            (c = (c + this.F) | 0),
            (d = (d + this.G) | 0),
            (p = (p + this.H) | 0),
            this.set(r, n, a, h, f, c, d, p);
        }
        roundClean() {
          l.fill(0);
        }
        destroy() {
          this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
        }
      }
      let c = (0, i.hE)(() => new f());
    },
    9091: function (t, e, r) {
      "use strict";
      r.d(e, {
        fr: function () {
          return x;
        },
      });
      var n = r(6199);
      let i = BigInt(4294967296 - 1),
        o = BigInt(32),
        s = (t, e, r) => (t << r) | (e >>> (32 - r)),
        a = (t, e, r) => (e << r) | (t >>> (32 - r)),
        u = (t, e, r) => (e << (r - 32)) | (t >>> (64 - r)),
        h = (t, e, r) => (t << (r - 32)) | (e >>> (64 - r));
      var l = r(9896);
      let f = [],
        c = [],
        d = [],
        p = BigInt(0),
        m = BigInt(1),
        g = BigInt(2),
        y = BigInt(7),
        w = BigInt(256),
        v = BigInt(113);
      for (let t = 0, e = m, r = 1, n = 0; t < 24; t++) {
        ([r, n] = [n, (2 * r + 3 * n) % 5]),
          f.push(2 * (5 * n + r)),
          c.push((((t + 1) * (t + 2)) / 2) % 64);
        let i = p;
        for (let t = 0; t < 7; t++)
          (e = ((e << m) ^ ((e >> y) * v)) % w) & g &&
            (i ^= m << ((m << BigInt(t)) - m));
        d.push(i);
      }
      let [b, M] = (function (t, e = !1) {
          let r = new Uint32Array(t.length),
            n = new Uint32Array(t.length);
          for (let s = 0; s < t.length; s++) {
            let { h: a, l: u } = (function (t, e = !1) {
              return e
                ? { h: Number(t & i), l: Number((t >> o) & i) }
                : { h: 0 | Number((t >> o) & i), l: 0 | Number(t & i) };
            })(t[s], e);
            [r[s], n[s]] = [a, u];
          }
          return [r, n];
        })(d, !0),
        E = (t, e, r) => (r > 32 ? u(t, e, r) : s(t, e, r)),
        _ = (t, e, r) => (r > 32 ? h(t, e, r) : a(t, e, r));
      class A extends l.kb {
        constructor(t, e, r, i = !1, o = 24) {
          if (
            (super(),
            (this.blockLen = t),
            (this.suffix = e),
            (this.outputLen = r),
            (this.enableXOF = i),
            (this.rounds = o),
            (this.pos = 0),
            (this.posOut = 0),
            (this.finished = !1),
            (this.destroyed = !1),
            (0, n.Rx)(r),
            0 >= this.blockLen || this.blockLen >= 200)
          )
            throw Error("Sha3 supports only keccak-f1600 function");
          (this.state = new Uint8Array(200)),
            (this.state32 = (0, l.Jq)(this.state));
        }
        keccak() {
          l.iA || (0, l.l1)(this.state32),
            (function (t, e = 24) {
              let r = new Uint32Array(10);
              for (let n = 24 - e; n < 24; n++) {
                for (let e = 0; e < 10; e++)
                  r[e] = t[e] ^ t[e + 10] ^ t[e + 20] ^ t[e + 30] ^ t[e + 40];
                for (let e = 0; e < 10; e += 2) {
                  let n = (e + 8) % 10,
                    i = (e + 2) % 10,
                    o = r[i],
                    s = r[i + 1],
                    a = E(o, s, 1) ^ r[n],
                    u = _(o, s, 1) ^ r[n + 1];
                  for (let r = 0; r < 50; r += 10)
                    (t[e + r] ^= a), (t[e + r + 1] ^= u);
                }
                let e = t[2],
                  i = t[3];
                for (let r = 0; r < 24; r++) {
                  let n = c[r],
                    o = E(e, i, n),
                    s = _(e, i, n),
                    a = f[r];
                  (e = t[a]), (i = t[a + 1]), (t[a] = o), (t[a + 1] = s);
                }
                for (let e = 0; e < 50; e += 10) {
                  for (let n = 0; n < 10; n++) r[n] = t[e + n];
                  for (let n = 0; n < 10; n++)
                    t[e + n] ^= ~r[(n + 2) % 10] & r[(n + 4) % 10];
                }
                (t[0] ^= b[n]), (t[1] ^= M[n]);
              }
              r.fill(0);
            })(this.state32, this.rounds),
            l.iA || (0, l.l1)(this.state32),
            (this.posOut = 0),
            (this.pos = 0);
        }
        update(t) {
          (0, n.Gg)(this);
          let { blockLen: e, state: r } = this,
            i = (t = (0, l.O0)(t)).length;
          for (let n = 0; n < i; ) {
            let o = Math.min(e - this.pos, i - n);
            for (let e = 0; e < o; e++) r[this.pos++] ^= t[n++];
            this.pos === e && this.keccak();
          }
          return this;
        }
        finish() {
          if (this.finished) return;
          this.finished = !0;
          let { state: t, suffix: e, pos: r, blockLen: n } = this;
          (t[r] ^= e),
            (128 & e) != 0 && r === n - 1 && this.keccak(),
            (t[n - 1] ^= 128),
            this.keccak();
        }
        writeInto(t) {
          (0, n.Gg)(this, !1), (0, n.aI)(t), this.finish();
          let e = this.state,
            { blockLen: r } = this;
          for (let n = 0, i = t.length; n < i; ) {
            this.posOut >= r && this.keccak();
            let o = Math.min(r - this.posOut, i - n);
            t.set(e.subarray(this.posOut, this.posOut + o), n),
              (this.posOut += o),
              (n += o);
          }
          return t;
        }
        xofInto(t) {
          if (!this.enableXOF)
            throw Error("XOF is not possible for this instance");
          return this.writeInto(t);
        }
        xof(t) {
          return (0, n.Rx)(t), this.xofInto(new Uint8Array(t));
        }
        digestInto(t) {
          if (((0, n.J8)(t, this), this.finished))
            throw Error("digest() was already called");
          return this.writeInto(t), this.destroy(), t;
        }
        digest() {
          return this.digestInto(new Uint8Array(this.outputLen));
        }
        destroy() {
          (this.destroyed = !0), this.state.fill(0);
        }
        _cloneInto(t) {
          let {
            blockLen: e,
            suffix: r,
            outputLen: n,
            rounds: i,
            enableXOF: o,
          } = this;
          return (
            t || (t = new A(e, r, n, o, i)),
            t.state32.set(this.state32),
            (t.pos = this.pos),
            (t.posOut = this.posOut),
            (t.finished = this.finished),
            (t.rounds = i),
            (t.suffix = r),
            (t.outputLen = n),
            (t.enableXOF = o),
            (t.destroyed = this.destroyed),
            t
          );
        }
      }
      let x = (0, l.hE)(() => new A(136, 1, 32));
    },
    9896: function (t, e, r) {
      "use strict";
      r.d(e, {
        GL: function () {
          return o;
        },
        Jq: function () {
          return i;
        },
        O0: function () {
          return l;
        },
        hE: function () {
          return c;
        },
        iA: function () {
          return a;
        },
        kb: function () {
          return f;
        },
        l1: function () {
          return h;
        },
        np: function () {
          return s;
        },
      });
      var n = r(6199);
      let i = (t) =>
          new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4)),
        o = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength),
        s = (t, e) => (t << (32 - e)) | (t >>> e),
        a = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0],
        u = (t) =>
          ((t << 24) & 4278190080) |
          ((t << 8) & 16711680) |
          ((t >>> 8) & 65280) |
          ((t >>> 24) & 255);
      function h(t) {
        for (let e = 0; e < t.length; e++) t[e] = u(t[e]);
      }
      function l(t) {
        return (
          "string" == typeof t &&
            (t = (function (t) {
              if ("string" != typeof t)
                throw Error(`utf8ToBytes expected string, got ${typeof t}`);
              return new Uint8Array(new TextEncoder().encode(t));
            })(t)),
          (0, n.aI)(t),
          t
        );
      }
      class f {
        clone() {
          return this._cloneInto();
        }
      }
      function c(t) {
        let e = (e) => t().update(l(e)).digest(),
          r = t();
        return (
          (e.outputLen = r.outputLen),
          (e.blockLen = r.blockLen),
          (e.create = () => t()),
          e
        );
      }
    },
    3364: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ey: function () {
          return u;
        },
        XY: function () {
          return s;
        },
      });
      var n = r(9109),
        i = r(3466),
        o = class extends i {
          socket;
          constructor(t, e, r) {
            super(),
              (this.socket = new window.WebSocket(t, r)),
              (this.socket.onopen = () => this.emit("open")),
              (this.socket.onmessage = (t) => this.emit("message", t.data)),
              (this.socket.onerror = (t) => this.emit("error", t)),
              (this.socket.onclose = (t) => {
                this.emit("close", t.code, t.reason);
              });
          }
          send(t, e, r) {
            let n = r || e;
            try {
              this.socket.send(t), n();
            } catch (t) {
              n(t);
            }
          }
          close(t, e) {
            this.socket.close(t, e);
          }
          addEventListener(t, e, r) {
            this.socket.addEventListener(t, e, r);
          }
        };
      function s(t, e) {
        return new o(t, e);
      }
      var a = class {
          encode(t) {
            return JSON.stringify(t);
          }
          decode(t) {
            return JSON.parse(t);
          }
        },
        u = class extends i {
          address;
          rpc_id;
          queue;
          options;
          autoconnect;
          ready;
          reconnect;
          reconnect_timer_id;
          reconnect_interval;
          max_reconnects;
          rest_options;
          current_reconnects;
          generate_request_id;
          socket;
          webSocketFactory;
          dataPack;
          constructor(
            t,
            e = "ws://localhost:8080",
            {
              autoconnect: r = !0,
              reconnect: n = !0,
              reconnect_interval: i = 1e3,
              max_reconnects: o = 5,
              ...s
            } = {},
            u,
            h
          ) {
            super(),
              (this.webSocketFactory = t),
              (this.queue = {}),
              (this.rpc_id = 0),
              (this.address = e),
              (this.autoconnect = r),
              (this.ready = !1),
              (this.reconnect = n),
              (this.reconnect_timer_id = void 0),
              (this.reconnect_interval = i),
              (this.max_reconnects = o),
              (this.rest_options = s),
              (this.current_reconnects = 0),
              (this.generate_request_id = u || (() => ++this.rpc_id)),
              h ? (this.dataPack = h) : (this.dataPack = new a()),
              this.autoconnect &&
                this._connect(this.address, {
                  autoconnect: this.autoconnect,
                  reconnect: this.reconnect,
                  reconnect_interval: this.reconnect_interval,
                  max_reconnects: this.max_reconnects,
                  ...this.rest_options,
                });
          }
          connect() {
            this.socket ||
              this._connect(this.address, {
                autoconnect: this.autoconnect,
                reconnect: this.reconnect,
                reconnect_interval: this.reconnect_interval,
                max_reconnects: this.max_reconnects,
                ...this.rest_options,
              });
          }
          call(t, e, r, n) {
            return (
              n || "object" != typeof r || ((n = r), (r = null)),
              new Promise((i, o) => {
                if (!this.ready) return o(Error("socket not ready"));
                let s = this.generate_request_id(t, e);
                this.socket.send(
                  this.dataPack.encode({
                    jsonrpc: "2.0",
                    method: t,
                    params: e || void 0,
                    id: s,
                  }),
                  n,
                  (t) => {
                    if (t) return o(t);
                    (this.queue[s] = { promise: [i, o] }),
                      r &&
                        (this.queue[s].timeout = setTimeout(() => {
                          delete this.queue[s], o(Error("reply timeout"));
                        }, r));
                  }
                );
              })
            );
          }
          async login(t) {
            let e = await this.call("rpc.login", t);
            if (!e) throw Error("authentication failed");
            return e;
          }
          async listMethods() {
            return await this.call("__listMethods");
          }
          notify(t, e) {
            return new Promise((r, n) => {
              if (!this.ready) return n(Error("socket not ready"));
              this.socket.send(
                this.dataPack.encode({ jsonrpc: "2.0", method: t, params: e }),
                (t) => {
                  if (t) return n(t);
                  r();
                }
              );
            });
          }
          async subscribe(t) {
            "string" == typeof t && (t = [t]);
            let e = await this.call("rpc.on", t);
            if ("string" == typeof t && "ok" !== e[t])
              throw Error(
                "Failed subscribing to an event '" + t + "' with: " + e[t]
              );
            return e;
          }
          async unsubscribe(t) {
            "string" == typeof t && (t = [t]);
            let e = await this.call("rpc.off", t);
            if ("string" == typeof t && "ok" !== e[t])
              throw Error("Failed unsubscribing from an event with: " + e);
            return e;
          }
          close(t, e) {
            this.socket.close(t || 1e3, e);
          }
          setAutoReconnect(t) {
            this.reconnect = t;
          }
          setReconnectInterval(t) {
            this.reconnect_interval = t;
          }
          setMaxReconnects(t) {
            this.max_reconnects = t;
          }
          _connect(t, e) {
            clearTimeout(this.reconnect_timer_id),
              (this.socket = this.webSocketFactory(t, e)),
              this.socket.addEventListener("open", () => {
                (this.ready = !0),
                  this.emit("open"),
                  (this.current_reconnects = 0);
              }),
              this.socket.addEventListener("message", ({ data: t }) => {
                t instanceof ArrayBuffer && (t = n.Buffer.from(t).toString());
                try {
                  t = this.dataPack.decode(t);
                } catch (t) {
                  return;
                }
                if (t.notification && this.listeners(t.notification).length) {
                  if (!Object.keys(t.params).length)
                    return this.emit(t.notification);
                  let e = [t.notification];
                  if (t.params.constructor === Object) e.push(t.params);
                  else
                    for (let r = 0; r < t.params.length; r++)
                      e.push(t.params[r]);
                  return Promise.resolve().then(() => {
                    this.emit.apply(this, e);
                  });
                }
                if (!this.queue[t.id])
                  return t.method
                    ? Promise.resolve().then(() => {
                        this.emit(t.method, t?.params);
                      })
                    : void 0;
                "error" in t == "result" in t &&
                  this.queue[t.id].promise[1](
                    Error(
                      'Server response malformed. Response must include either "result" or "error", but not both.'
                    )
                  ),
                  this.queue[t.id].timeout &&
                    clearTimeout(this.queue[t.id].timeout),
                  t.error
                    ? this.queue[t.id].promise[1](t.error)
                    : this.queue[t.id].promise[0](t.result),
                  delete this.queue[t.id];
              }),
              this.socket.addEventListener("error", (t) =>
                this.emit("error", t)
              ),
              this.socket.addEventListener(
                "close",
                ({ code: r, reason: n }) => {
                  this.ready && setTimeout(() => this.emit("close", r, n), 0),
                    (this.ready = !1),
                    (this.socket = void 0),
                    1e3 !== r &&
                      (this.current_reconnects++,
                      this.reconnect &&
                        (this.max_reconnects > this.current_reconnects ||
                          0 === this.max_reconnects) &&
                        (this.reconnect_timer_id = setTimeout(
                          () => this._connect(t, e),
                          this.reconnect_interval
                        )));
                }
              );
          }
        };
    },
    6517: function (t, e, r) {
      "use strict";
      r.d(e, {
        AG: function () {
          return w;
        },
        G0: function () {
          return x;
        },
        IM: function () {
          return M;
        },
        IX: function () {
          return p;
        },
        O7: function () {
          return m;
        },
        Rx: function () {
          return v;
        },
        Ue: function () {
          return l;
        },
        Yj: function () {
          return d;
        },
        Z_: function () {
          return E;
        },
        _4: function () {
          return B;
        },
        bc: function () {
          return _;
        },
        dt: function () {
          return A;
        },
        eE: function () {
          return g;
        },
        i0: function () {
          return y;
        },
        jt: function () {
          return b;
        },
        oQ: function () {
          return S;
        },
      });
      class n extends TypeError {
        constructor(t, e) {
          let r;
          let { message: n, explanation: i, ...o } = t,
            { path: s } = t,
            a = 0 === s.length ? n : `At path: ${s.join(".")} -- ${n}`;
          super(i ?? a),
            null != i && (this.cause = a),
            Object.assign(this, o),
            (this.name = this.constructor.name),
            (this.failures = () => r ?? (r = [t, ...e()]));
        }
      }
      function i(t) {
        return "object" == typeof t && null != t;
      }
      function o(t) {
        return i(t) && !Array.isArray(t);
      }
      function s(t) {
        return "symbol" == typeof t
          ? t.toString()
          : "string" == typeof t
          ? JSON.stringify(t)
          : `${t}`;
      }
      function* a(t, e, r, n) {
        var o;
        for (let a of ((i((o = t)) &&
          "function" == typeof o[Symbol.iterator]) ||
          (t = [t]),
        t)) {
          let t = (function (t, e, r, n) {
            if (!0 === t) return;
            !1 === t ? (t = {}) : "string" == typeof t && (t = { message: t });
            let { path: i, branch: o } = e,
              { type: a } = r,
              {
                refinement: u,
                message: h = `Expected a value of type \`${a}\`${
                  u ? ` with refinement \`${u}\`` : ""
                }, but received: \`${s(n)}\``,
              } = t;
            return {
              value: n,
              type: a,
              refinement: u,
              key: i[i.length - 1],
              path: i,
              branch: o,
              ...t,
              message: h,
            };
          })(a, e, r, n);
          t && (yield t);
        }
      }
      function* u(t, e, r = {}) {
        let { path: n = [], branch: o = [t], coerce: s = !1, mask: a = !1 } = r,
          h = { path: n, branch: o, mask: a };
        s && (t = e.coercer(t, h));
        let l = "valid";
        for (let n of e.validator(t, h))
          (n.explanation = r.message), (l = "not_valid"), yield [n, void 0];
        for (let [f, c, d] of e.entries(t, h))
          for (let e of u(c, d, {
            path: void 0 === f ? n : [...n, f],
            branch: void 0 === f ? o : [...o, c],
            coerce: s,
            mask: a,
            message: r.message,
          }))
            e[0]
              ? ((l = null != e[0].refinement ? "not_refined" : "not_valid"),
                yield [e[0], void 0])
              : s &&
                ((c = e[1]),
                void 0 === f
                  ? (t = c)
                  : t instanceof Map
                  ? t.set(f, c)
                  : t instanceof Set
                  ? t.add(c)
                  : i(t) && (void 0 !== c || f in t) && (t[f] = c));
        if ("not_valid" !== l)
          for (let n of e.refiner(t, h))
            (n.explanation = r.message), (l = "not_refined"), yield [n, void 0];
        "valid" === l && (yield [void 0, t]);
      }
      class h {
        constructor(t) {
          let {
            type: e,
            schema: r,
            validator: n,
            refiner: i,
            coercer: o = (t) => t,
            entries: s = function* () {},
          } = t;
          (this.type = e),
            (this.schema = r),
            (this.entries = s),
            (this.coercer = o),
            n
              ? (this.validator = (t, e) => a(n(t, e), e, this, t))
              : (this.validator = () => []),
            i
              ? (this.refiner = (t, e) => a(i(t, e), e, this, t))
              : (this.refiner = () => []);
        }
        assert(t, e) {
          return (function (t, e, r) {
            let n = f(t, e, { message: r });
            if (n[0]) throw n[0];
          })(t, this, e);
        }
        create(t, e) {
          return l(t, this, e);
        }
        is(t) {
          return !f(t, this)[0];
        }
        mask(t, e) {
          return (function (t, e, r) {
            let n = f(t, e, { coerce: !0, mask: !0, message: r });
            if (!n[0]) return n[1];
            throw n[0];
          })(t, this, e);
        }
        validate(t, e = {}) {
          return f(t, this, e);
        }
      }
      function l(t, e, r) {
        let n = f(t, e, { coerce: !0, message: r });
        if (!n[0]) return n[1];
        throw n[0];
      }
      function f(t, e, r = {}) {
        let i = u(t, e, r),
          o = (function (t) {
            let { done: e, value: r } = t.next();
            return e ? void 0 : r;
          })(i);
        return o[0]
          ? [
              new n(o[0], function* () {
                for (let t of i) t[0] && (yield t[0]);
              }),
              void 0,
            ]
          : [void 0, o[1]];
      }
      function c(t, e) {
        return new h({ type: t, schema: null, validator: e });
      }
      function d() {
        return c("any", () => !0);
      }
      function p(t) {
        return new h({
          type: "array",
          schema: t,
          *entries(e) {
            if (t && Array.isArray(e))
              for (let [r, n] of e.entries()) yield [r, n, t];
          },
          coercer: (t) => (Array.isArray(t) ? t.slice() : t),
          validator: (t) =>
            Array.isArray(t) ||
            `Expected an array value, but received: ${s(t)}`,
        });
      }
      function m() {
        return c("boolean", (t) => "boolean" == typeof t);
      }
      function g(t) {
        return c(
          "instance",
          (e) =>
            e instanceof t ||
            `Expected a \`${t.name}\` instance, but received: ${s(e)}`
        );
      }
      function y(t) {
        let e = s(t),
          r = typeof t;
        return new h({
          type: "literal",
          schema:
            "string" === r || "number" === r || "boolean" === r ? t : null,
          validator: (r) =>
            r === t || `Expected the literal \`${e}\`, but received: ${s(r)}`,
        });
      }
      function w(t) {
        return new h({
          ...t,
          validator: (e, r) => null === e || t.validator(e, r),
          refiner: (e, r) => null === e || t.refiner(e, r),
        });
      }
      function v() {
        return c(
          "number",
          (t) =>
            ("number" == typeof t && !isNaN(t)) ||
            `Expected a number, but received: ${s(t)}`
        );
      }
      function b(t) {
        return new h({
          ...t,
          validator: (e, r) => void 0 === e || t.validator(e, r),
          refiner: (e, r) => void 0 === e || t.refiner(e, r),
        });
      }
      function M(t, e) {
        return new h({
          type: "record",
          schema: null,
          *entries(r) {
            if (i(r))
              for (let n in r) {
                let i = r[n];
                yield [n, n, t], yield [n, i, e];
              }
          },
          validator: (t) => o(t) || `Expected an object, but received: ${s(t)}`,
          coercer: (t) => (o(t) ? { ...t } : t),
        });
      }
      function E() {
        return c(
          "string",
          (t) =>
            "string" == typeof t || `Expected a string, but received: ${s(t)}`
        );
      }
      function _(t) {
        let e = c("never", () => !1);
        return new h({
          type: "tuple",
          schema: null,
          *entries(r) {
            if (Array.isArray(r)) {
              let n = Math.max(t.length, r.length);
              for (let i = 0; i < n; i++) yield [i, r[i], t[i] || e];
            }
          },
          validator: (t) =>
            Array.isArray(t) || `Expected an array, but received: ${s(t)}`,
          coercer: (t) => (Array.isArray(t) ? t.slice() : t),
        });
      }
      function A(t) {
        let e = Object.keys(t);
        return new h({
          type: "type",
          schema: t,
          *entries(r) {
            if (i(r)) for (let n of e) yield [n, r[n], t[n]];
          },
          validator: (t) => o(t) || `Expected an object, but received: ${s(t)}`,
          coercer: (t) => (o(t) ? { ...t } : t),
        });
      }
      function x(t) {
        let e = t.map((t) => t.type).join(" | ");
        return new h({
          type: "union",
          schema: null,
          coercer(e, r) {
            for (let n of t) {
              let [t, i] = n.validate(e, { coerce: !0, mask: r.mask });
              if (!t) return i;
            }
            return e;
          },
          validator(r, n) {
            let i = [];
            for (let e of t) {
              let [...t] = u(r, e, n),
                [o] = t;
              if (!o[0]) return [];
              for (let [e] of t) e && i.push(e);
            }
            return [
              `Expected the value to satisfy a union of \`${e}\`, but received: ${s(
                r
              )}`,
              ...i,
            ];
          },
        });
      }
      function B() {
        return c("unknown", () => !0);
      }
      function S(t, e, r) {
        return new h({
          ...t,
          coercer: (n, i) =>
            f(n, e)[0] ? t.coercer(n, i) : t.coercer(r(n, i), i),
        });
      }
    },
  },
]);
