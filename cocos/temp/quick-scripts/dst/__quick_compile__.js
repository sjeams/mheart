
(function () {
var scripts = [{"deps":{"./assets/Script/bage/Game":28,"./assets/Script/bage/Tool":29,"./assets/Script/bage/Conf":2,"./assets/Script/commonjs/post":4,"./assets/Script/commonjs/alert":7,"./assets/Script/fighting/score_fighting":30,"./assets/Script/fighting/fightingTools":3,"./assets/Script/login/ProgressBarScript":8,"./assets/Script/login/SpriteTextTool":9,"./assets/Script/login/Tools":10,"./assets/Script/login/background":11,"./assets/Script/login/button_xieyi":26,"./assets/Script/login/jspfile":13,"./assets/Script/login/button_check":12,"./assets/Script/login/loading":14,"./assets/Script/login/popup_dlg":15,"./assets/Script/login/myserver":16,"./assets/Script/login/register":17,"./assets/Script/login/register_in":20,"./assets/Script/login/register_knows":1,"./assets/Script/login/tips":18,"./assets/Script/login/Alert":19,"./assets/Script/home_js/userinfo":5,"./assets/Script/http":71,"./assets/Script/scence/loading_fist":6,"./assets/Script/scence/score_map":21,"./assets/Script/scence/mapTools":22,"./assets/Script/scence/score_word":23,"./assets/Script/scence/wap":27,"./assets/Script/scence/wordTools":24,"./assets/Script/scence/home_scence":25,"./assets/Script/progressTools":75},"path":"preview-scripts/__qc_index__.js"},{"deps":{"http":71},"path":"preview-scripts/assets/Script/login/register_knows.js"},{"deps":{},"path":"preview-scripts/assets/Script/bage/Conf.js"},{"deps":{"../http":71},"path":"preview-scripts/assets/Script/fighting/fightingTools.js"},{"deps":{},"path":"preview-scripts/assets/Script/commonjs/post.js"},{"deps":{"http":71},"path":"preview-scripts/assets/Script/home_js/userinfo.js"},{"deps":{},"path":"preview-scripts/assets/Script/scence/loading_fist.js"},{"deps":{},"path":"preview-scripts/assets/Script/commonjs/alert.js"},{"deps":{},"path":"preview-scripts/assets/Script/login/ProgressBarScript.js"},{"deps":{},"path":"preview-scripts/assets/Script/login/SpriteTextTool.js"},{"deps":{"http":71},"path":"preview-scripts/assets/Script/login/Tools.js"},{"deps":{},"path":"preview-scripts/assets/Script/login/background.js"},{"deps":{},"path":"preview-scripts/assets/Script/login/button_check.js"},{"deps":{},"path":"preview-scripts/assets/Script/login/jspfile.js"},{"deps":{},"path":"preview-scripts/assets/Script/login/loading.js"},{"deps":{},"path":"preview-scripts/assets/Script/login/popup_dlg.js"},{"deps":{"http":71},"path":"preview-scripts/assets/Script/login/myserver.js"},{"deps":{"http":71},"path":"preview-scripts/assets/Script/login/register.js"},{"deps":{"../http":71},"path":"preview-scripts/assets/Script/login/tips.js"},{"deps":{"../http":71},"path":"preview-scripts/assets/Script/login/Alert.js"},{"deps":{"http":71},"path":"preview-scripts/assets/Script/login/register_in.js"},{"deps":{"../http":71},"path":"preview-scripts/assets/Script/scence/score_map.js"},{"deps":{"../http":71},"path":"preview-scripts/assets/Script/scence/mapTools.js"},{"deps":{"../http":71},"path":"preview-scripts/assets/Script/scence/score_word.js"},{"deps":{"../http":71},"path":"preview-scripts/assets/Script/scence/wordTools.js"},{"deps":{"../http":71},"path":"preview-scripts/assets/Script/scence/home_scence.js"},{"deps":{},"path":"preview-scripts/assets/Script/login/button_xieyi.js"},{"deps":{},"path":"preview-scripts/assets/Script/scence/wap.js"},{"deps":{"./Conf":2},"path":"preview-scripts/assets/Script/bage/Game.js"},{"deps":{},"path":"preview-scripts/assets/Script/bage/Tool.js"},{"deps":{"../http":71},"path":"preview-scripts/assets/Script/fighting/score_fighting.js"},{"deps":{},"path":"preview-scripts/assets/Script/common/post.js"},{"deps":{},"path":"preview-scripts/assets/Script/common/alert.js"},{"deps":{},"path":"preview-scripts/assets/Script/NewScript.js"},{"deps":{"xtend":38,"builtin-status-codes":39,"./lib/request":35,"url":37,"./lib/response":36},"path":"preview-scripts/__node_modules/stream-http/index.js"},{"deps":{"./response":36,"../../process/browser.js":41,"buffer":42,"inherits":43,"readable-stream":44,"./capability":40,"to-arraybuffer":45},"path":"preview-scripts/__node_modules/stream-http/lib/request.js"},{"deps":{"./capability":40,"../../process/browser.js":41,"inherits":43,"buffer":42,"readable-stream":44},"path":"preview-scripts/__node_modules/stream-http/lib/response.js"},{"deps":{"./util":46,"punycode":47,"querystring":48},"path":"preview-scripts/__node_modules/url/url.js"},{"deps":{},"path":"preview-scripts/__node_modules/xtend/immutable.js"},{"deps":{},"path":"preview-scripts/__node_modules/builtin-status-codes/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/stream-http/lib/capability.js"},{"deps":{},"path":"preview-scripts/__node_modules/process/browser.js"},{"deps":{"base64-js":50,"ieee754":51,"isarray":58},"path":"preview-scripts/__node_modules/buffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/inherits/inherits_browser.js"},{"deps":{"./lib/_stream_duplex.js":53,"./lib/_stream_transform.js":54,"./lib/_stream_passthrough.js":55,"./lib/_stream_readable.js":49,"./lib/_stream_writable.js":52},"path":"preview-scripts/__node_modules/readable-stream/readable-browser.js"},{"deps":{"buffer":42},"path":"preview-scripts/__node_modules/to-arraybuffer/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/url/util.js"},{"deps":{},"path":"preview-scripts/__node_modules/punycode/punycode.js"},{"deps":{"./decode":56,"./encode":57},"path":"preview-scripts/__node_modules/querystring-es3/index.js"},{"deps":{"./_stream_duplex":53,"../../process/browser.js":41,"inherits":43,"process-nextick-args":61,"safe-buffer":62,"core-util-is":68,"util":59,"./internal/streams/stream":63,"events":60,"isarray":66,"./internal/streams/destroy":67,"./internal/streams/BufferList":64,"string_decoder/":69},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_readable.js"},{"deps":{},"path":"preview-scripts/__node_modules/base64-js/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/ieee754/index.js"},{"deps":{"./internal/streams/stream":63,"./internal/streams/destroy":67,"./_stream_duplex":53,"../../process/browser.js":41,"inherits":43,"util-deprecate":65,"process-nextick-args":61,"safe-buffer":62,"core-util-is":68},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_writable.js"},{"deps":{"./_stream_readable":49,"./_stream_writable":52,"inherits":43,"process-nextick-args":61,"core-util-is":68},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_duplex.js"},{"deps":{"./_stream_duplex":53,"inherits":43,"core-util-is":68},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_transform.js"},{"deps":{"./_stream_transform":54,"inherits":43,"core-util-is":68},"path":"preview-scripts/__node_modules/readable-stream/lib/_stream_passthrough.js"},{"deps":{},"path":"preview-scripts/__node_modules/querystring-es3/decode.js"},{"deps":{},"path":"preview-scripts/__node_modules/querystring-es3/encode.js"},{"deps":{},"path":"preview-scripts/__node_modules/buffer/node_modules/isarray/index.js"},{"deps":{},"path":"preview-scripts/__node_modules/browser-resolve/empty.js"},{"deps":{},"path":"preview-scripts/__node_modules/events/events.js"},{"deps":{"../process/browser.js":41},"path":"preview-scripts/__node_modules/process-nextick-args/index.js"},{"deps":{"buffer":42},"path":"preview-scripts/__node_modules/safe-buffer/index.js"},{"deps":{"events":60},"path":"preview-scripts/__node_modules/readable-stream/lib/internal/streams/stream-browser.js"},{"deps":{"util":59,"safe-buffer":62},"path":"preview-scripts/__node_modules/readable-stream/lib/internal/streams/BufferList.js"},{"deps":{},"path":"preview-scripts/__node_modules/util-deprecate/browser.js"},{"deps":{},"path":"preview-scripts/__node_modules/readable-stream/node_modules/isarray/index.js"},{"deps":{"process-nextick-args":61},"path":"preview-scripts/__node_modules/readable-stream/lib/internal/streams/destroy.js"},{"deps":{"../../is-buffer/index.js":70},"path":"preview-scripts/__node_modules/core-util-is/lib/util.js"},{"deps":{"safe-buffer":62},"path":"preview-scripts/__node_modules/readable-stream/node_modules/string_decoder/lib/string_decoder.js"},{"deps":{},"path":"preview-scripts/__node_modules/is-buffer/index.js"},{"deps":{},"path":"preview-scripts/assets/Script/http.js"},{"deps":{},"path":"preview-scripts/assets/Script/loading.js"},{"deps":{},"path":"preview-scripts/assets/Script/progress.js"},{"deps":{},"path":"preview-scripts/assets/Script/progress_bar.js"},{"deps":{"http":71},"path":"preview-scripts/assets/Script/progressTools.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }
                console.time && console.time('eval __quick_compile_project__');
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd('eval __quick_compile_project__');
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    