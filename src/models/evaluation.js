const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evaluation', {
    useruser_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    piecepiece_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'piece',
        key: 'piece_id'
      }
    },
    evaluation_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    evaluation: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'evaluation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "useruser_id" },
          { name: "piecepiece_id" },
        ]
      },
      {
        name: "useruser_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "useruser_id" },
        ]
      },
      {
        name: "piecepiece_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "piecepiece_id" },
        ]
      },
    ]
  });
};
