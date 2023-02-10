"use strict";

const JokesMainUseCaseError = require("./jokes-main-use-case-error.js");
const SHOP_LIST_ERROR_PREFIX = `${JokesMainUseCaseError.ERROR_PREFIX}shopList/`;

const ItemList = {
  UC_CODE: `${SHOP_LIST_ERROR_PREFIX}ItemList/`,
  
  InvalidDtoIn: class extends JokesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ItemList.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ItemDoesNotExist: class extends JokesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${ItemList.UC_CODE}ShopListDoesNotExist`;
      this.message = "ShopList does not exists";
    }
  },
};

module.exports = {
  ItemList
};
