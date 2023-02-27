module.exports = (sequelize, dataTypes) => {
    let alias = "Movies";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: dataTypes.STRING
        },
        length:{
            allowNull: true,
            type: dataTypes.INTEGER
        },
        rating:{
            type: dataTypes.FLOAT
        },
        awards:{
            type: dataTypes.TINYINT
        },
        release_date:{
            type:dataTypes.DATE
        },
        genre_id:{
            type: dataTypes.INTEGER,
            allowNull: true,
            foreignKey: true

        },
        created_at:{
            type: dataTypes.DATE

        },
        updated_at:{
            type: dataTypes.DATE
        }

    };
    let config = {
        tableName: "movies",
      //timestamps: false
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
    const  Movie = sequelize.define(alias, cols, config);
    
    return Movie
}