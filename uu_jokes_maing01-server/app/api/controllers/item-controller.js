"use strict";
const ItemAbl = require("../../abl/item-abl.js");

class ItemController {

  view(ucEnv) {
    return ItemAbl.view(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  };
  add(ucEnv) {
    return ItemAbl.add(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession());
  };
  list(ucEnv) {
    return ItemAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  };
  update(ucEnv) {
    return ItemAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  };
  delete(ucEnv) {
    return ItemAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  };
  checkmark(ucEnv) {
    return ItemAbl.checkmark(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  };

}

module.exports = new ItemController();
