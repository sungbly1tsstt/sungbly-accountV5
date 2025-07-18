---
title: uidGetName
date: 2025-05-02 04:01:49
tags: [saV5,config]
---
请确保你已阅读完成[readme](//account.838483.xyz/2025/04/27/readme/)后再来阅读
# 接口
## POST https://accountsv.838483.xyz/api/uidGetName
通过uid获取用户名
- 请求参数 uid
- 返回 JSON
uid：sungbly account的uid
JSON: json格式
>示例:
>成功时:
>>url: https://accountsv.838483.xyz/api/uidGetName
>>请求:
>>>{
>>>  "uid": "1"
>>>}
>>
>>返回:
>>>{
>>> "success":true,
>>> "name":"1213123"
>>>}
>>
>>或者:
>>url: https://accountsv.838483.xyz/api/uidGetName
>>请求:
>>>{
>>>  "uid": 1
>>>}
>>
>>返回:
>>>{
>>> "success":true,
>>> "name":"1213123"
>>>}
>>
>失败时:
>>url: https://accountsv.838483.xyz/api/uidGetName
>>请求:
>>>{
>>>  "uid": "123"
>>>}
>>
>>返回:
>>>{
     "success":false
   }
>>
>>或者:
>>url: https://accountsv.838483.xyz/api/uidGetName
>>请求:
>>>{
>>>  "uid": 123
>>>}
>>
>>返回:
>>>{
     "success":false
    }
# 用途
在获取uid后，可以通过此接口获取用户名。
通过[login](//account.838483.xyz/2025/04/27/login/)接口获取uid