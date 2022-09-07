import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Icon, WhiteSpace } from "@ant-design/react-native";

import { DEVICE_HEIGHT, STATUS_BAR_HEIGHT } from "../dimensions";
import Canvas from "../components/canvas";
import ResultsView from "./results";

const MainView = () => {
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [results, setResults] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Han characters</Text>
        <Button>
          <Icon name="book" color="black" />
        </Button>
      </View>
      <View style={styles.canvasContainer}>
        <Canvas
          setIsLoadingResults={setIsLoadingResults}
          setResults={setResults}
        />
      </View>
      <WhiteSpace />
      <View style={styles.resultsContainer}>
        <ResultsView isLoadingResults={isLoadingResults} results={results} />
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
