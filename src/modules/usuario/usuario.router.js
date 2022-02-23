
const express = require("express");
const controller = require("./usuario.controller");

const router = express.Router();

router.get("/", controller.usuarioGet);
router.get("/:id", controller.usuarioGetOne);
router.post("/", controller.usuarioCreate);
router.put("/:id", controller.usuarioUpdate);
router.delete("/:id", controller.usuarioDelete);

module.exports = router;

