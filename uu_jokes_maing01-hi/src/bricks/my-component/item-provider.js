//@@viewOn:imports
import { createComponent, useDataList } from "uu5g05";
import Config from "./config/config.js";
import ItemContext, { useItem } from "./item-context";
import Calls from "../../calls"
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const ItemProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ItemProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;


    const myDataList = useDataList({
      handlerMap: {
        load: handleLoad,
        createItem: handleCreate
      }
    });

    async function handleLoad() {
      const dtoOut = await Calls.getDataItemList();
      return dtoOut;
    }

    async function handleCreate(newItem) {
      const dtoOut = await Calls.addItem(newItem);
      return dtoOut;
    }



    let { state, data, newData, pendingData, errorData, handlerMap } = myDataList;

    return <ItemContext.Provider value = {myDataList}>{children ?? null}</ItemContext.Provider>
    
  },
});

//@@viewOn:exports
export { ItemProvider };
export default ItemProvider;
//@@viewOff:exports
