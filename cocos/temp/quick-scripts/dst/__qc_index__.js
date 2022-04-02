
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/bage/Conf');
require('./assets/Script/bage/Game');
require('./assets/Script/bage/Tool');
require('./assets/Script/commonjs/alert');
require('./assets/Script/commonjs/post');
require('./assets/Script/home_js/userinfo');
require('./assets/Script/login/Alert');
require('./assets/Script/login/ProgressBarScript');
require('./assets/Script/login/SpriteTextTool');
require('./assets/Script/login/background');
require('./assets/Script/login/http');
require('./assets/Script/login/jspfile');
require('./assets/Script/login/loading');
require('./assets/Script/login/myserver');
require('./assets/Script/login/popup_dlg');
require('./assets/Script/login/role');
require('./assets/Script/scence/loading_fist');
require('./assets/Script/scence/scoretrump');
require('./assets/Script/scence/wap');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();