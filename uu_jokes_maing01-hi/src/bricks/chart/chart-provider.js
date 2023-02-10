//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g05";
import Config from "./config/config.js";
import ChartContext, { useChart } from "./chart-context";
import Calls from "../../calls.js";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const ChartProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ChartProvider",
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


    const myDataObject = useDataObject({
      handlerMap: {
        load: handleLoad
      }
    });

    async function handleLoad() {
      const dtoOut = await Calls.getChartData();
      return dtoOut;
    }

    let myData = { 
      "series": [ 
          {
          "valueKey": "value",
          "name": "First chart",
          "colorSchema": "red"
          },
          {
          "valueKey": "value2",
          "name": "Second chart",
          "colorSchema": "blue"
          },
          {
          "valueKey": "value3",
          "name": "Third chart"
          }
      ],
      "data": [
          {
          "label": "Vector space",
          "value": 400,
          "value2": 300,
          "value3": 100
          },
          {
          "label": "Matrix",
          "value": 300,
          "value2": 100,
          "value3": 200
          },
          {
          "label": "Combinatorics",
          "value": 200,
          "value2": 140,
          "value3": 300
          },
          {
          "label": "Binary Relation",
          "value": 278,
          "value2": 200,
          "value3": 400
          },
          {
          "label": "Analytic geometry",
          "value": 189,
          "value2": 290,
          "value3": 140
          }
      ]
  };
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    //return children ?? null;
    let { state, data, errorData, pendingData, handlerMap } = myDataObject;

    switch (state) {
      case "ready":
        return <ChartContext.Provider value = {data}>{children ?? null}</ChartContext.Provider>
      case "pending":
      case "pendingNoData":

      case "error":
      case "errorNoData":
            
      case "readyNoData":
        default:
          return <ChartContext.Provider value = {myData}>{children ?? null}</ChartContext.Provider>
    }

    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ChartProvider };
export default ChartProvider;
//@@viewOff:exports
