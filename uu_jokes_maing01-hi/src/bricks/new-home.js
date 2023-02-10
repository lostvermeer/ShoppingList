//@@viewOn:imports
import { createVisualComponent, Utils, Content,  PropTypes } from "uu5g05";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar.js";
import Main from "./main.js";
import CountBox from "./count-box"
import Table from "./table";
//import { PropTypes } from "uu5g04";
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

const NewHome = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "NewHome",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    studentsArray: PropTypes.array,
    UpperBox: PropTypes.array,
    TeacherPofileVC: PropTypes.object
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOn:private
    
    

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, NewHome);

    return currentNestingLevel ? (
      <>
        <RouteBar/>
        <div>

          <div style = {{display: 'flex'}}>

          <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: "2cm", fontWeight: 'bold', marginLeft: "150px"}}><CountBox title = {props.UpperBox[0].title}  amount = {props.UpperBox[0].name} /></div> 
          <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: "2cm", fontWeight: 'bold', marginLeft: "150px"}}><CountBox title = {props.UpperBox[1].title}  amount = {props.UpperBox[1].name}/></div> 
          <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: "2cm", fontWeight: 'bold', marginLeft: "150px"}}><CountBox title = {props.UpperBox[2].title}  amount = {props.UpperBox[2].name} /></div> 
          <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: "2cm", fontWeight: 'bold', marginLeft: "150px"}}><CountBox title = {props.UpperBox[3].title}  amount = {props.UpperBox[3].name} /></div> 
          
          </div> 
          
          <br></br>

          <div style = {{display: 'flex', marginLeft: "30px"}}>
          <Main TeacherPofile = {props.TeacherPofileVC}/>
          </div>

          <div>
          <Table students = {props.studentsArray}/>
          </div>

        </div>  
      </>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { NewHome };
export default NewHome;
//@@viewOff:exports
