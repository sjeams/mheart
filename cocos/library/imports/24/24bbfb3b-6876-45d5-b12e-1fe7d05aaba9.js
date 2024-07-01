"use strict";
cc._RF.push(module, '24bbfs7aHZF1bEuH+fQWqup', 'asset');
// Script/commonApi/asset.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 加载资源图片
var httpAsset = cc.Class({
  "extends": cc.Component,
  //引入的基础类--图片资源
  http_base_asset: function http_base_asset() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(http_globalAsset.http_base_asset_biology.length == [])) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return httpRequestAsset.http_base_asset_biology();

            case 3:
              if (!(http_globalAsset.http_base_asset_skill.length == [])) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return httpRequestAsset.http_base_asset_skill();

            case 6:
              if (!(http_globalAsset.http_base_asset_xiaoguo.length == [])) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return httpRequestAsset.http_base_asset_xiaoguo();

            case 9:
              if (!(http_globalAsset.http_base_asset_zhuangbei.length == [])) {
                _context.next = 12;
                break;
              }

              _context.next = 12;
              return httpRequestAsset.http_base_asset_zhuangbei();

            case 12:
              return _context.abrupt("return", '加载资源图片');

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  //实例化角色图片
  http_base_asset_biology: function http_base_asset_biology() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve) {
                http_globalAsset.http_base_asset_biology = []; // 加载资源目录

                cc.loader.loadResDir("图标生物", function (err, assets) {
                  if (err) {
                    cc.error(err);
                    return;
                  } // 遍历加载的资源


                  for (var i = 1; i <= assets.length; i++) {
                    var asset = assets[i]; // 检查资源是否为图片类型

                    if (asset instanceof cc.SpriteFrame) {
                      var newname = asset.name;
                      http_globalAsset.http_base_asset_biology[newname] = asset;
                    }
                  }

                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  //技能
  http_base_asset_skill: function http_base_asset_skill() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function (resolve) {
                http_globalAsset.http_base_asset_skill = []; // 加载资源目录

                cc.loader.loadResDir("图标技能", function (err, assets) {
                  if (err) {
                    cc.error(err);
                    return;
                  } // 遍历加载的资源


                  for (var i = 1; i <= assets.length; i++) {
                    var asset = assets[i]; // 检查资源是否为图片类型

                    if (asset instanceof cc.SpriteFrame) {
                      var newname = asset.name;
                      http_globalAsset.http_base_asset_skill[newname] = asset;
                    }
                  }

                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  http_base_asset_xiaoguo: function http_base_asset_xiaoguo() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve) {
                http_globalAsset.http_base_asset_xiaoguo = []; // 加载资源目录

                cc.loader.loadResDir("图标技能效果", function (err, assets) {
                  if (err) {
                    cc.error(err);
                    return;
                  } // 遍历加载的资源


                  for (var i = 1; i <= assets.length; i++) {
                    var asset = assets[i]; // 检查资源是否为图片类型

                    if (asset instanceof cc.SpriteFrame) {
                      var newname = asset.name;
                      http_globalAsset.http_base_asset_xiaoguo[newname] = asset;
                    }
                  }

                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  http_base_asset_zhuangbei: function http_base_asset_zhuangbei() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise(function (resolve) {
                http_globalAsset.http_base_asset_zhuangbei = []; // 加载资源目录

                cc.loader.loadResDir("图标装备", function (err, assets) {
                  if (err) {
                    cc.error(err);
                    return;
                  } // 遍历加载的资源


                  for (var i = 1; i <= assets.length; i++) {
                    var asset = assets[i]; // 检查资源是否为图片类型

                    if (asset instanceof cc.SpriteFrame) {
                      var newname = asset.name;
                      http_globalAsset.http_base_asset_zhuangbei[newname] = asset;
                    }
                  }

                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
});
window.httpRequestAsset = new httpAsset();

cc._RF.pop();