import { get, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { Section, Tabs } from "../../components";
import { db } from "../../firebase";
import styles from "./styles";

const Component = {
  Tabs: Tabs,
  Section: Section,
};

const Home: React.FC = () => {
  const [content, setContent] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data = await get(ref(db));

      if (data) {
        setContent(data.val());
      }
    })();

    const sub = onValue(ref(db), (snap) => {
      setContent(snap.val());
    });

    return () => {
      sub();
    };
  }, []);

  if (!content) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 22, paddingBottom: 32 }}
      >
        <Text>{content.contentName}</Text>
        {content.contentStructure.map((item) =>
          React.createElement(Component[item.componentType], { ...item.props })
        )}
      </ScrollView>
    </View>
  );
};

export { Home };
