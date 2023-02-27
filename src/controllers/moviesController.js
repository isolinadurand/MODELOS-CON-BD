const db = require('../database/models');
const sequelize = db.Sequelize;

const moviesController = {
    list: function(req, res) {
        db.Movies.findAll()
            .then(function(movies) {
                res.render('moviesList', {movies: movies})

            })
        },
    detail: function(req, res) {
        db.Movies.findByPk(req.params.id)
            .then(function(movie) {
                res.render('moviesDetail', {movie})
            })
    },
    new: function(req, res) {
        db.Movies.findAll({
            order: [
                ['release_date', 'DESC'],
            ]  
        })
        .then(function(movies) {
            res.render('newestMovies',{movies})
        })
    },
    recommended: function(req, res) {
        db.Movies.findAll({
            where: {
                rating: { [sequelize.Op.gte]: 8 }
            },
            order: [
                ['release_date', 'DESC'],
            ]  
        })
        .then(function(movies) {
            res.render('newestMovies',{movies})
    })
}   

};
module.exports = moviesController;