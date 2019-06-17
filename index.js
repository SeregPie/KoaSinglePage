let FileSystem = require('fs');
let Path = require('path');

module.exports = function(root, {
	index = 'index.html',
} = {}) {
	root = Path.resolve(root);
	return async function(ctx) {
		try {
			let {path} = ctx;
			path = Path.join(root, path);
			if (Path.relative(root, path).startsWith('..')) {
				throw 0;
			}
			let stats;
			try {
				stats = await FileSystem.promises.stat(path);
				if (stats.isDirectory()) {
					path = Path.join(path, index);
					stats = await FileSystem.promises.stat(path);
				}
			} catch (error) {
				path = Path.join(root, index);
				stats = await FileSystem.promises.stat(path);
			}
			ctx.status = 200;
			ctx.set('Cache-Control', 'public');
			ctx.set('Content-Length', stats.size);
			ctx.set('Last-Modified', stats.mtime.toUTCString());
			if (ctx.fresh) {
				ctx.status = 304;
			} else {
				ctx.type = Path.extname(path);
				ctx.body = FileSystem.createReadStream(path);
			}
		} catch (error) {
			ctx.throw(404);
		}
	};
};
