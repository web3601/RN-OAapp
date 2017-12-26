/**
 * Created by Administrator on 2017/7/17.
 */
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
                    <Text>提醒</Text>
                    <TouchableOpacity style={[]}
                                      underlayColor="transparent"
                                      onPress={() => { this.finish()}}>
                        <Text style={[com.cr,com.fs12]}>确定</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={[com.flex]}>
                    <View style={[com.mix,com.mgtb5]}>
                        <Text>不提醒</Text>
                    </View>
                    <View style={[com.mixf_nob,com.btwc]}>
                        <Text>开始工作时</Text>
                    </View>
                    <View style={[com.mixf_nob,com.btwc]}>
                        <Text>5分钟前</Text>
                    </View>
                    <View style={[com.mixf_nob,com.btwc]}>
                        <Text>15分钟前</Text>
                    </View>
                    <View style={[com.mixf_nob,com.btwc]}>
                        <Text>30分钟前</Text>
                    </View>
                    <View style={[com.mixf_nob,com.btwc]}>
                        <Text>1小时前</Text>
                    </View>
                    <View style={[com.mixf_nob,com.btwc]}>
                        <Text>2小时前</Text>
                    </View>
                    <View style={[com.mixf_nob,com.btwc]}>
                        <Text>1天前</Text>
                    </View>

                    <View style={[com.mixf3_nob]}>
                        <Text style={[com.fs10,com.cbe]}>默认使用工作消息提醒</Text>
                    </View>

                    <View style={[com.mix]}>
                        <Text>必达提醒</Text>
                        <Switch
                            style={[]}
                            //动态改变value
                            value={this.state.value}
                            //当切换开关室回调此方法
                            onValueChange={(value)=>{this.setState({value: value})}}
                            />

                    </View>

                    <View style={[com.mixf3_nob]}>
                        <Text style={[com.fs10,com.cbe]}>第一次提醒上升强度,重要事情消息必达</Text>
                    </View>



                </ScrollView>
            </View>
        )
            ;
    }
}

