import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Image,
  Modal,
} from "react-native";
import { useState } from "react";

export default GoalInput = (props) => {
  const [text, setText] = useState("");

  const goalInputHandler = (inputText) => {
    setText(inputText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(text);
    setText("");
    props.openModalHandler(false);
  };

  return (
    <Modal visible={props.modal}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={text}
          autoFocus={true}
          placeholder="목표를 입력하세요"
          // iOS 전용 clear 버튼 모드
          clearButtonMode="while-editing"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add!" onPress={addGoalHandler} color="#8B1819" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.openModalHandler}
              color="#585858"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#EDE0C9",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "rgb(164, 159, 150)",
    borderRadius: 10,
    padding: 10,
    width: "100%",
    color: "#585858",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 13,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
