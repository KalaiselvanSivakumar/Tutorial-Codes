import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ITodoItemID } from '../interfaces/ITodoItemID';
import TodoItem from "./TodoItem.component";

type ListTodoProps = {};
type ListTodoState = {
    todos: Array<ITodoItemID>
}

export default class ListTodo extends Component<ListTodoProps, ListTodoState> {

    constructor(props: ListTodoProps) {
        super(props);
        this.state = {
            todos: []
        };
        this.getTodoList = this.getTodoList.bind(this);
    }

    componentDidMount() {
        axios.get(
            'http://localhost:4000/todos'
        ).then(response => {
            this.setState({
                todos: response.data
            })
        }).catch(error => {
            console.log(error);
        })
    }

    getTodoList() {
        const todoItems = this.state.todos;
        return todoItems.map((todoItem) => {
            return (
                <TodoItem key={ todoItem._id } item={ todoItem } />
            );
        });
    }

    render() {
        console.log('ListTodo Component called');
        return (
            <div>
                <h3>Todo List</h3>
                <table className="table table-striped"
                    style={{marginTop: 20}}>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Responsible</th>
                                <th>Priority</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.getTodoList() }
                        </tbody>
                </table>
            </div>
        );
    }

}
