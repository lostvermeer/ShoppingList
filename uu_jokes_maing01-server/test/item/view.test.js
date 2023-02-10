const { TestHelper } = require("uu_appg01_server-test");
const { ItemAbl } = require("../../app/abl/item-abl");

describe("Testing the testing list functions...", () => {
    test("HDS", async () => {
      
      let dtoIn = {};
      let awid = 22222222222222222222222222222222; 
      let dtoOut = ItemAbl.list(awid, dtoIn);
      console.log(dtoOut);

      
      let result = await TestHelper.executePostCommand("item/list", dtoIn, session);
    
        expect(result.status).toEqual(200);
        expect(result.data.uuAppErrorMap).toBeDefined();
    });
});