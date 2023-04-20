import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Logo from "../Images/logo2.png";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
// import RadialGradient from "react-native-radial-gradient";

import { MaterialIcons } from "@expo/vector-icons";
const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignInNavigation = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.Container}>
      <LinearGradient
        colors={[
          "#3d1530",
          "#311703",
          "#25172e",
          "#1a1729",
          "#131522",
          "#10131e",
          "#0d111b",
          "#090e17",
          "#070b16",
          "#050816",
          "#040515",
          "#030214",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ flex: 1 }}
      >
        <View style={styles.ImgContainer}>
          <Image style={styles.img} source={Logo}></Image>
          <Text style={styles.LogoTxt}>Sign up</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Name</Text>
          <TextInput
            onChangeText={setName}
            value={name}
            placeholder="yourname"
            style={styles.inputfield}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#B1B1B1"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>E-Mail</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="yourname@example.com"
            style={styles.inputfield}
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
            placeholderTextColor="#B1B1B1"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labels}>Password</Text>

          <TextInput
            onChangeText={setPassword}
            value={password}
            placeholder="yourpassword"
            style={styles.inputfield}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholderTextColor="#B1B1B1"
          />
        </View>
        <TouchableOpacity style={styles.btnContainer}>
          <LinearGradient
            colors={["#343437", "#232325"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.gradient}
          >
            <Text style={styles.btntxt}>Sign up</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.TxtContainer}>
          <Text style={styles.accountTxt}>Already have an account?</Text>
        </View>
        <View style={styles.SignupBox}>
          <TouchableOpacity
            onPress={SignInNavigation}
            style={styles.signupButton}
          >
            <Text style={styles.SignupTxt}>Sign in</Text>
            <MaterialIcons
              style={styles.IconStyle}
              name="chevron-right"
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ImgContainer: {
    height: 150,
    width: "100%",
    top: 100,
    alignItems: "center",
  },

  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  LogoTxt: {
    fontSize: 26,
    fontFamily: "Aero-Regular",
    color: "white",
    fontWeight: "700",
    padding: 20,
  },
  inputContainer: {
    height: 80,
    width: "80%",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    // backgroundColor: "green",
    top: 220,
    marginBottom: 10,
  },

  labels: {
    color: "white",
    fontFamily: "Aero-Regular",
    fontSize: 15,
    alignSelf: "flex-start",
    // top: 5,
    fontWeight: "400",
    paddingTop: 30,
    marginBottom: 10,
  },
  // txt: {
  //   color: "white",
  //   fontFamily: "Aero-Regular",
  //   fontSize: 15,
  //   top: 50,
  //   padding: 30,
  //   fontWeight: "400",

  //   backgroundColor: "yellow",
  // },
  inputfield: {
    color: "white",
    fontSize: 15,
    // top: 25,
    fontFamily: "Arial",
    height: 40,
  },

  btnContainer: {
    height: 60,
    width: "80%",
    top: 300,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  gradient: {
    height: 60,
    width: 200,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  btntxt: {
    fontFamily: "Aero-Regular",
    color: "white",
    padding: 5,
  },
  TxtContainer: {
    height: 15,
    width: "80%",
    top: 350,
    alignSelf: "center",
  },
  accountTxt: {
    fontFamily: "Aero-Regular",
    color: "gray",
    padding: 5,
    fontSize: 12,
  },
  SignupBox: {
    // flexDirection: "row",
    // justifyContent: "space-evenly",

    top: 360,
    height: 40,
    width: "80%",
    alignSelf: "center",
  },
  signupButton: {
    color: "white",
  },
  SignupTxt: {
    color: "white",
    fontSize: 12,
    fontFamily: "Aero-Regular",
    paddingTop: 5,
    fontWeight: "400",
    padding: 5,
  },
  IconStyle: {
    paddingLeft: 55,
    marginTop: -19,
  },
});
export default Signup;
