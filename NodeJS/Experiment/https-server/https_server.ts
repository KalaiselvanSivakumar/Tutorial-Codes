import * as https from 'https';
import * as fs from 'fs';

/**
 * https server requires signed certificates.
 * It can be self-signed or Certificate Authority (CA) signed.
 * Self-signed are not trusted and CA signed are trusted.
 * To create self-signed certificate, use the following command
 * openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout privateKey.key -out certificate.crt
 *      where privateKey.key and certificate.crt are the filenames and extensions
 */
const options: https.ServerOptions = {
    key: fs.readFileSync('privatekey.key'),
    cert: fs.readFileSync('certificate.crt')
};

const server = https.createServer(options, function(request, response) {
    response.writeHead(200);
    response.end('HTTPS Server resposne');
});

server.listen(11000);
console.log('https server started in 11000');
