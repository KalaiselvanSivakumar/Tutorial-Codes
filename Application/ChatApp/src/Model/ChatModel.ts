import mongoose from 'mongoose';

import IChatModel from '../Interface/IChatModel';
import ChatSchema from '../Schema/ChatSchema';

var ChatModel = mongoose.model<IChatModel>('chat', ChatSchema);

export = ChatModel;