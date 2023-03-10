import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { moderateScale, horizontalScale, verticalScale } from "../../Metrics";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Provider,
} from "@react-native-material/core";
export default function StudentTabone({ navigation }) {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem("COURSES").then((value) => {
      let courseArray = [];
      courseArray.push(JSON.parse(value));
      setCourses(courseArray);
      console.log("courses are");
      console.log(JSON.parse(value));
    });
  }, []);
  return (
    <Provider>
      <View style={{}}>
        <View
          style={{
            height: verticalScale(150),
            marginTop: moderateScale(70),
            width: horizontalScale(320),
            marginLeft: moderateScale(25),
            backgroundColor: "#11347A",
            borderRadius: 20,
            position: "relative",
          }}
        >
          <Text
            style={{
              position: "absolute",
              top: 20,
              left: 10,
              color: "#f4f4f4",

              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Welcome Student,
          </Text>
          <Text
            style={{
              position: "absolute",
              top: 60,
              left: 10,
              color: "#f4f4f7",

              fontSize: 15,
            }}
          >
            Nakuru High School,
          </Text>
        </View>
        <Text
          style={{
            marginLeft: moderateScale(30),
            marginTop: moderateScale(20),
            fontSize: 22,
          }}
        >
          Upcoming Classes
        </Text>
        <View
          style={{
            height: verticalScale(200),
            marginTop: moderateScale(20),
            // backgroundColor: "black",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#74DFF7",
              borderRadius: 20,
              margin: moderateScale(10),
            }}
          >
            <Text
              style={{
                margin: moderateScale(30),
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Tutors
            </Text>
            <MaterialCommunityIcons
              name="account"
              style={{ marginLeft: 50 }}
              size={64}
              color="black"
            />
            <Text style={{ marginLeft: 20 }}>12</Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "#749FF7",
              borderRadius: 20,
              margin: moderateScale(10),
            }}
          >
            <Text
              style={{
                margin: moderateScale(30),
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Courses
            </Text>
            <Text
              style={{
                marginLeft: moderateScale(50),
                fontSize: 60,
                fontWeight: "bold",
              }}
            >
              17
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ marginLeft: 10, fontSize: 17, fontWeight: "bold" }}>
            All Courses that can be booked
          </Text>
        </View>

        <View style={{ height: verticalScale(250) }}>
          <ScrollView>
            {courses.map((course) => {
              return <Courses details={course} key={course.ClassNo} />;
            })}
          </ScrollView>
        </View>
      </View>
    </Provider>
  );
}

function Courses({ details }) {
  const [visible, setVisible] = useState(false);
  const book = () => {
    setVisible(true);
  };
  return (
    <TouchableOpacity
      onPress={book}
      style={{
        height: verticalScale(100),
        width: "90%",
        marginTop: moderateScale(20),
        backgroundColor: "#0A62BA",
        marginLeft: moderateScale(16),
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Dialog visible={visible} onDismiss={() => setVisible(false)}>
        <DialogHeader title="Create Appointment" />
        <DialogContent>
          <Text>
            You are about to create an appointment with your tutor, he will get
            a notification of this event.
          </Text>
        </DialogContent>
        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={() => setVisible(false)}
          />
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={() => {
              setVisible(false);
              let responseData = {
                courseName: details.courseName,
                ClassNo: details.ClassNo,
                Department: details.Department,
              };
              // save to appointment
              AsyncStorage.setItem(
                "APPOINTMENTS",
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
            }}
          />
        </DialogActions>
      </Dialog>
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 16 }}>
          1
        </Text>
      </View>
      <View
        style={{
          flex: 4,
          // backgroundColor: "blue",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 22, color: "#fff" }}>
          {details.courseName}
        </Text>
        <Text style={{ color: "#fff" }}>{details.ClassNo}</Text>
      </View>

      <View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="angle-right" size={24} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}
