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
export default class DailyDetailT extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={[com.flex,com.bgcf5]}>
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

                    <Text>拜访详情</Text>

                    <Image
                        style={[com.tcr,com.wh32,com.mgr5]} source={require('../../imgs/slh.png')}/>
                </View>
                <ScrollView style={[com.flex,com.bgcf5]}>
                    <View style={[com.mix,com.mgt5]}>
                        <View>
                            <View style={[com.row,]}>
                                <Text style={[{height:22,borderLeftWidth:2,borderColor:'#e4393c'}]}></Text>
                                <Text style={[com.mgr10,com.mgl10,com.fs16]}>会议报告</Text>
                                <View style={[com.aic,]}>
                                    <Text
                                        style={[com.cr,com.bwcd,com.br,com.fwb,com.fs10,com.pdl1,com.pdt1]}>详情</Text>
                                </View>
                            </View>
                            <View style={[com.row,com.aic,com.mgt10]}>
                                <Image
                                    style={[com.tcr,com.wh12,com.mgr5]} source={require('../../imgs/iconsj.png')}/>
                                <Text style={[com.fs10]}>07月10日</Text>
                                <Text style={[com.fs10,com.mglr5]}>周一</Text>
                                <Text style={[com.fs10]}>全天</Text>
                            </View>
                        </View>
                        <View style={[com.aic]}>
                            <Image
                                style={[com.tcr,com.wh16,com.mgr5]} source={require('../../imgs/sc2.png')}/>
                            <Text style={[com.cbe,com.fs10]}>标记结束</Text>
                        </View>
                    </View>

                    <View style={[com.pd15,com.bgcfff,com.bbwc]}>

                    </View>
                    <TouchableHighlight
                        onPress={()=>alert(1)}
                        underlayColor="#fff"
                        >
                        <View style={[com.row,com.jcsb,com.aic,com.pdt10l15,com.bgcfff,]}>
                            <Text>人员</Text>
                            <View style={[com.row,com.aic]}>
                                <Text>我自己</Text>
                                <Image
                                    style={[com.tcccc,com.wh16,]} source={require('../../imgs/jtxr.png')}/>
                            </View>
                        </View>

                    </TouchableHighlight>


                    <View style={[com.mixbgf3]}>
                        <Text style={[com.fs12,com.cbe]}>工作进展</Text>
                    </View>
                    <View style={[com.bgcfff,com.pd15,com.bbweb,]}>
                        <Text style={[com.cbe]}>暂无工作进展</Text>
                    </View>

                    <View style={[com.btbweb,com.mgt5]}>
                        <View style={[com.row,com.jcsb,com.pdt10l15,com.bgcfff,com.bbweb]}>
                            <Text style={[com.cbe,com.fs12]}>共评论(0)</Text>
                            <Image
                                style={[com.tcr,com.wh16,]} source={require('../../imgs/chatres.png')}/>
                        </View>
                        <View style={[com.bgcfff,com.pd15]}>
                            <Text style={[com.cab]}>
                                暂无评论
                            </Text>
                        </View>
                    </View>

                    {/*历史记录*/}
                    <View style={[com.bgcfff,com.mgt5,]}>
                        <View style={[com.pdt5l15,com.btbweb]}>
                            <Text style={[com.cbe]}>历史记录</Text>
                        </View>
                        <View style={[com.row,com.pdt10l15,com.bbweb]}>
                            <View style={[com.mgr5]}>
                                <Text>07-10</Text>
                                <Text>09:01</Text>
                            </View>
                            <Text
                                style={[com.h3,com.mgt10,com.mgr10,com.mgl10,com.br200,{borderWidth:3,borderColor:'#378CF0'}]}></Text>
                            <View style={[]}>
                                <Text>尼大叶</Text>
                                <Text style={[com.fs12,com.mgt5]}>创建拜访</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>

                <TouchableHighlight
                    onPress={()=>alert('跳转正在定位页面...')}
                    underlayColor="#fff"
                    >
                    <View style={[com.aic,com.bgcfff,com.pd10,com.btweb]}>
                        <Text style={[com.cr]}>完善拜访记录</Text>
                    </View>
                </TouchableHighlight>


            </View>
        )
    }
}

