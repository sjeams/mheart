
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
require('./assets/Script/bakcground');
require('./assets/Script/commonjs/alert');
require('./assets/Script/commonjs/post');
require('./assets/Script/fighting/fightingTools');
require('./assets/Script/fighting/score_fighting');
require('./assets/Script/home_js/userinfo');
require('./assets/Script/http');
require('./assets/Script/login/Alert');
require('./assets/Script/login/ProgressBarScript');
require('./assets/Script/login/SpriteTextTool');
require('./assets/Script/login/Tools');
require('./assets/Script/login/background');
require('./assets/Script/login/button_check');
require('./assets/Script/login/button_xieyi');
require('./assets/Script/login/jspfile');
require('./assets/Script/login/loading');
require('./assets/Script/login/myserver');
require('./assets/Script/login/popup_dlg');
require('./assets/Script/login/register');
require('./assets/Script/login/register_in');
require('./assets/Script/login/register_knows');
require('./assets/Script/login/tips');
require('./assets/Script/progressTools');
require('./assets/Script/scence/home_scence');
require('./assets/Script/scence/loading_fist');
require('./assets/Script/scence/mapTools');
require('./assets/Script/scence/score_map');
require('./assets/Script/scence/score_word');
require('./assets/Script/scence/wap');
require('./assets/Script/scence/wordTools');

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