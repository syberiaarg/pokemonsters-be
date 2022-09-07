"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.db = void 0;

var _knex = _interopRequireDefault(require("knex"));

var _process$env = process.env,
    MYSQL_HOST = _process$env.MYSQL_HOST,
    MYSQL_DB_NAME = _process$env.MYSQL_DB_NAME,
    MYSQL_USER = _process$env.MYSQL_USER;
var db = (0, _knex["default"])({
  client: 'mysql',
  connection: {
    host: MYSQL_HOST,
    user: MYSQL_USER,
    database: MYSQL_DB_NAME
  }
});
exports.db = db;
var _default = _knex["default"];
exports["default"] = _default;
//# sourceMappingURL=database.js.map