export interface JSONResponse<T> {
  status: number,
  message: string,
  data? : T,
  error? : any
}
