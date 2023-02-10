"use strict";
const ShopListAbl = require("../../abl/shop-list-abl.js");

class ShopListController {

  view(ucEnv) {
    return ShopListAbl.view(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  };
  add(ucEnv) {
    return ShopListAbl.add(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession());
  };
  list(ucEnv) {
    return ShopListAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  };
  delete(ucEnv) {
    return ShopListAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  };
  shopListItems(ucEnv) {
    return ShopListAbl.shopListItems(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  };

}

module.exports = new ShopListController();
