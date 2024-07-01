const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_line', {
    orderorder_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'order',
        key: 'order_id'
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
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'order_line',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderorder_id" },
          { name: "piecepiece_id" },
        ]
      },
      {
        name: "orderorder_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "orderorder_id" },
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
