import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { observer } from 'mobx-react';
import Entry from './components/Entry';
import Todo from './models/todo';
import { action } from 'mobx';

@observer
class App extends React.Component {
  render() {
    return (
      <div>
        <Entry onSubmit={t => this.addTodo(t)}/>
        <TodoList 
          store={this.props.store} 
          onTodoBeginEdit={t => this.props.store.editing = t.id}
          onTodoEndEdit={t => this.props.store.editing = null} />
        <p>{this.props.store.completeCount} / {this.props.store.todos.length} done!</p>
      </div>
    );
  }

  @action addTodo(text) {
    this.props.store.todos.push(new Todo(text));
  }
}

export default App;
