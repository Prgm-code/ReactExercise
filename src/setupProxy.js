
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
    app.use(

        createProxyMiddleware('/api/users',
            {
                target: 'https://three-points.herokuapp.com',
                changeOrigin: true,
            })
    );
    app.use(

        createProxyMiddleware('/api/posts/:id/like',
            {
                target: 'https://three-points.herokuapp.com',
                changeOrigin: true,
            })
    );
    app.use(
        createProxyMiddleware('/api/posts/:id/comments',
            {
                target: 'https://three-points.herokuapp.com',
                changeOrigin: true,
            })
    );
    app.use(
        createProxyMiddleware('/api/posts/:id',

            {
                target: 'https://three-points.herokuapp.com',
                changeOrigin: true,
            })
    );
    app.use(
        createProxyMiddleware('/api/posts/:id/comments/:id',
            {
                target: 'https://three-points.herokuapp.com',
                changeOrigin: true,
            })
    );
   
}