import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <Lottie
          source={require("../../assets/142571-loading.json")}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  loadingContainer: {
    width: "70%",
    height: "40%",
    alignSelf: "center",
  },
});

export default Loading;
