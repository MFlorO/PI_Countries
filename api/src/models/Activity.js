const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty:{
        type:DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5
        },
        allowNull: true
    },
    duration:{
        type:DataTypes.STRING,
        allowNull: true
    },
    seassion:{
        type: DataTypes.ENUM('Summer', 'Autunm' , 'Winter', 'Spring'),
        allowNull: true
    }

  },{
    timestamps: false
  });
};
