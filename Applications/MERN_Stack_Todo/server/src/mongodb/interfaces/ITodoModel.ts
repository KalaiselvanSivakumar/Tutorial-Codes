import { Document } from 'mongoose';
import { ITodo } from './ITodo';

export interface ITodoModel extends ITodo, Document {}
