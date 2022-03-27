import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>hahahah</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 400,
    backgroundColor: "white",
  },
  title: {
    color: "teal",
    fontSize: 50,
    fontWeight: "bold",
  },
});
