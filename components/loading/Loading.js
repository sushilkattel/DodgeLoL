import React from "react";
import { StyleSheet, View, Image, Text } from 'react-native';
import LottieView from "lottie-react-native";
import { useState } from "react";
const Loading = ()=> {
  return (
    <View style={styles.container}>
      <LottieView style={{height: "100%", position: "absolute"}}source={require("./assets/gradient.json")} autoPlay loop/>
      <View style={{alignSelf: "center", alignItems: "center", marginTop: "50%"}}>
        <Text style={{fontSize: 60, fontFamily: "BebasNeue"}}>Loading...</Text>
        <LottieView style={styles.animation} source={require("./assets/teemoLoading.json")} autoPlay loop/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 400,
    height: 400,
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",

  }
});
export default Loading;
