import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Avator from "../../../mockData/Avator";

const activeGradientColor = [
  "hsl(307,95%,35%)",
  "hsl(351,72%,50%)",
  "hsl(34,95%,63%)",
];
const passiveGradientColor = ["hsl(120,0%,100%)", "hsl(120,0%,100%)"];
const gradientStartCoordinate = { x: 1, y: 0 };
const gradientEndCoordinate = { x: 0, y: 1 };

class StoryMenuBar extends React.Component {
  _createStoryMenuBar() {
    var storyMenuBarComponent = [];
    Avator.map((avator) => {
      storyMenuBarComponent.push(
        <View key={avator.id} style={styles.avator}>
          <LinearGradient
            style={styles.linear}
            colors={activeGradientColor}
            start={gradientStartCoordinate}
            end={gradientEndCoordinate}
          >
            <View style={styles.dummyLinear}>
              <Image style={styles.avatorImage} source={avator.image} />
            </View>
          </LinearGradient>
          <Text style={styles.avatorName}>
            {avator.type === "you" ? "ストーリーズ" : avator.name}
          </Text>
        </View>
      );
    });
    return storyMenuBarComponent;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          directionalLockEnabled={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {this._createStoryMenuBar()}
        </ScrollView>
      </View>
    );
  }
}

export default StoryMenuBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(120,0%,100%)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 98,
    borderBottomColor: "hsl(120,0%,86%)",
    borderBottomWidth: 1,
  },
  avator: {
    width: 82,
    height: 98,
    alignItems: "center",
    justifyContent: "center",
  },
  linear: {
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
  },
  dummyLinear: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "hsl(120,0%,100%)",
    borderRadius: 50,
  },
  avatorImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  avatorName: {
    marginTop: 4,
    textAlign: "center",
    fontSize: 12,
  },
});
