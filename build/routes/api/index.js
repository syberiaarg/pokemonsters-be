"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("./user"));

var routes = [{
  path: "/user",
  route: _user["default"]
}];

var _default = function _default(router) {
  routes.forEach(function (_ref) {
    var path = _ref.path,
        route = _ref.route;
    router.use(path, route((0, _express.Router)()));
  });
  return router;
};

exports["default"] = _default;
//# sourceMappingURL=index.js.map