import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { moderateScale, horizontalScale, verticalScale } from "../../Metrics";
import { Octicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Tabtwo() {
  const [course, setCourses] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("APPOINTMENTS").then((value) => {
      let courseArray = [
        // {
        //   courseName: "Chemistry",
        //   ClassNo: "67",
        //   Department: "Science",
        // },
      ];
      courseArray.push(JSON.parse(value));

      setCourses(courseArray);
      console.log("courses are");
      console.log(JSON.parse(value));
    });
  }, []);
  return (
    <View style={{ paddingTop: 60 }}>
      <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: "bold" }}>
        Appointments Made by students
      </Text>

      {course.map((c) => {
        return <Booked />;
      }, [])}
    </View>
  );
}

function Booked() {
  return (
    <TouchableOpacity
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
        <Text style={{ fontSize: 22, color: "#fff" }}>Languages</Text>
        <Text style={{ color: "#fff" }}>5:00 pm</Text>
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
        <Octicons name="thumbsup" size={24} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}
