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
  Modal,
  Pressable,
} from "react-native";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmationLoading, setConfirmationLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  const onRegisterPressed = async () => {
    if (loading) {
        return;
    }

    if (password != confirmPassword) {
        Alert.alert('Oops', 'Passwords do not match.');
        return;
    }

    setLoading(true);

    try {
        const response = await Auth.signUp(email, password);
        console.log(response);
        setModalVisible(!modalVisible);
    } catch (e) {
        Alert.alert('Oops', e.message);
    }

    setLoading(false);
  };

  const onConfirm = async () => {
    if (confirmationLoading) {
        return;
    }

    setConfirmationLoading(true);

    try {
        const response = await Auth.confirmSignUp(email, confirmationCode);
        console.log(response);
        setModalVisible(false);
        navigation.navigate("HomeScreen");
    } catch (e) {
        Alert.alert('Oops', e.message);
    }

    setConfirmationLoading(false);
  }

  const onResend = async () => {
    if (resendLoading) {
        return;
    }

    setResendLoading(true);

    try {
        await Auth.resendSignUp(email);
    } catch (e) {
        Alert.alert('Oops', e.message);
    }

    setResendLoading(false);
  }

  return (
    <View style={styles.container}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirm Email</Text>
            <View style={styles.codeInputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter Code From Email."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={false}
                    onChangeText={(confirmationCode) => setConfirmationCode(confirmationCode)}
                /> 
            </View> 
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onConfirm()}>
              <Text style={styles.textStyle}>Confirm</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onResend()}>
              <Text style={styles.textStyle}>Resend Code</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        <View style={styles.headerView}>
            <Text style={styles.header}>Register</Text>
        </View>
        <Image style={styles.image} source={require("../assets/SafeBraceLogo.png")} /> 
        <StatusBar style="auto" />
        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Email."
                placeholderTextColor="#003f5c"
                secureTextEntry={false}
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
        <View style={styles.inputView}>
            <TextInput
                style={styles.TextInput}
                placeholder="Confrim Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
            />
        </View>
        <TouchableOpacity style={styles.registerBtn} onPress={ () => onRegisterPressed() }>
            <Text>REGISTER</Text>
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
  headerView: {
    marginTop: "10%",
  },
  header: {
    color: "#ffffff",
    fontSize: 50,
    fontWeight: "bold",
  },
  image: {
    height: "25%",
    resizeMode: "contain",
  },
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 10,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  },
  registerBtn: {
    width: "80%",
    borderRadius: 25,
    marginBottom: "20%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2196F3",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    width: "70%",
    margin: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "bold",
  },
  codeInputView: {
    backgroundColor: "#add6f4",
    borderRadius: 30,
    width: "100%",
    height: 45,
    margin: 10,
    alignItems: "center",
  }
});

export default SignUpScreen;