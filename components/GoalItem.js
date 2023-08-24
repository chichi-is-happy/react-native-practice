import { Pressable, StyleSheet, Text, View } from "react-native";

export default GoalItem = (props) => {
  return (
    <View style={styles.listItemStyle}>
      <Pressable
        android_ripple={{ color: "#574e63" }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemStyle: {
    alignContent: "flex-start",
    marginBottom: 8,
    fontSize: 18,
    backgroundColor: "#8B1819",
    borderRadius: 10,
  },
  goalText: {
    color: "white",
    padding: 12,
  },
  pressedItem: {
    backgroundColor: "#574e63",
    borderRadius: 10,
  },
});
