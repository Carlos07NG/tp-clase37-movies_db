module.exports = (sequelize, dataTypes) => {
    const alias = "Movie";
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        title : {
            type : dataTypes.STRING(500),
            allowNull : false,
        },
        rating: {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false,
        },
        awards : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
        },
        release_date : {
            type : dataTypes.DATE,
            allowNull : false
        },
        length :{
            type : dataTypes.INTEGER,
            defaultValue : null,
        },
        genre_id : {
            type : dataTypes.INTEGER,
            defaultValue : null
        },
    }
    const config = {
        tableName : "movies",
        timestamps : true,
        underscored : true,
    }
    const Movie = sequelize.define(alias,cols,config)

    return Movie
}