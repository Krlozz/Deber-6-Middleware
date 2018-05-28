import {Controller, Get, Req, Res} from "@nestjs/common";

@Controller('usuario')
export class UsuarioController {

    @Get('logueo')
    usuarioLogueoCookie(@Res() res,
                       @Req() req) {
        const parametros = {
            nombre: "Tu cookie",
            valor: "Tu cache"
        };
        //console.log(req.cookies)
        res.cookie(parametros.nombre, parametros.valor);

        return res.send({mensaje: 'Tu cookie esta en cache'});

    }

}