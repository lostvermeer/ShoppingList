"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;
const ItemMongo = require("./item-mongo");


class ShopListMongo extends UuObjectDao {

  async createSchema(){
  }

  async view(awid, id) {
    return await super.findOne({awid, id});
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

  async delete (awid, UuObject) {
    let thisItemList = await super.findOne({awid, id: UuObject.id});
    await super.deleteOne({awid, id: UuObject.id});
    return thisItemList;
  }
}

module.exports = ShopListMongo;
