import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/categories.interface';
import { JSONResponse } from '../interfaces/json_response.interface';
/**
 * IF YOUR NAME IS NOT IN THE FOLLOWING YOU SHOULD NOT BE HERE
 * SIMON MAXWELL
 * DONTE PATTERSON
 */

@Injectable({
	providedIn: 'root',
})
export class CategoryService {
	constructor(private http: HttpClient) {}

	/**
	 * Requests the creation of a category
	 * @param body - New category
	 * @returns Observable carrying response data from the api, or an error
	 */
	 createCategory(body: Category) {
		let obs = new Observable<Category | null>((observer) => {
			this.http
				.post<JSONResponse<Category>>(environment.apiUrl + '/categories', body, {
					observe: 'response',
				})
				.subscribe({
					next: (response) => {
						if (response.body?.data) observer.next(response.body.data)
						observer.complete()
					},
					error: (err: HttpErrorResponse) => {
						console.log(err.error)
						observer.next(null)
						observer.complete()
					},
				})
		})
		return obs
	}

	/**
	 * Requests the seeking of all Categories
	 * @returns Observable carrying response data from the api, or an error
	 */
	 getCategories() {
		let obs = new Observable<Category[] | null>((observer) => {
			this.http
				.get<JSONResponse<Category[]>>(environment.apiUrl + '/categories', {
					observe: 'response',
				})
				.subscribe({
					next: (response) => {
						if (response.body?.data) observer.next(response.body.data)
						observer.complete()
					},
					error: (err: HttpErrorResponse) => {
						console.log(err.error)
						observer.next(null)
						observer.complete()
					},
				})
		})
		return obs
	}

	/**
	 * Requests the updating of an Category
	 * @param id - Id of the category
	 * @param body - New category information
	 * @returns Observable carrying the data from the api, or an error
	 */
	 updateCategory(id: string, body: Category) {
		let obs = new Observable<Category | null>((observer) => {
			this.http
				.patch<JSONResponse<Category>>(environment.apiUrl + `/categories/${id}`, body, {
					observe: 'response',
				})
				.subscribe({
					next: (response) => {
						if (response.body?.data) observer.next(response.body.data)
						observer.complete()
					},
					error: (err: HttpErrorResponse) => {
						console.log(err.error)
						observer.next(null)
						observer.complete()
					},
				})
		})
		return obs
	}

	/**
	 * Request the deletion of a Category
	 * @param id - Id of the category
	 * @returns Observable carrying the data from the api, or an error
	 */
	 deleteCategory(id: string) {
		let obs = new Observable<Category | null>((observer) => {
			this.http
				.delete<JSONResponse<Category>>(environment.apiUrl + `/categories/${id}`, {
					observe: 'response',
				})
				.subscribe({
					next: (response) => {
						if (response.body?.data) observer.next(response.body.data)
						observer.complete()
					},
					error: (err: HttpErrorResponse) => {
						console.log(err.error)
						observer.next(null)
						observer.complete()
					},
				})
		})
		return obs
	}
}
