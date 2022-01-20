import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
     {/* <Image
        style={styles.image}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.ima
        ges[0].url}
      /> */}
      <table></table>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>NAME:</Text>
        <Text>{listing.name}</Text>
        <Text style={styles.title}>Price:{}</Text>
        <Text>${listing.price}</Text>
        <Text style={styles.title}>Catagory:</Text>
        <Text>{listing.catagory}</Text>
        <Text style={styles.price}>Status:{listing.itemStatus}</Text>
        <Text style={styles.title}>CREATED TIME:{}</Text>
        <Text>{ listing.createdDate.slice(0,20)}</Text>
        <Text style={styles.title}>APPROVED TIME:{}</Text>
        <Text>{ listing.approvedDate && listing.approvedDate.slice(0,20)}</Text>
        <Text style={styles.price}>Rejected At:{listing.rejectedDate && listing.rejectedDate.slice(0,20)}</Text>
        <Text style={styles.title}>DESC:</Text>
        <Text>{listing.desc}</Text>
        <View style={styles.userContainer}>
         
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    padding:20
 },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
