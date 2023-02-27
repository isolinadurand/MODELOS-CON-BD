const db = require('../database/models');
const sequelize = db.Sequelize;
const moment = require('moment');
const genresController = {
    list: function(req, res) {
        db.Genres.findAll()
            .then(function(genres) {
                res.render('genresList', {genres: genres})

            })
        },
    detail: function(req, res) {
        db.Genres.findByPk(req.params.id)
    }
   

};
module.exports = genresController;