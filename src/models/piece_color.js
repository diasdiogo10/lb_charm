const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('piece_color', {
    piecepiece_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'piece',
        key: 'piece_id'
      }
    },
    colorcolor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'color',
        key: 'color_id'
      }
    }
  }, {
    sequelize,
    tableName: 'piece_color',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "piecepiece_id" },
          { name: "colorcolor_id" },
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
      {
        name: "colorcolor_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "colorcolor_id" },
        ]
      },
    ]
  });
};
