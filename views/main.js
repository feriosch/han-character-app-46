import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Icon, WhiteSpace } from "@ant-design/react-native";

import { DEVICE_HEIGHT, STATUS_BAR_HEIGHT } from "../dimensions";
import Canvas from "../components/canvas";

const MainView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Han characters</Text>
        <Button>
          <Icon name="book" color="black" />
        </Button>
      </View>
      <View style={styles.canvasContainer}>
        <Canvas />
      </View>
      <WhiteSpace />
      <View style={styles.resultsContainer}>
        <Text>Results...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: STATUS_BAR_HEIGHT,
  },
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
