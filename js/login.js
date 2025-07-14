var accountInfo;
var acceptDomain;
async function login(account,password,authID,callback,cftsToken,vaildDomaindialog,cftsID) {
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
    acceptDomain = new URL(atob(callback)).hostname;
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
                turnstile.reset(cftsID);
                break;
            case 200:
                if(accountInfo.accept_domain == acceptDomain){
                    location.href = window.atob(callback)+'token='+accountInfo.token+'&uid='+accountInfo.uid;
                }else{
                    vaildDomaindialog.showModal();
                    document.getElementById('callbackUrl').value = acceptDomain;
                }
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
function getLoginInfo(){
    if(location.href.indexOf('?')==-1){
        return []
    }else{
    return location.href.split('?')[1].split('&')
    }
}
function verifyCallbackWarning(input){
    if(input == accountInfo.accept_domain){
        location.href = window.atob(callback)+'token='+accountInfo.token+'&uid='+accountInfo.uid;
    }else{
        alert('域名不匹配')
    }
}
async function autoLogin(account,password,authID,callback,cftsToken,vaildDomaindialog,cftsID) {
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
    acceptDomain = new URL(atob(callback)).hostname;
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
                turnstile.reset(cftsID);
                break;
            case 200:
                if(accountInfo.accept_domain == acceptDomain){
                    location.href = window.atob(callback)+'token='+accountInfo.token+'&uid='+accountInfo.uid;
                }else{
                    vaildDomaindialog.showModal();
                    document.getElementById('callbackUrl').value = acceptDomain;
                }
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
var list = new Array();
list = getCookie("accountList").split("\\")
function loadList(){
    var accountListTemp = "";
    for(let i = 0;i < list.length;i++){
        var account = list[i].split(",")
        accountListTemp += '<tr><td class="account">'+ account[1] +'</td><td><div class="button_grey" style="height: 30px;width:65px;" onclick="loginAccount(`'+ account[2] +'`,authID,callback,cftsToken,document.getElementById(`invaild-callbackUrl`),cftsID1)"><span height="1rem" class="fa fa-exchange" style="position: relative;top: 6.3px;left:13px;">切换</span></div></td></tr>'
    }
    document.getElementById("accountList").innerHTML = accountListTemp;
    console.log("load success")
}
async function loginAccount(insideToken,authID,callback,cftsToken,vaildDomaindialog,cftsID) {
    if(confirm("确定登录这个账户吗")){
        if(typeof cftsToken != "undefined"){
        const targetUrl = 'https://accountsv.838483.xyz/api/insideTokenLogin';
        const requestBody = {
            insideToken: insideToken,
            authID: authID,
            cftsToken: cftsToken
        };
        const customHeaders = {
            'Content-Type': 'application/json'
        };
        await $.ajax({
            url: '//accountsv.838483.xyz/api/insideTokenLogin',
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
        acceptDomain = new URL(atob(callback)).hostname;
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
                    turnstile.reset(cftsID);
                    break;
                case 200:
                    if(accountInfo.accept_domain == acceptDomain){
                        location.href = window.atob(callback)+'token='+accountInfo.token+'&uid='+accountInfo.uid;
                    }else{
                        vaildDomaindialog.showModal();
                        document.getElementById('callbackUrl').value = acceptDomain;
                    }
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
}