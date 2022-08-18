export class Category {
	_id?: string
	name: string
	constructor(name: string, _id?: string) {
		this._id = _id
		this.name = name
	}
}
