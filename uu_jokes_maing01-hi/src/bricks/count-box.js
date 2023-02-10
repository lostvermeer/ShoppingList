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

const CountBox = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "CountBox",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    title: PropTypes.string,
    amount: PropTypes.string 
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
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, CountBox);

    return currentNestingLevel ? (
      <div> 
        <div style={{ width:"4cm", height: "65px", textAlign: "center", border: '2px solid black'}}>

          <div style={{marginTop: "10px"}}>{props.title}</div>
          <div style={{marginTop: "10px"}}>{props.amount}</div>
        </div>
      </div>

    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { CountBox };
export default CountBox;
//@@viewOff:exports
