import * as Expo from "expo";
import * as Font from "expo-font";
import React from "react";
import { createAppContainer } from "react-navigation";

import TabNavigator from "./AppNavigator";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    const AppContainer = createAppContainer(TabNavigator);
    return <AppContainer />;
  }
}

export default App;
