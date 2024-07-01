const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('piece', {
    piece_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    piece_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    piece_description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    piece_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    piece_statuspiece_status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'piece_status',
        key: 'piece_status_id'
      }
    },
    piece_categorypiece_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'piece_category',
        key: 'piece_category_id'
      }
    },
    collectioncollection_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'collection',
        key: 'collection_id'
      }
    },
    materialmaterial_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'material',
        key: 'material_id'
      }
    }
  }, {
    sequelize,
    tableName: 'piece',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "piece_id" },
        ]
      },
      {
        name: "FKpiece873066",
        using: "BTREE",
        fields: [
          { name: "piece_statuspiece_status_id" },
        ]
      },
      {
        name: "FKpiece968090",
        using: "BTREE",
        fields: [
          { name: "piece_categorypiece_category_id" },
        ]
      },
      {
        name: "FKpiece721518",
        using: "BTREE",
        fields: [
          { name: "collectioncollection_id" },
        ]
      },
      {
        name: "FKpiece701731",
        using: "BTREE",
        fields: [
          { name: "materialmaterial_id" },
        ]
      },
    ]
  });
};
