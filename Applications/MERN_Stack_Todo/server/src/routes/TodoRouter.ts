import express from 'express';
import TodoModel from '../mongodb/models/todo.model';

const todoRouter = express.Router();
todoRouter
    .route('/')
    .get((request, response) => {
        console.log(`${ request.url }: Get all todoItems requested`);
        TodoModel.find((error, todoItems) => {
            if (error) {
                console.error(error);
            }
            else {
                response.json(todoItems);
            }
        });
    });

todoRouter
    .route('/add')
    .get((request, response) => {
        // console.log('Addition request received');
        // console.log(request.body);
        const todoItem = new TodoModel(request.body);
        todoItem
            .save()
            .then(() => {
                response
                    .status(200)
                    .json({
                        message: 'Todo added successfully',
                    });
            })
            .catch(() => {
                response
                    .status(400)
                    .send('Adding new Todo failed');
            });
    });

todoRouter
    .route('/:id')
    .get((request, response) => {
        // console.log('ID retrieval received');
        const id = request.params.id;
        TodoModel.findById(id, (error, todoItem) => {
            if (error) {
                console.error(error);
            }
            else {
                response.json(todoItem);
            }
        });
    });

todoRouter
    .route('/update/:id')
    .post((request, response) => {
        TodoModel.findById(request.params.id, (error, todoItem) => {
            if (error) {
                console.error(error);
            }
            if (!todoItem) {
                response
                    .status(404)
                    .send('Data not found');
            }
            else {
                todoItem.todo_description = request.body.todo_description;
                todoItem.todo_responsible = request.body.todo_responsible;
                todoItem.todo_priority = request.body.todo_priority;
                todoItem.todo_completed = request.body.todo_completed;

                todoItem
                    .save()
                    .then(() => {
                        response.json({
                            message: 'Todo updated!',
                        });
                    })
                    .catch((errorInUpdate) => {
                        console.log(errorInUpdate);
                        response
                            .status(400)
                            .send('Update not possible');
                    });
            }
        });
    });

const setTodoRoutes = (app: express.Application) => {
    app.use('/todos', todoRouter);
};

export default setTodoRoutes;
