import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
const SearchBar = ({ term, onChangeTerm, onTermSearch }) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        placeholder="search"
        style={styles.textInput}
        value={term}
        onChangeText={onChangeTerm}
        // autoCorrect={false}
        autoCapitalize="none"
        onEndEditing={onTermSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "gray",
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: "row",
    //  alignItems: "center",
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
  icon: { fontSize: 35, alignSelf: "center", marginHorizontal: 15 },
});

export default SearchBar;
