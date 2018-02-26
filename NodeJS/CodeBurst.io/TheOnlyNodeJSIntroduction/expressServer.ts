import * as express from "express";
import { request } from "http";

const server = express();

server.set('port', process.env.port || 3000);

server.get('/', (request, response) => {
    response.send('Home page');
});

server.get('/about', (request, response) => {
    response.send('About page');
});

server.use((request, response) => {
    response.type('text/plain');
    response.status(505);
    response.send('Error page');
});

server.listen(3000, () => {
    console.log('Express server started at the port 3000');
});
