import React from "react";
import { View, StyleSheet, Image } from "react-native";

import Text from "./Text";
import colors from "../config/colors";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Card({ title, subTitle, catagory ,onPress , status }) {
  return (
    <TouchableWithoutFeedback onPress={onPress} >

    <View style={styles.card}>
      {/* <Image style={styles.image} source={image} /> */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {catagory}
        </Text>
        <View>
        <Text style={styles.status} numberOfLines={2}>
          {status}
        </Text>
        </View>
      </View>
    </View>
        </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  status: {
    alignContent:'center',
    color:colors.primary
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
