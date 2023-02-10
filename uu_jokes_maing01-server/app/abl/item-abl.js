"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/item-error.js");
const ErrorsShopList = require("../api/errors/shop-list-error.js");
const {LoggerFactory} = require("uu_appg01_server").Logging;


const WARNINGS = {
  loadUnsupportedKeys: {
    code: `${Errors.View.UC_CODE}unsupportedKeys`,
    code: `${ErrorsShopList.ItemList.UC_CODE}unsupportedKeys`,
  },
};

const logger = LoggerFactory.get("UuJokes.Abls.itemAbl");

class ItemAbl {

  constructor() {
    this.validator = Validator.load();
    this.daoItem = DaoFactory.getDao("item");
    this.daoShopList = DaoFactory.getDao("shopList");
  }

  async view(awid, dtoIn) {
    let uuAppErrorMap = {}
    // HDS 1
    let validationResult = this.validator.validate("viewItemDtoInType", dtoIn);
    // A1, A2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.loadUnsupportedKeys.code,
      Errors.View.InvalidDtoIn,
      ErrorsShopList.View.InvalidDtoIn
    );

    if (logger.isDebugLoggable()) {
      logger.info("Creating joke with parameters: " + JSON.stringify(dtoIn));
    }
    let item = await this.daoItem.view(awid, dtoIn.id);
    if (!item) {
      throw new Errors.View.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }

    const dtoOut = {
      ...item,
      uuAppErrorMap
    }

    if (logger.isDebugLoggable()) {
      logger.info("Creating joke with parameters: " + JSON.stringify(dtoOut));
    }

    return dtoOut;
  };

  async add(awid, dtoIn, session) {
    let uuAppErrorMap = {}
    // HDS 1
    let validationResult = this.validator.validate("addItemDtoInType", dtoIn);
    // A1, A2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.loadUnsupportedKeys.code,
      Errors.View.InvalidDtoIn
    );
    
    let shopListCheck = await this.daoShopList.view(awid, dtoIn.shoppingListId); 
    if (!shopListCheck) {
      throw new ErrorsShopList.View.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }

    //dtoIn.shoppingListId = null; //const ShopListAbl = require("./shop-list-abl.js");
    dtoIn.owner = session.getIdentity().getUuIdentity();
    dtoIn.create = Date.now();

    if (!dtoIn.checkmark){
      dtoIn.checkmark = false;
    }

    let item = await this.daoItem.add(awid, dtoIn);
    if (!item) {
      throw new Errors.View.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }

    const dtoOut = {
      ...item,
      uuAppErrorMap
    }
  
    return dtoOut;
  };

  async list(awid,  dtoIn) {
    let uuAppErrorMap = {}
    // HDS 1
    let validationResult = this.validator.validate("listItemDtoInType", dtoIn);
    // A1, A2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.loadUnsupportedKeys.code,
      Errors.View.InvalidDtoIn
    );

    let items = await this.daoItem.list(awid,  dtoIn.pageInfo);
    if (!items && !items.length) {
      throw new Errors.View.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }

    const dtoOut = {
      ...items,
      uuAppErrorMap
    }

    return items;
  };

  async update(awid, dtoIn) {
    let uuAppErrorMap = {}
    // HDS 1
    let validationResult = this.validator.validate("updateItemDtoInType", dtoIn);
    // A1, A2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.loadUnsupportedKeys.code,
      Errors.View.InvalidDtoIn
    );
      
    let item = await this.daoItem.view(awid, dtoIn.id);
    if (!item) {
      throw new Errors.View.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }
    if (dtoIn.name){ 
      item.name = dtoIn.name;
    }
    if (dtoIn.checkmark){ 
      item.checkmark = dtoIn.checkmark;
    }

    let shopListCheck = await this.daoShopList.view(awid, dtoIn.shoppingListId); 
    if (!shopListCheck) {
      throw new ErrorsShopList.View.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }

    if (dtoIn.shoppingListId){ 
      item.shoppingListId = dtoIn.shoppingListId;
    }
    
    item = await this.daoItem.update(awid, item);

    const dtoOut = {
      ...item,
      uuAppErrorMap
    }

    return dtoOut;
  };

  async delete(awid, dtoIn) {
    let uuAppErrorMap = {}
    // HDS 1
    let validationResult = this.validator.validate("deleteItemDtoInType", dtoIn);
    // A1, A2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.loadUnsupportedKeys.code,
      Errors.View.InvalidDtoIn
    );

    let item = await this.daoItem.view(awid, dtoIn.id);
    if (!item) {
      throw new Errors.View.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }
    item = await this.daoItem.delete(awid, dtoIn);
    const dtoOut = {
      ...item,
      uuAppErrorMap
    }

    return dtoOut;
  };

  async checkmark(awid, dtoIn) {
    let uuAppErrorMap = {}
    // HDS 1
    let validationResult = this.validator.validate("updateItemDtoInType", dtoIn);
    // A1, A2
    uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      uuAppErrorMap,
      WARNINGS.loadUnsupportedKeys.code,
      Errors.View.InvalidDtoIn
    );

    let item = await this.daoItem.view(awid, dtoIn.id);
    if (!item) {
      throw new Errors.View.ItemDoesNotExist(uuAppErrorMap, { id: dtoIn.id })
    }

    item.checkmark = dtoIn.checkmark;

    const dtoOut = {
      ...item,
      uuAppErrorMap
    }

    return dtoOut;
  };

}

module.exports = new ItemAbl();
