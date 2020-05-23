import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import EntypoIcons from "react-native-vector-icons/Entypo";

import Avator from "../../../mockData/Avator";

class MainMenuBar extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.avatorInformation}>
            <Image
              style={styles.avatorImage}
              source={require("../../../assets/avator/Richard.jpg")}
            />
            <Text style={styles.avatorName}>nozomisasaki_offici</Text>
            <TouchableOpacity style={styles.avatorSetting}>
              <EntypoIcons name="dots-three-horizontal" size={14.5} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default MainMenuBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(120,0%,100%)",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  avatorInformation: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 54,
    flexDirection: "row",
    borderBottomColor: "hsl(120,0%,86%)",
    borderBottomWidth: 0.5,
  },
  avatorImage: {
    margin: 10,
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  avatorName: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // width: 200,
    // marginTop: 4,
    marginTop: 2,
    marginLeft: 2,
    // Segoe UI
    fontFamily: "Roboto",
    // https://github.com/GeekyAnts/NativeBase-KitchenSink/blob/CRNA/src/boot/setup.js
    fontSize: 14,
    fontWeight: "600",
  },
  avatorSetting: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    margin: 14.7,
  },
});
