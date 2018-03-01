const express = require('express'),
    server = express(),
    users = require('./users');

// Setting the port
server.set('port', process.env.PORT || 3000);

// Adding the routes
server.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

server.get('/jquery-3.3.1.js', (request, response) => {
    response.sendFile(__dirname + '/jquery-3.3.1.js');
});

server.get('/users', (request, response) => {
    response.json(users);
});

server.listen(3000, () => {
    console.log('Server started at the port 3000');
})
