import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";

class StoryMenuBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Image
              style={styles.avator}
              source={require("../../../assets/accounts/Richard.jpg")}
            />
            <Text style={styles.avatorName}>ストーリーズ</Text>
          </View>
          <View>
            <Image
              style={styles.avator}
              source={require("../../../assets/accounts/Richard.jpg")}
            />
            <Text style={styles.avatorName}>Richard</Text>
          </View>
          <View>
            <Image
              style={styles.avator}
              source={require("../../../assets/accounts/Richard.jpg")}
            />
            <Text style={styles.avatorName}>Richard</Text>
          </View>
          <View>
            <Image
              style={styles.avator}
              source={require("../../../assets/accounts/Richard.jpg")}
            />
            <Text style={styles.avatorName}>Richard</Text>
          </View>
          <View>
            <Image
              style={styles.avator}
              source={require("../../../assets/accounts/Richard.jpg")}
            />
            <Text style={styles.avatorName}>Richard</Text>
          </View>
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
    marginTop: 10,
    marginLeft: 13,
    marginRight: 14,
    marginBottom: 10,
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  avatorName: {
    textAlign: "center",
    fontSize: 12,
  },
});
