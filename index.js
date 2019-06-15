let KoaSend = require('koa-send');

module.exports = function(root, {
	index = 'index.html',
	maxAge = 0,
} = {}) {
	let options = {
		index,
		maxage: maxAge,
		root,
	};
	return async function(ctx, next) {
		try {
			await KoaSend(ctx, ctx.path, options);
		} catch (unused) {
			try {
				await KoaSend(ctx, '/', options);
			} catch (unused) {
				await next();
			}
		}
	};
};
