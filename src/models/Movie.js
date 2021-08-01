const { Model, DataTypes } = require('sequelize')

class Movie extends Model {
  static init(connection){
    super.init({
      title:  {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description:   {
        type: DataTypes.STRING,
        allowNull: true,
      },
      trailer:   {
        type: DataTypes.STRING,
        allowNull: true,
      },
      start_date:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      end_date:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      banner:      {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sessions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
    },{
      modelName: 'Movie',
      sequelize: connection,
    })
  }
}

module.exports = Movie