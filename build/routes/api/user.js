"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _users = _interopRequireDefault(require("../../controllers/users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(router) {
  router.route("/").get(_users["default"].fetch).post(_users["default"].create);
  router.route("/:id").get(_users["default"].fetchOne);
  return router;
};

exports["default"] = _default;