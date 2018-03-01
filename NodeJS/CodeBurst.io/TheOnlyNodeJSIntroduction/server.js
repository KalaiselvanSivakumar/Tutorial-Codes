const http = require('http'),
    url = require('url'),
    server = http.createServer();

server.on('request', (request, response) => {
    let path = url.parse(request.url).pathname;
    console.log('Request path:', path);
    switch (path.toLowerCase()) {
        case '/':
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.write('Hello World!');
            break;
        case '/about':
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.write('About page');
            break;
        case '/blog':
            response.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            response.write('Blog page');
            break;
        default:
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            response.write('Error page');
            break;
    }
    response.end();
});

server.listen(3000, () => {
    console.log('Node server created at the port 3000');
});
