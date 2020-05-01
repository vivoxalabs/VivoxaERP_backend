// import logger from './logger'

// const APP_HOST = 'APP_HOST'
// const APP_PORT = 'APP_PORT'
// const APP_SECRET = 'APP_SECRET'
// const APP_SALT_ROUNDS = 'APP_SALT_ROUNDS'

// const MONGO_HOST = 'MONGO_HOST'
// const MONGO_PORT = 'MONGO_PORT'
// const MONGO_USER = 'MONGO_USER'
// const MONGO_PASS = 'MONGO_PASS'
// const MONGO_NAME = 'MONGO_NAME'

// const IAM_SERVICE_KEY = 'IAM_SERVICE_KEY'
// const IAM_SERVICE_UUID = 'IAM_SERVICE_UUID'
// const IAM_SERVICE_HOST = 'IAM_SERVICE_HOST'
// const IAM_SERVICE_PORT = 'IAM_SERVICE_PORT'
// const IAM_SERVICE_HTTPS = 'IAM_SERVICE_HTTPS'

// function envVarToInt(key: string, defaultVal?: number): number {
//   let envVal = process.env[key]
//   if (envVal === undefined) {
//     envVal = `${defaultVal || ''}`
//   }
//   const r = parseInt(envVal, 10)
//   if (!isNaN(r)) {
//     return r
//   }
//   logger.error(`environment varialbe ${key} not found`)
//   process.exit(1)
// }

// function envVarToStr(key: string, defaultVal?: string): string {
//   const envVal = process.env[key]
//   if (envVal === undefined && defaultVal === undefined) {
//     logger.error(`environment varialbe ${key} not found`)
//     process.exit(1)
//   }
//   return `${envVal || defaultVal}`
// }

// function envVarToBool(key: string, defaultVal?: boolean): boolean {
//   const envVal = process.env[key]
//   if (envVal === undefined && defaultVal === undefined) {
//     logger.error(`environment varialbe ${key} not found`)
//     process.exit(1)
//   }
//   if (envVal === undefined && defaultVal !== undefined) {
//     return defaultVal
//   }
//   switch (envVal) {
//     case "true":
//     case "1":
//     case "on":
//     case "yes":
//       return true;
//     default:
//       return false;
//   }
// }

// const config = {
//   APP_HOST: envVarToStr(APP_HOST),
//   APP_PORT: envVarToInt(APP_PORT),
//   APP_SALT_ROUNDS: envVarToInt(APP_SALT_ROUNDS),
//   APP_SECRET: envVarToStr(APP_SECRET),

//   MONGO_HOST: envVarToStr(MONGO_HOST),
//   MONGO_PORT: envVarToInt(MONGO_PORT),
//   MONGO_USER: envVarToStr(MONGO_USER),
//   MONGO_PASS: envVarToStr(MONGO_PASS),
//   MONGO_NAME: envVarToStr(MONGO_NAME),

//   IAM_SERVICE_KEY: envVarToStr(IAM_SERVICE_KEY),
//   IAM_SERVICE_UUID: envVarToStr(IAM_SERVICE_UUID),
//   IAM_SERVICE_HOST: envVarToStr(IAM_SERVICE_HOST),
//   IAM_SERVICE_PORT: envVarToInt(IAM_SERVICE_PORT),
//   IAM_SERVICE_HTTPS: envVarToBool(IAM_SERVICE_HTTPS)
// }

// logger.info('INIT', 'Config')

// export default config
