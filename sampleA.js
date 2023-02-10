//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import { React } from "react";
import "uu5g04-bricks";

import Config from "./config/config.js";
import UU5 from "uu5g04";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  icon: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Home = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Home",

  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { identity } = useSession();
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      //Background Container
      <UU5.Bricks.Container>
        <UU5.Bricks.Container>
          <UU5.Bricks.Column colWidth="xs-12 s-3">
            <UU5.Bricks.Text className="center">Počet dnů hatchery</UU5.Bricks.Text>
            <UU5.Bricks.Text className="center">45</UU5.Bricks.Text>
          </UU5.Bricks.Column>
          <UU5.Bricks.Column colWidth="xs-12 s-3">
            <UU5.Bricks.Text className="center">Počet účastínků</UU5.Bricks.Text>
            <UU5.Bricks.Text className="center">15</UU5.Bricks.Text>
          </UU5.Bricks.Column>
          <UU5.Bricks.Column colWidth="xs-12 s-3">
            <UU5.Bricks.Text className="center">Počet lektorů</UU5.Bricks.Text>
            <UU5.Bricks.Text className="center">10</UU5.Bricks.Text>
          </UU5.Bricks.Column>
          <UU5.Bricks.Column colWidth="xs-12 s-3">
            <UU5.Bricks.Text className="center">Hodnocení</UU5.Bricks.Text>
            <UU5.Bricks.Text className="center">94%</UU5.Bricks.Text>
          </UU5.Bricks.Column>
        </UU5.Bricks.Container>

        <UU5.Bricks.Container>
          <UU5.Bricks.Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            width={200}
          />
          <UU5.Bricks.Container>
            <UU5.Bricks.Container header="Lektor Jakub">
              <UU5.Bricks.P>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos hymenaeos. Donec ipsum massa, ullamcorper in, auctor et,
                scelerisque sed, est. Vestibulum fermentum tortor id mi. Etiam commodo dui eget wisi. Integer malesuada.
                Fusce consectetuer risus a nunc. Nullam eget nisl. In sem justo, commodo ut, suscipit at, pharetra
                vitae, orci. Aenean placerat. Etiam neque. Fusce suscipit libero eget elit.
              </UU5.Bricks.P>
              <UU5.Bricks.Button>Kontaktovat</UU5.Bricks.Button>
            </UU5.Bricks.Container>
            <UU5.Bricks.Container header="Průběžné hodnocení podle témat">
              <UU5.Bricks.Image src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/graph-wiki_ver_1.png" />
            </UU5.Bricks.Container>
          </UU5.Bricks.Container>
        </UU5.Bricks.Container>
        <UU5.Bricks.Container>
        <UU5.Bricks.Table header="Studenti">
          <UU5.Bricks.Table.THead>
            <UU5.Bricks.Table.Tr>
              <UU5.Bricks.Table.Th content="Jméno" />
              <UU5.Bricks.Table.Th content="Bio" />
              <UU5.Bricks.Table.Th content="Průběžné hodnocení" />
            </UU5.Bricks.Table.Tr>
          </UU5.Bricks.Table.THead>
          <UU5.Bricks.Table.TBody>
            <UU5.Bricks.Table.Tr>
              <UU5.Bricks.Table.Td content="Jan Novák" />
              <UU5.Bricks.Table.Td content="Nadějný programátor z Hronova" />
              <UU5.Bricks.Table.Td content="99%" />
            </UU5.Bricks.Table.Tr>
            <UU5.Bricks.Table.Tr>
              <UU5.Bricks.Table.Td content="Jana Smutná" />
              <UU5.Bricks.Table.Td content="Nadějná designerka z Třebechovic pod Orebem" />
              <UU5.Bricks.Table.Td content="100%" />
            </UU5.Bricks.Table.Tr>
            <UU5.Bricks.Table.Tr>
              <UU5.Bricks.Table.Td content="Karel Smutný" />
              <UU5.Bricks.Table.Td content="Méně nadějný programátor z Pardubic" />
              <UU5.Bricks.Table.Td content="78%" />
            </UU5.Bricks.Table.Tr>
          </UU5.Bricks.Table.TBody>
        </UU5.Bricks.Table>
      </UU5.Bricks.Container>
    </UU5.Bricks.Container>
  );

  //@@viewOff:render
},
});

Home = withRoute(Home, { authenticated: true });
//@@viewOn:exports
export { Home };
export default Home;
//@@viewOff:exports




//=====================================================

///////////////////////////////////////ORIGINAL home.js file 


//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5Elements from "uu_plus4u5g02-elements";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import WelcomeRow from "../bricks/welcome-row.js";
import RouteBar from "../core/route-bar.js";
import importLsi from "../lsi/import-lsi.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  icon: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

let Home = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Home",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { identity } = useSession();
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props);
    return (
      <div {...attrs}>
        <RouteBar />
        <WelcomeRow left={<Plus4U5Elements.PersonPhoto size="xl" borderRadius="none" />}>
          <Uu5Elements.Text category="story" segment="heading" type="h2">
            <Lsi import={importLsi} path={["Home", "welcome"]} />
          </Uu5Elements.Text>
          {identity && (
            <Uu5Elements.Text category="story" segment="heading" type="h2">
              {identity.name}
            </Uu5Elements.Text>
          )}
        </WelcomeRow>
        <WelcomeRow left={<Uu5Elements.Icon icon="mdi-human-greeting" className={Css.icon()} />}>
          <Uu5Elements.Text category="story" segment="body" type="common">
            <Lsi import={importLsi} path={["Home", "intro"]} />
          </Uu5Elements.Text>
        </WelcomeRow>
        <WelcomeRow left={<Uu5Elements.Icon icon="mdi-monitor" className={Css.icon()} />}>
          <Uu5Elements.Text category="story" segment="body" type="common">
            <Lsi import={importLsi} path={["Home", "clientSide"]} />
          </Uu5Elements.Text>
        </WelcomeRow>
        <WelcomeRow left={<Uu5Elements.Icon icon="mdi-server" className={Css.icon()} />}>
          <Uu5Elements.Text category="story" segment="body" type="common">
            <Lsi import={importLsi} path={["Home", "serverSide"]} />
          </Uu5Elements.Text>
        </WelcomeRow>
      </div>
    );
    //@@viewOff:render
  },
});

Home = withRoute(Home, { authenticated: true });

//@@viewOn:exports
export { Home };
export default Home;
//@@viewOff:exports
