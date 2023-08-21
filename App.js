import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const goalInputHandler = (inputText) => {
    setText(inputText);
  };

  const addGoalHandler = () => {
    setList((currentCourseGoals) => [...currentCourseGoals, text]);
    console.log("list 배열 : ", list);
    // Alert.alert("추가 되었습니다.");
    setText("");
  };

  return (
    <View style={styles.appContainer}>
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
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {list.map((el) => (
            <View key={el} style={styles.listItemStyle}>
              <Text style={styles.goalText}>{el}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

// input 옆에 버튼이 위치하도록 수정
// 입력란 ~ 목록 사이 간격 추가 (margin)

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
  goalsContainer: {
    flex: 5,
    width: "70%",
  },
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
