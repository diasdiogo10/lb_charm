const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    useruser_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    order_statusorder_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order_status',
        key: 'order_status_id'
      }
    },
    order_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    price_total: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    cartcart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cart',
        key: 'cart_id'
      }
    }
  }, {
    sequelize,
    tableName: 'order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "FKorder612617",
        using: "BTREE",
        fields: [
          { name: "order_statusorder_status_id" },
        ]
      },
      {
        name: "FKorder789419",
        using: "BTREE",
        fields: [
          { name: "useruser_id" },
        ]
      },
      {
        name: "FKorder437063",
        using: "BTREE",
        fields: [
          { name: "cartcart_id" },
        ]
      },
    ]
  });
};
