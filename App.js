import React from "react";
import { createAppContainer } from "react-navigation";

import TabNavigator from "./AppNavigator";

class App extends React.Component {
  render() {
    const AppContainer = createAppContainer(TabNavigator);

    return <AppContainer />;
  }
}

export default App;
