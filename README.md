# KoaSinglePage

`KoaSinglePage(root, {index = 'index.html'})`

A single page application middleware.

## dependencies

- [Koa](https://github.com/koajs/koa)
- [KoaSend](https://github.com/koajs/send)

## setup

### npm

```shell
npm install koa-single-page
```

### Node

```javascript
let KoaSinglePage = require('koa-single-page');
```

## usage

```javascript
let app = new Koa();
app.use(KoaSinglePage('public'));
```
