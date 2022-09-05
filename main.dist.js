"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _dotenvExpand = _interopRequireDefault(require("dotenv-expand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _dotenvExpand["default"])(_dotenv["default"].config());

require("./src");
