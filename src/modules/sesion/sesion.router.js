
const express = require("express");
const controller = require("./sesion.controller");

const router = express.Router();

router.get("/", controller.sesionGet);
router.get("/:id", controller.sesionGetOne);
router.post("/", controller.sesionCreate);
router.put("/:id", controller.sesionUpdate);
router.delete("/:id", controller.sesionDelete);

module.exports = router;

