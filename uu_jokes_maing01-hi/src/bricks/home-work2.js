//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState } from "uu5g05";
import { WithRouteBar } from "uu_plus4u5g02-app";
import RouteBar from "../core/route-bar";
import Config from "./config/config.js";
import Hw2Box from "./hw2-box";
import Hw2Button from "./hw2-button";
import Hw2Clock from "./hw2-clock";

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

const HomeWork2 = createVisualComponent({

  
  //@@viewOn:statics
  uu5Tag: Config.TAG + "HomeWork2",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics


  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
  
  },
  //@@viewOff:defaultProps

  render(props) {

    const [counter, setCounter] = useState({
      counterForBoxComponent : 0,
      counterForButtonComponet1: 0,
      counterForButtonComponet2: 0,
      counterForButtonComponet3: 0
    });

    const [jokesOne, setJokesOne] = useState({
      buttonWhetherDisabledOne: 0
    });

    const [jokesTwo, setJokesTwo] = useState({
      buttonWhetherdisabledTwo: 0
    });

    const [jokesThree, setJokesThree] = useState({
      buttonWhetherdisabledThree: 0
    });

    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    
//

    let myFun1 = function () { 
      let a = jokesOne.buttonWhetherDisabledOne;

      if (counter.counterForButtonComponet1 >= 9){
        a = jokesOne.buttonWhetherDisabledOne + 1;
      }

      let newJokesOne = {
        buttonWhetherDisabledOne: a
      }

      let box = counter.counterForBoxComponent + 1;
      let one = counter.counterForButtonComponet1 + 1;
      let two = counter.counterForButtonComponet2;
      let three = counter.counterForButtonComponet3;
      let newCounter = {
      counterForBoxComponent : box,
      counterForButtonComponet1:one,
      counterForButtonComponet2: two,
      counterForButtonComponet3: three
      }

      setJokesOne(newJokesOne);
      setCounter(newCounter);
      
    }

    let myFun2 = function () { 
      let b = jokesTwo.buttonWhetherdisabledTwo;

      if (counter.counterForButtonComponet2 >= 9){
        b = jokesTwo.buttonWhetherdisabledTwo + 1;
      }

      let newJokesTwo = {
        buttonWhetherdisabledTwo: b
      }

      let box = counter.counterForBoxComponent + 1;
      let one = counter.counterForButtonComponet1;
      let two = counter.counterForButtonComponet2 + 1;
      let three = counter.counterForButtonComponet3;
      let newCounter = {
      counterForBoxComponent : box,
      counterForButtonComponet1:one,
      counterForButtonComponet2: two,
      counterForButtonComponet3: three
      }


      setJokesTwo(newJokesTwo);
      setCounter(newCounter);
      
    }

    let myFun3 = function () { 
      let c = jokesThree.buttonWhetherdisabledThree;

      if (counter.counterForButtonComponet3 >= 9){
        c = jokesThree.buttonWhetherdisabledThree + 1;
      }

      let newJokesThree = {
        buttonWhetherdisabledThree: c
      }

      let box = counter.counterForBoxComponent + 1;
      let one = counter.counterForButtonComponet1;
      let two = counter.counterForButtonComponet2;
      let three = counter.counterForButtonComponet3 + 1;
      let newCounter = {
      counterForBoxComponent : box,
      counterForButtonComponet1:one,
      counterForButtonComponet2: two,
      counterForButtonComponet3: three
      }


      setJokesThree(newJokesThree);
      setCounter(newCounter);
      
    }

   



    return (
      <>
      <RouteBar/>

      <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: "2cm", fontWeight: 'bold'}}><Hw2Box text = "Sum of customers that are currently shopping" mynumber = {counter.counterForBoxComponent} /></div> 
      <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'}}><Hw2Clock/></div>
      <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: "2cm", fontWeight: 'bold'}}><Hw2Button text = "GUCCI shop" mynumber = {counter.counterForButtonComponet1} decrement = {myFun1} whetherdisabled = {jokesOne.buttonWhetherDisabledOne} /></div>
      <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: "2cm", fontWeight: 'bold'}}><Hw2Button text = "PRADA shop" mynumber = {counter.counterForButtonComponet2} decrement = {myFun2} whetherdisabled = {jokesTwo.buttonWhetherdisabledTwo} /></div>
      <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center', height: "2cm", fontWeight: 'bold'}}><Hw2Button text = "CHANEL shop" mynumber = {counter.counterForButtonComponet3} decrement = {myFun3} whetherdisabled = {jokesThree.buttonWhetherdisabledThree} /></div>
      </>
      
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { HomeWork2 };
export default HomeWork2;
//@@viewOff:exports
