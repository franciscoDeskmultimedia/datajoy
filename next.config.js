const path = require('path')
module.exports = {
	images:{
		domains: ['dev-datajoy.pantheonsite.io'],
	},
	trailingSlash: false,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}

		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
}