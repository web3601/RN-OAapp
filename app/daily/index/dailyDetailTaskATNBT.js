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
export default class DailyDetailTaskATNBT extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    //新建模板
    dailyDetailTaskATNBTSet() {
        this.props.navigation.navigate('DailyDetailTaskATNBTSet')
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

                    <Text>创建任务模板</Text>

                    <TouchableHighlight
                        onPress={()=>this.dailyDetailTaskATNBTSet()}
                        underlayColor="#ffffff"
                        >
                        <View style={[com.row,com.aic]}>
                            <Text style={[com.cr]}>下一步</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <ScrollView style={[com.flex,com.bgcf5]}>

                </ScrollView>
            </View>
        )
    }
}

