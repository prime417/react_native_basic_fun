import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const BoxScreen = () => {
  return (
    <View>
      <ScrollView>
        <Text>AlignItem: center</Text>
        <View style={styles.viewStyleAlignItem}>
          <Text style={styles.textOneStyle}>Child #1</Text>
          <Text style={styles.textTwoStyle}>Child #2</Text>
          <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
        <Text>FlexDirection: row</Text>
        <View style={styles.viewStyleDirection}>
          <Text style={styles.textOneStyle}>Child #1</Text>
          <Text style={styles.textTwoStyle}>Child #2</Text>
          <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
        <Text>Justify Content: center</Text>
        <View style={styles.viewStyleJustifyContent}>
          <Text style={styles.textOneStyle}>Child #1</Text>
          <Text style={styles.textTwoStyle}>Child #2</Text>
          <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
        <Text>Exercise</Text>
        <View style={styles.exeriseStyle}>
          <Text style={(styles.item, styles.itemOne)}>Child #1</Text>
          <Text style={(styles.item, styles.itemTwo)}>Child #2</Text>
          <Text style={(styles.item, styles.itemThree)}>Child #3</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyleAlignItem: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    alignItems: "center"
  },
  viewStyleDirection: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    height: 200,
    alignItems: "flex-start"
  },
  viewStyleJustifyContent: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "center"
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 4
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    fontSize: 18,
    flex: 4
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 2
  },
  exeriseStyle: {
    height: 240,
    borderWidth: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },

  itemOne: {
    backgroundColor: "red",
    height: 80,
    flex: 1
  },
  itemTwo: {
    backgroundColor: "green",
    height: 80,
    alignSelf: "center",
    flex: 1,
    marginHorizontal: 40
  },
  itemThree: {
    backgroundColor: "pink",
    height: 80,
    flex: 1
  }
});

export default BoxScreen;
