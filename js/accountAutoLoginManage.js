var list = new Array();
list = getCookie("accountList").split(";")

async function changeAccount(uid){
    var success = false;
    for(var i;i < list.length;i++){
        if(list[i].substr(0,uid.length + 1) == uid + ","){
            var change = list[i].split(",")
            clearCookie("dashboard_uid")
            clearCookie("dashboard_username")
            clearCookie("dashboard_insideToken")
            setCookie("dashboard_uid",change[0],90)
            setCookie("dashboard_username",change[1],90)
            setCookie("dashboard_insideToken",change[2],90)
            alert("切换成功 请手动刷新页面")
            success = true;
        }
    }
    if(success == false){
        alert("切换失败");
    }
}

async function removeAccount(uid){
    if(confirm("确定要删除该账户吗")){
        for(var i;i < list.length;i++){
            if(list[i].substr(0,uid.length + 1) == uid + ","){
                list.splice(i,1)
            }
        }
        var accountList = "";
        for(var i;i < list.length;i++){
            if(accountList == ""){
                accountList = list[i]
            }else{
                accountList += ";" + list[i] 
            }
        }
        clearCookie("accountList")
        setCookie("accountList",accountList,512)
        location.reload()
    }
}

function loadList(){
    var accountListTemp = "";
    for(var i;i < list.length;i++){
        var account = list[i].split(",")
        accountListTemp += '<tr><td class="account">'+ account[1] +'</td><td><div class="button_grey" style="height: 30px;width:65px;" onclick="changeAccount(`'+ account[0] +'`)"><span height="1rem" class="fa fa-exchange" style="position: relative;top: 6.3px;left:13px;">切换</span></div></td><td><div class="button_grey" style="height: 30px;width:65px;background-color: red;" onclick="changeAccount(`'+ account[0] +'`)"><span height="1rem" class="fa-solid fa-trash" style="position: relative;top: 6.3px;left:13px;">删除</span></div></td></tr>'
    }
    document.getElementById("accountList").innerHTML = accountListTemp;
    console.log("load success")
}