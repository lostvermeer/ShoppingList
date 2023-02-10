//@@viewOn:imports
import { PropTypes } from "uu5g04";
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
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

const Hw2Box = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Hw2Box",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    text: PropTypes.string,
    mynumber: PropTypes.number
  },
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
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Hw2Box);


    return currentNestingLevel ? (
      <div width = "500px" > 
        <div style={{width:"500px", textAlign: "center", border: '1px solid red'}}>

          <div>{props.text}</div>
          <div>{props.mynumber}</div>
        </div>
      </div>

    ) : null;
    //@@viewOff:render
  },
});




//@@viewOn:exports
export { Hw2Box };
export default Hw2Box;
//@@viewOff:exports
