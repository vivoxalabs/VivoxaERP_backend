// import winston from 'winston'

// class Logger {
//   private readonly _logger: winston.Logger

//   constructor() {
//     this._logger = winston.createLogger({
//       transports: [
//         new winston.transports.File({ filename: "log/error.log", level: "error" }),
//         new winston.transports.File({ filename: "log/combined.log" })
//       ]
//     });

//     if (process.env.NODE_ENV !== 'producetion') {
//       this._logger.add(
//         new winston.transports.Console({
//           level: "debug",
//           format: winston.format.simple()
//         })
//       );
//     }
//   }

//   public info(section: string, body?: string) {
//     const ret = this.get_args(section, body)
//     this._logger.info(`[${ret.section}] ${ret.body}`)
//   }

//   public error(section: string, body?: string) {
//     const ret = this.get_args(section, body)
//     this._logger.error(`[${ret.section}] ${ret.body}`)
//   }

//   public debug(body: any) {
//     const ret = this.get_args('DEBUG', `${body}`)
//     this._logger.debug(`[${ret.section}] ${ret.body}`)
//   }

//   private get_args(section: string, body?: string): { section: string, body: string } {
//     if (!body) {
//       body = section
//       section = "GENERAL"
//     }
//     return {
//       section, body
//     }
//   }

// }

// export default new Logger();
