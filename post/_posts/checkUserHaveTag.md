---
title: checkUserHaveTag
date: 2025-07-17 09:13:59
tags: [saV5,tag,config]
---
请确保你已阅读完成[readme](//account.838483.xyz/2025/04/27/readme/)后再来阅读
# 接口
## POST https://accountsv.838483.xyz/api/checkUserHaveTag
获取该账户是否拥有指定的tag
- 请求参数 uid tagName
- 返回 JSON
uid:被检查用户uid
tagName:检查是否拥有的tag
JSON: json格式
>示例:
>拥有:
>>url: https://accountsv.838483.xyz/api/checkUserHaveTag
>>请求:
>>>{
>>>  "uid": "1",
>>>  "tagName": "test2"
>>>}
>>
>>返回:
>>>{"success":true,"code":200,"have":true}
>>
>
>不拥有:
>>url: https://accountsv.838483.xyz/api/checkUserHaveTag
>>返回:
>>>{"success":true,"code":200,"have":false}
>>
>
# 用途
- 检测用户是否被封禁
- 检测用户是否拥有权限/物品