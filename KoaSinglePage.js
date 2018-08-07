let KoaSend = require('koa-send');

module.exports = function(root, {index = 'index.html'} = {}) {
	let options = {root, index};
	return async function(ctx) {
		try {
			await KoaSend(ctx, ctx.path, options);
		} catch (error) {
			await KoaSend(ctx, '/', options);
		}
	};
};
