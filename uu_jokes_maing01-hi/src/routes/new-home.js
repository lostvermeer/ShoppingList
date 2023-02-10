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

    let UpperBoxN = [
      {
        title: "Počet dnů hatchery",
        name: "45"
      },
      {
        title: "Počet účastínků",
        name: "28"
      },
      {
        title: "Počet lektorů",
        name: "7"
      },
      {
        title: "Hodnocení",
        name: "86%"
      }
    ];

    let TeacherPofileN = {
      picture:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sir-john-meurig-thomas_rare-book-room.jpg/150px-Sir-john-meurig-thomas_rare-book-room.jpg",
      name: "Liam Adams",
      text: "Mr.Glynn Liam is the Professor of General Practice at the University of Limerick School of Medicine. He was previously Senior Lecturer in General Practice in the College of Medicine, Nursing and Health Sciences, National University of Ireland, Galway and also Adjunct Senior Clinical Lecturer, School of Medicine, University of Limerick."

    };


    return (
      <>
      <NewHomeVC studentsArray = {studArray} UpperBox = {UpperBoxN} TeacherPofileVC = {TeacherPofileN}/>
      </>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { NewHome };
export default NewHome;
//@@viewOff:exports
