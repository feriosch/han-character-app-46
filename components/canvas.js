import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon, WhiteSpace, WingBlank } from "@ant-design/react-native";
import ExpoDraw from "expo-draw";

import { DEVICE_WIDTH } from "../dimensions";

const Canvas = () => {
  let drawRef;

  return (
    <>
      <View style={styles.canvasContainer}>
        <ExpoDraw
          ref={(ref) => (drawRef = ref)}
          strokes={[]}
          color={"#000000"}
          strokeWidth={4}
          enabled={true}
        ></ExpoDraw>
      </View>
      <WhiteSpace />
      <View style={styles.buttonsContainer}>
        <WingBlank />
        <Button onPress={() => drawRef.clear()}>
          <Icon name="delete" color="black" />
        </Button>
        <WingBlank />
        <Button onPress={() => drawRef.rewind()}>
          <Icon name="undo" color="black" />
        </Button>
        <WingBlank />
        <Button onPress={() => postImage()} type="primary">
          <Icon name="search" color="white" />
        </Button>
        <WingBlank />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: "row",
  },
  canvasContainer: {
    flex: 9,
    width: DEVICE_WIDTH * 0.9,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "black",
  },
});

export default Canvas;
