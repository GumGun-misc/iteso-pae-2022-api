
const express = require("express");
const controller = require("./grupo.controller");

const router = express.Router();

router.get("/", controller.grupoGet);
router.get("/:id", controller.grupoGetOne);
router.post("/", controller.grupoCreate);
router.put("/:id", controller.grupoUpdate);
router.delete("/:id", controller.grupoDelete);

module.exports = router;

