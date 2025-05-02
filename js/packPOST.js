//先引入jq再运行
async function packPOST(url, data) {
    var info;
    var targetUrl = url;
    var customHeaders = {
            'Content-Type': 'application/json'
        };
    await $.ajax({
        url: '//accountsv.838483.xyz/api/login',
        type: 'POST',
        data: JSON.stringify({ targetUrl: targetUrl, requestBody: data, headers: customHeaders }),
        contentType: 'application/json',
        success: function(data) {
            info = data;
        }
    }
    )
    return info;
}