import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ITabsData } from "../../commonTypes";
import styles from "./styles";

const Tabs: React.FC<ITabsData> = ({ data }) => {
  const [active, setActive] = useState(0);
  return (
    <View style={styles.container}>
      {data.map(({ title, color, contentId }, index) => (
        <TouchableOpacity
          onPress={() => setActive(index)}
          key={contentId}
          style={[
            styles.tabItem,
            { backgroundColor: active === index ? "#b002bd" : undefined },
          ]}
        >
          <Text style={styles.textTabItem}>{title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export { Tabs };
