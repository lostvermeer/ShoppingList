//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";
import BazaarVC from "../bricks/bazaar"
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Bazaar = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Bazaar",
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
      <BazaarVC/>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Bazaar };
export default Bazaar;
//@@viewOff:exports
