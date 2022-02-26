"use strict";


const { query } = require("../../utils");

const getRoles = async (req, res) => {
  try {
    const roles = await query("SELECT * FROM roles");
    return res.json({
      estado: true,
      data: roles.map(rol => ({
        id : rol.id,
        type : rol.tipo,
        date : rol.fecha
      })),
      mensaje: "lista de roles",
    });
  } catch (error) {
    console.log(error);
  }
};



exports.getRoles = getRoles;



