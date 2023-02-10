//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";
import TestVC from "../bricks/test";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Test = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Test",
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
      <TestVC/>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Test };
export default Test;
//@@viewOff:exports
