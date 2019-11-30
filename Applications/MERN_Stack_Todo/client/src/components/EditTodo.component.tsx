import React, { Component } from 'react';
import axios from 'axios';
import { ITodoItem } from '../interfaces/ITodoItem';
import { RouteComponentProps } from 'react-router';

type EditTodoRouteParams = {
    id: string
}

type EditTodoProps = RouteComponentProps<EditTodoRouteParams>;
type EditTodoState = ITodoItem;

export default class EditTodo extends Component<EditTodoProps, EditTodoState> {

    constructor(props: EditTodoProps) {
        super(props);
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        };
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeResponsible = this.onChangeResponsible.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeCompletion = this.onChangeCompletion.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.get(
            `http://localhost:4000/todos/${ this.props.match.params.id }`
        ).then(
            response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed,
                });
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    }

    onChangeDescription(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            todo_description: event.target.value
        });
    }

    onChangeResponsible(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            todo_responsible: event.target.value
        });
    }

    onChangePriority(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            todo_priority: event.target.value
        });
    }

    onChangeCompletion(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            todo_completed: event.target.checked
        });
    }

    onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const todoItem: ITodoItem = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        axios.post(
            `http://localhost:4000/todos/update/${ this.props.match.params.id }`,
            todoItem
        ).then(
            response => {
                console.log(response.data);
                this.props.history.push('/');
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    }

    render() {
        return (
            <div>
                <h3 style={ {textAlign: "center"} }>Update Todo</h3>
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text"
                            className="form-control"
                            value={ this.state.todo_description }
                            onChange={ this.onChangeDescription }
                        />
                    </div>
                    <div className="form-group">
                        <label>Responsible:</label>
                        <input type="text"
                            className="form-control"
                            value={ this.state.todo_responsible }
                            onChange={ this.onChangeResponsible }
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input type="radio"
                                    className="form-check-input"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={ this.state.todo_priority === 'Low' }
                                    onChange={ this.onChangePriority }
                                />Low
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input type="radio"
                                    className="form-check-input"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={ this.state.todo_priority === 'Medium' }
                                    onChange={ this.onChangePriority }
                                />Medium
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input type="radio"
                                    className="form-check-input"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={ this.state.todo_priority === 'High' }
                                    onChange={ this.onChangePriority }
                                />High
                            </label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input type="checkbox"
                            className="form-check-input"
                            id="completedCheckbox"
                            name="completedCheckbox"
                            checked={ this.state.todo_completed }
                            onChange={ this.onChangeCompletion }
                            />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit"
                            value="Update Todo"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }

}
