import {Middleware} from "@nestjs/common/utils/decorators/component.decorator";
import {ExpressMiddleware} from "@nestjs/common/interfaces/middlewares/express-middleware.interface";
import {NestMiddleware} from "@nestjs/common";

@Middleware()
export class CookieMiddleware implements NestMiddleware{
    resolve(): ExpressMiddleware {
        return (request, response, next) => {     //   Obtención de la cookie
            if (request.cookies!=null)
                console.log("Esta en cache...!!!");
            else
                console.log("No se encuentra en cache...!!!");
            next();
        };
    }
}