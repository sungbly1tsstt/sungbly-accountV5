async function register(account,password,email,callback,cftsToken) {
    const targetUrl = 'https://accountsv.838483.xyz/api/register';
    const requestBody = {
        username: account,
        password: password,
        mail: email,
        key: cftsToken
    };
    const customHeaders = {
        'Content-Type': 'application/json'
    };
    var accountInfo;
    await $.ajax({
        url: '//accountsv.838483.xyz/api/registerynm,. /',
        type: 'POST',
        data: JSON.stringify({ targetUrl: targetUrl, requestBody: requestBody, headers: customHeaders }),
        contentType: 'application/json',
        success: function(data) {
            accountInfo = data;
        }
    }
    )
        // const accountInfo = $.ajax({
        //     url: '//accountsv.838483.xyz/api/login',
        //     type: 'POST',
        //     data: JSON.stringify(requestBody),
        //     contentType: 'application/json'})
    console.log('accountInfo',accountInfo)
    switch(accountInfo.code){
        case 401:
            if(accountInfo.text.substring(0,10)=='Not Allow2'){
                alert('账户或密码中有字符被拦截')
            }else{
                if(accountInfo.text.substring(0,10)=='Not Allow2'){
                    alert('账户或密码中有字符被拦截')
                }else{
                    if(accountInfo.text.substring(0,10)=='Not Allow1'){
                        alert('发送数据包参数缺失 请联系网站管理员')
                    }else{
                        alert('用户名或密码错误')
                    }
                }
            }
            break;
        case 200:
            location.href = window.atob(callback);
            break;
        case 500:
            alert('服务器错误')
            break;
        case 403:
            alert('人机验证令牌无效 请刷新页面重试')
            break;
    }
}
function getRegisterInfo(){
    if(location.href.indexOf('?')==-1){
        return []
    }else{
    return location.href.split('?')[1].split('&')
    }
}