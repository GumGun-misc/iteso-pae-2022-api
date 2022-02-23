
const express = require("express");
const controller = require("./rol.controller");

const router = express.Router();

router.get("/", controller.rolGet);
router.get("/:id", controller.rolGetOne);
router.post("/", controller.rolCreate);
router.put("/:id", controller.rolUpdate);
router.delete("/:id", controller.rolDelete);

module.exports = router;

