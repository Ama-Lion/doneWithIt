import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/images/background.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/images/logo-red.png')} />
                <Text>Sell What You Don't Need'</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.loginRegisterButton}></View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
       width: '100%',
       height: 70,
       backgroundColor: '#fc5c6c'
    },
    loginRegisterButton: {
       width: '100%',
       height: 70,
       backgroundColor: '#4ecdc4'
    },
    logoContainer:{
        position: 'absolute',
        top: 80,
        alignItems: 'center'
    },
    logo:{
        width: 100,
        height: 100,
    },
})
export default WelcomeScreen;