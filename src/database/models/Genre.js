module.exports = (sequelize, dataTypes) => {
    const alias = "Genre";
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name : {
            type : dataTypes.STRING(100),
        },
        ranking : {
            type : dataTypes.INTEGER.UNSIGNED,
            unique : true,
            allowNull : false,
        },
        active : {
            type : dataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : 1
        }
    }
    const config = {
        tableName : "genres",
        timesTamps : true,
        underscored : true,
    }
    const Genre = sequelize.define(alias,cols,config)

    return Genre
}