import $ from 'jquery/dist/jquery.min'

function getUrl(url, options){
    return new Promise((resolve, reject) => {
        $.ajax({
            type : "get",
            async: true,
            url : url,
            dataType : "json",
            data: options,
            success : function(data){
                return resolve(data);
            },
            error:function(err){
                return reject(err)
            }
        })
    })
}

function postUrl(url, options){
    return new Promise((resolve, reject) => {
        $.ajax({
            type : "get",
            async: true,
            url : url,
            dataType : "json",
            data: options,
            success : function(data){
                return resolve(data);
            },
            error:function(err){
                return reject(err)
            }
        })
    })
}


module.exports={
    getUrl: getUrl,
    postUrl: postUrl
};