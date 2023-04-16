import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>SignUp</Text>
            <Button
                title = "Go to Home Screen"
                onPress = {() => navigation.navigate('HomeScreen')}
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
  
export default SignUpScreen;