const express = require("express");
const router = express.Router();
const usuariosController = require("./user.controller");


router.get("/all", usuariosController.getUser);
router.post("/add", usuariosController.addUser);
router.post("/login", usuariosController.login);
router.put("/update/:id", usuariosController.updateUser);
router.delete("/delete/:id", usuariosController.deleteUser);



module.exports = router;
