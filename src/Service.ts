/**
 * Created by Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2016-11-04
 */

import { Observable } from 'rxjs';
import fetch from './fetch';

import Model, { Todo } from './Model';

export class Service {

	getTodos(): Observable<Todo[]> {
		return fetch('/todos').concatMap((todos: Todo[]) => Model.setTodos(todos)).publishReplay(1).refCount();
	}

	createTodo(todoContent: string): void {

		const todo: Todo = {
			id: Date.now(),
			status: 0,
			content: todoContent
		};

		fetch('/todos', {method: 'POST', body: JSON.stringify(todo)}).subscribe(() => Model.addTodo(todo));
	}

	removeTodo(todo: Todo): void {
		fetch(`/todos/${todo.id}`, {method: 'DELETE'}).subscribe(() => Model.removeTodo(todo));
	}

	updateTodoStatus(todo: Todo, status: number) {

		switch (status) {

			case 0:
				todo.status = 1;
				break;

			case 1:
				todo.status = 0;
				break;

			// no default
		}

		fetch(`/todos/${todo.id}`, {method: 'PUT', body: JSON.stringify(todo)}).subscribe(() => Model.updateTodo(todo));
	}

}

export default new Service();
