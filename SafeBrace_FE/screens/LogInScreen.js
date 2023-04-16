import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Button
                title = "Go to Sign Up"
                onPress = {() => navigation.navigate('SignUp')}
            />
        </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  
export default LoginScreen;