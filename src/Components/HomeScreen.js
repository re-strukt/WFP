import React, { Component, useState } from 'react'
import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView, Dimensions, StyleSheet, ImageBackground } from 'react-native'
import MainScreen from '../MainScreen'
import { Header, Left, Body, Title, Icon, Right } from 'native-base';
import SliderComponent from './SliderComponent';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

const { height, width } = Dimensions.get('window')

const HomeScreen = ({ navigation }) => {
    let _menu = React.useRef(null);
    const { signOut } = React.useContext(MainScreen.AuthContext);

    const setMenuRef = ref => {
        _menu = ref 
    };
    
    const hideMenu = () => {
        _menu.hide();
    };
    
    const showMenu = () => {
        _menu.show();
    };
    
    const menu = () => {
        return (
            <Menu
                ref={setMenuRef}
                // button={
                //     <TouchableOpacity
                //         onPress={()=>{
                //             showMenu()
                //         }}
                //     >
                //         <Icon type={'Entypo'} name="dots-three-vertical" style={{fontSize: 24, color: 'white'}}/>
                //     </TouchableOpacity>
                // }
            >
                <MenuItem onPress={hideMenu}>Settings</MenuItem>
                <MenuDivider />
                <MenuItem onPress={hideMenu}>Contact</MenuItem>
                <MenuDivider />
                <MenuItem onPress={hideMenu}>Logout</MenuItem>
            </Menu>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <Header
                transparent
                style={{
                    backgroundColor: 'rgb(46, 110, 175)',
                }}>
                <Left style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.openDrawer()
                        }}
                    >
                        <Icon type={'Entypo'} style={{ fontSize: 30, color: 'white' }} name="menu" />
                    </TouchableOpacity>
                    <Image source={require('../../assets/wfp.png')} style={{ width: 40, height: 40, marginRight: 5 }} />
                    <Title style={{ color: '#f7f5e4', fontWeight: 'bold' }}>WFP</Title>
                </Left>
                <Body>
                </Body>
                <Right>
                    <TouchableOpacity
                        onPress={()=>{
                            showMenu()
                        }}
                    >
                        <Icon type={'Entypo'} name="dots-three-vertical" style={{fontSize: 24, color: 'white'}}/>
                    </TouchableOpacity>
                    {menu()}
                </Right>
            </Header>
            <StatusBar barStyle="light-content" backgroundColor='rgb(46, 110, 175)' />
            <ScrollView>

                <View style={{ flex: 1 }}>
                    <SliderComponent />
                </View>

                <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>

                    <View style={styles.cardStyle}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(
                                    'WPFResponse',
                                    {
                                        headerTitle: 'WPF Response'
                                    }
                                )
                            }}
                        >
                            <ImageBackground
                                source={require('../../assets/wfp.png')}
                                style={styles.imageWrapperStyle}
                                imageStyle={styles.imageStyle}
                            >
                                <View style={styles.overlayStyle}>
                                    <Text style={styles.headerText}>
                                        WFP Response
                                        </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.cardStyle}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(
                                    'WPFResponse',
                                    {
                                        headerTitle: 'Government Response'
                                    }
                                )
                            }}
                        >
                            <ImageBackground
                                source={require('../../assets/sample.jpg')}
                                style={styles.imageStyle}
                                imageStyle={styles.imageStyle}
                            >
                                <View style={styles.overlayStyle}>
                                    <Text style={styles.headerText}>
                                        Government Response
                                    </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardStyle}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(
                                    'WPFResponse',
                                    {
                                        headerTitle: 'Inter Sectorial Response'
                                    }
                                )
                            }}
                        >
                            <ImageBackground
                                source={require('../../assets/sample2.jpg')}
                                style={styles.imageStyle}
                                imageStyle={styles.imageStyle}
                            >
                                <View style={styles.overlayStyle}>
                                    <Text style={styles.headerText}>
                                        Inter Sectorial Response
                                    </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.cardStyle}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(
                                    'WPFResponse',
                                    {
                                        headerTitle: 'Voices'
                                    }
                                )
                            }}
                        >
                            <ImageBackground
                                source={require('../../assets/displayHome.jpg')}
                                style={styles.imageStyle}
                                imageStyle={styles.imageStyle}
                            >
                                <View style={styles.overlayStyle}>
                                    <Text style={styles.headerText}>
                                        Voices
                                    </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                </View>

                {/* <View style={{ justifyContent: 'center', alignItems: 'center', margin: 20 }}>
                    <TouchableOpacity
                        onPress={() => {
                            signOut()
                        }}
                        style={{
                            width: 200,
                            backgroundColor: 'rgb(46, 110, 175)',
                            borderRadius: 30,
                            height: 30,
                            justifyContent: "center",
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ color: 'white' }}>
                            Sign Out
                            </Text>
                    </TouchableOpacity>
                </View> */}
                <View style={{ borderBottomColor: 'rgba(0, 0, 0, 0.6)', borderBottomWidth: 1, height: 1, width: '30%', paddingTop: 20, alignSelf: 'center'}}>

                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    {/* <Text style={{fontSize: 12}}>
                        A
                    </Text> */}
                    <Image
                        source={require('../../assets/logo.png')}
                        style={{
                            width: 150,
                            height: 75,
                            resizeMode: 'contain'
                        }}
                    />
                    {/* <Text style={{fontSize: 12}}>
                        Product
                    </Text> */}
                </View>
            </ScrollView>
        </View >
    )
}


const styles = StyleSheet.create({
    cardStyle: {
        height: width / 2 - 30,
        width: width / 2 - 30,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        color: "white",
        fontWeight: "bold",
    },
    overlayStyle: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
        height: '100%',
        borderRadius: 20,
        justifyContent: 'center'
    },
    imageWrapperStyle: {
        height: "100%",
        width: "100%",
    },
    imageStyle: {
        borderRadius: 20
    }
})

export default HomeScreen