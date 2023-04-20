import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { encryptData, decryptData } from "../Security/DataPrivacy";

import Logo from "../Images/logo2.png";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUpNavigation = () => {
    navigation.navigate("Signup");
  };
  const [loaded] = useFonts({
    "Aero-Regular": require("../assets/fonts/aeaswfte.ttf"),
    Aero: require("../assets/fonts/Aero.ttf"),
  });
  const signInNavigation = async () => {
    // navigation.navigate("Signup");
    console.log("hello");
    var obj = {
      email: "test@test.com",
      password: "1223232",
    };

    var encryptedData = encryptData(obj);

    console.log("my encrypted obj: ", encryptedData);
    var myDecryptedData = decryptData(encryptedData);

    console.log("my decrypted obj: ", myDecryptedData);
    var bodyData = { data: myDecryptedData };
    var apiResponse = await axios
      .post(`http://54.221.169.56:3004/api/user/login`, bodyData)
      .then(async (onSuccess) => {
        console.log("api response data: ", onSuccess.data);
      })
      .catch(async (onError) => {
        console.log("on api post error: ", onError.data.response);
      });
  };

  // if (!loaded) {
  //   return null;
  // }
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
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.ImgContainer}>
          <Image style={styles.img} source={Logo}></Image>
          <Text style={styles.LogoTxt}>Sign in</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.emailLabel}>E-Mail</Text>
          <TextInput
            style={styles.emailInput}
            onChangeText={setEmail}
            value={email}
            placeholder="yourname@example.com"
            // style={styles.inputfield}
            autoCapitalize="none"
            keyboardType="email-address"
            autoCorrect={false}
            placeholderTextColor="#B1B1B1"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.emailLabel}>Password</Text>
          <TextInput
            style={styles.emailInput}
            onChangeText={setPassword}
            value={password}
            placeholder="yourpassword"
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            placeholderTextColor="#B1B1B1"
          />
        </View>
        {/* <View style={styles.inputContainer}>
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
        </View> */}

        <TouchableOpacity
          onPress={signInNavigation}
          style={styles.btnContainer}
        >
          <LinearGradient
            colors={["#343437", "#232325"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={styles.gradient}
          >
            <Text style={styles.btntxt}>Sign in</Text>
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.TxtContainer}>
          <Text style={styles.accountTxt}>Don't have an account?</Text>
        </View>
        <View style={styles.SignupBox}>
          <TouchableOpacity
            onPress={signUpNavigation}
            style={styles.signupButton}
          >
            <Text style={styles.SignupTxt}>Sign up</Text>
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
  inputBox: {
    flexDirection: "column",
    alignSelf: "center",
    width: 320,
    height: 70,
    top: 200,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 20,
  },
  emailLabel: {
    fontSize: 15,
    fontFamily: "Aero-Regular",
    color: "white",
    paddingTop: 5, // fontWeight: 600,
    marginTop: 15,
  },
  emailInput: {
    // fontSize:15,
    fontFamily: "Arial",
    fontStyle: "italic",
    // fontWeight: 400,
    height: "70%",
    marginTop: 5,
  },
  inputDesign: {
    paddingTop: 20,
    color: "yellow",
    fontFamily: "Aero",
  },
  inputContainer: {
    height: 80,
    width: "80%",
    alignSelf: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    // backgroundColor: "green",
    top: 250,
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
    fontFamily: "Aero-Regular",
    height: 40,
  },

  btnContainer: {
    height: 60,
    width: "80%",
    top: 350,
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
    top: 400,
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

    top: 410,
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
    marginTop: -18,
  },
});
export default Login;
