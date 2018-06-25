import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import http from 'http';
import socketIO from 'socket.io';

import ChatModel from './Model/ChatModel';

var app = express();

var dbConnectionURL = "mongodb://kalai:kalai123@localhost:27017/chatappdb";

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());

mongoose.connect(dbConnectionURL,
	(err) => {
		console.log("Database connnection", err);
	}
);

var httpServer = new http.Server(app);
var io = socketIO(httpServer);
io.on('connection', (socket: any) => {
	console.log('Socket is connected...', socket);
});

app.post('/chats', async (req, res) => {
	console.log(req.body);
	try {
		var chat = new ChatModel(req.body);
		await chat.save();
		res.sendStatus(200);

		// Emit the event
		io.emit('chat', req.body);
	}
	catch (err) {
		res.sendStatus(500);
		console.log(err);
	}
});

app.get('/chats', async (req, res) => {
	console.log(req.body);
	ChatModel.find({}, (error, chats) => {
		if (error) {
			console.log(error);
			res.sendStatus(500);
			return;
		}
		res.send(chats);
	});
});

var server = httpServer.listen(3020, () => {
	console.log('Listening on the port', server.address());
});
