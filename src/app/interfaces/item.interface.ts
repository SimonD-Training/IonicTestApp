/**
 * IF YOUR NAME IS NOT IN THE FOLLOWING YOU SHOULD NOT BE HERE
 * SIMON MAXWELL
 * ANTHONY BARRETT
 */
export class Item {
	_id?: string
	category: string
	name: string
	price: number
	quantity: number
	__v?: number
	constructor(
		category: string,
		name: string,
		price: number,
		quantity: number,
		_id?: string,
		__v?: number
	) {
		this._id = _id
		this.category = category
		this.name = name
		this.price = price
		this.quantity = quantity
		this.__v = __v
	}
}
