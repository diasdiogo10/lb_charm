const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('length', {
    lenght: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    length_description: {
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
    tableName: 'length',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "lenght" },
        ]
      },
      {
        name: "FKlength164440",
        using: "BTREE",
        fields: [
          { name: "piecepiece_id" },
        ]
      },
    ]
  });
};
