function bh(d) {
  return d && d.__esModule && Object.prototype.hasOwnProperty.call(d, "default") ? d.default : d;
}
function Vv(d) {
  if (Object.prototype.hasOwnProperty.call(d, "__esModule")) return d;
  var E = d.default;
  if (typeof E == "function") {
    var b = function c() {
      var z = !1;
      try {
        z = this instanceof c;
      } catch {
      }
      return z ? Reflect.construct(E, arguments, this.constructor) : E.apply(this, arguments);
    };
    b.prototype = E.prototype;
  } else b = {};
  return Object.defineProperty(b, "__esModule", { value: !0 }), Object.keys(d).forEach(function(c) {
    var z = Object.getOwnPropertyDescriptor(d, c);
    Object.defineProperty(b, c, z.get ? z : {
      enumerable: !0,
      get: function() {
        return d[c];
      }
    });
  }), b;
}
var lc = { exports: {} }, k = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eh;
function Lv() {
  if (eh) return k;
  eh = 1;
  var d = Symbol.for("react.transitional.element"), E = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), U = Symbol.for("react.consumer"), x = Symbol.for("react.context"), Y = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), G = Symbol.iterator;
  function B(o) {
    return o === null || typeof o != "object" ? null : (o = G && o[G] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var $ = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, P = Object.assign, w = {};
  function J(o, O, N) {
    this.props = o, this.context = O, this.refs = w, this.updater = N || $;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(o, O) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, O, "setState");
  }, J.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function F() {
  }
  F.prototype = J.prototype;
  function pt(o, O, N) {
    this.props = o, this.context = O, this.refs = w, this.updater = N || $;
  }
  var bt = pt.prototype = new F();
  bt.constructor = pt, P(bt, J.prototype), bt.isPureReactComponent = !0;
  var zt = Array.isArray, nt = { H: null, A: null, T: null, S: null, V: null }, Jt = Object.prototype.hasOwnProperty;
  function wt(o, O, N, H, j, ct) {
    return N = ct.ref, {
      $$typeof: d,
      type: o,
      key: O,
      ref: N !== void 0 ? N : null,
      props: ct
    };
  }
  function Xt(o, O) {
    return wt(
      o.type,
      O,
      void 0,
      void 0,
      void 0,
      o.props
    );
  }
  function lt(o) {
    return typeof o == "object" && o !== null && o.$$typeof === d;
  }
  function W(o) {
    var O = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(N) {
      return O[N];
    });
  }
  var mt = /\/+/g;
  function at(o, O) {
    return typeof o == "object" && o !== null && o.key != null ? W("" + o.key) : O.toString(36);
  }
  function Q() {
  }
  function Tl(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(Q, Q) : (o.status = "pending", o.then(
          function(O) {
            o.status === "pending" && (o.status = "fulfilled", o.value = O);
          },
          function(O) {
            o.status === "pending" && (o.status = "rejected", o.reason = O);
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function Nt(o, O, N, H, j) {
    var ct = typeof o;
    (ct === "undefined" || ct === "boolean") && (o = null);
    var K = !1;
    if (o === null) K = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          K = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case d:
            case E:
              K = !0;
              break;
            case M:
              return K = o._init, Nt(
                K(o._payload),
                O,
                N,
                H,
                j
              );
          }
      }
    if (K)
      return j = j(o), K = H === "" ? "." + at(o, 0) : H, zt(j) ? (N = "", K != null && (N = K.replace(mt, "$&/") + "/"), Nt(j, O, N, "", function(Ll) {
        return Ll;
      })) : j != null && (lt(j) && (j = Xt(
        j,
        N + (j.key == null || o && o.key === j.key ? "" : ("" + j.key).replace(
          mt,
          "$&/"
        ) + "/") + K
      )), O.push(j)), 1;
    K = 0;
    var tl = H === "" ? "." : H + ":";
    if (zt(o))
      for (var Tt = 0; Tt < o.length; Tt++)
        H = o[Tt], ct = tl + at(H, Tt), K += Nt(
          H,
          O,
          N,
          ct,
          j
        );
    else if (Tt = B(o), typeof Tt == "function")
      for (o = Tt.call(o), Tt = 0; !(H = o.next()).done; )
        H = H.value, ct = tl + at(H, Tt++), K += Nt(
          H,
          O,
          N,
          ct,
          j
        );
    else if (ct === "object") {
      if (typeof o.then == "function")
        return Nt(
          Tl(o),
          O,
          N,
          H,
          j
        );
      throw O = String(o), Error(
        "Objects are not valid as a React child (found: " + (O === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : O) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return K;
  }
  function _(o, O, N) {
    if (o == null) return o;
    var H = [], j = 0;
    return Nt(o, H, "", "", function(ct) {
      return O.call(N, ct, j++);
    }), H;
  }
  function R(o) {
    if (o._status === -1) {
      var O = o._result;
      O = O(), O.then(
        function(N) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = N);
        },
        function(N) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = N);
        }
      ), o._status === -1 && (o._status = 0, o._result = O);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var q = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var O = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(O)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  };
  function it() {
  }
  return k.Children = {
    map: _,
    forEach: function(o, O, N) {
      _(
        o,
        function() {
          O.apply(this, arguments);
        },
        N
      );
    },
    count: function(o) {
      var O = 0;
      return _(o, function() {
        O++;
      }), O;
    },
    toArray: function(o) {
      return _(o, function(O) {
        return O;
      }) || [];
    },
    only: function(o) {
      if (!lt(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  }, k.Component = J, k.Fragment = b, k.Profiler = z, k.PureComponent = pt, k.StrictMode = c, k.Suspense = D, k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = nt, k.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return nt.H.useMemoCache(o);
    }
  }, k.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, k.cloneElement = function(o, O, N) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var H = P({}, o.props), j = o.key, ct = void 0;
    if (O != null)
      for (K in O.ref !== void 0 && (ct = void 0), O.key !== void 0 && (j = "" + O.key), O)
        !Jt.call(O, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && O.ref === void 0 || (H[K] = O[K]);
    var K = arguments.length - 2;
    if (K === 1) H.children = N;
    else if (1 < K) {
      for (var tl = Array(K), Tt = 0; Tt < K; Tt++)
        tl[Tt] = arguments[Tt + 2];
      H.children = tl;
    }
    return wt(o.type, j, void 0, void 0, ct, H);
  }, k.createContext = function(o) {
    return o = {
      $$typeof: x,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: U,
      _context: o
    }, o;
  }, k.createElement = function(o, O, N) {
    var H, j = {}, ct = null;
    if (O != null)
      for (H in O.key !== void 0 && (ct = "" + O.key), O)
        Jt.call(O, H) && H !== "key" && H !== "__self" && H !== "__source" && (j[H] = O[H]);
    var K = arguments.length - 2;
    if (K === 1) j.children = N;
    else if (1 < K) {
      for (var tl = Array(K), Tt = 0; Tt < K; Tt++)
        tl[Tt] = arguments[Tt + 2];
      j.children = tl;
    }
    if (o && o.defaultProps)
      for (H in K = o.defaultProps, K)
        j[H] === void 0 && (j[H] = K[H]);
    return wt(o, ct, void 0, void 0, null, j);
  }, k.createRef = function() {
    return { current: null };
  }, k.forwardRef = function(o) {
    return { $$typeof: Y, render: o };
  }, k.isValidElement = lt, k.lazy = function(o) {
    return {
      $$typeof: M,
      _payload: { _status: -1, _result: o },
      _init: R
    };
  }, k.memo = function(o, O) {
    return {
      $$typeof: y,
      type: o,
      compare: O === void 0 ? null : O
    };
  }, k.startTransition = function(o) {
    var O = nt.T, N = {};
    nt.T = N;
    try {
      var H = o(), j = nt.S;
      j !== null && j(N, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(it, q);
    } catch (ct) {
      q(ct);
    } finally {
      nt.T = O;
    }
  }, k.unstable_useCacheRefresh = function() {
    return nt.H.useCacheRefresh();
  }, k.use = function(o) {
    return nt.H.use(o);
  }, k.useActionState = function(o, O, N) {
    return nt.H.useActionState(o, O, N);
  }, k.useCallback = function(o, O) {
    return nt.H.useCallback(o, O);
  }, k.useContext = function(o) {
    return nt.H.useContext(o);
  }, k.useDebugValue = function() {
  }, k.useDeferredValue = function(o, O) {
    return nt.H.useDeferredValue(o, O);
  }, k.useEffect = function(o, O, N) {
    var H = nt.H;
    if (typeof N == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return H.useEffect(o, O);
  }, k.useId = function() {
    return nt.H.useId();
  }, k.useImperativeHandle = function(o, O, N) {
    return nt.H.useImperativeHandle(o, O, N);
  }, k.useInsertionEffect = function(o, O) {
    return nt.H.useInsertionEffect(o, O);
  }, k.useLayoutEffect = function(o, O) {
    return nt.H.useLayoutEffect(o, O);
  }, k.useMemo = function(o, O) {
    return nt.H.useMemo(o, O);
  }, k.useOptimistic = function(o, O) {
    return nt.H.useOptimistic(o, O);
  }, k.useReducer = function(o, O, N) {
    return nt.H.useReducer(o, O, N);
  }, k.useRef = function(o) {
    return nt.H.useRef(o);
  }, k.useState = function(o) {
    return nt.H.useState(o);
  }, k.useSyncExternalStore = function(o, O, N) {
    return nt.H.useSyncExternalStore(
      o,
      O,
      N
    );
  }, k.useTransition = function() {
    return nt.H.useTransition();
  }, k.version = "19.1.1", k;
}
var nh;
function Gn() {
  return nh || (nh = 1, lc.exports = Lv()), lc.exports;
}
var Bn = Gn();
const Kv = /* @__PURE__ */ bh(Bn);
var ac = { exports: {} }, ge = {}, uc = { exports: {} }, ec = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ih;
function Jv() {
  return ih || (ih = 1, (function(d) {
    function E(_, R) {
      var q = _.length;
      _.push(R);
      t: for (; 0 < q; ) {
        var it = q - 1 >>> 1, o = _[it];
        if (0 < z(o, R))
          _[it] = R, _[q] = o, q = it;
        else break t;
      }
    }
    function b(_) {
      return _.length === 0 ? null : _[0];
    }
    function c(_) {
      if (_.length === 0) return null;
      var R = _[0], q = _.pop();
      if (q !== R) {
        _[0] = q;
        t: for (var it = 0, o = _.length, O = o >>> 1; it < O; ) {
          var N = 2 * (it + 1) - 1, H = _[N], j = N + 1, ct = _[j];
          if (0 > z(H, q))
            j < o && 0 > z(ct, H) ? (_[it] = ct, _[j] = q, it = j) : (_[it] = H, _[N] = q, it = N);
          else if (j < o && 0 > z(ct, q))
            _[it] = ct, _[j] = q, it = j;
          else break t;
        }
      }
      return R;
    }
    function z(_, R) {
      var q = _.sortIndex - R.sortIndex;
      return q !== 0 ? q : _.id - R.id;
    }
    if (d.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var U = performance;
      d.unstable_now = function() {
        return U.now();
      };
    } else {
      var x = Date, Y = x.now();
      d.unstable_now = function() {
        return x.now() - Y;
      };
    }
    var D = [], y = [], M = 1, G = null, B = 3, $ = !1, P = !1, w = !1, J = !1, F = typeof setTimeout == "function" ? setTimeout : null, pt = typeof clearTimeout == "function" ? clearTimeout : null, bt = typeof setImmediate < "u" ? setImmediate : null;
    function zt(_) {
      for (var R = b(y); R !== null; ) {
        if (R.callback === null) c(y);
        else if (R.startTime <= _)
          c(y), R.sortIndex = R.expirationTime, E(D, R);
        else break;
        R = b(y);
      }
    }
    function nt(_) {
      if (w = !1, zt(_), !P)
        if (b(D) !== null)
          P = !0, Jt || (Jt = !0, at());
        else {
          var R = b(y);
          R !== null && Nt(nt, R.startTime - _);
        }
    }
    var Jt = !1, wt = -1, Xt = 5, lt = -1;
    function W() {
      return J ? !0 : !(d.unstable_now() - lt < Xt);
    }
    function mt() {
      if (J = !1, Jt) {
        var _ = d.unstable_now();
        lt = _;
        var R = !0;
        try {
          t: {
            P = !1, w && (w = !1, pt(wt), wt = -1), $ = !0;
            var q = B;
            try {
              l: {
                for (zt(_), G = b(D); G !== null && !(G.expirationTime > _ && W()); ) {
                  var it = G.callback;
                  if (typeof it == "function") {
                    G.callback = null, B = G.priorityLevel;
                    var o = it(
                      G.expirationTime <= _
                    );
                    if (_ = d.unstable_now(), typeof o == "function") {
                      G.callback = o, zt(_), R = !0;
                      break l;
                    }
                    G === b(D) && c(D), zt(_);
                  } else c(D);
                  G = b(D);
                }
                if (G !== null) R = !0;
                else {
                  var O = b(y);
                  O !== null && Nt(
                    nt,
                    O.startTime - _
                  ), R = !1;
                }
              }
              break t;
            } finally {
              G = null, B = q, $ = !1;
            }
            R = void 0;
          }
        } finally {
          R ? at() : Jt = !1;
        }
      }
    }
    var at;
    if (typeof bt == "function")
      at = function() {
        bt(mt);
      };
    else if (typeof MessageChannel < "u") {
      var Q = new MessageChannel(), Tl = Q.port2;
      Q.port1.onmessage = mt, at = function() {
        Tl.postMessage(null);
      };
    } else
      at = function() {
        F(mt, 0);
      };
    function Nt(_, R) {
      wt = F(function() {
        _(d.unstable_now());
      }, R);
    }
    d.unstable_IdlePriority = 5, d.unstable_ImmediatePriority = 1, d.unstable_LowPriority = 4, d.unstable_NormalPriority = 3, d.unstable_Profiling = null, d.unstable_UserBlockingPriority = 2, d.unstable_cancelCallback = function(_) {
      _.callback = null;
    }, d.unstable_forceFrameRate = function(_) {
      0 > _ || 125 < _ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Xt = 0 < _ ? Math.floor(1e3 / _) : 5;
    }, d.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, d.unstable_next = function(_) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = B;
      }
      var q = B;
      B = R;
      try {
        return _();
      } finally {
        B = q;
      }
    }, d.unstable_requestPaint = function() {
      J = !0;
    }, d.unstable_runWithPriority = function(_, R) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var q = B;
      B = _;
      try {
        return R();
      } finally {
        B = q;
      }
    }, d.unstable_scheduleCallback = function(_, R, q) {
      var it = d.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? it + q : it) : q = it, _) {
        case 1:
          var o = -1;
          break;
        case 2:
          o = 250;
          break;
        case 5:
          o = 1073741823;
          break;
        case 4:
          o = 1e4;
          break;
        default:
          o = 5e3;
      }
      return o = q + o, _ = {
        id: M++,
        callback: R,
        priorityLevel: _,
        startTime: q,
        expirationTime: o,
        sortIndex: -1
      }, q > it ? (_.sortIndex = q, E(y, _), b(D) === null && _ === b(y) && (w ? (pt(wt), wt = -1) : w = !0, Nt(nt, q - it))) : (_.sortIndex = o, E(D, _), P || $ || (P = !0, Jt || (Jt = !0, at()))), _;
    }, d.unstable_shouldYield = W, d.unstable_wrapCallback = function(_) {
      var R = B;
      return function() {
        var q = B;
        B = R;
        try {
          return _.apply(this, arguments);
        } finally {
          B = q;
        }
      };
    };
  })(ec)), ec;
}
var fh;
function wv() {
  return fh || (fh = 1, uc.exports = Jv()), uc.exports;
}
var nc = { exports: {} }, Kt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ch;
function Wv() {
  if (ch) return Kt;
  ch = 1;
  var d = Gn();
  function E(D) {
    var y = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var M = 2; M < arguments.length; M++)
        y += "&args[]=" + encodeURIComponent(arguments[M]);
    }
    return "Minified React error #" + D + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function b() {
  }
  var c = {
    d: {
      f: b,
      r: function() {
        throw Error(E(522));
      },
      D: b,
      C: b,
      L: b,
      m: b,
      X: b,
      S: b,
      M: b
    },
    p: 0,
    findDOMNode: null
  }, z = Symbol.for("react.portal");
  function U(D, y, M) {
    var G = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: z,
      key: G == null ? null : "" + G,
      children: D,
      containerInfo: y,
      implementation: M
    };
  }
  var x = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Y(D, y) {
    if (D === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, Kt.createPortal = function(D, y) {
    var M = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(E(299));
    return U(D, y, null, M);
  }, Kt.flushSync = function(D) {
    var y = x.T, M = c.p;
    try {
      if (x.T = null, c.p = 2, D) return D();
    } finally {
      x.T = y, c.p = M, c.d.f();
    }
  }, Kt.preconnect = function(D, y) {
    typeof D == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, c.d.C(D, y));
  }, Kt.prefetchDNS = function(D) {
    typeof D == "string" && c.d.D(D);
  }, Kt.preinit = function(D, y) {
    if (typeof D == "string" && y && typeof y.as == "string") {
      var M = y.as, G = Y(M, y.crossOrigin), B = typeof y.integrity == "string" ? y.integrity : void 0, $ = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      M === "style" ? c.d.S(
        D,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: G,
          integrity: B,
          fetchPriority: $
        }
      ) : M === "script" && c.d.X(D, {
        crossOrigin: G,
        integrity: B,
        fetchPriority: $,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, Kt.preinitModule = function(D, y) {
    if (typeof D == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var M = Y(
            y.as,
            y.crossOrigin
          );
          c.d.M(D, {
            crossOrigin: M,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && c.d.M(D);
  }, Kt.preload = function(D, y) {
    if (typeof D == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var M = y.as, G = Y(M, y.crossOrigin);
      c.d.L(D, M, {
        crossOrigin: G,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, Kt.preloadModule = function(D, y) {
    if (typeof D == "string")
      if (y) {
        var M = Y(y.as, y.crossOrigin);
        c.d.m(D, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: M,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else c.d.m(D);
  }, Kt.requestFormReset = function(D) {
    c.d.r(D);
  }, Kt.unstable_batchedUpdates = function(D, y) {
    return D(y);
  }, Kt.useFormState = function(D, y, M) {
    return x.H.useFormState(D, y, M);
  }, Kt.useFormStatus = function() {
    return x.H.useHostTransitionStatus();
  }, Kt.version = "19.1.1", Kt;
}
var sh;
function kv() {
  if (sh) return nc.exports;
  sh = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (E) {
        console.error(E);
      }
  }
  return d(), nc.exports = Wv(), nc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oh;
function $v() {
  if (oh) return ge;
  oh = 1;
  var d = wv(), E = Gn(), b = kv();
  function c(t) {
    var l = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      l += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        l += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function z(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function U(t) {
    var l = t, a = t;
    if (t.alternate) for (; l.return; ) l = l.return;
    else {
      t = l;
      do
        l = t, (l.flags & 4098) !== 0 && (a = l.return), t = l.return;
      while (t);
    }
    return l.tag === 3 ? a : null;
  }
  function x(t) {
    if (t.tag === 13) {
      var l = t.memoizedState;
      if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
    }
    return null;
  }
  function Y(t) {
    if (U(t) !== t)
      throw Error(c(188));
  }
  function D(t) {
    var l = t.alternate;
    if (!l) {
      if (l = U(t), l === null) throw Error(c(188));
      return l !== t ? null : t;
    }
    for (var a = t, u = l; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (u = e.return, u !== null) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return Y(e), t;
          if (n === u) return Y(e), l;
          n = n.sibling;
        }
        throw Error(c(188));
      }
      if (a.return !== u.return) a = e, u = n;
      else {
        for (var i = !1, f = e.child; f; ) {
          if (f === a) {
            i = !0, a = e, u = n;
            break;
          }
          if (f === u) {
            i = !0, u = e, a = n;
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = n.child; f; ) {
            if (f === a) {
              i = !0, a = n, u = e;
              break;
            }
            if (f === u) {
              i = !0, u = n, a = e;
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(c(189));
        }
      }
      if (a.alternate !== u) throw Error(c(190));
    }
    if (a.tag !== 3) throw Error(c(188));
    return a.stateNode.current === a ? t : l;
  }
  function y(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t;
    for (t = t.child; t !== null; ) {
      if (l = y(t), l !== null) return l;
      t = t.sibling;
    }
    return null;
  }
  var M = Object.assign, G = Symbol.for("react.element"), B = Symbol.for("react.transitional.element"), $ = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), J = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), pt = Symbol.for("react.consumer"), bt = Symbol.for("react.context"), zt = Symbol.for("react.forward_ref"), nt = Symbol.for("react.suspense"), Jt = Symbol.for("react.suspense_list"), wt = Symbol.for("react.memo"), Xt = Symbol.for("react.lazy"), lt = Symbol.for("react.activity"), W = Symbol.for("react.memo_cache_sentinel"), mt = Symbol.iterator;
  function at(t) {
    return t === null || typeof t != "object" ? null : (t = mt && t[mt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var Q = Symbol.for("react.client.reference");
  function Tl(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === Q ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case P:
        return "Fragment";
      case J:
        return "Profiler";
      case w:
        return "StrictMode";
      case nt:
        return "Suspense";
      case Jt:
        return "SuspenseList";
      case lt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case $:
          return "Portal";
        case bt:
          return (t.displayName || "Context") + ".Provider";
        case pt:
          return (t._context.displayName || "Context") + ".Consumer";
        case zt:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case wt:
          return l = t.displayName || null, l !== null ? l : Tl(t.type) || "Memo";
        case Xt:
          l = t._payload, t = t._init;
          try {
            return Tl(t(l));
          } catch {
          }
      }
    return null;
  }
  var Nt = Array.isArray, _ = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, R = b.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, it = [], o = -1;
  function O(t) {
    return { current: t };
  }
  function N(t) {
    0 > o || (t.current = it[o], it[o] = null, o--);
  }
  function H(t, l) {
    o++, it[o] = t.current, t.current = l;
  }
  var j = O(null), ct = O(null), K = O(null), tl = O(null);
  function Tt(t, l) {
    switch (H(K, l), H(ct, t), H(j, null), l.nodeType) {
      case 9:
      case 11:
        t = (t = l.documentElement) && (t = t.namespaceURI) ? Nr(t) : 0;
        break;
      default:
        if (t = l.tagName, l = l.namespaceURI)
          l = Nr(l), t = Hr(l, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    N(j), H(j, t);
  }
  function Ll() {
    N(j), N(ct), N(K);
  }
  function Xn(t) {
    t.memoizedState !== null && H(tl, t);
    var l = j.current, a = Hr(l, t.type);
    l !== a && (H(ct, t), H(j, a));
  }
  function be(t) {
    ct.current === t && (N(j), N(ct)), tl.current === t && (N(tl), he._currentValue = q);
  }
  var Qn = Object.prototype.hasOwnProperty, jn = d.unstable_scheduleCallback, Zn = d.unstable_cancelCallback, ph = d.unstable_shouldYield, Th = d.unstable_requestPaint, El = d.unstable_now, Eh = d.unstable_getCurrentPriorityLevel, rc = d.unstable_ImmediatePriority, hc = d.unstable_UserBlockingPriority, _e = d.unstable_NormalPriority, Ah = d.unstable_LowPriority, dc = d.unstable_IdlePriority, zh = d.log, Oh = d.unstable_setDisableYieldValue, _u = null, ll = null;
  function Kl(t) {
    if (typeof zh == "function" && Oh(t), ll && typeof ll.setStrictMode == "function")
      try {
        ll.setStrictMode(_u, t);
      } catch {
      }
  }
  var al = Math.clz32 ? Math.clz32 : Rh, Mh = Math.log, Dh = Math.LN2;
  function Rh(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Mh(t) / Dh | 0) | 0;
  }
  var pe = 256, Te = 4194304;
  function ya(t) {
    var l = t & 42;
    if (l !== 0) return l;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Ee(t, l, a) {
    var u = t.pendingLanes;
    if (u === 0) return 0;
    var e = 0, n = t.suspendedLanes, i = t.pingedLanes;
    t = t.warmLanes;
    var f = u & 134217727;
    return f !== 0 ? (u = f & ~n, u !== 0 ? e = ya(u) : (i &= f, i !== 0 ? e = ya(i) : a || (a = f & ~t, a !== 0 && (e = ya(a))))) : (f = u & ~n, f !== 0 ? e = ya(f) : i !== 0 ? e = ya(i) : a || (a = u & ~t, a !== 0 && (e = ya(a)))), e === 0 ? 0 : l !== 0 && l !== e && (l & n) === 0 && (n = e & -e, a = l & -l, n >= a || n === 32 && (a & 4194048) !== 0) ? l : e;
  }
  function pu(t, l) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
  }
  function Uh(t, l) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return l + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function vc() {
    var t = pe;
    return pe <<= 1, (pe & 4194048) === 0 && (pe = 256), t;
  }
  function yc() {
    var t = Te;
    return Te <<= 1, (Te & 62914560) === 0 && (Te = 4194304), t;
  }
  function Vn(t) {
    for (var l = [], a = 0; 31 > a; a++) l.push(t);
    return l;
  }
  function Tu(t, l) {
    t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function xh(t, l, a, u, e, n) {
    var i = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var f = t.entanglements, s = t.expirationTimes, m = t.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var p = 31 - al(a), A = 1 << p;
      f[p] = 0, s[p] = -1;
      var g = m[p];
      if (g !== null)
        for (m[p] = null, p = 0; p < g.length; p++) {
          var S = g[p];
          S !== null && (S.lane &= -536870913);
        }
      a &= ~A;
    }
    u !== 0 && mc(t, u, 0), n !== 0 && e === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l));
  }
  function mc(t, l, a) {
    t.pendingLanes |= l, t.suspendedLanes &= ~l;
    var u = 31 - al(l);
    t.entangledLanes |= l, t.entanglements[u] = t.entanglements[u] | 1073741824 | a & 4194090;
  }
  function gc(t, l) {
    var a = t.entangledLanes |= l;
    for (t = t.entanglements; a; ) {
      var u = 31 - al(a), e = 1 << u;
      e & l | t[u] & l && (t[u] |= l), a &= ~e;
    }
  }
  function Ln(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Kn(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Sc() {
    var t = R.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Pr(t.type));
  }
  function Nh(t, l) {
    var a = R.p;
    try {
      return R.p = t, l();
    } finally {
      R.p = a;
    }
  }
  var Jl = Math.random().toString(36).slice(2), Vt = "__reactFiber$" + Jl, kt = "__reactProps$" + Jl, Ba = "__reactContainer$" + Jl, Jn = "__reactEvents$" + Jl, Hh = "__reactListeners$" + Jl, qh = "__reactHandles$" + Jl, bc = "__reactResources$" + Jl, Eu = "__reactMarker$" + Jl;
  function wn(t) {
    delete t[Vt], delete t[kt], delete t[Jn], delete t[Hh], delete t[qh];
  }
  function Ya(t) {
    var l = t[Vt];
    if (l) return l;
    for (var a = t.parentNode; a; ) {
      if (l = a[Ba] || a[Vt]) {
        if (a = l.alternate, l.child !== null || a !== null && a.child !== null)
          for (t = Cr(t); t !== null; ) {
            if (a = t[Vt]) return a;
            t = Cr(t);
          }
        return l;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function Ca(t) {
    if (t = t[Vt] || t[Ba]) {
      var l = t.tag;
      if (l === 5 || l === 6 || l === 13 || l === 26 || l === 27 || l === 3)
        return t;
    }
    return null;
  }
  function Au(t) {
    var l = t.tag;
    if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
    throw Error(c(33));
  }
  function Ga(t) {
    var l = t[bc];
    return l || (l = t[bc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
  }
  function Bt(t) {
    t[Eu] = !0;
  }
  var _c = /* @__PURE__ */ new Set(), pc = {};
  function ma(t, l) {
    Xa(t, l), Xa(t + "Capture", l);
  }
  function Xa(t, l) {
    for (pc[t] = l, t = 0; t < l.length; t++)
      _c.add(l[t]);
  }
  var Bh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Tc = {}, Ec = {};
  function Yh(t) {
    return Qn.call(Ec, t) ? !0 : Qn.call(Tc, t) ? !1 : Bh.test(t) ? Ec[t] = !0 : (Tc[t] = !0, !1);
  }
  function Ae(t, l, a) {
    if (Yh(l))
      if (a === null) t.removeAttribute(l);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var u = l.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + a);
      }
  }
  function ze(t, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttribute(l, "" + a);
    }
  }
  function Rl(t, l, a, u) {
    if (u === null) t.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(l, a, "" + u);
    }
  }
  var Wn, Ac;
  function Qa(t) {
    if (Wn === void 0)
      try {
        throw Error();
      } catch (a) {
        var l = a.stack.trim().match(/\n( *(at )?)/);
        Wn = l && l[1] || "", Ac = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Wn + t + Ac;
  }
  var kn = !1;
  function $n(t, l) {
    if (!t || kn) return "";
    kn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var A = function() {
                throw Error();
              };
              if (Object.defineProperty(A.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(A, []);
                } catch (S) {
                  var g = S;
                }
                Reflect.construct(t, [], A);
              } else {
                try {
                  A.call();
                } catch (S) {
                  g = S;
                }
                t.call(A.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                g = S;
              }
              (A = t()) && typeof A.catch == "function" && A.catch(function() {
              });
            }
          } catch (S) {
            if (S && g && typeof S.stack == "string")
              return [S.stack, g.stack];
          }
          return [null, null];
        }
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        u.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = u.DetermineComponentFrameRoot(), i = n[0], f = n[1];
      if (i && f) {
        var s = i.split(`
`), m = f.split(`
`);
        for (e = u = 0; u < s.length && !s[u].includes("DetermineComponentFrameRoot"); )
          u++;
        for (; e < m.length && !m[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (u === s.length || e === m.length)
          for (u = s.length - 1, e = m.length - 1; 1 <= u && 0 <= e && s[u] !== m[e]; )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (s[u] !== m[e]) {
            if (u !== 1 || e !== 1)
              do
                if (u--, e--, 0 > e || s[u] !== m[e]) {
                  var p = `
` + s[u].replace(" at new ", " at ");
                  return t.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", t.displayName)), p;
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      kn = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? Qa(a) : "";
  }
  function Ch(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Qa(t.type);
      case 16:
        return Qa("Lazy");
      case 13:
        return Qa("Suspense");
      case 19:
        return Qa("SuspenseList");
      case 0:
      case 15:
        return $n(t.type, !1);
      case 11:
        return $n(t.type.render, !1);
      case 1:
        return $n(t.type, !0);
      case 31:
        return Qa("Activity");
      default:
        return "";
    }
  }
  function zc(t) {
    try {
      var l = "";
      do
        l += Ch(t), t = t.return;
      while (t);
      return l;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function ol(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Oc(t) {
    var l = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
  }
  function Gh(t) {
    var l = Oc(t) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      l
    ), u = "" + t[l];
    if (!t.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(t, l, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(i) {
          u = "" + i, n.call(this, i);
        }
      }), Object.defineProperty(t, l, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(i) {
          u = "" + i;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[l];
        }
      };
    }
  }
  function Oe(t) {
    t._valueTracker || (t._valueTracker = Gh(t));
  }
  function Mc(t) {
    if (!t) return !1;
    var l = t._valueTracker;
    if (!l) return !0;
    var a = l.getValue(), u = "";
    return t && (u = Oc(t) ? t.checked ? "true" : "false" : t.value), t = u, t !== a ? (l.setValue(t), !0) : !1;
  }
  function Me(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Xh = /[\n"\\]/g;
  function rl(t) {
    return t.replace(
      Xh,
      function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Fn(t, l, a, u, e, n, i, f) {
    t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + ol(l)) : t.value !== "" + ol(l) && (t.value = "" + ol(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? Pn(t, i, ol(l)) : a != null ? Pn(t, i, ol(a)) : u != null && t.removeAttribute("value"), e == null && n != null && (t.defaultChecked = !!n), e != null && (t.checked = e && typeof e != "function" && typeof e != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.name = "" + ol(f) : t.removeAttribute("name");
  }
  function Dc(t, l, a, u, e, n, i, f) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (t.type = n), l != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || l != null))
        return;
      a = a != null ? "" + ol(a) : "", l = l != null ? "" + ol(l) : a, f || l === t.value || (t.value = l), t.defaultValue = l;
    }
    u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, t.checked = f ? t.checked : !!u, t.defaultChecked = !!u, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i);
  }
  function Pn(t, l, a) {
    l === "number" && Me(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a);
  }
  function ja(t, l, a, u) {
    if (t = t.options, l) {
      l = {};
      for (var e = 0; e < a.length; e++)
        l["$" + a[e]] = !0;
      for (a = 0; a < t.length; a++)
        e = l.hasOwnProperty("$" + t[a].value), t[a].selected !== e && (t[a].selected = e), e && u && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + ol(a), l = null, e = 0; e < t.length; e++) {
        if (t[e].value === a) {
          t[e].selected = !0, u && (t[e].defaultSelected = !0);
          return;
        }
        l !== null || t[e].disabled || (l = t[e]);
      }
      l !== null && (l.selected = !0);
    }
  }
  function Rc(t, l, a) {
    if (l != null && (l = "" + ol(l), l !== t.value && (t.value = l), a == null)) {
      t.defaultValue !== l && (t.defaultValue = l);
      return;
    }
    t.defaultValue = a != null ? "" + ol(a) : "";
  }
  function Uc(t, l, a, u) {
    if (l == null) {
      if (u != null) {
        if (a != null) throw Error(c(92));
        if (Nt(u)) {
          if (1 < u.length) throw Error(c(93));
          u = u[0];
        }
        a = u;
      }
      a == null && (a = ""), l = a;
    }
    a = ol(l), t.defaultValue = a, u = t.textContent, u === a && u !== "" && u !== null && (t.value = u);
  }
  function Za(t, l) {
    if (l) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = l;
        return;
      }
    }
    t.textContent = l;
  }
  var Qh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function xc(t, l, a) {
    var u = l.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? u ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : u ? t.setProperty(l, a) : typeof a != "number" || a === 0 || Qh.has(l) ? l === "float" ? t.cssFloat = a : t[l] = ("" + a).trim() : t[l] = a + "px";
  }
  function Nc(t, l, a) {
    if (l != null && typeof l != "object")
      throw Error(c(62));
    if (t = t.style, a != null) {
      for (var u in a)
        !a.hasOwnProperty(u) || l != null && l.hasOwnProperty(u) || (u.indexOf("--") === 0 ? t.setProperty(u, "") : u === "float" ? t.cssFloat = "" : t[u] = "");
      for (var e in l)
        u = l[e], l.hasOwnProperty(e) && a[e] !== u && xc(t, e, u);
    } else
      for (var n in l)
        l.hasOwnProperty(n) && xc(t, n, l[n]);
  }
  function In(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var jh = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Zh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function De(t) {
    return Zh.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  var ti = null;
  function li(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Va = null, La = null;
  function Hc(t) {
    var l = Ca(t);
    if (l && (t = l.stateNode)) {
      var a = t[kt] || null;
      t: switch (t = l.stateNode, l.type) {
        case "input":
          if (Fn(
            t,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), l = a.name, a.type === "radio" && l != null) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + rl(
                "" + l
              ) + '"][type="radio"]'
            ), l = 0; l < a.length; l++) {
              var u = a[l];
              if (u !== t && u.form === t.form) {
                var e = u[kt] || null;
                if (!e) throw Error(c(90));
                Fn(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (l = 0; l < a.length; l++)
              u = a[l], u.form === t.form && Mc(u);
          }
          break t;
        case "textarea":
          Rc(t, a.value, a.defaultValue);
          break t;
        case "select":
          l = a.value, l != null && ja(t, !!a.multiple, l, !1);
      }
    }
  }
  var ai = !1;
  function qc(t, l, a) {
    if (ai) return t(l, a);
    ai = !0;
    try {
      var u = t(l);
      return u;
    } finally {
      if (ai = !1, (Va !== null || La !== null) && (vn(), Va && (l = Va, t = La, La = Va = null, Hc(l), t)))
        for (l = 0; l < t.length; l++) Hc(t[l]);
    }
  }
  function zu(t, l) {
    var a = t.stateNode;
    if (a === null) return null;
    var u = a[kt] || null;
    if (u === null) return null;
    a = u[l];
    t: switch (l) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (t = t.type, u = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !u;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function")
      throw Error(
        c(231, l, typeof a)
      );
    return a;
  }
  var Ul = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ui = !1;
  if (Ul)
    try {
      var Ou = {};
      Object.defineProperty(Ou, "passive", {
        get: function() {
          ui = !0;
        }
      }), window.addEventListener("test", Ou, Ou), window.removeEventListener("test", Ou, Ou);
    } catch {
      ui = !1;
    }
  var wl = null, ei = null, Re = null;
  function Bc() {
    if (Re) return Re;
    var t, l = ei, a = l.length, u, e = "value" in wl ? wl.value : wl.textContent, n = e.length;
    for (t = 0; t < a && l[t] === e[t]; t++) ;
    var i = a - t;
    for (u = 1; u <= i && l[a - u] === e[n - u]; u++) ;
    return Re = e.slice(t, 1 < u ? 1 - u : void 0);
  }
  function Ue(t) {
    var l = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function xe() {
    return !0;
  }
  function Yc() {
    return !1;
  }
  function $t(t) {
    function l(a, u, e, n, i) {
      this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = i, this.currentTarget = null;
      for (var f in t)
        t.hasOwnProperty(f) && (a = t[f], this[f] = a ? a(n) : n[f]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? xe : Yc, this.isPropagationStopped = Yc, this;
    }
    return M(l.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xe);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xe);
      },
      persist: function() {
      },
      isPersistent: xe
    }), l;
  }
  var ga = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ne = $t(ga), Mu = M({}, ga, { view: 0, detail: 0 }), Vh = $t(Mu), ni, ii, Du, He = M({}, Mu, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ci,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Du && (Du && t.type === "mousemove" ? (ni = t.screenX - Du.screenX, ii = t.screenY - Du.screenY) : ii = ni = 0, Du = t), ni);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : ii;
    }
  }), Cc = $t(He), Lh = M({}, He, { dataTransfer: 0 }), Kh = $t(Lh), Jh = M({}, Mu, { relatedTarget: 0 }), fi = $t(Jh), wh = M({}, ga, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Wh = $t(wh), kh = M({}, ga, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), $h = $t(kh), Fh = M({}, ga, { data: 0 }), Gc = $t(Fh), Ph = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ih = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, td = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ld(t) {
    var l = this.nativeEvent;
    return l.getModifierState ? l.getModifierState(t) : (t = td[t]) ? !!l[t] : !1;
  }
  function ci() {
    return ld;
  }
  var ad = M({}, Mu, {
    key: function(t) {
      if (t.key) {
        var l = Ph[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress" ? (t = Ue(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Ih[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ci,
    charCode: function(t) {
      return t.type === "keypress" ? Ue(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ue(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), ud = $t(ad), ed = M({}, He, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Xc = $t(ed), nd = M({}, Mu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ci
  }), id = $t(nd), fd = M({}, ga, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), cd = $t(fd), sd = M({}, He, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), od = $t(sd), rd = M({}, ga, {
    newState: 0,
    oldState: 0
  }), hd = $t(rd), dd = [9, 13, 27, 32], si = Ul && "CompositionEvent" in window, Ru = null;
  Ul && "documentMode" in document && (Ru = document.documentMode);
  var vd = Ul && "TextEvent" in window && !Ru, Qc = Ul && (!si || Ru && 8 < Ru && 11 >= Ru), jc = " ", Zc = !1;
  function Vc(t, l) {
    switch (t) {
      case "keyup":
        return dd.indexOf(l.keyCode) !== -1;
      case "keydown":
        return l.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Lc(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ka = !1;
  function yd(t, l) {
    switch (t) {
      case "compositionend":
        return Lc(l);
      case "keypress":
        return l.which !== 32 ? null : (Zc = !0, jc);
      case "textInput":
        return t = l.data, t === jc && Zc ? null : t;
      default:
        return null;
    }
  }
  function md(t, l) {
    if (Ka)
      return t === "compositionend" || !si && Vc(t, l) ? (t = Bc(), Re = ei = wl = null, Ka = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
          if (l.char && 1 < l.char.length)
            return l.char;
          if (l.which) return String.fromCharCode(l.which);
        }
        return null;
      case "compositionend":
        return Qc && l.locale !== "ko" ? null : l.data;
      default:
        return null;
    }
  }
  var gd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Kc(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l === "input" ? !!gd[t.type] : l === "textarea";
  }
  function Jc(t, l, a, u) {
    Va ? La ? La.push(u) : La = [u] : Va = u, l = _n(l, "onChange"), 0 < l.length && (a = new Ne(
      "onChange",
      "change",
      null,
      a,
      u
    ), t.push({ event: a, listeners: l }));
  }
  var Uu = null, xu = null;
  function Sd(t) {
    Mr(t, 0);
  }
  function qe(t) {
    var l = Au(t);
    if (Mc(l)) return t;
  }
  function wc(t, l) {
    if (t === "change") return l;
  }
  var Wc = !1;
  if (Ul) {
    var oi;
    if (Ul) {
      var ri = "oninput" in document;
      if (!ri) {
        var kc = document.createElement("div");
        kc.setAttribute("oninput", "return;"), ri = typeof kc.oninput == "function";
      }
      oi = ri;
    } else oi = !1;
    Wc = oi && (!document.documentMode || 9 < document.documentMode);
  }
  function $c() {
    Uu && (Uu.detachEvent("onpropertychange", Fc), xu = Uu = null);
  }
  function Fc(t) {
    if (t.propertyName === "value" && qe(xu)) {
      var l = [];
      Jc(
        l,
        xu,
        t,
        li(t)
      ), qc(Sd, l);
    }
  }
  function bd(t, l, a) {
    t === "focusin" ? ($c(), Uu = l, xu = a, Uu.attachEvent("onpropertychange", Fc)) : t === "focusout" && $c();
  }
  function _d(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return qe(xu);
  }
  function pd(t, l) {
    if (t === "click") return qe(l);
  }
  function Td(t, l) {
    if (t === "input" || t === "change")
      return qe(l);
  }
  function Ed(t, l) {
    return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
  }
  var ul = typeof Object.is == "function" ? Object.is : Ed;
  function Nu(t, l) {
    if (ul(t, l)) return !0;
    if (typeof t != "object" || t === null || typeof l != "object" || l === null)
      return !1;
    var a = Object.keys(t), u = Object.keys(l);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Qn.call(l, e) || !ul(t[e], l[e]))
        return !1;
    }
    return !0;
  }
  function Pc(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ic(t, l) {
    var a = Pc(t);
    t = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (u = t + a.textContent.length, t <= l && u >= l)
          return { node: a, offset: l - t };
        t = u;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Pc(a);
    }
  }
  function ts(t, l) {
    return t && l ? t === l ? !0 : t && t.nodeType === 3 ? !1 : l && l.nodeType === 3 ? ts(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : !1 : !1;
  }
  function ls(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var l = Me(t.document); l instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof l.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = l.contentWindow;
      else break;
      l = Me(t.document);
    }
    return l;
  }
  function hi(t) {
    var l = t && t.nodeName && t.nodeName.toLowerCase();
    return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
  }
  var Ad = Ul && "documentMode" in document && 11 >= document.documentMode, Ja = null, di = null, Hu = null, vi = !1;
  function as(t, l, a) {
    var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    vi || Ja == null || Ja !== Me(u) || (u = Ja, "selectionStart" in u && hi(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
      anchorNode: u.anchorNode,
      anchorOffset: u.anchorOffset,
      focusNode: u.focusNode,
      focusOffset: u.focusOffset
    }), Hu && Nu(Hu, u) || (Hu = u, u = _n(di, "onSelect"), 0 < u.length && (l = new Ne(
      "onSelect",
      "select",
      null,
      l,
      a
    ), t.push({ event: l, listeners: u }), l.target = Ja)));
  }
  function Sa(t, l) {
    var a = {};
    return a[t.toLowerCase()] = l.toLowerCase(), a["Webkit" + t] = "webkit" + l, a["Moz" + t] = "moz" + l, a;
  }
  var wa = {
    animationend: Sa("Animation", "AnimationEnd"),
    animationiteration: Sa("Animation", "AnimationIteration"),
    animationstart: Sa("Animation", "AnimationStart"),
    transitionrun: Sa("Transition", "TransitionRun"),
    transitionstart: Sa("Transition", "TransitionStart"),
    transitioncancel: Sa("Transition", "TransitionCancel"),
    transitionend: Sa("Transition", "TransitionEnd")
  }, yi = {}, us = {};
  Ul && (us = document.createElement("div").style, "AnimationEvent" in window || (delete wa.animationend.animation, delete wa.animationiteration.animation, delete wa.animationstart.animation), "TransitionEvent" in window || delete wa.transitionend.transition);
  function ba(t) {
    if (yi[t]) return yi[t];
    if (!wa[t]) return t;
    var l = wa[t], a;
    for (a in l)
      if (l.hasOwnProperty(a) && a in us)
        return yi[t] = l[a];
    return t;
  }
  var es = ba("animationend"), ns = ba("animationiteration"), is = ba("animationstart"), zd = ba("transitionrun"), Od = ba("transitionstart"), Md = ba("transitioncancel"), fs = ba("transitionend"), cs = /* @__PURE__ */ new Map(), mi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  mi.push("scrollEnd");
  function bl(t, l) {
    cs.set(t, l), ma(l, [t]);
  }
  var ss = /* @__PURE__ */ new WeakMap();
  function hl(t, l) {
    if (typeof t == "object" && t !== null) {
      var a = ss.get(t);
      return a !== void 0 ? a : (l = {
        value: t,
        source: l,
        stack: zc(l)
      }, ss.set(t, l), l);
    }
    return {
      value: t,
      source: l,
      stack: zc(l)
    };
  }
  var dl = [], Wa = 0, gi = 0;
  function Be() {
    for (var t = Wa, l = gi = Wa = 0; l < t; ) {
      var a = dl[l];
      dl[l++] = null;
      var u = dl[l];
      dl[l++] = null;
      var e = dl[l];
      dl[l++] = null;
      var n = dl[l];
      if (dl[l++] = null, u !== null && e !== null) {
        var i = u.pending;
        i === null ? e.next = e : (e.next = i.next, i.next = e), u.pending = e;
      }
      n !== 0 && os(a, e, n);
    }
  }
  function Ye(t, l, a, u) {
    dl[Wa++] = t, dl[Wa++] = l, dl[Wa++] = a, dl[Wa++] = u, gi |= u, t.lanes |= u, t = t.alternate, t !== null && (t.lanes |= u);
  }
  function Si(t, l, a, u) {
    return Ye(t, l, a, u), Ce(t);
  }
  function ka(t, l) {
    return Ye(t, null, null, l), Ce(t);
  }
  function os(t, l, a) {
    t.lanes |= a;
    var u = t.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = t.return; n !== null; )
      n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (t = n.stateNode, t === null || t._visibility & 1 || (e = !0)), t = n, n = n.return;
    return t.tag === 3 ? (n = t.stateNode, e && l !== null && (e = 31 - al(a), t = n.hiddenUpdates, u = t[e], u === null ? t[e] = [l] : u.push(l), l.lane = a | 536870912), n) : null;
  }
  function Ce(t) {
    if (50 < ee)
      throw ee = 0, zf = null, Error(c(185));
    for (var l = t.return; l !== null; )
      t = l, l = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var $a = {};
  function Dd(t, l, a, u) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function el(t, l, a, u) {
    return new Dd(t, l, a, u);
  }
  function bi(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function xl(t, l) {
    var a = t.alternate;
    return a === null ? (a = el(
      t.tag,
      l,
      t.key,
      t.mode
    ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = l, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 65011712, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, l = t.dependencies, a.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function rs(t, l) {
    t.flags &= 65011714;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, l = a.dependencies, t.dependencies = l === null ? null : {
      lanes: l.lanes,
      firstContext: l.firstContext
    }), t;
  }
  function Ge(t, l, a, u, e, n) {
    var i = 0;
    if (u = t, typeof t == "function") bi(t) && (i = 1);
    else if (typeof t == "string")
      i = Uv(
        t,
        a,
        j.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case lt:
          return t = el(31, a, l, e), t.elementType = lt, t.lanes = n, t;
        case P:
          return _a(a.children, e, n, l);
        case w:
          i = 8, e |= 24;
          break;
        case J:
          return t = el(12, a, l, e | 2), t.elementType = J, t.lanes = n, t;
        case nt:
          return t = el(13, a, l, e), t.elementType = nt, t.lanes = n, t;
        case Jt:
          return t = el(19, a, l, e), t.elementType = Jt, t.lanes = n, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case F:
              case bt:
                i = 10;
                break t;
              case pt:
                i = 9;
                break t;
              case zt:
                i = 11;
                break t;
              case wt:
                i = 14;
                break t;
              case Xt:
                i = 16, u = null;
                break t;
            }
          i = 29, a = Error(
            c(130, t === null ? "null" : typeof t, "")
          ), u = null;
      }
    return l = el(i, a, l, e), l.elementType = t, l.type = u, l.lanes = n, l;
  }
  function _a(t, l, a, u) {
    return t = el(7, t, u, l), t.lanes = a, t;
  }
  function _i(t, l, a) {
    return t = el(6, t, null, l), t.lanes = a, t;
  }
  function pi(t, l, a) {
    return l = el(
      4,
      t.children !== null ? t.children : [],
      t.key,
      l
    ), l.lanes = a, l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, l;
  }
  var Fa = [], Pa = 0, Xe = null, Qe = 0, vl = [], yl = 0, pa = null, Nl = 1, Hl = "";
  function Ta(t, l) {
    Fa[Pa++] = Qe, Fa[Pa++] = Xe, Xe = t, Qe = l;
  }
  function hs(t, l, a) {
    vl[yl++] = Nl, vl[yl++] = Hl, vl[yl++] = pa, pa = t;
    var u = Nl;
    t = Hl;
    var e = 32 - al(u) - 1;
    u &= ~(1 << e), a += 1;
    var n = 32 - al(l) + e;
    if (30 < n) {
      var i = e - e % 5;
      n = (u & (1 << i) - 1).toString(32), u >>= i, e -= i, Nl = 1 << 32 - al(l) + e | a << e | u, Hl = n + t;
    } else
      Nl = 1 << n | a << e | u, Hl = t;
  }
  function Ti(t) {
    t.return !== null && (Ta(t, 1), hs(t, 1, 0));
  }
  function Ei(t) {
    for (; t === Xe; )
      Xe = Fa[--Pa], Fa[Pa] = null, Qe = Fa[--Pa], Fa[Pa] = null;
    for (; t === pa; )
      pa = vl[--yl], vl[yl] = null, Hl = vl[--yl], vl[yl] = null, Nl = vl[--yl], vl[yl] = null;
  }
  var Wt = null, Ot = null, ot = !1, Ea = null, Al = !1, Ai = Error(c(519));
  function Aa(t) {
    var l = Error(c(418, ""));
    throw Yu(hl(l, t)), Ai;
  }
  function ds(t) {
    var l = t.stateNode, a = t.type, u = t.memoizedProps;
    switch (l[Vt] = t, l[kt] = u, a) {
      case "dialog":
        et("cancel", l), et("close", l);
        break;
      case "iframe":
      case "object":
      case "embed":
        et("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ie.length; a++)
          et(ie[a], l);
        break;
      case "source":
        et("error", l);
        break;
      case "img":
      case "image":
      case "link":
        et("error", l), et("load", l);
        break;
      case "details":
        et("toggle", l);
        break;
      case "input":
        et("invalid", l), Dc(
          l,
          u.value,
          u.defaultValue,
          u.checked,
          u.defaultChecked,
          u.type,
          u.name,
          !0
        ), Oe(l);
        break;
      case "select":
        et("invalid", l);
        break;
      case "textarea":
        et("invalid", l), Uc(l, u.value, u.defaultValue, u.children), Oe(l);
    }
    a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || l.textContent === "" + a || u.suppressHydrationWarning === !0 || xr(l.textContent, a) ? (u.popover != null && (et("beforetoggle", l), et("toggle", l)), u.onScroll != null && et("scroll", l), u.onScrollEnd != null && et("scrollend", l), u.onClick != null && (l.onclick = pn), l = !0) : l = !1, l || Aa(t);
  }
  function vs(t) {
    for (Wt = t.return; Wt; )
      switch (Wt.tag) {
        case 5:
        case 13:
          Al = !1;
          return;
        case 27:
        case 3:
          Al = !0;
          return;
        default:
          Wt = Wt.return;
      }
  }
  function qu(t) {
    if (t !== Wt) return !1;
    if (!ot) return vs(t), ot = !0, !1;
    var l = t.tag, a;
    if ((a = l !== 3 && l !== 27) && ((a = l === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || jf(t.type, t.memoizedProps)), a = !a), a && Ot && Aa(t), vs(t), l === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      t: {
        for (t = t.nextSibling, l = 0; t; ) {
          if (t.nodeType === 8)
            if (a = t.data, a === "/$") {
              if (l === 0) {
                Ot = pl(t.nextSibling);
                break t;
              }
              l--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || l++;
          t = t.nextSibling;
        }
        Ot = null;
      }
    } else
      l === 27 ? (l = Ot, sa(t.type) ? (t = Kf, Kf = null, Ot = t) : Ot = l) : Ot = Wt ? pl(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Bu() {
    Ot = Wt = null, ot = !1;
  }
  function ys() {
    var t = Ea;
    return t !== null && (It === null ? It = t : It.push.apply(
      It,
      t
    ), Ea = null), t;
  }
  function Yu(t) {
    Ea === null ? Ea = [t] : Ea.push(t);
  }
  var zi = O(null), za = null, ql = null;
  function Wl(t, l, a) {
    H(zi, l._currentValue), l._currentValue = a;
  }
  function Bl(t) {
    t._currentValue = zi.current, N(zi);
  }
  function Oi(t, l, a) {
    for (; t !== null; ) {
      var u = t.alternate;
      if ((t.childLanes & l) !== l ? (t.childLanes |= l, u !== null && (u.childLanes |= l)) : u !== null && (u.childLanes & l) !== l && (u.childLanes |= l), t === a) break;
      t = t.return;
    }
  }
  function Mi(t, l, a, u) {
    var e = t.child;
    for (e !== null && (e.return = t); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var i = e.child;
        n = n.firstContext;
        t: for (; n !== null; ) {
          var f = n;
          n = e;
          for (var s = 0; s < l.length; s++)
            if (f.context === l[s]) {
              n.lanes |= a, f = n.alternate, f !== null && (f.lanes |= a), Oi(
                n.return,
                a,
                t
              ), u || (i = null);
              break t;
            }
          n = f.next;
        }
      } else if (e.tag === 18) {
        if (i = e.return, i === null) throw Error(c(341));
        i.lanes |= a, n = i.alternate, n !== null && (n.lanes |= a), Oi(i, a, t), i = null;
      } else i = e.child;
      if (i !== null) i.return = e;
      else
        for (i = e; i !== null; ) {
          if (i === t) {
            i = null;
            break;
          }
          if (e = i.sibling, e !== null) {
            e.return = i.return, i = e;
            break;
          }
          i = i.return;
        }
      e = i;
    }
  }
  function Cu(t, l, a, u) {
    t = null;
    for (var e = l, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var i = e.alternate;
        if (i === null) throw Error(c(387));
        if (i = i.memoizedProps, i !== null) {
          var f = e.type;
          ul(e.pendingProps.value, i.value) || (t !== null ? t.push(f) : t = [f]);
        }
      } else if (e === tl.current) {
        if (i = e.alternate, i === null) throw Error(c(387));
        i.memoizedState.memoizedState !== e.memoizedState.memoizedState && (t !== null ? t.push(he) : t = [he]);
      }
      e = e.return;
    }
    t !== null && Mi(
      l,
      t,
      a,
      u
    ), l.flags |= 262144;
  }
  function je(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ul(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Oa(t) {
    za = t, ql = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Lt(t) {
    return ms(za, t);
  }
  function Ze(t, l) {
    return za === null && Oa(t), ms(t, l);
  }
  function ms(t, l) {
    var a = l._currentValue;
    if (l = { context: l, memoizedValue: a, next: null }, ql === null) {
      if (t === null) throw Error(c(308));
      ql = l, t.dependencies = { lanes: 0, firstContext: l }, t.flags |= 524288;
    } else ql = ql.next = l;
    return a;
  }
  var Rd = typeof AbortController < "u" ? AbortController : function() {
    var t = [], l = this.signal = {
      aborted: !1,
      addEventListener: function(a, u) {
        t.push(u);
      }
    };
    this.abort = function() {
      l.aborted = !0, t.forEach(function(a) {
        return a();
      });
    };
  }, Ud = d.unstable_scheduleCallback, xd = d.unstable_NormalPriority, Ht = {
    $$typeof: bt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Di() {
    return {
      controller: new Rd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Gu(t) {
    t.refCount--, t.refCount === 0 && Ud(xd, function() {
      t.controller.abort();
    });
  }
  var Xu = null, Ri = 0, Ia = 0, tu = null;
  function Nd(t, l) {
    if (Xu === null) {
      var a = Xu = [];
      Ri = 0, Ia = Nf(), tu = {
        status: "pending",
        value: void 0,
        then: function(u) {
          a.push(u);
        }
      };
    }
    return Ri++, l.then(gs, gs), l;
  }
  function gs() {
    if (--Ri === 0 && Xu !== null) {
      tu !== null && (tu.status = "fulfilled");
      var t = Xu;
      Xu = null, Ia = 0, tu = null;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
  }
  function Hd(t, l) {
    var a = [], u = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        a.push(e);
      }
    };
    return t.then(
      function() {
        u.status = "fulfilled", u.value = l;
        for (var e = 0; e < a.length; e++) (0, a[e])(l);
      },
      function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
          (0, a[e])(void 0);
      }
    ), u;
  }
  var Ss = _.S;
  _.S = function(t, l) {
    typeof l == "object" && l !== null && typeof l.then == "function" && Nd(t, l), Ss !== null && Ss(t, l);
  };
  var Ma = O(null);
  function Ui() {
    var t = Ma.current;
    return t !== null ? t : _t.pooledCache;
  }
  function Ve(t, l) {
    l === null ? H(Ma, Ma.current) : H(Ma, l.pool);
  }
  function bs() {
    var t = Ui();
    return t === null ? null : { parent: Ht._currentValue, pool: t };
  }
  var Qu = Error(c(460)), _s = Error(c(474)), Le = Error(c(542)), xi = { then: function() {
  } };
  function ps(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Ke() {
  }
  function Ts(t, l, a) {
    switch (a = t[a], a === void 0 ? t.push(l) : a !== l && (l.then(Ke, Ke), l = a), l.status) {
      case "fulfilled":
        return l.value;
      case "rejected":
        throw t = l.reason, As(t), t;
      default:
        if (typeof l.status == "string") l.then(Ke, Ke);
        else {
          if (t = _t, t !== null && 100 < t.shellSuspendCounter)
            throw Error(c(482));
          t = l, t.status = "pending", t.then(
            function(u) {
              if (l.status === "pending") {
                var e = l;
                e.status = "fulfilled", e.value = u;
              }
            },
            function(u) {
              if (l.status === "pending") {
                var e = l;
                e.status = "rejected", e.reason = u;
              }
            }
          );
        }
        switch (l.status) {
          case "fulfilled":
            return l.value;
          case "rejected":
            throw t = l.reason, As(t), t;
        }
        throw ju = l, Qu;
    }
  }
  var ju = null;
  function Es() {
    if (ju === null) throw Error(c(459));
    var t = ju;
    return ju = null, t;
  }
  function As(t) {
    if (t === Qu || t === Le)
      throw Error(c(483));
  }
  var kl = !1;
  function Ni(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hi(t, l) {
    t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function $l(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Fl(t, l, a) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (rt & 2) !== 0) {
      var e = u.pending;
      return e === null ? l.next = l : (l.next = e.next, e.next = l), u.pending = l, l = Ce(t), os(t, null, a), l;
    }
    return Ye(t, u, l, a), Ce(t);
  }
  function Zu(t, l, a) {
    if (l = l.updateQueue, l !== null && (l = l.shared, (a & 4194048) !== 0)) {
      var u = l.lanes;
      u &= t.pendingLanes, a |= u, l.lanes = a, gc(t, a);
    }
  }
  function qi(t, l) {
    var a = t.updateQueue, u = t.alternate;
    if (u !== null && (u = u.updateQueue, a === u)) {
      var e = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = i : n = n.next = i, a = a.next;
        } while (a !== null);
        n === null ? e = n = l : n = n.next = l;
      } else e = n = l;
      a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks
      }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = l : t.next = l, a.lastBaseUpdate = l;
  }
  var Bi = !1;
  function Vu() {
    if (Bi) {
      var t = tu;
      if (t !== null) throw t;
    }
  }
  function Lu(t, l, a, u) {
    Bi = !1;
    var e = t.updateQueue;
    kl = !1;
    var n = e.firstBaseUpdate, i = e.lastBaseUpdate, f = e.shared.pending;
    if (f !== null) {
      e.shared.pending = null;
      var s = f, m = s.next;
      s.next = null, i === null ? n = m : i.next = m, i = s;
      var p = t.alternate;
      p !== null && (p = p.updateQueue, f = p.lastBaseUpdate, f !== i && (f === null ? p.firstBaseUpdate = m : f.next = m, p.lastBaseUpdate = s));
    }
    if (n !== null) {
      var A = e.baseState;
      i = 0, p = m = s = null, f = n;
      do {
        var g = f.lane & -536870913, S = g !== f.lane;
        if (S ? (ft & g) === g : (u & g) === g) {
          g !== 0 && g === Ia && (Bi = !0), p !== null && (p = p.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          t: {
            var L = t, Z = f;
            g = l;
            var yt = a;
            switch (Z.tag) {
              case 1:
                if (L = Z.payload, typeof L == "function") {
                  A = L.call(yt, A, g);
                  break t;
                }
                A = L;
                break t;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = Z.payload, g = typeof L == "function" ? L.call(yt, A, g) : L, g == null) break t;
                A = M({}, A, g);
                break t;
              case 2:
                kl = !0;
            }
          }
          g = f.callback, g !== null && (t.flags |= 64, S && (t.flags |= 8192), S = e.callbacks, S === null ? e.callbacks = [g] : S.push(g));
        } else
          S = {
            lane: g,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, p === null ? (m = p = S, s = A) : p = p.next = S, i |= g;
        if (f = f.next, f === null) {
          if (f = e.shared.pending, f === null)
            break;
          S = f, f = S.next, S.next = null, e.lastBaseUpdate = S, e.shared.pending = null;
        }
      } while (!0);
      p === null && (s = A), e.baseState = s, e.firstBaseUpdate = m, e.lastBaseUpdate = p, n === null && (e.shared.lanes = 0), na |= i, t.lanes = i, t.memoizedState = A;
    }
  }
  function zs(t, l) {
    if (typeof t != "function")
      throw Error(c(191, t));
    t.call(l);
  }
  function Os(t, l) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++)
        zs(a[t], l);
  }
  var lu = O(null), Je = O(0);
  function Ms(t, l) {
    t = Zl, H(Je, t), H(lu, l), Zl = t | l.baseLanes;
  }
  function Yi() {
    H(Je, Zl), H(lu, lu.current);
  }
  function Ci() {
    Zl = Je.current, N(lu), N(Je);
  }
  var Pl = 0, I = null, dt = null, Ut = null, we = !1, au = !1, Da = !1, We = 0, Ku = 0, uu = null, qd = 0;
  function Dt() {
    throw Error(c(321));
  }
  function Gi(t, l) {
    if (l === null) return !1;
    for (var a = 0; a < l.length && a < t.length; a++)
      if (!ul(t[a], l[a])) return !1;
    return !0;
  }
  function Xi(t, l, a, u, e, n) {
    return Pl = n, I = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, _.H = t === null || t.memoizedState === null ? oo : ro, Da = !1, n = a(u, e), Da = !1, au && (n = Rs(
      l,
      a,
      u,
      e
    )), Ds(t), n;
  }
  function Ds(t) {
    _.H = tn;
    var l = dt !== null && dt.next !== null;
    if (Pl = 0, Ut = dt = I = null, we = !1, Ku = 0, uu = null, l) throw Error(c(300));
    t === null || Yt || (t = t.dependencies, t !== null && je(t) && (Yt = !0));
  }
  function Rs(t, l, a, u) {
    I = t;
    var e = 0;
    do {
      if (au && (uu = null), Ku = 0, au = !1, 25 <= e) throw Error(c(301));
      if (e += 1, Ut = dt = null, t.updateQueue != null) {
        var n = t.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      _.H = jd, n = l(a, u);
    } while (au);
    return n;
  }
  function Bd() {
    var t = _.H, l = t.useState()[0];
    return l = typeof l.then == "function" ? Ju(l) : l, t = t.useState()[0], (dt !== null ? dt.memoizedState : null) !== t && (I.flags |= 1024), l;
  }
  function Qi() {
    var t = We !== 0;
    return We = 0, t;
  }
  function ji(t, l, a) {
    l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~a;
  }
  function Zi(t) {
    if (we) {
      for (t = t.memoizedState; t !== null; ) {
        var l = t.queue;
        l !== null && (l.pending = null), t = t.next;
      }
      we = !1;
    }
    Pl = 0, Ut = dt = I = null, au = !1, Ku = We = 0, uu = null;
  }
  function Ft() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ut === null ? I.memoizedState = Ut = t : Ut = Ut.next = t, Ut;
  }
  function xt() {
    if (dt === null) {
      var t = I.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = dt.next;
    var l = Ut === null ? I.memoizedState : Ut.next;
    if (l !== null)
      Ut = l, dt = t;
    else {
      if (t === null)
        throw I.alternate === null ? Error(c(467)) : Error(c(310));
      dt = t, t = {
        memoizedState: dt.memoizedState,
        baseState: dt.baseState,
        baseQueue: dt.baseQueue,
        queue: dt.queue,
        next: null
      }, Ut === null ? I.memoizedState = Ut = t : Ut = Ut.next = t;
    }
    return Ut;
  }
  function Vi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ju(t) {
    var l = Ku;
    return Ku += 1, uu === null && (uu = []), t = Ts(uu, t, l), l = I, (Ut === null ? l.memoizedState : Ut.next) === null && (l = l.alternate, _.H = l === null || l.memoizedState === null ? oo : ro), t;
  }
  function ke(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ju(t);
      if (t.$$typeof === bt) return Lt(t);
    }
    throw Error(c(438, String(t)));
  }
  function Li(t) {
    var l = null, a = I.updateQueue;
    if (a !== null && (l = a.memoCache), l == null) {
      var u = I.alternate;
      u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (l = {
        data: u.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (l == null && (l = { data: [], index: 0 }), a === null && (a = Vi(), I.updateQueue = a), a.memoCache = l, a = l.data[l.index], a === void 0)
      for (a = l.data[l.index] = Array(t), u = 0; u < t; u++)
        a[u] = W;
    return l.index++, a;
  }
  function Yl(t, l) {
    return typeof l == "function" ? l(t) : l;
  }
  function $e(t) {
    var l = xt();
    return Ki(l, dt, t);
  }
  function Ki(t, l, a) {
    var u = t.queue;
    if (u === null) throw Error(c(311));
    u.lastRenderedReducer = a;
    var e = t.baseQueue, n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var i = e.next;
        e.next = n.next, n.next = i;
      }
      l.baseQueue = e = n, u.pending = null;
    }
    if (n = t.baseState, e === null) t.memoizedState = n;
    else {
      l = e.next;
      var f = i = null, s = null, m = l, p = !1;
      do {
        var A = m.lane & -536870913;
        if (A !== m.lane ? (ft & A) === A : (Pl & A) === A) {
          var g = m.revertLane;
          if (g === 0)
            s !== null && (s = s.next = {
              lane: 0,
              revertLane: 0,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), A === Ia && (p = !0);
          else if ((Pl & g) === g) {
            m = m.next, g === Ia && (p = !0);
            continue;
          } else
            A = {
              lane: 0,
              revertLane: m.revertLane,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }, s === null ? (f = s = A, i = n) : s = s.next = A, I.lanes |= g, na |= g;
          A = m.action, Da && a(n, A), n = m.hasEagerState ? m.eagerState : a(n, A);
        } else
          g = {
            lane: A,
            revertLane: m.revertLane,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, s === null ? (f = s = g, i = n) : s = s.next = g, I.lanes |= A, na |= A;
        m = m.next;
      } while (m !== null && m !== l);
      if (s === null ? i = n : s.next = f, !ul(n, t.memoizedState) && (Yt = !0, p && (a = tu, a !== null)))
        throw a;
      t.memoizedState = n, t.baseState = i, t.baseQueue = s, u.lastRenderedState = n;
    }
    return e === null && (u.lanes = 0), [t.memoizedState, u.dispatch];
  }
  function Ji(t) {
    var l = xt(), a = l.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = t;
    var u = a.dispatch, e = a.pending, n = l.memoizedState;
    if (e !== null) {
      a.pending = null;
      var i = e = e.next;
      do
        n = t(n, i.action), i = i.next;
      while (i !== e);
      ul(n, l.memoizedState) || (Yt = !0), l.memoizedState = n, l.baseQueue === null && (l.baseState = n), a.lastRenderedState = n;
    }
    return [n, u];
  }
  function Us(t, l, a) {
    var u = I, e = xt(), n = ot;
    if (n) {
      if (a === void 0) throw Error(c(407));
      a = a();
    } else a = l();
    var i = !ul(
      (dt || e).memoizedState,
      a
    );
    i && (e.memoizedState = a, Yt = !0), e = e.queue;
    var f = Hs.bind(null, u, e, t);
    if (wu(2048, 8, f, [t]), e.getSnapshot !== l || i || Ut !== null && Ut.memoizedState.tag & 1) {
      if (u.flags |= 2048, eu(
        9,
        Fe(),
        Ns.bind(
          null,
          u,
          e,
          a,
          l
        ),
        null
      ), _t === null) throw Error(c(349));
      n || (Pl & 124) !== 0 || xs(u, l, a);
    }
    return a;
  }
  function xs(t, l, a) {
    t.flags |= 16384, t = { getSnapshot: l, value: a }, l = I.updateQueue, l === null ? (l = Vi(), I.updateQueue = l, l.stores = [t]) : (a = l.stores, a === null ? l.stores = [t] : a.push(t));
  }
  function Ns(t, l, a, u) {
    l.value = a, l.getSnapshot = u, qs(l) && Bs(t);
  }
  function Hs(t, l, a) {
    return a(function() {
      qs(l) && Bs(t);
    });
  }
  function qs(t) {
    var l = t.getSnapshot;
    t = t.value;
    try {
      var a = l();
      return !ul(t, a);
    } catch {
      return !0;
    }
  }
  function Bs(t) {
    var l = ka(t, 2);
    l !== null && sl(l, t, 2);
  }
  function wi(t) {
    var l = Ft();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), Da) {
        Kl(!0);
        try {
          a();
        } finally {
          Kl(!1);
        }
      }
    }
    return l.memoizedState = l.baseState = t, l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Yl,
      lastRenderedState: t
    }, l;
  }
  function Ys(t, l, a, u) {
    return t.baseState = a, Ki(
      t,
      dt,
      typeof u == "function" ? u : Yl
    );
  }
  function Yd(t, l, a, u, e) {
    if (Ie(t)) throw Error(c(485));
    if (t = l.action, t !== null) {
      var n = {
        payload: e,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          n.listeners.push(i);
        }
      };
      _.T !== null ? a(!0) : n.isTransition = !1, u(n), a = l.pending, a === null ? (n.next = l.pending = n, Cs(l, n)) : (n.next = a.next, l.pending = a.next = n);
    }
  }
  function Cs(t, l) {
    var a = l.action, u = l.payload, e = t.state;
    if (l.isTransition) {
      var n = _.T, i = {};
      _.T = i;
      try {
        var f = a(e, u), s = _.S;
        s !== null && s(i, f), Gs(t, l, f);
      } catch (m) {
        Wi(t, l, m);
      } finally {
        _.T = n;
      }
    } else
      try {
        n = a(e, u), Gs(t, l, n);
      } catch (m) {
        Wi(t, l, m);
      }
  }
  function Gs(t, l, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(u) {
        Xs(t, l, u);
      },
      function(u) {
        return Wi(t, l, u);
      }
    ) : Xs(t, l, a);
  }
  function Xs(t, l, a) {
    l.status = "fulfilled", l.value = a, Qs(l), t.state = a, l = t.pending, l !== null && (a = l.next, a === l ? t.pending = null : (a = a.next, l.next = a, Cs(t, a)));
  }
  function Wi(t, l, a) {
    var u = t.pending;
    if (t.pending = null, u !== null) {
      u = u.next;
      do
        l.status = "rejected", l.reason = a, Qs(l), l = l.next;
      while (l !== u);
    }
    t.action = null;
  }
  function Qs(t) {
    t = t.listeners;
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
  function js(t, l) {
    return l;
  }
  function Zs(t, l) {
    if (ot) {
      var a = _t.formState;
      if (a !== null) {
        t: {
          var u = I;
          if (ot) {
            if (Ot) {
              l: {
                for (var e = Ot, n = Al; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break l;
                  }
                  if (e = pl(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break l;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                Ot = pl(
                  e.nextSibling
                ), u = e.data === "F!";
                break t;
              }
            }
            Aa(u);
          }
          u = !1;
        }
        u && (l = a[0]);
      }
    }
    return a = Ft(), a.memoizedState = a.baseState = l, u = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: js,
      lastRenderedState: l
    }, a.queue = u, a = fo.bind(
      null,
      I,
      u
    ), u.dispatch = a, u = wi(!1), n = Ii.bind(
      null,
      I,
      !1,
      u.queue
    ), u = Ft(), e = {
      state: l,
      dispatch: null,
      action: t,
      pending: null
    }, u.queue = e, a = Yd.bind(
      null,
      I,
      e,
      n,
      a
    ), e.dispatch = a, u.memoizedState = t, [l, a, !1];
  }
  function Vs(t) {
    var l = xt();
    return Ls(l, dt, t);
  }
  function Ls(t, l, a) {
    if (l = Ki(
      t,
      l,
      js
    )[0], t = $e(Yl)[0], typeof l == "object" && l !== null && typeof l.then == "function")
      try {
        var u = Ju(l);
      } catch (i) {
        throw i === Qu ? Le : i;
      }
    else u = l;
    l = xt();
    var e = l.queue, n = e.dispatch;
    return a !== l.memoizedState && (I.flags |= 2048, eu(
      9,
      Fe(),
      Cd.bind(null, e, a),
      null
    )), [u, n, t];
  }
  function Cd(t, l) {
    t.action = l;
  }
  function Ks(t) {
    var l = xt(), a = dt;
    if (a !== null)
      return Ls(l, a, t);
    xt(), l = l.memoizedState, a = xt();
    var u = a.queue.dispatch;
    return a.memoizedState = t, [l, u, !1];
  }
  function eu(t, l, a, u) {
    return t = { tag: t, create: a, deps: u, inst: l, next: null }, l = I.updateQueue, l === null && (l = Vi(), I.updateQueue = l), a = l.lastEffect, a === null ? l.lastEffect = t.next = t : (u = a.next, a.next = t, t.next = u, l.lastEffect = t), t;
  }
  function Fe() {
    return { destroy: void 0, resource: void 0 };
  }
  function Js() {
    return xt().memoizedState;
  }
  function Pe(t, l, a, u) {
    var e = Ft();
    u = u === void 0 ? null : u, I.flags |= t, e.memoizedState = eu(
      1 | l,
      Fe(),
      a,
      u
    );
  }
  function wu(t, l, a, u) {
    var e = xt();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    dt !== null && u !== null && Gi(u, dt.memoizedState.deps) ? e.memoizedState = eu(l, n, a, u) : (I.flags |= t, e.memoizedState = eu(
      1 | l,
      n,
      a,
      u
    ));
  }
  function ws(t, l) {
    Pe(8390656, 8, t, l);
  }
  function Ws(t, l) {
    wu(2048, 8, t, l);
  }
  function ks(t, l) {
    return wu(4, 2, t, l);
  }
  function $s(t, l) {
    return wu(4, 4, t, l);
  }
  function Fs(t, l) {
    if (typeof l == "function") {
      t = t();
      var a = l(t);
      return function() {
        typeof a == "function" ? a() : l(null);
      };
    }
    if (l != null)
      return t = t(), l.current = t, function() {
        l.current = null;
      };
  }
  function Ps(t, l, a) {
    a = a != null ? a.concat([t]) : null, wu(4, 4, Fs.bind(null, l, t), a);
  }
  function ki() {
  }
  function Is(t, l) {
    var a = xt();
    l = l === void 0 ? null : l;
    var u = a.memoizedState;
    return l !== null && Gi(l, u[1]) ? u[0] : (a.memoizedState = [t, l], t);
  }
  function to(t, l) {
    var a = xt();
    l = l === void 0 ? null : l;
    var u = a.memoizedState;
    if (l !== null && Gi(l, u[1]))
      return u[0];
    if (u = t(), Da) {
      Kl(!0);
      try {
        t();
      } finally {
        Kl(!1);
      }
    }
    return a.memoizedState = [u, l], u;
  }
  function $i(t, l, a) {
    return a === void 0 || (Pl & 1073741824) !== 0 ? t.memoizedState = l : (t.memoizedState = a, t = er(), I.lanes |= t, na |= t, a);
  }
  function lo(t, l, a, u) {
    return ul(a, l) ? a : lu.current !== null ? (t = $i(t, a, u), ul(t, l) || (Yt = !0), t) : (Pl & 42) === 0 ? (Yt = !0, t.memoizedState = a) : (t = er(), I.lanes |= t, na |= t, l);
  }
  function ao(t, l, a, u, e) {
    var n = R.p;
    R.p = n !== 0 && 8 > n ? n : 8;
    var i = _.T, f = {};
    _.T = f, Ii(t, !1, l, a);
    try {
      var s = e(), m = _.S;
      if (m !== null && m(f, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var p = Hd(
          s,
          u
        );
        Wu(
          t,
          l,
          p,
          cl(t)
        );
      } else
        Wu(
          t,
          l,
          u,
          cl(t)
        );
    } catch (A) {
      Wu(
        t,
        l,
        { then: function() {
        }, status: "rejected", reason: A },
        cl()
      );
    } finally {
      R.p = n, _.T = i;
    }
  }
  function Gd() {
  }
  function Fi(t, l, a, u) {
    if (t.tag !== 5) throw Error(c(476));
    var e = uo(t).queue;
    ao(
      t,
      e,
      l,
      q,
      a === null ? Gd : function() {
        return eo(t), a(u);
      }
    );
  }
  function uo(t) {
    var l = t.memoizedState;
    if (l !== null) return l;
    l = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yl,
        lastRenderedState: q
      },
      next: null
    };
    var a = {};
    return l.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yl,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
  }
  function eo(t) {
    var l = uo(t).next.queue;
    Wu(t, l, {}, cl());
  }
  function Pi() {
    return Lt(he);
  }
  function no() {
    return xt().memoizedState;
  }
  function io() {
    return xt().memoizedState;
  }
  function Xd(t) {
    for (var l = t.return; l !== null; ) {
      switch (l.tag) {
        case 24:
        case 3:
          var a = cl();
          t = $l(a);
          var u = Fl(l, t, a);
          u !== null && (sl(u, l, a), Zu(u, l, a)), l = { cache: Di() }, t.payload = l;
          return;
      }
      l = l.return;
    }
  }
  function Qd(t, l, a) {
    var u = cl();
    a = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ie(t) ? co(l, a) : (a = Si(t, l, a, u), a !== null && (sl(a, t, u), so(a, l, u)));
  }
  function fo(t, l, a) {
    var u = cl();
    Wu(t, l, a, u);
  }
  function Wu(t, l, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ie(t)) co(l, e);
    else {
      var n = t.alternate;
      if (t.lanes === 0 && (n === null || n.lanes === 0) && (n = l.lastRenderedReducer, n !== null))
        try {
          var i = l.lastRenderedState, f = n(i, a);
          if (e.hasEagerState = !0, e.eagerState = f, ul(f, i))
            return Ye(t, l, e, 0), _t === null && Be(), !1;
        } catch {
        } finally {
        }
      if (a = Si(t, l, e, u), a !== null)
        return sl(a, t, u), so(a, l, u), !0;
    }
    return !1;
  }
  function Ii(t, l, a, u) {
    if (u = {
      lane: 2,
      revertLane: Nf(),
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ie(t)) {
      if (l) throw Error(c(479));
    } else
      l = Si(
        t,
        a,
        u,
        2
      ), l !== null && sl(l, t, 2);
  }
  function Ie(t) {
    var l = t.alternate;
    return t === I || l !== null && l === I;
  }
  function co(t, l) {
    au = we = !0;
    var a = t.pending;
    a === null ? l.next = l : (l.next = a.next, a.next = l), t.pending = l;
  }
  function so(t, l, a) {
    if ((a & 4194048) !== 0) {
      var u = l.lanes;
      u &= t.pendingLanes, a |= u, l.lanes = a, gc(t, a);
    }
  }
  var tn = {
    readContext: Lt,
    use: ke,
    useCallback: Dt,
    useContext: Dt,
    useEffect: Dt,
    useImperativeHandle: Dt,
    useLayoutEffect: Dt,
    useInsertionEffect: Dt,
    useMemo: Dt,
    useReducer: Dt,
    useRef: Dt,
    useState: Dt,
    useDebugValue: Dt,
    useDeferredValue: Dt,
    useTransition: Dt,
    useSyncExternalStore: Dt,
    useId: Dt,
    useHostTransitionStatus: Dt,
    useFormState: Dt,
    useActionState: Dt,
    useOptimistic: Dt,
    useMemoCache: Dt,
    useCacheRefresh: Dt
  }, oo = {
    readContext: Lt,
    use: ke,
    useCallback: function(t, l) {
      return Ft().memoizedState = [
        t,
        l === void 0 ? null : l
      ], t;
    },
    useContext: Lt,
    useEffect: ws,
    useImperativeHandle: function(t, l, a) {
      a = a != null ? a.concat([t]) : null, Pe(
        4194308,
        4,
        Fs.bind(null, l, t),
        a
      );
    },
    useLayoutEffect: function(t, l) {
      return Pe(4194308, 4, t, l);
    },
    useInsertionEffect: function(t, l) {
      Pe(4, 2, t, l);
    },
    useMemo: function(t, l) {
      var a = Ft();
      l = l === void 0 ? null : l;
      var u = t();
      if (Da) {
        Kl(!0);
        try {
          t();
        } finally {
          Kl(!1);
        }
      }
      return a.memoizedState = [u, l], u;
    },
    useReducer: function(t, l, a) {
      var u = Ft();
      if (a !== void 0) {
        var e = a(l);
        if (Da) {
          Kl(!0);
          try {
            a(l);
          } finally {
            Kl(!1);
          }
        }
      } else e = l;
      return u.memoizedState = u.baseState = e, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: e
      }, u.queue = t, t = t.dispatch = Qd.bind(
        null,
        I,
        t
      ), [u.memoizedState, t];
    },
    useRef: function(t) {
      var l = Ft();
      return t = { current: t }, l.memoizedState = t;
    },
    useState: function(t) {
      t = wi(t);
      var l = t.queue, a = fo.bind(null, I, l);
      return l.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: ki,
    useDeferredValue: function(t, l) {
      var a = Ft();
      return $i(a, t, l);
    },
    useTransition: function() {
      var t = wi(!1);
      return t = ao.bind(
        null,
        I,
        t.queue,
        !0,
        !1
      ), Ft().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, l, a) {
      var u = I, e = Ft();
      if (ot) {
        if (a === void 0)
          throw Error(c(407));
        a = a();
      } else {
        if (a = l(), _t === null)
          throw Error(c(349));
        (ft & 124) !== 0 || xs(u, l, a);
      }
      e.memoizedState = a;
      var n = { value: a, getSnapshot: l };
      return e.queue = n, ws(Hs.bind(null, u, n, t), [
        t
      ]), u.flags |= 2048, eu(
        9,
        Fe(),
        Ns.bind(
          null,
          u,
          n,
          a,
          l
        ),
        null
      ), a;
    },
    useId: function() {
      var t = Ft(), l = _t.identifierPrefix;
      if (ot) {
        var a = Hl, u = Nl;
        a = (u & ~(1 << 32 - al(u) - 1)).toString(32) + a, l = "«" + l + "R" + a, a = We++, 0 < a && (l += "H" + a.toString(32)), l += "»";
      } else
        a = qd++, l = "«" + l + "r" + a.toString(32) + "»";
      return t.memoizedState = l;
    },
    useHostTransitionStatus: Pi,
    useFormState: Zs,
    useActionState: Zs,
    useOptimistic: function(t) {
      var l = Ft();
      l.memoizedState = l.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return l.queue = a, l = Ii.bind(
        null,
        I,
        !0,
        a
      ), a.dispatch = l, [t, l];
    },
    useMemoCache: Li,
    useCacheRefresh: function() {
      return Ft().memoizedState = Xd.bind(
        null,
        I
      );
    }
  }, ro = {
    readContext: Lt,
    use: ke,
    useCallback: Is,
    useContext: Lt,
    useEffect: Ws,
    useImperativeHandle: Ps,
    useInsertionEffect: ks,
    useLayoutEffect: $s,
    useMemo: to,
    useReducer: $e,
    useRef: Js,
    useState: function() {
      return $e(Yl);
    },
    useDebugValue: ki,
    useDeferredValue: function(t, l) {
      var a = xt();
      return lo(
        a,
        dt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = $e(Yl)[0], l = xt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ju(t),
        l
      ];
    },
    useSyncExternalStore: Us,
    useId: no,
    useHostTransitionStatus: Pi,
    useFormState: Vs,
    useActionState: Vs,
    useOptimistic: function(t, l) {
      var a = xt();
      return Ys(a, dt, t, l);
    },
    useMemoCache: Li,
    useCacheRefresh: io
  }, jd = {
    readContext: Lt,
    use: ke,
    useCallback: Is,
    useContext: Lt,
    useEffect: Ws,
    useImperativeHandle: Ps,
    useInsertionEffect: ks,
    useLayoutEffect: $s,
    useMemo: to,
    useReducer: Ji,
    useRef: Js,
    useState: function() {
      return Ji(Yl);
    },
    useDebugValue: ki,
    useDeferredValue: function(t, l) {
      var a = xt();
      return dt === null ? $i(a, t, l) : lo(
        a,
        dt.memoizedState,
        t,
        l
      );
    },
    useTransition: function() {
      var t = Ji(Yl)[0], l = xt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ju(t),
        l
      ];
    },
    useSyncExternalStore: Us,
    useId: no,
    useHostTransitionStatus: Pi,
    useFormState: Ks,
    useActionState: Ks,
    useOptimistic: function(t, l) {
      var a = xt();
      return dt !== null ? Ys(a, dt, t, l) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: Li,
    useCacheRefresh: io
  }, nu = null, ku = 0;
  function ln(t) {
    var l = ku;
    return ku += 1, nu === null && (nu = []), Ts(nu, t, l);
  }
  function $u(t, l) {
    l = l.props.ref, t.ref = l !== void 0 ? l : null;
  }
  function an(t, l) {
    throw l.$$typeof === G ? Error(c(525)) : (t = Object.prototype.toString.call(l), Error(
      c(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t
      )
    ));
  }
  function ho(t) {
    var l = t._init;
    return l(t._payload);
  }
  function vo(t) {
    function l(h, r) {
      if (t) {
        var v = h.deletions;
        v === null ? (h.deletions = [r], h.flags |= 16) : v.push(r);
      }
    }
    function a(h, r) {
      if (!t) return null;
      for (; r !== null; )
        l(h, r), r = r.sibling;
      return null;
    }
    function u(h) {
      for (var r = /* @__PURE__ */ new Map(); h !== null; )
        h.key !== null ? r.set(h.key, h) : r.set(h.index, h), h = h.sibling;
      return r;
    }
    function e(h, r) {
      return h = xl(h, r), h.index = 0, h.sibling = null, h;
    }
    function n(h, r, v) {
      return h.index = v, t ? (v = h.alternate, v !== null ? (v = v.index, v < r ? (h.flags |= 67108866, r) : v) : (h.flags |= 67108866, r)) : (h.flags |= 1048576, r);
    }
    function i(h) {
      return t && h.alternate === null && (h.flags |= 67108866), h;
    }
    function f(h, r, v, T) {
      return r === null || r.tag !== 6 ? (r = _i(v, h.mode, T), r.return = h, r) : (r = e(r, v), r.return = h, r);
    }
    function s(h, r, v, T) {
      var C = v.type;
      return C === P ? p(
        h,
        r,
        v.props.children,
        T,
        v.key
      ) : r !== null && (r.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Xt && ho(C) === r.type) ? (r = e(r, v.props), $u(r, v), r.return = h, r) : (r = Ge(
        v.type,
        v.key,
        v.props,
        null,
        h.mode,
        T
      ), $u(r, v), r.return = h, r);
    }
    function m(h, r, v, T) {
      return r === null || r.tag !== 4 || r.stateNode.containerInfo !== v.containerInfo || r.stateNode.implementation !== v.implementation ? (r = pi(v, h.mode, T), r.return = h, r) : (r = e(r, v.children || []), r.return = h, r);
    }
    function p(h, r, v, T, C) {
      return r === null || r.tag !== 7 ? (r = _a(
        v,
        h.mode,
        T,
        C
      ), r.return = h, r) : (r = e(r, v), r.return = h, r);
    }
    function A(h, r, v) {
      if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint")
        return r = _i(
          "" + r,
          h.mode,
          v
        ), r.return = h, r;
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case B:
            return v = Ge(
              r.type,
              r.key,
              r.props,
              null,
              h.mode,
              v
            ), $u(v, r), v.return = h, v;
          case $:
            return r = pi(
              r,
              h.mode,
              v
            ), r.return = h, r;
          case Xt:
            var T = r._init;
            return r = T(r._payload), A(h, r, v);
        }
        if (Nt(r) || at(r))
          return r = _a(
            r,
            h.mode,
            v,
            null
          ), r.return = h, r;
        if (typeof r.then == "function")
          return A(h, ln(r), v);
        if (r.$$typeof === bt)
          return A(
            h,
            Ze(h, r),
            v
          );
        an(h, r);
      }
      return null;
    }
    function g(h, r, v, T) {
      var C = r !== null ? r.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return C !== null ? null : f(h, r, "" + v, T);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case B:
            return v.key === C ? s(h, r, v, T) : null;
          case $:
            return v.key === C ? m(h, r, v, T) : null;
          case Xt:
            return C = v._init, v = C(v._payload), g(h, r, v, T);
        }
        if (Nt(v) || at(v))
          return C !== null ? null : p(h, r, v, T, null);
        if (typeof v.then == "function")
          return g(
            h,
            r,
            ln(v),
            T
          );
        if (v.$$typeof === bt)
          return g(
            h,
            r,
            Ze(h, v),
            T
          );
        an(h, v);
      }
      return null;
    }
    function S(h, r, v, T, C) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return h = h.get(v) || null, f(r, h, "" + T, C);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case B:
            return h = h.get(
              T.key === null ? v : T.key
            ) || null, s(r, h, T, C);
          case $:
            return h = h.get(
              T.key === null ? v : T.key
            ) || null, m(r, h, T, C);
          case Xt:
            var tt = T._init;
            return T = tt(T._payload), S(
              h,
              r,
              v,
              T,
              C
            );
        }
        if (Nt(T) || at(T))
          return h = h.get(v) || null, p(r, h, T, C, null);
        if (typeof T.then == "function")
          return S(
            h,
            r,
            v,
            ln(T),
            C
          );
        if (T.$$typeof === bt)
          return S(
            h,
            r,
            v,
            Ze(r, T),
            C
          );
        an(r, T);
      }
      return null;
    }
    function L(h, r, v, T) {
      for (var C = null, tt = null, X = r, V = r = 0, Gt = null; X !== null && V < v.length; V++) {
        X.index > V ? (Gt = X, X = null) : Gt = X.sibling;
        var st = g(
          h,
          X,
          v[V],
          T
        );
        if (st === null) {
          X === null && (X = Gt);
          break;
        }
        t && X && st.alternate === null && l(h, X), r = n(st, r, V), tt === null ? C = st : tt.sibling = st, tt = st, X = Gt;
      }
      if (V === v.length)
        return a(h, X), ot && Ta(h, V), C;
      if (X === null) {
        for (; V < v.length; V++)
          X = A(h, v[V], T), X !== null && (r = n(
            X,
            r,
            V
          ), tt === null ? C = X : tt.sibling = X, tt = X);
        return ot && Ta(h, V), C;
      }
      for (X = u(X); V < v.length; V++)
        Gt = S(
          X,
          h,
          V,
          v[V],
          T
        ), Gt !== null && (t && Gt.alternate !== null && X.delete(
          Gt.key === null ? V : Gt.key
        ), r = n(
          Gt,
          r,
          V
        ), tt === null ? C = Gt : tt.sibling = Gt, tt = Gt);
      return t && X.forEach(function(va) {
        return l(h, va);
      }), ot && Ta(h, V), C;
    }
    function Z(h, r, v, T) {
      if (v == null) throw Error(c(151));
      for (var C = null, tt = null, X = r, V = r = 0, Gt = null, st = v.next(); X !== null && !st.done; V++, st = v.next()) {
        X.index > V ? (Gt = X, X = null) : Gt = X.sibling;
        var va = g(h, X, st.value, T);
        if (va === null) {
          X === null && (X = Gt);
          break;
        }
        t && X && va.alternate === null && l(h, X), r = n(va, r, V), tt === null ? C = va : tt.sibling = va, tt = va, X = Gt;
      }
      if (st.done)
        return a(h, X), ot && Ta(h, V), C;
      if (X === null) {
        for (; !st.done; V++, st = v.next())
          st = A(h, st.value, T), st !== null && (r = n(st, r, V), tt === null ? C = st : tt.sibling = st, tt = st);
        return ot && Ta(h, V), C;
      }
      for (X = u(X); !st.done; V++, st = v.next())
        st = S(X, h, V, st.value, T), st !== null && (t && st.alternate !== null && X.delete(st.key === null ? V : st.key), r = n(st, r, V), tt === null ? C = st : tt.sibling = st, tt = st);
      return t && X.forEach(function(Zv) {
        return l(h, Zv);
      }), ot && Ta(h, V), C;
    }
    function yt(h, r, v, T) {
      if (typeof v == "object" && v !== null && v.type === P && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case B:
            t: {
              for (var C = v.key; r !== null; ) {
                if (r.key === C) {
                  if (C = v.type, C === P) {
                    if (r.tag === 7) {
                      a(
                        h,
                        r.sibling
                      ), T = e(
                        r,
                        v.props.children
                      ), T.return = h, h = T;
                      break t;
                    }
                  } else if (r.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Xt && ho(C) === r.type) {
                    a(
                      h,
                      r.sibling
                    ), T = e(r, v.props), $u(T, v), T.return = h, h = T;
                    break t;
                  }
                  a(h, r);
                  break;
                } else l(h, r);
                r = r.sibling;
              }
              v.type === P ? (T = _a(
                v.props.children,
                h.mode,
                T,
                v.key
              ), T.return = h, h = T) : (T = Ge(
                v.type,
                v.key,
                v.props,
                null,
                h.mode,
                T
              ), $u(T, v), T.return = h, h = T);
            }
            return i(h);
          case $:
            t: {
              for (C = v.key; r !== null; ) {
                if (r.key === C)
                  if (r.tag === 4 && r.stateNode.containerInfo === v.containerInfo && r.stateNode.implementation === v.implementation) {
                    a(
                      h,
                      r.sibling
                    ), T = e(r, v.children || []), T.return = h, h = T;
                    break t;
                  } else {
                    a(h, r);
                    break;
                  }
                else l(h, r);
                r = r.sibling;
              }
              T = pi(v, h.mode, T), T.return = h, h = T;
            }
            return i(h);
          case Xt:
            return C = v._init, v = C(v._payload), yt(
              h,
              r,
              v,
              T
            );
        }
        if (Nt(v))
          return L(
            h,
            r,
            v,
            T
          );
        if (at(v)) {
          if (C = at(v), typeof C != "function") throw Error(c(150));
          return v = C.call(v), Z(
            h,
            r,
            v,
            T
          );
        }
        if (typeof v.then == "function")
          return yt(
            h,
            r,
            ln(v),
            T
          );
        if (v.$$typeof === bt)
          return yt(
            h,
            r,
            Ze(h, v),
            T
          );
        an(h, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, r !== null && r.tag === 6 ? (a(h, r.sibling), T = e(r, v), T.return = h, h = T) : (a(h, r), T = _i(v, h.mode, T), T.return = h, h = T), i(h)) : a(h, r);
    }
    return function(h, r, v, T) {
      try {
        ku = 0;
        var C = yt(
          h,
          r,
          v,
          T
        );
        return nu = null, C;
      } catch (X) {
        if (X === Qu || X === Le) throw X;
        var tt = el(29, X, null, h.mode);
        return tt.lanes = T, tt.return = h, tt;
      } finally {
      }
    };
  }
  var iu = vo(!0), yo = vo(!1), ml = O(null), zl = null;
  function Il(t) {
    var l = t.alternate;
    H(qt, qt.current & 1), H(ml, t), zl === null && (l === null || lu.current !== null || l.memoizedState !== null) && (zl = t);
  }
  function mo(t) {
    if (t.tag === 22) {
      if (H(qt, qt.current), H(ml, t), zl === null) {
        var l = t.alternate;
        l !== null && l.memoizedState !== null && (zl = t);
      }
    } else ta();
  }
  function ta() {
    H(qt, qt.current), H(ml, ml.current);
  }
  function Cl(t) {
    N(ml), zl === t && (zl = null), N(qt);
  }
  var qt = O(0);
  function un(t) {
    for (var l = t; l !== null; ) {
      if (l.tag === 13) {
        var a = l.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Lf(a)))
          return l;
      } else if (l.tag === 19 && l.memoizedProps.revealOrder !== void 0) {
        if ((l.flags & 128) !== 0) return l;
      } else if (l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return null;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
    return null;
  }
  function tf(t, l, a, u) {
    l = t.memoizedState, a = a(u, l), a = a == null ? l : M({}, l, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var lf = {
    enqueueSetState: function(t, l, a) {
      t = t._reactInternals;
      var u = cl(), e = $l(u);
      e.payload = l, a != null && (e.callback = a), l = Fl(t, e, u), l !== null && (sl(l, t, u), Zu(l, t, u));
    },
    enqueueReplaceState: function(t, l, a) {
      t = t._reactInternals;
      var u = cl(), e = $l(u);
      e.tag = 1, e.payload = l, a != null && (e.callback = a), l = Fl(t, e, u), l !== null && (sl(l, t, u), Zu(l, t, u));
    },
    enqueueForceUpdate: function(t, l) {
      t = t._reactInternals;
      var a = cl(), u = $l(a);
      u.tag = 2, l != null && (u.callback = l), l = Fl(t, u, a), l !== null && (sl(l, t, a), Zu(l, t, a));
    }
  };
  function go(t, l, a, u, e, n, i) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(u, n, i) : l.prototype && l.prototype.isPureReactComponent ? !Nu(a, u) || !Nu(e, n) : !0;
  }
  function So(t, l, a, u) {
    t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(a, u), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(a, u), l.state !== t && lf.enqueueReplaceState(l, l.state, null);
  }
  function Ra(t, l) {
    var a = l;
    if ("ref" in l) {
      a = {};
      for (var u in l)
        u !== "ref" && (a[u] = l[u]);
    }
    if (t = t.defaultProps) {
      a === l && (a = M({}, a));
      for (var e in t)
        a[e] === void 0 && (a[e] = t[e]);
    }
    return a;
  }
  var en = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var l = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(l)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function bo(t) {
    en(t);
  }
  function _o(t) {
    console.error(t);
  }
  function po(t) {
    en(t);
  }
  function nn(t, l) {
    try {
      var a = t.onUncaughtError;
      a(l.value, { componentStack: l.stack });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function To(t, l, a) {
    try {
      var u = t.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: l.tag === 1 ? l.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function af(t, l, a) {
    return a = $l(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      nn(t, l);
    }, a;
  }
  function Eo(t) {
    return t = $l(t), t.tag = 3, t;
  }
  function Ao(t, l, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      t.payload = function() {
        return e(n);
      }, t.callback = function() {
        To(l, a, u);
      };
    }
    var i = a.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
      To(l, a, u), typeof e != "function" && (ia === null ? ia = /* @__PURE__ */ new Set([this]) : ia.add(this));
      var f = u.stack;
      this.componentDidCatch(u.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function Zd(t, l, a, u, e) {
    if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
      if (l = a.alternate, l !== null && Cu(
        l,
        a,
        e,
        !0
      ), a = ml.current, a !== null) {
        switch (a.tag) {
          case 13:
            return zl === null ? Mf() : a.alternate === null && Mt === 0 && (Mt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === xi ? a.flags |= 16384 : (l = a.updateQueue, l === null ? a.updateQueue = /* @__PURE__ */ new Set([u]) : l.add(u), Rf(t, u, e)), !1;
          case 22:
            return a.flags |= 65536, u === xi ? a.flags |= 16384 : (l = a.updateQueue, l === null ? (l = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([u])
            }, a.updateQueue = l) : (a = l.retryQueue, a === null ? l.retryQueue = /* @__PURE__ */ new Set([u]) : a.add(u)), Rf(t, u, e)), !1;
        }
        throw Error(c(435, a.tag));
      }
      return Rf(t, u, e), Mf(), !1;
    }
    if (ot)
      return l = ml.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = e, u !== Ai && (t = Error(c(422), { cause: u }), Yu(hl(t, a)))) : (u !== Ai && (l = Error(c(423), {
        cause: u
      }), Yu(
        hl(l, a)
      )), t = t.current.alternate, t.flags |= 65536, e &= -e, t.lanes |= e, u = hl(u, a), e = af(
        t.stateNode,
        u,
        e
      ), qi(t, e), Mt !== 4 && (Mt = 2)), !1;
    var n = Error(c(520), { cause: u });
    if (n = hl(n, a), ue === null ? ue = [n] : ue.push(n), Mt !== 4 && (Mt = 2), l === null) return !0;
    u = hl(u, a), a = l;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = e & -e, a.lanes |= t, t = af(a.stateNode, u, t), qi(a, t), !1;
        case 1:
          if (l = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ia === null || !ia.has(n))))
            return a.flags |= 65536, e &= -e, a.lanes |= e, e = Eo(e), Ao(
              e,
              t,
              a,
              u
            ), qi(a, e), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var zo = Error(c(461)), Yt = !1;
  function Qt(t, l, a, u) {
    l.child = t === null ? yo(l, null, a, u) : iu(
      l,
      t.child,
      a,
      u
    );
  }
  function Oo(t, l, a, u, e) {
    a = a.render;
    var n = l.ref;
    if ("ref" in u) {
      var i = {};
      for (var f in u)
        f !== "ref" && (i[f] = u[f]);
    } else i = u;
    return Oa(l), u = Xi(
      t,
      l,
      a,
      i,
      n,
      e
    ), f = Qi(), t !== null && !Yt ? (ji(t, l, e), Gl(t, l, e)) : (ot && f && Ti(l), l.flags |= 1, Qt(t, l, u, e), l.child);
  }
  function Mo(t, l, a, u, e) {
    if (t === null) {
      var n = a.type;
      return typeof n == "function" && !bi(n) && n.defaultProps === void 0 && a.compare === null ? (l.tag = 15, l.type = n, Do(
        t,
        l,
        n,
        u,
        e
      )) : (t = Ge(
        a.type,
        null,
        u,
        l,
        l.mode,
        e
      ), t.ref = l.ref, t.return = l, l.child = t);
    }
    if (n = t.child, !rf(t, e)) {
      var i = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Nu, a(i, u) && t.ref === l.ref)
        return Gl(t, l, e);
    }
    return l.flags |= 1, t = xl(n, u), t.ref = l.ref, t.return = l, l.child = t;
  }
  function Do(t, l, a, u, e) {
    if (t !== null) {
      var n = t.memoizedProps;
      if (Nu(n, u) && t.ref === l.ref)
        if (Yt = !1, l.pendingProps = u = n, rf(t, e))
          (t.flags & 131072) !== 0 && (Yt = !0);
        else
          return l.lanes = t.lanes, Gl(t, l, e);
    }
    return uf(
      t,
      l,
      a,
      u,
      e
    );
  }
  function Ro(t, l, a) {
    var u = l.pendingProps, e = u.children, n = t !== null ? t.memoizedState : null;
    if (u.mode === "hidden") {
      if ((l.flags & 128) !== 0) {
        if (u = n !== null ? n.baseLanes | a : a, t !== null) {
          for (e = l.child = t.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          l.childLanes = n & ~u;
        } else l.childLanes = 0, l.child = null;
        return Uo(
          t,
          l,
          u,
          a
        );
      }
      if ((a & 536870912) !== 0)
        l.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Ve(
          l,
          n !== null ? n.cachePool : null
        ), n !== null ? Ms(l, n) : Yi(), mo(l);
      else
        return l.lanes = l.childLanes = 536870912, Uo(
          t,
          l,
          n !== null ? n.baseLanes | a : a,
          a
        );
    } else
      n !== null ? (Ve(l, n.cachePool), Ms(l, n), ta(), l.memoizedState = null) : (t !== null && Ve(l, null), Yi(), ta());
    return Qt(t, l, e, a), l.child;
  }
  function Uo(t, l, a, u) {
    var e = Ui();
    return e = e === null ? null : { parent: Ht._currentValue, pool: e }, l.memoizedState = {
      baseLanes: a,
      cachePool: e
    }, t !== null && Ve(l, null), Yi(), mo(l), t !== null && Cu(t, l, u, !0), null;
  }
  function fn(t, l) {
    var a = l.ref;
    if (a === null)
      t !== null && t.ref !== null && (l.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(c(284));
      (t === null || t.ref !== a) && (l.flags |= 4194816);
    }
  }
  function uf(t, l, a, u, e) {
    return Oa(l), a = Xi(
      t,
      l,
      a,
      u,
      void 0,
      e
    ), u = Qi(), t !== null && !Yt ? (ji(t, l, e), Gl(t, l, e)) : (ot && u && Ti(l), l.flags |= 1, Qt(t, l, a, e), l.child);
  }
  function xo(t, l, a, u, e, n) {
    return Oa(l), l.updateQueue = null, a = Rs(
      l,
      u,
      a,
      e
    ), Ds(t), u = Qi(), t !== null && !Yt ? (ji(t, l, n), Gl(t, l, n)) : (ot && u && Ti(l), l.flags |= 1, Qt(t, l, a, n), l.child);
  }
  function No(t, l, a, u, e) {
    if (Oa(l), l.stateNode === null) {
      var n = $a, i = a.contextType;
      typeof i == "object" && i !== null && (n = Lt(i)), n = new a(u, n), l.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = lf, l.stateNode = n, n._reactInternals = l, n = l.stateNode, n.props = u, n.state = l.memoizedState, n.refs = {}, Ni(l), i = a.contextType, n.context = typeof i == "object" && i !== null ? Lt(i) : $a, n.state = l.memoizedState, i = a.getDerivedStateFromProps, typeof i == "function" && (tf(
        l,
        a,
        i,
        u
      ), n.state = l.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), i !== n.state && lf.enqueueReplaceState(n, n.state, null), Lu(l, u, n, e), Vu(), n.state = l.memoizedState), typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !0;
    } else if (t === null) {
      n = l.stateNode;
      var f = l.memoizedProps, s = Ra(a, f);
      n.props = s;
      var m = n.context, p = a.contextType;
      i = $a, typeof p == "object" && p !== null && (i = Lt(p));
      var A = a.getDerivedStateFromProps;
      p = typeof A == "function" || typeof n.getSnapshotBeforeUpdate == "function", f = l.pendingProps !== f, p || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f || m !== i) && So(
        l,
        n,
        u,
        i
      ), kl = !1;
      var g = l.memoizedState;
      n.state = g, Lu(l, u, n, e), Vu(), m = l.memoizedState, f || g !== m || kl ? (typeof A == "function" && (tf(
        l,
        a,
        A,
        u
      ), m = l.memoizedState), (s = kl || go(
        l,
        a,
        s,
        u,
        g,
        m,
        i
      )) ? (p || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = u, l.memoizedState = m), n.props = u, n.state = m, n.context = i, u = s) : (typeof n.componentDidMount == "function" && (l.flags |= 4194308), u = !1);
    } else {
      n = l.stateNode, Hi(t, l), i = l.memoizedProps, p = Ra(a, i), n.props = p, A = l.pendingProps, g = n.context, m = a.contextType, s = $a, typeof m == "object" && m !== null && (s = Lt(m)), f = a.getDerivedStateFromProps, (m = typeof f == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== A || g !== s) && So(
        l,
        n,
        u,
        s
      ), kl = !1, g = l.memoizedState, n.state = g, Lu(l, u, n, e), Vu();
      var S = l.memoizedState;
      i !== A || g !== S || kl || t !== null && t.dependencies !== null && je(t.dependencies) ? (typeof f == "function" && (tf(
        l,
        a,
        f,
        u
      ), S = l.memoizedState), (p = kl || go(
        l,
        a,
        p,
        u,
        g,
        S,
        s
      ) || t !== null && t.dependencies !== null && je(t.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, S, s), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        u,
        S,
        s
      )), typeof n.componentDidUpdate == "function" && (l.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (l.flags |= 1024), l.memoizedProps = u, l.memoizedState = S), n.props = u, n.state = S, n.context = s, u = p) : (typeof n.componentDidUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (l.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && g === t.memoizedState || (l.flags |= 1024), u = !1);
    }
    return n = u, fn(t, l), u = (l.flags & 128) !== 0, n || u ? (n = l.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), l.flags |= 1, t !== null && u ? (l.child = iu(
      l,
      t.child,
      null,
      e
    ), l.child = iu(
      l,
      null,
      a,
      e
    )) : Qt(t, l, a, e), l.memoizedState = n.state, t = l.child) : t = Gl(
      t,
      l,
      e
    ), t;
  }
  function Ho(t, l, a, u) {
    return Bu(), l.flags |= 256, Qt(t, l, a, u), l.child;
  }
  var ef = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function nf(t) {
    return { baseLanes: t, cachePool: bs() };
  }
  function ff(t, l, a) {
    return t = t !== null ? t.childLanes & ~a : 0, l && (t |= gl), t;
  }
  function qo(t, l, a) {
    var u = l.pendingProps, e = !1, n = (l.flags & 128) !== 0, i;
    if ((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (qt.current & 2) !== 0), i && (e = !0, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
      if (ot) {
        if (e ? Il(l) : ta(), ot) {
          var f = Ot, s;
          if (s = f) {
            t: {
              for (s = f, f = Al; s.nodeType !== 8; ) {
                if (!f) {
                  f = null;
                  break t;
                }
                if (s = pl(
                  s.nextSibling
                ), s === null) {
                  f = null;
                  break t;
                }
              }
              f = s;
            }
            f !== null ? (l.memoizedState = {
              dehydrated: f,
              treeContext: pa !== null ? { id: Nl, overflow: Hl } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, s = el(
              18,
              null,
              null,
              0
            ), s.stateNode = f, s.return = l, l.child = s, Wt = l, Ot = null, s = !0) : s = !1;
          }
          s || Aa(l);
        }
        if (f = l.memoizedState, f !== null && (f = f.dehydrated, f !== null))
          return Lf(f) ? l.lanes = 32 : l.lanes = 536870912, null;
        Cl(l);
      }
      return f = u.children, u = u.fallback, e ? (ta(), e = l.mode, f = cn(
        { mode: "hidden", children: f },
        e
      ), u = _a(
        u,
        e,
        a,
        null
      ), f.return = l, u.return = l, f.sibling = u, l.child = f, e = l.child, e.memoizedState = nf(a), e.childLanes = ff(
        t,
        i,
        a
      ), l.memoizedState = ef, u) : (Il(l), cf(l, f));
    }
    if (s = t.memoizedState, s !== null && (f = s.dehydrated, f !== null)) {
      if (n)
        l.flags & 256 ? (Il(l), l.flags &= -257, l = sf(
          t,
          l,
          a
        )) : l.memoizedState !== null ? (ta(), l.child = t.child, l.flags |= 128, l = null) : (ta(), e = u.fallback, f = l.mode, u = cn(
          { mode: "visible", children: u.children },
          f
        ), e = _a(
          e,
          f,
          a,
          null
        ), e.flags |= 2, u.return = l, e.return = l, u.sibling = e, l.child = u, iu(
          l,
          t.child,
          null,
          a
        ), u = l.child, u.memoizedState = nf(a), u.childLanes = ff(
          t,
          i,
          a
        ), l.memoizedState = ef, l = e);
      else if (Il(l), Lf(f)) {
        if (i = f.nextSibling && f.nextSibling.dataset, i) var m = i.dgst;
        i = m, u = Error(c(419)), u.stack = "", u.digest = i, Yu({ value: u, source: null, stack: null }), l = sf(
          t,
          l,
          a
        );
      } else if (Yt || Cu(t, l, a, !1), i = (a & t.childLanes) !== 0, Yt || i) {
        if (i = _t, i !== null && (u = a & -a, u = (u & 42) !== 0 ? 1 : Ln(u), u = (u & (i.suspendedLanes | a)) !== 0 ? 0 : u, u !== 0 && u !== s.retryLane))
          throw s.retryLane = u, ka(t, u), sl(i, t, u), zo;
        f.data === "$?" || Mf(), l = sf(
          t,
          l,
          a
        );
      } else
        f.data === "$?" ? (l.flags |= 192, l.child = t.child, l = null) : (t = s.treeContext, Ot = pl(
          f.nextSibling
        ), Wt = l, ot = !0, Ea = null, Al = !1, t !== null && (vl[yl++] = Nl, vl[yl++] = Hl, vl[yl++] = pa, Nl = t.id, Hl = t.overflow, pa = l), l = cf(
          l,
          u.children
        ), l.flags |= 4096);
      return l;
    }
    return e ? (ta(), e = u.fallback, f = l.mode, s = t.child, m = s.sibling, u = xl(s, {
      mode: "hidden",
      children: u.children
    }), u.subtreeFlags = s.subtreeFlags & 65011712, m !== null ? e = xl(m, e) : (e = _a(
      e,
      f,
      a,
      null
    ), e.flags |= 2), e.return = l, u.return = l, u.sibling = e, l.child = u, u = e, e = l.child, f = t.child.memoizedState, f === null ? f = nf(a) : (s = f.cachePool, s !== null ? (m = Ht._currentValue, s = s.parent !== m ? { parent: m, pool: m } : s) : s = bs(), f = {
      baseLanes: f.baseLanes | a,
      cachePool: s
    }), e.memoizedState = f, e.childLanes = ff(
      t,
      i,
      a
    ), l.memoizedState = ef, u) : (Il(l), a = t.child, t = a.sibling, a = xl(a, {
      mode: "visible",
      children: u.children
    }), a.return = l, a.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [t], l.flags |= 16) : i.push(t)), l.child = a, l.memoizedState = null, a);
  }
  function cf(t, l) {
    return l = cn(
      { mode: "visible", children: l },
      t.mode
    ), l.return = t, t.child = l;
  }
  function cn(t, l) {
    return t = el(22, t, null, l), t.lanes = 0, t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, t;
  }
  function sf(t, l, a) {
    return iu(l, t.child, null, a), t = cf(
      l,
      l.pendingProps.children
    ), t.flags |= 2, l.memoizedState = null, t;
  }
  function Bo(t, l, a) {
    t.lanes |= l;
    var u = t.alternate;
    u !== null && (u.lanes |= l), Oi(t.return, l, a);
  }
  function of(t, l, a, u, e) {
    var n = t.memoizedState;
    n === null ? t.memoizedState = {
      isBackwards: l,
      rendering: null,
      renderingStartTime: 0,
      last: u,
      tail: a,
      tailMode: e
    } : (n.isBackwards = l, n.rendering = null, n.renderingStartTime = 0, n.last = u, n.tail = a, n.tailMode = e);
  }
  function Yo(t, l, a) {
    var u = l.pendingProps, e = u.revealOrder, n = u.tail;
    if (Qt(t, l, u.children, a), u = qt.current, (u & 2) !== 0)
      u = u & 1 | 2, l.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = l.child; t !== null; ) {
          if (t.tag === 13)
            t.memoizedState !== null && Bo(t, a, l);
          else if (t.tag === 19)
            Bo(t, a, l);
          else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
          }
          if (t === l) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l)
              break t;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      u &= 1;
    }
    switch (H(qt, u), e) {
      case "forwards":
        for (a = l.child, e = null; a !== null; )
          t = a.alternate, t !== null && un(t) === null && (e = a), a = a.sibling;
        a = e, a === null ? (e = l.child, l.child = null) : (e = a.sibling, a.sibling = null), of(
          l,
          !1,
          e,
          a,
          n
        );
        break;
      case "backwards":
        for (a = null, e = l.child, l.child = null; e !== null; ) {
          if (t = e.alternate, t !== null && un(t) === null) {
            l.child = e;
            break;
          }
          t = e.sibling, e.sibling = a, a = e, e = t;
        }
        of(
          l,
          !0,
          a,
          null,
          n
        );
        break;
      case "together":
        of(l, !1, null, null, void 0);
        break;
      default:
        l.memoizedState = null;
    }
    return l.child;
  }
  function Gl(t, l, a) {
    if (t !== null && (l.dependencies = t.dependencies), na |= l.lanes, (a & l.childLanes) === 0)
      if (t !== null) {
        if (Cu(
          t,
          l,
          a,
          !1
        ), (a & l.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && l.child !== t.child)
      throw Error(c(153));
    if (l.child !== null) {
      for (t = l.child, a = xl(t, t.pendingProps), l.child = a, a.return = l; t.sibling !== null; )
        t = t.sibling, a = a.sibling = xl(t, t.pendingProps), a.return = l;
      a.sibling = null;
    }
    return l.child;
  }
  function rf(t, l) {
    return (t.lanes & l) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && je(t)));
  }
  function Vd(t, l, a) {
    switch (l.tag) {
      case 3:
        Tt(l, l.stateNode.containerInfo), Wl(l, Ht, t.memoizedState.cache), Bu();
        break;
      case 27:
      case 5:
        Xn(l);
        break;
      case 4:
        Tt(l, l.stateNode.containerInfo);
        break;
      case 10:
        Wl(
          l,
          l.type,
          l.memoizedProps.value
        );
        break;
      case 13:
        var u = l.memoizedState;
        if (u !== null)
          return u.dehydrated !== null ? (Il(l), l.flags |= 128, null) : (a & l.child.childLanes) !== 0 ? qo(t, l, a) : (Il(l), t = Gl(
            t,
            l,
            a
          ), t !== null ? t.sibling : null);
        Il(l);
        break;
      case 19:
        var e = (t.flags & 128) !== 0;
        if (u = (a & l.childLanes) !== 0, u || (Cu(
          t,
          l,
          a,
          !1
        ), u = (a & l.childLanes) !== 0), e) {
          if (u)
            return Yo(
              t,
              l,
              a
            );
          l.flags |= 128;
        }
        if (e = l.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), H(qt, qt.current), u) break;
        return null;
      case 22:
      case 23:
        return l.lanes = 0, Ro(t, l, a);
      case 24:
        Wl(l, Ht, t.memoizedState.cache);
    }
    return Gl(t, l, a);
  }
  function Co(t, l, a) {
    if (t !== null)
      if (t.memoizedProps !== l.pendingProps)
        Yt = !0;
      else {
        if (!rf(t, a) && (l.flags & 128) === 0)
          return Yt = !1, Vd(
            t,
            l,
            a
          );
        Yt = (t.flags & 131072) !== 0;
      }
    else
      Yt = !1, ot && (l.flags & 1048576) !== 0 && hs(l, Qe, l.index);
    switch (l.lanes = 0, l.tag) {
      case 16:
        t: {
          t = l.pendingProps;
          var u = l.elementType, e = u._init;
          if (u = e(u._payload), l.type = u, typeof u == "function")
            bi(u) ? (t = Ra(u, t), l.tag = 1, l = No(
              null,
              l,
              u,
              t,
              a
            )) : (l.tag = 0, l = uf(
              null,
              l,
              u,
              t,
              a
            ));
          else {
            if (u != null) {
              if (e = u.$$typeof, e === zt) {
                l.tag = 11, l = Oo(
                  null,
                  l,
                  u,
                  t,
                  a
                );
                break t;
              } else if (e === wt) {
                l.tag = 14, l = Mo(
                  null,
                  l,
                  u,
                  t,
                  a
                );
                break t;
              }
            }
            throw l = Tl(u) || u, Error(c(306, l, ""));
          }
        }
        return l;
      case 0:
        return uf(
          t,
          l,
          l.type,
          l.pendingProps,
          a
        );
      case 1:
        return u = l.type, e = Ra(
          u,
          l.pendingProps
        ), No(
          t,
          l,
          u,
          e,
          a
        );
      case 3:
        t: {
          if (Tt(
            l,
            l.stateNode.containerInfo
          ), t === null) throw Error(c(387));
          u = l.pendingProps;
          var n = l.memoizedState;
          e = n.element, Hi(t, l), Lu(l, u, null, a);
          var i = l.memoizedState;
          if (u = i.cache, Wl(l, Ht, u), u !== n.cache && Mi(
            l,
            [Ht],
            a,
            !0
          ), Vu(), u = i.element, n.isDehydrated)
            if (n = {
              element: u,
              isDehydrated: !1,
              cache: i.cache
            }, l.updateQueue.baseState = n, l.memoizedState = n, l.flags & 256) {
              l = Ho(
                t,
                l,
                u,
                a
              );
              break t;
            } else if (u !== e) {
              e = hl(
                Error(c(424)),
                l
              ), Yu(e), l = Ho(
                t,
                l,
                u,
                a
              );
              break t;
            } else {
              switch (t = l.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (Ot = pl(t.firstChild), Wt = l, ot = !0, Ea = null, Al = !0, a = yo(
                l,
                null,
                u,
                a
              ), l.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Bu(), u === e) {
              l = Gl(
                t,
                l,
                a
              );
              break t;
            }
            Qt(
              t,
              l,
              u,
              a
            );
          }
          l = l.child;
        }
        return l;
      case 26:
        return fn(t, l), t === null ? (a = jr(
          l.type,
          null,
          l.pendingProps,
          null
        )) ? l.memoizedState = a : ot || (a = l.type, t = l.pendingProps, u = Tn(
          K.current
        ).createElement(a), u[Vt] = l, u[kt] = t, Zt(u, a, t), Bt(u), l.stateNode = u) : l.memoizedState = jr(
          l.type,
          t.memoizedProps,
          l.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Xn(l), t === null && ot && (u = l.stateNode = Gr(
          l.type,
          l.pendingProps,
          K.current
        ), Wt = l, Al = !0, e = Ot, sa(l.type) ? (Kf = e, Ot = pl(
          u.firstChild
        )) : Ot = e), Qt(
          t,
          l,
          l.pendingProps.children,
          a
        ), fn(t, l), t === null && (l.flags |= 4194304), l.child;
      case 5:
        return t === null && ot && ((e = u = Ot) && (u = gv(
          u,
          l.type,
          l.pendingProps,
          Al
        ), u !== null ? (l.stateNode = u, Wt = l, Ot = pl(
          u.firstChild
        ), Al = !1, e = !0) : e = !1), e || Aa(l)), Xn(l), e = l.type, n = l.pendingProps, i = t !== null ? t.memoizedProps : null, u = n.children, jf(e, n) ? u = null : i !== null && jf(e, i) && (l.flags |= 32), l.memoizedState !== null && (e = Xi(
          t,
          l,
          Bd,
          null,
          null,
          a
        ), he._currentValue = e), fn(t, l), Qt(t, l, u, a), l.child;
      case 6:
        return t === null && ot && ((t = a = Ot) && (a = Sv(
          a,
          l.pendingProps,
          Al
        ), a !== null ? (l.stateNode = a, Wt = l, Ot = null, t = !0) : t = !1), t || Aa(l)), null;
      case 13:
        return qo(t, l, a);
      case 4:
        return Tt(
          l,
          l.stateNode.containerInfo
        ), u = l.pendingProps, t === null ? l.child = iu(
          l,
          null,
          u,
          a
        ) : Qt(
          t,
          l,
          u,
          a
        ), l.child;
      case 11:
        return Oo(
          t,
          l,
          l.type,
          l.pendingProps,
          a
        );
      case 7:
        return Qt(
          t,
          l,
          l.pendingProps,
          a
        ), l.child;
      case 8:
        return Qt(
          t,
          l,
          l.pendingProps.children,
          a
        ), l.child;
      case 12:
        return Qt(
          t,
          l,
          l.pendingProps.children,
          a
        ), l.child;
      case 10:
        return u = l.pendingProps, Wl(l, l.type, u.value), Qt(
          t,
          l,
          u.children,
          a
        ), l.child;
      case 9:
        return e = l.type._context, u = l.pendingProps.children, Oa(l), e = Lt(e), u = u(e), l.flags |= 1, Qt(t, l, u, a), l.child;
      case 14:
        return Mo(
          t,
          l,
          l.type,
          l.pendingProps,
          a
        );
      case 15:
        return Do(
          t,
          l,
          l.type,
          l.pendingProps,
          a
        );
      case 19:
        return Yo(t, l, a);
      case 31:
        return u = l.pendingProps, a = l.mode, u = {
          mode: u.mode,
          children: u.children
        }, t === null ? (a = cn(
          u,
          a
        ), a.ref = l.ref, l.child = a, a.return = l, l = a) : (a = xl(t.child, u), a.ref = l.ref, l.child = a, a.return = l, l = a), l;
      case 22:
        return Ro(t, l, a);
      case 24:
        return Oa(l), u = Lt(Ht), t === null ? (e = Ui(), e === null && (e = _t, n = Di(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), l.memoizedState = {
          parent: u,
          cache: e
        }, Ni(l), Wl(l, Ht, e)) : ((t.lanes & a) !== 0 && (Hi(t, l), Lu(l, null, null, a), Vu()), e = t.memoizedState, n = l.memoizedState, e.parent !== u ? (e = { parent: u, cache: u }, l.memoizedState = e, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = e), Wl(l, Ht, u)) : (u = n.cache, Wl(l, Ht, u), u !== e.cache && Mi(
          l,
          [Ht],
          a,
          !0
        ))), Qt(
          t,
          l,
          l.pendingProps.children,
          a
        ), l.child;
      case 29:
        throw l.pendingProps;
    }
    throw Error(c(156, l.tag));
  }
  function Xl(t) {
    t.flags |= 4;
  }
  function Go(t, l) {
    if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Jr(l)) {
      if (l = ml.current, l !== null && ((ft & 4194048) === ft ? zl !== null : (ft & 62914560) !== ft && (ft & 536870912) === 0 || l !== zl))
        throw ju = xi, _s;
      t.flags |= 8192;
    }
  }
  function sn(t, l) {
    l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? yc() : 536870912, t.lanes |= l, ou |= l);
  }
  function Fu(t, l) {
    if (!ot)
      switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? t.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = t.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : u.sibling = null;
      }
  }
  function At(t) {
    var l = t.alternate !== null && t.alternate.child === t.child, a = 0, u = 0;
    if (l)
      for (var e = t.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = t, e = e.sibling;
    else
      for (e = t.child; e !== null; )
        a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = t, e = e.sibling;
    return t.subtreeFlags |= u, t.childLanes = a, l;
  }
  function Ld(t, l, a) {
    var u = l.pendingProps;
    switch (Ei(l), l.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return At(l), null;
      case 1:
        return At(l), null;
      case 3:
        return a = l.stateNode, u = null, t !== null && (u = t.memoizedState.cache), l.memoizedState.cache !== u && (l.flags |= 2048), Bl(Ht), Ll(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (qu(l) ? Xl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, ys())), At(l), null;
      case 26:
        return a = l.memoizedState, t === null ? (Xl(l), a !== null ? (At(l), Go(l, a)) : (At(l), l.flags &= -16777217)) : a ? a !== t.memoizedState ? (Xl(l), At(l), Go(l, a)) : (At(l), l.flags &= -16777217) : (t.memoizedProps !== u && Xl(l), At(l), l.flags &= -16777217), null;
      case 27:
        be(l), a = K.current;
        var e = l.type;
        if (t !== null && l.stateNode != null)
          t.memoizedProps !== u && Xl(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(c(166));
            return At(l), null;
          }
          t = j.current, qu(l) ? ds(l) : (t = Gr(e, u, a), l.stateNode = t, Xl(l));
        }
        return At(l), null;
      case 5:
        if (be(l), a = l.type, t !== null && l.stateNode != null)
          t.memoizedProps !== u && Xl(l);
        else {
          if (!u) {
            if (l.stateNode === null)
              throw Error(c(166));
            return At(l), null;
          }
          if (t = j.current, qu(l))
            ds(l);
          else {
            switch (e = Tn(
              K.current
            ), t) {
              case 1:
                t = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                t = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    t = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    t = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    t = e.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof u.is == "string" ? e.createElement("select", { is: u.is }) : e.createElement("select"), u.multiple ? t.multiple = !0 : u.size && (t.size = u.size);
                    break;
                  default:
                    t = typeof u.is == "string" ? e.createElement(a, { is: u.is }) : e.createElement(a);
                }
            }
            t[Vt] = l, t[kt] = u;
            t: for (e = l.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6)
                t.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === l) break t;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === l)
                  break t;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
            l.stateNode = t;
            t: switch (Zt(t, a, u), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!u.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && Xl(l);
          }
        }
        return At(l), l.flags &= -16777217, null;
      case 6:
        if (t && l.stateNode != null)
          t.memoizedProps !== u && Xl(l);
        else {
          if (typeof u != "string" && l.stateNode === null)
            throw Error(c(166));
          if (t = K.current, qu(l)) {
            if (t = l.stateNode, a = l.memoizedProps, u = null, e = Wt, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            t[Vt] = l, t = !!(t.nodeValue === a || u !== null && u.suppressHydrationWarning === !0 || xr(t.nodeValue, a)), t || Aa(l);
          } else
            t = Tn(t).createTextNode(
              u
            ), t[Vt] = l, l.stateNode = t;
        }
        return At(l), null;
      case 13:
        if (u = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (e = qu(l), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!e) throw Error(c(318));
              if (e = l.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
              e[Vt] = l;
            } else
              Bu(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
            At(l), e = !1;
          } else
            e = ys(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return l.flags & 256 ? (Cl(l), l) : (Cl(l), null);
        }
        if (Cl(l), (l.flags & 128) !== 0)
          return l.lanes = a, l;
        if (a = u !== null, t = t !== null && t.memoizedState !== null, a) {
          u = l.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool);
          var n = null;
          u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048);
        }
        return a !== t && a && (l.child.flags |= 8192), sn(l, l.updateQueue), At(l), null;
      case 4:
        return Ll(), t === null && Yf(l.stateNode.containerInfo), At(l), null;
      case 10:
        return Bl(l.type), At(l), null;
      case 19:
        if (N(qt), e = l.memoizedState, e === null) return At(l), null;
        if (u = (l.flags & 128) !== 0, n = e.rendering, n === null)
          if (u) Fu(e, !1);
          else {
            if (Mt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = l.child; t !== null; ) {
                if (n = un(t), n !== null) {
                  for (l.flags |= 128, Fu(e, !1), t = n.updateQueue, l.updateQueue = t, sn(l, t), l.subtreeFlags = 0, t = a, a = l.child; a !== null; )
                    rs(a, t), a = a.sibling;
                  return H(
                    qt,
                    qt.current & 1 | 2
                  ), l.child;
                }
                t = t.sibling;
              }
            e.tail !== null && El() > hn && (l.flags |= 128, u = !0, Fu(e, !1), l.lanes = 4194304);
          }
        else {
          if (!u)
            if (t = un(n), t !== null) {
              if (l.flags |= 128, u = !0, t = t.updateQueue, l.updateQueue = t, sn(l, t), Fu(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !ot)
                return At(l), null;
            } else
              2 * El() - e.renderingStartTime > hn && a !== 536870912 && (l.flags |= 128, u = !0, Fu(e, !1), l.lanes = 4194304);
          e.isBackwards ? (n.sibling = l.child, l.child = n) : (t = e.last, t !== null ? t.sibling = n : l.child = n, e.last = n);
        }
        return e.tail !== null ? (l = e.tail, e.rendering = l, e.tail = l.sibling, e.renderingStartTime = El(), l.sibling = null, t = qt.current, H(qt, u ? t & 1 | 2 : t & 1), l) : (At(l), null);
      case 22:
      case 23:
        return Cl(l), Ci(), u = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== u && (l.flags |= 8192) : u && (l.flags |= 8192), u ? (a & 536870912) !== 0 && (l.flags & 128) === 0 && (At(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : At(l), a = l.updateQueue, a !== null && sn(l, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== a && (l.flags |= 2048), t !== null && N(Ma), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Bl(Ht), At(l), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, l.tag));
  }
  function Kd(t, l) {
    switch (Ei(l), l.tag) {
      case 1:
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 3:
        return Bl(Ht), Ll(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
      case 26:
      case 27:
      case 5:
        return be(l), null;
      case 13:
        if (Cl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
          if (l.alternate === null)
            throw Error(c(340));
          Bu();
        }
        return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 19:
        return N(qt), null;
      case 4:
        return Ll(), null;
      case 10:
        return Bl(l.type), null;
      case 22:
      case 23:
        return Cl(l), Ci(), t !== null && N(Ma), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
      case 24:
        return Bl(Ht), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xo(t, l) {
    switch (Ei(l), l.tag) {
      case 3:
        Bl(Ht), Ll();
        break;
      case 26:
      case 27:
      case 5:
        be(l);
        break;
      case 4:
        Ll();
        break;
      case 13:
        Cl(l);
        break;
      case 19:
        N(qt);
        break;
      case 10:
        Bl(l.type);
        break;
      case 22:
      case 23:
        Cl(l), Ci(), t !== null && N(Ma);
        break;
      case 24:
        Bl(Ht);
    }
  }
  function Pu(t, l) {
    try {
      var a = l.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & t) === t) {
            u = void 0;
            var n = a.create, i = a.inst;
            u = n(), i.destroy = u;
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (f) {
      gt(l, l.return, f);
    }
  }
  function la(t, l, a) {
    try {
      var u = l.updateQueue, e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & t) === t) {
            var i = u.inst, f = i.destroy;
            if (f !== void 0) {
              i.destroy = void 0, e = l;
              var s = a, m = f;
              try {
                m();
              } catch (p) {
                gt(
                  e,
                  s,
                  p
                );
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (p) {
      gt(l, l.return, p);
    }
  }
  function Qo(t) {
    var l = t.updateQueue;
    if (l !== null) {
      var a = t.stateNode;
      try {
        Os(l, a);
      } catch (u) {
        gt(t, t.return, u);
      }
    }
  }
  function jo(t, l, a) {
    a.props = Ra(
      t.type,
      t.memoizedProps
    ), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (u) {
      gt(t, l, u);
    }
  }
  function Iu(t, l) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var u = t.stateNode;
            break;
          case 30:
            u = t.stateNode;
            break;
          default:
            u = t.stateNode;
        }
        typeof a == "function" ? t.refCleanup = a(u) : a.current = u;
      }
    } catch (e) {
      gt(t, l, e);
    }
  }
  function Ol(t, l) {
    var a = t.ref, u = t.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          gt(t, l, e);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          gt(t, l, e);
        }
      else a.current = null;
  }
  function Zo(t) {
    var l = t.type, a = t.memoizedProps, u = t.stateNode;
    try {
      t: switch (l) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break t;
        case "img":
          a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      gt(t, t.return, e);
    }
  }
  function hf(t, l, a) {
    try {
      var u = t.stateNode;
      hv(u, t.type, a, l), u[kt] = l;
    } catch (e) {
      gt(t, t.return, e);
    }
  }
  function Vo(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && sa(t.type) || t.tag === 4;
  }
  function df(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Vo(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && sa(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function vf(t, l, a) {
    var u = t.tag;
    if (u === 5 || u === 6)
      t = t.stateNode, l ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, l) : (l = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, l.appendChild(t), a = a._reactRootContainer, a != null || l.onclick !== null || (l.onclick = pn));
    else if (u !== 4 && (u === 27 && sa(t.type) && (a = t.stateNode, l = null), t = t.child, t !== null))
      for (vf(t, l, a), t = t.sibling; t !== null; )
        vf(t, l, a), t = t.sibling;
  }
  function on(t, l, a) {
    var u = t.tag;
    if (u === 5 || u === 6)
      t = t.stateNode, l ? a.insertBefore(t, l) : a.appendChild(t);
    else if (u !== 4 && (u === 27 && sa(t.type) && (a = t.stateNode), t = t.child, t !== null))
      for (on(t, l, a), t = t.sibling; t !== null; )
        on(t, l, a), t = t.sibling;
  }
  function Lo(t) {
    var l = t.stateNode, a = t.memoizedProps;
    try {
      for (var u = t.type, e = l.attributes; e.length; )
        l.removeAttributeNode(e[0]);
      Zt(l, u, a), l[Vt] = t, l[kt] = a;
    } catch (n) {
      gt(t, t.return, n);
    }
  }
  var Ql = !1, Rt = !1, yf = !1, Ko = typeof WeakSet == "function" ? WeakSet : Set, Ct = null;
  function Jd(t, l) {
    if (t = t.containerInfo, Xf = Dn, t = ls(t), hi(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break t;
            }
            var i = 0, f = -1, s = -1, m = 0, p = 0, A = t, g = null;
            l: for (; ; ) {
              for (var S; A !== a || e !== 0 && A.nodeType !== 3 || (f = i + e), A !== n || u !== 0 && A.nodeType !== 3 || (s = i + u), A.nodeType === 3 && (i += A.nodeValue.length), (S = A.firstChild) !== null; )
                g = A, A = S;
              for (; ; ) {
                if (A === t) break l;
                if (g === a && ++m === e && (f = i), g === n && ++p === u && (s = i), (S = A.nextSibling) !== null) break;
                A = g, g = A.parentNode;
              }
              A = S;
            }
            a = f === -1 || s === -1 ? null : { start: f, end: s };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Qf = { focusedElem: t, selectionRange: a }, Dn = !1, Ct = l; Ct !== null; )
      if (l = Ct, t = l.child, (l.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = l, Ct = t;
      else
        for (; Ct !== null; ) {
          switch (l = Ct, n = l.alternate, t = l.flags, l.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && n !== null) {
                t = void 0, a = l, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
                try {
                  var L = Ra(
                    a.type,
                    e,
                    a.elementType === a.type
                  );
                  t = u.getSnapshotBeforeUpdate(
                    L,
                    n
                  ), u.__reactInternalSnapshotBeforeUpdate = t;
                } catch (Z) {
                  gt(
                    a,
                    a.return,
                    Z
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = l.stateNode.containerInfo, a = t.nodeType, a === 9)
                  Vf(t);
                else if (a === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Vf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(c(163));
          }
          if (t = l.sibling, t !== null) {
            t.return = l.return, Ct = t;
            break;
          }
          Ct = l.return;
        }
  }
  function Jo(t, l, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        aa(t, a), u & 4 && Pu(5, a);
        break;
      case 1:
        if (aa(t, a), u & 4)
          if (t = a.stateNode, l === null)
            try {
              t.componentDidMount();
            } catch (i) {
              gt(a, a.return, i);
            }
          else {
            var e = Ra(
              a.type,
              l.memoizedProps
            );
            l = l.memoizedState;
            try {
              t.componentDidUpdate(
                e,
                l,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              gt(
                a,
                a.return,
                i
              );
            }
          }
        u & 64 && Qo(a), u & 512 && Iu(a, a.return);
        break;
      case 3:
        if (aa(t, a), u & 64 && (t = a.updateQueue, t !== null)) {
          if (l = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                l = a.child.stateNode;
                break;
              case 1:
                l = a.child.stateNode;
            }
          try {
            Os(t, l);
          } catch (i) {
            gt(a, a.return, i);
          }
        }
        break;
      case 27:
        l === null && u & 4 && Lo(a);
      case 26:
      case 5:
        aa(t, a), l === null && u & 4 && Zo(a), u & 512 && Iu(a, a.return);
        break;
      case 12:
        aa(t, a);
        break;
      case 13:
        aa(t, a), u & 4 && ko(t, a), u & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = lv.bind(
          null,
          a
        ), bv(t, a))));
        break;
      case 22:
        if (u = a.memoizedState !== null || Ql, !u) {
          l = l !== null && l.memoizedState !== null || Rt, e = Ql;
          var n = Rt;
          Ql = u, (Rt = l) && !n ? ua(
            t,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : aa(t, a), Ql = e, Rt = n;
        }
        break;
      case 30:
        break;
      default:
        aa(t, a);
    }
  }
  function wo(t) {
    var l = t.alternate;
    l !== null && (t.alternate = null, wo(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && wn(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Et = null, Pt = !1;
  function jl(t, l, a) {
    for (a = a.child; a !== null; )
      Wo(t, l, a), a = a.sibling;
  }
  function Wo(t, l, a) {
    if (ll && typeof ll.onCommitFiberUnmount == "function")
      try {
        ll.onCommitFiberUnmount(_u, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Rt || Ol(a, l), jl(
          t,
          l,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Rt || Ol(a, l);
        var u = Et, e = Pt;
        sa(a.type) && (Et = a.stateNode, Pt = !1), jl(
          t,
          l,
          a
        ), ce(a.stateNode), Et = u, Pt = e;
        break;
      case 5:
        Rt || Ol(a, l);
      case 6:
        if (u = Et, e = Pt, Et = null, jl(
          t,
          l,
          a
        ), Et = u, Pt = e, Et !== null)
          if (Pt)
            try {
              (Et.nodeType === 9 ? Et.body : Et.nodeName === "HTML" ? Et.ownerDocument.body : Et).removeChild(a.stateNode);
            } catch (n) {
              gt(
                a,
                l,
                n
              );
            }
          else
            try {
              Et.removeChild(a.stateNode);
            } catch (n) {
              gt(
                a,
                l,
                n
              );
            }
        break;
      case 18:
        Et !== null && (Pt ? (t = Et, Yr(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), me(t)) : Yr(Et, a.stateNode));
        break;
      case 4:
        u = Et, e = Pt, Et = a.stateNode.containerInfo, Pt = !0, jl(
          t,
          l,
          a
        ), Et = u, Pt = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Rt || la(2, a, l), Rt || la(4, a, l), jl(
          t,
          l,
          a
        );
        break;
      case 1:
        Rt || (Ol(a, l), u = a.stateNode, typeof u.componentWillUnmount == "function" && jo(
          a,
          l,
          u
        )), jl(
          t,
          l,
          a
        );
        break;
      case 21:
        jl(
          t,
          l,
          a
        );
        break;
      case 22:
        Rt = (u = Rt) || a.memoizedState !== null, jl(
          t,
          l,
          a
        ), Rt = u;
        break;
      default:
        jl(
          t,
          l,
          a
        );
    }
  }
  function ko(t, l) {
    if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        me(t);
      } catch (a) {
        gt(l, l.return, a);
      }
  }
  function wd(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var l = t.stateNode;
        return l === null && (l = t.stateNode = new Ko()), l;
      case 22:
        return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new Ko()), l;
      default:
        throw Error(c(435, t.tag));
    }
  }
  function mf(t, l) {
    var a = wd(t);
    l.forEach(function(u) {
      var e = av.bind(null, t, u);
      a.has(u) || (a.add(u), u.then(e, e));
    });
  }
  function nl(t, l) {
    var a = l.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u], n = t, i = l, f = i;
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (sa(f.type)) {
                Et = f.stateNode, Pt = !1;
                break t;
              }
              break;
            case 5:
              Et = f.stateNode, Pt = !1;
              break t;
            case 3:
            case 4:
              Et = f.stateNode.containerInfo, Pt = !0;
              break t;
          }
          f = f.return;
        }
        if (Et === null) throw Error(c(160));
        Wo(n, i, e), Et = null, Pt = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (l.subtreeFlags & 13878)
      for (l = l.child; l !== null; )
        $o(l, t), l = l.sibling;
  }
  var _l = null;
  function $o(t, l) {
    var a = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        nl(l, t), il(t), u & 4 && (la(3, t, t.return), Pu(3, t), la(5, t, t.return));
        break;
      case 1:
        nl(l, t), il(t), u & 512 && (Rt || a === null || Ol(a, a.return)), u & 64 && Ql && (t = t.updateQueue, t !== null && (u = t.callbacks, u !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
        break;
      case 26:
        var e = _l;
        if (nl(l, t), il(t), u & 512 && (Rt || a === null || Ol(a, a.return)), u & 4) {
          var n = a !== null ? a.memoizedState : null;
          if (u = t.memoizedState, a === null)
            if (u === null)
              if (t.stateNode === null) {
                t: {
                  u = t.type, a = t.memoizedProps, e = e.ownerDocument || e;
                  l: switch (u) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Eu] || n[Vt] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Zt(n, u, a), n[Vt] = t, Bt(n), u = n;
                      break t;
                    case "link":
                      var i = Lr(
                        "link",
                        "href",
                        e
                      ).get(u + (a.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (n = i[f], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      n = e.createElement(u), Zt(n, u, a), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (i = Lr(
                        "meta",
                        "content",
                        e
                      ).get(u + (a.content || ""))) {
                        for (f = 0; f < i.length; f++)
                          if (n = i[f], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            i.splice(f, 1);
                            break l;
                          }
                      }
                      n = e.createElement(u), Zt(n, u, a), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(c(468, u));
                  }
                  n[Vt] = t, Bt(n), u = n;
                }
                t.stateNode = u;
              } else
                Kr(
                  e,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = Vr(
                e,
                u,
                t.memoizedProps
              );
          else
            n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? Kr(
              e,
              t.type,
              t.stateNode
            ) : Vr(
              e,
              u,
              t.memoizedProps
            )) : u === null && t.stateNode !== null && hf(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        nl(l, t), il(t), u & 512 && (Rt || a === null || Ol(a, a.return)), a !== null && u & 4 && hf(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (nl(l, t), il(t), u & 512 && (Rt || a === null || Ol(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            Za(e, "");
          } catch (S) {
            gt(t, t.return, S);
          }
        }
        u & 4 && t.stateNode != null && (e = t.memoizedProps, hf(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), u & 1024 && (yf = !0);
        break;
      case 6:
        if (nl(l, t), il(t), u & 4) {
          if (t.stateNode === null)
            throw Error(c(162));
          u = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = u;
          } catch (S) {
            gt(t, t.return, S);
          }
        }
        break;
      case 3:
        if (zn = null, e = _l, _l = En(l.containerInfo), nl(l, t), _l = e, il(t), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            me(l.containerInfo);
          } catch (S) {
            gt(t, t.return, S);
          }
        yf && (yf = !1, Fo(t));
        break;
      case 4:
        u = _l, _l = En(
          t.stateNode.containerInfo
        ), nl(l, t), il(t), _l = u;
        break;
      case 12:
        nl(l, t), il(t);
        break;
      case 13:
        nl(l, t), il(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Tf = El()), u & 4 && (u = t.updateQueue, u !== null && (t.updateQueue = null, mf(t, u)));
        break;
      case 22:
        e = t.memoizedState !== null;
        var s = a !== null && a.memoizedState !== null, m = Ql, p = Rt;
        if (Ql = m || e, Rt = p || s, nl(l, t), Rt = p, Ql = m, il(t), u & 8192)
          t: for (l = t.stateNode, l._visibility = e ? l._visibility & -2 : l._visibility | 1, e && (a === null || s || Ql || Rt || Ua(t)), a = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (a === null) {
                s = a = l;
                try {
                  if (n = s.stateNode, e)
                    i = n.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    f = s.stateNode;
                    var A = s.memoizedProps.style, g = A != null && A.hasOwnProperty("display") ? A.display : null;
                    f.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (S) {
                  gt(s, s.return, S);
                }
              }
            } else if (l.tag === 6) {
              if (a === null) {
                s = l;
                try {
                  s.stateNode.nodeValue = e ? "" : s.memoizedProps;
                } catch (S) {
                  gt(s, s.return, S);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              a === l && (a = null), l = l.return;
            }
            a === l && (a = null), l.sibling.return = l.return, l = l.sibling;
          }
        u & 4 && (u = t.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, mf(t, a))));
        break;
      case 19:
        nl(l, t), il(t), u & 4 && (u = t.updateQueue, u !== null && (t.updateQueue = null, mf(t, u)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        nl(l, t), il(t);
    }
  }
  function il(t) {
    var l = t.flags;
    if (l & 2) {
      try {
        for (var a, u = t.return; u !== null; ) {
          if (Vo(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(c(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode, n = df(t);
            on(t, n, e);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (Za(i, ""), a.flags &= -33);
            var f = df(t);
            on(t, f, i);
            break;
          case 3:
          case 4:
            var s = a.stateNode.containerInfo, m = df(t);
            vf(
              t,
              m,
              s
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (p) {
        gt(t, t.return, p);
      }
      t.flags &= -3;
    }
    l & 4096 && (t.flags &= -4097);
  }
  function Fo(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var l = t;
        Fo(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
  }
  function aa(t, l) {
    if (l.subtreeFlags & 8772)
      for (l = l.child; l !== null; )
        Jo(t, l.alternate, l), l = l.sibling;
  }
  function Ua(t) {
    for (t = t.child; t !== null; ) {
      var l = t;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          la(4, l, l.return), Ua(l);
          break;
        case 1:
          Ol(l, l.return);
          var a = l.stateNode;
          typeof a.componentWillUnmount == "function" && jo(
            l,
            l.return,
            a
          ), Ua(l);
          break;
        case 27:
          ce(l.stateNode);
        case 26:
        case 5:
          Ol(l, l.return), Ua(l);
          break;
        case 22:
          l.memoizedState === null && Ua(l);
          break;
        case 30:
          Ua(l);
          break;
        default:
          Ua(l);
      }
      t = t.sibling;
    }
  }
  function ua(t, l, a) {
    for (a = a && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
      var u = l.alternate, e = t, n = l, i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ua(
            e,
            n,
            a
          ), Pu(4, n);
          break;
        case 1:
          if (ua(
            e,
            n,
            a
          ), u = n, e = u.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (m) {
              gt(u, u.return, m);
            }
          if (u = n, e = u.updateQueue, e !== null) {
            var f = u.stateNode;
            try {
              var s = e.shared.hiddenCallbacks;
              if (s !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < s.length; e++)
                  zs(s[e], f);
            } catch (m) {
              gt(u, u.return, m);
            }
          }
          a && i & 64 && Qo(n), Iu(n, n.return);
          break;
        case 27:
          Lo(n);
        case 26:
        case 5:
          ua(
            e,
            n,
            a
          ), a && u === null && i & 4 && Zo(n), Iu(n, n.return);
          break;
        case 12:
          ua(
            e,
            n,
            a
          );
          break;
        case 13:
          ua(
            e,
            n,
            a
          ), a && i & 4 && ko(e, n);
          break;
        case 22:
          n.memoizedState === null && ua(
            e,
            n,
            a
          ), Iu(n, n.return);
          break;
        case 30:
          break;
        default:
          ua(
            e,
            n,
            a
          );
      }
      l = l.sibling;
    }
  }
  function gf(t, l) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && Gu(a));
  }
  function Sf(t, l) {
    t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Gu(t));
  }
  function Ml(t, l, a, u) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Po(
          t,
          l,
          a,
          u
        ), l = l.sibling;
  }
  function Po(t, l, a, u) {
    var e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ml(
          t,
          l,
          a,
          u
        ), e & 2048 && Pu(9, l);
        break;
      case 1:
        Ml(
          t,
          l,
          a,
          u
        );
        break;
      case 3:
        Ml(
          t,
          l,
          a,
          u
        ), e & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Gu(t)));
        break;
      case 12:
        if (e & 2048) {
          Ml(
            t,
            l,
            a,
            u
          ), t = l.stateNode;
          try {
            var n = l.memoizedProps, i = n.id, f = n.onPostCommit;
            typeof f == "function" && f(
              i,
              l.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (s) {
            gt(l, l.return, s);
          }
        } else
          Ml(
            t,
            l,
            a,
            u
          );
        break;
      case 13:
        Ml(
          t,
          l,
          a,
          u
        );
        break;
      case 23:
        break;
      case 22:
        n = l.stateNode, i = l.alternate, l.memoizedState !== null ? n._visibility & 2 ? Ml(
          t,
          l,
          a,
          u
        ) : te(t, l) : n._visibility & 2 ? Ml(
          t,
          l,
          a,
          u
        ) : (n._visibility |= 2, fu(
          t,
          l,
          a,
          u,
          (l.subtreeFlags & 10256) !== 0
        )), e & 2048 && gf(i, l);
        break;
      case 24:
        Ml(
          t,
          l,
          a,
          u
        ), e & 2048 && Sf(l.alternate, l);
        break;
      default:
        Ml(
          t,
          l,
          a,
          u
        );
    }
  }
  function fu(t, l, a, u, e) {
    for (e = e && (l.subtreeFlags & 10256) !== 0, l = l.child; l !== null; ) {
      var n = t, i = l, f = a, s = u, m = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          fu(
            n,
            i,
            f,
            s,
            e
          ), Pu(8, i);
          break;
        case 23:
          break;
        case 22:
          var p = i.stateNode;
          i.memoizedState !== null ? p._visibility & 2 ? fu(
            n,
            i,
            f,
            s,
            e
          ) : te(
            n,
            i
          ) : (p._visibility |= 2, fu(
            n,
            i,
            f,
            s,
            e
          )), e && m & 2048 && gf(
            i.alternate,
            i
          );
          break;
        case 24:
          fu(
            n,
            i,
            f,
            s,
            e
          ), e && m & 2048 && Sf(i.alternate, i);
          break;
        default:
          fu(
            n,
            i,
            f,
            s,
            e
          );
      }
      l = l.sibling;
    }
  }
  function te(t, l) {
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) {
        var a = t, u = l, e = u.flags;
        switch (u.tag) {
          case 22:
            te(a, u), e & 2048 && gf(
              u.alternate,
              u
            );
            break;
          case 24:
            te(a, u), e & 2048 && Sf(u.alternate, u);
            break;
          default:
            te(a, u);
        }
        l = l.sibling;
      }
  }
  var le = 8192;
  function cu(t) {
    if (t.subtreeFlags & le)
      for (t = t.child; t !== null; )
        Io(t), t = t.sibling;
  }
  function Io(t) {
    switch (t.tag) {
      case 26:
        cu(t), t.flags & le && t.memoizedState !== null && Nv(
          _l,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        cu(t);
        break;
      case 3:
      case 4:
        var l = _l;
        _l = En(t.stateNode.containerInfo), cu(t), _l = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = le, le = 16777216, cu(t), le = l) : cu(t));
        break;
      default:
        cu(t);
    }
  }
  function tr(t) {
    var l = t.alternate;
    if (l !== null && (t = l.child, t !== null)) {
      l.child = null;
      do
        l = t.sibling, t.sibling = null, t = l;
      while (t !== null);
    }
  }
  function ae(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var a = 0; a < l.length; a++) {
          var u = l[a];
          Ct = u, ar(
            u,
            t
          );
        }
      tr(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        lr(t), t = t.sibling;
  }
  function lr(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ae(t), t.flags & 2048 && la(9, t, t.return);
        break;
      case 3:
        ae(t);
        break;
      case 12:
        ae(t);
        break;
      case 22:
        var l = t.stateNode;
        t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, rn(t)) : ae(t);
        break;
      default:
        ae(t);
    }
  }
  function rn(t) {
    var l = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (l !== null)
        for (var a = 0; a < l.length; a++) {
          var u = l[a];
          Ct = u, ar(
            u,
            t
          );
        }
      tr(t);
    }
    for (t = t.child; t !== null; ) {
      switch (l = t, l.tag) {
        case 0:
        case 11:
        case 15:
          la(8, l, l.return), rn(l);
          break;
        case 22:
          a = l.stateNode, a._visibility & 2 && (a._visibility &= -3, rn(l));
          break;
        default:
          rn(l);
      }
      t = t.sibling;
    }
  }
  function ar(t, l) {
    for (; Ct !== null; ) {
      var a = Ct;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          la(8, a, l);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Gu(a.memoizedState.cache);
      }
      if (u = a.child, u !== null) u.return = a, Ct = u;
      else
        t: for (a = t; Ct !== null; ) {
          u = Ct;
          var e = u.sibling, n = u.return;
          if (wo(u), u === a) {
            Ct = null;
            break t;
          }
          if (e !== null) {
            e.return = n, Ct = e;
            break t;
          }
          Ct = n;
        }
    }
  }
  var Wd = {
    getCacheForType: function(t) {
      var l = Lt(Ht), a = l.data.get(t);
      return a === void 0 && (a = t(), l.data.set(t, a)), a;
    }
  }, kd = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, _t = null, ut = null, ft = 0, ht = 0, fl = null, ea = !1, su = !1, bf = !1, Zl = 0, Mt = 0, na = 0, xa = 0, _f = 0, gl = 0, ou = 0, ue = null, It = null, pf = !1, Tf = 0, hn = 1 / 0, dn = null, ia = null, jt = 0, fa = null, ru = null, hu = 0, Ef = 0, Af = null, ur = null, ee = 0, zf = null;
  function cl() {
    if ((rt & 2) !== 0 && ft !== 0)
      return ft & -ft;
    if (_.T !== null) {
      var t = Ia;
      return t !== 0 ? t : Nf();
    }
    return Sc();
  }
  function er() {
    gl === 0 && (gl = (ft & 536870912) === 0 || ot ? vc() : 536870912);
    var t = ml.current;
    return t !== null && (t.flags |= 32), gl;
  }
  function sl(t, l, a) {
    (t === _t && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null) && (du(t, 0), ca(
      t,
      ft,
      gl,
      !1
    )), Tu(t, a), ((rt & 2) === 0 || t !== _t) && (t === _t && ((rt & 2) === 0 && (xa |= a), Mt === 4 && ca(
      t,
      ft,
      gl,
      !1
    )), Dl(t));
  }
  function nr(t, l, a) {
    if ((rt & 6) !== 0) throw Error(c(327));
    var u = !a && (l & 124) === 0 && (l & t.expiredLanes) === 0 || pu(t, l), e = u ? Pd(t, l) : Df(t, l, !0), n = u;
    do {
      if (e === 0) {
        su && !u && ca(t, l, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, n && !$d(a)) {
          e = Df(t, l, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = l, t.errorRecoveryDisabledLanes & n)
            var i = 0;
          else
            i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            l = i;
            t: {
              var f = t;
              e = ue;
              var s = f.current.memoizedState.isDehydrated;
              if (s && (du(f, i).flags |= 256), i = Df(
                f,
                i,
                !1
              ), i !== 2) {
                if (bf && !s) {
                  f.errorRecoveryDisabledLanes |= n, xa |= n, e = 4;
                  break t;
                }
                n = It, It = e, n !== null && (It === null ? It = n : It.push.apply(
                  It,
                  n
                ));
              }
              e = i;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          du(t, 0), ca(t, l, 0, !0);
          break;
        }
        t: {
          switch (u = t, n = e, n) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((l & 4194048) !== l) break;
            case 6:
              ca(
                u,
                l,
                gl,
                !ea
              );
              break t;
            case 2:
              It = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((l & 62914560) === l && (e = Tf + 300 - El(), 10 < e)) {
            if (ca(
              u,
              l,
              gl,
              !ea
            ), Ee(u, 0, !0) !== 0) break t;
            u.timeoutHandle = qr(
              ir.bind(
                null,
                u,
                a,
                It,
                dn,
                pf,
                l,
                gl,
                xa,
                ou,
                ea,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break t;
          }
          ir(
            u,
            a,
            It,
            dn,
            pf,
            l,
            gl,
            xa,
            ou,
            ea,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Dl(t);
  }
  function ir(t, l, a, u, e, n, i, f, s, m, p, A, g, S) {
    if (t.timeoutHandle = -1, A = l.subtreeFlags, (A & 8192 || (A & 16785408) === 16785408) && (re = { stylesheets: null, count: 0, unsuspend: xv }, Io(l), A = Hv(), A !== null)) {
      t.cancelPendingCommit = A(
        dr.bind(
          null,
          t,
          l,
          n,
          a,
          u,
          e,
          i,
          f,
          s,
          p,
          1,
          g,
          S
        )
      ), ca(t, n, i, !m);
      return;
    }
    dr(
      t,
      l,
      n,
      a,
      u,
      e,
      i,
      f,
      s
    );
  }
  function $d(t) {
    for (var l = t; ; ) {
      var a = l.tag;
      if ((a === 0 || a === 11 || a === 15) && l.flags & 16384 && (a = l.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!ul(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = l.child, l.subtreeFlags & 16384 && a !== null)
        a.return = l, l = a;
      else {
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return !0;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    return !0;
  }
  function ca(t, l, a, u) {
    l &= ~_f, l &= ~xa, t.suspendedLanes |= l, t.pingedLanes &= ~l, u && (t.warmLanes |= l), u = t.expirationTimes;
    for (var e = l; 0 < e; ) {
      var n = 31 - al(e), i = 1 << n;
      u[n] = -1, e &= ~i;
    }
    a !== 0 && mc(t, a, l);
  }
  function vn() {
    return (rt & 6) === 0 ? (ne(0), !1) : !0;
  }
  function Of() {
    if (ut !== null) {
      if (ht === 0)
        var t = ut.return;
      else
        t = ut, ql = za = null, Zi(t), nu = null, ku = 0, t = ut;
      for (; t !== null; )
        Xo(t.alternate, t), t = t.return;
      ut = null;
    }
  }
  function du(t, l) {
    var a = t.timeoutHandle;
    a !== -1 && (t.timeoutHandle = -1, vv(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), Of(), _t = t, ut = a = xl(t.current, null), ft = l, ht = 0, fl = null, ea = !1, su = pu(t, l), bf = !1, ou = gl = _f = xa = na = Mt = 0, It = ue = null, pf = !1, (l & 8) !== 0 && (l |= l & 32);
    var u = t.entangledLanes;
    if (u !== 0)
      for (t = t.entanglements, u &= l; 0 < u; ) {
        var e = 31 - al(u), n = 1 << e;
        l |= t[e], u &= ~n;
      }
    return Zl = l, Be(), a;
  }
  function fr(t, l) {
    I = null, _.H = tn, l === Qu || l === Le ? (l = Es(), ht = 3) : l === _s ? (l = Es(), ht = 4) : ht = l === zo ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, fl = l, ut === null && (Mt = 1, nn(
      t,
      hl(l, t.current)
    ));
  }
  function cr() {
    var t = _.H;
    return _.H = tn, t === null ? tn : t;
  }
  function sr() {
    var t = _.A;
    return _.A = Wd, t;
  }
  function Mf() {
    Mt = 4, ea || (ft & 4194048) !== ft && ml.current !== null || (su = !0), (na & 134217727) === 0 && (xa & 134217727) === 0 || _t === null || ca(
      _t,
      ft,
      gl,
      !1
    );
  }
  function Df(t, l, a) {
    var u = rt;
    rt |= 2;
    var e = cr(), n = sr();
    (_t !== t || ft !== l) && (dn = null, du(t, l)), l = !1;
    var i = Mt;
    t: do
      try {
        if (ht !== 0 && ut !== null) {
          var f = ut, s = fl;
          switch (ht) {
            case 8:
              Of(), i = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ml.current === null && (l = !0);
              var m = ht;
              if (ht = 0, fl = null, vu(t, f, s, m), a && su) {
                i = 0;
                break t;
              }
              break;
            default:
              m = ht, ht = 0, fl = null, vu(t, f, s, m);
          }
        }
        Fd(), i = Mt;
        break;
      } catch (p) {
        fr(t, p);
      }
    while (!0);
    return l && t.shellSuspendCounter++, ql = za = null, rt = u, _.H = e, _.A = n, ut === null && (_t = null, ft = 0, Be()), i;
  }
  function Fd() {
    for (; ut !== null; ) or(ut);
  }
  function Pd(t, l) {
    var a = rt;
    rt |= 2;
    var u = cr(), e = sr();
    _t !== t || ft !== l ? (dn = null, hn = El() + 500, du(t, l)) : su = pu(
      t,
      l
    );
    t: do
      try {
        if (ht !== 0 && ut !== null) {
          l = ut;
          var n = fl;
          l: switch (ht) {
            case 1:
              ht = 0, fl = null, vu(t, l, n, 1);
              break;
            case 2:
            case 9:
              if (ps(n)) {
                ht = 0, fl = null, rr(l);
                break;
              }
              l = function() {
                ht !== 2 && ht !== 9 || _t !== t || (ht = 7), Dl(t);
              }, n.then(l, l);
              break t;
            case 3:
              ht = 7;
              break t;
            case 4:
              ht = 5;
              break t;
            case 7:
              ps(n) ? (ht = 0, fl = null, rr(l)) : (ht = 0, fl = null, vu(t, l, n, 7));
              break;
            case 5:
              var i = null;
              switch (ut.tag) {
                case 26:
                  i = ut.memoizedState;
                case 5:
                case 27:
                  var f = ut;
                  if (!i || Jr(i)) {
                    ht = 0, fl = null;
                    var s = f.sibling;
                    if (s !== null) ut = s;
                    else {
                      var m = f.return;
                      m !== null ? (ut = m, yn(m)) : ut = null;
                    }
                    break l;
                  }
              }
              ht = 0, fl = null, vu(t, l, n, 5);
              break;
            case 6:
              ht = 0, fl = null, vu(t, l, n, 6);
              break;
            case 8:
              Of(), Mt = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        Id();
        break;
      } catch (p) {
        fr(t, p);
      }
    while (!0);
    return ql = za = null, _.H = u, _.A = e, rt = a, ut !== null ? 0 : (_t = null, ft = 0, Be(), Mt);
  }
  function Id() {
    for (; ut !== null && !ph(); )
      or(ut);
  }
  function or(t) {
    var l = Co(t.alternate, t, Zl);
    t.memoizedProps = t.pendingProps, l === null ? yn(t) : ut = l;
  }
  function rr(t) {
    var l = t, a = l.alternate;
    switch (l.tag) {
      case 15:
      case 0:
        l = xo(
          a,
          l,
          l.pendingProps,
          l.type,
          void 0,
          ft
        );
        break;
      case 11:
        l = xo(
          a,
          l,
          l.pendingProps,
          l.type.render,
          l.ref,
          ft
        );
        break;
      case 5:
        Zi(l);
      default:
        Xo(a, l), l = ut = rs(l, Zl), l = Co(a, l, Zl);
    }
    t.memoizedProps = t.pendingProps, l === null ? yn(t) : ut = l;
  }
  function vu(t, l, a, u) {
    ql = za = null, Zi(l), nu = null, ku = 0;
    var e = l.return;
    try {
      if (Zd(
        t,
        e,
        l,
        a,
        ft
      )) {
        Mt = 1, nn(
          t,
          hl(a, t.current)
        ), ut = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw ut = e, n;
      Mt = 1, nn(
        t,
        hl(a, t.current)
      ), ut = null;
      return;
    }
    l.flags & 32768 ? (ot || u === 1 ? t = !0 : su || (ft & 536870912) !== 0 ? t = !1 : (ea = t = !0, (u === 2 || u === 9 || u === 3 || u === 6) && (u = ml.current, u !== null && u.tag === 13 && (u.flags |= 16384))), hr(l, t)) : yn(l);
  }
  function yn(t) {
    var l = t;
    do {
      if ((l.flags & 32768) !== 0) {
        hr(
          l,
          ea
        );
        return;
      }
      t = l.return;
      var a = Ld(
        l.alternate,
        l,
        Zl
      );
      if (a !== null) {
        ut = a;
        return;
      }
      if (l = l.sibling, l !== null) {
        ut = l;
        return;
      }
      ut = l = t;
    } while (l !== null);
    Mt === 0 && (Mt = 5);
  }
  function hr(t, l) {
    do {
      var a = Kd(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, ut = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !l && (t = t.sibling, t !== null)) {
        ut = t;
        return;
      }
      ut = t = a;
    } while (t !== null);
    Mt = 6, ut = null;
  }
  function dr(t, l, a, u, e, n, i, f, s) {
    t.cancelPendingCommit = null;
    do
      mn();
    while (jt !== 0);
    if ((rt & 6) !== 0) throw Error(c(327));
    if (l !== null) {
      if (l === t.current) throw Error(c(177));
      if (n = l.lanes | l.childLanes, n |= gi, xh(
        t,
        a,
        n,
        i,
        f,
        s
      ), t === _t && (ut = _t = null, ft = 0), ru = l, fa = t, hu = a, Ef = n, Af = e, ur = u, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, uv(_e, function() {
        return Sr(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), u = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || u) {
        u = _.T, _.T = null, e = R.p, R.p = 2, i = rt, rt |= 4;
        try {
          Jd(t, l, a);
        } finally {
          rt = i, R.p = e, _.T = u;
        }
      }
      jt = 1, vr(), yr(), mr();
    }
  }
  function vr() {
    if (jt === 1) {
      jt = 0;
      var t = fa, l = ru, a = (l.flags & 13878) !== 0;
      if ((l.subtreeFlags & 13878) !== 0 || a) {
        a = _.T, _.T = null;
        var u = R.p;
        R.p = 2;
        var e = rt;
        rt |= 4;
        try {
          $o(l, t);
          var n = Qf, i = ls(t.containerInfo), f = n.focusedElem, s = n.selectionRange;
          if (i !== f && f && f.ownerDocument && ts(
            f.ownerDocument.documentElement,
            f
          )) {
            if (s !== null && hi(f)) {
              var m = s.start, p = s.end;
              if (p === void 0 && (p = m), "selectionStart" in f)
                f.selectionStart = m, f.selectionEnd = Math.min(
                  p,
                  f.value.length
                );
              else {
                var A = f.ownerDocument || document, g = A && A.defaultView || window;
                if (g.getSelection) {
                  var S = g.getSelection(), L = f.textContent.length, Z = Math.min(s.start, L), yt = s.end === void 0 ? Z : Math.min(s.end, L);
                  !S.extend && Z > yt && (i = yt, yt = Z, Z = i);
                  var h = Ic(
                    f,
                    Z
                  ), r = Ic(
                    f,
                    yt
                  );
                  if (h && r && (S.rangeCount !== 1 || S.anchorNode !== h.node || S.anchorOffset !== h.offset || S.focusNode !== r.node || S.focusOffset !== r.offset)) {
                    var v = A.createRange();
                    v.setStart(h.node, h.offset), S.removeAllRanges(), Z > yt ? (S.addRange(v), S.extend(r.node, r.offset)) : (v.setEnd(r.node, r.offset), S.addRange(v));
                  }
                }
              }
            }
            for (A = [], S = f; S = S.parentNode; )
              S.nodeType === 1 && A.push({
                element: S,
                left: S.scrollLeft,
                top: S.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < A.length; f++) {
              var T = A[f];
              T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
            }
          }
          Dn = !!Xf, Qf = Xf = null;
        } finally {
          rt = e, R.p = u, _.T = a;
        }
      }
      t.current = l, jt = 2;
    }
  }
  function yr() {
    if (jt === 2) {
      jt = 0;
      var t = fa, l = ru, a = (l.flags & 8772) !== 0;
      if ((l.subtreeFlags & 8772) !== 0 || a) {
        a = _.T, _.T = null;
        var u = R.p;
        R.p = 2;
        var e = rt;
        rt |= 4;
        try {
          Jo(t, l.alternate, l);
        } finally {
          rt = e, R.p = u, _.T = a;
        }
      }
      jt = 3;
    }
  }
  function mr() {
    if (jt === 4 || jt === 3) {
      jt = 0, Th();
      var t = fa, l = ru, a = hu, u = ur;
      (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? jt = 5 : (jt = 0, ru = fa = null, gr(t, t.pendingLanes));
      var e = t.pendingLanes;
      if (e === 0 && (ia = null), Kn(a), l = l.stateNode, ll && typeof ll.onCommitFiberRoot == "function")
        try {
          ll.onCommitFiberRoot(
            _u,
            l,
            void 0,
            (l.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        l = _.T, e = R.p, R.p = 2, _.T = null;
        try {
          for (var n = t.onRecoverableError, i = 0; i < u.length; i++) {
            var f = u[i];
            n(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          _.T = l, R.p = e;
        }
      }
      (hu & 3) !== 0 && mn(), Dl(t), e = t.pendingLanes, (a & 4194090) !== 0 && (e & 42) !== 0 ? t === zf ? ee++ : (ee = 0, zf = t) : ee = 0, ne(0);
    }
  }
  function gr(t, l) {
    (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Gu(l)));
  }
  function mn(t) {
    return vr(), yr(), mr(), Sr();
  }
  function Sr() {
    if (jt !== 5) return !1;
    var t = fa, l = Ef;
    Ef = 0;
    var a = Kn(hu), u = _.T, e = R.p;
    try {
      R.p = 32 > a ? 32 : a, _.T = null, a = Af, Af = null;
      var n = fa, i = hu;
      if (jt = 0, ru = fa = null, hu = 0, (rt & 6) !== 0) throw Error(c(331));
      var f = rt;
      if (rt |= 4, lr(n.current), Po(
        n,
        n.current,
        i,
        a
      ), rt = f, ne(0, !1), ll && typeof ll.onPostCommitFiberRoot == "function")
        try {
          ll.onPostCommitFiberRoot(_u, n);
        } catch {
        }
      return !0;
    } finally {
      R.p = e, _.T = u, gr(t, l);
    }
  }
  function br(t, l, a) {
    l = hl(a, l), l = af(t.stateNode, l, 2), t = Fl(t, l, 2), t !== null && (Tu(t, 2), Dl(t));
  }
  function gt(t, l, a) {
    if (t.tag === 3)
      br(t, t, a);
    else
      for (; l !== null; ) {
        if (l.tag === 3) {
          br(
            l,
            t,
            a
          );
          break;
        } else if (l.tag === 1) {
          var u = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ia === null || !ia.has(u))) {
            t = hl(a, t), a = Eo(2), u = Fl(l, a, 2), u !== null && (Ao(
              a,
              u,
              l,
              t
            ), Tu(u, 2), Dl(u));
            break;
          }
        }
        l = l.return;
      }
  }
  function Rf(t, l, a) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new kd();
      var e = /* @__PURE__ */ new Set();
      u.set(l, e);
    } else
      e = u.get(l), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(l, e));
    e.has(a) || (bf = !0, e.add(a), t = tv.bind(null, t, l, a), l.then(t, t));
  }
  function tv(t, l, a) {
    var u = t.pingCache;
    u !== null && u.delete(l), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, _t === t && (ft & a) === a && (Mt === 4 || Mt === 3 && (ft & 62914560) === ft && 300 > El() - Tf ? (rt & 2) === 0 && du(t, 0) : _f |= a, ou === ft && (ou = 0)), Dl(t);
  }
  function _r(t, l) {
    l === 0 && (l = yc()), t = ka(t, l), t !== null && (Tu(t, l), Dl(t));
  }
  function lv(t) {
    var l = t.memoizedState, a = 0;
    l !== null && (a = l.retryLane), _r(t, a);
  }
  function av(t, l) {
    var a = 0;
    switch (t.tag) {
      case 13:
        var u = t.stateNode, e = t.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = t.stateNode;
        break;
      case 22:
        u = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    u !== null && u.delete(l), _r(t, a);
  }
  function uv(t, l) {
    return jn(t, l);
  }
  var gn = null, yu = null, Uf = !1, Sn = !1, xf = !1, Na = 0;
  function Dl(t) {
    t !== yu && t.next === null && (yu === null ? gn = yu = t : yu = yu.next = t), Sn = !0, Uf || (Uf = !0, nv());
  }
  function ne(t, l) {
    if (!xf && Sn) {
      xf = !0;
      do
        for (var a = !1, u = gn; u !== null; ) {
          if (t !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var i = u.suspendedLanes, f = u.pingedLanes;
              n = (1 << 31 - al(42 | t) + 1) - 1, n &= e & ~(i & ~f), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, Ar(u, n));
          } else
            n = ft, n = Ee(
              u,
              u === _t ? n : 0,
              u.cancelPendingCommit !== null || u.timeoutHandle !== -1
            ), (n & 3) === 0 || pu(u, n) || (a = !0, Ar(u, n));
          u = u.next;
        }
      while (a);
      xf = !1;
    }
  }
  function ev() {
    pr();
  }
  function pr() {
    Sn = Uf = !1;
    var t = 0;
    Na !== 0 && (dv() && (t = Na), Na = 0);
    for (var l = El(), a = null, u = gn; u !== null; ) {
      var e = u.next, n = Tr(u, l);
      n === 0 ? (u.next = null, a === null ? gn = e : a.next = e, e === null && (yu = a)) : (a = u, (t !== 0 || (n & 3) !== 0) && (Sn = !0)), u = e;
    }
    ne(t);
  }
  function Tr(t, l) {
    for (var a = t.suspendedLanes, u = t.pingedLanes, e = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - al(n), f = 1 << i, s = e[i];
      s === -1 ? ((f & a) === 0 || (f & u) !== 0) && (e[i] = Uh(f, l)) : s <= l && (t.expiredLanes |= f), n &= ~f;
    }
    if (l = _t, a = ft, a = Ee(
      t,
      t === l ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u = t.callbackNode, a === 0 || t === l && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null)
      return u !== null && u !== null && Zn(u), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || pu(t, a)) {
      if (l = a & -a, l === t.callbackPriority) return l;
      switch (u !== null && Zn(u), Kn(a)) {
        case 2:
        case 8:
          a = hc;
          break;
        case 32:
          a = _e;
          break;
        case 268435456:
          a = dc;
          break;
        default:
          a = _e;
      }
      return u = Er.bind(null, t), a = jn(a, u), t.callbackPriority = l, t.callbackNode = a, l;
    }
    return u !== null && u !== null && Zn(u), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Er(t, l) {
    if (jt !== 0 && jt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (mn() && t.callbackNode !== a)
      return null;
    var u = ft;
    return u = Ee(
      t,
      t === _t ? u : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), u === 0 ? null : (nr(t, u, l), Tr(t, El()), t.callbackNode != null && t.callbackNode === a ? Er.bind(null, t) : null);
  }
  function Ar(t, l) {
    if (mn()) return null;
    nr(t, l, !0);
  }
  function nv() {
    yv(function() {
      (rt & 6) !== 0 ? jn(
        rc,
        ev
      ) : pr();
    });
  }
  function Nf() {
    return Na === 0 && (Na = vc()), Na;
  }
  function zr(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : De("" + t);
  }
  function Or(t, l) {
    var a = l.ownerDocument.createElement("input");
    return a.name = l.name, a.value = l.value, t.id && a.setAttribute("form", t.id), l.parentNode.insertBefore(a, l), t = new FormData(t), a.parentNode.removeChild(a), t;
  }
  function iv(t, l, a, u, e) {
    if (l === "submit" && a && a.stateNode === e) {
      var n = zr(
        (e[kt] || null).action
      ), i = u.submitter;
      i && (l = (l = i[kt] || null) ? zr(l.formAction) : i.getAttribute("formAction"), l !== null && (n = l, i = null));
      var f = new Ne(
        "action",
        "action",
        null,
        u,
        e
      );
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (u.defaultPrevented) {
                if (Na !== 0) {
                  var s = i ? Or(e, i) : new FormData(e);
                  Fi(
                    a,
                    {
                      pending: !0,
                      data: s,
                      method: e.method,
                      action: n
                    },
                    null,
                    s
                  );
                }
              } else
                typeof n == "function" && (f.preventDefault(), s = i ? Or(e, i) : new FormData(e), Fi(
                  a,
                  {
                    pending: !0,
                    data: s,
                    method: e.method,
                    action: n
                  },
                  n,
                  s
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Hf = 0; Hf < mi.length; Hf++) {
    var qf = mi[Hf], fv = qf.toLowerCase(), cv = qf[0].toUpperCase() + qf.slice(1);
    bl(
      fv,
      "on" + cv
    );
  }
  bl(es, "onAnimationEnd"), bl(ns, "onAnimationIteration"), bl(is, "onAnimationStart"), bl("dblclick", "onDoubleClick"), bl("focusin", "onFocus"), bl("focusout", "onBlur"), bl(zd, "onTransitionRun"), bl(Od, "onTransitionStart"), bl(Md, "onTransitionCancel"), bl(fs, "onTransitionEnd"), Xa("onMouseEnter", ["mouseout", "mouseover"]), Xa("onMouseLeave", ["mouseout", "mouseover"]), Xa("onPointerEnter", ["pointerout", "pointerover"]), Xa("onPointerLeave", ["pointerout", "pointerover"]), ma(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ma(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ma("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ma(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ma(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ma(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ie = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), sv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ie)
  );
  function Mr(t, l) {
    l = (l & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var u = t[a], e = u.event;
      u = u.listeners;
      t: {
        var n = void 0;
        if (l)
          for (var i = u.length - 1; 0 <= i; i--) {
            var f = u[i], s = f.instance, m = f.currentTarget;
            if (f = f.listener, s !== n && e.isPropagationStopped())
              break t;
            n = f, e.currentTarget = m;
            try {
              n(e);
            } catch (p) {
              en(p);
            }
            e.currentTarget = null, n = s;
          }
        else
          for (i = 0; i < u.length; i++) {
            if (f = u[i], s = f.instance, m = f.currentTarget, f = f.listener, s !== n && e.isPropagationStopped())
              break t;
            n = f, e.currentTarget = m;
            try {
              n(e);
            } catch (p) {
              en(p);
            }
            e.currentTarget = null, n = s;
          }
      }
    }
  }
  function et(t, l) {
    var a = l[Jn];
    a === void 0 && (a = l[Jn] = /* @__PURE__ */ new Set());
    var u = t + "__bubble";
    a.has(u) || (Dr(l, t, 2, !1), a.add(u));
  }
  function Bf(t, l, a) {
    var u = 0;
    l && (u |= 4), Dr(
      a,
      t,
      u,
      l
    );
  }
  var bn = "_reactListening" + Math.random().toString(36).slice(2);
  function Yf(t) {
    if (!t[bn]) {
      t[bn] = !0, _c.forEach(function(a) {
        a !== "selectionchange" && (sv.has(a) || Bf(a, !1, t), Bf(a, !0, t));
      });
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      l === null || l[bn] || (l[bn] = !0, Bf("selectionchange", !1, l));
    }
  }
  function Dr(t, l, a, u) {
    switch (Pr(l)) {
      case 2:
        var e = Yv;
        break;
      case 8:
        e = Cv;
        break;
      default:
        e = $f;
    }
    a = e.bind(
      null,
      l,
      a,
      t
    ), e = void 0, !ui || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (e = !0), u ? e !== void 0 ? t.addEventListener(l, a, {
      capture: !0,
      passive: e
    }) : t.addEventListener(l, a, !0) : e !== void 0 ? t.addEventListener(l, a, {
      passive: e
    }) : t.addEventListener(l, a, !1);
  }
  function Cf(t, l, a, u, e) {
    var n = u;
    if ((l & 1) === 0 && (l & 2) === 0 && u !== null)
      t: for (; ; ) {
        if (u === null) return;
        var i = u.tag;
        if (i === 3 || i === 4) {
          var f = u.stateNode.containerInfo;
          if (f === e) break;
          if (i === 4)
            for (i = u.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === e)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (i = Ya(f), i === null) return;
            if (s = i.tag, s === 5 || s === 6 || s === 26 || s === 27) {
              u = n = i;
              continue t;
            }
            f = f.parentNode;
          }
        }
        u = u.return;
      }
    qc(function() {
      var m = n, p = li(a), A = [];
      t: {
        var g = cs.get(t);
        if (g !== void 0) {
          var S = Ne, L = t;
          switch (t) {
            case "keypress":
              if (Ue(a) === 0) break t;
            case "keydown":
            case "keyup":
              S = ud;
              break;
            case "focusin":
              L = "focus", S = fi;
              break;
            case "focusout":
              L = "blur", S = fi;
              break;
            case "beforeblur":
            case "afterblur":
              S = fi;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = Cc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = Kh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = id;
              break;
            case es:
            case ns:
            case is:
              S = Wh;
              break;
            case fs:
              S = cd;
              break;
            case "scroll":
            case "scrollend":
              S = Vh;
              break;
            case "wheel":
              S = od;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = $h;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = Xc;
              break;
            case "toggle":
            case "beforetoggle":
              S = hd;
          }
          var Z = (l & 4) !== 0, yt = !Z && (t === "scroll" || t === "scrollend"), h = Z ? g !== null ? g + "Capture" : null : g;
          Z = [];
          for (var r = m, v; r !== null; ) {
            var T = r;
            if (v = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || v === null || h === null || (T = zu(r, h), T != null && Z.push(
              fe(r, T, v)
            )), yt) break;
            r = r.return;
          }
          0 < Z.length && (g = new S(
            g,
            L,
            null,
            a,
            p
          ), A.push({ event: g, listeners: Z }));
        }
      }
      if ((l & 7) === 0) {
        t: {
          if (g = t === "mouseover" || t === "pointerover", S = t === "mouseout" || t === "pointerout", g && a !== ti && (L = a.relatedTarget || a.fromElement) && (Ya(L) || L[Ba]))
            break t;
          if ((S || g) && (g = p.window === p ? p : (g = p.ownerDocument) ? g.defaultView || g.parentWindow : window, S ? (L = a.relatedTarget || a.toElement, S = m, L = L ? Ya(L) : null, L !== null && (yt = U(L), Z = L.tag, L !== yt || Z !== 5 && Z !== 27 && Z !== 6) && (L = null)) : (S = null, L = m), S !== L)) {
            if (Z = Cc, T = "onMouseLeave", h = "onMouseEnter", r = "mouse", (t === "pointerout" || t === "pointerover") && (Z = Xc, T = "onPointerLeave", h = "onPointerEnter", r = "pointer"), yt = S == null ? g : Au(S), v = L == null ? g : Au(L), g = new Z(
              T,
              r + "leave",
              S,
              a,
              p
            ), g.target = yt, g.relatedTarget = v, T = null, Ya(p) === m && (Z = new Z(
              h,
              r + "enter",
              L,
              a,
              p
            ), Z.target = v, Z.relatedTarget = yt, T = Z), yt = T, S && L)
              l: {
                for (Z = S, h = L, r = 0, v = Z; v; v = mu(v))
                  r++;
                for (v = 0, T = h; T; T = mu(T))
                  v++;
                for (; 0 < r - v; )
                  Z = mu(Z), r--;
                for (; 0 < v - r; )
                  h = mu(h), v--;
                for (; r--; ) {
                  if (Z === h || h !== null && Z === h.alternate)
                    break l;
                  Z = mu(Z), h = mu(h);
                }
                Z = null;
              }
            else Z = null;
            S !== null && Rr(
              A,
              g,
              S,
              Z,
              !1
            ), L !== null && yt !== null && Rr(
              A,
              yt,
              L,
              Z,
              !0
            );
          }
        }
        t: {
          if (g = m ? Au(m) : window, S = g.nodeName && g.nodeName.toLowerCase(), S === "select" || S === "input" && g.type === "file")
            var C = wc;
          else if (Kc(g))
            if (Wc)
              C = Td;
            else {
              C = _d;
              var tt = bd;
            }
          else
            S = g.nodeName, !S || S.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? m && In(m.elementType) && (C = wc) : C = pd;
          if (C && (C = C(t, m))) {
            Jc(
              A,
              C,
              a,
              p
            );
            break t;
          }
          tt && tt(t, g, m), t === "focusout" && m && g.type === "number" && m.memoizedProps.value != null && Pn(g, "number", g.value);
        }
        switch (tt = m ? Au(m) : window, t) {
          case "focusin":
            (Kc(tt) || tt.contentEditable === "true") && (Ja = tt, di = m, Hu = null);
            break;
          case "focusout":
            Hu = di = Ja = null;
            break;
          case "mousedown":
            vi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vi = !1, as(A, a, p);
            break;
          case "selectionchange":
            if (Ad) break;
          case "keydown":
          case "keyup":
            as(A, a, p);
        }
        var X;
        if (si)
          t: {
            switch (t) {
              case "compositionstart":
                var V = "onCompositionStart";
                break t;
              case "compositionend":
                V = "onCompositionEnd";
                break t;
              case "compositionupdate":
                V = "onCompositionUpdate";
                break t;
            }
            V = void 0;
          }
        else
          Ka ? Vc(t, a) && (V = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (V = "onCompositionStart");
        V && (Qc && a.locale !== "ko" && (Ka || V !== "onCompositionStart" ? V === "onCompositionEnd" && Ka && (X = Bc()) : (wl = p, ei = "value" in wl ? wl.value : wl.textContent, Ka = !0)), tt = _n(m, V), 0 < tt.length && (V = new Gc(
          V,
          t,
          null,
          a,
          p
        ), A.push({ event: V, listeners: tt }), X ? V.data = X : (X = Lc(a), X !== null && (V.data = X)))), (X = vd ? yd(t, a) : md(t, a)) && (V = _n(m, "onBeforeInput"), 0 < V.length && (tt = new Gc(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          p
        ), A.push({
          event: tt,
          listeners: V
        }), tt.data = X)), iv(
          A,
          t,
          m,
          a,
          p
        );
      }
      Mr(A, l);
    });
  }
  function fe(t, l, a) {
    return {
      instance: t,
      listener: l,
      currentTarget: a
    };
  }
  function _n(t, l) {
    for (var a = l + "Capture", u = []; t !== null; ) {
      var e = t, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = zu(t, a), e != null && u.unshift(
        fe(t, e, n)
      ), e = zu(t, l), e != null && u.push(
        fe(t, e, n)
      )), t.tag === 3) return u;
      t = t.return;
    }
    return [];
  }
  function mu(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Rr(t, l, a, u, e) {
    for (var n = l._reactName, i = []; a !== null && a !== u; ) {
      var f = a, s = f.alternate, m = f.stateNode;
      if (f = f.tag, s !== null && s === u) break;
      f !== 5 && f !== 26 && f !== 27 || m === null || (s = m, e ? (m = zu(a, n), m != null && i.unshift(
        fe(a, m, s)
      )) : e || (m = zu(a, n), m != null && i.push(
        fe(a, m, s)
      ))), a = a.return;
    }
    i.length !== 0 && t.push({ event: l, listeners: i });
  }
  var ov = /\r\n?/g, rv = /\u0000|\uFFFD/g;
  function Ur(t) {
    return (typeof t == "string" ? t : "" + t).replace(ov, `
`).replace(rv, "");
  }
  function xr(t, l) {
    return l = Ur(l), Ur(t) === l;
  }
  function pn() {
  }
  function vt(t, l, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string" ? l === "body" || l === "textarea" && u === "" || Za(t, u) : (typeof u == "number" || typeof u == "bigint") && l !== "body" && Za(t, "" + u);
        break;
      case "className":
        ze(t, "class", u);
        break;
      case "tabIndex":
        ze(t, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ze(t, a, u);
        break;
      case "style":
        Nc(t, u, n);
        break;
      case "data":
        if (l !== "object") {
          ze(t, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (l !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(a);
          break;
        }
        u = De("" + u), t.setAttribute(a, u);
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (l !== "input" && vt(t, l, "name", e.name, e, null), vt(
            t,
            l,
            "formEncType",
            e.formEncType,
            e,
            null
          ), vt(
            t,
            l,
            "formMethod",
            e.formMethod,
            e,
            null
          ), vt(
            t,
            l,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (vt(t, l, "encType", e.encType, e, null), vt(t, l, "method", e.method, e, null), vt(t, l, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          t.removeAttribute(a);
          break;
        }
        u = De("" + u), t.setAttribute(a, u);
        break;
      case "onClick":
        u != null && (t.onclick = pn);
        break;
      case "onScroll":
        u != null && et("scroll", t);
        break;
      case "onScrollEnd":
        u != null && et("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(c(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(c(60));
            t.innerHTML = a;
          }
        }
        break;
      case "multiple":
        t.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        t.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        a = De("" + u), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(a, "" + u) : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0 ? t.setAttribute(a, "") : u !== !1 && u != null && typeof u != "function" && typeof u != "symbol" ? t.setAttribute(a, u) : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? t.setAttribute(a, u) : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? t.removeAttribute(a) : t.setAttribute(a, u);
        break;
      case "popover":
        et("beforetoggle", t), et("toggle", t), Ae(t, "popover", u);
        break;
      case "xlinkActuate":
        Rl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          u
        );
        break;
      case "xlinkArcrole":
        Rl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          u
        );
        break;
      case "xlinkRole":
        Rl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          u
        );
        break;
      case "xlinkShow":
        Rl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          u
        );
        break;
      case "xlinkTitle":
        Rl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          u
        );
        break;
      case "xlinkType":
        Rl(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          u
        );
        break;
      case "xmlBase":
        Rl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          u
        );
        break;
      case "xmlLang":
        Rl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          u
        );
        break;
      case "xmlSpace":
        Rl(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          u
        );
        break;
      case "is":
        Ae(t, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = jh.get(a) || a, Ae(t, a, u));
    }
  }
  function Gf(t, l, a, u, e, n) {
    switch (a) {
      case "style":
        Nc(t, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u))
            throw Error(c(61));
          if (a = u.__html, a != null) {
            if (e.children != null) throw Error(c(60));
            t.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string" ? Za(t, u) : (typeof u == "number" || typeof u == "bigint") && Za(t, "" + u);
        break;
      case "onScroll":
        u != null && et("scroll", t);
        break;
      case "onScrollEnd":
        u != null && et("scrollend", t);
        break;
      case "onClick":
        u != null && (t.onclick = pn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!pc.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), l = a.slice(2, e ? a.length - 7 : void 0), n = t[kt] || null, n = n != null ? n[a] : null, typeof n == "function" && t.removeEventListener(l, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(l, u, e);
              break t;
            }
            a in t ? t[a] = u : u === !0 ? t.setAttribute(a, "") : Ae(t, a, u);
          }
    }
  }
  function Zt(t, l, a) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        et("error", t), et("load", t);
        var u = !1, e = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, l));
                default:
                  vt(t, l, n, i, a, null);
              }
          }
        e && vt(t, l, "srcSet", a.srcSet, a, null), u && vt(t, l, "src", a.src, a, null);
        return;
      case "input":
        et("invalid", t);
        var f = n = i = e = null, s = null, m = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var p = a[u];
            if (p != null)
              switch (u) {
                case "name":
                  e = p;
                  break;
                case "type":
                  i = p;
                  break;
                case "checked":
                  s = p;
                  break;
                case "defaultChecked":
                  m = p;
                  break;
                case "value":
                  n = p;
                  break;
                case "defaultValue":
                  f = p;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (p != null)
                    throw Error(c(137, l));
                  break;
                default:
                  vt(t, l, u, p, a, null);
              }
          }
        Dc(
          t,
          n,
          f,
          s,
          m,
          i,
          e,
          !1
        ), Oe(t);
        return;
      case "select":
        et("invalid", t), u = i = n = null;
        for (e in a)
          if (a.hasOwnProperty(e) && (f = a[e], f != null))
            switch (e) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                u = f;
              default:
                vt(t, l, e, f, a, null);
            }
        l = n, a = i, t.multiple = !!u, l != null ? ja(t, !!u, l, !1) : a != null && ja(t, !!u, a, !0);
        return;
      case "textarea":
        et("invalid", t), n = e = u = null;
        for (i in a)
          if (a.hasOwnProperty(i) && (f = a[i], f != null))
            switch (i) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(c(91));
                break;
              default:
                vt(t, l, i, f, a, null);
            }
        Uc(t, u, e, n), Oe(t);
        return;
      case "option":
        for (s in a)
          if (a.hasOwnProperty(s) && (u = a[s], u != null))
            switch (s) {
              case "selected":
                t.selected = u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                vt(t, l, s, u, a, null);
            }
        return;
      case "dialog":
        et("beforetoggle", t), et("toggle", t), et("cancel", t), et("close", t);
        break;
      case "iframe":
      case "object":
        et("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ie.length; u++)
          et(ie[u], t);
        break;
      case "image":
        et("error", t), et("load", t);
        break;
      case "details":
        et("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        et("error", t), et("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in a)
          if (a.hasOwnProperty(m) && (u = a[m], u != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, l));
              default:
                vt(t, l, m, u, a, null);
            }
        return;
      default:
        if (In(l)) {
          for (p in a)
            a.hasOwnProperty(p) && (u = a[p], u !== void 0 && Gf(
              t,
              l,
              p,
              u,
              a,
              void 0
            ));
          return;
        }
    }
    for (f in a)
      a.hasOwnProperty(f) && (u = a[f], u != null && vt(t, l, f, u, a, null));
  }
  function hv(t, l, a, u) {
    switch (l) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, i = null, f = null, s = null, m = null, p = null;
        for (S in a) {
          var A = a[S];
          if (a.hasOwnProperty(S) && A != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = A;
              default:
                u.hasOwnProperty(S) || vt(t, l, S, null, u, A);
            }
        }
        for (var g in u) {
          var S = u[g];
          if (A = a[g], u.hasOwnProperty(g) && (S != null || A != null))
            switch (g) {
              case "type":
                n = S;
                break;
              case "name":
                e = S;
                break;
              case "checked":
                m = S;
                break;
              case "defaultChecked":
                p = S;
                break;
              case "value":
                i = S;
                break;
              case "defaultValue":
                f = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(c(137, l));
                break;
              default:
                S !== A && vt(
                  t,
                  l,
                  g,
                  S,
                  u,
                  A
                );
            }
        }
        Fn(
          t,
          i,
          f,
          s,
          m,
          p,
          n,
          e
        );
        return;
      case "select":
        S = i = f = g = null;
        for (n in a)
          if (s = a[n], a.hasOwnProperty(n) && s != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                S = s;
              default:
                u.hasOwnProperty(n) || vt(
                  t,
                  l,
                  n,
                  null,
                  u,
                  s
                );
            }
        for (e in u)
          if (n = u[e], s = a[e], u.hasOwnProperty(e) && (n != null || s != null))
            switch (e) {
              case "value":
                g = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== s && vt(
                  t,
                  l,
                  e,
                  n,
                  u,
                  s
                );
            }
        l = f, a = i, u = S, g != null ? ja(t, !!a, g, !1) : !!u != !!a && (l != null ? ja(t, !!a, l, !0) : ja(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        S = g = null;
        for (f in a)
          if (e = a[f], a.hasOwnProperty(f) && e != null && !u.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                vt(t, l, f, null, u, e);
            }
        for (i in u)
          if (e = u[i], n = a[i], u.hasOwnProperty(i) && (e != null || n != null))
            switch (i) {
              case "value":
                g = e;
                break;
              case "defaultValue":
                S = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(c(91));
                break;
              default:
                e !== n && vt(t, l, i, e, u, n);
            }
        Rc(t, g, S);
        return;
      case "option":
        for (var L in a)
          if (g = a[L], a.hasOwnProperty(L) && g != null && !u.hasOwnProperty(L))
            switch (L) {
              case "selected":
                t.selected = !1;
                break;
              default:
                vt(
                  t,
                  l,
                  L,
                  null,
                  u,
                  g
                );
            }
        for (s in u)
          if (g = u[s], S = a[s], u.hasOwnProperty(s) && g !== S && (g != null || S != null))
            switch (s) {
              case "selected":
                t.selected = g && typeof g != "function" && typeof g != "symbol";
                break;
              default:
                vt(
                  t,
                  l,
                  s,
                  g,
                  u,
                  S
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Z in a)
          g = a[Z], a.hasOwnProperty(Z) && g != null && !u.hasOwnProperty(Z) && vt(t, l, Z, null, u, g);
        for (m in u)
          if (g = u[m], S = a[m], u.hasOwnProperty(m) && g !== S && (g != null || S != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null)
                  throw Error(c(137, l));
                break;
              default:
                vt(
                  t,
                  l,
                  m,
                  g,
                  u,
                  S
                );
            }
        return;
      default:
        if (In(l)) {
          for (var yt in a)
            g = a[yt], a.hasOwnProperty(yt) && g !== void 0 && !u.hasOwnProperty(yt) && Gf(
              t,
              l,
              yt,
              void 0,
              u,
              g
            );
          for (p in u)
            g = u[p], S = a[p], !u.hasOwnProperty(p) || g === S || g === void 0 && S === void 0 || Gf(
              t,
              l,
              p,
              g,
              u,
              S
            );
          return;
        }
    }
    for (var h in a)
      g = a[h], a.hasOwnProperty(h) && g != null && !u.hasOwnProperty(h) && vt(t, l, h, null, u, g);
    for (A in u)
      g = u[A], S = a[A], !u.hasOwnProperty(A) || g === S || g == null && S == null || vt(t, l, A, g, u, S);
  }
  var Xf = null, Qf = null;
  function Tn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Nr(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Hr(t, l) {
    if (t === 0)
      switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && l === "foreignObject" ? 0 : t;
  }
  function jf(t, l) {
    return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
  }
  var Zf = null;
  function dv() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Zf ? !1 : (Zf = t, !0) : (Zf = null, !1);
  }
  var qr = typeof setTimeout == "function" ? setTimeout : void 0, vv = typeof clearTimeout == "function" ? clearTimeout : void 0, Br = typeof Promise == "function" ? Promise : void 0, yv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Br < "u" ? function(t) {
    return Br.resolve(null).then(t).catch(mv);
  } : qr;
  function mv(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function sa(t) {
    return t === "head";
  }
  function Yr(t, l) {
    var a = l, u = 0, e = 0;
    do {
      var n = a.nextSibling;
      if (t.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$") {
          if (0 < u && 8 > u) {
            a = u;
            var i = t.ownerDocument;
            if (a & 1 && ce(i.documentElement), a & 2 && ce(i.body), a & 4)
              for (a = i.head, ce(a), i = a.firstChild; i; ) {
                var f = i.nextSibling, s = i.nodeName;
                i[Eu] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && i.rel.toLowerCase() === "stylesheet" || a.removeChild(i), i = f;
              }
          }
          if (e === 0) {
            t.removeChild(n), me(l);
            return;
          }
          e--;
        } else
          a === "$" || a === "$?" || a === "$!" ? e++ : u = a.charCodeAt(0) - 48;
      else u = 0;
      a = n;
    } while (a);
    me(l);
  }
  function Vf(t) {
    var l = t.firstChild;
    for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
      var a = l;
      switch (l = l.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Vf(a), wn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function gv(t, l, a, u) {
    for (; t.nodeType === 1; ) {
      var e = a;
      if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
        if (!u && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (u) {
        if (!t[Eu])
          switch (l) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (n = t.getAttribute("rel"), n === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || t.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || t.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || t.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (n = t.getAttribute("src"), (n !== (e.src == null ? null : e.src) || t.getAttribute("type") !== (e.type == null ? null : e.type) || t.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (l === "input" && t.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && t.getAttribute("name") === n)
          return t;
      } else return t;
      if (t = pl(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Sv(t, l, a) {
    if (l === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = pl(t.nextSibling), t === null)) return null;
    return t;
  }
  function Lf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete";
  }
  function bv(t, l) {
    var a = t.ownerDocument;
    if (t.data !== "$?" || a.readyState === "complete")
      l();
    else {
      var u = function() {
        l(), a.removeEventListener("DOMContentLoaded", u);
      };
      a.addEventListener("DOMContentLoaded", u), t._reactRetry = u;
    }
  }
  function pl(t) {
    for (; t != null; t = t.nextSibling) {
      var l = t.nodeType;
      if (l === 1 || l === 3) break;
      if (l === 8) {
        if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "F!" || l === "F")
          break;
        if (l === "/$") return null;
      }
    }
    return t;
  }
  var Kf = null;
  function Cr(t) {
    t = t.previousSibling;
    for (var l = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (l === 0) return t;
          l--;
        } else a === "/$" && l++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function Gr(t, l, a) {
    switch (l = Tn(a), t) {
      case "html":
        if (t = l.documentElement, !t) throw Error(c(452));
        return t;
      case "head":
        if (t = l.head, !t) throw Error(c(453));
        return t;
      case "body":
        if (t = l.body, !t) throw Error(c(454));
        return t;
      default:
        throw Error(c(451));
    }
  }
  function ce(t) {
    for (var l = t.attributes; l.length; )
      t.removeAttributeNode(l[0]);
    wn(t);
  }
  var Sl = /* @__PURE__ */ new Map(), Xr = /* @__PURE__ */ new Set();
  function En(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Vl = R.d;
  R.d = {
    f: _v,
    r: pv,
    D: Tv,
    C: Ev,
    L: Av,
    m: zv,
    X: Mv,
    S: Ov,
    M: Dv
  };
  function _v() {
    var t = Vl.f(), l = vn();
    return t || l;
  }
  function pv(t) {
    var l = Ca(t);
    l !== null && l.tag === 5 && l.type === "form" ? eo(l) : Vl.r(t);
  }
  var gu = typeof document > "u" ? null : document;
  function Qr(t, l, a) {
    var u = gu;
    if (u && typeof l == "string" && l) {
      var e = rl(l);
      e = 'link[rel="' + t + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), Xr.has(e) || (Xr.add(e), t = { rel: t, crossOrigin: a, href: l }, u.querySelector(e) === null && (l = u.createElement("link"), Zt(l, "link", t), Bt(l), u.head.appendChild(l)));
    }
  }
  function Tv(t) {
    Vl.D(t), Qr("dns-prefetch", t, null);
  }
  function Ev(t, l) {
    Vl.C(t, l), Qr("preconnect", t, l);
  }
  function Av(t, l, a) {
    Vl.L(t, l, a);
    var u = gu;
    if (u && t && l) {
      var e = 'link[rel="preload"][as="' + rl(l) + '"]';
      l === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + rl(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + rl(
        a.imageSizes
      ) + '"]')) : e += '[href="' + rl(t) + '"]';
      var n = e;
      switch (l) {
        case "style":
          n = Su(t);
          break;
        case "script":
          n = bu(t);
      }
      Sl.has(n) || (t = M(
        {
          rel: "preload",
          href: l === "image" && a && a.imageSrcSet ? void 0 : t,
          as: l
        },
        a
      ), Sl.set(n, t), u.querySelector(e) !== null || l === "style" && u.querySelector(se(n)) || l === "script" && u.querySelector(oe(n)) || (l = u.createElement("link"), Zt(l, "link", t), Bt(l), u.head.appendChild(l)));
    }
  }
  function zv(t, l) {
    Vl.m(t, l);
    var a = gu;
    if (a && t) {
      var u = l && typeof l.as == "string" ? l.as : "script", e = 'link[rel="modulepreload"][as="' + rl(u) + '"][href="' + rl(t) + '"]', n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = bu(t);
      }
      if (!Sl.has(n) && (t = M({ rel: "modulepreload", href: t }, l), Sl.set(n, t), a.querySelector(e) === null)) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(oe(n)))
              return;
        }
        u = a.createElement("link"), Zt(u, "link", t), Bt(u), a.head.appendChild(u);
      }
    }
  }
  function Ov(t, l, a) {
    Vl.S(t, l, a);
    var u = gu;
    if (u && t) {
      var e = Ga(u).hoistableStyles, n = Su(t);
      l = l || "default";
      var i = e.get(n);
      if (!i) {
        var f = { loading: 0, preload: null };
        if (i = u.querySelector(
          se(n)
        ))
          f.loading = 5;
        else {
          t = M(
            { rel: "stylesheet", href: t, "data-precedence": l },
            a
          ), (a = Sl.get(n)) && Jf(t, a);
          var s = i = u.createElement("link");
          Bt(s), Zt(s, "link", t), s._p = new Promise(function(m, p) {
            s.onload = m, s.onerror = p;
          }), s.addEventListener("load", function() {
            f.loading |= 1;
          }), s.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, An(i, l, u);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: f
        }, e.set(n, i);
      }
    }
  }
  function Mv(t, l) {
    Vl.X(t, l);
    var a = gu;
    if (a && t) {
      var u = Ga(a).hoistableScripts, e = bu(t), n = u.get(e);
      n || (n = a.querySelector(oe(e)), n || (t = M({ src: t, async: !0 }, l), (l = Sl.get(e)) && wf(t, l), n = a.createElement("script"), Bt(n), Zt(n, "link", t), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function Dv(t, l) {
    Vl.M(t, l);
    var a = gu;
    if (a && t) {
      var u = Ga(a).hoistableScripts, e = bu(t), n = u.get(e);
      n || (n = a.querySelector(oe(e)), n || (t = M({ src: t, async: !0, type: "module" }, l), (l = Sl.get(e)) && wf(t, l), n = a.createElement("script"), Bt(n), Zt(n, "link", t), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, u.set(e, n));
    }
  }
  function jr(t, l, a, u) {
    var e = (e = K.current) ? En(e) : null;
    if (!e) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (l = Su(a.href), a = Ga(
          e
        ).hoistableStyles, u = a.get(l), u || (u = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(l, u)), u) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = Su(a.href);
          var n = Ga(
            e
          ).hoistableStyles, i = n.get(t);
          if (i || (e = e.ownerDocument || e, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(t, i), (n = e.querySelector(
            se(t)
          )) && !n._p && (i.instance = n, i.state.loading = 5), Sl.has(t) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Sl.set(t, a), n || Rv(
            e,
            t,
            a,
            i.state
          ))), l && u === null)
            throw Error(c(528, ""));
          return i;
        }
        if (l && u !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return l = a.async, a = a.src, typeof a == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = bu(a), a = Ga(
          e
        ).hoistableScripts, u = a.get(l), u || (u = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(l, u)), u) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, t));
    }
  }
  function Su(t) {
    return 'href="' + rl(t) + '"';
  }
  function se(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Zr(t) {
    return M({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Rv(t, l, a, u) {
    t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? u.loading = 1 : (l = t.createElement("link"), u.preload = l, l.addEventListener("load", function() {
      return u.loading |= 1;
    }), l.addEventListener("error", function() {
      return u.loading |= 2;
    }), Zt(l, "link", a), Bt(l), t.head.appendChild(l));
  }
  function bu(t) {
    return '[src="' + rl(t) + '"]';
  }
  function oe(t) {
    return "script[async]" + t;
  }
  function Vr(t, l, a) {
    if (l.count++, l.instance === null)
      switch (l.type) {
        case "style":
          var u = t.querySelector(
            'style[data-href~="' + rl(a.href) + '"]'
          );
          if (u)
            return l.instance = u, Bt(u), u;
          var e = M({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (t.ownerDocument || t).createElement(
            "style"
          ), Bt(u), Zt(u, "style", e), An(u, a.precedence, t), l.instance = u;
        case "stylesheet":
          e = Su(a.href);
          var n = t.querySelector(
            se(e)
          );
          if (n)
            return l.state.loading |= 4, l.instance = n, Bt(n), n;
          u = Zr(a), (e = Sl.get(e)) && Jf(u, e), n = (t.ownerDocument || t).createElement("link"), Bt(n);
          var i = n;
          return i._p = new Promise(function(f, s) {
            i.onload = f, i.onerror = s;
          }), Zt(n, "link", u), l.state.loading |= 4, An(n, a.precedence, t), l.instance = n;
        case "script":
          return n = bu(a.src), (e = t.querySelector(
            oe(n)
          )) ? (l.instance = e, Bt(e), e) : (u = a, (e = Sl.get(n)) && (u = M({}, a), wf(u, e)), t = t.ownerDocument || t, e = t.createElement("script"), Bt(e), Zt(e, "link", u), t.head.appendChild(e), l.instance = e);
        case "void":
          return null;
        default:
          throw Error(c(443, l.type));
      }
    else
      l.type === "stylesheet" && (l.state.loading & 4) === 0 && (u = l.instance, l.state.loading |= 4, An(u, a.precedence, t));
    return l.instance;
  }
  function An(t, l, a) {
    for (var u = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = u.length ? u[u.length - 1] : null, n = e, i = 0; i < u.length; i++) {
      var f = u[i];
      if (f.dataset.precedence === l) n = f;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : (l = a.nodeType === 9 ? a.head : a, l.insertBefore(t, l.firstChild));
  }
  function Jf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
  }
  function wf(t, l) {
    t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
  }
  var zn = null;
  function Lr(t, l, a) {
    if (zn === null) {
      var u = /* @__PURE__ */ new Map(), e = zn = /* @__PURE__ */ new Map();
      e.set(a, u);
    } else
      e = zn, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
    if (u.has(t)) return u;
    for (u.set(t, null), a = a.getElementsByTagName(t), e = 0; e < a.length; e++) {
      var n = a[e];
      if (!(n[Eu] || n[Vt] || t === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = n.getAttribute(l) || "";
        i = t + i;
        var f = u.get(i);
        f ? f.push(n) : u.set(i, [n]);
      }
    }
    return u;
  }
  function Kr(t, l, a) {
    t = t.ownerDocument || t, t.head.insertBefore(
      a,
      l === "title" ? t.querySelector("head > title") : null
    );
  }
  function Uv(t, l, a) {
    if (a === 1 || l.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "")
          break;
        return !0;
      case "link":
        if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError)
          break;
        switch (l.rel) {
          case "stylesheet":
            return t = l.disabled, typeof l.precedence == "string" && t == null;
          default:
            return !0;
        }
      case "script":
        if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string")
          return !0;
    }
    return !1;
  }
  function Jr(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  var re = null;
  function xv() {
  }
  function Nv(t, l, a) {
    if (re === null) throw Error(c(475));
    var u = re;
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var e = Su(a.href), n = t.querySelector(
          se(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (u.count++, u = On.bind(u), t.then(u, u)), l.state.loading |= 4, l.instance = n, Bt(n);
          return;
        }
        n = t.ownerDocument || t, a = Zr(a), (e = Sl.get(e)) && Jf(a, e), n = n.createElement("link"), Bt(n);
        var i = n;
        i._p = new Promise(function(f, s) {
          i.onload = f, i.onerror = s;
        }), Zt(n, "link", a), l.instance = n;
      }
      u.stylesheets === null && (u.stylesheets = /* @__PURE__ */ new Map()), u.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (u.count++, l = On.bind(u), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  function Hv() {
    if (re === null) throw Error(c(475));
    var t = re;
    return t.stylesheets && t.count === 0 && Wf(t, t.stylesheets), 0 < t.count ? function(l) {
      var a = setTimeout(function() {
        if (t.stylesheets && Wf(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4);
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function On() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Wf(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var Mn = null;
  function Wf(t, l) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Mn = /* @__PURE__ */ new Map(), l.forEach(qv, t), Mn = null, On.call(t));
  }
  function qv(t, l) {
    if (!(l.state.loading & 4)) {
      var a = Mn.get(t);
      if (a) var u = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Mn.set(t, a);
        for (var e = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var i = e[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (a.set(i.dataset.precedence, i), u = i);
        }
        u && a.set(null, u);
      }
      e = l.instance, i = e.getAttribute("data-precedence"), n = a.get(i) || u, n === u && a.set(null, e), a.set(i, e), this.count++, u = On.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(e, t.firstChild)), l.state.loading |= 4;
    }
  }
  var he = {
    $$typeof: bt,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };
  function Bv(t, l, a, u, e, n, i, f) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Vn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vn(0), this.hiddenUpdates = Vn(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function wr(t, l, a, u, e, n, i, f, s, m, p, A) {
    return t = new Bv(
      t,
      l,
      a,
      i,
      f,
      s,
      m,
      A
    ), l = 1, n === !0 && (l |= 24), n = el(3, null, null, l), t.current = n, n.stateNode = t, l = Di(), l.refCount++, t.pooledCache = l, l.refCount++, n.memoizedState = {
      element: u,
      isDehydrated: a,
      cache: l
    }, Ni(n), t;
  }
  function Wr(t) {
    return t ? (t = $a, t) : $a;
  }
  function kr(t, l, a, u, e, n) {
    e = Wr(e), u.context === null ? u.context = e : u.pendingContext = e, u = $l(l), u.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = Fl(t, u, l), a !== null && (sl(a, t, l), Zu(a, t, l));
  }
  function $r(t, l) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < l ? a : l;
    }
  }
  function kf(t, l) {
    $r(t, l), (t = t.alternate) && $r(t, l);
  }
  function Fr(t) {
    if (t.tag === 13) {
      var l = ka(t, 67108864);
      l !== null && sl(l, t, 67108864), kf(t, 67108864);
    }
  }
  var Dn = !0;
  function Yv(t, l, a, u) {
    var e = _.T;
    _.T = null;
    var n = R.p;
    try {
      R.p = 2, $f(t, l, a, u);
    } finally {
      R.p = n, _.T = e;
    }
  }
  function Cv(t, l, a, u) {
    var e = _.T;
    _.T = null;
    var n = R.p;
    try {
      R.p = 8, $f(t, l, a, u);
    } finally {
      R.p = n, _.T = e;
    }
  }
  function $f(t, l, a, u) {
    if (Dn) {
      var e = Ff(u);
      if (e === null)
        Cf(
          t,
          l,
          u,
          Rn,
          a
        ), Ir(t, u);
      else if (Xv(
        e,
        t,
        l,
        a,
        u
      ))
        u.stopPropagation();
      else if (Ir(t, u), l & 4 && -1 < Gv.indexOf(t)) {
        for (; e !== null; ) {
          var n = Ca(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var i = ya(n.pendingLanes);
                  if (i !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var s = 1 << 31 - al(i);
                      f.entanglements[1] |= s, i &= ~s;
                    }
                    Dl(n), (rt & 6) === 0 && (hn = El() + 500, ne(0));
                  }
                }
                break;
              case 13:
                f = ka(n, 2), f !== null && sl(f, n, 2), vn(), kf(n, 2);
            }
          if (n = Ff(u), n === null && Cf(
            t,
            l,
            u,
            Rn,
            a
          ), n === e) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else
        Cf(
          t,
          l,
          u,
          null,
          a
        );
    }
  }
  function Ff(t) {
    return t = li(t), Pf(t);
  }
  var Rn = null;
  function Pf(t) {
    if (Rn = null, t = Ya(t), t !== null) {
      var l = U(t);
      if (l === null) t = null;
      else {
        var a = l.tag;
        if (a === 13) {
          if (t = x(l), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (l.stateNode.current.memoizedState.isDehydrated)
            return l.tag === 3 ? l.stateNode.containerInfo : null;
          t = null;
        } else l !== t && (t = null);
      }
    }
    return Rn = t, null;
  }
  function Pr(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Eh()) {
          case rc:
            return 2;
          case hc:
            return 8;
          case _e:
          case Ah:
            return 32;
          case dc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var If = !1, oa = null, ra = null, ha = null, de = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), da = [], Gv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ir(t, l) {
    switch (t) {
      case "focusin":
      case "focusout":
        oa = null;
        break;
      case "dragenter":
      case "dragleave":
        ra = null;
        break;
      case "mouseover":
      case "mouseout":
        ha = null;
        break;
      case "pointerover":
      case "pointerout":
        de.delete(l.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ve.delete(l.pointerId);
    }
  }
  function ye(t, l, a, u, e, n) {
    return t === null || t.nativeEvent !== n ? (t = {
      blockedOn: l,
      domEventName: a,
      eventSystemFlags: u,
      nativeEvent: n,
      targetContainers: [e]
    }, l !== null && (l = Ca(l), l !== null && Fr(l)), t) : (t.eventSystemFlags |= u, l = t.targetContainers, e !== null && l.indexOf(e) === -1 && l.push(e), t);
  }
  function Xv(t, l, a, u, e) {
    switch (l) {
      case "focusin":
        return oa = ye(
          oa,
          t,
          l,
          a,
          u,
          e
        ), !0;
      case "dragenter":
        return ra = ye(
          ra,
          t,
          l,
          a,
          u,
          e
        ), !0;
      case "mouseover":
        return ha = ye(
          ha,
          t,
          l,
          a,
          u,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return de.set(
          n,
          ye(
            de.get(n) || null,
            t,
            l,
            a,
            u,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ve.set(
          n,
          ye(
            ve.get(n) || null,
            t,
            l,
            a,
            u,
            e
          )
        ), !0;
    }
    return !1;
  }
  function th(t) {
    var l = Ya(t.target);
    if (l !== null) {
      var a = U(l);
      if (a !== null) {
        if (l = a.tag, l === 13) {
          if (l = x(a), l !== null) {
            t.blockedOn = l, Nh(t.priority, function() {
              if (a.tag === 13) {
                var u = cl();
                u = Ln(u);
                var e = ka(a, u);
                e !== null && sl(e, a, u), kf(a, u);
              }
            });
            return;
          }
        } else if (l === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Un(t) {
    if (t.blockedOn !== null) return !1;
    for (var l = t.targetContainers; 0 < l.length; ) {
      var a = Ff(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var u = new a.constructor(
          a.type,
          a
        );
        ti = u, a.target.dispatchEvent(u), ti = null;
      } else
        return l = Ca(a), l !== null && Fr(l), t.blockedOn = a, !1;
      l.shift();
    }
    return !0;
  }
  function lh(t, l, a) {
    Un(t) && a.delete(l);
  }
  function Qv() {
    If = !1, oa !== null && Un(oa) && (oa = null), ra !== null && Un(ra) && (ra = null), ha !== null && Un(ha) && (ha = null), de.forEach(lh), ve.forEach(lh);
  }
  function xn(t, l) {
    t.blockedOn === l && (t.blockedOn = null, If || (If = !0, d.unstable_scheduleCallback(
      d.unstable_NormalPriority,
      Qv
    )));
  }
  var Nn = null;
  function ah(t) {
    Nn !== t && (Nn = t, d.unstable_scheduleCallback(
      d.unstable_NormalPriority,
      function() {
        Nn === t && (Nn = null);
        for (var l = 0; l < t.length; l += 3) {
          var a = t[l], u = t[l + 1], e = t[l + 2];
          if (typeof u != "function") {
            if (Pf(u || a) === null)
              continue;
            break;
          }
          var n = Ca(a);
          n !== null && (t.splice(l, 3), l -= 3, Fi(
            n,
            {
              pending: !0,
              data: e,
              method: a.method,
              action: u
            },
            u,
            e
          ));
        }
      }
    ));
  }
  function me(t) {
    function l(s) {
      return xn(s, t);
    }
    oa !== null && xn(oa, t), ra !== null && xn(ra, t), ha !== null && xn(ha, t), de.forEach(l), ve.forEach(l);
    for (var a = 0; a < da.length; a++) {
      var u = da[a];
      u.blockedOn === t && (u.blockedOn = null);
    }
    for (; 0 < da.length && (a = da[0], a.blockedOn === null); )
      th(a), a.blockedOn === null && da.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], i = e[kt] || null;
        if (typeof n == "function")
          i || ah(a);
        else if (i) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, i = n[kt] || null)
              f = i.formAction;
            else if (Pf(e) !== null) continue;
          } else f = i.action;
          typeof f == "function" ? a[u + 1] = f : (a.splice(u, 3), u -= 3), ah(a);
        }
      }
  }
  function tc(t) {
    this._internalRoot = t;
  }
  Hn.prototype.render = tc.prototype.render = function(t) {
    var l = this._internalRoot;
    if (l === null) throw Error(c(409));
    var a = l.current, u = cl();
    kr(a, u, t, l, null, null);
  }, Hn.prototype.unmount = tc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var l = t.containerInfo;
      kr(t.current, 2, null, t, null, null), vn(), l[Ba] = null;
    }
  };
  function Hn(t) {
    this._internalRoot = t;
  }
  Hn.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var l = Sc();
      t = { blockedOn: null, target: t, priority: l };
      for (var a = 0; a < da.length && l !== 0 && l < da[a].priority; a++) ;
      da.splice(a, 0, t), a === 0 && th(t);
    }
  };
  var uh = E.version;
  if (uh !== "19.1.1")
    throw Error(
      c(
        527,
        uh,
        "19.1.1"
      )
    );
  R.findDOMNode = function(t) {
    var l = t._reactInternals;
    if (l === void 0)
      throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = D(l), t = t !== null ? y(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var jv = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qn.isDisabled && qn.supportsFiber)
      try {
        _u = qn.inject(
          jv
        ), ll = qn;
      } catch {
      }
  }
  return ge.createRoot = function(t, l) {
    if (!z(t)) throw Error(c(299));
    var a = !1, u = "", e = bo, n = _o, i = po, f = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (e = l.onUncaughtError), l.onCaughtError !== void 0 && (n = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (f = l.unstable_transitionCallbacks)), l = wr(
      t,
      1,
      !1,
      null,
      null,
      a,
      u,
      e,
      n,
      i,
      f,
      null
    ), t[Ba] = l.current, Yf(t), new tc(l);
  }, ge.hydrateRoot = function(t, l, a) {
    if (!z(t)) throw Error(c(299));
    var u = !1, e = "", n = bo, i = _o, f = po, s = null, m = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (i = a.onCaughtError), a.onRecoverableError !== void 0 && (f = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (s = a.unstable_transitionCallbacks), a.formState !== void 0 && (m = a.formState)), l = wr(
      t,
      1,
      !0,
      l,
      a ?? null,
      u,
      e,
      n,
      i,
      f,
      s,
      m
    ), l.context = Wr(null), a = l.current, u = cl(), u = Ln(u), e = $l(u), e.callback = null, Fl(a, e, u), a = u, l.current.lanes = a, Tu(l, a), Dl(l), t[Ba] = l.current, Yf(t), new Hn(l);
  }, ge.version = "19.1.1", ge;
}
var rh;
function Fv() {
  if (rh) return ac.exports;
  rh = 1;
  function d() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d);
      } catch (E) {
        console.error(E);
      }
  }
  return d(), ac.exports = $v(), ac.exports;
}
var Pv = Fv(), ic = { exports: {} }, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hh;
function Iv() {
  if (hh) return Se;
  hh = 1;
  var d = Symbol.for("react.transitional.element"), E = Symbol.for("react.fragment");
  function b(c, z, U) {
    var x = null;
    if (U !== void 0 && (x = "" + U), z.key !== void 0 && (x = "" + z.key), "key" in z) {
      U = {};
      for (var Y in z)
        Y !== "key" && (U[Y] = z[Y]);
    } else U = z;
    return z = U.ref, {
      $$typeof: d,
      type: c,
      key: x,
      ref: z !== void 0 ? z : null,
      props: U
    };
  }
  return Se.Fragment = E, Se.jsx = b, Se.jsxs = b, Se;
}
var dh;
function t0() {
  return dh || (dh = 1, ic.exports = Iv()), ic.exports;
}
var Ha = t0(), Yn = { exports: {} }, fc = { exports: {} }, cc, vh;
function l0() {
  if (vh) return cc;
  vh = 1;
  var d = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return cc = d, cc;
}
var sc, yh;
function a0() {
  if (yh) return sc;
  yh = 1;
  var d = /* @__PURE__ */ l0();
  function E() {
  }
  function b() {
  }
  return b.resetWarningCache = E, sc = function() {
    function c(x, Y, D, y, M, G) {
      if (G !== d) {
        var B = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw B.name = "Invariant Violation", B;
      }
    }
    c.isRequired = c;
    function z() {
      return c;
    }
    var U = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: z,
      element: c,
      elementType: c,
      instanceOf: z,
      node: c,
      objectOf: z,
      oneOf: z,
      oneOfType: z,
      shape: z,
      exact: z,
      checkPropTypes: b,
      resetWarningCache: E
    };
    return U.PropTypes = U, U;
  }, sc;
}
var mh;
function u0() {
  return mh || (mh = 1, fc.exports = /* @__PURE__ */ a0()()), fc.exports;
}
/*!
 * Signature Pad v2.3.2
 * https://github.com/szimek/signature_pad
 *
 * Copyright 2017 Szymon Nowak
 * Released under the MIT license
 *
 * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
 * http://corner.squareup.com/2012/07/smoother-signatures.html
 *
 * Implementation of interpolation using cubic Bézier curves is taken from:
 * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
 *
 * Algorithm for approximated length of a Bézier curve is taken from:
 * http://www.lemoda.net/maths/bezier-length/index.html
 *
 */
function qa(d, E, b) {
  this.x = d, this.y = E, this.time = b || (/* @__PURE__ */ new Date()).getTime();
}
qa.prototype.velocityFrom = function(d) {
  return this.time !== d.time ? this.distanceTo(d) / (this.time - d.time) : 1;
};
qa.prototype.distanceTo = function(d) {
  return Math.sqrt(Math.pow(this.x - d.x, 2) + Math.pow(this.y - d.y, 2));
};
qa.prototype.equals = function(d) {
  return this.x === d.x && this.y === d.y && this.time === d.time;
};
function oc(d, E, b, c) {
  this.startPoint = d, this.control1 = E, this.control2 = b, this.endPoint = c;
}
oc.prototype.length = function() {
  for (var d = 10, E = 0, b = void 0, c = void 0, z = 0; z <= d; z += 1) {
    var U = z / d, x = this._point(U, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x), Y = this._point(U, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
    if (z > 0) {
      var D = x - b, y = Y - c;
      E += Math.sqrt(D * D + y * y);
    }
    b = x, c = Y;
  }
  return E;
};
oc.prototype._point = function(d, E, b, c, z) {
  return E * (1 - d) * (1 - d) * (1 - d) + 3 * b * (1 - d) * (1 - d) * d + 3 * c * (1 - d) * d * d + z * d * d * d;
};
function e0(d, E, b) {
  var c, z, U, x = null, Y = 0;
  b || (b = {});
  var D = function() {
    Y = b.leading === !1 ? 0 : Date.now(), x = null, U = d.apply(c, z), x || (c = z = null);
  };
  return function() {
    var y = Date.now();
    !Y && b.leading === !1 && (Y = y);
    var M = E - (y - Y);
    return c = this, z = arguments, M <= 0 || M > E ? (x && (clearTimeout(x), x = null), Y = y, U = d.apply(c, z), x || (c = z = null)) : !x && b.trailing !== !1 && (x = setTimeout(D, M)), U;
  };
}
function St(d, E) {
  var b = this, c = E || {};
  this.velocityFilterWeight = c.velocityFilterWeight || 0.7, this.minWidth = c.minWidth || 0.5, this.maxWidth = c.maxWidth || 2.5, this.throttle = "throttle" in c ? c.throttle : 16, this.minDistance = "minDistance" in c ? c.minDistance : 5, this.throttle ? this._strokeMoveUpdate = e0(St.prototype._strokeUpdate, this.throttle) : this._strokeMoveUpdate = St.prototype._strokeUpdate, this.dotSize = c.dotSize || function() {
    return (this.minWidth + this.maxWidth) / 2;
  }, this.penColor = c.penColor || "black", this.backgroundColor = c.backgroundColor || "rgba(0,0,0,0)", this.onBegin = c.onBegin, this.onEnd = c.onEnd, this._canvas = d, this._ctx = d.getContext("2d"), this.clear(), this._handleMouseDown = function(z) {
    z.which === 1 && (b._mouseButtonDown = !0, b._strokeBegin(z));
  }, this._handleMouseMove = function(z) {
    b._mouseButtonDown && b._strokeMoveUpdate(z);
  }, this._handleMouseUp = function(z) {
    z.which === 1 && b._mouseButtonDown && (b._mouseButtonDown = !1, b._strokeEnd(z));
  }, this._handleTouchStart = function(z) {
    if (z.targetTouches.length === 1) {
      var U = z.changedTouches[0];
      b._strokeBegin(U);
    }
  }, this._handleTouchMove = function(z) {
    z.preventDefault();
    var U = z.targetTouches[0];
    b._strokeMoveUpdate(U);
  }, this._handleTouchEnd = function(z) {
    var U = z.target === b._canvas;
    U && (z.preventDefault(), b._strokeEnd(z));
  }, this.on();
}
St.prototype.clear = function() {
  var d = this._ctx, E = this._canvas;
  d.fillStyle = this.backgroundColor, d.clearRect(0, 0, E.width, E.height), d.fillRect(0, 0, E.width, E.height), this._data = [], this._reset(), this._isEmpty = !0;
};
St.prototype.fromDataURL = function(d) {
  var E = this, b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = new Image(), z = b.ratio || window.devicePixelRatio || 1, U = b.width || this._canvas.width / z, x = b.height || this._canvas.height / z;
  this._reset(), c.src = d, c.onload = function() {
    E._ctx.drawImage(c, 0, 0, U, x);
  }, this._isEmpty = !1;
};
St.prototype.toDataURL = function(d) {
  var E;
  switch (d) {
    case "image/svg+xml":
      return this._toSVG();
    default:
      for (var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), z = 1; z < b; z++)
        c[z - 1] = arguments[z];
      return (E = this._canvas).toDataURL.apply(E, [d].concat(c));
  }
};
St.prototype.on = function() {
  this._handleMouseEvents(), this._handleTouchEvents();
};
St.prototype.off = function() {
  this._canvas.removeEventListener("mousedown", this._handleMouseDown), this._canvas.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), this._canvas.removeEventListener("touchstart", this._handleTouchStart), this._canvas.removeEventListener("touchmove", this._handleTouchMove), this._canvas.removeEventListener("touchend", this._handleTouchEnd);
};
St.prototype.isEmpty = function() {
  return this._isEmpty;
};
St.prototype._strokeBegin = function(d) {
  this._data.push([]), this._reset(), this._strokeUpdate(d), typeof this.onBegin == "function" && this.onBegin(d);
};
St.prototype._strokeUpdate = function(d) {
  var E = d.clientX, b = d.clientY, c = this._createPoint(E, b), z = this._data[this._data.length - 1], U = z && z[z.length - 1], x = U && c.distanceTo(U) < this.minDistance;
  if (!(U && x)) {
    var Y = this._addPoint(c), D = Y.curve, y = Y.widths;
    D && y && this._drawCurve(D, y.start, y.end), this._data[this._data.length - 1].push({
      x: c.x,
      y: c.y,
      time: c.time,
      color: this.penColor
    });
  }
};
St.prototype._strokeEnd = function(d) {
  var E = this.points.length > 2, b = this.points[0];
  if (!E && b && this._drawDot(b), b) {
    var c = this._data[this._data.length - 1], z = c[c.length - 1];
    b.equals(z) || c.push({
      x: b.x,
      y: b.y,
      time: b.time,
      color: this.penColor
    });
  }
  typeof this.onEnd == "function" && this.onEnd(d);
};
St.prototype._handleMouseEvents = function() {
  this._mouseButtonDown = !1, this._canvas.addEventListener("mousedown", this._handleMouseDown), this._canvas.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
};
St.prototype._handleTouchEvents = function() {
  this._canvas.style.msTouchAction = "none", this._canvas.style.touchAction = "none", this._canvas.addEventListener("touchstart", this._handleTouchStart), this._canvas.addEventListener("touchmove", this._handleTouchMove), this._canvas.addEventListener("touchend", this._handleTouchEnd);
};
St.prototype._reset = function() {
  this.points = [], this._lastVelocity = 0, this._lastWidth = (this.minWidth + this.maxWidth) / 2, this._ctx.fillStyle = this.penColor;
};
St.prototype._createPoint = function(d, E, b) {
  var c = this._canvas.getBoundingClientRect();
  return new qa(d - c.left, E - c.top, b || (/* @__PURE__ */ new Date()).getTime());
};
St.prototype._addPoint = function(d) {
  var E = this.points, b = void 0;
  if (E.push(d), E.length > 2) {
    E.length === 3 && E.unshift(E[0]), b = this._calculateCurveControlPoints(E[0], E[1], E[2]);
    var c = b.c2;
    b = this._calculateCurveControlPoints(E[1], E[2], E[3]);
    var z = b.c1, U = new oc(E[1], c, z, E[2]), x = this._calculateCurveWidths(U);
    return E.shift(), { curve: U, widths: x };
  }
  return {};
};
St.prototype._calculateCurveControlPoints = function(d, E, b) {
  var c = d.x - E.x, z = d.y - E.y, U = E.x - b.x, x = E.y - b.y, Y = { x: (d.x + E.x) / 2, y: (d.y + E.y) / 2 }, D = { x: (E.x + b.x) / 2, y: (E.y + b.y) / 2 }, y = Math.sqrt(c * c + z * z), M = Math.sqrt(U * U + x * x), G = Y.x - D.x, B = Y.y - D.y, $ = M / (y + M), P = { x: D.x + G * $, y: D.y + B * $ }, w = E.x - P.x, J = E.y - P.y;
  return {
    c1: new qa(Y.x + w, Y.y + J),
    c2: new qa(D.x + w, D.y + J)
  };
};
St.prototype._calculateCurveWidths = function(d) {
  var E = d.startPoint, b = d.endPoint, c = { start: null, end: null }, z = this.velocityFilterWeight * b.velocityFrom(E) + (1 - this.velocityFilterWeight) * this._lastVelocity, U = this._strokeWidth(z);
  return c.start = this._lastWidth, c.end = U, this._lastVelocity = z, this._lastWidth = U, c;
};
St.prototype._strokeWidth = function(d) {
  return Math.max(this.maxWidth / (d + 1), this.minWidth);
};
St.prototype._drawPoint = function(d, E, b) {
  var c = this._ctx;
  c.moveTo(d, E), c.arc(d, E, b, 0, 2 * Math.PI, !1), this._isEmpty = !1;
};
St.prototype._drawCurve = function(d, E, b) {
  var c = this._ctx, z = b - E, U = Math.floor(d.length());
  c.beginPath();
  for (var x = 0; x < U; x += 1) {
    var Y = x / U, D = Y * Y, y = D * Y, M = 1 - Y, G = M * M, B = G * M, $ = B * d.startPoint.x;
    $ += 3 * G * Y * d.control1.x, $ += 3 * M * D * d.control2.x, $ += y * d.endPoint.x;
    var P = B * d.startPoint.y;
    P += 3 * G * Y * d.control1.y, P += 3 * M * D * d.control2.y, P += y * d.endPoint.y;
    var w = E + y * z;
    this._drawPoint($, P, w);
  }
  c.closePath(), c.fill();
};
St.prototype._drawDot = function(d) {
  var E = this._ctx, b = typeof this.dotSize == "function" ? this.dotSize() : this.dotSize;
  E.beginPath(), this._drawPoint(d.x, d.y, b), E.closePath(), E.fill();
};
St.prototype._fromData = function(d, E, b) {
  for (var c = 0; c < d.length; c += 1) {
    var z = d[c];
    if (z.length > 1)
      for (var U = 0; U < z.length; U += 1) {
        var x = z[U], Y = new qa(x.x, x.y, x.time), D = x.color;
        if (U === 0)
          this.penColor = D, this._reset(), this._addPoint(Y);
        else if (U !== z.length - 1) {
          var y = this._addPoint(Y), M = y.curve, G = y.widths;
          M && G && E(M, G, D);
        }
      }
    else {
      this._reset();
      var B = z[0];
      b(B);
    }
  }
};
St.prototype._toSVG = function() {
  var d = this, E = this._data, b = this._canvas, c = Math.max(window.devicePixelRatio || 1, 1), z = 0, U = 0, x = b.width / c, Y = b.height / c, D = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  D.setAttributeNS(null, "width", b.width), D.setAttributeNS(null, "height", b.height), this._fromData(E, function(F, pt, bt) {
    var zt = document.createElement("path");
    if (!isNaN(F.control1.x) && !isNaN(F.control1.y) && !isNaN(F.control2.x) && !isNaN(F.control2.y)) {
      var nt = "M " + F.startPoint.x.toFixed(3) + "," + F.startPoint.y.toFixed(3) + " " + ("C " + F.control1.x.toFixed(3) + "," + F.control1.y.toFixed(3) + " ") + (F.control2.x.toFixed(3) + "," + F.control2.y.toFixed(3) + " ") + (F.endPoint.x.toFixed(3) + "," + F.endPoint.y.toFixed(3));
      zt.setAttribute("d", nt), zt.setAttribute("stroke-width", (pt.end * 2.25).toFixed(3)), zt.setAttribute("stroke", bt), zt.setAttribute("fill", "none"), zt.setAttribute("stroke-linecap", "round"), D.appendChild(zt);
    }
  }, function(F) {
    var pt = document.createElement("circle"), bt = typeof d.dotSize == "function" ? d.dotSize() : d.dotSize;
    pt.setAttribute("r", bt), pt.setAttribute("cx", F.x), pt.setAttribute("cy", F.y), pt.setAttribute("fill", F.color), D.appendChild(pt);
  });
  var y = "data:image/svg+xml;base64,", M = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + z + " " + U + " " + x + " " + Y + '"') + (' width="' + x + '"') + (' height="' + Y + '"') + ">", G = D.innerHTML;
  if (G === void 0) {
    var B = document.createElement("dummy"), $ = D.childNodes;
    B.innerHTML = "";
    for (var P = 0; P < $.length; P += 1)
      B.appendChild($[P].cloneNode(!0));
    G = B.innerHTML;
  }
  var w = "</svg>", J = M + G + w;
  return y + btoa(J);
};
St.prototype.fromData = function(d) {
  var E = this;
  this.clear(), this._fromData(d, function(b, c) {
    return E._drawCurve(b, c.start, c.end);
  }, function(b) {
    return E._drawDot(b);
  }), this._data = d;
};
St.prototype.toData = function() {
  return this._data;
};
const n0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: St
}, Symbol.toStringTag, { value: "Module" })), i0 = /* @__PURE__ */ Vv(n0);
var Cn = { exports: {} }, f0 = Cn.exports, gh;
function c0() {
  return gh || (gh = 1, (function(d, E) {
    (function(b, c) {
      d.exports = c();
    })(f0, function() {
      return (function(b) {
        function c(U) {
          if (z[U]) return z[U].exports;
          var x = z[U] = { exports: {}, id: U, loaded: !1 };
          return b[U].call(x.exports, x, x.exports, c), x.loaded = !0, x.exports;
        }
        var z = {};
        return c.m = b, c.c = z, c.p = "", c(0);
      })([function(b, c) {
        function z(y) {
          var M = y.getContext("2d"), G = y.width, B = y.height, $ = M.getImageData(0, 0, G, B).data, P = Y(!0, G, B, $), w = Y(!1, G, B, $), J = D(!0, G, B, $), F = D(!1, G, B, $), pt = F - J + 1, bt = w - P + 1, zt = M.getImageData(J, P, pt, bt);
          return y.width = pt, y.height = bt, M.clearRect(0, 0, pt, bt), M.putImageData(zt, 0, 0), y;
        }
        function U(y, M, G, B) {
          return { red: B[4 * (G * M + y)], green: B[4 * (G * M + y) + 1], blue: B[4 * (G * M + y) + 2], alpha: B[4 * (G * M + y) + 3] };
        }
        function x(y, M, G, B) {
          return U(y, M, G, B).alpha;
        }
        function Y(y, M, G, B) {
          for (var $ = y ? 1 : -1, P = y ? 0 : G - 1, w = P; y ? w < G : w > -1; w += $) for (var J = 0; J < M; J++) if (x(J, w, M, B)) return w;
          return null;
        }
        function D(y, M, G, B) {
          for (var $ = y ? 1 : -1, P = y ? 0 : M - 1, w = P; y ? w < M : w > -1; w += $) for (var J = 0; J < G; J++) if (x(w, J, M, B)) return w;
          return null;
        }
        Object.defineProperty(c, "__esModule", { value: !0 }), c.default = z;
      }]);
    });
  })(Cn)), Cn.exports;
}
var s0 = Yn.exports, Sh;
function o0() {
  return Sh || (Sh = 1, (function(d, E) {
    (function(b, c) {
      d.exports = c(/* @__PURE__ */ u0(), Gn(), i0, c0());
    })(s0, function(b, c, z, U) {
      return (function(x) {
        function Y(y) {
          if (D[y]) return D[y].exports;
          var M = D[y] = { exports: {}, id: y, loaded: !1 };
          return x[y].call(M.exports, M, M.exports, Y), M.loaded = !0, M.exports;
        }
        var D = {};
        return Y.m = x, Y.c = D, Y.p = "", Y(0);
      })([function(x, Y, D) {
        function y(lt) {
          return lt && lt.__esModule ? lt : { default: lt };
        }
        function M(lt, W) {
          var mt = {};
          for (var at in lt) W.indexOf(at) >= 0 || Object.prototype.hasOwnProperty.call(lt, at) && (mt[at] = lt[at]);
          return mt;
        }
        function G(lt, W) {
          if (!(lt instanceof W)) throw new TypeError("Cannot call a class as a function");
        }
        function B(lt, W) {
          if (!lt) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !W || typeof W != "object" && typeof W != "function" ? lt : W;
        }
        function $(lt, W) {
          if (typeof W != "function" && W !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof W);
          lt.prototype = Object.create(W && W.prototype, { constructor: { value: lt, enumerable: !1, writable: !0, configurable: !0 } }), W && (Object.setPrototypeOf ? Object.setPrototypeOf(lt, W) : lt.__proto__ = W);
        }
        Object.defineProperty(Y, "__esModule", { value: !0 });
        var P = Object.assign || function(lt) {
          for (var W = 1; W < arguments.length; W++) {
            var mt = arguments[W];
            for (var at in mt) Object.prototype.hasOwnProperty.call(mt, at) && (lt[at] = mt[at]);
          }
          return lt;
        }, w = /* @__PURE__ */ (function() {
          function lt(W, mt) {
            for (var at = 0; at < mt.length; at++) {
              var Q = mt[at];
              Q.enumerable = Q.enumerable || !1, Q.configurable = !0, "value" in Q && (Q.writable = !0), Object.defineProperty(W, Q.key, Q);
            }
          }
          return function(W, mt, at) {
            return mt && lt(W.prototype, mt), at && lt(W, at), W;
          };
        })(), J = D(1), F = y(J), pt = D(2), bt = y(pt), zt = D(3), nt = y(zt), Jt = D(4), wt = y(Jt), Xt = (function(lt) {
          function W() {
            var mt, at, Q, Tl;
            G(this, W);
            for (var Nt = arguments.length, _ = Array(Nt), R = 0; R < Nt; R++) _[R] = arguments[R];
            return at = Q = B(this, (mt = W.__proto__ || Object.getPrototypeOf(W)).call.apply(mt, [this].concat(_))), Q._sigPad = null, Q._excludeOurProps = function() {
              var q = Q.props, it = (q.canvasProps, q.clearOnResize, M(q, ["canvasProps", "clearOnResize"]));
              return it;
            }, Q.getCanvas = function() {
              return Q._canvas;
            }, Q.getTrimmedCanvas = function() {
              var q = document.createElement("canvas");
              return q.width = Q._canvas.width, q.height = Q._canvas.height, q.getContext("2d").drawImage(Q._canvas, 0, 0), (0, wt.default)(q);
            }, Q.getSignaturePad = function() {
              return Q._sigPad;
            }, Q._checkClearOnResize = function() {
              Q.props.clearOnResize && Q._resizeCanvas();
            }, Q._resizeCanvas = function() {
              var q = Q.props.canvasProps || {}, it = q.width, o = q.height;
              if (!it || !o) {
                var O = Q._canvas, N = Math.max(window.devicePixelRatio || 1, 1);
                it || (O.width = O.offsetWidth * N), o || (O.height = O.offsetHeight * N), O.getContext("2d").scale(N, N), Q.clear();
              }
            }, Q.on = function() {
              return window.addEventListener("resize", Q._checkClearOnResize), Q._sigPad.on();
            }, Q.off = function() {
              return window.removeEventListener("resize", Q._checkClearOnResize), Q._sigPad.off();
            }, Q.clear = function() {
              return Q._sigPad.clear();
            }, Q.isEmpty = function() {
              return Q._sigPad.isEmpty();
            }, Q.fromDataURL = function(q, it) {
              return Q._sigPad.fromDataURL(q, it);
            }, Q.toDataURL = function(q, it) {
              return Q._sigPad.toDataURL(q, it);
            }, Q.fromData = function(q) {
              return Q._sigPad.fromData(q);
            }, Q.toData = function() {
              return Q._sigPad.toData();
            }, Tl = at, B(Q, Tl);
          }
          return $(W, lt), w(W, [{ key: "componentDidMount", value: function() {
            this._sigPad = new nt.default(this._canvas, this._excludeOurProps()), this._resizeCanvas(), this.on();
          } }, { key: "componentWillUnmount", value: function() {
            this.off();
          } }, { key: "componentDidUpdate", value: function() {
            Object.assign(this._sigPad, this._excludeOurProps());
          } }, { key: "render", value: function() {
            var mt = this, at = this.props.canvasProps;
            return bt.default.createElement("canvas", P({ ref: function(Q) {
              mt._canvas = Q;
            } }, at));
          } }]), W;
        })(pt.Component);
        Xt.propTypes = { velocityFilterWeight: F.default.number, minWidth: F.default.number, maxWidth: F.default.number, minDistance: F.default.number, dotSize: F.default.oneOfType([F.default.number, F.default.func]), penColor: F.default.string, throttle: F.default.number, onEnd: F.default.func, onBegin: F.default.func, canvasProps: F.default.object, clearOnResize: F.default.bool }, Xt.defaultProps = { clearOnResize: !0 }, Y.default = Xt;
      }, function(x, Y) {
        x.exports = b;
      }, function(x, Y) {
        x.exports = c;
      }, function(x, Y) {
        x.exports = z;
      }, function(x, Y) {
        x.exports = U;
      }]);
    });
  })(Yn)), Yn.exports;
}
var r0 = o0();
const h0 = /* @__PURE__ */ bh(r0), _h = Bn.forwardRef((d, E) => {
  const {
    onSave: b,
    onClear: c,
    signatureText: z = "Draw your signature:",
    saveButtonText: U = "Save Signature",
    clearButtonText: x = "Clear",
    width: Y = 400,
    height: D = 150,
    borderRadius: y = "0.5rem",
    primaryColor: M = "#2563eb",
    secondaryColor: G = "#64748b"
  } = d, B = Bn.useRef(null);
  Bn.useImperativeHandle(E, () => ({
    clear: P,
    save: $
  }));
  const $ = () => {
    if (B.current) {
      const J = B.current.getCanvas().toDataURL("image/png");
      b(J);
    }
  }, P = () => {
    B.current?.clear(), b(""), c?.();
  }, w = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem"
    },
    label: {
      fontWeight: 500,
      color: "#374151",
      fontSize: "0.875rem"
    },
    canvasContainer: {
      border: "1px solid #d1d5db",
      borderRadius: y,
      backgroundColor: "white",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
    },
    buttonContainer: {
      display: "flex",
      gap: "0.75rem"
    },
    primaryButton: {
      backgroundColor: M,
      color: "white",
      border: "none",
      borderRadius: y,
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.2s ease"
    },
    secondaryButton: {
      backgroundColor: G,
      color: "white",
      border: "none",
      borderRadius: y,
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.2s ease"
    }
  };
  return /* @__PURE__ */ Ha.jsxs("div", { style: w.container, children: [
    /* @__PURE__ */ Ha.jsx("p", { style: w.label, children: z }),
    /* @__PURE__ */ Ha.jsx("div", { style: w.canvasContainer, children: /* @__PURE__ */ Ha.jsx(
      h0,
      {
        ref: B,
        penColor: "black",
        canvasProps: {
          width: Y,
          height: D,
          style: {
            borderRadius: y,
            display: "block"
          }
        }
      }
    ) }),
    /* @__PURE__ */ Ha.jsxs("div", { style: w.buttonContainer, children: [
      /* @__PURE__ */ Ha.jsx(
        "button",
        {
          type: "button",
          onClick: $,
          style: w.primaryButton,
          onMouseEnter: (J) => {
            J.currentTarget.style.opacity = "0.9";
          },
          onMouseLeave: (J) => {
            J.currentTarget.style.opacity = "1";
          },
          children: U
        }
      ),
      /* @__PURE__ */ Ha.jsx(
        "button",
        {
          type: "button",
          onClick: P,
          style: w.secondaryButton,
          onMouseEnter: (J) => {
            J.currentTarget.style.opacity = "0.9";
          },
          onMouseLeave: (J) => {
            J.currentTarget.style.opacity = "1";
          },
          children: x
        }
      )
    ] })
  ] });
});
_h.displayName = "SignaturePad";
class d0 extends HTMLElement {
  root = null;
  _shadowRoot;
  signaturePadRef = null;
  static get observedAttributes() {
    return [
      "signature-text",
      "save-button-text",
      "clear-button-text",
      "width",
      "height",
      "border-radius",
      "primary-color",
      "secondary-color"
    ];
  }
  constructor() {
    super(), this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    this.root && (this.root.unmount(), this.root = null);
  }
  attributeChangedCallback() {
    this.render();
  }
  getPropsFromAttributes() {
    return {
      signatureText: this.getAttribute("signature-text") || void 0,
      saveButtonText: this.getAttribute("save-button-text") || void 0,
      clearButtonText: this.getAttribute("clear-button-text") || void 0,
      width: this.getAttribute("width") ? parseInt(this.getAttribute("width")) : void 0,
      height: this.getAttribute("height") ? parseInt(this.getAttribute("height")) : void 0,
      borderRadius: this.getAttribute("border-radius") || void 0,
      primaryColor: this.getAttribute("primary-color") || void 0,
      secondaryColor: this.getAttribute("secondary-color") || void 0,
      onSave: (E) => {
        const b = new CustomEvent("signature-saved", {
          detail: { signature: E },
          bubbles: !0,
          composed: !0
        });
        this.dispatchEvent(b);
      },
      onClear: () => {
        const E = new CustomEvent("signature-cleared", {
          detail: {},
          bubbles: !0,
          composed: !0
        });
        this.dispatchEvent(E);
      },
      ref: (E) => {
        this.signaturePadRef = E;
      }
    };
  }
  render() {
    const E = this._shadowRoot.querySelector("#signature-pad-mount") || document.createElement("div");
    this._shadowRoot.querySelector("#signature-pad-mount") || (E.id = "signature-pad-mount", this._shadowRoot.appendChild(E)), this.root || (this.root = Pv.createRoot(E));
    const b = this.getPropsFromAttributes();
    this.root.render(Kv.createElement(_h, b));
  }
  // Public API methods
  clearSignature() {
    this.signaturePadRef && this.signaturePadRef.clear();
  }
  saveSignature() {
    this.signaturePadRef && this.signaturePadRef.save();
  }
}
customElements.get("signature-pad-component") || customElements.define("signature-pad-component", d0);
export {
  d0 as default
};
