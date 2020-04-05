import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const ResultList = () => {
  return (
    <View>
      <Text style={styles.title}>Title</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={}
        keyExtractor={(x) => x.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ResultList;
