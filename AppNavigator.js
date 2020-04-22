import React from "react";
import { TouchableOpacity, Image, TouchableHighlight } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import Main from "./components/Main";

const homeStackNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        headerTitle: () => (
          <TouchableOpacity>
            <Image source={require("./assets/companyName.jpg")} />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableHighlight
            style={{ marginLeft: 16 }}
            onPress={() => alert("This is a button!")}
          >
            <SimpleLineIcons name="camera" size={24} />
          </TouchableHighlight>
        ),
        headerRight: () => (
          <TouchableHighlight
            style={{ marginRight: 16 }}
            onPress={() => alert("This is a button!")}
          >
            <SimpleLineIcons name="paper-plane" size={24} />
          </TouchableHighlight>
        ),
      },
    },
  },
  {
    initialRouteName: "Main",
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: homeStackNavigator,
      navigationOptions: {
        tabBarIcon: () => <SimpleLineIcons name="home" size={24} />,
      },
    },
    Search: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: () => <SimpleLineIcons name="magnifier" size={24} />,
      },
    },
    Library: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: () => <SimpleLineIcons name="plus" size={24} />,
      },
    },
    Favorite: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: () => <SimpleLineIcons name="heart" size={24} />,
      },
    },
    Profile: {
      screen: Main,
      navigationOptions: {
        tabBarIcon: () => <SimpleLineIcons name="user" size={24} />,
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: { height: 46 },
    },
  }
);

export default TabNavigator;
