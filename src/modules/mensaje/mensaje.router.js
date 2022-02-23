
const express = require("express");
const controller = require("./mensaje.controller");

const router = express.Router();

router.get("/", controller.mensajeGet);
router.get("/:id", controller.mensajeGetOne);
router.post("/", controller.mensajeCreate);
router.put("/:id", controller.mensajeUpdate);
router.delete("/:id", controller.mensajeDelete);

module.exports = router;

