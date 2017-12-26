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
    daliyLCClient() {
        this.props.navigation.navigate('DaliyLCClient')
    }

    //客户
    daliyChoosePeopleAnd() {
        this.props.navigation.navigate('DaliyChoosePeopleAnd')
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
                    <Text>新建会议</Text>
                    <TouchableOpacity style={[]}
                                      underlayColor="transparent"
                                      onPress={() => { this.finish()}}>
                        <Text style={[com.cr,com.fs12]}>完成</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={[com.flex]}>

                    <TouchableOpacity
                        onPress={() => { this.daliyLCClient()}}
                        underlayColor="#fff">
                        <View style={[com.mix,com.aic]}>
                            <Text>客户</Text>
                            <View style={[com.row,com.aic]}>
                                <Text style={[com.cbe,com.mgr5]}>选择</Text>
                                <Image style={[com.wh14,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[]}
                                      onPress={() => { this.daliyChoosePeopleAnd()}}
                                      underlayColor="#fff">
                        <View style={[com.mix,com.mgt5,com.aic]}>
                            <Text>执行人</Text>
                            <View style={[com.row,com.aic]}>
                                <Text style={[com.cbe,com.mgr5]}>我自己</Text>
                                <Image style={[com.wh14,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>


                    <View style={[com.mixf_nob,com.jcsb,com.mgt5,com.aic,com.bbwc]}>
                        <Text>全天</Text>
                        <View style={[com.row,com.aic]}>
                            <Switch
                                style={[]}
                                //动态改变value
                                value={this.state.value}
                                //当切换开关室回调此方法
                                onValueChange={(value)=>{this.setState({value: value})}}
                                />
                        </View>
                    </View>
                    <View style={[com.row,com.jcsb,com.bgcfff,com.pd3]}>
                        <TouchableOpacity style={[]}
                                          onPress={() => { alert('客户选择')}}
                                          underlayColor="#fff">
                            <View style={[com.jcc,com.pd15,com.aic,com.brwc]}>
                                <Text>起止时间</Text>
                                <Text style={[com.fs10,com.pdt2,com.pdl5,com.pdr5,com.pdb2,com.br15,com.bgcr,com.cfff]}>查看可用时间</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={[com.flex,com.ww7]}>
                            <TouchableOpacity style={[]}
                                              onPress={() => { alert('客户选择')}}
                                              underlayColor="#fff">
                                <View style={[com.pdtb10,com.pdlr10,com.row,com.bbwc,com.aic,com.jcfe]}>
                                    <Text style={[com.cbe,com.fs12]}>2017-7-12 13:35:27</Text>
                                    <Image style={[com.wh14,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={[]}
                                              onPress={() => { alert('客户选择')}}
                                              underlayColor="#fff">
                                <View style={[com.pdtb10,com.pdlr10,com.row,com.aic,com.jcfe]}>
                                    <Text style={[com.cbe,com.fs12]}>2017-7-12 13:35:27</Text>
                                    <Image style={[com.wh14,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TouchableOpacity style={[]}
                                      onPress={() => { alert('客户选择')}}
                                      underlayColor="#fff">
                        <View style={[com.row,com.jcsb,com.bgcfff,com.pdt5l15,com.btbwc6]}>
                            <Text>拜访描述</Text>
                            <Image style={[com.wh14,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                        </View>
                    </TouchableOpacity>

                    <View style={[com.mgt5]}>
                        <TouchableOpacity style={[]}
                                          onPress={() => { alert('客户选择')}}
                                          underlayColor="#fff">
                            <View style={[com.row,com.jcsb,com.bgcfff,com.pdt5l15,com.btwc]}>
                                <Text>项目</Text>

                                <View style={[com.row,com.aic]}>
                                    <Text style={[com.fs10,com.cbe]}>可选项目</Text>
                                    <Image style={[com.wh12,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[]}
                                          onPress={() => { alert('客户选择')}}
                                          underlayColor="#fff">
                            <View style={[com.row,com.jcsb,com.bgcfff,com.pdt5l15,com.btwc]}>
                                <Text>关联商机</Text>
                                <View style={[com.row,com.aic]}>
                                    <Text style={[com.fs10,com.cbe]}>可选商机</Text>
                                    <Image style={[com.wh12,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[]}
                                          onPress={() => { alert('客户选择')}}
                                          underlayColor="#fff">
                            <View style={[com.row,com.jcsb,com.bgcfff,com.pdt5l15,com.btwc]}>
                                <Text>指定汇报模板</Text>
                                <View style={[com.row,com.aic]}>
                                    <Text style={[com.fs10,com.cbe]}>添加</Text>
                                    <Image style={[com.wh12,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={[com.mgt5]}>
                        <TouchableOpacity style={[]}
                                          onPress={() => { alert('客户选择')}}
                                          underlayColor="#fff">
                            <View style={[com.row,com.jcsb,com.bgcfff,com.pdt5l15,com.btwc]}>
                                <Text>日程重复</Text>

                                <View style={[com.row,com.aic]}>
                                    <Text style={[com.fs10,com.cbe]}>无</Text>
                                    <Image style={[com.wh12,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={[]}
                                          onPress={() => { alert('客户选择')}}
                                          underlayColor="#fff">
                            <View style={[com.row,com.jcsb,com.bgcfff,com.pdt5l15,com.btwc]}>
                                <Text>提醒</Text>
                                <View style={[com.row,com.aic]}>
                                    <Text style={[com.fs10,com.cbe]}>15分钟前</Text>
                                    <Image style={[com.wh12,com.tcccc]} source={require('../imgs/jtxr.png')}/>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
            </View>
        )
            ;
    }
}

