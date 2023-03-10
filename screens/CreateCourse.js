import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { horizontalScale, moderateScale, verticalScale } from "../Metrics";
import { Button, TextInput, Snackbar } from "@react-native-material/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function CreateCourse() {
  const navigation = useNavigation();
  const [courseName, setCourseName] = useState("");
  const [ClassNo, setClassNo] = useState("");
  const [Department, setDepartment] = useState("");

  const [loading, setLoading] = useState(false);

  const CreateCourse = () => {
    setLoading(true);
    setTimeout(() => {
      let responseData = {
        courseName: courseName,
        ClassNo: ClassNo,
        Department: Department,
      };
      console.log(responseData);
      AsyncStorage.setItem("COURSES", JSON.stringify(responseData), (err) => {
        if (err) {
          console.log("an error");
          throw err;
        }
        console.log("success");
        setLoading(false);
        navigation.goBack();
      }).catch((err) => {
        console.log("error is: " + err);
      });
    }, 2000);
  };

  return (
    <View
      style={{
        height: verticalScale(840),
        paddingTop: moderateScale(40),
        paddingHorizontal: moderateScale(40),
        width: horizontalScale(380),
        // backgroundColor: "red",
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: "bold" }}>TutorFinder</Text>
      <View
        style={{
          marginTop: moderateScale(90),
          height: verticalScale(540),
          //   backgroundColor: "red",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginVertical: moderateScale(10),
          }}
        >
          Hello Tutor, Create a new course
        </Text>
        <TextInput
          onChangeText={(text) => setCourseName(text)}
          value={courseName}
          style={{ marginTop: moderateScale(13) }}
          label="Course Name"
          variant="outlined"
        />
        <TextInput
          onChangeText={(text) => setClassNo(text)}
          value={ClassNo}
          style={{ marginTop: moderateScale(13) }}
          label="Maximum Class Number"
          variant="outlined"
        />
        <TextInput
          onChangeText={(text) => setDepartment(text)}
          value={Department}
          style={{ marginTop: moderateScale(13) }}
          label="Department Number"
          variant="outlined"
        />

        <Button
          onPress={CreateCourse}
          style={{ marginTop: moderateScale(27) }}
          title="Create Course"
          loading={loading}
          loadingIndicatorPosition="overlay"
        />
      </View>
    </View>
  );
}
