"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NODE_ENV = process.env.NODE_ENV;
var PORT = process.env.PORT || 3001;

var bodyParser = _express["default"].json();

var app = (0, _express["default"])();
app.use(bodyParser);
app.use((0, _cors["default"])());

if (NODE_ENV === "production") {
  app.use(_express["default"]["static"]("client/build"));
}

(0, _routes["default"])(app);
app.listen(PORT, function () {
  console.log("Started at port ".concat(PORT, " in ").concat(NODE_ENV, " environment"));
});