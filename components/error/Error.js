import React from "react";
import { StyleSheet, View, Image, Text } from 'react-native';
import LottieView from "lottie-react-native";
import { useState } from "react";
const Error = ()=> {
  return (
    <View style={styles.container}>
      <View style={{alignSelf: "center", alignItems: "center", marginTop: "50%"}}>
        <Text style={{fontSize: 30, fontFamily: "BebasNeue"}}>Sike hoe wrong summoner name lmao nerd get rekt</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#fdc4c3'
  }
});
export default Error;
