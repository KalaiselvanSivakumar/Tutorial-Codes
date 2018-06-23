import express from "express";
import mongoose from "mongoose";


var app = express();

var conString = "mongodb://kalai:kalai123@localhost:27017/chatappdb";

app.use(express.static(__dirname));

interface IChat {
	name: string;
	chat: string;
}

interface IChatModel extends IChat, mongoose.Document { }

var chatSchema = new mongoose.Schema({
	name: String,
	chat: String
});

var chats = mongoose.model<IChatModel>("Chats", chatSchema);

mongoose.connect(conString,
	(err) => {
		console.log("Database connnection", err);
	}
);

app.listen(3020, () => {
	console.log('Listening in the port 3020');
});
