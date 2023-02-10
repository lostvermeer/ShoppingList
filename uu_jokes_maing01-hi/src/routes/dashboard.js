//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";
import DashboardVC from "../bricks/dashboard"
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Dashboard = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Dashboard",
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
    return(
      <DashboardVC/>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Dashboard };
export default Dashboard;
//@@viewOff:exports
