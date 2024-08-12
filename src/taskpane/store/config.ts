import { autorun, makeAutoObservable } from "mobx";
import type RootStore from ".";

// export enum AuthStepperEnum {
//   LOGOUT = "user.logout",
//   LOGGED = "user.logged",
//   FORBIDDEN = "access.forbidden",
//   ERROR = "request.error",
// }

class ConfigStore {
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    autorun(() => {
      Office.onReady((info) => {
        console.log("info", info);
        const isApi_1_3 = Office.context.requirements.isSetSupported("WordApi", "1.3");
        const isApi_1_4 = Office.context.requirements.isSetSupported("WordApi", "1.4");
        const isApi_1_6 = Office.context.requirements.isSetSupported("WordApi", "1.6");
        console.log("Office", { Office, isApi_1_3, isApi_1_4, isApi_1_6 });
      });
    });
  }

  // logout = () => {};
}

export default ConfigStore;
