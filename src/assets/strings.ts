// import { Enum } from "../constants";
// import { StorageUtils } from "../utils";
// const GETTERS: any = {
//   // lazy requires (metro bundler does not support symlinks)
//   vi: () => require("assets/strings/vi.json"),
//   en: () => require("assets/strings/en.json"),
// };

// class Strings {
//   private instance: any;
//   private locale: string = Enum.Locale.VI;

//   constructor() {
//     if (!this.instance) {
//       this.instance = this;
//     }
//     return this.instance;
//   }
//   /**
//    * INIT
//    * Set current locale
//    */
//   async init(): Promise<void> {
//     try {
//       const curentRegion = await StorageUtils.get("Location_Fatome");
//       if (!curentRegion) {
//         this.setLocale(Enum.Locale.VI);
//         return;
//       }
//       this.setLocale(curentRegion);
//     } catch (error) {}
//   }

//   /**
//    * SET NEW LOCALE
//    * @param locale new locale
//    */
//   async set(locale: Enum.Locale): Promise<void> {
//     await StorageUtils.set("Location_Fatome", locale);
//   }

//   /**
//    * GET VALUE by KEY in assets/strings/*.json
//    * @param key of string
//    */
//   get(key: string): string {
//     return GETTERS[this.getLocale()]()[key];
//   }

//   getLocale(): string {
//     return this.locale;
//   }
//   setLocale(locale: string): void {
//     this.locale = locale;
//   }
// }

// const instance = new Strings();
// Object.freeze(instance);
// export default instance;
export {};
