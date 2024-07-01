const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('width', {
    width: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    width_description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    piecepiece_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'piece',
        key: 'piece_id'
      }
    }
  }, {
    sequelize,
    tableName: 'width',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "width" },
        ]
      },
      {
        name: "FKwidth672692",
        using: "BTREE",
        fields: [
          { name: "piecepiece_id" },
        ]
      },
    ]
  });
};
