import React from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";

import StoryMenuBar from "./subScreen/StoryMenuBer";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StoryMenuBar></StoryMenuBar>
          <Image source={require("../../assets/companyName.jpg")} />
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
