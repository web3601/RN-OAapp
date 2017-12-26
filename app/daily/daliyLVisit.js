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
import com from '../public/css/css-com';
import wds from '../public/css/css-window-single.js';
import Modal from 'react-native-modal'
export default class Log extends Component {
    back() {
        this.props.navigation.goBack(null);
    }

    constructor(props) {
        super(props);
        this.state = {

            isModalVisible: false,
            status: 1,
            status_: 4,
            show: false,


        };
    }


    render() {
        return (


            <View style={[com.flex]}>
                {/*nav*/}
                <View style={[com.row,com.pdt5l15,com.bgcfff,com.jcsb]}>
                    <TouchableOpacity style={[]}
                                      underlayColor="transparent"
                                      onPress={() => { this.back()}}>
                    <Text style={[com.cr]}>取消</Text>
                    </TouchableOpacity>
                    <Text>新建线路拜访</Text>
                        <TouchableOpacity style={[]}
                                          underlayColor="transparent"
                                          onPress={() => { alert('完成')}}>
                    <Text style={[com.cr]}>完成</Text>
                        </TouchableOpacity>
                </View>


                <ScrollView>

                </ScrollView>
            </View>
        )
            ;
    }
}

