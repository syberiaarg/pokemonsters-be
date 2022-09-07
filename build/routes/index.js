"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _api = _interopRequireDefault(require("./api"));

var _middleWares = _interopRequireDefault(require("./middleWares"));

var router = function router(app) {
  app.use("/api", (0, _api["default"])((0, _express.Router)()));
  app.use(_middleWares["default"]);
};

var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map