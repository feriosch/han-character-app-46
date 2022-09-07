import React, { useEffect, useState } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
} from "react-native";
import {
  ActivityIndicator,
  WhiteSpace,
  WingBlank,
} from "@ant-design/react-native";
import axios from "axios";

import { GET_TOKEN } from "../store/auth";
import { CHARACTER_URL } from "../store/config";
import { DEVICE_HEIGHT, DEVICE_WIDTH, STATUS_BAR_HEIGHT } from "../dimensions";
import StrokeImagesRow from "../components/info/strokes";
import ExamplesRow from "../components/info/examplerow";

const InfoView = ({ kanji, setSelectedKanji }) => {
  const [kanjiInfo, setKanjiInfo] = useState(null);

  const retrieveApiInfo = async () => {
    const token = await GET_TOKEN();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${CHARACTER_URL}/${kanji}`, config)
      .then((response) => setKanjiInfo(response.data))
      .catch((_error) => setKanjiInfo(null));
  };

  const onClickBack = () => {
    setSelectedKanji(null);
  };

  const getStrokeImages = () => {
    if (kanjiInfo.kanji.strokes.images != null) {
      return <StrokeImagesRow imageUris={kanjiInfo.kanji.strokes.images} />;
    }
  };

  const getMeaning = () => {
    const meaning = kanjiInfo.kanji.meaning.english;
    if (meaning != null) {
      return (
        <>
          <WhiteSpace />
          <Text style={styles.meaning}>{`${meaning}`}</Text>
          <WhiteSpace />
        </>
      );
    }
  };

  const getOnyomi = () => {
    const onyomi = kanjiInfo.kanji.onyomi;
    if (onyomi != null) {
      return (
        <>
          <WhiteSpace />
          <Text style={styles.onyomi}>
            {`${onyomi.katakana} (${onyomi.romaji})`}
          </Text>
          <WhiteSpace />
        </>
      );
    }
  };

  const getKunyomi = () => {
    const kunyomi = kanjiInfo.kanji.kunyomi;
    if (kunyomi != null) {
      return (
        <>
          <WhiteSpace />
          <Text style={styles.kunyomi}>
            {`${kunyomi.hiragana} (${kunyomi.romaji})`}
          </Text>
          <WhiteSpace />
        </>
      );
    }
  };

  const getExamples = () => {
    if (kanjiInfo.examples != null) {
      return <ExamplesRow examples={kanjiInfo.examples} />;
    }
  };

  useEffect(() => {
    retrieveApiInfo();
  }, []);

  if (kanjiInfo === null) {
    return (
      <View style={styles.container}>
        <WhiteSpace size="lg" />
        <Text style={styles.loadingText}>{`Loading ${kanji}...`}</Text>
        <WhiteSpace size="lg" />
        <ActivityIndicator size="large" />
      </View>
    );
  } else if (kanjiInfo.kanji == null) {
    return (
      <View style={styles.container}>
        <WhiteSpace size="lg" />
        <Text style={styles.loadingText}>{`${kanji} was not found`}</Text>
        <WhiteSpace size="lg" />
        <Button
          title="Go Back"
          onPress={() => onClickBack()}
          style={styles.backButton}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Button
          title="Go Back"
          onPress={() => onClickBack()}
          style={styles.backButton}
        />
        <WingBlank />
        <WhiteSpace size="lg" />
        <Text style={styles.mainKanji}>{kanji}</Text>
        <WingBlank />
        <SafeAreaView style={styles.safeContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {getMeaning()}
            {getOnyomi()}
            {getKunyomi()}
            {getStrokeImages()}
            {getExamples()}
          </ScrollView>
        </SafeAreaView>
        <Text></Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: DEVICE_WIDTH * 0.05,
    marginTop: STATUS_BAR_HEIGHT,
  },
  loadingText: {
    textAlign: "center",
    fontSize: DEVICE_HEIGHT * 0.04,
  },
  backButton: {
    flex: 1,
  },
  mainKanji: {
    flex: 1,
    textAlign: "center",
    fontSize: DEVICE_HEIGHT * 0.08,
  },
  safeContainer: {
    flex: 8,
  },
  scrollContainer: {
    alignItems: "center",
  },
  meaning: {
    fontSize: DEVICE_HEIGHT * 0.03,
    fontWeight: "bold",
    color: "black",
  },
  onyomi: {
    fontSize: DEVICE_HEIGHT * 0.03,
    fontWeight: "bold",
    color: "firebrick",
  },
  kunyomi: {
    fontSize: DEVICE_HEIGHT * 0.03,
    fontWeight: "bold",
    color: "midnightblue",
  },
});

export default InfoView;
