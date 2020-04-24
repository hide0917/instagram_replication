import React from "react";
import { StyleSheet, View, Image } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/companyName.jpg")} />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  absoluteFill: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
