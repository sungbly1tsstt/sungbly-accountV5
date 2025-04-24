function login(account,password,authID,callback) {
    const accountInfo = $.ajax({
        url: '//accountsv.838483.xyz/api/login',
        type: 'POST',
        data: {
            username: account,
            password: password,
            authID: authID
        },
        dataType: 'json',
    }).responseText;
    console.log('accountInfo',accountInfo)
}
function getLoginInfo(){
    if(location.href.indexOf('?')==-1){
        return []
    }else{
    return location.href.split('?')[1].split('&')
    }
}