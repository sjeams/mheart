window.__require=function t(e,o,n){function c(s,r){if(!o[s]){if(!e[s]){var a=s.split("/");if(a=a[a.length-1],!e[a]){var p="function"==typeof __require&&__require;if(!r&&p)return p(a,!0);if(i)return i(a,!0);throw new Error("Cannot find module '"+s+"'")}s=a}var l=o[s]={exports:{}};e[s][0].call(l.exports,function(t){return c(e[s][1][t]||t)},l,l.exports,t,e,o,n)}return o[s].exports}for(var i="function"==typeof __require&&__require,s=0;s<n.length;s++)c(n[s]);return c}({Alert:[function(t,e,o){"use strict";cc._RF.push(e,"2045b71nHFDw7X/Kgx+6xMy","Alert"),cc.Class({extends:cc.Component,properties:{gridLayout:cc.Node,toolPrefab:cc.Prefab},onLoad:function(){this.spawnTools()},start:function(){},spawnTools:function(){var e=this;(new(t("http"))).httpPost("https://www.mheart.xyz/app/api-server/user-register",{page:1,pageSize:11},function(t){var o=.45*e.gridLayout.width,n=.15*e.gridLayout.height,c=.08*e.gridLayout.width,i=.05*e.gridLayout.height;e.gridLayout.getComponent(cc.Layout).cellSize.width=o,e.gridLayout.getComponent(cc.Layout).cellSize.height=n,e.gridLayout.getComponent(cc.Layout).spacingX=c,e.gridLayout.getComponent(cc.Layout).spacingY=i,e.toolsArray=[];for(var s=t.data.server,r=0;r<t.data.server.length;r++){var a=cc.instantiate(e.toolPrefab);a.getComponent("Tools").initInfo(s[r]),e.toolsArray.push(a),e.gridLayout.addChild(a)}var p=e.gridLayout.parent,l=(n+i)*Math.ceil(t.data.server.length/2);p.setContentSize(600,l)})},show_dlg:function(){this.node.active=!0},hidden_dlg:function(){this.node.active=!1}}),cc._RF.pop()},{http:"http"}],Conf:[function(t,e,o){"use strict";cc._RF.push(e,"97691f40R5PXJGQYZGIsa5O","Conf"),Object.defineProperty(o,"__esModule",{value:!0}),o.TOOLS=void 0;o.TOOLS=[{name:"\u5377\u8f74",intro:"\u8fd9\u662f\u4e00\u4e2a\u5377\u8f74",picUrl:"tools/\u5377\u8f74"},{name:"\u5fc3\u7ecf",intro:"\u6b32\u7ec3\u6b64\u529f\uff0c\u5fc5\u5148\u81ea\u5bab",picUrl:"tools/\u5fc3\u7ecf"},{name:"\u706b\u817f",intro:"\u6765\u81ea\u91d1\u534e",picUrl:"tools/\u706b\u817f"},{name:"\u714e\u997a",intro:"\u633a\u597d\u5403\u7684",picUrl:"tools/\u714e\u997a"},{name:"\u70c8\u9152",intro:"\u6b66\u677e\u5f53\u5e74\u559d\u8fd9\u4e2a\u7684\u8bdd\uff0c\u53ef\u80fd\u8fc7\u4e0d\u4e86\u5c97",picUrl:"tools/\u70c8\u9152"},{name:"\u91d1\u94a5\u5319",intro:"\u91d1\u8272\u7684\u8981\u94a5\u5319",picUrl:"tools/\u91d1\u94a5\u5319"},{name:"\u94f6\u94a5\u5319",intro:"\u94f6\u8272\u7684\u94a5\u5319",picUrl:"tools/\u94f6\u94a5\u5319"},{name:"\u9ec4\u77f3",intro:"\u6765\u81ea\u9ec4\u77f3\u516c\u56ed\u7684\u77f3\u5934\u53eb\u505a\u9ec4\u77f3",picUrl:"tools/\u9ec4\u77f3"}],cc._RF.pop()},{}],Game:[function(t,e,o){"use strict";cc._RF.push(e,"ca358Mpn0dPrJ82VRBGkbhR","Game");var n=t("./Conf");cc.Class({extends:cc.Component,properties:{gridLayout:cc.Node,toolPrefab:cc.Prefab},spawnTools:function(){var t=.105*this.gridLayout.width,e=.215*this.gridLayout.height,o=.022*this.gridLayout.width,c=.045*this.gridLayout.height;this.gridLayout.getComponent(cc.Layout).cellSize.width=t,this.gridLayout.getComponent(cc.Layout).cellSize.height=e,this.gridLayout.getComponent(cc.Layout).spacingX=o,this.gridLayout.getComponent(cc.Layout).spacingY=c,this.toolsArray=[];for(var i=0;i<n.TOOLS.length;i++){var s=cc.instantiate(this.toolPrefab);s.getComponent("Tool").initInfo(n.TOOLS[i]),this.toolsArray.push(s),this.gridLayout.addChild(s)}},bagBtn:function(){this.gridLayout.parent.active?(this.gridLayout.parent.active=!1,this.toolsArray.forEach(function(t){t.removeFromParent()})):(this.gridLayout.parent.active=!0,this.spawnTools())}}),cc._RF.pop()},{"./Conf":"Conf"}],ProgressBarScript:[function(t,e,o){"use strict";cc._RF.push(e,"f03637Rq8NIL4xawPe0R84Z","ProgressBarScript"),cc.Class({extends:cc.Component,properties:{speed:1,progressBarView:{type:cc.ProgressBar,default:null}},onLoad:function(){this._ping=!0,this.progressBarView.progress=0},update:function(t){this._updateProgressBar(this.progressBarView,t)},_updateProgressBar:function(t,e){var o=t.progress;o<1&&this._ping?o+=e*this.speed:(o-=e*this.speed,this._ping=o<=0),t.progress=o}}),cc._RF.pop()},{}],SpriteTextTool:[function(t,e,o){"use strict";cc._RF.push(e,"522f7RUlNhOh5+SscH5tMhK","SpriteTextTool"),cc.Class({extends:cc.Component,properties:{content:"1000",text_sprite:{default:null,type:cc.SpriteFrame}},start:function(){this.setContent("8934873")},setContent:function(t){this.content=t,this.onSetContentChange()},onSetContentChange:function(){this.createSpriteText()},createSpriteText:function(){this.clearItem();for(var t=this.node.children,e=t.length,o=0;o<this.content.length;o++){var n=null,c=null;o<e?((n=t[o]).active=!0,c=n.getComponent(cc.Sprite)):c=(n=new cc.Node("item")).addComponent(cc.Sprite),this.setSprite(this.content[o],c),n.parent=this.node}},getSprite:function(t){var e=this.text_sprite.clone(),o=e.getRect().width/10,n=e.getRect().height,c=e.getRect().x+t*o,i=e.getRect().y,s=new cc.Rect(c,i,o,n);return e.setRect(s),e},setSprite:function(t,e){switch(t){case"0":e.spriteFrame=this.getSprite(0);break;case"1":e.spriteFrame=this.getSprite(1);break;case"2":e.spriteFrame=this.getSprite(2);break;case"3":e.spriteFrame=this.getSprite(3);break;case"4":e.spriteFrame=this.getSprite(4);break;case"5":e.spriteFrame=this.getSprite(5);break;case"6":e.spriteFrame=this.getSprite(6);break;case"7":e.spriteFrame=this.getSprite(7);break;case"8":e.spriteFrame=this.getSprite(8);break;case"9":e.spriteFrame=this.getSprite(9);break;default:console.log("value not find :"+t)}},clearItem:function(){for(var t=this.node.children,e=0;e<t.length;e++)t[e].active=!1}}),cc._RF.pop()},{}],Tools:[function(t,e,o){"use strict";cc._RF.push(e,"9c99erZc29ESIVQKwP6Lsma","Tools"),cc.Class({extends:cc.Component,properties:{server_type:cc.Node,server_name:cc.Node,sprite_server_login:cc.Button},initInfo:function(t){var e=this;t.picUrl&&cc.loader.loadRes(t.picUrl,cc.SpriteFrame,function(t,o){e.node.getComponent(cc.Sprite).spriteFrame=o}),this.server_type.getComponent(cc.Label).string=t.type,this.node.getChildByName("server_type").color=new cc.color(t.color),this.server_name.getComponent(cc.Label).string=t.id+"\u533a  -  "+t.name,this.bindClickEvent(this.sprite_server_login.getComponent(cc.Button),t)},bindClickEvent:function(t,e){var o=new cc.Component.EventHandler;o.target=this.node,o.component="Tools",o.handler="onConfirBtn",o.customEventData=e,t.clickEvents.push(o)},onConfirBtn:function(e,o){console.log(o),(new(t("http"))).httpPost("https://www.mheart.xyz/app/api-server/user-server",{id:o.id,token:null},function(t){console.log(t),cc.find("Canvas/server/server_choes/server_choes_label").getComponent(cc.Label).string=o.name;var e=cc.find("Canvas/server/server_choes/server_choes_type");e.getComponent(cc.Label).string=o.type,e.color=new cc.color(o.color)}),cc.find("Canvas/mask").active=!1}}),cc._RF.pop()},{http:"http"}],Tool:[function(t,e,o){"use strict";cc._RF.push(e,"49a64EsluZBxJenF/5eS2wy","Tool"),cc.Class({extends:cc.Component,properties:{},initInfo:function(t){var e=this;cc.loader.loadRes(t.picUrl,cc.SpriteFrame,function(t,o){e.node.getComponent(cc.Sprite).spriteFrame=o}),this.node.intro=t.intro}}),cc._RF.pop()},{}],alert:[function(t,e,o){"use strict";cc._RF.push(e,"264a58ZMhVJpLKSN93M4Wxc","alert");var n={_alert:null,_animSpeed:.3},c=function(){n._alert.setScale(2),n._alert.opacity=0;var t=cc.callFunc(i,this),e=cc.sequence(cc.spawn(cc.fadeTo(n._animSpeed,255),cc.scaleTo(n._animSpeed,1)),t);n._alert.runAction(e)},i=function(){},s=function(){if(n._alert){var t=cc.callFunc(r,this),e=cc.sequence(cc.spawn(cc.fadeTo(n._animSpeed,0),cc.scaleTo(n._animSpeed,2)),t);n._alert.runAction(e)}},r=function(){a()},a=function(){null!=n._alert&&(n._alert.removeFromParent(),n._alert=null)};e.exports={show:function(t,e,o,i){cc.loader.loadRes("alert/tipAlert",cc.Prefab,function(r,a){r?cc.error(r):(n._alert=cc.instantiate(a),cc.director.getScene().addChild(n._alert,3),cc.find("tipAlert/content/top/tip").getComponent(cc.Label).string=t,cc.find("tipAlert/content/bottom/left_btn/leftbtn").getComponent(cc.Label).string=e,cc.find("tipAlert/content/bottom/right_btn/rightbtn").getComponent(cc.Label).string=o,i&&(cc.find("tipAlert/content/bottom/left_btn").on("click",function(t){s(),i(e)},this),cc.find("tipAlert/content/bottom/right_btn").on("click",function(t){s(),i(o)},this)),n._alert.parent=cc.find("Canvas"),c())})}},cc._RF.pop()},{}],background:[function(t,e,o){"use strict";cc._RF.push(e,"e483aavH0JDcYCPFVIozWXt","background"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){},loadingBackground:function(){var t=this;cc.loader.load({url:"http://127.0.0.1/ceshi.php?url=https://www.mheart.xyz/app/loading/loading.jpg",type:"jpg"},function(e,o){t.node.getComponent(cc.Sprite).spriteFrame=new cc.SpriteFrame(o)})}}),cc._RF.pop()},{}],button_check:[function(t,e,o){"use strict";cc._RF.push(e,"59db4kGzMNC6oyQTKOxxvj5","button_check"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){},show_dlg:function(){this.node.active=!0},hidden_dlg:function(){this.node.active=!1}}),cc._RF.pop()},{}],button_xieyi:[function(t,e,o){"use strict";cc._RF.push(e,"3c4c53ciJpKSqPn6g8QBdAn","button_xieyi"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){},show_dlg:function(){this.node.active=!0},hidden_dlg:function(){this.node.active=!1}}),cc._RF.pop()},{}],http:[function(t,e,o){"use strict";cc._RF.push(e,"8228eqRxUNJ4IVqrOVz3ZWN","http");var n=cc.Class({extends:cc.Component,statics:{},properties:{},onLoad:function(){this.current=cc.audioEngine.play(res.url,!1,1)},httpGets:function(t,e){var o=cc.loader.getXMLHttpRequest();o.onreadystatechange=function(){if(4===o.readyState&&o.status>=200&&o.status<300){var t=o.responseText;e(t)}},o.open("GET",t,!0),cc.sys.isNative&&o.setRequestHeader("Accept-Encoding","gzip,deflate"),o.timeout=5e3,o.send()},httpPost:function(t,e,o){var n=cc.loader.getXMLHttpRequest();n.onreadystatechange=function(){if(4===n.readyState&&n.status>=200&&n.status<300){var t=n.responseText;o(JSON.parse(t))}},n.open("POST",t,!0),cc.sys.isNative&&n.setRequestHeader("Accept-Encoding","gzip,deflate"),n.timeout=5e3,n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.send("data="+JSON.stringify(e))}});window.HttpHelper=new n,cc._RF.pop()},{}],jspfile:[function(t,e,o){"use strict";cc._RF.push(e,"418e4mQmD5NULo0MWDBNMnw","jspfile"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){var t=jsb.fileUtils.getWritablePath();console.log(t);var e=t+"new_dir";jsb.fileUtils.isDirectoryExist(e)?console.log("dir is exist!!!"):jsb.fileUtils.createDirectory(e);var o=jsb.fileUtils.getStringFromFile(e+"/test_str_read.txt");console.log(o),o="hello test_write !!!!!",jsb.fileUtils.writeStringToFile(o,e+"/test_str_write.txt");var n=jsb.fileUtils.getDataFromFile(e+"/test_bin_read.png");console.log(n[0],n[1]),jsb.fileUtils.writeDataToFile(n,e+"/test_bin_write.png")}}),cc._RF.pop()},{}],loading_fist:[function(t,e,o){"use strict";cc._RF.push(e,"c9df1hntNVFBZSGCCOYdkEb","loading_fist"),cc.Class({extends:cc.Component,properties:{},start:function(){},loadnextScene:function(){cc.director.preloadScene("login",function(){cc.log("\u767b\u5f55\u9884\u52a0\u8f7d")}),cc.director.loadScene("login")},login:function(){cc.director.loadScene("login")},role:function(){cc.director.loadScene("role")},register:function(){cc.director.loadScene("register")},home:function(){cc.director.loadScene("home")},jiangli:function(){cc.director.loadScene("jiangli")},chongzhi:function(){cc.director.loadScene("chongzhi")},zhifu:function(){cc.director.loadScene("zhifu")}}),cc._RF.pop()},{}],loading:[function(t,e,o){"use strict";cc._RF.push(e,"77e07WCeNBJrJqHjwTfqjkf","loading");cc.Class({extends:cc.Component,properties:{speed:1,progressBar:{default:null,type:cc.ProgressBar,text:cc.Sprite},audio:{default:null,type:cc.AudioClip},play:function(){this.audioSource.play()},pause:function(){this.audioSource.pause()},bmp_font:{default:null,type:cc.Label}},onLoad:function(){console.log(this.node),console.log("\u6b63\u5728\u5bf9\u6bd4\u8d44\u6e90"),console.log("\u6b63\u5728\u52a0\u8f7d\u573a\u666f\u8d44\u6e90\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85..."),this._urls=[],console.log(this.progressBar),this.resource=null,this.progressBar.progress=0,this.bmp_font.string="0%",this._clearAll(),cc.loader.load(this._urls,this._progressCallback.bind(this),this._completeCallback.bind(this))},start:function(){},_clearAll:function(){for(var t=0;t<this._urls.length;++t){var e=this._urls[t];cc.loader.release(e)}},_progressCallback:function(t,e,o){this.progress=t/e,this.resource=o,this.completeCount=t,this.totalCount=e,this.node.getChildByName("sys_label").getComponent(cc.Label).string=parseInt(100*this.progress)+"%",this.resource.type,"png"!=this.resource.type&&"jpg"!=this.resource.type||console.log(o),"mp3"==this.resource.type&&(console.log(o),this.current=cc.audioEngine.play(o.url,!1,1))},_completeCallback:function(t,e){this.loadnextScene()},update:function(t){if(this.resource){var e=this.progressBar.progress;if(e>=1)return console.log("\u52a0\u8f7d\u5b8c\u6210"),this.progressBar.node.active=!1,this.bmp_font.node.active=!1,void(this.enabled=!1);e<this.progress&&(e+=t),this.progressBar.progress=e}},loadnextScene:function(){cc.director.preloadScene("index",function(){cc.log("\u767b\u5f55\u9884\u52a0\u8f7d")});var t=cc.sys.localStorage.getItem("params");t?(cc.log("\u5feb\u901f\u767b\u5f55"),cc.log(t),cc.director.loadScene("index")):(cc.log("\u8d26\u53f7\u6ce8\u518c/\u767b\u5f55"),cc.director.loadScene("index"))}}),cc._RF.pop()},{}],myserver:[function(t,e,o){"use strict";cc._RF.push(e,"bfe2c9uBzZLZbQL4m1ej4tE","myserver");var n=new(t("http"));cc.Class({extends:cc.Component,properties:{user_status:cc.Node,user_phone:cc.Label},onLoad:function(){this.tokenlogin()},tokenlogin:function(){var t=cc.sys.localStorage.getItem("token");t&&n.httpPost("https://www.mheart.xyz/app/api-server/token-login",{token:t},function(t){if(1==t.code){cc.find("Canvas/server/user_status").active=!0;var e=cc.find("Canvas/server/user_status/user_phone"),o=t.data.userinfo.loginname,n=o.slice(0,3)+"****"+o.slice(7,10);e.getComponent(cc.Label).string=n}})},btnClick1:function(t,e){var o=cc.sys.localStorage.getItem("token");n.httpPost("https://www.mheart.xyz/app/api-server/user-login",{token:o},function(t){if(0==t.code);else if(cc.sys.localStorage.setItem("server",JSON.stringify(t.data.server)),1==t.code&&(cc.sys.localStorage.setItem("userinfo",JSON.stringify(t.data.userinfo)),cc.director.loadScene("/home/dating")),2==t.code){JSON.parse(cc.sys.localStorage.getItem("server"));cc.director.loadScene("register")}})},callback:function(t){cc.director.loadScene("map")},start:function(){},show_dlg:function(){this.node.active=!0},hidden_dlg:function(){this.node.active=!1}}),cc._RF.pop()},{http:"http"}],popup_dlg:[function(t,e,o){"use strict";cc._RF.push(e,"f10d1IxjONKCYev3tfm660U","popup_dlg"),cc.Class({extends:cc.Component,properties:{mask:{type:cc.Node,default:null},mask_opacity:128,content:{type:cc.Node,default:null}},onLoad:function(){},show_dlg:function(){this.node.active=!0,this.mask.opacity=0;var t=cc.fadeTo(.3,this.mask_opacity);this.mask.runAction(t),this.content.scale=0;var e=cc.scaleTo(.4,1).easing(cc.easeBackOut());this.content.runAction(e)},hide_dlg:function(){var t=cc.fadeOut(.3);this.mask.runAction(t);var e=cc.scaleTo(.3,0).easing(cc.easeBackIn()),o=cc.callFunc(function(){this.node.active=!1}.bind(this)),n=cc.sequence([e,o]);this.content.runAction(n)}}),cc._RF.pop()},{}],post:[function(t,e,o){"use strict";cc._RF.push(e,"9f677Nj9JlG454nbHimbjZS","post");var n=cc.Class({extends:cc.Component,get:function(t,e){var o=cc.loader.getXMLHttpRequest();console.log("Status: Send Get Request to "+t),o.open("GET",t,!0),o.onreadystatechange=function(){4===o.readyState&&o.status>=200&&o.status<=207&&e(!0,o.responseText)},o.send()},post:function(t,e,o){2==arguments.length&&(o=arguments[1],e="");var n=cc.loader.getXMLHttpRequest();n.open("POST",t),n.setRequestHeader("Content-Type","application/json;charset=UTF-8"),n.onreadystatechange=function(){4===n.readyState&&n.status>=200&&n.status<=207&&o(!0,n.responseText)},n.send(e)}});window.HttpHelper=new n,cc._RF.pop()},{}],register_in:[function(t,e,o){"use strict";cc._RF.push(e,"e24f2TQo8ZGDYgWVYt3qr6q","register_in");var n=new(t("http"));cc.Class({extends:cc.Component,properties:{alert_register_in:cc.Label,name_register_in_login:cc.EditBox,password_register_in_login:cc.EditBox,repassword_register_in_login:cc.EditBox,toggle_register_in:cc.Toggle},onLoad:function(){},register:function(){var t=this.name_register_in_login.getComponent(cc.EditBox).string,e=this.password_register_in_login.getComponent(cc.EditBox).string,o=this.repassword_register_in_login.getComponent(cc.EditBox).string,c=this.toggle_register_in.getComponent(cc.Toggle).isChecked,i=this;if(0==t)return i.alert_register_in.string="\u8bf7\u8f93\u5165\u624b\u673a\u53f7\u7801!",!1;if(e.length<6)return i.alert_register_in.string="\u5bc6\u7801\u4e0d\u80fd\u5c11\u4e8e6\u4f4d\u6570!",!1;if(e!=o)return i.alert_register_in.string="\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4!",!1;if(0==c)return i.alert_register_in.string="\u8bf7\u9605\u8bfb\u5e76\u540c\u610f\u76f8\u5173\u534f\u8bae!",!1;var s={loginname:t,password:e};n.httpPost("https://www.mheart.xyz/app/api-server/register-in",s,function(o){cc.log(o),1==o.code?(i.alert_register_in.string="",cc.sys.localStorage.setItem("loginname",t),cc.sys.localStorage.setItem("password",e),i.node.active=!1):i.alert_register_in.string="\u624b\u673a\u53f7\u5df2\u5b58\u5728\uff0c\u8bf7\u91cd\u8bd5!"})},callback:function(t){},start:function(){},show_dlg:function(){this.node.active=!0},hidden_dlg:function(){this.node.active=!1}}),cc._RF.pop()},{http:"http"}],register_knows:[function(t,e,o){"use strict";cc._RF.push(e,"99bc1iOpDlNZIWwGo6PgUtK","register_knows");var n=new(t("http"));cc.Class({extends:cc.Component,properties:{register_knows_webview:cc.WebView},onLoad:function(){},tokenlogin:function(){var t=cc.sys.localStorage.getItem("token");t&&n.httpPost("https://www.mheart.xyz/app/api-server/token-login",{token:t},function(t){t.code})},start:function(){},show_dlg:function(){this.node.active=!0},hidden_dlg:function(){this.node.active=!1},xieyi_show_dlg:function(){this.register_knows_webview.url="https://www.mheart.xyz/app/api-user/xieyi",this.node.active=!0},xieyi_hidden_dlg:function(){this.node.active=!1},yinsi_show_dlg:function(){this.register_knows_webview.url="https://www.mheart.xyz/app/api-user/yinsi",this.node.active=!0},yinsi_hidden_dlg:function(){this.node.active=!1}}),cc._RF.pop()},{http:"http"}],register:[function(t,e,o){"use strict";cc._RF.push(e,"5b7b7P5FYFFiYYsd/RnEfBv","register");var n=new(t("http"));cc.Class({extends:cc.Component,properties:{register_alert:cc.Label,register_login_name:cc.EditBox,register_login_password:cc.EditBox},onLoad:function(){var t=cc.sys.localStorage.getItem("loginname"),e=cc.sys.localStorage.getItem("password");t&&(this.register_login_name.getComponent(cc.EditBox).string=t),t&&(this.register_login_password.getComponent(cc.EditBox).string=e),this.tokenlogin()},tokenlogin:function(){var t=cc.sys.localStorage.getItem("token");t&&n.httpPost("https://www.mheart.xyz/app/api-server/token-login",{token:t},function(t){t.code})},login:function(){var t=this.register_login_name.getComponent(cc.EditBox).string,e=this.register_login_password.getComponent(cc.EditBox).string,o={loginname:t,password:e},c=this;n.httpPost("https://www.mheart.xyz/app/api-server/login",o,function(o){cc.log(o),1==o.code?(c.register_alert.string="",cc.sys.localStorage.setItem("token",o.data.token),cc.sys.localStorage.setItem("loginname",t),cc.sys.localStorage.setItem("password",e),c.node.active=!1):c.register_alert.string="\u8d26\u53f7\u5bc6\u7801\u9519\u8bef!"})},callback:function(t){cc.director.loadScene("map")},start:function(){},show_dlg:function(){this.node.active=!0},hidden_dlg:function(){this.node.active=!1}}),cc._RF.pop()},{http:"http"}],scoretrump:[function(t,e,o){"use strict";cc._RF.push(e,"f6b99ZAVAJJtbvT/VopdNIP","scoretrump"),cc.Class({extends:cc.Component,properties:{content:{default:null,type:cc.Node},person:{default:null,type:cc.Prefab},test_scrollView:{default:null,type:cc.ScrollView},test_pageView:{default:null,type:cc.PageView}},onLoad:function(){for(var t=0;t<10;t++){var e=cc.instantiate(this.person);this.conten=e}},addTouchEvent:function(t){t.on(cc.Node.EventType.TOUCH_START,this.touchStart,this),t.on(cc.Node.EventType.TOUCH_MOVE,this.touchMove,this),t.on(cc.Node.EventType.TOUCH_END,this.touchEnd,this)}}),cc._RF.pop()},{}],tips:[function(t,e,o){"use strict";cc._RF.push(e,"1e7f7ciNQRLOoO7QCll/I0d","tips"),cc.Class({extends:cc.Component,properties:{scorllview:cc.ScorllView},onLoad:function(){cc.sys.localStorage.removeItem("server_tips"),(new(t("http"))).httpPost("https://www.mheart.xyz/app/api-server/user-tips",[],function(t){var e=cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");for(var o in e.getComponent(cc.Label).string=t.data.gonggao_sz,t.data)cc.sys.localStorage.setItem(o,t.data[o])})},start:function(){},gonggao_sz:function(){cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips").getComponent(cc.Label).string=cc.sys.localStorage.getItem("gonggao_sz")},gonggao_sx:function(){cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips").getComponent(cc.Label).string=cc.sys.localStorage.getItem("gonggao_sx")},gonggao_gx:function(){cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips").getComponent(cc.Label).string=cc.sys.localStorage.getItem("gonggao_gx")},gonggao_lx:function(){cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips").getComponent(cc.Label).string=cc.sys.localStorage.getItem("gonggao_lx")},show_dlg:function(){this.node.active=!0},hidden_dlg:function(){this.node.active=!1}}),cc._RF.pop()},{http:"http"}],userinfo:[function(t,e,o){"use strict";cc._RF.push(e,"cb9c9nq1ARCEIGdOhdxiwAf","userinfo");var n=new(t("http"));cc.Class({extends:cc.Component,properties:{editbox:cc.EditBox},onLoad:function(){this.tokenlogin()},tokenlogin:function(){cc.loader.loadRes("login.json",function(t,e){var o=e.json,c={token:o.token};cc.log(o.token);e=n.httpPost("https://www.mheart.xyz/app/api-server/token-login",c,function(t){cc.loader.release("resources/login.json"),t.code})})},login:function(){n.httpPost("https://www.mheart.xyz/app/api-server/login",{loginname:"yincan1993",password:123456},function(t){})},btnClick1:function(t,e){var o=JSON.parse(cc.sys.localStorage.getItem("params"));n.httpPost("https://www.mheart.xyz/app/api-server/user-login",o,function(t){if(cc.log(t),0==t.code);else if(cc.sys.localStorage.setItem("server",JSON.stringify(t.data.server)),1==t.code&&(cc.sys.localStorage.setItem("userinfo",JSON.stringify(t.data.userinfo)),cc.director.loadScene("home/dating")),2==t.code){JSON.parse(cc.sys.localStorage.getItem("server"));cc.director.loadScene("register")}})},callback:function(t){cc.director.loadScene("map")},start:function(){}}),cc._RF.pop()},{http:"http"}],wap:[function(t,e,o){"use strict";cc._RF.push(e,"b005bs3OsxEXphcM4J27bYW","wap"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}]},{},["Conf","Game","Tool","alert","post","userinfo","Alert","ProgressBarScript","SpriteTextTool","Tools","background","button_check","button_xieyi","http","jspfile","loading","myserver","popup_dlg","register","register_in","register_knows","tips","loading_fist","scoretrump","wap"]);