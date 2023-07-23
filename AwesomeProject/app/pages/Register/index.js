import {
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";

import { EyeIcon, EyeSlashIcon, IconArrowLeft } from "../../assets/svg";
import { WIDTH, HEIGHT, Fonts } from "../../assets/styles";
import Text from "../../components/Text";
import images from "../../assets/img/index";
import Satellite from "../../services/satellite";

export default function Register({ navigation, router }) {
  const [isEnable, setIsEnable] = useState(true);
  const [showPass, setShowPass] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [NIK, setNIK] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorNIK, setErrorNIK] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const body = {};
    if (
      name !== "" &&
      email !== "" &&
      password !== "" &&
      phone !== "" &&
      NIK !== "" &&
      errorName === "" &&
      errorEmail === "" &&
      errorPhone === "" &&
      errorNIK === "" &&
      errorPassword === "" &&
      errorConfirmPassword === "" &&
      password === confirmPassword
    ) {
      setIsEnable(false);
    } else {
      setIsEnable(true);
    }
  }, [
    password,
    confirmPassword,
    errorEmail,
    errorPassword,
    errorName,
    errorPhone,
    errorNIK,
    errorConfirmPassword,
  ]);

  const onSubmit = async () => {
    setIsLoading(true);

    const body = {
      doSendRegister: {
        name: name,
        email: email,
        nik: NIK,
        phoneNumber: phone,
        password: password,
      },
    };

    console.log("BODY", JSON.stringify(body, null, 3));

    let ress;
    await Satellite.post("auth/register", body)
      .then((response) => {
        console.log("RESPONSE", response.data);
        ress = response.data;
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log("ERROR", error);
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
        style={{ width: WIDTH, height: 937, paddingTop: 80 }}
        source={images.BG_SCREEN_1}
        resizeMode="cover"
      >
        {/* Arrow Left */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ marginLeft: 23, opacity: true ? 0.5 : 1 }}
        >
          <IconArrowLeft width={30} height={30} stroke={"#fff"} />
        </TouchableOpacity>

        {/* Content of Input Name */}
        <View style={{ width: 343, height: 76, marginTop: 78, marginLeft: 12 }}>
          <Text bold fontSize={16} color="#fff">
            Name
          </Text>
          <View
            style={{
              width: 343,
              height: 50,
              backgroundColor: "#273C75",
              padding: 12,
              borderRadius: 8,
              borderColor: "#132040",
            }}
          >
            <TextInput
              placeholder="Enter Your Name"
              placeholderTextColor={"#D3D3D3"}
              style={{
                color: "#D3D3D3",
                fontFamily: Fonts.Nunito.Bold,
                fontSize: 16,
              }}
              onChangeText={(value) => {
                setName(value);

                if (value === "") {
                  setErrorName("Name must be filled in");
                  return;
                }

                setErrorName("");
              }}
            ></TextInput>
          </View>
          <Text
            color={"#EA8695"}
            style={{ textAlign: "right", marginRight: 8 }}
          >
            {errorName}
          </Text>
        </View>

        {/* Content of Input Email */}
        <View style={{ width: 343, height: 76, marginTop: 27, marginLeft: 12 }}>
          <Text bold fontSize={16} color="#fff">
            Email
          </Text>

          <View
            style={{
              width: 343,
              height: 50,
              backgroundColor: "#273C75",
              padding: 12,
              borderRadius: 8,
              borderColor: "#132040",
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
                  console.log(value);
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

        {/* Content of Input Phone  */}
        <View style={{ width: 343, height: 76, marginTop: 27, marginLeft: 12 }}>
          <Text bold fontSize={16} color="#fff">
            Phone (Format: 0823xxxxxxxx)
          </Text>

          <View
            style={{
              width: 343,
              height: 50,
              backgroundColor: "#273C75",
              padding: 12,
              borderRadius: 8,
              borderColor: "#132040",
            }}
          >
            <TextInput
              placeholder="Enter Your Phone"
              placeholderTextColor={"#D3D3D3"}
              keyboardType={"phone-pad"}
              autoCapitalize="none"
              style={{
                color: "#D3D3D3",
                fontFamily: Fonts.Nunito.Bold,
                fontSize: 16,
              }}
              onChangeText={(value) => {
                setPhone(value);

                if (value === "") {
                  setErrorPhone("Phone must be filled in");
                  return;
                }

                setErrorPhone("");
              }}
            ></TextInput>
          </View>
          <Text
            color={"#EA8695"}
            style={{ textAlign: "right", marginRight: 8 }}
          >
            {errorPhone}
          </Text>
        </View>

        {/* Content of Input NIK */}
        <View style={{ width: 343, height: 76, marginTop: 27, marginLeft: 12 }}>
          <Text bold fontSize={16} color="#fff">
            NIK
          </Text>

          <View
            style={{
              width: 343,
              height: 50,
              backgroundColor: "#273C75",
              padding: 12,
              borderRadius: 8,
              borderColor: "#132040",
            }}
          >
            <TextInput
              placeholder="Enter Your  NIK Number"
              placeholderTextColor={"#D3D3D3"}
              keyboardType={"number-pad"}
              maxLength={16}
              autoCapitalize="none"
              style={{
                color: "#D3D3D3",
                fontFamily: Fonts.Nunito.Bold,
                fontSize: 16,
              }}
              onChangeText={(value) => {
                setNIK(value);
                const length = value.length;

                if (value === "") {
                  setErrorNIK("NIK must be filled in");
                  return;
                } else if (length != 16) {
                  setErrorNIK("NIK must be 16 of number");
                  return;
                }

                setErrorNIK("");
              }}
            ></TextInput>
          </View>
          <Text
            color={"#EA8695"}
            style={{ textAlign: "right", marginRight: 8 }}
          >
            {errorNIK}
          </Text>
        </View>

        {/* Content of Input Password */}
        <View style={{ width: 343, height: 76, marginTop: 27, marginLeft: 12 }}>
          <Text bold fontSize={16} color="#fff">
            Password
          </Text>
          <View
            style={{
              width: 343,
              height: 50,
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
          <Text color={"#EA8695"} style={{ textAlign: "right", marginTop: 10 }}>
            {errorPassword}
          </Text>
        </View>

        {/* Content of Input Confirm Password */}
        <View style={{ width: 343, height: 76, marginTop: 37, marginLeft: 12 }}>
          <Text bold fontSize={16} color="#fff">
            Confirm Password
          </Text>
          <View
            style={{
              width: 343,
              height: 50,
              backgroundColor: "#273C75",
              padding: 12,
              borderRadius: 8,
              borderColor: "#132040",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={"#D3D3D3"}
              secureTextEntry={showConfirmPass}
              style={{
                color: "#D3D3D3",
                fontFamily: Fonts.Nunito.Bold,
                fontSize: 16,
                flex: 1,
              }}
              onChangeText={(value) => {
                setConfirmPassword(value);

                if (value === "") {
                  setErrorConfirmPassword("Confirm Password must be filled in");
                  return;
                } else if (value !== password) {
                  setErrorConfirmPassword("Password must be same");

                  return;
                }

                setErrorConfirmPassword("");
              }}
            ></TextInput>

            <TouchableOpacity
              onPress={() => setShowConfirmPass(!showConfirmPass)}
            >
              {showConfirmPass ? (
                <EyeIcon width={20} height={20} stroke={"#fff"} />
              ) : (
                <EyeSlashIcon width={20} height={20} stroke={"#fff"} />
              )}
            </TouchableOpacity>
          </View>
          <Text color={"#EA8695"} style={{ textAlign: "right", marginTop: 10 }}>
            {errorConfirmPassword}
          </Text>
        </View>

        {/* Content of Button Register */}
        <TouchableOpacity
          onPress={onSubmit}
          disabled={isEnable}
          style={{
            backgroundColor: "#18DCFF",
            borderRadius: 8,
            width: 343,
            height: 55,
            paddingVertical: 12,
            alignItems: "center",
            marginTop: 60,
            marginLeft: 23,
            opacity: isEnable ? 0.5 : 1,
          }}
        >
          <Text bold fontSize={16} st>
            Register
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
}
