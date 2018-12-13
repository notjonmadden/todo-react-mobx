import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Todo from './models/todo';
import { autorun, observable, toJS } from 'mobx';

const store = observable({
    editing: null,
    todos: [],
    get completeCount() {
        return this.todos.filter(t => t.done).length;
    },
    deleteTodo(todo) {
        const idxTodo = this.todos.indexOf(todo);
        this.todos.splice(idxTodo, 1);
    }
});

autorun(() => console.log(store.todos.map(t => toJS(t))));

ReactDOM.render(<App store={store} />, document.getElementById('root'));

store.todos.push(new Todo('Go to interview'));
store.todos.push(new Todo('Celebrate!'));
store.todos[0].text = "Ace interview";
store.todos[0].text = "Study for interview";
store.todos[0].done = true;

store.todos[1].text = 'Party hard!';
store.todos[1].done = true;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

