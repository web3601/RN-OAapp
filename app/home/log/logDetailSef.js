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
    TouchableWithoutFeedback,
    } from 'react-native';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
import com from '../../public/css/css-com';
export default class Log extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        const {state} = this.props.navigation;
        return (
            <View style={[com.flex,com.bgcf3]}>

                {/* NAV */}
                <View style={[com.row,com.jcsb,com.pdlr5,com.bgcfff,com.bbwcc,com.aic,com.h30,]}>
                    <TouchableHighlight
                        style={[com.w90]}
                        onPress={()=>this.back()}
                        underlayColor="#f5f5f5"
                        >
                        <View style={[com.row,]}>
                            <Image source={require('../../imgs/navxy.png')}/>
                            <Text style={[com.mgr15,com.cr]}>返回</Text>
                            <Text style={[com.cr]}>关闭</Text>
                        </View>
                    </TouchableHighlight>
                    <Text style={{left:-20}}>{state.params.title}的月报</Text>
                    <TouchableHighlight
                        style={[]}
                        onPress={()=>alert('个人信息页')}
                        underlayColor="#f3f3f3"
                        >
                        <View style={[com.jcfe,]}>
                            <Image style={[com.wh20,com.tcr]} source={require('../../imgs/log/iconth.png')}/>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={[com.pdlr15]}>
                    <View style={[com.row,com.aic]}>
                        <Image style={[com.wh28,com.tcccc]} source={require('../../imgs/log/iconld.png')}/>
                        <Text style={[com.cbe,com.fs16]}>2017-8-7</Text>
                    </View>
                    <View style={[com.bgcfff,com.bweb,com.br10,com.pd10]}>
                        <Text style={[com.cbe]}>今日未提交</Text>
                    </View>

                </View>
            </View>

        );
    }
}


