import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import MainScreen from './MainScreen'
import { 
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Animated from 'react-native-reanimated'
import HomeScreen from './Components/HomeScreen';
import WFPResponse from './Components/WFPResponse';
import DetailedView from './Components/DetailedView';
import BlogView from './Components/BlogView';

    
const Stack = createStackNavigator()
const HomeDrawer = createDrawerNavigator();

const Home = () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0))
    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    });
    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 16],
    });

    const animatedStyle = { borderRadius, transform: [{ scale }] };
    return (
        <HomeDrawer.Navigator
            drawerType='slide'
            overlayColor='transparent'
            initialRouteName="Home"
            contentContainerStyle={{ flex: 1 }}
            drawerStyle={styles.drawerStyles}
            drawerContentOptions={{
                activeBackgroundColor: 'transparent',
                activeTintColor: 'white',
                inactiveTintColor: 'white',
            }}
            sceneContainerStyle={{
                backgroundColor: 'rgb(46, 110, 175)'
            }}
            drawerContent={props => {
                setProgress(props.progress)
                return <DrawerContent {...props} />
            }}
        >
            <HomeDrawer.Screen name="Screens">
                {props => <Screens {...props} style={animatedStyle} />}
            </HomeDrawer.Screen>
        </HomeDrawer.Navigator>
    )
}

const Screens = ({ navigation, style }) => {
    return (
        <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    ...TransitionPresets.SlideFromRightIOS
                }}
            >
                <Stack.Screen name="Home">{props => <HomeScreen {...props} />}</Stack.Screen>
                <Stack.Screen name="Profile">{props => <ProfileScreen {...props} />}</Stack.Screen>
                <Stack.Screen name="Settings">{props => <SettingsScreen {...props} />}</Stack.Screen>
                <Stack.Screen name="WPFResponse">{props => <WFPResponse {...props} />}</Stack.Screen>
                <Stack.Screen name="DetailedView">{props => <DetailedView {...props} />}</Stack.Screen>
                <Stack.Screen name="BlogView">{props => <BlogView {...props} />}</Stack.Screen>
            </Stack.Navigator>
        </Animated.View>
    );
  };

const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1, backgroundColor: 'rgb(46, 110, 175)' }}>
            <View style={{flex: 1}}>
                <View style={{margin: 18}}>
                    <Image 
                        source={require('../assets/wfp.png')} 
                        style={{ width: 60, height: 60, resizeMode: 'center', borderRadius: 30 }} 
                    />
                    <Text style={{color: 'white'}}>
                        WFP Mobile App
                    </Text>
                    <Text style={{fontSize: 10, color: 'white'}}>
                        Designed by re-strukt
                    </Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flex: 1}}>

                        <Text style={styles.sidebarTitles}>
                            Quick Facts
                        </Text>
                        <DrawerItem
                            label="WFP"
                            labelStyle={styles.drawerLabel}
                            style={styles.drawerItem}
                            onPress={() => props.navigation.replace('Home')}
                        />
                        <DrawerItem
                            label="Covid"
                            labelStyle={styles.drawerLabel}
                            style={styles.drawerItem}
                            onPress={() => props.navigation.navigate('Profile')}
                        />
                        <DrawerItem
                            label="Agency"
                            labelStyle={styles.drawerLabel}
                            style={styles.drawerItem}
                            onPress={() => props.navigation.navigate('Settings')}
                        />

                        <Text style={styles.sidebarTitles}>
                            Reports
                        </Text>
                        <DrawerItem
                            label="WFP"
                            labelStyle={styles.drawerLabel}
                            style={styles.drawerItem}
                            onPress={() => props.navigation.replace('Home')}
                        />
                        <DrawerItem
                            label="ISCG"
                            labelStyle={styles.drawerLabel}
                            style={styles.drawerItem}
                            onPress={() => props.navigation.navigate('Profile')}
                        />
                        <DrawerItem
                            label="WHO"
                            labelStyle={styles.drawerLabel}
                            style={styles.drawerItem}
                            onPress={() => props.navigation.navigate('Settings')}
                        />

                        <Text style={styles.sidebarTitles}>
                            Notifications
                        </Text>
                        <DrawerItem
                            label="Government"
                            labelStyle={styles.drawerLabel}
                            style={styles.drawerItem}
                            onPress={() => props.navigation.navigate('Settings')}
                        />
                        <DrawerItem
                            label="Media"
                            labelStyle={styles.drawerLabel}
                            style={styles.drawerItem}
                            onPress={() => props.navigation.navigate('Profile')}
                        />
                        <DrawerItem
                            label="Announcement"
                            labelStyle={styles.drawerLabel}
                            style={styles.drawerItem}
                            onPress={() => props.navigation.navigate('Settings')}
                        />
                    </View>
                </ScrollView>
            </View>            
        </DrawerContentScrollView>
    )
}


const ProfileScreen = ({navigation}) => {
    const { signOut } = React.useContext(MainScreen.AuthContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Profile
            </Text>
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
                <Text style={{color: 'white'}}>
                    Sign Out
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.openDrawer()
                }}
                style={{
                    width: 200,
                    backgroundColor: 'rgb(46, 110, 175)',
                    borderRadius: 30,
                    height: 30,
                    marginTop: 10,
                    justifyContent: "center",
                    alignItems: 'center',
                }}
            >
                <Text style={{color: 'white'}}>
                    Open Drawer
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const SettingsScreen = ({navigation}) => {
    const { signOut } = React.useContext(MainScreen.AuthContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                This is Settings
            </Text>
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
                <Text style={{color: 'white'}}>
                    Sign Out
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.openDrawer()
                }}
                style={{
                    width: 200,
                    backgroundColor: 'rgb(46, 110, 175)',
                    borderRadius: 30,
                    height: 30,
                    marginTop: 10,
                    justifyContent: "center",
                    alignItems: 'center',
                }}
            >
                <Text style={{color: 'white'}}>
                    Open Drawer
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    stack: {
      flex: 1,
      shadowColor: '#FFF',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 5,
      overflow: 'hidden',
    //   borderWidth: 1,
    },
    drawerStyles: { 
        flex: 1, 
        width: '40%', 
        backgroundColor: 'rgb(46, 110, 175)'  
    },
    drawerItem: { 
        width: '100%',
        justifyContent: 'center',
        marginVertical: 0, 
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 0.6)', 
        marginLeft: 40 ,
    },
    drawerLabel: { 
        color: 'white', 
        fontSize: 14, 
        width: '100%' 
    },
    // avatar: {
    //   borderRadius: 60,
    //   marginBottom: 16,
    //   borderColor: 'white',
    //   borderWidth: StyleSheet.hairlineWidth,
    // },
    sidebarTitles: {
        color: 'white', 
        fontSize: 16, 
        marginLeft: 18,
        marginTop: 30
    }
  });

export default Home