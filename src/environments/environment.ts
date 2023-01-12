// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
  firebase: {
    apiKey: "AIzaSyAzAFpMH1KW-AkAabjzjJi6ZJBVSmcNnl0",
  authDomain: "hazir-fc6db.firebaseapp.com",
  projectId: "hazir-fc6db",
  storageBucket: "hazir-fc6db.appspot.com",
  messagingSenderId: "86388968975",
  appId: "1:86388968975:web:f6e0c3baa2245143299d7a",
  measurementId: "G-GKLL2XQ3K7"
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
