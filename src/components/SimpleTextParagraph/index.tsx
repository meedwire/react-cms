import React from "react";
import { Text, View } from "react-native";
import { ISimpleTextData } from "../../commonTypes";
import styles from "./styles";

const SimpleTextParagraph: React.FC<ISimpleTextData> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((value) => (
        <Text
          key={Math.random().toString(16)}
          style={styles.text}
        >{`\t\t•\t${value.content}`}</Text>
      ))}
    </View>
  );
};

export { SimpleTextParagraph };
