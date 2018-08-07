let KoaSend = require('koa-send');

module.exports = function(root, {index = 'index.html'} = {}) {
	let options = {root, index};
	return async function(ctx, next) {
		try {
			await KoaSend(ctx, ctx.path, options);
		} catch (error) {
			try {
				await KoaSend(ctx, '/', options);
			} catch (error) {
				await next();
			}
		}
	};
};
