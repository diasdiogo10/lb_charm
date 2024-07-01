const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contact', {
    contact_typecontact_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'contact_type',
        key: 'contact_type_id'
      }
    },
    useruser_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
    contact_value: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'contact',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contact_typecontact_type_id" },
          { name: "useruser_id" },
        ]
      },
      {
        name: "contact_typecontact_type_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contact_typecontact_type_id" },
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
    ]
  });
};
