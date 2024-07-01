const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_first_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_last_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_typeuser_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_type',
        key: 'user_type_id'
      }
    },
    user_statususer_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_status',
        key: 'user_status_id'
      }
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FKuser160561",
        using: "BTREE",
        fields: [
          { name: "user_typeuser_type_id" },
        ]
      },
      {
        name: "FKuser299016",
        using: "BTREE",
        fields: [
          { name: "user_statususer_status_id" },
        ]
      },
    ]
  });
};
