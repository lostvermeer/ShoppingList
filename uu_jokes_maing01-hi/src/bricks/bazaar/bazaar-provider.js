//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g05";
import Config from "./config/config.js";
import BazaarContext, { useBazaar } from "./bazaar-context";
import Calls from "../../calls";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const BazaarProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "BazaarProvider",
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
    

    const myDataObject = useDataObject ({
      handlerMap: {
        load:handleLoad
      }
    });

    async function handleLoad () {
      const dtoOut = await Calls.getDataItemList();
      return dtoOut;
    }

    let myData = {
      "data": [
          {
          "brand": "Mercedes",
          "model": "Mercedes-AMG",
          "miles": "100000",
          "price": "100000",
          "fuel": "Petrol"
  
          },
          {
            "brand": "Mercedes",
            "model": "Mercedes-AMG",
            "miles": "200000",
            "price": "200000",
            "fuel": "Petrol"
    
          },
          {
            "brand": "Mercedes",
            "model": "Mercedes-AMG",
            "miles": "150000",
            "price": "150000",
            "fuel": "Petrol"
    
          },
          {
            "brand": "Mercedes",
            "model": "Mercedes-AMG",
            "miles": "200000",
            "price": "200000",
            "fuel": "Electricity"
    
          },
          {
            "brand": "Mercedes",
            "model": "Mercedes-AMG",
            "miles": "1309000",
            "price": "1309000",
            "fuel": "Electricity"
    
          },
          {
            "brand": "Mercedes",
            "model": "Mercedes-AMG",
            "miles": "200000",
            "price": "200000",
            "fuel": "Diesel"
    
          },
          {
            "brand": "Mercedes",
            "model": "Mercedes-AMG",
            "miles": "56000",
            "price": "56000",
            "fuel": "Diesel"
    
          },
          {
            "brand": "Mercedes",
            "model": "Mercedes-Maybach",
            "miles": "300000",
            "price": "300000",
            "fuel": "Petrol"
          
          },
          {
            "brand": "Mercedes",
            "model": "Mercedes-Maybach",
            "miles": "156000",
            "price": "156000",
            "fuel": "Electricity"
          
          },
          {
            "brand": "Mercedes",
            "model": "Mercedes-Maybach",
            "miles": "400000",
            "price": "400000",
            "fuel": "Diesel"
          
          },
          {
            "brand": "Mercedes",
            "model": "Mercedes-Maybach",
            "miles": "157000",
            "price": "157000",
            "fuel": "Diesel"
          
          },
          {
            "brand": "BMW",
            "model": "BMW M5",
            "miles": "500000",
            "price": "500000",
            "fuel": "Petrol"
          
          },
          {
            "brand": "BMW",
            "model": "BMW M5",
            "miles": "200100",
            "price": "200100",
            "fuel": "Petrol"
          
          },
          {
            "brand": "BMW",
            "model": "BMW M5",
            "miles": "600000",
            "price": "600000",
            "fuel": "Electricity"
          
          },
          {
            "brand": "BMW",
            "model": "BMW M5",
            "miles": "320000",
            "price": "320000",
            "fuel": "Electricity"
          
          },
          {
            "brand": "BMW",
            "model": "BMW M5",
            "miles": "257000",
            "price": "267000",
            "fuel": "Diesel"
          
          },
          {
            "brand": "BMW",
            "model": "BMW M5",
            "miles": "130000",
            "price": "130000",
            "fuel": "Diesel"
          
          },
          {
            "brand": "BMW",
            "model": "BMW 7 series",
            "miles": "300000",
            "price": "300000",
            "fuel": "Petrol"
          
          },
          {
            "brand": "BMW",
            "model": "BMW 7 series",
            "miles": "700000",
            "price": "700000",
            "fuel": "Petrol"
          
          },
          {
            "brand": "BMW",
            "model": "BMW 7 series",
            "miles": "120000",
            "price": "120000",
            "fuel": "Petrol"
          
          },
          {
            "brand": "BMW",
            "model": "BMW 7 series",
            "miles": "250000",
            "price": "250000",
            "fuel": "Diesel"
          
          },
          {
            "brand": "BMW",
            "model": "BMW 7 series",
            "miles": "270000",
            "price": "270000",
            "fuel": "Diesel"
          
          },
          {
            "brand": "BMW",
            "model": "BMW 7 series",
            "miles": "149000",
            "price": "149000",
            "fuel": "Electricity"
          
          },
          {
            "brand": "BMW",
            "model": "BMW 7 series",
            "miles": "245000",
            "price": "245000",
            "fuel": "Electricity"
          
          }       
      ]
    };

    return (<BazaarContext.Provider value = {myData}>{children ?? null}</BazaarContext.Provider>)

    // let { state, data, errorData, pendingData, handlerMap } = myDataObject;

    // switch (state) {
    //   case "ready":
    //     return <BazaarContext.Provider value = {myData}>{children ?? null}</BazaarContext.Provider>
    //   case "pending":
    //   case "pendingNoData":

    //   case "error":
    //   case "errorNoData":
            
    //   case "readyNoData":
    //     default:
    //       return <BazaarContext.Provider value = {myData}>{children ?? null}</BazaarContext.Provider>
    // }
    
  },
});

//@@viewOn:exports
export { BazaarProvider };
export default BazaarProvider;
//@@viewOff:exports
