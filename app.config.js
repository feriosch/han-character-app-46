import 'dotenv/config';

export default {
  expo: {
    name: "Han Characters",
    slug: "han-character-app",
    version: "2.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      username: process.env.EXPO_USERNAME,
      password: process.env.EXPO_PASSWORD,
      backendApi: process.env.EXPO_BACKEND_API
    }
  }
};
