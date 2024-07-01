var DataTypes = require("sequelize").DataTypes;
var _address = require("./address");
var _address_type = require("./address_type");
var _cart = require("./cart");
var _cart_line = require("./cart_line");
var _collection = require("./collection");
var _color = require("./color");
var _contact = require("./contact");
var _contact_type = require("./contact_type");
var _evaluation = require("./evaluation");
var _length = require("./length");
var _material = require("./material");
var _order = require("./order");
var _order_line = require("./order_line");
var _order_status = require("./order_status");
var _piece = require("./piece");
var _piece_category = require("./piece_category");
var _piece_color = require("./piece_color");
var _piece_status = require("./piece_status");
var _user = require("./user");
var _user_status = require("./user_status");
var _user_type = require("./user_type");
var _width = require("./width");
var _wish = require("./wish");
var _zip_code = require("./zip_code");

function initModels(sequelize) {
  var address = _address(sequelize, DataTypes);
  var address_type = _address_type(sequelize, DataTypes);
  var cart = _cart(sequelize, DataTypes);
  var cart_line = _cart_line(sequelize, DataTypes);
  var collection = _collection(sequelize, DataTypes);
  var color = _color(sequelize, DataTypes);
  var contact = _contact(sequelize, DataTypes);
  var contact_type = _contact_type(sequelize, DataTypes);
  var evaluation = _evaluation(sequelize, DataTypes);
  var length = _length(sequelize, DataTypes);
  var material = _material(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var order_line = _order_line(sequelize, DataTypes);
  var order_status = _order_status(sequelize, DataTypes);
  var piece = _piece(sequelize, DataTypes);
  var piece_category = _piece_category(sequelize, DataTypes);
  var piece_color = _piece_color(sequelize, DataTypes);
  var piece_status = _piece_status(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_status = _user_status(sequelize, DataTypes);
  var user_type = _user_type(sequelize, DataTypes);
  var width = _width(sequelize, DataTypes);
  var wish = _wish(sequelize, DataTypes);
  var zip_code = _zip_code(sequelize, DataTypes);

  cart.belongsToMany(piece, { as: 'piecepiece_id_pieces', through: cart_line, foreignKey: "cartcart_id", otherKey: "piecepiece_id" });
  color.belongsToMany(piece, { as: 'piecepiece_id_piece_piece_colors', through: piece_color, foreignKey: "colorcolor_id", otherKey: "piecepiece_id" });
  contact_type.belongsToMany(user, { as: 'useruser_id_users', through: contact, foreignKey: "contact_typecontact_type_id", otherKey: "useruser_id" });
  order.belongsToMany(piece, { as: 'piecepiece_id_piece_order_lines', through: order_line, foreignKey: "orderorder_id", otherKey: "piecepiece_id" });
  piece.belongsToMany(cart, { as: 'cartcart_id_carts', through: cart_line, foreignKey: "piecepiece_id", otherKey: "cartcart_id" });
  piece.belongsToMany(color, { as: 'colorcolor_id_colors', through: piece_color, foreignKey: "piecepiece_id", otherKey: "colorcolor_id" });
  piece.belongsToMany(order, { as: 'orderorder_id_orders', through: order_line, foreignKey: "piecepiece_id", otherKey: "orderorder_id" });
  piece.belongsToMany(user, { as: 'useruser_id_user_evaluations', through: evaluation, foreignKey: "piecepiece_id", otherKey: "useruser_id" });
  piece.belongsToMany(user, { as: 'useruser_id_user_wishes', through: wish, foreignKey: "piecepiece_id", otherKey: "useruser_id" });
  user.belongsToMany(contact_type, { as: 'contact_typecontact_type_id_contact_types', through: contact, foreignKey: "useruser_id", otherKey: "contact_typecontact_type_id" });
  user.belongsToMany(piece, { as: 'piecepiece_id_piece_evaluations', through: evaluation, foreignKey: "useruser_id", otherKey: "piecepiece_id" });
  user.belongsToMany(piece, { as: 'piecepiece_id_piece_wishes', through: wish, foreignKey: "useruser_id", otherKey: "piecepiece_id" });
  address.belongsTo(address_type, { as: "address_typeaddress_type", foreignKey: "address_typeaddress_type_id"});
  address_type.hasMany(address, { as: "addresses", foreignKey: "address_typeaddress_type_id"});
  cart_line.belongsTo(cart, { as: "cartcart", foreignKey: "cartcart_id"});
  cart.hasMany(cart_line, { as: "cart_lines", foreignKey: "cartcart_id"});
  order.belongsTo(cart, { as: "cartcart", foreignKey: "cartcart_id"});
  cart.hasMany(order, { as: "orders", foreignKey: "cartcart_id"});
  piece.belongsTo(collection, { as: "collectioncollection", foreignKey: "collectioncollection_id"});
  collection.hasMany(piece, { as: "pieces", foreignKey: "collectioncollection_id"});
  piece_color.belongsTo(color, { as: "colorcolor", foreignKey: "colorcolor_id"});
  color.hasMany(piece_color, { as: "piece_colors", foreignKey: "colorcolor_id"});
  contact.belongsTo(contact_type, { as: "contact_typecontact_type", foreignKey: "contact_typecontact_type_id"});
  contact_type.hasMany(contact, { as: "contacts", foreignKey: "contact_typecontact_type_id"});
  piece.belongsTo(material, { as: "materialmaterial", foreignKey: "materialmaterial_id"});
  material.hasMany(piece, { as: "pieces", foreignKey: "materialmaterial_id"});
  order_line.belongsTo(order, { as: "orderorder", foreignKey: "orderorder_id"});
  order.hasMany(order_line, { as: "order_lines", foreignKey: "orderorder_id"});
  order.belongsTo(order_status, { as: "order_statusorder_status", foreignKey: "order_statusorder_status_id"});
  order_status.hasMany(order, { as: "orders", foreignKey: "order_statusorder_status_id"});
  cart_line.belongsTo(piece, { as: "piecepiece", foreignKey: "piecepiece_id"});
  piece.hasMany(cart_line, { as: "cart_lines", foreignKey: "piecepiece_id"});
  evaluation.belongsTo(piece, { as: "piecepiece", foreignKey: "piecepiece_id"});
  piece.hasMany(evaluation, { as: "evaluations", foreignKey: "piecepiece_id"});
  length.belongsTo(piece, { as: "piecepiece", foreignKey: "piecepiece_id"});
  piece.hasMany(length, { as: "lengths", foreignKey: "piecepiece_id"});
  order_line.belongsTo(piece, { as: "piecepiece", foreignKey: "piecepiece_id"});
  piece.hasMany(order_line, { as: "order_lines", foreignKey: "piecepiece_id"});
  piece_color.belongsTo(piece, { as: "piecepiece", foreignKey: "piecepiece_id"});
  piece.hasMany(piece_color, { as: "piece_colors", foreignKey: "piecepiece_id"});
  width.belongsTo(piece, { as: "piecepiece", foreignKey: "piecepiece_id"});
  piece.hasMany(width, { as: "widths", foreignKey: "piecepiece_id"});
  wish.belongsTo(piece, { as: "piecepiece", foreignKey: "piecepiece_id"});
  piece.hasMany(wish, { as: "wishes", foreignKey: "piecepiece_id"});
  piece.belongsTo(piece_category, { as: "piece_categorypiece_category", foreignKey: "piece_categorypiece_category_id"});
  piece_category.hasMany(piece, { as: "pieces", foreignKey: "piece_categorypiece_category_id"});
  piece.belongsTo(piece_status, { as: "piece_statuspiece_status", foreignKey: "piece_statuspiece_status_id"});
  piece_status.hasMany(piece, { as: "pieces", foreignKey: "piece_statuspiece_status_id"});
  address.belongsTo(user, { as: "useruser", foreignKey: "useruser_id"});
  user.hasMany(address, { as: "addresses", foreignKey: "useruser_id"});
  contact.belongsTo(user, { as: "useruser", foreignKey: "useruser_id"});
  user.hasMany(contact, { as: "contacts", foreignKey: "useruser_id"});
  evaluation.belongsTo(user, { as: "useruser", foreignKey: "useruser_id"});
  user.hasMany(evaluation, { as: "evaluations", foreignKey: "useruser_id"});
  order.belongsTo(user, { as: "useruser", foreignKey: "useruser_id"});
  user.hasMany(order, { as: "orders", foreignKey: "useruser_id"});
  wish.belongsTo(user, { as: "useruser", foreignKey: "useruser_id"});
  user.hasMany(wish, { as: "wishes", foreignKey: "useruser_id"});
  user.belongsTo(user_status, { as: "user_statususer_status", foreignKey: "user_statususer_status_id"});
  user_status.hasMany(user, { as: "users", foreignKey: "user_statususer_status_id"});
  user.belongsTo(user_type, { as: "user_typeuser_type", foreignKey: "user_typeuser_type_id"});
  user_type.hasMany(user, { as: "users", foreignKey: "user_typeuser_type_id"});
  address.belongsTo(zip_code, { as: "zip_codezip_code_zip_code", foreignKey: "zip_codezip_code"});
  zip_code.hasMany(address, { as: "addresses", foreignKey: "zip_codezip_code"});

  return {
    address,
    address_type,
    cart,
    cart_line,
    collection,
    color,
    contact,
    contact_type,
    evaluation,
    length,
    material,
    order,
    order_line,
    order_status,
    piece,
    piece_category,
    piece_color,
    piece_status,
    user,
    user_status,
    user_type,
    width,
    wish,
    zip_code,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
