const winston = require("winston");
const { combine, timestamp, json, colorize } = winston.format;
class Logger {
    constructor() {
        console.log('Inicializadon Logger')
        this._logger = winston.createLogger({
            level: "debug",
            format: combine(timestamp(), json(), colorize()),
            transports: [new winston.transports.Console()]
    });
    }

    info(app_name, mensaje){
        this._logger.info(`[${app_name}]: ${mensaje}`)
    }

    debug(app_name, mensaje) {
        this._logger.debug(`[${app_name}]: ${mensaje}`)
    }
}

const logger = new Logger();


module.exports = logger;