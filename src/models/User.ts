import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User', 
    tableName: 'users', //nom table
  },
);


export default User;