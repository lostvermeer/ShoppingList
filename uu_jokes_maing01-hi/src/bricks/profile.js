//@@viewOn:imports
import { createVisualComponent, Utils, Content, PropTypes } from "uu5g05";
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

const Profile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Profile",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    Profile: PropTypes.object
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
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Profile);

    let sayHello = function (){ 
      alert("Proffesor's contacts here")
      
      //props.whetherdisabled = false;
    };

    return currentNestingLevel ? (
      <div>
      <div style={{ display: "flex", width:"650px", height: "290px", textAlign: "center", border: '2px solid black'}}> 
        <div style={{margin: "10px", width:"200px", height: "200px", textAlign: "center"}}><UU5.Bricks.Image
          src = {props.Profile.picture}
          width={200} />
        </div>

        <div style={{ width:"450px", height: "200px", textAlign: "Left"}}><h2>Professor {props.Profile.name}</h2> <p>{props.Profile.text}</p> 
        <UU5.Bricks.Button
          onClick={sayHello}
          size="xl"
          bgStyle="filled"
          style={{ marginLeft: "300px", padding: "15px" }}
          colorSchema="primary"
        >
          Contacts  
        </UU5.Bricks.Button>
        </div>
        
        <div>
      
      </div>

      </div>
      
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Profile };
export default Profile;
//@@viewOff:exports
