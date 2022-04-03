import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, {
  BounceInDown,
  BounceOutDown,
  Layout,
} from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { hiddenNotification } from "../../redux/actions";
import styles from "./styles";

const Alert: React.FC = () => {
  const state = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (state.visible) {
      const timeOut = setTimeout(() => {
        dispatch(hiddenNotification());
      }, 5000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [state.visible]);

  if (!state.visible) {
    return null;
  }

  return (
    <Animated.View
      layout={Layout}
      entering={BounceInDown}
      exiting={BounceOutDown}
      style={styles.container}
    >
      <Text style={styles.text}>{state.title}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Ir para</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export { Alert };
