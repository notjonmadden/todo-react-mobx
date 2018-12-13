import React from 'react';
import { observer } from 'mobx-react';
import Todo from './Todo';

@observer class TodoList extends React.Component {
    render() {
        const { todos, editing } = this.props.store;

        return (
            <ul style={{ listStyle: "none" }}>
                {todos.map(t => (
                    <li key={t.id}>
                        <Todo 
                            onBeginEdit={() => this.props.onTodoBeginEdit(t)}
                            onEndEdit={() => this.props.onTodoEndEdit(t)}
                            onDelete={t => this.props.store.deleteTodo(t)}
                            todo={t}
                            editing={t.id === editing } />
                    </li>) )}
            </ul>
        )
    }
}

export default TodoList;