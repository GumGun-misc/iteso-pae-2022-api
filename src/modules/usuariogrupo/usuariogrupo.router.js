
const express = require("express");
const controller = require("./usuariogrupo.controller");

const router = express.Router();

router.get("/", controller.usuariogrupoGet);
router.get("/:id", controller.usuariogrupoGetOne);
router.post("/", controller.usuariogrupoCreate);
router.put("/:id", controller.usuariogrupoUpdate);
router.delete("/:id", controller.usuariogrupoDelete);

module.exports = router;

