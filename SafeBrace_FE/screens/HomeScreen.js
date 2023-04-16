import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button
                title = "Go to LogIn"
                onPress = {() => navigation.navigate('LogIn')}
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
  
export default HomeScreen;