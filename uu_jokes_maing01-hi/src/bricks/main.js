//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import DashChart, { Chart } from "./dashChart";
import ChartProvider from "./chart/chart-provider";
import Profile from "./profile.js";

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

const Main = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Main",
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
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Main);

    return (
      <>

      <div style={{marginTop: "75px"}}><Profile/></div>
      <div style={{width:"650px"}}><h1>Prubezne hodnocení podle temat</h1><ChartProvider><DashChart/></ChartProvider></div>

      </>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Main };
export default Main;
//@@viewOff:exports
