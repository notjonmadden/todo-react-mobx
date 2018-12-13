import React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import { debounce } from 'underscore';
import '../Todo.css';

@observer 
class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.onTextChange = debounce(this.onTextChange, 250);
    }

    render() {
        const { todo, editing } = this.props;

        this.checkboxRef = React.createRef();
        this.textRef = React.createRef();

        return (
            <li style={{ display: "flex" }}>
                <input type="checkbox" checked={todo.done} onChange={() => this.onChange()} ref={this.checkboxRef} />
                {editing
                ? (
                    <form onSubmit={() => this.onSubmit()}>
                        <input type="text" defaultValue={todo.text} onChange={() => this.onTextChange()} ref={this.textRef}  />
                        <input type="submit" value="Save" />
                    </form>
                )
                : (
                    <div>
                        <span onDoubleClick={this.props.onBeginEdit}>{todo.text}</span>
                        <a href="#" class="delete-todo" onClick={() => this.onDeleteClick()} style={{ marginLeft: ".5em" }}>delete</a>
                    </div>
                )}
            </li>
        );
    }

    @action onChange(e) {
        this.props.todo.done = this.checkboxRef.current.checked;
    }

    @action onTextChange() {
        this.props.todo.text = this.textRef.current.value;
    }

    onDeleteClick() {
        this.props.onDelete(this.props.todo);
    }

    onSubmit() {
        this.props.onEndEdit();
    }
}

export default Todo;