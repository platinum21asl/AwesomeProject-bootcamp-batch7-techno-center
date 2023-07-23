import { Dimensions } from "react-native";

const Fonts = {
  Nunito: {
    Bold: "Nunito-Bold",
    Regular: "Nunito-Regular",
    SemiBold: "Nunito-SemiBold",
    BoldItalic: "Nunito-BoldItalic",
    SemiBoldItalic: "Nunito-SemiBoldItalic",
  },
};

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

export { Fonts, WIDTH, HEIGHT };
