(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    8350: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 9837));
    },
    9837: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return eE;
          },
        });
      var s = a(7437),
        l = a(2265),
        i = {
          src: "/_next/static/media/arrow-circle-right.8bf244fd.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        r = {
          src: "/_next/static/media/telegram.5ebfadf8.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        n = {
          src: "/_next/static/media/github.3dd7a75e.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        c = {
          src: "/_next/static/media/x.5c3b93cb.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = {
          src: "/_next/static/media/naltional.51b1927f.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = {
          src: "/_next/static/media/dapp.f44b4fa7.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        o = a(6648),
        h = a(7138);
      let A = [
        { link: "https://t.me/xetraai_eth", icon: r },
        { link: "https://x.com/xetraai_eth", icon: c },
        { link: "https://docs.xetraai.xyz", icon: n },
        { link: "https://app.xetraai.xyz", icon: d },
      ];
      var p = () =>
          (0, s.jsx)("main", {
            className: "bg-[#1B1B1B] h-[44px] lg:h-10",
            children: (0, s.jsxs)("section", {
              className:
                "w-full lg:max-w-[1200px] 2xl:max-w-[1340px] mx-auto flex items-center h-full justify-between",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "px-3 py-2 flex items-center justify-center lg:justify-start w-full lg:w-fit gap-x-[10px]",
                  children: [
                    (0, s.jsx)("span", {
                      className:
                        "w-[6px] h-[6px] rounded-full bg-[#FF6A00] inline-block",
                    }),
                    (0, s.jsx)("span", {
                      className: "text-white text-xs font-inter font-medium",
                      children: "Unleashing an ecosystem of apps",
                    }),
                    (0, s.jsx)(o.default, { src: i, alt: "icon" }),
                  ],
                }),
                (0, s.jsxs)("section", {
                  className: " hidden lg:flex items-center",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center px-4 py-1",
                      children: [
                        (0, s.jsx)("span", {
                          className: "text-white text-sm font-normal text-clip",
                          children: "let's connect",
                        }),
                        (0, s.jsx)("figure", {
                          className: "flex gap-x-4 ml-4",
                          children: A.map((e, t) =>
                            (0, s.jsx)(
                              h.default,
                              {
                                href: e.link,
                                rel: "noreferrer",
                                target: "_blank",
                                children: (0, s.jsx)(
                                  o.default,
                                  {
                                    src: e.icon,
                                    alt: "",
                                    className: "cursor-pointer",
                                  },
                                  t
                                ),
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, s.jsx)("span", {
                      className: "w-[1px] h-6 bg-[#D8D8D8] inline-block mx-2",
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex items-center px-4 gap-x-2",
                      children: [
                        (0, s.jsx)(o.default, { src: x, alt: "national" }),
                        (0, s.jsx)("span", {
                          className:
                            "text-white font-inter text-sm font-medium",
                          children: "EN",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        m = {
          src: "/_next/static/media/Logo.eadb9e8a.svg",
          height: 32,
          width: 126,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = a(6463),
        g = (e) => {
          let { title: t, className: a } = e;
          return (0, s.jsx)(h.default, {
            href: "https://app.xetraai.xyz",
            target: "_blank",
            className: "".concat(
              a,
              " p-[2px] rounded-[10px] h-[36px] bg-launch-app group"
            ),
            children: (0, s.jsx)("span", {
              className:
                "bg-[#0E121B] group-hover:bg-[#fff] group-hover:text-black transition-all ease-linear duration-100 flex items-center justify-center h-full text-sm font-medium font-inter rounded-lg text-white",
              children: t,
            }),
          });
        },
        f = {
          src: "/_next/static/media/hambuger.66ed8f8d.svg",
          height: 40,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        },
        b = {
          src: "/_next/static/media/close.1710e860.svg",
          height: 17,
          width: 17,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = {
          src: "/_next/static/media/ic-arrow.84c13021.svg",
          height: 21,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        j = (e) => {
          let { isOpen: t, close: a } = e;
          return (0, s.jsxs)("main", {
            className: "".concat(
              t ? "w-[90%] opacity-100 visible" : "w-0 opacity-0 invisible",
              " transition-all ease-linear duration-200 fixed top-0 left-0  h-full bg-[#FCFCFC] z-40"
            ),
            children: [
              (0, s.jsxs)("section", {
                className: "flex items-center justify-between py-8 px-4",
                children: [
                  (0, s.jsx)(o.default, { src: m, alt: "logo" }),
                  (0, s.jsx)(o.default, { onClick: a, src: b, alt: "logo" }),
                ],
              }),
              (0, s.jsx)("section", {
                className: "",
                children: [
                  { id: "about", title: "About" },
                  { id: "features", title: "Features" },
                  { id: "products", title: "Products" },
                  { id: "resources", title: "Resources" },                  
                ].map((e, t) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      onClick: () => {},
                      className:
                        "flex items-center justify-between p-4 border-b-[1px] border-[#EAEAEA]",
                      children: [
                        (0, s.jsx)(h.default, {
                          href: "#".concat(e.id),
                          className: "text-[#1B1B1B] font-semibold text-base",
                          children: e.title,
                        }),
                        (0, s.jsx)(o.default, { src: w, alt: "icon" }),
                      ],
                    },
                    t
                  )
                ),
              }),
              (0, s.jsx)(g, {
                title: "Launch App",
                className: "w-[134px] h-[36px] mt-8 mx-4",
              }),
            ],
          });
        },
        N = () => {
          let e = [
              { id: "about", title: "About" },
              { id: "features", title: "Features" },
              { id: "products", title: "Products" },
              { id: "resources", title: "Resources" },              
            ],
            [t, a] = (0, l.useState)(e[0]),
            [i, r] = (0, l.useState)(!1),
            n = (0, u.useRouter)(),
            c = (e) => {
              a(e);
            };
          (0, l.useEffect)(() => {
            a(e[0]), n.push("");
          }, []);
          let x = () => {
            r(!1);
          };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("main", {
                className: "h-[76px] lg:py-5 relative z-10",
                children: (0, s.jsxs)("section", {
                  className:
                    "w-full lg:max-w-[1200px] 2xl:max-w-[1340px] mx-auto flex items-center justify-between p-4 lg:p-0",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-3",
                      children: [
                        (0, s.jsx)(o.default, {
                          onClick: () => {
                            r(!0);
                          },
                          src: f,
                          alt: "",
                          className: "block lg:hidden",
                        }),
                        (0, s.jsx)(o.default, {
                          src: m,
                          alt: "logo",
                          priority: !0,
                        }),
                      ],
                    }),
                    (0, s.jsx)("section", {
                      className:
                        "px-3 py-1 hidden lg:flex items-center gap-3 border border-[#F5F5F7] rounded-lg",
                      children: e.map((a, l) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            onClick: () => {
                              c(a);
                            },
                            className: "flex items-center gap-3",
                            children: [
                              (0, s.jsx)(h.default, {
                                href: "#".concat(a.id),
                                className: "".concat(
                                  a.title === t.title
                                    ? "text-[#FF6600]"
                                    : "text-[#666666]",
                                  " px-3 py-2 hover:text-[#FF6600]  text-sm font-medium"
                                ),
                                children: a.title,
                              }),
                              l !== e.length - 1 &&
                                (0, s.jsx)("span", {
                                  className:
                                    "inline-block w-[1px] h-6 bg-[#EAEAEA]",
                                }),
                            ],
                          },
                          l
                        )
                      ),
                    }),
                    (0, s.jsx)(g, {
                      title: "Launch App",
                      className: "w-[134px] h-[36px]",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                onClick: x,
                className: "".concat(
                  i ? "w-full h-full" : "w-0",
                  " overlay fixed top-0 left-0  bg-[rgba(0,0,0,0.8)] z-30"
                ),
              }),
              (0, s.jsx)(j, { isOpen: i, close: x }),
            ],
          });
        },
        v = {
          src: "/_next/static/media/ufo.b8a326a0.svg",
          height: 20,
          width: 21,
          blurWidth: 0,
          blurHeight: 0,
        },
        y = (e) => {
          let { icon: t, title: a, className: l } = e;
          return (0, s.jsxs)("section", {
            className: "".concat(
              l,
              " p-[1px] rounded-full border border-[rgba(255,102,0,0.16)] bg-bg-custom cursor-pointer flex items-center justify-center gap-2"
            ),
            children: [
              (0, s.jsx)(o.default, { src: t, alt: "icon" }),
              (0, s.jsx)("span", {
                className:
                  "text-sm font-semibold font-chakra_petch text-btn-custom",
                children: a,
              }),
            ],
          });
        },
        E = {
          src: "/_next/static/media/discover1.69eb76e0.png",
          height: 432,
          width: 512,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAATlBMVEUPDxBZOSU4JBttUkAXFRQjGxdMMiRFKxtrV0kQEBBxQSjSpX6ijmjw3KpzW1RiTjtkNBqIbWF/WziOVDKkl4eTf27Qt4u3kojnsn7/8MRX9+Y0AAAACXRSTlP1////////+flUWh+yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nB3Chw3AMAwDMNmx3GZ2r/8fLRKCmDRcZ2szXI/3qznB17Q9d82gi+ylBNAoiythFnsCccAPShMCBNpGTSkAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 7,
        },
        B = {
          src: "/_next/static/media/discover2.47f47c1f.png",
          height: 432,
          width: 512,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAKlBMVEUIBAEWDACscDUBAQAQCQNLLA8dGx2SZzw9MCU5PEg0GQB3XD5aVFi/i1gsTYtCAAAAA3RSTlP+9f524lDnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nC3GQRLAIAzDQIGdhLbw/+8yMNVFC7rx/+gYhE2mDXjMRzaKNfIL0d5eVdE2FUsA2my/vTcAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 7,
        },
        k = {
          src: "/_next/static/media/bgDiscover.177cf006.png",
          height: 918,
          width: 1360,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAABlBMVEX19ff29vg7lPMhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAADklEQVR4nGNgIAIwQikAADYAA3lvPFkAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        C = () =>
          (0, s.jsx)("main", {
            className: "w-full lg:h-[918px] my-[60px]",
            id: "about",
            children: (0, s.jsxs)("section", {
              className:
                "w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-10 lg:py-[60px]",
              children: [
                (0, s.jsx)(o.default, { src: k, alt: "cover", fill: !0 }),
                (0, s.jsxs)("section", {
                  className: "relative z-10",
                  children: [
                    (0, s.jsx)(y, {
                      icon: v,
                      title: "About Xetra",
                      className: "mx-auto w-[137px] h-[36px]",
                    }),
                    (0, s.jsx)("h2", {
                      className:
                        "text-[32px] tracking-[-1px] lg:text-[40px] text-[#0E121B] font-semibold font-chakra_petch text-center my-4",
                      children: "Explore the Power of Xetra AI",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-sm lg:text-base font-medium text-[#666] font-inter text-center",
                      children:
                        "Accelerate Your AI Apps Launch, Saving Time - Maximizing Earnings",
                    }),
                    (0, s.jsxs)("section", {
                      className:
                        "flex flex-col lg:flex-row items-center gap-4 justify-center mt-12 font-inter px-4",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "w-full lg:w-[512px]",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "bg-discover-card bg-[#000000] px-6 py-4 h-[164px] flex items-center rounded-[24px]",
                              children: (0, s.jsxs)("p", {
                                className: "w-full",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "block text-white text-xl font-semibold text-center",
                                    children: "Fully EVM Compatible",
                                  }),
                                  (0, s.jsx)("span", {
                                    className:
                                      "block text-[#666666] text-sm font-normal text-center mt-3",
                                    children:
                                      "Power your AI dApps with integration and deployment across all EVM-compatible blockchains.",
                                  }),
                                ],
                              }),
                            }),
                            (0, s.jsxs)("figure", {
                              className: "relative w-full h-[432px] mt-4",
                              children: [
                                (0, s.jsx)(o.default, {
                                  src: E,
                                  alt: "discover",
                                  fill: !0,
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "relative flex items-end h-full pb-6 w-full",
                                  children: (0, s.jsxs)("div", {
                                    className: "w-full",
                                    children: [
                                      (0, s.jsx)("h5", {
                                        className:
                                          "block text-white text-xl font-semibold text-center",
                                        children: "AI Owned by All",
                                      }),
                                      (0, s.jsx)("p", {
                                        className:
                                          "block text-[#666666] text-sm font-normal text-center mt-3",
                                        children:
                                          "Enable communities to shape and control AI applications through utility tokens, fully tradable on the Xetra Exchange",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "w-full lg:w-[512px]",
                          children: [
                            (0, s.jsxs)("figure", {
                              className: "relative w-full h-[432px] pt-6",
                              children: [
                                (0, s.jsx)(o.default, {
                                  src: B,
                                  alt: "discover",
                                  fill: !0,
                                }),
                                (0, s.jsx)("div", {
                                  className:
                                    "relative flex items-start h-full w-full",
                                  children: (0, s.jsxs)("div", {
                                    className: "w-full",
                                    children: [
                                      (0, s.jsx)("h5", {
                                        className:
                                          "block text-white text-xl font-semibold text-center",
                                        children: "Instant AI dApps Maker",
                                      }),
                                      (0, s.jsx)("p", {
                                        className:
                                          "block text-[#666666] text-sm font-normal text-center mt-3",
                                        children:
                                          "Transform ideas into reality with ready-made Xetra AI templates - build and launch your AI dApps in no time.",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "bg-discover-card bg-[#000000] px-6 py-4 h-[164px] flex items-center rounded-[24px] mt-4",
                              children: (0, s.jsxs)("p", {
                                className: "w-full",
                                children: [
                                  (0, s.jsx)("span", {
                                    className:
                                      "block text-white text-xl font-semibold text-center",
                                    children: "Proof Of Value",
                                  }),
                                  (0, s.jsx)("span", {
                                    className:
                                      "block text-[#666666] text-sm font-normal text-center mt-3",
                                    children:
                                      "Fuel growth with AI dApps that reward valuable contributions in a fair and transparent way.",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        I = {
          src: "/_next/static/media/key.a806e9de.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        _ = {
          src: "/_next/static/media/no-code.3f04ef44.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        F = {
          src: "/_next/static/media/integration.e1007ee9.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        D = {
          src: "/_next/static/media/menozation.777a42c0.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        R = {
          src: "/_next/static/media/feature1.aafa4084.png",
          height: 204,
          width: 205,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEWXl5eoqKi9vb309PTKysrQ0NDq6upMaXE9PT2kpKS6urrq6urExMTT09Pq6urX19fOzs67u7va2trAwMDQ0NC8vLzn5+fm5ub7+/suMuoCAAAAF3RSTlMKJhdBOE/+AAw9RL7+pe+Bz23ke/39+VcVVHQAAAAJcEhZcwAACxMAAAsTAQCanBgAAABASURBVHicFcbHDcAwDACxc5XcUyHvP2kQvoiITxERxNUQCn/SuKMHXbP3FoW27X0sJ9bc2fJR0DLsOhUQrU7hA0t9Ak6BVHJNAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        M = {
          src: "/_next/static/media/feature-2.5ff4398a.png",
          height: 248,
          width: 248,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEXe3t7h4eH19fWmpqbj4+PLy8v4+PhMaXHm5ubn5+eWlpbCwsLR0dHp6enf39+qqqrFxcXu7u6vr6/8/Px//B+oAAAAE3RSTlMEb5FiLRuuAGL+RJu0xvqCjr52NXlguAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD5JREFUeJwdy0cSgDAMBMFxkFcywYD+/1cKLn1rJMGH6LV2hGyPHM9EdmTebaIt48xL9DIihhte5K7V+DPoBUSAAeNCw55cAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        H = {
          src: "/_next/static/media/feature3.42278e21.png",
          height: 248,
          width: 249,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEX4+Pjs7Oz7+/v4+Pjs7OzR0dHz8/Px8fHY2Nj9/f3p6enf39/Hx8fZcWX/AAAAB3RSTlP+/uvr6+v2XCShDQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUeJwFwYkRwEAIA7E1XMZ8/dcbCRpDJ4BNB7RnzQOryvuBbusI8F6VEo01NYGMBvIHKuIBPINe6dIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        U = () =>
          (0, s.jsx)("main", {
            id: "features",
            children: (0, s.jsxs)("section", {
              className:
                "w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-[60px]",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 lg:px-0",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "w-full lg:w-[379px]",
                      children: [
                        (0, s.jsx)(y, {
                          icon: I,
                          title: "Key Features",
                          className: "w-[146px] h-[36px]",
                        }),
                        (0, s.jsx)("p", {
                          className:
                            "text-[32px] lg:text-[40px] leading-[32px] lg:leading-[46px] text-[#0E121B] font-semibold tracking-[-0.8px] mt-4",
                          children: "The Perfect Home for Your AI dApps",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "w-full lg:w-[567px] my-4 lg:my-0",
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            "text-[#666] font-inter text-sm font-normal",
                          children:
                            "Easily build, launch, and earn money from AI apps without coding, all while ensuring security and decentralisation through blockchain integration.",
                        }),
                        (0, s.jsx)("ul", {
                          className: "flex flex-wrap mt-4 gap-3",
                          children: [
                            { icon: _, title: "No-Code Deployment" },
                            { icon: F, title: "Blockchain Integration" },
                            { icon: D, title: "Profit" },
                          ].map((e, t) =>
                            (0, s.jsxs)(
                              "div",
                              {
                                className:
                                  "flex gap-1 px-4 py-2 rounded-full border border-[rgba(255,102,0,0.16)]",
                                children: [
                                  (0, s.jsx)(o.default, {
                                    src: e.icon,
                                    alt: "icon",
                                  }),
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-sm font-chakra_petch text-[#FF6600] font-medium",
                                    children: e.title,
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[60px] px-4",
                  children: [
                    {
                      img: R,
                      title: "Build",
                      des: "Build powerful AI dApps in just 3 clicks – no coding needed, with rock-solid, censorship-resistant security!",
                    },
                    {
                      img: M,
                      title: "Launch",
                      des: "Deploy and go live with your AI dApps in seconds, scaling across platforms with global reach and robust security.",
                    },
                    {
                      img: H,
                      title: "Earn Money",
                      des: "Profit from your AI dApps by earning tokens from every user transaction.",
                    },
                  ].map((e, t) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className:
                          "rounded-[20px] border border-[#EAEAEA] bg-[#FAFAFA] pt-4",
                        children: [
                          (0, s.jsx)("figure", {
                            className: "flex justify-center h-[248px]",
                            children: (0, s.jsx)(o.default, {
                              src: e.img,
                              alt: "",
                              objectFit: "cover",
                              objectPosition: "center",
                            }),
                          }),
                          (0, s.jsxs)("div", {
                            className: "px-8 pb-8 mt-6",
                            children: [
                              (0, s.jsx)("p", {
                                className:
                                  "text-[#0E121B] text-lg font-semibold font-inter",
                                children: e.title,
                              }),
                              (0, s.jsx)("p", {
                                className:
                                  "text-[#666] text-base font-normal font-inter",
                                children: e.des,
                              }),
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            }),
          }),
        W = {
          src: "/_next/static/media/element-plus.9a733ca9.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        S = {
          src: "/_next/static/media/ecosystem1.f4f28ef5.png",
          height: 484,
          width: 548,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAADFBMVEUbGxoHBwcTEhIpKChkPSZoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nE3JMQ4AIADCwBb+/2eDLsJCDvjTAklYUWnfyB40sytODgWzADQ9vWlQAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 7,
        },
        X = {
          src: "/_next/static/media/ecosystem2.a96cc986.png",
          height: 484,
          width: 548,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAJFBMVEUGBgYQEBAXFxcNDQ04ODgpKSkhISGDg4NVVVVvb29ERERiYmKsnYG4AAAAAnRSTlP+/qap3hAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAxSURBVHicBcGJAQAwCAKxA7T22X/fJkiSLSPFbYkkXYrYteo60Pu8cl9gnZl5KHiV+RWGAM/Kt3yWAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 7,
        },
        V = () =>
          (0, s.jsx)("main", {
            id: "products",
            children: (0, s.jsxs)("section", {
              className:
                "w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-10 lg:py-[60px]",
              children: [
                (0, s.jsx)(y, {
                  icon: W,
                  title: "Ecosystem Products",
                  className: "w-[194px] mx-auto h-[36px]",
                }),
                (0, s.jsx)("h2", {
                  className:
                    "text-[32px] lg:text-[40px] text-[#0E121B] font-semibold font-chakra_petch text-center my-4",
                  children: "Design for seamless mass adoption",
                }),
                (0, s.jsxs)("section", {
                  className:
                    "flex flex-col lg:flex-row items-center justify-center gap-6 mt-12 px-4 lg:px-0",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "w-full lg:w-[548px] h-[380px] lg:h-[484px] relative",
                      children: [
                        (0, s.jsx)(o.default, { src: S, alt: "", fill: !0 }),
                        (0, s.jsxs)("div", {
                          className:
                            "relative p-8 lg:p-12 font-inter text-white",
                          children: [
                            (0, s.jsx)("h5", {
                              className: "text-2xl font-semibold",
                              children: "Xetra AI assistant",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-[#D8D8D8] text-base font-normal mt-3 mb-6",
                              children:
                                "Develop your dApps with a personal AI assistant, the power of Xetra Engine.",
                            }),
                            (0, s.jsx)(h.default, {
                              href: "https://app.xetraai.xyz/?type=create",
                              target: "_blank",
                              className:
                                "px-4 py-2 bg-white text-[#1B1B1B] capitalize font-semibold text-sm rounded-lg shadow-[0px_1px_2px_0px_rgba(9,9,11,0.12),0px_0px_0px_1px_rgba(9,9,11,0.08)]",
                              children: "try now",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "w-full lg:w-[548px] h-[380px] lg:h-[484px] relative",
                      children: [
                        (0, s.jsx)(o.default, { src: X, alt: "", fill: !0 }),
                        (0, s.jsxs)("div", {
                          className:
                            "relative p-8 lg:p-12 font-inter text-white",
                          children: [
                            (0, s.jsx)("h5", {
                              className: "text-2xl font-semibold",
                              children: "Xetra App",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "text-[#D8D8D8] text-base font-normal mt-3 mb-6",
                              children:
                                "Build track, and manage and perfect your AI dApps in one unified space.",
                            }),
                            (0, s.jsx)(h.default, {
                              href: "https://app.xetraai.xyz/?type=my-apps",
                              target: "_blank",
                              className:
                                "px-4 py-2 bg-white text-[#1B1B1B] capitalize font-semibold text-sm rounded-lg shadow-[0px_1px_2px_0px_rgba(9,9,11,0.12),0px_0px_0px_1px_rgba(9,9,11,0.08)]",
                              children: "Get Started",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        P = {
          src: "/_next/static/media/message-question.25e69d20.svg",
          height: 20,
          width: 21,
          blurWidth: 0,
          blurHeight: 0,
        },
        z = {
          src: "/_next/static/media/SVG.261a5d94.png",
          height: 480,
          width: 750,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEVMaXHGu7ba2trs6ur39/j++/nz6uTn6Omqqqrw8PHz5Nzg4OXy3750AAAADHRSTlMACiOBzv0+oRWwqmxjvRK3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKUlEQVR4nB3JtxEAIBAEsb33QP/9MpBKgEojAM/dBpzIDAN5r/Bf9ZwLCqEAcB7TG1wAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        L = {
          src: "/_next/static/media/personal.19fae04b.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        T = {
          src: "/_next/static/media/image.63f59d6e.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        O = {
          src: "/_next/static/media/api.34d50789.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        G = {
          src: "/_next/static/media/domain.f8e6b6c9.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        K = a(810),
        Q = () =>
          (0, s.jsx)("main", {
            id: "why-xetra",
            children: (0, s.jsxs)("section", {
              className:
                "w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-10 lg:py-[60px]",
              children: [                   
                (0, s.jsx)("h2", {
                  className:
                    "text-[32px] lg:text-[40px] text-[#0E121B] font-semibold font-chakra_petch text-center my-4",
                  children: "Releasing a New Era of AI dApps with Xetra AI",
                }),
                (0, s.jsx)("p", {
                  className:
                    "w-full lg:w-[611px] mx-auto text-center text-sm font-inter text-[#666] px-4 lg:px-0",
                  children:
                    "Explore AI dApps and workflows created by our community, easily accessible through the Xetra AI App Store and platforms like Telegram and WhatsApp.",
                }),
                (0, s.jsxs)("section", {
                  className:
                    "flex flex-col gap-5 lg:flex-row items-start justify-between mt-7 px-4 lg:px-0",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "rounded-[24px] border border-[#EAEAEA] bg-[#FAFAFA] w-full lg:w-[700px]",
                      children: (0, s.jsx)(o.default, { src: z, alt: "" }),
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "w-full lg:w-[430px] border border-[#EAEAEA] bg-[#FAFAFA] p-8 lg:py-8 lg:px-12 rounded-[24px]",
                      children: [
                        (0, s.jsx)("h3", {
                          className: "text-[#1B1B1B] font-semibold text-xl",
                          children: "What can you bring to life?",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-[#666666] text-sm font-normal",
                          children: "Powered by Questflows 3P APIs.",
                        }),
                        (0, s.jsx)("ul", {
                          className: "flex flex-col mt-8 gap-3",
                          children: [
                            { title: "Customizable Agents", icon: L },
                            { title: "Powered by Xetra AI APIs", icon: T },
                            {
                              title: "Integrate APIs into Xetra AI UX Outputs",
                              icon: O,
                            },
                            {
                              title: "Tailored Fine-tuning for Your Needs",
                              icon: G,
                            },
                          ].map((e, t) =>
                            (0, s.jsxs)(
                              K.E.div,
                              {
                                initial: { opacity: 0 },
                                whileInView: { opacity: 1 },
                                className:
                                  "bg-[rgba(255,102,0,0.05)] flex items-center gap-1 px-4 py-2 rounded-full border border-[rgba(255,102,0,0.16)]",
                                children: [
                                  (0, s.jsx)(o.default, {
                                    src: e.icon,
                                    alt: "icon",
                                  }),
                                  (0, s.jsx)("span", {
                                    className:
                                      "text-sm font-chakra_petch text-[#FF6600] font-medium",
                                    children: e.title,
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        Y = {
          src: "/_next/static/media/hero.8a955c17.png",
          height: 321,
          width: 1240,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAACVBMVEX78vH28fbv6/a2/7bcAAAAAXRSTlP+GuMHfQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABdJREFUeJxjYGBgYmJiZGBgYGJkYgQBAACkABIu6pglAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 2,
        },
        J = () =>
          (0, s.jsx)("main", {
            className: "px-4 lg:px-0",
            children: (0, s.jsx)("section", {
              className:
                "w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-10 lg:py-[40px]",
              children: (0, s.jsx)("div", {
                className: "bg-launch-app w-full h-[320px] p-1 rounded-[32px]",
                children: (0, s.jsxs)("figure", {
                  className:
                    "w-full h-full relative z-10 rounded-[32px] overflow-hidden",
                  children: [
                    (0, s.jsx)(o.default, { src: Y, alt: "", fill: !0 }),
                    (0, s.jsx)("div", {
                      className:
                        "relative flex items-center w-full h-full justify-center z-10",
                      children: (0, s.jsxs)("div", {
                        className: "px-4 lg:px-0",
                        children: [
                          (0, s.jsx)("h4", {
                            className:
                              "text-[#1B1B1B] text-[24px] font-semibold text-center",
                            children:
                              "Build fast. Launch faster. Profit smarter.",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "w-full lg:w-[760px] text-sm text-center my-6",
                            children:
                              "Bring your visions to life with Xetra AI. Our powerful engine enables anyone, anywhere, at anytime to own their AI dApps without effort - no coding skills or borders holding you back.",
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex items-center justify-center gap-3",
                            children: [
                              (0, s.jsx)(g, {
                                title: "Get Started",
                                className: "w-[134px] h-[36px]",
                              }),
                              (0, s.jsx)(h.default, {
                                href: "https://t.me/xetraai_eth",
                                target: "_blank",
                                className:
                                  " bg-get-started group border border-[#09090B/80%] rounded-lg h-[36px] w-[107px] shadow-[0px_1px_2px_0px_rgba(9,9,11,0.12), 0px_0px_0px_1p_rgba(9, 9, 11, 0.08)]",
                                children: (0, s.jsx)("span", {
                                  className:
                                    "w-full h-full group-hover:bg-black group-hover:text-white transition-all ease-linear duration-100  bg-white font-medium text-sm rounded-lg font-inter flex items-center justify-center",
                                  children: "Contact us",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        q = {
          src: "/_next/static/media/explore.6b8fa1e3.svg",
          height: 450,
          width: 1132,
          blurWidth: 0,
          blurHeight: 0,
        },
        Z = {
          src: "/_next/static/media/explore1.1cd1c64d.png",
          height: 214,
          width: 411,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAFVBMVEX78/b8+Pndv8n+/P3////FrLX///8PbnRHAAAAB3RSTlM8vkjEEFERXv3SNQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUeJw1ybEBAAAIwrCC4P8nO5k1MJI0sNg2IbSF8HUEZgA+JjWdOgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 4,
        },
        $ = {
          src: "/_next/static/media/explore2.96a2d2d2.png",
          height: 214,
          width: 411,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAJFBMVEX8+/z39fj39fj8+fv6+Pr8+vvy7/L08vTg5vj4+v/18fb48eoXEyPoAAAADHRSTlPnt8jx2224yCp2myYeaPi0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJklEQVR4nB3Bhw0AMAgDsCyg4/9/K9VG8Amb7CYLqzXSuajYduoBBpYAc3OkVScAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 4,
        },
        ee = {
          src: "/_next/static/media/explore3.a213691a.png",
          height: 234,
          width: 411,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAANlBMVEX8/P3v3+X69/jc0NOfeYbr4eT87vH//f339f77+vzp4fH/obv18fzu4OTc2urk4PTm4/Xv7fc1hGYbAAAAEnRSTlP5cuGOO6Bj1P7tpRPCfPzD//5CdoDKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nAXBgQHAIAgEscOiD9VW3H9ZE5qkFsBjNnZF4O7zrb/o/RsrziFTSuACGBYBJ+WEFoIAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 5,
        },
        et = () => {
          let [e, t] = (0, l.useState)(null),
            a = (t) =>
              null === e
                ? ""
                : e === t
                ? "lg:-translate-y-[50px]"
                : "lg:translate-y-[50px]",
            i = [
              {
                image: Z,
                shadow: "0px 0px 48px 0px rgba(255, 48, 110, 0.20)",
                border: "border-[rgba(255,48,110,0.10)]",
                title: (0, s.jsxs)("p", {
                  className: "font-inter text-base font-semibold mt-8 mb-2",
                  children: [
                    (0, s.jsx)("span", {
                      className: "text-[#FF306E]",
                      children: "300+ logic blocks ",
                    }),
                    (0, s.jsx)("span", {
                      className: "text-[#0E121B]",
                      children: "for your dApps",
                    }),
                  ],
                }),
                description:
                  "Power your dApps with 300+ logic blocks, speeding up development without complex coding.",
              },
              {
                image: $,
                shadow: "0px 0px 48px 0px rgba(255, 134, 48, 0.20)",
                border: "border-[rgba(241,215,137,0.24)]",
                title: (0, s.jsxs)("p", {
                  className: "font-inter text-base font-semibold mt-8 mb-2",
                  children: [
                    (0, s.jsx)("span", {
                      className: "text-[#0E121B]",
                      children: "Build faster with",
                    }),
                    (0, s.jsx)("span", {
                      className: "text-[#FF8447]",
                      children: " AI assistant ",
                    }),
                  ],
                }),
                description:
                  "Let the AI build your project, turning your ideas into reality at lightning speed with zero effort required.",
              },
              {
                image: ee,
                shadow: "0px 0px 48px 0px rgba(59, 48, 255, 0.16)",
                border: "border-[rgba(168,147,253,0.12)]",
                title: (0, s.jsxs)("p", {
                  className: "font-inter text-base font-semibold mt-8 mb-2",
                  children: [
                    (0, s.jsx)("span", {
                      className: "text-[#0E121B]",
                      children: "Tap into community-built",
                    }),
                    (0, s.jsx)("span", {
                      className: "text-[#7D52F4]",
                      children: " templates",
                    }),
                  ],
                }),
                description:
                  "Unlock endless possibilities by using Xetra AI ready-made templates, speeding up your development.",
              },
            ];
          return (0, s.jsx)("main", {
            className: "my-[100px]",
            children: (0, s.jsxs)("section", {
              className:
                "w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-6 lg:h-[1072px]",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "w-full lg:h-[702px] bg-explore rounded-[32px] pt-12 px-4 lg:px-0",
                  children: [
                    (0, s.jsx)("h2", {
                      className:
                        "text-[#0E121B] text-[32px] lg:text-[40px] font-semibold text-start lg:text-center",
                      children: "No-Code, AI-Powered dApp Builder",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-base text-[#666] font-inter w-full lg:w-[658px] mx-auto text-start lg:text-center my-4",
                      children:
                        "Create dApps with ease using a no-code node editor and Xetra AI chat - shape your app logic for bots, trades, and token deployment in minute without writing a single line of code.",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "flex items-center justify-start lg:justify-center gap-3 mb-12",
                      children: [
                        (0, s.jsx)(g, {
                          title: "Start Building",
                          className: "w-[123px]",
                        }),
                        (0, s.jsx)(h.default, {
                          href: "https://app.xetraai.xyz/?type=store&tag=All",
                          target: "_blank",
                          className:
                            "w-[169px] bg-get-started group border border-[#09090B/80%] rounded-lg h-[36px] shadow-[0px_1px_2px_0px_rgba(9,9,11,0.12), 0px_0px_0px_1p_rgba(9, 9, 11, 0.08)]",
                          children: (0, s.jsx)("span", {
                            className:
                              "w-full h-full group-hover:bg-black group-hover:text-white transition-all ease-linear duration-100  bg-white font-medium text-sm rounded-lg font-inter flex items-center justify-center",
                            children: "Explore Marketplace",
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsx)(o.default, {
                      src: q,
                      alt: "explore",
                      priority: !0,
                      className: "w-full hidden md:block",
                    }),
                    (0, s.jsx)(o.default, {
                      src: q,
                      alt: "explore",
                      priority: !0,
                      className: "w-full block md:hidden",
                    }),
                  ],
                }),
                (0, s.jsx)("section", {
                  className:
                    "mt-20 lg:mt-0 px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:absolute lg:bottom-0",
                  children: i.map((e, l) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        style: { boxShadow: e.shadow },
                        className: "h-full border "
                          .concat(
                            e.border,
                            " bg-[#fff] cursor-pointer rounded-[32px] p-8 transition-all ease-linear duration-150 "
                          )
                          .concat(a(l)),
                        onMouseEnter: () => t(l),
                        onMouseLeave: () => t(null),
                        children: [
                          (0, s.jsx)(o.default, {
                            src: e.image,
                            alt: "explore",
                            className: l > 0 ? "w-[350px]" : "",
                          }),
                          e.title,
                          (0, s.jsx)("p", {
                            className: "text-sm font-inter text-[#666]",
                            children: e.description,
                          }),
                        ],
                      },
                      l
                    )
                  ),
                }),
              ],
            }),
          });
        },
        ea = a(1932),
        es = {
          src: "/_next/static/media/setting.fa33cf88.svg",
          height: 22,
          width: 22,
          blurWidth: 0,
          blurHeight: 0,
        },
        el = {
          src: "/_next/static/media/setting-1.f2d7cca3.svg",
          height: 22,
          width: 22,
          blurWidth: 0,
          blurHeight: 0,
        },
        ei = {
          src: "/_next/static/media/button-tabs.0eb8592f.svg",
          height: 32,
          width: 52,
          blurWidth: 0,
          blurHeight: 0,
        },
        er = () => {
          let e = [
            "Set Up Easily with No-Code and AI",
            "Run, Monitor, and Analyze Data in Real-Time",
            "Sync and Automate Logic Across Multiple Blockchains",
          ];
          return (0, s.jsx)("main", {
            id: "resources",
            className: "py-[100px]",
            children: (0, s.jsxs)("main", {
              className: "lg:h-[340px] w-full relative",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "w-[99.99%] h-[44px] 2xl:h-[50px] bg-launch-app rotate-[-1.5deg] py-3 px-4 lg:px-[60px] absolute top-[-21px] 2xl:top-[-25px] left-0",
                  children: (0, s.jsx)(ea.Z, {
                    direction: "right",
                    className: "overflow-hidden",
                    children: Array.from({ length: 20 }).map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: "flex items-center gap-5 mx-5",
                          children: [
                            (0, s.jsx)(o.default, { src: es, alt: "icon" }),
                            (0, s.jsx)("span", {
                              className:
                                "text-clip text-sm font-semibold uppercase",
                              children: "What we offer",
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "bg-[#1B1B1B] py-10 px-4 lg:px-0 lg:py-20 h-full",
                  children: (0, s.jsxs)("div", {
                    className:
                      "w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-6 lg:h-[1072px]",
                    children: [
                      (0, s.jsx)("h2", {
                        className:
                          "text-[#F5F5F7] text-[32px] font-medium tracking-[-0.64px] mb-10 px-4 lg:px-0",
                        children:
                          "Decentralized Business Automation Across Blockchains",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "flex flex-col lg:flex-row lg:items-center gap-3",
                        children: e.map((t, a) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className:
                                "flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10 px-4 lg:px-0",
                              children: [
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)(o.default, {
                                      src: ei,
                                      alt: "btn",
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "mt-4 text-[#AEAEAE] text-base font-normal font-inter",
                                      children: t,
                                    }),
                                  ],
                                }),
                                a !== e.length - 1 &&
                                  (0, s.jsx)("span", {
                                    className:
                                      "w-[1px] h-[72px] bg-[#D8D8D8] lg:inline-block mr-10 hidden",
                                  }),
                                a !== e.length - 1 &&
                                  (0, s.jsx)("span", {
                                    className:
                                      "w-[140px] h-[1px] bg-[#D8D8D8] inline-block mr-10 lg:hidden",
                                  }),
                              ],
                            },
                            a
                          )
                        ),
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)("div", {
                  className:
                    "w-[99.99%] h-[44px] 2xl:h-[50px] bg-[#DDDDDD] rotate-[-1.5deg] py-3 px-4 lg:px-[60px] absolute bottom-[-21px] 2xl:bottom-[-25px] left-0",
                  children: (0, s.jsx)(ea.Z, {
                    className: "absolute",
                    children: Array.from({ length: 20 }).map((e, t) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: "flex items-center gap-5 mx-5",
                          children: [
                            (0, s.jsx)(o.default, { src: el, alt: "icon" }),
                            (0, s.jsx)("span", {
                              className:
                                "text-[#666666] text-sm font-semibold uppercase",
                              children: "What we offer",
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                }),
              ],
            }),
          });
        },
        en = {
          src: "/_next/static/media/logo-footer.a1364418.svg",
          height: 32,
          width: 126,
          blurWidth: 0,
          blurHeight: 0,
        },
        ec = () =>
          (0, s.jsx)("main", {
            className: "bg-[#1B1B1B] pt-10 mt-[100px]",
            children: (0, s.jsxs)("section", {
              className:
                "w-full lg:max-w-[1200px] 2xl:max-w-[1340px] h-full mx-auto relative py-6",
              children: [
                (0, s.jsxs)("section", {
                  className:
                    "flex flex-col gap-8 lg:flex-row px-4 lg:px-0 items-start justify-between",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "flex flex-col gap-3 px-4 lg:px-0 w-full lg:w-[320px]",
                      children: (0, s.jsx)(o.default, { src: en, alt: "logo" }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "w-full lg:w-fit px-4 lg:px-0",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "grid grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[120px] font-inter",
                          children: [
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("h2", {
                                  className:
                                    "text-[#666] font-semibold mb-2 text-sm font-chakra_petch",
                                  children: "OUR CHAIN",
                                }),
                                (0, s.jsx)("ul", {
                                  className: "space-y-2",
                                  children: [
                                    { href: "#about", label: "About Xetra" },
                                    {
                                      href: "#features",
                                      label: "Key Features",
                                    },
                                    { href: "#products", label: "Products" },
                                    { href: "#resources", label: "Resources" },                                    
                                  ].map((e) =>
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        children: (0, s.jsx)(h.default, {
                                          href: e.href,
                                          className:
                                            "hover:text-[#FF6600] transition-colors py-2 text-[#D8D8D8]",
                                          children: e.label,
                                        }),
                                      },
                                      e.label
                                    )
                                  ),
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("h2", {
                                  className:
                                    "text-[#666] font-semibold mb-2 text-sm font-chakra_petch",
                                  children: "PRODUCTS",
                                }),
                                (0, s.jsx)("ul", {
                                  className: "space-y-2",
                                  children: [
                                    {
                                      href: "https://app.xetraai.xyz",
                                      label: "AI Chat Bot",
                                    },
                                    {
                                      href: "https://app.xetraai.xyz/?type=create",
                                      label: "No-code IDE",
                                    },
                                    {
                                      href: "https://app.xetraai.xyz/?type=store&tag=All",
                                      label: "Marketplace",
                                    },
                                  ].map((e) =>
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        children: (0, s.jsx)(h.default, {
                                          href: e.href,
                                          rel: "noreferrer",
                                          target: "_blank",
                                          className:
                                            "hover:text-[#FF6600] transition-colors py-2 text-[#D8D8D8]",
                                          children: e.label,
                                        }),
                                      },
                                      e.label
                                    )
                                  ),
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("h2", {
                                  className:
                                    "text-[#666] font-semibold mb-2 text-sm font-chakra_petch",
                                  children: "Info",
                                }),
                                (0, s.jsx)("ul", {
                                  className: "space-y-2",
                                  children: [
                                    {
                                      href: "https://etherscan.io/address/0xCFDeAef5A13B5FB363c7F47a54D5aab3BD139bC4",
                                      label: "Etherscan",
                                    },
                                    {
                                      href: "https://dexscreener.com/ethereum/0x000000000000000000",
                                      label: "Dexscreener",
                                    },
                                    {
                                      href: "https://www.dextools.io/app/en/ether/pair-explorer/0x000000000000000000?t=1735232319306",
                                      label: "Dextools",
                                    },
                                    {
                                      href: "https://app.uniswap.org/explore/tokens/ethereum/0xCFDeAef5A13B5FB363c7F47a54D5aab3BD139bC4",
                                      label: "Buy",
                                    },
                                  ].map((e) =>
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        children: (0, s.jsx)(h.default, {
                                          href: e.href,
                                          target: "_blank",
                                          className:
                                            "hover:text-[#FF6600] transition-colors py-2 text-[#D8D8D8]",
                                          children: e.label,
                                        }),
                                      },
                                      e.label
                                    )
                                  ),
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("h2", {
                                  className:
                                    "text-[#666] font-semibold mb-2 text-sm font-chakra_petch",
                                  children: "FOLLOW US",
                                }),
                                (0, s.jsx)("ul", {
                                  className: "space-y-2",
                                  children: [
                                    {
                                      href: "https://t.me/xetraai_eth",
                                      label: "Telegram",
                                      icon: r,
                                    },
                                    {
                                      href: "https://x.com/xetraai_eth",
                                      label: "Twitter",
                                      icon: c,
                                    },
                                    {
                                      href: "https://app.xetraai.xyz/",
                                      label: "Dapp",
                                      icon: d,
                                    },
                                    {
                                      href: "https://docs.xetraai.xyz/",
                                      label: "Docs",
                                      icon: n,
                                    },
                                  ].map((e) =>
                                    (0, s.jsx)(
                                      "li",
                                      {
                                        children: (0, s.jsxs)(h.default, {
                                          href: e.href,
                                          rel: "noreferrer",
                                          target: "_blank",
                                          className:
                                            "hover:text-[#FF6600] transition-colors py-2 text-[#D8D8D8] flex items-center gap-[10px]",
                                          children: [
                                            (0, s.jsx)(o.default, {
                                              src: e.icon,
                                              alt: "icon",
                                            }),
                                            e.label,
                                          ],
                                        }),
                                      },
                                      e.label
                                    )
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, s.jsx)("button", {
                          onClick: () => {
                            window.scrollTo(0, 0);
                          },
                          className:
                            "bg-white text-black px-4 py-2 rounded-lg font-inter text-sm font-semibold ml-auto block w-fit mt-6",
                          children: "Back to top",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsx)("p", {
                  className:
                    "py-4 text-center border-t-[1px] border-[#E1E4EA1A] mt-8 text-sm font-normal font-inter text-[#666]",
                  children: "\xa9 2025 Xetra AI. All Rights Reserved.",
                }),
              ],
            }),
          }),
        ex = {
          src: "/_next/static/media/space.03950ab7.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        ed = a(3162),
        eo = {
          src: "/_next/static/media/o1.6f2ffd6f.svg",
          height: 34,
          width: 34,
          blurWidth: 0,
          blurHeight: 0,
        },
        eh = {
          src: "/_next/static/media/o2.8fb5c6b1.svg",
          height: 18,
          width: 18,
          blurWidth: 0,
          blurHeight: 0,
        },
        eA = {
          src: "/_next/static/media/o3.03f4b1b2.svg",
          height: 62,
          width: 62,
          blurWidth: 0,
          blurHeight: 0,
        },
        ep = {
          src: "/_next/static/media/o4.ca1bfd6d.svg",
          height: 66,
          width: 66,
          blurWidth: 0,
          blurHeight: 0,
        },
        em = {
          src: "/_next/static/media/o5.f65b410c.svg",
          height: 27,
          width: 27,
          blurWidth: 0,
          blurHeight: 0,
        },
        eu = {
          src: "/_next/static/media/o6.d684c70d.svg",
          height: 16,
          width: 17,
          blurWidth: 0,
          blurHeight: 0,
        },
        eg = {
          src: "/_next/static/media/o7.04963ef3.svg",
          height: 16,
          width: 16,
          blurWidth: 0,
          blurHeight: 0,
        },
        ef = {
          src: "/_next/static/media/o8.b172c008.svg",
          height: 57,
          width: 54,
          blurWidth: 0,
          blurHeight: 0,
        },
        eb = {
          src: "/_next/static/media/o9.e71d781d.svg",
          height: 60,
          width: 61,
          blurWidth: 0,
          blurHeight: 0,
        },
        ew = {
          src: "/_next/static/media/o10.bbed1184.svg",
          height: 26,
          width: 26,
          blurWidth: 0,
          blurHeight: 0,
        },
        ej = {
          src: "/_next/static/media/outline1.2ee02dc4.png",
          height: 714,
          width: 714,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAABlBMVEVMaXEAAACaXKEdAAAAAnRSTlMAAQGU/a4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAPSURBVHicY2AgAjASVgMAAGsAAl2/+RgAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        eN = {
          src: "/_next/static/media/logo.b8258ba7.svg",
          height: 66,
          width: 66,
          blurWidth: 0,
          blurHeight: 0,
        },
        ev = () => {
          let [e, t] = (0, l.useState)(1);
          (0, l.useEffect)(() => {
            let e = () => {
              let e = document.querySelector(".orbit-container");
              e && t(Math.min(e.clientWidth, 714) / 714);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []);
          let a = function (t) {
              let a =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                s =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                l = t * e,
                i = [],
                r = [];
              for (let e = 0; e <= 60; e++) {
                let t = (e / 60) * Math.PI * 2 + a;
                i.push(Math.cos(s ? -t : t) * l),
                  r.push(Math.sin(s ? -t : t) * l);
              }
              return { x: i, y: r };
            },
            i = {
              orbit12: { radius: 357, offset: (170 / 180) * Math.PI },
              orbit34: { radius: 307, offset: (150 / 180) * Math.PI },
              orbit5: { radius: 270 },
              orbit67: { radius: 230, offset: (160 / 180) * Math.PI },
              orbit89: { radius: 190, offset: (160 / 180) * Math.PI },
              orbit10: { radius: 148 },
            },
            r = {
              path1: a(i.orbit12.radius, 0),
              path2: a(i.orbit12.radius, i.orbit12.offset),
              path3: a(i.orbit34.radius, 0, !0),
              path4: a(i.orbit34.radius, i.orbit34.offset, !0),
              path5: a(i.orbit5.radius),
              path6: a(i.orbit67.radius, 0, !0),
              path7: a(i.orbit67.radius, i.orbit67.offset, !0),
              path8: a(i.orbit89.radius, 0),
              path9: a(i.orbit89.radius, i.orbit89.offset),
              path10: a(i.orbit10.radius),
            },
            n = Object.values(i).map((e) => (2 * e.radius) / 714);
          return (0, s.jsxs)("div", {
            className:
              "orbit-container relative w-full h-full max-h-[715px] flex items-center justify-center",
            children: [
              n.map((t, a) =>
                (0, s.jsx)(
                  "div",
                  {
                    className: "absolute",
                    style: {
                      width: "".concat(714, "px"),
                      height: "".concat(714, "px"),
                      transform: "scale(".concat(t * e, ")"),
                    },
                    children: (0, s.jsx)(o.default, {
                      src: ej,
                      alt: "orbit-ring-".concat(a + 1),
                      className: "w-full h-full",
                    }),
                  },
                  a
                )
              ),
              (0, s.jsx)(o.default, {
                src: eN,
                alt: "logo",
                className:
                  "absolute z-50 -mt-16 animate-[bounce_2.5s_infinite]",
                style: { transform: "scale(".concat(e, ")") },
              }),
              (0, s.jsx)(ed.E.div, {
                className: "absolute z-10",
                animate: { x: r.path1.x, y: r.path1.y },
                transition: { duration: 20, repeat: 1 / 0, ease: "linear" },
                children: (0, s.jsx)(o.default, { src: eo, alt: "orbit1" }),
              }),
              (0, s.jsx)(ed.E.div, {
                className: "absolute z-10",
                animate: { x: r.path2.x, y: r.path2.y },
                transition: { duration: 20, repeat: 1 / 0, ease: "linear" },
                children: (0, s.jsx)(o.default, { src: eh, alt: "orbit2" }),
              }),
              (0, s.jsx)(ed.E.div, {
                className: "absolute z-20",
                animate: { x: r.path3.x, y: r.path3.y },
                transition: { duration: 18, repeat: 1 / 0, ease: "linear" },
                children: (0, s.jsx)(o.default, {
                  src: eA,
                  alt: "orbit3",
                  style: { transform: "scale(".concat(e, ")") },
                }),
              }),
              (0, s.jsx)(ed.E.div, {
                className: "absolute z-20",
                animate: { x: r.path4.x, y: r.path4.y },
                transition: { duration: 18, repeat: 1 / 0, ease: "linear" },
                children: (0, s.jsx)(o.default, {
                  src: ep,
                  alt: "orbit4",
                  style: { transform: "scale(".concat(e, ")") },
                }),
              }),
              (0, s.jsx)(ed.E.div, {
                className: "absolute z-30",
                animate: { x: r.path5.x, y: r.path5.y },
                transition: { duration: 16, repeat: 1 / 0, ease: "linear" },
                children: (0, s.jsx)(o.default, { src: em, alt: "orbit5" }),
              }),
              (0, s.jsx)(ed.E.div, {
                className: "absolute z-40",
                animate: { x: r.path6.x, y: r.path6.y },
                transition: { duration: 14, repeat: 1 / 0, ease: "linear" },
                children: (0, s.jsx)(o.default, { src: eu, alt: "orbit6" }),
              }),
              (0, s.jsx)(ed.E.div, {
                className: "absolute z-40",
                animate: { x: r.path7.x, y: r.path7.y },
                transition: { duration: 14, repeat: 1 / 0, ease: "linear" },
                children: (0, s.jsx)(o.default, { src: eg, alt: "orbit7" }),
              }),
              (0, s.jsx)(ed.E.div, {
                className: "absolute z-50",
                animate: { x: r.path8.x, y: r.path8.y },
                transition: { duration: 12, repeat: 1 / 0, ease: "linear" },
                children: (0, s.jsx)(o.default, {
                  src: ef,
                  alt: "orbit8",
                  style: { transform: "scale(".concat(e, ")") },
                }),
              }),
              (0, s.jsx)(ed.E.div, {
                className: "absolute z-50",
                animate: { x: r.path9.x, y: r.path9.y },
                transition: { duration: 12, repeat: 1 / 0, ease: "linear" },
                children: (0, s.jsx)(o.default, {
                  src: eb,
                  alt: "orbit9",
                  style: { transform: "scale(".concat(e, ")") },
                }),
              }),
              (0, s.jsx)(ed.E.div, {
                className: "absolute z-60",
                animate: { x: r.path10.x, y: r.path10.y },
                transition: { duration: 10, repeat: 1 / 0, ease: "linear" },
                children: (0, s.jsx)(o.default, { src: ew, alt: "orbit10" }),
              }),
            ],
          });
        },
        ey = () =>
          (0, s.jsxs)("main", {
            className: "relative py-8",
            children: [
              (0, s.jsx)(y, {
                icon: ex,
                title: "Beta release",
                className: "w-[142px] h-[36px] mx-auto relative z-10",
              }),
              (0, s.jsx)("div", {
                className: "w-full relative z-[5] top-0 left-0",
                children: (0, s.jsxs)("div", {
                  className:
                    "w-full h-[190px] md:h-[356px] relative overflow-hidden ",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "absolute z-[5] w-full md:h-[715px] h-[380px] top-0 left-0 overflow-hidden",
                      children: (0, s.jsx)(ev, {}),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "absolute z-10 w-full h-1/2 bottom-0 left-0 bg-gradient-to-t from-white from-[0.5%] via-transparent to-transparent",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("section", {
                className:
                  "w-full lg:max-w-[1200px] 2xl:max-w-[1340px] mx-auto relative z-10",
                children: (0, s.jsxs)("div", {
                  className: "px-4",
                  children: [
                    (0, s.jsxs)("h2", {
                      className:
                        "text-[#0E121B] text-[40px] lg:text-[64px] font-normal leading-[46px] lg:leading-[84px] text-banner font-chakra_petch",
                      children: [
                        "No Code. ",
                        (0, s.jsx)("br", { className: " block md:hidden" }),
                        "No Limits. ",
                        (0, s.jsx)("br", {}),
                        " Infinite Creativity.",
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "w-full lg:w-[514px] mx-auto text-center text-base font-inter text-[#666] mt-3 mb-6",
                      children:
                        "Turn your AI dreams into reality with Xetra AI - no coding, no limits, just unstoppable innovation on a censorship-resistant blockchain.",
                    }),
                    (0, s.jsx)(h.default, {
                      href: "https://app.xetraai.xyz",
                      target: "_blank",
                      className:
                        "w-[344px] mx-auto flex items-center justify-center gap-4",
                      children: (0, s.jsx)("button", {
                        className:
                          "px-6 py-3 bg-launch-app-1 border-[#FF6A001F] rounded-lg overflow-hidden text-[#FFFFFF] text-sm font-semibold",
                        children: "Launch App",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
      function eE() {
        return (0, s.jsxs)("main", {
          children: [
            (0, s.jsx)(p, {}),
            (0, s.jsx)(N, {}),
            (0, s.jsx)(ey, {}),
            (0, s.jsx)(C, {}),
            (0, s.jsx)(U, {}),
            (0, s.jsx)(V, {}),
            (0, s.jsx)(er, {}),
            (0, s.jsx)(et, {}),
            (0, s.jsx)(Q, {}),
            (0, s.jsx)(J, {}),
            (0, s.jsx)(ec, {}),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [97, 971, 23, 744], function () {
      return e((e.s = 8350));
    }),
      (_N_E = e.O());
  },
]);
