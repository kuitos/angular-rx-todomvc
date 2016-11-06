/**
 * Created by Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2016-11-04
 */

import { Observable } from 'rxjs';

import Service from './Service';
import { Todo } from './Model';

export default class Controller {

	todo: string = '';

	todos$: Observable<Todo[]> = Service.getTodos();

	todosLength: Observable<number> = this.todos$.distinctUntilKeyChanged('length').map(todos => todos.length);
	doneTodosLength: Observable<number> = this.todos$.map(todos => todos.filter(todo => !!todo.status).length);

	addTodo(todoContent: string) {
		Service.createTodo(todoContent);
		this.todo = '';
	}

	removeTodo(todo: Todo) {
		Service.removeTodo(todo);
	}

	switchTodoStatus(todo: Todo, status: number) {
		Service.updateTodoStatus(todo, status);
	}

}
