const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SendMail-BTTMb4ha.js","assets/index.esm-CjE2QIex.js","assets/index-D8HWEqz1.js","assets/index-BNd6aqBt.css","assets/index-BHtaHxM4.css","assets/SendMail-aMwcx0sS.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { d as de, h as U, c as Nt, i as qt, b as Vt, a as Ft, e as jt, f as ze, _ as me, r as Oe, u as Ut, g as Xe, j as Wt, k as Ht, l as f, m as Kt, n as Me, w as Ze, o as Lt, p as xe, q as pt, N as mt, X as _t, A as Gt, s as Be, t as Jt, v as ft, x as Qt, y as Xt, z as Qe, B as Zt, C as Yt, D as E, E as Q, F as M, G as ae, H as ce, I as se, J as le, K as z, L as Ye, M as T, O as oe, P as e, Q as t, R as o, S as a, T as It, U as Ke, V as m, W as Pe, Y as Ge, Z as Ce, $ as rt, a0 as Ne, a1 as ea, a2 as ta, a3 as Mt, a4 as vt, a5 as pe, a6 as it, a7 as aa, a8 as He, a9 as Tt, aa as Pt, ab as X, ac as ut, ad as qe, ae as te, af as la, ag as Et, ah as Dt, ai as ye, aj as Ve, ak as na, al as ue, am as Rt, an as bt, ao as Ue, ap as Ee, aq as Le, ar as dt, as as et, at as ot, au as sa, av as oa, aw as ra, ax as ct, ay as $t, az as ia, aA as Bt, aB as zt, aC as Ot, aD as ua, aE as da, aF as ca, aG as pa, aH as ma, aI as _a, aJ as fa, aK as va, aL as ba, __tla as __tla_0 } from "./index-D8HWEqz1.js";
let en;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const ga = de({
    name: "Remove",
    render() {
      return U("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512"
      }, U("line", {
        x1: "400",
        y1: "256",
        x2: "112",
        y2: "256",
        style: `
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `
      }));
    }
  });
  function ha(_) {
    const { textColorDisabled: c } = _;
    return {
      iconColorDisabled: c
    };
  }
  const ya = Nt({
    name: "InputNumber",
    common: Ft,
    peers: {
      Button: Vt,
      Input: qt
    },
    self: ha
  }), wa = jt([
    ze("input-number-suffix", `
 display: inline-block;
 margin-right: 10px;
 `),
    ze("input-number-prefix", `
 display: inline-block;
 margin-left: 10px;
 `)
  ]);
  function ka(_) {
    return _ == null || typeof _ == "string" && _.trim() === "" ? null : Number(_);
  }
  function xa(_) {
    return _.includes(".") && (/^(-)?\d+.*(\.|0)$/.test(_) || /^-?\d*$/.test(_)) || _ === "-" || _ === "-0";
  }
  function nt(_) {
    return _ == null ? true : !Number.isNaN(_);
  }
  function gt(_, c) {
    return typeof _ != "number" ? "" : c === void 0 ? String(_) : _.toFixed(c);
  }
  function st(_) {
    if (_ === null) return null;
    if (typeof _ == "number") return _;
    {
      const c = Number(_);
      return Number.isNaN(c) ? null : c;
    }
  }
  let ht, yt, Ca, Je, Aa, Sa, Ua, La, Ia, Ma, Te, Ta, Pa, Ea, Da, Ra, $a, Ba, wt, za, Oa, Na, qa, Va, Fa, ja, Wa, Ha, Ka, Ga, Ja, Qa, Xa, Za, Ya, el, tl, al, ll, kt, nl, sl, ol, rl, il, ul, dl, cl, pl, ml, xt, _l, Ct, fl, vl, bl, gl, hl, yl, wl, kl, xl, Cl, Al, Sl, Ul, Ll, Il, Ml, Tl, At, Pl, El, Dl, Rl, $l, Bl, zl, Ol, Nl, ql, St, Vl, Fl, jl, Wl, Hl, Kl, Gl, Jl, Ql, Xl, Zl;
  ht = 800;
  yt = 100;
  Ca = Object.assign(Object.assign({}, Xe.props), {
    autofocus: Boolean,
    loading: {
      type: Boolean,
      default: void 0
    },
    placeholder: String,
    defaultValue: {
      type: Number,
      default: null
    },
    value: Number,
    step: {
      type: [
        Number,
        String
      ],
      default: 1
    },
    min: [
      Number,
      String
    ],
    max: [
      Number,
      String
    ],
    size: String,
    disabled: {
      type: Boolean,
      default: void 0
    },
    validator: Function,
    bordered: {
      type: Boolean,
      default: void 0
    },
    showButton: {
      type: Boolean,
      default: true
    },
    buttonPlacement: {
      type: String,
      default: "right"
    },
    inputProps: Object,
    readonly: Boolean,
    clearable: Boolean,
    keyboard: {
      type: Object,
      default: {}
    },
    updateValueOnInput: {
      type: Boolean,
      default: true
    },
    round: {
      type: Boolean,
      default: void 0
    },
    parse: Function,
    format: Function,
    precision: Number,
    status: String,
    "onUpdate:value": [
      Function,
      Array
    ],
    onUpdateValue: [
      Function,
      Array
    ],
    onFocus: [
      Function,
      Array
    ],
    onBlur: [
      Function,
      Array
    ],
    onClear: [
      Function,
      Array
    ],
    onChange: [
      Function,
      Array
    ]
  });
  Je = de({
    name: "InputNumber",
    props: Ca,
    slots: Object,
    setup(_) {
      const { mergedBorderedRef: c, mergedClsPrefixRef: r, mergedRtlRef: l, mergedComponentPropsRef: n } = Ut(_), b = Xe("InputNumber", "-input-number", wa, ya, _, r), { localeRef: p } = Wt("InputNumber"), s = Ht(_, {
        mergedSize: (h) => {
          var B, L;
          const { size: ee } = _;
          if (ee) return ee;
          const { mergedSize: ie } = h || {};
          if (ie == null ? void 0 : ie.value) return ie.value;
          const be = (L = (B = n == null ? void 0 : n.value) === null || B === void 0 ? void 0 : B.InputNumber) === null || L === void 0 ? void 0 : L.size;
          return be || "medium";
        }
      }), { mergedSizeRef: y, mergedDisabledRef: g, mergedStatusRef: d } = s, i = f(null), w = f(null), S = f(null), I = f(_.defaultValue), k = Xt(_, "value"), v = Kt(k, I), u = f(""), O = (h) => {
        const B = String(h).split(".")[1];
        return B ? B.length : 0;
      }, K = (h) => {
        const B = [
          _.min,
          _.max,
          _.step,
          h
        ].map((L) => L === void 0 ? 0 : O(L));
        return Math.max(...B);
      }, D = Me(() => {
        const { placeholder: h } = _;
        return h !== void 0 ? h : p.value.placeholder;
      }), x = Me(() => {
        const h = st(_.step);
        return h !== null ? h === 0 ? 1 : Math.abs(h) : 1;
      }), N = Me(() => {
        const h = st(_.min);
        return h !== null ? h : null;
      }), W = Me(() => {
        const h = st(_.max);
        return h !== null ? h : null;
      }), q = () => {
        const { value: h } = v;
        if (nt(h)) {
          const { format: B, precision: L } = _;
          B ? u.value = B(h) : h === null || L === void 0 || O(h) > L ? u.value = gt(h, void 0) : u.value = gt(h, L);
        } else u.value = String(h);
      };
      q();
      const C = (h) => {
        const { value: B } = v;
        if (h === B) {
          q();
          return;
        }
        const { "onUpdate:value": L, onUpdateValue: ee, onChange: ie } = _, { nTriggerFormInput: be, nTriggerFormChange: $e } = s;
        ie && Be(ie, h), ee && Be(ee, h), L && Be(L, h), I.value = h, be(), $e();
      }, J = ({ offset: h, doUpdateIfValid: B, fixPrecision: L, isInputing: ee }) => {
        const { value: ie } = u;
        if (ee && xa(ie)) return false;
        const be = (_.parse || ka)(ie);
        if (be === null) return B && C(null), null;
        if (nt(be)) {
          const $e = O(be), { precision: We } = _;
          if (We !== void 0 && We < $e && !L) return false;
          let Se = Number.parseFloat((be + h).toFixed(We ?? K(be)));
          if (nt(Se)) {
            const { value: at } = W, { value: lt } = N;
            if (at !== null && Se > at) {
              if (!B || ee) return false;
              Se = at;
            }
            if (lt !== null && Se < lt) {
              if (!B || ee) return false;
              Se = lt;
            }
            return _.validator && !_.validator(Se) ? false : (B && C(Se), Se);
          }
        }
        return false;
      }, V = Me(() => J({
        offset: 0,
        doUpdateIfValid: false,
        isInputing: false,
        fixPrecision: false
      }) === false), $ = Me(() => {
        const { value: h } = v;
        if (_.validator && h === null) return false;
        const { value: B } = x;
        return J({
          offset: -B,
          doUpdateIfValid: false,
          isInputing: false,
          fixPrecision: false
        }) !== false;
      }), Z = Me(() => {
        const { value: h } = v;
        if (_.validator && h === null) return false;
        const { value: B } = x;
        return J({
          offset: +B,
          doUpdateIfValid: false,
          isInputing: false,
          fixPrecision: false
        }) !== false;
      });
      function _e(h) {
        const { onFocus: B } = _, { nTriggerFormFocus: L } = s;
        B && Be(B, h), L();
      }
      function A(h) {
        var B, L;
        if (h.target === ((B = i.value) === null || B === void 0 ? void 0 : B.wrapperElRef)) return;
        const ee = J({
          offset: 0,
          doUpdateIfValid: true,
          isInputing: false,
          fixPrecision: true
        });
        if (ee !== false) {
          const $e = (L = i.value) === null || L === void 0 ? void 0 : L.inputElRef;
          $e && ($e.value = String(ee || "")), v.value === ee && q();
        } else q();
        const { onBlur: ie } = _, { nTriggerFormBlur: be } = s;
        ie && Be(ie, h), be(), Jt(() => {
          q();
        });
      }
      function F(h) {
        const { onClear: B } = _;
        B && Be(B, h);
      }
      function ne() {
        const { value: h } = Z;
        if (!h) {
          ke();
          return;
        }
        const { value: B } = v;
        if (B === null) _.validator || C(H());
        else {
          const { value: L } = x;
          J({
            offset: L,
            doUpdateIfValid: true,
            isInputing: false,
            fixPrecision: true
          });
        }
      }
      function Y() {
        const { value: h } = $;
        if (!h) {
          P();
          return;
        }
        const { value: B } = v;
        if (B === null) _.validator || C(H());
        else {
          const { value: L } = x;
          J({
            offset: -L,
            doUpdateIfValid: true,
            isInputing: false,
            fixPrecision: true
          });
        }
      }
      const R = _e, fe = A;
      function H() {
        if (_.validator) return null;
        const { value: h } = N, { value: B } = W;
        return h !== null ? Math.max(0, h) : B !== null ? Math.min(0, B) : 0;
      }
      function Fe(h) {
        F(h), C(null);
      }
      function je(h) {
        var B, L, ee;
        !((B = S.value) === null || B === void 0) && B.$el.contains(h.target) && h.preventDefault(), !((L = w.value) === null || L === void 0) && L.$el.contains(h.target) && h.preventDefault(), (ee = i.value) === null || ee === void 0 || ee.activate();
      }
      let we = null, re = null, G = null;
      function P() {
        G && (window.clearTimeout(G), G = null), we && (window.clearInterval(we), we = null);
      }
      let j = null;
      function ke() {
        j && (window.clearTimeout(j), j = null), re && (window.clearInterval(re), re = null);
      }
      function ve() {
        P(), G = window.setTimeout(() => {
          we = window.setInterval(() => {
            Y();
          }, yt);
        }, ht), ft("mouseup", document, P, {
          once: true
        });
      }
      function ge() {
        ke(), j = window.setTimeout(() => {
          re = window.setInterval(() => {
            ne();
          }, yt);
        }, ht), ft("mouseup", document, ke, {
          once: true
        });
      }
      const De = () => {
        re || ne();
      }, Ie = () => {
        we || Y();
      };
      function he(h) {
        var B, L;
        if (h.key === "Enter") {
          if (h.target === ((B = i.value) === null || B === void 0 ? void 0 : B.wrapperElRef)) return;
          J({
            offset: 0,
            doUpdateIfValid: true,
            isInputing: false,
            fixPrecision: true
          }) !== false && ((L = i.value) === null || L === void 0 || L.deactivate());
        } else if (h.key === "ArrowUp") {
          if (!Z.value || _.keyboard.ArrowUp === false) return;
          h.preventDefault(), J({
            offset: 0,
            doUpdateIfValid: true,
            isInputing: false,
            fixPrecision: true
          }) !== false && ne();
        } else if (h.key === "ArrowDown") {
          if (!$.value || _.keyboard.ArrowDown === false) return;
          h.preventDefault(), J({
            offset: 0,
            doUpdateIfValid: true,
            isInputing: false,
            fixPrecision: true
          }) !== false && Y();
        }
      }
      function Ae(h) {
        u.value = h, _.updateValueOnInput && !_.format && !_.parse && _.precision === void 0 && J({
          offset: 0,
          doUpdateIfValid: true,
          isInputing: true,
          fixPrecision: false
        });
      }
      Ze(v, () => {
        q();
      });
      const Re = {
        focus: () => {
          var h;
          return (h = i.value) === null || h === void 0 ? void 0 : h.focus();
        },
        blur: () => {
          var h;
          return (h = i.value) === null || h === void 0 ? void 0 : h.blur();
        },
        select: () => {
          var h;
          return (h = i.value) === null || h === void 0 ? void 0 : h.select();
        }
      }, tt = Lt("InputNumber", l, r);
      return Object.assign(Object.assign({}, Re), {
        rtlEnabled: tt,
        inputInstRef: i,
        minusButtonInstRef: w,
        addButtonInstRef: S,
        mergedClsPrefix: r,
        mergedBordered: c,
        uncontrolledValue: I,
        mergedValue: v,
        mergedPlaceholder: D,
        displayedValueInvalid: V,
        mergedSize: y,
        mergedDisabled: g,
        displayedValue: u,
        addable: Z,
        minusable: $,
        mergedStatus: d,
        handleFocus: R,
        handleBlur: fe,
        handleClear: Fe,
        handleMouseDown: je,
        handleAddClick: De,
        handleMinusClick: Ie,
        handleAddMousedown: ge,
        handleMinusMousedown: ve,
        handleKeyDown: he,
        handleUpdateDisplayedValue: Ae,
        mergedTheme: b,
        inputThemeOverrides: {
          paddingSmall: "0 8px 0 10px",
          paddingMedium: "0 8px 0 12px",
          paddingLarge: "0 8px 0 14px"
        },
        buttonThemeOverrides: xe(() => {
          const { self: { iconColorDisabled: h } } = b.value, [B, L, ee, ie] = Qt(h);
          return {
            textColorTextDisabled: `rgb(${B}, ${L}, ${ee})`,
            opacityDisabled: `${ie}`
          };
        })
      });
    },
    render() {
      const { mergedClsPrefix: _, $slots: c } = this, r = () => U(_t, {
        text: true,
        disabled: !this.minusable || this.mergedDisabled || this.readonly,
        focusable: false,
        theme: this.mergedTheme.peers.Button,
        themeOverrides: this.mergedTheme.peerOverrides.Button,
        builtinThemeOverrides: this.buttonThemeOverrides,
        onClick: this.handleMinusClick,
        onMousedown: this.handleMinusMousedown,
        ref: "minusButtonInstRef"
      }, {
        icon: () => pt(c["minus-icon"], () => [
          U(mt, {
            clsPrefix: _
          }, {
            default: () => U(ga, null)
          })
        ])
      }), l = () => U(_t, {
        text: true,
        disabled: !this.addable || this.mergedDisabled || this.readonly,
        focusable: false,
        theme: this.mergedTheme.peers.Button,
        themeOverrides: this.mergedTheme.peerOverrides.Button,
        builtinThemeOverrides: this.buttonThemeOverrides,
        onClick: this.handleAddClick,
        onMousedown: this.handleAddMousedown,
        ref: "addButtonInstRef"
      }, {
        icon: () => pt(c["add-icon"], () => [
          U(mt, {
            clsPrefix: _
          }, {
            default: () => U(Gt, null)
          })
        ])
      });
      return U("div", {
        class: [
          `${_}-input-number`,
          this.rtlEnabled && `${_}-input-number--rtl`
        ]
      }, U(me, {
        ref: "inputInstRef",
        autofocus: this.autofocus,
        status: this.mergedStatus,
        bordered: this.mergedBordered,
        loading: this.loading,
        value: this.displayedValue,
        onUpdateValue: this.handleUpdateDisplayedValue,
        theme: this.mergedTheme.peers.Input,
        themeOverrides: this.mergedTheme.peerOverrides.Input,
        builtinThemeOverrides: this.inputThemeOverrides,
        size: this.mergedSize,
        placeholder: this.mergedPlaceholder,
        disabled: this.mergedDisabled,
        readonly: this.readonly,
        round: this.round,
        textDecoration: this.displayedValueInvalid ? "line-through" : void 0,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        onKeydown: this.handleKeyDown,
        onMousedown: this.handleMouseDown,
        onClear: this.handleClear,
        clearable: this.clearable,
        inputProps: this.inputProps,
        internalLoadingBeforeSuffix: true
      }, {
        prefix: () => {
          var n;
          return this.showButton && this.buttonPlacement === "both" ? [
            r(),
            Oe(c.prefix, (b) => b ? U("span", {
              class: `${_}-input-number-prefix`
            }, b) : null)
          ] : (n = c.prefix) === null || n === void 0 ? void 0 : n.call(c);
        },
        suffix: () => {
          var n;
          return this.showButton ? [
            Oe(c.suffix, (b) => b ? U("span", {
              class: `${_}-input-number-suffix`
            }, b) : null),
            this.buttonPlacement === "right" ? r() : null,
            l()
          ] : (n = c.suffix) === null || n === void 0 ? void 0 : n.call(c);
        }
      }));
    }
  });
  Aa = ze("statistic", [
    Qe("label", `
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),
    ze("statistic-value", `
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `, [
      Qe("prefix", `
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `, [
        ze("icon", {
          verticalAlign: "-0.125em"
        })
      ]),
      Qe("content", `
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),
      Qe("suffix", `
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `, [
        ze("icon", {
          verticalAlign: "-0.125em"
        })
      ])
    ])
  ]);
  Sa = Object.assign(Object.assign({}, Xe.props), {
    tabularNums: Boolean,
    label: String,
    value: [
      String,
      Number
    ]
  });
  Ua = de({
    name: "Statistic",
    props: Sa,
    slots: Object,
    setup(_) {
      const { mergedClsPrefixRef: c, inlineThemeDisabled: r, mergedRtlRef: l } = Ut(_), n = Xe("Statistic", "-statistic", Aa, Zt, _, c), b = Lt("Statistic", l, c), p = xe(() => {
        const { self: { labelFontWeight: y, valueFontSize: g, valueFontWeight: d, valuePrefixTextColor: i, labelTextColor: w, valueSuffixTextColor: S, valueTextColor: I, labelFontSize: k }, common: { cubicBezierEaseInOut: v } } = n.value;
        return {
          "--n-bezier": v,
          "--n-label-font-size": k,
          "--n-label-font-weight": y,
          "--n-label-text-color": w,
          "--n-value-font-weight": d,
          "--n-value-font-size": g,
          "--n-value-prefix-text-color": i,
          "--n-value-suffix-text-color": S,
          "--n-value-text-color": I
        };
      }), s = r ? Yt("statistic", void 0, p, _) : void 0;
      return {
        rtlEnabled: b,
        mergedClsPrefix: c,
        cssVars: r ? void 0 : p,
        themeClass: s == null ? void 0 : s.themeClass,
        onRender: s == null ? void 0 : s.onRender
      };
    },
    render() {
      var _;
      const { mergedClsPrefix: c, $slots: { default: r, label: l, prefix: n, suffix: b } } = this;
      return (_ = this.onRender) === null || _ === void 0 || _.call(this), U("div", {
        class: [
          `${c}-statistic`,
          this.themeClass,
          this.rtlEnabled && `${c}-statistic--rtl`
        ],
        style: this.cssVars
      }, Oe(l, (p) => U("div", {
        class: `${c}-statistic__label`
      }, this.label || p)), U("div", {
        class: `${c}-statistic-value`,
        style: {
          fontVariantNumeric: this.tabularNums ? "tabular-nums" : ""
        }
      }, Oe(n, (p) => p && U("span", {
        class: `${c}-statistic-value__prefix`
      }, p)), this.value !== void 0 ? U("span", {
        class: `${c}-statistic-value__content`
      }, this.value) : Oe(r, (p) => p && U("span", {
        class: `${c}-statistic-value__content`
      }, p)), Oe(b, (p) => p && U("span", {
        class: `${c}-statistic-value__suffix`
      }, p))));
    }
  });
  La = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24"
  };
  Ia = de({
    name: "AddFilled",
    render: function(c, r) {
      return E(), Q("svg", La, r[0] || (r[0] = [
        M("path", {
          d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
          fill: "currentColor"
        }, null, -1)
      ]));
    }
  });
  Ma = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24"
  };
  Te = de({
    name: "CleaningServicesFilled",
    render: function(c, r) {
      return E(), Q("svg", Ma, r[0] || (r[0] = [
        M("path", {
          d: "M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z",
          fill: "currentColor"
        }, null, -1)
      ]));
    }
  });
  Ta = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24"
  };
  Pa = de({
    name: "DeleteFilled",
    render: function(c, r) {
      return E(), Q("svg", Ta, r[0] || (r[0] = [
        M("path", {
          d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",
          fill: "currentColor"
        }, null, -1)
      ]));
    }
  });
  Ea = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24"
  };
  Da = de({
    name: "SendOutlined",
    render: function(c, r) {
      return E(), Q("svg", Ea, r[0] || (r[0] = [
        M("path", {
          d: "M4.01 6.03l7.51 3.22l-7.52-1l.01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2l-15 2l.01 7L23 12L2.01 3z",
          fill: "currentColor"
        }, null, -1)
      ]));
    }
  });
  Ra = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 576 512"
  };
  $a = de({
    name: "MailBulk",
    render: function(c, r) {
      return E(), Q("svg", Ra, r[0] || (r[0] = [
        M("path", {
          d: "M160 448c-25.6 0-51.2-22.4-64-32c-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4c-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4c9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z",
          fill: "currentColor"
        }, null, -1)
      ]));
    }
  });
  Ba = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 640 512"
  };
  wt = de({
    name: "UserCheck",
    render: function(c, r) {
      return E(), Q("svg", Ba, r[0] || (r[0] = [
        M("path", {
          d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104l-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z",
          fill: "currentColor"
        }, null, -1)
      ]));
    }
  });
  za = {
    style: {
      overflow: "auto"
    }
  };
  Oa = {
    style: {
      display: "inline-block"
    }
  };
  Na = {
    __name: "SenderAccess",
    setup(_) {
      const { loading: c } = ce(), r = se(), { t: l } = le({
        messages: {
          en: {
            address: "Address",
            success: "Success",
            is_enabled: "Is Enabled",
            enable: "Enable",
            disable: "Disable",
            modify: "Modify",
            delete: "Delete",
            deleteTip: "Are you sure to delete this?",
            created_at: "Created At",
            action: "Action",
            itemCount: "itemCount",
            modalTip: "Please input the sender balance",
            balance: "Balance",
            query: "Query",
            ok: "OK"
          },
          zh: {
            address: "\u5730\u5740",
            success: "\u6210\u529F",
            is_enabled: "\u662F\u5426\u542F\u7528",
            enable: "\u542F\u7528",
            disable: "\u7981\u7528",
            modify: "\u4FEE\u6539",
            delete: "\u5220\u9664",
            deleteTip: "\u786E\u5B9A\u5220\u9664\u5417\uFF1F",
            created_at: "\u521B\u5EFA\u65F6\u95F4",
            action: "\u64CD\u4F5C",
            itemCount: "\u603B\u6570",
            modalTip: "\u8BF7\u8F93\u5165\u53D1\u4EF6\u989D\u5EA6",
            balance: "\u4F59\u989D",
            query: "\u67E5\u8BE2",
            ok: "\u786E\u5B9A"
          }
        }
      }), n = f([]), b = f(0), p = f(1), s = f(20), y = f({}), g = f(false), d = f(0), i = f(false), w = f(""), S = async () => {
        try {
          await T.fetch("/admin/address_sender", {
            method: "POST",
            body: JSON.stringify({
              address: y.value.address,
              address_id: y.value.id,
              balance: d.value,
              enabled: i.value ? 1 : 0
            })
          }), g.value = false, r.success(l("success")), await I();
        } catch (v) {
          r.error(v.message || "error");
        }
      }, I = async () => {
        try {
          w.value = w.value.trim();
          const { results: v, count: u } = await T.fetch(`/admin/address_sender?limit=${s.value}&offset=${(p.value - 1) * s.value}` + (w.value ? `&address=${w.value}` : ""));
          n.value = v, u > 0 && (b.value = u);
        } catch (v) {
          console.log(v), r.error(v.message || "error");
        }
      }, k = [
        {
          title: "ID",
          key: "id"
        },
        {
          title: l("address"),
          key: "address"
        },
        {
          title: l("created_at"),
          key: "created_at"
        },
        {
          title: l("balance"),
          key: "balance"
        },
        {
          title: l("is_enabled"),
          key: "enabled",
          render(v) {
            return U("div", [
              U("span", v.enabled ? l("enable") : l("disable"))
            ]);
          }
        },
        {
          title: l("action"),
          key: "actions",
          render(v) {
            return U("div", [
              U(z, {
                type: "success",
                tertiary: true,
                onClick: () => {
                  g.value = true, y.value = v, i.value = !!v.enabled, d.value = v.balance;
                }
              }, {
                default: () => l("modify")
              }),
              U(Ye, {
                onPositiveClick: async () => {
                  await T.fetch(`/admin/address_sender/${v.id}`, {
                    method: "DELETE"
                  }), await I();
                }
              }, {
                trigger: () => U(z, {
                  tertiary: true,
                  type: "error"
                }, {
                  default: () => l("delete")
                }),
                default: () => l("deleteTip")
              })
            ]);
          }
        }
      ];
      return Ze([
        p,
        s
      ], async () => {
        await I();
      }), oe(async () => {
        await I();
      }), (v, u) => {
        const O = Ke, K = It, D = Je, x = z, N = Pe, W = me, q = Ce, C = rt, J = Ne;
        return E(), Q("div", null, [
          e(N, {
            show: g.value,
            "onUpdate:show": u[3] || (u[3] = (V) => g.value = V),
            preset: "dialog"
          }, {
            action: t(() => [
              e(x, {
                loading: a(c),
                onClick: u[2] || (u[2] = (V) => S()),
                size: "small",
                tertiary: "",
                type: "primary"
              }, {
                default: t(() => [
                  m(o(a(l)("ok")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(y.value.address), 1),
              M("p", null, o(a(l)("modalTip")), 1),
              e(K, {
                "show-label": false
              }, {
                default: t(() => [
                  e(O, {
                    checked: i.value,
                    "onUpdate:checked": u[0] || (u[0] = (V) => i.value = V)
                  }, {
                    default: t(() => [
                      m(o(a(l)("enable")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "checked"
                  ])
                ]),
                _: 1
              }),
              e(K, {
                "show-label": false
              }, {
                default: t(() => [
                  e(D, {
                    value: d.value,
                    "onUpdate:value": u[1] || (u[1] = (V) => d.value = V),
                    min: 0,
                    max: 1e3
                  }, null, 8, [
                    "value"
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show"
          ]),
          e(q, null, {
            default: t(() => [
              e(W, {
                value: w.value,
                "onUpdate:value": u[4] || (u[4] = (V) => w.value = V),
                onKeydown: Ge(I, [
                  "enter"
                ])
              }, null, 8, [
                "value"
              ]),
              e(x, {
                onClick: I,
                type: "primary",
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(l)("query")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          M("div", za, [
            M("div", Oa, [
              e(C, {
                page: p.value,
                "onUpdate:page": u[5] || (u[5] = (V) => p.value = V),
                "page-size": s.value,
                "onUpdate:pageSize": u[6] || (u[6] = (V) => s.value = V),
                "item-count": b.value,
                "page-sizes": [
                  20,
                  50,
                  100
                ],
                "show-size-picker": ""
              }, {
                prefix: t(({ itemCount: V }) => [
                  m(o(a(l)("itemCount")) + ": " + o(V), 1)
                ]),
                _: 1
              }, 8, [
                "page",
                "page-size",
                "item-count"
              ])
            ]),
            e(J, {
              columns: k,
              data: n.value,
              bordered: false,
              embedded: ""
            }, null, 8, [
              "data"
            ])
          ])
        ]);
      };
    }
  };
  qa = ae(Na, [
    [
      "__scopeId",
      "data-v-bd8929db"
    ]
  ]);
  Va = {
    __name: "Statistics",
    setup(_) {
      const c = se(), { t: r } = le({
        messages: {
          en: {
            userCount: "User Count",
            addressCount: "Address Count",
            activeAddressCount7days: "7 days Active Address Count",
            activeAddressCount30days: "30 days Active Address Count",
            mailCount: "Mail Count",
            sendMailCount: "Send Mail Count"
          },
          zh: {
            userCount: "\u7528\u6237\u603B\u6570",
            addressCount: "\u90AE\u7BB1\u5730\u5740\u603B\u6570",
            activeAddressCount7days: "7\u5929\u6D3B\u8DC3\u90AE\u7BB1\u5730\u5740\u603B\u6570",
            activeAddressCount30days: "30\u5929\u6D3B\u8DC3\u90AE\u7BB1\u5730\u5740\u603B\u6570",
            mailCount: "\u90AE\u4EF6\u603B\u6570",
            sendMailCount: "\u53D1\u9001\u90AE\u4EF6\u603B\u6570"
          }
        }
      }), l = f({
        addressCount: 0,
        userCount: 0,
        mailCount: 0,
        activeAddressCount7days: 0,
        activeAddressCount30days: 0,
        sendMailCount: 0
      }), n = async () => {
        try {
          const { userCount: b, mailCount: p, sendMailCount: s, addressCount: y, activeAddressCount7days: g, activeAddressCount30days: d } = await T.fetch("/admin/statistics");
          l.value.mailCount = p || 0, l.value.sendMailCount = s || 0, l.value.userCount = b || 0, l.value.addressCount = y || 0, l.value.activeAddressCount7days = g || 0, l.value.activeAddressCount30days = d || 0;
        } catch (b) {
          console.log(b), c.error(b.message || "error");
        }
      };
      return oe(async () => {
        await n();
      }), (b, p) => {
        const s = Mt, y = Ua, g = ta, d = ea, i = pe;
        return E(), Q("div", null, [
          e(i, {
            bordered: false,
            embedded: ""
          }, {
            default: t(() => [
              e(d, null, {
                default: t(() => [
                  e(g, {
                    span: 8
                  }, {
                    default: t(() => [
                      e(y, {
                        label: a(r)("addressCount"),
                        value: l.value.addressCount
                      }, {
                        prefix: t(() => [
                          e(s, {
                            component: a(vt)
                          }, null, 8, [
                            "component"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "label",
                        "value"
                      ])
                    ]),
                    _: 1
                  }),
                  e(g, {
                    span: 8
                  }, {
                    default: t(() => [
                      e(y, {
                        label: a(r)("activeAddressCount7days"),
                        value: l.value.activeAddressCount7days
                      }, {
                        prefix: t(() => [
                          e(s, {
                            component: a(wt)
                          }, null, 8, [
                            "component"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "label",
                        "value"
                      ])
                    ]),
                    _: 1
                  }),
                  e(g, {
                    span: 8
                  }, {
                    default: t(() => [
                      e(y, {
                        label: a(r)("activeAddressCount30days"),
                        value: l.value.activeAddressCount30days
                      }, {
                        prefix: t(() => [
                          e(s, {
                            component: a(wt)
                          }, null, 8, [
                            "component"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "label",
                        "value"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          e(i, {
            bordered: false,
            embedded: ""
          }, {
            default: t(() => [
              e(d, null, {
                default: t(() => [
                  e(g, {
                    span: 8
                  }, {
                    default: t(() => [
                      e(y, {
                        label: a(r)("userCount"),
                        value: l.value.userCount
                      }, {
                        prefix: t(() => [
                          e(s, {
                            component: a(vt)
                          }, null, 8, [
                            "component"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "label",
                        "value"
                      ])
                    ]),
                    _: 1
                  }),
                  e(g, {
                    span: 8
                  }, {
                    default: t(() => [
                      e(y, {
                        label: a(r)("mailCount"),
                        value: l.value.mailCount
                      }, {
                        prefix: t(() => [
                          e(s, {
                            component: a($a)
                          }, null, 8, [
                            "component"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "label",
                        "value"
                      ])
                    ]),
                    _: 1
                  }),
                  e(g, {
                    span: 8
                  }, {
                    default: t(() => [
                      e(y, {
                        label: a(r)("sendMailCount"),
                        value: l.value.sendMailCount
                      }, {
                        prefix: t(() => [
                          e(s, {
                            component: a(Da)
                          }, null, 8, [
                            "component"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "label",
                        "value"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  Fa = ae(Va, [
    [
      "__scopeId",
      "data-v-b73833c7"
    ]
  ]);
  ja = {
    __name: "SendBox",
    setup(_) {
      const { adminSendBoxTabAddress: c } = ce(), { t: r } = le({
        messages: {
          en: {
            query: "Query",
            queryTip: "Please input address to query, leave blank to query all"
          },
          zh: {
            query: "\u67E5\u8BE2",
            queryTip: "\u8BF7\u8F93\u5165\u5730\u5740\u67E5\u8BE2, \u7559\u7A7A\u5219\u67E5\u8BE2\u6240\u6709"
          }
        }
      }), l = async (b, p) => (c.value = c.value.trim(), await T.fetch(`/admin/sendbox?limit=${b}&offset=${p}` + (c.value ? `&address=${c.value}` : ""))), n = async (b) => {
        await T.fetch(`/admin/sendbox/${b}`, {
          method: "DELETE"
        });
      };
      return (b, p) => {
        const s = me, y = z, g = Ce;
        return E(), Q("div", null, [
          e(g, null, {
            default: t(() => [
              e(s, {
                value: a(c),
                "onUpdate:value": p[0] || (p[0] = (d) => it(c) ? c.value = d : null),
                placeholder: a(r)("queryTip"),
                onKeydown: Ge(l, [
                  "enter"
                ])
              }, null, 8, [
                "value",
                "placeholder"
              ]),
              e(y, {
                onClick: l,
                type: "primary",
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(r)("query")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          e(aa, {
            style: {
              "margin-top": "10px"
            },
            enableUserDeleteEmail: true,
            deleteMail: n,
            fetchMailData: l,
            showEMailFrom: true
          })
        ]);
      };
    }
  };
  Wa = ae(ja, [
    [
      "__scopeId",
      "data-v-fbae4450"
    ]
  ]);
  Ha = {
    style: {
      "margin-top": "10px"
    }
  };
  Ka = {
    style: {
      overflow: "auto"
    }
  };
  Ga = {
    style: {
      display: "inline-block"
    }
  };
  Ja = {
    style: {
      "text-align": "center"
    }
  };
  Qa = {
    __name: "Account",
    setup(_) {
      const { loading: c, adminTab: r, openSettings: l, adminMailTabAddress: n, adminSendBoxTabAddress: b } = ce(), p = se(), { t: s } = le({
        messages: {
          en: {
            name: "Name",
            created_at: "Created At",
            updated_at: "Update At",
            mail_count: "Mail Count",
            send_count: "Send Count",
            source_meta: "Source",
            showCredential: "Show Mail Address Credential",
            addressCredential: "Mail Address Credential",
            addressCredentialTip: "Please copy the Mail Address Credential and you can use it to login to your email account.",
            delete: "Delete",
            deleteTip: "Are you sure to delete this email?",
            deleteAccount: "Delete Account",
            viewMails: "View Mails",
            viewSendBox: "View SendBox",
            itemCount: "itemCount",
            query: "Query",
            addressQueryTip: "Leave blank to query all addresses",
            clearInbox: "Clear Inbox",
            clearSentItems: "Clear Sent Items",
            clearInboxTip: "Are you sure to clear inbox for this email?",
            clearSentItemsTip: "Are you sure to clear sent items for this email?",
            actions: "Actions",
            success: "Success",
            resetPassword: "Reset Password",
            newPassword: "New Password",
            passwordResetSuccess: "Password reset successfully",
            selectAll: "Select All of This Page",
            unselectAll: "Unselect All",
            pleaseSelectAddress: "Please select address",
            selectedItems: "Selected",
            multiDelete: "Multi Delete",
            multiDeleteTip: "Are you sure to delete selected addresses?",
            multiClearInbox: "Multi Clear Inbox",
            multiClearInboxTip: "Are you sure to clear inbox for selected addresses?",
            multiClearSentItems: "Multi Clear Sent Items",
            multiClearSentItemsTip: "Are you sure to clear sent items for selected addresses?"
          },
          zh: {
            name: "\u540D\u79F0",
            created_at: "\u521B\u5EFA\u65F6\u95F4",
            updated_at: "\u66F4\u65B0\u65F6\u95F4",
            mail_count: "\u90AE\u4EF6\u6570\u91CF",
            send_count: "\u53D1\u9001\u6570\u91CF",
            source_meta: "\u6765\u6E90",
            showCredential: "\u67E5\u770B\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1",
            addressCredential: "\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1",
            addressCredentialTip: "\u8BF7\u590D\u5236\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u5B83\u767B\u5F55\u4F60\u7684\u90AE\u7BB1\u3002",
            delete: "\u5220\u9664",
            deleteTip: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u90AE\u7BB1\u5417\uFF1F",
            deleteAccount: "\u5220\u9664\u90AE\u7BB1",
            viewMails: "\u67E5\u770B\u90AE\u4EF6",
            viewSendBox: "\u67E5\u770B\u53D1\u4EF6\u7BB1",
            itemCount: "\u603B\u6570",
            query: "\u67E5\u8BE2",
            addressQueryTip: "\u7559\u7A7A\u67E5\u8BE2\u6240\u6709\u5730\u5740",
            clearInbox: "\u6E05\u7A7A\u6536\u4EF6\u7BB1",
            clearSentItems: "\u6E05\u7A7A\u53D1\u4EF6\u7BB1",
            clearInboxTip: "\u786E\u5B9A\u8981\u6E05\u7A7A\u8FD9\u4E2A\u90AE\u7BB1\u7684\u6536\u4EF6\u7BB1\u5417\uFF1F",
            clearSentItemsTip: "\u786E\u5B9A\u8981\u6E05\u7A7A\u8FD9\u4E2A\u90AE\u7BB1\u7684\u53D1\u4EF6\u7BB1\u5417\uFF1F",
            actions: "\u64CD\u4F5C",
            success: "\u6210\u529F",
            resetPassword: "\u91CD\u7F6E\u5BC6\u7801",
            newPassword: "\u65B0\u5BC6\u7801",
            passwordResetSuccess: "\u5BC6\u7801\u91CD\u7F6E\u6210\u529F",
            selectAll: "\u5168\u9009\u672C\u9875",
            unselectAll: "\u53D6\u6D88\u5168\u9009",
            pleaseSelectAddress: "\u8BF7\u9009\u62E9\u5730\u5740",
            selectedItems: "\u5DF2\u9009\u62E9",
            multiDelete: "\u6279\u91CF\u5220\u9664",
            multiDeleteTip: "\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u7684\u90AE\u7BB1\u5417\uFF1F",
            multiClearInbox: "\u6279\u91CF\u6E05\u7A7A\u6536\u4EF6\u7BB1",
            multiClearInboxTip: "\u786E\u5B9A\u8981\u6E05\u7A7A\u9009\u4E2D\u90AE\u7BB1\u7684\u6536\u4EF6\u7BB1\u5417\uFF1F",
            multiClearSentItems: "\u6279\u91CF\u6E05\u7A7A\u53D1\u4EF6\u7BB1",
            multiClearSentItemsTip: "\u786E\u5B9A\u8981\u6E05\u7A7A\u9009\u4E2D\u90AE\u7BB1\u7684\u53D1\u4EF6\u7BB1\u5417\uFF1F"
          }
        }
      }), y = f(false), g = f(""), d = f(0), i = f(0), w = f(0), S = f(false), I = f(0), k = f(""), v = f([]), u = f(false), O = f({
        percentage: 0,
        tip: "0/0"
      }), K = f(""), D = xe(() => v.value.length), x = xe(() => v.value.length > 0), N = f(""), W = f([]), q = f(0), C = f(1), J = f(20), V = f(false), $ = f(false), Z = f(false), _e = async (P) => {
        try {
          g.value = await T.adminShowAddressCredential(P), y.value = true;
        } catch (j) {
          p.error(j.message || "error"), y.value = false, g.value = "";
        }
      }, A = async () => {
        try {
          await T.adminDeleteAddress(d.value), p.success(s("success")), await re();
        } catch (P) {
          p.error(P.message || "error");
        } finally {
          V.value = false;
        }
      }, F = async () => {
        try {
          await T.fetch(`/admin/clear_inbox/${i.value}`, {
            method: "DELETE"
          }), p.success(s("success")), await re();
        } catch (P) {
          p.error(P.message || "error");
        } finally {
          $.value = false;
        }
      }, ne = async () => {
        try {
          await T.fetch(`/admin/clear_sent_items/${w.value}`, {
            method: "DELETE"
          }), p.success(s("success")), await re();
        } catch (P) {
          p.error(P.message || "error");
        } finally {
          Z.value = false;
        }
      }, Y = async () => {
        try {
          await T.fetch(`/admin/address/${I.value}/reset_password`, {
            method: "POST",
            body: JSON.stringify({
              password: k.value
            })
          }), p.success(s("passwordResetSuccess")), k.value = "", S.value = false;
        } catch (P) {
          p.error(P.message || "error");
        }
      }, R = () => {
        v.value = W.value.map((P) => P.id);
      }, fe = () => {
        v.value = [];
      }, H = async ({ shouldSkip: P = () => false, apiCall: j, title: ke, operationName: ve = "operation" }) => {
        try {
          c.value = true;
          const ge = W.value.filter((he) => v.value.includes(he.id));
          if (ge.length === 0) {
            p.error(s("pleaseSelectAddress"));
            return;
          }
          const De = [], Ie = ge.length;
          O.value = {
            percentage: 0,
            tip: `0/${Ie}`
          }, K.value = ke, u.value = true;
          for (const [he, Ae] of ge.entries()) {
            try {
              P(Ae) || await j(Ae.id);
            } catch (Re) {
              console.error(`${ve} failed for address ${Ae.id}:`, Re), De.push(Ae.id);
            }
            O.value = {
              percentage: Math.floor((he + 1) / Ie * 100),
              tip: `${he + 1}/${Ie}`
            };
          }
          await re(), v.value = De, p.success(s("success"));
        } catch (ge) {
          p.error(ge.message || "error");
        } finally {
          c.value = false;
        }
      }, Fe = async () => {
        await H({
          apiCall: (P) => T.adminDeleteAddress(P),
          title: s("multiDelete") + " " + s("success"),
          operationName: "Delete"
        });
      }, je = async () => {
        await H({
          shouldSkip: (P) => P.mail_count <= 0,
          apiCall: (P) => T.fetch(`/admin/clear_inbox/${P}`, {
            method: "DELETE"
          }),
          title: s("multiClearInbox") + " " + s("success"),
          operationName: "ClearInbox"
        });
      }, we = async () => {
        await H({
          shouldSkip: (P) => P.send_count <= 0,
          apiCall: (P) => T.fetch(`/admin/clear_sent_items/${P}`, {
            method: "DELETE"
          }),
          title: s("multiClearSentItems") + " " + s("success"),
          operationName: "ClearSentItems"
        });
      }, re = async () => {
        try {
          N.value = N.value.trim();
          const { results: P, count: j } = await T.fetch(`/admin/address?limit=${J.value}&offset=${(C.value - 1) * J.value}` + (N.value ? `&query=${N.value}` : ""));
          W.value = P, j > 0 && (q.value = j);
        } catch (P) {
          console.error(P), p.error(P.message || "error");
        }
      }, G = [
        {
          type: "selection"
        },
        {
          title: "ID",
          key: "id"
        },
        {
          title: s("name"),
          key: "name"
        },
        {
          title: s("created_at"),
          key: "created_at"
        },
        {
          title: s("updated_at"),
          key: "updated_at"
        },
        {
          title: s("source_meta"),
          key: "source_meta",
          render(P) {
            const j = P.source_meta;
            if (!j) return "";
            const ke = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, ve = /^[0-9a-fA-F:]+$/;
            return ke.test(j) || j.includes(":") && ve.test(j) && !j.startsWith("tg:") ? U("a", {
              href: `https://ip.im/${j}`,
              target: "_blank",
              rel: "noopener noreferrer"
            }, j) : j;
          }
        },
        {
          title: s("mail_count"),
          key: "mail_count",
          render(P) {
            return U(z, {
              text: true,
              onClick: () => {
                P.mail_count > 0 && (n.value = P.name, r.value = "mails");
              }
            }, {
              icon: () => U(He, {
                value: P.mail_count,
                "show-zero": true,
                max: 99,
                type: "success"
              }),
              default: () => P.mail_count > 0 ? s("viewMails") : ""
            });
          }
        },
        {
          title: s("send_count"),
          key: "send_count",
          render(P) {
            return U(z, {
              text: true,
              onClick: () => {
                P.send_count > 0 && (b.value = P.name, r.value = "sendBox");
              }
            }, {
              icon: () => U(He, {
                value: P.send_count,
                "show-zero": true,
                max: 99,
                type: "success"
              }),
              default: () => P.send_count > 0 ? s("viewSendBox") : ""
            });
          }
        },
        {
          title: s("actions"),
          key: "actions",
          render(P) {
            var _a2;
            return U("div", [
              U(Tt, {
                mode: "horizontal",
                options: [
                  {
                    label: s("actions"),
                    icon: () => U(Pt),
                    key: "action",
                    children: [
                      {
                        label: () => U(z, {
                          text: true,
                          onClick: () => _e(P.id)
                        }, {
                          default: () => s("showCredential")
                        })
                      },
                      {
                        label: () => U(z, {
                          text: true,
                          onClick: () => {
                            n.value = P.name, r.value = "mails";
                          }
                        }, {
                          default: () => s("viewMails")
                        }),
                        show: P.mail_count > 0
                      },
                      {
                        label: () => U(z, {
                          text: true,
                          onClick: () => {
                            b.value = P.name, r.value = "sendBox";
                          }
                        }, {
                          default: () => s("viewSendBox")
                        }),
                        show: P.send_count > 0
                      },
                      {
                        label: () => U(z, {
                          text: true,
                          onClick: () => {
                            i.value = P.id, $.value = true;
                          }
                        }, {
                          default: () => s("clearInbox")
                        }),
                        show: P.mail_count > 0
                      },
                      {
                        label: () => U(z, {
                          text: true,
                          onClick: () => {
                            w.value = P.id, Z.value = true;
                          }
                        }, {
                          default: () => s("clearSentItems")
                        }),
                        show: P.send_count > 0
                      },
                      {
                        label: () => U(z, {
                          text: true,
                          onClick: () => {
                            I.value = P.id, S.value = true;
                          }
                        }, {
                          default: () => s("resetPassword")
                        }),
                        show: (_a2 = l.value) == null ? void 0 : _a2.enableAddressPassword
                      },
                      {
                        label: () => U(z, {
                          text: true,
                          onClick: () => {
                            d.value = P.id, V.value = true;
                          }
                        }, {
                          default: () => s("delete")
                        })
                      }
                    ]
                  }
                ]
              })
            ]);
          }
        }
      ];
      return Ze([
        C,
        J
      ], async () => {
        await re();
      }), oe(async () => {
        await re();
      }), (P, j) => {
        const ke = pe, ve = Pe, ge = me, De = It, Ie = Ce, he = Ye, Ae = ut, Re = qe, tt = rt, h = Ne, B = la;
        return E(), Q("div", Ha, [
          e(ve, {
            show: y.value,
            "onUpdate:show": j[0] || (j[0] = (L) => y.value = L),
            preset: "dialog",
            title: "Dialog"
          }, {
            header: t(() => [
              M("div", null, o(a(s)("addressCredential")), 1)
            ]),
            action: t(() => [
              ...j[11] || (j[11] = [])
            ]),
            default: t(() => [
              M("span", null, [
                M("p", null, o(a(s)("addressCredentialTip")), 1)
              ]),
              e(ke, {
                bordered: false,
                embedded: ""
              }, {
                default: t(() => [
                  M("b", null, o(g.value), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show"
          ]),
          e(ve, {
            show: V.value,
            "onUpdate:show": j[1] || (j[1] = (L) => V.value = L),
            preset: "dialog",
            title: a(s)("deleteAccount")
          }, {
            action: t(() => [
              e(a(z), {
                loading: a(c),
                onClick: A,
                size: "small",
                tertiary: "",
                type: "error"
              }, {
                default: t(() => [
                  m(o(a(s)("deleteAccount")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(a(s)("deleteTip")), 1)
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(ve, {
            show: $.value,
            "onUpdate:show": j[2] || (j[2] = (L) => $.value = L),
            preset: "dialog",
            title: a(s)("clearInbox")
          }, {
            action: t(() => [
              e(a(z), {
                loading: a(c),
                onClick: F,
                size: "small",
                tertiary: "",
                type: "error"
              }, {
                default: t(() => [
                  m(o(a(s)("clearInbox")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(a(s)("clearInboxTip")), 1)
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(ve, {
            show: Z.value,
            "onUpdate:show": j[3] || (j[3] = (L) => Z.value = L),
            preset: "dialog",
            title: a(s)("clearSentItems")
          }, {
            action: t(() => [
              e(a(z), {
                loading: a(c),
                onClick: ne,
                size: "small",
                tertiary: "",
                type: "error"
              }, {
                default: t(() => [
                  m(o(a(s)("clearSentItems")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(a(s)("clearSentItemsTip")), 1)
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(ve, {
            show: S.value,
            "onUpdate:show": j[5] || (j[5] = (L) => S.value = L),
            preset: "dialog",
            title: a(s)("resetPassword")
          }, {
            action: t(() => [
              e(a(z), {
                loading: a(c),
                onClick: Y,
                size: "small",
                tertiary: "",
                type: "info"
              }, {
                default: t(() => [
                  m(o(a(s)("resetPassword")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              e(De, {
                label: a(s)("newPassword")
              }, {
                default: t(() => [
                  e(ge, {
                    value: k.value,
                    "onUpdate:value": j[4] || (j[4] = (L) => k.value = L),
                    type: "password",
                    placeholder: "",
                    "show-password-on": "click"
                  }, null, 8, [
                    "value"
                  ])
                ]),
                _: 1
              }, 8, [
                "label"
              ])
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(Ie, {
            style: {
              "margin-bottom": "10px"
            }
          }, {
            default: t(() => [
              e(ge, {
                value: N.value,
                "onUpdate:value": j[6] || (j[6] = (L) => N.value = L),
                clearable: "",
                placeholder: a(s)("addressQueryTip"),
                onKeydown: Ge(re, [
                  "enter"
                ])
              }, null, 8, [
                "value",
                "placeholder"
              ]),
              e(a(z), {
                onClick: re,
                type: "primary",
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(s)("query")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          x.value ? (E(), X(Re, {
            key: 0,
            style: {
              "margin-bottom": "10px"
            }
          }, {
            default: t(() => [
              e(a(z), {
                onClick: R,
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(s)("selectAll")), 1)
                ]),
                _: 1
              }),
              e(a(z), {
                onClick: fe,
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(s)("unselectAll")), 1)
                ]),
                _: 1
              }),
              e(he, {
                onPositiveClick: Fe
              }, {
                trigger: t(() => [
                  e(a(z), {
                    tertiary: "",
                    type: "error"
                  }, {
                    default: t(() => [
                      m(o(a(s)("multiDelete")), 1)
                    ]),
                    _: 1
                  })
                ]),
                default: t(() => [
                  m(" " + o(a(s)("multiDeleteTip")), 1)
                ]),
                _: 1
              }),
              e(he, {
                onPositiveClick: je
              }, {
                trigger: t(() => [
                  e(a(z), {
                    tertiary: "",
                    type: "warning"
                  }, {
                    default: t(() => [
                      m(o(a(s)("multiClearInbox")), 1)
                    ]),
                    _: 1
                  })
                ]),
                default: t(() => [
                  m(" " + o(a(s)("multiClearInboxTip")), 1)
                ]),
                _: 1
              }),
              e(he, {
                onPositiveClick: we
              }, {
                trigger: t(() => [
                  e(a(z), {
                    tertiary: "",
                    type: "warning"
                  }, {
                    default: t(() => [
                      m(o(a(s)("multiClearSentItems")), 1)
                    ]),
                    _: 1
                  })
                ]),
                default: t(() => [
                  m(" " + o(a(s)("multiClearSentItemsTip")), 1)
                ]),
                _: 1
              }),
              e(Ae, {
                type: "info"
              }, {
                default: t(() => [
                  m(o(a(s)("selectedItems")) + ": " + o(D.value), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : te("", true),
          M("div", Ka, [
            M("div", Ga, [
              e(tt, {
                page: C.value,
                "onUpdate:page": j[7] || (j[7] = (L) => C.value = L),
                "page-size": J.value,
                "onUpdate:pageSize": j[8] || (j[8] = (L) => J.value = L),
                "item-count": q.value,
                "page-sizes": [
                  20,
                  50,
                  100
                ],
                "show-size-picker": ""
              }, {
                prefix: t(({ itemCount: L }) => [
                  m(o(a(s)("itemCount")) + ": " + o(L), 1)
                ]),
                _: 1
              }, 8, [
                "page",
                "page-size",
                "item-count"
              ])
            ]),
            e(h, {
              "checked-row-keys": v.value,
              "onUpdate:checkedRowKeys": j[9] || (j[9] = (L) => v.value = L),
              columns: G,
              data: W.value,
              bordered: false,
              "row-key": (L) => L.id,
              embedded: ""
            }, null, 8, [
              "checked-row-keys",
              "data",
              "row-key"
            ])
          ]),
          e(ve, {
            show: u.value,
            "onUpdate:show": j[10] || (j[10] = (L) => u.value = L),
            preset: "dialog",
            title: K.value,
            "negative-text": "OK"
          }, {
            default: t(() => [
              e(Re, {
                justify: "center"
              }, {
                default: t(() => [
                  e(B, {
                    type: "circle",
                    status: "info",
                    percentage: O.value.percentage
                  }, {
                    default: t(() => [
                      M("span", Ja, o(O.value.tip), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "percentage"
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ])
        ]);
      };
    }
  };
  Xa = ae(Qa, [
    [
      "__scopeId",
      "data-v-05ab3412"
    ]
  ]);
  Za = {
    class: "center"
  };
  Ya = {
    __name: "CreateAccount",
    setup(_) {
      const { loading: c, openSettings: r } = ce(), l = se(), { t: n } = le({
        messages: {
          en: {
            address: "Address",
            enablePrefix: "If enable Prefix",
            creatNewEmail: "Create New Email",
            fillInAllFields: "Please fill in all fields",
            successTip: "Success Created",
            addressCredential: "Mail Address Credential",
            addressCredentialTip: "Please copy the Mail Address Credential and you can use it to login to your email account.",
            addressPassword: "Address Password",
            linkWithAddressCredential: "Open to auto login email link"
          },
          zh: {
            address: "\u5730\u5740",
            enablePrefix: "\u662F\u5426\u542F\u7528\u524D\u7F00",
            creatNewEmail: "\u521B\u5EFA\u65B0\u90AE\u7BB1",
            fillInAllFields: "\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F",
            successTip: "\u521B\u5EFA\u6210\u529F",
            addressCredential: "\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1",
            addressCredentialTip: "\u8BF7\u590D\u5236\u90AE\u7BB1\u5730\u5740\u51ED\u8BC1\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u5B83\u767B\u5F55\u4F60\u7684\u90AE\u7BB1\u3002",
            addressPassword: "\u5730\u5740\u5BC6\u7801",
            linkWithAddressCredential: "\u6253\u5F00\u5373\u53EF\u81EA\u52A8\u767B\u5F55\u90AE\u7BB1\u7684\u94FE\u63A5"
          }
        }
      }), b = f(true), p = f(""), s = f(""), y = f(false), g = f(""), d = f(""), i = f(""), w = async () => {
        if (!p.value || !s.value) {
          l.error(n("fillInAllFields"));
          return;
        }
        try {
          const I = await T.fetch("/admin/new_address", {
            method: "POST",
            body: JSON.stringify({
              enablePrefix: b.value,
              name: p.value,
              domain: s.value
            })
          });
          g.value = I.jwt, d.value = I.password || "", i.value = I.address || "", l.success(n("successTip")), y.value = true;
        } catch (I) {
          l.error(I.message || "error");
        }
      }, S = () => `${window.location.origin}/?jwt=${g.value}`;
      return oe(async () => {
        var _a2, _b;
        r.prefix && (b.value = true), s.value = ((_b = (_a2 = r.value.domains) == null ? void 0 : _a2[0]) == null ? void 0 : _b.value) || "";
      }), (I, k) => {
        const v = pe, u = Dt, O = Et, K = Pe, D = Ve, x = ye, N = na, W = me, q = ue, C = Ce, J = z;
        return E(), Q("div", Za, [
          e(K, {
            show: y.value,
            "onUpdate:show": k[0] || (k[0] = (V) => y.value = V),
            preset: "dialog",
            title: a(n)("addressCredential")
          }, {
            default: t(() => [
              M("span", null, [
                M("p", null, o(a(n)("addressCredentialTip")), 1)
              ]),
              e(v, {
                embedded: ""
              }, {
                default: t(() => [
                  M("b", null, o(g.value), 1)
                ]),
                _: 1
              }),
              d.value ? (E(), X(v, {
                key: 0,
                embedded: ""
              }, {
                default: t(() => [
                  M("p", null, [
                    M("b", null, o(i.value), 1)
                  ]),
                  M("p", null, [
                    m(o(a(n)("addressPassword")) + ": ", 1),
                    M("b", null, o(d.value), 1)
                  ])
                ]),
                _: 1
              })) : te("", true),
              e(v, {
                embedded: ""
              }, {
                default: t(() => [
                  e(O, null, {
                    default: t(() => [
                      e(u, {
                        title: a(n)("linkWithAddressCredential")
                      }, {
                        default: t(() => [
                          e(v, {
                            embedded: ""
                          }, {
                            default: t(() => [
                              M("b", null, o(S()), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, [
                        "title"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(v, {
            bordered: false,
            embedded: "",
            style: {
              "max-width": "600px"
            }
          }, {
            default: t(() => [
              a(r).prefix ? (E(), X(x, {
                key: 0,
                label: a(n)("enablePrefix")
              }, {
                default: t(() => [
                  e(D, {
                    value: b.value,
                    "onUpdate:value": k[1] || (k[1] = (V) => b.value = V),
                    round: false
                  }, null, 8, [
                    "value"
                  ])
                ]),
                _: 1
              }, 8, [
                "label"
              ])) : te("", true),
              e(x, {
                label: a(n)("address")
              }, {
                default: t(() => [
                  e(C, null, {
                    default: t(() => [
                      b.value && a(r).prefix ? (E(), X(N, {
                        key: 0
                      }, {
                        default: t(() => [
                          m(o(a(r).prefix), 1)
                        ]),
                        _: 1
                      })) : te("", true),
                      e(W, {
                        value: p.value,
                        "onUpdate:value": k[2] || (k[2] = (V) => p.value = V)
                      }, null, 8, [
                        "value"
                      ]),
                      e(N, null, {
                        default: t(() => [
                          ...k[4] || (k[4] = [
                            m("@", -1)
                          ])
                        ]),
                        _: 1
                      }),
                      e(q, {
                        value: s.value,
                        "onUpdate:value": k[3] || (k[3] = (V) => s.value = V),
                        "consistent-menu-width": false,
                        options: a(r).domains
                      }, null, 8, [
                        "value",
                        "options"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "label"
              ]),
              e(J, {
                onClick: w,
                type: "primary",
                block: "",
                loading: a(c)
              }, {
                default: t(() => [
                  m(o(a(n)("creatNewEmail")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  el = ae(Ya, [
    [
      "__scopeId",
      "data-v-22702c12"
    ]
  ]);
  tl = {
    class: "center"
  };
  al = 200;
  ll = {
    __name: "AccountSettings",
    setup(_) {
      const { loading: c, openSettings: r } = ce(), l = se(), { t: n } = le({
        messages: {
          en: {
            tip: "You can manually input the following multiple select input and enter",
            manualInputPrompt: "Type and press Enter to add",
            save: "Save",
            successTip: "Save Success",
            address_block_list: "Address Block Keywords for Users(Admin can skip)",
            address_block_list_placeholder: "Please enter the keywords you want to block",
            send_address_block_list: "Address Block Keywords for send email",
            noLimitSendAddressList: "No Balance Limit Send Address List",
            verified_address_list: "Verified Address List(Can send email by cf internal api)",
            fromBlockList: "Block Keywords for receive email",
            block_receive_unknow_address_email: "Block receive unknow address email",
            email_forwarding_config: "Email Forwarding Configuration",
            domain_list: "Domain List (Optional)",
            forward_address: "Forward Address",
            actions: "Actions",
            select_domain: "Select Domain",
            forward_placeholder: "forward@example.com",
            delete_rule: "Delete",
            delete_rule_confirm: "Are you sure you want to delete this rule?",
            delete_success: "Delete Success",
            forwarding_rule_warning: "Each rule will run independently. Forward address needs to be a verified address.",
            add: "Add",
            cancel: "Cancel",
            config: "Config",
            source_patterns: "Source Address Regex (Optional)",
            source_patterns_placeholder: "e.g. gmail.com",
            source_match_mode: "Match Mode",
            match_any: "Any",
            match_all: "All",
            source_patterns_tip: "Domain list filters by recipient address, source regex filters by sender address. Both conditions must match for forwarding (AND logic). Leave either empty to skip that filter.",
            regex_too_long: "Regex pattern too long (max 200 characters)",
            regex_invalid: "Invalid regex pattern",
            forward_address_required: "Forward address is required",
            rule_index: "Rule"
          },
          zh: {
            tip: "\u60A8\u53EF\u4EE5\u624B\u52A8\u8F93\u5165\u4EE5\u4E0B\u591A\u9009\u8F93\u5165\u6846, \u56DE\u8F66\u589E\u52A0",
            manualInputPrompt: "\u8F93\u5165\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            save: "\u4FDD\u5B58",
            successTip: "\u4FDD\u5B58\u6210\u529F",
            address_block_list: "\u90AE\u4EF6\u5730\u5740\u5C4F\u853D\u5173\u952E\u8BCD(\u7BA1\u7406\u5458\u53EF\u8DF3\u8FC7\u68C0\u67E5)",
            address_block_list_placeholder: "\u8BF7\u8F93\u5165\u60A8\u60F3\u8981\u5C4F\u853D\u7684\u5173\u952E\u8BCD",
            send_address_block_list: "\u53D1\u9001\u90AE\u4EF6\u5730\u5740\u5C4F\u853D\u5173\u952E\u8BCD",
            noLimitSendAddressList: "\u65E0\u4F59\u989D\u9650\u5236\u53D1\u9001\u5730\u5740\u5217\u8868",
            verified_address_list: "\u5DF2\u9A8C\u8BC1\u5730\u5740\u5217\u8868(\u53EF\u901A\u8FC7 cf \u5185\u90E8 api \u53D1\u9001\u90AE\u4EF6)",
            fromBlockList: "\u63A5\u6536\u90AE\u4EF6\u5730\u5740\u5C4F\u853D\u5173\u952E\u8BCD",
            block_receive_unknow_address_email: "\u7981\u6B62\u63A5\u6536\u672A\u77E5\u5730\u5740\u90AE\u4EF6",
            email_forwarding_config: "\u90AE\u4EF6\u8F6C\u53D1\u914D\u7F6E",
            domain_list: "\u57DF\u540D\u5217\u8868\uFF08\u53EF\u9009\uFF09",
            forward_address: "\u8F6C\u53D1\u5730\u5740",
            actions: "\u64CD\u4F5C",
            select_domain: "\u9009\u62E9\u57DF\u540D",
            forward_placeholder: "forward@example.com",
            delete_rule: "\u5220\u9664",
            delete_rule_confirm: "\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u89C4\u5219\u5417\uFF1F",
            delete_success: "\u5220\u9664\u6210\u529F",
            forwarding_rule_warning: "\u6BCF\u6761\u89C4\u5219\u72EC\u7ACB\u8FD0\u884C\uFF0C\u8F6C\u53D1\u5730\u5740\u9700\u8981\u4E3A\u5DF2\u9A8C\u8BC1\u7684\u5730\u5740\u3002",
            add: "\u6DFB\u52A0",
            cancel: "\u53D6\u6D88",
            config: "\u914D\u7F6E",
            source_patterns: "\u6765\u6E90\u5730\u5740\u6B63\u5219\uFF08\u53EF\u9009\uFF09",
            source_patterns_placeholder: "\u4F8B\u5982: gmail.com",
            source_match_mode: "\u5339\u914D\u6A21\u5F0F",
            match_any: "\u4EFB\u4E00",
            match_all: "\u5168\u90E8",
            source_patterns_tip: "\u57DF\u540D\u5217\u8868\u6309\u6536\u4EF6\u5730\u5740\u8FC7\u6EE4\uFF0C\u6765\u6E90\u6B63\u5219\u6309\u53D1\u4EF6\u5730\u5740\u8FC7\u6EE4\uFF0C\u4E24\u8005\u5747\u4E3A\u53EF\u9009\u3002\u540C\u65F6\u914D\u7F6E\u65F6\u9700\u540C\u65F6\u6EE1\u8DB3\uFF08AND \u903B\u8F91\uFF09\uFF0C\u7559\u7A7A\u5219\u8DF3\u8FC7\u8BE5\u6761\u4EF6\u3002",
            regex_too_long: "\u6B63\u5219\u8868\u8FBE\u5F0F\u8FC7\u957F\uFF08\u6700\u5927200\u5B57\u7B26\uFF09",
            regex_invalid: "\u65E0\u6548\u7684\u6B63\u5219\u8868\u8FBE\u5F0F",
            forward_address_required: "\u8F6C\u53D1\u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A",
            rule_index: "\u89C4\u5219"
          }
        }
      }), b = f([]), p = f([]), s = f([]), y = f([]), g = f([]), d = f({
        blockReceiveUnknowAddressEmail: false,
        emailForwardingList: []
      }), i = f(false), w = f([]), S = [
        {
          title: n("domain_list"),
          key: "domains",
          render: (D, x) => {
            var _a2;
            return U(ue, {
              value: Array.isArray(D.domains) ? D.domains : [],
              onUpdateValue: (N) => {
                w.value[x].domains = N;
              },
              options: ((_a2 = r.value) == null ? void 0 : _a2.domains) || [],
              multiple: true,
              filterable: true,
              tag: true,
              placeholder: n("select_domain")
            });
          }
        },
        {
          title: n("source_patterns"),
          key: "sourcePatterns",
          render: (D, x) => U("div", {
            style: "display: flex; flex-direction: column; gap: 4px;"
          }, [
            U(ue, {
              value: Array.isArray(D.sourcePatterns) ? D.sourcePatterns : [],
              onUpdateValue: (N) => {
                w.value[x].sourcePatterns = N;
              },
              multiple: true,
              filterable: true,
              tag: true,
              placeholder: n("source_patterns_placeholder")
            }, {
              empty: () => U("span", {
                style: "color: #999; font-size: 12px;"
              }, n("manualInputPrompt"))
            }),
            U(Rt, {
              value: D.sourceMatchMode || "any",
              onUpdateValue: (N) => {
                w.value[x].sourceMatchMode = N;
              },
              size: "small",
              style: "margin-top: 4px;"
            }, {
              default: () => [
                U(bt, {
                  value: "any"
                }, {
                  default: () => n("match_any")
                }),
                U(bt, {
                  value: "all"
                }, {
                  default: () => n("match_all")
                })
              ]
            })
          ])
        },
        {
          title: n("forward_address"),
          key: "forward",
          render: (D, x) => U(me, {
            value: D.forward,
            onUpdateValue: (N) => {
              w.value[x].forward = N;
            },
            placeholder: "forward@example.com"
          })
        },
        {
          title: n("actions"),
          key: "actions",
          render: (D, x) => U("div", {
            style: "display: flex; gap: 8px;"
          }, [
            U(Ye, {
              onPositiveClick: () => {
                w.value = w.value.filter((N, W) => W !== x), l.success(n("delete_success"));
              }
            }, {
              default: () => n("delete_rule_confirm"),
              trigger: () => U(z, {
                size: "small",
                type: "error"
              }, {
                default: () => n("delete_rule")
              })
            })
          ])
        }
      ], I = () => {
        w.value = d.value.emailForwardingList ? [
          ...d.value.emailForwardingList
        ] : [], i.value = true;
      }, k = () => {
        w.value = [
          ...w.value,
          {
            domains: [],
            forward: "",
            sourcePatterns: [],
            sourceMatchMode: "any"
          }
        ];
      }, v = () => {
        for (let D = 0; D < w.value.length; D++) {
          const x = w.value[D];
          if (!x.forward || x.forward.trim() === "") return l.error(`${n("forward_address_required")} (${n("rule_index")} ${D + 1})`), false;
          if (x.sourcePatterns && x.sourcePatterns.length > 0) for (const N of x.sourcePatterns) {
            if (N.length > al) return l.error(`${n("regex_too_long")}: ${N.substring(0, 30)}...`), false;
            try {
              new RegExp(N, "i");
            } catch {
              return l.error(`${n("regex_invalid")}: ${N}`), false;
            }
          }
        }
        return true;
      }, u = () => {
        v() && (d.value.emailForwardingList = [
          ...w.value
        ], i.value = false);
      }, O = async () => {
        var _a2, _b;
        try {
          const D = await T.fetch("/admin/account_settings");
          b.value = D.blockList || [], p.value = D.sendBlockList || [], y.value = D.verifiedAddressList || [], g.value = D.fromBlockList || [], s.value = D.noLimitSendAddressList || [], d.value = {
            blockReceiveUnknowAddressEmail: ((_a2 = D.emailRuleSettings) == null ? void 0 : _a2.blockReceiveUnknowAddressEmail) || false,
            emailForwardingList: ((_b = D.emailRuleSettings) == null ? void 0 : _b.emailForwardingList) || []
          };
        } catch (D) {
          l.error(D.message || "error");
        }
      }, K = async () => {
        try {
          await T.fetch("/admin/account_settings", {
            method: "POST",
            body: JSON.stringify({
              blockList: b.value || [],
              sendBlockList: p.value || [],
              verifiedAddressList: y.value || [],
              fromBlockList: g.value || [],
              noLimitSendAddressList: s.value || [],
              emailRuleSettings: d.value
            })
          }), l.success(n("successTip"));
        } catch (D) {
          l.error(D.message || "error");
        }
      };
      return oe(async () => {
        await O();
      }), (D, x) => {
        const N = Ue, W = Ee, q = Le, C = ye, J = Ve, V = pe, $ = qe, Z = Ne, _e = Pe;
        return E(), Q(dt, null, [
          M("div", tl, [
            e(V, {
              bordered: false,
              embedded: "",
              style: {
                "max-width": "600px"
              }
            }, {
              default: t(() => [
                e(N, {
                  "show-icon": false,
                  bordered: false,
                  type: "warning",
                  style: {
                    "margin-bottom": "10px"
                  }
                }, {
                  default: t(() => [
                    M("span", null, o(a(n)("tip")), 1)
                  ]),
                  _: 1
                }),
                e(W, {
                  justify: "end"
                }, {
                  default: t(() => [
                    e(a(z), {
                      onClick: K,
                      type: "primary",
                      loading: a(c)
                    }, {
                      default: t(() => [
                        m(o(a(n)("save")), 1)
                      ]),
                      _: 1
                    }, 8, [
                      "loading"
                    ])
                  ]),
                  _: 1
                }),
                e(C, {
                  label: a(n)("address_block_list")
                }, {
                  default: t(() => [
                    e(a(ue), {
                      value: b.value,
                      "onUpdate:value": x[0] || (x[0] = (A) => b.value = A),
                      filterable: "",
                      multiple: "",
                      tag: "",
                      placeholder: a(n)("address_block_list_placeholder")
                    }, {
                      empty: t(() => [
                        e(q, {
                          depth: "3"
                        }, {
                          default: t(() => [
                            m(o(a(n)("manualInputPrompt")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "value",
                      "placeholder"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(C, {
                  label: a(n)("send_address_block_list")
                }, {
                  default: t(() => [
                    e(a(ue), {
                      value: p.value,
                      "onUpdate:value": x[1] || (x[1] = (A) => p.value = A),
                      filterable: "",
                      multiple: "",
                      tag: "",
                      placeholder: a(n)("address_block_list_placeholder")
                    }, {
                      empty: t(() => [
                        e(q, {
                          depth: "3"
                        }, {
                          default: t(() => [
                            m(o(a(n)("manualInputPrompt")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "value",
                      "placeholder"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(C, {
                  label: a(n)("noLimitSendAddressList")
                }, {
                  default: t(() => [
                    e(a(ue), {
                      value: s.value,
                      "onUpdate:value": x[2] || (x[2] = (A) => s.value = A),
                      filterable: "",
                      multiple: "",
                      tag: "",
                      placeholder: a(n)("noLimitSendAddressList")
                    }, {
                      empty: t(() => [
                        e(q, {
                          depth: "3"
                        }, {
                          default: t(() => [
                            m(o(a(n)("manualInputPrompt")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "value",
                      "placeholder"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(C, {
                  label: a(n)("verified_address_list")
                }, {
                  default: t(() => [
                    e(a(ue), {
                      value: y.value,
                      "onUpdate:value": x[3] || (x[3] = (A) => y.value = A),
                      filterable: "",
                      multiple: "",
                      tag: "",
                      placeholder: a(n)("verified_address_list")
                    }, {
                      empty: t(() => [
                        e(q, {
                          depth: "3"
                        }, {
                          default: t(() => [
                            m(o(a(n)("manualInputPrompt")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "value",
                      "placeholder"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(C, {
                  label: a(n)("fromBlockList")
                }, {
                  default: t(() => [
                    e(a(ue), {
                      value: g.value,
                      "onUpdate:value": x[4] || (x[4] = (A) => g.value = A),
                      filterable: "",
                      multiple: "",
                      tag: "",
                      placeholder: a(n)("fromBlockList")
                    }, {
                      empty: t(() => [
                        e(q, {
                          depth: "3"
                        }, {
                          default: t(() => [
                            m(o(a(n)("manualInputPrompt")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "value",
                      "placeholder"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(C, {
                  label: a(n)("block_receive_unknow_address_email")
                }, {
                  default: t(() => [
                    e(J, {
                      value: d.value.blockReceiveUnknowAddressEmail,
                      "onUpdate:value": x[5] || (x[5] = (A) => d.value.blockReceiveUnknowAddressEmail = A),
                      round: false
                    }, null, 8, [
                      "value"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(C, {
                  label: a(n)("email_forwarding_config")
                }, {
                  default: t(() => [
                    e(a(z), {
                      onClick: I
                    }, {
                      default: t(() => [
                        m(o(a(n)("config")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ])
              ]),
              _: 1
            })
          ]),
          e(_e, {
            show: i.value,
            "onUpdate:show": x[6] || (x[6] = (A) => i.value = A),
            preset: "card",
            title: a(n)("email_forwarding_config"),
            style: {
              "max-width": "1000px"
            }
          }, {
            default: t(() => [
              e($, {
                vertical: ""
              }, {
                default: t(() => [
                  e(N, {
                    "show-icon": false,
                    bordered: false,
                    type: "warning"
                  }, {
                    default: t(() => [
                      M("span", null, o(a(n)("forwarding_rule_warning")), 1),
                      x[7] || (x[7] = M("br", null, null, -1)),
                      M("span", null, o(a(n)("source_patterns_tip")), 1)
                    ]),
                    _: 1
                  }),
                  e($, {
                    justify: "end"
                  }, {
                    default: t(() => [
                      e(a(z), {
                        onClick: k
                      }, {
                        default: t(() => [
                          m(o(a(n)("add")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  e(Z, {
                    columns: S,
                    data: w.value,
                    bordered: false,
                    striped: ""
                  }, null, 8, [
                    "data"
                  ]),
                  e($, {
                    justify: "end"
                  }, {
                    default: t(() => [
                      e(a(z), {
                        onClick: u,
                        type: "primary"
                      }, {
                        default: t(() => [
                          m(o(a(n)("save")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ])
        ], 64);
      };
    }
  };
  kt = ae(ll, [
    [
      "__scopeId",
      "data-v-e681a103"
    ]
  ]);
  nl = {
    style: {
      overflow: "auto"
    }
  };
  sl = {
    __name: "UserAddressManagement",
    props: {
      user_id: {
        type: Number,
        required: true
      }
    },
    setup(_) {
      const c = _, r = se(), { locale: l, t: n } = le({
        messages: {
          en: {
            success: "success",
            name: "Name",
            mail_count: "Mail Count",
            send_count: "Send Count"
          },
          zh: {
            success: "\u6210\u529F",
            name: "\u540D\u79F0",
            mail_count: "\u90AE\u4EF6\u6570\u91CF",
            send_count: "\u53D1\u9001\u6570\u91CF"
          }
        }
      }), b = f([]), p = async () => {
        try {
          const { results: y } = await T.fetch(`/admin/users/bind_address/${c.user_id}`);
          b.value = y;
        } catch (y) {
          console.log(y), r.error(y.message || "error");
        }
      }, s = [
        {
          title: n("name"),
          key: "name"
        },
        {
          title: n("mail_count"),
          key: "mail_count",
          render(y) {
            return U(He, {
              value: y.mail_count,
              "show-zero": true,
              max: 99,
              type: "success"
            });
          }
        },
        {
          title: n("send_count"),
          key: "send_count",
          render(y) {
            return U(He, {
              value: y.send_count,
              "show-zero": true,
              max: 99,
              type: "success"
            });
          }
        }
      ];
      return oe(async () => {
        await p();
      }), (y, g) => {
        const d = Ne;
        return E(), Q("div", nl, [
          e(d, {
            columns: s,
            data: b.value,
            bordered: false,
            embedded: ""
          }, null, 8, [
            "data"
          ])
        ]);
      };
    }
  };
  ol = ae(sl, [
    [
      "__scopeId",
      "data-v-b33d0779"
    ]
  ]);
  rl = {
    style: {
      "margin-top": "10px"
    }
  };
  il = {
    style: {
      overflow: "auto"
    }
  };
  ul = {
    style: {
      display: "inline-block"
    }
  };
  dl = {
    __name: "UserManagement",
    setup(_) {
      const { loading: c, openSettings: r } = ce(), l = se(), { t: n } = le({
        messages: {
          en: {
            success: "Success",
            user_email: "User Email",
            role: "Role",
            address_count: "Address Count",
            created_at: "Created At",
            actions: "Actions",
            query: "Query",
            itemCount: "itemCount",
            deleteUser: "Delete User",
            delete: "Delete",
            deleteUserTip: "Are you sure you want to delete this user?",
            resetPassword: "Reset Password",
            pleaseInput: "Please input complete information",
            createUser: "Create User",
            email: "Email",
            password: "Password",
            changeRole: "Change Role",
            prefix: "Prefix",
            domains: "Domains",
            roleDonotExist: "Current Role does not exist",
            userAddressManagement: "Address Management"
          },
          zh: {
            success: "\u6210\u529F",
            user_email: "\u7528\u6237\u90AE\u7BB1",
            role: "\u89D2\u8272",
            address_count: "\u5730\u5740\u6570\u91CF",
            created_at: "\u521B\u5EFA\u65F6\u95F4",
            actions: "\u64CD\u4F5C",
            query: "\u67E5\u8BE2",
            itemCount: "\u603B\u6570",
            deleteUser: "\u5220\u9664\u7528\u6237",
            delete: "\u5220\u9664",
            deleteUserTip: "\u786E\u5B9A\u8981\u5220\u9664\u6B64\u7528\u6237\u5417\uFF1F",
            resetPassword: "\u91CD\u7F6E\u5BC6\u7801",
            pleaseInput: "\u8BF7\u8F93\u5165\u5B8C\u6574\u4FE1\u606F",
            createUser: "\u521B\u5EFA\u7528\u6237",
            email: "\u90AE\u7BB1",
            password: "\u5BC6\u7801",
            changeRole: "\u66F4\u6539\u89D2\u8272",
            prefix: "\u524D\u7F00",
            domains: "\u57DF\u540D",
            roleDonotExist: "\u5F53\u524D\u89D2\u8272\u4E0D\u5B58\u5728",
            userAddressManagement: "\u5730\u5740\u7BA1\u7406"
          }
        }
      }), b = f([]), p = f(0), s = f(1), y = f(20), g = f(""), d = f(false), i = f(""), w = f(false), S = f(0), I = f(false), k = f({
        email: "",
        password: ""
      }), v = f(false), u = f(false), O = f([]), K = f(""), D = xe(() => O.value.map((A) => ({
        label: A.role,
        value: A.role
      }))), x = async () => {
        try {
          const A = await T.fetch("/admin/user_roles");
          O.value = A;
        } catch (A) {
          console.log(A), l.error(A.message || "error");
        }
      }, N = async () => {
        try {
          g.value = g.value.trim();
          const { results: A, count: F } = await T.fetch(`/admin/users?limit=${y.value}&offset=${(s.value - 1) * y.value}` + (g.value ? `&query=${g.value}` : ""));
          b.value = A, F > 0 && (p.value = F);
        } catch (A) {
          console.log(A), l.error(A.message || "error");
        }
      }, W = async () => {
        if (!i.value) {
          l.error(n("pleaseInput"));
          return;
        }
        try {
          await T.fetch(`/admin/users/${S.value}/reset_password`, {
            method: "POST",
            body: JSON.stringify({
              password: await ot(i.value)
            })
          }), l.success(n("success")), d.value = false;
        } catch (A) {
          console.log(A), l.error(A.message || "error");
        }
      }, q = async () => {
        if (!k.value.email || !k.value.password) {
          l.error(n("pleaseInput"));
          return;
        }
        try {
          await T.fetch("/admin/users", {
            method: "POST",
            body: JSON.stringify({
              email: k.value.email,
              password: await ot(k.value.password)
            })
          }), l.success(n("success")), await N(), I.value = false;
        } catch (A) {
          console.log(A), l.error(A.message || "error");
        }
      }, C = async () => {
        try {
          await T.fetch(`/admin/users/${S.value}`, {
            method: "DELETE"
          }), l.success(n("success")), w.value = false;
        } catch (A) {
          console.log(A), l.error(A.message || "error");
        }
      }, J = async () => {
        try {
          await T.fetch("/admin/user_roles", {
            method: "POST",
            body: JSON.stringify({
              user_id: S.value,
              role_text: K.value
            })
          }), l.success(n("success")), v.value = false, await N();
        } catch (A) {
          console.log(A), l.error(A.message || "error");
        }
      }, V = [
        {
          title: "ID",
          key: "id"
        },
        {
          title: n("user_email"),
          key: "user_email"
        },
        {
          title: n("role"),
          key: "role_text",
          render(A) {
            return A.role_text ? U(ut, {
              bordered: false,
              type: "info"
            }, {
              default: () => A.role_text
            }) : null;
          }
        },
        {
          title: n("address_count"),
          key: "address_count",
          render(A) {
            return U(z, {
              text: true,
              onClick: () => {
                A.address_count <= 0 || (S.value = A.id, u.value = true);
              }
            }, {
              icon: () => U(He, {
                value: A.address_count,
                "show-zero": true,
                max: 99,
                type: "success"
              }),
              default: () => A.address_count > 0 ? n("userAddressManagement") : ""
            });
          }
        },
        {
          title: n("created_at"),
          key: "created_at"
        },
        {
          title: n("actions"),
          key: "actions",
          render(A) {
            return U("div", [
              U(Tt, {
                mode: "horizontal",
                options: [
                  {
                    label: n("actions"),
                    icon: () => U(Pt),
                    key: "action",
                    children: [
                      {
                        label: () => U(z, {
                          text: true,
                          onClick: () => {
                            S.value = A.id, u.value = true;
                          }
                        }, {
                          default: () => n("userAddressManagement")
                        }),
                        show: A.address_count > 0
                      },
                      {
                        label: () => U(z, {
                          text: true,
                          onClick: () => {
                            S.value = A.id, K.value = A.role_text, v.value = true;
                          }
                        }, {
                          default: () => n("changeRole")
                        })
                      },
                      {
                        label: () => U(z, {
                          text: true,
                          onClick: () => {
                            S.value = A.id, i.value = "", d.value = true;
                          }
                        }, {
                          default: () => n("resetPassword")
                        })
                      },
                      {
                        label: () => U(z, {
                          text: true,
                          onClick: () => {
                            S.value = A.id, k.value.email = "", k.value.password = "", w.value = true;
                          }
                        }, {
                          default: () => n("delete")
                        })
                      }
                    ]
                  }
                ]
              })
            ]);
          }
        }
      ], $ = (A) => {
        var _a2;
        const F = (_a2 = O.value.find((ne) => ne.role === A)) == null ? void 0 : _a2.prefix;
        return F ?? r.value.prefix;
      }, Z = (A) => {
        var _a2;
        const F = (_a2 = O.value.find((ne) => ne.role === A)) == null ? void 0 : _a2.domains;
        return F == null || F.length == 0 ? r.value.defaultDomains : F;
      }, _e = xe(() => K.value && !O.value.some((A) => A.role === K.value));
      return Ze([
        s,
        y
      ], async () => {
        await N();
      }), oe(async () => {
        await x(), await N();
      }), (A, F) => {
        const ne = me, Y = ye, R = et, fe = Pe, H = Ue, Fe = ue, je = Ce, we = rt, re = Ne;
        return E(), Q("div", rl, [
          e(fe, {
            show: I.value,
            "onUpdate:show": F[2] || (F[2] = (G) => I.value = G),
            preset: "dialog",
            title: a(n)("createUser")
          }, {
            action: t(() => [
              e(a(z), {
                loading: a(c),
                onClick: q,
                size: "small",
                tertiary: "",
                type: "primary"
              }, {
                default: t(() => [
                  m(o(a(n)("createUser")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              e(R, null, {
                default: t(() => [
                  e(Y, {
                    label: a(n)("email"),
                    required: ""
                  }, {
                    default: t(() => [
                      e(ne, {
                        value: k.value.email,
                        "onUpdate:value": F[0] || (F[0] = (G) => k.value.email = G)
                      }, null, 8, [
                        "value"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(Y, {
                    label: a(n)("password"),
                    required: ""
                  }, {
                    default: t(() => [
                      e(ne, {
                        value: k.value.password,
                        "onUpdate:value": F[1] || (F[1] = (G) => k.value.password = G),
                        type: "password",
                        "show-password-on": "click"
                      }, null, 8, [
                        "value"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(fe, {
            show: d.value,
            "onUpdate:show": F[4] || (F[4] = (G) => d.value = G),
            preset: "dialog",
            title: a(n)("resetPassword")
          }, {
            action: t(() => [
              e(a(z), {
                loading: a(c),
                onClick: W,
                size: "small",
                tertiary: "",
                type: "primary"
              }, {
                default: t(() => [
                  m(o(a(n)("resetPassword")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              e(Y, {
                label: a(n)("password"),
                required: ""
              }, {
                default: t(() => [
                  e(ne, {
                    value: i.value,
                    "onUpdate:value": F[3] || (F[3] = (G) => i.value = G),
                    type: "password",
                    "show-password-on": "click"
                  }, null, 8, [
                    "value"
                  ])
                ]),
                _: 1
              }, 8, [
                "label"
              ])
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(fe, {
            show: w.value,
            "onUpdate:show": F[5] || (F[5] = (G) => w.value = G),
            preset: "dialog",
            title: a(n)("deleteUser")
          }, {
            action: t(() => [
              e(a(z), {
                loading: a(c),
                onClick: C,
                size: "small",
                tertiary: "",
                type: "error"
              }, {
                default: t(() => [
                  m(o(a(n)("deleteUser")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(a(n)("deleteUserTip")), 1)
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(fe, {
            show: v.value,
            "onUpdate:show": F[7] || (F[7] = (G) => v.value = G),
            preset: "dialog",
            title: a(n)("changeRole")
          }, {
            action: t(() => [
              e(a(z), {
                loading: a(c),
                onClick: J,
                size: "small",
                tertiary: "",
                type: "primary"
              }, {
                default: t(() => [
                  m(o(a(n)("changeRole")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              _e.value ? (E(), X(H, {
                key: 0,
                type: "error",
                bordered: false
              }, {
                default: t(() => [
                  M("span", null, o(a(n)("roleDonotExist")), 1)
                ]),
                _: 1
              })) : te("", true),
              M("p", null, o(a(n)("prefix") + ": " + $(K.value)), 1),
              M("p", null, o(a(n)("domains") + ": " + JSON.stringify(Z(K.value))), 1),
              e(Fe, {
                clearable: "",
                value: K.value,
                "onUpdate:value": F[6] || (F[6] = (G) => K.value = G),
                options: D.value
              }, null, 8, [
                "value",
                "options"
              ])
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(fe, {
            show: u.value,
            "onUpdate:show": F[8] || (F[8] = (G) => u.value = G),
            preset: "card",
            title: a(n)("userAddressManagement")
          }, {
            default: t(() => [
              e(ol, {
                user_id: S.value
              }, null, 8, [
                "user_id"
              ])
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(je, null, {
            default: t(() => [
              e(ne, {
                value: g.value,
                "onUpdate:value": F[9] || (F[9] = (G) => g.value = G),
                onKeydown: Ge(N, [
                  "enter"
                ])
              }, null, 8, [
                "value"
              ]),
              e(a(z), {
                onClick: N,
                type: "primary",
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(n)("query")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          M("div", il, [
            M("div", ul, [
              e(we, {
                page: s.value,
                "onUpdate:page": F[11] || (F[11] = (G) => s.value = G),
                "page-size": y.value,
                "onUpdate:pageSize": F[12] || (F[12] = (G) => y.value = G),
                "item-count": p.value,
                "page-sizes": [
                  20,
                  50,
                  100
                ],
                "show-size-picker": ""
              }, {
                prefix: t(({ itemCount: G }) => [
                  m(o(a(n)("itemCount")) + ": " + o(G), 1)
                ]),
                suffix: t(() => [
                  e(a(z), {
                    onClick: F[10] || (F[10] = (G) => I.value = true),
                    size: "small",
                    tertiary: "",
                    type: "primary",
                    style: {
                      "margin-left": "10px"
                    }
                  }, {
                    default: t(() => [
                      m(o(a(n)("createUser")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "page",
                "page-size",
                "item-count"
              ])
            ]),
            e(re, {
              columns: V,
              data: b.value,
              bordered: false,
              embedded: ""
            }, null, 8, [
              "data"
            ])
          ])
        ]);
      };
    }
  };
  cl = ae(dl, [
    [
      "__scopeId",
      "data-v-9bf893ed"
    ]
  ]);
  pl = {
    class: "center"
  };
  ml = {
    __name: "UserSettings",
    setup(_) {
      const { loading: c } = ce(), r = se(), { t: l } = le({
        messages: {
          en: {
            save: "Save",
            successTip: "Save Success",
            enable: "Enable",
            enableUserRegister: "Allow User Register",
            enableMailVerify: "Enable Mail Verify (Send address must be an address in the system with a balance and can send mail normally)",
            verifyMailSender: "Verify Mail Sender",
            enableMailAllowList: "Enable Mail Address Allow List(Manually enterable)",
            manualInputPrompt: "Type and press Enter to add",
            mailAllowList: "Mail Address Allow List",
            maxAddressCount: "Maximum number of email addresses that can be binded",
            emailCheckRegex: "Email Check Regex (e.g. ^[^.]+{'@'}.+$ to disallow dots before {'@'})",
            enableEmailCheckRegex: "Enable Email Check Regex"
          },
          zh: {
            save: "\u4FDD\u5B58",
            successTip: "\u4FDD\u5B58\u6210\u529F",
            enable: "\u542F\u7528",
            enableUserRegister: "\u5141\u8BB8\u7528\u6237\u6CE8\u518C",
            enableMailVerify: "\u542F\u7528\u90AE\u4EF6\u9A8C\u8BC1(\u53D1\u9001\u5730\u5740\u5FC5\u987B\u662F\u7CFB\u7EDF\u4E2D\u80FD\u6709\u4F59\u989D\u4E14\u80FD\u6B63\u5E38\u53D1\u9001\u90AE\u4EF6\u7684\u5730\u5740)",
            verifyMailSender: "\u9A8C\u8BC1\u90AE\u4EF6\u53D1\u9001\u5730\u5740",
            enableMailAllowList: "\u542F\u7528\u90AE\u4EF6\u5730\u5740\u767D\u540D\u5355(\u53EF\u624B\u52A8\u8F93\u5165, \u56DE\u8F66\u589E\u52A0)",
            manualInputPrompt: "\u8F93\u5165\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            mailAllowList: "\u90AE\u4EF6\u5730\u5740\u767D\u540D\u5355",
            maxAddressCount: "\u53EF\u7ED1\u5B9A\u6700\u5927\u90AE\u7BB1\u5730\u5740\u6570\u91CF",
            emailCheckRegex: "\u90AE\u7BB1\u6B63\u5219\u6821\u9A8C (\u4F8B\u5982 ^[^.]+{'@'}.+$ \u7981\u6B62{'@'}\u524D\u9762\u6709.)",
            enableEmailCheckRegex: "\u542F\u7528\u90AE\u7BB1\u6B63\u5219\u6821\u9A8C"
          }
        }
      }), n = [
        "gmail.com",
        "163.com",
        "126.com",
        "qq.com",
        "outlook.com",
        "hotmail.com",
        "icloud.com",
        "yahoo.com",
        "foxmail.com"
      ], b = n.map((g) => ({
        label: g,
        value: g
      })), p = f({
        enable: false,
        enableMailVerify: false,
        verifyMailSender: "",
        enableMailAllowList: false,
        mailAllowList: n,
        maxAddressCount: 5,
        enableEmailCheckRegex: false,
        emailCheckRegex: ""
      }), s = async () => {
        try {
          const g = await T.fetch("/admin/user_settings");
          Object.assign(p.value, g);
        } catch (g) {
          r.error(g.message || "error");
        }
      }, y = async () => {
        try {
          await T.fetch("/admin/user_settings", {
            method: "POST",
            body: JSON.stringify(p.value)
          }), r.success(l("successTip"));
        } catch (g) {
          r.error(g.message || "error");
        }
      };
      return oe(async () => {
        await s();
      }), (g, d) => {
        const i = z, w = Ee, S = Ve, I = ye, k = Ke, v = me, u = Ce, O = Le, K = ue, D = Je, x = et, N = pe;
        return E(), Q("div", pl, [
          e(N, {
            bordered: false,
            embedded: "",
            style: {
              "max-width": "600px"
            }
          }, {
            default: t(() => [
              e(w, {
                justify: "end"
              }, {
                default: t(() => [
                  e(i, {
                    onClick: y,
                    type: "primary",
                    loading: a(c)
                  }, {
                    default: t(() => [
                      m(o(a(l)("save")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "loading"
                  ])
                ]),
                _: 1
              }),
              e(x, {
                model: p.value
              }, {
                default: t(() => [
                  e(I, {
                    label: a(l)("enableUserRegister")
                  }, {
                    default: t(() => [
                      e(S, {
                        value: p.value.enable,
                        "onUpdate:value": d[0] || (d[0] = (W) => p.value.enable = W),
                        round: false
                      }, null, 8, [
                        "value"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(I, {
                    label: a(l)("enableMailVerify")
                  }, {
                    default: t(() => [
                      e(u, null, {
                        default: t(() => [
                          e(k, {
                            checked: p.value.enableMailVerify,
                            "onUpdate:checked": d[1] || (d[1] = (W) => p.value.enableMailVerify = W),
                            style: {
                              width: "20%"
                            }
                          }, {
                            default: t(() => [
                              m(o(a(l)("enable")), 1)
                            ]),
                            _: 1
                          }, 8, [
                            "checked"
                          ]),
                          p.value.enableMailVerify ? (E(), X(v, {
                            key: 0,
                            value: p.value.verifyMailSender,
                            "onUpdate:value": d[2] || (d[2] = (W) => p.value.verifyMailSender = W),
                            style: {
                              width: "80%"
                            },
                            placeholder: a(l)("verifyMailSender")
                          }, null, 8, [
                            "value",
                            "placeholder"
                          ])) : te("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(I, {
                    label: a(l)("enableMailAllowList")
                  }, {
                    default: t(() => [
                      e(u, null, {
                        default: t(() => [
                          e(k, {
                            checked: p.value.enableMailAllowList,
                            "onUpdate:checked": d[3] || (d[3] = (W) => p.value.enableMailAllowList = W),
                            style: {
                              width: "20%"
                            }
                          }, {
                            default: t(() => [
                              m(o(a(l)("enable")), 1)
                            ]),
                            _: 1
                          }, 8, [
                            "checked"
                          ]),
                          p.value.enableMailAllowList ? (E(), X(K, {
                            key: 0,
                            value: p.value.mailAllowList,
                            "onUpdate:value": d[4] || (d[4] = (W) => p.value.mailAllowList = W),
                            filterable: "",
                            multiple: "",
                            tag: "",
                            style: {
                              width: "80%"
                            },
                            options: a(b),
                            placeholder: a(l)("mailAllowList")
                          }, {
                            empty: t(() => [
                              e(O, {
                                depth: "3"
                              }, {
                                default: t(() => [
                                  m(o(a(l)("manualInputPrompt")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "value",
                            "options",
                            "placeholder"
                          ])) : te("", true)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(I, {
                    label: a(l)("maxAddressCount")
                  }, {
                    default: t(() => [
                      e(u, null, {
                        default: t(() => [
                          e(D, {
                            value: p.value.maxAddressCount,
                            "onUpdate:value": d[5] || (d[5] = (W) => p.value.maxAddressCount = W),
                            placeholder: a(l)("maxAddressCount")
                          }, null, 8, [
                            "value",
                            "placeholder"
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(I, {
                    label: a(l)("enableEmailCheckRegex")
                  }, {
                    default: t(() => [
                      e(w, {
                        align: "center",
                        wrap: false,
                        style: {
                          width: "100%"
                        }
                      }, {
                        default: t(() => [
                          e(k, {
                            checked: p.value.enableEmailCheckRegex,
                            "onUpdate:checked": d[6] || (d[6] = (W) => p.value.enableEmailCheckRegex = W),
                            style: {
                              flex: "0 0 auto"
                            }
                          }, {
                            default: t(() => [
                              m(o(a(l)("enable")), 1)
                            ]),
                            _: 1
                          }, 8, [
                            "checked"
                          ]),
                          sa(e(v, {
                            value: p.value.emailCheckRegex,
                            "onUpdate:value": d[7] || (d[7] = (W) => p.value.emailCheckRegex = W),
                            style: {
                              flex: "1 1 auto"
                            },
                            placeholder: a(l)("emailCheckRegex")
                          }, null, 8, [
                            "value",
                            "placeholder"
                          ]), [
                            [
                              oa,
                              p.value.enableEmailCheckRegex
                            ]
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ])
                ]),
                _: 1
              }, 8, [
                "model"
              ])
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  xt = ae(ml, [
    [
      "__scopeId",
      "data-v-ecc1d916"
    ]
  ]);
  _l = [
    "gmail.com",
    "163.com",
    "126.com",
    "qq.com",
    "outlook.com",
    "hotmail.com",
    "icloud.com",
    "yahoo.com",
    "foxmail.com"
  ];
  Ct = {
    COMMOM_MAIL: _l
  };
  fl = {
    class: "center"
  };
  vl = [
    "innerHTML"
  ];
  bl = de({
    __name: "UserOauth2Settings",
    setup(_) {
      const { loading: c } = ce(), r = se(), { t: l } = le({
        messages: {
          en: {
            save: "Save",
            delete: "Delete",
            successTip: "Save Success",
            enable: "Enable",
            enableMailAllowList: "Enable Mail Address Allow List(Manually enterable)",
            manualInputPrompt: "Type and press Enter to add",
            mailAllowList: "Mail Address Allow List",
            addOauth2: "Add Oauth2",
            name: "Name",
            icon: "Icon (SVG, please ensure trusted source)",
            iconPreview: "Preview",
            oauth2Type: "Oauth2 Type",
            enableEmailFormat: "Enable Email Format",
            userEmailFormat: "Email Regex Pattern",
            userEmailReplace: "Replace Template",
            userEmailFormatTip: "Use regex to transform email. Example: ^(.+)@old\\.com$ with $1@new.com",
            tip: "Third-party login will automatically use the user's email to register an account (the same email will be regarded as the same account), this account is the same as the registered account, and you can also set the password through the forget password"
          },
          zh: {
            save: "\u4FDD\u5B58",
            delete: "\u5220\u9664",
            successTip: "\u4FDD\u5B58\u6210\u529F",
            enable: "\u542F\u7528",
            enableMailAllowList: "\u542F\u7528\u90AE\u4EF6\u5730\u5740\u767D\u540D\u5355(\u53EF\u624B\u52A8\u8F93\u5165, \u56DE\u8F66\u589E\u52A0)",
            manualInputPrompt: "\u8F93\u5165\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            mailAllowList: "\u90AE\u4EF6\u5730\u5740\u767D\u540D\u5355",
            addOauth2: "\u6DFB\u52A0 Oauth2",
            name: "\u540D\u79F0",
            icon: "\u56FE\u6807 (SVG, \u8BF7\u786E\u4FDD\u6765\u6E90\u53EF\u4FE1)",
            iconPreview: "\u9884\u89C8",
            oauth2Type: "Oauth2 \u7C7B\u578B",
            enableEmailFormat: "\u542F\u7528\u90AE\u7BB1\u683C\u5F0F\u8F6C\u6362",
            userEmailFormat: "\u90AE\u7BB1\u6B63\u5219\u8868\u8FBE\u5F0F",
            userEmailReplace: "\u66FF\u6362\u6A21\u677F",
            userEmailFormatTip: "\u4F7F\u7528\u6B63\u5219\u8F6C\u6362\u90AE\u7BB1\u3002\u793A\u4F8B: ^(.+)@old\\.com$ \u914D\u5408 $1@new.com",
            tip: "\u7B2C\u4E09\u65B9\u767B\u5F55\u4F1A\u81EA\u52A8\u4F7F\u7528\u7528\u6237\u90AE\u7BB1\u6CE8\u518C\u8D26\u53F7(\u90AE\u7BB1\u76F8\u540C\u5C06\u89C6\u4E3A\u540C\u4E00\u8D26\u53F7), \u6B64\u8D26\u53F7\u548C\u6CE8\u518C\u7684\u8D26\u53F7\u76F8\u540C, \u4E5F\u53EF\u4EE5\u901A\u8FC7\u5FD8\u8BB0\u5BC6\u7801\u8BBE\u7F6E\u5BC6\u7801"
          }
        }
      }), n = {
        github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>',
        linuxdo: '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><g><path d="m7.44,0s.09,0,.13,0c.09,0,.19,0,.28,0,.14,0,.29,0,.43,0,.09,0,.18,0,.27,0q.12,0,.25,0t.26.08c.15.03.29.06.44.08,1.97.38,3.78,1.47,4.95,3.11.04.06.09.12.13.18.67.96,1.15,2.11,1.3,3.28q0,.19.09.26c0,.15,0,.29,0,.44,0,.04,0,.09,0,.13,0,.09,0,.19,0,.28,0,.14,0,.29,0,.43,0,.09,0,.18,0,.27,0,.08,0,.17,0,.25q0,.19-.08.26c-.03.15-.06.29-.08.44-.38,1.97-1.47,3.78-3.11,4.95-.06.04-.12.09-.18.13-.96.67-2.11,1.15-3.28,1.3q-.19,0-.26.09c-.15,0-.29,0-.44,0-.04,0-.09,0-.13,0-.09,0-.19,0-.28,0-.14,0-.29,0-.43,0-.09,0-.18,0-.27,0-.08,0-.17,0-.25,0q-.19,0-.26-.08c-.15-.03-.29-.06-.44-.08-1.97-.38-3.78-1.47-4.95-3.11q-.07-.09-.13-.18c-.67-.96-1.15-2.11-1.3-3.28q0-.19-.09-.26c0-.15,0-.29,0-.44,0-.04,0-.09,0-.13,0-.09,0-.19,0-.28,0-.14,0-.29,0-.43,0-.09,0-.18,0-.27,0-.08,0-.17,0-.25q0-.19.08-.26c.03-.15.06-.29.08-.44.38-1.97,1.47-3.78,3.11-4.95.06-.04.12-.09.18-.13C4.42.73,5.57.26,6.74.1,7,.07,7.15,0,7.44,0Z" fill="#EFEFEF"/><path d="m1.27,11.33h13.45c-.94,1.89-2.51,3.21-4.51,3.88-1.99.59-3.96.37-5.8-.57-1.25-.7-2.67-1.9-3.14-3.3Z" fill="#FEB005"/><path d="m12.54,1.99c.87.7,1.82,1.59,2.18,2.68H1.27c.87-1.74,2.33-3.13,4.2-3.78,2.44-.79,5-.47,7.07,1.1Z" fill="#1D1D1F"/></g></svg>',
        authentik: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.83-3.23 9.36-7 10.57-3.77-1.21-7-5.74-7-10.57V6.3l7-3.12zM11 7v6h2V7h-2zm0 8v2h2v-2h-2z"/></svg>'
      }, b = Ct.COMMOM_MAIL.map((I) => ({
        label: I,
        value: I
      })), p = f([]), s = f(false), y = f(""), g = f("custom"), d = async () => {
        try {
          const I = await T.fetch("/admin/user_oauth2_settings");
          Object.assign(p.value, I);
        } catch (I) {
          r.error(I.message || "error");
        }
      }, i = async () => {
        try {
          await T.fetch("/admin/user_oauth2_settings", {
            method: "POST",
            body: JSON.stringify(p.value)
          }), r.success(l("successTip"));
        } catch (I) {
          r.error(I.message || "error");
        }
      }, w = () => {
        const k = {
          github: {
            authorizationURL: "https://github.com/login/oauth/authorize",
            accessTokenURL: "https://github.com/login/oauth/access_token",
            accessTokenFormat: "json",
            userInfoURL: "https://api.github.com/user",
            userEmailKey: "email",
            scope: "user:email",
            icon: n.github
          },
          linuxdo: {
            authorizationURL: "https://connect.linux.do/oauth2/authorize",
            accessTokenURL: "https://connect.linux.do/oauth2/token",
            accessTokenFormat: "urlencoded",
            userInfoURL: "https://connect.linux.do/api/user",
            userEmailKey: "id",
            scope: "user",
            enableEmailFormat: true,
            userEmailFormat: "^(.+)$",
            userEmailReplace: "linux_do_$1@oauth.linux.do",
            icon: n.linuxdo
          },
          authentik: {
            authorizationURL: "https://youdomain/application/o/authorize/",
            accessTokenURL: "https://youdomain/application/o/token/",
            accessTokenFormat: "urlencoded",
            userInfoURL: "https://youdomain/application/o/userinfo/",
            userEmailKey: "email",
            scope: "email openid",
            icon: n.authentik
          },
          custom: {}
        }[g.value] || {};
        p.value.push({
          name: y.value,
          icon: "",
          clientID: "",
          clientSecret: "",
          authorizationURL: "",
          accessTokenURL: "",
          accessTokenFormat: "",
          userInfoURL: "",
          userEmailKey: "",
          redirectURL: `${window.location.origin}/user/oauth2/callback`,
          logoutURL: "",
          scope: "",
          enableEmailFormat: false,
          userEmailFormat: "",
          userEmailReplace: "",
          enableMailAllowList: false,
          mailAllowList: Ct.COMMOM_MAIL,
          ...k
        }), y.value = "", s.value = false;
      }, S = [
        {
          label: "json",
          value: "json"
        },
        {
          label: "urlencoded",
          value: "urlencoded"
        }
      ];
      return oe(async () => {
        await d();
      }), (I, k) => {
        const v = me, u = ye, O = ra, K = Rt, D = et, x = z, N = Pe, W = Ue, q = Ee, C = ct, J = Ye, V = ue, $ = Ke, Z = ia, _e = Le, A = Ce, F = Dt, ne = Et, Y = pe;
        return E(), Q("div", fl, [
          e(N, {
            show: s.value,
            "onUpdate:show": k[2] || (k[2] = (R) => s.value = R),
            preset: "dialog",
            title: a(l)("addOauth2")
          }, {
            action: t(() => [
              e(x, {
                loading: a(c),
                onClick: w,
                size: "small",
                tertiary: "",
                type: "primary"
              }, {
                default: t(() => [
                  m(o(a(l)("addOauth2")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              e(D, null, {
                default: t(() => [
                  e(u, {
                    label: a(l)("name"),
                    required: ""
                  }, {
                    default: t(() => [
                      e(v, {
                        value: y.value,
                        "onUpdate:value": k[0] || (k[0] = (R) => y.value = R)
                      }, null, 8, [
                        "value"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(u, {
                    label: a(l)("oauth2Type"),
                    required: ""
                  }, {
                    default: t(() => [
                      e(K, {
                        value: g.value,
                        "onUpdate:value": k[1] || (k[1] = (R) => g.value = R)
                      }, {
                        default: t(() => [
                          e(O, {
                            value: "github",
                            label: "Github"
                          }),
                          e(O, {
                            value: "linuxdo",
                            label: "Linux Do"
                          }),
                          e(O, {
                            value: "authentik",
                            label: "Authentik"
                          }),
                          e(O, {
                            value: "custom",
                            label: "Custom"
                          })
                        ]),
                        _: 1
                      }, 8, [
                        "value"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          e(Y, {
            bordered: false,
            embedded: "",
            style: {
              "max-width": "600px"
            }
          }, {
            default: t(() => [
              e(W, {
                "show-icon": false,
                bordered: false,
                type: "warning",
                closable: "",
                style: {
                  "margin-bottom": "10px"
                }
              }, {
                default: t(() => [
                  m(o(a(l)("tip")), 1)
                ]),
                _: 1
              }),
              e(q, {
                justify: "end"
              }, {
                default: t(() => [
                  e(x, {
                    onClick: k[3] || (k[3] = (R) => s.value = true),
                    secondary: "",
                    loading: a(c)
                  }, {
                    default: t(() => [
                      m(o(a(l)("addOauth2")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "loading"
                  ]),
                  e(x, {
                    onClick: i,
                    type: "primary",
                    loading: a(c)
                  }, {
                    default: t(() => [
                      m(o(a(l)("save")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "loading"
                  ])
                ]),
                _: 1
              }),
              e(C),
              e(ne, {
                "default-expanded-names": "1",
                accordion: "",
                "trigger-areas": [
                  "main",
                  "arrow"
                ]
              }, {
                default: t(() => [
                  (E(true), Q(dt, null, $t(p.value, (R, fe) => (E(), X(F, {
                    key: fe,
                    title: R.name
                  }, {
                    "header-extra": t(() => [
                      e(J, {
                        onPositiveClick: (H) => p.value.splice(fe, 1)
                      }, {
                        trigger: t(() => [
                          e(x, {
                            tertiary: "",
                            type: "error"
                          }, {
                            default: t(() => [
                              m(o(a(l)("delete")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        default: t(() => [
                          m(" " + o(a(l)("delete")), 1)
                        ]),
                        _: 1
                      }, 8, [
                        "onPositiveClick"
                      ])
                    ]),
                    default: t(() => [
                      e(D, {
                        model: R
                      }, {
                        default: t(() => [
                          e(u, {
                            label: a(l)("name"),
                            required: ""
                          }, {
                            default: t(() => [
                              e(v, {
                                value: R.name,
                                "onUpdate:value": (H) => R.name = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ]),
                          e(u, {
                            label: a(l)("icon")
                          }, {
                            default: t(() => [
                              e(v, {
                                value: R.icon,
                                "onUpdate:value": (H) => R.icon = H,
                                type: "textarea",
                                autosize: {
                                  minRows: 2,
                                  maxRows: 5
                                },
                                style: {
                                  width: "100%"
                                }
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ]),
                          R.icon ? (E(), X(u, {
                            key: 0,
                            label: a(l)("iconPreview")
                          }, {
                            default: t(() => [
                              M("span", {
                                class: "oauth2-icon-preview",
                                innerHTML: R.icon
                              }, null, 8, vl)
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ])) : te("", true),
                          e(u, {
                            label: "Client ID",
                            required: ""
                          }, {
                            default: t(() => [
                              e(v, {
                                value: R.clientID,
                                "onUpdate:value": (H) => R.clientID = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(u, {
                            label: "Client Secret",
                            required: ""
                          }, {
                            default: t(() => [
                              e(v, {
                                value: R.clientSecret,
                                "onUpdate:value": (H) => R.clientSecret = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(u, {
                            label: "Authorization URL",
                            required: ""
                          }, {
                            default: t(() => [
                              e(v, {
                                value: R.authorizationURL,
                                "onUpdate:value": (H) => R.authorizationURL = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(u, {
                            label: "Access Token URL",
                            required: ""
                          }, {
                            default: t(() => [
                              e(v, {
                                value: R.accessTokenURL,
                                "onUpdate:value": (H) => R.accessTokenURL = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(u, {
                            label: "Access Token Params Format",
                            required: ""
                          }, {
                            default: t(() => [
                              e(V, {
                                value: R.accessTokenFormat,
                                "onUpdate:value": (H) => R.accessTokenFormat = H,
                                options: S
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(u, {
                            label: "User Info URL",
                            required: ""
                          }, {
                            default: t(() => [
                              e(v, {
                                value: R.userInfoURL,
                                "onUpdate:value": (H) => R.userInfoURL = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(u, {
                            label: "User Email Key (Support JSONPATH like $[0].email)",
                            required: ""
                          }, {
                            default: t(() => [
                              e(v, {
                                value: R.userEmailKey,
                                "onUpdate:value": (H) => R.userEmailKey = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(u, {
                            label: a(l)("enableEmailFormat")
                          }, {
                            default: t(() => [
                              e($, {
                                checked: R.enableEmailFormat,
                                "onUpdate:checked": (H) => R.enableEmailFormat = H
                              }, {
                                default: t(() => [
                                  m(o(a(l)("enable")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked",
                                "onUpdate:checked"
                              ])
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ]),
                          R.enableEmailFormat ? (E(), X(u, {
                            key: 1,
                            label: a(l)("userEmailFormat")
                          }, {
                            default: t(() => [
                              e(Z, {
                                trigger: "hover"
                              }, {
                                trigger: t(() => [
                                  e(v, {
                                    value: R.userEmailFormat,
                                    "onUpdate:value": (H) => R.userEmailFormat = H,
                                    placeholder: "^(.+)@old\\.com$"
                                  }, null, 8, [
                                    "value",
                                    "onUpdate:value"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(l)("userEmailFormatTip")), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ])) : te("", true),
                          R.enableEmailFormat ? (E(), X(u, {
                            key: 2,
                            label: a(l)("userEmailReplace")
                          }, {
                            default: t(() => [
                              e(Z, {
                                trigger: "hover"
                              }, {
                                trigger: t(() => [
                                  e(v, {
                                    value: R.userEmailReplace,
                                    "onUpdate:value": (H) => R.userEmailReplace = H,
                                    placeholder: "$1@new.com"
                                  }, null, 8, [
                                    "value",
                                    "onUpdate:value"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(l)("userEmailFormatTip")), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ])) : te("", true),
                          e(u, {
                            label: "Redirect URL",
                            required: ""
                          }, {
                            default: t(() => [
                              e(v, {
                                value: R.redirectURL,
                                "onUpdate:value": (H) => R.redirectURL = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(u, {
                            label: "Scope",
                            required: ""
                          }, {
                            default: t(() => [
                              e(v, {
                                value: R.scope,
                                "onUpdate:value": (H) => R.scope = H
                              }, null, 8, [
                                "value",
                                "onUpdate:value"
                              ])
                            ]),
                            _: 2
                          }, 1024),
                          e(u, {
                            label: a(l)("enableMailAllowList")
                          }, {
                            default: t(() => [
                              e(A, null, {
                                default: t(() => [
                                  e($, {
                                    checked: R.enableMailAllowList,
                                    "onUpdate:checked": (H) => R.enableMailAllowList = H,
                                    style: {
                                      width: "20%"
                                    }
                                  }, {
                                    default: t(() => [
                                      m(o(a(l)("enable")), 1)
                                    ]),
                                    _: 1
                                  }, 8, [
                                    "checked",
                                    "onUpdate:checked"
                                  ]),
                                  R.enableMailAllowList ? (E(), X(V, {
                                    key: 0,
                                    value: R.mailAllowList,
                                    "onUpdate:value": (H) => R.mailAllowList = H,
                                    filterable: "",
                                    multiple: "",
                                    tag: "",
                                    style: {
                                      width: "80%"
                                    },
                                    options: a(b),
                                    placeholder: a(l)("mailAllowList")
                                  }, {
                                    empty: t(() => [
                                      e(_e, {
                                        depth: "3"
                                      }, {
                                        default: t(() => [
                                          m(o(a(l)("manualInputPrompt")), 1)
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }, 8, [
                                    "value",
                                    "onUpdate:value",
                                    "options",
                                    "placeholder"
                                  ])) : te("", true)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, [
                            "label"
                          ])
                        ]),
                        _: 2
                      }, 1032, [
                        "model"
                      ])
                    ]),
                    _: 2
                  }, 1032, [
                    "title"
                  ]))), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  gl = ae(bl, [
    [
      "__scopeId",
      "data-v-a62aa937"
    ]
  ]);
  hl = {
    style: {
      "margin-top": "10px"
    }
  };
  yl = {
    key: 1
  };
  wl = {
    __name: "RoleAddressConfig",
    setup(_) {
      const { loading: c } = ce(), r = se(), { t: l } = le({
        messages: {
          en: {
            role: "Role",
            maxAddressCount: "Max Address Count",
            save: "Save",
            successTip: "Success",
            noRolesAvailable: "No roles available in system config",
            roleConfigDesc: "Configure maximum address count for each user role. Role-based limits take priority over global settings.",
            notConfigured: "Not Configured (Use Global Settings)"
          },
          zh: {
            role: "\u89D2\u8272",
            maxAddressCount: "\u6700\u5927\u5730\u5740\u6570\u91CF",
            save: "\u4FDD\u5B58",
            successTip: "\u6210\u529F",
            noRolesAvailable: "\u7CFB\u7EDF\u914D\u7F6E\u4E2D\u6CA1\u6709\u53EF\u7528\u7684\u89D2\u8272",
            roleConfigDesc: "\u4E3A\u6BCF\u4E2A\u7528\u6237\u89D2\u8272\u914D\u7F6E\u6700\u5927\u5730\u5740\u6570\u91CF\u3002\u89D2\u8272\u914D\u7F6E\u4F18\u5148\u4E8E\u5168\u5C40\u8BBE\u7F6E\u3002",
            notConfigured: "\u672A\u914D\u7F6E\uFF08\u4F7F\u7528\u5168\u5C40\u8BBE\u7F6E\uFF09"
          }
        }
      }), n = f([]), b = f([]), p = async () => {
        try {
          const d = await T.fetch("/admin/user_roles");
          n.value = d;
        } catch (d) {
          console.log(d), r.error(d.message || "error");
        }
      }, s = async () => {
        try {
          const { configs: d } = await T.fetch("/admin/role_address_config");
          b.value = n.value.map((i) => {
            var _a2;
            return {
              role: i.role,
              max_address_count: ((_a2 = d[i.role]) == null ? void 0 : _a2.maxAddressCount) ?? null
            };
          });
        } catch (d) {
          console.log(d), r.error(d.message || "error");
        }
      }, y = async () => {
        try {
          const d = {};
          b.value.forEach((i) => {
            i.max_address_count !== null && i.max_address_count !== void 0 && (d[i.role] = {
              maxAddressCount: i.max_address_count
            });
          }), await T.fetch("/admin/role_address_config", {
            method: "POST",
            body: JSON.stringify({
              configs: d
            })
          }), r.success(l("successTip")), await s();
        } catch (d) {
          console.log(d), r.error(d.message || "error");
        }
      }, g = [
        {
          title: l("role"),
          key: "role",
          width: 200,
          render(d) {
            return U(ut, {
              type: "info",
              bordered: false
            }, {
              default: () => d.role
            });
          }
        },
        {
          title: l("maxAddressCount"),
          key: "max_address_count",
          render(d) {
            return U(Je, {
              value: d.max_address_count,
              min: 0,
              max: 999,
              clearable: true,
              placeholder: l("notConfigured"),
              style: "width: 200px;",
              onUpdateValue: (i) => {
                d.max_address_count = i;
              }
            });
          }
        }
      ];
      return oe(async () => {
        await p(), await s();
      }), (d, i) => {
        const w = Ue, S = Ne;
        return E(), Q("div", hl, [
          e(w, {
            type: "info",
            bordered: false,
            style: {
              "margin-bottom": "20px"
            }
          }, {
            default: t(() => [
              m(o(a(l)("roleConfigDesc")), 1)
            ]),
            _: 1
          }),
          n.value.length === 0 ? (E(), X(w, {
            key: 0,
            type: "warning",
            bordered: false
          }, {
            default: t(() => [
              m(o(a(l)("noRolesAvailable")), 1)
            ]),
            _: 1
          })) : (E(), Q("div", yl, [
            e(a(qe), {
              justify: "end",
              style: {
                "margin-bottom": "12px"
              }
            }, {
              default: t(() => [
                e(a(z), {
                  loading: a(c),
                  onClick: y,
                  type: "primary"
                }, {
                  default: t(() => [
                    m(o(a(l)("save")), 1)
                  ]),
                  _: 1
                }, 8, [
                  "loading"
                ])
              ]),
              _: 1
            }),
            e(S, {
              columns: g,
              data: b.value,
              bordered: false,
              embedded: ""
            }, null, 8, [
              "data"
            ])
          ]))
        ]);
      };
    }
  };
  kl = ae(wl, [
    [
      "__scopeId",
      "data-v-68eee4b7"
    ]
  ]);
  xl = {
    style: {
      "margin-top": "10px"
    }
  };
  Cl = {
    __name: "Mails",
    setup(_) {
      const { adminMailTabAddress: c } = ce(), { t: r } = le({
        messages: {
          en: {
            addressQueryTip: "Leave blank to query all addresses",
            query: "Query"
          },
          zh: {
            addressQueryTip: "\u7559\u7A7A\u67E5\u8BE2\u6240\u6709\u5730\u5740",
            query: "\u67E5\u8BE2"
          }
        }
      }), l = f(""), n = () => {
        c.value = c.value.trim(), l.value = Date.now();
      }, b = async (s, y) => await T.fetch(`/admin/mails?limit=${s}&offset=${y}` + (c.value ? `&address=${c.value}` : "")), p = async (s) => {
        await T.fetch(`/admin/mails/${s}`, {
          method: "DELETE"
        });
      };
      return (s, y) => {
        const g = me, d = z, i = Ce;
        return E(), Q("div", xl, [
          e(i, null, {
            default: t(() => [
              e(g, {
                value: a(c),
                "onUpdate:value": y[0] || (y[0] = (w) => it(c) ? c.value = w : null),
                placeholder: a(r)("addressQueryTip"),
                onKeydown: Ge(n, [
                  "enter"
                ]),
                clearable: ""
              }, null, 8, [
                "value",
                "placeholder"
              ]),
              e(d, {
                onClick: n,
                type: "primary",
                tertiary: ""
              }, {
                default: t(() => [
                  m(o(a(r)("query")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          y[1] || (y[1] = M("div", {
            style: {
              "margin-top": "10px"
            }
          }, null, -1)),
          (E(), X(Bt, {
            key: l.value,
            enableUserDeleteEmail: true,
            fetchMailData: b,
            deleteMail: p,
            showFilterInput: true
          }))
        ]);
      };
    }
  };
  Al = {
    style: {
      "margin-top": "10px"
    }
  };
  Sl = {
    __name: "MailsUnknow",
    setup(_) {
      const c = async (l, n) => await T.fetch(`/admin/mails_unknow?limit=${l}&offset=${n}`), r = async (l) => {
        await T.fetch(`/admin/mails/${l}`, {
          method: "DELETE"
        });
      };
      return (l, n) => (E(), Q("div", Al, [
        e(Bt, {
          enableUserDeleteEmail: true,
          fetchMailData: c,
          deleteMail: r
        })
      ]));
    }
  };
  Ul = {
    class: "center"
  };
  Ll = {
    __name: "Maintenance",
    setup(_) {
      const { loading: c } = ce(), r = se(), l = f({
        enableMailsAutoCleanup: false,
        cleanMailsDays: 30,
        enableUnknowMailsAutoCleanup: false,
        cleanUnknowMailsDays: 30,
        enableSendBoxAutoCleanup: false,
        cleanSendBoxDays: 30,
        enableAddressAutoCleanup: false,
        cleanAddressDays: 30,
        enableInactiveAddressAutoCleanup: false,
        cleanInactiveAddressDays: 30,
        enableUnboundAddressAutoCleanup: false,
        cleanUnboundAddressDays: 30,
        enableEmptyAddressAutoCleanup: false,
        cleanEmptyAddressDays: 30,
        customSqlCleanupList: []
      }), { t: n } = le({
        messages: {
          en: {
            tip: "Please input the days",
            mailBoxLabel: "Cleanup the inbox before n days",
            mailUnknowLabel: "Cleanup the unknow mail before n days",
            sendBoxLabel: "Cleanup the sendbox before n days",
            addressCreateLabel: "Cleanup the address created before n days",
            inactiveAddressLabel: "Cleanup the inactive address before n days",
            unboundAddressLabel: "Cleanup the unbound address before n days",
            emptyAddressLabel: "Cleanup the empty address before n days",
            cleanupNow: "Cleanup now",
            autoCleanup: "Auto cleanup",
            cleanupSuccess: "Cleanup success",
            saveSuccess: "Save success",
            save: "Save",
            cronTip: "Enable cron cleanup, need to configure [crons] in worker, please refer to the document, setting 0 days means clear all",
            basicCleanup: "Basic Cleanup",
            customSqlCleanup: "Custom SQL Cleanup",
            customSqlTip: "Add custom DELETE SQL statements for scheduled cleanup. Only single DELETE statement is allowed per entry.",
            addCustomSql: "Add Custom SQL",
            sqlName: "Name",
            sqlStatement: "SQL Statement (DELETE only)",
            sqlNamePlaceholder: "e.g. Clean old logs",
            sqlPlaceholder: "e.g. DELETE FROM raw_mails WHERE source GLOB '*{'@'}example.com' AND created_at < datetime('now', '-3 day')",
            deleteCustomSql: "Delete"
          },
          zh: {
            tip: "\u8BF7\u8F93\u5165\u5929\u6570",
            mailBoxLabel: "\u6E05\u7406 n \u5929\u524D\u7684\u6536\u4EF6\u7BB1",
            mailUnknowLabel: "\u6E05\u7406 n \u5929\u524D\u7684\u65E0\u6536\u4EF6\u4EBA\u90AE\u4EF6",
            sendBoxLabel: "\u6E05\u7406 n \u5929\u524D\u7684\u53D1\u4EF6\u7BB1",
            addressCreateLabel: "\u6E05\u7406 n \u5929\u524D\u521B\u5EFA\u7684\u5730\u5740",
            inactiveAddressLabel: "\u6E05\u7406 n \u5929\u524D\u7684\u672A\u6D3B\u8DC3\u5730\u5740",
            unboundAddressLabel: "\u6E05\u7406 n \u5929\u524D\u7684\u672A\u7ED1\u5B9A\u7528\u6237\u5730\u5740",
            emptyAddressLabel: "\u6E05\u7406 n \u5929\u524D\u7A7A\u90AE\u4EF6\u7684\u90AE\u7BB1\u5730\u5740",
            autoCleanup: "\u81EA\u52A8\u6E05\u7406",
            cleanupSuccess: "\u6E05\u7406\u6210\u529F",
            saveSuccess: "\u4FDD\u5B58\u6210\u529F",
            cleanupNow: "\u7ACB\u5373\u6E05\u7406",
            save: "\u4FDD\u5B58",
            cronTip: "\u542F\u7528\u5B9A\u65F6\u6E05\u7406, \u9700\u5728 worker \u914D\u7F6E [crons] \u53C2\u6570, \u8BF7\u53C2\u8003\u6587\u6863, \u914D\u7F6E\u4E3A 0 \u5929\u8868\u793A\u5168\u90E8\u6E05\u7A7A",
            basicCleanup: "\u57FA\u7840\u6E05\u7406",
            customSqlCleanup: "\u81EA\u5B9A\u4E49 SQL \u6E05\u7406",
            customSqlTip: "\u6DFB\u52A0\u81EA\u5B9A\u4E49 DELETE SQL \u8BED\u53E5\u8FDB\u884C\u5B9A\u65F6\u6E05\u7406\u3002\u6BCF\u6761\u8BB0\u5F55\u4EC5\u5141\u8BB8\u5355\u6761 DELETE \u8BED\u53E5\u3002",
            addCustomSql: "\u6DFB\u52A0\u81EA\u5B9A\u4E49 SQL",
            sqlName: "\u540D\u79F0",
            sqlStatement: "SQL \u8BED\u53E5 (\u4EC5\u9650 DELETE)",
            sqlNamePlaceholder: "\u4F8B\u5982: \u6E05\u7406\u65E7\u65E5\u5FD7",
            sqlPlaceholder: "\u4F8B\u5982: DELETE FROM raw_mails WHERE source GLOB '*{'@'}example.com' AND created_at < datetime('now', '-3 day')",
            deleteCustomSql: "\u5220\u9664"
          }
        }
      }), b = async (d, i) => {
        try {
          await T.fetch("/admin/cleanup", {
            method: "POST",
            body: JSON.stringify({
              cleanType: d,
              cleanDays: i
            })
          }), r.success(n("cleanupSuccess"));
        } catch (w) {
          r.error(w.message || "error");
        }
      }, p = () => {
        l.value.customSqlCleanupList || (l.value.customSqlCleanupList = []), l.value.customSqlCleanupList.push({
          id: Date.now().toString(),
          name: "",
          sql: "",
          enabled: false
        });
      }, s = (d) => {
        l.value.customSqlCleanupList.splice(d, 1);
      }, y = async () => {
        try {
          const d = await T.fetch("/admin/auto_cleanup");
          d && Object.assign(l.value, d), l.value.customSqlCleanupList || (l.value.customSqlCleanupList = []);
        } catch (d) {
          r.error(d.message || "error");
        }
      }, g = async () => {
        try {
          await T.fetch("/admin/auto_cleanup", {
            method: "POST",
            body: JSON.stringify(l.value)
          }), r.success(n("saveSuccess"));
        } catch (d) {
          r.error(d.message || "error");
        }
      };
      return oe(async () => {
        await y();
      }), (d, i) => {
        const w = Ue, S = z, I = Ee, k = Ke, v = Je, u = Mt, O = ye, K = et, D = Ot, x = me, N = qe, W = pe, q = zt;
        return E(), Q("div", Ul, [
          e(W, {
            bordered: false,
            embedded: ""
          }, {
            default: t(() => [
              e(w, {
                "show-icon": false,
                bordered: false,
                type: "warning"
              }, {
                default: t(() => [
                  M("span", null, o(a(n)("cronTip")), 1)
                ]),
                _: 1
              }),
              e(I, {
                justify: "end"
              }, {
                default: t(() => [
                  e(S, {
                    onClick: g,
                    type: "primary",
                    loading: a(c)
                  }, {
                    default: t(() => [
                      m(o(a(n)("save")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "loading"
                  ])
                ]),
                _: 1
              }),
              e(q, {
                type: "segment",
                style: {
                  "margin-top": "16px"
                }
              }, {
                default: t(() => [
                  e(D, {
                    name: "basic",
                    tab: a(n)("basicCleanup")
                  }, {
                    default: t(() => [
                      e(K, {
                        model: l.value
                      }, {
                        default: t(() => [
                          e(O, {
                            label: a(n)("mailBoxLabel")
                          }, {
                            default: t(() => [
                              e(k, {
                                checked: l.value.enableMailsAutoCleanup,
                                "onUpdate:checked": i[0] || (i[0] = (C) => l.value.enableMailsAutoCleanup = C)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(v, {
                                value: l.value.cleanMailsDays,
                                "onUpdate:value": i[1] || (i[1] = (C) => l.value.cleanMailsDays = C),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(S, {
                                onClick: i[2] || (i[2] = (C) => b("mails", l.value.cleanMailsDays))
                              }, {
                                icon: t(() => [
                                  e(u, {
                                    component: a(Te)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ]),
                          e(O, {
                            label: a(n)("mailUnknowLabel")
                          }, {
                            default: t(() => [
                              e(k, {
                                checked: l.value.enableUnknowMailsAutoCleanup,
                                "onUpdate:checked": i[3] || (i[3] = (C) => l.value.enableUnknowMailsAutoCleanup = C)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(v, {
                                value: l.value.cleanUnknowMailsDays,
                                "onUpdate:value": i[4] || (i[4] = (C) => l.value.cleanUnknowMailsDays = C),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(S, {
                                onClick: i[5] || (i[5] = (C) => b("mails_unknow", l.value.cleanUnknowMailsDays))
                              }, {
                                icon: t(() => [
                                  e(u, {
                                    component: a(Te)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ]),
                          e(O, {
                            label: a(n)("sendBoxLabel")
                          }, {
                            default: t(() => [
                              e(k, {
                                checked: l.value.enableSendBoxAutoCleanup,
                                "onUpdate:checked": i[6] || (i[6] = (C) => l.value.enableSendBoxAutoCleanup = C)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(v, {
                                value: l.value.cleanSendBoxDays,
                                "onUpdate:value": i[7] || (i[7] = (C) => l.value.cleanSendBoxDays = C),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(S, {
                                onClick: i[8] || (i[8] = (C) => b("sendbox", l.value.cleanSendBoxDays))
                              }, {
                                icon: t(() => [
                                  e(u, {
                                    component: a(Te)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ]),
                          e(O, {
                            label: a(n)("addressCreateLabel")
                          }, {
                            default: t(() => [
                              e(k, {
                                checked: l.value.enableAddressAutoCleanup,
                                "onUpdate:checked": i[9] || (i[9] = (C) => l.value.enableAddressAutoCleanup = C)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(v, {
                                value: l.value.cleanAddressDays,
                                "onUpdate:value": i[10] || (i[10] = (C) => l.value.cleanAddressDays = C),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(S, {
                                onClick: i[11] || (i[11] = (C) => b("addressCreated", l.value.cleanAddressDays))
                              }, {
                                icon: t(() => [
                                  e(u, {
                                    component: a(Te)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ]),
                          e(O, {
                            label: a(n)("inactiveAddressLabel")
                          }, {
                            default: t(() => [
                              e(k, {
                                checked: l.value.enableInactiveAddressAutoCleanup,
                                "onUpdate:checked": i[12] || (i[12] = (C) => l.value.enableInactiveAddressAutoCleanup = C)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(v, {
                                value: l.value.cleanInactiveAddressDays,
                                "onUpdate:value": i[13] || (i[13] = (C) => l.value.cleanInactiveAddressDays = C),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(S, {
                                onClick: i[14] || (i[14] = (C) => b("inactiveAddress", l.value.cleanInactiveAddressDays))
                              }, {
                                icon: t(() => [
                                  e(u, {
                                    component: a(Te)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ]),
                          e(O, {
                            label: a(n)("unboundAddressLabel")
                          }, {
                            default: t(() => [
                              e(k, {
                                checked: l.value.enableUnboundAddressAutoCleanup,
                                "onUpdate:checked": i[15] || (i[15] = (C) => l.value.enableUnboundAddressAutoCleanup = C)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(v, {
                                value: l.value.cleanUnboundAddressDays,
                                "onUpdate:value": i[16] || (i[16] = (C) => l.value.cleanUnboundAddressDays = C),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(S, {
                                onClick: i[17] || (i[17] = (C) => b("unboundAddress", l.value.cleanUnboundAddressDays))
                              }, {
                                icon: t(() => [
                                  e(u, {
                                    component: a(Te)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ]),
                          e(O, {
                            label: a(n)("emptyAddressLabel")
                          }, {
                            default: t(() => [
                              e(k, {
                                checked: l.value.enableEmptyAddressAutoCleanup,
                                "onUpdate:checked": i[18] || (i[18] = (C) => l.value.enableEmptyAddressAutoCleanup = C)
                              }, {
                                default: t(() => [
                                  m(o(a(n)("autoCleanup")), 1)
                                ]),
                                _: 1
                              }, 8, [
                                "checked"
                              ]),
                              e(v, {
                                value: l.value.cleanEmptyAddressDays,
                                "onUpdate:value": i[19] || (i[19] = (C) => l.value.cleanEmptyAddressDays = C),
                                placeholder: a(n)("tip")
                              }, null, 8, [
                                "value",
                                "placeholder"
                              ]),
                              e(S, {
                                onClick: i[20] || (i[20] = (C) => b("emptyAddress", l.value.cleanEmptyAddressDays))
                              }, {
                                icon: t(() => [
                                  e(u, {
                                    component: a(Te)
                                  }, null, 8, [
                                    "component"
                                  ])
                                ]),
                                default: t(() => [
                                  m(" " + o(a(n)("cleanupNow")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "label"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "model"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "tab"
                  ]),
                  e(D, {
                    name: "custom_sql",
                    tab: a(n)("customSqlCleanup")
                  }, {
                    default: t(() => [
                      e(w, {
                        "show-icon": false,
                        bordered: false,
                        type: "info",
                        style: {
                          "margin-bottom": "16px"
                        }
                      }, {
                        default: t(() => [
                          M("span", null, o(a(n)("customSqlTip")), 1)
                        ]),
                        _: 1
                      }),
                      e(N, {
                        vertical: ""
                      }, {
                        default: t(() => [
                          (E(true), Q(dt, null, $t(l.value.customSqlCleanupList, (C, J) => (E(), X(W, {
                            key: C.id,
                            size: "small"
                          }, {
                            default: t(() => [
                              e(N, {
                                vertical: ""
                              }, {
                                default: t(() => [
                                  e(N, {
                                    align: "center"
                                  }, {
                                    default: t(() => [
                                      e(k, {
                                        checked: C.enabled,
                                        "onUpdate:checked": (V) => C.enabled = V
                                      }, {
                                        default: t(() => [
                                          m(o(a(n)("autoCleanup")), 1)
                                        ]),
                                        _: 1
                                      }, 8, [
                                        "checked",
                                        "onUpdate:checked"
                                      ]),
                                      e(x, {
                                        value: C.name,
                                        "onUpdate:value": (V) => C.name = V,
                                        placeholder: a(n)("sqlNamePlaceholder"),
                                        style: {
                                          width: "200px"
                                        }
                                      }, null, 8, [
                                        "value",
                                        "onUpdate:value",
                                        "placeholder"
                                      ]),
                                      e(S, {
                                        onClick: (V) => s(J),
                                        type: "error",
                                        quaternary: ""
                                      }, {
                                        icon: t(() => [
                                          e(u, {
                                            component: a(Pa)
                                          }, null, 8, [
                                            "component"
                                          ])
                                        ]),
                                        default: t(() => [
                                          m(" " + o(a(n)("deleteCustomSql")), 1)
                                        ]),
                                        _: 1
                                      }, 8, [
                                        "onClick"
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  e(x, {
                                    value: C.sql,
                                    "onUpdate:value": (V) => C.sql = V,
                                    type: "textarea",
                                    placeholder: a(n)("sqlPlaceholder"),
                                    autosize: {
                                      minRows: 2
                                    },
                                    class: "sql-input"
                                  }, null, 8, [
                                    "value",
                                    "onUpdate:value",
                                    "placeholder"
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024))), 128)),
                          e(S, {
                            onClick: p
                          }, {
                            icon: t(() => [
                              e(u, {
                                component: a(Ia)
                              }, null, 8, [
                                "component"
                              ])
                            ]),
                            default: t(() => [
                              m(" " + o(a(n)("addCustomSql")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "tab"
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  Il = ae(Ll, [
    [
      "__scopeId",
      "data-v-2f016879"
    ]
  ]);
  Ml = {
    class: "center"
  };
  Tl = {
    __name: "DatabaseManager",
    setup(_) {
      const c = se(), r = f({
        need_initialization: false,
        need_migration: false,
        current_db_version: "",
        code_db_version: ""
      }), { t: l } = le({
        messages: {
          en: {
            need_initialization_tip: "Database initialization is required. Please initialize the database.",
            need_migration_tip: "Database migration is required. Please migrate the database.",
            current_db_version: "Current DB Version",
            code_db_version: "Code Needed DB Version",
            init: "Initialize Database",
            migration: "Migrate Database",
            initializationSuccess: "Database initialized successfully",
            migrationSuccess: "Database migrated successfully"
          },
          zh: {
            need_initialization_tip: "\u9700\u8981\u521D\u59CB\u5316\u6570\u636E\u5E93\uFF0C\u8BF7\u521D\u59CB\u5316\u6570\u636E\u5E93",
            need_migration_tip: "\u9700\u8981\u8FC1\u79FB\u6570\u636E\u5E93\uFF0C\u8BF7\u8FC1\u79FB\u6570\u636E\u5E93",
            current_db_version: "\u5F53\u524D\u6570\u636E\u5E93\u7248\u672C",
            code_db_version: "\u9700\u8981\u7684\u6570\u636E\u5E93\u7248\u672C",
            init: "\u521D\u59CB\u5316\u6570\u636E\u5E93",
            migration: "\u5347\u7EA7\u6570\u636E\u5E93 Schema",
            initializationSuccess: "\u6570\u636E\u5E93\u521D\u59CB\u5316\u6210\u529F",
            migrationSuccess: "\u6570\u636E\u5E93\u5347\u7EA7\u6210\u529F"
          }
        }
      }), n = async () => {
        try {
          const s = await T.fetch("/admin/db_version");
          s && Object.assign(r.value, s);
        } catch (s) {
          c.error(s.message || "error");
        }
      }, b = async () => {
        try {
          await T.fetch("/admin/db_initialize", {
            method: "POST"
          }), await n(), c.success(l("initializationSuccess"));
        } catch (s) {
          c.error(s.message || "error");
        }
      }, p = async () => {
        try {
          await T.fetch("/admin/db_migration", {
            method: "POST"
          }), await n(), c.success(l("migrationSuccess"));
        } catch (s) {
          c.error(s.message || "error");
        }
      };
      return oe(async () => {
        await n();
      }), (s, y) => {
        const g = z, d = Ue, i = pe;
        return E(), Q("div", Ml, [
          e(i, {
            bordered: false,
            embedded: ""
          }, {
            default: t(() => [
              r.value.need_initialization ? (E(), X(d, {
                key: 0,
                type: "warning",
                "show-icon": false,
                bordered: false
              }, {
                default: t(() => [
                  M("span", null, o(a(l)("need_initialization_tip")), 1),
                  e(g, {
                    onClick: b,
                    type: "primary",
                    secondary: "",
                    block: "",
                    loading: s.loading
                  }, {
                    default: t(() => [
                      m(o(a(l)("init")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "loading"
                  ])
                ]),
                _: 1
              })) : te("", true),
              r.value.need_migration ? (E(), X(d, {
                key: 1,
                type: "warning",
                "show-icon": false,
                bordered: false
              }, {
                default: t(() => [
                  M("span", null, o(a(l)("need_migration_tip")), 1),
                  e(g, {
                    onClick: p,
                    type: "primary",
                    secondary: "",
                    block: "",
                    loading: s.loading
                  }, {
                    default: t(() => [
                      m(o(a(l)("migration")), 1)
                    ]),
                    _: 1
                  }, 8, [
                    "loading"
                  ])
                ]),
                _: 1
              })) : te("", true),
              e(d, {
                type: "info",
                "show-icon": false,
                bordered: false
              }, {
                default: t(() => [
                  M("span", null, o(a(l)("current_db_version")) + ": " + o(r.value.current_db_version || "unknown") + ", " + o(a(l)("code_db_version")) + ": " + o(r.value.code_db_version), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  At = ae(Tl, [
    [
      "__scopeId",
      "data-v-6eef5c21"
    ]
  ]);
  Pl = {
    class: "center"
  };
  El = {
    key: 0
  };
  Dl = de({
    __name: "Telegram",
    setup(_) {
      const c = se(), { t: r } = le({
        messages: {
          en: {
            init: "Init",
            successTip: "Success",
            status: "Check Status",
            enableTelegramAllowList: "Enable Telegram Allow List(Manually input Chat ID)",
            enable: "Enable",
            telegramAllowList: "Telegram Allow List(Manually input telegram Chat ID)",
            manualInputPrompt: "Type and press Enter to add",
            save: "Save",
            miniAppUrl: "Telegram Mini App URL",
            enableGlobalMailPush: "Enable Global Mail Push(Manually input telegram Chat ID)",
            globalMailPushList: "Global Mail Push Chat ID List",
            globalMailPushListTip: "Support chat_id of private chat/group/channel. You can send a message to your bot, then visit this link to see chat_id, https://api.telegram.org/bot<Replace with your BOT TOKEN>/getUpdates"
          },
          zh: {
            init: "\u521D\u59CB\u5316",
            successTip: "\u6210\u529F",
            status: "\u67E5\u770B\u72B6\u6001",
            enableTelegramAllowList: "\u542F\u7528 Telegram \u767D\u540D\u5355(\u624B\u52A8\u8F93\u5165 Chat ID, \u56DE\u8F66\u589E\u52A0)",
            enable: "\u542F\u7528",
            telegramAllowList: "Telegram \u767D\u540D\u5355(\u624B\u52A8\u8F93\u5165 Chat ID, \u56DE\u8F66\u589E\u52A0)",
            manualInputPrompt: "\u8F93\u5165\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            save: "\u4FDD\u5B58",
            miniAppUrl: "\u7535\u62A5\u5C0F\u7A0B\u5E8F URL(\u8BF7\u8F93\u5165\u4F60\u90E8\u7F72\u7684\u7535\u62A5\u5C0F\u7A0B\u5E8F\u7F51\u9875\u5730\u5740)",
            enableGlobalMailPush: "\u542F\u7528\u5168\u5C40\u90AE\u4EF6\u63A8\u9001(\u624B\u52A8\u8F93\u5165\u90AE\u7BB1\u7BA1\u7406\u5458\u7684 telegram Chat ID, \u56DE\u8F66\u589E\u52A0)",
            globalMailPushList: "\u5168\u5C40\u90AE\u4EF6\u63A8\u9001 Chat ID \u5217\u8868",
            globalMailPushListTip: "\u652F\u6301\u5BF9\u8BDD/\u7FA4\u7EC4/\u9891\u9053\u7684 Chat ID, \u60A8\u53EF\u4EE5\u53D1\u9001\u4E00\u6761\u6D88\u606F\u7ED9\u60A8\u7684\u673A\u5668\u4EBA\uFF0C\u7136\u540E\u8BBF\u95EE\u6B64\u94FE\u63A5\u6765\u67E5\u770B chat_id, https://api.telegram.org/bot<\u8FD9\u91CC\u66FF\u6362\u6210\u60A8\u7684 BOT TOKEN>/getUpdates"
          }
        }
      }), l = f({
        fetched: false
      }), n = async () => {
        try {
          const d = await T.fetch("/admin/telegram/status");
          Object.assign(l.value, d), l.value.fetched = true;
        } catch (d) {
          c.error(d.message || "error");
        }
      }, b = async () => {
        try {
          await T.fetch("/admin/telegram/init", {
            method: "POST"
          }), c.success(r("successTip"));
        } catch (d) {
          c.error(d.message || "error");
        }
      };
      class p {
        constructor(i, w, S, I, k) {
          __publicField(this, "enableAllowList");
          __publicField(this, "allowList");
          __publicField(this, "miniAppUrl");
          __publicField(this, "enableGlobalMailPush");
          __publicField(this, "globalMailPushList");
          this.enableAllowList = i, this.allowList = w, this.miniAppUrl = S, this.enableGlobalMailPush = I, this.globalMailPushList = k;
        }
      }
      const s = f(new p(false, [], "", false, [])), y = async () => {
        try {
          const d = await T.fetch("/admin/telegram/settings");
          Object.assign(s.value, d);
        } catch (d) {
          c.error(d.message || "error");
        }
      }, g = async () => {
        try {
          await T.fetch("/admin/telegram/settings", {
            method: "POST",
            body: JSON.stringify(s.value)
          }), c.success(r("successTip"));
        } catch (d) {
          c.error(d.message || "error");
        }
      };
      return oe(async () => {
        await y();
      }), (d, i) => {
        const w = z, S = Ee, I = Ke, k = Le, v = ue, u = Ce, O = ye, K = me, D = pe;
        return E(), Q("div", Pl, [
          e(D, {
            bordered: false,
            embedded: "",
            style: {
              "max-width": "800px",
              overflow: "auto"
            }
          }, {
            default: t(() => [
              e(S, {
                justify: "end"
              }, {
                default: t(() => [
                  e(w, {
                    onClick: n,
                    secondary: ""
                  }, {
                    default: t(() => [
                      m(o(a(r)("status")), 1)
                    ]),
                    _: 1
                  }),
                  e(w, {
                    onClick: b,
                    type: "primary"
                  }, {
                    default: t(() => [
                      m(o(a(r)("init")), 1)
                    ]),
                    _: 1
                  }),
                  e(w, {
                    onClick: g,
                    type: "primary"
                  }, {
                    default: t(() => [
                      m(o(a(r)("save")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(D, {
                bordered: false,
                embedded: ""
              }, {
                default: t(() => [
                  e(O, {
                    label: a(r)("enableTelegramAllowList")
                  }, {
                    default: t(() => [
                      e(u, null, {
                        default: t(() => [
                          e(I, {
                            checked: s.value.enableAllowList,
                            "onUpdate:checked": i[0] || (i[0] = (x) => s.value.enableAllowList = x),
                            style: {
                              width: "20%"
                            }
                          }, {
                            default: t(() => [
                              m(o(a(r)("enable")), 1)
                            ]),
                            _: 1
                          }, 8, [
                            "checked"
                          ]),
                          e(v, {
                            value: s.value.allowList,
                            "onUpdate:value": i[1] || (i[1] = (x) => s.value.allowList = x),
                            filterable: "",
                            multiple: "",
                            tag: "",
                            style: {
                              width: "80%"
                            },
                            placeholder: a(r)("telegramAllowList")
                          }, {
                            empty: t(() => [
                              e(k, {
                                depth: "3"
                              }, {
                                default: t(() => [
                                  m(o(a(r)("manualInputPrompt")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "value",
                            "placeholder"
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  i[5] || (i[5] = M("br", null, null, -1)),
                  e(O, {
                    label: a(r)("enableGlobalMailPush")
                  }, {
                    feedback: t(() => [
                      e(k, {
                        depth: "3"
                      }, {
                        default: t(() => [
                          m(o(a(r)("globalMailPushListTip")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    default: t(() => [
                      e(u, null, {
                        default: t(() => [
                          e(I, {
                            checked: s.value.enableGlobalMailPush,
                            "onUpdate:checked": i[2] || (i[2] = (x) => s.value.enableGlobalMailPush = x),
                            style: {
                              width: "20%"
                            }
                          }, {
                            default: t(() => [
                              m(o(a(r)("enable")), 1)
                            ]),
                            _: 1
                          }, 8, [
                            "checked"
                          ]),
                          e(v, {
                            value: s.value.globalMailPushList,
                            "onUpdate:value": i[3] || (i[3] = (x) => s.value.globalMailPushList = x),
                            filterable: "",
                            multiple: "",
                            tag: "",
                            style: {
                              width: "80%"
                            },
                            placeholder: a(r)("globalMailPushList")
                          }, {
                            empty: t(() => [
                              e(k, {
                                depth: "3"
                              }, {
                                default: t(() => [
                                  m(o(a(r)("manualInputPrompt")), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, [
                            "value",
                            "placeholder"
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  i[6] || (i[6] = M("br", null, null, -1)),
                  e(O, {
                    label: a(r)("miniAppUrl")
                  }, {
                    default: t(() => [
                      e(K, {
                        value: s.value.miniAppUrl,
                        "onUpdate:value": i[4] || (i[4] = (x) => s.value.miniAppUrl = x)
                      }, null, 8, [
                        "value"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ])
                ]),
                _: 1
              }),
              l.value.fetched ? (E(), Q("pre", El, o(JSON.stringify(l.value, null, 2)), 1)) : te("", true)
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  Rl = ae(Dl, [
    [
      "__scopeId",
      "data-v-008f01c5"
    ]
  ]);
  $l = {
    class: "center"
  };
  Bl = de({
    __name: "Webhook",
    setup(_) {
      const c = se(), { t: r } = le({
        messages: {
          en: {
            successTip: "Success",
            enableAllowList: "Enable Allow List (Restrict webhook access to specific users)",
            webhookAllowList: "Webhook Allow List(Enter the mail address that is allowed to use webhook and enter)",
            manualInputPrompt: "Type and press Enter to add",
            save: "Save",
            notEnabled: "Webhook is not enabled"
          },
          zh: {
            successTip: "\u6210\u529F",
            enableAllowList: "\u542F\u7528\u767D\u540D\u5355 (\u9650\u5236 webhook \u8BBF\u95EE\u6743\u9650\uFF0C\u53EA\u6709\u767D\u540D\u5355\u4E2D\u7684\u7528\u6237\u53EF\u4EE5\u4F7F\u7528)",
            webhookAllowList: "Webhook \u767D\u540D\u5355(\u8BF7\u8F93\u5165\u5141\u8BB8\u4F7F\u7528webhook \u7684\u90AE\u7BB1\u5730\u5740, \u56DE\u8F66\u589E\u52A0)",
            manualInputPrompt: "\u8F93\u5165\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            save: "\u4FDD\u5B58",
            notEnabled: "Webhook \u672A\u5F00\u542F"
          }
        }
      });
      class l {
        constructor(d, i) {
          __publicField(this, "enableAllowList");
          __publicField(this, "allowList");
          this.enableAllowList = d, this.allowList = i;
        }
      }
      const n = f(new l(false, [])), b = f(false), p = f(""), s = async () => {
        try {
          const g = await T.fetch("/admin/webhook/settings");
          Object.assign(n.value, g), b.value = true;
        } catch (g) {
          p.value = g.message || "error";
        }
      }, y = async () => {
        try {
          await T.fetch("/admin/webhook/settings", {
            method: "POST",
            body: JSON.stringify(n.value)
          }), c.success(r("successTip"));
        } catch (g) {
          c.error(g.message || "error");
        }
      };
      return oe(async () => {
        await s();
      }), (g, d) => {
        const i = z, w = Ee, S = Ve, I = ye, k = Le, v = ue, u = pe, O = ua;
        return E(), Q("div", $l, [
          b.value ? (E(), X(u, {
            key: 0,
            bordered: false,
            embedded: "",
            style: {
              "max-width": "800px",
              overflow: "auto"
            }
          }, {
            default: t(() => [
              e(w, {
                justify: "end"
              }, {
                default: t(() => [
                  e(i, {
                    onClick: y,
                    type: "primary"
                  }, {
                    default: t(() => [
                      m(o(a(r)("save")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(I, {
                label: a(r)("enableAllowList")
              }, {
                default: t(() => [
                  e(S, {
                    value: n.value.enableAllowList,
                    "onUpdate:value": d[0] || (d[0] = (K) => n.value.enableAllowList = K),
                    round: false
                  }, null, 8, [
                    "value"
                  ])
                ]),
                _: 1
              }, 8, [
                "label"
              ]),
              e(I, {
                label: a(r)("webhookAllowList")
              }, {
                default: t(() => [
                  e(v, {
                    value: n.value.allowList,
                    "onUpdate:value": d[1] || (d[1] = (K) => n.value.allowList = K),
                    filterable: "",
                    multiple: "",
                    tag: "",
                    placeholder: a(r)("webhookAllowList")
                  }, {
                    empty: t(() => [
                      e(k, {
                        depth: "3"
                      }, {
                        default: t(() => [
                          m(o(a(r)("manualInputPrompt")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "value",
                    "placeholder"
                  ])
                ]),
                _: 1
              }, 8, [
                "label"
              ])
            ]),
            _: 1
          })) : (E(), X(O, {
            key: 1,
            status: "404",
            title: a(r)("notEnabled"),
            description: p.value
          }, null, 8, [
            "title",
            "description"
          ]))
        ]);
      };
    }
  });
  zl = ae(Bl, [
    [
      "__scopeId",
      "data-v-6baca40b"
    ]
  ]);
  Ol = de({
    __name: "MailWebhook",
    setup(_) {
      const c = async () => await T.fetch("/admin/mail_webhook/settings"), r = async (n) => {
        await T.fetch("/admin/mail_webhook/settings", {
          method: "POST",
          body: JSON.stringify(n)
        });
      }, l = async (n) => {
        await T.fetch("/admin/mail_webhook/test", {
          method: "POST",
          body: JSON.stringify(n)
        });
      };
      return (n, b) => (E(), X(da, {
        fetchData: c,
        saveSettings: r,
        testSettings: l
      }));
    }
  });
  Nl = {
    class: "center"
  };
  ql = {
    __name: "WorkerConfig",
    setup(_) {
      const { loading: c } = ce(), r = se(), l = f({}), n = async () => {
        try {
          const b = await T.fetch("/admin/worker/configs");
          Object.assign(l.value, b);
        } catch (b) {
          r.error(b.message || "error");
        }
      };
      return oe(async () => {
        await n();
      }), (b, p) => {
        const s = pe;
        return E(), Q("div", Nl, [
          e(s, {
            bordered: false,
            embedded: "",
            style: {
              "max-width": "800px",
              overflow: "auto"
            }
          }, {
            default: t(() => [
              M("pre", null, o(JSON.stringify(l.value, null, 2)), 1)
            ]),
            _: 1
          })
        ]);
      };
    }
  };
  St = ae(ql, [
    [
      "__scopeId",
      "data-v-92d764b2"
    ]
  ]);
  Vl = {
    class: "center"
  };
  Fl = {
    style: {
      "line-height": "1.8"
    }
  };
  jl = {
    __name: "IpBlacklistSettings",
    setup(_) {
      const { loading: c } = ce(), r = se(), { t: l } = le({
        messages: {
          en: {
            title: "IP Blacklist Settings",
            manualInputPrompt: "Type pattern and press Enter to add",
            save: "Save",
            successTip: "Save Success",
            enable_ip_blacklist: "Enable IP Blacklist",
            enable_tip: "Block IPs matching blacklist patterns from accessing rate-limited APIs",
            ip_blacklist: "IP Blacklist Patterns",
            ip_blacklist_placeholder: "Enter pattern (e.g., 192.168.1 or ^10\\.0\\.0\\.5$)",
            asn_blacklist: "ASN Organization Blacklist",
            asn_blacklist_placeholder: "Enter ASN organization (e.g., Google, Amazon)",
            fingerprint_blacklist: "Browser Fingerprint Blacklist",
            fingerprint_blacklist_placeholder: "Enter fingerprint ID (e.g., a1b2c3d4e5f6g7h8)",
            tip_ip: 'IP Blacklist: Supports text matching (e.g., "192.168.1") or regex (e.g., "^10\\.0\\.0\\.5$").',
            tip_asn: "ASN Organization: Block by ISP/provider. Case-insensitive text matching or regex.",
            tip_fingerprint: "Browser Fingerprint: Block by browser fingerprint. Supports exact matching or regex patterns.",
            tip_daily_limit: "Daily Limit: Restrict the maximum number of requests per IP address per day (1-1000000).",
            tip_scope: "Applies to: Create Address, Send Mail, External Send Mail API, User Registration, Verify Code",
            enable_daily_limit: "Enable Daily Request Limit",
            enable_daily_limit_tip: "Limit the number of API requests per IP address per day",
            daily_request_limit: "Daily Request Limit",
            daily_request_limit_placeholder: "Enter limit (e.g., 1000)"
          },
          zh: {
            title: "IP \u9ED1\u540D\u5355\u8BBE\u7F6E",
            manualInputPrompt: "\u8F93\u5165\u5339\u914D\u6A21\u5F0F\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            save: "\u4FDD\u5B58",
            successTip: "\u4FDD\u5B58\u6210\u529F",
            enable_ip_blacklist: "\u542F\u7528 IP \u9ED1\u540D\u5355",
            enable_tip: "\u963B\u6B62\u5339\u914D\u9ED1\u540D\u5355\u7684 IP \u8BBF\u95EE\u9650\u6D41 API",
            ip_blacklist: "IP \u9ED1\u540D\u5355\u5339\u914D\u6A21\u5F0F",
            ip_blacklist_placeholder: "\u8F93\u5165\u5339\u914D\u6A21\u5F0F\uFF08\u4F8B\u5982\uFF1A192.168.1 \u6216 ^10\\.0\\.0\\.5$\uFF09",
            asn_blacklist: "ASN \u7EC4\u7EC7\uFF08\u8FD0\u8425\u5546\uFF09\u9ED1\u540D\u5355",
            asn_blacklist_placeholder: "\u8F93\u5165 ASN \u7EC4\u7EC7\u540D\u79F0\uFF08\u4F8B\u5982\uFF1AGoogle, Amazon\uFF09",
            fingerprint_blacklist: "\u6D4F\u89C8\u5668\u6307\u7EB9\u9ED1\u540D\u5355",
            fingerprint_blacklist_placeholder: "\u8F93\u5165\u6307\u7EB9 ID\uFF08\u4F8B\u5982\uFF1Aa1b2c3d4e5f6g7h8\uFF09",
            tip_ip: 'IP \u9ED1\u540D\u5355\uFF1A\u652F\u6301\u6587\u672C\u5339\u914D\uFF08\u5982 "192.168.1"\uFF09\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\uFF08\u5982 "^10\\.0\\.0\\.5$"\uFF09\u3002',
            tip_asn: "ASN \u7EC4\u7EC7\uFF1A\u6839\u636E\u8FD0\u8425\u5546/ISP \u62C9\u9ED1\u3002\u652F\u6301\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6587\u672C\u5339\u914D\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u3002",
            tip_fingerprint: "\u6D4F\u89C8\u5668\u6307\u7EB9\uFF1A\u6839\u636E\u6D4F\u89C8\u5668\u6307\u7EB9\u62C9\u9ED1\u3002\u652F\u6301\u5B8C\u5168\u5339\u914D\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\u3002",
            tip_daily_limit: "\u6BCF\u65E5\u9650\u6D41\uFF1A\u9650\u5236\u5355\u4E2A IP \u5730\u5740\u6BCF\u5929\u6700\u591A\u8BF7\u6C42\u6B21\u6570\uFF081-1000000\uFF09\u3002",
            tip_scope: "\u4F5C\u7528\u8303\u56F4\uFF1A\u521B\u5EFA\u90AE\u7BB1\u5730\u5740\u3001\u53D1\u9001\u90AE\u4EF6\u3001\u5916\u90E8\u53D1\u9001\u90AE\u4EF6 API\u3001\u7528\u6237\u6CE8\u518C\u3001\u9A8C\u8BC1\u7801\u9A8C\u8BC1",
            enable_daily_limit: "\u542F\u7528\u6BCF\u65E5\u8BF7\u6C42\u9650\u6D41",
            enable_daily_limit_tip: "\u9650\u5236\u6BCF\u4E2A IP \u5730\u5740\u6BCF\u5929\u7684 API \u8BF7\u6C42\u6B21\u6570",
            daily_request_limit: "\u6BCF\u65E5\u8BF7\u6C42\u6B21\u6570\u4E0A\u9650",
            daily_request_limit_placeholder: "\u8F93\u5165\u9650\u5236\u6B21\u6570\uFF08\u4F8B\u5982\uFF1A1000\uFF09"
          }
        }
      }), n = f(false), b = f([]), p = f([]), s = f([]), y = f(false), g = f(1e3), d = async () => {
        try {
          c.value = true;
          const w = await T.fetch("/admin/ip_blacklist/settings");
          n.value = w.enabled || false, b.value = w.blacklist || [], p.value = w.asnBlacklist || [], s.value = w.fingerprintBlacklist || [], y.value = w.enableDailyLimit || false, g.value = w.dailyRequestLimit || 1e3;
        } catch (w) {
          r.error(w.message || "error");
        } finally {
          c.value = false;
        }
      }, i = async () => {
        try {
          c.value = true, await T.fetch("/admin/ip_blacklist/settings", {
            method: "POST",
            body: JSON.stringify({
              enabled: n.value,
              blacklist: b.value || [],
              asnBlacklist: p.value || [],
              fingerprintBlacklist: s.value || [],
              enableDailyLimit: y.value,
              dailyRequestLimit: g.value
            })
          }), r.success(l("successTip"));
        } catch (w) {
          r.error(w.message || "error");
        } finally {
          c.value = false;
        }
      };
      return oe(async () => {
        await d();
      }), (w, S) => {
        const I = z, k = Ue, v = Ve, u = Le, O = ye, K = ue, D = ct, x = Je, N = qe, W = pe;
        return E(), Q("div", Vl, [
          e(W, {
            title: a(l)("title"),
            bordered: false,
            embedded: "",
            style: {
              "max-width": "800px"
            }
          }, {
            "header-extra": t(() => [
              e(I, {
                onClick: i,
                type: "primary",
                loading: a(c)
              }, {
                default: t(() => [
                  m(o(a(l)("save")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              e(N, {
                vertical: "",
                size: 20
              }, {
                default: t(() => [
                  e(k, {
                    "show-icon": false,
                    bordered: false,
                    type: "info"
                  }, {
                    default: t(() => [
                      M("div", Fl, [
                        M("div", null, [
                          M("strong", null, o(a(l)("tip_scope")), 1)
                        ]),
                        M("div", null, "\u2022 " + o(a(l)("tip_ip")), 1),
                        M("div", null, "\u2022 " + o(a(l)("tip_asn")), 1),
                        M("div", null, "\u2022 " + o(a(l)("tip_fingerprint")), 1),
                        M("div", null, "\u2022 " + o(a(l)("tip_daily_limit")), 1)
                      ])
                    ]),
                    _: 1
                  }),
                  e(O, {
                    label: a(l)("enable_ip_blacklist")
                  }, {
                    default: t(() => [
                      e(v, {
                        value: n.value,
                        "onUpdate:value": S[0] || (S[0] = (q) => n.value = q),
                        round: false
                      }, null, 8, [
                        "value"
                      ]),
                      e(u, {
                        depth: "3",
                        style: {
                          "margin-left": "10px",
                          "font-size": "12px"
                        }
                      }, {
                        default: t(() => [
                          m(o(a(l)("enable_tip")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(O, {
                    label: a(l)("ip_blacklist")
                  }, {
                    default: t(() => [
                      e(K, {
                        value: b.value,
                        "onUpdate:value": S[1] || (S[1] = (q) => b.value = q),
                        filterable: "",
                        multiple: "",
                        tag: "",
                        placeholder: a(l)("ip_blacklist_placeholder"),
                        disabled: !n.value
                      }, {
                        empty: t(() => [
                          e(u, {
                            depth: "3"
                          }, {
                            default: t(() => [
                              m(o(a(l)("manualInputPrompt")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, [
                        "value",
                        "placeholder",
                        "disabled"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(O, {
                    label: a(l)("asn_blacklist")
                  }, {
                    default: t(() => [
                      e(K, {
                        value: p.value,
                        "onUpdate:value": S[2] || (S[2] = (q) => p.value = q),
                        filterable: "",
                        multiple: "",
                        tag: "",
                        placeholder: a(l)("asn_blacklist_placeholder"),
                        disabled: !n.value
                      }, {
                        empty: t(() => [
                          e(u, {
                            depth: "3"
                          }, {
                            default: t(() => [
                              m(o(a(l)("manualInputPrompt")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, [
                        "value",
                        "placeholder",
                        "disabled"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(O, {
                    label: a(l)("fingerprint_blacklist")
                  }, {
                    default: t(() => [
                      e(K, {
                        value: s.value,
                        "onUpdate:value": S[3] || (S[3] = (q) => s.value = q),
                        filterable: "",
                        multiple: "",
                        tag: "",
                        placeholder: a(l)("fingerprint_blacklist_placeholder"),
                        disabled: !n.value
                      }, {
                        empty: t(() => [
                          e(u, {
                            depth: "3"
                          }, {
                            default: t(() => [
                              m(o(a(l)("manualInputPrompt")), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, [
                        "value",
                        "placeholder",
                        "disabled"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(D),
                  e(O, {
                    label: a(l)("enable_daily_limit")
                  }, {
                    default: t(() => [
                      e(v, {
                        value: y.value,
                        "onUpdate:value": S[4] || (S[4] = (q) => y.value = q),
                        round: false
                      }, null, 8, [
                        "value"
                      ]),
                      e(u, {
                        depth: "3",
                        style: {
                          "margin-left": "10px",
                          "font-size": "12px"
                        }
                      }, {
                        default: t(() => [
                          m(o(a(l)("enable_daily_limit_tip")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ]),
                  e(O, {
                    label: a(l)("daily_request_limit")
                  }, {
                    default: t(() => [
                      e(x, {
                        value: g.value,
                        "onUpdate:value": S[5] || (S[5] = (q) => g.value = q),
                        min: 1,
                        max: 1e6,
                        placeholder: a(l)("daily_request_limit_placeholder"),
                        disabled: !y.value,
                        style: {
                          width: "100%"
                        }
                      }, null, 8, [
                        "value",
                        "placeholder",
                        "disabled"
                      ])
                    ]),
                    _: 1
                  }, 8, [
                    "label"
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, [
            "title"
          ])
        ]);
      };
    }
  };
  Wl = ae(jl, [
    [
      "__scopeId",
      "data-v-6cc70158"
    ]
  ]);
  Hl = {
    class: "center"
  };
  Kl = {
    key: 1
  };
  Gl = de({
    __name: "AiExtractSettings",
    setup(_) {
      const c = se(), { t: r } = le({
        messages: {
          en: {
            title: "AI Email Extraction Settings",
            successTip: "Success",
            save: "Save",
            enableAllowList: "Enable Address Allowlist",
            enableAllowListTip: "When enabled, AI extraction will only process emails sent to addresses in the allowlist",
            allowList: "Address Allowlist (Enter address and press Enter, wildcards supported)",
            allowListTip: "Wildcard * matches any characters, e.g. *{'@'}example.com matches all addresses under example.com domain",
            manualInputPrompt: "Type and press Enter to add",
            disabledTip: "When disabled, AI extraction will process all email addresses"
          },
          zh: {
            title: "AI \u90AE\u4EF6\u63D0\u53D6\u8BBE\u7F6E",
            successTip: "\u6210\u529F",
            save: "\u4FDD\u5B58",
            enableAllowList: "\u542F\u7528\u5730\u5740\u767D\u540D\u5355",
            enableAllowListTip: "\u542F\u7528\u540E\uFF0CAI \u63D0\u53D6\u529F\u80FD\u4EC5\u5BF9\u767D\u540D\u5355\u4E2D\u7684\u90AE\u7BB1\u5730\u5740\u751F\u6548",
            allowList: "\u5730\u5740\u767D\u540D\u5355 (\u8BF7\u8F93\u5165\u5730\u5740\u5E76\u56DE\u8F66\uFF0C\u652F\u6301\u901A\u914D\u7B26)",
            allowListTip: "\u901A\u914D\u7B26 * \u53EF\u5339\u914D\u4EFB\u610F\u5B57\u7B26\uFF0C\u5982 *{'@'}example.com \u53EF\u5339\u914D example.com \u57DF\u540D\u4E0B\u7684\u6240\u6709\u5730\u5740",
            manualInputPrompt: "\u8F93\u5165\u540E\u6309\u56DE\u8F66\u952E\u6DFB\u52A0",
            disabledTip: "\u672A\u542F\u7528\u65F6\uFF0C\u6240\u6709\u90AE\u7BB1\u5730\u5740\u90FD\u53EF\u4F7F\u7528 AI \u63D0\u53D6\u529F\u80FD"
          }
        }
      }), l = f({
        enableAllowList: false,
        allowList: []
      }), n = async () => {
        try {
          const p = await T.fetch("/admin/ai_extract/settings");
          Object.assign(l.value, p);
        } catch (p) {
          c.error(p.message || "error");
        }
      }, b = async () => {
        try {
          await T.fetch("/admin/ai_extract/settings", {
            method: "POST",
            body: JSON.stringify(l.value)
          }), c.success(r("successTip"));
        } catch (p) {
          c.error(p.message || "error");
        }
      };
      return oe(async () => {
        await n();
      }), (p, s) => {
        const y = z, g = Ee, d = Ve, i = ye, w = Ue, S = Le, I = ue, k = pe;
        return E(), Q("div", Hl, [
          e(k, {
            title: a(r)("title"),
            bordered: false,
            embedded: "",
            style: {
              "max-width": "800px",
              overflow: "auto"
            }
          }, {
            default: t(() => [
              e(g, {
                justify: "end"
              }, {
                default: t(() => [
                  e(y, {
                    onClick: b,
                    type: "primary"
                  }, {
                    default: t(() => [
                      m(o(a(r)("save")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              e(i, {
                label: a(r)("enableAllowList")
              }, {
                default: t(() => [
                  e(d, {
                    value: l.value.enableAllowList,
                    "onUpdate:value": s[0] || (s[0] = (v) => l.value.enableAllowList = v),
                    round: false
                  }, null, 8, [
                    "value"
                  ])
                ]),
                _: 1
              }, 8, [
                "label"
              ]),
              l.value.enableAllowList ? te("", true) : (E(), X(w, {
                key: 0,
                type: "info",
                style: {
                  "margin-bottom": "16px"
                }
              }, {
                default: t(() => [
                  m(o(a(r)("disabledTip")), 1)
                ]),
                _: 1
              })),
              l.value.enableAllowList ? (E(), Q("div", Kl, [
                e(w, {
                  type: "warning",
                  style: {
                    "margin-bottom": "16px"
                  }
                }, {
                  default: t(() => [
                    m(o(a(r)("enableAllowListTip")), 1)
                  ]),
                  _: 1
                }),
                e(i, {
                  label: a(r)("allowList")
                }, {
                  default: t(() => [
                    e(I, {
                      value: l.value.allowList,
                      "onUpdate:value": s[1] || (s[1] = (v) => l.value.allowList = v),
                      filterable: "",
                      multiple: "",
                      tag: "",
                      placeholder: a(r)("allowListTip")
                    }, {
                      empty: t(() => [
                        e(S, {
                          depth: "3"
                        }, {
                          default: t(() => [
                            m(o(a(r)("manualInputPrompt")), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, [
                      "value",
                      "placeholder"
                    ])
                  ]),
                  _: 1
                }, 8, [
                  "label"
                ]),
                e(S, {
                  depth: "3",
                  style: {
                    "font-size": "12px"
                  }
                }, {
                  default: t(() => [
                    m(o(a(r)("allowListTip")), 1)
                  ]),
                  _: 1
                })
              ])) : te("", true)
            ]),
            _: 1
          }, 8, [
            "title"
          ])
        ]);
      };
    }
  });
  Jl = ae(Gl, [
    [
      "__scopeId",
      "data-v-230de380"
    ]
  ]);
  Ql = {
    key: 0
  };
  Xl = {
    style: {
      display: "flex",
      "justify-content": "center",
      padding: "20px"
    }
  };
  Zl = {
    __name: "Admin",
    setup(_) {
      const { adminAuth: c, showAdminAuth: r, adminTab: l, loading: n, globalTabplacement: b, showAdminPage: p, userSettings: s, openSettings: y } = ce(), g = se(), d = ca(), i = fa(() => (n.value = true, ba(() => import("./SendMail-BTTMb4ha.js"), __vite__mapDeps([0,1,2,3,4,5])).finally(() => n.value = false))), w = f(""), S = f(null), I = async () => {
        var _a2, _b;
        try {
          await T.fetch("/open_api/admin_login", {
            method: "POST",
            body: JSON.stringify({
              password: await ot(D.value),
              cf_token: w.value
            })
          }), c.value = D.value, location.reload();
        } catch (W) {
          g.error(W.message || "error"), (_b = (_a2 = S.value) == null ? void 0 : _a2.refresh) == null ? void 0 : _b.call(_a2);
        }
      }, k = f(false), v = async () => {
        c.value = "", r.value = false, l.value = "account", g.success(u("logoutSuccess")), await d.push(va("/", O.value));
      }, { t: u, locale: O } = le({
        messages: {
          en: {
            accessHeader: "Admin Password",
            accessTip: "Please enter the admin password",
            mails: "Emails",
            sendMail: "Send Mail",
            qucickSetup: "Quick Setup",
            account: "Account",
            account_create: "Create Account",
            account_settings: "Account Settings",
            user: "User",
            user_management: "User Management",
            user_settings: "User Settings",
            userOauth2Settings: "Oauth2 Settings",
            roleAddressConfig: "Role Address Config",
            unknow: "Mails with unknow receiver",
            senderAccess: "Sender Access Control",
            sendBox: "Send Box",
            telegram: "Telegram Bot",
            webhookSettings: "Webhook Settings",
            statistics: "Statistics",
            maintenance: "Maintenance",
            database: "Database",
            workerconfig: "Worker Config",
            ipBlacklistSettings: "IP Blacklist",
            aiExtractSettings: "AI Extract Settings",
            appearance: "Appearance",
            about: "About",
            ok: "OK",
            mailWebhook: "Mail Webhook",
            adminAccount: "Admin",
            loginMethod: "Login Method",
            loginViaPassword: "Admin Password Login",
            loginViaUserAdmin: "User Admin Permission",
            loginViaDisabledCheck: "Disabled Password Check",
            logout: "Logout",
            logoutConfirmTitle: "Confirm Logout",
            logoutConfirmContent: "Are you sure you want to logout from admin panel?",
            confirm: "Confirm",
            logoutSuccess: "Logout successful"
          },
          zh: {
            accessHeader: "Admin \u5BC6\u7801",
            accessTip: "\u8BF7\u8F93\u5165 Admin \u5BC6\u7801",
            mails: "\u90AE\u4EF6",
            sendMail: "\u53D1\u9001\u90AE\u4EF6",
            qucickSetup: "\u5FEB\u901F\u8BBE\u7F6E",
            account: "\u8D26\u53F7",
            account_create: "\u521B\u5EFA\u8D26\u53F7",
            account_settings: "\u8D26\u53F7\u8BBE\u7F6E",
            user: "\u7528\u6237",
            user_management: "\u7528\u6237\u7BA1\u7406",
            user_settings: "\u7528\u6237\u8BBE\u7F6E",
            userOauth2Settings: "Oauth2 \u8BBE\u7F6E",
            roleAddressConfig: "\u89D2\u8272\u5730\u5740\u914D\u7F6E",
            unknow: "\u65E0\u6536\u4EF6\u4EBA\u90AE\u4EF6",
            senderAccess: "\u53D1\u4EF6\u6743\u9650\u63A7\u5236",
            sendBox: "\u53D1\u4EF6\u7BB1",
            telegram: "\u7535\u62A5\u673A\u5668\u4EBA",
            webhookSettings: "Webhook \u8BBE\u7F6E",
            statistics: "\u7EDF\u8BA1",
            maintenance: "\u7EF4\u62A4",
            database: "\u6570\u636E\u5E93",
            workerconfig: "Worker \u914D\u7F6E",
            ipBlacklistSettings: "IP \u9ED1\u540D\u5355",
            aiExtractSettings: "AI \u63D0\u53D6\u8BBE\u7F6E",
            appearance: "\u5916\u89C2",
            about: "\u5173\u4E8E",
            ok: "\u786E\u5B9A",
            mailWebhook: "\u90AE\u4EF6 Webhook",
            adminAccount: "\u7BA1\u7406\u5458",
            loginMethod: "\u767B\u5F55\u65B9\u5F0F",
            loginViaPassword: "Admin \u5BC6\u7801\u767B\u5F55",
            loginViaUserAdmin: "\u7528\u6237\u7BA1\u7406\u5458\u6743\u9650",
            loginViaDisabledCheck: "\u5DF2\u7981\u7528\u5BC6\u7801\u68C0\u67E5",
            logout: "\u9000\u51FA\u767B\u5F55",
            logoutConfirmTitle: "\u786E\u8BA4\u9000\u51FA",
            logoutConfirmContent: "\u786E\u5B9A\u8981\u9000\u51FA\u7BA1\u7406\u5458\u9762\u677F\u5417\uFF1F",
            confirm: "\u786E\u8BA4",
            logoutSuccess: "\u9000\u51FA\u6210\u529F"
          }
        }
      }), K = xe(() => !p.value || r.value), D = f(""), x = xe(() => !!c.value), N = xe(() => c.value ? u("loginViaPassword") : s.value.is_admin ? u("loginViaUserAdmin") : y.value.disableAdminPasswordCheck ? u("loginViaDisabledCheck") : "");
      return oe(async () => {
        y.value.fetched || await T.getOpenSettings(g), s.value.user_id || await T.getUserSettings(g);
      }), (W, q) => {
        const C = me, J = z, V = Pe, $ = Ot, Z = zt, _e = Le, A = ct, F = qe, ne = pe;
        return a(s).fetched ? (E(), Q("div", Ql, [
          e(V, {
            show: K.value,
            "onUpdate:show": q[2] || (q[2] = (Y) => K.value = Y),
            closable: false,
            closeOnEsc: false,
            maskClosable: false,
            preset: "dialog",
            title: a(u)("accessHeader")
          }, {
            action: t(() => [
              e(J, {
                onClick: I,
                type: "primary",
                loading: a(n)
              }, {
                default: t(() => [
                  m(o(a(u)("ok")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(a(u)("accessTip")), 1),
              e(C, {
                value: D.value,
                "onUpdate:value": q[0] || (q[0] = (Y) => D.value = Y),
                type: "password",
                "show-password-on": "click"
              }, null, 8, [
                "value"
              ]),
              a(y).enableGlobalTurnstileCheck ? (E(), X(pa, {
                key: 0,
                ref_key: "turnstileRef",
                ref: S,
                value: w.value,
                "onUpdate:value": q[1] || (q[1] = (Y) => w.value = Y)
              }, null, 8, [
                "value"
              ])) : te("", true)
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ]),
          a(p) ? (E(), X(Z, {
            key: 0,
            type: "card",
            value: a(l),
            "onUpdate:value": q[4] || (q[4] = (Y) => it(l) ? l.value = Y : null),
            placement: a(b)
          }, {
            default: t(() => [
              e($, {
                name: "qucickSetup",
                tab: a(u)("qucickSetup")
              }, {
                default: t(() => [
                  e(Z, {
                    type: "bar",
                    "justify-content": "center",
                    animated: ""
                  }, {
                    default: t(() => [
                      e($, {
                        name: "database",
                        tab: a(u)("database")
                      }, {
                        default: t(() => [
                          e(At)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "account_settings",
                        tab: a(u)("account_settings")
                      }, {
                        default: t(() => [
                          e(kt)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "user_settings",
                        tab: a(u)("user_settings")
                      }, {
                        default: t(() => [
                          e(xt)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "workerconfig",
                        tab: a(u)("workerconfig")
                      }, {
                        default: t(() => [
                          e(St)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "account",
                tab: a(u)("account")
              }, {
                default: t(() => [
                  e(Z, {
                    type: "bar",
                    "justify-content": "center",
                    animated: ""
                  }, {
                    default: t(() => [
                      e($, {
                        name: "account",
                        tab: a(u)("account")
                      }, {
                        default: t(() => [
                          e(Xa)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "account_create",
                        tab: a(u)("account_create")
                      }, {
                        default: t(() => [
                          e(el)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "account_settings",
                        tab: a(u)("account_settings")
                      }, {
                        default: t(() => [
                          e(kt)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "senderAccess",
                        tab: a(u)("senderAccess")
                      }, {
                        default: t(() => [
                          e(qa)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "ipBlacklistSettings",
                        tab: a(u)("ipBlacklistSettings")
                      }, {
                        default: t(() => [
                          e(Wl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "aiExtractSettings",
                        tab: a(u)("aiExtractSettings")
                      }, {
                        default: t(() => [
                          e(Jl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "webhook",
                        tab: a(u)("webhookSettings")
                      }, {
                        default: t(() => [
                          e(zl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "user",
                tab: a(u)("user")
              }, {
                default: t(() => [
                  e(Z, {
                    type: "bar",
                    "justify-content": "center",
                    animated: ""
                  }, {
                    default: t(() => [
                      e($, {
                        name: "user_management",
                        tab: a(u)("user_management")
                      }, {
                        default: t(() => [
                          e(cl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "user_settings",
                        tab: a(u)("user_settings")
                      }, {
                        default: t(() => [
                          e(xt)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "userOauth2Settings",
                        tab: a(u)("userOauth2Settings")
                      }, {
                        default: t(() => [
                          e(gl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "roleAddressConfig",
                        tab: a(u)("roleAddressConfig")
                      }, {
                        default: t(() => [
                          e(kl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "mails",
                tab: a(u)("mails")
              }, {
                default: t(() => [
                  e(Z, {
                    type: "bar",
                    "justify-content": "center",
                    animated: ""
                  }, {
                    default: t(() => [
                      e($, {
                        name: "mails",
                        tab: a(u)("mails")
                      }, {
                        default: t(() => [
                          e(Cl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "unknow",
                        tab: a(u)("unknow")
                      }, {
                        default: t(() => [
                          e(Sl)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "sendBox",
                        tab: a(u)("sendBox")
                      }, {
                        default: t(() => [
                          e(Wa)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "sendMail",
                        tab: a(u)("sendMail")
                      }, {
                        default: t(() => [
                          e(a(i))
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "mailWebhook",
                        tab: a(u)("mailWebhook")
                      }, {
                        default: t(() => [
                          e(Ol)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "telegram",
                tab: a(u)("telegram")
              }, {
                default: t(() => [
                  e(Rl)
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "statistics",
                tab: a(u)("statistics")
              }, {
                default: t(() => [
                  e(Fa)
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "maintenance",
                tab: a(u)("maintenance")
              }, {
                default: t(() => [
                  e(Z, {
                    type: "bar",
                    "justify-content": "center",
                    animated: ""
                  }, {
                    default: t(() => [
                      e($, {
                        name: "database",
                        tab: a(u)("database")
                      }, {
                        default: t(() => [
                          e(At)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "workerconfig",
                        tab: a(u)("workerconfig")
                      }, {
                        default: t(() => [
                          e(St)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ]),
                      e($, {
                        name: "maintenance",
                        tab: a(u)("maintenance")
                      }, {
                        default: t(() => [
                          e(Il)
                        ]),
                        _: 1
                      }, 8, [
                        "tab"
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "appearance",
                tab: a(u)("appearance")
              }, {
                default: t(() => [
                  e(ma)
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "adminAccount",
                tab: a(u)("adminAccount")
              }, {
                default: t(() => [
                  M("div", Xl, [
                    e(ne, {
                      style: {
                        width: "600px"
                      }
                    }, {
                      default: t(() => [
                        e(F, {
                          vertical: ""
                        }, {
                          default: t(() => [
                            e(_e, {
                              strong: ""
                            }, {
                              default: t(() => [
                                m(o(a(u)("loginMethod")), 1)
                              ]),
                              _: 1
                            }),
                            e(_e, null, {
                              default: t(() => [
                                m(o(N.value), 1)
                              ]),
                              _: 1
                            }),
                            x.value ? (E(), X(A, {
                              key: 0
                            })) : te("", true),
                            x.value ? (E(), X(J, {
                              key: 1,
                              type: "warning",
                              onClick: q[3] || (q[3] = (Y) => k.value = true),
                              block: ""
                            }, {
                              default: t(() => [
                                m(o(a(u)("logout")), 1)
                              ]),
                              _: 1
                            })) : te("", true)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, [
                "tab"
              ]),
              e($, {
                name: "about",
                tab: a(u)("about")
              }, {
                default: t(() => [
                  e(_a)
                ]),
                _: 1
              }, 8, [
                "tab"
              ])
            ]),
            _: 1
          }, 8, [
            "value",
            "placement"
          ])) : te("", true),
          e(V, {
            show: k.value,
            "onUpdate:show": q[5] || (q[5] = (Y) => k.value = Y),
            preset: "dialog",
            title: a(u)("logoutConfirmTitle")
          }, {
            action: t(() => [
              e(J, {
                loading: a(n),
                onClick: v,
                size: "small",
                tertiary: "",
                type: "warning"
              }, {
                default: t(() => [
                  m(o(a(u)("confirm")), 1)
                ]),
                _: 1
              }, 8, [
                "loading"
              ])
            ]),
            default: t(() => [
              M("p", null, o(a(u)("logoutConfirmContent")), 1)
            ]),
            _: 1
          }, 8, [
            "show",
            "title"
          ])
        ])) : te("", true);
      };
    }
  };
  en = ae(Zl, [
    [
      "__scopeId",
      "data-v-01876a01"
    ]
  ]);
});
export {
  __tla,
  en as default
};
