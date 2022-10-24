
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(

        createProxyMiddleware('/api/login',
            {
                target: 'https://three-points.herokuapp.com',
                changeOrigin: true,
            })
    );
    app.use(

        createProxyMiddleware('/api/posts',
            {
                target: 'https://three-points.herokuapp.com',
                changeOrigin: true,
            })
    );
}