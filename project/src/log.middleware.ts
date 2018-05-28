import {Middleware} from "@nestjs/common/utils/decorators/component.decorator";
import {ExpressMiddleware} from "@nestjs/common/interfaces/middlewares/express-middleware.interface";
import {NestMiddleware} from "@nestjs/common";
const fs = require('fs');

@Middleware()
export class LogMiddleware implements NestMiddleware{

    resolve(nivelDeLog: string): ExpressMiddleware {
        return (request, response, next) => {
            switch (nivelDeLog){
                case "archivo":
                    this.guardarArchivoLog(request);
                    next();
                    break;
                case "consola":
                    console.log(this.getRespuesta(request));
                    next();
                    break;
                case "todo":this.guardarArchivoLog(request);
                    console.log(this.getRespuesta(request));
                    next();
                    break;
            }
        };
    }

    getRespuesta(req){
        const respuesta = {
            baseUrl: req.baseUrl,
            hostname: req.hostname,
            subdomains: req.subdomains,
            ip: req.ip,
            method: req.method,
            originalUrl: req.originalUrl,
            path: req.path,
            protocol: req.protocol,
            headers: req.headers,
        };
        return respuesta;
    }

    guardarArchivoLog(req){
        let contenido = JSON.stringify(this.getRespuesta(req))
        fs.writeFileSync(__dirname+'/Logs/logs.txt', contenido);
    }
}