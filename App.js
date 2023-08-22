import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [list, setList] = useState([]);

  const addGoalHandler = (enteredGoalText) => {
    setList((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    // console.log("list 배열 : ", list);
    // Alert.alert("추가 되었습니다.");
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput setList={setList} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return <GoalItem props={itemData.item} />;
          }}
          keyExtractor={(item, index) => {
            return item.key;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  goalsContainer: {
    flex: 5,
    width: "70%",
  },
});
