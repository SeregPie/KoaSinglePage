# KoaSinglePage

```
KoaSinglePage(root, {
  index = 'index.html',
  maxAge = 0,
})
```

A single page application middleware.

## dependencies

- [KoaSend](https://github.com/koajs/send)

## setup

### npm

```shell
npm i koa-single-page
```

### node

```javascript
let KoaSinglePage = require('koa-single-page');
```

## usage

```javascript
let app = new Koa();
app.use(KoaSinglePage('public'));
```
