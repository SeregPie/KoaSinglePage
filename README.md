# KoaSinglePage

`KoaSinglePage(root, {index = 'index.html'})`

A single page application middleware.

## dependencies

- [KoaSend](https://github.com/koajs/send)

## setup

### npm

```shell
npm i koa-single-page
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
