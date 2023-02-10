//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "./config/config.js";
import { React } from "react";
import "uu5g04-bricks";
import UU5, { PropTypes } from "uu5g04";
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

const Table = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Table",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    students: PropTypes.array
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
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Table);


    const getStudentTable= function (myArray) {
      let studentTableRows = [];
      myArray.forEach((studentRow) => studentTableRows.push(getStudentInfo(studentRow)));
        return (
          <>
            <UU5.Bricks.Table header="Studenti" level={3} style={{ margin: "15px" }} striped>
              <UU5.Bricks.Table.THead>
                <UU5.Bricks.Table.Tr>
                  <UU5.Bricks.Table.Th content="Jméno" />
                  <UU5.Bricks.Table.Th content="Bio" />
                  <UU5.Bricks.Table.Th content="Průběžné hodnocení" />
                </UU5.Bricks.Table.Tr>
              </UU5.Bricks.Table.THead>
              <UU5.Bricks.Table.TBody>{studentTableRows}</UU5.Bricks.Table.TBody>
            </UU5.Bricks.Table>
          </>
        );
    };

    const getStudentInfo = function (studyMaterial) {
      return (
        <UU5.Bricks.Table.Tr>
          <UU5.Bricks.Table.Td content={studyMaterial.name} />
          <UU5.Bricks.Table.Td content={studyMaterial.bio} />
          <UU5.Bricks.Table.Td content={studyMaterial.percentage} />
        </UU5.Bricks.Table.Tr>
      );
    };

    return (

      <div>{getStudentTable(props.students)}</div>
      
    )
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Table };
export default Table;
//@@viewOff:exports
