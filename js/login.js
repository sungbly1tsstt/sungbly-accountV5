async function login(account,password,authID,callback,cftsToken) {
    const targetUrl = 'https://accountsv.838483.xyz/api/login';
    const requestBody = {
        username: account,
        password: password,
        authID: authID,
        key: cftsToken
    };
    const customHeaders = {
        'Content-Type': 'application/json'
    };
    var accountInfo;
    await $.ajax({
        url: '//accountsv.838483.xyz/api/test-request',
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
                alert('用户名或密码错误')
            }
            break;
        case 200:
            location.href = window.atob(callback)+'token='+accountInfo.token+'&uid='+accountInfo.uid
            break;
        case 500:
            alert('服务器错误')
            break;
    }
}
function getLoginInfo(){
    if(location.href.indexOf('?')==-1){
        return []
    }else{
    return location.href.split('?')[1].split('&')
    }
}