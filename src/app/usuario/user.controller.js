"use strict";

const db = require("../../utils");

const getUser = async (req, res) => {
  try {
    const query = `select usuarios.id, usuarios.nombres,usuarios.apellidos,usuarios.documento,usuarios.clave,usuarios.fecha,roles.tipo from usuarios inner join roles on usuarios.id_rol = roles.id;`;
    let users = await db.query(query);
    users = users.map((user) => ({
      id: user.id,
      firstName: user.nombres,
      lastName: user.apellidos,
      dni: user.documento,
      date: user.fecha,
      rol: user.tipo,
    }));
    return res.json({
      estado: true,
      data: users,
      mensaje: "lista de usuarios",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error,
    });
  }
};

const addUser = async (req, res) => {
  try {
    const { firstName, lastName, dni, password, rol } = req.body;
    if (password === "" || !password) {
      return res.status(500).json({
        status: false,
        message: "password es obligatorio",
      });
    }
    const users = {
      nombres: firstName,
      apellidos: lastName,
      documento: dni,
      clave: password,
      id_rol: Number(rol),
    };
    const addUser = await db.query("insert into usuarios set ?", users);
    return res.json({
      estado: true,
      data: addUser,
      mensaje: "usuario agregado correcamente",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, dni, password, rol } = req.body;
    const id = Number(req.params.id);
    if (password === "" || !password) {
      return res.status(500).json({
        status: false,
        message: "password es obligatorio",
      });
    }
    const users = {
      nombres: firstName,
      apellidos: lastName,
      documento: dni,
      clave: password,
      id_rol: Number(rol),
    };
    const addUser = await db.query("UPDATE usuarios SET  ? where id = ?", [
      users,
      id,
    ]);
    return res.json({
      status: true,
      data: addUser,
      message: "usuario actualizado correcamente",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const deleteUser = await db.query("DELETE FROM usuarios WHERE id = ?", id);
    return res.json({
      estado: true,
      data: deleteUser,
      mensaje: "usuario eliminado correcamente",
    });
  } catch (error) {
    return res.json({
      estado: false,
      data: addUser,
      mensaje: "error al borrar usuario",
    });
  }
};

const login = async (req, res) => {
  try {
    const { dni, password } = req.body;
    let user = await db.query(
      "select * from usuarios where documento = ? and clave = ?",
      [
        dni,
        password,
      ]
    );
    if(!user.length){
      return res.status(500).json({
        status: false,
        message: "credenciales incorrectas",
      });

    }

    user = user.pop();
    return res.json({
      status: true,
      data: {
        "id": user.id,
        "firstName": user.nombres,
        "lastName":  user.apellidos,
        "dni": user.documento,
        "rol": user.id_rol,
        "password": user.clave
      },
      mensaje: "loggin correcto",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

exports.getUser = getUser;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.login = login;
