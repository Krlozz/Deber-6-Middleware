import {Controller, Get, Req, Res} from "@nestjs/common";

@Controller('usuario')
export class UsuarioController {

    @Get('logueo')
    usuarioLogeoCookie(@Res() res,
                       @Req() req) {
        const parametros = {
            nombre: "Tu cookie",
            valor: "Tu cache"
        };
        res.cookie(parametros.nombre, parametros.valor);
        return res.send({menasaje: 'Tu cookie esta en cache'});
    }

}