import { jsx as be, jsxs as Jn } from "react/jsx-runtime";
import * as O from "react";
import it, { forwardRef as ci, useContext as ui, Children as li, isValidElement as Rt, cloneElement as wt } from "react";
const ct = {
  black: "#000",
  white: "#fff"
}, Be = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, We = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Ue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Ye = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, qe = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, nt = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, fi = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function ut(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let r = 1; r < arguments.length; r += 1)
    t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
const di = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ut
}, Symbol.toStringTag, { value: "Module" })), Zn = "$$material";
function N() {
  return N = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, N.apply(this, arguments);
}
function _e(e, t) {
  if (e == null)
    return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0)
        continue;
      r[n] = e[n];
    }
  return r;
}
function Qn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var pi = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, mi = /* @__PURE__ */ Qn(
  function(e) {
    return pi.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function hi(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function yi(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var gi = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(yi(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var s = hi(o);
      try {
        s.insertRule(n, s.cssRules.length);
      } catch (a) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', a);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), ye = "-ms-", kt = "-moz-", B = "-webkit-", wr = "comm", $r = "rule", Pr = "decl", bi = "@import", eo = "@keyframes", Ei = "@layer", xi = Math.abs, zt = String.fromCharCode, _i = Object.assign;
function Ti(e, t) {
  return he(e, 0) ^ 45 ? (((t << 2 ^ he(e, 0)) << 2 ^ he(e, 1)) << 2 ^ he(e, 2)) << 2 ^ he(e, 3) : 0;
}
function to(e) {
  return e.trim();
}
function Si(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function W(e, t, r) {
  return e.replace(t, r);
}
function yr(e, t) {
  return e.indexOf(t);
}
function he(e, t) {
  return e.charCodeAt(t) | 0;
}
function lt(e, t, r) {
  return e.slice(t, r);
}
function Ne(e) {
  return e.length;
}
function Nr(e) {
  return e.length;
}
function _t(e, t) {
  return t.push(e), e;
}
function Oi(e, t) {
  return e.map(t).join("");
}
var Vt = 1, He = 1, ro = 0, ve = 0, le = 0, Ze = "";
function Lt(e, t, r, n, o, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Vt, column: He, length: s, return: "" };
}
function ot(e, t) {
  return _i(Lt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ci() {
  return le;
}
function Ri() {
  return le = ve > 0 ? he(Ze, --ve) : 0, He--, le === 10 && (He = 1, Vt--), le;
}
function xe() {
  return le = ve < ro ? he(Ze, ve++) : 0, He++, le === 10 && (He = 1, Vt++), le;
}
function Ae() {
  return he(Ze, ve);
}
function $t() {
  return ve;
}
function pt(e, t) {
  return lt(Ze, e, t);
}
function ft(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function no(e) {
  return Vt = He = 1, ro = Ne(Ze = e), ve = 0, [];
}
function oo(e) {
  return Ze = "", e;
}
function Pt(e) {
  return to(pt(ve - 1, gr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function wi(e) {
  for (; (le = Ae()) && le < 33; )
    xe();
  return ft(e) > 2 || ft(le) > 3 ? "" : " ";
}
function $i(e, t) {
  for (; --t && xe() && !(le < 48 || le > 102 || le > 57 && le < 65 || le > 70 && le < 97); )
    ;
  return pt(e, $t() + (t < 6 && Ae() == 32 && xe() == 32));
}
function gr(e) {
  for (; xe(); )
    switch (le) {
      case e:
        return ve;
      case 34:
      case 39:
        e !== 34 && e !== 39 && gr(le);
        break;
      case 40:
        e === 41 && gr(e);
        break;
      case 92:
        xe();
        break;
    }
  return ve;
}
function Pi(e, t) {
  for (; xe() && e + le !== 57; )
    if (e + le === 84 && Ae() === 47)
      break;
  return "/*" + pt(t, ve - 1) + "*" + zt(e === 47 ? e : xe());
}
function Ni(e) {
  for (; !ft(Ae()); )
    xe();
  return pt(e, ve);
}
function Ai(e) {
  return oo(Nt("", null, null, null, [""], e = no(e), 0, [0], e));
}
function Nt(e, t, r, n, o, i, s, a, u) {
  for (var l = 0, f = 0, m = s, h = 0, v = 0, b = 0, d = 1, y = 1, _ = 1, $ = 0, T = "", x = o, c = i, R = n, w = T; y; )
    switch (b = $, $ = xe()) {
      case 40:
        if (b != 108 && he(w, m - 1) == 58) {
          yr(w += W(Pt($), "&", "&\f"), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += Pt($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += wi(b);
        break;
      case 92:
        w += $i($t() - 1, 7);
        continue;
      case 47:
        switch (Ae()) {
          case 42:
          case 47:
            _t(Mi(Pi(xe(), $t()), t, r), u);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * d:
        a[l++] = Ne(w) * _;
      case 125 * d:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            y = 0;
          case 59 + f:
            _ == -1 && (w = W(w, /\f/g, "")), v > 0 && Ne(w) - m && _t(v > 32 ? Xr(w + ";", n, r, m - 1) : Xr(W(w, " ", "") + ";", n, r, m - 2), u);
            break;
          case 59:
            w += ";";
          default:
            if (_t(R = Hr(w, t, r, l, f, o, a, T, x = [], c = [], m), i), $ === 123)
              if (f === 0)
                Nt(w, t, R, R, x, i, m, a, c);
              else
                switch (h === 99 && he(w, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Nt(e, R, R, n && _t(Hr(e, R, R, 0, 0, o, a, T, o, x = [], m), c), o, c, m, a, n ? x : c);
                    break;
                  default:
                    Nt(w, R, R, R, [""], c, 0, a, c);
                }
        }
        l = f = v = 0, d = _ = 1, T = w = "", m = s;
        break;
      case 58:
        m = 1 + Ne(w), v = b;
      default:
        if (d < 1) {
          if ($ == 123)
            --d;
          else if ($ == 125 && d++ == 0 && Ri() == 125)
            continue;
        }
        switch (w += zt($), $ * d) {
          case 38:
            _ = f > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            a[l++] = (Ne(w) - 1) * _, _ = 1;
            break;
          case 64:
            Ae() === 45 && (w += Pt(xe())), h = Ae(), f = m = Ne(T = w += Ni($t())), $++;
            break;
          case 45:
            b === 45 && Ne(w) == 2 && (d = 0);
        }
    }
  return i;
}
function Hr(e, t, r, n, o, i, s, a, u, l, f) {
  for (var m = o - 1, h = o === 0 ? i : [""], v = Nr(h), b = 0, d = 0, y = 0; b < n; ++b)
    for (var _ = 0, $ = lt(e, m + 1, m = xi(d = s[b])), T = e; _ < v; ++_)
      (T = to(d > 0 ? h[_] + " " + $ : W($, /&\f/g, h[_]))) && (u[y++] = T);
  return Lt(e, t, r, o === 0 ? $r : a, u, l, f);
}
function Mi(e, t, r) {
  return Lt(e, t, r, wr, zt(Ci()), lt(e, 2, -2), 0);
}
function Xr(e, t, r, n) {
  return Lt(e, t, r, Pr, lt(e, 0, n), lt(e, n + 1, -1), n);
}
function Ke(e, t) {
  for (var r = "", n = Nr(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function ki(e, t, r, n) {
  switch (e.type) {
    case Ei:
      if (e.children.length)
        break;
    case bi:
    case Pr:
      return e.return = e.return || e.value;
    case wr:
      return "";
    case eo:
      return e.return = e.value + "{" + Ke(e.children, n) + "}";
    case $r:
      e.value = e.props.join(",");
  }
  return Ne(r = Ke(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ii(e) {
  var t = Nr(e);
  return function(r, n, o, i) {
    for (var s = "", a = 0; a < t; a++)
      s += e[a](r, n, o, i) || "";
    return s;
  };
}
function ji(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Di = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ae(), o === 38 && i === 12 && (r[n] = 1), !ft(i); )
    xe();
  return pt(t, ve);
}, zi = function(t, r) {
  var n = -1, o = 44;
  do
    switch (ft(o)) {
      case 0:
        o === 38 && Ae() === 12 && (r[n] = 1), t[n] += Di(ve - 1, r, n);
        break;
      case 2:
        t[n] += Pt(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ae() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += zt(o);
    }
  while (o = xe());
  return t;
}, Vi = function(t, r) {
  return oo(zi(no(t), r));
}, Jr = /* @__PURE__ */ new WeakMap(), Li = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Jr.get(n)) && !o) {
      Jr.set(t, !0);
      for (var i = [], s = Vi(r, i), a = n.props, u = 0, l = 0; u < s.length; u++)
        for (var f = 0; f < a.length; f++, l++)
          t.props[l] = i[u] ? s[u].replace(/&\f/g, a[f]) : a[f] + " " + s[u];
    }
  }
}, Fi = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, Bi = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Wi = function(t) {
  return t.type === "comm" && t.children.indexOf(Bi) > -1;
}, Ui = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var i = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var s = !!r.parent, a = s ? r.parent.children : (
          // global rule at the root level
          o
        ), u = a.length - 1; u >= 0; u--) {
          var l = a[u];
          if (l.line < r.line)
            break;
          if (l.column < r.column) {
            if (Wi(l))
              return;
            break;
          }
        }
        i.forEach(function(f) {
          console.error('The pseudo class "' + f + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + f.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, io = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Yi = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!io(r[n]))
      return !0;
  return !1;
}, Zr = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, qi = function(t, r, n) {
  io(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Zr(t)) : Yi(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Zr(t)));
};
function so(e, t) {
  switch (Ti(e, t)) {
    case 5103:
      return B + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return B + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return B + e + kt + e + ye + e + e;
    case 6828:
    case 4268:
      return B + e + ye + e + e;
    case 6165:
      return B + e + ye + "flex-" + e + e;
    case 5187:
      return B + e + W(e, /(\w+).+(:[^]+)/, B + "box-$1$2" + ye + "flex-$1$2") + e;
    case 5443:
      return B + e + ye + "flex-item-" + W(e, /flex-|-self/, "") + e;
    case 4675:
      return B + e + ye + "flex-line-pack" + W(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return B + e + ye + W(e, "shrink", "negative") + e;
    case 5292:
      return B + e + ye + W(e, "basis", "preferred-size") + e;
    case 6060:
      return B + "box-" + W(e, "-grow", "") + B + e + ye + W(e, "grow", "positive") + e;
    case 4554:
      return B + W(e, /([^-])(transform)/g, "$1" + B + "$2") + e;
    case 6187:
      return W(W(W(e, /(zoom-|grab)/, B + "$1"), /(image-set)/, B + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return W(e, /(image-set\([^]*)/, B + "$1$`$1");
    case 4968:
      return W(W(e, /(.+:)(flex-)?(.*)/, B + "box-pack:$3" + ye + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + B + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return W(e, /(.+)-inline(.+)/, B + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ne(e) - 1 - t > 6)
        switch (he(e, t + 1)) {
          case 109:
            if (he(e, t + 4) !== 45)
              break;
          case 102:
            return W(e, /(.+:)(.+)-([^]+)/, "$1" + B + "$2-$3$1" + kt + (he(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~yr(e, "stretch") ? so(W(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (he(e, t + 1) !== 115)
        break;
    case 6444:
      switch (he(e, Ne(e) - 3 - (~yr(e, "!important") && 10))) {
        case 107:
          return W(e, ":", ":" + B) + e;
        case 101:
          return W(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + B + (he(e, 14) === 45 ? "inline-" : "") + "box$3$1" + B + "$2$3$1" + ye + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (he(e, t + 11)) {
        case 114:
          return B + e + ye + W(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return B + e + ye + W(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return B + e + ye + W(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return B + e + ye + e + e;
  }
  return e;
}
var Ki = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Pr:
        t.return = so(t.value, t.length);
        break;
      case eo:
        return Ke([ot(t, {
          value: W(t.value, "@", "@" + B)
        })], o);
      case $r:
        if (t.length)
          return Oi(t.props, function(i) {
            switch (Si(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ke([ot(t, {
                  props: [W(i, /:(read-\w+)/, ":" + kt + "$1")]
                })], o);
              case "::placeholder":
                return Ke([ot(t, {
                  props: [W(i, /:(plac\w+)/, ":" + B + "input-$1")]
                }), ot(t, {
                  props: [W(i, /:(plac\w+)/, ":" + kt + "$1")]
                }), ot(t, {
                  props: [W(i, /:(plac\w+)/, ye + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, Gi = [Ki], ao = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(d) {
      var y = d.getAttribute("data-emotion");
      y.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Gi;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, s, a = [];
  s = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(d) {
      for (var y = d.getAttribute("data-emotion").split(" "), _ = 1; _ < y.length; _++)
        i[y[_]] = !0;
      a.push(d);
    }
  );
  var u, l = [Li, Fi];
  process.env.NODE_ENV !== "production" && l.push(Ui({
    get compat() {
      return b.compat;
    }
  }), qi);
  {
    var f, m = [ki, process.env.NODE_ENV !== "production" ? function(d) {
      d.root || (d.return ? f.insert(d.return) : d.value && d.type !== wr && f.insert(d.value + "{}"));
    } : ji(function(d) {
      f.insert(d);
    })], h = Ii(l.concat(o, m)), v = function(y) {
      return Ke(Ai(y), h);
    };
    u = function(y, _, $, T) {
      f = $, process.env.NODE_ENV !== "production" && _.map !== void 0 && (f = {
        insert: function(c) {
          $.insert(c + _.map);
        }
      }), v(y ? y + "{" + _.styles + "}" : _.styles), T && (b.inserted[_.name] = !0);
    };
  }
  var b = {
    key: r,
    sheet: new gi({
      key: r,
      container: s,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return b.sheet.hydrate(a), b;
};
function Hi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function je(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    r.prototype = t.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(r, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), r;
}
var br = { exports: {} }, U = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function Xi() {
  if (Qr)
    return U;
  Qr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function T(c) {
    if (typeof c == "object" && c !== null) {
      var R = c.$$typeof;
      switch (R) {
        case t:
          switch (c = c.type, c) {
            case u:
            case l:
            case n:
            case i:
            case o:
            case m:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case a:
                case f:
                case b:
                case v:
                case s:
                  return c;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  function x(c) {
    return T(c) === l;
  }
  return U.AsyncMode = u, U.ConcurrentMode = l, U.ContextConsumer = a, U.ContextProvider = s, U.Element = t, U.ForwardRef = f, U.Fragment = n, U.Lazy = b, U.Memo = v, U.Portal = r, U.Profiler = i, U.StrictMode = o, U.Suspense = m, U.isAsyncMode = function(c) {
    return x(c) || T(c) === u;
  }, U.isConcurrentMode = x, U.isContextConsumer = function(c) {
    return T(c) === a;
  }, U.isContextProvider = function(c) {
    return T(c) === s;
  }, U.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, U.isForwardRef = function(c) {
    return T(c) === f;
  }, U.isFragment = function(c) {
    return T(c) === n;
  }, U.isLazy = function(c) {
    return T(c) === b;
  }, U.isMemo = function(c) {
    return T(c) === v;
  }, U.isPortal = function(c) {
    return T(c) === r;
  }, U.isProfiler = function(c) {
    return T(c) === i;
  }, U.isStrictMode = function(c) {
    return T(c) === o;
  }, U.isSuspense = function(c) {
    return T(c) === m;
  }, U.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === l || c === i || c === o || c === m || c === h || typeof c == "object" && c !== null && (c.$$typeof === b || c.$$typeof === v || c.$$typeof === s || c.$$typeof === a || c.$$typeof === f || c.$$typeof === y || c.$$typeof === _ || c.$$typeof === $ || c.$$typeof === d);
  }, U.typeOf = T, U;
}
var Y = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var en;
function Ji() {
  return en || (en = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function T(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === l || g === i || g === o || g === m || g === h || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === v || g.$$typeof === s || g.$$typeof === a || g.$$typeof === f || g.$$typeof === y || g.$$typeof === _ || g.$$typeof === $ || g.$$typeof === d);
    }
    function x(g) {
      if (typeof g == "object" && g !== null) {
        var fe = g.$$typeof;
        switch (fe) {
          case t:
            var C = g.type;
            switch (C) {
              case u:
              case l:
              case n:
              case i:
              case o:
              case m:
                return C;
              default:
                var we = C && C.$$typeof;
                switch (we) {
                  case a:
                  case f:
                  case b:
                  case v:
                  case s:
                    return we;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var c = u, R = l, w = a, Q = s, X = t, J = f, F = n, Z = b, ne = v, te = r, pe = i, ee = o, me = m, oe = !1;
    function Pe(g) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(g) || x(g) === u;
    }
    function E(g) {
      return x(g) === l;
    }
    function S(g) {
      return x(g) === a;
    }
    function j(g) {
      return x(g) === s;
    }
    function k(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function P(g) {
      return x(g) === f;
    }
    function D(g) {
      return x(g) === n;
    }
    function A(g) {
      return x(g) === b;
    }
    function I(g) {
      return x(g) === v;
    }
    function z(g) {
      return x(g) === r;
    }
    function M(g) {
      return x(g) === i;
    }
    function L(g) {
      return x(g) === o;
    }
    function ue(g) {
      return x(g) === m;
    }
    Y.AsyncMode = c, Y.ConcurrentMode = R, Y.ContextConsumer = w, Y.ContextProvider = Q, Y.Element = X, Y.ForwardRef = J, Y.Fragment = F, Y.Lazy = Z, Y.Memo = ne, Y.Portal = te, Y.Profiler = pe, Y.StrictMode = ee, Y.Suspense = me, Y.isAsyncMode = Pe, Y.isConcurrentMode = E, Y.isContextConsumer = S, Y.isContextProvider = j, Y.isElement = k, Y.isForwardRef = P, Y.isFragment = D, Y.isLazy = A, Y.isMemo = I, Y.isPortal = z, Y.isProfiler = M, Y.isStrictMode = L, Y.isSuspense = ue, Y.isValidElementType = T, Y.typeOf = x;
  }()), Y;
}
process.env.NODE_ENV === "production" ? br.exports = Xi() : br.exports = Ji();
var Zi = br.exports, co = Zi, Qi = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, es = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, uo = {};
uo[co.ForwardRef] = Qi;
uo[co.Memo] = es;
var ts = !0;
function Ar(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Ft = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  ts === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Bt = function(t, r, n) {
  Ft(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function rs(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var ns = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, tn = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, os = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", is = /[A-Z]|^ms/g, lo = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Mr = function(t) {
  return t.charCodeAt(1) === 45;
}, rn = function(t) {
  return t != null && typeof t != "boolean";
}, ir = /* @__PURE__ */ Qn(function(e) {
  return Mr(e) ? e : e.replace(is, "-$&").toLowerCase();
}), It = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(lo, function(n, o, i) {
          return $e = {
            name: o,
            styles: i,
            next: $e
          }, o;
        });
  }
  return ns[t] !== 1 && !Mr(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var ss = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, as = ["normal", "none", "initial", "inherit", "unset"], cs = It, us = /^-ms-/, ls = /-(.)/g, nn = {};
  It = function(t, r) {
    if (t === "content" && (typeof r != "string" || as.indexOf(r) === -1 && !ss.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = cs(t, r);
    return n !== "" && !Mr(t) && t.indexOf("-") !== -1 && nn[t] === void 0 && (nn[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(us, "ms-").replace(ls, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var fo = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function dt(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(fo);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return $e = {
          name: r.name,
          styles: r.styles,
          next: $e
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            $e = {
              name: n.name,
              styles: n.styles,
              next: $e
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return fs(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = $e, s = r(e);
        return $e = i, dt(e, t, s);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var a = [], u = r.replace(lo, function(f, m, h) {
          var v = "animation" + a.length;
          return a.push("const " + v + " = keyframes`" + h.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + v + "}";
        });
        a.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(a, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var l = t[r];
  return l !== void 0 ? l : r;
}
function fs(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += dt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object")
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : rn(s) && (n += ir(i) + ":" + It(i, s) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(fo);
        if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
          for (var a = 0; a < s.length; a++)
            rn(s[a]) && (n += ir(i) + ":" + It(i, s[a]) + ";");
        else {
          var u = dt(e, t, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += ir(i) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(os), n += i + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var on = /label:\s*([^\s;\n{]+)\s*(;|$)/g, po;
process.env.NODE_ENV !== "production" && (po = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var $e, Xe = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  $e = void 0;
  var s = t[0];
  s == null || s.raw === void 0 ? (o = !1, i += dt(n, r, s)) : (process.env.NODE_ENV !== "production" && s[0] === void 0 && console.error(tn), i += s[0]);
  for (var a = 1; a < t.length; a++)
    i += dt(n, r, t[a]), o && (process.env.NODE_ENV !== "production" && s[a] === void 0 && console.error(tn), i += s[a]);
  var u;
  process.env.NODE_ENV !== "production" && (i = i.replace(po, function(h) {
    return u = h, "";
  })), on.lastIndex = 0;
  for (var l = "", f; (f = on.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    f[1];
  var m = rs(i) + l;
  return process.env.NODE_ENV !== "production" ? {
    name: m,
    styles: i,
    map: u,
    next: $e,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: m,
    styles: i,
    next: $e
  };
}, ds = function(t) {
  return t();
}, mo = O.useInsertionEffect ? O.useInsertionEffect : !1, kr = mo || ds, sn = mo || O.useLayoutEffect, ps = {}.hasOwnProperty, Ir = /* @__PURE__ */ O.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ao({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Ir.displayName = "EmotionCacheContext");
var ms = Ir.Provider, Wt = function(t) {
  return /* @__PURE__ */ ci(function(r, n) {
    var o = ui(Ir);
    return t(r, o, n);
  });
}, Le = /* @__PURE__ */ O.createContext({});
process.env.NODE_ENV !== "production" && (Le.displayName = "EmotionThemeContext");
var an = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", cn = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", hs = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Ft(r, n, o), kr(function() {
    return Bt(r, n, o);
  }), null;
}, ys = /* @__PURE__ */ Wt(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[an], i = [n], s = "";
  typeof e.className == "string" ? s = Ar(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
  var a = Xe(i, void 0, O.useContext(Le));
  if (process.env.NODE_ENV !== "production" && a.name.indexOf("-") === -1) {
    var u = e[cn];
    u && (a = Xe([a, "label:" + u + ";"]));
  }
  s += t.key + "-" + a.name;
  var l = {};
  for (var f in e)
    ps.call(e, f) && f !== "css" && f !== an && (process.env.NODE_ENV === "production" || f !== cn) && (l[f] = e[f]);
  return l.ref = r, l.className = s, /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(hs, {
    cache: t,
    serialized: a,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ O.createElement(o, l));
});
process.env.NODE_ENV !== "production" && (ys.displayName = "EmotionCssPropInternal");
var sr = { exports: {} }, un;
function ho() {
  return un || (un = 1, function(e) {
    function t() {
      return e.exports = t = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          for (var i in o)
            Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i]);
        }
        return r;
      }, e.exports.__esModule = !0, e.exports.default = e.exports, t.apply(this, arguments);
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(sr)), sr.exports;
}
ho();
var gs = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, ln = !1, yo = /* @__PURE__ */ Wt(function(e, t) {
  process.env.NODE_ENV !== "production" && !ln && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), ln = !0);
  var r = e.styles, n = Xe([r], void 0, O.useContext(Le)), o = O.useRef();
  return sn(function() {
    var i = t.key + "-global", s = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), a = !1, u = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (s.before = t.sheet.tags[0]), u !== null && (a = !0, u.setAttribute("data-emotion", i), s.hydrate([u])), o.current = [s, a], function() {
      s.flush();
    };
  }, [t]), sn(function() {
    var i = o.current, s = i[0], a = i[1];
    if (a) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && Bt(t, n.next, !0), s.tags.length) {
      var u = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = u, s.flush();
    }
    t.insert("", n, s, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (yo.displayName = "EmotionGlobal");
function go() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Xe(t);
}
var Ut = function() {
  var t = go.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, bs = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var i = t[n];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            s = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var a in i)
              i[a] && a && (s && (s += " "), s += a);
          }
          break;
        }
        default:
          s = i;
      }
      s && (o && (o += " "), o += s);
    }
  }
  return o;
};
function vs(e, t, r) {
  var n = [], o = Ar(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var Es = function(t) {
  var r = t.cache, n = t.serializedArr;
  return kr(function() {
    for (var o = 0; o < n.length; o++)
      Bt(r, n[o], !1);
  }), null;
}, xs = /* @__PURE__ */ Wt(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var l = arguments.length, f = new Array(l), m = 0; m < l; m++)
      f[m] = arguments[m];
    var h = Xe(f, t.registered);
    return n.push(h), Ft(t, h, !1), t.key + "-" + h.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var l = arguments.length, f = new Array(l), m = 0; m < l; m++)
      f[m] = arguments[m];
    return vs(t.registered, o, bs(f));
  }, s = {
    css: o,
    cx: i,
    theme: O.useContext(Le)
  }, a = e.children(s);
  return r = !0, /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(Es, {
    cache: t,
    serializedArr: n
  }), a);
});
process.env.NODE_ENV !== "production" && (xs.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var fn = !0, _s = typeof jest < "u" || typeof vi < "u";
  if (fn && !_s) {
    var dn = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : fn ? window : global
    ), pn = "__EMOTION_REACT_" + gs.version.split(".")[0] + "__";
    dn[pn] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), dn[pn] = !0;
  }
}
var Ts = mi, Ss = function(t) {
  return t !== "theme";
}, mn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Ts : Ss;
}, hn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(s) {
      return t.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, yn = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Os = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Ft(r, n, o), kr(function() {
    return Bt(r, n, o);
  }), null;
}, Cs = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, s;
  r !== void 0 && (i = r.label, s = r.target);
  var a = hn(t, r, n), u = a || mn(o), l = !u("as");
  return function() {
    var f = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), f[0] == null || f[0].raw === void 0)
      m.push.apply(m, f);
    else {
      process.env.NODE_ENV !== "production" && f[0][0] === void 0 && console.error(yn), m.push(f[0][0]);
      for (var h = f.length, v = 1; v < h; v++)
        process.env.NODE_ENV !== "production" && f[0][v] === void 0 && console.error(yn), m.push(f[v], f[0][v]);
    }
    var b = Wt(function(d, y, _) {
      var $ = l && d.as || o, T = "", x = [], c = d;
      if (d.theme == null) {
        c = {};
        for (var R in d)
          c[R] = d[R];
        c.theme = O.useContext(Le);
      }
      typeof d.className == "string" ? T = Ar(y.registered, x, d.className) : d.className != null && (T = d.className + " ");
      var w = Xe(m.concat(x), y.registered, c);
      T += y.key + "-" + w.name, s !== void 0 && (T += " " + s);
      var Q = l && a === void 0 ? mn($) : u, X = {};
      for (var J in d)
        l && J === "as" || // $FlowFixMe
        Q(J) && (X[J] = d[J]);
      return X.className = T, X.ref = _, /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement(Os, {
        cache: y,
        serialized: w,
        isStringTag: typeof $ == "string"
      }), /* @__PURE__ */ O.createElement($, X));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = m, b.__emotion_forwardProp = a, Object.defineProperty(b, "toString", {
      value: function() {
        return s === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + s;
      }
    }), b.withComponent = function(d, y) {
      return e(d, N({}, r, y, {
        shouldForwardProp: hn(b, y, !0)
      })).apply(void 0, m);
    }, b;
  };
}, Rs = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], vr = Cs.bind();
Rs.forEach(function(e) {
  vr[e] = vr(e);
});
var Er = { exports: {} }, Tt = { exports: {} }, q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function ws() {
  if (gn)
    return q;
  gn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function T(c) {
    if (typeof c == "object" && c !== null) {
      var R = c.$$typeof;
      switch (R) {
        case t:
          switch (c = c.type, c) {
            case u:
            case l:
            case n:
            case i:
            case o:
            case m:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case a:
                case f:
                case b:
                case v:
                case s:
                  return c;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  function x(c) {
    return T(c) === l;
  }
  return q.AsyncMode = u, q.ConcurrentMode = l, q.ContextConsumer = a, q.ContextProvider = s, q.Element = t, q.ForwardRef = f, q.Fragment = n, q.Lazy = b, q.Memo = v, q.Portal = r, q.Profiler = i, q.StrictMode = o, q.Suspense = m, q.isAsyncMode = function(c) {
    return x(c) || T(c) === u;
  }, q.isConcurrentMode = x, q.isContextConsumer = function(c) {
    return T(c) === a;
  }, q.isContextProvider = function(c) {
    return T(c) === s;
  }, q.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, q.isForwardRef = function(c) {
    return T(c) === f;
  }, q.isFragment = function(c) {
    return T(c) === n;
  }, q.isLazy = function(c) {
    return T(c) === b;
  }, q.isMemo = function(c) {
    return T(c) === v;
  }, q.isPortal = function(c) {
    return T(c) === r;
  }, q.isProfiler = function(c) {
    return T(c) === i;
  }, q.isStrictMode = function(c) {
    return T(c) === o;
  }, q.isSuspense = function(c) {
    return T(c) === m;
  }, q.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === n || c === l || c === i || c === o || c === m || c === h || typeof c == "object" && c !== null && (c.$$typeof === b || c.$$typeof === v || c.$$typeof === s || c.$$typeof === a || c.$$typeof === f || c.$$typeof === y || c.$$typeof === _ || c.$$typeof === $ || c.$$typeof === d);
  }, q.typeOf = T, q;
}
var K = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function $s() {
  return bn || (bn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, d = e ? Symbol.for("react.block") : 60121, y = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function T(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === l || g === i || g === o || g === m || g === h || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === v || g.$$typeof === s || g.$$typeof === a || g.$$typeof === f || g.$$typeof === y || g.$$typeof === _ || g.$$typeof === $ || g.$$typeof === d);
    }
    function x(g) {
      if (typeof g == "object" && g !== null) {
        var fe = g.$$typeof;
        switch (fe) {
          case t:
            var C = g.type;
            switch (C) {
              case u:
              case l:
              case n:
              case i:
              case o:
              case m:
                return C;
              default:
                var we = C && C.$$typeof;
                switch (we) {
                  case a:
                  case f:
                  case b:
                  case v:
                  case s:
                    return we;
                  default:
                    return fe;
                }
            }
          case r:
            return fe;
        }
      }
    }
    var c = u, R = l, w = a, Q = s, X = t, J = f, F = n, Z = b, ne = v, te = r, pe = i, ee = o, me = m, oe = !1;
    function Pe(g) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(g) || x(g) === u;
    }
    function E(g) {
      return x(g) === l;
    }
    function S(g) {
      return x(g) === a;
    }
    function j(g) {
      return x(g) === s;
    }
    function k(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function P(g) {
      return x(g) === f;
    }
    function D(g) {
      return x(g) === n;
    }
    function A(g) {
      return x(g) === b;
    }
    function I(g) {
      return x(g) === v;
    }
    function z(g) {
      return x(g) === r;
    }
    function M(g) {
      return x(g) === i;
    }
    function L(g) {
      return x(g) === o;
    }
    function ue(g) {
      return x(g) === m;
    }
    K.AsyncMode = c, K.ConcurrentMode = R, K.ContextConsumer = w, K.ContextProvider = Q, K.Element = X, K.ForwardRef = J, K.Fragment = F, K.Lazy = Z, K.Memo = ne, K.Portal = te, K.Profiler = pe, K.StrictMode = ee, K.Suspense = me, K.isAsyncMode = Pe, K.isConcurrentMode = E, K.isContextConsumer = S, K.isContextProvider = j, K.isElement = k, K.isForwardRef = P, K.isFragment = D, K.isLazy = A, K.isMemo = I, K.isPortal = z, K.isProfiler = M, K.isStrictMode = L, K.isSuspense = ue, K.isValidElementType = T, K.typeOf = x;
  }()), K;
}
var vn;
function bo() {
  return vn || (vn = 1, process.env.NODE_ENV === "production" ? Tt.exports = ws() : Tt.exports = $s()), Tt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ar, En;
function Ps() {
  if (En)
    return ar;
  En = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, a = 0; a < 10; a++)
        s["_" + String.fromCharCode(a)] = a;
      var u = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        l[f] = f;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ar = o() ? Object.assign : function(i, s) {
    for (var a, u = n(i), l, f = 1; f < arguments.length; f++) {
      a = Object(arguments[f]);
      for (var m in a)
        t.call(a, m) && (u[m] = a[m]);
      if (e) {
        l = e(a);
        for (var h = 0; h < l.length; h++)
          r.call(a, l[h]) && (u[l[h]] = a[l[h]]);
      }
    }
    return u;
  }, ar;
}
var cr, xn;
function jr() {
  if (xn)
    return cr;
  xn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return cr = e, cr;
}
var ur, _n;
function vo() {
  return _n || (_n = 1, ur = Function.call.bind(Object.prototype.hasOwnProperty)), ur;
}
var lr, Tn;
function Ns() {
  if (Tn)
    return lr;
  Tn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = jr(), r = {}, n = vo();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, a, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var m;
          try {
            if (typeof i[f] != "function") {
              var h = Error(
                (u || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            m = i[f](s, f, u, a, null, t);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (u || "React class") + ": type specification of " + a + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var v = l ? l() : "";
            e(
              "Failed " + a + " type: " + m.message + (v ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, lr = o, lr;
}
var fr, Sn;
function As() {
  if (Sn)
    return fr;
  Sn = 1;
  var e = bo(), t = Ps(), r = jr(), n = vo(), o = Ns(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var u = "Warning: " + a;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return fr = function(a, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function m(E) {
      var S = E && (l && E[l] || E[f]);
      if (typeof S == "function")
        return S;
    }
    var h = "<<anonymous>>", v = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: $(),
      arrayOf: T,
      element: x(),
      elementType: c(),
      instanceOf: R,
      node: J(),
      objectOf: Q,
      oneOf: w,
      oneOfType: X,
      shape: Z,
      exact: ne
    };
    function b(E, S) {
      return E === S ? E !== 0 || 1 / E === 1 / S : E !== E && S !== S;
    }
    function d(E, S) {
      this.message = E, this.data = S && typeof S == "object" ? S : {}, this.stack = "";
    }
    d.prototype = Error.prototype;
    function y(E) {
      if (process.env.NODE_ENV !== "production")
        var S = {}, j = 0;
      function k(D, A, I, z, M, L, ue) {
        if (z = z || h, L = L || I, ue !== r) {
          if (u) {
            var g = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw g.name = "Invariant Violation", g;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = z + ":" + I;
            !S[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            j < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), S[fe] = !0, j++);
          }
        }
        return A[I] == null ? D ? A[I] === null ? new d("The " + M + " `" + L + "` is marked as required " + ("in `" + z + "`, but its value is `null`.")) : new d("The " + M + " `" + L + "` is marked as required in " + ("`" + z + "`, but its value is `undefined`.")) : null : E(A, I, z, M, L);
      }
      var P = k.bind(null, !1);
      return P.isRequired = k.bind(null, !0), P;
    }
    function _(E) {
      function S(j, k, P, D, A, I) {
        var z = j[k], M = ee(z);
        if (M !== E) {
          var L = me(z);
          return new d(
            "Invalid " + D + " `" + A + "` of type " + ("`" + L + "` supplied to `" + P + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return y(S);
    }
    function $() {
      return y(s);
    }
    function T(E) {
      function S(j, k, P, D, A) {
        if (typeof E != "function")
          return new d("Property `" + A + "` of component `" + P + "` has invalid PropType notation inside arrayOf.");
        var I = j[k];
        if (!Array.isArray(I)) {
          var z = ee(I);
          return new d("Invalid " + D + " `" + A + "` of type " + ("`" + z + "` supplied to `" + P + "`, expected an array."));
        }
        for (var M = 0; M < I.length; M++) {
          var L = E(I, M, P, D, A + "[" + M + "]", r);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return y(S);
    }
    function x() {
      function E(S, j, k, P, D) {
        var A = S[j];
        if (!a(A)) {
          var I = ee(A);
          return new d("Invalid " + P + " `" + D + "` of type " + ("`" + I + "` supplied to `" + k + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(E);
    }
    function c() {
      function E(S, j, k, P, D) {
        var A = S[j];
        if (!e.isValidElementType(A)) {
          var I = ee(A);
          return new d("Invalid " + P + " `" + D + "` of type " + ("`" + I + "` supplied to `" + k + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(E);
    }
    function R(E) {
      function S(j, k, P, D, A) {
        if (!(j[k] instanceof E)) {
          var I = E.name || h, z = Pe(j[k]);
          return new d("Invalid " + D + " `" + A + "` of type " + ("`" + z + "` supplied to `" + P + "`, expected ") + ("instance of `" + I + "`."));
        }
        return null;
      }
      return y(S);
    }
    function w(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function S(j, k, P, D, A) {
        for (var I = j[k], z = 0; z < E.length; z++)
          if (b(I, E[z]))
            return null;
        var M = JSON.stringify(E, function(ue, g) {
          var fe = me(g);
          return fe === "symbol" ? String(g) : g;
        });
        return new d("Invalid " + D + " `" + A + "` of value `" + String(I) + "` " + ("supplied to `" + P + "`, expected one of " + M + "."));
      }
      return y(S);
    }
    function Q(E) {
      function S(j, k, P, D, A) {
        if (typeof E != "function")
          return new d("Property `" + A + "` of component `" + P + "` has invalid PropType notation inside objectOf.");
        var I = j[k], z = ee(I);
        if (z !== "object")
          return new d("Invalid " + D + " `" + A + "` of type " + ("`" + z + "` supplied to `" + P + "`, expected an object."));
        for (var M in I)
          if (n(I, M)) {
            var L = E(I, M, P, D, A + "." + M, r);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return y(S);
    }
    function X(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var S = 0; S < E.length; S++) {
        var j = E[S];
        if (typeof j != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(j) + " at index " + S + "."
          ), s;
      }
      function k(P, D, A, I, z) {
        for (var M = [], L = 0; L < E.length; L++) {
          var ue = E[L], g = ue(P, D, A, I, z, r);
          if (g == null)
            return null;
          g.data && n(g.data, "expectedType") && M.push(g.data.expectedType);
        }
        var fe = M.length > 0 ? ", expected one of type [" + M.join(", ") + "]" : "";
        return new d("Invalid " + I + " `" + z + "` supplied to " + ("`" + A + "`" + fe + "."));
      }
      return y(k);
    }
    function J() {
      function E(S, j, k, P, D) {
        return te(S[j]) ? null : new d("Invalid " + P + " `" + D + "` supplied to " + ("`" + k + "`, expected a ReactNode."));
      }
      return y(E);
    }
    function F(E, S, j, k, P) {
      return new d(
        (E || "React class") + ": " + S + " type `" + j + "." + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + P + "`."
      );
    }
    function Z(E) {
      function S(j, k, P, D, A) {
        var I = j[k], z = ee(I);
        if (z !== "object")
          return new d("Invalid " + D + " `" + A + "` of type `" + z + "` " + ("supplied to `" + P + "`, expected `object`."));
        for (var M in E) {
          var L = E[M];
          if (typeof L != "function")
            return F(P, D, A, M, me(L));
          var ue = L(I, M, P, D, A + "." + M, r);
          if (ue)
            return ue;
        }
        return null;
      }
      return y(S);
    }
    function ne(E) {
      function S(j, k, P, D, A) {
        var I = j[k], z = ee(I);
        if (z !== "object")
          return new d("Invalid " + D + " `" + A + "` of type `" + z + "` " + ("supplied to `" + P + "`, expected `object`."));
        var M = t({}, j[k], E);
        for (var L in M) {
          var ue = E[L];
          if (n(E, L) && typeof ue != "function")
            return F(P, D, A, L, me(ue));
          if (!ue)
            return new d(
              "Invalid " + D + " `" + A + "` key `" + L + "` supplied to `" + P + "`.\nBad object: " + JSON.stringify(j[k], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var g = ue(I, L, P, D, A + "." + L, r);
          if (g)
            return g;
        }
        return null;
      }
      return y(S);
    }
    function te(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(te);
          if (E === null || a(E))
            return !0;
          var S = m(E);
          if (S) {
            var j = S.call(E), k;
            if (S !== E.entries) {
              for (; !(k = j.next()).done; )
                if (!te(k.value))
                  return !1;
            } else
              for (; !(k = j.next()).done; ) {
                var P = k.value;
                if (P && !te(P[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function pe(E, S) {
      return E === "symbol" ? !0 : S ? S["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && S instanceof Symbol : !1;
    }
    function ee(E) {
      var S = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : pe(S, E) ? "symbol" : S;
    }
    function me(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var S = ee(E);
      if (S === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return S;
    }
    function oe(E) {
      var S = me(E);
      switch (S) {
        case "array":
        case "object":
          return "an " + S;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + S;
        default:
          return S;
      }
    }
    function Pe(E) {
      return !E.constructor || !E.constructor.name ? h : E.constructor.name;
    }
    return v.checkPropTypes = o, v.resetWarningCache = o.resetWarningCache, v.PropTypes = v, v;
  }, fr;
}
var dr, On;
function Ms() {
  if (On)
    return dr;
  On = 1;
  var e = jr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, dr = function() {
    function n(s, a, u, l, f, m) {
      if (m !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, dr;
}
if (process.env.NODE_ENV !== "production") {
  var ks = bo(), Is = !0;
  Er.exports = As()(ks.isElement, Is);
} else
  Er.exports = Ms()();
var js = Er.exports;
const p = /* @__PURE__ */ Hi(js);
let xr;
typeof document == "object" && (xr = ao({
  key: "css",
  prepend: !0
}));
function Eo(e) {
  const {
    injectFirst: t,
    children: r
  } = e;
  return t && xr ? /* @__PURE__ */ be(ms, {
    value: xr,
    children: r
  }) : r;
}
process.env.NODE_ENV !== "production" && (Eo.propTypes = {
  /**
   * Your component tree.
   */
  children: p.node,
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you want to override MUI's styles, set this prop.
   */
  injectFirst: p.bool
});
function Ds(e) {
  return e == null || Object.keys(e).length === 0;
}
function xo(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ be(yo, {
    styles: typeof t == "function" ? (o) => t(Ds(o) ? r : o) : t
  });
}
process.env.NODE_ENV !== "production" && (xo.propTypes = {
  defaultTheme: p.object,
  styles: p.oneOfType([p.array, p.string, p.object, p.func])
});
/**
 * @mui/styled-engine v5.15.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function zs(e, t) {
  const r = vr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
const Vs = (e, t) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}, Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GlobalStyles: xo,
  StyledEngineProvider: Eo,
  ThemeContext: Le,
  css: go,
  default: zs,
  internal_processStyles: Vs,
  keyframes: Ut
}, Symbol.toStringTag, { value: "Module" }));
function Ie(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function _o(e) {
  if (!Ie(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = _o(e[r]);
  }), t;
}
function Me(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? N({}, e) : e;
  return Ie(e) && Ie(t) && Object.keys(t).forEach((o) => {
    o !== "__proto__" && (Ie(t[o]) && o in e && Ie(e[o]) ? n[o] = Me(e[o], t[o], r) : r.clone ? n[o] = Ie(t[o]) ? _o(t[o]) : t[o] : n[o] = t[o]);
  }), n;
}
const Fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me,
  isPlainObject: Ie
}, Symbol.toStringTag, { value: "Module" })), Bs = ["values", "unit", "step"], Ws = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => N({}, r, {
    [n.key]: n.val
  }), {});
};
function To(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5
  } = e, o = _e(e, Bs), i = Ws(t), s = Object.keys(i);
  function a(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function u(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function l(h, v) {
    const b = s.indexOf(v);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(b !== -1 && typeof t[s[b]] == "number" ? t[s[b]] : v) - n / 100}${r})`;
  }
  function f(h) {
    return s.indexOf(h) + 1 < s.length ? l(h, s[s.indexOf(h) + 1]) : a(h);
  }
  function m(h) {
    const v = s.indexOf(h);
    return v === 0 ? a(s[1]) : v === s.length - 1 ? u(s[v]) : l(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return N({
    keys: s,
    values: i,
    up: a,
    down: u,
    between: l,
    only: f,
    not: m,
    unit: r
  }, o);
}
const Us = {
  borderRadius: 4
}, De = process.env.NODE_ENV !== "production" ? p.oneOfType([p.number, p.string, p.object, p.array]) : {};
function at(e, t) {
  return t ? Me(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Dr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Cn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Dr[e]}px)`
};
function ke(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Cn;
    return t.reduce((s, a, u) => (s[i.up(i.keys[u])] = r(t[u]), s), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Cn;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Dr).indexOf(a) !== -1) {
        const u = i.up(a);
        s[u] = r(t[a], a);
      } else {
        const u = a;
        s[u] = t[u];
      }
      return s;
    }, {});
  }
  return r(t);
}
function Ys(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function qs(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function de(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ut(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const Ks = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: de
}, Symbol.toStringTag, { value: "Module" }));
function Je(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function jt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = Je(e, r) || n, t && (o = t(o, n, e)), o;
}
function ae(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const a = s[t], u = s.theme, l = Je(u, n) || {};
    return ke(s, a, (m) => {
      let h = jt(l, o, m);
      return m === h && typeof m == "string" && (h = jt(l, o, `${t}${m === "default" ? "" : de(m)}`, m)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: De
  } : {}, i.filterProps = [t], i;
}
function Gs(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Hs = {
  m: "margin",
  p: "padding"
}, Xs = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Rn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Js = Gs((e) => {
  if (e.length > 2)
    if (Rn[e])
      e = Rn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Hs[t], o = Xs[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), Yt = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], qt = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Zs = [...Yt, ...qt];
function mt(e, t, r, n) {
  var o;
  const i = (o = Je(e, t, !1)) != null ? o : r;
  return typeof i == "number" ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && typeof s != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${s}.`), i * s) : Array.isArray(i) ? (s) => typeof s == "string" ? s : (process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > i.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${s} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`))), i[s]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function So(e) {
  return mt(e, "spacing", 8, "spacing");
}
function ht(e, t) {
  if (typeof t == "string" || t == null)
    return t;
  const r = Math.abs(t), n = e(r);
  return t >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Qs(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = ht(t, r), n), {});
}
function ea(e, t, r, n) {
  if (t.indexOf(r) === -1)
    return null;
  const o = Js(r), i = Qs(o, n), s = e[r];
  return ke(e, s, i);
}
function Oo(e, t) {
  const r = So(e.theme);
  return Object.keys(e).map((n) => ea(e, t, n, r)).reduce(at, {});
}
function ie(e) {
  return Oo(e, Yt);
}
ie.propTypes = process.env.NODE_ENV !== "production" ? Yt.reduce((e, t) => (e[t] = De, e), {}) : {};
ie.filterProps = Yt;
function se(e) {
  return Oo(e, qt);
}
se.propTypes = process.env.NODE_ENV !== "production" ? qt.reduce((e, t) => (e[t] = De, e), {}) : {};
se.filterProps = qt;
process.env.NODE_ENV !== "production" && Zs.reduce((e, t) => (e[t] = De, e), {});
function ta(e = 8) {
  if (e.mui)
    return e;
  const t = So({
    spacing: e
  }), r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function Kt(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? at(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Oe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Re(e, t) {
  return ae({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ra = Re("border", Oe), na = Re("borderTop", Oe), oa = Re("borderRight", Oe), ia = Re("borderBottom", Oe), sa = Re("borderLeft", Oe), aa = Re("borderColor"), ca = Re("borderTopColor"), ua = Re("borderRightColor"), la = Re("borderBottomColor"), fa = Re("borderLeftColor"), da = Re("outline", Oe), pa = Re("outlineColor"), Gt = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = mt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: ht(t, n)
    });
    return ke(e, e.borderRadius, r);
  }
  return null;
};
Gt.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: De
} : {};
Gt.filterProps = ["borderRadius"];
Kt(ra, na, oa, ia, sa, aa, ca, ua, la, fa, Gt, da, pa);
const Ht = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = mt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: ht(t, n)
    });
    return ke(e, e.gap, r);
  }
  return null;
};
Ht.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: De
} : {};
Ht.filterProps = ["gap"];
const Xt = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = mt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: ht(t, n)
    });
    return ke(e, e.columnGap, r);
  }
  return null;
};
Xt.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: De
} : {};
Xt.filterProps = ["columnGap"];
const Jt = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = mt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: ht(t, n)
    });
    return ke(e, e.rowGap, r);
  }
  return null;
};
Jt.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: De
} : {};
Jt.filterProps = ["rowGap"];
const ma = ae({
  prop: "gridColumn"
}), ha = ae({
  prop: "gridRow"
}), ya = ae({
  prop: "gridAutoFlow"
}), ga = ae({
  prop: "gridAutoColumns"
}), ba = ae({
  prop: "gridAutoRows"
}), va = ae({
  prop: "gridTemplateColumns"
}), Ea = ae({
  prop: "gridTemplateRows"
}), xa = ae({
  prop: "gridTemplateAreas"
}), _a = ae({
  prop: "gridArea"
});
Kt(Ht, Xt, Jt, ma, ha, ya, ga, ba, va, Ea, xa, _a);
function Ge(e, t) {
  return t === "grey" ? t : e;
}
const Ta = ae({
  prop: "color",
  themeKey: "palette",
  transform: Ge
}), Sa = ae({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ge
}), Oa = ae({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ge
});
Kt(Ta, Sa, Oa);
function Ee(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ca = ae({
  prop: "width",
  transform: Ee
}), zr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[r]) || Dr[r];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Ee(r)
      };
    };
    return ke(e, e.maxWidth, t);
  }
  return null;
};
zr.filterProps = ["maxWidth"];
const Ra = ae({
  prop: "minWidth",
  transform: Ee
}), wa = ae({
  prop: "height",
  transform: Ee
}), $a = ae({
  prop: "maxHeight",
  transform: Ee
}), Pa = ae({
  prop: "minHeight",
  transform: Ee
});
ae({
  prop: "size",
  cssProperty: "width",
  transform: Ee
});
ae({
  prop: "size",
  cssProperty: "height",
  transform: Ee
});
const Na = ae({
  prop: "boxSizing"
});
Kt(Ca, zr, Ra, wa, $a, Pa, Na);
const yt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Oe
  },
  borderTop: {
    themeKey: "borders",
    transform: Oe
  },
  borderRight: {
    themeKey: "borders",
    transform: Oe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Oe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Oe
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Oe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Gt
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ge
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ge
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ge
  },
  // spacing
  p: {
    style: se
  },
  pt: {
    style: se
  },
  pr: {
    style: se
  },
  pb: {
    style: se
  },
  pl: {
    style: se
  },
  px: {
    style: se
  },
  py: {
    style: se
  },
  padding: {
    style: se
  },
  paddingTop: {
    style: se
  },
  paddingRight: {
    style: se
  },
  paddingBottom: {
    style: se
  },
  paddingLeft: {
    style: se
  },
  paddingX: {
    style: se
  },
  paddingY: {
    style: se
  },
  paddingInline: {
    style: se
  },
  paddingInlineStart: {
    style: se
  },
  paddingInlineEnd: {
    style: se
  },
  paddingBlock: {
    style: se
  },
  paddingBlockStart: {
    style: se
  },
  paddingBlockEnd: {
    style: se
  },
  m: {
    style: ie
  },
  mt: {
    style: ie
  },
  mr: {
    style: ie
  },
  mb: {
    style: ie
  },
  ml: {
    style: ie
  },
  mx: {
    style: ie
  },
  my: {
    style: ie
  },
  margin: {
    style: ie
  },
  marginTop: {
    style: ie
  },
  marginRight: {
    style: ie
  },
  marginBottom: {
    style: ie
  },
  marginLeft: {
    style: ie
  },
  marginX: {
    style: ie
  },
  marginY: {
    style: ie
  },
  marginInline: {
    style: ie
  },
  marginInlineStart: {
    style: ie
  },
  marginInlineEnd: {
    style: ie
  },
  marginBlock: {
    style: ie
  },
  marginBlockStart: {
    style: ie
  },
  marginBlockEnd: {
    style: ie
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ht
  },
  rowGap: {
    style: Jt
  },
  columnGap: {
    style: Xt
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ee
  },
  maxWidth: {
    style: zr
  },
  minWidth: {
    transform: Ee
  },
  height: {
    transform: Ee
  },
  maxHeight: {
    transform: Ee
  },
  minHeight: {
    transform: Ee
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Aa(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Ma(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Co() {
  function e(r, n, o, i) {
    const s = {
      [r]: n,
      theme: o
    }, a = i[r];
    if (!a)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: l,
      transform: f,
      style: m
    } = a;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = Je(o, l) || {};
    return m ? m(s) : ke(s, n, (b) => {
      let d = jt(h, f, b);
      return b === d && typeof b == "string" && (d = jt(h, f, `${r}${b === "default" ? "" : de(b)}`, b)), u === !1 ? d : {
        [u]: d
      };
    });
  }
  function t(r) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = r || {};
    if (!o)
      return null;
    const s = (n = i.unstable_sxConfig) != null ? n : yt;
    function a(u) {
      let l = u;
      if (typeof u == "function")
        l = u(i);
      else if (typeof u != "object")
        return u;
      if (!l)
        return null;
      const f = Ys(i.breakpoints), m = Object.keys(f);
      let h = f;
      return Object.keys(l).forEach((v) => {
        const b = Ma(l[v], i);
        if (b != null)
          if (typeof b == "object")
            if (s[v])
              h = at(h, e(v, b, i, s));
            else {
              const d = ke({
                theme: i
              }, b, (y) => ({
                [v]: y
              }));
              Aa(d, b) ? h[v] = t({
                sx: b,
                theme: i
              }) : h = at(h, d);
            }
          else
            h = at(h, e(v, b, i, s));
      }), qs(m, h);
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Zt = Co();
Zt.filterProps = ["sx"];
function Ro(e, t) {
  const r = this;
  return r.vars && typeof r.getColorSchemeSelector == "function" ? {
    [r.getColorSchemeSelector(e).replace(/(\[[^\]]+\])/, "*:where($1)")]: t
  } : r.palette.mode === e ? t : {};
}
const ka = ["breakpoints", "palette", "spacing", "shape"];
function Vr(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, s = _e(e, ka), a = To(r), u = ta(o);
  let l = Me({
    breakpoints: a,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: N({
      mode: "light"
    }, n),
    spacing: u,
    shape: N({}, Us, i)
  }, s);
  return l.applyStyles = Ro, l = t.reduce((f, m) => Me(f, m), l), l.unstable_sxConfig = N({}, yt, s == null ? void 0 : s.unstable_sxConfig), l.unstable_sx = function(m) {
    return Zt({
      sx: m,
      theme: this
    });
  }, l;
}
const Ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vr,
  private_createBreakpoints: To,
  unstable_applyStyles: Ro
}, Symbol.toStringTag, { value: "Module" }));
function ja(e) {
  return Object.keys(e).length === 0;
}
function Da(e = null) {
  const t = O.useContext(Le);
  return !t || ja(t) ? e : t;
}
const za = Vr();
function Va(e = za) {
  return Da(e);
}
const La = ["sx"], Fa = (e) => {
  var t, r;
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = (t = e == null || (r = e.theme) == null ? void 0 : r.unstable_sxConfig) != null ? t : yt;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function wo(e) {
  const {
    sx: t
  } = e, r = _e(e, La), {
    systemProps: n,
    otherProps: o
  } = Fa(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...s) => {
    const a = t(...s);
    return Ie(a) ? N({}, n, a) : n;
  } : i = N({}, n, t), N({}, o, {
    sx: i
  });
}
const Ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt,
  extendSxProp: wo,
  unstable_createStyleFunctionSx: Co,
  unstable_defaultSxConfig: yt
}, Symbol.toStringTag, { value: "Module" })), wn = (e) => e, Wa = () => {
  let e = wn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = wn;
    }
  };
}, Ua = Wa();
function $o(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = $o(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function ge() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = $o(e)) && (n && (n += " "), n += t);
  return n;
}
const Ya = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Qe(e, t, r = "Mui") {
  const n = Ya[t];
  return n ? `${r}-${n}` : `${Ua.generate(e)}-${t}`;
}
function gt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Qe(e, o, r);
  }), n;
}
var _r = { exports: {} }, G = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $n;
function qa() {
  if ($n)
    return G;
  $n = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function d(y) {
    if (typeof y == "object" && y !== null) {
      var _ = y.$$typeof;
      switch (_) {
        case e:
          switch (y = y.type, y) {
            case r:
            case o:
            case n:
            case l:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case a:
                case s:
                case u:
                case h:
                case m:
                case i:
                  return y;
                default:
                  return _;
              }
          }
        case t:
          return _;
      }
    }
  }
  return G.ContextConsumer = s, G.ContextProvider = i, G.Element = e, G.ForwardRef = u, G.Fragment = r, G.Lazy = h, G.Memo = m, G.Portal = t, G.Profiler = o, G.StrictMode = n, G.Suspense = l, G.SuspenseList = f, G.isAsyncMode = function() {
    return !1;
  }, G.isConcurrentMode = function() {
    return !1;
  }, G.isContextConsumer = function(y) {
    return d(y) === s;
  }, G.isContextProvider = function(y) {
    return d(y) === i;
  }, G.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, G.isForwardRef = function(y) {
    return d(y) === u;
  }, G.isFragment = function(y) {
    return d(y) === r;
  }, G.isLazy = function(y) {
    return d(y) === h;
  }, G.isMemo = function(y) {
    return d(y) === m;
  }, G.isPortal = function(y) {
    return d(y) === t;
  }, G.isProfiler = function(y) {
    return d(y) === o;
  }, G.isStrictMode = function(y) {
    return d(y) === n;
  }, G.isSuspense = function(y) {
    return d(y) === l;
  }, G.isSuspenseList = function(y) {
    return d(y) === f;
  }, G.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === o || y === n || y === l || y === f || y === v || typeof y == "object" && y !== null && (y.$$typeof === h || y.$$typeof === m || y.$$typeof === i || y.$$typeof === s || y.$$typeof === u || y.$$typeof === b || y.getModuleId !== void 0);
  }, G.typeOf = d, G;
}
var H = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pn;
function Ka() {
  return Pn || (Pn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), a = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), b = !1, d = !1, y = !1, _ = !1, $ = !1, T;
    T = Symbol.for("react.module.reference");
    function x(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === r || C === o || $ || C === n || C === l || C === f || _ || C === v || b || d || y || typeof C == "object" && C !== null && (C.$$typeof === h || C.$$typeof === m || C.$$typeof === i || C.$$typeof === s || C.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === T || C.getModuleId !== void 0));
    }
    function c(C) {
      if (typeof C == "object" && C !== null) {
        var we = C.$$typeof;
        switch (we) {
          case e:
            var Fe = C.type;
            switch (Fe) {
              case r:
              case o:
              case n:
              case l:
              case f:
                return Fe;
              default:
                var Et = Fe && Fe.$$typeof;
                switch (Et) {
                  case a:
                  case s:
                  case u:
                  case h:
                  case m:
                  case i:
                    return Et;
                  default:
                    return we;
                }
            }
          case t:
            return we;
        }
      }
    }
    var R = s, w = i, Q = e, X = u, J = r, F = h, Z = m, ne = t, te = o, pe = n, ee = l, me = f, oe = !1, Pe = !1;
    function E(C) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function S(C) {
      return Pe || (Pe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function j(C) {
      return c(C) === s;
    }
    function k(C) {
      return c(C) === i;
    }
    function P(C) {
      return typeof C == "object" && C !== null && C.$$typeof === e;
    }
    function D(C) {
      return c(C) === u;
    }
    function A(C) {
      return c(C) === r;
    }
    function I(C) {
      return c(C) === h;
    }
    function z(C) {
      return c(C) === m;
    }
    function M(C) {
      return c(C) === t;
    }
    function L(C) {
      return c(C) === o;
    }
    function ue(C) {
      return c(C) === n;
    }
    function g(C) {
      return c(C) === l;
    }
    function fe(C) {
      return c(C) === f;
    }
    H.ContextConsumer = R, H.ContextProvider = w, H.Element = Q, H.ForwardRef = X, H.Fragment = J, H.Lazy = F, H.Memo = Z, H.Portal = ne, H.Profiler = te, H.StrictMode = pe, H.Suspense = ee, H.SuspenseList = me, H.isAsyncMode = E, H.isConcurrentMode = S, H.isContextConsumer = j, H.isContextProvider = k, H.isElement = P, H.isForwardRef = D, H.isFragment = A, H.isLazy = I, H.isMemo = z, H.isPortal = M, H.isProfiler = L, H.isStrictMode = ue, H.isSuspense = g, H.isSuspenseList = fe, H.isValidElementType = x, H.typeOf = c;
  }()), H;
}
process.env.NODE_ENV === "production" ? _r.exports = qa() : _r.exports = Ka();
var Nn = _r.exports;
const Ga = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function Po(e) {
  const t = `${e}`.match(Ga);
  return t && t[1] || "";
}
function No(e, t = "") {
  return e.displayName || e.name || Po(e) || t;
}
function An(e, t, r) {
  const n = No(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Ha(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return No(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Nn.ForwardRef:
          return An(e, e.render, "ForwardRef");
        case Nn.Memo:
          return An(e, e.type, "memo");
        default:
          return;
      }
  }
}
const Xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ha,
  getFunctionName: Po
}, Symbol.toStringTag, { value: "Module" }));
function Lr(e, t) {
  const r = N({}, t);
  return Object.keys(e).forEach((n) => {
    if (n.toString().match(/^(components|slots)$/))
      r[n] = N({}, e[n], r[n]);
    else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[n] || {}, i = t[n];
      r[n] = {}, !i || !Object.keys(i) ? r[n] = o : !o || !Object.keys(o) ? r[n] = i : (r[n] = N({}, i), Object.keys(o).forEach((s) => {
        r[n][s] = Lr(o[s], i[s]);
      }));
    } else
      r[n] === void 0 && (r[n] = e[n]);
  }), r;
}
function Ja(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  return !t || !t.components || !t.components[r] || !t.components[r].defaultProps ? n : Lr(t.components[r].defaultProps, n);
}
function Za({
  props: e,
  name: t,
  defaultTheme: r,
  themeId: n
}) {
  let o = Va(r);
  return n && (o = o[n] || o), Ja({
    theme: o,
    name: t,
    props: e
  });
}
const Qa = typeof window < "u" ? O.useLayoutEffect : O.useEffect;
function ec(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
const tc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ec
}, Symbol.toStringTag, { value: "Module" }));
function rc(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function nc(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function oc(e, t, r, n, o) {
  const i = e[t], s = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let a;
  return typeof i == "function" && !nc(i) && (a = "Did you accidentally provide a plain function component instead?"), a !== void 0 ? new Error(`Invalid ${n} \`${s}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${a} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ao = rc(p.elementType, oc), ic = p.oneOfType([p.func, p.object]);
function sc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function St(e) {
  const t = O.useRef(e);
  return Qa(() => {
    t.current = e;
  }), O.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Tr(...e) {
  return O.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      sc(r, t);
    });
  }, e);
}
const Mn = {};
function ac(e, t) {
  const r = O.useRef(Mn);
  return r.current === Mn && (r.current = e(t)), r;
}
const cc = [];
function uc(e) {
  O.useEffect(e, cc);
}
class Qt {
  constructor() {
    this.currentId = null, this.clear = () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new Qt();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function lc() {
  const e = ac(Qt.create).current;
  return uc(e.disposeEffect), e;
}
let er = !0, Sr = !1;
const fc = new Qt(), dc = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function pc(e) {
  const {
    type: t,
    tagName: r
  } = e;
  return !!(r === "INPUT" && dc[t] && !e.readOnly || r === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function mc(e) {
  e.metaKey || e.altKey || e.ctrlKey || (er = !0);
}
function pr() {
  er = !1;
}
function hc() {
  this.visibilityState === "hidden" && Sr && (er = !0);
}
function yc(e) {
  e.addEventListener("keydown", mc, !0), e.addEventListener("mousedown", pr, !0), e.addEventListener("pointerdown", pr, !0), e.addEventListener("touchstart", pr, !0), e.addEventListener("visibilitychange", hc, !0);
}
function gc(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible");
  } catch {
  }
  return er || pc(t);
}
function Mo() {
  const e = O.useCallback((o) => {
    o != null && yc(o.ownerDocument);
  }, []), t = O.useRef(!1);
  function r() {
    return t.current ? (Sr = !0, fc.start(100, () => {
      Sr = !1;
    }), t.current = !1, !0) : !1;
  }
  function n(o) {
    return gc(o) ? (t.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: t,
    onFocus: n,
    onBlur: r,
    ref: e
  };
}
function tr(e, t, r = void 0) {
  const n = {};
  return Object.keys(e).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (o) => {
      n[o] = e[o].reduce((i, s) => {
        if (s) {
          const a = t(s);
          a !== "" && i.push(a), r && r[s] && i.push(r[s]);
        }
        return i;
      }, []).join(" ");
    }
  ), n;
}
function bc(e, t) {
  return N({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t);
}
var ce = {}, ko = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(ko);
var Io = ko.exports;
const vc = /* @__PURE__ */ je(di), Ec = /* @__PURE__ */ je(tc);
var jo = Io;
Object.defineProperty(ce, "__esModule", {
  value: !0
});
var st = ce.alpha = Lo;
ce.blend = Ac;
ce.colorChannel = void 0;
var xc = ce.darken = Br;
ce.decomposeColor = Ce;
ce.emphasize = Fo;
var kn = ce.getContrastRatio = Rc;
ce.getLuminance = Dt;
ce.hexToRgb = Do;
ce.hslToRgb = Vo;
var _c = ce.lighten = Wr;
ce.private_safeAlpha = wc;
ce.private_safeColorChannel = void 0;
ce.private_safeDarken = $c;
ce.private_safeEmphasize = Nc;
ce.private_safeLighten = Pc;
ce.recomposeColor = et;
ce.rgbToHex = Cc;
var In = jo(vc), Tc = jo(Ec);
function Fr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), (0, Tc.default)(e, t, r);
}
function Do(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Sc(e) {
  const t = e.toString(16);
  return t.length === 1 ? `0${t}` : t;
}
function Ce(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ce(Do(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(r) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : (0, In.default)(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : (0, In.default)(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const zo = (e) => {
  const t = Ce(e);
  return t.values.slice(0, 3).map((r, n) => t.type.indexOf("hsl") !== -1 && n !== 0 ? `${r}%` : r).join(" ");
};
ce.colorChannel = zo;
const Oc = (e, t) => {
  try {
    return zo(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
ce.private_safeColorChannel = Oc;
function et(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.indexOf("color") !== -1 ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Cc(e) {
  if (e.indexOf("#") === 0)
    return e;
  const {
    values: t
  } = Ce(e);
  return `#${t.map((r, n) => Sc(n === 3 ? Math.round(255 * r) : r)).join("")}`;
}
function Vo(e) {
  e = Ce(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (l, f = (l + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let a = "rgb";
  const u = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", u.push(t[3])), et({
    type: a,
    values: u
  });
}
function Dt(e) {
  e = Ce(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ce(Vo(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Rc(e, t) {
  const r = Dt(e), n = Dt(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Lo(e, t) {
  return e = Ce(e), t = Fr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, et(e);
}
function wc(e, t, r) {
  try {
    return Lo(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Br(e, t) {
  if (e = Ce(e), t = Fr(t), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return et(e);
}
function $c(e, t, r) {
  try {
    return Br(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Wr(e, t) {
  if (e = Ce(e), t = Fr(t), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return et(e);
}
function Pc(e, t, r) {
  try {
    return Wr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Fo(e, t = 0.15) {
  return Dt(e) > 0.5 ? Br(e, t) : Wr(e, t);
}
function Nc(e, t, r) {
  try {
    return Fo(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Ac(e, t, r, n = 1) {
  const o = (u, l) => Math.round((u ** (1 / n) * (1 - r) + l ** (1 / n) * r) ** n), i = Ce(e), s = Ce(t), a = [o(i.values[0], s.values[0]), o(i.values[1], s.values[1]), o(i.values[2], s.values[2])];
  return et({
    type: "rgb",
    values: a
  });
}
const Mc = ["mode", "contrastThreshold", "tonalOffset"], jn = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: ct.white,
    default: ct.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, mr = {
  text: {
    primary: ct.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: ct.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function Dn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = _c(e.main, o) : t === "dark" && (e.dark = xc(e.main, i)));
}
function kc(e = "light") {
  return e === "dark" ? {
    main: Ue[200],
    light: Ue[50],
    dark: Ue[400]
  } : {
    main: Ue[700],
    light: Ue[400],
    dark: Ue[800]
  };
}
function Ic(e = "light") {
  return e === "dark" ? {
    main: We[200],
    light: We[50],
    dark: We[400]
  } : {
    main: We[500],
    light: We[300],
    dark: We[700]
  };
}
function jc(e = "light") {
  return e === "dark" ? {
    main: Be[500],
    light: Be[300],
    dark: Be[700]
  } : {
    main: Be[700],
    light: Be[400],
    dark: Be[800]
  };
}
function Dc(e = "light") {
  return e === "dark" ? {
    main: Ye[400],
    light: Ye[300],
    dark: Ye[700]
  } : {
    main: Ye[700],
    light: Ye[500],
    dark: Ye[900]
  };
}
function zc(e = "light") {
  return e === "dark" ? {
    main: qe[400],
    light: qe[300],
    dark: qe[700]
  } : {
    main: qe[800],
    light: qe[500],
    dark: qe[900]
  };
}
function Vc(e = "light") {
  return e === "dark" ? {
    main: nt[400],
    light: nt[300],
    dark: nt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: nt[500],
    dark: nt[900]
  };
}
function Lc(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2
  } = e, o = _e(e, Mc), i = e.primary || kc(t), s = e.secondary || Ic(t), a = e.error || jc(t), u = e.info || Dc(t), l = e.success || zc(t), f = e.warning || Vc(t);
  function m(d) {
    const y = kn(d, mr.text.primary) >= r ? mr.text.primary : jn.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const _ = kn(d, y);
      _ < 3 && console.error([`MUI: The contrast ratio of ${_}:1 for ${y} on ${d}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return y;
  }
  const h = ({
    color: d,
    name: y,
    mainShade: _ = 500,
    lightShade: $ = 300,
    darkShade: T = 700
  }) => {
    if (d = N({}, d), !d.main && d[_] && (d.main = d[_]), !d.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${_}\` property.` : ut(11, y ? ` (${y})` : "", _));
    if (typeof d.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${y ? ` (${y})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(d.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ut(12, y ? ` (${y})` : "", JSON.stringify(d.main)));
    return Dn(d, "light", $, n), Dn(d, "dark", T, n), d.contrastText || (d.contrastText = m(d.main)), d;
  }, v = {
    dark: mr,
    light: jn
  };
  return process.env.NODE_ENV !== "production" && (v[t] || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Me(N({
    // A collection of common colors.
    common: N({}, ct),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: a,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: fi,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, v[t]), o);
}
const Fc = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function Bc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const zn = {
  textTransform: "uppercase"
}, Vn = '"Roboto", "Helvetica", "Arial", sans-serif';
function Wc(e, t) {
  const r = typeof t == "function" ? t(e) : t, {
    fontFamily: n = Vn,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: s = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: m
  } = r, h = _e(r, Fc);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const v = o / 14, b = m || ((_) => `${_ / l * v}rem`), d = (_, $, T, x, c) => N({
    fontFamily: n,
    fontWeight: _,
    fontSize: b($),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: T
  }, n === Vn ? {
    letterSpacing: `${Bc(x / $)}em`
  } : {}, c, f), y = {
    h1: d(i, 96, 1.167, -1.5),
    h2: d(i, 60, 1.2, -0.5),
    h3: d(s, 48, 1.167, 0),
    h4: d(s, 34, 1.235, 0.25),
    h5: d(s, 24, 1.334, 0),
    h6: d(a, 20, 1.6, 0.15),
    subtitle1: d(s, 16, 1.75, 0.15),
    subtitle2: d(a, 14, 1.57, 0.1),
    body1: d(s, 16, 1.5, 0.15),
    body2: d(s, 14, 1.43, 0.15),
    button: d(a, 14, 1.75, 0.4, zn),
    caption: d(s, 12, 1.66, 0.4),
    overline: d(s, 12, 2.66, 1, zn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Me(N({
    htmlFontSize: l,
    pxToRem: b,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: u
  }, y), h, {
    clone: !1
    // No need to clone deep
  });
}
const Uc = 0.2, Yc = 0.14, qc = 0.12;
function re(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Uc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Yc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${qc})`].join(",");
}
const Kc = ["none", re(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), re(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), re(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), re(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), re(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), re(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), re(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), re(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), re(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), re(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), re(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), re(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), re(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), re(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), re(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), re(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), re(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), re(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), re(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), re(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), re(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), re(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), re(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), re(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Gc = ["duration", "easing", "delay"], Hc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Xc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Ln(e) {
  return `${Math.round(e)}ms`;
}
function Jc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function Zc(e) {
  const t = N({}, Hc, e.easing), r = N({}, Xc, e.duration);
  return N({
    getAutoHeightDuration: Jc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: a = t.easeInOut,
        delay: u = 0
      } = i, l = _e(i, Gc);
      if (process.env.NODE_ENV !== "production") {
        const f = (h) => typeof h == "string", m = (h) => !isNaN(parseFloat(h));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(a) || console.error('MUI: Argument "easing" must be a string.'), !m(u) && !f(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : Ln(s)} ${a} ${typeof u == "string" ? u : Ln(u)}`).join(",");
    }
  }, e, {
    easing: t,
    duration: r
  });
}
const Qc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, eu = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function tu(e = {}, ...t) {
  const {
    mixins: r = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = _e(e, eu);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : ut(18));
  const a = Lc(n), u = Vr(e);
  let l = Me(u, {
    mixins: bc(u.breakpoints, r),
    palette: a,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Kc.slice(),
    typography: Wc(a, i),
    transitions: Zc(o),
    zIndex: N({}, Qc)
  });
  if (l = Me(l, s), l = t.reduce((f, m) => Me(f, m), l), process.env.NODE_ENV !== "production") {
    const f = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], m = (h, v) => {
      let b;
      for (b in h) {
        const d = h[b];
        if (f.indexOf(b) !== -1 && Object.keys(d).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const y = Qe("", b);
            console.error([`MUI: The \`${v}\` component increases the CSS specificity of the \`${b}\` internal state.`, "You can not override it like this: ", JSON.stringify(h, null, 2), "", `Instead, you need to use the '&.${y}' syntax:`, JSON.stringify({
              root: {
                [`&.${y}`]: d
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          h[b] = {};
        }
      }
    };
    Object.keys(l.components).forEach((h) => {
      const v = l.components[h].styleOverrides;
      v && h.indexOf("Mui") === 0 && m(v, h);
    });
  }
  return l.unstable_sxConfig = N({}, yt, s == null ? void 0 : s.unstable_sxConfig), l.unstable_sx = function(m) {
    return Zt({
      sx: m,
      theme: this
    });
  }, l;
}
const Bo = tu();
function bt({
  props: e,
  name: t
}) {
  return Za({
    props: e,
    name: t,
    defaultTheme: Bo,
    themeId: Zn
  });
}
var vt = {}, hr = { exports: {} }, Fn;
function ru() {
  return Fn || (Fn = 1, function(e) {
    function t(r, n) {
      if (r == null)
        return {};
      var o = {};
      for (var i in r)
        if (Object.prototype.hasOwnProperty.call(r, i)) {
          if (n.indexOf(i) >= 0)
            continue;
          o[i] = r[i];
        }
      return o;
    }
    e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
  }(hr)), hr.exports;
}
const nu = /* @__PURE__ */ je(Ls), ou = /* @__PURE__ */ je(Fs), iu = /* @__PURE__ */ je(Ks), su = /* @__PURE__ */ je(Xa), au = /* @__PURE__ */ je(Ia), cu = /* @__PURE__ */ je(Ba);
var tt = Io;
Object.defineProperty(vt, "__esModule", {
  value: !0
});
var uu = vt.default = Tu;
vt.shouldForwardProp = At;
vt.systemDefaultTheme = void 0;
var Te = tt(ho()), Or = tt(ru()), Bn = bu(nu), lu = ou, fu = tt(iu), du = tt(su), pu = tt(au), mu = tt(cu);
const hu = ["ownerState"], yu = ["variants"], gu = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Wo(e) {
  if (typeof WeakMap != "function")
    return null;
  var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  return (Wo = function(n) {
    return n ? r : t;
  })(e);
}
function bu(e, t) {
  if (e && e.__esModule)
    return e;
  if (e === null || typeof e != "object" && typeof e != "function")
    return { default: e };
  var r = Wo(t);
  if (r && r.has(e))
    return r.get(e);
  var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var i in e)
    if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
      var s = o ? Object.getOwnPropertyDescriptor(e, i) : null;
      s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i];
    }
  return n.default = e, r && r.set(e, n), n;
}
function vu(e) {
  return Object.keys(e).length === 0;
}
function Eu(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function At(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const xu = vt.systemDefaultTheme = (0, pu.default)(), Wn = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function Ot({
  defaultTheme: e,
  theme: t,
  themeId: r
}) {
  return vu(t) ? e : t[r] || t;
}
function _u(e) {
  return e ? (t, r) => r[e] : null;
}
function Mt(e, t) {
  let {
    ownerState: r
  } = t, n = (0, Or.default)(t, hu);
  const o = typeof e == "function" ? e((0, Te.default)({
    ownerState: r
  }, n)) : e;
  if (Array.isArray(o))
    return o.flatMap((i) => Mt(i, (0, Te.default)({
      ownerState: r
    }, n)));
  if (o && typeof o == "object" && Array.isArray(o.variants)) {
    const {
      variants: i = []
    } = o;
    let a = (0, Or.default)(o, yu);
    return i.forEach((u) => {
      let l = !0;
      typeof u.props == "function" ? l = u.props((0, Te.default)({
        ownerState: r
      }, n, r)) : Object.keys(u.props).forEach((f) => {
        (r == null ? void 0 : r[f]) !== u.props[f] && n[f] !== u.props[f] && (l = !1);
      }), l && (Array.isArray(a) || (a = [a]), a.push(typeof u.style == "function" ? u.style((0, Te.default)({
        ownerState: r
      }, n, r)) : u.style));
    }), a;
  }
  return o;
}
function Tu(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = xu,
    rootShouldForwardProp: n = At,
    slotShouldForwardProp: o = At
  } = e, i = (s) => (0, mu.default)((0, Te.default)({}, s, {
    theme: Ot((0, Te.default)({}, s, {
      defaultTheme: r,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, a = {}) => {
    (0, Bn.internal_processStyles)(s, (c) => c.filter((R) => !(R != null && R.__mui_systemSx)));
    const {
      name: u,
      slot: l,
      skipVariantsResolver: f,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = _u(Wn(l))
    } = a, v = (0, Or.default)(a, gu), b = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), d = m || !1;
    let y;
    process.env.NODE_ENV !== "production" && u && (y = `${u}-${Wn(l || "Root")}`);
    let _ = At;
    l === "Root" || l === "root" ? _ = n : l ? _ = o : Eu(s) && (_ = void 0);
    const $ = (0, Bn.default)(s, (0, Te.default)({
      shouldForwardProp: _,
      label: y
    }, v)), T = (c) => typeof c == "function" && c.__emotion_real !== c || (0, lu.isPlainObject)(c) ? (R) => Mt(c, (0, Te.default)({}, R, {
      theme: Ot({
        theme: R.theme,
        defaultTheme: r,
        themeId: t
      })
    })) : c, x = (c, ...R) => {
      let w = T(c);
      const Q = R ? R.map(T) : [];
      u && h && Q.push((F) => {
        const Z = Ot((0, Te.default)({}, F, {
          defaultTheme: r,
          themeId: t
        }));
        if (!Z.components || !Z.components[u] || !Z.components[u].styleOverrides)
          return null;
        const ne = Z.components[u].styleOverrides, te = {};
        return Object.entries(ne).forEach(([pe, ee]) => {
          te[pe] = Mt(ee, (0, Te.default)({}, F, {
            theme: Z
          }));
        }), h(F, te);
      }), u && !b && Q.push((F) => {
        var Z;
        const ne = Ot((0, Te.default)({}, F, {
          defaultTheme: r,
          themeId: t
        })), te = ne == null || (Z = ne.components) == null || (Z = Z[u]) == null ? void 0 : Z.variants;
        return Mt({
          variants: te
        }, (0, Te.default)({}, F, {
          theme: ne
        }));
      }), d || Q.push(i);
      const X = Q.length - R.length;
      if (Array.isArray(c) && X > 0) {
        const F = new Array(X).fill("");
        w = [...c, ...F], w.raw = [...c.raw, ...F];
      }
      const J = $(w, ...Q);
      if (process.env.NODE_ENV !== "production") {
        let F;
        u && (F = `${u}${(0, fu.default)(l || "")}`), F === void 0 && (F = `Styled(${(0, du.default)(s)})`), J.displayName = F;
      }
      return s.muiName && (J.muiName = s.muiName), J;
    };
    return $.withConfig && (x.withConfig = $.withConfig), x;
  };
}
function Su(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Uo = (e) => Su(e) && e !== "classes", ze = uu({
  themeId: Zn,
  defaultTheme: Bo,
  rootShouldForwardProp: Uo
});
function Cr(e, t) {
  return Cr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, Cr(e, t);
}
function Ou(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Cr(e, t);
}
const Un = it.createContext(null);
function Cu(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ur(e, t) {
  var r = function(i) {
    return t && Rt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && li.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Ru(e, t) {
  e = e || {}, t = t || {};
  function r(f) {
    return f in t ? t[f] : e[f];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var s, a = {};
  for (var u in t) {
    if (n[u])
      for (s = 0; s < n[u].length; s++) {
        var l = n[u][s];
        a[n[u][s]] = r(l);
      }
    a[u] = r(u);
  }
  for (s = 0; s < o.length; s++)
    a[o[s]] = r(o[s]);
  return a;
}
function Ve(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function wu(e, t) {
  return Ur(e.children, function(r) {
    return wt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: Ve(r, "appear", e),
      enter: Ve(r, "enter", e),
      exit: Ve(r, "exit", e)
    });
  });
}
function $u(e, t, r) {
  var n = Ur(e.children), o = Ru(t, n);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (Rt(s)) {
      var a = i in t, u = i in n, l = t[i], f = Rt(l) && !l.props.in;
      u && (!a || f) ? o[i] = wt(s, {
        onExited: r.bind(null, s),
        in: !0,
        exit: Ve(s, "exit", e),
        enter: Ve(s, "enter", e)
      }) : !u && a && !f ? o[i] = wt(s, {
        in: !1
      }) : u && a && Rt(l) && (o[i] = wt(s, {
        onExited: r.bind(null, s),
        in: l.props.in,
        exit: Ve(s, "exit", e),
        enter: Ve(s, "enter", e)
      }));
    }
  }), o;
}
var Pu = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Nu = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, Yr = /* @__PURE__ */ function(e) {
  Ou(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var s = i.handleExited.bind(Cu(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var s = i.children, a = i.handleExited, u = i.firstRender;
    return {
      children: u ? wu(o, a) : $u(o, s, a),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var s = Ur(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
      var u = N({}, a.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, s = o.childFactory, a = _e(o, ["component", "childFactory"]), u = this.state.contextValue, l = Pu(this.state.children).map(s);
    return delete a.appear, delete a.enter, delete a.exit, i === null ? /* @__PURE__ */ it.createElement(Un.Provider, {
      value: u
    }, l) : /* @__PURE__ */ it.createElement(Un.Provider, {
      value: u
    }, /* @__PURE__ */ it.createElement(i, a, l));
  }, t;
}(it.Component);
Yr.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: p.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: p.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: p.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: p.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: p.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: p.func
} : {};
Yr.defaultProps = Nu;
function Yo(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: u,
    timeout: l
  } = e, [f, m] = O.useState(!1), h = ge(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), v = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, b = ge(r.child, f && r.childLeaving, n && r.childPulsate);
  return !a && !f && m(!0), O.useEffect(() => {
    if (!a && u != null) {
      const d = setTimeout(u, l);
      return () => {
        clearTimeout(d);
      };
    }
  }, [u, a, l]), /* @__PURE__ */ be("span", {
    className: h,
    style: v,
    children: /* @__PURE__ */ be("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (Yo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object.isRequired,
  className: p.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: p.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: p.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: p.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: p.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: p.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: p.number,
  /**
   * exit delay
   */
  timeout: p.number.isRequired
});
const Se = gt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Au = ["center", "classes", "className"];
let rr = (e) => e, Yn, qn, Kn, Gn;
const Rr = 550, Mu = 80, ku = Ut(Yn || (Yn = rr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), Iu = Ut(qn || (qn = rr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), ju = Ut(Kn || (Kn = rr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Du = ze("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), zu = ze(Yo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Gn || (Gn = rr`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), Se.rippleVisible, ku, Rr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Se.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, Se.child, Se.childLeaving, Iu, Rr, ({
  theme: e
}) => e.transitions.easing.easeInOut, Se.childPulsate, ju, ({
  theme: e
}) => e.transitions.easing.easeInOut), qo = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = bt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: s
  } = n, a = _e(n, Au), [u, l] = O.useState([]), f = O.useRef(0), m = O.useRef(null);
  O.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [u]);
  const h = O.useRef(!1), v = lc(), b = O.useRef(null), d = O.useRef(null), y = O.useCallback((x) => {
    const {
      pulsate: c,
      rippleX: R,
      rippleY: w,
      rippleSize: Q,
      cb: X
    } = x;
    l((J) => [...J, /* @__PURE__ */ be(zu, {
      classes: {
        ripple: ge(i.ripple, Se.ripple),
        rippleVisible: ge(i.rippleVisible, Se.rippleVisible),
        ripplePulsate: ge(i.ripplePulsate, Se.ripplePulsate),
        child: ge(i.child, Se.child),
        childLeaving: ge(i.childLeaving, Se.childLeaving),
        childPulsate: ge(i.childPulsate, Se.childPulsate)
      },
      timeout: Rr,
      pulsate: c,
      rippleX: R,
      rippleY: w,
      rippleSize: Q
    }, f.current)]), f.current += 1, m.current = X;
  }, [i]), _ = O.useCallback((x = {}, c = {}, R = () => {
  }) => {
    const {
      pulsate: w = !1,
      center: Q = o || c.pulsate,
      fakeElement: X = !1
      // For test purposes
    } = c;
    if ((x == null ? void 0 : x.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (x == null ? void 0 : x.type) === "touchstart" && (h.current = !0);
    const J = X ? null : d.current, F = J ? J.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let Z, ne, te;
    if (Q || x === void 0 || x.clientX === 0 && x.clientY === 0 || !x.clientX && !x.touches)
      Z = Math.round(F.width / 2), ne = Math.round(F.height / 2);
    else {
      const {
        clientX: pe,
        clientY: ee
      } = x.touches && x.touches.length > 0 ? x.touches[0] : x;
      Z = Math.round(pe - F.left), ne = Math.round(ee - F.top);
    }
    if (Q)
      te = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3), te % 2 === 0 && (te += 1);
    else {
      const pe = Math.max(Math.abs((J ? J.clientWidth : 0) - Z), Z) * 2 + 2, ee = Math.max(Math.abs((J ? J.clientHeight : 0) - ne), ne) * 2 + 2;
      te = Math.sqrt(pe ** 2 + ee ** 2);
    }
    x != null && x.touches ? b.current === null && (b.current = () => {
      y({
        pulsate: w,
        rippleX: Z,
        rippleY: ne,
        rippleSize: te,
        cb: R
      });
    }, v.start(Mu, () => {
      b.current && (b.current(), b.current = null);
    })) : y({
      pulsate: w,
      rippleX: Z,
      rippleY: ne,
      rippleSize: te,
      cb: R
    });
  }, [o, y, v]), $ = O.useCallback(() => {
    _({}, {
      pulsate: !0
    });
  }, [_]), T = O.useCallback((x, c) => {
    if (v.clear(), (x == null ? void 0 : x.type) === "touchend" && b.current) {
      b.current(), b.current = null, v.start(0, () => {
        T(x, c);
      });
      return;
    }
    b.current = null, l((R) => R.length > 0 ? R.slice(1) : R), m.current = c;
  }, [v]);
  return O.useImperativeHandle(r, () => ({
    pulsate: $,
    start: _,
    stop: T
  }), [$, _, T]), /* @__PURE__ */ be(Du, N({
    className: ge(Se.root, i.root, s),
    ref: d
  }, a, {
    children: /* @__PURE__ */ be(Yr, {
      component: null,
      exit: !0,
      children: u
    })
  }));
});
process.env.NODE_ENV !== "production" && (qo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: p.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string
});
function Vu(e) {
  return Qe("MuiButtonBase", e);
}
const Lu = gt("MuiButtonBase", ["root", "disabled", "focusVisible"]), Fu = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Bu = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, s = tr({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, Vu, o);
  return r && n && (s.root += ` ${n}`), s;
}, Wu = ze("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Lu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ko = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = bt({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: s,
    className: a,
    component: u = "button",
    disabled: l = !1,
    disableRipple: f = !1,
    disableTouchRipple: m = !1,
    focusRipple: h = !1,
    LinkComponent: v = "a",
    onBlur: b,
    onClick: d,
    onContextMenu: y,
    onDragLeave: _,
    onFocus: $,
    onFocusVisible: T,
    onKeyDown: x,
    onKeyUp: c,
    onMouseDown: R,
    onMouseLeave: w,
    onMouseUp: Q,
    onTouchEnd: X,
    onTouchMove: J,
    onTouchStart: F,
    tabIndex: Z = 0,
    TouchRippleProps: ne,
    touchRippleRef: te,
    type: pe
  } = n, ee = _e(n, Fu), me = O.useRef(null), oe = O.useRef(null), Pe = Tr(oe, te), {
    isFocusVisibleRef: E,
    onFocus: S,
    onBlur: j,
    ref: k
  } = Mo(), [P, D] = O.useState(!1);
  l && P && D(!1), O.useImperativeHandle(o, () => ({
    focusVisible: () => {
      D(!0), me.current.focus();
    }
  }), []);
  const [A, I] = O.useState(!1);
  O.useEffect(() => {
    I(!0);
  }, []);
  const z = A && !f && !l;
  O.useEffect(() => {
    P && h && !f && A && oe.current.pulsate();
  }, [f, h, P, A]);
  function M(V, Kr, ai = m) {
    return St((Gr) => (Kr && Kr(Gr), !ai && oe.current && oe.current[V](Gr), !0));
  }
  const L = M("start", R), ue = M("stop", y), g = M("stop", _), fe = M("stop", Q), C = M("stop", (V) => {
    P && V.preventDefault(), w && w(V);
  }), we = M("start", F), Fe = M("stop", X), Et = M("stop", J), ti = M("stop", (V) => {
    j(V), E.current === !1 && D(!1), b && b(V);
  }, !1), ri = St((V) => {
    me.current || (me.current = V.currentTarget), S(V), E.current === !0 && (D(!0), T && T(V)), $ && $(V);
  }), nr = () => {
    const V = me.current;
    return u && u !== "button" && !(V.tagName === "A" && V.href);
  }, or = O.useRef(!1), ni = St((V) => {
    h && !or.current && P && oe.current && V.key === " " && (or.current = !0, oe.current.stop(V, () => {
      oe.current.start(V);
    })), V.target === V.currentTarget && nr() && V.key === " " && V.preventDefault(), x && x(V), V.target === V.currentTarget && nr() && V.key === "Enter" && !l && (V.preventDefault(), d && d(V));
  }), oi = St((V) => {
    h && V.key === " " && oe.current && P && !V.defaultPrevented && (or.current = !1, oe.current.stop(V, () => {
      oe.current.pulsate(V);
    })), c && c(V), d && V.target === V.currentTarget && nr() && V.key === " " && !V.defaultPrevented && d(V);
  });
  let xt = u;
  xt === "button" && (ee.href || ee.to) && (xt = v);
  const rt = {};
  xt === "button" ? (rt.type = pe === void 0 ? "button" : pe, rt.disabled = l) : (!ee.href && !ee.to && (rt.role = "button"), l && (rt["aria-disabled"] = l));
  const ii = Tr(r, k, me);
  process.env.NODE_ENV !== "production" && O.useEffect(() => {
    z && !oe.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [z]);
  const qr = N({}, n, {
    centerRipple: i,
    component: u,
    disabled: l,
    disableRipple: f,
    disableTouchRipple: m,
    focusRipple: h,
    tabIndex: Z,
    focusVisible: P
  }), si = Bu(qr);
  return /* @__PURE__ */ Jn(Wu, N({
    as: xt,
    className: ge(si.root, a),
    ownerState: qr,
    onBlur: ti,
    onClick: d,
    onContextMenu: ue,
    onFocus: ri,
    onKeyDown: ni,
    onKeyUp: oi,
    onMouseDown: L,
    onMouseLeave: C,
    onMouseUp: fe,
    onDragLeave: g,
    onTouchEnd: Fe,
    onTouchMove: Et,
    onTouchStart: we,
    ref: ii,
    tabIndex: l ? -1 : Z,
    type: pe
  }, rt, ee, {
    children: [s, z ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ be(qo, N({
        ref: Pe,
        center: i
      }, ne))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Ko.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: ic,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: p.bool,
  /**
   * The content of the component.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Ao,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: p.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: p.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: p.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: p.string,
  /**
   * @ignore
   */
  href: p.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: p.elementType,
  /**
   * @ignore
   */
  onBlur: p.func,
  /**
   * @ignore
   */
  onClick: p.func,
  /**
   * @ignore
   */
  onContextMenu: p.func,
  /**
   * @ignore
   */
  onDragLeave: p.func,
  /**
   * @ignore
   */
  onFocus: p.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: p.func,
  /**
   * @ignore
   */
  onKeyDown: p.func,
  /**
   * @ignore
   */
  onKeyUp: p.func,
  /**
   * @ignore
   */
  onMouseDown: p.func,
  /**
   * @ignore
   */
  onMouseLeave: p.func,
  /**
   * @ignore
   */
  onMouseUp: p.func,
  /**
   * @ignore
   */
  onTouchEnd: p.func,
  /**
   * @ignore
   */
  onTouchMove: p.func,
  /**
   * @ignore
   */
  onTouchStart: p.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * @default 0
   */
  tabIndex: p.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: p.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: p.oneOfType([p.func, p.shape({
    current: p.shape({
      pulsate: p.func.isRequired,
      start: p.func.isRequired,
      stop: p.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: p.oneOfType([p.oneOf(["button", "reset", "submit"]), p.string])
});
function Uu(e) {
  return Qe("MuiTypography", e);
}
gt("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Yu = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], qu = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, e.align !== "inherit" && `align${de(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return tr(a, Uu, s);
}, Ku = ze("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${de(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(({
  theme: e,
  ownerState: t
}) => N({
  margin: 0
}, t.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
  textAlign: t.align
}, t.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, t.gutterBottom && {
  marginBottom: "0.35em"
}, t.paragraph && {
  marginBottom: 16
})), Hn = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, Gu = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, Hu = (e) => Gu[e] || e, Go = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = bt({
    props: t,
    name: "MuiTypography"
  }), o = Hu(n.color), i = wo(N({}, n, {
    color: o
  })), {
    align: s = "inherit",
    className: a,
    component: u,
    gutterBottom: l = !1,
    noWrap: f = !1,
    paragraph: m = !1,
    variant: h = "body1",
    variantMapping: v = Hn
  } = i, b = _e(i, Yu), d = N({}, i, {
    align: s,
    color: o,
    className: a,
    component: u,
    gutterBottom: l,
    noWrap: f,
    paragraph: m,
    variant: h,
    variantMapping: v
  }), y = u || (m ? "p" : v[h] || Hn[h]) || "span", _ = qu(d);
  return /* @__PURE__ */ be(Ku, N({
    as: y,
    ref: r,
    ownerState: d,
    className: ge(_.root, a)
  }, b));
});
process.env.NODE_ENV !== "production" && (Go.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: p.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: p.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: p.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: p.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: p.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: p.oneOfType([p.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), p.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: p.object
});
function Xu(e) {
  return Qe("MuiButton", e);
}
const Ct = gt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Ho = /* @__PURE__ */ O.createContext({});
process.env.NODE_ENV !== "production" && (Ho.displayName = "ButtonGroupContext");
const Xo = /* @__PURE__ */ O.createContext(void 0);
process.env.NODE_ENV !== "production" && (Xo.displayName = "ButtonGroupButtonContext");
const Ju = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], Zu = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: s
  } = e, a = {
    root: ["root", i, `${i}${de(t)}`, `size${de(o)}`, `${i}Size${de(o)}`, `color${de(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${de(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${de(o)}`]
  }, u = tr(a, Xu, s);
  return N({}, s, u);
}, Jo = (e) => N({}, e.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, e.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, e.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), Qu = ze(Ko, {
  shouldForwardProp: (e) => Uo(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${de(r.color)}`], t[`size${de(r.size)}`], t[`${r.variant}Size${de(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  var r, n;
  const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return N({}, e.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": N({
      textDecoration: "none",
      backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette.text.primary, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "text" && t.color !== "inherit" && {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "outlined" && t.color !== "inherit" && {
      border: `1px solid ${(e.vars || e).palette[t.color].main}`,
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette[t.color].main, e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, t.variant === "contained" && {
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
      boxShadow: (e.vars || e).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (e.vars || e).shadows[2],
        backgroundColor: (e.vars || e).palette.grey[300]
      }
    }, t.variant === "contained" && t.color !== "inherit" && {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    }),
    "&:active": N({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[8]
    }),
    [`&.${Ct.focusVisible}`]: N({}, t.variant === "contained" && {
      boxShadow: (e.vars || e).shadows[6]
    }),
    [`&.${Ct.disabled}`]: N({
      color: (e.vars || e).palette.action.disabled
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
    }, t.variant === "contained" && {
      color: (e.vars || e).palette.action.disabled,
      boxShadow: (e.vars || e).shadows[0],
      backgroundColor: (e.vars || e).palette.action.disabledBackground
    })
  }, t.variant === "text" && {
    padding: "6px 8px"
  }, t.variant === "text" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main
  }, t.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, t.variant === "outlined" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].main,
    border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${st(e.palette[t.color].main, 0.5)}`
  }, t.variant === "contained" && {
    color: e.vars ? (
      // this is safe because grey does not change between default light/dark mode
      e.vars.palette.text.primary
    ) : (r = (n = e.palette).getContrastText) == null ? void 0 : r.call(n, e.palette.grey[300]),
    backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
    boxShadow: (e.vars || e).shadows[2]
  }, t.variant === "contained" && t.color !== "inherit" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main
  }, t.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, t.size === "small" && t.variant === "text" && {
    padding: "4px 5px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "text" && {
    padding: "8px 11px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: e.typography.pxToRem(15)
  }, t.size === "small" && t.variant === "contained" && {
    padding: "4px 10px",
    fontSize: e.typography.pxToRem(13)
  }, t.size === "large" && t.variant === "contained" && {
    padding: "8px 22px",
    fontSize: e.typography.pxToRem(15)
  }, t.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: e
}) => e.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${Ct.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Ct.disabled}`]: {
    boxShadow: "none"
  }
}), el = ze("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${de(r.size)}`]];
  }
})(({
  ownerState: e
}) => N({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, e.size === "small" && {
  marginLeft: -2
}, Jo(e))), tl = ze("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${de(r.size)}`]];
  }
})(({
  ownerState: e
}) => N({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, e.size === "small" && {
  marginRight: -2
}, Jo(e))), Zo = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = O.useContext(Ho), o = O.useContext(Xo), i = Lr(n, t), s = bt({
    props: i,
    name: "MuiButton"
  }), {
    children: a,
    color: u = "primary",
    component: l = "button",
    className: f,
    disabled: m = !1,
    disableElevation: h = !1,
    disableFocusRipple: v = !1,
    endIcon: b,
    focusVisibleClassName: d,
    fullWidth: y = !1,
    size: _ = "medium",
    startIcon: $,
    type: T,
    variant: x = "text"
  } = s, c = _e(s, Ju), R = N({}, s, {
    color: u,
    component: l,
    disabled: m,
    disableElevation: h,
    disableFocusRipple: v,
    fullWidth: y,
    size: _,
    type: T,
    variant: x
  }), w = Zu(R), Q = $ && /* @__PURE__ */ be(el, {
    className: w.startIcon,
    ownerState: R,
    children: $
  }), X = b && /* @__PURE__ */ be(tl, {
    className: w.endIcon,
    ownerState: R,
    children: b
  }), J = o || "";
  return /* @__PURE__ */ Jn(Qu, N({
    ownerState: R,
    className: ge(n.className, w.root, f, J),
    component: l,
    disabled: m,
    focusRipple: !v,
    focusVisibleClassName: ge(w.focusVisible, d),
    ref: r,
    type: T
  }, c, {
    classes: w,
    children: [Q, a, X]
  }));
});
process.env.NODE_ENV !== "production" && (Zo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: p.oneOfType([p.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), p.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: p.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: p.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: p.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: p.bool,
  /**
   * Element placed after the children.
   */
  endIcon: p.node,
  /**
   * @ignore
   */
  focusVisibleClassName: p.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: p.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: p.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: p.oneOfType([p.oneOf(["small", "medium", "large"]), p.string]),
  /**
   * Element placed before the children.
   */
  startIcon: p.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * @ignore
   */
  type: p.oneOfType([p.oneOf(["button", "reset", "submit"]), p.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: p.oneOfType([p.oneOf(["contained", "outlined", "text"]), p.string])
});
function rl(e) {
  return Qe("MuiLink", e);
}
const nl = gt("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]), Qo = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, ol = (e) => Qo[e] || e, il = ({
  theme: e,
  ownerState: t
}) => {
  const r = ol(t.color), n = Je(e, `palette.${r}`, !1) || t.color, o = Je(e, `palette.${r}Channel`);
  return "vars" in e && o ? `rgba(${o} / 0.4)` : st(n, 0.4);
}, sl = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"], al = (e) => {
  const {
    classes: t,
    component: r,
    focusVisible: n,
    underline: o
  } = e, i = {
    root: ["root", `underline${de(o)}`, r === "button" && "button", n && "focusVisible"]
  };
  return tr(i, rl, t);
}, cl = ze(Go, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[`underline${de(r.underline)}`], r.component === "button" && t.button];
  }
})(({
  theme: e,
  ownerState: t
}) => N({}, t.underline === "none" && {
  textDecoration: "none"
}, t.underline === "hover" && {
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline"
  }
}, t.underline === "always" && N({
  textDecoration: "underline"
}, t.color !== "inherit" && {
  textDecorationColor: il({
    theme: e,
    ownerState: t
  })
}, {
  "&:hover": {
    textDecorationColor: "inherit"
  }
}), t.component === "button" && {
  position: "relative",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${nl.focusVisible}`]: {
    outline: "auto"
  }
})), ei = /* @__PURE__ */ O.forwardRef(function(t, r) {
  const n = bt({
    props: t,
    name: "MuiLink"
  }), {
    className: o,
    color: i = "primary",
    component: s = "a",
    onBlur: a,
    onFocus: u,
    TypographyClasses: l,
    underline: f = "always",
    variant: m = "inherit",
    sx: h
  } = n, v = _e(n, sl), {
    isFocusVisibleRef: b,
    onBlur: d,
    onFocus: y,
    ref: _
  } = Mo(), [$, T] = O.useState(!1), x = Tr(r, _), c = (X) => {
    d(X), b.current === !1 && T(!1), a && a(X);
  }, R = (X) => {
    y(X), b.current === !0 && T(!0), u && u(X);
  }, w = N({}, n, {
    color: i,
    component: s,
    focusVisible: $,
    underline: f,
    variant: m
  }), Q = al(w);
  return /* @__PURE__ */ be(cl, N({
    color: i,
    className: ge(Q.root, o),
    classes: l,
    component: s,
    onBlur: c,
    onFocus: R,
    ref: x,
    ownerState: w,
    variant: m,
    sx: [...Object.keys(Qo).includes(i) ? [] : [{
      color: i
    }], ...Array.isArray(h) ? h : [h]]
  }, v));
});
process.env.NODE_ENV !== "production" && (ei.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The color of the link.
   * @default 'primary'
   */
  color: p.any,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Ao,
  /**
   * @ignore
   */
  onBlur: p.func,
  /**
   * @ignore
   */
  onFocus: p.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * `classes` prop applied to the [`Typography`](/material-ui/api/typography/) element.
   */
  TypographyClasses: p.object,
  /**
   * Controls when the link should have an underline.
   * @default 'always'
   */
  underline: p.oneOf(["always", "hover", "none"]),
  /**
   * Applies the theme typography styles.
   * @default 'inherit'
   */
  variant: p.oneOfType([p.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), p.string])
});
const ul = "_button_2jndv_1", ll = "_buttonOutlined_2jndv_5", Xn = {
  button: ul,
  buttonOutlined: ll
}, yl = ({
  text: e,
  onClick: t,
  width: r,
  outlined: n = !1
}) => /* @__PURE__ */ be(
  Zo,
  {
    onClick: t,
    sx: {
      width: r ? `${r}px` : "100%"
    },
    className: `${n ? Xn.buttonOutlined : Xn.button}`,
    children: e
  }
), fl = "_buttonLink_1lboy_1", dl = {
  buttonLink: fl
}, gl = ({ text: e, href: t, width: r, component: n }) => /* @__PURE__ */ be(
  ei,
  {
    href: t,
    component: n,
    underline: "none",
    sx: {
      width: r ? `${r}px` : "100px"
    },
    className: dl.buttonLink,
    children: e
  }
);
export {
  yl as Button,
  gl as ButtonLink
};
