import mongoose from 'mongoose';
import IChat from './IChat';

interface IChatModel extends IChat, mongoose.Document { }

export = IChatModel;