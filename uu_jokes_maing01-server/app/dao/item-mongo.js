"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;
const ShopListMongo = require("./shop-list-mongo");

class ItemMongo extends UuObjectDao {

  async createSchema(){
  }

  async getByShopListId (awid, id) {

    let filter = {
      awid: awid,
      shoppingListId: id
    }
    let result = await super.find(filter);
    return result;
  }

  async getById (awid, id) {

    let filter = {
      awid: awid,
      id: id
    }
    let result = await super.findOne(filter);
    return result;
  }

  async add (awid, UuObject) {

    let newUuObject = {
      awid: awid,
      ...UuObject,
    };
    return await super.insertOne(newUuObject);
  }

  async list(awid, pageInfo = {}) {
    return await super.find({awid}, pageInfo);
  }

  async view(awid, id) {
    return await super.findOne({awid, id});
  }

  async update(awid, UuObject) {
    return await super.findOneAndUpdate({awid, id: UuObject.id}, UuObject, "NONE");
  }

  async delete (awid, UuObject) {
    let thisItem = await super.findOne({awid, id: UuObject.id});
    await super.deleteOne({awid, id: UuObject.id});
    return thisItem;
  }

}

module.exports = ItemMongo;
