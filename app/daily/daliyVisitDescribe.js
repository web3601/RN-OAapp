import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    Platform,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Switch,
    TouchableWithoutFeedback,
    CheckBox,
    } from 'react-native';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
import com from '../public/css/css-com';
import wds from '../public/css/css-window-single.js';
import Modal from 'react-native-modal'
export default class DaliyNBVisit extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    finish() {
        alert('完成')
    }

    //客户
    daliyLCClient(){
        this.props.navigation.navigate('DaliyLCClient')
    }
    //客户
    daliyChoosePeopleAnd(){
        this.props.navigation.navigate('DaliyChoosePeopleAnd')
    }
    //客户
    daliyLookTime(){
        this.props.navigation.navigate('DaliyLookTime')
    }
    constructor(props) {
        super(props);
        this.state = {
            value: false
        };
    }

    render() {
        return (
            <View style={[com.flex]}>
                {/*nav*/}
                <View style={[com.row,com.pdt5l15,com.bgcfff,com.bbwc,com.jcsb,com.aic]}>
                    <TouchableOpacity style={[]}
                                      underlayColor="transparent"
                                      onPress={() => { this.back()}}>
                        <Text style={[com.cr,com.fs12]}>取消</Text>
                    </TouchableOpacity>
                    <Text>拜访描述</Text>
                    <TouchableOpacity style={[]}
                                      underlayColor="transparent"
                                      onPress={() => { this.finish()}}>
                        <Text style={[com.cr,com.fs12]}>完成</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={[com.flex]}>
                    <TextInput
                        style={[com.bgcfff,com.bbwc,com.pd3,{height: 150,width:screenW,}]}
                        underlineColorAndroid={'transparent'}
                        placeholder='请输入描述信息'
                        secureTextEntry={false}
                        multiline={true}
                        autoFocus={true}
                        placeholderTextColor={'#bdbdbd'}
                        textAlignVertical='top'
                        onChangeText={(ss) => this.setState({ss})} value={this.state.ss}
                        />


                </ScrollView>
            </View>
        )
            ;
    }
}

