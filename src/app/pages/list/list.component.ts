import { Component, OnInit } from '@angular/core'
import { Category } from 'src/app/interfaces/categories.interface';
import { Item } from 'src/app/interfaces/item.interface';
import { CategoryService } from 'src/app/services/category.service';
import { ListService } from 'src/app/services/list.service';
/**
 * IF YOUR NAME IS NOT IN THE FOLLOWING YOU SHOULD NOT BE HERE
 * SIMON MAXWELL
 * PRINCE WILLIS
 * DAEJHONNEL DENTON
 */

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	listArray: { class: string; toggle: boolean }[] = []
	Items: Item[] = []
	Categories: Category[] = []
	newItem: any = {}
	constructor(private shoppingService: ListService, private secondaryService: CategoryService) {
		shoppingService.getItems().subscribe((data) => {
			this.Items = data ?? []
			this.Items?.forEach(() => {
				this.listArray.push({ class: 'fa fa-pencil', toggle: true })
			})
		})
		secondaryService.getCategories().subscribe((data) => {
			this.Categories = data ?? []
		})
	}

	ngOnInit(): void {}

	/**
	 * Sends an http request for the creation of a new Item
	 * @param item - New item
	 */
	createItem(item: Item) {
		if (
			item.category == undefined ||
			item.name == undefined ||
			item.price == undefined ||
			item.price < 1 ||
			item.quantity == undefined ||
			item.quantity < 1
		)
			return
		console.log(item)

		this.shoppingService.createItem(item).subscribe((data) => {
			if (data) {
				this.Items.push(data)
				this.listArray.push({ class: 'fa fa-pencil', toggle: true })
				this.newItem = {}
			} else {
			}
		})
	}

	/**
	 * Toggles the 'marked' class of a given row
	 * @param row The row to modify
	 */
	mark(row: HTMLTableRowElement):void {
		row.classList.toggle('marked')
	}

	/**
	 * Sends an http request for the modification of an Item
	 * @param id - The id of the item
	 * @param item - The new state of the item
	 */
	updateItem(id: string, item: Item) {
		this.shoppingService.updateItem(id, item).subscribe((data) => {
			if (data) {
			} else {
			}
		})
	}

	/**
	 * Sends an http request for the deletion of an Item
	 * @param id  - the id of the item
	 */
	deleteItem(id: string) {
		this.shoppingService.deleteItem(id).subscribe((data) => {
			if (data) {
				this.Items = this.Items.filter((value) => value._id != id)
			} else {
			}
		})
	}
}
