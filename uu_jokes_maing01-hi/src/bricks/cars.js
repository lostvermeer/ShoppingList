//@@viewOn:imports
import { PropTypes } from "uu5g04";
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import {useBazaar} from "./bazaar/bazaar-context.js";
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

const Cars = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Cars",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    curBrand: PropTypes.object,
    curModel: PropTypes.object,
    frVal1: PropTypes.string,    
    tVal1: PropTypes.string, 
    frVal2: PropTypes.string, 
    tVal2: PropTypes.string, 
    selRadioBut: PropTypes.string, 
    init: PropTypes.string 
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    curBrand: "Default",
    curModel: "Default",
    frVal1: "Default",    
    tVal1: "Default", 
    frVal2: "Default", 
    tVal2: "Default", 
    selRadioBut: "Default",
    init: ""
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;

    const myData = useBazaar();

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Cars);

    let RenderItem = function (ArrayData) {
      let elements = [];
      if (props.init === "Second") {

        ArrayData.forEach(element => { 

          if ( element.brand !== props.curBrand.name ) {
            return;
          }

          if ( element.model !== props.curModel.name ) {
            return;
          }

          if ( !((Number(props.frVal1) <= Number(element.miles)) && (Number(element.miles) <= Number(props.tVal1))) ) {
            return;
          }

          if ( !((Number(props.frVal2) <= Number(element.price)) && (Number(element.price) <= Number(props.tVal2))) ) {
            return;
          }

          if ( element.fuel !== props.selRadioBut ) {
            return;
          }

          elements.push(<div style={{width:"500px", textAlign: "center", border: '2px solid red'}}>{element.brand}<br></br>{element.model}<br></br>{element.miles}<br></br>{element.price}<br></br>{element.fuel} </div>);
        });
        return <div>{elements}</div>;
      }
      else if (props.init === "First") {
        ArrayData.forEach(element => {
          elements.push(<div style={{width:"500px", textAlign: "center", border: '2px solid red'}}>{element.brand}<br></br>{element.model}<br></br>{element.miles}<br></br>{element.price}<br></br>{element.fuel} </div>);
        });
        return <div>{elements}</div>;
      }
      
    }
   
    
    return (
      <div>
        {RenderItem(myData.data)}&ensp;
        
      </div>
    )
  },
});

//@@viewOn:exports
export { Cars };
export default Cars;
//@@viewOff:exports
