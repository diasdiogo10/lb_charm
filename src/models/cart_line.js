const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cart_line', {
    cartcart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'cart',
        key: 'cart_id'
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
    piece_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price_total: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cart_line',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cartcart_id" },
          { name: "piecepiece_id" },
        ]
      },
      {
        name: "cartcart_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cartcart_id" },
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
