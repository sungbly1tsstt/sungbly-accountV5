var accountInfo;
async function InsideLogin(account,password,cftsToken,cftsToken2) {
    var loginInfo = await login(account,password,"sungbly_account_dashboard",cftsToken,"account.838483.xyz").split(",");
    if(typeof cftsToken != "undefined"){
    const targetUrl = 'https://accountsv.838483.xyz/api/getInsideToken';
    const requestBody = {
        account: account,
        password: password,
        authID: "sungbly_account_dashboard",
        cftsToken: cftsToken2,
        uid: loginInfo[1],
        token: loginInfo[0],
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
            if(getCookie("accountList") == ""){
                setCookie("accountList",loginInfo[1] + "," + account + "," + accountInfo.insideToken,512)
            }else{
                var cookieTemp = getCookie("accountList")
                clearCookie("accountList")
                setCookie("accountList",cookieTemp + ";" + loginInfo[1] + "," + account + "," + accountInfo.insideToken,512)
            }
            console.log('登录成功')
            location.reload();
            break;
    }
    }else{
        alert('请等待人机验证完成')
    }
}
var accountInfo;
async function login(account,password,authID,cftsToken) {
    if(typeof cftsToken != "undefined"){
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
    await $.ajax({
        url: '//accountsv.838483.xyz/api/login',
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
    console.log('acceptDomain',acceptDomain)
        switch(accountInfo.code){
            case 401:
                switch(accountInfo.text.substring(0,10)){
                    case 'Not Allow1':
                        alert('发送数据包参数缺失 请联系sungbly account网站管理员')
                        break;
                    case 'Not Allow2':
                        alert('账户或密码中有字符被拦截')
                        break;
                    case 'auth app I':
                        alert('authID错误 请联系欲登录网站的管理员')
                        break;
                    case 'username o':
                        alert('用户名或密码错误')
                        break;
                }
                break;
            case 200:
                return(accountInfo.token + "," + accountInfo.uid)
                break;
            case 500:
                alert('服务器错误')
                break;
            case 403:
                alert('人机验证令牌无效 请刷新页面重试')
                break;
            }
    }else{
        alert('请等待人机验证完成')
    }
}