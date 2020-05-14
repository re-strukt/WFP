import React from 'react'
import { View, StatusBar, StyleSheet, Dimensions, ImageBackground, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import MainScreen from './MainScreen'

const { height, width } = Dimensions.get('window')

const Login = () => {
    const [isLoading, toggleLoader] = React.useState(false)
    const { signIn } = React.useContext(MainScreen.AuthContext);

    return (
        <View style={{flex: 1}}>
            <ImageBackground
                source={require('../assets/homepage_blank.png')}
                style={{height: "100%", width: "100%"}}
            >
                <View style={styles.container}>
                    <TouchableOpacity
                        style={{
                            width: '60%',
                            borderRadius: 30,
                            height: 50,
                            borderColor: 'white',
                            borderWidth: 1,
                        }}
                        onPress={()=>{
                            toggleLoader(true)
                            setTimeout(()=>{
                                toggleLoader(false)
                                signIn()
                            }, 2000)
                        }}
                    >
                        <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            {
                                isLoading ? (
                                    <ActivityIndicator size="small" color="white"/>
                                ) : (
                                    <Text style={styles.headerText}>
                                        {`Get Started`.toUpperCase()}
                                    </Text>
                                )   
                            }
                        </View>
                    </TouchableOpacity>
                    <Image 
                        source={require('../assets/wfp-logo-extended.png')}
                        style={{
                            width: '60%',
                            height: 100,
                            resizeMode: 'contain'
                        }}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        // marginTop: height/2,
        alignItems: 'center',
        width: null,
        height: null,
    },
    headerText: {
        fontSize: 20,
        width: '100%',
        // height: '100%',  
        textAlign: 'center',
        textAlignVertical: 'center',
        // padding: 5,
        color: "white",
        fontWeight: "bold"
    }
})

export default Login