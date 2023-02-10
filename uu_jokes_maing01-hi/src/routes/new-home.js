//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";
import NewHomeVC from "../bricks/new-home"
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const NewHome = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "NewHome",
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

    let studArray = [
      {
        name: "Jan Novák",
        bio: "Nadějný programátor z Hronova",
        percentage: "99%"
      },
      {
        name: "Jana Smutná",
        bio: "Nadějná designerka z Třebechovic pod Orebem",
        percentage: "100%"
      },
      {
        name: "Karel Smutný",
        bio: "Méně nadějný programátor z Pardubic",
        percentage: "78%"
      }
    ];


    return (
      <>
      <NewHomeVC studentsArray = {studArray}/>
      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { NewHome };
export default NewHome;
//@@viewOff:exports
