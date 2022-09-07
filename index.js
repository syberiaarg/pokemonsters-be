const dotEnv = require("dotenv");
const expand = require("dotenv-expand");

expand(dotEnv.config());

require("./src");
