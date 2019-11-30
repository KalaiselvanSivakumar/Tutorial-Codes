import React, { Component, SyntheticEvent } from 'react';

type CreateTodoProps = {};
type CreateTodoState = {
    todo_description: string,
    todo_responsible: string,
    todo_priority: string,
    todo_completed: boolean,
};

export default class CreateTodo extends Component<CreateTodoProps, CreateTodoState> {

    constructor(props: CreateTodoProps) {
        super(props);
        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        };

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTodoDescription(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState(
            {
                todo_description: event.target.value
            }
        );
    }

    onChangeTodoResponsible(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState(
            {
                todo_responsible: event.target.value
            }
        );
    }

    onChangeTodoPriority(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState(
            {
                todo_priority: event.target.value
            }
        );
    }

    // Type of event can simply be "React.FormEvent"
    onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(
            `Form Submitted:\nTodo Description: ${ this.state.todo_description
            }\nTodo Responsible: ${ this.state.todo_responsible
            }\nTodo Priority: ${ this.state.todo_priority }`
        );
        this.setState(
            {
                todo_description: '',
                todo_responsible: '',
                todo_priority: '',
                todo_completed: false
            }
        );
    }

    render() {
        return (
            <div style={ {marginTop: 10} }>
                <h3>Create New Todo</h3>
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={ this.state.todo_description }
                            onChange={ this.onChangeTodoDescription }
                        />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input type="text"
                            className="form-control"
                            value={ this.state.todo_responsible }
                            onChange={ this.onChangeTodoResponsible }
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
                                    checked={this.state.todo_priority === 'Low'}
                                    onChange={ this.onChangeTodoPriority }
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
                                    checked={this.state.todo_priority === 'Medium'}
                                    onChange={ this.onChangeTodoPriority }
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
                                    checked={this.state.todo_priority === 'High'}
                                    onChange={ this.onChangeTodoPriority }
                                />High
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        );
    }

}
