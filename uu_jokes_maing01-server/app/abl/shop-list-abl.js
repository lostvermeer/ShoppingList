"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/shop-list-error.js");


const WARNINGS = {
  loadUnsupportedKeys: {
    code: `${Errors.ItemList.UC_CODE}unsupportedKeys`,
  },
};


class ShopListAbl {
  

  constructor() {
    this.validator = Validator.load();
    this.daoItem = DaoFactory.getDao("item");
    this.daoShopList = DaoFactory.getDao("shopList");
  }

  async view(awid, dtoIn) {
    let uuAppErrorMap = {}
    // HDS 1
    let validationResult = this.validator.validate("viewDtoInType", dtoIn);
    // A1, A2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.loadUnsupportedKeys.code,
      Errors.ItemList.InvalidDtoIn
    );

    let item = await this.daoShopList.view(awid, dtoIn.id);
    if (!item) {
      throw new Errors.ItemList.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }

    const dtoOut = {
      ...item,
      uuAppErrorMap
    }
    return dtoOut;
  }
  
  async add(awid, dtoIn, session) {
    let uuAppErrorMap = {}
    // HDS 1
    let validationResult = this.validator.validate("addDtoInType", dtoIn);
    // A1, A2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.loadUnsupportedKeys.code,
      Errors.ItemList.InvalidDtoIn
    );
    
    dtoIn.owner = session.getIdentity().getUuIdentity();
    dtoIn.create = Date.now();

    let item = await this.daoShopList.add(awid, dtoIn);
    if (!item) {
      throw new Errors.ItemList.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }

    const dtoOut = {
      ...item,
      uuAppErrorMap
    }

    return dtoOut;
  };

  async list(awid, dtoIn) {
    let uuAppErrorMap = {}
    // HDS 1
    let validationResult = this.validator.validate("listDtoInType", dtoIn);
    // A1, A2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.loadUnsupportedKeys.code,
      Errors.ItemList.InvalidDtoIn
    );

    let items = await this.daoShopList.list(awid, dtoIn.pageInfo);
    if (!items && !items.length) {
      throw new Errors.ItemList.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }

    const dtoOut = {
      ...items,
      uuAppErrorMap
    }

    return items;
  }

  async delete(awid, dtoIn) {
    let uuAppErrorMap = {}
    // HDS 1
    let validationResult = this.validator.validate("deleteDtoInType", dtoIn);
    // A1, A2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.loadUnsupportedKeys.code,
      Errors.ItemList.InvalidDtoIn
    );

    let item = await this.daoShopList.view(awid, dtoIn.id);
    if (!item) {
      throw new Errors.ItemList.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }
    item = await this.daoShopList.delete(awid, dtoIn);
    const dtoOut = {
      ...item,
      uuAppErrorMap
    }

    return dtoOut;
  }

  
  async shopListItems(awid, dtoIn) {
    let uuAppErrorMap = {}
    // HDS 1
    let validationResult = this.validator.validate("viewDtoInType", dtoIn);
    // A1, A2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.loadUnsupportedKeys.code,
      Errors.ItemList.InvalidDtoIn
    );

    let item = await this.daoShopList.view(awid, dtoIn.id);
    if (!item) {
      throw new Errors.ItemList.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }

    const dtoOut = {
      ...item,
      uuAppErrorMap
    }

    let itemsFromItemAbl = await this.daoItem.getByShopListId(awid, dtoIn.id);

    if (!itemsFromItemAbl && !itemsFromItemAbl.length) {
      throw new Errors.ItemList.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }

    const dtoOut2 = {
      ...itemsFromItemAbl,
      uuAppErrorMap
    }
    return {
      ShoppingList: dtoOut,
      Items: dtoOut2,
    }
    
  }

}

module.exports = new ShopListAbl();
