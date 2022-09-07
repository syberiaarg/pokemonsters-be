"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _cors = _interopRequireDefault(require("cors"));

var _process$env = process.env,
    NODE_ENV = _process$env.NODE_ENV,
    PORT = _process$env.PORT;

var bodyParser = _express["default"].json();

var app = (0, _express["default"])();
app.use(bodyParser);
app.use((0, _cors["default"])());
(0, _routes["default"])(app);
app.listen(PORT, function () {
  console.log("Started at port ".concat(PORT, " in ").concat(NODE_ENV, " environment"));
});
//# sourceMappingURL=index.js.map