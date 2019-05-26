
import React from "react";
import { Navigation } from "react-native-navigation";
import ZodiacGridScreen  from "./src/screens/ZodiacGridScreen/ZodiacGridScreen";
import MiscScreen from "./src/screens/MiscScreen/MiscScreen";

import configureStore from "./src/store/configureStore";
import startMainTabs  from "./src/screens/MainTabs/startMainTabs";

import { Provider } from "react-redux";


const store = configureStore();

// https://wix.github.io/react-native-navigation/#/docs/Usage?id=the-basics
Navigation.registerComponent('lilstar.ZodiacGridScreen', reduxStoreWrapper(ZodiacGridScreen, store));
Navigation.registerComponent('lilstar.MiscScreen', reduxStoreWrapper(MiscScreen, store));



// Start the App
export default () => {
  Navigation.events().registerAppLaunchedListener(() => {
    startMainTabs();
  });
}

/**
 * Wrap a JSX component with redux store before passing to Navigation.registerComponent()
 * @param MyComponent the JSX component which is to be wrapped with Provider
 * @param store the store object which is passed to Provider
 */
function reduxStoreWrapper (MyComponent: any, store :any) {
  return () => {
      return class StoreWrapper extends React.Component {
          render () {
              return (
                  <Provider store={store}>
                      <MyComponent />
                  </Provider>
              );
          }
      };
  };
}