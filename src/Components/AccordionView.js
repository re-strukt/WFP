import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import {
    Icon,
} from 'native-base'

const { width, height } = Dimensions.get('window');


const dataArray = [
    { 
        id: 123, 
        color: '#1e4771',
        title: "DRR", 
        content: "Present: Talk a little bit about what your current role is, the scope of it, and perhaps a big recent accomplishment. Past: Tell the interviewer how you got there and/or mention previous experience that's relevant to the job and company you're applying for." 
    },
    { 
        id: 123, 
        color: '#225281',
        title: "Self-Reliance", 
        content: "Most companies have an FAQ — or Frequently Asked Questions — page on their website. Some may even have a few pages depending on the products or services they provide." 
    },
    { 
        id: 123, 
        color: '#275c91',
        title: "SMEC", 
        content: "Pronounced as separate letters, or as and short for frequently asked questions, a FAQ is an online document that poses a series of common questions and answers on a specific topic. FAQs originated in Usenet groups as a way to answer questions about the rules of the service." 
    },
    { 
        id: 123, 
        color: '#2e6eaf',
        title: "SwC", 
        content: "Present: Talk a little bit about what your current role is, the scope of it, and perhaps a big recent accomplishment. Past: Tell the interviewer how you got there and/or mention previous experience that's relevant to the job and company you're applying for." 
    },
    { 
        id: 123, 
        color: '#337ac1',
        title: "Safe Plus", 
        content: "Most companies have an FAQ — or Frequently Asked Questions — page on their website. Some may even have a few pages depending on the products or services they provide." 
    },
    { 
        id: 123, 
        color: '#3e85cc',
        title: "GFA", 
        content: "Most companies have an FAQ — or Frequently Asked Questions — page on their website. Some may even have a few pages depending on the products or services they provide." 
    },
    { 
        id: 123, 
        color: '#4e8fd0',
        title: "Nutrition", 
        content: "Pronounced as separate letters, or as and short for frequently asked questions, a FAQ is an online document that poses a series of common questions and answers on a specific topic. FAQs originated in Usenet groups as a way to answer questions about the rules of the service." 
    },
    
    // { id: 123, title: "24/10/2020 - 25/10/2020", content: "Pronounced as separate letters, or as and short for frequently asked questions, a FAQ is an online document that poses a series of common questions and answers on a specific topic. FAQs originated in Usenet groups as a way to answer questions about the rules of the service." },
    // { id: 123, title: "30/10/2020 - 31/10/2020", content: "Present: Talk a little bit about what your current role is, the scope of it, and perhaps a big recent accomplishment. Past: Tell the interviewer how you got there and/or mention previous experience that's relevant to the job and company you're applying for." },
    // { id: 123, title: "23/10/2020 - 27/10/2020", content: "Most companies have an FAQ — or Frequently Asked Questions — page on their website. Some may even have a few pages depending on the products or services they provide." },
    // { id: 123, title: "24/10/2020 - 25/10/2020", content: "Pronounced as separate letters, or as and short for frequently asked questions, a FAQ is an online document that poses a series of common questions and answers on a specific topic. FAQs originated in Usenet groups as a way to answer questions about the rules of the service." },
    // { id: 123, title: "30/10/2020 - 31/10/2020", content: "Present: Talk a little bit about what your current role is, the scope of it, and perhaps a big recent accomplishment. Past: Tell the interviewer how you got there and/or mention previous experience that's relevant to the job and company you're applying for." },
    // { id: 123, title: "23/10/2020 - 27/10/2020", content: "Most companies have an FAQ — or Frequently Asked Questions — page on their website. Some may even have a few pages depending on the products or services they provide." },
    // { id: 123, title: "24/10/2020 - 25/10/2020", content: "Pronounced as separate letters, or as and short for frequently asked questions, a FAQ is an online document that poses a series of common questions and answers on a specific topic. FAQs originated in Usenet groups as a way to answer questions about the rules of the service." },
    // { id: 123, title: "30/10/2020 - 31/10/2020", content: "Present: Talk a little bit about what your current role is, the scope of it, and perhaps a big recent accomplishment. Past: Tell the interviewer how you got there and/or mention previous experience that's relevant to the job and company you're applying for." },
    // { id: 123, title: "23/10/2020 - 27/10/2020", content: "Most companies have an FAQ — or Frequently Asked Questions — page on their website. Some may even have a few pages depending on the products or services they provide." },
    // { id: 123, title: "24/10/2020 - 25/10/2020", content: "Pronounced as separate letters, or as and short for frequently asked questions, a FAQ is an online document that poses a series of common questions and answers on a specific topic. FAQs originated in Usenet groups as a way to answer questions about the rules of the service." },
    // { id: 123, title: "30/10/2020 - 31/10/2020", content: "Present: Talk a little bit about what your current role is, the scope of it, and perhaps a big recent accomplishment. Past: Tell the interviewer how you got there and/or mention previous experience that's relevant to the job and company you're applying for." },
];

class AccordionView extends Component {
    constructor(props) {
        super(props)
    }

    _renderHeader = (item, expanded) => {
        return (
            <View style={{
                flexDirection: "row",
                padding: 10,
                margin: 10,
                // justifyContent: "space-between",
                alignItems: "center",
                // backgroundColor: "tomato",
                // borderWidth: 0.5,
                // borderColor: 'grey'
            }}
            >
                <View>
                    {expanded
                        ? <Icon type={"MaterialIcons"} style={{ fontSize: 25, color: 'rgba(0,0,0,0.6)' }} name="keyboard-arrow-up" />
                        : <Icon type={"MaterialIcons"} style={{ fontSize: 25, color: 'rgba(0,0,0,0.6)' }} name="keyboard-arrow-down" />}
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ color: 'rgba(0,0,0,0.6)', fontSize: 20, fontWeight: 'bold', paddingLeft: 10 }}>
                        {item.title}
                    </Text>
                </View>
            </View>
        );
    }
    _renderContent = (item) => {
        return (
            <View
                style={{
                    backgroundColor: "white",
                    padding: 10,
                    margin: 10,
                    fontStyle: "italic",
                }}
            >

                <Text style={{ color: 'grey' }}>
                    {item.content}
                </Text>
            </View>
        );
    }

    render() {

        return (
            <View>
                {/* <Accordion
                    dataArray={dataArray}
                    animation={true}
                    expanded={true}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                /> */}
                {
                    dataArray.map(data=>{
                        return (
                            <TouchableOpacity
                                style={{
                                    padding: 15,
                                    marginHorizontal: 15,
                                    marginVertical: 10,
                                    borderRadius: 10,
                                    backgroundColor: data.color,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                                onPress={()=>{
                                    this.props.navigation.navigate('BlogView')
                                }}
                            >
                                <Text style={{color: 'white', fontSize: 16}}>
                                    {data.title}
                                </Text>
                                <Icon type={"FontAwesome5"} style={{ fontSize: 20, color: 'white' }} name="arrow-right" />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: { flex: 1 },
});

export default AccordionView