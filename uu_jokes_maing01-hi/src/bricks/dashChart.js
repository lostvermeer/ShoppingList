//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import "uu5chartg01";
import {useChart} from "./chart/chart-context"


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

const Chart = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Chart",
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

    const myData1 = useChart();

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Chart);

    return (
      <div>
        <UU5.SimpleChart.BarChart series= {myData1.series} data={myData1.data}/>
        
      </div>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Chart };
export default Chart;
//@@viewOff:exports
