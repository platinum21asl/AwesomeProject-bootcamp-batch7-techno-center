import { View, ImageBackground, Image, ScrollView } from "react-native";

import React from "react";
import Text from "../../components/Text";
import images from "../../assets/img/index";
import { VectorIcon } from "../../assets/svg";
import { WIDTH, HEIGHT } from "../../assets/styles";

export default function Profile() {
  return (
    <ScrollView>
      <ImageBackground
        style={{
          width: WIDTH,
          height: 937,
          alignItems: "center",
          paddingTop: 80,
        }}
        source={images.BG_PROFILE}
        resizeMode="cover"
      >
        <View
          style={{ borderWidth: 4, borderColor: "#000000", borderRadius: 90 }}
        >
          <Image
            style={{ width: 120, height: 120, borderRadius: 90 }}
            source={images.FT_PROFILE}
          ></Image>
        </View>

        {/* Start of Content Icon Profile */}
        <View style={{ marginTop: 16, marginLeft: 16 }}>
          <Text fontSize={20} bold color>
            Daniel Renato Marlen
          </Text>
        </View>
        <Text fontSize={14} regular style={{ color: "#909090" }}>
          React Native Developer
        </Text>
        {/* End of Content Icon Profile */}

        {/* Start of Content Profile Info */}
        <View
          style={{
            backgroundColor: "#FFFFFF",
            width: 343,
            height: 200,
            marginTop: 32,
            borderRadius: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: 311,
              height: 34,
              marginTop: 16,
              marginLeft: 16,
            }}
          >
            <Text color fontSize={14} bold regular>
              ID
            </Text>
            <Text
              fontSize={14}
              regular
              style={{ color: "#A7A7A7", flex: 1, textAlign: "right" }}
            >
              191710
            </Text>
          </View>
          <View
            style={{
              width: 311,
              height: 1,
              backgroundColor: "#D3D3D3",
              marginLeft: 16,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              width: 311,
              height: 34,
              marginTop: 16,
              marginLeft: 16,
            }}
          >
            <Text color fontSize={14} bold regular>
              Email
            </Text>
            <Text
              fontSize={14}
              regular
              style={{ color: "#A7A7A7", flex: 1, textAlign: "right" }}
            >
              silverdaniel21@gmail.com
            </Text>
          </View>
          <View
            style={{
              width: 311,
              height: 1,
              backgroundColor: "#D3D3D3",
              marginLeft: 16,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              width: 311,
              height: 34,
              marginTop: 16,
              marginLeft: 16,
            }}
          >
            <Text color fontSize={14} bold regular>
              Date of Birth
            </Text>
            <Text
              fontSize={14}
              regular
              style={{ color: "#A7A7A7", flex: 1, textAlign: "right" }}
            >
              29 Febuari 2000
            </Text>
          </View>
          <View
            style={{
              width: 311,
              height: 1,
              backgroundColor: "#D3D3D3",
              marginLeft: 16,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              width: 311,
              height: 34,
              marginTop: 10,
              marginLeft: 16,
            }}
          >
            <Text color fontSize={14} bold regular>
              Gender
            </Text>
            <Text
              fontSize={14}
              regular
              style={{ color: "#A7A7A7", flex: 1, textAlign: "right" }}
            >
              Male
            </Text>
          </View>
        </View>
        {/* End of Content Profile Info */}

        {/* Start of Content Profile Team */}
        <View
          style={{
            flexDirection: "row",
            width: 343,
            height: 70,
            backgroundColor: "#FFFFFF",
            borderRadius: 12,
            marginTop: 20,
          }}
        >
          <View
            style={{ marginTop: 16, marginLeft: 16, width: 100, height: 38 }}
          >
            <Text fontSize={14} regular bold style={{}}>
              Team
            </Text>
            <Text fontSize={14} regular style={{ color: "#909090" }}>
              React Native
            </Text>
          </View>
          <View
            style={{
              marginLeft: 125,
              marginTop: 16,
              width: 96,
              height: 35,
              backgroundColor: "#FFFFFF",
              flexDirection: "row",
            }}
          >
            <Image
              style={{ width: 35, height: 35, borderRadius: 90 }}
              source={images.PERSON1}
            ></Image>
            <Image
              style={{ right: 20, width: 35, height: 35, borderRadius: 90 }}
              source={images.PERSON2}
            ></Image>
            <Image
              style={{ right: 35, width: 35, height: 35, borderRadius: 90 }}
              source={images.PERSON3}
            ></Image>
            <View
              style={{
                right: 55,
                borderRadius: 90,
                width: 35,
                height: 35,
                backgroundColor: "#C16262",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                bold
                fontSize={14}
                style={{ top: 5, color: "#FFFFFF", textAlign: "center" }}
              >
                +6
              </Text>
            </View>
          </View>
        </View>
        {/* End of Content Profile Team */}

        {/* Start of Content App Info */}

        <View
          style={{
            backgroundColor: "#ffffff",
            width: 343,
            height: 200,
            marginTop: 32,
            borderRadius: 12,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: 311,
              height: 34,
              marginTop: 20,
              marginLeft: 16,
            }}
          >
            <Image source={images.GUARD} style={{ marginRight: 16 }}></Image>
            <Text color fontSize={14} bold regular>
              Privacy and Security
            </Text>
            <Text
              fontSize={14}
              bold
              regular
              style={{ color: "#A7A7A7", flex: 1, textAlign: "right" }}
            >
              {/* <Image source={images.PANAHKANAN} style={{alignSelf: "flex-end", bottom: 10, left: 230}}></Image>  */}
            </Text>
            <VectorIcon width={11} height={21} fill={"#fff"} />
          </View>
          <View
            style={{
              width: 311,
              height: 1,
              backgroundColor: "#D3D3D3",
              marginLeft: 16,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              width: 311,
              height: 34,
              marginTop: 16,
              marginLeft: 16,
            }}
          >
            <Image source={images.HELP} style={{ marginRight: 16 }}></Image>
            <Text color fontSize={14} bold regular>
              Help
            </Text>
            <Text
              fontSize={14}
              bold
              regular
              style={{ color: "#A7A7A7", flex: 1, textAlign: "right" }}
            >
              {/* <Image source={images.PANAHKANAN} style={{alignSelf: "flex-end", bottom: 10, left: 230}}></Image>  */}
            </Text>
            <VectorIcon width={11} height={21} fill={"#fff"} />
          </View>
          <View
            style={{
              width: 311,
              height: 1,
              backgroundColor: "#D3D3D3",
              marginLeft: 16,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              width: 311,
              height: 34,
              marginTop: 16,
              marginLeft: 16,
            }}
          >
            <Image source={images.ABOUT} style={{ marginRight: 16 }}></Image>
            <Text color fontSize={14} bold regular>
              About Us
            </Text>
            <Text
              fontSize={14}
              bold
              regular
              style={{ color: "#A7A7A7", flex: 1, textAlign: "right" }}
            >
              {/* <Image source={images.PANAHKANAN} style={{alignSelf: "flex-end", bottom: 10, left: 230}}></Image> */}
            </Text>
            <VectorIcon width={11} height={21} fill={"#fff"} />
          </View>
          <View
            style={{
              width: 311,
              height: 1,
              backgroundColor: "#D3D3D3",
              marginLeft: 16,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              width: 311,
              height: 34,
              marginTop: 10,
              marginLeft: 16,
            }}
          >
            <Image source={images.LOGOUT} style={{ marginRight: 16 }}></Image>
            <Text color fontSize={14} bold regular>
              Logout
            </Text>

            <Text
              fontSize={14}
              bold
              regular
              style={{ color: "#A7A7A7", flex: 1, textAlign: "right" }}
            >
              {/* <Image source={images.PANAHKANAN} style={{alignSelf: "flex-end", bottom: 10, left: 230}}>
              </Image>  */}
            </Text>
            <VectorIcon width={11} height={21} fill={"#fff"} />
          </View>
        </View>
        {/* End of Content App Info */}
        <Text regular bold fontSize={16}>
          v0.0.1
        </Text>
      </ImageBackground>
    </ScrollView>
  );
}
