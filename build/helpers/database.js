"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.db = void 0;

var _knex = _interopRequireDefault(require("knex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _process$env = process.env,
    MYSQL_HOST = _process$env.MYSQL_HOST,
    MYSQL_DB_NAME = _process$env.MYSQL_DB_NAME,
    MYSQL_USER = _process$env.MYSQL_USER,
    MYSQL_PASSWORD = _process$env.MYSQL_PASSWORD;
var db = (0, _knex["default"])({
  client: 'mysql',
  connection: {
    host: MYSQL_HOST,
    user: MYSQL_USER,
    database: MYSQL_DB_NAME,
    password: MYSQL_PASSWORD
  }
});
exports.db = db;
var _default = _knex["default"];
exports["default"] = _default;