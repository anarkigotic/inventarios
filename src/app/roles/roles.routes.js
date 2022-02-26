const express = require("express");
const router = express.Router();
const rolesController = require("./roles.controller");


router.get("/all", rolesController.getRoles);



module.exports = router;
