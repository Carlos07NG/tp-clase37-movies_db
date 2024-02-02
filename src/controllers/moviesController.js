const db = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op; //para definir una variedad de operadores que se pueden utilizar en consultas,


module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
            .then((movies) => {
                return res.render('moviesList', {
                    movies
                });
            })
            .catch((error) => console.log(error));
    },
    new : (req, res)=>{
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC'],
            ],
            limit : 5
        })
            .then(movies => {
                return res.render('newestMovies',{
                    movies
                })
            })
    },
    recomended : (req, res)=>{ //rating superior o  igual  a  8 
        db.Movie.findAll({
            order : [
                ['rating', 'DESC']
            ],
            limit :10,
            where: {
                rating: {
                  [Op.gt]: 8,
                },
              },
        }).then(movies => {
            return res.render('recommendedMovies',{
                movies
            })
        }).catch(error => console.log(error))
    },
    // recomended : (req, res)=>{ //rating superior o  igual  a  8 
    //     db.Movie.findAll({
    //         order : [
    //             ['rating', 'DESC'],
    //         ],
    //         limit : 5
    //     })
    //         .then(movies => {
    //             return res.render('recommendedMovies',{
    //                 movies
    //             })
    //         })
    // },
    detail : (req, res)=>{
        const {id} = req.params
        db.Movie.findByPk(id)
        .then((movie) => {
            return res.render('moviesDetail', {
                movie
            })
        })
        .catch(error => console.log(error))
    }
}