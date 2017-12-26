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
import wds from '../../public/css/css-window-single.js';
import Modal from 'react-native-modal'
import CheckBox from 'react-native-check-box'
export default class DailyMy extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            isModalVisibleTwo: false,
            status: 1,
            status_: 4,
            _status: 10,
            show: false,
            showTwo: false,
            value: false,
            text: '',
            tab: 1,
            chooseStaff: 1,
        };
    }

    setVisibleModal(visible) {
        this.setState({show: visible});
    }

    dailyDetailT() {
        this.props.navigation.navigate('DailyDetailT')
    }

    save() {
        alert('save');
    }

    onSelect(index, value) {
        this.setState({
            //text: `Selected index: ${index} , value: ${value}`
            text: ` ${value}`
        })
    }

    state = {
        isModalVisible: false
    }

    _showModal = () => this.setState({isModalVisible: true})

    render() {
        return (
            <View style={[com.flex]}>
                <ScrollView style={[,com.flex,{height:screenH}]}>
                    <View style={[com.bckf5,com.btwc,com.btwc]}>
                        {/*日历*/}
                        <View style={[com.hh2,com.aic,com.jcc,com.bgcfff,com.mgt2,com.btweb]}>
                            <Text>这是日历区域</Text>
                        </View>

                        <View style={[]}>
                            <View style={[com.mixf3,com.btbweb]}>
                                <Text style={[com.cbe,com.fs10]}>07-18 周二</Text>
                            </View>
                            <TouchableHighlight
                                style={[com.bgcfff]}
                                onPress={()=>{this.dailyDetailT()}}
                                underlayColor="#f5f5f5"
                                >
                                <View style={[com.row,com.aic,com.pdt5l15,com.bbwc]}>
                                    <View style={[com.mgr10]}>
                                        <Text style={[com.cbe]}>16:52</Text>
                                    </View>
                                    <View style={[com.row,com.aic,com.jcsb,com.flex]}>
                                        <View>
                                            <Text>烹羊宰牛且为乐</Text>
                                            <View style={[com.row,com.aic,com.mgt5]}>
                                                <Text style={[com.mgr5,com.cfff,com.fs10,com.bgcr,com.pdt1l10,com.br10]}>会议</Text>
                                                <Text style={[com.cb4,com.fs10]}>刘明</Text>
                                            </View>
                                        </View>
                                        <View style={[]}>
                                            <Text style={[com.c62,com.fs10]}>有进展</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={[com.bgcfff]}
                                onPress={()=>{this.dailyDetailT()}}
                                underlayColor="#f5f5f5"
                                >
                                <View style={[com.row,com.aic,com.pdt5l15,com.bbwc]}>
                                    <View style={[com.mgr10]}>
                                        <Text style={[com.cbe]}>16:52</Text>
                                    </View>
                                    <View style={[com.row,com.aic,com.jcsb,com.flex]}>
                                        <View>
                                            <Text>会须一饮三百杯</Text>
                                            <View style={[com.row,com.aic,com.mgt5]}>
                                                <Text style={[com.mgr5,com.cfff,com.fs10,com.bgc24,com.pdt1l10,com.br10]}>拜访</Text>
                                                <Text style={[com.cb4,com.fs10]}>刘明</Text>
                                            </View>
                                        </View>
                                        <View style={[]}>
                                            <Text style={[com.cr,com.fs10]}>无进展</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={[com.bgcfff]}
                                onPress={()=>{this.dailyDetailT()}}
                                underlayColor="#f5f5f5"
                                >
                                <View style={[com.row,com.aic,com.pdt5l15,com.bbwc]}>
                                    <View style={[com.mgr10]}>
                                        <Text style={[com.cbe]}>16:52</Text>
                                    </View>
                                    <View style={[com.row,com.aic,com.jcsb,com.flex]}>
                                        <View>
                                            <Text>人如风后入江云</Text>
                                            <View style={[com.row,com.aic,com.mgt5]}>
                                                <Text style={[com.mgr5,com.cfff,com.fs10,com.bgc37,com.pdt1l10,com.br10]}>任务</Text>
                                                <Text style={[com.cb4,com.fs10]}>刘明</Text>
                                            </View>
                                        </View>
                                        <View style={[]}>
                                            <Text style={[com.c62,com.fs10]}>有进展</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                style={[com.bgcfff]}
                                onPress={()=>{this.dailyDetailT()}}
                                underlayColor="#f5f5f5"
                                >
                                <View style={[com.row,com.aic,com.pdt5l15,com.bbwc]}>
                                    <View style={[com.mgr10]}>
                                        <Text style={[com.cbe]}>16:52</Text>
                                    </View>
                                    <View style={[com.row,com.aic,com.jcsb,com.flex]}>
                                        <View>
                                            <Text>情似雨馀粘地絮</Text>
                                            <View style={[com.row,com.aic,com.mgt5]}>
                                                <Text style={[com.mgr5,com.cfff,com.fs10,com.bgc24,com.pdt1l10,com.br10]}>临时拜访</Text>
                                                <Text style={[com.cb4,com.fs10]}>刘明</Text>
                                            </View>
                                        </View>
                                        <View style={[]}>
                                            <Text style={[com.cbe,com.fs10]}>已结束</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

