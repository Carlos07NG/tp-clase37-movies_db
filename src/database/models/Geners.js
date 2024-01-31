module.exports = (sequelize, dataTypes) => {
    const alias = "Gener";
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
        tableName : "genrs",
        timesTamps : true,
        underscored : true,
    }
    const Gener = sequelize.define(alias,cols,config)

    return Gener
}