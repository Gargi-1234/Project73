import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Alert,
  KeyboardAvoidingView,
  ToastAndroid
} from "react-native";

import firebase from "firebase";
import db from "../config";


export default class otherwise extends Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={{}} >
                <Text style={styles.titleText}> Other </Text>
            </View>

            <Text style={styles.text}> Weather </Text>
            <View style={styles.chartContainer} >
                <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    Alert.alert("precipitation chances are %")
                }}>
                    <Image 
                    source={require('../assets/weather/rain.png')} 
                    style={{width: 35, height: 48,}}/>
                    <Text style={styles.buttonText}>Rain</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    Alert.alert("Wind speed is _km/h")
                }}>
                    <Image 
                    source={require('../assets/weather/wind.png')} 
                    style={{width: 70, height: 48,}}/>
                    <Text style={styles.buttonText}>Wind Speed</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.chartContainer} >
                <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    Alert.alert("Cloud Cover")
                }}>
                    <Image 
                    source={require('../assets/weather/cloudy.png')} 
                    style={{width: 60, height: 48,}}/>
                    <Text style={styles.buttonText}>Cloud Cover</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    Alert.alert("Sunny Day")
                }}>
                    <Image 
                    source={require('../assets/weather/sun.png')} 
                    style={{width: 48, height: 48,}}/>
                    <Text style={styles.buttonText}>Sun</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.chartContainer} >
                <TouchableOpacity 
                style={styles.button}
                onPress={() => {
                    Alert.alert("Today Maximum temperature is _ and Minimum temperature is _")
                }}>
                    <Image 
                    source={require('../assets/weather/temperature.png')} 
                    style={{width: 20, height: 48,}}/>
                    <Text style={styles.buttonText}>Temperature</Text>
                </TouchableOpacity>
            </View>
        </View>
      )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#D0E6F0"
    },
    text: {
      color: "#4C5D70",
      fontSize: 30,
      marginTop: 15
    },
    titleText: {
        color: "#000000",
        fontSize: 40
      },
    button: {
        width: "42%",
        padding : 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FBE5C0",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#4C5D70",
        margin : 5
      },
      buttonText: {
        fontSize: 24,
        color: "#4C5D70",
        fontFamily: "Rajdhani_600SemiBold"
      },
      chartContainer: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
      },
  });
  

 