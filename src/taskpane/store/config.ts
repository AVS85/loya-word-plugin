import { autorun, makeAutoObservable, runInAction } from "mobx";
import type RootStore from ".";
class ConfigStore {
  rootStore: RootStore;

  /** Функции плагина поддерживаемые текущей версией офис  */
  optionsSupportedCurrentApi = {
    searchInBody: false,
    rangeInsertComment: false,
    rangeInsertText: false,
    rangeInsertTextSemantic: false,
  };

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    autorun(() => {
      Office.onReady((info) => {
        /** Включение записи исправлений при запуске плагина */
        Word.run(async (context) => {
          context.document.changeTrackingMode = Word.ChangeTrackingMode.trackAll;
          await context
            .sync()
            .then(() => console.log(`Статус запись исправлений: включена`))
            .catch((error) => console.log(`Статус запись исправлений: n/a`, error));
        });

        /** Определение поддерживаемых api word'a функций плагина */
        const isApiExist_1_1 = Office.context.requirements.isSetSupported("WordApi", "1.1");
        const isApiExist_1_3 = Office.context.requirements.isSetSupported("WordApi", "1.3");
        const isApiExist_1_4 = Office.context.requirements.isSetSupported("WordApi", "1.4");
        const isApiExist_1_6 = Office.context.requirements.isSetSupported("WordApi", "1.6");
        const optionsSupportedCurrentApi = {
          searchInBody: isApiExist_1_3,
          rangeInsertComment: isApiExist_1_4,
          rangeInsertText: isApiExist_1_1,
          rangeInsertTextSemantic: isApiExist_1_6,
        };
        runInAction(() => {
          this.optionsSupportedCurrentApi = optionsSupportedCurrentApi;
        });
        console.log("System config:", { info, Office, optionsSupportedCurrentApi });
      });
    });
  }

  // logout = () => {};
}

export default ConfigStore;
