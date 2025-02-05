"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [97],
  {
    6648: function (t, e, i) {
      i.d(e, {
        default: function () {
          return r.a;
        },
      });
      var n = i(5601),
        r = i.n(n);
    },
    7138: function (t, e, i) {
      i.d(e, {
        default: function () {
          return r.a;
        },
      });
      var n = i(231),
        r = i.n(n);
    },
    6463: function (t, e, i) {
      var n = i(1169);
      i.o(n, "useRouter") &&
        i.d(e, {
          useRouter: function () {
            return n.useRouter;
          },
        });
    },
    844: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        i(8157);
      let n = function (t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        return t;
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    5944: function (t, e, i) {
      function n(t, e, i, n) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        i(8157),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    8173: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "Image", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let n = i(1609),
        r = i(6720),
        s = i(7437),
        o = r._(i(2265)),
        a = n._(i(4887)),
        l = n._(i(8321)),
        u = i(497),
        h = i(7103),
        d = i(3938);
      i(2301);
      let c = i(291),
        p = n._(i(1241)),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function f(t, e, i, n, r, s, o) {
        let a = null == t ? void 0 : t.src;
        t &&
          t["data-loaded-src"] !== a &&
          ((t["data-loaded-src"] = a),
          ("decode" in t ? t.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (t.parentElement && t.isConnected) {
                if (("empty" !== e && r(!0), null == i ? void 0 : i.current)) {
                  let e = new Event("load");
                  Object.defineProperty(e, "target", {
                    writable: !1,
                    value: t,
                  });
                  let n = !1,
                    r = !1;
                  i.current({
                    ...e,
                    nativeEvent: e,
                    currentTarget: t,
                    target: t,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => r,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), e.preventDefault();
                    },
                    stopPropagation: () => {
                      (r = !0), e.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(t);
              }
            }));
      }
      function g(t) {
        return o.use ? { fetchPriority: t } : { fetchpriority: t };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0, o.forwardRef)((t, e) => {
        let {
          src: i,
          srcSet: n,
          sizes: r,
          height: a,
          width: l,
          decoding: u,
          className: h,
          style: d,
          fetchPriority: c,
          placeholder: p,
          loading: m,
          unoptimized: v,
          fill: y,
          onLoadRef: x,
          onLoadingCompleteRef: b,
          setBlurComplete: w,
          setShowAltText: P,
          sizesInput: S,
          onLoad: T,
          onError: A,
          ...E
        } = t;
        return (0, s.jsx)("img", {
          ...E,
          ...g(c),
          loading: m,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: h,
          style: d,
          sizes: r,
          srcSet: n,
          src: i,
          ref: (0, o.useCallback)(
            (t) => {
              e &&
                ("function" == typeof e
                  ? e(t)
                  : "object" == typeof e && (e.current = t)),
                t &&
                  (A && (t.src = t.src), t.complete && f(t, p, x, b, w, v, S));
            },
            [i, p, x, b, w, A, v, S, e]
          ),
          onLoad: (t) => {
            f(t.currentTarget, p, x, b, w, v, S);
          },
          onError: (t) => {
            P(!0), "empty" !== p && w(!0), A && A(t);
          },
        });
      });
      function y(t) {
        let { isAppRouter: e, imgAttributes: i } = t,
          n = {
            as: "image",
            imageSrcSet: i.srcSet,
            imageSizes: i.sizes,
            crossOrigin: i.crossOrigin,
            referrerPolicy: i.referrerPolicy,
            ...g(i.fetchPriority),
          };
        return e && a.default.preload
          ? (a.default.preload(i.src, n), null)
          : (0, s.jsx)(l.default, {
              children: (0, s.jsx)(
                "link",
                { rel: "preload", href: i.srcSet ? void 0 : i.src, ...n },
                "__nimg-" + i.src + i.srcSet + i.sizes
              ),
            });
      }
      let x = (0, o.forwardRef)((t, e) => {
        let i = (0, o.useContext)(c.RouterContext),
          n = (0, o.useContext)(d.ImageConfigContext),
          r = (0, o.useMemo)(() => {
            let t = m || n || h.imageConfigDefault,
              e = [...t.deviceSizes, ...t.imageSizes].sort((t, e) => t - e),
              i = t.deviceSizes.sort((t, e) => t - e);
            return { ...t, allSizes: e, deviceSizes: i };
          }, [n]),
          { onLoad: a, onLoadingComplete: l } = t,
          f = (0, o.useRef)(a);
        (0, o.useEffect)(() => {
          f.current = a;
        }, [a]);
        let g = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          g.current = l;
        }, [l]);
        let [x, b] = (0, o.useState)(!1),
          [w, P] = (0, o.useState)(!1),
          { props: S, meta: T } = (0, u.getImgProps)(t, {
            defaultLoader: p.default,
            imgConf: r,
            blurComplete: x,
            showAltText: w,
          });
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(v, {
              ...S,
              unoptimized: T.unoptimized,
              placeholder: T.placeholder,
              fill: T.fill,
              onLoadRef: f,
              onLoadingCompleteRef: g,
              setBlurComplete: b,
              setShowAltText: P,
              sizesInput: t.sizes,
              ref: e,
            }),
            T.priority
              ? (0, s.jsx)(y, { isAppRouter: !i, imgAttributes: S })
              : null,
          ],
        });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    231: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let n = i(1609),
        r = i(7437),
        s = n._(i(2265)),
        o = i(8016),
        a = i(8029),
        l = i(1142),
        u = i(3461),
        h = i(844),
        d = i(291),
        c = i(4467),
        p = i(3106),
        m = i(5944),
        f = i(4897),
        g = i(1507),
        v = new Set();
      function y(t, e, i, n, r, s) {
        if ("undefined" != typeof window && (s || (0, a.isLocalURL)(e))) {
          if (!n.bypassPrefetchedCheck) {
            let r =
              e +
              "%" +
              i +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in t
                ? t.locale
                : void 0);
            if (v.has(r)) return;
            v.add(r);
          }
          (async () => (s ? t.prefetch(e, r) : t.prefetch(e, i, n)))().catch(
            (t) => {}
          );
        }
      }
      function x(t) {
        return "string" == typeof t ? t : (0, l.formatUrl)(t);
      }
      let b = s.default.forwardRef(function (t, e) {
        let i, n;
        let {
          href: l,
          as: v,
          children: b,
          prefetch: w = null,
          passHref: P,
          replace: S,
          shallow: T,
          scroll: A,
          locale: E,
          onClick: M,
          onMouseEnter: C,
          onTouchStart: R,
          legacyBehavior: V = !1,
          ...D
        } = t;
        (i = b),
          V &&
            ("string" == typeof i || "number" == typeof i) &&
            (i = (0, r.jsx)("a", { children: i }));
        let j = s.default.useContext(d.RouterContext),
          k = s.default.useContext(c.AppRouterContext),
          L = null != j ? j : k,
          O = !j,
          F = !1 !== w,
          B = null === w ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: I, as: U } = s.default.useMemo(() => {
            if (!j) {
              let t = x(l);
              return { href: t, as: v ? x(v) : t };
            }
            let [t, e] = (0, o.resolveHref)(j, l, !0);
            return { href: t, as: v ? (0, o.resolveHref)(j, v) : e || t };
          }, [j, l, v]),
          N = s.default.useRef(I),
          _ = s.default.useRef(U);
        V && (n = s.default.Children.only(i));
        let $ = V ? n && "object" == typeof n && n.ref : e,
          [W, z, Y] = (0, p.useIntersection)({ rootMargin: "200px" }),
          H = s.default.useCallback(
            (t) => {
              (_.current !== U || N.current !== I) &&
                (Y(), (_.current = U), (N.current = I)),
                W(t),
                $ &&
                  ("function" == typeof $
                    ? $(t)
                    : "object" == typeof $ && ($.current = t));
            },
            [U, $, I, Y, W]
          );
        s.default.useEffect(() => {
          L && z && F && y(L, I, U, { locale: E }, { kind: B }, O);
        }, [U, I, z, E, F, null == j ? void 0 : j.locale, L, O, B]);
        let K = {
          ref: H,
          onClick(t) {
            V || "function" != typeof M || M(t),
              V &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(t),
              L &&
                !t.defaultPrevented &&
                (function (t, e, i, n, r, o, l, u, h) {
                  let { nodeName: d } = t.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (t) {
                      let e = t.currentTarget.getAttribute("target");
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      (!h && !(0, a.isLocalURL)(i)))
                  )
                    return;
                  t.preventDefault();
                  let c = () => {
                    let t = null == l || l;
                    "beforePopState" in e
                      ? e[r ? "replace" : "push"](i, n, {
                          shallow: o,
                          locale: u,
                          scroll: t,
                        })
                      : e[r ? "replace" : "push"](n || i, { scroll: t });
                  };
                  h ? s.default.startTransition(c) : c();
                })(t, L, I, U, S, T, A, E, O);
          },
          onMouseEnter(t) {
            V || "function" != typeof C || C(t),
              V &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(t),
              L &&
                (F || !O) &&
                y(
                  L,
                  I,
                  U,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: B },
                  O
                );
          },
          onTouchStart: function (t) {
            V || "function" != typeof R || R(t),
              V &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(t),
              L &&
                (F || !O) &&
                y(
                  L,
                  I,
                  U,
                  { locale: E, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: B },
                  O
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(U)) K.href = U;
        else if (!V || P || ("a" === n.type && !("href" in n.props))) {
          let t = void 0 !== E ? E : null == j ? void 0 : j.locale,
            e =
              (null == j ? void 0 : j.isLocaleDomain) &&
              (0, m.getDomainLocale)(
                U,
                t,
                null == j ? void 0 : j.locales,
                null == j ? void 0 : j.domainLocales
              );
          K.href =
            e ||
            (0, f.addBasePath)(
              (0, h.addLocale)(U, t, null == j ? void 0 : j.defaultLocale)
            );
        }
        return V
          ? s.default.cloneElement(n, K)
          : (0, r.jsx)("a", { ...D, ...K, children: i });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    9189: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return i;
          },
        });
      let i =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (t) {
            let e = Date.now();
            return self.setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (t) {
            return clearTimeout(t);
          };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    8016: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let n = i(8323),
        r = i(1142),
        s = i(5519),
        o = i(3461),
        a = i(8157),
        l = i(8029),
        u = i(9195),
        h = i(20);
      function d(t, e, i) {
        let d;
        let c = "string" == typeof e ? e : (0, r.formatWithValidation)(e),
          p = c.match(/^[a-zA-Z]{1,}:\/\//),
          m = p ? c.slice(p[0].length) : c;
        if ((m.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              c +
              "' passed to next/router in page: '" +
              t.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let e = (0, o.normalizeRepeatedSlashes)(m);
          c = (p ? p[0] : "") + e;
        }
        if (!(0, l.isLocalURL)(c)) return i ? [c] : c;
        try {
          d = new URL(c.startsWith("#") ? t.asPath : t.pathname, "http://n");
        } catch (t) {
          d = new URL("/", "http://n");
        }
        try {
          let t = new URL(c, d);
          t.pathname = (0, a.normalizePathTrailingSlash)(t.pathname);
          let e = "";
          if ((0, u.isDynamicRoute)(t.pathname) && t.searchParams && i) {
            let i = (0, n.searchParamsToUrlQuery)(t.searchParams),
              { result: o, params: a } = (0, h.interpolateAs)(
                t.pathname,
                t.pathname,
                i
              );
            o &&
              (e = (0, r.formatWithValidation)({
                pathname: o,
                hash: t.hash,
                query: (0, s.omit)(i, a),
              }));
          }
          let o =
            t.origin === d.origin ? t.href.slice(t.origin.length) : t.href;
          return i ? [o, e || o] : o;
        } catch (t) {
          return i ? [c] : c;
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    3106: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = i(2265),
        r = i(9189),
        s = "function" == typeof IntersectionObserver,
        o = new Map(),
        a = [];
      function l(t) {
        let { rootRef: e, rootMargin: i, disabled: l } = t,
          u = l || !s,
          [h, d] = (0, n.useState)(!1),
          c = (0, n.useRef)(null),
          p = (0, n.useCallback)((t) => {
            c.current = t;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (s) {
              if (u || h) return;
              let t = c.current;
              if (t && t.tagName)
                return (function (t, e, i) {
                  let {
                    id: n,
                    observer: r,
                    elements: s,
                  } = (function (t) {
                    let e;
                    let i = {
                        root: t.root || null,
                        margin: t.rootMargin || "",
                      },
                      n = a.find(
                        (t) => t.root === i.root && t.margin === i.margin
                      );
                    if (n && (e = o.get(n))) return e;
                    let r = new Map();
                    return (
                      (e = {
                        id: i,
                        observer: new IntersectionObserver((t) => {
                          t.forEach((t) => {
                            let e = r.get(t.target),
                              i = t.isIntersecting || t.intersectionRatio > 0;
                            e && i && e(i);
                          });
                        }, t),
                        elements: r,
                      }),
                      a.push(i),
                      o.set(i, e),
                      e
                    );
                  })(i);
                  return (
                    s.set(t, e),
                    r.observe(t),
                    function () {
                      if ((s.delete(t), r.unobserve(t), 0 === s.size)) {
                        r.disconnect(), o.delete(n);
                        let t = a.findIndex(
                          (t) => t.root === n.root && t.margin === n.margin
                        );
                        t > -1 && a.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && d(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: i,
                });
            } else if (!h) {
              let t = (0, r.requestIdleCallback)(() => d(!0));
              return () => (0, r.cancelIdleCallback)(t);
            }
          }, [u, i, e, h, c.current]),
          [
            p,
            h,
            (0, n.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    2901: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = i(1609)._(i(2265)).default.createContext({});
    },
    687: function (t, e) {
      function i(t) {
        let {
          ampFirst: e = !1,
          hybrid: i = !1,
          hasQuery: n = !1,
        } = void 0 === t ? {} : t;
        return e || (i && n);
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    1943: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let i = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function r(t) {
        return i.test(t) ? t.replace(n, "\\$&") : t;
      }
    },
    497: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImgProps", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }),
        i(2301);
      let n = i(1564),
        r = i(7103);
      function s(t) {
        return void 0 !== t.default;
      }
      function o(t) {
        return void 0 === t
          ? t
          : "number" == typeof t
          ? Number.isFinite(t)
            ? t
            : NaN
          : "string" == typeof t && /^[0-9]+$/.test(t)
          ? parseInt(t, 10)
          : NaN;
      }
      function a(t, e) {
        var i;
        let a,
          l,
          u,
          {
            src: h,
            sizes: d,
            unoptimized: c = !1,
            priority: p = !1,
            loading: m,
            className: f,
            quality: g,
            width: v,
            height: y,
            fill: x = !1,
            style: b,
            overrideSrc: w,
            onLoad: P,
            onLoadingComplete: S,
            placeholder: T = "empty",
            blurDataURL: A,
            fetchPriority: E,
            layout: M,
            objectFit: C,
            objectPosition: R,
            lazyBoundary: V,
            lazyRoot: D,
            ...j
          } = t,
          { imgConf: k, showAltText: L, blurComplete: O, defaultLoader: F } = e,
          B = k || r.imageConfigDefault;
        if ("allSizes" in B) a = B;
        else {
          let t = [...B.deviceSizes, ...B.imageSizes].sort((t, e) => t - e),
            e = B.deviceSizes.sort((t, e) => t - e);
          a = { ...B, allSizes: t, deviceSizes: e };
        }
        if (void 0 === F)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let I = j.loader || F;
        delete j.loader, delete j.srcSet;
        let U = "__next_img_default" in I;
        if (U) {
          if ("custom" === a.loader)
            throw Error(
              'Image with src "' +
                h +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let t = I;
          I = (e) => {
            let { config: i, ...n } = e;
            return t(n);
          };
        }
        if (M) {
          "fill" === M && (x = !0);
          let t = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[M];
          t && (b = { ...b, ...t });
          let e = { responsive: "100vw", fill: "100vw" }[M];
          e && !d && (d = e);
        }
        let N = "",
          _ = o(v),
          $ = o(y);
        if ("object" == typeof (i = h) && (s(i) || void 0 !== i.src)) {
          let t = s(h) ? h.default : h;
          if (!t.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(t)
            );
          if (!t.height || !t.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(t)
            );
          if (
            ((l = t.blurWidth),
            (u = t.blurHeight),
            (A = A || t.blurDataURL),
            (N = t.src),
            !x)
          ) {
            if (_ || $) {
              if (_ && !$) {
                let e = _ / t.width;
                $ = Math.round(t.height * e);
              } else if (!_ && $) {
                let e = $ / t.height;
                _ = Math.round(t.width * e);
              }
            } else (_ = t.width), ($ = t.height);
          }
        }
        let W = !p && ("lazy" === m || void 0 === m);
        (!(h = "string" == typeof h ? h : N) ||
          h.startsWith("data:") ||
          h.startsWith("blob:")) &&
          ((c = !0), (W = !1)),
          a.unoptimized && (c = !0),
          U && h.endsWith(".svg") && !a.dangerouslyAllowSVG && (c = !0),
          p && (E = "high");
        let z = o(g),
          Y = Object.assign(
            x
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: C,
                  objectPosition: R,
                }
              : {},
            L ? {} : { color: "transparent" },
            b
          ),
          H =
            O || "empty" === T
              ? null
              : "blur" === T
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: _,
                  heightInt: $,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: A || "",
                  objectFit: Y.objectFit,
                }) +
                '")'
              : 'url("' + T + '")',
          K = H
            ? {
                backgroundSize: Y.objectFit || "cover",
                backgroundPosition: Y.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: H,
              }
            : {},
          q = (function (t) {
            let {
              config: e,
              src: i,
              unoptimized: n,
              width: r,
              quality: s,
              sizes: o,
              loader: a,
            } = t;
            if (n) return { src: i, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (t, e, i) {
                let { deviceSizes: n, allSizes: r } = t;
                if (i) {
                  let t = /(^|\s)(1?\d?\d)vw/g,
                    e = [];
                  for (let n; (n = t.exec(i)); n) e.push(parseInt(n[2]));
                  if (e.length) {
                    let t = 0.01 * Math.min(...e);
                    return {
                      widths: r.filter((e) => e >= n[0] * t),
                      kind: "w",
                    };
                  }
                  return { widths: r, kind: "w" };
                }
                return "number" != typeof e
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [e, 2 * e].map(
                            (t) => r.find((e) => e >= t) || r[r.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, r, o),
              h = l.length - 1;
            return {
              sizes: o || "w" !== u ? o : "100vw",
              srcSet: l
                .map(
                  (t, n) =>
                    a({ config: e, src: i, quality: s, width: t }) +
                    " " +
                    ("w" === u ? t : n + 1) +
                    u
                )
                .join(", "),
              src: a({ config: e, src: i, quality: s, width: l[h] }),
            };
          })({
            config: a,
            src: h,
            unoptimized: c,
            width: _,
            quality: z,
            sizes: d,
            loader: I,
          });
        return {
          props: {
            ...j,
            loading: W ? "lazy" : m,
            fetchPriority: E,
            width: _,
            height: $,
            decoding: "async",
            className: f,
            style: { ...Y, ...K },
            sizes: q.sizes,
            srcSet: q.srcSet,
            src: w || q.src,
          },
          meta: { unoptimized: c, priority: p, placeholder: T, fill: x },
        };
      }
    },
    8321: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return f;
          },
          defaultHead: function () {
            return d;
          },
        });
      let n = i(1609),
        r = i(6720),
        s = i(7437),
        o = r._(i(2265)),
        a = n._(i(5960)),
        l = i(2901),
        u = i(6590),
        h = i(687);
      function d(t) {
        void 0 === t && (t = !1);
        let e = [(0, s.jsx)("meta", { charSet: "utf-8" })];
        return (
          t ||
            e.push(
              (0, s.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          e
        );
      }
      function c(t, e) {
        return "string" == typeof e || "number" == typeof e
          ? t
          : e.type === o.default.Fragment
          ? t.concat(
              o.default.Children.toArray(e.props.children).reduce(
                (t, e) =>
                  "string" == typeof e || "number" == typeof e
                    ? t
                    : t.concat(e),
                []
              )
            )
          : t.concat(e);
      }
      i(2301);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(t, e) {
        let { inAmpMode: i } = e;
        return t
          .reduce(c, [])
          .reverse()
          .concat(d(i).reverse())
          .filter(
            (function () {
              let t = new Set(),
                e = new Set(),
                i = new Set(),
                n = {};
              return (r) => {
                let s = !0,
                  o = !1;
                if (
                  r.key &&
                  "number" != typeof r.key &&
                  r.key.indexOf("$") > 0
                ) {
                  o = !0;
                  let e = r.key.slice(r.key.indexOf("$") + 1);
                  t.has(e) ? (s = !1) : t.add(e);
                }
                switch (r.type) {
                  case "title":
                  case "base":
                    e.has(r.type) ? (s = !1) : e.add(r.type);
                    break;
                  case "meta":
                    for (let t = 0, e = p.length; t < e; t++) {
                      let e = p[t];
                      if (r.props.hasOwnProperty(e)) {
                        if ("charSet" === e) i.has(e) ? (s = !1) : i.add(e);
                        else {
                          let t = r.props[e],
                            i = n[e] || new Set();
                          ("name" !== e || !o) && i.has(t)
                            ? (s = !1)
                            : (i.add(t), (n[e] = i));
                        }
                      }
                    }
                }
                return s;
              };
            })()
          )
          .reverse()
          .map((t, e) => {
            let n = t.key || e;
            if (
              !i &&
              "link" === t.type &&
              t.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((e) => t.props.href.startsWith(e))
            ) {
              let e = { ...(t.props || {}) };
              return (
                (e["data-href"] = e.href),
                (e.href = void 0),
                (e["data-optimized-fonts"] = !0),
                o.default.cloneElement(t, e)
              );
            }
            return o.default.cloneElement(t, { key: n });
          });
      }
      let f = function (t) {
        let { children: e } = t,
          i = (0, o.useContext)(l.AmpStateContext),
          n = (0, o.useContext)(u.HeadManagerContext);
        return (0, s.jsx)(a.default, {
          reduceComponentsToState: m,
          headManager: n,
          inAmpMode: (0, h.isInAmpMode)(i),
          children: e,
        });
      };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1564: function (t, e) {
      function i(t) {
        let {
            widthInt: e,
            heightInt: i,
            blurWidth: n,
            blurHeight: r,
            blurDataURL: s,
            objectFit: o,
          } = t,
          a = n ? 40 * n : e,
          l = r ? 40 * r : i,
          u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === o
            ? "xMidYMid"
            : "cover" === o
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          s +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    3938: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(1609)._(i(2265)),
        r = i(7103),
        s = n.default.createContext(r.imageConfigDefault);
    },
    7103: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          VALID_LOADERS: function () {
            return i;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    5601: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = i(1609),
        r = i(497),
        s = i(8173),
        o = n._(i(1241));
      function a(t) {
        let { props: e } = (0, r.getImgProps)(t, {
          defaultLoader: o.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [t, i] of Object.entries(e)) void 0 === i && delete e[t];
        return { props: e };
      }
      let l = s.Image;
    },
    1241: function (t, e) {
      function i(t) {
        let { config: e, src: i, width: n, quality: r } = t;
        return (
          i
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (i.__next_img_default = !0);
      let n = i;
    },
    291: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = i(1609)._(i(2265)).default.createContext(null);
    },
    1142: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          formatUrl: function () {
            return s;
          },
          formatWithValidation: function () {
            return a;
          },
          urlObjectKeys: function () {
            return o;
          },
        });
      let n = i(6720)._(i(8323)),
        r = /https?|ftp|gopher|file/;
      function s(t) {
        let { auth: e, hostname: i } = t,
          s = t.protocol || "",
          o = t.pathname || "",
          a = t.hash || "",
          l = t.query || "",
          u = !1;
        (e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : ""),
          t.host
            ? (u = e + t.host)
            : i &&
              ((u = e + (~i.indexOf(":") ? "[" + i + "]" : i)),
              t.port && (u += ":" + t.port)),
          l &&
            "object" == typeof l &&
            (l = String(n.urlQueryToSearchParams(l)));
        let h = t.search || (l && "?" + l) || "";
        return (
          s && !s.endsWith(":") && (s += ":"),
          t.slashes || ((!s || r.test(s)) && !1 !== u)
            ? ((u = "//" + (u || "")), o && "/" !== o[0] && (o = "/" + o))
            : u || (u = ""),
          a && "#" !== a[0] && (a = "#" + a),
          h && "?" !== h[0] && (h = "?" + h),
          "" +
            s +
            u +
            (o = o.replace(/[?#]/g, encodeURIComponent)) +
            (h = h.replace("#", "%23")) +
            a
        );
      }
      let o = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function a(t) {
        return s(t);
      }
    },
    9195: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return r.isDynamicRoute;
          },
        });
      let n = i(9089),
        r = i(8083);
    },
    20: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(1533),
        r = i(3169);
      function s(t, e, i) {
        let s = "",
          o = (0, r.getRouteRegex)(t),
          a = o.groups,
          l = (e !== t ? (0, n.getRouteMatcher)(o)(e) : "") || i;
        s = t;
        let u = Object.keys(a);
        return (
          u.every((t) => {
            let e = l[t] || "",
              { repeat: i, optional: n } = a[t],
              r = "[" + (i ? "..." : "") + t + "]";
            return (
              n && (r = (e ? "" : "/") + "[" + r + "]"),
              i && !Array.isArray(e) && (e = [e]),
              (n || t in l) &&
                (s =
                  s.replace(
                    r,
                    i
                      ? e.map((t) => encodeURIComponent(t)).join("/")
                      : encodeURIComponent(e)
                  ) || "/")
            );
          }) || (s = ""),
          { params: u, result: s }
        );
      }
    },
    8083: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(2269),
        r = /\/\[[^/]+?\](?=\/|$)/;
      function s(t) {
        return (
          (0, n.isInterceptionRouteAppPath)(t) &&
            (t = (0, n.extractInterceptionRouteInformation)(
              t
            ).interceptedRoute),
          r.test(t)
        );
      }
    },
    8029: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = i(3461),
        r = i(9404);
      function s(t) {
        if (!(0, n.isAbsoluteUrl)(t)) return !0;
        try {
          let e = (0, n.getLocationOrigin)(),
            i = new URL(t, e);
          return i.origin === e && (0, r.hasBasePath)(i.pathname);
        } catch (t) {
          return !1;
        }
      }
    },
    5519: function (t, e) {
      function i(t, e) {
        let i = {};
        return (
          Object.keys(t).forEach((n) => {
            e.includes(n) || (i[n] = t[n]);
          }),
          i
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "omit", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
    },
    8323: function (t, e) {
      function i(t) {
        let e = {};
        return (
          t.forEach((t, i) => {
            void 0 === e[i]
              ? (e[i] = t)
              : Array.isArray(e[i])
              ? e[i].push(t)
              : (e[i] = [e[i], t]);
          }),
          e
        );
      }
      function n(t) {
        return "string" != typeof t &&
          ("number" != typeof t || isNaN(t)) &&
          "boolean" != typeof t
          ? ""
          : String(t);
      }
      function r(t) {
        let e = new URLSearchParams();
        return (
          Object.entries(t).forEach((t) => {
            let [i, r] = t;
            Array.isArray(r)
              ? r.forEach((t) => e.append(i, n(t)))
              : e.set(i, n(r));
          }),
          e
        );
      }
      function s(t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), n = 1;
          n < e;
          n++
        )
          i[n - 1] = arguments[n];
        return (
          i.forEach((e) => {
            Array.from(e.keys()).forEach((e) => t.delete(e)),
              e.forEach((e, i) => t.append(i, e));
          }),
          t
        );
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          assign: function () {
            return s;
          },
          searchParamsToUrlQuery: function () {
            return i;
          },
          urlQueryToSearchParams: function () {
            return r;
          },
        });
    },
    1533: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let n = i(3461);
      function r(t) {
        let { re: e, groups: i } = t;
        return (t) => {
          let r = e.exec(t);
          if (!r) return !1;
          let s = (t) => {
              try {
                return decodeURIComponent(t);
              } catch (t) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            o = {};
          return (
            Object.keys(i).forEach((t) => {
              let e = i[t],
                n = r[e.pos];
              void 0 !== n &&
                (o[t] = ~n.indexOf("/")
                  ? n.split("/").map((t) => s(t))
                  : e.repeat
                  ? [s(n)]
                  : s(n));
            }),
            o
          );
        };
      }
    },
    3169: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          getNamedMiddlewareRegex: function () {
            return c;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return l;
          },
        });
      let n = i(2269),
        r = i(1943),
        s = i(7741);
      function o(t) {
        let e = t.startsWith("[") && t.endsWith("]");
        e && (t = t.slice(1, -1));
        let i = t.startsWith("...");
        return i && (t = t.slice(3)), { key: t, repeat: i, optional: e };
      }
      function a(t) {
        let e = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
          i = {},
          a = 1;
        return {
          parameterizedRoute: e
            .map((t) => {
              let e = n.INTERCEPTION_ROUTE_MARKERS.find((e) => t.startsWith(e)),
                s = t.match(/\[((?:\[.*\])|.+)\]/);
              if (e && s) {
                let { key: t, optional: n, repeat: l } = o(s[1]);
                return (
                  (i[t] = { pos: a++, repeat: l, optional: n }),
                  "/" + (0, r.escapeStringRegexp)(e) + "([^/]+?)"
                );
              }
              if (!s) return "/" + (0, r.escapeStringRegexp)(t);
              {
                let { key: t, repeat: e, optional: n } = o(s[1]);
                return (
                  (i[t] = { pos: a++, repeat: e, optional: n }),
                  e ? (n ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: i,
        };
      }
      function l(t) {
        let { parameterizedRoute: e, groups: i } = a(t);
        return { re: RegExp("^" + e + "(?:/)?$"), groups: i };
      }
      function u(t) {
        let {
            interceptionMarker: e,
            getSafeRouteKey: i,
            segment: n,
            routeKeys: s,
            keyPrefix: a,
          } = t,
          { key: l, optional: u, repeat: h } = o(n),
          d = l.replace(/\W/g, "");
        a && (d = "" + a + d);
        let c = !1;
        (0 === d.length || d.length > 30) && (c = !0),
          isNaN(parseInt(d.slice(0, 1))) || (c = !0),
          c && (d = i()),
          a ? (s[d] = "" + a + l) : (s[d] = l);
        let p = e ? (0, r.escapeStringRegexp)(e) : "";
        return h
          ? u
            ? "(?:/" + p + "(?<" + d + ">.+?))?"
            : "/" + p + "(?<" + d + ">.+?)"
          : "/" + p + "(?<" + d + ">[^/]+?)";
      }
      function h(t, e) {
        let i;
        let o = (0, s.removeTrailingSlash)(t).slice(1).split("/"),
          a =
            ((i = 0),
            () => {
              let t = "",
                e = ++i;
              for (; e > 0; )
                (t += String.fromCharCode(97 + ((e - 1) % 26))),
                  (e = Math.floor((e - 1) / 26));
              return t;
            }),
          l = {};
        return {
          namedParameterizedRoute: o
            .map((t) => {
              let i = n.INTERCEPTION_ROUTE_MARKERS.some((e) => t.startsWith(e)),
                s = t.match(/\[((?:\[.*\])|.+)\]/);
              if (i && s) {
                let [i] = t.split(s[0]);
                return u({
                  getSafeRouteKey: a,
                  interceptionMarker: i,
                  segment: s[1],
                  routeKeys: l,
                  keyPrefix: e ? "nxtI" : void 0,
                });
              }
              return s
                ? u({
                    getSafeRouteKey: a,
                    segment: s[1],
                    routeKeys: l,
                    keyPrefix: e ? "nxtP" : void 0,
                  })
                : "/" + (0, r.escapeStringRegexp)(t);
            })
            .join(""),
          routeKeys: l,
        };
      }
      function d(t, e) {
        let i = h(t, e);
        return {
          ...l(t),
          namedRegex: "^" + i.namedParameterizedRoute + "(?:/)?$",
          routeKeys: i.routeKeys,
        };
      }
      function c(t, e) {
        let { parameterizedRoute: i } = a(t),
          { catchAll: n = !0 } = e;
        if ("/" === i) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: r } = h(t, !1);
        return { namedRegex: "^" + r + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    9089: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class i {
        insert(t) {
          this._insert(t.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(t) {
          void 0 === t && (t = "/");
          let e = [...this.children.keys()].sort();
          null !== this.slugName && e.splice(e.indexOf("[]"), 1),
            null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              e.splice(e.indexOf("[[...]]"), 1);
          let i = e
            .map((e) => this.children.get(e)._smoosh("" + t + e + "/"))
            .reduce((t, e) => [...t, ...e], []);
          if (
            (null !== this.slugName &&
              i.push(
                ...this.children
                  .get("[]")
                  ._smoosh(t + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let e = "/" === t ? "/" : t.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  e +
                  '" and "' +
                  e +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            i.unshift(e);
          }
          return (
            null !== this.restSlugName &&
              i.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(t + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              i.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            i
          );
        }
        _insert(t, e, n) {
          if (0 === t.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let r = t[0];
          if (r.startsWith("[") && r.endsWith("]")) {
            let i = r.slice(1, -1),
              o = !1;
            if (
              (i.startsWith("[") &&
                i.endsWith("]") &&
                ((i = i.slice(1, -1)), (o = !0)),
              i.startsWith("...") && ((i = i.substring(3)), (n = !0)),
              i.startsWith("[") || i.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  i +
                  "')."
              );
            if (i.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  i +
                  "')."
              );
            function s(t, i) {
              if (null !== t && t !== i)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    t +
                    "' !== '" +
                    i +
                    "')."
                );
              e.forEach((t) => {
                if (t === i)
                  throw Error(
                    'You cannot have the same slug name "' +
                      i +
                      '" repeat within a single dynamic path'
                  );
                if (t.replace(/\W/g, "") === r.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      t +
                      '" and "' +
                      i +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                e.push(i);
            }
            if (n) {
              if (o) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      t[0] +
                      '" ).'
                  );
                s(this.optionalRestSlugName, i),
                  (this.optionalRestSlugName = i),
                  (r = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      t[0] +
                      '").'
                  );
                s(this.restSlugName, i), (this.restSlugName = i), (r = "[...]");
              }
            } else {
              if (o)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    t[0] +
                    '").'
                );
              s(this.slugName, i), (this.slugName = i), (r = "[]");
            }
          }
          this.children.has(r) || this.children.set(r, new i()),
            this.children.get(r)._insert(t.slice(1), e, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function n(t) {
        let e = new i();
        return t.forEach((t) => e.insert(t)), e.smoosh();
      }
    },
    5960: function (t, e, i) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = i(2265),
        r = "undefined" == typeof window,
        s = r ? () => {} : n.useLayoutEffect,
        o = r ? () => {} : n.useEffect;
      function a(t) {
        let { headManager: e, reduceComponentsToState: i } = t;
        function a() {
          if (e && e.mountedInstances) {
            let r = n.Children.toArray(
              Array.from(e.mountedInstances).filter(Boolean)
            );
            e.updateHead(i(r, t));
          }
        }
        if (r) {
          var l;
          null == e || null == (l = e.mountedInstances) || l.add(t.children),
            a();
        }
        return (
          s(() => {
            var i;
            return (
              null == e ||
                null == (i = e.mountedInstances) ||
                i.add(t.children),
              () => {
                var i;
                null == e ||
                  null == (i = e.mountedInstances) ||
                  i.delete(t.children);
              }
            );
          }),
          s(
            () => (
              e && (e._pendingUpdate = a),
              () => {
                e && (e._pendingUpdate = a);
              }
            )
          ),
          o(
            () => (
              e &&
                e._pendingUpdate &&
                (e._pendingUpdate(), (e._pendingUpdate = null)),
              () => {
                e &&
                  e._pendingUpdate &&
                  (e._pendingUpdate(), (e._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    3461: function (t, e) {
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          DecodeError: function () {
            return m;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return v;
          },
          NormalizeError: function () {
            return f;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return c;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return i;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return o;
          },
          getURL: function () {
            return a;
          },
          isAbsoluteUrl: function () {
            return s;
          },
          isResSent: function () {
            return u;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return h;
          },
          stringifyError: function () {
            return x;
          },
        });
      let i = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(t) {
        let e,
          i = !1;
        return function () {
          for (var n = arguments.length, r = Array(n), s = 0; s < n; s++)
            r[s] = arguments[s];
          return i || ((i = !0), (e = t(...r))), e;
        };
      }
      let r = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        s = (t) => r.test(t);
      function o() {
        let { protocol: t, hostname: e, port: i } = window.location;
        return t + "//" + e + (i ? ":" + i : "");
      }
      function a() {
        let { href: t } = window.location,
          e = o();
        return t.substring(e.length);
      }
      function l(t) {
        return "string" == typeof t ? t : t.displayName || t.name || "Unknown";
      }
      function u(t) {
        return t.finished || t.headersSent;
      }
      function h(t) {
        let e = t.split("?");
        return (
          e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (e[1] ? "?" + e.slice(1).join("?") : "")
        );
      }
      async function d(t, e) {
        let i = e.res || (e.ctx && e.ctx.res);
        if (!t.getInitialProps)
          return e.ctx && e.Component
            ? { pageProps: await d(e.Component, e.ctx) }
            : {};
        let n = await t.getInitialProps(e);
        if (i && u(i)) return n;
        if (!n)
          throw Error(
            '"' +
              l(t) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          );
        return n;
      }
      let c = "undefined" != typeof performance,
        p =
          c &&
          ["mark", "measure", "getEntriesByName"].every(
            (t) => "function" == typeof performance[t]
          );
      class m extends Error {}
      class f extends Error {}
      class g extends Error {
        constructor(t) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + t);
        }
      }
      class v extends Error {
        constructor(t, e) {
          super(),
            (this.message =
              "Failed to load static file for page: " + t + " " + e);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function x(t) {
        return JSON.stringify({ message: t.message, stack: t.stack });
      }
    },
    1932: function (t, e, i) {
      var n = i(2265),
        r = n && "object" == typeof n && "default" in n ? n : { default: n };
      !(function (t) {
        if (!t || "undefined" == typeof window) return;
        let e = document.createElement("style");
        e.setAttribute("type", "text/css"),
          (e.innerHTML = t),
          document.head.appendChild(e);
      })(
        '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}'
      );
      let s = n.forwardRef(function (t, e) {
        let {
            style: i = {},
            className: s = "",
            autoFill: o = !1,
            play: a = !0,
            pauseOnHover: l = !1,
            pauseOnClick: u = !1,
            direction: h = "left",
            speed: d = 50,
            delay: c = 0,
            loop: p = 0,
            gradient: m = !1,
            gradientColor: f = "white",
            gradientWidth: g = 200,
            onFinish: v,
            onCycleComplete: y,
            onMount: x,
            children: b,
          } = t,
          [w, P] = n.useState(0),
          [S, T] = n.useState(0),
          [A, E] = n.useState(1),
          [M, C] = n.useState(!1),
          R = n.useRef(null),
          V = e || R,
          D = n.useRef(null),
          j = n.useCallback(() => {
            if (D.current && V.current) {
              let t = V.current.getBoundingClientRect(),
                e = D.current.getBoundingClientRect(),
                i = t.width,
                n = e.width;
              ("up" === h || "down" === h) && ((i = t.height), (n = e.height)),
                o && i && n ? E(n < i ? Math.ceil(i / n) : 1) : E(1),
                P(i),
                T(n);
            }
          }, [o, V, h]);
        n.useEffect(() => {
          if (M && (j(), D.current && V.current)) {
            let t = new ResizeObserver(() => j());
            return (
              t.observe(V.current),
              t.observe(D.current),
              () => {
                t && t.disconnect();
              }
            );
          }
        }, [j, V, M]),
          n.useEffect(() => {
            j();
          }, [j, b]),
          n.useEffect(() => {
            C(!0);
          }, []),
          n.useEffect(() => {
            "function" == typeof x && x();
          }, []);
        let k = n.useMemo(
            () => (o ? (S * A) / d : S < w ? w / d : S / d),
            [o, w, S, A, d]
          ),
          L = n.useMemo(
            () =>
              Object.assign(Object.assign({}, i), {
                "--pause-on-hover": !a || l ? "paused" : "running",
                "--pause-on-click": !a || (l && !u) || u ? "paused" : "running",
                "--width": "up" === h || "down" === h ? "100vh" : "100%",
                "--transform":
                  "up" === h
                    ? "rotate(-90deg)"
                    : "down" === h
                    ? "rotate(90deg)"
                    : "none",
              }),
            [i, a, l, u, h]
          ),
          O = n.useMemo(
            () => ({
              "--gradient-color": f,
              "--gradient-width": "number" == typeof g ? "".concat(g, "px") : g,
            }),
            [f, g]
          ),
          F = n.useMemo(
            () => ({
              "--play": a ? "running" : "paused",
              "--direction": "left" === h ? "normal" : "reverse",
              "--duration": "".concat(k, "s"),
              "--delay": "".concat(c, "s"),
              "--iteration-count": p ? "".concat(p) : "infinite",
              "--min-width": o ? "auto" : "100%",
            }),
            [a, h, k, c, p, o]
          ),
          B = n.useMemo(
            () => ({
              "--transform":
                "up" === h
                  ? "rotate(90deg)"
                  : "down" === h
                  ? "rotate(-90deg)"
                  : "none",
            }),
            [h]
          ),
          I = n.useCallback(
            (t) =>
              [...Array(Number.isFinite(t) && t >= 0 ? t : 0)].map((t, e) =>
                r.default.createElement(
                  n.Fragment,
                  { key: e },
                  n.Children.map(b, (t) =>
                    r.default.createElement(
                      "div",
                      { style: B, className: "rfm-child" },
                      t
                    )
                  )
                )
              ),
            [B, b]
          );
        return M
          ? r.default.createElement(
              "div",
              { ref: V, style: L, className: "rfm-marquee-container " + s },
              m &&
                r.default.createElement("div", {
                  style: O,
                  className: "rfm-overlay",
                }),
              r.default.createElement(
                "div",
                {
                  className: "rfm-marquee",
                  style: F,
                  onAnimationIteration: y,
                  onAnimationEnd: v,
                },
                r.default.createElement(
                  "div",
                  { className: "rfm-initial-child-container", ref: D },
                  n.Children.map(b, (t) =>
                    r.default.createElement(
                      "div",
                      { style: B, className: "rfm-child" },
                      t
                    )
                  )
                ),
                I(A - 1)
              ),
              r.default.createElement(
                "div",
                { className: "rfm-marquee", style: F },
                I(A)
              )
            )
          : null;
      });
      e.Z = s;
    },
    3162: function (t, e, i) {
      let n;
      function r(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, {
        E: function () {
          return sc;
        },
      });
      let s = (t) => Array.isArray(t);
      function o(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function a(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function l(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function u(t, e, i, n) {
        if ("function" == typeof e) {
          let [r, s] = l(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [r, s] = l(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        return e;
      }
      function h(t, e, i) {
        let n = t.getProps();
        return u(n, e, void 0 !== i ? i : n.custom, t);
      }
      let d = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        c = ["initial", ...d],
        p = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        m = new Set(p),
        f = (t) => 1e3 * t,
        g = (t) => t / 1e3,
        v = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        y = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        x = { type: "keyframes", duration: 0.8 },
        b = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        w = (t, { keyframes: e }) =>
          e.length > 2
            ? x
            : m.has(t)
            ? t.startsWith("scale")
              ? y(e[1])
              : v
            : b;
      function P(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let S = { skipAnimations: !1, useManualTiming: !1 },
        T = { current: !1 },
        A = (t) => null !== t;
      function E(t, { repeat: e, repeatType: i = "loop" }, n) {
        let r = t.filter(A),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== n ? n : r[s];
      }
      let M = (t) => t,
        C = [
          "read",
          "resolveKeyframes",
          "update",
          "preRender",
          "render",
          "postRender",
        ];
      function R(t, e) {
        let i = !1,
          n = !0,
          r = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (i = !0),
          o = C.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  r = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  s.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, r = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return r && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      r = !0;
                      return;
                    }
                    (n = !0),
                      ([e, i] = [i, e]),
                      e.forEach(a),
                      e.clear(),
                      (n = !1),
                      r && ((r = !1), l.process(t));
                  },
                };
                return l;
              })(s)),
              t
            ),
            {}
          ),
          {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: h,
            render: d,
            postRender: c,
          } = o,
          p = () => {
            let s = S.useManualTiming ? r.timestamp : performance.now();
            (i = !1),
              (r.delta = n
                ? 1e3 / 60
                : Math.max(Math.min(s - r.timestamp, 40), 1)),
              (r.timestamp = s),
              (r.isProcessing = !0),
              a.process(r),
              l.process(r),
              u.process(r),
              h.process(r),
              d.process(r),
              c.process(r),
              (r.isProcessing = !1),
              i && e && ((n = !1), t(p));
          },
          m = () => {
            (i = !0), (n = !0), r.isProcessing || t(p);
          };
        return {
          schedule: C.reduce((t, e) => {
            let n = o[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || m(), n.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < C.length; e++) o[C[e]].cancel(t);
          },
          state: r,
          steps: o,
        };
      }
      let {
          schedule: V,
          cancel: D,
          state: j,
          steps: k,
        } = R(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : M,
          !0
        ),
        L = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function O(t, e, i, n) {
        if (t === e && i === n) return M;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do (s = L((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : L(r(t), e, n));
      }
      let F = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        B = (t) => (e) => 1 - t(1 - e),
        I = O(0.33, 1.53, 0.69, 0.99),
        U = B(I),
        N = F(U),
        _ = (t) =>
          (t *= 2) < 1 ? 0.5 * U(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        $ = (t) => 1 - Math.sin(Math.acos(t)),
        W = B($),
        z = F($),
        Y = (t) => /^0[^.\s]+$/u.test(t),
        H = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        K = (t) => (e) => "string" == typeof e && e.startsWith(t),
        q = K("--"),
        X = K("var(--"),
        G = (t) => !!X(t) && Z.test(t.split("/*")[0].trim()),
        Z =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        J = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        Q = (t, e, i) => (i > e ? e : i < t ? t : i),
        tt = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        te = { ...tt, transform: (t) => Q(0, 1, t) },
        ti = { ...tt, default: 1 },
        tn = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        tr = tn("deg"),
        ts = tn("%"),
        to = tn("px"),
        ta = tn("vh"),
        tl = tn("vw"),
        tu = {
          ...ts,
          parse: (t) => ts.parse(t) / 100,
          transform: (t) => ts.transform(100 * t),
        },
        th = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        td = (t) => t === tt || t === to,
        tc = (t, e) => parseFloat(t.split(", ")[e]),
        tp =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return tc(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? tc(e[1], t) : 0;
            }
          },
        tm = new Set(["x", "y", "z"]),
        tf = p.filter((t) => !tm.has(t)),
        tg = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: tp(4, 13),
          y: tp(5, 14),
        };
      (tg.translateX = tg.x), (tg.translateY = tg.y);
      let tv = (t) => (e) => e.test(t),
        ty = [
          tt,
          to,
          ts,
          tr,
          tl,
          ta,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        tx = (t) => ty.find(tv(t)),
        tb = new Set(),
        tw = !1,
        tP = !1;
      function tS() {
        if (tP) {
          let t = Array.from(tb).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                tf.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (tP = !1), (tw = !1), tb.forEach((t) => t.complete()), tb.clear();
      }
      function tT() {
        tb.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (tP = !0);
        });
      }
      class tA {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (tb.add(this),
                tw || ((tw = !0), V.read(tT), V.resolveKeyframes(tS)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            tb.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), tb.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let tE = (t) => Math.round(1e5 * t) / 1e5,
        tM = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tC =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tR = (t, e) => (i) =>
          !!(
            ("string" == typeof i && tC.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        tV = (t, e, i) => (n) => {
          if ("string" != typeof n) return n;
          let [r, s, o, a] = n.match(tM);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tD = (t) => Q(0, 255, t),
        tj = { ...tt, transform: (t) => Math.round(tD(t)) },
        tk = {
          test: tR("rgb", "red"),
          parse: tV("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            tj.transform(t) +
            ", " +
            tj.transform(e) +
            ", " +
            tj.transform(i) +
            ", " +
            tE(te.transform(n)) +
            ")",
        },
        tL = {
          test: tR("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (r = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (r = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: tk.transform,
        },
        tO = {
          test: tR("hsl", "hue"),
          parse: tV("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            ts.transform(tE(e)) +
            ", " +
            ts.transform(tE(i)) +
            ", " +
            tE(te.transform(n)) +
            ")",
        },
        tF = {
          test: (t) => tk.test(t) || tL.test(t) || tO.test(t),
          parse: (t) =>
            tk.test(t) ? tk.parse(t) : tO.test(t) ? tO.parse(t) : tL.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? tk.transform(t)
              : tO.transform(t),
        },
        tB =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tI = "number",
        tU = "color",
        tN =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function t_(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          r = [],
          s = 0,
          o = e
            .replace(
              tN,
              (t) => (
                tF.test(t)
                  ? (n.color.push(s), r.push(tU), i.push(tF.parse(t)))
                  : t.startsWith("var(")
                  ? (n.var.push(s), r.push("var"), i.push(t))
                  : (n.number.push(s), r.push(tI), i.push(parseFloat(t))),
                ++s,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: n, types: r };
      }
      function t$(t) {
        return t_(t).values;
      }
      function tW(t) {
        let { split: e, types: i } = t_(t),
          n = e.length;
        return (t) => {
          let r = "";
          for (let s = 0; s < n; s++)
            if (((r += e[s]), void 0 !== t[s])) {
              let e = i[s];
              e === tI
                ? (r += tE(t[s]))
                : e === tU
                ? (r += tF.transform(t[s]))
                : (r += t[s]);
            }
          return r;
        };
      }
      let tz = (t) => ("number" == typeof t ? 0 : t),
        tY = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(tM)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(tB)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: t$,
          createTransformer: tW,
          getAnimatableNone: function (t) {
            let e = t$(t);
            return tW(t)(e.map(tz));
          },
        },
        tH = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tK(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(tM) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = tH.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let tq = /\b([a-z-]*)\(.*?\)/gu,
        tX = {
          ...tY,
          getAnimatableNone: (t) => {
            let e = t.match(tq);
            return e ? e.map(tK).join(" ") : t;
          },
        },
        tG = { ...tt, transform: Math.round },
        tZ = {
          borderWidth: to,
          borderTopWidth: to,
          borderRightWidth: to,
          borderBottomWidth: to,
          borderLeftWidth: to,
          borderRadius: to,
          radius: to,
          borderTopLeftRadius: to,
          borderTopRightRadius: to,
          borderBottomRightRadius: to,
          borderBottomLeftRadius: to,
          width: to,
          maxWidth: to,
          height: to,
          maxHeight: to,
          top: to,
          right: to,
          bottom: to,
          left: to,
          padding: to,
          paddingTop: to,
          paddingRight: to,
          paddingBottom: to,
          paddingLeft: to,
          margin: to,
          marginTop: to,
          marginRight: to,
          marginBottom: to,
          marginLeft: to,
          backgroundPositionX: to,
          backgroundPositionY: to,
          rotate: tr,
          rotateX: tr,
          rotateY: tr,
          rotateZ: tr,
          scale: ti,
          scaleX: ti,
          scaleY: ti,
          scaleZ: ti,
          skew: tr,
          skewX: tr,
          skewY: tr,
          distance: to,
          translateX: to,
          translateY: to,
          translateZ: to,
          x: to,
          y: to,
          z: to,
          perspective: to,
          transformPerspective: to,
          opacity: te,
          originX: tu,
          originY: tu,
          originZ: to,
          zIndex: tG,
          size: to,
          fillOpacity: te,
          strokeOpacity: te,
          numOctaves: tG,
        },
        tJ = {
          ...tZ,
          color: tF,
          backgroundColor: tF,
          outlineColor: tF,
          fill: tF,
          stroke: tF,
          borderColor: tF,
          borderTopColor: tF,
          borderRightColor: tF,
          borderBottomColor: tF,
          borderLeftColor: tF,
          filter: tX,
          WebkitFilter: tX,
        },
        tQ = (t) => tJ[t];
      function t0(t, e) {
        let i = tQ(t);
        return (
          i !== tX && (i = tY),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let t1 = new Set(["auto", "none", "0"]);
      class t2 extends tA {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && G((n = n.trim()))) {
              let r = (function t(e, i, n = 1) {
                M(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (t) {
                  let e = J.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!r) return;
                let o = window.getComputedStyle(i).getPropertyValue(r);
                if (o) {
                  let t = o.trim();
                  return H(t) ? parseFloat(t) : t;
                }
                return G(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !th.has(i) || 2 !== t.length))
            return;
          let [n, r] = t,
            s = tx(n),
            o = tx(r);
          if (s !== o) {
            if (td(s) && td(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || Y(n)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                "string" == typeof e &&
                  !t1.has(e) &&
                  t_(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = t0(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = tg[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = tg[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function t5(t) {
        return "function" == typeof t;
      }
      function t3() {
        n = void 0;
      }
      let t9 = {
          now: () => (
            void 0 === n &&
              t9.set(
                j.isProcessing || S.useManualTiming
                  ? j.timestamp
                  : performance.now()
              ),
            n
          ),
          set: (t) => {
            (n = t), queueMicrotask(t3);
          },
        },
        t6 = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (tY.test(t) || "0" === t) &&
              !t.startsWith("url("))
          );
      class t4 {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = t9.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (tT(), tS()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = t9.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: r,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = t6(r, e),
                a = t6(s, e);
              return (
                M(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || t5(i)) && n))
              );
            })(t, i, n, r)
          ) {
            if (T.current || !s) {
              null == a || a(E(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      let t8 = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n;
        },
        t7 = (t, e, i = 10) => {
          let n = "",
            r = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < r; e++) n += t(t8(0, r - 1, e)) + ", ";
          return `linear(${n.substring(0, n.length - 2)})`;
        };
      function et(t, e, i) {
        var n, r;
        let s = Math.max(e - 5, 0);
        return (n = i - t(s)), (r = e - s) ? (1e3 / r) * n : 0;
      }
      let ee = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function ei(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      function en(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let er = ["duration", "bounce"],
        es = ["stiffness", "damping", "mass"];
      function eo(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ea(t = ee.visualDuration, e = ee.bounce) {
        let i;
        let n =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: r, restDelta: s } = n,
          o = n.keyframes[0],
          a = n.keyframes[n.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: h,
            mass: d,
            duration: c,
            velocity: p,
            isResolvedFromDuration: m,
          } = (function (t) {
            let e = {
              velocity: ee.velocity,
              stiffness: ee.stiffness,
              damping: ee.damping,
              mass: ee.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!eo(t, es) && eo(t, er)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  n = i * i,
                  r = 2 * Q(0.05, 1, 1 - t.bounce) * Math.sqrt(n);
                e = { ...e, mass: ee.mass, stiffness: n, damping: r };
              } else {
                let i = (function ({
                  duration: t = ee.duration,
                  bounce: e = ee.bounce,
                  velocity: i = ee.velocity,
                  mass: n = ee.mass,
                }) {
                  let r, s;
                  M(
                    t <= f(ee.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let o = 1 - e;
                  (o = Q(ee.minDamping, ee.maxDamping, o)),
                    (t = Q(ee.minDuration, ee.maxDuration, g(t))),
                    o < 1
                      ? ((r = (e) => {
                          let n = e * o,
                            r = n * t;
                          return 0.001 - ((n - i) / ei(e, o)) * Math.exp(-r);
                        }),
                        (s = (e) => {
                          let n = e * o * t,
                            s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                            a = ei(Math.pow(e, 2), o);
                          return (
                            ((n * i + i - s) *
                              Math.exp(-n) *
                              (-r(e) + 0.001 > 0 ? -1 : 1)) /
                            a
                          );
                        }))
                      : ((r = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (s = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let a = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(r, s, 5 / t);
                  if (((t = f(t)), isNaN(a)))
                    return {
                      stiffness: ee.stiffness,
                      damping: ee.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(a, 2) * n;
                    return {
                      stiffness: e,
                      damping: 2 * o * Math.sqrt(n * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: ee.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...n, velocity: -g(n.velocity || 0) }),
          v = p || 0,
          y = h / (2 * Math.sqrt(u * d)),
          x = a - o,
          b = g(Math.sqrt(u / d)),
          w = 5 > Math.abs(x);
        if (
          (r || (r = w ? ee.restSpeed.granular : ee.restSpeed.default),
          s || (s = w ? ee.restDelta.granular : ee.restDelta.default),
          y < 1)
        ) {
          let t = ei(b, y);
          i = (e) =>
            a -
            Math.exp(-y * b * e) *
              (((v + y * b * x) / t) * Math.sin(t * e) + x * Math.cos(t * e));
        } else if (1 === y)
          i = (t) => a - Math.exp(-b * t) * (x + (v + b * x) * t);
        else {
          let t = b * Math.sqrt(y * y - 1);
          i = (e) => {
            let i = Math.exp(-y * b * e),
              n = Math.min(t * e, 300);
            return (
              a -
              (i * ((v + y * b * x) * Math.sinh(n) + t * x * Math.cosh(n))) / t
            );
          };
        }
        let P = {
          calculatedDuration: (m && c) || null,
          next: (t) => {
            let e = i(t);
            if (m) l.done = t >= c;
            else {
              let n = 0;
              y < 1 && (n = 0 === t ? f(v) : et(i, t, e));
              let o = Math.abs(n) <= r,
                u = Math.abs(a - e) <= s;
              l.done = o && u;
            }
            return (l.value = l.done ? a : e), l;
          },
          toString: () => {
            let t = Math.min(en(P), 2e4),
              e = t7((e) => P.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return P;
      }
      function el({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          v = i * e,
          y = p + v,
          x = void 0 === o ? y : o(y);
        x !== y && (v = x - p);
        let b = (t) => -v * Math.exp(-t / n),
          w = (t) => x + b(t),
          P = (t) => {
            let e = b(t),
              i = w(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? x : i);
          },
          S = (t) => {
            f(m.value) &&
              ((d = t),
              (c = ea({
                keyframes: [m.value, g(m.value)],
                velocity: et(w, t, m.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), P(t), S(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || P(t), m);
            },
          }
        );
      }
      let eu = O(0.42, 0, 1, 1),
        eh = O(0, 0, 0.58, 1),
        ed = O(0.42, 0, 0.58, 1),
        ec = (t) => Array.isArray(t) && "number" != typeof t[0],
        ep = (t) => Array.isArray(t) && "number" == typeof t[0],
        em = {
          linear: M,
          easeIn: eu,
          easeInOut: ed,
          easeOut: eh,
          circIn: $,
          circInOut: z,
          circOut: W,
          backIn: U,
          backInOut: N,
          backOut: I,
          anticipate: _,
        },
        ef = (t) => {
          if (ep(t)) {
            M(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return O(e, i, n, r);
          }
          return "string" == typeof t
            ? (M(void 0 !== em[t], `Invalid easing type '${t}'`), em[t])
            : t;
        },
        eg = (t, e) => (i) => e(t(i)),
        ev = (...t) => t.reduce(eg),
        ey = (t, e, i) => t + (e - t) * i;
      function ex(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function eb(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let ew = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        eP = [tL, tk, tO],
        eS = (t) => eP.find((e) => e.test(t));
      function eT(t) {
        let e = eS(t);
        if (
          (M(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tO &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (r = ex(a, n, t + 1 / 3)),
                  (s = ex(a, n, t)),
                  (o = ex(a, n, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let eA = (t, e) => {
          let i = eT(t),
            n = eT(e);
          if (!i || !n) return eb(t, e);
          let r = { ...i };
          return (t) => (
            (r.red = ew(i.red, n.red, t)),
            (r.green = ew(i.green, n.green, t)),
            (r.blue = ew(i.blue, n.blue, t)),
            (r.alpha = ey(i.alpha, n.alpha, t)),
            tk.transform(r)
          );
        },
        eE = new Set(["none", "hidden"]);
      function eM(t, e) {
        return (i) => ey(t, e, i);
      }
      function eC(t) {
        return "number" == typeof t
          ? eM
          : "string" == typeof t
          ? G(t)
            ? eb
            : tF.test(t)
            ? eA
            : eD
          : Array.isArray(t)
          ? eR
          : "object" == typeof t
          ? tF.test(t)
            ? eA
            : eV
          : eb;
      }
      function eR(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => eC(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function eV(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = eC(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let eD = (t, e) => {
        let i = tY.createTransformer(e),
          n = t_(t),
          r = t_(e);
        return n.indexes.var.length === r.indexes.var.length &&
          n.indexes.color.length === r.indexes.color.length &&
          n.indexes.number.length >= r.indexes.number.length
          ? (eE.has(t) && !r.values.length) || (eE.has(e) && !n.values.length)
            ? eE.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : ev(
                eR(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[o]++;
                    }
                    return n;
                  })(n, r),
                  r.values
                ),
                i
              )
          : (M(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            eb(t, e));
      };
      function ej(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? ey(t, e, i)
          : eC(t)(t, e);
      }
      function ek({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = ec(n) ? n.map(ef) : ef(n),
          s = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
            let s = t.length;
            if (
              (M(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && t[0] === t[1]) return () => e[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let n = [],
                  r = i || ej,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = r(t[i], t[i + 1]);
                  e && (s = ev(Array.isArray(e) ? e[i] || M : e, s)), n.push(s);
                }
                return n;
              })(e, n, r),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let n = t8(t[i], t[i + 1], e);
                return o[i](n);
              };
            return i ? (e) => l(Q(t[0], t[s - 1], e)) : l;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = t8(0, e, n);
                        t.push(ey(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(r)
                ? r
                : e.map(() => r || ed).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s),
        };
      }
      let eL = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => V.update(e, !0),
            stop: () => D(e),
            now: () => (j.isProcessing ? j.timestamp : t9.now()),
          };
        },
        eO = { decay: el, inertia: el, tween: ek, keyframes: ek, spring: ea },
        eF = (t) => t / 100;
      class eB extends t4 {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: n,
              keyframes: r,
            } = this.options,
            s = (null == n ? void 0 : n.KeyframeResolver) || tA;
          (this.resolver = new s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = t5(n) ? n : eO[n] || ek;
          l !== ek &&
            "number" != typeof t[0] &&
            ((e = ev(eF, ej(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration && (u.calculatedDuration = en(u));
          let { calculatedDuration: h } = u,
            d = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: d,
            totalDuration: d * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            v = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            x = r;
          if (c) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (x = s)),
              (y = Q(0, 1, i) * h);
          }
          let b = v ? { done: !1, value: a[0] } : x.next(y);
          o && (b.value = o(b.value));
          let { done: w } = b;
          v ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            P && void 0 !== n && (b.value = E(a, this.options, n)),
            f && f(b.value),
            P && this.finish(),
            b
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? g(t.calculatedDuration) : 0;
        }
        get time() {
          return g(this.currentTime);
        }
        set time(t) {
          (t = f(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = g(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = eL, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let eI = new Set(["opacity", "clipPath", "filter", "transform"]);
      function eU(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let eN = { linearEasing: void 0 },
        e_ = (function (t, e) {
          let i = eU(t);
          return () => {
            var t;
            return null !== (t = eN[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        e$ = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        eW = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: e$([0, 0.65, 0.55, 1]),
          circOut: e$([0.55, 0, 1, 0.45]),
          backIn: e$([0.31, 0.01, 0.66, -0.59]),
          backOut: e$([0.33, 1.53, 0.69, 0.99]),
        };
      function ez(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let eY = eU(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        eH = { anticipate: _, backInOut: N, circInOut: z };
      class eK extends t4 {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: n,
            keyframes: r,
          } = this.options;
          (this.resolver = new t2(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            ("string" == typeof o && e_() && o in eH && (o = eH[o]),
            t5((n = this.options).type) ||
              "spring" === n.type ||
              !(function t(e) {
                return !!(
                  ("function" == typeof e && e_()) ||
                  !e ||
                  ("string" == typeof e && (e in eW || e_())) ||
                  ep(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(n.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new eB({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (r = h.duration),
              (s = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let d = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = (function t(e, i) {
              if (e)
                return "function" == typeof e && e_()
                  ? t7(e, i)
                  : ep(e)
                  ? e$(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || eW.easeOut)
                  : eW[e];
            })(a, r);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (d.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? (ez(d, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(E(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return g(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return g(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = f(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return M;
            let { animation: i } = e;
            ez(i, t);
          } else this.pendingTimeline = t;
          return M;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: r,
            ease: s,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new eB({
                ...u,
                keyframes: i,
                duration: n,
                type: r,
                ease: s,
                times: o,
                isGenerator: !0,
              }),
              d = f(this.time);
            t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            eY() &&
            i &&
            eI.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let eq = eU(() => void 0 !== window.ScrollTimeline);
      class eX {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            eq() && i.attachTimeline ? i.attachTimeline(t) : e(i)
          );
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let eG =
          (t, e, i, n = {}, r, s) =>
          (o) => {
            let a = P(n, t) || {},
              l = a.delay || n.delay || 0,
              { elapsed: u = 0 } = n;
            u -= f(l);
            let h = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -u,
              onUpdate: (t) => {
                e.set(t), a.onUpdate && a.onUpdate(t);
              },
              onComplete: () => {
                o(), a.onComplete && a.onComplete();
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : r,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(a) && (h = { ...h, ...w(t, h) }),
              h.duration && (h.duration = f(h.duration)),
              h.repeatDelay && (h.repeatDelay = f(h.repeatDelay)),
              void 0 !== h.from && (h.keyframes[0] = h.from);
            let d = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                ((h.duration = 0), 0 !== h.delay || (d = !0)),
              (T.current || S.skipAnimations) &&
                ((d = !0), (h.duration = 0), (h.delay = 0)),
              d && !s && void 0 !== e.get())
            ) {
              let t = E(h.keyframes, a);
              if (void 0 !== t)
                return (
                  V.update(() => {
                    h.onUpdate(t), h.onComplete();
                  }),
                  new eX([])
                );
            }
            return !s && eK.supports(h) ? new eK(h) : new eB(h);
          },
        eZ = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        eJ = (t) => (s(t) ? t[t.length - 1] || 0 : t);
      function eQ(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function e0(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class e1 {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return eQ(this.subscriptions, t), () => e0(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let e2 = (t) => !isNaN(parseFloat(t)),
        e5 = { current: void 0 };
      class e3 {
        constructor(t, e = {}) {
          (this.version = "11.15.0"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = t9.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = t9.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = e2(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new e1());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  V.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return e5.current && e5.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = t9.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function e9(t, e) {
        return new e3(t, e);
      }
      let e6 = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        e4 = "data-" + e6("framerAppearId"),
        e8 = (t) => !!(t && t.getVelocity);
      function e7(t, e) {
        let i = t.getValue("willChange");
        if (e8(i) && i.add) return i.add(e);
      }
      function it(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var s;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        n && (o = n);
        let u = [],
          d = r && t.animationState && t.animationState.getState()[r];
        for (let e in l) {
          let n = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            r = l[e];
          if (
            void 0 === r ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(d, e))
          )
            continue;
          let a = { delay: i, ...P(o || {}, e) },
            h = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[e4];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, V);
              null !== t && ((a.startTime = t), (h = !0));
            }
          }
          e7(t, e),
            n.start(
              eG(
                e,
                n,
                r,
                t.shouldReduceMotion && m.has(e) ? { type: !1 } : a,
                t,
                h
              )
            );
          let c = n.animation;
          c && u.push(c);
        }
        return (
          a &&
            Promise.all(u).then(() => {
              V.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = h(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = eJ(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, e9(i));
                    }
                  })(t, a);
              });
            }),
          u
        );
      }
      function ie(t, e, i = {}) {
        var n;
        let r = h(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = r ? () => Promise.all(it(t, r, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(ii)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              ie(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function ii(t, e) {
        return t.sortNodePosition(e);
      }
      let ir = c.length,
        is = [...d].reverse(),
        io = d.length;
      function ia(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function il() {
        return {
          animate: ia(!0),
          whileInView: ia(),
          whileHover: ia(),
          whileTap: ia(),
          whileDrag: ia(),
          whileFocus: ia(),
          exit: ia(),
        };
      }
      class iu {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class ih extends iu {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => ie(t, e, i)));
                          else if ("string" == typeof e) n = ie(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? h(t, e, i.custom) : e;
                            n = Promise.all(it(t, r, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = il(),
                  n = !0,
                  l = (e) => (i, n) => {
                    var r;
                    let s = h(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function u(u) {
                  let { props: h } = t,
                    d =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < ir; t++) {
                          let n = c[t],
                            r = e.props[n];
                          (a(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    m = new Set(),
                    f = {},
                    g = 1 / 0;
                  for (let e = 0; e < io; e++) {
                    var v;
                    let c = is[e],
                      y = i[c],
                      x = void 0 !== h[c] ? h[c] : d[c],
                      b = a(x),
                      w = c === u ? y.isActive : null;
                    !1 === w && (g = e);
                    let P = x === d[c] && x !== h[c] && b;
                    if (
                      (P && n && t.manuallyAnimateOnMount && (P = !1),
                      (y.protectedKeys = { ...f }),
                      (!y.isActive && null === w) ||
                        (!x && !y.prevProp) ||
                        r(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let S =
                        ((v = y.prevProp),
                        "string" == typeof x
                          ? x !== v
                          : !!Array.isArray(x) && !o(x, v)),
                      T =
                        S || (c === u && y.isActive && !P && b) || (e > g && b),
                      A = !1,
                      E = Array.isArray(x) ? x : [x],
                      M = E.reduce(l(c), {});
                    !1 === w && (M = {});
                    let { prevResolvedValues: C = {} } = y,
                      R = { ...C, ...M },
                      V = (e) => {
                        (T = !0),
                          m.has(e) && ((A = !0), m.delete(e)),
                          (y.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in R) {
                      let e = M[t],
                        i = C[t];
                      if (!f.hasOwnProperty(t))
                        (s(e) && s(i) ? o(e, i) : e === i)
                          ? void 0 !== e && m.has(t)
                            ? V(t)
                            : (y.protectedKeys[t] = !0)
                          : null != e
                          ? V(t)
                          : m.add(t);
                    }
                    (y.prevProp = x),
                      (y.prevResolvedValues = M),
                      y.isActive && (f = { ...f, ...M }),
                      n && t.blockInitialAnimation && (T = !1);
                    let D = !(P && S) || A;
                    T &&
                      D &&
                      p.push(
                        ...E.map((t) => ({
                          animation: t,
                          options: { type: c },
                        }))
                      );
                  }
                  if (m.size) {
                    let e = {};
                    m.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      p.push({ animation: e });
                  }
                  let y = !!p.length;
                  return (
                    n &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (n = !1),
                    y ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: u,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let s = u(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = il()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          r(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let id = 0;
      class ic extends iu {
        constructor() {
          super(...arguments), (this.id = id++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let ip = { x: !1, y: !1 };
      function im(t, e) {
        let i = (function (t, e, i) {
            if (t instanceof Element) return [t];
            if ("string" == typeof t) {
              let e = document.querySelectorAll(t);
              return e ? Array.from(e) : [];
            }
            return Array.from(t);
          })(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function ig(t) {
        return (e) => {
          "touch" === e.pointerType || ip.x || ip.y || t(e);
        };
      }
      let iv = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary,
        iy = new WeakSet();
      function ix(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function ib(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let iw = (t, e) => {
          let i = t.currentTarget;
          if (!i) return;
          let n = ix(() => {
            if (iy.has(i)) return;
            ib(i, "down");
            let t = ix(() => {
              ib(i, "up");
            });
            i.addEventListener("keyup", t, e),
              i.addEventListener("blur", () => ib(i, "cancel"), e);
          });
          i.addEventListener("keydown", n, e),
            i.addEventListener(
              "blur",
              () => i.removeEventListener("keydown", n),
              e
            );
        },
        iP = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        iS = (t, e) => !!e && (t === e || iS(t, e.parentElement));
      function iT(t) {
        return iv(t) && !(ip.x || ip.y);
      }
      function iA(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let iE = (t) => (e) => iv(e) && t(e, iA(e));
      function iM(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      function iC(t, e, i, n) {
        return iM(t, e, iE(i), n);
      }
      let iR = (t, e) => Math.abs(t - e);
      class iV {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = ik(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(iR(t.x, e.x) ** 2 + iR(t.y, e.y) ** 2) >= 3);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = j;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iD(e, this.transformPagePoint)),
                V.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = ik(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : iD(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !iv(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = iD(iA(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = j;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, ik(s, this.history)),
            (this.removeListeners = ev(
              iC(this.contextWindow, "pointermove", this.handlePointerMove),
              iC(this.contextWindow, "pointerup", this.handlePointerUp),
              iC(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), D(this.updatePoint);
        }
      }
      function iD(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function ij(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function ik({ point: t }, e) {
        return {
          point: t,
          delta: ij(t, iL(e)),
          offset: ij(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = iL(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > f(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = g(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function iL(t) {
        return t[t.length - 1];
      }
      function iO(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function iF(t) {
        return t.max - t.min;
      }
      function iB(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = ey(e.min, e.max, t.origin)),
          (t.scale = iF(i) / iF(e)),
          (t.translate = ey(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function iI(t, e, i, n) {
        iB(t.x, e.x, i.x, n ? n.originX : void 0),
          iB(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function iU(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + iF(e));
      }
      function iN(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + iF(e));
      }
      function i_(t, e, i) {
        iN(t.x, e.x, i.x), iN(t.y, e.y, i.y);
      }
      function i$(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function iW(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function iz(t, e, i) {
        return { min: iY(t, e), max: iY(t, i) };
      }
      function iY(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let iH = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        iK = () => ({ x: iH(), y: iH() }),
        iq = () => ({ min: 0, max: 0 }),
        iX = () => ({ x: iq(), y: iq() });
      function iG(t) {
        return [t("x"), t("y")];
      }
      function iZ({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function iJ(t) {
        return void 0 === t || 1 === t;
      }
      function iQ({ scale: t, scaleX: e, scaleY: i }) {
        return !iJ(t) || !iJ(e) || !iJ(i);
      }
      function i0(t) {
        return (
          iQ(t) ||
          i1(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function i1(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function i2(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function i5(t, e = 0, i = 1, n, r) {
        (t.min = i2(t.min, e, i, n, r)), (t.max = i2(t.max, e, i, n, r));
      }
      function i3(t, { x: e, y: i }) {
        i5(t.x, e.translate, e.scale, e.originPoint),
          i5(t.y, i.translate, i.scale, i.originPoint);
      }
      function i9(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function i6(t, e, i, n, r = 0.5) {
        let s = ey(t.min, t.max, r);
        i5(t, e, i, s, n);
      }
      function i4(t, e) {
        i6(t.x, e.x, e.scaleX, e.scale, e.originX),
          i6(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function i8(t, e) {
        return iZ(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let i7 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        nt = new WeakMap();
      class ne {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = iX()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new iV(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(iA(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === i || "y" === i
                      ? ip[i]
                        ? null
                        : ((ip[i] = !0),
                          () => {
                            ip[i] = !1;
                          })
                      : ip.x || ip.y
                      ? null
                      : ((ip.x = ip.y = !0),
                        () => {
                          ip.x = ip.y = !1;
                        })),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  iG((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (ts.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = iF(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && V.postRender(() => r(t, e)),
                  e7(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                iG((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: i7(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && V.postRender(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !ni(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? ey(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? ey(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && iO(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: i$(t.x, i, r), y: i$(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: iz(t, "left", "right"), y: iz(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iG((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !iO(e)) return !1;
          let n = e.current;
          M(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = i8(t, i),
                { scroll: r } = e;
              return r && (i9(n.x, r.offset.x), i9(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: iW((t = r.layout.layoutBox).x, s.x), y: iW(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = iZ(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            iG((o) => {
              if (!ni(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            e7(this.visualElement, t),
            i.start(eG(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          iG((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          iG((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          iG((e) => {
            let { drag: i } = this.getProps();
            if (!ni(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - ey(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!iO(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          iG((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = iF(t),
                  r = iF(e);
                return (
                  r > n
                    ? (i = t8(e.min, e.max - n, t.min))
                    : n > r && (i = t8(t.min, t.max - r, e.min)),
                  Q(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            iG((e) => {
              if (!ni(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set(ey(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          nt.set(this.visualElement, this);
          let t = iC(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              iO(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            V.read(e);
          let r = iM(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (iG((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function ni(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class nn extends iu {
        constructor(t) {
          super(t),
            (this.removeGroupControls = M),
            (this.removeListeners = M),
            (this.controls = new ne(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || M);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let nr = (t) => (e, i) => {
        t && V.postRender(() => t(e, i));
      };
      class ns extends iu {
        constructor() {
          super(...arguments), (this.removePointerDownListener = M);
        }
        onPointerDown(t) {
          this.session = new iV(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: i7(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: nr(t),
            onStart: nr(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && V.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = iC(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var no,
        na,
        nl,
        nu = i(7437),
        nh = i(2265);
      let nd = (0, nh.createContext)(null),
        nc = (0, nh.createContext)({}),
        np = (0, nh.createContext)({}),
        nm = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function nf(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ng = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!to.test(t)) return t;
              t = parseFloat(t);
            }
            let i = nf(t, e.target.x),
              n = nf(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        nv = {},
        { schedule: ny, cancel: nx } = R(queueMicrotask, !1);
      class nb extends nh.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          Object.assign(nv, nP),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (nm.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    V.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            ny.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nw(t) {
        let [e, i] = (function () {
            let t = (0, nh.useContext)(nd);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              r = (0, nh.useId)();
            (0, nh.useEffect)(() => n(r), []);
            let s = (0, nh.useCallback)(() => i && i(r), [r, i]);
            return !e && i ? [!1, s] : [!0];
          })(),
          n = (0, nh.useContext)(nc);
        return (0, nu.jsx)(nb, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, nh.useContext)(np),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let nP = {
          borderRadius: {
            ...ng,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: ng,
          borderTopRightRadius: ng,
          borderBottomLeftRadius: ng,
          borderBottomRightRadius: ng,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let n = tY.parse(t);
              if (n.length > 5) return t;
              let r = tY.createTransformer(t),
                s = "number" != typeof n[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (n[0 + s] /= o), (n[1 + s] /= a);
              let l = ey(o, a, 0.5);
              return (
                "number" == typeof n[2 + s] && (n[2 + s] /= l),
                "number" == typeof n[3 + s] && (n[3 + s] /= l),
                r(n)
              );
            },
          },
        },
        nS = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nT = nS.length,
        nA = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nE = (t) => "number" == typeof t || to.test(t);
      function nM(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nC = nV(0, 0.5, W),
        nR = nV(0.5, 0.95, M);
      function nV(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(t8(t, e, n)));
      }
      function nD(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nj(t, e) {
        nD(t.x, e.x), nD(t.y, e.y);
      }
      function nk(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function nL(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function nO(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (ts.test(e) &&
              ((e = parseFloat(e)), (e = ey(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = ey(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = nL(t.min, e, i, a, r)),
            (t.max = nL(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let nF = ["x", "scaleX", "originX"],
        nB = ["y", "scaleY", "originY"];
      function nI(t, e, i, n) {
        nO(t.x, e, nF, i ? i.x : void 0, n ? n.x : void 0),
          nO(t.y, e, nB, i ? i.y : void 0, n ? n.y : void 0);
      }
      function nU(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nN(t) {
        return nU(t.x) && nU(t.y);
      }
      function n_(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function n$(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function nW(t, e) {
        return n$(t.x, e.x) && n$(t.y, e.y);
      }
      function nz(t) {
        return iF(t.x) / iF(t.y);
      }
      function nY(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class nH {
        constructor() {
          this.members = [];
        }
        add(t) {
          eQ(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (e0(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let nK = (t, e) => t.depth - e.depth;
      class nq {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          eQ(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          e0(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nK),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function nX(t) {
        let e = e8(t) ? t.get() : t;
        return eZ(e) ? e.toValue() : e;
      }
      let nG = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        nZ = "undefined" != typeof window && void 0 !== window.MotionDebug,
        nJ = ["", "X", "Y", "Z"],
        nQ = { visibility: "hidden" },
        n0 = 0;
      function n1(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function n2({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = n0++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  nZ &&
                    (nG.totalNodes =
                      nG.resolvedTargetDeltas =
                      nG.recalculatedProjection =
                        0),
                  this.nodes.forEach(n9),
                  this.nodes.forEach(ri),
                  this.nodes.forEach(rn),
                  this.nodes.forEach(n6),
                  nZ && window.MotionDebug.record(nG);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nq());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new e1()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = t9.now(),
                      n = ({ timestamp: e }) => {
                        let r = e - i;
                        r >= 250 && (D(n), t(r - 250));
                      };
                    return V.read(n, !0), () => D(n);
                  })(n, 0)),
                  nm.hasAnimatedSinceResize &&
                    ((nm.hasAnimatedSinceResize = !1), this.nodes.forEach(re));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        ru,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !nW(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...P(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || re(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              D(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(rr),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[e4];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      V,
                      !(t || i)
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(n8);
              return;
            }
            this.isUpdating || this.nodes.forEach(n7),
              (this.isUpdating = !1),
              this.nodes.forEach(rt),
              this.nodes.forEach(n5),
              this.nodes.forEach(n3),
              this.clearAllSnapshots();
            let t = t9.now();
            (j.delta = Q(0, 1e3 / 60, t - j.timestamp)),
              (j.timestamp = t),
              (j.isProcessing = !0),
              k.update.process(j),
              k.preRender.process(j),
              k.render.process(j),
              (j.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ny.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(n4), this.sharedNodes.forEach(rs);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              V.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            V.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = iX()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !nN(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || i0(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              rc((e = n).x),
              rc(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return iX();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(rm)
              )
            ) {
              let { scroll: t } = this.root;
              t && (i9(i.x, t.offset.x), i9(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = iX();
            if (
              (nj(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && nj(i, t),
                i9(i.x, r.offset.x),
                i9(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = iX();
            nj(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                i4(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                i0(n.latestValues) && i4(i, n.latestValues);
            }
            return i0(this.latestValues) && i4(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = iX();
            nj(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !i0(i.latestValues)) continue;
              iQ(i.latestValues) && i.updateSnapshot();
              let n = iX();
              nj(n, i.measurePageBox()),
                nI(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return i0(this.latestValues) && nI(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== j.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = j.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = iX()),
                    (this.relativeTargetOrigin = iX()),
                    i_(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nj(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = iX()), (this.targetWithTransforms = iX())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      iU(i.x, n.x, r.x),
                      iU(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nj(this.target, this.layout.layoutBox),
                      i3(this.target, this.targetDelta))
                    : nj(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = iX()),
                      (this.relativeTargetOrigin = iX()),
                      i_(this.relativeTargetOrigin, this.target, t.target),
                      nj(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                nZ && nG.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              iQ(this.parent.latestValues) ||
              i1(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === j.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            nj(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let { visualElement: o } = r.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      i4(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), i3(t, s)),
                    n && i0(r.latestValues) && i4(t, r.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = iX()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (nk(this.prevProjectionDelta.x, this.projectionDelta.x),
                nk(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              iI(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                nY(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                nY(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              nZ && nG.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = iK()),
              (this.projectionDelta = iK()),
              (this.projectionDeltaWithTransform = iK());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = iK();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = iX(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(rl)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (ro(o.x, t.x, n),
                  ro(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, m;
                  i_(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    ra(p.x, m.x, a.x, n),
                    ra(p.y, m.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      n_(u.x, c.x) && n_(u.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = iX()),
                    nj(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = ey(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          nC(n)
                        )),
                        (t.opacityExit = ey(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          nR(n)
                        )))
                      : s &&
                        (t.opacity = ey(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < nT; r++) {
                      let s = `border${nS[r]}Radius`,
                        o = nM(e, s),
                        a = nM(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || nE(o) === nE(a)
                          ? ((t[s] = Math.max(ey(nA(o), nA(a), n), 0)),
                            (ts.test(a) || ts.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = ey(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (D(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = V.update(() => {
                (nm.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = e8(0) ? 0 : e9(0);
                    return n.start(eG("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                rp(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || iX();
                let e = iF(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = iF(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              nj(e, i),
                i4(e, r),
                iI(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nH()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && n1("z", t, n, this.animationValues);
            for (let e = 0; e < nJ.length; e++)
              n1(`rotate${nJ[e]}`, t, n, this.animationValues),
                n1(`skew${nJ[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nQ;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  nX(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    nX(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !i0(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = "",
                  r = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || s || o) &&
                    (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    r && (n += `rotateX(${r}deg) `),
                    s && (n += `rotateY(${s}deg) `),
                    o && (n += `skewX(${o}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            nv)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = nv[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? nX(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(n8),
              this.root.sharedNodes.clear();
          }
        };
      }
      function n5(t) {
        t.updateLayout();
      }
      function n3(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? iG((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = iF(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : rp(r, i.layoutBox, e) &&
              iG((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = iF(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = iK();
          iI(o, e, i.layoutBox);
          let a = iK();
          s
            ? iI(a, t.applyTransform(n, !0), i.measuredBox)
            : iI(a, e, i.layoutBox);
          let l = !nN(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = iX();
                i_(o, i.layoutBox, r.layoutBox);
                let a = iX();
                i_(a, e, s.layoutBox),
                  nW(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function n9(t) {
        nZ && nG.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function n6(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function n4(t) {
        t.clearSnapshot();
      }
      function n8(t) {
        t.clearMeasurements();
      }
      function n7(t) {
        t.isLayoutDirty = !1;
      }
      function rt(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function re(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function ri(t) {
        t.resolveTargetDelta();
      }
      function rn(t) {
        t.calcProjection();
      }
      function rr(t) {
        t.resetSkewAndRotation();
      }
      function rs(t) {
        t.removeLeadSnapshot();
      }
      function ro(t, e, i) {
        (t.translate = ey(e.translate, 0, i)),
          (t.scale = ey(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function ra(t, e, i, n) {
        (t.min = ey(e.min, i.min, n)), (t.max = ey(e.max, i.max, n));
      }
      function rl(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let ru = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        rh = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        rd = rh("applewebkit/") && !rh("chrome/") ? Math.round : M;
      function rc(t) {
        (t.min = rd(t.min)), (t.max = rd(t.max));
      }
      function rp(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(nz(e) - nz(i))))
        );
      }
      function rm(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let rf = n2({
          attachResizeListener: (t, e) => iM(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        rg = { current: void 0 },
        rv = n2({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!rg.current) {
              let t = new rf({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (rg.current = t);
            }
            return rg.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function ry(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let r = n["onHover" + i];
        r && V.postRender(() => r(e, iA(e)));
      }
      class rx extends iu {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = im(t, i),
                o = ig((t) => {
                  let { target: i } = t,
                    n = e(t);
                  if (!n || !i) return;
                  let s = ig((t) => {
                    n(t), i.removeEventListener("pointerleave", s);
                  });
                  i.addEventListener("pointerleave", s, r);
                });
              return (
                n.forEach((t) => {
                  t.addEventListener("pointerenter", o, r);
                }),
                s
              );
            })(
              t,
              (t) => (ry(this.node, t, "Start"), (t) => ry(this.node, t, "End"))
            ));
        }
        unmount() {}
      }
      class rb extends iu {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = ev(
            iM(this.node.current, "focus", () => this.onFocus()),
            iM(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      function rw(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let r = n["onTap" + ("End" === i ? "" : i)];
        r && V.postRender(() => r(e, iA(e)));
      }
      class rP extends iu {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = im(t, i),
                o = (t) => {
                  let n = t.currentTarget;
                  if (!iT(t) || iy.has(n)) return;
                  iy.add(n);
                  let s = e(t),
                    o = (t, e) => {
                      window.removeEventListener("pointerup", a),
                        window.removeEventListener("pointercancel", l),
                        iT(t) &&
                          iy.has(n) &&
                          (iy.delete(n), s && s(t, { success: e }));
                    },
                    a = (t) => {
                      o(t, i.useGlobalTarget || iS(n, t.target));
                    },
                    l = (t) => {
                      o(t, !1);
                    };
                  window.addEventListener("pointerup", a, r),
                    window.addEventListener("pointercancel", l, r);
                };
              return (
                n.forEach((t) => {
                  iP.has(t.tagName) || -1 !== t.tabIndex || (t.tabIndex = 0),
                    (i.useGlobalTarget ? window : t).addEventListener(
                      "pointerdown",
                      o,
                      r
                    ),
                    t.addEventListener("focus", (t) => iw(t, r), r);
                }),
                s
              );
            })(
              t,
              (t) => (
                rw(this.node, t, "Start"),
                (t, { success: e }) => rw(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let rS = new WeakMap(),
        rT = new WeakMap(),
        rA = (t) => {
          let e = rS.get(t.target);
          e && e(t);
        },
        rE = (t) => {
          t.forEach(rA);
        },
        rM = { some: 0, all: 1 };
      class rC extends iu {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : rM[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              rT.has(i) || rT.set(i, {});
              let n = rT.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(rE, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              rS.set(t, i),
              n.observe(t),
              () => {
                rS.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let rR = (0, nh.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        rV = (0, nh.createContext)({}),
        rD = "undefined" != typeof window,
        rj = rD ? nh.useLayoutEffect : nh.useEffect,
        rk = (0, nh.createContext)({ strict: !1 });
      function rL(t) {
        return r(t.animate) || c.some((e) => a(t[e]));
      }
      function rO(t) {
        return !!(rL(t) || t.variants);
      }
      function rF(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let rB = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        rI = {};
      for (let t in rB) rI[t] = { isEnabled: (e) => rB[t].some((t) => !!e[t]) };
      let rU = Symbol.for("motionComponentSymbol"),
        rN = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function r_(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (rN.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      function r$(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let rW = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function rz(t, e, i, n) {
        for (let i in (r$(t, e, void 0, n), e.attrs))
          t.setAttribute(rW.has(i) ? i : e6(i), e.attrs[i]);
      }
      function rY(t, { layout: e, layoutId: i }) {
        return (
          m.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!nv[t] || "opacity" === t))
        );
      }
      function rH(t, e, i) {
        var n;
        let { style: r } = t,
          s = {};
        for (let o in r)
          (e8(r[o]) ||
            (e.style && e8(e.style[o])) ||
            rY(o, t) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (s[o] = r[o]);
        return s;
      }
      function rK(t, e, i) {
        let n = rH(t, e, i);
        for (let i in t)
          (e8(t[i]) || e8(e[i])) &&
            (n[
              -1 !== p.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      let rq = (t) => (e, i) => {
          let n = (0, nh.useContext)(rV),
            s = (0, nh.useContext)(nd),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                n,
                s,
                o
              ) {
                let a = {
                  latestValues: (function (t, e, i, n) {
                    let s = {},
                      o = n(t, {});
                    for (let t in o) s[t] = nX(o[t]);
                    let { initial: a, animate: l } = t,
                      h = rL(t),
                      d = rO(t);
                    e &&
                      d &&
                      !h &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === l && (l = e.animate));
                    let c = !!i && !1 === i.initial,
                      p = (c = c || !1 === a) ? l : a;
                    if (p && "boolean" != typeof p && !r(p)) {
                      let e = Array.isArray(p) ? p : [p];
                      for (let i = 0; i < e.length; i++) {
                        let n = u(t, e[i]);
                        if (n) {
                          let { transitionEnd: t, transition: e, ...i } = n;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = c ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (s[t] = e);
                          }
                          for (let e in t) s[e] = t[e];
                        }
                      }
                    }
                    return s;
                  })(n, s, o, t),
                  renderState: e(),
                };
                return i && (a.mount = (t) => i(n, t, a)), a;
              })(t, e, n, s);
          return i
            ? o()
            : (function (t) {
                let e = (0, nh.useRef)(null);
                return null === e.current && (e.current = t()), e.current;
              })(o);
        },
        rX = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        rG = () => ({ ...rX(), attrs: {} }),
        rZ = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        rJ = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        rQ = p.length;
      function r0(t, e, i) {
        let { style: n, vars: r, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (m.has(t)) {
            o = !0;
            continue;
          }
          if (q(t)) {
            r[t] = i;
            continue;
          }
          {
            let e = rZ(i, tZ[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (n.transform = (function (t, e, i) {
                  let n = "",
                    r = !0;
                  for (let s = 0; s < rQ; s++) {
                    let o = p[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = rZ(a, tZ[o]);
                      if (!l) {
                        r = !1;
                        let e = rJ[o] || o;
                        n += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, r ? "" : n)) : r && (n = "none"),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = s;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function r1(t, e, i) {
        return "string" == typeof t ? t : to.transform(e + i * t);
      }
      let r2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        r5 = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function r3(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        d
      ) {
        if ((r0(t, u, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: m } = t;
        c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== r || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let n = r1(e, t.x, t.width),
                r = r1(i, t.y, t.height);
              return `${n} ${r}`;
            })(m, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== n && (c.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? r2 : r5;
              t[s.offset] = to.transform(-n);
              let o = to.transform(e),
                a = to.transform(i);
              t[s.array] = `${o} ${a}`;
            })(c, o, a, l, !1);
      }
      let r9 = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        r6 = {
          useVisualState: rq({
            scrapeMotionValuesFromProps: rK,
            createRenderState: rG,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              V.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                V.render(() => {
                  r3(i, n, r9(e.tagName), t.transformTemplate), rz(e, i);
                });
            },
          }),
        },
        r4 = {
          useVisualState: rq({
            scrapeMotionValuesFromProps: rH,
            createRenderState: rX,
          }),
        };
      function r8(t, e, i) {
        for (let n in e) e8(e[n]) || rY(n, i) || (t[n] = e[n]);
      }
      let r7 = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function st(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          r7.has(t)
        );
      }
      let se = (t) => !st(t);
      try {
        (no = require("@emotion/is-prop-valid").default) &&
          (se = (t) => (t.startsWith("on") ? !st(t) : no(t)));
      } catch (t) {}
      let si = { current: null },
        sn = { current: !1 },
        sr = new WeakMap(),
        ss = [...ty, tF, tY],
        so = (t) => ss.find(tv(t)),
        sa = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class sl {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tA),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = t9.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), V.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = rL(e)),
            (this.isVariantNode = rO(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && e8(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            sr.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            sn.current ||
              (function () {
                if (((sn.current = !0), rD)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (si.current = t.matches);
                    t.addListener(e), e();
                  } else si.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || si.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (sr.delete(this.current),
          this.projection && this.projection.unmount(),
          D(this.notifyUpdate),
          D(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = m.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && V.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in rI) {
            let e = rI[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : iX();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < sa.length; e++) {
            let i = sa[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if (e8(r)) t.addValue(n, r);
              else if (e8(s)) t.addValue(n, e9(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, e9(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = e9(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (H(n) || Y(n))
                ? (n = parseFloat(n))
                : !so(n) && tY.test(e) && (n = t0(t, e)),
              this.setBaseTarget(t, e8(n) ? n.get() : n)),
            e8(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = u(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || e8(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new e1()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class su extends sl {
        constructor() {
          super(...arguments), (this.KeyframeResolver = t2);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          e8(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class sh extends su {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = r$);
        }
        readValueFromInstance(t, e) {
          if (m.has(e)) {
            let t = tQ(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = (q(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return i8(t, e);
        }
        build(t, e, i) {
          r0(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return rH(t, e, i);
        }
      }
      class sd extends su {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = iX);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (m.has(e)) {
            let t = tQ(e);
            return (t && t.default) || 0;
          }
          return (e = rW.has(e) ? e : e6(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return rK(t, e, i);
        }
        build(t, e, i) {
          r3(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          rz(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = r9(t.tagName)), super.mount(t);
        }
      }
      let sc = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      })(
        ((na = {
          animation: { Feature: ih },
          exit: { Feature: ic },
          inView: { Feature: rC },
          tap: { Feature: rP },
          focus: { Feature: rb },
          hover: { Feature: rx },
          pan: { Feature: ns },
          drag: { Feature: nn, ProjectionNode: rv, MeasureLayout: nw },
          layout: { ProjectionNode: rv, MeasureLayout: nw },
        }),
        (nl = (t, e) =>
          r_(t)
            ? new sd(e)
            : new sh(e, { allowProjection: t !== nh.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: n,
              useVisualState: r,
              Component: s,
            } = t;
            e &&
              (function (t) {
                for (let e in t) rI[e] = { ...rI[e], ...t[e] };
              })(e);
            let o = (0, nh.forwardRef)(function (t, e) {
              var o;
              let l;
              let u = {
                  ...(0, nh.useContext)(rR),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, nh.useContext)(nc).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: h } = u,
                d = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (rL(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || a(e) ? e : void 0,
                        animate: a(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, nh.useContext)(rV));
                  return (0, nh.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [rF(e), rF(i)]
                  );
                })(t),
                c = r(t, h);
              if (!h && rD) {
                (0, nh.useContext)(rk).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = rI;
                  if (!e && !i) return {};
                  let n = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(u);
                (l = t.MeasureLayout),
                  (d.visualElement = (function (t, e, i, n, r) {
                    var s, o;
                    let { visualElement: a } = (0, nh.useContext)(rV),
                      l = (0, nh.useContext)(rk),
                      u = (0, nh.useContext)(nd),
                      h = (0, nh.useContext)(rR).reducedMotion,
                      d = (0, nh.useRef)(null);
                    (n = n || l.renderer),
                      !d.current &&
                        n &&
                        (d.current = n(t, {
                          visualState: e,
                          parent: a,
                          props: i,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: h,
                        }));
                    let c = d.current,
                      p = (0, nh.useContext)(np);
                    c &&
                      !c.projection &&
                      r &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, n) {
                        let {
                          layoutId: r,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && iO(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(d.current, i, r, p);
                    let m = (0, nh.useRef)(!1);
                    (0, nh.useInsertionEffect)(() => {
                      c && m.current && c.update(i, u);
                    });
                    let f = i[e4],
                      g = (0, nh.useRef)(
                        !!f &&
                          !(null === (s = window.MotionHandoffIsComplete) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, f)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, f))
                      );
                    return (
                      rj(() => {
                        c &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          c.updateFeatures(),
                          ny.render(c.render),
                          g.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, nh.useEffect)(() => {
                        c &&
                          (!g.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          g.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, f);
                            }),
                            (g.current = !1)));
                      }),
                      c
                    );
                  })(s, c, u, i, t.ProjectionNode));
              }
              return (0, nu.jsxs)(rV.Provider, {
                value: d,
                children: [
                  l && d.visualElement
                    ? (0, nu.jsx)(l, { visualElement: d.visualElement, ...u })
                    : null,
                  n(
                    s,
                    t,
                    ((o = d.visualElement),
                    (0, nh.useCallback)(
                      (t) => {
                        t && c.mount && c.mount(t),
                          o && (t ? o.mount(t) : o.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : iO(e) && (e.current = t));
                      },
                      [o]
                    )),
                    c,
                    h,
                    d.visualElement
                  ),
                ],
              });
            });
            return (o[rU] = s), o;
          })({
            ...(r_(t) ? r6 : r4),
            preloadedFeatures: na,
            useRender: (function (t = !1) {
              return (e, i, n, { latestValues: r }, s) => {
                let o = (
                    r_(e)
                      ? function (t, e, i, n) {
                          let r = (0, nh.useMemo)(() => {
                            let i = rG();
                            return (
                              r3(i, e, r9(n), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            r8(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                r8(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, nh.useMemo)(() => {
                                      let i = rX();
                                      return (
                                        r0(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(i, r, s, e),
                  a = (function (t, e, i) {
                    let n = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (se(r) ||
                          (!0 === i && st(r)) ||
                          (!e && !st(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (n[r] = t[r]);
                    return n;
                  })(i, "string" == typeof e, t),
                  l = e !== nh.Fragment ? { ...a, ...o, ref: n } : {},
                  { children: u } = i,
                  h = (0, nh.useMemo)(() => (e8(u) ? u.get() : u), [u]);
                return (0, nh.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: nl,
            Component: t,
          });
        })
      );
    },
    810: function (t, e, i) {
      let n;
      function r(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      i.d(e, {
        E: function () {
          return sc;
        },
      });
      let s = (t) => Array.isArray(t);
      function o(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function a(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function l(t) {
        let e = [{}, {}];
        return (
          null == t ||
            t.values.forEach((t, i) => {
              (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
            }),
          e
        );
      }
      function u(t, e, i, n) {
        if ("function" == typeof e) {
          let [r, s] = l(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [r, s] = l(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        return e;
      }
      function h(t, e, i) {
        let n = t.getProps();
        return u(n, e, void 0 !== i ? i : n.custom, t);
      }
      let d = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        c = ["initial", ...d],
        p = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        m = new Set(p),
        f = (t) => 1e3 * t,
        g = (t) => t / 1e3,
        v = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        y = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        x = { type: "keyframes", duration: 0.8 },
        b = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        w = (t, { keyframes: e }) =>
          e.length > 2
            ? x
            : m.has(t)
            ? t.startsWith("scale")
              ? y(e[1])
              : v
            : b;
      function P(t, e) {
        return t ? t[e] || t.default || t : void 0;
      }
      let S = { skipAnimations: !1, useManualTiming: !1 },
        T = { current: !1 },
        A = (t) => null !== t;
      function E(t, { repeat: e, repeatType: i = "loop" }, n) {
        let r = t.filter(A),
          s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
        return s && void 0 !== n ? n : r[s];
      }
      let M = (t) => t,
        C = [
          "read",
          "resolveKeyframes",
          "update",
          "preRender",
          "render",
          "postRender",
        ];
      function R(t, e) {
        let i = !1,
          n = !0,
          r = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (i = !0),
          o = C.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  n = !1,
                  r = !1,
                  s = new WeakSet(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  s.has(e) && (l.schedule(e), t()), e(o);
                }
                let l = {
                  schedule: (t, r = !1, o = !1) => {
                    let a = o && n ? e : i;
                    return r && s.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), s.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), n)) {
                      r = !0;
                      return;
                    }
                    (n = !0),
                      ([e, i] = [i, e]),
                      e.forEach(a),
                      e.clear(),
                      (n = !1),
                      r && ((r = !1), l.process(t));
                  },
                };
                return l;
              })(s)),
              t
            ),
            {}
          ),
          {
            read: a,
            resolveKeyframes: l,
            update: u,
            preRender: h,
            render: d,
            postRender: c,
          } = o,
          p = () => {
            let s = S.useManualTiming ? r.timestamp : performance.now();
            (i = !1),
              (r.delta = n
                ? 1e3 / 60
                : Math.max(Math.min(s - r.timestamp, 40), 1)),
              (r.timestamp = s),
              (r.isProcessing = !0),
              a.process(r),
              l.process(r),
              u.process(r),
              h.process(r),
              d.process(r),
              c.process(r),
              (r.isProcessing = !1),
              i && e && ((n = !1), t(p));
          },
          m = () => {
            (i = !0), (n = !0), r.isProcessing || t(p);
          };
        return {
          schedule: C.reduce((t, e) => {
            let n = o[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || m(), n.schedule(t, e, r))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < C.length; e++) o[C[e]].cancel(t);
          },
          state: r,
          steps: o,
        };
      }
      let {
          schedule: V,
          cancel: D,
          state: j,
          steps: k,
        } = R(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : M,
          !0
        ),
        L = (t, e, i) =>
          (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function O(t, e, i, n) {
        if (t === e && i === n) return M;
        let r = (e) =>
          (function (t, e, i, n, r) {
            let s, o;
            let a = 0;
            do (s = L((o = e + (i - e) / 2), n, r) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : L(r(t), e, n));
      }
      let F = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        B = (t) => (e) => 1 - t(1 - e),
        I = O(0.33, 1.53, 0.69, 0.99),
        U = B(I),
        N = F(U),
        _ = (t) =>
          (t *= 2) < 1 ? 0.5 * U(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        $ = (t) => 1 - Math.sin(Math.acos(t)),
        W = B($),
        z = F($),
        Y = (t) => /^0[^.\s]+$/u.test(t),
        H = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        K = (t) => (e) => "string" == typeof e && e.startsWith(t),
        q = K("--"),
        X = K("var(--"),
        G = (t) => !!X(t) && Z.test(t.split("/*")[0].trim()),
        Z =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        J = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        Q = (t, e, i) => (i > e ? e : i < t ? t : i),
        tt = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        te = { ...tt, transform: (t) => Q(0, 1, t) },
        ti = { ...tt, default: 1 },
        tn = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        tr = tn("deg"),
        ts = tn("%"),
        to = tn("px"),
        ta = tn("vh"),
        tl = tn("vw"),
        tu = {
          ...ts,
          parse: (t) => ts.parse(t) / 100,
          transform: (t) => ts.transform(100 * t),
        },
        th = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        td = (t) => t === tt || t === to,
        tc = (t, e) => parseFloat(t.split(", ")[e]),
        tp =
          (t, e) =>
          (i, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let r = n.match(/^matrix3d\((.+)\)$/u);
            if (r) return tc(r[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/u);
              return e ? tc(e[1], t) : 0;
            }
          },
        tm = new Set(["x", "y", "z"]),
        tf = p.filter((t) => !tm.has(t)),
        tg = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: tp(4, 13),
          y: tp(5, 14),
        };
      (tg.translateX = tg.x), (tg.translateY = tg.y);
      let tv = (t) => (e) => e.test(t),
        ty = [
          tt,
          to,
          ts,
          tr,
          tl,
          ta,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        tx = (t) => ty.find(tv(t)),
        tb = new Set(),
        tw = !1,
        tP = !1;
      function tS() {
        if (tP) {
          let t = Array.from(tb).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                tf.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  var n;
                  null === (n = t.getValue(e)) || void 0 === n || n.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (tP = !1), (tw = !1), tb.forEach((t) => t.complete()), tb.clear();
      }
      function tT() {
        tb.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (tP = !0);
        });
      }
      class tA {
        constructor(t, e, i, n, r, s = !1) {
          (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s);
        }
        scheduleResolve() {
          (this.isScheduled = !0),
            this.isAsync
              ? (tb.add(this),
                tw || ((tw = !0), V.read(tT), V.resolveKeyframes(tS)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          for (let r = 0; r < t.length; r++)
            if (null === t[r]) {
              if (0 === r) {
                let r = null == n ? void 0 : n.get(),
                  s = t[t.length - 1];
                if (void 0 !== r) t[0] = r;
                else if (i && e) {
                  let n = i.readValue(e, s);
                  null != n && (t[0] = n);
                }
                void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]);
              } else t[r] = t[r - 1];
            }
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete() {
          (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            tb.delete(this);
        }
        cancel() {
          this.isComplete || ((this.isScheduled = !1), tb.delete(this));
        }
        resume() {
          this.isComplete || this.scheduleResolve();
        }
      }
      let tE = (t) => Math.round(1e5 * t) / 1e5,
        tM = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tC =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tR = (t, e) => (i) =>
          !!(
            ("string" == typeof i && tC.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        tV = (t, e, i) => (n) => {
          if ("string" != typeof n) return n;
          let [r, s, o, a] = n.match(tM);
          return {
            [t]: parseFloat(r),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tD = (t) => Q(0, 255, t),
        tj = { ...tt, transform: (t) => Math.round(tD(t)) },
        tk = {
          test: tR("rgb", "red"),
          parse: tV("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            tj.transform(t) +
            ", " +
            tj.transform(e) +
            ", " +
            tj.transform(i) +
            ", " +
            tE(te.transform(n)) +
            ")",
        },
        tL = {
          test: tR("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              r = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (r = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (r = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (r += r)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1,
              }
            );
          },
          transform: tk.transform,
        },
        tO = {
          test: tR("hsl", "hue"),
          parse: tV("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            ts.transform(tE(e)) +
            ", " +
            ts.transform(tE(i)) +
            ", " +
            tE(te.transform(n)) +
            ")",
        },
        tF = {
          test: (t) => tk.test(t) || tL.test(t) || tO.test(t),
          parse: (t) =>
            tk.test(t) ? tk.parse(t) : tO.test(t) ? tO.parse(t) : tL.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? tk.transform(t)
              : tO.transform(t),
        },
        tB =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tI = "number",
        tU = "color",
        tN =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function t_(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          r = [],
          s = 0,
          o = e
            .replace(
              tN,
              (t) => (
                tF.test(t)
                  ? (n.color.push(s), r.push(tU), i.push(tF.parse(t)))
                  : t.startsWith("var(")
                  ? (n.var.push(s), r.push("var"), i.push(t))
                  : (n.number.push(s), r.push(tI), i.push(parseFloat(t))),
                ++s,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: n, types: r };
      }
      function t$(t) {
        return t_(t).values;
      }
      function tW(t) {
        let { split: e, types: i } = t_(t),
          n = e.length;
        return (t) => {
          let r = "";
          for (let s = 0; s < n; s++)
            if (((r += e[s]), void 0 !== t[s])) {
              let e = i[s];
              e === tI
                ? (r += tE(t[s]))
                : e === tU
                ? (r += tF.transform(t[s]))
                : (r += t[s]);
            }
          return r;
        };
      }
      let tz = (t) => ("number" == typeof t ? 0 : t),
        tY = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              "string" == typeof t &&
              ((null === (e = t.match(tM)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(tB)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: t$,
          createTransformer: tW,
          getAnimatableNone: function (t) {
            let e = t$(t);
            return tW(t)(e.map(tz));
          },
        },
        tH = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tK(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(tM) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = tH.has(e) ? 1 : 0;
        return n !== i && (s *= 100), e + "(" + s + r + ")";
      }
      let tq = /\b([a-z-]*)\(.*?\)/gu,
        tX = {
          ...tY,
          getAnimatableNone: (t) => {
            let e = t.match(tq);
            return e ? e.map(tK).join(" ") : t;
          },
        },
        tG = { ...tt, transform: Math.round },
        tZ = {
          borderWidth: to,
          borderTopWidth: to,
          borderRightWidth: to,
          borderBottomWidth: to,
          borderLeftWidth: to,
          borderRadius: to,
          radius: to,
          borderTopLeftRadius: to,
          borderTopRightRadius: to,
          borderBottomRightRadius: to,
          borderBottomLeftRadius: to,
          width: to,
          maxWidth: to,
          height: to,
          maxHeight: to,
          top: to,
          right: to,
          bottom: to,
          left: to,
          padding: to,
          paddingTop: to,
          paddingRight: to,
          paddingBottom: to,
          paddingLeft: to,
          margin: to,
          marginTop: to,
          marginRight: to,
          marginBottom: to,
          marginLeft: to,
          backgroundPositionX: to,
          backgroundPositionY: to,
          rotate: tr,
          rotateX: tr,
          rotateY: tr,
          rotateZ: tr,
          scale: ti,
          scaleX: ti,
          scaleY: ti,
          scaleZ: ti,
          skew: tr,
          skewX: tr,
          skewY: tr,
          distance: to,
          translateX: to,
          translateY: to,
          translateZ: to,
          x: to,
          y: to,
          z: to,
          perspective: to,
          transformPerspective: to,
          opacity: te,
          originX: tu,
          originY: tu,
          originZ: to,
          zIndex: tG,
          size: to,
          fillOpacity: te,
          strokeOpacity: te,
          numOctaves: tG,
        },
        tJ = {
          ...tZ,
          color: tF,
          backgroundColor: tF,
          outlineColor: tF,
          fill: tF,
          stroke: tF,
          borderColor: tF,
          borderTopColor: tF,
          borderRightColor: tF,
          borderBottomColor: tF,
          borderLeftColor: tF,
          filter: tX,
          WebkitFilter: tX,
        },
        tQ = (t) => tJ[t];
      function t0(t, e) {
        let i = tQ(t);
        return (
          i !== tX && (i = tY),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let t1 = new Set(["auto", "none", "0"]);
      class t2 extends tA {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && G((n = n.trim()))) {
              let r = (function t(e, i, n = 1) {
                M(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [r, s] = (function (t) {
                  let e = J.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${null != i ? i : n}`, r];
                })(e);
                if (!r) return;
                let o = window.getComputedStyle(i).getPropertyValue(r);
                if (o) {
                  let t = o.trim();
                  return H(t) ? parseFloat(t) : t;
                }
                return G(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !th.has(i) || 2 !== t.length))
            return;
          let [n, r] = t,
            s = tx(n),
            o = tx(r);
          if (s !== o) {
            if (td(s) && td(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else this.needsMeasurement = !0;
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            ("number" == typeof (n = t[e])
              ? 0 === n
              : null === n || "none" === n || "0" === n || Y(n)) && i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                "string" == typeof e &&
                  !t1.has(e) &&
                  t_(e).values.length &&
                  (n = t[r]),
                  r++;
              }
              if (n && i) for (let r of e) t[r] = t0(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = tg[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          var t;
          let { element: e, name: i, unresolvedKeyframes: n } = this;
          if (!e || !e.current) return;
          let r = e.getValue(i);
          r && r.jump(this.measuredOrigin, !1);
          let s = n.length - 1,
            o = n[s];
          (n[s] = tg[i](
            e.measureViewportBox(),
            window.getComputedStyle(e.current)
          )),
            null !== o &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = o),
            (null === (t = this.removedTransforms) || void 0 === t
              ? void 0
              : t.length) &&
              this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      function t5(t) {
        return "function" == typeof t;
      }
      function t3() {
        n = void 0;
      }
      let t9 = {
          now: () => (
            void 0 === n &&
              t9.set(
                j.isProcessing || S.useManualTiming
                  ? j.timestamp
                  : performance.now()
              ),
            n
          ),
          set: (t) => {
            (n = t), queueMicrotask(t3);
          },
        },
        t6 = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (tY.test(t) || "0" === t) &&
              !t.startsWith("url("))
          );
      class t4 {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          ...o
        }) {
          (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = t9.now()),
            (this.options = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              ...o,
            }),
            this.updateFinishedPromise();
        }
        calcStartTime() {
          return this.resolvedAt && this.resolvedAt - this.createdAt > 40
            ? this.resolvedAt
            : this.createdAt;
        }
        get resolved() {
          return (
            this._resolved || this.hasAttemptedResolve || (tT(), tS()),
            this._resolved
          );
        }
        onKeyframesResolved(t, e) {
          (this.resolvedAt = t9.now()), (this.hasAttemptedResolve = !0);
          let {
            name: i,
            type: n,
            velocity: r,
            delay: s,
            onComplete: o,
            onUpdate: a,
            isGenerator: l,
          } = this.options;
          if (
            !l &&
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = t6(r, e),
                a = t6(s, e);
              return (
                M(
                  o === a,
                  `You are trying to animate ${e} from "${r}" to "${s}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${s} via the \`style\` property.`
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || t5(i)) && n))
              );
            })(t, i, n, r)
          ) {
            if (T.current || !s) {
              null == a || a(E(t, this.options, e)),
                null == o || o(),
                this.resolveFinishedPromise();
              return;
            }
            this.options.duration = 0;
          }
          let u = this.initPlayback(t, e);
          !1 !== u &&
            ((this._resolved = { keyframes: t, finalKeyframe: e, ...u }),
            this.onPostResolved());
        }
        onPostResolved() {}
        then(t, e) {
          return this.currentFinishedPromise.then(t, e);
        }
        flatten() {
          (this.options.type = "keyframes"), (this.options.ease = "linear");
        }
        updateFinishedPromise() {
          this.currentFinishedPromise = new Promise((t) => {
            this.resolveFinishedPromise = t;
          });
        }
      }
      let t8 = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n;
        },
        t7 = (t, e, i = 10) => {
          let n = "",
            r = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < r; e++) n += t(t8(0, r - 1, e)) + ", ";
          return `linear(${n.substring(0, n.length - 2)})`;
        };
      function et(t, e, i) {
        var n, r;
        let s = Math.max(e - 5, 0);
        return (n = i - t(s)), (r = e - s) ? (1e3 / r) * n : 0;
      }
      let ee = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function ei(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      function en(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let er = ["duration", "bounce"],
        es = ["stiffness", "damping", "mass"];
      function eo(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function ea(t = ee.visualDuration, e = ee.bounce) {
        let i;
        let n =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: r, restDelta: s } = n,
          o = n.keyframes[0],
          a = n.keyframes[n.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: h,
            mass: d,
            duration: c,
            velocity: p,
            isResolvedFromDuration: m,
          } = (function (t) {
            let e = {
              velocity: ee.velocity,
              stiffness: ee.stiffness,
              damping: ee.damping,
              mass: ee.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!eo(t, es) && eo(t, er)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  n = i * i,
                  r = 2 * Q(0.05, 1, 1 - t.bounce) * Math.sqrt(n);
                e = { ...e, mass: ee.mass, stiffness: n, damping: r };
              } else {
                let i = (function ({
                  duration: t = ee.duration,
                  bounce: e = ee.bounce,
                  velocity: i = ee.velocity,
                  mass: n = ee.mass,
                }) {
                  let r, s;
                  M(
                    t <= f(ee.maxDuration),
                    "Spring duration must be 10 seconds or less"
                  );
                  let o = 1 - e;
                  (o = Q(ee.minDamping, ee.maxDamping, o)),
                    (t = Q(ee.minDuration, ee.maxDuration, g(t))),
                    o < 1
                      ? ((r = (e) => {
                          let n = e * o,
                            r = n * t;
                          return 0.001 - ((n - i) / ei(e, o)) * Math.exp(-r);
                        }),
                        (s = (e) => {
                          let n = e * o * t,
                            s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                            a = ei(Math.pow(e, 2), o);
                          return (
                            ((n * i + i - s) *
                              Math.exp(-n) *
                              (-r(e) + 0.001 > 0 ? -1 : 1)) /
                            a
                          );
                        }))
                      : ((r = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (s = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let a = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(r, s, 5 / t);
                  if (((t = f(t)), isNaN(a)))
                    return {
                      stiffness: ee.stiffness,
                      damping: ee.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(a, 2) * n;
                    return {
                      stiffness: e,
                      damping: 2 * o * Math.sqrt(n * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: ee.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...n, velocity: -g(n.velocity || 0) }),
          v = p || 0,
          y = h / (2 * Math.sqrt(u * d)),
          x = a - o,
          b = g(Math.sqrt(u / d)),
          w = 5 > Math.abs(x);
        if (
          (r || (r = w ? ee.restSpeed.granular : ee.restSpeed.default),
          s || (s = w ? ee.restDelta.granular : ee.restDelta.default),
          y < 1)
        ) {
          let t = ei(b, y);
          i = (e) =>
            a -
            Math.exp(-y * b * e) *
              (((v + y * b * x) / t) * Math.sin(t * e) + x * Math.cos(t * e));
        } else if (1 === y)
          i = (t) => a - Math.exp(-b * t) * (x + (v + b * x) * t);
        else {
          let t = b * Math.sqrt(y * y - 1);
          i = (e) => {
            let i = Math.exp(-y * b * e),
              n = Math.min(t * e, 300);
            return (
              a -
              (i * ((v + y * b * x) * Math.sinh(n) + t * x * Math.cosh(n))) / t
            );
          };
        }
        let P = {
          calculatedDuration: (m && c) || null,
          next: (t) => {
            let e = i(t);
            if (m) l.done = t >= c;
            else {
              let n = 0;
              y < 1 && (n = 0 === t ? f(v) : et(i, t, e));
              let o = Math.abs(n) <= r,
                u = Math.abs(a - e) <= s;
              l.done = o && u;
            }
            return (l.value = l.done ? a : e), l;
          },
          toString: () => {
            let t = Math.min(en(P), 2e4),
              e = t7((e) => P.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
        };
        return P;
      }
      function el({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: r = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          v = i * e,
          y = p + v,
          x = void 0 === o ? y : o(y);
        x !== y && (v = x - p);
        let b = (t) => -v * Math.exp(-t / n),
          w = (t) => x + b(t),
          P = (t) => {
            let e = b(t),
              i = w(t);
            (m.done = Math.abs(e) <= u), (m.value = m.done ? x : i);
          },
          S = (t) => {
            f(m.value) &&
              ((d = t),
              (c = ea({
                keyframes: [m.value, g(m.value)],
                velocity: et(w, t, m.value),
                damping: r,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), P(t), S(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || P(t), m);
            },
          }
        );
      }
      let eu = O(0.42, 0, 1, 1),
        eh = O(0, 0, 0.58, 1),
        ed = O(0.42, 0, 0.58, 1),
        ec = (t) => Array.isArray(t) && "number" != typeof t[0],
        ep = (t) => Array.isArray(t) && "number" == typeof t[0],
        em = {
          linear: M,
          easeIn: eu,
          easeInOut: ed,
          easeOut: eh,
          circIn: $,
          circInOut: z,
          circOut: W,
          backIn: U,
          backInOut: N,
          backOut: I,
          anticipate: _,
        },
        ef = (t) => {
          if (ep(t)) {
            M(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, n, r] = t;
            return O(e, i, n, r);
          }
          return "string" == typeof t
            ? (M(void 0 !== em[t], `Invalid easing type '${t}'`), em[t])
            : t;
        },
        eg = (t, e) => (i) => e(t(i)),
        ev = (...t) => t.reduce(eg),
        ey = (t, e, i) => t + (e - t) * i;
      function ex(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function eb(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let ew = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        eP = [tL, tk, tO],
        eS = (t) => eP.find((e) => e.test(t));
      function eT(t) {
        let e = eS(t);
        if (
          (M(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tO &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let r = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (r = ex(a, n, t + 1 / 3)),
                  (s = ex(a, n, t)),
                  (o = ex(a, n, t - 1 / 3));
              } else r = s = o = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let eA = (t, e) => {
          let i = eT(t),
            n = eT(e);
          if (!i || !n) return eb(t, e);
          let r = { ...i };
          return (t) => (
            (r.red = ew(i.red, n.red, t)),
            (r.green = ew(i.green, n.green, t)),
            (r.blue = ew(i.blue, n.blue, t)),
            (r.alpha = ey(i.alpha, n.alpha, t)),
            tk.transform(r)
          );
        },
        eE = new Set(["none", "hidden"]);
      function eM(t, e) {
        return (i) => ey(t, e, i);
      }
      function eC(t) {
        return "number" == typeof t
          ? eM
          : "string" == typeof t
          ? G(t)
            ? eb
            : tF.test(t)
            ? eA
            : eD
          : Array.isArray(t)
          ? eR
          : "object" == typeof t
          ? tF.test(t)
            ? eA
            : eV
          : eb;
      }
      function eR(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => eC(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function eV(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = eC(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let eD = (t, e) => {
        let i = tY.createTransformer(e),
          n = t_(t),
          r = t_(e);
        return n.indexes.var.length === r.indexes.var.length &&
          n.indexes.color.length === r.indexes.color.length &&
          n.indexes.number.length >= r.indexes.number.length
          ? (eE.has(t) && !r.values.length) || (eE.has(e) && !n.values.length)
            ? eE.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : ev(
                eR(
                  (function (t, e) {
                    var i;
                    let n = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let o = e.types[s],
                        a = t.indexes[o][r[o]],
                        l = null !== (i = t.values[a]) && void 0 !== i ? i : 0;
                      (n[s] = l), r[o]++;
                    }
                    return n;
                  })(n, r),
                  r.values
                ),
                i
              )
          : (M(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
            ),
            eb(t, e));
      };
      function ej(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? ey(t, e, i)
          : eC(t)(t, e);
      }
      function ek({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = ec(n) ? n.map(ef) : ef(n),
          s = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: n, mixer: r } = {}) {
            let s = t.length;
            if (
              (M(
                s === e.length,
                "Both input and output ranges must be the same length"
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && t[0] === t[1]) return () => e[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let o = (function (t, e, i) {
                let n = [],
                  r = i || ej,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = r(t[i], t[i + 1]);
                  e && (s = ev(Array.isArray(e) ? e[i] || M : e, s)), n.push(s);
                }
                return n;
              })(e, n, r),
              a = o.length,
              l = (e) => {
                let i = 0;
                if (a > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let n = t8(t[i], t[i + 1], e);
                return o[i](n);
              };
            return i ? (e) => l(Q(t[0], t[s - 1], e)) : l;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = t8(0, e, n);
                        t.push(ey(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(r)
                ? r
                : e.map(() => r || ed).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s),
        };
      }
      let eL = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: () => V.update(e, !0),
            stop: () => D(e),
            now: () => (j.isProcessing ? j.timestamp : t9.now()),
          };
        },
        eO = { decay: el, inertia: el, tween: ek, keyframes: ek, spring: ea },
        eF = (t) => t / 100;
      class eB extends t4 {
        constructor(t) {
          super(t),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
              if (
                (this.resolver.cancel(),
                (this.isStopped = !0),
                "idle" === this.state)
              )
                return;
              this.teardown();
              let { onStop: t } = this.options;
              t && t();
            });
          let {
              name: e,
              motionValue: i,
              element: n,
              keyframes: r,
            } = this.options,
            s = (null == n ? void 0 : n.KeyframeResolver) || tA;
          (this.resolver = new s(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        flatten() {
          super.flatten(),
            this._resolved &&
              Object.assign(
                this._resolved,
                this.initPlayback(this._resolved.keyframes)
              );
        }
        initPlayback(t) {
          let e, i;
          let {
              type: n = "keyframes",
              repeat: r = 0,
              repeatDelay: s = 0,
              repeatType: o,
              velocity: a = 0,
            } = this.options,
            l = t5(n) ? n : eO[n] || ek;
          l !== ek &&
            "number" != typeof t[0] &&
            ((e = ev(eF, ej(t[0], t[1]))), (t = [0, 100]));
          let u = l({ ...this.options, keyframes: t });
          "mirror" === o &&
            (i = l({
              ...this.options,
              keyframes: [...t].reverse(),
              velocity: -a,
            })),
            null === u.calculatedDuration && (u.calculatedDuration = en(u));
          let { calculatedDuration: h } = u,
            d = h + s;
          return {
            generator: u,
            mirroredGenerator: i,
            mapPercentToKeyframes: e,
            calculatedDuration: h,
            resolvedDuration: d,
            totalDuration: d * (r + 1) - s,
          };
        }
        onPostResolved() {
          let { autoplay: t = !0 } = this.options;
          this.play(),
            "paused" !== this.pendingPlayState && t
              ? (this.state = this.pendingPlayState)
              : this.pause();
        }
        tick(t, e = !1) {
          let { resolved: i } = this;
          if (!i) {
            let { keyframes: t } = this.options;
            return { done: !0, value: t[t.length - 1] };
          }
          let {
            finalKeyframe: n,
            generator: r,
            mirroredGenerator: s,
            mapPercentToKeyframes: o,
            keyframes: a,
            calculatedDuration: l,
            totalDuration: u,
            resolvedDuration: h,
          } = i;
          if (null === this.startTime) return r.next(0);
          let {
            delay: d,
            repeat: c,
            repeatType: p,
            repeatDelay: m,
            onUpdate: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - u / this.speed, this.startTime)),
            e
              ? (this.currentTime = t)
              : null !== this.holdTime
              ? (this.currentTime = this.holdTime)
              : (this.currentTime =
                  Math.round(t - this.startTime) * this.speed);
          let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
            v = this.speed >= 0 ? g < 0 : g > u;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = u);
          let y = this.currentTime,
            x = r;
          if (c) {
            let t = Math.min(this.currentTime, u) / h,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), m && (i -= m / h))
                  : "mirror" === p && (x = s)),
              (y = Q(0, 1, i) * h);
          }
          let b = v ? { done: !1, value: a[0] } : x.next(y);
          o && (b.value = o(b.value));
          let { done: w } = b;
          v ||
            null === l ||
            (w =
              this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            P && void 0 !== n && (b.value = E(a, this.options, n)),
            f && f(b.value),
            P && this.finish(),
            b
          );
        }
        get duration() {
          let { resolved: t } = this;
          return t ? g(t.calculatedDuration) : 0;
        }
        get time() {
          return g(this.currentTime);
        }
        set time(t) {
          (t = f(t)),
            (this.currentTime = t),
            null !== this.holdTime || 0 === this.speed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.speed);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = g(this.currentTime));
        }
        play() {
          if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
          ) {
            this.pendingPlayState = "running";
            return;
          }
          if (this.isStopped) return;
          let { driver: t = eL, onPlay: e, startTime: i } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))), e && e();
          let n = this.driver.now();
          null !== this.holdTime
            ? (this.startTime = n - this.holdTime)
            : this.startTime
            ? "finished" === this.state && (this.startTime = n)
            : (this.startTime = null != i ? i : this.calcStartTime()),
            "finished" === this.state && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          var t;
          if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
          }
          (this.state = "paused"),
            (this.holdTime =
              null !== (t = this.currentTime) && void 0 !== t ? t : 0);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.teardown(), (this.state = "finished");
          let { onComplete: t } = this.options;
          t && t();
        }
        cancel() {
          null !== this.cancelTime && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
      }
      let eI = new Set(["opacity", "clipPath", "filter", "transform"]);
      function eU(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let eN = { linearEasing: void 0 },
        e_ = (function (t, e) {
          let i = eU(t);
          return () => {
            var t;
            return null !== (t = eN[e]) && void 0 !== t ? t : i();
          };
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        e$ = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        eW = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: e$([0, 0.65, 0.55, 1]),
          circOut: e$([0.55, 0, 1, 0.45]),
          backIn: e$([0.31, 0.01, 0.66, -0.59]),
          backOut: e$([0.33, 1.53, 0.69, 0.99]),
        };
      function ez(t, e) {
        (t.timeline = e), (t.onfinish = null);
      }
      let eY = eU(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        eH = { anticipate: _, backInOut: N, circInOut: z };
      class eK extends t4 {
        constructor(t) {
          super(t);
          let {
            name: e,
            motionValue: i,
            element: n,
            keyframes: r,
          } = this.options;
          (this.resolver = new t2(
            r,
            (t, e) => this.onKeyframesResolved(t, e),
            e,
            i,
            n
          )),
            this.resolver.scheduleResolve();
        }
        initPlayback(t, e) {
          var i, n;
          let {
            duration: r = 300,
            times: s,
            ease: o,
            type: a,
            motionValue: l,
            name: u,
            startTime: h,
          } = this.options;
          if (!(null === (i = l.owner) || void 0 === i ? void 0 : i.current))
            return !1;
          if (
            ("string" == typeof o && e_() && o in eH && (o = eH[o]),
            t5((n = this.options).type) ||
              "spring" === n.type ||
              !(function t(e) {
                return !!(
                  ("function" == typeof e && e_()) ||
                  !e ||
                  ("string" == typeof e && (e in eW || e_())) ||
                  ep(e) ||
                  (Array.isArray(e) && e.every(t))
                );
              })(n.ease))
          ) {
            let {
                onComplete: e,
                onUpdate: i,
                motionValue: n,
                element: l,
                ...u
              } = this.options,
              h = (function (t, e) {
                let i = new eB({
                    ...e,
                    keyframes: t,
                    repeat: 0,
                    delay: 0,
                    isGenerator: !0,
                  }),
                  n = { done: !1, value: t[0] },
                  r = [],
                  s = 0;
                for (; !n.done && s < 2e4; )
                  r.push((n = i.sample(s)).value), (s += 10);
                return {
                  times: void 0,
                  keyframes: r,
                  duration: s - 10,
                  ease: "linear",
                };
              })(t, u);
            1 === (t = h.keyframes).length && (t[1] = t[0]),
              (r = h.duration),
              (s = h.times),
              (o = h.ease),
              (a = "keyframes");
          }
          let d = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a = "easeInOut",
              times: l,
            } = {}
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let h = (function t(e, i) {
              if (e)
                return "function" == typeof e && e_()
                  ? t7(e, i)
                  : ep(e)
                  ? e$(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || eW.easeOut)
                  : eW[e];
            })(a, r);
            return (
              Array.isArray(h) && (u.easing = h),
              t.animate(u, {
                delay: n,
                duration: r,
                easing: Array.isArray(h) ? "linear" : h,
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === o ? "alternate" : "normal",
              })
            );
          })(l.owner.current, u, t, {
            ...this.options,
            duration: r,
            times: s,
            ease: o,
          });
          return (
            (d.startTime = null != h ? h : this.calcStartTime()),
            this.pendingTimeline
              ? (ez(d, this.pendingTimeline), (this.pendingTimeline = void 0))
              : (d.onfinish = () => {
                  let { onComplete: i } = this.options;
                  l.set(E(t, this.options, e)),
                    i && i(),
                    this.cancel(),
                    this.resolveFinishedPromise();
                }),
            {
              animation: d,
              duration: r,
              times: s,
              type: a,
              ease: o,
              keyframes: t,
            }
          );
        }
        get duration() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { duration: e } = t;
          return g(e);
        }
        get time() {
          let { resolved: t } = this;
          if (!t) return 0;
          let { animation: e } = t;
          return g(e.currentTime || 0);
        }
        set time(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.currentTime = f(t);
        }
        get speed() {
          let { resolved: t } = this;
          if (!t) return 1;
          let { animation: e } = t;
          return e.playbackRate;
        }
        set speed(t) {
          let { resolved: e } = this;
          if (!e) return;
          let { animation: i } = e;
          i.playbackRate = t;
        }
        get state() {
          let { resolved: t } = this;
          if (!t) return "idle";
          let { animation: e } = t;
          return e.playState;
        }
        get startTime() {
          let { resolved: t } = this;
          if (!t) return null;
          let { animation: e } = t;
          return e.startTime;
        }
        attachTimeline(t) {
          if (this._resolved) {
            let { resolved: e } = this;
            if (!e) return M;
            let { animation: i } = e;
            ez(i, t);
          } else this.pendingTimeline = t;
          return M;
        }
        play() {
          if (this.isStopped) return;
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          "finished" === e.playState && this.updateFinishedPromise(), e.play();
        }
        pause() {
          let { resolved: t } = this;
          if (!t) return;
          let { animation: e } = t;
          e.pause();
        }
        stop() {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            "idle" === this.state)
          )
            return;
          this.resolveFinishedPromise(), this.updateFinishedPromise();
          let { resolved: t } = this;
          if (!t) return;
          let {
            animation: e,
            keyframes: i,
            duration: n,
            type: r,
            ease: s,
            times: o,
          } = t;
          if ("idle" === e.playState || "finished" === e.playState) return;
          if (this.time) {
            let {
                motionValue: t,
                onUpdate: e,
                onComplete: a,
                element: l,
                ...u
              } = this.options,
              h = new eB({
                ...u,
                keyframes: i,
                duration: n,
                type: r,
                ease: s,
                times: o,
                isGenerator: !0,
              }),
              d = f(this.time);
            t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10);
          }
          let { onStop: a } = this.options;
          a && a(), this.cancel();
        }
        complete() {
          let { resolved: t } = this;
          t && t.animation.finish();
        }
        cancel() {
          let { resolved: t } = this;
          t && t.animation.cancel();
        }
        static supports(t) {
          let {
            motionValue: e,
            name: i,
            repeatDelay: n,
            repeatType: r,
            damping: s,
            type: o,
          } = t;
          return (
            eY() &&
            i &&
            eI.has(i) &&
            e &&
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate &&
            !n &&
            "mirror" !== r &&
            0 !== s &&
            "inertia" !== o
          );
        }
      }
      let eq = eU(() => void 0 !== window.ScrollTimeline);
      class eX {
        constructor(t) {
          (this.stop = () => this.runAll("stop")),
            (this.animations = t.filter(Boolean));
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let i = 0; i < this.animations.length; i++)
            this.animations[i][t] = e;
        }
        attachTimeline(t, e) {
          let i = this.animations.map((i) =>
            eq() && i.attachTimeline ? i.attachTimeline(t) : e(i)
          );
          return () => {
            i.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get startTime() {
          return this.getAll("startTime");
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        flatten() {
          this.runAll("flatten");
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      let eG =
          (t, e, i, n = {}, r, s) =>
          (o) => {
            let a = P(n, t) || {},
              l = a.delay || n.delay || 0,
              { elapsed: u = 0 } = n;
            u -= f(l);
            let h = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -u,
              onUpdate: (t) => {
                e.set(t), a.onUpdate && a.onUpdate(t);
              },
              onComplete: () => {
                o(), a.onComplete && a.onComplete();
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : r,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(a) && (h = { ...h, ...w(t, h) }),
              h.duration && (h.duration = f(h.duration)),
              h.repeatDelay && (h.repeatDelay = f(h.repeatDelay)),
              void 0 !== h.from && (h.keyframes[0] = h.from);
            let d = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                ((h.duration = 0), 0 !== h.delay || (d = !0)),
              (T.current || S.skipAnimations) &&
                ((d = !0), (h.duration = 0), (h.delay = 0)),
              d && !s && void 0 !== e.get())
            ) {
              let t = E(h.keyframes, a);
              if (void 0 !== t)
                return (
                  V.update(() => {
                    h.onUpdate(t), h.onComplete();
                  }),
                  new eX([])
                );
            }
            return !s && eK.supports(h) ? new eK(h) : new eB(h);
          },
        eZ = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        eJ = (t) => (s(t) ? t[t.length - 1] || 0 : t);
      function eQ(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function e0(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class e1 {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return eQ(this.subscriptions, t), () => e0(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let e2 = (t) => !isNaN(parseFloat(t)),
        e5 = { current: void 0 };
      class e3 {
        constructor(t, e = {}) {
          (this.version = "11.15.0"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = t9.now();
              this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = t9.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = e2(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new e1());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  V.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return e5.current && e5.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = t9.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function e9(t, e) {
        return new e3(t, e);
      }
      let e6 = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        e4 = "data-" + e6("framerAppearId"),
        e8 = (t) => !!(t && t.getVelocity);
      function e7(t, e) {
        let i = t.getValue("willChange");
        if (e8(i) && i.add) return i.add(e);
      }
      function it(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        var s;
        let {
          transition: o = t.getDefaultTransition(),
          transitionEnd: a,
          ...l
        } = e;
        n && (o = n);
        let u = [],
          d = r && t.animationState && t.animationState.getState()[r];
        for (let e in l) {
          let n = t.getValue(
              e,
              null !== (s = t.latestValues[e]) && void 0 !== s ? s : null
            ),
            r = l[e];
          if (
            void 0 === r ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(d, e))
          )
            continue;
          let a = { delay: i, ...P(o || {}, e) },
            h = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[e4];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, V);
              null !== t && ((a.startTime = t), (h = !0));
            }
          }
          e7(t, e),
            n.start(
              eG(
                e,
                n,
                r,
                t.shouldReduceMotion && m.has(e) ? { type: !1 } : a,
                t,
                h
              )
            );
          let c = n.animation;
          c && u.push(c);
        }
        return (
          a &&
            Promise.all(u).then(() => {
              V.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = h(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      let i = eJ(r[e]);
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, e9(i));
                    }
                  })(t, a);
              });
            }),
          u
        );
      }
      function ie(t, e, i = {}) {
        var n;
        let r = h(
            t,
            e,
            "exit" === i.type
              ? null === (n = t.presenceContext) || void 0 === n
                ? void 0
                : n.custom
              : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (s = i.transitionOverride);
        let o = r ? () => Promise.all(it(t, r, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, n = 0, r = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === r ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(ii)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              ie(t, e, { ...s, delay: i + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, r + n, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = s;
        if (!l) return Promise.all([o(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [o, a] : [a, o];
          return t().then(() => e());
        }
      }
      function ii(t, e) {
        return t.sortNodePosition(e);
      }
      let ir = c.length,
        is = [...d].reverse(),
        io = d.length;
      function ia(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function il() {
        return {
          animate: ia(!0),
          whileInView: ia(),
          whileHover: ia(),
          whileTap: ia(),
          whileDrag: ia(),
          whileFocus: ia(),
          exit: ia(),
        };
      }
      class iu {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class ih extends iu {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => ie(t, e, i)));
                          else if ("string" == typeof e) n = ie(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? h(t, e, i.custom) : e;
                            n = Promise.all(it(t, r, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = il(),
                  n = !0,
                  l = (e) => (i, n) => {
                    var r;
                    let s = h(
                      t,
                      n,
                      "exit" === e
                        ? null === (r = t.presenceContext) || void 0 === r
                          ? void 0
                          : r.custom
                        : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function u(u) {
                  let { props: h } = t,
                    d =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < ir; t++) {
                          let n = c[t],
                            r = e.props[n];
                          (a(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    p = [],
                    m = new Set(),
                    f = {},
                    g = 1 / 0;
                  for (let e = 0; e < io; e++) {
                    var v;
                    let c = is[e],
                      y = i[c],
                      x = void 0 !== h[c] ? h[c] : d[c],
                      b = a(x),
                      w = c === u ? y.isActive : null;
                    !1 === w && (g = e);
                    let P = x === d[c] && x !== h[c] && b;
                    if (
                      (P && n && t.manuallyAnimateOnMount && (P = !1),
                      (y.protectedKeys = { ...f }),
                      (!y.isActive && null === w) ||
                        (!x && !y.prevProp) ||
                        r(x) ||
                        "boolean" == typeof x)
                    )
                      continue;
                    let S =
                        ((v = y.prevProp),
                        "string" == typeof x
                          ? x !== v
                          : !!Array.isArray(x) && !o(x, v)),
                      T =
                        S || (c === u && y.isActive && !P && b) || (e > g && b),
                      A = !1,
                      E = Array.isArray(x) ? x : [x],
                      M = E.reduce(l(c), {});
                    !1 === w && (M = {});
                    let { prevResolvedValues: C = {} } = y,
                      R = { ...C, ...M },
                      V = (e) => {
                        (T = !0),
                          m.has(e) && ((A = !0), m.delete(e)),
                          (y.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in R) {
                      let e = M[t],
                        i = C[t];
                      if (!f.hasOwnProperty(t))
                        (s(e) && s(i) ? o(e, i) : e === i)
                          ? void 0 !== e && m.has(t)
                            ? V(t)
                            : (y.protectedKeys[t] = !0)
                          : null != e
                          ? V(t)
                          : m.add(t);
                    }
                    (y.prevProp = x),
                      (y.prevResolvedValues = M),
                      y.isActive && (f = { ...f, ...M }),
                      n && t.blockInitialAnimation && (T = !1);
                    let D = !(P && S) || A;
                    T &&
                      D &&
                      p.push(
                        ...E.map((t) => ({
                          animation: t,
                          options: { type: c },
                        }))
                      );
                  }
                  if (m.size) {
                    let e = {};
                    m.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      r && (r.liveStyle = !0), (e[i] = null != n ? n : null);
                    }),
                      p.push({ animation: e });
                  }
                  let y = !!p.length;
                  return (
                    n &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (y = !1),
                    (n = !1),
                    y ? e(p) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: u,
                  setActive: function (e, n) {
                    var r;
                    if (i[e].isActive === n) return Promise.resolve();
                    null === (r = t.variantChildren) ||
                      void 0 === r ||
                      r.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, n);
                      }),
                      (i[e].isActive = n);
                    let s = u(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    (i = il()), (n = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          r(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          var t;
          this.node.animationState.reset(),
            null === (t = this.unmountControls) || void 0 === t || t.call(this);
        }
      }
      let id = 0;
      class ic extends iu {
        constructor() {
          super(...arguments), (this.id = id++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let ip = { x: !1, y: !1 },
        im = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary;
      function ig(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let iv = (t) => (e) => im(e) && t(e, ig(e));
      function iy(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      function ix(t, e, i, n) {
        return iy(t, e, iv(i), n);
      }
      let ib = (t, e) => Math.abs(t - e);
      class iw {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n,
            dragSnapToOrigin: r = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = iT(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                r =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(ib(t.x, e.x) ** 2 + ib(t.y, e.y) ** 2) >= 3);
              if (!n && !r) return;
              let { point: s } = i,
                { timestamp: o } = j;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iP(e, this.transformPagePoint)),
                V.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = iT(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : iP(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, s), n && n(t, s);
            }),
            !im(t))
          )
            return;
          (this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = n || window);
          let s = iP(ig(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = j;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          l && l(t, iT(s, this.history)),
            (this.removeListeners = ev(
              ix(this.contextWindow, "pointermove", this.handlePointerMove),
              ix(this.contextWindow, "pointerup", this.handlePointerUp),
              ix(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), D(this.updatePoint);
        }
      }
      function iP(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function iS(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function iT({ point: t }, e) {
        return {
          point: t,
          delta: iS(t, iA(e)),
          offset: iS(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = iA(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(r.timestamp - n.timestamp > f(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = g(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function iA(t) {
        return t[t.length - 1];
      }
      function iE(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function iM(t) {
        return t.max - t.min;
      }
      function iC(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = ey(e.min, e.max, t.origin)),
          (t.scale = iM(i) / iM(e)),
          (t.translate = ey(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function iR(t, e, i, n) {
        iC(t.x, e.x, i.x, n ? n.originX : void 0),
          iC(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function iV(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + iM(e));
      }
      function iD(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + iM(e));
      }
      function ij(t, e, i) {
        iD(t.x, e.x, i.x), iD(t.y, e.y, i.y);
      }
      function ik(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function iL(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function iO(t, e, i) {
        return { min: iF(t, e), max: iF(t, i) };
      }
      function iF(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let iB = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        iI = () => ({ x: iB(), y: iB() }),
        iU = () => ({ min: 0, max: 0 }),
        iN = () => ({ x: iU(), y: iU() });
      function i_(t) {
        return [t("x"), t("y")];
      }
      function i$({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function iW(t) {
        return void 0 === t || 1 === t;
      }
      function iz({ scale: t, scaleX: e, scaleY: i }) {
        return !iW(t) || !iW(e) || !iW(i);
      }
      function iY(t) {
        return (
          iz(t) ||
          iH(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function iH(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function iK(t, e, i, n, r) {
        return void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e;
      }
      function iq(t, e = 0, i = 1, n, r) {
        (t.min = iK(t.min, e, i, n, r)), (t.max = iK(t.max, e, i, n, r));
      }
      function iX(t, { x: e, y: i }) {
        iq(t.x, e.translate, e.scale, e.originPoint),
          iq(t.y, i.translate, i.scale, i.originPoint);
      }
      function iG(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function iZ(t, e, i, n, r = 0.5) {
        let s = ey(t.min, t.max, r);
        iq(t, e, i, s, n);
      }
      function iJ(t, e) {
        iZ(t.x, e.x, e.scaleX, e.scale, e.originX),
          iZ(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function iQ(t, e) {
        return i$(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let i0 = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        i1 = new WeakMap();
      class i2 {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = iN()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new iw(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(ig(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === i || "y" === i
                      ? ip[i]
                        ? null
                        : ((ip[i] = !0),
                          () => {
                            ip[i] = !1;
                          })
                      : ip.x || ip.y
                      ? null
                      : ((ip.x = ip.y = !0),
                        () => {
                          ip.x = ip.y = !1;
                        })),
                  !this.openDragLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  i_((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (ts.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = iM(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && V.postRender(() => r(t, e)),
                  e7(this.visualElement, "transform");
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e);
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                i_((t) => {
                  var e;
                  return (
                    "paused" === this.getAnimationState(t) &&
                    (null === (e = this.getAxisMotionValue(t).animation) ||
                    void 0 === e
                      ? void 0
                      : e.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              contextWindow: i0(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: r } = this.getProps();
          r && V.postRender(() => r(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !i5(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? ey(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? ey(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s);
        }
        resolveConstraints() {
          var t;
          let { dragConstraints: e, dragElastic: i } = this.getProps(),
            n =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (t = this.visualElement.projection) || void 0 === t
                ? void 0
                : t.layout,
            r = this.constraints;
          e && iE(e)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : e && n
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: r }
              ) {
                return { x: ik(t.x, i, r), y: ik(t.y, e, n) };
              })(n.layoutBox, e))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: iO(t, "left", "right"), y: iO(t, "top", "bottom") }
              );
            })(i)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              i_((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(n.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !iE(e)) return !1;
          let n = e.current;
          M(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = iQ(t, i),
                { scroll: r } = e;
              return r && (iG(n.x, r.offset.x), iG(n.y, r.offset.y)), n;
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            o = { x: iL((t = r.layout.layoutBox).x, s.x), y: iL(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = i$(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            i_((o) => {
              if (!i5(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            e7(this.visualElement, t),
            i.start(eG(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          i_((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          i_((t) => {
            var e;
            return null === (e = this.getAxisMotionValue(t).animation) ||
              void 0 === e
              ? void 0
              : e.pause();
          });
        }
        getAnimationState(t) {
          var e;
          return null === (e = this.getAxisMotionValue(t).animation) ||
            void 0 === e
            ? void 0
            : e.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          i_((e) => {
            let { drag: i } = this.getProps();
            if (!i5(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e];
              r.set(t[e] - ey(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!iE(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          i_((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = iM(t),
                  r = iM(e);
                return (
                  r > n
                    ? (i = t8(e.min, e.max - n, t.min))
                    : n > r && (i = t8(t.min, t.max - r, e.min)),
                  Q(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            i_((e) => {
              if (!i5(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set(ey(r, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          i1.set(this.visualElement, this);
          let t = ix(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              iE(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            V.read(e);
          let r = iy(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (i_((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            r(), t(), n(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function i5(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class i3 extends iu {
        constructor(t) {
          super(t),
            (this.removeGroupControls = M),
            (this.removeListeners = M),
            (this.controls = new i2(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || M);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let i9 = (t) => (e, i) => {
        t && V.postRender(() => t(e, i));
      };
      class i6 extends iu {
        constructor() {
          super(...arguments), (this.removePointerDownListener = M);
        }
        onPointerDown(t) {
          this.session = new iw(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: i0(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: i9(t),
            onStart: i9(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && V.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = ix(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var i4,
        i8,
        i7,
        nt = i(7437),
        ne = i(2265);
      let ni = (0, ne.createContext)(null),
        nn = (0, ne.createContext)({}),
        nr = (0, ne.createContext)({}),
        ns = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function no(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let na = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!to.test(t)) return t;
              t = parseFloat(t);
            }
            let i = no(t, e.target.x),
              n = no(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        nl = {},
        { schedule: nu, cancel: nh } = R(queueMicrotask, !1);
      class nd extends ne.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          Object.assign(nl, np),
            r &&
              (e.group && e.group.add(r),
              i && i.register && n && i.register(r),
              r.root.didUpdate(),
              r.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              r.setOptions({
                ...r.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (ns.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = r),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    V.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            nu.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nc(t) {
        let [e, i] = (function () {
            let t = (0, ne.useContext)(ni);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: n } = t,
              r = (0, ne.useId)();
            (0, ne.useEffect)(() => n(r), []);
            let s = (0, ne.useCallback)(() => i && i(r), [r, i]);
            return !e && i ? [!1, s] : [!0];
          })(),
          n = (0, ne.useContext)(nn);
        return (0, nt.jsx)(nd, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, ne.useContext)(nr),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let np = {
          borderRadius: {
            ...na,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: na,
          borderTopRightRadius: na,
          borderBottomLeftRadius: na,
          borderBottomRightRadius: na,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let n = tY.parse(t);
              if (n.length > 5) return t;
              let r = tY.createTransformer(t),
                s = "number" != typeof n[0] ? 1 : 0,
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (n[0 + s] /= o), (n[1 + s] /= a);
              let l = ey(o, a, 0.5);
              return (
                "number" == typeof n[2 + s] && (n[2 + s] /= l),
                "number" == typeof n[3 + s] && (n[3 + s] /= l),
                r(n)
              );
            },
          },
        },
        nm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nf = nm.length,
        ng = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nv = (t) => "number" == typeof t || to.test(t);
      function ny(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nx = nw(0, 0.5, W),
        nb = nw(0.5, 0.95, M);
      function nw(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(t8(t, e, n)));
      }
      function nP(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nS(t, e) {
        nP(t.x, e.x), nP(t.y, e.y);
      }
      function nT(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function nA(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function nE(t, e, [i, n, r], s, o) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, o = t) {
          if (
            (ts.test(e) &&
              ((e = parseFloat(e)), (e = ey(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = ey(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = nA(t.min, e, i, a, r)),
            (t.max = nA(t.max, e, i, a, r));
        })(t, e[i], e[n], e[r], e.scale, s, o);
      }
      let nM = ["x", "scaleX", "originX"],
        nC = ["y", "scaleY", "originY"];
      function nR(t, e, i, n) {
        nE(t.x, e, nM, i ? i.x : void 0, n ? n.x : void 0),
          nE(t.y, e, nC, i ? i.y : void 0, n ? n.y : void 0);
      }
      function nV(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nD(t) {
        return nV(t.x) && nV(t.y);
      }
      function nj(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function nk(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function nL(t, e) {
        return nk(t.x, e.x) && nk(t.y, e.y);
      }
      function nO(t) {
        return iM(t.x) / iM(t.y);
      }
      function nF(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class nB {
        constructor() {
          this.members = [];
        }
        add(t) {
          eQ(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (e0(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let nI = (t, e) => t.depth - e.depth;
      class nU {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          eQ(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          e0(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nI),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      function nN(t) {
        let e = e8(t) ? t.get() : t;
        return eZ(e) ? e.toValue() : e;
      }
      let n_ = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        },
        n$ = "undefined" != typeof window && void 0 !== window.MotionDebug,
        nW = ["", "X", "Y", "Z"],
        nz = { visibility: "hidden" },
        nY = 0;
      function nH(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function nK({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = nY++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  n$ &&
                    (n_.totalNodes =
                      n_.resolvedTargetDeltas =
                      n_.recalculatedProjection =
                        0),
                  this.nodes.forEach(nG),
                  this.nodes.forEach(n5),
                  this.nodes.forEach(n3),
                  this.nodes.forEach(nZ),
                  n$ && window.MotionDebug.record(n_);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nU());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new e1()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: n, layout: r, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (r || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = t9.now(),
                      n = ({ timestamp: e }) => {
                        let r = e - i;
                        r >= 250 && (D(n), t(r - 250));
                      };
                    return V.read(n, !0), () => D(n);
                  })(n, 0)),
                  ns.hasAnimatedSinceResize &&
                    ((ns.hasAnimatedSinceResize = !1), this.nodes.forEach(n2));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        rt,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !nL(this.targetLayout, n) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...P(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || n2(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              D(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(n9),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[e4];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      V,
                      !(t || i)
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nQ);
              return;
            }
            this.isUpdating || this.nodes.forEach(n0),
              (this.isUpdating = !1),
              this.nodes.forEach(n1),
              this.nodes.forEach(nq),
              this.nodes.forEach(nX),
              this.clearAllSnapshots();
            let t = t9.now();
            (j.delta = Q(0, 1e3 / 60, t - j.timestamp)),
              (j.timestamp = t),
              (j.isProcessing = !0),
              k.update.process(j),
              k.preRender.process(j),
              k.render.process(j),
              (j.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), nu.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nJ), this.sharedNodes.forEach(n6);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              V.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            V.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = iN()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !nD(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || iY(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              rn((e = n).x),
              rn(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            var t;
            let { visualElement: e } = this.options;
            if (!e) return iN();
            let i = e.measureViewportBox();
            if (
              !(
                (null === (t = this.scroll) || void 0 === t
                  ? void 0
                  : t.wasRoot) || this.path.some(rs)
              )
            ) {
              let { scroll: t } = this.root;
              t && (iG(i.x, t.offset.x), iG(i.y, t.offset.y));
            }
            return i;
          }
          removeElementScroll(t) {
            var e;
            let i = iN();
            if (
              (nS(i, t),
              null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)
            )
              return i;
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && nS(i, t),
                iG(i.x, r.offset.x),
                iG(i.y, r.offset.y));
            }
            return i;
          }
          applyTransform(t, e = !1) {
            let i = iN();
            nS(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                iJ(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                iY(n.latestValues) && iJ(i, n.latestValues);
            }
            return iY(this.latestValues) && iJ(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = iN();
            nS(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !iY(i.latestValues)) continue;
              iz(i.latestValues) && i.updateSnapshot();
              let n = iN();
              nS(n, i.measurePageBox()),
                nR(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return iY(this.latestValues) && nR(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== j.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, n, r;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = j.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = iN()),
                    (this.relativeTargetOrigin = iN()),
                    ij(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nS(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = iN()), (this.targetWithTransforms = iN())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (n = this.relativeTarget),
                      (r = this.relativeParent.target),
                      iV(i.x, n.x, r.x),
                      iV(i.y, n.y, r.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nS(this.target, this.layout.layoutBox),
                      iX(this.target, this.targetDelta))
                    : nS(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = iN()),
                      (this.relativeTargetOrigin = iN()),
                      ij(this.relativeTargetOrigin, this.target, t.target),
                      nS(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                n$ && n_.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              iz(this.parent.latestValues) ||
              iH(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === j.timestamp && (n = !1),
              n)
            )
              return;
            let { layout: r, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || s))
            )
              return;
            nS(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let r, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (r = i[a]).projectionDelta;
                  let { visualElement: o } = r.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      iJ(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), iX(t, s)),
                    n && iY(r.latestValues) && iJ(t, r.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((e.target = e.layout.layoutBox),
                (e.targetWithTransforms = iN()));
            let { target: l } = e;
            if (!l) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (nT(this.prevProjectionDelta.x, this.projectionDelta.x),
                nT(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              iR(
                this.projectionDelta,
                this.layoutCorrected,
                l,
                this.latestValues
              ),
              (this.treeScale.x === o &&
                this.treeScale.y === a &&
                nF(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                nF(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              n$ && n_.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            var e;
            if (
              (null === (e = this.options.visualElement) ||
                void 0 === e ||
                e.scheduleRender(),
              t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = iI()),
              (this.projectionDelta = iI()),
              (this.projectionDeltaWithTransform = iI());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = iI();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = iN(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(n7)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (n4(o.x, t.x, n),
                  n4(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, m;
                  ij(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    n8(p.x, m.x, a.x, n),
                    n8(p.y, m.y, a.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      nj(u.x, c.x) && nj(u.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = iN()),
                    nS(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = ey(
                          0,
                          void 0 !== i.opacity ? i.opacity : 1,
                          nx(n)
                        )),
                        (t.opacityExit = ey(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          nb(n)
                        )))
                      : s &&
                        (t.opacity = ey(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== i.opacity ? i.opacity : 1,
                          n
                        ));
                    for (let r = 0; r < nf; r++) {
                      let s = `border${nm[r]}Radius`,
                        o = ny(e, s),
                        a = ny(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || nv(o) === nv(a)
                          ? ((t[s] = Math.max(ey(ng(o), ng(a), n), 0)),
                            (ts.test(a) || ts.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = ey(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                (D(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = V.update(() => {
                (ns.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = e8(0) ? 0 : e9(0);
                    return n.start(eG("", n, 1e3, i)), n.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                rr(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || iN();
                let e = iM(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = iM(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              nS(e, i),
                iJ(e, r),
                iR(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nB()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && nH("z", t, n, this.animationValues);
            for (let e = 0; e < nW.length; e++)
              nH(`rotate${nW[e]}`, t, n, this.animationValues),
                nH(`skew${nW[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            var e, i;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return nz;
            let n = { visibility: "" },
              r = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents =
                  nN(null == t ? void 0 : t.pointerEvents) || ""),
                (n.transform = r ? r(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents =
                    nN(null == t ? void 0 : t.pointerEvents) || "")),
                this.hasProjected &&
                  !iY(this.latestValues) &&
                  ((e.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = (function (t, e, i) {
                let n = "",
                  r = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = (null == i ? void 0 : i.z) || 0;
                if (
                  ((r || s || o) &&
                    (n = `translate3d(${r}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: r,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  t && (n = `perspective(${t}px) ${n}`),
                    e && (n += `rotate(${e}deg) `),
                    r && (n += `rotateX(${r}deg) `),
                    s && (n += `rotateY(${s}deg) `),
                    o && (n += `skewX(${o}deg) `),
                    a && (n += `skewY(${a}deg) `);
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`),
                  n || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, o)),
              r && (n.transform = r(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            nl)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = nl[t],
                r = "none" === n.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) n[i[e]] = r;
              } else n[t] = r;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this
                    ? nN(null == t ? void 0 : t.pointerEvents) || ""
                    : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(nQ),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nq(t) {
        t.updateLayout();
      }
      function nX(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = i.source !== t.layout.source;
          "size" === r
            ? i_((t) => {
                let n = s ? i.measuredBox[t] : i.layoutBox[t],
                  r = iM(n);
                (n.min = e[t].min), (n.max = n.min + r);
              })
            : rr(r, i.layoutBox, e) &&
              i_((n) => {
                let r = s ? i.measuredBox[n] : i.layoutBox[n],
                  o = iM(e[n]);
                (r.max = r.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = iI();
          iR(o, e, i.layoutBox);
          let a = iI();
          s
            ? iR(a, t.applyTransform(n, !0), i.measuredBox)
            : iR(a, e, i.layoutBox);
          let l = !nD(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let o = iN();
                ij(o, i.layoutBox, r.layoutBox);
                let a = iN();
                ij(a, e, s.layoutBox),
                  nL(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nG(t) {
        n$ && n_.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nZ(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nJ(t) {
        t.clearSnapshot();
      }
      function nQ(t) {
        t.clearMeasurements();
      }
      function n0(t) {
        t.isLayoutDirty = !1;
      }
      function n1(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function n2(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function n5(t) {
        t.resolveTargetDelta();
      }
      function n3(t) {
        t.calcProjection();
      }
      function n9(t) {
        t.resetSkewAndRotation();
      }
      function n6(t) {
        t.removeLeadSnapshot();
      }
      function n4(t, e, i) {
        (t.translate = ey(e.translate, 0, i)),
          (t.scale = ey(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function n8(t, e, i, n) {
        (t.min = ey(e.min, i.min, n)), (t.max = ey(e.max, i.max, n));
      }
      function n7(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let rt = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        re = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        ri = re("applewebkit/") && !re("chrome/") ? Math.round : M;
      function rn(t) {
        (t.min = ri(t.min)), (t.max = ri(t.max));
      }
      function rr(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(nO(e) - nO(i))))
        );
      }
      function rs(t) {
        var e;
        return (
          t !== t.root &&
          (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot)
        );
      }
      let ro = nK({
          attachResizeListener: (t, e) => iy(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ra = { current: void 0 },
        rl = nK({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!ra.current) {
              let t = new ro({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ra.current = t);
            }
            return ra.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function ru(t, e) {
        let i = (function (t, e, i) {
            if (t instanceof Element) return [t];
            if ("string" == typeof t) {
              let e = document.querySelectorAll(t);
              return e ? Array.from(e) : [];
            }
            return Array.from(t);
          })(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function rh(t) {
        return (e) => {
          "touch" === e.pointerType || ip.x || ip.y || t(e);
        };
      }
      function rd(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let r = n["onHover" + i];
        r && V.postRender(() => r(e, ig(e)));
      }
      class rc extends iu {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = ru(t, i),
                o = rh((t) => {
                  let { target: i } = t,
                    n = e(t);
                  if (!n || !i) return;
                  let s = rh((t) => {
                    n(t), i.removeEventListener("pointerleave", s);
                  });
                  i.addEventListener("pointerleave", s, r);
                });
              return (
                n.forEach((t) => {
                  t.addEventListener("pointerenter", o, r);
                }),
                s
              );
            })(
              t,
              (t) => (rd(this.node, t, "Start"), (t) => rd(this.node, t, "End"))
            ));
        }
        unmount() {}
      }
      class rp extends iu {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = ev(
            iy(this.node.current, "focus", () => this.onFocus()),
            iy(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let rm = new WeakSet();
      function rf(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function rg(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let rv = (t, e) => {
          let i = t.currentTarget;
          if (!i) return;
          let n = rf(() => {
            if (rm.has(i)) return;
            rg(i, "down");
            let t = rf(() => {
              rg(i, "up");
            });
            i.addEventListener("keyup", t, e),
              i.addEventListener("blur", () => rg(i, "cancel"), e);
          });
          i.addEventListener("keydown", n, e),
            i.addEventListener(
              "blur",
              () => i.removeEventListener("keydown", n),
              e
            );
        },
        ry = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        rx = (t, e) => !!e && (t === e || rx(t, e.parentElement));
      function rb(t) {
        return im(t) && !(ip.x || ip.y);
      }
      function rw(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let r = n["onTap" + ("End" === i ? "" : i)];
        r && V.postRender(() => r(e, ig(e)));
      }
      class rP extends iu {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = ru(t, i),
                o = (t) => {
                  let n = t.currentTarget;
                  if (!rb(t) || rm.has(n)) return;
                  rm.add(n);
                  let s = e(t),
                    o = (t, e) => {
                      window.removeEventListener("pointerup", a),
                        window.removeEventListener("pointercancel", l),
                        rb(t) &&
                          rm.has(n) &&
                          (rm.delete(n), s && s(t, { success: e }));
                    },
                    a = (t) => {
                      o(t, i.useGlobalTarget || rx(n, t.target));
                    },
                    l = (t) => {
                      o(t, !1);
                    };
                  window.addEventListener("pointerup", a, r),
                    window.addEventListener("pointercancel", l, r);
                };
              return (
                n.forEach((t) => {
                  ry.has(t.tagName) || -1 !== t.tabIndex || (t.tabIndex = 0),
                    (i.useGlobalTarget ? window : t).addEventListener(
                      "pointerdown",
                      o,
                      r
                    ),
                    t.addEventListener("focus", (t) => rv(t, r), r);
                }),
                s
              );
            })(
              t,
              (t) => (
                rw(this.node, t, "Start"),
                (t, { success: e }) => rw(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let rS = new WeakMap(),
        rT = new WeakMap(),
        rA = (t) => {
          let e = rS.get(t.target);
          e && e(t);
        },
        rE = (t) => {
          t.forEach(rA);
        },
        rM = { some: 0, all: 1 };
      class rC extends iu {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : rM[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              rT.has(i) || rT.set(i, {});
              let n = rT.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(rE, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              rS.set(t, i),
              n.observe(t),
              () => {
                rS.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let rR = (0, ne.createContext)({
          transformPagePoint: (t) => t,
          isStatic: !1,
          reducedMotion: "never",
        }),
        rV = (0, ne.createContext)({}),
        rD = "undefined" != typeof window,
        rj = rD ? ne.useLayoutEffect : ne.useEffect,
        rk = (0, ne.createContext)({ strict: !1 });
      function rL(t) {
        return r(t.animate) || c.some((e) => a(t[e]));
      }
      function rO(t) {
        return !!(rL(t) || t.variants);
      }
      function rF(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let rB = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        rI = {};
      for (let t in rB) rI[t] = { isEnabled: (e) => rB[t].some((t) => !!e[t]) };
      let rU = Symbol.for("motionComponentSymbol"),
        rN = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function r_(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (rN.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      function r$(t, { style: e, vars: i }, n, r) {
        for (let s in (Object.assign(t.style, e, r && r.getProjectionStyles(n)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let rW = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function rz(t, e, i, n) {
        for (let i in (r$(t, e, void 0, n), e.attrs))
          t.setAttribute(rW.has(i) ? i : e6(i), e.attrs[i]);
      }
      function rY(t, { layout: e, layoutId: i }) {
        return (
          m.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!nl[t] || "opacity" === t))
        );
      }
      function rH(t, e, i) {
        var n;
        let { style: r } = t,
          s = {};
        for (let o in r)
          (e8(r[o]) ||
            (e.style && e8(e.style[o])) ||
            rY(o, t) ||
            (null === (n = null == i ? void 0 : i.getValue(o)) || void 0 === n
              ? void 0
              : n.liveStyle) !== void 0) &&
            (s[o] = r[o]);
        return s;
      }
      function rK(t, e, i) {
        let n = rH(t, e, i);
        for (let i in t)
          (e8(t[i]) || e8(e[i])) &&
            (n[
              -1 !== p.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      let rq = (t) => (e, i) => {
          let n = (0, ne.useContext)(rV),
            s = (0, ne.useContext)(ni),
            o = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                n,
                s,
                o
              ) {
                let a = {
                  latestValues: (function (t, e, i, n) {
                    let s = {},
                      o = n(t, {});
                    for (let t in o) s[t] = nN(o[t]);
                    let { initial: a, animate: l } = t,
                      h = rL(t),
                      d = rO(t);
                    e &&
                      d &&
                      !h &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === l && (l = e.animate));
                    let c = !!i && !1 === i.initial,
                      p = (c = c || !1 === a) ? l : a;
                    if (p && "boolean" != typeof p && !r(p)) {
                      let e = Array.isArray(p) ? p : [p];
                      for (let i = 0; i < e.length; i++) {
                        let n = u(t, e[i]);
                        if (n) {
                          let { transitionEnd: t, transition: e, ...i } = n;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = c ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (s[t] = e);
                          }
                          for (let e in t) s[e] = t[e];
                        }
                      }
                    }
                    return s;
                  })(n, s, o, t),
                  renderState: e(),
                };
                return i && (a.mount = (t) => i(n, t, a)), a;
              })(t, e, n, s);
          return i
            ? o()
            : (function (t) {
                let e = (0, ne.useRef)(null);
                return null === e.current && (e.current = t()), e.current;
              })(o);
        },
        rX = () => ({
          style: {},
          transform: {},
          transformOrigin: {},
          vars: {},
        }),
        rG = () => ({ ...rX(), attrs: {} }),
        rZ = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        rJ = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        rQ = p.length;
      function r0(t, e, i) {
        let { style: n, vars: r, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (m.has(t)) {
            o = !0;
            continue;
          }
          if (q(t)) {
            r[t] = i;
            continue;
          }
          {
            let e = rZ(i, tZ[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (n.transform = (function (t, e, i) {
                  let n = "",
                    r = !0;
                  for (let s = 0; s < rQ; s++) {
                    let o = p[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === (o.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = rZ(a, tZ[o]);
                      if (!l) {
                        r = !1;
                        let e = rJ[o] || o;
                        n += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, r ? "" : n)) : r && (n = "none"),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = s;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function r1(t, e, i) {
        return "string" == typeof t ? t : to.transform(e + i * t);
      }
      let r2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        r5 = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function r3(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          originX: r,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        d
      ) {
        if ((r0(t, u, d), h)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: c, style: p, dimensions: m } = t;
        c.transform && (m && (p.transform = c.transform), delete c.transform),
          m &&
            (void 0 !== r || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let n = r1(e, t.x, t.width),
                r = r1(i, t.y, t.height);
              return `${n} ${r}`;
            })(m, void 0 !== r ? r : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== n && (c.scale = n),
          void 0 !== o &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? r2 : r5;
              t[s.offset] = to.transform(-n);
              let o = to.transform(e),
                a = to.transform(i);
              t[s.array] = `${o} ${a}`;
            })(c, o, a, l, !1);
      }
      let r9 = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        r6 = {
          useVisualState: rq({
            scrapeMotionValuesFromProps: rK,
            createRenderState: rG,
            onMount: (t, e, { renderState: i, latestValues: n }) => {
              V.read(() => {
                try {
                  i.dimensions =
                    "function" == typeof e.getBBox
                      ? e.getBBox()
                      : e.getBoundingClientRect();
                } catch (t) {
                  i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                }
              }),
                V.render(() => {
                  r3(i, n, r9(e.tagName), t.transformTemplate), rz(e, i);
                });
            },
          }),
        },
        r4 = {
          useVisualState: rq({
            scrapeMotionValuesFromProps: rH,
            createRenderState: rX,
          }),
        };
      function r8(t, e, i) {
        for (let n in e) e8(e[n]) || rY(n, i) || (t[n] = e[n]);
      }
      let r7 = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function st(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          r7.has(t)
        );
      }
      let se = (t) => !st(t);
      try {
        (i4 = require("@emotion/is-prop-valid").default) &&
          (se = (t) => (t.startsWith("on") ? !st(t) : i4(t)));
      } catch (t) {}
      let si = { current: null },
        sn = { current: !1 },
        sr = new WeakMap(),
        ss = [...ty, tF, tY],
        so = (t) => ss.find(tv(t)),
        sa = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class sl {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tA),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = t9.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), V.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = s;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = rL(e)),
            (this.isVariantNode = rO(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && e8(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          (this.current = t),
            sr.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            sn.current ||
              (function () {
                if (((sn.current = !0), rD)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (si.current = t.matches);
                    t.addListener(e), e();
                  } else si.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || si.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (sr.delete(this.current),
          this.projection && this.projection.unmount(),
          D(this.notifyUpdate),
          D(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = m.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && V.preRender(this.notifyUpdate),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            s = e.on("renderRequest", this.scheduleRender);
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              r(), s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in rI) {
            let e = rI[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : iN();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < sa.length; e++) {
            let i = sa[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if (e8(r)) t.addValue(n, r);
              else if (e8(s)) t.addValue(n, e9(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, e9(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = e9(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          var i;
          let n =
            void 0 === this.latestValues[t] && this.current
              ? null !== (i = this.getBaseTargetFromProps(this.props, t)) &&
                void 0 !== i
                ? i
                : this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != n &&
              ("string" == typeof n && (H(n) || Y(n))
                ? (n = parseFloat(n))
                : !so(n) && tY.test(e) && (n = t0(t, e)),
              this.setBaseTarget(t, e8(n) ? n.get() : n)),
            e8(n) ? n.get() : n
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let i;
          let { initial: n } = this.props;
          if ("string" == typeof n || "object" == typeof n) {
            let r = u(
              this.props,
              n,
              null === (e = this.presenceContext) || void 0 === e
                ? void 0
                : e.custom
            );
            r && (i = r[t]);
          }
          if (n && void 0 !== i) return i;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || e8(r)
            ? void 0 !== this.initialValues[t] && void 0 === i
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new e1()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class su extends sl {
        constructor() {
          super(...arguments), (this.KeyframeResolver = t2);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          e8(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      class sh extends su {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = r$);
        }
        readValueFromInstance(t, e) {
          if (m.has(e)) {
            let t = tQ(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              n = (q(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return iQ(t, e);
        }
        build(t, e, i) {
          r0(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return rH(t, e, i);
        }
      }
      class sd extends su {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = iN);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (m.has(e)) {
            let t = tQ(e);
            return (t && t.default) || 0;
          }
          return (e = rW.has(e) ? e : e6(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return rK(t, e, i);
        }
        build(t, e, i) {
          r3(t, e, this.isSVGTag, i.transformTemplate);
        }
        renderInstance(t, e, i, n) {
          rz(t, e, i, n);
        }
        mount(t) {
          (this.isSVGTag = r9(t.tagName)), super.mount(t);
        }
      }
      let sc = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, n) =>
            "create" === n ? t : (e.has(n) || e.set(n, t(n)), e.get(n)),
        });
      })(
        ((i8 = {
          animation: { Feature: ih },
          exit: { Feature: ic },
          inView: { Feature: rC },
          tap: { Feature: rP },
          focus: { Feature: rp },
          hover: { Feature: rc },
          pan: { Feature: i6 },
          drag: { Feature: i3, ProjectionNode: rl, MeasureLayout: nc },
          layout: { ProjectionNode: rl, MeasureLayout: nc },
        }),
        (i7 = (t, e) =>
          r_(t)
            ? new sd(e)
            : new sh(e, { allowProjection: t !== ne.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            let {
              preloadedFeatures: e,
              createVisualElement: i,
              useRender: n,
              useVisualState: r,
              Component: s,
            } = t;
            e &&
              (function (t) {
                for (let e in t) rI[e] = { ...rI[e], ...t[e] };
              })(e);
            let o = (0, ne.forwardRef)(function (t, e) {
              var o;
              let l;
              let u = {
                  ...(0, ne.useContext)(rR),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, ne.useContext)(nn).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: h } = u,
                d = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (rL(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || a(e) ? e : void 0,
                        animate: a(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, ne.useContext)(rV));
                  return (0, ne.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [rF(e), rF(i)]
                  );
                })(t),
                c = r(t, h);
              if (!h && rD) {
                (0, ne.useContext)(rk).strict;
                let t = (function (t) {
                  let { drag: e, layout: i } = rI;
                  if (!e && !i) return {};
                  let n = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? n.MeasureLayout
                        : void 0,
                    ProjectionNode: n.ProjectionNode,
                  };
                })(u);
                (l = t.MeasureLayout),
                  (d.visualElement = (function (t, e, i, n, r) {
                    var s, o;
                    let { visualElement: a } = (0, ne.useContext)(rV),
                      l = (0, ne.useContext)(rk),
                      u = (0, ne.useContext)(ni),
                      h = (0, ne.useContext)(rR).reducedMotion,
                      d = (0, ne.useRef)(null);
                    (n = n || l.renderer),
                      !d.current &&
                        n &&
                        (d.current = n(t, {
                          visualState: e,
                          parent: a,
                          props: i,
                          presenceContext: u,
                          blockInitialAnimation: !!u && !1 === u.initial,
                          reducedMotionConfig: h,
                        }));
                    let c = d.current,
                      p = (0, ne.useContext)(nr);
                    c &&
                      !c.projection &&
                      r &&
                      ("html" === c.type || "svg" === c.type) &&
                      (function (t, e, i, n) {
                        let {
                          layoutId: r,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                        } = e;
                        (t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent)
                        )),
                          t.projection.setOptions({
                            layoutId: r,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && iE(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: n,
                            layoutScroll: l,
                            layoutRoot: u,
                          });
                      })(d.current, i, r, p);
                    let m = (0, ne.useRef)(!1);
                    (0, ne.useInsertionEffect)(() => {
                      c && m.current && c.update(i, u);
                    });
                    let f = i[e4],
                      g = (0, ne.useRef)(
                        !!f &&
                          !(null === (s = window.MotionHandoffIsComplete) ||
                          void 0 === s
                            ? void 0
                            : s.call(window, f)) &&
                          (null === (o = window.MotionHasOptimisedAnimation) ||
                          void 0 === o
                            ? void 0
                            : o.call(window, f))
                      );
                    return (
                      rj(() => {
                        c &&
                          ((m.current = !0),
                          (window.MotionIsMounted = !0),
                          c.updateFeatures(),
                          nu.render(c.render),
                          g.current &&
                            c.animationState &&
                            c.animationState.animateChanges());
                      }),
                      (0, ne.useEffect)(() => {
                        c &&
                          (!g.current &&
                            c.animationState &&
                            c.animationState.animateChanges(),
                          g.current &&
                            (queueMicrotask(() => {
                              var t;
                              null ===
                                (t = window.MotionHandoffMarkAsComplete) ||
                                void 0 === t ||
                                t.call(window, f);
                            }),
                            (g.current = !1)));
                      }),
                      c
                    );
                  })(s, c, u, i, t.ProjectionNode));
              }
              return (0, nt.jsxs)(rV.Provider, {
                value: d,
                children: [
                  l && d.visualElement
                    ? (0, nt.jsx)(l, { visualElement: d.visualElement, ...u })
                    : null,
                  n(
                    s,
                    t,
                    ((o = d.visualElement),
                    (0, ne.useCallback)(
                      (t) => {
                        t && c.mount && c.mount(t),
                          o && (t ? o.mount(t) : o.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : iE(e) && (e.current = t));
                      },
                      [o]
                    )),
                    c,
                    h,
                    d.visualElement
                  ),
                ],
              });
            });
            return (o[rU] = s), o;
          })({
            ...(r_(t) ? r6 : r4),
            preloadedFeatures: i8,
            useRender: (function (t = !1) {
              return (e, i, n, { latestValues: r }, s) => {
                let o = (
                    r_(e)
                      ? function (t, e, i, n) {
                          let r = (0, ne.useMemo)(() => {
                            let i = rG();
                            return (
                              r3(i, e, r9(n), t.transformTemplate),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            r8(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                r8(n, i, t),
                                Object.assign(
                                  n,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, ne.useMemo)(() => {
                                      let i = rX();
                                      return (
                                        r0(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(i, r, s, e),
                  a = (function (t, e, i) {
                    let n = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (se(r) ||
                          (!0 === i && st(r)) ||
                          (!e && !st(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (n[r] = t[r]);
                    return n;
                  })(i, "string" == typeof e, t),
                  l = e !== ne.Fragment ? { ...a, ...o, ref: n } : {},
                  { children: u } = i,
                  h = (0, ne.useMemo)(() => (e8(u) ? u.get() : u), [u]);
                return (0, ne.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: i7,
            Component: t,
          });
        })
      );
    },
  },
]);
