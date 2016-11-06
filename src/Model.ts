/**
 * Created by Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2016-11-04
 */

import { Observable, BehaviorSubject } from 'rxjs';

export interface Todo {
	id: number,
	status: number,
	content: string
}

export class Model {

	private todos$: BehaviorSubject<Todo[]> = new BehaviorSubject([]);

	setTodos(todos: Todo[]): Observable<Todo[]> {
		this.todos$.next(todos);
		return this.todos$;
	}

	addTodo(todo: Todo) {
		const todos = [...this.todos$.getValue(), todo];
		return Observable.of(this.todos$.next(todos));
	}

	removeTodo(todo: Todo) {
		const todos = [...this.todos$.getValue()];
		todos.splice(todos.findIndex(v => v === todo), 1);
		return Observable.of(this.todos$.next(todos));
	}

	updateTodo(todo: Todo) {
		const todos = [...this.todos$.getValue()];
		todos.splice(todos.findIndex(v => v.id === todo.id), 1, todo);
		return Observable.of(this.todos$.next(todos));
	}

}

export default new Model();
