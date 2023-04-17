import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSignInPressed = async () => {
    if (loading) {
        return;
    }

    setLoading(true);

    try {
        const response = await Auth.signIn(email, password);
        console.log(response);
        navigation.navigate("HomeScreen");
    } catch (e) {
        Alert.alert('Oops', e.message);
    }

    setLoading(false);
};

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/SafeBraceLogo.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity onPress={ () => navigation.navigate("SignUp") }>
        <Text style={styles.register_button}>Need to Create an Account?</Text>
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={ () => onSignInPressed() }>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#add6f4",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  register_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    marginBottom: "30%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4d81ae",
  },
});

export default LoginScreen;