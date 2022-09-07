"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(err, req, res, next) {
  if (err) {
    return res.status(err.status || 403).send({
      message: err.message,
      code: err.code,
      errors: err.errors
    });
  }

  next();
};

exports["default"] = _default;
//# sourceMappingURL=errorHandler.js.map