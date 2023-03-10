import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale, horizontalScale, verticalScale } from "../../Metrics";
import { Octicons } from "@expo/vector-icons";
export default function StudentTabThree() {
  return (
    <View style={{ paddingTop: 60 }}>
      <Text style={{ fontWeight: "bold", marginLeft: 30, fontSize: 24 }}>
        Accepted Appointments
      </Text>
      <Accepted />
      <Accepted />
      <Accepted />
      <Accepted />
      <Accepted />
    </View>
  );
}

function Accepted() {
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
