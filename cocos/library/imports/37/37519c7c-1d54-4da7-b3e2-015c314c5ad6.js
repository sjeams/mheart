"use strict";
cc._RF.push(module, '37519x8HVRNp7PiAVwxTFrW', 'http');
// Script/commonApi/http.js

"use strict";

/**
 * Http 请求封装
 */
// var https_url = 'https://www.aheart.cn';
// require("./runtime"); 
var https_url = 'http://cs.aheart.com';
var HttpHelper = cc.Class({
  "extends": cc.Component,
  // statics: {
  // },
  // properties: {
  // },
  onLoad: function onLoad() {
    // 开启调试
    // cc.dynamicAtlasManager.showDebug(true);
    // 关闭调试
    // cc.dynamicAtlasManager.showDebug(false);
    // 从服务器加载mp3来进行播放
    //动态合图
    this.image_cache(); // cc.audioEngine.play(http_globalAsset.loading_asset, false, 1);  
    //配置路径
  },

  /**
   * get请求
   * @param {string} url
   * @param {function} callback 
   */
  httpUrl: function httpUrl(new_url) {
    return new_url ? https_url + '/app/api/file-content?url=' + https_url + new_url : ''; //https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app/loading/loading.jpg
  },
  httpUrlJson: function httpUrlJson(new_url) {
    return https_url + '/app/api/file-json?url=' + https_url + new_url; //https://www.aheart.cn/app/api/file-content?url=https://www.aheart.cn/app/loading/loading.jpg
  },
  httpGets: function httpGets(url, callback) {
    var url = https_url + url;
    var xhr = cc.loader.getXMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        var respone = xhr.responseText;
        callback(respone);
      }
    };

    xhr.open("GET", url, true); // if (cc.sys.isNative) {
    //     xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
    // }
    // note: In Internet Explorer, the timeout property may be set only after calling the open()
    // method and before calling the send() method.

    xhr.timeout = 5000; // 5 seconds for timeout

    xhr.send();
  },
  httpPostLogin: function httpPostLogin(url, params, callback) {
    var token = cc.sys.localStorage.getItem('token');
    params['token'] = token;
    var url = https_url + url;
    var xhr = cc.loader.getXMLHttpRequest();

    xhr.onreadystatechange = function () {
      // cc.log('xhr.readyState='+xhr.readyState+'  xhr.status='+xhr.status);
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        var respone = xhr.responseText;
        callback(JSON.parse(respone)); // json 转数组
      } else {//   callback(-1);
        }
    };

    xhr.open("POST", url, true); // if (cc.sys.isNative) {
    //     xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
    // }
    // xhr.setRequestHeader("Http-Edition", "1.0.0.0");  // 版本
    // xhr.setRequestHeader("Ip", "192.168.1.1");
    // xhr.setRequestHeader("Http-Token", "gzipdeflate");

    xhr.timeout = 5000; // 5 seconds for timeout
    // xhr.setRequestHeader('Content-Type', 'application/json,multipart/form-data');

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8"); // xhr.send(JSON.stringify(params));

    xhr.send('data=' + JSON.stringify(params)); //  xhr.send(params);
  },
  //带token访问
  httpPost: function httpPost(url, params, callback) {
    var _this = this;

    var token = cc.sys.localStorage.getItem('token');
    params['token'] = token;
    var url = https_url + url;
    var xhr = cc.loader.getXMLHttpRequest();

    xhr.onreadystatechange = function () {
      // cc.log('xhr.readyState='+xhr.readyState+'  xhr.status='+xhr.status);
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        var respone = xhr.responseText;
        var new_respone = JSON.parse(respone);

        if (new_respone.code == 0) {
          //未登录
          // console.log(JSON.parse(respone))
          cc.director.loadScene(_this.urlConfig("sence_login"));
        } else {
          callback(JSON.parse(respone)); // json 转数组
        }
      } else {//   callback(-1);
        }
    };

    xhr.open("POST", url, true); // if (cc.sys.isNative) {
    //     xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
    // }
    // xhr.setRequestHeader("Http-Edition", "1.0.0.0");  // 版本
    // xhr.setRequestHeader("Ip", "192.168.1.1");
    // xhr.setRequestHeader("Http-Token", "gzipdeflate");

    xhr.timeout = 5000; // 5 seconds for timeout
    // xhr.setRequestHeader('Content-Type', 'application/json,multipart/form-data');
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8"); // xhr.send(JSON.stringify(params));

    xhr.send('data=' + JSON.stringify(params)); //  xhr.send(params);
  },
  //场景加载--进度条
  playGame: function playGame(sence, task, no_progress) {
    //场景转译
    // var sence =this.urlConfig(sence);
    http_globalAsset.http_base_redict_sence = '';

    if (sence != '') {
      http_globalAsset.http_base_redict_sence = this.urlConfig(sence);
    }

    var _task = task || 0;

    var _no_progress = no_progress || 0;

    var _this = this; //是否加载场景--loading


    if (_no_progress) {
      //开始实例化预制资源
      http_globalData.model_onload_loading_new = cc.instantiate(http_globalAsset.model_onload_loading); //将预制资源添加到父节点
      // CanvasNode.addChild(TipBoxPrefab);

      cc.find('Canvas').addChild(http_globalData.model_onload_loading_new); //请求战斗记录

      if (_task == 1) {
        _this.fightint();
      } else {
        _this.progress();
      }
    } else {
      //加载场景--不加载进度条
      cc.director.loadScene(http_globalAsset.http_base_redict_sence, function () {// spawnTools();
      });
    }
  },
  //加载资源
  _progressRuning: function _progressRuning(completeCount, totalCount, assets, describe) {
    //加载进度回调
    var progressBar = cc.find('/progressBar', http_globalData.model_onload_loading_new).getComponent(cc.ProgressBar); //加载进度回调 

    progressBar.progress = completeCount / totalCount; // console.log(progressBar.progress)

    progressBar.completeCount = completeCount;
    progressBar.totalCount = totalCount;
    var sys_label = cc.find('/progressBar/sys_label', http_globalData.model_onload_loading_new).getComponent(cc.Label);
    var sys_des = cc.find('/progressBar/sys_des', http_globalData.model_onload_loading_new).getComponent(cc.Label); //加载生物

    if (http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].type == '图标生物') {
      var asset = assets.content; // 检查资源是否为图片类型

      if (asset instanceof cc.SpriteFrame) {
        var newname = asset.name;
        http_globalAsset.http_base_asset_biology[newname] = asset;
        sys_des.string = describe + '/图标生物/' + newname;
      }
    } //加载生物


    if (http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].type == '图标装备') {
      var asset = assets.content; // 检查资源是否为图片类型

      if (asset instanceof cc.SpriteFrame) {
        var newname = asset.name;
        http_globalAsset.http_base_asset_zhuangbei[newname] = asset;
        sys_des.string = describe + '/图标装备/' + newname;
      }
    } //加载生物


    if (http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].type == '图标技能') {
      var asset = assets.content; // 检查资源是否为图片类型

      if (asset instanceof cc.SpriteFrame) {
        var newname = asset.name;
        http_globalAsset.http_base_asset_skill[newname] = asset;
        sys_des.string = describe + '/图标技能/' + newname;
      }
    } //加载生物


    if (http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].type == '图标技能效果') {
      var asset = assets.content; // 检查资源是否为图片类型

      if (asset instanceof cc.SpriteFrame) {
        var newname = asset.name;
        http_globalAsset.http_base_asset_xiaoguo[newname] = asset;
        sys_des.string = describe + '/图标技能效果/' + newname;
      }
    } //加载生物


    if (http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].type == '图标世界') {
      var asset = assets.content; // 检查资源是否为图片类型

      if (asset instanceof cc.SpriteFrame) {
        var newname = asset.name;
        http_globalAsset.http_base_asset_word[newname] = asset;
        sys_des.string = describe + '/图标世界/' + newname;
      }
    }

    sys_label.string = parseInt(progressBar.progress * 100) + '%'; // if( this.resource.type=='json'){
    //     // console.log(this.resource);  // json
    //     // 从服务器加载mp3来进行播放
    //     // this.audio.clip = ret;
    //     // this.audio.play();
    // }
    // if( this.resource.type=='png'||this.resource.type=='jpg'){
    //      console.log(res);  // json
    //     //res是cc.Texture2D这样对象 
    //     //   this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(res)
    //     // this.headpic.spriteFrame.setTexture(res);
    //     // this.node.spriteFrame.setTexture(res);
    //     // this.sprite.spriteFrame.setContentSize(res.getContentSize());
    //     // this.node.getComponent(cc.Sprite).spriteFrame = res;
    // }
    // if( this.resource.type=='mp3'){
    //     console.log(res);  // mp3
    //     // this.audio.clip = res;
    //     // this.audio.play();
    //     // 从服务器加载mp3来进行播放
    //     this.current = cc.audioEngine.play(res.url, false, 1);
    // }
  },
  _progressCallback: function _progressCallback(completeCount, totalCount, item) {
    // cc.log(completeCount+'---/---'+totalCount)
    // cc.log(http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].describe)
    // http_globalAsset.http_base_asset_num<http_globalAsset.loading_asset.length
    var describe = '[' + parseInt(http_globalAsset.http_base_asset_num + 1) + '/' + http_globalAsset.loading_asset.length + ']' + http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].describe;

    this._progressRuning(completeCount, totalCount, item, describe);
  },
  _completeCallback: function _completeCallback(err, texture) {
    //加载完成回调
    if (http_globalAsset.http_base_asset_num < http_globalAsset.loading_asset.length - 1) {
      if (http_globalAsset.http_base_asset_num > http_globalAsset.loading_asset.length) {
        return;
      }

      http_globalAsset.http_base_asset_num = http_globalAsset.http_base_asset_num + 1;
      this.loading_asset(); //下一个资源
    } else {
      this.loadnextScene(); //下一场景 
    }
  },
  //加载资源
  loading_asset: function loading_asset() {
    //默认从1开始
    var url = cc.loader.loadResDir(http_globalAsset.loading_asset[http_globalAsset.http_base_asset_num].url, this._progressCallback.bind(this), this._completeCallback.bind(this));
    cc.loader.release(url);
  },
  progress: function progress() {
    //判断是否加载完成
    cc.log(http_globalAsset.http_base_asset_num);

    if (http_globalAsset.http_base_asset_num < http_globalAsset.loading_asset.length - 1) {
      this.loading_asset();
    } else {
      this.loadnextScene();
    }
  },
  loadnextScene: function loadnextScene() {
    var _this = this; //加载场景-- 场景为空， 关闭进度条


    if (http_globalAsset.http_base_redict_sence == '') {
      cc.find('Canvas/进度条').parent.removeChild(cc.find('Canvas/进度条'));
    } else {
      //预加载场景并获得加载进度
      cc.director.preloadScene(http_globalAsset.http_base_redict_sence, function (completeCount, totalCount, item) {
        _this._progressRuning(completeCount, totalCount, item, '加载场景..');
      }, function () {
        cc.director.loadScene(http_globalAsset.http_base_redict_sence, function () {// spawnTools();  
        });
      });
    }
  },
  //请求战斗--写入文本记录
  fightint: function fightint() {
    var _this = this;

    var map_int = cc.sys.localStorage.getItem('figthing_map_int'); //读取数据--临时地图id

    var userid = cc.sys.localStorage.getItem('figthing_userid'); //读取数据--玩家对战id

    if (map_int == '' && userid == '') {
      cc.director.loadScene(_this.urlConfig("sence_dating"));
    } else {
      _this.httpPost('/app/app-apinew/fight', {
        'map_int': map_int,
        'userid': userid
      }, function (data) {
        //战斗历史路径
        if (data.code == 1) {
          cc.sys.localStorage.setItem('figthing_remote_url', data.data.sid);

          _this.progress();
        } else {
          callback(JSON.parse(data)); // json 转数组
          // callback(-1);
        }
      });
    }
  },
  image_cache: function image_cache() {
    //动态合图
    cc.macro.CLEANUP_IMAGE_CACHE = false;
    cc.dynamicAtlasManager.enabled = true;
    cc.dynamicAtlasManager.maxFrameSize = 2048;
  },
  urlConfig: function urlConfig(url) {
    http_globalData = []; //销毁内存
    // //配置场景路径

    var sence = {
      //登录
      sence_login: "login/登录",
      sence_jiaose: "login/角色",
      sence_register: "login/register",
      //商城
      sence_jiangli: "story/jiangli",
      sence_chongzhi: "story/chongzhi",
      sence_zhifu: "story/zhifu",
      //大厅
      sence_dating: "home/大厅",
      sence_zhutian: "home/诸天万界",
      sence_chuangzao: "home/创造生物",
      sence_shenmo: "home/神魔炼狱",
      sence_mijing: "home/秘境探索",
      sence_wangu: "home/万古仙门",
      sence_tiandi: "home/天地熔炉",
      sence_zhenyaota: "home/镇妖塔",
      //场景
      sence_ditu: "map/诸天地图",
      sence_zhandou: "战斗场景"
    };
    return sence[url];
  },
  //数字转换string，万    //point需要保留小数位
  number_string_wan: function number_string_wan(num, point) {
    var shengMing_string = num.toString();

    if (shengMing_string.length >= 5) {
      //小于1w
      var decimal = shengMing_string.substring(shengMing_string.length - 4, shengMing_string.length - 4 + point);
      var shengMing_string = parseFloat(parseInt(num / 10000) + '.' + decimal) + '万';
    }

    return shengMing_string;
  },
  //随机数
  number_rand: function number_rand(num) {
    // httpRequest.number_rand(1)
    // Math.floor(Math.random() * http_globalData.chuanzao_xibao.length); 
    return Math.round(Math.random() * (num - 1)); //传入3,随机0-2
  },
  //随机距离 --位置，偏移量
  number_map_rand: function number_map_rand(map_position, value) {
    // httpRequest.number_rand(1)
    // Math.floor(Math.random() * http_globalData.chuanzao_xibao.length); 
    var is_add = httpRequest.number_rand(1);

    if (is_add) {
      var postion = map_position - httpRequest.number_rand(value);
    } else {
      var postion = map_position + httpRequest.number_rand(value);
    }

    return postion;
  }
});
window.httpRequest = new HttpHelper();

cc._RF.pop();