/**
 * Http 请求封装
 */
const HttpHelper = cc.Class({
    extends: cc.Component,

    statics: {
    },

    properties: {

    },

    /**
     * get请求
     * @param {string} url 
     * @param {function} callback 
     */
    
        httpGets: function (url, callback) {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                    var respone = xhr.responseText;
                    callback(respone);
                }
            };
            xhr.open("GET", url, true);
            if (cc.sys.isNative) {
                xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
            }
        
            // note: In Internet Explorer, the timeout property may be set only after calling the open()
            // method and before calling the send() method.
            xhr.timeout = 5000;// 5 seconds for timeout
        
            xhr.send();
        },
        
        httpPost: function (url, params, callback) {
            var xhr = cc.loader.getXMLHttpRequest();
            xhr.onreadystatechange = function () {
                // cc.log('xhr.readyState='+xhr.readyState+'  xhr.status='+xhr.status);
                if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                    var respone = xhr.responseText;
                    callback(JSON.parse(respone));  // json 转数组
                }else{
                    //   callback(-1);
                }
            };
            xhr.open("POST", url, true);
            if (cc.sys.isNative) {
                xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
            }
            // xhr.setRequestHeader("Http-Edition", "1.0.0.0");  // 版本
            // xhr.setRequestHeader("Ip", "192.168.1.1");
            // xhr.setRequestHeader("Http-Token", "gzipdeflate");
            xhr.timeout = 5000;// 5 seconds for timeout
            // xhr.setRequestHeader('Content-Type', 'application/json,multipart/form-data');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            // xhr.send(JSON.stringify(params));
            xhr.send('data='+JSON.stringify(params));
            //  xhr.send(params);

        }
});

window.HttpHelper = new HttpHelper();