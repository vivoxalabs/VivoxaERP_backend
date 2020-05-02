// // import { DB, getDB } from '../db'
// // import mailer, { Mailer } from './mailer'
// // import memcache, { MemCache } from './memCache'
// // import smsGateway, { ISMSGateway } from './smsGateway'

// import config from "./config"
// import { IAMService } from "./services/iamService"
// import { DB } from "./db"
// import { Error } from "mongoose"
// import logger from "./logger"

// export class Context {

//   private _iamService: IAMService | null = null
//   private _db: DB | null = null

//   public get iamService(): IAMService {
//     this.checkValue(this._iamService)
//     return this._iamService!!
//   }

//   public get db(): DB {
//     this.checkValue(this._db)
//     return this._db!!
//   }

//   //   public get memcache(): MemCache {
//   //     return memcache
//   //   }

//   //   public get mailer(): Mailer {
//   //     return mailer
//   //   }

//   //   public get smsGateway(): ISMSGateway {
//   //     return smsGateway.getInstance()
//   //   }

//   public get isDebug(): boolean {
//     // return false
//     return process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development'
//   }

//   //   public get isRealSMS(): boolean {
//   //     return process.env.APP_REAL_SMS === '1'
//   //   }

//   private checkValue(val: any) {
//     if (val == null) {
//       throw new Error("Should Run Setup first!")
//     }
//   }

//   public async setup() {
//     // SETUP DB
//     const user = encodeURIComponent(config.MONGO_USER)
//     const pass = encodeURIComponent(config.MONGO_PASS)
//     const url = `mongodb://${user}:${pass}@${config.MONGO_HOST}:${config.MONGO_PORT}/${config.MONGO_NAME}?authSource=admin`;
//     this._db = new DB()
//     await this._db.setupConnection(url)
//     logger.debug('INIT: Database Connection')


//     // SETUP IAM
//     const URL = `${config.IAM_SERVICE_HTTPS ? 'https' : 'http'}://${config.IAM_SERVICE_HOST}:${config.IAM_SERVICE_PORT}`
//     this._iamService = new IAMService(URL, config.IAM_SERVICE_KEY, config.IAM_SERVICE_UUID)
//     logger.debug('INIT: IAMService')
//   }

// }

// export default new Context()
