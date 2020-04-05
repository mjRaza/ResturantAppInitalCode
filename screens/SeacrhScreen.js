import React, { useState } from "react";
import { View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";

const SeacrhScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={(x) => setTerm(x)}
        // ye andar jaka search value leka aiga.
        onTermSearch={(x) => {
          console.log(x);
        }}
      />
      <Text>{term}</Text>
      <ResultList />
      <ResultList />
      <ResultList />
    </View>
  );
};

export default SeacrhScreen;
