import React from 'react';
import { StyleSheet, View, Text } from "react-native";

import { DEVICE_HEIGHT } from "../dimensions";

const MainView = () => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Han characters</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  canvasContainer: {
    flex: 6,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  resultsContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: DEVICE_HEIGHT * 0.03,
    fontWeight: "bold",
    color: "black",
  },
});

export default MainView;
