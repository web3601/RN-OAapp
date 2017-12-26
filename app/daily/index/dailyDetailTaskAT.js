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
import wds from '../../public/css/css-window-single'
import ImagePicker from 'react-native-image-crop-picker';
export default class DailyDetailTaskAT extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    //新建模板
    dailyDetailTaskATNBT() {
        this.props.navigation.navigate('DailyDetailTaskATNBT')
    }
    //选择人员

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
                        onPress={()=>this.dailyDetailTaskATNBT()}
                        underlayColor="#ffffff"
                        >
                        <View style={[com.row,com.aic]}>
                            <Text style={[com.cr]}>新建模板</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <ScrollView style={[com.flex,com.bgcf5]}>

                    <View style={[com.mixbgcf3_nobt]}>
                        <Text style={[com.fs10,com.cbe]}>任务模板</Text>
                    </View>

                    <View style={[com.mix_nobt]}>
                        <View style={[com.row]}>
                            <Image
                                style={[com.tcf7,com.br200,com.wh32]}
                                source={require('../../imgs/daily/iconrw.png')}/>
                            <View style={[com.mgl5]}>
                                <Text>任务实施</Text>
                                <Text style={[com.fs10,com.cbe]}>任务实施明细及结果的汇报</Text>
                            </View>
                        </View>
                        <Text style={[com.bwr,com.fs10,com.cr,com.br,com.pdtb5,com.pdlr10]}>使用</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

