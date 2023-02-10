"use strict";

const JokesMainUseCaseError = require("./jokes-main-use-case-error.js");
const ITEM_ERROR_PREFIX = `${JokesMainUseCaseError.ERROR_PREFIX}item/`;

const View = {
  UC_CODE: `${ITEM_ERROR_PREFIX}view/`,

  InvalidDtoIn: class extends JokesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${View.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  ItemDoesNotExist: class extends JokesMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${View.UC_CODE}itemDoesNotExist`;
      this.message = "Item does not exists";
    }
  },
};

module.exports = {
  View,
};
