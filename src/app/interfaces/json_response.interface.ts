/**
 * IF YOUR NAME IS NOT IN THE FOLLOWING YOU SHOULD NOT BE HERE
 * SIMON MAXWELL
 * ANTHONY BARRETT
 */
export interface JSONResponse<T> {
	status: number
	message: string
	data?: T
	error?: any
}
