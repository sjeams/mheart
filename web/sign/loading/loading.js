/**
     *  数据加载动态圈风格
     * @param property 参数对象
     *  property 参数对象详细属性设置↓
     * type (start,stop) 加载或停止转圈
     * content 加载提示内容
     * shadowColor 背景阴影颜色-建议使用带透明的颜色
     * loadingBoxColor  加载背景色
     * loadingPointColor  转圈点颜色
     * loadingContentColor  加载提示内容字体颜色
     */
 function initLoading(property) {
  $("body .loading-box-shadow-omg").remove();//清除加载图层
  if(property.type=="stop"){
      return;
  }
  var nodeHtml = '<div class="loading-box-shadow-omg"><div class="loading-box">';
  nodeHtml += '<div class="loading-circle"></div><div class="loading-content"></div></div></div>';
  $("body").append(nodeHtml);//加载布局元素
  var html = '<div style="top: 5%;left: 53%;width: 5px;height: 5px;"></div>';
  html += '<div style="top: 11%;left: 30%;width: 7px; height: 7px;"></div>';
  html += '<div style="top: 26%;left: 12%;width: 9px;height: 9px;"></div>';
  html += '<div style="top: 48%;left: 7%;width: 9px;height: 9px;"></div>';
  html += '<div style="top: 70%;left: 15%;width: 9px;height: 9px;"></div>';
  html += '<div style="top: 85%;left: 33%;width: 9px;height: 9px;"></div>';
  html += '<div style="top: 89%;left: 54%;width: 9px;height: 9px;"></div>';
  html += '<div style="top: 80%;left: 75%;width: 9px;height: 9px;"></div>';
  $("body .loading-circle").html(html);
//   var content = "正在加载中...";//提示内容
//   if(property.content){
//       content = property.content;
//   }
  $("body .loading-content").text(content);
//   var shadowColor = "#211f1f5c";//阴影颜色
//   if(property.shadowColor){
//       shadowColor = property.shadowColor;
//       $('body .loading-box-shadow-omg').css("background-color",shadowColor);
//   }
  var loadingBoxColor = "white";//加载框背景色
  if(property.loadingBoxColor){
      loadingBoxColor = property.loadingBoxColor;
      $('body .loading-box-shadow-omg .loading-box').css("background-color",loadingBoxColor);
  }
  var loadingPointColor = "#292961";//动态点颜色
  if(property.loadingPointColor){
      loadingPointColor = property.loadingPointColor;
      $('body .loading-box-shadow-omg .loading-circle>div').css("background-color",loadingPointColor);
  }
  var loadingContentColor = "rebeccapurple";//提示内容颜色
  if(property.loadingContentColor){
      loadingContentColor = property.loadingContentColor;
      $('body .loading-box-shadow-omg .loading-content').css("color",loadingContentColor);
  }
};
initLoading({
type:"start",
// content:"loading...",
// shadowColor:"grey",
// loadingBoxColor:"yellow",
// loadingPointColor:"green",
// loadingContentColor:"red"
});