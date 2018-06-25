import mongoose from 'mongoose';

var ChatSchema = new mongoose.Schema(
	{
		name: String,
		message: String
	}
);

export = ChatSchema;