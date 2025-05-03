var accountInfo;
async function login(account,password,cftsToken,uid,token) {
    if(typeof cftsToken != "undefined"){
    const targetUrl = 'https://accountsv.838483.xyz/api/getInsideToken';
    const requestBody = {
        account: account,
        password: password,
        authID: "sungbly_account_dashboard",
        cftsToken: cftsToken,
        uid: uid,
        token: token,
    };
    const customHeaders = {
        'Content-Type': 'application/json'
    };
    await $.ajax({
        url: '//accountsv.838483.xyz/api/getInsideToken',
        type: 'POST',
        data: JSON.stringify({ targetUrl: targetUrl, requestBody: requestBody, headers: customHeaders }),
        contentType: 'application/json',
        success: function(data) {
            accountInfo = data;
        }
    });
    console.log('accountInfo',accountInfo)
    switch(accountInfo.code){
        case 401:
            switch(accountInfo.text.substring(0,10)){
                case 'Not Allow1':
                    alert('发送数据包参数缺失 请联系sungbly account网站管理员')
                    break;
                case 'Not Allow2':
                    alert('账户或密码中有字符被拦截')
                    break;
            }
            break;
        case 402:
            alert('人机验证令牌无效 请刷新页面')
            break;
        case 403:
            alert('发送参数无效 请联系sungbly account网站管理员')
            break;
        case 404:
            alert('账户或密码错误 请重新输入')
            break;
        case 200:
            console.log('accountInfo.insideToken',accountInfo.insideToken)
            setCookie("dashboard_insideToken", accountInfo.insideToken, 90);
            console.log('登录成功')
            location.href = 'default.html'
            break;
    }
    }else{
        alert('请等待人机验证完成')
    }
}
