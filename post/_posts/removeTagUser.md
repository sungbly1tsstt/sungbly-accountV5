---
title: removeTagUser
date: 2025-07-17 07:09:12
tags: [saV5,tag,config]
---
请确保你已阅读完成[readme](//account.838483.xyz/2025/04/27/readme/)后再来阅读
# 接口
## POST https://accountsv.838483.xyz/api/removeTagUser
向一个账户添加tag
- 请求参数 uid tagName key
- 返回 JSON
uid:被移除标记用户uid
tagName:需移除标记的tag
key:tag的密钥
JSON: json格式
>示例:
>操作成功:
>>url: https://accountsv.838483.xyz/api/removeTagUser
>>请求:
>>>{
>>>  "uid": "1",
>>>  "tagName": "test2",
>>>  "key": "1234"
>>>}
>>
>>返回:
>>>{"success":true,"code":200}
>>
>
>标记失败:
>>url: https://accountsv.838483.xyz/api/removeTagUser
>>返回
>>>{"success":false,"code": 405,"text": "Not Allow"} (key错误)
>>
>
# 用途
- 解除封禁
- 取消权限/删除物品