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
    CheckBox,
    } from 'react-native';
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
import com from '../../public/css/css-com';
import Modal from 'react-native-modal'
export default class DailyDetailTaskCT extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    //拜访汇报
    dailyDtailTaskAT() {
        this.props.navigation.navigate('DailyDetailTaskAT')
    }
    //拜访汇报
    dailyDetailTaskCTVR() {
        this.props.navigation.navigate('DailyDetailTaskCTVR')
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={[com.flex,com.bgcf5]}>
                {/*nav*/}
                <View style={[com.row,com.aic,com.jcsb,com.pdt5l15,com.bbwc,com.bgcfff]}>
                    <TouchableHighlight
                        onPress={()=>this.back()}
                        underlayColor="#ffffff"
                        >
                        <View style={[com.row,com.aic]}>
                            <Image
                                style={[com.tcr,com.wh16,]} source={require('../../imgs/jtxz.png')}/>
                            <Text style={[com.cr]}>返回</Text>
                        </View>
                    </TouchableHighlight>

                    <Text>选择模板</Text>

                    <TouchableHighlight
                        onPress={()=>this.dailyDtailTaskAT()}
                        underlayColor="#ffffff"
                        >
                        <View style={[com.row,com.aic]}>
                            <Text style={[com.cr]}>添加模板</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <ScrollView style={[com.flex,com.bgcf5]}>

                    {/*搜索*/}
                    <View style={[com.row,com.pdt5l15,com.aic]}>
                        <Image
                            style={[com.tcccc,com.wh16,com.mgr5]} source={require('../../imgs/search.png')}/>
                        <TextInput
                            style={[com.FS12,com.PDB0,com.PDT0,{height: 20,width:screenW*0.85,}]}
                            underlineColorAndroid={'transparent'}
                            placeholder='搜索'
                            secureTextEntry={false}
                            placeholderTextColor='#bebebe'
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            />
                    </View>

                    <View style={[com.pdt5l15,com.bgcfff,com.btweb]}>
                        <TouchableHighlight
                            onPress={()=>this.dailyDetailTaskCTVR()}
                            underlayColor="#ffffff"
                            >
                            <View style={[com.row,com.pdtb5,com.aic,com.bbweb]}>
                                <Image
                                    style={[com.tcf7,com.wh32,com.mgr5]}
                                    source={require('../../imgs/daily/iconrw.png')}/>
                                <View>
                                    <Text>任务汇报</Text>
                                    <Text style={[com.fs10,com.cbe]}>日常工作内容汇报</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.dailyDetailTaskCTVR()}
                            underlayColor="#ffffff"
                            >
                            <View style={[com.row,com.pdtb5,com.aic,com.bbweb]}>
                                <Image
                                    style={[com.tcf7,com.wh32,com.mgr5]}
                                    source={require('../../imgs/daily/iconrw2.png')}/>
                                <View>
                                    <Text>任务实施</Text>
                                    <Text style={[com.fs10,com.cbe]}>任务实施明细及结果的汇报</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.dailyDetailTaskCTVR()}
                            underlayColor="#ffffff"
                            >
                            <View style={[com.row,com.pdtb5,com.aic,com.bbweb]}>
                                <Image
                                    style={[com.tcf7,com.wh32,com.mgr5]}
                                    source={require('../../imgs/daily/iconrw.png')}/>
                                <View style={[]}>
                                    <Text>任务简报</Text>
                                    <Text style={[com.fs10,com.cbe]}>日常工作内容简单汇报</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

