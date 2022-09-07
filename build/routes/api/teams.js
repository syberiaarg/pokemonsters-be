"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _teams = _interopRequireDefault(require("../../controllers/teams"));

var _default = function _default(router) {
  router.route("/").get(UserController.fetch).post(UserController.create);
  router.route("/:id").get(UserController.fetchOne);
  return router;
};

exports["default"] = _default;
//# sourceMappingURL=teams.js.map