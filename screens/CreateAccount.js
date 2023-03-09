import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { horizontalScale, moderateScale, verticalScale } from "../Metrics";
import { Button, TextInput } from "@react-native-material/core";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CreateAccount() {
  const [TutorModel, setTutorModel] = useState(true);

  const CreateTutor = () => {
    let responseData = { name: "jairus", email: "test" };
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
      }
    ).catch((err) => {
      console.log("error is: " + err);
    });
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
            style={{ marginTop: moderateScale(13) }}
            label="Tutor Username"
            variant="outlined"
          />
          <TextInput
            style={{ marginTop: moderateScale(13) }}
            label="Tutor email"
            variant="outlined"
          />
          <TextInput
            style={{ marginTop: moderateScale(13) }}
            label="Password"
            variant="outlined"
          />
          <TextInput
            style={{ marginTop: moderateScale(13) }}
            label="Confirm Password"
            variant="outlined"
          />
          <Button
            onPress={CreateTutor}
            style={{ marginTop: moderateScale(27) }}
            title="Login"
            loading={false}
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
            variant="outlined"
          />
          <TextInput
            style={{ marginTop: moderateScale(13) }}
            label="Student email"
            variant="outlined"
          />
          <TextInput
            style={{ marginTop: moderateScale(13) }}
            label="Password"
            variant="outlined"
          />
          <TextInput
            style={{ marginTop: moderateScale(13) }}
            label="Confirm Password"
            variant="outlined"
          />
          <Button
            style={{ marginTop: moderateScale(27) }}
            title="Login"
            loading={false}
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
