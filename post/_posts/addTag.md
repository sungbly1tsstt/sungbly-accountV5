---
title: addTag
date: 2025-07-17 07:08:47
tags: [saV5,tag,config]
---
请确保你已阅读完成[readme](//account.838483.xyz/2025/04/27/readme/)后再来阅读
# 接口
## POST https://accountsv.838483.xyz/api/addTag
向一个账户添加tag
- 请求参数 uid authID token tagName key
- 返回 JSON
uid:被标记用户uid
authID:tag所有者同名下的authID
token:使用该authID验证 被标记用户的token
tagName:需标记的tag
key:tag的密钥
JSON: json格式
>示例:
>标记成功:
>>url: https://accountsv.838483.xyz/api/addTag
>>请求:
>>>{
>>>  "uid": 1,
>>>  "authID": "test2",
>>>  "token": "bbbe2f132e6e1046f6d8a4c93c3fb7fa476a859874dcf2afa592594273701689",
>>>  "tagName": "test2",
>>>  "key": "1234"
>>>}
>>
>>返回:
>>>{"success":true,"code":200}
>>
>
>标记失败:
>>url: https://accountsv.838483.xyz/api/addTag
>>返回:
>>>{"success":false,"code": 405,"text": "Not Allow"} (key/authID+token+tag所有者验证失败)
>>>{"success":false,"code": 403,"text": "user not found or banned ${uid}"} (标记对象不存在或被saV5封禁)
>>
>
# 用途
- 添加物品/权限
- 标记封禁用户
# 备注
根据用户协议 禁止将tag用于个性化推送（如广告） 查出就永封