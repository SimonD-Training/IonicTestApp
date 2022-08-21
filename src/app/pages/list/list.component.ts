import { Component, OnInit } from '@angular/core'
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
	Items = [1, 2, 3, 4, 5]
	constructor() {}

	ngOnInit() {}
}
