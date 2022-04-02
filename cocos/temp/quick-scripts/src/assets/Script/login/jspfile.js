"use strict";
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