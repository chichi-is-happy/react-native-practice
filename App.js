import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import { useState, useEffect } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  const [modal, setModal] = useState(false);

  const openModalHandler = () => {
    setModal(!modal);
  };

  const addGoalHandler = (enteredGoalText) => {
    setList((currentCourseGoals) => [
      ...currentCourseGoals,
      {
        text: enteredGoalText,
        key: Math.random().toString(),
        id: id,
      },
    ]);
    setId(id + 1);
    // console.log("list 배열 : ", list);
    // Alert.alert("추가 되었습니다.");
  };

  const deleteHandler = (id) => {
    setList((currentCourseGoals) => {
      return currentCourseGoals.filter((el) => el.id !== id);
    });
  };

  useEffect(() => {
    console.log("list 배열 : ", list);
  });

  return (
    <View style={styles.appContainer}>
      <Button title="+" onPress={openModalHandler} />
      {modal && (
        <GoalInput
          visible={modal}
          onAddGoal={addGoalHandler}
          openModalHandler={openModalHandler}
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                onDelete={deleteHandler}
                id={itemData.item.id}
              />
            );
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
