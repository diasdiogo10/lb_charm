const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('address', {
    address_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    address_typeaddress_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'address_type',
        key: 'address_type_id'
      }
    },
    useruser_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    street: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    zip_ext: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    zip_codezip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'zip_code',
        key: 'zip_code'
      }
    }
  }, {
    sequelize,
    tableName: 'address',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "address_id" },
        ]
      },
      {
        name: "FKaddress751654",
        using: "BTREE",
        fields: [
          { name: "address_typeaddress_type_id" },
        ]
      },
      {
        name: "FKaddress89772",
        using: "BTREE",
        fields: [
          { name: "useruser_id" },
        ]
      },
      {
        name: "FKaddress233242",
        using: "BTREE",
        fields: [
          { name: "zip_codezip_code" },
        ]
      },
    ]
  });
};
