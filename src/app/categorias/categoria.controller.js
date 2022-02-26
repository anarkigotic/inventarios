const getCategories = async (req, res) => {
  try {
    return res.json({
      status: true,
      data: [
        {
          id: 1,
          name: "Tecnologia",
        },
        {
          id: 2,
          name: "Alimento",
        },
        {
          id: 3,
          name: "Ropa",
        },
        {
          id: 4,
          name: "Medicos",
        },
      ],
      message: "Lista de categorias",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

exports.getCategories = getCategories;
