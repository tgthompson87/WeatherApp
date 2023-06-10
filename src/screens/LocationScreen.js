import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { FONTS } from "../Utils/Fonts";
import Button from "../Component/Button";
import { hp, wp } from "../Utils/ResponsiveLayout";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";

import Loader from "../Component/Loader";
import { COLORS } from "../Utils/Colors";

const LocationScreen = () => {
  // Objects
  const navigation = useNavigation();

  // Redux selector
  const data = useSelector((state) => state.weather.weatherData);
  const isLoading = useSelector((state) => state.weather.isLoading);

  // navigation to home screen after updating redux state
  useEffect(() => {
    if (data.length >= 1) {
      navigation.navigate("HomeScreen");
    }
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.contentContainer}>
        <LottieView
          autoPlay
          source={require("../../assets/animation/locationAnimation.json")}
          style={{
            height: 200,
            width: 200,
          }}
        />
        <Button
          title={"Add Location"}
          mode="outline"
          onPress={() =>
            navigation.navigate("AddLocationScreen", { isFrom: "Location" })
          }
        />
      </View>
      {isLoading && <Loader />}
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.YELLOW_COLOR,
    justifyContent: "center",
  },
  contentContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: wp(18),
    color: COLORS.BLACK,
    textAlign: "center",
    marginHorizontal: wp(24),
    marginVertical: hp(16),
    fontFamily: FONTS.POPPINS_SEMIBOLD,
  },
  text: {
    fontSize: wp(16),
    fontFamily: FONTS.POPPINS_REGULAR,
    color: COLORS.BLACK,
  },
  sepratorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: hp(20),
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    flex: 1,
    backgroundColor: COLORS.BLACK,
    marginHorizontal: 12,
  },
});
