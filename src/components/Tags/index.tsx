import React from "react";
import { Text, View } from "react-native";
import { ITagsData } from "../../commonTypes";
import styles from "./styles";

const Tags: React.FC<ITagsData> = ({ data }) => {
  return (
    <View style={styles.container}>
      {data.map((tag) => (
        <Text style={[styles.tag, { backgroundColor: tag.color }]} key={tag.id}>
          {tag.title}
        </Text>
      ))}
    </View>
  );
};

export { Tags };
