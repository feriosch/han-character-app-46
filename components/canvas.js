import React from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";
import { Button, Icon, WhiteSpace, WingBlank } from "@ant-design/react-native";
import ExpoDraw from "expo-draw";
import { captureRef } from "react-native-view-shot";

import { DEVICE_WIDTH } from "../dimensions";
import { GET_TOKEN } from "../store/auth";
import { CHARACTER_URL } from "../store/config";

const Canvas = ({ setIsLoadingResults, setResults }) => {
  let drawRef;

  const postImage = async () => {
    const token = await GET_TOKEN();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const image = await captureRef(drawRef, {
      result: "base64",
      quality: 1,
      height: 48,
      width: 48,
    });

    setIsLoadingResults(true);
    axios
      .post(
        CHARACTER_URL,
        {
          "image-base64": image,
        },
        config
      )
      .then((response) => {
        setResults(response.data.prediction);
      })
      .catch((error) => console.log(JSON.stringify(error)))
      .finally(() => setIsLoadingResults(false));
  };

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
