exports.setRoutes = (app) => {
    app.use('/roles', require('./app/roles/roles.routes'))
    app.use('/usuarios', require('./app/usuario/user.routes'))
    app.use('/categorias', require('./app/categorias/categoria.routes'))
    app.route('/*').get((req, res) => res.status(404).send())
}
