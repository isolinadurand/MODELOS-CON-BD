module.exports = (sequelize, dataTypes) => {
    let alias = "Genres";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING(80)
        },
        ranking:{
            type: dataTypes.FLOAT
        },
        active: {
            type: dataTypes.TINYINT
        },
        created_at:{
            type: dataTypes.DATE

        },
        updated_at:{
            type: dataTypes.DATE
        }

    };
    let config = {
        tableName: "genres",
        //timestamps: false
        createdAt: "created_at",
        updatedAt: "updated_at"
    }

    const  Genre = sequelize.define(alias, cols, config);
    
   
   
    return Genre
}