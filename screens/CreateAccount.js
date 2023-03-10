import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { horizontalScale, moderateScale, verticalScale } from "../Metrics";
import { Button, TextInput, Snackbar } from "@react-native-material/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function CreateAccount() {
  const navigation = useNavigation();
  const [TutorModel, setTutorModel] = useState(true);
  //   tutor
  const [tutorUsername, settutorUsername] = useState("");
  const [tutoremail, settutoremail] = useState("");
  const [tutorPassword, settutorPassword] = useState("");
  const [tutorConfirmPassword, settutorConfirmPassword] = useState("");
  // student
  const [studentUsername, setstudentUsername] = useState("");
  const [studentEmail, setstudentEmail] = useState("");
  const [studentPassword, setstudentPassword] = useState("");
  const [studentConfirmPassword, setstudentConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const CreateTutor = () => {
    setLoading(true);
    setTimeout(() => {
      let responseData = {
        username: tutorUsername,
        email: tutoremail,
        password: tutorPassword,
      };
      console.log(responseData);
      AsyncStorage.setItem(
        "TUTOR_DETAILS",
        JSON.stringify(responseData),
        (err) => {
          if (err) {
            console.log("an error");
            throw err;
          }
          console.log("success");
          setLoading(false);
          navigation.navigate("Dashboard");
        }
      ).catch((err) => {
        console.log("error is: " + err);
      });
    }, 2000);
  };

  const CreateStudent = () => {
    setLoading(true);
    setTimeout(() => {
      let responseData = {
        username: studentUsername,
        email: studentEmail,
        password: studentPassword,
      };
      console.log(responseData);
      AsyncStorage.setItem(
        "STUDENT_DETAILS",
        JSON.stringify(responseData),
        (err) => {
          if (err) {
            console.log("an error");
            setLoading(false);

            throw err;
          }
          console.log("success");
          setLoading(false);
          navigation.navigate("StudentDashboard");
        }
      ).catch((err) => {
        console.log("error is: " + err);
      });
    }, 3000);
  };

  if (TutorModel) {
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
            Get Started as a Tutor
          </Text>
          <TextInput
            onChangeText={(text) => settutorUsername(text)}
            value={tutorUsername}
            style={{ marginTop: moderateScale(13) }}
            label="Tutor Username"
            variant="outlined"
          />
          <TextInput
            onChangeText={(text) => settutoremail(text)}
            value={tutoremail}
            style={{ marginTop: moderateScale(13) }}
            label="Tutor email"
            variant="outlined"
          />
          <TextInput
            onChangeText={(text) => settutorPassword(text)}
            style={{ marginTop: moderateScale(13) }}
            value={tutorPassword}
            label="Password"
            variant="outlined"
          />
          <TextInput
            onChangeText={(text) => settutorConfirmPassword(text)}
            style={{ marginTop: moderateScale(13) }}
            value={tutorConfirmPassword}
            label="Confirm Password"
            variant="outlined"
          />
          <Button
            onPress={CreateTutor}
            style={{ marginTop: moderateScale(27) }}
            title="Create Tutor Account / Login"
            loading={loading}
            loadingIndicatorPosition="overlay"
          />
          <TouchableOpacity onPress={() => setTutorModel(!TutorModel)}>
            <Text style={{ marginTop: moderateScale(20) }}>
              Create a Student Account?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
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
            Get Started as a Student
          </Text>
          <TextInput
            style={{ marginTop: moderateScale(13) }}
            label="Student Username"
            value={studentUsername}
            onChangeText={(text) => setstudentUsername(text)}
            variant="outlined"
          />
          <TextInput
            style={{ marginTop: moderateScale(13) }}
            label="Student email"
            variant="outlined"
            onChangeText={(text) => setstudentEmail(text)}
            value={studentEmail}
          />
          <TextInput
            style={{ marginTop: moderateScale(13) }}
            label="Password"
            value={studentPassword}
            onChangeText={(text) => setstudentPassword(text)}
            variant="outlined"
          />
          <TextInput
            style={{ marginTop: moderateScale(13) }}
            label="Confirm Password"
            onChangeText={(text) => setstudentConfirmPassword(text)}
            value={studentConfirmPassword}
            variant="outlined"
          />
          <Button
            onPress={CreateStudent}
            style={{ marginTop: moderateScale(27) }}
            title="Create Account / Login"
            loading={loading}
            loadingIndicatorPosition="overlay"
          />

          <TouchableOpacity onPress={() => setTutorModel(!TutorModel)}>
            <Text style={{ marginTop: moderateScale(20) }}>
              Create a Tutor Account?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
