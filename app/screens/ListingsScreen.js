import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import routes from "../navigation/routes";


// const listings = [
//   {
//     id: 1,
//     name: "Red jacket",
//     price: 100,
//     catagory:"CLoths",
//     status:"REJECTED"
//   },
//   {
//     id: 2,
//     name: "Red Fox",
//     price: 200,
//     catagory:"Animal",
//     status:"ACCEPTED"
  
//   },
// ];
const listings = [
  {
      "id": "61e5db966a2fdb5513c7fa10",
      "name": "item name from post man",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "ACCEPTED",
      "createdDate": "2022-01-17T21:11:50.093+00:00",
      "approvedDate": "2022-01-17T23:40:04.580+00:00",
      "rejectedDate": "2022-01-17T23:34:15.245+00:00",
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e5dbd16a2fdb5513c7fa11",
      "name": "item name from post man 1",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "ACCEPTED",
      "createdDate": "2022-01-17T21:12:49.210+00:00",
      "approvedDate": "2022-01-17T23:17:03.694+00:00",
      "rejectedDate": null,
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e5dbda6a2fdb5513c7fa12",
      "name": "item name from post man 2",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "REJECTED",
      "createdDate": "2022-01-17T21:12:58.409+00:00",
      "approvedDate": null,
      "rejectedDate": "2022-01-17T21:16:18.409+00:00",
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e5e6e26a2fdb5513c7fa13",
      "name": "APPLE mac",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "PENDING",
      "createdDate": "2022-01-17T22:00:02.931+00:00",
      "approvedDate": null,
      "rejectedDate": null,
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e5eb716a2fdb5513c7fa14",
      "name": "APPLE mac",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "PENDING",
      "createdDate": "2022-01-17T22:19:29.733+00:00",
      "approvedDate": null,
      "rejectedDate": null,
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e5eb756a2fdb5513c7fa15",
      "name": "APPLE mac",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "PENDING",
      "createdDate": "2022-01-17T22:19:33.310+00:00",
      "approvedDate": null,
      "rejectedDate": null,
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e5eb766a2fdb5513c7fa16",
      "name": "APPLE mac",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "PENDING",
      "createdDate": "2022-01-17T22:19:34.441+00:00",
      "approvedDate": null,
      "rejectedDate": null,
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e5eb776a2fdb5513c7fa17",
      "name": "APPLE mac",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "ACCEPTED",
      "createdDate": "2022-01-17T22:19:35.668+00:00",
      "approvedDate": "2022-01-17T23:22:00.517+00:00",
      "rejectedDate": null,
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e5eb786a2fdb5513c7fa18",
      "name": "APPLE mac",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "PENDING",
      "createdDate": "2022-01-17T22:19:36.657+00:00",
      "approvedDate": null,
      "rejectedDate": null,
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e5eb796a2fdb5513c7fa19",
      "name": "APPLE mac",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "PENDING",
      "createdDate": "2022-01-17T22:19:37.589+00:00",
      "approvedDate": null,
      "rejectedDate": null,
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e5eb7a6a2fdb5513c7fa1a",
      "name": "APPLE mac",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "PENDING",
      "createdDate": "2022-01-17T22:19:38.416+00:00",
      "approvedDate": null,
      "rejectedDate": null,
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e5eb7b6a2fdb5513c7fa1b",
      "name": "APPLE mac",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "PENDING",
      "createdDate": "2022-01-17T22:19:39.248+00:00",
      "approvedDate": null,
      "rejectedDate": null,
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e5eb7c6a2fdb5513c7fa1c",
      "name": "APPLE mac",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "PENDING",
      "createdDate": "2022-01-17T22:19:40.150+00:00",
      "approvedDate": null,
      "rejectedDate": null,
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e5eb7c6a2fdb5513c7fa1d",
      "name": "APPLE mac",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "REJECTED",
      "createdDate": "2022-01-17T22:19:40.990+00:00",
      "approvedDate": null,
      "rejectedDate": "2022-01-17T23:40:26.427+00:00",
      "image": "Image url",
      "desc": "Descrption for electronics"
  },
  {
      "id": "61e818f48fb1ad138cce49f4",
      "name": "APPLE mac",
      "price": 2000.0,
      "catagory": "ELECTRONICS",
      "itemStatus": "PENDING",
      "createdDate": "2022-01-19T13:58:12.368+00:00",
      "approvedDate": null,
      "rejectedDate": null,
      "image": "Image url",
      "desc": "Descrption for electronics"
  }
]

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            subTitle={"$" + item.price}
            catagory={item.catagory}
            status={item.itemStatus}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}

          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
