import {Middleware} from "@nestjs/common/utils/decorators/component.decorator";
import {ExpressMiddleware} from "@nestjs/common/interfaces/middlewares/express-middleware.interface";
import {NestMiddleware} from "@nestjs/common";

@Middleware()
export class CookieMiddleware implements NestMiddleware{
    resolve(): ExpressMiddleware {
        return (request, response, next) => {

            if (request.cookies!=null)
                console.log("EN CACHE");
            else
                console.log("NO EN CACHE");

            next();
        };
    }
}