"use strict";

const { communicate } = require("../controllers/communicateController");
const commonAppRoute = "/communicate";

module.exports = (app) => {
  app.route(`${commonAppRoute}`).post(communicate);
};
