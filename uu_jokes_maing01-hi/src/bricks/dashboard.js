//@@viewOn:imports
import { createVisualComponent, Utils } from "uu5g05";
import RouteBar from "../core/route-bar";
import ChartProvider from "./chart/chart-provider";
import Config from "./config/config.js";
import DashChart, { Chart } from "./dashChart";
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

const Dashboard = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Dashboard",
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

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Dashboard);

    return (
      <>
      <RouteBar/>

      <ChartProvider><DashChart/></ChartProvider>
      </>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Dashboard };
export default Dashboard;
//@@viewOff:exports
