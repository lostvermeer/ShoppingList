//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";

const Css = {
  main: () => Config.Css.css({}),
};

const ColorSchema = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ColorSchema",
  nestingLevel: ["areaCollection", "area"],

  propTypes: {},
  //@@viewOff:propTypes

  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {

    const { children } = props;

    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, ColorSchema);

    return currentNestingLevel ? (
      <>
      <RouteBar/>
      <div>Hello World!</div>
      
      </>
    ) : null;
    
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ColorSchema };
export default ColorSchema;
//@@viewOff:exports
