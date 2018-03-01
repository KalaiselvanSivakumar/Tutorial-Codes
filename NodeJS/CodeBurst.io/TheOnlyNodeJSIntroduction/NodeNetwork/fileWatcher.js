const net = require('net'),
    fs = require('fs'),
    filename = process.argv[2];

const server = net.createServer(function (connection) {
    console.log('Subscriber connected.');
    connection.write(`watching ${filename} for changes`);
    // File watcher creation
    let watcher = fs.watch(filename, (err, data) => {
        connection.write(`${filename} has changed`);
    });
    // Closing the watcher if connection terminated
    // Try multiple connections and closing it
    connection.on('close', () => {
        console.log('Subscriber disconnected');
        watcher.close();
    })
});

server.listen(3000, () => { console.log('Server started at port 3000'); });
