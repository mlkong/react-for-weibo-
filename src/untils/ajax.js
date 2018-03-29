import $ from 'jquery/dist/jquery.min'

export function getUrl(url, api, options){
    return new Promise((resolve, reject) => {
        $.ajax({
            type : "get",
            url : url,
            success : function(data){
                return resolve(data);
            },
            error:function(err){
                return reject(err)
            }
        })
    })
}

export function postUrl(url, api, options){
    return new Promise((resolve, reject) => {
        $.ajax({
            type : "post",
            url : url+api,
            data: options,
            success : function(data){
                console.log("POST 请求数据成功：", data);
                return resolve(data);
            },
            error:function(err){
                console.log("POST 请求数据失败：", err);
                return reject(new Error(err))
            }
        })
    })
}