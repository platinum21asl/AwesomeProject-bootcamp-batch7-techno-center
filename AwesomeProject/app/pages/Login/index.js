import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";

import Text from "../../components/Text";
import images from "../../assets/img/index";

import { WIDTH, HEIGHT, Fonts } from "../../assets/styles";
import { EyeIcon, EyeSlashIcon } from "../../assets/svg";
import { TextInput } from "react-native-gesture-handler";
import Satellite from "../../services/satellite";

export default function Login({ navigation, router }) {
  const [isEnable, setIsEnable] = useState(true);
  const [showPass, setShowPass] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const body = {};
    if (
      email !== "" &&
      password !== "" &&
      errorEmail === "" &&
      errorPassword === ""
    ) {
      setIsEnable(false);
    } else {
      setIsEnable(true);
    }
  }, [email, password, errorEmail, errorPassword]);
  const onSubmit = async () => {
    setIsLoading(true);

    const body = {
      email: email,
      password: password,
    };

    console.log("BODY", JSON.stringify(body, null, 3));

    // try {
    //   const response = await Satellite.post("auth/login", body);

    //   console.log("RESPONSE", response.data);
    // } catch (error) {
    //   console.log("ERROR", err);
    // } finally {
    //   console.log("FINAL");
    // }

    let ress;
    await Satellite.post("auth/login", body)
      .then((response) => {
        console.log("RESPONSE", response.data);
        ress = response.data;
        navigation.navigate("Main");
      })
      .catch((error) => {
        console.log("ERROR", error);
        setErrorPassword("Invalid Email  or Password");
      })
      .finally(() => {
        console.log("FINAL");
        // setTimeout(() => {
        setIsLoading(false);
        // }
        // , 3000);
      });
  };
  return (
    <ScrollView>
      <ImageBackground
        style={{ width: WIDTH, height: HEIGHT, paddingTop: 80 }}
        source={images.BG_SCREEN_1}
        resizeMode="cover"
      >
        {/* Content of Email */}
        <View
          style={{ width: 343, height: 76, marginTop: 122, marginLeft: 12 }}
        >
          <Text regular bold fontSize={16} color="#fff">
            Email
          </Text>

          <View
            style={{
              width: 343,
              height: 55,
              backgroundColor: "#273C75",
              padding: 12,
              borderRadius: 8,
              borderColor: errorEmail ? "#EA8695" : "#132040",
            }}
          >
            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor={"#D3D3D3"}
              keyboardType={"email-address"}
              autoCapitalize="none"
              style={{
                color: "#D3D3D3",
                fontFamily: Fonts.Nunito.Bold,
                fontSize: 16,
              }}
              onChangeText={(value) => {
                setEmail(value);
                const emailRegex =
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

                if (value === "") {
                  setErrorEmail("Email must be filled in");
                  return;
                } else if (!emailRegex.test(value)) {
                  setErrorEmail("Invalid Mail Address");
                  return;
                }

                setErrorEmail("");
              }}
            ></TextInput>
          </View>

          <Text
            color={"#EA8695"}
            style={{ textAlign: "right", marginRight: 8 }}
          >
            {errorEmail}
          </Text>
        </View>

        {/* Content of Password */}
        <View style={{ width: 343, height: 76, marginTop: 27, marginLeft: 12 }}>
          <Text regular bold fontSize={16} color="#fff">
            Password
          </Text>

          <View
            style={{
              width: 343,
              height: 55,
              backgroundColor: "#273C75",
              padding: 12,
              borderRadius: 8,
              borderColor: "#132040",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Password"
              placeholderTextColor={"#D3D3D3"}
              secureTextEntry={showPass}
              style={{
                color: "#D3D3D3",
                fontFamily: Fonts.Nunito.Bold,
                fontSize: 16,
                flex: 1,
              }}
              onChangeText={(value) => {
                setPassword(value);

                if (value === "") {
                  setErrorPassword("Password must be filled in");
                  return;
                }

                setErrorPassword("");
              }}
            ></TextInput>
            <TouchableOpacity onPress={() => setShowPass(!showPass)}>
              {showPass ? (
                <EyeIcon width={20} height={20} stroke={"#fff"} />
              ) : (
                <EyeSlashIcon width={20} height={20} stroke={"#fff"} />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              fontSize={10}
              regular
              style={{ marginLeft: 23, marginTop: 12 }}
              color={"#F6E58D"}
            >
              Forgot Password
            </Text>

            <Text
              color={"#EA8695"}
              style={{ flex: 1, textAlign: "right", marginTop: 10 }}
            >
              {errorPassword}
            </Text>
          </View>
        </View>
        {/* Forgot Password */}

        {/* Button Login */}
        <TouchableOpacity
          onPress={onSubmit}
          disabled={isEnable || isLoading}
          style={{
            backgroundColor: "#18DCFF",
            borderRadius: 8,
            width: 343,
            height: 55,
            paddingVertical: 12,
            alignItems: "center",
            marginTop: 70,
            marginLeft: 23,
            opacity: isEnable ? 0.5 : 1,
          }}
        >
          {isLoading ? (
            // <Text color={"#261A31"} fontSize={16} bold>
            //   Mohon Tunggu...
            // </Text>
            <ActivityIndicator size="small" color="#0000ff" />
          ) : (
            <Text bold fontSize={16}>
              Login
            </Text>
          )}
        </TouchableOpacity>

        {/* Register */}
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text color={"#fff"} bold>
            Dont Have an Account?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            disabled={false}
            style={{}}
          >
            <Text bold regular color={"#F6E58D"}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
