import React from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Provider as AntDProvider } from "@ant-design/react-native";

import { LOGIN } from "./store/auth";
import MainView from "./views/main";

SplashScreen.preventAutoHideAsync();

class App extends React.Component {
  state = {
    theme: null,
    currentTheme: null,
    isReady: false,
  };

  changeTheme = (theme, currentTheme) => {
    this.setState({ theme, currentTheme });
  };

  async componentDidMount() {
    await Font.loadAsync(
      "antoutline",
      // eslint-disable-next-line
      require("@ant-design/icons-react-native/fonts/antoutline.ttf")
    );

    await Font.loadAsync(
      "antfill",
      // eslint-disable-next-line
      require("@ant-design/icons-react-native/fonts/antfill.ttf")
    );
    // eslint-disable-next-line

    await LOGIN();

    this.setState({ isReady: true });

    await SplashScreen.hideAsync();
  }

  render() {
    const { theme, currentTheme, isReady } = this.state;
    if (!isReady) {
      return null;
    }
    return (
      <AntDProvider theme={theme}>
        <MainView
          screenProps={{ changeTheme: this.changeTheme, currentTheme }}
        />
      </AntDProvider>
    );
  }
}

export default App;
