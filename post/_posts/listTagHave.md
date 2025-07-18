---
title: listTagHave
date: 2025-07-18 04:24:23
tags: [saV5,tag,config]
---
请确保你已阅读完成[readme](//account.838483.xyz/2025/04/27/readme/)后再来阅读
# 接口
## POST https://accountsv.838483.xyz/api/listTagHave
列出拥有某一tag的所有uid
- 请求参数 tagName key
- 返回 JSON
tagName:获取对象tag
key:tag的密钥
JSON: json格式
>示例:
>获取成功:
>>url: https://accountsv.838483.xyz/api/listTagHave
>>请求:
>>>{
>>>  "key": "1234",
>>>  "tagName": "test2"
>>>}
>>
>>返回:
>>>{"success":true,"code":200,"list":"1,2,3"}
>>
>
>获取失败:
>>url: https://accountsv.838483.xyz/api/listTagHave
>>返回:
>>>{"success":false,"code": 403,"text": "tag NotFound! ${tagName}"}(tag不存在)
>>>{"success":false,"code": 404,"text": "Not Allow"}(key错误)
>>
>
# 备注
返回的数据1,2,3表示uid1 uid2 uid3拥有该tag uid间会通过","分割
若返回""则表示没有用户拥有该tag
# 用途
用于管理账户