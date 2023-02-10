//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import {useItem} from "./my-component/item-context";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ShoppingList = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingList",
  nestingLevel: ["areaCollection", "area"],
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


    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, ShoppingList);


    let MyData = useItem();

    let RenderItem = function (ArrayData) {
      let elements = [];
      ArrayData.forEach(element => {
        elements.push(<div style={{width:"500px", textAlign: "center", border: '2px solid yellow'}}>{element.data.name}<br></br>{element.data.shoppingListId}<br></br>{element.data.checkmark.toString()}</div>);
      });
      return <div>{elements}</div>;
    }
    
    let AddItem = function () {
      let nameFun = prompt("Please Enter item name:", "Item name");
      let shoppingListIdFun = prompt("Please Enter Shopping list id:", "Shopping list id");
      //let checkmarkFun1 = prompt("Please Enter Checkmark:", "Checkmark");
      //let checkmarkFun2 = checkmarkFun1.toBoolean();
      let newItem = { 
        name: nameFun,
        shoppingListId: shoppingListIdFun, //6390e65afc538d25ecbfe348
        checkmark: false // False by default
      }
      MyData.handlerMap.createItem(newItem);
    }

    

    switch(MyData.state) {
      case "ready":
        return <><RouteBar/> <div> {RenderItem(MyData.data)}  <button onClick={AddItem}>Add Item</button> </div> </>;

        default:
          return <><RouteBar/> <UU5.Bricks.Loading/></>;
      

    }
    
  },
});

//@@viewOn:exports
export { ShoppingList };
export default ShoppingList;
//@@viewOff:exports
