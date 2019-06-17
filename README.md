# KoaSinglePage

```
KoaSinglePage(root, {
  index = 'index.html',
})
```

A single page application middleware.

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
