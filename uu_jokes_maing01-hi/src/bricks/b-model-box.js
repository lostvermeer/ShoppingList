//@@viewOn:imports
import { PropTypes } from "uu5g04";
import { createVisualComponent, Utils, Content, useState, useEffect} from "uu5g05";
import Config from "./config/config.js";
import React from "react";


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

const BModelBox = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "BModelBox",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
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
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, BModelBox);
    const brands = [
      {id:"1", name:"Mercedes"},
      {id:"2", name:"BMW"}
    ]

    const models = [
      {id:"1", brandId:"1", name:"Mercedes-AMG"},
      {id:"2", brandId:"1", name:"Mercedes-Maybach"},
      {id:"3", brandId:"2", name:"BMW M5"},
      {id:"4", brandId:"2", name:"BMW 7 series"}
    ]

    const [brand, setBrand] = useState ([]);
    const [model, setModel] = useState ([]);

    useEffect( () => {
      setBrand(brands);
    }, []);

    const handleBrand = (id) => {
      const dt = models.filter(x => x.brandId === id);
      setModel(dt);
    }

    return (
      <div> 

        <div style = {{textAlign: "center", margin: "0 auto"}}>
            <select id="ddlBrand" style = {{width: "20%", margin: "0 auto"}} onChange={(e) => handleBrand(e.target.value)}>
              <option value = "0">Select Brand</option>
              {
                brand &&
                brand !== undefined ?
                brand.map((brnd, index) => {
                  return(
                    <option key={index} value={brnd.id}>{brnd.name}</option>
                  )
                })
                :"No Brand"
              }
            </select>
          </div>

          <br></br>
          
          <div style = {{textAlign: "center", margin: "0 auto"}}>
          <select id="ddlModel" style = {{width: "20%", margin: "0 auto"}}>
            <option value = "0">Select Model</option>
            {
              model &&
              model !== undefined ?
              model.map((md, index) => {
                return(
                  <option key={index} value={md.id}>{md.name}</option>
                )
              })
              :"No Model"
            }
          </select>  
        </div>

      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { BModelBox };
export default BModelBox;
//@@viewOff:exports
