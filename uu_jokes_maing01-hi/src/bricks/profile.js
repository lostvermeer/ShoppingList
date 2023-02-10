//@@viewOn:imports
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

const Profile = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Profile",
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
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Profile);

    let sayHello = function (){ 
      alert("Proffesor's contacts here")
      
      //props.whetherdisabled = false;
    };

    return currentNestingLevel ? (
      <div>
      <div style={{ display: "flex", width:"650px", height: "290px", textAlign: "center", border: '2px solid black'}}> 
        <div style={{margin: "10px", width:"200px", height: "200px", textAlign: "center"}}><UU5.Bricks.Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sir-john-meurig-thomas_rare-book-room.jpg/150px-Sir-john-meurig-thomas_rare-book-room.jpg"
          width={200} />
        </div>

        <div style={{ width:"450px", height: "200px", textAlign: "Left"}}><h2>Professor Liam</h2> <p>Mr.Glynn Liam is the Professor of General Practice at the University of Limerick School of Medicine. He was previously Senior Lecturer in General Practice in the College of Medicine, Nursing and Health Sciences, National University of Ireland, Galway and also Adjunct Senior Clinical Lecturer, School of Medicine, University of Limerick.</p> 
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
