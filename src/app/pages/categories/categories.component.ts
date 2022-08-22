import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { Category } from 'src/app/interfaces/categories.interface';
import { CategoryService } from 'src/app/services/category.service';
/**
 * IF YOUR NAME IS NOT IN THE FOLLOWING YOU SHOULD NOT BE HERE
 * SIMON MAXWELL
 * PRINCE WILLIS
 * DAEJHONNEL DENTON
 */

@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements AfterViewInit {
	listArray: { class: string; toggle: boolean }[] = []
	Categories: Category[] = []
	newCat: any = {}
	/**
	 * Initiates the Categories array upon construction
	 * @param shoppingService
	 */
	constructor(private shoppingService: CategoryService) {
		shoppingService.getCategories().subscribe((data) => {
			this.Categories = data ?? []
			this.Categories?.forEach(() => {
				this.listArray.push({ class: 'fa fa-pencil', toggle: true })
			})
		})
	}

	@ViewChild('popup') Popup!: ElementRef<HTMLSpanElement>
	popupMsg = ''
	popupFunc!: Function
	popupCancel() {
		this.Popup.nativeElement.style.display = 'none'
	}

	ngAfterViewInit(): void {
		this.Popup.nativeElement.style.borderRadius = '5px'
		this.Popup.nativeElement.style.padding = '20px'
		this.Popup.nativeElement.style.position = 'fixed'
		this.Popup.nativeElement.style.top = '50%'
		this.Popup.nativeElement.style.left = '50%'
		this.Popup.nativeElement.style.transform = 'translate(-50%,-50%)'
		this.Popup.nativeElement.style.display = 'none'
	}

	/**
	 * Sends an http request for the creation of a new Category
	 * @param category - New Category
	 */
	createCategory(category: Category) {
		if (category.name == undefined) return
		this.shoppingService.createCategory(category).subscribe((data) => {
			if (data) {
				this.Categories.push(data)
				this.listArray.push({ class: 'fa fa-pencil', toggle: true })
				this.newCat = {}
			} else {
			}
		})
	}

	/**
	 * Sends an http request for the modification of a Category
	 * @param id - The id of the Category
	 * @param category - The new state of the Category
	 */
	updateCategory(id: string, category: Category) {
		this.shoppingService.updateCategory(id, category).subscribe((data) => {
			if (data) {
			} else {
			}
		})
	}

	/**
	 * Sends an http request for the deletion of a Category
	 * @param id - The id of the Category
	 */
	deleteCategory(id: string) {
		this.popupMsg = 'Deleting a category will also delete all dependent items!'
		this.popupFunc = () => {
			this.Popup.nativeElement.style.display = 'none'
			this.shoppingService.deleteCategory(id).subscribe((data) => {
				if (data) {
					this.Categories = this.Categories.filter((value) => value._id != id)
				} else {
				}
			})
		}
		this.Popup.nativeElement.style.display = 'flex'
		this.Popup.nativeElement.style.flexDirection = 'column'
		this.Popup.nativeElement.style.alignItems = 'center'
	}
}
