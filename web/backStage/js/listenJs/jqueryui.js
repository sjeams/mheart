define(function (a, b, c) {
    var d = a("jquery");
    !function (a, b) {
        function c(b, c) {
            var e, f, g, h = b.nodeName.toLowerCase();
            return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap=#" + f + "]")[0], !!g && d(g)) : !1) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || c : c) && d(b)
        }

        function d(b) {
            return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
                    return "hidden" === a.css(this, "visibility")
                }).length
        }

        var e = 0, f = /^ui-id-\d+$/;
        a.ui = a.ui || {}, a.extend(a.ui, {
            version: "1.10.3",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), a.fn.extend({
            focus: function (b) {
                return function (c, d) {
                    return "number" == typeof c ? this.each(function () {
                        var b = this;
                        setTimeout(function () {
                            a(b).focus(), d && d.call(b)
                        }, c)
                    }) : b.apply(this, arguments)
                }
            }(a.fn.focus), scrollParent: function () {
                var b;
                return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                    return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function () {
                    return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !b.length ? a(document) : b
            }, zIndex: function (c) {
                if (c !== b)return this.css("zIndex", c);
                if (this.length)for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
                    if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e))return e;
                    f = f.parent()
                }
                return 0
            }, uniqueId: function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }, removeUniqueId: function () {
                return this.each(function () {
                    f.test(this.id) && a(this).removeAttr("id")
                })
            }
        }), a.extend(a.expr[":"], {
            data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
                return function (c) {
                    return !!a.data(c, b)
                }
            }) : function (b, c, d) {
                return !!a.data(b, d[3])
            }, focusable: function (b) {
                return c(b, !isNaN(a.attr(b, "tabindex")))
            }, tabbable: function (b) {
                var d = a.attr(b, "tabindex"), e = isNaN(d);
                return (e || d >= 0) && c(b, !e)
            }
        }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (c, d) {
            function e(b, c, d, e) {
                return a.each(f, function () {
                    c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
                }), c
            }

            var f = "Width" === d ? ["Left", "Right"] : ["Top", "Bottom"], g = d.toLowerCase(), h = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
            a.fn["inner" + d] = function (c) {
                return c === b ? h["inner" + d].call(this) : this.each(function () {
                    a(this).css(g, e(this, c) + "px")
                })
            }, a.fn["outer" + d] = function (b, c) {
                return "number" != typeof b ? h["outer" + d].call(this, b) : this.each(function () {
                    a(this).css(g, e(this, b, !0, c) + "px")
                })
            }
        }), a.fn.addBack || (a.fn.addBack = function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
            return function (c) {
                return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
            }
        }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart"in document.createElement("div"), a.fn.extend({
            disableSelection: function () {
                return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
                    a.preventDefault()
                })
            }, enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            }
        }), a.extend(a.ui, {
            plugin: {
                add: function (b, c, d) {
                    var e, f = a.ui[b].prototype;
                    for (e in d)f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
                }, call: function (a, b, c) {
                    var d, e = a.plugins[b];
                    if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)for (d = 0; e.length > d; d++)a.options[e[d][0]] && e[d][1].apply(a.element, c)
                }
            }, hasScroll: function (b, c) {
                if ("hidden" === a(b).css("overflow"))return !1;
                var d = c && "left" === c ? "scrollLeft" : "scrollTop", e = !1;
                return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
            }
        })
    }(d), function (a, b) {
        var c = 0, d = Array.prototype.slice, e = a.cleanData;
        a.cleanData = function (b) {
            for (var c, d = 0; null != (c = b[d]); d++)try {
                a(c).triggerHandler("remove")
            } catch (f) {
            }
            e(b)
        }, a.widget = function (c, d, e) {
            var f, g, h, i, j = {}, k = c.split(".")[0];
            c = c.split(".")[1], f = k + "-" + c, e || (e = d, d = a.Widget), a.expr[":"][f.toLowerCase()] = function (b) {
                return !!a.data(b, f)
            }, a[k] = a[k] || {}, g = a[k][c], h = a[k][c] = function (a, c) {
                return this._createWidget ? (arguments.length && this._createWidget(a, c), b) : new h(a, c)
            }, a.extend(h, g, {
                version: e.version,
                _proto: a.extend({}, e),
                _childConstructors: []
            }), i = new d, i.options = a.widget.extend({}, i.options), a.each(e, function (c, e) {
                return a.isFunction(e) ? (j[c] = function () {
                    var a = function () {
                        return d.prototype[c].apply(this, arguments)
                    }, b = function (a) {
                        return d.prototype[c].apply(this, a)
                    };
                    return function () {
                        var c, d = this._super, f = this._superApply;
                        return this._super = a, this._superApply = b, c = e.apply(this, arguments), this._super = d, this._superApply = f, c
                    }
                }(), b) : (j[c] = e, b)
            }), h.prototype = a.widget.extend(i, {widgetEventPrefix: g ? i.widgetEventPrefix : c}, j, {
                constructor: h,
                namespace: k,
                widgetName: c,
                widgetFullName: f
            }), g ? (a.each(g._childConstructors, function (b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, h, c._proto)
            }), delete g._childConstructors) : d._childConstructors.push(h), a.widget.bridge(c, h)
        }, a.widget.extend = function (c) {
            for (var e, f, g = d.call(arguments, 1), h = 0, i = g.length; i > h; h++)for (e in g[h])f = g[h][e], g[h].hasOwnProperty(e) && f !== b && (c[e] = a.isPlainObject(f) ? a.isPlainObject(c[e]) ? a.widget.extend({}, c[e], f) : a.widget.extend({}, f) : f);
            return c
        }, a.widget.bridge = function (c, e) {
            var f = e.prototype.widgetFullName || c;
            a.fn[c] = function (g) {
                var h = "string" == typeof g, i = d.call(arguments, 1), j = this;
                return g = !h && i.length ? a.widget.extend.apply(null, [g].concat(i)) : g, this.each(h ? function () {
                    var d, e = a.data(this, f);
                    return e ? a.isFunction(e[g]) && "_" !== g.charAt(0) ? (d = e[g].apply(e, i), d !== e && d !== b ? (j = d && d.jquery ? j.pushStack(d.get()) : d, !1) : b) : a.error("no such method '" + g + "' for " + c + " widget instance") : a.error("cannot call methods on " + c + " prior to initialization; attempted to call method '" + g + "'")
                } : function () {
                    var b = a.data(this, f);
                    b ? b.option(g || {})._init() : a.data(this, f, new e(g, this))
                }), j
            }
        }, a.Widget = function () {
        }, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {disabled: !1, create: null},
            _createWidget: function (b, d) {
                d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = c++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (a) {
                        a.target === d && this.destroy()
                    }
                }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function () {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function () {
                return this.element
            },
            option: function (c, d) {
                var e, f, g, h = c;
                if (0 === arguments.length)return a.widget.extend({}, this.options);
                if ("string" == typeof c)if (h = {}, e = c.split("."), c = e.shift(), e.length) {
                    for (f = h[c] = a.widget.extend({}, this.options[c]), g = 0; e.length - 1 > g; g++)f[e[g]] = f[e[g]] || {}, f = f[e[g]];
                    if (c = e.pop(), d === b)return f[c] === b ? null : f[c];
                    f[c] = d
                } else {
                    if (d === b)return this.options[c] === b ? null : this.options[c];
                    h[c] = d
                }
                return this._setOptions(h), this
            },
            _setOptions: function (a) {
                var b;
                for (b in a)this._setOption(b, a[b]);
                return this
            },
            _setOption: function (a, b) {
                return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!b).attr("aria-disabled", b), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function () {
                return this._setOption("disabled", !1)
            },
            disable: function () {
                return this._setOption("disabled", !0)
            },
            _on: function (c, d, e) {
                var f, g = this;
                "boolean" != typeof c && (e = d, d = c, c = !1), e ? (d = f = a(d), this.bindings = this.bindings.add(d)) : (e = d, d = this.element, f = this.widget()), a.each(e, function (e, h) {
                    function i() {
                        return c || g.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof h ? g[h] : h).apply(g, arguments) : b
                    }

                    "string" != typeof h && (i.guid = h.guid = h.guid || i.guid || a.guid++);
                    var j = e.match(/^(\w+)\s*(.*)$/), k = j[1] + g.eventNamespace, l = j[2];
                    l ? f.delegate(l, k, i) : d.bind(k, i)
                })
            },
            _off: function (a, b) {
                b = (b || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, a.unbind(b).undelegate(b)
            },
            _delay: function (a, b) {
                function c() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                }

                var d = this;
                return setTimeout(c, b || 0)
            },
            _hoverable: function (b) {
                this.hoverable = this.hoverable.add(b), this._on(b, {
                    mouseenter: function (b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    }, mouseleave: function (b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (b) {
                this.focusable = this.focusable.add(b), this._on(b, {
                    focusin: function (b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    }, focusout: function (b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (b, c, d) {
                var e, f, g = this.options[b];
                if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)for (e in f)e in c || (c[e] = f[e]);
                return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
            }
        }, a.each({show: "fadeIn", hide: "fadeOut"}, function (b, c) {
            a.Widget.prototype["_" + b] = function (d, e, f) {
                "string" == typeof e && (e = {effect: e});
                var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
                e = e || {}, "number" == typeof e && (e = {duration: e}), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
                    a(this)[b](), f && f.call(d[0]), c()
                })
            }
        })
    }(d), function (a) {
        var b = !1;
        a(document).mouseup(function () {
            b = !1
        }), a.widget("ui.mouse", {
            version: "1.10.3",
            options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
            _mouseInit: function () {
                var b = this;
                this.element.bind("mousedown." + this.widgetName, function (a) {
                    return b._mouseDown(a)
                }).bind("click." + this.widgetName, function (c) {
                    return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function () {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (c) {
                if (!b) {
                    this._mouseStarted && this._mouseUp(c), this._mouseDownEvent = c;
                    var d = this, e = 1 === c.which, f = "string" == typeof this.options.cancel && c.target.nodeName ? a(c.target).closest(this.options.cancel).length : !1;
                    return e && !f && this._mouseCapture(c) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        d.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(c) !== !1, !this._mouseStarted) ? (c.preventDefault(), !0) : (!0 === a.data(c.target, this.widgetName + ".preventClickEvent") && a.removeData(c.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
                        return d._mouseMove(a)
                    }, this._mouseUpDelegate = function (a) {
                        return d._mouseUp(a)
                    }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), c.preventDefault(), b = !0, !0)) : !0
                }
            },
            _mouseMove: function (b) {
                return a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button ? this._mouseUp(b) : this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
            },
            _mouseUp: function (b) {
                return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), !1
            },
            _mouseDistanceMet: function (a) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet
            },
            _mouseStart: function () {
            },
            _mouseDrag: function () {
            },
            _mouseStop: function () {
            },
            _mouseCapture: function () {
                return !0
            }
        })
    }(d), function (a, b) {
        function c(a, b, c) {
            return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
        }

        function d(b, c) {
            return parseInt(a.css(b, c), 10) || 0
        }

        function e(b) {
            var c = b[0];
            return 9 === c.nodeType ? {
                width: b.width(),
                height: b.height(),
                offset: {top: 0, left: 0}
            } : a.isWindow(c) ? {
                width: b.width(),
                height: b.height(),
                offset: {top: b.scrollTop(), left: b.scrollLeft()}
            } : c.preventDefault ? {
                width: 0,
                height: 0,
                offset: {top: c.pageY, left: c.pageX}
            } : {width: b.outerWidth(), height: b.outerHeight(), offset: b.offset()}
        }

        a.ui = a.ui || {};
        var f, g = Math.max, h = Math.abs, i = Math.round, j = /left|center|right/, k = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, m = /^\w+/, n = /%$/, o = a.fn.position;
        a.position = {
            scrollbarWidth: function () {
                if (f !== b)return f;
                var c, d, e = a("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), g = e.children()[0];
                return a("body").append(e), c = g.offsetWidth, e.css("overflow", "scroll"), d = g.offsetWidth, c === d && (d = e[0].clientWidth), e.remove(), f = c - d
            }, getScrollInfo: function (b) {
                var c = b.isWindow ? "" : b.element.css("overflow-x"), d = b.isWindow ? "" : b.element.css("overflow-y"), e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth, f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
                return {width: f ? a.position.scrollbarWidth() : 0, height: e ? a.position.scrollbarWidth() : 0}
            }, getWithinInfo: function (b) {
                var c = a(b || window), d = a.isWindow(c[0]);
                return {
                    element: c,
                    isWindow: d,
                    offset: c.offset() || {left: 0, top: 0},
                    scrollLeft: c.scrollLeft(),
                    scrollTop: c.scrollTop(),
                    width: d ? c.width() : c.outerWidth(),
                    height: d ? c.height() : c.outerHeight()
                }
            }
        }, a.fn.position = function (b) {
            if (!b || !b.of)return o.apply(this, arguments);
            b = a.extend({}, b);
            var f, n, p, q, r, s, t = a(b.of), u = a.position.getWithinInfo(b.within), v = a.position.getScrollInfo(u), w = (b.collision || "flip").split(" "), x = {};
            return s = e(t), t[0].preventDefault && (b.at = "left top"), n = s.width, p = s.height, q = s.offset, r = a.extend({}, q), a.each(["my", "at"], function () {
                var a, c, d = (b[this] || "").split(" ");
                1 === d.length && (d = j.test(d[0]) ? d.concat(["center"]) : k.test(d[0]) ? ["center"].concat(d) : ["center", "center"]), d[0] = j.test(d[0]) ? d[0] : "center", d[1] = k.test(d[1]) ? d[1] : "center", a = l.exec(d[0]), c = l.exec(d[1]), x[this] = [a ? a[0] : 0, c ? c[0] : 0], b[this] = [m.exec(d[0])[0], m.exec(d[1])[0]]
            }), 1 === w.length && (w[1] = w[0]), "right" === b.at[0] ? r.left += n : "center" === b.at[0] && (r.left += n / 2), "bottom" === b.at[1] ? r.top += p : "center" === b.at[1] && (r.top += p / 2), f = c(x.at, n, p), r.left += f[0], r.top += f[1], this.each(function () {
                var e, j, k = a(this), l = k.outerWidth(), m = k.outerHeight(), o = d(this, "marginLeft"), s = d(this, "marginTop"), y = l + o + d(this, "marginRight") + v.width, z = m + s + d(this, "marginBottom") + v.height, A = a.extend({}, r), B = c(x.my, k.outerWidth(), k.outerHeight());
                "right" === b.my[0] ? A.left -= l : "center" === b.my[0] && (A.left -= l / 2), "bottom" === b.my[1] ? A.top -= m : "center" === b.my[1] && (A.top -= m / 2), A.left += B[0], A.top += B[1], a.support.offsetFractions || (A.left = i(A.left), A.top = i(A.top)), e = {
                    marginLeft: o,
                    marginTop: s
                }, a.each(["left", "top"], function (c, d) {
                    a.ui.position[w[c]] && a.ui.position[w[c]][d](A, {
                        targetWidth: n,
                        targetHeight: p,
                        elemWidth: l,
                        elemHeight: m,
                        collisionPosition: e,
                        collisionWidth: y,
                        collisionHeight: z,
                        offset: [f[0] + B[0], f[1] + B[1]],
                        my: b.my,
                        at: b.at,
                        within: u,
                        elem: k
                    })
                }), b.using && (j = function (a) {
                    var c = q.left - A.left, d = c + n - l, e = q.top - A.top, f = e + p - m, i = {
                        target: {
                            element: t,
                            left: q.left,
                            top: q.top,
                            width: n,
                            height: p
                        },
                        element: {element: k, left: A.left, top: A.top, width: l, height: m},
                        horizontal: 0 > d ? "left" : c > 0 ? "right" : "center",
                        vertical: 0 > f ? "top" : e > 0 ? "bottom" : "middle"
                    };
                    l > n && n > h(c + d) && (i.horizontal = "center"), m > p && p > h(e + f) && (i.vertical = "middle"), i.important = g(h(c), h(d)) > g(h(e), h(f)) ? "horizontal" : "vertical", b.using.call(this, a, i)
                }), k.offset(a.extend(A, {using: j}))
            })
        }, a.ui.position = {
            fit: {
                left: function (a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollLeft : d.offset.left, f = d.width, h = a.left - b.collisionPosition.marginLeft, i = e - h, j = h + b.collisionWidth - f - e;
                    b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
                }, top: function (a, b) {
                    var c, d = b.within, e = d.isWindow ? d.scrollTop : d.offset.top, f = b.within.height, h = a.top - b.collisionPosition.marginTop, i = e - h, j = h + b.collisionHeight - f - e;
                    b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
                }
            }, flip: {
                left: function (a, b) {
                    var c, d, e = b.within, f = e.offset.left + e.scrollLeft, g = e.width, i = e.isWindow ? e.scrollLeft : e.offset.left, j = a.left - b.collisionPosition.marginLeft, k = j - i, l = j + b.collisionWidth - g - i, m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0, n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0, o = -2 * b.offset[0];
                    0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || h(k) > c) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || l > h(d)) && (a.left += m + n + o))
                }, top: function (a, b) {
                    var c, d, e = b.within, f = e.offset.top + e.scrollTop, g = e.height, i = e.isWindow ? e.scrollTop : e.offset.top, j = a.top - b.collisionPosition.marginTop, k = j - i, l = j + b.collisionHeight - g - i, m = "top" === b.my[1], n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0, o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0, p = -2 * b.offset[1];
                    0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, a.top + n + o + p > k && (0 > d || h(k) > d) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, a.top + n + o + p > l && (c > 0 || l > h(c)) && (a.top += n + o + p))
                }
            }, flipfit: {
                left: function () {
                    a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
                }, top: function () {
                    a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
                }
            }
        }, function () {
            var b, c, d, e, f, g = document.getElementsByTagName("body")[0], h = document.createElement("div");
            b = document.createElement(g ? "div" : "body"), d = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, g && a.extend(d, {position: "absolute", left: "-1000px", top: "-1000px"});
            for (f in d)b.style[f] = d[f];
            b.appendChild(h), c = g || document.documentElement, c.insertBefore(b, c.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", e = a(h).offset().left, a.support.offsetFractions = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b)
        }()
    }(d), function (a) {
        a.widget("ui.draggable", a.ui.mouse, {
            version: "1.10.3",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function () {
                "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
            },
            _destroy: function () {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
            },
            _mouseCapture: function (b) {
                var c = this.options;
                return this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(b), this.handle ? (a(c.iframeFix === !0 ? "iframe" : c.iframeFix).each(function () {
                    a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(a(this).offset()).appendTo("body")
                }), !0) : !1)
            },
            _mouseStart: function (b) {
                var c = this.options;
                return this.helper = this._createHelper(b), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, this.offset.scroll = !1, a.extend(this.offset, {
                    click: {
                        left: b.pageX - this.offset.left,
                        top: b.pageY - this.offset.top
                    }, parent: this._getParentOffset(), relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), this._trigger("start", b) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
            },
            _mouseDrag: function (b, c) {
                if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), !c) {
                    var d = this._uiHash();
                    if (this._trigger("drag", b, d) === !1)return this._mouseUp({}), !1;
                    this.position = d.position
                }
                return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
            },
            _mouseStop: function (b) {
                var c = this, d = !1;
                return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)), this.dropped && (d = this.dropped, this.dropped = !1), "original" !== this.options.helper || a.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    c._trigger("stop", b) !== !1 && c._clear()
                }) : this._trigger("stop", b) !== !1 && this._clear(), !1) : !1
            },
            _mouseUp: function (b) {
                return a("div.ui-draggable-iframeFix").each(function () {
                    this.parentNode.removeChild(this)
                }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b)
            },
            cancel: function () {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function (b) {
                return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _createHelper: function (b) {
                var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element;
                return d.parents("body").length || d.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), d[0] === this.element[0] || /(fixed|absolute)/.test(d.css("position")) || d.css("position", "absolute"), d
            },
            _adjustOffsetFromHelper: function (b) {
                "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                    left: +b[0],
                    top: +b[1] || 0
                }), "left"in b && (this.offset.click.left = b.left + this.margins.left), "right"in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top"in b && (this.offset.click.top = b.top + this.margins.top), "bottom"in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                var b = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                    top: 0,
                    left: 0
                }), {
                    top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" === this.cssPosition) {
                    var a = this.element.position();
                    return {
                        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {top: 0, left: 0}
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
            },
            _setContainment: function () {
                var b, c, d, e = this.options;
                return e.containment ? "window" === e.containment ? void(this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === e.containment ? void(this.containment = [0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : e.containment.constructor === Array ? void(this.containment = e.containment) : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void(d && (b = "hidden" !== c.css("overflow"), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = c))) : void(this.containment = null)
            },
            _convertPositionTo: function (b, c) {
                c || (c = this.position);
                var d = "absolute" === b ? 1 : -1, e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
                return this.offset.scroll || (this.offset.scroll = {
                    top: e.scrollTop(),
                    left: e.scrollLeft()
                }), {
                    top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * d,
                    left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * d
                }
            },
            _generatePosition: function (b) {
                var c, d, e, f, g = this.options, h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, i = b.pageX, j = b.pageY;
                return this.offset.scroll || (this.offset.scroll = {
                    top: h.scrollTop(),
                    left: h.scrollLeft()
                }), this.originalPosition && (this.containment && (this.relative_container ? (d = this.relative_container.offset(), c = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : c = this.containment, b.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left), b.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top), b.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left), b.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (e = g.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, j = c ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3] ? e : e - this.offset.click.top >= c[1] ? e - g.grid[1] : e + g.grid[1] : e, f = g.grid[0] ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, i = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2] ? f : f - this.offset.click.left >= c[0] ? f - g.grid[0] : f + g.grid[0] : f)), {
                    top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                    left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
                }
            },
            _clear: function () {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
            },
            _trigger: function (b, c, d) {
                return d = d || this._uiHash(), a.ui.plugin.call(this, b, [c, d]), "drag" === b && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, b, c, d)
            },
            plugins: {},
            _uiHash: function () {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), a.ui.plugin.add("draggable", "connectToSortable", {
            start: function (b, c) {
                var d = a(this).data("ui-draggable"), e = d.options, f = a.extend({}, c, {item: d.element});
                d.sortables = [], a(e.connectToSortable).each(function () {
                    var c = a.data(this, "ui-sortable");
                    c && !c.options.disabled && (d.sortables.push({
                        instance: c,
                        shouldRevert: c.options.revert
                    }), c.refreshPositions(), c._trigger("activate", b, f))
                })
            }, stop: function (b, c) {
                var d = a(this).data("ui-draggable"), e = a.extend({}, c, {item: d.element});
                a.each(d.sortables, function () {
                    this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, "original" === d.options.helper && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, e))
                })
            }, drag: function (b, c) {
                var d = a(this).data("ui-draggable"), e = this;
                a.each(d.sortables, function () {
                    var f = !1, g = this;
                    this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (f = !0, a.each(d.sortables, function () {
                        return this.instance.positionAbs = d.positionAbs, this.instance.helperProportions = d.helperProportions, this.instance.offset.click = d.offset.click, this !== g && this.instance._intersectsWith(this.instance.containerCache) && a.contains(g.instance.element[0], this.instance.element[0]) && (f = !1), f
                    })), f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(e).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                        return c.helper[0]
                    }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1)
                })
            }
        }), a.ui.plugin.add("draggable", "cursor", {
            start: function () {
                var b = a("body"), c = a(this).data("ui-draggable").options;
                b.css("cursor") && (c._cursor = b.css("cursor")), b.css("cursor", c.cursor)
            }, stop: function () {
                var b = a(this).data("ui-draggable").options;
                b._cursor && a("body").css("cursor", b._cursor)
            }
        }), a.ui.plugin.add("draggable", "opacity", {
            start: function (b, c) {
                var d = a(c.helper), e = a(this).data("ui-draggable").options;
                d.css("opacity") && (e._opacity = d.css("opacity")), d.css("opacity", e.opacity)
            }, stop: function (b, c) {
                var d = a(this).data("ui-draggable").options;
                d._opacity && a(c.helper).css("opacity", d._opacity)
            }
        }), a.ui.plugin.add("draggable", "scroll", {
            start: function () {
                var b = a(this).data("ui-draggable");
                b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset())
            }, drag: function (b) {
                var c = a(this).data("ui-draggable"), d = c.options, e = !1;
                c.scrollParent[0] !== document && "HTML" !== c.scrollParent[0].tagName ? (d.axis && "x" === d.axis || (c.overflowOffset.top + c.scrollParent[0].offsetHeight - b.pageY < d.scrollSensitivity ? c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop + d.scrollSpeed : b.pageY - c.overflowOffset.top < d.scrollSensitivity && (c.scrollParent[0].scrollTop = e = c.scrollParent[0].scrollTop - d.scrollSpeed)), d.axis && "y" === d.axis || (c.overflowOffset.left + c.scrollParent[0].offsetWidth - b.pageX < d.scrollSensitivity ? c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft + d.scrollSpeed : b.pageX - c.overflowOffset.left < d.scrollSensitivity && (c.scrollParent[0].scrollLeft = e = c.scrollParent[0].scrollLeft - d.scrollSpeed))) : (d.axis && "x" === d.axis || (b.pageY - a(document).scrollTop() < d.scrollSensitivity ? e = a(document).scrollTop(a(document).scrollTop() - d.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < d.scrollSensitivity && (e = a(document).scrollTop(a(document).scrollTop() + d.scrollSpeed))), d.axis && "y" === d.axis || (b.pageX - a(document).scrollLeft() < d.scrollSensitivity ? e = a(document).scrollLeft(a(document).scrollLeft() - d.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < d.scrollSensitivity && (e = a(document).scrollLeft(a(document).scrollLeft() + d.scrollSpeed)))), e !== !1 && a.ui.ddmanager && !d.dropBehaviour && a.ui.ddmanager.prepareOffsets(c, b)
            }
        }), a.ui.plugin.add("draggable", "snap", {
            start: function () {
                var b = a(this).data("ui-draggable"), c = b.options;
                b.snapElements = [], a(c.snap.constructor !== String ? c.snap.items || ":data(ui-draggable)" : c.snap).each(function () {
                    var c = a(this), d = c.offset();
                    this !== b.element[0] && b.snapElements.push({
                        item: this,
                        width: c.outerWidth(),
                        height: c.outerHeight(),
                        top: d.top,
                        left: d.left
                    })
                })
            }, drag: function (b, c) {
                var d, e, f, g, h, i, j, k, l, m, n = a(this).data("ui-draggable"), o = n.options, p = o.snapTolerance, q = c.offset.left, r = q + n.helperProportions.width, s = c.offset.top, t = s + n.helperProportions.height;
                for (l = n.snapElements.length - 1; l >= 0; l--)h = n.snapElements[l].left, i = h + n.snapElements[l].width, j = n.snapElements[l].top, k = j + n.snapElements[l].height, h - p > r || q > i + p || j - p > t || s > k + p || !a.contains(n.snapElements[l].item.ownerDocument, n.snapElements[l].item) ? (n.snapElements[l].snapping && n.options.snap.release && n.options.snap.release.call(n.element, b, a.extend(n._uiHash(), {snapItem: n.snapElements[l].item})), n.snapElements[l].snapping = !1) : ("inner" !== o.snapMode && (d = p >= Math.abs(j - t), e = p >= Math.abs(k - s), f = p >= Math.abs(h - r), g = p >= Math.abs(i - q), d && (c.position.top = n._convertPositionTo("relative", {
                    top: j - n.helperProportions.height,
                    left: 0
                }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                    top: k,
                    left: 0
                }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h - n.helperProportions.width
                }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: i
                }).left - n.margins.left)), m = d || e || f || g, "outer" !== o.snapMode && (d = p >= Math.abs(j - s), e = p >= Math.abs(k - t), f = p >= Math.abs(h - q), g = p >= Math.abs(i - r), d && (c.position.top = n._convertPositionTo("relative", {
                    top: j,
                    left: 0
                }).top - n.margins.top), e && (c.position.top = n._convertPositionTo("relative", {
                    top: k - n.helperProportions.height,
                    left: 0
                }).top - n.margins.top), f && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left - n.margins.left), g && (c.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: i - n.helperProportions.width
                }).left - n.margins.left)), !n.snapElements[l].snapping && (d || e || f || g || m) && n.options.snap.snap && n.options.snap.snap.call(n.element, b, a.extend(n._uiHash(), {snapItem: n.snapElements[l].item})), n.snapElements[l].snapping = d || e || f || g || m)
            }
        }), a.ui.plugin.add("draggable", "stack", {
            start: function () {
                var b, c = this.data("ui-draggable").options, d = a.makeArray(a(c.stack)).sort(function (b, c) {
                    return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
                });
                d.length && (b = parseInt(a(d[0]).css("zIndex"), 10) || 0, a(d).each(function (c) {
                    a(this).css("zIndex", b + c)
                }), this.css("zIndex", b + d.length))
            }
        }), a.ui.plugin.add("draggable", "zIndex", {
            start: function (b, c) {
                var d = a(c.helper), e = a(this).data("ui-draggable").options;
                d.css("zIndex") && (e._zIndex = d.css("zIndex")), d.css("zIndex", e.zIndex)
            }, stop: function (b, c) {
                var d = a(this).data("ui-draggable").options;
                d._zIndex && a(c.helper).css("zIndex", d._zIndex)
            }
        })
    }(d), function (a) {
        function b(a, b, c) {
            return a > b && b + c > a
        }

        a.widget("ui.droppable", {
            version: "1.10.3",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function () {
                var b = this.options, c = b.accept;
                this.isover = !1, this.isout = !0, this.accept = a.isFunction(c) ? c : function (a) {
                    return a.is(c)
                }, this.proportions = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }, a.ui.ddmanager.droppables[b.scope] = a.ui.ddmanager.droppables[b.scope] || [], a.ui.ddmanager.droppables[b.scope].push(this), b.addClasses && this.element.addClass("ui-droppable")
            },
            _destroy: function () {
                for (var b = 0, c = a.ui.ddmanager.droppables[this.options.scope]; c.length > b; b++)c[b] === this && c.splice(b, 1);
                this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function (b, c) {
                "accept" === b && (this.accept = a.isFunction(c) ? c : function (a) {
                    return a.is(c)
                }), a.Widget.prototype._setOption.apply(this, arguments)
            },
            _activate: function (b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", b, this.ui(c))
            },
            _deactivate: function (b) {
                var c = a.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", b, this.ui(c))
            },
            _over: function (b) {
                var c = a.ui.ddmanager.current;
                c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(c)))
            },
            _out: function (b) {
                var c = a.ui.ddmanager.current;
                c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(c)))
            },
            _drop: function (b, c) {
                var d = c || a.ui.ddmanager.current, e = !1;
                return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                    var b = a.data(this, "ui-droppable");
                    return b.options.greedy && !b.options.disabled && b.options.scope === d.options.scope && b.accept.call(b.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(b, {offset: b.element.offset()}), b.options.tolerance) ? (e = !0, !1) : void 0
                }), e ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1) : !1
            },
            ui: function (a) {
                return {
                    draggable: a.currentItem || a.element,
                    helper: a.helper,
                    position: a.position,
                    offset: a.positionAbs
                }
            }
        }), a.ui.intersect = function (a, c, d) {
            if (!c.offset)return !1;
            var e, f, g = (a.positionAbs || a.position.absolute).left, h = g + a.helperProportions.width, i = (a.positionAbs || a.position.absolute).top, j = i + a.helperProportions.height, k = c.offset.left, l = k + c.proportions.width, m = c.offset.top, n = m + c.proportions.height;
            switch (d) {
                case"fit":
                    return g >= k && l >= h && i >= m && n >= j;
                case"intersect":
                    return g + a.helperProportions.width / 2 > k && l > h - a.helperProportions.width / 2 && i + a.helperProportions.height / 2 > m && n > j - a.helperProportions.height / 2;
                case"pointer":
                    return e = (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left, f = (a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top, b(f, m, c.proportions.height) && b(e, k, c.proportions.width);
                case"touch":
                    return (i >= m && n >= i || j >= m && n >= j || m > i && j > n) && (g >= k && l >= g || h >= k && l >= h || k > g && h > l);
                default:
                    return !1
            }
        }, a.ui.ddmanager = {
            current: null, droppables: {"default": []}, prepareOffsets: function (b, c) {
                var d, e, f = a.ui.ddmanager.droppables[b.options.scope] || [], g = c ? c.type : null, h = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
                a:for (d = 0; f.length > d; d++)if (!(f[d].options.disabled || b && !f[d].accept.call(f[d].element[0], b.currentItem || b.element))) {
                    for (e = 0; h.length > e; e++)if (h[e] === f[d].element[0]) {
                        f[d].proportions.height = 0;
                        continue a
                    }
                    f[d].visible = "none" !== f[d].element.css("display"), f[d].visible && ("mousedown" === g && f[d]._activate.call(f[d], c), f[d].offset = f[d].element.offset(), f[d].proportions = {
                        width: f[d].element[0].offsetWidth,
                        height: f[d].element[0].offsetHeight
                    })
                }
            }, drop: function (b, c) {
                var d = !1;
                return a.each((a.ui.ddmanager.droppables[b.options.scope] || []).slice(), function () {
                    this.options && (!this.options.disabled && this.visible && a.ui.intersect(b, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
                }), d
            }, dragStart: function (b, c) {
                b.element.parentsUntil("body").bind("scroll.droppable", function () {
                    b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
                })
            }, drag: function (b, c) {
                b.options.refreshPositions && a.ui.ddmanager.prepareOffsets(b, c), a.each(a.ui.ddmanager.droppables[b.options.scope] || [], function () {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var d, e, f, g = a.ui.intersect(b, this, this.options.tolerance), h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null;
                        h && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function () {
                            return a.data(this, "ui-droppable").options.scope === e
                        }), f.length && (d = a.data(f[0], "ui-droppable"), d.greedyChild = "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, c)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, c), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, c)))
                    }
                })
            }, dragStop: function (b, c) {
                b.element.parentsUntil("body").unbind("scroll.droppable"), b.options.refreshPositions || a.ui.ddmanager.prepareOffsets(b, c)
            }
        }
    }(d), function (a) {
        function b(a) {
            return parseInt(a, 10) || 0
        }

        function c(a) {
            return !isNaN(parseInt(a, 10))
        }

        a.widget("ui.resizable", a.ui.mouse, {
            version: "1.10.3",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _create: function () {
                var b, c, d, e, f, g = this, h = this.options;
                if (this.element.addClass("ui-resizable"), a.extend(this, {
                        _aspectRatio: !!h.aspectRatio,
                        aspectRatio: h.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles = {}, c = 0; b.length > c; c++)d = a.trim(b[c]), f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), e.css({zIndex: h.zIndex}), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(e);
                this._renderAxis = function (b) {
                    var c, d, e, f;
                    b = b || this.element;
                    for (c in this.handles)this.handles[c].constructor === String && (this.handles[c] = a(this.handles[c], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), a(this.handles[c]).length
                }, this._renderAxis(this.element), this._handles = a(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                    g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = e && e[1] ? e[1] : "se")
                }), h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                    h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show())
                }).mouseleave(function () {
                    h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function () {
                this._mouseDestroy();
                var b, c = function (b) {
                    a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                    position: b.css("position"),
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: b.css("top"),
                    left: b.css("left")
                }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this
            },
            _mouseCapture: function (b) {
                var c, d, e = !1;
                for (c in this.handles)d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
                return !this.options.disabled && e
            },
            _mouseStart: function (c) {
                var d, e, f, g = this.options, h = this.element.position(), i = this.element;
                return this.resizing = !0, /absolute/.test(i.css("position")) ? i.css({
                    position: "absolute",
                    top: i.css("top"),
                    left: i.css("left")
                }) : i.is(".ui-draggable") && i.css({
                    position: "absolute",
                    top: h.top,
                    left: h.left
                }), this._renderProxy(), d = b(this.helper.css("left")), e = b(this.helper.css("top")), g.containment && (d += a(g.containment).scrollLeft() || 0, e += a(g.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: d,
                    top: e
                }, this.size = this._helper ? {width: i.outerWidth(), height: i.outerHeight()} : {
                    width: i.width(),
                    height: i.height()
                }, this.originalSize = this._helper ? {
                    width: i.outerWidth(),
                    height: i.outerHeight()
                } : {width: i.width(), height: i.height()}, this.originalPosition = {
                    left: d,
                    top: e
                }, this.sizeDiff = {
                    width: i.outerWidth() - i.width(),
                    height: i.outerHeight() - i.height()
                }, this.originalMousePosition = {
                    left: c.pageX,
                    top: c.pageY
                }, this.aspectRatio = "number" == typeof g.aspectRatio ? g.aspectRatio : this.originalSize.width / this.originalSize.height || 1, f = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === f ? this.axis + "-resize" : f), i.addClass("ui-resizable-resizing"), this._propagate("start", c), !0
            },
            _mouseDrag: function (b) {
                var c, d = this.helper, e = {}, f = this.originalMousePosition, g = this.axis, h = this.position.top, i = this.position.left, j = this.size.width, k = this.size.height, l = b.pageX - f.left || 0, m = b.pageY - f.top || 0, n = this._change[g];
                return n ? (c = n.apply(this, [b, l, m]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), this.position.top !== h && (e.top = this.position.top + "px"), this.position.left !== i && (e.left = this.position.left + "px"), this.size.width !== j && (e.width = this.size.width + "px"), this.size.height !== k && (e.height = this.size.height + "px"), d.css(e), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(e) || this._trigger("resize", b, this.ui()), !1) : !1
            },
            _mouseStop: function (b) {
                this.resizing = !1;
                var c, d, e, f, g, h, i, j = this.options, k = this;
                return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && a.ui.hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {
                    width: k.helper.width() - f,
                    height: k.helper.height() - e
                }, h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {
                    top: i,
                    left: h
                })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
            },
            _updateVirtualBoundaries: function (a) {
                var b, d, e, f, g, h = this.options;
                g = {
                    minWidth: c(h.minWidth) ? h.minWidth : 0,
                    maxWidth: c(h.maxWidth) ? h.maxWidth : 1 / 0,
                    minHeight: c(h.minHeight) ? h.minHeight : 0,
                    maxHeight: c(h.maxHeight) ? h.maxHeight : 1 / 0
                }, (this._aspectRatio || a) && (b = g.minHeight * this.aspectRatio, e = g.minWidth / this.aspectRatio, d = g.maxHeight * this.aspectRatio, f = g.maxWidth / this.aspectRatio, b > g.minWidth && (g.minWidth = b), e > g.minHeight && (g.minHeight = e), g.maxWidth > d && (g.maxWidth = d), g.maxHeight > f && (g.maxHeight = f)), this._vBoundaries = g
            },
            _updateCache: function (a) {
                this.offset = this.helper.offset(), c(a.left) && (this.position.left = a.left), c(a.top) && (this.position.top = a.top), c(a.height) && (this.size.height = a.height), c(a.width) && (this.size.width = a.width)
            },
            _updateRatio: function (a) {
                var b = this.position, d = this.size, e = this.axis;
                return c(a.height) ? a.width = a.height * this.aspectRatio : c(a.width) && (a.height = a.width / this.aspectRatio), "sw" === e && (a.left = b.left + (d.width - a.width), a.top = null), "nw" === e && (a.top = b.top + (d.height - a.height), a.left = b.left + (d.width - a.width)), a
            },
            _respectSize: function (a) {
                var b = this._vBoundaries, d = this.axis, e = c(a.width) && b.maxWidth && b.maxWidth < a.width, f = c(a.height) && b.maxHeight && b.maxHeight < a.height, g = c(a.width) && b.minWidth && b.minWidth > a.width, h = c(a.height) && b.minHeight && b.minHeight > a.height, i = this.originalPosition.left + this.originalSize.width, j = this.position.top + this.size.height, k = /sw|nw|w/.test(d), l = /nw|ne|n/.test(d);
                return g && (a.width = b.minWidth), h && (a.height = b.minHeight), e && (a.width = b.maxWidth), f && (a.height = b.maxHeight), g && k && (a.left = i - b.minWidth), e && k && (a.left = i - b.maxWidth), h && l && (a.top = j - b.minHeight), f && l && (a.top = j - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a
            },
            _proportionallyResize: function () {
                if (this._proportionallyResizeElements.length) {
                    var a, b, c, d, e, f = this.helper || this.element;
                    for (a = 0; this._proportionallyResizeElements.length > a; a++) {
                        if (e = this._proportionallyResizeElements[a], !this.borderDif)for (this.borderDif = [], c = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], d = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")], b = 0; c.length > b; b++)this.borderDif[b] = (parseInt(c[b], 10) || 0) + (parseInt(d[b], 10) || 0);
                        e.css({
                            height: f.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: f.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
                }
            },
            _renderProxy: function () {
                var b = this.element, c = this.options;
                this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++c.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function (a, b) {
                    return {width: this.originalSize.width + b}
                }, w: function (a, b) {
                    var c = this.originalSize, d = this.originalPosition;
                    return {left: d.left + b, width: c.width - b}
                }, n: function (a, b, c) {
                    var d = this.originalSize, e = this.originalPosition;
                    return {top: e.top + c, height: d.height - c}
                }, s: function (a, b, c) {
                    return {height: this.originalSize.height + c}
                }, se: function (b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                }, sw: function (b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                }, ne: function (b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                }, nw: function (b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                }
            },
            _propagate: function (b, c) {
                a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui())
            },
            plugins: {},
            ui: function () {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), a.ui.plugin.add("resizable", "animate", {
            stop: function (b) {
                var c = a(this).data("ui-resizable"), d = c.options, e = c._proportionallyResizeElements, f = e.length && /textarea/i.test(e[0].nodeName), g = f && a.ui.hasScroll(e[0], "left") ? 0 : c.sizeDiff.height, h = f ? 0 : c.sizeDiff.width, i = {
                    width: c.size.width - h,
                    height: c.size.height - g
                }, j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
                c.element.animate(a.extend(i, k && j ? {top: k, left: j} : {}), {
                    duration: d.animateDuration,
                    easing: d.animateEasing,
                    step: function () {
                        var d = {
                            width: parseInt(c.element.css("width"), 10),
                            height: parseInt(c.element.css("height"), 10),
                            top: parseInt(c.element.css("top"), 10),
                            left: parseInt(c.element.css("left"), 10)
                        };
                        e && e.length && a(e[0]).css({
                            width: d.width,
                            height: d.height
                        }), c._updateCache(d), c._propagate("resize", b)
                    }
                })
            }
        }), a.ui.plugin.add("resizable", "containment", {
            start: function () {
                var c, d, e, f, g, h, i, j = a(this).data("ui-resizable"), k = j.options, l = j.element, m = k.containment, n = m instanceof a ? m.get(0) : /parent/.test(m) ? l.parent().get(0) : m;
                n && (j.containerElement = a(n), /document/.test(m) || m === document ? (j.containerOffset = {
                    left: 0,
                    top: 0
                }, j.containerPosition = {left: 0, top: 0}, j.parentData = {
                    element: a(document),
                    left: 0,
                    top: 0,
                    width: a(document).width(),
                    height: a(document).height() || document.body.parentNode.scrollHeight
                }) : (c = a(n), d = [], a(["Top", "Right", "Left", "Bottom"]).each(function (a, e) {
                    d[a] = b(c.css("padding" + e))
                }), j.containerOffset = c.offset(), j.containerPosition = c.position(), j.containerSize = {
                    height: c.innerHeight() - d[3],
                    width: c.innerWidth() - d[1]
                }, e = j.containerOffset, f = j.containerSize.height, g = j.containerSize.width, h = a.ui.hasScroll(n, "left") ? n.scrollWidth : g, i = a.ui.hasScroll(n) ? n.scrollHeight : f, j.parentData = {
                    element: n,
                    left: e.left,
                    top: e.top,
                    width: h,
                    height: i
                }))
            }, resize: function (b) {
                var c, d, e, f, g = a(this).data("ui-resizable"), h = g.options, i = g.containerOffset, j = g.position, k = g._aspectRatio || b.shiftKey, l = {
                    top: 0,
                    left: 0
                }, m = g.containerElement;
                m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio), g.position.top = g._helper ? i.top : 0), g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top, c = Math.abs((g._helper ? g.offset.left - l.left : g.offset.left - l.left) + g.sizeDiff.width), d = Math.abs((g._helper ? g.offset.top - l.top : g.offset.top - i.top) + g.sizeDiff.height), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f && (c -= g.parentData.left), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio))
            }, stop: function () {
                var b = a(this).data("ui-resizable"), c = b.options, d = b.containerOffset, e = b.containerPosition, f = b.containerElement, g = a(b.helper), h = g.offset(), i = g.outerWidth() - b.sizeDiff.width, j = g.outerHeight() - b.sizeDiff.height;
                b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                    left: h.left - e.left - d.left,
                    width: i,
                    height: j
                }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                    left: h.left - e.left - d.left,
                    width: i,
                    height: j
                })
            }
        }), a.ui.plugin.add("resizable", "alsoResize", {
            start: function () {
                var b = a(this).data("ui-resizable"), c = b.options, d = function (b) {
                    a(b).each(function () {
                        var b = a(this);
                        b.data("ui-resizable-alsoresize", {
                            width: parseInt(b.width(), 10),
                            height: parseInt(b.height(), 10),
                            left: parseInt(b.css("left"), 10),
                            top: parseInt(b.css("top"), 10)
                        })
                    })
                };
                "object" != typeof c.alsoResize || c.alsoResize.parentNode ? d(c.alsoResize) : c.alsoResize.length ? (c.alsoResize = c.alsoResize[0], d(c.alsoResize)) : a.each(c.alsoResize, function (a) {
                    d(a)
                })
            }, resize: function (b, c) {
                var d = a(this).data("ui-resizable"), e = d.options, f = d.originalSize, g = d.originalPosition, h = {
                    height: d.size.height - f.height || 0,
                    width: d.size.width - f.width || 0,
                    top: d.position.top - g.top || 0,
                    left: d.position.left - g.left || 0
                }, i = function (b, d) {
                    a(b).each(function () {
                        var b = a(this), e = a(this).data("ui-resizable-alsoresize"), f = {}, g = d && d.length ? d : b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        a.each(g, function (a, b) {
                            var c = (e[b] || 0) + (h[b] || 0);
                            c && c >= 0 && (f[b] = c || null)
                        }), b.css(f)
                    })
                };
                "object" != typeof e.alsoResize || e.alsoResize.nodeType ? i(e.alsoResize) : a.each(e.alsoResize, function (a, b) {
                    i(a, b)
                })
            }, stop: function () {
                a(this).removeData("resizable-alsoresize")
            }
        }), a.ui.plugin.add("resizable", "ghost", {
            start: function () {
                var b = a(this).data("ui-resizable"), c = b.options, d = b.size;
                b.ghost = b.originalElement.clone(), b.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: d.height,
                    width: d.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), b.ghost.appendTo(b.helper)
            }, resize: function () {
                var b = a(this).data("ui-resizable");
                b.ghost && b.ghost.css({position: "relative", height: b.size.height, width: b.size.width})
            }, stop: function () {
                var b = a(this).data("ui-resizable");
                b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
            }
        }), a.ui.plugin.add("resizable", "grid", {
            resize: function () {
                var b = a(this).data("ui-resizable"), c = b.options, d = b.size, e = b.originalSize, f = b.originalPosition, g = b.axis, h = "number" == typeof c.grid ? [c.grid, c.grid] : c.grid, i = h[0] || 1, j = h[1] || 1, k = Math.round((d.width - e.width) / i) * i, l = Math.round((d.height - e.height) / j) * j, m = e.width + k, n = e.height + l, o = c.maxWidth && m > c.maxWidth, p = c.maxHeight && n > c.maxHeight, q = c.minWidth && c.minWidth > m, r = c.minHeight && c.minHeight > n;
                c.grid = h, q && (m += i), r && (n += j), o && (m -= i), p && (n -= j), /^(se|s|e)$/.test(g) ? (b.size.width = m, b.size.height = n) : /^(ne)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.top = f.top - l) : /^(sw)$/.test(g) ? (b.size.width = m, b.size.height = n, b.position.left = f.left - k) : (b.size.width = m, b.size.height = n, b.position.top = f.top - l, b.position.left = f.left - k)
            }
        })
    }(d), function (a) {
        a.widget("ui.selectable", a.ui.mouse, {
            version: "1.10.3",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function () {
                var b, c = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                    b = a(c.options.filter, c.element[0]), b.addClass("ui-selectee"), b.each(function () {
                        var b = a(this), c = b.offset();
                        a.data(this, "selectable-item", {
                            element: this,
                            $element: b,
                            left: c.left,
                            top: c.top,
                            right: c.left + b.outerWidth(),
                            bottom: c.top + b.outerHeight(),
                            startselected: !1,
                            selected: b.hasClass("ui-selected"),
                            selecting: b.hasClass("ui-selecting"),
                            unselecting: b.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = b.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function () {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function (b) {
                var c = this, d = this.options;
                this.opos = [b.pageX, b.pageY], this.options.disabled || (this.selectees = a(d.filter, this.element[0]), this._trigger("start", b), a(d.appendTo).append(this.helper), this.helper.css({
                    left: b.pageX,
                    top: b.pageY,
                    width: 0,
                    height: 0
                }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                    var d = a.data(this, "selectable-item");
                    d.startselected = !0, b.metaKey || b.ctrlKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, c._trigger("unselecting", b, {unselecting: d.element}))
                }), a(b.target).parents().addBack().each(function () {
                    var d, e = a.data(this, "selectable-item");
                    return e ? (d = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), e.$element.removeClass(d ? "ui-unselecting" : "ui-selected").addClass(d ? "ui-selecting" : "ui-unselecting"), e.unselecting = !d, e.selecting = d, e.selected = d, d ? c._trigger("selecting", b, {selecting: e.element}) : c._trigger("unselecting", b, {unselecting: e.element}), !1) : void 0
                }))
            },
            _mouseDrag: function (b) {
                if (this.dragged = !0, !this.options.disabled) {
                    var c, d = this, e = this.options, f = this.opos[0], g = this.opos[1], h = b.pageX, i = b.pageY;
                    return f > h && (c = h, h = f, f = c), g > i && (c = i, i = g, g = c), this.helper.css({
                        left: f,
                        top: g,
                        width: h - f,
                        height: i - g
                    }), this.selectees.each(function () {
                        var c = a.data(this, "selectable-item"), j = !1;
                        c && c.element !== d.element[0] && ("touch" === e.tolerance ? j = !(c.left > h || f > c.right || c.top > i || g > c.bottom) : "fit" === e.tolerance && (j = c.left > f && h > c.right && c.top > g && i > c.bottom), j ? (c.selected && (c.$element.removeClass("ui-selected"), c.selected = !1), c.unselecting && (c.$element.removeClass("ui-unselecting"), c.unselecting = !1), c.selecting || (c.$element.addClass("ui-selecting"), c.selecting = !0, d._trigger("selecting", b, {selecting: c.element}))) : (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.$element.addClass("ui-selected"), c.selected = !0) : (c.$element.removeClass("ui-selecting"), c.selecting = !1, c.startselected && (c.$element.addClass("ui-unselecting"), c.unselecting = !0), d._trigger("unselecting", b, {unselecting: c.element}))), c.selected && (b.metaKey || b.ctrlKey || c.startselected || (c.$element.removeClass("ui-selected"), c.selected = !1, c.$element.addClass("ui-unselecting"), c.unselecting = !0, d._trigger("unselecting", b, {unselecting: c.element})))))
                    }), !1
                }
            },
            _mouseStop: function (b) {
                var c = this;
                return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function () {
                    var d = a.data(this, "selectable-item");
                    d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, c._trigger("unselected", b, {unselected: d.element})
                }), a(".ui-selecting", this.element[0]).each(function () {
                    var d = a.data(this, "selectable-item");
                    d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, c._trigger("selected", b, {selected: d.element})
                }), this._trigger("stop", b), this.helper.remove(), !1
            }
        })
    }(d), function (a) {
        function b(a, b, c) {
            return a > b && b + c > a
        }

        function c(a) {
            return /left|right/.test(a.css("float")) || /inline|table-cell/.test(a.css("display"))
        }

        a.widget("ui.sortable", a.ui.mouse, {
            version: "1.10.3",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _create: function () {
                var a = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === a.axis || c(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
            },
            _destroy: function () {
                this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
                for (var a = this.items.length - 1; a >= 0; a--)this.items[a].item.removeData(this.widgetName + "-item");
                return this
            },
            _setOption: function (b, c) {
                "disabled" === b ? (this.options[b] = c, this.widget().toggleClass("ui-sortable-disabled", !!c)) : a.Widget.prototype._setOption.apply(this, arguments)
            },
            _mouseCapture: function (b, c) {
                var d = null, e = !1, f = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(b), a(b.target).parents().each(function () {
                    return a.data(this, f.widgetName + "-item") === f ? (d = a(this), !1) : void 0
                }), a.data(b.target, f.widgetName + "-item") === f && (d = a(b.target)), d ? !this.options.handle || c || (a(this.options.handle, d).find("*").addBack().each(function () {
                    this === b.target && (e = !0)
                }), e) ? (this.currentItem = d, this._removeCurrentsFromItems(), !0) : !1 : !1)
            },
            _mouseStart: function (b, c, d) {
                var e, f, g = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(b), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, a.extend(this.offset, {
                        click: {left: b.pageX - this.offset.left, top: b.pageY - this.offset.top},
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(b), this.originalPageX = b.pageX, this.originalPageY = b.pageY, g.cursorAt && this._adjustOffsetFromHelper(g.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), g.containment && this._setContainment(), g.cursor && "auto" !== g.cursor && (f = this.document.find("body"), this.storedCursor = f.css("cursor"), f.css("cursor", g.cursor), this.storedStylesheet = a("<style>*{ cursor: " + g.cursor + " !important; }</style>").appendTo(f)), g.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", g.opacity)), g.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", g.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", b, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !d)for (e = this.containers.length - 1; e >= 0; e--)this.containers[e]._trigger("activate", b, this._uiHash(this));
                return a.ui.ddmanager && (a.ui.ddmanager.current = this), a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(b), !0
            },
            _mouseDrag: function (b) {
                var c, d, e, f, g = this.options, h = !1;
                for (this.position = this._generatePosition(b), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < g.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + g.scrollSpeed : b.pageY - this.overflowOffset.top < g.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - g.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < g.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + g.scrollSpeed : b.pageX - this.overflowOffset.left < g.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - g.scrollSpeed)) : (b.pageY - a(document).scrollTop() < g.scrollSensitivity ? h = a(document).scrollTop(a(document).scrollTop() - g.scrollSpeed) : a(window).height() - (b.pageY - a(document).scrollTop()) < g.scrollSensitivity && (h = a(document).scrollTop(a(document).scrollTop() + g.scrollSpeed)), b.pageX - a(document).scrollLeft() < g.scrollSensitivity ? h = a(document).scrollLeft(a(document).scrollLeft() - g.scrollSpeed) : a(window).width() - (b.pageX - a(document).scrollLeft()) < g.scrollSensitivity && (h = a(document).scrollLeft(a(document).scrollLeft() + g.scrollSpeed))), h !== !1 && a.ui.ddmanager && !g.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), c = this.items.length - 1; c >= 0; c--)if (d = this.items[c], e = d.item[0], f = this._intersectsWithPointer(d), f && d.instance === this.currentContainer && e !== this.currentItem[0] && this.placeholder[1 === f ? "next" : "prev"]()[0] !== e && !a.contains(this.placeholder[0], e) && ("semi-dynamic" === this.options.type ? !a.contains(this.element[0], e) : !0)) {
                    if (this.direction = 1 === f ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(d))break;
                    this._rearrange(b, d), this._trigger("change", b, this._uiHash());
                    break
                }
                return this._contactContainers(b), a.ui.ddmanager && a.ui.ddmanager.drag(this, b), this._trigger("sort", b, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function (b, c) {
                if (b) {
                    if (a.ui.ddmanager && !this.options.dropBehaviour && a.ui.ddmanager.drop(this, b), this.options.revert) {
                        var d = this, e = this.placeholder.offset(), f = this.options.axis, g = {};
                        f && "x" !== f || (g.left = e.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), f && "y" !== f || (g.top = e.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, a(this.helper).animate(g, parseInt(this.options.revert, 10) || 500, function () {
                            d._clear(b)
                        })
                    } else this._clear(b, c);
                    return !1
                }
            },
            cancel: function () {
                if (this.dragging) {
                    this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var b = this.containers.length - 1; b >= 0; b--)this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), a.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? a(this.domPosition.prev).after(this.currentItem) : a(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function (b) {
                var c = this._getItemsAsjQuery(b && b.connected), d = [];
                return b = b || {}, a(c).each(function () {
                    var c = (a(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/);
                    c && d.push((b.key || c[1] + "[]") + "=" + (b.key && b.expression ? c[1] : c[2]))
                }), !d.length && b.key && d.push(b.key + "="), d.join("&")
            },
            toArray: function (b) {
                var c = this._getItemsAsjQuery(b && b.connected), d = [];
                return b = b || {}, c.each(function () {
                    d.push(a(b.item || this).attr(b.attribute || "id") || "")
                }), d
            },
            _intersectsWith: function (a) {
                var b = this.positionAbs.left, c = b + this.helperProportions.width, d = this.positionAbs.top, e = d + this.helperProportions.height, f = a.left, g = f + a.width, h = a.top, i = h + a.height, j = this.offset.click.top, k = this.offset.click.left, l = "x" === this.options.axis || d + j > h && i > d + j, m = "y" === this.options.axis || b + k > f && g > b + k, n = l && m;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? n : b + this.helperProportions.width / 2 > f && g > c - this.helperProportions.width / 2 && d + this.helperProportions.height / 2 > h && i > e - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function (a) {
                var c = "x" === this.options.axis || b(this.positionAbs.top + this.offset.click.top, a.top, a.height), d = "y" === this.options.axis || b(this.positionAbs.left + this.offset.click.left, a.left, a.width), e = c && d, f = this._getDragVerticalDirection(), g = this._getDragHorizontalDirection();
                return e ? this.floating ? g && "right" === g || "down" === f ? 2 : 1 : f && ("down" === f ? 2 : 1) : !1
            },
            _intersectsWithSides: function (a) {
                var c = b(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height), d = b(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width), e = this._getDragVerticalDirection(), f = this._getDragHorizontalDirection();
                return this.floating && f ? "right" === f && d || "left" === f && !d : e && ("down" === e && c || "up" === e && !c)
            },
            _getDragVerticalDirection: function () {
                var a = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== a && (a > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function () {
                var a = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== a && (a > 0 ? "right" : "left")
            },
            refresh: function (a) {
                return this._refreshItems(a), this.refreshPositions(), this
            },
            _connectWith: function () {
                var a = this.options;
                return a.connectWith.constructor === String ? [a.connectWith] : a.connectWith
            },
            _getItemsAsjQuery: function (b) {
                var c, d, e, f, g = [], h = [], i = this._connectWith();
                if (i && b)for (c = i.length - 1; c >= 0; c--)for (e = a(i[c]), d = e.length - 1; d >= 0; d--)f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && h.push([a.isFunction(f.options.items) ? f.options.items.call(f.element) : a(f.options.items, f.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), f]);
                for (h.push([a.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : a(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), c = h.length - 1; c >= 0; c--)h[c][0].each(function () {
                    g.push(this)
                });
                return a(g)
            },
            _removeCurrentsFromItems: function () {
                var b = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = a.grep(this.items, function (a) {
                    for (var c = 0; b.length > c; c++)if (b[c] === a.item[0])return !1;
                    return !0
                })
            },
            _refreshItems: function (b) {
                this.items = [], this.containers = [this];
                var c, d, e, f, g, h, i, j, k = this.items, l = [[a.isFunction(this.options.items) ? this.options.items.call(this.element[0], b, {item: this.currentItem}) : a(this.options.items, this.element), this]], m = this._connectWith();
                if (m && this.ready)for (c = m.length - 1; c >= 0; c--)for (e = a(m[c]), d = e.length - 1; d >= 0; d--)f = a.data(e[d], this.widgetFullName), f && f !== this && !f.options.disabled && (l.push([a.isFunction(f.options.items) ? f.options.items.call(f.element[0], b, {item: this.currentItem}) : a(f.options.items, f.element), f]), this.containers.push(f));
                for (c = l.length - 1; c >= 0; c--)for (g = l[c][1], h = l[c][0], d = 0, j = h.length; j > d; d++)i = a(h[d]), i.data(this.widgetName + "-item", g), k.push({
                    item: i,
                    instance: g,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            },
            refreshPositions: function (b) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var c, d, e, f;
                for (c = this.items.length - 1; c >= 0; c--)d = this.items[c], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (e = this.options.toleranceElement ? a(this.options.toleranceElement, d.item) : d.item, b || (d.width = e.outerWidth(), d.height = e.outerHeight()), f = e.offset(), d.left = f.left, d.top = f.top);
                if (this.options.custom && this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this); else for (c = this.containers.length - 1; c >= 0; c--)f = this.containers[c].element.offset(), this.containers[c].containerCache.left = f.left, this.containers[c].containerCache.top = f.top, this.containers[c].containerCache.width = this.containers[c].element.outerWidth(), this.containers[c].containerCache.height = this.containers[c].element.outerHeight();
                return this
            },
            _createPlaceholder: function (b) {
                b = b || this;
                var c, d = b.options;
                d.placeholder && d.placeholder.constructor !== String || (c = d.placeholder, d.placeholder = {
                    element: function () {
                        var d = b.currentItem[0].nodeName.toLowerCase(), e = a("<" + d + ">", b.document[0]).addClass(c || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tr" === d ? b.currentItem.children().each(function () {
                            a("<td>&#160;</td>", b.document[0]).attr("colspan", a(this).attr("colspan") || 1).appendTo(e)
                        }) : "img" === d && e.attr("src", b.currentItem.attr("src")), c || e.css("visibility", "hidden"), e
                    }, update: function (a, e) {
                        (!c || d.forcePlaceholderSize) && (e.height() || e.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), b.placeholder = a(d.placeholder.element.call(b.element, b.currentItem)), b.currentItem.after(b.placeholder), d.placeholder.update(b, b.placeholder)
            },
            _contactContainers: function (d) {
                var e, f, g, h, i, j, k, l, m, n, o = null, p = null;
                for (e = this.containers.length - 1; e >= 0; e--)if (!a.contains(this.currentItem[0], this.containers[e].element[0]))if (this._intersectsWith(this.containers[e].containerCache)) {
                    if (o && a.contains(this.containers[e].element[0], o.element[0]))continue;
                    o = this.containers[e], p = e
                } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", d, this._uiHash(this)), this.containers[e].containerCache.over = 0);
                if (o)if (1 === this.containers.length)this.containers[p].containerCache.over || (this.containers[p]._trigger("over", d, this._uiHash(this)), this.containers[p].containerCache.over = 1); else {
                    for (g = 1e4, h = null, n = o.floating || c(this.currentItem), i = n ? "left" : "top", j = n ? "width" : "height", k = this.positionAbs[i] + this.offset.click[i], f = this.items.length - 1; f >= 0; f--)a.contains(this.containers[p].element[0], this.items[f].item[0]) && this.items[f].item[0] !== this.currentItem[0] && (!n || b(this.positionAbs.top + this.offset.click.top, this.items[f].top, this.items[f].height)) && (l = this.items[f].item.offset()[i], m = !1, Math.abs(l - k) > Math.abs(l + this.items[f][j] - k) && (m = !0, l += this.items[f][j]), g > Math.abs(l - k) && (g = Math.abs(l - k), h = this.items[f], this.direction = m ? "up" : "down"));
                    if (!h && !this.options.dropOnEmpty)return;
                    if (this.currentContainer === this.containers[p])return;
                    h ? this._rearrange(d, h, null, !0) : this._rearrange(d, null, this.containers[p].element, !0), this._trigger("change", d, this._uiHash()), this.containers[p]._trigger("change", d, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", d, this._uiHash(this)), this.containers[p].containerCache.over = 1
                }
            },
            _createHelper: function (b) {
                var c = this.options, d = a.isFunction(c.helper) ? a(c.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === c.helper ? this.currentItem.clone() : this.currentItem;
                return d.parents("body").length || a("parent" !== c.appendTo ? c.appendTo : this.currentItem[0].parentNode)[0].appendChild(d[0]), d[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!d[0].style.width || c.forceHelperSize) && d.width(this.currentItem.width()), (!d[0].style.height || c.forceHelperSize) && d.height(this.currentItem.height()), d
            },
            _adjustOffsetFromHelper: function (b) {
                "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                    left: +b[0],
                    top: +b[1] || 0
                }), "left"in b && (this.offset.click.left = b.left + this.margins.left), "right"in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top"in b && (this.offset.click.top = b.top + this.margins.top), "bottom"in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var b = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                    top: 0,
                    left: 0
                }), {
                    top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" === this.cssPosition) {
                    var a = this.currentItem.position();
                    return {
                        top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {top: 0, left: 0}
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
            },
            _setContainment: function () {
                var b, c, d, e = this.options;
                "parent" === e.containment && (e.containment = this.helper[0].parentNode), ("document" === e.containment || "window" === e.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, a("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (a("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(e.containment) || (b = a(e.containment)[0], c = a(e.containment).offset(), d = "hidden" !== a(b).css("overflow"), this.containment = [c.left + (parseInt(a(b).css("borderLeftWidth"), 10) || 0) + (parseInt(a(b).css("paddingLeft"), 10) || 0) - this.margins.left, c.top + (parseInt(a(b).css("borderTopWidth"), 10) || 0) + (parseInt(a(b).css("paddingTop"), 10) || 0) - this.margins.top, c.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(a(b).css("borderLeftWidth"), 10) || 0) - (parseInt(a(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, c.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(a(b).css("borderTopWidth"), 10) || 0) - (parseInt(a(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function (b, c) {
                c || (c = this.position);
                var d = "absolute" === b ? 1 : -1, e = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, f = /(html|body)/i.test(e[0].tagName);
                return {
                    top: c.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : f ? 0 : e.scrollTop()) * d,
                    left: c.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : f ? 0 : e.scrollLeft()) * d
                }
            },
            _generatePosition: function (b) {
                var c, d, e = this.options, f = b.pageX, g = b.pageY, h = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, i = /(html|body)/i.test(h[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (g = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (g = this.containment[3] + this.offset.click.top)), e.grid && (c = this.originalPageY + Math.round((g - this.originalPageY) / e.grid[1]) * e.grid[1], g = this.containment ? c - this.offset.click.top >= this.containment[1] && c - this.offset.click.top <= this.containment[3] ? c : c - this.offset.click.top >= this.containment[1] ? c - e.grid[1] : c + e.grid[1] : c, d = this.originalPageX + Math.round((f - this.originalPageX) / e.grid[0]) * e.grid[0], f = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - e.grid[0] : d + e.grid[0] : d)), {
                    top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : i ? 0 : h.scrollTop()),
                    left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : i ? 0 : h.scrollLeft())
                }
            },
            _rearrange: function (a, b, c, d) {
                c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? b.item[0] : b.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var e = this.counter;
                this._delay(function () {
                    e === this.counter && this.refreshPositions(!d)
                })
            },
            _clear: function (a, b) {
                this.reverting = !1;
                var c, d = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (c in this._storedCSS)("auto" === this._storedCSS[c] || "static" === this._storedCSS[c]) && (this._storedCSS[c] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !b && d.push(function (a) {
                    this._trigger("receive", a, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || b || d.push(function (a) {
                    this._trigger("update", a, this._uiHash())
                }), this !== this.currentContainer && (b || (d.push(function (a) {
                    this._trigger("remove", a, this._uiHash())
                }), d.push(function (a) {
                    return function (b) {
                        a._trigger("receive", b, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), d.push(function (a) {
                    return function (b) {
                        a._trigger("update", b, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), c = this.containers.length - 1; c >= 0; c--)b || d.push(function (a) {
                    return function (b) {
                        a._trigger("deactivate", b, this._uiHash(this))
                    }
                }.call(this, this.containers[c])), this.containers[c].containerCache.over && (d.push(function (a) {
                    return function (b) {
                        a._trigger("out", b, this._uiHash(this))
                    }
                }.call(this, this.containers[c])), this.containers[c].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                    if (!b) {
                        for (this._trigger("beforeStop", a, this._uiHash()), c = 0; d.length > c; c++)d[c].call(this, a);
                        this._trigger("stop", a, this._uiHash())
                    }
                    return this.fromOutside = !1, !1
                }
                if (b || this._trigger("beforeStop", a, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !b) {
                    for (c = 0; d.length > c; c++)d[c].call(this, a);
                    this._trigger("stop", a, this._uiHash())
                }
                return this.fromOutside = !1, !0
            },
            _trigger: function () {
                a.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function (b) {
                var c = b || this;
                return {
                    helper: c.helper,
                    placeholder: c.placeholder || a([]),
                    position: c.position,
                    originalPosition: c.originalPosition,
                    offset: c.positionAbs,
                    item: c.currentItem,
                    sender: b ? b.element : null
                }
            }
        })
    }(d), function (a) {
        var b = 0, c = {}, d = {};
        c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "hide", d.height = d.paddingTop = d.paddingBottom = d.borderTopWidth = d.borderBottomWidth = "show", a.widget("ui.accordion", {
            version: "1.10.3",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
                activate: null,
                beforeActivate: null
            },
            _create: function () {
                var b = this.options;
                this.prevShow = this.prevHide = a(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), b.collapsible || b.active !== !1 && null != b.active || (b.active = 0), this._processPanels(), 0 > b.active && (b.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function () {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : a(),
                    content: this.active.length ? this.active.next() : a()
                }
            },
            _createIcons: function () {
                var b = this.options.icons;
                b && (a("<span>").addClass("ui-accordion-header-icon ui-icon " + b.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function () {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function () {
                var a;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), this._destroyIcons(), a = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
                    /^ui-accordion/.test(this.id) && this.removeAttribute("id")
                }), "content" !== this.options.heightStyle && a.css("height", "")
            },
            _setOption: function (a, b) {
                return "active" === a ? void this._activate(b) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || this.options.active !== !1 || this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()), void("disabled" === a && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!b)))
            },
            _keydown: function (b) {
                if (!b.altKey && !b.ctrlKey) {
                    var c = a.ui.keyCode, d = this.headers.length, e = this.headers.index(b.target), f = !1;
                    switch (b.keyCode) {
                        case c.RIGHT:
                        case c.DOWN:
                            f = this.headers[(e + 1) % d];
                            break;
                        case c.LEFT:
                        case c.UP:
                            f = this.headers[(e - 1 + d) % d];
                            break;
                        case c.SPACE:
                        case c.ENTER:
                            this._eventHandler(b);
                            break;
                        case c.HOME:
                            f = this.headers[0];
                            break;
                        case c.END:
                            f = this.headers[d - 1]
                    }
                    f && (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), b.preventDefault())
                }
            },
            _panelKeyDown: function (b) {
                b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus()
            },
            refresh: function () {
                var b = this.options;
                this._processPanels(), b.active === !1 && b.collapsible === !0 || !this.headers.length ? (b.active = !1, this.active = a()) : b.active === !1 ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function () {
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
            },
            _refresh: function () {
                var c, d = this.options, e = d.heightStyle, f = this.element.parent(), g = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++b);
                this.active = this._findActive(d.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (b) {
                    var c = a(this), d = c.attr("id"), e = c.next(), f = e.attr("id");
                    d || (d = g + "-header-" + b, c.attr("id", d)), f || (f = g + "-panel-" + b, e.attr("id", f)), c.attr("aria-controls", f), e.attr("aria-labelledby", d)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(d.event), "fill" === e ? (c = f.height(), this.element.siblings(":visible").each(function () {
                    var b = a(this), d = b.css("position");
                    "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
                }), this.headers.each(function () {
                    c -= a(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (c = 0, this.headers.next().each(function () {
                    c = Math.max(c, a(this).css("height", "").height())
                }).height(c))
            },
            _activate: function (b) {
                var c = this._findActive(b)[0];
                c !== this.active[0] && (c = c || this.active[0], this._eventHandler({
                    target: c,
                    currentTarget: c,
                    preventDefault: a.noop
                }))
            },
            _findActive: function (b) {
                return "number" == typeof b ? this.headers.eq(b) : a()
            },
            _setupEvents: function (b) {
                var c = {keydown: "_keydown"};
                b && a.each(b.split(" "), function (a, b) {
                    c[b] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, c), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function (b) {
                var c = this.options, d = this.active, e = a(b.currentTarget), f = e[0] === d[0], g = f && c.collapsible, h = g ? a() : e.next(), i = d.next(), j = {
                    oldHeader: d,
                    oldPanel: i,
                    newHeader: g ? a() : e,
                    newPanel: h
                };
                b.preventDefault(), f && !c.collapsible || this._trigger("beforeActivate", b, j) === !1 || (c.active = g ? !1 : this.headers.index(e), this.active = f ? a() : e, this._toggle(j), d.removeClass("ui-accordion-header-active ui-state-active"), c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), f || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), e.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function (b) {
                var c = b.newPanel, d = this.prevShow.length ? this.prevShow : b.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = c, this.prevHide = d, this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b)), d.attr({
                    "aria-expanded": "false",
                    "aria-hidden": "true"
                }), d.prev().attr("aria-selected", "false"), c.length && d.length ? d.prev().attr("tabIndex", -1) : c.length && this.headers.filter(function () {
                    return 0 === a(this).attr("tabIndex")
                }).attr("tabIndex", -1), c.attr({
                    "aria-expanded": "true",
                    "aria-hidden": "false"
                }).prev().attr({"aria-selected": "true", tabIndex: 0})
            },
            _animate: function (a, b, e) {
                var f, g, h, i = this, j = 0, k = a.length && (!b.length || a.index() < b.index()), l = this.options.animate || {}, m = k && l.down || l, n = function () {
                    i._toggleComplete(e)
                };
                return "number" == typeof m && (h = m), "string" == typeof m && (g = m), g = g || m.easing || l.easing, h = h || m.duration || l.duration, b.length ? a.length ? (f = a.show().outerHeight(), b.animate(c, {
                    duration: h,
                    easing: g,
                    step: function (a, b) {
                        b.now = Math.round(a)
                    }
                }), void a.hide().animate(d, {
                    duration: h, easing: g, complete: n, step: function (a, c) {
                        c.now = Math.round(a), "height" !== c.prop ? j += c.now : "content" !== i.options.heightStyle && (c.now = Math.round(f - b.outerHeight() - j), j = 0)
                    }
                })) : b.animate(c, h, g, n) : a.animate(d, h, g, n)
            },
            _toggleComplete: function (a) {
                var b = a.oldPanel;
                b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), b.length && (b.parent()[0].className = b.parent()[0].className), this._trigger("activate", null, a)
            }
        })
    }(d), function (a) {
        var b, c, d, e, f = "ui-button ui-widget ui-state-default ui-corner-all", g = "ui-state-hover ui-state-active ", h = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only", i = function () {
            var b = a(this);
            setTimeout(function () {
                b.find(":ui-button").button("refresh")
            }, 1)
        }, j = function (b) {
            var c = b.name, d = b.form, e = a([]);
            return c && (c = c.replace(/'/g, "\\'"), e = d ? a(d).find("[name='" + c + "']") : a("[name='" + c + "']", b.ownerDocument).filter(function () {
                return !this.form
            })), e
        };
        a.widget("ui.button", {
            version: "1.10.3",
            defaultElement: "<button>",
            options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}},
            _create: function () {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, i), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var g = this, h = this.options, k = "checkbox" === this.type || "radio" === this.type, l = k ? "" : "ui-state-active", m = "ui-state-focus";
                null === h.label && (h.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(f).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                    h.disabled || this === b && a(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function () {
                    h.disabled || a(this).removeClass(l)
                }).bind("click" + this.eventNamespace, function (a) {
                    h.disabled && (a.preventDefault(), a.stopImmediatePropagation())
                }), this.element.bind("focus" + this.eventNamespace, function () {
                    g.buttonElement.addClass(m)
                }).bind("blur" + this.eventNamespace, function () {
                    g.buttonElement.removeClass(m)
                }), k && (this.element.bind("change" + this.eventNamespace, function () {
                    e || g.refresh()
                }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (a) {
                    h.disabled || (e = !1, c = a.pageX, d = a.pageY)
                }).bind("mouseup" + this.eventNamespace, function (a) {
                    h.disabled || (c !== a.pageX || d !== a.pageY) && (e = !0)
                })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                    return h.disabled || e ? !1 : void 0
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                    if (h.disabled || e)return !1;
                    a(this).addClass("ui-state-active"), g.buttonElement.attr("aria-pressed", "true");
                    var b = g.element[0];
                    j(b).not(b).map(function () {
                        return a(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                    return h.disabled ? !1 : (a(this).addClass("ui-state-active"), b = this, void g.document.one("mouseup", function () {
                        b = null
                    }))
                }).bind("mouseup" + this.eventNamespace, function () {
                    return h.disabled ? !1 : void a(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function (b) {
                    return h.disabled ? !1 : void((b.keyCode === a.ui.keyCode.SPACE || b.keyCode === a.ui.keyCode.ENTER) && a(this).addClass("ui-state-active"))
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                    a(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function (b) {
                    b.keyCode === a.ui.keyCode.SPACE && a(this).click()
                })), this._setOption("disabled", h.disabled), this._resetButton()
            },
            _determineButtonType: function () {
                var a, b, c;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (a = this.element.parents().last(), b = "label[for='" + this.element.attr("id") + "']", this.buttonElement = a.find(b), this.buttonElement.length || (a = a.length ? a.siblings() : this.element.siblings(), this.buttonElement = a.filter(b), this.buttonElement.length || (this.buttonElement = a.find(b))), this.element.addClass("ui-helper-hidden-accessible"), c = this.element.is(":checked"), c && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", c)) : this.buttonElement = this.element
            },
            widget: function () {
                return this.buttonElement
            },
            _destroy: function () {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(f + " " + g + " " + h).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function (a, b) {
                return this._super(a, b), "disabled" === a ? void(b ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1)) : void this._resetButton()
            },
            refresh: function () {
                var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                b !== this.options.disabled && this._setOption("disabled", b), "radio" === this.type ? j(this.element[0]).each(function () {
                    a(this).is(":checked") ? a(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function () {
                if ("input" === this.type)return void(this.options.label && this.element.val(this.options.label));
                var b = this.buttonElement.removeClass(h), c = a("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(), d = this.options.icons, e = d.primary && d.secondary, f = [];
                d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (e ? "s" : d.primary ? "-primary" : "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", a.trim(c)))) : f.push("ui-button-text-only"), b.addClass(f.join(" "))
            }
        }), a.widget("ui.buttonset", {
            version: "1.10.3",
            options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},
            _create: function () {
                this.element.addClass("ui-buttonset")
            },
            _init: function () {
                this.refresh()
            },
            _setOption: function (a, b) {
                "disabled" === a && this.buttons.button("option", a, b), this._super(a, b)
            },
            refresh: function () {
                var b = "rtl" === this.element.css("direction");
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function () {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                    return a(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        })
    }(d), function (a, b) {
        function c() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, a.extend(this._defaults, this.regional[""]), this.dpDiv = d(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function d(b) {
            var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return b.delegate(c, "mouseout", function () {
                a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover")
            }).delegate(c, "mouseover", function () {
                a.datepicker._isDisabledDatepicker(f.inline ? b.parent()[0] : f.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"))
            })
        }

        function e(b, c) {
            a.extend(b, c);
            for (var d in c)null == c[d] && (b[d] = c[d]);
            return b
        }

        a.extend(a.ui, {datepicker: {version: "1.10.3"}});
        var f, g = "datepicker";
        a.extend(c.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function () {
                return this.dpDiv
            },
            setDefaults: function (a) {
                return e(this._defaults, a || {}), this
            },
            _attachDatepicker: function (b, c) {
                var d, e, f;
                d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f)
            },
            _newInst: function (b, c) {
                var e = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: e,
                    input: b,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: c,
                    dpDiv: c ? d(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function (b, c) {
                var d = a(b);
                c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, g, c), c.settings.disabled && this._disableDatepicker(b))
            },
            _attachments: function (b, c) {
                var d, e, f, g = this._get(c, "appendText"), h = this._get(c, "isRTL");
                c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.focus(this._showDatepicker), ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: e,
                    title: e
                }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
                    src: f,
                    alt: e,
                    title: e
                }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function () {
                    return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1
                }))
            },
            _autoSize: function (a) {
                if (this._get(a, "autoSize") && !a.inline) {
                    var b, c, d, e, f = new Date(2009, 11, 20), g = this._get(a, "dateFormat");
                    g.match(/[DM]/) && (b = function (a) {
                        for (c = 0, d = 0, e = 0; a.length > e; e++)a[e].length > c && (c = a[e].length, d = e);
                        return d
                    }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
                }
            },
            _inlineDatepicker: function (b, c) {
                var d = a(b);
                d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, g, c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function (b, c, d, f, h) {
                var i, j, k, l, m, n = this._dialogInst;
                return n || (this.uuid += 1, i = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + i + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), n = this._dialogInst = this._newInst(this._dialogInput, !1), n.settings = {}, a.data(this._dialogInput[0], g, n)), e(n.settings, f || {}), c = c && c.constructor === Date ? this._formatDate(n, c) : c, this._dialogInput.val(c), this._pos = h ? h.length ? h : [h.pageX, h.pageY] : null, this._pos || (j = document.documentElement.clientWidth, k = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, m = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [j / 2 - 100 + l, k / 2 - 150 + m]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), n.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], g, n), this
            },
            _destroyDatepicker: function (b) {
                var c, d = a(b), e = a.data(b, g);
                d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, g), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty())
            },
            _enableDatepicker: function (b) {
                var c, d, e = a(b), f = a.data(b, g);
                e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function (a) {
                    return a === b ? null : a
                }))
            },
            _disableDatepicker: function (b) {
                var c, d, e = a(b), f = a.data(b, g);
                e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function (a) {
                    return a === b ? null : a
                }), this._disabledInputs[this._disabledInputs.length] = b)
            },
            _isDisabledDatepicker: function (a) {
                if (!a)return !1;
                for (var b = 0; this._disabledInputs.length > b; b++)if (this._disabledInputs[b] === a)return !0;
                return !1
            },
            _getInst: function (b) {
                try {
                    return a.data(b, g)
                } catch (c) {
                    throw"Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function (c, d, f) {
                var g, h, i, j, k = this._getInst(c);
                return 2 === arguments.length && "string" == typeof d ? "defaults" === d ? a.extend({}, a.datepicker._defaults) : k ? "all" === d ? a.extend({}, k.settings) : this._get(k, d) : null : (g = d || {}, "string" == typeof d && (g = {}, g[d] = f), k && (this._curInst === k && this._hideDatepicker(), h = this._getDateDatepicker(c, !0), i = this._getMinMaxDate(k, "min"), j = this._getMinMaxDate(k, "max"), e(k.settings, g), null !== i && g.dateFormat !== b && g.minDate === b && (k.settings.minDate = this._formatDate(k, i)), null !== j && g.dateFormat !== b && g.maxDate === b && (k.settings.maxDate = this._formatDate(k, j)), "disabled"in g && (g.disabled ? this._disableDatepicker(c) : this._enableDatepicker(c)), this._attachments(a(c), k), this._autoSize(k), this._setDate(k, h), this._updateAlternate(k), this._updateDatepicker(k)), b)
            },
            _changeDatepicker: function (a, b, c) {
                this._optionDatepicker(a, b, c)
            },
            _refreshDatepicker: function (a) {
                var b = this._getInst(a);
                b && this._updateDatepicker(b)
            },
            _setDateDatepicker: function (a, b) {
                var c = this._getInst(a);
                c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
            },
            _getDateDatepicker: function (a, b) {
                var c = this._getInst(a);
                return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
            },
            _doKeyDown: function (b) {
                var c, d, e, f = a.datepicker._getInst(b.target), g = !0, h = f.dpDiv.is(".ui-datepicker-rtl");
                if (f._keyEvent = !0, a.datepicker._datepickerShowing)switch (b.keyCode) {
                    case 9:
                        a.datepicker._hideDatepicker(), g = !1;
                        break;
                    case 13:
                        return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
                    case 27:
                        a.datepicker._hideDatepicker();
                        break;
                    case 33:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 34:
                        a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 35:
                        (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
                        break;
                    case 36:
                        (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
                        break;
                    case 37:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 38:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
                        break;
                    case 39:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
                        break;
                    case 40:
                        (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
                        break;
                    default:
                        g = !1
                } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
                g && (b.preventDefault(), b.stopPropagation())
            },
            _doKeyPress: function (c) {
                var d, e, f = a.datepicker._getInst(c.target);
                return a.datepicker._get(f, "constrainInput") ? (d = a.datepicker._possibleChars(a.datepicker._get(f, "dateFormat")), e = String.fromCharCode(null == c.charCode ? c.keyCode : c.charCode), c.ctrlKey || c.metaKey || " " > e || !d || d.indexOf(e) > -1) : b
            },
            _doKeyUp: function (b) {
                var c, d = a.datepicker._getInst(b.target);
                if (d.input.val() !== d.lastVal)try {
                    c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d))
                } catch (e) {
                }
                return !0
            },
            _showDatepicker: function (b) {
                if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
                    var c, d, f, g, h, i, j;
                    c = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), d = a.datepicker._get(c, "beforeShow"), f = d ? d.apply(b, [b, c]) : {}, f !== !1 && (e(c.settings, f), c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function () {
                        return g |= "fixed" === a(this).css("position"), !g
                    }), h = {
                        left: a.datepicker._pos[0],
                        top: a.datepicker._pos[1]
                    }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), a.datepicker._updateDatepicker(c), h = a.datepicker._checkOffset(c, h, g), c.dpDiv.css({
                        position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
                        display: "none",
                        left: h.left + "px",
                        top: h.top + "px"
                    }), c.inline || (i = a.datepicker._get(c, "showAnim"), j = a.datepicker._get(c, "duration"), c.dpDiv.zIndex(a(b).zIndex() + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[i] ? c.dpDiv.show(i, a.datepicker._get(c, "showOptions"), j) : c.dpDiv[i || "show"](i ? j : null), a.datepicker._shouldFocusInput(c) && c.input.focus(), a.datepicker._curInst = c))
                }
            },
            _updateDatepicker: function (b) {
                this.maxRows = 4, f = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b), b.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var c, d = this._getNumberOfMonths(b), e = d[1], g = 17;
                b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", g * e + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(), b.yearshtml && (c = b.yearshtml, setTimeout(function () {
                    c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function (a) {
                return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
            },
            _checkOffset: function (b, c, d) {
                var e = b.dpDiv.outerWidth(), f = b.dpDiv.outerHeight(), g = b.input ? b.input.outerWidth() : 0, h = b.input ? b.input.outerHeight() : 0, i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()), j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
                return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
            },
            _findPos: function (b) {
                for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));)b = b[e ? "previousSibling" : "nextSibling"];
                return c = a(b).offset(), [c.left, c.top]
            },
            _hideDatepicker: function (b) {
                var c, d, e, f, h = this._curInst;
                !h || b && h !== a.data(b, g) || this._datepickerShowing && (c = this._get(h, "showAnim"), d = this._get(h, "duration"), e = function () {
                    a.datepicker._tidyDialog(h)
                }, a.effects && (a.effects.effect[c] || a.effects[c]) ? h.dpDiv.hide(c, a.datepicker._get(h, "showOptions"), d, e) : h.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(h, "onClose"), f && f.apply(h.input ? h.input[0] : null, [h.input ? h.input.val() : "", h]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function (a) {
                a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function (b) {
                if (a.datepicker._curInst) {
                    var c = a(b.target), d = a.datepicker._getInst(c[0]);
                    (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function (b, c, d) {
                var e = a(b), f = this._getInst(e[0]);
                this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
            },
            _gotoToday: function (b) {
                var c, d = a(b), e = this._getInst(d[0]);
                this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d)
            },
            _selectMonthYear: function (b, c, d) {
                var e = a(b), f = this._getInst(e[0]);
                f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e)
            },
            _selectDay: function (b, c, d, e) {
                var f, g = a(b);
                a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
            },
            _clearDate: function (b) {
                var c = a(b);
                this._selectDate(c, "")
            },
            _selectDate: function (b, c) {
                var d, e = a(b), f = this._getInst(e[0]);
                c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function (b) {
                var c, d, e, f = this._get(b, "altField");
                f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function () {
                    a(this).val(e)
                }))
            },
            noWeekends: function (a) {
                var b = a.getDay();
                return [b > 0 && 6 > b, ""]
            },
            iso8601Week: function (a) {
                var b, c = new Date(a.getTime());
                return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
            },
            parseDate: function (c, d, e) {
                if (null == c || null == d)throw"Invalid arguments";
                if (d = "object" == typeof d ? "" + d : d + "", "" === d)return null;
                var f, g, h, i, j = 0, k = (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff, l = "string" != typeof k ? k : (new Date).getFullYear() % 100 + parseInt(k, 10), m = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort, n = (e ? e.dayNames : null) || this._defaults.dayNames, o = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort, p = (e ? e.monthNames : null) || this._defaults.monthNames, q = -1, r = -1, s = -1, t = -1, u = !1, v = function (a) {
                    var b = c.length > f + 1 && c.charAt(f + 1) === a;
                    return b && f++, b
                }, w = function (a) {
                    var b = v(a), c = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2, e = RegExp("^\\d{1," + c + "}"), f = d.substring(j).match(e);
                    if (!f)throw"Missing number at position " + j;
                    return j += f[0].length, parseInt(f[0], 10)
                }, x = function (c, e, f) {
                    var g = -1, h = a.map(v(c) ? f : e, function (a, b) {
                        return [[b, a]]
                    }).sort(function (a, b) {
                        return -(a[1].length - b[1].length)
                    });
                    if (a.each(h, function (a, c) {
                            var e = c[1];
                            return d.substr(j, e.length).toLowerCase() === e.toLowerCase() ? (g = c[0], j += e.length, !1) : b
                        }), -1 !== g)return g + 1;
                    throw"Unknown name at position " + j
                }, y = function () {
                    if (d.charAt(j) !== c.charAt(f))throw"Unexpected literal at position " + j;
                    j++
                };
                for (f = 0; c.length > f; f++)if (u)"'" !== c.charAt(f) || v("'") ? y() : u = !1; else switch (c.charAt(f)) {
                    case"d":
                        s = w("d");
                        break;
                    case"D":
                        x("D", m, n);
                        break;
                    case"o":
                        t = w("o");
                        break;
                    case"m":
                        r = w("m");
                        break;
                    case"M":
                        r = x("M", o, p);
                        break;
                    case"y":
                        q = w("y");
                        break;
                    case"@":
                        i = new Date(w("@")), q = i.getFullYear(), r = i.getMonth() + 1, s = i.getDate();
                        break;
                    case"!":
                        i = new Date((w("!") - this._ticksTo1970) / 1e4), q = i.getFullYear(), r = i.getMonth() + 1, s = i.getDate();
                        break;
                    case"'":
                        v("'") ? y() : u = !0;
                        break;
                    default:
                        y()
                }
                if (d.length > j && (h = d.substr(j), !/^\s+/.test(h)))throw"Extra/unparsed characters found in date: " + h;
                if (-1 === q ? q = (new Date).getFullYear() : 100 > q && (q += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= q ? 0 : -100)), t > -1)for (r = 1, s = t; g = this._getDaysInMonth(q, r - 1), !(g >= s);)r++, s -= g;
                if (i = this._daylightSavingAdjust(new Date(q, r - 1, s)), i.getFullYear() !== q || i.getMonth() + 1 !== r || i.getDate() !== s)throw"Invalid date";
                return i
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
            formatDate: function (a, b, c) {
                if (!b)return "";
                var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, h = (c ? c.monthNames : null) || this._defaults.monthNames, i = function (b) {
                    var c = a.length > d + 1 && a.charAt(d + 1) === b;
                    return c && d++, c
                }, j = function (a, b, c) {
                    var d = "" + b;
                    if (i(a))for (; c > d.length;)d = "0" + d;
                    return d
                }, k = function (a, b, c, d) {
                    return i(a) ? d[b] : c[b]
                }, l = "", m = !1;
                if (b)for (d = 0; a.length > d; d++)if (m)"'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1; else switch (a.charAt(d)) {
                    case"d":
                        l += j("d", b.getDate(), 2);
                        break;
                    case"D":
                        l += k("D", b.getDay(), e, f);
                        break;
                    case"o":
                        l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                        break;
                    case"m":
                        l += j("m", b.getMonth() + 1, 2);
                        break;
                    case"M":
                        l += k("M", b.getMonth(), g, h);
                        break;
                    case"y":
                        l += i("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() % 100;
                        break;
                    case"@":
                        l += b.getTime();
                        break;
                    case"!":
                        l += 1e4 * b.getTime() + this._ticksTo1970;
                        break;
                    case"'":
                        i("'") ? l += "'" : m = !0;
                        break;
                    default:
                        l += a.charAt(d)
                }
                return l
            },
            _possibleChars: function (a) {
                var b, c = "", d = !1, e = function (c) {
                    var d = a.length > b + 1 && a.charAt(b + 1) === c;
                    return d && b++, d
                };
                for (b = 0; a.length > b; b++)if (d)"'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1; else switch (a.charAt(b)) {
                    case"d":
                    case"m":
                    case"y":
                    case"@":
                        c += "0123456789";
                        break;
                    case"D":
                    case"M":
                        return null;
                    case"'":
                        e("'") ? c += "'" : d = !0;
                        break;
                    default:
                        c += a.charAt(b)
                }
                return c
            },
            _get: function (a, c) {
                return a.settings[c] !== b ? a.settings[c] : this._defaults[c]
            },
            _setDateFromField: function (a, b) {
                if (a.input.val() !== a.lastVal) {
                    var c = this._get(a, "dateFormat"), d = a.lastVal = a.input ? a.input.val() : null, e = this._getDefaultDate(a), f = e, g = this._getFormatConfig(a);
                    try {
                        f = this.parseDate(c, d, g) || e
                    } catch (h) {
                        d = b ? "" : d
                    }
                    a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
                }
            },
            _getDefaultDate: function (a) {
                return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
            },
            _determineDate: function (b, c, d) {
                var e = function (a) {
                    var b = new Date;
                    return b.setDate(b.getDate() + a), b
                }, f = function (c) {
                    try {
                        return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
                    } catch (d) {
                    }
                    for (var e = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j;) {
                        switch (j[2] || "d") {
                            case"d":
                            case"D":
                                h += parseInt(j[1], 10);
                                break;
                            case"w":
                            case"W":
                                h += 7 * parseInt(j[1], 10);
                                break;
                            case"m":
                            case"M":
                                g += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                                break;
                            case"y":
                            case"Y":
                                f += parseInt(j[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(f, g))
                        }
                        j = i.exec(c)
                    }
                    return new Date(f, g, h)
                }, g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
                return g = g && "Invalid Date" == "" + g ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g)
            },
            _daylightSavingAdjust: function (a) {
                return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
            },
            _setDate: function (a, b, c) {
                var d = !b, e = a.selectedMonth, f = a.selectedYear, g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
                a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
            },
            _getDate: function (a) {
                var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return b
            },
            _attachHandlers: function (b) {
                var c = this._get(b, "stepMonths"), d = "#" + b.id.replace(/\\\\/g, "\\");
                b.dpDiv.find("[data-handler]").map(function () {
                    var b = {
                        prev: function () {
                            a.datepicker._adjustDate(d, -c, "M")
                        }, next: function () {
                            a.datepicker._adjustDate(d, +c, "M")
                        }, hide: function () {
                            a.datepicker._hideDatepicker()
                        }, today: function () {
                            a.datepicker._gotoToday(d)
                        }, selectDay: function () {
                            return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        }, selectMonth: function () {
                            return a.datepicker._selectMonthYear(d, this, "M"), !1
                        }, selectYear: function () {
                            return a.datepicker._selectMonthYear(d, this, "Y"), !1
                        }
                    };
                    a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function (a) {
                var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date, P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())), Q = this._get(a, "isRTL"), R = this._get(a, "showButtonPanel"), S = this._get(a, "hideIfNoPrevNext"), T = this._get(a, "navigationAsDateFormat"), U = this._getNumberOfMonths(a), V = this._get(a, "showCurrentAtPos"), W = this._get(a, "stepMonths"), X = 1 !== U[0] || 1 !== U[1], Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)), Z = this._getMinMaxDate(a, "min"), $ = this._getMinMaxDate(a, "max"), _ = a.drawMonth - V, ab = a.drawYear;
                if (0 > _ && (_ += 12, ab--), $)for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(ab, _, 1)) > b;)_--, 0 > _ && (_ = 11, ab--);
                for (a.drawMonth = _, a.drawYear = ab, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(ab, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, ab, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(ab, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, ab, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; U[0] > w; w++) {
                    for (x = "", this.maxRows = 4, y = 0; U[1] > y; y++) {
                        if (z = this._daylightSavingAdjust(new Date(ab, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
                            if (B += "<div class='ui-datepicker-group", U[1] > 1)switch (y) {
                                case 0:
                                    B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                                    break;
                                case U[1] - 1:
                                    B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                                    break;
                                default:
                                    B += " ui-datepicker-group-middle", A = ""
                            }
                            B += "'>"
                        }
                        for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, ab, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++)D = (v + k) % 7, C += "<th" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
                        for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(ab, _), ab === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(ab, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X ? this.maxRows > G ? this.maxRows : G : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(ab, _, 1 - F)), J = 0; H > J; J++) {
                            for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; 7 > v; v++)L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
                            B += K + "</tr>"
                        }
                        _++, _ > 11 && (_ = 0, ab++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
                    }
                    u += x
                }
                return u += j, a._keyEvent = !1, u
            },
            _generateMonthYearHeader: function (a, b, c, d, e, f, g, h) {
                var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"), r = this._get(a, "changeYear"), s = this._get(a, "showMonthAfterYear"), t = "<div class='ui-datepicker-title'>", u = "";
                if (f || !q)u += "<span class='ui-datepicker-month'>" + g[b] + "</span>"; else {
                    for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; 12 > k; k++)(!i || k >= d.getMonth()) && (!j || e.getMonth() >= k) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
                    u += "</select>"
                }
                if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)if (a.yearshtml = "", f || !r)t += "<span class='ui-datepicker-year'>" + c + "</span>"; else {
                    for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function (a) {
                        var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                        return isNaN(b) ? m : b
                    }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++)a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
                    a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
                }
                return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
            },
            _adjustInstDate: function (a, b, c) {
                var d = a.drawYear + ("Y" === c ? b : 0), e = a.drawMonth + ("M" === c ? b : 0), f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0), g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
                a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" === c || "Y" === c) && this._notifyChange(a)
            },
            _restrictMinMax: function (a, b) {
                var c = this._getMinMaxDate(a, "min"), d = this._getMinMaxDate(a, "max"), e = c && c > b ? c : b;
                return d && e > d ? d : e
            },
            _notifyChange: function (a) {
                var b = this._get(a, "onChangeMonthYear");
                b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
            },
            _getNumberOfMonths: function (a) {
                var b = this._get(a, "numberOfMonths");
                return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
            },
            _getMinMaxDate: function (a, b) {
                return this._determineDate(a, this._get(a, b + "Date"), null)
            },
            _getDaysInMonth: function (a, b) {
                return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
            },
            _getFirstDayOfMonth: function (a, b) {
                return new Date(a, b, 1).getDay()
            },
            _canAdjustMonth: function (a, b, c, d) {
                var e = this._getNumberOfMonths(a), f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
                return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
            },
            _isInRange: function (a, b) {
                var c, d, e = this._getMinMaxDate(a, "min"), f = this._getMinMaxDate(a, "max"), g = null, h = null, i = this._get(a, "yearRange");
                return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || h >= b.getFullYear())
            },
            _getFormatConfig: function (a) {
                var b = this._get(a, "shortYearCutoff");
                return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
                    shortYearCutoff: b,
                    dayNamesShort: this._get(a, "dayNamesShort"),
                    dayNames: this._get(a, "dayNames"),
                    monthNamesShort: this._get(a, "monthNamesShort"),
                    monthNames: this._get(a, "monthNames")
                }
            },
            _formatDate: function (a, b, c, d) {
                b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
                var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
                return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
            }
        }), a.fn.datepicker = function (b) {
            if (!this.length)return this;
            a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
            var c = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function () {
                "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
            }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
        }, a.datepicker = new c, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.10.3"
    }(d), function (a) {
        var b = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        }, c = {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0};
        a.widget("ui.dialog", {
            version: "1.10.3",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center", at: "center", of: window, collision: "fit", using: function (b) {
                        var c = a(this).css(b).offset().top;
                        0 > c && a(this).css("top", b.top - c)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            _create: function () {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && a.fn.draggable && this._makeDraggable(), this.options.resizable && a.fn.resizable && this._makeResizable(), this._isOpen = !1
            },
            _init: function () {
                this.options.autoOpen && this.open()
            },
            _appendTo: function () {
                var b = this.options.appendTo;
                return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0)
            },
            _destroy: function () {
                var a, b = this.originalPosition;
                this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), a = b.parent.children().eq(b.index), a.length && a[0] !== this.element[0] ? a.before(this.element) : b.parent.append(this.element)
            },
            widget: function () {
                return this.uiDialog
            },
            disable: a.noop,
            enable: a.noop,
            close: function (b) {
                var c = this;
                this._isOpen && this._trigger("beforeClose", b) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || a(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function () {
                    c._trigger("close", b)
                }))
            },
            isOpen: function () {
                return this._isOpen
            },
            moveToTop: function () {
                this._moveToTop()
            },
            _moveToTop: function (a, b) {
                var c = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
                return c && !b && this._trigger("focus", a), c
            },
            open: function () {
                var b = this;
                return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = a(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
                    b._focusTabbable(), b._trigger("focus")
                }), void this._trigger("open"))
            },
            _focusTabbable: function () {
                var a = this.element.find("[autofocus]");
                a.length || (a = this.element.find(":tabbable")), a.length || (a = this.uiDialogButtonPane.find(":tabbable")), a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable")), a.length || (a = this.uiDialog), a.eq(0).focus()
            },
            _keepFocus: function (b) {
                function c() {
                    var b = this.document[0].activeElement, c = this.uiDialog[0] === b || a.contains(this.uiDialog[0], b);
                    c || this._focusTabbable()
                }

                b.preventDefault(), c.call(this), this._delay(c)
            },
            _createWrapper: function () {
                this.uiDialog = a("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                    keydown: function (b) {
                        if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE)return b.preventDefault(), void this.close(b);
                        if (b.keyCode === a.ui.keyCode.TAB) {
                            var c = this.uiDialog.find(":tabbable"), d = c.filter(":first"), e = c.filter(":last");
                            b.target !== e[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (e.focus(1), b.preventDefault()) : (d.focus(1), b.preventDefault())
                        }
                    }, mousedown: function (a) {
                        this._moveToTop(a) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
            },
            _createTitlebar: function () {
                var b;
                this.uiDialogTitlebar = a("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                    mousedown: function (b) {
                        a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                    }
                }), this.uiDialogTitlebarClose = a("<button></button>").button({
                    label: this.options.closeText,
                    icons: {primary: "ui-icon-closethick"},
                    text: !1
                }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                    click: function (a) {
                        a.preventDefault(), this.close(a)
                    }
                }), b = a("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(b), this.uiDialog.attr({"aria-labelledby": b.attr("id")})
            },
            _title: function (a) {
                this.options.title || a.html("&#160;"), a.text(this.options.title)
            },
            _createButtonPane: function () {
                this.uiDialogButtonPane = a("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = a("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
            },
            _createButtons: function () {
                var b = this, c = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (a.each(c, function (c, d) {
                    var e, f;
                    d = a.isFunction(d) ? {
                        click: d,
                        text: c
                    } : d, d = a.extend({type: "button"}, d), e = d.click, d.click = function () {
                        e.apply(b.element[0], arguments)
                    }, f = {
                        icons: d.icons,
                        text: d.showText
                    }, delete d.icons, delete d.showText, a("<button></button>", d).button(f).appendTo(b.uiButtonSet)
                }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function () {
                function b(a) {
                    return {position: a.position, offset: a.offset}
                }

                var c = this, d = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function (d, e) {
                        a(this).addClass("ui-dialog-dragging"), c._blockFrames(), c._trigger("dragStart", d, b(e))
                    },
                    drag: function (a, d) {
                        c._trigger("drag", a, b(d))
                    },
                    stop: function (e, f) {
                        d.position = [f.position.left - c.document.scrollLeft(), f.position.top - c.document.scrollTop()], a(this).removeClass("ui-dialog-dragging"), c._unblockFrames(), c._trigger("dragStop", e, b(f))
                    }
                })
            },
            _makeResizable: function () {
                function b(a) {
                    return {
                        originalPosition: a.originalPosition,
                        originalSize: a.originalSize,
                        position: a.position,
                        size: a.size
                    }
                }

                var c = this, d = this.options, e = d.resizable, f = this.uiDialog.css("position"), g = "string" == typeof e ? e : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: d.maxWidth,
                    maxHeight: d.maxHeight,
                    minWidth: d.minWidth,
                    minHeight: this._minHeight(),
                    handles: g,
                    start: function (d, e) {
                        a(this).addClass("ui-dialog-resizing"), c._blockFrames(), c._trigger("resizeStart", d, b(e))
                    },
                    resize: function (a, d) {
                        c._trigger("resize", a, b(d))
                    },
                    stop: function (e, f) {
                        d.height = a(this).height(), d.width = a(this).width(), a(this).removeClass("ui-dialog-resizing"), c._unblockFrames(), c._trigger("resizeStop", e, b(f))
                    }
                }).css("position", f)
            },
            _minHeight: function () {
                var a = this.options;
                return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height)
            },
            _position: function () {
                var a = this.uiDialog.is(":visible");
                a || this.uiDialog.show(), this.uiDialog.position(this.options.position), a || this.uiDialog.hide()
            },
            _setOptions: function (d) {
                var e = this, f = !1, g = {};
                a.each(d, function (a, d) {
                    e._setOption(a, d), a in b && (f = !0), a in c && (g[a] = d)
                }), f && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", g)
            },
            _setOption: function (a, b) {
                var c, d, e = this.uiDialog;
                "dialogClass" === a && e.removeClass(this.options.dialogClass).addClass(b), "disabled" !== a && (this._super(a, b), "appendTo" === a && this.uiDialog.appendTo(this._appendTo()), "buttons" === a && this._createButtons(), "closeText" === a && this.uiDialogTitlebarClose.button({label: "" + b}), "draggable" === a && (c = e.is(":data(ui-draggable)"), c && !b && e.draggable("destroy"), !c && b && this._makeDraggable()), "position" === a && this._position(), "resizable" === a && (d = e.is(":data(ui-resizable)"), d && !b && e.resizable("destroy"), d && "string" == typeof b && e.resizable("option", "handles", b), d || b === !1 || this._makeResizable()), "title" === a && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function () {
                var a, b, c, d = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), d.minWidth > d.width && (d.width = d.minWidth), a = this.uiDialog.css({
                    height: "auto",
                    width: d.width
                }).outerHeight(), b = Math.max(0, d.minHeight - a), c = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - a) : "none", "auto" === d.height ? this.element.css({
                    minHeight: b,
                    maxHeight: c,
                    height: "auto"
                }) : this.element.height(Math.max(0, d.height - a)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function () {
                this.iframeBlocks = this.document.find("iframe").map(function () {
                    var b = a(this);
                    return a("<div>").css({
                        position: "absolute",
                        width: b.outerWidth(),
                        height: b.outerHeight()
                    }).appendTo(b.parent()).offset(b.offset())[0]
                })
            },
            _unblockFrames: function () {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function (b) {
                return a(b.target).closest(".ui-dialog").length ? !0 : !!a(b.target).closest(".ui-datepicker").length
            },
            _createOverlay: function () {
                if (this.options.modal) {
                    var b = this, c = this.widgetFullName;
                    a.ui.dialog.overlayInstances || this._delay(function () {
                        a.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (d) {
                            b._allowInteraction(d) || (d.preventDefault(), a(".ui-dialog:visible:last .ui-dialog-content").data(c)._focusTabbable())
                        })
                    }), this.overlay = a("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {mousedown: "_keepFocus"}), a.ui.dialog.overlayInstances++
                }
            },
            _destroyOverlay: function () {
                this.options.modal && this.overlay && (a.ui.dialog.overlayInstances--, a.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
            }
        }), a.ui.dialog.overlayInstances = 0, a.uiBackCompat !== !1 && a.widget("ui.dialog", a.ui.dialog, {
            _position: function () {
                var b, c = this.options.position, d = [], e = [0, 0];
                c ? (("string" == typeof c || "object" == typeof c && "0"in c) && (d = c.split ? c.split(" ") : [c[0], c[1]], 1 === d.length && (d[1] = d[0]), a.each(["left", "top"], function (a, b) {
                    +d[a] === d[a] && (e[a] = d[a], d[a] = b)
                }), c = {
                    my: d[0] + (0 > e[0] ? e[0] : "+" + e[0]) + " " + d[1] + (0 > e[1] ? e[1] : "+" + e[1]),
                    at: d.join(" ")
                }), c = a.extend({}, a.ui.dialog.prototype.options.position, c)) : c = a.ui.dialog.prototype.options.position, b = this.uiDialog.is(":visible"), b || this.uiDialog.show(), this.uiDialog.position(c), b || this.uiDialog.hide()
            }
        })
    }(d), function (a) {
        function b(b, c) {
            var d = (b.attr("aria-describedby") || "").split(/\s+/);
            d.push(c), b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" ")))
        }

        function c(b) {
            var c = b.data("ui-tooltip-id"), d = (b.attr("aria-describedby") || "").split(/\s+/), e = a.inArray(c, d);
            -1 !== e && d.splice(e, 1), b.removeData("ui-tooltip-id"), d = a.trim(d.join(" ")), d ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby")
        }

        var d = 0;
        a.widget("ui.tooltip", {
            version: "1.10.3", options: {
                content: function () {
                    var b = a(this).attr("title") || "";
                    return a("<a>").text(b).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            }, _create: function () {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
            }, _setOption: function (b, c) {
                var d = this;
                return "disabled" === b ? (this[c ? "_disable" : "_enable"](), void(this.options[b] = c)) : (this._super(b, c), void("content" === b && a.each(this.tooltips, function (a, b) {
                    d._updateContent(b)
                })))
            }, _disable: function () {
                var b = this;
                a.each(this.tooltips, function (c, d) {
                    var e = a.Event("blur");
                    e.target = e.currentTarget = d[0], b.close(e, !0)
                }), this.element.find(this.options.items).addBack().each(function () {
                    var b = a(this);
                    b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).attr("title", "")
                })
            }, _enable: function () {
                this.element.find(this.options.items).addBack().each(function () {
                    var b = a(this);
                    b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"))
                })
            }, open: function (b) {
                var c = this, d = a(b ? b.target : this.element).closest(this.options.items);
                d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function () {
                    var b, d = a(this);
                    d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, c.close(b, !0)), d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
                        element: this,
                        title: d.attr("title")
                    }, d.attr("title", ""))
                }), this._updateContent(d, b))
            }, _updateContent: function (a, b) {
                var c, d = this.options.content, e = this, f = b ? b.type : null;
                return "string" == typeof d ? this._open(b, a, d) : (c = d.call(a[0], function (c) {
                    a.data("ui-tooltip-open") && e._delay(function () {
                        b && (b.type = f), this._open(b, a, c)
                    })
                }), void(c && this._open(b, a, c)))
            }, _open: function (c, d, e) {
                function f(a) {
                    j.of = a, g.is(":hidden") || g.position(j)
                }

                var g, h, i, j = a.extend({}, this.options.position);
                if (e) {
                    if (g = this._find(d), g.length)return void g.find(".ui-tooltip-content").html(e);
                    d.is("[title]") && (c && "mouseover" === c.type ? d.attr("title", "") : d.removeAttr("title")), g = this._tooltip(d), b(d, g.attr("id")), g.find(".ui-tooltip-content").html(e), this.options.track && c && /^mouse/.test(c.type) ? (this._on(this.document, {mousemove: f}), f(c)) : g.position(a.extend({of: d}, this.options.position)), g.hide(), this._show(g, this.options.show), this.options.show && this.options.show.delay && (i = this.delayedShow = setInterval(function () {
                        g.is(":visible") && (f(j.of), clearInterval(i))
                    }, a.fx.interval)), this._trigger("open", c, {tooltip: g}), h = {
                        keyup: function (b) {
                            if (b.keyCode === a.ui.keyCode.ESCAPE) {
                                var c = a.Event(b);
                                c.currentTarget = d[0], this.close(c, !0)
                            }
                        }, remove: function () {
                            this._removeTooltip(g)
                        }
                    }, c && "mouseover" !== c.type || (h.mouseleave = "close"), c && "focusin" !== c.type || (h.focusout = "close"), this._on(!0, d, h)
                }
            }, close: function (b) {
                var d = this, e = a(b ? b.currentTarget : this.element), f = this._find(e);
                this.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title")), c(e), f.stop(!0), this._hide(f, this.options.hide, function () {
                    d._removeTooltip(a(this))
                }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), b && "mouseleave" === b.type && a.each(this.parents, function (b, c) {
                    a(c.element).attr("title", c.title), delete d.parents[b]
                }), this.closing = !0, this._trigger("close", b, {tooltip: f}), this.closing = !1)
            }, _tooltip: function (b) {
                var c = "ui-tooltip-" + d++, e = a("<div>").attr({
                    id: c,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                return a("<div>").addClass("ui-tooltip-content").appendTo(e), e.appendTo(this.document[0].body), this.tooltips[c] = b, e
            }, _find: function (b) {
                var c = b.data("ui-tooltip-id");
                return c ? a("#" + c) : a()
            }, _removeTooltip: function (a) {
                a.remove(), delete this.tooltips[a.attr("id")]
            }, _destroy: function () {
                var b = this;
                a.each(this.tooltips, function (c, d) {
                    var e = a.Event("blur");
                    e.target = e.currentTarget = d[0], b.close(e, !0), a("#" + c).remove(), d.data("ui-tooltip-title") && (d.attr("title", d.data("ui-tooltip-title")), d.removeData("ui-tooltip-title"))
                })
            }
        })
    }(d), function (a, b) {
        var c = "ui-effects-";
        a.effects = {effect: {}}, function (a, b) {
            function c(a, b, c) {
                var d = l[b.type] || {};
                return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : a > d.max ? d.max : a)
            }

            function d(c) {
                var d = j(), e = d._rgba = [];
                return c = c.toLowerCase(), o(i, function (a, f) {
                    var g, h = f.re.exec(c), i = h && f.parse(h), j = f.space || "rgba";
                    return i ? (g = d[j](i), d[k[j].cache] = g[k[j].cache], e = d._rgba = g._rgba, !1) : b
                }), e.length ? ("0,0,0,0" === e.join() && a.extend(e, f.transparent), d) : f[c]
            }

            function e(a, b, c) {
                return c = (c + 1) % 1, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
            }

            var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", h = /^([\-+])=\s*(\d+\.?\d*)/, i = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (a) {
                    return [a[1], a[2], a[3], a[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (a) {
                    return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (a) {
                    return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (a) {
                    return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (a) {
                    return [a[1], a[2] / 100, a[3] / 100, a[4]]
                }
            }], j = a.Color = function (b, c, d, e) {
                return new a.Color.fn.parse(b, c, d, e)
            }, k = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, l = {
                "byte": {floor: !0, max: 255},
                percent: {max: 1},
                degrees: {mod: 360, floor: !0}
            }, m = j.support = {}, n = a("<p>")[0], o = a.each;
            n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function (a, b) {
                b.cache = "_" + a, b.props.alpha = {idx: 3, type: "percent", def: 1}
            }), j.fn = a.extend(j.prototype, {
                parse: function (e, g, h, i) {
                    if (e === b)return this._rgba = [null, null, null, null], this;
                    (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                    var l = this, m = a.type(e), n = this._rgba = [];
                    return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function (a, b) {
                        n[b.idx] = c(e[b.idx], b)
                    }), this) : "object" === m ? (e instanceof j ? o(k, function (a, b) {
                        e[b.cache] && (l[b.cache] = e[b.cache].slice())
                    }) : o(k, function (b, d) {
                        var f = d.cache;
                        o(d.props, function (a, b) {
                            if (!l[f] && d.to) {
                                if ("alpha" === a || null == e[a])return;
                                l[f] = d.to(l._rgba)
                            }
                            l[f][b.idx] = c(e[a], b, !0)
                        }), l[f] && 0 > a.inArray(null, l[f].slice(0, 3)) && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
                    }), this) : b
                }, is: function (a) {
                    var c = j(a), d = !0, e = this;
                    return o(k, function (a, f) {
                        var g, h = c[f.cache];
                        return h && (g = e[f.cache] || f.to && f.to(e._rgba) || [], o(f.props, function (a, c) {
                            return null != h[c.idx] ? d = h[c.idx] === g[c.idx] : b
                        })), d
                    }), d
                }, _space: function () {
                    var a = [], b = this;
                    return o(k, function (c, d) {
                        b[d.cache] && a.push(c)
                    }), a.pop()
                }, transition: function (a, b) {
                    var d = j(a), e = d._space(), f = k[e], g = 0 === this.alpha() ? j("transparent") : this, h = g[f.cache] || f.to(g._rgba), i = h.slice();
                    return d = d[f.cache], o(f.props, function (a, e) {
                        var f = e.idx, g = h[f], j = d[f], k = l[e.type] || {};
                        null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e)))
                    }), this[e](i)
                }, blend: function (b) {
                    if (1 === this._rgba[3])return this;
                    var c = this._rgba.slice(), d = c.pop(), e = j(b)._rgba;
                    return j(a.map(c, function (a, b) {
                        return (1 - d) * e[b] + d * a
                    }))
                }, toRgbaString: function () {
                    var b = "rgba(", c = a.map(this._rgba, function (a, b) {
                        return null == a ? b > 2 ? 1 : 0 : a
                    });
                    return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
                }, toHslaString: function () {
                    var b = "hsla(", c = a.map(this.hsla(), function (a, b) {
                        return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                    });
                    return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
                }, toHexString: function (b) {
                    var c = this._rgba.slice(), d = c.pop();
                    return b && c.push(~~(255 * d)), "#" + a.map(c, function (a) {
                        return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                    }).join("")
                }, toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), j.fn.parse.prototype = j.fn, k.hsla.to = function (a) {
                if (null == a[0] || null == a[1] || null == a[2])return [null, null, null, a[3]];
                var b, c, d = a[0] / 255, e = a[1] / 255, f = a[2] / 255, g = a[3], h = Math.max(d, e, f), i = Math.min(d, e, f), j = h - i, k = h + i, l = .5 * k;
                return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
            }, k.hsla.from = function (a) {
                if (null == a[0] || null == a[1] || null == a[2])return [null, null, null, a[3]];
                var b = a[0] / 360, c = a[1], d = a[2], f = a[3], g = .5 >= d ? d * (1 + c) : d + c - d * c, h = 2 * d - g;
                return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
            }, o(k, function (d, e) {
                var f = e.props, g = e.cache, i = e.to, k = e.from;
                j.fn[d] = function (d) {
                    if (i && !this[g] && (this[g] = i(this._rgba)), d === b)return this[g].slice();
                    var e, h = a.type(d), l = "array" === h || "object" === h ? d : arguments, m = this[g].slice();
                    return o(f, function (a, b) {
                        var d = l["object" === h ? a : b.idx];
                        null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
                    }), k ? (e = j(k(m)), e[g] = m, e) : j(m)
                }, o(f, function (b, c) {
                    j.fn[b] || (j.fn[b] = function (e) {
                        var f, g = a.type(e), i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d, j = this[i](), k = j[c.idx];
                        return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[c.idx] = e, this[i](j)))
                    })
                })
            }), j.hook = function (b) {
                var c = b.split(" ");
                o(c, function (b, c) {
                    a.cssHooks[c] = {
                        set: function (b, e) {
                            var f, g, h = "";
                            if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                                if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                                    for (g = "backgroundColor" === c ? b.parentNode : b; ("" === h || "transparent" === h) && g && g.style;)try {
                                        h = a.css(g, "backgroundColor"), g = g.parentNode
                                    } catch (i) {
                                    }
                                    e = e.blend(h && "transparent" !== h ? h : "_default")
                                }
                                e = e.toRgbaString()
                            }
                            try {
                                b.style[c] = e
                            } catch (i) {
                            }
                        }
                    }, a.fx.step[c] = function (b) {
                        b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
                    }
                })
            }, j.hook(g), a.cssHooks.borderColor = {
                expand: function (a) {
                    var b = {};
                    return o(["Top", "Right", "Bottom", "Left"], function (c, d) {
                        b["border" + d + "Color"] = a
                    }), b
                }
            }, f = a.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(d), function () {
            function c(b) {
                var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle, f = {};
                if (e && e.length && e[0] && e[e[0]])for (d = e.length; d--;)c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]); else for (c in e)"string" == typeof e[c] && (f[c] = e[c]);
                return f
            }

            function e(b, c) {
                var d, e, f = {};
                for (d in c)e = c[d], b[d] !== e && (g[d] || (a.fx.step[d] || !isNaN(parseFloat(e))) && (f[d] = e));
                return f
            }

            var f = ["add", "remove", "toggle"], g = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
            a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (b, c) {
                a.fx.step[c] = function (a) {
                    ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (d.style(a.elem, c, a.end), a.setAttr = !0)
                }
            }), a.fn.addBack || (a.fn.addBack = function (a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }), a.effects.animateClass = function (b, d, g, h) {
                var i = a.speed(d, g, h);
                return this.queue(function () {
                    var d, g = a(this), h = g.attr("class") || "", j = i.children ? g.find("*").addBack() : g;
                    j = j.map(function () {
                        var b = a(this);
                        return {el: b, start: c(this)}
                    }), d = function () {
                        a.each(f, function (a, c) {
                            b[c] && g[c + "Class"](b[c])
                        })
                    }, d(), j = j.map(function () {
                        return this.end = c(this.el[0]), this.diff = e(this.start, this.end), this
                    }), g.attr("class", h), j = j.map(function () {
                        var b = this, c = a.Deferred(), d = a.extend({}, i, {
                            queue: !1, complete: function () {
                                c.resolve(b)
                            }
                        });
                        return this.el.animate(this.diff, d), c.promise()
                    }), a.when.apply(a, j.get()).done(function () {
                        d(), a.each(arguments, function () {
                            var b = this.el;
                            a.each(this.diff, function (a) {
                                b.css(a, "")
                            })
                        }), i.complete.call(g[0])
                    })
                })
            }, a.fn.extend({
                addClass: function (b) {
                    return function (c, d, e, f) {
                        return d ? a.effects.animateClass.call(this, {add: c}, d, e, f) : b.apply(this, arguments)
                    }
                }(a.fn.addClass), removeClass: function (b) {
                    return function (c, d, e, f) {
                        return arguments.length > 1 ? a.effects.animateClass.call(this, {remove: c}, d, e, f) : b.apply(this, arguments)
                    }
                }(a.fn.removeClass), toggleClass: function (c) {
                    return function (d, e, f, g, h) {
                        return "boolean" == typeof e || e === b ? f ? a.effects.animateClass.call(this, e ? {add: d} : {remove: d}, f, g, h) : c.apply(this, arguments) : a.effects.animateClass.call(this, {toggle: d}, e, f, g)
                    }
                }(a.fn.toggleClass), switchClass: function (b, c, d, e, f) {
                    return a.effects.animateClass.call(this, {add: c, remove: b}, d, e, f)
                }
            })
        }(), function () {
            function d(b, c, d, e) {
                return a.isPlainObject(b) && (c = b, b = b.effect), b = {effect: b}, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
            }

            function e(b) {
                return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" != typeof b || a.effects.effect[b] ? a.isFunction(b) ? !0 : "object" != typeof b || b.effect ? !1 : !0 : !0
            }

            a.extend(a.effects, {
                version: "1.10.3", save: function (a, b) {
                    for (var d = 0; b.length > d; d++)null !== b[d] && a.data(c + b[d], a[0].style[b[d]])
                }, restore: function (a, d) {
                    var e, f;
                    for (f = 0; d.length > f; f++)null !== d[f] && (e = a.data(c + d[f]), e === b && (e = ""), a.css(d[f], e))
                }, setMode: function (a, b) {
                    return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
                }, getBaseline: function (a, b) {
                    var c, d;
                    switch (a[0]) {
                        case"top":
                            c = 0;
                            break;
                        case"middle":
                            c = .5;
                            break;
                        case"bottom":
                            c = 1;
                            break;
                        default:
                            c = a[0] / b.height
                    }
                    switch (a[1]) {
                        case"left":
                            d = 0;
                            break;
                        case"center":
                            d = .5;
                            break;
                        case"right":
                            d = 1;
                            break;
                        default:
                            d = a[1] / b.width
                    }
                    return {x: d, y: c}
                }, createWrapper: function (b) {
                    if (b.parent().is(".ui-effects-wrapper"))return b.parent();
                    var c = {
                        width: b.outerWidth(!0),
                        height: b.outerHeight(!0),
                        "float": b.css("float")
                    }, d = a("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), e = {width: b.width(), height: b.height()}, f = document.activeElement;
                    try {
                        f.id
                    } catch (g) {
                        f = document.body
                    }
                    return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({position: "relative"}), b.css({position: "relative"})) : (a.extend(c, {
                        position: b.css("position"),
                        zIndex: b.css("z-index")
                    }), a.each(["top", "left", "bottom", "right"], function (a, d) {
                        c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                    }), b.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), b.css(e), d.css(c).show()
                }, removeWrapper: function (b) {
                    var c = document.activeElement;
                    return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
                }, setTransition: function (b, c, d, e) {
                    return e = e || {}, a.each(c, function (a, c) {
                        var f = b.cssUnit(c);
                        f[0] > 0 && (e[c] = f[0] * d + f[1])
                    }), e
                }
            }), a.fn.extend({
                effect: function () {
                    function b(b) {
                        function d() {
                            a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
                        }

                        var e = a(this), f = c.complete, h = c.mode;
                        (e.is(":hidden") ? "hide" === h : "show" === h) ? (e[h](), d()) : g.call(e[0], c, d)
                    }

                    var c = d.apply(this, arguments), e = c.mode, f = c.queue, g = a.effects.effect[c.effect];
                    return a.fx.off || !g ? e ? this[e](c.duration, c.complete) : this.each(function () {
                        c.complete && c.complete.call(this)
                    }) : f === !1 ? this.each(b) : this.queue(f || "fx", b)
                }, show: function (a) {
                    return function (b) {
                        if (e(b))return a.apply(this, arguments);
                        var c = d.apply(this, arguments);
                        return c.mode = "show", this.effect.call(this, c)
                    }
                }(a.fn.show), hide: function (a) {
                    return function (b) {
                        if (e(b))return a.apply(this, arguments);
                        var c = d.apply(this, arguments);
                        return c.mode = "hide", this.effect.call(this, c)
                    }
                }(a.fn.hide), toggle: function (a) {
                    return function (b) {
                        if (e(b) || "boolean" == typeof b)return a.apply(this, arguments);
                        var c = d.apply(this, arguments);
                        return c.mode = "toggle", this.effect.call(this, c)
                    }
                }(a.fn.toggle), cssUnit: function (b) {
                    var c = this.css(b), d = [];
                    return a.each(["em", "px", "%", "pt"], function (a, b) {
                        c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                    }), d
                }
            })
        }(), function () {
            var b = {};
            a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (a, c) {
                b[c] = function (b) {
                    return Math.pow(b, a + 2)
                }
            }), a.extend(b, {
                Sine: function (a) {
                    return 1 - Math.cos(a * Math.PI / 2)
                }, Circ: function (a) {
                    return 1 - Math.sqrt(1 - a * a)
                }, Elastic: function (a) {
                    return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
                }, Back: function (a) {
                    return a * a * (3 * a - 2)
                }, Bounce: function (a) {
                    for (var b, c = 4; ((b = Math.pow(2, --c)) - 1) / 11 > a;);
                    return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
                }
            }), a.each(b, function (b, c) {
                a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function (a) {
                    return 1 - c(1 - a)
                }, a.easing["easeInOut" + b] = function (a) {
                    return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
                }
            })
        }()
    }(d), function (a) {
        a.effects.effect.fade = function (b, c) {
            var d = a(this), e = a.effects.setMode(d, b.mode || "toggle");
            d.animate({opacity: e}, {queue: !1, duration: b.duration, easing: b.easing, complete: c})
        }
    }(d), c.exports = d
});