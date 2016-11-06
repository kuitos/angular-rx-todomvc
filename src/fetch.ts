/**
 * @author Kuitos
 * @homepage https://github.com/kuitos/
 * @since 2016-11-04
 */

import { Observable } from 'rxjs';

const headers = new Headers({'Content-Type': 'application/json'});

export default function fetch<T>(url: RequestInfo, init?: RequestInit): Observable<T> {
	return Observable.fromPromise<T>(window.fetch(url, Object.assign({}, init, {headers})).then(response => response.json()));
}
