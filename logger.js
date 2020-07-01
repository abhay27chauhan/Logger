const Logger = require("./index");

const logger = new Logger();

logger.on('message', data => {console.log('Called Successfully', data)});

logger.log("Hello World!")