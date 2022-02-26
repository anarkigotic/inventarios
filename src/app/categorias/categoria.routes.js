const express = require("express");
const router = express.Router();
const categoriaController = require("./categoria.controller");


router.get("/all", categoriaController.getCategories);




module.exports = router;
