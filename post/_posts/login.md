---
title: login
date: 2025-04-27 18:28:14
tags: [saV5,config]
---
请确保你已阅读完成[readme](//account.838483.xyz/2025/04/27/readme/)后再来阅读
# 原理
## 登录流程
sungbly account的登录流程大概如下
1. 访问sungbly account的登录页面，前端获取登录信息（如AuthID callbackUrl）然后要求用户输入账户密码
2. 前端将账户密码还有AuthID发送给后端
3. 后端验证账户密码AuthID，并返回token 用户uid 还有注册域名
4. 前端验证域名 并将token和uid以url?token=xxx&uid=xxx的形式发送给回调地址
5. 用户uid和token由回调地址处理
注意：
- 由于token不是现在主流的账户信息加密原理 而是账户原始token+app的密钥 所以须保证登录域名正确防止平台账户被盗
- 当token泄露时须及时修改账户原始token 当token被修改时所有平台的token将会失效 所以请平台使用uid作为标识 token作为凭证
- 平台需保证自己的回调地址安全 防止被恶意攻击
# 实现
## 登录的完整流程
1. 跳转到account.838483.xyz/login.html?authID=xxx&callback=xxx
2. 跳转到回调地址时请保存好token和uid并处理
## 接口
### GET https://account.838483.xyz/login.html
登录页面
- 请求参数 authID callback
- 返回 token uid
authID: 登录平台的唯一标识 由仪表盘申请获取
callback: 登录成功后回调地址 须像//xxx.xx.xx/xxx.html?的格式 需要转换成base64填入
token：平台AuthID生成的账户唯一token
uid：sungbly account的uid
> 示例请求：https://account.838483.xyz/login.html?authID=test&callback=aHR0cHM6Ly84Mzg0ODMueHl6Pw==
> 示例结果：https://838483.xyz/?token=b932bf72f8dc35055af2272bd2ace89802fb0b45c57497f716855432e3f804a9&uid=1
### POST https://accountsv.838483.xyz/api/tokenChk
验证token
- 请求参数 token uid authID
- 返回 JSON
authID: 登录平台的唯一标识 由仪表盘申请获取
token：平台AuthID生成的账户唯一token
uid：sungbly account的uid
JSON: json格式
> 示例：
> 成功时：
>> url: https://accountsv.838483.xyz/api/tokenChk
>> 请求：
>>> {
>>>  "token": "b932bf72f8dc35055af2272bd2ace89802fb0b45c57497f716855432e3f804a9",
>>>  "uid": "1",
>>>  "authID": "test"
>>> }
>>
>> 返回:
>>> {
>>>  "code": 200,
>>>  "text": "valid token! b932bf72f8dc35055af2272bd2ace89802fb0b45c57497f716855432e3f804a9 1 test"
>>> }
>
> 失败时：
>> url: https://accountsv.838483.xyz/api/tokenChk
>> 请求：
>>> {
>>>  "token": "b932bf72f8dc35055af2272bd2ace89802fb0b45c57497f716855432e3f804a91",
>>>  "uid": "1",
>>>  "authID": "test"
>>> }
>>
>> 返回:
>>> {
>>>  "code": 400,
>>>  "text": "invalid token! b932bf72f8dc35055af2272bd2ace89802fb0b45c57497f716855432e3f804a91 1 test"
>>> }
>>
# 注意事项
- 使用uid标识账户 token作为凭证
- 收到token后务必验证token