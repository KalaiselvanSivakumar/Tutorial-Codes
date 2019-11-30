import React from 'react';
import { ITodoItemID } from '../interfaces/ITodoItemID';
import { Link } from 'react-router-dom';

type TodoItemProps = {
    item: ITodoItemID
}

export default function TodoItem(props: TodoItemProps) {
    const statusClassName = props.item.todo_completed ? 'completed' : '';
    return (
        <tr>
            <td className={ statusClassName }>{ props.item.todo_description }</td>
            <td className={ statusClassName }>{ props.item.todo_responsible }</td>
            <td className={ statusClassName }>{ props.item.todo_priority }</td>
            <td>
                <Link to={`/edit/${ props.item._id }`}>Edit</Link>
            </td>
        </tr>
    );
}
