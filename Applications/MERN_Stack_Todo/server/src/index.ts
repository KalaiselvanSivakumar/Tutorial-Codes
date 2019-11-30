import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import { MONGODB_URL, PORT } from './config/ServerConstants';
import baseGet from './routes/base.get';
import setTodoRoutes from './routes/TodoRouter';

const app = express();
app.use(cors());
app.use(bodyParser.json());

baseGet(app);
setTodoRoutes(app);

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
});

export default app;
