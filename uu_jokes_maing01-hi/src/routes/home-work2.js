//@@viewOn:imports
import { createVisualComponent, createComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import HomeWork2VC from "../bricks/home-work2"
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const HomeWork2 = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "HomeWork2",
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
    <HomeWork2VC/>
    );

    //@@viewOff:render
  },
});

//@@viewOn:exports
export { HomeWork2 };
export default HomeWork2;
//@@viewOff:exports
