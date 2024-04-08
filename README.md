
# fetch-event-source

使用 fetch 实现 EventSource, 支持 fetch 的所有功能

## install
```shell
$ npm install sse-fetch
```

## usage
```js
import EventSource from 'sse-fetch';
const eventSource = new EventSource('http://localhost:3000/sse', {
  method: 'POST',
});

eventSource.addEventListener('message', (event) => {
  console.log(event.data);
});
```

## API
除了支持 EventSource 的及 fetch 的所有配置，还支持以下配置：
|属性名|类型|默认值|描述|
|----|----|----|----|
|json|boolean|false|如果 data 为 json 是否自动解析返回的 json|
|serverEnd|boolean|false|如果服务端主动关闭连接，客户端不再尝试重连|

