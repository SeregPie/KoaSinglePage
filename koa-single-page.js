let send = require('koa-send');

module.exports = function(root, {index = 'index.html'} = {}) {
	let options = {root};
	return async function(ctx) {
		try {
			await send(ctx, ctx.path, options);
		} catch (error) {
			await send(ctx, index, options);
		}
	};
};
