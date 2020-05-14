import React, { useState } from 'react'
import { View, ScrollView, Platform, TouchableOpacity, Image, StatusBar, ImageBackground } from 'react-native'
import { Header, Left, Body, Title, Icon, Text } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../Styles/SliderEntry.style';
import LongCarouselEntry from '../Components/SliderEntry';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles, { colors } from '../Styles/index.style';
import Entries from '../Static'

const Tab = createBottomTabNavigator();

function Health() {
    return (
        <View style={{ flex: 1, backgroundColor: 'blue' }}>

        </View>
    );
}

const WFPResponse = (props) => {

    const [active, setActive] = useState(0)
    let _slider1Ref = React.useRef(null);

    const _renderItemWithParallax = ({ item, index }, parallaxProps) => {
        return (
            <View style={{}}>
                <LongCarouselEntry
                    navigation={props.navigation}
                    size={'Large'}
                    data={item}
                    even={(index + 1) % 2 === 0}
                    parallax={true}
                    parallaxProps={parallaxProps}
                />
            </View>
        );
    }

    const ImageSlider = () => {

        return (
            <View style={{ flex: 1, backgroundColor: 'rgb(33, 33, 33)', alignItems: 'center', marginBottom: -20 }}>
                {/* <ImageBackground
                    source={require('../../assets/bw_card.png')}
                    style={{ height: "100%", width: "100%" }}
                > */}
                    <View style={[styles.exampleContainer, {}]}>
                        <Carousel
                            ref={c => _slider1Ref = c}
                            data={Entries.ENTRIES2}
                            renderItem={_renderItemWithParallax}
                            sliderWidth={sliderWidth}
                            itemWidth={itemWidth}
                            hasParallaxImages={true}
                            firstItem={active}
                            inactiveSlideScale={0.94}
                            inactiveSlideOpacity={0.7}
                            // inactiveSlideShift={20}
                            containerCustomStyle={[styles.slider]}
                            contentContainerCustomStyle={styles.sliderContentContainer}
                            loop={true}
                            loopClonesPerSide={2}
                            autoplay={false}
                            autoplayDelay={3000}
                            autoplayInterval={3000}
                            onSnapToItem={(index) => setActive(index)}
                        />
                        {/* <Pagination
                            dotsLength={Entries.ENTRIES2.length}
                            activeDotIndex={active}
                            containerStyle={styles.paginationContainer}
                            dotColor={'rgba(255, 255, 255, 1)'}
                            dotStyle={styles.paginationDot}
                            inactiveDotColor={'rgba(255, 255, 255, 0.5)'}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                            carouselRef={_slider1Ref}
                            tappableDots={!!_slider1Ref}
                        /> */}
                        <View style={{justifyContent: 'center', padding: 20, alignItems: 'center', marginBottom: 10}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon type={'FontAwesome'} name="quote-left" style={{fontSize: 14, color: 'white'}}/>
                                <Text 
                                    style={{
                                        color: 'rgba(255, 255, 255, 0.6)', 
                                        fontSize: 14, 
                                        fontStyle: 'italic', 
                                        flexWrap: 'wrap', 
                                        width: '90%',
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        textAlign: 'center'
                                    }}>
                                    Do not go where the path may lead, go instead where there is no path and leave a trail.                             
                                </Text>
                                <Icon type={'FontAwesome'} name="quote-right" style={{fontSize: 14, color: 'white'}}/>
                            </View>

                            <View style={{ borderBottomColor: 'rgba(255, 255, 255, 0.6)', borderBottomWidth: 1, height: 1, width: '30%', paddingTop: 20}}>

                            </View>
                        </View>
                    </View>
                {/* </ImageBackground> */}
            </View>

        );
    }

    return (
        <View style={{ flex: 1 }}>
            {ImageSlider()}
        </View>
    )
}


const TabBars = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Header
                transparent
                style={{
                    backgroundColor: 'rgb(46, 110, 175)',
                }}>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>

                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    >
                        <Icon type={'FontAwesome5'} style={{ fontSize: 25, color: 'white' }} name="arrow-left" />
                    </TouchableOpacity>
                    {/* <Image source={require('../../assets/wfp.png')} style={{ width: 40, height: 40, marginRight: 5 }} /> */}
                    <Title style={{ flex: 1, color: '#f7f5e4', fontWeight: 'bold', textAlign: 'left', paddingLeft: 20 }}>{props.route.params.headerTitle}</Title>
                </View>
            </Header>
            <StatusBar barStyle="light-content" backgroundColor='rgb(46, 110, 175)' />

            {/* <View style={{flex: 1, justifyContent: 'center', marginBottom: 80}}> */}
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let iconFamily;

                        switch (route.name) {
                            case 'Home':
                                iconName = 'home'
                                iconFamily = 'Entypo'
                                break
                            case 'Innovation':
                                iconName = 'md-cube'
                                iconFamily = 'Ionicons'
                                break
                            case 'Key Facts':
                                iconName = 'file-document-box-multiple'
                                iconFamily = 'MaterialCommunityIcons'
                                break
                            case 'Situation Overview':
                                iconName = 'view-grid'
                                iconFamily = 'MaterialCommunityIcons'
                                break
                            case 'Volunteers/Staff':
                                iconName = 'people-carry'
                                iconFamily = 'FontAwesome5'
                                break
                        }

                        return <Icon type={iconFamily} name={iconName} style={{ color: color, fontSize: size }} />
                    },
                })}
                tabBarOptions={{
                    style: {
                        height: 60,
                        paddingTop: 5,
                        paddingBottom: 5
                    },
                    activeTintColor: 'rgb(46, 110, 175)',
                    inactiveTintColor: 'gray',
                    keyboardHidesTabBar: true
                }}
            >
                <Tab.Screen name="Home" component={WFPResponse} />
                <Tab.Screen name="Innovation" component={WFPResponse} />
                <Tab.Screen name="Key Facts" component={WFPResponse} />
                <Tab.Screen name="Situation Overview" component={WFPResponse} />
            </Tab.Navigator>
            {/* </View> */}
        </View>
    )
}


export default TabBars