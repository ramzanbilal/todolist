import { colors } from "@/theme/colors";
import { StyleProp, ViewStyle } from "react-native";

export const viewShadow: StyleProp<ViewStyle> = {
  shadowColor: colors.black,
  shadowOpacity: 0.5,
  shadowRadius: 20,
  shadowOffset: { width: 10, height: 10 },
  elevation: 4,
};
