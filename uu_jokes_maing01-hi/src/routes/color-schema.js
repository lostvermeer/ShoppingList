//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";
import ColorSchemaVC from "../bricks/color-schema"
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const ColorSchema = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ColorSchema",
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
      <ColorSchemaVC/>
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ColorSchema };
export default ColorSchema;
//@@viewOff:exports
