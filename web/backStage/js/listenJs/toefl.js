define("toefl/js/channel/toefl", ["jquery", "../mod/login_info", "../mod/word/screen_word", "../mod/word/note", "../../tpl/word/note.tpl", "../mod/word/drag", "../../tpl/word/popButton.tpl", "../../tpl/translate.tpl", "../mod/head_user", "../util/loginGuide", "../../tpl/login_guide.tpl", "../mod/judge-sign-in", "../mod/userInformation", "raphael", "../mod/profile/js-user-card", "../../tpl/user_card.tpl", "../mod/profile/charts_list", "../../tpl/charts_list.tpl", "../../tpl/charts_month_load.tpl", "../mod/learn/toefl-top-ad", "../mod/learn/public-class-open", "../../tpl/learn/public-class-open.tpl", "../../../toefl_spoken/js/mod/submit-question"], function (a, b, c) {
    var d = a("jquery");
    a("../mod/login_info");
    var e = a("../mod/word/screen_word");
    a("../mod/head_user"), a("../util/loginGuide"), a("../mod/judge-sign-in");
    var f = a("../mod/userInformation");
    a("../mod/profile/js-user-card"), a("../mod/profile/charts_list"), a("../mod/learn/toefl-top-ad"), a("../mod/learn/public-class-open"), a("../../../toefl_spoken/js/mod/submit-question"), new e(".js-translate-content");
    var g = d("#roundCount");
    f({
        size: g.data("size"),
        name: g.data("name"),
        txt: g.data("txt"),
        day: g.data("day")
    }), c.exports = {userPannel: f}, function () {
        var a = d(".i-toefl-suggest-common"), b = a.find(".suggest_a a"), c = b.attr("href"), e = a.find(".suggest_a img"), f = a.find(".word-a");
        f.attr({href: c, target: "_blank"});
        var g = {
            type: a.data("type"),
            img_id: b.attr("img_id"),
            word_id: a.attr("data-word-id"),
            location: a.data("location"),
            location_desc: a.data("desc"),
            img_url: e.attr("src"),
            word: f.html()
        }, h = "/app/ajaxstatsuggesttimes";
        f.on("click", function () {
            d.post(h, g, function (a) {
                a.status
            }, "json")
        })
    }(), function () {
        var a = d(".g-kmf-feedback-online"), b = a.find("a"), c = {
            img_id: a.data("imgid"),
            word_id: a.data("wordid"),
            location: a.data("location"),
            location_desc: a.data("desc")
        }, e = "/app/ajaxstatsuggesttimes";
        b.on("click", function () {
            d.post(e, c, function (a) {
                a.status
            }, "json")
        })
    }()
}), define("toefl/js/mod/login_info", ["jquery"], function (a, b, c) {
    var d = a("jquery"), e = function () {
        var a = d("#GlobeLogin"), b = {loginStatus: 2};
        return a.length > 0 ? b.loginStatus = d.trim(d("#GlobeLogin").val()) : 2 == b.loginStatus, b
    };
    window.kmfGlobalUser = e(), c.exports = e
}), define("toefl/js/mod/word/screen_word", ["jquery", "toefl/js/mod/word/note", "toefl/js/mod/word/drag"], function (a, b, c) {
    function d(a, b) {
        for (var c in b)a[c] ? alert("划词功能扩展时存在相同方法或属性！") : a[c] = b[c]
    }

    var e = a("jquery"), f = a("toefl/js/mod/word/note"), g = a("toefl/js/mod/word/drag"), h = function (a) {
        this.ele = a, this.dSty = "js-word-disabled", this.elements = e(a), this.eleLayer = "#js-word-translate-layer", this.init(), this.noteInit(), this.url = "/vocab/ajaxquery?word=", this.favUrl = "/vocab/ajaxfavword", this.curWord = "", this.$startEle = null, this.$endEle = null
    };
    h.prototype = {
        status: {loading: !1, fav: !1, $targetEle: {}, selectId: []}, init: function () {
            0 !== this.elements.length && (this.createButton(), this.setup())
        }, setup: function () {
            var a = this, b = null, c = "#js-translate-fav", d = ".js-word-play", f = ".js-translate-dragHandle", h = ".js-translate-inner", i = this.eleLayer;
            e(document).on("mouseup", function (c) {
                return b && (clearTimeout(b), b = null), a.checkLayer.call(a, c) || a.closeLayer(), a.checkEle.call(a, c) ? void(b = setTimeout(function () {
                    a.checkWord.call(a)
                }, 100)) : void a.hideButton()
            }), e(this.popButton).on("mousedown", function (a) {
                return a.stopPropagation(), a.preventDefault(), !1
            }), e(document).delegate(h, "mousedown", function (a) {
                return a.stopPropagation(), a.preventDefault(), !1
            }), e(this.popButton).on("click", ".word", function (b) {
                return a.openLayer().setLayerPosition().render(), b.stopPropagation(), b.preventDefault(), !1
            }), e(document).delegate(c, "click", function () {
                a.favorite(e(this))
            }), e(document).delegate(d, "click", function () {
                a.phonEvent(e(this))
            }), g(i, {handleEle: f})
        }, resetCurEle: function () {
            this.$startEle = null, this.$endEle = null
        }, checkEle: function (a) {
            var b, c, d = this.ele, f = /^#/, g = /^\./, h = f.test(d), i = g.test(d), j = this.dSty, k = d.slice(1), l = e(a.target);
            return l.hasClass(j) || l.parents("." + j).length > 0 ? c = !1 : h && (l.attr("id") == k || l.parents(d).length > 0) ? (b = l.attr("id") == k ? l : l.parents(d), c = !0) : i && (l.hasClass(k) || l.parents(d).length > 0) ? (b = l.hasClass(k) ? l : l.parents(d), c = !0) : c = !1, c
        }, checkLayer: function (a) {
            var b = this.eleLayer, c = b.slice(1), d = e(a.target), f = "js-blank-retain";
            return d.attr("id") == c || d.parents(b).length > 0 || e(b).hasClass(f) ? !0 : !1
        }, checkWord: function () {
            var a;
            return this.curWord = a = e.trim(this.getWord.call(this)), "" === a ? void this.hideButton() : (/\s/.test(a) ? this.createButton({word: {display: !1}}) : this.createButton(), void this.setButtonPosition())
        }, getWord: function () {
            var a, b, c, d = "", f = this;
            if (void 0 !== window.getSelection) {
                if (b = window.getSelection(), b.rangeCount)for (a = 0, c = b.rangeCount; c > a; a += 1)d += b.getRangeAt(a).toString();
                f.status.$targetEle = {}, f.status.selectId = [], this.elements.each(function () {
                    if (b.containsNode && b.containsNode(e(this).get(0), !0)) {
                        var a = e(this).data("id");
                        a && (f.status.selectId.push(a), f.status.$targetEle[a] = e(this))
                    }
                })
            } else void 0 !== document.selection && "Text" === document.selection.type && (d = document.selection.createRange().text);
            return d
        }, getPosition: function () {
            var a, b, c, d, f, g, h, i, j = e(document).scrollTop();
            return void 0 !== window.getSelection ? (a = window.getSelection(), b = a.getRangeAt(0), c = b.getBoundingClientRect(), f = c.top + j, g = c.bottom + j, h = c.left, i = c.right) : void 0 !== document.selection && (d = document.selection.createRange(), f = d.boundingTop + j, g = f + d.boundingHeight, h = d.boundingLeft, i = h + d.boundingWidth), this.boundary = {
                left: h,
                right: i,
                top: f,
                bottom: g
            }, this.boundary
        }, setButtonPosition: function () {
            var a = this.popButton, b = a.width(), c = 38, d = this.getPosition(), e = (d.left + d.right) / 2 - b / 2, f = d.top - c;
            return a.css({left: e, top: f}).show(), this
        }, setLayerPosition: function () {
            var a = this.boundary, b = a.bottom, c = a.left;
            return e(this.eleLayer).css({left: c, top: b}).show(), this
        }, createButton: function (b) {
            var c, d, f = this.popButton || e('<div class="g-word-tool" />'), g = a("toefl/tpl/word/popButton.tpl"), h = template.compile(g), i = "", j = [];
            d = kmfGlobalUser && 1 == kmfGlobalUser.loginStatus ? "note" : "note js-kmf-login", c = {
                word: {
                    menu: "查词",
                    display: !0,
                    className: "word"
                }, note: {menu: "笔记", display: !0, className: d}
            }, f.appendTo("body");
            for (var k in c)"object" == typeof b && b[k] && e.extend(c[k], b[k]), c[k].display && j.push(c[k]);
            i = h({toolList: j}), f.html(i), this.popButton = f
        }, hideButton: function () {
            this.popButton.hide()
        }, createLayer: function () {
            var a = '<div class="g-word-translate" id="js-word-translate-layer" />';
            e(a).appendTo("body")
        }, closeLayer: function () {
            return e(this.eleLayer).hide(), this
        }, openLayer: function () {
            var a = e(this.eleLayer);
            return a.length < 1 && this.createLayer(), this.resetLayer(), a.show(), this
        }, setLayerSty: function (a) {
            var b = e(this.eleLayer);
            return b.addClass(a), this
        }, resetLayer: function () {
            var a = e(this.eleLayer), b = "g-word-translate";
            a.removeClass().addClass(b).html("")
        }, render: function () {
            var b, c = e.trim(this.curWord), d = c.split(/\s/), f = this, g = this.url + c, h = e(this.eleLayer), i = a("toefl/tpl/translate.tpl"), j = template.compile(i), k = '<div class="nocontent"></div>', l = /[\u4e00-\u9fa5]/.test(c);
            return this.status.loading ? this : d.length > 1 || l ? (h.html(k), this) : (this.status.loading = !0, e.post(g, function (a) {
                1 == a.status && 0 == a.result ? h.html(k) : 1 == a.status && (a.result.supportAudio = f.checkAudio(), b = j(a), h.html(b), f.curWord = a.result.word, f.curAudio = a.result.us_pron), f.status.loading = !1
            }, "json"), this)
        }, favorite: function (a) {
            var b, c, d = this.curWord, f = this;
            return c = a.data("op"), this.status.fav || -1 == c ? this : (b = this.favUrl + "?word=" + d + "&op=" + c, this.status.fav = !0, e.post(b, function (b) {
                var d = 1 - c, e = ["收藏", "已收藏"], g = ".menu-text", h = ".word-icobg", i = ["word-icobg fav-ico", "word-icobg faved-ico"];
                1 == b.status && (a.data("op", d), a.find(g).text(e[d]), a.find(h).removeClass().addClass(i[d]), f.status.fav = !1)
            }, "json"), this)
        }, phonEvent: function () {
            var a = this.curAudio;
            return this.checkAudio() && (this.player || this.createPlayer(), this.setMedia(a).play()), this
        }, checkAudio: function () {
            return document.createElement("audio").canPlayType ? !0 : !1
        }, createPlayer: function () {
            return this.player = document.createElement("audio"), this.player.setAttribute("preload", "auto"), document.body.appendChild(this.player), this
        }, setMedia: function (a) {
            var b;
            return a && "" != a ? (this.player && (b = this.player.getAttribute("src"), b != a && this.player.setAttribute("src", a)), this) : this
        }, play: function () {
            return this.player.play(), this
        }
    }, d(h.prototype, f), c.exports = h
}), define("toefl/js/mod/word/note", ["jquery"], function (a, b, c) {
    var d = a("jquery");
    c.exports = {
        noteInit: function () {
            var a, b, c = this, e = this.eleLayer, f = {
                noteButton: ".note",
                noteSave: ".note-save",
                noteCancel: ".note-cancel"
            };
            this.noteEditorId = "js-translate-note-editor", d(this.popButton).on("click", f.noteButton, function () {
                kmfGlobalUser && 1 != kmfGlobalUser.loginStatus || (a = c.status.$targetEle, b = c.status.selectId, c.status.$targetEle = {}, c.openLayer().setLayerSty("g-translate-note js-blank-retain").setLayerPosition().noteRender())
            }), d(document).on("click", e + " " + f.noteSave, function () {
                c.noteSave.call(c, d(this), a, b)
            }), d(document).on("click", e + " " + f.noteCancel, function () {
                c.closeLayer()
            }), d(document).on("keyup", "#" + this.noteEditorId, function (a) {
                var b = d(e + " " + f.noteSave);
                "" == d.trim(d(this).val()) ? b.addClass("btn-disabled") : b.removeClass("btn-disabled"), a.stopPropagation()
            })
        }, noteSave: function (a, b, c) {
            var e, f, g = this.noteSource, h = d("#" + this.noteEditorId), i = d.trim(h.val()), j = "js-translate-close", k = this, l = "/app/ajaxsavenotes";
            if ("" != i && !a.data("doing") && !a.hasClass("btn-disabled")) {
                if (a.hasClass(j))return void this.closeLayer();
                1 == c.length && (e = c[0], f = b[e].data("type")), a.data("doing", "doing"), d.post(l, {
                    id: e,
                    type: f,
                    content: i,
                    source: g
                }, function (b) {
                    var c = d(k.eleLayer), e = (c.find(".js-translate-notetips"), c.find(".note-cancel"), c.find(".save-btn"));
                    1 == b.status && (a.removeData("doing"), e.show(), h.attr("readonly", "readonly"), e.stop().animate({top: "-46px"}, 300, function () {
                        e.delay(300).animate({top: "-66px", opacity: 0}, 300), c.delay(500).fadeOut(500)
                    }))
                }, "json")
            }
        }, noteRender: function () {
            var b, c = d(this.eleLayer), e = a("toefl/tpl/word/note.tpl"), f = template.compile(e), g = "", h = this.curWord.replace(/\s{2,}/g, " "), i = h.length + 4, j = this.noteEditorId;
            g = f({words: h}), c.html(g), b = document.getElementById(j), this.setCursorPos(b, i), this.noteSource = h
        }, setCursorPos: function (a, b) {
            if (a.setSelectionRange)a.focus(), a.setSelectionRange(b, b); else if (a.createTextRange) {
                var c = a.createTextRange();
                c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", b), c.select()
            }
        }
    }
}), define("toefl/tpl/word/note.tpl", [], '<div class="note-inner">\n	<h2 class="title-bar js-translate-dragHandle">新的笔记</h2>\n	<div class="note-editor">\n		<textarea class="editor" id="js-translate-note-editor">"{{words}}" ：</textarea>\n	</div>\n	<div class="buttons g-clearfix">\n		<span class="g-floatright">\n			<a class="note-save" href="javascript:void(0)">保存</a>\n			<a class="note-cancel" href="javascript:void(0)">取消</a>\n		</span>\n		<span class="tips js-translate-notetips">保存成功！<em class="g-g9">你可以在“</em><a href="/profile/notes" class="g-hl-1" target="_blank">我的记录→笔记</a><em class="g-g9">”中查看。</em></span>\n	    <span class="save-btn"></span>\n    </div>\n</div>\n'), define("toefl/js/mod/word/drag", ["jquery"], function (a, b, c) {
    var d = a("jquery"), e = function (a, b) {
        var c, e, f, g, h = {handleEle: ".title-bar"}, i = !1, j = "js-dragging";
        h = d.extend(h, b), d(document).delegate(a + " " + h.handleEle, "mousedown", function (b) {
            var h = d(this).parents(a), k = (h.offset(), h.css("top")), l = h.css("left");
            c = b.pageX, e = b.pageY, f = "auto" == l ? 0 : parseInt(l), g = "auto" == k ? 0 : parseInt(k), h.addClass(j), i = !0
        }), d(document).on({
            mousemove: function (b) {
                if (i) {
                    {
                        var h = b.pageX, j = b.pageY, k = d(a), l = h - c + f, m = j - e + g;
                        d(this)
                    }
                    b.preventDefault(), k.css({left: l, top: m})
                }
            }, mouseup: function () {
                var b = d(a);
                b.removeClass(j), i = !1
            }
        })
    };
    c.exports = e
}), define("toefl/tpl/word/popButton.tpl", [], '{{each toolList}}\n{{if $index > 0}}\n<span class="split">|</span>\n{{/if}}\n<a class="menu {{$value.className}}" href="javascript:;"><span class="toolicobg {{$value.className}}-ico"></span>{{$value.menu}}</a>\n{{/each}}\n<span class="arrow"></span>\n'), define("toefl/tpl/translate.tpl", [], '<div class="inner word-inner js-translate-inner">\n	<div class="main">\n		<p class="word">{{result.word}}</p>\n		<p class="sound">\n			<span class="sound-mark">{{result.phon}}</span>\n			{{if result.us_pron}}\n			<a href="javascript:void(0)" class="word-icobg sound-ico js-word-play{{if !result.supportAudio}} js-kmf-tips{{/if}}" {{if !result.supportAudio}} data-msg="您的浏览器版本太低"{{/if}}></a>\n			{{/if}}\n		</p>\n        {{each result.translate}}\n		<p class="zh">{{$value.property}}&nbsp;{{$value.cn_translate}}</p>\n        {{/each}}\n	</div>\n	<div class="bottom-side">\n		<a class="btn-favorite{{if result.fav_status == -1}} js-kmf-login {{/if}}" id="js-translate-fav" data-op="{{result.fav_status}}" href="javascript:void(0)">\n			<span class="word-icobg {{if result.fav_status == 1}}faved-ico{{else}}fav-ico{{/if}}"></span>\n			<span class="menu-text">{{if result.fav_status == 1}}已收藏{{else}}收藏{{/if}}</span>\n		</a>\n		<a class="btn-analyze" href="{{result.detail_url}}" target="_blank"><span class="word-icobg pen-ico"></span><span class="menu-text">详解</span></a>\n	</div>\n</div>'), define("toefl/js/mod/head_user", ["jquery"], function (a) {
    var b = a("jquery"), c = {
        loading: !1, userData: {}, init: function () {
            var a = this, c = b("#js-header-userinfo");
            c.delegate(".username", "mouseenter", function () {
                a.load.call(a)
            }), this.newMessage(), this.myCourse()
        }, load: function () {
            var a = "/app/ajaxuserinfo", c = b("#js-header-userinfo .sub-userinfo"), d = this, e = "loading";
            if (kmfGlobalUser && 1 == kmfGlobalUser.loginStatus) {
                if (d.loading || d.userData[a])return;
                d.loading = !0, b.post(a, function (f) {
                    "" != b.trim(f) && (c.html(f).removeClass(e), d.userData[a] = f), d.loading = !1
                })
            }
        }, newMessage: function () {
            var a = "/app/ajaxmsgcount", c = b("#js-user-message"), d = ".message-count";
            c.size() && kmfGlobalUser && 1 == kmfGlobalUser.loginStatus && b.post(a, function (a) {
                1 == a.status && parseInt(a.result) > 0 ? c.css({display: "inline-block"}).find(d).html(a.result) : c.hide()
            }, "json")
        }, myCourse: function () {
            var a = b(".my-course"), c = a.find(".msg-total"), d = a.find(".icon-unread"), e = a.find(".is-msg"), f = a.find(".no-msg"), g = "/app/ajaxmsgcount";
            a.size() && kmfGlobalUser && 1 == kmfGlobalUser.loginStatus && b.post(g, function (a) {
                1 == a.status && parseInt(a.result) > 0 ? (c.removeClass("g-hide").html(a.result), d.html(a.result), e.removeClass("g-hide")) : (c.addClass("g-hide"), f.removeClass("g-hide"))
            }, "json")
        }
    };
    c.init()
}), define("toefl/js/util/loginGuide", [], function (a) {
    function b(a) {
        i && $.cookie("toefl_fe_login_warn", 1), "up" == a ? e.animate({top: -300}, 300, function () {
            e.hide()
        }) : e.hide()
    }

    var c = a("toefl/tpl/login_guide.tpl"), d = {
        close: ".js-guide-close",
        btnLogin: ".btn-guide-login",
        btnRegister: ".btn-guide-register",
        btnIgnore: ".btn-guide-ignore"
    }, e = $(c), f = $("#GlobeLoginWarn"), g = f.length > 0 && "0" == $.trim(f.val()) && 1 != $.cookie("toefl_fe_login_warn"), h = location.pathname.slice(1).split("/"), i = "exam" == h[0];
    g && (e.appendTo("body"), e.animate({top: 0}, 500), e.find(d.close).on("click", function () {
        b("up")
    }), e.find(d.btnLogin).on("click", b), e.find(d.btnRegister).on("click", b), e.find(d.btnIgnore).on("click", b))
}), define("toefl/tpl/login_guide.tpl", [], '<div class="i-toefl-login-guide" id="js-login-guide-layer">\n	<div class="guide-container">\n		<div class="topbar">\n			<span class="title">请登录账号</span>\n			<a class="guide-close js-guide-close">关闭</a>\n		</div>\n		<div class="guide-body">\n			<div class="chart">\n				\n			</div>\n			<div class="buttons">\n				<p>\n					<a class="btn-guide-login js-kmf-login" href="javascript:void(0)">马上登录</a>\n				</p>\n				<p>\n					<a class="btn-guide-register" href="/account/passportregister?from=tanceng">快速注册</a>\n				</p>\n				<p>\n					<a class="btn-guide-ignore" href="javascript:void(0)">随便看看</a>\n				</p>\n			</div>\n		</div>\n	</div>\n	<div class="shadow"></div>\n</div>'), define("toefl/js/mod/judge-sign-in", ["jquery"], function (a) {
    var b = a("jquery"), c = parseInt(b("#GlobeSignIn").val());
    if (0 == c) {
        var d = b('<div class="g-kmf-signin g-clearfix" id="js-signin-judge"><div class="content g-clearfix"><h2 class="login">登录使用，可以享受完善的 <span>练习数据报告</span></h2><div class="login-button g-clearfix"><a class="login-in js-kmf-login" href="javascript:;">马上登录</a><a class="register" href="/account/passportregister">快速注册</a></div><div class="login-third g-clearfix"><span>第三方登录</span><ul class="g-clearfix"><li class="list-1"><a href="/account/thirdlogin?plat=qq&amp;backurl=http%3A%2F%2Ftoefl.kaomanfen.com%2Flisten%2Ftpo"></a></li><li class="list-2"><a href="/account/thirdlogin?plat=weixin&amp;backurl=http%3A%2F%2Ftoefl.kaomanfen.com%2Flisten%2Ftpo"></a></li><li class="list-3"><a href="/account/thirdlogin?plat=weibo&amp;backurl=http%3A%2F%2Ftoefl.kaomanfen.com%2Flisten%2Ftpo"></a></li><li class="list-4"><a href="/account/thirdlogin?plat=renren&amp;backurl=http%3A%2F%2Ftoefl.kaomanfen.com%2Flisten%2Ftpo"></a></li></ul></div><div class="close-login"></div></div></div>');
        b("body").append(d), setTimeout(function () {
            b("#js-signin-judge").show()
        }, 5e3)
    }
    b(document).delegate(".close-login", "click", function () {
        b("#js-signin-judge").hide()
    })
}), define("toefl/js/mod/userInformation", ["raphael", "jquery"], function (a, b, c) {
    function d(a) {
        var b = {elem: "roundCount", size: 0, name: 0, txt: "蓄势待发", day: "今日"};
        e.extend(b, a);
        b.elem;
        return this.obj = e("#" + b.elem)[0], this.obj ? (this.size = b.size, this.r = Raphael(this.obj, 300, 300), this.rad = 80, this.init = !0, this.speed = 200, this.z = null, this.txtM = b.txt, this.name = b.name, this.day = b.day, this.color = 0 === this.size ? "#cecece" : "#b0e39e", this.minit(), void 0) : !1
    }

    a("raphael");
    var e = a("jquery");
    d.prototype.minit = function () {
        this.r.customAttributes.arc = function (a, b, c) {
            var d, e = 360 / b * a, f = (90 - e) * Math.PI / 180, g = 150 + c * Math.cos(f), h = 150 - c * Math.sin(f);
            return d = b == a ? [["M", 150, 150 - c], ["A", c, c, 0, 1, 1, 149.99, 150 - c]] : [["M", 150, 150 - c], ["A", c, c, 0, +(e > 180), 1, g, h]], bpath = d, {path: d}
        }, this.r.path().attr({
            arc: [100, 100, this.rad],
            "stroke-width": 15,
            stroke: "#f5f5f5"
        }), this.size && (this.z = this.r.path().attr({
            arc: [.01, 100, this.rad],
            "stroke-width": 15,
            stroke: this.color,
            cursor: "pointer"
        }), this.updateVal(this.size, 100, 80, this.z, 2));
        var a = this.r.circle(150, 150, 70);
        a.attr("fill", "#fff"), a.attr("stroke", "none"), this.txt = this.r.text(150, 120, this.day + "得分").attr({
            font: "100 12px Arial",
            fill: "#333"
        }), this.txt = this.r.text(150, 150, this.name).attr({
            font: "700 36px Arial",
            fill: "#000"
        }), this.txt = this.r.text(150, 180, this.txtM).attr({font: "100 14px Arial", fill: "#000"})
    }, d.prototype.updateVal = function (a, b, c, d) {
        this.init ? d.animate({arc: [a, b, c]}, 900, ">") : a && a != b ? d.animate({arc: [a, b, c]}, 750, "elastic") : (a = b, d.animate({arc: [a, b, c]}, 750, "bounce", function () {
            d.attr({arc: [0, b, c]})
        }))
    }, c.exports = function (a) {
        return new d(a)
    }
}), define("toefl/js/mod/profile/js-user-card", ["jquery"], function (a) {
    var b = a("jquery"), c = function (b) {
        function c(b) {
            var c = a("toefl/tpl/user_card.tpl"), e = template.compile(c), f = e(b);
            d.html(f)
        }

        var d = b('<div class="g-kmf-cards cards-top"></div>'), e = d.find(".tips-content"), f = (d.find(".arrow"), {});
        return d.hide(), d.html(""), function (a, g) {
            var h, i, j, k, l = (b.trim(this.data("msg")), this.data("tipsclass"), this.data("dir"), this.offset().top), m = this.offset().left, n = this.width(), o = this.height(), p = b(window).scrollTop(), q = 6;
            e.html();
            var r = 0;
            if (b("body").append(d), h = d.outerWidth(), i = 307, j = l - 60 - q, k = m + n / 2 - h / 2, p > j - i ? (j = l + o + q, r = 1) : (j = l - 62 - q, r = 2), d.css({
                    top: j,
                    left: k
                }), "close" == a)d.hide(), d.html(""), d.remove(); else {
                if (d.show(), f[g])return f[g].iCur = r, void c(f[g]);
                b.post("/account/usercard?uid=" + g, function (a) {
                    a.status && (a.iCur = r, f[g] = a, c(a))
                }, "json")
            }
        }
    }(b);
    b.fn.extend({kmfUserCard: c});
    var d = null, e = null;
    b(document).delegate(".js-user-cards", {
        mouseenter: function () {
            var a = this;
            e = setTimeout(function () {
                var c = b("#GLOBALUID").val(), e = b(a).data("id");
                c != e && (b(a).kmfUserCard("open", e), clearTimeout(d))
            }, 300)
        }, mouseleave: function () {
            var a = this;
            d = setTimeout(function () {
                b(a).kmfUserCard("close")
            }, 300), clearTimeout(e)
        }
    }), b(document).delegate(".user-cards", {
        mouseenter: function () {
            clearTimeout(d)
        }, mouseleave: function () {
            d = setTimeout(function () {
                b(".g-kmf-cards").remove()
            }, 300)
        }
    })
}), define("toefl/tpl/user_card.tpl", [], '<div class="user-cards {{if iCur == 1}}user-cards-down{{else}}user-cards-up{{/if}}">\n    <div class="top-card-array"></div>\n    <div class="top-card-bg">\n        <h2 class="card-username">{{result.user_name}}</h2>\n        <p class="card-userleave">Lv: <span>{{result.level}}</span></p>\n        <img class="card-userhead" src="{{result.pic_url}}" alt="{{result.user_name}}"/>\n    </div>\n    <div class="card-info">\n        <p class="exam-info">{{result.exam_time}}</p>\n        <p class="exam-time">{{result.goal_score}}</p>\n    </div>\n    <div class="card-score">\n        <ul>\n            <li class="total-score">\n                <span>{{result.total_score}}</span>\n                <i>总得分</i>\n            </li>\n            <li class="target-score">\n                <span>{{result.day_top_score}}</span>\n                <i>日最高得分</i>\n            </li>\n        </ul>\n    </div>\n</div>\n'), define("toefl/js/mod/profile/charts_list", [], function (a) {
    function b(b, c) {
        $.post(b, function (b) {
            if (b.status) {
                var d = a("toefl/tpl/charts_month_load.tpl"), e = template.compile(d), f = e(b);
                c.find(".ranking").html(f), c.find(".ranking").css("background", "#fff")
            }
        }, "json")
    }

    var c = $(".charts-list");
    if ($(".charts-list-center").length) {
        var d = c.data("subject"), e = "/app/ajaxsquarescorelist?subject=" + d;
        $.post(e, function (b) {
            if (b.status) {
                var c = a("toefl/tpl/charts_list.tpl"), d = template.compile(c), e = d(b);
                $(".charts-list-center").html(e)
            }
        }, "json")
    }
    c.delegate(".left-time", "click", function () {
        $(this).parent(".box-ang").addClass("current").siblings().removeClass("current");
        var a = "";
        c.find(".update-change li").each(function (b, c) {
            $(c).hasClass("current") && (a = $(this).data("logtype"))
        });
        var d = c.data("subject"), e = $(this).parent().data("studenttype"), f = "/app/ajaxsquarescorelist?subject=" + d + "&studenttype=" + e + "&logtype=" + a;
        c.find(".ranking").html("").css("background", "none"), b(f, c)
    }), c.delegate(".ico", "click", function (a) {
        $(".change-date-study").addClass("hide"), $(this).siblings().hasClass("hide") ? $(this).siblings().removeClass("hide") : $(this).siblings().addClass("hide"), a.stopPropagation()
    }), $(document).click(function () {
        $(".change-date-study").addClass("hide")
    }), c.delegate(".change-date-study li", "click", function () {
        $(this).addClass("js-current").siblings().removeClass("js-current"), $(this).addClass("on-active").siblings().removeClass("on-active"), $(this).parents(".right-time-change").siblings(".left-time").html($(this).html()), $(this).parents(".box-ang").addClass("current").siblings().removeClass("current");
        var a = "";
        c.find(".update-change li").each(function (b, c) {
            $(c).hasClass("current") && (a = $(this).data("logtype"))
        });
        var d = $(this).data("studenttype"), e = c.data("subject");
        c.find(".charts-list-change .more").data("studenttype", d);
        var f = "/app/ajaxsquarescorelist?subject=" + e + "&studenttype=" + d + "&logtype=" + a;
        c.find(".ranking").html("").css("background", "none"), b(f, c)
    }), c.delegate(".change-date-study li", "mouseover", function () {
        $(this).siblings().removeClass("on-active"), $(this).addClass("list-active")
    }), c.delegate(".change-date-study li", "mouseout", function () {
        $(this).removeClass("list-active"), $(this).parent().find(".js-current").addClass("on-active")
    }), c.delegate(".update-change li", "click", function () {
        $(this).addClass("current").siblings().removeClass("current");
        var a = "";
        c.find(".box-ang").each(function (b, c) {
            $(c).hasClass("current") && (a = $(this).data("studenttype"))
        });
        var d = $(this).data("logtype"), e = c.data("subject"), f = "/app/ajaxsquarescorelist?subject=" + e + "&studenttype=" + a + "&logtype=" + d;
        c.find(".ranking").html("").css("background", "none"), b(f, c)
    })
}), define("toefl/tpl/charts_list.tpl", [], '<div class="charts-list-wrap">\n    <div class="charts-list-change g-clearfix">\n        <div class="box-ang current" data-studentType="0">\n            <div class="left-time">所有考生</div>\n        </div>\n        <div class="box-ang more" data-studentType="{{result.listInfo.examDate}}">\n            {{each result.studentType}}\n            {{if result.listInfo.examDate == $value.type}}\n            <div class="left-time">{{$value.text}}</div>\n            {{/if}}\n            {{/each}}\n            <div class="right-time-change">\n                <i class="ico"></i>\n                <ul class="change-date-study hide">\n                    {{each result.studentType}}\n                    <li data-studentType="{{$value.type}}"{{if result.listInfo.examDate == $value.type}}class="js-current on-active"{{else}}{{/if}}>{{$value.text}}</li>\n                    {{/each}}\n                </ul>\n            </div>\n        </div>\n    </div>\n    <div class="charts-list-update">\n        <!--<p class="update-type">膜拜一下大神吧(^o^)/</p>-->\n        {{each result.logTypeList as value index}}\n        {{if index == 0}}\n        {{each value as i ind}}\n        <p class="update-type">{{i}}</p>\n        {{/each}}\n        {{else index == 1}}\n        <ul class="update-change">\n            {{each value as i ind}}\n            {{if ind == 0}}\n            <li data-logType="{{i.logType}}" class="current">{{i.logName}}</li>\n            {{else}}\n            <li data-logType="{{i.logType}}">{{i.logName}}</li>\n            {{/if}}\n            {{/each}}\n        </ul>\n        {{/if}}\n        {{/each}}\n    </div>\n    <div class="charts-list-ranking">\n        <ul class="ranking">\n            {{each result.scoreList}}\n            {{if $value.isSelf == 0}}\n            {{if $value.rank == 1}}\n            <li data-id="{{$value.id}}" class="list-charts medal first">\n                <div class="charts-img">\n                    <div class="avatar"></div>\n                    <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}"/>\n                </div>\n                <div class="charts-info">\n                    <span data-id="{{$value.id}}" class="charts-info-name js-user-cards">{{$value.name}}</span>\n                    <span class="charts-info-score">{{$value.score}}分</span>\n                </div>\n            </li>\n            {{else if $value.rank == 2}}\n            <li data-id="{{$value.id}}" class="list-charts medal second">\n                <div class="charts-img">\n                    <div class="avatar"></div>\n                    <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}"/>\n                </div>\n                <div class="charts-info">\n                    <span data-id="{{$value.id}}" class="charts-info-name js-user-cards">{{$value.name}}</span>\n                    <span class="charts-info-score">{{$value.score}}分</span>\n                </div>\n            </li>\n            {{else if $value.rank == 3}}\n            <li data-id="{{$value.id}}" class="list-charts medal third">\n                <div class="charts-img">\n                    <div class="avatar"></div>\n                    <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}"/>\n                </div>\n                <div class="charts-info">\n                    <span data-id="{{$value.id}}" class="charts-info-name js-user-cards">{{$value.name}}</span>\n                    <span class="charts-info-score">{{$value.score}}分</span>\n                </div>\n            </li>\n            {{else if $value.rank == 6}}\n            <li data-id="{{$value.id}}" class="list-charts">\n                <div class="charts-order">\n                    <i>{{$value.rank}}.</i>\n                    <span data-id="{{$value.id}}" class="charts-info-name js-user-cards">{{$value.name}}</span>\n                </div>\n                <div class="charts-message">{{$value.score}}分</div>\n            </li>\n            {{if result.listInfo.pass != 0}}\n            <li class="list-charts past">\n                <div class="past-list">\n                    <span>飞过{{result.listInfo.pass}}人</span>\n                </div>\n            </li>\n            {{/if}}\n            {{else}}\n            <li data-id="{{$value.id}}" class="list-charts">\n                <div class="charts-order">\n                    <i>{{$value.rank}}.</i>\n                    <span data-id="{{$value.id}}" class="charts-info-name js-user-cards">{{$value.name}}</span>\n                </div>\n                <div class="charts-message">{{$value.score}}分</div>\n            </li>\n            {{/if}}\n            {{else if $value.isSelf == 1}}\n            {{if $value.rank == 1}}\n            <li data-id="{{$value.id}}" class="list-charts medal first present">\n                <div class="present-list">\n                    <div class="present-img">\n                        <div class="avatar"></div>\n                        <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}">\n                    </div>\n                    <div class="present-my-info">\n                        <p data-id="{{$value.id}}" class="my-info-top js-user-cards">{{$value.name}}</p>\n                        <p class="my-info-below">{{$value.score}}分，{{$value.slogan}}</p>\n                    </div>\n                </div>\n            </li>\n            {{else if $value.rank == 2}}\n            <li data-id="{{$value.id}}" class="list-charts medal second present">\n                <div class="present-list">\n                    <div class="present-img">\n                        <div class="avatar"></div>\n                        <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}">\n                    </div>\n                    <div class="present-my-info">\n                        <p data-id="{{$value.id}}" class="my-info-top js-user-cards">{{$value.name}}</p>\n                        <p class="my-info-below">{{$value.score}}分，{{$value.slogan}}</p>\n                    </div>\n                </div>\n            </li>\n            {{else if $value.rank == 3}}\n            <li data-id="{{$value.id}}" class="list-charts medal third present">\n                <div class="present-list">\n                    <div class="present-img">\n                        <div class="avatar"></div>\n                        <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}">\n                    </div>\n                    <div class="present-my-info">\n                        <p data-id="{{$value.id}}" class="my-info-top js-user-cards">{{$value.name}}</p>\n                        <p class="my-info-below">{{$value.score}}分，{{$value.slogan}}</p>\n                    </div>\n                </div>\n            </li>\n            {{else if $value.rank == 6}}\n            <li data-id="{{$value.id}}" class="list-charts present">\n                <div class="charts-order">{{$value.rank}}.</div>\n                <div class="present-list">\n                    <div class="present-img">\n                        <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}">\n                    </div>\n                    <div class="present-my-info">\n                        <p data-id="{{$value.id}}" class="my-info-top js-user-cards">{{$value.name}}</p>\n                        <p class="my-info-below">{{$value.score}}分，{{$value.slogan}}</p>\n                    </div>\n                </div>\n            </li>\n            {{if result.listInfo.pass != 0}}\n            <li class="list-charts past">\n                <div class="past-list">\n                    <span>飞过{{result.listInfo.pass}}人</span>\n                </div>\n            </li>\n            {{/if}}\n            {{else if $value.rank == -1}}\n            <li data-id="{{$value.id}}" class="list-charts present">\n                <div class="charts-order no-score">∞</div>\n                <div class="present-list">\n                    <div class="present-img">\n                        <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}">\n                    </div>\n                    <div class="present-my-info">\n                        <p data-id="{{$value.id}}" class="my-info-top js-user-cards">{{$value.name}}</p>\n                        <p class="my-info-below">{{$value.score}}分，{{$value.slogan}}</p>\n                    </div>\n                </div>\n            </li>\n            {{else}}\n            <li data-id="{{$value.id}}" class="list-charts present">\n                <div class="charts-order">{{$value.rank}}.</div>\n                <div class="present-list">\n                    <div class="present-img">\n                        <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}">\n                    </div>\n                    <div class="present-my-info">\n                        <p data-id="{{$value.id}}" class="my-info-top js-user-cards">{{$value.name}}</p>\n                        <p class="my-info-below">{{$value.score}}分，{{$value.slogan}}</p>\n                    </div>\n                </div>\n            </li>\n            {{/if}}\n            {{/if}}\n            {{/each}}\n        </ul>\n    </div>\n</div>'), define("toefl/tpl/charts_month_load.tpl", [], '{{each result.scoreList}}\n    {{if $value.isSelf == 0}}\n        {{if $value.rank == 1}}\n        <li data-id="{{$value.id}}" class="list-charts medal first">\n            <div class="charts-img">\n                <div class="avatar"></div>\n                <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}"/>\n            </div>\n            <div class="charts-info">\n                <span data-id="{{$value.id}}" class="charts-info-name js-user-cards">{{$value.name}}</span>\n                <span class="charts-info-score">{{$value.score}}分</span>\n            </div>\n        </li>\n        {{else if $value.rank == 2}}\n        <li data-id="{{$value.id}}" class="list-charts medal second">\n            <div class="charts-img">\n                <div class="avatar"></div>\n                <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}"/>\n            </div>\n            <div class="charts-info">\n                <span data-id="{{$value.id}}" class="charts-info-name js-user-cards">{{$value.name}}</span>\n                <span class="charts-info-score">{{$value.score}}分</span>\n            </div>\n        </li>\n        {{else if $value.rank == 3}}\n        <li data-id="{{$value.id}}" class="list-charts medal third">\n            <div class="charts-img">\n                <div class="avatar"></div>\n                <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}"/>\n            </div>\n            <div class="charts-info">\n                <span data-id="{{$value.id}}" class="charts-info-name js-user-cards">{{$value.name}}</span>\n                <span class="charts-info-score">{{$value.score}}分</span>\n            </div>\n        </li>\n        {{else if $value.rank == 6}}\n        <li data-id="{{$value.id}}" class="list-charts">\n            <div class="charts-order">\n                <i>{{$value.rank}}.</i>\n                <span data-id="{{$value.id}}" class="charts-info-name js-user-cards">{{$value.name}}</span>\n            </div>\n            <div class="charts-message">{{$value.score}}分</div>\n        </li>\n        {{if result.listInfo.pass != 0}}\n        <li class="list-charts past">\n            <div class="past-list">\n                <span>飞过{{result.listInfo.pass}}人</span>\n            </div>\n        </li>\n        {{/if}}\n        {{else}}\n        <li data-id="{{$value.id}}" class="list-charts">\n            <div class="charts-order">\n                <i>{{$value.rank}}.</i>\n                <span data-id="{{$value.id}}" class="charts-info-name js-user-cards">{{$value.name}}</span>\n            </div>\n            <div class="charts-message">{{$value.score}}分</div>\n        </li>\n        {{/if}}\n    {{else if $value.isSelf == 1}}\n        {{if $value.rank == 1}}\n        <li data-id="{{$value.id}}" class="list-charts medal first present">\n            <div class="present-list">\n                <div class="present-img">\n                    <div class="avatar"></div>\n                    <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}">\n                </div>\n                <div class="present-my-info">\n                    <p data-id="{{$value.id}}" class="my-info-top js-user-cards">{{$value.name}}</p>\n                    <p class="my-info-below">{{$value.score}}分，{{$value.slogan}}</p>\n                </div>\n            </div>\n        </li>\n        {{else if $value.rank == 2}}\n        <li data-id="{{$value.id}}" class="list-charts medal second present">\n            <div class="present-list">\n                <div class="present-img">\n                    <div class="avatar"></div>\n                    <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}">\n                </div>\n                <div class="present-my-info">\n                    <p data-id="{{$value.id}}" class="my-info-top js-user-cards">{{$value.name}}</p>\n                    <p class="my-info-below">{{$value.score}}分，{{$value.slogan}}</p>\n                </div>\n            </div>\n        </li>\n        {{else if $value.rank == 3}}\n        <li data-id="{{$value.id}}" class="list-charts medal third present">\n            <div class="present-list">\n                <div class="present-img">\n                    <div class="avatar"></div>\n                    <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}">\n                </div>\n                <div class="present-my-info">\n                    <p data-id="{{$value.id}}" class="my-info-top js-user-cards">{{$value.name}}</p>\n                    <p class="my-info-below">{{$value.score}}分，{{$value.slogan}}</p>\n                </div>\n            </div>\n        </li>\n        {{else if $value.rank == 6}}\n        <li data-id="{{$value.id}}" class="list-charts present">\n            <div class="charts-order">{{$value.rank}}.</div>\n            <div class="present-list">\n                <div class="present-img">\n                    <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}">\n                </div>\n                <div class="present-my-info">\n                    <p data-id="{{$value.id}}" class="my-info-top js-user-cards">{{$value.name}}</p>\n                    <p class="my-info-below">{{$value.score}}分，{{$value.slogan}}</p>\n                </div>\n            </div>\n        </li>\n        {{if result.listInfo.pass != 0}}\n        <li class="list-charts past">\n            <div class="past-list">\n                <span>飞过{{result.listInfo.pass}}人</span>\n            </div>\n        </li>\n        {{/if}}\n        {{else if $value.rank == -1}}\n        <li data-id="{{$value.id}}" class="list-charts present">\n            <div class="charts-order no-score">∞</div>\n            <div class="present-list">\n                <div class="present-img">\n                    <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}">\n                </div>\n                <div class="present-my-info">\n                    <p data-id="{{$value.id}}" class="my-info-top js-user-cards">{{$value.name}}</p>\n                    <p class="my-info-below">{{$value.score}}分，{{$value.slogan}}</p>\n                </div>\n            </div>\n        </li>\n        {{else}}\n        <li data-id="{{$value.id}}" class="list-charts present">\n            <div class="charts-order">{{$value.rank}}.</div>\n            <div class="present-list">\n                <div class="present-img">\n                    <img data-id="{{$value.id}}" class="js-user-cards" src="{{$value.pic_url}}" alt="{{$value.name}}">\n                </div>\n                <div class="present-my-info">\n                    <p data-id="{{$value.id}}" class="my-info-top js-user-cards">{{$value.name}}</p>\n                    <p class="my-info-below">{{$value.score}}分，{{$value.slogan}}</p>\n                </div>\n            </div>\n        </li>\n        {{/if}}\n    {{/if}}\n{{/each}}'), define("toefl/js/mod/learn/toefl-top-ad", [], function () {
    !function () {
        function a(a) {
            a ? c.show().stop().animate({height: 30}, 500) : (e.show().stop().animate({height: 280}, 1e3), d.show())
        }

        var b = $(".i-toefl-ad980");
        if (b.size()) {
            var c = b.find(".ad-btn-show"), d = b.find(".btn-top-close"), e = b.find(".ad-wrap"), f = $.cookie("toefl_top_ad"), g = Number($("#TopAdTime").val());
            c.on("click", function () {
                $(this).stop().animate({height: 0}, 500, function () {
                    $(this).hide(), e.show().stop().animate({height: 280})
                })
            }), d.on("click", function () {
                e.stop().animate({height: 0}, 1e3, function () {
                    $(this).hide(), c.show().stop().animate({height: 30}, 500), $.cookie("toefl_top_ad", 1, {
                        expires: g / 86400,
                        path: "/"
                    })
                })
            }), a(f)
        }
    }()
}), define("toefl/js/mod/learn/public-class-open", [], function (a) {
    !function () {
        function b(b) {
            b.result.opens = $.cookie("toefl_public_class"), b.result.openStatus = k.data("status");
            var i = a("toefl/tpl/learn/public-class-open.tpl"), j = template.compile(i), l = j(b);
            k.html(l), k.addClass("no-loading");
            var m = b.result.today.status, n = $(".large-open").find(".is-active-box").data("status");
            if (0 != b.result.today_day && 6 != b.result.today_day) {
                var o = m == n ? m : 0;
                switch (o) {
                    case 1:
                        c(), f();
                        break;
                    case 2:
                        d(), g();
                        break;
                    case 4:
                        e(), h()
                }
            }
        }

        function c() {
            function a() {
                e--, f--, c.html(j(e)), d.html(j(f)), 900 >= e && ($(".is-times-1").addClass("g-hide"), $(".is-times-2").removeClass("g-hide")), 0 >= e && (clearInterval(g), $(".is-times-2").addClass("g-hide"), $(".is-times-3").removeClass("g-hide"))
            }

            var b = k.find(".is-active-box").data("lesson");
            if (b) {
                var c = $(".is-times-1").find(".is-over-times"), d = $(".is-times-2").find(".is-start-time"), e = Number(c.data("time")), f = Number(d.html());
                c.html(j(e)), d.html(j(f)), a();
                var g = setInterval(a, 1e3)
            }
        }

        function d() {
            var a = $(".is-time-4").find(".is-start-time"), b = Number(a.data("time"));
            a.html(j(b));
            var c = setInterval(function () {
                b--, a.html(j(b)), 0 >= b && (clearInterval(c), $(".is-time-4").addClass("g-hide"), $(".is-time-5 ").removeClass("g-hide"))
            }, 1e3)
        }

        function e() {
            var a = $(".is-time-6").find(".time-is-out"), b = Number(a.data("time"));
            a.html(j(b));
            var c = setInterval(function () {
                b--, a.html(j(b)), 600 >= b && (clearInterval(c), $(".is-time-6").addClass("g-hide"), $(".is-time-7").removeClass("g-hide"))
            }, 1e3)
        }

        function f() {
            function a() {
                f--, g--, d.html(j(f)), e.html(j(g)), 900 >= g && (b.find(".timer-before-1").addClass("g-hide"), b.find(".timer-before-2").removeClass("g-hide")), 0 >= g && (clearInterval(h), b.find(".timer-before-2").addClass("g-hide"), b.find(".timer-before-3").removeClass("g-hide"))
            }

            var b = k.find(".is-times-runs"), c = b.data("lesson");
            if (c) {
                var d = b.find(".timer-before-1 .is-time-living .time-is-out"), e = b.find(".timer-before-2 .is-start-time"), f = Number(d.data("time")), g = Number(e.data("time"));
                d.html(j(f)), e.html(j(g)), a();
                var h = setInterval(a, 1e3)
            }
        }

        function g() {
            var a = $(".is-times-runs .timer-before-2").find(".is-start-time"), b = Number(a.data("time"));
            a.html(j(b));
            var c = setInterval(function () {
                b--, a.html(j(b)), 0 >= b && (clearInterval(c), $(".timer-before-2").addClass("g-hide"), $(".timer-before-3").removeClass("g-hide"))
            }, 1e3)
        }

        function h() {
            var a = $(".is-times-runs .timer-before-4").find(".is-time-replaying .time-is-out"), b = Number(a.data("time"));
            a.html(j(b));
            var c = setInterval(function () {
                b--, a.html(j(b)), 600 >= b && (clearInterval(c), $(".timer-before-4").addClass("g-hide"), $(".timer-before-5").removeClass("g-hide"))
            }, 1e3)
        }

        function i(a) {
            return 10 > a ? "0" + a : "" + a
        }

        function j(a) {
            var b = i(Math.floor(a / 3600)), c = i(Math.floor(a % 3600 / 60)), d = i(Math.floor(a % 60));
            return b + ":" + c + ":" + d
        }

        var k = $("#i-kmf-publicClass");
        if (k.size()) {
            var l = "/course/ajaxnewpublicdetail";
            $.post(l, function (a) {
                a.status && b(a)
            }, "json"), $(document).delegate(".large-open-btn", "click", function () {
                var a = k.data("status"), b = $(this);
                $(".wrap-contents-class").stop().animate({height: 50}, 500), $(".i-kmf-publicClass").stop().animate({height: 50}, 500), k.find(".large-open").stop().animate({opacity: 0}, 500, function () {
                    $(this).hide()
                }), k.find(".small-open").stop().animate({opacity: 1}, 500, function () {
                    $(this).show(), $(".small-open-btn").show()
                }), b.hide(), a && $.post("/course/ajaxnewcoursecookie", function (a) {
                    a.status && $.cookie("toefl_public_class", 1, {expires: a.result / 86400, path: "/"})
                }, "json")
            }), $(document).delegate(".small-open-btn", "click", function () {
                var a = $(this);
                k.find(".small-open").stop().animate({opacity: 0}, 500, function () {
                    $(this).hide(), $(".large-open-btn").show()
                }), a.hide(), k.find(".large-open").stop().animate({opacity: 1, height: 130}, 500, function () {
                    $(this).show(), $(".wrap-contents-class").animate({height: 130}), $(".i-kmf-publicClass").animate({height: 130})
                })
            }), $(document).delegate(".large-wrap-days", "click", function () {
                $(this).addClass("is-active-show").siblings().removeClass("is-active-show");
                var a = $(this).index();
                k.find(".large-wrap-box").eq(a).addClass("is-active-box").siblings().removeClass("is-active-box")
            })
        }
    }()
}), define("toefl/tpl/learn/public-class-open.tpl", [], '<div class="wrap-contents-class {{if result.opens == null || result.openStatus == 0}}wrap-content-open{{/if}}">\n    <div class="small-open">\n        <div class="small-left">\n            <p class="small-left-title">公开课</p>\n            <p class="small-left-title">{{result.today.today_tip_info}}</p>\n        </div>\n        <div class="small-right">\n            <div class="small-wrap-left g-clearfix">\n                <h3 class="small-wrap-title">{{result.today.title}}</h3>\n            </div>\n            <div class="small-wrap-right">\n                <div class="small-wrap-info">{{result.today.pre_tip_info}}</div>\n                <div class="small-wrap-time">\n                    {{if result.today.status == 3 || result.today.status == 5}}\n                    <div class="small-start-liveing">\n                        <!--直播中-->\n                        <!--is-replaying-in is-liveing-in-->\n                        {{if result.today.status == 3}}\n                        <span class="ico-live is-liveing-in"></span>\n                        <i class="live-in-info">直播中<em class="dotting"></em></i>\n                        <a class="is-going " href="{{result.today.url}}" target="_blank">马上进入</a>\n                        {{else if result.today.status == 5}}\n                        <i class="live-in-info">重播中<em class="dotting"></em></i>\n                        <a class="is-going " href="{{result.today.url}}" target="_blank">马上进入</a>\n                        {{/if}}\n                    </div>\n                    {{else if result.today.status == 1 || result.today.status == 2 || result.today.status == 4}}\n                    <div class="small-start-time g-clearfix">\n                        <!-- is-liveing 直播时间 -->\n                        <!-- is-liveing-bottom 直播倒计时-->\n                        {{if result.today.status == 1}}\n                        <!--直播时间-->\n                        <div class="is-times-1">\n                            <span class="ico-time is-liveing"></span>\n                            <i class="ico-info">直播时间：</i>\n                            <em class="time-out is-start-time">{{result.today.info}}</em>\n                            <span class="is-over-times g-hide" data-time="{{result.today.left_time}}"></span>\n                        </div>\n                        <!--倒计时-->\n                        <div class="is-times-2 g-hide">\n                            <span class="ico-time is-liveing-bottom "></span>\n                            <i class="ico-info is-time-over ">倒计时：</i>\n                            <em class="time-out is-start-time ">{{result.today.left_time}}</em>\n                            <a class="is-going " href="{{result.today.url}}" target="_blank">马上进入</a>\n                        </div>\n                        <!--直播中-->\n                        <div class="is-times-3 g-hide">\n                            <span class="ico-live is-liveing-in "></span>\n                            <i class="live-in-info ">直播中<em class="dotting"></em></i>\n                            <a class="is-going " href="{{result.today.url}}" target="_blank">马上进入</a>\n                        </div>\n                        {{else if result.today.status == 2}}\n                        <div class="is-time-4">\n                            <span class="ico-time is-liveing-bottom"></span>\n                            <i class="ico-info ">倒计时：</i>\n                            <em class="time-out is-start-time" data-time="{{result.today.left_time}}"></em>\n                            <a class="is-going " href="{{result.today.url}}" target="_blank">马上进入</a>\n                        </div>\n                        <div class="is-time-5 g-hide">\n                            <span class="ico-live is-liveing-in "></span>\n                            <i class="live-in-info ">直播中<em class="dotting"></em></i>\n                            <a class="is-going " href="{{result.today.url}}" target="_blank">马上进入</a>\n                        </div>\n                        {{else if result.today.status == 4}}\n                        <!--is-over-time-->\n                        <!--重播-->\n                        <div class="is-time-6">\n                            <span class="ico-time is-replaying"></span>\n                            <i class="ico-info">重播时间：</i>\n                            <em class="time-out is-start-time">{{result.today.info}}</em>\n                            <i class="g-hide time-is-out" data-time="{{result.today.left_time}}"></i>\n                        </div>\n                        <!---->\n                        <div class="is-time-7 g-hide">\n                            <i class="live-in-info">重播中<em class="dotting"></em></i>\n                            <a class="is-going" href="{{result.today.url}}" target="_blank">马上进入</a>\n                        </div>\n                        <!--{{else if result.today.status}}\n                        <i class="ico-info">重播中：</i>\n                        <a class="is-going " href="javascript:;">马上进入</a>-->\n                        {{/if}}\n                        <!--is-over-time-->\n                    </div>\n                    {{else if result.today.status == 6}}\n                    <span class="small-time-over">已结束</span>\n                    {{/if}}\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="large-open">\n        <div class="large-left-title"></div>\n        <div class="large-right-wrap g-clearfix">\n            <ol class="large-wrap-up">\n                {{each result.public_datail}}\n                <li class="large-wrap-days {{if $value.day == result.today_day}}is-active-show{{/if}}">{{$value.info.tip}}</li>\n                {{/each}}\n            </ol>\n            <div class="large-wrap-down g-clearfix">\n                {{each result.public_datail}}\n                <div class="large-wrap-box g-clearfix {{if $value.day == result.today_day}}is-active-box is-times-runs{{/if}}" {{if $value.day == result.today_day}}data-status={{$value.tip.status}}{{/if}} data-lesson="{{$value.is_status}}">\n                    <div class="wrap-box-left">\n                        <h3 class="box-left-title">{{$value.info.title}}</h3>\n                        <p class="box-left-main">主讲老师：<span>{{$value.info.t_name}}</span></p>\n                        <p class="box-left-main">解决问题：<span title="{{$value.info.painpoint}}">{{$value.info.painpoint}}</span></p>\n                    </div>\n                    <div class="wrap-box-right">\n                        <div class="box-live-before is-time-before g-clearfix">\n                            {{if $value.tip.status == 1}}\n                            <div class="timer-before-1">\n                                <p class="publice-live is-time-living">\n                                    <span class="ico-time is-liveing"></span>\n                                    <i class="ico-info">直播时间：</i>\n                                    <em class="time-out is-start-time">{{$value.play.info}}</em>\n                                    <span class="g-hide time-is-out" data-time="{{$value.play.left_time}}"></span>\n                                </p>\n                                <p class="publice-live">\n                                    <span class="ico-time is-replaying"></span>\n                                    <i class="ico-info">重播时间：</i>\n                                    <em class="time-out is-start-time">{{$value.replay.info}}</em>\n                                    <span class="g-hide time-is-out" data-time="{{$value.play.left_time}}"></span>\n                                </p>\n                            </div>\n                            <div class="timer-before-2 g-hide">\n                                <p class="publice-live">\n                                    <span class="ico-time is-liveing-bottom"></span>\n                                    <i class="ico-info">倒计时：</i>\n                                    <em class="time-out is-start-time" data-time="{{$value.play.left_time}}"></em>\n                                </p>\n                                <a class="is-goin " href="{{$value.info.playurl}}" target="_blank">马上进入</a>\n                            </div>\n                            <div class="timer-before-3 g-hide">\n                                <div class="box-live-in">\n                                    <div class="live-in-start">\n                                        <span class="ico-live is-liveing-in"></span>\n                                        <i class="live-in-info">直播中<em class="dotting"></em></i>\n                                    </div>\n                                    <a class="is-goin" href="{{$value.info.playurl}}" target="_blank">马上进入</a>\n                                </div>\n                            </div>\n                            {{else if $value.tip.status == 2}}\n                            <div class="timer-before-2">\n                                <p class="publice-live">\n                                    <span class="ico-time is-liveing-bottom"></span>\n                                    <i class="ico-info">倒计时：</i>\n                                    <em class="time-out is-start-time" data-time="{{$value.play.left_time}}"></em>\n                                </p>\n                                <a class="is-goin " href="{{$value.info.playurl}}" target="_blank">马上进入</a>\n                            </div>\n                            <div class="timer-before-3 g-hide">\n                                <div class="box-live-in">\n                                    <div class="live-in-start">\n                                        <span class="ico-live is-liveing-in"></span>\n                                        <i class="live-in-info">直播中<em class="dotting"></em></i>\n                                    </div>\n                                    <a class="is-goin" href="{{$value.info.playurl}}" target="_blank">马上进入</a>\n                                </div>\n                            </div>\n                            {{else if $value.tip.status == 3}}\n                            <div class="timer-before-3">\n                                <div class="box-live-in">\n                                    <div class="live-in-start">\n                                        <span class="ico-live is-liveing-in"></span>\n                                        <i class="live-in-info">直播中<em class="dotting"></em></i>\n                                    </div>\n                                    <a class="is-goin" href="{{$value.info.playurl}}" target="_blank">马上进入</a>\n                                </div>\n                            </div>\n                            {{else if $value.tip.status == 4}}\n                            <div class="timer-before-4 ">\n                                <p class="publice-live">\n                                    <span class="ico-time is-liveing"></span>\n                                    <i class="ico-info">直播时间：</i>\n                                    <em class="time-out is-over-time">已结束</em>\n                                </p>\n                                <p class="publice-live is-time-replaying">\n                                    <span class="ico-time is-replaying"></span>\n                                    <i class="ico-info">重播时间：</i>\n                                    <em class="time-out is-start-time">{{$value.replay.info}}</em>\n                                    <span class="g-hide time-is-out" data-time="{{$value.replay.left_time}}"></span>\n                                </p>\n                            </div>\n                            <div class="timer-before-5 g-hide">\n                                <div class="box-live-in">\n                                    <div class="live-in-start">\n                                        <span class="ico-live is-replaying-in"></span>\n                                        <i class="live-in-info">重播中<em class="dotting"></em></i>\n                                    </div>\n                                    <a class="is-goin" href="{{$value.info.playurl}}" target="_blank">马上进入</a>\n                                </div>\n                            </div>\n                            {{else if $value.tip.status == 5}}\n                            <div class="box-live-in">\n                                <div class="live-in-start">\n                                    <span class="ico-live is-replaying-in"></span>\n                                    <i class="live-in-info">重播中<em class="dotting"></em></i>\n                                </div>\n                                <a class="is-goin" href="{{$value.info.playurl}}" target="_blank">马上进入</a>\n                            </div>\n                            {{else if $value.tip.status == 6}}\n                            <div class="timer-before-6">\n                                <p class="publice-live">\n                                    <span class="ico-time is-liveing"></span>\n                                    <i class="ico-info">直播时间：</i>\n                                    <em class="time-out is-over-time">已结束</em>\n                                </p>\n                                <p class="publice-live">\n                                    <span class="ico-time is-replaying"></span>\n                                    <i class="ico-info">重播时间：</i>\n                                    <em class="time-out is-over-time">已结束</em>\n                                </p>\n                            </div>\n                            {{/if}}\n                        </div>\n                    </div>\n                </div>\n                {{/each}}\n            </div>\n        </div>\n    </div>\n</div>\n<div class="large-derail small-open-btn {{if result.opens == null || result.openStatus == 0}}g-hide{{/if}}">详情</div>\n<div class="large-derail large-open-btn {{if result.opens != null && result.openStatus != 0}}g-hide{{/if}}">收起</div>\n'), define("toefl_spoken/js/mod/submit-question", [], function () {
    !function () {
        $("#provide").on("click", function () {
            var a = '<p class="user-info">非常感谢您能提交题目，我们的工作人员会定期进行整理并发布到考满分网站上的</p><h3 class="title-msg">请以压缩包的形式上传题目，请包括如下信息</h3><ul class="list-question"><li class="question-num">1. 题目内容信息，来源等</li><li class="question-num">2. 相关的图片，音频等</li><li class="question-num">3. 建议放置的位置</li></ul><input type="file" id="submit" /><a class="submit-btn" id="submit-btn">上传文件</a>';
            return alert({
                title: "提交题目",
                message: '<div class="question-dialog"><div class="question-dialog-main">' + a + "</div></div>",
                dialogClass: "s-dialog-submitObject",
                width: 620,
                height: 330,
                draggable: !1
            }), !1
        }), $(document).delegate("#submit", "change", function () {
            $("#submit-btn").css("display", "block")
        }), $(document).delegate("#submit-btn", "click", function () {
            var a = $("#submit").val(), b = "/subject/ajaxuploadsubjectquestion", c = {question: a}, d = '<p class="is-success-sub">上传成功</p><p class="thanks-msg">感谢您的支持和帮助，我们会尽快进行处理</p>';
            $.post(b, c, function (a) {
                a.status && ($(".question-dialog-main").html("").css("opacity", 0), setTimeout(function () {
                    $(".question-dialog-main").css("opacity", 1).html(d)
                }, 1500))
            }, "json")
        })
    }()
});