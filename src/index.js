import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observable,computed} from 'mobx';
import {observer} from 'mobx-react';


class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}


@observer
class TodoListView extends Component {
    render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map(todo =>
                    <TodoView key={todo.id}
                        todo={todo}
                    />
                )}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>;
    }
}

const TodoView = observer(({todo}) =>
    <li>
        <input
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
            type="checkbox"
        />{todo.title}
    </li>
);



const store = new TodoList();
store.todos.push({
    id:1,
    finished:true
},{
    id:2,
    finished:false
},{
    id:3,
    finished:true
});
setTimeout(()=>{
    store.todos.push({
        id:4,
        finished:false
    });
},3000);
ReactDOM.render(<TodoListView todoList={store} />, document.getElementById('app'));
