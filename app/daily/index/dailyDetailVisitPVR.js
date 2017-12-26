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
export default class DailyDetailVisitPVR extends Component {
    back() {
        this.props.navigation.goBack(null);
    }
    //拜访汇报
    dailyDtailVisitVR(){
        this.props.navigation.navigate('DailyDetailVisitVR')
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

                    <Text>正在定位</Text>

                    <TouchableHighlight
                        onPress={()=>this.dailyDtailVisitVR()}
                        underlayColor="#ffffff"
                        >
                        <View style={[com.row,com.aic]}>
                            <Text style={[com.cr]}>确定</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <ScrollView style={[com.flex,com.bgcf5]}>

                    <View>
                        <Image
                            style={[]} source={require('../../imgs/daily/position.png')}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

