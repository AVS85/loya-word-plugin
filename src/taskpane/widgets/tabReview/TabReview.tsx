import React from "react";
// import { Button } from "@fluentui/react-components";
import { observer } from "mobx-react";
import { Summary } from "./summary";
import { Settings } from "./settings";
// import { InsertPlaceEnum, LevelOfCriticalEnum } from "../suggestion/Suggestion";
// import { Button } from "@fluentui/react-components";
// import { useStores } from "../../shared/store";
// import { MenuItemsEnums } from "../../shared/store/menu";

const TabReview = () => {
  // const { menuStore } = useStores();

  // const handleClick = (name: MenuItemsEnums) => {
  //   menuStore.setMenuItem(name);
  // };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Settings />
      <Summary />
    </div>
  );
};

export default observer(TabReview);