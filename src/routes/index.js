
const express = require("express");
//const controller = require()

const router = express.Router();


        const usuarioRoutes = require("./../modules/usuario/usuario.router");
        router.use("/usuario", usuarioRoutes);
    

        const grupoRoutes = require("./../modules/grupo/grupo.router");
        router.use("/grupo", grupoRoutes);
    

        const salaRoutes = require("./../modules/sala/sala.router");
        router.use("/sala", salaRoutes);
    

        const mensajeRoutes = require("./../modules/mensaje/mensaje.router");
        router.use("/mensaje", mensajeRoutes);
    

        const sesionRoutes = require("./../modules/sesion/sesion.router");
        router.use("/sesion", sesionRoutes);
    

        const rolRoutes = require("./../modules/rol/rol.router");
        router.use("/rol", rolRoutes);
    

        const usuariogrupoRoutes = require("./../modules/usuariogrupo/usuariogrupo.router");
        router.use("/usuariogrupo", usuariogrupoRoutes);
    
module.exports=router
