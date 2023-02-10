//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, useEffect} from "uu5g05";
import Config from "./config/config.js";
import RouteBar from "../core/route-bar";
import BModelBox from "./b-model-box.js";
import FromToBox from "./from-to-box";
import React from "react";
import ReactDOM from "react-dom";
import { useBazaar } from "./bazaar/bazaar-context.js";
import BazaarProvider from "./bazaar/bazaar-provider.js";
import VCCars, {Cars} from "./cars.js";
import { PropTypes } from "uu5g04"

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

const Bazaar = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Bazaar",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    currentBrandTemp: PropTypes.object,
    currentModelTemp: PropTypes.object,
    fromVal1Temp: PropTypes.string,
    toVal1Temp: PropTypes.string,
    fromVal2Temp: PropTypes.string,
    toVal2Temp: PropTypes.string,
    selectedRadioButTemp: PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    currentBrandTemp: {id: "Default"},
    currentModelTemp: {dafault: "Default"},
    fromVal1Temp: "Default",
    toVal1Temp: "Default",
    fromVal2Temp: "Default",
    toVal2Temp: "Default",
    selectedRadioButTemp: "Default"
  },
  //@@viewOff:defaultProps
  
  render(props) {

    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private
    
    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Bazaar);



///////////////////////////////////////////////// Brand and Models box
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
    const [currentBrand, setCurrentBrand] = useState ([]);
    const [currentModel, setCurrentModel] = useState ([]);

    useEffect( () => {
      setBrand(brands);
    }, []);

    const handleBrand = (id) => {
      if (id === "0"){
        const mf = models.filter(x => x.brandId === id);
        setModel(mf);
        const bf = brands.filter(x => x.id === id );
        setCurrentBrand(bf);
      }
      else if ( currentBrand !== id ){
        const mf = models.filter(x => x.brandId === id);
        setModel(mf);
        const bf = brands.filter(x => x.id === id );
        setCurrentBrand(bf);
        if (currentModel[0].id === "1") {handleModel("3");}
        if (currentModel[0].id === "2") {handleModel("4");}
        if (currentModel[0].id === "3") {handleModel("1");}
        if (currentModel[0].id === "4") {handleModel("2");}
      }
    }

    const handleModel = (id) => {
      const mf = models.filter(x => x.id === id);
      setCurrentModel(mf);
    }

///////////////////////////////////////////////// From to box of Number of kilometers
  const [fromVal1, setFromVal1] = useState('');
  const [toVal1, setToVal1] = useState('');

///////////////////////////////////////////////// From to box of Price
  const [fromVal2, setFromVal2] = useState('');
  const [toVal2, setToVal2] = useState('');

///////////////////////////////////////////////// Radio Buttons
  const [selectedRadioBut, setSelectedRadioBut] = useState('')

  const isRadioSelected = (value) => selectedRadioBut === value;

///////////////////////////////////////////////// Handle button Submit for all
  const handleSubmit = event => {
    setFromVal1(fromVal1);
    setToVal1(toVal1);
    setFromVal2(fromVal2);
    setToVal2(toVal2);
    setSelectedRadioBut(event.target.value);
  };
  
  
  const [currentBrandTemp, setCurrentBrandTemp] = useState({});
  const [currentModelTemp, setCurrentModelTemp] = useState({});
  const [fromVal1Temp, setFromVal1Temp] = useState("");
  const [toVal1Temp, setToVal1Temp] = useState("");
  const [fromVal2Temp, setFromVal2Temp] = useState("");
  const [toVal2Temp, setToVal2Temp] = useState("");
  const [selectedRadioButTemp, setSelectedRadioButTemp] = useState("");

  const[active, setActive] = useState("First")

  const sub = () => {
    //alert( currentBrand[0].name  + '\n' + currentModel[0].name)
    if (!currentBrand[0] || !currentModel[0] || !fromVal1 || !toVal1 || !fromVal2 || !toVal2 || !selectedRadioBut){return alert("Please select all fields");}
    //alert("Brand: " + currentBrand[0].name + '\n' + "Model: " + currentModel[0].name + '\n' + "***Number of kilometers***" + '\n' + "From: " + fromVal1 + '\n' + "To: " + toVal1 + '\n' + "***Price***" + '\n' + "From: " + fromVal2 + '\n' + "To: " + toVal2 + '\n' + "***" + selectedRadioBut + "***")


    setCurrentBrandTemp(currentBrand[0])
    setCurrentModelTemp(currentModel[0])
    setFromVal1Temp(fromVal1)
    setToVal1Temp(toVal1)
    setFromVal2Temp(fromVal2)
    setToVal2Temp(toVal2)
    setSelectedRadioButTemp(selectedRadioBut) 
    
    setActive("Second")
    return;
  }

//////////////////////////////////////////////////////// Context and Provider

let MyData = useBazaar();

  
        return (
          <>
          <RouteBar/>
          
          <br></br>

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
              <select id="ddlModel" style = {{width: "20%", margin: "0 auto"}} onChange={(e) => handleModel(e.target.value)}>
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
            





            <br></br>






            <div style = {{textAlign: "center", margin: "0 auto"}}>Number of kilometers
              <form onSubmit={handleSubmit}>   
                <div style = {{textAlign: "center", margin: "0 auto"}}> From &ensp;
                  <input onChange={event => setFromVal1(event.target.value)} value={fromVal1}/>
                </div>
                <div style = {{textAlign: "center", margin: "0 auto"}}> To &ensp;&ensp;&ensp;
                  <input onChange={event => setToVal1(event.target.value)} value={toVal1}/>
                </div>
                
                </form>  
            </div>



            <br></br>




            <div style = {{textAlign: "center", margin: "0 auto"}}>Price
              <form onSubmit={handleSubmit}>    
                <div style = {{textAlign: "center", margin: "0 auto"}}> From &ensp;
                  <input onChange={event => setFromVal2(event.target.value)} value={fromVal2}/>
                </div>
                <div style = {{textAlign: "center", margin: "0 auto"}}> To &ensp;&ensp;&ensp;
                  <input onChange={event => setToVal2(event.target.value)} value={toVal2}/>
                </div>
                
                </form>  
            </div> 



            <br></br>



            <div style = {{textAlign: "center", margin: "0 auto"}}>

              <label style={{marginBottom: "0"}}>
                <input
                  type= "radio" 
                  name = "radioBut" 
                  value="Petrol" 
                  checked={isRadioSelected("Petrol")} 
                  onChange= {handleSubmit}>
                </input> Petrol&ensp;&ensp;
              </label>

              <label style={{marginBottom: "0"}}> 
                <input 
                  type= "radio" 
                  name = "radioBut" 
                  value="Diesel" 
                  checked={isRadioSelected("Diesel")} 
                  onChange= {handleSubmit}>
                </input> Diesel&ensp;&ensp;
              </label>

              <label style={{marginBottom: "0"}}>
                <input 
                  type= "radio" 
                  name = "radioBut" 
                  value="Electricity"
                  checked={isRadioSelected("Electricity")} 
                  onChange= {handleSubmit}>
                </input> Electricity&ensp;&ensp;
              </label>

            </div>

            <br></br>

            <div style = {{textAlign: "center", margin: "0 auto"}}>
                  <button type="submit" onClick={sub}>Submit</button>
                </div>


          </div>

          <br></br>

          <div style = {{width: "39%", textAlign: "center", margin: "0 auto"}}>
            {active === "First" && <BazaarProvider><VCCars init = {active}/></BazaarProvider>}
            {active === "Second" && <BazaarProvider>
            <VCCars 
            curBrand = {currentBrandTemp} 
            curModel = {currentModelTemp} 
            frVal1 = {fromVal1Temp}   
            tVal1 = {toVal1Temp} 
            frVal2 = {fromVal2Temp} 
            tVal2 = {toVal2Temp} 
            selRadioBut = {selectedRadioButTemp}
            init = {active}/>
            </BazaarProvider>}
            
          </div>

          </>
        );
    
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Bazaar };
export default Bazaar;
//@@viewOff:exports
