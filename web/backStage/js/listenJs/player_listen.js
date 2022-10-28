define("toefl/js/channel/player_listen", ["jquery", "../util/kmfPlayerList", "../mod/cursor", "../mod/player/write_scrollto", "../plugin/jquery-jplayer", "../plugin/jquery-slider", "jqueryui", "../../../common/js/util/dialog-login", "../../../common/tpl/login.tpl", "../../../common/js/mod/login", "../../tpl/rate-submenu.tpl", "../../tpl/listen-pannel.tpl", "../../tpl/fav-menu.tpl", "../../tpl/fav-submenu.tpl", "../../tpl/write-pannel.tpl", "../../tpl/write-operate-l.tpl", "../mod/exit_listen", "../mod/player_type_tips", "../../tpl/player_type_tips.tpl", "../mod/modify/modify", "../../../common/js/mod/str"], function (a, b, c) {
    var d = (a("jquery"), a("../util/kmfPlayerList")), e = a("../mod/exit_listen");
    a("../mod/player_type_tips");
    var f = a("../mod/modify/modify");
    f.init({modifyUrl: "/subject/errorreport"}), e({title: "精听练习", message: "确认退出此次的精听练习吗?"}), c.exports = {kmfPlay: d}
}), define("toefl/js/util/kmfPlayerList", ["jquery", "toefl/js/mod/cursor", "toefl/js/mod/player/write_scrollto", "toefl/js/plugin/jquery-jplayer", "toefl/js/plugin/jquery-slider", "jqueryui", "common/js/util/dialog-login", "common/js/mod/login"], function (a, b, c) {
    var d = a("jquery"), e = a("toefl/js/mod/cursor"), f = a("toefl/js/mod/player/write_scrollto");
    a("toefl/js/plugin/jquery-jplayer"), a("toefl/js/plugin/jquery-slider");
    var g = a("common/js/util/dialog-login"), h = function (a, b, c) {
        var e, f, g, h = this, i = d('<div id="kmflayer"></div>'), j = {
            playList: null,
            listUrl: "",
            cssSelector: {
                playType: ".play-model a",
                playProgress: ".progress",
                volume: ".volume-progress",
                totalTime: ".jp-total-time",
                next: ".jp-next",
                prev: ".jp-prev",
                playRate: ".jp-play-rate",
                miniPlay: ".js-playSelected",
                rateSubmenu: ".rate-submenu",
                favorite: ".jp-favorite",
                pannel: "#js-listen-pannel",
                pannelPlaying: ".pannel-playing",
                pannelPause: ".pannel-pause",
                pannelRepeat: ".pannel-repeat",
                pannelRepeatW: ".pannel-repeat-w",
                pannelNext: ".pannel-next",
                pannelStatus: ".pannel-status",
                pannelStatusW: ".pannel-status-w",
                pannelDesc: ".pannel-desc",
                pannelPlay: ".pannel-play",
                pannelLrc: ".pannel-enter-lrc",
                pannelWriteLrc: ".pannel-write-lrc",
                writeCurSentence: ".pannel-towrite",
                lrcEnter: ".enter-lrc",
                lrcBody: "#js-lrc",
                lrcSentence: ".lrc-sentence",
                lrcParagraph: ".lrc-paragraph",
                listenCount: ".listen-count .count",
                writePannel: ".s-pannel-write",
                inWord: ".pannel-word",
                words: ".js-words",
                writeWword: ".write-word",
                words: ".js-words",
                toWritePannel: "#js-toWrite",
                toListenPannel: "#js-toListen"
            },
            lrcCenter: "lrc-list-center",
            playTypeSty: "current",
            playType: "sentence",
            autoPlay: !1,
            postType: "accurate",
            listenUrl: "",
            logUrl: "",
            favUrl: "",
            curAudio: 0,
            listenType: 0
        };
        this.listOptions = d.extend({}, j, b), b && b.cssSelector && (this.listOptions.cssSelector = d.extend({}, j.cssSelector, b.cssSelector)), this.curAudio = this.listOptions.curAudio, this.current = {
            sentence: -1,
            write: -1,
            paragraph: 0,
            full: 0
        }, this.playType = this.listOptions.playType, this.isBegin = !0, this.answers = {}, this.writeStatus = {}, this.lrcStatus = {}, this.playTimer = null, this.hasLrc = !0, this.lrcTimer = null;
        var k = navigator.userAgent;
        this.isSafari = /safari/i.test(k), this.listOptions && this.listOptions.playList && (this.playList = this.initList(this.listOptions.playList)), this.listOptions && this.listOptions.listUrl && this.loadList();
        var l = {
            ready: function (a) {
                f = a.jPlayer.flash.used && /m4a|m4v/.test(a.jPlayer.options.supplied), h.listOptions.playList && (h.setMedia(h.playList[0].filePath), h.listOptions.autoPlay && h.play.call(h))
            },
            swfPath: "/dist/toefl/images/",
            solution: "html, flash",
            supplied: "mp3",
            wmode: "window",
            defaultPlaybackRate: 1,
            smoothPlayBar: !0,
            keyEnabled: 1 == this.listOptions.listenType || 2 == this.listOptions.listenType ? !0 : !1,
            keyBindings: {
                muted: {
                    key: 8, fn: function () {
                    }
                }
            },
            remainingDuration: !0,
            toggleDuration: !0,
            cssSelectorAncestor: "#jp_container_1",
            timeupdate: function (a) {
                e || d(h.listOptions.cssSelector.playProgress).slider("value", a.jPlayer.status.currentPercentAbsolute)
            }
        };
        return a.length < 1 ? (i.appendTo("body"), this.$ele = i) : this.$ele = a, this.options = d.extend({}, l, c), this.$ele.jPlayer(this.options), this.$ele.on(d.jPlayer.event.loadedmetadata, function (a) {
            d(h.listOptions.cssSelector.totalTime).text(d.jPlayer.convertTime(a.jPlayer.status.duration))
        }), this.$ele.on(d.jPlayer.event.timeupdate, function (a) {
            a.jPlayer.status.isSeeked ? (h.updateCurrent(a), h.breakPoint(a)) : (h.breakPoint(a), h.updateCurrent(a)), h.updateInterface(), h.favorite()
        }), this.$ele.on(d.jPlayer.event.ended, function (a) {
            h.breakPoint(a, !0)
        }), d(this.options.cssSelectorAncestor).delegate(this.listOptions.cssSelector.next, "click", function () {
            h.next.call(h)
        }), d(this.options.cssSelectorAncestor).delegate(this.listOptions.cssSelector.prev, "click", function () {
            h.prev.call(h)
        }), d(this.options.cssSelectorAncestor).delegate(this.listOptions.cssSelector.miniPlay, "click", function () {
            var a = d.trim(d(this).data("time"));
            h.play.call(h, a, !0), h.$ele.jPlayer("setSeek", !0), h.$ele.trigger("changePlay")
        }), d(this.options.cssSelectorAncestor).delegate(this.listOptions.cssSelector.playType, "click", function () {
            var a = d(this).data("type");
            h.changeType.call(h, a, function () {
                var b = h.current.sentence;
                "write" === a && (console.log(b), h.initLrc.call(h, h.formatLrc, b), h.showAnswer()), h.updateTypeUI.call(h), h.hideLrc.call(h), h.updateCount.call(h), h.favorite.call(h)
            }), d(this).siblings(".current").removeClass("current"), d(this).addClass("current")
        }), d(this.options.cssSelectorAncestor + " " + this.listOptions.cssSelector.favorite).on({
            mouseenter: function () {
                d(this).find(".sub-menu").show()
            }, mouseleave: function () {
                d(this).find(".sub-menu").hide()
            }
        }), d(this.listOptions.cssSelector.playProgress).slider({
            animate: "fast",
            max: 100,
            range: "min",
            step: .1,
            value: 0,
            slide: function (a, b) {
                var c = h.$ele.data("jPlayer").status.seekPercent;
                c > 0 ? (f && (e = !0, clearTimeout(g), g = setTimeout(function () {
                    e = !1
                }, 1e3)), h.$ele.jPlayer("playHead", b.value * (100 / c)), h.$ele.jPlayer("setSeek", !0)) : setTimeout(function () {
                    d(h.listOptions.cssSelector.playProgress).slider("value", 0)
                }, 0)
            }
        }), d(this.listOptions.cssSelector.volume).slider({
            animate: "fast",
            max: 1,
            range: "min",
            step: .01,
            value: h.initVolume(),
            slide: function (a, b) {
                h.$ele.jPlayer("option", "muted", !1), h.$ele.jPlayer("option", "volume", b.value), h.saveVolume(b.value)
            }
        }), this.pannelEvent(), this.writePannelEvent(), this.rateEvent(), this.favEvent(), this.loadLrc(function () {
            h.$ele.jPlayer(h.options)
        }), this.$ele.on("changePlay", function () {
            h.hideLrc()
        }), this.$ele.on("kmfPlay", function () {
            "write" == this.playType
        }), d(".player-aside-list").scroll(function () {
            h.asideScorlling || (h.delayScollTimmer && (clearTimeout(h.delayScollTimmer), h.delayScollTimmer = null), h.delayScroll = !0, h.delayScollTimmer = setTimeout(function () {
                h.delayScroll = !1
            }, 4e3))
        }), this
    };
    h.prototype = {
        status: {isWrite: !1}, initList: function (a) {
            var b = a || [];
            return d.each(b, function () {
                this.paragraph = this.section || [], this.write = this.sentence, this.full = this.article || [], this.audio = this.audio || {}, this.filePath = {}, this.audio.formatType && this.audio.filePath && (this.filePath[this.audio.formatType] = this.audio.filePath)
            }), b
        }, loadList: function () {
            var a = this;
            d.post(this.listOptions.listUrl, function (b) {
                1 == b.status && (a.playList = a.initList(b.result))
            }, "json")
        }, setMedia: function (a) {
            this.$ele.jPlayer("setMedia", a)
        }, play: function (a, b) {
            var c = this;
            "undefined" != typeof a ? this.isSafari ? this.$ele.jPlayer("play", parseFloat(a) + .05) : this.$ele.jPlayer("play", parseFloat(a)) : this.$ele.jPlayer("play"), this.$ele.trigger("kmfPlay"), this.playTimer && (clearTimeout(this.playTimer), null == this.playTimer), b && (this.playTimer = setTimeout(function () {
                c.$ele.trigger(d.jPlayer.event.play)
            }, 220))
        }, nextPlay: function () {
            var a, b = this.switchType(), c = this.playList[this.curAudio][b];
            this.current[b]++, a = c[this.current[b]] ? c[this.current[b]].start_time : 0, this.play(a, !0), this.$ele.trigger("changePlay")
        }, next: function () {
            var a = this.playList[this.curAudio].sentence, b = a.length;
            "paragraph" == this.playType && this.$ele.jPlayer("setSeek", !0), this.current.sentence < b - 1 && (this.current.sentence++, this.play(a[this.current.sentence].start_time, !0)), this.$ele.trigger("changePlay")
        }, prev: function () {
            var a = this.playList[this.curAudio].sentence;
            this.current.sentence > 0 && (this.current.sentence--, this.play(a[this.current.sentence].start_time, !0)), this.$ele.trigger("changePlay")
        }, select: function () {
        }, pause: function (a) {
            "undefined" != typeof a ? this.isSafari ? this.$ele.jPlayer("pause", parseFloat(a) + .05) : this.$ele.jPlayer("pause", parseFloat(a)) : this.$ele.jPlayer("pause"), d.jPlayer.browser.msie && (Number(d.jPlayer.browser.version) < 9 || d.jPlayer.browser.documentMode < 9) && self.$ele.trigger(d.jPlayer.event.timeupdate)
        }, getTotalTime: function () {
            var a, b = this.playList[this.curAudio], c = b.audio.audio_time, d = c.split(":"), e = d.length, f = 0;
            for (a = 0; e - 1 > a; a++)f += Math.pow(60, e - a - 1) * parseInt(d[a]);
            return f += parseFloat(d[e - 1])
        }, changeType: function (a, b) {
            this.playType = a, "function" == typeof b && b()
        }, switchType: function () {
            return "write" === this.playType ? "sentence" : this.playType
        }, breakPoint: function (a, b) {
            var c, d = this.switchType(), e = this.playList[this.curAudio][d], f = (e.timeList, this.current[d]), g = !1;
            0 > f || (g = e[f + 1] ? a.jPlayer.status.currentTime >= e[f + 1].start_time : b, g && (c = e[f].start_time, this.pause(c), this.totalCount(f), this.totalLog(f), this.isBreak = !0))
        }, totalLog: function (a) {
            var b, c = this.listOptions.logUrl, e = d("#js-type").val(), f = this.switchType(), g = this.playList[this.curAudio][f], h = d("#js-examUnique").val(), i = d("#js-question_id").val(), j = g[a].id, k = g[a].audio_time;
            void 0 !== e && "" != c && (b = {
                cost: k,
                type: e,
                exam_unique: h,
                question_id: i,
                lyric_id: j
            }, d.post(c, b, function (a) {
                1 == a.status
            }, "json"))
        }, totalCount: function (a) {
            var b, c = this.listOptions.listenUrl, e = this.listOptions.postType, f = this.switchType(), g = this.playList[this.curAudio][f], h = g[a].id, i = this;
            "" != c && (b = {type: e, lyric_id: h}, d.post(c, b, function (b) {
                1 == b.status && (g[a].listenCount++, i.updateCount.call(i))
            }, "json"))
        }, setPlayRate: function (a) {
            a > 0 && this.$ele.jPlayer("playbackRate", a)
        }, updateCount: function () {
            var a, b = d(this.options.cssSelectorAncestor), c = this.switchType(), e = this.playList[this.curAudio][c], f = this.current[c] < 0 ? 0 : this.current[c], g = b.find(this.listOptions.cssSelector.listenCount);
            a = e[f].listenCount, g.text(a)
        }, updateCurrent: function (a) {
            function b(a) {
                for (var b = -1, c = 0, d = a.length; d > c; c++)e >= a[c].start_time && (b = c);
                return b
            }

            var c = this.playList[this.curAudio].sentence, d = this.playList[this.curAudio].paragraph, e = a.jPlayer.status.currentTime;
            this.current.sentence = b(c), this.current.paragraph = b(d) < 0 ? 0 : b(d), this.updateCount(), a.jPlayer.status.isSeeked && this.$ele.jPlayer("setSeek", !1)
        }, repeat: function () {
            var a = this.switchType(), b = this.playList[this.curAudio][a], c = -1 == this.current[a] ? 0 : this.current[a], d = b[c].start_time;
            this.play(d)
        }, updateInterface: function () {
            var a = this.current.sentence, b = this.current.paragraph, c = "lrc-sentence-current", e = "current", f = d(".lrc-sentence"), g = d(".pl-paragraph"), h = d(".pl-sentence"), i = d("#js-btn-modify"), j = this;
            if (d("." + c).removeClass(c), a > -1 && (i.data("reportid", this.playList[this.curAudio].sentence[a].id), f.eq(a).addClass(c)), g.length > 0 && (g.removeClass(e), g.eq(b).addClass(e)), h.length > 0 && (h.removeClass(e), a > -1 && (h.eq(a).addClass(e), !j.delayScroll))) {
                var k = h.eq(a).position(), l = d(".player-aside-list"), m = d(".playlist-sentences").outerHeight(), n = l.scrollTop(), o = k.top + 50;
                o > m + n ? (j.scrollTimmer && (clearTimeout(j.scrollTimmer), j.scrollTimmer = null), j.asideScorlling = !0, l.stop(!0, !1).animate({scrollTop: o - m / 2}, 500, function () {
                    j.scrollTimmer = setTimeout(function () {
                        j.asideScorlling = !1
                    }, 100)
                })) : n > o && (j.scrollTimmer && (clearTimeout(j.scrollTimmer), j.scrollTimmer = null), j.asideScorlling = !0, l.stop(!0, !1).animate({scrollTop: o}, 300, function () {
                    j.scrollTimmer = setTimeout(function () {
                        j.asideScorlling = !1
                    }, 100)
                }))
            }
            this.showLrc(!0)
        }, rateEvent: function () {
            var b = this, c = d(this.options.cssSelectorAncestor), e = this.listOptions.cssSelector.playRate, f = c.find(e), g = c.find(this.listOptions.cssSelector.rateSubmenu), h = ".rate-value", i = ".cur-value", j = "play-rate-hover", k = null;
            f.on({
                mouseenter: function () {
                    k && clearTimeout(k);
                    var b = d.trim(d(this).find(i).text()), c = a("toefl/tpl/rate-submenu.tpl");
                    g.html(c), g.find("a").each(function () {
                        d.trim(d(this).find(h).text()) == b ? (d(this).prependTo(g), d(this).addClass("current")) : d(this).removeClass("current")
                    }), g.show(), d(this).addClass(j).stop(!0, !1).animate({height: 96}, 300)
                }, mouseleave: function () {
                    var a = d(this);
                    k = setTimeout(function () {
                        a.removeClass(j).stop(!0, !1).animate({height: 24}, 300, function () {
                            g.hide()
                        })
                    }, 100)
                }
            }), g.on({
                mouseenter: function () {
                    k && clearTimeout(k)
                }, mouseleave: function () {
                    k = setTimeout(function () {
                        f.removeClass(j).stop(!0, !1).animate({height: 144}, 300, function () {
                            g.hide()
                        })
                    }, 100)
                }
            }), g.on("click", "a", function () {
                var a = d.trim(d(this).find(h).text());
                b.setPlayRate.call(b, a), f.find(i).html(a), f.css({height: 24}).removeClass(j), g.hide()
            })
        }, pannelEvent: function () {
            var a = this, b = d(this.options.cssSelectorAncestor), c = 219, e = 221;
            d(this.listOptions.cssSelector.pannel).length < 1 || (this.$ele.on(d.jPlayer.event.play, function () {
                a.pannelStatus.call(a, "play"), a.isBegin = !1, a.isBreak = !1
            }), this.$ele.on(d.jPlayer.event.pause, function () {
                a.updateTypeUI.call(a), a.pannelStatus.call(a, "pause")
            }), b.delegate(this.listOptions.cssSelector.pannelRepeat, "click", function () {
                a.play.call(a)
            }), b.delegate(this.listOptions.cssSelector.pannelNext, "click", function () {
                a.nextPlay.call(a)
            }), b.delegate(this.listOptions.cssSelector.pannelPlay, "click", function () {
                a.play.call(a)
            }), b.delegate(this.listOptions.cssSelector.writeCurSentence, "click", function () {
                a.changeType.call(a, "write", function () {
                    a.updateTypeUI.call(a), a.hideLrc.call(a)
                }), b.find(a.listOptions.cssSelector.playType + "[data-type=write]").addClass("current").siblings(".current").removeClass("current")
            }), b.delegate(this.listOptions.cssSelector.pannelLrc, "click", function () {
                a.showLrc.call(a)
            }), (1 == this.listOptions.listenType || 2 == this.listOptions.listenType) && d(document).on("keyup", function (b) {
                b.keyCode == c ? "write" === a.playType ? a.repeat.call(a) : a.prev.call(a) : b.keyCode == e && a.next.call(a)
            }))
        }, listenAndWrite: function (a) {
            var b = d(this.listOptions.cssSelector.toListenPannel), c = d(this.listOptions.cssSelector.toWritePannel), e = d(this.listOptions.cssSelector.lrcBody), f = this.current.sentence, g = this;
            f = 1 > f ? 0 : f, "write" == a ? (c.show(), b.hide(), e.hide(), g.initLrc.call(g, g.formatLrc, f), g.showAnswer()) : (c.hide(), b.show())
        }, pannelStatus: function (a) {
            var b = d(this.options.cssSelectorAncestor), c = this.listOptions.cssSelector.pannelStatus, e = this.listOptions.cssSelector.pannelStatusW, f = this.listOptions.cssSelector.pannelPlaying, g = this.listOptions.cssSelector.pannelDesc, h = ".slogan", i = ["正在播放中..."], j = 0;
            "play" == a ? (b.find(f).find(h).html(i[j]), b.find(f).show(), b.find(c).hide(), b.find(e).hide(), b.find(g).length > 0 && b.find(g).remove()) : "pause" == a && (b.find(f).hide(), b.find(c).show(), b.find(e).show())
        }, updateTypeUI: function () {
            var b, c = a("toefl/tpl/listen-pannel.tpl"), e = template.compile(c), f = {
                isBegin: this.isBegin,
                playType: this.playType
            }, g = d(this.options.cssSelectorAncestor), h = this.listOptions.cssSelector.pannelStatus, i = d(this.listOptions.cssSelector.toListenPannel), j = d(this.listOptions.cssSelector.toWritePannel);
            "write" === this.playType ? (j.show(), i.hide()) : (b = e(f), j.hide(), i.show(), g.find(h).html(b))
        }, showLrc: function (a) {
            var b = d(this.options.cssSelectorAncestor), c = this.listOptions.cssSelector.lrcBody, e = b.find(this.listOptions.cssSelector.lrcEnter), f = this.listOptions.cssSelector.lrcSentence, g = this.listOptions.cssSelector.lrcParagraph, h = this.listOptions.lrcCenter, i = this.current.paragraph, j = this.current.sentence < 0 ? 0 : this.current.sentence, k = this.playType, l = ".s-user-guide";
            switch (d(c).hasClass(h) && d(c).removeClass(h), k) {
                case"sentence":
                    d(c).find(f).hide(), d(c).find(g).hide(), d(c).find(f).eq(j).show().parents(g).show(), d(c).addClass(h + " g-f24");
                    break;
                case"paragraph":
                    d(c).find(f).hide(), d(c).find(g).hide(), d(c).find(g).eq(i).show().find(f).show(), d(l).hide();
                    break;
                default:
                    d(c).find(f).show(), d(c).find(g).show(), d(l).hide(), d(c).removeClass("g-f24")
            }
            a || (e.hide(), d(c).show())
        }, hideLrc: function () {
            var a = d(this.listOptions.cssSelector.lrcBody), b = d(this.options.cssSelectorAncestor), c = b.find(this.listOptions.cssSelector.lrcEnter);
            a.lenght < 1 || (b.find(c).show(), a.hide())
        }, favorite: function () {
            {
                var b, c, e, f = this.playType, g = this.playList[this.curAudio], h = this.current.paragraph, i = this.current.sentence < 0 ? 0 : this.current.sentence, j = this.current.full, k = a("toefl/tpl/fav-menu.tpl"), l = a("toefl/tpl/fav-submenu.tpl"), m = template.compile(k), n = template.compile(l), o = d(this.options.cssSelectorAncestor), p = o.find(this.listOptions.cssSelector.favorite), q = p.find(".favorite"), r = p.find(".sub-menu");
                1 == g.paragraph.length
            }
            b = {
                playType: f,
                favList: {sentence: g.sentence[i].fav, paragraph: g.paragraph[h].fav, full: g.full[j].fav},
                isHideP: !0
            }, c = m(b), e = n(b), q.html(c), r.html(e)
        }, favEvent: function () {
            var a = d(this.options.cssSelectorAncestor), b = a.find(this.listOptions.cssSelector.favorite), c = this.listOptions.favUrl, e = this.playList[this.curAudio], f = this;
            b.delegate("a", "click", function () {
                var a = d(this).data("fav") || d(this).find(".menu-text").data("fav"), b = d(this).data("type") || d(this).find(".menu-text").data("type"), h = f.current[b] < 0 ? 0 : f.current[b], i = e[b][h].id, j = d("#userStatus");
                if (0 == j.val())var k = g(function () {
                    j.val(1), k.dialog("close"), d.post(c, {object: "lyric", op: a, id: i}, function (c) {
                        1 == c.status && (e[b][h].fav = !a, f.favorite.call(f))
                    }, "json")
                }).dialog("open"); else d.post(c, {object: "lyric", op: a, id: i}, function (c) {
                    1 == c.status && (e[b][h].fav = !a, f.favorite.call(f))
                }, "json")
            })
        }, saveVolume: function (a) {
            void 0 != a && d.cookie("toefl_player_volume", a, {expires: 3650, path: "/"})
        }, initVolume: function () {
            var a = d.cookie("toefl_player_volume") || .8;
            return this.$ele.jPlayer("volume", a), a
        }, loadLrc: function (a) {
            var b = this.listOptions.lrcUrl, c = this;
            this.listOptions.lrcUrl && d.post(b, function (b) {
                if (1 == b.status) {
                    {
                        c.formatLrc = c.formatLrc(b.result)
                    }
                    c.initLrc(c.formatLrc, 0), "function" == typeof a && a()
                }
            }, "json")
        }, formatLrc: function (a) {
            if (!a || !a.length)return this.hasLrc = !1, [];
            var b = d('<span style="display:inline-block;font-size:24px;"></span>');
            return b.appendTo("body"), d.each(a, function () {
                d(this).each(function () {
                    b.html(this.word), this.wordWidth = b.outerWidth() + 36
                })
            }), b.remove(), a
        }, initLrc: function (b, c) {
            var e, f = a("toefl/tpl/write-pannel.tpl"), g = template.compile(f), h = d(this.listOptions.cssSelector.writePannel);
            this.hasLrc ? (e = g({hasLrc: this.hasLrc, list: b[c]}), h.html(e)) : (e = g({
                hasLrc: this.hasLrc,
                list: b
            }), h.html(e))
        }, noLrcAnswer: function () {
            var a = this.playType, b = this.current[a] < 0 ? 0 : this.current[a], c = d(this.listOptions.cssSelector.pannel), e = ".in-word-nolrc", f = c.find(e), g = this.answers[b];
            g && f.val(g.word)
        }, saveAnswer: function (a) {
            var b = this.switchType(), c = this.current[b] < 0 ? 0 : this.current[b], e = d(this.listOptions.cssSelector.pannel), f = this.listOptions.cssSelector.words, g = this.listOptions.cssSelector.inWord, h = (e.find(g), e.find(f)), i = [], j = !0, k = !0, l = this;
            h.each(function (a) {
                var b = d(this), e = b.find(g), f = d.trim(e.length > 0 ? e.val() : b.find(".js-rightAnswer").text()), h = {};
                h.word = f, 0 == l.formatLrc[c][a].display ? h.result = 3 : "" == f ? (j = !1, h.result = 0) : f.toLowerCase() == l.formatLrc[c][a].word.toLowerCase() ? h.result = 1 == b.data("autoshow") ? 4 : 1 : (j = !1, h.result = 2), i.push(h), "" != f && 1 == l.formatLrc[c][a].display && (k = !1)
            }), this.answers[c] = k ? null : i, "function" == typeof a && a(), this.writeStatus[c] = j, j && this.updateWriteTypeUI()
        }, showAnswer: function () {
            var a = this.switchType(), b = this.current[a] < 0 ? 0 : this.current[a], c = d(this.listOptions.cssSelector.pannel), e = this.listOptions.cssSelector.inWord, f = c.find(e), g = this, h = this.answers[b], i = "g-hl-2", j = "g-hl-3", k = [];
            return h ? (f.each(function (a) {
                var b = h[a], c = b.result, e = d(this), f = '<em class="g-f24 js-rightAnswer em-word">' + b.word + "</em>", l = '<em class="g-f24 js-rightAnswer em-word">' + b.word + "</em>";
                switch (c) {
                    case 0:
                        k.push(e);
                        break;
                    case 3:
                        break;
                    case 1:
                        e.parents(g.listOptions.cssSelector.words).append(l).data("autoshow", "2").addClass(i).removeClass(g.listOptions.cssSelector.writeWword.slice(1)), e.remove();
                        break;
                    case 2:
                        e.val(b.word), e.removeClass(i).addClass(j);
                        break;
                    case 4:
                        e.parents(g.listOptions.cssSelector.words).append(f).data("autoshow", "1").removeClass(g.listOptions.cssSelector.writeWword.slice(1)), e.remove()
                }
            }), void(k.length && (this.focusInput = k[0]))) : void(this.focusInput = f.eq(0))
        }, showWriteLrc: function (a) {
            var b = this.switchType(), c = this.current[b] < 0 ? 0 : this.current[b], e = d(this.listOptions.cssSelector.pannel), f = (this.listOptions.cssSelector.words, e.find(this.listOptions.cssSelector.words)), g = this.listOptions.cssSelector.inWord, h = (e.find(g), this.answers[c]), i = this.formatLrc[c], j = "g-hl-2", k = "g-hl-1";
            e.addClass("js-word-disabled"), f.each(function (a) {
                var b = d(this), c = d('<em class="g-f24"></em');
                b.html(c.html(i[a].word)), 0 != i[a].display && h && h[a] && 1 == h[a].result && c.addClass(j), 0 == i[a].display && c.addClass(k)
            }), this.updateWriteTypeUI(a)
        }, writePannelEvent: function () {
            var a = this, b = d(this.options.cssSelectorAncestor), c = d(this.listOptions.cssSelector.pannel), g = this.listOptions.cssSelector.inWord, h = (this.listOptions.cssSelector.autoWord, this.listOptions.cssSelector.words), i = this.listOptions.cssSelector.writeWword, j = ".word-mask", k = ".in-word-nolrc", l = ".word-tips-body", m = ".word-tips", n = "g-hl-2", o = "g-hl-3", p = 219, q = 221, r = 32, s = 39, t = 37, u = 8, v = 13, w = ".js-lrc-countdown";
            c.length < 1 || 1 != this.listOptions.listenType || (this.$ele.on(d.jPlayer.event.play, function () {
                if (a.pannelStatus.call(a, "play"), a.isBegin = !1, a.lrcTimer && (clearInterval(a.lrcTimer), a.lrcTimer = null), "write" === a.playType) {
                    var b = a.current.sentence < 0 ? 0 : a.current.sentence;
                    a.initLrc(a.formatLrc, b), a.showAnswer(), a.hasLrc || a.noLrcAnswer()
                }
            }), this.$ele.on(d.jPlayer.event.pause, function () {
                a.updateWriteTypeUI.call(a), a.pannelStatus.call(a, "pause"), "write" === a.playType && a.focusInput && a.focusInput.focus()
            }), b.delegate(this.listOptions.cssSelector.pannelRepeatW, "click", function () {
                a.status.isWrite = !0, a.play.call(a)
            }), b.delegate(this.listOptions.cssSelector.pannelPlay, "click", function () {
                a.play.call(a)
            }), b.delegate(this.listOptions.cssSelector.pannelLrc, "click", function () {
                a.showLrc.call(a)
            }), b.delegate(this.listOptions.cssSelector.pannelWriteLrc, "click", function () {
                var b = "js-writing-continue", e = "pannel-disabled", f = 5, g = a.switchType(), h = a.current[g] < 0 ? 0 : a.current[g];
                if (!d(this).hasClass(e)) {
                    if (d(this).hasClass(b))return clearInterval(a.lrcTimer), a.lrcTimer = null, a.updateWriteTypeUI(1), a.initLrc(a.formatLrc, h), a.showAnswer(), void c.removeClass("js-word-disabled");
                    a.lrcTimer && (clearInterval(a.lrcTimer), a.lrcTimer = null), a.lrcTimer = setInterval(function () {
                        f--, 1 > f && (clearInterval(a.lrcTimer), a.lrcTimer = null, a.updateWriteTypeUI(1), a.initLrc(a.formatLrc, h), a.showAnswer(), c.removeClass("js-word-disabled")), d(w).text(f)
                    }, 1e3), a.showWriteLrc.call(a, 2)
                }
            }), c.delegate(g, {
                blur: function () {
                    var b = d.trim(d(this).val()), c = d(this).data("sn"), e = a.current.sentence < 0 ? 0 : a.current.sentence, f = a.formatLrc[e][c].word, g = '<em class="g-f24 js-rightAnswer em-word">' + b + "</em>";
                    a.saveAnswer.call(a), 0 == a.formatLrc[e][c].display || "" == b || d(this).attr("readonly") || (b.toLowerCase() == f.toLowerCase() ? d(this).parents(a.listOptions.cssSelector.words).html(g).addClass(n).removeClass(a.listOptions.cssSelector.writeWword.slice(1)) : d(this).removeClass(n).addClass(o))
                }, focus: function () {
                    d(this).removeClass(o).removeClass(n), f({$ele: d(this).parents(h)})
                }, keydown: function (a) {
                    var b = d(this).val(), c = b.length, f = e.get(d(this).get(0)).end, g = d(this).parents(h).nextAll(i).eq(0).find("input"), j = d(this).parents(h).prevAll(i).find("input");
                    return a.keyCode == p || a.keyCode == q ? (a.preventDefault(), !1) : a.keyCode > 222 ? (a.preventDefault(), !1) : (a.keyCode == s && f == c && (g.focus(), g.select()), a.keyCode == t && 0 == f || a.keyCode == u && "" == b ? (j.focus(), !1) : ((a.keyCode == v || a.keyCode == r) && g.length < 1 && d(this).blur(), a.keyCode == r ? (g.focus(), a.preventDefault(), !1) : void 0))
                }, keyup: function (a) {
                    var b = /[\]\[\u3010\u3011\u3000]+/g, c = d(this).val();
                    c = c.replace(/[\uff01-\uff5e]/g, function (a) {
                        return String.fromCharCode(a.charCodeAt(0) - 65248)
                    }), c = c.replace(b, ""), a.keyCode == p && d(this).val(c), a.keyCode == q && (d(this).val(c), d(this).blur())
                }
            }), c.delegate(k, {
                blur: function () {
                    d.trim(d(this).val());
                    a.saveLrc.call(a)
                }, keydown: function (a) {
                    return a.keyCode == p || a.keyCode == q ? (a.preventDefault(), d(this).blur(), !1) : a.keyCode > 222 ? (a.preventDefault(), !1) : void 0
                }
            }), c.delegate(h, {
                mouseenter: function () {
                    var a = d(this).find(g), b = d.trim(a.val()), c = d(this).data("autoshow");
                    c || ("" == b || a.hasClass(o)) && d(this).find(".word-tips-body").show()
                }, mouseleave: function () {
                    d(this).find(".word-tips-body").hide()
                }
            }), c.delegate(j, "click", function () {
                d(this).parents(l).hide(), d(this).parents(h).find("input").focus()
            }), c.delegate(m, "click", function () {
                var b = d(this).parents(h), c = b.find("input"), e = c.data("sn"), f = a.current.sentence < 0 ? 0 : a.current.sentence, g = a.formatLrc[f][e].word, i = '<em class="g-f24 js-rightAnswer em-word">' + g + "</em>";
                b.append(i).data("autoshow", "1").removeClass(a.listOptions.cssSelector.writeWword.slice(1)), c.remove(), d(this).parents(l).hide(), a.saveAnswer.call(a)
            }))
        }, updateWriteTypeUI: function (b) {
            var c, e, f, g = a("toefl/tpl/write-operate-l.tpl"), h = ".js-btn-over", i = (this.playType, this.switchType()), j = this.current[i] < 0 ? 0 : this.current[i], k = template.compile(g), l = d(this.options.cssSelectorAncestor), m = this.listOptions.cssSelector.pannelStatusW;
            f = "number" == typeof b ? b : !this.hasLrc || this.writeStatus[j] ? 3 : 1, c = {
                writeStatus: f,
                isEnd: !this.playList[this.curAudio][i][j + 1],
                overUrl: d(h).attr("href")
            }, e = k(c), l.find(m).html(e)
        }
    }, c.exports = function (a, b, c) {
        return new h(a, b, c)
    }
}), define("toefl/js/mod/cursor", [], function (a, b, c) {
    var d = {
        get: function (a) {
            {
                var b = {text: "", start: 0, end: 0};
                a.value
            }
            if (a.setSelectionRange)a.focus(), b.start = a.selectionStart, b.end = a.selectionEnd, b.text = a.value.substring(b.start, b.end); else if (document.selection) {
                a.focus();
                var c, d = document.selection.createRange(), e = document.body.createTextRange();
                for (e.moveToElementText(a), b.text = d.text, b.bookmark = d.getBookmark(), c = 0; e.compareEndPoints("StartToStart", d) < 0 && 0 !== d.moveStart("character", -1); c++)"/r" == a.value.charAt(c) && c++;
                b.start = c, b.end = c + b.text.length
            }
            return b
        }, set: function (a, b) {
            var c;
            b || alert("You must get cursor position first."), a.focus(), a.setSelectionRange ? a.setSelectionRange(b.start, b.end) : a.createTextRange && (c = a.createTextRange(), a.value.length === b.start ? (c.collapse(!1), c.select()) : (c.moveToBookmark(b.bookmark), c.select()))
        }, add: function (a, b, c) {
            var d, e, f, g, h, i;
            this.set(a, b), a.setSelectionRange ? (d = a.value, e = d.substring(0, b.start) + c + d.substring(b.end), g = h = b.start + c.length, i = a.scrollTop, a.value = e, a.setSelectionRange(g, h)) : a.createTextRange && (f = document.selection.createRange(), f.text = c, f.setEndPoint("StartToEnd", f), f.select())
        }, insertText: function (a, b) {
            a.focus();
            var c = b.start + 1, d = b.start + 5;
            if (a.setSelectionRange)a.setSelectionRange(c, d); else {
                var e = document.body.createTextRange();
                e.moveToElementText(a), e.moveStart("character", c), e.moveEnd("character", -(a.value.length - c - 4)), e.select()
            }
        }, setCursorPos: function (a, b) {
            if (a.setSelectionRange)a.focus(), a.setSelectionRange(b, b); else if (a.createTextRange) {
                var c = a.createTextRange();
                c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", b), c.select()
            }
        }
    };
    c.exports = d
}), define("toefl/js/mod/player/write_scrollto", ["jquery"], function (a, b, c) {
    var d = a("jquery");
    c.exports = function (a) {
        var b, c, e, f, g, h, i, j = {$ele: null, sParent: ".player-article"}, k = 10;
        b = d.extend({}, j, a), e = d(b.sParent), c = b.$ele, c.length < 1 || (f = c.position().top, g = c.outerHeight(), h = e.outerHeight(), curScrollTop = e.scrollTop(), i = f + g + curScrollTop - h / 2, (k > f || f + g > h) && i > 0 && e.scrollTop(i))
    }
}), define("toefl/js/plugin/jquery-jplayer", [], function () {
    !function (a, b) {
        b(a.jQuery ? a.jQuery : a.Zepto)
    }(this, function (a, b) {
        a.fn.jPlayer = function (c) {
            var d = "jPlayer", e = "string" == typeof c, f = Array.prototype.slice.call(arguments, 1), g = this;
            return c = !e && f.length ? a.extend.apply(null, [!0, c].concat(f)) : c, e && "_" === c.charAt(0) ? g : (this.each(e ? function () {
                var e = a(this).data(d), h = e && a.isFunction(e[c]) ? e[c].apply(e, f) : e;
                return h !== e && h !== b ? (g = h, !1) : void 0
            } : function () {
                var b = a(this).data(d);
                b ? b.option(c || {}) : a(this).data(d, new a.jPlayer(c, this))
            }), g)
        }, a.jPlayer = function (b, c) {
            if (arguments.length) {
                this.element = a(c), this.options = a.extend(!0, {}, this.options, b);
                var d = this;
                this.element.bind("remove.jPlayer", function () {
                    d.destroy()
                }), this._init()
            }
        }, "function" != typeof a.fn.stop && (a.fn.stop = function () {
        }), a.jPlayer.emulateMethods = "load play pause", a.jPlayer.emulateStatus = "src readyState networkState currentTime duration paused ended playbackRate", a.jPlayer.emulateOptions = "muted volume", a.jPlayer.reservedEvent = "ready flashreset resize repeat error warning", a.jPlayer.event = {}, a.each(["ready", "setmedia", "flashreset", "resize", "repeat", "click", "error", "warning", "loadstart", "progress", "suspend", "abort", "emptied", "stalled", "play", "pause", "loadedmetadata", "loadeddata", "waiting", "playing", "canplay", "canplaythrough", "seeking", "seeked", "timeupdate", "ended", "ratechange", "durationchange", "volumechange"], function () {
            a.jPlayer.event[this] = "jPlayer_" + this
        }), a.jPlayer.htmlEvent = ["loadstart", "abort", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough"], a.jPlayer.pause = function () {
            a.each(a.jPlayer.prototype.instances, function (a, b) {
                b.data("jPlayer").status.srcSet && b.jPlayer("pause")
            })
        }, a.jPlayer.timeFormat = {
            showHour: !1,
            showMin: !0,
            showSec: !0,
            padHour: !1,
            padMin: !0,
            padSec: !0,
            sepHour: ":",
            sepMin: ":",
            sepSec: ""
        };
        var c = function () {
            this.init()
        };
        c.prototype = {
            init: function () {
                this.options = {timeFormat: a.jPlayer.timeFormat}
            }, time: function (a) {
                a = a && "number" == typeof a ? a : 0;
                var b = new Date(1e3 * a), c = b.getUTCHours(), d = this.options.timeFormat.showHour ? b.getUTCMinutes() : b.getUTCMinutes() + 60 * c, e = this.options.timeFormat.showMin ? b.getUTCSeconds() : b.getUTCSeconds() + 60 * d, f = this.options.timeFormat.padHour && 10 > c ? "0" + c : c, g = this.options.timeFormat.padMin && 10 > d ? "0" + d : d, h = this.options.timeFormat.padSec && 10 > e ? "0" + e : e, i = "";
                return i += this.options.timeFormat.showHour ? f + this.options.timeFormat.sepHour : "", i += this.options.timeFormat.showMin ? g + this.options.timeFormat.sepMin : "", i += this.options.timeFormat.showSec ? h + this.options.timeFormat.sepSec : ""
            }
        };
        var d = new c;
        a.jPlayer.convertTime = function (a) {
            return d.time(a)
        }, a.jPlayer.uaBrowser = function (a) {
            var b = a.toLowerCase(), c = /(webkit)[ \/]([\w.]+)/, d = /(opera)(?:.*version)?[ \/]([\w.]+)/, e = /(msie) ([\w.]+)/, f = /(mozilla)(?:.*? rv:([\w.]+))?/, g = c.exec(b) || d.exec(b) || e.exec(b) || b.indexOf("compatible") < 0 && f.exec(b) || [];
            return {browser: g[1] || "", version: g[2] || "0"}
        }, a.jPlayer.uaPlatform = function (a) {
            var b = a.toLowerCase(), c = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/, d = /(ipad|playbook)/, e = /(android)/, f = /(mobile)/, g = c.exec(b) || [], h = d.exec(b) || !f.exec(b) && e.exec(b) || [];
            return g[1] && (g[1] = g[1].replace(/\s/g, "_")), {platform: g[1] || "", tablet: h[1] || ""}
        }, a.jPlayer.browser = {}, a.jPlayer.platform = {};
        var e = a.jPlayer.uaBrowser(navigator.userAgent);
        e.browser && (a.jPlayer.browser[e.browser] = !0, a.jPlayer.browser.version = e.version);
        var f = a.jPlayer.uaPlatform(navigator.userAgent);
        f.platform && (a.jPlayer.platform[f.platform] = !0, a.jPlayer.platform.mobile = !f.tablet, a.jPlayer.platform.tablet = !!f.tablet), a.jPlayer.getDocMode = function () {
            var b;
            return a.jPlayer.browser.msie && (document.documentMode ? b = document.documentMode : (b = 5, document.compatMode && "CSS1Compat" === document.compatMode && (b = 7))), b
        }, a.jPlayer.browser.documentMode = a.jPlayer.getDocMode(), a.jPlayer.nativeFeatures = {
            init: function () {
                var a, b, c, d = document, e = d.createElement("video"), f = {
                    w3c: ["fullscreenEnabled", "fullscreenElement", "requestFullscreen", "exitFullscreen", "fullscreenchange", "fullscreenerror"],
                    moz: ["mozFullScreenEnabled", "mozFullScreenElement", "mozRequestFullScreen", "mozCancelFullScreen", "mozfullscreenchange", "mozfullscreenerror"],
                    webkit: ["", "webkitCurrentFullScreenElement", "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitfullscreenchange", ""],
                    webkitVideo: ["webkitSupportsFullscreen", "webkitDisplayingFullscreen", "webkitEnterFullscreen", "webkitExitFullscreen", "", ""]
                }, g = ["w3c", "moz", "webkit", "webkitVideo"];
                for (this.fullscreen = a = {
                    support: {
                        w3c: !!d[f.w3c[0]],
                        moz: !!d[f.moz[0]],
                        webkit: "function" == typeof d[f.webkit[3]],
                        webkitVideo: "function" == typeof e[f.webkitVideo[2]]
                    }, used: {}
                }, b = 0, c = g.length; c > b; b++) {
                    var h = g[b];
                    if (a.support[h]) {
                        a.spec = h, a.used[h] = !0;
                        break
                    }
                }
                if (a.spec) {
                    var i = f[a.spec];
                    a.api = {
                        fullscreenEnabled: !0, fullscreenElement: function (a) {
                            return a = a ? a : d, a[i[1]]
                        }, requestFullscreen: function (a) {
                            return a[i[2]]()
                        }, exitFullscreen: function (a) {
                            return a = a ? a : d, a[i[3]]()
                        }
                    }, a.event = {fullscreenchange: i[4], fullscreenerror: i[5]}
                } else a.api = {
                    fullscreenEnabled: !1, fullscreenElement: function () {
                        return null
                    }, requestFullscreen: function () {
                    }, exitFullscreen: function () {
                    }
                }, a.event = {}
            }
        }, a.jPlayer.nativeFeatures.init(), a.jPlayer.focus = null, a.jPlayer.keyIgnoreElementNames = "INPUT TEXTAREA";
        var g = function (b) {
            var c, d = a.jPlayer.focus;
            d && (a.each(a.jPlayer.keyIgnoreElementNames.split(/\s+/g), function (a, d) {
                return b.target.nodeName.toUpperCase() === d.toUpperCase() ? (c = !0, !1) : void 0
            }), c || a.each(d.options.keyBindings, function (c, e) {
                return e && b.which === e.key && a.isFunction(e.fn) ? (b.preventDefault(), e.fn(d), !1) : void 0
            }))
        };
        a.jPlayer.keys = function (b) {
            var c = "keydown.jPlayer";
            a(document.documentElement).unbind(c), b && a(document.documentElement).bind(c, g)
        }, a.jPlayer.keys(!0), a.jPlayer.prototype = {
            count: 0,
            version: {script: "2.6.1", needFlash: "2.6.0", flash: "unknown"},
            options: {
                swfPath: "js",
                solution: "html, flash",
                supplied: "mp3",
                preload: "metadata",
                volume: .8,
                muted: !1,
                remainingDuration: !1,
                toggleDuration: !1,
                captureDuration: !0,
                playbackRate: 1,
                defaultPlaybackRate: 1,
                minPlaybackRate: .5,
                maxPlaybackRate: 4,
                wmode: "opaque",
                backgroundColor: "#000000",
                cssSelectorAncestor: "#jp_container_1",
                cssSelector: {
                    videoPlay: ".jp-video-play",
                    play: ".jp-play",
                    pause: ".jp-pause",
                    stop: ".jp-stop",
                    seekBar: ".jp-seek-bar",
                    playBar: ".jp-play-bar",
                    mute: ".jp-mute",
                    unmute: ".jp-unmute",
                    volumeBar: ".jp-volume-bar",
                    volumeBarValue: ".jp-volume-bar-value",
                    volumeMax: ".jp-volume-max",
                    playbackRateBar: ".jp-playback-rate-bar",
                    playbackRateBarValue: ".jp-playback-rate-bar-value",
                    currentTime: ".jp-current-time",
                    duration: ".jp-duration",
                    title: ".jp-title",
                    fullScreen: ".jp-full-screen",
                    restoreScreen: ".jp-restore-screen",
                    repeat: ".jp-repeat",
                    repeatOff: ".jp-repeat-off",
                    gui: ".jp-gui",
                    noSolution: ".jp-no-solution"
                },
                smoothPlayBar: !1,
                fullScreen: !1,
                fullWindow: !1,
                autohide: {restored: !1, full: !0, fadeIn: 200, fadeOut: 600, hold: 1e3},
                loop: !1,
                repeat: function (b) {
                    b.jPlayer.options.loop ? a(this).unbind(".jPlayerRepeat").bind(a.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function () {
                        a(this).jPlayer("play")
                    }) : a(this).unbind(".jPlayerRepeat")
                },
                nativeVideoControls: {},
                noFullWindow: {
                    msie: /msie [0-6]\./,
                    ipad: /ipad.*?os [0-4]\./,
                    iphone: /iphone/,
                    ipod: /ipod/,
                    android_pad: /android [0-3]\.(?!.*?mobile)/,
                    android_phone: /android.*?mobile/,
                    blackberry: /blackberry/,
                    windows_ce: /windows ce/,
                    iemobile: /iemobile/,
                    webos: /webos/
                },
                noVolume: {
                    ipad: /ipad/,
                    iphone: /iphone/,
                    ipod: /ipod/,
                    android_pad: /android(?!.*?mobile)/,
                    android_phone: /android.*?mobile/,
                    blackberry: /blackberry/,
                    windows_ce: /windows ce/,
                    iemobile: /iemobile/,
                    webos: /webos/,
                    playbook: /playbook/
                },
                timeFormat: {},
                keyEnabled: !1,
                audioFullScreen: !1,
                keyBindings: {
                    play: {
                        key: 32, fn: function (a) {
                            a.status.paused ? a.play() : a.pause()
                        }
                    }, fullScreen: {
                        key: 13, fn: function (a) {
                            (a.status.video || a.options.audioFullScreen) && a._setOption("fullScreen", !a.options.fullScreen)
                        }
                    }, muted: {
                        key: 8, fn: function (a) {
                            a._muted(!a.options.muted)
                        }
                    }, volumeUp: {
                        key: 38, fn: function (a) {
                            a.volume(a.options.volume + .1)
                        }
                    }, volumeDown: {
                        key: 40, fn: function (a) {
                            a.volume(a.options.volume - .1)
                        }
                    }
                },
                verticalVolume: !1,
                verticalPlaybackRate: !1,
                globalVolume: !1,
                idPrefix: "jp",
                noConflict: "jQuery",
                emulateHtml: !1,
                consoleAlerts: !0,
                errorAlerts: !1,
                warningAlerts: !1,
                seekDisable: !1
            },
            optionsAudio: {
                size: {width: "0px", height: "0px", cssClass: ""},
                sizeFull: {width: "0px", height: "0px", cssClass: ""}
            },
            optionsVideo: {
                size: {width: "480px", height: "270px", cssClass: "jp-video-270p"},
                sizeFull: {width: "100%", height: "100%", cssClass: "jp-video-full"}
            },
            instances: {},
            status: {
                src: "",
                media: {},
                paused: !0,
                format: {},
                formatType: "",
                waitForPlay: !0,
                waitForLoad: !0,
                srcSet: !1,
                video: !1,
                seekPercent: 0,
                currentPercentRelative: 0,
                currentPercentAbsolute: 0,
                currentTime: 0,
                duration: 0,
                remaining: 0,
                videoWidth: 0,
                videoHeight: 0,
                readyState: 0,
                networkState: 0,
                playbackRate: 1,
                ended: 0,
                isSeeked: !1
            },
            internal: {ready: !1},
            solution: {html: !0, flash: !0},
            format: {
                mp3: {codec: 'audio/mpeg; codecs="mp3"', flashCanPlay: !0, media: "audio"},
                m4a: {codec: 'audio/mp4; codecs="mp4a.40.2"', flashCanPlay: !0, media: "audio"},
                m3u8a: {codec: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"', flashCanPlay: !1, media: "audio"},
                m3ua: {codec: "audio/mpegurl", flashCanPlay: !1, media: "audio"},
                oga: {codec: 'audio/ogg; codecs="vorbis, opus"', flashCanPlay: !1, media: "audio"},
                flac: {codec: "audio/x-flac", flashCanPlay: !1, media: "audio"},
                wav: {codec: 'audio/wav; codecs="1"', flashCanPlay: !1, media: "audio"},
                webma: {codec: 'audio/webm; codecs="vorbis"', flashCanPlay: !1, media: "audio"},
                fla: {codec: "audio/x-flv", flashCanPlay: !0, media: "audio"},
                rtmpa: {codec: 'audio/rtmp; codecs="rtmp"', flashCanPlay: !0, media: "audio"},
                m4v: {codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"', flashCanPlay: !0, media: "video"},
                m3u8v: {
                    codec: 'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
                    flashCanPlay: !1,
                    media: "video"
                },
                m3uv: {codec: "audio/mpegurl", flashCanPlay: !1, media: "video"},
                ogv: {codec: 'video/ogg; codecs="theora, vorbis"', flashCanPlay: !1, media: "video"},
                webmv: {codec: 'video/webm; codecs="vorbis, vp8"', flashCanPlay: !1, media: "video"},
                flv: {codec: "video/x-flv", flashCanPlay: !0, media: "video"},
                rtmpv: {codec: 'video/rtmp; codecs="rtmp"', flashCanPlay: !0, media: "video"}
            },
            _init: function () {
                var c = this;
                if (this.element.empty(), this.status = a.extend({}, this.status), this.internal = a.extend({}, this.internal), this.options.timeFormat = a.extend({}, a.jPlayer.timeFormat, this.options.timeFormat), this.internal.cmdsIgnored = a.jPlayer.platform.ipad || a.jPlayer.platform.iphone || a.jPlayer.platform.ipod, this.internal.domNode = this.element.get(0), this.options.keyEnabled && !a.jPlayer.focus && (a.jPlayer.focus = this), this.androidFix = {
                        setMedia: !1,
                        play: !1,
                        pause: !1,
                        time: 0 / 0
                    }, a.jPlayer.platform.android && (this.options.preload = "auto" !== this.options.preload ? "metadata" : "auto"), this.formats = [], this.solutions = [], this.require = {}, this.htmlElement = {}, this.html = {}, this.html.audio = {}, this.html.video = {}, this.flash = {}, this.css = {}, this.css.cs = {}, this.css.jq = {}, this.ancestorJq = [], this.options.volume = this._limitValue(this.options.volume, 0, 1), a.each(this.options.supplied.toLowerCase().split(","), function (b, d) {
                        var e = d.replace(/^\s+|\s+$/g, "");
                        if (c.format[e]) {
                            var f = !1;
                            a.each(c.formats, function (a, b) {
                                return e === b ? (f = !0, !1) : void 0
                            }), f || c.formats.push(e)
                        }
                    }), a.each(this.options.solution.toLowerCase().split(","), function (b, d) {
                        var e = d.replace(/^\s+|\s+$/g, "");
                        if (c.solution[e]) {
                            var f = !1;
                            a.each(c.solutions, function (a, b) {
                                return e === b ? (f = !0, !1) : void 0
                            }), f || c.solutions.push(e)
                        }
                    }), this.internal.instance = "jp_" + this.count, this.instances[this.internal.instance] = this.element, this.element.attr("id") || this.element.attr("id", this.options.idPrefix + "_jplayer_" + this.count), this.internal.self = a.extend({}, {
                        id: this.element.attr("id"),
                        jq: this.element
                    }), this.internal.audio = a.extend({}, {
                        id: this.options.idPrefix + "_audio_" + this.count,
                        jq: b
                    }), this.internal.video = a.extend({}, {
                        id: this.options.idPrefix + "_video_" + this.count,
                        jq: b
                    }), this.internal.flash = a.extend({}, {
                        id: this.options.idPrefix + "_flash_" + this.count,
                        jq: b,
                        swf: this.options.swfPath + (".swf" !== this.options.swfPath.toLowerCase().slice(-4) ? (this.options.swfPath && "/" !== this.options.swfPath.slice(-1) ? "/" : "") + "Jplayer.swf" : "")
                    }), this.internal.poster = a.extend({}, {
                        id: this.options.idPrefix + "_poster_" + this.count,
                        jq: b
                    }), a.each(a.jPlayer.event, function (a, d) {
                        c.options[a] !== b && (c.element.bind(d + ".jPlayer", c.options[a]), c.options[a] = b)
                    }), this.require.audio = !1, this.require.video = !1, a.each(this.formats, function (a, b) {
                        c.require[c.format[b].media] = !0
                    }), this.options = this.require.video ? a.extend(!0, {}, this.optionsVideo, this.options) : a.extend(!0, {}, this.optionsAudio, this.options), this._setSize(), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow), this.status.noVolume = this._uaBlocklist(this.options.noVolume), a.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled && this._fullscreenAddEventListeners(), this._restrictNativeVideoControls(), this.htmlElement.poster = document.createElement("img"), this.htmlElement.poster.id = this.internal.poster.id, this.htmlElement.poster.onload = function () {
                        (!c.status.video || c.status.waitForPlay) && c.internal.poster.jq.show()
                    }, this.element.append(this.htmlElement.poster), this.internal.poster.jq = a("#" + this.internal.poster.id), this.internal.poster.jq.css({
                        width: this.status.width,
                        height: this.status.height
                    }), this.internal.poster.jq.hide(), this.internal.poster.jq.bind("click.jPlayer", function () {
                        c._trigger(a.jPlayer.event.click)
                    }), this.html.audio.available = !1, this.require.audio && (this.htmlElement.audio = document.createElement("audio"), this.htmlElement.audio.id = this.internal.audio.id, this.html.audio.available = !!this.htmlElement.audio.canPlayType && this._testCanPlayType(this.htmlElement.audio)), this.html.video.available = !1, this.require.video && (this.htmlElement.video = document.createElement("video"), this.htmlElement.video.id = this.internal.video.id, this.html.video.available = !!this.htmlElement.video.canPlayType && this._testCanPlayType(this.htmlElement.video)), this.flash.available = this._checkForFlash(10.1), this.html.canPlay = {}, this.flash.canPlay = {}, a.each(this.formats, function (a, b) {
                        c.html.canPlay[b] = c.html[c.format[b].media].available, c.flash.canPlay[b] = c.format[b].flashCanPlay && c.flash.available
                    }), this.html.desired = !1, this.flash.desired = !1, a.each(this.solutions, function (b, d) {
                        if (0 === b)c[d].desired = !0; else {
                            var e = !1, f = !1;
                            a.each(c.formats, function (a, b) {
                                c[c.solutions[0]].canPlay[b] && ("video" === c.format[b].media ? f = !0 : e = !0)
                            }), c[d].desired = c.require.audio && !e || c.require.video && !f
                        }
                    }), this.html.support = {}, this.flash.support = {}, a.each(this.formats, function (a, b) {
                        c.html.support[b] = c.html.canPlay[b] && c.html.desired, c.flash.support[b] = c.flash.canPlay[b] && c.flash.desired
                    }), this.html.used = !1, this.flash.used = !1, a.each(this.solutions, function (b, d) {
                        a.each(c.formats, function (a, b) {
                            return c[d].support[b] ? (c[d].used = !0, !1) : void 0
                        })
                    }), this._resetActive(), this._resetGate(), this._cssSelectorAncestor(this.options.cssSelectorAncestor), this.html.used || this.flash.used ? this.css.jq.noSolution.length && this.css.jq.noSolution.hide() : (this._error({
                        type: a.jPlayer.error.NO_SOLUTION,
                        context: "{solution:'" + this.options.solution + "', supplied:'" + this.options.supplied + "'}",
                        message: a.jPlayer.errorMsg.NO_SOLUTION,
                        hint: a.jPlayer.errorHint.NO_SOLUTION
                    }), this.css.jq.noSolution.length && this.css.jq.noSolution.show()), this.flash.used) {
                    var d, e = "jQuery=" + encodeURI(this.options.noConflict) + "&id=" + encodeURI(this.internal.self.id) + "&vol=" + this.options.volume + "&muted=" + this.options.muted;
                    if (a.jPlayer.browser.msie && (Number(a.jPlayer.browser.version) < 9 || a.jPlayer.browser.documentMode < 9)) {
                        var f = '<object id="' + this.internal.flash.id + '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>', g = ['<param name="movie" value="' + this.internal.flash.swf + '" />', '<param name="FlashVars" value="' + e + '" />', '<param name="allowScriptAccess" value="always" />', '<param name="bgcolor" value="' + this.options.backgroundColor + '" />', '<param name="wmode" value="' + this.options.wmode + '" />'];
                        d = document.createElement(f);
                        for (var h = 0; h < g.length; h++)d.appendChild(document.createElement(g[h]))
                    } else {
                        var i = function (a, b, c) {
                            var d = document.createElement("param");
                            d.setAttribute("name", b), d.setAttribute("value", c), a.appendChild(d)
                        };
                        d = document.createElement("object"), d.setAttribute("id", this.internal.flash.id), d.setAttribute("name", this.internal.flash.id), d.setAttribute("data", this.internal.flash.swf), d.setAttribute("type", "application/x-shockwave-flash"), d.setAttribute("width", "1"), d.setAttribute("height", "1"), d.setAttribute("tabindex", "-1"), i(d, "flashvars", e), i(d, "allowscriptaccess", "always"), i(d, "bgcolor", this.options.backgroundColor), i(d, "wmode", this.options.wmode)
                    }
                    this.element.append(d), this.internal.flash.jq = a(d)
                }
                this.status.playbackRateEnabled = this.html.used && !this.flash.used ? this._testPlaybackRate("audio") : !1, this._updatePlaybackRate(), this.html.used && (this.html.audio.available && (this._addHtmlEventListeners(this.htmlElement.audio, this.html.audio), this.element.append(this.htmlElement.audio), this.internal.audio.jq = a("#" + this.internal.audio.id)), this.html.video.available && (this._addHtmlEventListeners(this.htmlElement.video, this.html.video), this.element.append(this.htmlElement.video), this.internal.video.jq = a("#" + this.internal.video.id), this.internal.video.jq.css(this.status.nativeVideoControls ? {
                    width: this.status.width,
                    height: this.status.height
                } : {width: "0px", height: "0px"}), this.internal.video.jq.bind("click.jPlayer", function () {
                    c._trigger(a.jPlayer.event.click)
                }))), this.options.emulateHtml && this._emulateHtmlBridge(), this.html.used && !this.flash.used && setTimeout(function () {
                    c.internal.ready = !0, c.version.flash = "n/a", c._trigger(a.jPlayer.event.repeat), c._trigger(a.jPlayer.event.ready)
                }, 100), this._updateNativeVideoControls(), this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), a.jPlayer.prototype.count++
            },
            destroy: function () {
                this.clearMedia(), this._removeUiClass(), this.css.jq.currentTime.length && this.css.jq.currentTime.text(""), this.css.jq.duration.length && this.css.jq.duration.text(""), a.each(this.css.jq, function (a, b) {
                    b.length && b.unbind(".jPlayer")
                }), this.internal.poster.jq.unbind(".jPlayer"), this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer"), this._fullscreenRemoveEventListeners(), this === a.jPlayer.focus && (a.jPlayer.focus = null), this.options.emulateHtml && this._destroyHtmlBridge(), this.element.removeData("jPlayer"), this.element.unbind(".jPlayer"), this.element.empty(), delete this.instances[this.internal.instance]
            },
            enable: function () {
            },
            disable: function () {
            },
            _testCanPlayType: function (a) {
                try {
                    return a.canPlayType(this.format.mp3.codec), !0
                } catch (b) {
                    return !1
                }
            },
            _testPlaybackRate: function (a) {
                var b, c = .5;
                a = "string" == typeof a ? a : "audio", b = document.createElement(a);
                try {
                    return "playbackRate"in b ? (b.playbackRate = c, b.playbackRate === c) : !1
                } catch (d) {
                    return !1
                }
            },
            _uaBlocklist: function (b) {
                var c = navigator.userAgent.toLowerCase(), d = !1;
                return a.each(b, function (a, b) {
                    return b && b.test(c) ? (d = !0, !1) : void 0
                }), d
            },
            _restrictNativeVideoControls: function () {
                this.require.audio && this.status.nativeVideoControls && (this.status.nativeVideoControls = !1, this.status.noFullWindow = !0)
            },
            _updateNativeVideoControls: function () {
                this.html.video.available && this.html.used && (this.htmlElement.video.controls = this.status.nativeVideoControls, this._updateAutohide(), this.status.nativeVideoControls && this.require.video ? (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                    width: this.status.width,
                    height: this.status.height
                })) : this.status.waitForPlay && this.status.video && (this.internal.poster.jq.show(), this.internal.video.jq.css({
                    width: "0px",
                    height: "0px"
                })))
            },
            _addHtmlEventListeners: function (b, c) {
                var d = this;
                b.preload = this.options.preload, b.muted = this.options.muted, b.volume = this.options.volume, this.status.playbackRateEnabled && (b.defaultPlaybackRate = this.options.defaultPlaybackRate, b.playbackRate = this.options.playbackRate), b.addEventListener("progress", function () {
                    c.gate && (d.internal.cmdsIgnored && this.readyState > 0 && (d.internal.cmdsIgnored = !1), d.androidFix.setMedia = !1, d.androidFix.play && (d.androidFix.play = !1, d.play(d.androidFix.time)), d.androidFix.pause && (d.androidFix.pause = !1, d.pause(d.androidFix.time)), d._getHtmlStatus(b), d._updateInterface(), d._trigger(a.jPlayer.event.progress))
                }, !1), b.addEventListener("timeupdate", function () {
                    c.gate && (d._getHtmlStatus(b), d._updateInterface(), d._trigger(a.jPlayer.event.timeupdate))
                }, !1), b.addEventListener("durationchange", function () {
                    c.gate && (d._getHtmlStatus(b), d._updateInterface(), d._trigger(a.jPlayer.event.durationchange))
                }, !1), b.addEventListener("play", function () {
                    c.gate && (d._updateButtons(!0), d._html_checkWaitForPlay(), d._trigger(a.jPlayer.event.play))
                }, !1), b.addEventListener("playing", function () {
                    c.gate && (d._updateButtons(!0), d._seeked(), d._trigger(a.jPlayer.event.playing))
                }, !1), b.addEventListener("pause", function () {
                    c.gate && (d._updateButtons(!1), d._trigger(a.jPlayer.event.pause))
                }, !1), b.addEventListener("waiting", function () {
                    c.gate && (d._seeking(), d._trigger(a.jPlayer.event.waiting))
                }, !1), b.addEventListener("seeking", function () {
                    c.gate && (d._seeking(), d._trigger(a.jPlayer.event.seeking))
                }, !1), b.addEventListener("seeked", function () {
                    c.gate && (d._seeked(), d._trigger(a.jPlayer.event.seeked))
                }, !1), b.addEventListener("volumechange", function () {
                    c.gate && (d.options.volume = b.volume, d.options.muted = b.muted, d._updateMute(), d._updateVolume(), d._trigger(a.jPlayer.event.volumechange))
                }, !1), b.addEventListener("ratechange", function () {
                    c.gate && (d.options.defaultPlaybackRate = b.defaultPlaybackRate, d.options.playbackRate = b.playbackRate, d._updatePlaybackRate(), d._trigger(a.jPlayer.event.ratechange))
                }, !1), b.addEventListener("suspend", function () {
                    c.gate && (d._seeked(), d._trigger(a.jPlayer.event.suspend))
                }, !1), b.addEventListener("ended", function () {
                    c.gate && (a.jPlayer.browser.webkit || (d.htmlElement.media.currentTime = 0), d.htmlElement.media.pause(), d._updateButtons(!1), d._getHtmlStatus(b, !0), d._updateInterface(), d._trigger(a.jPlayer.event.ended))
                }, !1), b.addEventListener("error", function () {
                    c.gate && (d._updateButtons(!1), d._seeked(), d.status.srcSet && (clearTimeout(d.internal.htmlDlyCmdId), d.status.waitForLoad = !0, d.status.waitForPlay = !0, d.status.video && !d.status.nativeVideoControls && d.internal.video.jq.css({
                        width: "0px",
                        height: "0px"
                    }), d._validString(d.status.media.poster) && !d.status.nativeVideoControls && d.internal.poster.jq.show(), d.css.jq.videoPlay.length && d.css.jq.videoPlay.show(), d._error({
                        type: a.jPlayer.error.URL,
                        context: d.status.src,
                        message: a.jPlayer.errorMsg.URL,
                        hint: a.jPlayer.errorHint.URL
                    })))
                }, !1), a.each(a.jPlayer.htmlEvent, function (e, f) {
                    b.addEventListener(this, function () {
                        c.gate && d._trigger(a.jPlayer.event[f])
                    }, !1)
                })
            },
            _getHtmlStatus: function (a, b) {
                var c = 0, d = 0, e = 0, f = 0;
                isFinite(a.duration) && (this.status.duration = a.duration), c = a.currentTime, d = this.status.duration > 0 ? 100 * c / this.status.duration : 0, "object" == typeof a.seekable && a.seekable.length > 0 ? (e = this.status.duration > 0 ? 100 * a.seekable.end(a.seekable.length - 1) / this.status.duration : 100, f = this.status.duration > 0 ? 100 * a.currentTime / a.seekable.end(a.seekable.length - 1) : 0) : (e = 100, f = d), b && (c = 0, f = 0, d = 0), this.status.seekPercent = e, this.status.currentPercentRelative = f, this.status.currentPercentAbsolute = d, this.status.currentTime = c, this.status.remaining = this.status.duration - this.status.currentTime, this.status.videoWidth = a.videoWidth, this.status.videoHeight = a.videoHeight, this.status.readyState = a.readyState, this.status.networkState = a.networkState, this.status.playbackRate = a.playbackRate, this.status.ended = a.ended
            },
            _resetStatus: function () {
                this.status = a.extend({}, this.status, a.jPlayer.prototype.status)
            },
            _trigger: function (b, c, d) {
                var e = a.Event(b);
                e.jPlayer = {}, e.jPlayer.version = a.extend({}, this.version), e.jPlayer.options = a.extend(!0, {}, this.options), e.jPlayer.status = a.extend(!0, {}, this.status), e.jPlayer.html = a.extend(!0, {}, this.html), e.jPlayer.flash = a.extend(!0, {}, this.flash), c && (e.jPlayer.error = a.extend({}, c)), d && (e.jPlayer.warning = a.extend({}, d)), this.element.trigger(e)
            },
            jPlayerFlashEvent: function (b, c) {
                if (b === a.jPlayer.event.ready)if (this.internal.ready) {
                    if (this.flash.gate) {
                        if (this.status.srcSet) {
                            var d = this.status.currentTime, e = this.status.paused;
                            this.setMedia(this.status.media), this.volumeWorker(this.options.volume), d > 0 && (e ? this.pause(d) : this.play(d))
                        }
                        this._trigger(a.jPlayer.event.flashreset)
                    }
                } else this.internal.ready = !0, this.internal.flash.jq.css({
                    width: "0px",
                    height: "0px"
                }), this.version.flash = c.version, this.version.needFlash !== this.version.flash && this._error({
                    type: a.jPlayer.error.VERSION,
                    context: this.version.flash,
                    message: a.jPlayer.errorMsg.VERSION + this.version.flash,
                    hint: a.jPlayer.errorHint.VERSION
                }), this._trigger(a.jPlayer.event.repeat), this._trigger(b);
                if (this.flash.gate)switch (b) {
                    case a.jPlayer.event.progress:
                        this._getFlashStatus(c), this._updateInterface(), this._trigger(b);
                        break;
                    case a.jPlayer.event.timeupdate:
                        this._getFlashStatus(c), this._updateInterface(), this._trigger(b);
                        break;
                    case a.jPlayer.event.play:
                        this._seeked(), this._updateButtons(!0), this._trigger(b);
                        break;
                    case a.jPlayer.event.pause:
                        this._updateButtons(!1), this._trigger(b);
                        break;
                    case a.jPlayer.event.ended:
                        this._updateButtons(!1), this._trigger(b);
                        break;
                    case a.jPlayer.event.click:
                        this._trigger(b);
                        break;
                    case a.jPlayer.event.error:
                        this.status.waitForLoad = !0, this.status.waitForPlay = !0, this.status.video && this.internal.flash.jq.css({
                            width: "0px",
                            height: "0px"
                        }), this._validString(this.status.media.poster) && this.internal.poster.jq.show(), this.css.jq.videoPlay.length && this.status.video && this.css.jq.videoPlay.show(), this.status.video ? this._flash_setVideo(this.status.media) : this._flash_setAudio(this.status.media), this._updateButtons(!1), this._error({
                            type: a.jPlayer.error.URL,
                            context: c.src,
                            message: a.jPlayer.errorMsg.URL,
                            hint: a.jPlayer.errorHint.URL
                        });
                        break;
                    case a.jPlayer.event.seeking:
                        this._seeking(), this._trigger(b);
                        break;
                    case a.jPlayer.event.seeked:
                        this._seeked(), this._trigger(b);
                        break;
                    case a.jPlayer.event.ready:
                        break;
                    default:
                        this._trigger(b)
                }
                return !1
            },
            _getFlashStatus: function (a) {
                this.status.seekPercent = a.seekPercent, this.status.currentPercentRelative = a.currentPercentRelative, this.status.currentPercentAbsolute = a.currentPercentAbsolute, this.status.currentTime = a.currentTime, this.status.duration = a.duration, this.status.remaining = a.duration - a.currentTime, this.status.videoWidth = a.videoWidth, this.status.videoHeight = a.videoHeight, this.status.readyState = 4, this.status.networkState = 0, this.status.playbackRate = 1, this.status.ended = !1
            },
            _updateButtons: function (a) {
                a === b ? a = !this.status.paused : this.status.paused = !a, this.css.jq.play.length && this.css.jq.pause.length && (a ? (this.css.jq.play.hide(), this.css.jq.pause.show()) : (this.css.jq.play.show(), this.css.jq.pause.hide())), this.css.jq.restoreScreen.length && this.css.jq.fullScreen.length && (this.status.noFullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.hide()) : this.options.fullWindow ? (this.css.jq.fullScreen.hide(), this.css.jq.restoreScreen.show()) : (this.css.jq.fullScreen.show(), this.css.jq.restoreScreen.hide())), this.css.jq.repeat.length && this.css.jq.repeatOff.length && (this.options.loop ? (this.css.jq.repeat.hide(), this.css.jq.repeatOff.show()) : (this.css.jq.repeat.show(), this.css.jq.repeatOff.hide()))
            },
            _updateInterface: function () {
                this.css.jq.seekBar.length && this.css.jq.seekBar.width(this.status.seekPercent + "%"), this.css.jq.playBar.length && (this.options.smoothPlayBar ? this.css.jq.playBar.stop().animate({width: this.status.currentPercentAbsolute + "%"}, 250, "linear") : this.css.jq.playBar.width(this.status.currentPercentRelative + "%"));
                var a = "";
                this.css.jq.currentTime.length && (a = this._convertTime(this.status.currentTime), a !== this.css.jq.currentTime.text() && this.css.jq.currentTime.text(this._convertTime(this.status.currentTime)));
                var b = "", c = this.status.duration, d = this.status.remaining;
                this.css.jq.duration.length && ("string" == typeof this.status.media.duration ? b = this.status.media.duration : ("number" == typeof this.status.media.duration && (c = this.status.media.duration, d = c - this.status.currentTime), b = this.options.remainingDuration ? (d > 0 ? "-" : "") + this._convertTime(d) : this._convertTime(c)), b !== this.css.jq.duration.text() && this.css.jq.duration.text(b))
            },
            _convertTime: c.prototype.time,
            _seeking: function () {
                this.css.jq.seekBar.length && this.css.jq.seekBar.addClass("jp-seeking-bg")
            },
            _seeked: function () {
                this.css.jq.seekBar.length && this.css.jq.seekBar.removeClass("jp-seeking-bg")
            },
            _resetGate: function () {
                this.html.audio.gate = !1, this.html.video.gate = !1, this.flash.gate = !1
            },
            _resetActive: function () {
                this.html.active = !1, this.flash.active = !1
            },
            _escapeHtml: function (a) {
                return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;")
            },
            _qualifyURL: function (a) {
                var b = document.createElement("div");
                return b.innerHTML = '<a href="' + this._escapeHtml(a) + '">x</a>', b.firstChild.href
            },
            _absoluteMediaUrls: function (b) {
                var c = this;
                return a.each(b, function (a, d) {
                    d && c.format[a] && (b[a] = c._qualifyURL(d))
                }), b
            },
            setMedia: function (b) {
                var c = this, d = !1, e = this.status.media.poster !== b.poster;
                this._resetMedia(), this._resetGate(), this._resetActive(), this.androidFix.setMedia = !1, this.androidFix.play = !1, this.androidFix.pause = !1, b = this._absoluteMediaUrls(b), a.each(this.formats, function (e, f) {
                    var g = "video" === c.format[f].media;
                    return a.each(c.solutions, function (e, h) {
                        if (c[h].support[f] && c._validString(b[f])) {
                            var i = "html" === h;
                            return g ? (i ? (c.html.video.gate = !0, c._html_setVideo(b), c.html.active = !0) : (c.flash.gate = !0, c._flash_setVideo(b), c.flash.active = !0), c.css.jq.videoPlay.length && c.css.jq.videoPlay.show(), c.status.video = !0) : (i ? (c.html.audio.gate = !0, c._html_setAudio(b), c.html.active = !0, a.jPlayer.platform.android && (c.androidFix.setMedia = !0)) : (c.flash.gate = !0, c._flash_setAudio(b), c.flash.active = !0), c.css.jq.videoPlay.length && c.css.jq.videoPlay.hide(), c.status.video = !1), d = !0, !1
                        }
                    }), d ? !1 : void 0
                }), d ? (this.status.nativeVideoControls && this.html.video.gate || this._validString(b.poster) && (e ? this.htmlElement.poster.src = b.poster : this.internal.poster.jq.show()), this.css.jq.title.length && "string" == typeof b.title && (this.css.jq.title.html(b.title), this.htmlElement.audio && this.htmlElement.audio.setAttribute("title", b.title), this.htmlElement.video && this.htmlElement.video.setAttribute("title", b.title)), this.status.srcSet = !0, this.status.media = a.extend({}, b), this._updateButtons(!1), this._updateInterface(), this._trigger(a.jPlayer.event.setmedia)) : this._error({
                    type: a.jPlayer.error.NO_SUPPORT,
                    context: "{supplied:'" + this.options.supplied + "'}",
                    message: a.jPlayer.errorMsg.NO_SUPPORT,
                    hint: a.jPlayer.errorHint.NO_SUPPORT
                })
            },
            _resetMedia: function () {
                this._resetStatus(), this._updateButtons(!1), this._updateInterface(), this._seeked(), this.internal.poster.jq.hide(), clearTimeout(this.internal.htmlDlyCmdId), this.html.active ? this._html_resetMedia() : this.flash.active && this._flash_resetMedia()
            },
            clearMedia: function () {
                this._resetMedia(), this.html.active ? this._html_clearMedia() : this.flash.active && this._flash_clearMedia(), this._resetGate(), this._resetActive()
            },
            load: function () {
                this.status.srcSet ? this.html.active ? this._html_load() : this.flash.active && this._flash_load() : this._urlNotSetError("load")
            },
            focus: function () {
                this.options.keyEnabled && (a.jPlayer.focus = this)
            },
            play: function (a) {
                a = "number" == typeof a ? a : 0 / 0, this.status.srcSet ? (this.focus(), this.html.active ? this._html_play(a) : this.flash.active && this._flash_play(a)) : this._urlNotSetError("play")
            },
            videoPlay: function () {
                this.play()
            },
            pause: function (a) {
                a = "number" == typeof a ? a : 0 / 0, this.status.srcSet ? this.html.active ? this._html_pause(a) : this.flash.active && this._flash_pause(a) : this._urlNotSetError("pause")
            },
            tellOthers: function (b, c) {
                var d = this, e = "function" == typeof c, f = Array.prototype.slice.call(arguments);
                "string" == typeof b && (e && f.splice(1, 1), a.each(this.instances, function () {
                    d.element !== this && (!e || c.call(this.data("jPlayer"), d)) && this.jPlayer.apply(this, f)
                }))
            },
            pauseOthers: function (a) {
                this.tellOthers("pause", function () {
                    return this.status.srcSet
                }, a)
            },
            stop: function () {
                this.status.srcSet ? this.html.active ? this._html_pause(0) : this.flash.active && this._flash_pause(0) : this._urlNotSetError("stop")
            },
            playHead: function (a) {
                a = this._limitValue(a, 0, 100), this.status.srcSet ? this.html.active ? this._html_playHead(a) : this.flash.active && this._flash_playHead(a) : this._urlNotSetError("playHead")
            },
            _muted: function (a) {
                this.mutedWorker(a), this.options.globalVolume && this.tellOthers("mutedWorker", function () {
                    return this.options.globalVolume
                }, a)
            },
            mutedWorker: function (b) {
                this.options.muted = b, this.html.used && this._html_setProperty("muted", b), this.flash.used && this._flash_mute(b), this.html.video.gate || this.html.audio.gate || (this._updateMute(b), this._updateVolume(this.options.volume), this._trigger(a.jPlayer.event.volumechange))
            },
            mute: function (a) {
                a = a === b ? !0 : !!a, this._muted(a)
            },
            unmute: function (a) {
                a = a === b ? !0 : !!a, this._muted(!a)
            },
            _updateMute: function (a) {
                a === b && (a = this.options.muted), this.css.jq.mute.length && this.css.jq.unmute.length && (this.status.noVolume ? (this.css.jq.mute.hide(), this.css.jq.unmute.hide()) : a ? (this.css.jq.mute.hide(), this.css.jq.unmute.show()) : (this.css.jq.mute.show(), this.css.jq.unmute.hide()))
            },
            volume: function (a) {
                this.volumeWorker(a), this.options.globalVolume && this.tellOthers("volumeWorker", function () {
                    return this.options.globalVolume
                }, a)
            },
            volumeWorker: function (b) {
                b = this._limitValue(b, 0, 1), this.options.volume = b, this.html.used && this._html_setProperty("volume", b), this.flash.used && this._flash_volume(b), this.html.video.gate || this.html.audio.gate || (this._updateVolume(b), this._trigger(a.jPlayer.event.volumechange))
            },
            volumeBar: function (b) {
                if (this.css.jq.volumeBar.length) {
                    var c = a(b.currentTarget), d = c.offset(), e = b.pageX - d.left, f = c.width(), g = c.height() - b.pageY + d.top, h = c.height();
                    this.volume(this.options.verticalVolume ? g / h : e / f)
                }
                this.options.muted && this._muted(!1)
            },
            _updateVolume: function (a) {
                a === b && (a = this.options.volume), a = this.options.muted ? 0 : a, this.status.noVolume ? (this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide(), this.css.jq.volumeBarValue.length && this.css.jq.volumeBarValue.hide(), this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide()) : (this.css.jq.volumeBar.length && this.css.jq.volumeBar.show(), this.css.jq.volumeBarValue.length && (this.css.jq.volumeBarValue.show(), this.css.jq.volumeBarValue[this.options.verticalVolume ? "height" : "width"](100 * a + "%")), this.css.jq.volumeMax.length && this.css.jq.volumeMax.show())
            },
            volumeMax: function () {
                this.volume(1), this.options.muted && this._muted(!1)
            },
            _cssSelectorAncestor: function (b) {
                var c = this;
                this.options.cssSelectorAncestor = b, this._removeUiClass(), this.ancestorJq = b ? a(b) : [], b && 1 !== this.ancestorJq.length && this._warning({
                    type: a.jPlayer.warning.CSS_SELECTOR_COUNT,
                    context: b,
                    message: a.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.ancestorJq.length + " found for cssSelectorAncestor.",
                    hint: a.jPlayer.warningHint.CSS_SELECTOR_COUNT
                }), this._addUiClass(), a.each(this.options.cssSelector, function (a, b) {
                    c._cssSelector(a, b)
                }), this._updateInterface(), this._updateButtons(), this._updateAutohide(), this._updateVolume(), this._updateMute()
            },
            _cssSelector: function (b, c) {
                var d = this;
                if ("string" == typeof c)if (a.jPlayer.prototype.options.cssSelector[b]) {
                    if (this.css.jq[b] && this.css.jq[b].length && this.css.jq[b].unbind(".jPlayer"), this.options.cssSelector[b] = c, this.css.cs[b] = this.options.cssSelectorAncestor + " " + c, this.css.jq[b] = c ? a(this.css.cs[b]) : [], this.css.jq[b].length && this[b]) {
                        var e = function (c) {
                            c.preventDefault(), d[b](c), a(this).blur()
                        };
                        this.css.jq[b].bind("click.jPlayer", e)
                    }
                    c && 1 !== this.css.jq[b].length && this._warning({
                        type: a.jPlayer.warning.CSS_SELECTOR_COUNT,
                        context: this.css.cs[b],
                        message: a.jPlayer.warningMsg.CSS_SELECTOR_COUNT + this.css.jq[b].length + " found for " + b + " method.",
                        hint: a.jPlayer.warningHint.CSS_SELECTOR_COUNT
                    })
                } else this._warning({
                    type: a.jPlayer.warning.CSS_SELECTOR_METHOD,
                    context: b,
                    message: a.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
                    hint: a.jPlayer.warningHint.CSS_SELECTOR_METHOD
                }); else this._warning({
                    type: a.jPlayer.warning.CSS_SELECTOR_STRING,
                    context: c,
                    message: a.jPlayer.warningMsg.CSS_SELECTOR_STRING,
                    hint: a.jPlayer.warningHint.CSS_SELECTOR_STRING
                })
            },
            duration: function (a) {
                this.options.toggleDuration && (this.options.captureDuration && a.stopPropagation(), this._setOption("remainingDuration", !this.options.remainingDuration))
            },
            seekBar: function (b) {
                if (!this.options.seekDisable && this.css.jq.seekBar.length) {
                    var c = a(b.currentTarget), d = c.offset(), e = b.pageX - d.left, f = c.width(), g = 100 * e / f;
                    this.playHead(g), this.setSeek(!0)
                }
            },
            setSeek: function (a) {
                this.status.isSeeked = a
            },
            playbackRate: function (a) {
                this._setOption("playbackRate", a)
            },
            playbackRateBar: function (b) {
                if (this.css.jq.playbackRateBar.length) {
                    var c, d, e = a(b.currentTarget), f = e.offset(), g = b.pageX - f.left, h = e.width(), i = e.height() - b.pageY + f.top, j = e.height();
                    c = this.options.verticalPlaybackRate ? i / j : g / h, d = c * (this.options.maxPlaybackRate - this.options.minPlaybackRate) + this.options.minPlaybackRate, this.playbackRate(d)
                }
            },
            _updatePlaybackRate: function () {
                var a = this.options.playbackRate, b = (a - this.options.minPlaybackRate) / (this.options.maxPlaybackRate - this.options.minPlaybackRate);
                this.status.playbackRateEnabled ? (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.show(), this.css.jq.playbackRateBarValue.length && (this.css.jq.playbackRateBarValue.show(), this.css.jq.playbackRateBarValue[this.options.verticalPlaybackRate ? "height" : "width"](100 * b + "%"))) : (this.css.jq.playbackRateBar.length && this.css.jq.playbackRateBar.hide(), this.css.jq.playbackRateBarValue.length && this.css.jq.playbackRateBarValue.hide())
            },
            repeat: function () {
                this._loop(!0)
            },
            repeatOff: function () {
                this._loop(!1)
            },
            _loop: function (b) {
                this.options.loop !== b && (this.options.loop = b, this._updateButtons(), this._trigger(a.jPlayer.event.repeat))
            },
            option: function (c, d) {
                var e = c;
                if (0 === arguments.length)return a.extend(!0, {}, this.options);
                if ("string" == typeof c) {
                    var f = c.split(".");
                    if (d === b) {
                        for (var g = a.extend(!0, {}, this.options), h = 0; h < f.length; h++) {
                            if (g[f[h]] === b)return this._warning({
                                type: a.jPlayer.warning.OPTION_KEY,
                                context: c,
                                message: a.jPlayer.warningMsg.OPTION_KEY,
                                hint: a.jPlayer.warningHint.OPTION_KEY
                            }), b;
                            g = g[f[h]]
                        }
                        return g
                    }
                    e = {};
                    for (var i = e, j = 0; j < f.length; j++)j < f.length - 1 ? (i[f[j]] = {}, i = i[f[j]]) : i[f[j]] = d
                }
                return this._setOptions(e), this
            },
            _setOptions: function (b) {
                var c = this;
                return a.each(b, function (a, b) {
                    c._setOption(a, b)
                }), this
            },
            _setOption: function (b, c) {
                var d = this;
                switch (b) {
                    case"volume":
                        this.volume(c);
                        break;
                    case"muted":
                        this._muted(c);
                        break;
                    case"globalVolume":
                        this.options[b] = c;
                        break;
                    case"cssSelectorAncestor":
                        this._cssSelectorAncestor(c);
                        break;
                    case"cssSelector":
                        a.each(c, function (a, b) {
                            d._cssSelector(a, b)
                        });
                        break;
                    case"playbackRate":
                        this.options[b] = c = this._limitValue(c, this.options.minPlaybackRate, this.options.maxPlaybackRate), this.html.used && this._html_setProperty("playbackRate", c), this._updatePlaybackRate();
                        break;
                    case"defaultPlaybackRate":
                        this.options[b] = c = this._limitValue(c, this.options.minPlaybackRate, this.options.maxPlaybackRate), this.html.used && this._html_setProperty("defaultPlaybackRate", c), this._updatePlaybackRate();
                        break;
                    case"minPlaybackRate":
                        this.options[b] = c = this._limitValue(c, .1, this.options.maxPlaybackRate - .1), this._updatePlaybackRate();
                        break;
                    case"maxPlaybackRate":
                        this.options[b] = c = this._limitValue(c, this.options.minPlaybackRate + .1, 16), this._updatePlaybackRate();
                        break;
                    case"fullScreen":
                        if (this.options[b] !== c) {
                            var e = a.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
                            (!e || e && !this.status.waitForPlay) && (e || (this.options[b] = c), c ? this._requestFullscreen() : this._exitFullscreen(), e || this._setOption("fullWindow", c))
                        }
                        break;
                    case"fullWindow":
                        this.options[b] !== c && (this._removeUiClass(), this.options[b] = c, this._refreshSize());
                        break;
                    case"size":
                        this.options.fullWindow || this.options[b].cssClass === c.cssClass || this._removeUiClass(), this.options[b] = a.extend({}, this.options[b], c), this._refreshSize();
                        break;
                    case"sizeFull":
                        this.options.fullWindow && this.options[b].cssClass !== c.cssClass && this._removeUiClass(), this.options[b] = a.extend({}, this.options[b], c), this._refreshSize();
                        break;
                    case"autohide":
                        this.options[b] = a.extend({}, this.options[b], c), this._updateAutohide();
                        break;
                    case"loop":
                        this._loop(c);
                        break;
                    case"remainingDuration":
                        this.options[b] = c, this._updateInterface();
                        break;
                    case"toggleDuration":
                        this.options[b] = c;
                        break;
                    case"nativeVideoControls":
                        this.options[b] = a.extend({}, this.options[b], c), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this._restrictNativeVideoControls(), this._updateNativeVideoControls();
                        break;
                    case"noFullWindow":
                        this.options[b] = a.extend({}, this.options[b], c), this.status.nativeVideoControls = this._uaBlocklist(this.options.nativeVideoControls), this.status.noFullWindow = this._uaBlocklist(this.options.noFullWindow), this._restrictNativeVideoControls(), this._updateButtons();
                        break;
                    case"noVolume":
                        this.options[b] = a.extend({}, this.options[b], c), this.status.noVolume = this._uaBlocklist(this.options.noVolume), this._updateVolume(), this._updateMute();
                        break;
                    case"emulateHtml":
                        this.options[b] !== c && (this.options[b] = c, c ? this._emulateHtmlBridge() : this._destroyHtmlBridge());
                        break;
                    case"timeFormat":
                        this.options[b] = a.extend({}, this.options[b], c);
                        break;
                    case"keyEnabled":
                        this.options[b] = c, c || this !== a.jPlayer.focus || (a.jPlayer.focus = null);
                        break;
                    case"keyBindings":
                        this.options[b] = a.extend(!0, {}, this.options[b], c);
                        break;
                    case"audioFullScreen":
                        this.options[b] = c
                }
                return this
            },
            _refreshSize: function () {
                this._setSize(), this._addUiClass(), this._updateSize(), this._updateButtons(), this._updateAutohide(), this._trigger(a.jPlayer.event.resize)
            },
            _setSize: function () {
                this.options.fullWindow ? (this.status.width = this.options.sizeFull.width, this.status.height = this.options.sizeFull.height, this.status.cssClass = this.options.sizeFull.cssClass) : (this.status.width = this.options.size.width, this.status.height = this.options.size.height, this.status.cssClass = this.options.size.cssClass), this.element.css({
                    width: this.status.width,
                    height: this.status.height
                })
            },
            _addUiClass: function () {
                this.ancestorJq.length && this.ancestorJq.addClass(this.status.cssClass)
            },
            _removeUiClass: function () {
                this.ancestorJq.length && this.ancestorJq.removeClass(this.status.cssClass)
            },
            _updateSize: function () {
                this.internal.poster.jq.css({
                    width: this.status.width,
                    height: this.status.height
                }), !this.status.waitForPlay && this.html.active && this.status.video || this.html.video.available && this.html.used && this.status.nativeVideoControls ? this.internal.video.jq.css({
                    width: this.status.width,
                    height: this.status.height
                }) : !this.status.waitForPlay && this.flash.active && this.status.video && this.internal.flash.jq.css({
                    width: this.status.width,
                    height: this.status.height
                })
            },
            _updateAutohide: function () {
                var a = this, b = "mousemove.jPlayer", c = ".jPlayerAutohide", d = b + c, e = function () {
                    a.css.jq.gui.fadeIn(a.options.autohide.fadeIn, function () {
                        clearTimeout(a.internal.autohideId), a.internal.autohideId = setTimeout(function () {
                            a.css.jq.gui.fadeOut(a.options.autohide.fadeOut)
                        }, a.options.autohide.hold)
                    })
                };
                this.css.jq.gui.length && (this.css.jq.gui.stop(!0, !0), clearTimeout(this.internal.autohideId), this.element.unbind(c), this.css.jq.gui.unbind(c), this.status.nativeVideoControls ? this.css.jq.gui.hide() : this.options.fullWindow && this.options.autohide.full || !this.options.fullWindow && this.options.autohide.restored ? (this.element.bind(d, e), this.css.jq.gui.bind(d, e), this.css.jq.gui.hide()) : this.css.jq.gui.show())
            },
            fullScreen: function () {
                this._setOption("fullScreen", !0)
            },
            restoreScreen: function () {
                this._setOption("fullScreen", !1)
            },
            _fullscreenAddEventListeners: function () {
                var b = this, c = a.jPlayer.nativeFeatures.fullscreen;
                c.api.fullscreenEnabled && c.event.fullscreenchange && ("function" != typeof this.internal.fullscreenchangeHandler && (this.internal.fullscreenchangeHandler = function () {
                    b._fullscreenchange()
                }), document.addEventListener(c.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1))
            },
            _fullscreenRemoveEventListeners: function () {
                var b = a.jPlayer.nativeFeatures.fullscreen;
                this.internal.fullscreenchangeHandler && document.removeEventListener(b.event.fullscreenchange, this.internal.fullscreenchangeHandler, !1)
            },
            _fullscreenchange: function () {
                this.options.fullScreen && !a.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement() && this._setOption("fullScreen", !1)
            },
            _requestFullscreen: function () {
                var b = this.ancestorJq.length ? this.ancestorJq[0] : this.element[0], c = a.jPlayer.nativeFeatures.fullscreen;
                c.used.webkitVideo && (b = this.htmlElement.video), c.api.fullscreenEnabled && c.api.requestFullscreen(b)
            },
            _exitFullscreen: function () {
                var b, c = a.jPlayer.nativeFeatures.fullscreen;
                c.used.webkitVideo && (b = this.htmlElement.video), c.api.fullscreenEnabled && c.api.exitFullscreen(b)
            },
            _html_initMedia: function (b) {
                var c = a(this.htmlElement.media).empty();
                a.each(b.track || [], function (a, b) {
                    var d = document.createElement("track");
                    d.setAttribute("kind", b.kind ? b.kind : ""), d.setAttribute("src", b.src ? b.src : ""), d.setAttribute("srclang", b.srclang ? b.srclang : ""), d.setAttribute("label", b.label ? b.label : ""), b.def && d.setAttribute("default", b.def), c.append(d)
                }), this.htmlElement.media.src = this.status.src, "none" !== this.options.preload && this._html_load(), this._trigger(a.jPlayer.event.timeupdate)
            },
            _html_setFormat: function (b) {
                var c = this;
                a.each(this.formats, function (a, d) {
                    return c.html.support[d] && b[d] ? (c.status.src = b[d], c.status.format[d] = !0, c.status.formatType = d, !1) : void 0
                })
            },
            _html_setAudio: function (a) {
                this._html_setFormat(a), this.htmlElement.media = this.htmlElement.audio, this._html_initMedia(a)
            },
            _html_setVideo: function (a) {
                this._html_setFormat(a), this.status.nativeVideoControls && (this.htmlElement.video.poster = this._validString(a.poster) ? a.poster : ""), this.htmlElement.media = this.htmlElement.video, this._html_initMedia(a)
            },
            _html_resetMedia: function () {
                this.htmlElement.media && (this.htmlElement.media.id !== this.internal.video.id || this.status.nativeVideoControls || this.internal.video.jq.css({
                    width: "0px",
                    height: "0px"
                }), this.htmlElement.media.pause())
            },
            _html_clearMedia: function () {
                this.htmlElement.media && (this.htmlElement.media.src = "about:blank", this.htmlElement.media.load())
            },
            _html_load: function () {
                this.status.waitForLoad && (this.status.waitForLoad = !1, this.htmlElement.media.load()), clearTimeout(this.internal.htmlDlyCmdId)
            },
            _html_play: function (a) {
                var b = this, c = this.htmlElement.media;
                if (this.androidFix.pause = !1, this._html_load(), this.androidFix.setMedia)this.androidFix.play = !0, this.androidFix.time = a; else if (isNaN(a))c.play(); else {
                    this.internal.cmdsIgnored && c.play();
                    try {
                        if (c.seekable && !("object" == typeof c.seekable && c.seekable.length > 0))throw 1;
                        c.currentTime = a, c.play()
                    } catch (d) {
                        return void(this.internal.htmlDlyCmdId = setTimeout(function () {
                            b.play(a)
                        }, 250))
                    }
                }
                this._html_checkWaitForPlay()
            },
            _html_pause: function (a) {
                var b = this, c = this.htmlElement.media;
                if (this.androidFix.play = !1, a > 0 ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId), c.pause(), this.androidFix.setMedia)this.androidFix.pause = !0, this.androidFix.time = a; else if (!isNaN(a))try {
                    if (c.seekable && !("object" == typeof c.seekable && c.seekable.length > 0))throw 1;
                    c.currentTime = a
                } catch (d) {
                    return void(this.internal.htmlDlyCmdId = setTimeout(function () {
                        b.pause(a)
                    }, 250))
                }
                a > 0 && this._html_checkWaitForPlay()
            },
            _html_playHead: function (a) {
                var b = this, c = this.htmlElement.media;
                this._html_load();
                try {
                    if ("object" == typeof c.seekable && c.seekable.length > 0)c.currentTime = a * c.seekable.end(c.seekable.length - 1) / 100; else {
                        if (!(c.duration > 0) || isNaN(c.duration))throw"e";
                        c.currentTime = a * c.duration / 100
                    }
                } catch (d) {
                    return void(this.internal.htmlDlyCmdId = setTimeout(function () {
                        b.playHead(a)
                    }, 250))
                }
                this.status.waitForLoad || this._html_checkWaitForPlay()
            },
            _html_checkWaitForPlay: function () {
                this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.video.jq.css({
                    width: this.status.width,
                    height: this.status.height
                })))
            },
            _html_setProperty: function (a, b) {
                this.html.audio.available && (this.htmlElement.audio[a] = b), this.html.video.available && (this.htmlElement.video[a] = b)
            },
            _flash_setAudio: function (b) {
                var c = this;
                try {
                    a.each(this.formats, function (a, d) {
                        if (c.flash.support[d] && b[d]) {
                            switch (d) {
                                case"m4a":
                                case"fla":
                                    c._getMovie().fl_setAudio_m4a(b[d]);
                                    break;
                                case"mp3":
                                    c._getMovie().fl_setAudio_mp3(b[d]);
                                    break;
                                case"rtmpa":
                                    c._getMovie().fl_setAudio_rtmp(b[d])
                            }
                            return c.status.src = b[d], c.status.format[d] = !0, c.status.formatType = d, !1
                        }
                    }), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
                } catch (d) {
                    this._flashError(d)
                }
            },
            _flash_setVideo: function (b) {
                var c = this;
                try {
                    a.each(this.formats, function (a, d) {
                        if (c.flash.support[d] && b[d]) {
                            switch (d) {
                                case"m4v":
                                case"flv":
                                    c._getMovie().fl_setVideo_m4v(b[d]);
                                    break;
                                case"rtmpv":
                                    c._getMovie().fl_setVideo_rtmp(b[d])
                            }
                            return c.status.src = b[d], c.status.format[d] = !0, c.status.formatType = d, !1
                        }
                    }), "auto" === this.options.preload && (this._flash_load(), this.status.waitForLoad = !1)
                } catch (d) {
                    this._flashError(d)
                }
            },
            _flash_resetMedia: function () {
                this.internal.flash.jq.css({width: "0px", height: "0px"}), this._flash_pause(0 / 0)
            },
            _flash_clearMedia: function () {
                try {
                    this._getMovie().fl_clearMedia()
                } catch (a) {
                    this._flashError(a)
                }
            },
            _flash_load: function () {
                try {
                    this._getMovie().fl_load()
                } catch (a) {
                    this._flashError(a)
                }
                this.status.waitForLoad = !1
            },
            _flash_play: function (a) {
                try {
                    this._getMovie().fl_play(a)
                } catch (b) {
                    this._flashError(b)
                }
                this.status.waitForLoad = !1, this._flash_checkWaitForPlay()
            },
            _flash_pause: function (a) {
                try {
                    this._getMovie().fl_pause(a)
                } catch (b) {
                    this._flashError(b)
                }
                a > 0 && (this.status.waitForLoad = !1, this._flash_checkWaitForPlay())
            },
            _flash_playHead: function (a) {
                try {
                    this._getMovie().fl_play_head(a)
                } catch (b) {
                    this._flashError(b)
                }
                this.status.waitForLoad || this._flash_checkWaitForPlay()
            },
            _flash_checkWaitForPlay: function () {
                this.status.waitForPlay && (this.status.waitForPlay = !1, this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(), this.status.video && (this.internal.poster.jq.hide(), this.internal.flash.jq.css({
                    width: this.status.width,
                    height: this.status.height
                })))
            },
            _flash_volume: function (a) {
                try {
                    this._getMovie().fl_volume(a)
                } catch (b) {
                    this._flashError(b)
                }
            },
            _flash_mute: function (a) {
                try {
                    this._getMovie().fl_mute(a)
                } catch (b) {
                    this._flashError(b)
                }
            },
            _getMovie: function () {
                return document[this.internal.flash.id]
            },
            _getFlashPluginVersion: function () {
                var a, b = 0;
                if (window.ActiveXObject)try {
                    if (a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
                        var c = a.GetVariable("$version");
                        c && (c = c.split(" ")[1].split(","), b = parseInt(c[0], 10) + "." + parseInt(c[1], 10))
                    }
                } catch (d) {
                } else navigator.plugins && navigator.mimeTypes.length > 0 && (a = navigator.plugins["Shockwave Flash"], a && (b = navigator.plugins["Shockwave Flash"].description.replace(/.*\s(\d+\.\d+).*/, "$1")));
                return 1 * b
            },
            _checkForFlash: function (a) {
                var b = !1;
                return this._getFlashPluginVersion() >= a && (b = !0), b
            },
            _validString: function (a) {
                return a && "string" == typeof a
            },
            _limitValue: function (a, b, c) {
                return b > a ? b : a > c ? c : a
            },
            _urlNotSetError: function (b) {
                this._error({
                    type: a.jPlayer.error.URL_NOT_SET,
                    context: b,
                    message: a.jPlayer.errorMsg.URL_NOT_SET,
                    hint: a.jPlayer.errorHint.URL_NOT_SET
                })
            },
            _flashError: function (b) {
                var c;
                c = this.internal.ready ? "FLASH_DISABLED" : "FLASH", this._error({
                    type: a.jPlayer.error[c],
                    context: this.internal.flash.swf,
                    message: a.jPlayer.errorMsg[c] + b.message,
                    hint: a.jPlayer.errorHint[c]
                }), this.internal.flash.jq.css({width: "1px", height: "1px"})
            },
            _error: function (b) {
                this._trigger(a.jPlayer.event.error, b), this.options.errorAlerts && this._alert("Error!" + (b.message ? "\n" + b.message : "") + (b.hint ? "\n" + b.hint : "") + "\nContext: " + b.context)
            },
            _warning: function (c) {
                this._trigger(a.jPlayer.event.warning, b, c), this.options.warningAlerts && this._alert("Warning!" + (c.message ? "\n" + c.message : "") + (c.hint ? "\n" + c.hint : "") + "\nContext: " + c.context)
            },
            _alert: function (a) {
                var b = "jPlayer " + this.version.script + " : id='" + this.internal.self.id + "' : " + a;
                this.options.consoleAlerts ? window.console && window.console.log && window.console.log(b) : alert(b)
            },
            _emulateHtmlBridge: function () {
                var b = this;
                a.each(a.jPlayer.emulateMethods.split(/\s+/g), function (a, c) {
                    b.internal.domNode[c] = function (a) {
                        b[c](a)
                    }
                }), a.each(a.jPlayer.event, function (c, d) {
                    var e = !0;
                    a.each(a.jPlayer.reservedEvent.split(/\s+/g), function (a, b) {
                        return b === c ? (e = !1, !1) : void 0
                    }), e && b.element.bind(d + ".jPlayer.jPlayerHtml", function () {
                        b._emulateHtmlUpdate();
                        var a = document.createEvent("Event");
                        a.initEvent(c, !1, !0), b.internal.domNode.dispatchEvent(a)
                    })
                })
            },
            _emulateHtmlUpdate: function () {
                var b = this;
                a.each(a.jPlayer.emulateStatus.split(/\s+/g), function (a, c) {
                    b.internal.domNode[c] = b.status[c]
                }), a.each(a.jPlayer.emulateOptions.split(/\s+/g), function (a, c) {
                    b.internal.domNode[c] = b.options[c]
                })
            },
            _destroyHtmlBridge: function () {
                var b = this;
                this.element.unbind(".jPlayerHtml");
                var c = a.jPlayer.emulateMethods + " " + a.jPlayer.emulateStatus + " " + a.jPlayer.emulateOptions;
                a.each(c.split(/\s+/g), function (a, c) {
                    delete b.internal.domNode[c]
                })
            }
        }, a.jPlayer.error = {
            FLASH: "e_flash",
            FLASH_DISABLED: "e_flash_disabled",
            NO_SOLUTION: "e_no_solution",
            NO_SUPPORT: "e_no_support",
            URL: "e_url",
            URL_NOT_SET: "e_url_not_set",
            VERSION: "e_version"
        }, a.jPlayer.errorMsg = {
            FLASH: "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",
            FLASH_DISABLED: "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",
            NO_SOLUTION: "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
            NO_SUPPORT: "It is not possible to play any media format provided in setMedia() on this browser using your current options.",
            URL: "Media URL could not be loaded.",
            URL_NOT_SET: "Attempt to issue media playback commands, while no media url is set.",
            VERSION: "jPlayer " + a.jPlayer.prototype.version.script + " needs Jplayer.swf version " + a.jPlayer.prototype.version.needFlash + " but found "
        }, a.jPlayer.errorHint = {
            FLASH: "Check your swfPath option and that Jplayer.swf is there.",
            FLASH_DISABLED: "Check that you have not display:none; the jPlayer entity or any ancestor.",
            NO_SOLUTION: "Review the jPlayer options: support and supplied.",
            NO_SUPPORT: "Video or audio formats defined in the supplied option are missing.",
            URL: "Check media URL is valid.",
            URL_NOT_SET: "Use setMedia() to set the media URL.",
            VERSION: "Update jPlayer files."
        }, a.jPlayer.warning = {
            CSS_SELECTOR_COUNT: "e_css_selector_count",
            CSS_SELECTOR_METHOD: "e_css_selector_method",
            CSS_SELECTOR_STRING: "e_css_selector_string",
            OPTION_KEY: "e_option_key"
        }, a.jPlayer.warningMsg = {
            CSS_SELECTOR_COUNT: "The number of css selectors found did not equal one: ",
            CSS_SELECTOR_METHOD: "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
            CSS_SELECTOR_STRING: "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
            OPTION_KEY: "The option requested in jPlayer('option') is undefined."
        }, a.jPlayer.warningHint = {
            CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
            CSS_SELECTOR_METHOD: "Check your method name.",
            CSS_SELECTOR_STRING: "Check your css selector is a string.",
            OPTION_KEY: "Check your option name."
        }
    })
}), define("toefl/js/plugin/jquery-slider", ["jqueryui"], function (a) {
    var b = a("jqueryui");
    !function (a) {
        var b = 5;
        a.widget("ui.slider", a.ui.mouse, {
            version: "1.10.4",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            _create: function () {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
            },
            _refresh: function () {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function () {
                var b, c, d = this.options, e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), f = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>", g = [];
                for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), e = e.slice(0, c)), b = e.length; c > b; b++)g.push(f);
                this.handles = e.add(a(g.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (b) {
                    a(this).data("ui-slider-handle-index", b)
                })
            },
            _createRange: function () {
                var b = this.options, c = "";
                b.range ? (b.range === !0 && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [b.values[0], b.values[0]] : a.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }) : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(c + ("min" === b.range || "max" === b.range ? " ui-slider-range-" + b.range : ""))) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function () {
                var a = this.handles.add(this.range).filter("a");
                this._off(a), this._on(a, this._handleEvents), this._hoverable(a), this._focusable(a)
            },
            _destroy: function () {
                this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function (b) {
                var c, d, e, f, g, h, i, j, k = this, l = this.options;
                return l.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), c = {
                    x: b.pageX,
                    y: b.pageY
                }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function (b) {
                    var c = Math.abs(d - k.values(b));
                    (e > c || e === c && (b === k._lastChangedValue || k.values(b) === l.min)) && (e = c, f = a(this), g = b)
                }), h = this._start(b, g), h === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = g, f.addClass("ui-state-active").focus(), i = f.offset(), j = !a(b.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = j ? {
                    left: 0,
                    top: 0
                } : {
                    left: b.pageX - i.left - f.width() / 2,
                    top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(b, g, d), this._animateOff = !0, !0))
            },
            _mouseStart: function () {
                return !0
            },
            _mouseDrag: function (a) {
                var b = {x: a.pageX, y: a.pageY}, c = this._normValueFromMouse(b);
                return this._slide(a, this._handleIndex, c), !1
            },
            _mouseStop: function (a) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(a, this._handleIndex), this._change(a, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function (a) {
                var b, c, d, e, f;
                return "horizontal" === this.orientation ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), d = c / b, d > 1 && (d = 1), 0 > d && (d = 0), "vertical" === this.orientation && (d = 1 - d), e = this._valueMax() - this._valueMin(), f = this._valueMin() + d * e, this._trimAlignValue(f)
            },
            _start: function (a, b) {
                var c = {handle: this.handles[b], value: this.value()};
                return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("start", a, c)
            },
            _slide: function (a, b, c) {
                var d, e, f;
                this.options.values && this.options.values.length ? (d = this.values(b ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && d > c) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c,
                    values: e
                }), d = this.values(b ? 0 : 1), f !== !1 && this.values(b, c))) : c !== this.value() && (f = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c
                }), f !== !1 && this.value(c))
            },
            _stop: function (a, b) {
                var c = {handle: this.handles[b], value: this.value()};
                this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._trigger("stop", a, c)
            },
            _change: function (a, b) {
                if (!this._keySliding && !this._mouseSliding) {
                    var c = {handle: this.handles[b], value: this.value()};
                    this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()), this._lastChangedValue = b, this._trigger("change", a, c)
                }
            },
            value: function (a) {
                return arguments.length ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function (b, c) {
                var d, e, f;
                if (arguments.length > 1)return this.options.values[b] = this._trimAlignValue(c), this._refreshValue(), void this._change(null, b);
                if (!arguments.length)return this._values();
                if (!a.isArray(arguments[0]))return this.options.values && this.options.values.length ? this._values(b) : this.value();
                for (d = this.options.values, e = arguments[0], f = 0; f < d.length; f += 1)d[f] = this._trimAlignValue(e[f]), this._change(null, f);
                this._refreshValue()
            },
            _setOption: function (b, c) {
                var d, e = 0;
                switch ("range" === b && this.options.range === !0 && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments), b) {
                    case"orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case"value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case"values":
                        for (this._animateOff = !0, this._refreshValue(), d = 0; e > d; d += 1)this._change(null, d);
                        this._animateOff = !1;
                        break;
                    case"min":
                    case"max":
                        this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                        break;
                    case"range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function () {
                var a = this.options.value;
                return a = this._trimAlignValue(a)
            },
            _values: function (a) {
                var b, c, d;
                if (arguments.length)return b = this.options.values[a], b = this._trimAlignValue(b);
                if (this.options.values && this.options.values.length) {
                    for (c = this.options.values.slice(), d = 0; d < c.length; d += 1)c[d] = this._trimAlignValue(c[d]);
                    return c
                }
                return []
            },
            _trimAlignValue: function (a) {
                if (a <= this._valueMin())return this._valueMin();
                if (a >= this._valueMax())return this._valueMax();
                var b = this.options.step > 0 ? this.options.step : 1, c = (a - this._valueMin()) % b, d = a - c;
                return 2 * Math.abs(c) >= b && (d += c > 0 ? b : -b), parseFloat(d.toFixed(5))
            },
            _valueMin: function () {
                return this.options.min
            },
            _valueMax: function () {
                return this.options.max
            },
            _refreshValue: function () {
                var b, c, d, e, f, g = this.options.range, h = this.options, i = this, j = this._animateOff ? !1 : h.animate, k = {};
                this.options.values && this.options.values.length ? this.handles.each(function (d) {
                    c = (i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin()) * 100, k["horizontal" === i.orientation ? "left" : "bottom"] = c + "%", a(this).stop(1, 1)[j ? "animate" : "css"](k, h.animate), i.options.range === !0 && ("horizontal" === i.orientation ? (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({left: c + "%"}, h.animate), 1 === d && i.range[j ? "animate" : "css"]({width: c - b + "%"}, {
                        queue: !1,
                        duration: h.animate
                    })) : (0 === d && i.range.stop(1, 1)[j ? "animate" : "css"]({bottom: c + "%"}, h.animate), 1 === d && i.range[j ? "animate" : "css"]({height: c - b + "%"}, {
                        queue: !1,
                        duration: h.animate
                    }))), b = c
                }) : (d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e ? (d - e) / (f - e) * 100 : 0, k["horizontal" === this.orientation ? "left" : "bottom"] = c + "%", this.handle.stop(1, 1)[j ? "animate" : "css"](k, h.animate), "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({width: c + "%"}, h.animate), "max" === g && "horizontal" === this.orientation && this.range[j ? "animate" : "css"]({width: 100 - c + "%"}, {
                    queue: !1,
                    duration: h.animate
                }), "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[j ? "animate" : "css"]({height: c + "%"}, h.animate), "max" === g && "vertical" === this.orientation && this.range[j ? "animate" : "css"]({height: 100 - c + "%"}, {
                    queue: !1,
                    duration: h.animate
                }))
            },
            _handleEvents: {
                keydown: function (c) {
                    var d, e, f, g, h = a(c.target).data("ui-slider-handle-index");
                    switch (c.keyCode) {
                        case a.ui.keyCode.HOME:
                        case a.ui.keyCode.END:
                        case a.ui.keyCode.PAGE_UP:
                        case a.ui.keyCode.PAGE_DOWN:
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (c.preventDefault(), !this._keySliding && (this._keySliding = !0, a(c.target).addClass("ui-state-active"), d = this._start(c, h), d === !1))return
                    }
                    switch (g = this.options.step, e = f = this.options.values && this.options.values.length ? this.values(h) : this.value(), c.keyCode) {
                        case a.ui.keyCode.HOME:
                            f = this._valueMin();
                            break;
                        case a.ui.keyCode.END:
                            f = this._valueMax();
                            break;
                        case a.ui.keyCode.PAGE_UP:
                            f = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / b);
                            break;
                        case a.ui.keyCode.PAGE_DOWN:
                            f = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / b);
                            break;
                        case a.ui.keyCode.UP:
                        case a.ui.keyCode.RIGHT:
                            if (e === this._valueMax())return;
                            f = this._trimAlignValue(e + g);
                            break;
                        case a.ui.keyCode.DOWN:
                        case a.ui.keyCode.LEFT:
                            if (e === this._valueMin())return;
                            f = this._trimAlignValue(e - g)
                    }
                    this._slide(c, h, f)
                }, click: function (a) {
                    a.preventDefault()
                }, keyup: function (b) {
                    var c = a(b.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), a(b.target).removeClass("ui-state-active"))
                }
            }
        })
    }(b)
}), define("common/js/util/dialog-login", ["jqueryui", "common/js/mod/login", "jquery"], function (a) {
    var b = a("jqueryui"), c = a("common/tpl/login.tpl"), d = template.compile(c), e = {
        platUrl: "/account/thirdlogin",
        platform: ["qq", "weixin", "weibo", "renren"],
        backUrl: encodeURIComponent(location.href)
    }, f = d(e), g = a("common/js/mod/login"), h = "#LoginPopupName", i = "#LoginPopupPassword", j = ".te-warn", k = b(f).dialog({
        position: ["center", "center"],
        width: 764,
        title: "用户登录",
        autoOpen: !1,
        closeText: "关闭",
        resizable: !1,
        draggable: !1,
        dialogClass: "g-kmf-login",
        modal: !0,
        show: {effect: "fade", duration: 500},
        hide: {effect: "fade", duration: 500},
        create: function () {
            b(window).scroll(function () {
                k.dialog({position: ["center", "center"]})
            })
        },
        resizable: !1
    });
    return b(i + "," + h).on("focus", function () {
        k.find(j).html("")
    }), function (a) {
        return k.undelegate(".fo-inp", "keyup"), k.delegate(".fo-inp", "keyup", function (b) {
            13 == b.keyCode && g.login(a)
        }), b(document).undelegate("#LoginSubmit", "click"), b(document).delegate("#LoginSubmit", "click", function () {
            g.login(a)
        }), k
    }
}), define("common/tpl/login.tpl", [], '<div class="po-login g-clearfix">\n    <div class="left">\n        <div class="fo-form">\n        	<form id="js-kmf-login-form">\n	            <div class="item">\n	                <label class="title">用户名/手机号/Email邮箱地址：</label>\n	                <input type="text"  class="fo-inp" id="LoginPopupName" required />\n	            </div>\n	            <div class="item">\n	                <label class="title">登录密码：</label>\n	                <input type="password" class="fo-inp" id="LoginPopupPassword" minlength="6" required />\n	            </div>\n	            <div class="item g-clearfix">\n	                <ul class="check g-kmf-form js-kmf-form g-floatleft">\n	                	<li class="normal"><span class="g-formbg g-checkbox"><input type="checkbox" name="remember" checked="checked" id="LoginPopupRemember" value="1" /></span>下次自动登录</li>\n	                </ul>\n	                <a href="http://passport.kaomanfen.com/account/seekpassword" class="login-lost g-floatright">忘记登录密码了？</a>\n	            </div>\n	            <a href="javascript:void(0)" class="g-btn-normal" id="LoginSubmit">马上登录</a>\n	            <p class="te-warn"></p>\n        	</form>\n        </div>\n	</div>\n    <div class="right">\n        <p>还没有考满分账号？</p>\n        <a href="/account/register" class="g-btn-normal btn-register">快速注册考满分账号</a>\n        <p>使用其它账号直接登录</p>\n        <div class="login-connect ym-clearfix">\n        	{{each platform}}\n            <a href="{{platUrl}}?plat={{$value}}&backurl={{backUrl}}" class="{{$value}}"></a>\n            {{/each}}\n        </div> \n    </div>\n</div>'), define("common/js/mod/login", ["jquery"], function (a, b) {
    var c = a("jquery"), d = "/account/ajaxlogin", e = !1;
    b.login = function (a) {
        var b = c("#LoginSubmit"), f = b.siblings(".te-warn"), g = c("#LoginPopupName"), h = c("#LoginPopupPassword"), i = "g-btn-disabled", j = {
            nickname: c.trim(g.val()),
            password: c.trim(h.val()),
            remember: "undefined" == c.type(c("#LoginPopupRemember:checked").val()) ? 0 : 1
        };
        if ("" != j.nickname && "" != j.password) {
            if (e)return !1;
            e = !0, b.addClass(i).text("登录中..."), c.post(d, j, function (c) {
                1 == c.status ? (f.html(""), "function" == typeof a ? a() : window.location.reload()) : (f.html("用户名或者密码错误！"), b.removeClass(i).text("马上登录")), e = !1
            }, "json")
        } else f.html("用户名和密码都不得为空！");
        return !1
    }
}), define("toefl/tpl/rate-submenu.tpl", [], '<a href="javascript:void(0)"><span class="rate-value">0.8</span>倍速</a>\n<a href="javascript:void(0)"><span class="rate-value">1.0</span>倍速</a>\n<a href="javascript:void(0)"><span class="rate-value">1.2</span>倍速</a>\n<a href="javascript:void(0)"><span class="rate-value">1.5</span>倍速</a>\n<a href="javascript:void(0)"><span class="rate-value">1.7</span>倍速</a>\n<a href="javascript:void(0)"><span class="rate-value">2.0</span>倍速</a>\n'), define("toefl/tpl/listen-pannel.tpl", [], '{{if isBegin}}\n{{if playType == "sentence"}}\n<p class="pannel-pause">\n	<a href="javascript:void(0)" class="pannel-play"><span class="i-toefl-icobg i-toefl-pen-g"></span>开始练习</a>\n</p>\n<p class="pannel-desc">\n	精听每个句子能从根本上有效的提高听力水平\n</p>\n{{else if playType == "paragraph"}}\n<p class="pannel-pause">\n	<a href="javascript:void(0)" class="pannel-play"><span class="i-toefl-icobg i-toefl-pen-g"></span>开始练习</a>\n</p>\n<p class="pannel-desc">\n	精听段落，分析文章细节与段落作用\n</p>\n{{else}}\n<p class="pannel-pause">\n	<a href="javascript:void(0)" class="pannel-play"><span class="i-toefl-icobg i-toefl-pen-g"></span>开始练习</a>\n</p>\n<p class="pannel-desc">\n	精听全文，熟悉托福听力文章结构与考点\n</p>\n{{/if}}\n{{else}}\n{{if playType == "sentence"}}\n<p class="pannel-pause">\n	<a href="javascript:void(0)" class="pannel-towrite"><span class="i-toefl-icobg i-toefl-pen-g"></span>听写本句</a>\n	<a href="javascript:void(0)" class="pannel-repeat"><span class="i-toefl-icobg i-rel-repeat"></span>再播一遍本句</a>\n	<a href="javascript:void(0)" class="pannel-next"><span class="i-toefl-icobg i-rel-next"></span>下一句</a>\n</p>\n{{else if playType == "paragraph"}}\n<p class="pannel-pause">\n	<a href="javascript:void(0)" class="pannel-repeat"><span class="i-toefl-icobg i-rel-repeat"></span>再播一遍本段</a>\n	<a href="javascript:void(0)" class="pannel-next"><span class="i-toefl-icobg i-rel-next"></span>下一段</a>\n</p>\n{{else}}\n<p class="pannel-pause">\n	<a href="javascript:void(0)" class="pannel-repeat"><span class="i-toefl-icobg i-rel-repeat"></span>再播一遍本文</a>\n</p>\n{{/if}}\n{{/if}}\n'), define("toefl/tpl/fav-menu.tpl", [], '{{if playType == "sentence"}}\n	{{if favList.sentence}}\n	<span class="i-toefl-icobg i-toefl-fav i-toefl-faved"></span>\n	<span class="menu-text" data-fav="1" data-type="sentence">已收藏本句</span>\n	{{else}}\n	<span class="i-toefl-icobg i-toefl-fav"></span>\n	<span class="menu-text" data-fav="0" data-type="sentence">收藏本句</span>\n	{{/if}}\n{{else if playType == "paragraph"}}\n	{{if favList.paragraph}}\n	<span class="i-toefl-icobg i-toefl-fav i-toefl-faved"></span>\n	<span class="menu-text" data-fav="1" data-type="paragraph">已收藏本段</span>\n	{{else}}\n	<span class="i-toefl-icobg i-toefl-fav"></span>\n	<span class="menu-text" data-fav="0" data-type="paragraph">收藏本段</span>\n	{{/if}}\n{{else}}\n	{{if favList.full}}\n	<span class="i-toefl-icobg i-toefl-fav i-toefl-faved"></span>\n	<span class="menu-text" data-fav="1" data-type="full">已收藏全文</span>\n	{{else}}\n	<span class="i-toefl-icobg i-toefl-fav"></span>\n	<span class="menu-text" data-fav="0" data-type="full">收藏全文</span>\n	{{/if}}\n{{/if}}\n	<span class="arrow"></span>\n'), define("toefl/tpl/fav-submenu.tpl", [], '{{if playType == "sentence"}}\n	{{if favList.paragraph}}\n	<a href="javascript:void(0)" data-fav="1" data-type="paragraph"{{if isHideP}} style="display:none"{{/if}}>已收藏本段</a>\n	{{else}}\n	<a href="javascript:void(0)" data-fav="0" data-type="paragraph"{{if isHideP}} style="display:none"{{/if}}>收藏本段</a>\n	{{/if}}\n	{{if favList.full}}\n	<a href="javascript:void(0)" data-fav="1" data-type="full">已收藏全文</a>\n	{{else}}\n	<a href="javascript:void(0)" data-fav="0" data-type="full">收藏全文</a>\n	{{/if}}\n{{else if playType == "paragraph"}}\n	{{if favList.sentence}}\n	<a href="javascript:void(0)" data-fav="1" data-type="sentence">已收藏本句</a>\n	{{else}}\n	<a href="javascript:void(0)" data-fav="0" data-type="sentence">收藏本句</a>\n	{{/if}}\n	{{if favList.full}}\n	<a href="javascript:void(0)" data-fav="1" data-type="full">已收藏全文</a>\n	{{else}}\n	<a href="javascript:void(0)" data-fav="0" data-type="full">收藏全文</a>\n	{{/if}}\n{{else}}\n	{{if favList.sentence}}\n	<a href="javascript:void(0)" data-fav="1" data-type="sentence">已收藏本句</a>\n	{{else}}\n	<a href="javascript:void(0)" data-fav="0" data-type="sentence">收藏本句</a>\n	{{/if}}\n	{{if favList.paragraph}}\n	<a href="javascript:void(0)" data-fav="1" data-type="paragraph"{{if isHideP}} style="display:none"{{/if}}>已收藏本段</a>\n	{{else}}\n	<a href="javascript:void(0)" data-fav="0" data-type="paragraph"{{if isHideP}} style="display:none"{{/if}}>收藏本段</a>\n	{{/if}}\n{{/if}}'), define("toefl/tpl/write-pannel.tpl", [], '{{if hasLrc}}\n	{{each list}}\n	{{if $value.display}}\n	<span style="width:{{$value.wordWidth}}px;" class="word js-words write-word">\n		<input type="text" data-sn="{{$index}}" style="width:{{$value.wordWidth}}px;" class="in-word pannel-word g-f24" />\n		<span class="word-tips-body">\n			<a class="word-mask" href="javascript:void(0)"></a>\n			<a href="javascript:void(0)" class="word-tips js-kmf-tips" data-msg="显示此单词"><span class="i-toefl-icobg i-toefl-eye"></span></a>\n		</span>\n	</span>\n	{{else}}\n	<span style="width:{{$value.wordWidth}}px;" class="auto-word js-words">\n		<input type="text" data-sn="{{$index}}" style="width:{{$value.wordWidth}}px;" value="{{$value.word}}" class="in-autoword g-f24 pannel-word" readonly="readonly" />\n	</span>\n	{{/if}}\n	{{/each}}\n{{else}}\n	<span class="word-nolrc">\n		<input type="text" class="in-word-nolrc" />\n	</span>\n{{/if}}\n'), define("toefl/tpl/write-operate-l.tpl", [], '<p class="pannel-pause">\n	<a href="javascript:void(0)" class="pannel-repeat-w js-kmf-tips" data-msg="快捷键:<span class=\'g-b\'>[</span>"><span class="i-toefl-icobg i-rel-repeat"></span>再播一遍本句</a>\n	{{if writeStatus==1}}\n	<a href="javascript:void(0)" class="pannel-write-lrc"><span class="i-toefl-icobg i-rel-showlrc"></span>查看原文</a>\n	{{else if writeStatus==2}}\n	<a href="javascript:void(0)" class="pannel-write-lrc js-writing-continue"><span class="i-toefl-icobg i-rel-showlrc"></span>继续听写(<em class="js-lrc-countdown">5</em>)</a>\n	{{else if writeStatus==3}}\n	<a href="javascript:void(0)" class="pannel-write-lrc pannel-disabled"><span class="i-toefl-icobg i-rel-showlrc"></span>查看原文</a>\n	{{/if}}\n	{{if isEnd}}\n	<a href="{{overUrl}}" class="pannel-over"><span class="i-toefl-icobg i-rel-complete"></span>结束训练</a>\n	{{else}}\n	<a href="javascript:void(0)" class="pannel-next js-kmf-tips" data-msg="快捷键:<span class=\'g-b\'>]</span>"><span class="i-toefl-icobg i-rel-next"></span>进入下一句</a>\n	{{/if}}\n</p>'), define("toefl/js/mod/exit_listen", ["jquery"], function (a, b, c) {
    var d = a("jquery");
    c.exports = function (a) {
        var b = {title: "提示", message: "确定退出此操作吗？", ele: ".js-player-exit"}, c = d.extend({}, b);
        "object" == typeof a ? c = d.extend({}, b, a) : "string" == typeof a && (c.message = a), d(document).delegate(c.ele, "click", function () {
            return overUrl = d(this).attr("href"), confirm({
                title: c.title,
                message: c.message,
                confirm: {text: "退出", url: overUrl},
                cancel: {text: "继续练习"}
            }), !1
        })
    }
}), define("toefl/js/mod/player_type_tips", ["jquery"], function (a) {
    var b = a("jquery");
    b(function () {
        var c = b(".play-model a"), d = a("toefl/tpl/player_type_tips.tpl"), e = b('<div class="s-type-tips"></div>'), f = template.compile(d), g = null;
        e.hide().appendTo("body"), c.on({
            mouseenter: function () {
                var a = b(this).data("type"), c = f({type: a}), d = b(this).offset().left, h = b(this).offset().top, i = b(this).outerHeight(), j = b(this).outerWidth(), k = d, l = h + i - 10, m = ".arrow";
                switch (e.html(c), a) {
                    case"sentence":
                        k = d, e.find(m).css({left: 27});
                        break;
                    case"paragraph":
                        k = d, e.find(m).css({left: 27});
                        break;
                    case"full":
                        k = d - e.find(".desc").outerWidth() + j, e.find(m).css({left: 176})
                }
                g && (clearTimeout(g), g = null), 1 != e.data("showing") ? (e.css({
                    left: k,
                    top: l
                }).show(), e.data("showing", "1")) : e.stop(!0, !1).animate({left: k, top: l}, 300)
            }, mouseleave: function () {
                g = setTimeout(function () {
                    e.hide(), e.removeData("showing")
                }, 100)
            }
        })
    })
}), define("toefl/tpl/player_type_tips.tpl", [], '{{if type=="sentence"}}\n<div class="i-toefl-icobg arrow"></div>\n<div class="desc">\n	每个<span class="g-hl-1">句子</span>结束后将自动暂停播放，适合听力基础能力提高练习。\n</div>\n{{else if type=="paragraph"}}\n<div class="i-toefl-icobg arrow"></div>\n<div class="desc">\n	每个<span class="g-hl-1">段落</span>结束后将自动暂停播放，适合文章细节与段落作用分析练习。\n</div>\n{{else if type=="full"}}\n<div class="i-toefl-icobg arrow"></div>\n<div class="desc">\n	<span class="g-hl-1">全文</span>结束后将自动暂停播放，适合文章结构分析练习。\n</div>\n{{/if}}\n\n'), define("toefl/js/mod/modify/modify", ["jquery", "common/js/mod/str"], function (a, b, c) {
    var d = a("jquery"), e = a("common/js/mod/str"), f = {
        init: function (a) {
            var b = this, c = {
                evaluateUrl: "/subject/questionestimate",
                modifyUrl: "",
                cssSelector: {
                    fav: "#js-btn-fav",
                    good: "#js-btn-good",
                    bad: "#js-btn-bad",
                    modify: "#js-btn-modify",
                    dialog: "#js-kmf-modify"
                }
            };
            a && (d.extend(c, a), a.cssSelector && d.extend(c.cssSelector, a.cssSelector)), d(document).undelegate(c.cssSelector.modify, "click"), d(document).delegate(c.cssSelector.modify, "click", function () {
                c.qid = d(this).data("reportid"), c.qid ? b.modify.call(b, d(this), c) : alert("找不到当前的句子！")
            })
        }, modify: function (a, b) {
            var c = {
                width: 467,
                height: 293,
                dialogClass: "g-dialog-modify",
                tips: ".js-modify-tips"
            }, e = this, f = ".save-modify", g = ".modify-msg", h = ".modify-type";
            d.extend(c, b), $modify = d(c.cssSelector.dialog), $modify.undelegate(f, "click"), $modify.undelegate(g, "focus"), $modify.undelegate(h, "change"), $modify.delegate(g, "focus", function () {
                $modify.find(c.tips).html("")
            }), $modify.delegate(f, "click", function () {
                e.saveModify.call(e, $modify, c.modifyUrl, c.qid)
            }), $modify.delegate(h, "change", function () {
                var a = d(this).find("option:selected").data("placeholder");
                $modify.find(g).attr("placeholder", a)
            }), e.closeTimmer && (clearTimeout(e.closeTimmer), e.closeTimmer = null, this.doing = !1), $modify.dialog({
                width: c.width,
                height: c.height,
                dialogClass: c.dialogClass,
                autoOpen: !1,
                position: ["center", "center"],
                draggable: !0,
                resizable: !1,
                open: function () {
                    {
                        var b = a.outerHeight(), e = a.outerWidth(), f = a.offset().left;
                        a.offset().top + b, d(window).width()
                    }
                    f -= c.width - e, $modify.find(c.tips).html("")
                }
            }), $modify.dialog("open")
        }, closeTimmer: null, doing: !1, saveModify: function (a, b, c) {
            var f = a.find(".modify-type").val(), g = d.trim(a.find(".modify-msg").val()), h = a.find(".js-modify-tips"), i = a.find("input[name=subject]").val(), j = this, k = 500;
            return "" == g ? void h.html("不能为空!").addClass("error").removeClass("success") : e.getByteLength(g) > k ? void h.html("不能超过500字符").addClass("error").removeClass("success") : void(this.doing || (this.doing = !0, d.post(b, {
                id: c,
                type: f,
                msg: g,
                subject: i
            }, function (b) {
                1 == b.status ? (h.html("保存成功!").addClass("success").removeClass("error"), j.closeTimmer = setTimeout(function () {
                    a.dialog("close"), this.doing = !1
                }, 1e3)) : (this.doing = !1, h.html("保存失败!").addClass("error").removeClass("success"))
            }, "json")))
        }
    };
    c.exports = f
}), define("common/js/mod/str", [], function () {
    function a(a) {
        for (var b = 0, c = 0; c < a.length; c++)a.charCodeAt(c) > 255 ? b += 2 : b++;
        return b
    }

    function b(a, b) {
        var c, d = a.length, e = [], f = 0;
        for (c = 0; d > c && !(f > b - 1); c++)a.charCodeAt(c) > 255 ? (e.push(a.charAt(c)), f += 2) : (e.push(a.charAt(c)), f++);
        return e.join("")
    }

    function c(a) {
        return a = a.replace(/\</g, "&lt;"), a = a.replace(/\>/g, "&gt;")
    }

    function d(d, e, f) {
        if ("string" == typeof d) {
            var g = a(d), h = "string" == typeof f ? f : "...", i = d;
            return g > e && (i = b(d, e) + h), c(i)
        }
    }

    return {getByteLength: a, ellipsis: d}
});