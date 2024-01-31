module.exports = (sequelize, dataTypes) => {
    const alias = "Actor";
    const cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        first_name : {
            type : dataTypes.STRING(100),
        },
        last_name : {
            type : dataTypes.STRING(100),
        },
        rating : {
            type : dataTypes.DECIMAL(3,1),
            defaultValue : null
        },
        favorite_movie_id : {
            type : dataTypes.INTEGER,
            defaultValue : null
        }
    }
    const config = {
        tableName : "actors",
        timesTamps : true,
        underscored : true,
    }
    const Actor = sequelize.define(alias,cols,config)

    return Actor
}