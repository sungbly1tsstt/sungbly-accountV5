---
title: getUidBanStaus
date: 2025-05-05 03:19:09
tags: [saV5,config]
---
请确保你已阅读完成[readme](//account.838483.xyz/2025/04/27/readme/)后再来阅读
# 接口
## POST https://accountsv.838483.xyz/api/uidGetBanStaus
通过uid获取账户是否可访问
- 请求参数 uid
- 返回 JSON
uid：sungbly account的uid
JSON: json格式
>示例:
>可访问:
>>url: https://accountsv.838483.xyz/api/uidGetBanStaus
>>请求:
>>>{
>>>  "uid": "1"
>>>}
>>
>>返回:
>>>{
>>> "success":true,
>>> "ban":false
>>>}
>>
>>或者:
>>url: https://accountsv.838483.xyz/api/uidGetBanStaus
>>请求:
>>>{
>>>  "uid": 1
>>>}
>>
>>返回:
>>>{
>>> "success":true,
>>> "ban":false
>>>}
>>
>不可访问:
>>url: https://accountsv.838483.xyz/api/uidGetBanStaus
>>请求:
>>>{
>>>  "uid": "123"
>>>}
>>
>>返回:
>>>{
>>>  "success":false,
>>>  "ban":true,
>>>  "code": 403,
>>>  "text": "user not found or banned 123"
>>>}
>>
>>或者:
>>url: https://accountsv.838483.xyz/api/uidGetBanStaus
>>请求:
>>>{
>>>  "uid": 123
>>>}
>>
>>返回:
>>>{
     "success":false,
     "ban":true,
     "code": 403,
     "text": "user not found or banned 123"
    }
# 用途
在获取uid后，可以通过此接口获取该账户是否可访问。
账户不能访问通常是因为以下原因：
- 账户不存在
- 账户违反了saV5用户协议被封禁
通过[login](//account.838483.xyz/2025/04/27/login/)接口获取uid