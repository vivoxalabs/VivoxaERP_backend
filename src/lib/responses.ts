// import { Response } from "express"
// import * as httpStatus from 'http-status-codes'

// export const HttpStatus = httpStatus

// export class JSONResponse {

//   private res: Response

//   constructor(res: Response) {
//     this.res = res
//   }

//   public sendSuccess(data: object) {
//     this.send(true, "SUCCESS", data, httpStatus.OK)
//   }

//   public sendError(message: string, data?: object, code?: number) {
//     code = code || httpStatus.INTERNAL_SERVER_ERROR
//     data = data || undefined
//     if (data && Object.keys(data).length === 0) data = undefined
//     this.send(false, message, data, code)
//   }

//   public sendUnauthorized() {
//     this.sendError('Unauthorized', {}, httpStatus.UNAUTHORIZED)
//   }

//   public sendBadRequest(message?: string) {
//     this.sendError(message || 'Bad Request', {}, httpStatus.BAD_REQUEST)
//   }

//   public sendNotFound() {
//     this.sendError('Not Found', {}, httpStatus.NOT_FOUND)
//   }

//   public sendInternalServerError() {
//     this.sendError('Internal Server Error', {}, httpStatus.INTERNAL_SERVER_ERROR)
//   }

//   private send(success: boolean, message: string, data?: object, code?: number) {
//     code = code || httpStatus.OK
//     this.res.status(code).json({
//       success,
//       message,
//       data
//     }).end()
//   }

// }