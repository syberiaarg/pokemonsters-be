"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _teams = _interopRequireDefault(require("../../controllers/teams"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(router) {
  router.route("/").get(UserController.fetch).post(UserController.create);
  router.route("/:id").get(UserController.fetchOne);
  return router;
};

exports["default"] = _default;