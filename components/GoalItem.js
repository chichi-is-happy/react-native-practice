import { Pressable, StyleSheet, Text, View } from "react-native";

export default GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItemStyle}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItemStyle: {
    alignContent: "flex-start",
    marginBottom: 20,
    padding: 12,
    fontSize: 18,
    backgroundColor: "#5e0acc",
    borderRadius: 10,
  },
  goalText: {
    color: "white",
  },
});
