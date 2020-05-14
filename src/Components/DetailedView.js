import React, { useState } from 'react'
import { View, ScrollView, Platform, TouchableOpacity, Image, StatusBar, ImageBackground, StyleSheet, Dimensions } from 'react-native'
import { Header, Left, Body, Title, Icon, Text } from 'native-base';
import AccordionView from './AccordionView'

const { height, width } = Dimensions.get('window')


const DetailedView = (props) => {

    return (
        <View style={{flex: 1}}>
            <Header
                transparent
                style={{
                    backgroundColor: 'rgb(46, 110, 175)',
                }}>
                
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                
                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.goBack()
                        }}
                    >
                        <Icon type={'FontAwesome5'} style={{ fontSize: 25, color: 'white' }} name="arrow-left" />
                    </TouchableOpacity>
                    <Title style={{ flex: 1, color: '#f7f5e4', fontWeight: 'bold', textAlign: 'left', paddingLeft: 20 }}>{'Detailed View'}</Title>
                </View>
            </Header>
            <StatusBar barStyle="light-content" backgroundColor='rgb(46, 110, 175)' />
            
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{flex: 1}}>
                    <Image
                        source={require('../../assets/sample.jpg')}
                        style={{
                            flex: 1, height: 1*height/3, width: undefined, resizeMode: 'cover'
                        }}
                    />
                    <View style={{position: 'absolute', backgroundColor: 'rgba(0,0,0,0.7)', width: '100%', bottom: 0, padding: 5}}>
                        {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon type={'MaterialIcons'} style={{ fontSize: 24, color: 'rgb(46, 110, 175)' }} name="location-on" />
                            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'rgb(46, 110, 175)'}}>
                                Dhaka
                            </Text>
                        </View> */}
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', padding: 5}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', letterSpacing: 0.5, color: 'white'}}>
                                {`Refugee Information`.toUpperCase()}
                            </Text>
                        </View>
                        <View style={{padding: 5, flexDirection: 'row'}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon type={'Ionicons'} style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)' }} name="md-time"/>
                                <Text note style={{fontSize: 14, fontWeight: 'bold', color: 'rgba(255,255,255,0.7)', paddingLeft: 5, paddingRight: 20}}>
                                    3 Days
                                </Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon type={'Ionicons'} style={{ fontSize: 20, color: 'rgba(255,255,255,0.7)' }} name="ios-people"/>
                                <Text note style={{fontSize: 14, fontWeight: 'bold', color: 'rgba(255,255,255,0.7)', paddingLeft: 5}}>
                                    20 People
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-start', padding: 10}}>
                    <View style={{padding: 5, flexDirection: 'column'}}>
                        <Text style={{flexWrap: 'wrap', fontSize: 16, paddingVertical: 10, color: 'grey', letterSpacing: 0.8, fontStyle: 'normal'}}>
                            WFP is engaging with multiple partners through Communications with Communities working group to explore the 
                            use of WFP food assistance outlets as a platform to distribute other common resources and messaging to reache 
                            100 percent of households in the camps.
                        </Text>
                    </View>
                </View>
                <AccordionView {...props}/>
            </ScrollView>

        </View>
    )
}


export default DetailedView