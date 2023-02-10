//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState} from "uu5g05";
import { createComponent, useEffect, useInterval } from "uu5g04-hooks";
import Config from "./config/config.js";
import Hw2Button from "./hw2-button";
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

const Hw2Clock = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Hw2Clock",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    const [time, setTime] = useState()

    const [Shop, setIfShop] = useState({
      ifActive: 1
    })
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Hw2Clock);

    useEffect(() => {
      setInterval(() => {

        const dateObject = new Date();
        
        const hour = dateObject.getHours();
        const minute = dateObject.getMinutes();
        const second = dateObject.getSeconds();
  
        const currentTime = hour + ':' + minute + ':' + second;
        

        setTime(currentTime)
      }, 1000);
      
    });

    return (

      <div style={{width:"500px", textAlign: "center"}}>{time}</div>

    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Hw2Clock };
export default Hw2Clock;
//@@viewOff:exports
