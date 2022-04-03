import React from "react";
import { Text, View } from "react-native";
import { ISectionData } from "../../commonTypes";
import { SimpleText } from "../SimpleText";
import { SimpleTextParagraph } from "../SimpleTextParagraph";
import { Tags } from "../Tags";
import styles from "./styles";

const ComponentContentType = {
  SimpleText: SimpleText,
  SimpleTextParagraph: SimpleTextParagraph,
  Tags: Tags,
};

const Section: React.FC<ISectionData> = ({ headerTitle, content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{headerTitle}</Text>
      {content.map((item, i) => (
        <View key={String(i)} style={styles.containerContent}>
          {React.createElement(ComponentContentType[item.componentType], {
            ...item.props,
          })}
        </View>
      ))}
    </View>
  );
};

export { Section };
