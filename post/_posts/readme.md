---
title: readme
date: 2025-04-27 11:39:17
tags: [saV5,config,important]
---
# 请求格式
由于项目初期使用的请求发送页面格式不是直接放入请求体 导致代码整体格式出现错误 等到V6会修复 所以对向sungbly accountV5的服务器发送的POST请求需要使用特定的格式来提交数据

## 格式
你发送的请求格式应该像这样：
```json
{
  "targetUrl": targetUrl,
  "requestBody": requestBody,
  "headers": customHeaders
}
```
其中：
- `targetUrl`：目标地址，字符串类型，必填
- `requestBody`：请求体，字符串类型，可选
- `headers`：自定义请求头，对象类型，可选

其中为了确保不会出现错误 targetUrl需要和POST提交地址一致

推荐用我们的调试工具来调用api 已内置该请求格式 [调试工具](//accountsv.838483.xyz/post) (在主域名不可用时备用域名也不可使用)
## 示例
这是login函数的请求代码片段:
```javaScript
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
```
其中提交的信息被包裹在requestBody中 并使用JSON.stringify()方法序列化为字符串
如果不使用这种格式的话会出现服务器内部错误 请注意！
当服务器错误时 会返回
```json
{
    "code": 500,
    "text": "Internal Server Error: ${error.message}"
}
```
${error.message}为服务器错误信息
当提交信息内包含特殊字符（/^[a-zA-Z0-9@_-]+$/）（除邮箱外）将会返回
```json
{"code":401,"text":"Not Allow2"}
```
当提交参数缺失时将会返回
```json
{"code":401,"text":"Not Allow1"}
```

# 服务器地址
现在sungbly accountV5（后端）的有三个地址:
- accountsv.838483.xyz
- accountsv.838483.dpdns.org
- accountsv.sungbly.dpdns.org

其中accountsv.838483.xyz是主地址 其他两个是备用地址(不太稳定)
当主地址访问失效是请将文档里的accountsv.838483.xyz更换成备用地址