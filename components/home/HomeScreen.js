import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import StoryMenuBar from "./subScreen/StoryMenuBer";
import MainMenuBar from "./subScreen/MainMenuBer";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StoryMenuBar></StoryMenuBar>
          <MainMenuBar></MainMenuBar>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(0,0%,100%)",
    alignItems: "center",
    justifyContent: "center",
  },
});
