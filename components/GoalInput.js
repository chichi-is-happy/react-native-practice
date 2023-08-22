import { StyleSheet, Button, TextInput, View } from "react-native";
import { useState } from "react";

export default GoalInput = (props) => {
  const [text, setText] = useState("");

  const goalInputHandler = (inputText) => {
    setText(inputText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(text);
    setText("");
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={text}
          autoFocus={true}
          placeholder="목표를 입력하세요"
          // iOS 전용 clear 버튼 모드
          clearButtonMode="while-editing"
        />
        <Button title="Add!" onPress={addGoalHandler} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    height: 40,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 10,
    width: "70%",
  },
});
