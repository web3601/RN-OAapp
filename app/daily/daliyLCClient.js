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
export default class Log extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    finish() {
        alert('完成')
    }

    //客户
    daliyNBClient() {
        this.props.navigation.navigate('DaliyNBClient')
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
                <View style={[com.row,com.pdt5l15,com.bgcfff,com.jcsb,com.aic]}>
                    <TouchableOpacity style={[]}
                                      underlayColor="transparent"
                                      onPress={() => { this.back()}}>
                        <Text style={[com.cr,com.fs12]}>取消</Text>
                    </TouchableOpacity>
                    <Text>选择客户</Text>
                    <TouchableOpacity style={[]}
                                      underlayColor="transparent"
                                      onPress={() => { this.daliyNBClient()}}>
                        <Text style={[com.cr,com.fs12]}>新增客户</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={[com.flex]}>
                    <View style={[com.row,com.aic,com.bgcfff,com.btwc,com.pdt5l15]}>
                        <Image style={[com.wh14,com.tcccc]} source={require('../imgs/search.png')}/>
                        <TextInput
                            style={[com.bwc,com.br5,com.mglr10,{height: 30,padding:5,width:screenW*0.75}]}
                            underlineColorAndroid={'transparent'}
                            numberOfLines={1}
                            placeholder='搜索'
                            placeholderTextColor='#bebebe'
                            secureTextEntry={false}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            />
                        <TouchableOpacity style={[]}
                                          underlayColor="transparent"
                                          onPress={() => { this.back()}}>
                            <Text style={[com.cbe]}>取消</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[com.pdt5l15,com.bbwc,com.bgcfff]}>
                        <Text style={[com.fs12]}>灼灼荷花瑞</Text>
                    </View>
                    <View style={[com.pdt5l15,com.bbwc,com.bgcfff]}>
                        <Text style={[com.fs12]}>亭亭出水中</Text>
                    </View>
                    <View style={[com.pdt5l15,com.bbwc,com.bgcfff]}>
                        <Text style={[com.fs12]}>一茎孤引绿</Text>
                    </View>
                    <View style={[com.pdt5l15,com.bbwc,com.bgcfff]}>
                        <Text style={[com.fs12]}>双影共分红</Text>
                    </View>
                    <View style={[com.pdt5l15,com.bbwc,com.bgcfff]}>
                        <Text style={[com.fs12]}>色夺歌人脸</Text>
                    </View>
                    <View style={[com.pdt5l15,com.bbwc,com.bgcfff]}>
                        <Text style={[com.fs12]}>香乱舞衣风</Text>
                    </View>
                    <View style={[com.pdt5l15,com.bbwc,com.bgcfff]}>
                        <Text style={[com.fs12]}>名莲自可念</Text>
                    </View>
                    <View style={[com.pdt5l15,com.bbwc,com.bgcfff]}>
                        <Text style={[com.fs12]}>况复两心同</Text>
                    </View>
                </ScrollView>
            </View>
        )
            ;
    }
}

