
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/jspfile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '418e4mQmD5NULo0MWDBNMnw', 'jspfile');
// Script/login/jspfile.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
  },
  // use this for initialization
  onLoad: function onLoad() {
    // jsb.fileUtils获取全局的工具类的实例, cc.director;
    // 如果是在电脑的模拟器上，就会是安装路径下模拟器的位置;
    // 如果是手机上，那么就是手机OS为这个APP分配的可以读写的路径; 
    // jsb --> javascript binding --> jsb是不支持h5的
    var writeable_path = jsb.fileUtils.getWritablePath();
    console.log(writeable_path); // 要在可写的路径先创建一个文件夹

    var new_dir = writeable_path + "new_dir"; // 路径也可以是 外部存储的路径，只要你有可写外部存储的权限;
    // getWritablePath这个路径下，会随着我们的程序卸载而删除,外部存储除非你自己删除，否者的话，卸载APP数据还在;

    if (!jsb.fileUtils.isDirectoryExist(new_dir)) {
      jsb.fileUtils.createDirectory(new_dir);
    } else {
      console.log("dir is exist!!!");
    } // 读写文件我们分两种,文本文件, 二进制文件;
    // (1)文本文件的读,返回的是一个string对象


    var str_data = jsb.fileUtils.getStringFromFile(new_dir + "/test_str_read.txt");
    console.log(str_data);
    str_data = "hello test_write !!!!!";
    jsb.fileUtils.writeStringToFile(str_data, new_dir + "/test_str_write.txt"); // (2)二进制文件的读写, Uint8Array --> js对象

    var bin_array = jsb.fileUtils.getDataFromFile(new_dir + "/test_bin_read.png");
    console.log(bin_array[0], bin_array[1]); // 使用这个就能访问二进制的每一个字节数据;

    jsb.fileUtils.writeDataToFile(bin_array, new_dir + "/test_bin_write.png"); // end 
    // 删除文件和文件夹
    // jsb.fileUtils.removeFile(new_dir + "/test_bin_write.png"); 
    // jsb.fileUtils.removeDirectory(new_dir);
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcanNwZmlsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIndyaXRlYWJsZV9wYXRoIiwianNiIiwiZmlsZVV0aWxzIiwiZ2V0V3JpdGFibGVQYXRoIiwiY29uc29sZSIsImxvZyIsIm5ld19kaXIiLCJpc0RpcmVjdG9yeUV4aXN0IiwiY3JlYXRlRGlyZWN0b3J5Iiwic3RyX2RhdGEiLCJnZXRTdHJpbmdGcm9tRmlsZSIsIndyaXRlU3RyaW5nVG9GaWxlIiwiYmluX2FycmF5IiwiZ2V0RGF0YUZyb21GaWxlIiwid3JpdGVEYXRhVG9GaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZRLEdBSFA7QUFnQkw7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBSUMsY0FBYyxHQUFHQyxHQUFHLENBQUNDLFNBQUosQ0FBY0MsZUFBZCxFQUFyQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsY0FBWixFQU5nQixDQVNoQjs7QUFDQSxRQUFJTSxPQUFPLEdBQUdOLGNBQWMsR0FBRyxTQUEvQixDQVZnQixDQVdoQjtBQUNBOztBQUNBLFFBQUcsQ0FBQ0MsR0FBRyxDQUFDQyxTQUFKLENBQWNLLGdCQUFkLENBQStCRCxPQUEvQixDQUFKLEVBQTZDO0FBQ3pDTCxNQUFBQSxHQUFHLENBQUNDLFNBQUosQ0FBY00sZUFBZCxDQUE4QkYsT0FBOUI7QUFDSCxLQUZELE1BR0s7QUFDREYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDSCxLQWxCZSxDQW9CaEI7QUFDQTs7O0FBQ0EsUUFBSUksUUFBUSxHQUFHUixHQUFHLENBQUNDLFNBQUosQ0FBY1EsaUJBQWQsQ0FBZ0NKLE9BQU8sR0FBRyxvQkFBMUMsQ0FBZjtBQUNBRixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBWjtBQUNBQSxJQUFBQSxRQUFRLEdBQUcsd0JBQVg7QUFDQVIsSUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWNTLGlCQUFkLENBQWdDRixRQUFoQyxFQUEwQ0gsT0FBTyxHQUFHLHFCQUFwRCxFQXpCZ0IsQ0EwQmhCOztBQUNBLFFBQUlNLFNBQVMsR0FBR1gsR0FBRyxDQUFDQyxTQUFKLENBQWNXLGVBQWQsQ0FBOEJQLE9BQU8sR0FBRyxvQkFBeEMsQ0FBaEI7QUFDQUYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlPLFNBQVMsQ0FBQyxDQUFELENBQXJCLEVBQTBCQSxTQUFTLENBQUMsQ0FBRCxDQUFuQyxFQTVCZ0IsQ0E0QnlCOztBQUN6Q1gsSUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWNZLGVBQWQsQ0FBOEJGLFNBQTlCLEVBQXlDTixPQUFPLEdBQUcscUJBQW5ELEVBN0JnQixDQThCaEI7QUFFQTtBQUNBO0FBQ0E7QUFDSCxHQXBESSxDQXNETDtBQUNBO0FBRUE7O0FBekRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBqc2IuZmlsZVV0aWxz6I635Y+W5YWo5bGA55qE5bel5YW357G755qE5a6e5L6LLCBjYy5kaXJlY3RvcjtcclxuICAgICAgICAvLyDlpoLmnpzmmK/lnKjnlLXohJHnmoTmqKHmi5/lmajkuIrvvIzlsLHkvJrmmK/lronoo4Xot6/lvoTkuIvmqKHmi5/lmajnmoTkvY3nva47XHJcbiAgICAgICAgLy8g5aaC5p6c5piv5omL5py65LiK77yM6YKj5LmI5bCx5piv5omL5py6T1PkuLrov5nkuKpBUFDliIbphY3nmoTlj6/ku6Xor7vlhpnnmoTot6/lvoQ7IFxyXG4gICAgICAgIC8vIGpzYiAtLT4gamF2YXNjcmlwdCBiaW5kaW5nIC0tPiBqc2LmmK/kuI3mlK/mjIFoNeeahFxyXG4gICAgICAgIHZhciB3cml0ZWFibGVfcGF0aCA9IGpzYi5maWxlVXRpbHMuZ2V0V3JpdGFibGVQYXRoKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cod3JpdGVhYmxlX3BhdGgpO1xyXG5cclxuXHJcbiAgICAgICAgLy8g6KaB5Zyo5Y+v5YaZ55qE6Lev5b6E5YWI5Yib5bu65LiA5Liq5paH5Lu25aS5XHJcbiAgICAgICAgdmFyIG5ld19kaXIgPSB3cml0ZWFibGVfcGF0aCArIFwibmV3X2RpclwiO1xyXG4gICAgICAgIC8vIOi3r+W+hOS5n+WPr+S7peaYryDlpJbpg6jlrZjlgqjnmoTot6/lvoTvvIzlj6ropoHkvaDmnInlj6/lhpnlpJbpg6jlrZjlgqjnmoTmnYPpmZA7XHJcbiAgICAgICAgLy8gZ2V0V3JpdGFibGVQYXRo6L+Z5Liq6Lev5b6E5LiL77yM5Lya6ZqP552A5oiR5Lus55qE56iL5bqP5Y246L296ICM5Yig6ZmkLOWklumDqOWtmOWCqOmZpOmdnuS9oOiHquW3seWIoOmZpO+8jOWQpuiAheeahOivne+8jOWNuOi9vUFQUOaVsOaNrui/mOWcqDtcclxuICAgICAgICBpZighanNiLmZpbGVVdGlscy5pc0RpcmVjdG9yeUV4aXN0KG5ld19kaXIpKSB7XHJcbiAgICAgICAgICAgIGpzYi5maWxlVXRpbHMuY3JlYXRlRGlyZWN0b3J5KG5ld19kaXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXIgaXMgZXhpc3QhISFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOivu+WGmeaWh+S7tuaIkeS7rOWIhuS4pOenjSzmlofmnKzmlofku7YsIOS6jOi/m+WItuaWh+S7tjtcclxuICAgICAgICAvLyAoMSnmlofmnKzmlofku7bnmoTor7ss6L+U5Zue55qE5piv5LiA5Liqc3RyaW5n5a+56LGhXHJcbiAgICAgICAgdmFyIHN0cl9kYXRhID0ganNiLmZpbGVVdGlscy5nZXRTdHJpbmdGcm9tRmlsZShuZXdfZGlyICsgXCIvdGVzdF9zdHJfcmVhZC50eHRcIik7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cl9kYXRhKTtcclxuICAgICAgICBzdHJfZGF0YSA9IFwiaGVsbG8gdGVzdF93cml0ZSAhISEhIVwiXHJcbiAgICAgICAganNiLmZpbGVVdGlscy53cml0ZVN0cmluZ1RvRmlsZShzdHJfZGF0YSwgbmV3X2RpciArIFwiL3Rlc3Rfc3RyX3dyaXRlLnR4dFwiKTtcclxuICAgICAgICAvLyAoMinkuozov5vliLbmlofku7bnmoTor7vlhpksIFVpbnQ4QXJyYXkgLS0+IGpz5a+56LGhXHJcbiAgICAgICAgdmFyIGJpbl9hcnJheSA9IGpzYi5maWxlVXRpbHMuZ2V0RGF0YUZyb21GaWxlKG5ld19kaXIgKyBcIi90ZXN0X2Jpbl9yZWFkLnBuZ1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhiaW5fYXJyYXlbMF0sIGJpbl9hcnJheVsxXSk7IC8vIOS9v+eUqOi/meS4quWwseiDveiuv+mXruS6jOi/m+WItueahOavj+S4gOS4quWtl+iKguaVsOaNrjtcclxuICAgICAgICBqc2IuZmlsZVV0aWxzLndyaXRlRGF0YVRvRmlsZShiaW5fYXJyYXksIG5ld19kaXIgKyBcIi90ZXN0X2Jpbl93cml0ZS5wbmdcIik7XHJcbiAgICAgICAgLy8gZW5kIFxyXG5cclxuICAgICAgICAvLyDliKDpmaTmlofku7blkozmlofku7blpLlcclxuICAgICAgICAvLyBqc2IuZmlsZVV0aWxzLnJlbW92ZUZpbGUobmV3X2RpciArIFwiL3Rlc3RfYmluX3dyaXRlLnBuZ1wiKTsgXHJcbiAgICAgICAgLy8ganNiLmZpbGVVdGlscy5yZW1vdmVEaXJlY3RvcnkobmV3X2Rpcik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG5cclxuIl19