import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Module, NestModule} from "@nestjs/common";
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares";
import {LogMiddleware} from "./log.middleware";
import {CookieMiddleware} from "./cookie.middleware";
import {UsuarioController} from "./usuario.controller";

@Module({
    imports: [],
    controllers: [AppController,UsuarioController],
    providers: [AppService],
})
export class AppModule implements NestModule{
    configure(consumer: MiddlewaresConsumer){

        // 1° parte
        consumer
            .apply(LogMiddleware)
            .with('todo') // parametro del middleware
            .forRoutes(AppController);

        // 2° parte
        /*consumer
            .apply(CookieMiddleware)
            .forRoutes(UsuarioController)*/

    }
}