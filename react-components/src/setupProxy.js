const { createProxyMiddleware } = require('http-proxy-middleware');

// Proxy API requests in development to the deployed Vercel backend
// Keeps frontend code using relative /api paths while hitting production API
module.exports = function (app) {
	app.use(
		'/api',
		createProxyMiddleware({
			target: process.env.REACT_APP_API_URL || 'https://sid-portfolio-api.vercel.app',
			changeOrigin: true,
		})
	);
};

