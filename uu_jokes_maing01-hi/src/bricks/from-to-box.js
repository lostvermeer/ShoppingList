//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, useEffect} from "uu5g05";
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

const FromToBox = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "FromToBox",
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
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, FromToBox);

    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
  
    const handleSubmit = event => {
      console.log('handleSubmit ran');
      event.preventDefault();
      
      console.log('from', from);
      console.log('to', to);
  
      setForm(from);
      setTo(to);
    };
  
    return (
      <div>Number of kilometers
        <form onSubmit={handleSubmit}>
          <div>From
            <input
              id="from"
              onChange={event => setFrom(event.target.value)}
              value={from}
            />
          </div>
          <div>To 
            <input
              id="to"
              value={to}
              onChange={event => setTo(event.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );

    //@@viewOff:render
  },
});

//@@viewOn:exports
export { FromToBox };
export default FromToBox;
//@@viewOff:exports
