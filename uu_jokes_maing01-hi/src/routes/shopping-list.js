//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";
import ShoppingListVC from "../bricks/shopping-list";
import ItemProvider from "../bricks/my-component/item-provider";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants
ItemProvider
//@@viewOn:helpers
//@@viewOff:helpers

const ShoppingList = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingList",
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
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (

      <ItemProvider><ShoppingListVC/></ItemProvider>
      
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingList };
export default ShoppingList;
//@@viewOff:exports
