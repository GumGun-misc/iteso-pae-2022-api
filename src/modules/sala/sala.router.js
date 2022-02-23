
const express = require("express");
const controller = require("./sala.controller");

const router = express.Router();

router.get("/", controller.salaGet);
router.get("/:id", controller.salaGetOne);
router.post("/", controller.salaCreate);
router.put("/:id", controller.salaUpdate);
router.delete("/:id", controller.salaDelete);

module.exports = router;

