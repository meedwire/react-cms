import React from "react";
import { Text, View } from "react-native";
import { ISimpleTextData } from "../../commonTypes";
import styles from "./styles";

const SimpleText: React.FC<ISimpleTextData> = ({ content }) => {
  return (
    <View style={styles.container}>
      <Text
        key={Math.random().toString(16)}
        style={styles.text}
      >{`${content}`}</Text>
    </View>
  );
};

export { SimpleText };
