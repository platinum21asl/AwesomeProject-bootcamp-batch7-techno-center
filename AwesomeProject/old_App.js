import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Image,  Text, TextInput, View, Button } from 'react-native';
import {  useEffect, useRef, useMemo, Component } from 'react';


// react native memiliki 5 basic componen, View, Text, Image, ScrollVIew, Button

export default function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Halo Underworld</Text>
      <StatusBar style="auto" />

      <View style={{flexDirection: "row", backgroundColor: "#d2691e", height: 200}}>
      <View style={{borderWidth: 1, flex: 1, alignItems: "center"}}>
      <Image 
      style={{width: 100, height: 100}}
      source={require("./assets/favicon.png")}/>  
      <TextInput 
      style={{ height: 40,  borderColor: 'gray', borderWidth: 1, fontSize: 24}}
          
      onChangeText={(value) => {console.log("Value: ", value); setText(value);
    }}
      />
        
      </View>

      </View>
   

      <Text style={{color: "red", fontSize: 36}}>{text}</Text>
        <Text style={{fontSize: 36}}>{count}</Text>
      <AppFunction cobaText={text} buttonAction={(v) => setCount(count + v)} />
      
    </View>
  );
}

class AppClass extends Component{
  render() {
    return(
      <View>
        <Text>Ini adalah class</Text>
        <Text>{this.props.cobaText}</Text>
      
      </View>
    );
  }
}

const AppFunction = ({cobaText, buttonAction}) => {
  return (
    <View>
      <Text>Ini dari function</Text>
      <Text>{cobaText}</Text>
      <Button title='Ini Button' onPress={() => buttonAction(5)}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
