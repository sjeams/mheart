
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/role.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba2146UZDNDA7jR6DbxLO8s', 'role');
// Script/login/role.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var HttpHelper = require("http"); // var fs = require('fs'); // 引入fs模块
// var globaluserinfo = require("GlobaluserInfo");


var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  //创建角色
  create_role: function create_role() {
    var server = JSON.parse(cc.sys.localStorage.getItem('server')); // 请求登录接口

    var params = {
      'loginid': server.loginid,
      'server': server.id,
      'name': '测试',
      'servername': server.name
    }; // cc.log(server); 

    httpRequest.httpPost('http://www.monster.com/app/api-server/user-role', params, function (data) {
      cc.log(data);

      if (data.code == 0) {
        // 登录失败，或本地数据失效
        cc.director.loadScene('login');
      } else {
        cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
        cc.director.loadScene('model/dating');
      }
    });
  } // update (dt) {},

});

cc._RF.pop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxccm9sZS5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImNyZWF0ZV9yb2xlIiwic2VydmVyIiwiSlNPTiIsInBhcnNlIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcmFtcyIsImxvZ2luaWQiLCJpZCIsIm5hbWUiLCJodHRwUG9zdCIsImRhdGEiLCJsb2ciLCJjb2RlIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidXNlcmluZm8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4QixFQUNBO0FBQ0E7OztBQUNBLElBQUlDLFdBQVcsR0FBSSxJQUFJRixVQUFKLEVBQW5CO0FBQ0FHLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQTtBQUVBQyxFQUFBQSxLQXpCSyxtQkF5QkksQ0FFUixDQTNCSTtBQTZCTDtBQUNBQyxFQUFBQSxXQTlCSyx5QkE4QlE7QUFDVCxRQUFJQyxNQUFNLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixFQUFFLENBQUNTLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsUUFBNUIsQ0FBWCxDQUFiLENBRFMsQ0FFVDs7QUFDSSxRQUFJQyxNQUFNLEdBQUc7QUFDVCxpQkFBV04sTUFBTSxDQUFDTyxPQURUO0FBRVQsZ0JBQVVQLE1BQU0sQ0FBQ1EsRUFGUjtBQUdULGNBQVEsSUFIQztBQUlULG9CQUFjUixNQUFNLENBQUNTO0FBSlosS0FBYixDQUhLLENBU1Q7O0FBQ0FoQixJQUFBQSxXQUFXLENBQUNpQixRQUFaLENBQXFCLGlEQUFyQixFQUF3RUosTUFBeEUsRUFBZ0YsVUFBVUssSUFBVixFQUFnQjtBQUM1RmpCLE1BQUFBLEVBQUUsQ0FBQ2tCLEdBQUgsQ0FBT0QsSUFBUDs7QUFDQSxVQUFHQSxJQUFJLENBQUNFLElBQUwsSUFBVyxDQUFkLEVBQWdCO0FBQUU7QUFDZG5CLFFBQUFBLEVBQUUsQ0FBQ29CLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixPQUF0QjtBQUNILE9BRkQsTUFFSztBQUNEckIsUUFBQUEsRUFBRSxDQUFDUyxHQUFILENBQU9DLFlBQVAsQ0FBb0JZLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDZixJQUFJLENBQUNnQixTQUFMLENBQWVOLElBQUksQ0FBQ0EsSUFBTCxDQUFVTyxRQUF6QixDQUF4QztBQUNBeEIsUUFBQUEsRUFBRSxDQUFDb0IsUUFBSCxDQUFZQyxTQUFaLENBQXNCLGNBQXRCO0FBQ0g7QUFFSixLQVREO0FBWUgsR0FwREksQ0FzREw7O0FBdERLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG4vLyB2YXIgZnMgPSByZXF1aXJlKCdmcycpOyAvLyDlvJXlhaVmc+aooeWdl1xyXG4vLyB2YXIgZ2xvYmFsdXNlcmluZm8gPSByZXF1aXJlKFwiR2xvYmFsdXNlckluZm9cIik7XHJcbmxldCBodHRwUmVxdWVzdCA9ICBuZXcgSHR0cEhlbHBlcigpOyAgXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvL+WIm+W7uuinkuiJslxyXG4gICAgY3JlYXRlX3JvbGUoKXtcclxuICAgICAgICB2YXIgc2VydmVyID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcnZlcicpKTtcclxuICAgICAgICAvLyDor7fmsYLnmbvlvZXmjqXlj6NcclxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICdsb2dpbmlkJzogc2VydmVyLmxvZ2luaWQsXHJcbiAgICAgICAgICAgICAgICAnc2VydmVyJzogc2VydmVyLmlkLFxyXG4gICAgICAgICAgICAgICAgJ25hbWUnOiAn5rWL6K+VJyxcclxuICAgICAgICAgICAgICAgICdzZXJ2ZXJuYW1lJzogc2VydmVyLm5hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICAvLyBjYy5sb2coc2VydmVyKTsgXHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHA6Ly93d3cubW9uc3Rlci5jb20vYXBwL2FwaS1zZXJ2ZXIvdXNlci1yb2xlJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICBpZihkYXRhLmNvZGU9PTApeyAvLyDnmbvlvZXlpLHotKXvvIzmiJbmnKzlnLDmlbDmja7lpLHmlYhcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbG9naW4nKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXJpbmZvKSk7IFxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtb2RlbC9kYXRpbmcnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==